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
  FollowersResponseDto,
  FollowingsResponseDto,
  GetPhoneResponseDto,
  KeeperAuthResponseDto,
  UserAuthResponseDto,
  UserDto,
  UserFollowersResponseDto,
  UserRegisterRequestDto,
  UserRegisterRequestV2Dto,
  UserRegisterResponseDto,
  UserShareCardResponseDto,
  UserUpdateRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

class UserApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name UserControllerAuthKeeper
   * @summary 后台授权
   * @request GET:/user/auth/keeper
   */
  userControllerAuthKeeper = (query: { code: string }, params: RequestParams = {}) =>
    this.request<KeeperAuthResponseDto, any>({
      path: `/user/auth/keeper`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerAuth
   * @summary 授权
   * @request GET:/user/auth
   */
  userControllerAuth = (query: { code: string }, params: RequestParams = {}) =>
    this.request<UserAuthResponseDto, any>({
      path: `/user/auth`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerJwtEncode
   * @summary 测试环境生成登录 token
   * @request GET:/user/debug/jwtencode
   */
  userControllerJwtEncode = (
    query?: { userId?: string; wxId?: string },
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/user/debug/jwtencode`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerJwtDecode
   * @summary 测试环境解析登录 token
   * @request GET:/user/debug/jwtdecode
   */
  userControllerJwtDecode = (query: { token: string }, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/user/debug/jwtdecode`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerRegister
   * @summary 注册
   * @request POST:/user
   */
  userControllerRegister = (data: UserRegisterRequestDto, params: RequestParams = {}) =>
    this.request<UserRegisterResponseDto, any>({
      path: `/user`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerRegisterV2
   * @summary 注册 V2
   * @request POST:/user/v2
   */
  userControllerRegisterV2 = (data: UserRegisterRequestV2Dto, params: RequestParams = {}) =>
    this.request<UserRegisterResponseDto, any>({
      path: `/user/v2`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerUser
   * @summary 获取当前用户信息
   * @request GET:/user/info
   * @secure
   */
  userControllerUser = (params: RequestParams = {}) =>
    this.request<UserDto, any>({
      path: `/user/info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerUpdateUser
   * @summary 更新用户信息
   * @request PUT:/user/info
   * @secure
   */
  userControllerUpdateUser = (data: UserUpdateRequestDto, params: RequestParams = {}) =>
    this.request<UserDto, any>({
      path: `/user/info`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetUserInfo
   * @summary 获取指定用户信息
   * @request GET:/user/info/{id}
   */
  userControllerGetUserInfo = (id: string, params: RequestParams = {}) =>
    this.request<UserDto, any>({
      path: `/user/info/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerDeleteFeature
   * @summary 删除 feature
   * @request DELETE:/user/feature/{name}
   * @secure
   */
  userControllerDeleteFeature = (name: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/feature/${name}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetPhoneNumber
   * @summary 获取微信绑定手机号
   * @request GET:/user/phone
   * @secure
   */
  userControllerGetPhoneNumber = (
    query: { wxOpenId: string; encryptedData: string; iv: string },
    params: RequestParams = {},
  ) =>
    this.request<GetPhoneResponseDto, any>({
      path: `/user/phone`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerMock
   * @summary 创建模拟用户
   * @request POST:/user/debug/mock
   */
  userControllerMock = (params: RequestParams = {}) =>
    this.request<UserRegisterResponseDto, any>({
      path: `/user/debug/mock`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetShareCard
   * @summary 分享用户个人主页
   * @request GET:/user/{id}/share-card
   */
  userControllerGetShareCard = (
    id: string,
    query?: { sharerId?: string },
    params: RequestParams = {},
  ) =>
    this.request<UserShareCardResponseDto, any>({
      path: `/user/${id}/share-card`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name FollowerControllerGetFollowers
   * @summary 粉丝列表
   * @request GET:/user/followers
   * @secure
   */
  followerControllerGetFollowers = (
    query?: { before?: string; count?: number; withTotal?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<FollowersResponseDto, any>({
      path: `/user/followers`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name FollowerControllerGetFollowings
   * @summary 关注列表
   * @request GET:/user/followings
   * @secure
   */
  followerControllerGetFollowings = (
    query?: { before?: string; count?: number; withTotal?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<FollowingsResponseDto, any>({
      path: `/user/followings`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name FollowerControllerFollow
   * @summary 关注
   * @request POST:/user/followings/{userId}
   * @secure
   */
  followerControllerFollow = (userId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/followings/${userId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name FollowerControllerCancelFollowing
   * @summary 取消关注
   * @request DELETE:/user/followings/{userId}
   * @secure
   */
  followerControllerCancelFollowing = (userId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/followings/${userId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name FollowerControllerGetUserFollowers
   * @summary 用户的觉得很赞的头像列表
   * @request GET:/user/{id}/followers
   */
  followerControllerGetUserFollowers = (id: string, params: RequestParams = {}) =>
    this.request<UserFollowersResponseDto, any>({
      path: `/user/${id}/followers`,
      method: "GET",
      format: "json",
      ...params,
    });
}

const userApi = new UserApi();

export default userApi;
