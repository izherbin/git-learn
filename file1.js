import {testFunction} from 'testModule.js'

someFunction()

export function someFunction() {
	console.log('It works!')
	console.log(testFunction())
}

// Insetrt yet another comment
