/**
 * 统一路径分割符 主要为了后续生成模块ID方便.
 * @param path
 * @returns {*}
 */
function toUnixPath(path) {
    return path.replace(/\\/g, '/')
}

module.exports = toUnixPath;