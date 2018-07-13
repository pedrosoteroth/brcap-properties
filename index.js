'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const aws = require('brcap-aws');
const Promise = require('bluebird');

class Properties {
    constructor(bucket, keys) {
        this.bucket = bucket;
        this.keys = keys;
    }

    getPropertiesS3() {
        var _this = this;

        return _asyncToGenerator(function* () {
            const results = [];
            for (let i = 0; i < _this.keys.length; i += 1) {
                const result = yield Promise.promisify(aws.S3_Get)(_this.bucket, _this.keys[i].valor);
                results[_this.keys[i].chave] = JSON.parse(result.Body);
            }
            return results;
        })();
    }
}

module.exports = Properties;

