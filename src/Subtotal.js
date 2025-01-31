import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
export default function Subtotal() {
  return (
    <div className='subtotal'> 
        <CurrencyFormat
         renderText={(value)=>(
            <>
            <p>
                subtotal(0 item):<strong>$0</strong>
            </p>
            <small className="subtotal-gift">
                <input type='checkbox' />
                this is contain a gift
            </small>
           
            </>
         )}
         decimalScale={2}
         value={0}
         displayType={'text'}
         thousandSeparator={true}
         
        />
         <button >proceed to checkout</button>
    </div>
  )
}
