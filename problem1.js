// Problem soliving 1


function ticketBuying(tickets){
    const selling = tickets * 120;
    const spending = (500+(8*50));
    const remining = selling - spending;

    if(tickets <0 || typeof tickets !== 'number'){
        return 'Invalid number'
    }
    return remining;
}



console.log(ticketBuying(10))
console.log(ticketBuying(1055))
console.log(ticketBuying(93))
console.log(ticketBuying(100))
console.log(ticketBuying('seven'))