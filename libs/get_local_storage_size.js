var getLocalStorageSize = function() {
    var total = 0;
    for (var x in localStorage) {
        // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
        var amount = (localStorage[x].length * 2) / 1024 / 1024;
        if (!isNaN(amount) && localStorage.hasOwnProperty(x)) {
            // console.log(x, localStorage.getItem(x), amount);
            total += amount;
        }
    }
    return total.toFixed(2);
};