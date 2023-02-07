import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { sandboxApi } from "./AxiosService.js"

class HouseService{

  async getHouses(){
    const houses = await sandboxApi.get('/houses')
    // console.log(houses.data);
    appState.houses = houses.data.map(h => new House(h))
    console.log(appState.houses);
  }

}

export const houseService = new HouseService()