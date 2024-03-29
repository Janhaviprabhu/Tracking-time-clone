import {  Box, Button, Flex, Heading, Image,Input,Stack,Text } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Dropdownicon } from "../Icons/Icons";
import "../Footer.css"
export const Footer=()=>{
    return (
      <>
        <Stack className="Footer">
          <Stack className="get_start">
            <Image
              className="get_start_img"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg"
            />
            <Heading as={"h4"}>Get Started</Heading>
            <Text>
              Sign up today and join thousands of people around the world using
              TrackingTime to make the most of their time.
            </Text>
            <Flex gap={2}>
              <Input
                textAlign={"center"}
                width={"280px"}
                placeholder="Your Work Mail"
              />
              <Button
                _hover={{ bg: "black" }}
                width="210px"
                bg="#00ad95"
                color={"white"}
              >
                START FOR FREE
              </Button><br />
              
            </Flex>
            <br />
            <Flex gap={3}>
              <Image
                width={"25px"}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
              />
              <Text
                _hover={{ textDecoration: "none" }}
                textDecoration="underline"
              >
                Sign in with Google
              </Text>
              <br />
            </Flex>
          </Stack>
          <br />
          <br />
          <Flex textAlign={"left"} gap={10} fontSize={13}>
            <Box lineHeight={2}>
              <Text fontWeight={"bold"}>Industries</Text>
              <Box cursor={"pointer"}>
                <Text _hover={{ color: "#00ad95" }}>
                  Time tracking for Graphic Designers
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time tracking software for Architects
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time tracking for Remote Workers
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time tracking for Marketing Teams
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time tracking for Freelancers
                </Text>
              </Box>
            </Box>
            <Box lineHeight={2}>
              <Text fontWeight={"bold"}>Product</Text>
              <Box cursor={"pointer"}>
                <Text _hover={{ color: "#00ad95" }}>Plans & Pricing</Text>
                <Text _hover={{ color: "#00ad95" }}>Integrations</Text>
                <Text _hover={{ color: "#00ad95" }}>Product Updates</Text>
                <Text _hover={{ color: "#00ad95" }}>Slack Bot</Text>
                <Text _hover={{ color: "#00ad95" }}>Microsoft Teams</Text>
              </Box>
            </Box>
            <Box lineHeight={2}>
              <Text fontWeight={"bold"}>Featurs</Text>
              <Box cursor={"pointer"}>
                <Text _hover={{ color: "#00ad95" }}>
                  Online Timesheet For Efficient Companies
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time Tracker for every business
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Reports for billing and payroll to reduce administrative work
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Attendance tracker for every business
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Project Management Time Tracking Software
                </Text>
              </Box>
            </Box>
            <Box lineHeight={2}>
              <Text fontWeight={"bold"}>Apps</Text>
              <Box cursor={"pointer"}>
                <Text _hover={{ color: "#00ad95" }}>Web App</Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time Tracker app for Mac
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time Tracker for Windows
                </Text>
                <Text _hover={{ color: "#00ad95" }}>iPhone app</Text>
                <Text _hover={{ color: "#00ad95" }}>Android app</Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time Tracking for Chrome
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time Tracking for Firefox
                </Text>
                <Text _hover={{ color: "#00ad95" }}>
                  Time Tracking for Safari
                </Text>
              </Box>
            </Box>
            <Box lineHeight={2}>
              <Text fontWeight={"bold"}>Company</Text>
              <Box cursor={"pointer"}>
                <Text _hover={{ color: "#00ad95" }}>About Us</Text>
                <Text _hover={{ color: "#00ad95" }}>Blog</Text>
                <Text _hover={{ color: "#00ad95" }}>Media kit</Text>
                <Text _hover={{ color: "#00ad95" }}>Terms of service</Text>
                <Text _hover={{ color: "#00ad95" }}>Privacy Policy</Text>
                <Text _hover={{ color: "#00ad95" }}>DMCA Policy</Text>
                <Text _hover={{ color: "#00ad95" }}>Impressum</Text>
              </Box>
            </Box>
          </Flex>
          <Flex gap={20} fontSize={13}>
            <Box>
              <Button className="social-bth" borderRadius="60%" bg="white">
                <img
                  alt="icon"
                  width={13}
                  src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                />
              </Button>
              <Button
                className="social-bth"
                borderRadius="60%"
                background={"white"}
              >
                <img
                  alt="icon"
                  width={13}
                  src="https://cdn-user-icons.flaticon.com/73546/73546517/1661416267630.svg?token=exp=1661417147~hmac=0fc262313c17ae0a0d2ce887454fc54b"
                />
              </Button>
              <Button
                className="social-bth"
                borderRadius="60%"
                background={"white"}
              >
                <img
                  alt="icon"
                  width={13}
                  src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
                />
              </Button>
              <br />
              <br />
              TrackingTime, LLC
            </Box>

            <Box>
              <Text fontWeight={"bold"}>Help & Support</Text>
              <Box lineHeight={2}>
                <Text _hover={{ color: "#00ad95" }}>Help Center</Text>
                <Text _hover={{ color: "#00ad95" }}>Developers</Text>
                <Text _hover={{ color: "#00ad95" }}>Contact us</Text>
              </Box>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Choose Language</Text>
              <Box>
                <Menu>
                  <MenuButton
                    bg={"white"}
                    as={Button}
                    _hover={{ color: "#00ad95" }}
                    rightIcon={<Dropdownicon />}
                  >
                    English
                  </MenuButton>
                  <MenuList>
                    <MenuItem _hover={{ color: "#00ad95" }}>Deutsch</MenuItem>

                    <MenuItem _hover={{ color: "#00ad95" }}>Español</MenuItem>

                    <MenuItem _hover={{ color: "#00ad95" }}>Portugues</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </>
    );
}