import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid";
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg= "green.600"
      rounded="sm"
      _pressed={{
        bg:"green.500"
      }}
      {...rest}
    >
      <Text
        color="white"
        fontFamily="body"
        fontSize="md"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
