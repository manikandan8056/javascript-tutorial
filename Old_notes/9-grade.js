//Grade
//-------
//Average = 70
//1-59:f
//60-69:d
//70-79:c
//80-89:b
//90-100:a

const marks = [80, 80, 50];

const calculateGrade = marks => {
  const avg = calculateAvg(marks);
  return avg < 60 ? "F" :
         avg < 70 ? "D" :
         avg < 80 ? "C" :
         avg < 90 ? "B" : "A";
};

const calculateAvg = arr => arr.reduce((sum, mark) => sum + mark, 0) / arr.length;

console.log(calculateGrade(marks)); // Output: "C"
