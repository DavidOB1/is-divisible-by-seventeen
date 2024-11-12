var is_under_200_and_divis = require("./lower");
var { matches_multiple_of_17, is_match_with_17 } = require("./match");

/**
 * Given a number n >= 2, determines if it is divisble by 17
 *
 * @param n a positive number greater than or equal to 2
 * @returns if n is divisible by 17
 */
function divis_by_17_helper(n) {
    if (is_under_200_and_divis(n)) {
        return true;
    }
    if (matches_multiple_of_17(n)) {
        return true;
    }
    if (is_match_with_17(n)) {
        return true;
    }
    return false;
}

module.exports = { divis_by_17_helper };
