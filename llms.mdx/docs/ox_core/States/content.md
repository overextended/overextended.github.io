# Global States (/docs/ox_core/States)



<Callout type="warning">
  These global state bags are automatically assigned by ox\_core and therefore should not be edited.
</Callout>

## groups [#groups]

Contains an array of the names of all registered groups.

**Returns**

* `string[]`

## group.\<name> [#groupname]

Contains information about the specified group.

**Returns**

* data: `object`
  * name: `string`
  * label: `string`
  * grades: `string[]`
  * type: `string`
  * hasAccount: `boolean`
  * accountRoles: `string[]`
  * principal: `string`

## \<name>:count [#namecount]

Contains the number of players that have the specified group.

**Returns**

* `number`

## \<name>:activeCount [#nameactivecount]

Contains the number of players that have the specified group set as active.

**Returns**

* `number`

## status.\<name> [#statusname]

Contains information about the specified status.

**Returns**

* data: `object`
  * name: `string`
  * default: `number`
  * onTick: `number`

## license.\<name> [#licensename]

Contains information about the specified license.

**Returns**

* data: `object`
  * label: `string`

## accountRoles [#accountroles]

Contains an array of the names of all registered account roles.

**Returns**

* `string[]`

## accountRole.\<name> [#accountrolename]

Contains information about the specified account role.

**Returns**

* data: `object`
  * deposit: `0` | `1`
  * withdraw: `0` | `1`
  * addUser: `0` | `1`
  * removeUser: `0` | `1`
  * manageUser: `0` | `1`
  * transferOwnership: `0` | `1`
  * viewHistory: `0` | `1`
  * manageAccount: `0` | `1`
  * closeAccount: `0` | `1`
  * sendInvoice: `0` | `1`
  * payInvoice: `0` | `1`
