import { Box, Typography } from "@mui/material"

interface ShowAllCookies{
  cookies: { [key: string]: string }
};

export default function ShowAllCookies(
  {cookies}: ShowAllCookies
) {
  return <Box>
    {Object.keys(cookies).map((key) => (
      // https://stackoverflow.com/questions/61525832/material-ui-long-text-wrapped-in-grid
      <Typography style={{'overflowWrap': 'break-word'}} key={key}>
        Name: {key} <br/>
        Value: {cookies[key]}
      </Typography>
    ))}
  </Box>
}