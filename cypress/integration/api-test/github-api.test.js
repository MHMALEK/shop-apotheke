/// <reference types="cypress" />

context('Github Api Network Requests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should show correct language filter after user set query ', () => {
    cy.request('GET', 'https://api.github.com/search/repositories?q=created:%3E2021-01-31+language:js', {
      sort: 'stars',
      order: 'desc',
      per_page: '100',
    })
      .its('body')
      .its('0')
      .then((repo) => {
        expect(repo).property('id').to.be.a('number');
      });
  });
  it('should show 10 items length per page  after user set query params', () => {
    cy.request('GET', 'https://api.github.com/search/repositories?q=created:%3E2021-01-31+language:js', {
      sort: 'stars',
      order: 'desc',
      body: '10',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.items.length).to.eq(10);
    });
  });
});
