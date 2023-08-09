const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
));

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = app;
app.use(express.json())
const PORT = process.env.PORT||5000;

const items = require('./routes/items');
const parties = require('./routes/parties');
const banks = require('./routes/banks');
const invoice = require('./routes/invoice');
const company = require('./routes/company');
const expense = require('./routes/expense');
const payment = require('./routes/payment');
const verifyGST = require('./api/verifyGST');



app.get('/',cors(),(req, res) => {
    res.send('Hello, this is the root endpoint!');
});
// company routes
app.get('/api/companies/:id', company.one);
app.get('/api/companies.json', company.list);
app.get('/api/companies/edit/:id', company.edit);
app.get('/api/companies/add', company.add);

//items routes
app.get('/api/items.json', items.list);
app.get('/api/items/:id.json', items.one);
app.get('/api/items/edit/:id', items.edit);
app.get('/api/items/add', items.add);

// parties routes
app.get('/api/parties.json', parties.list);
app.get('/api/parties/:id.json', parties.one);
app.get('/api/parties/edit/:id', parties.edit);
app.get('/api/parties/add', parties.add);

//banks routes
app.get('/api/banks.json', banks.list);
app.get('/api/banks/:id.json', banks.one);
app.put('/api/banks/edit/:id', banks.edit);
app.post('/api/banks/add', banks.add);
app.delete('/api/banks/:id', banks.delete);

//invoices routes
app.get('/api/invoice/:id', invoice.one);
app.get('/api/invoices/edit/:id', invoice.edit);
app.get('/api/invoices/add', invoice.add);

//expenses routes
app.get('/api/expenses/:id', expense.one);
app.get('/api/expenses/edit/:id', expense.edit);
app.get('/api/expenses/add', expense.add);

//payments routes
app.get('/api/payments/:id', payment.one);
app.get('/api/payments/edit/:id', payment.edit);
app.get('/api/payments/add', payment.add);

//verify GST ID
app.get('/api/verifygstid/:id', verifyGST.verifyGST);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
