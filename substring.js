let result = '';
let possibleMatch = '';
function isSubString(string, subString) {
    const index = string.indexOf(subString);
    console.log('SubString founded at index: ', index);
    if (string.indexOf(subString) === -1) {
        console.log('SubString not found');
    }
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
            result += possibleMatch;
            possibleMatch = '';
            if (i === 0) {
                result += element;
            }
            else {
                i = 0;
                index--;
            }
        }
    }
    return 'After deleting the substring: ' + result;
}
console.log(isSubString('axbjcd', 'jc'));;



