import * as Info from './getInfo.js'
// var Info = require('./getInfo.js')
var React = require('react')
var ReactDOM = require('react-dom')

const list = ['ssj','dw','www']

//listContainer

var listContainer = React.createClass({
	render: function() {
		return 
	}
})

//list components

var listComponent = React.createClass({
	render: () => {

	}
})

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
