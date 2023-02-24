(function(){
    // 기술산업 분류별 키워드 빈도량
    var jijeogjaesangwon5 = document.getElementById("jijeogjaesangwon5").getContext('2d');
    var chart5 = new Chart(jijeogjaesangwon5, {
        type: 'bar',
        data: {
            labels: ["전기공학","화학공학","기계","자동차","기구","환경","토목공학","에너지","기타"],
            datasets: [{
                label: '빈도량',
                backgroundColor: ["#FFC000","#FFD966","#A9D18E","#548235","#66CCFF","#0070C0","#002060","#DDB9F1","#BFBFBF"],
                borderWidth: 0,
                data: [8144, 4309, 2258, 1852, 2594, 1261, 847, 493, 501],
                order: 1
            }, {
                label: '키워드',
                backgroundColor: "#ff0000",
                borderColor: "#ff0000",
                borderWidth: 1,
                data: [46, 33, 18, 8, 15, 8, 6, 4, 3],
                type: 'line',
                order: 0,
            }],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: '기술산업 분류별 키워드 빈도량',
                },
                legend: {
                    display: false,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                grid: {
                    display: false,
                }
              },
              y: {
                stacked: false,
                type: 'logarithmic',
              }
            },
        }
    });
    
    // 2020년 기술분야별 특허·실용신안 등록
    var jijeogjaesangwon6 = document.getElementById("jijeogjaesangwon6").getContext('2d');
    var chart6 = new Chart(jijeogjaesangwon6, {
        type: 'bar',
        data: {
            labels: ["전기공학","화학공학","기계","기구","토목공학","나머지분야"],
            datasets: [{
                label: '빈도량',
                backgroundColor: ["#FFC000","#FFD966","#A9D18E","#66CCFF","#002060","#BFBFBF"],
                borderWidth: 0,
                pointStyle: 'rect',
                data: [46490,28333,28191,19234,7279,7295],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: ' 2020년 기술분야별 특허·실용신안 등록',
                },
                legend: {
                    position: "bottom",
                    display: false,
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                grid: {
                    display: false,
                }
              },
              y: {
                stacked: false,
              }
            },
        }
    });
    
    // 주요 키워드별 빈도량
    var jijeogjaesangwon7 = document.getElementById("jijeogjaesangwon7").getContext('2d');
    var chart7 = new Chart(jijeogjaesangwon7, {
        type: 'bar',
        data: {
            labels: ["차량/자동차","수지/섬유","냉각/온도","센서","가스","통신","공기","포장","전지","반도체","콘크리트","치료","태양","로봇"],
            datasets: [{
                label: '단어 언급 기업 빈도',
                backgroundColor: "#FF5050",
                borderWidth: 0,
                pointStyle: 'rect',
                data: [970,479,453,339,337,321,272,266,264,263,232,193,187,94],
            },
            {
                label: '단어의 총 언급 빈도',
                backgroundColor: "#002060",
                borderWidth: 0,
                pointStyle: 'rect',
                data: [3231,1436,812,888,1134,855,526,736,1202,1415,662,580,648,360],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: '주요 키워드별 빈도량',
                },
                legend: {
                    position: "bottom",
                    display: false,
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                grid: {
                    display: false,
                }
              },
              y: {
                stacked: false,
              }
            },
        }
    });
    
    // 연도별 지적재산권 등록 건수
    var jijeogjaesangwon1 = document.getElementById("jijeogjaesangwon1").getContext('2d');
    var chart1 = new Chart(jijeogjaesangwon1, {
        type: 'bar',
        data: {
            labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
            datasets: [{
                label: '특허',
                backgroundColor: "#005A9E",
                borderWidth: 0,
                pointStyle: 'rect',
                data: [69487, 95544, 113829, 127957, 129351, 100921, 109494, 120564, 118684, 124876, 133401],
            }, {
                label: '실용신안',
                backgroundColor: "#1BC4F9",
                borderWidth: 0,
                pointStyle: 'rect',
                data: [3657, 5029, 5991, 5332, 5390, 4205, 2235, 3091, 3043, 3202, 3421],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: '연도별 지적재산권 등록 건수 그래프',
                },
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
                grid: {
                    display: false,
                }
              },
              y: {
                stacked: true,
                max: 160000,
              }
            },
        }
    });
    
    // 2020년 개인/법인별 지적재산권 등록 건수 - 특허
    var jijeogjaesangwon2 = document.getElementById("jijeogjaesangwon2").getContext('2d');
    var chart2 = new Chart(jijeogjaesangwon2, {
        type: 'doughnut',
        data: {
            labels: ["개인","법인"],
            datasets: [{
                label: '특허',
                backgroundColor: ["#FF5050","#007DDA"],
                borderWidth: 0,
                pointStyle: 'rect',
                data: [16, 86],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '[ 특허 ]',
                    font: {
                        size: 18,
                        color: "#444",
                    }
                },
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + context.raw + "%";
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: false,
        },
    });
    
    // 2020년 개인/법인별 지적재산권 등록 건수 - 실용신안
    var jijeogjaesangwon3 = document.getElementById("jijeogjaesangwon3").getContext('2d');
    var chart3 = new Chart(jijeogjaesangwon3, {
        type: 'doughnut',
        data: {
            labels: ["개인","법인"],
            datasets: [{
                label: '실용신안',
                backgroundColor: ["#FF5050","#007DDA"],
                borderWidth: 0,
                pointStyle: 'rect',
                data: [34, 66],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '[ 실용신안 ]',
                    font: {
                        size: 18,
                        color: "#444",
                    }
                },
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + context.raw + "%";
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: false,
        },
    });
    
})();

