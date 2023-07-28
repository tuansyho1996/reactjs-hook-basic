import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Users = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('https://reqres.in/api/users');
            setUsers(res.data.data)
        }
        fetchData()
    }, [])
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
                    {
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
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
export default Users;
