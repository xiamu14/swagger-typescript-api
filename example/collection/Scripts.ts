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

import { EmptyPayload } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

class ScriptsApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerSyncSubscribeStatus
   * @summary 同步关注状态和是否发布过团购状态
   * @request GET:/scripts/syncSubscribeStatus
   * @secure
   */
  appControllerSyncSubscribeStatus = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/scripts/syncSubscribeStatus`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name AppControllerGetStatistics
   * @summary 数据统计
   * @request GET:/scripts/statistics
   * @secure
   */
  appControllerGetStatistics = (params: RequestParams = {}) =>
    this.request<EmptyPayload, any>({
      path: `/scripts/statistics`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name AppControllerClearAllUserCache
   * @summary 清除所有用户缓存
   * @request POST:/scripts/clear-user-cache
   * @secure
   */
  appControllerClearAllUserCache = (params: RequestParams = {}) =>
    this.request<EmptyPayload, any>({
      path: `/scripts/clear-user-cache`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name AppControllerGetMaterials
   * @summary 获取媒体 ID
   * @request GET:/scripts/get-materials/{type}
   * @secure
   */
  appControllerGetMaterials = (type: string, params: RequestParams = {}) =>
    this.request<EmptyPayload, any>({
      path: `/scripts/get-materials/${type}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name AppControllerUpdateMenu
   * @summary 更新公号菜单
   * @request GET:/scripts/dhHM1E273iIA2oVsl7ITRZhc8RW5PnrF
   * @secure
   */
  appControllerUpdateMenu = (params: RequestParams = {}) =>
    this.request<EmptyPayload, any>({
      path: `/scripts/dhHM1E273iIA2oVsl7ITRZhc8RW5PnrF`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}

const scriptsApi = new ScriptsApi();

export default scriptsApi;
