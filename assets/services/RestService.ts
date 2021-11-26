import { NumberOfCountsResponse, NumberOfVaccinesResponse } from '../@types/Responses';
import { RestServiceInterface } from './../@types/RestServiceInterface.d';
import { RestFetcher } from "./RestFetcher";



export class RestService extends RestFetcher implements RestServiceInterface {
    
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