import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
const slug = "gsyouijb";
const API_ROOT = `https://${slug}.brev.dev/api`;

const responseBody = (res: AxiosResponse) => res.data;

const makeEndpointCall = (url: string) => {
  return `${API_ROOT}${url}`;
};

const openRequests = {
  del: (url: string) => axios.delete(makeEndpointCall(url)).then(responseBody),
  get: (url: string) => axios.get(makeEndpointCall(url)).then(responseBody),
  post: (url: string, data?: any) =>
    axios.post(makeEndpointCall(url), data).then(responseBody),
  put: (url: string, data?: any) =>
    axios.put(makeEndpointCall(url), data).then(responseBody),
};

interface VerbResponse {
  verb: string;
}

const SampleResource = {
  get: () => openRequests.get("/getVerb") as Promise<VerbResponse>,
};

export default {
  SampleResource,
};
