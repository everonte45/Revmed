import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-teal text-white hover:bg-teal-dark shadow-teal hover:shadow-lg transform hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-medical-border bg-background text-charcoal hover:bg-teal-light hover:border-teal hover:text-teal-dark",
        secondary: "bg-light-gray text-charcoal hover:bg-medical-border",
        ghost: "text-charcoal hover:bg-teal-light hover:text-teal-dark",
        link: "text-teal underline-offset-4 hover:underline hover:text-teal-dark",
        hero: "bg-gradient-primary text-white font-semibold shadow-teal hover:shadow-xl transform hover:-translate-y-1 hover:scale-105",
        medical: "bg-medical-bg text-charcoal border border-medical-border hover:bg-white hover:shadow-medical",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 py-2 text-sm",
        lg: "h-14 rounded-lg px-8 py-4 text-base font-medium",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
