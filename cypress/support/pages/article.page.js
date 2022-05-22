module.exports = {
  articleTitle: () => {
    return cy.get("#firstHeading");
  },
  searchResultSuggestion: () => {
    return cy.get(".mw-search-createlink");
  }
};
