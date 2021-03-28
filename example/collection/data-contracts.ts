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

export interface CensorImageRequestDto {
  url: string;
}

export interface CensorImageResponseDto {
  isPassed: boolean;
}

export interface FileRequest {
  name: string;
  protocol: string;
}

export interface UploadRequestDto {
  files: FileRequest[];
}

export interface FileResponse {
  name: string;
  uri: string;
  url: string;
}

export interface Body {
  policy: string;
  signature: string;
  accessKey: string;
  key: string;
}

export interface Request {
  uri: string;
  method: string;
  body: Body;
}

export interface UploadResponse {
  file: FileResponse;
  request: Request;
}

export interface UploadResponseDto {
  data: UploadResponse[];
}

export interface OrderSkuItems {
  id: string;

  /** @min 1 */
  quantity: number;
}

export interface CreateOrderRequestDto {
  groupBuyingId: string;
  sharePathId?: string;
  skus: OrderSkuItems[];
}

export interface OrderSkuStockItems {
  id: string;
  remainQuantity: number;
}

export interface OrderAddress {
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detailAddress: string;
}

export interface CreateOrderResponseDto {
  orderId: string;
  understockSkus: OrderSkuStockItems[];
  address?: OrderAddress;
}

export interface Participant {
  id: string;
  name: string;
  avatar: string;
  phone?: string;
}

export interface OrderAddressDto {
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detailAddress: string;
}

export interface OrderPickUpAddressDto {
  addressName: string;
  location: string;
  name: string;
  phone: string;
}

export interface Sku {
  id: string;
  specificationName: string;
  quantity: number;
  cancelQuantity: number;
  price: number;
  thumbnail?: string;
}

export interface Goods {
  id: string;
  thumbnails: string[];
  name: string;
  sku: Sku;
}

export interface OrderDto {
  id: string;
  status: string;
  refundStatus: string;
  cancelStatus: string;
  groupBuyingId: string;
  groupBuyingName?: string;
  orderNumber: string;
  participant: Participant;
  expressType?: string;
  expressNumber?: string[];
  address?: OrderAddressDto;
  pickUpAddress?: OrderPickUpAddressDto;
  note?: string;
  goods: Goods[];
  quantity: number;
  price: number;
  refundNote?: string;
  refundAmount?: number;
  createdAt: number;
  operations: string[];
  shareBonus?: number;
}

export interface OrderListResponseDto {
  before: string;
  total: number;
  data: OrderDto[];
}

export interface Shipper {
  logo: string;
  telephone: string;
  name: string;
  expressNumber: string;
}

export interface OrderExpressTraceNode {
  description: string;
  time: string;
}

export interface OrderLogisticDto {
  status: string;
  shipper: Shipper;
  expressTraceList: OrderExpressTraceNode[];
}

export interface TradingParticipant {
  name: string;
  avatar: string;
  time: number;
  description: string;
}

export interface TradingPathDto {
  firstSharer?: TradingParticipant;
  buyer: TradingParticipant;
  sharers?: TradingParticipant[];
  sharerCount: number;
}

export interface OrderAddressRequestDto {
  name?: string;
  phone?: string;
  province?: string;
  city?: string;
  district?: string;
  detailAddress?: string;
}

export interface OrderPickUpAddressRequestDto {
  addressName: string;
  location: string;
  name: string;
  phone: string;
}

export interface UpdateOrderRequestDto {
  note?: string;
  expressNumber?: string[];
  address?: OrderAddressRequestDto;
  pickUpAddress?: OrderPickUpAddressRequestDto;
}

export interface ApplyRefundPayload {
  note?: string;
}

export interface RefundPayload {
  /** @min 0 */
  amount: number;
}

export interface ContinueRefundPayload {
  /** @min 0 */
  amount: number;
}

export type EmptyPayload = object;

export interface AgreeRefundPayload {
  /** @min 0 */
  amount: number;
}

export interface CancelOrderPayload {
  skus: OrderSkuItems[];
}

export interface SubmitExpressNumberPayload {
  expressNumber: string[];
}

export interface UpdateOrderStatusRequestDto {
  APPLY_REFUND?: ApplyRefundPayload;
  REFUND?: RefundPayload;
  CONTINUE_REFUND?: ContinueRefundPayload;
  REJECT_REFUND?: EmptyPayload;
  AGREE_REFUND?: AgreeRefundPayload;
  CONFIRM_PICK_UP?: EmptyPayload;
  CANCEL_ORDER?: CancelOrderPayload;
  SUBMIT_EXPRESS_NUMBER?: SubmitExpressNumberPayload;
}

