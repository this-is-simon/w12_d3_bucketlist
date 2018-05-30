const Countries = require('../models/countries');
const PubSub = require('../helpers/pub_sub');

const MainListView = function(container){
  this.container = container;
}

MainListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    console.log('MATTHEW! Countries data loaded and subscribed to.');
  });
};

module.exports = MainListView;
