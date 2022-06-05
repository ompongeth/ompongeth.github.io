import DefaultLayout from "components/layouts/DefaultLayout"
import WrongNetworkOverlay from "modules/web3/components/WrongNetworkOverlay"

const ForceNetwork = () => {

  return (
    <div className="md:w-3/5 mx-auto mt-6">

      <div className="text-4xl font-bold mb-10 text-center">Force Network on Web3 App</div>

      <div className="text-center">
        <div className="mb-4">This is a web3 app, what&apos;s up?!</div>
        <div>When connected to a wallet on this page, you will be forced to use the <b>Ethereum Mainnet</b> network</div>
      </div>

      <WrongNetworkOverlay />

    </div>
  )
}

ForceNetwork.layoutProps = {
  Layout: DefaultLayout,
}

export default ForceNetwork
