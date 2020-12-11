/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function () {
      return f.call(this);
    },
    get: function (a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    },
    pushStack: function (a) {
      var b = r.merge(this.constructor(), a);
      return (b.prevObject = this), b;
    },
    each: function (a) {
      return r.each(this, a);
    },
    map: function (a) {
      return this.pushStack(
        r.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(f.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: h,
    sort: c.sort,
    splice: c.splice,
  }),
    (r.extend = r.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || r.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        h < i;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                      : (f = c && r.isPlainObject(c) ? c : {}),
                    (g[b] = r.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === r.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? j[k.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        p(a);
      },
      camelCase: function (a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o,
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName;
      }),
      (m = ga.setDocument = function (a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = n.documentElement),
            (p = !f(n)),
            v !== n &&
              (e = n.defaultView) &&
              e.top !== e &&
              (e.addEventListener
                ? e.addEventListener("unload", da, !1)
                : e.attachEvent && e.attachEvent("onunload", da)),
            (c.attributes = ja(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = ja(function (a) {
              return (
                a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
            (c.getById = ja(function (a) {
              return (
                (o.appendChild(a).id = u),
                !n.getElementsByName || !n.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.filter.ID = function (a) {
                  var b = a.replace(_, aa);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }),
                (d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }))
              : ((d.filter.ID = function (a) {
                  var b = a.replace(_, aa);
                  return function (a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                }),
                (d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c,
                      d,
                      e,
                      f = b.getElementById(a);
                    if (f) {
                      if (((c = f.getAttributeNode("id")), c && c.value === a))
                        return [f];
                      (e = b.getElementsByName(a)), (d = 0);
                      while ((f = e[d++]))
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                    }
                    return [];
                  }
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function (a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.CLASS =
              c.getElementsByClassName &&
              function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p)
                  return b.getElementsByClassName(a);
              }),
            (r = []),
            (q = []),
            (c.qsa = Y.test(n.querySelectorAll)) &&
              (ja(function (a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + K + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + K + "*(?:value|" + J + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              ja(function (a) {
                a.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + K + "*[*^$|!~]?="),
                  2 !== a.querySelectorAll(":enabled").length &&
                    q.push(":enabled", ":disabled"),
                  (o.appendChild(a).disabled = !0),
                  2 !== a.querySelectorAll(":disabled").length &&
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = Y.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              ja(function (a) {
                (c.disconnectedMatch = s.call(a, "*")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", N);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = Y.test(o.compareDocumentPosition)),
            (t =
              b || Y.test(o.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === n || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === n || (b.ownerDocument === v && t(v, b))
                          ? 1
                          : k
                          ? I(k, a) - I(k, b)
                          : 0
                        : 4 & d
                        ? -1
                        : 1);
                }
              : function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                  if (!e || !f)
                    return a === n
                      ? -1
                      : b === n
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : k
                      ? I(k, a) - I(k, b)
                      : 0;
                  if (e === f) return la(a, b);
                  c = a;
                  while ((c = c.parentNode)) g.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) h.unshift(c);
                  while (g[d] === h[d]) d++;
                  return d
                    ? la(g[d], h[d])
                    : g[d] === v
                    ? -1
                    : h[d] === v
                    ? 1
                    : 0;
                }),
            n)
          : n;
      }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.escape = function (a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText = function (a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = ga.selectors = {
        cacheLength: 50,
        createPseudo: ia,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(_, aa)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || ga.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && ga.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return V.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    T.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(_, aa).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                y(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = ga.attr(d, a);
              return null == e
                ? "!=" === b
                : !b ||
                    ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                      : "|=" === b &&
                        (e === c || e.slice(0, c.length + 1) === c + "-"));
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;
                  if (q) {
                    if (f) {
                      while (p) {
                        m = b;
                        while ((m = m[p]))
                          if (
                            h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (m = q),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n && j[2]),
                        (m = n && q.childNodes[n]);
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (1 === m.nodeType && ++t && m === b) {
                          k[a] = [w, n, t];
                          break;
                        }
                    } else if (
                      (s &&
                        ((m = b),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n)),
                      t === !1)
                    )
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (
                          (h
                            ? m.nodeName.toLowerCase() === r
                            : 1 === m.nodeType) &&
                          ++t &&
                          (s &&
                            ((l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [w, t])),
                          m === b)
                        )
                          break;
                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                  }
                };
          },
          PSEUDO: function (a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                ga.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
              ? ((c = [a, a, "", b]),
                d.setFilters.hasOwnProperty(a.toLowerCase())
                  ? ia(function (a, c) {
                      var d,
                        f = e(a, b),
                        g = f.length;
                      while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                    })
                  : function (a) {
                      return e(a, 0, c);
                    })
              : e;
          },
        },
        pseudos: {
          not: ia(function (a) {
            var b = [],
              c = [],
              d = h(a.replace(P, "$1"));
            return d[u]
              ? ia(function (a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function (a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ia(function (a) {
            return function (b) {
              return ga(a, b).length > 0;
            };
          }),
          contains: ia(function (a) {
            return (
              (a = a.replace(_, aa)),
              function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ia(function (a) {
            return (
              U.test(a || "") || ga.error("unsupported lang: " + a),
              (a = a.replace(_, aa).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: oa(!1),
          disabled: oa(!0),
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !d.pseudos.empty(a);
          },
          header: function (a) {
            return X.test(a.nodeName);
          },
          input: function (a) {
            return W.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: pa(function () {
            return [0];
          }),
          last: pa(function (a, b) {
            return [b - 1];
          }),
          eq: pa(function (a, b, c) {
            return [c < 0 ? c + b : c];
          }),
          even: pa(function (a, b) {
            for (var c = 0; c < b; c += 2) a.push(c);
            return a;
          }),
          odd: pa(function (a, b) {
            for (var c = 1; c < b; c += 2) a.push(c);
            return a;
          }),
          lt: pa(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: pa(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
            return a;
          }),
        },
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize = function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (c && !(e = Q.exec(h))) ||
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = R.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(P, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = V[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
      });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, za(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = ga.select = function (a, b, c, e) {
        var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g((a = m.selector || a));
        if (((c = c || []), 1 === n.length)) {
          if (
            ((i = n[0] = n[0].slice(0)),
            i.length > 2 &&
              "ID" === (j = i[0]).type &&
              9 === b.nodeType &&
              p &&
              d.relative[i[1].type])
          ) {
            if (
              ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
            )
              return c;
            m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
          }
          f = V.needsContext.test(a) ? 0 : i.length;
          while (f--) {
            if (((j = i[f]), d.relative[(k = j.type)])) break;
            if (
              (l = d.find[k]) &&
              (e = l(
                j.matches[0].replace(_, aa),
                ($.test(i[0].type) && qa(b.parentNode)) || b
              ))
            ) {
              if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                return G.apply(c, e), c;
              break;
            }
          }
        }
        return (
          (m || h(a, n))(
            e,
            b,
            !p,
            c,
            !b || ($.test(a) && qa(b.parentNode)) || b
          ),
          c
        );
      }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c;
        })
      : D.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  (r.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function (a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      },
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return y(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function (a) {
        return K(a, "nextSibling");
      },
      prev: function (a) {
        return K(a, "previousSibling");
      },
      nextAll: function (a) {
        return y(a, "nextSibling");
      },
      prevAll: function (a) {
        return y(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return z(a.firstChild);
      },
      contents: function (a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      },
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e.call(a).done(b).fail(c)
        : a && r.isFunction((e = a.then))
        ? e.call(a, b, c)
        : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function (b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          },
        },
        f = {};
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    },
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function (a) {
    return (
      R.then(a)["catch"](function (a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      },
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      },
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : Y.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    },
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              X.set(this, a);
            })
          : T(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          X.remove(this, a);
        });
      },
    }),
    r.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            da(this) ? r(this).show() : r(this).hide();
          });
    },
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle = function (b) {
              return "undefined" != typeof r && r.event.triggered !== b.type
                ? r.event.dispatch.apply(a, arguments)
                : void 0;
            }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function () {
            r.event.remove(this, a, c, b);
          })
        );
      },
    });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    },
  }),
    r.fn.extend({
      detach: function (a) {
        return Ka(this, a, !0);
      },
      remove: function (a) {
        return Ka(this, a);
      },
      text: function (a) {
        return T(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return T(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ja(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), e;
        },
        pixelMarginRight: function () {
          return b(), f;
        },
        reliableMarginLeft: function () {
          return b(), g;
        },
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    r.each(["height", "width"], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function () {
                  return $a(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        },
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function (a, b) {
        return T(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = r.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      },
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (r.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function () {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function () {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    },
  })),
    (r.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b),
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function () {
      bb = null;
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    },
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      },
    }),
    (lb = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    },
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, qb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = r(this)), (f = a.match(L) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    },
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    r.each(["radio", "checkbox"], function () {
      (r.valHooks[this] = {
        set: function (a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        },
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    },
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      },
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          },
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function (a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          },
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                ? (x = "notmodified")
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    },
  }),
    r.each(["get", "post"], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = r.isFunction(a);
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function (b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Rb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return r.globalEval(a), a;
        },
      },
    }),
    r.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    },
  }),
    r.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback = r.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      },
    }),
    r.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
          return T(
            this,
            function (a, d, e) {
              var f;
              return (
                r.isWindow(a)
                  ? (f = a)
                  : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e))
              );
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    r.each(["top", "left"], function (a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function (a, b) {
      r.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || "boolean" != typeof e),
              h = c || (e === !0 || f === !0 ? "margin" : "border");
            return T(
              this,
              function (b, c, e) {
                var f;
                return r.isWindow(b)
                  ? 0 === d.indexOf("outer")
                    ? b["inner" + a]
                    : b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h);
              },
              b,
              g ? e : void 0,
              g
            );
          };
        }
      );
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (r.holdReady = function (a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});
/*! jQuery Migrate v3.0.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (a, b) {
    "use strict";
    function c(c) {
      var d = b.console;
      e[c] ||
        ((e[c] = !0),
        a.migrateWarnings.push(c),
        d &&
          d.warn &&
          !a.migrateMute &&
          (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
    }
    function d(a, b, d, e) {
      Object.defineProperty(a, b, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return c(e), d;
        },
      });
    }
    (a.migrateVersion = "3.0.0"),
      (function () {
        var c =
            b.console &&
            b.console.log &&
            function () {
              b.console.log.apply(b.console, arguments);
            },
          d = /^[12]\./;
        c &&
          ((a && !d.test(a.fn.jquery)) ||
            c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
          a.migrateWarnings &&
            c("JQMIGRATE: Migrate plugin loaded multiple times"),
          c(
            "JQMIGRATE: Migrate is installed" +
              (a.migrateMute ? "" : " with logging active") +
              ", version " +
              a.migrateVersion
          ));
      })();
    var e = {};
    (a.migrateWarnings = []),
      void 0 === a.migrateTrace && (a.migrateTrace = !0),
      (a.migrateReset = function () {
        (e = {}), (a.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        c("jQuery is not compatible with Quirks Mode");
    var f = a.fn.init,
      g = a.isNumeric,
      h = a.find,
      i = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      j = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    (a.fn.init = function (a) {
      var b = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof a &&
          "#" === a &&
          (c("jQuery( '#' ) is not a valid selector"), (b[0] = [])),
        f.apply(this, b)
      );
    }),
      (a.fn.init.prototype = a.fn),
      (a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && i.test(a))
          try {
            document.querySelector(a);
          } catch (d) {
            a = a.replace(j, function (a, b, c, d) {
              return "[" + b + c + '"' + d + '"]';
            });
            try {
              document.querySelector(a),
                c("Attribute selector with '#' must be quoted: " + b[0]),
                (b[0] = a);
            } catch (e) {
              c("Attribute selector with '#' was not fixed: " + b[0]);
            }
          }
        return h.apply(this, b);
      });
    var k;
    for (k in h)
      Object.prototype.hasOwnProperty.call(h, k) && (a.find[k] = h[k]);
    (a.fn.size = function () {
      return (
        c("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
      );
    }),
      (a.parseJSON = function () {
        return (
          c("jQuery.parseJSON is deprecated; use JSON.parse"),
          JSON.parse.apply(null, arguments)
        );
      }),
      (a.isNumeric = function (b) {
        function d(b) {
          var c = b && b.toString();
          return !a.isArray(b) && c - parseFloat(c) + 1 >= 0;
        }
        var e = g(b),
          f = d(b);
        return (
          e !== f &&
            c("jQuery.isNumeric() should not be called on constructed objects"),
          f
        );
      }),
      d(
        a,
        "unique",
        a.uniqueSort,
        "jQuery.unique is deprecated, use jQuery.uniqueSort"
      ),
      d(
        a.expr,
        "filters",
        a.expr.pseudos,
        "jQuery.expr.filters is now jQuery.expr.pseudos"
      ),
      d(
        a.expr,
        ":",
        a.expr.pseudos,
        'jQuery.expr[":"] is now jQuery.expr.pseudos'
      );
    var l = a.ajax;
    a.ajax = function () {
      var a = l.apply(this, arguments);
      return (
        a.promise &&
          (d(a, "success", a.done, "jQXHR.success is deprecated and removed"),
          d(a, "error", a.fail, "jQXHR.error is deprecated and removed"),
          d(
            a,
            "complete",
            a.always,
            "jQXHR.complete is deprecated and removed"
          )),
        a
      );
    };
    var m = a.fn.removeAttr,
      n = a.fn.toggleClass,
      o = /\S+/g;
    (a.fn.removeAttr = function (b) {
      var d = this;
      return (
        a.each(b.match(o), function (b, e) {
          a.expr.match.bool.test(e) &&
            (c("jQuery.fn.removeAttr no longer sets boolean properties: " + e),
            d.prop(e, !1));
        }),
        m.apply(this, arguments)
      );
    }),
      (a.fn.toggleClass = function (b) {
        return void 0 !== b && "boolean" != typeof b
          ? n.apply(this, arguments)
          : (c("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var c = (this.getAttribute && this.getAttribute("class")) || "";
              c && a.data(this, "__className__", c),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    c || b === !1 ? "" : a.data(this, "__className__") || ""
                  );
            }));
      });
    var p = !1;
    a.swap &&
      a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d &&
          (a.cssHooks[c].get = function () {
            var a;
            return (p = !0), (a = d.apply(this, arguments)), (p = !1), a;
          });
      }),
      (a.swap = function (a, b, d, e) {
        var f,
          g,
          h = {};
        p || c("jQuery.swap() is undocumented and deprecated");
        for (g in b) (h[g] = a.style[g]), (a.style[g] = b[g]);
        f = d.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f;
      });
    var q = a.data;
    a.data = function (b, d, e) {
      var f;
      return d &&
        d !== a.camelCase(d) &&
        ((f = a.hasData(b) && q.call(this, b)), f && d in f)
        ? (c("jQuery.data() always sets/gets camelCased names: " + d),
          arguments.length > 2 && (f[d] = e),
          f[d])
        : q.apply(this, arguments);
    };
    var r = a.Tween.prototype.run;
    a.Tween.prototype.run = function (b) {
      a.easing[this.easing].length > 1 &&
        (c(
          'easing function "jQuery.easing.' +
            this.easing.toString() +
            '" should use only first argument'
        ),
        (a.easing[this.easing] = a.easing[this.easing].bind(
          a.easing,
          b,
          this.options.duration * b,
          0,
          1,
          this.options.duration
        ))),
        r.apply(this, arguments);
    };
    var s = a.fn.load,
      t = a.event.fix;
    (a.event.props = []),
      (a.event.fixHooks = {}),
      (a.event.fix = function (b) {
        var d,
          e = b.type,
          f = this.fixHooks[e],
          g = a.event.props;
        if (g.length)
          for (
            c("jQuery.event.props are deprecated and removed: " + g.join());
            g.length;

          )
            a.event.addProp(g.pop());
        if (
          f &&
          !f._migrated_ &&
          ((f._migrated_ = !0),
          c("jQuery.event.fixHooks are deprecated and removed: " + e),
          (g = f.props) && g.length)
        )
          for (; g.length; ) a.event.addProp(g.pop());
        return (d = t.call(this, b)), f && f.filter ? f.filter(d, b) : d;
      }),
      a.each(["load", "unload", "error"], function (b, d) {
        a.fn[d] = function () {
          var a = Array.prototype.slice.call(arguments, 0);
          return "load" === d && "string" == typeof a[0]
            ? s.apply(this, a)
            : (c("jQuery.fn." + d + "() is deprecated"),
              a.splice(0, 0, d),
              arguments.length
                ? this.on.apply(this, a)
                : (this.triggerHandler.apply(this, a), this));
        };
      }),
      a(function () {
        a(document).triggerHandler("ready");
      }),
      (a.event.special.ready = {
        setup: function () {
          this === document && c("'ready' event is deprecated");
        },
      }),
      a.fn.extend({
        bind: function (a, b, d) {
          return c("jQuery.fn.bind() is deprecated"), this.on(a, null, b, d);
        },
        unbind: function (a, b) {
          return c("jQuery.fn.unbind() is deprecated"), this.off(a, null, b);
        },
        delegate: function (a, b, d, e) {
          return c("jQuery.fn.delegate() is deprecated"), this.on(b, a, d, e);
        },
        undelegate: function (a, b, d) {
          return (
            c("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(a, "**")
              : this.off(b, a || "**", d)
          );
        },
      });
    var u = a.fn.offset;
    a.fn.offset = function () {
      var b,
        d = this[0],
        e = { top: 0, left: 0 };
      return d && d.nodeType
        ? ((b = (d.ownerDocument || document).documentElement),
          a.contains(b, d)
            ? u.apply(this, arguments)
            : (c(
                "jQuery.fn.offset() requires an element connected to a document"
              ),
              e))
        : (c("jQuery.fn.offset() requires a valid DOM element"), e);
    };
    var v = a.param;
    a.param = function (b, d) {
      var e = a.ajaxSettings && a.ajaxSettings.traditional;
      return (
        void 0 === d &&
          e &&
          (c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
          (d = e)),
        v.call(this, b, d)
      );
    };
    var w = a.fn.andSelf || a.fn.addBack;
    a.fn.andSelf = function () {
      return (
        c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
      );
    };
    var x = a.Deferred,
      y = [
        [
          "resolve",
          "done",
          a.Callbacks("once memory"),
          a.Callbacks("once memory"),
          "resolved",
        ],
        [
          "reject",
          "fail",
          a.Callbacks("once memory"),
          a.Callbacks("once memory"),
          "rejected",
        ],
        ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")],
      ];
    a.Deferred = function (b) {
      var d = x(),
        e = d.promise();
      return (
        (d.pipe = e.pipe = function () {
          var b = arguments;
          return (
            c("deferred.pipe() is deprecated"),
            a
              .Deferred(function (c) {
                a.each(y, function (f, g) {
                  var h = a.isFunction(b[f]) && b[f];
                  d[g[1]](function () {
                    var b = h && h.apply(this, arguments);
                    b && a.isFunction(b.promise)
                      ? b
                          .promise()
                          .done(c.resolve)
                          .fail(c.reject)
                          .progress(c.notify)
                      : c[g[0] + "With"](
                          this === e ? c.promise() : this,
                          h ? [b] : arguments
                        );
                  });
                }),
                  (b = null);
              })
              .promise()
          );
        }),
        b && b.call(d, d),
        d
      );
    };
  })(jQuery, window);
jQuery(document).ready(function ($) {
  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
      $("#header").addClass("header-fixed");
    } else {
      $(".back-to-top").fadeOut("slow");
      $("#header").removeClass("header-fixed");
    }
  });

  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
    $("#header").addClass("header-fixed");
  }

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // custom code
  var swiperMobile = new Swiper(".swiper-container.swiper-full-mobile", {
    slidesPerView: 1,
    spaceBetween: 20,
    slideToClickedSlide: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
    autoplay: {
      delay: 3000,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
});
jQuery(document).ready(function ($) {
  let darkMode = localStorage.getItem("darkMode");

  const darkModeToggle = document.querySelector("#dark-mode-toggle");

  const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("darkmode");
    // diff ids of diff sections rip no easy way to do it ;/
    // 2)Devices
    document.getElementById("devices").classList.remove("section-bg");
    document.getElementById("devices").classList.add("darkmode-section-bg");
    // 3)Contact
    document.getElementById("contact").classList.remove("section-bg");
    document.getElementById("contact").classList.add("darkmode-section-bg");
    // 4)footer
    document.getElementById("footer").classList.remove("section-bg");
    document.getElementById("footer").classList.add("darkmode-section-bg");
    //a)add darker box for elements changing color
    document.getElementById("contact").classList.add("darkmode-shadow");
    document.getElementById("footer").classList.add("darkmode-shadow");
    document.getElementById("tg").classList.remove("tele");
    document.getElementById("tg").classList.add("darkmode-tele");
    //b)different approach for all dark mode in device section
    let els = document.querySelectorAll(".device-bg");

    els.forEach(function (el) {
      el.classList.add("darkmode-device-bg");
      el.classList.remove("device-bg");
    });
    let els1 = document.querySelectorAll(".span-color");

    els1.forEach(function (el) {
      el.classList.add("darkmode-span-color");
      el.classList.remove("span-color");
    });
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("darkmode");
    // diff ids of diff sections rip no easy way to do it ;/
    // 2)Devices
    document.getElementById("devices").classList.remove("darkmode-section-bg");
    document.getElementById("devices").classList.add("section-bg");
    // 3)Contact
    document.getElementById("contact").classList.remove("darkmode-section-bg");
    document.getElementById("contact").classList.add("section-bg");
    // 4)footer
    document.getElementById("footer").classList.remove("darkmode-section-bg");
    document.getElementById("footer").classList.add("section-bg");
    //a)add darker box for elements changing color
    document.getElementById("contact").classList.remove("darkmode-shadow");
    document.getElementById("footer").classList.remove("darkmode-shadow");
    document.getElementById("tg").classList.remove("darkmode-tele");
    document.getElementById("tg").classList.add("tele");
    let els = document.querySelectorAll(".darkmode-device-bg");
    els.forEach(function (el) {
      el.classList.add("device-bg");
      el.classList.remove("darkmode-device-bg");
    });
    let els1 = document.querySelectorAll(".darkmode-span-color");

    els1.forEach(function (el) {
      el.classList.add("span-color");
      el.classList.remove("darkmode-span-color");
    });
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", null);
  };

  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  // When someone clicks the button
  darkModeToggle.addEventListener("click", () => {
    // get their darkMode setting
    darkMode = localStorage.getItem("darkMode");

    // if it not current enabled, enable it
    if (darkMode !== "enabled") {
      enableDarkMode();
      // if it has been enabled, turn it off
    } else {
      disableDarkMode();
    }
  });
  document.body.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
      enableDarkMode();
      localStorage.setItem("hasCodeRunBefore", true);
    }
  };
});
var input = document.getElementById("sb");
var entries = document.getElementsByClassName("device");

input.addEventListener(
  "input",
  function () {
    var val = input.value;
    for (var i = 0, l = entries.length; i < l; i++) {
      var entryText = entries[i].getElementsByTagName("h4")[0].innerHTML;
      if (entryText.toLowerCase().indexOf(val.toLowerCase()) != -1)
        entries[i].style.display = "block";
      else entries[i].style.display = "none";
    }
  },
  false
);
var gdindex = "https://master.dl.sourceforge.net/project/projectsakura/";
var updatedb = "https://raw.githubusercontent.com/ProjectSakura/OTA/11";
var today = new Date().toISOString().slice(0, 10);
var onPageLoad = function () {
  document.querySelectorAll("div[data-device]").forEach((el) => {
    var device = el.getAttribute("data-device");
    fetch(updatedb + "/" + device + ".json")
      .then((res) => res.json())
      .then((ret) => {
        var file = ret.response[0].filename;
        var dl = gdindex + device + "/" + file;
        el.getElementsByClassName("btn-download")[0].href = dl;
        var md5 = gdindex + device + "/md5/" + file + ".md5sum";
        el.getElementsByClassName("btn-md5")[0].href = md5;
      })
      .catch((err) => {
        console.error("failed to fetch " + device + " data");
      });
  });
};

window.addEventListener("load", onPageLoad);
/**
 * Swiper 5.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 8, 2020
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  "use strict";
  var e =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    t =
      "undefined" == typeof window
        ? {
            document: e,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    i = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s)
      if ("string" == typeof s) {
        var o,
          l,
          d = s.trim();
        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
          var h = "div";
          for (
            0 === d.indexOf("<li") && (h = "ul"),
              0 === d.indexOf("<tr") && (h = "tbody"),
              (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) || (h = "tr"),
              0 === d.indexOf("<tbody") && (h = "table"),
              0 === d.indexOf("<option") && (h = "select"),
              (l = e.createElement(h)).innerHTML = d,
              n = 0;
            n < l.childNodes.length;
            n += 1
          )
            r.push(l.childNodes[n]);
        } else
          for (
            o =
              a || "#" !== s[0] || s.match(/[ .<>:~]/)
                ? (a || e).querySelectorAll(s.trim())
                : [e.getElementById(s.trim().split("#")[1])],
              n = 0;
            n < o.length;
            n += 1
          )
            o[n] && r.push(o[n]);
      } else if (s.nodeType || s === t || s === e) r.push(s);
      else if (s.length > 0 && s[0].nodeType)
        for (n = 0; n < s.length; n += 1) r.push(s[n]);
    return new i(r);
  }
  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1)
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    return t;
  }
  (s.fn = i.prototype), (s.Class = i), (s.Dom7 = i);
  var r = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.add(t[i]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.remove(t[i]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.toggle(t[i]);
      return this;
    },
    attr: function (e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1)
        if (2 === i.length) this[s].setAttribute(e, t);
        else
          for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)
          (i = this[s]).dom7ElementDataStorage ||
            (i.dom7ElementDataStorage = {}),
            (i.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((i = this[0])) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
          return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        (i.webkitTransform = e), (i.transform = e);
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        (i.webkitTransitionDuration = e), (i.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
      var a = t[0],
        r = t[1],
        n = t[2],
        o = t[3];
      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), s(t).is(r))) n.apply(t, i);
          else
            for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
              s(a[o]).is(r) && n.apply(a[o], i);
        }
      }
      function d(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] &&
        ((a = (e = t)[0]), (n = e[1]), (o = e[2]), (r = void 0)),
        o || (o = !1);
      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (h = 0; h < p.length; h += 1) {
            var v = p[h];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
              u.dom7LiveListeners[v].push({ listener: n, proxyListener: l }),
              u.addEventListener(v, l, o);
          }
        else
          for (h = 0; h < p.length; h += 1) {
            var f = p[h];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
              u.dom7Listeners[f].push({ listener: n, proxyListener: d }),
              u.addEventListener(f, d, o);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
      var s = t[0],
        a = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] &&
        ((s = (e = t)[0]), (r = e[1]), (n = e[2]), (a = void 0)),
        n || (n = !1);
      for (var o = s.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
            c = void 0;
          if (
            (!a && p.dom7Listeners
              ? (c = p.dom7Listeners[d])
              : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
            c && c.length)
          )
            for (var u = c.length - 1; u >= 0; u -= 1) {
              var v = c[u];
              r && v.listener === r
                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                : r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r
                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                : r ||
                  (p.removeEventListener(d, v.proxyListener, n),
                  c.splice(u, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s];
      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
            h = void 0;
          try {
            h = new t.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (t) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), (h.detail = r);
          }
          (d.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          })),
            d.dispatchEvent(h),
            (d.dom7EventData = []),
            delete d.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (e) {
      var t,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function a(r) {
        if (r.target === this)
          for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }
      if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (this.length > 0) {
        var i = this[0],
          s = i.getBoundingClientRect(),
          a = e.body,
          r = i.clientTop || a.clientTop || 0,
          n = i.clientLeft || a.clientLeft || 0,
          o = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return { top: s.top + o - r, left: s.left + l - n };
      }
      return null;
    },
    css: function (e, i) {
      var s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (var a in e) this[s].style[a] = e[a];
          return this;
        }
        if (this[0])
          return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (a) {
      var r,
        n,
        o = this[0];
      if (!o || void 0 === a) return !1;
      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);
        for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
        return !1;
      }
      if (a === e) return o === e;
      if (a === t) return o === t;
      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
          if (r[n] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        s = this.length;
      return new i(
        e > s - 1 ? [] : e < 0 ? ((t = s + e) < 0 ? [] : [this[t]]) : [this[e]]
      );
    },
    append: function () {
      for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a];
      for (var r = 0; r < s.length; r += 1) {
        t = s[r];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            var o = e.createElement("div");
            for (o.innerHTML = t; o.firstChild; )
              this[n].appendChild(o.firstChild);
          } else if (t instanceof i)
            for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
          else this[n].appendChild(t);
      }
      return this;
    },
    prepend: function (t) {
      var s, a;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof t) {
          var r = e.createElement("div");
          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
        } else if (t instanceof i)
          for (a = 0; a < t.length; a += 1)
            this[s].insertBefore(t[a], this[s].childNodes[0]);
        else this[s].insertBefore(t, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e)
            ? new i([this[0].nextElementSibling])
            : new i([])
          : this[0].nextElementSibling
          ? new i([this[0].nextElementSibling])
          : new i([])
        : new i([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.nextElementSibling; ) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
      }
      return new i(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e
          ? t.previousElementSibling && s(t.previousElementSibling).is(e)
            ? new i([t.previousElementSibling])
            : new i([])
          : t.previousElementSibling
          ? new i([t.previousElementSibling])
          : new i([]);
      }
      return new i([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.previousElementSibling; ) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
      }
      return new i(t);
    },
    parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return s(a(t));
    },
    parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var r = this[i].parentNode; r; )
          e ? s(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
      return s(a(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new i([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], s = 0; s < this.length; s += 1)
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)
          t.push(a[r]);
      return new i(t);
    },
    children: function (e) {
      for (var t = [], r = 0; r < this.length; r += 1)
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
          e
            ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o])
            : 1 === n[o].nodeType && t.push(n[o]);
      return new i(a(t));
    },
    filter: function (e) {
      for (var t = [], s = 0; s < this.length; s += 1)
        e.call(this[s], s, this[s]) && t.push(this[s]);
      return new i(t);
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i, a;
      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);
        for (a = 0; a < r.length; a += 1)
          (this[this.length] = r[a]), (this.length += 1);
      }
      return this;
    },
    styles: function () {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = s.fn[e] || r[e];
  });
  var n = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, i) {
        var s, a, r;
        void 0 === i && (i = "x");
        var n = t.getComputedStyle(e, null);
        return (
          t.WebKitCSSMatrix
            ? ((a = n.transform || n.webkitTransform).split(",").length > 6 &&
                (a = a
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new t.WebKitCSSMatrix("none" === a ? "" : a)))
            : (s = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === i &&
            (a = t.WebKitCSSMatrix
              ? r.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === i &&
            (a = t.WebKitCSSMatrix
              ? r.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          a || 0
        );
      },
      parseUrlQuery: function (e) {
        var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
        if ("string" == typeof o && o.length)
          for (
            r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              i = 0;
            i < r;
            i += 1
          )
            (a = s[i].replace(/#\S+/g, "").split("=")),
              (n[decodeURIComponent(a[0])] =
                void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "");
        return n;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (null != a)
            for (
              var r = Object.keys(Object(a)), o = 0, l = r.length;
              o < l;
              o += 1
            ) {
              var d = r[o],
                h = Object.getOwnPropertyDescriptor(a, d);
              void 0 !== h &&
                h.enumerable &&
                (n.isObject(i[d]) && n.isObject(a[d])
                  ? n.extend(i[d], a[d])
                  : !n.isObject(i[d]) && n.isObject(a[d])
                  ? ((i[d] = {}), n.extend(i[d], a[d]))
                  : (i[d] = a[d]));
            }
        }
        return i;
      },
    },
    o = {
      touch:
        (t.Modernizr && !0 === t.Modernizr.touch) ||
        !!(
          t.navigator.maxTouchPoints > 0 ||
          "ontouchstart" in t ||
          (t.DocumentTouch && e instanceof t.DocumentTouch)
        ),
      pointerEvents:
        !!t.PointerEvent &&
        "maxTouchPoints" in t.navigator &&
        t.navigator.maxTouchPoints > 0,
      observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
      passiveListener: (function () {
        var e = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          t.addEventListener("testPassiveListener", null, i);
        } catch (e) {}
        return e;
      })(),
      gestures: "ongesturestart" in t,
    },
    l = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    d = { components: { configurable: !0 } };
  (l.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (e) {
        s.eventsListeners[e] || (s.eventsListeners[e] = []),
          s.eventsListeners[e][a](t);
      }),
      s
    );
  }),
    (l.prototype.once = function (e, t, i) {
      var s = this;
      if ("function" != typeof t) return s;
      function a() {
        for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
        s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
      }
      return (a.f7proxy = t), s.on(e, a, i);
    }),
    (l.prototype.off = function (e, t) {
      var i = this;
      return i.eventsListeners
        ? (e.split(" ").forEach(function (e) {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].length &&
                i.eventsListeners[e].forEach(function (s, a) {
                  (s === t || (s.f7proxy && s.f7proxy === t)) &&
                    i.eventsListeners[e].splice(a, 1);
                });
          }),
          i)
        : i;
    }),
    (l.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        s,
        a,
        r = this;
      if (!r.eventsListeners) return r;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r))
        : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r));
      var n = Array.isArray(i) ? i : i.split(" ");
      return (
        n.forEach(function (e) {
          if (r.eventsListeners && r.eventsListeners[e]) {
            var t = [];
            r.eventsListeners[e].forEach(function (e) {
              t.push(e);
            }),
              t.forEach(function (e) {
                e.apply(a, s);
              });
          }
        }),
        r
      );
    }),
    (l.prototype.useModulesParams = function (e) {
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && n.extend(e, s.params);
        });
    }),
    (l.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
            a = e[i] || {};
          s.instance &&
            Object.keys(s.instance).forEach(function (e) {
              var i = s.instance[e];
              t[e] = "function" == typeof i ? i.bind(t) : i;
            }),
            s.on &&
              t.on &&
              Object.keys(s.on).forEach(function (e) {
                t.on(e, s.on[e]);
              }),
            s.create && s.create.bind(t)(a);
        });
    }),
    (d.components.set = function (e) {
      this.use && this.use(e);
    }),
    (l.installModule = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; )
        t[i] = arguments[i + 1];
      var s = this;
      s.prototype.modules || (s.prototype.modules = {});
      var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
      return (
        (s.prototype.modules[a] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            s[t] = e.static[t];
          }),
        e.install && e.install.apply(s, t),
        s
      );
    }),
    (l.use = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; )
        t[i] = arguments[i + 1];
      var s = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return s.installModule(e);
          }),
          s)
        : s.installModule.apply(s, [e].concat(t));
    }),
    Object.defineProperties(l, d);
  var h = {
    updateSize: function () {
      var e,
        t,
        i = this.$el;
      (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
        (t =
          void 0 !== this.params.height
            ? this.params.height
            : i[0].clientHeight),
        (0 === e && this.isHorizontal()) ||
          (0 === t && this.isVertical()) ||
          ((e =
            e -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (t =
            t -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          n.extend(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t,
          }));
    },
    updateSlides: function () {
      var e = this.params,
        i = this.$wrapperEl,
        s = this.size,
        a = this.rtlTranslate,
        r = this.wrongRTL,
        o = this.virtual && e.virtual.enabled,
        l = o ? this.virtual.slides.length : this.slides.length,
        d = i.children("." + this.params.slideClass),
        h = o ? this.virtual.slides.length : d.length,
        p = [],
        c = [],
        u = [];
      function v(t) {
        return !e.cssMode || t !== d.length - 1;
      }
      var f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
        b = this.snapGrid.length,
        w = e.spaceBetween,
        y = -f,
        x = 0,
        T = 0;
      if (void 0 !== s) {
        var E, S;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * s),
          (this.virtualSize = -w),
          a
            ? d.css({ marginLeft: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "" }),
          e.slidesPerColumn > 1 &&
            ((E =
              Math.floor(h / e.slidesPerColumn) ===
              h / this.params.slidesPerColumn
                ? h
                : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn),
            "auto" !== e.slidesPerView &&
              "row" === e.slidesPerColumnFill &&
              (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
        for (
          var C,
            M = e.slidesPerColumn,
            P = E / M,
            z = Math.floor(h / e.slidesPerColumn),
            k = 0;
          k < h;
          k += 1
        ) {
          S = 0;
          var $ = d.eq(k);
          if (e.slidesPerColumn > 1) {
            var L = void 0,
              I = void 0,
              D = void 0;
            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                G =
                  0 === O
                    ? e.slidesPerGroup
                    : Math.min(
                        Math.ceil((h - O * M * e.slidesPerGroup) / M),
                        e.slidesPerGroup
                      );
              (L =
                (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) +
                (D * E) / M),
                $.css({
                  "-webkit-box-ordinal-group": L,
                  "-moz-box-ordinal-group": L,
                  "-ms-flex-order": L,
                  "-webkit-order": L,
                  order: L,
                });
            } else
              "column" === e.slidesPerColumnFill
                ? ((D = k - (I = Math.floor(k / M)) * M),
                  (I > z || (I === z && D === M - 1)) &&
                    (D += 1) >= M &&
                    ((D = 0), (I += 1)))
                : (I = k - (D = Math.floor(k / P)) * P);
            $.css(
              "margin-" + (this.isHorizontal() ? "top" : "left"),
              0 !== D && e.spaceBetween && e.spaceBetween + "px"
            );
          }
          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var B = t.getComputedStyle($[0], null),
                H = $[0].style.transform,
                N = $[0].style.webkitTransform;
              if (
                (H && ($[0].style.transform = "none"),
                N && ($[0].style.webkitTransform = "none"),
                e.roundLengths)
              )
                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
              else if (this.isHorizontal()) {
                var X = parseFloat(B.getPropertyValue("width")),
                  V = parseFloat(B.getPropertyValue("padding-left")),
                  Y = parseFloat(B.getPropertyValue("padding-right")),
                  F = parseFloat(B.getPropertyValue("margin-left")),
                  W = parseFloat(B.getPropertyValue("margin-right")),
                  R = B.getPropertyValue("box-sizing");
                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(B.getPropertyValue("height")),
                  j = parseFloat(B.getPropertyValue("padding-top")),
                  K = parseFloat(B.getPropertyValue("padding-bottom")),
                  U = parseFloat(B.getPropertyValue("margin-top")),
                  _ = parseFloat(B.getPropertyValue("margin-bottom")),
                  Z = B.getPropertyValue("box-sizing");
                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }
              H && ($[0].style.transform = H),
                N && ($[0].style.webkitTransform = N),
                e.roundLengths && (S = Math.floor(S));
            } else
              (S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView),
                e.roundLengths && (S = Math.floor(S)),
                d[k] &&
                  (this.isHorizontal()
                    ? (d[k].style.width = S + "px")
                    : (d[k].style.height = S + "px"));
            d[k] && (d[k].swiperSlideSize = S),
              u.push(S),
              e.centeredSlides
                ? ((y = y + S / 2 + x / 2 + w),
                  0 === x && 0 !== k && (y = y - s / 2 - w),
                  0 === k && (y = y - s / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  e.roundLengths && (y = Math.floor(y)),
                  T % e.slidesPerGroup == 0 && p.push(y),
                  c.push(y))
                : (e.roundLengths && (y = Math.floor(y)),
                  (T - Math.min(this.params.slidesPerGroupSkip, T)) %
                    this.params.slidesPerGroup ==
                    0 && p.push(y),
                  c.push(y),
                  (y = y + S + w)),
              (this.virtualSize += S + w),
              (x = S),
              (T += 1);
          }
        }
        if (
          ((this.virtualSize = Math.max(this.virtualSize, s) + m),
          a &&
            r &&
            ("slide" === e.effect || "coverflow" === e.effect) &&
            i.css({ width: this.virtualSize + e.spaceBetween + "px" }),
          e.setWrapperSize &&
            (this.isHorizontal()
              ? i.css({ width: this.virtualSize + e.spaceBetween + "px" })
              : i.css({ height: this.virtualSize + e.spaceBetween + "px" })),
          e.slidesPerColumn > 1 &&
            ((this.virtualSize = (S + e.spaceBetween) * E),
            (this.virtualSize =
              Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
            this.isHorizontal()
              ? i.css({ width: this.virtualSize + e.spaceBetween + "px" })
              : i.css({ height: this.virtualSize + e.spaceBetween + "px" }),
            e.centeredSlides))
        ) {
          C = [];
          for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];
            e.roundLengths && (J = Math.floor(J)),
              p[Q] < this.virtualSize + p[0] && C.push(J);
          }
          p = C;
        }
        if (!e.centeredSlides) {
          C = [];
          for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];
            e.roundLengths && (te = Math.floor(te)),
              p[ee] <= this.virtualSize - s && C.push(te);
          }
          (p = C),
            Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) >
              1 && p.push(this.virtualSize - s);
        }
        if (
          (0 === p.length && (p = [0]),
          0 !== e.spaceBetween &&
            (this.isHorizontal()
              ? a
                ? d.filter(v).css({ marginLeft: w + "px" })
                : d.filter(v).css({ marginRight: w + "px" })
              : d.filter(v).css({ marginBottom: w + "px" })),
          e.centeredSlides && e.centeredSlidesBounds)
        ) {
          var ie = 0;
          u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });
          var se = (ie -= e.spaceBetween) - s;
          p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }
        if (e.centerInsufficientSlides) {
          var ae = 0;
          if (
            (u.forEach(function (t) {
              ae += t + (e.spaceBetween ? e.spaceBetween : 0);
            }),
            (ae -= e.spaceBetween) < s)
          ) {
            var re = (s - ae) / 2;
            p.forEach(function (e, t) {
              p[t] = e - re;
            }),
              c.forEach(function (e, t) {
                c[t] = e + re;
              });
          }
        }
        n.extend(this, {
          slides: d,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u,
        }),
          h !== l && this.emit("slidesLengthChange"),
          p.length !== g &&
            (this.params.watchOverflow && this.checkOverflow(),
            this.emit("snapGridLengthChange")),
          c.length !== b && this.emit("slidesGridLengthChange"),
          (e.watchSlidesProgress || e.watchSlidesVisibility) &&
            this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        i = [],
        s = 0;
      if (
        ("number" == typeof e
          ? this.setTransition(e)
          : !0 === e && this.setTransition(this.params.speed),
        "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
      )
        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
          var a = this.activeIndex + t;
          if (a > this.slides.length) break;
          i.push(this.slides.eq(a)[0]);
        }
      else i.push(this.slides.eq(this.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }
      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this.params,
        i = this.slides,
        a = this.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var r = -e;
        a && (r = e),
          i.removeClass(t.slideVisibleClass),
          (this.visibleSlidesIndexes = []),
          (this.visibleSlides = []);
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l =
              (r +
                (t.centeredSlides ? this.minTranslate() : 0) -
                o.swiperSlideOffset) /
              (o.swiperSlideSize + t.spaceBetween);
          if (t.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              h = d + this.slidesSizesGrid[n];
            ((d >= 0 && d < this.size - 1) ||
              (h > 1 && h <= this.size) ||
              (d <= 0 && h >= this.size)) &&
              (this.visibleSlides.push(o),
              this.visibleSlidesIndexes.push(n),
              i.eq(n).addClass(t.slideVisibleClass));
          }
          o.progress = a ? -l : l;
        }
        this.visibleSlides = s(this.visibleSlides);
      }
    },
    updateProgress: function (e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;
        e = (this && this.translate && this.translate * t) || 0;
      }
      var i = this.params,
        s = this.maxTranslate() - this.minTranslate(),
        a = this.progress,
        r = this.isBeginning,
        o = this.isEnd,
        l = r,
        d = o;
      0 === s
        ? ((a = 0), (r = !0), (o = !0))
        : ((r = (a = (e - this.minTranslate()) / s) <= 0), (o = a >= 1)),
        n.extend(this, { progress: a, isBeginning: r, isEnd: o }),
        (i.watchSlidesProgress || i.watchSlidesVisibility) &&
          this.updateSlidesProgress(e),
        r && !l && this.emit("reachBeginning toEdge"),
        o && !d && this.emit("reachEnd toEdge"),
        ((l && !r) || (d && !o)) && this.emit("fromEdge"),
        this.emit("progress", a);
    },
    updateSlidesClasses: function () {
      var e,
        t = this.slides,
        i = this.params,
        s = this.$wrapperEl,
        a = this.activeIndex,
        r = this.realIndex,
        n = this.virtual && i.virtual.enabled;
      t.removeClass(
        i.slideActiveClass +
          " " +
          i.slideNextClass +
          " " +
          i.slidePrevClass +
          " " +
          i.slideDuplicateActiveClass +
          " " +
          i.slideDuplicateNextClass +
          " " +
          i.slideDuplicatePrevClass
      ),
        (e = n
          ? this.$wrapperEl.find(
              "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
            )
          : t.eq(a)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    r +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    r +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass));
      var o = e
        .nextAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e
        .prevAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (o.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    o.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    o.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass),
          l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        i = this.rtlTranslate ? this.translate : -this.translate,
        s = this.slidesGrid,
        a = this.snapGrid,
        r = this.params,
        o = this.activeIndex,
        l = this.realIndex,
        d = this.snapIndex,
        h = e;
      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1)
          void 0 !== s[p + 1]
            ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
              ? (h = p)
              : i >= s[p] && i < s[p + 1] && (h = p + 1)
            : i >= s[p] && (h = p);
        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }
      if (a.indexOf(i) >= 0) t = a.indexOf(i);
      else {
        var c = Math.min(r.slidesPerGroupSkip, h);
        t = c + Math.floor((h - c) / r.slidesPerGroup);
      }
      if ((t >= a.length && (t = a.length - 1), h !== o)) {
        var u = parseInt(
          this.slides.eq(h).attr("data-swiper-slide-index") || h,
          10
        );
        n.extend(this, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: h,
        }),
          this.emit("activeIndexChange"),
          this.emit("snapIndexChange"),
          l !== u && this.emit("realIndexChange"),
          (this.initialized || this.runCallbacksOnInit) &&
            this.emit("slideChange");
      } else t !== d && ((this.snapIndex = t), this.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this.params,
        i = s(e.target).closest("." + t.slideClass)[0],
        a = !1;
      if (i)
        for (var r = 0; r < this.slides.length; r += 1)
          this.slides[r] === i && (a = !0);
      if (!i || !a)
        return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
      (this.clickedSlide = i),
        this.virtual && this.params.virtual.enabled
          ? (this.clickedIndex = parseInt(
              s(i).attr("data-swiper-slide-index"),
              10
            ))
          : (this.clickedIndex = s(i).index()),
        t.slideToClickedSlide &&
          void 0 !== this.clickedIndex &&
          this.clickedIndex !== this.activeIndex &&
          this.slideToClickedSlide();
    },
  };
  var p = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        i = this.rtlTranslate,
        s = this.translate,
        a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      var r = n.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var i = this.rtlTranslate,
        s = this.params,
        a = this.$wrapperEl,
        r = this.wrapperEl,
        n = this.progress,
        o = 0,
        l = 0;
      this.isHorizontal() ? (o = i ? -e : e) : (l = e),
        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
        s.cssMode
          ? (r[
              this.isHorizontal() ? "scrollLeft" : "scrollTop"
            ] = this.isHorizontal() ? -o : -l)
          : s.virtualTranslate ||
            a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
        (this.previousTranslate = this.translate),
        (this.translate = this.isHorizontal() ? o : l);
      var d = this.maxTranslate() - this.minTranslate();
      (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
        this.updateProgress(e),
        this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, a) {
      var r;
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      var n = this,
        o = n.params,
        l = n.wrapperEl;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      var d,
        h = n.minTranslate(),
        p = n.maxTranslate();
      if (
        ((d = s && e > h ? h : s && e < p ? p : e),
        n.updateProgress(d),
        o.cssMode)
      ) {
        var c = n.isHorizontal();
        return (
          0 === t
            ? (l[c ? "scrollLeft" : "scrollTop"] = -d)
            : l.scrollTo
            ? l.scrollTo(
                (((r = {})[c ? "left" : "top"] = -d),
                (r.behavior = "smooth"),
                r)
              )
            : (l[c ? "scrollLeft" : "scrollTop"] = -d),
          !0
        );
      }
      return (
        0 === t
          ? (n.setTransition(0),
            n.setTranslate(d),
            i &&
              (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd")))
          : (n.setTransition(t),
            n.setTranslate(d),
            i &&
              (n.emit("beforeTransitionStart", t, a),
              n.emit("transitionStart")),
            n.animating ||
              ((n.animating = !0),
              n.onTranslateToWrapperTransitionEnd ||
                (n.onTranslateToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    i && n.emit("transitionEnd"));
                }),
              n.$wrapperEl[0].addEventListener(
                "transitionend",
                n.onTranslateToWrapperTransitionEnd
              ),
              n.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                n.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  var c = {
    setTransition: function (e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e),
        this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.params,
        a = this.previousIndex;
      if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();
        var r = t;
        if (
          (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
          this.emit("transitionStart"),
          e && i !== a)
        ) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"),
            "next" === r
              ? this.emit("slideNextTransitionStart")
              : this.emit("slidePrevTransitionStart");
        }
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.previousIndex,
        a = this.params;
      if (((this.animating = !1), !a.cssMode)) {
        this.setTransition(0);
        var r = t;
        if (
          (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
          this.emit("transitionEnd"),
          e && i !== s)
        ) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"),
            "next" === r
              ? this.emit("slideNextTransitionEnd")
              : this.emit("slidePrevTransitionEnd");
        }
      }
    },
  };
  var u = {
    slideTo: function (e, t, i, s) {
      var a;
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      var r = this,
        n = e;
      n < 0 && (n = 0);
      var o = r.params,
        l = r.snapGrid,
        d = r.slidesGrid,
        h = r.previousIndex,
        p = r.activeIndex,
        c = r.rtlTranslate,
        u = r.wrapperEl;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      var v = Math.min(r.params.slidesPerGroupSkip, n),
        f = v + Math.floor((n - v) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1),
        (p || o.initialSlide || 0) === (h || 0) &&
          i &&
          r.emit("beforeSlideChangeStart");
      var m,
        g = -l[f];
      if ((r.updateProgress(g), o.normalizeSlideIndex))
        for (var b = 0; b < d.length; b += 1)
          -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          g > r.translate &&
          g > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      if (
        ((m = n > p ? "next" : n < p ? "prev" : "reset"),
        (c && -g === r.translate) || (!c && g === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(g),
          "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)),
          !1
        );
      if (o.cssMode) {
        var w = r.isHorizontal();
        return (
          0 === t
            ? (u[w ? "scrollLeft" : "scrollTop"] = -g)
            : u.scrollTo
            ? u.scrollTo(
                (((a = {})[w ? "left" : "top"] = -g),
                (a.behavior = "smooth"),
                a)
              )
            : (u[w ? "scrollLeft" : "scrollTop"] = -g),
          !0
        );
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m))
          : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, m));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              ))),
        !0
      );
    },
    slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      var a = e;
      return (
        this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
      );
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
      }
      return this.slideTo(this.activeIndex + r, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.snapGrid,
        n = this.slidesGrid,
        o = this.rtlTranslate;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
      }
      function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var d,
        h = l(o ? this.translate : -this.translate),
        p = r.map(function (e) {
          return l(e);
        }),
        c =
          (n.map(function (e) {
            return l(e);
          }),
          r[p.indexOf(h)],
          r[p.indexOf(h) - 1]);
      return (
        void 0 === c &&
          s.cssMode &&
          r.forEach(function (e) {
            !c && h >= e && (c = e);
          }),
        void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
        this.slideTo(d, e, t, i)
      );
    },
    slideReset: function (e, t, i) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, i)
      );
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === s && (s = 0.5);
      var a = this.activeIndex,
        r = Math.min(this.params.slidesPerGroupSkip, a),
        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
        o = this.rtlTranslate ? this.translate : -this.translate;
      if (o >= this.snapGrid[n]) {
        var l = this.snapGrid[n];
        o - l > (this.snapGrid[n + 1] - l) * s &&
          (a += this.params.slidesPerGroup);
      } else {
        var d = this.snapGrid[n - 1];
        o - d <= (this.snapGrid[n] - d) * s &&
          (a -= this.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, this.slidesGrid.length - 1)),
        this.slideTo(a, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        i = t.params,
        a = t.$wrapperEl,
        r =
          "auto" === i.slidesPerView
            ? t.slidesPerViewDynamic()
            : i.slidesPerView,
        o = t.clickedIndex;
      if (i.loop) {
        if (t.animating) return;
        (e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          i.centeredSlides
            ? o < t.loopedSlides - r / 2 ||
              o > t.slides.length - t.loopedSlides + r / 2
              ? (t.loopFix(),
                (o = a
                  .children(
                    "." +
                      i.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      i.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                n.nextTick(function () {
                  t.slideTo(o);
                }))
              : t.slideTo(o)
            : o > t.slides.length - r
            ? (t.loopFix(),
              (o = a
                .children(
                  "." +
                    i.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    i.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              n.nextTick(function () {
                t.slideTo(o);
              }))
            : t.slideTo(o);
      } else t.slideTo(o);
    },
  };
  var v = {
    loopCreate: function () {
      var t = this,
        i = t.params,
        a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);
      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - (r.length % i.slidesPerGroup);
        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(
              i.slideClass + " " + i.slideBlankClass
            );
            a.append(l);
          }
          r = a.children("." + i.slideClass);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = r.length),
        (t.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (t.loopedSlides += i.loopAdditionalSlides),
        t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
        h = [];
      r.each(function (e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i),
          e < r.length && e >= r.length - t.loopedSlides && d.push(i),
          a.attr("data-swiper-slide-index", e);
      });
      for (var p = 0; p < h.length; p += 1)
        a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (var c = d.length - 1; c >= 0; c -= 1)
        a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      this.emit("beforeLoopFix");
      var e,
        t = this.activeIndex,
        i = this.slides,
        s = this.loopedSlides,
        a = this.allowSlidePrev,
        r = this.allowSlideNext,
        n = this.snapGrid,
        o = this.rtlTranslate;
      (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
      var l = -n[t] - this.getTranslate();
      if (t < s)
        (e = i.length - 3 * s + t),
          (e += s),
          this.slideTo(e, 0, !1, !0) &&
            0 !== l &&
            this.setTranslate((o ? -this.translate : this.translate) - l);
      else if (t >= i.length - s) {
        (e = -i.length + t + s),
          (e += s),
          this.slideTo(e, 0, !1, !0) &&
            0 !== l &&
            this.setTranslate((o ? -this.translate : this.translate) - l);
      }
      (this.allowSlidePrev = a),
        (this.allowSlideNext = r),
        this.emit("loopFix");
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        i = this.slides;
      e
        .children(
          "." +
            t.slideClass +
            "." +
            t.slideDuplicateClass +
            ",." +
            t.slideClass +
            "." +
            t.slideBlankClass
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  var f = {
    setGrabCursor: function (e) {
      if (
        !(
          o.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode
        )
      ) {
        var t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      }
    },
    unsetGrabCursor: function () {
      o.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        this.params.cssMode ||
        (this.el.style.cursor = "");
    },
  };
  var m,
    g,
    b,
    w,
    y,
    x,
    T,
    E,
    S,
    C,
    M,
    P,
    z,
    k,
    $,
    L = {
      appendSlide: function (e) {
        var t = this.$wrapperEl,
          i = this.params;
        if (
          (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
        )
          for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
        else t.append(e);
        i.loop && this.loopCreate(),
          (i.observer && o.observer) || this.update();
      },
      prependSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
          a = s + e.length;
        } else i.prepend(e);
        t.loop && this.loopCreate(),
          (t.observer && o.observer) || this.update(),
          this.slideTo(a, 0, !1);
      },
      addSlide: function (e, t) {
        var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
        s.loop &&
          ((a -= this.loopedSlides),
          this.loopDestroy(),
          (this.slides = i.children("." + s.slideClass)));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);
        else if (e >= r) this.appendSlide(t);
        else {
          for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
            var h = this.slides.eq(d);
            h.remove(), l.unshift(h);
          }
          if ("object" == typeof t && "length" in t) {
            for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
            n = a > e ? a + t.length : a;
          } else i.append(t);
          for (var c = 0; c < l.length; c += 1) i.append(l[c]);
          s.loop && this.loopCreate(),
            (s.observer && o.observer) || this.update(),
            s.loop
              ? this.slideTo(n + this.loopedSlides, 0, !1)
              : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop &&
          ((s -= this.loopedSlides),
          this.loopDestroy(),
          (this.slides = i.children("." + t.slideClass)));
        var a,
          r = s;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1)
            (a = e[n]),
              this.slides[a] && this.slides.eq(a).remove(),
              a < r && (r -= 1);
          r = Math.max(r, 0);
        } else
          (a = e),
            this.slides[a] && this.slides.eq(a).remove(),
            a < r && (r -= 1),
            (r = Math.max(r, 0));
        t.loop && this.loopCreate(),
          (t.observer && o.observer) || this.update(),
          t.loop
            ? this.slideTo(r + this.loopedSlides, 0, !1)
            : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    I =
      ((m = t.navigator.platform),
      (g = t.navigator.userAgent),
      (b = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!t.cordova && !t.phonegap),
        phonegap: !(!t.cordova && !t.phonegap),
        electron: !1,
      }),
      (w = t.screen.width),
      (y = t.screen.height),
      (x = g.match(/(Android);?[\s\/]+([\d.]+)?/)),
      (T = g.match(/(iPad).*OS\s([\d_]+)/)),
      (E = g.match(/(iPod)(.*OS\s([\d_]+))?/)),
      (S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
      (C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0),
      (M = g.indexOf("Edge/") >= 0),
      (P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0),
      (z = "Win32" === m),
      (k = g.toLowerCase().indexOf("electron") >= 0),
      ($ = "MacIntel" === m),
      !T &&
        $ &&
        o.touch &&
        ((1024 === w && 1366 === y) ||
          (834 === w && 1194 === y) ||
          (834 === w && 1112 === y) ||
          (768 === w && 1024 === y)) &&
        ((T = g.match(/(Version)\/([\d.]+)/)), ($ = !1)),
      (b.ie = C),
      (b.edge = M),
      (b.firefox = P),
      x &&
        !z &&
        ((b.os = "android"),
        (b.osVersion = x[2]),
        (b.android = !0),
        (b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0)),
      (T || S || E) && ((b.os = "ios"), (b.ios = !0)),
      S && !E && ((b.osVersion = S[2].replace(/_/g, ".")), (b.iphone = !0)),
      T && ((b.osVersion = T[2].replace(/_/g, ".")), (b.ipad = !0)),
      E &&
        ((b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null), (b.ipod = !0)),
      b.ios &&
        b.osVersion &&
        g.indexOf("Version/") >= 0 &&
        "10" === b.osVersion.split(".")[0] &&
        (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]),
      (b.webView =
        !(
          !(S || T || E) ||
          (!g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone)
        ) ||
        (t.matchMedia && t.matchMedia("(display-mode: standalone)").matches)),
      (b.webview = b.webView),
      (b.standalone = b.webView),
      (b.desktop = !(b.ios || b.android) || k),
      b.desktop &&
        ((b.electron = k),
        (b.macos = $),
        (b.windows = z),
        b.macos && (b.os = "macos"),
        b.windows && (b.os = "windows")),
      (b.pixelRatio = t.devicePixelRatio || 1),
      b);
  function D(i) {
    var a = this.touchEventsData,
      r = this.params,
      o = this.touches;
    if (!this.animating || !r.preventInteractionOnTransition) {
      var l = i;
      l.originalEvent && (l = l.originalEvent);
      var d = s(l.target);
      if (
        ("wrapper" !== r.touchEventsTarget ||
          d.closest(this.wrapperEl).length) &&
        ((a.isTouchEvent = "touchstart" === l.type),
        (a.isTouchEvent || !("which" in l) || 3 !== l.which) &&
          !(
            (!a.isTouchEvent && "button" in l && l.button > 0) ||
            (a.isTouched && a.isMoved)
          ))
      )
        if (
          r.noSwiping &&
          d.closest(
            r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass
          )[0]
        )
          this.allowClick = !0;
        else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
          (o.currentX =
            "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
            (o.currentY =
              "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
          var h = o.currentX,
            p = o.currentY,
            c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
          if (!c || !(h <= u || h >= t.screen.width - u)) {
            if (
              (n.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (o.startX = h),
              (o.startY = p),
              (a.touchStartTime = n.now()),
              (this.allowClick = !0),
              this.updateSize(),
              (this.swipeDirection = void 0),
              r.threshold > 0 && (a.allowThresholdMove = !1),
              "touchstart" !== l.type)
            ) {
              var v = !0;
              d.is(a.formElements) && (v = !1),
                e.activeElement &&
                  s(e.activeElement).is(a.formElements) &&
                  e.activeElement !== d[0] &&
                  e.activeElement.blur();
              var f = v && this.allowTouchMove && r.touchStartPreventDefault;
              (r.touchStartForcePreventDefault || f) && l.preventDefault();
            }
            this.emit("touchStart", l);
          }
        }
    }
  }
  function O(t) {
    var i = this.touchEventsData,
      a = this.params,
      r = this.touches,
      o = this.rtlTranslate,
      l = t;
    if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || "mousemove" !== l.type) {
        var d =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          h = "touchmove" === l.type ? d.pageX : l.pageX,
          p = "touchmove" === l.type ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = h), void (r.startY = p);
        if (!this.allowTouchMove)
          return (
            (this.allowClick = !1),
            void (
              i.isTouched &&
              (n.extend(r, { startX: h, startY: p, currentX: h, currentY: p }),
              (i.touchStartTime = n.now()))
            )
          );
        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
          if (this.isVertical()) {
            if (
              (p < r.startY && this.translate <= this.maxTranslate()) ||
              (p > r.startY && this.translate >= this.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (h < r.startX && this.translate <= this.maxTranslate()) ||
            (h > r.startX && this.translate >= this.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          e.activeElement &&
          l.target === e.activeElement &&
          s(l.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (this.allowClick = !1);
        if (
          (i.allowTouchCallbacks && this.emit("touchMove", l),
          !(l.targetTouches && l.targetTouches.length > 1))
        ) {
          (r.currentX = h), (r.currentY = p);
          var c = r.currentX - r.startX,
            u = r.currentY - r.startY;
          if (
            !(
              this.params.threshold &&
              Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold
            )
          ) {
            var v;
            if (void 0 === i.isScrolling)
              (this.isHorizontal() && r.currentY === r.startY) ||
              (this.isVertical() && r.currentX === r.startX)
                ? (i.isScrolling = !1)
                : c * c + u * u >= 25 &&
                  ((v = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                  (i.isScrolling = this.isHorizontal()
                    ? v > a.touchAngle
                    : 90 - v > a.touchAngle));
            if (
              (i.isScrolling && this.emit("touchMoveOpposite", l),
              void 0 === i.startMoving &&
                ((r.currentX === r.startX && r.currentY === r.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (this.allowClick = !1),
                a.cssMode || l.preventDefault(),
                a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
                i.isMoved ||
                  (a.loop && this.loopFix(),
                  (i.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating &&
                    this.$wrapperEl.trigger(
                      "webkitTransitionEnd transitionend"
                    ),
                  (i.allowMomentumBounce = !1),
                  !a.grabCursor ||
                    (!0 !== this.allowSlideNext &&
                      !0 !== this.allowSlidePrev) ||
                    this.setGrabCursor(!0),
                  this.emit("sliderFirstMove", l)),
                this.emit("sliderMove", l),
                (i.isMoved = !0);
              var f = this.isHorizontal() ? c : u;
              (r.diff = f),
                (f *= a.touchRatio),
                o && (f = -f),
                (this.swipeDirection = f > 0 ? "prev" : "next"),
                (i.currentTranslate = f + i.startTranslate);
              var m = !0,
                g = a.resistanceRatio;
              if (
                (a.touchReleaseOnEdges && (g = 0),
                f > 0 && i.currentTranslate > this.minTranslate()
                  ? ((m = !1),
                    a.resistance &&
                      (i.currentTranslate =
                        this.minTranslate() -
                        1 +
                        Math.pow(
                          -this.minTranslate() + i.startTranslate + f,
                          g
                        )))
                  : f < 0 &&
                    i.currentTranslate < this.maxTranslate() &&
                    ((m = !1),
                    a.resistance &&
                      (i.currentTranslate =
                        this.maxTranslate() +
                        1 -
                        Math.pow(
                          this.maxTranslate() - i.startTranslate - f,
                          g
                        ))),
                m && (l.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  "next" === this.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !this.allowSlidePrev &&
                  "prev" === this.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                a.threshold > 0)
              ) {
                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (r.diff = this.isHorizontal()
                      ? r.currentX - r.startX
                      : r.currentY - r.startY)
                  );
              }
              a.followFinger &&
                !a.cssMode &&
                ((a.freeMode ||
                  a.watchSlidesProgress ||
                  a.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                a.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: r[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                    time: n.now(),
                  })),
                this.updateProgress(i.currentTranslate),
                this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }
  function A(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      o = t.$wrapperEl,
      l = t.slidesGrid,
      d = t.snapGrid,
      h = e;
    if (
      (h.originalEvent && (h = h.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", h),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var p,
      c = n.now(),
      u = c - i.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 &&
          c - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", h)),
      (i.lastClickTime = n.now()),
      n.nextTick(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (p = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      !s.cssMode)
    )
      if (s.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < d.length
            ? t.slideTo(d.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var v = i.velocities.pop(),
              f = i.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time;
            (t.velocity = m / g),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          var b = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w;
          r && (y = -y);
          var x,
            T,
            E = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (y < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                (x = t.maxTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.maxTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (y > t.minTranslate())
            s.freeModeMomentumBounce
              ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                (x = t.minTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.minTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (s.freeModeSticky) {
            for (var C, M = 0; M < d.length; M += 1)
              if (d[M] > -y) {
                C = M;
                break;
              }
            y = -(y =
              Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) ||
              "next" === t.swipeDirection
                ? d[C]
                : d[C - 1]);
          }
          if (
            (T &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((b = r
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              var P = Math.abs((r ? -y : y) - t.translate),
                z = t.slidesSizesGrid[t.activeIndex];
              b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();
          s.freeModeMomentumBounce && E
            ? (t.updateProgress(x),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              o.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  t.setTranslate(x),
                  o.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
              }))
            : t.velocity
            ? (t.updateProgress(y),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                o.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(y),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();
        (!s.freeModeMomentum || u >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var k = 0, $ = t.slidesSizesGrid[0], L = 0;
          L < l.length;
          L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== l[L + I]
            ? p >= l[L] && p < l[L + I] && ((k = L), ($ = l[L + I] - l[L]))
            : p >= l[L] && ((k = L), ($ = l[l.length - 1] - l[l.length - 2]));
        }
        var D = (p - l[k]) / $,
          O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)),
            "prev" === t.swipeDirection &&
              (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl)
            ? h.target === t.navigation.nextEl
              ? t.slideTo(k + O)
              : t.slideTo(k)
            : ("next" === t.swipeDirection && t.slideTo(k + O),
              "prev" === t.swipeDirection && t.slideTo(k));
        }
      }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
        this.isEnd &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay &&
          this.autoplay.running &&
          this.autoplay.paused &&
          this.autoplay.run(),
        (this.allowSlidePrev = s),
        (this.allowSlideNext = i),
        this.params.watchOverflow &&
          a !== this.snapGrid &&
          this.checkOverflow();
    }
  }
  function B(e) {
    this.allowClick ||
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function H() {
    var e = this.wrapperEl;
    (this.previousTranslate = this.translate),
      (this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop),
      -0 === this.translate && (this.translate = 0),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
    var t = this.maxTranslate() - this.minTranslate();
    (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !==
      this.progress && this.updateProgress(this.translate),
      this.emit("setTranslate", this.translate, !1);
  }
  var N = !1;
  function X() {}
  var V = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    Y = {
      update: h,
      translate: p,
      transition: c,
      slide: u,
      loop: v,
      grabCursor: f,
      manipulation: L,
      events: {
        attachEvents: function () {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;
          (this.onTouchStart = D.bind(this)),
            (this.onTouchMove = O.bind(this)),
            (this.onTouchEnd = A.bind(this)),
            t.cssMode && (this.onScroll = H.bind(this)),
            (this.onClick = B.bind(this));
          var r = !!t.nested;
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, this.onTouchStart, !1),
              e.addEventListener(i.move, this.onTouchMove, r),
              e.addEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (o.touch) {
              var n = !(
                "touchstart" !== i.start ||
                !o.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, this.onTouchStart, n),
                s.addEventListener(
                  i.move,
                  this.onTouchMove,
                  o.passiveListener ? { passive: !1, capture: r } : r
                ),
                s.addEventListener(i.end, this.onTouchEnd, n),
                i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n),
                N || (e.addEventListener("touchstart", X), (N = !0));
            }
            ((t.simulateTouch && !I.ios && !I.android) ||
              (t.simulateTouch && !o.touch && I.ios)) &&
              (s.addEventListener("mousedown", this.onTouchStart, !1),
              e.addEventListener("mousemove", this.onTouchMove, r),
              e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.addEventListener("click", this.onClick, !0),
            t.cssMode && a.addEventListener("scroll", this.onScroll),
            t.updateOnWindowResize
              ? this.on(
                  I.ios || I.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  G,
                  !0
                )
              : this.on("observerUpdate", G, !0);
        },
        detachEvents: function () {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!t.nested;
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(i.start, this.onTouchStart, !1),
              e.removeEventListener(i.move, this.onTouchMove, r),
              e.removeEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (o.touch) {
              var n = !(
                "onTouchStart" !== i.start ||
                !o.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, this.onTouchStart, n),
                s.removeEventListener(i.move, this.onTouchMove, r),
                s.removeEventListener(i.end, this.onTouchEnd, n),
                i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
            }
            ((t.simulateTouch && !I.ios && !I.android) ||
              (t.simulateTouch && !o.touch && I.ios)) &&
              (s.removeEventListener("mousedown", this.onTouchStart, !1),
              e.removeEventListener("mousemove", this.onTouchMove, r),
              e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.removeEventListener("click", this.onClick, !0),
            t.cssMode && a.removeEventListener("scroll", this.onScroll),
            this.off(
              I.ios || I.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              G
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var s = this.params,
            a = this.$el,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var o = this.getBreakpoint(r);
            if (o && this.currentBreakpoint !== o) {
              var l = o in r ? r[o] : void 0;
              l &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = l[e];
                  void 0 !== t &&
                    (l[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var d = l || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p
                ? a.removeClass(
                    s.containerModifierClass +
                      "multirow " +
                      s.containerModifierClass +
                      "multirow-column"
                  )
                : !h &&
                  p &&
                  (a.addClass(s.containerModifierClass + "multirow"),
                  "column" === d.slidesPerColumnFill &&
                    a.addClass(s.containerModifierClass + "multirow-column"));
              var c = d.direction && d.direction !== s.direction,
                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
              c && t && this.changeDirection(),
                n.extend(this.params, d),
                n.extend(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = o),
                u &&
                  t &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(e - i + this.loopedSlides, 0, !1)),
                this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var i = !1,
              s = Object.keys(e).map(function (e) {
                if ("string" == typeof e && e.startsWith("@")) {
                  var i = parseFloat(e.substr(1));
                  return { value: t.innerHeight * i, point: e };
                }
                return { value: e, point: e };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                n = r.point;
              r.value <= t.innerWidth && (i = n);
            }
            return i || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            i =
              this.slides.length > 0 &&
              e.slidesOffsetBefore +
                e.spaceBetween * (this.slides.length - 1) +
                this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i
            ? (this.isLocked = i <= this.size)
            : (this.isLocked = 1 === this.snapGrid.length),
            (this.allowSlideNext = !this.isLocked),
            (this.allowSlidePrev = !this.isLocked),
            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
            t &&
              t !== this.isLocked &&
              ((this.isEnd = !1), this.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          a.push("initialized"),
            a.push(t.direction),
            t.freeMode && a.push("free-mode"),
            t.autoHeight && a.push("autoheight"),
            i && a.push("rtl"),
            t.slidesPerColumn > 1 &&
              (a.push("multirow"),
              "column" === t.slidesPerColumnFill && a.push("multirow-column")),
            I.android && a.push("android"),
            I.ios && a.push("ios"),
            t.cssMode && a.push("css-mode"),
            a.forEach(function (i) {
              e.push(t.containerModifierClass + i);
            }),
            s.addClass(e.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, i, s, a, r, n) {
          var o;
          function l() {
            n && n();
          }
          e.complete && r
            ? l()
            : i
            ? (((o = new t.Image()).onload = l),
              (o.onerror = l),
              a && (o.sizes = a),
              s && (o.srcset = s),
              i && (o.src = i))
            : l();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute("src"),
              s.srcset || s.getAttribute("srcset"),
              s.sizes || s.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    F = {},
    W = (function (e) {
      function t() {
        for (var i, a, r, l = [], d = arguments.length; d--; )
          l[d] = arguments[d];
        1 === l.length && l[0].constructor && l[0].constructor === Object
          ? (r = l[0])
          : ((a = (i = l)[0]), (r = i[1])),
          r || (r = {}),
          (r = n.extend({}, r)),
          a && !r.el && (r.el = a),
          e.call(this, r),
          Object.keys(Y).forEach(function (e) {
            Object.keys(Y[e]).forEach(function (i) {
              t.prototype[i] || (t.prototype[i] = Y[e][i]);
            });
          });
        var h = this;
        void 0 === h.modules && (h.modules = {}),
          Object.keys(h.modules).forEach(function (e) {
            var t = h.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s || null === s) return;
              if (!(i in r && "enabled" in s)) return;
              !0 === r[i] && (r[i] = { enabled: !0 }),
                "object" != typeof r[i] ||
                  "enabled" in r[i] ||
                  (r[i].enabled = !0),
                r[i] || (r[i] = { enabled: !1 });
            }
          });
        var p = n.extend({}, V);
        h.useModulesParams(p),
          (h.params = n.extend({}, p, F, r)),
          (h.originalParams = n.extend({}, h.params)),
          (h.passedParams = n.extend({}, r)),
          (h.$ = s);
        var c = s(h.params.el);
        if ((a = c[0])) {
          if (c.length > 1) {
            var u = [];
            return (
              c.each(function (e, i) {
                var s = n.extend({}, r, { el: i });
                u.push(new t(s));
              }),
              u
            );
          }
          var v, f, m;
          return (
            (a.swiper = h),
            c.data("swiper", h),
            a && a.shadowRoot && a.shadowRoot.querySelector
              ? ((v = s(
                  a.shadowRoot.querySelector("." + h.params.wrapperClass)
                )).children = function (e) {
                  return c.children(e);
                })
              : (v = c.children("." + h.params.wrapperClass)),
            n.extend(h, {
              $el: c,
              el: a,
              $wrapperEl: v,
              wrapperEl: v[0],
              classNames: [],
              slides: s(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === h.params.direction;
              },
              isVertical: function () {
                return "vertical" === h.params.direction;
              },
              rtl:
                "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
              rtlTranslate:
                "horizontal" === h.params.direction &&
                ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
              wrongRTL: "-webkit-box" === v.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: h.params.allowSlideNext,
              allowSlidePrev: h.params.allowSlidePrev,
              touchEvents:
                ((f = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (m = ["mousedown", "mousemove", "mouseup"]),
                o.pointerEvents &&
                  (m = ["pointerdown", "pointermove", "pointerup"]),
                (h.touchEventsTouch = {
                  start: f[0],
                  move: f[1],
                  end: f[2],
                  cancel: f[3],
                }),
                (h.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }),
                o.touch || !h.params.simulateTouch
                  ? h.touchEventsTouch
                  : h.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: n.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: h.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            h.useModules(),
            h.params.init && h.init(),
            h
          );
        }
      }
      e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t);
      var i = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (t.prototype.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (
              var n, o = t[a].swiperSlideSize, l = a + 1;
              l < t.length;
              l += 1
            )
              t[l] &&
                !n &&
                ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1)
              t[d] &&
                !n &&
                ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
          } else
            for (var h = a + 1; h < t.length; h += 1)
              i[h] - i[a] < s && (r += 1);
          return r;
        }),
        (t.prototype.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function s() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (t.prototype.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || ("horizontal" !== e && "vertical" !== e)
              ? this
              : (this.$el
                  .removeClass("" + this.params.containerModifierClass + i)
                  .addClass("" + this.params.containerModifierClass + e),
                (this.params.direction = e),
                this.slides.each(function (t, i) {
                  "vertical" === e
                    ? (i.style.width = "")
                    : (i.style.height = "");
                }),
                this.emit("changeDirection"),
                t && this.update(),
                this)
          );
        }),
        (t.prototype.init = function () {
          this.initialized ||
            (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(
                  this.params.initialSlide + this.loopedSlides,
                  0,
                  this.params.runCallbacksOnInit
                )
              : this.slideTo(
                  this.params.initialSlide,
                  0,
                  this.params.runCallbacksOnInit
                ),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit("init"));
        }),
        (t.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            a = i.$el,
            r = i.$wrapperEl,
            o = i.slides;
          return void 0 === i.params || i.destroyed
            ? null
            : (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                a.removeAttr("style"),
                r.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                i.$el.data("swiper", null),
                n.deleteProps(i)),
              (i.destroyed = !0),
              null);
        }),
        (t.extendDefaults = function (e) {
          n.extend(F, e);
        }),
        (i.extendedDefaults.get = function () {
          return F;
        }),
        (i.defaults.get = function () {
          return V;
        }),
        (i.Class.get = function () {
          return e;
        }),
        (i.$.get = function () {
          return s;
        }),
        Object.defineProperties(t, i),
        t
      );
    })(l),
    R = { name: "device", proto: { device: I }, static: { device: I } },
    q = { name: "support", proto: { support: o }, static: { support: o } },
    j = {
      isEdge: !!t.navigator.userAgent.match(/Edge/g),
      isSafari: (function () {
        var e = t.navigator.userAgent.toLowerCase();
        return (
          e.indexOf("safari") >= 0 &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      ),
    },
    K = { name: "browser", proto: { browser: j }, static: { browser: j } },
    U = {
      name: "resize",
      create: function () {
        var e = this;
        n.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          t.addEventListener("resize", this.resize.resizeHandler),
            t.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          t.removeEventListener("resize", this.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    _ = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function (e, i) {
        void 0 === i && (i = {});
        var s = this,
          a = new (0, _.func)(function (e) {
            if (1 !== e.length) {
              var i = function () {
                s.emit("observerUpdate", e[0]);
              };
              t.requestAnimationFrame
                ? t.requestAnimationFrame(i)
                : t.setTimeout(i, 0);
            } else s.emit("observerUpdate", e[0]);
          });
        a.observe(e, {
          attributes: void 0 === i.attributes || i.attributes,
          childList: void 0 === i.childList || i.childList,
          characterData: void 0 === i.characterData || i.characterData,
        }),
          s.observer.observers.push(a);
      },
      init: function () {
        if (o.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
              this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren,
          }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    Z = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        n.extend(this, {
          observer: {
            init: _.init.bind(this),
            attach: _.attach.bind(this),
            destroy: _.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    Q = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          o = t.params.virtual,
          l = o.addSlidesBefore,
          d = o.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;
        t.updateActiveIndex();
        var g,
          b,
          w,
          y = t.activeIndex || 0;
        (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((b = Math.floor(s / 2) + a + l), (w = Math.floor(s / 2) + a + d))
            : ((b = s + (a - 1) + l), (w = a + d));
        var x = Math.max((y || 0) - w, 0),
          T = Math.min((y || 0) + b, u.length - 1),
          E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
        function S() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (n.extend(t.virtual, {
            from: x,
            to: T,
            offset: E,
            slidesGrid: t.slidesGrid,
          }),
          p === x && c === T && !e)
        )
          return (
            t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: E,
              from: x,
              to: T,
              slides: (function () {
                for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void S()
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var P = p; P <= c; P += 1)
            (P < x || P > T) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    P +
                    '"]'
                )
                .remove();
        for (var z = 0; z < u.length; z += 1)
          z >= x &&
            z <= T &&
            (void 0 === c || e
              ? M.push(z)
              : (z > c && M.push(z), z < p && C.push(z)));
        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(f(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
          S();
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var a = i.renderSlide
          ? s(i.renderSlide.call(this, e, t))
          : s(
              '<div class="' +
                this.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          a.attr("data-swiper-slide-index") ||
            a.attr("data-swiper-slide-index", t),
          i.cache && (this.virtual.cache[t] = a),
          a
        );
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1)
            e[a] && this.virtual.slides.unshift(e[a]);
          (i = t + e.length), (s = e.length);
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
              (n[parseInt(e, 10) + s] = t);
          }),
            (this.virtual.cache = n);
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function (e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              this.virtual.slides.splice(e[i], 1),
                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                (t = Math.max(t, 0));
          else
            this.virtual.slides.splice(e, 1),
              this.params.virtual.cache && delete this.virtual.cache[e],
              e < t && (t -= 1),
              (t = Math.max(t, 0));
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        (this.virtual.slides = []),
          this.params.virtual.cache && (this.virtual.cache = {}),
          this.virtual.update(!0),
          this.slideTo(0, 0);
      },
    },
    J = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        n.extend(this, {
          virtual: {
            update: Q.update.bind(this),
            appendSlide: Q.appendSlide.bind(this),
            prependSlide: Q.prependSlide.bind(this),
            removeSlide: Q.removeSlide.bind(this),
            removeAllSlides: Q.removeAllSlides.bind(this),
            renderSlide: Q.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          if (this.params.virtual.enabled) {
            this.classNames.push(
              this.params.containerModifierClass + "virtual"
            );
            var e = { watchSlidesProgress: !0 };
            n.extend(this.params, e),
              n.extend(this.originalParams, e),
              this.params.initialSlide || this.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    ee = {
      handle: function (i) {
        var s = this.rtlTranslate,
          a = i;
        a.originalEvent && (a = a.originalEvent);
        var r = a.keyCode || a.charCode;
        if (
          !this.allowSlideNext &&
          ((this.isHorizontal() && 39 === r) ||
            (this.isVertical() && 40 === r) ||
            34 === r)
        )
          return !1;
        if (
          !this.allowSlidePrev &&
          ((this.isHorizontal() && 37 === r) ||
            (this.isVertical() && 38 === r) ||
            33 === r)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (e.activeElement &&
              e.activeElement.nodeName &&
              ("input" === e.activeElement.nodeName.toLowerCase() ||
                "textarea" === e.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            this.params.keyboard.onlyInViewport &&
            (33 === r ||
              34 === r ||
              37 === r ||
              39 === r ||
              38 === r ||
              40 === r)
          ) {
            var n = !1;
            if (
              this.$el.parents("." + this.params.slideClass).length > 0 &&
              0 === this.$el.parents("." + this.params.slideActiveClass).length
            )
              return;
            var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
            s && (d.left -= this.$el[0].scrollLeft);
            for (
              var h = [
                  [d.left, d.top],
                  [d.left + this.width, d.top],
                  [d.left, d.top + this.height],
                  [d.left + this.width, d.top + this.height],
                ],
                p = 0;
              p < h.length;
              p += 1
            ) {
              var c = h[p];
              c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
            }
            if (!n) return;
          }
          this.isHorizontal()
            ? ((33 !== r && 34 !== r && 37 !== r && 39 !== r) ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((34 !== r && 39 !== r) || s) &&
                ((33 !== r && 37 !== r) || !s)) ||
                this.slideNext(),
              (((33 !== r && 37 !== r) || s) &&
                ((34 !== r && 39 !== r) || !s)) ||
                this.slidePrev())
            : ((33 !== r && 34 !== r && 38 !== r && 40 !== r) ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (34 !== r && 40 !== r) || this.slideNext(),
              (33 !== r && 38 !== r) || this.slidePrev()),
            this.emit("keyPress", r);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (s(e).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (s(e).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    te = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        n.extend(this, {
          keyboard: {
            enabled: !1,
            enable: ee.enable.bind(this),
            disable: ee.disable.bind(this),
            handle: ee.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var ie = {
      lastScrollTime: n.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return t.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var t = "onwheel" in e;
              if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"),
                  (t = "function" == typeof i.onwheel);
              }
              return (
                !t &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                t
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (a = 10 * i),
          "deltaY" in e && (a = e.deltaY),
          "deltaX" in e && (s = e.deltaX),
          e.shiftKey && !s && ((s = a), (a = 0)),
          (s || a) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((s *= 40), (a *= 40))
              : ((s *= 800), (a *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          a && !i && (i = a < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: a }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          i = this,
          a = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var r = i.$el;
        if (
          ("container" !== i.params.mousewheel.eventsTarged &&
            (r = s(i.params.mousewheel.eventsTarged)),
          !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        var o = 0,
          l = i.rtlTranslate ? -1 : 1,
          d = ie.normalize(t);
        if (a.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
            o = d.pixelX * l;
          } else {
            if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
            o = d.pixelY;
          }
        else
          o =
            Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
        if (0 === o) return !0;
        if ((a.invert && (o = -o), i.params.freeMode)) {
          var h = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
            },
            p = i.mousewheel.lastEventBeforeSnap,
            c =
              p &&
              h.time < p.time + 500 &&
              h.delta <= p.delta &&
              h.direction === p.direction;
          if (!c) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            var u = i.getTranslate() + o * a.sensitivity,
              v = i.isBeginning,
              f = i.isEnd;
            if (
              (u >= i.minTranslate() && (u = i.minTranslate()),
              u <= i.maxTranslate() && (u = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(u),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!v && i.isBeginning) || (!f && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              var m = i.mousewheel.recentWheelEvents;
              m.length >= 15 && m.shift();
              var g = m.length ? m[m.length - 1] : void 0,
                b = m[0];
              if (
                (m.push(h),
                g && (h.delta > g.delta || h.direction !== g.direction))
              )
                m.splice(0);
              else if (
                m.length >= 15 &&
                h.time - b.time < 500 &&
                b.delta - h.delta >= 1 &&
                h.delta <= 6
              ) {
                var w = o > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = h),
                  m.splice(0),
                  (i.mousewheel.timeout = n.nextTick(function () {
                    i.slideToClosest(i.params.speed, !0, void 0, w);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = n.nextTick(function () {
                  (i.mousewheel.lastEventBeforeSnap = h),
                    m.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (c || i.emit("scroll", t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              u === i.minTranslate() || u === i.maxTranslate())
            )
              return !0;
          }
        } else {
          var y = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: e,
            },
            x = i.mousewheel.recentWheelEvents;
          x.length >= 2 && x.shift();
          var T = x.length ? x[x.length - 1] : void 0;
          if (
            (x.push(y),
            T
              ? (y.direction !== T.direction || y.delta > T.delta) &&
                i.mousewheel.animateSlider(y)
              : i.mousewheel.animateSlider(y),
            i.mousewheel.releaseScroll(y))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider: function (e) {
        return (
          (e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60) ||
          (e.direction < 0
            ? (this.isEnd && !this.params.loop) ||
              this.animating ||
              (this.slideNext(), this.emit("scroll", e.raw))
            : (this.isBeginning && !this.params.loop) ||
              this.animating ||
              (this.slidePrev(), this.emit("scroll", e.raw)),
          (this.mousewheel.lastScrollTime = new t.Date().getTime()),
          !1)
        );
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = ie.event();
        if (this.params.cssMode)
          return (
            this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
          );
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged &&
            (t = s(this.params.mousewheel.eventsTarged)),
          t.on("mouseenter", this.mousewheel.handleMouseEnter),
          t.on("mouseleave", this.mousewheel.handleMouseLeave),
          t.on(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = ie.event();
        if (this.params.cssMode)
          return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged &&
            (t = s(this.params.mousewheel.eventsTarged)),
          t.off(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !1),
          !0
        );
      },
    },
    se = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (this.isBeginning
              ? s.addClass(e.disabledClass)
              : s.removeClass(e.disabledClass),
            s[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](e.lockClass)),
            i &&
              i.length > 0 &&
              (this.isEnd
                ? i.addClass(e.disabledClass)
                : i.removeClass(e.disabledClass),
              i[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = s(i.nextEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === this.$el.find(i.nextEl).length &&
              (e = this.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = s(i.prevEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === this.$el.find(i.prevEl).length &&
              (t = this.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", this.navigation.onNextClick),
          t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
          n.extend(this.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t &&
          t.length &&
          (t.off("click", this.navigation.onNextClick),
          t.removeClass(this.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass));
      },
    },
    ae = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (
          t.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var i,
            a =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop
              ? Math.ceil(
                  (a - 2 * this.loopedSlides) / this.params.slidesPerGroup
                )
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((i = Math.ceil(
                  (this.activeIndex - this.loopedSlides) /
                    this.params.slidesPerGroup
                )) >
                  a - 1 - 2 * this.loopedSlides &&
                  (i -= a - 2 * this.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 &&
                  "bullets" !== this.params.paginationType &&
                  (i = n + i))
              : (i =
                  void 0 !== this.snapIndex
                    ? this.snapIndex
                    : this.activeIndex || 0),
            "bullets" === t.type &&
              this.pagination.bullets &&
              this.pagination.bullets.length > 0)
          ) {
            var o,
              l,
              d,
              h = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = h
                  .eq(0)
                  [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  this.isHorizontal() ? "width" : "height",
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  ((this.pagination.dynamicBulletIndex +=
                    i - this.previousIndex),
                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex =
                        t.dynamicMainBullets - 1)
                    : this.pagination.dynamicBulletIndex < 0 &&
                      (this.pagination.dynamicBulletIndex = 0)),
                (o = i - this.pagination.dynamicBulletIndex),
                (d =
                  ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              h.removeClass(
                t.bulletActiveClass +
                  " " +
                  t.bulletActiveClass +
                  "-next " +
                  t.bulletActiveClass +
                  "-next-next " +
                  t.bulletActiveClass +
                  "-prev " +
                  t.bulletActiveClass +
                  "-prev-prev " +
                  t.bulletActiveClass +
                  "-main"
              ),
              r.length > 1)
            )
              h.each(function (e, a) {
                var r = s(a),
                  n = r.index();
                n === i && r.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (n >= o &&
                      n <= l &&
                      r.addClass(t.bulletActiveClass + "-main"),
                    n === o &&
                      r
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                    n === l &&
                      r
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next"));
              });
            else {
              var p = h.eq(i),
                c = p.index();
              if ((p.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                  h.eq(f).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop)
                  if (c >= h.length - t.dynamicMainBullets) {
                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                      h.eq(h.length - m).addClass(
                        t.bulletActiveClass + "-main"
                      );
                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(
                      t.bulletActiveClass + "-prev"
                    );
                  } else
                    u
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next");
                else
                  u
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(t.bulletActiveClass + "-next")
                      .next()
                      .addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b =
                  (this.pagination.bulletSize * g -
                    this.pagination.bulletSize) /
                    2 -
                  d * this.pagination.bulletSize,
                w = e ? "right" : "left";
              h.css(this.isHorizontal() ? w : "top", b + "px");
            }
          }
          if (
            ("fraction" === t.type &&
              (r
                .find("." + t.currentClass)
                .text(t.formatFractionCurrent(i + 1)),
              r.find("." + t.totalClass).text(t.formatFractionTotal(n))),
            "progressbar" === t.type)
          ) {
            var y;
            y = t.progressbarOpposite
              ? this.isHorizontal()
                ? "vertical"
                : "horizontal"
              : this.isHorizontal()
              ? "horizontal"
              : "vertical";
            var x = (i + 1) / n,
              T = 1,
              E = 1;
            "horizontal" === y ? (T = x) : (E = x),
              r
                .find("." + t.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")"
                )
                .transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom
            ? (r.html(t.renderCustom(this, i + 1, n)),
              this.emit("paginationRender", this, r[0]))
            : this.emit("paginationUpdate", this, r[0]),
            r[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (
              var a = this.params.loop
                  ? Math.ceil(
                      (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                    )
                  : this.snapGrid.length,
                r = 0;
              r < a;
              r += 1
            )
              e.renderBullet
                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                : (s +=
                    "<" +
                    e.bulletElement +
                    ' class="' +
                    e.bulletClass +
                    '"></' +
                    e.bulletElement +
                    ">");
            i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' +
                e.currentClass +
                '"></span> / <span class="' +
                e.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== e.type &&
              this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = s(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              1 === e.$el.find(t.el).length &&
              (i = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                var i = s(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            n.extend(e.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass);
        }
      },
    },
    re = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t
            ? (d = -d) > 0
              ? ((l = s - d), (d = 0))
              : -d + s > a && (l = a + d)
            : d < 0
            ? ((l = s + d), (d = 0))
            : d + s > a && (l = a - d),
            this.isHorizontal()
              ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                (r[0].style.width = l + "px"))
              : (r.transform("translate3d(0px, " + d + "px, 0)"),
                (r[0].style.height = l + "px")),
            o.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (n[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                (n[0].style.opacity = 0), n.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          (t[0].style.width = ""), (t[0].style.height = "");
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            o = r * (a / this.size);
          (s =
            "auto" === this.params.scrollbar.dragSize
              ? a * r
              : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (t[0].style.width = s + "px")
              : (t[0].style.height = s + "px"),
            (i[0].style.display = r >= 1 ? "none" : ""),
            this.params.scrollbar.hide && (i[0].style.opacity = 0),
            n.extend(e, {
              trackSize: a,
              divider: r,
              moveDivider: o,
              dragSize: s,
            }),
            e.$el[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            a.offset()[this.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : r / 2)) /
          (n - r)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(l),
          this.setTranslate(l),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        (this.scrollbar.isTouched = !0),
          (this.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  this.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          i.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css("opacity", 1),
          this.params.cssMode &&
            this.$wrapperEl.css("scroll-snap-type", "none"),
          this.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          a.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched &&
          ((this.scrollbar.isTouched = !1),
          this.params.cssMode &&
            (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          t.hide &&
            (clearTimeout(this.scrollbar.dragTimeout),
            (this.scrollbar.dragTimeout = n.nextTick(function () {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          this.emit("scrollbarDragEnd", e),
          t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o.touch
            ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
              r.addEventListener(i.move, this.scrollbar.onDragMove, n),
              r.addEventListener(i.end, this.scrollbar.onDragEnd, l))
            : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
              e.addEventListener(s.move, this.scrollbar.onDragMove, n),
              e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o.touch
            ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
              r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
              r.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
            : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
              e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
              e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
          this.params.uniqueNavElements &&
            "string" == typeof i.el &&
            a.length > 1 &&
            1 === t.find(i.el).length &&
            (a = t.find(i.el));
          var r = a.find("." + this.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = s(
              '<div class="' + this.params.scrollbar.dragClass + '"></div>'
            )),
            a.append(r)),
            n.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && e.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    ne = {
      setTransform: function (e, t) {
        var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");
        if (
          (o || l
            ? ((o = o || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((o = n), (l = "0"))
            : ((l = n), (o = "0")),
          (o =
            o.indexOf("%") >= 0
              ? parseInt(o, 10) * t * r + "%"
              : o * t * r + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != h)
        ) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          a[0].style.opacity = p;
        }
        if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
        else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          a.transform(
            "translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t, i) {
            e.parallax.setTransform(i, a);
          }),
          i.each(function (t, i) {
            var n = i.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (n += Math.ceil(t / 2) - a * (r.length - 1)),
              (n = Math.min(Math.max(n, -1), 1)),
              s(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t, i) {
                  e.parallax.setTransform(i, n);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t, i) {
            var a = s(i),
              r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (r = 0), a.transition(r);
          });
      },
    },
    oe = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !o.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (a.scaleStart = oe.getDistanceBetweenTouches(e));
        }
        (a.$slideEl && a.$slideEl.length) ||
        ((a.$slideEl = s(e.target).closest(".swiper-slide")),
        0 === a.$slideEl.length &&
          (a.$slideEl = this.slides.eq(this.activeIndex)),
        (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
        (a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass)),
        (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
        0 !== a.$imageWrapEl.length)
          ? (a.$imageEl.transition(0), (this.zoom.isScaling = !0))
          : (a.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (s.scaleMove = oe.getDistanceBetweenTouches(e));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (o.gestures
            ? (i.scale = e.scale * i.currentScale)
            : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio &&
            (i.scale =
              s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
          i.scale < t.minRatio &&
            (i.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
          s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !I.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
          s.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (I.android && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((this.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var r = s.width * t.scale,
            o = s.height * t.scale;
          if (!(r < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                this.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !this.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
              a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
              a.prevTime || (a.prevTime = Date.now()),
              (a.x =
                (s.touchesCurrent.x - a.prevPositionX) /
                (Date.now() - a.prevTime) /
                2),
              (a.y =
                (s.touchesCurrent.y - a.prevPositionY) /
                (Date.now() - a.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
              Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
              (a.prevPositionX = s.touchesCurrent.x),
              (a.prevPositionY = s.touchesCurrent.y),
              (a.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved)
            return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
            0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          (i.currentX = o), (i.currentY = d);
          var p = i.width * e.scale,
            c = i.height * e.scale;
          (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl
              .transition(h)
              .transform(
                "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl ||
          ((y.$slideEl = this.clickedSlide
            ? s(this.clickedSlide)
            : this.slides.eq(this.activeIndex)),
          (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
          (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === x.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = x.touchesStart.x), (i = x.touchesStart.y)),
          (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (b.currentScale =
            y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((m = y.$slideEl[0].offsetWidth),
              (g = y.$slideEl[0].offsetHeight),
              (a = y.$slideEl.offset().left + m / 2 - t),
              (r = y.$slideEl.offset().top + g / 2 - i),
              (l = y.$imageEl[0].offsetWidth),
              (d = y.$imageEl[0].offsetHeight),
              (h = l * b.scale),
              (p = d * b.scale),
              (v = -(c = Math.min(m / 2 - h / 2, 0))),
              (f = -(u = Math.min(g / 2 - p / 2, 0))),
              (n = a * b.scale) < c && (n = c),
              n > v && (n = v),
              (o = r * b.scale) < u && (o = u),
              o > f && (o = f))
            : ((n = 0), (o = 0)),
          y.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + n + "px, " + o + "px,0)"),
          y.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl ||
          ((i.$slideEl = this.clickedSlide
            ? s(this.clickedSlide)
            : this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((e.scale = 1),
            (e.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !(
              "touchstart" !== this.touchEvents.start ||
              !o.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !o.passiveListener || { passive: !1, capture: !0 };
          o.gestures
            ? (this.$wrapperEl.on(
                "gesturestart",
                ".swiper-slide",
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.on(
                "gesturechange",
                ".swiper-slide",
                e.onGestureChange,
                t
              ),
              this.$wrapperEl.on(
                "gestureend",
                ".swiper-slide",
                e.onGestureEnd,
                t
              ))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.on(
                this.touchEvents.start,
                ".swiper-slide",
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.on(
                this.touchEvents.move,
                ".swiper-slide",
                e.onGestureChange,
                i
              ),
              this.$wrapperEl.on(
                this.touchEvents.end,
                ".swiper-slide",
                e.onGestureEnd,
                t
              ),
              this.touchEvents.cancel &&
                this.$wrapperEl.on(
                  this.touchEvents.cancel,
                  ".swiper-slide",
                  e.onGestureEnd,
                  t
                )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              i
            );
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !(
              "touchstart" !== this.touchEvents.start ||
              !o.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !o.passiveListener || { passive: !1, capture: !0 };
          o.gestures
            ? (this.$wrapperEl.off(
                "gesturestart",
                ".swiper-slide",
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.off(
                "gesturechange",
                ".swiper-slide",
                e.onGestureChange,
                t
              ),
              this.$wrapperEl.off(
                "gestureend",
                ".swiper-slide",
                e.onGestureEnd,
                t
              ))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.off(
                this.touchEvents.start,
                ".swiper-slide",
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.off(
                this.touchEvents.move,
                ".swiper-slide",
                e.onGestureChange,
                i
              ),
              this.$wrapperEl.off(
                this.touchEvents.end,
                ".swiper-slide",
                e.onGestureEnd,
                t
              ),
              this.touchEvents.cancel &&
                this.$wrapperEl.off(
                  this.touchEvents.cancel,
                  ".swiper-slide",
                  e.onGestureEnd,
                  t
                )),
            this.$wrapperEl.off(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              i
            );
        }
      },
    },
    le = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          a = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var r =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    "." +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : i.slides.eq(e),
            n = r.find(
              "." +
                a.elementClass +
                ":not(." +
                a.loadedClass +
                "):not(." +
                a.loadingClass +
                ")"
            );
          !r.hasClass(a.elementClass) ||
            r.hasClass(a.loadedClass) ||
            r.hasClass(a.loadingClass) ||
            (n = n.add(r[0])),
            0 !== n.length &&
              n.each(function (e, n) {
                var o = s(n);
                o.addClass(a.loadingClass);
                var l = o.attr("data-background"),
                  d = o.attr("data-src"),
                  h = o.attr("data-srcset"),
                  p = o.attr("data-sizes");
                i.loadImage(o[0], d || l, h, p, !1, function () {
                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", 'url("' + l + '")'),
                          o.removeAttr("data-background"))
                        : (h &&
                            (o.attr("srcset", h), o.removeAttr("data-srcset")),
                          p && (o.attr("sizes", p), o.removeAttr("data-sizes")),
                          d && (o.attr("src", d), o.removeAttr("data-src"))),
                      o.addClass(a.loadedClass).removeClass(a.loadingClass),
                      r.find("." + a.preloaderClass).remove(),
                      i.params.loop && t)
                    ) {
                      var e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(i.params.slideDuplicateClass)) {
                        var s = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ")"
                        );
                        i.lazy.loadInSlide(s.index(), !1);
                      } else {
                        var n = i.$wrapperEl.children(
                          "." +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        i.lazy.loadInSlide(n.index(), !1);
                      }
                    }
                    i.emit("lazyImageReady", r[0], o[0]);
                  }
                }),
                  i.emit("lazyImageLoad", r[0], o[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (n) {
            if (
              t.children(
                "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function h(e) {
          return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each(function (t, i) {
            var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1)
          for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var c = o.loadPrevNextAmount,
                u = l,
                v = Math.min(r + u + Math.max(c, u), a.length),
                f = Math.max(r - Math.max(u, c), 0),
                m = r + l;
              m < v;
              m += 1
            )
              d(m) && e.lazy.loadInSlide(m);
            for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + i.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(h(b));
            var w = t.children("." + i.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(h(w));
          }
      },
    },
    de = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          o = function (e, t) {
            for (s = -1, i = e.length; i - s > 1; )
              e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
            return i;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        this.controller.spline ||
          (this.controller.spline = this.params.loop
            ? new de.LinearSpline(this.slidesGrid, e.slidesGrid)
            : new de.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control;
        function n(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by &&
            (a.controller.getInterpolateFunction(e),
            (s = -a.controller.spline.interpolate(-t))),
            (s && "container" !== a.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (a.maxTranslate() - a.minTranslate())),
              (s = (t - a.minTranslate()) * i + e.minTranslate())),
            a.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, a),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof W && n(r[o]);
        else r instanceof W && t !== r && n(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.controller.control;
        function r(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                n.nextTick(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                a &&
                  (t.params.loop &&
                    "slide" === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(a))
          for (i = 0; i < a.length; i += 1)
            a[i] !== t && a[i] instanceof W && r(a[i]);
        else a instanceof W && t !== a && r(a);
      },
    },
    he = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = s(e.target);
          this.navigation &&
            this.navigation.$nextEl &&
            i.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd
              ? this.a11y.notify(t.lastSlideMessage)
              : this.a11y.notify(t.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              i.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(t.firstSlideMessage)
                : this.a11y.notify(t.prevSlideMessage)),
            this.pagination &&
              i.is("." + this.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i &&
            i.length > 0 &&
            (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
            t &&
              t.length > 0 &&
              (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (i, a) {
            var r = s(a);
            e.a11y.makeElFocusable(r),
              e.a11y.addElRole(r, "button"),
              e.a11y.addElLabel(
                r,
                t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)
              );
          });
      },
      init: function () {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        this.navigation &&
          this.navigation.$nextEl &&
          (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e &&
            (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
          t &&
            (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.on(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion &&
          this.a11y.liveRegion.length > 0 &&
          this.a11y.liveRegion.remove(),
          this.navigation &&
            this.navigation.$nextEl &&
            (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e && e.off("keydown", this.a11y.onEnterKey),
          t && t.off("keydown", this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
    },
    pe = {
      init: function () {
        if (this.params.history) {
          if (!t.history || !t.history.pushState)
            return (
              (this.params.history.enabled = !1),
              void (this.params.hashNavigation.enabled = !0)
            );
          var e = this.history;
          (e.initialized = !0),
            (e.paths = pe.getPathValues()),
            (e.paths.key || e.paths.value) &&
              (e.scrollToSlide(
                0,
                e.paths.value,
                this.params.runCallbacksOnInit
              ),
              this.params.history.replaceState ||
                t.addEventListener(
                  "popstate",
                  this.history.setHistoryPopState
                ));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          t.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = pe.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = t.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          i = e.length;
        return { key: e[i - 2], value: e[i - 1] };
      },
      setHistory: function (e, i) {
        if (this.history.initialized && this.params.history.enabled) {
          var s = this.slides.eq(i),
            a = pe.slugify(s.attr("data-history"));
          t.location.pathname.includes(e) || (a = e + "/" + a);
          var r = t.history.state;
          (r && r.value === a) ||
            (this.params.history.replaceState
              ? t.history.replaceState({ value: a }, null, a)
              : t.history.pushState({ value: a }, null, a));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (
              pe.slugify(r.attr("data-history")) === t &&
              !r.hasClass(this.params.slideDuplicateClass)
            ) {
              var n = r.index();
              this.slideTo(n, e, i);
            }
          }
        else this.slideTo(0, e, i);
      },
    },
    ce = {
      onHashCange: function () {
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl
            .children("." + this.params.slideClass + '[data-hash="' + t + '"]')
            .index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function () {
        if (
          this.hashNavigation.initialized &&
          this.params.hashNavigation.enabled
        )
          if (
            this.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
            );
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            e.location.hash = s || "";
          }
      },
      init: function () {
        if (
          !(
            !this.params.hashNavigation.enabled ||
            (this.params.history && this.params.history.enabled)
          )
        ) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i)
            for (var a = 0, r = this.slides.length; a < r; a += 1) {
              var n = this.slides.eq(a);
              if (
                (n.attr("data-hash") || n.attr("data-history")) === i &&
                !n.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = n.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
              }
            }
          this.params.hashNavigation.watchState &&
            s(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          s(t).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    ue = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = n.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
              e.params.cssMode && e.autoplay.running && e.autoplay.run();
          }, i));
      },
      start: function () {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit("autoplayStart"),
          this.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        return (
          !!this.autoplay.running &&
          void 0 !== this.autoplay.timeout &&
          (this.autoplay.timeout &&
            (clearTimeout(this.autoplay.timeout),
            (this.autoplay.timeout = void 0)),
          (this.autoplay.running = !1),
          this.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        this.autoplay.running &&
          (this.autoplay.paused ||
            (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            (this.autoplay.paused = !0),
            0 !== e && this.params.autoplay.waitForTransition
              ? (this.$wrapperEl[0].addEventListener(
                  "transitionend",
                  this.autoplay.onTransitionEnd
                ),
                this.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  this.autoplay.onTransitionEnd
                ))
              : ((this.autoplay.paused = !1), this.autoplay.run())));
      },
    },
    ve = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || ((a = s), (s = 0));
          var r = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: r }).transform(
            "translate3d(" + s + "px, " + a + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              (a = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                s.trigger(e[i]);
            }
          });
        }
      },
    },
    fe = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow &&
          (h
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = s('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = t.find(".swiper-cube-shadow")).length &&
              ((e = s('<div class="swiper-cube-shadow"></div>')), t.append(e)));
        for (var u = 0; u < a.length; u += 1) {
          var v = a.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((w = 0), (x = 4 * -g * l))
            : (f - 2) % 4 == 0
            ? ((w = l + 4 * g * l), (x = l))
            : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            h || ((y = w), (w = 0));
          var T =
            "rotateX(" +
            (h ? 0 : -m) +
            "deg) rotateY(" +
            (h ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 &&
              b > -1 &&
              ((c = 90 * f + 90 * b), o && (c = 90 * -f - 90 * b)),
            v.transform(T),
            d.slideShadows)
          ) {
            var E = h
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = h
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = s(
                '<div class="swiper-slide-shadow-' +
                  (h ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = s(
                  '<div class="swiper-slide-shadow-' +
                    (h ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (h)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + d.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
              M =
                1.5 -
                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                  Math.cos((2 * C * Math.PI) / 360) / 2),
              P = d.shadowScale,
              z = d.shadowScale / M,
              k = d.shadowOffset;
            e.transform(
              "scale3d(" +
                P +
                ", 1, " +
                z +
                ") translate3d(0px, " +
                (n / 2 + k) +
                "px, " +
                -n / 2 / z +
                "px) rotateX(-90deg)"
            );
          }
        var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            $ +
            "px) rotateX(" +
            (this.isHorizontal() ? 0 : c) +
            "deg) rotateY(" +
            (this.isHorizontal() ? -c : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    me = {
      setTranslate: function () {
        for (
          var e = this.slides, t = this.rtlTranslate, i = 0;
          i < e.length;
          i += 1
        ) {
          var a = e.eq(i),
            r = a[0].progress;
          this.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(a[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;
          if (
            (this.isHorizontal()
              ? t && (n = -n)
              : ((d = l), (l = 0), (o = -n), (n = 0)),
            (a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length),
            this.params.flipEffect.slideShadows)
          ) {
            var h = this.isHorizontal()
                ? a.find(".swiper-slide-shadow-left")
                : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal()
                ? a.find(".swiper-slide-shadow-right")
                : a.find(".swiper-slide-shadow-bottom");
            0 === h.length &&
              ((h = s(
                '<div class="swiper-slide-shadow-' +
                  (this.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              a.append(h)),
              0 === p.length &&
                ((p = s(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                a.append(p)),
              h.length && (h[0].style.opacity = Math.max(-r, 0)),
              p.length && (p[0].style.opacity = Math.max(r, 0));
          }
          a.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                a.trigger(e[i]);
            }
          });
        }
      },
    },
    ge = {
      setTranslate: function () {
        for (
          var e = this.width,
            t = this.height,
            i = this.slides,
            a = this.$wrapperEl,
            r = this.slidesSizesGrid,
            n = this.params.coverflowEffect,
            l = this.isHorizontal(),
            d = this.translate,
            h = l ? e / 2 - d : t / 2 - d,
            p = l ? n.rotate : -n.rotate,
            c = n.depth,
            u = 0,
            v = i.length;
          u < v;
          u += 1
        ) {
          var f = i.eq(u),
            m = r[u],
            g = ((h - f[0].swiperSlideOffset - m / 2) / m) * n.modifier,
            b = l ? p * g : 0,
            w = l ? 0 : p * g,
            y = -c * Math.abs(g),
            x = l ? 0 : n.stretch * g,
            T = l ? n.stretch * g : 0;
          Math.abs(T) < 0.001 && (T = 0),
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(w) < 0.001 && (w = 0);
          var E =
            "translate3d(" +
            T +
            "px," +
            x +
            "px," +
            y +
            "px)  rotateX(" +
            w +
            "deg) rotateY(" +
            b +
            "deg)";
          if (
            (f.transform(E),
            (f[0].style.zIndex = 1 - Math.abs(Math.round(g))),
            n.slideShadows)
          ) {
            var S = l
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              C = l
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = s(
                '<div class="swiper-slide-shadow-' +
                  (l ? "left" : "top") +
                  '"></div>'
              )),
              f.append(S)),
              0 === C.length &&
                ((C = s(
                  '<div class="swiper-slide-shadow-' +
                    (l ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(C)),
              S.length && (S[0].style.opacity = g > 0 ? g : 0),
              C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
          }
        }
        (o.pointerEvents || o.prefixedPointerEvents) &&
          (a[0].style.perspectiveOrigin = h + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    be = {
      init: function () {
        var e = this.params.thumbs,
          t = this.constructor;
        e.swiper instanceof t
          ? ((this.thumbs.swiper = e.swiper),
            n.extend(this.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            n.extend(this.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : n.isObject(e.swiper) &&
            ((this.thumbs.swiper = new t(
              n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (this.thumbs.swiperCreated = !0)),
          this.thumbs.swiper.$el.addClass(
            this.params.thumbs.thumbsContainerClass
          ),
          this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (
            !(
              (i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
              null == t
            )
          ) {
            var a;
            if (
              ((a = e.params.loop
                ? parseInt(
                    s(e.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : t),
              this.params.loop)
            ) {
              var r = this.activeIndex;
              this.slides.eq(r).hasClass(this.params.slideDuplicateClass) &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                (r = this.activeIndex));
              var n = this.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + a + '"]')
                  .eq(0)
                  .index(),
                o = this.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + a + '"]')
                  .eq(0)
                  .index();
              a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }
            this.slideTo(a);
          }
        }
      },
      update: function (e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i =
            "auto" === t.params.slidesPerView
              ? t.slidesPerViewDynamic()
              : t.params.slidesPerView;
          if (this.realIndex !== t.realIndex) {
            var s,
              a = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(a).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (a = t.activeIndex));
              var r = t.slides
                  .eq(a)
                  .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index(),
                n = t.slides
                  .eq(a)
                  .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index();
              s =
                void 0 === r
                  ? n
                  : void 0 === n
                  ? r
                  : n - a == a - r
                  ? a
                  : n - a < a - r
                  ? n
                  : r;
            } else s = this.realIndex;
            t.visibleSlidesIndexes &&
              t.visibleSlidesIndexes.indexOf(s) < 0 &&
              (t.params.centeredSlides
                ? (s =
                    s > a
                      ? s - Math.floor(i / 2) + 1
                      : s + Math.floor(i / 2) - 1)
                : s > a && (s = s - i + 1),
              t.slideTo(s, e ? 0 : void 0));
          }
          var o = 1,
            l = this.params.thumbs.slideThumbActiveClass;
          if (
            (this.params.slidesPerView > 1 &&
              !this.params.centeredSlides &&
              (o = this.params.slidesPerView),
            this.params.thumbs.multipleActiveThumbs || (o = 1),
            (o = Math.floor(o)),
            t.slides.removeClass(l),
            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
          )
            for (var d = 0; d < o; d += 1)
              t.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (this.realIndex + d) + '"]'
                )
                .addClass(l);
          else
            for (var h = 0; h < o; h += 1)
              t.slides.eq(this.realIndex + h).addClass(l);
        }
      },
    },
    we = [
      R,
      q,
      K,
      U,
      Z,
      J,
      te,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          n.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: ie.enable.bind(this),
              disable: ie.disable.bind(this),
              handle: ie.handle.bind(this),
              handleMouseEnter: ie.handleMouseEnter.bind(this),
              handleMouseLeave: ie.handleMouseLeave.bind(this),
              animateSlider: ie.animateSlider.bind(this),
              releaseScroll: ie.releaseScroll.bind(this),
              lastScrollTime: n.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
            },
          });
        },
        on: {
          init: function () {
            !this.params.mousewheel.enabled &&
              this.params.cssMode &&
              this.mousewheel.disable(),
              this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.params.cssMode && this.mousewheel.enable(),
              this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          n.extend(this, {
            navigation: {
              init: se.init.bind(this),
              update: se.update.bind(this),
              destroy: se.destroy.bind(this),
              onNextClick: se.onNextClick.bind(this),
              onPrevClick: se.onPrevClick.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t,
              i = this.navigation,
              a = i.$nextEl,
              r = i.$prevEl;
            !this.params.navigation.hideOnClick ||
              s(e.target).is(r) ||
              s(e.target).is(a) ||
              (a
                ? (t = a.hasClass(this.params.navigation.hiddenClass))
                : r && (t = r.hasClass(this.params.navigation.hiddenClass)),
              !0 === t
                ? this.emit("navigationShow", this)
                : this.emit("navigationHide", this),
              a && a.toggleClass(this.params.navigation.hiddenClass),
              r && r.toggleClass(this.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          n.extend(this, {
            pagination: {
              init: ae.init.bind(this),
              render: ae.render.bind(this),
              update: ae.update.bind(this),
              destroy: ae.destroy.bind(this),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            this.params.pagination.el &&
              this.params.pagination.hideOnClick &&
              this.pagination.$el.length > 0 &&
              !s(e.target).hasClass(this.params.pagination.bulletClass) &&
              (!0 ===
              this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                ? this.emit("paginationShow", this)
                : this.emit("paginationHide", this),
              this.pagination.$el.toggleClass(
                this.params.pagination.hiddenClass
              ));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          n.extend(this, {
            scrollbar: {
              init: re.init.bind(this),
              destroy: re.destroy.bind(this),
              updateSize: re.updateSize.bind(this),
              setTranslate: re.setTranslate.bind(this),
              setTransition: re.setTransition.bind(this),
              enableDraggable: re.enableDraggable.bind(this),
              disableDraggable: re.disableDraggable.bind(this),
              setDragPosition: re.setDragPosition.bind(this),
              getPointerPosition: re.getPointerPosition.bind(this),
              onDragStart: re.onDragStart.bind(this),
              onDragMove: re.onDragMove.bind(this),
              onDragEnd: re.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          n.extend(this, {
            parallax: {
              setTransform: ne.setTransform.bind(this),
              setTranslate: ne.setTranslate.bind(this),
              setTransition: ne.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (i) {
              t[i] = oe[i].bind(e);
            }),
            n.extend(e, { zoom: t });
          var i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return i;
            },
            set: function (t) {
              if (i !== t) {
                var s = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, s, a);
              }
              i = t;
            },
          });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
          slideChange: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.params.cssMode &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          n.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: le.load.bind(this),
              loadInSlide: le.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            this.params.lazy.enabled &&
              (this.params.lazy.loadOnTransitionStart ||
                (!this.params.lazy.loadOnTransitionStart &&
                  !this.lazy.initialImageLoaded)) &&
              this.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
          slideChange: function () {
            this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          n.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: de.getInterpolateFunction.bind(this),
              setTranslate: de.setTranslate.bind(this),
              setTransition: de.setTransition.bind(this),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var e = this;
          n.extend(e, {
            a11y: {
              liveRegion: s(
                '<span class="' +
                  e.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(he).forEach(function (t) {
              e.a11y[t] = he[t].bind(e);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          n.extend(this, {
            history: {
              init: pe.init.bind(this),
              setHistory: pe.setHistory.bind(this),
              setHistoryPopState: pe.setHistoryPopState.bind(this),
              scrollToSlide: pe.scrollToSlide.bind(this),
              destroy: pe.destroy.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
          slideChange: function () {
            this.history.initialized &&
              this.params.cssMode &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          n.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: ce.init.bind(this),
              destroy: ce.destroy.bind(this),
              setHash: ce.setHash.bind(this),
              onHashCange: ce.onHashCange.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
          slideChange: function () {
            this.hashNavigation.initialized &&
              this.params.cssMode &&
              this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var e = this;
          n.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: ue.run.bind(e),
              start: ue.start.bind(e),
              stop: ue.stop.bind(e),
              pause: ue.pause.bind(e),
              onVisibilityChange: function () {
                "hidden" === document.visibilityState &&
                  e.autoplay.running &&
                  e.autoplay.pause(),
                  "visible" === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd: function (t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled &&
              (this.autoplay.start(),
              document.addEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          touchEnd: function () {
            this.params.cssMode &&
              this.autoplay.paused &&
              !this.params.autoplay.disableOnInteraction &&
              this.autoplay.run();
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop(),
              document.removeEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          n.extend(this, {
            fadeEffect: {
              setTranslate: ve.setTranslate.bind(this),
              setTransition: ve.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              n.extend(this.params, e), n.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          n.extend(this, {
            cubeEffect: {
              setTranslate: fe.setTranslate.bind(this),
              setTransition: fe.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              n.extend(this.params, e), n.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          n.extend(this, {
            flipEffect: {
              setTranslate: me.setTranslate.bind(this),
              setTransition: me.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              n.extend(this.params, e), n.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          n.extend(this, {
            coverflowEffect: {
              setTranslate: ge.setTranslate.bind(this),
              setTransition: ge.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            "coverflow" === this.params.effect &&
              (this.classNames.push(
                this.params.containerModifierClass + "coverflow"
              ),
              this.classNames.push(this.params.containerModifierClass + "3d"),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            multipleActiveThumbs: !0,
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          n.extend(this, {
            thumbs: {
              swiper: null,
              init: be.init.bind(this),
              update: be.update.bind(this),
              onThumbClick: be.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
  return (
    void 0 === W.use &&
      ((W.use = W.Class.use), (W.installModule = W.Class.installModule)),
    W.use(we),
    W
  );
});
//# sourceMappingURL=swiper.min.js.map;
/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e((t.bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  for (
    var o,
      s,
      a,
      l,
      c,
      h,
      f,
      u,
      d,
      p,
      g,
      m,
      _,
      v,
      E,
      y,
      b,
      T,
      C,
      w,
      I,
      A,
      D,
      S,
      O,
      N,
      k = (function (t) {
        var e = !1;
        function n(e) {
          var n = this,
            r = !1;
          return (
            t(this).one(i.TRANSITION_END, function () {
              r = !0;
            }),
            setTimeout(function () {
              r || i.triggerTransitionEnd(n);
            }, e),
            this
          );
        }
        var i = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (e) {
            var n,
              i = e.getAttribute("data-target");
            (i && "#" !== i) || (i = e.getAttribute("href") || ""),
              "#" === i.charAt(0) &&
                ((n = i),
                (i = n =
                  "function" == typeof t.escapeSelector
                    ? t.escapeSelector(n).substr(1)
                    : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
            try {
              return t(document).find(i).length > 0 ? i : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            t(n).trigger(e.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(e);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, n) {
            for (var r in n)
              if (Object.prototype.hasOwnProperty.call(n, r)) {
                var o = n[r],
                  s = e[r],
                  a =
                    s && i.isElement(s)
                      ? "element"
                      : ((l = s),
                        {}.toString
                          .call(l)
                          .match(/\s([a-zA-Z]+)/)[1]
                          .toLowerCase());
                if (!new RegExp(o).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ': Option "' +
                      r +
                      '" provided type "' +
                      a +
                      '" but expected type "' +
                      o +
                      '".'
                  );
              }
            var l;
          },
        };
        return (
          (e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (t.fn.emulateTransitionEnd = n),
          i.supportsTransitionEnd() &&
            (t.event.special[i.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            }),
          i
        );
      })((e = e && e.hasOwnProperty("default") ? e.default : e)),
      L =
        ((s = "alert"),
        (l = "." + (a = "bs.alert")),
        (c = (o = e).fn[s]),
        (h = {
          CLOSE: "close" + l,
          CLOSED: "closed" + l,
          CLICK_DATA_API: "click" + l + ".data-api",
        }),
        (f = "alert"),
        (u = "fade"),
        (d = "show"),
        (p = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.close = function (t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
            }),
            (e.dispose = function () {
              o.removeData(this._element, a), (this._element = null);
            }),
            (e._getRootElement = function (t) {
              var e = k.getSelectorFromElement(t),
                n = !1;
              return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
            }),
            (e._triggerCloseEvent = function (t) {
              var e = o.Event(h.CLOSE);
              return o(t).trigger(e), e;
            }),
            (e._removeElement = function (t) {
              var e = this;
              o(t).removeClass(d),
                k.supportsTransitionEnd() && o(t).hasClass(u)
                  ? o(t)
                      .one(k.TRANSITION_END, function (n) {
                        return e._destroyElement(t, n);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(t);
            }),
            (e._destroyElement = function (t) {
              o(t).detach().trigger(h.CLOSED).remove();
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = o(this),
                  i = n.data(a);
                i || ((i = new t(this)), n.data(a, i)),
                  "close" === e && i[e](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        o(document).on(
          h.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          p._handleDismiss(new p())
        ),
        (o.fn[s] = p._jQueryInterface),
        (o.fn[s].Constructor = p),
        (o.fn[s].noConflict = function () {
          return (o.fn[s] = c), p._jQueryInterface;
        }),
        p),
      P =
        ((m = "button"),
        (v = "." + (_ = "bs.button")),
        (E = ".data-api"),
        (y = (g = e).fn[m]),
        (b = "active"),
        (T = "btn"),
        (C = "focus"),
        (w = '[data-toggle^="button"]'),
        (I = '[data-toggle="buttons"]'),
        (A = "input"),
        (D = ".active"),
        (S = ".btn"),
        (O = {
          CLICK_DATA_API: "click" + v + E,
          FOCUS_BLUR_DATA_API: "focus" + v + E + " blur" + v + E,
        }),
        (N = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              var t = !0,
                e = !0,
                n = g(this._element).closest(I)[0];
              if (n) {
                var i = g(this._element).find(A)[0];
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && g(this._element).hasClass(b)) t = !1;
                    else {
                      var r = g(n).find(D)[0];
                      r && g(r).removeClass(b);
                    }
                  if (t) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !g(this._element).hasClass(b)),
                      g(i).trigger("change");
                  }
                  i.focus(), (e = !1);
                }
              }
              e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !g(this._element).hasClass(b)
                ),
                t && g(this._element).toggleClass(b);
            }),
            (e.dispose = function () {
              g.removeData(this._element, _), (this._element = null);
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = g(this).data(_);
                n || ((n = new t(this)), g(this).data(_, n)),
                  "toggle" === e && n[e]();
              });
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        g(document)
          .on(O.CLICK_DATA_API, w, function (t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(T) || (e = g(e).closest(S)),
              N._jQueryInterface.call(g(e), "toggle");
          })
          .on(O.FOCUS_BLUR_DATA_API, w, function (t) {
            var e = g(t.target).closest(S)[0];
            g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
          }),
        (g.fn[m] = N._jQueryInterface),
        (g.fn[m].Constructor = N),
        (g.fn[m].noConflict = function () {
          return (g.fn[m] = y), N._jQueryInterface;
        }),
        N),
      x = (function (t) {
        var e = "carousel",
          n = "bs.carousel",
          o = "." + n,
          s = t.fn[e],
          a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
          },
          l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
          },
          c = "next",
          h = "prev",
          f = "left",
          u = "right",
          d = {
            SLIDE: "slide" + o,
            SLID: "slid" + o,
            KEYDOWN: "keydown" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o,
            TOUCHEND: "touchend" + o,
            LOAD_DATA_API: "load" + o + ".data-api",
            CLICK_DATA_API: "click" + o + ".data-api",
          },
          p = "carousel",
          g = "active",
          m = "slide",
          _ = "carousel-item-right",
          v = "carousel-item-left",
          E = "carousel-item-next",
          y = "carousel-item-prev",
          b = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]',
          },
          T = (function () {
            function s(e, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = t(e)[0]),
                (this._indicatorsElement = t(this._element).find(
                  b.INDICATORS
                )[0]),
                this._addEventListeners();
            }
            var T = s.prototype;
            return (
              (T.next = function () {
                this._isSliding || this._slide(c);
              }),
              (T.nextWhenVisible = function () {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (T.prev = function () {
                this._isSliding || this._slide(h);
              }),
              (T.pause = function (e) {
                e || (this._isPaused = !0),
                  t(this._element).find(b.NEXT_PREV)[0] &&
                    k.supportsTransitionEnd() &&
                    (k.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (T.cycle = function (t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (T.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(b.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(d.SLID, function () {
                      return n.to(e);
                    });
                  else {
                    if (i === e) return this.pause(), void this.cycle();
                    var r = e > i ? c : h;
                    this._slide(r, this._items[e]);
                  }
              }),
              (T.dispose = function () {
                t(this._element).off(o),
                  t.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (T._getConfig = function (t) {
                return (t = r({}, a, t)), k.typeCheckConfig(e, t, l), t;
              }),
              (T._addEventListeners = function () {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    (t(this._element)
                      .on(d.MOUSEENTER, function (t) {
                        return e.pause(t);
                      })
                      .on(d.MOUSELEAVE, function (t) {
                        return e.cycle(t);
                      }),
                    ("ontouchstart" in document.documentElement) &&
                      t(this._element).on(d.TOUCHEND, function () {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval));
                      }));
              }),
              (T._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                  }
              }),
              (T._getItemIndex = function (e) {
                return (
                  (this._items = t.makeArray(t(e).parent().find(b.ITEM))),
                  this._items.indexOf(e)
                );
              }),
              (T._getItemByDirection = function (t, e) {
                var n = t === c,
                  i = t === h,
                  r = this._getItemIndex(e),
                  o = this._items.length - 1;
                if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                  return e;
                var s = (r + (t === h ? -1 : 1)) % this._items.length;
                return -1 === s
                  ? this._items[this._items.length - 1]
                  : this._items[s];
              }),
              (T._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e),
                  r = this._getItemIndex(
                    t(this._element).find(b.ACTIVE_ITEM)[0]
                  ),
                  o = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: r,
                    to: i,
                  });
                return t(this._element).trigger(o), o;
              }),
              (T._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  t(this._indicatorsElement).find(b.ACTIVE).removeClass(g);
                  var n = this._indicatorsElement.children[
                    this._getItemIndex(e)
                  ];
                  n && t(n).addClass(g);
                }
              }),
              (T._slide = function (e, n) {
                var i,
                  r,
                  o,
                  s = this,
                  a = t(this._element).find(b.ACTIVE_ITEM)[0],
                  l = this._getItemIndex(a),
                  h = n || (a && this._getItemByDirection(e, a)),
                  p = this._getItemIndex(h),
                  T = Boolean(this._interval);
                if (
                  (e === c
                    ? ((i = v), (r = E), (o = f))
                    : ((i = _), (r = y), (o = u)),
                  h && t(h).hasClass(g))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(h, o).isDefaultPrevented() &&
                  a &&
                  h
                ) {
                  (this._isSliding = !0),
                    T && this.pause(),
                    this._setActiveIndicatorElement(h);
                  var C = t.Event(d.SLID, {
                    relatedTarget: h,
                    direction: o,
                    from: l,
                    to: p,
                  });
                  k.supportsTransitionEnd() && t(this._element).hasClass(m)
                    ? (t(h).addClass(r),
                      k.reflow(h),
                      t(a).addClass(i),
                      t(h).addClass(i),
                      t(a)
                        .one(k.TRANSITION_END, function () {
                          t(h)
                            .removeClass(i + " " + r)
                            .addClass(g),
                            t(a).removeClass(g + " " + r + " " + i),
                            (s._isSliding = !1),
                            setTimeout(function () {
                              return t(s._element).trigger(C);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (t(a).removeClass(g),
                      t(h).addClass(g),
                      (this._isSliding = !1),
                      t(this._element).trigger(C)),
                    T && this.cycle();
                }
              }),
              (s._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n),
                    o = r({}, a, t(this).data());
                  "object" == typeof e && (o = r({}, o, e));
                  var l = "string" == typeof e ? e : o.slide;
                  if (
                    (i || ((i = new s(this, o)), t(this).data(n, i)),
                    "number" == typeof e)
                  )
                    i.to(e);
                  else if ("string" == typeof l) {
                    if ("undefined" == typeof i[l])
                      throw new TypeError('No method named "' + l + '"');
                    i[l]();
                  } else o.interval && (i.pause(), i.cycle());
                });
              }),
              (s._dataApiClickHandler = function (e) {
                var i = k.getSelectorFromElement(this);
                if (i) {
                  var o = t(i)[0];
                  if (o && t(o).hasClass(p)) {
                    var a = r({}, t(o).data(), t(this).data()),
                      l = this.getAttribute("data-slide-to");
                    l && (a.interval = !1),
                      s._jQueryInterface.call(t(o), a),
                      l && t(o).data(n).to(l),
                      e.preventDefault();
                  }
                }
              }),
              i(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              s
            );
          })();
        return (
          t(document).on(
            d.CLICK_DATA_API,
            b.DATA_SLIDE,
            T._dataApiClickHandler
          ),
          t(window).on(d.LOAD_DATA_API, function () {
            t(b.DATA_RIDE).each(function () {
              var e = t(this);
              T._jQueryInterface.call(e, e.data());
            });
          }),
          (t.fn[e] = T._jQueryInterface),
          (t.fn[e].Constructor = T),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = s), T._jQueryInterface;
          }),
          T
        );
      })(e),
      R = (function (t) {
        var e = "collapse",
          n = "bs.collapse",
          o = "." + n,
          s = t.fn[e],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = {
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            CLICK_DATA_API: "click" + o + ".data-api",
          },
          h = "show",
          f = "collapse",
          u = "collapsing",
          d = "collapsed",
          p = "width",
          g = "height",
          m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
          },
          _ = (function () {
            function o(e, n) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(n)),
                (this._triggerArray = t.makeArray(
                  t(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (var i = t(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
                var o = i[r],
                  s = k.getSelectorFromElement(o);
                null !== s &&
                  t(s).filter(e).length > 0 &&
                  ((this._selector = s), this._triggerArray.push(o));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var s = o.prototype;
            return (
              (s.toggle = function () {
                t(this._element).hasClass(h) ? this.hide() : this.show();
              }),
              (s.show = function () {
                var e,
                  i,
                  r = this;
                if (
                  !this._isTransitioning &&
                  !t(this._element).hasClass(h) &&
                  (this._parent &&
                    0 ===
                      (e = t.makeArray(
                        t(this._parent)
                          .find(m.ACTIVES)
                          .filter('[data-parent="' + this._config.parent + '"]')
                      )).length &&
                    (e = null),
                  !(
                    e &&
                    (i = t(e).not(this._selector).data(n)) &&
                    i._isTransitioning
                  ))
                ) {
                  var s = t.Event(c.SHOW);
                  if ((t(this._element).trigger(s), !s.isDefaultPrevented())) {
                    e &&
                      (o._jQueryInterface.call(
                        t(e).not(this._selector),
                        "hide"
                      ),
                      i || t(e).data(n, null));
                    var a = this._getDimension();
                    t(this._element).removeClass(f).addClass(u),
                      (this._element.style[a] = 0),
                      this._triggerArray.length > 0 &&
                        t(this._triggerArray)
                          .removeClass(d)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var l = function () {
                      t(r._element).removeClass(u).addClass(f).addClass(h),
                        (r._element.style[a] = ""),
                        r.setTransitioning(!1),
                        t(r._element).trigger(c.SHOWN);
                    };
                    if (k.supportsTransitionEnd()) {
                      var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                      t(this._element)
                        .one(k.TRANSITION_END, l)
                        .emulateTransitionEnd(600),
                        (this._element.style[a] = this._element[p] + "px");
                    } else l();
                  }
                }
              }),
              (s.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(h)) {
                  var n = t.Event(c.HIDE);
                  if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (
                      ((this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                      k.reflow(this._element),
                      t(this._element)
                        .addClass(u)
                        .removeClass(f)
                        .removeClass(h),
                      this._triggerArray.length > 0)
                    )
                      for (var r = 0; r < this._triggerArray.length; r++) {
                        var o = this._triggerArray[r],
                          s = k.getSelectorFromElement(o);
                        if (null !== s)
                          t(s).hasClass(h) ||
                            t(o).addClass(d).attr("aria-expanded", !1);
                      }
                    this.setTransitioning(!0);
                    var a = function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(u)
                          .addClass(f)
                          .trigger(c.HIDDEN);
                    };
                    (this._element.style[i] = ""),
                      k.supportsTransitionEnd()
                        ? t(this._element)
                            .one(k.TRANSITION_END, a)
                            .emulateTransitionEnd(600)
                        : a();
                  }
                }
              }),
              (s.setTransitioning = function (t) {
                this._isTransitioning = t;
              }),
              (s.dispose = function () {
                t.removeData(this._element, n),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (s._getConfig = function (t) {
                return (
                  ((t = r({}, a, t)).toggle = Boolean(t.toggle)),
                  k.typeCheckConfig(e, t, l),
                  t
                );
              }),
              (s._getDimension = function () {
                return t(this._element).hasClass(p) ? p : g;
              }),
              (s._getParent = function () {
                var e = this,
                  n = null;
                k.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    "undefined" != typeof this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = t(this._config.parent)[0]);
                var i =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  t(n)
                    .find(i)
                    .each(function (t, n) {
                      e._addAriaAndCollapsedClass(o._getTargetFromElement(n), [
                        n,
                      ]);
                    }),
                  n
                );
              }),
              (s._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                  var i = t(e).hasClass(h);
                  n.length > 0 &&
                    t(n).toggleClass(d, !i).attr("aria-expanded", i);
                }
              }),
              (o._getTargetFromElement = function (e) {
                var n = k.getSelectorFromElement(e);
                return n ? t(n)[0] : null;
              }),
              (o._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this),
                    s = i.data(n),
                    l = r({}, a, i.data(), "object" == typeof e && e);
                  if (
                    (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    s || ((s = new o(this, l)), i.data(n, s)),
                    "string" == typeof e)
                  ) {
                    if ("undefined" == typeof s[e])
                      throw new TypeError('No method named "' + e + '"');
                    s[e]();
                  }
                });
              }),
              i(o, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              o
            );
          })();
        return (
          t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this),
              r = k.getSelectorFromElement(this);
            t(r).each(function () {
              var e = t(this),
                r = e.data(n) ? "toggle" : i.data();
              _._jQueryInterface.call(e, r);
            });
          }),
          (t.fn[e] = _._jQueryInterface),
          (t.fn[e].Constructor = _),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = s), _._jQueryInterface;
          }),
          _
        );
      })(e),
      j = "undefined" != typeof window && "undefined" != typeof document,
      H = ["Edge", "Trident", "Firefox"],
      M = 0,
      W = 0;
    W < H.length;
    W += 1
  )
    if (j && navigator.userAgent.indexOf(H[W]) >= 0) {
      M = 1;
      break;
    }
  var U =
    j && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, M));
          };
        };
  function B(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function F(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function K(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function V(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = F(t),
      n = e.overflow,
      i = e.overflowX,
      r = e.overflowY;
    return /(auto|scroll)/.test(n + r + i) ? t : V(K(t));
  }
  function Q(t) {
    var e = t && t.offsetParent,
      n = e && e.nodeName;
    return n && "BODY" !== n && "HTML" !== n
      ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) &&
        "static" === F(e, "position")
        ? Q(e)
        : e
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Y(t) {
    return null !== t.parentNode ? Y(t.parentNode) : t;
  }
  function G(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      r = n ? e : t,
      o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
      a,
      l = o.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(r))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && Q(s.firstElementChild) !== s)
        ? Q(l)
        : l;
    var c = Y(t);
    return c.host ? G(c.host, e) : G(t, Y(e).host);
  }
  function q(t) {
    var e =
        "top" ===
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top")
          ? "scrollTop"
          : "scrollLeft",
      n = t.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;
      return (t.ownerDocument.scrollingElement || i)[e];
    }
    return t[e];
  }
  function z(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  var X = void 0,
    Z = function () {
      return (
        void 0 === X && (X = -1 !== navigator.appVersion.indexOf("MSIE 10")), X
      );
    };
  function J(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      Z()
        ? n["offset" + t] +
            i["margin" + ("Height" === t ? "Top" : "Left")] +
            i["margin" + ("Height" === t ? "Bottom" : "Right")]
        : 0
    );
  }
  function $() {
    var t = document.body,
      e = document.documentElement,
      n = Z() && getComputedStyle(e);
    return { height: J("Height", t, e, n), width: J("Width", t, e, n) };
  }
  var tt = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    et = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    nt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    it =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function rt(t) {
    return it({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function ot(t) {
    var e = {};
    if (Z())
      try {
        e = t.getBoundingClientRect();
        var n = q(t, "top"),
          i = q(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } catch (t) {}
    else e = t.getBoundingClientRect();
    var r = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      o = "HTML" === t.nodeName ? $() : {},
      s = o.width || t.clientWidth || r.right - r.left,
      a = o.height || t.clientHeight || r.bottom - r.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = F(t);
      (l -= z(h, "x")), (c -= z(h, "y")), (r.width -= l), (r.height -= c);
    }
    return rt(r);
  }
  function st(t, e) {
    var n = Z(),
      i = "HTML" === e.nodeName,
      r = ot(t),
      o = ot(e),
      s = V(t),
      a = F(e),
      l = parseFloat(a.borderTopWidth, 10),
      c = parseFloat(a.borderLeftWidth, 10),
      h = rt({
        top: r.top - o.top - l,
        left: r.left - o.left - c,
        width: r.width,
        height: r.height,
      });
    if (((h.marginTop = 0), (h.marginLeft = 0), !n && i)) {
      var f = parseFloat(a.marginTop, 10),
        u = parseFloat(a.marginLeft, 10);
      (h.top -= l - f),
        (h.bottom -= l - f),
        (h.left -= c - u),
        (h.right -= c - u),
        (h.marginTop = f),
        (h.marginLeft = u);
    }
    return (
      (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (h = (function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = q(e, "top"),
            r = q(e, "left"),
            o = n ? -1 : 1;
          return (
            (t.top += i * o),
            (t.bottom += i * o),
            (t.left += r * o),
            (t.right += r * o),
            t
          );
        })(h, e)),
      h
    );
  }
  function at(t, e, n, i) {
    var r,
      o,
      s,
      a,
      l,
      c,
      h,
      f = { top: 0, left: 0 },
      u = G(t, e);
    if ("viewport" === i)
      (o = (r = u).ownerDocument.documentElement),
        (s = st(r, o)),
        (a = Math.max(o.clientWidth, window.innerWidth || 0)),
        (l = Math.max(o.clientHeight, window.innerHeight || 0)),
        (c = q(o)),
        (h = q(o, "left")),
        (f = rt({
          top: c - s.top + s.marginTop,
          left: h - s.left + s.marginLeft,
          width: a,
          height: l,
        }));
    else {
      var d = void 0;
      "scrollParent" === i
        ? "BODY" === (d = V(K(e))).nodeName &&
          (d = t.ownerDocument.documentElement)
        : (d = "window" === i ? t.ownerDocument.documentElement : i);
      var p = st(d, u);
      if (
        "HTML" !== d.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          return (
            "BODY" !== n &&
            "HTML" !== n &&
            ("fixed" === F(e, "position") || t(K(e)))
          );
        })(u)
      )
        f = p;
      else {
        var g = $(),
          m = g.height,
          _ = g.width;
        (f.top += p.top - p.marginTop),
          (f.bottom = m + p.top),
          (f.left += p.left - p.marginLeft),
          (f.right = _ + p.left);
      }
    }
    return (f.left += n), (f.top += n), (f.right -= n), (f.bottom -= n), f;
  }
  function lt(t, e, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = at(n, i, o, r),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return it({ key: t }, a[t], {
            area: ((e = a[t]), e.width * e.height),
          });
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      h = c.length > 0 ? c[0].key : l[0].key,
      f = t.split("-")[1];
    return h + (f ? "-" + f : "");
  }
  function ct(t, e, n) {
    return st(n, G(e, n));
  }
  function ht(t) {
    var e = getComputedStyle(t),
      n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
      i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function ft(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function ut(t, e, n) {
    n = n.split("-")[0];
    var i = ht(t),
      r = { width: i.width, height: i.height },
      o = -1 !== ["right", "left"].indexOf(n),
      s = o ? "top" : "left",
      a = o ? "left" : "top",
      l = o ? "height" : "width",
      c = o ? "width" : "height";
    return (
      (r[s] = e[s] + e[l] / 2 - i[l] / 2),
      (r[a] = n === a ? e[a] - i[c] : e[ft(a)]),
      r
    );
  }
  function dt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function pt(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = dt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          B(n) &&
          ((e.offsets.popper = rt(e.offsets.popper)),
          (e.offsets.reference = rt(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function gt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function mt(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length - 1;
      i++
    ) {
      var r = e[i],
        o = r ? "" + r + n : t;
      if ("undefined" != typeof document.body.style[o]) return o;
    }
    return null;
  }
  function _t(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function vt(t, e, n, i) {
    (n.updateBound = i),
      _t(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var r = V(t);
    return (
      (function t(e, n, i, r) {
        var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          o || t(V(s.parentNode), n, i, r),
          r.push(s);
      })(r, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = r),
      (n.eventsEnabled = !0),
      n
    );
  }
  function Et() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        _t(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function yt(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        yt(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  function Tt(t, e, n) {
    var i = dt(t, function (t) {
        return t.name === e;
      }),
      r =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!r) {
      var o = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          o +
          " modifier in order to work, be sure to include it before " +
          o +
          "!"
      );
    }
    return r;
  }
  var Ct = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    wt = Ct.slice(3);
  function It(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = wt.indexOf(t),
      i = wt.slice(n + 1).concat(wt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var At = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise",
  };
  function Dt(t, e, n, i) {
    var r = [0, 0],
      o = -1 !== ["right", "left"].indexOf(i),
      s = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      a = s.indexOf(
        dt(s, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    s[a] &&
      -1 === s[a].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== a
          ? [
              s.slice(0, a).concat([s[a].split(l)[0]]),
              [s[a].split(l)[1]].concat(s.slice(a + 1)),
            ]
          : [s];
    return (
      (c = c.map(function (t, i) {
        var r = (1 === i ? !o : o) ? "height" : "width",
          s = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (s = !0), t)
              : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
              if (!o) return t;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (rt(a)[e] / 100) * o;
              }
              if ("vh" === s || "vw" === s)
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  o
                );
              return o;
            })(t, r, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          yt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      r
    );
  }
  var St = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: nt({}, l, o[l]),
                  end: nt({}, l, o[l] + o[c] - s[c]),
                };
              t.offsets.popper = it({}, s, h[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = yt(+n) ? [+n, 0] : Dt(n, o, s, a)),
              "left" === a
                ? ((o.top += l[0]), (o.left -= l[1]))
                : "right" === a
                ? ((o.top += l[0]), (o.left += l[1]))
                : "top" === a
                ? ((o.left += l[0]), (o.top -= l[1]))
                : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
              (t.popper = o),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || Q(t.instance.popper);
            t.instance.reference === n && (n = Q(n));
            var i = at(t.instance.popper, t.instance.reference, e.padding, n);
            e.boundaries = i;
            var r = e.priority,
              o = t.offsets.popper,
              s = {
                primary: function (t) {
                  var n = o[t];
                  return (
                    o[t] < i[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(o[t], i[t])),
                    nt({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    r = o[n];
                  return (
                    o[t] > i[t] &&
                      !e.escapeWithReference &&
                      (r = Math.min(
                        o[n],
                        i[t] - ("right" === t ? o.width : o.height)
                      )),
                    nt({}, n, r)
                  );
                },
              };
            return (
              r.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                o = it({}, o, s[e](t));
              }),
              (t.offsets.popper = o),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
              n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!Tt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              f = h.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = ht(i)[c];
            a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
              a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
              (t.offsets.popper = rt(t.offsets.popper));
            var g = a[f] + a[c] / 2 - p / 2,
              m = F(t.instance.popper),
              _ = parseFloat(m["margin" + h], 10),
              v = parseFloat(m["border" + h + "Width"], 10),
              E = g - t.offsets.popper[f] - _ - v;
            return (
              (E = Math.max(Math.min(s[c] - p, E), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (nt((n = {}), f, Math.round(E)), nt(n, u, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (gt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = at(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement
              ),
              i = t.placement.split("-")[0],
              r = ft(i),
              o = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case At.FLIP:
                s = [i, r];
                break;
              case At.CLOCKWISE:
                s = It(i);
                break;
              case At.COUNTERCLOCKWISE:
                s = It(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (r = ft(i));
                var c,
                  h = t.offsets.popper,
                  f = t.offsets.reference,
                  u = Math.floor,
                  d =
                    ("left" === i && u(h.right) > u(f.left)) ||
                    ("right" === i && u(h.left) < u(f.right)) ||
                    ("top" === i && u(h.bottom) > u(f.top)) ||
                    ("bottom" === i && u(h.top) < u(f.bottom)),
                  p = u(h.left) < u(n.left),
                  g = u(h.right) > u(n.right),
                  m = u(h.top) < u(n.top),
                  _ = u(h.bottom) > u(n.bottom),
                  v =
                    ("left" === i && p) ||
                    ("right" === i && g) ||
                    ("top" === i && m) ||
                    ("bottom" === i && _),
                  E = -1 !== ["top", "bottom"].indexOf(i),
                  y =
                    !!e.flipVariations &&
                    ((E && "start" === o && p) ||
                      (E && "end" === o && g) ||
                      (!E && "start" === o && m) ||
                      (!E && "end" === o && _));
                (d || v || y) &&
                  ((t.flipped = !0),
                  (d || v) && (i = s[l + 1]),
                  y &&
                    (o =
                      "end" === (c = o) ? "start" : "start" === c ? "end" : c),
                  (t.placement = i + (o ? "-" + o : "")),
                  (t.offsets.popper = it(
                    {},
                    t.offsets.popper,
                    ut(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = pt(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (r[s ? "left" : "top"] =
                o[n] - (a ? r[s ? "width" : "height"] : 0)),
              (t.placement = ft(e)),
              (t.offsets.popper = rt(r)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!Tt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = dt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = dt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== o &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== o ? o : e.gpuAcceleration,
              a = ot(Q(t.instance.popper)),
              l = { position: r.position },
              c = {
                left: Math.floor(r.left),
                top: Math.floor(r.top),
                bottom: Math.floor(r.bottom),
                right: Math.floor(r.right),
              },
              h = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              u = mt("transform"),
              d = void 0,
              p = void 0;
            if (
              ((p = "bottom" === h ? -a.height + c.bottom : c.top),
              (d = "right" === f ? -a.width + c.right : c.left),
              s && u)
            )
              (l[u] = "translate3d(" + d + "px, " + p + "px, 0)"),
                (l[h] = 0),
                (l[f] = 0),
                (l.willChange = "transform");
            else {
              var g = "bottom" === h ? -1 : 1,
                m = "right" === f ? -1 : 1;
              (l[h] = p * g), (l[f] = d * m), (l.willChange = h + ", " + f);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = it({}, _, t.attributes)),
              (t.styles = it({}, l, t.styles)),
              (t.arrowStyles = it({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, r) {
            var o = ct(0, e, t),
              s = lt(
                n.placement,
                o,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              bt(e, { position: "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Ot = (function () {
      function t(e, n) {
        var i = this,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        tt(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = U(this.update.bind(this))),
          (this.options = it({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(it({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = it(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return it({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              B(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), (this.state.eventsEnabled = o);
      }
      return (
        et(t, [
          {
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (t.offsets.reference = ct(
                    this.state,
                    this.popper,
                    this.reference
                  )),
                    (t.placement = lt(
                      this.options.placement,
                      t.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding
                    )),
                    (t.originalPlacement = t.placement),
                    (t.offsets.popper = ut(
                      this.popper,
                      t.offsets.reference,
                      t.placement
                    )),
                    (t.offsets.popper.position = "absolute"),
                    (t = pt(this.modifiers, t)),
                    this.state.isCreated
                      ? this.options.onUpdate(t)
                      : ((this.state.isCreated = !0), this.options.onCreate(t));
                }
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  gt(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.left = ""),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style[mt("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = vt(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return Et.call(this);
            },
          },
        ]),
        t
      );
    })();
  (Ot.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (Ot.placements = Ct),
    (Ot.Defaults = St);
  var Nt = (function (t) {
      var e = "dropdown",
        n = "bs.dropdown",
        o = "." + n,
        s = t.fn[e],
        a = new RegExp("38|40|27"),
        l = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          CLICK: "click" + o,
          CLICK_DATA_API: "click" + o + ".data-api",
          KEYDOWN_DATA_API: "keydown" + o + ".data-api",
          KEYUP_DATA_API: "keyup" + o + ".data-api",
        },
        c = "disabled",
        h = "show",
        f = "dropup",
        u = "dropright",
        d = "dropleft",
        p = "dropdown-menu-right",
        g = "dropdown-menu-left",
        m = "position-static",
        _ = '[data-toggle="dropdown"]',
        v = ".dropdown form",
        E = ".dropdown-menu",
        y = ".navbar-nav",
        b = ".dropdown-menu .dropdown-item:not(.disabled)",
        T = "top-start",
        C = "top-end",
        w = "bottom-start",
        I = "bottom-end",
        A = "right-start",
        D = "left-start",
        S = { offset: 0, flip: !0, boundary: "scrollParent" },
        O = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
        },
        N = (function () {
          function s(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var v = s.prototype;
          return (
            (v.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(c)) {
                var e = s._getParentFromElement(this._element),
                  n = t(this._menu).hasClass(h);
                if ((s._clearMenus(), !n)) {
                  var i = { relatedTarget: this._element },
                    r = t.Event(l.SHOW, i);
                  if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if ("undefined" == typeof Ot)
                        throw new TypeError(
                          "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                        );
                      var o = this._element;
                      t(e).hasClass(f) &&
                        (t(this._menu).hasClass(g) ||
                          t(this._menu).hasClass(p)) &&
                        (o = e),
                        "scrollParent" !== this._config.boundary &&
                          t(e).addClass(m),
                        (this._popper = new Ot(
                          o,
                          this._menu,
                          this._getPopperConfig()
                        ));
                    }
                    "ontouchstart" in document.documentElement &&
                      0 === t(e).closest(y).length &&
                      t("body").children().on("mouseover", null, t.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      t(this._menu).toggleClass(h),
                      t(e).toggleClass(h).trigger(t.Event(l.SHOWN, i));
                  }
                }
              }
            }),
            (v.dispose = function () {
              t.removeData(this._element, n),
                t(this._element).off(o),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (v.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (v._addEventListeners = function () {
              var e = this;
              t(this._element).on(l.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (v._getConfig = function (n) {
              return (
                (n = r(
                  {},
                  this.constructor.Default,
                  t(this._element).data(),
                  n
                )),
                k.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (v._getMenuElement = function () {
              if (!this._menu) {
                var e = s._getParentFromElement(this._element);
                this._menu = t(e).find(E)[0];
              }
              return this._menu;
            }),
            (v._getPlacement = function () {
              var e = t(this._element).parent(),
                n = w;
              return (
                e.hasClass(f)
                  ? ((n = T), t(this._menu).hasClass(p) && (n = C))
                  : e.hasClass(u)
                  ? (n = A)
                  : e.hasClass(d)
                  ? (n = D)
                  : t(this._menu).hasClass(p) && (n = I),
                n
              );
            }),
            (v._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (v._getPopperConfig = function () {
              var t = this,
                e = {};
              return (
                "function" == typeof this._config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = r(
                          {},
                          e.offsets,
                          t._config.offset(e.offsets) || {}
                        )),
                        e
                      );
                    })
                  : (e.offset = this._config.offset),
                {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: e,
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                }
              );
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new s(this, "object" == typeof e ? e : null)),
                    t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            (s._clearMenus = function (e) {
              if (
                !e ||
                (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              )
                for (var i = t.makeArray(t(_)), r = 0; r < i.length; r++) {
                  var o = s._getParentFromElement(i[r]),
                    a = t(i[r]).data(n),
                    c = { relatedTarget: i[r] };
                  if (a) {
                    var f = a._menu;
                    if (
                      t(o).hasClass(h) &&
                      !(
                        e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        t.contains(o, e.target)
                      )
                    ) {
                      var u = t.Event(l.HIDE, c);
                      t(o).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t("body").children().off("mouseover", null, t.noop),
                          i[r].setAttribute("aria-expanded", "false"),
                          t(f).removeClass(h),
                          t(o).removeClass(h).trigger(t.Event(l.HIDDEN, c)));
                    }
                  }
                }
            }),
            (s._getParentFromElement = function (e) {
              var n,
                i = k.getSelectorFromElement(e);
              return i && (n = t(i)[0]), n || e.parentNode;
            }),
            (s._dataApiKeydownHandler = function (e) {
              if (
                (/input|textarea/i.test(e.target.tagName)
                  ? !(
                      32 === e.which ||
                      (27 !== e.which &&
                        ((40 !== e.which && 38 !== e.which) ||
                          t(e.target).closest(E).length))
                    )
                  : a.test(e.which)) &&
                (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(c))
              ) {
                var n = s._getParentFromElement(this),
                  i = t(n).hasClass(h);
                if (
                  (i || (27 === e.which && 32 === e.which)) &&
                  (!i || (27 !== e.which && 32 !== e.which))
                ) {
                  var r = t(n).find(b).get();
                  if (0 !== r.length) {
                    var o = r.indexOf(e.target);
                    38 === e.which && o > 0 && o--,
                      40 === e.which && o < r.length - 1 && o++,
                      o < 0 && (o = 0),
                      r[o].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var l = t(n).find(_)[0];
                    t(l).trigger("focus");
                  }
                  t(this).trigger("click");
                }
              }
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return S;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return O;
                },
              },
            ]),
            s
          );
        })();
      return (
        t(document)
          .on(l.KEYDOWN_DATA_API, _, N._dataApiKeydownHandler)
          .on(l.KEYDOWN_DATA_API, E, N._dataApiKeydownHandler)
          .on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, N._clearMenus)
          .on(l.CLICK_DATA_API, _, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              N._jQueryInterface.call(t(this), "toggle");
          })
          .on(l.CLICK_DATA_API, v, function (t) {
            t.stopPropagation();
          }),
        (t.fn[e] = N._jQueryInterface),
        (t.fn[e].Constructor = N),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), N._jQueryInterface;
        }),
        N
      );
    })(e),
    kt = (function (t) {
      var e = "bs.modal",
        n = "." + e,
        o = t.fn.modal,
        s = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        a = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        l = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          FOCUSIN: "focusin" + n,
          RESIZE: "resize" + n,
          CLICK_DISMISS: "click.dismiss" + n,
          KEYDOWN_DISMISS: "keydown.dismiss" + n,
          MOUSEUP_DISMISS: "mouseup.dismiss" + n,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
          CLICK_DATA_API: "click.bs.modal.data-api",
        },
        c = "modal-scrollbar-measure",
        h = "modal-backdrop",
        f = "modal-open",
        u = "fade",
        d = "show",
        p = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler",
        },
        g = (function () {
          function o(e, n) {
            (this._config = this._getConfig(n)),
              (this._element = e),
              (this._dialog = t(e).find(p.DIALOG)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._originalBodyPadding = 0),
              (this._scrollbarWidth = 0);
          }
          var g = o.prototype;
          return (
            (g.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (g.show = function (e) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                k.supportsTransitionEnd() &&
                  t(this._element).hasClass(u) &&
                  (this._isTransitioning = !0);
                var i = t.Event(l.SHOW, { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(f),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(
                      l.CLICK_DISMISS,
                      p.DATA_DISMISS,
                      function (t) {
                        return n.hide(t);
                      }
                    ),
                    t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (g.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var i = t.Event(l.HIDE);
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var r =
                    k.supportsTransitionEnd() && t(this._element).hasClass(u);
                  r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(l.FOCUSIN),
                    t(this._element).removeClass(d),
                    t(this._element).off(l.CLICK_DISMISS),
                    t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                    r
                      ? t(this._element)
                          .one(k.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(300)
                      : this._hideModal();
                }
              }
            }),
            (g.dispose = function () {
              t.removeData(this._element, e),
                t(window, document, this._element, this._backdrop).off(n),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (g.handleUpdate = function () {
              this._adjustDialog();
            }),
            (g._getConfig = function (t) {
              return (t = r({}, s, t)), k.typeCheckConfig("modal", t, a), t;
            }),
            (g._showElement = function (e) {
              var n = this,
                i = k.supportsTransitionEnd() && t(this._element).hasClass(u);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                (this._element.scrollTop = 0),
                i && k.reflow(this._element),
                t(this._element).addClass(d),
                this._config.focus && this._enforceFocus();
              var r = t.Event(l.SHOWN, { relatedTarget: e }),
                o = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(r);
                };
              i
                ? t(this._dialog)
                    .one(k.TRANSITION_END, o)
                    .emulateTransitionEnd(300)
                : o();
            }),
            (g._enforceFocus = function () {
              var e = this;
              t(document)
                .off(l.FOCUSIN)
                .on(l.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (g._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide());
                  })
                : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS);
            }),
            (g._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(l.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(l.RESIZE);
            }),
            (g._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(f),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(l.HIDDEN);
                });
            }),
            (g._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (g._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass(u) ? u : "";
              if (this._isShown && this._config.backdrop) {
                var r = k.supportsTransitionEnd() && i;
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = h),
                  i && t(this._backdrop).addClass(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(l.CLICK_DISMISS, function (t) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ("static" === n._config.backdrop
                          ? n._element.focus()
                          : n.hide());
                  }),
                  r && k.reflow(this._backdrop),
                  t(this._backdrop).addClass(d),
                  !e)
                )
                  return;
                if (!r) return void e();
                t(this._backdrop)
                  .one(k.TRANSITION_END, e)
                  .emulateTransitionEnd(150);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(d);
                var o = function () {
                  n._removeBackdrop(), e && e();
                };
                k.supportsTransitionEnd() && t(this._element).hasClass(u)
                  ? t(this._backdrop)
                      .one(k.TRANSITION_END, o)
                      .emulateTransitionEnd(150)
                  : o();
              } else e && e();
            }),
            (g._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (g._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (g._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (g._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                t(p.FIXED_CONTENT).each(function (n, i) {
                  var r = t(i)[0].style.paddingRight,
                    o = t(i).css("padding-right");
                  t(i)
                    .data("padding-right", r)
                    .css(
                      "padding-right",
                      parseFloat(o) + e._scrollbarWidth + "px"
                    );
                }),
                  t(p.STICKY_CONTENT).each(function (n, i) {
                    var r = t(i)[0].style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) - e._scrollbarWidth + "px"
                      );
                  }),
                  t(p.NAVBAR_TOGGLER).each(function (n, i) {
                    var r = t(i)[0].style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) + e._scrollbarWidth + "px"
                      );
                  });
                var n = document.body.style.paddingRight,
                  i = t("body").css("padding-right");
                t("body")
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + this._scrollbarWidth + "px"
                  );
              }
            }),
            (g._resetScrollbar = function () {
              t(p.FIXED_CONTENT).each(function (e, n) {
                var i = t(n).data("padding-right");
                "undefined" != typeof i &&
                  t(n).css("padding-right", i).removeData("padding-right");
              }),
                t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function (
                  e,
                  n
                ) {
                  var i = t(n).data("margin-right");
                  "undefined" != typeof i &&
                    t(n).css("margin-right", i).removeData("margin-right");
                });
              var e = t("body").data("padding-right");
              "undefined" != typeof e &&
                t("body").css("padding-right", e).removeData("padding-right");
            }),
            (g._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = c), document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (o._jQueryInterface = function (n, i) {
              return this.each(function () {
                var s = t(this).data(e),
                  a = r(
                    {},
                    o.Default,
                    t(this).data(),
                    "object" == typeof n && n
                  );
                if (
                  (s || ((s = new o(this, a)), t(this).data(e, s)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof s[n])
                    throw new TypeError('No method named "' + n + '"');
                  s[n](i);
                } else a.show && s.show(i);
              });
            }),
            i(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return s;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function (n) {
          var i,
            o = this,
            s = k.getSelectorFromElement(this);
          s && (i = t(s)[0]);
          var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            n.preventDefault();
          var c = t(i).one(l.SHOW, function (e) {
            e.isDefaultPrevented() ||
              c.one(l.HIDDEN, function () {
                t(o).is(":visible") && o.focus();
              });
          });
          g._jQueryInterface.call(t(i), a, this);
        }),
        (t.fn.modal = g._jQueryInterface),
        (t.fn.modal.Constructor = g),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = o), g._jQueryInterface;
        }),
        g
      );
    })(e),
    Lt = (function (t) {
      var e = "tooltip",
        n = "bs.tooltip",
        o = "." + n,
        s = t.fn[e],
        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        l = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        h = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
        },
        f = "show",
        u = "out",
        d = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          INSERTED: "inserted" + o,
          CLICK: "click" + o,
          FOCUSIN: "focusin" + o,
          FOCUSOUT: "focusout" + o,
          MOUSEENTER: "mouseenter" + o,
          MOUSELEAVE: "mouseleave" + o,
        },
        p = "fade",
        g = "show",
        m = ".tooltip-inner",
        _ = ".arrow",
        v = "hover",
        E = "focus",
        y = "click",
        b = "manual",
        T = (function () {
          function s(t, e) {
            if ("undefined" == typeof Ot)
              throw new TypeError(
                "Bootstrap tooltips require Popper.js (https://popper.js.org)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var T = s.prototype;
          return (
            (T.enable = function () {
              this._isEnabled = !0;
            }),
            (T.disable = function () {
              this._isEnabled = !1;
            }),
            (T.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (T.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass(g))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (T.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (T.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var n = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(n);
                var i = t.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                );
                if (n.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(),
                  o = k.getUID(this.constructor.NAME);
                r.setAttribute("id", o),
                  this.element.setAttribute("aria-describedby", o),
                  this.setContent(),
                  this.config.animation && t(r).addClass(p);
                var a =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, r, this.element)
                      : this.config.placement,
                  l = this._getAttachment(a);
                this.addAttachmentClass(l);
                var c =
                  !1 === this.config.container
                    ? document.body
                    : t(this.config.container);
                t(r).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || t(r).appendTo(c),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new Ot(this.element, r, {
                    placement: l,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: _ },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (t) {
                      t.originalPlacement !== t.placement &&
                        e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function (t) {
                      e._handlePopperPlacementChange(t);
                    },
                  })),
                  t(r).addClass(g),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().on("mouseover", null, t.noop);
                var h = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === u && e._leave(null, e);
                };
                k.supportsTransitionEnd() && t(this.tip).hasClass(p)
                  ? t(this.tip)
                      .one(k.TRANSITION_END, h)
                      .emulateTransitionEnd(s._TRANSITION_DURATION)
                  : h();
              }
            }),
            (T.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                r = t.Event(this.constructor.Event.HIDE),
                o = function () {
                  n._hoverState !== f &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              t(this.element).trigger(r),
                r.isDefaultPrevented() ||
                  (t(i).removeClass(g),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().off("mouseover", null, t.noop),
                  (this._activeTrigger[y] = !1),
                  (this._activeTrigger[E] = !1),
                  (this._activeTrigger[v] = !1),
                  k.supportsTransitionEnd() && t(this.tip).hasClass(p)
                    ? t(i).one(k.TRANSITION_END, o).emulateTransitionEnd(150)
                    : o(),
                  (this._hoverState = ""));
            }),
            (T.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (T.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (T.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (T.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (T.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(m), this.getTitle()),
                e.removeClass(p + " " + g);
            }),
            (T.setElementContent = function (e, n) {
              var i = this.config.html;
              "object" == typeof n && (n.nodeType || n.jquery)
                ? i
                  ? t(n).parent().is(e) || e.empty().append(n)
                  : e.text(t(n).text())
                : e[i ? "html" : "text"](n);
            }),
            (T.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return (
                t ||
                  (t =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (T._getAttachment = function (t) {
              return c[t.toUpperCase()];
            }),
            (T._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    }
                  );
                else if (n !== b) {
                  var i =
                      n === v
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    r =
                      n === v
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(r, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
                t(e.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return e.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = r({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (T._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (T._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? E : v] = !0),
                t(n.getTipElement()).hasClass(g) || n._hoverState === f
                  ? (n._hoverState = f)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (T._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? E : v] = !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = u),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === u && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (T._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (T._getConfig = function (n) {
              return (
                "number" ==
                  typeof (n = r(
                    {},
                    this.constructor.Default,
                    t(this.element).data(),
                    n
                  )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content &&
                  (n.content = n.content.toString()),
                k.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (T._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (T._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (T._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (T._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass(p),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  r = "object" == typeof e && e;
                if (
                  (i || !/dispose|hide/.test(e)) &&
                  (i || ((i = new s(this, r)), t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return h;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "Event",
                get: function () {
                  return d;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return o;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
            ]),
            s
          );
        })();
      return (
        (t.fn[e] = T._jQueryInterface),
        (t.fn[e].Constructor = T),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), T._jQueryInterface;
        }),
        T
      );
    })(e),
    Pt = (function (t) {
      var e = "popover",
        n = "bs.popover",
        o = "." + n,
        s = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, Lt.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        c = r({}, Lt.DefaultType, { content: "(string|element|function)" }),
        h = "fade",
        f = "show",
        u = ".popover-header",
        d = ".popover-body",
        p = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          INSERTED: "inserted" + o,
          CLICK: "click" + o,
          FOCUSIN: "focusin" + o,
          FOCUSOUT: "focusout" + o,
          MOUSEENTER: "mouseenter" + o,
          MOUSELEAVE: "mouseleave" + o,
        },
        g = (function (r) {
          var s, g;
          function m() {
            return r.apply(this, arguments) || this;
          }
          (g = r),
            ((s = m).prototype = Object.create(g.prototype)),
            (s.prototype.constructor = s),
            (s.__proto__ = g);
          var _ = m.prototype;
          return (
            (_.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (_.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (_.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (_.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(u), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(d), n),
                e.removeClass(h + " " + f);
            }),
            (_._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (_._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (m._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  r = "object" == typeof e ? e : null;
                if (
                  (i || !/destroy|hide/.test(e)) &&
                  (i || ((i = new m(this, r)), t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(m, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return l;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "Event",
                get: function () {
                  return p;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return o;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return c;
                },
              },
            ]),
            m
          );
        })(Lt);
      return (
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), g._jQueryInterface;
        }),
        g
      );
    })(e),
    xt = (function (t) {
      var e = "scrollspy",
        n = "bs.scrollspy",
        o = "." + n,
        s = t.fn[e],
        a = { offset: 10, method: "auto", target: "" },
        l = { offset: "number", method: "string", target: "(string|element)" },
        c = {
          ACTIVATE: "activate" + o,
          SCROLL: "scroll" + o,
          LOAD_DATA_API: "load" + o + ".data-api",
        },
        h = "dropdown-item",
        f = "active",
        u = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        d = "offset",
        p = "position",
        g = (function () {
          function s(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                u.NAV_LINKS +
                "," +
                this._config.target +
                " " +
                u.LIST_ITEMS +
                "," +
                this._config.target +
                " " +
                u.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(c.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var g = s.prototype;
          return (
            (g.refresh = function () {
              var e = this,
                n = this._scrollElement === this._scrollElement.window ? d : p,
                i = "auto" === this._config.method ? n : this._config.method,
                r = i === p ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                  .makeArray(t(this._selector))
                  .map(function (e) {
                    var n,
                      o = k.getSelectorFromElement(e);
                    if ((o && (n = t(o)[0]), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [t(n)[i]().top + r, o];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (g.dispose = function () {
              t.removeData(this._element, n),
                t(this._scrollElement).off(o),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (g._getConfig = function (n) {
              if ("string" != typeof (n = r({}, a, n)).target) {
                var i = t(n.target).attr("id");
                i || ((i = k.getUID(e)), t(n.target).attr("id", i)),
                  (n.target = "#" + i);
              }
              return k.typeCheckConfig(e, n, l), n;
            }),
            (g._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (g._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (g._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (g._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var r = this._offsets.length; r--; ) {
                  this._activeTarget !== this._targets[r] &&
                    t >= this._offsets[r] &&
                    ("undefined" == typeof this._offsets[r + 1] ||
                      t < this._offsets[r + 1]) &&
                    this._activate(this._targets[r]);
                }
              }
            }),
            (g._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",");
              n = n.map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              });
              var i = t(n.join(","));
              i.hasClass(h)
                ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(f),
                  i.addClass(f))
                : (i.addClass(f),
                  i
                    .parents(u.NAV_LIST_GROUP)
                    .prev(u.NAV_LINKS + ", " + u.LIST_ITEMS)
                    .addClass(f),
                  i
                    .parents(u.NAV_LIST_GROUP)
                    .prev(u.NAV_ITEMS)
                    .children(u.NAV_LINKS)
                    .addClass(f)),
                t(this._scrollElement).trigger(c.ACTIVATE, {
                  relatedTarget: e,
                });
            }),
            (g._clear = function () {
              t(this._selector).filter(u.ACTIVE).removeClass(f);
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new s(this, "object" == typeof e && e)),
                    t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            s
          );
        })();
      return (
        t(window).on(c.LOAD_DATA_API, function () {
          for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--; ) {
            var i = t(e[n]);
            g._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), g._jQueryInterface;
        }),
        g
      );
    })(e),
    Rt = (function (t) {
      var e = ".bs.tab",
        n = t.fn.tab,
        r = {
          HIDE: "hide" + e,
          HIDDEN: "hidden" + e,
          SHOW: "show" + e,
          SHOWN: "shown" + e,
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        o = "dropdown-menu",
        s = "active",
        a = "disabled",
        l = "fade",
        c = "show",
        h = ".dropdown",
        f = ".nav, .list-group",
        u = ".active",
        d = "> li > .active",
        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        g = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        _ = (function () {
          function e(t) {
            this._element = t;
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(s)) ||
                  t(this._element).hasClass(a)
                )
              ) {
                var n,
                  i,
                  o = t(this._element).closest(f)[0],
                  l = k.getSelectorFromElement(this._element);
                if (o) {
                  var c = "UL" === o.nodeName ? d : u;
                  i = (i = t.makeArray(t(o).find(c)))[i.length - 1];
                }
                var h = t.Event(r.HIDE, { relatedTarget: this._element }),
                  p = t.Event(r.SHOW, { relatedTarget: i });
                if (
                  (i && t(i).trigger(h),
                  t(this._element).trigger(p),
                  !p.isDefaultPrevented() && !h.isDefaultPrevented())
                ) {
                  l && (n = t(l)[0]), this._activate(this._element, o);
                  var g = function () {
                    var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                      o = t.Event(r.SHOWN, { relatedTarget: i });
                    t(i).trigger(n), t(e._element).trigger(o);
                  };
                  n ? this._activate(n, n.parentNode, g) : g();
                }
              }
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (n._activate = function (e, n, i) {
              var r = this,
                o = ("UL" === n.nodeName ? t(n).find(d) : t(n).children(u))[0],
                s = i && k.supportsTransitionEnd() && o && t(o).hasClass(l),
                a = function () {
                  return r._transitionComplete(e, o, i);
                };
              o && s
                ? t(o).one(k.TRANSITION_END, a).emulateTransitionEnd(150)
                : a();
            }),
            (n._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass(c + " " + s);
                var r = t(n.parentNode).find(m)[0];
                r && t(r).removeClass(s),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass(s),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                k.reflow(e),
                t(e).addClass(c),
                e.parentNode && t(e.parentNode).hasClass(o))
              ) {
                var a = t(e).closest(h)[0];
                a && t(a).find(g).addClass(s),
                  e.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.tab");
                if (
                  (r || ((r = new e(this)), i.data("bs.tab", r)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })();
      return (
        t(document).on(r.CLICK_DATA_API, p, function (e) {
          e.preventDefault(), _._jQueryInterface.call(t(this), "show");
        }),
        (t.fn.tab = _._jQueryInterface),
        (t.fn.tab.Constructor = _),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = n), _._jQueryInterface;
        }),
        _
      );
    })(e);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      e[0] >= 4
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = k),
    (t.Alert = L),
    (t.Button = P),
    (t.Carousel = x),
    (t.Collapse = R),
    (t.Dropdown = Nt),
    (t.Modal = kt),
    (t.Popover = Pt),
    (t.Scrollspy = xt),
    (t.Tab = Rt),
    (t.Tooltip = Lt),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map;
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return n(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  function e(n) {
    var e = 7.5625,
      t = 2.75;
    return n < 1 / t
      ? e * n * n
      : n < 2 / t
      ? e * (n -= 1.5 / t) * n + 0.75
      : n < 2.5 / t
      ? e * (n -= 2.25 / t) * n + 0.9375
      : e * (n -= 2.625 / t) * n + 0.984375;
  }
  void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
  var t = Math.pow,
    u = Math.sqrt,
    r = Math.sin,
    i = Math.cos,
    a = Math.PI,
    c = 1.70158,
    o = 1.525 * c,
    s = (2 * a) / 3,
    f = (2 * a) / 4.5;
  n.extend(n.easing, {
    def: "easeOutQuad",
    swing: function (e) {
      return n.easing[n.easing.def](e);
    },
    easeInQuad: function (n) {
      return n * n;
    },
    easeOutQuad: function (n) {
      return 1 - (1 - n) * (1 - n);
    },
    easeInOutQuad: function (n) {
      return n < 0.5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2;
    },
    easeInCubic: function (n) {
      return n * n * n;
    },
    easeOutCubic: function (n) {
      return 1 - t(1 - n, 3);
    },
    easeInOutCubic: function (n) {
      return n < 0.5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2;
    },
    easeInQuart: function (n) {
      return n * n * n * n;
    },
    easeOutQuart: function (n) {
      return 1 - t(1 - n, 4);
    },
    easeInOutQuart: function (n) {
      return n < 0.5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2;
    },
    easeInQuint: function (n) {
      return n * n * n * n * n;
    },
    easeOutQuint: function (n) {
      return 1 - t(1 - n, 5);
    },
    easeInOutQuint: function (n) {
      return n < 0.5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2;
    },
    easeInSine: function (n) {
      return 1 - i((n * a) / 2);
    },
    easeOutSine: function (n) {
      return r((n * a) / 2);
    },
    easeInOutSine: function (n) {
      return -(i(a * n) - 1) / 2;
    },
    easeInExpo: function (n) {
      return 0 === n ? 0 : t(2, 10 * n - 10);
    },
    easeOutExpo: function (n) {
      return 1 === n ? 1 : 1 - t(2, -10 * n);
    },
    easeInOutExpo: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : n < 0.5
        ? t(2, 20 * n - 10) / 2
        : (2 - t(2, -20 * n + 10)) / 2;
    },
    easeInCirc: function (n) {
      return 1 - u(1 - t(n, 2));
    },
    easeOutCirc: function (n) {
      return u(1 - t(n - 1, 2));
    },
    easeInOutCirc: function (n) {
      return n < 0.5
        ? (1 - u(1 - t(2 * n, 2))) / 2
        : (u(1 - t(-2 * n + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s);
    },
    easeOutElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : t(2, -10 * n) * r((10 * n - 0.75) * s) + 1;
    },
    easeInOutElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : n < 0.5
        ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2
        : (t(2, -20 * n + 10) * r((20 * n - 11.125) * f)) / 2 + 1;
    },
    easeInBack: function (n) {
      return (c + 1) * n * n * n - c * n * n;
    },
    easeOutBack: function (n) {
      return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2);
    },
    easeInOutBack: function (n) {
      return n < 0.5
        ? (t(2 * n, 2) * (7.189819 * n - o)) / 2
        : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2;
    },
    easeInBounce: function (n) {
      return 1 - e(1 - n);
    },
    easeOutBounce: e,
    easeInOutBounce: function (n) {
      return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2;
    },
  });
});
/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l = (function () {
        function a() {
          c(this, a),
            "undefined" != typeof console &&
              null !== console &&
              (console.warn(
                "MutationObserver is not supported by your browser."
              ),
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              ));
        }
        return n(a, [{ key: "observe", value: function () {} }]), a;
      })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if (
                (("undefined" != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll("." + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, "")
                  .trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, {
                  animationName: b ? "none" : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  "use strict";

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0,
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev, $el, s, cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if (
      Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) <
      cfg.sensitivity
    ) {
      $el.off(s.event, track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX;
      ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX;
      delete s.pY;
      return cfg.over.apply($el[0], [ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX;
      s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout(function () {
        compare(ev, $el, s, cfg);
      }, cfg.interval);
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev, $el, s, out) {
    delete $el.data("hoverIntent")[s.id];
    return out.apply($el[0], [ev]);
  };

  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ($.isPlainObject(handlerIn)) {
      cfg = $.extend(cfg, handlerIn);
      if (!$.isFunction(cfg.out)) {
        cfg.out = cfg.over;
      }
    } else if ($.isFunction(handlerOut)) {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerOut,
        selector: selector,
      });
    } else {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerIn,
        selector: handlerOut,
      });
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({}, e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data("hoverIntent");
      if (!hoverIntentData) {
        $el.data("hoverIntent", (hoverIntentData = {}));
      }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) {
        hoverIntentData[instanceId] = state = { id: instanceId };
      }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) {
        state.timeoutId = clearTimeout(state.timeoutId);
      }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = (state.event =
        "mousemove.hoverIntent.hoverIntent" + instanceId);

      // handle the event, based on its type
      if (e.type === "mouseenter") {
        // do nothing if already active
        if (state.isActive) {
          return;
        }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX;
        state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove, track).on(mousemove, track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout(function () {
          compare(ev, $el, state, cfg);
        }, cfg.interval);
      } else {
        // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) {
          return;
        }
        // unbind expensive mousemove event
        $el.off(mousemove, track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout(function () {
          delay(ev, $el, state, cfg.out);
        }, cfg.timeout);
      }
    };

    // listen for mouseenter and mouseleave
    return this.on(
      {
        "mouseenter.hoverIntent": handleHover,
        "mouseleave.hoverIntent": handleHover,
      },
      cfg.selector
    );
  };
});
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

!(function (a, b) {
  "use strict";
  var c = (function () {
    var c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        menuArrowClass: "sf-arrows",
      },
      d = (function () {
        var b = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
          navigator.userAgent
        );
        return b && a("html").css("cursor", "pointer").on("click", a.noop), b;
      })(),
      e = (function () {
        var a = document.documentElement.style;
        return (
          "behavior" in a &&
          "fill" in a &&
          /iemobile/i.test(navigator.userAgent)
        );
      })(),
      f = (function () {
        return !!b.PointerEvent;
      })(),
      g = function (a, b, d) {
        var e,
          f = c.menuClass;
        b.cssArrows && (f += " " + c.menuArrowClass),
          (e = d ? "addClass" : "removeClass"),
          a[e](f);
      },
      h = function (b, d) {
        return b
          .find("li." + d.pathClass)
          .slice(0, d.pathLevels)
          .addClass(d.hoverClass + " " + c.bcClass)
          .filter(function () {
            return a(this).children(d.popUpSelector).hide().show().length;
          })
          .removeClass(d.pathClass);
      },
      i = function (a, b) {
        var d = b ? "addClass" : "removeClass";
        a.children("a")[d](c.anchorClass);
      },
      j = function (a) {
        var b = a.css("ms-touch-action"),
          c = a.css("touch-action");
        (c = c || b),
          (c = "pan-y" === c ? "auto" : "pan-y"),
          a.css({ "ms-touch-action": c, "touch-action": c });
      },
      k = function (a) {
        return a.closest("." + c.menuClass);
      },
      l = function (a) {
        return k(a).data("sfOptions");
      },
      m = function () {
        var b = a(this),
          c = l(b);
        clearTimeout(c.sfTimer),
          b.siblings().superfish("hide").end().superfish("show");
      },
      n = function (b) {
        (b.retainPath = a.inArray(this[0], b.$path) > -1),
          this.superfish("hide"),
          this.parents("." + b.hoverClass).length ||
            (b.onIdle.call(k(this)), b.$path.length && a.proxy(m, b.$path)());
      },
      o = function () {
        var b = a(this),
          c = l(b);
        d
          ? a.proxy(n, b, c)()
          : (clearTimeout(c.sfTimer),
            (c.sfTimer = setTimeout(a.proxy(n, b, c), c.delay)));
      },
      p = function (b) {
        var c = a(this),
          d = l(c),
          e = c.siblings(b.data.popUpSelector);
        return d.onHandleTouch.call(e) === !1
          ? this
          : void (
              e.length > 0 &&
              e.is(":hidden") &&
              (c.one("click.superfish", !1),
              "MSPointerDown" === b.type || "pointerdown" === b.type
                ? c.trigger("focus")
                : a.proxy(m, c.parent("li"))())
            );
      },
      q = function (b, c) {
        var g = "li:has(" + c.popUpSelector + ")";
        a.fn.hoverIntent && !c.disableHI
          ? b.hoverIntent(m, o, g)
          : b.on("mouseenter.superfish", g, m).on("mouseleave.superfish", g, o);
        var h = "MSPointerDown.superfish";
        f && (h = "pointerdown.superfish"),
          d || (h += " touchend.superfish"),
          e && (h += " mousedown.superfish"),
          b
            .on("focusin.superfish", "li", m)
            .on("focusout.superfish", "li", o)
            .on(h, "a", c, p);
      };
    return {
      hide: function (b) {
        if (this.length) {
          var c = this,
            d = l(c);
          if (!d) return this;
          var e = d.retainPath === !0 ? d.$path : "",
            f = c
              .find("li." + d.hoverClass)
              .add(this)
              .not(e)
              .removeClass(d.hoverClass)
              .children(d.popUpSelector),
            g = d.speedOut;
          if (
            (b && (f.show(), (g = 0)),
            (d.retainPath = !1),
            d.onBeforeHide.call(f) === !1)
          )
            return this;
          f.stop(!0, !0).animate(d.animationOut, g, function () {
            var b = a(this);
            d.onHide.call(b);
          });
        }
        return this;
      },
      show: function () {
        var a = l(this);
        if (!a) return this;
        var b = this.addClass(a.hoverClass),
          c = b.children(a.popUpSelector);
        return a.onBeforeShow.call(c) === !1
          ? this
          : (c.stop(!0, !0).animate(a.animation, a.speed, function () {
              a.onShow.call(c);
            }),
            this);
      },
      destroy: function () {
        return this.each(function () {
          var b,
            d = a(this),
            e = d.data("sfOptions");
          return e
            ? ((b = d.find(e.popUpSelector).parent("li")),
              clearTimeout(e.sfTimer),
              g(d, e),
              i(b),
              j(d),
              d.off(".superfish").off(".hoverIntent"),
              b.children(e.popUpSelector).attr("style", function (a, b) {
                return b.replace(/display[^;]+;?/g, "");
              }),
              e.$path
                .removeClass(e.hoverClass + " " + c.bcClass)
                .addClass(e.pathClass),
              d.find("." + e.hoverClass).removeClass(e.hoverClass),
              e.onDestroy.call(d),
              void d.removeData("sfOptions"))
            : !1;
        });
      },
      init: function (b) {
        return this.each(function () {
          var d = a(this);
          if (d.data("sfOptions")) return !1;
          var e = a.extend({}, a.fn.superfish.defaults, b),
            f = d.find(e.popUpSelector).parent("li");
          (e.$path = h(d, e)),
            d.data("sfOptions", e),
            g(d, e, !0),
            i(f, !0),
            j(d),
            q(d, e),
            f.not("." + c.bcClass).superfish("hide", !0),
            e.onInit.call(this);
        });
      },
    };
  })();
  (a.fn.superfish = function (b, d) {
    return c[b]
      ? c[b].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof b && b
      ? a.error("Method " + b + " does not exist on jQuery.fn.superfish")
      : c.init.apply(this, arguments);
  }),
    (a.fn.superfish.defaults = {
      popUpSelector: "ul,.sf-mega",
      hoverClass: "sfHover",
      pathClass: "overrideThisToUse",
      pathLevels: 1,
      delay: 800,
      animation: { opacity: "show" },
      animationOut: { opacity: "hide" },
      speed: "normal",
      speedOut: "fast",
      cssArrows: !0,
      disableHI: !1,
      onInit: a.noop,
      onBeforeShow: a.noop,
      onShow: a.noop,
      onBeforeHide: a.noop,
      onHide: a.noop,
      onIdle: a.noop,
      onDestroy: a.noop,
      onHandleTouch: a.noop,
    });
})(jQuery, window);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
