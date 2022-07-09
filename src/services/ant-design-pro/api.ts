// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import { useModel } from '@umijs/max';


/** 获取当前的用户 GET http://localhost:8080/user/currentUser.api */
export async function currentUser() {
  return request<API.CurrentUser>('http://localhost:8080/user/currentUser.api', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
}

/** 退出登录接口 POST http://localhost:8080/user/outLogin.api */
export async function outLogin() {
  return request<Record<string, any>>('http://localhost:8080/user/outLogin.api', {
    method: 'POST',
  });
}

/** 登录接口 POST http://localhost:8080/user/login.api */
export async function login(body: API.LoginParams) {
  return request<API.LoginResult>('http://localhost:8080/user/login.api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    data: body,
  });
}

/** 注册接口 POST http://localhost:8080/user/register.api */
export async function register(body: API.RegisterParam) {
  return request<String>('http://localhost:8080/user/register.api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    data: body,
  });
}

/** 用户查询接口 POST http://localhost:8080/user/queryUser.api */
export async function queryUser(body: API.LoginParams) {
  return request<API.CurrentUser>('http://localhost:8080/user/login.api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    data: body,
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页获取桥梁列表 POST http://localhost:8080/bridge/getListPaging.api */
export async function getPagingBridge(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.BridgeList>('http://localhost:8080/bridge/getListPaging.api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取桥梁列表 GET http://localhost:8080/bridge/getListPaging.api */
export async function getBridge(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.BridgeList>('http://localhost:8080/bridge/getList.api', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/**新建桥梁 */
export async function addBridge(data: API.Bridge) {
  return request<String>('http://localhost:8080/bridge/addOne.api', {
    method: 'POST',
    data: data
  })
}

/**删除桥梁 */
export async function removeBridge(data: {
  bridgeId?: any
}) {
  return request<Record<string, any>>('http://localhost:8080/bridge/deleteMany.api', {
    method: 'POST',
    data: data
  });
}

/**更新桥梁 */
export async function updateBridge(data: API.Bridge) {
  return request<String>('http://localhost:8080/bridge/update.api', {
    method: 'POST',
    data: data
  })
}

/**转换桥梁类型名字和id */
export async function transferTypenameToId(bridgeTypeName: String | undefined) {
  return request<number>('http://localhost:8080/bridge/typeNameToId.api', {
    data: {
      bridgeTypeName: bridgeTypeName
    },
    method: "POST"
  })
}

/**转换桥梁类型名字和id */
export async function transferUsernameToId(userName: String | undefined) {
  request<number>('http://localhost:8080/user/nameToId.api', {
    data: {
      userName: userName
    },
    method: "POST"
  })
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
