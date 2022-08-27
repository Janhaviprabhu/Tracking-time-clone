import { Link } from "react-router-dom";
import {Button,    Image,  Stack} from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import "../navbar.css"
import { Dropdownicon } from "../Icons/Icons";

export default function Navbar ( ){
    return (
      <>
        <div
          className="nav"
          // p={2}
          // width={"100%"}
          // margin={"auto"}
          // mt={"0px"}
          // bg={"#f6f8f9"}
          // position={"fixed"}
        >
          <Link to={"/"}>
            <div className="trackimg" ml={40}>
              <Image
                mt={2}
                mr={64}
                style={{ width: "200px" }}
                objectFit="cover"
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
              />
            </div>
          </Link>

          <div className="innercont" direction="row" spacing={10}>
            <div className="pagediv">
              <Link to={"/integrations"}>
                <h5>INTEGRATIONS</h5>
              </Link>
              {/* <Link to={"/blog"}> */}
              <h5>BLOG</h5>
              {/* </Link> */}
            </div>
            <div className="trending">
              <Menu>
                <MenuButton
                className="menubtn"
                  style={{ background: "white" }}
                  as={Button}
                  rightIcon={<Dropdownicon />}
                >
                  Trending
                </MenuButton>
                <MenuList>
                  <MenuItem>Time Tracker</MenuItem>

                  <MenuItem>Project Management</MenuItem>

                  <MenuItem>Online Timesheet</MenuItem>

                  <MenuItem>Time cards</MenuItem>

                  <MenuItem>Attendence Tracking</MenuItem>

                  <MenuItem>Time reporting</MenuItem>
                </MenuList>
              </Menu>
            </div>

          
            <div className="btndiv">
              <Link to={"/tryforfree"}>
                <Button
                className="btn"
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
                className="btn"
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
            </div>
          </div>
        </div>
      </>
    );
}