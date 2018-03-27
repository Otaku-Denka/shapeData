const shape = {
    title: 'name',
    species: 'species',
    info: {
        eyeColor: 'color.eye',
        homeworld: 'planet'
    }
};

let data = {
    name: 'BB8',
    species: 'Droid',
    planet: 'unknown',
    gender: 'none',
    color: {
        eye: 'black',
        body: 'white'
    }
};

/* You should return:
  {
    title: 'BB8',
  species: 'Droid',
    info: {
     eyeColor: 'black',
      homeworld: 'unknown',
    },
  } */

function index(obj, i) {
    return obj[i];
}
function transform(shape, data) {
    // Start your code here
    var clone = {};
    for (var i in shape) {
        if (shape[i] != null && typeof shape[i] == 'object') {
            clone[i] = transform(shape[i], data);
        } else {
            if (shape[i].split('.').length > 1) {
                clone[i] = shape[i].split('.').reduce(index, data);
            } else {
                clone[i] = data[shape[i]];
            }
        }
    }
    return clone;
}
console.log(transform(shape, data));
