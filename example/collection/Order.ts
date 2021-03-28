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
  CreateOrderRequestDto,
  CreateOrderResponseDto,
  OrderDto,
  OrderListResponseDto,
  OrderLogisticDto,
  TradingPathDto,
  UpdateOrderRequestDto,
  UpdateOrderStatusRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class OrderApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerMockComplete
   * @summary 模拟完成订单
   * @request POST:/order/mock/complete/{id}
   * @secure
   */
  orderControllerMockComplete = (id: string, params: RequestParams = {}) =>
    this.request<boolean, any>({
      path: `/order/mock/complete/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerCreteOrder
   * @summary 创建订单
   * @request POST:/order
   * @secure
   */
  orderControllerCreteOrder = (data: CreateOrderRequestDto, params: RequestParams = {}) =>
    this.request<CreateOrderResponseDto, any>({
      path: `/order`,
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
   * @tags Order
   * @name OrderControllerGetSellingOrders
   * @summary 我卖的订单列表
   * @request GET:/order/selling
   * @secure
   */
  orderControllerGetSellingOrders = (
    query?: {
      before?: string;
      count?: number;
      withTotal?: boolean;
      buyerId?: string;
      statusType?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrderListResponseDto, any>({
      path: `/order/selling`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetBuyingOrders
   * @summary 我买的订单列表
   * @request GET:/order/buying
   * @secure
   */
  orderControllerGetBuyingOrders = (
    query?: { before?: string; count?: number; withTotal?: boolean; statusType?: string },
    params: RequestParams = {},
  ) =>
    this.request<OrderListResponseDto, any>({
      path: `/order/buying`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetSellingOrderDetail
   * @summary 获取卖的订单详情
   * @request GET:/order/selling/{id}
   * @secure
   */
  orderControllerGetSellingOrderDetail = (id: string, params: RequestParams = {}) =>
    this.request<OrderDto, any>({
      path: `/order/selling/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetBuyingOrderDetail
   * @summary 获取买的订单详情
   * @request GET:/order/buying/{id}
   * @secure
   */
  orderControllerGetBuyingOrderDetail = (id: string, params: RequestParams = {}) =>
    this.request<OrderDto, any>({
      path: `/order/buying/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerShipping
   * @summary 发货
   * @request PUT:/order/{id}/shipping
   * @secure
   */
  orderControllerShipping = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/order/${id}/shipping`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetLogisticTrace
   * @summary 查看物流
   * @request GET:/order/{id}/logistic
   * @secure
   */
  orderControllerGetLogisticTrace = (
    id: string,
    query?: { expressNumber?: string },
    params: RequestParams = {},
  ) =>
    this.request<OrderLogisticDto[], any>({
      path: `/order/${id}/logistic`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerConfirmReceipt
   * @summary 确认收货
   * @request PUT:/order/{id}/receipt
   * @secure
   */
  orderControllerConfirmReceipt = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/order/${id}/receipt`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetTradingPath
   * @summary 成交路径
   * @request GET:/order/{id}/trading-path
   * @secure
   */
  orderControllerGetTradingPath = (id: string, params: RequestParams = {}) =>
    this.request<TradingPathDto, any>({
      path: `/order/${id}/trading-path`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerUpdateOrder
   * @summary 修改订单（备注、地址、快递单号）
   * @request PUT:/order/{id}
   * @secure
   */
  orderControllerUpdateOrder = (
    id: string,
    data: UpdateOrderRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/order/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerUpdateOrderStatus
   * @summary 修改订单状态
   * @request PUT:/order/{id}/status
   * @secure
   */
  orderControllerUpdateOrderStatus = (
    id: string,
    data: UpdateOrderStatusRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<OrderDto, any>({
      path: `/order/${id}/status`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}

const orderApi = new OrderApi();

export default orderApi;
