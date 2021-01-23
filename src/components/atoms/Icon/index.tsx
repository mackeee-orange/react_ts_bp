import React, { FC } from "react";
import Icon from "./BaseIcon";

import { ReactComponent as ArrowLeft } from "assets/images/iconSVGs/arrow-left.svg";
import { ReactComponent as CcAmex } from "assets/images/iconSVGs/cc-amex.svg";
import { ReactComponent as CcDiners } from "assets/images/iconSVGs/cc-diners-club.svg";
import { ReactComponent as CcJCB } from "assets/images/iconSVGs/cc-jcb.svg";
import { ReactComponent as CcMaster } from "assets/images/iconSVGs/cc-master.svg";
import { ReactComponent as CcVisa } from "assets/images/iconSVGs/cc-visa.svg";
import { ReactComponent as Calendar } from "assets/images/iconSVGs/calendar.svg";
import { ReactComponent as CaretDown } from "assets/images/iconSVGs/caret-down.svg";
import { ReactComponent as CaretRight } from "assets/images/iconSVGs/caret-right.svg";
import { ReactComponent as CheckBox } from "assets/images/iconSVGs/check-box.svg";
import { ReactComponent as Check } from "assets/images/iconSVGs/check.svg";
import { ReactComponent as CheckedBox } from "assets/images/iconSVGs/check-box.svg";
import { ReactComponent as Close } from "assets/images/iconSVGs/close.svg";
import { ReactComponent as Dollar } from "assets/images/iconSVGs/dollar.svg";
import { ReactComponent as DoubleRight } from "assets/images/iconSVGs/double-right.svg";
import { ReactComponent as Edit } from "assets/images/iconSVGs/edit.svg";
import { ReactComponent as Ellipsis } from "assets/images/iconSVGs/ellipsis.svg";
import { ReactComponent as File } from "assets/images/iconSVGs/file.svg";
import { ReactComponent as Info } from "assets/images/iconSVGs/info.svg";
import { ReactComponent as Like } from "assets/images/iconSVGs/like.svg";
import { ReactComponent as RedLike } from "assets/images/iconSVGs/like-red.svg";
import { ReactComponent as Location } from "assets/images/iconSVGs/location.svg";
import { ReactComponent as Message } from "assets/images/iconSVGs/message.svg";
import { ReactComponent as Notification } from "assets/images/iconSVGs/notification.svg";
import { ReactComponent as PdfFile } from "assets/images/iconSVGs/pdf-file.svg";
import { ReactComponent as Picture } from "assets/images/iconSVGs/picture.svg";
import { ReactComponent as Plus } from "assets/images/iconSVGs/plus.svg";
import { ReactComponent as Right } from "assets/images/iconSVGs/right.svg";
import { ReactComponent as Search } from "assets/images/iconSVGs/search.svg";
import { ReactComponent as Setting } from "assets/images/iconSVGs/setting.svg";
import { ReactComponent as Star } from "assets/images/iconSVGs/star.svg";
import { ReactComponent as StarFilled } from "assets/images/iconSVGs/star-filled.svg";
import { ReactComponent as Upload } from "assets/images/iconSVGs/upload.svg";
import { ReactComponent as Work } from "assets/images/iconSVGs/work.svg";
import { ReactComponent as Download } from "assets/images/iconSVGs/download.svg";
import { ReactComponent as Delete } from "assets/images/iconSVGs/delete.svg";

