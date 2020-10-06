// run in index.html script line to run


console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts');
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
    .then(response => response.json())
    .then(data => {
        data.posts.ForEach((item) => {
            console.log(item.url_for_post);
        });
    })
    .catch((err) => {
        console.log(err);
    });


// **********Promise.all******************

const greeting = new Promise((resolve, reject) =>{
    resolve('Hi there');
    reject('Oops, bad greeting');
  });
  
  const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating last login...');
    reject('Error updating account with login.');
  });
  
  const loginActivities = Promise.all([greeting, updateAccount]);
  
  loginActivities.then(res => {
    res.forEach(activity => {
      console.log(activity);
    })
  })


//*************Async and Await processes *****************


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => res.json())
// .then((data) => console.log(data))

const postsJson = fetch('https://jsonplaceholder.typicode.com/posts');


postsJson
.then(data => data.json())
.then(data => {
    data.forEach((element =>
    console.log(element)));
});