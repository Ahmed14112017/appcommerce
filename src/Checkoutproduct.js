import React from 'react'
import "./Checkoutproduct.css"
import StarIcon from '@mui/icons-material/Star';


export default function Checkoutproduct() {
  return (
    <div>
      <div className="Checkoutproduct">
      <img src="/image/pag.jpg" alt='pag'  />
            <div className="Checkoutproduct-info">
                <p className='Checkoutproduct-title'>Force Unisex Force Daily Backpack Backpack (pack of 1)</p>
                <p className="Checkoutproduct-price">
                    <small>$</small>
                    <strong>11.96</strong>
                    </p>
                <div className="Checkoutproduct-rating">
                    <p className='StarIcon'><StarIcon/></p>
                    <button className='btn-basket'>Add to Basket</button>
                </div>
            </div>
           
            
        </div>
    </div>
  )
}
