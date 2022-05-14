import Chart from "react-apexcharts";
import moment from "moment";

const DetailCharts=({title})=>{
    const series= [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 20, 60, 50]
        }
    ]

    const options=  {
        width: '100%',
        annotations:{
        xaxis: [
            {
                x: moment().format('DD/MM'),
                strokeDashArray: 0,
                borderColor: "#775DD0",
                fillColor: "#B3F7CA",

                label: {
                    borderColor: "#775DD0",
                    style: {
                        color: "#fff",
                        background: "#775DD0"
                    },

                    text: "Present"
                },
                offsetY: 4
            }]
        },
        stroke: {
            width: 5,
            curve: "smooth"
        },

        title: {
            text: title,
            align: 'left'
        },
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            min :moment().add(-5 , "days").format('DD/MM'),
            max :  moment().add(-4 , "days").format('DD/MM'),
            tickAmount: 11,
            categories: [
                moment().add(-4 , "days").format('DD/MM'),
                moment().add(-3 , "days").format('DD/MM'),
                moment().add(-2 , "days").format('DD/MM'),
                moment().add(-1 , "days").format('DD/MM'),
                moment().format('DD/MM'),
                moment().add(1 , "days").format('DD/MM'),
                moment().add(2 , "days").format('DD/MM'),
                moment().add(3 , "days").format('DD/MM') ,
                moment().add(4 , "days").format('DD/MM'),

            ]
        }
    }

    return (
        <div className="mixed-chart justify-content-center d-flex">
            <Chart
                options={options}
                series={series}
                type="line"
                width="800"
            />
        </div>

    )
}

export default DetailCharts;
