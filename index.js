//build function writeCards() with 2 arguments...
const array = [];
function writeCards(names, event){
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;   
    }
    return array;
}
function countDown(i){
    while ( i>=0 ){
        console.log(i);
        i--;
    }
}