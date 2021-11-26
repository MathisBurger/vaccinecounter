export interface CountEntity {
    id: number;
    createdAt: Date;
    inHouse: boolean;
}

export interface VaccineEntity {
    id: number;
    createdAt: Date;
    vaccine: VaccineEnum;
}