export interface FindMyGroupBuyingsResponseGroupBuyingDto {
  id: string;
  name: string;
  status: string;
  thumbnails: string[];
  price: number;
  originalPrice?: number;
  isOnSale: boolean;
  viewCount: number;
  shareCount: number;
  totalIncome: number;
  shareBonus: number;
}

export interface FindMyGroupBuyingsResponseDto {
  groupBuyings: FindMyGroupBuyingsResponseGroupBuyingDto[];
  before?: string;
}

export interface GroupBuyingIntroductionPayload {
  content?: string;
  url?: string;
}

export interface GroupBuyingIntroduction {
  type: string;
  payload: GroupBuyingIntroductionPayload;
}

export interface CreateGroupBuyingRequestGoodSkuDto {
  specificationName?: string;

  /** @max 99999999999 */
  originalPrice?: number;

  /** @max 99999999999 */
  price: number;

  /** @max 99999999999 */
  shareBonus?: number;

  /** @max 1000000 */
  totalQuantity?: number;
  thumbnail?: string;
}

export interface CreateGroupBuyingRequestGoodDto {
  name: string;
  description?: string;
  thumbnails?: string[];
  skus: CreateGroupBuyingRequestGoodSkuDto[];
}

export interface CreateGroupBuyingRequestDto {
  name: string;
  expressType: string;
  pickUpAddressIds?: string[];
  isDraft?: boolean;
  introduction?: GroupBuyingIntroduction[];
  goods: CreateGroupBuyingRequestGoodDto[];
}

export interface CreateGroupBuyingResponseDto {
  id: string;
}

export interface FindGroupBuyingsResponseGroupBuyingDto {
  id: string;
  title: string;
  thumbnails: string[];
  recommenderAvatars: string[];
  shareBonus: number;
}

export interface FindGroupBuyingsResponseDto {
  groupBuyings: FindGroupBuyingsResponseGroupBuyingDto[];
  before?: string;
}

export interface FindGroupBuyingResponseGoodSkuDto {
  id: string;
  goodId: string;
  specificationName?: string;
  originalPrice?: number;
  price: number;
  shareBonus?: number;
  soldQuantity: number;
  totalQuantity: object;
  quantity: object;
  thumbnail?: string;
}

export interface FindGroupBuyingResponseGoodDto {
  originalPrice?: number[];
  price: number[];
  shareBonus?: number[];
  quantity: number[];
  soldQuantity: number[];
  totalQuantity: number[];
  id: string;
  name: string;
  description?: string;
  thumbnails?: string[];
  specificationNames?: string[];
  skus: FindGroupBuyingResponseGoodSkuDto[];
}

export interface FindGroupBuyingResponseSellerDto {
  id: string;
  name: string;
  avatar: string;
  city?: string;
  wechat?: string;
  phone?: string;
  background?: string;
  isRealNameVerified: boolean;
}

export interface FindGroupBuyingResponseDto {
  id: string;
  name: string;
  expressType: string;
  pickUpAddressIds?: string[];
  status: string;
  version: number;
  introduction?: GroupBuyingIntroduction[];
  goods: FindGroupBuyingResponseGoodDto[];
  seller: FindGroupBuyingResponseSellerDto;
}

export interface UpdateGroupBuyingRequestGoodSkuDto {
  id?: string;
  specificationName?: string;

  /** @max 99999999999 */
  originalPrice?: number;

  /** @max 99999999999 */
  price: number;

  /** @max 99999999999 */
  shareBonus?: number;

  /** @max 1000000 */
  totalQuantity?: number;
  thumbnail?: string;
}

export interface UpdateGroupBuyingRequestGoodDto {
  id?: string;
  name: string;
  description?: string;
  thumbnails?: string[];
  skus: UpdateGroupBuyingRequestGoodSkuDto[];
}

export interface UpdateGroupBuyingRequestDto {
  name: string;
  expressType: string;
  pickUpAddressIds?: string[];
  isDraft?: boolean;
  introduction?: GroupBuyingIntroduction[];
  goods: UpdateGroupBuyingRequestGoodDto[];
}

export interface UpdateGroupBuyingStatusRequestDto {
  status: string;
}

