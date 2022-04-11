const milili = [10, 25, 4];
function myArr(mili) {
    "use strict";
    mili.sort(function(a,b){return a - b});
    return mili;
}
console.log(myArr(milili));
module.exports = myArr;