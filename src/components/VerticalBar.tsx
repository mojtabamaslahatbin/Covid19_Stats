import React from "react";
import { Bar } from "react-chartjs-2";
import type { ResponseData } from "../types";
import styled from "@emotion/styled";

type VerticalBarProps = {
    selectedCountries: ResponseData;
};

const ChartWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;

const VerticalBar: React.FC<VerticalBarProps> = props => {
    const renderData = () => {
        const data: number[] = [];
        const labels: string[] = [];

        props.selectedCountries.forEach(country => {
            data.push(country.todayCases);
            labels.push(country.country);
        });
        return {
            labels,
            datasets: [
                {
                    label: "New Cases",
                    data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(36, 130, 224, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };
    return (
        <>
            <ChartWrapper>
                <Bar data={renderData()} />
            </ChartWrapper>
        </>
    );
};

export default VerticalBar;
