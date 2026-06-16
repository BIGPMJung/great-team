const RAW_DATA = {
  "headers": [
    {
      "key": "id",
      "label": "序号",
      "width": "60"
    },
    {
      "key": "category",
      "label": "介质类别",
      "width": "130"
    },
    {
      "key": "usage",
      "label": "介质用途",
      "width": "220",
      "type": "select"
    },
    {
      "key": "code",
      "label": "介质代码",
      "width": "110",
      "type": "select"
    },
    {
      "key": "pfdNo",
      "label": "PFD流程编号",
      "width": "130"
    },
    {
      "key": "opTemp",
      "label": "操作温度\n°C",
      "width": "180",
      "type": "range"
    },
    {
      "key": "opPressure",
      "label": "操作压力\nkPa(g)",
      "width": "180",
      "type": "range"
    },
    {
      "key": "density",
      "label": "密度\nt/m³",
      "width": "180",
      "type": "range"
    },
    {
      "key": "solidContent",
      "label": "固体含量\n% w/w",
      "width": "180",
      "type": "range"
    },
    {
      "key": "particleSize",
      "label": "标称粒径D50\n微米",
      "width": "180",
      "type": "range"
    },
    {
      "key": "phRange",
      "label": "pH值范围",
      "width": "180",
      "type": "range"
    },
    {
      "key": "chlorideConc",
      "label": "氯化物浓度\nmg/L",
      "width": "180",
      "type": "range"
    },
    {
      "key": "flammable",
      "label": "易燃或可燃",
      "width": "110"
    },
    {
      "key": "corrosive",
      "label": "腐蚀性",
      "width": "100"
    },
    {
      "key": "remark",
      "label": "备注",
      "width": "300"
    },
    {
      "key": "name",
      "label": "名称",
      "width": "130"
    },
    {
      "key": "location",
      "label": "使用位置",
      "width": "200"
    }
  ],
  "mergedB": [
    {
      "start": 14,
      "end": 16,
      "value": "工艺固体类"
    },
    {
      "start": 0,
      "end": 4,
      "value": "空气类"
    },
    {
      "start": 7,
      "end": 12,
      "value": "工艺矿浆类"
    },
    {
      "start": 16,
      "end": 21,
      "value": "试剂类"
    },
    {
      "start": 21,
      "end": 23,
      "value": "蒸汽类"
    },
    {
      "start": 29,
      "end": 32,
      "value": "排水类"
    },
    {
      "start": 4,
      "end": 7,
      "value": "工艺溶液类"
    },
    {
      "start": 12,
      "end": 14,
      "value": "工艺排气类"
    },
    {
      "start": 23,
      "end": 29,
      "value": "水类"
    }
  ],
  "mergedInfo": [
    {
      "rowIndex": 0,
      "rowspan": 4,
      "isFirst": true
    },
    {
      "rowIndex": 1,
      "rowspan": 4,
      "isFirst": false
    },
    {
      "rowIndex": 2,
      "rowspan": 4,
      "isFirst": false
    },
    {
      "rowIndex": 3,
      "rowspan": 4,
      "isFirst": false
    },
    {
      "rowIndex": 4,
      "rowspan": 3,
      "isFirst": true
    },
    {
      "rowIndex": 5,
      "rowspan": 3,
      "isFirst": false
    },
    {
      "rowIndex": 6,
      "rowspan": 3,
      "isFirst": false
    },
    {
      "rowIndex": 7,
      "rowspan": 5,
      "isFirst": true
    },
    {
      "rowIndex": 8,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 9,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 10,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 11,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 12,
      "rowspan": 2,
      "isFirst": true
    },
    {
      "rowIndex": 13,
      "rowspan": 2,
      "isFirst": false
    },
    {
      "rowIndex": 14,
      "rowspan": 2,
      "isFirst": true
    },
    {
      "rowIndex": 15,
      "rowspan": 2,
      "isFirst": false
    },
    {
      "rowIndex": 16,
      "rowspan": 5,
      "isFirst": true
    },
    {
      "rowIndex": 17,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 18,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 19,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 20,
      "rowspan": 5,
      "isFirst": false
    },
    {
      "rowIndex": 21,
      "rowspan": 2,
      "isFirst": true
    },
    {
      "rowIndex": 22,
      "rowspan": 2,
      "isFirst": false
    },
    {
      "rowIndex": 23,
      "rowspan": 6,
      "isFirst": true
    },
    {
      "rowIndex": 24,
      "rowspan": 6,
      "isFirst": false
    },
    {
      "rowIndex": 25,
      "rowspan": 6,
      "isFirst": false
    },
    {
      "rowIndex": 26,
      "rowspan": 6,
      "isFirst": false
    },
    {
      "rowIndex": 27,
      "rowspan": 6,
      "isFirst": false
    },
    {
      "rowIndex": 28,
      "rowspan": 6,
      "isFirst": false
    },
    {
      "rowIndex": 29,
      "rowspan": 3,
      "isFirst": true
    },
    {
      "rowIndex": 30,
      "rowspan": 3,
      "isFirst": false
    },
    {
      "rowIndex": 31,
      "rowspan": 3,
      "isFirst": false
    }
  ],
  "data": [
    {
      "id": 1,
      "category": "空气类",
      "usage": "低压空气",
      "code": "ALP",
      "pfdNo": "",
      "opTemp": "30",
      "opPressure": "500",
      "density": 0.0059,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "不适用/无此项",
      "flammable": "否",
      "corrosive": "否",
      "remark": "用于工艺搅拌槽的反应供气、吹扫作业，以及过滤设备等各类装置的用气需求。",
      "name": "低压空气",
      "location": "全厂"
    },
    {
      "id": 2,
      "category": "",
      "usage": "高压空气",
      "code": "AHP",
      "pfdNo": "",
      "opTemp": "30-100",
      "opPressure": "10500",
      "density": 0.13,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "不适用/无此项",
      "flammable": "否",
      "corrosive": "否",
      "remark": "用于工艺管道吹扫作业",
      "name": "高压空气",
      "location": "HPAL 硫酸管道吹扫"
    },
    {
      "id": 3,
      "category": "",
      "usage": "仪表空气",
      "code": "AIN",
      "pfdNo": "",
      "opTemp": "30",
      "opPressure": "800",
      "density": 0.089,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "不适用/无此项",
      "flammable": "否",
      "corrosive": "否",
      "remark": "无油",
      "name": "仪表用气",
      "location": "全厂"
    },
    {
      "id": 4,
      "category": "",
      "usage": "杂用空气",
      "code": "APL",
      "pfdNo": "",
      "opTemp": "40",
      "opPressure": "800",
      "density": 0.01,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "不适用/无此项",
      "flammable": "否",
      "corrosive": "否",
      "remark": "必要时，供过滤器及其他设备使用。",
      "name": "杂用风",
      "location": "全厂"
    },
    {
      "id": 8,
      "category": "工艺溶液类",
      "usage": "高酸性溶液",
      "code": "SAH",
      "pfdNo": "",
      "opTemp": "25~100",
      "opPressure": "200~500",
      "density": "1.0-1.2",
      "solidContent": "无此项",
      "particleSize": "10",
      "phRange": "<2",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "是",
      "remark": "含有游离酸的酸性水溶液，为浓密机溢流液。该物料固相含量通常极低，部分工况下也可为稀矿浆。",
      "name": "高酸溶液",
      "location": "CCD"
    },
    {
      "id": 10,
      "category": "",
      "usage": "低酸性溶液",
      "code": "SAL",
      "pfdNo": "",
      "opTemp": "25~100",
      "opPressure": "200~500",
      "density": "1.0-1.2",
      "solidContent": "<1",
      "particleSize": "10",
      "phRange": "2~7",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "是",
      "remark": "含潜在游离酸的酸性水溶液，来自浓密机溢流。固体含量通常极低，部分工况下该流体可为稀矿浆。",
      "name": "低酸溶液",
      "location": "除铁铝"
    },
    {
      "id": 11,
      "category": "",
      "usage": "中性溶液",
      "code": "SNN ",
      "pfdNo": "",
      "opTemp": "25~95",
      "opPressure": "200~500",
      "density": "1.0~1.2",
      "solidContent": "<1",
      "particleSize": "10",
      "phRange": "6~8",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "否",
      "remark": "中性溶液，浓密机溢流液。固体含量通常极低，部分工况下该物料流可为稀矿浆。",
      "name": "中性溶液",
      "location": "沉镍钴、尾渣压滤、产品压滤、镍钴CCD洗涤"
    },
    {
      "id": "",
      "category": "工艺矿浆类",
      "usage": "原矿浆",
      "code": "POS",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "1.1~1.45",
      "solidContent": "14.5-45",
      "particleSize": "不适用/无此项",
      "phRange": "~7",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "否",
      "remark": "",
      "name": "原矿浆",
      "location": "矿浆贮存、HPAL"
    },
    {
      "id": 14,
      "category": "",
      "usage": "高温高压矿浆",
      "code": "SLP",
      "pfdNo": "",
      "opTemp": "165~255",
      "opPressure": "780~6000",
      "density": "根据物料平衡",
      "solidContent": "根据物料平衡",
      "particleSize": "TBC",
      "phRange": "<2",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "是",
      "remark": "",
      "name": "HPAL高压矿浆",
      "location": "HPAL"
    },
    {
      "id": 15,
      "category": "",
      "usage": "酸性矿浆",
      "code": "SLA",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "根据物料平衡",
      "solidContent": "根据物料平衡",
      "particleSize": "10",
      "phRange": "<6",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "是",
      "remark": "溶液中含游离酸的矿浆，例如洗涤液 / 洗涤矿浆。",
      "name": "酸性矿浆",
      "location": "HPAL,矿浆中和、除铁铝"
    },
    {
      "id": "",
      "category": "",
      "usage": "中性或碱性矿浆",
      "code": "SLN",
      "pfdNo": "",
      "opTemp": "25~95",
      "opPressure": "400~600",
      "density": "1.1~1.3",
      "solidContent": "根据物料平衡",
      "particleSize": "10 - 500",
      "phRange": "6~8",
      "chlorideConc": "<1  or >10000,根据物料平衡",
      "flammable": "否",
      "corrosive": "是",
      "remark": "MHP 中性矿浆",
      "name": "中性矿浆",
      "location": "沉镍钴、产品压滤、镍钴CCD洗涤"
    },
    {
      "id": 16,
      "category": "",
      "usage": "尾渣矿浆",
      "code": "PTA",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "根据物料平衡",
      "solidContent": "根据物料平衡",
      "particleSize": "10",
      "phRange": ">6",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "否",
      "remark": "1.矿浆可能含有未完全反应的石灰石。\n2.存在非正常运行工况，此时矿浆呈酸性。",
      "name": "尾渣矿浆",
      "location": "尾渣中和、尾渣压滤"
    },
    {
      "id": 17,
      "category": "工艺排气类",
      "usage": "工艺排气",
      "code": "VPR",
      "pfdNo": "",
      "opTemp": "25~100",
      "opPressure": "<20",
      "density": "根据物料平衡",
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "-",
      "flammable": "否",
      "corrosive": "变量",
      "remark": "排放气体可能含有水蒸气、二氧化碳、酸性物质、蒸汽和 / 或空气。",
      "name": "搅拌槽排气",
      "location": "全厂"
    },
    {
      "id": 18,
      "category": "",
      "usage": "工艺加压排气",
      "code": "VPO",
      "pfdNo": "",
      "opTemp": "90~255",
      "opPressure": "10~6000",
      "density": "根据物料平衡",
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "<6",
      "chlorideConc": "不适用/无此项",
      "flammable": "否",
      "corrosive": "是",
      "remark": "排放气可能含有水蒸气、酸性物质、空气等组分。",
      "name": "排气",
      "location": "HPAL"
    },
    {
      "id": 21,
      "category": "工艺固体类",
      "usage": "尾渣压滤渣",
      "code": "SST",
      "pfdNo": "",
      "opTemp": "25~70",
      "opPressure": "N/A",
      "density": "根据物料平衡",
      "solidContent": "70",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "否",
      "remark": "尾渣",
      "name": "尾渣",
      "location": "尾渣压滤"
    },
    {
      "id": 23,
      "category": "",
      "usage": "氢氧化镍钴（MHP）物料",
      "code": "SSP",
      "pfdNo": "",
      "opTemp": "45~85",
      "opPressure": "N/A",
      "density": "根据物料平衡",
      "solidContent": "50",
      "particleSize": "不适用/无此项",
      "phRange": "不适用/无此项",
      "chlorideConc": "不适用/无此项",
      "flammable": "否",
      "corrosive": "No",
      "remark": "氢氧化镍、氢氧化钴产品",
      "name": "MHP",
      "location": "产品压滤"
    },
    {
      "id": 25,
      "category": "试剂类",
      "usage": "浓硫酸 H2SO4",
      "code": "LSA",
      "pfdNo": "",
      "opTemp": "25~40",
      "opPressure": "200~6000",
      "density": "1.84",
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "<1",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "是",
      "remark": "浓度约98%",
      "name": "浓硫酸",
      "location": "HPAL"
    },
    {
      "id": 27,
      "category": "",
      "usage": "氢氧化钠 NaOH",
      "code": "LSH",
      "pfdNo": "",
      "opTemp": "25~40",
      "opPressure": "200~500",
      "density": "1.2~1.5",
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": ">14",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "是",
      "remark": "浓度约 20%～50%",
      "name": "液碱",
      "location": "氢氧化钠贮槽、沉镍钴"
    },
    {
      "id": "",
      "category": "",
      "usage": "石灰乳",
      "code": "LMS",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "1.16",
      "solidContent": "25",
      "particleSize": "不适用/无此项",
      "phRange": "12 (约)",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "是",
      "remark": "",
      "name": "石灰乳",
      "location": "石灰乳制备、沉镍钴、尾渣中和"
    },
    {
      "id": "",
      "category": "",
      "usage": "石灰石矿浆",
      "code": "LLS",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "1.28~1.39",
      "solidContent": "30 - 40",
      "particleSize": "10",
      "phRange": "9 (约)",
      "chlorideConc": "根据物料平衡",
      "flammable": "否",
      "corrosive": "是",
      "remark": "使用工艺水",
      "name": "石灰石浆",
      "location": "矿浆中和、沉镍钴、除铁铝"
    },
    {
      "id": "",
      "category": "",
      "usage": "絮凝剂",
      "code": "LFL",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "1.0",
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6~9",
      "chlorideConc": "变量",
      "flammable": "否",
      "corrosive": "否",
      "remark": "以工艺水配制的絮凝剂溶液",
      "name": "絮凝剂",
      "location": "全厂"
    },
    {
      "id": 29,
      "category": "蒸汽类",
      "usage": "高压蒸汽",
      "code": "GSH",
      "pfdNo": "",
      "opTemp": "202~282 根据物料平衡",
      "opPressure": "1501~6500 根据物料平衡",
      "density": "0.008~0.034根据物料平衡",
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "-",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "否",
      "remark": "用于高压酸浸",
      "name": "高压蒸汽",
      "location": "HPAL"
    },
    {
      "id": 31,
      "category": "",
      "usage": "工艺闪蒸蒸汽",
      "code": "STF",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "根据物料平衡",
      "density": "根据物料平衡",
      "solidContent": "<3.0",
      "particleSize": "TBC",
      "phRange": "-",
      "chlorideConc": "-",
      "flammable": "否",
      "corrosive": "是",
      "remark": "闪蒸 / 蒸发蒸汽可源自酸性、中性或碱性工艺系统（含夹带物料）",
      "name": "闪蒸蒸汽",
      "location": "HPAL"
    },
    {
      "id": 33,
      "category": "水类",
      "usage": "工艺水",
      "code": "WPR",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "200~1600",
      "density": 1,
      "solidContent": "<0.1",
      "particleSize": "不适用/无此项",
      "phRange": "6~8",
      "chlorideConc": "TBC",
      "flammable": "否",
      "corrosive": "否",
      "remark": "用作除盐水、消防水、冷却水水源",
      "name": "工艺水",
      "location": "全厂"
    },
    {
      "id": 34,
      "category": "",
      "usage": "脱盐水",
      "code": "WDI",
      "pfdNo": "",
      "opTemp": "根据物料平衡",
      "opPressure": "200~500",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6~8",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "否",
      "remark": "高压酸浸设备用水",
      "name": "脱盐水",
      "location": "HPAL"
    },
    {
      "id": 35,
      "category": "",
      "usage": "冷却水给水",
      "code": "WCS",
      "pfdNo": "",
      "opTemp": "33",
      "opPressure": "200~500",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6~8",
      "chlorideConc": "跟工艺水要求一致",
      "flammable": "否",
      "corrosive": "否",
      "remark": "",
      "name": "循环水给水",
      "location": "HPAL"
    },
    {
      "id": 36,
      "category": "",
      "usage": "冷却水回水",
      "code": "WCR",
      "pfdNo": "",
      "opTemp": "40",
      "opPressure": "200~500",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6~8",
      "chlorideConc": "跟工艺水要求一致",
      "flammable": "否",
      "corrosive": "否",
      "remark": "",
      "name": "循环水回水",
      "location": "HPAL"
    },
    {
      "id": 37,
      "category": "",
      "usage": "密封水",
      "code": "WAS",
      "pfdNo": "",
      "opTemp": "25~40",
      "opPressure": "根据物料平衡",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6~9",
      "chlorideConc": "<1",
      "flammable": "否",
      "corrosive": "否",
      "remark": "用于高压釜搅拌系统",
      "name": "密封水",
      "location": "HPAL"
    },
    {
      "id": 38,
      "category": "",
      "usage": "消防水",
      "code": "WFI",
      "pfdNo": "",
      "opTemp": "25~40",
      "opPressure": "TBC",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6~9",
      "chlorideConc": "跟工艺水要求一致",
      "flammable": "否",
      "corrosive": "否",
      "remark": "",
      "name": "消防水",
      "location": "全厂"
    },
    {
      "id": 40,
      "category": "排水类",
      "usage": "洗涤废水或雨水排放 — 酸性",
      "code": "DEA",
      "pfdNo": "",
      "opTemp": "30",
      "opPressure": "<500",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "<6",
      "chlorideConc": "变量",
      "flammable": "否",
      "corrosive": "是",
      "remark": "",
      "name": "酸性污水",
      "location": "全厂"
    },
    {
      "id": 41,
      "category": "",
      "usage": "洗涤废水或雨水排放 — 碱性",
      "code": "DEL",
      "pfdNo": "",
      "opTemp": "30",
      "opPressure": "<500",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": ">8",
      "chlorideConc": "<500",
      "flammable": "否",
      "corrosive": "是",
      "remark": "",
      "name": "碱性污水",
      "location": "全厂"
    },
    {
      "id": 42,
      "category": "",
      "usage": "洗涤废水或雨水排放 — 中性",
      "code": "DEN",
      "pfdNo": "",
      "opTemp": "30",
      "opPressure": "<500",
      "density": 1,
      "solidContent": "无此项",
      "particleSize": "不适用/无此项",
      "phRange": "6-8",
      "chlorideConc": "<500",
      "flammable": "否",
      "corrosive": "否",
      "remark": "",
      "name": "中性污水",
      "location": "全厂"
    }
  ]
};