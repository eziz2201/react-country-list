export interface ICountry {
    name: string,
    region: string,
    capital: string,
    flag: string,
    area: number,
    population: number,
}

export interface IBadge {
    color: Color;
    type: BadgeLabel;
    value: number;
};

export const enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Sucsess = 'sucsess',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Dark = 'dark',
    Light = 'light',
};

export type BadgeLabel = 'area' | 'population';