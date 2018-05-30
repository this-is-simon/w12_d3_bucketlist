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



module.exports = Countries;
