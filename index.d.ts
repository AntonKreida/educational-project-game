export {};

// INTERFACE FOR WINDOW
interface globalStateApp {
  status: string;
  lavel: string;
  result: {
    status: string;
    resultTimeGame: string | null;
  };
}

// MODULE
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

// WINDOW
declare global {
  interface Window {
    globalStateApp: globalStateApp;
  }
}
