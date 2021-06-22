
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function onsuccess(pos) {
  const { latitude, longitude, accuracy } = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`More or less ${accuracy} meters.`);
} 

function onerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


// Challenge: Make this work: 
function geolocate(options){
 return new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    resolve(pos)
  }, (err) => {
    reject(err)
  }, options)
 })
}

// Like this: 

geolocate(options)
  .then(res => onsuccess(res))
  .catch(err => onerror(err))

