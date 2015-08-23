var fs = require('fs'); //import the fs core module
var path = require('path'); //import the path core module
var dir = process.argv[2]; // get the directory path (1st argument)
var ext = process.argv[3]; //get the extention to filter for (2nd argument)
// asynchronously read input directory
//when finished reading directory, invoke a callback
//callback takes error and data (contents of the directory, a list of files) as parameters
fs.readdir(dir, function(error,data) {
    //if error gets rid of error
   if (error) throw error;
    //concatenate a dot to our file extention
    ext = '.' + ext;
    //iterate over array of file names
    for (var i=0; i<data.length; i++) {
       // console.log(path.extname(data[i]));
       //if the file extention matches node school's file extention
        if(path.extname(data[i]) == ext) {
           //print the file name
           console.log(data[i]);
    }
    }

    
});