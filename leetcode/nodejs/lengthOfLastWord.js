var lengthOfLastWord = function(s) {
    let result = [];
    let word = "";
    for(let i = 0; i < s.length; i++) {
        if((s[i] === " " && word)) {
            result.push(word);
            word = "";
        } 
        
        if(s[i] !== " ") {
            word += s[i];
        }
    }
    
    if(word) result.push(word);
    
    return result[result.length - 1]?.length ?? 0;
};

var lengthOfLastWord = function(s) {
    const word = s.split(' ').filter(el => el != "");
    
    return word[word.length - 1].length ?? 0;
};
