import { ComponentProps } from "react";

interface ButtonIconProps extends ComponentProps<'button'>{
  transparent?: boolean
}

export function ButtonIcon({transparent, ...props}: ButtonIconProps) {
  return (
    <button {...props} className={transparent ? "bg-black border border-white/10 rounded-md p-1.5" : "bg-white/10 border border-white/10 rounded-md p-1.5"} />
  )
}