import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { expect, $, driver, browser } from '@wdio/globals';
import landingpage from '../pageobjects/landingpage.page.js';
import personalDetailsPage from '../pageobjects/personalDetailsPage.page.js';



// const pages = {
//     login: LoginPage,
//     landing: landingpage,
//     personalDetails: personalDetailsPage,
// }
// @After() 

Given('I am on the landing screen', async function () {
    await landingpage.verifyLandingScreen()
});

Then('Landing page displays correct information', async function() {
    await landingpage.verifylandingpageUI()
});

When('I navigate to the personal details page' , async function () {
    await landingpage.submitForm()
});

Then('personal details form should be displayed', async function() {
    await personalDetailsPage.verifyFormElements()
});

When(/^I dont enter value in Mandatory field (.*) (.*)$/, async (Name, Email) => { 
    await personalDetailsPage.enterMandatoryFieldsOnly(Name, Email)
    await personalDetailsPage.submitForm()
    await personalDetailsPage.madatoryFieldsValidation(Name, Email)
});

When(/^I enter only mandatory fields in personal information page (.*) (.*) (.*) (.*)$/, async (Name, Email, DOB, org) => {
    await personalDetailsPage.enterMandatoryFieldsOnly(Name, Email, DOB, org)

});


When('I submit the form', async function () {
    await landingpage.submitForm()

});





