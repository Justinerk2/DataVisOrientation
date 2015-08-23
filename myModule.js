var fs = require ('fs') //importing the fs core module
var path = require ('path') //importing the path core module

// creating a named functions called filterFiles
//takes 3 arugments: directory, file extention, callback function
function filterFiles(dir, ext, callback) {
   
    var dotExt = '.' + ext; //prepend a dot to our file extention to filter for
    var filteredList = []; // create a an empty array put our filtered file names in
    
    //reading the input directory asynchronously
    //takes two arguments a path to a  directory and a callback function
    //call back function takes error and data as arugments
    fs.readdir(dir,function(err,data) {
       //if error exists return our callback with the error
       if(err) return callback(err);
       
       // loop over the array of file names inside the data variable 
        for (var i=0; i<data.length; i++) {
            //check for a file extention match
            if (path.extname(data[i]) == dotExt) {
                // if there is a match push the file name to our filteredList array
                filteredList.push(data[i]);
            }
        }
        
        //invoke our callback with our filteredList
            callback(null,filteredList);
    });
    
    
}
//export our function filterFiles
module.exports = filterFiles