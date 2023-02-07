
import { appState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
export class HouseController{
  
  constructor(){
    // console.log("controller consturctorH");
  }
  async drawHouses(){
    await this.getHouses()
    let template = ""
    appState.houses.forEach(h => template +=  h.HouseCard)
    setHTML('listings', template)
  }

  async getHouses(){
    try {
      await houseService.getHouses()
    } catch (error) {
      Pop.error(error)
    }
  }
}