import{ homePage } from '../Pages/HomePage'

describe('Launch', () => {
    beforeEach(() => {
     
      cy.visit('/')
    })

    it('displays two todo items by default', () => {
      homePage.NavigateToLink('Today’s Events')
      homePage.SelectDateFromCalendar('May','20','2025')
      homePage.AddAcademicsFilters('Yes')
      homePage.AddEventTypeFilters('Speaker')
      homePage.AddOrganizationFilters('Art Department')
      homePage.RequestAnEvent('Alumni Event')
    })
})