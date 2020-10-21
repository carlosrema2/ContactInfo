const chai = require('chai');
const chaiHttp = require('chai-http');
const contactEntry = require('../contact-entry.js');
const utils = require('../lib/utils.js');

chai.use(chaiHttp);

describe('contact-entry.js', () => {
  it('Should create a new contact', async () => {
    try {
      const requestBody = {
        name: {
          first: 'Alexander',
          middle: 'Salinas',
          last: 'Franco'
        },
        address: {
          street: '1442 N Bosworth Av',
          city: 'Chicago',
          state: 'Ilinois',
          zip: '60624'
        },
        phone: [{
          number: '773-453-4322',
          type: 'home'
        },
        {
          number: '773-745-5444',
          type: 'mobile'
        }
        ],
        email: 'hAlex12@gmial.com'
      };
      const result = await contactEntry.executeCreateContact(requestBody);
      chai.expect(parseInt(result.id, 10)).greaterThan(0);
      chai.expect(result.ok).to.equal(true);
    } catch (error) {
      chai.expect(error.message).to.equal('This should not happen');
    }
  });
  it('Should list all contacts', async () => {
    try {
      const result = await contactEntry.executeListAllContact();
      chai.expect(result.length).greaterThan(0);
      chai.expect(result[0]).to.have.property('name');
    } catch (error) {
      chai.expect(error.message).to.equal('This should not happen');
    }
  });


  it('Should list all contacts', async () => {
    try {
      const result = await utils.list();
      chai.expect(result.rows.length).greaterThan(0);
      chai.expect(result.rows[0].doc).to.have.property('name');
    } catch (error) {
      chai.expect(error.message).to.equal('This should not happen');
    }
  });

  it('Should list a aspecific contact record', async () => {
    try {
      const result = await utils.listSpecificRecord('1');
      chai.expect(result._id).equals('1');
    } catch (error) {
      chai.expect(error.message).to.equal('This should not happen');
    }
  });
});