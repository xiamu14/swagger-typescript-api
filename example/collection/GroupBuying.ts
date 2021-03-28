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
  CalculatePriceRequestDto,
  CalculatePriceResponseDto,
  CreateGroupBuyingRequestDto,
  CreateGroupBuyingResponseDto,
  FindGroupBuyingActivityFeedsResponseDto,
  FindGroupBuyingResponseDto,
  FindGroupBuyingsResponseDto,
  FindGroupBuyingStatisticsResponseDto,
  FindMyGroupBuyingsResponseDto,
  FindViewersResponseDto,
  GroupBuyingPosterDto,
  GroupBuyingShareCardDto,
  UpdateGroupBuyingRequestDto,
  UpdateGroupBuyingStatusRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class GroupBuyingApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerFindMyGroupBuyings
   * @summary 获取自己的所有团购
   * @request GET:/group-buying
   * @secure
   */
  groupBuyingControllerFindMyGroupBuyings = (
    query: { before: string; count: number },
    params: RequestParams = {},
  ) =>
    this.request<FindMyGroupBuyingsResponseDto, any>({
      path: `/group-buying`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerCreateGroupBuying
   * @summary 新建团购
   * @request POST:/group-buying
   * @secure
   */
  groupBuyingControllerCreateGroupBuying = (
    data: CreateGroupBuyingRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateGroupBuyingResponseDto, any>({
      path: `/group-buying`,
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
   * @tags GroupBuying
   * @name GroupBuyingControllerFindGroupBuyings
   * @summary 获取某个用户的所有团购
   * @request GET:/group-buying/user/{userId}
   */
  groupBuyingControllerFindGroupBuyings = (
    userId: string,
    query: { before: string; count: number },
    params: RequestParams = {},
  ) =>
    this.request<FindGroupBuyingsResponseDto, any>({
      path: `/group-buying/user/${userId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerFindGroupBuying
   * @summary 获取团购
   * @request GET:/group-buying/{id}
   */
  groupBuyingControllerFindGroupBuying = (id: string, params: RequestParams = {}) =>
    this.request<FindGroupBuyingResponseDto, any>({
      path: `/group-buying/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerUpdateGroupBuying
   * @summary 更新团购
   * @request PUT:/group-buying/{id}
   * @secure
   */
  groupBuyingControllerUpdateGroupBuying = (
    id: string,
    data: UpdateGroupBuyingRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/group-buying/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerUpdateGroupBuyingStatus
   * @summary 更新团购状态
   * @request PUT:/group-buying/{id}/status
   * @secure
   */
  groupBuyingControllerUpdateGroupBuyingStatus = (
    id: string,
    data: UpdateGroupBuyingStatusRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/group-buying/${id}/status`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerFindGroupBuyingActivityFeeds
   * @summary 获取团购的跟团记录
   * @request GET:/group-buying/{id}/activity
   */
  groupBuyingControllerFindGroupBuyingActivityFeeds = (
    id: string,
    query: { before: string; count: number },
    params: RequestParams = {},
  ) =>
    this.request<FindGroupBuyingActivityFeedsResponseDto, any>({
      path: `/group-buying/${id}/activity`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerCalculatePrice
   * @summary 计算团购价格
   * @request POST:/group-buying/{id}/price
   */
  groupBuyingControllerCalculatePrice = (
    id: string,
    data: CalculatePriceRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<CalculatePriceResponseDto, any>({
      path: `/group-buying/${id}/price`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerFindGroupBuyingStats
   * @summary 团购统计
   * @request GET:/group-buying/{id}/statistics
   * @secure
   */
  groupBuyingControllerFindGroupBuyingStats = (id: string, params: RequestParams = {}) =>
    this.request<FindGroupBuyingStatisticsResponseDto, any>({
      path: `/group-buying/${id}/statistics`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerFindViewers
   * @summary 获取团购 viewers 列表
   * @request GET:/group-buying/{id}/viewers
   * @secure
   */
  groupBuyingControllerFindViewers = (
    id: string,
    query: { before: string; count: number },
    params: RequestParams = {},
  ) =>
    this.request<FindViewersResponseDto, any>({
      path: `/group-buying/${id}/viewers`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerGetSharePoster
   * @summary 获取团购分享海报
   * @request GET:/group-buying/{id}/poster
   * @secure
   */
  groupBuyingControllerGetSharePoster = (
    id: string,
    query: { sharePathId: string },
    params: RequestParams = {},
  ) =>
    this.request<GroupBuyingPosterDto, any>({
      path: `/group-buying/${id}/poster`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GroupBuying
   * @name GroupBuyingControllerGetShareCard
   * @summary 获取团购分享卡片
   * @request GET:/group-buying/{id}/share-card
   */
  groupBuyingControllerGetShareCard = (id: string, params: RequestParams = {}) =>
    this.request<GroupBuyingShareCardDto, any>({
      path: `/group-buying/${id}/share-card`,
      method: "GET",
      format: "json",
      ...params,
    });
}

const groupBuyingApi = new GroupBuyingApi();

export default groupBuyingApi;
