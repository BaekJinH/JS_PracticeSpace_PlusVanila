(function(){
    // 연령대별 우울 평균 점수
    var chartGraph1 = document.getElementById("chartGraph1").getContext('2d');
    var chart1 = new Chart(chartGraph1, {
    type: 'line',
        data: {
            labels: ["20년 3월","20년 5월","20년 9월","20년 12월","21년 3월","21년 6월"],
            datasets: [{
                label: '전체',
                data: [5.1,5.1,5.9,5.5,5.7,5.0],
                backgroundColor: "#000",
                borderColor: "#000",
                pointStyle: 'rectRot',
            }, {
                label: '19~29세',
                data: [4.7,5.7,6.2,6.4,6.7,5.8],
                backgroundColor: "#FFC000",
                borderColor: "#FFC000",
                pointStyle: 'rectRot',
            }, {
                label: '30~39세',
                data: [5.9,6.1,7.3,6.0,6.7,5.6],
                backgroundColor: "#ED7D31",
                borderColor: "#ED7D31",
                pointStyle: 'rectRot',
            }, {
                label: '40~49세',
                data: [5.4,5.1,5.9,5.4,5.5,5.2],
                backgroundColor: "#70AD47",
                borderColor: "#70AD47",
                pointStyle: 'rectRot',
            }, {
                label: '50~59세',
                data: [4.7,4.9,5.4,5.3,5.2,4.4],
                backgroundColor: "#F4ABCC",
                borderColor: "#F4ABCC",
                pointStyle: 'rectRot',
            }, {
                label: '60세 이상',
                data: [4.9,3.8,4.5,4.5,4.3,4.1],
                backgroundColor: "#B4C7E7",
                borderColor: "#B4C7E7",
                pointStyle: 'rectRot',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: false,
                text: '연령대별 우울 평균 점수'
              },
              legend: {
                labels: {
                  usePointStyle: true,
                  padding: 10,
                },
              }
            },
            scales: {
                x: {
                    grid: {
                        color: '#fff',
                    }
                },
                y: {
                    type: 'linear',
                    display: false,
                    position: 'left',
                },
            }
        },
    });
    
    // 연령대별 자살 생각 비율
    var chartGraph2 = document.getElementById("chartGraph2").getContext('2d');
    var chart2 = new Chart(chartGraph2, {
        type: 'line',
        data: {
            labels: ["20년 3월","20년 5월","20년 9월","20년 12월","21년 3월","21년 6월"],
            datasets: [{
                label: '전체',
                data: [9.66,10.08,13.81,13.43,16.26,12.41],
                backgroundColor: "#000",
                borderColor: "#000",
                pointStyle: 'rectRot',
            }, {
                label: '19~29세',
                data: [10.62,15.85,19.95,16.98,22.52,17.52],
                backgroundColor: "#FFC000",
                borderColor: "#FFC000",
                pointStyle: 'rectRot',
            }, {
                label: '30~39세',
                data: [12.57,12.11,18.25,14.65,21.91,14.65],
                backgroundColor: "#ED7D31",
                borderColor: "#ED7D31",
                pointStyle: 'rectRot',
            }, {
                label: '40~49세',
                data: [10.11,9.38,10.09,13.43,15.32,12.88],
                backgroundColor: "#70AD47",
                borderColor: "#70AD47",
                pointStyle: 'rectRot',
            }, {
                label: '50~59세',
                data: [6.81,8.51,11.41,12.45,12.50,9.34],
                backgroundColor: "#F4ABCC",
                borderColor: "#F4ABCC",
                pointStyle: 'rectRot',
            }, {
                label: '60세 이상',
                data: [8.62,4.71,10.70,9.86,10.03,8.17],
                backgroundColor: "#B4C7E7",
                borderColor: "#B4C7E7",
                pointStyle: 'rectRot',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: false,
                    text: '연령대별 우울 평균 점수'
                },
                legend: {
                    display: true,
                    labels: {
                    usePointStyle: true,
                },
              }
            },
            scales: {
                x: {
                    grid: {
                        color: '#fff',
                    }
                },
                y: {
                    type: 'linear',
                    display: false,
                    position: 'left',
                },
            }
        },
    });

    // 우울 평균 점수
    var chartGraph3 = document.getElementById("chartGraph3").getContext('2d');
    var chart3 = new Chart(chartGraph3, {
        type: 'line',
        data: {
            labels: ["20년 3월","20년 5월","20년 9월","20년 12월","21년 3월","21년 6월"],
            datasets: [{
                label: '전체',
                data: [5.1,5.1,5.9,5.5,5.7,5.0],
                backgroundColor: "#000",
                borderColor: "#000",
                pointStyle: 'rectRot',
            }, {
                label: '남',
                data: [4.4,4.7,5.1,4.8,5.2,4.7],
                backgroundColor: "#5B92FF",
                borderColor: "#5B92FF",
                pointStyle: 'rectRot',
            }, {
                label: '여',
                data: [5.9,5.6,6.6,6.2,6.2,5.3],
                backgroundColor: "#F4AACB",
                borderColor: "#F4AACB",
                pointStyle: 'rectRot',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: false,
                    text: '연령대별 우울 평균 점수'
                },
                legend: {
                    display: true,
                    labels: {
                    usePointStyle: true,
                },
              }
            },
            scales: {
                x: {
                    grid: {
                        color: '#fff',
                    }
                },
                y: {
                    type: 'linear',
                    display: false,
                    position: 'left',
                },
            }
        },
    });

    // 연령대별 자살 생각 비율
    var chartGraph4 = document.getElementById("chartGraph4").getContext('2d');
    var chart4 = new Chart(chartGraph4, {
        type: 'line',
        data: {
            labels: ["20년 3월","20년 5월","20년 9월","20년 12월","21년 3월","21년 6월"],
            datasets: [{
                label: '전체',
                data: [9.7,10.1,13.8,13.4,16.3,12.4],
                backgroundColor: "#000",
                borderColor: "#000",
                pointStyle: 'rectRot',
            }, {
                label: '남',
                data: [10.1,10.2,14.5,13.4,17.4,13.8],
                backgroundColor: "#5B92FF",
                borderColor: "#5B92FF",
                pointStyle: 'rectRot',
            }, {
                label: '여',
                data: [9.2,10.0,13.2,13.4,15.1,11.0],
                backgroundColor: "#F4AACB",
                borderColor: "#F4AACB",
                pointStyle: 'rectRot',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: false,
                    text: '연령대별 우울 평균 점수'
                },
                legend: {
                    display: true,
                    labels: {
                    usePointStyle: true,
                },
              }
            },
            scales: {
                x: {
                    grid: {
                        color: '#fff',
                    }
                },
                y: {
                    type: 'linear',
                    display: false,
                    position: 'left',
                },
            }
        },
    });
    
    // 여성 - 가구 비율 
    var chartGraph5 = document.getElementById("chartGraph5").getContext('2d');
    var chart5 = new Chart(chartGraph5, {
        type: 'pie',
        data: {
            labels: ["1인 가구","2인 가구","3~4인 가구","5인 이상 가구"],
            datasets: [{
                data: [54.21,21.64,21.48,2.67],
                backgroundColor: ['#C9E7E9', '#95CFE6', '#3CA6D0', '#00589A'],
                borderWidth: 0,
                pointStyle: 'rectRot',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: false,
                    text: '가구비율'
                },
                legend: {
                    display: true,
                    position: "right",
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + " : " + context.raw + "%";
                        }
                    }
                }
            },
        },
    });

    // 여성 - 경제적수준 - 연소득 평균
    var chartGraph6 = document.getElementById("chartGraph6").getContext('2d');
    var chart6 = new Chart(chartGraph6, {
        type: 'bar',
        data: {
            labels: ['연소득 평균'],
            datasets: [{
                label: ['20대 여성'],
                backgroundColor: '#95CFE6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [21971],
            },{
                label: ['30대 여성'],
                backgroundColor: '#52B0D6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [30335],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '연소득 평균',
                    position: 'bottom',
                    padding: {
                        top: 15,
                    },
                    font: {
                        size: 16,
                        weight: 700,
                        color: '#222',
                    }
                },
                legend: {
                    position: "bottom",
                    display: false,
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var txtLabel = context.label + " : " + context.formattedValue;
                            var txtNot = "(※단위 : 천원)";
                            var tooltip = new Array(txtLabel, txtNot);
                            return tooltip;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                display: false,
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

    // 여성 - 경제적수준 - 소비액 평균
    var chartGraph7 = document.getElementById("chartGraph7").getContext('2d');
    var chart7 = new Chart(chartGraph7, {
        type: 'bar',
        data: {
            labels: ['소비액 평균'],
            datasets: [{
                label: ['20대 여성'],
                backgroundColor: '#95CFE6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [755],
            },{
                label: ['30대 여성'],
                backgroundColor: '#52B0D6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [1488],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '소비액 평균',
                    position: 'bottom',
                    padding: {
                        top: 15,
                    },
                    font: {
                        size: 16,
                        weight: 700,
                        color: '#222',
                    }
                },
                legend: {
                    position: "right",
                    display: true,
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var txtLabel = context.label + " : " + context.formattedValue;
                            var txtNot = "(※단위 : 천원)";
                            var tooltip = new Array(txtLabel, txtNot);
                            return tooltip;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                display: false,
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

    // 여성 - 성/연령별 인구비율
    var chartGraph8 = document.getElementById("chartGraph8").getContext('2d');
    var chart8 = new Chart(chartGraph8, {
        type: 'bar',
        data: {
            labels: ['20세미만','20~29세','30~39세','40~49세','50~59세','60세이상'],
            datasets: [{
                label: ['여성'],
                backgroundColor: '#52B0D6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [6.06,15.30,7.42,6.04,6.43,10.82],
            },{
                label: ['남성'],
                backgroundColor: '#B6B6B6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [5.28,12.26,7.97,6.61,6.70,9.11],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: '성/연령별 인구비율',
                    position: 'bottom',
                    padding: {
                        top: 15,
                    },
                    font: {
                        size: 16,
                        weight: 700,
                        color: '#222',
                    }
                },
                legend: {
                    position: "right",
                    display: true,
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                        return context.dataset.label + " : " + context.raw + "%";
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            x: {
                stacked: false,
                display: true,
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

    // 남성 - 가구 비율 
    var chartGraph9 = document.getElementById("chartGraph9").getContext('2d');
    var chart9 = new Chart(chartGraph9, {
        type: 'pie',
        data: {
            labels: ["1인 가구","2인 가구","3~4인 가구","5인 이상 가구"],
            datasets: [{
                data: [53.15,22.59,21.42,2.84],
                backgroundColor: ['#C9E7E9', '#95CFE6', '#3CA6D0', '#00589A'],
                borderWidth: 0,
                pointStyle: 'rectRot',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: false,
                    text: '가구비율'
                },
                legend: {
                    display: true,
                    position: "right",
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + " : " + context.raw + "%";
                        }
                    }
                }
            },
        },
    });

    // 남성 - 경제적수준 - 연소득 평균
    var chartGraph10 = document.getElementById("chartGraph10").getContext('2d');
    var chart10 = new Chart(chartGraph10, {
        type: 'bar',
        data: {
            labels: ['연소득 평균'],
            datasets: [{
                label: ['20대 남성'],
                backgroundColor: '#95CFE6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [24184],
            },{
                label: ['30대 남성'],
                backgroundColor: '#52B0D6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [34957],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '연소득 평균',
                    position: 'bottom',
                    padding: {
                        top: 15,
                    },
                    font: {
                        size: 16,
                        weight: 700,
                        color: '#222',
                    }
                },
                legend: {
                    position: "bottom",
                    display: false,
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var txtLabel = context.label + " : " + context.formattedValue;
                            var txtNot = "(※단위 : 천원)";
                            var tooltip = new Array(txtLabel, txtNot);
                            return tooltip;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                display: false,
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

    // 남성 - 경제적수준 - 소비액 평균
    var chartGraph11 = document.getElementById("chartGraph11").getContext('2d');
    var chart11 = new Chart(chartGraph11, {
        type: 'bar',
        data: {
            labels: ['소비액 평균'],
            datasets: [{
                label: ['20대 남성'],
                backgroundColor: '#95CFE6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [857],
            },{
                label: ['30대 남성'],
                backgroundColor: '#52B0D6',
                borderWidth: 0,
                pointStyle: 'rect',
                data: [1557],
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '소비액 평균',
                    position: 'bottom',
                    padding: {
                        top: 15,
                    },
                    font: {
                        size: 16,
                        weight: 700,
                        color: '#222',
                    }
                },
                legend: {
                    position: "right",
                    display: true,
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var txtLabel = context.label + " : " + context.formattedValue;
                            var txtNot = "(※단위 : 천원)";
                            var tooltip = new Array(txtLabel, txtNot);
                            return tooltip;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
                display: false,
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

     // 남성 - 성/연령별 인구비율
     var chartGraph12 = document.getElementById("chartGraph12").getContext('2d');
     var chart12 = new Chart(chartGraph12, {
         type: 'bar',
         data: {
             labels: ['20세미만','20~29세','30~39세','40~49세','50~59세','60세이상'],
             datasets: [{
                 label: ['남성'],
                 backgroundColor: '#52B0D6',
                 borderWidth: 0,
                 pointStyle: 'rect',
                 data: [4.91,12.52,8.08,6.51,7.61,10.15],
             },{
                 label: ['여성'],
                 backgroundColor: '#B6B6B6',
                 borderWidth: 0,
                 pointStyle: 'rect',
                 data: [5.14,14.09,6.80,5.73,6.88,11.58],
             }],
         },
         options: {
             plugins: {
                 title: {
                     display: false,
                     text: '성/연령별 인구비율',
                     position: 'bottom',
                     padding: {
                         top: 15,
                     },
                     font: {
                         size: 16,
                         weight: 700,
                         color: '#222',
                     }
                 },
                 legend: {
                     position: "right",
                     display: true,
                     labels: {
                         usePointStyle: true,
                     },
                 },
                 tooltip: {
                     callbacks: {
                         label: function(context) {
                            return context.dataset.label + " : " + context.raw + "%";
                         }
                     }
                 }
             },
             responsive: true,
             maintainAspectRatio: false,
             scales: {
               x: {
                 stacked: false,
                 display: true,
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

})();