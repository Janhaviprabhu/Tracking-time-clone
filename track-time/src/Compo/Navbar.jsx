import { Link } from "react-router-dom";
import {Button,    Image,  Stack} from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function Navbar ( ){
    return (
      <>
        <Stack
        p={2}
        mt={"0px"}
          bg={"#f6f8f9"}
          position={"fixed"}
          direction="row"
          spacing={370}
         
        >
          <Link to={"/"}>
            {/* <Stack ml={40}> */}
            <Image
            
              mr={64}
              style={{ width: "200px" }}
              objectFit="cover"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
            />
            {/* </Stack> */}
          </Link>

          <Stack direction="row" spacing={10}>
            <Link to={"/integrations"}>
              <h5>INTEGRATIONS</h5>
            </Link>
            <Link to={"/blog"}>
              <h5>BLOG</h5>
            </Link>
            <Stack>
              <Menu>
                <MenuButton>Trending</MenuButton>
                <MenuList>
                  <MenuItem>Time Tracker</MenuItem>

                  <MenuItem>Project Management</MenuItem>

                  <MenuItem>Online Timesheet</MenuItem>

                  <MenuItem>Time cards</MenuItem>

                  <MenuItem>Attendence Tracking</MenuItem>

                  <MenuItem>Time reporting</MenuItem>
                </MenuList>
              </Menu>
            </Stack>

            <Image
              style={{
                width: "15px",
                height: "10px",
                marginTop: "10px",
                marginLeft: "-1px",
                cursor: "pointer",
              }}
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/arrow-icon.png"
            />

            <Link to={"/tryforfree"}>
              <Button
                width={150}
                borderColor="#00ad95"
                variant={"outline"}
                color="#00ad95"
                _hover={{ bg: "#00ad95", color: "white" }}
              >
                TRY FOR FREE
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button
                width={150}
                bg="#00ad95"
                _hover={{ bg: "#f6f8f9;", color: "#00ad95" }}
                border="1px"
                borderColor="#00ad95"
                variant={"solid"}
                color="white"
              >
                LOGIN
              </Button>
            </Link>
          </Stack>
        </Stack>
      </>
    );
}