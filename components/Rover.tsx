import { Heading } from '@chakra-ui/layout';
import SolCountActions from './SolCountActions';
import SolCountDisplayContext from './SolCountDisplayContext';
import SolCountDisplayHook from './SolCountDisplayHook';

const Rover = () => {
  return (
    <section>
      <Heading mt="4" size="md">
        photos
      </Heading>
      <SolCountDisplayContext />
      <SolCountDisplayHook />
      <SolCountActions />
    </section>
  );
};

export default Rover;
