'use strict'

const UI = require('../..')

new UI.Window({
	on: {
		created: function() {
			this.center()
			this.show()
		},
		closing: function() {
			UI.App.quit()
		},
	},
	children: {
		name: 'area',
		on: {
			created: function() {
			},
			draw: function(canvas) {
				let ctx = canvas.getContext('2d')
				// Create gradients
				var lingrad = ctx.createLinearGradient(0, 0, 0, 150)
				lingrad.addColorStop(0, '#00ABEB')
				lingrad.addColorStop(0.5, '#fff')
				lingrad.addColorStop(0.5, '#26C000')
				lingrad.addColorStop(1, '#fff')

				var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95)
				lingrad2.addColorStop(0.5, '#000')
				lingrad2.addColorStop(1, 'rgba(0,0,0,0)')

				// assign gradients to fill and stroke styles
				ctx.fillStyle = lingrad
				ctx.strokeStyle = lingrad2

				// draw shapes
				ctx.fillRect(10, 10, 130, 130)
				ctx.strokeRect(50, 50, 50, 50)
			},
		},
	},
})