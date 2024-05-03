```console
npm install express
node exp-mid-error-handling.js
```

In a browser navigate to `http://localhost:3000/example` and it should show `Something went wrong!`

Afterwards, the console should show something like:

```console
Server is running on port 3000
Error: Example error
    at /home/username/100daysofcode/nodejs/day014/exp-mid-error-handling.js:10:11
    at Layer.handle [as handle_request] (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/layer.js:95:5)
    at next (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/route.js:149:13)
    at Route.dispatch (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/route.js:119:3)
    at Layer.handle [as handle_request] (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/layer.js:95:5)
    at /home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/index.js:346:12)
    at next (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/index.js:280:10)
    at jsonParser (/home/username/100daysofcode/nodejs/day014/node_modules/body-parser/lib/types/json.js:113:7)
    at Layer.handle [as handle_request] (/home/username/100daysofcode/nodejs/day014/node_modules/express/lib/router/layer.js:95:5)
```