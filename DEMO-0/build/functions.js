// eslint-disable
var muliply = function (a, b) {
    var aNumber = typeof a === 'string' ? parseInt(a, 10) : a;
    var bNumber = typeof b === 'string' ? parseInt(b, 10) : b;
    return String(aNumber * bNumber);
};
muliply(2, 5);
muliply("2", 10);
muliply(10, "5");
