import style from "../ComponentCSS/AIBooks.module.scss"
import AI from "../Media/artificial-intelligence.png"
import Effort from "../Media/effort.png"
import focusCustomer from "../Media/target-audience.png"
import scan from "../Media/scan.png"
import dataTransfer from "../Media/data-transfer.png"
import Inventory from "../Media/supply-chain.png"
import privacy from "../Media/shield.png"
import bank from "../Media/provider.png"
import Analytics from "../Media/analytics.png"
import debtManage from "../Media/banker.png"
import automated from "../Media/automation.png"
import ProfitProduct from "../Media/sales.png"


const AIBooks = ()=>{
    return <div id={style.AIBooks}>
        <div>
            <h1>WHY AI BOOKS ?</h1>
            <div></div>
            <p>Exploring the Advantages of AI in the World of Books</p>
        </div>
        <div>
            <div>
                <label>
                    <img src={AI} alt="AI" />
                    <p>
                        Uses Artificial Intelligence
                    </p>
                </label>
                <label>
                    <img src={Effort} alt="AI" />
                    <p>
                        Minimum Manual Effort
                    </p>
                </label>
                <label>
                    <img src={focusCustomer} alt="AI" />
                    <p>
                        Focus on Customers
                    </p>
                </label>
                <label>
                    <img src={scan} alt="AI" />
                    <p>
                        Scan and get work done
                    </p>
                </label>
                <label>
                    <img src={dataTransfer} alt="AI" />
                    <p>
                        Integrated teo ways data transfer from Tally and Zoho Frameworks
                    </p>
                </label>
                <label>
                    <img src={Inventory} alt="AI" />
                    <p>
                        Dead Inventory | Cold Customers
                    </p>
                </label>
            </div>
            <div>
                <label>
                    <img src={privacy} alt="AI" />
                    <p>
                        Privacy secured (How?)
                    </p>
                </label>
                <label>
                    <img src={bank} alt="AI" />
                    <p>
                        Integrate your bank account with our software
                    </p>
                </label>
                <label>
                    <img src={Analytics} alt="AI" /> 
                    <p>
                        Detailed Analytics
                    </p>
                </label>
                <label>
                    <img src={debtManage} alt="AI" />
                    <p>
                        Debtor's Management
                    </p>
                </label>
                <label>
                    <img src={automated} alt="AI" />
                    <p>
                        Intelligence based automated purchsae order creation
                    </p>
                </label>
                <label>
                    <img src={ProfitProduct} alt="AI" />
                    <p>
                        Focus on most profitable products and customers
                    </p>
                </label>
            </div>
        </div>
    </div>
}

export default AIBooks