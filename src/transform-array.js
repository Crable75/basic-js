module.exports = function transform(arr) {
    try {
        Array.isArray(arr);
    } catch (err) {
        throw new Error(err);
    }

    let resArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') {
            resArray.push(arr[i]);
        } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
            resArray.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev' && arr[i-2] !== '--discard-next' && i !== 0) {
            resArray.push(arr[i - 1]);
        } else if (arr[i] === '--discard-next' && i !== arr.length - 1) {
            i++;
        } else if (arr[i] === '--discard-prev' && arr[i-2] !== '--discard-next' && i !== 0) {
            resArray.pop();
        }
    }

    return resArray;
};

