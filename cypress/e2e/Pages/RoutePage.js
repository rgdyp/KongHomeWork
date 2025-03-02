class RoutePage {
  visit() {
    cy.visit('http://localhost:8002/default/routes');
  }

  createRoute(routeName, serviceName, routePath) {
    // Open the route creation form
    cy.get('[data-testid="kui-icon-wrapper-add-icon"], .kong-icon-plus svg', { timeout: 10000 })
      .first()
      .click({ force: true });

    // Fill in the route creation form
    cy.get('input[data-testid="route-form-name"]', { timeout: 10000 }).should('be.visible').type(routeName);
    cy.get('[data-testid="kui-icon-svg-chevron-down-icon"]').first().click({ force: true });
    cy.contains('span.select-item-label', serviceName).click({ force: true });
    cy.get('input[data-testid="route-form-paths-input-1"]').type(routePath);
    cy.get('button[type="submit"]').click();
    cy.get('.toaster-message').contains(`Route "${routeName}" successfully created!`);
  }

  // filter route by Filter function
  filterRoute(routeName) {
    cy.visit('http://localhost:8002/default/routes');
    cy.get('[data-testid="filter-button"]').find('svg').should('be.visible').click();
    cy.contains('span', 'Name').parent().find('[data-testid="kui-icon-svg-chevron-down-icon"]', { timeout: 10000 }).click();
    cy.get('[id="filter-name"]', { timeout: 10000 }).should('be.visible').type(routeName);
    cy.get('[data-testid="apply-filter"]').first().click({ force: true });
    cy.wait(3000);
    cy.contains(routeName, { timeout: 3000 }).should('be.visible');
  }

  // Delete route
  deleteRoute(routeName) {
    this.filterRoute(routeName);
    cy.get('td[data-testid="name"]', { timeout: 60000 }).should('be.visible').click();
    cy.get('svg[data-testid="kui-icon-svg-chevron-down-icon"]').first().click();
    cy.contains('span', 'Delete').click();
    cy.get('input[data-testid="confirmation-input"]', { timeout: 10000 }).should('be.visible').type(routeName);
    cy.get('[data-testid="modal-action-button"]').click();
    cy.get('.toaster-message').contains(`Route "${routeName}" successfully deleted!`);

  };
}

export default new RoutePage();
