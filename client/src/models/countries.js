const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function (url) {
  this.url = url;
};

Countries.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((countries) => {
      PubSub.publish('Countries:data-loaded', countries)
    })
    .catch(console.error);
};

Countries.prototype.receiveClickedCountry = function (event) {
  PubSub.subscribe('CountryView:country-clicked', (event) => {
    console.log('Clicked country subscribe ID?', event.detail);
    this.updateRecord(event.detail);
  });
};

Countries.prototype.updateRecord = function(id) {
  //TODO Incorporate ID
  const request = new Request(this.url);
  //TODO use the id to access the country's onBucketList value to True
  request.put()
    .then((countries) => {
      PubSub.publish('Countries:data-loaded', countries)
    })
    .catch(console.error);
}



module.exports = Countries;
