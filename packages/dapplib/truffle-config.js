require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski strategy dash remind purse hard light army gas'; 
let testAccounts = [
"0x087eea469fa93eb1bf7e305fba20c579c981f1c91fbdd7fa74e1725bdfb10c69",
"0x2d3afcec5a67c3b9e19476b342bb922b25c7ae17315480733f9671d5e5671ed8",
"0x3b6fd96538d18525682a0d73f2cfd581c0217cf7a960a484c99c8408602ba04f",
"0x491808e2cd861c17bec6c1c878629b5faa08c7db6763dbae67b20555222721ee",
"0xfa0c3e3c5a500722259fc309babcb0ac248924d83e5346e81fa5d690944335b3",
"0x28dad0c4de17eb1336685ab538acf96a69d3c0fddaed9c4b614522c8a954ca1f",
"0xffde23f815fcb48e78e3959af50d87b20f03c7b54525915615593fe55276b7b5",
"0xfc95a3a7bd75dc369d2269d7130fe5ccf740f777a4cfee6b4a32c598c6543fb4",
"0x5476bee79d7e0b46ab27016b0f03be6d4174be88d586dc7d0b75c10b04e9a3c6",
"0x24ed8e3aa3d6215181597cc77c03ed174613774dd2e38f6ea70ffa7b981284a7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

