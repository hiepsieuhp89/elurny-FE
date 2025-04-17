// For CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// For images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

// For json
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@mdi/react';
declare module '@mdi/js';
declare module '@radix-ui/react-slot';
declare module '@radix-ui/react-dropdown-menu'; 