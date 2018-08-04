// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let deliveryId = 0;
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;

class Delivery {
  constructor(meal, neighborhood, customer) {
    this.neighborhoodId = neighborhood;
    this.mealId = meal;
    this.customerId = customer;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }

  meal() {
    return store.meals.filter(function (meal) {
      return this.mealId == meal.id
    }.bind(this))

  }

  customer() {
    return store.customers.filter(function (customer) {
      return this.customerId == customer.id
    }.bind(this))
  }

  neighborhood() {
    return store.neighborhoods.filter(function (neighborhood) {
      return eighborhood.id == this.neighborhoodId
    }.bind(this))
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }

  deliveries() {
    return store.deliveries.filter(function (delivery) {
      return delivery.neighborhoodId == this.id
    }.bind(this))
  }

  customers() {
    return store.customers.filter(function (customer) {
      return customer.neighborhoodId == this.id
    }.bind(this))
  }
}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }

  customers() {
    const allCustomers = this.deliveries().map(delivery => delivery.customer());
  }

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.neighborhoodId = neighborhoodId
    this.id = ++customerId;
    store.customers.push(this);
  }

  deliveries() {
    return store.deliveries.filter(function (delivery) {
      return delivery.customerId == this.id
    }.bind(this))
  }

  meals() {
    return store.meals.filter(function (meal) {
      return meal.id ==
    }.bind(this))
  }
}
