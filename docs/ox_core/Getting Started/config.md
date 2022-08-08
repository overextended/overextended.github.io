# Config

## Convars

| Name                 | Replicated | Default |
| -------------------- | ---------- | ------- |
| ox:primaryIdentifier | false      | fivem   |
| ox:characterSlots    | true       | 5       |

## Convar overrides

Convars for other resources are set when ox_core starts.

| Name                                | Replicated | Value                                                   |
| ----------------------------------- | ---------- | ------------------------------------------------------- |
| inventory:framework                 | true       | ox                                                      |
| inventory:trimplate                 | true       | true                                                    |
| pe-basicloading:disableAutoShutdown | true       | 1                                                       |
| npwd:useResourceIntegration         | false      | true                                                    |
| npwd:database                       | false      | {playerTable: "characters", identifierColumn: "charid"} |
