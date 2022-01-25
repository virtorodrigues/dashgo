import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInformData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail com formato inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInformData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="E-mail"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size={"lg"}
          colorScheme={"pink"}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
