import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import useSignInPresenter from "./useSignInPresenter";
import { ContainButton } from "components/atoms/Button/ContainButton";
import routes from "commons/constants/routes";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Input from "../../../../components/atoms/Input/Input";

const SignInPage: FC = () => {
  const { onSubmit, formControl } = useSignInPresenter();
  const { register } = formControl;
  const [t] = useTranslation();
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.lgVMargin}>
          <div className={styles.mdMarginBottom}>
            <Input
              name="account.email"
              placeholder="メールアドレス"
              innerRef={register({
                required: "メールアドレスは必須です。",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "無効なメールアドレスです。"
                }
              })}
              type="email"
              size="lg"
            />
          </div>
          <Input
            name="account.password"
            placeholder="Password ※"
            innerRef={register({ required: "パスワードは必須です。" })}
            type="password"
            size="lg"
          />
        </div>

        <div className={styles.lgVPadding}>
          <div className={styles.lgVMargin}>
            <ContainButton size={"lg"} width={180}>
              {t("ログイン")}
            </ContainButton>
          </div>
          <div>
            まだ会員ではない方は<Link to={routes.signUp()}>{t("新規登録")}</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
