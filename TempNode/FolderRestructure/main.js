import fs from 'fs/promises';
try {
    let files = await fs.readdir('C:\\Users\\saawahi\\Desktop\\REACT\\Web-Dev-Training\\TempNode\\FolderRestructure');
    let myPath = 'C:/Users/saawahi/Desktop/REACT/Web-Dev-Training/TempNode/FolderRestructure';
    console.log(files);

    for(let file of files) {
        let stats = await fs.stat(file);
            // Skip directories and the main.js file itself
            if (stats.isDirectory() || file === 'main.js' || file === 'createFiles.js') {
                continue;
            }
        console.log(`File: ${file}`);
        let ext = file.split('.').pop();
        console.log(`Extension: ${ext}`);
        fs.mkdir(ext).catch(err => {
            if(err.code !== 'EEXIST') {
                console.error('Error creating directory:', err);
            }
        });
        console.log(myPath);
        console.log(file);
        let updatedPath = `${myPath}/${ext}/${file}`;
        console.log(updatedPath);
        await fs.rename(`${myPath}/${file}`, updatedPath);
        console.log(`Moved ${file} to ${ext} folder`);
    }

} catch (error) {
    console.error('Error reading directory:', error);
}
