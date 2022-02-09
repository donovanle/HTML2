function isPresent2d(arr2d, value) {
    for(var i = 0; i<arr2d.length; i++){
        var row = arr2d[i];
        for(var t = 0; t<row.length;t++){
            if(row[t]==value){
                return true;
            }
        }
    }
    return false;
}
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
isPresent2d(arr2d,8);


function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i < arr2d.length; i++){
        var row = arr2d[i];
        for(var t = 0; t<row.length;t++){
            flat.push(row[t]);
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]





