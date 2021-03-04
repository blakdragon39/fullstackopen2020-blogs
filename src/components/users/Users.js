import React from 'react'
import { Link } from 'react-router-dom'
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
                                <td><Name user={user} /></td>
                                <td><NumBlogs numBlogs={user.blogs.length} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const Name = ({ user }) => (
    <div>
        <Link to={`/users/${user.id}`}>{user.displayName}</Link>
    </div>
)

const NumBlogs = ({ numBlogs }) => <div>{numBlogs}</div>

export default Users
