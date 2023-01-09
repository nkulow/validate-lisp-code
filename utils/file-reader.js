import fs from 'fs';
import path from 'path';

export const fileReader = (dir, callback) => {
    fs.readdir(dir, (err, fileList) => {
        try {
            fileList.forEach(file => {
                fs.readFile(path.resolve(dir, file), 'utf-8', (err, data) => {
                    if (err) throw err;
                    callback(file, data);
                });
            });
        }
        catch(e) {
            console.error('Directory not found.');
        }
    });
}