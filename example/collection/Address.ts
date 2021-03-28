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
  PickUpAddressCreateRequestDto,
  PickUpAddressDto,
  PickUpAddressListDto,
  PickUpAddressListPostDto,
  PickUpAddressListPostResponseDto,
  PickUpAddressUpdateRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class AddressApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Address
   * @name AddressControllerGetAddresses
   * @summary 获取自提点列表
   * @request GET:/address/pick-up/list
   * @secure
   */
  addressControllerGetAddresses = (params: RequestParams = {}) =>
    this.request<PickUpAddressListDto, any>({
      path: `/address/pick-up/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name AddressControllerGetAddressesByIds
   * @summary 根据 ids 获取自提点列表
   * @request POST:/address/pick-up/list
   * @secure
   */
  addressControllerGetAddressesByIds = (
    data: PickUpAddressListPostDto,
    params: RequestParams = {},
  ) =>
    this.request<PickUpAddressListPostResponseDto, any>({
      path: `/address/pick-up/list`,
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
   * @tags Address
   * @name AddressControllerCreateAddress
   * @summary 创建自提点
   * @request POST:/address/pick-up
   * @secure
   */
  addressControllerCreateAddress = (
    data: PickUpAddressCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<PickUpAddressDto, any>({
      path: `/address/pick-up`,
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
   * @tags Address
   * @name AddressControllerUpdateAddress
   * @summary 修改自提点
   * @request PUT:/address/pick-up/{id}
   * @secure
   */
  addressControllerUpdateAddress = (
    id: string,
    data: PickUpAddressUpdateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/address/pick-up/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name AddressControllerDeleteAddress
   * @summary 删除自提点
   * @request DELETE:/address/pick-up/{id}
   * @secure
   */
  addressControllerDeleteAddress = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/address/pick-up/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}

const addressApi = new AddressApi();

export default addressApi;
