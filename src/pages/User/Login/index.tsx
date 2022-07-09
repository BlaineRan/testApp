import Footer from '@/components/Footer';
import { login, register } from '@/services/ant-design-pro/api';
import {
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, history, SelectLang, useIntl, useModel } from '@umijs/max';
import { Alert, message, Tabs, Form, Input, Modal, Radio } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

interface RegisterValues {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: RegisterValues) => void;
  onCancel: () => void;
}

//创建注册表单
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="注册用户"
      okText="注册"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('注册信息收集失败', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ userType: 'user' }}
      >
        <Form.Item
          name="userName"
          label="用户名"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="account"
          label="账号"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="userType" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="user">普通用户</Radio>
            <Radio value="admin">管理员</Radio>
            <Radio value="inspector">巡查员</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  //注册表单的可见性
  const [visible, setVisible] = useState(false);

  const intl = useIntl();

  //注册表单提交
  const onCreate = (values: any) => {
    console.log('注册表单接收信息', values);
    const status = register(values);
    status.then((value) => {
      if (value === "success") {
        message.success("注册成功！");
      } else {
        message.error("注册失败！用户名或账号重复");
      }
    })
    console.log("注册状态: " + status);


    setVisible(false);
  };

  // 匹配currentUser
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  //提交登录表单 请求登录
  const handleSubmit = async (values: API.LoginParams, type: string) => {
    try {
      // 登录
      console.log(values);
      var msg: any = null;
      // 如果类型是invite则可输入邀请码登录
      if (type === 'invite') {
        if (values.invite === "Yali_1906") {
          // 
          msg = {
            status: "success",
            type: "account",
            access: "admin"
          }
        }
      } else {
        // msg = await login(values);
        msg = {
          status: "success",
          type: "account",
          access: "admin"
        }
      }

      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      {/* 选择语言 */}
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/bridge.svg" />}
          title="桥梁信息管理系统"
          subTitle="一边复习计算机系统一边写出来的好项目！"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {

            await handleSubmit(values as API.LoginParams, type);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane
              key="account"
              tab={intl.formatMessage({
                id: 'pages.login.accountLogin.tab',
                defaultMessage: '账户密码登录',
              })}
            />
            <Tabs.TabPane
              key="invite"
              tab={intl.formatMessage({
                id: 'pages.login.inviteLogin.tab',
                defaultMessage: '邀请码登录',
              })}
            />
          </Tabs>

          {status === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="account"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '用户名',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: '密码',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'invite' && <LoginMessage content="邀请码错误" />}
          {type === 'invite' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={styles.prefixIcon} />,
                }}
                name="invite"
                placeholder={intl.formatMessage({
                  id: 'pages.login.inviteKey.placeholder',
                  defaultMessage: '邀请码',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.inviteKey.required"
                        defaultMessage="邀请码是必填项"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
              onClick={() => {
                setVisible(true);
              }}
            >
              <FormattedMessage id="pages.login.registerAccount" defaultMessage="注册账户" />
            </a>
          </div>
        </LoginForm>

        {/* 注册表单组件 */}
        <CollectionCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
