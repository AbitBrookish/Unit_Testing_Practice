// const { assert } = require("chai");
// const assert = require('assert');
// const calcs = require('../calc.js');
// const Calc = calcs.Calc;
import { assert } from "chai";
import Calc from "../calc.js";


describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        const calc = new Calc();
        const answer = calc.add(1,2);
        const expected = 1 + 2;
        assert.strictEqual(answer, expected);
      });
    });

    describe('.subtract', () => {
      it('returns the difference of two values', () => {
        const calc = new Calc();
        const answer = calc.subtract(17, 7);
        const expected = 17 - 7;
        assert.strictEqual(answer, expected);
      });
    });

    describe('.multiply', () => {
      it('returns the product of two values', () => {
        const calc = new Calc();
        const answer = calc.multiply(9, 9);
        const expected = 9 * 9;
        assert.strictEqual(answer, expected);
      });
    });

    describe('.divide', () => {
      it('returns the quotient of two values', () => {
        const calc = new Calc();
        const answer = calc.divide(144, 12);
        const expected = 144 / 12;
        assert.strictEqual(answer, expected);
      })
    });
  });