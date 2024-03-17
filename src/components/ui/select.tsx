'use client';
import { useState } from 'react';

type Option = { value: string; label: string };
export const Select = ({
  options,
  onChange,
}: {
  options: Option[];
  onChange: (val: string) => void;
}) => {
  const [value, setValue] = useState('apple');

  return (
    <select
      style={{
        backgroundColor: 'hsl(var(--secondary))',
      }}
      name="my-select"
      value={value}
      id="my-select"
      className="w-full"
      onChange={(e) => {
        const val = e.target.value;
        setValue(val);
        onChange(val);
      }}
    >
      {options.map((opt: Option) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
