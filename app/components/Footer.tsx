import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Flex width={"100%"} flexDirection={{base: 'column', md: "row", lg: "row"}} justifyContent={{base: "center", md: "space-between", lg: "space-between"}} alignItems={"center"} px={{base: '20px', md: "30px", lg: "30px"}} py="20px" borderTop="1px solid #e5e5e5" gap={{base: "10px", md: 0, lg: 0}}>
            <Flex>
                <Text fontSize={'14px'} fontWeight={400}>© 2025 All rights reserved.</Text>
            </Flex>
            <Flex gap={'10px'}>
                <Link fontSize={'14px'} fontWeight={500} textDecoration="none">Instagram</Link>
                <Link fontSize={'14px'} fontWeight={500}>Twitter</Link>
                <Link fontSize={'14px'} fontWeight={500}>LinkedIn</Link>
            </Flex>
            <Flex gap={'10px'}>
                <Link fontSize={'14px'} fontWeight={500}>Terms and Conditions</Link>
                <Link fontSize={'14px'} fontWeight={500}>Privacy Policy</Link>
            </Flex>
        </Flex>
    </>
  )
}

export default Footer
