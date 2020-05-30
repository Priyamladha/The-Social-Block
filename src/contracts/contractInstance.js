import web3 from './web3'; 
const address = "Address of Contract";
const abi = Paste your ABI here;
export default new web3.eth.Contract(abi, address);
