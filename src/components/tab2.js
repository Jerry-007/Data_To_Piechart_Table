import { ResponsivePie } from "@nivo/pie";

const Tab2 = ({ data }) => {
  return (
    <div className="chart">
      <h5>Department-wise Sales</h5>
      <ResponsivePie
        data={data}
        id="Department Name"
        value="Sales"
        margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
        innerRadius={0.01}
        padAngle={0.9}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        radialLabel={(d) => `${d.data.Percentage}`}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 75,
            itemsSpacing: 9,
            itemWidth: 90,
            itemHeight: 20,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Tab2;
