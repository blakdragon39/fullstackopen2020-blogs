import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const users = useSelector(store => store.users)

    return (
        <div>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th></th><th>Blogs created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td><Name name={user.displayName} /></td>
                                <td><NumBlogs numBlogs={user.blogs.length} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const Name = ({ name }) => <div>{name}</div>

const NumBlogs = ({ numBlogs }) => <div>{numBlogs}</div>

export default Users
