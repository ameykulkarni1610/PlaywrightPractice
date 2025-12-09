import {test, expect } from '@playwright/test';

test('flaky random test' , async ({page}) => {
    await page.goto('https://www.google.com');
    
    //randomly fail the test 50% of the time
    const randomNumber = Math.random();
    
    //Make the test fail half of the time on purose
    expect(randomNumber).toBeGreaterThan(0.5);
});