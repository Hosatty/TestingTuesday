import { $ } from '@wdio/globals'
import Page from './page.js';
// import config from '../../wdio.conf.js'
let expectedUrl = ('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0')


class FormPage extends Page {
    
    get inputName() {return $("//input[@type= 'text'][1]");}
    get inputEmail() {return $("//input[@type= 'email']");}
    get btnSubmit() { return $('button[type="submit"]'); }
    get btnformSubmit() { return $("[jsname='OCpkoe'] .l4V7wb"); }
    get inputDate() { return $("[type='date']") }
    get inputGender() { return $("//div[@data-value='Female']") }
    get inputOrgnaisation() { return $("//div[@class = 'Pc9Gce Wic03c']") }


    async enterMandatoryFieldsOnly(Name, Email, DOB, org) {
        await browser.pause(5000)
        await this.inputName.setValue(Name)
        await this.inputEmail.setValue(Email)
        await this.inputDate.setValue(DOB)
        await this.inputOrgnaisation.setValue(org)
        await this.inputGender.click()
        await browser.pause(5000)
    }


    async verifyLandingScreen() {
        await browser.url("");
        //Assertions using Expects
        await expect(browser).toHaveUrl(expectedUrl)
        await expect(browser).toHaveTitle('Event registration')
        const myButton = await $("//div[@role= 'button']")
        await expect(myButton).toBeDisplayed({ message: 'Button Not displayed' });
        await myButton.click()
    }

    async submitForm() {
        await this.btnformSubmit.click();
        await browser.pause(30000)
    }


}

export default new FormPage();
