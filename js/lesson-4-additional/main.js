function smallest(num1, num2, num3) {
    if (num1 < num2) {
        return num1 < num3 ? num1 : num3
    } else {
        return num2 < num3 ? num2 : num3
    }
}

function biggest(num1, num2, num3) {
    return num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3
}

function biggestNum(array) {
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > res) {
            res = array[i]
        }
    }
    return res
}

function average(array) {
    let res = 0;
    for (const arrayElement of array) {
        res = res + arrayElement
    }
    return res / array.length
}

function smallAndBig(...nums) {
    let small = nums[0];
    let big = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > big) {
            big = nums[i]
        }
        if (nums[i] < small) {
            small = nums[i]
        }
    }
    console.log(big);
    return small
}
