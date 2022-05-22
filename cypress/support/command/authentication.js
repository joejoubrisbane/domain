const Authentication = require("../pages/authentication.page.js");
const Navigation = require("../pages/navigation.page.js");

Cypress.Commands.add("login", (userName, password) => {
  Authentication.userNameInput().type(userName);
  Authentication.passwordInput().type(password);
  Authentication.loginButton().click();
});

Cypress.Commands.add("logout", () => {
  Navigation.logoutButton().click();
});

