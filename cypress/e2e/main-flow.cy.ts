/// <reference types="cypress" />

describe("Multi-step form flow", () => {
  it("completes the form flow successfully", () => {
    cy.visit("http://localhost:5173");

    // Step 1 - User Info
    cy.get('input[name="name"]').type("Jane Doe");
    cy.get('input[name="email"]').type("jane@example.com");
    cy.get('input[name="phoneNumber"]').type("123456789");
    cy.contains(/next step/i).click();

    // Step 2 - Plan Selection
    cy.contains(/pro/i).click();
    cy.get('[data-testid="yearly-select-div"]').click();
    cy.contains(/next step/i).click();

    // Step 3 - Add-ons
    cy.contains(/online service/i).click();
    cy.contains(/large storage/i).click();
    cy.contains(/next step/i).click();

    // Step 4 - Summary
    cy.contains(/pro \(yearly\)/i).should("exist");
    cy.get('[data-testid="total-price"]').should("contain", "$180/yr");
    // cy.contains(/confirm/i).click({force: true}); - does not trigger onSubmit hence next line:
    cy.get('form').submit();

    // Step 5 - Confirmation
    cy.contains('h1', 'Thank you!', { timeout: 10000 }).should('exist');
  });
});
