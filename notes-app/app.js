const fs = require('fs');

// fs.writeFile('note.txt' , 'my name is ahmad' , err => {
//     if(err){
//         console.log('error occur on write data in file');
//         return;
//     }
//     console.log('File update sucessfully');
// });


fs.appendFile('note.txt' , 'i work in tecsob' , err => {
    if(err){
        return;
    }
    console.log('Data Append Sucessfully');
});
