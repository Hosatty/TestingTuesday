import { $ } from '@wdio/globals'
import Page from './page.js';
import { isNull } from 'util';
import { url } from 'inspector';



class personalDetailsPage extends Page {
    
    get inputName() {return $("//input[@type= 'text'][1]");}
    get inputEmail() { return $("//input[@type= 'email']");}
    get btnSubmit() { return $('button[type="submit"]'); }
    get btnformSubmit() { return $("[jsname='OCpkoe'] .l4V7wb"); }
    get inputDate() { return $("[type='date']") }
    get inputGender() { return $("//div[@data-value='Female']") }
    get inputOrgnaisation() { return $("//div[@class = 'Pc9Gce Wic03c']") }
    get NameisMandatoryMessage() {return $ ("//div[@id ='i1']/../../..//span[text() ='This is a required question']")}
    get GenderisMandatoryMessage() {return $ ("//div[contains(@class, 'geS5n Jj6Lae') and //text() = 'This is a required question']")}
    get EmailisMandatoryMessage() {return $ ("//div[@id ='i26']/../../..//span[text() ='This is a required question']")}


    async enterMandatoryFieldsOnly(Name, Email, DOB, org) {
        await this.inputName.setValue(Name)
        await this.inputEmail.setValue(Email)

        // await this.inputDate.setValue(DOB)
        // await this.inputOrgnaisation.setValue(org)
        // await this.inputGender.click()

    }

    async verifyFormElements() {
    await expect(this.inputName).toBeDisplayed({ message: '<Name> is NOT displayed' });
    await expect(this.inputEmail).toBeDisplayed({ message: '<email> is NOT displayed' });
    await expect(this.inputDate).toBeDisplayed({ message: '<Date of Birth> is NOT displayed' });
    await expect(this.inputGender).toBeDisplayed({ message: '<Gender> is NOT displayed' });
    await expect(this.inputOrgnaisation).toBeDisplayed({ message: '<org> is NOT displayed' });
    }

    async madatoryFieldsValidation(Name, email) {
    console.log ("The Name is " + Name)
    console.log ("The email is " + email)
    if (Name = isNull) 
    { 
      console.log ( 'email is null')
      var errMsg = await (this.NameisMandatoryMessage).getText()
      console.log ( 'email is null' + errMsg + '======"')

      await expect(this.NameisMandatoryMessage).toBeDisplayed({message: 'NameisMandatoryMessage is NOT displayed' });
      await expect(this.NameisMandatoryMessage).toHaveTextContaining('This is a required question');
     
    }
    if (email = '') 
    { await expect(this.NameisMandatoryMessage).toBeDisplayed({message: 'NameisMandatoryMessage is NOT displayed' });
      await expect(this.NameisMandatoryMessage).toHaveText('This is a required question');
    
    }
    }

    async submitForm() {
        await this.btnformSubmit.click();
        console.log(" ******* Submitted Form ********")
    }


}

export default new personalDetailsPage();
