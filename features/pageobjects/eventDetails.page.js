import { $ } from '@wdio/globals'
import Page from './page.js';

// import test from 'node/test';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class eventDetails extends Page {
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
            await browser.pause(5000)
            await this.inputName.setValue(Name)
            console.log (" ******* Name enetered ********")
            await this.inputEmail.setValue(Email)
            console.log (" ******* Email enetered ********")
            await this.inputDate.setValue(DOB)
            console.log (" ******* DOB enetered ********")
            // await this.inputOrgnaisation.setValue(org)
            await this.inputGender.click()
            console.log (" ******* Gender enetered ********")
            await browser.pause(5000)
            
    
    
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
   

}

export default new eventDetails();
