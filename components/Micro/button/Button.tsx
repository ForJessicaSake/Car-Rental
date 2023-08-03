type Props = {
  className?: string;
  children: React.ReactNode | string;
  disabled?: boolean;
};

const Button = ({ className, children, disabled }: Props) => {
  return <button className={` ${className} h-11 rounded-lg text-white font-medium sm:w-28 w-24` }>{children}</button>;
};

export default Button;
