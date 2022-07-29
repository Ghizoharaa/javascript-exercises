const reverseString = function(string) {
    let reverseWord = '';
    let length = string.length-1
    let i = 0;
    while(i<string.length){
        reverseWord += string[length];
        length--;
        
        i++;
    }
    return reverseWord;

};

// Do not edit below this line
module.exports = reverseString;
