import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const mainSection = require('../../../support/pages/main.page')

Given('the domain user Joe is on the domain main page',function () {
    cy.visit(Cypress.config().baseUrl,{headers:{"Accept-Encoding": "gzip, deflate"}});
    cy.url().should('include','www.domain.com.au');
})

When('he clicks the navigation options:{string}',function (pageName) {
    this.pageName = pageName;
    mainSection.navigationButton(pageName).click()
    mainSection.navigationButton(pageName).should('have.class','css-1fscfof')
})
Then('he should see the corresponding page',function () {

    switch (this.pageName) {
        case 'Buy':
            cy.url().should('eq',Cypress.config().baseUrl);
            mainSection.titleHeadLine().should('have.text','Search Australia\'s home of property');
            break;
        case 'Rent':
            cy.url().should('eq',`${Cypress.config().baseUrl}?mode=rent`);
            mainSection.titleHeadLine().should('have.text','Search Australia\'s home of property');
            break;
        case 'House & Land':
            cy.url().should('eq',`${Cypress.config().baseUrl}house-and-land`);
            mainSection.titleHeadLine().should('have.text','House and Land Packages');
            break;
        case 'New Homes':
            cy.url().should('eq',`${Cypress.config().baseUrl}new-homes`);
            mainSection.titleHeadLine().should('have.text','Search Australia\'s home of property');
            break;
        case 'Sold':
            cy.url().should('eq',`${Cypress.config().baseUrl}?mode=sold`);
            mainSection.titleHeadLine().should('have.text','Search Australia\'s home of property');
            break;
        case 'Retirement':
            cy.url().should('eq',`${Cypress.config().baseUrl}retirement`);
            mainSection.titleHeadLine().should('have.text','Retirement Living');
            break;
        case 'Rural':
            cy.url().should('eq',`${Cypress.config().baseUrl}rural`);
            mainSection.titleHeadLine().should('have.text','Find Rural Property in Australia');
            break;

    }
})