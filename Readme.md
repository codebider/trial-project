# NUX - Trial Project

Hello, 
Thank you for your interest in becoming part of Xendit's Family of Honey badgers. We would like to get to know you better through this Trial Day task. We're hoping to understand your approach and method to solve customer's problems. 

### [ Goal ]
Build a document management application (API or Web)

### [ Why ]
Your customers want to manage their document/data

### [ What ]
#### Must-Have
- Document Manager API MVP v1.0.0
- Build at least 1 feature option for V1.1.0
- Build at least 1 extra feature option for V1.2.0

#### Nice to Have
- Other suggested features
- Cool features you think the app should have
- Tech improvement you could think of


### Development
- Install dependencies `npm install`
- Start server `npm start`

### API layer
- [ ] POST /v1/login
- [ ] POST /v1/register
- [ ] GET /v1/documents - list documents
- [ ] GET /v1/documents/{id}
- [ ] DELETE /v1/documents/{id}
- [ ] PUT /v1/documents/{id}
- [ ] GET /v1/documents/one?name=&email=


### Migration
- Use this command line to create new model

`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

- Migrate database:

`npm run sequelize-cli db:migrate`

- Undo migrate:

`npm run sequelize-cli db:migrate:undo`
