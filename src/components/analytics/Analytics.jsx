import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const Analytics = ({ title }) => {
  const options = {
    chart: {
      type: "pie",
      height: 240,
      width: 180,
    },
    title: false,
    series: [
      {
        name: "Data",
        data: [[28], [72]],
      },
    ],
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 100,
          },
        },
      ],
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        colors: ["#E5E5E5", "#4F80E1"],
        states: {
          hover: {
            brightness: 0.1,
          },
        },
      },
    },
  };
  return (
    <div className="px-4 pt-4 pb-7 bg-white flex-col gap-1 justify-between w-full sm:w-[300px] h-[300px] xl:col-span-3 xl:row-start-2 lg:row-start-3 rounded-xl border border-[#E7E7E7]">
      <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px]">
        {title}
      </span>
      <div className="flex flex-col max-w-xs 2xl:max-w-none h-full max-h-60 md:pb-5">
        <div className="flex gap-1 items-center">
          <div className="h-2 w-3 bg-[#497AF9] rounded-sm"></div>
          <div className="text-[10px] flex gap-1">
            <span className="">72%</span>
            <span className="text-[#637381]">Quality_Level</span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-2 w-3 bg-[#000000]/20 rounded-sm"></div>
          <div className="text-[10px] flex gap-1">
            <span>28%</span>
            <span className="text-[#637381]">Loss</span>
          </div>
        </div>
        <div className="flex justify-center mt-auto">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
