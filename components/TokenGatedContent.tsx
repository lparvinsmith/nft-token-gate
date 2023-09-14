import { useAccount, useContractRead } from 'wagmi';
import { MemberContent } from './MemberContent';
import { NonMemberContent } from './NonMemberContent';

const CONTRACT_ADDRESS = '';

export function TokenGatedContent(){
    const { address } = useAccount();

    // useContractRead to read user's NFT balance
    // https://wagmi.sh/react/hooks/useContractRead

    const isNftHolder = false;

    if (isNftHolder) return <MemberContent />

    return <NonMemberContent />
}