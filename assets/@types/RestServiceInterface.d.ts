import { NumberOfCountsResponse, NumberOfVaccinesResponse, GetAllCountsResponse, GetAllVaccinesResponse } from './Responses.d';

export interface RestServiceInterface {
    getNumberOfCounts(): Promise<NumberOfCountsResponse>;
    getNumberOfVaccines(): Promise<NumberOfVaccinesResponse>;
    getAllCounts(): Promise<GetAllCountsResponse>;
    getAllVaccines(): Promise<GetAllVaccinesResponse>;
}