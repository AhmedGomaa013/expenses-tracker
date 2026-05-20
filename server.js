import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

// Make crypto available globally for uuid
globalThis.crypto = crypto;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'expenses.json');

app.use(cors());
app.use(express.json());

function readExpenses() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeExpenses(expenses) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2));
}

// Get all expenses
app.get('/api/expenses', (req, res) => {
  res.json(readExpenses());
});

// Add expense
app.post('/api/expenses', (req, res) => {
  const { description, amount, category } = req.body;
  if (!description || !amount) {
    return res.status(400).json({ error: 'description and amount are required' });
  }
  const expense = { id: uuidv4(), description, amount: Number(amount), category: category || 'General', date: new Date().toISOString() };
  const expenses = readExpenses();
  expenses.push(expense);
  writeExpenses(expenses);
  res.status(201).json(expense);
});

// Delete expense
app.delete('/api/expenses/:id', (req, res) => {
  let expenses = readExpenses();
  const filtered = expenses.filter(e => e.id !== req.params.id);
  if (filtered.length === expenses.length) {
    return res.status(404).json({ error: 'Expense not found' });
  }
  writeExpenses(filtered);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
