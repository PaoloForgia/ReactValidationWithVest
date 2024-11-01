import { useState } from "react";
import { User } from "../types/registrationForm";
import { suite } from "../validation/registerFormSuite";

const useRegistrationForm = () => {
  const [form, setForm] = useState<User>({});

  const onChange = (value: string, name: string) => {
    const nextState = { ...form, [name]: value };
    setForm(nextState);
    suite(nextState, name);
  };

  return { form, onChange };
};

export default useRegistrationForm;
