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

export type India = {
    name: string;
    fullname?: string;
    capital: string;
    population: number;
    gdp: number;
    gdp_pc: number;
    area: number;
    off_lang: string[];
};

export type CountrySliceInitialState = {
    countries: Country[];
    selectedCountries: Country[] | null;
};
export type IndiaSliceInitialState = {
    india: India[];
    selectedStates: India[] | null;
};

export type FunctionSliceInitialState = {
    currentView: 'table' | 'grid';
    isMobileDrawerOpen: boolean;
};

export type ChartTypes = 'bar' | 'tree' | 'pie';
export type CountryFieldTypes =
    | 'population'
    | 'gdp_nominal'
    | 'gdp_ppp'
    | 'area';
export type StateFieldTypes = 'population' | 'gdp' | 'gdp_pc' | 'area';
export type CountrySortFields =
    | 'population'
    | 'gdp_nominal'
    | 'gdp_ppp'
    | 'area'
    | 'name';

export type ChartListTypes = {
    title: string;
    sub: ChartTypes;
};

export type VisualSliceInitialState = {
    currentChart: ChartTypes;
    currentCountryField: CountryFieldTypes;
    currentStateField: StateFieldTypes;
    chartColor: string;
};

export type NavItem = {
    title: string;
    subMenu?: NavItem[];
};

export type SelectFieldsCountries = {
    title: string;
    sub: CountryFieldTypes;
};
export type SelectFieldsStates = {
    title: string;
    sub: StateFieldTypes;
};

export type BarChartLayout = {
    title: string;
    sub: 'h' | 'v';
};

export type MainCategories = Country | India;
export type MainCategoriesString = 'country' | 'india';
