import { Metadata, ServiceError, status } from '@grpc/grpc-js';

export class ErrorBase extends Error implements ServiceError {
  public code: status = status.UNKNOWN
  get message() {
    return `${this.code} ${status[this.code]}: ${this.details}`;
  }
  constructor(public name: string,  public details: string = '', public metadata: Metadata = new Metadata()) {
    super();
  }
}

export class UnimplementedError extends ErrorBase  {
  constructor(scope: string = 'unknown', reason: string = 'unknown') {
    super('UnimplementedError', `${scope} not implemented; reason::${reason}`);
    this.code = status.UNIMPLEMENTED;
  }
}

export class NotFoundError extends ErrorBase {
  constructor(scope: string = 'unknown') {
    super('NotFoundError', `${scope} not found`);
    this.code = status.NOT_FOUND;
  }
}

export class InvalidTokenError extends ErrorBase {
  constructor() {
    super('InvalidTokenError', `token not valid`);
    this.code = status.UNAUTHENTICATED;
  }
}

export class ValidationError extends ErrorBase {
  constructor(errMsg: string) {
    super('ValidationError', `${errMsg}`);
    this.code = status.INVALID_ARGUMENT;
  }
}

export class InternalError extends ErrorBase {
  constructor(errMsg: string) {
    super('InternalError', `${errMsg}`);
    this.code = status.INTERNAL;
  }
}

export class AuthenticationError extends ErrorBase {
  constructor(errMsg: string) {
    super('AuthenticationError', `${errMsg}`);
    this.code = status.UNAUTHENTICATED;
  }
}

export class ConflictError extends ErrorBase {
  constructor(scope: string) {
    super('ConflictError', `${scope} already exists`);
    this.code = status.ALREADY_EXISTS;
  }
}

export class PermissionError extends ErrorBase {
  constructor(msg: string = 'user is not permitted to perform this action') {
    super('PermissionError', msg);
    this.code = status.PERMISSION_DENIED;
  }
}
