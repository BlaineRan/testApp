import { BetaSchemaForm, ProForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Row, Col } from 'antd';
import React from 'react';

const DeckingCheckPage: React.FC = (props) => {

    const getDeckingHameType = async () => {

    }

    type checkDataType = {
        harmTypeId?: number;
        elementId?: number;
        dValue?: String;
    }

    return (
        <>
            <ProForm>
                <ProFormSelect
                    name="harmType1"
                    label="损害类型1"

                    placeholder={"请选择一个扣分等级"}
                />
                

            </ProForm>

        </>
    );
};

export default DeckingCheckPage;

