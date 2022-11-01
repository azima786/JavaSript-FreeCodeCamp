var contacts =[ {

    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwards", "Magic", "Hargrd"]
},
{
   "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "04872356",
    "likes": ["Int cases", "VCiolin"]
},
{
   "firstName": "Akira",
    "lastName": "Laine",
    "number": "09869899",
    "likes": ["Pizza", "Coding", "Brownie"]
}
]


function lookUpProfile(name, prop){

for(var i =0; i<contacts.length; i++){
    if(contacts[i].firstName==name){
        return contacts[i][prop] || "No Such property"
    }
}

"No such contacts"
}

var data = lookUpProfile("Akira", "lastName")
console.log(data)