
export class House{

  constructor(data){
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get HouseCard() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" class="card-img-top car-img"
          alt="car">
        <div class="card-body">
          <div class="card-title fs-5">${this.levels} Storie, ${this.bedrooms} Bedrooms, ${this.bathrooms} Bathrooms</div>
          <p>${this.description ? this.description : "It's a House"}</p>
          <div class="d-flex justify-content-between">
          <button class="btn ms-1 btn-danger" type="button" onclick="app.carsController.removeCar('${this.id}')">Delete Car!</button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.carsController.drawForm('${this.id}')">Edit Car!</button>
          </div>
          </div>
      </div>
    </div>
    `
  }

  
}