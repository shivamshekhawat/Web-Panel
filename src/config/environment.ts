// Environment configuration
const resolvedApiBaseUrl = (process.env.REACT_APP_API_BASE_URL || 'https://b5eafc07097a.ngrok-free.app').trim();

// Force cache refresh
console.log('🔄 Environment loaded at:', new Date().toISOString());
console.log('🌐 API Base URL:', resolvedApiBaseUrl);

export const config = {
  apiBaseUrl: resolvedApiBaseUrl as string,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

export default config;
