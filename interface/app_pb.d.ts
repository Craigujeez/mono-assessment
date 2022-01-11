// package: app
// file: app.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ID extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ID.AsObject;
  static toObject(includeInstance: boolean, msg: ID): ID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ID;
  static deserializeBinaryFromReader(message: ID, reader: jspb.BinaryReader): ID;
}

export namespace ID {
  export type AsObject = {
    id: string,
  }
}

export class CreateProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
  static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
  export type AsObject = {
    name: string,
    email: string,
    password: string,
  }
}

export class ProfileDetails extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHasLinkedAccount(): boolean;
  setHasLinkedAccount(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileDetails): ProfileDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileDetails;
  static deserializeBinaryFromReader(message: ProfileDetails, reader: jspb.BinaryReader): ProfileDetails;
}

export namespace ProfileDetails {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hasLinkedAccount: boolean,
  }
}

export class Credentials extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credentials.AsObject;
  static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credentials;
  static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class ProfileDetailsAndJWT extends jspb.Message {
  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): ProfileDetails | undefined;
  setProfile(value?: ProfileDetails): void;

  getJwt(): string;
  setJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileDetailsAndJWT.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileDetailsAndJWT): ProfileDetailsAndJWT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileDetailsAndJWT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileDetailsAndJWT;
  static deserializeBinaryFromReader(message: ProfileDetailsAndJWT, reader: jspb.BinaryReader): ProfileDetailsAndJWT;
}

export namespace ProfileDetailsAndJWT {
  export type AsObject = {
    profile?: ProfileDetails.AsObject,
    jwt: string,
  }
}

export class LinkAccountRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkAccountRequest): LinkAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkAccountRequest;
  static deserializeBinaryFromReader(message: LinkAccountRequest, reader: jspb.BinaryReader): LinkAccountRequest;
}

export namespace LinkAccountRequest {
  export type AsObject = {
    code: string,
  }
}

export class AccountDetails extends jspb.Message {
  getBvn(): string;
  setBvn(value: string): void;

  hasDateAdded(): boolean;
  clearDateAdded(): void;
  getDateAdded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateAdded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getAccountName(): string;
  setAccountName(value: string): void;

  getAccountNuban(): string;
  setAccountNuban(value: string): void;

  getAccountUser(): string;
  setAccountUser(value: string): void;

  getBankName(): string;
  setBankName(value: string): void;

  getReauthRequired(): boolean;
  setReauthRequired(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDetails): AccountDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDetails;
  static deserializeBinaryFromReader(message: AccountDetails, reader: jspb.BinaryReader): AccountDetails;
}

export namespace AccountDetails {
  export type AsObject = {
    bvn: string,
    dateAdded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    accountId: string,
    accountName: string,
    accountNuban: string,
    accountUser: string,
    bankName: string,
    reauthRequired: boolean,
    id: string,
  }
}

export class ListLinkedAccountsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrder(): SortOrderMap[keyof SortOrderMap];
  setOrder(value: SortOrderMap[keyof SortOrderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLinkedAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLinkedAccountsRequest): ListLinkedAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLinkedAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLinkedAccountsRequest;
  static deserializeBinaryFromReader(message: ListLinkedAccountsRequest, reader: jspb.BinaryReader): ListLinkedAccountsRequest;
}

export namespace ListLinkedAccountsRequest {
  export type AsObject = {
    page: number,
    limit: number,
    order: SortOrderMap[keyof SortOrderMap],
  }
}

export class ListLinkedAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<AccountDetails>;
  setAccountsList(value: Array<AccountDetails>): void;
  addAccounts(value?: AccountDetails, index?: number): AccountDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLinkedAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLinkedAccountsResponse): ListLinkedAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLinkedAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLinkedAccountsResponse;
  static deserializeBinaryFromReader(message: ListLinkedAccountsResponse, reader: jspb.BinaryReader): ListLinkedAccountsResponse;
}

export namespace ListLinkedAccountsResponse {
  export type AsObject = {
    accountsList: Array<AccountDetails.AsObject>,
  }
}

export class TransactionDetails extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCredit(): boolean;
  clearCredit(): void;
  getCredit(): number;
  setCredit(value: number): void;

  hasDebit(): boolean;
  clearDebit(): void;
  getDebit(): number;
  setDebit(value: number): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getNarration(): string;
  setNarration(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getAmountCase(): TransactionDetails.AmountCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionDetails.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionDetails): TransactionDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionDetails;
  static deserializeBinaryFromReader(message: TransactionDetails, reader: jspb.BinaryReader): TransactionDetails;
}

export namespace TransactionDetails {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    credit: number,
    debit: number,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    currency: string,
    narration: string,
    balance: number,
    accountId: string,
  }

  export enum AmountCase {
    AMOUNT_NOT_SET = 0,
    CREDIT = 3,
    DEBIT = 4,
  }
}

