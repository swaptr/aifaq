type Props = {}

const Sidebar = ({ }: Props) => {
    return (
        <aside className="flex-shrink-0 overflow-x-hidden bg-secondary w-72">
            <ul className="pt-12">
                <li>What is Hyperledger Iroha?</li>
                <li>How to run an aries node on Linux?</li>
            </ul>
        </aside>
    )
}

export default Sidebar;