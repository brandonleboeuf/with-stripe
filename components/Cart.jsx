import { CartProvider } from 'use-shopping-cart'
import getStripe from '../utils/get-stripejs'
import * as config from '../config'

const Cart = ({ children }) => (
  <CartProvider
    mode="checkout-session"
    stripe={getStripe()}
    currency={config.CURRENCY}
  >
    <>{children}</>
  </CartProvider>
)

export default Cart
