import React, { useState } from "react";
import styled from "@emotion/styled";
import { ResponseDataItem } from "../types";

type CountryItemProp = {
    country: ResponseDataItem;
    onSelectItem: (country: ResponseDataItem) => void;
};

type ListContentProps = {
    isActive: boolean;
};

const ListItem = styled.li`
    flex: 0 0 50%;

    @media (min-width: 700px) {
        flex: 0 0 33.33%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 25%;
    }
    @media (min-width: 1500px) {
        flex: 0 0 20%;
    }
`;

const Image = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

const ListContent = styled.div<ListContentProps>`
    background-color: ${props => (props.isActive ? "#eff5fc" : "#dcecfa")};
    border-radius: 20px;
    margin: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: ${props => (props.isActive ? "none" : "5px 6px 5px #aaaaaa")};
    cursor: pointer;
`;

const CountryItem: React.FC<CountryItemProp> = props => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleOnclick = (country: ResponseDataItem) => {
        props.onSelectItem(country);
        setIsActive(!isActive);
    };

    return (
        <ListItem onClick={() => handleOnclick(props.country)}>
            <ListContent isActive={isActive}>
                <Image src={props.country.countryInfo.flag} alt={props.country.country} />
                <h3>{props.country.country}</h3>
                <p> New Cases: {props.country.todayCases} </p>
                <p> New Deaths: {props.country.todayDeaths} </p>
                <p> New Recovered: {props.country.todayRecovered} </p>
            </ListContent>
        </ListItem>
    );
};

export default CountryItem;
