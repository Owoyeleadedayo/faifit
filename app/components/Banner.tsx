"use client"
import { Flex, Stack, Text } from "@chakra-ui/react";
import bg from "../../public/images/banner.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Flex
  bgImage={bg.src}
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  h={{ base: "50vh", md: "100vh" }}
  w="100%"
  alignItems="center"
  justifyContent="center"
  position="relative"
  _before={{
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgColor: { base: "rgba(0, 0, 0, 0.6)", md: "rgba(0, 0, 0, 0.4)" }, // Darker on mobile
    zIndex: 1,
  }}
>
  <Stack
    p={0}
    // lineHeight={10}
    alignItems="center"
    // spacing={{ base: "10px", md: "20px" }}
    zIndex={2}
  >
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    >
      <Text
        fontFamily="Montserrat"
        fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }} // Smaller on mobile
        fontWeight="bold"
        color="white"
        textAlign="center"
        px={{ base: "20px", md: "0" }}
        textShadow={{ base: "1px 1px 2px rgba(0, 0, 0, 0.5)", md: "none" }} // Shadow for mobile readability
      >
        FAI FIT
      </Text>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
    >
      <Text
        fontFamily="Montserrat"
        fontSize={{ base: "xl", sm: "xl", md: "xl", lg: "xl" }} // Smaller on mobile
        fontWeight={400}
        color="white"
        textAlign="center"
        px={{ base: "20px", md: "0" }}
        textShadow={{ base: "1px 1px 2px rgba(0, 0, 0, 0.5)", md: "none" }} // Shadow for mobile readability
        textTransform="capitalize"
      >
       for women on the go
      </Text>
    </motion.div>
  </Stack>
</Flex>
  );
};

export default Banner;
