context('main page tests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should show empty stared list error after he/she goes to /starred-repositories for first time', () => {
    cy.visit('/starred-repositories').then((response) => {
      cy.xpath('/html/body/div[1]/section[1]/div/main/main/div/p').should(
        'contain',
        'There is no repository. Star them and then you will see them here!',
      );
    });
  });
  it('Visits the main Page', function () {
    // it must be null at start of the app
    expect(localStorage.getItem('listOfSavedRepos')).to.be.equal(null);
    cy.xpath('/html/body/div[1]/section[1]/div/main/main/div[3]/div[1]/div/article/footer/div/div/div')
      .click()
      .then(() => {
        //   after select repo and add it to starred ones it should not be null anymore
        expect(localStorage.getItem('listOfSavedRepos')).not.to.be.equal(null);
      });
  });
  it('Visits the main Page and should show the pre rendered repos', function () {
    // it must be null at start of the app
    expect(localStorage.getItem('listOfSavedRepos')).to.be.equal(null);
    cy.xpath('/html/body/div[1]/section[1]/div/main/main/div[3]/div[1]/div/article/footer/div/div/div')
      .click()
      .then(() => {
        //   after select repo and add it to starred ones it should not be null anymore
        expect(localStorage.getItem('listOfSavedRepos')).not.to.be.equal(null);
      });
  });

  it('should show null for localstorage when the page starts', function () {});
  it('should add new repo after click on every repo', function () {
    // it must be null at start of the app
    expect(localStorage.getItem('listOfSavedRepos')).to.be.equal(null);
    cy.xpath('/html/body/div[1]/section[1]/div/main/main/div[3]/div[1]/div/article/footer/div/div/div')
      .click()
      .then(() => {
        // after select repo and add it to starred ones it should not be null anymore
        expect(localStorage.getItem('listOfSavedRepos')).not.to.be.equal(null);
      });
  });
});
