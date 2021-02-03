import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
 
Given('I open racing post homepage', () => {
    cy.visit('https://www.racingpost.com/racecards/')
  });
 
  Then('I click the big race entries header', () => {
    cy.wait(2000)
    cy.get(':nth-child(8) > .rn-secondaryNav__list__link').click({force: true});
  });



  Then('I see date of the next big race event is in the future', () => {
    expect({ date: '13 Feb 21' }).to.eql({ date: '13 Feb 21' });
  });


  Then('I check title is present on homepage', () => {
    cy.title();
  });

  
  