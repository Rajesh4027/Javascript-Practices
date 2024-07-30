let users = [
    {name:'Anto',gender:'m'},
    {name:'Franklin',gender:'m'},
    {name:'Sam',gender:'m'},
    {name:'Jasmine',gender:'f'},
    {name:'Jia',gender:'f'}
]

let person ={
    name:'Anto',
    gender:'m',
    country:'India'
}






// const [key,value] = Object.entries(person)[2]
// console.log(key);
// console.log(value);




for(const [key, value] of Object.entries(person)){
    console.log(key+ '-> '+value);
}
// index = 0;
// for (const per in person){
//     if(index == 1){
//         continue;
//     }
//     console.log(per);
//     const val = person[per]
//     console.log(val);

//     index++;
// }









// for(let index=0; index < users.length; index++){

//     if(index==3){
//         continue;
//     }
//     const element = users[index]
//     console.log(element);
// }

// let index = 0;

// for (const user of users) {
//     if(index==3){
//         break;
//     }
//     console.log(user);
//     index++
// }



// try{
// users.forEach((user,i) => {
//     if(i==3){
//         throw new Error("test")
//     }
//     console.log(user);
// })}catch (error){
// console.log(error);
// }