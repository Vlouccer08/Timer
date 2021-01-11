//Timer.js
var value = 10
function timer() {
    var timeout = setTimeout(function() { timer(); }, 1000);
    value--
    if( value==0 ) {
        clearTimeout(timeout);
        setTimeout(function() { value = 10 }, 1000);
    }
}
