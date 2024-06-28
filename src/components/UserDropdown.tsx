import { Menu, MenuButton, MenuItem, MenuItems, MenuSection, MenuSeparator } from '@headlessui/react'
import { IconUser } from './icons/IconUser';
import { cn } from '@/lib/utils';

type Props = {}

type UserMenuItemProps = {
    className?: string;
    href: string;
    title: string;
}

const UserMenuItem = ({ className, title, href }: UserMenuItemProps) => {
    return (
        <MenuItem>
            <a className={cn("block py-1 px-4 data-[focus]:bg-secondary/30", className)} href={href}>
                {title}
            </a>
        </MenuItem>
    )
}

const UserDropdown = ({ }: Props) => {
    return (
        <Menu>
            <MenuButton>
                <IconUser strokeWidth={2} className='h-8 w-8 fill-none stroke-white border-2 border-white rounded-full' />
            </MenuButton>
            <MenuItems anchor="bottom end" className="border bg-background rounded-lg w-36">
                <MenuSection>
                    <UserMenuItem title="Settings" href="/settings" />
                    <UserMenuItem title="Support" href="/support" />
                </MenuSection>
                <MenuSeparator className="h-px bg-border" />
                <MenuSection>
                    <UserMenuItem title="Logout" href="/logout" className="data-[focus]:bg-destructive/5 data-[focus]:text-destructive" />
                </MenuSection>
            </MenuItems>
        </Menu>
    )
}

export default UserDropdown;