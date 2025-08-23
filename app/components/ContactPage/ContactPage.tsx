"use client";

import {
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer";

const ContactPage = () => {
  const storeInfo = [
    {
      title: "address",
      desc: "34A. Ishaya shekiri street. 2nd avenue gwarinpa Abuja",
    },
    {
      title: "phone number",
      desc: "CALL: 08091387148",
    },
    {
      title: "EMAIL",
      desc: "Faifit@gmail.com",
    },
    {
      title: "TIME",
      desc: "10AM - 7PM",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    order: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        form,
        "YOUR_PUBLIC_KEY" // from EmailJS
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", order: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong.");
      });
  };
  return (
    <>
      <Flex
        h={{ base: "80vh", md: "100vh" }}
        w="100%"
        pt={"100px"}
        px={"20px"}
        flexDirection={"column"}
      >
        <Flex
          width={"100%"}
          flexDirection={"column"}
          py="20px"
          borderY="1px solid #e5e5e5"
          gap={"10px"}
        >
          <Flex
            justifyContent={"center"}
            alignItems="center"
            pl={{ base: 0, md: "120px", lg: "120px" }}
          >
            <Text textAlign={"center"}>Contact</Text>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            pl={{ base: 0, md: "120px", lg: "120px" }}
          >
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
            gap={{ base: 5, md: 14 }}
            py={{ base: "20px", md: "30px", lg: "30px" }}
            maxW="1200px"
            w="100%"
            mx="auto"
          >
            {storeInfo.map((item, index) => (
              <GridItem
                key={index}
                display={"flex"}
                flexDirection="column"
                justifyContent={{ base: "center", md: "start", lg: "start" }}
                alignItems={{ base: "center", md: "start", lg: "start" }}
                gap={"5px"}
              >
                <Text
                  fontSize={"20px"}
                  fontWeight={400}
                  textTransform="uppercase"
                >
                  {item.title}
                </Text>
                <Flex>
                  <Text
                    fontSize={"16px"}
                    fontWeight={400}
                    textAlign={{ base: "center", md: "start", lg: "start" }}
                    textTransform="capitalize"
                  >
                    {item.desc}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Flex>
        <Flex
          width={"100%"}
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          py="30px"
        >
          <Flex
            width={{ base: "100%", md: "100%", lg: "900px" }}
            flexDirection="column"
            gap={5}
          >
            <Flex width={"100%"}>
              <Text
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight={400}
                textAlign="center"
                textTransform="uppercase"
              >
                Please complete the form below, and Your query will be sent
                directly to our customer support team
              </Text>
            </Flex>
            <form onSubmit={handleSubmit}>
              <Flex
                w="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="30px"
              >
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap="30px"
                >
                  <GridItem>
                    <Flex flexDirection="column" gap="1px">
                      <Text fontSize="16px" fontWeight={600}>
                        Name
                      </Text>
                      <Input
                        name="name"
                        type="text"
                        variant={"none"}
                        width={{ base: "100%", md: "100%", lg: "400px" }}
                        value={form.name}
                        onChange={handleChange}
                        border="1px solid #e5e5e5"
                        borderRadius="none"
                        _hover={{ border: "1px solid #000" }}
                      />
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex flexDirection="column" gap="1px">
                      <Text fontSize="16px" fontWeight={600}>
                        Email
                      </Text>
                      <Input
                        name="email"
                        type="email"
                        width={{ base: "100%", md: "100%", lg: "400px" }}
                        value={form.email}
                        onChange={handleChange}
                        variant={"none"}
                        border="1px solid #e5e5e5"
                        borderRadius="none"
                        _hover={{ border: "1px solid #000" }}
                      />
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex flexDirection="column" gap="1px">
                      <Text fontSize="16px" fontWeight={600}>
                        Phone Number
                      </Text>
                      <Input
                        name="phone"
                        type="tel"
                        width={{ base: "100%", md: "100%", lg: "400px" }}
                        value={form.phone}
                        onChange={handleChange}
                        variant={"none"}
                        border="1px solid #e5e5e5"
                        borderRadius="none"
                        _hover={{ border: "1px solid #000" }}
                      />
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex flexDirection="column" gap="1px">
                      <Text fontSize="16px" fontWeight={600}>
                        Order Number
                      </Text>
                      <Input
                        name="order"
                        type="text"
                        value={form.order}
                        onChange={handleChange}
                        variant={"none"}
                        border="1px solid #e5e5e5"
                        borderRadius="none"
                        _hover={{ border: "1px solid #000" }}
                      />
                    </Flex>
                  </GridItem>
                </Grid>

                <Flex
                  w={{ base: "100%", lg: "830px" }}
                  flexDirection="column"
                  gap="1px"
                >
                  <Text fontSize="16px" fontWeight={600}>
                    Your Message
                  </Text>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    h="100px"
                    variant={"none"}
                    border="1px solid #e5e5e5"
                    borderRadius="none"
                    _hover={{ border: "1px solid #000" }}
                  />
                </Flex>

                <Flex w={{ base: "100%", lg: "830px" }}>
                  <Button
                    type="submit"
                    variant={"none"}
                    width="150px"
                    height="60px"
                    bg="black"
                    color="white"
                    borderRadius="none"
                  >
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </form>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default ContactPage;
