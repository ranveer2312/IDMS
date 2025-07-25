'use client';

import { useEffect, useState } from 'react';
import { PlusCircleIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import BackButton from '@/components/BackButton';
import { APIURL } from '@/constants/api';
import toast, { Toaster } from 'react-hot-toast';

interface TravelExpense {
  id: number;
  date: number[]; // API returns date as [year, month, day]
  amount: number;
  description: string;
}

const API_URL = APIURL +'/api/travel';

const travelAPI = {
  getAll: async (): Promise<TravelExpense[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch travel expenses');
    return res.json();
  },
  create: async (expense: Omit<TravelExpense, 'id'>): Promise<TravelExpense> => {
    // Convert date to array before sending
    let dateArr: [number, number, number];
    if (Array.isArray(expense.date)) {
      dateArr = expense.date as [number, number, number];
    } else if (typeof expense.date === 'string') {
      dateArr = (expense.date as string).split('-').map(Number) as [number, number, number];
    } else {
      throw new Error('Invalid date format');
    }
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...expense, date: dateArr }),
    });
    if (!res.ok) throw new Error('Failed to create travel expense');
    return res.json();
  },
  update: async (id: number, expense: Omit<TravelExpense, 'id'>): Promise<TravelExpense> => {
    // Convert date to array before sending
    let dateArr: [number, number, number];
    if (Array.isArray(expense.date)) {
      dateArr = expense.date as [number, number, number];
    } else if (typeof expense.date === 'string') {
      dateArr = (expense.date as string).split('-').map(Number) as [number, number, number];
    } else {
      throw new Error('Invalid date format');
    }
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...expense, date: dateArr }),
    });
    if (!res.ok) throw new Error('Failed to update travel expense');
    return res.json();
  },
  delete: async (id: number): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete travel expense');
  },
};

export default function TravelPage() {
  const [expenses, setExpenses] = useState<TravelExpense[]>([]);
  const [newExpense, setNewExpense] = useState({ date: '', amount: '', description: '' });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await travelAPI.getAll();
        setExpenses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExpenses();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleAddExpense = async () => {
    if (!newExpense.date || !newExpense.amount || !newExpense.description) return;
    try {
      let dateArr: [number, number, number];
      if (typeof newExpense.date === 'string') {
        dateArr = newExpense.date.split('-').map(Number) as [number, number, number];
      } else if (Array.isArray(newExpense.date)) {
        dateArr = newExpense.date as [number, number, number];
      } else {
        throw new Error('Invalid date format');
      }
      const added = await travelAPI.create({
        date: dateArr,
        amount: parseFloat(newExpense.amount),
        description: newExpense.description,
      });
      setExpenses([...expenses, added]);
      setNewExpense({ date: '', amount: '', description: '' });
      toast.success('Expense added successfully');
    } catch (err) {
      console.error('Add failed:', err);
      toast.error('Failed to add expense');
    }
  };

  const handleDeleteExpense = async (id: number) => {
    try {
      await travelAPI.delete(id);
      setExpenses(expenses.filter(expense => expense.id !== id));
      toast.success('Expense deleted successfully');
    } catch (err) {
      console.error('Delete failed:', err);
      toast.error('Failed to delete expense');
    }
  };

  const handleEditClick = (expense: TravelExpense) => {
    setEditingId(expense.id);
    const dateStr = `${expense.date[0]}-${String(expense.date[1]).padStart(2, '0')}-${String(expense.date[2]).padStart(2, '0')}`;
    setNewExpense({
      date: dateStr,
      amount: expense.amount.toString(),
      description: expense.description,
    });
  };

  const handleUpdateExpense = async () => {
    if (!newExpense.date || !newExpense.amount || !newExpense.description || editingId === null) return;
    try {
      let dateArr: [number, number, number];
      if (typeof newExpense.date === 'string') {
        dateArr = newExpense.date.split('-').map(Number) as [number, number, number];
      } else if (Array.isArray(newExpense.date)) {
        dateArr = newExpense.date as [number, number, number];
      } else {
        throw new Error('Invalid date format');
      }
      const updated = await travelAPI.update(editingId, {
        date: dateArr,
        amount: parseFloat(newExpense.amount),
        description: newExpense.description,
      });
      setExpenses(expenses.map(exp => (exp.id === editingId ? updated : exp)));
      setNewExpense({ date: '', amount: '', description: '' });
      setEditingId(null);
      toast.success('Expense updated successfully');
    } catch (err) {
      console.error('Update failed:', err);
      toast.error('Failed to update expense');
    }
  };

  const handleCancelEdit = () => {
    setNewExpense({ date: '', amount: '', description: '' });
    setEditingId(null);
  };

  // Add a helper to count words for description
  const getDescWordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;
  const maxDescWords = 6;
  const warnDescWords = 5;
  const descWordCount = getDescWordCount(newExpense.description);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Toaster position="top-right" />
      <BackButton href="/finance-manager/dashboard" label="Back to Dashboard" />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Travel Expenses</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {editingId ? 'Edit Travel Expense' : 'Add New Travel Expense'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="description"
            placeholder="Description (max 6 words)"
            value={newExpense.description}
            onChange={e => {
              const words = e.target.value.trim().split(/\s+/).filter(Boolean);
              if (words.length <= maxDescWords) {
                setNewExpense({ ...newExpense, description: e.target.value });
              } else {
                setNewExpense({ ...newExpense, description: words.slice(0, maxDescWords).join(' ') });
              }
            }}
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <div className="text-xs mt-1 mb-2">
            <span className={`${descWordCount > warnDescWords ? (descWordCount > maxDescWords ? 'text-red-600' : 'text-yellow-600') : 'text-gray-500'}`}>Word count: {descWordCount} / {maxDescWords}</span>
            {descWordCount > maxDescWords && <span className="text-xs text-red-600 ml-2">Maximum 6 words allowed</span>}
          </div>
        </div>
        <div className="flex space-x-4">
          {editingId ? (
            <>
              <button
                onClick={handleUpdateExpense}
                disabled={descWordCount > maxDescWords}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <PencilSquareIcon className="h-5 w-5 mr-2" /> Update Expense
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddExpense}
              disabled={descWordCount > maxDescWords}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" /> Add Expense
            </button>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Expense List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description / Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    {new Date(expense.date[0], expense.date[1] - 1, expense.date[2]).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{expense.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{expense.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    <button onClick={() => handleEditClick(expense)} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 mr-4">
                      <PencilSquareIcon className="h-5 w-5 inline" /> Edit
                    </button>
                    <button onClick={() => handleDeleteExpense(expense.id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600">
                      <TrashIcon className="h-5 w-5 inline" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
