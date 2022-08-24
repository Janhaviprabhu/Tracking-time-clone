import { Button, Image, Heading, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom";

import "../integrations.css"
export const Integration=()=>{
    return (
      <>
        <Stack className="int_cont" border="1px" borderColor="black">
          <Stack className="heading" border="1px" borderColor="#00ad95">
            <Heading as={"h6"} size="xs">
              TRACKINGTIME TIME TRACKER SOFTWARE
            </Heading>
            <br />
            <Heading as={"h5"} size="md">
              SET AND FORGET TIME TRACKING
            </Heading>
            <Heading as={"h1"} size="4xl">
              Bring your productivity to the next level.
            </Heading>
          </Stack>
          <Stack  direction={"row"} spacing={6} className="Button">
            <Button ml={500} className="btn1">
              Your Work Email
            </Button>
            <Button className="btn2">START FOR FREE!</Button>
          </Stack>
          <Image />
          <Link to="/login">Sign in with google</Link>
          <Image width={"85%"} src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg" />
        </Stack>
        
      </>
    );
}