// start from here
function callback(List) {
    // querySelector('.pre').innerText = list;
    console.log(''+List);
}

function fruitFetcher(prefix, callback) {
    let fruitList = ['apple'];
    if (prefix == 'a') callback(fruitList);
}

function animalFetcher(prefix, callback) {
    let animalList = ['animal'];
    if (prefix == 'a') callback(animalList);
}

function locationFetcher(prefix, callback) {
    let locationList = ['arlington'];
    if (prefix == 'a') callback(locationList);
}


function fruitFetcherPromise(prefix) {
    return new Promise((resolve) =>{
        fruitFetcher(prefix,list => resolve(list));
    });
}

// function fruitFetcherPromise(prefix) {
//     return new Promise((resolve) =>{
//         fruitFetcher(prefix,resolve);
//     });
// }

function animalFetcherPromise(prefix) {
    return new Promise((resolve) =>{
        animalFetcher(prefix,resolve);
    });
}

function locationFetcherPromise(prefix) {
    return new Promise((resolve) =>{
        locationFetcher(prefix,resolve);
    });
}

// let combinedList = [];

// // method 1 -- using promise (NOT WORKING -- empty list)
// fruitFetcherPromise('a').then((fruitList) => {
//     // console.log(fruitList);
//     combinedList=combinedList.concat(fruitList);
// }).catch((errorArgs) => {
//     console.log("Error getting fruitList ");
// });

// animalFetcherPromise('a').then((animalList) => {
//     combinedList=combinedList.concat(animalList);
// }).catch((errorArgs) => {
//     console.log("Error getting animalList ");
// });

// locationFetcherPromise('a').then((locationList) => {
//     combinedList=combinedList.concat(locationList);
// }).catch((errorArgs) => {
//     console.log("Error getting locationList ");
// });

// callback(combinedList); // show empty []
// setTimeout(() => {
//     console.log(combinedList)
// }, 1000);  //show [ 'apple', 'animal', 'arlington' ]

// // method 1- improvement
// fruitFetcherPromise('a')
// .then((fruitList) => {combinedList=combinedList.concat(fruitList);})
// .then(() => animalFetcherPromise('a'))
// .then((animalList) => {combinedList=combinedList.concat(animalList);})
// .then(() => locationFetcherPromise('a'))
// .then((locationList) => {combinedList=combinedList.concat(locationList);})
// .then(() => {callback(combinedList);})
// .catch((errorArgs) => {console.log("Error getting List ");});

// method 1- improvement(not yet)
// var co = require('co');
// co(function * () {
//     yield fruitFetcherPromise('a')
//     yield animalFetcherPromise('a')

//   }).then(() => {
//     console.log('done')
//   })

// // method 2 -- promise all (WORK)
// Promise.all([fruitFetcherPromise('a'), animalFetcherPromise('a'), locationFetcherPromise('a')])
// .then(([fruitList, animalList, locationList]) => { callback(fruitList.concat(animalList, locationList)) });

// method 3 -- using async/await (WORK)
(async () => {
let combinedList = [];
try {
  let fruitList = await fruitFetcherPromise('a');
  let animalList = await animalFetcherPromise('a');
  let locationList = await locationFetcherPromise('a');
//   combinedList = fruitList.concat(animalList,locationList);
  combinedList = combinedList.concat(fruitList,animalList,locationList);
  callback(combinedList);
} catch (errorArgs) {
  console.log(" Error");
}
})()

  
// method 4 -- callback (NOT WORKING -- empty list)
// combinedList = [];
// function combinedListCallback(List) {
//     setTimeout(() => combinedList = [].concat(combinedList,List), 1000);
    // console.log(combinedList);
// }
 
// fruitFetcher('a', combinedListCallback);
// animalFetcher('a', combinedListCallback);
// locationFetcher('a', combinedListCallback);

// callback(combinedList); // show empty callback: apple,animal,arlington


// // method 4 -- improvement
// function sayhi(){console.log('hi')}

// function combineList(List) {
//     combinedList = [].concat(combinedList,List);
// }

// function locationFetcherCallback(locationList) {
//     combineList(locationList);
//     setTimeout(sayhi, 1000);
//     callback(combinedList);
// }

// function animalFetcherCallback(animalList) {
//     combineList(animalList);
//     // console.log(animalList);
//     // setTimeout(locationFetcher('a', locationFetcherCallback),1000);
//     setTimeout(sayhi, 1000);
//     locationFetcher('a', locationFetcherCallback);
// }

// function fruitFetcherCallback(fruitList){
//     combineList(fruitList);
//     // console.log(fruitList);
//     // setTimeout(animalFetcher('a', animalFetcherCallback), 1000);
//     setTimeout(sayhi, 1000);
//     animalFetcher('a', animalFetcherCallback);
// }

// fruitFetcher('a', fruitFetcherCallback);
