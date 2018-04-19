var generator = require('../next-generation-generator');
var expect = require('chai').expect;
var assert = require('assert');

describe('The Game Of Life test', function () {
    it('should return the the next generation of alive cells and dead cells', function () {
        expect(generator.generateNextGeneration()).to.be.eql([{ xAxes: 0, yAxes: 0, status: false },
        { xAxes: 0, yAxes: 1, status: false },
        { xAxes: 0, yAxes: 2, status: true },
        { xAxes: 0, yAxes: 3, status: false },
        { xAxes: 0, yAxes: 4, status: false },
        { xAxes: 0, yAxes: 5, status: false },
        { xAxes: 1, yAxes: 0, status: false },
        { xAxes: 1, yAxes: 1, status: false },
        { xAxes: 1, yAxes: 2, status: true },
        { xAxes: 1, yAxes: 3, status: false },
        { xAxes: 1, yAxes: 4, status: false },
        { xAxes: 1, yAxes: 5, status: false },
        { xAxes: 2, yAxes: 0, status: false },
        { xAxes: 2, yAxes: 1, status: false },
        { xAxes: 2, yAxes: 2, status: true },
        { xAxes: 2, yAxes: 3, status: false },
        { xAxes: 2, yAxes: 4, status: false },
        { xAxes: 2, yAxes: 5, status: false },
        { xAxes: 3, yAxes: 0, status: false },
        { xAxes: 3, yAxes: 1, status: false },
        { xAxes: 3, yAxes: 2, status: false },
        { xAxes: 3, yAxes: 3, status: false },
        { xAxes: 3, yAxes: 4, status: false },
        { xAxes: 3, yAxes: 5, status: false },
        { xAxes: 4, yAxes: 0, status: false },
        { xAxes: 4, yAxes: 1, status: false },
        { xAxes: 4, yAxes: 2, status: true },
        { xAxes: 4, yAxes: 3, status: true },
        { xAxes: 4, yAxes: 4, status: false },
        { xAxes: 4, yAxes: 5, status: false },
        { xAxes: 5, yAxes: 0, status: false },
        { xAxes: 5, yAxes: 1, status: false },
        { xAxes: 5, yAxes: 2, status: true },
        { xAxes: 5, yAxes: 3, status: true },
        { xAxes: 5, yAxes: 4, status: false },
        { xAxes: 5, yAxes: 5, status: false }])
    });
});