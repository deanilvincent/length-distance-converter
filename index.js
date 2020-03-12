module.exports = {
    kmToMiles(km){
        //const validateNumber = require('./index.util')
        if(this.isValidNumber("kmToMiles", km) === false)
            return undefined

        return this.roundOffResult(km * 0.62137)
    },
    milesToKm(miles){
        if(this.isValidNumber("milesToKm", miles) === false)
            return undefined

        return this.roundOffResult(miles / 0.62137)
    },
    metersToYard(meter){
        if(this.isValidNumber("metersToYard", meter) === false)
            return undefined

        return this.roundOffResult(meter * 1.0936)
    },
    yardsToMeter(yard){
        if(this.isValidNumber("yardsToMeter", yard) === false)
            return undefined

        return this.roundOffResult(yard / 1.0936)
    },
    metersToFeet(meter){
        if(this.isValidNumber("metersToFeet", meter) === false)
            return undefined

        return this.roundOffResult(meter * 3.2808)
    },
    feetToMeter(feet){
        if(this.isValidNumber("feetToMeter", feet) === false)
            return undefined

        return this.roundOffResult(feet / 3.2808)
    },
    yardsToFeet(yard){
        if(this.isValidNumber("yardsToFeet", yard) === false)
            return undefined

        return this.roundOffResult(yard * 3.000)
    },
    feetToYard(feet){
        if(this.isValidNumber("feetToYard", feet) === false)
            return undefined

        return this.roundOffResult(feet / 3.000)
    },
    cmToInches(cm){
        if(this.isValidNumber("cmToInches", cm) === false)
            return undefined

        return this.roundOffResult(cm * 0.39370)
    },
    inchToCm(inch){
        if(this.isValidNumber("inchToCm", inch) === false)
            return undefined

        return this.roundOffResult(inch / 0.39370)
    },
    mmToInches(mm){
        if(this.isValidNumber("mmToInches", mm) === false)
            return undefined

        return this.roundOffResult(mm * 0.039370)
    },
    inchToMm(inch){
        if(this.isValidNumber("inchToCm", inch) === false)
            return undefined

        return this.roundOffResult(inch / 0.039370)
    },
    feetToInches(feet){
        if(this.isValidNumber("feetToInches", feet) === false)
            return undefined

        return this.roundOffResult(feet * 12.000)
    },
    inchToFeet(inch){
        if(this.isValidNumber("inchToFeet", inch) === false)
            return undefined

        return this.roundOffResult(inch / 12.000)
    }


    // other methods
    ,isValidNumber(functionName, num){
        if(isNaN(num)){
            console.error(`${functionName} requires a valid number`)
            return false
        }
    },
    roundOffResult(value){
        return Number(value.toFixed(2))
    }
}