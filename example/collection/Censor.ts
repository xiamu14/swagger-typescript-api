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

import { CensorImageRequestDto, CensorImageResponseDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class CensorApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Censor
   * @name CensorControllerCensorImage
   * @summary 审核图片
   * @request POST:/censor/image
   * @secure
   */
  censorControllerCensorImage = (data: CensorImageRequestDto, params: RequestParams = {}) =>
    this.request<CensorImageResponseDto, any>({
      path: `/censor/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}

const censorApi = new CensorApi();

export default censorApi;
