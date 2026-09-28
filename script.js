// npm init -> package.json -> written project details

const fs = require("fs"); // file system module

/*fs.writeFile("myfile.txt", "Hello World", function (err) {
if(err) throw err;
else console.log("File created");
})
 */

/* fs.appendFile("myfile.txt", " teri yaada nasamaj is", function (err) {
    if(err) throw err;
    else console.log("File appended");  })
*/

/* fs.rename("myfile.txt", "mynewfile.txt", function (err) {
    if(err) throw err;
    else console.log("File renamed");})
*/ 

/* fs.copyFile("mynewfile.txt","./copy/mynewfile.txt", function (err) {
    if(err) throw err;
    else console.log("File copied"); }) 
*/ 

/* fs.unlink("mynewfile.txt", function (err) {
    if(err) console.error(err);
    else console.log("File deleted");   })
*/

/* fs.rm("copy",{recursive: true}, function (err) {
    if(err) console.error(err);
    else console.log("Directory deleted");   }) 
*/
/* fs.readFile("myfile.txt", "utf-8", function (err, data) {
    if(err) console.error(err);
    else console.log(data); })  */  

const http = require("http"); // http module

const server = http.createServer(function (req, res) {          
    res.end("Hello World");
})
server.listen(3000);