import { VaccineEnum } from './BaseEntitys.d';
import {
  NumberOfCountsResponse,
  NumberOfVaccinesResponse,
  GetAllCountsResponse,
  GetAllVaccinesResponse,
  CreateCountResponse,
  RemoveCountResponse,
  CreateVaccineResponse,
} from './Responses.d';

export interface RestServiceInterface {
  getNumberOfCounts(): Promise<NumberOfCountsResponse>;
  getNumberOfVaccines(): Promise<NumberOfVaccinesResponse>;
  getAllCounts(): Promise<GetAllCountsResponse>;
  getAllVaccines(): Promise<GetAllVaccinesResponse>;
  createCount(inHouse: boolean): Promise<CreateCountResponse>;
  removeOldestCount(): Promise<RemoveCountResponse>;
  createVaccine(vaccine: string): Promise<CreateVaccineResponse>;
}
