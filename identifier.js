function isIdentifier(string) {
    if ((string[0] >= 'a' && string <= 'z') || (string[0] >= 'A' && string <= 'Z') || string[0] === '_') {
        for (let i = 1; i < string.length; i++) {
            const element = string[i];
            if (!((element >= 'a' && element <= 'z')
                || (element >= 'A' && element <= 'Z')
                || (element >= '0' && element <= '9')
                || element === '_')) {
                return 'Its not a valid identifier';
            }
        }
        return 'Its a valid';
    }
    else {
        return 'Its not valid identifier';
    }
}
console.log(isIdentifier('ab%'));