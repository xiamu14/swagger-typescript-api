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

import {
  CreateSharePathRequestDto,
  CreateSharePathResponseDto,
  FindSharePathResponseDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class ViewerApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SharePath
   * @name SharePathControllerCreateSharePath
   * @summary 创建分享链
   * @request POST:/viewer/share-path
   * @secure
   */
  sharePathControllerCreateSharePath = (
    data: CreateSharePathRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateSharePathResponseDto, any>({
      path: `/viewer/share-path`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SharePath
   * @name SharePathControllerFindSharePath
   * @summary 获取分享链
   * @request GET:/viewer/share-path/{id}
   */
  sharePathControllerFindSharePath = (id: string, params: RequestParams = {}) =>
    this.request<FindSharePathResponseDto, any>({
      path: `/viewer/share-path/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}

const viewerApi = new ViewerApi();

export default viewerApi;
