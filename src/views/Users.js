import '../App.css';
import useFetch from './customize/fectch';
// import { useEffect, useState } from 'react';

const Users = () => {

    let { data: users, isLoading, isError } = useFetch('https://reqres.in/api/users');
    return (
        <div className="Users-container">
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && users && users.length > 0 &&
                        users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })
                    }
                    {isLoading === true &&
                        <tr>
                            <td colSpan='3'>Loading...</td>
                        </tr>
                    }
                    {isError === true &&
                        <tr>
                            <td colSpan='3'>Something wrong</td>
                        </tr>
                    }
                </tbody>

            </table>
        </div>
    )
}
export default Users;
