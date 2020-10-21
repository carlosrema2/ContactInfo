# ContactInfo

Contact Entry
A simple contact entry system with REST APIs that will enable a client to perform CRUD operations on the contact collection.

Installation
1. git clone https://github.com/carlosrema2/ContactInfo
2. cd ContactInfo
3. npm install
4. export the environment variables described below
5. npm start
Environment Variable
iamApiKey - Reach out to me over email for the value of this IAM APIKEY
Request & Response Examples
API Resources:
POST /contacts Create a new contact
GET /contacts List all contacts
PUT /contacts/{id} Update a contact
GET /contacts Get a specific contact
DELETE /contacts Delete a contact
POST /contacts
This will create a new contact in the NoSQL cloudant database.

Request body:

{
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

Istanbul & Travis
Istanbul is the code coverage tool and is defined with the following minimum code coverage:

check:
  # Existing coverage checks.
  # For all files as an *aggregate*.
  global:
    statements: 75
    lines: 75
    branches: 50
    functions: 100

  # For each and every file on an individual basis.
  each:
    statements: 75
    lines: 75
    branches: 50
    functions: 100
