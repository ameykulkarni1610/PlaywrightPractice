import {test, expect} from '@playwright/test';

test.skip('My first test',async function({page}){
    expect(12).toBeGreaterThan(20);
})

test('My second test',async function({page}){
    expect(20).toBeLessThan(15);
})

test.skip('My third test',async function({page}){
    expect(10).toBeGreaterThanOrEqual(12);
})

test.skip('My fourth test',async function({page}){
    expect(15).toBeLessThanOrEqual(20);
})