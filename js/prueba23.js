function funcionRest(...restoArg){

    NumTrue=restoArg.reduce((todosNum,num) => typeof num == 'number'?true:false)

    if(NumTrue == true){
        console.log('El numero mayor es '+restoArg.reduce((max, num) => num>max?num:max))
    
    }else{
        console.log(undefined)
    }
}
let array1 = [54,92,10,15,68];

funcionRest(...array1)