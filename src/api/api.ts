import { DevApiModel } from "./api.props";
import { DEVS_URL, LOGO_URL } from "./api.urls";

export const getDevs = async (): Promise<DevApiModel[]> => {
  return fetch(DEVS_URL).then((response) => response.json());
};

export const createDev = async (devData: DevApiModel): Promise<DevApiModel> => {
  return fetch(DEVS_URL, {
    method: "POST",
    body: JSON.stringify(devData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
};

export const getLogoUrl = async (): Promise<string> => {
  return fetch(LOGO_URL).then((response) => response.text());
};
