import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import messages from '../shared/AutoDismissAlert/messages'
import axios from 'axios'

import { getAllBooks } from '../../api/books'
import CrudBook from './CrudBook'
import BookListModal from './BookListModal'
// import { CreateBook, bookToShow } from './CreateBook'

const FilterIndexForm = (props) => {

    const { user, msgAlert } = props

    const [books, setBooks] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [booksToView, setBooksToView] = useState([])
    const [createBookModalShow, setCreateBookModalShow] = useState(false)
    const [showBookViewModal, setShowBookViewModal] = useState(false)
    const [bookInViewModal, setBookInViewModal] = useState({})
    const [updateTaggedBooks, setUpdateTaggedBooks] = useState(true)

    // console.log('\ncurrent search value:\n', searchValue)
    // console.log('\ncurrent books to view:\n', booksToView)

    // console.log('book being viewed:',bookInViewModal)

    const bookToShow = (e) => {
        console.log(e.target.id)
        const bookIsbn = e.target.id
        setBookInViewModal(() => {
            const viewedBook = booksToView.filter(book => book.isbn === bookIsbn)
            console.log('book view modal being updated to:', viewedBook[0])
            return (
                viewedBook[0]
            )
        })
        setShowBookViewModal(true)
    }

    useEffect(() => {
        // console.log('use effect works')
        console.log('props:\n',props)
        getAllBooks()
            .then(res => {
                setBooks(res.data.books)
                setBooksToView(res.data.books)
                return
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting books',
                    message: messages.getBooksFailure,
                    variant: 'danger'
                })
            })
    },[updateTaggedBooks])

    // show a prompt to Tag books if no books exist, or an error message if database cannot be connected to
    if(!books) {
        return (
            <h1 
                style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
                    Error connecting to database...
            </h1>
            
        )
    } 
    // else if (books.length === 0) {
    //     return (
    //         <h1 
    //             style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
    //                 No one has tagged that yet, <br></br>
    //                 Search it and be the first!
    //         </h1>
    //     )
    // }

    const handleChange = (e) => {
        setSearchValue(() => {
            let updatedSearchValue = e.target.value

            return (updatedSearchValue)
        })
    }

    const handleViewBooksInModal = (data) => {
        setCreateBookModalShow(true)
        setBooksToView(() => {
            return (data.map(book => {
                // if(book.volumeInfo.imageLinks.thumbnail === undefined) return({})
                return({
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors ? book.volumeInfo.authors.map((author,i) => {
                        if(i === 0) return author
                        else return ', '+author
                    }) : null,
                    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
                    description: book.volumeInfo.description,
                    publisher: book.volumeInfo.publisher,
                    isbn: book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : null
                })
            }))
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(`\nsubmitted value:\n${searchValue}`)

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&langRestrict:en&printType=books`)
            .then((res) => {
                const data = res.data.items
                // console.log(data)
                
                handleViewBooksInModal(data)
                
            })
            .catch(err => console.log(err))
    }

	return (
		<>
            <Form
                onSubmit={handleSubmit}
                className="d-flex" 
                style={{maxWidth: '550px', width: '100%', padding: '10px'}}
                >
                <Form.Control
                    id='search-book-field'
                    autoComplete='off'
                    type="search"
                    placeholder="Any book title here..."
                    className="me-2"
                    aria-label="Search the web"
                    value={searchValue}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' style={{whiteSpace: 'nowrap'}} variant="outline-secondary">
                    Search the web
                </Button>
            </Form>

            {books.length === 0 ? 
                <>
                    <h1 
                        style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
                            No one has tagged that yet,
                    </h1>
                    <h1 
                        style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
                            Search it and be the first!
                    </h1>
                </>
            :
                <>
                    <h1 style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>All tagged books:</h1>

                    <BookListModal 
                        user={user}
                        msgAlert={msgAlert}
                        booksToView={books}
                        setShowBookViewModal={bookToShow}
                        setUpdateTaggedBooks={() => {setUpdateTaggedBooks(prev => !prev)}}
                    />
                    
                </>
            }

            <CrudBook 
                user={user}
                books={books}
                booksToView={booksToView}
                show={createBookModalShow}
                bookToShow={bookToShow}
                bookInViewModal={bookInViewModal}
                showBookViewModal={showBookViewModal}
                setShowBookViewModal={setShowBookViewModal}
                setUpdateTaggedBooks={() => {setUpdateTaggedBooks(prev => !prev)}}
                msgAlert={msgAlert}
                // triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setCreateBookModalShow(false)}
            />

        </>

	)
}

export default FilterIndexForm