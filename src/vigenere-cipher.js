class VigenereCipheringMachine {
    constructor(isReverse) {
        if (isReverse === undefined) {
            this.isReverse = true;
        } else {
            this.isReverse = isReverse;
        }
    }

    encrypt(message, key) {
        const messageArray = message.toUpperCase().split('');
        key = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0; i < messageArray.length; i += 1) {
            if (messageArray[i].charCodeAt(0) < 65 || messageArray[i].charCodeAt(0) > 90) {
                continue;
            }
            let newCode = messageArray[i].charCodeAt(0) + key[keyIndex].charCodeAt(0) - 65;
            if (newCode > 90) newCode -= 26;
            messageArray[i] = String.fromCharCode(newCode);
            keyIndex = keyIndex >= key.length - 1 ? 0 : keyIndex + 1;
        }
        return this.isReverse ? messageArray.join('') : messageArray.reverse().join('');
    }

    decrypt(message, key) {
        const messageArray = message.split('');
        key = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0; i < messageArray.length; i += 1) {
            if (messageArray[i].charCodeAt(0) < 65 || messageArray[i].charCodeAt(0) > 90) {
                continue;
            }
            let newCode = messageArray[i].charCodeAt(0) - key[keyIndex].charCodeAt(0) + 65;
            if (newCode < 65) newCode += 26;
            messageArray[i] = String.fromCharCode(newCode);
            keyIndex = keyIndex >= key.length - 1 ? 0 : keyIndex + 1;
        }
        return this.isReverse ? messageArray.join('') : messageArray.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;