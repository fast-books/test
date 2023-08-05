'use strict'

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//

exports.one = async function (req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const payment = await prisma.payment.findUnique({
      where: { id: Number(id) },
    });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// New payment
exports.add = async function (req, res) {
  const { bankId, cash, partyId, ledgerId, amount, date } = req.body;

  try {
    const newPayment = await prisma.payment.create({
      data: {
        bankAccount: { connect: { id: bankId } },
        cash,
        party: { connect: { id: partyId } },
        ledger: { connect: { id: ledgerId } },
        amount,
        date,
      },
    });
    res.json(newPayment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Modify a payment by id
exports.edit = async (req, res) => {
  const { id } = req.params;
  const { bankId, cash, partyId, ledgerId, amount, date } = req.body;

  try {
    const updatedPayment = await prisma.payment.update({
      where: { id: parseInt(id) },
      data: {
        bankAccount: { connect: { id: bankId } },
        cash,
        party: { connect: { id: partyId } },
        ledger: { connect: { id: ledgerId } },
        amount,
        date,
      },
    });
    res.json(updatedPayment);
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: 'Unable to update payment' });
  }
};
