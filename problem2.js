// Problem 2 ---------------------------------------------------------------------

    // let lastLetter = names.slice(-1);
    // let lastLetter = names[names.length -1]




function checkName(names){
    if(typeof names !== 'string'){
        return 'Invalid'
    }
    let letter = ['a','e','i','o','u'];
    // let check = false;
    let lastLetter = names.slice(-1).toLowerCase();
    let check = lastLetter.includes(letter)
        // for(const char of letter){
        //     if(char === lastLetter){
        //         check = true;
        //     }
        // }
      return check? 'Good Name': 'Bad Name'
    }

   

console.log(checkName(154))
console.log(checkName('Rahman'))