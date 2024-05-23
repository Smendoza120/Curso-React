import React, { useState } from "react";

interface UseFormInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useFormInput(inicitalValue: string): UseFormInput {
  const [value, setValue] = useState<string>(inicitalValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
