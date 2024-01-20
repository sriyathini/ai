import React from "react";
import {useNavigate } from 'react-router-dom';
import Bg from '../image/g.png';
import { FaGamepad } from "react-icons/fa";
import { MdReduceCapacity } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GiLotus } from "react-icons/gi";

function Product(){
    
  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/contact');
  };

    return(
        <div id="product">
            <div className="row">
            <h3>bhbkjsdljedopejdfoeihfkjcdhbcbkjk</h3>
            <h1>Accelerate high-quality <br/>software development</h1>
            <h2>our Ai:tfgyhujklguio</h2><br/><br /><br />
            <button id='button1' className="me-3" onClick={handleButtonClick}>Download the app</button>
            <button id='button2' className="me-3" onClick={handleButtonClick}>take to an expect</button>
            </div>
            <div className="row2">
                <img src={Bg} alt="image"></img>
            </div>
            <div className="row3">
                <h2 className="a">zendesk </h2>
               <h2 className="b">Rakutan</h2>
                <h2 className="c"><FaGamepad />Discord</h2>
                <h2 className="d"><MdReduceCapacity />PACIFIC FUNDS</h2>
                <h2 className="e"><FaLocationCrosshairs />NCR</h2>
                <h2 className="f"><GiLotus />lottice</h2>
              
            </div>
            
        </div>
    )
}
export default Product;