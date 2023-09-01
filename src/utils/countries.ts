import { Country, India } from '@/types/types';

export const renderMultipleStrings = (capital: string[] | string): string => {
    if (Array.isArray(capital)) {
        return capital.join(', ');
    }
    return capital;
};

export const parseGdp = (num: number) => {
    let units = ['Million', 'Billion', 'Trillion', 'Quintillion'];
    let unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
    let r = unit % 3;
    // @ts-ignore
    let x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(2);
    return x.toFixed(2) + ' ' + units[Math.floor(unit / 3) - 2];
};

export const parseArea = (area: number): string => {
    let ar: number;
    let areaAfterDecimalRemoved: number;

    const indexOfDecimal = String(area).indexOf('.');

    if (indexOfDecimal === -1) {
        ar = area.toString().length;
        areaAfterDecimalRemoved = area;
    } else {
        ar = area.toString().slice(0, indexOfDecimal).length;
        areaAfterDecimalRemoved = Number(String(area).slice(0, indexOfDecimal));
    }

    if (ar <= 3) return String(areaAfterDecimalRemoved);

    // 3000

    if (ar <= 4) {
        return (
            String(areaAfterDecimalRemoved)[0] +
            ',' +
            String(areaAfterDecimalRemoved).slice(1)
        );
    }
    if (ar <= 5) {
        return (
            String(areaAfterDecimalRemoved).slice(0, 2) +
            ',' +
            String(areaAfterDecimalRemoved).slice(2)
        );
    }

    if (ar <= 6) {
        return (
            String(areaAfterDecimalRemoved).slice(0, 3) +
            ',' +
            String(areaAfterDecimalRemoved).slice(3)
        );
    }
    if (ar <= 7) {
        return (
            String(areaAfterDecimalRemoved)[0] +
            ',' +
            String(areaAfterDecimalRemoved).slice(1, 4) +
            ',' +
            String(areaAfterDecimalRemoved).slice(4)
        );
    }
    if (ar <= 8) {
        return (
            String(areaAfterDecimalRemoved).slice(0, 2) +
            ',' +
            String(areaAfterDecimalRemoved).slice(2, 5) +
            ',' +
            String(areaAfterDecimalRemoved).slice(5)
        );
    }
    if (ar <= 9) {
        return (
            String(areaAfterDecimalRemoved).slice(0, 3) +
            ',' +
            String(areaAfterDecimalRemoved).slice(3, 6) +
            ',' +
            String(areaAfterDecimalRemoved).slice(6)
        );
    }

    if (ar <= 10) {
        return (
            String(areaAfterDecimalRemoved)[0] +
            ',' +
            String(areaAfterDecimalRemoved).slice(1, 4) +
            ',' +
            String(areaAfterDecimalRemoved).slice(4, 7) +
            ',' +
            String(areaAfterDecimalRemoved).slice(7)
        );
    }
    if (ar <= 11) {
        return (
            String(areaAfterDecimalRemoved).slice(0, 2) +
            +',' +
            String(areaAfterDecimalRemoved).slice(2, 5) +
            ',' +
            String(areaAfterDecimalRemoved).slice(5, 8) +
            ',' +
            String(areaAfterDecimalRemoved).slice(8)
        );
    }
    if (ar <= 12) {
        return (
            String(areaAfterDecimalRemoved).slice(0, 3) +
            +',' +
            String(areaAfterDecimalRemoved).slice(3, 6) +
            ',' +
            String(areaAfterDecimalRemoved).slice(6, 9) +
            ',' +
            String(areaAfterDecimalRemoved).slice(9)
        );
    }

    return String(area);
};

export const inSelected = (
    country: Country | India,
    selectedCountries: Country[] | India[] | null
): boolean => {
    if (selectedCountries) {
        for (let i = 0; i < selectedCountries.length; i++) {
            if (
                selectedCountries[i].name.toLowerCase() ===
                country.name.toLowerCase()
            )
                return true;
        }
    }
    return false;
};
