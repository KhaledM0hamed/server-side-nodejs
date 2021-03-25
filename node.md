# Node Modules, Express and REST API

## What	is	Node.js?
1. JavaScript	runtime	built	on	Chrome	V8	
JavaScript	Engine
2. Uses	an	`event-driven,	non-blocking I/O`	model
>Makes	it	lightweight	and	efficient

## Understanding Node Modules
1. File-based	Modules
2. Core	Modules
   - Part	of	core	Node
   - Examples:	path,	fs,	os,	util, ...
3. External	Node	modules
   - Third-party	modules
   - Installed	using	NPM
   - node_modules folder	in	your	Node	application

## Using	Node	Modules
1. Include	them	using	require	function
2. File-based	modules:
    - require(‘./module_name’)
    - Specify	the	relative	path	to	the	file
3. Core	and	External	modules:
   - require(‘module_name’)
   - Looks	for	external	modules	in:
       - ./node_modules,	../node_modules,	../../node_modules,	.	.	.
       - Up	the	folder	hierarchy	until	the	module	is	found

## Node and the HTTP Module
### A Simple HTTP Server
#### 1. Create a file named index.js and add the following code to it:
```javascript
. . .

const fs = require('fs');
const path = require('path');

. . .

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl +
                        ' not found</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl +
                ' not a HTML file</h1></body></html>');
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');
    }
})

    . . .
```

#### 2. Serving HTML Files
- In the public folder, create a file named index.html and add the following code to it:
```html
<html>
    <title>This is index.html</title>
    <body>
        <h1>Index.html</h1>
        <p>This is the contents of this file</p>
    </body>
</html>
```
- Similarly create an aboutus.html file and add the following code to it:
```html
<html>
    <title>This is aboutus.html</title>
    <body>
        <h1>Aboutus.html</h1>
        <p>This is the contents of the aboutus.html file</p>
    </body>
</html>
```
## Node	Modules Semantic Versioning
- `<MajorVersion>.<Minor Version>.<Patch>`
- npm install	can	specify	the	acceptable	package	version:
    - Exact:	`npm install	express@4.0.0`
    - Patch	acceptable:	`npm install	express@”~4.0.0”`
    - Minor	version	acceptable:	`npm	install	express@”^4.0.0”`