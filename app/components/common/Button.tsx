import { cn } from "@/app/util/utils";
import { forwardRef, ReactNode, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonName: string;
  variant: ButtonVariant;
  size: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-moss text-white font-bold border border-gray-300 shadow cursor-pointer transition-transform duration-150 hover:-translate-y-1 active:translate-y-0.5",

  secondary: "bg-zinc-900 text-white ring-1 ring-zinc-800 hover:bg-zinc-800",

  outline:
    "bg-transparent font-bold text-ink text-shadow cursor-pointer transition-transform duration-150 hover:-translate-y-1 active:translate-y-0.5",

  ghost: "bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white",

  danger:
    "bg-red-500/10 text-red-400 ring-1 ring-red-500/20 hover:bg-red-500/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 rounded-md px-3 text-xs",
  md: "h-10 rounded-lg px-4 text-sm",
  lg: "h-12 rounded-lg py-3 px-8 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      buttonName,
      children,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      loading = false,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "group inline-flex items-center justify-center gap-2",
          "whitespace-nowrap font-medium tracking-tight",
          "outline-none transition-all duration-200 ease-out",

          "focus-visible:ring-2 focus-visible:ring-white/30",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-black",

          "disabled:pointer-events-none",
          "disabled:cursor-not-allowed disabled:opacity-50",

          variants[variant],
          sizes[size],

          className,
        )}
        {...props}
      >
        {loading ? (
          <span
            className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : (
          leftIcon && (
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
              {leftIcon}
            </span>
          )
        )}

        <span>{children ?? buttonName}</span>

        {!loading && rightIcon && (
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
