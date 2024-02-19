import React from "react";
import '../App.css';
import { AiFillMessage,
         AiOutlineHeart,
         AiOutlineSend
 } from "react-icons/ai";
 import { BiBookmark } from "react-icons/bi";
 

function New() {
  
    return (
        <div className="book4">
    <p className=""><AiOutlineHeart /></p>
    <p className=""> <AiFillMessage /></p>
    <p className=""><AiOutlineSend /></p>
    <p className="book5"> <BiBookmark /> </p>
    <div>
        <input className="put" type="text" placeholder="Add comment"></input>
    </div>
    <div className="mango">
        <input type="" id=""></input>
    </div>
    <p className="name"> 20 likes</p>
    <div className="new">
        <p className="sidee">emerson</p>
        <p className="sidee2">Follows you</p>
        <p className="sid1">Cunanan</p>
        <p className="sid2">Suggested for you</p>
        <p className="si1">leskie</p>
        <p className="si2">Follows you</p>
        <p className="s1">perskie</p>
        <p className="s2">Suggested for you</p>
    <div className="tp1">
        <p className="">See all</p>
        <div className="tp2">
            <p>Follow</p>
            <p className="t1">Follow</p>
            <p className="t2">Follow</p>
            <p className="t3">Follow</p>

        </div>
        <div className="foot1">
        <footer>About Help Press Api Jobs Privacy Terms Locations Location Language Meta Verified</footer>
        <p className="foot11"><i class="fa fa-copyright"></i> 2024 INSTARGRAM FROM GROUP</p>
        
        </div>
    </div>
    </div>
   
        </div>
    );
  
}
export default New;