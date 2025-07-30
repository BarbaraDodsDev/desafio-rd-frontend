import React, { useState } from 'react';
import recommend from './recommendation.service';

const options = [
  'Automação', 'Marketing', 'Integração',
  'Vendas', 'Pipeline', 'Relatórios',
  'Chat', 'Conversão'
];

export default function Form() {
  const [selected, setSelected] = useState([]);
  const [mode, setMode] = useState('single');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await recommend(selected, mode);
    setResults(res);
  };

  const toggle = (feature) => {
    setSelected(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-2 mb-4">
        {options.map(f => (
          <button key={f} type="button" onClick={() => toggle(f)}
            className={selected.includes(f) ? "bg-blue-500 text-white p-2" : "bg-gray-200 p-2"}>
            {f}
          </button>
        ))}
      </div>
      <select value={mode} onChange={e => setMode(e.target.value)} className="mb-4 p-2 border">
        <option value="single">Single Product</option>
        <option value="multiple">Multiple Products</option>
      </select>
      <button type="submit" className="bg-green-600 text-white p-2">Recomendar</button>
      <ul className="mt-4">
        {results.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </form>
  );
}
