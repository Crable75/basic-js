module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let level = 1;
        arr.forEach((item) => {
            if (typeof item === 'object') {
                this.depth = this.calculateDepth(item) + 1;
                level = Math.max(this.depth, level);
            }
        });
        return level;
    }
};
