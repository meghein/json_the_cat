const request = require('request');

const name = `${process.argv[2]}`;

request('https://api.thecatapi.com/v1/breeds/', (err, _response, body) => {
  if (err) console.log('error');
  const data = JSON.parse(body);
  const catNames = [];
  for (const cat in data) {
    if (data[cat].name === name) console.log(data[cat].description);
    catNames.push(data[cat].name);
  }
  if (!catNames.includes(name)) console.log('Breed not found in database');
});


