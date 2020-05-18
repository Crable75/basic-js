const chainMaker = {

    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push('( ' + '' + value + ' )~~');
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.chain.length || isNaN(position)) {
            this.chain = [];
            throw new Error('Error');
        }
        this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        this.chain[this.chain.length - 1] = this.chain[this.chain.length - 1].replace(/~/g, '');
        let res = [];
        res = [...this.chain].join('');
        this.chain = [];
        return res;
    },
};

module.exports = chainMaker;
