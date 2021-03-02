module.exports = function repeater(str, options) {

    let res;
    if (options.separator === undefined) options.separator = '+';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';

    if (options.addition !== undefined) {
        let additionFrame = options.addition;
        console.log(options.addition);
        for (let i = 0; i < options.additionRepeatTimes - 1; i += 1) {
            additionFrame += `${options.additionSeparator}${options.addition}`;
        }

        res = `${str}${additionFrame}`;

        for (let i = 0; i < options.repeatTimes - 1; i += 1) {
            res += `${options.separator}${str}${additionFrame}`;
        }

    } else {
        res = `${str}`;
        const separator = options.separator || '+';
        for (let i = 0; i < options.repeatTimes - 1; i += 1) {
            res += `${separator}${str}`;
        }
    }

    return res;
}