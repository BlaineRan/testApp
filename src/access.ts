/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    caAdmin: currentUser && (currentUser.access === 'admin' || currentUser.access === 'inspector'),
  };
}
