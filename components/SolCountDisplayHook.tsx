import useSolCount from '@/hooks/useSolCount';
import { Text } from '@chakra-ui/layout';

const SolCountDisplayHook = () => {
  const { sol } = useSolCount();

  return <Text mt="2">{`Sol count with hook: ${sol}`}</Text>;
};

export default SolCountDisplayHook;
