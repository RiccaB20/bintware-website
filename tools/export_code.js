const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = 'codice_sito_completo.txt';
const EXTENSIONS = ['.html', '.css', '.js', '.json'];
const EXCLUDE_DIRS = ['node_modules', '.git', 'asset', 'docs', 'tools', '.gemini'];

const projectRoot = path.resolve(__dirname, '..');
const outputPath = path.join(projectRoot, OUTPUT_FILE);

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        const filePath = path.join(currentDirPath, name);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && !EXCLUDE_DIRS.includes(name)) {
            walkSync(filePath, callback);
        }
    });
}

function generateCodeDump() {
    let outputContent = "DUMP DEL CODICE SORGENTE DEL SITO BINTWARE\n";
    outputContent += "================================================================================\n\n";

    walkSync(projectRoot, function (filePath, stat) {
        const ext = path.extname(filePath).toLowerCase();
        const fileName = path.basename(filePath);
        
        if (EXTENSIONS.includes(ext) && fileName !== 'package-lock.json') {
            const relPath = path.relative(projectRoot, filePath);
            
            try {
                const content = fs.readFileSync(filePath, 'utf-8');
                outputContent += `\n================================================================================\n`;
                outputContent += `FILE: ${relPath}\n`;
                outputContent += `================================================================================\n\n`;
                outputContent += content;
                outputContent += `\n\n`;
            } catch (err) {
                console.error(`Errore nella lettura di ${relPath}: ${err.message}`);
            }
        }
    });

    fs.writeFileSync(outputPath, outputContent, 'utf-8');
    console.log(`Export completato con successo nel file: ${outputPath}`);
}

generateCodeDump();
