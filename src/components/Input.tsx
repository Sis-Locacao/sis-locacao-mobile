import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, ...rest }: Props) {
  const isInvalid = !!errorMessage;

  return (
    <FormControl isInvalid={isInvalid} mb={4}>
      <NativeBaseInput
        bg="white"
        h={14}
        px={4}
        borderWidth={1}
        borderColor="gray.600"
        fontSize="md"
        color="blue"
        fontFamily="body"
        placeholderTextColor="gray.600"
        _focus={{
          bg: "transparent",
          borderWidth: 1,
          borderColor: "green.600",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
