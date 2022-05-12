export const homePage = new class homePage {


     NavigateToLink(link: string): void {
          cy.get(`a[title='${link}']`).click()
     }

     SelectDateFromCalendar(month: string, date: string, year: string) {
          cy.get(`div[class='vc-title-wrapper']`).click()
          cy.get(`span:contains('${new Date().getFullYear().toString().trim()}')`).click()
          cy.get(`span:contains('${year}')`).click()
          cy.get(`span:contains('${month}')`).click()
          cy.get(`div[class='vc-h-full'] >span:contains('${date}')`).eq(1).click()
     }

     AddAcademicsFilters(Academics: string) {
          cy.get(`#academicEventSelect`).select(Academics)
     }

     AddEventTypeFilters(EventType: string) {
          cy.get(`#typeSelect`).select(EventType)
     }

     AddOrganizationFilters(Organization: string) {
          cy.get(`#orgSelect`).select(Organization)
     }

     RequestAnEvent(RequestEvent){
          cy.get('#requestEventTypeSelect').select(RequestEvent)
     }

}



