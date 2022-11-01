

function lookup(val){
    var result = "";
    var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "Charlie": "Chicago"
}

result = lookup[val]

return result;

}

console.log(lookup("alpha"))
//if array you can use bracket notation to access it. 
//Example: plants[1].list

//to make copy of an object in JS
//JSON.parse(JSON.stringify(collection))




