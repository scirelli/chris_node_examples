#!/usr/bin/env node
function optionalParams(a: number, b?: number, c?: number): number {
    var result: number = (a + b + c)
    return result
};

console.log(optionalParams(1));
