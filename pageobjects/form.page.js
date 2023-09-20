import { $ } from '@wdio/globals'
import Page from './page.js';

// import test from 'node/test';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputName () {
        return $("//input[@type= 'text'][1]");
    }

    get inputEmail () {
        return $("//input[@type= 'email']");
    }

    get btnSubmit ()            {return     $('button[type="submit"]');} 
    get btnformSubmit ()        {return     $("[jsname='OCpkoe'] .l4V7wb"); }
    get inputDate ()            {return     $("[type='date']")}
    get inputGender ()          {return     $("//div[@data-value='Female']")}
    get inputOrgnaisation ()    {return     $("//div[@class = 'Pc9Gce Wic03c']")}

    
    async enterMandatoryFieldsOnly(Name, Email, DOB, org) {
        
            await this.inputName.setValue(Name)
            await this.inputEmail.setValue(Email)
            await this.inputDate.setValue(DOB)
            await this.inputOrgnaisation.setValue(org)
            await this.inputGender.click()
            await browser.pause(5000)
            console.log (" ******* Email enetered ********")
    
    
        }
   

    // async enterMandatoryFieldsOnly() {
        
    //     await this.inputName.setValue('Vivek')
    //     await this.inputEmail.setValue('Vivek@vivek.com')
    //     await this.inputDate.setValue('01/01/1990')
    //     await this.inputGender.click()
    //     await browser.pause(30000)
    //     console.log (" ******* Email enetered ********")


    // }

    async submitForm () {
        await this.btnformSubmit.click();
        await browser.pause(30000)
        console.log (" ******* Submitted Form ********")
    }
   


//  ********************************************************************************* //


    //  /**
    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */
    // async login (username, password) {
    //     await this.inputName.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new FormPage();
