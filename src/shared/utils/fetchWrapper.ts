async function fetchWrapper<T>(fetchCallback: () => Promise<Response>): Promise<T> {
    let promiseAwaited = await fetchCallback()
    return await promiseAwaited.json() as Promise<T>
}