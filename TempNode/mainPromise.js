import fs from "fs/promises"

let a = await fs.readFile('saatwik.txt')
// let b = await fs.writeFile('saatwik.txt', "This data will be added automatically using promises ")
let c = await fs.appendFile('saatwik.txt', "This data will be updated")
console.log(a.toString(),c)