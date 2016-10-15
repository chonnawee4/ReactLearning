// ES2016 Promise playground

// Normal callback
function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp){
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

// Promise used
function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
   }, 1000);
  });
}

getTempPromise('Philadelphia').then(function (temp) {
   console.log('promise success', temp);
}, function (error) {
   console.log('promise error', error);
});

// Challenge
function addPromise(a, b) {
   return new Promise(function (resolve, reject) {
      if ((typeof a === 'number') && (typeof b === 'number')) {
         resolve(a+b);
      } else {
         reject('a & b must be numbers');
      }
   });
}

addPromise(2, 6).then(function (sum) {
   console.log('Sum of number is', sum);
}, function (error) {
   console.log('Error',error);
});

addPromise('chonnawee', 6).then(function (sum) {
   console.log('Sum of number is', sum);
}, function (error) {
   console.log('Error',error);
});
