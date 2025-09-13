import path from 'path';

let myPath = 'C:/Users/saawahi/Desktop/REACT/Web-Dev-Training/saatwik.txt';
// console.log(path.extname(myPath))
// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
// console.log(path.parse(myPath)) 
// console.log(path.join(myPath,'folder1','folder2','folder3','file.txt'))
console.log(path.resolve('folder1','folder2','folder3','file.txt'));
console.log(path.isAbsolute(myPath))
console.log(path.isAbsolute('folder1/folder2'))
console.log(path.normalize('C:/Users/saawahi/Desktop/REACT/Web-Dev-Training////saatwik.txt'))
console.log(path.relative('C:/Users/saawahi/Desktop/REACT/Web-Dev-Training/saatwik.txt','C:/Users/saawahi/Desktop/REACT/Web-Dev-Training'))
console.log(path.sep)
console.log(path.toNamespacedPath(myPath))
