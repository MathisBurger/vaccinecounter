export interface RestServiceInterface {
    get<T>(path: string): Promise<T>;
}