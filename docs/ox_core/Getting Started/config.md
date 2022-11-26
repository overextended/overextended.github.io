# Config

Resource configuration is handled using [convars](https://docs.fivem.net/docs/scripting-reference/convars/).  

## Server

```yml
# Players must have a valid identifier to join the server. Used to fetch userid from the database.
set ox:primaryIdentifier "fivem"

# Set the number of active characters a user can have registered.
setr ox:characterSlots 5

# Enables debug and development features. Should only be used in a development environment.
setr ox:debug 0
```
