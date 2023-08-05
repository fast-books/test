import style from "../ComponentCSS/CustomerFeedback.module.scss"
import defaultImage from "../Media/defaultImage.png"


const CustomerFeedback = ()=>{
    return <div id={style.main}>
        <div>
            <h1>
                OUR USERS ARE LOVING IT
            </h1>
            <div></div>
            <p>Discover the Positive Feedback from Our Valued Users</p>
        </div>
        <div>
            <div>
                <h2>Hardware Industry</h2>
                <div id={style.Image}>
                    <img src={defaultImage} alt="Default Image" />
                </div>
                <div id={style.Paragraph}>
                    Our most important resource was always occupied in making invoices and converting order pages to invoices and estimates Now with one click of photo the orders that we recieved are converted to sales invoices and sales estimates. Our focus has shifted from accounting and number crunching to totally working on developing our business and meeting new prospective clients.
                    We are thankful that we got a much faster and great way to change how we were doing business in the old way
                </div>
            </div>
            <div>
                <h2>Textiles Industry</h2>
                <div id={style.Image}>
                    <img src={defaultImage} alt="Default Image" />
                </div>
                <div id={style.Paragraph}>
                    We had a person on roll to do our books of accounts daily enter all purchases all sales.
                    We saved a lot of cost of salary by
                    shifting to Al Books. The whole idea looked impossible when we were approached by the company first. Then we decided to give it a try. We worked with the company and realized that soon we got a seamless product for our necessity. Now our ledger, creditors and debtors are well managed. The app itself has a UPI itnerfacw which helps us make payments to the parties where we have dues. Our work is far more efficient than it used to be before
                </div>
            </div>
            
        </div>
    </div>
}

export default CustomerFeedback