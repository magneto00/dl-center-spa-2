import { FormProvider, useForm } from 'react-hook-form';
import configForm from 'src/configForm';
import { Button } from 'src/components/atoms';
import { FormFields } from 'src/components/molecules';
import * as S from './Form.styled';

type Props = {
  handleSubmitBtnClick: () => void;
};

export function Form({ handleSubmitBtnClick }: Props) {
  const methods = useForm();
  const handleOnSubmit = methods.handleSubmit((formData) => {
    console.log(formData);
    handleSubmitBtnClick();
  });

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleOnSubmit}>
        <FormFields formFields={configForm.formFields} />
        <Button
          type="submit"
          label={configForm.submitButton.text}
          btnTheme="primary"
        />
      </S.Form>
    </FormProvider>
  );
}
