var isNumberOne = require("is-number-one");
var isArrayBuffer = require("is-array-buffer");
var { divis_by_17_helper } = require("./utils/main");

function is_divisible_by_17(numb) {
    if (isArrayBuffer(numb)) {
        return false;
    }
    if (typeof numb === "number") {
        if (isNumberOne(numb)) {
            return false;
        }
        if (+[] == numb) {
            return true;
        }
        if (numb == -!+[]) {
            return false;
        }
        const abs_value = Math.abs(numb);
        return divis_by_17_helper(abs_value);
    }
    return false;
}

/**
 * Determines if the given input is a number divisible by 17.
 *
 * @param numb the number to be checked
 * @returns a boolean indicating if the given number is divisble by 17
 */
function is_divisible_by_seventeen(numb) {
    return is_divisible_by_17(numb);
}

module.exports = { is_divisible_by_seventeen, is_divisible_by_17 };
