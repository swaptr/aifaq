import { cn } from "@/lib/utils"
import { Textarea } from "@headlessui/react"
import { TextareaHTMLAttributes } from "react";
import IconButton from "./ui/IconButton";
import { IconHyperledger } from "./icons/IconHyperledger";
import { IconUp } from "./icons/IconUp";
import { IconClip } from "./icons/IconClip";
import ChatAttachDropdown from "./ChatAttachDropdown";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

const ChatBox = ({ }: Props) => {
    return (
        <div className={cn("flex flex-row border p-2 rounded-3xl items-center space-x-2")}>
            {/* <IconButton className="ml-1 stroke-black">
                <IconClip />
            </IconButton> */}
            <ChatAttachDropdown />
            <Textarea className="w-full resize-none outline-none text-lg" placeholder="Message AIFAQ" rows={1} />
            <IconButton className="bg-primary stroke-background data-[hover]:bg-primary/80">
                <IconUp />
            </IconButton>
        </div>
    )
}

export default ChatBox;