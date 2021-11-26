export interface CountEntity {
    id: number;
    createdAt: Date;
    inHouse: boolean;
}

export enum VaccineEnum {
    BIONTECH,
    ASTRACENECA,
}

export interface VaccineEntity {
    id: number;
    createdAt: Date;
    vaccine: VaccineEnum;
}