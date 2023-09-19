'use strict'

import { Box, Button, Link } from "@mui/material";
import * as React from "react";

interface LoginButton {
  auth: boolean
}

export default function LoginButton({ auth }: LoginButton) {
  const loginUrl = new URL(
    "/realms/ppojin/protocol/openid-connect/auth",
    "http://localhost:8081"
  )
  loginUrl.searchParams.set("client_id", "test-api");
  loginUrl.searchParams.set("redirect_uri", "http://localhost:8081/token");
  loginUrl.searchParams.set("response_type", "code");

  const logoutUrl = new URL(
    "realms/ppojin/protocol/openid-connect/logout",
    "http://localhost:8081/"
  )
  logoutUrl.searchParams.set("client_id", "test-api");
  logoutUrl.searchParams.set("post_logout_redirect_uri", "http://localhost:8081/");


  return (
    <Box>
      <Button
        variant="contained"
        component={Link}
        href={(auth ? logoutUrl : loginUrl).toString()}
      >
        {auth ? "Logout" : "Login"}
      </Button>
    </Box>
  )
}
