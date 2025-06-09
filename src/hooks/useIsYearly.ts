import { useFormContext } from "react-hook-form";
import { useMemo } from "react";
import type { FormValues } from "../App";

export const useIsYearly = () => {
  const { watch } = useFormContext<FormValues>();
  const billing = watch('billing');

  const isYearly = useMemo(() => billing === 'yearly', [billing]);
  return isYearly;
};