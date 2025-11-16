const myColor = ["Red", "Green", "White", "Black"];
function getColors() {
return {
    toString: myColor.toString(),
    joinDefault: myColor.join(),
    joinNoSeparator: myColor.join('')
};
}
module.exports = getColors;
