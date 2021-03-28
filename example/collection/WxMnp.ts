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

import { SceneDecodeResponseDto, WxCallbackDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class WxMnpApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags WxMnp
   * @name WxMnpControllerCheckWxCallback
   * @summary 校验微信回调
   * @request GET:/wx-mnp/9787ed54c8fa672ad9dce76bd2b66407
   */
  wxMnpControllerCheckWxCallback = (
    query: { timestamp: string; nonce: string; signature: string; echostr: string },
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/wx-mnp/9787ed54c8fa672ad9dce76bd2b66407`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags WxMnp
   * @name WxMnpControllerWxCallback
   * @summary 处理微信回调
   * @request POST:/wx-mnp/9787ed54c8fa672ad9dce76bd2b66407
   */
  wxMnpControllerWxCallback = (
    query: { timestamp: string; nonce: string; signature: string; echostr: string },
    data: WxCallbackDto,
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/wx-mnp/9787ed54c8fa672ad9dce76bd2b66407`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags WxMnp
   * @name WxMnpControllerDecodePosterScene
   * @summary 小程序码场景值解码
   * @request GET:/wx-mnp/scene-decode/poster
   */
  wxMnpControllerDecodePosterScene = (query: { scene: string }, params: RequestParams = {}) =>
    this.request<SceneDecodeResponseDto, any>({
      path: `/wx-mnp/scene-decode/poster`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags WxMnp
   * @name WxMnpControllerValidateNormalQrCodeAlpha
   * @summary 普通二维码打开小程序的校验文件 Alpha
   * @request GET:/wx-mnp/TmIlhdaGXj.txt
   */
  wxMnpControllerValidateNormalQrCodeAlpha = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/wx-mnp/TmIlhdaGXj.txt`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags WxMnp
   * @name WxMnpControllerValidateNormalQrCodeProd
   * @summary 普通二维码打开小程序的校验文件 Prod
   * @request GET:/wx-mnp/4ewShMz4Zp.txt
   */
  wxMnpControllerValidateNormalQrCodeProd = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/wx-mnp/4ewShMz4Zp.txt`,
      method: "GET",
      ...params,
    });
}

const wxMnpApi = new WxMnpApi();

export default wxMnpApi;
