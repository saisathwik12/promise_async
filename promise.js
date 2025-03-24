const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

const myPromise = new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed!'); 
      }
    }, 2000);
  });

  myPromise.then((result) => {
    console.log('Success:', result);
  }).catch((error) => {
    console.error('Error:', error);
  });