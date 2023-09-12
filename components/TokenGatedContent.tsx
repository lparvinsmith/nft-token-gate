import { useAccount, useContractRead } from 'wagmi'

export function TokenGatedContent(){
    const { address } = useAccount()
    
    // useContractRead to read user's NFT balance
    // https://wagmi.sh/react/hooks/useContractRead

    const isNftHolder = false;

    if (isNftHolder) return <div>You're in the club</div>

    return <div>Members only</div>
}