import {test,expect} from '@playwright/test';

async function hoverMenu(page, items){
   for(const item of items)
   {
       await page.getByText(item, {exact:true}).hover();
   }
}

test('Mousehover simplified', async function({page}){
    await page.goto("https://www.flipkart.com/");
    
     //close login popup if it appears
    const closeBtn = page.getByRole('button',{name:'X'});
    if(await closeBtn.isVisible())
    {
        await closeBtn.click();
    }
    
    // Hover through Electronics → Gaming
    await hoverMenu(page, ['Electronics', 'Gaming']);
    
    
    // Click sub-submenu item
    await page.getByText('Gaming Consoles', { exact: true }).click();
    
    // Validation
    await expect(page).toHaveURL(/gaming/i);
});

/*
async function hoverAndClickSubmenu(page, main, sub) {
  await page.getByText(main, { exact: true }).hover();
  await page.getByText(sub, { exact: true }).click();
}

await hoverAndClickSubmenu(page, 'Electronics', 'Gaming');

*/