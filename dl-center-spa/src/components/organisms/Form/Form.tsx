import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormOptionsInterface } from 'src/types';
import { Button } from 'src/components/atoms';
import { FormFields } from 'src/components/molecules';
import configForm from 'src/translations/configForm';
import * as S from './Form.styled';

type Props = {
  handleSubmitBtnClick: () => void;
  formOptions: FormOptionsInterface;
};

export function Form({ handleSubmitBtnClick, formOptions }: Props) {
  const methods = useForm();
  const formConfig = configForm(formOptions);

  useEffect(() => {
    methods.reset({
      Country: formOptions.countries[0],
      Device: formOptions.devices[0],
    });
  }, [formOptions]);

  return (
    <S.Form onSubmit={handleSubmitBtnClick}>
      <FormFields formFields={formConfig.formFields} />
      <Button
        type="submit"
        label={formConfig.submitButton.text}
        btnTheme="primary"
      />
    </S.Form>
  );
}
