import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Heading = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const SignInForm = () => {
  const router = useRouter();

  const goToSignUp = () => router.push('/signup');
  // const goToTasks = () => router.push('/tasks');
  // const setAccessToken = (accessToken: string) => {
  //   window.localStorage.setItem('accessToken', accessToken);
  // };

  const submit = async () => {
    const { username, password } = state;
    const res = await fetch(
      'https://task-management-taching.herokuapp.com/auth/signin',
      {
        headers: {
          ['Content-Type']: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, password }),
      },
    );
    // console.log(res);
    try {
    } catch (error: any) {
      const errorMessage = error.response?.data?.message ?? error.message;
      setState({ ...state, errorMessage });
    }
  };

  const [state, setState] = React.useState({
    username: '',
    password: '',
    errorMessage: null,
  });

  return (
    <FormContainer>
      <Heading>Hello!</Heading>
      <p>Fill in your username and password to sign in.</p>

      <div>
        <TextField
          id="outlined-name"
          label="Username"
          margin="dense"
          variant="outlined"
          onChange={(e: any) =>
            setState({ ...state, username: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="outlined-password"
          label="Password"
          margin="dense"
          variant="outlined"
          type="password"
          onChange={(e: any) =>
            setState({ ...state, password: e.target.value })
          }
        />
      </div>
      <hr />
      <div>
        <Button
          style={{ marginBottom: '10px' }}
          fullWidth
          variant="contained"
          color="primary"
          onClick={submit}
        >
          SIGN IN
        </Button>

        <Button fullWidth onClick={goToSignUp}>
          Don't have an account? Sign up now!
        </Button>
      </div>
    </FormContainer>
  );
};

export default SignInForm;
