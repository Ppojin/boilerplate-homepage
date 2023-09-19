'use client'

import LoginButton from '@/component/loginButton';
import ShowAllCookies from '@/component/showAllCookies';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import HttpBin from '@/component/httpbin';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies<string, { [key: string]: string }>(['X-ACCESS-TOKEN']);
  const [accessToken, setAccessToken] = useState<string>()
  const [loginButton, setLoginButton] = useState(
    <Button variant='contained' disabled>...</Button>
  )
  const [cookieView, setCookieView] = useState(
    <Box />
  );
  const [response, setResponse] = useState(
    <></>
  );

  useEffect(() => {
    if (cookies["X-ACCESS-TOKEN"] !== undefined) {
      setAccessToken(cookies["X-ACCESS-TOKEN"]);
      removeCookie("X-ACCESS-TOKEN");
      localStorage.setItem('accessToken', cookies["X-ACCESS-TOKEN"])
    } else {
      const token = localStorage.getItem('accessToken');
      if (typeof token !== "undefined" && token !== null) {
        setAccessToken(token);
      }
    }
  }, [cookies, removeCookie, setAccessToken]);

  useEffect(() => {
    setCookieView(
      <ShowAllCookies cookies={cookies} />
    )
  }, [cookies])

  useEffect(() => {
    setLoginButton( 
      <LoginButton auth={accessToken !== undefined} />
    )
    if (typeof accessToken === "string"){
      console.log(">>>>>> ", accessToken)
      setResponse(<HttpBin accessToken={accessToken} />);
    }
  }, [accessToken]);

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
              <Typography variant="h3">
                callApi
              </Typography>
              {response}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">
                cookies
              </Typography>
              {cookieView}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
