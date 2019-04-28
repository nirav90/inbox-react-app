import web3 from './web3';

const address = '0x3Ed96928Bd74afa2A69A805f3f1f58F6568FB1FF';

const abi = [
  {
    "constant":false,
    "inputs":[
      {
        "name":"newMessage",
        "type":"string"
      }
    ],
    "name":"setMessage",
    "outputs":[

    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"message",
    "outputs":[
      {
        "name":"",
        "type":"string"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "name":"initialMessage",
        "type":"string"
      }
    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"constructor"
  }
];

export default new web3.eth.Contract(abi,address);