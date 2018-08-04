// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let deliveryId = 0;
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;

class deliveries {
  constructor(neighborhood, meal, customer) {
    this.neighborhoodId = neighborhood.id;
    this.mealId = meal.id;
    this.customerId = customer.id;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }

  meal() {
    
  }

  customer() {
    
  }

  neighborhood() {
    
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhood.push(this);
  }

  deliveries() {
    
  }
}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.id = ++customerId;
    store.customers.push(this);
  }
}
