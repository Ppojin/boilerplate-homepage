'use client'

import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import refreshToken from '@/api/refresh';
const ReactJson = loadable(() => import('react-json-view'));

interface HttpBinVariable {
  accessToken: string
}

export default function HttpBin({ accessToken }: HttpBinVariable) {
  const [body, setBody] = useState({});
  useEffect(() => {
    axios.get("/httpbin/get", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }).then((res)=>{
      console.log(res.data)
      setBody(res.data)
    }).catch(()=>{
      refreshToken()
    });
  }, [accessToken])
  const unauthenticated = <Typography variant="h5">anauthenticated</Typography>
  const responseView = <ReactJson src={body}/>
  return responseView;
}
