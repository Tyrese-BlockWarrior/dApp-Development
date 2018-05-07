/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('angular-app');
    })
  });

  it('network-name should be ehr@0.0.4',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('ehr@0.0.4.bna');
    });
  });

  it('navbar-brand should be angular-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('angular-app');
    });
  });

  
    it('Baby component should be loadable',() => {
      page.navigateTo('/Baby');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Baby');
      });
    });

    it('Baby table should have 13 columns',() => {
      page.navigateTo('/Baby');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(13); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Doctor component should be loadable',() => {
      page.navigateTo('/Doctor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Doctor');
      });
    });

    it('Doctor table should have 2 columns',() => {
      page.navigateTo('/Doctor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(2); // Addition of 1 for 'Action' column
      });
    });
  
    it('Mom component should be loadable',() => {
      page.navigateTo('/Mom');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Mom');
      });
    });

    it('Mom table should have 2 columns',() => {
      page.navigateTo('/Mom');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(2); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('addBaby component should be loadable',() => {
      page.navigateTo('/addBaby');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('addBaby');
      });
    });
  
    it('UpdateStatus component should be loadable',() => {
      page.navigateTo('/UpdateStatus');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UpdateStatus');
      });
    });
  
    it('addImmunizations component should be loadable',() => {
      page.navigateTo('/addImmunizations');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('addImmunizations');
      });
    });
  
    it('addExaminationNote component should be loadable',() => {
      page.navigateTo('/addExaminationNote');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('addExaminationNote');
      });
    });
  
    it('nextCheckUp component should be loadable',() => {
      page.navigateTo('/nextCheckUp');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('nextCheckUp');
      });
    });
  

});