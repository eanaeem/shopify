import {CartMainProps} from './Cart.types';
import {CartLines} from './CartLines';
import {CartSummary} from './CartMain';
import {CartDiscounts} from './CartDiscounts';
import {CartCheckoutActions} from './CartCheckoutActions';

export function CartDetails({layout, cart}: CartMainProps) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className="cart-details">
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}
