const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];



function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person= persons.find(person => person.id ===id);
      if(person){
        resolve(person);
      } else {
        reject (new Error (`Non esiste una persona con questo id: ${id}`));
      }
    }, 1000);
});
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job= jobs.find(job => job.id ===id);
      if (job){
        resolve(job);
      } else {
        reject (new Error(`Non esiste un lavoro con questo id: ${id}`));
      }
    }, 500);
  });
}

Promise.race([fetchPersonById(1), fetchJobById(1)])
.then((value) => {
  console.log(value)
}
)