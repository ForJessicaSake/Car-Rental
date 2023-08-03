type Props = {
  className?: string;
  children: React.ReactNode | string;
  disabled?: boolean;
};

const Button = ({ className, children, disabled }: Props) => {
  return <button className={`h-11 rounded-lg sm:w-36 w-28 text-white font-medium ${className}`}>{children}</button>;
};

export default Button;
