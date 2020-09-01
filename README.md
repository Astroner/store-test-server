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
     name: string
     description: string
     category: ID
     price: number
 }>
 ```
query params:
 - category - applies category filter (type: number)
   
#### GET /merchandise/{id}/
  returns
  ```typescript
    {
        id: ID
        name: string
        description: string
        category: ID
        price: number
    }
  ```

#### GET /category/ 
 returns
 ```typescript
 type Response = Array<{
    id: ID
    name: string
    description: string
 }>
```

#### GET /category/{id}
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