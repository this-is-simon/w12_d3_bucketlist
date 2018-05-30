const Countries = require('../models/countries');
const PubSub = require('../helpers/pub_sub');
const CountryView = require('../views/country_view.js');

const MainListView = function(container){
  this.container = container;
}

MainListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    console.log(evt.detail);
    this.render(evt.detail);
  });
};

MainListView.prototype.render = function (countries) {
  this.container.innerHTML = '';
  const countryView = new CountryView(this.container);
  countries.forEach((country) => countryView.render(country));
};


module.exports = MainListView;
