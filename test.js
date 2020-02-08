console.log("Hello,world!");
console.log(2 + 2);
console.log(2 + 2);

const fs = require('fs');
const https = require('https');
const myPhotoLocation = 'https://i.stack.imgur.com/zw18i.png';

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great.</h1>" , error => {
    error ? console.log(error) : console.log("Congrats!");
})

https.get( myPhotoLocation , response => {
    response.pipe(fs.createWriteStream(__dirname + "/cat.png"));
});