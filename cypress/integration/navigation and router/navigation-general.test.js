/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should work properly when user the main page correctly', () => {
    cy.request('/').should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it('should show /starred-repositories', () => {
    cy.request('/starred-repositories').then((response) => {
      expect(response).property('status').to.equal(200);
    });
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    cy.xpath('/html/body/div[1]/section[1]/div/main/main/div[1]/a').click();

    cy.location('pathname').should('include', 'repstarred-repositories');

    cy.go('back');
    cy.location('pathname').should('not.include', 'starred-repositories');

    cy.go('forward');
    cy.location('pathname').should('include', 'starred-repositories');

    cy.go(-1);
    cy.location('pathname').should('not.include', 'starred-repositories');
  });
});
