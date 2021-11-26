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
}