export class GetAccountTransactionRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountTransactionRequest): GetAccountTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountTransactionRequest;
  static deserializeBinaryFromReader(message: GetAccountTransactionRequest, reader: jspb.BinaryReader): GetAccountTransactionRequest;
}

export namespace GetAccountTransactionRequest {
  export type AsObject = {
    accountId: string,
    transactionId: string,
  }
}

export class ListAccountTransactionsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrder(): SortOrderMap[keyof SortOrderMap];
  setOrder(value: SortOrderMap[keyof SortOrderMap]): void;

  getId(): string;
  setId(value: string): void;

  hasTag(): boolean;
  clearTag(): void;
  getTag(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTag(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountTransactionsRequest): ListAccountTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAccountTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountTransactionsRequest;
  static deserializeBinaryFromReader(message: ListAccountTransactionsRequest, reader: jspb.BinaryReader): ListAccountTransactionsRequest;
}

export namespace ListAccountTransactionsRequest {
  export type AsObject = {
    page: number,
    limit: number,
    order: SortOrderMap[keyof SortOrderMap],
    id: string,
    tag?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class ListAccountTransactionsResponse extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<TransactionDetails>;
  setTransactionsList(value: Array<TransactionDetails>): void;
  addTransactions(value?: TransactionDetails, index?: number): TransactionDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountTransactionsResponse): ListAccountTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAccountTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountTransactionsResponse;
  static deserializeBinaryFromReader(message: ListAccountTransactionsResponse, reader: jspb.BinaryReader): ListAccountTransactionsResponse;
}

export namespace ListAccountTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<TransactionDetails.AsObject>,
  }
}

export class EventData extends jspb.Message {
  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): EventData.Meta | undefined;
  setMeta(value?: EventData.Meta): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): EventData.MonoAccount | undefined;
  setAccount(value?: EventData.MonoAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventData.AsObject;
  static toObject(includeInstance: boolean, msg: EventData): EventData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventData;
  static deserializeBinaryFromReader(message: EventData, reader: jspb.BinaryReader): EventData;
}

export namespace EventData {
  export type AsObject = {
    meta?: EventData.Meta.AsObject,
    account?: EventData.MonoAccount.AsObject,
  }

  export class Meta extends jspb.Message {
    getDataStatus(): string;
    setDataStatus(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Meta.AsObject;
    static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Meta;
    static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
  }

  export namespace Meta {
    export type AsObject = {
      dataStatus: string,
    }
  }

  export class Institution extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Institution.AsObject;
    static toObject(includeInstance: boolean, msg: Institution): Institution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Institution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Institution;
    static deserializeBinaryFromReader(message: Institution, reader: jspb.BinaryReader): Institution;
  }

  export namespace Institution {
    export type AsObject = {
      name: string,
    }
  }

  export class MonoAccount extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getAccountNumber(): string;
    setAccountNumber(value: string): void;

    getName(): string;
    setName(value: string): void;

    getType(): string;
    setType(value: string): void;

    getCurrency(): string;
    setCurrency(value: string): void;

    getBvn(): string;
    setBvn(value: string): void;

    getBalance(): number;
    setBalance(value: number): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasInstitution(): boolean;
    clearInstitution(): void;
    getInstitution(): EventData.Institution | undefined;
    setInstitution(value?: EventData.Institution): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonoAccount.AsObject;
    static toObject(includeInstance: boolean, msg: MonoAccount): MonoAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonoAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonoAccount;
    static deserializeBinaryFromReader(message: MonoAccount, reader: jspb.BinaryReader): MonoAccount;
  }

  export namespace MonoAccount {
    export type AsObject = {
      id: string,
      accountNumber: string,
      name: string,
      type: string,
      currency: string,
      bvn: string,
      balance: number,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      institution?: EventData.Institution.AsObject,
    }
  }
}

export class MonoEvent extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EventData | undefined;
  setData(value?: EventData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonoEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MonoEvent): MonoEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonoEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonoEvent;
  static deserializeBinaryFromReader(message: MonoEvent, reader: jspb.BinaryReader): MonoEvent;
}

export namespace MonoEvent {
  export type AsObject = {
    event: string,
    data?: EventData.AsObject,
  }
}

export class GetReauthCodeResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReauthCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReauthCodeResponse): GetReauthCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReauthCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReauthCodeResponse;
  static deserializeBinaryFromReader(message: GetReauthCodeResponse, reader: jspb.BinaryReader): GetReauthCodeResponse;
}

export namespace GetReauthCodeResponse {
  export type AsObject = {
    code: string,
  }
}

export interface SortOrderMap {
  SORT_ORDER_UNSPECIFIED: 0;
  CHRONO_ASC: 0;
  CHRONO_DSC: 1;
}

export const SortOrder: SortOrderMap;

