import { Button, Image, Heading, Stack, Box, Flex,Text,Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../home.css";
export default function Home() {
  return (
    <>
      <Stack className="big_cont">
        <br />
        <br />
        <br />
        <br />
        <br />
        <Stack className="int_cont">
          <Stack className="heading">
            <Heading letterSpacing={1} color={"#00ad95"} as={"h6"} size="xs">
              TRACKINGTIME TIME TRACKER SOFTWARE
            </Heading>
            <br />
            <Heading className="head1" letterSpacing={1} as={"h5"} size="md">
              SET AND FORGET TIME TRACKING
            </Heading>
            <Heading className="head1" as={"h1"} size="4xl">
              Bring your productivity to the next level.
            </Heading>
          </Stack>
          <br />
          <br />

          <Box className="buttons">
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
              </Button>
            </Flex>
            <br />
            <Box className="button">
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
            </Box>
          </Box>
        
            <Image
              width={"75%"}
              pl={60}
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
            />
          
        </Stack>

        <div className="box">
          <Text color={"#7f8488"} pt={8}>
            Companies of all shapes and sizes use TrackingTime:
          </Text>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg"
                  alt="err"
                />
              </div>
              {/* again slide doubled */}
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg"
                  alt="err"
                />
              </div>
              <div className="slide">
                <img
                  className="company"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg"
                  alt="err"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box>
          <Heading as={"h4"} size={"md"}>
            THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <Flex className="features-flex" gap={8}>
            <Box className="features_box">
              <Image
                width={"100%"}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg"
              />
              <br />
              <Heading as={"h4"} size={"md"}>
                Measure your team’s productivity
              </Heading>
              <br />
              <Text color={"#7f8488"}>
                Get a record of the worked hours and keep your projects in
                order, be abreast of ongoing or completed projects with our
                super friendly app.
              </Text>
            </Box>
            <Box className="features_box">
              <Image
                width={"100%"}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg"
              />
              <br />
              <Heading as={"h4"} size={"md"}>
                The most flexible reporting engine
              </Heading>
              <br />
              <Text color={"#7f8488"}>
                Project budgeting, client billing, payroll, productivity
                analytics and much more: No matter what kind of reports you
                need, TrackingTime has got you covered.
              </Text>
            </Box>
            <Box className="features_box">
              <Image
                width={"100%"}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg"
              />
              <br />
              <Heading as={"h4"} size={"md"}>
                Monitor your team’s workload, in real time
              </Heading>
              <br />
              <Text color={"#7f8488"}>
                See every work in progress and measure the productivity of your
                team by monitoring them in real time
              </Text>
            </Box>
          </Flex>
        </Box>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Flex gap={4}>
          <Box className="Appbox">
            <Image
              width={"250px"}
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/grupo.svg"
            />
            <br />
            <Heading as={"h3"} size={"lg"}>
              Add time tracking to your favorite business apps
            </Heading>
            <br />
            <Text color={"#7f8488"} fontSize={"18px"}>
              No matter where your employees work, TrackingTime works with them.
              Install the TrackingTime Button for Chrome and Firefox and track
              time right within the productivity apps your employees use
              everyday.
            </Text>
            <br />
            <br />
            <Link to={"/integrations"}>
              <Button className="seeall">SEE ALL</Button>
            </Link>
          </Box>
          <Box>
            <Flex width={"85%"} mt={200} gap={4}>
              <Box className="appdetails">
                <Image
                  className="apps"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png"
                />{" "}
                <br />
                <Heading as="h3" size="lg">
                  Asana
                </Heading>
                <br />
                <Text fontSize={15} color={"#7f8488"}>
                  Asana puts tasks and conversations together to enable teamwork
                  without email.
                </Text>
              </Box>
              <Box className="appdetails">
                <Image
                  className="apps"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png"
                />{" "}
                <br />
                <Heading as="h3" size="lg">
                  Trello
                </Heading>{" "}
                <br />
                <Text fontSize={15} color={"#7f8488"}>
                  Trello is a collaboration tool that organizes your projects
                  into boards.
                </Text>
              </Box>
              <Box className="appdetails">
                <Image
                  className="apps"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png"
                />{" "}
                <br />
                <Heading as="h3" size="lg">
                  Todoist
                </Heading>{" "}
                <br />
                <Text fontSize={15} color={"#7f8488"}>
                  Todoist is a task manager thats useful, fast and easy to use.
                </Text>
              </Box>
              <Box className="appdetails">
                <Image
                  className="apps"
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png"
                />{" "}
                <br />
                <Heading as="h3" size="lg">
                  Smartsheet
                </Heading>{" "}
                <br />
                <Text fontSize={15} color={"#7f8488"}>
                  Smartsheet is a web-based project and task management and work
                  collaboration software.
                </Text>
                <br />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Flex pl={150} gap={10} className="box">
          <Box className="feature-box">
            <Image
              className="feature"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg"
            />
            <br />
            <Heading as="h3" size="md">
              Timecards Approval
            </Heading>
            <br />
            <Text fontSize={15} color={"#7f8488"}>
              Track clock in and out times with no effort.
            </Text>
          </Box>
          <Box className="feature-box">
            <Image
              className="feature"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg"
            />
            <br />
            <Heading as="h3" size="md">
              Budgeting
            </Heading>
            <br />
            <Text fontSize={15} color={"#7f8488"}>
              Keep your projects on time and budget.
            </Text>
          </Box>
          <Box className="feature-box">
            <Image
              className="feature"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg"
            />
            <br />
            <Heading as="h3" size="md">
              Work schedules
            </Heading>
            <br />
            <Text fontSize={15} color={"#7f8488"}>
              Keep your projects on time and budget.
            </Text>
          </Box>
          <Box className="feature-box">
            <Image
              className="feature"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg"
            />
            <br />
            <Heading as="h3" size="md">
              Timesheet Audits
            </Heading>
            <br />
            <Text fontSize={15} color={"#7f8488"}>
              Avoid data inconsistencies with just one click.
            </Text>
            <br />
            <br />
            <br />
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Flex>
          <Image
            className="img1"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v3/img/keywords/lineas.png"
          />
          <Image
            className="img2"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/bottom-action.svg"
          />
          <Box className="timesheet">
            <Heading as={"h2"} size="2xl">
              Get professional timesheets done in no time!
            </Heading>
            <br />
            <Text>
              Sign up today and join thousands of people around the world using
              TrackingTime to simplify their timesheets.
            </Text>
            <br />
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
              </Button>
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
          </Box>
        </Flex>
        <br />
        <br />
      </Stack>
    </>
  );
}
