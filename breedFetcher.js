const request = require('request');

// const breedName = `${process.argv[2]}`;


const fetchBreedDescription = function(breedName, breedDescription) {
  
  request('https://api.thecatapi.com/v1/breeds/', (err, _response, body) => {
    const data = JSON.parse(body);
    const catNames = [];
    if (err) {
      breedDescription(err, null);
    }

    for (const cat in data) {
      if (data[cat].name === breedName) {
        breedDescription(null, data[cat].description);
        catNames.push(data[cat].name);
      }
    }
    if (!catNames.includes(breedName)) {
      breedDescription('Breed not found in database', null);
    }
  });
  
};


module.exports = fetchBreedDescription;


