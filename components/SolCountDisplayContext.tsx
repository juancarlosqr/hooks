import { useContext } from 'react';
import { SolCountContext } from '@/providers/SolCountProvider';
import { Text } from '@chakra-ui/layout';

const SolCountDisplayContext = () => {
  const { state } = useContext(SolCountContext);
  const { sol } = state;

  return <Text mt="2">{`Sol count with context: ${sol}`}</Text>;
};

export default SolCountDisplayContext;
