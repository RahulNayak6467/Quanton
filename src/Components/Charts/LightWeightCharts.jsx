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
      backgroundColor = "#1a2332", // chart background
      lineColor = "#10b981", // color of the line
      textColor = "white", // axis text color
      areaTopColor = "#10b981", // gradient color at top
      areaBottomColor = "rgba(16, 185, 129, 0.28)", // gradient color at bottom (faded)
    } = {},
  } = props;

  const chartContainer = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainer.current.clientWidth });
    };

    const chart = createChart(chartContainer.current, {
      layout: {
        background: { color: "#0d1117" },
        textColor: "#8B949E",
      },
      width: 120,
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
      lineColor: "#00C896",
      topColor: "rgba(0, 200, 150, 0.25)",
      bottomColor: "rgba(0, 200, 150, 0.02)",
      lineWidth: 2,
      //   lineColor: "#10B981",
      //   topColor: "#10B98160",
      //   bottomColor: "black",
      //   lineWidth: 2,
      priceLineVisible: false, // removes dotted horizontal price line
      lastValueVisible: false, // removes the label on y axis
      crosshairMarkerVisible: true, // keeps the dot on the line
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "#10B981",
      crosshairMarkerBackgroundColor: "#10B981",
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
  ]);

  return <div ref={chartContainer} />;
}

export default StockChart;
