// import Info from './getInfo.js'
var Info = require('./getInfo.js')
var React = require('react')
var ReactDOM = require('react-dom')

const list = ['sj','dw','www']

// var testDom = React.creat
ReactDOM.render(
	<div>
		{
			list.map(function(key) {
				return <p>hello {key}</p>
			})
		}
	</div>,
	document.getElementById('container')
	)



Info.add()
