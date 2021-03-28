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
  FollowerStatisticsDto,
  SellingOrderStatisticsDto,
  UserStatisticsDto,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

class StatisticsApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Statistics
   * @name StatisticsControllerUserStatistics
   * @summary 用户数据统计
   * @request GET:/statistics/user
   * @secure
   */
  statisticsControllerUserStatistics = (params: RequestParams = {}) =>
    this.request<UserStatisticsDto, any>({
      path: `/statistics/user`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistics
   * @name StatisticsControllerSellingOrderStatistics
   * @summary 我卖的订单统计
   * @request GET:/statistics/selling-order
   * @secure
   */
  statisticsControllerSellingOrderStatistics = (params: RequestParams = {}) =>
    this.request<SellingOrderStatisticsDto, any>({
      path: `/statistics/selling-order`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistics
   * @name StatisticsControllerFollowerStatistics
   * @summary 粉丝数据统计
   * @request GET:/statistics/follower/{id}
   * @secure
   */
  statisticsControllerFollowerStatistics = (id: string, params: RequestParams = {}) =>
    this.request<FollowerStatisticsDto, any>({
      path: `/statistics/follower/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}

const statisticsApi = new StatisticsApi();

export default statisticsApi;
