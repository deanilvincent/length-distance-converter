const validateNumber = function(functionName, num){
    if(isNaN(num)){
        console.error(`${functionName} requires a valid number`)
        return undefined
    }
}

export default validateNumber