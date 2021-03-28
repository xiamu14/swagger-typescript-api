/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HttpClient, RequestParams } from "./http-client";

class IdEncryptionApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags IdEncryption
   * @name IdEncryptionControllerEncryptId
   * @summary 加密
   * @request GET:/id-encryption/encryptId
   */
  idEncryptionControllerEncryptId = (query: { id: string }, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/id-encryption/encryptId`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IdEncryption
   * @name IdEncryptionControllerDecryptId
   * @summary 解密
   * @request GET:/id-encryption/decryptId
   */
  idEncryptionControllerDecryptId = (query: { id: string }, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/id-encryption/decryptId`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}

const idEncryptionApi = new IdEncryptionApi();

export default idEncryptionApi;
