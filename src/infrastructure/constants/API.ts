import getConfig from "next/config";

const config = getConfig();
export const API_URL = config?.publicRuntimeConfig?.API_URL;

console.log({API_URL});

const API = {
    TEST: `${API_URL}/TEST`,
}

export default API;