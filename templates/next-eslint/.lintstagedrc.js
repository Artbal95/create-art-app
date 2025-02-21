const path = require('path');

const buildEslintCommand = (filenames) => {
  const fNames = filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")

  return `next lint --fix --file ${fNames}`;
}
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
