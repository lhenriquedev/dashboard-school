import * as Select from "@radix-ui/react-select";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

export function SelectComponent() {
  const { register } = useFormContext();
  return (
    <Select.Root {...register("city")}>
      <Select.Trigger aria-label="Food">
        <Select.Value placeholder="Selecione uma escola" />
        <Select.Icon></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton></Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton>
            {/* <ChevronDownIcon /> */}
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
