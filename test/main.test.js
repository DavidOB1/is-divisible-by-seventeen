const { describe } = require("node:test");
const is_divisible_by_seventeen = require("../index");

describe("Testing the main functionality", () => {
    it("common use cases", () => {
        expect(is_divisible_by_seventeen(0)).toBe(true);
        expect(is_divisible_by_seventeen(1)).toBe(false);
        expect(is_divisible_by_seventeen(18)).toBe(false);
        expect(is_divisible_by_seventeen(188)).toBe(false);
        expect(is_divisible_by_seventeen(189)).toBe(false);
        expect(is_divisible_by_seventeen(289)).toBe(true);
    });
});

describe("Testing with large numbers", () => {
    it("exponential numbers", () => {
        expect(is_divisible_by_seventeen(25 ** 7 + 1)).toBe(false);
        expect(is_divisible_by_seventeen(25 ** 7 + 2)).toBe(true);
        expect(is_divisible_by_seventeen(25 ** 7 + 3)).toBe(false);
    });

    it("precomputed large numbers", () => {
        [8735, 2019515, 1251, 9032, 1e13].forEach((num) => {
            const large_number = num * 17;
            expect(is_divisible_by_seventeen(large_number - 1)).toBe(false);
            expect(is_divisible_by_seventeen(large_number)).toBe(true);
            expect(is_divisible_by_seventeen(large_number + 1)).toBe(false);
            expect(is_divisible_by_seventeen(large_number + 17)).toBe(true);
        });
    });
});

describe("Testing with negative numbers", () => {
    it("basic negative numbers", () => {
        expect(is_divisible_by_seventeen(-1)).toBe(false);
        expect(is_divisible_by_seventeen(-17)).toBe(true);
        expect(is_divisible_by_seventeen(-18)).toBe(false);
        expect(is_divisible_by_seventeen(-289)).toBe(true);
    });
});

describe("Testing with non-numbers", () => {
    it("should not work with strings", () => {
        expect(is_divisible_by_seventeen("17")).toBe(false);
        expect(is_divisible_by_seventeen("17.0")).toBe(false);
        expect(is_divisible_by_seventeen("hello world")).toBe(false);
    });

    it("should not work with arrays", () => {
        expect(is_divisible_by_seventeen([])).toBe(false);
        expect(is_divisible_by_seventeen([17])).toBe(false);
        expect(is_divisible_by_seventeen(["string"])).toBe(false);
    });

    it("should not work with objects", () => {
        expect(is_divisible_by_seventeen({})).toBe(false);
        expect(is_divisible_by_seventeen({ key: 17 })).toBe(false);
    });

    it("should not work with booleans", () => {
        expect(is_divisible_by_seventeen(true)).toBe(false);
        expect(is_divisible_by_seventeen(false)).toBe(false);
    });

    it("should not work with null or undefined", () => {
        expect(is_divisible_by_seventeen(null)).toBe(false);
        expect(is_divisible_by_seventeen(undefined)).toBe(false);
    });

    it("should not work with functions", () => {
        expect(is_divisible_by_seventeen(() => 17)).toBe(false);
        expect(is_divisible_by_seventeen(is_divisible_by_seventeen)).toBe(false);
        expect(is_divisible_by_seventeen(expect)).toBe(false);
    });

    it("should not work with an arraybuffer", () => {
        expect(is_divisible_by_seventeen(new ArrayBuffer(17))).toBe(false);
        expect(is_divisible_by_seventeen(new ArrayBuffer(2))).toBe(false);
    });
});
