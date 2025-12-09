import {test, expect} from '@playwright/test';

//test.use({viewport:{width:600,height:600}});

test('Customize Window Size',async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    
    console.log(await page.viewportSize().width);
    
    console.log(await page.viewportSize().height);

    
});