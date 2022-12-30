const { exec } = require("child_process");
const args = process.argv.slice(2);
const dir = process.cwd()

if (args.length === 0) {
  console.error('Error: No file name provided');
  process.exit(1);
}

const fileNames = args.map(arg => `tests/${arg}.spec.js`);
const filesString = fileNames.join(' ');

process.stdout.write('\x1Bc'); //clear term, which will nicely display the test at the top
process.stdout.cursorTo(0, 0);

exec(`node ${dir}/node_modules/mocha/bin/mocha.js ${filesString} --colors`, 
  (error, stdout, stderr) => {
  const lines = stdout.split('\n');
  const remainingLines = lines.slice(2);
  console.log(remainingLines.join('\n').replace(/^\s*\n/gm, ''));
});