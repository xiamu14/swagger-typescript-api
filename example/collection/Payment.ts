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
  CreateBankWithdrawalDto,
  CreateEcommerceApplyDto,
  CreatePaymentDto,
  CreatePaymentResultDto,
  CreateWithdrawalDto,
  EcommerceStatusResponseDto,
  GetBillsDto,
  GetWalletDto,
  ModifySettlementRequestDto,
  WithdrawalDetailDto,
  WithdrawalStatusDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class PaymentApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerCreatePayment
   * @summary 订单支付
   * @request POST:/payment/order/{id}
   * @secure
   */
  paymentControllerCreatePayment = (
    id: string,
    data: CreatePaymentDto,
    params: RequestParams = {},
  ) =>
    this.request<CreatePaymentResultDto, any>({
      path: `/payment/order/${id}`,
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
   * @tags Payment
   * @name PaymentControllerGetWallet
   * @summary 获取钱包
   * @request GET:/payment/wallet
   * @secure
   */
  paymentControllerGetWallet = (params: RequestParams = {}) =>
    this.request<GetWalletDto, any>({
      path: `/payment/wallet`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerOnWxOrderPaymentCallback
   * @request POST:/payment/callback/wx/order/normal
   */
  paymentControllerOnWxOrderPaymentCallback = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/payment/callback/wx/order/normal`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerOnWxOrderPlatformPaymentCallback
   * @request POST:/payment/callback/wx/order/platform
   */
  paymentControllerOnWxOrderPlatformPaymentCallback = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/payment/callback/wx/order/platform`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerOnWxOrderPlatformPaymentProfitOrders
   * @request POST:/payment/callback/wx/order/profit-orders
   */
  paymentControllerOnWxOrderPlatformPaymentProfitOrders = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/payment/callback/wx/order/profit-orders`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerOnWxNormalRefundCallback
   * @request POST:/payment/callback/wx/refund/normal
   */
  paymentControllerOnWxNormalRefundCallback = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/payment/callback/wx/refund/normal`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerOnWxPlatformRefundCallback
   * @request POST:/payment/callback/wx/refund/platform
   */
  paymentControllerOnWxPlatformRefundCallback = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/payment/callback/wx/refund/platform`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerGetBills
   * @summary 账单明细
   * @request GET:/payment/bills
   * @secure
   */
  paymentControllerGetBills = (
    query?: { type?: string; before?: string; count?: number },
    params: RequestParams = {},
  ) =>
    this.request<GetBillsDto, any>({
      path: `/payment/bills`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerCreateWithdrawal
   * @summary 提现
   * @request POST:/payment/withdrawal
   * @secure
   */
  paymentControllerCreateWithdrawal = (data: CreateWithdrawalDto, params: RequestParams = {}) =>
    this.request<WithdrawalDetailDto, any>({
      path: `/payment/withdrawal`,
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
   * @tags Payment
   * @name PaymentControllerGetWithdrawalStatus
   * @summary 获取提现信息
   * @request GET:/payment/withdrawal/status
   * @secure
   */
  paymentControllerGetWithdrawalStatus = (params: RequestParams = {}) =>
    this.request<WithdrawalStatusDto, any>({
      path: `/payment/withdrawal/status`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerGetWithdrawalDetail
   * @summary 获取提现详情
   * @request GET:/payment/withdrawal/{id}
   * @secure
   */
  paymentControllerGetWithdrawalDetail = (id: string, params: RequestParams = {}) =>
    this.request<WithdrawalDetailDto, any>({
      path: `/payment/withdrawal/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerEcommerceApply
   * @summary 二级商户签约
   * @request POST:/payment/ecommerce
   * @secure
   */
  paymentControllerEcommerceApply = (data: CreateEcommerceApplyDto, params: RequestParams = {}) =>
    this.request<boolean, any>({
      path: `/payment/ecommerce`,
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
   * @tags Payment
   * @name PaymentControllerEcommerceStatus
   * @summary 获取二级商户状态/余额
   * @request GET:/payment/ecommerce
   * @secure
   */
  paymentControllerEcommerceStatus = (params: RequestParams = {}) =>
    this.request<EcommerceStatusResponseDto, any>({
      path: `/payment/ecommerce`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerEcommerceConfirm
   * @summary 确认二级商户
   * @request GET:/payment/ecommerce/status
   * @secure
   */
  paymentControllerEcommerceConfirm = (params: RequestParams = {}) =>
    this.request<boolean, any>({
      path: `/payment/ecommerce/status`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerModifySettlement
   * @summary 更新结算账户
   * @request POST:/payment/bank/account
   * @secure
   */
  paymentControllerModifySettlement = (
    data: ModifySettlementRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<boolean, any>({
      path: `/payment/bank/account`,
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
   * @tags Payment
   * @name PaymentControllerBankWithdrawal
   * @summary 提现商户号余额
   * @request POST:/payment/bank/withdrawal
   * @secure
   */
  paymentControllerBankWithdrawal = (data: CreateBankWithdrawalDto, params: RequestParams = {}) =>
    this.request<WithdrawalDetailDto, any>({
      path: `/payment/bank/withdrawal`,
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
   * @tags Payment
   * @name PaymentControllerTest
   * @summary 测试接口
   * @request GET:/payment/test
   */
  paymentControllerTest = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/payment/test`,
      method: "GET",
      ...params,
    });
}

const paymentApi = new PaymentApi();

export default paymentApi;
