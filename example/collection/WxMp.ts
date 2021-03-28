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

class WxMpApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags WxMp
   * @name WxMpControllerCheckCallback
   * @summary 校验微信回调
   * @request GET:/wx-mp/u8sw0E5nff7EznIb3qSRulSHIWlUYp7T
   */
  wxMpControllerCheckCallback = (
    query: { signature: string; timestamp: string; nonce: string; echostr: string },
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/wx-mp/u8sw0E5nff7EznIb3qSRulSHIWlUYp7T`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags WxMp
   * @name WxMpControllerHandleCallback
   * @summary 处理微信回调
   * @request POST:/wx-mp/u8sw0E5nff7EznIb3qSRulSHIWlUYp7T
   */
  wxMpControllerHandleCallback = (
    query: { signature: string; timestamp: string; nonce: string; echostr: string },
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/wx-mp/u8sw0E5nff7EznIb3qSRulSHIWlUYp7T`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });
}

const wxMpApi = new WxMpApi();

export default wxMpApi;
