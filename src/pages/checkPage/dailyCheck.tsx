import { getPagingBridge } from '@/services/ant-design-pro/api';
import { ActionType, ModalForm, ProColumns, ProForm, ProFormFieldSet, ProFormInstance, ProFormList, ProFormText } from '@ant-design/pro-components';
import { ProCard, ProTable } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import { Drawer, Descriptions, Button, message } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
// @ts-ignore
import styles from './split.less';

type TableListItem = {
  dailyCheckId: number;
  checkDate: number;
  inspectorName?: string;
  inspectorId?: number;
  bridgeId?: number;
  bridgeName?: String;
  inProtectConstruct?: String;
  otherHarm?: String;
  maintainAdvice?: String;
};

type MoreInfo = {
  specificId?: number;
  dailyCheckId?: number;
  checkItem?: String;
  complete?: String;
  harmType?: String;
  harmDegree?: String;
  harmPos?: String;
  tips?: String;
}

type DetailListProps = {
  bridgeId: number;
};
//细节表
const DetailList: React.FC<DetailListProps> = (props) => {
  const { bridgeId } = props;
  const actionRefRecord = useRef<ActionType>();
  const actionRefSpec = useRef<ActionType>();
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<TableListItem>();

  //获得日常巡检记录
  const getDetailData = async (params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },) => {
    return request('http://localhost:8080/bridgeCheck/getDailyRecordByBridgeId.api', {
      method: 'POST',
      data: {
        bridgeId: bridgeId,
        current: params.current,
        pageSize: params.pageSize
      }
    })
    // setDetailSource(detaileData);
    // return detaileData
  }

  //获得日常巡检记录详细
  const getMoreInfo = async () => {
    return request('http://localhost:8080/bridgeCheck/getDailySpec.api', {
      method: 'POST',
      data: {
        currentRecordId: currentRecord?.dailyCheckId
      }
    })
  }

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '巡检编号',
      key: 'dailyCheckId',
      dataIndex: 'dailyCheckId',
      // valueType: 'dateTime',
    },
    {
      title: '巡检时间',
      key: 'checkDate',
      dataIndex: 'checkDate',
      valueType: 'dateTime',
    },
    {
      title: '巡检人',
      key: 'inspectorName',
      dataIndex: 'inspectorName',
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      render: (dom, entity) => [<a key="a" onClick={() => {
        setCurrentRecord(entity);
        setShowMoreInfo(true);
      }}>查看详情</a>],
    },
  ];
  const moreColumns: ProColumns<MoreInfo>[] = [
    {
      title: '检查项',
      key: 'checkItem',
      dataIndex: 'checkItem',
      // valueType: 'dateTime',
    },
    {
      title: '是否完好',
      key: 'complete',
      dataIndex: 'complete',
    },
    {
      title: '损坏类型',
      key: 'harmType',
      dataIndex: 'harmType',
    },
    {
      title: '损坏程度',
      key: 'harmDegree',
      dataIndex: 'harmDegree',
    },
    {
      title: '损坏位置',
      key: 'harmPos',
      dataIndex: 'harmPos',
    },
    {
      title: '备注',
      key: 'tips',
      dataIndex: 'tips',
    },
  ]
  //bridgeId(选择的桥梁)改变时 更新数据源
  useEffect(() => {

    actionRefRecord.current?.reload();
  }, [bridgeId]);

  useEffect(() => {
    actionRefSpec.current?.reload();
  }, [currentRecord])
  return (


    <>
      <ProTable<TableListItem>
        actionRef={actionRefRecord}
        columns={columns}
        request={getDetailData}
        pagination={{
          pageSize: 20,
          showSizeChanger: false,
        }}
        rowKey="key"
        toolBarRender={false}
        search={false}
      />

      <Drawer
        width={700}
        visible={showMoreInfo}
        onClose={() => {
          setCurrentRecord(undefined);
          setShowMoreInfo(false);
        }}
        closable={false}
      >
        <Descriptions title={currentRecord?.bridgeName} bordered size={'small'}>
          <Descriptions.Item label="保护区域内施工" span={3}>{currentRecord?.inProtectConstruct}</Descriptions.Item>
          <Descriptions.Item label="其他危及人、行船、行车安全的病害" span={3}>{currentRecord?.otherHarm}</Descriptions.Item>
          <Descriptions.Item label="巡查日期" span={3}>{currentRecord?.checkDate}</Descriptions.Item>
          <Descriptions.Item label="巡查人">{currentRecord?.inspectorName}</Descriptions.Item>
        </Descriptions>
        <ProTable<MoreInfo>
          actionRef={actionRefSpec}
          columns={moreColumns}
          request={getMoreInfo}
          pagination={false}
          rowKey="key"
          toolBarRender={false}
          search={false}
        />
      </Drawer>
    </>
  );
};

type BridgeListProps = {
  bridgeId: number;
  onChange: (id: number, name: any) => void;
};

