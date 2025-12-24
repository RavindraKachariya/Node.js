const fs = require('fs');

// 1. writeFile Example
// fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     }
//     else {
//         console.log('File written successfully');
//     }
// });

// 2. appendFile example
// fs.appendFile('output.txt', 'This is Append File!', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     }
//     else {
//         console.log('File appended successfully');
//     }
// });

// 3. rename example
// fs.rename('output.txt', 'renamed-output.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file:', err);
//     }
//     else {
//         console.log('File renamed successfully');
//     }
// });

// 4. copyFile example
// fs.copyFile('renamed-output.txt', 'copied-output.txt', (err) => {
//     if (err) {
//         console.error('Error copying file:', err);
//     }
//     else {
//         console.log('File copied successfully');
//     }
// });

// 5. unlink example
// fs.unlink('copied-output.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     }
//     else {
//         console.log('File deleted successfully');
//     }
// });

// 6. readFile example
// fs.readFile('renamed-output.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     }
//     else {
//         console.log('File content:', data);
//     }
// });

// 7. rmdir example
// fs.rmdir('./copy', { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error removing directory:', err);
//     }
//     else {
//         console.log('Directory removed successfully');
//     }
// });

// 8. rm example
// fs.rm('./compy', { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error removing file:', err);
//     }
//     else {
//         console.log('File removed successfully');
//     }
// });

// 9. mkdir example
// fs.mkdir('./newDir/subDir', { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     }
//     else {
//         console.log('Directory created successfully');
//     }
// });

// 10. readdir example
// fs.readdir('./newDir', (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//     }
//     else {
//         console.log('Directory contents:', files);
//     }
// });
