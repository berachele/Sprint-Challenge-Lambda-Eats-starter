describe("Testing that text can be added", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza")
    })//end of beforeEach
    it("Will add text to Name and Instructions inputs", function(){
        cy.get('input[name="name"]')
          .type("Rachele Edwards")
          .should("have.value", "Rachele Edwards")
        cy.get('textarea')
          .type("Baby is asleep, please knock")
          .should("have.value", "Baby is asleep, please knock")
    })//end of it function
})//end of describe

describe("Testing that we can select multiple toppings", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza")
    })//end of beforeEach
    it("Will successfully select more than one topping", function(){
        cy.get('[data-cy=pepperoni]').click()
        cy.get('[data-cy=cheese]').click().click()
        cy.get('[data-cy=sausage]').click()
    })//end of it function

})//end of describe