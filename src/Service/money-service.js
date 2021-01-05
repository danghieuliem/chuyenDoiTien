const MoneyModel = require("../Models/money");

const request = require("request");
const PATHAPI = `https://v6.exchangerate-api.com/v6/74a06384f5244199c2e13ad6/latest`;
const fs = require(`fs`);
const path = require('path');

const PATHDATE = path.join(__dirname, "../../Data/Contry_data.json");

/**
 * 
 * @param {MoneyModel} money 
 * @param {string} typeChange 
 */
const changer = (money, typeChange) => {
    const api_path = PATHAPI + "/" + money.name;
    console.log(api_path);

    return new Promise((resolve, reject) => {
        request(api_path, { json: true }, (error, res, body) => {
            if (error !== null || body.length === 0) {
                console.log(error)
                reject();
            } else {
                //console.log(body)
                const { conversion_rates } = body;
                // console.log(conversion_rates);
                const map = new Map(Object.entries(conversion_rates));
                console.log(typeof(typeChange));
                console.log(map.get(typeChange));
                const value = money.value * map.get(typeChange);
                resolve(value);
            }
        })
    });
}

const getAllType = () => {
    console.log(PATHDATE)
    return new Promise((resolve, reject) => fs.readFile(PATHDATE, (err, data) => {
        if (!err) {
            data = JSON.parse(data);
            return resolve(data);
        }
        reject();
    }));
}



module.exports = {
    changer,
    getAllType
}