import { Button, Image, Heading, Stack, Box, Flex,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../home.css";
export default function Home() {
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
        <Stack direction={"row"} spacing={6} className="Button">
          <Button ml={500} className="btn1">
            Your Work Email
          </Button>
          <Button className="btn2">START FOR FREE!</Button>
        </Stack>
        <Image />
        <Link to="/login">Sign in with google</Link>
        <Image
          width={"85%"}
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
        />
      </Stack>
      <div className="box">
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
      </div><br /><br /><br /><br /><br />
      <Box>
        <Heading as={"h4"} size={"md"}>
          THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
        </Heading><br /><br /><br /><br />
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
            <Text>
              Get a record of the worked hours and keep your projects in order,
              be abreast of ongoing or completed projects with our super
              friendly app.
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
            <Text>
              Project budgeting, client billing, payroll, productivity analytics
              and much more: No matter what kind of reports you need,
              TrackingTime has got you covered.
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
            <Text>
              See every work in progress and measure the productivity of your
              team by monitoring them in real time
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
