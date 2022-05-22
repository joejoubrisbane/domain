import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("he clicks the {string} link under the languages section", function(
  language
) {
  cy.get(".interlanguage-link")
    .contains(language)
    .click();
});

Then(
  "he should see the language used in website changed to {string}",
  function() {
    cy.url().should("include", "zh.wikipedia.org");
    cy.document().then(doc => {
      expect(doc.documentElement.lang).to.eq("zh");
    });
  }
);