(function(){

    // 형태소 분석결과 : 범용불용 단어 - 키워드 차트
    function keyword() {

        am4core.useTheme(am4themes_animated);

        am4core.useTheme(am4themes_animated);
        var chart = am4core.create("jijeogjaesangwon4", am4plugins_wordCloud.WordCloud);
        var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

        series.data = [
            { tag: "방법", value: 10, "color": am4core.color("#FBE723") },
            { tag: "장치", value: 10, "color": am4core.color("#FBE723") },
            { tag: "이용", value: 9, "color": am4core.color("#1F9F88") },
            { tag: "제조", value: 9, "color": am4core.color("#1F9F88") },
            { tag: "시스템", value: 8, "color": am4core.color("#1F9F88") },
            { tag: "구조", value: 8, "color": am4core.color("#42BE71") },
            { tag: "구비", value: 8, "color": am4core.color("#42BE71") },
            { tag: "제어", value: 7, "color": am4core.color("#42BE71") },
            { tag: "포함", value: 7, "color": am4core.color("#42BE71") },
            { tag: "방지", value: 7, "color": am4core.color("#2E6D8E") },
            { tag: "조성", value: 6, "color": am4core.color("#2E6D8E") },
            { tag: "기능", value: 6, "color": am4core.color("#2E6D8E") },
            { tag: "자동", value: 6, "color": am4core.color("#2E6D8E") },
            { tag: "처리", value: 5, "color": am4core.color("#D2E21B") },
            { tag: "가능", value: 5, "color": am4core.color("#D2E21B") },
            { tag: "조립", value: 5, "color": am4core.color("#D2E21B") },
            { tag: "조절", value: 4, "color": am4core.color("#D2E21B") },
            { tag: "모듈", value: 4, "color": am4core.color("#440256") },
            { tag: "차량", value: 4, "color": am4core.color("#440256") },
            { tag: "판", value: 3, "color": am4core.color("#440256") },
            { tag: "복합", value: 3, "color": am4core.color("#440256") },
            { tag: "사용", value: 2, "color": am4core.color("#273D7F") },
            { tag: "측정", value: 2, "color": am4core.color("#273D7F") },
            { tag: "공급", value: 1, "color": am4core.color("#273D7F") },
            { tag: "연결", value: 1, "color": am4core.color("#273D7F") },
            { tag: "", value: 0, "color": am4core.color("#273D7F") },
        ];

        series.dataFields.word = "tag";
        series.dataFields.value = "value";

        series.colors = new am4core.ColorSet();
        series.colors.passOptions = {};

        series.labels.template.propertyFields.fill = "color";
    }

    // 연관어 및 네트워크 분석 : 요약
    function forceDirectedTree() {
        am4core.useTheme(am4themes_animated);

        // Create chart
        var chart = am4core.create("jijeogjaesangwon8", am4plugins_forceDirected.ForceDirectedTree);


        // Create series
        var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

        // Set data
        series.data = [{
            "name": "차량/자동차",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "전기자동차", "value": 90, "color": "#757575", },
                { "name": "주행", "value": 90, "color": "#757575", },
                { "name": "영상", "value": 90, "color": "#757575", "link": ["자율주행분야", "카메라"] },
                { "name": "카메라", "value": 90, "color": "#757575", },
            ]
        },{
            "name": "센서/감지",
            "value": 100,
            "color": "#1E90FF",
            "link": ["차량/자동차"],
            "children": [
                { "name": "이미지", "value": 90, "color": "#757575", },
            ]
        },{
            "name": "가스",
            "value": 100,
            "color": "#1E90FF",
            "link": ["센서/감지"],
            "children": [
                { "name": "배출", "value": 90, "color": "#757575", },
                { "name": "정화/흡입/필터", "value": 90, "color": "#757575", },
            ]
        },{
            "name": "온도/냉각",
            "value": 100,
            "color": "#1E90FF",
            "link": ["센서/감지","가스"],
            "children": [
                { "name": "냉장고/정수기", "value": 90, "color": "#757575" },
            ]
        },{
            "name": "공기",
            "value": 100,
            "color": "#1E90FF",
            "link": ["온도/냉각"],
            "children": [
                { "name": "공기조화/환기/정화/필터", "value": 90, "color": "#757575" },
            ]
        },{
            "name": "반도체",
            "value": 100,
            "color": "#1E90FF",
            "link": ["온도/냉각"],
            "children": [
                { "name": "발광소자", "value": 90, "color": "#757575", "link": ["온도/냉각"], },
                { "name": "웨이퍼", "value": 90, "color": "#757575" },
                { "name": "전극", "value": 90, "color": "#757575" },
                { "name": "박막/염료/감응", "value": 90, "color": "#757575", "link": ["태양전지"], },
            ]
        },{
            "name": "전지",
            "value": 100,
            "color": "#1E90FF",
        },{
            "name": "태양",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "태양전지", "value": 90, "color": "#757575", "link": ["반도체", "에너지"]},
                { "name": "에너지", "value": 90, "color": "#757575",
                    "children": [
                        { "name": "전력", "value": 90, "color": "#757575" },      
                        { "name": "리튬전지", "value": 90, "color": "#757575", "link": ["전지"] },      
                    ]
                },
                { "name": "전극", "value": 90, "color": "#757575" },
            ]
        },{
            "name": "통신",
            "value": 100,
            "color": "#1E90FF",
            "link": ["영상", "카메라"],
            "children": [
                { "name": "인터넷", "value": 90, "color": "#757575" },
                { "name": "휴대폰", "value": 90, "color": "#757575" },
                { "name": "무선", "value": 90, "color": "#757575" },
            ]
        },{
            "name": "로봇",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "수술/관절", "value": 90, "color": "#757575" },
                { "name": "수중/방수/소방", "value": 90, "color": "#757575" },
                { "name": "유아/교육/학습", "value": 90, "color": "#757575" },
                { "name": "자유주행분야", "value": 90, "color": "#757575", "link": ["주행"],
                  "children" : [
                    { "name": "무인", "value": 90, "color": "#757575",},
                    { "name": "데이터", "value": 90, "color": "#757575", "link": ["영상", "카메라", "센서/감지", "무선", "통신"] },
                  ]
                },
            ]
        },{
            "name": "주차",
            "value": 90,
            "color": "#757575",
            "link": ["데이터"]
        },{
            "name": "연료",
            "value": 90,
            "color": "#757575",
            "link": ["가스"],
            "children": [
                { "name": "마스크/호흡", "value": 90 },
            ]
        },{
            "name": "보일러/챔버/버너",
            "value": 90,
            "color": "#757575",
            "link": ["가스"]
        },{
            "name": "수지/섬유",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "고무/비닐/아크릴/에폭시", "value": 90, "color": "#757575"},
                { "name": "나무/탄소", "value": 90, "color": "#757575"},
            ]
        },{
            "name": "치료",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "질환:당뇨/비만", "value": 90, "color": "#757575"},
                { "name": "피부: 주름/아토피/여드름", "value": 90, "color": "#757575"},
                { "name": "레이저/초음파", "value": 90, "color": "#757575"},
            ]
        },{
            "name": "포장",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "화장품", "value": 90, "color": "#757575"},
                { "name": "알약", "value": 90, "color": "#757575"},
                { "name": "식품", "value": 90, "color": "#757575"},
            ]
        },{
            "name": "콘크리트",
            "value": 100,
            "color": "#1E90FF",
            "children": [
                { "name": "철근/타설/거더", "value": 90, "color": "#757575"},
                { "name": "건설/폐기물/골재", "value": 90, "color": "#757575"},
            ]
        }];

        // Set up data fields
        series.dataFields.value = "value";
        series.dataFields.name = "name";
        series.dataFields.children = "children";
        series.dataFields.color = "color";
        series.dataFields.id = "name";
        series.dataFields.linkWith = "link";

        // Add labels
        series.nodes.template.label.text = "{name}";
        series.nodes.template.tooltipText = false;
        series.nodes.template.label.wrap = true;
        series.links.template.distance = 1.1;
        series.fontSize = 10;
        series.minRadius = 5;
        series.maxRadius = 30;
        series.centerStrength = 1.2;
    }

    $(".data-analysis-conts .acco-guide > li").on('click', function() {
        if( $(this).index() === 1 && !$(this).is('.on') ) {
            // 2. 형태소 분석결과
            keyword();
        } else if ( $(this).index() === 5 && !$(this).is('.on') ) {
            // 6. 연관어 및 네트워크 분석
            forceDirectedTree();
        }
    });

    
})();