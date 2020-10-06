"use strict";

// run in index.html script line to run
console.log('Starting fetch call');
var postsPromise = fetch('https://api.dailysmarty.com/posts');
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');
postsPromise.then(function (response) {
  return response.json();
}).then(function (data) {
  data.posts.ForEach(function (item) {
    console.log(item.url_for_post);
  });
})["catch"](function (err) {
  console.log(err);
}); // **********Promise.all******************

var greeting = new Promise(function (resolve, reject) {
  resolve('Hi there');
  reject('Oops, bad greeting');
});
var updateAccount = new Promise(function (resolve, reject) {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});
var loginActivities = Promise.all([greeting, updateAccount]);
loginActivities.then(function (res) {
  res.forEach(function (activity) {
    console.log(activity);
  });
}); //*************Async and Await processes *****************
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => res.json())
// .then((data) => console.log(data))

var postsJson = fetch('https://jsonplaceholder.typicode.com/posts');
postsJson.then(function (data) {
  return data.json();
}).then(function (data) {
  data.forEach(function (element) {
    return console.log(element);
  });
});