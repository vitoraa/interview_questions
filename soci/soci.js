const response = [{
  page: 1,
  totalPages: 5,
  data: [{
    title: "Movie 1",
    rating: 4.7
  }, {
    title: "Movie 2",
    rating: 7.8
  }]
}, {
  page: 2,
  totalPages: 5,
  data: [{
    title: "Movie 3",
    rating: 5.3
  }, {
    title: "Movie 4",
    rating: 2.4
  }]
}]

const getMaxAndAverage = (response) => {
  let totalRating = 0
  let quantityRating = 0
  let maxRating = 0
  let object = { average: null, max: null }

  for (let page of response) {
    for (let movie of page.data) {
      quantityRating++
      totalRating += movie.rating

      if (movie.rating > maxRating) {
        maxRating = movie.rating
      }
    }
  }

  let averageRating = totalRating / quantityRating

  object.average = averageRating
  object.max = maxRating

  return object
}



console.log(getMaxAndAverage(response))


response.map()