class Cellar{

  constructor(beveragesArray = []){
    this.beveragesArray = beveragesArray;
  }
   
  addBeverage(bev){
    this.beveragesArray.push(bev);
  }

  deleteBeverage(index){
    this.beveragesArray.splice(index, 1);
  }

  getAllBeverages(){

    let allBeverages = '';

    for (let i = 0; i < this.beveragesArray.length; i++) {
        const bev = this.beveragesArray[i];
        const humanIndex = i + 1;

        allBeverages += humanIndex + ') ' + bev.toString();
        allBeverages += '-------------------------------\n';
        
    }
    return allBeverages;
  }

  fromDbObjects(data){
    for (const genericObject of data) {
         const wine = new Wine (genericObject.title, genericObject.author, genericObject.dop, genericObject.publisher)
         this.beveragesArray.push(wine);
    }
  }

  fromDbObjects(data){
    for (const genericObject of data) {
         const beer = new Beer(genericObject.title, genericObject.author, genericObject.dop, genericObject.publisher)
         this.beveragesArray.push(beer);
    }
 }

}