import { invoiceType } from "@prisma/client";
const invoice = [{
  id: 1, companyId: 2, partyId: 1,
  dateInvoice: new Date('2023-06-20'),
  transport: "Mata",
  invoiceNo: "2022/23-1",
  entryTime: new Date(),
  itemEntries: {
    create: [{
      itemid: 1, quantity: 30,
      price: 110, discount: 10,
      hsnId: 470, gstrate: 0.18,
      taxableAmount: 3000,
      cgst: 270, sgst: 270, igst: 0
    }, {
      itemid: 2, quantity: 20,
      price: 1100, discount: 100,
      hsnId: 470, gstrate: 0.18,
      taxableAmount: 1000,
      cgst: 90, sgst: 180, igst: 0
    },],
  },
  serviceEntries: {
    create: [{
      ServiceId: 1, rate: 310, discount: 10,
      sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0
    }]
  },
  ledgers: {
    create: [
      { ledgerId: 6, value: 120 },//Labour expense
      { ledgerId: 1, value: 450 },//CGST
      { ledgerId: 2, value: 450 },//SGST
      { ledgerId: 101, value: 3000 },//Taxable Value
      { ledgerId: 5, value: 40 }, //Round Off
      { ledgerId: 102, value: 6100 },//Invoice Value
      { ledgerId: 103, value: 300 }
    ]
  },
  expense: {
    create: [{
      ledgerId: 6, date: new Date("2023-06-20"), amount: 180
    }]
  },
  narration: "3Wow this is the first pass",
  invoiceType: invoiceType.Sale,
},
{
  id: 2, companyId: 2, partyId: 1,
  dateInvoice: new Date('2023-06-21'),
  transport: "Mata",
  invoiceNo: "2022/23-2",
  entryTime: new Date(),
  itemEntries: {
    create: [{
      itemid: 1, quantity: 30, price: 110, discount: 10,
      hsnId: 470, gstrate: 0.18, taxableAmount: 3000, cgst: 270, sgst: 270, igst: 0
    }, {
      itemid: 2, quantity: 20, price: 1100, discount: 100,
      hsnId: 470, gstrate: 0.18, taxableAmount: 2000, cgst: 180, sgst: 180, igst: 0
    },],
  },
  serviceEntries: {
    create: [{
      ServiceId: 1, rate: 310, discount: 10,
      sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0
    }]
  },
  ledgers: {
    create: [
      { ledgerId: 6, value: 120 },//Labour expense
      { ledgerId: 1, value: 450 },//CGST
      { ledgerId: 2, value: 450 },//SGST
      { ledgerId: 101, value: 3000 },//Taxable Value
      { ledgerId: 5, value: 40 }, //Round Off
      { ledgerId: 102, value: 6100 },//Invoice Value
      { ledgerId: 103, value: 300 }
    ]
  },
  expense: {
    create: [{
      ledgerId: 6, date: new Date("2023-06-21"), amount: 180
    }]
  },
  narration: "Wow this is the first pass",
  invoiceType: invoiceType.Sale,
}, {
  id: 3, companyId: 2, partyId: 1,
  dateInvoice: new Date('2023-06-22'),
  transport: "Mata",
  invoiceNo: "2022/23-3",
  entryTime: new Date(),
  itemEntries: {
    create: [{
      itemid: 1, quantity: 30, price: 110, discount: 10,
      hsnId: 470, gstrate: 0.18, taxableAmount: 3000, cgst: 270, sgst: 270, igst: 0
    }, {
      itemid: 2, quantity: 20, price: 1100, discount: 100,
      hsnId: 470, gstrate: 0.18, taxableAmount: 2000, cgst: 180, sgst: 180, igst: 0
    },],
  },
  serviceEntries: {
    create: [{
      ServiceId: 1, rate: 310, discount: 10,
      sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0
    }]
  },
  ledgers: {
    create: [
      { ledgerId: 6, value: 120 },//Labour expense
      { ledgerId: 1, value: 450 },//CGST
      { ledgerId: 2, value: 450 },//SGST
      { ledgerId: 101, value: 3000 },//Taxable Value
      { ledgerId: 5, value: 40 }, //Round Off
      { ledgerId: 102, value: 6100 },//Invoice Value
      { ledgerId: 103, value: 300 }
    ]
  },
  expense: {
    create: [{
      ledgerId: 6, date: new Date("2023-06-22"), amount: 180
    }]
  },
  narration: "Wow this is the first pass",
  invoiceType: invoiceType.Sale,
}, {
  id: 4, companyId: 2, partyId: 1,
  dateInvoice: new Date('2023-06-23'),
  transport: "Mata",
  invoiceNo: "2022/23-4",
  entryTime: new Date(),
  itemEntries: {
    create: [{
      itemid: 1, quantity: 30, price: 110, discount: 10,
      hsnId: 470, gstrate: 0.18, taxableAmount: 3000, cgst: 270, sgst: 270, igst: 0
    }, {
      itemid: 2, quantity: 20, price: 1100, discount: 100,
      hsnId: 470, gstrate: 0.18, taxableAmount: 2000, cgst: 180, sgst: 180, igst: 0
    },],
  },
  serviceEntries: {
    create: [{
      ServiceId: 1, rate: 310, discount: 10,
      sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0
    }]
  },
  ledgers: {
    create: [
      { ledgerId: 6, value: 120 },//Labour expense
      { ledgerId: 1, value: 450 },//CGST
      { ledgerId: 2, value: 450 },//SGST
      { ledgerId: 101, value: 3000 },//Taxable Value
      { ledgerId: 5, value: 40 }, //Round Off
      { ledgerId: 102, value: 6100 },//Invoice Value
      { ledgerId: 103, value: 300 }
    ]
  },
  expense: {
    create: [{
      ledgerId: 6, date: new Date("2023-06-23"), amount: 180
    }]
  },
  narration: "2Wow this is the first pass",
  invoiceType: invoiceType.Sale,
},
{
  id: 5,
  companyId: 2,
  partyId: 1,
  dateInvoice: new Date('2023-06-20'),
  transport: 'Mata',
  invoiceNo: '2022/23-1',
  entryTime: new Date(),
  itemEntries: {
    create: [
      { itemid: 1, quantity: 30, price: 110, discount: 10, hsnId: 470, gstrate: 0.18, taxableAmount: 3000, cgst: 270, sgst: 270, igst: 0, },
      { itemid: 2, quantity: 20, price: 1100, discount: 100, hsnId: 470, gstrate: 0.18, taxableAmount: 2000, cgst: 180, sgst: 180, igst: 0, },
    ],
  },
  serviceEntries: {
    create: [
      { ServiceId: 1, rate: 310, discount: 10, sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0, },
    ],
  },
  ledgers: {
    create: [
      { ledgerId: 6, value: 120, },
      { ledgerId: 1, value: 450, },
      { ledgerId: 2, value: 450, },
      { ledgerId: 101, value: 3000, },
      { ledgerId: 5, value: 40, },
      { ledgerId: 102, value: 6100, },
      { ledgerId: 103, value: 300, },
    ],
  },
  expense: {
    create: [
      { ledgerId: 6, date: new Date('2023-06-20'), amount: 180, },
    ],
  },
  narration: '2Wow this is the first pass',
  invoiceType: invoiceType.Sale,
},
{
  id: 6,
  companyId: 2,
  partyId: 1,
  dateInvoice: new Date('2023-06-21'),
  transport: 'Mata',
  invoiceNo: '2022/23-2',
  itemEntries: { create: [{ itemid: 3, quantity: 40, price: 120, discount: 10, hsnId: 471, gstrate: 0.18, taxableAmount: 4800, cgst: 432, sgst: 432, igst: 0 }] },
  serviceEntries: { create: [{ ServiceId: 1, rate: 310, discount: 10, sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0 }] },
  ledgers: {
    create: [
      { ledgerId: 6, value: 120 },
      { ledgerId: 1, value: 450 },
      { ledgerId: 2, value: 450 },
      { ledgerId: 101, value: 3000 },
      { ledgerId: 5, value: 40 },
      { ledgerId: 102, value: 6100 },
      { ledgerId: 103, value: 300 }]
  },
  expense: { create: [{ ledgerId: 6, date: new Date('2023-06-21'), amount: 180 }] },
  narration: '2Wow this is the first pass',
  invoiceType: invoiceType.Sale
}, {
  id: 7, companyId: 2, partyId: 3,
  dateInvoice: new Date('2023-04-20'),
  dateEntry: new Date('2023-04-24'),
  transport: "Mata",
  invoiceNo: "DPPL/2001002-1",
  itemEntries: {
    create: [{
      itemid: 1, quantity: 1000, price: 90, discount: 10000,
      hsnId: 470, gstrate: 0.18, taxableAmount: 80000, cgst: 0, sgst: 0, igst: 14400
    }, {
      itemid: 2, quantity: 1000, price: 110, discount: 10000,
      hsnId: 470, gstrate: 0.18, taxableAmount: 100000, cgst: 0, sgst: 0, igst: 18000
    },],
  },
  ledgers: {
    create: [
      { ledgerId: 3, value: 32400 },//IGST
      { ledgerId: 101, value: 180000 },//Taxable Value
      { ledgerId: 102, value: 212400 },//Invoice Value
    ]
  },
  expense: {
    create: [
      { ledgerId: 6, date: new Date("2023-04-24"), amount: 2600 },
      { ledgerId: 8, date: new Date("2023-04-24"), amount: 10500 },
    ]
  },
  narration: "First Purchase of Dutron",
  invoiceType: invoiceType.Purchase,
},

{
  id: 8, companyId: 2, partyId: 3,
  dateInvoice: new Date('2023-04-20'),
  dateEntry: new Date('2023-04-24'),
  transport: "Mata",
  invoiceNo: "DPPL/2001002-1",
  entryTime: new Date(),
  itemEntries: {
    create: [{
      itemid: 6, quantity: 10, price: 40000, discount: 0,
      hsnId: 1028, gstrate: 0.18, taxableAmount: 400000, cgst: 0, sgst: 0, igst: 72000
    }, {
      itemid: 7, quantity: 10, price: 25000, discount: 0,
      hsnId: 1028, gstrate: 0.18, taxableAmount: 250000, cgst: 0, sgst: 0, igst: 45000
    },],
  },
  serviceEntries: {
    create: [{
      ServiceId: 1, rate: 310, discount: 10,
      sacId: 1, gstrate: 0.18, taxableAmount: 300, cgst: 27, sgst: 27, igst: 0
    }]
  },
  ledgers: {
    create: [
      { ledgerId: 3, value: 117000 },//IGST
      { ledgerId: 101, value: 650000 },//Taxable Value
      { ledgerId: 102, value: 767000 },//Invoice Value
    ]
  },
  expense: {
    create: [
      { ledgerId: 6, date: new Date("2023-04-24"), amount: 500 },
      { ledgerId: 8, date: new Date("2023-04-24"), amount: 4500 },
    ]
  },
  narration: "First Purchase of Motors",
  invoiceType: invoiceType.Purchase,
},

]

export default invoice;