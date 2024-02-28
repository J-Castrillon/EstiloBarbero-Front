export const useForm = (formulario = {}) => {
  
  const serialized = (especificForm) => {
    const formData = new FormData(especificForm);
    const completeObject = {};

    for (let [key, value] of formData) {
      if (key !== "file0") {
        completeObject[key] = value;
      }
    }

    return completeObject;
  };

  return {
    serialized,
  };
};
