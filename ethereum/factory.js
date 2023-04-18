import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x66C6070b5Ad26eF2D20156F4A2Ce2997Ec72797f"
);

export default factory;
