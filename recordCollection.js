var collection = {
    
"2545":{
    "album": "Slippery when wet",
    "artist": "Bon Joovi",
    "tracks": [
        "let it rock",
        "You give love"
    ]},

"2468": {
    "artist": "Robet Palmer",
    "tracks": []
},

"5439": {
    "album": "Abba Gold"
}
}

var collectionCopy = JSON.parse(JSON.stringify(collection)) 
// to make copy of collection

function updateRecords(id, prop, value){

if(value === ""){
    delete collection[id, prop]
}

else if  (prop === "tracks"){
    collection[id][prop] = collection[id][prop] || [];
    collection [id][prop].push(value)
}

else {
    collection[id][prop] = value;
}

    return collection;
}

updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", "ABBA"));