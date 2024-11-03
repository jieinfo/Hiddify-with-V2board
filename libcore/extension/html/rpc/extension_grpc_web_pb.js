/**
 * @fileoverview gRPC-Web generated client stub for hiddifyrpc
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.0
// source: extension.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var base_pb = require('./base_pb.js')
const proto = {};
proto.hiddifyrpc = require('./extension_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hiddifyrpc.ExtensionHostServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hiddifyrpc.Empty,
 *   !proto.hiddifyrpc.ExtensionList>}
 */
const methodDescriptor_ExtensionHostService_ListExtensions = new grpc.web.MethodDescriptor(
  '/hiddifyrpc.ExtensionHostService/ListExtensions',
  grpc.web.MethodType.UNARY,
  base_pb.Empty,
  proto.hiddifyrpc.ExtensionList,
  /**
   * @param {!proto.hiddifyrpc.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hiddifyrpc.ExtensionList.deserializeBinary
);


/**
 * @param {!proto.hiddifyrpc.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hiddifyrpc.ExtensionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServiceClient.prototype.listExtensions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/ListExtensions',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_ListExtensions,
      callback);
};


/**
 * @param {!proto.hiddifyrpc.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hiddifyrpc.ExtensionList>}
 *     Promise that resolves to the response
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient.prototype.listExtensions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/ListExtensions',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_ListExtensions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hiddifyrpc.ExtensionRequest,
 *   !proto.hiddifyrpc.ExtensionResponse>}
 */
const methodDescriptor_ExtensionHostService_Connect = new grpc.web.MethodDescriptor(
  '/hiddifyrpc.ExtensionHostService/Connect',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.hiddifyrpc.ExtensionRequest,
  proto.hiddifyrpc.ExtensionResponse,
  /**
   * @param {!proto.hiddifyrpc.ExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hiddifyrpc.ExtensionResponse.deserializeBinary
);


/**
 * @param {!proto.hiddifyrpc.ExtensionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionResponse>}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServiceClient.prototype.connect =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/Connect',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_Connect);
};


/**
 * @param {!proto.hiddifyrpc.ExtensionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionResponse>}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient.prototype.connect =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/Connect',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_Connect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hiddifyrpc.EditExtensionRequest,
 *   !proto.hiddifyrpc.ExtensionActionResult>}
 */
const methodDescriptor_ExtensionHostService_EditExtension = new grpc.web.MethodDescriptor(
  '/hiddifyrpc.ExtensionHostService/EditExtension',
  grpc.web.MethodType.UNARY,
  proto.hiddifyrpc.EditExtensionRequest,
  proto.hiddifyrpc.ExtensionActionResult,
  /**
   * @param {!proto.hiddifyrpc.EditExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hiddifyrpc.ExtensionActionResult.deserializeBinary
);


/**
 * @param {!proto.hiddifyrpc.EditExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hiddifyrpc.ExtensionActionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionActionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServiceClient.prototype.editExtension =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/EditExtension',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_EditExtension,
      callback);
};


/**
 * @param {!proto.hiddifyrpc.EditExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hiddifyrpc.ExtensionActionResult>}
 *     Promise that resolves to the response
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient.prototype.editExtension =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/EditExtension',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_EditExtension);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hiddifyrpc.SendExtensionDataRequest,
 *   !proto.hiddifyrpc.ExtensionActionResult>}
 */
const methodDescriptor_ExtensionHostService_SubmitForm = new grpc.web.MethodDescriptor(
  '/hiddifyrpc.ExtensionHostService/SubmitForm',
  grpc.web.MethodType.UNARY,
  proto.hiddifyrpc.SendExtensionDataRequest,
  proto.hiddifyrpc.ExtensionActionResult,
  /**
   * @param {!proto.hiddifyrpc.SendExtensionDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hiddifyrpc.ExtensionActionResult.deserializeBinary
);


/**
 * @param {!proto.hiddifyrpc.SendExtensionDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hiddifyrpc.ExtensionActionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionActionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServiceClient.prototype.submitForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/SubmitForm',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_SubmitForm,
      callback);
};


/**
 * @param {!proto.hiddifyrpc.SendExtensionDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hiddifyrpc.ExtensionActionResult>}
 *     Promise that resolves to the response
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient.prototype.submitForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/SubmitForm',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_SubmitForm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hiddifyrpc.ExtensionRequest,
 *   !proto.hiddifyrpc.ExtensionActionResult>}
 */
const methodDescriptor_ExtensionHostService_Close = new grpc.web.MethodDescriptor(
  '/hiddifyrpc.ExtensionHostService/Close',
  grpc.web.MethodType.UNARY,
  proto.hiddifyrpc.ExtensionRequest,
  proto.hiddifyrpc.ExtensionActionResult,
  /**
   * @param {!proto.hiddifyrpc.ExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hiddifyrpc.ExtensionActionResult.deserializeBinary
);


/**
 * @param {!proto.hiddifyrpc.ExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hiddifyrpc.ExtensionActionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionActionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServiceClient.prototype.close =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/Close',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_Close,
      callback);
};


/**
 * @param {!proto.hiddifyrpc.ExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hiddifyrpc.ExtensionActionResult>}
 *     Promise that resolves to the response
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient.prototype.close =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/Close',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_Close);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hiddifyrpc.ExtensionRequest,
 *   !proto.hiddifyrpc.ExtensionActionResult>}
 */
const methodDescriptor_ExtensionHostService_GetUI = new grpc.web.MethodDescriptor(
  '/hiddifyrpc.ExtensionHostService/GetUI',
  grpc.web.MethodType.UNARY,
  proto.hiddifyrpc.ExtensionRequest,
  proto.hiddifyrpc.ExtensionActionResult,
  /**
   * @param {!proto.hiddifyrpc.ExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hiddifyrpc.ExtensionActionResult.deserializeBinary
);


/**
 * @param {!proto.hiddifyrpc.ExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hiddifyrpc.ExtensionActionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hiddifyrpc.ExtensionActionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hiddifyrpc.ExtensionHostServiceClient.prototype.getUI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/GetUI',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_GetUI,
      callback);
};


/**
 * @param {!proto.hiddifyrpc.ExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hiddifyrpc.ExtensionActionResult>}
 *     Promise that resolves to the response
 */
proto.hiddifyrpc.ExtensionHostServicePromiseClient.prototype.getUI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hiddifyrpc.ExtensionHostService/GetUI',
      request,
      metadata || {},
      methodDescriptor_ExtensionHostService_GetUI);
};


module.exports = proto.hiddifyrpc;

