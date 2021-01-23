import React, { FC } from "react";
import LogoImg from "assets/images/Logo.png";
import Link from "../Link";
import routes from "commons/constants/routes";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => (
  <Link to={routes.top()}>
    <img className={className} src={LogoImg} alt="ProbWorks" />
  </Link>
);

export default Logo;
