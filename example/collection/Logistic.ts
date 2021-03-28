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

class LogisticApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Logistic
   * @name LogisticControllerKdNiaoCallBack
   * @summary 快递鸟回调
   * @request POST:/logistic/e3dffb2e301c08bdcd00e86e1c2da9d6
   */
  logisticControllerKdNiaoCallBack = (params: RequestParams = {}) =>
    this.request<EmptyPayload, any>({
      path: `/logistic/e3dffb2e301c08bdcd00e86e1c2da9d6`,
      method: "POST",
      format: "json",
      ...params,
    });
}

const logisticApi = new LogisticApi();

export default logisticApi;
