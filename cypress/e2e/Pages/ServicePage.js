class ServicePage {
  visit() {
    cy.visit('http://localhost:8002/default/services');
  }

  createService(serviceName, serviceHost) {
    // Open the service creation form
    cy.get('[data-testid="kui-icon-wrapper-add-icon"], .kong-icon-plus svg', { timeout: 10000 })
      .first()
      .click({ force: true });

    // Fill in the service creation form
    cy.get('input[name="name"]', { timeout: 10000 }).should('be.visible').type(serviceName);
    cy.get('[data-testid="gateway-service-protocol-radio"]').check(); //用check方法选择radio button
    cy.get('[data-testid="select-wrapper"]', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.get('[type="button"][value="http"]').click({ force: true }); //选择HTTP选项
    cy.get('input[data-testid="gateway-service-host-input"]', { timeout: 10000 }).should('be.visible').type(serviceHost); //输入host
    cy.get('button[type="submit"]').click();
    cy.get('.toaster-message').contains(`Gateway Service "${serviceName}" successfully created!`);
  }

  // filter service by Filter function
  filterService(serviceName) {
    this.visit();
    cy.get('[data-testid="filter-button"]').find('svg').should('be.visible').click();
    cy.contains('span', 'Name').parent().find('[data-testid="kui-icon-svg-chevron-down-icon"]', { timeout: 10000 }).click();
    cy.get('[id="filter-name"]', { timeout: 10000 }).should('be.visible').type(serviceName);
    cy.get('[data-testid="apply-filter"]').first().click({ force: true });
    cy.wait(3000);
    cy.contains(serviceName, { timeout: 3000 }).should('be.visible');
  }

  // Delete Service
  deleteService(serviceName) {
    this.filterService(serviceName);
    cy.get('td[data-testid="name"]', { timeout: 60000 }).should('be.visible').click();
    cy.get('svg[data-testid="kui-icon-svg-chevron-down-icon"]').first().click();
    cy.contains('span', 'Delete').click();
    cy.get('input[data-testid="confirmation-input"]', { timeout: 10000 }).should('be.visible').type(serviceName);
    cy.get('[data-testid="modal-action-button"]').click();
    cy.get('.toaster-message').contains(`Gateway Service "${serviceName}" successfully deleted!`);
  };
}

export default new ServicePage();
