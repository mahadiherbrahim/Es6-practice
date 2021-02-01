const person = { pName: 'Rahim', age: 30, job: 'Web Developer', friend: ['abu', 'jabu', 'babu'], address: 'Zindabazar Sylhet', phone: '017381238' };
// const { job, pName, address, phone } = person;
// console.log(pName, job, address, phone);

const student = {
    sName: 'Habib',
    id: 45,
    info: {
        phone: '09127391',
        address: 'Sylhet Bangladesh',
        leader: 'Sohomot Bhai',
    }
}
const { address } = student.info;
console.log(address);

const friends = ['Sakib Khan', 'Rahim Uddin', 'Amir Khan', 'Sharuk Khan', 'Halimullah'];

const [chotobhai, chotoNayok, ...goribNayok] = friends;

console.log(chotobhai, chotoNayok, goribNayok);