import { Button as BaseButton } from '@headlessui/react'
import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ ...props }: Props) => {
    return (
        <BaseButton className={cn("", props.className)}>
            {props.children}
        </BaseButton>
    )
}

export default Button;