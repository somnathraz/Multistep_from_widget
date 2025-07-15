import { useState } from "react";
import { Button } from "./ui/button";

export function FormWidget() {
  const [form, setForm] = useState({ name: "", email: "", option: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow space-y-4 border">
      <h2 className="text-lg font-semibold mb-2">Contact Form</h2>
      {submitted ? (
        <div className="text-green-600">Thank you for submitting!</div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border rounded px-3 py-2 text-sm"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2 text-sm"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="option">
              Select an option
            </label>
            <select
              id="option"
              name="option"
              className="w-full border rounded px-3 py-2 text-sm"
              value={form.option}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
            </select>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}
