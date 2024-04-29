// src/global.d.ts

interface Window {
    gtag: (command: string, action: string, parameters: { [key: string]: any }) => void;
  }