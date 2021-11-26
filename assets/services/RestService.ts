import { GetAllCountsResponse, NumberOfCountsResponse, NumberOfVaccinesResponse } from '../@types/Responses';
import { RestServiceInterface } from './../@types/RestServiceInterface.d';
import { RestFetcher } from "./RestFetcher";



export class RestService extends RestFetcher implements RestServiceInterface {
    
    /**
     * Fetches all counts from the database.
     * 
     * @returns The request response
     */
    getAllCounts(): Promise<GetAllCountsResponse> {
        return this.get<GetAllCountsResponse>('/api/counts/getAllCounts');
    }
    
    /**
     * Fetches the number of vaccines from the server.
     * 
     * @returns The request response
     */
    getNumberOfVaccines(): Promise<NumberOfVaccinesResponse> {
        return this.get<NumberOfVaccinesResponse>('/api/vaccine/getNumberOfVaccines');
    }
    
    /**
     * Fetches the number of counts from the Database
     * 
     * @returns The request response
     */
    getNumberOfCounts(): Promise<NumberOfCountsResponse> {
        return this.get<NumberOfCountsResponse>('/api/counts/getNumberOfCounts');
    }


}