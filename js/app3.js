/**
 * Created by Mamun on 12/17/2015.
 */

var app = angular.module('store', []);

app.controller('StoreController', function() {
    this.products = gams;
});



app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
        product.review.push(this.review);
        this.review = {};
    }
});










var gams =  [
    {
        name: 'Product Name',
        price: 500,
        description: "This is a discription",
        canPurchase: true,
        soldOut: true,
        review: [
            {
                rate: 5,
                comment: 'nice product',
                description: 'This is a nice product you can purchase'
            },
            {
                rate: 4,
                comment: 'nice product',
                description: 'This is a nice product you can purchase'
            }
        ]
    },
    {
        name: '2nd Product Name',
        price: 623.15,
        description: "This is a 2nd discription",
        canPurchase: false,
        soldOut: true,
        review: [
            {
                rate: 5,
                comment: 'nice product',
                description: 'This is a nice product you can purchase'
            },
            {
                rate: 4,
                comment: 'nice product',
                description: 'This is a nice product you can purchase'
            }
        ]
    },
    {
        name: '3rd Product Name',
        price: 100.55,
        description: "This is a 3rd discription",
        canPurchase: true,
        soldOut: false,
        review: ''
    }
]
