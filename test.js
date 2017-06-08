var  assert =  require('assert')
var calculator =  require('./calculator.js')

describe('Calculadora',function(){
	it ('deberia sumar dos numeros',function(){
		assert.equal(5,calculator.addNumber(2,3))
		assert.equal(9,calculator.addNumber(3,6))
	})

	it ('deberia restar dos numeros',function(){
		assert.equal(5,calculator.substractNumber(8,3))
		assert.equal(3,calculator.substractNumber(9,6))
	})


	it ('deberia multiplicar dos numeros',function(){
		assert.equal(9,calculator.multiplyNumber(3,3))
		assert.equal(10,calculator.multiplyNumber(5,2))
	})


	it ('deberia dividir dos numeros',function(){
		assert.equal(2,calculator.divideNumber(6,3))
		assert.equal(1,calculator.divideNumber(9,9))
	})
})

