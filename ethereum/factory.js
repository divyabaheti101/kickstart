import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x0211f95f249FB2316F6F8716E89293FAc07faDb2"
);

export default instance;
