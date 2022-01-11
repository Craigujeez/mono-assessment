// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var app_pb = require('./app_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_app_AccountDetails(arg) {
  if (!(arg instanceof app_pb.AccountDetails)) {
    throw new Error('Expected argument of type app.AccountDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_AccountDetails(buffer_arg) {
  return app_pb.AccountDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_CreateProfileRequest(arg) {
  if (!(arg instanceof app_pb.CreateProfileRequest)) {
    throw new Error('Expected argument of type app.CreateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_CreateProfileRequest(buffer_arg) {
  return app_pb.CreateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_Credentials(arg) {
  if (!(arg instanceof app_pb.Credentials)) {
    throw new Error('Expected argument of type app.Credentials');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_Credentials(buffer_arg) {
  return app_pb.Credentials.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_GetAccountTransactionRequest(arg) {
  if (!(arg instanceof app_pb.GetAccountTransactionRequest)) {
    throw new Error('Expected argument of type app.GetAccountTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_GetAccountTransactionRequest(buffer_arg) {
  return app_pb.GetAccountTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_GetReauthCodeResponse(arg) {
  if (!(arg instanceof app_pb.GetReauthCodeResponse)) {
    throw new Error('Expected argument of type app.GetReauthCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_GetReauthCodeResponse(buffer_arg) {
  return app_pb.GetReauthCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ID(arg) {
  if (!(arg instanceof app_pb.ID)) {
    throw new Error('Expected argument of type app.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ID(buffer_arg) {
  return app_pb.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_LinkAccountRequest(arg) {
  if (!(arg instanceof app_pb.LinkAccountRequest)) {
    throw new Error('Expected argument of type app.LinkAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_LinkAccountRequest(buffer_arg) {
  return app_pb.LinkAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ListAccountTransactionsRequest(arg) {
  if (!(arg instanceof app_pb.ListAccountTransactionsRequest)) {
    throw new Error('Expected argument of type app.ListAccountTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ListAccountTransactionsRequest(buffer_arg) {
  return app_pb.ListAccountTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ListAccountTransactionsResponse(arg) {
  if (!(arg instanceof app_pb.ListAccountTransactionsResponse)) {
    throw new Error('Expected argument of type app.ListAccountTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ListAccountTransactionsResponse(buffer_arg) {
  return app_pb.ListAccountTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ListLinkedAccountsRequest(arg) {
  if (!(arg instanceof app_pb.ListLinkedAccountsRequest)) {
    throw new Error('Expected argument of type app.ListLinkedAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ListLinkedAccountsRequest(buffer_arg) {
  return app_pb.ListLinkedAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ListLinkedAccountsResponse(arg) {
  if (!(arg instanceof app_pb.ListLinkedAccountsResponse)) {
    throw new Error('Expected argument of type app.ListLinkedAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ListLinkedAccountsResponse(buffer_arg) {
  return app_pb.ListLinkedAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_MonoEvent(arg) {
  if (!(arg instanceof app_pb.MonoEvent)) {
    throw new Error('Expected argument of type app.MonoEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_MonoEvent(buffer_arg) {
  return app_pb.MonoEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ProfileDetails(arg) {
  if (!(arg instanceof app_pb.ProfileDetails)) {
    throw new Error('Expected argument of type app.ProfileDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ProfileDetails(buffer_arg) {
  return app_pb.ProfileDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_ProfileDetailsAndJWT(arg) {
  if (!(arg instanceof app_pb.ProfileDetailsAndJWT)) {
    throw new Error('Expected argument of type app.ProfileDetailsAndJWT');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_ProfileDetailsAndJWT(buffer_arg) {
  return app_pb.ProfileDetailsAndJWT.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_app_TransactionDetails(arg) {
  if (!(arg instanceof app_pb.TransactionDetails)) {
    throw new Error('Expected argument of type app.TransactionDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_app_TransactionDetails(buffer_arg) {
  return app_pb.TransactionDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var AppService = exports.AppService = {
  createProfile: {
    path: '/app.App/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.CreateProfileRequest,
    responseType: app_pb.ProfileDetails,
    requestSerialize: serialize_app_CreateProfileRequest,
    requestDeserialize: deserialize_app_CreateProfileRequest,
    responseSerialize: serialize_app_ProfileDetails,
    responseDeserialize: deserialize_app_ProfileDetails,
  },
  login: {
    path: '/app.App/Login',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.Credentials,
    responseType: app_pb.ProfileDetailsAndJWT,
    requestSerialize: serialize_app_Credentials,
    requestDeserialize: deserialize_app_Credentials,
    responseSerialize: serialize_app_ProfileDetailsAndJWT,
    responseDeserialize: deserialize_app_ProfileDetailsAndJWT,
  },
  getProfile: {
    path: '/app.App/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: app_pb.ProfileDetails,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_app_ProfileDetails,
    responseDeserialize: deserialize_app_ProfileDetails,
  },
  deleteProfile: {
    path: '/app.App/DeleteProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  linkAccount: {
    path: '/app.App/LinkAccount',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.LinkAccountRequest,
    responseType: app_pb.AccountDetails,
    requestSerialize: serialize_app_LinkAccountRequest,
    requestDeserialize: deserialize_app_LinkAccountRequest,
    responseSerialize: serialize_app_AccountDetails,
    responseDeserialize: deserialize_app_AccountDetails,
  },
  unlinkAccount: {
    path: '/app.App/UnlinkAccount',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_app_ID,
    requestDeserialize: deserialize_app_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getLinkedAccount: {
    path: '/app.App/GetLinkedAccount',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.ID,
    responseType: app_pb.AccountDetails,
    requestSerialize: serialize_app_ID,
    requestDeserialize: deserialize_app_ID,
    responseSerialize: serialize_app_AccountDetails,
    responseDeserialize: deserialize_app_AccountDetails,
  },
  listLinkedAccounts: {
    path: '/app.App/ListLinkedAccounts',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.ListLinkedAccountsRequest,
    responseType: app_pb.ListLinkedAccountsResponse,
    requestSerialize: serialize_app_ListLinkedAccountsRequest,
    requestDeserialize: deserialize_app_ListLinkedAccountsRequest,
    responseSerialize: serialize_app_ListLinkedAccountsResponse,
    responseDeserialize: deserialize_app_ListLinkedAccountsResponse,
  },
  getAccountTransaction: {
    path: '/app.App/GetAccountTransaction',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.GetAccountTransactionRequest,
    responseType: app_pb.TransactionDetails,
    requestSerialize: serialize_app_GetAccountTransactionRequest,
    requestDeserialize: deserialize_app_GetAccountTransactionRequest,
    responseSerialize: serialize_app_TransactionDetails,
    responseDeserialize: deserialize_app_TransactionDetails,
  },
  listAccountTransactions: {
    path: '/app.App/ListAccountTransactions',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.ListAccountTransactionsRequest,
    responseType: app_pb.ListAccountTransactionsResponse,
    requestSerialize: serialize_app_ListAccountTransactionsRequest,
    requestDeserialize: deserialize_app_ListAccountTransactionsRequest,
    responseSerialize: serialize_app_ListAccountTransactionsResponse,
    responseDeserialize: deserialize_app_ListAccountTransactionsResponse,
  },
  getReauthCode: {
    path: '/app.App/GetReauthCode',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.ID,
    responseType: app_pb.GetReauthCodeResponse,
    requestSerialize: serialize_app_ID,
    requestDeserialize: deserialize_app_ID,
    responseSerialize: serialize_app_GetReauthCodeResponse,
    responseDeserialize: deserialize_app_GetReauthCodeResponse,
  },
  webHook: {
    path: '/app.App/WebHook',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.MonoEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_app_MonoEvent,
    requestDeserialize: deserialize_app_MonoEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AppClient = grpc.makeGenericClientConstructor(AppService);
