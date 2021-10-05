import { css, Global } from "@emotion/react";
import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/GlobalInfo";
import Loading from "./components/Loading";
import VerticalBar from "./components/VerticalBar";
import type { ResponseData, ResponseDataItem } from "./types";

const App: React.FC = () => {
    const [data, setData] = useState<ResponseData | undefined>(undefined);
    const [selectedCountries, setSelectedCountries] = useState<ResponseDataItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday=true");
            const result = await response.json();
            setData(result);
            console.log(result);
        };
        fetchData();
    }, []);

    const onCountrySelect = (country: ResponseDataItem) => {
        const countryIndex = selectedCountries.findIndex(item => item.country === country.country);

        if (countryIndex > -1) {
            const newSelectedCountries = [...selectedCountries];
            newSelectedCountries.splice(countryIndex, 1);
            setSelectedCountries(newSelectedCountries);
        } else {
            setSelectedCountries([...selectedCountries, country]);
        }
    };

    return (
        <>
            <Global
                styles={css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                `}
            />

            <div className="App">
                {data ? (
                    <>
                        <GlobalInfo global={data} />
                        {selectedCountries.length !== 0 && (
                            <VerticalBar selectedCountries={selectedCountries} />
                        )}
                        {data ? (
                            <CountryList countries={data} onSelectItem={onCountrySelect} />
                        ) : null}
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
};

export default App;
