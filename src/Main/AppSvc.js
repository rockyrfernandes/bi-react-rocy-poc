import { authContext, adalApiFetch  } from './adalConfig'

export const user = authContext.getCachedUser();
const baseUri = 'https://feedbackauthpocapi-rocky.azurewebsites.net';

export const fetchCustomersData = () => 
    adalApiFetch(fetch, baseUri + '/api/Northwind/Customers', {});

export const fetchProductsData = () => 
    adalApiFetch(fetch, baseUri + '/api/Northwind/Products', {});