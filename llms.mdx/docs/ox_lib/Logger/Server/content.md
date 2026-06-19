# Server (/docs/ox_lib/Logger/Server)



## lib.logger [#liblogger]

```lua
lib.logger(source, event, message, ...)
```

* source: `number` or `string`
  * Preferably an active player id, otherwise an identifier, or wherever else it originated from.
* event: `string`
  * A name for the log event (i.e. the trigerring event or a description)
* message: `string`
  * The content for the log.
* vararg: `string`
  * Additional arguments are converted to tags for additional filtering and searching.

<br />

<u>
  **Example**
</u>

```lua
local vehicle = Ox.CreateVehicle(false, `sultanrs`, vector4(-56.479122, -1116.870362, 26.432250, 0.000030517578))
lib.logger(-1, 'CreateVehicle', json.encode(vehicle))
```

## Datadog [#datadog]

<div className="fd-steps">
  <div className="fd-step">
    ### Create your [Datadog](https://www.datadoghq.com/) account [#create-your-datadog-account-step]

    You will receive a free 14 day trial, otherwise refer to their [pricing](https://www.datadoghq.com/pricing/) guide.\
    Free accounts are limited, however logs will still be retained for 14 days.
  </div>

  <div className="fd-step">
    ### Create an [API key](https://app.datadoghq.com/organization-settings/api-keys) [#create-an-api-key-step]

    This is a UUID used to submit logs to your Datadog organisation.
  </div>

  <div className="fd-step">
    ### Config [#config-step]

    Set your API key and [Datadog site](https://docs.datadoghq.com/getting_started/site/) using the following convars.

    ```bash
    set datadog:key "yourapikey"
    set datadog:site "datadoghq.com"
    ```
  </div>
</div>

## Grafana Loki [#grafana-loki]

Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus.\
It is designed to be very cost effective and easy to operate.

<Tabs items="[&#x22;Cloud&#x22;, &#x22;Self-hosted&#x22;]">
  <Tab>
    * Has free tier with some restrictions
    * Easy to manage
    * Easier to setup
    * Mostly managed by Grafana

    <div className="fd-steps">
      <div className="fd-step">
        ### Create your [Grafana](https://grafana.com/) account [#create-your-grafana-account-step]
      </div>

      <div className="fd-step">
        ### Head to [My Account](https://grafana.com/auth/sign-in/?plcmt=top-nav\&cta=myaccount) [#head-to-my-account-step]
      </div>

      <div className="fd-step">
        ### Setup Loki [#setup-loki-step]

        Find the Loki section in your account panel, and click "Details".
        Generate a password and save the API key, as well as your `user` and `url`.
      </div>
    </div>
  </Tab>

  <Tab>
    To setup a grafana instance you'll need docker, and knowledge on containers or kubernetes.\
    Please find a guide to setup a grafana stack (min requirement grafana and grafana loki) and follow that.

    Once done, setup authentication and use the username and password securing your endpoint.

    * By default self-hosted loki instances do not provide any authentication layers and will require an external authentication layer such as NGINX basic auth or Cloudflare Access.
  </Tab>
</Tabs>

### Config [#config]

Use the following convars to set your logging service, endpoint, and authentication details.

```bash
set ox:logger "loki"
set loki:user "<insert your user>"
set loki:password "<insert the api key or password>"
set loki:endpoint "<insert loki url without http:// or https://>"
```

## Fivemanage [#fivemanage]

[Fivemanage](https://fivemanage.com/?ref=overextended) is an easy-to-use, all-in-one SaaS for game servers that provides logging.

<div className="fd-steps">
  <div className="fd-step">
    ### Create an account [#create-an-account-step]

    Sign up at [Fivemanage](https://fivemanage.com/?ref=overextended).

    <div className="fd-steps">
      <div className="fd-step">
        #### Upgrading to `Hobby` or `Pro` tier (optional) [#upgrading-to-hobby-or-pro-tier-optional-step]

        Logging is included in the free tier, but with limited storage and retention.

        If you decide to upgrade, you'll get a 14-day free trial if you do not already have a subscription. You can find more information [here](https://fivemanage.com/profile/billing?ref=overextended) and on the [pricing](https://fivemanage.com/pricing?ref=overextended) page.
      </div>
    </div>
  </div>

  <div className="fd-step">
    ### Create a new token [#create-a-new-token-step]

    You'll need to create a new token with the type `Logs`.
  </div>

  <div className="fd-step">
    ### Config [#config-step-1]

    ```bash
    set ox:logger "fivemanage"
    set fivemanage:key "YOUR_API_KEY"
    ```
  </div>
</div>
