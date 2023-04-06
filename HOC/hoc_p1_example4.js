let single = function (fn) {
    let ret;
    return () => {
        return ret || (ret = fn.apply(this, arguments))
    }
}

