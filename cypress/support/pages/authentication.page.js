module.exports = {
  userNameInput: () => {
    return cy.get('form[name="userlogin"]').find("#wpName1");
  },
  userNameInputLabel: () => {
    return cy.get('form[name="userlogin"]')
        .find('[for="wpName1"]')
  },
  passwordInputLabel: () => {
    return cy.get('form[name="userlogin"]')
        .find('[for="wpPassword1"]')
  },
  passwordInput: () => {
    return cy.get('form[name="userlogin"]').find("#wpPassword1");
  },
  loginButton: () => {
    return cy.get("button").contains("Log in");
  },
  loginErrorMessage: () => {
    return cy.get('form[name="userlogin"]').find(".mw-message-box");
  },
};


