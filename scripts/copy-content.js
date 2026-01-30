const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../../'); // Root of Encyclopedia
const DEST_DIR = path.join(__dirname, '../content');

const MODULES = [
    '01_Foundations',
    '02_Frontend_Web',
    '03_Programming_Languages',
    '04_Backend_Engineering',
    '05_Databases',
    '06_Modern_Frameworks',
    '07_DevOps_and_Cloud',
    '08_CS_Assignments_and_DSA',
    '09_Advanced_Architecture',
    '10_AI_and_Future_Tech',
    'MASTERY.md'
];

if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

MODULES.forEach(mod => {
    const srcPath = path.join(SOURCE_DIR, mod);
    const destPath = path.join(DEST_DIR, mod);

    if (fs.existsSync(srcPath)) {
        console.log(`Copying ${mod}...`);
        // If it's a file (MASTERY.md)
        if (fs.lstatSync(srcPath).isFile()) {
            fs.copyFileSync(srcPath, destPath);
            return;
        }
        // If directory
        fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
        console.warn(`Warning: ${mod} not found.`);
    }
});

console.log("Content Migration Complete. 🚀");
