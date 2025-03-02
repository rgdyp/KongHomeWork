# Cypress End-to-End Testing for Kong Gateway Service

This project contains an end-to-end testing suite for **Kong Gateway** using **Cypress**. The tests are designed to automate the creation of services and routes in Kong Gateway via its UI, verifies their successful creation and clean up test data upon completion.


## Project Structure

The project follows the structure outlined below:

```Markdown 

KONGHOMEWORK/
│── .github/workflows/
│   └── cypress.yml                # Configuration for running Cypress tests in CI
│── cypress/                        # Cypress end-to-end (E2E) test directory
│   ├── e2e/                        # E2E test files
│   │   ├── Features/               # Test cases categorized by feature
│   │   │   └── CreateServiceRoute.cy.js
│   │   ├── Pages/                   # Page Object Model (POM) for better test structure
│   │   │   ├── ServicePage.js
│   │   │   ├── RoutePage.js
│   ├── reports/                     # Cypress test reports
│   │   ├── screenshots/             # Cypress test execution screenshots
│   │   ├── videos/                  # Cypress test execution video recordings
│   │   ├── index.html                # Main HTML report for test results
│   ├── support/                     # Cypress support files
│   │   └── e2e.js                   # Global Cypress setup and configuration
│── node_modules/                     # Node.js dependencies (auto-generated)
│── cypress.config.js                 # Cypress configuration file

```




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


### 3. **Install Cypress and dependencies**
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
       This will open the Cypress Test Runner where you can manually run tests. In this project, the test scripts are located in the `cypress/e2e/Features` directory named  `CreateServiceRoute.cy.js`,This test automates the creation of a service and route in Kong Gateway, verifies their successful creation, and cleans up test data afterward.

      - **To run the tests in headless mode (without UI):**
       ```bash
       npx cypress run
       ```
       This will execute all the tests in the command line without opening the Cypress Test Runner.
       The test results are generated using cypress-mochawesome-reporter and stored in the cypress/reports directory, including videos and screenshots for reference.

###  5. GitHub Actions (Continuous Integration)
   This project is set up with GitHub Actions to run Cypress tests automatically on every push to the `main` branch. This ensures that all tests are executed whenever changes are made

   - Create a `.github/workflows/cypress.yml` file in your project.It contains the setup for the CI pipeline.Pull the latest code , installs dependencies, and runs the Cypress tests automatically.

### 6. **Teardown Kong Gateway**
   - After running the tests, you can shut down the Docker containers by running:
     ```bash
     docker-compose down
     ```
     This will stop and remove the Kong Gateway container, cleaning up the environment.