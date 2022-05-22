module.exports = {
  mobileNavigationDrawer: () => {
    return cy.get("nav.navigation-drawer");
  },
  mobileNavigationHomeLink: () => {
    return cy.get('[data-event-name="menu.home"]');
  },
  mobileNavigationRandomLink: () => {
    return cy.get('[data-event-name="menu.random"]');
  },
  mobileNavigationNearbyLink: () => {
    return cy.get('[data-event-name="menu.nearby"]');
  },
  mobileNavigationLoginLink: () => {
    return cy.get('[data-event-name="menu.login"]');
  },
  personalInfoLink: () => {
    return cy.get("#pt-userpage");
  },
  logoutButton: () => {
    return cy
      .get('nav[role="navigation"]')
      .find("#pt-logout")
      .click();
  },
  loginButton: () => {
    return cy.get('nav[role="navigation"]').find("#pt-login");
  },
  notLoggedInStatus: () => {
    return cy.get('nav[role="navigation"]').find("#pt-anonuserpage");
  }
};
