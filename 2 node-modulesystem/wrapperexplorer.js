console.log("Wrappper explorer");
console.log(__filename);
console.log(__dirname);
module.exports.greet = function(app){
    console.log(`Hello ${app}`);
}