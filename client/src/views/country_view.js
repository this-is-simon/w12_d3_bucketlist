const PubSub = require('../helpers/pub_sub.js');


const CountryView = function (container){
  this.container = container;
};

CountryView.prototype.render = function (country) {
  const countryContainer = document.createElement('div');
  const countryName = document.createElement('h2');
  countryName.textContent = country.name;
  countryContainer.appendChild(countryName);
  this.container.appendChild(countryContainer);
};

CountryView.prototype.selectCountryForBucketList = function (country, id) {


};

module.exports = CountryView;
