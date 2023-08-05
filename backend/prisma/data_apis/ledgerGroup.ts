const ledgerGroup=[
    {id:0, name:"NULL",companyId:2},// this is the place to 

    {id:1, name:"Assets", parentid:0,companyId:2},
    {id:2, name:"Liabilities", parentid:0,companyId:2},

    {id:3, name:"Current Assets", parentid:1,companyId:2},
    {id:7, name:"Fixed Assets", parentid:1,companyId:2},


    {id:4, name:"Cash And Bank", parentid:3,companyId:2},
    {id:5, name:"Stock in Hand", parentid:3,companyId:2},
    {id:6, name:"Recievables", parentid:3,companyId:2},

    {id:10, name:"Capital Account", parentid:2,companyId:2},
    {id:11, name:"Current Liabilities", parentid:2,companyId:2},

    {id:12, name:"Duties and Taxes", parentid:11,companyId:2},
    {id:13, name:"Parties Payable(Sundry Creditors)", parentid:11,companyId:2},
    {id:18, name:"Unsecured Loans",parentid:11,companyId:2},
    {id:19, name:"Staff and Personnel", parentid:11,companyId:2},

    {id:14, name:"Profit And Loss",parentid:0, companyId:2},
    {id:15, name:"Indirect Income",parentid:14,companyId:2},
    {id:16, name:"Direct Expense",parentid:14,companyId:2},
    {id:17, name:"Indirect Expense",parentid:14,companyId:2},

    {id:20, name:"Other Income",parentid: 15,companyId:2},
    {id:21, name:"Direct Income",parentid:14, companyId:2},
    {id:22, name:"Indirect Income",parentid:14, companyId:2},

    {id:23, name:"Purchase Accounts",parentid:14, companyId:2},
    {id:24, name:"Sales Account",parentid:14, companyId:2},
];


 export default ledgerGroup;
 // We have to create a minimum level of ledgerGroups so that the new user does not have to create them. 
