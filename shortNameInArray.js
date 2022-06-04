let friends = ["Mohacel", "Hosen", "Anaf", "Takumi", "Usui"];

function smallName(friend){
    let small = friend[0];
    for(let i=0; i<friend.length; i++){
        temp = friend[i];
        console.log(temp);
        if(small.length > temp.length){
            small = temp;
        }   
    }
    console.log("Small name is : "+small);
}
smallName(friends)