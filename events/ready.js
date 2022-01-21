const client = require("../index");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const mongoose = require("mongoose")
const { Database } = require("../config.json")
client.on("ready", () => {
    if(!Database) return;
    mongoose.connect(Database, {
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully Connected To The Database!")
    }).catch((err) => {
        console.log(err)
    })

    console.log(`${client.user.tag} Has Logged In!`)
    async function status() {
        const response = await fetch("https://api.slothpixel.me/api/skyblock/bazaar")
        const d = await response.json()
        const { ROUGH_JADE_GEM, ROUGH_AMETHYST_GEM, ROUGH_SAPPHIRE_GEM, ROUGH_RUBY_GEM, ROUGH_AMBER_GEM, ROUGH_TOPAZ_GEM } = d
        const a = ROUGH_AMBER_GEM.quick_status.sellPrice.toFixed(15)
        const t = ROUGH_TOPAZ_GEM.quick_status.sellPrice.toFixed(15)
        const r = ROUGH_RUBY_GEM.quick_status.sellPrice.toFixed(15)
        const j = ROUGH_JADE_GEM.quick_status.sellPrice.toFixed(15)
        const s = ROUGH_SAPPHIRE_GEM.quick_status.sellPrice.toFixed(15)
        const m = ROUGH_AMETHYST_GEM.quick_status.sellPrice.toFixed(15)
        // console.log(biggest)
        function getHighestNumber(nums) {
            return nums.reduce((acc, num, index) => {
              if(num > acc.value) {
                acc.value = num;
                acc.index = index;
              }
              
              return acc;
            }, {value: null, index: null});
          }
          
          let nums = [a,t,r,j,s,m];
          const big = getHighestNumber(nums);
          const biggest = big.index+1
        if(biggest === 1) {
            console.log("Amber")
            client.user.setActivity("Amber Is The Most Profitable!", { type: 'PLAYING' });
        }
        if(biggest === 2) {
            console.log("Topaz")
            client.user.setActivity("Topaz Is The Most Profitable!", { type: 'PLAYING' });
        }
        if(biggest === 3) {
            console.log("Ruby")
            client.user.setActivity("Ruby Is The Most Profitable!", { type: 'PLAYING' });
        }
        if(biggest === 4) {
            console.log("Jade")
            client.user.setActivity("Jade Is The Most Profitable!", { type: 'PLAYING' });
        }
        if(biggest === 5) {
            console.log("Sapphire")
            client.user.setActivity("Sapphire Is The Most Profitable!", { type: 'PLAYING' });
        }
        if(biggest === 6) {
            console.log("Amethyst")
            client.user.setActivity("Amethyst Is The Most Profitable!", { type: 'PLAYING' });
        }
    }
    status()
    setInterval(() => {
        status()
    }, 600000);
});
