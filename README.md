# create-art-app

A CLI tool to generate project templates for React and Next.js with ESLint configurations.

## 🚀 Features
- Choose between React and Next.js templates
- Automatically sets the project name in `package.json`
- Skips Husky installation during setup
- Easy-to-use command-line interface

## 📦 Installation
You can install it globally using npm:
```sh
npm install -g create-art-app
```
Or run it directly with `npx`:
```sh
npx create-art-app <project-name>
```

## 📌 Usage
To create a new project, run:
```sh
npx create-art-app my-new-project
```
You'll be prompted to choose a project template.

### Options
```sh
npx create-art-app <directory>
```
- `<directory>` – The folder where the project will be created.

## 🛠 How It Works
1. Prompts the user to choose a project template.
2. Copies the selected template to the specified directory.
3. Updates `package.json` with the correct project name.
4. Skips automatic Husky installation but allows manual setup later.

## 🔧 Manual Husky Setup
After the project is created, you can install Husky manually:
```sh
npm run prepare
```

## 📁 Project Templates
Available templates:
- **React App** (`react-eslint`)
- **Next.js App** (`next-eslint`)

## 🚨 Issues
If you encounter issues, please open an issue on GitHub.

## 📜 License
MIT

