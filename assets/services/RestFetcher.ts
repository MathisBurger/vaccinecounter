export class RestFetcher {

    /**
     * 
     * @param path The request path of the API.
     * @param body The body of the request
     * @returns A promise of the request
     */
    private async req<T>(method: string, path: string, body?: any): Promise<T> {
        const resp = await fetch(path, {
            body: JSON.stringify(body),
            method: method,
        });
        return await resp.json() as T;
    }

    /**
     * Executes a GET request to the provided path
     * and parses the response into this type.
     * 
     * @param path The path to the request
     * @returns A promise of the response
     */
    protected async get<T>(path: string): Promise<T> {
        return this.req<T>("GET", path);
    }

    /**
     * Executes a POST request to the provided path
     * with the given body and parses the response into the
     * given generic type.
     * 
     * @param path the request path
     * @param body the request body
     * @returns the response as the generic type
     */
    protected async post<T>(path: string, body: any): Promise<T> {
        return this.req<T>("POST", path, body);
    }
}