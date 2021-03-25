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