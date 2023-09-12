import {Button} from "@mui/material";
import * as React from "react";

export default function LogoutButton() {
    const url = new URL(
        "/realms/ppojin/protocol/openid-connect/auth",
        "http://app.ppojin.localhost:30080"
    )
    url.searchParams.set("client_id", "test-api");
    url.searchParams.set("redirect_uri", "http://app.ppojin.localhost:30080/test/get");
    url.searchParams.set("response_type", "code");

    return (
        <a href={url.toString()}>
            <Button>logout</Button>
        </a>
    )
}