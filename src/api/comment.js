import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllComments = () => {
    return axios(`${apiUrl}/comments`)
}
// CREATE
//takes in book ID and the comment to create a new comment
export const createComment = (user, bookId, newComment) => {
    console.log('createComment in API was hit')
    console.log('this is user', user)
    console.log('this is newComment', newComment)
	return axios({
		url: apiUrl + `/comments/${bookId}`,
		method: 'Post',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			comment: newComment,
		},
	})
}

// DELETE
export const removeComment = (user, commentId, bookId) => {
	return axios({
		url:`${apiUrl}/comments/${bookId}/${commentId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}