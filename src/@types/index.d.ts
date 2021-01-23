export type SizeType = "sm" | "md" | "lg";

declare global {
  /**
   * Interface
   * **/
  interface Window {
    gtag?: (key: string, trackingId: string, config: { page_path: string }) => void;
  }

  interface DictionaryLike<T = unknown> extends {} {
    [key: string]: T;
  }

  interface URLSearchParams {
    entries(): IterableIterator<[string, string]>;
  }

  interface Action {
    type: string;
    payload?: unknown;
  }

  interface Type<T> extends Object {
    new (...args: unknown[]): T;
  }

  /**
   * TypeAlias
   * **/

  type ThemeColor =
    | "primary"
    | "secondary"
    | "danger"
    | "disable"
    | "line"
    | "black"
    | "darkGray"
    | "mediumGray"
    | "lightGray"
    | "white";

  type SizeType = "sm" | "md" | "lg";

  type LoginAs = "general" | "company";

  type Maybe<T> = T | null;
}
