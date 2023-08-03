
import React, { useState } from 'react'
import {BiMinus} from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import {AiOutlineShoppingCart } from "react-icons/ai";
import images from './data';


function MainPage({products, setProducts , showCartValue ,isAddedToCart}) {
const [mainproduct, setmainproduct] = useState(0)
  
   const [photo , setPhoto] = useState("https://github.com/erenymo/e-commerce-product-page-project/blob/main/images/image-product-1.jpg?raw=true");

    const handleIncrement = ()=>{
      setmainproduct(mainproduct+1)
      return setmainproduct;
    }

    const handleDecrement=()=>{
      if(mainproduct>=1){
        setmainproduct(mainproduct-1)
      }else
      return 0;
    }
     

     const handleImage =(id)=>{
     const imageChange = images.find((image)=>image.id===id);
     if(imageChange){
      setPhoto(imageChange.URL)
     }
     }
     
  return (
   
    <div className='container'>
   
        <div className='img-flex'>
        <div className='big-image'>
        <img  className = "1stimage"src={photo}/>
        </div>
       <div className='content-flex'>
       <h2 className='h2Main'>SNEAKER COMPANY</h2>
       <h1>Fall Limited Edition  </h1>
       <h1>Sneakers</h1>
       <p>These low - profile sneakers are your perfect casual weaar companion . featuring a durable rubber outer sole , they'll withstand everything the weather can offer   </p>
       <div className='price-flex'>
       <h1>$125.00</h1>
       <h2>50%</h2>
       </div>
       <h3>$250.00</h3>
      <div className='btn-flex'>
      <button className ="btn1" onClick={handleDecrement}><BiMinus/></button>
       <h2>{mainproduct}</h2>
       <button className='btn1' onClick={handleIncrement}><BiPlus/></button>
       <button className='atc' onClick={()=>showCartValue(mainproduct)}><AiOutlineShoppingCart/> Add to cart </button>
      </div>
       </div>
       </div>
       <div className='small-img-flex'>

        <img src={images[0].URL} onClick={() => handleImage(1)} />
        <img src={images[1].URL} onClick={() => handleImage(2)} />
        <img src={images[2].URL} onClick={() => handleImage(3)} />
        <img src={images[3].URL} onClick={() => handleImage(4)} />
   
       </div>
    </div>
    
  )
}

export default MainPage ;
