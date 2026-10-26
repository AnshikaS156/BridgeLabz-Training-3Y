// Q8: Custom Array Prototype Method - myMap()
// This implementation mirrors the main behavior of Array.prototype.map().

Array.prototype.myMap = function (callback, thisArg) {
    if ( (this === null) || (this === undefined) ) {
        throw new TypeError("myMap called on null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback must be a function");
    }

    const source = Object(this);
    const result = new Array(source.length);

    for (let index = 0; index < source.length; index++) {
        // Match built-in map(): skip indexes that are not present.
        if (index in source) {
            result[index] = callback.call(thisArg, source[index], index, source);
        }
    }

    return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myMap((number, index) => number + index)); // [1, 3, 5, 7]

// In real projects, avoid modifying built-in prototypes unless required
// for an assignment or controlled environment.
