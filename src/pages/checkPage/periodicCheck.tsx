import { getPagingBridge } from '@/services/ant-design-pro/api';
import { ActionType, EditableProTable, ModalForm, ProColumns, ProDescriptions, ProDescriptionsItemProps, ProForm, ProFormFieldSet, ProFormInstance, ProFormList, ProFormText, StepsForm } from '@ant-design/pro-components';
import { ProCard, ProTable, ProFormSelect } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import { Button, Descriptions, message, Modal, Tag } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
// @ts-ignore
import styles from './split.less';

type TableListItem = {
  periodicCheckId: number;
  checkTime: number;
  inspectorName?: string;
  inspectorId?: number;
  bridgeId?: number;
  bridgeName?: String;
  bci?: number;
  bsi?: number;
  puci?: number;
};

type DetailListProps = {
  bridgeId: number;
};
//细节表
const DetailList: React.FC<DetailListProps> = (props) => {
  const { bridgeId } = props;
  const actionRefRecord = useRef<ActionType>();

  //获得日常巡检记录
  const getDetailData = async (params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },) => {
    const result = await request('http://localhost:8080/pCheck/getPRecordByBridgeId.api', {
      method: 'POST',
      data: {
        bridgeId: bridgeId,
        current: params.current,
        pageSize: params.pageSize
      }
    })
    return result;
  }

  //右表主字段
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '记录编号',
      key: 'periodicCheckId',
      dataIndex: 'periodicCheckId',
      // valueType: 'dateTime',
    },
    {
      title: '检查时间',
      key: 'checkTime',
      dataIndex: 'checkTime',
      valueType: 'dateTime',
    },
    {
      title: '巡检人',
      key: 'inspectorName',
      dataIndex: 'inspectorName',
    },
    {
      title: 'BCI得分',
      key: 'bci',
      dataIndex: 'bci',
    },
    {
      title: 'BSI得分',
      key: 'bsi',
      dataIndex: 'bsi',
    },

  ];

  //bridgeId(选择的桥梁)改变时 更新数据源
  useEffect(() => {

    actionRefRecord.current?.reload();
  }, [bridgeId]);

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
  const [superCheckFormVisible, setSuperCheckFormVisible] = useState<boolean>(false);
  const [subCheckFormVisible, setSubCheckFormVisible] = useState<boolean>(false);
  const [currentBridge, setCurrentBridge] = useState<API.BridgeItem>();


  //桥面系前端数据type
  type DeckingCheckDataItem = {
    harmTypeId?: number;
    elementId?: number;
    elementName?: String;
    harmTypeName?: String;
    harmDef?: String;
    harmStd?: String;
    deValue?: String;
  }
  //上部结构前端数据type
  type SuperCheckDataItem = {
    checkItemId?: number;
    harmTypeId?: number;
    elementId?: number;
    checkItemName?: String;
    elementName?: String;
    harmTypeName?: String;
    harmDef?: String;
    harmStd?: String;
    deValue?: String;
  }

  //桥面系前端数据type
  type SubCheckDataItem = {
    harmTypeId?: number;
    elementId?: number;
    elementName?: String;
    harmTypeName?: String;
    harmDef?: String;
    harmStd?: String;
    deValue?: String;
  }

  //桥面系检查数据Std
  const [deckingCheckDataStd, setDeckingCheckDataStd] = useState<DeckingCheckDataItem[]>();

  //上部结构检查数据
  const [superCheckData, setSuperCheckData] = useState<SuperCheckDataItem[]>();
  //当前检测的桥跨span
  const [currentSpanId, setCurrentSpanId] = useState();

  //下部结构检查数据
  const [subCheckData, setSubCheckData] = useState<SubCheckDataItem[]>();
  //当前检测的桥墩pier
  const [currentPierId, setCurrentPierId] = useState();

  //人行通道
  const [passagewayCheck, setPassagewayCheck] = useState();



  const restFormRef = useRef<ProFormInstance>();

  //定期检查表单的key
  const [checkKey, setCheckKey] = useState("check1");

  //桥墩(台)是否检查完毕
  const [isPierComplete, setIsPierrComplete] = useState();

  const submitPeriodicCheckData = async () => {
    await request('http://localhost:8080/checkSpec/submitCheckData.api', {
      method: "POST",
      data: {
        decking: deckingCheckDataStd,
        super: subCheckData,
        sub: subCheckData,
        bridge: currentBridge?.bridgeId
      }
    })

  }

  //更新decking super数据
  useEffect(() => {
    //decking
    request('http://localhost:8080/checkSpec/getDeckingCheckStd.api', {
      method: "POST",
      data: {
        bridgeType: currentBridge?.bridgeType
      }
    }).then((value: DeckingCheckDataItem[]) => {

      setDeckingCheckDataStd(value);
    })

    //super
    request('http://localhost:8080/checkSpec/getSuperCheckStd.api', {
      method: "POST",
      data: {
        bridgeType: currentBridge?.bridgeType
      }
    }).then((value: SuperCheckDataItem[]) => {

      setSuperCheckData(value);
    })

    //sub
    request('http://localhost:8080/checkSpec/getSubCheckStd.api', {
      method: "POST",
      data: {
        bridgeType: currentBridge?.bridgeType
      }
    }).then((value: SubCheckDataItem[]) => {

      setSubCheckData(value);
    })
  }, [checkFormVisible, superCheckFormVisible, subCheckFormVisible])


  useEffect(() => {
    //重置表单
    restFormRef.current?.resetFields();
    //重设分布表单key
    setCheckKey("check1" + new Date().getMilliseconds());
  }, [checkFormVisible])

  const columns2: ProColumns<API.BridgeItem>[] = [
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
    }
  ];

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
  //桥面系检查列
  const deckingColumns: ProColumns[] = [
    {
      title: "损害类型id",
      dataIndex: "harmTypeId",
      key: "harmTypeId",
      readonly: true,
    },
    {
      title: "损害类型名",
      dataIndex: "harmTypeName",
      key: "harmTypeName",
      readonly: true,
    },
    {
      title: "评估要素名",
      dataIndex: "elementName",
      key: "elementName",
      readonly: true,
    },
    {
      title: '扣分等级',
      key: 'deValue',
      dataIndex: 'deValue',
      valueType: 'select',
      valueEnum: {
        "O": { text: '无' },
        "A": { text: 'A', color: '#1890ff' },
        "B": {
          text: 'B',
          color: '#fadb14',
        },
        "C": {
          text: 'C',
          color: "#ff4d4f",
        },
      },
    },
    {
      title: "损害类型定义",
      dataIndex: "harmDef",
      key: "harmDef",
      readonly: true,
    },
    {
      title: "标准说明",
      dataIndex: "harmStd",
      key: "harmStd",
      readonly: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.harmTypeId);
          }}
        >
          检查
        </a>,
      ],
    },
  ]
  //上部结构检查列
  const superColumns: ProColumns[] = [
    {
      title: "损害类型id",
      dataIndex: "harmTypeId",
      key: "harmTypeId",
      readonly: true,
    },
    {
      title: "损害类型名",
      dataIndex: "harmTypeName",
      key: "harmTypeName",
      readonly: true,
    },
    {
      title: "检查项名",
      dataIndex: "checkItemName",
      key: "checkItemName",
      readonly: true,
    },
    {
      title: "评估要素名",
      dataIndex: "elementName",
      key: "elementName",
      readonly: true,
    },
    {
      title: '扣分等级',
      key: 'deValue',
      dataIndex: 'deValue',
      valueType: 'select',
      valueEnum: {
        "O": { text: '无' },
        "A": { text: 'A', color: '#1890ff' },
        "B": {
          text: 'B',
          color: '#fadb14',
        },
        "C": {
          text: 'C',
          color: "#ff4d4f",
        },
      },
    },
    {
      title: "损害类型定义",
      dataIndex: "harmDef",
      key: "harmDef",
      readonly: true,
    },
    {
      title: "标准说明",
      dataIndex: "harmStd",
      key: "harmStd",
      readonly: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.harmTypeId);
          }}
        >
          检查
        </a>,
      ],
    },
  ]

  //下部结构检查列
  const subColumns: ProColumns[] = [
    {
      title: "损害类型id",
      dataIndex: "harmTypeId",
      key: "harmTypeId",
      readonly: true,
    },
    {
      title: "损害类型名",
      dataIndex: "harmTypeName",
      key: "harmTypeName",
      readonly: true,
    },
    {
      title: "评估要素名",
      dataIndex: "elementName",
      key: "elementName",
      readonly: true,
    },
    {
      title: '扣分等级',
      key: 'deValue',
      dataIndex: 'deValue',
      valueType: 'select',
      valueEnum: {
        "O": { text: '无' },
        "A": { text: 'A', color: '#1890ff' },
        "B": {
          text: 'B',
          color: '#fadb14',
        },
        "C": {
          text: 'C',
          color: "#ff4d4f",
        },
      },
    },
    {
      title: "损害类型定义",
      dataIndex: "harmDef",
      key: "harmDef",
      readonly: true,
    },
    {
      title: "标准说明",
      dataIndex: "harmStd",
      key: "harmStd",
      readonly: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.harmTypeId);
          }}
        >
          检查
        </a>,
      ],
    },
  ]
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
      <StepsForm
        onFinish={async () => {
          console.log({
            decking: deckingCheckDataStd,
            super: subCheckData,
            sub: subCheckData,
            bridge: currentBridge?.bridgeId
          });
          await submitPeriodicCheckData();
          setCheckFormVisible(false);

          message.success('提交成功');

          return true;
        }}
        key={checkKey}
        stepsProps={{

        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        formRef={restFormRef}
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              title="定期检查"
              width={1000}
              onCancel={() => setCheckFormVisible(false)}
              visible={checkFormVisible}
              footer={submitter}
              destroyOnClose
            >
              {dom}
            </Modal>
          );
        }}
      >
        <StepsForm.StepForm
          name="ready"
          title="准备"
          onFinish={async (value) => {
            // await waitTime(2000);
            console.log(value);
            return true;
          }}
        >
          {currentBridge?.bridgeName && (
            <ProDescriptions<API.BridgeItem>
              column={2}
              title={currentBridge?.bridgeName + "--------确认信息无误即可点击下一步进行登记"}
              request={async () => ({
                data: currentBridge || {},
              })}
              params={{
                id: currentBridge?.bridgeName,
              }}
              columns={columns2 as ProDescriptionsItemProps<API.BridgeItem>[]}
            />
          )}
        </StepsForm.StepForm>

        <StepsForm.StepForm
          name="deckingCheck"
          title="桥面系检查登记"
          onFinish={async () => {
            console.log(deckingCheckDataStd);
            return true;
          }}
        >
          {/* {deckingTable()} */}
          <EditableProTable<DeckingCheckDataItem>
            headerTitle="桥面系检查登记"
            columns={deckingColumns}
            rowKey="harmTypeId"
            recordCreatorProps={false}
            value={deckingCheckDataStd}
            onChange={setDeckingCheckDataStd}

          />

        </StepsForm.StepForm>

        <StepsForm.StepForm
          name="superstructureCheck"
          title="上部结构检查登记"
          onFinish={async () => {
            return true;
          }}
        >
          <ProTable
            columns={[
              {
                title: "编号",
                key: "spanId",
                dataIndex: "spanId"
              },
              {
                title: '类型',
                key: "tags",
                dataIndex: "tags",
                render: (_, record) => [
                  <Tag color="blue">桥跨</Tag>
                ],
              },
              {
                title: "操作",
                dataIndex: 'option',
                valueType: 'option',
                render: (_, record) => [
                  <Button type="primary" onClick={() => {
                    setCurrentSpanId(record.spanId);
                    setSuperCheckFormVisible(true);
                  }}>
                    检查
                  </Button>
                ],
              },
              // {
              //   title: '是否检查完毕',
              //   key: "isCheck",
              //   dataIndex: "isCheck",
              //   render: (_, record) => [
              //     <Tag color="blue">桥跨</Tag>
              //   ],
              // },
            ]}
            search={false}
            pagination={false}
            request={() => {
              return request('http://localhost:8080/bridge/getSpans.api', {
                method: 'POST',
                data: {
                  bridgeId: currentBridge?.bridgeId
                }
              })
            }}
          />
        </StepsForm.StepForm>

        <StepsForm.StepForm
          name="substructureCheck"
          title="下部结构检查登记"
          onFinish={async () => {
            return true;
          }}
        >
          <ProTable
            columns={[
              {
                title: "编号",
                key: "pierId",
                dataIndex: "pierId"
              },
              {
                title: '类型',
                key: "tags",
                dataIndex: "tags",
                render: (_, record) => {
                  if (record.pierType == 1) {
                    return [
                      <Tag color="blue">桥墩</Tag>
                    ]
                  } else {
                    return [
                      <Tag color="#5BD8A6">桥台</Tag>
                    ]
                  }

                },
              },
              {
                title: "操作",
                dataIndex: 'option',
                valueType: 'option',
                render: (_, record) => [
                  <Button type="primary" onClick={() => {
                    setCurrentPierId(record.pierId);
                    setSubCheckFormVisible(true);
                  }}>
                    检查
                  </Button>
                ],
              },
            ]}
            search={false}
            pagination={false}
            request={() => {
              return request('http://localhost:8080/bridge/getPiers.api', {
                method: 'POST',
                data: {
                  bridgeId: currentBridge?.bridgeId
                }
              })
            }}
          />
        </StepsForm.StepForm>

        <StepsForm.StepForm
          name="complete"
          title="完成"
          onFinish={async () => {
            return true;
          }}
        >
          {currentBridge?.bridgeName && (
            <ProDescriptions<API.BridgeItem>
              column={2}
              title={currentBridge?.bridgeName + "--------登记全部完成！点击提交即可更新数据"}
              request={async () => ({
                data: currentBridge || {},
              })}
              params={{
                id: currentBridge?.bridgeName,
              }}
              columns={columns2 as ProDescriptionsItemProps<API.BridgeItem>[]}
            />
          )}
        </StepsForm.StepForm>
      </StepsForm>

      <Modal
        title="上部结构登记"
        width={1000}
        onCancel={() => setSuperCheckFormVisible(false)}
        onOk={() => {
          setSuperCheckFormVisible(false);
          console.log(superCheckData);
        }}
        visible={superCheckFormVisible}
        destroyOnClose
      >
        <EditableProTable<SuperCheckDataItem>
          columns={superColumns}
          rowKey="harmTypeId"
          recordCreatorProps={false}
          value={superCheckData}
          onChange={setSuperCheckData}
        />
      </Modal>

      <Modal
        title="下部结构登记"
        width={1000}
        onCancel={() => setSubCheckFormVisible(false)}
        onOk={() => {
          setSubCheckFormVisible(false);
          console.log(subCheckData);
        }}
        visible={subCheckFormVisible}
        destroyOnClose
      >
        <EditableProTable<SubCheckDataItem>
          columns={subColumns}
          rowKey="harmTypeId"
          recordCreatorProps={false}
          value={subCheckData}
          onChange={setSubCheckData}
        />
      </Modal>
    </>
  );
};

const PeriodicCheck: React.FC = () => {
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
      <ProCard title={bridgeName} >
        <DetailList bridgeId={bridgeId} />
      </ProCard>
    </ProCard>
  );
};

export default PeriodicCheck;
