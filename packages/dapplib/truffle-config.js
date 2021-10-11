require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot filter cost oval clutch coral light army gate'; 
let testAccounts = [
"0x6a1c8d86558f0256206f4c5930cd0671dda05dea58c662dc61a949c2485c1639",
"0x11c02022c695ea173dae20bc0481df0d853af9f199e008c6d1229b753d7a09a5",
"0xd93de8b5045fefb4feb5de2c038b4455dcc83597870d906d207d8a6c581cad17",
"0x568acfc9b33e20c22e9b2b3a0f81a23f19a9586b5ee251ea9f1e03876b382193",
"0x92d98bfd1ffce41a449224a30f46e68a22cdf34a55db34baf2cf290d730fde21",
"0x4a3193a9be1eb76c52e060289d11bcaae1ba5e05794e62822e798d74e30ec68b",
"0x8de154fc53cda3415d5e894e049e178a6efcd586f23a189cebfbac53902991e8",
"0xe8a0ae9cfce300391fcda5de25f28fcbba65368954fd67086080ada0b11344ed",
"0x316932c8e07763b363d5029466f0d08718de8436ef2b101078bedc6d9c40036e",
"0x3d7f5d98666f2b663e3bb1273d2bf746f0b663cb1a2e086b648d06c5427162ff"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


