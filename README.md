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

# Part 2 - Script Executor

> Note: Steps Begin and End are placeholders with hardcoded payload


Request to *api/v1/charging/execute*:

```
Begin
Start station 1
Start station 2
Wait 2
Stop station 1
Stop station 2
End
```

Response:

```json
{
    "steps": [
        {
            "step": "Begin",
            "timestamp": 1679835553964,
            "companies": [],
            "totalChargingPower": 0,
            "totalChargingStations": []
        },
        {
            "step": "Start station 1",
            "timestamp": 1679835554007,
            "companies": [
                {
                    "id": 1,
                    "chargingStations": [
                        1
                    ],
                    "chargingPower": 10
                },
                {
                    "id": 3,
                    "chargingStations": [
                        1
                    ],
                    "chargingPower": 10
                }
            ],
            "totalChargingStations": [
                1
            ],
            "totalChargingPower": 10
        },
        {
            "step": "Start station 2",
            "timestamp": 1679835554037,
            "companies": [
                {
                    "id": 1,
                    "chargingStations": [
                        2
                    ],
                    "chargingPower": 10
                },
                {
                    "id": 2,
                    "chargingStations": [
                        2
                    ],
                    "chargingPower": 10
                }
            ],
            "totalChargingStations": [
                2
            ],
            "totalChargingPower": 10
        },
        {
            "step": "Stop station 1",
            "timestamp": 1679835556066,
            "companies": [
                {
                    "id": 1,
                    "chargingStations": [],
                    "chargingPower": 0
                },
                {
                    "id": 3,
                    "chargingStations": [],
                    "chargingPower": 0
                }
            ],
            "totalChargingStations": [],
            "totalChargingPower": 0
        },
        {
            "step": "Stop station 2",
            "timestamp": 1679835556085,
            "companies": [
                {
                    "id": 1,
                    "chargingStations": [],
                    "chargingPower": 0
                },
                {
                    "id": 2,
                    "chargingStations": [],
                    "chargingPower": 0
                }
            ],
            "totalChargingStations": [],
            "totalChargingPower": 0
        },
        {
            "step": "End",
            "timestamp": 1679835556101,
            "companies": [],
            "totalChargingPower": 0,
            "totalChargingStations": []
        }
    ]
}
```
