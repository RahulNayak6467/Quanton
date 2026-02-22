import {
  CandlestickSeries,
  ColorType,
  createChart,
  AreaSeries,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

function StockChart(props) {
  const {
    data,
    colors: {
      backgroundColor = "#0a0e17", // chart background
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
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: 700,
      height: 400,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      // rightPriceScale: {
      //   visible: false, // hides Y axis
      // },
      // timeScale: {
      //   visible: false, // hides X axis
      // },
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(AreaSeries, {
      lineColor: "#10B981",
      topColor: "#10B98160",
      bottomColor: "#10B98100",
      lineWidth: 2,
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
