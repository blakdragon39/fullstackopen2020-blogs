import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blogs from '../Blogs'

/*
renders the blog's title,
but does not render its author, url or number of likes by default
 */

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

    beforeEach(() => {
        component = render(<Blogs blogs={blogs}/>)
    })

    test('renders title', () => {
        expect(component.container).toHaveTextContent(blog.title)
    })

    test('other fields hidden', () => {
        const hiddenDiv = component.container.querySelector('.blogBody')
        expect(hiddenDiv).toHaveStyle('display: none')
    })
})
