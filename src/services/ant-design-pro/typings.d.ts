// @ts-ignore
/* eslint-disable */

declare namespace API {
  type User = {
    userId?:number;
    account?:String;
    password?:String;
    userType?:String;
    avatar?:String;
    userName?:String;
    active?:number;
  }

  type CurrentUser = {
    name?: string;
    // 头像
    avatar?: string;
    userid?: string;
    unreadCount?: number;
    access?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterParam = {
    userName?: String;
    account?: String;
    password?: String;
    userType?: String;
  }

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type Bridge = {
    bridgeId?:number;
    bridgeName?:String;
    bridgeType?:number;
    bridgeLength?:number;
    bridgeWidth?:number;
    chargeId?:number;
    maintainType?:number;
    maintainLevel?:number;
    bciLevel?:number;
    bsiLevel?:number;
    puciLevel?:number;
  }

  type BridgeItem = {
    bridgeId?:number;
    bridgeName?:String;
    bridgeType?:String;
    bridgeLength?:number;
    bridgeWidth?:number;
    chargeName?:String;
    maintainType?:number;
    maintainLevel?:number;
    bciLevel?:number;
    bsiLevel?:number;
    puciLeve?:number;
  }

  type BridgeList = {
    data?: BridgeItem[];
    // 列表中的内容总数
    total?:number;
    success?:boolean;
  }

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    account?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
    invite?:string
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
