import style from "../ComponentCSS/Navbar.module.scss"
import logo1 from "../media/logo(1).svg"
import PopupButton from "./PopupButton";

const Navbar = ()=>{

    return <div id={style.Navbar}>
        <div>
            <img src={logo1} alt="logo" />
        </div>
        <div>
            <h1>
                Accounting RE-Imagined                
            </h1>
        </div>
        <div>
            <PopupButton/>
        </div>
    </div>
}

export default Navbar