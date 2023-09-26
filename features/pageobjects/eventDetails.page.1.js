import { $ } from '@wdio/globals'
import Page from './page.js';


class eventDetails extends Page {
    
    get inputName() {return $("//input[@type= 'text'][1]");}
    get inputEmail() { return $("//input[@type= 'email']");}
    get btnSubmit() { return $('button[type="submit"]'); }
    get btnformSubmit() { return $("[jsname='OCpkoe'] .l4V7wb"); }
    get inputDate() { return $("[type='date']") }
    get inputGender() { return $("//div[@data-value='Female']") }
    get inputOrgnaisation() { return $("//div[@class = 'Pc9Gce Wic03c']") }


    async enterMandatoryFieldsOnly(Name, Email, DOB, org) {
        await this.inputName.setValue(Name)
        await this.inputEmail.setValue(Email)
        await this.inputDate.setValue(DOB)
        // await this.inputOrgnaisation.setValue(org)
        await this.inputGender.click()
        await browser.pause(5000)

    }

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

    async submitForm() {
        await this.btnformSubmit.click();
        console.log(" ******* Submitted Form ********")
    }


}

export default new eventDetails();
