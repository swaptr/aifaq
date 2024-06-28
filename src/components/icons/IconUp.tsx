import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const IconUp = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className={cn("h-full w-full", props.className)} {...props}><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
    )
}