import express from 'express';
import mongoose from 'mongoose';
import Employee from './models/employee.js'
const app = express()
const port = 3000
let conn = await mongoose.connect('mongodb://localhost:27017/company')
app.set('view engine', 'ejs');




// app.get(('/'), (req, res) => {
//     const emp = new Employee({
//         name: "John Doe",
//         salary: 50000,
//         language: "JavaScript",
//         city: "New York",
//         isManager: false
//     })
//     emp.save()
//     res.send('Hello World');
// })

function randomGen(arr){
    let rno = Math.floor(Math.random() * (arr.length-1))
    return arr[rno];
}

function employeeList(){
let employeeName=["John", "Jane", "Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank"]
let language =["JavaScript", "Python", "Java", "C#", "Ruby", "Go", "Swift", "Kotlin", "PHP", "TypeScript"]
let city =["New York", "San Francisco", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas"]   
for(let i=0; i<employeeName.length; i++){
    const emp = new Employee({
        name: randomGen(employeeName),
        salary: Math.floor(Math.random() * 100000),
        language: randomGen(language),
        city: randomGen(city),
        isManager: (Math.random() > 0.5)? true : false  
       })
    emp.save()
    console.log(emp);
}
} 

app.get('/', (req, res) => {
    let siteName = 'adidas';
    let searchText = "search now"
    res.render('index', { siteName: siteName, searchText: searchText })
})
app.post('/', (req, res) => {
  console.log("Its a post request")
    //   const emp = new Employee({
    //     name: "John Doe",
    //     salary: 50000,
    //     language: "JavaScript",
    //     city: "New York",
    //     isManager: false
    // })
    // emp.save()
    employeeList();
  res.send('Hello World!!!')
})
app.delete('/delete', async (req, res) => {
    await Employee.deleteMany({});
    res.send('All employee data deleted');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})