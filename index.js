// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
// alert(123);

var ordersData = (() => {

             function getOrders(){
               return fetch('https://jsonblob.com/api/4933fecc-7bd7-11e9-b226-2343c40bf0cc')
                  .then(function(response) {
                    return response.json();
                  });
             }

            return {
                getOrders: getOrders
            };

        })(); 
ordersData.getOrders().then(function(response){

console.log(response)

}) 