export interface FindGroupBuyingActivityFeedsResponseFeedOrderedGoodDto {
  name: string;
  quantity: number;
}

export interface FindGroupBuyingActivityFeedsResponseFeedDto {
  userAvatar: string;
  userName: string;
  type: string[];
  orderedGoods?: FindGroupBuyingActivityFeedsResponseFeedOrderedGoodDto[];

  /** @format date-time */
  createdAt: string;
}

export interface FindGroupBuyingActivityFeedsResponseDto {
  feeds: FindGroupBuyingActivityFeedsResponseFeedDto[];
  before?: string;
  total: number;
}

export interface CalculatePriceRequestDto {
  skus: OrderSkuItems[];
}

export interface CalculatePriceResponseDto {
  price: number;
  originalPrice: number;
  version: number;
  understockSkus: OrderSkuStockItems[];
}

export interface FindGroupBuyingStatisticsResponseDto {
  sales: number;
  shareBonus: number;
  serviceCharge: number;
  serviceChargePercentage: number;
  viewCount: number;
  shareCount: number;
  orderCount: number;
}

export interface FindViewersResponseViewerDto {
  id: string;
  name: string;
  avatar: string;
  viewCount: number;
  shareCount: number;
  referCount: number;
  isBuyer: boolean;
}

export interface FindViewersResponseDto {
  viewers: FindViewersResponseViewerDto[];
  before?: string;
}

export interface GroupBuyingPosterSharerDto {
  avatar: string;
  comment: string;
  qrCodeBase64: string;
}

export interface GroupBuyingSellerDto {
  avatar: string;
  name: string;
}

export interface GroupBuyingInfoDto {
  name: string;
  image: string;
  originalPrice?: number;
  price: number;
  buyerAvatarsBase64: string;
  buyerCount: number;
}

export interface GroupBuyingPosterDto {
  sharer: GroupBuyingPosterSharerDto;
  seller: GroupBuyingSellerDto;
  groupBuying: GroupBuyingInfoDto;
}

export interface ShareCardGroupBuyingInfoDto {
  images: string[];
  upAvatars: string[];
  upCount: number;
}

export interface GroupBuyingShareCardDto {
  title: string;
  groupBuying: ShareCardGroupBuyingInfoDto;
}

export interface FindFeedsResponseFeedUserDto {
  id: string;
  name: string;
  avatar: string;
}

export interface FindFeedsResponseFeedDto {
  type: string;
  id: string;
  user: FindFeedsResponseFeedUserDto;
  title: string;
  thumbnails: string[];
  price: number;
  originalPrice?: number;
  isOnSale: boolean;
  popularity: number;

  /** @format date-time */
  createdAt: string;
  recommenderAvatars: string[];
  recommenderCount: number;
  shareBonus: number;
}

export interface FindFeedsResponseDto {
  feeds: FindFeedsResponseFeedDto[];
  before?: string;
}

export interface KeeperAuthResponseDto {
  token: string;
}

export interface UserAuthResponseDto {
  wxOpenId: string;
  token?: string;
}

export interface UserRegisterRequestDto {
  encryptedData: string;
  iv: string;
  wxOpenId: string;
}

export interface UserDto {
  id: string;
  wxOpenId: string;
  name: string;
  avatar: string;
  wechat?: string;
  phone?: string;
  city?: string;
  address?: string;
  isRealNameVerified?: boolean;
  isSubscribedMp: boolean;
  isPublishedGroupBuying: boolean;
}

export interface UserRegisterResponseDto {
  user: UserDto;
  token: string;
}

export interface UserProfile {
  nickName: string;
  avatarUrl: string;
  gender: string;
  country: string;
  province: string;
  city: string;
}

export interface UserRegisterRequestV2Dto {
  userProfile: UserProfile;
  wxOpenId: string;
}

export interface GroupBuyingSignDto {
  image: string;
  sellerName: string;
  sellerAvatar: string;
  groupBuyingName: string;
  groupBuyingId: string;
  previewGroupBuyingId?: string;
}

export interface UserUpdateRequestDto {
  name?: string;
  avatar?: string;
  wechat?: string;
  phone?: string;
  wxPhone?: string;
  address?: string;
  groupBuyingSign?: GroupBuyingSignDto;
}

export interface GetPhoneResponseDto {
  phone: string;
}

export interface UserShareCardSellerDto {
  avatar: string;
  name: string;
  upAvatars: string[];
  upCount: number;
}

