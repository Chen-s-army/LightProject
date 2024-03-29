import { getChartListColor } from "@/utils/color"
import { getDateArray, getRandomArray } from "@/utils/charts"

/** 折线图数据 */
// eslint-disable-next-line import/prefer-default-export
export function getFolderLineDataSet({
  dateTime = [],
  placeholderColor,
  borderColor,
}: { dateTime?: Array<string> } & Record<string, string>) {
  let dateArray: Array<string> = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  if (dateTime.length > 0) {
    const divideNum = 7
    dateArray = getDateArray(dateTime, divideNum)
  }
  return {
    color: getChartListColor(),
    grid: {
      top: "5%",
      right: "10px",
      left: "30px",
      bottom: "60px",
    },
    legend: {
      left: "center",
      bottom: "0",
      orient: "horizontal", // legend 横向布局。
      data: ["访问次数"],
      textStyle: {
        fontSize: 12,
        color: placeholderColor,
      },
    },
    xAxis: {
      type: "category",
      data: dateArray,
      boundaryGap: false,
      axisLabel: {
        color: placeholderColor,
      },
      axisLine: {
        lineStyle: {
          color: borderColor,
          width: 1,
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: placeholderColor,
      },
      splitLine: {
        lineStyle: {
          color: borderColor,
        },
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        showSymbol: true,
        symbol: "circle",
        symbolSize: 8,
        name: "访问次数",
        stack: "总量",
        data: [
          getRandomArray(),
          getRandomArray(),
          getRandomArray(),
          getRandomArray(),
          getRandomArray(),
          getRandomArray(),
          getRandomArray(),
        ],
        type: "line",
        itemStyle: {
          normal: {
            borderColor,
            borderWidth: 1,
          },
        },
      },
    ],
  }
}
