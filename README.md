# Real-time React Map of residential areas found COVID-19 in Shenzhen, Guangdong

## 1st Feature of Project

I'll use Reactjs, web socket and Google Map React to build a map of residential areas where novel coronavirus patients are found.

## Data Source

- from [https://ncov.html5.qq.com/api/getCommunity?province=广东省&city=深圳市](https://ncov.html5.qq.com/api/getCommunity?province=%E5%B9%BF%E4%B8%9C%E7%9C%81&city=%E6%B7%B1%E5%9C%B3%E5%B8%82)  
  - [example](https://zhuanlan.zhihu.com/p/105439725)

## use Google Map in Reactjs

- [Google Map React](https://www.npmjs.com/package/google-map-react)
- [How to use the Google Maps API with React.js](https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2)

## use Web Socket in Reactjs

[A Simple Chat App With React, Node and WebSocket](https://blog.bitlabstudio.com/a-simple-chat-app-with-react-node-and-websocket-35d3c9835807)

### Schedule

|          Done?          |   Date    |  Day  | Task                                                                                                                                                                                                      |
| :---------------------: | :-------: | :---: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| :ballot_box_with_check: | 2020/2/17 |  Mon  | 1. create empty project of two folders, **/frontend** and **/backend**, with **``babel``**, **``webpack``**, eslint and other necessary **configurations**.                                               |
| :ballot_box_with_check: | 2020/2/18 |  Tue  | 2. implement **frontend map** by using **``React ``** and **``Google Map React``** (no need to add **``Markers``** on the map, since there're no backend for now and therefore no data from outside api). |
| :ballot_box_with_check: | 2020/2/19 |  Wed  | 3. implement **backend service** for getting data from outside api                                                                                                                                        |
| :ballot_box_with_check: | 2020/2/20 |  Thu  | 4. implement **``web socket`` communication** on both sides                                                                                                                                               |
| :ballot_box_with_check: | 2020/2/21 |  Fri  | 5. Add **``Markers``** on the map according to ``{lat, lng}`` from data                                                                                                                                   |

---

## 2nd Feature of Project

I'll use Reactjs, web socket and Echart to build a dynamic chart showing the history of the number of infected people in each province.

## Data Source

- [本接口为全国新型肺炎疫情实时数据接口，数据来源为丁香园，开放给所有有需要的人。](https://lab.isaaclin.cn/nCoV/zh)
  - [https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=湖北省](https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=%E6%B9%96%E5%8C%97%E7%9C%81)
  - [https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=广东省](https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=%E5%B9%BF%E4%B8%9C%E7%9C%81)
  - [https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=江苏省](https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=%E6%B1%9F%E8%8B%8F%E7%9C%81)

## use Echart in Reactjs

- [echarts-for-react](https://openbase.io/js/echarts-for-react)
  - [Make a Dynamic Chart with React and ECharts: A Simple Tutorial](https://medium.com/@mailjontay/make-a-dynamic-chart-with-react-and-echarts-a-simple-tutorial-92a5c3c053a2)
    - [example data mode](https://github.com/jonathantayyw/react-echarts-tutorial/blob/master/src/DataFemale.js)
