const fs = require('fs');

const readStream = fs.createReadStream('./docs/largedata.txt', { encoding: 'utf-8' })
const writestream = fs.createWriteStream('./docs/writestreamdata.txt')


readStream.on('data', (chunk) => {
    console.log('---------------New chunks -------------');
    console.log(chunk);
    writestream.write('\nNew chunk\n')
    writestream.write(chunk)

});

 readStream.pipe(writestream);

