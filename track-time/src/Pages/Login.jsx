import { Stack ,Image, Box, Button,Text, Input, Checkbox} from "@chakra-ui/react"
import { AppleIcon, GoogleIcon, MicrodoftIcon } from "../Icons/Icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,

} from "@chakra-ui/react";

export const Login=()=>{
    return (
      <>
        <Stack direction={"row"}>
          <Stack bg="#1d252c" width="50%" mt={2}>
            <Image src="https://pro.trackingtime.co/img/login/1.svg" />
          </Stack>
          <Stack>
            <Box width="280px" height={"auto"} margin="auto" ml={60}>
              <Image
                width="150px"
                ml={14}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
              />

              <br />
              <br />

              <Button width="280px" leftIcon={<GoogleIcon />}>
                Sign in with Google
              </Button>
              <br />
              <br />
              <Button width="280px" leftIcon={<MicrodoftIcon />}>
                Sign in with Microsoft
              </Button>
              <br />
              <br />
              <Button width="280px" leftIcon={<AppleIcon />}>
                Sign in with Apple
              </Button>
              <br />
              <br />
              <Text fontSize={12}>Sign in with your email</Text>
              <br />
              <Input placeholder="Email"></Input>
              <br />
              <br />
              <Input placeholder="Password"></Input><br /><br />
              <Checkbox>
                <Text fontSize={12}>I agree with the Terms of service & Privacy Policy </Text>
              </Checkbox>
              <br /><br />
              <Button bg="blackAlpha.800"_hover={{bg:"blackAlpha.900"}} color="white" width="280px">SIGN UP</Button><br /><br />
              <Text fontSize={10}>Back to Login</Text><br />
              <Breadcrumb fontSize={14}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Terms of service</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#"> Privacy Policy</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box >
          </Stack>
        </Stack>
      </>
    );
}