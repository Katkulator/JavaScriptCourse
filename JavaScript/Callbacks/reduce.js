const numbers = [3,5,7,9,11].reduce((acumulator, currentValue) => {
    return acumulator * currentValue;
})

console.log(numbers)

const prices = [9.99, 1.50, 19.99, 49.99, 30.5];

const sumPrices = prices.reduce((total, price) => total + price);
console.log(sumPrices)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

console.log(minPrice)

const movies = [
    {
      title: "Amadeus",
      score: 99,
      year: 1984,
    },
    {
      title: "Sharknado",
      score: 35,
      year: 2013,
    },
    {
      title: "13 Going On 30",
      score: 70,
      year: 2004,
    },
    {
      title: "Stand By Me",
      score: 85,
      year: 1986,
    },
    {
      title: "Waterworld",
      score: 62,
      year: 1995,
    },
    {
      title: "Jingle All The Way",
      score: 71,
      year: 1995,
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019,
      },
    {
      title: "Notting Hill",
      score: 165,
      year: 1999,
    },
    {
      title: "Alien",
      score: 90,
      year: 1979,
    },
  ]


const highestRatedMovie = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score){
        return currentMovie
    }
    return bestMovie
})

console.log(highestRatedMovie)


const evens = [2, 4, 6, 8]

const reduceEvens = evens.reduce((sum, num) => sum + num, 13)
console.log(reduceEvens)
