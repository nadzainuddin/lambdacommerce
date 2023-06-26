import "cypress-xpath";
import "cypress-real-events";

class MegaMenuPage {
    element = {
        megaMenu : () => cy.xpath('//span[normalize-space(text())="Mega Menu"]'),
        pageTitle : () => cy.xpath('//h1'),
        mobilesAppleMenu : () => cy.xpath('//h3/following-sibling::div//a[@title="Apple"]')
    }

    clickAppleMobilesMenu() {
        this.element.megaMenu().realHover()
        this.element.mobilesAppleMenu().click()
        return this
    }

    assertPageTitle(pageTitle) {
        this.element.pageTitle().should('have.text', pageTitle)
        return this
    }
}

export default MegaMenuPage;