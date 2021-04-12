import { useEffect, useState } from 'react';
import useSolCount from '@/hooks/useSolCount';
import { Button, ButtonGroup, Input } from '@chakra-ui/react';

const SolCountActions = () => {
  const { sol, increment, decrement, set, toggle } = useSolCount();
  const [newValue, setNewValue] = useState<number>(sol);

  const onChange = (e) => {
    const value = parseInt(e.currentTarget.value, 10);
    setNewValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    set(newValue);
  };

  useEffect(() => {
    setNewValue(sol);
  }, [sol]);

  return (
    <form onSubmit={onSubmit}>
      <ButtonGroup mt="2" mr="2" colorScheme="gray">
        <Input type="number" value={newValue} onChange={onChange} />
        <Button onClick={decrement}>👎🏼</Button>
        <Button onClick={increment}>👍🏼</Button>
      </ButtonGroup>
      <Button variant="solid" onClick={toggle}>
        📸
      </Button>
    </form>
  );
};

export default SolCountActions;
