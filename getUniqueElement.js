let l = [6, 1, 2, 5, 2, 1, 3, 4, 4, 5, 6];

var getUniqElement = function(l){
    var isInArray = false;
    var uniqueItem;
    var sortedItem = l.sort();
    // var index = l.indexOf(element);

    for (var i=0 ; i < l.length-1; i++){
        var currentItem = l[i];
        var preItem = l[i-1];
        var nextItem = l[i+1];
        if (currentItem!== preItem && currentItem!== nextItem)
            uniqueItem = currentItem;
    }
     return uniqueItem;
}

var test = getUniqElement(l);
console.log(test);

// var getUniqElement = function(l){
//     var isInArray = false;
//     var uniqueItem;
//     for (var i=0 ; i < l.length-1; i++){
//         var item = l[i];
//         isInArray = l.includes(item);
//         if (!isInArray) {
//             uniqueItem = item;
//         }
        
//     }
//      return uniqueItem;
// }

// var test = getUniqElement(l);
// console.log(test);