import {
  CreateCountResponse,
  CreateVaccineResponse,
  GetAllCountsResponse,
  GetAllVaccinesResponse,
  NumberOfCountsResponse,
  NumberOfVaccinesResponse,
  RemoveCountResponse,
} from '../@types/Responses';
import { RestServiceInterface } from './../@types/RestServiceInterface.d';
import { RestFetcher } from './RestFetcher';

export class RestService extends RestFetcher implements RestServiceInterface {
  /**
   * Tries to create a new count on the server.
   *
   * @param inHouse If the person is in the house or not
   * @returns The request response
   */
  createCount(inHouse: boolean): Promise<CreateCountResponse> {
    return this.post<CreateCountResponse>('/api/counts/createCount', {
      inHouse,
    });
  }

  /**
   * Removes the oldest count from the server.
   *
   * @returns The request response
   */
  removeOldestCount(): Promise<RemoveCountResponse> {
    return this.post<RemoveCountResponse>('/api/counts/removeCount', {});
  }

  /**
   * Tries to create a new vaccine on the server.
   * Returns the state of this action.
   *
   * @param vaccine The vaccine the user got
   * @returns The request response
   */
  createVaccine(vaccine: string): Promise<CreateVaccineResponse> {
    return this.post<CreateVaccineResponse>('/api/vaccine/createVaccine', {
      vaccine: vaccine.toString(),
    });
  }

  /**
   * Fetches all vaccines from the database.
   *
   * @returns The request response
   */
  getAllVaccines(): Promise<GetAllVaccinesResponse> {
    return this.get<GetAllVaccinesResponse>('/api/vaccine/getAllVaccines');
  }

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
    return this.get<NumberOfVaccinesResponse>(
      '/api/vaccine/getNumberOfVaccines'
    );
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
