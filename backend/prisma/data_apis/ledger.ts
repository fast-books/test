const ledger=[
    {id:1, name:"CGST", groupId:12, companyId:2},
    {id:2, name:"SGST", groupId:12, companyId:2},
    {id:3, name:"IGST", groupId:12, companyId:2},

    {id:4, name:"Electricity Expenses", groupId:15, companyId:2},
    {id:5, name:"Round Off", groupId:15, companyId:2},
    {id:6, name:"Labour Expenses", groupId:16, companyId:2},
    {id:7, name:"Tea/ Coffee/ Pan/ Water expenses", groupId:16, companyId:2},
    {id:8, name:"Transport Expenses", groupId:16, companyId:2, reverseChargeable:true},

    {id:20, name:"Staff 1 salary", groupId:15, companyId:2},
    {id:21, name:"Staff 2 salary", groupId:15, companyId:2},
    {id:22, name:"Staff 3 salary", groupId:15, companyId:2},
    {id:14, name:"Rent", groupId:16, companyId:2},

    {id:10, name:"CESS", groupId:12, companyId:2},
    {id:11, name:"TDS (Charged by you)", groupId:12, companyId:2},
    {id:12, name:"TDS (Charged by others)", groupId:12, companyId:2},
    {id:13, name:"Advance Tax", groupId:12, companyId:2},
    {id:17, name:"TCS (Charged by others)", groupId:12, companyId:2},

    {id:15, name:"Packing and Forwarding Charges", groupId:16, gstApplicable:true , companyId:2},
    {id:101, name:"Taxable Amount", groupId:0, companyId:2},
    {id:102, name:"Invoice Value", groupId:0, companyId:2},
    {id:103, name:"invoice Discount", groupId:0, companyId:2}
]
export default ledger;