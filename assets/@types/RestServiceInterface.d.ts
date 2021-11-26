import { NumberOfCountsResponse, NumberOfVaccinesResponse } from './Responses.d';

export interface RestServiceInterface {
    getNumberOfCounts(): Promise<NumberOfCountsResponse>;
    getNumberOfVaccines(): Promise<NumberOfVaccinesResponse>;
}