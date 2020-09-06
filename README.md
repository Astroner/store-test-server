### Hi there

### at first 
> npm install

### start server 
> npm start

### API
#### GET /merchandise/ 
 returns
 ```typescript
 type Response = Array<{
    id: ID
    name: string
    description: string
    category: ID
    price: number
 }>
 ```
query params:
 - category - applies category filter (type: number)
 - search - applies name filter (type: string)
   
#### GET /merchandise/{id}/
  returns
  ```typescript
    type Return = {
      id: ID
      name: string
      description: string
      category: ID
      price: number
    }
  ```

#### GET /categories/ 
 returns
 ```typescript
 type Response = Array<{
    id: ID
    name: string
    description: string
 }>
```

#### GET /categories/{id}
 returns
 ```typescript
 type Response = {
    id: ID
    name: string
    description: string
 }
```

#### POST /purchase/
```typescript
type Body = number[]
```

### Envs
 - HOST - daemon HOST
 - PORT - daemon PORT