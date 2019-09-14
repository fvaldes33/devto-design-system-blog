import { JSX } from 'devto-core';
import { defineCustomElements } from 'devto-core/loader';

import { createReactComponent } from './createComponent';

export const MyComponent = /*@__PURE__*/createReactComponent<JSX.MyComponent, HTMLMyComponentElement>('my-component');

// TODO: defineCustomElements() is asyncronous
// We need to use the promise
defineCustomElements(window);
