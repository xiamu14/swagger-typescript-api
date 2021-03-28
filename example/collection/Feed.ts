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

import { FindFeedsResponseDto } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

class FeedApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Feed
   * @name FeedControllerFindMyFeeds
   * @summary 获取首页列表
   * @request GET:/feed
   * @secure
   */
  feedControllerFindMyFeeds = (
    query: { before: string; count: number },
    params: RequestParams = {},
  ) =>
    this.request<FindFeedsResponseDto, any>({
      path: `/feed`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Feed
   * @name FeedControllerFindPublicFeeds
   * @summary 获取未授权用户的首页列表
   * @request GET:/feed/public
   */
  feedControllerFindPublicFeeds = (
    query: { before: string; count: number },
    params: RequestParams = {},
  ) =>
    this.request<FindFeedsResponseDto, any>({
      path: `/feed/public`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}

const feedApi = new FeedApi();

export default feedApi;
