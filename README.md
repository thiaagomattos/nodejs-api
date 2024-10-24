# Games API
This API is used to simulate the creation and management of games.

## Endpoints
### GET /games
This endpoint returns a list of all games stored in the database.

#### Parameters
None

#### Responses
##### OK! 200
If this response occurs, you will receive a list of all games.
Example response:
```
[
    {
        id: 23,
        title: "League of Legends",
        year: 2012,
        price: 0
    },
    {
        id:27,
        title: "Counter Strike",
        year: 2010,
        price: 25
    },
    {
        id:61,
        title: "Lego Star Wars",
        year: 2022,
        price: 190
    }
]
```

#### Authentication Failure! 401

If this response occurs, it means there was an authentication error. Possible reasons: Invalid token or expired token.

Example response:
```
{
    "err": "invalid token"
}
```

### POST /auth
This endpoint handles the login process and returns a JWT token.

#### Parameters
email: Registered user email.

password: User's password for the registered email.

Example:
```
{
    "email": "thiago@gmail.com",
    "password": "123"
}
```

#### Responses
##### OK! 200
If successful, you will receive a JWT token that allows access to protected API endpoints.

Example response:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2aWN0b3JkZXZ0YkBndWlhZG9wcm9ncmFtYWRvci5jb20iLCJpYXQiOjE1OTE3ODI0NzUsImV4cCI6MTU5MTk1NTI3NX0.y8kp3BxKgC86KFiq6-tAABukR6vi1guTPeRQhO74jd82T"
}
```

### PUT /game/:id
This endpoint updates an existing game.

#### Parameters
id: ID of an existing game in the system. Example: ID 27.

```
{
    title: "Counter Strike: Global Offensive",
    year: 2012
}
```
#### Responses
##### OK! 200
If successful, the game with the specified ID will be updated with the new data.

##### Bad Request! 400
If this response occurs, it means the game with the specified ID does not exist.


##### DELETE /game/:id
This endpoint deletes an existing game.

##### Parameters
id: ID of an existing game in the system.

#### Responses
##### OK! 200
If successful, the game with the specified ID will be deleted.

##### Bad Request! 400
If this response occurs, it means the game with the specified ID does not exist.
