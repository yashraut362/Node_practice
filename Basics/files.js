const fs = require('fs');

//read

fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
console.log('exit')

//write
fs.writeFile('./docs/blog.txt', 'data is deleted', () => {
    console.log('file is written successfully')
})
fs.writeFile('./docs/blog69.txt', 'data is deleted', () => {
    console.log('file is written successfully')
})

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}

//delete

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')

    })
}