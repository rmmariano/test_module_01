var expect = require('chai').expect;

import { helloWorld, soma, sub, displayMyName } from '../index.js';


describe('#numFormatter', function() {
    it('should show hello world', function() {
        var result = helloWorld();
        expect(result).to.equal('Hello World');
    });

    it('should sum numbers', function() {
        var result = soma(2, 3);
        expect(result).to.equal(5);
    });

    it('should sub numbers', function() {
        var result = sub(2, 3);
        expect(result).to.equal(-1);
    });

    it('should display my name', function() {
        var result = displayMyName('Rod');
        expect(result).to.equal('Your name is Rod');
    });
});


// var expect = require('chai').expect;

// //var ol3_sidebar = require('../index');

// import { helloWorld } from '../index.js';
// import { soma } from '../index.js';
// import { sub } from '../index.js';
// import { displayMyName } from '../index.js';


// describe('#numFormatter', function() {
//     it('should show hello world', function() {
//         var result = helloWorld();
//         expect(result).to.equal('Hello World');
//     });

//     it('should sum numbers', function() {
//         var result = soma(2, 3);
//         expect(result).to.equal(5);
//     });

//     it('should sub numbers', function() {
//         var result = sub(2, 3);
//         expect(result).to.equal(-1);
//     });

//     it('should display my name', function() {
//         var result = displayMyName('Rod');
//         expect(result).to.equal('Your name is Rod');
//     });
// });


/*

var expect = require('chai').expect;

var ol3_sidebar = require('../index');


describe('#numFormatter', function() {
    it('should show hello world', function() {
        var result = ol3_sidebar.helloWorld();
        expect(result).to.equal('Hello World');
    });

    it('should sum numbers', function() {
        var result = ol3_sidebar.soma(2, 3);
        expect(result).to.equal(5);
    });

    it('should sub numbers', function() {
        var result = ol3_sidebar.sub(2, 3);
        expect(result).to.equal(-1);
    });

    it('should display my name', function() {
        var result = ol3_sidebar.displayMyName('Rod');
        expect(result).to.equal('Your name is Rod');
    });
});

*/
