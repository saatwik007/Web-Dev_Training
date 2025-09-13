const fs = require('fs');

// console.log(fs)
console.log("Start")
fs.writeFileSync('test.txt', 'This file will run syncronously and will block the future functions until it is done');
fs.readFile('test.txt', (err, data) => {
 console.log(err, data.toString());
});
fs.writeFile('test-async.txt', 'This file will run asyncronously and will not block the future functions until it is done', () =>{
    console.log("Async File created");
    fs.readFile('test-async.txt',(err,data)=>{
        console.log(err, data.toString());
    })
});

fs.appendFile('saatwik.txt', "This data will be added automatically", ()=>{
    console.log("Data added");
})
console.log("End")