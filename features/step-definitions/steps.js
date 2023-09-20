import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import FormPage from '../pageobjects/form.page.js';
import eventDetails from '../pageobjects/eventDetails.page.js';

const pages = { 
    login: LoginPage,
    form: FormPage,
    event: eventDetails
}



Given('I am on the landing screen', async function(){
    await browser.url('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0');
console.log(await browser.getUrl()); 
const myButton = await $("//div[@role= 'button']")
    await myButton.click()
    
});



When('I submit the form', async function ()  {
await FormPage.submitForm()
    
});

When(/^I enter only mandatory fields in personal information page (.*) (.*) (.*) (.*)$/, async (Name, Email, DOB, org) =>{
await FormPage.enterMandatoryFieldsOnly (Name, Email, DOB, org)
    
});
    




