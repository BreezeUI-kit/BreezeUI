import { useState } from "react";

type Validator = (value: string) => string | null;

export function useValidation(validators: Validator[]) {
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    for (const validator of validators) {
      const result = validator(value);
      if (result) {
        setError(result);
        return false;
      }
    }
    setError(null);
    return true;
  };

  return { error, validate };
}