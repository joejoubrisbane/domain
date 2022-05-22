module.exports = {
  mobileNavigationDrawer: () => {
    return cy.get('nav.navigation-drawer');
  },
  mobileNavigationHomeLink: () => {
    return cy.get('[data-event-name="menu.home"]')
  },
  mobileNavigationRandomLink: () => {
    return cy.get('[data-event-name="menu.random"]')
  },
  mobileNavigationNearbyLink: () => {
    return cy.get('[data-event-name="menu.nearby"]');
  },
  mobileNavigationLoginLink: () => {
    return cy.get('[data-event-name="menu.login"]');
  },
  personalInfoLink:() => {
    return cy.get("#pt-userpage")
  }
};
