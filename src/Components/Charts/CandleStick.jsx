import {
  CandlestickSeries,
  HistogramSeries,
  createChart,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

function CandlestickChart({ data }) {
  const chartContainer = useRef();

  useEffect(() => {
    const chart = createChart(chartContainer.current, {
      layout: {
        background: { color: "transparent" },
        textColor: "#8B949E",
      },
      width: chartContainer.current.clientWidth,
      height: 400,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: true, color: "#94a3b850" },
        color: "red",
      },
      rightPriceScale: {
        borderVisible: false,
        textColor: "#8B949E",
        scaleMargins: {
          top: 0.1,
          bottom: 0.2, // leave 20% at bottom for volume bars
        },
      },
      leftPriceScale: {
        visible: false,
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
      },
      crosshair: {
        mode: 1, // magnet mode - snaps to candles
        vertLine: {
          color: "#30363D",
          labelBackgroundColor: "#161B22",
        },
        horzLine: {
          color: "#30363D",
          labelBackgroundColor: "#161B22",
        },
      },
      handleScroll: true,
      handleScale: true,
    });

    chart.timeScale().fitContent();

    // candlestick series
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderUpColor: "#22c55e",
      borderDownColor: "#ef4444",
      wickUpColor: "#22c55e66",
      wickDownColor: "#ef444466",
      priceLineVisible: false,
      lastValueVisible: false,
    });

    candlestickSeries.setData(data);

    // volume histogram series on a separate price scale
    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceScaleId: "volume",
      priceFormat: { type: "volume" },
      lastValueVisible: false,
      priceLineVisible: false,
    });

    volumeSeries.setData(
      data.map((d) => ({
        time: d.time,
        value: d.volume,
        color: d.close >= d.open ? "#22c55e33" : "#ef444433",
      })),
    );

    // volume scale only occupies bottom 20% of chart
    chart.priceScale("volume").applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    const handleResize = () => {
      chart.applyOptions({ width: chartContainer.current.clientWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainer} className="w-full" />;
}

export default CandlestickChart;
