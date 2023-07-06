export async function fetchWrapper<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
    let promiseAwaited = await fetch(input , init)
    return await promiseAwaited.json() as Promise<T>
}