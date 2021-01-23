export class UnAuthorizedError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class BadRequestError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// 正常なレスポンスのステータスコードだが、データがない場合
export class NoDataError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ServerError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// enumで想定されている範囲外の値が渡されたり、仕様以外のことが起こった場合
export class OutOfSpecError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// ABC的な
export class NotYetImplError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// in Async Helper
export function sendErrors<T>(errors: ReadonlyArray<Error>): Promise<T> {
  return Promise.reject<T>(new Error(`${errors.map(e => `${e.message}, \n`)}`));
}

export function sendError<T>(message: string): Promise<T> {
  return Promise.reject<T>(new Error(message));
}
