/// <reference types='cypress' />
import MegaMenuPage from "../pages/MegaMenuPage.js";

    const megaMenuPage = new MegaMenuPage();

    beforeEach(() => {
        cy.visit("/");
    })

    describe("Verify MegaMenu modules", () => {
        it("Successfully directed to Apple page", () => {
            megaMenuPage
                .clickAppleMobilesMenu()
                .assertPageTitle('Apple');
        })
    })