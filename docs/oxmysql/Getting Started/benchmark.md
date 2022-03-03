# Benchmark

Internal benchmark
```
Low: 0.1222ms | Avg: 0.14188357ms | Total: 1418.8357ms (10000 queries)
```

Round-trip-time for exports
```
Low: 0.1997ms | Avg: 0.25898800ms | Total: 2589.8800ms (10000 queries)
```

#### Lua (5.4)
```lua
local val = 10000
RegisterCommand('luasync', function()
	local queryTimesLocal = {}
	local result
	MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})

	for i=1, val do
		local time = os.nanotime()
		local r = MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})
		queryTimesLocal[#queryTimesLocal+1] = (os.nanotime() - time) / 1000000
		if i==1 then result = r end
	end

	local queryMsLow, queryMsSum = 1000, 0

	for _, v in pairs(queryTimesLocal) do queryMsSum = queryMsSum + v end
	for _, v in pairs(queryTimesLocal) do
		if v < queryMsLow then queryMsLow = v end
	end

	local averageQueryTime = queryMsSum / #queryTimesLocal
	print(json.encode(result))
	print('Low: '.. queryMsLow ..'ms | Avg: '..averageQueryTime..'ms | Total: '..queryMsSum..'ms ('..#queryTimesLocal..' queries)')
end)
```

#### JavaScript
```js
const val = 10000
RegisterCommand('jssync', async() => {
  const queryTimesLocal = [];
  let result
  await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])

  for(let i=0; i < val; i++) {
    const startTime = process.hrtime()
    const r = await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])
    queryTimesLocal.push(process.hrtime(startTime)[1] / 1000000)
    if (i === 0) result = r
  }

  const queryMsSum = queryTimesLocal.reduce((a, b) => a + b, 0)
  const queryMsLow = queryTimesLocal.sort((a, b) => a - b)[0]
  const averageQueryTime = queryMsSum / queryTimesLocal.length

  console.log(result)
  console.log('Low: '+ queryMsLow +'ms | Avg: '+averageQueryTime+'ms | Total: '+queryMsSum+'ms ('+queryTimesLocal.length+' queries)')
})
```