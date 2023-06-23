import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({...rest}: IInputProps){
    return(
        <NativeBaseInput
            bg="white"
            h={14}
            px={4}
            borderWidth={1}
            borderColor="gray.600"
            fontSize="md"
            color="blue"
            fontFamily="body"
            mb={4}
            placeholderTextColor="gray.600"
            _focus={{
                bg: "transparent",
                borderWidth: 1,
                borderColor: "green.600"
            }}
            {...rest}
        />
    )
}