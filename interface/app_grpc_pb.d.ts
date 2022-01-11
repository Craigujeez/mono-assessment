// GENERATED CODE -- DO NOT EDIT!

// package: app
// file: app.proto

import * as app_pb from "./app_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IAppService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createProfile: grpc.MethodDefinition<app_pb.CreateProfileRequest, app_pb.ProfileDetails>;
  login: grpc.MethodDefinition<app_pb.Credentials, app_pb.ProfileDetailsAndJWT>;
  getProfile: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, app_pb.ProfileDetails>;
  deleteProfile: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  linkAccount: grpc.MethodDefinition<app_pb.LinkAccountRequest, app_pb.AccountDetails>;
  unlinkAccount: grpc.MethodDefinition<app_pb.ID, google_protobuf_empty_pb.Empty>;
  getLinkedAccount: grpc.MethodDefinition<app_pb.ID, app_pb.AccountDetails>;
  listLinkedAccounts: grpc.MethodDefinition<app_pb.ListLinkedAccountsRequest, app_pb.ListLinkedAccountsResponse>;
  getAccountTransaction: grpc.MethodDefinition<app_pb.GetAccountTransactionRequest, app_pb.TransactionDetails>;
  listAccountTransactions: grpc.MethodDefinition<app_pb.ListAccountTransactionsRequest, app_pb.ListAccountTransactionsResponse>;
  getReauthCode: grpc.MethodDefinition<app_pb.ID, app_pb.GetReauthCodeResponse>;
  webHook: grpc.MethodDefinition<app_pb.MonoEvent, google_protobuf_empty_pb.Empty>;
}

export const AppService: IAppService;

export interface IAppServer extends grpc.UntypedServiceImplementation {
  createProfile: grpc.handleUnaryCall<app_pb.CreateProfileRequest, app_pb.ProfileDetails>;
  login: grpc.handleUnaryCall<app_pb.Credentials, app_pb.ProfileDetailsAndJWT>;
  getProfile: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, app_pb.ProfileDetails>;
  deleteProfile: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  linkAccount: grpc.handleUnaryCall<app_pb.LinkAccountRequest, app_pb.AccountDetails>;
  unlinkAccount: grpc.handleUnaryCall<app_pb.ID, google_protobuf_empty_pb.Empty>;
  getLinkedAccount: grpc.handleUnaryCall<app_pb.ID, app_pb.AccountDetails>;
  listLinkedAccounts: grpc.handleUnaryCall<app_pb.ListLinkedAccountsRequest, app_pb.ListLinkedAccountsResponse>;
  getAccountTransaction: grpc.handleUnaryCall<app_pb.GetAccountTransactionRequest, app_pb.TransactionDetails>;
  listAccountTransactions: grpc.handleUnaryCall<app_pb.ListAccountTransactionsRequest, app_pb.ListAccountTransactionsResponse>;
  getReauthCode: grpc.handleUnaryCall<app_pb.ID, app_pb.GetReauthCodeResponse>;
  webHook: grpc.handleUnaryCall<app_pb.MonoEvent, google_protobuf_empty_pb.Empty>;
}

export class AppClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createProfile(argument: app_pb.CreateProfileRequest, callback: grpc.requestCallback<app_pb.ProfileDetails>): grpc.ClientUnaryCall;
  createProfile(argument: app_pb.CreateProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ProfileDetails>): grpc.ClientUnaryCall;
  createProfile(argument: app_pb.CreateProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ProfileDetails>): grpc.ClientUnaryCall;
  login(argument: app_pb.Credentials, callback: grpc.requestCallback<app_pb.ProfileDetailsAndJWT>): grpc.ClientUnaryCall;
  login(argument: app_pb.Credentials, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ProfileDetailsAndJWT>): grpc.ClientUnaryCall;
  login(argument: app_pb.Credentials, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ProfileDetailsAndJWT>): grpc.ClientUnaryCall;
  getProfile(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<app_pb.ProfileDetails>): grpc.ClientUnaryCall;
  getProfile(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ProfileDetails>): grpc.ClientUnaryCall;
  getProfile(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ProfileDetails>): grpc.ClientUnaryCall;
  deleteProfile(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteProfile(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteProfile(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  linkAccount(argument: app_pb.LinkAccountRequest, callback: grpc.requestCallback<app_pb.AccountDetails>): grpc.ClientUnaryCall;
  linkAccount(argument: app_pb.LinkAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.AccountDetails>): grpc.ClientUnaryCall;
  linkAccount(argument: app_pb.LinkAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.AccountDetails>): grpc.ClientUnaryCall;
  unlinkAccount(argument: app_pb.ID, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  unlinkAccount(argument: app_pb.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  unlinkAccount(argument: app_pb.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getLinkedAccount(argument: app_pb.ID, callback: grpc.requestCallback<app_pb.AccountDetails>): grpc.ClientUnaryCall;
  getLinkedAccount(argument: app_pb.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.AccountDetails>): grpc.ClientUnaryCall;
  getLinkedAccount(argument: app_pb.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.AccountDetails>): grpc.ClientUnaryCall;
  listLinkedAccounts(argument: app_pb.ListLinkedAccountsRequest, callback: grpc.requestCallback<app_pb.ListLinkedAccountsResponse>): grpc.ClientUnaryCall;
  listLinkedAccounts(argument: app_pb.ListLinkedAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ListLinkedAccountsResponse>): grpc.ClientUnaryCall;
  listLinkedAccounts(argument: app_pb.ListLinkedAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ListLinkedAccountsResponse>): grpc.ClientUnaryCall;
  getAccountTransaction(argument: app_pb.GetAccountTransactionRequest, callback: grpc.requestCallback<app_pb.TransactionDetails>): grpc.ClientUnaryCall;
  getAccountTransaction(argument: app_pb.GetAccountTransactionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.TransactionDetails>): grpc.ClientUnaryCall;
  getAccountTransaction(argument: app_pb.GetAccountTransactionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.TransactionDetails>): grpc.ClientUnaryCall;
  listAccountTransactions(argument: app_pb.ListAccountTransactionsRequest, callback: grpc.requestCallback<app_pb.ListAccountTransactionsResponse>): grpc.ClientUnaryCall;
  listAccountTransactions(argument: app_pb.ListAccountTransactionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ListAccountTransactionsResponse>): grpc.ClientUnaryCall;
  listAccountTransactions(argument: app_pb.ListAccountTransactionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.ListAccountTransactionsResponse>): grpc.ClientUnaryCall;
  getReauthCode(argument: app_pb.ID, callback: grpc.requestCallback<app_pb.GetReauthCodeResponse>): grpc.ClientUnaryCall;
  getReauthCode(argument: app_pb.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.GetReauthCodeResponse>): grpc.ClientUnaryCall;
  getReauthCode(argument: app_pb.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<app_pb.GetReauthCodeResponse>): grpc.ClientUnaryCall;
  webHook(argument: app_pb.MonoEvent, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  webHook(argument: app_pb.MonoEvent, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  webHook(argument: app_pb.MonoEvent, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
