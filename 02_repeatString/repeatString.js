const repeatString = function(string, num) {

    let i = 0;
    let word = '';
    if(num > 0){
        while(i<num){
            word += string;
            i++;
        }
        return word;

    }
    if(num ===0){
        return "";
    }
    else{
        return 'ERROR';
    }
    
    

};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
