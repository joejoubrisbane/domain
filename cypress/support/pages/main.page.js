module.exports = {
  titleHeadLine:() =>{
    return cy.get('[data-testid="headline"]')
  },
  navigationButton: (pageName) =>{
    return cy.get('#domain-home-content').contains('button',pageName)
  },
  propertySearchInput: () =>{
    return cy.get('[data-testid="typeahead__input-item-wrapper"]')
  },
  searchButton: () => {
    return cy.get('[data-testid="search-button"]')
  }
};
