"use client";

import { Flex, Grid, Text, Image } from "@chakra-ui/react";
import { ReactPhotoCollage } from "react-photo-collage";
import Footer from "../Footer";

const AboutBanner = () => {
  const setting = {
    width: "600px",
    height: ["250px", "170px"],
    layout: [1, 3, 3],
    photos: [
      { source: "/images/img1.jpg" },
      { source: "/images/img9.jpg" },
      { source: "/images/img4.jpg" },
      { source: "/images/img5.jpg" },
      { source: "/images/img6.jpg" },
      { source: "/images/img7.jpg" },
      { source: "/images/img1.jpg" },
      { source: "/images/img3.jpg" },
    ],
    showNumOfRemainingPhotos: false,
  };
  return (
    <>
      <Flex
        h={{ base: "80vh", md: "100vh" }}
        w="100%"
        alignItems="center"
        pt={"100px"}
        flexDirection={"column"}
      >
        <Flex
          width={"100%"}
          flexDirection={"column"}
          py="20px"
          borderY="1px solid #e5e5e5"
          gap={"10px"}
        >
          <Flex justifyContent={"center"} alignItems="center" pl={"120px"}>
            <Text textAlign={"center"}>About</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems="center" pl={"80px"}>
            <Text
              fontSize={"30px"}
              fontWeight={500}
              textTransform={"uppercase"}
            >
              Your essential guide to sports, chilling, and friendship.
            </Text>
          </Flex>
        </Flex>
        <Flex width={'100%'} justifyContent={"center"} alignItems="center" py={'20px'} pl={"80px"} borderBottom="1px solid #e5e5e5">
          <Text width={'800px'} fontSize="18px" fontWeight={400}>
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
        <Flex mt={"20px"} px="20px" py={'20px'}>
          <ReactPhotoCollage {...setting} />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default AboutBanner;
