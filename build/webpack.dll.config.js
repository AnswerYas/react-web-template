const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
const package = require('../package.json')

const packageArr = Object.keys(package.dependencies)
const noDllArr = ['normalize.css']

const getDllArr = () => {
    const arr = []
    for (let item of packageArr) {
        if (noDllArr.findIndex((_item) => item === _item) < 0) {
            arr.push(item)
        }
    }
    return arr
}

module.exports = {
    entry: {
        vendor: getDllArr(),
    },
    output: {
        filename: 'dll_[name]_[hash].js',
        path: path.resolve(__dirname, '../static'),
        library: 'dll_[name]_[hash]',
    },
    plugins: [
        new DllPlugin({
            name: 'dll_[name]_[hash]',
            context: __dirname,
            path: path.join(__dirname, '../static', '[name].manifest.json'),
        }),
    ],
}
