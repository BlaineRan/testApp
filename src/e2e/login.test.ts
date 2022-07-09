import {login} from '../services/ant-design-pro/api';
test('login Test', async () => {	
    // 测试用例以 3A 的结构来写
   
    // Arrange 准备阶段，准备 mock 函数或者数据
    const data = await login({
        account:'1819153268',
        password:'Yali_1906'
    })
   
    // Assert 断言测试结果
    expect(login);
    
  })