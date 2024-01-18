for (let i = 1; i <=10; i++) {
    console.log(i);
}

for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
};

for (let i = 0; i < 21; i += 2){
    console.log(i)
}

for (let i = 1; i < 21; i += 2){
    console.log(i)
}

for (let i = 100; i >= 0; i -= 10){
    console.log(i)
}

/////////////////////////////////////////////////////////////
let a = "safPSdasP";
let b = "";

for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
        b = a[i] + b
    } else {
        b = b + a[i]
    }
};

console.log(b)
////////////////////////////////////////////////////////////
const people = ["Fred", "Scooby", "Betty", "Shaggy"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
};

const seatingChart = [
    ["blasdf", "ČLKJSDF", "dalkjsdf"],
    ["dfkasl", "perpow", "pšodefa"],
    ["mnasdča", "šdpfja", "špadkja"]
]

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i+1}`)
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}