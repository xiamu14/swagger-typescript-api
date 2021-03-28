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

import { MnpSettingsDto, SetSettingRequestDto, SettingDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class SettingsApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Settings
   * @name SettingsControllerList
   * @summary 设置列表
   * @request GET:/settings
   * @secure
   */
  settingsControllerList = (params: RequestParams = {}) =>
    this.request<SettingDto[], any>({
      path: `/settings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Settings
   * @name SettingsControllerSet
   * @summary 修改设置
   * @request PUT:/settings/{key}
   * @secure
   */
  settingsControllerSet = (key: string, data: SetSettingRequestDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/settings/${key}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Settings
   * @name SettingsControllerGet
   * @summary 获取单个设置
   * @request GET:/settings/{key}
   * @secure
   */
  settingsControllerGet = (key: string, params: RequestParams = {}) =>
    this.request<SettingDto, any>({
      path: `/settings/${key}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Settings
   * @name SettingsControllerGetMnpSettings
   * @summary 小程序端设置项
   * @request GET:/settings/mnp
   */
  settingsControllerGetMnpSettings = (params: RequestParams = {}) =>
    this.request<MnpSettingsDto, any>({
      path: `/settings/mnp`,
      method: "GET",
      format: "json",
      ...params,
    });
}

const settingsApi = new SettingsApi();

export default settingsApi;
