const MainListView = require('./views/main_list_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    const mainListViewContainer = document.querySelector('#main-list-view');
    const mainListView = new MainListView(mainListViewContainer);
    mainListView.bindEvents();

    const countriesUrl = 'http://localhost:3000/api/countries'
    const countries = new Countries(countriesUrl);
    countries.getData();
})
