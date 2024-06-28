import ContentWidthWrapper from "./ContentWidthWrapper";
import SuggestionItem from "./SuggestionItem";
import { IconHyperledger } from "./icons/IconHyperledger";

type Props = {}

const WelcomeSection = ({ }: Props) => {
    return (
        <div className="flex w-full h-full items-center justify-center px-8">
            <ContentWidthWrapper className="flex flex-col space-y-4 items-center">
                <IconHyperledger className="w-16 h-16 fill-primary" />
                <div className="grid grid-cols-2 gap-4">
                    <SuggestionItem title="What is Hyperledger Aries?" prompt="What is hyperledger aries and how can i set it up on my device?" />
                    <SuggestionItem title="Is Hyperledger a part of Linux Foundation if yes when was it added to Linux Foundation, the year?" prompt="What is hyperledger iroha and how can i set it up on my device?" />
                    <SuggestionItem title="What is Hyperledger Aries?" prompt="What is hyperledger aries and how can i set it up on my device?" />
                    <SuggestionItem title="What is Hyperledger Aries?" prompt="What is hyperledger aries and how can i set it up on my device?" />
                </div>
            </ContentWidthWrapper>
        </div>
    )
}

export default WelcomeSection;