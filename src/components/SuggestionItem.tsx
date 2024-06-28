import { Button } from "@headlessui/react";

type Props = {
    title: string;
    prompt: string;
}

const SuggestionItem = ({ title, prompt }: Props) => {
    return (
        <Button className="border rounded-3xl px-4 py-6 text-muted-foreground data-[hover]:bg-gray-100">
            <span className="line-clamp-3 text-balance break-word">{title}</span>
        </Button>
    )
}

export default SuggestionItem;