import { NumberOfCountsResponse, NumberOfVaccinesResponse, GetAllCountsResponse } from './Responses.d';

export interface RestServiceInterface {
    getNumberOfCounts(): Promise<NumberOfCountsResponse>;
    getNumberOfVaccines(): Promise<NumberOfVaccinesResponse>;
    getAllCounts(): Promise<GetAllCountsResponse>;
}