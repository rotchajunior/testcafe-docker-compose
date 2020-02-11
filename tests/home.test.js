import home from '../models/home-model';
import config from '../config';


fixture `Check Home`
    .page `${config.baseUrl}`;


test('should have text', async t => {

    await t
      .maximizeWindow()

    await t
      .expect(home.siteHeader.textContent).contains('Parquinho');
  });