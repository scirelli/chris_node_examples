#!/usr/bin/env node

var tests = [
	{
		d:"All params are optional",
		f: function f(param1, param2, param3) {
			return [`Param1: ${param1}`, `Param2: ${param2}`, `Param3: ${param3}`];
		},
		v: [
			[1],
			[1,2],
			[1,2,3]
		]
	},
	{
		d:"Params can have defaults",
		f: function f(param1, param2 = 'a', param3 = 'b') {
			return [`Param1: ${param1}`, `Param2: ${param2}`, `Param3: ${param3}`];
		},
		v: [
			[1],
			[1,2],
			[1,2,3]
		]
	},
	{
		d:"Params don't need to be named",
		f: function f() {
			let [param1, param2, param3] = arguments;
			return [`Param1: ${param1}`, `Param2: ${param2}`, `Param3: ${param3}`];
		},
		v: [
			[1],
			[1,2],
			[1,2,3]
		]
	},
	{
		d:"If you want the caller to be able to use names use and object",
		f: function f(paramsObj) {
			let {param1, param2, param3} = paramsObj;
			return [`Param1: ${param1}`, `Param2: ${param2}`, `Param3: ${param3}`];
		},
		v: [
			[{param1:1}],
			[{param1:1, param2:2}],
			[{param1:1, param2:2,param3:3}]
		]
	},
];

for(const test of tests) {
	console.log(test.d);
	for(const [i, v] of test.v.entries()) {
		console.log(`Test ${i}:\t ${test.f(...v).join('\t')}`);
	}
	console.log('=================');
}
