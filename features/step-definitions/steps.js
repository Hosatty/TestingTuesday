import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import FormPage from '../pageobjects/form.page.js';

const pages = { 
    login: LoginPage,
    form: FormPage
}

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

Given('I am on the landing screen', async function(){
    await browser.url('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0');
console.log(await browser.getUrl()); 
const myButton = await $("//div[@role= 'button']")
    await myButton.click()
    console.log('** Clicked the button ** '); 
});


// When('I enter only mandatory fields in personal information page ', async function (Name)  {
// console.log('** ******  STEPClicked the button ** ') 
// await FormPage.enterMandatoryFieldsOnly(Name)

// });

When('I submit the form', async function ()  {
console.log('** ******  STEPClicked the button ** ') 
await FormPage.submitForm()
    
});

When(/^I enter only mandatory fields in personal information page (.*) (.*) (.*) (.*)$/, async (Name, Email, DOB, org) =>{
    console.log('** ******  WHEN EWHEN ** ') 
    await FormPage.enterMandatoryFieldsOnly (Name, Email, DOB, org)
    
    });
    




// Given('I open the page with the url {string}', (url, next) => {
//     console.log(url) // log to check the variable is being passed into the function

//     driver.get(url);

//     pageElement = driver.findElement(By.id("email"));
//     pageElement.sendKeys("example@email.co.uk");

//     next(); 
// });

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

