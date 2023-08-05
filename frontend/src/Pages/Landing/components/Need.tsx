import style from "../ComponentCSS/Need.module.scss"
import defaultImage from "../media/defaultImage.png"

const Need = ()=>{
    return <div id={style.need}>
        <div>
            <h1>
                EVERYTHING YOU NEED
            </h1>
            <div></div>
            <p>Your One-Stop Solution for All Your Needs</p>
        </div>
        <div>
            <div>
                <p>
                    Purchase
                    <br />
                    Sales
                </p>
                <img src={defaultImage} alt="Default Image" />
            </div>
            <div>
                <p>
                    Advanced
                    <br />
                    Inventory
                    <br />
                    Management
                </p>
                <img src={defaultImage} alt="Default Image" />
            </div>
            <div>
                <p>
                    Most 
                    <br />
                    Advance
                    <br />
                    Statistics
                </p>
                <img src={defaultImage} alt="Default Image" />
            </div>
            <div>
                <p>
                    Credit
                    <br />
                    Management
                </p>
                <img src={defaultImage} alt="Default Image" />
            </div>
            <div>
                <p>
                    AdvGST
                    <br />
                    Integration
                </p>
                <img src={defaultImage} alt="Default Image" />
            </div>
        </div>
    </div>
}

export default Need