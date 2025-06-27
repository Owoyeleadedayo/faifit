"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <Flex
      width="100%"
      py={{ base: "20px", md: "30px" }}
      px={{ base: "15px", md: "30px" }}
      bg="#FFF"
      justifyContent="space-between"
      alignItems={{ base: "center", md: "stretch" }}
      gap={{ base: "20px", md: "50px" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        gap="10px"
        flex={{ base: "1", md: "0 0 50%" }}
      >
        <Box width="100%" maxWidth="200px">
          <Image
            src="/images/rename1.jpg"
            alt="Story Image 1"
            width={200}
            height={100}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Box>
        <Flex
          flexDirection="column"
          px={{ base: "0px", md: "15px", lg: "30px" }}
          gap="10px"
        >
          <Text
            fontFamily="Montserrat"
            fontWeight={400}
            fontSize={{ base: "30px", md: "40px", lg: "60px" }}
            textTransform="capitalize"
          >
            The Story
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight={300}
            fontSize={{ base: "16px", md: "16px", lg: "18px" }}
            textTransform="capitalize"
          >
            One Vintage is a distinctive luxury brand founded by Simone Myson in
            2010. This avant-garde label ingeniously revitalizes antique
            textiles and relics, seamlessly weaving them into contemporary and
            modern masterpieces.{" "}
            <Text
              as={"span"}
              fontFamily="Montserrat"
              fontWeight={500}
              textDecoration={"underline"}
              cursor={"pointer"}
            >
              {" "}
              Show More
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex
        flex={{ base: "1", md: "0 0 40%" }}
        height={{ base: "300px", md: "400px", lg: "500px" }}
        position="relative"
        justifyContent="right"
        alignItems="flex-end"
        ref={imageRef}
      >
        <motion.div
          style={{ width: "70%", height: "100%", scale }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Box width="50%" height="100%">
            <Image
              src="/images/rename2.jpg"
              alt="Story Image 2"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Story;
