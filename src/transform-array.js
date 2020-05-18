module.exports = function transform(arr) {
    try {
        Array.isArray(arr);
    } catch (err) {
        throw new Error(err);
    }

    arr = arr.map((item, idx) => {
        if (item === '--double-prev' && idx !== 0) return arr[idx - 1];
        return item;
    }).filter((el) => el !== '--double-prev');

    arr = arr.map((item, idx) => {
        if (item === '--double-next' && idx !== arr.length - 1) return arr[idx + 1];
        return item;
    }).filter((el) => el !== '--double-next');

    arr = arr.map((item, idx) => {
        if (arr[idx - 1] === '--discard-next' && idx !== arr.length - 1) return '--discard-next';
        return item;
    }).filter((el) => el !== '--discard-next');

    arr = arr.map((item, idx) => {
        if (arr[idx + 1] === '--discard-prev') return '--discard-prev';
        return item;
    }).filter((el) => el !== '--discard-prev');

    return arr;
};
