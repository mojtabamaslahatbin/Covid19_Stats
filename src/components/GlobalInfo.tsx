import React from "react";
import type { ResponseData } from "../types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    text-align: center;
    font-weight: bolder;
    margin: 20px;
    padding: 20px 0;
    line-height: 1.6;
    background-color: #dcecfa;
    border: 1px solid #ccc;
    box-shadow: 5px 6px 5px #aaaaaa;
`;

type GlobalInfoProps = {
    global: ResponseData;
};

const GlobalInfo: React.FC<GlobalInfoProps> = props => {
    let NewCases = 0;
    let newDeaths = 0;
    let newRecovered = 0;
    for (const country of props.global) {
        NewCases += country.todayCases;
        newDeaths += country.todayDeaths;
        newRecovered += country.todayRecovered;
    }

    return (
        <Wrapper>
            <h1>Covid-19 Statistics</h1>
            <h3>GlobalInfo</h3>
            <div>
                <p>NewCases: {new Intl.NumberFormat().format(NewCases)}</p>
                <p>NewDeaths: {new Intl.NumberFormat().format(newDeaths)}</p>
                <p>NewRecovered: {new Intl.NumberFormat().format(newRecovered)}</p>
            </div>
        </Wrapper>
    );
};

export default GlobalInfo;
