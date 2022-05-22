module.exports = {
  basicSearchInput: () => {
    return cy.get("#searchInput");
  },
  searchInputIconButton: () => {
    return cy.get("#searchButton");
  },
  advancedSearchInput: () => {
    return cy.get('input[title="Search Wikipedia"]');
  }
};
