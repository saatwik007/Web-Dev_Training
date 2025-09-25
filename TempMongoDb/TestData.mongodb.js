
use('CrudDb');
// db.createCollection('courses');
db.courses.insertOne({
    name: 'Sample Course', 
    price: 100, 
    assignment:12,
    projects:45
});
db.courses.insertMany([
    { name: 'Java', price: 20000, assignment: 12, projects: 45 },
    { name: 'Python', price: 18000, assignment: 10, projects: 30 },
    { name: 'JavaScript', price: 15000, assignment: 8, projects: 25 },
    { name: 'React', price: 22000, assignment: 15, projects: 50 },
    { name: 'Node.js', price: 19000, assignment: 11, projects: 35 },
    { name: 'MongoDB', price: 17000, assignment: 9, projects: 20 },
    { name: 'Express.js', price: 16000, assignment: 7, projects: 15 },
    { name: 'HTML/CSS', price: 12000, assignment: 5, projects: 10 }
]);



// // Insert a few documents into the sales collection.
// db.getCollection('courses').insertMany([
//   { 'name': 'Java', 'price': 20000, 'instructor': 'John Smith' },
//   { 'name': 'Python', 'price': 18000, 'instructor': 'Jane Doe' },
//   { 'name': 'JavaScript', 'price': 15000, 'instructor': 'Mike Johnson' },
//   { 'name': 'React', 'price': 22000, 'instructor': 'Sarah Wilson' },
//   { 'name': 'Node.js', 'price': 19000, 'instructor': 'David Brown' },
//   { 'name': 'MongoDB', 'price': 17000, 'instructor': 'Emily Davis' },
//   { 'name': 'Express.js', 'price': 16000, 'instructor': 'Alex Miller' },
//   { 'name': 'HTML/CSS', 'price': 12000, 'instructor': 'Lisa Garcia' }
// ]);

// // Print a message to the output window.
// console.log(`Insert complete`);

