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
  DeleteUserDto,
  GetGroupBuyingListDto,
  GetGroupBuyingQueryDto,
  GetOrderListDto,
  GetOrderQueryDto,
  GetPaymentBillListDto,
  GetPaymentBillQueryDto,
  GetPaymentWalletQueryDto,
  GetUserListDto,
  GetUserQueryDto,
  GetWithdrawalListDto,
  KeeperCreateRequestDto,
  OrderDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class KeeperApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags KeeperKeeper
   * @name KeeperKeeperControllerCreateKeeper
   * @summary 添加或更新管理员
   * @request POST:/keeper/keeper
   * @secure
   */
  keeperKeeperControllerCreateKeeper = (data: KeeperCreateRequestDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/keeper/keeper`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags KeeperKeeper
   * @name KeeperKeeperControllerDeleteKeeper
   * @summary 删除管理员
   * @request DELETE:/keeper/keeper/{wxId}
   * @secure
   */
  keeperKeeperControllerDeleteKeeper = (wxId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/keeper/keeper/${wxId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags KeeperGroupBuying
   * @name KeeperGroupBuyingControllerGroupBuyings
   * @summary 获取活动列表
   * @request POST:/keeper/group-buying
   * @secure
   */
  keeperGroupBuyingControllerGroupBuyings = (
    data: GetGroupBuyingQueryDto,
    params: RequestParams = {},
  ) =>
    this.request<GetGroupBuyingListDto, any>({
      path: `/keeper/group-buying`,
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
   * @tags KeeperUser
   * @name KeeperUserControllerUsers
   * @summary 获取用户列表
   * @request POST:/keeper/user
   * @secure
   */
  keeperUserControllerUsers = (data: GetUserQueryDto, params: RequestParams = {}) =>
    this.request<GetUserListDto, any>({
      path: `/keeper/user`,
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
   * @tags KeeperUser
   * @name KeeperUserControllerDeleteUser
   * @summary 删除用户
   * @request DELETE:/keeper/user
   * @secure
   */
  keeperUserControllerDeleteUser = (data: DeleteUserDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/keeper/user`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags KeeperOrder
   * @name KeeperOrderControllerOrders
   * @summary 获取订单列表
   * @request POST:/keeper/order
   * @secure
   */
  keeperOrderControllerOrders = (data: GetOrderQueryDto, params: RequestParams = {}) =>
    this.request<GetOrderListDto, any>({
      path: `/keeper/order`,
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
   * @tags KeeperOrder
   * @name KeeperOrderControllerOrderDetail
   * @summary 获取订单详情
   * @request GET:/keeper/order/{id}
   * @secure
   */
  keeperOrderControllerOrderDetail = (id: string, params: RequestParams = {}) =>
    this.request<OrderDto, any>({
      path: `/keeper/order/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KeeperPayment
   * @name KeeperPaymentControllerWithdrawal
   * @summary 获取提现列表
   * @request POST:/keeper/payment/wallet
   * @secure
   */
  keeperPaymentControllerWithdrawal = (
    data: GetPaymentWalletQueryDto,
    params: RequestParams = {},
  ) =>
    this.request<GetWithdrawalListDto, any>({
      path: `/keeper/payment/wallet`,
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
   * @tags KeeperPayment
   * @name KeeperPaymentControllerBill
   * @summary 账单流水
   * @request POST:/keeper/payment/wallet/bill
   * @secure
   */
  keeperPaymentControllerBill = (data: GetPaymentBillQueryDto, params: RequestParams = {}) =>
    this.request<GetPaymentBillListDto, any>({
      path: `/keeper/payment/wallet/bill`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}

const keeperApi = new KeeperApi();

export default keeperApi;
