const person = {
    name: 'Jose',
    age: 28,
    location: {
        city: 'San Cristobal',
        temp: 56
    }
};

const { city: locationCity } = person.location;

console.log(`${locationCity}.`);