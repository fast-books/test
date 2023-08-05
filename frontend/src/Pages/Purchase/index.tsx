import React, { useState } from "react";
import "./index.css";

function Purchase() {
  let List = [
    "3 Nahni Trap",
    "5 layer 1000 liter water tank",
    "Ball Valve 25MM Box 10 UPVC",
    "Ball Valve 40MM Box 3 UPVC",
    "Bearing 30210",
    "Bearing 30305",
    "Bearing 30307",
    "Bearing 30308",
    "Bearing 30308 NBC",
    "Bearing 30309 NBC",
    "Bearing 30311",
    "Bearing 32016 DTech",
    "Bearing 32206",
    "Bearing 32207 NBC",
    "Bearing 32208",
    "Bearing 32209",
    "Bearing 32209 NBC"
  ];

  const initialItems = Array.from({ length: 3 }, (_, i) => ({
    name: List[i] || "",
    hsn_sac_code: "",
    quantity: 0,
    gst: 0,
    rate: 0,
    ratePerDisc: 0,
    amount: 0,
  }));

  const [formData, setFormData] = useState({
    salesManualNo: "",
    currentBalance: "",
    salesLedger: "",
    voucherClass: "Sales",
    date: "",
    items: initialItems,
    total: 0,
  });

  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState(List);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...formData.items];

    if (event.target.name === "name") {
      setInputValue(event.target.value);

      // Create a RegEx pattern from the input string
      const pattern = new RegExp([...event.target.value].join(".*"), "i");

      setFilteredList(List.filter((name) => pattern.test(name)));
    }
    if (
      event.target.name === "quantity" ||
      event.target.name === "ratePerDisc"
    ) {
      values[index][event.target.name] = parseInt(event.target.value);
      values[index]["amount"] =
        values[index]["quantity"] * values[index]["ratePerDisc"];
    } else {
      values[index][event.target.name] = event.target.value.toString;
    }
    setFormData({ ...formData, items: values });
  };

  return (
    <div className="App">
      <header>
        <div className="left">
          <div className="input-row">
            <label>Sales Manual No:</label>
            <input type="text" />
          </div>
          <div className="input-row">
            <label>Current Balance:</label>
            <input type="text" />
          </div>
          <div className="input-row">
            <label>Sales Ledger:</label>
            <input type="text" />
          </div>
        </div>

        <div className="middle">
          <label>Voucher Class:</label>
          <input type="text" value="Sales" disabled />
        </div>
        <div className="right">
          <label>Date:</label>
          <input type="date" />
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name of Item</th>
            <th>HSN/SAC Code</th>
            <th>Quantity</th>
            <th>GST%</th>
            <th>Rate (inc of tax)</th>
            <th>Rate per disc%</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {formData.items.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(event) => handleInputChange(index, event)}
                    autoComplete="off"
                  />
                  {index === 0 && inputValue && (
                    <div className="autocomplete-dropdown">
                      {filteredList.map((name, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            const newItems = [...formData.items];
                            newItems[0].name = name;
                            setFormData({ ...formData, items: newItems });
                            setInputValue("");
                          }}
                        >
                          {name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </td>
              <td>
                <input
                  type="text"
                  name="hsn_sac_code"
                  value={item.hsn_sac_code}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="gst"
                  value={item.gst}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="rate"
                  value={item.rate}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="ratePerDisc"
                  value={item.ratePerDisc}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>Narration:</td>
            <td>
              {formData.items.reduce((a, b) => a + (b["amount"] || 0), 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Purchase;