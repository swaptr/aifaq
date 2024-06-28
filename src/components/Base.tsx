import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import { useWindowSize } from '@/hooks/useWindowSize';

type Props = {}

const Base = ({ }: Props) => {
    const { isMobile } = useWindowSize()
    return (
        <div className='relative z-0 flex h-full w-full overflow-hidden'>
            {!isMobile && <Sidebar />}
            <MainContent />
        </div>
    )
}

export default Base;