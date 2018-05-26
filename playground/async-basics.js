
//Synchronously
//console.log('Starting app.');

//console.log('Finishing up.');

console.log('Starting app.');

setTimeout(() => {
  console.log('Inside callback.');
}, 2000);

setTimeout(() => {
  console.log('Inside second callback.');
}, 0); //Will print after 'Finishing up.'

console.log('Finishing up.');

//Output:
//Starting app.
//Finishing up.
//Inside callback. --> Registers a callback which should fire after 2 secs.
//Non-blocking IO.
