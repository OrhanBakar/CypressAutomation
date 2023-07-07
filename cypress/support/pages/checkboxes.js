class Checkboxes {
  get checkbox1() {
    return cy.get('#box1', { timeout: 2000 });
  }

  get checkbox2() {
    return cy.get('#box2', { timeout: 2000 });
  }
}

const checkboxes = new Checkboxes();

module.exports = { checkboxes };
