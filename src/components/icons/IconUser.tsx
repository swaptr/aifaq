import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const IconUser = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={cn("h-full w-full", props.className)} {...props}><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
    )
}