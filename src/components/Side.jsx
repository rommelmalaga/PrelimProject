import React from 'react';
import img2 from '../components/side/les.jpg'
 
function Side(){
    return(
        <div className='side1'>
        <img></img>
        <div className='me2'>
        <p className='me'>ayson.jordan</p>
        <p className='me1'>Jordan Lawrence Ayson</p>
        <p className='switch'>Switch</p>
        </div>
        <div>
                <p className='sugg'>Suggested for you</p>
        </div>
       
        <div className='side3'>
               
                <input type="radio" id="img-1" name="image"></input>
                <input type="radio" id="img-2" name="image"></input>
                <input type="radio" id="img-3" name="image"></input>
                <input type="radio" id="img-4" name="image"></input>
                </div>
                <div>

                </div>
        </div>
    )
}

export default Side;