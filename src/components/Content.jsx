import React from 'react';
import { Menu } from 'antd';
import img1 from  '../images/lales.jpg'
import img2 from  '../images/emer.jpg'
import img3 from  '../images/cj.jpg'
import img4 from  '../images/perez.jpg'
import img5 from '../images/ayson.jpg'
import img6 from '../images/jayson.jpg'
import img7 from '../images/van.jpg'








const Content = () => {
    return(
        <div className='image-btn' >
            <img src={img1} alt=" "/ >
                <div className='btn'>
                <img src={img2} alt=" "/ >
                </div>
                <div className='btn1'>
                <img src={img3} alt=" "/ >
                </div>
                <div className='btn2'>
                <img src={img4} alt=" "/ >
                </div>
                <div className='btn3'>
                <img src={img5} alt=" "/ >
                </div>
                <div className='btn4'>
                <img src={img6} alt=" "/ >
                </div>
                <div className='btn5'>
                <img src={img7} alt=" "/ >
                </div>
            
                
                <div className='shape'>
                    <h5 className='profile'>Reyes </h5>
                    <h5 className='emer'>Mondragon</h5>
                    <h5 className='cj'>Cunanan</h5>
                    <h5 className='perez'>Perez</h5>
                    <h5 className='ayson'>Ayson</h5>
                    <h5 className='jayson'>Jayson</h5>
                    <h5 className='van'>Van</h5>
                    
                </div>
           
                
        </div>
        
    );
};

export default Content;