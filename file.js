// Node.js script to open an .exe file
const { exec } = require('child_process');

// Replace with the full path to your .exe file
const filePath = 'C:\\path\\to\\your\\program.exe';

exec(`"${filePath}"`, (error, stdout, stderr) => {
  	if (error) {
    	console.error(`Error opening .exe file: ${error}`);
    	return;
  	}
  	console.log(`Output: ${stdout}`);
});
