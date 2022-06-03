let number = [1, 2, 5, 7, 8, 5, 54, 45, 55, 4, 56, 45];

function removeDuplicate(number){
    let unique = [];
    for(let i=0; i<number.length; i++){
        let element = number[i];
        let index = unique.indexOf(element);//if there has no value it will return -1
        if(index == -1){
            unique.push(element);
        }
    }
    console.log(unique);
}
removeDuplicate(number);