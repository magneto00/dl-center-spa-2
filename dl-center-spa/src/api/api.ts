import { InstructionInterface, FormOptionsInterface } from 'src/types';
import { getUniqueItems } from 'src/utils/getUniqueItems';
import { InstructionsStrapiResponse } from './types';

/* eslint-disable class-methods-use-this */
class HttpClient {
  private get<GETResponseInterface>(
    url: string,
    method = 'GET',
  ): Promise<GETResponseInterface> {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
      })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public async getInstruction(
    country: string,
    device: string,
  ): Promise<InstructionInterface> {
    const response = await this.get<InstructionsStrapiResponse>(
      `${process.env.REACT_APP_STRAPI_DLCENTER_ENDPOINT}/instructions?filters[country][$eq]=${country}&filters[device][$eq]=${device}`,
    );
    return response[0];
  }

  public async getFormOptions(): Promise<FormOptionsInterface> {
    const instructions = await this.get<InstructionsStrapiResponse>(
      `${process.env.REACT_APP_STRAPI_DLCENTER_ENDPOINT}/instructions`,
    );

    const allCountries = instructions.map((instruction) => instruction.country);
    const uniqueCountries = getUniqueItems(allCountries).sort();

    const allDevices = instructions.map((instruction) => instruction.device);
    const uniqueDevices = getUniqueItems(allDevices).sort();

    const formOptions = {
      countries: uniqueCountries,
      devices: uniqueDevices,
    };

    return formOptions;
  }
}

export const api = new HttpClient();
