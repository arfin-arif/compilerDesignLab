let vowels = 0, consonant = 0, char = 0, num = 0, special = 0
function checkType(str) {
    for (let i = 0; i < str.length; i++) {
        const element = str[i]
        if (element >= 'a' && element <= 'z' || element >= 'A' && element <= 'Z') {
            if (element === "a" || element === "e" || element === "i" ||
                element === "o" || element === "u" && element === "A" || element === "E" || element === "I" ||
                element === "O" || element === "U") {
                vowels++;
            }
            else { consonant++ }
            char++;
        }
        else if (element >= "0" && element <= "9") {
            num++;
        }
        else {

            special++;
        }
    }

    console.log('Vowels :', vowels, 'Consonant :', consonant, 'Num :', num, 'Char :', char, 'Special :', special);
}

checkType('arfin5%');;