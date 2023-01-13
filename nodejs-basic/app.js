// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });
// NODE_ENV=production node app.js


// perintah ini tidak akan berjalan
// node -e 'process.env.foo = "bar"' && echo $foo


// const cpuInformation = process.memoryUsage(); 
// console.log(cpuInformation);


const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);
// node app.js harry potter