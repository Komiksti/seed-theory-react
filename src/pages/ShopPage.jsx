import React from 'react';
import CartList from '../components/CartList'
import ItemsList from '../components/ItemsList'
import { CartProvider } from '../context/cart-context'

export default function ShopPage() {
  return (
    <div>
      <h2>Our Plants</h2>
      <p>Here is some information about this website.</p>
      <CartProvider>
        <CartList />
        <ItemsList />
      </CartProvider>
    </div>
  );
}
