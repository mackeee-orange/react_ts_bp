import { notification } from "antd";
import { UnAuthorizedError } from "./index";

export default function raiseError(e: Error, displayMsg?: string): void {
  let message = displayMsg;
  if (e instanceof UnAuthorizedError) {
    message = "ログインしてください";
  }
  notification.error({ message: message || "エラーが発生しました。画面をリロードしてください" });
  throw new Error(e.message);
}
