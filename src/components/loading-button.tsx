import { Loader2Icon } from "lucide-react";

import { Button, ButtonProps } from "./ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export function LoadingButton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props}>
      {loading && <Loader2Icon className="h-4 w-4 animate-spin mr-2" />}
      {children}
    </Button>
  );
}

LoadingButton.defaultProps = {
  loading: false,
};
