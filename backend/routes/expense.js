'use strict'

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.one = async function (req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const expense = await prisma.expense.findUnique({
      where: { id: Number(id) },
    });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// New expense
exports.add = async function (req, res) {
  const { ledgerId, invoiceId, date, amount } = req.body;

  try {
    const newExpense = await prisma.expense.create({
      data: {
        ledger: { connect: { id: ledgerId } },
        invoiceId: { connect: { id: invoiceId } },
        date,
        amount,
      },
    });
    res.json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modify a specific expense by id
exports.edit = async (req, res) => {
  const { id } = req.params;
  const { ledgerId, date, amount, invoiceId } = req.body;

  try {
    const updatedExpense = await prisma.expense.update({
      data: {
        ledger: { connect: { id: ledgerId } },
        date,
        amount,
        invoice: { connect: { id: invoiceId } },
      },
      where: { id: parseInt(id) },
    });
    res.json(updatedExpense);
  } catch (error) {
    console.error('Error updating expense:', error);
    res.status(500).json({ error: 'Unable to update expense' });
  }
};
