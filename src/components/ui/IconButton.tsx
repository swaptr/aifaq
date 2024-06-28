import { cn } from "@/lib/utils"
import { Button } from "@headlessui/react"

type Props = {
    children: React.ReactNode,
    className?: string
}

const IconButton = ({ children, className }: Props) => {
    return (
        <Button className={cn("h-10 w-10 aspect-square p-1 rounded-full", className)}>{children}</Button>
    )
}

export default IconButton;