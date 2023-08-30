export type Country = {
    name: string;
    fullname?: string;
    capital: string | string[];
    population: number;
    gdp_nominal: number;
    gdp_ppp: number;
    continent: string | string[];
    area: number;
    off_lang: string[];
};

export type CountrySliceInitialState = {
    countries: Country[];
    selectedCountries: Country[] | null;
};

export type FunctionSliceInitialState = {
    currentView: 'table' | 'grid';
};

export type ChartTypes = 'bar' | 'tree' | 'pie';

export type ChartListTypes = {
    title: string;
    sub: ChartTypes;
};

export type VisualSliceInitialState = {
    currentChart: ChartTypes;
    currentField: 'population' | 'gdp_nominal' | 'gdp_ppp' | 'area';
};

export type NavItem = {
    title: string;
    subMenu?: NavItem[];
};
