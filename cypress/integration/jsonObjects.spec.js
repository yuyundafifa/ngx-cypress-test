/// <reference types="cypress"/>

describe('JSON objects', () => {

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key" : "value", "key1" : "value1", "key2" : "value2" } //can more than 1 key and value

        const simpleArrayOfValues = [ "one", "two", "three" ] //using [] braces

        const arrayOfObjects = [ {"key" : "value"}, {"key1" : "value1"}, {"key2" : "value2"} ] 

        const typesOfData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Ana",
            "LastName": "Moeni",
            "Age": 20,
            "Students": [
                {
                    "firstName": "Mona",
                    "lastName": "Lisa"
                },
                {
                    "firstName": "Roy",
                    "lastName": "Lee"
                }
            ]
        }

        console.log(simpleObject.key1)
        console.log(simpleObject["key1"])
        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[2].key2)
        console.log(mix.Students[1].lastName)

        const lastNameOfSecondStudent = mix.Students[1].lastName
    })


})