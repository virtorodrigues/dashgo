import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Diego Fernandes</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          DiegoFernandes
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Diego Fernandes"
        src="https://github.com/virtorodrigues.png"
      />
    </Flex>
  )
}