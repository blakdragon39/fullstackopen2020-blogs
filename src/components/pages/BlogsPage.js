import React, { useRef } from 'react'

import Toggleable from '../Toggleable'
import AddBlog from '../AddBlog'
import Blogs from '../Blogs'

const BlogsPage = () => {
    const toggleRef = useRef()

    return (
        <div>
            <Toggleable toggleText='Add Blogs' ref={toggleRef}>
                <AddBlog
                    toggleable={toggleRef}/>
            </Toggleable>
            <Blogs />
        </div>
    )
}

export default BlogsPage
