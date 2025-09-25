import fs from 'fs/promises';

try {

    // to create files in you directory change the path in readdir method
     let files = await fs.readdir('C:\\Users\\saawahi\\Desktop\\REACT\\Web-Dev-Training\\TempNode\\FolderRestructure');
    

        const filesNew = [
        // Text-based files
        { name: 'document.txt', content: 'This is a text file' },
        { name: 'script.js', content: 'console.log("Hello from JavaScript");' },
        { name: 'styles.css', content: 'body { margin: 0; padding: 0; }' },
        { name: 'index.html', content: '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello HTML</h1></body></html>' },
        { name: 'data.json', content: '{"name": "John", "age": 30}' },
        { name: 'README.md', content: '# This is a markdown file\n\nHello World!' },
        { name: 'config.xml', content: '<?xml version="1.0"?><config><setting>value</setting></config>' },
        { name: 'image.svg', content: '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="red"/></svg>' },
        { name: 'app.py', content: 'print("Hello from Python")' },
        { name: 'database.sql', content: 'CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));' },
        
        // Additional file types (empty/placeholder content for binary files)
        { name: 'notes.txt', content: 'Additional notes file content' },
        { name: 'log.txt', content: '[2024-01-01 10:00:00] Application started\n[2024-01-01 10:01:00] User logged in' },
        { name: 'component.tsx', content: 'import React from "react";\nexport default function Component() { return <div>Hello</div>; }' },
        { name: 'config.yaml', content: 'server:\n  port: 3000\n  host: localhost' },
        { name: 'test.php', content: '<?php\necho "Hello from PHP";\n?>' },
        { name: 'main.java', content: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java");\n    }\n}' },
        { name: 'script.sh', content: '#!/bin/bash\necho "Hello from shell script"' },
        { name: 'data.csv', content: 'Name,Age,City\nJohn,30,New York\nJane,25,London' },
        
        // Binary files (creating empty/minimal placeholder files)
        { name: 'image.png', content: '', binary: true },
        { name: 'photo.jpeg', content: '', binary: true },
        { name: 'picture.jpg', content: '', binary: true },
        { name: 'document.pdf', content: '', binary: true },
        { name: 'report.docx', content: '', binary: true },
        { name: 'presentation.pptx', content: '', binary: true },
        { name: 'spreadsheet.xlsx', content: '', binary: true },
        { name: 'archive.zip', content: '', binary: true },
        { name: 'compressed.rar', content: '', binary: true },
        { name: 'executable.exe', content: '', binary: true }
    ];
     // Create all files
    for (let i = 0; i < filesNew.length; i++) {
        await fs.writeFile(filesNew[i].name, filesNew[i].content);
        console.log(`Created file: ${filesNew[i].name}`);
    }
        console.log(`\nTotal files created: ${filesNew.length}`);
} catch (error) {
        console.error('Error:', error);
}