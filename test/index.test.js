const assert = require('chai').assert

const app = require('../index')
// ############## KM TO MILES
describe("Test km to miles", ()=>{
    it("Should return valid km to miles", ()=>{
        assert.equal(app.kmToMiles(2), 1.24)
    })

    it("Should not return valid km to miles", ()=>{
        assert.notEqual(app.kmToMiles(2), 1.234343)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.kmToMiles(2),"number")
    })

    it("Should return undefined if km is not a number", ()=>{
        assert.equal(app.kmToMiles('asdf'), undefined)
    })
})

// ############## MILES TO KM
describe("Test miles to km", ()=>{
    it("Should return valid miles to km", ()=>{
        assert.equal(app.milesToKm(1.24), 2)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.milesToKm(2),"number")
    })

    it("Should return undefined if miles is not a number", ()=>{
        assert.equal(app.milesToKm('asdf'), undefined)
    })
})

// ############## METERS TO YARD
describe("Test meters to yard", ()=>{
    it("Should return valid meters to yard", ()=>{
        assert.equal(app.metersToYard(2), 2.19)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.metersToYard(2),"number")
    })

    it("Should return undefined if meter is not a number", ()=>{
        assert.equal(app.metersToYard('asdf'), undefined)
    })
})

// ############## YARDS TO METER
describe("Test yards to meter", ()=>{
    it("Should return valid yard to km", ()=>{
        assert.equal(app.yardsToMeter(2.19), 2)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.yardsToMeter(2),"number")
    })

    it("Should return undefined if yard is not a number", ()=>{
        assert.equal(app.yardsToMeter('asdf'), undefined)
    })
})

// ############## METERS TO FEET
describe("Test meters to feet", ()=>{
    it("Should return valid meters to feet", ()=>{
        assert.equal(app.metersToFeet(2), 6.56)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.metersToFeet(2),"number")
    })

    it("Should return undefined if meter is not a number", ()=>{
        assert.equal(app.metersToFeet('asdf'), undefined)
    })
})

// ############## YARDS TO METER
describe("Test feet to meters", ()=>{
    it("Should return valid feet to meter", ()=>{
        assert.equal(app.feetToMeter(6.56), 2)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.feetToMeter(2),"number")
    })

    it("Should return undefined if meter is not a number", ()=>{
        assert.equal(app.feetToMeter('asdf'), undefined)
    })
})

// ############## YARDS TO FEET
describe("Test yards to feet", ()=>{
    it("Should return valid yards to feet", ()=>{
        assert.equal(app.yardsToFeet(2), 6)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.yardsToFeet(2),"number")
    })

    it("Should return undefined if yard is not a number", ()=>{
        assert.equal(app.yardsToFeet('asdf'), undefined)
    })
})

// ############## FEET TO YARD
describe("Test feet to yards", ()=>{
    it("Should return valid feet to yards", ()=>{
        assert.equal(app.feetToYard(6), 2)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.feetToYard(2),"number")
    })

    it("Should return undefined if feet is not a number", ()=>{
        assert.equal(app.feetToYard('asdf'), undefined)
    })
})

// ############## CM TO INCHES
describe("Test cm to inches", ()=>{
    it("Should return valid cm to inches", ()=>{
        assert.equal(app.cmToInches(2), 0.79)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.cmToInches(2),"number")
    })

    it("Should return undefined if cm is not a number", ()=>{
        assert.equal(app.cmToInches('asdf'), undefined)
    })
})

// ############## INCHES TO CM
describe("Test inches to cm", ()=>{
    it("Should return valid inches to cm", ()=>{
        assert.equal(app.inchToCm(0.79), 2.01)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.inchToCm(2),"number")
    })

    it("Should return undefined if inch is not a number", ()=>{
        assert.equal(app.inchToCm('asdf'), undefined)
    })
})

// ############## MM TO INCHES
describe("Test mm to inches", ()=>{
    it("Should return valid mm to inches", ()=>{
        assert.equal(app.mmToInches(2), 0.08)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.mmToInches(2),"number")
    })

    it("Should return undefined if mm is not a number", ()=>{
        assert.equal(app.mmToInches('asdf'), undefined)
    })
})

// // ############## INCHES TO MM
describe("Test inches to mm", ()=>{
    it("Should return valid inches to mm", ()=>{
        assert.equal(app.inchToMm(0.08), 2.03)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.inchToMm(2),"number")
    })

    it("Should return undefined if inch is not a number", ()=>{
        assert.equal(app.inchToMm('asdf'), undefined)
    })
})

// ############## FEET TO INCHES
describe("Test feet to inches", ()=>{
    it("Should return valid feet to inches", ()=>{
        assert.equal(app.feetToInches(2), 24)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.feetToInches(2),"number")
    })

    it("Should return undefined if mm is not a number", ()=>{
        assert.equal(app.feetToInches('asdf'), undefined)
    })
})

// ############## INCHES TO FEET
describe("Test inches to feet", ()=>{
    it("Should return valid inches to feet", ()=>{
        assert.equal(app.inchToFeet(24), 2)
    })

    it("Should return typeof number", ()=>{
        assert.typeOf(app.inchToFeet(2),"number")
    })

    it("Should return undefined if inch is not a number", ()=>{
        assert.equal(app.inchToFeet('asdf'), undefined)
    })
})