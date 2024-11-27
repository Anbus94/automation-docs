function task1 (callback) {
    console.log("task1 is completed");
    callback();

}

function task2 (callback){
    console.log("task2 is completed");
    callback();

}
function task3 (callback){
    console.log("task3 is completed");
    callback();

}
function task4 (){
    console.log("task4 is completed");
    
}

task1(() =>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("all tasks are done");
            })
        })
    })     
})

function an(callback){
    console.log("fisrt");
    callback();
}
function bu(){
    console.log("second");
    
}
an(bu);