import {testFunction} from 'testModule.js'

someFunction()

// Insert a little comment
export function someFunction() {
	console.log('It works!')
	console.log('Commit 1 to deploy')
	console.log(testFunction())
}

// Insetrt yet another comment
