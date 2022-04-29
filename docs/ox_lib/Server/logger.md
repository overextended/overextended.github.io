# Logger

Submit logs to Datadog.

Register an account with [datadog](https://www.datadoghq.com/). Once registered you need to create an [API key](https://app.datadoghq.com/organization-settings/api-keys).  
Modify your `server.cfg` with the newly generated API key and [intake server](https://docs.datadoghq.com/api/latest/logs/#send-logs).
- datadoghq.com
- us3.datadoghq.com
- us5.datadoghq.com
- datadoghq.eu
```
set datadog:key "yourapikey"
set datadog:site "datadoghq.com"
```

```lua
-- source: string | number
-- event: string
-- message: string
-- ...: string
lib.logger(source, event, message, ...)
```

Source is passed to ddsource and creates a tag. Could be playerId, identifier, -1, or server.  
Event is passed to ddservice and displays in the logs list.  
Additional arguments are converted into tags for additional filtering and search options.

```lua
local vehicle = Ox.CreateVehicle(false, `sultanrs`, vec(-56.479122, -1116.870362, 26.432250, 0.000030517578))
lib.logger(-1, 'CreateVehicle', json.encode(vehicle))
```

![image](https://user-images.githubusercontent.com/65407488/165902870-4c938da7-a068-4d19-af5b-20402c325e87.png)

![image](https://user-images.githubusercontent.com/65407488/165902834-702a738d-9ae2-4725-ad85-8b8835115f7d.png)
