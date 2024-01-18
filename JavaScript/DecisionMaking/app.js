let total = 1 + 3;

if (total === 3) {
    console.log("3 je");
} else{
    console.log("nije 3")
}

// && = and
// || = or
// ! = not

const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : "5 of 7",
    avgGoodSleep : "2:13",
    tags : ["jedan", "dva", "tri"]
};

console.log(fitBitData["tags"][0])
console.log(fitBitData)

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
};

const fullAdress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
console.log(fullAdress)


const midTerms = {thomas: 4, ezra: 3, danielle: 5};
console.log(midTerms)
midTerms.thomas = 2;
console.log(midTerms)
midTerms.mathew = 3;
console.log(midTerms)
midTerms["bimbač"] = 2;
console.log((midTerms))