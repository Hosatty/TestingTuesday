import { $ } from '@wdio/globals'
import Page from './page.js';
// import config from '../../wdio.conf.js'


let expectedUrl = ('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0')



class landingpage extends Page {

    get eventTiming() { return $("//div[text()[contains(.,'Event Timing')]]") }
    get inputOrgnaisation() { return $("//div[@class = 'Pc9Gce Wic03c']") }
    get NextButtononLandingPage() { return $("//div[@role= 'button']") }


    async verifyLandingScreen() {
        await browser.url("");
        //Assertions using Expects
        await expect(browser).toHaveUrl(expectedUrl)
        await expect(browser).toHaveTitle('Event registration')
        await expect(this.NextButtononLandingPage).toBeDisplayed({ message: 'Button Not displayed' });
    }

    async verifylandingpageUI() {
        await expect(browser).toHaveTitle('Event registration')
        var eventTiming1 = await (this.eventTiming).getText()
        console.log('+++++++' + eventTiming1 + '======ETTTTT')
        // await expect(this.eventTiming1).toHaveTextContaining('Event')
        await expect(this.eventTiming).toBeDisplayed({ message: 'Event timing description is NOT displayed' });
        await expect(this.NextButtononLandingPage).toBeDisplayed({ message: ' <Next> Button Not displayed' });
    }

    async submitForm() {
        await this.NextButtononLandingPage.click();
        await browser.pause(3000)
    }


}

export default new landingpage();
