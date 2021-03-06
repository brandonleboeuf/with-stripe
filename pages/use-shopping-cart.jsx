import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

const DonatePage = () => {
  return (
    <Layout title="Shopping Cart | Next.js">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <p>
          Powered by the{' '}
          <a href="https://useshoppingcart.com">use-shopping-cart</a> React
          hooks library.
        </p>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage
