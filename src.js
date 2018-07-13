const aws = require('brcap-aws');
const Promise = require('bluebird');

class Properties {
    constructor(bucket, keys) {
        this.bucket = bucket;
        this.keys = keys;
    }

    async getPropertiesS3() {
        const results = [];
        for (let i = 0; i < this.keys.length; i += 1) {
            const result = await Promise.promisify(aws.S3_Get)(this.bucket, this.keys[i].valor);
            results[this.keys[i].chave] = JSON.parse(result.Body);
        }
        return results;
    }
}

module.exports = Properties;