import { InstructionInterface, FormOptionsInterface } from 'src/types';
import { InstructionsStrapiResponse, OptionsStrapiResponse } from './types';

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
    const [instruction] = await this.get<InstructionsStrapiResponse>(
      `${process.env.REACT_APP_STRAPI_DLCENTER_ENDPOINT}/instructions?filters[country][$eq]=${country}&filters[device][$eq]=${device}`,
    );
    return instruction;
  }

  public async getOptions(): Promise<FormOptionsInterface> {
    const { options } = await this.get<OptionsStrapiResponse>(
      `${process.env.REACT_APP_STRAPI_DLCENTER_ENDPOINT}/instructions/options`,
    );

    return options;
  }
}

export const api = new HttpClient();
