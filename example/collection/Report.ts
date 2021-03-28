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

import { ShareGroupBuyingDto, ViewGroupBuyingDto, ViewHomeDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class ReportApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Report
   * @name ReportControllerOnViewGroupBuying
   * @summary 浏览团购
   * @request POST:/report/view-group-buying
   * @secure
   */
  reportControllerOnViewGroupBuying = (data: ViewGroupBuyingDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/report/view-group-buying`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportControllerOnShareGroupBuying
   * @summary 分享团购
   * @request POST:/report/share-group-buying
   * @secure
   */
  reportControllerOnShareGroupBuying = (data: ShareGroupBuyingDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/report/share-group-buying`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportControllerOnViewHome
   * @summary 浏览个人主页
   * @request POST:/report/view-home
   * @secure
   */
  reportControllerOnViewHome = (data: ViewHomeDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/report/view-home`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}

const reportApi = new ReportApi();

export default reportApi;
