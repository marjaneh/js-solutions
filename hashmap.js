let l = [6, 1, 2, 5, 2, 1, 3, 4, 4, 5, 6];

const obj = {};
for (var i = 0; i < l.length; i++) {
    var key = l[i];
    if (obj.hasOwnProperty(key)) 
        obj[key] = obj[key] + 1
     else 
        obj[key] = 1
}


function diplayObject(object){  //
    for(propertyName in object){
        object[propertyName]
    }
}



console.log(obj);
