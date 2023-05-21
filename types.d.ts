type Country = {
    id: number;
    name: string;
    sub?: string;
    population: number;
    continent: string;
    area: number;
    gdp_nom: number;
    gdp_ppp: number;
};

type ChartCategory = 'bar' | 'pie' | 'doughnut';

type NavItems = {
    id: number;
    name: string;
    sub: ChartCategory;
};
