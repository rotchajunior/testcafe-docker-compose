import { Selector } from 'testcafe';

class Home {
    constructor () {
        this.siteHeader = Selector('h1.text-success');
    }
}

export default new Home();