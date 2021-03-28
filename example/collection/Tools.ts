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

import { UploadRequestDto, UploadResponseDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class ToolsApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Upload
   * @name UploadControllerUpload
   * @summary 文件上传
   * @request POST:/tools/upload
   * @secure
   */
  uploadControllerUpload = (data: UploadRequestDto, params: RequestParams = {}) =>
    this.request<UploadResponseDto, any>({
      path: `/tools/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}

const toolsApi = new ToolsApi();

export default toolsApi;
