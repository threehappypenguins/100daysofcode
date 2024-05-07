```console
npm install express
```

Open `debugging.js` and if using Visual Studio (VS) Code, next to the number 6 for the 6th line, a red dot should appear when hovering over the spot. Click in it to keep a red dot there. This is adding a "breakpoint" for the 6th line of code.

Edit package.json if needed and add the line:
```console
"debug": "node --inspect debugging.js"
```

So it looks something like:
```console
"scripts": {
    "start": "node debugging.js",
    "debug": "node --inspect debugging.js"
  },
  ```

  The command `node --inspect debugging.js` can be used in the console, but adding the `--inspect` flag to `package.json` is another way of accomplishing this.

  Then run:
  ```console
  npm run debug
  ```

  If using VS Code, click on the Debug tab (Ctrl+Shift+D), then click the drop-down arrow beside `Attach` and click `Add Configuration...`. Choose `{} Node.js: Attach`. This creates a `launch.json` file in the root of `.vscode`. Save.

  Now click the green play button beside `Attach`. This will launch the debugger and attach to the port 9229.

  In another console:
  ```console
  curl http://localhost:3000/Hello
  ```

  The debugger will instantly run the code and hit the breakpoint on line 6 of `debugger.js`. Various things can be inspected.

  In the top of VS Code, there is a floating menu with options to Continue, Step Over, Step Into, Step Out, Restart, Disconnect, and Stop. Click `Continue` and `World!` will show up in the console (where curl was run) and terminate.
  
  Click Disconnect.

  In the Terminal window where it first showed the debugger attached (not the one where the curl command was run), press `Ctrl+C` to end.