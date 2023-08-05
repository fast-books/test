// import { useState } from "react"
// import BookVector from "../media/Book-vector-graphics.png"

import style from "../ComponentCSS/BannerPart.module.scss"
import BannerVideo from "../media/BannerVideo.mp4"


const BannerPart = ()=>{

    // const [Number1,setNumber] = useState("");

    var wishlist = window.location.href;

    return <div 
        id={style.Banner}
    >
        <div id={(wishlist[wishlist.length-1]==="t"||wishlist[wishlist.length-2]==="s"||wishlist[wishlist.length-3]==="i"||wishlist[wishlist.length-4]==="l") ? style.div1 : style.div0}>
            {/* <img src={BookVector} alt="Book Vector" /> */}
            <video 
                width="90%" 
                height="80%"
                loop
                autoPlay
                // type="video/mp4"
                muted
                src={BannerVideo}
            >
            </video>
        </div>
        <div style={{display:(wishlist[wishlist.length-1]==="t"||wishlist[wishlist.length-2]==="s"||wishlist[wishlist.length-3]==="i"||wishlist[wishlist.length-4]==="l") ? "block":"none"}} id={style.wishlist}>
            <input type="text" placeholder="Email I'd" />
            <button>Join Wishlist</button>
        </div>
        {/* <div>
            <h1>Start Now</h1>
            <input 
                type="text"  
                placeholder="Enter Mobile Number" 
                value={Number1}
                onChange={(e)=>setNumber(e.target.value)}
            />
            <br />
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <p>
                    By clicking the checkbox , you agree and accept that all your personal information 
                    (including the sensitive personal information) shall be governed as per the Privacy 
                    Policy and shall be stored in the servers located in territory of India owned ,
                    controlled and managed  by us.
                </p>
            </label>
            <button>
                Continue
            </button>
        </div> */}

    </div>
}

export default BannerPart