const { Student, Campus } = require('../database/models');

const students = require('../data/students'); // 3 students;
const campuses = require('../data/campuses'); // 2 campuses;

const populateStudentsTable = async () => {
  let baruch = await Campus.create(campuses[0]); 
  let hunter = await Campus.create(campuses[1]); 

  for (let i = 0; i < students.length; i++) {
    let currStudent = students[i];
    let builtStudent = await Student.build(currStudent);

    if (i < 2) {
      await builtStudent.save();
      await builtStudent.setCampus(baruch); // Players trained solely by Tyler Relph;
    }
    else {
      await builtStudent.save();
      await builtStudent.setCampus(hunter); // Players trained solely by Jordan Lawley;
    }
  }
}

const seedDatabase = async () => {
  try {
    await populateStudentsTable();
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();
