#!/usr/bin/env node

import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import { program } from 'commander';

// Define available templates
const TEMPLATES = [
    { name: 'React App', value: 'react-eslint' },
    { name: 'Next App', value: 'next-eslint' },
];

// Define ignored files and directories
const IGNORED_FILES = ['.vscode', '.idea', 'node_modules'];

/**
 * Check if the directory is empty (excluding ignored files).
 * @param {string} dir - The directory path.
 * @returns {Promise<boolean>} - True if empty, false otherwise.
 */
async function isDirectoryEmpty(dir) {
    if (!(await fs.pathExists(dir))) return true;

    const files = await fs.readdir(dir);
    return files.every(file => IGNORED_FILES.includes(file));
}

/**
 * Clear the target directory, keeping ignored files.
 * @param {string} dir - The directory path.
 */
async function clearDirectory(dir) {
    const files = await fs.readdir(dir);
    for (const file of files) {
        if (!IGNORED_FILES.includes(file)) {
            await fs.remove(path.join(dir, file));
        }
    }
}

/**
 * Prompt the user to choose a project template.
 * @returns {Promise<string>} - The selected template name.
 */
async function promptUserForTemplate() {
    const { templateChoice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'templateChoice',
            message: 'Which project template would you like to use?',
            choices: TEMPLATES,
        },
    ]);
    return templateChoice;
}

/**
 * Prompt the user for an action if the directory is not empty.
 * @returns {Promise<string>} - The selected action ('clear', 'cancel', 'skip').
 */
async function promptUserForAction(directory) {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: `The directory "${directory}" is not empty. What do you want to do?`,
            choices: [
                { name: 'Clear the directory', value: 'clear' },
                { name: 'Cancel the operation', value: 'cancel' },
                { name: 'Skip check and copy files', value: 'skip' },
            ],
        },
    ]);
    return action;
}

program
    .name('create-art-app')
    .version('1.0.0')
    .arguments('<directory>')
    .action(async (directory) => {
        const destinationDir = path.resolve(directory);
        const templateDir = path.resolve(process.cwd(), '../templates');

        try {
            // Handle existing directory case
            if (await fs.pathExists(destinationDir)) {
                const empty = await isDirectoryEmpty(destinationDir);

                if (!empty) {
                    const action = await promptUserForAction(directory);

                    if (action === 'cancel') {
                        console.log('Operation cancelled.');
                        return;
                    } else if (action === 'clear') {
                        console.log(`Clearing ${destinationDir}...`);
                        await clearDirectory(destinationDir);
                    }
                }
            }

            // Get the user's chosen template
            const templateChoice = await promptUserForTemplate();
            const selectedTemplatePath = path.join(templateDir, templateChoice);

            console.log(`Copying ${templateChoice} to ${destinationDir}...`);

            // Check if the template exists before copying
            if (!(await fs.pathExists(selectedTemplatePath))) {
                console.error(`Template ${templateChoice} not found at ${selectedTemplatePath}`);
                return;
            }

            // Copy the template
            await fs.copy(selectedTemplatePath, destinationDir, { recursive: true });

            // Modify package.json
            const packageJsonPath = path.join(destinationDir, 'package.json');
            if (await fs.exists(packageJsonPath)) {
                const packageJson = await fs.readJson(packageJsonPath);
                packageJson.name = path.basename(destinationDir); // Set the package name as the folder name
                await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
            }

            console.log('Project created successfully!');
            console.log('✅ Project copied successfully!');
            console.log('\nNext Steps:');
            console.log(`  1. cd ${directory}`);
            console.log('  2. Install dependencies: npm install or pnpm install');
            console.log('  3. Start the project: npm start or npm run dev');
            console.log('\n🚀 Happy Coding!');
        } catch (err) {
            console.error('❌ Error creating project:', err);
        }
    });

// Parse command-line arguments
program.parse(process.argv);
