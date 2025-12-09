import {test, expect} from '@playwright/test';

test('Multiple Select Dropdown',async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    let states = await page.locator('#state option');
    const allStates = await states.count();
    
    let foundState = false;
    
     for(let i=0; i< allStates; i++)
    {
        let element = states.nth(i);
        const text = await element.innerText();
        if(text.includes("Rajasthan"))
        {
            foundState = true;
            break;
        }
        console.log( `${i}.${text}`);
    }
    
    await expect(foundState).toBeTruthy();
    
    //Selecting Multiple Values from the Dropdown - Only possible if multiple tag is available
    
    await page.locator('#hobbies').selectOption(['Reading','Swimming']);
    //await page.selectOption('#hobbies', ['Reading','Swimming']);
    
    const hobbies = await page.locator('#hobbies option');
    const count = await hobbies.count();
    let found = false;

    for (let i = 0; i < count; i++) {
    const text = await hobbies.nth(i).innerText();
    if (text.includes("Swimming")) {
        found = true;
        break;
    }
    }

    await expect(found).toBeTruthy();

});