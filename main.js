const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function findTopStudents(data) {

    if (data.length === 0) {
        return null;
    }

    let topStudents = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i].score > topStudents.score) {
            topStudents = data[i];
        }
    }

    return topStudents.name;
    
}

function addLetterGrade(data) {
    data.forEach(function(student) {
        if (student.score >= 90) {
            student.letter = "A";
        } else if (student.score >= 70) {
            student.letter = "B";
        } else {
            student.letter = "C";
        }
    });

    return data;
}

function calculateAverage(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].score;
    }
    return sum / data.length;
}

function filterFailed(data, passScore) {
    return data
        .filter(s => s.score < passScore)
        .map(s => s.name);
}

console.log(calculateAverage(grades));

console.log("Лучший студент:", findTopStudents(grades));
addLetterGrade(grades);

console.log(filterFailed(grades, 60));

console.log("Массив после добавления буквенных оценок:");
console.log(grades);
