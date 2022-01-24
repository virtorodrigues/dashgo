import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Input } from './components/Form/Input'

export default function SignIn() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width={"100%"}
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir={"column"}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="E-mail"
            type="email"
          />
          <Input
            name="password"
            label="Password"
            type="password"
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size={"lg"}
          colorScheme={"pink"}
        >Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
