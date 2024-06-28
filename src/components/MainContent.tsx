import ContentWidthWrapper from "@/components/ContentWidthWrapper";
import UserDropdown from "@/components/UserDropdown";
import ChatWindow from "./ChatWindow";
import WelcomeSection from "./WelcomeSection";
import ChatBox from "./ChatBox";

type Props = {}

const MainContent = ({ }: Props) => {
    const chatSelected = false;

    return (
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
            <main className="flex h-full flex-col focus-visible:outline-0">
                <div className="flex-1 overflow-hidden">
                    <div className="relative h-full">
                        <div className="absolute left-0 right-0 w-full">
                            <div className="sticky top-0 flex items-center justify-between z-10 h-12 font-semibold bg-primary text-white p-2">
                                <span className="font-primary text-2xl select-none">Hyperledger AIFAQ</span>
                                <UserDropdown />
                            </div>
                        </div>
                        {chatSelected ? <ChatWindow /> : <WelcomeSection />}
                    </div>
                </div>
                <div className="w-full">
                    <ContentWidthWrapper>
                        <div className="flex flex-col">
                            <form>
                                <ChatBox />
                            </form>
                            <span className="text-xs py-1 text-center">AIFAQ can make mistakes. Check important info.</span>
                        </div>
                    </ContentWidthWrapper>
                </div>
            </main>
        </div>
    )
}

export default MainContent;