"use client";

import { Flex, Grid, Text, Image } from "@chakra-ui/react";
import { ReactPhotoCollage } from "react-photo-collage";

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
       <Flex width={'100%'} flexDirection={"column"} py="20px" borderY="1px solid #e5e5e5" gap={'10px'}>
       <Flex justifyContent={"center"} alignItems="center" pl={"120px"}>
          <Text textAlign={"center"}>About</Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems="center" pl={"80px"}>
        <Text fontSize={"30px"} fontWeight={500} textTransform={"uppercase"}>
          Your essential guide to sports, chilling, and friendship.
        </Text>
        </Flex>
       </Flex>
        <Flex mt={'20px'} px="20px">
          <ReactPhotoCollage {...setting} />
        </Flex>
      </Flex>
    </>
  );
};

export default AboutBanner;
