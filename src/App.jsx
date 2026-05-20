import { useState, useEffect } from 'react';

const API = 'http://localhost:3001/api/expenses';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const fetchExpenses = () => fetch(API).then(r => r.json()).then(setExpenses);

  useEffect(() => { fetchExpenses(); }, []);

  const addExpense = async (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, amount, category })
    });
    setDescription(''); setAmount(''); setCategory('');
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    fetchExpenses();
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Expenses Tracker</h1>
      <form onSubmit={addExpense} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <input placeholder="Amount" type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} required />
        <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map(exp => (
          <li key={exp.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
            <span>{exp.description} — ${exp.amount.toFixed(2)} <em>({exp.category})</em></span>
            <button onClick={() => deleteExpense(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
