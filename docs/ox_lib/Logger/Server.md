## Submit logs to Datadog

Register an account with [datadog](https://www.datadoghq.com/). Once registered you need to create an [API key](https://app.datadoghq.com/organization-settings/api-keys).  
Modify your `server.cfg` with the newly generated API key and [intake server](https://docs.datadoghq.com/api/latest/logs/#send-logs).

- datadoghq.com
- us3.datadoghq.com
- us5.datadoghq.com
- datadoghq.eu

```yaml
set datadog:key "yourapikey"
set datadog:site "datadoghq.com"
```

```lua
lib.logger(source, event, message, ...)
```

- source: `string` or `number`
- event: `string`
- message: `string`
- ...: `string`

Source is passed to `ddsource` and creates a tag. Could be playerId, identifier, -1, or server.  
Event is passed to `ddservice` and displays in the logs list.  
Additional arguments are converted into tags for additional filtering and search options.

```lua
local vehicle = Ox.CreateVehicle(false, `sultanrs`, vec(-56.479122, -1116.870362, 26.432250, 0.000030517578))
lib.logger(-1, 'CreateVehicle', json.encode(vehicle))
```

![image](https://user-images.githubusercontent.com/65407488/165902870-4c938da7-a068-4d19-af5b-20402c325e87.png)

![image](https://user-images.githubusercontent.com/65407488/165902834-702a738d-9ae2-4725-ad85-8b8835115f7d.png)

## Submit logs to Grafana Loki

Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate. It does not index the contents of the logs, but rather a set of labels for each log stream.

You can take two routes with Grafana Loki:

[Grafana Cloud](https://grafana.com/)

- Has free tier with some restrictions
- Easy to manage
- Easier to setup
- Mostly Managed by Grafana

Self-Host [Grafana Stack](https://grafana.com/get/?plcmt=top-nav&cta=downloads&tab=self-managed)

- No imposed restrictions
- Requires own server
- Complicated to setup
- Self-Managed

### Grafana Cloud Setup (Easy)

Once registered with Grafana Cloud, head to [My Account](https://grafana.com/auth/sign-in/?plcmt=top-nav&cta=myaccount) click your named stack (should be under Grafana Cloud section) and then click Details on the Loki section. Click Generate Now where it says password. Save the key for later. Save your user and url also, you don't need the `https://`

### Grafana Self-Hosted Setup (Experience Required)

To setup a grafana instance you'll require docker, and knowledge on containers or kubernetes. Please find a guide to setup a grafana stack (min requirement grafana and grafana loki) and follow that. Once done, setup authentication and use the username and password securing your endpoint.

[*] Please note: By default self-hosted loki instances do not provide any authentication layers and will require an external authentication layer such as NGINX basic auth or Cloudflare Access.

#### Setting up Server Config

Open your server.cfg and if you have previously used datadog logging, change the `ox:logger` tag to be loki if not add the following tags to your cfg.

```yaml
set ox:logger "loki"
set loki:user "<insert your user>"
set loki:password "<insert the api key or password>"
set loki:endpoint "<insert loki url without http:// or https://>"
```

Here is an example

```yaml
set ox:logger "loki"
set loki:user "1337"
set loki:password "alongcomplicatedsecurepassword"
set loki:endpoint "logs.mywebsite.com"
```

#### Inserting data

The data can be inserted into Loki the same way as datadog so you can follow the log format from the above datadog section.

#### Browsing Data

If you're unfamiliar with how to use Loki please follow an online guide or a youtube video. You can get quite in-depth with what you can do, you can even track metrics and economic health all from logs.
