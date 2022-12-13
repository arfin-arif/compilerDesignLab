let result = '';
let possibleMatch = '';
function isSubString(string, subString) {
    const index = string.indexOf(subString);
    console.log('SubString founded at index: ', index);
    if (string.indexOf(subString) === -1) {
        console.log('SubString not found');
    }
    // deletion part
    for (let index = 0, i = 0; index < string.length; index++) {
        const element = string[index];
        if (string[index] === subString[i]) {
            if (i === subString.length - 1) {
                possibleMatch = ''
                i = 0;
            }
            else {
                possibleMatch += element;
                i++;
            }
        }
        else {
            if (i === 0) {
                result += element;
            }
        }
    }
    return 'After deleting the substring: ' + result;
}
console.log(isSubString('abxbjccd', 'jcc'));;



