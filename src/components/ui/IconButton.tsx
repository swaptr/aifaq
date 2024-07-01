import { cn } from "@/lib/utils"
import { Button } from "@headlessui/react"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string
}

const IconButton = ({ children, className }: Props) => {
    return (
        <Button className={cn("h-10 w-10 aspect-square p-1 rounded-full", className)}>{children}</Button>
    )
}

export default IconButton;