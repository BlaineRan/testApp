import React from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';
import { request } from '@umijs/max';

const Map: React.FC = () => {
    AMapLoader.load({
        "key": "23a5695cd162362078296f5396472fa6",              // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
        const map = new AMap.Map('container', {
            zoom: 11,//级别
            center: [106.54041, 29.40268],//中心点坐标
        });
        request('http://localhost:8080/bridge/getColAndRow.api', {
            method: "POST"
        }).then((value) => {
            console.log(value)
            for (let i = 0; i < value.length; i++) {
                var marker = new AMap.Marker({
                    position: new AMap.LngLat(value[i].col, value[i].row),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    title: value[i].bridgeName
                });

                // 将创建的点标记添加到已有的地图实例：
                map.add(marker);
            }
        })

    }).catch(e => {
        console.log(e);
    })
    return (
        <>
            <div id="container" style={{
                width: "100%",
                height: "100%"
            }}></div>
        </>
    )
}

export default Map;