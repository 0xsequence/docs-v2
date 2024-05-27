
import {useEffect, useState} from 'react';
import {sequence} from '0xsequence'
import { SequenceIndexer } from '@0xsequence/indexer'
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import {useSessionHash} from './hooks/useSessionHash.ts'
import embeddedWallet from './EmbeddedWallet/EmbeddedWallet'

const contractAddress = '0x3ace164da9ef42843dded5c008a75dcc18d82651'

function EmbeddedWalletMintWidget(props: any) {
  const indexer = new SequenceIndexer(`https://${props.network}-indexer.sequence.app`, 'AQAAAAAAADi4zbq6FAIlrlW4qD-o_xw0-5A')

  const { sessionHash } = useSessionHash()

  sequence.initWallet('AQAAAAAAADi4zbq6FAIlrlW4qD-o_xw0-5A', {defaultNetwork: props.network})

  const [isMinting, setIsMinting] = useState(false)
  const [alreadyMinted, setAlreadyMinted] = useState(false)
  const [txHash, setTxHash] = useState<any>(null)
  const [wallet, setWalletAddress] = useState<any>(null)
  const [isSignedIn, setIsSignedIn] = useState<any>(false)
  const [isError, setIsError] = useState<any>(false)

  useEffect(() => {
    setTimeout(async () => {
      if(wallet && isSignedIn == false){
        const nftBalances: any = await indexer.getTokenBalances({
          contractAddress: contractAddress,
          accountAddress: wallet,
          includeMetadata: true
        })

        let isMintedBoolean = false

        nftBalances.balances.map((token: any) => {
          if(token.tokenID == '0'){
            isMintedBoolean = true
            setAlreadyMinted(true)
            document.getElementById('mint-button')!.style!.background! = '#3e3e3e'
          }
        })
      } else {
        setIsSignedIn(false)
      }
    }, 0)
  }, [wallet])

  useEffect(() => {
    setTimeout(async () => {
      if(await embeddedWallet.isSignedIn()){
        setWalletAddress(await embeddedWallet.getAddress())
      }
    }, 0)
  }, [])

  useEffect(() => {

  }, [alreadyMinted, isMinting])

  const handleGoogleLogin = async (tokenResponse: CredentialResponse) => {
    const res = await embeddedWallet.signIn({
      idToken: tokenResponse.credential!
    }, "Sequence Docs")
    setWalletAddress(res.wallet)
  }

  const handleButtonClick = async () => {
    const nftBalances = await indexer.getTokenBalances({
      contractAddress: contractAddress,
      accountAddress: wallet,
      includeMetadata: true
    })

    setIsMinting(true)
    let isMintedBoolean = false

    nftBalances.balances.map((token) => {
      if(token.tokenID == '0'){
        isMintedBoolean = true
        setAlreadyMinted(true)
      }
    })

    if(isMintedBoolean){
      document.getElementById('mint-button')!.style!.background! = '#3e3e3e'
    } else {
      const url = 'https://docs-collectible.tpin.workers.dev';
      const data = {
        address: wallet
      };
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if(res.status == 200){
        setTxHash(await res.text())
        setAlreadyMinted(true)
        setIsMinting(false)
      } else {
        setIsError(true)
      }
      document.getElementById('mint-button')!.style!.background! = '#3e3e3e'
    }
  };

  const signOut = async () => {
    const sessions = await embeddedWallet.listSessions()

    for(let i = 0; i < sessions.length; i++){
      await embeddedWallet.dropSession({ sessionId: sessions[i].id })
    }

    setWalletAddress(null)
    setAlreadyMinted(false)
    setIsMinting(false)
    setTxHash(null)
  }

  return (
    <div className="widget">
      <div className="widget-body">
        <img className='mint-image' src={'https://metadata.sequence.app/projects/15984/collections/232/tokens/0/image.png'}/>
        <br/>
        <div style={{ display: 'flex', alignItems: 'center', float:'left'}}>
            {wallet && <button className='mint-button' id="mint-button" disabled={alreadyMinted || txHash != null} onClick={handleButtonClick}>{
              !isError
            ?
              !alreadyMinted  
            ? 
              isMinting
            ?
              'Minting...'  
            :
              'Collect' 
            : 
              "Minted ✓" 
            : 
              'Error'
            }</button>}
            {wallet && <div  className='mint-button' id="mint-button" onClick={() => signOut()}>Sign Out</div>}
        </div>
        {wallet == null && <div  className='mint-button' id="mint-button">Gmail Sign In
         <div style={{overflow: 'hidden', opacity: '0', marginTop: '-35px',width: '90px', position: 'absolute', zIndex: 1, height: '100px'}}>
          <GoogleOAuthProvider clientId="908369456253-9ki3cl7bauhhu61hgtb66c1ioo0u2n24.apps.googleusercontent.com" nonce={sessionHash} key={sessionHash}>
            <GoogleLogin 
            nonce={sessionHash}
            key={sessionHash}
            onSuccess={handleGoogleLogin} shape="circle" width={230} />
          </GoogleOAuthProvider>
        </div> 
        </div> }
      </div> 
      <div className="widget-footer">
        <br/>
        {txHash ? <div className="dashed-box">
          <a href={`https://sepolia.arbiscan.io/tx/${txHash}`} target="_blank">{`arbiscan.io: ${txHash.slice(0,8)}`}...</a>
        </div> : <p>Create a wallet and mint a free collectible on {props.network.replace('-', ' ')} in seconds</p>}
      </div>
    </div>
  );
}

export default EmbeddedWalletMintWidget;