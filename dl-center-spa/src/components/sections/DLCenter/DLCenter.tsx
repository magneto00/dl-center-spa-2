import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { api } from 'src/api/api';
import { Form, Results } from 'src/components/organisms';
import { IconLoading } from 'src/components/atoms/icons';
import * as S from './DLCenter.styled';

enum AppStatus {
  INITIAL,
  LOADING,
  SUCCESS,
  FAIL,
}

const initialStates = {
  appStatus: AppStatus.LOADING,
  instruction: {
    device: '',
    country: '',
    language: '',
    software: '',
    version: '',
    notes: '',
    link: '',
    uid: '',
  },
  formOptions: {
    countries: [''],
    devices: [''],
  },
};

function DLCenterContent() {
  const methods = useForm();
  const [appStatus, setAppStatus] = useState(initialStates.appStatus);
  const [instruction, setInstruction] = useState(initialStates.instruction);
  const [formOptions, setFormOptions] = useState(initialStates.formOptions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getFormOptions();
        setFormOptions(response);
        setAppStatus(AppStatus.INITIAL);
      } catch (error) {
        setAppStatus(AppStatus.FAIL);
      }
    };
    fetchData();
  }, []);

  const handleFormSubmit = methods.handleSubmit((formData) => {
    setAppStatus(AppStatus.LOADING);
    const fetchData = async () => {
      try {
        const response = await api.getInstruction(
          formData.country,
          formData.device,
        );
        setInstruction(response);
        setAppStatus(AppStatus.SUCCESS);
      } catch {
        setAppStatus(AppStatus.FAIL);
      }
    };
    fetchData();
  });

  const handleSearchForAnotherInstruction = () => {
    setAppStatus(AppStatus.INITIAL);
  };

  switch (appStatus) {
    case AppStatus.INITIAL:
      return (
        <FormProvider {...methods}>
          <Form
            handleSubmitBtnClick={handleFormSubmit}
            formOptions={formOptions}
          />
        </FormProvider>
      );
    case AppStatus.LOADING:
      return <IconLoading />;
    case AppStatus.SUCCESS:
      return (
        <Results
          data={instruction}
          handleGoBackBtnClick={handleSearchForAnotherInstruction}
        />
      );
    case AppStatus.FAIL:
      return <div>fetch error</div>;
    default:
      return <div>huge error, call the cops</div>;
  }
}

export function DLCenter() {
  return (
    <S.Section>
      <S.Wrapper>
        <DLCenterContent />
      </S.Wrapper>
    </S.Section>
  );
}
