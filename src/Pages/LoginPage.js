import React from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const LoginPage = (props) => {
  const googleAuth = () => {
    window.open('/api/auth', '_self');
  };

  return (
    <div>
      <Box display="flex" marginTop="20%" paddingBottom="22%" justifyContent="center">
        <Button className="login-button" onClick={googleAuth}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/1200px-Google_logo_%282010-2013%29.svg.png"
            alt="Google Logo"
            height="50px"
            width="134px"
          />
          Login with Google
        </Button>
      </Box>
    </div>
  );
};

export default LoginPage;
