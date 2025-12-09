//require() - a built-in function in JavaScript to include node modules.
//const {test,expect} = require('@playwright/test);

import {test, expect} from '@playwright/test';

test('My first test',async function({page}){
    expect(12).toBe(12);
})

test.skip('My second test',async function({page}){
    expect(10).toBe(8+3);
})

test('My third test',async function({page}){
    expect("Amey Kulkarni").toContain("Amey");
    expect(true).toBeTruthy();
})

test('My fourth test',async function({page}){
    expect(false).toBeFalsy();
})

test('My fifth test',async function({page}){
    expect("Amey Kulkarni".includes("Kulkarni")).toBeTruthy();
})