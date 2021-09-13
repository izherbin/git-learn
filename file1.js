import {testFunction} from 'testModule.js'

someFunction()

// Insert a little comment
export function someFunction() {
	console.log('It works!')
	console.log('Addition made by outsource developer')
	console.log(testFunction())
}

// Insetrt yet another comment
