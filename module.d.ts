import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from 'react-dom/client';

declare global {
  const React: typeof React;
  const ReactDOM: typeof ReactDOM;

  const createRoot: (container: Element | DocumentFragment | null) => Root;

  declare module "*";

  declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }

  declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
