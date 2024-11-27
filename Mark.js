// function marks(mark){
    
//         if (mark>=35 && mark<=50){
//             console.log("pass c grade");
//     }
//     else if (mark>=51 && mark<=80){

//         console.log("pass b grade");
//     }
//     else{
//         console.log("fail ");
//     }

// }
// marks(61);

function checkgrade(mark){
if(mark>=80){
    console.log("A");

}else if(mark<=80 && mark>=51){
    console.log("B");

}else if(mark<=50 && mark>=35){
    console.log("C");

}//else if (){
  //  console.log("D");

else{

    console.log("Fail");

}
}
checkgrade(66);