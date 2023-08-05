'use strict'

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.list = async function (req, res) {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


exports.one = async function (req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  try {
    const itemEntries = await prisma.itemEntry.findMany({
      include: { invoice: { include: { party: true } } },
      where: { itemid: Number(id) },
    });
    res.json(itemEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// New item
exports.add = async function (req, res) {
  const { name, description, alias, unitId, hsnId, openingStock, openingValue, itemEntries, companyId } = req.body;
  try {
    const newItem = await prisma.item.create({
      data: {
        name,
        description,
        alias,
        unit: { connect: { id: unitId } },
        hsn: { connect: { id: hsnId } },
        openingStock,
        openingValue,
        itemEntries: {
          set: itemEntries // Update the itemEntries for the invoice
        },
        company: { connect: { id: companyId } },
      },
    });
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modify a specific item by id
exports.edit = async (req, res) => {
  const { id } = req.params;
  const { name, description, alias, unitId, hsnId, openingStock, openingValue, itemEntries, companyId } = req.body;

  try {
    const updatedItem = await prisma.item.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
        alias,
        unit: { connect: { id: unitId } },
        hsn: { connect: { id: hsnId } },
        openingStock,
        openingValue,
        itemEntries: {
          set: itemEntries // Update the itemEntries for the invoice
        },
        company: { connect: { id: companyId } },
      },
    });
    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Unable to update item' });
  }
};
