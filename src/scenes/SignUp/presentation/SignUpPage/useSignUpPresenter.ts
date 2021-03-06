import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Control, FieldErrors } from "react-hook-form";
import { SignUpParams } from "data/account/accountRequest/signUp";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { useTranslation } from "react-i18next";
import routes from "commons/constants/routes";
import { useLazyApi } from "../../../../commons/hooks/useApi";
import AccountRequest from "../../../../data/account/accountRequest";

export type SignUpFormData = SignUpParams & {
  agreement: boolean;
};

export default function useSignUpPresenter(): {
  email: string;
  password: string;
  agreement: boolean;
  isValidForm: boolean;
  formControl: Control;
  formErrors?: FieldErrors<SignUpFormData>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
} {
  const history = useHistory();
  const { handleSubmit, errors, control, watch, triggerValidation } = useForm<SignUpFormData>();
  const [t] = useTranslation();

  const [isValidForm, setIsValidForm] = useState(false);
  const watchedEmail = watch("account.email");
  const watchedPassword = watch("account.password");
  const watchedAgreement = watch("agreement");

  const [signUp] = useLazyApi(new AccountRequest.SignUp(), {
    variables: {},
    onSuccess: () => {
      history.push(routes.home());
      notification.success({ message: t("ログインしました") });
    },
    onFailure: e => {
      notification.error({ message: e.message });
    }
  });

  // Validations
  useEffect(() => {
    if (!(watchedEmail && watchedPassword && watchedAgreement)) return;

    triggerValidation(["email", "password", "agreement"]).then(isValid => {
      setIsValidForm(isValid);
    });
  }, [watchedEmail, watchedPassword, watchedAgreement]);

  const onSubmit = handleSubmit(formData => {
    signUp({
      variables: {
        params: formData
      }
    });
  });

  return {
    email: watchedEmail as string,
    password: watchedPassword as string,
    agreement: watchedAgreement,
    isValidForm,
    formControl: control,
    formErrors: errors,
    onSubmit
  };
}
