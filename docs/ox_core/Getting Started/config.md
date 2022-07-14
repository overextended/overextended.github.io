# Config

## Convars

| Name                 | Default | Replicated |
| -------------------- | ------- | ---------- |
| ox:primaryIdentifier | fivem   | false      |
| ox:characterSlots    | 5       | true       |

## Convar overrides

Convars for other resources are set when ox_core starts.

| Name                                | Value                                                   | Replicated |
| ----------------------------------- | ------------------------------------------------------- | ---------- |
| inventory:framework                 | ox                                                      | true       |
| inventory:trimplate                 | 5                                                       | true       |
| pe-basicloading:disableAutoShutdown | 1                                                       | true       |
| npwd:useResourceIntegration         | true                                                    | false      |
| npwd:database                       | {playerTable: "characters", identifierColumn: "charid"} | false      |