export interface UserShareCardResponseDto {
  title: string;
  background: string;
  seller: UserShareCardSellerDto;
}

export interface Follower {
  id: string;
  name: string;
  avatar: string;
  viewCount: number;
  shareCount: number;
  orderCount: number;
  referCount: number;
}

export interface FollowersResponseDto {
  before: string;
  total: number;
  data: Follower[];
}

export interface Following {
  id: string;
  name: string;
  avatar: string;
  followerCount: number;
  goodsCount: number;
}

export interface FollowingsResponseDto {
  before: string;
  total: number;
  data: Following[];
}

export interface UserFollower {
  avatar: string;
}

export interface UserFollowersResponseDto {
  before: string;
  total: number;
  data: UserFollower[];
}

export interface PickUpAddressWithSelectDto {
  id: string;
  addressName: string;
  location: string;
  name: string;
  phone: string;
  selected: boolean;
}

export interface PickUpAddressListDto {
  total: number;
  addresses: PickUpAddressWithSelectDto[];
}

export interface PickUpAddressListPostDto {
  ids: string[];
}

export interface PickUpAddressDto {
  id: string;
  addressName: string;
  location: string;
  name: string;
  phone: string;
}

export interface PickUpAddressListPostResponseDto {
  addresses: PickUpAddressDto[];
}

export interface PickUpAddressCreateRequestDto {
  addressName: string;
  location: string;
  name: string;
  phone: string;
}

export interface PickUpAddressUpdateRequestDto {
  addressName: string;
  location: string;
  name: string;
  phone: string;
}

export interface UserStatisticsDto {
  orderCount: number;
  followerCount: number;
  balance: number;
  groupBuyingCount: number;
}

export interface SellingOrderStatisticsDto {
  orderCount: number;
  income: number;
}

export interface FollowerStatisticsDto {
  viewCount: number;
  buyCount: number;
  paymentAmount: number;
}

export interface OrderPickUpAddress {
  addressName: string;
  location: string;
  name: string;
  phone: string;
}

export interface CreatePaymentDto {
  skus?: OrderSkuItems[];
  address?: OrderAddress;
  pickUpAddress?: OrderPickUpAddress;
  note?: string;
}

export interface WxPaymentCreateResult {
  appId: string;
  timeStamp: string;
  nonceStr: string;
  package: string;
  signType: string;
  paySign: string;
}

export interface CreatePaymentResultDto {
  type: string;
  understockSkus?: OrderSkuStockItems[];
  paymentPackage?: WxPaymentCreateResult;
}

export interface GetWalletDto {
  userId: string;
  balance: number;
  freeze: number;
  totalIncome: number;
  totalOutgo: number;
  totalPlatformIncome: number;
  totalPlatformOutgo: number;
}

export interface BillDto {
  type: string;
  amount: number;
  description: string;
  timestamp: number;
  sourceId: string;
  category: string;
  paymentType: string;
}

export interface GetBillsDto {
  before: string;
  data: BillDto[];
}

export interface CreateWithdrawalDto {
  /**
   * @min 100
   * @max 200000
   */
  amount: number;
  name: string;
}

export interface StageItem {
  text: string;
  icon?: string;
  status: string[];
}

export interface WithdrawalDetailDto {
  id: string;
  amount: number;
  name: string;
  status: string;
  stage: StageItem[];
}

export interface WithdrawalStatusDto {
  wxPhone: string;
  name: string;
  limit: number;
  limitCount: number;
}

export interface IdCardInfo {
  idCardCopy: string;
  idCardNational: string;
  idCardName: string;
  idCardNumber: string;
  idCardValidTime: string;
}

export interface CreateEcommerceApplyDto {
  mobilePhone: string;
  email: string;
  merchantShortname: string;
  idCardInfo: IdCardInfo;
}

export interface BandInfo {
  accountBank: string;
  accountNumber: string;
}

export interface EcommerceStatusResponseDto {
  status: string;
  account: { availableAmount: number; pendingAmount: number };
  signUrl: string;
  appId: string;
  failReason: string;
  mobilePhone: string;
  email: string;
  merchantShortname: string;
  needConfirm: boolean;
  isUpdateBandInfo: boolean;
  idCardInfo: IdCardInfo;
  bankInfo: BandInfo;
}

export interface ModifySettlementRequestDto {
  accountBank: string;
  accountNumber: string;
  bankAddressCode: string;
  bankName?: string;
}

