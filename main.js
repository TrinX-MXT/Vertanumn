const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];


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
console.log(filterFailed(grades, 60));