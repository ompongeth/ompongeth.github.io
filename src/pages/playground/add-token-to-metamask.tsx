import DefaultLayout from "components/layouts/DefaultLayout"

const AddTokenToMetaMask = () => {

  const addTokenToMM = async () => {
    try {
      const { ethereum } = window as any
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: "0xBABC4612Bb07009cd43ba417cFD4E01D91BC45d6",  // ERC20 token address
            symbol: `ABIS`,
            decimals: 18,
            image: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
          },
        },
      })
    } catch (ex) {
      // We don't handle that error for now
      // Might be a different wallet than Metmask
      // or user declined
      console.error(ex)
    }
  }

  return (
    <div className="md:w-3/5 mx-auto mt-6">

      <div className="text-4xl font-bold mb-10 text-center">Add Token to MetaMask</div>

      <div className="text-center">
        <button onClick={addTokenToMM} className="p-3 bg-blue-600 text-white rounded-lg font-bold">Add ABIS to MetaMask</button>
        <div className="mt-4 italic">Note: this is Conflux eSpace Network</div>
      </div>

    </div>
  )
}

AddTokenToMetaMask.layoutProps = {
  Layout: DefaultLayout,
}

export default AddTokenToMetaMask
