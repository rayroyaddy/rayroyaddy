/// <refrence types="cypress"/>>


it('Google Test', function(){
    cy.viewport(2560, 1440);

    cy.visit('http://192.168.10.147:81/')
    cy.get('#email').type('srijanagiri2019@gmail.com')
    cy.get('#password').type('password1')
    cy.get('.btn_btn').click()
    cy.get('.nav-link > :nth-child(2) > .text-sm').click()
    cy.get('.mdi').click()
    cy.get(':nth-child(2) > .menu-toggle').click()
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > .menu-link').click()
    
    cy.get('#addOrganization').click()
    cy.get('#orgName').type('ABC')
    cy.get('#pan').type('009')
    cy.get('#vat').type('008')
    cy.get('#companyregno').type('007')
    cy.get('#phone').type('9844513544')
    cy.get('#email').type('yaddy@gmail.com')
    cy.get(':nth-child(3) > .form-group > .form-select').select('Koshi Province')
    cy.get('#ward').type('2')
    cy.get('#tole').type('04')
    cy.get('#image').click()
    cy.get('#slogan').type('hsgdh')
    cy.get('.btn-close').click()
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > .menu-link').click()
    cy.get('#addStaffButton').click()
    cy.get('#first_name').type('addy')
    cy.get('#middle_name').type('roy')
    cy.get('#last_name').type('Ray')
    cy.get('#email_address').type('adddy@gmail.com')
    cy.get('#mobile_number').type('9844513500')
    cy.get(':nth-child(1) > .form-check-label').click()
    cy.get('#date_of_birth').type('02/03/1997').click()
    cy.get(':nth-child(11) > .form-group > .form-select').select('A+')
    cy.get('#recruit_date').type('04/09/2000').click()
    cy.get('#staff_role').select('Admin', { force: true });

    cy.get('#designation').type('QA')
    cy.get('#permanent_ward').type('02')
    cy.get('#permanentaddress').type('Kathmandu')
    cy.get('#temporary_ward').type('05')
    cy.get('#saveStaff').click()
    cy.get('.close > span').click()
    cy.get(':nth-child(3) > .menu-toggle.menu-link').click()
    cy.get('[style="display: block;"] > :nth-child(1) > .menu-link').click()
    cy.get('#createaccount-tab').click()
    cy.get('#openingbalance-tab').click()
    cy.get('#fiscalyear-tab').click()
    cy.get('.treeview-menu.active > :nth-child(2) > .menu-link').click()
    cy.get('#paymentvoucher-tab').click()
    cy.get('#receiptvoucher-tab').click()
    cy.get('#printVoucherList').click()
    cy.get('.view_btn').click()
    cy.get('.export_btn').click()
    cy.get('.treeview-menu.active > .treeview > .menu-toggle').click()
    cy.get('.treeview-menu.active > .treeview > .treeview-menu > :nth-child(1) > .menu-link > span').click()
    cy.get('.treeview-menu > .active > .menu-link').click()
    cy.get(':nth-child(2) > .treeview > .treeview-menu > :nth-child(2) > .menu-link').click()
    cy.get('.treeview-menu > :nth-child(3) > .menu-link').click()
    cy.get(':nth-child(2) > .treeview > .treeview-menu > :nth-child(4) > .menu-link').click()
    cy.get(':nth-child(5) > .menu-link').click()
    cy.get(':nth-child(6) > .menu-link').click()
    cy.get(':nth-child(7) > .menu-link > span').click()
    cy.get('.sidebar-menu > :nth-child(3) > :nth-child(2) > :nth-child(4) > .menu-link').click()
    cy.get('.nav-link > :nth-child(2)').click()
    cy.get('[href="http://192.168.10.147:81/logout"]').click()







})