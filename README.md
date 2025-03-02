# Cypress End-to-End Testing for Kong Gateway Service

This project contains an end-to-end testing suite for **Kong Gateway** using **Cypress**. The tests are designed to automate the creation of services and routes in Kong Gateway via its UI, ensuring proper functionality.


## Project Structure

The project follows the structure outlined below:


- **cypress/e2e/Features/**: Contains the test cases for creating services and routes in Kong Gateway. The main test file is `CreateServiceRoute.cy.js`.
- **cypress/e2e/Pages/**: Contains the Page Object Model (POM) files like `ServicePage.js` and `RoutePage.js` to abstract page interactions.
- **cypress.config.js**: Configuration file for Cypress, where test patterns and other settings are defined.
- **.github/workflows/cypress.yml**: GitHub Actions configuration for running Cypress tests on every push.
- **docker-compose.yml**: Used to set up the Kong Gateway environment in Docker, making it easier to spin up and test the gateway locally.
- **package.json**: Contains the project’s dependencies, including Cypress and other testing utilities.
- **cypress/reports/**: This folder stores the generated test reports
- **cypress/results/**: This directory stores the results of the tests
- **cypress/screenshots/**: When a test fails, Cypress captures screenshots of the failing test and saves them in this directory for debugging purposes.





## Setup

### 1. **Prerequisites**
   - **Docker Desktop** installed on your machine.
     - You can download Docker Desktop for Windows or macOS from [Docker Official Website](https://www.docker.com/products/docker-desktop).


### 2. **Install Kong Gateway with Docker Desktop**
   - First, ensure Docker Desktop is running on your machine. Open Docker Desktop and make sure it's active.
   
   - Download the `docker-compose.yml` file from  https://drive.google.com/file/d/1ZqYLsFhcBAseFofEV8YCcOt4vZnItiBi/view.

   - Navigate to the directory where your `docker-compose.yml` file is located 

   - Run the following command to start Kong Gateway:
     ```bash
     docker-compose up -d
     ```
     - This will download and start the Kong Gateway Docker container in detached mode.


   - After Docker has started Kong Gateway, you can access **Kong Manager UI** at [http://localhost:8002](http://localhost:8002) in your browser.


### 3. **Install Cypress and other dependencies**
   - In the same project directory, run the following commands to install Cypress and other necessary dependencies:
     ```bash
     npm init -y                                 
     npm install cypress --save-dev 
     npm install cypress-mochawesome-reporter --save-dev              
     ```

### 4. **Run Cypress Tests**
   - Once the installation is complete, you can run the Cypress tests :
   
     - **To open the Cypress UI for interactive testing:**
       ```bash
       npx cypress open
       ```
       This will open the Cypress Test Runner, allowing you to manually run tests. You can also write or update your test scripts in the corresponding JavaScript files. The test script file is `CreateServiceRoute.cy.js` under the `cypress/e2e/Features` folder. It automates the creation of a service and route in Kong Gateway and verifies their successful creation using the filter functionality.

###  5. GitHub Actions (Continuous Integration)
   This project is set up with GitHub Actions to run Cypress tests automatically on every push to the `main` branch. This ensures that all tests are executed whenever changes are made

   - Create a `.github/workflows/cypress.yml` file in your project.It contains the setup for the CI pipeline.Pull the latest code , installs dependencies, and runs the Cypress tests automatically.

### 6. **Teardown Kong Gateway**
   - After running the tests, you can shut down the Docker containers by running:
     ```bash
     xdocker-compose down
     ```
     This will stop and remove the Kong Gateway container, cleaning up the environment.