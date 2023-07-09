// Splits the entered number into pairs of two digits.
// x = 1234 --> [12, 34]
// x = 123  --> [1, 23]
// x = 7    --> [7]
// The lenght of the resulting array == number of integer 
// digits of the square root of x

export function splitNumber(x:number) {

    let output: number[] = [0];
    
    while (x > 0) {

        output[0] = x % 100;
        x = (x - output[0]) / 100
        if (x == 0) {
            break;
        }
        
        output.splice(0,0,0);
    }
    return output;
}

// Finds the root of the closest smaller square number.
// x = 91    --> 9
// x = 64    --> 8
// x = 10    --> 3
// Entered values must be < 100

export function rootOfFirstItem(x:number) {
    let y = 9;
    while (x < (y**2)) {
        y -= 1;
    }
    return y;
}

// Subtracts the square of the first found Digit from the entered number

export function firstStepSquareMinus(x:number, y:number) {
    let output = x - y**2;

    return output;
}

// Uses a number x and the first found digit of the root
// to calculate the next root.

export function rootDigitCalculator(x:number, y:number) {
    
    let x2 = BigInt(x);   
    let y2 = BigInt(y);

    let a = y2 * BigInt(20);
    let b = x2 / a;
    
    a += b;
  
    while ((a * b) > x2) {
        b -= BigInt(1);
        a -= BigInt(1);
    }

    return Number(b);
}

// Calculates the root of number a and returns it as text
// the parameter decimalPlaces defines how many decimal places after the comma
// should be calculated.

let keyPressed = false;

export function root(a:number, decimalPlaces:number, debug = false, outputFile = "") {

    if (a == 0) {
        return "0";
    }
    else if (a < 0) {
        return "0";
    }

    let outputString = "";

    let aSplit = splitNumber(a);
    let b = rootOfFirstItem(aSplit[0]);
    outputString = outputString + String(b);
    let c1 = firstStepSquareMinus(aSplit[0], b) *100;

    let d1 = 0;
    let lenA = aSplit.length;
    let first = 1;

    // -1 bacuse 1st digit is already calculated with rootOfFirstItem()
    let x = decimalPlaces + lenA -1;

    while (x > 0) {

        x -= 1;

        if (lenA > 1) {
            c1 += aSplit[x +1];
            lenA -= 1;
        }

        if (first == 0) {
            b *= 10;
        }

        first = 0;

        b += d1;

        d1 = rootDigitCalculator(c1, b);

        outputString += String(d1);

        c1 = (c1 - ((20 * b + d1) * d1)) *100;

        if (c1 == 0) {
            break;
        }

    }

    return outputString.substring(0, lenA) + "," + outputString.substring(lenA);

}