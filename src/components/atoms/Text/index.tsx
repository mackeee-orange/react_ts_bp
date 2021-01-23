import React, { FC } from "react";
import BaseText, { BaseTextProps } from "./BaseText";
import styles from "./style.module.scss";
import classNames from "classnames";

/**
 * Title系
 * **/

export const PageTitle: FC<BaseTextProps> = props => {
  return (
    <div className={styles.pageTitleWrap}>
      <BaseText
        {...props}
        className={classNames(styles.pageTitle, props.className)}
        size={"lg"}
        bold
        htmlNode={"h1"}
      />
    </div>
  );
};

export const ImpactName: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"xl"} bold htmlNode={"h1"} />;
};

export const SectionTitle: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"lg"} bold htmlNode={"h2"} />;
};

export const CategoryTitle: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"sm"} bold htmlNode={"h3"} />;
};

export const ContentTitle: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"sm"} bold htmlNode={"p"} />;
};

export const MiniTitle: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"xs"} bold htmlNode={"p"} />;
};
/**
 * Label系
 * **/

export const ButtonLabel: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"sm"} bold htmlNode={"span"} />;
};

export const MiniLabel: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"xs"} htmlNode={"span"} />;
};

export const ImpactLabel: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"md"} bold htmlNode={"span"} />;
};
/**
 * Normal
 */
export const ContentBody: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"sm"} htmlNode={"p"} />;
};

export const SubInfoText: FC<BaseTextProps> = props => {
  return <BaseText {...props} size={"md"} htmlNode={"p"} disabled />;
};
