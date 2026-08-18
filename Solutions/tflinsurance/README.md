# Insurance Node.js Testing Sample

A small learning project demonstrating:

- Node.js
- Express
- REST API
- Routing
- Controllers
- Services
- Jest unit testing
- Supertest API testing
- Insurance policy purchase
- Insurance claim settlement

## Architecture

Client -> Route -> Controller -> Service -> In-memory data

## Install

```bash
npm install
```

## Run

```bash
npm start
```

API:

```text
http://localhost:3000
```

## Development mode

```bash
npm run dev
```

## Run tests

```bash
npm test
```

## API endpoints

### Policies

```text
GET  /api/policies
GET  /api/policies/:id
POST /api/policies/purchase
```

Purchase example:

```json
{
  "customerId": "CU001",
  "policyId": "P1001"
}
```

### Claims

```text
POST /api/claims
POST /api/claims/:id/settle
```

Create claim:

```json
{
  "customerId": "CU001",
  "policyId": "P1001",
  "amount": 500000
}
```

## Learning exercise

Students should add tests for:

1. Duplicate policy purchase
2. Expired policy
3. Claim amount = 0
4. Claim against unknown policy
5. Claim against inactive policy
6. Settlement above coverage
7. Settlement of unknown claim
8. Missing request fields
9. Invalid data types
10. Complete policy-purchase-to-claim-settlement journey
