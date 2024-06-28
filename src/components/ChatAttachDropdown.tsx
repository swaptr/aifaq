import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { IconClip } from "./icons/IconClip"

type Props = {}

const ChatAttachDropdown = (props: Props) => {
    return (
        <Menu>
            <MenuButton className="h-10 w-10 p-1">
                <IconClip className="stroke-black" />
            </MenuButton>
            <MenuItems anchor="top start">
                <MenuItem>
                    <p>Upload</p>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}

export default ChatAttachDropdown;