import {Button} from "@mui/material";
import * as React from "react";

export default function LoginButton() {
    const url = new URL(
        "/realms/ppojin/protocol/openid-connect/auth",
        // "http://app.ppojin.localhost:30080"
        "http://localhost:8081"
    )
    url.searchParams.set("client_id", "test-api");
    // url.searchParams.set("redirect_uri", "http://app.ppojin.localhost:30080/httpbin/get");
    url.searchParams.set("redirect_uri", "http://localhost:8081/httpbin/get");
    url.searchParams.set("response_type", "code");

    return (
        <a href={url.toString()}>
            <Button>Login</Button>
        </a>
    )
}