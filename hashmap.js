let l = [6, 1, 2, 5, 2, 1, 3, 4, 4, 5, 6];

const obj = {};
for (var i = 0; i < l.length; i++) {
    var key = l[i];
    if (obj.hasOwnProperty(key)) 
        obj[key] = obj[key] + 1
     else 
        obj[key] = 1
}
//console.log(obj);

//function diplayObject(object){  
    for(var propertyName in obj){
        if(obj[propertyName] === 1)  //value of obj property 
            console.log(propertyName);
    }
//}