export interface CreateBankWithdrawalDto {
  /** @min 1 */
  amount: number;
}

export interface ViewGroupBuyingDto {
  groupBuyingId: string;
  groupBuyingUserId: string;
  sharePathId?: string;
}

export interface ShareGroupBuyingDto {
  groupBuyingId: string;
  groupBuyingUserId: string;
}

export interface ViewHomeDto {
  ownerId: string;
}

export interface CreateSharePathRequestDto {
  originSharePathId?: string;
  groupBuyingId: string;
}

export interface CreateSharePathResponseDto {
  sharePathId: string;
}

export interface FindSharePathResponseDto {
  id: string;
  lastSharerUserAvatar: string;
}

export interface WxCallbackDto {
  MsgType: string;
  SessionFrom: string;
  Title: string;
  FromUserName: string;
}

export interface SceneDecodePosterResponseDto {
  groupBuyingId: string;
  sharePathId: string;
}

export interface SceneDecodeResponseDto {
  poster?: SceneDecodePosterResponseDto;
}

export interface SettingDto {
  id: string;
  redis: string;
  default: object;
  value: object;
}

export interface SetSettingRequestDto {
  value: object;
}

export interface MnpSettingsDto {
  subscribeMpWebViewUrl: string;
}

export interface KeeperCreateRequestDto {
  wxId: string;
  alias: string;
  role?: string;
}

export interface GetGroupBuyingQueryDto {
  startTime?: string;
  endTime?: string;
  search?: string;
  pageNumber?: number;
  pageSize?: number;
  withCount?: boolean;
}

export interface GetGroupBuyingDto {
  id: string;
  title: string;
  status: string;
  thumbnails: string[];
  goodsCount: number;
  orderCount: number;
  username: string;

  /** @format date-time */
  createdAt: string;
}

export interface GetGroupBuyingListDto {
  data: GetGroupBuyingDto[];
  count: number;
}

export interface GetUserQueryDto {
  withoutDeleted?: boolean;
  startTime?: string;
  endTime?: string;
  search?: string;
  pageNumber?: number;
  pageSize?: number;
  withCount?: boolean;
}

export interface GetUserDto {
  followerCount: number;
  orderCount: number;
  totalSales: number;
  groupBuyingCount: number;
  id?: string;
  name: string;
  avatar: string;
  phone?: string;
  wxPhone?: string;
  city?: string;

  /** @format date-time */
  createdAt?: string;
  isDeleted?: boolean;
}

export interface GetUserListDto {
  data: GetUserDto[];
  count: number;
}

export interface DeleteUserDto {
  ids: string[];
}

export interface GetOrderQueryDto {
  startTime?: string;
  endTime?: string;
  search?: string;
  pageNumber?: number;
  pageSize?: number;
  withCount?: boolean;
}

export interface GetOrderDto {
  id?: object;
  groupBuyingName: string;
  price: number;
  orderNumber?: string;
  status: string;
  refundStatus: string;
  cancelStatus: string;
  expressType: string;
  sellerUserName: string;
  sharerUserName?: string;
  shareBonus?: number;
  address: {
    name: string;
    phone: string;
    province: string;
    city: string;
    district: string;
    detailAddress: string;
  };
  pickUpAddress: { addressName: string; location: string; name: string; phone: string };

  /** @format date-time */
  createdAt?: string;
}

export interface GetOrderListDto {
  data: GetOrderDto[];
  count: number;
}

export interface GetPaymentWalletQueryDto {
  startTime?: string;
  endTime?: string;
  search?: string;
  pageNumber?: number;
  pageSize?: number;
  withCount?: boolean;
}

export interface GetWithdrawalDto {
  id?: string;
  userName: string;
  amount: number;
  totalCount: number;
  totalAmount: number;
  balance: number;
  userId: string;
  status: string;

  /** @format date-time */
  createdAt?: string;
}

export interface GetWithdrawalListDto {
  data: GetWithdrawalDto[];
  count: number;
}

export interface GetPaymentBillQueryDto {
  userIds: string[];
  startTime?: string;
  endTime?: string;
  search?: string;
  pageNumber?: number;
  pageSize?: number;
  withCount?: boolean;
}

export interface GetPaymentBillDto {
  id?: string;
  description: string;
  category: string;
  type: string;
  amount: number;

  /** @format date-time */
  createdAt?: string;
}

export interface GetPaymentBillListDto {
  data: GetPaymentBillDto[];
  count: number;
}
