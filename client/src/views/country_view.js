const PubSub = require('../helpers/pub_sub.js');


const CountryView = function (container){
  this.container = container;
};

CountryView.prototype.render = function (country) {
  const countryContainer = document.createElement('div');
  const countryName = document.createElement('h2');
  countryName.textContent = country.name;
  countryContainer.appendChild(countryName);
  countryName.id = country._id;
  this.selectCountryForBucketList(countryContainer);
  this.container.appendChild(countryContainer);
};

CountryView.prototype.selectCountryForBucketList = function (container) {
    container.addEventListener('click',(event) => {
      PubSub.publish('CountryView:country-clicked', event.target.id);
    });
};

module.exports = CountryView;
