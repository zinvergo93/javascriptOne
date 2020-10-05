let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello....')
    }, 2000);
  
    setTimeout(() => {
      reject(Error('Too sleepy...'))
    }, 2000);
  });
  
  sleepyGreeting
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });

    // currently no outside dependencies to call for an error/reject. 
    // Will pass in "Hello...." greeting

// *****************Fetch*************************************

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

// ****************Async and Await***********************


const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 2000);
    });
  }
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  
  async function loginActivities() {
// const loginActivities = async () => {
    const returnedLogin = await login();
    console.log(returnedLogin);
  
    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
  }
  
  loginActivities();
