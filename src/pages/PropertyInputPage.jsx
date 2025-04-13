import React, { useState } from "react";

export default function PropertyInputPage() {
  const [form, setForm] = useState({
    grossIncome: "",
    operatingExpenses: "",
    debtService: "",
    capitalExpenditures: "",
    totalAssets: "",
    ownerEquity: "",
    interest: "",
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const g = parseFloat(form.grossIncome);
    const o = parseFloat(form.operatingExpenses);
    const d = parseFloat(form.debtService);
    const c = parseFloat(form.capitalExpenditures);
    const a = parseFloat(form.totalAssets);
    const eQ = parseFloat(form.ownerEquity);
    const i = parseFloat(form.interest);

    const noi = g - o;
    const cfo = noi - d;
    const fc = cfo - c;
    const cfaf = fc;
    const roa = a ? noi / a : 0;
    const roe = eQ ? (noi - i) / eQ : 0;

    setResults({ noi, cfo, fc, cfaf, roa, roe });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Real Estate Input Form</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {[
          { label: "Gross Income", name: "grossIncome" },
          { label: "Operating Expenses", name: "operatingExpenses" },
          { label: "Debt Service", name: "debtService" },
          { label: "Capital Expenditures", name: "capitalExpenditures" },
          { label: "Total Assets", name: "totalAssets" },
          { label: "Owner Equity", name: "ownerEquity" },
          { label: "Interest", name: "interest" },
        ].map(({ label, name }) => (
          <input
            key={name}
            type="number"
            name={name}
            placeholder={label}
            value={form[name]}
            onChange={handleChange}
            className="p-2 border rounded"
            step="0.01"
          />
        ))}

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Calculate
        </button>
      </form>

      {results && (
        <div className="mt-6 bg-gray-50 p-4 rounded border">
          <h2 className="text-lg font-semibold mb-2">Results:</h2>
          <p>NOI: ${results.noi.toFixed(2)}</p>
          <p>CFO: ${results.cfo.toFixed(2)}</p>
          <p>Free Cash: ${results.fc.toFixed(2)}</p>
          <p>CFAF: ${results.cfaf.toFixed(2)}</p>
          <p>ROA: {(results.roa * 100).toFixed(2)}%</p>
          <p>ROE: {(results.roe * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}
