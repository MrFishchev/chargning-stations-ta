# What is it?
It is a test assignment for Node.js engineer. Design an API for an automated charging station management system.

## Stack
* Node.js
* TypeScript
* PostgreSQL
* Sequelize ORM 

## Structure

* api - business logic
  * controllers
  * routes
  * services
  * exceptions
* db - database layer
  * dal - data access layer, responsible for any DB operation
  * filters
  * models - sequelize data models
* postman - all Postman collections and environment to access API

## Trade-offs
* Simple exception handling, only in routes
* No logging
* No tests
* No Swagger
* Docstring only for controllers (as an example)
* There is no Cascade or Paranoic (soft) deletions

## Getting Started

1. Run PostgreSQL: 
   
```
docker-compose up -d
```
2. Install packages:
```
npm ci
```
3. Start Service:

```
npm run start
```

# Part 1 - CRUD API

### Company
```json
{
  "id": 2,
  "name": "Company 2",
  "parentCompany": {
    "id": 1,
    "name": "Company 1"
  }
}
```
**Filters:** parent company

> Note: to fetch all stations owned by a company call */api/v1/companies/:companyId/stations*

### Station
```json
{
  "id": 1,
  "name": "Station 1",
  "company": {
    "id": 3,
    "name": "Company 3"
  },
  "type": {
    "id": 1,
    "name": "Station Type 1",
    "maxPower": 10
  }
}
```
**Filters:** type, company

### Station Type
```json
{
  "id": 1,
  "name": "Station Type 1",
  "maxPower": 10
}
```
