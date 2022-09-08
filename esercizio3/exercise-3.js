const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
  return students;

}

addStudent('Marco');
console.log(students);


/*Risposta:
Posso farlo in quanto lo sto modificando tramite i metodi degli array, quindi non sto agendo direttamente sul valore della costante, ma
sulla struttura al suo interno*/