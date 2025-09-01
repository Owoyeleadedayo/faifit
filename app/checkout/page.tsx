"use client";

import { useCart } from "@/app/context/CartContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Grid,
  GridItem,
  VStack,
  Heading,
  Image,
  Divider,
  FormErrorMessage,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../components/Footer";
import NavBarforOthers from "../components/NavBarforOthers";

interface CartItem {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

const CheckoutPage = () => {
  const { cart } = useCart();
  console.log("Cart contents in CheckoutPage:", cart);
  const toast = useToast();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Generate a unique order ID (simple example, replace with a robust method if needed)
  const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.street) newErrors.street = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Order Submitted",
        description:
          "Your order has been received. Please make payment to the account below and send proof of payment via WhatsApp.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
      });
    } else {
      toast({
        title: "Form Error",
        description: "Please fill out all required fields correctly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const totalPrice = cart
    .reduce((sum, item) => {
      const priceNum = item.price;
      console.log(
        `Item ${item.id} price: ${item.price}, quantity: ${
          item.quantity
        }, subtotal: ${priceNum * item.quantity}`
      );
      return sum + priceNum * item.quantity;
    }, 0)
    .toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });

  // Generate WhatsApp message with order details
  const generateWhatsAppMessage = () => {
    const itemsList = cart
      .map(
        (item) =>
          `- ${item.title} (Color: ${item.color || "N/A"}, Size: ${
            item.size || "N/A"
          }, Quantity: ${item.quantity}, Subtotal: ₦${(
            item.price * item.quantity
          ).toLocaleString()})`
      )
      .join("\n");
    const messageTemplate = `Order ID: ${orderId}\n\nHello, I have placed an order:\n\n${itemsList}\n\nTotal: ${totalPrice}\n\nPlease confirm receipt and let me know where to send the proof of payment. DO NOT EDIT THIS MESSAGE to ensure accurate order processing.`;
    return encodeURIComponent(messageTemplate);
  };

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/+2348073938888?text=${generateWhatsAppMessage()}`;

  // Non-editable message display
  const displayMessage = () => {
    const itemsList = cart
      .map(
        (item) =>
          `- ${item.title} (Color: ${item.color || "N/A"}, Size: ${
            item.size || "N/A"
          }, Quantity: ${item.quantity}, Subtotal: ₦${(
            item.price * item.quantity
          ).toLocaleString()})`
      )
      .join("\n");
    return `Order ID: ${orderId}\n\nHello, I have placed an order:\n\n${itemsList}\n\nTotal: ${totalPrice}\n\nPlease confirm receipt and let me know where to send the proof of payment. DO NOT EDIT THIS MESSAGE to ensure accurate order processing.`;
  };

  return (
    <>
      <NavBarforOthers />
      <Box
        minH="100%"
        pt={{ base: "80px", md: "100px", lg: "120px" }}
        pb="40px"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 6, md: 10, lg: 12 }}
          px={{ base: "20px", md: "30px" }}
          maxW="1200px"
          mx="auto"
        >
          <GridItem>
            <VStack spacing={4} align="stretch">
              <Heading size="lg" textTransform="uppercase">
                Checkout
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Home / Store / Checkout
              </Text>
              <Box borderY="1px solid #e5e5e5" py="20px">
                <Heading size="md" mb={4}>
                  Billing Information
                </Heading>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl isInvalid={!!errors.fullName}>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.phone}>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.street}>
                      <FormLabel>Street Address</FormLabel>
                      <Input
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <FormErrorMessage>{errors.street}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.city}>
                      <FormLabel>City</FormLabel>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <FormErrorMessage>{errors.city}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.state}>
                      <FormLabel>State</FormLabel>
                      <Input
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <FormErrorMessage>{errors.state}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.postalCode}>
                      <FormLabel>Postal Code</FormLabel>
                      <Input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="100001"
                      />
                      <FormErrorMessage>{errors.postalCode}</FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      bg="#000"
                      color="white"
                      w="full"
                      _hover={{ bg: "gray.800" }}
                    >
                      Place Order
                    </Button>
                  </VStack>
                </form>
              </Box>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack
              spacing={4}
              align="stretch"
              border="1px solid #e5e5e5"
              p={6}
              borderRadius="md"
            >
              <Heading size="md">Order Summary</Heading>
              <Divider />
              {cart.length === 0 ? (
                <Text>No items in cart</Text>
              ) : (
                <VStack spacing={4} align="stretch">
                  {cart.map((item) => (
                    <Flex
                      key={`${item.id}-${item.color}-${item.size}`}
                      align="center"
                      gap={4}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        boxSize="80px"
                        objectFit="contain"
                      />
                      <Box>
                        <Text fontWeight="bold">{item.title}</Text>
                        <Text>Color: {item.color || "N/A"}</Text>
                        <Text>Size: {item.size || "N/A"}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                  <Divider />
                  <Flex justify="space-between">
                    <Text fontWeight="bold">Total:</Text>
                    <Text>{totalPrice}</Text>
                  </Flex>
                  <Divider />
                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Payment Instructions
                    </Text>
                    <Text>Bank: Guaranty Trust Bank Plc</Text>
                    <Text>Account Number: 0232738811</Text>
                    <Text>Account Name: Ewa Wofai Egu</Text>
                    <Text fontSize="sm" color="gray.600" mt={2}>
                      Please make payment to the above account and send proof of
                      payment via WhatsApp using the button above. Ensure the
                      message is not edited to avoid order discrepancies.
                    </Text>
                    <Box mt={4} p={3} bg="gray.100" borderRadius="md">
                      <Text fontWeight="bold" mb={2}>
                        Your Order Message:
                      </Text>
                      <Text whiteSpace="pre-wrap" fontSize="sm">
                        {displayMessage()}
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              )}
               <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              bg="#25D366"
              color="white"
              mt={2}
              w="full"
              _hover={{ bg: "#20b958" }}
            >
              Send Proof of Payment via WhatsApp
            </Button>
            </VStack>
           
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default CheckoutPage;
