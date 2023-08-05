import { useState } from 'react';
import { Button,  Popover } from 'antd';
import style from "../ComponentCSS/PopupButton.module.scss"
import hide from "../media/hide.png"
import showimg from "../media/show.png"

const content = (show:boolean ,setShow:React.Dispatch<React.SetStateAction<boolean>>)=>{
    return (
        <div id={style.popup}>
            <input type="text" placeholder="Mobile Number"/>
            <div>
                <input type={show ? "text" : "password"} placeholder="Password"/>
                <button onClick={()=>setShow((prev: boolean)=>!prev)}>
                        <img src={show ? hide : showimg} alt="" />
                </button>
            </div>
            <button id={style.popupButn}>
                <h4>Login / Register</h4>
            </button>
            <p>Forgot Password ?</p>
        </div>
      );
}

const buttonWidth = 70;

const PopupButton = () => {
  const [show,setShow] = useState(false)
  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" content={content(show,setShow)} arrow={true}>
          <Button id={style.popupButn}>
            <h4>Login / Register</h4>
          </Button>
        </Popover>
      </div>
    </div>
  );
};

export default PopupButton;