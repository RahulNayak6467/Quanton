import {
  CandlestickSeries,
  ColorType,
  createChart,
  AreaSeries,
  LineSeries,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

function StockChart(props) {
  const {
    data,
    colors: {
      color = "#10b981",
      widthBar,
      heightBar,
      backgroundColor = "#0D1117 ", // chart background
      lineColor = "#10b981", // color of the line
      textColor = "white", // axis text color
      areaTopColor = "#10b981", // gradient color at top
      areaBottomColor = "rgba(16, 185, 129, 0.28)", // gradient color at bottom (faded)
    } = {},
  } = props;

  const chartContainer = useRef();
  // console.log(color);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainer.current.clientWidth });
    };

    const chart = createChart(chartContainer.current, {
      layout: {
        background: { color: "transparent" },
        textColor: "#8B949E",
      },
      width: 200,
      height: 60,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },

      leftPriceScale: {
        visible: false,
        borderVisible: false,
        scaleMargins: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }, // removes the price axis on left
      rightPriceScale: {
        visible: false, // hides Y axis
        borderVisible: false,
        scaleMargins: {
          top: 0.2,
          bottom: 0.2,
          left: 0,
          right: 0,
        },
      },
      timeScale: {
        visible: false, // hides X axis
        borderVisible: false,
        scaleMargins: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      crosshair: {
        vertLine: { visible: false }, // removes vertical dashed line
        horzLine: { visible: false }, // removes horizontal dashed line
        crosshairMarkerVisible: false,
      },
      handleScroll: false,
      handleScale: false,
      //   grid: {
      //     vertLines: { visible: false },
      //     horzLines: { visible: false },
      //   },
      //   rightPriceScale: { visible: false }, // removes the price axis on right
      //   leftPriceScale: { visible: false }, // removes the price axis on left
      //   timeScale: { visible: false }, // removes the time axis at bottom
      //   crosshair: {
      //     vertLine: { visible: false }, // removes vertical dashed line
      //     horzLine: { visible: false }, // removes horizontal dashed line
      //   },
      //   handleScroll: false,
      //   handleScale: false,
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(AreaSeries, {
      //   lineColor: "#00C896",
      //   topColor: "rgba(0, 200, 150, 0.25)",
      //   bottomColor: "rgba(0, 200, 150, 0.02)",
      // topColor: "rgba(34, 197, 94, 0.4)", // green with opacity
      // bottomColor: "rgba(34, 197, 94, 0)", // fully transparent
      // lineColor: "rgba(34, 197, 94, 1)",
      //   topColor: { topColorBar },
      //   bottomColor: { bottomColorBar },
      //   lineColor: { lineColorBar },
      lineColor: color,
      topColor: color + "40", // hex opacity ~25%
      bottomColor: color + "00", // fully transparent
      lineWidth: 2,
      //   lineColor: "#10B981",
      //   topColor: "#10B98160",
      //   bottomColor: "black",
      //   lineWidth: 2,
      priceLineVisible: false, // removes dotted horizontal price line
      lastValueVisible: false, // removes the label on y axis
      crosshairMarkerVisible: true, // keeps the dot on the line
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: color,
      crosshairMarkerBackgroundColor: color,
    });

    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    heightBar,
    color,

    widthBar,
  ]);

  return <div ref={chartContainer} />;
}

export default StockChart;
