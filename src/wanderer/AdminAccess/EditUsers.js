import { useState, useEffect } from 'react';

import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Button,
    styled,
    Typography,
    FormLabel,
    RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {getAllUsers, editUserRole, getUser} from "../../services/wanderer-service";

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone_number: '',
    role: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone_number , role} = user;
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response);
    }

    const editUserDetails = async() => {
        const response = await editUserRole(user, id);
        navigate('/wanderer/editUserDetails');
    }

    const onValueChange = (e) => {
        console.log({[e.target.name]: e.target.value});
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input name='name' value={name? name.firstName+" "+name.lastName : "" } id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input name='phone' value={phone_number} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <FormLabel id="role">Role</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="role"
                    value={role}
                    onChange={(e) => onValueChange(e)}
                >
                    <FormControlLabel value="admin" control={<Radio />} label="admin" />
                    <FormControlLabel value="loggedInUser" control={<Radio />} label="loggedInUser" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;