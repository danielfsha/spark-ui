import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "../../utils/lib";

const Switch = ({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) => {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative flex h-6 w-10 rounded-full bg-gray-300 bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-gray-500 dark:from-gray-500 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none"
      )}
      {...props}
    />
  );
};

const SwitchThumb = ({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Thumb>) => {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        "aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25"
      )}
      {...props}
    />
  );
};

export { Switch, SwitchThumb };
