"use client"

import LoginButton from '@/component/loginButton';
import ShowAllCookies from '@/component/showAllCookies';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies<string, { [key: string]: string }>(['user']);
  const [loginButton, setLoginButton] = useState(
    <Button variant='contained' disabled>...</Button>
  )
  const [cookieView, setCookieView] = useState(<Box />);
  useEffect(() => {
    setLoginButton(
      <LoginButton
        auth={cookies["X-ACCESS-TOKEN"] !== undefined}
      />
    )
    setCookieView(
      <ShowAllCookies
        cookies={cookies}
      />
    )
  }, [cookies]);

  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~!!</Typography>
          </Card>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                {loginButton}
            </Grid>
            <Grid item xs={12}>
                {cookieView}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
