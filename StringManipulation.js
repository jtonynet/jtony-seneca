function init(options) {

    function _charToNumber(char) {

        return char.charCodeAt(0) - 96;
    }

    function StringManipulation() {}

    let stringManipulation = new StringManipulation();

    stringManipulation.contains = function(a, b) {

        return a.indexOf(b) > -1;
    }

    stringManipulation.stringToOrdinal = function(str) {

        let result = "";
        for (let i = 0, len = str.length; i < len; i++) {
            result += _charToNumber(str[i]);
        }

        return result;
    }

    return stringManipulation;

}

module.exports = init;