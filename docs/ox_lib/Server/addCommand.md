# Command

```lua
-- principal: string or false
-- command: string
-- callback: function
-- parameters: table (optional)
-- help: string (optional)
lib.addCommand(principal, command, callback, parameters, help)

lib.addCommand('group.admin', {'additem', 'giveitem'}, function(source, args)
	args.item = Items(args.item)
	if args.item and args.count > 0 then
		Inventory.AddItem(args.target, args.item.name, args.count, args.metatype)
	end
end, {'target:number', 'item:string', 'count:number', 'metatype:?string'})
```
