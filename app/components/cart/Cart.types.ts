import type {CartApiQueryFragment} from 'storefrontapi.generated';

export type CartLine = CartApiQueryFragment['lines']['nodes'][0];

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: 'page' | 'aside';
};
