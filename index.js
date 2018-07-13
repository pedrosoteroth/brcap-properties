'use strict';

let getPropertiesS3 = (() => {
    var _ref = _asyncToGenerator(function* (bucket, keys) {
        const results = [];
        for (let i = 0; i < keys.length; i += 1) {
            const result = yield Promise.promisify(aws.S3_Get)(bucket, keys[i].valor);
            results[keys[i].chave] = JSON.parse(result.Body);
        }
        return results;
    });

    return function getPropertiesS3(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const aws = require('brcap-aws');
const Promise = require('bluebird');

module.exports = {
    getPropertiesS3
};

