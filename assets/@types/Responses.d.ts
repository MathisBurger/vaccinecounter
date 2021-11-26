import { CountEntity } from './BaseEntitys.d';

export interface NumberOfCountsResponse {
    timestamp: Date;
    counts: number;
    latestCount: CountEntity;
}

export interface NumberOfVaccinesResponse {
    timestamp: Date;
    count: number;
    message: string;
}

export interface GetAllCountsResponse {
    timestamp: Date;
    message: string;
    counts: CountEntity[];
}