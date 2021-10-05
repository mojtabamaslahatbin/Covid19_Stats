
export type CountryInfoType = {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
};

export type ResponseDataItem = {
    updated: number;
    country: string;
    countryInfo: CountryInfoType;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
};

export type ResponseData = ResponseDataItem[]


// export type GlobalData = {
//     NewConfirmed: number;
//     TotalConfirmed: number;
//     NewDeaths: number;
//     TotalDeaths: number;
//     NewRecovered: number;
//     TotalRecovered: number;
//     Date: string;
// };

export type Country = {
    ID: string;
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
    Premium: unknown;
};

// export type ResponseData = {
//     ID: string;
//     Message: string;
//     Global: GlobalData;
//     Countries: Country[];
//     Date: string;
// };
