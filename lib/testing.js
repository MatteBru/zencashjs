const zcjs = require('./index.js');

let wif = 'cPqD5Pt763EazjbMMeLpWqJiT51RG6x49fhqUboZ45W1F5Ve864i';

let priv = zcjs.address.WIFToPrivKey(wif);

let pubKey = zcjs.address.privKeyToPubKey(priv);

let address = zcjs.address.pubKeyToAddr(pubKey);

console.log({priv, pubKey, address, wif});