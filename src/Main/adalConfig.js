import { AuthenticationContext, adalFetch, withAdalLogin  } from 'react-adal';
 
export const adalConfig = {
    instance: 'https://login.microsoftonline.com/',
    tenant: 'microsoft.onmicrosoft.com',
    clientId: 'ee62eb04-a503-4b21-b947-ca70c9e84467',
    postLogoutRedirectUri: window.location.origin,
    redirectUri: window.location.origin,
    endpoints: {
        api: 'ee62eb04-a503-4b21-b947-ca70c9e84467',
      },
      cacheLocation: 'localStorage',  
};
 
export const authContext = new AuthenticationContext(adalConfig);
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
export const getToken = () => {
    return authContext.getCachedToken(authContext.config.clientId);
};