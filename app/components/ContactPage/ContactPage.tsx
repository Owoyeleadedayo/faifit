import { Button, Flex, Grid, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Flex
        h={{ base: "80vh", md: "100vh" }}
        w="100%"
        // alignItems="center"
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
          <Flex justifyContent={"center"} alignItems="center" pl={{base: 0, md: "120px", lg: "120px"}}>
            <Text textAlign={"center"}>Contact</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems="center" pl={{base: 0, md: "120px", lg: "120px"}}>
            <Text
              fontSize={"30px"}
              fontWeight={500}
              textTransform={"uppercase"}
              textAlign="center"
            >
              We’re here to help
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w="100%"
          borderBottom="1px solid #e5e5e5"
        >
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={14}
            py={{ base: "20px", md: "30px", lg: "30px" }}
            maxW="1200px"
            w="100%"
            mx="auto"
          >
            <GridItem display={"flex"} flexDirection="column" justifyContent={{base: "center", md: 'start', lg: "start"}}
          alignItems={{base: "center", md: 'start', lg: "start"}} gap={"5px"}>
              <Text
                fontSize={"20px"}
                fontWeight={400}
                textTransform="uppercase"
              >
                address
              </Text>
              <Flex>
                <Text
                  fontSize={"16px"}
                  fontWeight={400}
                  textAlign={{base: "center", md: 'start', lg: "start"}}
                  textTransform="capitalize"
                >
                  34A. Ishaya shekiri street. 2nd avenue gwarinpa Abuja{" "}
                </Text>
              </Flex>
            </GridItem>
            <GridItem display={"flex"} flexDirection="column" gap={"5px"}>
              <Text
                fontSize={"20px"}
                fontWeight={400}
                textTransform="uppercase"
              >
                phone number
              </Text>
              <Flex>
                <Text>CALL: 08091387148</Text>
              </Flex>
            </GridItem>
            <GridItem display={"flex"} flexDirection="column" gap={"5px"}>
              <Text
                fontSize={"20px"}
                fontWeight={400}
                textTransform="uppercase"
              >
                EMAIL
              </Text>
              <Flex>
                <Text>Faifit@gmail.com.</Text>
              </Flex>
            </GridItem>
            <GridItem display={"flex"} flexDirection="column" gap={"5px"}>
              <Text
                fontSize={"20px"}
                fontWeight={400}
                textTransform="uppercase"
              >
                TIME
              </Text>
              <Flex>
                <Text>10AM - 7PM</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex width={'100%'} flexDirection={"column"} justifyContent="center" alignItems={'center'} py="30px">
          <Flex width={'900px'} flexDirection="column" gap={5}>
          <Flex width={'100%'}>
          <Text
            fontSize={"20px"}
            fontWeight={400}
            textAlign="center"
            textTransform="uppercase"
          >
            Please complete the form below, and Your query will be sent directly
            to our customer support team
          </Text>
          </Flex>
          <Flex w="100%" flexDirection={'column'} justifyContent={'center'} alignItems="center" gap={"30px"}>
            <Grid templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }} gap="30px">
                <GridItem>
                    <Flex flexDirection={'column'} gap="1px">
                        <Text fontSize={'16px'} fontWeight={600}>Name</Text>
                        <Input type={"text"} variant={'none'} width="400px" border="1px solid #e5e5e5" borderRadius={"none"} _hover={{
                            border: "1px solid #000"
                        }} />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection={'column'} gap="1px">
                        <Text fontSize={'16px'} fontWeight={600}>Email</Text>
                        <Input type={"email"} variant={'none'} width="400px" border="1px solid #e5e5e5" borderRadius={"none"} _hover={{
                            border: "1px solid #000"
                        }} />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection={'column'} gap="1px">
                        <Text fontSize={'16px'} fontWeight={600}>Phone Number</Text>
                        <Input type={"tel"} variant={'none'} width="400px" border="1px solid #e5e5e5" borderRadius={"none"} _hover={{
                            border: "1px solid #000"
                        }} />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection={'column'} gap="1px">
                        <Text fontSize={'16px'} fontWeight={600}>Order Number</Text>
                        <Input type={"num"} variant={'none'} width="400px" border="1px solid #e5e5e5" borderRadius={"none"} _hover={{
                            border: "1px solid #000"
                        }} />
                    </Flex>
                </GridItem>
            </Grid>
            <Flex w={'830px'} flexDirection={'column'} gap="1px">
            <Text fontSize={'16px'} fontWeight={600}>Your Message</Text>
                <Textarea variant={'none'} h="100px" border="1px solid #e5e5e5" borderRadius={"none"} _hover={{
                            border: "1px solid #000"
                        }}  />
            </Flex>
            <Flex w={'830px'}>
            <Button >Submit</Button>
            </Flex>
          </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ContactPage;
