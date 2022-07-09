import { addBridge, getPagingBridge, removeBridge, updateBridge } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProTable,
  ProForm,
  ProFormSelect,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, message, Popconfirm } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from './components/UpdateForm';

import { request } from '@umijs/max';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.Bridge) => {
  const hide = message.loading('正在添加');
  try {
    fields.bciLevel = 1;
    fields.bsiLevel = 1;
    fields.puciLevel = 1;
    await addBridge(fields);
    hide();
    message.success('添加成功！');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败，请重试');
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('Configuring');
  try {
    // await updateRule({
    //   name: fields.name,
    //   desc: fields.desc,
    //   key: fields.key,
    // });
    hide();

    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.BridgeItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await removeBridge({
      bridgeId: selectedRows.map((row) => row.bridgeId),
    });

    hide();
    message.success('删除成功！即将刷新列表');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);

  /**
     * @en-US Pop-up window of new window
     * @zh-CN 修改窗口的弹窗
     *  */
  const [createUpdateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.BridgeItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.BridgeItem[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  //列集合数据
  const columns: ProColumns<API.BridgeItem>[] = [
    // 桥梁编号
    {
      title: "桥梁编号",
      dataIndex: 'bridgeId',
      tip: '桥梁编号唯一',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    //桥梁名称
    {
      title: "桥梁名称",
      dataIndex: 'bridgeName',
      valueType: 'textarea',
    },
    //桥梁类型
    {
      title: "桥梁类型",
      dataIndex: 'bridgeType',
      valueEnum: {
        1: {
          text: "梁氏桥",
        },
        2: {
          text: '桁架桥',
        },
        3: {
          text: '拱桥',
        },

        4: {
          text: '刚构桥',
        },

        5: {
          text: '悬臂梁桥',
        },

        6: {
          text: '人行天桥',
        },
      },
      // sorter: true,  是否可排序
      // hideInForm: true,
      // renderText: (val: string) =>
      //   `${val}${intl.formatMessage({
      //     id: 'pages.searchTable.tenThousand',
      //     defaultMessage: ' 万 ',
      //   })}`, 加后缀
    },
    //负责人
    {
      title: "负责人",
      dataIndex: 'chargeName',
      valueType: 'textarea',
    },
    // BCI
    {
      title: "BCI等级",
      dataIndex: 'bciLevel',
      hideInForm: true,
      valueEnum: {
        1: {
          text: "优秀",
          // status: 'Default',
          color: '#1890ff'
        },
        2: {
          text: '良好',
          // status: 'Processing',
          color: '#52c41a'
        },
        3: {
          text: '一般',
          // status: 'Error',
          color: '#fadb14'
        },

        4: {
          text: '异常',
          // status: 'Error',
          color: '#874d00'
        },

        5: {
          text: '危险',
          // status: 'Error',
          color: '#ff4d4f'
        },
      },
    },
    // BSI
    {
      title: "BSI等级",
      dataIndex: 'bsiLevel',
      hideInForm: true,
      valueEnum: {
        1: {
          text: "优秀",
          // status: 'Default',
          color: '#1890ff'
        },
        2: {
          text: '良好',
          // status: 'Processing',
          color: '#52c41a'
        },
        3: {
          text: '一般',
          // status: 'Error',
          color: '#fadb14'
        },

        4: {
          text: '异常',
          // status: 'Error',
          color: '#874d00'
        },

        5: {
          text: '危险',
          // status: 'Error',
          color: '#ff4d4f'
        },
      },
    },
    // {
    //   title: "上次养护时间",
    //   sorter: true,
    //   dataIndex: 'updatedAt',
    //   valueType: 'dateTime',
    //   renderFormItem: (item, { defaultRender, ...rest }, form) => {
    //     const status = form.getFieldValue('status');
    //     if (`${status}` === '0') {
    //       return false;
    //     }
    //     if (`${status}` === '3') {
    //       return (
    //         <Input
    //           {...rest}
    //           placeholder={intl.formatMessage({
    //             id: 'pages.searchTable.exception',
    //             defaultMessage: 'Please enter the reason for the exception!',
    //           })}
    //         />
    //       );
    //     }
    //     return defaultRender(item);
    //   },
    // },
    //操作
    {
      title: "操作",
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            setCurrentRow(record);
            console.log(currentRow);
            handleUpdateModalVisible(true);
          }}
        >
          修改
        </a>,
        <Popconfirm
          title="确定要删除这个桥梁吗？"
          onConfirm={() => {
            removeBridge({
              bridgeId: [record.bridgeId]
            });
            message.success("删除成功");
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }}
          onCancel={() => {

          }}
          okText="确认"
          cancelText="取消"
        >
          <a key="deleteBridge" href="#">删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.BridgeItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.bridgeTable.title',
          defaultMessage: 'Bridge List',
        })}
        actionRef={actionRef}
        rowKey="bridgeId"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={getPagingBridge}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />

      {/* 底栏 */}
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
              &nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}

      {/* 新建桥梁 */}
      <ModalForm
        title="新建桥梁"
        visible={createModalVisible}
        width="600px"
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Bridge);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        {/* 桥梁名称 */}
        <ProForm.Group>
          <ProFormText
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.searchTable.ruleName"
                    defaultMessage="Rule name is required"
                  />
                ),
              },
            ]}
            width="xl"
            name="bridgeName"
            label="桥梁名称"
          />

        </ProForm.Group>
        {/* 桥梁长宽 */}
        <ProForm.Group>
          <ProFormText
            width="sm"
            name="bridgeLength"
            label="桥梁长度"
          />

          <ProFormText
            width="sm"
            name="bridgeWidth"
            label="桥梁宽度"
          />


        </ProForm.Group>

        {/* 桥梁类型and负责人 */}
        <ProForm.Group>
          <ProFormSelect
            request={async () => [
              {
                value: '1',
                label: '梁氏桥',
              },
              {
                value: '2',
                label: '桁架桥',
              },
              {
                value: '3',
                label: '拱桥',
              },
              {
                value: '4',
                label: '刚构桥',
              },
              {
                value: '5',
                label: '悬臂梁桥',
              },
              {
                value: '6',
                label: '人行天桥',
              },
            ]}
            width="sm"
            name="bridgeTypeId"
            label="桥梁类型"
          />

          <ProFormSelect
            //请求用户列表
            request={async () => {
              const userData = await request<API.User[]>('http://localhost:8080/user/getUserList.api', {
                method: 'GET',
              })
              const userList = [];
              for (let i = 0; i < userData.length; i++) {
                const temp = {
                  value: userData[i].userId,
                  label: userData[i].userName
                };
                userList.push(temp);
              }

              return userList;
            }}
            width="sm"
            name="chargeId"
            label="负责人"
          />
        </ProForm.Group>

        {/* 养护类别and养护等级 */}
        <ProForm.Group>
          <ProFormSelect
            request={async () => [
              {
                value: '1',
                label: 'Ⅰ',
              },
              {
                value: '2',
                label: 'Ⅱ',
              },
              {
                value: '3',
                label: 'Ⅲ',
              },
              {
                value: '4',
                label: 'Ⅳ',
              },
              {
                value: '5',
                label: 'Ⅴ',
              },

            ]}
            width="sm"
            name="maintainType"
            label="养护类别"
          />
          <ProFormSelect
            width="sm"
            options={[
              {
                value: '1',
                label: 'Ⅰ',
              },
              {
                value: '2',
                label: 'Ⅱ',
              },
              {
                value: '3',
                label: 'Ⅲ',
              },
            ]}
            name="maintainLevel"
            label="养护等级"
          />
        </ProForm.Group>
      </ModalForm>

      {/* 更新桥梁 */}
      <ModalForm
        title="更新桥梁"
        key={'updateForm' + Math.random()}
        visible={createUpdateModalVisible}
        width="600px"
        onVisibleChange={handleUpdateModalVisible}
        onFinish={async (value) => {
          value.bridgeId = currentRow?.bridgeId;
          const success = await updateBridge(value as API.Bridge);
          if (success) {
            handleUpdateModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        initialValues={{
          bridgeName: currentRow?.bridgeName,
          bridgeLength: currentRow?.bridgeLength,
          bridgeWidth: currentRow?.bridgeWidth,
        }}
      >
        {/* 桥梁名称 */}
        <ProForm.Group>
          <ProFormText
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            width="xl"
            name="bridgeName"
            label="桥梁名称"
          />

        </ProForm.Group>
        {/* 桥梁长宽 */}
        <ProForm.Group>
          <ProFormText
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            width="sm"
            name="bridgeLength"
            label="桥梁长度"
          />

          <ProFormText
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            width="sm"
            name="bridgeWidth"
            label="桥梁宽度"
          />


        </ProForm.Group>

        {/* 桥梁类型and负责人 */}
        <ProForm.Group>
          <ProFormSelect
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            request={async () => [
              {
                value: '1',
                label: '梁氏桥',
              },
              {
                value: '2',
                label: '桁架桥',
              },
              {
                value: '3',
                label: '拱桥',
              },
              {
                value: '4',
                label: '刚构桥',
              },
              {
                value: '5',
                label: '悬臂梁桥',
              },
              {
                value: '6',
                label: '人行天桥',
              },
            ]}
            width="sm"
            name="bridgeTypeId"
            label="桥梁类型"
          />

          <ProFormSelect
            //请求用户列表
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            request={async () => {
              const userData = await request<API.User[]>('http://localhost:8080/user/getUserList.api', {
                method: 'GET',
              })
              const userList = [];
              for (let i = 0; i < userData.length; i++) {
                const temp = {
                  value: userData[i].userId,
                  label: userData[i].userName
                };
                userList.push(temp);
              }

              return userList;
            }}
            width="sm"
            name="chargeId"
            label="负责人"
          />
        </ProForm.Group>

        {/* 养护类别and养护等级 */}
        <ProForm.Group>
          <ProFormSelect
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            request={async () => [
              {
                value: '1',
                label: 'Ⅰ',
              },
              {
                value: '2',
                label: 'Ⅱ',
              },
              {
                value: '3',
                label: 'Ⅲ',
              },
              {
                value: '4',
                label: 'Ⅳ',
              },
              {
                value: '5',
                label: 'Ⅴ',
              },

            ]}
            width="sm"
            name="maintainType"
            label="养护类别"
          />
          <ProFormSelect
            rules={[
              {
                required: true,
                message: "必填项！",
              },
            ]}
            width="sm"
            options={[
              {
                value: '1',
                label: 'Ⅰ',
              },
              {
                value: '2',
                label: 'Ⅱ',
              },
              {
                value: '3',
                label: 'Ⅲ',
              },
            ]}
            name="maintainLevel"
            label="养护等级"
          />
        </ProForm.Group>
      </ModalForm>


      {/* 显示详细信息 */}
      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.bridgeName && (
          <ProDescriptions<API.BridgeItem>
            column={2}
            title={currentRow?.bridgeName}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.bridgeName,
            }}
            columns={columns as ProDescriptionsItemProps<API.BridgeItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
