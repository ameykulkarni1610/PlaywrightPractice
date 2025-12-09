import { test, expect } from '@playwright/test';
import path from 'path';

test('Handling Alerts', async ({ page }) => {
  await page.goto("https://paytm.com/");
  
  await page.locator("span[title='Sign In']").click();
  
  //find all iframes from the page
  const allFrames =  page.frames();
  //const allFrames = page.locator('iframe');
  console.log("Total Frames: " + allFrames.length);
  
  /*let found = false;
  
  for(const outerframe of allFrames)
  {
      const innerframes = await outerframe.childFrames();
      
      for(const inner of innerframes)
      {
          
       const element = await inner.locator("text=Open Paytm App");

       if (await element.count() > 0)
       {
        console.log("Element Found!");
        found = true;
        break;
       }
       
      }       
      if (found) break; 
  }*/
  const element = page.frameLocator("iframe[src*='login?isIframe=true']")
             .frameLocator("iframe")
             .getByText("Open Paytm App");
    
   await expect(element).toBeVisible();
   
   console.log("element text : " + await element.innerText());
  
});


/*
 driver.findElement(By.xpath("//*[text()='Sign In']")).click();
        Thread.sleep(3000);
        
        //Find the total number of frames present on the web page
        int allFrames = driver.findElements(By.tagName("iframe")).size();
        System.out.println("Total Frames: " + allFrames);
        
        //Check if the element is present or not
        for(int i=0; i< allFrames;i++)
        {
            driver.switchTo().frame(i);
            //To find frame inside a frame
            driver.switchTo().frame(i); //Switching to inner frame from outer frame
            
            String expText = "Open Paytm App";
            String actText = driver.findElement(By.xpath("//*[text()='Open Paytm App']")).getText();
            
            if(actText.equalsIgnoreCase(expText))
            {
                System.out.println("Element Found");
                break;
            }
*/