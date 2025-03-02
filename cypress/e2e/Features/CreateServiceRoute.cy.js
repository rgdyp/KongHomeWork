
import ServicePage from '../Pages/ServicePage';
import RoutePage from '../Pages/RoutePage';

describe('Kong Gateway E2E testing', () => {

const serviceName = `test-service-${Date.now()}`; 
const serviceHost = 'httpbin.konghq.com'; 
const routeName = `test-route-${Date.now()}`;
const routePath = '/test';

  it('Create a new Service and verify it', () => {
    ServicePage.visit();
    ServicePage.createService(serviceName, serviceHost);
  });


  it('Create a new route for a service', () => {
    RoutePage.visit();
    RoutePage.createRoute(routeName, serviceName, routePath);
  
  });

  it('Clean up the route', () => {
    RoutePage.DeleteRoute(routeName);

  });


  it('Clean up the service', () => {
    ServicePage.deleteService(serviceName);   
  });


});