var Base64Binary = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  decodeArrayBuffer: function (a) {
    var b = Math.ceil(3 * a.length / 4),
      c = new ArrayBuffer(b);
    return this.decode(a, c), c
  },
  decode: function (a, b) {
    var c = this._keyStr.indexOf(a.charAt(a.length - 1)),
      d = this._keyStr.indexOf(a.charAt(a.length - 1)),
      e = Math.ceil(3 * a.length / 4);
    64 == c && e--, 64 == d && e--;
    var f, g, h, i, j, k, l, m, n = 0,
      o = 0;
    for (f = b ? new Uint8Array(b) : new Uint8Array(e), a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""), n = 0; n < e; n += 3) j = this._keyStr.indexOf(a.charAt(o++)), k = this._keyStr.indexOf(a.charAt(o++)), l = this._keyStr.indexOf(a.charAt(o++)), m = this._keyStr.indexOf(a.charAt(o++)), g = j << 2 | k >> 4, h = (15 & k) << 4 | l >> 2, i = (3 & l) << 6 | m, f[n] = g, 64 != l && (f[n + 1] = h), 64 != m && (f[n + 2] = i);
    return f
  }
};