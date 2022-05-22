module.exports = {
  nearbyInfoHeader: () => {
    return cy.get("#mf-nearby-info-holder");
  },
  showNearbyArticleButton: () => {
    return cy.contains("Show nearby articles");
  }
};
