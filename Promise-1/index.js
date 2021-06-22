// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
    
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// returns error w/ err message
// **2)** What happens when you call both `resolve` and `reject`? Test this.
// first one executes
// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes, first one runs second is a blank
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.