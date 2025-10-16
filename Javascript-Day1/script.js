const students = [
{ name: "Riya", score: 85 },
{ name: "Ayushi", score: 92 },
{ name: "Helee", score: 58 },
{ name: "Rinal", score: 22}
];


function calcAverage(students) {

    let score = 0;
    for(let i =0; i< students.length; i++){
        score = score + students[i].score;

    }

     let average = score / students.length;
     console.log(`The average score: ${average}`) ;
}




function findMax(students) {
  let max = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > max.score) {
      max = students[i];
    }
  }
  console.log(`Highest Score: ${max.name} (${max.score})`);
}






 function findmin(students){
    let min = students[0];

     for(let i = 1; i< students.length; i++){
        if(students[i].score < min.score){
            min = students[i];
          
        }
    }
      console.log(`Lowest- Score: ${min.name} (${min.score})`);
 }
 



function CalculateGrade(students){
       
const obj = {A:0, B:0, C:0, D:0, F:0};

for(let i = 0; i< students.length; i++){



    switch(true){
        case (students[i].score >= 90 && students[i].score <= 100):
             obj.A++;
            break;
        case (students[i].score >= 80 && students[i].score < 90):
            obj.B++;
            break;
        case (students[i].score >= 70 && students[i].score < 80):
            obj.C++;
            break;
        case (students[i].score >= 60 && students[i].score < 70):
            obj.D++;
            break;
        case (students[i].score < 60):
            obj.F++
            break;
        default:
            break;
}
 }

console.log("Grade Distribution:", obj);
    

}

function RetakeExam(students) {
  const retake = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 60) {
      retake.push(students[i].name);
    }
  }
  console.log("Students needing retake:", retake);
}

function FinalAnswer(){
calcAverage(students);
findMax(students);
findmin(students);
CalculateGrade(students);
RetakeExam(students);}

FinalAnswer();