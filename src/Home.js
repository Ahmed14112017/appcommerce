import React from 'react'
import "./Home.css"
import Products from './Products'

export default function Home() {


  return (
    <div className='home'>
      <div className="home-container">
        <img src="/image/ecommerce-768x278.jpg" alt="" className="home-img" />
        <div className="home-row">
            <Products 
            id="1"
            title="Force Unisex Force Daily Backpack Backpack (pack of 1)"
            price={11.96}
            rating={4}
            image="image/pag.jpg"
            />
            <Products
            id="2"
            title="Force Unisex Force Daily Backpack Backpack (pack of 1)"
            price={11.96}
            rating={5}
            image="image/pag-1.jpg"
            />

        </div>
        <div className="home-row">
            <Products
            id="3"
            
            title="Force Unisex Force Daily Backpack Backpack (pack of 1)"
            price={11.96}
            rating={3}
            image="image/watch.jpg" />
            <Products 
            id="4"
            title="Force Unisex Force Daily Backpack Backpack (pack of 1)"
            price={11.96}
            rating={4}
            image="image/mobile.jpg"/>
            <Products 
            id="5"
            title="Force Unisex Force Daily Backpack Backpack (pack of 1)"
            price={11.96}
            rating={5}
            image="image/light.jpg"/>

        </div>
        <div className="home-row">
            <Products 
            id="6"
            title="Force Unisex Force Daily Backpack Backpack (pack of 1)"
            price={11.96}
            rating={4}  
            image="image/charge.jpg"/>
            

        </div>

      </div>
    </div>
  )
}
