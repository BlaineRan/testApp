import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {

  return (
    <PageContainer>
      <Card>
        <Alert
          message="您已登录成功！从左侧菜单栏开始查看或管理桥梁信息！"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>

        </Typography.Text>
        <CodePreview>
          该项目由<br />
          632002060214周文浩@Ranranran <br />
          完成
        </CodePreview>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
