import React, {useState} from 'react'
import { HiShoppingCart } from "react-icons/hi";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)


  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <HiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>

              </div>
            )}
        
        </div>
        <div className='presentation'></div>
    </header>
  )
}
