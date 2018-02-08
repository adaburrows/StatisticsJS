var stats = require('../');
var expect = require('chai').expect;

const numberList = [10, 13, 11, 5, 23, 101];
const pointList = [[12, 11], [13, 17], [15, 18], [5, 3], [23, 19], [101, 108]];

describe('Binning', function() {

  describe('Accumulator Functions', function() {

    describe('integer_generator()', function() {

      it('should return an number zero', function() {
        var accumulator = stats.integer_generator();
        expect(accumulator).to.be.a('number');
        expect(accumulator).to.be.equal(0);
      });

    });

    describe('array_generator()', function() {

      it('should return an empty array', function() {
        var accumulator = stats.array_generator();
        expect(accumulator).to.be.a('Array');
        expect(accumulator).to.be.empty;
      });

    });

    describe('summation()', function() {

      it('should sum-accumulate a number in a bin', function() {
        var bins = [];
        var i = 0;
        bins[i] = stats.integer_generator();
        stats.summation(bins, i, 5);
        expect(bins[i]).to.be.a('number');
        expect(bins[i]).to.be.equal(5);
      });

    });

    describe('union()', function() {

      it('should union-accumulate a number in a bin', function() {
        var bins = [];
        var i = 0;
        bins[i] = stats.array_generator();
        stats.union(bins, i, 5);
        expect(bins[i]).to.be.a('array');
        expect(bins[i]).to.include(5);
      });

    });

  });

  describe('Binning Utilities', function() {

    describe('bin_size()', function() {

      /**
       * Imagine a number line broken down exactly into 6 bins of size 11:
       *
       *-33   -22   -11   0      11    22    33
       * +-----+-----+-----+-----+-----+-----+
       * |  1  |  2  |  3  |  4  |  5  |  6  |
       * +-----+-----+-----+-----+-----+-----+
       */

      it('should return the size of the bins given bounds and a count of the bins', function() {
        var size = stats.bin_size(-33,33,6);
        expect(size).to.be.a('number');
        expect(size).to.equal(11);
      });

    });

    describe('bin_count()', function() {

      // Use the same visual as above for reference

      it('should return the number of the bins given bounds and a size of the bins', function() {
        var n = stats.bin_size(-33,33,11);
        expect(n).to.be.a('number');
        expect(n).to.equal(6);
      });

      /**
       * Imagine a number line broken down exactly into 4 bins of size 10:
       *
       *-10    0     10    20    30
       * +-----+-----+-----+-----+
       * |  1  |  2  |  3  |  4  |
       * +-----+-----+-----+-----+
       * Since 23 is greater than 20 and each bin is size 10, there should be a bin for it to fill
       */

      it('should return the number of the bins given bounds and a size of the bins', function() {
        var n = stats.bin_size(-10,23,10);
        expect(n).to.be.a('number');
        expect(n).to.equal(4);
      });

    });

  });

});