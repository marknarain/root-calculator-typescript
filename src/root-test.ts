import * as root from "./root"
import { rootOf2 } from "./root2reference"
import assert from 'assert';

/////////////////////////////////////////////////////////////
//
// test results of root()
//
/////////////////////////////////////////////////////////////

/**
 * 
 * test results of splitNumber()
 * 
 */

export function splitNumberTest() {
    
    let x: number[] = [];

    x = root.splitNumber(0);                        assert.deepStrictEqual(x, [0], String(x));
    x = root.splitNumber(1);                        assert.deepStrictEqual(x, [1], String(x));
    x = root.splitNumber(12);                       assert.deepStrictEqual(x, [12], String(x));
    x = root.splitNumber(123);                      assert.deepStrictEqual(x, [1,23], String(x));
    x = root.splitNumber(1234);                     assert.deepStrictEqual(x, [12,34], String(x));
    x = root.splitNumber(12345);                    assert.deepStrictEqual(x, [1,23,45], String(x));
    x = root.splitNumber(123456);                   assert.deepStrictEqual(x, [12,34,56], String(x));
    x = root.splitNumber(1234567);                  assert.deepStrictEqual(x, [1,23,45,67], String(x));
}

/**
 * 
 * test results rootOfFirstItem()
 * 
 */

export function rootOfFirstItemTest() {

    let x;

    x = root.rootOfFirstItem(84);   	            assert.deepStrictEqual(x, 9, String(x));
    x = root.rootOfFirstItem(35);   	            assert.deepStrictEqual(x, 5, String(x));
    x = root.rootOfFirstItem(48);   	            assert.deepStrictEqual(x, 6, String(x));
    x = root.rootOfFirstItem(10);   	            assert.deepStrictEqual(x, 3, String(x));

}

/**
 * 
 * test results of rootDigitCalculator()
 * 
 */

export function rootDigitCalculatorTest() {

    let x;

    x = root.rootDigitCalculator(800,8);            assert.deepStrictEqual(x, 4, String(x));
    x = root.rootDigitCalculator(700,8);            assert.deepStrictEqual(x, 4, String(x));
    x = root.rootDigitCalculator(600,8);            assert.deepStrictEqual(x, 3, String(x));

}

/**
 * 
 * test results of root()
 * 
 */

export function rootTest() {
    
    function rootT(a:number, decimalPlaces:number) {
        console.log("Calculate root of " + String(a) + " with " + String(decimalPlaces) + " decimal places");
        let x = String(root.root(a, decimalPlaces));
        assert.ok(rootOf2.startsWith(x),x);
    }

    let x;

    x = rootT(2,0);
    x = rootT(2,1);
    x = rootT(2,10);
    x = rootT(2,20);
    x = rootT(2,28);

}