export type BaseIconProps = {
  innerRef?: ((ref: HTMLElement | null) => void) | null;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
};
export const ArrowLeftIcon: FC<BaseIconProps> = props => (
  <Icon component={ArrowLeft} className={props.className} onClick={props.onClick} />
);
export const CCardAmexIcon: FC<BaseIconProps> = props => (
  <Icon component={CcAmex} className={props.className} onClick={props.onClick} />
);
export const CCardDinersIcon: FC<BaseIconProps> = props => (
  <Icon component={CcDiners} className={props.className} onClick={props.onClick} />
);
export const CCardJCBIcon: FC<BaseIconProps> = props => (
  <Icon component={CcJCB} className={props.className} onClick={props.onClick} />
);
export const CCardMasterIcon: FC<BaseIconProps> = props => (
  <Icon component={CcMaster} className={props.className} onClick={props.onClick} />
);
export const CCardVisaIcon: FC<BaseIconProps> = props => (
  <Icon component={CcVisa} className={props.className} onClick={props.onClick} />
);
export const CalendarIcon: FC<BaseIconProps> = props => (
  <Icon component={Calendar} className={props.className} onClick={props.onClick} />
);
export const CaretDownIcon: FC<BaseIconProps> = props => (
  <Icon component={CaretDown} className={props.className} onClick={props.onClick} />
);
export const CaretRightIcon: FC<BaseIconProps> = props => (
  <Icon component={CaretRight} className={props.className} onClick={props.onClick} />
);
export const CheckBoxIcon: FC<BaseIconProps> = props => (
  <Icon component={CheckBox} className={props.className} onClick={props.onClick} />
);
export const CheckIcon: FC<BaseIconProps> = props => (
  <Icon component={Check} className={props.className} onClick={props.onClick} />
);
export const CheckedBoxIcon: FC<BaseIconProps> = props => (
  <Icon component={CheckedBox} className={props.className} onClick={props.onClick} />
);
export const CloseIcon: FC<BaseIconProps> = props => (
  <Icon component={Close} className={props.className} onClick={props.onClick} />
);
export const DollarIcon: FC<BaseIconProps> = props => (
  <Icon component={Dollar} className={props.className} onClick={props.onClick} />
);
export const DoubleRightIcon: FC<BaseIconProps> = props => (
  <Icon component={DoubleRight} className={props.className} onClick={props.onClick} />
);
export const EditIcon: FC<BaseIconProps> = props => (
  <Icon component={Edit} className={props.className} onClick={props.onClick} />
);
export const EllipsisIcon: FC<BaseIconProps> = props => (
  <Icon component={Ellipsis} className={props.className} onClick={props.onClick} />
);
export const FileIcon: FC<BaseIconProps> = props => (
  <Icon component={File} className={props.className} onClick={props.onClick} />
);
export const InfoIcon: FC<BaseIconProps> = props => (
  <Icon component={Info} className={props.className} onClick={props.onClick} />
);
export const LikeIcon: FC<BaseIconProps> = props => (
  <Icon component={Like} className={props.className} onClick={props.onClick} />
);
export const RedLikeIcon: FC<BaseIconProps> = props => (
  <Icon component={RedLike} className={props.className} onClick={props.onClick} />
);
export const LocationIcon: FC<BaseIconProps> = props => (
  <Icon component={Location} className={props.className} onClick={props.onClick} />
);
export const MessageIcon: FC<BaseIconProps> = props => (
  <Icon component={Message} className={props.className} onClick={props.onClick} />
);
export const NotificationIcon: FC<BaseIconProps> = props => (
  <Icon component={Notification} className={props.className} onClick={props.onClick} />
);
export const PdfFileIcon: FC<BaseIconProps> = props => (
  <Icon component={PdfFile} className={props.className} onClick={props.onClick} />
);
export const PictureIcon: FC<BaseIconProps> = props => (
  <Icon component={Picture} className={props.className} onClick={props.onClick} />
);
export const PlusIcon: FC<BaseIconProps> = props => (
  <Icon component={Plus} className={props.className} onClick={props.onClick} />
);
export const RightIcon: FC<BaseIconProps> = props => (
  <Icon component={Right} className={props.className} onClick={props.onClick} />
);
export const SearchIcon: FC<BaseIconProps> = props => (
  <Icon component={Search} className={props.className} onClick={props.onClick} />
);
export const SettingIcon: FC<BaseIconProps> = props => (
  <Icon component={Setting} className={props.className} onClick={props.onClick} />
);
export const StarIcon: FC<BaseIconProps> = props => (
  <Icon component={Star} className={props.className} onClick={props.onClick} />
);
export const StarFilledIcon: FC<BaseIconProps> = props => (
  <Icon component={StarFilled} className={props.className} onClick={props.onClick} />
);
export const UploadIcon: FC<BaseIconProps> = props => (
  <Icon component={Upload} className={props.className} onClick={props.onClick} />
);
export const WorkIcon: FC<BaseIconProps> = props => (
  <Icon component={Work} className={props.className} onClick={props.onClick} />
);

export const DownloadIcon: FC<BaseIconProps> = props => (
  <Icon component={Download} className={props.className} onClick={props.onClick} />
);

export const DeleteIcon: FC<BaseIconProps> = props => (
  <Icon component={Delete} className={props.className} onClick={props.onClick} />
);
