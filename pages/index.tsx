import { Checkbox } from '@mantine/core';

export default function Demo() {
  return (
    <Checkbox
      labelPosition="left"
      label="I agree to sell my privacy"
      description="some details"
      color="yellow"
      radius="xl"
      size="xl"
    />
  );
}