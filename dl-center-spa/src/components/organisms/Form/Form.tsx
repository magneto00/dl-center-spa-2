import { FormProvider, useForm } from 'react-hook-form';
import configForm from 'src/configForm';
import { Button } from 'src/components/atoms';
import { FormFields } from 'src/components/molecules';
import * as S from './Form.styled';

export function Form() {
  const methods = useForm();

  const handleOnSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleOnSubmit}>
        <FormFields formFields={configForm.formFields} />
        <Button type="submit" label={configForm.submitButton.text} />
      </S.Form>
    </FormProvider>
  );
}
