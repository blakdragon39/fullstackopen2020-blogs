import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blogs from '../blogs/Blogs'

describe('<Blog/>', () => {
    const blog = {
        id: 'id',
        title: 'Title',
        author: 'Author',
        url: 'url',
        likes: 5
    }
    const blogs = [ blog ]

    let component
    let updateBlogMock
    let blogServiceMock
    let deleteBlogMock

    beforeEach(() => {
        updateBlogMock = jest.fn()
        deleteBlogMock = jest.fn()
        blogServiceMock = {}

        component = render(
            <Blogs
                blogs={blogs}
                updateBlog={updateBlogMock}
                blogService={blogServiceMock}
                deleteBlog={deleteBlogMock}/>
        )
    })

    test('renders title', () => {
        expect(component.container).toHaveTextContent(blog.title)
    })

    test('other fields hidden', () => {
        const hiddenDiv = component.container.querySelector('.blogBody')
        expect(hiddenDiv).toHaveStyle('display: none')
    })

    test('fields shown when clicked', () => {
        const button = component.getByText('View')
        fireEvent.click(button)
        const hiddenDiv = component.container.querySelector('.blogBody')
        expect(hiddenDiv).not.toHaveStyle('display: none')
    })

    test('delete fires', () => {
        const button = component.getByText('Delete')
        fireEvent.click(button)
        fireEvent.click(button)

        expect(deleteBlogMock.mock.calls).toHaveLength(2)
    })
})
