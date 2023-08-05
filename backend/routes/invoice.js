'use strict'

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.one = async function (req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const invoice = await prisma.invoice.findUnique({
      include: { itemEntries: true, serviceEntries: true, ledgerEntries: true, expenses: true },
      where: { id: Number(id) },
    });
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// New invoice
exports.add = async function (req, res) {
  const { companyId, partyId, dateInvoice, dateEntry, dateDispatch, entryTime, transport, ewaybill, invoiceNo, itemEntries, serviceEntries, ledgers, narration, invoiceType, expense } = req.body;

  try {
    const newInvoice = await prisma.invoice.create({
      data: {
        company: { connect: { id: companyId } },
        party: { connect: { id: partyId } },
        dateInvoice,
        dateEntry,
        dateDispatch,
        entryTime,
        transport,
        ewaybill,
        invoiceNo,
        itemEntries: {
          set: itemEntries // Update the itemEntries for the invoice
        },
        serviceEntries: {
          set: serviceEntries // Update the serviceEntries for the invoice
        },
        ledgers: {
          set: ledgers // Update the ledgers for the invoice
        },
        narration,
        invoiceType,
        expense: {
          set: expense // Update the expenses for the invoice
        },
      },
    });
    res.json(newInvoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modify a invoice by id
exports.edit = async (req, res) => {
  const { id } = req.params;
  // Extract the data you want to update from the request body
  const { dateInvoice, dateEntry, dateDispatch, transport, ewaybill, entryTime, invoiceNo, itemEntries, serviceEntries, ledgers, narration, invoiceType, expense } = req.body;

  try {
    const updatedInvoice = await prisma.invoice.update({
      where: { id: parseInt(id) },
      data: {
        dateInvoice,
        dateEntry,
        dateDispatch,
        transport,
        ewaybill,
        entryTime,
        invoiceNo,
        itemEntries: {
          set: itemEntries // Update the itemEntries for the invoice
        },
        serviceEntries: {
          set: serviceEntries // Update the serviceEntries for the invoice
        },
        ledgers: {
          set: ledgers // Update the ledgers for the invoice
        },
        narration,
        invoiceType,
        expense: {
          set: expense // Update the expenses for the invoice
        },
      },
    });
    res.json(updatedInvoice);
  } catch (error) {
    console.error('Error updating invoice:', error);
    res.status(500).json({ error: 'Unable to update invoice' });
  }
};
