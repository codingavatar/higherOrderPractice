// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five and return count.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  }, count);

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  fruits = _.filter(fruits, function(fruit) { return fruit === targetFruit; });

  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(fruit) { return fruit.substr(0, 1) === letter; });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(dessert) { return dessert.type === 'cookie'; });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(memo, product) {
    return memo + Number(product.price.substr(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertCount = _.reduce(desserts, function(memo, dessert) {
    var currentType = dessert.type;
    if (memo[currentType] === undefined) {
      memo[currentType] = 1;
      return memo;
    } else {
      memo[currentType] = (memo[currentType] + 1);
      return memo;
    }
  }, {});
  console.log(dessertCount);
  return dessertCount;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesMovies = _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      memo.push(movie.title);
    }
    return memo;
  }, []);

  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shortestTime = _.reduce(movies, function(memo, movie) {
    if (movie.runtime < memo) {
      return movie.runtime;
    } else {
      return memo;
    }
  }, timeLimit);
  return shortestTime < timeLimit;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) { return fruit.toUpperCase(); });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var newDesserts = desserts;
  _.map(newDesserts, function(dessert) {
    if (_.reduce(dessert.ingredients, function(ingred, memo) { // assumes gluten free
      if (ingred === 'flour') {
        return memo = false;
      } return memo;
    }, true)) {
      dessert.glutenFree = true;
    } else {
      dessert.glutenFree = false;
    }
  });
  return newDesserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var saleGroceries = groceries;
  _.map(saleGroceries, function(grocery) {
    grocery.salePrice = '$' + (Number(grocery.price.substr(1)) * (1 - coupon)).toFixed(2);
  });
  return saleGroceries;
};
