function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') { 
      resolve('cereal');
    }if (timeOfDay === 'lunch') { 
      resolve('burrito');
    }if (timeOfDay === 'dinner') { 
      resolve('steak');
    } else {
      reject('Im not hungry right now');
    }
  });
}


// Call yout function and resolve the promise here! 
whatToEat('breakfast').then(res => (console.log(res)))
whatToEat('lunch').then(res => (console.log(res)))
whatToEat('dinner').then(res => (console.log(res)))
whatToEat('brunner').catch(err => (console.log(err)))


// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  