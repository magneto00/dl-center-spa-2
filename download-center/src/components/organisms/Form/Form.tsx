import { FormProvider, useForm } from 'react-hook-form';
import configForm from 'src/configForm';
import { FormFields } from 'src/components/molecules';

export function Form() {
  const methods = useForm();

  const handleOnSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleOnSubmit}>
        <FormFields formFields={configForm.formFields} />
        <button type="submit">{configForm.submitButton.text}</button>
      </form>
    </FormProvider>
  );
}
