import React, { FC } from "react";
import { urlToHttpOptions } from "url";

export interface SelectItem {
  value: string;
  name: string;
}

interface MySelectProps {
  options: SelectItem[];
  defaultValue: string;
  value: string;
  onChange(value: string): void;
}

const MySelect: FC<MySelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(event) => onChange(event?.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default MySelect;
