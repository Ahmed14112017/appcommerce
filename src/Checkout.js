import React from 'react'
import "./Checkout.css"
import Checkoutproduct from './Checkoutproduct'
import Subtotal from './Subtotal'
export default function Checkout() {
  return (
    <div>
        <div className="checkout">
        
          <div className="checkout-left">
          <img src='./image/headline.jpg' alt='headline' className='headling-image'/>
              <div className="checkout-title">
              <h3>your shopping basket</h3>
              <Checkoutproduct />
              <Checkoutproduct />
              </div>
          </div>
          <div className="checkout-right">
              <Subtotal />
          </div>
        </div>
    </div>
  )
}
