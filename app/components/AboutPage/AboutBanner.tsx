"use client";

import { Flex, Text } from "@chakra-ui/react";
import Footer from "../Footer";

const AboutBanner = () => {
  return (
    <Flex
      h={{ base: "80vh", md: "100vh" }}
      w="100%"
      alignItems="center"
      pt="100px"
      flexDirection="column"
    >
      {/* Top Section */}
      <Flex
        width="100%"
        flexDirection="column"
        py="20px"
        borderY="1px solid #e5e5e5"
        gap="10px"
      >
        <Flex justifyContent="center" alignItems="center" pl={{base: 0, md: "100px", lg: "120px"}}>
          <Text textAlign="center">About</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" pl={{base: 0, md: "80px", lg:"80px"}}>
          <Text textAlign="center" fontSize="30px" fontWeight={500} textTransform="uppercase">
            Your essential guide to sports, chilling, and friendship.
          </Text>
        </Flex>
      </Flex>

      {/* Description */}
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        py="20px"
        px={{base: '20px'}}
        // pl={{base: 0, md: "80px", lg:"80px"}}
        borderBottom="1px solid #e5e5e5"
      >
        <Text textAlign="center" width={{base: "100%", md:"850px", lg: "850px"}} fontSize="18px" fontWeight={400}>
          The aim of our designs is to go beyond clothing; it is to create
          pieces that not only make you look good but also instill a sense of
          confidence and empowerment every time you step onto the court. Each
          design is carefully crafted to balance style, comfort, and
          performance, allowing you to focus on your game while feeling your
          absolute best. With every detail, we seek to celebrate individuality
          and elevate the experience of women in sports, ensuring that looking
          good and playing well go hand in hand.
        </Text>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default AboutBanner;
