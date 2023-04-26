import { useState, useEffect } from 'react';
import {Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Divider} from '@mui/material'
import { Link } from 'react-router-dom';
import {deleteUser, getAllUsers} from "../../services/wanderer-service";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const StyledDivider = styled(Divider)`
  width: 100% !important;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #FFFFFF;
  }
`;

const TRow = styled(TableRow)`
  & > td{
    font-size: 18px
  }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        window.alert(`User with id ${id} successfully deleted`)
        await getUsers();
    }

    const getUsers = async () => {
        let response = await getAllUsers();
        setUsers(response);
    }

    return (
        <StyledDivider>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Operations</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name? user.name.firstName : ""}</TableCell>
                        <TableCell>{user.name? user.name.lastName : ""}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.dob}</TableCell>
                        <TableCell>{user.phone_number}</TableCell>
                        <TableCell>{user.role? user.role : ""}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/wanderer/editUserDetails/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        </StyledDivider>
    )
}

export default AllUsers;