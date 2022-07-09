import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '桥梁信息管理系统',
  pwa: false,
  logo: '/bridge.svg',
  iconfontUrl: '',
};
// {
//   "navTheme": "realDark",
//   "primaryColor": "#1890ff",
//   "layout": "mix",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": false,
//   "logo": "/bridge.svg",
//   "headerHeight": 56
// }
export default Settings;

