import { useRef } from 'react';
import { getCurrentDate, handleDateKeyPress, handleInvoiceKeyPress } from '../Utils/date';

const PurchaseHeader = () => {
    
    const dateInputRef = useRef(null);
    return (
        <div className='header'>
                <div>
                    <label htmlFor="invoice">invoice number: </label>
                    <input type="text" id='invoice' placeholder='enter invoice no.' onKeyDown={() => handleInvoiceKeyPress(event as KeyboardEvent, dateInputRef)} />
                </div>
                <div>
                    <label htmlFor="invoice-date">Invoice Date: </label>
                    <input
                        type="text"
                        id="invoice-date"
                        defaultValue={getCurrentDate()}
                        />
                </div>
                <input
                    type="text"
                    id="date"
                    ref={dateInputRef}
                    onKeyDown={() => handleDateKeyPress(event as KeyboardEvent, dateInputRef)}
                    placeholder='enter date'
                />
            </div>
    );
};

export default PurchaseHeader;