const IPList: React.FC<BridgeListProps> = (props) => {
  const { onChange, bridgeId } = props;
  const [checkFormVisible, setCheckFormVisible] = useState<boolean>(false);
  const [currentBridge, setCurrentBridge] = useState<API.BridgeItem>();
  const restFormRef = useRef<ProFormInstance>();


  useEffect(() => {
    restFormRef.current?.resetFields();
  }, [checkFormVisible])

  const columns: ProColumns<API.BridgeItem>[] = [
    {
      title: '桥梁编号',
      key: 'bridgeId',
      dataIndex: 'bridgeId',
      // render: (_, item) => {
      //   return <Badge status={item.status} text={item.ip} />;
      // },
    },
    {
      title: '桥梁名称',
      key: 'bridgeName',
      dataIndex: 'bridgeName',
    },
    {
      title: '桥梁类型',
      key: 'bridgeType',
      dataIndex: 'bridgeType',
    },
    {
      title: '负责人',
      key: 'chargeName',
      dataIndex: 'chargeName',
    },
    // BCI
    {
      title: 'BCI等级',
      key: 'bciLevel',
      dataIndex: 'bciLevel',
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
    //BSI
    {
      title: 'BSI等级',
      key: 'bsiLevel',
      dataIndex: 'bsiLevel',
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
    {
      title: "操作",
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button type="primary" onClick={() => {
          setCurrentBridge(record);
          setCheckFormVisible(true);
        }}>
          检查
        </Button>
      ],
    },
  ];
  return (
    <>
      <ProTable<API.BridgeItem>
        columns={columns}
        request={getPagingBridge}
        rowKey="bridgeId"

        options={false}
        onRow={(record) => {
          return {
            onClick: () => {
              if (record.bridgeId) {
                onChange(record.bridgeId, record.bridgeName);
              }
            },
          };
        }}
      />
      <ModalForm
        key={"check" + new Date().toDateString}
        title="日常检查"
        width={900}
        visible={checkFormVisible}
        formRef={restFormRef}
        initialValues={{
          bridgeName: currentBridge?.bridgeName
        }}
        modalProps={{
          onCancel: () => {
            setCheckFormVisible(false)
          }
        }}
        onFinish={
          async (values) => {
            values.bridgeId = currentBridge?.bridgeId;
            console.log(values);
            setCheckFormVisible(false);
            const result = await request('http://localhost:8080/bridgeCheck/addDailyCheck.api', {
              method: 'POST',
              data: values
            })

            if (result === 'success') {
              message.success("添加巡检记录成功！")
              return true;
            }
          }

        }
      >

        <ProForm.Group>
          <ProFormText
            width="xl"
            name="bridgeName"
            label="桥梁名称"
            disabled={true}
          />
          <ProFormText
            width="xl"
            name="inProtectConstruct"
            label="区域保护内施工"
          />
          <ProFormText
            width="xl"
            name="otherHarm"
            label="其他危机行人、行船、行车安全的病害"
          />
          <ProFormText
            width="xl"
            name="maintainAdvice"
            label="养护建议"
          />
        </ProForm.Group>

        <ProFormList name="checkItems">
          <ProFormFieldSet
            name="checkItemsField"
            label="检查项记录"
            transform={(value: any) => ({
              checkItem: value[0],
              complete: value[1],
              harmType: value[2],
              harmDegree: value[3],
              harmPos: value[4],
              tips: value[5],
            })}
          >

            <ProForm.Group key="test">
              <ProFormText
                rules={[
                  {
                    required: true,
                    message: "必填项",
                  },
                ]}
                width="xs"
                name="checkItem"
                label="检查项"
              />
              <ProFormText
                rules={[
                  {
                    required: true,
                    message: "必填项",
                  },
                ]}
                width="xs"
                name="complete"
                label="是否完好"
              />
              <ProFormText
                width="xs"
                name="harmType"
                label="损害类型"
              />
              <ProFormText
                width="xs"
                name="harmDegree"
                label="损害程度"
              />
              <ProFormText
                width="xs"
                name="harmPos"
                label="损害位置"
              />
              <ProFormText
                width="xs"
                name="tips"
                label="备注"
              />
            </ProForm.Group>
          </ProFormFieldSet>
        </ProFormList>
      </ModalForm>
    </>
  );
};

const DailyCheck: React.FC = () => {
  const [bridgeId, setBridgeId] = useState(1);
  const [bridgeName, setBridgeName] = useState("请在左表选择桥梁");
  return (
    <ProCard split="vertical">
      <ProCard colSpan="800px" ghost>
        <IPList onChange={(cBridgeId, cBridgeName) => {
          setBridgeId(cBridgeId);
          setBridgeName(cBridgeName);

        }} bridgeId={bridgeId} />
      </ProCard>
      <ProCard title={"巡检明细表"}>
        <ProCard title={bridgeName} >
          <DetailList bridgeId={bridgeId} />
        </ProCard>
      </ProCard>
    </ProCard>
  );
};

export default DailyCheck;
