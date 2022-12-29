import { useState } from "react";

export const useForm = (initianForm = {}) => {
  const [formState, setFormState] = useState(initianForm);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initianForm);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    onResetForm,
  };
};

/**
 * react-hook-form (https://react-hook-form.com/get-started) es una libreria que nos permite manejar los formularios de una manera mas sencilla y eficiente que con los formularios tradicionales.
 */
