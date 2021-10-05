import React from "react";
import CountryItem from "./CountryItem";
import type { ResponseData, ResponseDataItem } from "../types";
import styled from "@emotion/styled";

const ListWrapper = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`;

type CountryListProps = {
    countries: ResponseData;
    onSelectItem: (country: ResponseDataItem) => void;
};

const CountryList: React.FC<CountryListProps> = props => {
    return (
        <div>
            <ListWrapper>
                {props.countries.map(country => (
                    <CountryItem
                        key={country.country}
                        country={country}
                        onSelectItem={props.onSelectItem}
                    />
                ))}
            </ListWrapper>
        </div>
    );
};

export default CountryList;
