var bu = e => {
    throw TypeError(e)
}
;
var ps = (e, t, n) => t.has(e) || bu("Cannot " + n);
var T = (e, t, n) => (ps(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? bu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, i) => (ps(e, t, "write to private field"),
i ? i.call(e, n) : t.set(e, n),
n)
  , Pe = (e, t, n) => (ps(e, t, "access private method"),
n);
var yo = (e, t, n, i) => ({
    set _(r) {
        H(e, t, r, n)
    },
    get _() {
        return T(e, t, i)
    }
});
function Bh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const i = t[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const r in i)
                if (r !== "default" && !(r in e)) {
                    const o = Object.getOwnPropertyDescriptor(i, r);
                    o && Object.defineProperty(e, r, o.get ? o : {
                        enumerable: !0,
                        get: () => i[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && i(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
}
)();
function Rf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ff = {
    exports: {}
}
  , Ll = {}
  , Mf = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo = Symbol.for("react.element")
  , $h = Symbol.for("react.portal")
  , Gh = Symbol.for("react.fragment")
  , Wh = Symbol.for("react.strict_mode")
  , Xh = Symbol.for("react.profiler")
  , Qh = Symbol.for("react.provider")
  , Kh = Symbol.for("react.context")
  , Yh = Symbol.for("react.forward_ref")
  , qh = Symbol.for("react.suspense")
  , Jh = Symbol.for("react.memo")
  , Zh = Symbol.for("react.lazy")
  , Pu = Symbol.iterator;
function e2(e) {
    return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Df = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Lf = Object.assign
  , Of = {};
function nr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Of,
    this.updater = n || Df
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
nr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function _f() {}
_f.prototype = nr.prototype;
function rc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Of,
    this.updater = n || Df
}
var oc = rc.prototype = new _f;
oc.constructor = rc;
Lf(oc, nr.prototype);
oc.isPureReactComponent = !0;
var Tu = Array.isArray
  , If = Object.prototype.hasOwnProperty
  , lc = {
    current: null
}
  , Vf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function zf(e, t, n) {
    var i, r = {}, o = null, l = null;
    if (t != null)
        for (i in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            If.call(t, i) && !Vf.hasOwnProperty(i) && (r[i] = t[i]);
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    if (e && e.defaultProps)
        for (i in s = e.defaultProps,
        s)
            r[i] === void 0 && (r[i] = s[i]);
    return {
        $$typeof: oo,
        type: e,
        key: o,
        ref: l,
        props: r,
        _owner: lc.current
    }
}
function t2(e, t) {
    return {
        $$typeof: oo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function sc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oo
}
function n2(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Nu = /\/+/g;
function hs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? n2("" + e.key) : t.toString(36)
}
function Ho(e, t, n, i, r) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case oo:
            case $h:
                l = !0
            }
        }
    if (l)
        return l = e,
        r = r(l),
        e = i === "" ? "." + hs(l, 0) : i,
        Tu(r) ? (n = "",
        e != null && (n = e.replace(Nu, "$&/") + "/"),
        Ho(r, t, n, "", function(u) {
            return u
        })) : r != null && (sc(r) && (r = t2(r, n + (!r.key || l && l.key === r.key ? "" : ("" + r.key).replace(Nu, "$&/") + "/") + e)),
        t.push(r)),
        1;
    if (l = 0,
    i = i === "" ? "." : i + ":",
    Tu(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var a = i + hs(o, s);
            l += Ho(o, t, n, a, r)
        }
    else if (a = e2(e),
    typeof a == "function")
        for (e = a.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            a = i + hs(o, s++),
            l += Ho(o, t, n, a, r);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function xo(e, t, n) {
    if (e == null)
        return e;
    var i = []
      , r = 0;
    return Ho(e, i, "", "", function(o) {
        return t.call(n, o, r++)
    }),
    i
}
function i2(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
  , Bo = {
    transition: null
}
  , r2 = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: lc
};
function Uf() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: xo,
    forEach: function(e, t, n) {
        xo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return xo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return xo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!sc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = nr;
Q.Fragment = Gh;
Q.Profiler = Xh;
Q.PureComponent = rc;
Q.StrictMode = Wh;
Q.Suspense = qh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r2;
Q.act = Uf;
Q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var i = Lf({}, e.props)
      , r = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = lc.current),
        t.key !== void 0 && (r = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (a in t)
            If.call(t, a) && !Vf.hasOwnProperty(a) && (i[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        i.children = s
    }
    return {
        $$typeof: oo,
        type: e.type,
        key: r,
        ref: o,
        props: i,
        _owner: l
    }
}
;
Q.createContext = function(e) {
    return e = {
        $$typeof: Kh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Qh,
        _context: e
    },
    e.Consumer = e
}
;
Q.createElement = zf;
Q.createFactory = function(e) {
    var t = zf.bind(null, e);
    return t.type = e,
    t
}
;
Q.createRef = function() {
    return {
        current: null
    }
}
;
Q.forwardRef = function(e) {
    return {
        $$typeof: Yh,
        render: e
    }
}
;
Q.isValidElement = sc;
Q.lazy = function(e) {
    return {
        $$typeof: Zh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: i2
    }
}
;
Q.memo = function(e, t) {
    return {
        $$typeof: Jh,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Q.startTransition = function(e) {
    var t = Bo.transition;
    Bo.transition = {};
    try {
        e()
    } finally {
        Bo.transition = t
    }
}
;
Q.unstable_act = Uf;
Q.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
}
;
Q.useContext = function(e) {
    return Le.current.useContext(e)
}
;
Q.useDebugValue = function() {}
;
Q.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
}
;
Q.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
}
;
Q.useId = function() {
    return Le.current.useId()
}
;
Q.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
;
Q.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
}
;
Q.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
}
;
Q.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
}
;
Q.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
}
;
Q.useRef = function(e) {
    return Le.current.useRef(e)
}
;
Q.useState = function(e) {
    return Le.current.useState(e)
}
;
Q.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
;
Q.useTransition = function() {
    return Le.current.useTransition()
}
;
Q.version = "18.3.1";
Mf.exports = Q;
var x = Mf.exports;
const R = Rf(x)
  , Hf = Bh({
    __proto__: null,
    default: R
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o2 = x
  , l2 = Symbol.for("react.element")
  , s2 = Symbol.for("react.fragment")
  , a2 = Object.prototype.hasOwnProperty
  , c2 = o2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , u2 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Bf(e, t, n) {
    var i, r = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (i in t)
        a2.call(t, i) && !u2.hasOwnProperty(i) && (r[i] = t[i]);
    if (e && e.defaultProps)
        for (i in t = e.defaultProps,
        t)
            r[i] === void 0 && (r[i] = t[i]);
    return {
        $$typeof: l2,
        type: e,
        key: o,
        ref: l,
        props: r,
        _owner: c2.current
    }
}
Ll.Fragment = s2;
Ll.jsx = Bf;
Ll.jsxs = Bf;
Ff.exports = Ll;
var c = Ff.exports
  , $f = {
    exports: {}
}
  , Je = {}
  , Gf = {
    exports: {}
}
  , Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, k) {
        var O = N.length;
        N.push(k);
        e: for (; 0 < O; ) {
            var $ = O - 1 >>> 1
              , V = N[$];
            if (0 < r(V, k))
                N[$] = k,
                N[O] = V,
                O = $;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function i(N) {
        if (N.length === 0)
            return null;
        var k = N[0]
          , O = N.pop();
        if (O !== k) {
            N[0] = O;
            e: for (var $ = 0, V = N.length, X = V >>> 1; $ < X; ) {
                var Y = 2 * ($ + 1) - 1
                  , pe = N[Y]
                  , be = Y + 1
                  , Z = N[be];
                if (0 > r(pe, O))
                    be < V && 0 > r(Z, pe) ? (N[$] = Z,
                    N[be] = O,
                    $ = be) : (N[$] = pe,
                    N[Y] = O,
                    $ = Y);
                else if (be < V && 0 > r(Z, O))
                    N[$] = Z,
                    N[be] = O,
                    $ = be;
                else
                    break e
            }
        }
        return k
    }
    function r(N, k) {
        var O = N.sortIndex - k.sortIndex;
        return O !== 0 ? O : N.id - k.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var a = []
      , u = []
      , d = 1
      , m = null
      , h = 3
      , f = !1
      , w = !1
      , v = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(N) {
        for (var k = n(u); k !== null; ) {
            if (k.callback === null)
                i(u);
            else if (k.startTime <= N)
                i(u),
                k.sortIndex = k.expirationTime,
                t(a, k);
            else
                break;
            k = n(u)
        }
    }
    function C(N) {
        if (v = !1,
        y(N),
        !w)
            if (n(a) !== null)
                w = !0,
                z(b);
            else {
                var k = n(u);
                k !== null && B(C, k.startTime - N)
            }
    }
    function b(N, k) {
        w = !1,
        v && (v = !1,
        g(j),
        j = -1),
        f = !0;
        var O = h;
        try {
            for (y(k),
            m = n(a); m !== null && (!(m.expirationTime > k) || N && !I()); ) {
                var $ = m.callback;
                if (typeof $ == "function") {
                    m.callback = null,
                    h = m.priorityLevel;
                    var V = $(m.expirationTime <= k);
                    k = e.unstable_now(),
                    typeof V == "function" ? m.callback = V : m === n(a) && i(a),
                    y(k)
                } else
                    i(a);
                m = n(a)
            }
            if (m !== null)
                var X = !0;
            else {
                var Y = n(u);
                Y !== null && B(C, Y.startTime - k),
                X = !1
            }
            return X
        } finally {
            m = null,
            h = O,
            f = !1
        }
    }
    var E = !1
      , P = null
      , j = -1
      , F = 5
      , M = -1;
    function I() {
        return !(e.unstable_now() - M < F)
    }
    function L() {
        if (P !== null) {
            var N = e.unstable_now();
            M = N;
            var k = !0;
            try {
                k = P(!0, N)
            } finally {
                k ? W() : (E = !1,
                P = null)
            }
        } else
            E = !1
    }
    var W;
    if (typeof p == "function")
        W = function() {
            p(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , K = D.port2;
        D.port1.onmessage = L,
        W = function() {
            K.postMessage(null)
        }
    } else
        W = function() {
            S(L, 0)
        }
        ;
    function z(N) {
        P = N,
        E || (E = !0,
        W())
    }
    function B(N, k) {
        j = S(function() {
            N(e.unstable_now())
        }, k)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || f || (w = !0,
        z(b))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(N) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var k = 3;
            break;
        default:
            k = h
        }
        var O = h;
        h = k;
        try {
            return N()
        } finally {
            h = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, k) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var O = h;
        h = N;
        try {
            return k()
        } finally {
            h = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, k, O) {
        var $ = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? $ + O : $) : O = $,
        N) {
        case 1:
            var V = -1;
            break;
        case 2:
            V = 250;
            break;
        case 5:
            V = 1073741823;
            break;
        case 4:
            V = 1e4;
            break;
        default:
            V = 5e3
        }
        return V = O + V,
        N = {
            id: d++,
            callback: k,
            priorityLevel: N,
            startTime: O,
            expirationTime: V,
            sortIndex: -1
        },
        O > $ ? (N.sortIndex = O,
        t(u, N),
        n(a) === null && N === n(u) && (v ? (g(j),
        j = -1) : v = !0,
        B(C, O - $))) : (N.sortIndex = V,
        t(a, N),
        w || f || (w = !0,
        z(b))),
        N
    }
    ,
    e.unstable_shouldYield = I,
    e.unstable_wrapCallback = function(N) {
        var k = h;
        return function() {
            var O = h;
            h = k;
            try {
                return N.apply(this, arguments)
            } finally {
                h = O
            }
        }
    }
}
)(Wf);
Gf.exports = Wf;
var d2 = Gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f2 = x
  , qe = d2;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Xf = new Set
  , Or = {};
function ai(e, t) {
    Xi(e, t),
    Xi(e + "Capture", t)
}
function Xi(e, t) {
    for (Or[e] = t,
    e = 0; e < t.length; e++)
        Xf.add(t[e])
}
var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ys = Object.prototype.hasOwnProperty
  , m2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ku = {}
  , ju = {};
function p2(e) {
    return Ys.call(ju, e) ? !0 : Ys.call(ku, e) ? !1 : m2.test(e) ? ju[e] = !0 : (ku[e] = !0,
    !1)
}
function h2(e, t, n, i) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function g2(e, t, n, i) {
    if (t === null || typeof t > "u" || h2(e, t, n, i))
        return !0;
    if (i)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Oe(e, t, n, i, r, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = i,
    this.attributeNamespace = r,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ee[e] = new Oe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ee[t] = new Oe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ee[e] = new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ee[e] = new Oe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ee[e] = new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ee[e] = new Oe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ee[e] = new Oe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ee[e] = new Oe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ee[e] = new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ac = /[\-:]([a-z])/g;
function cc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ac, cc);
    Ee[t] = new Oe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ac, cc);
    Ee[t] = new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ac, cc);
    Ee[t] = new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ee[e] = new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ee.xlinkHref = new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ee[e] = new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function uc(e, t, n, i) {
    var r = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (r !== null ? r.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (g2(t, n, r, i) && (n = null),
    i || r === null ? p2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (t = r.attributeName,
    i = r.attributeNamespace,
    n === null ? e.removeAttribute(t) : (r = r.type,
    n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var qt = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , wo = Symbol.for("react.element")
  , yi = Symbol.for("react.portal")
  , xi = Symbol.for("react.fragment")
  , dc = Symbol.for("react.strict_mode")
  , qs = Symbol.for("react.profiler")
  , Qf = Symbol.for("react.provider")
  , Kf = Symbol.for("react.context")
  , fc = Symbol.for("react.forward_ref")
  , Js = Symbol.for("react.suspense")
  , Zs = Symbol.for("react.suspense_list")
  , mc = Symbol.for("react.memo")
  , un = Symbol.for("react.lazy")
  , Yf = Symbol.for("react.offscreen")
  , Au = Symbol.iterator;
function ur(e) {
    return e === null || typeof e != "object" ? null : (e = Au && e[Au] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ue = Object.assign, gs;
function Sr(e) {
    if (gs === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gs = t && t[1] || ""
        }
    return `
` + gs + e
}
var vs = !1;
function ys(e, t) {
    if (!e || vs)
        return "";
    vs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var i = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    i = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                i = u
            }
            e()
        }
    } catch (u) {
        if (u && i && typeof u.stack == "string") {
            for (var r = u.stack.split(`
`), o = i.stack.split(`
`), l = r.length - 1, s = o.length - 1; 1 <= l && 0 <= s && r[l] !== o[s]; )
                s--;
            for (; 1 <= l && 0 <= s; l--,
            s--)
                if (r[l] !== o[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--,
                            s--,
                            0 > s || r[l] !== o[s]) {
                                var a = `
` + r[l].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        vs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Sr(e) : ""
}
function v2(e) {
    switch (e.tag) {
    case 5:
        return Sr(e.type);
    case 16:
        return Sr("Lazy");
    case 13:
        return Sr("Suspense");
    case 19:
        return Sr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ys(e.type, !1),
        e;
    case 11:
        return e = ys(e.type.render, !1),
        e;
    case 1:
        return e = ys(e.type, !0),
        e;
    default:
        return ""
    }
}
function ea(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case xi:
        return "Fragment";
    case yi:
        return "Portal";
    case qs:
        return "Profiler";
    case dc:
        return "StrictMode";
    case Js:
        return "Suspense";
    case Zs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Kf:
            return (e.displayName || "Context") + ".Consumer";
        case Qf:
            return (e._context.displayName || "Context") + ".Provider";
        case fc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case mc:
            return t = e.displayName || null,
            t !== null ? t : ea(e.type) || "Memo";
        case un:
            t = e._payload,
            e = e._init;
            try {
                return ea(e(t))
            } catch {}
        }
    return null
}
function y2(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ea(t);
    case 8:
        return t === dc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function An(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function qf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function x2(e) {
    var t = qf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(l) {
                i = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return i
            },
            setValue: function(l) {
                i = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function So(e) {
    e._valueTracker || (e._valueTracker = x2(e))
}
function Jf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , i = "";
    return e && (i = qf(e) ? e.checked ? "true" : "false" : e.value),
    e = i,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function il(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ta(e, t) {
    var n = t.checked;
    return ue({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ru(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , i = t.checked != null ? t.checked : t.defaultChecked;
    n = An(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Zf(e, t) {
    t = t.checked,
    t != null && uc(e, "checked", t, !1)
}
function na(e, t) {
    Zf(e, t);
    var n = An(t.value)
      , i = t.type;
    if (n != null)
        i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ia(e, t.type, n) : t.hasOwnProperty("defaultValue") && ia(e, t.type, An(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Fu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var i = t.type;
        if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ia(e, t, n) {
    (t !== "number" || il(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Cr = Array.isArray;
function Ai(e, t, n, i) {
    if (e = e.options,
    t) {
        t = {};
        for (var r = 0; r < n.length; r++)
            t["$" + n[r]] = !0;
        for (n = 0; n < e.length; n++)
            r = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== r && (e[n].selected = r),
            r && i && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + An(n),
        t = null,
        r = 0; r < e.length; r++) {
            if (e[r].value === n) {
                e[r].selected = !0,
                i && (e[r].defaultSelected = !0);
                return
            }
            t !== null || e[r].disabled || (t = e[r])
        }
        t !== null && (t.selected = !0)
    }
}
function ra(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return ue({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Mu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(A(92));
            if (Cr(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: An(n)
    }
}
function em(e, t) {
    var n = An(t.value)
      , i = An(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i)
}
function Du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function tm(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function oa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? tm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Co, nm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, i, r)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Co = Co || document.createElement("div"),
        Co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Co.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function _r(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , w2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function(e) {
    w2.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Tr[t] = Tr[e]
    })
});
function im(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px"
}
function rm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0
              , r = im(n, t[n], i);
            n === "float" && (n = "cssFloat"),
            i ? e.setProperty(n, r) : e[n] = r
        }
}
var S2 = ue({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function la(e, t) {
    if (t) {
        if (S2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function sa(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var aa = null;
function pc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ca = null
  , Ri = null
  , Fi = null;
function Lu(e) {
    if (e = ao(e)) {
        if (typeof ca != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = zl(t),
        ca(e.stateNode, e.type, t))
    }
}
function om(e) {
    Ri ? Fi ? Fi.push(e) : Fi = [e] : Ri = e
}
function lm() {
    if (Ri) {
        var e = Ri
          , t = Fi;
        if (Fi = Ri = null,
        Lu(e),
        t)
            for (e = 0; e < t.length; e++)
                Lu(t[e])
    }
}
function sm(e, t) {
    return e(t)
}
function am() {}
var xs = !1;
function cm(e, t, n) {
    if (xs)
        return e(t, n);
    xs = !0;
    try {
        return sm(e, t, n)
    } finally {
        xs = !1,
        (Ri !== null || Fi !== null) && (am(),
        lm())
    }
}
function Ir(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var i = zl(n);
    if (i === null)
        return null;
    n = i[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (e = e.type,
        i = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !i;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var ua = !1;
if (Gt)
    try {
        var dr = {};
        Object.defineProperty(dr, "passive", {
            get: function() {
                ua = !0
            }
        }),
        window.addEventListener("test", dr, dr),
        window.removeEventListener("test", dr, dr)
    } catch {
        ua = !1
    }
function C2(e, t, n, i, r, o, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Nr = !1
  , rl = null
  , ol = !1
  , da = null
  , E2 = {
    onError: function(e) {
        Nr = !0,
        rl = e
    }
};
function b2(e, t, n, i, r, o, l, s, a) {
    Nr = !1,
    rl = null,
    C2.apply(E2, arguments)
}
function P2(e, t, n, i, r, o, l, s, a) {
    if (b2.apply(this, arguments),
    Nr) {
        if (Nr) {
            var u = rl;
            Nr = !1,
            rl = null
        } else
            throw Error(A(198));
        ol || (ol = !0,
        da = u)
    }
}
function ci(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function um(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ou(e) {
    if (ci(e) !== e)
        throw Error(A(188))
}
function T2(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ci(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, i = t; ; ) {
        var r = n.return;
        if (r === null)
            break;
        var o = r.alternate;
        if (o === null) {
            if (i = r.return,
            i !== null) {
                n = i;
                continue
            }
            break
        }
        if (r.child === o.child) {
            for (o = r.child; o; ) {
                if (o === n)
                    return Ou(r),
                    e;
                if (o === i)
                    return Ou(r),
                    t;
                o = o.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== i.return)
            n = r,
            i = o;
        else {
            for (var l = !1, s = r.child; s; ) {
                if (s === n) {
                    l = !0,
                    n = r,
                    i = o;
                    break
                }
                if (s === i) {
                    l = !0,
                    i = r,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        l = !0,
                        n = o,
                        i = r;
                        break
                    }
                    if (s === i) {
                        l = !0,
                        i = o,
                        n = r;
                        break
                    }
                    s = s.sibling
                }
                if (!l)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== i)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function dm(e) {
    return e = T2(e),
    e !== null ? fm(e) : null
}
function fm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = fm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var mm = qe.unstable_scheduleCallback
  , _u = qe.unstable_cancelCallback
  , N2 = qe.unstable_shouldYield
  , k2 = qe.unstable_requestPaint
  , me = qe.unstable_now
  , j2 = qe.unstable_getCurrentPriorityLevel
  , hc = qe.unstable_ImmediatePriority
  , pm = qe.unstable_UserBlockingPriority
  , ll = qe.unstable_NormalPriority
  , A2 = qe.unstable_LowPriority
  , hm = qe.unstable_IdlePriority
  , Ol = null
  , Ft = null;
function R2(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function")
        try {
            Ft.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var xt = Math.clz32 ? Math.clz32 : D2
  , F2 = Math.log
  , M2 = Math.LN2;
function D2(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (F2(e) / M2 | 0) | 0
}
var Eo = 64
  , bo = 4194304;
function Er(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function sl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var i = 0
      , r = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var s = l & ~r;
        s !== 0 ? i = Er(s) : (o &= l,
        o !== 0 && (i = Er(o)))
    } else
        l = n & ~r,
        l !== 0 ? i = Er(l) : o !== 0 && (i = Er(o));
    if (i === 0)
        return 0;
    if (t !== 0 && t !== i && !(t & r) && (r = i & -i,
    o = t & -t,
    r >= o || r === 16 && (o & 4194240) !== 0))
        return t;
    if (i & 4 && (i |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= i; 0 < t; )
            n = 31 - xt(t),
            r = 1 << n,
            i |= e[n],
            t &= ~r;
    return i
}
function L2(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function O2(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - xt(o)
          , s = 1 << l
          , a = r[l];
        a === -1 ? (!(s & n) || s & i) && (r[l] = L2(s, t)) : a <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function fa(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function gm() {
    var e = Eo;
    return Eo <<= 1,
    !(Eo & 4194240) && (Eo = 64),
    e
}
function ws(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function lo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - xt(t),
    e[t] = n
}
function _2(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var r = 31 - xt(n)
          , o = 1 << r;
        t[r] = 0,
        i[r] = -1,
        e[r] = -1,
        n &= ~o
    }
}
function gc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var i = 31 - xt(n)
          , r = 1 << i;
        r & t | e[i] & t && (e[i] |= t),
        n &= ~r
    }
}
var ee = 0;
function vm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ym, vc, xm, wm, Sm, ma = !1, Po = [], Cn = null, En = null, bn = null, Vr = new Map, zr = new Map, fn = [], I2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Iu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Cn = null;
        break;
    case "dragenter":
    case "dragleave":
        En = null;
        break;
    case "mouseover":
    case "mouseout":
        bn = null;
        break;
    case "pointerover":
    case "pointerout":
        Vr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        zr.delete(t.pointerId)
    }
}
function fr(e, t, n, i, r, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [r]
    },
    t !== null && (t = ao(t),
    t !== null && vc(t)),
    e) : (e.eventSystemFlags |= i,
    t = e.targetContainers,
    r !== null && t.indexOf(r) === -1 && t.push(r),
    e)
}
function V2(e, t, n, i, r) {
    switch (t) {
    case "focusin":
        return Cn = fr(Cn, e, t, n, i, r),
        !0;
    case "dragenter":
        return En = fr(En, e, t, n, i, r),
        !0;
    case "mouseover":
        return bn = fr(bn, e, t, n, i, r),
        !0;
    case "pointerover":
        var o = r.pointerId;
        return Vr.set(o, fr(Vr.get(o) || null, e, t, n, i, r)),
        !0;
    case "gotpointercapture":
        return o = r.pointerId,
        zr.set(o, fr(zr.get(o) || null, e, t, n, i, r)),
        !0
    }
    return !1
}
function Cm(e) {
    var t = Gn(e.target);
    if (t !== null) {
        var n = ci(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = um(n),
                t !== null) {
                    e.blockedOn = t,
                    Sm(e.priority, function() {
                        xm(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function $o(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = pa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var i = new n.constructor(n.type,n);
            aa = i,
            n.target.dispatchEvent(i),
            aa = null
        } else
            return t = ao(n),
            t !== null && vc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Vu(e, t, n) {
    $o(e) && n.delete(t)
}
function z2() {
    ma = !1,
    Cn !== null && $o(Cn) && (Cn = null),
    En !== null && $o(En) && (En = null),
    bn !== null && $o(bn) && (bn = null),
    Vr.forEach(Vu),
    zr.forEach(Vu)
}
function mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ma || (ma = !0,
    qe.unstable_scheduleCallback(qe.unstable_NormalPriority, z2)))
}
function Ur(e) {
    function t(r) {
        return mr(r, e)
    }
    if (0 < Po.length) {
        mr(Po[0], e);
        for (var n = 1; n < Po.length; n++) {
            var i = Po[n];
            i.blockedOn === e && (i.blockedOn = null)
        }
    }
    for (Cn !== null && mr(Cn, e),
    En !== null && mr(En, e),
    bn !== null && mr(bn, e),
    Vr.forEach(t),
    zr.forEach(t),
    n = 0; n < fn.length; n++)
        i = fn[n],
        i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < fn.length && (n = fn[0],
    n.blockedOn === null); )
        Cm(n),
        n.blockedOn === null && fn.shift()
}
var Mi = qt.ReactCurrentBatchConfig
  , al = !0;
function U2(e, t, n, i) {
    var r = ee
      , o = Mi.transition;
    Mi.transition = null;
    try {
        ee = 1,
        yc(e, t, n, i)
    } finally {
        ee = r,
        Mi.transition = o
    }
}
function H2(e, t, n, i) {
    var r = ee
      , o = Mi.transition;
    Mi.transition = null;
    try {
        ee = 4,
        yc(e, t, n, i)
    } finally {
        ee = r,
        Mi.transition = o
    }
}
function yc(e, t, n, i) {
    if (al) {
        var r = pa(e, t, n, i);
        if (r === null)
            As(e, t, i, cl, n),
            Iu(e, i);
        else if (V2(r, e, t, n, i))
            i.stopPropagation();
        else if (Iu(e, i),
        t & 4 && -1 < I2.indexOf(e)) {
            for (; r !== null; ) {
                var o = ao(r);
                if (o !== null && ym(o),
                o = pa(e, t, n, i),
                o === null && As(e, t, i, cl, n),
                o === r)
                    break;
                r = o
            }
            r !== null && i.stopPropagation()
        } else
            As(e, t, i, null, n)
    }
}
var cl = null;
function pa(e, t, n, i) {
    if (cl = null,
    e = pc(i),
    e = Gn(e),
    e !== null)
        if (t = ci(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = um(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return cl = e,
    null
}
function Em(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (j2()) {
        case hc:
            return 1;
        case pm:
            return 4;
        case ll:
        case A2:
            return 16;
        case hm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var xn = null
  , xc = null
  , Go = null;
function bm() {
    if (Go)
        return Go;
    var e, t = xc, n = t.length, i, r = "value"in xn ? xn.value : xn.textContent, o = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++)
        ;
    var l = n - e;
    for (i = 1; i <= l && t[n - i] === r[o - i]; i++)
        ;
    return Go = r.slice(e, 1 < i ? 1 - i : void 0)
}
function Wo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function To() {
    return !0
}
function zu() {
    return !1
}
function Ze(e) {
    function t(n, i, r, o, l) {
        this._reactName = n,
        this._targetInst = r,
        this.type = i,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? To : zu,
        this.isPropagationStopped = zu,
        this
    }
    return ue(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = To)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = To)
        },
        persist: function() {},
        isPersistent: To
    }),
    t
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, wc = Ze(ir), so = ue({}, ir, {
    view: 0,
    detail: 0
}), B2 = Ze(so), Ss, Cs, pr, _l = ue({}, so, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (Ss = e.screenX - pr.screenX,
        Cs = e.screenY - pr.screenY) : Cs = Ss = 0,
        pr = e),
        Ss)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Cs
    }
}), Uu = Ze(_l), $2 = ue({}, _l, {
    dataTransfer: 0
}), G2 = Ze($2), W2 = ue({}, so, {
    relatedTarget: 0
}), Es = Ze(W2), X2 = ue({}, ir, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Q2 = Ze(X2), K2 = ue({}, ir, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Y2 = Ze(K2), q2 = ue({}, ir, {
    data: 0
}), Hu = Ze(q2), J2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Z2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, e1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function t1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = e1[e]) ? !!t[e] : !1
}
function Sc() {
    return t1
}
var n1 = ue({}, so, {
    key: function(e) {
        if (e.key) {
            var t = J2[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Wo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Z2[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sc,
    charCode: function(e) {
        return e.type === "keypress" ? Wo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Wo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , i1 = Ze(n1)
  , r1 = ue({}, _l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Bu = Ze(r1)
  , o1 = ue({}, so, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sc
})
  , l1 = Ze(o1)
  , s1 = ue({}, ir, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , a1 = Ze(s1)
  , c1 = ue({}, _l, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , u1 = Ze(c1)
  , d1 = [9, 13, 27, 32]
  , Cc = Gt && "CompositionEvent"in window
  , kr = null;
Gt && "documentMode"in document && (kr = document.documentMode);
var f1 = Gt && "TextEvent"in window && !kr
  , Pm = Gt && (!Cc || kr && 8 < kr && 11 >= kr)
  , $u = " "
  , Gu = !1;
function Tm(e, t) {
    switch (e) {
    case "keyup":
        return d1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Nm(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var wi = !1;
function m1(e, t) {
    switch (e) {
    case "compositionend":
        return Nm(t);
    case "keypress":
        return t.which !== 32 ? null : (Gu = !0,
        $u);
    case "textInput":
        return e = t.data,
        e === $u && Gu ? null : e;
    default:
        return null
    }
}
function p1(e, t) {
    if (wi)
        return e === "compositionend" || !Cc && Tm(e, t) ? (e = bm(),
        Go = xc = xn = null,
        wi = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Pm && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var h1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!h1[e.type] : t === "textarea"
}
function km(e, t, n, i) {
    om(i),
    t = ul(t, "onChange"),
    0 < t.length && (n = new wc("onChange","change",null,n,i),
    e.push({
        event: n,
        listeners: t
    }))
}
var jr = null
  , Hr = null;
function g1(e) {
    Vm(e, 0)
}
function Il(e) {
    var t = Ei(e);
    if (Jf(t))
        return e
}
function v1(e, t) {
    if (e === "change")
        return t
}
var jm = !1;
if (Gt) {
    var bs;
    if (Gt) {
        var Ps = "oninput"in document;
        if (!Ps) {
            var Xu = document.createElement("div");
            Xu.setAttribute("oninput", "return;"),
            Ps = typeof Xu.oninput == "function"
        }
        bs = Ps
    } else
        bs = !1;
    jm = bs && (!document.documentMode || 9 < document.documentMode)
}
function Qu() {
    jr && (jr.detachEvent("onpropertychange", Am),
    Hr = jr = null)
}
function Am(e) {
    if (e.propertyName === "value" && Il(Hr)) {
        var t = [];
        km(t, Hr, e, pc(e)),
        cm(g1, t)
    }
}
function y1(e, t, n) {
    e === "focusin" ? (Qu(),
    jr = t,
    Hr = n,
    jr.attachEvent("onpropertychange", Am)) : e === "focusout" && Qu()
}
function x1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Il(Hr)
}
function w1(e, t) {
    if (e === "click")
        return Il(t)
}
function S1(e, t) {
    if (e === "input" || e === "change")
        return Il(t)
}
function C1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var St = typeof Object.is == "function" ? Object.is : C1;
function Br(e, t) {
    if (St(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , i = Object.keys(t);
    if (n.length !== i.length)
        return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!Ys.call(t, r) || !St(e[r], t[r]))
            return !1
    }
    return !0
}
function Ku(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Yu(e, t) {
    var n = Ku(e);
    e = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (i = e + n.textContent.length,
            e <= t && i >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = i
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ku(n)
    }
}
function Rm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Fm() {
    for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = il(e.document)
    }
    return t
}
function Ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function E1(e) {
    var t = Fm()
      , n = e.focusedElem
      , i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Rm(n.ownerDocument.documentElement, n)) {
        if (i !== null && Ec(n)) {
            if (t = i.start,
            e = i.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var r = n.textContent.length
                  , o = Math.min(i.start, r);
                i = i.end === void 0 ? o : Math.min(i.end, r),
                !e.extend && o > i && (r = i,
                i = o,
                o = r),
                r = Yu(n, o);
                var l = Yu(n, i);
                r && l && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(r.node, r.offset),
                e.removeAllRanges(),
                o > i ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var b1 = Gt && "documentMode"in document && 11 >= document.documentMode
  , Si = null
  , ha = null
  , Ar = null
  , ga = !1;
function qu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ga || Si == null || Si !== il(i) || (i = Si,
    "selectionStart"in i && Ec(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    Ar && Br(Ar, i) || (Ar = i,
    i = ul(ha, "onSelect"),
    0 < i.length && (t = new wc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: i
    }),
    t.target = Si)))
}
function No(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ci = {
    animationend: No("Animation", "AnimationEnd"),
    animationiteration: No("Animation", "AnimationIteration"),
    animationstart: No("Animation", "AnimationStart"),
    transitionend: No("Transition", "TransitionEnd")
}
  , Ts = {}
  , Mm = {};
Gt && (Mm = document.createElement("div").style,
"AnimationEvent"in window || (delete Ci.animationend.animation,
delete Ci.animationiteration.animation,
delete Ci.animationstart.animation),
"TransitionEvent"in window || delete Ci.transitionend.transition);
function Vl(e) {
    if (Ts[e])
        return Ts[e];
    if (!Ci[e])
        return e;
    var t = Ci[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Mm)
            return Ts[e] = t[n];
    return e
}
var Dm = Vl("animationend")
  , Lm = Vl("animationiteration")
  , Om = Vl("animationstart")
  , _m = Vl("transitionend")
  , Im = new Map
  , Ju = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function On(e, t) {
    Im.set(e, t),
    ai(t, [e])
}
for (var Ns = 0; Ns < Ju.length; Ns++) {
    var ks = Ju[Ns]
      , P1 = ks.toLowerCase()
      , T1 = ks[0].toUpperCase() + ks.slice(1);
    On(P1, "on" + T1)
}
On(Dm, "onAnimationEnd");
On(Lm, "onAnimationIteration");
On(Om, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(_m, "onTransitionEnd");
Xi("onMouseEnter", ["mouseout", "mouseover"]);
Xi("onMouseLeave", ["mouseout", "mouseover"]);
Xi("onPointerEnter", ["pointerout", "pointerover"]);
Xi("onPointerLeave", ["pointerout", "pointerover"]);
ai("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ai("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ai("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ai("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ai("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ai("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , N1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function Zu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n,
    P2(i, t, void 0, e),
    e.currentTarget = null
}
function Vm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var i = e[n]
          , r = i.event;
        i = i.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = i.length - 1; 0 <= l; l--) {
                    var s = i[l]
                      , a = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    a !== o && r.isPropagationStopped())
                        break e;
                    Zu(r, s, u),
                    o = a
                }
            else
                for (l = 0; l < i.length; l++) {
                    if (s = i[l],
                    a = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    a !== o && r.isPropagationStopped())
                        break e;
                    Zu(r, s, u),
                    o = a
                }
        }
    }
    if (ol)
        throw e = da,
        ol = !1,
        da = null,
        e
}
function re(e, t) {
    var n = t[Sa];
    n === void 0 && (n = t[Sa] = new Set);
    var i = e + "__bubble";
    n.has(i) || (zm(t, e, 2, !1),
    n.add(i))
}
function js(e, t, n) {
    var i = 0;
    t && (i |= 4),
    zm(n, e, i, t)
}
var ko = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
    if (!e[ko]) {
        e[ko] = !0,
        Xf.forEach(function(n) {
            n !== "selectionchange" && (N1.has(n) || js(n, !1, e),
            js(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ko] || (t[ko] = !0,
        js("selectionchange", !1, t))
    }
}
function zm(e, t, n, i) {
    switch (Em(t)) {
    case 1:
        var r = U2;
        break;
    case 4:
        r = H2;
        break;
    default:
        r = yc
    }
    n = r.bind(null, t, n, e),
    r = void 0,
    !ua || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
    i ? r !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: r
    }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, {
        passive: r
    }) : e.addEventListener(t, n, !1)
}
function As(e, t, n, i, r) {
    var o = i;
    if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
            if (i === null)
                return;
            var l = i.tag;
            if (l === 3 || l === 4) {
                var s = i.stateNode.containerInfo;
                if (s === r || s.nodeType === 8 && s.parentNode === r)
                    break;
                if (l === 4)
                    for (l = i.return; l !== null; ) {
                        var a = l.tag;
                        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo,
                        a === r || a.nodeType === 8 && a.parentNode === r))
                            return;
                        l = l.return
                    }
                for (; s !== null; ) {
                    if (l = Gn(s),
                    l === null)
                        return;
                    if (a = l.tag,
                    a === 5 || a === 6) {
                        i = o = l;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            i = i.return
        }
    cm(function() {
        var u = o
          , d = pc(n)
          , m = [];
        e: {
            var h = Im.get(e);
            if (h !== void 0) {
                var f = wc
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Wo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    f = i1;
                    break;
                case "focusin":
                    w = "focus",
                    f = Es;
                    break;
                case "focusout":
                    w = "blur",
                    f = Es;
                    break;
                case "beforeblur":
                case "afterblur":
                    f = Es;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    f = Uu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    f = G2;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    f = l1;
                    break;
                case Dm:
                case Lm:
                case Om:
                    f = Q2;
                    break;
                case _m:
                    f = a1;
                    break;
                case "scroll":
                    f = B2;
                    break;
                case "wheel":
                    f = u1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    f = Y2;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    f = Bu
                }
                var v = (t & 4) !== 0
                  , S = !v && e === "scroll"
                  , g = v ? h !== null ? h + "Capture" : null : h;
                v = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var C = y.stateNode;
                    if (y.tag === 5 && C !== null && (y = C,
                    g !== null && (C = Ir(p, g),
                    C != null && v.push(Gr(p, C, y)))),
                    S)
                        break;
                    p = p.return
                }
                0 < v.length && (h = new f(h,w,null,n,d),
                m.push({
                    event: h,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                f = e === "mouseout" || e === "pointerout",
                h && n !== aa && (w = n.relatedTarget || n.fromElement) && (Gn(w) || w[Wt]))
                    break e;
                if ((f || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                f ? (w = n.relatedTarget || n.toElement,
                f = u,
                w = w ? Gn(w) : null,
                w !== null && (S = ci(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (f = null,
                w = u),
                f !== w)) {
                    if (v = Uu,
                    C = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Bu,
                    C = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    S = f == null ? h : Ei(f),
                    y = w == null ? h : Ei(w),
                    h = new v(C,p + "leave",f,n,d),
                    h.target = S,
                    h.relatedTarget = y,
                    C = null,
                    Gn(d) === u && (v = new v(g,p + "enter",w,n,d),
                    v.target = y,
                    v.relatedTarget = S,
                    C = v),
                    S = C,
                    f && w)
                        t: {
                            for (v = f,
                            g = w,
                            p = 0,
                            y = v; y; y = vi(y))
                                p++;
                            for (y = 0,
                            C = g; C; C = vi(C))
                                y++;
                            for (; 0 < p - y; )
                                v = vi(v),
                                p--;
                            for (; 0 < y - p; )
                                g = vi(g),
                                y--;
                            for (; p--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = vi(v),
                                g = vi(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    f !== null && ed(m, h, f, v, !1),
                    w !== null && S !== null && ed(m, S, w, v, !0)
                }
            }
            e: {
                if (h = u ? Ei(u) : window,
                f = h.nodeName && h.nodeName.toLowerCase(),
                f === "select" || f === "input" && h.type === "file")
                    var b = v1;
                else if (Wu(h))
                    if (jm)
                        b = S1;
                    else {
                        b = x1;
                        var E = y1
                    }
                else
                    (f = h.nodeName) && f.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (b = w1);
                if (b && (b = b(e, u))) {
                    km(m, b, n, d);
                    break e
                }
                E && E(e, h, u),
                e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && ia(h, "number", h.value)
            }
            switch (E = u ? Ei(u) : window,
            e) {
            case "focusin":
                (Wu(E) || E.contentEditable === "true") && (Si = E,
                ha = u,
                Ar = null);
                break;
            case "focusout":
                Ar = ha = Si = null;
                break;
            case "mousedown":
                ga = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ga = !1,
                qu(m, n, d);
                break;
            case "selectionchange":
                if (b1)
                    break;
            case "keydown":
            case "keyup":
                qu(m, n, d)
            }
            var P;
            if (Cc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                wi ? Tm(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Pm && n.locale !== "ko" && (wi || j !== "onCompositionStart" ? j === "onCompositionEnd" && wi && (P = bm()) : (xn = d,
            xc = "value"in xn ? xn.value : xn.textContent,
            wi = !0)),
            E = ul(u, j),
            0 < E.length && (j = new Hu(j,e,null,n,d),
            m.push({
                event: j,
                listeners: E
            }),
            P ? j.data = P : (P = Nm(n),
            P !== null && (j.data = P)))),
            (P = f1 ? m1(e, n) : p1(e, n)) && (u = ul(u, "onBeforeInput"),
            0 < u.length && (d = new Hu("onBeforeInput","beforeinput",null,n,d),
            m.push({
                event: d,
                listeners: u
            }),
            d.data = P))
        }
        Vm(m, t)
    })
}
function Gr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ul(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
        var r = e
          , o = r.stateNode;
        r.tag === 5 && o !== null && (r = o,
        o = Ir(e, n),
        o != null && i.unshift(Gr(e, o, r)),
        o = Ir(e, t),
        o != null && i.push(Gr(e, o, r))),
        e = e.return
    }
    return i
}
function vi(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ed(e, t, n, i, r) {
    for (var o = t._reactName, l = []; n !== null && n !== i; ) {
        var s = n
          , a = s.alternate
          , u = s.stateNode;
        if (a !== null && a === i)
            break;
        s.tag === 5 && u !== null && (s = u,
        r ? (a = Ir(n, o),
        a != null && l.unshift(Gr(n, a, s))) : r || (a = Ir(n, o),
        a != null && l.push(Gr(n, a, s)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var k1 = /\r\n?/g
  , j1 = /\u0000|\uFFFD/g;
function td(e) {
    return (typeof e == "string" ? e : "" + e).replace(k1, `
`).replace(j1, "")
}
function jo(e, t, n) {
    if (t = td(t),
    td(e) !== t && n)
        throw Error(A(425))
}
function dl() {}
var va = null
  , ya = null;
function xa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var wa = typeof setTimeout == "function" ? setTimeout : void 0
  , A1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , nd = typeof Promise == "function" ? Promise : void 0
  , R1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof nd < "u" ? function(e) {
    return nd.resolve(null).then(e).catch(F1)
}
: wa;
function F1(e) {
    setTimeout(function() {
        throw e
    })
}
function Rs(e, t) {
    var n = t
      , i = 0;
    do {
        var r = n.nextSibling;
        if (e.removeChild(n),
        r && r.nodeType === 8)
            if (n = r.data,
            n === "/$") {
                if (i === 0) {
                    e.removeChild(r),
                    Ur(t);
                    return
                }
                i--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = r
    } while (n);
    Ur(t)
}
function Pn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function id(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var rr = Math.random().toString(36).slice(2)
  , At = "__reactFiber$" + rr
  , Wr = "__reactProps$" + rr
  , Wt = "__reactContainer$" + rr
  , Sa = "__reactEvents$" + rr
  , M1 = "__reactListeners$" + rr
  , D1 = "__reactHandles$" + rr;
function Gn(e) {
    var t = e[At];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Wt] || n[At]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = id(e); e !== null; ) {
                    if (n = e[At])
                        return n;
                    e = id(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ao(e) {
    return e = e[At] || e[Wt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ei(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function zl(e) {
    return e[Wr] || null
}
var Ca = []
  , bi = -1;
function _n(e) {
    return {
        current: e
    }
}
function oe(e) {
    0 > bi || (e.current = Ca[bi],
    Ca[bi] = null,
    bi--)
}
function ne(e, t) {
    bi++,
    Ca[bi] = e.current,
    e.current = t
}
var Rn = {}
  , Ae = _n(Rn)
  , ze = _n(!1)
  , ni = Rn;
function Qi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Rn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {}, o;
    for (o in n)
        r[o] = t[o];
    return i && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function Ue(e) {
    return e = e.childContextTypes,
    e != null
}
function fl() {
    oe(ze),
    oe(Ae)
}
function rd(e, t, n) {
    if (Ae.current !== Rn)
        throw Error(A(168));
    ne(Ae, t),
    ne(ze, n)
}
function Um(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes,
    typeof i.getChildContext != "function")
        return n;
    i = i.getChildContext();
    for (var r in i)
        if (!(r in t))
            throw Error(A(108, y2(e) || "Unknown", r));
    return ue({}, n, i)
}
function ml(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rn,
    ni = Ae.current,
    ne(Ae, e),
    ne(ze, ze.current),
    !0
}
function od(e, t, n) {
    var i = e.stateNode;
    if (!i)
        throw Error(A(169));
    n ? (e = Um(e, t, ni),
    i.__reactInternalMemoizedMergedChildContext = e,
    oe(ze),
    oe(Ae),
    ne(Ae, e)) : oe(ze),
    ne(ze, n)
}
var zt = null
  , Ul = !1
  , Fs = !1;
function Hm(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function L1(e) {
    Ul = !0,
    Hm(e)
}
function In() {
    if (!Fs && zt !== null) {
        Fs = !0;
        var e = 0
          , t = ee;
        try {
            var n = zt;
            for (ee = 1; e < n.length; e++) {
                var i = n[e];
                do
                    i = i(!0);
                while (i !== null)
            }
            zt = null,
            Ul = !1
        } catch (r) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            mm(hc, In),
            r
        } finally {
            ee = t,
            Fs = !1
        }
    }
    return null
}
var Pi = []
  , Ti = 0
  , pl = null
  , hl = 0
  , nt = []
  , it = 0
  , ii = null
  , Ht = 1
  , Bt = "";
function Bn(e, t) {
    Pi[Ti++] = hl,
    Pi[Ti++] = pl,
    pl = e,
    hl = t
}
function Bm(e, t, n) {
    nt[it++] = Ht,
    nt[it++] = Bt,
    nt[it++] = ii,
    ii = e;
    var i = Ht;
    e = Bt;
    var r = 32 - xt(i) - 1;
    i &= ~(1 << r),
    n += 1;
    var o = 32 - xt(t) + r;
    if (30 < o) {
        var l = r - r % 5;
        o = (i & (1 << l) - 1).toString(32),
        i >>= l,
        r -= l,
        Ht = 1 << 32 - xt(t) + r | n << r | i,
        Bt = o + e
    } else
        Ht = 1 << o | n << r | i,
        Bt = e
}
function bc(e) {
    e.return !== null && (Bn(e, 1),
    Bm(e, 1, 0))
}
function Pc(e) {
    for (; e === pl; )
        pl = Pi[--Ti],
        Pi[Ti] = null,
        hl = Pi[--Ti],
        Pi[Ti] = null;
    for (; e === ii; )
        ii = nt[--it],
        nt[it] = null,
        Bt = nt[--it],
        nt[it] = null,
        Ht = nt[--it],
        nt[it] = null
}
var Ke = null
  , Qe = null
  , se = !1
  , yt = null;
function $m(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ld(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ke = e,
        Qe = Pn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ke = e,
        Qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ii !== null ? {
            id: Ht,
            overflow: Bt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = rt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ke = e,
        Qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ea(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ba(e) {
    if (se) {
        var t = Qe;
        if (t) {
            var n = t;
            if (!ld(e, t)) {
                if (Ea(e))
                    throw Error(A(418));
                t = Pn(n.nextSibling);
                var i = Ke;
                t && ld(e, t) ? $m(i, n) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                Ke = e)
            }
        } else {
            if (Ea(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            Ke = e
        }
    }
}
function sd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ke = e
}
function Ao(e) {
    if (e !== Ke)
        return !1;
    if (!se)
        return sd(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !xa(e.type, e.memoizedProps)),
    t && (t = Qe)) {
        if (Ea(e))
            throw Gm(),
            Error(A(418));
        for (; t; )
            $m(e, t),
            t = Pn(t.nextSibling)
    }
    if (sd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Qe = Pn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Qe = null
        }
    } else
        Qe = Ke ? Pn(e.stateNode.nextSibling) : null;
    return !0
}
function Gm() {
    for (var e = Qe; e; )
        e = Pn(e.nextSibling)
}
function Ki() {
    Qe = Ke = null,
    se = !1
}
function Tc(e) {
    yt === null ? yt = [e] : yt.push(e)
}
var O1 = qt.ReactCurrentBatchConfig;
function hr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var i = n.stateNode
            }
            if (!i)
                throw Error(A(147, e));
            var r = i
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var s = r.refs;
                l === null ? delete s[o] : s[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function Ro(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ad(e) {
    var t = e._init;
    return t(e._payload)
}
function Wm(e) {
    function t(g, p) {
        if (e) {
            var y = g.deletions;
            y === null ? (g.deletions = [p],
            g.flags |= 16) : y.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function i(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function r(g, p) {
        return g = jn(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, p, y) {
        return g.index = y,
        e ? (y = g.alternate,
        y !== null ? (y = y.index,
        y < p ? (g.flags |= 2,
        p) : y) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function l(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function s(g, p, y, C) {
        return p === null || p.tag !== 6 ? (p = Vs(y, g.mode, C),
        p.return = g,
        p) : (p = r(p, y),
        p.return = g,
        p)
    }
    function a(g, p, y, C) {
        var b = y.type;
        return b === xi ? d(g, p, y.props.children, C, y.key) : p !== null && (p.elementType === b || typeof b == "object" && b !== null && b.$$typeof === un && ad(b) === p.type) ? (C = r(p, y.props),
        C.ref = hr(g, p, y),
        C.return = g,
        C) : (C = Zo(y.type, y.key, y.props, null, g.mode, C),
        C.ref = hr(g, p, y),
        C.return = g,
        C)
    }
    function u(g, p, y, C) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = zs(y, g.mode, C),
        p.return = g,
        p) : (p = r(p, y.children || []),
        p.return = g,
        p)
    }
    function d(g, p, y, C, b) {
        return p === null || p.tag !== 7 ? (p = ti(y, g.mode, C, b),
        p.return = g,
        p) : (p = r(p, y),
        p.return = g,
        p)
    }
    function m(g, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Vs("" + p, g.mode, y),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case wo:
                return y = Zo(p.type, p.key, p.props, null, g.mode, y),
                y.ref = hr(g, null, p),
                y.return = g,
                y;
            case yi:
                return p = zs(p, g.mode, y),
                p.return = g,
                p;
            case un:
                var C = p._init;
                return m(g, C(p._payload), y)
            }
            if (Cr(p) || ur(p))
                return p = ti(p, g.mode, y, null),
                p.return = g,
                p;
            Ro(g, p)
        }
        return null
    }
    function h(g, p, y, C) {
        var b = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return b !== null ? null : s(g, p, "" + y, C);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case wo:
                return y.key === b ? a(g, p, y, C) : null;
            case yi:
                return y.key === b ? u(g, p, y, C) : null;
            case un:
                return b = y._init,
                h(g, p, b(y._payload), C)
            }
            if (Cr(y) || ur(y))
                return b !== null ? null : d(g, p, y, C, null);
            Ro(g, y)
        }
        return null
    }
    function f(g, p, y, C, b) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return g = g.get(y) || null,
            s(p, g, "" + C, b);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case wo:
                return g = g.get(C.key === null ? y : C.key) || null,
                a(p, g, C, b);
            case yi:
                return g = g.get(C.key === null ? y : C.key) || null,
                u(p, g, C, b);
            case un:
                var E = C._init;
                return f(g, p, y, E(C._payload), b)
            }
            if (Cr(C) || ur(C))
                return g = g.get(y) || null,
                d(p, g, C, b, null);
            Ro(p, C)
        }
        return null
    }
    function w(g, p, y, C) {
        for (var b = null, E = null, P = p, j = p = 0, F = null; P !== null && j < y.length; j++) {
            P.index > j ? (F = P,
            P = null) : F = P.sibling;
            var M = h(g, P, y[j], C);
            if (M === null) {
                P === null && (P = F);
                break
            }
            e && P && M.alternate === null && t(g, P),
            p = o(M, p, j),
            E === null ? b = M : E.sibling = M,
            E = M,
            P = F
        }
        if (j === y.length)
            return n(g, P),
            se && Bn(g, j),
            b;
        if (P === null) {
            for (; j < y.length; j++)
                P = m(g, y[j], C),
                P !== null && (p = o(P, p, j),
                E === null ? b = P : E.sibling = P,
                E = P);
            return se && Bn(g, j),
            b
        }
        for (P = i(g, P); j < y.length; j++)
            F = f(P, g, j, y[j], C),
            F !== null && (e && F.alternate !== null && P.delete(F.key === null ? j : F.key),
            p = o(F, p, j),
            E === null ? b = F : E.sibling = F,
            E = F);
        return e && P.forEach(function(I) {
            return t(g, I)
        }),
        se && Bn(g, j),
        b
    }
    function v(g, p, y, C) {
        var b = ur(y);
        if (typeof b != "function")
            throw Error(A(150));
        if (y = b.call(y),
        y == null)
            throw Error(A(151));
        for (var E = b = null, P = p, j = p = 0, F = null, M = y.next(); P !== null && !M.done; j++,
        M = y.next()) {
            P.index > j ? (F = P,
            P = null) : F = P.sibling;
            var I = h(g, P, M.value, C);
            if (I === null) {
                P === null && (P = F);
                break
            }
            e && P && I.alternate === null && t(g, P),
            p = o(I, p, j),
            E === null ? b = I : E.sibling = I,
            E = I,
            P = F
        }
        if (M.done)
            return n(g, P),
            se && Bn(g, j),
            b;
        if (P === null) {
            for (; !M.done; j++,
            M = y.next())
                M = m(g, M.value, C),
                M !== null && (p = o(M, p, j),
                E === null ? b = M : E.sibling = M,
                E = M);
            return se && Bn(g, j),
            b
        }
        for (P = i(g, P); !M.done; j++,
        M = y.next())
            M = f(P, g, j, M.value, C),
            M !== null && (e && M.alternate !== null && P.delete(M.key === null ? j : M.key),
            p = o(M, p, j),
            E === null ? b = M : E.sibling = M,
            E = M);
        return e && P.forEach(function(L) {
            return t(g, L)
        }),
        se && Bn(g, j),
        b
    }
    function S(g, p, y, C) {
        if (typeof y == "object" && y !== null && y.type === xi && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case wo:
                e: {
                    for (var b = y.key, E = p; E !== null; ) {
                        if (E.key === b) {
                            if (b = y.type,
                            b === xi) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    p = r(E, y.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (E.elementType === b || typeof b == "object" && b !== null && b.$$typeof === un && ad(b) === E.type) {
                                n(g, E.sibling),
                                p = r(E, y.props),
                                p.ref = hr(g, E, y),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    y.type === xi ? (p = ti(y.props.children, g.mode, C, y.key),
                    p.return = g,
                    g = p) : (C = Zo(y.type, y.key, y.props, null, g.mode, C),
                    C.ref = hr(g, p, y),
                    C.return = g,
                    g = C)
                }
                return l(g);
            case yi:
                e: {
                    for (E = y.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                n(g, p.sibling),
                                p = r(p, y.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = zs(y, g.mode, C),
                    p.return = g,
                    g = p
                }
                return l(g);
            case un:
                return E = y._init,
                S(g, p, E(y._payload), C)
            }
            if (Cr(y))
                return w(g, p, y, C);
            if (ur(y))
                return v(g, p, y, C);
            Ro(g, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = r(p, y),
        p.return = g,
        g = p) : (n(g, p),
        p = Vs(y, g.mode, C),
        p.return = g,
        g = p),
        l(g)) : n(g, p)
    }
    return S
}
var Yi = Wm(!0)
  , Xm = Wm(!1)
  , gl = _n(null)
  , vl = null
  , Ni = null
  , Nc = null;
function kc() {
    Nc = Ni = vl = null
}
function jc(e) {
    var t = gl.current;
    oe(gl),
    e._currentValue = t
}
function Pa(e, t, n) {
    for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Di(e, t) {
    vl = e,
    Nc = Ni = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (Nc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ni === null) {
            if (vl === null)
                throw Error(A(308));
            Ni = e,
            vl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ni = Ni.next = e;
    return t
}
var Wn = null;
function Ac(e) {
    Wn === null ? Wn = [e] : Wn.push(e)
}
function Qm(e, t, n, i) {
    var r = t.interleaved;
    return r === null ? (n.next = n,
    Ac(t)) : (n.next = r.next,
    r.next = n),
    t.interleaved = n,
    Xt(e, i)
}
function Xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var dn = !1;
function Rc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Km(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function $t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Tn(e, t, n) {
    var i = e.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    q & 2) {
        var r = i.pending;
        return r === null ? t.next = t : (t.next = r.next,
        r.next = t),
        i.pending = t,
        Xt(e, n)
    }
    return r = i.interleaved,
    r === null ? (t.next = t,
    Ac(i)) : (t.next = r.next,
    r.next = t),
    i.interleaved = t,
    Xt(e, n)
}
function Xo(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes,
        n |= i,
        t.lanes = n,
        gc(e, n)
    }
}
function cd(e, t) {
    var n = e.updateQueue
      , i = e.alternate;
    if (i !== null && (i = i.updateQueue,
    n === i)) {
        var r = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? r = o = l : o = o.next = l,
                n = n.next
            } while (n !== null);
            o === null ? r = o = t : o = o.next = t
        } else
            r = o = t;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: o,
            shared: i.shared,
            effects: i.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function yl(e, t, n, i) {
    var r = e.updateQueue;
    dn = !1;
    var o = r.firstBaseUpdate
      , l = r.lastBaseUpdate
      , s = r.shared.pending;
    if (s !== null) {
        r.shared.pending = null;
        var a = s
          , u = a.next;
        a.next = null,
        l === null ? o = u : l.next = u,
        l = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        s = d.lastBaseUpdate,
        s !== l && (s === null ? d.firstBaseUpdate = u : s.next = u,
        d.lastBaseUpdate = a))
    }
    if (o !== null) {
        var m = r.baseState;
        l = 0,
        d = u = a = null,
        s = o;
        do {
            var h = s.lane
              , f = s.eventTime;
            if ((i & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: f,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e
                      , v = s;
                    switch (h = t,
                    f = n,
                    v.tag) {
                    case 1:
                        if (w = v.payload,
                        typeof w == "function") {
                            m = w.call(f, m, h);
                            break e
                        }
                        m = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = v.payload,
                        h = typeof w == "function" ? w.call(f, m, h) : w,
                        h == null)
                            break e;
                        m = ue({}, m, h);
                        break e;
                    case 2:
                        dn = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                h = r.effects,
                h === null ? r.effects = [s] : h.push(s))
            } else
                f = {
                    eventTime: f,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                d === null ? (u = d = f,
                a = m) : d = d.next = f,
                l |= h;
            if (s = s.next,
            s === null) {
                if (s = r.shared.pending,
                s === null)
                    break;
                h = s,
                s = h.next,
                h.next = null,
                r.lastBaseUpdate = h,
                r.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = m),
        r.baseState = a,
        r.firstBaseUpdate = u,
        r.lastBaseUpdate = d,
        t = r.shared.interleaved,
        t !== null) {
            r = t;
            do
                l |= r.lane,
                r = r.next;
            while (r !== t)
        } else
            o === null && (r.shared.lanes = 0);
        oi |= l,
        e.lanes = l,
        e.memoizedState = m
    }
}
function ud(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var i = e[t]
              , r = i.callback;
            if (r !== null) {
                if (i.callback = null,
                i = n,
                typeof r != "function")
                    throw Error(A(191, r));
                r.call(i)
            }
        }
}
var co = {}
  , Mt = _n(co)
  , Xr = _n(co)
  , Qr = _n(co);
function Xn(e) {
    if (e === co)
        throw Error(A(174));
    return e
}
function Fc(e, t) {
    switch (ne(Qr, t),
    ne(Xr, e),
    ne(Mt, co),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oa(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = oa(t, e)
    }
    oe(Mt),
    ne(Mt, t)
}
function qi() {
    oe(Mt),
    oe(Xr),
    oe(Qr)
}
function Ym(e) {
    Xn(Qr.current);
    var t = Xn(Mt.current)
      , n = oa(t, e.type);
    t !== n && (ne(Xr, e),
    ne(Mt, n))
}
function Mc(e) {
    Xr.current === e && (oe(Mt),
    oe(Xr))
}
var ae = _n(0);
function xl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ms = [];
function Dc() {
    for (var e = 0; e < Ms.length; e++)
        Ms[e]._workInProgressVersionPrimary = null;
    Ms.length = 0
}
var Qo = qt.ReactCurrentDispatcher
  , Ds = qt.ReactCurrentBatchConfig
  , ri = 0
  , ce = null
  , ge = null
  , xe = null
  , wl = !1
  , Rr = !1
  , Kr = 0
  , _1 = 0;
function Te() {
    throw Error(A(321))
}
function Lc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!St(e[n], t[n]))
            return !1;
    return !0
}
function Oc(e, t, n, i, r, o) {
    if (ri = o,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Qo.current = e === null || e.memoizedState === null ? U1 : H1,
    e = n(i, r),
    Rr) {
        o = 0;
        do {
            if (Rr = !1,
            Kr = 0,
            25 <= o)
                throw Error(A(301));
            o += 1,
            xe = ge = null,
            t.updateQueue = null,
            Qo.current = B1,
            e = n(i, r)
        } while (Rr)
    }
    if (Qo.current = Sl,
    t = ge !== null && ge.next !== null,
    ri = 0,
    xe = ge = ce = null,
    wl = !1,
    t)
        throw Error(A(300));
    return e
}
function _c() {
    var e = Kr !== 0;
    return Kr = 0,
    e
}
function Tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? ce.memoizedState = xe = e : xe = xe.next = e,
    xe
}
function st() {
    if (ge === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ge.next;
    var t = xe === null ? ce.memoizedState : xe.next;
    if (t !== null)
        xe = t,
        ge = e;
    else {
        if (e === null)
            throw Error(A(310));
        ge = e,
        e = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        },
        xe === null ? ce.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}
function Yr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ls(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var i = ge
      , r = i.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (r !== null) {
            var l = r.next;
            r.next = o.next,
            o.next = l
        }
        i.baseQueue = r = o,
        n.pending = null
    }
    if (r !== null) {
        o = r.next,
        i = i.baseState;
        var s = l = null
          , a = null
          , u = o;
        do {
            var d = u.lane;
            if ((ri & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                i = u.hasEagerState ? u.eagerState : e(i, u.action);
            else {
                var m = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = m,
                l = i) : a = a.next = m,
                ce.lanes |= d,
                oi |= d
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? l = i : a.next = s,
        St(i, t.memoizedState) || (Ve = !0),
        t.memoizedState = i,
        t.baseState = l,
        t.baseQueue = a,
        n.lastRenderedState = i
    }
    if (e = n.interleaved,
    e !== null) {
        r = e;
        do
            o = r.lane,
            ce.lanes |= o,
            oi |= o,
            r = r.next;
        while (r !== e)
    } else
        r === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Os(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch
      , r = n.pending
      , o = t.memoizedState;
    if (r !== null) {
        n.pending = null;
        var l = r = r.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== r);
        St(o, t.memoizedState) || (Ve = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, i]
}
function qm() {}
function Jm(e, t) {
    var n = ce
      , i = st()
      , r = t()
      , o = !St(i.memoizedState, r);
    if (o && (i.memoizedState = r,
    Ve = !0),
    i = i.queue,
    Ic(tp.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || o || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        qr(9, ep.bind(null, n, i, r, t), void 0, null),
        we === null)
            throw Error(A(349));
        ri & 30 || Zm(n, t, r)
    }
    return r
}
function Zm(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ep(e, t, n, i) {
    t.value = n,
    t.getSnapshot = i,
    np(t) && ip(e)
}
function tp(e, t, n) {
    return n(function() {
        np(t) && ip(e)
    })
}
function np(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !St(e, n)
    } catch {
        return !0
    }
}
function ip(e) {
    var t = Xt(e, 1);
    t !== null && wt(t, e, 1, -1)
}
function dd(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = z1.bind(null, ce, e),
    [t.memoizedState, e]
}
function qr(e, t, n, i) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: i,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (i = n.next,
    n.next = e,
    e.next = i,
    t.lastEffect = e)),
    e
}
function rp() {
    return st().memoizedState
}
function Ko(e, t, n, i) {
    var r = Tt();
    ce.flags |= e,
    r.memoizedState = qr(1 | t, n, void 0, i === void 0 ? null : i)
}
function Hl(e, t, n, i) {
    var r = st();
    i = i === void 0 ? null : i;
    var o = void 0;
    if (ge !== null) {
        var l = ge.memoizedState;
        if (o = l.destroy,
        i !== null && Lc(i, l.deps)) {
            r.memoizedState = qr(t, n, o, i);
            return
        }
    }
    ce.flags |= e,
    r.memoizedState = qr(1 | t, n, o, i)
}
function fd(e, t) {
    return Ko(8390656, 8, e, t)
}
function Ic(e, t) {
    return Hl(2048, 8, e, t)
}
function op(e, t) {
    return Hl(4, 2, e, t)
}
function lp(e, t) {
    return Hl(4, 4, e, t)
}
function sp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ap(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Hl(4, 4, sp.bind(null, t, e), n)
}
function Vc() {}
function cp(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Lc(t, i[1]) ? i[0] : (n.memoizedState = [e, t],
    e)
}
function up(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Lc(t, i[1]) ? i[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function dp(e, t, n) {
    return ri & 21 ? (St(n, t) || (n = gm(),
    ce.lanes |= n,
    oi |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function I1(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var i = Ds.transition;
    Ds.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        Ds.transition = i
    }
}
function fp() {
    return st().memoizedState
}
function V1(e, t, n) {
    var i = kn(e);
    if (n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    mp(e))
        pp(t, n);
    else if (n = Qm(e, t, n, i),
    n !== null) {
        var r = De();
        wt(n, e, i, r),
        hp(n, t, i)
    }
}
function z1(e, t, n) {
    var i = kn(e)
      , r = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (mp(e))
        pp(t, r);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , s = o(l, n);
                if (r.hasEagerState = !0,
                r.eagerState = s,
                St(s, l)) {
                    var a = t.interleaved;
                    a === null ? (r.next = r,
                    Ac(t)) : (r.next = a.next,
                    a.next = r),
                    t.interleaved = r;
                    return
                }
            } catch {} finally {}
        n = Qm(e, t, r, i),
        n !== null && (r = De(),
        wt(n, e, i, r),
        hp(n, t, i))
    }
}
function mp(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function pp(e, t) {
    Rr = wl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function hp(e, t, n) {
    if (n & 4194240) {
        var i = t.lanes;
        i &= e.pendingLanes,
        n |= i,
        t.lanes = n,
        gc(e, n)
    }
}
var Sl = {
    readContext: lt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
  , U1 = {
    readContext: lt,
    useCallback: function(e, t) {
        return Tt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: fd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ko(4194308, 4, sp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ko(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ko(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Tt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var i = Tt();
        return t = n !== void 0 ? n(t) : t,
        i.memoizedState = i.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        i.queue = e,
        e = e.dispatch = V1.bind(null, ce, e),
        [i.memoizedState, e]
    },
    useRef: function(e) {
        var t = Tt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: dd,
    useDebugValue: Vc,
    useDeferredValue: function(e) {
        return Tt().memoizedState = e
    },
    useTransition: function() {
        var e = dd(!1)
          , t = e[0];
        return e = I1.bind(null, e[1]),
        Tt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var i = ce
          , r = Tt();
        if (se) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = t(),
            we === null)
                throw Error(A(349));
            ri & 30 || Zm(i, t, n)
        }
        r.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return r.queue = o,
        fd(tp.bind(null, i, o, e), [e]),
        i.flags |= 2048,
        qr(9, ep.bind(null, i, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Tt()
          , t = we.identifierPrefix;
        if (se) {
            var n = Bt
              , i = Ht;
            n = (i & ~(1 << 32 - xt(i) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Kr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , H1 = {
    readContext: lt,
    useCallback: cp,
    useContext: lt,
    useEffect: Ic,
    useImperativeHandle: ap,
    useInsertionEffect: op,
    useLayoutEffect: lp,
    useMemo: up,
    useReducer: Ls,
    useRef: rp,
    useState: function() {
        return Ls(Yr)
    },
    useDebugValue: Vc,
    useDeferredValue: function(e) {
        var t = st();
        return dp(t, ge.memoizedState, e)
    },
    useTransition: function() {
        var e = Ls(Yr)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: qm,
    useSyncExternalStore: Jm,
    useId: fp,
    unstable_isNewReconciler: !1
}
  , B1 = {
    readContext: lt,
    useCallback: cp,
    useContext: lt,
    useEffect: Ic,
    useImperativeHandle: ap,
    useInsertionEffect: op,
    useLayoutEffect: lp,
    useMemo: up,
    useReducer: Os,
    useRef: rp,
    useState: function() {
        return Os(Yr)
    },
    useDebugValue: Vc,
    useDeferredValue: function(e) {
        var t = st();
        return ge === null ? t.memoizedState = e : dp(t, ge.memoizedState, e)
    },
    useTransition: function() {
        var e = Os(Yr)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: qm,
    useSyncExternalStore: Jm,
    useId: fp,
    unstable_isNewReconciler: !1
};
function mt(e, t) {
    if (e && e.defaultProps) {
        t = ue({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ta(e, t, n, i) {
    t = e.memoizedState,
    n = n(i, t),
    n = n == null ? t : ue({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Bl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ci(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var i = De()
          , r = kn(e)
          , o = $t(i, r);
        o.payload = t,
        n != null && (o.callback = n),
        t = Tn(e, o, r),
        t !== null && (wt(t, e, r, i),
        Xo(t, e, r))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var i = De()
          , r = kn(e)
          , o = $t(i, r);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Tn(e, o, r),
        t !== null && (wt(t, e, r, i),
        Xo(t, e, r))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = De()
          , i = kn(e)
          , r = $t(n, i);
        r.tag = 2,
        t != null && (r.callback = t),
        t = Tn(e, r, i),
        t !== null && (wt(t, e, i, n),
        Xo(t, e, i))
    }
};
function md(e, t, n, i, r, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Br(n, i) || !Br(r, o) : !0
}
function gp(e, t, n) {
    var i = !1
      , r = Rn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = lt(o) : (r = Ue(t) ? ni : Ae.current,
    i = t.contextTypes,
    o = (i = i != null) ? Qi(e, r) : Rn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Bl,
    e.stateNode = t,
    t._reactInternals = e,
    i && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = r,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function pd(e, t, n, i) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Bl.enqueueReplaceState(t, t.state, null)
}
function Na(e, t, n, i) {
    var r = e.stateNode;
    r.props = n,
    r.state = e.memoizedState,
    r.refs = {},
    Rc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? r.context = lt(o) : (o = Ue(t) ? ni : Ae.current,
    r.context = Qi(e, o)),
    r.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Ta(e, t, o, n),
    r.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    t !== r.state && Bl.enqueueReplaceState(r, r.state, null),
    yl(e, n, r, i),
    r.state = e.memoizedState),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ji(e, t) {
    try {
        var n = ""
          , i = t;
        do
            n += v2(i),
            i = i.return;
        while (i);
        var r = n
    } catch (o) {
        r = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: r,
        digest: null
    }
}
function _s(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ka(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var $1 = typeof WeakMap == "function" ? WeakMap : Map;
function vp(e, t, n) {
    n = $t(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var i = t.value;
    return n.callback = function() {
        El || (El = !0,
        Ia = i),
        ka(e, t)
    }
    ,
    n
}
function yp(e, t, n) {
    n = $t(-1, n),
    n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = t.value;
        n.payload = function() {
            return i(r)
        }
        ,
        n.callback = function() {
            ka(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ka(e, t),
        typeof i != "function" && (Nn === null ? Nn = new Set([this]) : Nn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function hd(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
        i = e.pingCache = new $1;
        var r = new Set;
        i.set(t, r)
    } else
        r = i.get(t),
        r === void 0 && (r = new Set,
        i.set(t, r));
    r.has(n) || (r.add(n),
    e = rg.bind(null, e, t, n),
    t.then(e, e))
}
function gd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function vd(e, t, n, i, r) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = r,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1),
    t.tag = 2,
    Tn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var G1 = qt.ReactCurrentOwner
  , Ve = !1;
function Fe(e, t, n, i) {
    t.child = e === null ? Xm(t, null, n, i) : Yi(t, e.child, n, i)
}
function yd(e, t, n, i, r) {
    n = n.render;
    var o = t.ref;
    return Di(t, r),
    i = Oc(e, t, n, i, o, r),
    n = _c(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    Qt(e, t, r)) : (se && n && bc(t),
    t.flags |= 1,
    Fe(e, t, i, r),
    t.child)
}
function xd(e, t, n, i, r) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Xc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        xp(e, t, o, i, r)) : (e = Zo(n.type, null, i, t, t.mode, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & r)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Br,
        n(l, i) && e.ref === t.ref)
            return Qt(e, t, r)
    }
    return t.flags |= 1,
    e = jn(o, i),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function xp(e, t, n, i, r) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Br(o, i) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = i = o,
            (e.lanes & r) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                Qt(e, t, r)
    }
    return ja(e, t, n, i, r)
}
function wp(e, t, n) {
    var i = t.pendingProps
      , r = i.children
      , o = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(ji, We),
            We |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(ji, We),
                We |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            i = o !== null ? o.baseLanes : n,
            ne(ji, We),
            We |= i
        }
    else
        o !== null ? (i = o.baseLanes | n,
        t.memoizedState = null) : i = n,
        ne(ji, We),
        We |= i;
    return Fe(e, t, r, n),
    t.child
}
function Sp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ja(e, t, n, i, r) {
    var o = Ue(n) ? ni : Ae.current;
    return o = Qi(t, o),
    Di(t, r),
    n = Oc(e, t, n, i, o, r),
    i = _c(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    Qt(e, t, r)) : (se && i && bc(t),
    t.flags |= 1,
    Fe(e, t, n, r),
    t.child)
}
function wd(e, t, n, i, r) {
    if (Ue(n)) {
        var o = !0;
        ml(t)
    } else
        o = !1;
    if (Di(t, r),
    t.stateNode === null)
        Yo(e, t),
        gp(t, n, i),
        Na(t, n, i, r),
        i = !0;
    else if (e === null) {
        var l = t.stateNode
          , s = t.memoizedProps;
        l.props = s;
        var a = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Ue(n) ? ni : Ae.current,
        u = Qi(t, u));
        var d = n.getDerivedStateFromProps
          , m = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== i || a !== u) && pd(t, l, i, u),
        dn = !1;
        var h = t.memoizedState;
        l.state = h,
        yl(t, i, l, r),
        a = t.memoizedState,
        s !== i || h !== a || ze.current || dn ? (typeof d == "function" && (Ta(t, n, d, i),
        a = t.memoizedState),
        (s = dn || md(t, n, s, i, h, a, u)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = i,
        t.memoizedState = a),
        l.props = i,
        l.state = a,
        l.context = u,
        i = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        i = !1)
    } else {
        l = t.stateNode,
        Km(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : mt(t.type, s),
        l.props = u,
        m = t.pendingProps,
        h = l.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = lt(a) : (a = Ue(n) ? ni : Ae.current,
        a = Qi(t, a));
        var f = n.getDerivedStateFromProps;
        (d = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== m || h !== a) && pd(t, l, i, a),
        dn = !1,
        h = t.memoizedState,
        l.state = h,
        yl(t, i, l, r);
        var w = t.memoizedState;
        s !== m || h !== w || ze.current || dn ? (typeof f == "function" && (Ta(t, n, f, i),
        w = t.memoizedState),
        (u = dn || md(t, n, u, i, h, w, a) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(i, w, a),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(i, w, a)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = i,
        t.memoizedState = w),
        l.props = i,
        l.state = w,
        l.context = a,
        i = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        i = !1)
    }
    return Aa(e, t, n, i, o, r)
}
function Aa(e, t, n, i, r, o) {
    Sp(e, t);
    var l = (t.flags & 128) !== 0;
    if (!i && !l)
        return r && od(t, n, !1),
        Qt(e, t, o);
    i = t.stateNode,
    G1.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Yi(t, e.child, null, o),
    t.child = Yi(t, null, s, o)) : Fe(e, t, s, o),
    t.memoizedState = i.state,
    r && od(t, n, !0),
    t.child
}
function Cp(e) {
    var t = e.stateNode;
    t.pendingContext ? rd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rd(e, t.context, !1),
    Fc(e, t.containerInfo)
}
function Sd(e, t, n, i, r) {
    return Ki(),
    Tc(r),
    t.flags |= 256,
    Fe(e, t, n, i),
    t.child
}
var Ra = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Fa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ep(e, t, n) {
    var i = t.pendingProps, r = ae.current, o = !1, l = (t.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    s ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1),
    ne(ae, r & 1),
    e === null)
        return ba(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = i.children,
        e = i.fallback,
        o ? (i = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(i & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = Wl(l, i, 0, null),
        e = ti(e, i, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Fa(n),
        t.memoizedState = Ra,
        e) : zc(t, l));
    if (r = e.memoizedState,
    r !== null && (s = r.dehydrated,
    s !== null))
        return W1(e, t, l, i, s, r, n);
    if (o) {
        o = i.fallback,
        l = t.mode,
        r = e.child,
        s = r.sibling;
        var a = {
            mode: "hidden",
            children: i.children
        };
        return !(l & 1) && t.child !== r ? (i = t.child,
        i.childLanes = 0,
        i.pendingProps = a,
        t.deletions = null) : (i = jn(r, a),
        i.subtreeFlags = r.subtreeFlags & 14680064),
        s !== null ? o = jn(s, o) : (o = ti(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        i.return = t,
        i.sibling = o,
        t.child = i,
        i = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? Fa(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Ra,
        i
    }
    return o = e.child,
    e = o.sibling,
    i = jn(o, {
        mode: "visible",
        children: i.children
    }),
    !(t.mode & 1) && (i.lanes = n),
    i.return = t,
    i.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = i,
    t.memoizedState = null,
    i
}
function zc(e, t) {
    return t = Wl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Fo(e, t, n, i) {
    return i !== null && Tc(i),
    Yi(t, e.child, null, n),
    e = zc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function W1(e, t, n, i, r, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        i = _s(Error(A(422))),
        Fo(e, t, l, i)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = i.fallback,
        r = t.mode,
        i = Wl({
            mode: "visible",
            children: i.children
        }, r, 0, null),
        o = ti(o, r, l, null),
        o.flags |= 2,
        i.return = t,
        o.return = t,
        i.sibling = o,
        t.child = i,
        t.mode & 1 && Yi(t, e.child, null, l),
        t.child.memoizedState = Fa(l),
        t.memoizedState = Ra,
        o);
    if (!(t.mode & 1))
        return Fo(e, t, l, null);
    if (r.data === "$!") {
        if (i = r.nextSibling && r.nextSibling.dataset,
        i)
            var s = i.dgst;
        return i = s,
        o = Error(A(419)),
        i = _s(o, i, void 0),
        Fo(e, t, l, i)
    }
    if (s = (l & e.childLanes) !== 0,
    Ve || s) {
        if (i = we,
        i !== null) {
            switch (l & -l) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (i.suspendedLanes | l) ? 0 : r,
            r !== 0 && r !== o.retryLane && (o.retryLane = r,
            Xt(e, r),
            wt(i, e, r, -1))
        }
        return Wc(),
        i = _s(Error(A(421))),
        Fo(e, t, l, i)
    }
    return r.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = og.bind(null, e),
    r._reactRetry = t,
    null) : (e = o.treeContext,
    Qe = Pn(r.nextSibling),
    Ke = t,
    se = !0,
    yt = null,
    e !== null && (nt[it++] = Ht,
    nt[it++] = Bt,
    nt[it++] = ii,
    Ht = e.id,
    Bt = e.overflow,
    ii = t),
    t = zc(t, i.children),
    t.flags |= 4096,
    t)
}
function Cd(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t),
    Pa(e.return, t, n)
}
function Is(e, t, n, i, r) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = i,
    o.tail = n,
    o.tailMode = r)
}
function bp(e, t, n) {
    var i = t.pendingProps
      , r = i.revealOrder
      , o = i.tail;
    if (Fe(e, t, i.children, n),
    i = ae.current,
    i & 2)
        i = i & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Cd(e, n, t);
                else if (e.tag === 19)
                    Cd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        i &= 1
    }
    if (ne(ae, i),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (n = t.child,
            r = null; n !== null; )
                e = n.alternate,
                e !== null && xl(e) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = t.child,
            t.child = null) : (r = n.sibling,
            n.sibling = null),
            Is(t, !1, r, n, o);
            break;
        case "backwards":
            for (n = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && xl(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = n,
                n = r,
                r = e
            }
            Is(t, !0, n, null, o);
            break;
        case "together":
            Is(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Yo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    oi |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        n = jn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = jn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function X1(e, t, n) {
    switch (t.tag) {
    case 3:
        Cp(t),
        Ki();
        break;
    case 5:
        Ym(t);
        break;
    case 1:
        Ue(t.type) && ml(t);
        break;
    case 4:
        Fc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var i = t.type._context
          , r = t.memoizedProps.value;
        ne(gl, i._currentValue),
        i._currentValue = r;
        break;
    case 13:
        if (i = t.memoizedState,
        i !== null)
            return i.dehydrated !== null ? (ne(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ep(e, t, n) : (ne(ae, ae.current & 1),
            e = Qt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ae, ae.current & 1);
        break;
    case 19:
        if (i = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (i)
                return bp(e, t, n);
            t.flags |= 128
        }
        if (r = t.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        ne(ae, ae.current),
        i)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        wp(e, t, n)
    }
    return Qt(e, t, n)
}
var Pp, Ma, Tp, Np;
Pp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ma = function() {}
;
Tp = function(e, t, n, i) {
    var r = e.memoizedProps;
    if (r !== i) {
        e = t.stateNode,
        Xn(Mt.current);
        var o = null;
        switch (n) {
        case "input":
            r = ta(e, r),
            i = ta(e, i),
            o = [];
            break;
        case "select":
            r = ue({}, r, {
                value: void 0
            }),
            i = ue({}, i, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            r = ra(e, r),
            i = ra(e, i),
            o = [];
            break;
        default:
            typeof r.onClick != "function" && typeof i.onClick == "function" && (e.onclick = dl)
        }
        la(n, i);
        var l;
        n = null;
        for (u in r)
            if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
                if (u === "style") {
                    var s = r[u];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Or.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in i) {
            var a = i[u];
            if (s = r != null ? r[u] : void 0,
            i.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in a)
                            a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}),
                            n[l] = a[l])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    s = s ? s.__html : void 0,
                    a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Or.hasOwnProperty(u) ? (a != null && u === "onScroll" && re("scroll", e),
                    o || s === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Np = function(e, t, n, i) {
    n !== i && (t.flags |= 4)
}
;
function gr(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var i = null; n !== null; )
                n.alternate !== null && (i = n),
                n = n.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
        }
}
function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , i = 0;
    if (t)
        for (var r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags & 14680064,
            i |= r.flags & 14680064,
            r.return = e,
            r = r.sibling;
    else
        for (r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags,
            i |= r.flags,
            r.return = e,
            r = r.sibling;
    return e.subtreeFlags |= i,
    e.childLanes = n,
    t
}
function Q1(e, t, n) {
    var i = t.pendingProps;
    switch (Pc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ne(t),
        null;
    case 1:
        return Ue(t.type) && fl(),
        Ne(t),
        null;
    case 3:
        return i = t.stateNode,
        qi(),
        oe(ze),
        oe(Ae),
        Dc(),
        i.pendingContext && (i.context = i.pendingContext,
        i.pendingContext = null),
        (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        yt !== null && (Ua(yt),
        yt = null))),
        Ma(e, t),
        Ne(t),
        null;
    case 5:
        Mc(t);
        var r = Xn(Qr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Tp(e, t, n, i, r),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!i) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return Ne(t),
                null
            }
            if (e = Xn(Mt.current),
            Ao(t)) {
                i = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (i[At] = t,
                i[Wr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    re("cancel", i),
                    re("close", i);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    re("load", i);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < br.length; r++)
                        re(br[r], i);
                    break;
                case "source":
                    re("error", i);
                    break;
                case "img":
                case "image":
                case "link":
                    re("error", i),
                    re("load", i);
                    break;
                case "details":
                    re("toggle", i);
                    break;
                case "input":
                    Ru(i, o),
                    re("invalid", i);
                    break;
                case "select":
                    i._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    re("invalid", i);
                    break;
                case "textarea":
                    Mu(i, o),
                    re("invalid", i)
                }
                la(n, o),
                r = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var s = o[l];
                        l === "children" ? typeof s == "string" ? i.textContent !== s && (o.suppressHydrationWarning !== !0 && jo(i.textContent, s, e),
                        r = ["children", s]) : typeof s == "number" && i.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && jo(i.textContent, s, e),
                        r = ["children", "" + s]) : Or.hasOwnProperty(l) && s != null && l === "onScroll" && re("scroll", i)
                    }
                switch (n) {
                case "input":
                    So(i),
                    Fu(i, o, !0);
                    break;
                case "textarea":
                    So(i),
                    Du(i);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (i.onclick = dl)
                }
                i = r,
                t.updateQueue = i,
                i !== null && (t.flags |= 4)
            } else {
                l = r.nodeType === 9 ? r : r.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = tm(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = l.createElement(n, {
                    is: i.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : e = l.createElementNS(e, n),
                e[At] = t,
                e[Wr] = i,
                Pp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = sa(n, i),
                    n) {
                    case "dialog":
                        re("cancel", e),
                        re("close", e),
                        r = i;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        re("load", e),
                        r = i;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < br.length; r++)
                            re(br[r], e);
                        r = i;
                        break;
                    case "source":
                        re("error", e),
                        r = i;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        re("error", e),
                        re("load", e),
                        r = i;
                        break;
                    case "details":
                        re("toggle", e),
                        r = i;
                        break;
                    case "input":
                        Ru(e, i),
                        r = ta(e, i),
                        re("invalid", e);
                        break;
                    case "option":
                        r = i;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!i.multiple
                        },
                        r = ue({}, i, {
                            value: void 0
                        }),
                        re("invalid", e);
                        break;
                    case "textarea":
                        Mu(e, i),
                        r = ra(e, i),
                        re("invalid", e);
                        break;
                    default:
                        r = i
                    }
                    la(n, r),
                    s = r;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "style" ? rm(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && nm(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && _r(e, a) : typeof a == "number" && _r(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Or.hasOwnProperty(o) ? a != null && o === "onScroll" && re("scroll", e) : a != null && uc(e, o, a, l))
                        }
                    switch (n) {
                    case "input":
                        So(e),
                        Fu(e, i, !1);
                        break;
                    case "textarea":
                        So(e),
                        Du(e);
                        break;
                    case "option":
                        i.value != null && e.setAttribute("value", "" + An(i.value));
                        break;
                    case "select":
                        e.multiple = !!i.multiple,
                        o = i.value,
                        o != null ? Ai(e, !!i.multiple, o, !1) : i.defaultValue != null && Ai(e, !!i.multiple, i.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (e.onclick = dl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                }
                i && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ne(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Np(e, t, e.memoizedProps, i);
        else {
            if (typeof i != "string" && t.stateNode === null)
                throw Error(A(166));
            if (n = Xn(Qr.current),
            Xn(Mt.current),
            Ao(t)) {
                if (i = t.stateNode,
                n = t.memoizedProps,
                i[At] = t,
                (o = i.nodeValue !== n) && (e = Ke,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        jo(i.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && jo(i.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i),
                i[At] = t,
                t.stateNode = i
        }
        return Ne(t),
        null;
    case 13:
        if (oe(ae),
        i = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && Qe !== null && t.mode & 1 && !(t.flags & 128))
                Gm(),
                Ki(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ao(t),
            i !== null && i.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(A(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(A(317));
                    o[At] = t
                } else
                    Ki(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ne(t),
                o = !1
            } else
                yt !== null && (Ua(yt),
                yt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (i = i !== null,
        i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Wc())),
        t.updateQueue !== null && (t.flags |= 4),
        Ne(t),
        null);
    case 4:
        return qi(),
        Ma(e, t),
        e === null && $r(t.stateNode.containerInfo),
        Ne(t),
        null;
    case 10:
        return jc(t.type._context),
        Ne(t),
        null;
    case 17:
        return Ue(t.type) && fl(),
        Ne(t),
        null;
    case 19:
        if (oe(ae),
        o = t.memoizedState,
        o === null)
            return Ne(t),
            null;
        if (i = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (i)
                gr(o, !1);
            else {
                if (ye !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = xl(e),
                        l !== null) {
                            for (t.flags |= 128,
                            gr(o, !1),
                            i = l.updateQueue,
                            i !== null && (t.updateQueue = i,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            i = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = i,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && me() > Zi && (t.flags |= 128,
                i = !0,
                gr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!i)
                if (e = xl(l),
                e !== null) {
                    if (t.flags |= 128,
                    i = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    gr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !se)
                        return Ne(t),
                        null
                } else
                    2 * me() - o.renderingStartTime > Zi && n !== 1073741824 && (t.flags |= 128,
                    i = !0,
                    gr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = me(),
        t.sibling = null,
        n = ae.current,
        ne(ae, i ? n & 1 | 2 : n & 1),
        t) : (Ne(t),
        null);
    case 22:
    case 23:
        return Gc(),
        i = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== i && (t.flags |= 8192),
        i && t.mode & 1 ? We & 1073741824 && (Ne(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function K1(e, t) {
    switch (Pc(t),
    t.tag) {
    case 1:
        return Ue(t.type) && fl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return qi(),
        oe(ze),
        oe(Ae),
        Dc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Mc(t),
        null;
    case 13:
        if (oe(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            Ki()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return oe(ae),
        null;
    case 4:
        return qi(),
        null;
    case 10:
        return jc(t.type._context),
        null;
    case 22:
    case 23:
        return Gc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Mo = !1
  , je = !1
  , Y1 = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function ki(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (i) {
                fe(e, t, i)
            }
        else
            n.current = null
}
function Da(e, t, n) {
    try {
        n()
    } catch (i) {
        fe(e, t, i)
    }
}
var Ed = !1;
function q1(e, t) {
    if (va = al,
    e = Fm(),
    Ec(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var r = i.anchorOffset
                      , o = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , s = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , m = e
                      , h = null;
                    t: for (; ; ) {
                        for (var f; m !== n || r !== 0 && m.nodeType !== 3 || (s = l + r),
                        m !== o || i !== 0 && m.nodeType !== 3 || (a = l + i),
                        m.nodeType === 3 && (l += m.nodeValue.length),
                        (f = m.firstChild) !== null; )
                            h = m,
                            m = f;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (h === n && ++u === r && (s = l),
                            h === o && ++d === i && (a = l),
                            (f = m.nextSibling) !== null)
                                break;
                            m = h,
                            h = m.parentNode
                        }
                        m = f
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ya = {
        focusedElem: e,
        selectionRange: n
    },
    al = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var v = w.memoizedProps
                                  , S = w.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : mt(t.type, v), S);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (C) {
                    fe(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return w = Ed,
    Ed = !1,
    w
}
function Fr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null,
    i !== null) {
        var r = i = i.next;
        do {
            if ((r.tag & e) === e) {
                var o = r.destroy;
                r.destroy = void 0,
                o !== void 0 && Da(t, n, o)
            }
            r = r.next
        } while (r !== i)
    }
}
function $l(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== t)
    }
}
function La(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function kp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    kp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[At],
    delete t[Wr],
    delete t[Sa],
    delete t[M1],
    delete t[D1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function jp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function bd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || jp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Oa(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = dl));
    else if (i !== 4 && (e = e.child,
    e !== null))
        for (Oa(e, t, n),
        e = e.sibling; e !== null; )
            Oa(e, t, n),
            e = e.sibling
}
function _a(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child,
    e !== null))
        for (_a(e, t, n),
        e = e.sibling; e !== null; )
            _a(e, t, n),
            e = e.sibling
}
var Se = null
  , vt = !1;
function on(e, t, n) {
    for (n = n.child; n !== null; )
        Ap(e, t, n),
        n = n.sibling
}
function Ap(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function")
        try {
            Ft.onCommitFiberUnmount(Ol, n)
        } catch {}
    switch (n.tag) {
    case 5:
        je || ki(n, t);
    case 6:
        var i = Se
          , r = vt;
        Se = null,
        on(e, t, n),
        Se = i,
        vt = r,
        Se !== null && (vt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (vt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? Rs(e.parentNode, n) : e.nodeType === 1 && Rs(e, n),
        Ur(e)) : Rs(Se, n.stateNode));
        break;
    case 4:
        i = Se,
        r = vt,
        Se = n.stateNode.containerInfo,
        vt = !0,
        on(e, t, n),
        Se = i,
        vt = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!je && (i = n.updateQueue,
        i !== null && (i = i.lastEffect,
        i !== null))) {
            r = i = i.next;
            do {
                var o = r
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && Da(n, t, l),
                r = r.next
            } while (r !== i)
        }
        on(e, t, n);
        break;
    case 1:
        if (!je && (ki(n, t),
        i = n.stateNode,
        typeof i.componentWillUnmount == "function"))
            try {
                i.props = n.memoizedProps,
                i.state = n.memoizedState,
                i.componentWillUnmount()
            } catch (s) {
                fe(n, t, s)
            }
        on(e, t, n);
        break;
    case 21:
        on(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (je = (i = je) || n.memoizedState !== null,
        on(e, t, n),
        je = i) : on(e, t, n);
        break;
    default:
        on(e, t, n)
    }
}
function Pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Y1),
        t.forEach(function(i) {
            var r = lg.bind(null, e, i);
            n.has(i) || (n.add(i),
            i.then(r, r))
        })
    }
}
function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var o = e
                  , l = t
                  , s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Se = s.stateNode,
                        vt = !1;
                        break e;
                    case 3:
                        Se = s.stateNode.containerInfo,
                        vt = !0;
                        break e;
                    case 4:
                        Se = s.stateNode.containerInfo,
                        vt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Se === null)
                    throw Error(A(160));
                Ap(o, l, r),
                Se = null,
                vt = !1;
                var a = r.alternate;
                a !== null && (a.return = null),
                r.return = null
            } catch (u) {
                fe(r, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Rp(t, e),
            t = t.sibling
}
function Rp(e, t) {
    var n = e.alternate
      , i = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (dt(t, e),
        Pt(e),
        i & 4) {
            try {
                Fr(3, e, e.return),
                $l(3, e)
            } catch (v) {
                fe(e, e.return, v)
            }
            try {
                Fr(5, e, e.return)
            } catch (v) {
                fe(e, e.return, v)
            }
        }
        break;
    case 1:
        dt(t, e),
        Pt(e),
        i & 512 && n !== null && ki(n, n.return);
        break;
    case 5:
        if (dt(t, e),
        Pt(e),
        i & 512 && n !== null && ki(n, n.return),
        e.flags & 32) {
            var r = e.stateNode;
            try {
                _r(r, "")
            } catch (v) {
                fe(e, e.return, v)
            }
        }
        if (i & 4 && (r = e.stateNode,
        r != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , s = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && Zf(r, o),
                    sa(s, l);
                    var u = sa(s, o);
                    for (l = 0; l < a.length; l += 2) {
                        var d = a[l]
                          , m = a[l + 1];
                        d === "style" ? rm(r, m) : d === "dangerouslySetInnerHTML" ? nm(r, m) : d === "children" ? _r(r, m) : uc(r, d, m, u)
                    }
                    switch (s) {
                    case "input":
                        na(r, o);
                        break;
                    case "textarea":
                        em(r, o);
                        break;
                    case "select":
                        var h = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!o.multiple;
                        var f = o.value;
                        f != null ? Ai(r, !!o.multiple, f, !1) : h !== !!o.multiple && (o.defaultValue != null ? Ai(r, !!o.multiple, o.defaultValue, !0) : Ai(r, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    r[Wr] = o
                } catch (v) {
                    fe(e, e.return, v)
                }
        }
        break;
    case 6:
        if (dt(t, e),
        Pt(e),
        i & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            r = e.stateNode,
            o = e.memoizedProps;
            try {
                r.nodeValue = o
            } catch (v) {
                fe(e, e.return, v)
            }
        }
        break;
    case 3:
        if (dt(t, e),
        Pt(e),
        i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ur(t.containerInfo)
            } catch (v) {
                fe(e, e.return, v)
            }
        break;
    case 4:
        dt(t, e),
        Pt(e);
        break;
    case 13:
        dt(t, e),
        Pt(e),
        r = e.child,
        r.flags & 8192 && (o = r.memoizedState !== null,
        r.stateNode.isHidden = o,
        !o || r.alternate !== null && r.alternate.memoizedState !== null || (Bc = me())),
        i & 4 && Pd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (je = (u = je) || d,
        dt(t, e),
        je = u) : dt(t, e),
        Pt(e),
        i & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (_ = e,
                d = e.child; d !== null; ) {
                    for (m = _ = d; _ !== null; ) {
                        switch (h = _,
                        f = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Fr(4, h, h.return);
                            break;
                        case 1:
                            ki(h, h.return);
                            var w = h.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                i = h,
                                n = h.return;
                                try {
                                    t = i,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (v) {
                                    fe(i, n, v)
                                }
                            }
                            break;
                        case 5:
                            ki(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Nd(m);
                                continue
                            }
                        }
                        f !== null ? (f.return = h,
                        _ = f) : Nd(m)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (d === null) {
                        d = m;
                        try {
                            r = m.stateNode,
                            u ? (o = r.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = m.stateNode,
                            a = m.memoizedProps.style,
                            l = a != null && a.hasOwnProperty("display") ? a.display : null,
                            s.style.display = im("display", l))
                        } catch (v) {
                            fe(e, e.return, v)
                        }
                    }
                } else if (m.tag === 6) {
                    if (d === null)
                        try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (v) {
                            fe(e, e.return, v)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    d === m && (d = null),
                    m = m.return
                }
                d === m && (d = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        dt(t, e),
        Pt(e),
        i & 4 && Pd(e);
        break;
    case 21:
        break;
    default:
        dt(t, e),
        Pt(e)
    }
}
function Pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (jp(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (i.tag) {
            case 5:
                var r = i.stateNode;
                i.flags & 32 && (_r(r, ""),
                i.flags &= -33);
                var o = bd(e);
                _a(e, o, r);
                break;
            case 3:
            case 4:
                var l = i.stateNode.containerInfo
                  , s = bd(e);
                Oa(e, s, l);
                break;
            default:
                throw Error(A(161))
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function J1(e, t, n) {
    _ = e,
    Fp(e)
}
function Fp(e, t, n) {
    for (var i = (e.mode & 1) !== 0; _ !== null; ) {
        var r = _
          , o = r.child;
        if (r.tag === 22 && i) {
            var l = r.memoizedState !== null || Mo;
            if (!l) {
                var s = r.alternate
                  , a = s !== null && s.memoizedState !== null || je;
                s = Mo;
                var u = je;
                if (Mo = l,
                (je = a) && !u)
                    for (_ = r; _ !== null; )
                        l = _,
                        a = l.child,
                        l.tag === 22 && l.memoizedState !== null ? kd(r) : a !== null ? (a.return = l,
                        _ = a) : kd(r);
                for (; o !== null; )
                    _ = o,
                    Fp(o),
                    o = o.sibling;
                _ = r,
                Mo = s,
                je = u
            }
            Td(e)
        } else
            r.subtreeFlags & 8772 && o !== null ? (o.return = r,
            _ = o) : Td(e)
    }
}
function Td(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        je || $l(5, t);
                        break;
                    case 1:
                        var i = t.stateNode;
                        if (t.flags & 4 && !je)
                            if (n === null)
                                i.componentDidMount();
                            else {
                                var r = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                                i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ud(t, o, i);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ud(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && Ur(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                je || t.flags & 512 && La(t)
            } catch (h) {
                fe(t, t.return, h)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function Nd(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function kd(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    $l(4, t)
                } catch (a) {
                    fe(t, n, a)
                }
                break;
            case 1:
                var i = t.stateNode;
                if (typeof i.componentDidMount == "function") {
                    var r = t.return;
                    try {
                        i.componentDidMount()
                    } catch (a) {
                        fe(t, r, a)
                    }
                }
                var o = t.return;
                try {
                    La(t)
                } catch (a) {
                    fe(t, o, a)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    La(t)
                } catch (a) {
                    fe(t, l, a)
                }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            _ = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            _ = s;
            break
        }
        _ = t.return
    }
}
var Z1 = Math.ceil
  , Cl = qt.ReactCurrentDispatcher
  , Uc = qt.ReactCurrentOwner
  , ot = qt.ReactCurrentBatchConfig
  , q = 0
  , we = null
  , he = null
  , Ce = 0
  , We = 0
  , ji = _n(0)
  , ye = 0
  , Jr = null
  , oi = 0
  , Gl = 0
  , Hc = 0
  , Mr = null
  , Ie = null
  , Bc = 0
  , Zi = 1 / 0
  , Vt = null
  , El = !1
  , Ia = null
  , Nn = null
  , Do = !1
  , wn = null
  , bl = 0
  , Dr = 0
  , Va = null
  , qo = -1
  , Jo = 0;
function De() {
    return q & 6 ? me() : qo !== -1 ? qo : qo = me()
}
function kn(e) {
    return e.mode & 1 ? q & 2 && Ce !== 0 ? Ce & -Ce : O1.transition !== null ? (Jo === 0 && (Jo = gm()),
    Jo) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Em(e.type)),
    e) : 1
}
function wt(e, t, n, i) {
    if (50 < Dr)
        throw Dr = 0,
        Va = null,
        Error(A(185));
    lo(e, n, i),
    (!(q & 2) || e !== we) && (e === we && (!(q & 2) && (Gl |= n),
    ye === 4 && mn(e, Ce)),
    He(e, i),
    n === 1 && q === 0 && !(t.mode & 1) && (Zi = me() + 500,
    Ul && In()))
}
function He(e, t) {
    var n = e.callbackNode;
    O2(e, t);
    var i = sl(e, e === we ? Ce : 0);
    if (i === 0)
        n !== null && _u(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = i & -i,
    e.callbackPriority !== t) {
        if (n != null && _u(n),
        t === 1)
            e.tag === 0 ? L1(jd.bind(null, e)) : Hm(jd.bind(null, e)),
            R1(function() {
                !(q & 6) && In()
            }),
            n = null;
        else {
            switch (vm(i)) {
            case 1:
                n = hc;
                break;
            case 4:
                n = pm;
                break;
            case 16:
                n = ll;
                break;
            case 536870912:
                n = hm;
                break;
            default:
                n = ll
            }
            n = zp(n, Mp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Mp(e, t) {
    if (qo = -1,
    Jo = 0,
    q & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (Li() && e.callbackNode !== n)
        return null;
    var i = sl(e, e === we ? Ce : 0);
    if (i === 0)
        return null;
    if (i & 30 || i & e.expiredLanes || t)
        t = Pl(e, i);
    else {
        t = i;
        var r = q;
        q |= 2;
        var o = Lp();
        (we !== e || Ce !== t) && (Vt = null,
        Zi = me() + 500,
        ei(e, t));
        do
            try {
                ng();
                break
            } catch (s) {
                Dp(e, s)
            }
        while (!0);
        kc(),
        Cl.current = o,
        q = r,
        he !== null ? t = 0 : (we = null,
        Ce = 0,
        t = ye)
    }
    if (t !== 0) {
        if (t === 2 && (r = fa(e),
        r !== 0 && (i = r,
        t = za(e, r))),
        t === 1)
            throw n = Jr,
            ei(e, 0),
            mn(e, i),
            He(e, me()),
            n;
        if (t === 6)
            mn(e, i);
        else {
            if (r = e.current.alternate,
            !(i & 30) && !eg(r) && (t = Pl(e, i),
            t === 2 && (o = fa(e),
            o !== 0 && (i = o,
            t = za(e, o))),
            t === 1))
                throw n = Jr,
                ei(e, 0),
                mn(e, i),
                He(e, me()),
                n;
            switch (e.finishedWork = r,
            e.finishedLanes = i,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                $n(e, Ie, Vt);
                break;
            case 3:
                if (mn(e, i),
                (i & 130023424) === i && (t = Bc + 500 - me(),
                10 < t)) {
                    if (sl(e, 0) !== 0)
                        break;
                    if (r = e.suspendedLanes,
                    (r & i) !== i) {
                        De(),
                        e.pingedLanes |= e.suspendedLanes & r;
                        break
                    }
                    e.timeoutHandle = wa($n.bind(null, e, Ie, Vt), t);
                    break
                }
                $n(e, Ie, Vt);
                break;
            case 4:
                if (mn(e, i),
                (i & 4194240) === i)
                    break;
                for (t = e.eventTimes,
                r = -1; 0 < i; ) {
                    var l = 31 - xt(i);
                    o = 1 << l,
                    l = t[l],
                    l > r && (r = l),
                    i &= ~o
                }
                if (i = r,
                i = me() - i,
                i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Z1(i / 1960)) - i,
                10 < i) {
                    e.timeoutHandle = wa($n.bind(null, e, Ie, Vt), i);
                    break
                }
                $n(e, Ie, Vt);
                break;
            case 5:
                $n(e, Ie, Vt);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return He(e, me()),
    e.callbackNode === n ? Mp.bind(null, e) : null
}
function za(e, t) {
    var n = Mr;
    return e.current.memoizedState.isDehydrated && (ei(e, t).flags |= 256),
    e = Pl(e, t),
    e !== 2 && (t = Ie,
    Ie = n,
    t !== null && Ua(t)),
    e
}
function Ua(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e)
}
function eg(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i]
                      , o = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!St(o(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function mn(e, t) {
    for (t &= ~Hc,
    t &= ~Gl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - xt(t)
          , i = 1 << n;
        e[n] = -1,
        t &= ~i
    }
}
function jd(e) {
    if (q & 6)
        throw Error(A(327));
    Li();
    var t = sl(e, 0);
    if (!(t & 1))
        return He(e, me()),
        null;
    var n = Pl(e, t);
    if (e.tag !== 0 && n === 2) {
        var i = fa(e);
        i !== 0 && (t = i,
        n = za(e, i))
    }
    if (n === 1)
        throw n = Jr,
        ei(e, 0),
        mn(e, t),
        He(e, me()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    $n(e, Ie, Vt),
    He(e, me()),
    null
}
function $c(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Zi = me() + 500,
        Ul && In())
    }
}
function li(e) {
    wn !== null && wn.tag === 0 && !(q & 6) && Li();
    var t = q;
    q |= 1;
    var n = ot.transition
      , i = ee;
    try {
        if (ot.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = i,
        ot.transition = n,
        q = t,
        !(q & 6) && In()
    }
}
function Gc() {
    We = ji.current,
    oe(ji)
}
function ei(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    A1(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var i = n;
            switch (Pc(i),
            i.tag) {
            case 1:
                i = i.type.childContextTypes,
                i != null && fl();
                break;
            case 3:
                qi(),
                oe(ze),
                oe(Ae),
                Dc();
                break;
            case 5:
                Mc(i);
                break;
            case 4:
                qi();
                break;
            case 13:
                oe(ae);
                break;
            case 19:
                oe(ae);
                break;
            case 10:
                jc(i.type._context);
                break;
            case 22:
            case 23:
                Gc()
            }
            n = n.return
        }
    if (we = e,
    he = e = jn(e.current, null),
    Ce = We = t,
    ye = 0,
    Jr = null,
    Hc = Gl = oi = 0,
    Ie = Mr = null,
    Wn !== null) {
        for (t = 0; t < Wn.length; t++)
            if (n = Wn[t],
            i = n.interleaved,
            i !== null) {
                n.interleaved = null;
                var r = i.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = r,
                    i.next = l
                }
                n.pending = i
            }
        Wn = null
    }
    return e
}
function Dp(e, t) {
    do {
        var n = he;
        try {
            if (kc(),
            Qo.current = Sl,
            wl) {
                for (var i = ce.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null),
                    i = i.next
                }
                wl = !1
            }
            if (ri = 0,
            xe = ge = ce = null,
            Rr = !1,
            Kr = 0,
            Uc.current = null,
            n === null || n.return === null) {
                ye = 1,
                Jr = t,
                he = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , s = n
                  , a = t;
                if (t = Ce,
                s.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = s
                      , m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var f = gd(l);
                    if (f !== null) {
                        f.flags &= -257,
                        vd(f, l, s, o, t),
                        f.mode & 1 && hd(o, u, t),
                        t = f,
                        a = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hd(o, u, t),
                            Wc();
                            break e
                        }
                        a = Error(A(426))
                    }
                } else if (se && s.mode & 1) {
                    var S = gd(l);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        vd(S, l, s, o, t),
                        Tc(Ji(a, s));
                        break e
                    }
                }
                o = a = Ji(a, s),
                ye !== 4 && (ye = 2),
                Mr === null ? Mr = [o] : Mr.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = vp(o, a, t);
                        cd(o, g);
                        break e;
                    case 1:
                        s = a;
                        var p = o.type
                          , y = o.stateNode;
                        if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Nn === null || !Nn.has(y)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var C = yp(o, s, t);
                            cd(o, C);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            _p(n)
        } catch (b) {
            t = b,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Lp() {
    var e = Cl.current;
    return Cl.current = Sl,
    e === null ? Sl : e
}
function Wc() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    we === null || !(oi & 268435455) && !(Gl & 268435455) || mn(we, Ce)
}
function Pl(e, t) {
    var n = q;
    q |= 2;
    var i = Lp();
    (we !== e || Ce !== t) && (Vt = null,
    ei(e, t));
    do
        try {
            tg();
            break
        } catch (r) {
            Dp(e, r)
        }
    while (!0);
    if (kc(),
    q = n,
    Cl.current = i,
    he !== null)
        throw Error(A(261));
    return we = null,
    Ce = 0,
    ye
}
function tg() {
    for (; he !== null; )
        Op(he)
}
function ng() {
    for (; he !== null && !N2(); )
        Op(he)
}
function Op(e) {
    var t = Vp(e.alternate, e, We);
    e.memoizedProps = e.pendingProps,
    t === null ? _p(e) : he = t,
    Uc.current = null
}
function _p(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = K1(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ye = 6,
                he = null;
                return
            }
        } else if (n = Q1(n, t, We),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ye === 0 && (ye = 5)
}
function $n(e, t, n) {
    var i = ee
      , r = ot.transition;
    try {
        ot.transition = null,
        ee = 1,
        ig(e, t, n, i)
    } finally {
        ot.transition = r,
        ee = i
    }
    return null
}
function ig(e, t, n, i) {
    do
        Li();
    while (wn !== null);
    if (q & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var r = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_2(e, o),
    e === we && (he = we = null,
    Ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Do || (Do = !0,
    zp(ll, function() {
        return Li(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = ot.transition,
        ot.transition = null;
        var l = ee;
        ee = 1;
        var s = q;
        q |= 4,
        Uc.current = null,
        q1(e, n),
        Rp(n, e),
        E1(ya),
        al = !!va,
        ya = va = null,
        e.current = n,
        J1(n),
        k2(),
        q = s,
        ee = l,
        ot.transition = o
    } else
        e.current = n;
    if (Do && (Do = !1,
    wn = e,
    bl = r),
    o = e.pendingLanes,
    o === 0 && (Nn = null),
    R2(n.stateNode),
    He(e, me()),
    t !== null)
        for (i = e.onRecoverableError,
        n = 0; n < t.length; n++)
            r = t[n],
            i(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (El)
        throw El = !1,
        e = Ia,
        Ia = null,
        e;
    return bl & 1 && e.tag !== 0 && Li(),
    o = e.pendingLanes,
    o & 1 ? e === Va ? Dr++ : (Dr = 0,
    Va = e) : Dr = 0,
    In(),
    null
}
function Li() {
    if (wn !== null) {
        var e = vm(bl)
          , t = ot.transition
          , n = ee;
        try {
            if (ot.transition = null,
            ee = 16 > e ? 16 : e,
            wn === null)
                var i = !1;
            else {
                if (e = wn,
                wn = null,
                bl = 0,
                q & 6)
                    throw Error(A(331));
                var r = q;
                for (q |= 4,
                _ = e.current; _ !== null; ) {
                    var o = _
                      , l = o.child;
                    if (_.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (_ = u; _ !== null; ) {
                                    var d = _;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fr(8, d, o)
                                    }
                                    var m = d.child;
                                    if (m !== null)
                                        m.return = d,
                                        _ = m;
                                    else
                                        for (; _ !== null; ) {
                                            d = _;
                                            var h = d.sibling
                                              , f = d.return;
                                            if (kp(d),
                                            d === u) {
                                                _ = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = f,
                                                _ = h;
                                                break
                                            }
                                            _ = f
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var v = w.child;
                                if (v !== null) {
                                    w.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null,
                                        v = S
                                    } while (v !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        _ = l;
                    else
                        e: for (; _ !== null; ) {
                            if (o = _,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Fr(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                _ = g;
                                break e
                            }
                            _ = o.return
                        }
                }
                var p = e.current;
                for (_ = p; _ !== null; ) {
                    l = _;
                    var y = l.child;
                    if (l.subtreeFlags & 2064 && y !== null)
                        y.return = l,
                        _ = y;
                    else
                        e: for (l = p; _ !== null; ) {
                            if (s = _,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $l(9, s)
                                    }
                                } catch (b) {
                                    fe(s, s.return, b)
                                }
                            if (s === l) {
                                _ = null;
                                break e
                            }
                            var C = s.sibling;
                            if (C !== null) {
                                C.return = s.return,
                                _ = C;
                                break e
                            }
                            _ = s.return
                        }
                }
                if (q = r,
                In(),
                Ft && typeof Ft.onPostCommitFiberRoot == "function")
                    try {
                        Ft.onPostCommitFiberRoot(Ol, e)
                    } catch {}
                i = !0
            }
            return i
        } finally {
            ee = n,
            ot.transition = t
        }
    }
    return !1
}
function Ad(e, t, n) {
    t = Ji(n, t),
    t = vp(e, t, 1),
    e = Tn(e, t, 1),
    t = De(),
    e !== null && (lo(e, 1, t),
    He(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        Ad(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ad(t, e, n);
                break
            } else if (t.tag === 1) {
                var i = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Nn === null || !Nn.has(i))) {
                    e = Ji(n, e),
                    e = yp(t, e, 1),
                    t = Tn(t, e, 1),
                    e = De(),
                    t !== null && (lo(t, 1, e),
                    He(t, e));
                    break
                }
            }
            t = t.return
        }
}
function rg(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
    t = De(),
    e.pingedLanes |= e.suspendedLanes & n,
    we === e && (Ce & n) === n && (ye === 4 || ye === 3 && (Ce & 130023424) === Ce && 500 > me() - Bc ? ei(e, 0) : Hc |= n),
    He(e, t)
}
function Ip(e, t) {
    t === 0 && (e.mode & 1 ? (t = bo,
    bo <<= 1,
    !(bo & 130023424) && (bo = 4194304)) : t = 1);
    var n = De();
    e = Xt(e, t),
    e !== null && (lo(e, t, n),
    He(e, n))
}
function og(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ip(e, n)
}
function lg(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var i = e.stateNode
          , r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
    case 19:
        i = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    i !== null && i.delete(t),
    Ip(e, n)
}
var Vp;
Vp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ze.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                X1(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        se && t.flags & 1048576 && Bm(t, hl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var i = t.type;
        Yo(e, t),
        e = t.pendingProps;
        var r = Qi(t, Ae.current);
        Di(t, n),
        r = Oc(null, t, i, e, r, n);
        var o = _c();
        return t.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ue(i) ? (o = !0,
        ml(t)) : o = !1,
        t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        Rc(t),
        r.updater = Bl,
        t.stateNode = r,
        r._reactInternals = t,
        Na(t, i, e, n),
        t = Aa(null, t, i, !0, o, n)) : (t.tag = 0,
        se && o && bc(t),
        Fe(null, t, r, n),
        t = t.child),
        t;
    case 16:
        i = t.elementType;
        e: {
            switch (Yo(e, t),
            e = t.pendingProps,
            r = i._init,
            i = r(i._payload),
            t.type = i,
            r = t.tag = ag(i),
            e = mt(i, e),
            r) {
            case 0:
                t = ja(null, t, i, e, n);
                break e;
            case 1:
                t = wd(null, t, i, e, n);
                break e;
            case 11:
                t = yd(null, t, i, e, n);
                break e;
            case 14:
                t = xd(null, t, i, mt(i.type, e), n);
                break e
            }
            throw Error(A(306, i, ""))
        }
        return t;
    case 0:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : mt(i, r),
        ja(e, t, i, r, n);
    case 1:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : mt(i, r),
        wd(e, t, i, r, n);
    case 3:
        e: {
            if (Cp(t),
            e === null)
                throw Error(A(387));
            i = t.pendingProps,
            o = t.memoizedState,
            r = o.element,
            Km(e, t),
            yl(t, i, null, n);
            var l = t.memoizedState;
            if (i = l.element,
            o.isDehydrated)
                if (o = {
                    element: i,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    r = Ji(Error(A(423)), t),
                    t = Sd(e, t, i, n, r);
                    break e
                } else if (i !== r) {
                    r = Ji(Error(A(424)), t),
                    t = Sd(e, t, i, n, r);
                    break e
                } else
                    for (Qe = Pn(t.stateNode.containerInfo.firstChild),
                    Ke = t,
                    se = !0,
                    yt = null,
                    n = Xm(t, null, i, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ki(),
                i === r) {
                    t = Qt(e, t, n);
                    break e
                }
                Fe(e, t, i, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ym(t),
        e === null && ba(t),
        i = t.type,
        r = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = r.children,
        xa(i, r) ? l = null : o !== null && xa(i, o) && (t.flags |= 32),
        Sp(e, t),
        Fe(e, t, l, n),
        t.child;
    case 6:
        return e === null && ba(t),
        null;
    case 13:
        return Ep(e, t, n);
    case 4:
        return Fc(t, t.stateNode.containerInfo),
        i = t.pendingProps,
        e === null ? t.child = Yi(t, null, i, n) : Fe(e, t, i, n),
        t.child;
    case 11:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : mt(i, r),
        yd(e, t, i, r, n);
    case 7:
        return Fe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (i = t.type._context,
            r = t.pendingProps,
            o = t.memoizedProps,
            l = r.value,
            ne(gl, i._currentValue),
            i._currentValue = l,
            o !== null)
                if (St(o.value, l)) {
                    if (o.children === r.children && !ze.current) {
                        t = Qt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            l = o.child;
                            for (var a = s.firstContext; a !== null; ) {
                                if (a.context === i) {
                                    if (o.tag === 1) {
                                        a = $t(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Pa(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(A(341));
                            l.lanes |= n,
                            s = l.alternate,
                            s !== null && (s.lanes |= n),
                            Pa(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            Fe(e, t, r.children, n),
            t = t.child
        }
        return t;
    case 9:
        return r = t.type,
        i = t.pendingProps.children,
        Di(t, n),
        r = lt(r),
        i = i(r),
        t.flags |= 1,
        Fe(e, t, i, n),
        t.child;
    case 14:
        return i = t.type,
        r = mt(i, t.pendingProps),
        r = mt(i.type, r),
        xd(e, t, i, r, n);
    case 15:
        return xp(e, t, t.type, t.pendingProps, n);
    case 17:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : mt(i, r),
        Yo(e, t),
        t.tag = 1,
        Ue(i) ? (e = !0,
        ml(t)) : e = !1,
        Di(t, n),
        gp(t, i, r),
        Na(t, i, r, n),
        Aa(null, t, i, !0, e, n);
    case 19:
        return bp(e, t, n);
    case 22:
        return wp(e, t, n)
    }
    throw Error(A(156, t.tag))
}
;
function zp(e, t) {
    return mm(e, t)
}
function sg(e, t, n, i) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function rt(e, t, n, i) {
    return new sg(e,t,n,i)
}
function Xc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function ag(e) {
    if (typeof e == "function")
        return Xc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === fc)
            return 11;
        if (e === mc)
            return 14
    }
    return 2
}
function jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Zo(e, t, n, i, r, o) {
    var l = 2;
    if (i = e,
    typeof e == "function")
        Xc(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case xi:
            return ti(n.children, r, o, t);
        case dc:
            l = 8,
            r |= 8;
            break;
        case qs:
            return e = rt(12, n, t, r | 2),
            e.elementType = qs,
            e.lanes = o,
            e;
        case Js:
            return e = rt(13, n, t, r),
            e.elementType = Js,
            e.lanes = o,
            e;
        case Zs:
            return e = rt(19, n, t, r),
            e.elementType = Zs,
            e.lanes = o,
            e;
        case Yf:
            return Wl(n, r, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Qf:
                    l = 10;
                    break e;
                case Kf:
                    l = 9;
                    break e;
                case fc:
                    l = 11;
                    break e;
                case mc:
                    l = 14;
                    break e;
                case un:
                    l = 16,
                    i = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = rt(l, n, t, r),
    t.elementType = e,
    t.type = i,
    t.lanes = o,
    t
}
function ti(e, t, n, i) {
    return e = rt(7, e, i, t),
    e.lanes = n,
    e
}
function Wl(e, t, n, i) {
    return e = rt(22, e, i, t),
    e.elementType = Yf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Vs(e, t, n) {
    return e = rt(6, e, null, t),
    e.lanes = n,
    e
}
function zs(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function cg(e, t, n, i, r) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ws(0),
    this.expirationTimes = ws(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ws(0),
    this.identifierPrefix = i,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function Qc(e, t, n, i, r, o, l, s, a) {
    return e = new cg(e,t,n,s,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = rt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Rc(o),
    e
}
function ug(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: yi,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Up(e) {
    if (!e)
        return Rn;
    e = e._reactInternals;
    e: {
        if (ci(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ue(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n))
            return Um(e, n, t)
    }
    return t
}
function Hp(e, t, n, i, r, o, l, s, a) {
    return e = Qc(n, i, !0, e, r, o, l, s, a),
    e.context = Up(null),
    n = e.current,
    i = De(),
    r = kn(n),
    o = $t(i, r),
    o.callback = t ?? null,
    Tn(n, o, r),
    e.current.lanes = r,
    lo(e, r, i),
    He(e, i),
    e
}
function Xl(e, t, n, i) {
    var r = t.current
      , o = De()
      , l = kn(r);
    return n = Up(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = $t(o, l),
    t.payload = {
        element: e
    },
    i = i === void 0 ? null : i,
    i !== null && (t.callback = i),
    e = Tn(r, t, l),
    e !== null && (wt(e, r, l, o),
    Xo(e, r, l)),
    l
}
function Tl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Rd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Kc(e, t) {
    Rd(e, t),
    (e = e.alternate) && Rd(e, t)
}
function dg() {
    return null
}
var Bp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Yc(e) {
    this._internalRoot = e
}
Ql.prototype.render = Yc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    Xl(e, t, null, null)
}
;
Ql.prototype.unmount = Yc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        li(function() {
            Xl(null, e, null, null)
        }),
        t[Wt] = null
    }
}
;
function Ql(e) {
    this._internalRoot = e
}
Ql.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = wm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++)
            ;
        fn.splice(n, 0, e),
        n === 0 && Cm(e)
    }
}
;
function qc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Kl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Fd() {}
function fg(e, t, n, i, r) {
    if (r) {
        if (typeof i == "function") {
            var o = i;
            i = function() {
                var u = Tl(l);
                o.call(u)
            }
        }
        var l = Hp(t, i, e, 0, null, !1, !1, "", Fd);
        return e._reactRootContainer = l,
        e[Wt] = l.current,
        $r(e.nodeType === 8 ? e.parentNode : e),
        li(),
        l
    }
    for (; r = e.lastChild; )
        e.removeChild(r);
    if (typeof i == "function") {
        var s = i;
        i = function() {
            var u = Tl(a);
            s.call(u)
        }
    }
    var a = Qc(e, 0, !1, null, null, !1, !1, "", Fd);
    return e._reactRootContainer = a,
    e[Wt] = a.current,
    $r(e.nodeType === 8 ? e.parentNode : e),
    li(function() {
        Xl(t, a, n, i)
    }),
    a
}
function Yl(e, t, n, i, r) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var a = Tl(l);
                s.call(a)
            }
        }
        Xl(t, l, e, r)
    } else
        l = fg(n, t, e, r, i);
    return Tl(l)
}
ym = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Er(t.pendingLanes);
            n !== 0 && (gc(t, n | 1),
            He(t, me()),
            !(q & 6) && (Zi = me() + 500,
            In()))
        }
        break;
    case 13:
        li(function() {
            var i = Xt(e, 1);
            if (i !== null) {
                var r = De();
                wt(i, e, 1, r)
            }
        }),
        Kc(e, 1)
    }
}
;
vc = function(e) {
    if (e.tag === 13) {
        var t = Xt(e, 134217728);
        if (t !== null) {
            var n = De();
            wt(t, e, 134217728, n)
        }
        Kc(e, 134217728)
    }
}
;
xm = function(e) {
    if (e.tag === 13) {
        var t = kn(e)
          , n = Xt(e, t);
        if (n !== null) {
            var i = De();
            wt(n, e, t, i)
        }
        Kc(e, t)
    }
}
;
wm = function() {
    return ee
}
;
Sm = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
ca = function(e, t, n) {
    switch (t) {
    case "input":
        if (na(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                    var r = zl(i);
                    if (!r)
                        throw Error(A(90));
                    Jf(i),
                    na(i, r)
                }
            }
        }
        break;
    case "textarea":
        em(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ai(e, !!n.multiple, t, !1)
    }
}
;
sm = $c;
am = li;
var mg = {
    usingClientEntryPoint: !1,
    Events: [ao, Ei, zl, om, lm, $c]
}
  , vr = {
    findFiberByHostInstance: Gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , pg = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = dm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || dg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lo.isDisabled && Lo.supportsFiber)
        try {
            Ol = Lo.inject(pg),
            Ft = Lo
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mg;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qc(t))
        throw Error(A(200));
    return ug(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!qc(e))
        throw Error(A(299));
    var n = !1
      , i = ""
      , r = Bp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    t = Qc(e, 1, !1, null, null, n, !1, i, r),
    e[Wt] = t.current,
    $r(e.nodeType === 8 ? e.parentNode : e),
    new Yc(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = dm(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return li(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!Kl(t))
        throw Error(A(200));
    return Yl(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!qc(e))
        throw Error(A(405));
    var i = n != null && n.hydratedSources || null
      , r = !1
      , o = ""
      , l = Bp;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Hp(t, null, e, 1, n ?? null, r, !1, o, l),
    e[Wt] = t.current,
    $r(e),
    i)
        for (e = 0; e < i.length; e++)
            n = i[e],
            r = n._getVersion,
            r = r(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(n, r);
    return new Ql(t)
}
;
Je.render = function(e, t, n) {
    if (!Kl(t))
        throw Error(A(200));
    return Yl(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!Kl(e))
        throw Error(A(40));
    return e._reactRootContainer ? (li(function() {
        Yl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Wt] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = $c;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!Kl(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return Yl(e, t, n, !1, i)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function $p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($p)
        } catch (e) {
            console.error(e)
        }
}
$p(),
$f.exports = Je;
var uo = $f.exports;
const Gp = Rf(uo);
var Wp, Md = uo;
Wp = Md.createRoot,
Md.hydrateRoot;
var ql = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Jl = typeof window > "u" || "Deno"in globalThis;
function pt() {}
function hg(e, t) {
    return typeof e == "function" ? e(t) : e
}
function gg(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function vg(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ha(e, t) {
    return typeof e == "function" ? e(t) : e
}
function yg(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Dd(e, t) {
    const {type: n="all", exact: i, fetchStatus: r, predicate: o, queryKey: l, stale: s} = e;
    if (l) {
        if (i) {
            if (t.queryHash !== Jc(l, t.options))
                return !1
        } else if (!eo(t.queryKey, l))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof s == "boolean" && t.isStale() !== s || r && r !== t.state.fetchStatus || o && !o(t))
}
function Ld(e, t) {
    const {exact: n, status: i, predicate: r, mutationKey: o} = e;
    if (o) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Zr(t.options.mutationKey) !== Zr(o))
                return !1
        } else if (!eo(t.options.mutationKey, o))
            return !1
    }
    return !(i && t.state.status !== i || r && !r(t))
}
function Jc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Zr)(e)
}
function Zr(e) {
    return JSON.stringify(e, (t, n) => Ba(n) ? Object.keys(n).sort().reduce( (i, r) => (i[r] = n[r],
    i), {}) : n)
}
function eo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => eo(e[n], t[n])) : !1
}
function Xp(e, t) {
    if (e === t)
        return e;
    const n = Od(e) && Od(t);
    if (n || Ba(e) && Ba(t)) {
        const i = n ? e : Object.keys(e)
          , r = i.length
          , o = n ? t : Object.keys(t)
          , l = o.length
          , s = n ? [] : {}
          , a = new Set(i);
        let u = 0;
        for (let d = 0; d < l; d++) {
            const m = n ? d : o[d];
            (!n && a.has(m) || n) && e[m] === void 0 && t[m] === void 0 ? (s[m] = void 0,
            u++) : (s[m] = Xp(e[m], t[m]),
            s[m] === e[m] && e[m] !== void 0 && u++)
        }
        return r === l && u === r ? e : s
    }
    return t
}
function Od(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ba(e) {
    if (!_d(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!_d(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function _d(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function xg(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function wg(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Xp(e, t) : t
}
function Sg(e, t, n=0) {
    const i = [...e, t];
    return n && i.length > n ? i.slice(1) : i
}
function Cg(e, t, n=0) {
    const i = [t, ...e];
    return n && i.length > n ? i.slice(0, -1) : i
}
var Zc = Symbol();
function Qp(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Zc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Qn, pn, Vi, Ef, Eg = (Ef = class extends ql {
    constructor() {
        super();
        J(this, Qn);
        J(this, pn);
        J(this, Vi);
        H(this, Vi, t => {
            if (!Jl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, pn) || this.setEventListener(T(this, Vi))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, pn)) == null || t.call(this),
        H(this, pn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Vi, t),
        (n = T(this, pn)) == null || n.call(this),
        H(this, pn, t(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        T(this, Qn) !== t && (H(this, Qn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof T(this, Qn) == "boolean" ? T(this, Qn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Qn = new WeakMap,
pn = new WeakMap,
Vi = new WeakMap,
Ef), Kp = new Eg, zi, hn, Ui, bf, bg = (bf = class extends ql {
    constructor() {
        super();
        J(this, zi, !0);
        J(this, hn);
        J(this, Ui);
        H(this, Ui, t => {
            if (!Jl && window.addEventListener) {
                const n = () => t(!0)
                  , i = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, hn) || this.setEventListener(T(this, Ui))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, hn)) == null || t.call(this),
        H(this, hn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Ui, t),
        (n = T(this, hn)) == null || n.call(this),
        H(this, hn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        T(this, zi) !== t && (H(this, zi, t),
        this.listeners.forEach(i => {
            i(t)
        }
        ))
    }
    isOnline() {
        return T(this, zi)
    }
}
,
zi = new WeakMap,
hn = new WeakMap,
Ui = new WeakMap,
bf), Nl = new bg;
function Pg() {
    let e, t;
    const n = new Promise( (r, o) => {
        e = r,
        t = o
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function i(r) {
        Object.assign(n, r),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = r => {
        i({
            status: "fulfilled",
            value: r
        }),
        e(r)
    }
    ,
    n.reject = r => {
        i({
            status: "rejected",
            reason: r
        }),
        t(r)
    }
    ,
    n
}
function Tg(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Yp(e) {
    return (e ?? "online") === "online" ? Nl.isOnline() : !0
}
var qp = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Us(e) {
    return e instanceof qp
}
function Jp(e) {
    let t = !1, n = 0, i = !1, r;
    const o = Pg()
      , l = v => {
        var S;
        i || (h(new qp(v)),
        (S = e.abort) == null || S.call(e))
    }
      , s = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Kp.isFocused() && (e.networkMode === "always" || Nl.isOnline()) && e.canRun()
      , d = () => Yp(e.networkMode) && e.canRun()
      , m = v => {
        var S;
        i || (i = !0,
        (S = e.onSuccess) == null || S.call(e, v),
        r == null || r(),
        o.resolve(v))
    }
      , h = v => {
        var S;
        i || (i = !0,
        (S = e.onError) == null || S.call(e, v),
        r == null || r(),
        o.reject(v))
    }
      , f = () => new Promise(v => {
        var S;
        r = g => {
            (i || u()) && v(g)
        }
        ,
        (S = e.onPause) == null || S.call(e)
    }
    ).then( () => {
        var v;
        r = void 0,
        i || (v = e.onContinue) == null || v.call(e)
    }
    )
      , w = () => {
        if (i)
            return;
        let v;
        const S = n === 0 ? e.initialPromise : void 0;
        try {
            v = S ?? e.fn()
        } catch (g) {
            v = Promise.reject(g)
        }
        Promise.resolve(v).then(m).catch(g => {
            var E;
            if (i)
                return;
            const p = e.retry ?? (Jl ? 0 : 3)
              , y = e.retryDelay ?? Tg
              , C = typeof y == "function" ? y(n, g) : y
              , b = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, g);
            if (t || !b) {
                h(g);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, g),
            xg(C).then( () => u() ? void 0 : f()).then( () => {
                t ? h(g) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        cancel: l,
        continue: () => (r == null || r(),
        o),
        cancelRetry: s,
        continueRetry: a,
        canStart: d,
        start: () => (d() ? w() : f().then(w),
        o)
    }
}
var Ng = e => setTimeout(e, 0);
function kg() {
    let e = []
      , t = 0
      , n = s => {
        s()
    }
      , i = s => {
        s()
    }
      , r = Ng;
    const o = s => {
        t ? e.push(s) : r( () => {
            n(s)
        }
        )
    }
      , l = () => {
        const s = e;
        e = [],
        s.length && r( () => {
            i( () => {
                s.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: s => {
            let a;
            t++;
            try {
                a = s()
            } finally {
                t--,
                t || l()
            }
            return a
        }
        ,
        batchCalls: s => (...a) => {
            o( () => {
                s(...a)
            }
            )
        }
        ,
        schedule: o,
        setNotifyFunction: s => {
            n = s
        }
        ,
        setBatchNotifyFunction: s => {
            i = s
        }
        ,
        setScheduler: s => {
            r = s
        }
    }
}
var Me = kg(), Kn, Pf, Zp = (Pf = class {
    constructor() {
        J(this, Kn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        gg(this.gcTime) && H(this, Kn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Jl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        T(this, Kn) && (clearTimeout(T(this, Kn)),
        H(this, Kn, void 0))
    }
}
,
Kn = new WeakMap,
Pf), Hi, Yn, tt, qn, ke, io, Jn, ht, It, Tf, jg = (Tf = class extends Zp {
    constructor(t) {
        super();
        J(this, ht);
        J(this, Hi);
        J(this, Yn);
        J(this, tt);
        J(this, qn);
        J(this, ke);
        J(this, io);
        J(this, Jn);
        H(this, Jn, !1),
        H(this, io, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, qn, t.client),
        H(this, tt, T(this, qn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Hi, Rg(this.options)),
        this.state = t.state ?? T(this, Hi),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = T(this, ke)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...T(this, io),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && T(this, tt).remove(this)
    }
    setData(t, n) {
        const i = wg(this.state.data, t, this.options);
        return Pe(this, ht, It).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        i
    }
    setState(t, n) {
        Pe(this, ht, It).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var i, r;
        const n = (i = T(this, ke)) == null ? void 0 : i.promise;
        return (r = T(this, ke)) == null || r.cancel(t),
        n ? n.then(pt).catch(pt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(T(this, Hi))
    }
    isActive() {
        return this.observers.some(t => yg(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Zc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ha(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !vg(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(i => i.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = T(this, ke)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(i => i.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = T(this, ke)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        T(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (T(this, ke) && (T(this, Jn) ? T(this, ke).cancel({
            revert: !0
        }) : T(this, ke).cancelRetry()),
        this.scheduleGc()),
        T(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, ht, It).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, m;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (T(this, ke))
                return T(this, ke).continueRetry(),
                T(this, ke).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const h = this.observers.find(f => f.options.queryFn);
            h && this.setOptions(h.options)
        }
        const i = new AbortController
          , r = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (H(this, Jn, !0),
                i.signal)
            })
        }
          , o = () => {
            const h = Qp(this.options, n)
              , w = ( () => {
                const v = {
                    client: T(this, qn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(v),
                v
            }
            )();
            return H(this, Jn, !1),
            this.options.persister ? this.options.persister(h, w, this) : h(w)
        }
          , s = ( () => {
            const h = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: T(this, qn),
                state: this.state,
                fetchFn: o
            };
            return r(h),
            h
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(s, this),
        H(this, Yn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = s.fetchOptions) == null ? void 0 : d.meta)) && Pe(this, ht, It).call(this, {
            type: "fetch",
            meta: (m = s.fetchOptions) == null ? void 0 : m.meta
        });
        const a = h => {
            var f, w, v, S;
            Us(h) && h.silent || Pe(this, ht, It).call(this, {
                type: "error",
                error: h
            }),
            Us(h) || ((w = (f = T(this, tt).config).onError) == null || w.call(f, h, this),
            (S = (v = T(this, tt).config).onSettled) == null || S.call(v, this.state.data, h, this)),
            this.scheduleGc()
        }
        ;
        return H(this, ke, Jp({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: i.abort.bind(i),
            onSuccess: h => {
                var f, w, v, S;
                if (h === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (g) {
                    a(g);
                    return
                }
                (w = (f = T(this, tt).config).onSuccess) == null || w.call(f, h, this),
                (S = (v = T(this, tt).config).onSettled) == null || S.call(v, h, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (h, f) => {
                Pe(this, ht, It).call(this, {
                    type: "failed",
                    failureCount: h,
                    error: f
                })
            }
            ,
            onPause: () => {
                Pe(this, ht, It).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, ht, It).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        T(this, ke).start()
    }
}
,
Hi = new WeakMap,
Yn = new WeakMap,
tt = new WeakMap,
qn = new WeakMap,
ke = new WeakMap,
io = new WeakMap,
Jn = new WeakMap,
ht = new WeakSet,
It = function(t) {
    const n = i => {
        switch (t.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...Ag(i.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, Yn, void 0),
            {
                ...i,
                data: t.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const r = t.error;
            return Us(r) && r.revert && T(this, Yn) ? {
                ...T(this, Yn),
                fetchStatus: "idle"
            } : {
                ...i,
                error: r,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: r,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        T(this, tt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Tf);
function Ag(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Yp(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Rg(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , i = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, Nf, Fg = (Nf = class extends ql {
    constructor(t={}) {
        super();
        J(this, Nt);
        this.config = t,
        H(this, Nt, new Map)
    }
    build(t, n, i) {
        const r = n.queryKey
          , o = n.queryHash ?? Jc(r, n);
        let l = this.get(o);
        return l || (l = new jg({
            client: t,
            queryKey: r,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: i,
            defaultOptions: t.getQueryDefaults(r)
        }),
        this.add(l)),
        l
    }
    add(t) {
        T(this, Nt).has(t.queryHash) || (T(this, Nt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = T(this, Nt).get(t.queryHash);
        n && (t.destroy(),
        n === t && T(this, Nt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return T(this, Nt).get(t)
    }
    getAll() {
        return [...T(this, Nt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(i => Dd(n, i))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(i => Dd(t, i)) : n
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Nt = new WeakMap,
Nf), kt, Re, Zn, jt, an, kf, Mg = (kf = class extends Zp {
    constructor(t) {
        super();
        J(this, jt);
        J(this, kt);
        J(this, Re);
        J(this, Zn);
        this.mutationId = t.mutationId,
        H(this, Re, t.mutationCache),
        H(this, kt, []),
        this.state = t.state || Dg(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        T(this, kt).includes(t) || (T(this, kt).push(t),
        this.clearGcTimeout(),
        T(this, Re).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, kt, T(this, kt).filter(n => n !== t)),
        this.scheduleGc(),
        T(this, Re).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        T(this, kt).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, Re).remove(this))
    }
    continue() {
        var t;
        return ((t = T(this, Zn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, l, s, a, u, d, m, h, f, w, v, S, g, p, y, C, b, E, P, j;
        const n = () => {
            Pe(this, jt, an).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Zn, Jp({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (F, M) => {
                Pe(this, jt, an).call(this, {
                    type: "failed",
                    failureCount: F,
                    error: M
                })
            }
            ,
            onPause: () => {
                Pe(this, jt, an).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, Re).canRun(this)
        }));
        const i = this.state.status === "pending"
          , r = !T(this, Zn).canStart();
        try {
            if (i)
                n();
            else {
                Pe(this, jt, an).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((l = (o = T(this, Re).config).onMutate) == null ? void 0 : l.call(o, t, this));
                const M = await ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
                M !== this.state.context && Pe(this, jt, an).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: r
                })
            }
            const F = await T(this, Zn).start();
            return await ((d = (u = T(this, Re).config).onSuccess) == null ? void 0 : d.call(u, F, t, this.state.context, this)),
            await ((h = (m = this.options).onSuccess) == null ? void 0 : h.call(m, F, t, this.state.context)),
            await ((w = (f = T(this, Re).config).onSettled) == null ? void 0 : w.call(f, F, null, this.state.variables, this.state.context, this)),
            await ((S = (v = this.options).onSettled) == null ? void 0 : S.call(v, F, null, t, this.state.context)),
            Pe(this, jt, an).call(this, {
                type: "success",
                data: F
            }),
            F
        } catch (F) {
            try {
                throw await ((p = (g = T(this, Re).config).onError) == null ? void 0 : p.call(g, F, t, this.state.context, this)),
                await ((C = (y = this.options).onError) == null ? void 0 : C.call(y, F, t, this.state.context)),
                await ((E = (b = T(this, Re).config).onSettled) == null ? void 0 : E.call(b, void 0, F, this.state.variables, this.state.context, this)),
                await ((j = (P = this.options).onSettled) == null ? void 0 : j.call(P, void 0, F, t, this.state.context)),
                F
            } finally {
                Pe(this, jt, an).call(this, {
                    type: "error",
                    error: F
                })
            }
        } finally {
            T(this, Re).runNext(this)
        }
    }
}
,
kt = new WeakMap,
Re = new WeakMap,
Zn = new WeakMap,
jt = new WeakSet,
an = function(t) {
    const n = i => {
        switch (t.type) {
        case "failed":
            return {
                ...i,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: t.error,
                failureCount: i.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        T(this, kt).forEach(i => {
            i.onMutationUpdate(t)
        }
        ),
        T(this, Re).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
kf);
function Dg() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ut, gt, ro, jf, Lg = (jf = class extends ql {
    constructor(t={}) {
        super();
        J(this, Ut);
        J(this, gt);
        J(this, ro);
        this.config = t,
        H(this, Ut, new Set),
        H(this, gt, new Map),
        H(this, ro, 0)
    }
    build(t, n, i) {
        const r = new Mg({
            mutationCache: this,
            mutationId: ++yo(this, ro)._,
            options: t.defaultMutationOptions(n),
            state: i
        });
        return this.add(r),
        r
    }
    add(t) {
        T(this, Ut).add(t);
        const n = Oo(t);
        if (typeof n == "string") {
            const i = T(this, gt).get(n);
            i ? i.push(t) : T(this, gt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (T(this, Ut).delete(t)) {
            const n = Oo(t);
            if (typeof n == "string") {
                const i = T(this, gt).get(n);
                if (i)
                    if (i.length > 1) {
                        const r = i.indexOf(t);
                        r !== -1 && i.splice(r, 1)
                    } else
                        i[0] === t && T(this, gt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Oo(t);
        if (typeof n == "string") {
            const i = T(this, gt).get(n)
              , r = i == null ? void 0 : i.find(o => o.state.status === "pending");
            return !r || r === t
        } else
            return !0
    }
    runNext(t) {
        var i;
        const n = Oo(t);
        if (typeof n == "string") {
            const r = (i = T(this, gt).get(n)) == null ? void 0 : i.find(o => o !== t && o.state.isPaused);
            return (r == null ? void 0 : r.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Me.batch( () => {
            T(this, Ut).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            T(this, Ut).clear(),
            T(this, gt).clear()
        }
        )
    }
    getAll() {
        return Array.from(T(this, Ut))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(i => Ld(n, i))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Ld(t, n))
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Me.batch( () => Promise.all(t.map(n => n.continue().catch(pt))))
    }
}
,
Ut = new WeakMap,
gt = new WeakMap,
ro = new WeakMap,
jf);
function Oo(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Id(e) {
    return {
        onFetch: (t, n) => {
            var d, m, h, f, w;
            const i = t.options
              , r = (h = (m = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : m.fetchMore) == null ? void 0 : h.direction
              , o = ((f = t.state.data) == null ? void 0 : f.pages) || []
              , l = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let s = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let v = !1;
                const S = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = Qp(t.options, t.fetchOptions)
                  , p = async (y, C, b) => {
                    if (v)
                        return Promise.reject();
                    if (C == null && y.pages.length)
                        return Promise.resolve(y);
                    const P = ( () => {
                        const I = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return S(I),
                        I
                    }
                    )()
                      , j = await g(P)
                      , {maxPages: F} = t.options
                      , M = b ? Cg : Sg;
                    return {
                        pages: M(y.pages, j, F),
                        pageParams: M(y.pageParams, C, F)
                    }
                }
                ;
                if (r && o.length) {
                    const y = r === "backward"
                      , C = y ? Og : Vd
                      , b = {
                        pages: o,
                        pageParams: l
                    }
                      , E = C(i, b);
                    s = await p(b, E, y)
                } else {
                    const y = e ?? o.length;
                    do {
                        const C = a === 0 ? l[0] ?? i.initialPageParam : Vd(i, s);
                        if (a > 0 && C == null)
                            break;
                        s = await p(s, C),
                        a++
                    } while (a < y)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, S;
                return (S = (v = t.options).persister) == null ? void 0 : S.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Vd(e, {pages: t, pageParams: n}) {
    const i = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[i], t, n[i], n) : void 0
}
function Og(e, {pages: t, pageParams: n}) {
    var i;
    return t.length > 0 ? (i = e.getPreviousPageParam) == null ? void 0 : i.call(e, t[0], t, n[0], n) : void 0
}
var de, gn, vn, Bi, $i, yn, Gi, Wi, Af, _g = (Af = class {
    constructor(e={}) {
        J(this, de);
        J(this, gn);
        J(this, vn);
        J(this, Bi);
        J(this, $i);
        J(this, yn);
        J(this, Gi);
        J(this, Wi);
        H(this, de, e.queryCache || new Fg),
        H(this, gn, e.mutationCache || new Lg),
        H(this, vn, e.defaultOptions || {}),
        H(this, Bi, new Map),
        H(this, $i, new Map),
        H(this, yn, 0)
    }
    mount() {
        yo(this, yn)._++,
        T(this, yn) === 1 && (H(this, Gi, Kp.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, de).onFocus())
        }
        )),
        H(this, Wi, Nl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        yo(this, yn)._--,
        T(this, yn) === 0 && ((e = T(this, Gi)) == null || e.call(this),
        H(this, Gi, void 0),
        (t = T(this, Wi)) == null || t.call(this),
        H(this, Wi, void 0))
    }
    isFetching(e) {
        return T(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return T(this, gn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = T(this, de).build(this, t)
          , i = n.state.data;
        return i === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ha(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(i))
    }
    getQueriesData(e) {
        return T(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const i = n.data;
            return [t, i]
        }
        )
    }
    setQueryData(e, t, n) {
        const i = this.defaultQueryOptions({
            queryKey: e
        })
          , r = T(this, de).get(i.queryHash)
          , o = r == null ? void 0 : r.state.data
          , l = hg(t, o);
        if (l !== void 0)
            return T(this, de).build(this, i).setData(l, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Me.batch( () => T(this, de).findAll(e).map( ({queryKey: i}) => [i, this.setQueryData(i, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = T(this, de);
        Me.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = T(this, de);
        return Me.batch( () => (n.findAll(e).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , i = Me.batch( () => T(this, de).findAll(e).map(r => r.cancel(n)));
        return Promise.all(i).then(pt).catch(pt)
    }
    invalidateQueries(e, t={}) {
        return Me.batch( () => (T(this, de).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , i = Me.batch( () => T(this, de).findAll(e).filter(r => !r.isDisabled() && !r.isStatic()).map(r => {
            let o = r.fetch(void 0, n);
            return n.throwOnError || (o = o.catch(pt)),
            r.state.fetchStatus === "paused" ? Promise.resolve() : o
        }
        ));
        return Promise.all(i).then(pt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, de).build(this, t);
        return n.isStaleByTime(Ha(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(pt).catch(pt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Id(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pt).catch(pt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Id(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Nl.isOnline() ? T(this, gn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return T(this, de)
    }
    getMutationCache() {
        return T(this, gn)
    }
    getDefaultOptions() {
        return T(this, vn)
    }
    setDefaultOptions(e) {
        H(this, vn, e)
    }
    setQueryDefaults(e, t) {
        T(this, Bi).set(Zr(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...T(this, Bi).values()]
          , n = {};
        return t.forEach(i => {
            eo(e, i.queryKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        T(this, $i).set(Zr(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...T(this, $i).values()]
          , n = {};
        return t.forEach(i => {
            eo(e, i.mutationKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...T(this, vn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Jc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Zc && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...T(this, vn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        T(this, de).clear(),
        T(this, gn).clear()
    }
}
,
de = new WeakMap,
gn = new WeakMap,
vn = new WeakMap,
Bi = new WeakMap,
$i = new WeakMap,
yn = new WeakMap,
Gi = new WeakMap,
Wi = new WeakMap,
Af), Ig = x.createContext(void 0), Vg = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(Ig.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kl() {
    return kl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    kl.apply(this, arguments)
}
var Sn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Sn || (Sn = {}));
const zd = "popstate";
function zg(e) {
    e === void 0 && (e = {});
    function t(i, r) {
        let {pathname: o, search: l, hash: s} = i.location;
        return $a("", {
            pathname: o,
            search: l,
            hash: s
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }
    function n(i, r) {
        return typeof r == "string" ? r : t0(r)
    }
    return Hg(t, n, null, e)
}
function Be(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function e0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Ug() {
    return Math.random().toString(36).substr(2, 8)
}
function Ud(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function $a(e, t, n, i) {
    return n === void 0 && (n = null),
    kl({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Zl(t) : t, {
        state: n,
        key: t && t.key || i || Ug()
    })
}
function t0(e) {
    let {pathname: t="/", search: n="", hash: i=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
}
function Zl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let i = e.indexOf("?");
        i >= 0 && (t.search = e.substr(i),
        e = e.substr(0, i)),
        e && (t.pathname = e)
    }
    return t
}
function Hg(e, t, n, i) {
    i === void 0 && (i = {});
    let {window: r=document.defaultView, v5Compat: o=!1} = i
      , l = r.history
      , s = Sn.Pop
      , a = null
      , u = d();
    u == null && (u = 0,
    l.replaceState(kl({}, l.state, {
        idx: u
    }), ""));
    function d() {
        return (l.state || {
            idx: null
        }).idx
    }
    function m() {
        s = Sn.Pop;
        let S = d()
          , g = S == null ? null : S - u;
        u = S,
        a && a({
            action: s,
            location: v.location,
            delta: g
        })
    }
    function h(S, g) {
        s = Sn.Push;
        let p = $a(v.location, S, g);
        u = d() + 1;
        let y = Ud(p, u)
          , C = v.createHref(p);
        try {
            l.pushState(y, "", C)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            r.location.assign(C)
        }
        o && a && a({
            action: s,
            location: v.location,
            delta: 1
        })
    }
    function f(S, g) {
        s = Sn.Replace;
        let p = $a(v.location, S, g);
        u = d();
        let y = Ud(p, u)
          , C = v.createHref(p);
        l.replaceState(y, "", C),
        o && a && a({
            action: s,
            location: v.location,
            delta: 0
        })
    }
    function w(S) {
        let g = r.location.origin !== "null" ? r.location.origin : r.location.href
          , p = typeof S == "string" ? S : t0(S);
        return p = p.replace(/ $/, "%20"),
        Be(g, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,g)
    }
    let v = {
        get action() {
            return s
        },
        get location() {
            return e(r, l)
        },
        listen(S) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return r.addEventListener(zd, m),
            a = S,
            () => {
                r.removeEventListener(zd, m),
                a = null
            }
        },
        createHref(S) {
            return t(r, S)
        },
        createURL: w,
        encodeLocation(S) {
            let g = w(S);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: h,
        replace: f,
        go(S) {
            return l.go(S)
        }
    };
    return v
}
var Hd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Hd || (Hd = {}));
function Bg(e, t, n) {
    return n === void 0 && (n = "/"),
    $g(e, t, n, !1)
}
function $g(e, t, n, i) {
    let r = typeof t == "string" ? Zl(t) : t
      , o = r0(r.pathname || "/", n);
    if (o == null)
        return null;
    let l = n0(e);
    Gg(l);
    let s = null;
    for (let a = 0; s == null && a < l.length; ++a) {
        let u = nv(o);
        s = ev(l[a], u, i)
    }
    return s
}
function n0(e, t, n, i) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    i === void 0 && (i = "");
    let r = (o, l, s) => {
        let a = {
            relativePath: s === void 0 ? o.path || "" : s,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: l,
            route: o
        };
        a.relativePath.startsWith("/") && (Be(a.relativePath.startsWith(i), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(i.length));
        let u = Oi([i, a.relativePath])
          , d = n.concat(a);
        o.children && o.children.length > 0 && (Be(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        n0(o.children, t, d, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: Jg(u, o.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (o, l) => {
        var s;
        if (o.path === "" || !((s = o.path) != null && s.includes("?")))
            r(o, l);
        else
            for (let a of i0(o.path))
                r(o, l, a)
    }
    ),
    t
}
function i0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...i] = t
      , r = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (i.length === 0)
        return r ? [o, ""] : [o];
    let l = i0(i.join("/"))
      , s = [];
    return s.push(...l.map(a => a === "" ? o : [o, a].join("/"))),
    r && s.push(...l),
    s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function Gg(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Zg(t.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)))
}
const Wg = /^:[\w-]+$/
  , Xg = 3
  , Qg = 2
  , Kg = 1
  , Yg = 10
  , qg = -2
  , Bd = e => e === "*";
function Jg(e, t) {
    let n = e.split("/")
      , i = n.length;
    return n.some(Bd) && (i += qg),
    t && (i += Qg),
    n.filter(r => !Bd(r)).reduce( (r, o) => r + (Wg.test(o) ? Xg : o === "" ? Kg : Yg), i)
}
function Zg(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (i, r) => i === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ev(e, t, n) {
    let {routesMeta: i} = e
      , r = {}
      , o = "/"
      , l = [];
    for (let s = 0; s < i.length; ++s) {
        let a = i[s]
          , u = s === i.length - 1
          , d = o === "/" ? t : t.slice(o.length) || "/"
          , m = $d({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, d)
          , h = a.route;
        if (!m && u && n && !i[i.length - 1].route.index && (m = $d({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, d)),
        !m)
            return null;
        Object.assign(r, m.params),
        l.push({
            params: r,
            pathname: Oi([o, m.pathname]),
            pathnameBase: iv(Oi([o, m.pathnameBase])),
            route: h
        }),
        m.pathnameBase !== "/" && (o = Oi([o, m.pathnameBase]))
    }
    return l
}
function $d(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = tv(e.path, e.caseSensitive, e.end)
      , r = t.match(n);
    if (!r)
        return null;
    let o = r[0]
      , l = o.replace(/(.)\/+$/, "$1")
      , s = r.slice(1);
    return {
        params: i.reduce( (u, d, m) => {
            let {paramName: h, isOptional: f} = d;
            if (h === "*") {
                let v = s[m] || "";
                l = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const w = s[m];
            return f && !w ? u[h] = void 0 : u[h] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: l,
        pattern: e
    }
}
function tv(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    e0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let i = []
      , r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, s, a) => (i.push({
        paramName: s,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r,t ? void 0 : "i"), i]
}
function nv(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return e0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function r0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , i = e.charAt(n);
    return i && i !== "/" ? null : e.slice(n) || "/"
}
const Oi = e => e.join("/").replace(/\/\/+/g, "/")
  , iv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function rv(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const o0 = ["post", "put", "patch", "delete"];
new Set(o0);
const ov = ["get", ...o0];
new Set(ov);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function jl() {
    return jl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    jl.apply(this, arguments)
}
const lv = x.createContext(null)
  , sv = x.createContext(null)
  , l0 = x.createContext(null)
  , es = x.createContext(null)
  , ts = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , s0 = x.createContext(null);
function eu() {
    return x.useContext(es) != null
}
function tu() {
    return eu() || Be(!1),
    x.useContext(es).location
}
function av(e, t) {
    return cv(e, t)
}
function cv(e, t, n, i) {
    eu() || Be(!1);
    let {navigator: r} = x.useContext(l0)
      , {matches: o} = x.useContext(ts)
      , l = o[o.length - 1]
      , s = l ? l.params : {};
    l && l.pathname;
    let a = l ? l.pathnameBase : "/";
    l && l.route;
    let u = tu(), d;
    if (t) {
        var m;
        let S = typeof t == "string" ? Zl(t) : t;
        a === "/" || (m = S.pathname) != null && m.startsWith(a) || Be(!1),
        d = S
    } else
        d = u;
    let h = d.pathname || "/"
      , f = h;
    if (a !== "/") {
        let S = a.replace(/^\//, "").split("/");
        f = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let w = Bg(e, {
        pathname: f
    })
      , v = pv(w && w.map(S => Object.assign({}, S, {
        params: Object.assign({}, s, S.params),
        pathname: Oi([a, r.encodeLocation ? r.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? a : Oi([a, r.encodeLocation ? r.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), o, n, i);
    return t && v ? x.createElement(es.Provider, {
        value: {
            location: jl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Sn.Pop
        }
    }, v) : v
}
function uv() {
    let e = yv()
      , t = rv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: r
    }, n) : null, null)
}
const dv = x.createElement(uv, null);
class fv extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(ts.Provider, {
            value: this.props.routeContext
        }, x.createElement(s0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function mv(e) {
    let {routeContext: t, match: n, children: i} = e
      , r = x.useContext(lv);
    return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(ts.Provider, {
        value: t
    }, i)
}
function pv(e, t, n, i) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    i === void 0 && (i = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = i) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let l = e
      , s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let d = l.findIndex(m => m.route.id && (s == null ? void 0 : s[m.route.id]) !== void 0);
        d >= 0 || Be(!1),
        l = l.slice(0, Math.min(l.length, d + 1))
    }
    let a = !1
      , u = -1;
    if (n && i && i.v7_partialHydration)
        for (let d = 0; d < l.length; d++) {
            let m = l[d];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = d),
            m.route.id) {
                let {loaderData: h, errors: f} = n
                  , w = m.route.loader && h[m.route.id] === void 0 && (!f || f[m.route.id] === void 0);
                if (m.route.lazy || w) {
                    a = !0,
                    u >= 0 ? l = l.slice(0, u + 1) : l = [l[0]];
                    break
                }
            }
        }
    return l.reduceRight( (d, m, h) => {
        let f, w = !1, v = null, S = null;
        n && (f = s && m.route.id ? s[m.route.id] : void 0,
        v = m.route.errorElement || dv,
        a && (u < 0 && h === 0 ? (w = !0,
        S = null) : u === h && (w = !0,
        S = m.route.hydrateFallbackElement || null)));
        let g = t.concat(l.slice(0, h + 1))
          , p = () => {
            let y;
            return f ? y = v : w ? y = S : m.route.Component ? y = x.createElement(m.route.Component, null) : m.route.element ? y = m.route.element : y = d,
            x.createElement(mv, {
                match: m,
                routeContext: {
                    outlet: d,
                    matches: g,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (m.route.ErrorBoundary || m.route.errorElement || h === 0) ? x.createElement(fv, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: f,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Ga = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ga || {});
function hv(e) {
    let t = x.useContext(sv);
    return t || Be(!1),
    t
}
function gv(e) {
    let t = x.useContext(ts);
    return t || Be(!1),
    t
}
function vv(e) {
    let t = gv()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Be(!1),
    n.route.id
}
function yv() {
    var e;
    let t = x.useContext(s0)
      , n = hv(Ga.UseRouteError)
      , i = vv(Ga.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[i]
}
function xv(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function cn(e) {
    Be(!1)
}
function wv(e) {
    let {basename: t="/", children: n=null, location: i, navigationType: r=Sn.Pop, navigator: o, static: l=!1, future: s} = e;
    eu() && Be(!1);
    let a = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: a,
        navigator: o,
        static: l,
        future: jl({
            v7_relativeSplatPath: !1
        }, s)
    }), [a, s, o, l]);
    typeof i == "string" && (i = Zl(i));
    let {pathname: d="/", search: m="", hash: h="", state: f=null, key: w="default"} = i
      , v = x.useMemo( () => {
        let S = r0(d, a);
        return S == null ? null : {
            location: {
                pathname: S,
                search: m,
                hash: h,
                state: f,
                key: w
            },
            navigationType: r
        }
    }
    , [a, d, m, h, f, w, r]);
    return v == null ? null : x.createElement(l0.Provider, {
        value: u
    }, x.createElement(es.Provider, {
        children: n,
        value: v
    }))
}
function Sv(e) {
    let {children: t, location: n} = e;
    return av(Wa(t), n)
}
new Promise( () => {}
);
function Wa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (i, r) => {
        if (!x.isValidElement(i))
            return;
        let o = [...t, r];
        if (i.type === x.Fragment) {
            n.push.apply(n, Wa(i.props.children, o));
            return
        }
        i.type !== cn && Be(!1),
        !i.props.index || !i.props.children || Be(!1);
        let l = {
            id: i.props.id || o.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (l.children = Wa(i.props.children, o)),
        n.push(l)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Cv = "6";
try {
    window.__reactRouterVersion = Cv
} catch {}
const Ev = "startTransition"
  , Gd = Hf[Ev];
function bv(e) {
    let {basename: t, children: n, future: i, window: r} = e
      , o = x.useRef();
    o.current == null && (o.current = zg({
        window: r,
        v5Compat: !0
    }));
    let l = o.current
      , [s,a] = x.useState({
        action: l.action,
        location: l.location
    })
      , {v7_startTransition: u} = i || {}
      , d = x.useCallback(m => {
        u && Gd ? Gd( () => a(m)) : a(m)
    }
    , [a, u]);
    return x.useLayoutEffect( () => l.listen(d), [l, d]),
    x.useEffect( () => xv(i), [i]),
    x.createElement(wv, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: l,
        future: i
    })
}
var Wd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Wd || (Wd = {}));
var Xd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Xd || (Xd = {}));
var Qd = ["light", "dark"]
  , Pv = "(prefers-color-scheme: dark)"
  , Tv = x.createContext(void 0)
  , Nv = {
    setTheme: e => {}
    ,
    themes: []
}
  , kv = () => {
    var e;
    return (e = x.useContext(Tv)) != null ? e : Nv
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: i, enableColorScheme: r, defaultTheme: o, value: l, attrs: s, nonce: a}) => {
    let u = o === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , m = r ? Qd.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , h = (w, v=!1, S=!0) => {
        let g = l ? l[w] : w
          , p = v ? w + "|| ''" : `'${g}'`
          , y = "";
        return r && S && !v && Qd.includes(w) && (y += `d.style.colorScheme = '${w}';`),
        n === "class" ? v || g ? y += `c.add(${p})` : y += "null" : g && (y += `d[s](n,${p})`),
        y
    }
      , f = e ? `!function(){${d}${h(e)}}()` : i ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Pv}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${l ? `var x=${JSON.stringify(l)};` : ""}${h(l ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(o, !1, !1) + "}"}${m}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${l ? `var x=${JSON.stringify(l)};` : ""}${h(l ? "x[e]" : "e", !0)}}else{${h(o, !1, !1)};}${m}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
}
);
var jv = e => {
    switch (e) {
    case "success":
        return Fv;
    case "info":
        return Dv;
    case "warning":
        return Mv;
    case "error":
        return Lv;
    default:
        return null
    }
}
  , Av = Array(12).fill(0)
  , Rv = ({visible: e, className: t}) => R.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, Av.map( (n, i) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
}))))
  , Fv = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Mv = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Dv = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Lv = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Ov = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , _v = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Xa = 1
  , Iv = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...i} = e
              , r = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Xa++
              , o = this.toasts.find(s => s.id === r)
              , l = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            o ? this.toasts = this.toasts.map(s => s.id === r ? (this.publish({
                ...s,
                ...e,
                id: r,
                title: n
            }),
            {
                ...s,
                ...e,
                id: r,
                dismissible: l,
                title: n
            }) : s) : this.addToast({
                title: n,
                ...i,
                dismissible: l,
                id: r
            }),
            r
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let i = e instanceof Promise ? e : e(), r = n !== void 0, o, l = i.then(async a => {
                if (o = ["resolve", a],
                R.isValidElement(a))
                    r = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (zv(a) && !a.ok) {
                    r = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    r = !1;
                    let u = typeof t.success == "function" ? await t.success(a) : t.success
                      , d = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async a => {
                if (o = ["reject", a],
                t.error !== void 0) {
                    r = !1;
                    let u = typeof t.error == "function" ? await t.error(a) : t.error
                      , d = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var a;
                r && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), s = () => new Promise( (a, u) => l.then( () => o[0] === "reject" ? u(o[1]) : a(o[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: s
            } : Object.assign(n, {
                unwrap: s
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Xa++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , _e = new Iv
  , Vv = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Xa++;
    return _e.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , zv = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Uv = Vv
  , Hv = () => _e.toasts
  , Bv = () => _e.getActiveToasts();
Object.assign(Uv, {
    success: _e.success,
    info: _e.info,
    warning: _e.warning,
    error: _e.error,
    custom: _e.custom,
    message: _e.message,
    promise: _e.promise,
    dismiss: _e.dismiss,
    loading: _e.loading
}, {
    getHistory: Hv,
    getToasts: Bv
});
function $v(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , i = document.createElement("style");
    i.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
    i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
}
$v(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function _o(e) {
    return e.label !== void 0
}
var Gv = 3
  , Wv = "32px"
  , Xv = "16px"
  , Kd = 4e3
  , Qv = 356
  , Kv = 14
  , Yv = 20
  , qv = 200;
function ft(...e) {
    return e.filter(Boolean).join(" ")
}
function Jv(e) {
    let[t,n] = e.split("-")
      , i = [];
    return t && i.push(t),
    n && i.push(n),
    i
}
var Zv = e => {
    var t, n, i, r, o, l, s, a, u, d, m;
    let {invert: h, toast: f, unstyled: w, interacting: v, setHeights: S, visibleToasts: g, heights: p, index: y, toasts: C, expanded: b, removeToast: E, defaultRichColors: P, closeButton: j, style: F, cancelButtonStyle: M, actionButtonStyle: I, className: L="", descriptionClassName: W="", duration: D, position: K, gap: z, loadingIcon: B, expandByDefault: N, classNames: k, icons: O, closeButtonAriaLabel: $="Close toast", pauseWhenPageIsHidden: V} = e
      , [X,Y] = R.useState(null)
      , [pe,be] = R.useState(null)
      , [Z,di] = R.useState(!1)
      , [Jt,Vn] = R.useState(!1)
      , [Zt,fi] = R.useState(!1)
      , [en,ho] = R.useState(!1)
      , [us,go] = R.useState(!1)
      , [ds,ar] = R.useState(0)
      , [mi,yu] = R.useState(0)
      , cr = R.useRef(f.duration || D || Kd)
      , xu = R.useRef(null)
      , zn = R.useRef(null)
      , Dh = y === 0
      , Lh = y + 1 <= g
      , et = f.type
      , pi = f.dismissible !== !1
      , Oh = f.className || ""
      , _h = f.descriptionClassName || ""
      , vo = R.useMemo( () => p.findIndex(U => U.toastId === f.id) || 0, [p, f.id])
      , Ih = R.useMemo( () => {
        var U;
        return (U = f.closeButton) != null ? U : j
    }
    , [f.closeButton, j])
      , wu = R.useMemo( () => f.duration || D || Kd, [f.duration, D])
      , fs = R.useRef(0)
      , hi = R.useRef(0)
      , Su = R.useRef(0)
      , gi = R.useRef(null)
      , [Vh,zh] = K.split("-")
      , Cu = R.useMemo( () => p.reduce( (U, te, le) => le >= vo ? U : U + te.height, 0), [p, vo])
      , Eu = _v()
      , Uh = f.invert || h
      , ms = et === "loading";
    hi.current = R.useMemo( () => vo * z + Cu, [vo, Cu]),
    R.useEffect( () => {
        cr.current = wu
    }
    , [wu]),
    R.useEffect( () => {
        di(!0)
    }
    , []),
    R.useEffect( () => {
        let U = zn.current;
        if (U) {
            let te = U.getBoundingClientRect().height;
            return yu(te),
            S(le => [{
                toastId: f.id,
                height: te,
                position: f.position
            }, ...le]),
            () => S(le => le.filter(at => at.toastId !== f.id))
        }
    }
    , [S, f.id]),
    R.useLayoutEffect( () => {
        if (!Z)
            return;
        let U = zn.current
          , te = U.style.height;
        U.style.height = "auto";
        let le = U.getBoundingClientRect().height;
        U.style.height = te,
        yu(le),
        S(at => at.find(ct => ct.toastId === f.id) ? at.map(ct => ct.toastId === f.id ? {
            ...ct,
            height: le
        } : ct) : [{
            toastId: f.id,
            height: le,
            position: f.position
        }, ...at])
    }
    , [Z, f.title, f.description, S, f.id]);
    let tn = R.useCallback( () => {
        Vn(!0),
        ar(hi.current),
        S(U => U.filter(te => te.toastId !== f.id)),
        setTimeout( () => {
            E(f)
        }
        , qv)
    }
    , [f, E, S, hi]);
    R.useEffect( () => {
        if (f.promise && et === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let U;
        return b || v || V && Eu ? ( () => {
            if (Su.current < fs.current) {
                let te = new Date().getTime() - fs.current;
                cr.current = cr.current - te
            }
            Su.current = new Date().getTime()
        }
        )() : cr.current !== 1 / 0 && (fs.current = new Date().getTime(),
        U = setTimeout( () => {
            var te;
            (te = f.onAutoClose) == null || te.call(f, f),
            tn()
        }
        , cr.current)),
        () => clearTimeout(U)
    }
    , [b, v, f, et, V, Eu, tn]),
    R.useEffect( () => {
        f.delete && tn()
    }
    , [tn, f.delete]);
    function Hh() {
        var U, te, le;
        return O != null && O.loading ? R.createElement("div", {
            className: ft(k == null ? void 0 : k.loader, (U = f == null ? void 0 : f.classNames) == null ? void 0 : U.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, O.loading) : B ? R.createElement("div", {
            className: ft(k == null ? void 0 : k.loader, (te = f == null ? void 0 : f.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, B) : R.createElement(Rv, {
            className: ft(k == null ? void 0 : k.loader, (le = f == null ? void 0 : f.classNames) == null ? void 0 : le.loader),
            visible: et === "loading"
        })
    }
    return R.createElement("li", {
        tabIndex: 0,
        ref: zn,
        className: ft(L, Oh, k == null ? void 0 : k.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[et], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[et]),
        "data-sonner-toast": "",
        "data-rich-colors": (i = f.richColors) != null ? i : P,
        "data-styled": !(f.jsx || f.unstyled || w),
        "data-mounted": Z,
        "data-promise": !!f.promise,
        "data-swiped": us,
        "data-removed": Jt,
        "data-visible": Lh,
        "data-y-position": Vh,
        "data-x-position": zh,
        "data-index": y,
        "data-front": Dh,
        "data-swiping": Zt,
        "data-dismissible": pi,
        "data-type": et,
        "data-invert": Uh,
        "data-swipe-out": en,
        "data-swipe-direction": pe,
        "data-expanded": !!(b || N && Z),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": C.length - y,
            "--offset": `${Jt ? ds : hi.current}px`,
            "--initial-height": N ? "auto" : `${mi}px`,
            ...F,
            ...f.style
        },
        onDragEnd: () => {
            fi(!1),
            Y(null),
            gi.current = null
        }
        ,
        onPointerDown: U => {
            ms || !pi || (xu.current = new Date,
            ar(hi.current),
            U.target.setPointerCapture(U.pointerId),
            U.target.tagName !== "BUTTON" && (fi(!0),
            gi.current = {
                x: U.clientX,
                y: U.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var U, te, le, at;
            if (en || !pi)
                return;
            gi.current = null;
            let ct = Number(((U = zn.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , nn = Number(((te = zn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Un = new Date().getTime() - ((le = xu.current) == null ? void 0 : le.getTime())
              , ut = X === "x" ? ct : nn
              , rn = Math.abs(ut) / Un;
            if (Math.abs(ut) >= Yv || rn > .11) {
                ar(hi.current),
                (at = f.onDismiss) == null || at.call(f, f),
                be(X === "x" ? ct > 0 ? "right" : "left" : nn > 0 ? "down" : "up"),
                tn(),
                ho(!0),
                go(!1);
                return
            }
            fi(!1),
            Y(null)
        }
        ,
        onPointerMove: U => {
            var te, le, at, ct;
            if (!gi.current || !pi || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let nn = U.clientY - gi.current.y
              , Un = U.clientX - gi.current.x
              , ut = (le = e.swipeDirections) != null ? le : Jv(K);
            !X && (Math.abs(Un) > 1 || Math.abs(nn) > 1) && Y(Math.abs(Un) > Math.abs(nn) ? "x" : "y");
            let rn = {
                x: 0,
                y: 0
            };
            X === "y" ? (ut.includes("top") || ut.includes("bottom")) && (ut.includes("top") && nn < 0 || ut.includes("bottom") && nn > 0) && (rn.y = nn) : X === "x" && (ut.includes("left") || ut.includes("right")) && (ut.includes("left") && Un < 0 || ut.includes("right") && Un > 0) && (rn.x = Un),
            (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && go(!0),
            (at = zn.current) == null || at.style.setProperty("--swipe-amount-x", `${rn.x}px`),
            (ct = zn.current) == null || ct.style.setProperty("--swipe-amount-y", `${rn.y}px`)
        }
    }, Ih && !f.jsx ? R.createElement("button", {
        "aria-label": $,
        "data-disabled": ms,
        "data-close-button": !0,
        onClick: ms || !pi ? () => {}
        : () => {
            var U;
            tn(),
            (U = f.onDismiss) == null || U.call(f, f)
        }
        ,
        className: ft(k == null ? void 0 : k.closeButton, (r = f == null ? void 0 : f.classNames) == null ? void 0 : r.closeButton)
    }, (o = O == null ? void 0 : O.close) != null ? o : Ov) : null, f.jsx || x.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : R.createElement(R.Fragment, null, et || f.icon || f.promise ? R.createElement("div", {
        "data-icon": "",
        className: ft(k == null ? void 0 : k.icon, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || Hh() : null, f.type !== "loading" ? f.icon || (O == null ? void 0 : O[et]) || jv(et) : null) : null, R.createElement("div", {
        "data-content": "",
        className: ft(k == null ? void 0 : k.content, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.content)
    }, R.createElement("div", {
        "data-title": "",
        className: ft(k == null ? void 0 : k.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? R.createElement("div", {
        "data-description": "",
        className: ft(W, _h, k == null ? void 0 : k.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), x.isValidElement(f.cancel) ? f.cancel : f.cancel && _o(f.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || M,
        onClick: U => {
            var te, le;
            _o(f.cancel) && pi && ((le = (te = f.cancel).onClick) == null || le.call(te, U),
            tn())
        }
        ,
        className: ft(k == null ? void 0 : k.cancelButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.cancelButton)
    }, f.cancel.label) : null, x.isValidElement(f.action) ? f.action : f.action && _o(f.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || I,
        onClick: U => {
            var te, le;
            _o(f.action) && ((le = (te = f.action).onClick) == null || le.call(te, U),
            !U.defaultPrevented && tn())
        }
        ,
        className: ft(k == null ? void 0 : k.actionButton, (m = f == null ? void 0 : f.classNames) == null ? void 0 : m.actionButton)
    }, f.action.label) : null))
}
;
function Yd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function ey(e, t) {
    let n = {};
    return [e, t].forEach( (i, r) => {
        let o = r === 1
          , l = o ? "--mobile-offset" : "--offset"
          , s = o ? Xv : Wv;
        function a(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${l}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof i == "number" || typeof i == "string" ? a(i) : typeof i == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            i[u] === void 0 ? n[`${l}-${u}`] = s : n[`${l}-${u}`] = typeof i[u] == "number" ? `${i[u]}px` : i[u]
        }
        ) : a(s)
    }
    ),
    n
}
var ty = x.forwardRef(function(e, t) {
    let {invert: n, position: i="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: l, className: s, offset: a, mobileOffset: u, theme: d="light", richColors: m, duration: h, style: f, visibleToasts: w=Gv, toastOptions: v, dir: S=Yd(), gap: g=Kv, loadingIcon: p, icons: y, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: b} = e
      , [E,P] = R.useState([])
      , j = R.useMemo( () => Array.from(new Set([i].concat(E.filter(V => V.position).map(V => V.position)))), [E, i])
      , [F,M] = R.useState([])
      , [I,L] = R.useState(!1)
      , [W,D] = R.useState(!1)
      , [K,z] = R.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , B = R.useRef(null)
      , N = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , k = R.useRef(null)
      , O = R.useRef(!1)
      , $ = R.useCallback(V => {
        P(X => {
            var Y;
            return (Y = X.find(pe => pe.id === V.id)) != null && Y.delete || _e.dismiss(V.id),
            X.filter( ({id: pe}) => pe !== V.id)
        }
        )
    }
    , []);
    return R.useEffect( () => _e.subscribe(V => {
        if (V.dismiss) {
            P(X => X.map(Y => Y.id === V.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            Gp.flushSync( () => {
                P(X => {
                    let Y = X.findIndex(pe => pe.id === V.id);
                    return Y !== -1 ? [...X.slice(0, Y), {
                        ...X[Y],
                        ...V
                    }, ...X.slice(Y + 1)] : [V, ...X]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (d !== "system") {
            z(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")),
        typeof window > "u")
            return;
        let V = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            V.addEventListener("change", ({matches: X}) => {
                z(X ? "dark" : "light")
            }
            )
        } catch {
            V.addListener( ({matches: Y}) => {
                try {
                    z(Y ? "dark" : "light")
                } catch (pe) {
                    console.error(pe)
                }
            }
            )
        }
    }
    , [d]),
    R.useEffect( () => {
        E.length <= 1 && L(!1)
    }
    , [E]),
    R.useEffect( () => {
        let V = X => {
            var Y, pe;
            r.every(be => X[be] || X.code === be) && (L(!0),
            (Y = B.current) == null || Y.focus()),
            X.code === "Escape" && (document.activeElement === B.current || (pe = B.current) != null && pe.contains(document.activeElement)) && L(!1)
        }
        ;
        return document.addEventListener("keydown", V),
        () => document.removeEventListener("keydown", V)
    }
    , [r]),
    R.useEffect( () => {
        if (B.current)
            return () => {
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null,
                O.current = !1)
            }
    }
    , [B.current]),
    R.createElement("section", {
        ref: t,
        "aria-label": `${C} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, j.map( (V, X) => {
        var Y;
        let[pe,be] = V.split("-");
        return E.length ? R.createElement("ol", {
            key: V,
            dir: S === "auto" ? Yd() : S,
            tabIndex: -1,
            ref: B,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": K,
            "data-y-position": pe,
            "data-lifted": I && E.length > 1 && !o,
            "data-x-position": be,
            style: {
                "--front-toast-height": `${((Y = F[0]) == null ? void 0 : Y.height) || 0}px`,
                "--width": `${Qv}px`,
                "--gap": `${g}px`,
                ...f,
                ...ey(a, u)
            },
            onBlur: Z => {
                O.current && !Z.currentTarget.contains(Z.relatedTarget) && (O.current = !1,
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                k.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => L(!0),
            onMouseMove: () => L(!0),
            onMouseLeave: () => {
                W || L(!1)
            }
            ,
            onDragEnd: () => L(!1),
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, E.filter(Z => !Z.position && X === 0 || Z.position === V).map( (Z, di) => {
            var Jt, Vn;
            return R.createElement(Zv, {
                key: Z.id,
                icons: y,
                index: di,
                toast: Z,
                defaultRichColors: m,
                duration: (Jt = v == null ? void 0 : v.duration) != null ? Jt : h,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: w,
                closeButton: (Vn = v == null ? void 0 : v.closeButton) != null ? Vn : l,
                interacting: W,
                position: V,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: $,
                toasts: E.filter(Zt => Zt.position == Z.position),
                heights: F.filter(Zt => Zt.position == Z.position),
                setHeights: M,
                expandByDefault: o,
                gap: g,
                loadingIcon: p,
                expanded: I,
                pauseWhenPageIsHidden: b,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const ny = ({...e}) => {
    const {theme: t="system"} = kv();
    return c.jsx(ty, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , iy = 1
  , ry = 1e6;
let Hs = 0;
function oy() {
    return Hs = (Hs + 1) % Number.MAX_SAFE_INTEGER,
    Hs.toString()
}
const Bs = new Map
  , qd = e => {
    if (Bs.has(e))
        return;
    const t = setTimeout( () => {
        Bs.delete(e),
        Lr({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , ry);
    Bs.set(e, t)
}
  , ly = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, iy)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? qd(n) : e.toasts.forEach(i => {
                qd(i.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(i => i.id === n || n === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , el = [];
let tl = {
    toasts: []
};
function Lr(e) {
    tl = ly(tl, e),
    el.forEach(t => {
        t(tl)
    }
    )
}
function sy({...e}) {
    const t = oy()
      , n = r => Lr({
        type: "UPDATE_TOAST",
        toast: {
            ...r,
            id: t
        }
    })
      , i = () => Lr({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Lr({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: r => {
                r || i()
            }
        }
    }),
    {
        id: t,
        dismiss: i,
        update: n
    }
}
function ay() {
    const [e,t] = x.useState(tl);
    return x.useEffect( () => (el.push(t),
    () => {
        const n = el.indexOf(t);
        n > -1 && el.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: sy,
        dismiss: n => Lr({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ve(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(r) {
        if (e == null || e(r),
        n === !1 || !r.defaultPrevented)
            return t == null ? void 0 : t(r)
    }
}
function Jd(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function a0(...e) {
    return t => {
        let n = !1;
        const i = e.map(r => {
            const o = Jd(r, t);
            return !n && typeof o == "function" && (n = !0),
            o
        }
        );
        if (n)
            return () => {
                for (let r = 0; r < i.length; r++) {
                    const o = i[r];
                    typeof o == "function" ? o() : Jd(e[r], null)
                }
            }
    }
}
function Ct(...e) {
    return x.useCallback(a0(...e), e)
}
function ns(e, t=[]) {
    let n = [];
    function i(o, l) {
        const s = x.createContext(l)
          , a = n.length;
        n = [...n, l];
        const u = m => {
            var g;
            const {scope: h, children: f, ...w} = m
              , v = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[a]) || s
              , S = x.useMemo( () => w, Object.values(w));
            return c.jsx(v.Provider, {
                value: S,
                children: f
            })
        }
        ;
        u.displayName = o + "Provider";
        function d(m, h) {
            var v;
            const f = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[a]) || s
              , w = x.useContext(f);
            if (w)
                return w;
            if (l !== void 0)
                return l;
            throw new Error(`\`${m}\` must be used within \`${o}\``)
        }
        return [u, d]
    }
    const r = () => {
        const o = n.map(l => x.createContext(l));
        return function(s) {
            const a = (s == null ? void 0 : s[e]) || o;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: a
                }
            }), [s, a])
        }
    }
    ;
    return r.scopeName = e,
    [i, cy(r, ...t)]
}
function cy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const i = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(o) {
            const l = i.reduce( (s, {useScope: a, scopeName: u}) => {
                const m = a(o)[`__scope${u}`];
                return {
                    ...s,
                    ...m
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: l
            }), [l])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Qa(e) {
    const t = uy(e)
      , n = x.forwardRef( (i, r) => {
        const {children: o, ...l} = i
          , s = x.Children.toArray(o)
          , a = s.find(fy);
        if (a) {
            const u = a.props.children
              , d = s.map(m => m === a ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : m);
            return c.jsx(t, {
                ...l,
                ref: r,
                children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...l,
            ref: r,
            children: o
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function uy(e) {
    const t = x.forwardRef( (n, i) => {
        const {children: r, ...o} = n;
        if (x.isValidElement(r)) {
            const l = py(r)
              , s = my(o, r.props);
            return r.type !== x.Fragment && (s.ref = i ? a0(i, l) : l),
            x.cloneElement(r, s)
        }
        return x.Children.count(r) > 1 ? x.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var c0 = Symbol("radix.slottable");
function dy(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = c0,
    t
}
function fy(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === c0
}
function my(e, t) {
    const n = {
        ...t
    };
    for (const i in t) {
        const r = e[i]
          , o = t[i];
        /^on[A-Z]/.test(i) ? r && o ? n[i] = (...s) => {
            const a = o(...s);
            return r(...s),
            a
        }
        : r && (n[i] = r) : i === "style" ? n[i] = {
            ...r,
            ...o
        } : i === "className" && (n[i] = [r, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function py(e) {
    var i, r;
    let t = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function hy(e) {
    const t = e + "CollectionProvider"
      , [n,i] = ns(t)
      , [r,o] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , l = v => {
        const {scope: S, children: g} = v
          , p = R.useRef(null)
          , y = R.useRef(new Map).current;
        return c.jsx(r, {
            scope: S,
            itemMap: y,
            collectionRef: p,
            children: g
        })
    }
    ;
    l.displayName = t;
    const s = e + "CollectionSlot"
      , a = Qa(s)
      , u = R.forwardRef( (v, S) => {
        const {scope: g, children: p} = v
          , y = o(s, g)
          , C = Ct(S, y.collectionRef);
        return c.jsx(a, {
            ref: C,
            children: p
        })
    }
    );
    u.displayName = s;
    const d = e + "CollectionItemSlot"
      , m = "data-radix-collection-item"
      , h = Qa(d)
      , f = R.forwardRef( (v, S) => {
        const {scope: g, children: p, ...y} = v
          , C = R.useRef(null)
          , b = Ct(S, C)
          , E = o(d, g);
        return R.useEffect( () => (E.itemMap.set(C, {
            ref: C,
            ...y
        }),
        () => void E.itemMap.delete(C))),
        c.jsx(h, {
            [m]: "",
            ref: b,
            children: p
        })
    }
    );
    f.displayName = d;
    function w(v) {
        const S = o(e + "CollectionConsumer", v);
        return R.useCallback( () => {
            const p = S.collectionRef.current;
            if (!p)
                return [];
            const y = Array.from(p.querySelectorAll(`[${m}]`));
            return Array.from(S.itemMap.values()).sort( (E, P) => y.indexOf(E.ref.current) - y.indexOf(P.ref.current))
        }
        , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: l,
        Slot: u,
        ItemSlot: f
    }, w, i]
}
var gy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , $e = gy.reduce( (e, t) => {
    const n = Qa(`Primitive.${t}`)
      , i = x.forwardRef( (r, o) => {
        const {asChild: l, ...s} = r
          , a = l ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(a, {
            ...s,
            ref: o
        })
    }
    );
    return i.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: i
    }
}
, {});
function u0(e, t) {
    e && uo.flushSync( () => e.dispatchEvent(t))
}
function Fn(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var i;
        return (i = t.current) == null ? void 0 : i.call(t, ...n)
    }
    , [])
}
function vy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Fn(e);
    x.useEffect( () => {
        const i = r => {
            r.key === "Escape" && n(r)
        }
        ;
        return t.addEventListener("keydown", i, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", i, {
            capture: !0
        })
    }
    , [n, t])
}
var yy = "DismissableLayer", Ka = "dismissableLayer.update", xy = "dismissableLayer.pointerDownOutside", wy = "dismissableLayer.focusOutside", Zd, d0 = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), nu = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: i, onPointerDownOutside: r, onFocusOutside: o, onInteractOutside: l, onDismiss: s, ...a} = e
      , u = x.useContext(d0)
      , [d,m] = x.useState(null)
      , h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,f] = x.useState({})
      , w = Ct(t, P => m(P))
      , v = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = v.indexOf(S)
      , p = d ? v.indexOf(d) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = p >= g
      , b = Cy(P => {
        const j = P.target
          , F = [...u.branches].some(M => M.contains(j));
        !C || F || (r == null || r(P),
        l == null || l(P),
        P.defaultPrevented || s == null || s())
    }
    , h)
      , E = Ey(P => {
        const j = P.target;
        [...u.branches].some(M => M.contains(j)) || (o == null || o(P),
        l == null || l(P),
        P.defaultPrevented || s == null || s())
    }
    , h);
    return vy(P => {
        p === u.layers.size - 1 && (i == null || i(P),
        !P.defaultPrevented && s && (P.preventDefault(),
        s()))
    }
    , h),
    x.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Zd = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            ef(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Zd)
            }
    }
    , [d, h, n, u]),
    x.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        ef())
    }
    , [d, u]),
    x.useEffect( () => {
        const P = () => f({});
        return document.addEventListener(Ka, P),
        () => document.removeEventListener(Ka, P)
    }
    , []),
    c.jsx($e.div, {
        ...a,
        ref: w,
        style: {
            pointerEvents: y ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ve(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
nu.displayName = yy;
var Sy = "DismissableLayerBranch"
  , f0 = x.forwardRef( (e, t) => {
    const n = x.useContext(d0)
      , i = x.useRef(null)
      , r = Ct(t, i);
    return x.useEffect( () => {
        const o = i.current;
        if (o)
            return n.branches.add(o),
            () => {
                n.branches.delete(o)
            }
    }
    , [n.branches]),
    c.jsx($e.div, {
        ...e,
        ref: r
    })
}
);
f0.displayName = Sy;
function Cy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Fn(e)
      , i = x.useRef(!1)
      , r = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const o = s => {
            if (s.target && !i.current) {
                let a = function() {
                    m0(xy, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", r.current),
                r.current = a,
                t.addEventListener("click", r.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", r.current);
            i.current = !1
        }
          , l = window.setTimeout( () => {
            t.addEventListener("pointerdown", o)
        }
        , 0);
        return () => {
            window.clearTimeout(l),
            t.removeEventListener("pointerdown", o),
            t.removeEventListener("click", r.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => i.current = !0
    }
}
function Ey(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Fn(e)
      , i = x.useRef(!1);
    return x.useEffect( () => {
        const r = o => {
            o.target && !i.current && m0(wy, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
    }
    , [t, n]),
    {
        onFocusCapture: () => i.current = !0,
        onBlurCapture: () => i.current = !1
    }
}
function ef() {
    const e = new CustomEvent(Ka);
    document.dispatchEvent(e)
}
function m0(e, t, n, {discrete: i}) {
    const r = n.originalEvent.target
      , o = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    i ? u0(r, o) : r.dispatchEvent(o)
}
var by = nu
  , Py = f0
  , Mn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , Ty = "Portal"
  , p0 = x.forwardRef( (e, t) => {
    var s;
    const {container: n, ...i} = e
      , [r,o] = x.useState(!1);
    Mn( () => o(!0), []);
    const l = n || r && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return l ? Gp.createPortal(c.jsx($e.div, {
        ...i,
        ref: t
    }), l) : null
}
);
p0.displayName = Ty;
function Ny(e, t) {
    return x.useReducer( (n, i) => t[n][i] ?? n, e)
}
var iu = e => {
    const {present: t, children: n} = e
      , i = ky(t)
      , r = typeof n == "function" ? n({
        present: i.isPresent
    }) : x.Children.only(n)
      , o = Ct(i.ref, jy(r));
    return typeof n == "function" || i.isPresent ? x.cloneElement(r, {
        ref: o
    }) : null
}
;
iu.displayName = "Presence";
function ky(e) {
    const [t,n] = x.useState()
      , i = x.useRef(null)
      , r = x.useRef(e)
      , o = x.useRef("none")
      , l = e ? "mounted" : "unmounted"
      , [s,a] = Ny(l, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = Io(i.current);
        o.current = s === "mounted" ? u : "none"
    }
    , [s]),
    Mn( () => {
        const u = i.current
          , d = r.current;
        if (d !== e) {
            const h = o.current
              , f = Io(u);
            e ? a("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && h !== f ? "ANIMATION_OUT" : "UNMOUNT"),
            r.current = e
        }
    }
    , [e, a]),
    Mn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , m = f => {
                const v = Io(i.current).includes(f.animationName);
                if (f.target === t && v && (a("ANIMATION_END"),
                !r.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , h = f => {
                f.target === t && (o.current = Io(i.current))
            }
            ;
            return t.addEventListener("animationstart", h),
            t.addEventListener("animationcancel", m),
            t.addEventListener("animationend", m),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", h),
                t.removeEventListener("animationcancel", m),
                t.removeEventListener("animationend", m)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: x.useCallback(u => {
            i.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Io(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function jy(e) {
    var i, r;
    let t = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Ay = Hf[" useInsertionEffect ".trim().toString()] || Mn;
function Ry({prop: e, defaultProp: t, onChange: n= () => {}
, caller: i}) {
    const [r,o,l] = Fy({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , a = s ? e : r;
    {
        const d = x.useRef(e !== void 0);
        x.useEffect( () => {
            const m = d.current;
            m !== s && console.warn(`${i} is changing from ${m ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = s
        }
        , [s, i])
    }
    const u = x.useCallback(d => {
        var m;
        if (s) {
            const h = My(d) ? d(e) : d;
            h !== e && ((m = l.current) == null || m.call(l, h))
        } else
            o(d)
    }
    , [s, e, o, l]);
    return [a, u]
}
function Fy({defaultProp: e, onChange: t}) {
    const [n,i] = x.useState(e)
      , r = x.useRef(n)
      , o = x.useRef(t);
    return Ay( () => {
        o.current = t
    }
    , [t]),
    x.useEffect( () => {
        var l;
        r.current !== n && ((l = o.current) == null || l.call(o, n),
        r.current = n)
    }
    , [n, r]),
    [n, i, o]
}
function My(e) {
    return typeof e == "function"
}
var Dy = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Ly = "VisuallyHidden"
  , is = x.forwardRef( (e, t) => c.jsx($e.span, {
    ...e,
    ref: t,
    style: {
        ...Dy,
        ...e.style
    }
}));
is.displayName = Ly;
var Oy = is
  , ru = "ToastProvider"
  , [ou,_y,Iy] = hy("Toast")
  , [h0,tE] = ns("Toast", [Iy])
  , [Vy,rs] = h0(ru)
  , g0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: i=5e3, swipeDirection: r="right", swipeThreshold: o=50, children: l} = e
      , [s,a] = x.useState(null)
      , [u,d] = x.useState(0)
      , m = x.useRef(!1)
      , h = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ru}\`. Expected non-empty \`string\`.`),
    c.jsx(ou.Provider, {
        scope: t,
        children: c.jsx(Vy, {
            scope: t,
            label: n,
            duration: i,
            swipeDirection: r,
            swipeThreshold: o,
            toastCount: u,
            viewport: s,
            onViewportChange: a,
            onToastAdd: x.useCallback( () => d(f => f + 1), []),
            onToastRemove: x.useCallback( () => d(f => f - 1), []),
            isFocusedToastEscapeKeyDownRef: m,
            isClosePausedRef: h,
            children: l
        })
    })
}
;
g0.displayName = ru;
var v0 = "ToastViewport"
  , zy = ["F8"]
  , Ya = "toast.viewportPause"
  , qa = "toast.viewportResume"
  , y0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: i=zy, label: r="Notifications ({hotkey})", ...o} = e
      , l = rs(v0, n)
      , s = _y(n)
      , a = x.useRef(null)
      , u = x.useRef(null)
      , d = x.useRef(null)
      , m = x.useRef(null)
      , h = Ct(t, m, l.onViewportChange)
      , f = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = l.toastCount > 0;
    x.useEffect( () => {
        const S = g => {
            var y;
            i.length !== 0 && i.every(C => g[C] || g.code === C) && ((y = m.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [i]),
    x.useEffect( () => {
        const S = a.current
          , g = m.current;
        if (w && S && g) {
            const p = () => {
                if (!l.isClosePausedRef.current) {
                    const E = new CustomEvent(Ya);
                    g.dispatchEvent(E),
                    l.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (l.isClosePausedRef.current) {
                    const E = new CustomEvent(qa);
                    g.dispatchEvent(E),
                    l.isClosePausedRef.current = !1
                }
            }
              , C = E => {
                !S.contains(E.relatedTarget) && y()
            }
              , b = () => {
                S.contains(document.activeElement) || y()
            }
            ;
            return S.addEventListener("focusin", p),
            S.addEventListener("focusout", C),
            S.addEventListener("pointermove", p),
            S.addEventListener("pointerleave", b),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
                S.removeEventListener("focusin", p),
                S.removeEventListener("focusout", C),
                S.removeEventListener("pointermove", p),
                S.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [w, l.isClosePausedRef]);
    const v = x.useCallback( ({tabbingDirection: S}) => {
        const p = s().map(y => {
            const C = y.ref.current
              , b = [C, ...Zy(C)];
            return S === "forwards" ? b : b.reverse()
        }
        );
        return (S === "forwards" ? p.reverse() : p).flat()
    }
    , [s]);
    return x.useEffect( () => {
        const S = m.current;
        if (S) {
            const g = p => {
                var b, E, P;
                const y = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !y) {
                    const j = document.activeElement
                      , F = p.shiftKey;
                    if (p.target === S && F) {
                        (b = u.current) == null || b.focus();
                        return
                    }
                    const L = v({
                        tabbingDirection: F ? "backwards" : "forwards"
                    })
                      , W = L.findIndex(D => D === j);
                    $s(L.slice(W + 1)) ? p.preventDefault() : F ? (E = u.current) == null || E.focus() : (P = d.current) == null || P.focus()
                }
            }
            ;
            return S.addEventListener("keydown", g),
            () => S.removeEventListener("keydown", g)
        }
    }
    , [s, v]),
    c.jsxs(Py, {
        ref: a,
        role: "region",
        "aria-label": r.replace("{hotkey}", f),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && c.jsx(Ja, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = v({
                    tabbingDirection: "forwards"
                });
                $s(S)
            }
        }), c.jsx(ou.Slot, {
            scope: n,
            children: c.jsx($e.ol, {
                tabIndex: -1,
                ...o,
                ref: h
            })
        }), w && c.jsx(Ja, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const S = v({
                    tabbingDirection: "backwards"
                });
                $s(S)
            }
        })]
    })
}
);
y0.displayName = v0;
var x0 = "ToastFocusProxy"
  , Ja = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: i, ...r} = e
      , o = rs(x0, n);
    return c.jsx(is, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...r,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: l => {
            var u;
            const s = l.relatedTarget;
            !((u = o.viewport) != null && u.contains(s)) && i()
        }
    })
}
);
Ja.displayName = x0;
var fo = "Toast"
  , Uy = "toast.swipeStart"
  , Hy = "toast.swipeMove"
  , By = "toast.swipeCancel"
  , $y = "toast.swipeEnd"
  , w0 = x.forwardRef( (e, t) => {
    const {forceMount: n, open: i, defaultOpen: r, onOpenChange: o, ...l} = e
      , [s,a] = Ry({
        prop: i,
        defaultProp: r ?? !0,
        onChange: o,
        caller: fo
    });
    return c.jsx(iu, {
        present: n || s,
        children: c.jsx(Xy, {
            open: s,
            ...l,
            ref: t,
            onClose: () => a(!1),
            onPause: Fn(e.onPause),
            onResume: Fn(e.onResume),
            onSwipeStart: ve(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ve(e.onSwipeMove, u => {
                const {x: d, y: m} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`)
            }
            ),
            onSwipeCancel: ve(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ve(e.onSwipeEnd, u => {
                const {x: d, y: m} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`),
                a(!1)
            }
            )
        })
    })
}
);
w0.displayName = fo;
var [Gy,Wy] = h0(fo, {
    onClose() {}
})
  , Xy = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: i="foreground", duration: r, open: o, onClose: l, onEscapeKeyDown: s, onPause: a, onResume: u, onSwipeStart: d, onSwipeMove: m, onSwipeCancel: h, onSwipeEnd: f, ...w} = e
      , v = rs(fo, n)
      , [S,g] = x.useState(null)
      , p = Ct(t, D => g(D))
      , y = x.useRef(null)
      , C = x.useRef(null)
      , b = r || v.duration
      , E = x.useRef(0)
      , P = x.useRef(b)
      , j = x.useRef(0)
      , {onToastAdd: F, onToastRemove: M} = v
      , I = Fn( () => {
        var K;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((K = v.viewport) == null || K.focus()),
        l()
    }
    )
      , L = x.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(j.current),
        E.current = new Date().getTime(),
        j.current = window.setTimeout(I, D))
    }
    , [I]);
    x.useEffect( () => {
        const D = v.viewport;
        if (D) {
            const K = () => {
                L(P.current),
                u == null || u()
            }
              , z = () => {
                const B = new Date().getTime() - E.current;
                P.current = P.current - B,
                window.clearTimeout(j.current),
                a == null || a()
            }
            ;
            return D.addEventListener(Ya, z),
            D.addEventListener(qa, K),
            () => {
                D.removeEventListener(Ya, z),
                D.removeEventListener(qa, K)
            }
        }
    }
    , [v.viewport, b, a, u, L]),
    x.useEffect( () => {
        o && !v.isClosePausedRef.current && L(b)
    }
    , [o, b, v.isClosePausedRef, L]),
    x.useEffect( () => (F(),
    () => M()), [F, M]);
    const W = x.useMemo( () => S ? N0(S) : null, [S]);
    return v.viewport ? c.jsxs(c.Fragment, {
        children: [W && c.jsx(Qy, {
            __scopeToast: n,
            role: "status",
            "aria-live": i === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), c.jsx(Gy, {
            scope: n,
            onClose: I,
            children: uo.createPortal(c.jsx(ou.ItemSlot, {
                scope: n,
                children: c.jsx(by, {
                    asChild: !0,
                    onEscapeKeyDown: ve(s, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || I(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx($e.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...w,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ve(e.onKeyDown, D => {
                            D.key === "Escape" && (s == null || s(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            I()))
                        }
                        ),
                        onPointerDown: ve(e.onPointerDown, D => {
                            D.button === 0 && (y.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: ve(e.onPointerMove, D => {
                            if (!y.current)
                                return;
                            const K = D.clientX - y.current.x
                              , z = D.clientY - y.current.y
                              , B = !!C.current
                              , N = ["left", "right"].includes(v.swipeDirection)
                              , k = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , O = N ? k(0, K) : 0
                              , $ = N ? 0 : k(0, z)
                              , V = D.pointerType === "touch" ? 10 : 2
                              , X = {
                                x: O,
                                y: $
                            }
                              , Y = {
                                originalEvent: D,
                                delta: X
                            };
                            B ? (C.current = X,
                            Vo(Hy, m, Y, {
                                discrete: !1
                            })) : tf(X, v.swipeDirection, V) ? (C.current = X,
                            Vo(Uy, d, Y, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(K) > V || Math.abs(z) > V) && (y.current = null)
                        }
                        ),
                        onPointerUp: ve(e.onPointerUp, D => {
                            const K = C.current
                              , z = D.target;
                            if (z.hasPointerCapture(D.pointerId) && z.releasePointerCapture(D.pointerId),
                            C.current = null,
                            y.current = null,
                            K) {
                                const B = D.currentTarget
                                  , N = {
                                    originalEvent: D,
                                    delta: K
                                };
                                tf(K, v.swipeDirection, v.swipeThreshold) ? Vo($y, f, N, {
                                    discrete: !0
                                }) : Vo(By, h, N, {
                                    discrete: !0
                                }),
                                B.addEventListener("click", k => k.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , Qy = e => {
    const {__scopeToast: t, children: n, ...i} = e
      , r = rs(fo, t)
      , [o,l] = x.useState(!1)
      , [s,a] = x.useState(!1);
    return qy( () => l(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    s ? null : c.jsx(p0, {
        asChild: !0,
        children: c.jsx(is, {
            ...i,
            children: o && c.jsxs(c.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}
  , Ky = "ToastTitle"
  , S0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...i} = e;
    return c.jsx($e.div, {
        ...i,
        ref: t
    })
}
);
S0.displayName = Ky;
var Yy = "ToastDescription"
  , C0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...i} = e;
    return c.jsx($e.div, {
        ...i,
        ref: t
    })
}
);
C0.displayName = Yy;
var E0 = "ToastAction"
  , b0 = x.forwardRef( (e, t) => {
    const {altText: n, ...i} = e;
    return n.trim() ? c.jsx(T0, {
        altText: n,
        asChild: !0,
        children: c.jsx(lu, {
            ...i,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${E0}\`. Expected non-empty \`string\`.`),
    null)
}
);
b0.displayName = E0;
var P0 = "ToastClose"
  , lu = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...i} = e
      , r = Wy(P0, n);
    return c.jsx(T0, {
        asChild: !0,
        children: c.jsx($e.button, {
            type: "button",
            ...i,
            ref: t,
            onClick: ve(e.onClick, r.onClose)
        })
    })
}
);
lu.displayName = P0;
var T0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: i, ...r} = e;
    return c.jsx($e.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": i || void 0,
        ...r,
        ref: t
    })
}
);
function N0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(i => {
        if (i.nodeType === i.TEXT_NODE && i.textContent && t.push(i.textContent),
        Jy(i)) {
            const r = i.ariaHidden || i.hidden || i.style.display === "none"
              , o = i.dataset.radixToastAnnounceExclude === "";
            if (!r)
                if (o) {
                    const l = i.dataset.radixToastAnnounceAlt;
                    l && t.push(l)
                } else
                    t.push(...N0(i))
        }
    }
    ),
    t
}
function Vo(e, t, n, {discrete: i}) {
    const r = n.originalEvent.currentTarget
      , o = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    i ? u0(r, o) : r.dispatchEvent(o)
}
var tf = (e, t, n=0) => {
    const i = Math.abs(e.x)
      , r = Math.abs(e.y)
      , o = i > r;
    return t === "left" || t === "right" ? o && i > n : !o && r > n
}
;
function qy(e= () => {}
) {
    const t = Fn(e);
    Mn( () => {
        let n = 0
          , i = 0;
        return n = window.requestAnimationFrame( () => i = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(i)
        }
    }
    , [t])
}
function Jy(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Zy(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const r = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || r ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function $s(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var ex = g0
  , k0 = y0
  , j0 = w0
  , A0 = S0
  , R0 = C0
  , F0 = b0
  , M0 = lu;
function D0(e) {
    var t, n, i = "";
    if (typeof e == "string" || typeof e == "number")
        i += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var r = e.length;
            for (t = 0; t < r; t++)
                e[t] && (n = D0(e[t])) && (i && (i += " "),
                i += n)
        } else
            for (n in e)
                e[n] && (i && (i += " "),
                i += n);
    return i
}
function L0() {
    for (var e, t, n = 0, i = "", r = arguments.length; n < r; n++)
        (e = arguments[n]) && (t = D0(e)) && (i && (i += " "),
        i += t);
    return i
}
const nf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , rf = L0
  , tx = (e, t) => n => {
    var i;
    if ((t == null ? void 0 : t.variants) == null)
        return rf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: r, defaultVariants: o} = t
      , l = Object.keys(r).map(u => {
        const d = n == null ? void 0 : n[u]
          , m = o == null ? void 0 : o[u];
        if (d === null)
            return null;
        const h = nf(d) || nf(m);
        return r[u][h]
    }
    )
      , s = n && Object.entries(n).reduce( (u, d) => {
        let[m,h] = d;
        return h === void 0 || (u[m] = h),
        u
    }
    , {})
      , a = t == null || (i = t.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (u, d) => {
        let {class: m, className: h, ...f} = d;
        return Object.entries(f).every(w => {
            let[v,S] = w;
            return Array.isArray(S) ? S.includes({
                ...o,
                ...s
            }[v]) : {
                ...o,
                ...s
            }[v] === S
        }
        ) ? [...u, m, h] : u
    }
    , []);
    return rf(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , O0 = (...e) => e.filter( (t, n, i) => !!t && t.trim() !== "" && i.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ix = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: i, className: r="", children: o, iconNode: l, ...s}, a) => x.createElement("svg", {
    ref: a,
    ...ix,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: i ? Number(n) * 24 / Number(t) : n,
    className: O0("lucide", r),
    ...s
}, [...l.map( ([u,d]) => x.createElement(u, d)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = (e, t) => {
    const n = x.forwardRef( ({className: i, ...r}, o) => x.createElement(rx, {
        ref: o,
        iconNode: t,
        className: O0(`lucide-${nx(e)}`, i),
        ...r
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = Ge("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = Ge("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = Ge("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = Ge("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = Ge("Factory", [["path", {
    d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
    key: "159hny"
}], ["path", {
    d: "M17 18h1",
    key: "uldtlt"
}], ["path", {
    d: "M12 18h1",
    key: "s9uhes"
}], ["path", {
    d: "M7 18h1",
    key: "1neino"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = Ge("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = Ge("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = Ge("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = Ge("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = Ge("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = Ge("ShieldCheck", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = Ge("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = Ge("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = Ge("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , su = "-"
  , dx = e => {
    const t = mx(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = e;
    return {
        getClassGroupId: l => {
            const s = l.split(su);
            return s[0] === "" && s.length !== 1 && s.shift(),
            B0(s, t) || fx(l)
        }
        ,
        getConflictingClassGroupIds: (l, s) => {
            const a = n[l] || [];
            return s && i[l] ? [...a, ...i[l]] : a
        }
    }
}
  , B0 = (e, t) => {
    var l;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , i = t.nextPart.get(n)
      , r = i ? B0(e.slice(1), i) : void 0;
    if (r)
        return r;
    if (t.validators.length === 0)
        return;
    const o = e.join(su);
    return (l = t.validators.find( ({validator: s}) => s(o))) == null ? void 0 : l.classGroupId
}
  , of = /^\[(.+)\]$/
  , fx = e => {
    if (of.test(e)) {
        const t = of.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , mx = e => {
    const {theme: t, prefix: n} = e
      , i = {
        nextPart: new Map,
        validators: []
    };
    return hx(Object.entries(e.classGroups), n).forEach( ([o,l]) => {
        Za(l, i, o, t)
    }
    ),
    i
}
  , Za = (e, t, n, i) => {
    e.forEach(r => {
        if (typeof r == "string") {
            const o = r === "" ? t : lf(t, r);
            o.classGroupId = n;
            return
        }
        if (typeof r == "function") {
            if (px(r)) {
                Za(r(i), t, n, i);
                return
            }
            t.validators.push({
                validator: r,
                classGroupId: n
            });
            return
        }
        Object.entries(r).forEach( ([o,l]) => {
            Za(l, lf(t, o), n, i)
        }
        )
    }
    )
}
  , lf = (e, t) => {
    let n = e;
    return t.split(su).forEach(i => {
        n.nextPart.has(i) || n.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(i)
    }
    ),
    n
}
  , px = e => e.isThemeGetter
  , hx = (e, t) => t ? e.map( ([n,i]) => {
    const r = i.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([l,s]) => [t + l, s])) : o);
    return [n, r]
}
) : e
  , gx = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , i = new Map;
    const r = (o, l) => {
        n.set(o, l),
        t++,
        t > e && (t = 0,
        i = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let l = n.get(o);
            if (l !== void 0)
                return l;
            if ((l = i.get(o)) !== void 0)
                return r(o, l),
                l
        },
        set(o, l) {
            n.has(o) ? n.set(o, l) : r(o, l)
        }
    }
}
  , $0 = "!"
  , vx = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , i = t.length === 1
      , r = t[0]
      , o = t.length
      , l = s => {
        const a = [];
        let u = 0, d = 0, m;
        for (let S = 0; S < s.length; S++) {
            let g = s[S];
            if (u === 0) {
                if (g === r && (i || s.slice(S, S + o) === t)) {
                    a.push(s.slice(d, S)),
                    d = S + o;
                    continue
                }
                if (g === "/") {
                    m = S;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const h = a.length === 0 ? s : s.substring(d)
          , f = h.startsWith($0)
          , w = f ? h.substring(1) : h
          , v = m && m > d ? m - d : void 0;
        return {
            modifiers: a,
            hasImportantModifier: f,
            baseClassName: w,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? s => n({
        className: s,
        parseClassName: l
    }) : l
}
  , yx = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(i => {
        i[0] === "[" ? (t.push(...n.sort(), i),
        n = []) : n.push(i)
    }
    ),
    t.push(...n.sort()),
    t
}
  , xx = e => ({
    cache: gx(e.cacheSize),
    parseClassName: vx(e),
    ...dx(e)
})
  , wx = /\s+/
  , Sx = (e, t) => {
    const {parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: r} = t
      , o = []
      , l = e.trim().split(wx);
    let s = "";
    for (let a = l.length - 1; a >= 0; a -= 1) {
        const u = l[a]
          , {modifiers: d, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: f} = n(u);
        let w = !!f
          , v = i(w ? h.substring(0, f) : h);
        if (!v) {
            if (!w) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            if (v = i(h),
            !v) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            w = !1
        }
        const S = yx(d).join(":")
          , g = m ? S + $0 : S
          , p = g + v;
        if (o.includes(p))
            continue;
        o.push(p);
        const y = r(v, w);
        for (let C = 0; C < y.length; ++C) {
            const b = y[C];
            o.push(g + b)
        }
        s = u + (s.length > 0 ? " " + s : s)
    }
    return s
}
;
function Cx() {
    let e = 0, t, n, i = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = G0(t)) && (i && (i += " "),
        i += n);
    return i
}
const G0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let i = 0; i < e.length; i++)
        e[i] && (t = G0(e[i])) && (n && (n += " "),
        n += t);
    return n
}
;
function Ex(e, ...t) {
    let n, i, r, o = l;
    function l(a) {
        const u = t.reduce( (d, m) => m(d), e());
        return n = xx(u),
        i = n.cache.get,
        r = n.cache.set,
        o = s,
        s(a)
    }
    function s(a) {
        const u = i(a);
        if (u)
            return u;
        const d = Sx(a, n);
        return r(a, d),
        d
    }
    return function() {
        return o(Cx.apply(null, arguments))
    }
}
const ie = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , W0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , bx = /^\d+\/\d+$/
  , Px = new Set(["px", "full", "screen"])
  , Tx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Nx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , kx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , jx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Ax = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , _t = e => _i(e) || Px.has(e) || bx.test(e)
  , ln = e => or(e, "length", Ix)
  , _i = e => !!e && !Number.isNaN(Number(e))
  , Gs = e => or(e, "number", _i)
  , yr = e => !!e && Number.isInteger(Number(e))
  , Rx = e => e.endsWith("%") && _i(e.slice(0, -1))
  , G = e => W0.test(e)
  , sn = e => Tx.test(e)
  , Fx = new Set(["length", "size", "percentage"])
  , Mx = e => or(e, Fx, X0)
  , Dx = e => or(e, "position", X0)
  , Lx = new Set(["image", "url"])
  , Ox = e => or(e, Lx, zx)
  , _x = e => or(e, "", Vx)
  , xr = () => !0
  , or = (e, t, n) => {
    const i = W0.exec(e);
    return i ? i[1] ? typeof t == "string" ? i[1] === t : t.has(i[1]) : n(i[2]) : !1
}
  , Ix = e => Nx.test(e) && !kx.test(e)
  , X0 = () => !1
  , Vx = e => jx.test(e)
  , zx = e => Ax.test(e)
  , Ux = () => {
    const e = ie("colors")
      , t = ie("spacing")
      , n = ie("blur")
      , i = ie("brightness")
      , r = ie("borderColor")
      , o = ie("borderRadius")
      , l = ie("borderSpacing")
      , s = ie("borderWidth")
      , a = ie("contrast")
      , u = ie("grayscale")
      , d = ie("hueRotate")
      , m = ie("invert")
      , h = ie("gap")
      , f = ie("gradientColorStops")
      , w = ie("gradientColorStopPositions")
      , v = ie("inset")
      , S = ie("margin")
      , g = ie("opacity")
      , p = ie("padding")
      , y = ie("saturate")
      , C = ie("scale")
      , b = ie("sepia")
      , E = ie("skew")
      , P = ie("space")
      , j = ie("translate")
      , F = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , I = () => ["auto", G, t]
      , L = () => [G, t]
      , W = () => ["", _t, ln]
      , D = () => ["auto", _i, G]
      , K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , z = () => ["solid", "dashed", "dotted", "double", "none"]
      , B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , k = () => ["", "0", G]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , $ = () => [_i, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xr],
            spacing: [_t, ln],
            blur: ["none", "", sn, G],
            brightness: $(),
            borderColor: [e],
            borderRadius: ["none", "", "full", sn, G],
            borderSpacing: L(),
            borderWidth: W(),
            contrast: $(),
            grayscale: k(),
            hueRotate: $(),
            invert: k(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Rx, ln],
            inset: I(),
            margin: I(),
            opacity: $(),
            padding: L(),
            saturate: $(),
            scale: $(),
            sepia: k(),
            skew: $(),
            space: L(),
            translate: L()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [sn]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...K(), G]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: F()
            }],
            "overscroll-x": [{
                "overscroll-x": F()
            }],
            "overscroll-y": [{
                "overscroll-y": F()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", yr, G]
            }],
            basis: [{
                basis: I()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: k()
            }],
            shrink: [{
                shrink: k()
            }],
            order: [{
                order: ["first", "last", "none", yr, G]
            }],
            "grid-cols": [{
                "grid-cols": [xr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", yr, G]
                }, G]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [xr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [yr, G]
                }, G]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [P]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [P]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [sn]
                }, sn]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", sn, ln]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gs]
            }],
            "font-family": [{
                font: [xr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", _i, Gs]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _t, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...z(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", _t, ln]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", _t, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...K(), Dx]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Mx]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Ox]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...z(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [r]
            }],
            "border-color-x": [{
                "border-x": [r]
            }],
            "border-color-y": [{
                "border-y": [r]
            }],
            "border-color-s": [{
                "border-s": [r]
            }],
            "border-color-e": [{
                "border-e": [r]
            }],
            "border-color-t": [{
                "border-t": [r]
            }],
            "border-color-r": [{
                "border-r": [r]
            }],
            "border-color-b": [{
                "border-b": [r]
            }],
            "border-color-l": [{
                "border-l": [r]
            }],
            "divide-color": [{
                divide: [r]
            }],
            "outline-style": [{
                outline: ["", ...z()]
            }],
            "outline-offset": [{
                "outline-offset": [_t, G]
            }],
            "outline-w": [{
                outline: [_t, ln]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [_t, ln]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", sn, _x]
            }],
            "shadow-color": [{
                shadow: [xr]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...B(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": B()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", sn, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [m]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [m]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [l]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [l]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [l]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: $()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: $()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [yr, G]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [_t, ln, Gs]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Hx = Ex(Ux);
function ui(...e) {
    return Hx(L0(e))
}
const Bx = ex
  , Q0 = x.forwardRef( ({className: e, ...t}, n) => c.jsx(k0, {
    ref: n,
    className: ui("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Q0.displayName = k0.displayName;
const $x = tx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , K0 = x.forwardRef( ({className: e, variant: t, ...n}, i) => c.jsx(j0, {
    ref: i,
    className: ui($x({
        variant: t
    }), e),
    ...n
}));
K0.displayName = j0.displayName;
const Gx = x.forwardRef( ({className: e, ...t}, n) => c.jsx(F0, {
    ref: n,
    className: ui("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Gx.displayName = F0.displayName;
const Y0 = x.forwardRef( ({className: e, ...t}, n) => c.jsx(M0, {
    ref: n,
    className: ui("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(Al, {
        className: "h-4 w-4"
    })
}));
Y0.displayName = M0.displayName;
const q0 = x.forwardRef( ({className: e, ...t}, n) => c.jsx(A0, {
    ref: n,
    className: ui("text-sm font-semibold", e),
    ...t
}));
q0.displayName = A0.displayName;
const J0 = x.forwardRef( ({className: e, ...t}, n) => c.jsx(R0, {
    ref: n,
    className: ui("text-sm opacity-90", e),
    ...t
}));
J0.displayName = R0.displayName;
function Wx() {
    const {toasts: e} = ay();
    return c.jsxs(Bx, {
        children: [e.map(function({id: t, title: n, description: i, action: r, ...o}) {
            return c.jsxs(K0, {
                ...o,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(q0, {
                        children: n
                    }), i && c.jsx(J0, {
                        children: i
                    })]
                }), r, c.jsx(Y0, {})]
            }, t)
        }), c.jsx(Q0, {})]
    })
}
const Xx = ["top", "right", "bottom", "left"]
  , Dn = Math.min
  , Xe = Math.max
  , Rl = Math.round
  , zo = Math.floor
  , Dt = e => ({
    x: e,
    y: e
})
  , Qx = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Kx = {
    start: "end",
    end: "start"
};
function ec(e, t, n) {
    return Xe(e, Dn(t, n))
}
function Kt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Yt(e) {
    return e.split("-")[0]
}
function lr(e) {
    return e.split("-")[1]
}
function au(e) {
    return e === "x" ? "y" : "x"
}
function cu(e) {
    return e === "y" ? "height" : "width"
}
const Yx = new Set(["top", "bottom"]);
function Rt(e) {
    return Yx.has(Yt(e)) ? "y" : "x"
}
function uu(e) {
    return au(Rt(e))
}
function qx(e, t, n) {
    n === void 0 && (n = !1);
    const i = lr(e)
      , r = uu(e)
      , o = cu(r);
    let l = r === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (l = Fl(l)),
    [l, Fl(l)]
}
function Jx(e) {
    const t = Fl(e);
    return [tc(e), t, tc(t)]
}
function tc(e) {
    return e.replace(/start|end/g, t => Kx[t])
}
const sf = ["left", "right"]
  , af = ["right", "left"]
  , Zx = ["top", "bottom"]
  , ew = ["bottom", "top"];
function tw(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? af : sf : t ? sf : af;
    case "left":
    case "right":
        return t ? Zx : ew;
    default:
        return []
    }
}
function nw(e, t, n, i) {
    const r = lr(e);
    let o = tw(Yt(e), n === "start", i);
    return r && (o = o.map(l => l + "-" + r),
    t && (o = o.concat(o.map(tc)))),
    o
}
function Fl(e) {
    return e.replace(/left|right|bottom|top/g, t => Qx[t])
}
function iw(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Z0(e) {
    return typeof e != "number" ? iw(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ml(e) {
    const {x: t, y: n, width: i, height: r} = e;
    return {
        width: i,
        height: r,
        top: n,
        left: t,
        right: t + i,
        bottom: n + r,
        x: t,
        y: n
    }
}
function cf(e, t, n) {
    let {reference: i, floating: r} = e;
    const o = Rt(t)
      , l = uu(t)
      , s = cu(l)
      , a = Yt(t)
      , u = o === "y"
      , d = i.x + i.width / 2 - r.width / 2
      , m = i.y + i.height / 2 - r.height / 2
      , h = i[s] / 2 - r[s] / 2;
    let f;
    switch (a) {
    case "top":
        f = {
            x: d,
            y: i.y - r.height
        };
        break;
    case "bottom":
        f = {
            x: d,
            y: i.y + i.height
        };
        break;
    case "right":
        f = {
            x: i.x + i.width,
            y: m
        };
        break;
    case "left":
        f = {
            x: i.x - r.width,
            y: m
        };
        break;
    default:
        f = {
            x: i.x,
            y: i.y
        }
    }
    switch (lr(t)) {
    case "start":
        f[l] -= h * (n && u ? -1 : 1);
        break;
    case "end":
        f[l] += h * (n && u ? -1 : 1);
        break
    }
    return f
}
const rw = async (e, t, n) => {
    const {placement: i="bottom", strategy: r="absolute", middleware: o=[], platform: l} = n
      , s = o.filter(Boolean)
      , a = await (l.isRTL == null ? void 0 : l.isRTL(t));
    let u = await l.getElementRects({
        reference: e,
        floating: t,
        strategy: r
    })
      , {x: d, y: m} = cf(u, i, a)
      , h = i
      , f = {}
      , w = 0;
    for (let v = 0; v < s.length; v++) {
        const {name: S, fn: g} = s[v]
          , {x: p, y, data: C, reset: b} = await g({
            x: d,
            y: m,
            initialPlacement: i,
            placement: h,
            strategy: r,
            middlewareData: f,
            rects: u,
            platform: l,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = p ?? d,
        m = y ?? m,
        f = {
            ...f,
            [S]: {
                ...f[S],
                ...C
            }
        },
        b && w <= 50 && (w++,
        typeof b == "object" && (b.placement && (h = b.placement),
        b.rects && (u = b.rects === !0 ? await l.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : b.rects),
        {x: d, y: m} = cf(u, h, a)),
        v = -1)
    }
    return {
        x: d,
        y: m,
        placement: h,
        strategy: r,
        middlewareData: f
    }
}
;
async function to(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: i, y: r, platform: o, rects: l, elements: s, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: m="floating", altBoundary: h=!1, padding: f=0} = Kt(t, e)
      , w = Z0(f)
      , S = s[h ? m === "floating" ? "reference" : "floating" : m]
      , g = Ml(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(S))) == null || n ? S : S.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: a
    }))
      , p = m === "floating" ? {
        x: i,
        y: r,
        width: l.floating.width,
        height: l.floating.height
    } : l.reference
      , y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating))
      , C = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = Ml(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: p,
        offsetParent: y,
        strategy: a
    }) : p);
    return {
        top: (g.top - b.top + w.top) / C.y,
        bottom: (b.bottom - g.bottom + w.bottom) / C.y,
        left: (g.left - b.left + w.left) / C.x,
        right: (b.right - g.right + w.right) / C.x
    }
}
const ow = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: i, placement: r, rects: o, platform: l, elements: s, middlewareData: a} = t
          , {element: u, padding: d=0} = Kt(e, t) || {};
        if (u == null)
            return {};
        const m = Z0(d)
          , h = {
            x: n,
            y: i
        }
          , f = uu(r)
          , w = cu(f)
          , v = await l.getDimensions(u)
          , S = f === "y"
          , g = S ? "top" : "left"
          , p = S ? "bottom" : "right"
          , y = S ? "clientHeight" : "clientWidth"
          , C = o.reference[w] + o.reference[f] - h[f] - o.floating[w]
          , b = h[f] - o.reference[f]
          , E = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
        let P = E ? E[y] : 0;
        (!P || !await (l.isElement == null ? void 0 : l.isElement(E))) && (P = s.floating[y] || o.floating[w]);
        const j = C / 2 - b / 2
          , F = P / 2 - v[w] / 2 - 1
          , M = Dn(m[g], F)
          , I = Dn(m[p], F)
          , L = M
          , W = P - v[w] - I
          , D = P / 2 - v[w] / 2 + j
          , K = ec(L, D, W)
          , z = !a.arrow && lr(r) != null && D !== K && o.reference[w] / 2 - (D < L ? M : I) - v[w] / 2 < 0
          , B = z ? D < L ? D - L : D - W : 0;
        return {
            [f]: h[f] + B,
            data: {
                [f]: K,
                centerOffset: D - K - B,
                ...z && {
                    alignmentOffset: B
                }
            },
            reset: z
        }
    }
})
  , lw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, i;
            const {placement: r, middlewareData: o, rects: l, initialPlacement: s, platform: a, elements: u} = t
              , {mainAxis: d=!0, crossAxis: m=!0, fallbackPlacements: h, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: v=!0, ...S} = Kt(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = Yt(r)
              , p = Rt(s)
              , y = Yt(s) === s
              , C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , b = h || (y || !v ? [Fl(s)] : Jx(s))
              , E = w !== "none";
            !h && E && b.push(...nw(s, v, w, C));
            const P = [s, ...b]
              , j = await to(t, S)
              , F = [];
            let M = ((i = o.flip) == null ? void 0 : i.overflows) || [];
            if (d && F.push(j[g]),
            m) {
                const D = qx(r, l, C);
                F.push(j[D[0]], j[D[1]])
            }
            if (M = [...M, {
                placement: r,
                overflows: F
            }],
            !F.every(D => D <= 0)) {
                var I, L;
                const D = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1
                  , K = P[D];
                if (K && (!(m === "alignment" ? p !== Rt(K) : !1) || M.every(N => N.overflows[0] > 0 && Rt(N.placement) === p)))
                    return {
                        data: {
                            index: D,
                            overflows: M
                        },
                        reset: {
                            placement: K
                        }
                    };
                let z = (L = M.filter(B => B.overflows[0] <= 0).sort( (B, N) => B.overflows[1] - N.overflows[1])[0]) == null ? void 0 : L.placement;
                if (!z)
                    switch (f) {
                    case "bestFit":
                        {
                            var W;
                            const B = (W = M.filter(N => {
                                if (E) {
                                    const k = Rt(N.placement);
                                    return k === p || k === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(k => k > 0).reduce( (k, O) => k + O, 0)]).sort( (N, k) => N[1] - k[1])[0]) == null ? void 0 : W[0];
                            B && (z = B);
                            break
                        }
                    case "initialPlacement":
                        z = s;
                        break
                    }
                if (r !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function uf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function df(e) {
    return Xx.some(t => e[t] >= 0)
}
const sw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: i="referenceHidden", ...r} = Kt(e, t);
            switch (i) {
            case "referenceHidden":
                {
                    const o = await to(t, {
                        ...r,
                        elementContext: "reference"
                    })
                      , l = uf(o, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: l,
                            referenceHidden: df(l)
                        }
                    }
                }
            case "escaped":
                {
                    const o = await to(t, {
                        ...r,
                        altBoundary: !0
                    })
                      , l = uf(o, n.floating);
                    return {
                        data: {
                            escapedOffsets: l,
                            escaped: df(l)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , eh = new Set(["left", "top"]);
async function aw(e, t) {
    const {placement: n, platform: i, elements: r} = e
      , o = await (i.isRTL == null ? void 0 : i.isRTL(r.floating))
      , l = Yt(n)
      , s = lr(n)
      , a = Rt(n) === "y"
      , u = eh.has(l) ? -1 : 1
      , d = o && a ? -1 : 1
      , m = Kt(t, e);
    let {mainAxis: h, crossAxis: f, alignmentAxis: w} = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis
    };
    return s && typeof w == "number" && (f = s === "end" ? w * -1 : w),
    a ? {
        x: f * d,
        y: h * u
    } : {
        x: h * u,
        y: f * d
    }
}
const cw = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, i;
            const {x: r, y: o, placement: l, middlewareData: s} = t
              , a = await aw(t, e);
            return l === ((n = s.offset) == null ? void 0 : n.placement) && (i = s.arrow) != null && i.alignmentOffset ? {} : {
                x: r + a.x,
                y: o + a.y,
                data: {
                    ...a,
                    placement: l
                }
            }
        }
    }
}
  , uw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: i, placement: r} = t
              , {mainAxis: o=!0, crossAxis: l=!1, limiter: s={
                fn: S => {
                    let {x: g, y: p} = S;
                    return {
                        x: g,
                        y: p
                    }
                }
            }, ...a} = Kt(e, t)
              , u = {
                x: n,
                y: i
            }
              , d = await to(t, a)
              , m = Rt(Yt(r))
              , h = au(m);
            let f = u[h]
              , w = u[m];
            if (o) {
                const S = h === "y" ? "top" : "left"
                  , g = h === "y" ? "bottom" : "right"
                  , p = f + d[S]
                  , y = f - d[g];
                f = ec(p, f, y)
            }
            if (l) {
                const S = m === "y" ? "top" : "left"
                  , g = m === "y" ? "bottom" : "right"
                  , p = w + d[S]
                  , y = w - d[g];
                w = ec(p, w, y)
            }
            const v = s.fn({
                ...t,
                [h]: f,
                [m]: w
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - i,
                    enabled: {
                        [h]: o,
                        [m]: l
                    }
                }
            }
        }
    }
}
  , dw = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: i, placement: r, rects: o, middlewareData: l} = t
              , {offset: s=0, mainAxis: a=!0, crossAxis: u=!0} = Kt(e, t)
              , d = {
                x: n,
                y: i
            }
              , m = Rt(r)
              , h = au(m);
            let f = d[h]
              , w = d[m];
            const v = Kt(s, t)
              , S = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (a) {
                const y = h === "y" ? "height" : "width"
                  , C = o.reference[h] - o.floating[y] + S.mainAxis
                  , b = o.reference[h] + o.reference[y] - S.mainAxis;
                f < C ? f = C : f > b && (f = b)
            }
            if (u) {
                var g, p;
                const y = h === "y" ? "width" : "height"
                  , C = eh.has(Yt(r))
                  , b = o.reference[m] - o.floating[y] + (C && ((g = l.offset) == null ? void 0 : g[m]) || 0) + (C ? 0 : S.crossAxis)
                  , E = o.reference[m] + o.reference[y] + (C ? 0 : ((p = l.offset) == null ? void 0 : p[m]) || 0) - (C ? S.crossAxis : 0);
                w < b ? w = b : w > E && (w = E)
            }
            return {
                [h]: f,
                [m]: w
            }
        }
    }
}
  , fw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, i;
            const {placement: r, rects: o, platform: l, elements: s} = t
              , {apply: a= () => {}
            , ...u} = Kt(e, t)
              , d = await to(t, u)
              , m = Yt(r)
              , h = lr(r)
              , f = Rt(r) === "y"
              , {width: w, height: v} = o.floating;
            let S, g;
            m === "top" || m === "bottom" ? (S = m,
            g = h === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = m,
            S = h === "end" ? "top" : "bottom");
            const p = v - d.top - d.bottom
              , y = w - d.left - d.right
              , C = Dn(v - d[S], p)
              , b = Dn(w - d[g], y)
              , E = !t.middlewareData.shift;
            let P = C
              , j = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y),
            (i = t.middlewareData.shift) != null && i.enabled.y && (P = p),
            E && !h) {
                const M = Xe(d.left, 0)
                  , I = Xe(d.right, 0)
                  , L = Xe(d.top, 0)
                  , W = Xe(d.bottom, 0);
                f ? j = w - 2 * (M !== 0 || I !== 0 ? M + I : Xe(d.left, d.right)) : P = v - 2 * (L !== 0 || W !== 0 ? L + W : Xe(d.top, d.bottom))
            }
            await a({
                ...t,
                availableWidth: j,
                availableHeight: P
            });
            const F = await l.getDimensions(s.floating);
            return w !== F.width || v !== F.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function os() {
    return typeof window < "u"
}
function sr(e) {
    return th(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ye(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ot(e) {
    var t;
    return (t = (th(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function th(e) {
    return os() ? e instanceof Node || e instanceof Ye(e).Node : !1
}
function Et(e) {
    return os() ? e instanceof Element || e instanceof Ye(e).Element : !1
}
function Lt(e) {
    return os() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1
}
function ff(e) {
    return !os() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot
}
const mw = new Set(["inline", "contents"]);
function mo(e) {
    const {overflow: t, overflowX: n, overflowY: i, display: r} = bt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !mw.has(r)
}
const pw = new Set(["table", "td", "th"]);
function hw(e) {
    return pw.has(sr(e))
}
const gw = [":popover-open", ":modal"];
function ls(e) {
    return gw.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const vw = ["transform", "translate", "scale", "rotate", "perspective"]
  , yw = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , xw = ["paint", "layout", "strict", "content"];
function du(e) {
    const t = fu()
      , n = Et(e) ? bt(e) : e;
    return vw.some(i => n[i] ? n[i] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || yw.some(i => (n.willChange || "").includes(i)) || xw.some(i => (n.contain || "").includes(i))
}
function ww(e) {
    let t = Ln(e);
    for (; Lt(t) && !er(t); ) {
        if (du(t))
            return t;
        if (ls(t))
            return null;
        t = Ln(t)
    }
    return null
}
function fu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Sw = new Set(["html", "body", "#document"]);
function er(e) {
    return Sw.has(sr(e))
}
function bt(e) {
    return Ye(e).getComputedStyle(e)
}
function ss(e) {
    return Et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Ln(e) {
    if (sr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || ff(e) && e.host || Ot(e);
    return ff(t) ? t.host : t
}
function nh(e) {
    const t = Ln(e);
    return er(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lt(t) && mo(t) ? t : nh(t)
}
function no(e, t, n) {
    var i;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const r = nh(e)
      , o = r === ((i = e.ownerDocument) == null ? void 0 : i.body)
      , l = Ye(r);
    if (o) {
        const s = nc(l);
        return t.concat(l, l.visualViewport || [], mo(r) ? r : [], s && n ? no(s) : [])
    }
    return t.concat(r, no(r, [], n))
}
function nc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function ih(e) {
    const t = bt(e);
    let n = parseFloat(t.width) || 0
      , i = parseFloat(t.height) || 0;
    const r = Lt(e)
      , o = r ? e.offsetWidth : n
      , l = r ? e.offsetHeight : i
      , s = Rl(n) !== o || Rl(i) !== l;
    return s && (n = o,
    i = l),
    {
        width: n,
        height: i,
        $: s
    }
}
function mu(e) {
    return Et(e) ? e : e.contextElement
}
function Ii(e) {
    const t = mu(e);
    if (!Lt(t))
        return Dt(1);
    const n = t.getBoundingClientRect()
      , {width: i, height: r, $: o} = ih(t);
    let l = (o ? Rl(n.width) : n.width) / i
      , s = (o ? Rl(n.height) : n.height) / r;
    return (!l || !Number.isFinite(l)) && (l = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: l,
        y: s
    }
}
const Cw = Dt(0);
function rh(e) {
    const t = Ye(e);
    return !fu() || !t.visualViewport ? Cw : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Ew(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ye(e) ? !1 : t
}
function si(e, t, n, i) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = mu(e);
    let l = Dt(1);
    t && (i ? Et(i) && (l = Ii(i)) : l = Ii(e));
    const s = Ew(o, n, i) ? rh(o) : Dt(0);
    let a = (r.left + s.x) / l.x
      , u = (r.top + s.y) / l.y
      , d = r.width / l.x
      , m = r.height / l.y;
    if (o) {
        const h = Ye(o)
          , f = i && Et(i) ? Ye(i) : i;
        let w = h
          , v = nc(w);
        for (; v && i && f !== w; ) {
            const S = Ii(v)
              , g = v.getBoundingClientRect()
              , p = bt(v)
              , y = g.left + (v.clientLeft + parseFloat(p.paddingLeft)) * S.x
              , C = g.top + (v.clientTop + parseFloat(p.paddingTop)) * S.y;
            a *= S.x,
            u *= S.y,
            d *= S.x,
            m *= S.y,
            a += y,
            u += C,
            w = Ye(v),
            v = nc(w)
        }
    }
    return Ml({
        width: d,
        height: m,
        x: a,
        y: u
    })
}
function pu(e, t) {
    const n = ss(e).scrollLeft;
    return t ? t.left + n : si(Ot(e)).left + n
}
function oh(e, t, n) {
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , r = i.left + t.scrollLeft - (n ? 0 : pu(e, i))
      , o = i.top + t.scrollTop;
    return {
        x: r,
        y: o
    }
}
function bw(e) {
    let {elements: t, rect: n, offsetParent: i, strategy: r} = e;
    const o = r === "fixed"
      , l = Ot(i)
      , s = t ? ls(t.floating) : !1;
    if (i === l || s && o)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Dt(1);
    const d = Dt(0)
      , m = Lt(i);
    if ((m || !m && !o) && ((sr(i) !== "body" || mo(l)) && (a = ss(i)),
    Lt(i))) {
        const f = si(i);
        u = Ii(i),
        d.x = f.x + i.clientLeft,
        d.y = f.y + i.clientTop
    }
    const h = l && !m && !o ? oh(l, a, !0) : Dt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + d.x + h.x,
        y: n.y * u.y - a.scrollTop * u.y + d.y + h.y
    }
}
function Pw(e) {
    return Array.from(e.getClientRects())
}
function Tw(e) {
    const t = Ot(e)
      , n = ss(e)
      , i = e.ownerDocument.body
      , r = Xe(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth)
      , o = Xe(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
    let l = -n.scrollLeft + pu(e);
    const s = -n.scrollTop;
    return bt(i).direction === "rtl" && (l += Xe(t.clientWidth, i.clientWidth) - r),
    {
        width: r,
        height: o,
        x: l,
        y: s
    }
}
function Nw(e, t) {
    const n = Ye(e)
      , i = Ot(e)
      , r = n.visualViewport;
    let o = i.clientWidth
      , l = i.clientHeight
      , s = 0
      , a = 0;
    if (r) {
        o = r.width,
        l = r.height;
        const u = fu();
        (!u || u && t === "fixed") && (s = r.offsetLeft,
        a = r.offsetTop)
    }
    return {
        width: o,
        height: l,
        x: s,
        y: a
    }
}
const kw = new Set(["absolute", "fixed"]);
function jw(e, t) {
    const n = si(e, !0, t === "fixed")
      , i = n.top + e.clientTop
      , r = n.left + e.clientLeft
      , o = Lt(e) ? Ii(e) : Dt(1)
      , l = e.clientWidth * o.x
      , s = e.clientHeight * o.y
      , a = r * o.x
      , u = i * o.y;
    return {
        width: l,
        height: s,
        x: a,
        y: u
    }
}
function mf(e, t, n) {
    let i;
    if (t === "viewport")
        i = Nw(e, n);
    else if (t === "document")
        i = Tw(Ot(e));
    else if (Et(t))
        i = jw(t, n);
    else {
        const r = rh(e);
        i = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
        }
    }
    return Ml(i)
}
function lh(e, t) {
    const n = Ln(e);
    return n === t || !Et(n) || er(n) ? !1 : bt(n).position === "fixed" || lh(n, t)
}
function Aw(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let i = no(e, [], !1).filter(s => Et(s) && sr(s) !== "body")
      , r = null;
    const o = bt(e).position === "fixed";
    let l = o ? Ln(e) : e;
    for (; Et(l) && !er(l); ) {
        const s = bt(l)
          , a = du(l);
        !a && s.position === "fixed" && (r = null),
        (o ? !a && !r : !a && s.position === "static" && !!r && kw.has(r.position) || mo(l) && !a && lh(e, l)) ? i = i.filter(d => d !== l) : r = s,
        l = Ln(l)
    }
    return t.set(e, i),
    i
}
function Rw(e) {
    let {element: t, boundary: n, rootBoundary: i, strategy: r} = e;
    const l = [...n === "clippingAncestors" ? ls(t) ? [] : Aw(t, this._c) : [].concat(n), i]
      , s = l[0]
      , a = l.reduce( (u, d) => {
        const m = mf(t, d, r);
        return u.top = Xe(m.top, u.top),
        u.right = Dn(m.right, u.right),
        u.bottom = Dn(m.bottom, u.bottom),
        u.left = Xe(m.left, u.left),
        u
    }
    , mf(t, s, r));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function Fw(e) {
    const {width: t, height: n} = ih(e);
    return {
        width: t,
        height: n
    }
}
function Mw(e, t, n) {
    const i = Lt(t)
      , r = Ot(t)
      , o = n === "fixed"
      , l = si(e, !0, o, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Dt(0);
    function u() {
        a.x = pu(r)
    }
    if (i || !i && !o)
        if ((sr(t) !== "body" || mo(r)) && (s = ss(t)),
        i) {
            const f = si(t, !0, o, t);
            a.x = f.x + t.clientLeft,
            a.y = f.y + t.clientTop
        } else
            r && u();
    o && !i && r && u();
    const d = r && !i && !o ? oh(r, s) : Dt(0)
      , m = l.left + s.scrollLeft - a.x - d.x
      , h = l.top + s.scrollTop - a.y - d.y;
    return {
        x: m,
        y: h,
        width: l.width,
        height: l.height
    }
}
function Ws(e) {
    return bt(e).position === "static"
}
function pf(e, t) {
    if (!Lt(e) || bt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Ot(e) === n && (n = n.ownerDocument.body),
    n
}
function sh(e, t) {
    const n = Ye(e);
    if (ls(e))
        return n;
    if (!Lt(e)) {
        let r = Ln(e);
        for (; r && !er(r); ) {
            if (Et(r) && !Ws(r))
                return r;
            r = Ln(r)
        }
        return n
    }
    let i = pf(e, t);
    for (; i && hw(i) && Ws(i); )
        i = pf(i, t);
    return i && er(i) && Ws(i) && !du(i) ? n : i || ww(e) || n
}
const Dw = async function(e) {
    const t = this.getOffsetParent || sh
      , n = this.getDimensions
      , i = await n(e.floating);
    return {
        reference: Mw(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};
function Lw(e) {
    return bt(e).direction === "rtl"
}
const Ow = {
    convertOffsetParentRelativeRectToViewportRelativeRect: bw,
    getDocumentElement: Ot,
    getClippingRect: Rw,
    getOffsetParent: sh,
    getElementRects: Dw,
    getClientRects: Pw,
    getDimensions: Fw,
    getScale: Ii,
    isElement: Et,
    isRTL: Lw
};
function ah(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function _w(e, t) {
    let n = null, i;
    const r = Ot(e);
    function o() {
        var s;
        clearTimeout(i),
        (s = n) == null || s.disconnect(),
        n = null
    }
    function l(s, a) {
        s === void 0 && (s = !1),
        a === void 0 && (a = 1),
        o();
        const u = e.getBoundingClientRect()
          , {left: d, top: m, width: h, height: f} = u;
        if (s || t(),
        !h || !f)
            return;
        const w = zo(m)
          , v = zo(r.clientWidth - (d + h))
          , S = zo(r.clientHeight - (m + f))
          , g = zo(d)
          , y = {
            rootMargin: -w + "px " + -v + "px " + -S + "px " + -g + "px",
            threshold: Xe(0, Dn(1, a)) || 1
        };
        let C = !0;
        function b(E) {
            const P = E[0].intersectionRatio;
            if (P !== a) {
                if (!C)
                    return l();
                P ? l(!1, P) : i = setTimeout( () => {
                    l(!1, 1e-7)
                }
                , 1e3)
            }
            P === 1 && !ah(u, e.getBoundingClientRect()) && l(),
            C = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...y,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,y)
        }
        n.observe(e)
    }
    return l(!0),
    o
}
function Iw(e, t, n, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: r=!0, ancestorResize: o=!0, elementResize: l=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: a=!1} = i
      , u = mu(e)
      , d = r || o ? [...u ? no(u) : [], ...no(t)] : [];
    d.forEach(g => {
        r && g.addEventListener("scroll", n, {
            passive: !0
        }),
        o && g.addEventListener("resize", n)
    }
    );
    const m = u && s ? _w(u, n) : null;
    let h = -1
      , f = null;
    l && (f = new ResizeObserver(g => {
        let[p] = g;
        p && p.target === u && f && (f.unobserve(t),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var y;
            (y = f) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && f.observe(u),
    f.observe(t));
    let w, v = a ? si(e) : null;
    a && S();
    function S() {
        const g = si(e);
        v && !ah(v, g) && n(),
        v = g,
        w = requestAnimationFrame(S)
    }
    return n(),
    () => {
        var g;
        d.forEach(p => {
            r && p.removeEventListener("scroll", n),
            o && p.removeEventListener("resize", n)
        }
        ),
        m == null || m(),
        (g = f) == null || g.disconnect(),
        f = null,
        a && cancelAnimationFrame(w)
    }
}
const Vw = cw
  , zw = uw
  , Uw = lw
  , Hw = fw
  , Bw = sw
  , hf = ow
  , $w = dw
  , Gw = (e, t, n) => {
    const i = new Map
      , r = {
        platform: Ow,
        ...n
    }
      , o = {
        ...r.platform,
        _c: i
    };
    return rw(e, t, {
        ...r,
        platform: o
    })
}
;
var Ww = typeof document < "u"
  , Xw = function() {}
  , nl = Ww ? x.useLayoutEffect : Xw;
function Dl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, i, r;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (i = n; i-- !== 0; )
                if (!Dl(e[i], t[i]))
                    return !1;
            return !0
        }
        if (r = Object.keys(e),
        n = r.length,
        n !== Object.keys(t).length)
            return !1;
        for (i = n; i-- !== 0; )
            if (!{}.hasOwnProperty.call(t, r[i]))
                return !1;
        for (i = n; i-- !== 0; ) {
            const o = r[i];
            if (!(o === "_owner" && e.$$typeof) && !Dl(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function ch(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function gf(e, t) {
    const n = ch(e);
    return Math.round(t * n) / n
}
function Xs(e) {
    const t = x.useRef(e);
    return nl( () => {
        t.current = e
    }
    ),
    t
}
function Qw(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: i=[], platform: r, elements: {reference: o, floating: l}={}, transform: s=!0, whileElementsMounted: a, open: u} = e
      , [d,m] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [h,f] = x.useState(i);
    Dl(h, i) || f(i);
    const [w,v] = x.useState(null)
      , [S,g] = x.useState(null)
      , p = x.useCallback(N => {
        N !== E.current && (E.current = N,
        v(N))
    }
    , [])
      , y = x.useCallback(N => {
        N !== P.current && (P.current = N,
        g(N))
    }
    , [])
      , C = o || w
      , b = l || S
      , E = x.useRef(null)
      , P = x.useRef(null)
      , j = x.useRef(d)
      , F = a != null
      , M = Xs(a)
      , I = Xs(r)
      , L = Xs(u)
      , W = x.useCallback( () => {
        if (!E.current || !P.current)
            return;
        const N = {
            placement: t,
            strategy: n,
            middleware: h
        };
        I.current && (N.platform = I.current),
        Gw(E.current, P.current, N).then(k => {
            const O = {
                ...k,
                isPositioned: L.current !== !1
            };
            D.current && !Dl(j.current, O) && (j.current = O,
            uo.flushSync( () => {
                m(O)
            }
            ))
        }
        )
    }
    , [h, t, n, I, L]);
    nl( () => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        m(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = x.useRef(!1);
    nl( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    nl( () => {
        if (C && (E.current = C),
        b && (P.current = b),
        C && b) {
            if (M.current)
                return M.current(C, b, W);
            W()
        }
    }
    , [C, b, W, M, F]);
    const K = x.useMemo( () => ({
        reference: E,
        floating: P,
        setReference: p,
        setFloating: y
    }), [p, y])
      , z = x.useMemo( () => ({
        reference: C,
        floating: b
    }), [C, b])
      , B = x.useMemo( () => {
        const N = {
            position: n,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return N;
        const k = gf(z.floating, d.x)
          , O = gf(z.floating, d.y);
        return s ? {
            ...N,
            transform: "translate(" + k + "px, " + O + "px)",
            ...ch(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: k,
            top: O
        }
    }
    , [n, s, z.floating, d.x, d.y]);
    return x.useMemo( () => ({
        ...d,
        update: W,
        refs: K,
        elements: z,
        floatingStyles: B
    }), [d, W, K, z, B])
}
const Kw = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: i, padding: r} = typeof e == "function" ? e(n) : e;
            return i && t(i) ? i.current != null ? hf({
                element: i.current,
                padding: r
            }).fn(n) : {} : i ? hf({
                element: i,
                padding: r
            }).fn(n) : {}
        }
    }
}
  , Yw = (e, t) => ({
    ...Vw(e),
    options: [e, t]
})
  , qw = (e, t) => ({
    ...zw(e),
    options: [e, t]
})
  , Jw = (e, t) => ({
    ...$w(e),
    options: [e, t]
})
  , Zw = (e, t) => ({
    ...Uw(e),
    options: [e, t]
})
  , eS = (e, t) => ({
    ...Hw(e),
    options: [e, t]
})
  , tS = (e, t) => ({
    ...Bw(e),
    options: [e, t]
})
  , nS = (e, t) => ({
    ...Kw(e),
    options: [e, t]
});
var iS = "Arrow"
  , uh = x.forwardRef( (e, t) => {
    const {children: n, width: i=10, height: r=5, ...o} = e;
    return c.jsx($e.svg, {
        ...o,
        ref: t,
        width: i,
        height: r,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
uh.displayName = iS;
var rS = uh;
function oS(e) {
    const [t,n] = x.useState(void 0);
    return Mn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const i = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length)
                    return;
                const o = r[0];
                let l, s;
                if ("borderBoxSize"in o) {
                    const a = o.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    l = u.inlineSize,
                    s = u.blockSize
                } else
                    l = e.offsetWidth,
                    s = e.offsetHeight;
                n({
                    width: l,
                    height: s
                })
            }
            );
            return i.observe(e, {
                box: "border-box"
            }),
            () => i.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var dh = "Popper"
  , [fh,mh] = ns(dh)
  , [nE,ph] = fh(dh)
  , hh = "PopperAnchor"
  , gh = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: i, ...r} = e
      , o = ph(hh, n)
      , l = x.useRef(null)
      , s = Ct(t, l);
    return x.useEffect( () => {
        o.onAnchorChange((i == null ? void 0 : i.current) || l.current)
    }
    ),
    i ? null : c.jsx($e.div, {
        ...r,
        ref: s
    })
}
);
gh.displayName = hh;
var hu = "PopperContent"
  , [lS,sS] = fh(hu)
  , vh = x.forwardRef( (e, t) => {
    var Z, di, Jt, Vn, Zt, fi;
    const {__scopePopper: n, side: i="bottom", sideOffset: r=0, align: o="center", alignOffset: l=0, arrowPadding: s=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: m="partial", hideWhenDetached: h=!1, updatePositionStrategy: f="optimized", onPlaced: w, ...v} = e
      , S = ph(hu, n)
      , [g,p] = x.useState(null)
      , y = Ct(t, en => p(en))
      , [C,b] = x.useState(null)
      , E = oS(C)
      , P = (E == null ? void 0 : E.width) ?? 0
      , j = (E == null ? void 0 : E.height) ?? 0
      , F = i + (o !== "center" ? "-" + o : "")
      , M = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , I = Array.isArray(u) ? u : [u]
      , L = I.length > 0
      , W = {
        padding: M,
        boundary: I.filter(cS),
        altBoundary: L
    }
      , {refs: D, floatingStyles: K, placement: z, isPositioned: B, middlewareData: N} = Qw({
        strategy: "fixed",
        placement: F,
        whileElementsMounted: (...en) => Iw(...en, {
            animationFrame: f === "always"
        }),
        elements: {
            reference: S.anchor
        },
        middleware: [Yw({
            mainAxis: r + j,
            alignmentAxis: l
        }), a && qw({
            mainAxis: !0,
            crossAxis: !1,
            limiter: m === "partial" ? Jw() : void 0,
            ...W
        }), a && Zw({
            ...W
        }), eS({
            ...W,
            apply: ({elements: en, rects: ho, availableWidth: us, availableHeight: go}) => {
                const {width: ds, height: ar} = ho.reference
                  , mi = en.floating.style;
                mi.setProperty("--radix-popper-available-width", `${us}px`),
                mi.setProperty("--radix-popper-available-height", `${go}px`),
                mi.setProperty("--radix-popper-anchor-width", `${ds}px`),
                mi.setProperty("--radix-popper-anchor-height", `${ar}px`)
            }
        }), C && nS({
            element: C,
            padding: s
        }), uS({
            arrowWidth: P,
            arrowHeight: j
        }), h && tS({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [k,O] = wh(z)
      , $ = Fn(w);
    Mn( () => {
        B && ($ == null || $())
    }
    , [B, $]);
    const V = (Z = N.arrow) == null ? void 0 : Z.x
      , X = (di = N.arrow) == null ? void 0 : di.y
      , Y = ((Jt = N.arrow) == null ? void 0 : Jt.centerOffset) !== 0
      , [pe,be] = x.useState();
    return Mn( () => {
        g && be(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    c.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...K,
            transform: B ? K.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: pe,
            "--radix-popper-transform-origin": [(Vn = N.transformOrigin) == null ? void 0 : Vn.x, (Zt = N.transformOrigin) == null ? void 0 : Zt.y].join(" "),
            ...((fi = N.hide) == null ? void 0 : fi.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(lS, {
            scope: n,
            placedSide: k,
            onArrowChange: b,
            arrowX: V,
            arrowY: X,
            shouldHideArrow: Y,
            children: c.jsx($e.div, {
                "data-side": k,
                "data-align": O,
                ...v,
                ref: y,
                style: {
                    ...v.style,
                    animation: B ? void 0 : "none"
                }
            })
        })
    })
}
);
vh.displayName = hu;
var yh = "PopperArrow"
  , aS = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , xh = x.forwardRef(function(t, n) {
    const {__scopePopper: i, ...r} = t
      , o = sS(yh, i)
      , l = aS[o.placedSide];
    return c.jsx("span", {
        ref: o.onArrowChange,
        style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [l]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[o.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[o.placedSide],
            visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(rS, {
            ...r,
            ref: n,
            style: {
                ...r.style,
                display: "block"
            }
        })
    })
});
xh.displayName = yh;
function cS(e) {
    return e !== null
}
var uS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, g, p;
        const {placement: n, rects: i, middlewareData: r} = t
          , l = ((S = r.arrow) == null ? void 0 : S.centerOffset) !== 0
          , s = l ? 0 : e.arrowWidth
          , a = l ? 0 : e.arrowHeight
          , [u,d] = wh(n)
          , m = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , h = (((g = r.arrow) == null ? void 0 : g.x) ?? 0) + s / 2
          , f = (((p = r.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
        let w = ""
          , v = "";
        return u === "bottom" ? (w = l ? m : `${h}px`,
        v = `${-a}px`) : u === "top" ? (w = l ? m : `${h}px`,
        v = `${i.floating.height + a}px`) : u === "right" ? (w = `${-a}px`,
        v = l ? m : `${f}px`) : u === "left" && (w = `${i.floating.width + a}px`,
        v = l ? m : `${f}px`),
        {
            data: {
                x: w,
                y: v
            }
        }
    }
});
function wh(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var dS = gh
  , fS = vh
  , mS = xh
  , [as,iE] = ns("Tooltip", [mh])
  , gu = mh()
  , Sh = "TooltipProvider"
  , pS = 700
  , vf = "tooltip.open"
  , [hS,Ch] = as(Sh)
  , Eh = e => {
    const {__scopeTooltip: t, delayDuration: n=pS, skipDelayDuration: i=300, disableHoverableContent: r=!1, children: o} = e
      , l = x.useRef(!0)
      , s = x.useRef(!1)
      , a = x.useRef(0);
    return x.useEffect( () => {
        const u = a.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(hS, {
        scope: t,
        isOpenDelayedRef: l,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(a.current),
            l.current = !1
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => l.current = !0, i)
        }
        , [i]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: x.useCallback(u => {
            s.current = u
        }
        , []),
        disableHoverableContent: r,
        children: o
    })
}
;
Eh.displayName = Sh;
var bh = "Tooltip"
  , [rE,cs] = as(bh)
  , ic = "TooltipTrigger"
  , gS = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...i} = e
      , r = cs(ic, n)
      , o = Ch(ic, n)
      , l = gu(n)
      , s = x.useRef(null)
      , a = Ct(t, s, r.onTriggerChange)
      , u = x.useRef(!1)
      , d = x.useRef(!1)
      , m = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", m), [m]),
    c.jsx(dS, {
        asChild: !0,
        ...l,
        children: c.jsx($e.button, {
            "aria-describedby": r.open ? r.contentId : void 0,
            "data-state": r.stateAttribute,
            ...i,
            ref: a,
            onPointerMove: ve(e.onPointerMove, h => {
                h.pointerType !== "touch" && !d.current && !o.isPointerInTransitRef.current && (r.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: ve(e.onPointerLeave, () => {
                r.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: ve(e.onPointerDown, () => {
                r.open && r.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", m, {
                    once: !0
                })
            }
            ),
            onFocus: ve(e.onFocus, () => {
                u.current || r.onOpen()
            }
            ),
            onBlur: ve(e.onBlur, r.onClose),
            onClick: ve(e.onClick, r.onClose)
        })
    })
}
);
gS.displayName = ic;
var vS = "TooltipPortal"
  , [oE,yS] = as(vS, {
    forceMount: void 0
})
  , tr = "TooltipContent"
  , Ph = x.forwardRef( (e, t) => {
    const n = yS(tr, e.__scopeTooltip)
      , {forceMount: i=n.forceMount, side: r="top", ...o} = e
      , l = cs(tr, e.__scopeTooltip);
    return c.jsx(iu, {
        present: i || l.open,
        children: l.disableHoverableContent ? c.jsx(Th, {
            side: r,
            ...o,
            ref: t
        }) : c.jsx(xS, {
            side: r,
            ...o,
            ref: t
        })
    })
}
)
  , xS = x.forwardRef( (e, t) => {
    const n = cs(tr, e.__scopeTooltip)
      , i = Ch(tr, e.__scopeTooltip)
      , r = x.useRef(null)
      , o = Ct(t, r)
      , [l,s] = x.useState(null)
      , {trigger: a, onClose: u} = n
      , d = r.current
      , {onPointerInTransitChange: m} = i
      , h = x.useCallback( () => {
        s(null),
        m(!1)
    }
    , [m])
      , f = x.useCallback( (w, v) => {
        const S = w.currentTarget
          , g = {
            x: w.clientX,
            y: w.clientY
        }
          , p = bS(g, S.getBoundingClientRect())
          , y = PS(g, p)
          , C = TS(v.getBoundingClientRect())
          , b = kS([...y, ...C]);
        s(b),
        m(!0)
    }
    , [m]);
    return x.useEffect( () => () => h(), [h]),
    x.useEffect( () => {
        if (a && d) {
            const w = S => f(S, d)
              , v = S => f(S, a);
            return a.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", v),
            () => {
                a.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", v)
            }
        }
    }
    , [a, d, f, h]),
    x.useEffect( () => {
        if (l) {
            const w = v => {
                const S = v.target
                  , g = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , p = (a == null ? void 0 : a.contains(S)) || (d == null ? void 0 : d.contains(S))
                  , y = !NS(g, l);
                p ? h() : y && (h(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [a, d, l, u, h]),
    c.jsx(Th, {
        ...e,
        ref: o
    })
}
)
  , [wS,SS] = as(bh, {
    isInside: !1
})
  , CS = dy("TooltipContent")
  , Th = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: i, "aria-label": r, onEscapeKeyDown: o, onPointerDownOutside: l, ...s} = e
      , a = cs(tr, n)
      , u = gu(n)
      , {onClose: d} = a;
    return x.useEffect( () => (document.addEventListener(vf, d),
    () => document.removeEventListener(vf, d)), [d]),
    x.useEffect( () => {
        if (a.trigger) {
            const m = h => {
                const f = h.target;
                f != null && f.contains(a.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", m, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", m, {
                capture: !0
            })
        }
    }
    , [a.trigger, d]),
    c.jsx(nu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: l,
        onFocusOutside: m => m.preventDefault(),
        onDismiss: d,
        children: c.jsxs(fS, {
            "data-state": a.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(CS, {
                children: i
            }), c.jsx(wS, {
                scope: n,
                isInside: !0,
                children: c.jsx(Oy, {
                    id: a.contentId,
                    role: "tooltip",
                    children: r || i
                })
            })]
        })
    })
}
);
Ph.displayName = tr;
var Nh = "TooltipArrow"
  , ES = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...i} = e
      , r = gu(n);
    return SS(Nh, n).isInside ? null : c.jsx(mS, {
        ...r,
        ...i,
        ref: t
    })
}
);
ES.displayName = Nh;
function bS(e, t) {
    const n = Math.abs(t.top - e.y)
      , i = Math.abs(t.bottom - e.y)
      , r = Math.abs(t.right - e.x)
      , o = Math.abs(t.left - e.x);
    switch (Math.min(n, i, r, o)) {
    case o:
        return "left";
    case r:
        return "right";
    case n:
        return "top";
    case i:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function PS(e, t, n=5) {
    const i = [];
    switch (t) {
    case "top":
        i.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        i.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        i.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        i.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return i
}
function TS(e) {
    const {top: t, right: n, bottom: i, left: r} = e;
    return [{
        x: r,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: i
    }, {
        x: r,
        y: i
    }]
}
function NS(e, t) {
    const {x: n, y: i} = e;
    let r = !1;
    for (let o = 0, l = t.length - 1; o < t.length; l = o++) {
        const s = t[o]
          , a = t[l]
          , u = s.x
          , d = s.y
          , m = a.x
          , h = a.y;
        d > i != h > i && n < (m - u) * (i - d) / (h - d) + u && (r = !r)
    }
    return r
}
function kS(e) {
    const t = e.slice();
    return t.sort( (n, i) => n.x < i.x ? -1 : n.x > i.x ? 1 : n.y < i.y ? -1 : n.y > i.y ? 1 : 0),
    jS(t)
}
function jS(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let i = 0; i < e.length; i++) {
        const r = e[i];
        for (; t.length >= 2; ) {
            const o = t[t.length - 1]
              , l = t[t.length - 2];
            if ((o.x - l.x) * (r.y - l.y) >= (o.y - l.y) * (r.x - l.x))
                t.pop();
            else
                break
        }
        t.push(r)
    }
    t.pop();
    const n = [];
    for (let i = e.length - 1; i >= 0; i--) {
        const r = e[i];
        for (; n.length >= 2; ) {
            const o = n[n.length - 1]
              , l = n[n.length - 2];
            if ((o.x - l.x) * (r.y - l.y) >= (o.y - l.y) * (r.x - l.x))
                n.pop();
            else
                break
        }
        n.push(r)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var AS = Eh
  , kh = Ph;
const RS = AS
  , FS = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, i) => c.jsx(kh, {
    ref: i,
    sideOffset: t,
    className: ui("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
FS.displayName = kh.displayName;
const MS = () => {
    x.useEffect( () => {
        const e = n => n.preventDefault();
        document.addEventListener("contextmenu", e);
        const t = n => {
            if (n.key === "F12") {
                n.preventDefault();
                return
            }
            if (n.ctrlKey && n.key === "u") {
                n.preventDefault();
                return
            }
            if (n.ctrlKey && n.key === "s") {
                n.preventDefault();
                return
            }
            if (n.ctrlKey && n.shiftKey && (n.key === "I" || n.key === "J" || n.key === "C")) {
                n.preventDefault();
                return
            }
            if (n.ctrlKey && n.key === "a") {
                n.preventDefault();
                return
            }
        }
        ;
        return document.addEventListener("keydown", t),
        console.clear(),
        console.log("%c⛔ ÁREA RESTRITA", "color: red; font-size: 24px; font-weight: bold;"),
        console.log("%cEste site é propriedade da TAPEDRIVE. Qualquer cópia, reprodução ou uso não autorizado do código ou estrutura está sujeito a medidas legais.", "color: #333; font-size: 14px;"),
        () => {
            document.removeEventListener("contextmenu", e),
            document.removeEventListener("keydown", t)
        }
    }
    , [])
}
  , jh = () => {
    const [e,t] = x.useState({
        days: 0,
        hours: 23,
        minutes: 59,
        seconds: 59
    });
    return x.useEffect( () => {
        const n = () => {
            const o = new Date
              , l = new Date(o);
            return l.setHours(24, 0, 0, 0),
            Math.floor((l.getTime() - o.getTime()) / 1e3)
        }
          , i = () => {
            let o = n();
            o <= 0 && (o = 86399);
            const l = Math.floor(o / 86400)
              , s = Math.floor(o % 86400 / 3600)
              , a = Math.floor(o % 3600 / 60)
              , u = o % 60;
            t({
                days: l,
                hours: s,
                minutes: a,
                seconds: u
            })
        }
        ;
        i();
        const r = setInterval(i, 1e3);
        return () => clearInterval(r)
    }
    , []),
    e
}
  , DS = () => {
    const {hours: e, minutes: t, seconds: n} = jh();
    return c.jsx("div", {
        className: "text-white py-[8px] px-[20px] text-center",
        style: {
            background: "#2EAA3F"
        },
        children: c.jsxs("p", {
            className: "text-[13px] font-badge leading-tight",
            children: ["🔥 SEMANA DO CLIENTE — Frete Grátis + Desconto Especial | ⏰ Encerra em:", " ", c.jsxs("span", {
                className: "font-display",
                children: [String(e).padStart(2, "0"), ":", String(t).padStart(2, "0"), ":", String(n).padStart(2, "0")]
            })]
        })
    })
}
  , Ah = "/assets/logo.png"
  , yf = [{
    label: "Produto",
    hash: "#produto"
}, {
    label: "Benefícios",
    hash: "#beneficios"
}, {
    label: "Avaliações",
    hash: "#avaliacoes"
}, {
    label: "Garantia",
    hash: "#garantia"
}, {
    label: "FAQ",
    hash: "#faq"
}, {
    label: "Sobre Nós",
    hash: "#sobre-nos"
}]
  , Rh = () => {
    const [e,t] = x.useState(!1)
      , [n,i] = x.useState(!1)
      , o = tu().pathname === "/";
    x.useEffect( () => {
        const s = () => t(window.scrollY > 10);
        return window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
    }
    , []);
    const l = (s, a) => {
        if (o) {
            s.preventDefault();
            const u = document.querySelector(a);
            u && u.scrollIntoView({
                behavior: "smooth"
            })
        }
        i(!1)
    }
    ;
    return c.jsxs("header", {
        className: `sticky top-0 z-[1000] bg-background transition-shadow duration-300 ${e ? "shadow-[var(--shadow-header)]" : ""}`,
        children: [c.jsxs("div", {
            className: "container mx-auto flex items-center justify-between px-4 h-[56px]",
            children: [c.jsx("a", {
                href: "/",
                children: c.jsx("img", {
                    src: Ah,
                    alt: "TapeDrive",
                    className: "h-[52px] md:h-[56px] w-auto"
                })
            }), c.jsx("nav", {
                className: "hidden md:flex items-center gap-8",
                children: yf.map(s => c.jsx("a", {
                    href: o ? s.hash : `/${s.hash}`,
                    onClick: a => l(a, s.hash),
                    className: "text-[14px] font-body hover:underline transition-colors",
                    style: {
                        color: "#333"
                    },
                    onMouseEnter: a => a.currentTarget.style.color = "#2EAA3F",
                    onMouseLeave: a => a.currentTarget.style.color = "#333",
                    children: s.label
                }, s.hash))
            }), c.jsx("p", {
                className: "hidden md:block text-[13px] font-body",
                style: {
                    color: "#555"
                },
                children: "🔒 Compra 100% Segura"
            }), c.jsx("button", {
                className: "md:hidden p-2",
                onClick: () => i(!n),
                "aria-label": "Menu",
                children: n ? c.jsx(Al, {
                    size: 24,
                    color: "#333"
                }) : c.jsx(lx, {
                    size: 24,
                    color: "#333"
                })
            })]
        }), n && c.jsxs("nav", {
            className: "md:hidden bg-white border-t border-border",
            children: [yf.map(s => c.jsx("a", {
                href: o ? s.hash : `/${s.hash}`,
                onClick: a => l(a, s.hash),
                className: "block text-[14px] font-body py-3 px-4 hover:underline transition-colors",
                style: {
                    color: "#333"
                },
                children: s.label
            }, s.hash)), c.jsx("p", {
                className: "text-[13px] font-body py-3 px-4 border-t border-border",
                style: {
                    color: "#555"
                },
                children: "🔒 Compra 100% Segura"
            })]
        })]
    })
}
  , LS = "/assets/carousel-1-CrCXf52H.png"
  , OS = "/assets/carousel-2-wvHFUQwJ.png"
  , _S = "/assets/carousel-3-anWBYKg_.png"
  , IS = "/assets/carousel-4-DrLlNdDU.png"
  , Hn = [{
    src: LS,
    alt: "Tapete instalado Hyundai HB20",
    label: "Encaixe Perfeito"
}, {
    src: OS,
    alt: "Tapete instalado Peugeot 208",
    label: "Kit Completo"
}, {
    src: _S,
    alt: "Tapete dianteiro e traseiro",
    label: "Cobertura Total"
}, {
    src: IS,
    alt: "Detalhe acabamento sob medida",
    label: "Fácil de Limpar"
}]
  , VS = () => {
    const [e,t] = x.useState(0);
    x.useEffect( () => {
        Hn.forEach( ({src: i}) => {
            const r = new Image;
            r.src = i
        }
        )
    }
    , []);
    const n = i => {
        t(r => i === "right" ? (r + 1) % Hn.length : (r - 1 + Hn.length) % Hn.length)
    }
    ;
    return c.jsx("section", {
        id: "produto",
        className: "py-8 md:py-14 bg-background",
        children: c.jsxs("div", {
            className: "container mx-auto px-4",
            children: [c.jsxs("div", {
                className: "text-center mb-8",
                children: [c.jsx("span", {
                    className: "text-primary font-badge text-[13px] font-bold uppercase tracking-wide",
                    children: "🎯 TAPETE BANDEJA 3D — SOB MEDIDA PARA SEU CARRO"
                }), c.jsx("h1", {
                    className: "font-display font-[800] text-[32px] md:text-[48px] leading-[1.1] text-foreground mt-3",
                    children: "Proteção Total Para o Assoalho do Seu Carro"
                }), c.jsx("p", {
                    className: "text-muted-foreground font-body text-[17px] mt-3 max-w-[560px] mx-auto leading-relaxed",
                    children: "100% sob medida. Borda elevada. Impermeável. Encaixa no seu carro sem folga."
                })]
            }), c.jsxs("div", {
                className: "relative max-w-[520px] mx-auto",
                children: [c.jsxs("div", {
                    className: "relative overflow-hidden rounded-[20px] bg-secondary h-[280px] md:h-[420px]",
                    children: [Hn.map( (i, r) => c.jsx("img", {
                        src: i.src,
                        alt: i.alt,
                        width: 520,
                        height: 420,
                        loading: "eager",
                        decoding: "async",
                        draggable: !1,
                        onContextMenu: o => o.preventDefault(),
                        className: "absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-200 ease-out",
                        style: {
                            opacity: r === e ? 1 : 0,
                            pointerEvents: r === e ? "auto" : "none"
                        }
                    }, r)), c.jsx("span", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold px-3.5 py-1.5 rounded-[20px] whitespace-nowrap z-10",
                        children: Hn[e].label
                    })]
                }), c.jsx("button", {
                    onClick: () => n("left"),
                    className: "absolute left-[-20px] md:left-[-22px] top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-card flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground group",
                    style: {
                        boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
                    },
                    children: c.jsx(_0, {
                        className: "w-5 h-5 text-foreground group-hover:text-primary-foreground"
                    })
                }), c.jsx("button", {
                    onClick: () => n("right"),
                    className: "absolute right-[-20px] md:right-[-22px] top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-card flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground group",
                    style: {
                        boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
                    },
                    children: c.jsx(I0, {
                        className: "w-5 h-5 text-foreground group-hover:text-primary-foreground"
                    })
                }), c.jsx("div", {
                    className: "flex justify-center gap-1.5 mt-4",
                    children: Hn.map( (i, r) => c.jsx("button", {
                        onClick: () => t(r),
                        className: "h-2 rounded-full transition-all duration-200",
                        style: {
                            width: r === e ? 20 : 8,
                            backgroundColor: r === e ? "hsl(var(--primary))" : "#D0D0D0",
                            borderRadius: r === e ? 4 : "50%"
                        }
                    }, r))
                })]
            })]
        })
    })
}
  , vu = {
    Audi: {
        A1: {
            inicio: 2010,
            fim: 2022
        },
        "A1 (Hatch)": {
            inicio: 2010,
            fim: 2022
        },
        "A3 Sedan": {
            inicio: 2013,
            fim: null
        },
        "A3 Sportback": {
            inicio: 2004,
            fim: null
        },
        "A3 Sportback (Hatch)": {
            inicio: 1996,
            fim: null
        },
        A4: {
            inicio: 2e3,
            fim: null
        },
        "A4 (Sedan/Perua)": {
            inicio: 1994,
            fim: null
        },
        A5: {
            inicio: 2007,
            fim: null
        },
        "A5 (Coupé/Sportback)": {
            inicio: 2007,
            fim: null
        },
        A6: {
            inicio: 2e3,
            fim: null
        },
        "A6 (Sedan/Perua)": {
            inicio: 1994,
            fim: null
        },
        A7: {
            inicio: 2010,
            fim: null
        },
        "A7 Sportback": {
            inicio: 2010,
            fim: null
        },
        A8: {
            inicio: 2e3,
            fim: null
        },
        "A8 (Sedan Luxo)": {
            inicio: 1994,
            fim: null
        },
        "E-Tron": {
            inicio: 2018,
            fim: null
        },
        "E-Tron (Elétrico SUV)": {
            inicio: 2018,
            fim: null
        },
        Q3: {
            inicio: 2011,
            fim: null
        },
        "Q3 (SUV Compacto)": {
            inicio: 2011,
            fim: null
        },
        "Q4 e-tron": {
            inicio: 2021,
            fim: null
        },
        Q5: {
            inicio: 2008,
            fim: null
        },
        "Q5 (SUV Médio)": {
            inicio: 2008,
            fim: null
        },
        "Q6 e-tron": {
            inicio: 2025,
            fim: null
        },
        Q7: {
            inicio: 2005,
            fim: null
        },
        "Q7 (SUV Grande)": {
            inicio: 2005,
            fim: null
        },
        Q8: {
            inicio: 2018,
            fim: null
        },
        "Q8 (SUV Coupé Grande)": {
            inicio: 2018,
            fim: null
        },
        "R8 (Esportivo)": {
            inicio: 2006,
            fim: null
        },
        "TT (Coupé/Roadster)": {
            inicio: 1998,
            fim: 2023
        }
    },
    BMW: {
        "116i": {
            inicio: 2012,
            fim: 2019
        },
        "118i": {
            inicio: 2015,
            fim: null
        },
        "120i": {
            inicio: 2012,
            fim: null
        },
        "125i": {
            inicio: 2012,
            fim: 2016
        },
        M135i: {
            inicio: 2013,
            fim: 2016
        },
        "218i": {
            inicio: 2015,
            fim: null
        },
        "220i": {
            inicio: 2014,
            fim: null
        },
        "228i": {
            inicio: 2015,
            fim: 2016
        },
        M235i: {
            inicio: 2015,
            fim: 2020
        },
        M240i: {
            inicio: 2022,
            fim: null
        },
        "316i": {
            inicio: 2013,
            fim: 2015
        },
        "318i": {
            inicio: 2016,
            fim: 2018
        },
        "320i": {
            inicio: 2012,
            fim: null
        },
        "320i Sport GP": {
            inicio: 2019,
            fim: null
        },
        "320i M Sport": {
            inicio: 2019,
            fim: null
        },
        "328i": {
            inicio: 2012,
            fim: 2016
        },
        "330i": {
            inicio: 2016,
            fim: null
        },
        "330e": {
            inicio: 2021,
            fim: null
        },
        "335i": {
            inicio: 2012,
            fim: 2015
        },
        "340i": {
            inicio: 2016,
            fim: 2018
        },
        M3: {
            inicio: 2014,
            fim: null
        },
        "420i": {
            inicio: 2014,
            fim: null
        },
        "428i": {
            inicio: 2014,
            fim: 2016
        },
        "430i": {
            inicio: 2017,
            fim: null
        },
        "440i": {
            inicio: 2017,
            fim: 2020
        },
        M4: {
            inicio: 2014,
            fim: null
        },
        "520i": {
            inicio: 2014,
            fim: null
        },
        "528i": {
            inicio: 2013,
            fim: 2016
        },
        "530i": {
            inicio: 2017,
            fim: null
        },
        "530e": {
            inicio: 2020,
            fim: null
        },
        "535i": {
            inicio: 2012,
            fim: 2016
        },
        "540i": {
            inicio: 2017,
            fim: null
        },
        "550i": {
            inicio: 2012,
            fim: 2016
        },
        M5: {
            inicio: 2012,
            fim: null
        },
        "730i": {
            inicio: 2016,
            fim: null
        },
        "740i": {
            inicio: 2016,
            fim: null
        },
        "750i": {
            inicio: 2016,
            fim: 2022
        },
        "760i": {
            inicio: 2023,
            fim: null
        },
        "X1 sDrive18i": {
            inicio: 2016,
            fim: null
        },
        "X1 sDrive20i": {
            inicio: 2016,
            fim: null
        },
        "X1 xDrive25i": {
            inicio: 2016,
            fim: 2022
        },
        "X1 xDrive30e": {
            inicio: 2023,
            fim: null
        },
        "X2 sDrive20i": {
            inicio: 2018,
            fim: null
        },
        "X2 M35i": {
            inicio: 2019,
            fim: null
        },
        "X3 xDrive20i": {
            inicio: 2018,
            fim: null
        },
        "X3 xDrive30i": {
            inicio: 2018,
            fim: null
        },
        "X3 M40i": {
            inicio: 2019,
            fim: null
        },
        "X4 xDrive30i": {
            inicio: 2019,
            fim: null
        },
        "X4 M40i": {
            inicio: 2019,
            fim: null
        },
        "X5 xDrive30d": {
            inicio: 2014,
            fim: 2020
        },
        "X5 xDrive40i": {
            inicio: 2019,
            fim: null
        },
        "X5 xDrive45e": {
            inicio: 2021,
            fim: null
        },
        "X5 M50i": {
            inicio: 2020,
            fim: null
        },
        "X6 xDrive35i": {
            inicio: 2012,
            fim: 2018
        },
        "X6 xDrive40i": {
            inicio: 2019,
            fim: null
        },
        "X6 M50i": {
            inicio: 2020,
            fim: null
        },
        "X7 xDrive40i": {
            inicio: 2020,
            fim: null
        },
        "Z4 sDrive20i": {
            inicio: 2019,
            fim: null
        },
        "Z4 sDrive30i": {
            inicio: 2019,
            fim: null
        },
        "Z4 M40i": {
            inicio: 2019,
            fim: null
        },
        "iX1 xDrive30": {
            inicio: 2023,
            fim: null
        },
        "i4 eDrive35": {
            inicio: 2022,
            fim: null
        },
        "i4 M50": {
            inicio: 2022,
            fim: null
        },
        "iX xDrive40": {
            inicio: 2022,
            fim: null
        },
        "iX xDrive50": {
            inicio: 2022,
            fim: null
        },
        "Série 1 116i": {
            inicio: 2004,
            fim: null
        },
        "Série 1 118i": {
            inicio: 2004,
            fim: null
        },
        "Série 1 120i": {
            inicio: 2004,
            fim: null
        },
        "Série 1 125i": {
            inicio: 2004,
            fim: null
        },
        "Série 1 M135i": {
            inicio: 2004,
            fim: null
        },
        "Série 2 218i": {
            inicio: 2013,
            fim: null
        },
        "Série 2 220i": {
            inicio: 2013,
            fim: null
        },
        "Série 2 220d": {
            inicio: 2013,
            fim: null
        },
        "Série 2 228i": {
            inicio: 2013,
            fim: null
        },
        "Série 2 M235i": {
            inicio: 2013,
            fim: null
        },
        "Série 2 M240i": {
            inicio: 2013,
            fim: null
        },
        "Série 3 316i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 318i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 320i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 320i Sport GP": {
            inicio: 1975,
            fim: null
        },
        "Série 3 320i M Sport": {
            inicio: 1975,
            fim: null
        },
        "Série 3 328i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 330i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 330e": {
            inicio: 1975,
            fim: null
        },
        "Série 3 335i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 340i": {
            inicio: 1975,
            fim: null
        },
        "Série 3 M3": {
            inicio: 1975,
            fim: null
        },
        "Série 4 420i": {
            inicio: 2013,
            fim: null
        },
        "Série 4 428i": {
            inicio: 2013,
            fim: null
        },
        "Série 4 430i": {
            inicio: 2013,
            fim: null
        },
        "Série 4 440i": {
            inicio: 2013,
            fim: null
        },
        "Série 4 M4": {
            inicio: 2013,
            fim: null
        },
        "Série 5 520i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 523i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 525i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 528i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 530i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 530e": {
            inicio: 1972,
            fim: null
        },
        "Série 5 535i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 540i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 550i": {
            inicio: 1972,
            fim: null
        },
        "Série 5 M5": {
            inicio: 1972,
            fim: null
        },
        "Série 7 730i": {
            inicio: 1977,
            fim: null
        },
        "Série 7 740i": {
            inicio: 1977,
            fim: null
        },
        "Série 7 745Le": {
            inicio: 1977,
            fim: null
        },
        "Série 7 750i": {
            inicio: 1977,
            fim: null
        },
        "Série 7 760i": {
            inicio: 1977,
            fim: null
        },
        "SUV X1 sDrive18i": {
            inicio: 2009,
            fim: null
        },
        "SUV X1 sDrive20i": {
            inicio: 2009,
            fim: null
        },
        "SUV X1 xDrive20i": {
            inicio: 2009,
            fim: null
        },
        "SUV X1 xDrive25i": {
            inicio: 2009,
            fim: null
        },
        "SUV X1 xDrive28i": {
            inicio: 2009,
            fim: null
        },
        "SUV X1 xDrive30e": {
            inicio: 2009,
            fim: null
        },
        "SUV X2 sDrive18i": {
            inicio: 2018,
            fim: null
        },
        "SUV X2 sDrive20i": {
            inicio: 2018,
            fim: null
        },
        "SUV X2 xDrive20i": {
            inicio: 2018,
            fim: null
        },
        "SUV X2 M35i": {
            inicio: 2018,
            fim: null
        },
        "SUV X3 xDrive20i": {
            inicio: 2003,
            fim: null
        },
        "SUV X3 xDrive30i": {
            inicio: 2003,
            fim: null
        },
        "SUV X3 M40i": {
            inicio: 2003,
            fim: null
        },
        "SUV X3 M Competition": {
            inicio: 2003,
            fim: null
        },
        "SUV X4 xDrive30i": {
            inicio: 2014,
            fim: null
        },
        "SUV X4 M40i": {
            inicio: 2014,
            fim: null
        },
        "SUV X4 M Competition": {
            inicio: 2014,
            fim: null
        },
        "SUV X5 xDrive30d": {
            inicio: 1999,
            fim: null
        },
        "SUV X5 xDrive40i": {
            inicio: 1999,
            fim: null
        },
        "SUV X5 xDrive45e": {
            inicio: 1999,
            fim: null
        },
        "SUV X5 M50i": {
            inicio: 1999,
            fim: null
        },
        "SUV X5 M Competition": {
            inicio: 1999,
            fim: null
        },
        "SUV X6 xDrive35i": {
            inicio: 2008,
            fim: null
        },
        "SUV X6 xDrive40i": {
            inicio: 2008,
            fim: null
        },
        "SUV X6 M50i": {
            inicio: 2008,
            fim: null
        },
        "SUV X6 M Competition": {
            inicio: 2008,
            fim: null
        },
        "SUV X7 xDrive40i": {
            inicio: 2018,
            fim: null
        },
        "SUV X7 M60i": {
            inicio: 2018,
            fim: null
        },
        "i3 (Elétrico)": {
            inicio: 2013,
            fim: null
        }
    },
    BYD: {
        "Atto 8": {
            inicio: 2026,
            fim: 2027
        },
        Dolphin: {
            inicio: 2021,
            fim: null
        },
        "Dolphin (Elétrico Hatch)": {
            inicio: 2021,
            fim: null
        },
        "Dolphin Mini": {
            inicio: 2023,
            fim: null
        },
        "Dolphin Mini (Elétrico Hatch)": {
            inicio: 2023,
            fim: null
        },
        "Dolphin Plus (Elétrico Hatch)": {
            inicio: 2023,
            fim: null
        },
        "Han Elétrico": {
            inicio: 2020,
            fim: null
        },
        "Han (Elétrico Sedan)": {
            inicio: 2020,
            fim: null
        },
        "King Hybrid": {
            inicio: 2024,
            fim: null
        },
        "King (Sedan Híbrido)": {
            inicio: 2024,
            fim: null
        },
        "Seal Elétrico": {
            inicio: 2022,
            fim: null
        },
        "Seal (Elétrico Sedan)": {
            inicio: 2022,
            fim: null
        },
        "Shark Hybrid": {
            inicio: 2024,
            fim: null
        },
        "Shark (Picape Híbrida)": {
            inicio: 2024,
            fim: null
        },
        "Song Plus Hybrid": {
            inicio: 2020,
            fim: null
        },
        "Song Plus (Híbrido SUV)": {
            inicio: 2020,
            fim: null
        },
        "Song Pro (Híbrido SUV)": {
            inicio: 2020,
            fim: null
        },
        "Yuan Plus Elétrico": {
            inicio: 2021,
            fim: null
        },
        "Yuan Plus (Elétrico SUV)": {
            inicio: 2021,
            fim: null
        },
        "Yuan Pro (Elétrico SUV)": {
            inicio: 2023,
            fim: null
        },
        "Tan (SUV Elétrico 7 Lug)": {
            inicio: 2020,
            fim: null
        }
    },
    "CAOA Changan": {
        "Uni-T": {
            inicio: 2026,
            fim: null
        }
    },
    "Caoa Chery": {
        "Arrizo 5 (Sedan)": {
            inicio: 2018,
            fim: 2021
        },
        "Arrizo 5 RX/RXT": {
            inicio: 2018,
            fim: 2021
        },
        "Arrizo 6 (Sedan)": {
            inicio: 2020,
            fim: 2022
        },
        "Arrizo 6 Pro": {
            inicio: 2021,
            fim: null
        },
        "Arrizo 6 Pro Hybrid": {
            inicio: 2022,
            fim: null
        },
        "Celer (Hatch/Sedan)": {
            inicio: 2013,
            fim: 2018
        },
        "Cielo (Hatch/Sedan)": {
            inicio: 2010,
            fim: 2012
        },
        "Face (Hatch)": {
            inicio: 2010,
            fim: 2015
        },
        "iCar (Elétrico)": {
            inicio: 2022,
            fim: null
        },
        "QQ (Subcompacto)": {
            inicio: 2011,
            fim: 2019
        },
        "Tiggo 2 (SUV)": {
            inicio: 2017,
            fim: 2023
        },
        "Tiggo 3X (SUV)": {
            inicio: 2021,
            fim: 2022
        },
        "Tiggo 5X (SUV)": {
            inicio: 2018,
            fim: 2020
        },
        "Tiggo 5X Pro": {
            inicio: 2022,
            fim: 2027
        },
        "Tiggo 5X Pro Hybrid": {
            inicio: 2022,
            fim: null
        },
        "Tiggo 5X Sport": {
            inicio: 2023,
            fim: 2027
        },
        "Tiggo 7 (SUV)": {
            inicio: 2019,
            fim: 2021
        },
        "Tiggo 7 Pro": {
            inicio: 2021,
            fim: null
        },
        "Tiggo 7 Pro Hybrid": {
            inicio: 2022,
            fim: null
        },
        "Tiggo 7 Sport": {
            inicio: 2024,
            fim: null
        },
        "Tiggo 8": {
            inicio: 2020,
            fim: null
        },
        "Tiggo 8 Max Drive": {
            inicio: 2022,
            fim: null
        },
        "Tiggo 8 Pro": {
            inicio: 2024,
            fim: null
        },
        "Tiggo 8 Pro (Combustão)": {
            inicio: 2024,
            fim: null
        },
        "Tiggo 8 Pro PHEV": {
            inicio: 2022,
            fim: null
        },
        "Tiggo 8 Pro Plug-in Hybrid": {
            inicio: 2022,
            fim: null
        }
    },
    Chevrolet: {
        Agile: {
            inicio: 2009,
            fim: 2014
        },
        "Agile (Hatch)": {
            inicio: 2009,
            fim: 2014
        },
        "Astra Hatch": {
            inicio: 1998,
            fim: 2011
        },
        "Astra Sedan": {
            inicio: 1999,
            fim: 2011
        },
        "Blazer (SUV - Base S10 G1)": {
            inicio: 1995,
            fim: 2011
        },
        "Blazer EV": {
            inicio: 2025,
            fim: null
        },
        "Bolt Elétrico": {
            inicio: 2017,
            fim: null
        },
        "Bolt (Elétrico)": {
            inicio: 2017,
            fim: null
        },
        "Bonanza (SUV)": {
            inicio: 1989,
            fim: 1994
        },
        "C-10 / C-14": {
            inicio: 1964,
            fim: 1984
        },
        Camaro: {
            inicio: 2010,
            fim: null
        },
        "Camaro (Esportivo)": {
            inicio: 2010,
            fim: null
        },
        Captiva: {
            inicio: 2008,
            fim: 2017
        },
        "Captiva (SUV)": {
            inicio: 2008,
            fim: 2017
        },
        "Captiva EV": {
            inicio: 2026,
            fim: null
        },
        "Captiva Sport AWD 3.0 V6": {
            inicio: 2011,
            fim: 2013
        },
        "Captiva Sport AWD 3.6 V6": {
            inicio: 2008,
            fim: 2010
        },
        "Captiva Sport FWD 2.4": {
            inicio: 2009,
            fim: 2017
        },
        "Captiva Sport FWD 3.6 V6": {
            inicio: 2008,
            fim: 2010
        },
        "Caravan (Perua)": {
            inicio: 1975,
            fim: 1992
        },
        "Celta (Hatch)": {
            inicio: 2e3,
            fim: 2015
        },
        "Chevette (Sedan/Hatch)": {
            inicio: 1973,
            fim: 1994
        },
        "Chevy 500 (Picape)": {
            inicio: 1983,
            fim: 1995
        },
        Cobalt: {
            inicio: 2011,
            fim: 2020
        },
        "Cobalt (Sedan)": {
            inicio: 2011,
            fim: 2020
        },
        "Corsa Hatch": {
            inicio: 2002,
            fim: 2012
        },
        "Corsa Hatch (Geração 1)": {
            inicio: 1994,
            fim: 2002
        },
        "Corsa Hatch (Geração 2)": {
            inicio: 2002,
            fim: 2012
        },
        "Corsa Classic": {
            inicio: 2002,
            fim: 2016
        },
        "Corsa Pickup": {
            inicio: 1995,
            fim: 2003
        },
        "Corsa Sedan (Geração 1)": {
            inicio: 1996,
            fim: 2001
        },
        "Corsa Sedan (Geração 2 - Classic)": {
            inicio: 2002,
            fim: 2016
        },
        "Corsa Wagon (Perua)": {
            inicio: 1997,
            fim: 2001
        },
        "Cruze Sedan": {
            inicio: 2011,
            fim: null
        },
        "Cruze (Sedan)": {
            inicio: 2011,
            fim: null
        },
        "Cruze Sport6": {
            inicio: 2012,
            fim: null
        },
        "Cruze Sport6 (Hatch)": {
            inicio: 2012,
            fim: null
        },
        "D20 (Picape)": {
            inicio: 1985,
            fim: 1997
        },
        Equinox: {
            inicio: 2017,
            fim: null
        },
        "Equinox (SUV Médio)": {
            inicio: 2017,
            fim: null
        },
        "Equinox EV": {
            inicio: 2025,
            fim: null
        },
        "Ipanema (Perua)": {
            inicio: 1989,
            fim: 1997
        },
        "Joy Plus (Antigo Prisma)": {
            inicio: 2019,
            fim: 2021
        },
        "Kadett (Hatch)": {
            inicio: 1989,
            fim: 1998
        },
        "Marajó (Perua)": {
            inicio: 1981,
            fim: 1989
        },
        Meriva: {
            inicio: 2002,
            fim: 2012
        },
        "Meriva Joy": {
            inicio: 2004,
            fim: 2012
        },
        "Meriva Maxx": {
            inicio: 2002,
            fim: 2009
        },
        "Meriva CD": {
            inicio: 2002,
            fim: 2006
        },
        "Meriva Expression": {
            inicio: 2007,
            fim: 2012
        },
        "Meriva SS": {
            inicio: 2007,
            fim: 2012
        },
        "Meriva Elegance": {
            inicio: 2008,
            fim: 2012
        },
        "Meriva Premium": {
            inicio: 2009,
            fim: 2012
        },
        "Montana G2": {
            inicio: 2011,
            fim: 2021
        },
        "Montana (Picape - Geração 1)": {
            inicio: 2003,
            fim: 2010
        },
        "Montana (Picape - Geração 2)": {
            inicio: 2011,
            fim: 2021
        },
        "Monza (Sedan/Hatch)": {
            inicio: 1982,
            fim: 1996
        },
        "Nova Montana": {
            inicio: 2023,
            fim: null
        },
        "Nova Montana (Picape)": {
            inicio: 2023,
            fim: null
        },
        "Nova Silverado": {
            inicio: 2023,
            fim: null
        },
        "Nova Silverado (V8)": {
            inicio: 2023,
            fim: null
        },
        "Omega (Sedan/Perua)": {
            inicio: 1992,
            fim: 1998
        },
        "Onix Hatch G1": {
            inicio: 2012,
            fim: 2021
        },
        "Onix Joy (Hatch G1)": {
            inicio: 2012,
            fim: 2021
        },
        "Onix LT (Hatch G1)": {
            inicio: 2012,
            fim: 2019
        },
        "Onix LTZ (Hatch G1)": {
            inicio: 2012,
            fim: 2019
        },
        "Onix Effect (Hatch G1)": {
            inicio: 2014,
            fim: 2019
        },
        "Onix Activ (Hatch G1)": {
            inicio: 2016,
            fim: 2019
        },
        "Onix Hatch LT": {
            inicio: 2019,
            fim: null
        },
        "Onix Hatch LT (G2)": {
            inicio: 2019,
            fim: null
        },
        "Onix Hatch LTZ": {
            inicio: 2019,
            fim: null
        },
        "Onix Hatch LTZ (G2)": {
            inicio: 2019,
            fim: null
        },
        "Onix Hatch Premier": {
            inicio: 2019,
            fim: null
        },
        "Onix Hatch Premier (G2)": {
            inicio: 2019,
            fim: null
        },
        "Onix Hatch RS": {
            inicio: 2020,
            fim: null
        },
        "Onix Hatch RS (G2)": {
            inicio: 2020,
            fim: null
        },
        "Onix Joy Plus": {
            inicio: 2019,
            fim: 2021
        },
        "Onix Joy Plus MT": {
            inicio: 2019,
            fim: 2021
        },
        "Onix Joy Plus Black MT": {
            inicio: 2020,
            fim: 2021
        },
        "Onix Plus LT": {
            inicio: 2019,
            fim: null
        },
        "Onix Plus LT (Sedan G2)": {
            inicio: 2019,
            fim: null
        },
        "Onix Plus LTZ": {
            inicio: 2019,
            fim: null
        },
        "Onix Plus LTZ (Sedan G2)": {
            inicio: 2019,
            fim: null
        },
        "Onix Plus Midnight": {
            inicio: 2020,
            fim: null
        },
        "Onix Plus Midnight (Sedan G2)": {
            inicio: 2020,
            fim: null
        },
        "Onix Plus Premier": {
            inicio: 2019,
            fim: null
        },
        "Onix Plus Premier (Sedan G2)": {
            inicio: 2019,
            fim: null
        },
        "Opala (Sedan/Coupé)": {
            inicio: 1968,
            fim: 1992
        },
        "Prisma Joy (G1)": {
            inicio: 2006,
            fim: 2012
        },
        "Prisma Maxx (G1)": {
            inicio: 2006,
            fim: 2012
        },
        "Prisma LT (G2)": {
            inicio: 2013,
            fim: 2019
        },
        "Prisma LTZ (G2)": {
            inicio: 2013,
            fim: 2019
        },
        "Prisma Advantage (G2)": {
            inicio: 2015,
            fim: 2019
        },
        "S10 CS": {
            inicio: 2012,
            fim: null
        },
        "S10 CS WT": {
            inicio: 2024,
            fim: null
        },
        "S10 CS LS": {
            inicio: 2012,
            fim: 2024
        },
        "S10 CS LT": {
            inicio: 2012,
            fim: 2016
        },
        "S10 CS Advantage": {
            inicio: 2008,
            fim: 2011
        },
        "S10 CS Standard": {
            inicio: 1995,
            fim: 2011
        },
        "S10 CD High Country": {
            inicio: 2015,
            fim: null
        },
        "S10 CD LTZ": {
            inicio: 2012,
            fim: null
        },
        "S10 CD Z71": {
            inicio: 2021,
            fim: null
        },
        "S10 CD Advantage": {
            inicio: 2005,
            fim: 2020
        },
        "S10 CD WT": {
            inicio: 2024,
            fim: null
        },
        "S10 CD LT": {
            inicio: 2012,
            fim: 2024
        },
        "S10 CD Midnight": {
            inicio: 2018,
            fim: 2024
        },
        "S10 CD LS": {
            inicio: 2012,
            fim: 2024
        },
        "S10 CD Executive": {
            inicio: 2002,
            fim: 2011
        },
        "Silverado (Antiga)": {
            inicio: 1997,
            fim: 2001
        },
        "Silverado 4.2 Turbo Diesel": {
            inicio: 1997,
            fim: 2001
        },
        "Silverado DLX 4.1": {
            inicio: 1997,
            fim: 2001
        },
        "Silverado High Country": {
            inicio: 2024,
            fim: null
        },
        "Spark EUV": {
            inicio: 2025,
            fim: null
        },
        "Spin 5 Lugares": {
            inicio: 2012,
            fim: null
        },
        "Spin 5L": {
            inicio: 2012,
            fim: null
        },
        "Spin 7 Lugares": {
            inicio: 2012,
            fim: null
        },
        "Spin 7L": {
            inicio: 2012,
            fim: null
        },
        "Spin Activ 5 Lugares": {
            inicio: 2015,
            fim: null
        },
        "Spin Activ 5L": {
            inicio: 2015,
            fim: null
        },
        "Spin Activ 7 Lugares": {
            inicio: 2015,
            fim: null
        },
        "Spin Activ 7L": {
            inicio: 2015,
            fim: null
        },
        "Spin LS 5 Lugares": {
            inicio: 2012,
            fim: 2018
        },
        "Spin LT 5 Lugares": {
            inicio: 2012,
            fim: null
        },
        "Spin LT 7 Lugares": {
            inicio: 2012,
            fim: null
        },
        "Spin LTZ 5 Lugares": {
            inicio: 2012,
            fim: 2018
        },
        "Spin LTZ 7 Lugares": {
            inicio: 2012,
            fim: 2018
        },
        "Spin Premier": {
            inicio: 2020,
            fim: null
        },
        "Spin Premier 5 Lugares": {
            inicio: 2020,
            fim: null
        },
        "Spin Premier 7 Lugares": {
            inicio: 2020,
            fim: null
        },
        "Suprema (Perua)": {
            inicio: 1993,
            fim: 1996
        },
        "Tigra (Coupé)": {
            inicio: 1998,
            fim: 1999
        },
        Tracker: {
            inicio: 2013,
            fim: null
        },
        "Tracker (SUV)": {
            inicio: 2013,
            fim: null
        },
        "Tracker 2.0 Diesel 4x4": {
            inicio: 2001,
            fim: 2004
        },
        "Tracker 2.0 MPFI 4x4": {
            inicio: 2003,
            fim: 2004
        },
        Trailblazer: {
            inicio: 2012,
            fim: null
        },
        "Trailblazer (SUV)": {
            inicio: 2012,
            fim: null
        },
        "Vectra Hatch GT": {
            inicio: 2006,
            fim: 2012
        },
        "Vectra Sedan": {
            inicio: 2e3,
            fim: 2011
        },
        "Vectra GLS (1ª geração)": {
            inicio: 1993,
            fim: 1996
        },
        "Vectra CD (1ª geração)": {
            inicio: 1993,
            fim: 1996
        },
        "Vectra GSi (1ª geração)": {
            inicio: 1994,
            fim: 1996
        },
        "Vectra GL (2ª geração)": {
            inicio: 1997,
            fim: 2005
        },
        "Vectra GLS (2ª geração)": {
            inicio: 1997,
            fim: 2005
        },
        "Vectra CD (2ª geração)": {
            inicio: 1997,
            fim: 2005
        },
        "Vectra Expression (3ª geração)": {
            inicio: 2007,
            fim: 2011
        },
        "Vectra Elegance (3ª geração)": {
            inicio: 2006,
            fim: 2011
        },
        "Vectra Elite 2.0 (3ª geração)": {
            inicio: 2008,
            fim: 2011
        },
        "Vectra Elite 2.4 16V (3ª geração)": {
            inicio: 2006,
            fim: 2009
        },
        "Vectra GT (hatch)": {
            inicio: 2006,
            fim: 2012
        },
        "Vectra GT-X (hatch topo)": {
            inicio: 2008,
            fim: 2012
        },
        "Vectra Collection": {
            inicio: 2011,
            fim: 2011
        },
        "Veraneio (SUV)": {
            inicio: 1964,
            fim: 1994
        },
        Zafira: {
            inicio: 2001,
            fim: 2012
        },
        "Zafira 2.0 (8V) Básica": {
            inicio: 2001,
            fim: 2004
        },
        "Zafira CD 2.0 (16V)": {
            inicio: 2001,
            fim: 2004
        },
        "Zafira Comfort": {
            inicio: 2005,
            fim: 2012
        },
        "Zafira Elegance": {
            inicio: 2005,
            fim: 2012
        },
        "Zafira Elite": {
            inicio: 2005,
            fim: 2012
        },
        "Zafira Collection": {
            inicio: 2012,
            fim: 2012
        }
    },
    Citroën: {
        Basalt: {
            inicio: 2024,
            fim: null
        },
        "Basalt (SUV Coupé)": {
            inicio: 2024,
            fim: null
        },
        "Berlingo (Furgão/Passageiro)": {
            inicio: 1996,
            fim: null
        },
        C3: {
            inicio: 2002,
            fim: null
        },
        "C3 (Hatch)": {
            inicio: 2002,
            fim: null
        },
        "C3 Aircross": {
            inicio: 2010,
            fim: null
        },
        "C3 Aircross (SUV/Monovolume)": {
            inicio: 2010,
            fim: null
        },
        "C3 Aircross 7L": {
            inicio: 2023,
            fim: null
        },
        "Novo C3 Aircross (SUV 7 Lug)": {
            inicio: 2023,
            fim: null
        },
        "C4 Cactus": {
            inicio: 2018,
            fim: null
        },
        "C4 Cactus Live": {
            inicio: 2018,
            fim: null
        },
        "C4 Cactus Feel": {
            inicio: 2018,
            fim: null
        },
        "C4 Cactus Feel Pack": {
            inicio: 2019,
            fim: null
        },
        "C4 Cactus Shine": {
            inicio: 2018,
            fim: 2023
        },
        "C4 Cactus Shine Pack": {
            inicio: 2021,
            fim: null
        },
        "C4 Cactus Rip Curl": {
            inicio: 2019,
            fim: 2021
        },
        "C4 Cactus X-Series": {
            inicio: 2022,
            fim: null
        },
        "C4 Hatch": {
            inicio: 2004,
            fim: 2014
        },
        "C4 Lounge": {
            inicio: 2013,
            fim: 2021
        },
        "C4 Lounge (Sedan)": {
            inicio: 2013,
            fim: 2021
        },
        "C4 Pallas (Sedan)": {
            inicio: 2007,
            fim: 2013
        },
        "C5 (Sedan/Perua)": {
            inicio: 2001,
            fim: 2012
        },
        "C5 Aircross": {
            inicio: 2017,
            fim: null
        },
        "C5 Aircross (SUV Médio)": {
            inicio: 2017,
            fim: null
        },
        "Jumpy (Furgão)": {
            inicio: 2017,
            fim: null
        },
        "Xsara (Hatch/Perua)": {
            inicio: 1997,
            fim: 2005
        },
        "Xsara Picasso (Minivan)": {
            inicio: 1999,
            fim: 2012
        }
    },
    Chrysler: {
        "300C": {
            inicio: 2005,
            fim: 2010
        },
        "PT Cruiser": {
            inicio: 2001,
            fim: 2010
        }
    },
    Daihatsu: {
        Feroza: {
            inicio: 1994,
            fim: 1998
        },
        Cuore: {
            inicio: 1995,
            fim: 1999
        },
        Charade: {
            inicio: 1994,
            fim: 1999
        },
        Terios: {
            inicio: 1998,
            fim: 1999
        }
    },
    Dodge: {
        "Journey SXT 3.6 V6": {
            inicio: 2009,
            fim: 2016
        },
        "Journey R/T 3.6 V6": {
            inicio: 2009,
            fim: 2016
        },
        "Journey Crossroad 3.6 V6": {
            inicio: 2014,
            fim: 2016
        },
        Durango: {
            inicio: 2013,
            fim: 2021
        },
        Dakota: {
            inicio: 1997,
            fim: 2012
        }
    },
    Fiat: {
        "147 (Hatch)": {
            inicio: 1976,
            fim: 1987
        },
        "147 Pick-Up": {
            inicio: 1980,
            fim: 1995
        },
        500: {
            inicio: 2007,
            fim: null
        },
        "500 (Hatch)": {
            inicio: 2007,
            fim: null
        },
        "500e (Elétrico)": {
            inicio: 2020,
            fim: null
        },
        Argo: {
            inicio: 2017,
            fim: null
        },
        "Argo (Hatch)": {
            inicio: 2017,
            fim: null
        },
        "Brava (Hatch)": {
            inicio: 1999,
            fim: 2003
        },
        Bravo: {
            inicio: 2010,
            fim: 2016
        },
        "Bravo (Hatch)": {
            inicio: 2010,
            fim: 2016
        },
        Cronos: {
            inicio: 2018,
            fim: null
        },
        "Cronos (Sedan)": {
            inicio: 2018,
            fim: null
        },
        "Doblo Cargo (Furgão)": {
            inicio: 2002,
            fim: 2021
        },
        "Doblo Passageiro": {
            inicio: 2001,
            fim: 2021
        },
        "Duna (Sedan Argentina)": {
            inicio: 1987,
            fim: 1996
        },
        "Elba (Perua)": {
            inicio: 1986,
            fim: 1996
        },
        Fastback: {
            inicio: 2022,
            fim: null
        },
        "Fastback (SUV Coupé)": {
            inicio: 2022,
            fim: null
        },
        "Fastback Abarth (Esportivo)": {
            inicio: 2023,
            fim: null
        },
        Fiorino: {
            inicio: 2013,
            fim: null
        },
        "Fiorino (Furgão/Picape - Antiga)": {
            inicio: 1980,
            fim: 2013
        },
        "Fiorino (Furgão - Nova Geração)": {
            inicio: 2013,
            fim: null
        },
        Freemont: {
            inicio: 2011,
            fim: 2016
        },
        "Freemont (SUV)": {
            inicio: 2011,
            fim: 2016
        },
        "Grand Siena": {
            inicio: 2012,
            fim: 2021
        },
        "Grand Siena (Sedan)": {
            inicio: 2012,
            fim: 2021
        },
        "Grande Panda (Híbrido)": {
            inicio: 2025,
            fim: null
        },
        Idea: {
            inicio: 2003,
            fim: 2016
        },
        "Idea (Minivan)": {
            inicio: 2003,
            fim: 2016
        },
        Linea: {
            inicio: 2007,
            fim: 2017
        },
        "Linea (Sedan)": {
            inicio: 2007,
            fim: 2017
        },
        "Marea (Sedan)": {
            inicio: 1996,
            fim: 2007
        },
        "Marea Weekend (Perua)": {
            inicio: 1998,
            fim: 2007
        },
        Mobi: {
            inicio: 2016,
            fim: null
        },
        "Mobi (Subcompacto)": {
            inicio: 2016,
            fim: null
        },
        "Oggi (Sedan do 147)": {
            inicio: 1983,
            fim: 1985
        },
        Palio: {
            inicio: 2e3,
            fim: 2018
        },
        "Palio (Hatch)": {
            inicio: 1996,
            fim: 2018
        },
        "Palio Weekend": {
            inicio: 2e3,
            fim: 2018
        },
        "Palio Weekend (Perua)": {
            inicio: 1997,
            fim: 2018
        },
        "Palio Weekend Adventure (Perua)": {
            inicio: 1999,
            fim: 2018
        },
        "Panorama (Perua do 147)": {
            inicio: 1980,
            fim: 1986
        },
        "Prêmio (Sedan)": {
            inicio: 1985,
            fim: 1996
        },
        Pulse: {
            inicio: 2021,
            fim: null
        },
        "Pulse (SUV)": {
            inicio: 2021,
            fim: null
        },
        "Pulse Abarth": {
            inicio: 2022,
            fim: null
        },
        "Pulse Abarth (Esportivo)": {
            inicio: 2022,
            fim: null
        },
        Punto: {
            inicio: 2005,
            fim: 2018
        },
        "Punto (Hatch)": {
            inicio: 2005,
            fim: 2018
        },
        Siena: {
            inicio: 2e3,
            fim: 2017
        },
        "Siena (Sedan)": {
            inicio: 1997,
            fim: 2017
        },
        Stilo: {
            inicio: 2002,
            fim: 2010
        },
        "Stilo (Hatch)": {
            inicio: 2002,
            fim: 2010
        },
        "Strada CS": {
            inicio: 2e3,
            fim: null
        },
        "Strada CD": {
            inicio: 2020,
            fim: null
        },
        "Strada Cabine Simples": {
            inicio: 1998,
            fim: null
        },
        "Strada Cabine Estendida": {
            inicio: 1999,
            fim: 2013
        },
        "Strada Cabine Dupla 2 Portas": {
            inicio: 2010,
            fim: 2020
        },
        "Strada Cabine Dupla 3 Portas": {
            inicio: 2014,
            fim: 2020
        },
        "Strada Nova Cabine Plus (CS)": {
            inicio: 2020,
            fim: null
        },
        "Strada Nova Cabine Dupla (CD)": {
            inicio: 2020,
            fim: null
        },
        "Tempra (Sedan)": {
            inicio: 1990,
            fim: 1999
        },
        "Tempra SW (Perua)": {
            inicio: 1994,
            fim: 1997
        },
        "Tipo (Hatch)": {
            inicio: 1988,
            fim: 1995
        },
        Titano: {
            inicio: 2024,
            fim: null
        },
        "Titano (Picape)": {
            inicio: 2024,
            fim: null
        },
        "Toro Endurance 1.8": {
            inicio: 2016,
            fim: 2021
        },
        "Toro Endurance 1.8 Flex": {
            inicio: 2016,
            fim: 2021
        },
        "Toro Endurance Turbo": {
            inicio: 2021,
            fim: null
        },
        "Toro Endurance Turbo 270 Flex": {
            inicio: 2021,
            fim: null
        },
        "Toro Endurance Turbo Diesel": {
            inicio: 2021,
            fim: 2024
        },
        "Toro Freedom 1.8": {
            inicio: 2016,
            fim: 2021
        },
        "Toro Freedom 1.8 Flex": {
            inicio: 2016,
            fim: 2021
        },
        "Toro Freedom Turbo": {
            inicio: 2021,
            fim: null
        },
        "Toro Freedom Turbo 270 Flex": {
            inicio: 2021,
            fim: null
        },
        "Toro Freedom 2.0 Turbo Diesel": {
            inicio: 2016,
            fim: 2021
        },
        "Toro Ranch Diesel": {
            inicio: 2020,
            fim: 2024
        },
        "Toro Ranch 2.0 Turbo Diesel": {
            inicio: 2020,
            fim: 2024
        },
        "Toro Ranch 2.2": {
            inicio: 2025,
            fim: null
        },
        "Toro Ranch 2.2 Turbo Diesel": {
            inicio: 2025,
            fim: null
        },
        "Toro Volcano Diesel": {
            inicio: 2016,
            fim: 2024
        },
        "Toro Volcano 2.0 Turbo Diesel": {
            inicio: 2016,
            fim: 2024
        },
        "Toro Volcano Turbo": {
            inicio: 2021,
            fim: null
        },
        "Toro Volcano Turbo 270 Flex": {
            inicio: 2021,
            fim: null
        },
        "Toro Ultra Turbo": {
            inicio: 2025,
            fim: null
        },
        "Toro Ultra 2.0 Turbo Diesel": {
            inicio: 2020,
            fim: 2024
        },
        "Toro Ultra Turbo 270 Flex": {
            inicio: 2025,
            fim: null
        },
        "Toro Ultra 2.2 Turbo Diesel": {
            inicio: 2025,
            fim: null
        },
        Uno: {
            inicio: 2e3,
            fim: 2021
        },
        "Uno (Hatch)": {
            inicio: 1984,
            fim: 2021
        },
        "Uno Furgão": {
            inicio: 1988,
            fim: 2013
        },
        "Uno Mille": {
            inicio: 1990,
            fim: 2013
        },
        "Uno Vivace": {
            inicio: 2010,
            fim: 2016
        }
    },
    Ford: {
        "Belina (Perua)": {
            inicio: 1970,
            fim: 1991
        },
        "Bronco Sport": {
            inicio: 2020,
            fim: null
        },
        "Bronco Sport (SUV Off-Road)": {
            inicio: 2020,
            fim: null
        },
        "Corcel (Sedan/Coupé)": {
            inicio: 1968,
            fim: 1986
        },
        "Corcel II (Sedan/Coupé)": {
            inicio: 1977,
            fim: 1986
        },
        "Courier (Picape)": {
            inicio: 1997,
            fim: 2013
        },
        "Del Rey (Sedan)": {
            inicio: 1981,
            fim: 1991
        },
        "EcoSport G1": {
            inicio: 2003,
            fim: 2012
        },
        "EcoSport G2": {
            inicio: 2012,
            fim: 2021
        },
        "Ecosport (SUV - Geração 1)": {
            inicio: 2003,
            fim: 2012
        },
        "Ecosport (SUV - Geração 2)": {
            inicio: 2012,
            fim: 2021
        },
        "Edge (SUV)": {
            inicio: 2008,
            fim: 2020
        },
        "Escort (Hatch/Perua)": {
            inicio: 1983,
            fim: 2003
        },
        "Escort Hobby": {
            inicio: 1993,
            fim: 1996
        },
        "F-100": {
            inicio: 1957,
            fim: 1986
        },
        "F-1000 (Picape)": {
            inicio: 1979,
            fim: 1998
        },
        "F-150": {
            inicio: 2023,
            fim: null
        },
        "F-150 (Nova Geração)": {
            inicio: 2023,
            fim: null
        },
        "F-250 (Picape)": {
            inicio: 1998,
            fim: 2011
        },
        "Fiesta (Hatch - Importado/Street)": {
            inicio: 1994,
            fim: 2006
        },
        "Fiesta (Hatch - Rocam)": {
            inicio: 2002,
            fim: 2014
        },
        "Fiesta (New Fiesta)": {
            inicio: 2011,
            fim: 2019
        },
        "Fiesta Sedan": {
            inicio: 1999,
            fim: 2019
        },
        "Focus Hatch": {
            inicio: 2e3,
            fim: 2019
        },
        "Focus Sedan": {
            inicio: 2e3,
            fim: 2019
        },
        Fusion: {
            inicio: 2006,
            fim: 2020
        },
        "Fusion (Sedan)": {
            inicio: 2006,
            fim: 2020
        },
        "Galaxie / Landau": {
            inicio: 1967,
            fim: 1983
        },
        "Ka Hatch": {
            inicio: 2014,
            fim: 2021
        },
        "Ka Sedan": {
            inicio: 2014,
            fim: 2021
        },
        "Ka (Hatch - Geração 1)": {
            inicio: 1996,
            fim: 2013
        },
        "Ka (Hatch - Geração 2)": {
            inicio: 2008,
            fim: 2013
        },
        "Ka (Hatch - Geração 3)": {
            inicio: 2014,
            fim: 2021
        },
        "Ka Sedan (Geração 3)": {
            inicio: 2014,
            fim: 2021
        },
        Maverick: {
            inicio: 2021,
            fim: null
        },
        "Maverick (Antigo V8/4cil)": {
            inicio: 1973,
            fim: 1979
        },
        "Maverick (Picape)": {
            inicio: 2021,
            fim: null
        },
        "Mondeo (Sedan/Perua)": {
            inicio: 1993,
            fim: 2006
        },
        Mustang: {
            inicio: 2017,
            fim: null
        },
        "Mustang (Esportivo)": {
            inicio: 2017,
            fim: null
        },
        "Mustang Mach-E (Elétrico)": {
            inicio: 2020,
            fim: null
        },
        "Pampa (Picape)": {
            inicio: 1982,
            fim: 1997
        },
        "Ranger CD": {
            inicio: 2e3,
            fim: null
        },
        "Ranger Cabine Simples": {
            inicio: 1994,
            fim: null
        },
        "Ranger Cabine Estendida": {
            inicio: 1994,
            fim: 2012
        },
        "Ranger Cabine Dupla": {
            inicio: 1997,
            fim: null
        },
        "Royale (Perua)": {
            inicio: 1992,
            fim: 1996
        },
        Territory: {
            inicio: 2019,
            fim: null
        },
        "Territory (SUV Médio)": {
            inicio: 2019,
            fim: null
        },
        "Verona (Sedan/Coupé)": {
            inicio: 1989,
            fim: 1996
        },
        "Versailles (Sedan)": {
            inicio: 1991,
            fim: 1996
        }
    },
    Foton: {
        "Tunland CD": {
            inicio: 2013,
            fim: null
        },
        "Tunland CS": {
            inicio: 2013,
            fim: null
        },
        "Tunland Cabine Simples (Picape)": {
            inicio: 2013,
            fim: null
        },
        "Tunland Cabine Dupla (Picape)": {
            inicio: 2013,
            fim: null
        }
    },
    GAC: {
        "AION S": {
            inicio: 2023,
            fim: null
        },
        "AION Y": {
            inicio: 2023,
            fim: null
        },
        Empow: {
            inicio: 2022,
            fim: null
        },
        GA4: {
            inicio: 2019,
            fim: 2021
        },
        GM6: {
            inicio: 2020,
            fim: null
        },
        GN8: {
            inicio: 2022,
            fim: null
        },
        GS3: {
            inicio: 2019,
            fim: 2022
        },
        "GS3 Power": {
            inicio: 2023,
            fim: null
        },
        GS4: {
            inicio: 2019,
            fim: null
        },
        "GS4 Plus": {
            inicio: 2022,
            fim: null
        },
        GS5: {
            inicio: 2020,
            fim: null
        },
        GS7: {
            inicio: 2019,
            fim: 2022
        },
        GS8: {
            inicio: 2021,
            fim: null
        }
    },
    GWM: {
        "Haval H6 Hybrid": {
            inicio: 2023,
            fim: null
        },
        "Haval H6 GT": {
            inicio: 2023,
            fim: null
        },
        "Haval H9": {
            inicio: 2025,
            fim: null
        },
        "Ora 03 Elétrico": {
            inicio: 2023,
            fim: null
        },
        "Poer Picape": {
            inicio: 2024,
            fim: null
        },
        "Tank 300": {
            inicio: 2025,
            fim: null
        }
    },
    "GWM (Great Wall)": {
        "Tank 300 (Jipe)": {
            inicio: 2025,
            fim: null
        },
        "Haval H6 (SUV Híbrido/PHEV)": {
            inicio: 2023,
            fim: null
        },
        "Haval H6 GT (SUV Coupé Híbrido)": {
            inicio: 2023,
            fim: null
        },
        "Haval H9": {
            inicio: 2025,
            fim: null
        },
        "Ora 03 (Hatch Elétrico)": {
            inicio: 2023,
            fim: null
        },
        "Poer (Picape)": {
            inicio: 2024,
            fim: null
        },
        "WEY 07 (SUV Híbrido)": {
            inicio: 2026,
            fim: null
        }
    },
    Geely: {
        "EC7 (Sedan)": {
            inicio: 2009,
            fim: null
        },
        "EX2 Elétrico": {
            inicio: 2025,
            fim: null
        },
        "EX2 (Elétrico)": {
            inicio: 2025,
            fim: null
        },
        "EX5 Elétrico": {
            inicio: 2023,
            fim: null
        },
        "EX5 (Elétrico)": {
            inicio: 2023,
            fim: null
        }
    },
    Haval: {
        H6: {
            inicio: 2011,
            fim: null
        },
        "H6 (SUV)": {
            inicio: 2011,
            fim: null
        },
        "H6 GT": {
            inicio: 2022,
            fim: null
        },
        "H6 GT (SUV Coupé)": {
            inicio: 2022,
            fim: null
        },
        "H6 HEV": {
            inicio: 2023,
            fim: null
        },
        "H6 HEV (Híbrido)": {
            inicio: 2023,
            fim: null
        },
        "H6 PHEV (Híbrido Plug-in)": {
            inicio: 2023,
            fim: null
        },
        Jolion: {
            inicio: 2020,
            fim: null
        },
        "Jolion (SUV Compacto)": {
            inicio: 2020,
            fim: null
        }
    },
    Honda: {
        Accord: {
            inicio: 2e3,
            fim: null
        },
        "City Hatch": {
            inicio: 2021,
            fim: null
        },
        "City Sedan": {
            inicio: 2009,
            fim: null
        },
        Civic: {
            inicio: 2e3,
            fim: null
        },
        "Civic Si": {
            inicio: 2007,
            fim: null
        },
        "Civic Si (Esportivo)": {
            inicio: 2007,
            fim: null
        },
        "Civic Touring": {
            inicio: 2017,
            fim: null
        },
        "Civic Type R": {
            inicio: 2023,
            fim: null
        },
        "Civic Type R (Esportivo)": {
            inicio: 2023,
            fim: null
        },
        "CR-V": {
            inicio: 2e3,
            fim: null
        },
        Fit: {
            inicio: 2003,
            fim: 2021
        },
        "Fit (Minivan Compacta)": {
            inicio: 2001,
            fim: 2021
        },
        "HR-V": {
            inicio: 2015,
            fim: null
        },
        "HR-V Turing": {
            inicio: 2022,
            fim: null
        },
        "Pilot (SUV Grande 7 Lugares)": {
            inicio: 2002,
            fim: null
        },
        "WR-V": {
            inicio: 2017,
            fim: 2021
        },
        "WR-V (Nova Geração)": {
            inicio: 2025,
            fim: null
        },
        "ZR-V": {
            inicio: 2023,
            fim: null
        },
        "ZR-V (SUV Médio)": {
            inicio: 2023,
            fim: null
        }
    },
    Hyundai: {
        Azera: {
            inicio: 2e3,
            fim: 2018
        },
        "Azera (Sedan Grande)": {
            inicio: 1996,
            fim: 2018
        },
        Creta: {
            inicio: 2016,
            fim: null
        },
        "Creta N Line": {
            inicio: 2022,
            fim: null
        },
        Elantra: {
            inicio: 2e3,
            fim: null
        },
        "Elantra (Sedan)": {
            inicio: 1990,
            fim: null
        },
        HB20: {
            inicio: 2012,
            fim: null
        },
        "HB20 (Hatch)": {
            inicio: 2012,
            fim: null
        },
        HB20S: {
            inicio: 2013,
            fim: null
        },
        HB20X: {
            inicio: 2013,
            fim: 2021
        },
        "HB20X (Aventureiro)": {
            inicio: 2013,
            fim: 2021
        },
        "HR (Caminhonete)": {
            inicio: 2005,
            fim: null
        },
        "Ioniq (Híbrido/Elétrico)": {
            inicio: 2016,
            fim: null
        },
        "Ioniq 5": {
            inicio: 2024,
            fim: null
        },
        Ix35: {
            inicio: 2010,
            fim: null
        },
        "Ix35 (SUV - Geração 2)": {
            inicio: 2010,
            fim: null
        },
        Kona: {
            inicio: 2017,
            fim: null
        },
        "Kona (SUV Compacto)": {
            inicio: 2017,
            fim: null
        },
        "New Tucson": {
            inicio: 2015,
            fim: null
        },
        "New Tucson (SUV - Geração 3)": {
            inicio: 2015,
            fim: null
        },
        Palisade: {
            inicio: 2024,
            fim: null
        },
        "Palisade (SUV Grande)": {
            inicio: 2024,
            fim: null
        },
        "Santa Fe": {
            inicio: 2e3,
            fim: null
        },
        "Santa Fe (SUV Médio)": {
            inicio: 2e3,
            fim: null
        },
        "Sonata (Sedan)": {
            inicio: 1985,
            fim: null
        },
        "Tucson G1": {
            inicio: 2004,
            fim: 2015
        },
        "Veloster (Hatch 3 Portas)": {
            inicio: 2011,
            fim: 2018
        },
        "Vera Cruz (SUV Grande)": {
            inicio: 2007,
            fim: 2012
        },
        "i30 (Hatch)": {
            inicio: 2007,
            fim: 2017
        }
    },
    "JAC Motors": {
        "E-JS1 Elétrico": {
            inicio: 2021,
            fim: null
        },
        "E-JS1 (Hatch Elétrico)": {
            inicio: 2021,
            fim: null
        },
        "Hunter Picape": {
            inicio: 2024,
            fim: null
        },
        "Hunter (Picape)": {
            inicio: 2024,
            fim: null
        },
        "J2 (Subcompacto)": {
            inicio: 2012,
            fim: 2016
        },
        "J3 (Hatch)": {
            inicio: 2011,
            fim: 2015
        },
        "J3 Turin (Sedan)": {
            inicio: 2011,
            fim: 2015
        },
        "J5 (Sedan)": {
            inicio: 2011,
            fim: 2016
        },
        "J6 (Minivan)": {
            inicio: 2011,
            fim: 2016
        },
        "E-JS1": {
            inicio: 2022,
            fim: 2026
        },
        "T5 (SUV Compacto)": {
            inicio: 2017,
            fim: 2019
        },
        T6: {
            inicio: 2014,
            fim: 2021
        },
        T8: {
            inicio: 2014,
            fim: 2018
        },
        "T40 SUV": {
            inicio: 2016,
            fim: null
        },
        "T40/E-JS4 (SUV Compacto)": {
            inicio: 2016,
            fim: null
        },
        "T50/iEV40 (SUV Médio)": {
            inicio: 2018,
            fim: null
        },
        "T60 SUV": {
            inicio: 2019,
            fim: null
        },
        "T60/T80 (SUV Grande)": {
            inicio: 2019,
            fim: null
        },
        "V260 (Caminhão Leve)": {
            inicio: 2017,
            fim: null
        }
    },
    Jaguar: {
        "E-PACE": {
            inicio: 2018,
            fim: 2023
        },
        "F-PACE": {
            inicio: 2017,
            fim: 2025
        },
        "F-Type": {
            inicio: 2014,
            fim: 2020
        },
        "I-PACE": {
            inicio: 2019,
            fim: 2022
        },
        "S-Type": {
            inicio: 2e3,
            fim: 2007
        },
        "X-Type": {
            inicio: 2002,
            fim: 2007
        },
        XE: {
            inicio: 2016,
            fim: 2021
        },
        XF: {
            inicio: 2008,
            fim: 2020
        },
        XJ: {
            inicio: 2010,
            fim: 2019
        },
        XK: {
            inicio: 2e3,
            fim: 2006
        }
    },
    Jeep: {
        Avenger: {
            inicio: 2025,
            fim: null
        },
        "Avenger (SUV Compacto)": {
            inicio: 2025,
            fim: null
        },
        Cherokee: {
            inicio: 2e3,
            fim: null
        },
        Commander: {
            inicio: 2021,
            fim: null
        },
        "Commander (SUV 7 Lugares)": {
            inicio: 2021,
            fim: null
        },
        Compass: {
            inicio: 2006,
            fim: null
        },
        Gladiator: {
            inicio: 2020,
            fim: null
        },
        "Gladiator (Picape)": {
            inicio: 2020,
            fim: null
        },
        "Grand Cherokee": {
            inicio: 2e3,
            fim: null
        },
        Renegade: {
            inicio: 2014,
            fim: null
        },
        Wrangler: {
            inicio: 2e3,
            fim: null
        }
    },
    Kia: {
        "Bongo K2500 (Caminhonete Leve)": {
            inicio: 1980,
            fim: null
        },
        Carnival: {
            inicio: 2e3,
            fim: null
        },
        "Carnival (Minivan)": {
            inicio: 1998,
            fim: null
        },
        Cerato: {
            inicio: 2003,
            fim: null
        },
        "Cerato (Sedan)": {
            inicio: 2003,
            fim: null
        },
        EV5: {
            inicio: 2025,
            fim: null
        },
        EV9: {
            inicio: 2024,
            fim: null
        },
        "EV9 (SUV Elétrico)": {
            inicio: 2024,
            fim: null
        },
        "Mohave (SUV Grande)": {
            inicio: 2008,
            fim: 2017
        },
        Niro: {
            inicio: 2023,
            fim: 2024
        },
        "Optima (Sedan)": {
            inicio: 2e3,
            fim: 2020
        },
        Picanto: {
            inicio: 2004,
            fim: null
        },
        "Picanto (Subcompacto)": {
            inicio: 2004,
            fim: null
        },
        "Rio (Hatch/Sedan)": {
            inicio: 1999,
            fim: null
        },
        Sorento: {
            inicio: 2002,
            fim: null
        },
        "Sorento 2.4 4x2 AT 5 lugares": {
            inicio: 2009,
            fim: 2012
        },
        "Sorento EX 3.5 V6 5 lugares": {
            inicio: 2009,
            fim: 2012
        },
        "Sorento 2.4 4x2 AT 7 lugares": {
            inicio: 2012,
            fim: 2014
        },
        "Sorento EX 3.5 V6 7 lugares": {
            inicio: 2012,
            fim: 2014
        },
        "Sorento 3.3/3.5 V6 7 lugares": {
            inicio: 2015,
            fim: 2020
        },
        "Sorento 4ª Geração 7 lugares": {
            inicio: 2026,
            fim: null
        },
        Soul: {
            inicio: 2008,
            fim: null
        },
        "Soul (Crossover)": {
            inicio: 2008,
            fim: null
        },
        Sportage: {
            inicio: 2e3,
            fim: null
        },
        Stonic: {
            inicio: 2017,
            fim: null
        },
        "Stonic (Crossover Compacto)": {
            inicio: 2017,
            fim: null
        }
    },
    "Land Rover": {
        "Defender (Jipe - Antigo)": {
            inicio: 1983,
            fim: 2016
        },
        "Defender Novo": {
            inicio: 2020,
            fim: null
        },
        "Defender (SUV - Novo)": {
            inicio: 2020,
            fim: null
        },
        Discovery: {
            inicio: 2e3,
            fim: null
        },
        "Discovery (SUV Grande)": {
            inicio: 1989,
            fim: null
        },
        "Discovery Sport": {
            inicio: 2014,
            fim: null
        },
        "Discovery Sport (SUV Médio)": {
            inicio: 2014,
            fim: null
        },
        "Freelander (SUV)": {
            inicio: 1997,
            fim: 2015
        },
        "Range Rover": {
            inicio: 2e3,
            fim: null
        },
        "Range Rover Evoque": {
            inicio: 2011,
            fim: null
        },
        "Range Rover Sport": {
            inicio: 2005,
            fim: null
        },
        "Range Rover Velar": {
            inicio: 2017,
            fim: null
        },
        "Range Rover Vogue": {
            inicio: 2007,
            fim: null
        },
        "Range Rover Vogue SE": {
            inicio: 2013,
            fim: null
        },
        "Range Rover Vogue Autobiography": {
            inicio: 2014,
            fim: null
        },
        "Range Rover Vogue LWB": {
            inicio: 2020,
            fim: null
        }
    },
    Leapmotor: {
        "B10 (Elétrico)": {
            inicio: 2026,
            fim: null
        },
        "C10 (Elétrico)": {
            inicio: 2025,
            fim: null
        },
        "C10 (Ultra-Híbrido REEV)": {
            inicio: 2025,
            fim: null
        },
        "C16 (SUV 6 Lugares)": {
            inicio: 2026,
            fim: null
        }
    },
    Lexus: {
        "CT 200h": {
            inicio: 2011,
            fim: 2022
        },
        "CT 200h (Hatch Híbrido)": {
            inicio: 2011,
            fim: 2022
        },
        ES: {
            inicio: 2e3,
            fim: null
        },
        "ES (Sedan Luxo)": {
            inicio: 1989,
            fim: null
        },
        IS: {
            inicio: 2e3,
            fim: null
        },
        "IS (Sedan)": {
            inicio: 1998,
            fim: null
        },
        NX: {
            inicio: 2014,
            fim: null
        },
        "NX (SUV Médio/Híbrido)": {
            inicio: 2014,
            fim: null
        },
        RX: {
            inicio: 2e3,
            fim: null
        },
        "RX (SUV Grande/Híbrido)": {
            inicio: 1998,
            fim: null
        },
        "RZ 450e": {
            inicio: 2024,
            fim: null
        },
        "RZ 450e (Elétrico)": {
            inicio: 2024,
            fim: null
        },
        UX: {
            inicio: 2018,
            fim: null
        },
        "UX (SUV Compacto/Híbrido)": {
            inicio: 2018,
            fim: null
        }
    },
    Lifan: {
        320: {
            inicio: 2010,
            fim: 2014
        },
        "320 Talent": {
            inicio: 2010,
            fim: 2014
        },
        530: {
            inicio: 2014,
            fim: 2021
        },
        "530 Talent": {
            inicio: 2014,
            fim: 2021
        },
        620: {
            inicio: 2010,
            fim: 2013
        },
        "620 Talent": {
            inicio: 2010,
            fim: 2013
        },
        Foison: {
            inicio: 2012,
            fim: 2021
        },
        "Foison Cargo": {
            inicio: 2012,
            fim: 2021
        },
        "Foison Truck": {
            inicio: 2013,
            fim: 2021
        },
        X60: {
            inicio: 2013,
            fim: 2021
        },
        "X60 Talent": {
            inicio: 2013,
            fim: 2021
        },
        "X60 Talent S": {
            inicio: 2014,
            fim: 2021
        },
        "X60 VIP": {
            inicio: 2014,
            fim: 2021
        },
        X80: {
            inicio: 2018,
            fim: 2019
        },
        "X80 VIP": {
            inicio: 2018,
            fim: 2019
        }
    },
    "Mercedes-Benz": {
        "AMG GT (Esportivo)": {
            inicio: 2014,
            fim: null
        },
        "B 180": {
            inicio: 2010,
            fim: 2018
        },
        CLA: {
            inicio: 2013,
            fim: null
        },
        "CLA (Coupé 4 Portas)": {
            inicio: 2013,
            fim: null
        },
        "Classe A": {
            inicio: 2e3,
            fim: null
        },
        "Classe A (Hatch/Sedan)": {
            inicio: 1997,
            fim: null
        },
        "Classe C": {
            inicio: 2e3,
            fim: null
        },
        "Classe C (Sedan/Coupé/Perua)": {
            inicio: 1993,
            fim: null
        },
        "Classe E": {
            inicio: 2e3,
            fim: null
        },
        "Classe E (Sedan/Coupé/Perua)": {
            inicio: 1953,
            fim: null
        },
        "Classe G": {
            inicio: 2e3,
            fim: null
        },
        "Classe G (Jipe Off-Road)": {
            inicio: 1979,
            fim: null
        },
        "Classe S": {
            inicio: 2e3,
            fim: null
        },
        "Classe S (Sedan Luxo)": {
            inicio: 1972,
            fim: null
        },
        EQA: {
            inicio: 2021,
            fim: null
        },
        "EQA (Elétrico SUV Compacto)": {
            inicio: 2021,
            fim: null
        },
        EQB: {
            inicio: 2021,
            fim: null
        },
        "EQB (Elétrico SUV 7 Lugares)": {
            inicio: 2021,
            fim: null
        },
        EQC: {
            inicio: 2019,
            fim: null
        },
        "EQC (Elétrico SUV Médio)": {
            inicio: 2019,
            fim: null
        },
        "EQE (Sedan Elétrico)": {
            inicio: 2022,
            fim: null
        },
        EQS: {
            inicio: 2021,
            fim: null
        },
        "EQS (Sedan Luxo Elétrico)": {
            inicio: 2021,
            fim: null
        },
        GLA: {
            inicio: 2013,
            fim: null
        },
        "GLA (SUV Compacto)": {
            inicio: 2013,
            fim: null
        },
        GLB: {
            inicio: 2019,
            fim: null
        },
        "GLB (SUV 7 Lugares)": {
            inicio: 2019,
            fim: null
        },
        GLC: {
            inicio: 2015,
            fim: null
        },
        "GLC (SUV Médio)": {
            inicio: 2015,
            fim: null
        },
        GLE: {
            inicio: 2e3,
            fim: null
        },
        "GLE (SUV Grande)": {
            inicio: 1997,
            fim: null
        },
        GLK: {
            inicio: 2009,
            fim: 2015
        },
        "GLK 300": {
            inicio: 2009,
            fim: 2015
        },
        "GLK 300 4MATIC": {
            inicio: 2009,
            fim: 2015
        },
        "GLK 300 4MATIC Sport": {
            inicio: 2010,
            fim: 2015
        },
        GLS: {
            inicio: 2006,
            fim: null
        },
        "GLS (SUV Luxo 7 Lugares)": {
            inicio: 2006,
            fim: null
        },
        Sprinter: {
            inicio: 2e3,
            fim: null
        },
        "Sprinter (Van/Furgão)": {
            inicio: 1995,
            fim: null
        }
    },
    Mini: {
        "Clubman (Perua Compacta)": {
            inicio: 2007,
            fim: null
        },
        "Cooper Hatch": {
            inicio: 2001,
            fim: 2024
        },
        "Cooper (Hatch 3 Portas)": {
            inicio: 2001,
            fim: 2024
        },
        "Cooper Nova Geração": {
            inicio: 2025,
            fim: null
        },
        "Cooper (Nova Geração)": {
            inicio: 2025,
            fim: null
        },
        "Cooper E Elétrico": {
            inicio: 2020,
            fim: null
        },
        "Cooper E/SE (Elétrico)": {
            inicio: 2020,
            fim: null
        },
        "Cooper S": {
            inicio: 2001,
            fim: 2024
        },
        "Cooper S (Hatch Esportivo)": {
            inicio: 2001,
            fim: 2024
        },
        Countryman: {
            inicio: 2010,
            fim: 2024
        },
        "Countryman (SUV Compacto)": {
            inicio: 2010,
            fim: 2024
        },
        "Countryman Nova Geração": {
            inicio: 2025,
            fim: null
        },
        "Countryman (Nova Geração)": {
            inicio: 2025,
            fim: null
        },
        Paceman: {
            inicio: 2012,
            fim: 2016
        }
    },
    Mitsubishi: {
        ASX: {
            inicio: 2010,
            fim: null
        },
        Airtrek: {
            inicio: 2003,
            fim: 2006
        },
        "ASX (SUV Compacto)": {
            inicio: 2010,
            fim: null
        },
        "Eclipse Cross": {
            inicio: 2017,
            fim: null
        },
        "Eclipse Cross (SUV Coupé)": {
            inicio: 2017,
            fim: null
        },
        "L200 (Picape - Geração 1)": {
            inicio: 1978,
            fim: null
        },
        "L200 Outdoor (Geração 3)": {
            inicio: 2007,
            fim: 2012
        },
        "L200 Triton": {
            inicio: 2005,
            fim: null
        },
        "L200 Triton HPE": {
            inicio: 2012,
            fim: null
        },
        "L200 Triton HPE-S": {
            inicio: 2014,
            fim: null
        },
        "L200 Triton (Picape - Geração 4+)": {
            inicio: 2005,
            fim: null
        },
        "L200 Triton (Nova Geração)": {
            inicio: 2025,
            fim: null
        },
        "L200 Triton Outdoor (Fase 1)": {
            inicio: 2016,
            fim: 2018
        },
        "L200 Triton Katana": {
            inicio: 2026,
            fim: null
        },
        "L200 Triton Sport": {
            inicio: 2019,
            fim: null
        },
        "L200 Triton Sport Outdoor (Fase 2)": {
            inicio: 2020,
            fim: null
        },
        Lancer: {
            inicio: 2007,
            fim: 2017
        },
        "Lancer (Sedan)": {
            inicio: 2007,
            fim: 2017
        },
        Outlander: {
            inicio: 2001,
            fim: null
        },
        "Outlander (SUV Médio)": {
            inicio: 2001,
            fim: null
        },
        "Pajero Dakar": {
            inicio: 2009,
            fim: 2016
        },
        "Pajero Full": {
            inicio: 2e3,
            fim: 2021
        },
        "Pajero Full (SUV Grande)": {
            inicio: 1999,
            fim: 2021
        },
        "Pajero Sport": {
            inicio: 2e3,
            fim: null
        },
        "Pajero Sport (SUV - Base L200)": {
            inicio: 1996,
            fim: null
        },
        "Pajero TR4 (SUV Compacto)": {
            inicio: 1999,
            fim: 2015
        }
    },
    Nissan: {
        "Frontier CD": {
            inicio: 2e3,
            fim: null
        },
        "Frontier Cabine Simples": {
            inicio: 1997,
            fim: 2010
        },
        "Grand Livina (Minivan 7 Lug)": {
            inicio: 2009,
            fim: 2014
        },
        Kicks: {
            inicio: 2016,
            fim: null
        },
        "Kicks (Nova Geração)": {
            inicio: 2025,
            fim: null
        },
        "Leaf (Elétrico)": {
            inicio: 2010,
            fim: null
        },
        "Livina (Minivan)": {
            inicio: 2009,
            fim: 2014
        },
        March: {
            inicio: 2010,
            fim: 2020
        },
        "Novo Versa (Sedan - 2ª Geração)": {
            inicio: 2020,
            fim: null
        },
        Sentra: {
            inicio: 2e3,
            fim: null
        },
        Tiida: {
            inicio: 2007,
            fim: 2013
        },
        "Tiida (Hatch)": {
            inicio: 2007,
            fim: 2013
        },
        "Versa G1": {
            inicio: 2011,
            fim: 2020
        },
        "Versa G2": {
            inicio: 2020,
            fim: null
        },
        "X-Trail": {
            inicio: 2e3,
            fim: null
        },
        "X-Trail (SUV Médio)": {
            inicio: 2e3,
            fim: null
        },
        "Xterra S 4x4": {
            inicio: 2008,
            fim: 2015
        },
        "Xterra SE 4x4": {
            inicio: 2005,
            fim: 2015
        },
        Kait: {
            inicio: 2026,
            fim: null
        },
        "Pathfinder LE 2.5": {
            inicio: 2008,
            fim: 2009
        },
        "Pathfinder LE 4.0 V6": {
            inicio: 2006,
            fim: 2008
        },
        "Pathfinder SE 2.5": {
            inicio: 2008,
            fim: 2009
        },
        "Pathfinder SE 3.3 V6": {
            inicio: 1997,
            fim: 1998
        },
        "Pathfinder SE 4.0 V6": {
            inicio: 2006,
            fim: 2008
        }
    },
    OMODA: {
        "Jaecoo 5 (SUV Compacto)": {
            inicio: 2026,
            fim: null
        },
        "Jaecoo 7 Luxury": {
            inicio: 2025,
            fim: null
        },
        "Jaecoo 7 Prestige": {
            inicio: 2025,
            fim: null
        },
        "Jaecoo 8 (SUV de Maior Porte)": {
            inicio: 2026,
            fim: null
        },
        "Omoda 5": {
            inicio: 2025,
            fim: null
        },
        "Omoda 5 (SUV Compacto)": {
            inicio: 2025,
            fim: null
        },
        "Omoda 5 HEV": {
            inicio: 2025,
            fim: null
        },
        "Omoda 5 HEV (SUV Compacto Híbrido)": {
            inicio: 2025,
            fim: null
        },
        "Omoda 7 PHEV (SUV Médio Híbrido Plug-in)": {
            inicio: 2025,
            fim: null
        },
        "Omoda E5 Elétrico": {
            inicio: 2025,
            fim: null
        },
        "Omoda E5 (SUV Elétrico Compacto)": {
            inicio: 2025,
            fim: null
        }
    },
    Peugeot: {
        "205 (Hatch)": {
            inicio: 1983,
            fim: 1998
        },
        206: {
            inicio: 2e3,
            fim: 2012
        },
        "206 (Hatch/Sedan/Perua)": {
            inicio: 1998,
            fim: 2012
        },
        207: {
            inicio: 2006,
            fim: 2014
        },
        "207 (Hatch/Sedan/Perua)": {
            inicio: 2006,
            fim: 2014
        },
        208: {
            inicio: 2012,
            fim: null
        },
        "306 (Hatch/Sedan/Perua)": {
            inicio: 1993,
            fim: 2002
        },
        307: {
            inicio: 2001,
            fim: 2008
        },
        "307 (Hatch/Sedan)": {
            inicio: 2001,
            fim: 2008
        },
        308: {
            inicio: 2007,
            fim: null
        },
        "308 (Hatch/Perua)": {
            inicio: 2007,
            fim: null
        },
        408: {
            inicio: 2010,
            fim: null
        },
        "408 (Sedan)": {
            inicio: 2010,
            fim: null
        },
        2008: {
            inicio: 2013,
            fim: null
        },
        "2008 (SUV Compacto)": {
            inicio: 2013,
            fim: null
        },
        3008: {
            inicio: 2008,
            fim: null
        },
        "3008 (SUV Médio)": {
            inicio: 2008,
            fim: null
        },
        5008: {
            inicio: 2009,
            fim: null
        },
        "5008 (SUV 7 Lugares)": {
            inicio: 2009,
            fim: null
        },
        "Boxer (Van)": {
            inicio: 1994,
            fim: null
        },
        "Hoggar (Picape)": {
            inicio: 2010,
            fim: 2014
        },
        "Partner (Furgão/Passageiro)": {
            inicio: 1996,
            fim: null
        },
        "e-2008": {
            inicio: 2024,
            fim: null
        },
        "e-2008 (Nova Geração)": {
            inicio: 2024,
            fim: null
        },
        "2008 Allure": {
            inicio: 2017,
            fim: null
        }
    },
    Porsche: {
        911: {
            inicio: 2e3,
            fim: null
        },
        "911 (Coupé/Conversível)": {
            inicio: 1963,
            fim: null
        },
        "Boxster/718 Boxster": {
            inicio: 1996,
            fim: null
        },
        Cayenne: {
            inicio: 2002,
            fim: null
        },
        "Cayenne (SUV Grande)": {
            inicio: 2002,
            fim: null
        },
        "Cayman/718 Cayman": {
            inicio: 2005,
            fim: null
        },
        Macan: {
            inicio: 2014,
            fim: null
        },
        "Macan (SUV Compacto)": {
            inicio: 2014,
            fim: null
        },
        "Macan EV": {
            inicio: 2025,
            fim: null
        },
        "Macan EV (Elétrico)": {
            inicio: 2025,
            fim: null
        },
        Panamera: {
            inicio: 2009,
            fim: null
        },
        Taycan: {
            inicio: 2019,
            fim: null
        },
        "Taycan (Sedan Elétrico)": {
            inicio: 2019,
            fim: null
        }
    },
    Ram: {
        "1500 Classic": {
            inicio: 2022,
            fim: null
        },
        "1500 Limited": {
            inicio: 2021,
            fim: null
        },
        "1500 Limited (Picape Full-Size)": {
            inicio: 2021,
            fim: null
        },
        "1500 Rebel": {
            inicio: 2020,
            fim: null
        },
        "1500 Rebel (Picape Full-Size)": {
            inicio: 2020,
            fim: null
        },
        "2500 CD": {
            inicio: 2009,
            fim: null
        },
        "2500 Cabine Dupla (Picape Grande)": {
            inicio: 2009,
            fim: null
        },
        "3500 CD": {
            inicio: 2022,
            fim: null
        },
        "3500 Cabine Dupla (Picape Heavy Duty)": {
            inicio: 2022,
            fim: null
        },
        Dakota: {
            inicio: 2026,
            fim: null
        },
        "Rampage Big Horn": {
            inicio: 2023,
            fim: null
        },
        "Rampage Laramie": {
            inicio: 2023,
            fim: null
        },
        "Rampage R/T": {
            inicio: 2023,
            fim: null
        },
        "Rampage Rebel": {
            inicio: 2023,
            fim: null
        }
    },
    Renault: {
        "Boreal Evolution (Entrada)": {
            inicio: 2025,
            fim: null
        },
        "Boreal Iconic (Topo de linha)": {
            inicio: 2025,
            fim: null
        },
        "Boreal Techno (Intermediária)": {
            inicio: 2025,
            fim: null
        },
        Captur: {
            inicio: 2016,
            fim: 2023
        },
        "Captur (SUV Compacto)": {
            inicio: 2016,
            fim: 2023
        },
        Duster: {
            inicio: 2010,
            fim: null
        },
        "Duster Oroch": {
            inicio: 2015,
            fim: null
        },
        "E-Kwid E-Tech": {
            inicio: 2023,
            fim: null
        },
        "Fluence (Sedan)": {
            inicio: 2011,
            fim: 2018
        },
        Kardian: {
            inicio: 2024,
            fim: null
        },
        "Kardian (SUV Compacto)": {
            inicio: 2024,
            fim: null
        },
        "Koleos (SUV Médio)": {
            inicio: 2007,
            fim: null
        },
        Kwid: {
            inicio: 2015,
            fim: null
        },
        Logan: {
            inicio: 2004,
            fim: null
        },
        "Megane (Sedan/Hatch/Perua)": {
            inicio: 1995,
            fim: 2010
        },
        "Megane E-Tech (Elétrico)": {
            inicio: 2022,
            fim: null
        },
        "Mégane Grand Tour": {
            inicio: 2008,
            fim: 2012
        },
        Sandero: {
            inicio: 2007,
            fim: null
        },
        Symbol: {
            inicio: 2e3,
            fim: 2013
        },
        "Sandero RS": {
            inicio: 2015,
            fim: 2021
        },
        "Sandero RS (Esportivo)": {
            inicio: 2015,
            fim: 2021
        },
        "Sandero Stepway": {
            inicio: 2008,
            fim: null
        },
        "Zoe (Elétrico)": {
            inicio: 2012,
            fim: null
        }
    },
    SsangYong: {
        "Actyon Sports": {
            inicio: 2016,
            fim: 2020
        },
        "Actyon Sports 2.0 Diesel": {
            inicio: 2008,
            fim: 2016
        },
        "Actyon Sports 2.2 Diesel": {
            inicio: 2016,
            fim: 2020
        },
        "Actyon SUV 2.3": {
            inicio: 2008,
            fim: 2014
        },
        "Actyon SUV 2.3 MT": {
            inicio: 2008,
            fim: 2014
        },
        "Actyon SUV 2.3 AT": {
            inicio: 2008,
            fim: 2014
        },
        "Actyon SUV 2.3 4x2 MT": {
            inicio: 2008,
            fim: 2014
        },
        "Actyon SUV 2.3 4x2 AT": {
            inicio: 2008,
            fim: 2014
        },
        "Actyon SUV 2.3 4x4 MT": {
            inicio: 2008,
            fim: 2014
        },
        "Actyon SUV 2.3 4x4 AT": {
            inicio: 2008,
            fim: 2014
        },
        Korando: {
            inicio: 2011,
            fim: 2017
        },
        "Korando 2.0 Diesel": {
            inicio: 2011,
            fim: 2017
        },
        "Kyron 2.0 Diesel": {
            inicio: 2008,
            fim: 2015
        },
        "Kyron 2.7 Diesel": {
            inicio: 2008,
            fim: 2015
        },
        Musso: {
            inicio: 2020,
            fim: null
        },
        "Musso 2.2 Diesel": {
            inicio: 2020,
            fim: null
        },
        "Rexton 2.7 Diesel": {
            inicio: 2005,
            fim: 2012
        },
        Tivoli: {
            inicio: 2016,
            fim: 2020
        },
        "Tivoli 1.6": {
            inicio: 2016,
            fim: 2020
        },
        "XLV 1.6": {
            inicio: 2017,
            fim: 2020
        }
    },
    Subaru: {
        BRZ: {
            inicio: 2012,
            fim: null
        },
        "BRZ (Coupé Esportivo)": {
            inicio: 2012,
            fim: null
        },
        Forester: {
            inicio: 2e3,
            fim: null
        },
        "Forester (SUV Compacto)": {
            inicio: 1997,
            fim: null
        },
        Impreza: {
            inicio: 2e3,
            fim: null
        },
        "Impreza (Sedan/Hatch)": {
            inicio: 1992,
            fim: null
        },
        "Legacy (Sedan/Perua)": {
            inicio: 1989,
            fim: null
        },
        Outback: {
            inicio: 2e3,
            fim: null
        },
        "Outback (Perua Aventureira)": {
            inicio: 1994,
            fim: null
        },
        WRX: {
            inicio: 2e3,
            fim: null
        },
        "WRX (Esportivo)": {
            inicio: 1992,
            fim: null
        },
        "XV Crosstrek": {
            inicio: 2011,
            fim: null
        },
        "XV / Crosstrek (Crossover)": {
            inicio: 2011,
            fim: null
        }
    },
    Smart: {
        "Fortwo Passion Coupé 1.0": {
            inicio: 2008,
            fim: 2015
        },
        "Fortwo Passion Cabrio 1.0": {
            inicio: 2008,
            fim: 2015
        },
        "Fortwo BRABUS Coupé 1.0": {
            inicio: 2010,
            fim: 2014
        },
        "Fortwo BRABUS Cabrio 1.0": {
            inicio: 2011,
            fim: 2014
        },
        "Fortwo Brasil Edition 1.0 MHD": {
            inicio: 2010,
            fim: 2010
        }
    },
    Suzuki: {
        "Grand Vitara": {
            inicio: 2e3,
            fim: null
        },
        "Grand Vitara (SUV)": {
            inicio: 1998,
            fim: null
        },
        "Jimny Sierra": {
            inicio: 2018,
            fim: null
        },
        "Jimny (Jipe - Geração 3)": {
            inicio: 1970,
            fim: null
        },
        "Jimny Sierra (Jipe - Geração 4)": {
            inicio: 2018,
            fim: null
        },
        "Jimny 4 All": {
            inicio: 2015,
            fim: 2016
        },
        "S-Cross (Crossover)": {
            inicio: 2013,
            fim: null
        },
        "SX4 (Crossover)": {
            inicio: 2006,
            fim: 2014
        },
        Swift: {
            inicio: 2e3,
            fim: null
        },
        "Swift (Hatch)": {
            inicio: 1983,
            fim: null
        },
        Vitara: {
            inicio: 2e3,
            fim: null
        },
        "Vitara (SUV)": {
            inicio: 1988,
            fim: null
        }
    },
    Toyota: {
        "Bandeirante (Jipe/Picape)": {
            inicio: 1962,
            fim: 2001
        },
        Camry: {
            inicio: 2e3,
            fim: null
        },
        "Camry (Sedan Grande)": {
            inicio: 1982,
            fim: null
        },
        "Corolla Sedan": {
            inicio: 2e3,
            fim: null
        },
        "Corolla Cross": {
            inicio: 2020,
            fim: null
        },
        "Corolla Cross (SUV)": {
            inicio: 2020,
            fim: null
        },
        "Corolla Cross Hybrid": {
            inicio: 2020,
            fim: null
        },
        "Corolla Fielder (Perua)": {
            inicio: 2004,
            fim: 2008
        },
        "Corolla Hybrid": {
            inicio: 2019,
            fim: null
        },
        "Corolla Hybrid (Sedan)": {
            inicio: 2019,
            fim: null
        },
        "Etios Hatch": {
            inicio: 2010,
            fim: 2021
        },
        "Etios Sedan": {
            inicio: 2012,
            fim: 2021
        },
        "GR Corolla": {
            inicio: 2022,
            fim: null
        },
        "GR Corolla (Hatch Esportivo)": {
            inicio: 2022,
            fim: null
        },
        "GR Yaris": {
            inicio: 2021,
            fim: null
        },
        "GR Yaris (Esportivo)": {
            inicio: 2021,
            fim: null
        },
        "Hilux CD": {
            inicio: 2e3,
            fim: null
        },
        "Hilux CS": {
            inicio: 2e3,
            fim: null
        },
        "Hilux Cabine Simples": {
            inicio: 1968,
            fim: null
        },
        "Hilux Cabine Dupla": {
            inicio: 1968,
            fim: null
        },
        "Mirai (Hidrogênio)": {
            inicio: 2014,
            fim: null
        },
        Prius: {
            inicio: 2e3,
            fim: 2022
        },
        "Prius (Híbrido)": {
            inicio: 1997,
            fim: 2022
        },
        RAV4: {
            inicio: 2e3,
            fim: null
        },
        "RAV4 (SUV Compacto)": {
            inicio: 1994,
            fim: null
        },
        "RAV4 Hybrid": {
            inicio: 2019,
            fim: null
        },
        SW4: {
            inicio: 2e3,
            fim: null
        },
        "SW4 (SUV)": {
            inicio: 1984,
            fim: null
        },
        "SW4 Diamond": {
            inicio: 2025,
            fim: null
        },
        "Yaris Cross": {
            inicio: 2025,
            fim: null
        },
        "Yaris Cross (SUV Compacto)": {
            inicio: 2025,
            fim: null
        },
        "Yaris Cross Hybrid": {
            inicio: 2025,
            fim: null
        },
        "Yaris Hatch": {
            inicio: 2018,
            fim: null
        },
        "Yaris Sedan": {
            inicio: 2018,
            fim: null
        }
    },
    Troller: {
        "T4 Jipe": {
            inicio: 2e3,
            fim: 2021
        },
        "T4 (Jipe)": {
            inicio: 1997,
            fim: 2021
        },
        "Pantanal (Picape)": {
            inicio: 2006,
            fim: 2008
        }
    },
    Volkswagen: {
        "Amarok CD": {
            inicio: 2010,
            fim: null
        },
        "Amarok CS": {
            inicio: 2010,
            fim: null
        },
        "Amarok Cabine Simples": {
            inicio: 2010,
            fim: null
        },
        "Amarok Cabine Dupla": {
            inicio: 2010,
            fim: null
        },
        Apollo: {
            inicio: 1990,
            fim: 1992
        },
        "Bora (Sedan)": {
            inicio: 2e3,
            fim: 2011
        },
        Brasília: {
            inicio: 1973,
            fim: 1982
        },
        CrossFox: {
            inicio: 2005,
            fim: 2021
        },
        "CrossFox (Aventureiro)": {
            inicio: 2005,
            fim: 2021
        },
        Fox: {
            inicio: 2003,
            fim: 2021
        },
        "Fox (Hatch)": {
            inicio: 2003,
            fim: 2021
        },
        "Fusca (Clássico)": {
            inicio: 1938,
            fim: 1986
        },
        "Fusca (Itamar)": {
            inicio: 1993,
            fim: 1996
        },
        "Fusca (A5/The Beetle)": {
            inicio: 2011,
            fim: 2019
        },
        Gol: {
            inicio: 2e3,
            fim: 2022
        },
        "Gol (Hatch - G1 a G8)": {
            inicio: 1980,
            fim: 2022
        },
        Golf: {
            inicio: 2e3,
            fim: 2020
        },
        "Golf (Hatch)": {
            inicio: 1994,
            fim: 2020
        },
        "ID.3 (Elétrico Hatch)": {
            inicio: 2019,
            fim: null
        },
        "ID.4 SUV Elétrico": {
            inicio: 2020,
            fim: null
        },
        "ID.4 (Elétrico SUV)": {
            inicio: 2020,
            fim: null
        },
        "ID.Buzz (Kombi Elétrica)": {
            inicio: 2022,
            fim: null
        },
        Jetta: {
            inicio: 2e3,
            fim: null
        },
        "Jetta (Sedan)": {
            inicio: 1981,
            fim: null
        },
        "Jetta Variant (Perua)": {
            inicio: 2008,
            fim: 2014
        },
        "Karmann Ghia": {
            inicio: 1962,
            fim: 1975
        },
        "Kombi (Perua/Furgão)": {
            inicio: 1950,
            fim: 2013
        },
        Logus: {
            inicio: 1993,
            fim: 1997
        },
        "New Beetle": {
            inicio: 1997,
            fim: 2011
        },
        Nivus: {
            inicio: 2020,
            fim: null
        },
        "Nivus GTS": {
            inicio: 2025,
            fim: null
        },
        Parati: {
            inicio: 2e3,
            fim: 2012
        },
        "Parati (Perua)": {
            inicio: 1982,
            fim: 2012
        },
        "Parati G1 (Quadrada)": {
            inicio: 1982,
            fim: 1995
        },
        "Parati G2 (Bolinha)": {
            inicio: 1996,
            fim: 1999
        },
        "Parati G3": {
            inicio: 1999,
            fim: 2005
        },
        "Parati G4": {
            inicio: 2005,
            fim: 2012
        },
        Passat: {
            inicio: 2e3,
            fim: null
        },
        "Passat (Sedan/Perua - Antigo)": {
            inicio: 1973,
            fim: 1988
        },
        "Passat (Sedan - Importado)": {
            inicio: 1994,
            fim: null
        },
        Pointer: {
            inicio: 1993,
            fim: 1996
        },
        Polo: {
            inicio: 2002,
            fim: null
        },
        "Polo (Hatch)": {
            inicio: 2002,
            fim: null
        },
        "Polo GTS": {
            inicio: 2020,
            fim: null
        },
        "Polo GTS (Esportivo)": {
            inicio: 2020,
            fim: null
        },
        "Polo Sedan": {
            inicio: 2002,
            fim: 2014
        },
        "Polo Track": {
            inicio: 2023,
            fim: null
        },
        "Polo Track (Entrada)": {
            inicio: 2023,
            fim: null
        },
        "Quantum (Perua)": {
            inicio: 1985,
            fim: 2003
        },
        "SP2 (Esportivo)": {
            inicio: 1972,
            fim: 1976
        },
        "Santana (Sedan)": {
            inicio: 1984,
            fim: 2006
        },
        "Saveiro CD": {
            inicio: 2014,
            fim: null
        },
        "Saveiro CS": {
            inicio: 2e3,
            fim: null
        },
        "Saveiro Cabine Simples": {
            inicio: 1982,
            fim: null
        },
        "Saveiro Cabine Estendida": {
            inicio: 1999,
            fim: 2014
        },
        "Saveiro Cabine Dupla": {
            inicio: 2014,
            fim: null
        },
        SpaceFox: {
            inicio: 2006,
            fim: 2019
        },
        "SpaceFox / Space Cross (Perua)": {
            inicio: 2006,
            fim: 2019
        },
        "T-Cross": {
            inicio: 2018,
            fim: null
        },
        "T-Cross (SUV Compacto)": {
            inicio: 2018,
            fim: null
        },
        "T-Cross Sense": {
            inicio: 2019,
            fim: null
        },
        "T-Cross 200 TSI": {
            inicio: 2019,
            fim: null
        },
        "T-Cross Comfortline": {
            inicio: 2019,
            fim: null
        },
        "T-Cross Highline": {
            inicio: 2019,
            fim: null
        },
        "T-Cross Extreme": {
            inicio: 2025,
            fim: null
        },
        TL: {
            inicio: 1970,
            fim: 1976
        },
        Taos: {
            inicio: 2021,
            fim: null
        },
        "Taos (SUV Médio)": {
            inicio: 2021,
            fim: null
        },
        Tera: {
            inicio: 2025,
            fim: null
        },
        "Tera (Novo SUV)": {
            inicio: 2025,
            fim: null
        },
        "Tiguan Allspace": {
            inicio: 2018,
            fim: null
        },
        "Tiguan (SUV - Geração 1)": {
            inicio: 2007,
            fim: 2018
        },
        "Tiguan 2.0 TSI (1ª Geração)": {
            inicio: 2009,
            fim: 2017
        },
        "Tiguan R-Line (Pacote estético G1)": {
            inicio: 2012,
            fim: 2017
        },
        "Tiguan Allspace 250 TSI (Entrada)": {
            inicio: 2018,
            fim: 2021
        },
        "Tiguan Allspace Comfortline (250 TSI)": {
            inicio: 2018,
            fim: 2021
        },
        "Tiguan Allspace R-Line (350 TSI)": {
            inicio: 2018,
            fim: 2021
        },
        "Tiguan Allspace R-Line (Facelift/300 TSI)": {
            inicio: 2023,
            fim: 2025
        },
        "Tiguan R-Line (3ª Geração - Importada)": {
            inicio: 2026,
            fim: null
        },
        "Touareg (SUV Grande)": {
            inicio: 2002,
            fim: 2017
        },
        Up: {
            inicio: 2014,
            fim: 2021
        },
        "Up! (Subcompacto)": {
            inicio: 2014,
            fim: 2021
        },
        "Variant I": {
            inicio: 1969,
            fim: 1977
        },
        "Variant II": {
            inicio: 1977,
            fim: 1981
        },
        Virtus: {
            inicio: 2017,
            fim: null
        },
        "Virtus (Sedan)": {
            inicio: 2017,
            fim: null
        },
        Voyage: {
            inicio: 2e3,
            fim: null
        },
        "Voyage (Sedan)": {
            inicio: 1981,
            fim: null
        }
    },
    Volvo: {
        "C30 (Hatch Coupé)": {
            inicio: 2006,
            fim: 2013
        },
        "C40 Elétrico": {
            inicio: 2021,
            fim: null
        },
        "C40 (SUV Coupé Elétrico)": {
            inicio: 2021,
            fim: null
        },
        "EX30 Elétrico": {
            inicio: 2023,
            fim: null
        },
        "EX30 (Elétrico SUV Subcompacto)": {
            inicio: 2023,
            fim: null
        },
        "EX90 Elétrico": {
            inicio: 2024,
            fim: null
        },
        "EX90 (Elétrico SUV Grande)": {
            inicio: 2024,
            fim: null
        },
        S60: {
            inicio: 2e3,
            fim: null
        },
        S40: {
            inicio: 2e3,
            fim: 2012
        },
        "S60 (Sedan)": {
            inicio: 2e3,
            fim: null
        },
        S90: {
            inicio: 2016,
            fim: null
        },
        "S90 (Sedan Luxo)": {
            inicio: 2016,
            fim: null
        },
        "V40 (Hatch)": {
            inicio: 2012,
            fim: 2019
        },
        "V60 (Perua)": {
            inicio: 2010,
            fim: null
        },
        XC40: {
            inicio: 2017,
            fim: null
        },
        "XC40 (SUV Compacto)": {
            inicio: 2017,
            fim: null
        },
        "XC40 Recharge": {
            inicio: 2020,
            fim: null
        },
        "XC40 Recharge (Elétrico/Híbrido)": {
            inicio: 2020,
            fim: null
        },
        XC60: {
            inicio: 2008,
            fim: null
        },
        "XC60 (SUV Médio)": {
            inicio: 2008,
            fim: null
        },
        XC90: {
            inicio: 2002,
            fim: null
        },
        "XC90 (SUV Grande 7 Lugares)": {
            inicio: 2002,
            fim: null
        }
    },
    Zeekr: {
        X: {
            inicio: 2024,
            fim: null
        },
        "001": {
            inicio: 2024,
            fim: null
        },
        "7X": {
            inicio: 2025,
            fim: null
        }
    }
}
  , zS = () => Object.keys(vu).sort()
  , US = e => {
    const t = vu[e];
    return t ? Object.keys(t).sort() : []
}
  , HS = (e, t) => {
    var l;
    const n = (l = vu[e]) == null ? void 0 : l[t];
    if (!n)
        return [];
    const i = n.inicio
      , r = n.fim ?? new Date().getFullYear()
      , o = [];
    for (let s = r; s >= i; s--)
        o.push(s);
    return o
}
  , BS = "/assets/tapete-preto-CgvuIR59.png"
  , $S = "/assets/tapete-cinza-Ca0Yk5P8.png"
  , GS = "/assets/tapete-bege-C7_A5BBI.png"
  , WS = "/assets/kit-completo-preto-Cl0_-ld4.png"
  , XS = "/assets/kit-completo-cinza-CpdGb8cc.png"
  , QS = "/assets/kit-completo-bege-DfMxK2St.png"
  , KS = {
    Preto: BS,
    Cinza: $S,
    Bege: GS
}
  , YS = {
    Preto: WS,
    Cinza: XS,
    Bege: QS
}
  , qS = [{
    name: "Preto",
    hex: "#1A1A1A"
}, {
    name: "Cinza",
    hex: "#6B6B6B"
}, {
    name: "Bege",
    hex: "#C8A97A"
}]
  , JS = [{
    n: 1,
    label: "Marca"
}, {
    n: 2,
    label: "Modelo"
}, {
    n: 3,
    label: "Ano"
}]
  , wr = ({t: e, highlight: t}) => c.jsxs("li", {
    className: "flex items-center gap-1.5 text-[12px] leading-[1.8]",
    style: {
        color: t ? "#FF6B00" : "#444444",
        fontWeight: t ? 600 : 400
    },
    children: [t ? c.jsx("span", {
        children: "🎁"
    }) : c.jsx("span", {
        style: {
            color: "#2EAA3F"
        },
        children: "✓"
    }), c.jsx("span", {
        children: e
    })]
})
  , ZS = ({onOpenReview: e}) => {
    const [t,n] = x.useState("completo")
      , i = x.useRef(null)
      , [r,o] = x.useState("")
      , [l,s] = x.useState("")
      , [a,u] = x.useState("")
      , [d,m] = x.useState("Preto")
      , [h,f] = x.useState([])
      , [w,v] = x.useState([])
      , S = zS()
      , g = x.useMemo( () => Math.floor(Math.random() * 25) + 23, [])
      , p = r && l && a ? 3 : r && l ? 2 : r ? 1 : 0
      , y = p === 3;
    x.useEffect( () => {
        if (r && l && a) {
            const E = setTimeout( () => {
                var P;
                (P = document.querySelector("#secao-kits")) == null || P.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            , 1200);
            return () => clearTimeout(E)
        }
    }
    , [r, l, a]),
    x.useEffect( () => {
        r && (f(US(r)),
        s(""),
        u(""))
    }
    , [r]),
    x.useEffect( () => {
        r && l && (v(HS(r, l)),
        u(""))
    }
    , [r, l]);
    const C = (E, P) => ({
        border: E ? "2px solid hsl(var(--primary))" : "2px solid #E0E0E0",
        backgroundColor: P ? "#F8F8F8" : E ? "#F0FFF2" : "#FFFFFF",
        color: "#0D0D0D",
        cursor: P ? "not-allowed" : "pointer"
    })
      , b = (E, P, j, F, M, I) => c.jsxs("div", {
        children: [c.jsx("label", {
            className: "block uppercase font-bold text-[12px] mb-1.5",
            style: {
                color: "#555"
            },
            children: E
        }), c.jsxs("div", {
            className: "relative transition-all duration-300",
            style: {
                opacity: I ? 1 : .6,
                pointerEvents: I ? "auto" : "none",
                transform: I ? "translateY(0)" : "translateY(-8px)"
            },
            children: [c.jsxs("select", {
                value: P,
                onChange: L => j(L.target.value),
                disabled: !I,
                className: "w-full rounded-xl px-4 py-4 text-[16px] font-body bg-card appearance-none pr-12 transition-all duration-200 focus:outline-none",
                style: C(!!P, !I),
                children: [c.jsx("option", {
                    value: "",
                    children: M
                }), F.map(L => c.jsx("option", {
                    value: L.value,
                    children: L.label
                }, L.value))]
            }), P && c.jsx(Pr, {
                className: "absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-primary"
            }), c.jsx(ox, {
                className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
            })]
        })]
    });
    return c.jsx("section", {
        id: "kits",
        className: "py-12 md:py-16 bg-background",
        children: c.jsxs("div", {
            className: "container mx-auto px-4",
            children: [c.jsxs("div", {
                className: "text-center mb-8",
                children: [c.jsx("h2", {
                    className: "font-display font-[800] text-[32px] leading-tight text-foreground",
                    children: "Monte seu kit sob medida"
                }), c.jsx("p", {
                    className: "text-[15px] mt-2",
                    style: {
                        color: "#555"
                    },
                    children: "Produzido sob medida para o seu carro • Envio rápido"
                }), c.jsxs("div", {
                    className: "flex items-center justify-center gap-1.5 mt-3",
                    children: [[...Array(5)].map( (E, P) => c.jsx("span", {
                        className: "text-[16px]",
                        style: {
                            color: "#F5A623"
                        },
                        children: "⭐"
                    }, P)), c.jsx("span", {
                        className: "text-[14px] ml-1",
                        style: {
                            color: "#555"
                        },
                        children: "4.9 (1.247 avaliações)"
                    })]
                })]
            }), c.jsx("div", {
                ref: i,
                className: "max-w-[560px] mx-auto mt-8",
                children: c.jsxs("div", {
                    className: "bg-card rounded-[20px] p-6 md:p-8",
                    style: {
                        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                        borderTop: "4px solid hsl(var(--primary))"
                    },
                    children: [c.jsxs("div", {
                        className: "text-center mb-5",
                        children: [c.jsx("p", {
                            className: "font-display font-bold text-[22px] text-foreground",
                            children: "🚗 Agora escolha seu carro"
                        }), c.jsx("p", {
                            className: "text-sm text-muted-foreground font-body mt-1",
                            children: "Escolha os dados do seu carro para garantir o encaixe perfeito"
                        })]
                    }), c.jsx("div", {
                        className: "flex items-center justify-center mb-6",
                        children: JS.map( (E, P) => {
                            const j = p > P
                              , F = p === P;
                            return c.jsxs("div", {
                                className: "flex items-center",
                                children: [P > 0 && c.jsx("div", {
                                    className: "w-10 md:w-14 h-0.5 transition-colors duration-300",
                                    style: {
                                        backgroundColor: p > P ? "hsl(var(--primary))" : "#E0E0E0"
                                    }
                                }), c.jsxs("div", {
                                    className: "flex flex-col items-center gap-1",
                                    children: [c.jsx("div", {
                                        className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                                        style: {
                                            backgroundColor: j || F ? "hsl(var(--primary))" : "#FFFFFF",
                                            border: j || F ? "none" : "2px solid #E0E0E0",
                                            color: j || F ? "#FFFFFF" : "#999"
                                        },
                                        children: j ? c.jsx(Pr, {
                                            className: "w-3.5 h-3.5"
                                        }) : E.n
                                    }), c.jsx("span", {
                                        className: "text-[11px] text-muted-foreground font-body",
                                        children: E.label
                                    })]
                                })]
                            }, P)
                        }
                        )
                    }), c.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [b("MARCA", r, o, S.map(E => ({
                            value: E,
                            label: E
                        })), "Escolha a marca do seu carro", !0), b("MODELO", l, s, h.map(E => ({
                            value: E,
                            label: E
                        })), r ? "Agora escolha o modelo →" : "Escolha o Modelo", !!r), b("ANO", a, u, w.map(E => ({
                            value: String(E),
                            label: String(E)
                        })), l ? "Quase lá! Escolha o ano →" : "Escolha o Ano", !!l)]
                    }), y && c.jsxs("div", {
                        className: "mt-5 text-center animate-fade-in",
                        style: {
                            background: "#F0FFF2",
                            border: "1px solid #2EAA3F",
                            borderRadius: 16,
                            padding: 20
                        },
                        children: [c.jsx("span", {
                            className: "text-[28px]",
                            children: "⭐"
                        }), c.jsx("p", {
                            className: "font-bold text-[16px] mt-1",
                            style: {
                                color: "#0D0D0D"
                            },
                            children: "Excelente escolha!"
                        }), c.jsxs("p", {
                            className: "text-[15px] mt-2 leading-relaxed",
                            style: {
                                color: "#333"
                            },
                            children: ["Encontramos o tapete perfeito para o seu ", r, " ", l, " ", a, " na cor ", d, ".", c.jsx("br", {}), "Encaixe 100% garantido — feito sob medida para o assoalho do seu carro."]
                        }), c.jsx("div", {
                            className: "my-3",
                            style: {
                                borderTop: "1px solid #D0EFD0"
                            }
                        }), c.jsxs("div", {
                            className: "flex justify-center gap-4",
                            children: [c.jsx("span", {
                                className: "text-[13px] font-bold",
                                style: {
                                    color: "#2EAA3F"
                                },
                                children: "✅ Estoque Confirmado"
                            }), c.jsx("span", {
                                className: "text-[13px] font-bold",
                                style: {
                                    color: "#2EAA3F"
                                },
                                children: "🛡️ Garantia Total"
                            })]
                        })]
                    }), y && c.jsxs("div", {
                        className: "mt-4 animate-fade-in",
                        children: [c.jsxs("p", {
                            className: "text-[14px] text-center",
                            style: {
                                color: "#333"
                            },
                            children: ["Restam apenas ", c.jsx("span", {
                                className: "font-bold",
                                style: {
                                    color: "#FF6B00"
                                },
                                children: g
                            }), " unidades em estoque."]
                        }), c.jsx("div", {
                            className: "mt-2 h-1.5 rounded",
                            style: {
                                backgroundColor: "#E0E0E0"
                            },
                            children: c.jsx("div", {
                                className: "h-full rounded transition-all duration-500",
                                style: {
                                    width: `${g}%`,
                                    backgroundColor: "#2EAA3F"
                                }
                            })
                        })]
                    }), c.jsx("p", {
                        className: "text-xs text-muted-foreground font-body text-center mt-3",
                        children: "🔒 Pagamento Seguro · 🚚 Frete Grátis · ↩️ 7 dias para trocar"
                    })]
                })
            }), c.jsxs("div", {
                id: "secao-kits",
                className: "mx-auto mt-10 rounded-[16px] min-[480px]:rounded-[16px] rounded-none max-w-[520px] w-full",
                style: {
                    background: "#F5F5F5",
                    padding: "20px 16px",
                    border: "1px solid #E0E0E0"
                },
                children: [c.jsxs("div", {
                    className: "flex items-center gap-3 rounded-[10px] mb-[14px]",
                    style: {
                        background: "#EAF7EC",
                        border: "1px solid #C3E6C8",
                        padding: "12px 16px"
                    },
                    children: [c.jsx("span", {
                        style: {
                            color: "#2EAA3F",
                            fontSize: 18
                        },
                        children: "🛡️"
                    }), c.jsxs("div", {
                        children: [c.jsx("p", {
                            className: "text-[11px]",
                            style: {
                                color: "#666666"
                            },
                            children: "Tapete sob medida para"
                        }), c.jsx("p", {
                            className: "text-[14px] font-semibold",
                            style: {
                                color: r && l && a ? "#0D0D0D" : "#999999"
                            },
                            children: r && l && a ? `${r} ${l} ${a}` : "Selecione seu veículo acima"
                        })]
                    })]
                }), c.jsxs("div", {
                    onClick: () => n("completo"),
                    className: "rounded-[12px] cursor-pointer mb-[10px]",
                    style: {
                        background: "#FFFFFF",
                        border: t === "completo" ? "2px solid #2EAA3F" : "2px solid #E0E0E0",
                        boxShadow: t === "completo" ? "0 0 0 4px rgba(46,170,63,0.10)" : "none",
                        padding: "14px",
                        transition: "border 0.2s ease, box-shadow 0.2s ease"
                    },
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [c.jsx("span", {
                            className: "font-display uppercase text-[10px] font-bold px-2 py-[3px] rounded",
                            style: {
                                background: "#2EAA3F",
                                color: "#FFFFFF"
                            },
                            children: "MAIS VENDIDO"
                        }), c.jsx("span", {
                            className: "font-display uppercase text-[10px] font-bold px-2 py-[3px] rounded",
                            style: {
                                background: "#FF6B00",
                                color: "#FFFFFF"
                            },
                            children: "-40%"
                        }), c.jsx("div", {
                            className: "ml-auto w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0",
                            style: {
                                background: t === "completo" ? "#2EAA3F" : "#FFFFFF",
                                border: t === "completo" ? "none" : "2px solid #CCCCCC"
                            },
                            children: t === "completo" && c.jsx(Pr, {
                                className: "w-3 h-3 text-white"
                            })
                        })]
                    }), c.jsxs("div", {
                        className: "flex gap-3 items-start",
                        children: [c.jsx("div", {
                            className: "flex-shrink-0 rounded-lg flex items-center justify-center",
                            style: {
                                background: "#F5F5F5",
                                width: 90,
                                height: 72,
                                border: "1px solid #EEEEEE"
                            },
                            children: c.jsx("img", {
                                src: YS[d],
                                alt: "Kit Completo",
                                className: "w-[80px] h-[65px] min-[480px]:w-[90px] min-[480px]:h-[72px] object-contain transition-opacity duration-[250ms]"
                            })
                        }), c.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [c.jsx("p", {
                                className: "text-[15px] font-bold",
                                style: {
                                    color: "#0D0D0D"
                                },
                                children: "Kit Interno + Porta-Malas"
                            }), c.jsx("p", {
                                className: "text-[12px]",
                                style: {
                                    color: "#2EAA3F"
                                },
                                children: "Proteção completa"
                            }), c.jsx("span", {
                                className: "text-[12px] line-through",
                                style: {
                                    color: "#AAAAAA"
                                },
                                children: "R$ 245,93"
                            }), c.jsx("div", {
                                className: "font-display font-[800] text-[20px] min-[480px]:text-[22px] leading-tight",
                                style: {
                                    color: "#0D0D0D"
                                },
                                children: "R$ 147,56"
                            }), c.jsx("span", {
                                className: "inline-block text-[11px] font-bold px-2 py-[2px] rounded my-1",
                                style: {
                                    background: "#EAF7EC",
                                    color: "#2EAA3F"
                                },
                                children: "Economize R$ 98,37"
                            }), c.jsx("p", {
                                className: "text-[12px]",
                                style: {
                                    color: "#2EAA3F"
                                },
                                children: "♥ No PIX: R$ 140,18"
                            })]
                        })]
                    }), c.jsxs("ul", {
                        className: "mt-3 space-y-0",
                        children: [c.jsx(wr, {
                            t: "3 tapetes internos sob medida"
                        }), c.jsx(wr, {
                            t: "Traseiro inteiriço c/ proteção central"
                        }), c.jsx(wr, {
                            t: "Tapete porta-malas sob medida"
                        })]
                    })]
                }), c.jsxs("div", {
                    onClick: () => n("interno"),
                    className: "rounded-[12px] cursor-pointer mb-3",
                    style: {
                        background: "#FFFFFF",
                        border: t === "interno" ? "2px solid #2EAA3F" : "2px solid #E0E0E0",
                        boxShadow: t === "interno" ? "0 0 0 4px rgba(46,170,63,0.10)" : "none",
                        padding: "14px",
                        transition: "border 0.2s ease, box-shadow 0.2s ease"
                    },
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [c.jsx("span", {
                            className: "font-display uppercase text-[10px] font-bold px-2 py-[3px] rounded",
                            style: {
                                background: "#FF6B00",
                                color: "#FFFFFF"
                            },
                            children: "-40%"
                        }), c.jsx("span", {
                            className: "font-display uppercase text-[10px] font-bold px-2 py-[3px] rounded",
                            style: {
                                background: "#FFF3E0",
                                color: "#FF6B00",
                                border: "1px solid #FF6B00"
                            },
                            children: "MELHOR PREÇO"
                        }), c.jsx("div", {
                            className: "ml-auto w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0",
                            style: {
                                background: t === "interno" ? "#2EAA3F" : "#FFFFFF",
                                border: t === "interno" ? "none" : "2px solid #CCCCCC"
                            },
                            children: t === "interno" && c.jsx(Pr, {
                                className: "w-3 h-3 text-white"
                            })
                        })]
                    }), c.jsxs("div", {
                        className: "flex gap-3 items-start",
                        children: [c.jsx("div", {
                            className: "flex-shrink-0 rounded-lg flex items-center justify-center",
                            style: {
                                background: "#F5F5F5",
                                width: 90,
                                height: 72,
                                border: "1px solid #EEEEEE"
                            },
                            children: c.jsx("img", {
                                src: KS[d],
                                alt: "Kit Interno",
                                className: "w-[80px] h-[65px] min-[480px]:w-[90px] min-[480px]:h-[72px] object-contain transition-opacity duration-[250ms]"
                            })
                        }), c.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [c.jsx("p", {
                                className: "text-[15px] font-bold",
                                style: {
                                    color: "#0D0D0D"
                                },
                                children: "Kit Tapetes Interno"
                            }), c.jsx("p", {
                                className: "text-[12px]",
                                style: {
                                    color: "#888888"
                                },
                                children: "Sem porta-malas"
                            }), c.jsx("span", {
                                className: "text-[12px] line-through",
                                style: {
                                    color: "#AAAAAA"
                                },
                                children: "R$ 160,52"
                            }), c.jsx("div", {
                                className: "font-display font-[800] text-[20px] min-[480px]:text-[22px] leading-tight",
                                style: {
                                    color: "#0D0D0D"
                                },
                                children: "R$ 96,31"
                            }), c.jsx("span", {
                                className: "inline-block text-[11px] font-bold px-2 py-[2px] rounded my-1",
                                style: {
                                    background: "#EAF7EC",
                                    color: "#2EAA3F"
                                },
                                children: "Economize R$ 64,21"
                            }), c.jsx("p", {
                                className: "text-[12px]",
                                style: {
                                    color: "#2EAA3F"
                                },
                                children: "♥ No PIX: R$ 91,49"
                            })]
                        })]
                    }), c.jsxs("ul", {
                        className: "mt-3 space-y-0",
                        children: [c.jsx(wr, {
                            t: "3 tapetes internos sob medida"
                        }), c.jsx(wr, {
                            t: "Traseiro inteiriço c/ proteção central"
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "rounded-[10px] text-center",
                    style: {
                        background: "#EAF7EC",
                        border: "1px solid #C3E6C8",
                        padding: "12px 16px",
                        margin: "12px 0"
                    },
                    children: [c.jsx("p", {
                        className: "text-[14px] font-bold",
                        style: {
                            color: "#2EAA3F"
                        },
                        children: "♥ 5% de desconto no PIX"
                    }), c.jsx("p", {
                        className: "text-[12px]",
                        style: {
                            color: "#666666"
                        },
                        children: "ou parcele em até 12x no cartão"
                    })]
                }), c.jsxs("div", {
                    className: "rounded-[10px] mt-3",
                    style: {
                        background: "#FFFFFF",
                        border: "1px solid #E0E0E0",
                        padding: 14
                    },
                    children: [c.jsx("p", {
                        className: "font-display uppercase text-[13px] font-bold mb-[10px]",
                        style: {
                            color: "#0D0D0D"
                        },
                        children: "ESCOLHA A COR"
                    }), c.jsx("div", {
                        className: "flex gap-3",
                        children: qS.map(E => {
                            const P = d === E.name;
                            return c.jsxs("button", {
                                onClick: () => m(E.name),
                                className: "flex flex-col items-center gap-1.5 transition-all duration-200",
                                children: [c.jsx("div", {
                                    className: "w-[42px] h-[42px] rounded-full transition-all duration-200",
                                    style: {
                                        backgroundColor: E.hex,
                                        border: P ? "2px solid #2EAA3F" : "2px solid #E0E0E0",
                                        boxShadow: P ? "0 0 0 3px rgba(46,170,63,0.20)" : "none"
                                    }
                                }), c.jsx("span", {
                                    className: "text-[12px]",
                                    style: {
                                        color: P ? "#0D0D0D" : "#888888",
                                        fontWeight: P ? 600 : 400
                                    },
                                    children: E.name
                                })]
                            }, E.name)
                        }
                        )
                    })]
                }), y ? c.jsxs("button", {
                    onClick: () => e(t, {
                        brand: r,
                        model: l,
                        year: Number(a),
                        color: d
                    }),
                    className: "w-full mt-4 flex flex-col items-center text-white font-bold uppercase rounded-[14px] transition-all animate-pulse-green",
                    style: {
                        backgroundColor: "#2EAA3F",
                        padding: "18px 24px",
                        fontSize: 17,
                        boxShadow: "0 6px 24px rgba(46,170,63,0.45)"
                    },
                    onMouseEnter: E => E.currentTarget.style.backgroundColor = "#1E8A2E",
                    onMouseLeave: E => E.currentTarget.style.backgroundColor = "#2EAA3F",
                    children: [c.jsx("span", {
                        children: "CONFIRMAR MINHA ENCOMENDA"
                    }), c.jsx("span", {
                        className: "text-[12px] font-normal normal-case opacity-90 mt-0.5",
                        children: "leva menos de 60 segundos"
                    })]
                }) : c.jsx("button", {
                    disabled: !0,
                    className: "w-full mt-4 bg-primary text-primary-foreground font-bold text-lg uppercase py-4 rounded-xl opacity-60",
                    style: {
                        boxShadow: "0 4px 16px rgba(46,170,63,0.3)"
                    },
                    children: "Selecione seu veículo acima"
                })]
            })]
        })
    })
}
  , eC = "/assets/tp3-textura-7Piw0fvh.webp"
  , tC = "/assets/tp4-fixacao-BUULKmgM.webp"
  , nC = "/assets/tp5-impermeavel-DDZCocOH.webp"
  , iC = "/assets/tp6-instalado-B_3EoPkF.webp"
  , rC = "/assets/tp7-borda-elevada-DUkQfJFg.webp"
  , oC = [{
    emoji: "💧",
    title: "100% Impermeável — Proteja Seu Assoalho",
    text: "Borracha TPE forma barreira completa. Borda elevada 3cm retém tudo dentro do tapete.",
    bullets: ["Líquidos contidos pela borda", "Superfície antiderrapante", "Limpeza em segundos"],
    img: nC,
    imgAlt: "Tapete impermeável",
    reverse: !1
}, {
    emoji: "📐",
    title: "Desenvolvido 100% Sob Medida Para Seu Veículo",
    text: "Modelado para o assoalho exato do seu carro. Encaixe milimétrico sem folgas.",
    bullets: ["Cobertura total do assoalho", "Sem corte ou ajuste", "+500 modelos disponíveis"],
    img: iC,
    imgAlt: "Tapete sob medida instalado",
    reverse: !0
}, {
    emoji: "🔧",
    title: "Ilhós de Fixação Original de Fábrica",
    text: "Encaixa nos pinos originais do seu veículo. Tapete fixo durante toda a direção.",
    bullets: ["Não desloca em frenagens", "Encaixe nos pinos originais", "Maior segurança"],
    img: tC,
    imgAlt: "Ilhós de fixação",
    reverse: !1
}, {
    emoji: "🛡️",
    title: "Altíssima Durabilidade e Resistência",
    text: "TPE injetada de alta qualidade. Não amassa, não racha, não descolore.",
    bullets: ["Resistente a UV", "Suporta uso diário intenso", "Borda mantém forma"],
    img: rC,
    imgAlt: "Borda elevada durabilidade",
    reverse: !0
}]
  , lC = () => c.jsx("section", {
    id: "beneficios",
    className: "py-12 md:py-16 bg-secondary scroll-reveal",
    children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [c.jsx("h2", {
            className: "text-[26px] md:text-4xl font-display text-foreground text-center mb-12",
            children: "Por Que o Tapete TapeDrive é Diferente?"
        }), c.jsx("div", {
            className: "max-w-5xl mx-auto space-y-12",
            children: oC.map( (e, t) => c.jsxs("div", {
                className: `grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-reveal ${e.reverse ? "md:[direction:rtl]" : ""}`,
                style: {
                    animationDelay: `${t * .1}s`
                },
                children: [c.jsxs("div", {
                    className: e.reverse ? "md:[direction:ltr]" : "",
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [c.jsx("span", {
                            className: "text-2xl",
                            children: e.emoji
                        }), c.jsx("h3", {
                            className: "font-display text-lg md:text-xl text-foreground",
                            children: e.title
                        })]
                    }), c.jsx("p", {
                        className: "text-sm text-muted-foreground font-body leading-relaxed mb-3",
                        children: e.text
                    }), c.jsx("ul", {
                        className: "space-y-1.5",
                        children: e.bullets.map( (n, i) => c.jsxs("li", {
                            className: "flex items-center gap-2 text-sm font-body text-foreground",
                            children: [c.jsx("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                            }), n]
                        }, i))
                    })]
                }), c.jsx("div", {
                    className: e.reverse ? "md:[direction:ltr]" : "",
                    children: c.jsx("img", {
                        src: e.img,
                        alt: e.imgAlt,
                        className: "w-full h-56 md:h-64 object-cover rounded-2xl"
                    })
                })]
            }, t))
        }), c.jsxs("div", {
            className: "relative mt-14 rounded-2xl overflow-hidden max-w-5xl mx-auto scroll-reveal h-[200px]",
            children: [c.jsx("img", {
                src: eC,
                alt: "Tecnologia 3D",
                className: "w-full h-full object-cover"
            }), c.jsx("div", {
                className: "absolute inset-0 bg-foreground/60 flex items-center justify-center px-4",
                children: c.jsx("p", {
                    className: "text-primary-foreground text-center text-[22px] md:text-[32px] font-display leading-tight max-w-2xl",
                    children: "Tecnologia 3D de Precisão — Cada Milímetro Projetado Para o Seu Carro"
                })
            })]
        })]
    })
})
  , sC = "/assets/antes_frente-CbO11XHe.png"
  , aC = "/assets/antes_tras-SWL4I653.png"
  , cC = "/assets/depois_frente-D_LM94mJ.png"
  , uC = "/assets/depois_tras-BjnVRCyu.png"
  , xf = ({beforeImg: e, afterImg: t, beforeAlt: n, afterAlt: i}) => {
    var f;
    const r = x.useRef(null)
      , [o,l] = x.useState(50)
      , s = x.useRef(!1)
      , a = x.useCallback(w => {
        const v = r.current;
        if (!v)
            return;
        const S = v.getBoundingClientRect();
        let g = (w - S.left) / S.width * 100;
        g = Math.min(Math.max(g, 2), 98),
        l(g)
    }
    , []);
    x.useEffect( () => {
        const w = () => {
            s.current = !1
        }
        ;
        return window.addEventListener("mouseup", w),
        window.addEventListener("touchend", w),
        () => {
            window.removeEventListener("mouseup", w),
            window.removeEventListener("touchend", w)
        }
    }
    , []);
    const u = () => {
        s.current = !0
    }
      , d = w => {
        s.current && a(w.clientX)
    }
      , m = () => {
        s.current = !0
    }
      , h = w => {
        s.current && a(w.touches[0].clientX)
    }
    ;
    return c.jsxs("div", {
        ref: r,
        className: "relative overflow-hidden rounded-2xl cursor-ew-resize h-[260px] md:h-[380px] select-none",
        style: {
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
        },
        onMouseMove: d,
        onTouchMove: h,
        children: [c.jsx("img", {
            src: e,
            alt: n,
            className: "absolute inset-0 w-full h-full object-cover",
            draggable: !1,
            loading: "eager",
            decoding: "async"
        }), c.jsx("div", {
            className: "absolute top-0 left-0 h-full overflow-hidden",
            style: {
                width: `${o}%`
            },
            children: c.jsx("img", {
                src: t,
                alt: i,
                className: "absolute inset-0 w-full h-full object-cover",
                style: {
                    minWidth: ((f = r.current) == null ? void 0 : f.offsetWidth) || "100%"
                },
                draggable: !1,
                loading: "eager",
                decoding: "async"
            })
        }), c.jsx("div", {
            className: "absolute top-0 h-full cursor-ew-resize z-10",
            style: {
                left: `${o}%`,
                transform: "translateX(-50%)",
                width: "3px",
                background: "#FFFFFF"
            },
            onMouseDown: u,
            onTouchStart: m,
            children: c.jsxs("div", {
                className: "absolute top-1/2 left-1/2 flex items-center justify-center rounded-full bg-white w-[34px] h-[34px] md:w-[40px] md:h-[40px]",
                style: {
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                },
                children: [c.jsx(_0, {
                    className: "w-3.5 h-3.5 text-primary -mr-0.5"
                }), c.jsx(I0, {
                    className: "w-3.5 h-3.5 text-primary -ml-0.5"
                })]
            })
        }), c.jsx("span", {
            className: "absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded z-10",
            style: {
                background: "hsl(var(--primary))"
            },
            children: "DEPOIS"
        }), c.jsx("span", {
            className: "absolute top-3 right-3 text-xs font-bold text-white px-2.5 py-1 rounded z-10",
            style: {
                background: "rgba(0,0,0,0.5)"
            },
            children: "ANTES"
        })]
    })
}
  , dC = () => c.jsx("section", {
    id: "antes-depois",
    className: "scroll-reveal",
    style: {
        background: "#F5F5F5",
        padding: "60px 20px"
    },
    children: c.jsxs("div", {
        className: "mx-auto",
        style: {
            maxWidth: 1100
        },
        children: [c.jsx("h2", {
            className: "font-display text-foreground text-center uppercase mb-2 text-[28px] md:text-[36px]",
            style: {
                fontWeight: 800
            },
            children: "Veja a Diferença na Prática"
        }), c.jsx("p", {
            className: "text-center font-body text-[15px] mb-10",
            style: {
                color: "#666666"
            },
            children: "Deslize para comparar antes e depois da instalação"
        }), c.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [c.jsx(xf, {
                beforeImg: sC,
                afterImg: cC,
                beforeAlt: "Assoalho dianteiro antes da instalação",
                afterAlt: "Tapete TapeDrive instalado na frente"
            }), c.jsx(xf, {
                beforeImg: aC,
                afterImg: uC,
                beforeAlt: "Assoalho traseiro antes da instalação",
                afterAlt: "Tapete TapeDrive instalado atrás"
            })]
        })]
    })
})
  , fC = [["Material", "Borracha TPE de Alta Densidade"], ["Espessura", "6mm"], ["Bordas", "Elevadas até 3cm"], ["Fixação", "Ilhós originais de fábrica"], ["Cobertura", "Assoalho completo sob medida"], ["Limpeza", "Lavável com água e sabão"], ["Garantia", "12 meses"], ["Cor", "Preto"], ["Aplicação", "+500 modelos de veículos"]]
  , mC = () => c.jsx("section", {
    className: "py-12 md:py-16 bg-background scroll-reveal",
    children: c.jsxs("div", {
        className: "container mx-auto px-4 max-w-3xl",
        children: [c.jsx("h2", {
            className: "text-[26px] md:text-4xl font-display text-foreground text-center mb-8",
            children: "Especificações Técnicas"
        }), c.jsx("div", {
            className: "rounded-2xl overflow-hidden border border-border",
            children: fC.map( ([e,t], n) => c.jsxs("div", {
                className: `flex justify-between items-center px-5 py-3.5 text-sm font-body ${n % 2 === 0 ? "bg-card" : "bg-secondary"}`,
                children: [c.jsx("span", {
                    className: "font-semibold text-foreground",
                    children: e
                }), c.jsx("span", {
                    className: "text-muted-foreground text-right",
                    children: t
                })]
            }, n))
        })]
    })
})
  , pC = [{
    icon: ux,
    title: "Frete Grátis",
    sub: "Para todo o Brasil"
}, {
    icon: z0,
    title: "Pagamento Seguro",
    sub: "SSL 256-bit"
}, {
    icon: U0,
    title: "7 Dias para Devolver",
    sub: "Sem burocracia"
}, {
    icon: H0,
    title: "+15.000 Clientes",
    sub: "Avaliação 4.9/5"
}, {
    icon: V0,
    title: "Garantia 12 Meses",
    sub: "Contra defeitos de fabricação"
}]
  , hC = () => c.jsx("section", {
    className: "py-8 bg-background scroll-reveal",
    children: c.jsx("div", {
        className: "container mx-auto px-4",
        children: c.jsx("div", {
            className: "flex gap-4 overflow-x-auto pb-2 md:justify-center",
            children: pC.map( (e, t) => c.jsxs("div", {
                className: "flex-shrink-0 flex flex-col items-center bg-secondary rounded-[14px] px-5 py-4 min-w-[150px] text-center",
                children: [c.jsx(e.icon, {
                    className: "w-10 h-10 text-primary mb-2"
                }), c.jsx("span", {
                    className: "text-sm font-subtitle font-bold text-foreground",
                    children: e.title
                }), c.jsx("span", {
                    className: "text-xs text-muted-foreground font-body",
                    children: e.sub
                })]
            }, t))
        })
    })
})
  , gC = [{
    video: "/videos/video-homem-1.mp4",
    photo: "/videos/homem-1.jpg",
    name: "Lucas Almeida",
    city: "São Paulo, SP",
    caption: "Encaixou perfeitamente, não sai do lugar de jeito nenhum. Melhor investimento que fiz pro meu carro!"
}, {
    video: "/videos/video-mulher-1.mp4",
    photo: "/videos/mulher-1.jpg",
    name: "Mariana Costa",
    city: "Belo Horizonte, MG",
    caption: "Fácil de tirar e limpar. Meu carro ficou muito mais protegido com esses tapetes!"
}, {
    video: "/videos/video-homem-2.mp4",
    photo: "/videos/homem-2.jpg",
    name: "Rafael Nogueira",
    city: "Recife, PE",
    caption: "Qualidade muito acima do que eu esperava pelo preço. Vale cada centavo!"
}, {
    video: "/videos/video-mulher-2.mp4",
    photo: "/videos/mulher-2.webp",
    name: "Ana Paula Ribeiro",
    city: "Curitiba, PR",
    caption: "Chegou rápido e bem embalado. Recomendo de olhos fechados!"
}, {
    video: "/videos/video-homem-3.mp4",
    photo: "/videos/homem-3.jpg",
    name: "Bruno Martins",
    city: "Rio de Janeiro, RJ",
    caption: "Borda alta não deixa nada passar pro assoalho. Produto de altíssima qualidade!"
}, {
    video: "/videos/video-mulher-3.mp4",
    photo: "/videos/mulher-3.png",
    name: "Camila Ferreira",
    city: "Brasília, DF",
    caption: "Comprei pra mim e já indiquei pra toda a família. Todo mundo amou!"
}]
  , vC = [{
    initials: "MS",
    name: "Marcos Silva",
    city: "São Paulo, SP",
    car: "VW Virtus 2022",
    text: "Encaixou perfeitinho! A borda segurou até o café que derrubei na correria. Muito melhor que tapete universal."
}, {
    initials: "AF",
    name: "Ana Ferreira",
    city: "Belo Horizonte, MG",
    car: "Fiat Pulse 2023",
    text: "Tenho dois filhos e meu carro vivia imundo. Agora limpo em 2 minutos. Instalou super fácil!"
}, {
    initials: "RO",
    name: "Ricardo Oliveira",
    city: "Curitiba, PR",
    car: "Toyota Hilux 2021",
    text: "Uso em obra, entra muita lama. Já lavei 30 vezes e tá igual. Nunca vi tapete tão resistente."
}, {
    initials: "CL",
    name: "Camila Lima",
    city: "Rio de Janeiro, RJ",
    car: "Hyundai Creta 2023",
    text: "Chegou rápido, embalado perfeitamente. Encaixe na primeira tentativa. Indiquei para 3 amigas!"
}, {
    initials: "FG",
    name: "Fernando Gomes",
    city: "Fortaleza, CE",
    car: "Chevrolet Tracker 2022",
    text: "Aqui chove muito e sempre entrava lama. Desde o TapeDrive acabou o problema. Entrega rápida!"
}, {
    initials: "JB",
    name: "Juliana Bastos",
    city: "Porto Alegre, RS",
    car: "Jeep Compass 2023",
    text: "Tenho cachorro e o carro ficava cheio de pelo. Agora é só tirar e lavar. Parece peça original!"
}]
  , Qs = ({size: e=4}) => c.jsx("div", {
    className: "flex gap-0.5",
    children: [...Array(5)].map( (t, n) => c.jsx(H0, {
        className: `w-${e} h-${e} fill-amber-400 text-amber-400`
    }, n))
})
  , yC = () => {
    const [e,t] = x.useState(!1);
    return c.jsx("section", {
        id: "avaliacoes",
        className: "scroll-reveal",
        style: {
            background: "#F5F5F5",
            padding: "60px 20px"
        },
        children: c.jsxs("div", {
            className: "mx-auto",
            style: {
                maxWidth: 1100
            },
            children: [c.jsxs("div", {
                className: "text-center",
                style: {
                    marginBottom: 40
                },
                children: [c.jsxs("h2", {
                    className: "font-display uppercase",
                    style: {
                        fontSize: 36,
                        color: "#0D0D0D"
                    },
                    children: [c.jsx("span", {
                        className: "hidden md:block",
                        children: "O Que Nossos Clientes Dizem"
                    }), c.jsx("span", {
                        className: "block md:hidden",
                        style: {
                            fontSize: 28
                        },
                        children: "O Que Nossos Clientes Dizem"
                    })]
                }), c.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mt-3",
                    children: [c.jsx(Qs, {}), c.jsx("span", {
                        className: "font-body",
                        style: {
                            fontSize: 16,
                            color: "#666666"
                        },
                        children: "4.9/5 — 847 avaliações verificadas"
                    })]
                })]
            }), c.jsx("p", {
                className: "font-body",
                style: {
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0D0D0D",
                    marginBottom: 20
                },
                children: "Avaliações em Vídeo"
            }), c.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: gC.map( (n, i) => c.jsxs("div", {
                    className: "cursor-pointer overflow-hidden",
                    style: {
                        background: "#FFFFFF",
                        borderRadius: 16,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
                    },
                    children: [c.jsx("video", {
                        controls: !0,
                        preload: "metadata",
                        className: "w-full object-cover",
                        style: {
                            height: 200,
                            borderRadius: "16px 16px 0 0"
                        },
                        children: c.jsx("source", {
                            src: n.video,
                            type: "video/mp4"
                        })
                    }), c.jsxs("div", {
                        className: "flex items-center gap-2.5",
                        style: {
                            padding: "14px 16px"
                        },
                        children: [c.jsx("img", {
                            src: n.photo,
                            alt: n.name,
                            className: "rounded-full object-cover flex-shrink-0",
                            style: {
                                width: 44,
                                height: 44,
                                border: "2px solid #2EAA3F"
                            }
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "font-body font-bold",
                                style: {
                                    fontSize: 14,
                                    color: "#0D0D0D"
                                },
                                children: n.name
                            }), c.jsx("p", {
                                className: "font-body",
                                style: {
                                    fontSize: 12,
                                    color: "#888888"
                                },
                                children: n.city
                            }), c.jsx("div", {
                                className: "mt-0.5",
                                children: c.jsx(Qs, {
                                    size: 3
                                })
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "font-body italic",
                        style: {
                            padding: "0 16px 14px",
                            fontSize: 13,
                            color: "#444444",
                            borderTop: "1px solid #F0F0F0",
                            paddingTop: 10
                        },
                        children: ['"', n.caption, '"']
                    })]
                }, i))
            }), c.jsx("button", {
                onClick: () => t(!e),
                className: "font-body block mx-auto transition-colors duration-200",
                style: {
                    marginTop: 32,
                    background: "#FFFFFF",
                    border: "1px solid #2EAA3F",
                    color: "#2EAA3F",
                    borderRadius: 8,
                    padding: "10px 24px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer"
                },
                children: e ? "Ocultar avaliações ▲" : "Ver mais avaliações ▼"
            }), c.jsx("div", {
                className: "overflow-hidden transition-all duration-[400ms] ease-in-out",
                style: {
                    maxHeight: e ? 2e3 : 0
                },
                children: c.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                    style: {
                        paddingTop: 32
                    },
                    children: vC.map( (n, i) => c.jsxs("div", {
                        className: "rounded-2xl p-6 relative",
                        style: {
                            background: "#FFFFFF",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                            borderLeft: "4px solid #2EAA3F"
                        },
                        children: [c.jsx("span", {
                            className: "text-4xl absolute top-3 right-5 font-display",
                            style: {
                                color: "#E0E0E0"
                            },
                            children: '"'
                        }), c.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [c.jsx("div", {
                                className: "w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-badge text-base",
                                children: n.initials
                            }), c.jsxs("div", {
                                children: [c.jsx("p", {
                                    className: "font-body font-bold",
                                    style: {
                                        fontSize: 14,
                                        color: "#0D0D0D"
                                    },
                                    children: n.name
                                }), c.jsx("p", {
                                    className: "font-body",
                                    style: {
                                        fontSize: 12,
                                        color: "#888888"
                                    },
                                    children: n.city
                                }), c.jsx("p", {
                                    className: "font-body",
                                    style: {
                                        fontSize: 12,
                                        color: "#888888"
                                    },
                                    children: n.car
                                })]
                            })]
                        }), c.jsx(Qs, {}), c.jsxs("p", {
                            className: "font-body leading-relaxed mt-3",
                            style: {
                                fontSize: 14,
                                color: "#0D0D0D"
                            },
                            children: ['"', n.text, '"']
                        }), c.jsx("span", {
                            className: "inline-block mt-3 font-body font-semibold",
                            style: {
                                fontSize: 12,
                                color: "#2EAA3F"
                            },
                            children: "✅ Compra Verificada"
                        })]
                    }, i))
                })
            })]
        })
    })
}
  , xC = [{
    q: "O tapete serve para o meu carro?",
    a: "Sim! Temos tapetes desenvolvidos sob medida para mais de 500 modelos de veículos. Ao selecionar a marca, modelo e ano do seu carro no seletor acima, você garante o tapete perfeito para o assoalho do seu veículo."
}, {
    q: "Como é feita a fixação do tapete?",
    a: "Nossos tapetes possuem ilhós de fixação original de fábrica, que encaixam nos pinos que já existem no assoalho do seu carro. Isso garante que o tapete não deslize durante a direção, trazendo muito mais segurança para você e sua família."
}, {
    q: "O tapete é realmente 100% impermeável?",
    a: "Sim! O material borracha TPE de alta densidade forma uma barreira completa contra água, lama, líquidos e detritos. A borda elevada de até 3cm contém tudo dentro do tapete, protegendo o carpete original do veículo."
}, {
    q: "Quanto tempo leva para chegar?",
    a: "Trabalhamos com frete expresso para todo o Brasil. O prazo médio de entrega é de 5 a 10 dias úteis após a confirmação do pagamento. Você receberá o código de rastreio por e-mail assim que o pedido for despachado."
}, {
    q: "E se o tapete não servir no meu carro?",
    a: "Você tem 7 dias corridos a partir do recebimento para solicitar a troca ou devolução sem qualquer custo. Basta entrar em contato com nosso suporte via WhatsApp e cuidamos de tudo para você."
}, {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos cartão de crédito em até 12x sem juros, PIX (com desconto especial), boleto bancário e transferência. Todas as transações são 100% seguras com criptografia SSL."
}, {
    q: "O tapete danifica o carpete original?",
    a: "Não! O tapete TapeDrive é projetado para PROTEGER o carpete original do seu veículo. Ele não cola, não risca e não danifica nada. Você pode removê-lo a qualquer momento sem deixar marcas."
}]
  , wC = () => {
    const [e,t] = x.useState(null);
    return c.jsx("section", {
        id: "faq",
        className: "py-12 md:py-16 bg-secondary scroll-reveal",
        children: c.jsxs("div", {
            className: "container mx-auto px-4 max-w-3xl",
            children: [c.jsx("h2", {
                className: "text-[26px] md:text-4xl font-display text-foreground text-center mb-8",
                children: "Perguntas Frequentes"
            }), c.jsx("div", {
                className: "space-y-3",
                children: xC.map( (n, i) => c.jsxs("div", {
                    className: "bg-card rounded-xl overflow-hidden",
                    children: [c.jsxs("button", {
                        onClick: () => t(e === i ? null : i),
                        className: "w-full flex items-center justify-between p-5 text-left",
                        children: [c.jsx("span", {
                            className: "text-sm md:text-base font-subtitle font-bold text-foreground pr-4",
                            children: n.q
                        }), e === i ? c.jsx(sx, {
                            className: "w-5 h-5 text-primary flex-shrink-0"
                        }) : c.jsx(ax, {
                            className: "w-5 h-5 text-primary flex-shrink-0"
                        })]
                    }), c.jsx("div", {
                        className: "overflow-hidden transition-all duration-300",
                        style: {
                            maxHeight: e === i ? "300px" : "0"
                        },
                        children: c.jsx("p", {
                            className: "px-5 pb-5 text-sm text-muted-foreground font-body leading-relaxed",
                            children: n.a
                        })
                    })]
                }, i))
            })]
        })
    })
}
  , SC = () => c.jsx("section", {
    id: "garantia",
    className: "py-12 md:py-16 bg-background scroll-reveal",
    children: c.jsx("div", {
        className: "container mx-auto px-4",
        children: c.jsxs("div", {
            className: "max-w-[800px] mx-auto gradient-guarantee border-2 border-primary rounded-3xl p-8 md:p-12",
            children: [c.jsxs("div", {
                className: "flex flex-col md:flex-row items-center gap-6",
                children: [c.jsx("div", {
                    className: "flex-shrink-0",
                    children: c.jsx("div", {
                        className: "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center",
                        children: c.jsx(cx, {
                            className: "w-10 h-10 text-primary"
                        })
                    })
                }), c.jsxs("div", {
                    className: "text-center md:text-left",
                    children: [c.jsx("h2", {
                        className: "text-2xl md:text-3xl font-display text-foreground",
                        children: "Garantia Total de 12 Meses"
                    }), c.jsx("p", {
                        className: "text-primary font-subtitle font-bold text-base mt-1",
                        children: "Sua satisfação ou seu dinheiro de volta"
                    }), c.jsx("p", {
                        className: "text-sm text-muted-foreground font-body mt-3 leading-relaxed",
                        children: "Acreditamos tanto na qualidade dos nossos tapetes que oferecemos 12 meses de garantia contra qualquer defeito de fabricação. Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu dinheiro sem perguntas."
                    })]
                })]
            }), c.jsx("div", {
                className: "flex flex-wrap justify-center gap-3 mt-8",
                children: [{
                    icon: z0,
                    text: "Compra Protegida"
                }, {
                    icon: U0,
                    text: "7 dias Devolução"
                }, {
                    icon: V0,
                    text: "12 meses Garantia"
                }].map( (e, t) => c.jsxs("div", {
                    className: "flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-card text-sm font-subtitle font-semibold text-foreground",
                    children: [c.jsx(e.icon, {
                        className: "w-4 h-4 text-primary"
                    }), e.text]
                }, t))
            })]
        })
    })
})
  , Fh = "/assets/faixada.png"
  , CC = [{
    number: "15.000+",
    label: "Clientes atendidos"
}, {
    number: "12 meses",
    label: "Garantia real"
}, {
    number: "48h",
    label: "Prazo de envio"
}, {
    number: "4.9★",
    label: "Avaliação média"
}]
  , EC = () => c.jsxs("section", {
    id: "credibilidade",
    className: "scroll-reveal",
    style: {
        background: "#0D0D0D",
        padding: "48px 20px"
    },
    children: [c.jsxs("div", {
        style: {
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center"
        },
        className: "cred-grid",
        children: [c.jsxs("div", {
            children: [c.jsx("span", {
                style: {
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    fontSize: 12,
                    color: "#2EAA3F",
                    letterSpacing: 1.5
                },
                children: "POR QUE CONFIAR NA TAPEDRIVE?"
            }), c.jsx("h2", {
                style: {
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    fontSize: 28,
                    color: "#FFFFFF",
                    marginTop: 10,
                    lineHeight: 1.2
                },
                className: "cred-title",
                children: "Empresa com estrutura real e compromisso com cada cliente"
            }), c.jsx("p", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#CCCCCC",
                    lineHeight: 1.7,
                    marginTop: 16
                },
                children: "Não somos uma loja de fundo de quintal. Temos loja física, equipe dedicada e um processo de qualidade que garante o tapete certo para o seu carro."
            }), c.jsx("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 24,
                    marginTop: 28
                },
                children: CC.map(e => c.jsxs("div", {
                    children: [c.jsx("div", {
                        style: {
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 800,
                            fontSize: 32,
                            color: "#2EAA3F"
                        },
                        children: e.number
                    }), c.jsx("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: 13,
                            color: "#AAAAAA"
                        },
                        children: e.label
                    })]
                }, e.label))
            })]
        }), c.jsx("div", {
            children: c.jsx("img", {
                src: Fh,
                alt: "Fachada da loja TapeDrive",
                style: {
                    width: "100%",
                    height: 320,
                    objectFit: "cover",
                    borderRadius: 14,
                    border: "2px solid #2EAA3F",
                    boxShadow: "0 0 30px rgba(46,170,63,0.2)"
                },
                className: "cred-img"
            })
        })]
    }), c.jsx("style", {
        children: `
        @media (max-width: 768px) {
          #credibilidade { padding: 32px 16px !important; }
          .cred-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .cred-img { height: 220px !important; }
          .cred-title { font-size: 22px !important; }
        }
      `
    })]
})
  , Uo = ({value: e, label: t}) => c.jsxs("div", {
    className: "flex flex-col items-center bg-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 min-w-[52px]",
    children: [c.jsx("span", {
        className: "text-2xl md:text-[28px] font-display text-primary-foreground leading-none",
        children: String(e).padStart(2, "0")
    }), c.jsx("span", {
        className: "text-[10px] uppercase text-primary-foreground/70 font-badge tracking-wider mt-0.5",
        children: t
    })]
})
  , bC = ({onBuy: e}) => {
    const {days: t, hours: n, minutes: i, seconds: r} = jh();
    return c.jsx("section", {
        className: "gradient-dark py-14 md:py-20 scroll-reveal",
        children: c.jsxs("div", {
            className: "container mx-auto px-4 text-center max-w-2xl",
            children: [c.jsx("h2", {
                className: "text-2xl md:text-4xl font-display text-primary-foreground mb-2",
                children: "Não Deixe Para Depois — Proteja Seu Carro Agora"
            }), c.jsx("p", {
                className: "text-primary-light font-subtitle font-semibold text-base mb-6",
                children: "Oferta da Semana do Cliente — Válida por tempo limitado"
            }), c.jsxs("div", {
                className: "flex items-center justify-center gap-1.5 mb-6",
                children: [c.jsx(Uo, {
                    value: t,
                    label: "Dias"
                }), c.jsx("span", {
                    className: "text-primary-foreground text-xl font-bold",
                    children: ":"
                }), c.jsx(Uo, {
                    value: n,
                    label: "Horas"
                }), c.jsx("span", {
                    className: "text-primary-foreground text-xl font-bold",
                    children: ":"
                }), c.jsx(Uo, {
                    value: i,
                    label: "Min"
                }), c.jsx("span", {
                    className: "text-primary-foreground text-xl font-bold",
                    children: ":"
                }), c.jsx(Uo, {
                    value: r,
                    label: "Seg"
                })]
            }), c.jsx("p", {
                className: "text-urgent font-badge text-sm mb-8",
                children: "⚠️ Apenas 47 unidades em estoque para o modelo selecionado"
            }), c.jsx("button", {
                onClick: e,
                className: "w-full md:w-auto bg-primary text-primary-foreground font-badge text-lg md:text-xl px-12 py-5 rounded-2xl hover:bg-primary-dark transition-all shadow-green-lg animate-pulse-green",
                children: "GARANTIR MEU TAPETE COM DESCONTO →"
            }), c.jsx("p", {
                className: "text-primary-foreground/60 text-xs font-body mt-4",
                children: "🔒 Pagamento 100% Seguro | 🚚 Frete Grátis | ↩️ 7 dias para devolver"
            })]
        })
    })
}
  , wf = ["🛒 Carlos M. de SP comprou Kit Completo — Onix Plus", "🛒 Ana L. de BH comprou Kit Completo — Fiat Pulse", "🛒 Ricardo S. de Curitiba comprou Kit Completo — Hilux", "🛒 Fernanda R. do Rio comprou Kit Completo — Compass", "🛒 Pedro A. de Fortaleza comprou Kit Dianteiro — Creta", "🛒 Marina C. de POA comprou Kit Completo — Polo", "🛒 Lucas B. de Brasília comprou Kit Completo — Corolla", "🛒 Juliana T. de Recife comprou Kit Completo — Argo", "🛒 Rafael M. de Goiânia comprou Kit Completo — Tracker", "🛒 Patricia S. de Manaus comprou Kit Dianteiro — Kwid"]
  , PC = () => c.jsx("svg", {
    viewBox: "0 0 24 24",
    width: "34",
    height: "34",
    fill: "white",
    children: c.jsx("path", {
        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    })
})
  , TC = () => {
    const [e,t] = x.useState(!1)
      , [n,i] = x.useState(0);
    return x.useEffect( () => {
        const r = () => {
            i(Math.floor(Math.random() * wf.length)),
            t(!0),
            setTimeout( () => t(!1), 5e3)
        }
          , o = setTimeout(r, 1e4)
          , l = setInterval(r, 18e3);
        return () => {
            clearTimeout(o),
            clearInterval(l)
        }
    }
    , []),
    c.jsxs(c.Fragment, {
        children: [c.jsxs("div", {
            className: `fixed bottom-[100px] left-5 z-[9998] bg-card rounded-xl px-4 py-3 border-l-[3px] border-primary shadow-[0_4px_20px_rgba(0,0,0,0.15)] max-w-[290px] transition-all duration-400 ${e ? "animate-slideInLeft opacity-100" : "opacity-0 pointer-events-none -translate-x-full"}`,
            children: [c.jsx("p", {
                className: "text-[13px] text-foreground font-body",
                children: wf[n]
            }), c.jsx("p", {
                className: "text-[10px] text-muted-foreground font-body mt-1",
                children: "Agora mesmo"
            })]
        })]
    })
}
  , NC = () => c.jsxs("section", {
    id: "sobre-nos",
    className: "scroll-reveal",
    style: {
        background: "#F5F5F5",
        padding: "64px 20px"
    },
    children: [c.jsxs("div", {
        style: {
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center"
        },
        className: "about-grid",
        children: [c.jsx("div", {
            children: c.jsx("img", {
                src: Fh,
                alt: "Loja física da TapeDrive",
                style: {
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 14,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
                },
                className: "about-img"
            })
        }), c.jsxs("div", {
            children: [c.jsx("span", {
                style: {
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    fontSize: 12,
                    color: "#2EAA3F",
                    background: "#E8F7EA",
                    borderRadius: 20,
                    padding: "4px 12px",
                    display: "inline-block"
                },
                children: "🏪 NOSSA EMPRESA"
            }), c.jsx("h2", {
                style: {
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    fontSize: 30,
                    color: "#0D0D0D",
                    marginTop: 12,
                    lineHeight: 1.2
                },
                className: "about-title",
                children: "Uma empresa real, com história e compromisso"
            }), c.jsx("p", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#444444",
                    lineHeight: 1.7,
                    marginTop: 16
                },
                children: "A TAPEDRIVE nasceu da paixão por qualidade e proteção automotiva. Com loja física, atendimento humano e milhares de clientes satisfeitos em todo o Brasil, somos muito mais do que uma loja online."
            }), c.jsx("p", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#444444",
                    lineHeight: 1.7,
                    marginTop: 12
                },
                children: "Cada tapete é produzido com rigoroso controle de qualidade, garantindo encaixe perfeito, durabilidade real e proteção que você vê e sente."
            }), c.jsx("div", {
                style: {
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                children: ["Loja física com estoque próprio", "Mais de 15.000 clientes atendidos", "Garantia real de 12 meses"].map(e => c.jsxs("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    children: [c.jsx("span", {
                        style: {
                            color: "#2EAA3F",
                            fontSize: 16
                        },
                        children: "✅"
                    }), c.jsx("span", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: 14,
                            color: "#0D0D0D"
                        },
                        children: e
                    })]
                }, e))
            })]
        })]
    }), c.jsx("style", {
        children: `
        @media (max-width: 768px) {
          #sobre-nos { padding: 40px 16px !important; }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .about-img { height: 240px !important; }
          .about-title { font-size: 22px !important; }
        }
      `
    })]
})
  , kC = () => c.jsx("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    })
})
  , jC = () => c.jsx("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    })
})
  , AC = () => c.jsx("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
    })
})
  , RC = () => c.jsxs("svg", {
    viewBox: "0 0 48 32",
    height: "20",
    fill: "currentColor",
    opacity: "0.6",
    children: [c.jsx("rect", {
        width: "48",
        height: "32",
        rx: "4",
        fill: "#333"
    }), c.jsx("text", {
        x: "24",
        y: "20",
        textAnchor: "middle",
        fill: "#888",
        fontSize: "11",
        fontWeight: "700",
        fontFamily: "sans-serif",
        children: "VISA"
    })]
})
  , FC = () => c.jsxs("svg", {
    viewBox: "0 0 48 32",
    height: "20",
    fill: "currentColor",
    opacity: "0.6",
    children: [c.jsx("rect", {
        width: "48",
        height: "32",
        rx: "4",
        fill: "#333"
    }), c.jsx("circle", {
        cx: "19",
        cy: "16",
        r: "8",
        fill: "#666",
        opacity: "0.7"
    }), c.jsx("circle", {
        cx: "29",
        cy: "16",
        r: "8",
        fill: "#555",
        opacity: "0.7"
    })]
})
  , MC = () => c.jsxs("svg", {
    viewBox: "0 0 48 32",
    height: "20",
    fill: "currentColor",
    opacity: "0.6",
    children: [c.jsx("rect", {
        width: "48",
        height: "32",
        rx: "4",
        fill: "#333"
    }), c.jsx("text", {
        x: "24",
        y: "20",
        textAnchor: "middle",
        fill: "#888",
        fontSize: "10",
        fontWeight: "700",
        fontFamily: "sans-serif",
        children: "PIX"
    })]
})
  , DC = () => c.jsxs("svg", {
    viewBox: "0 0 48 32",
    height: "20",
    fill: "currentColor",
    opacity: "0.6",
    children: [c.jsx("rect", {
        width: "48",
        height: "32",
        rx: "4",
        fill: "#333"
    }), c.jsx("text", {
        x: "24",
        y: "20",
        textAnchor: "middle",
        fill: "#888",
        fontSize: "9",
        fontWeight: "700",
        fontFamily: "sans-serif",
        children: "BOLETO"
    })]
})
  , LC = [{
    Icon: kC,
    label: "Instagram"
}, {
    Icon: jC,
    label: "Facebook"
}, {
    Icon: AC,
    label: "YouTube"
}]
  , OC = [{
    label: "Sobre Nós",
    href: "/sobre-nos"
}, {
    label: "Política de Privacidade",
    href: "/politica-de-privacidade"
}, {
    label: "Termos de Uso",
    href: "/termos-de-uso"
}, {
    label: "Trocas e Devoluções",
    href: "/trocas-e-devolucoes"
}]
  , _C = [{
    label: "Central de Ajuda",
    href: "#"
}, {
    label: "Rastreie seu Pedido",
    href: "#"
}, {
    label: "Formas de Pagamento",
    href: "#"
}, {
    label: "Frete e Prazo",
    href: "/frete-e-prazo"
}]
  , Ks = ({children: e}) => c.jsx("h4", {
    className: "font-display uppercase text-[15px] font-bold text-white mb-4",
    children: e
})
  , Sf = ({children: e, href: t="#"}) => c.jsx("li", {
    children: c.jsx("a", {
        href: t,
        className: "text-[#AAAAAA] hover:text-[#2EAA3F] transition-colors text-[14px] leading-[2]",
        children: e
    })
})
  , Mh = () => c.jsx("footer", {
    className: "bg-[#1A1A1A]",
    style: {
        padding: "60px 0 32px"
    },
    children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [c.jsxs("div", {
            className: "grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-10",
            children: [c.jsxs("div", {
                className: "min-[480px]:col-span-1 flex flex-col items-center min-[480px]:items-start",
                children: [c.jsx("img", {
                    src: Ah,
                    alt: "TapeDrive",
                    className: "w-[160px] h-auto object-contain mb-3"
                }), c.jsx("p", {
                    className: "text-[13px] text-[#AAAAAA] max-w-[220px] leading-relaxed text-center min-[480px]:text-left",
                    children: "Os melhores tapetes automotivos do Brasil. Proteção, qualidade e design 3D sob medida para o seu veículo."
                }), c.jsx("span", {
                    className: "text-[12px] text-[#888888] mt-2",
                    children: "CNPJ: 20.989.499/0001-19"
                }), c.jsx("div", {
                    className: "flex gap-4 mt-4",
                    children: LC.map( ({Icon: e, label: t}) => c.jsx("a", {
                        href: "#",
                        "aria-label": t,
                        className: "text-[#AAAAAA] hover:text-[#2EAA3F] transition-colors",
                        children: c.jsx(e, {})
                    }, t))
                })]
            }), c.jsxs("div", {
                className: "flex flex-col items-center min-[480px]:items-start",
                children: [c.jsx(Ks, {
                    children: "Institucional"
                }), c.jsx("ul", {
                    className: "space-y-0 text-center min-[480px]:text-left",
                    children: OC.map(e => c.jsx(Sf, {
                        href: e.href,
                        children: e.label
                    }, e.label))
                })]
            }), c.jsxs("div", {
                className: "flex flex-col items-center min-[480px]:items-start",
                children: [c.jsx(Ks, {
                    children: "Ajuda"
                }), c.jsx("ul", {
                    className: "space-y-0 text-center min-[480px]:text-left",
                    children: _C.map(e => c.jsx(Sf, {
                        href: e.href,
                        children: e.label
                    }, e.label))
                })]
            }), c.jsxs("div", {
                className: "flex flex-col items-center min-[480px]:items-start",
                children: [c.jsx(Ks, {
                    children: "Suporte"
                }), c.jsxs("ul", {
                    className: "space-y-3",
                    children: [c.jsx("li", {
                        children: c.jsxs("a", {
                            href: "",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-2 text-[14px] text-[#AAAAAA] hover:text-[#2EAA3F] transition-colors",
                            children: [c.jsx("span", {
                                className: "text-[#2EAA3F]",
                                children: "📞"
                            }), " WhatsApp: (47) 99257-8792"]
                        })
                    }), c.jsx("li", {
                        children: c.jsxs("a", {
                            href: "",
                            className: "flex items-center gap-2 text-[14px] text-[#AAAAAA] hover:text-[#2EAA3F] transition-colors",
                            children: [c.jsx("span", {
                                className: "text-[#2EAA3F]",
                                children: "📧"
                            }), " contato@tapedrivepremium.store"]
                        })
                    }), c.jsxs("li", {
                        className: "flex items-center gap-2 text-[14px] text-[#AAAAAA]",
                        children: [c.jsx("span", {
                            className: "text-[#2EAA3F]",
                            children: "🕐"
                        }), " Seg-Sex 8h às 18h"]
                    })]
                })]
            })]
        }), c.jsxs("div", {
            className: "border-t border-[#2A2A2A] pt-5 flex flex-col items-center gap-4",
            children: [c.jsx("span", {
                className: "text-[12px] text-[#666666]",
                children: "© 2025 TAPEDRIVE — Todos os direitos reservados."
            }), c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [c.jsx(RC, {}), c.jsx(FC, {}), c.jsx(MC, {}), c.jsx(DC, {})]
            })]
        })]
    })
})
  , IC = "/assets/textura-a-N3a0g-ZE.jpg"
  , VC = "/assets/textura-b-fqaBWrTi.png"
  , zC = "/assets/textura-c-BFfnNWDT.png"
  , Cf = [{
    id: "A",
    name: "Textura A",
    img: IC
}, {
    id: "B",
    name: "Textura B",
    img: VC
}, {
    id: "C",
    name: "Textura C",
    img: zC
}]
  , UC = ({open: e, onClose: t, vehicle: n, kit: i}) => {
    var f;
    const [r,o] = x.useState("A")
      , [l,s] = x.useState(null);
    if (!e || !n)
        return null;
    const a = i === "interno" ? "Kit Tapetes Interno" : "Kit Interno + Porta-Malas"
      , u = {
        "completo-Preto-A": "https://checkout.seudominio.com/completo-preto-a",
        "completo-Preto-B": "https://checkout.seudominio.com/completo-preto-b",
        "completo-Preto-C": "https://checkout.seudominio.com/completo-preto-c",
        "completo-Cinza-A": "https://checkout.seudominio.com/completo-cinza-a",
        "completo-Cinza-B": "https://checkout.seudominio.com/completo-cinza-b",
        "completo-Cinza-C": "https://checkout.seudominio.com/completo-cinza-c",
        "completo-Bege-A": "https://checkout.seudominio.com/completo-bege-a",
        "completo-Bege-B": "https://checkout.seudominio.com/completo-bege-b",
        "completo-Bege-C": "https://checkout.seudominio.com/completo-bege-c",
        "interno-Preto-A": "https://checkout.seudominio.com/interno-preto-a",
        "interno-Preto-B": "https://checkout.seudominio.com/interno-preto-b",
        "interno-Preto-C": "https://checkout.seudominio.com/interno-preto-c",
        "interno-Cinza-A": "https://checkout.seudominio.com/interno-cinza-a",
        "interno-Cinza-B": "https://checkout.seudominio.com/interno-cinza-b",
        "interno-Cinza-C": "https://checkout.seudominio.com/interno-cinza-c",
        "interno-Bege-A": "https://checkout.seudominio.com/interno-bege-a",
        "interno-Bege-B": "https://checkout.seudominio.com/interno-bege-b",
        "interno-Bege-C": "https://checkout.seudominio.com/interno-bege-c"
    }
      , d = `${i}-${n.color}`
      , Bo = "https://pagamento-teste.tappemaxpremium.shop"
      , h = [{
        label: "Marca",
        value: n.brand
    }, {
        label: "Modelo",
        value: n.model
    }, {
        label: "Ano",
        value: String(n.year)
    }, {
        label: "Cor",
        value: n.color
    }, {
        label: "Kit",
        value: a
    }, {
        label: "Textura",
        value: `Textura ${r}`
    }];
    return c.jsxs(c.Fragment, {
        children: [c.jsxs("div", {
            className: "fixed inset-0 z-[10000] flex items-center justify-center p-4",
            children: [c.jsx("div", {
                className: "absolute inset-0",
                style: {
                    backgroundColor: "rgba(0,0,0,0.70)",
                    backdropFilter: "blur(5px)"
                },
                onClick: t
            }), c.jsxs("div", {
                className: "relative w-[92vw] max-w-[480px] max-h-[90vh] overflow-y-auto animate-fadeInUp",
                style: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 24,
                    padding: 28,
                    animationDuration: "0.35s"
                },
                children: [c.jsx("button", {
                    onClick: t,
                    className: "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center",
                    style: {
                        backgroundColor: "#F5F5F5"
                    },
                    children: c.jsx(Al, {
                        className: "w-4 h-4",
                        style: {
                            color: "#555"
                        }
                    })
                }), c.jsx("h3", {
                    className: "font-bold text-[22px]",
                    style: {
                        color: "#0D0D0D"
                    },
                    children: "Revise seu pedido"
                }), c.jsx("p", {
                    className: "text-[14px] mt-1 mb-6",
                    style: {
                        color: "#777"
                    },
                    children: "Seu tapete será produzido sob medida. Confira os detalhes antes de continuar."
                }), c.jsxs("div", {
                    className: "mb-6",
                    children: [c.jsx("p", {
                        className: "font-bold text-[15px]",
                        style: {
                            color: "#0D0D0D"
                        },
                        children: "Escolha a textura do seu tapete"
                    }), c.jsx("p", {
                        className: "text-[13px] mt-0.5 mb-3",
                        style: {
                            color: "#888"
                        },
                        children: "Escolha o acabamento que você viu no anúncio."
                    }), c.jsx("div", {
                        className: "grid grid-cols-3 gap-2.5",
                        children: Cf.map(w => {
                            const v = r === w.id;
                            return c.jsxs("div", {
                                onClick: () => o(w.id),
                                className: "relative cursor-pointer text-center transition-all duration-200",
                                style: {
                                    backgroundColor: v ? "#F0FFF2" : "#F8F8F8",
                                    border: v ? "2px solid #2EAA3F" : "2px solid #E0E0E0",
                                    borderRadius: 12,
                                    padding: 12
                                },
                                children: [v && c.jsx("div", {
                                    className: "absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#2EAA3F"
                                    },
                                    children: c.jsx(Pr, {
                                        className: "w-3 h-3 text-white"
                                    })
                                }), c.jsx("img", {
                                    src: w.img,
                                    alt: w.name,
                                    className: "mx-auto rounded-lg object-cover",
                                    style: {
                                        width: 80,
                                        height: 80
                                    }
                                }), c.jsx("p", {
                                    className: "text-[13px] font-bold mt-2",
                                    style: {
                                        color: "#333"
                                    },
                                    children: w.name
                                }), c.jsx("button", {
                                    onClick: S => {
                                        S.stopPropagation(),
                                        s(w.id)
                                    }
                                    ,
                                    className: "mt-1.5 text-[12px] text-white font-bold rounded-md px-3 py-1",
                                    style: {
                                        backgroundColor: "#2EAA3F"
                                    },
                                    children: "Ver"
                                })]
                            }, w.id)
                        }
                        )
                    })]
                }), c.jsx("div", {
                    className: "mb-6",
                    style: {
                        backgroundColor: "#F8F8F8",
                        borderRadius: 12,
                        padding: 16
                    },
                    children: h.map( (w, v) => c.jsxs("div", {
                        children: [c.jsxs("div", {
                            className: "flex justify-between py-2",
                            children: [c.jsx("span", {
                                className: "text-[14px]",
                                style: {
                                    color: "#777"
                                },
                                children: w.label
                            }), c.jsx("span", {
                                className: "text-[14px] font-bold",
                                style: {
                                    color: "#0D0D0D"
                                },
                                children: w.value
                            })]
                        }), v < h.length - 1 && c.jsx("div", {
                            style: {
                                borderTop: "1px solid #EEEEEE"
                            }
                        })]
                    }, w.label))
                }), c.jsxs("div", {
                    className: "flex flex-col gap-3",
                    children: [c.jsx("button", {
                        onClick: t,
                        className: "w-full text-[15px] transition-colors",
                        style: {
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E0E0E0",
                            color: "#555",
                            borderRadius: 12,
                            padding: 14
                        },
                        children: "← Voltar e ajustar"
                    }), c.jsx("button", {
                        onClick: () => {
                            const ll = {
                                kit: i,
                                color: n.color,
                                textura: r,
                                kitLabel: i === "interno" ? "Kit Tapetes Interno" : "Kit Interno + Porta-Malas",
                                vehicle: {
                                    brand: n.brand,
                                    model: n.model,
                                    year: n.year
                                },
                                ts: Date.now()
                            };
                            sessionStorage.setItem("tapedrive_checkout", JSON.stringify(ll));
                            
                            // Gera a chave de checkout com kit + cor + textura
                            const checkoutKey = `${i}-${n.color}-${r}`;
                            const checkoutUrl = u[checkoutKey];
                            
                            if (checkoutUrl) {
                                window.open(checkoutUrl, "_blank");
                            } else {
                                alert(`URL de checkout não configurada para: ${checkoutKey}`);
                            }
                        }
                        ,
                        className: "w-full block text-center font-bold text-[16px] text-white transition-colors",
                        style: {
                            backgroundColor: "#2EAA3F",
                            borderRadius: 12,
                            padding: 16,
                            boxShadow: "0 4px 16px rgba(46,170,63,0.4)"
                        },
                        onMouseEnter: w => w.currentTarget.style.backgroundColor = "#1E8A2E",
                        onMouseLeave: w => w.currentTarget.style.backgroundColor = "#2EAA3F",
                        children: "Ir para pagamento →"
                    })]
                }), c.jsx("p", {
                    className: "text-[12px] text-center mt-3",
                    style: {
                        color: "#999"
                    },
                    children: "🔒 Pagamento 100% seguro • Ambiente protegido"
                })]
            })]
        }), l && c.jsxs("div", {
            className: "fixed inset-0 z-[10001] flex items-center justify-center p-4",
            onClick: () => s(null),
            children: [c.jsx("div", {
                className: "absolute inset-0",
                style: {
                    backgroundColor: "rgba(0,0,0,0.85)"
                }
            }), c.jsxs("div", {
                className: "relative",
                children: [c.jsx("img", {
                    src: (f = Cf.find(w => w.id === l)) == null ? void 0 : f.img,
                    alt: `Textura ${l}`,
                    className: "rounded-xl object-cover",
                    style: {
                        width: 280,
                        height: 280
                    }
                }), c.jsx("button", {
                    onClick: () => s(null),
                    className: "absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white",
                    children: c.jsx(Al, {
                        className: "w-4 h-4"
                    })
                })]
            })]
        })]
    })
}
  , HC = () => {
    MS();
    const [e,t] = x.useState(!1)
      , [n,i] = x.useState("completo")
      , [r,o] = x.useState(null)
      , l = (a, u) => {
        i(a),
        o(u),
        t(!0)
    }
      , s = () => {
        var a;
        (a = document.getElementById("kits")) == null || a.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return x.useEffect( () => {
        const a = new IntersectionObserver(d => {
            d.forEach(m => {
                m.isIntersecting && m.target.classList.add("visible")
            }
            )
        }
        ,{
            threshold: .15,
            rootMargin: "0px 0px -40px 0px"
        });
        return document.querySelectorAll(".scroll-reveal").forEach(d => a.observe(d)),
        () => a.disconnect()
    }
    , []),
    c.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [c.jsx(DS, {}), c.jsx(Rh, {}), c.jsx(VS, {}), c.jsx(ZS, {
            onOpenReview: l
        }), c.jsx(lC, {}), c.jsx(dC, {}), c.jsx(mC, {}), c.jsx(hC, {}), c.jsx(yC, {}), c.jsx(EC, {}), c.jsx(wC, {}), c.jsx(SC, {}), c.jsx(bC, {
            onBuy: s
        }), c.jsx(NC, {}), c.jsx(Mh, {}), c.jsx(TC, {}), c.jsx(UC, {
            open: e,
            onClose: () => t(!1),
            kit: n,
            vehicle: r
        })]
    })
}
  , BC = () => c.jsx(HC, {})
  , po = ({children: e}) => (x.useEffect( () => {
    window.scrollTo(0, 0)
}
, []),
c.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [c.jsx(Rh, {}), c.jsx("main", {
        className: "px-6",
        style: {
            paddingTop: 80,
            paddingBottom: 80
        },
        children: c.jsx("div", {
            className: "mx-auto",
            style: {
                maxWidth: 800
            },
            children: e
        })
    }), c.jsx(Mh, {})]
}))
  , $C = () => c.jsxs(po, {
    children: [c.jsx("h1", {
        className: "font-display text-[32px] uppercase text-primary mb-6",
        children: "Quem Somos"
    }), c.jsx("p", {
        className: "text-[15px] text-foreground leading-relaxed mb-4",
        children: "A TAPEDRIVE nasceu da paixão por carros e da vontade de oferecer proteção de verdade para o interior do seu veículo. Desenvolvemos tapetes bandeja 3D sob medida, com molde exclusivo para cada modelo de carro, garantindo encaixe perfeito, borda elevada e proteção total contra sujeira, água e desgaste."
    }), c.jsx("p", {
        className: "text-[15px] text-foreground leading-relaxed mb-8",
        children: "Atendemos todo o Brasil e já protegemos mais de 15.000 veículos. Nosso compromisso é com a qualidade do produto e com a satisfação de quem compra."
    }), c.jsxs("ul", {
        className: "space-y-2 text-[14px] text-foreground",
        children: [c.jsxs("li", {
            children: [c.jsx("strong", {
                children: "CNPJ:"
            }), " 20.989.499/0001-19"]
        }), c.jsxs("li", {
            children: [c.jsx("strong", {
                children: "E-mail:"
            }), " contato@tapedrivepremium.store"]
        }), c.jsxs("li", {
            children: [c.jsx("strong", {
                children: "Atendimento:"
            }), " Seg-Sex das 8h às 18h"]
        })]
    })]
})
  , GC = [{
    title: "Quais dados coletamos",
    text: "Coletamos nome, e-mail, telefone, endereço de entrega e dados de pagamento necessários para processar seu pedido. Não coletamos dados desnecessários."
}, {
    title: "Como usamos seus dados",
    text: "Seus dados são utilizados exclusivamente para: processar e entregar seu pedido, enviar atualizações sobre sua compra, melhorar nossos serviços e cumprir obrigações legais."
}, {
    title: "Compartilhamento de dados",
    text: "Não vendemos nem compartilhamos seus dados com terceiros, exceto parceiros essenciais para entrega (transportadoras) e processamento de pagamento (gateways autorizados)."
}, {
    title: "Seus direitos",
    text: "Você pode solicitar a qualquer momento: acesso, correção ou exclusão dos seus dados. Entre em contato pelo e-mail contato@taped rivepremium.store."
}, {
    title: "Cookies",
    text: "Utilizamos cookies para melhorar sua experiência de navegação. Você pode desativá-los nas configurações do seu navegador."
}, {
    title: "Contato",
    text: "Dúvidas sobre privacidade: contato@tapedrivepremium.store"
}]
  , WC = () => c.jsxs(po, {
    children: [c.jsx("h1", {
        className: "font-display text-[32px] uppercase text-primary mb-4",
        children: "Política de Privacidade"
    }), c.jsx("p", {
        className: "text-[15px] text-foreground leading-relaxed mb-8",
        children: "A TAPEDRIVE respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
    }), GC.map(e => c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: e.title
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: e.text
        })]
    }, e.title))]
})
  , XC = [{
    title: "Aceitação dos Termos",
    text: "Ao acessar e utilizar o site da TAPEDRIVE, você concorda com os termos descritos nesta página."
}, {
    title: "Sobre os Produtos",
    text: "Os tapetes TAPEDRIVE são fabricados sob medida para cada modelo de veículo. As imagens são ilustrativas — o produto final pode apresentar variações de textura conforme o modelo do seu carro."
}, {
    title: "Preços e Pagamentos",
    text: "Os preços exibidos são em Reais (R$) e podem ser alterados sem aviso prévio. O pedido só é confirmado após aprovação do pagamento."
}, {
    title: "Responsabilidades",
    text: "A TAPEDRIVE não se responsabiliza por danos causados por uso inadequado do produto ou instalação incorreta."
}, {
    title: "Propriedade Intelectual",
    text: "Todo o conteúdo deste site (textos, imagens, marca) é de propriedade exclusiva da TAPEDRIVE e protegido por lei."
}, {
    title: "Contato",
    text: "Dúvidas: contato@tapedrivepremium.store | CNPJ: 20.989.499/0001-19"
}]
  , QC = () => c.jsxs(po, {
    children: [c.jsx("h1", {
        className: "font-display text-[32px] uppercase text-primary mb-6",
        children: "Termos de Uso"
    }), XC.map(e => c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: e.title
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: e.text
        })]
    }, e.title))]
})
  , KC = [{
    title: "Prazo para Devolução",
    text: "Você tem até 7 dias corridos após o recebimento do produto para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor (Art. 49)."
}, {
    title: "Como Solicitar",
    text: "Envie um e-mail para contato@tapedrivepremium.store com o assunto 'Troca/Devolução', seu nome completo, número do pedido e motivo. Respondemos em até 1 dia útil."
}, {
    title: "Condições do Produto",
    text: "Para troca ou devolução, o produto deve estar sem uso, na embalagem original e sem sinais de avaria."
}, {
    title: "Produto com Defeito",
    text: "Se o produto apresentar defeito de fabricação, entre em contato imediatamente. Cobrimos o frete de devolução e enviamos um novo produto sem custo adicional."
}, {
    title: "Reembolso",
    text: "Após aprovação da devolução, o reembolso é processado em até 10 dias úteis, pelo mesmo meio de pagamento utilizado."
}]
  , YC = () => c.jsxs(po, {
    children: [c.jsx("h1", {
        className: "font-display text-[32px] uppercase text-primary mb-6",
        children: "Trocas e Devoluções"
    }), KC.map(e => c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: e.title
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: e.text
        })]
    }, e.title))]
})
  , qC = () => c.jsxs(po, {
    children: [c.jsx("h1", {
        className: "font-display text-[32px] uppercase text-primary mb-6",
        children: "Frete e Prazo de Entrega"
    }), c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: "Frete Grátis"
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: "Todas as compras no site da TAPEDRIVE têm frete grátis para todo o Brasil, sem valor mínimo."
        })]
    }), c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: "Prazo de Fabricação"
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: "Nossos tapetes são feitos sob medida após a confirmação do pedido. O prazo de fabricação é de 2 a 5 dias úteis."
        })]
    }), c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: "Prazo de Entrega"
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed mb-3",
            children: "Após o envio, o prazo de entrega varia de acordo com a sua região:"
        }), c.jsxs("ul", {
            className: "list-disc list-inside text-[15px] text-foreground space-y-1 ml-2",
            children: [c.jsx("li", {
                children: "Sudeste: 3 a 7 dias úteis"
            }), c.jsx("li", {
                children: "Sul: 4 a 8 dias úteis"
            }), c.jsx("li", {
                children: "Nordeste: 6 a 12 dias úteis"
            }), c.jsx("li", {
                children: "Norte e Centro-Oeste: 8 a 15 dias úteis"
            })]
        })]
    }), c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: "Rastreamento"
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: "Assim que seu pedido for enviado, você receberá o código de rastreamento por e-mail."
        })]
    }), c.jsxs("div", {
        className: "mb-6",
        children: [c.jsx("h2", {
            className: "font-display text-[20px] uppercase text-primary mb-2",
            children: "Dúvidas sobre entrega"
        }), c.jsx("p", {
            className: "text-[15px] text-foreground leading-relaxed",
            children: "Entre em contato pelo WhatsApp (32) 99816-9897 ou e-mail contato@tapedrivepremium.store"
        })]
    })]
})
  , JC = new _g
  , ZC = () => c.jsx(Vg, {
    client: JC,
    children: c.jsxs(RS, {
        children: [c.jsx(Wx, {}), c.jsx(ny, {}), c.jsx(bv, {
            children: c.jsxs(Sv, {
                children: [c.jsx(cn, {
                    path: "/",
                    element: c.jsx(HC, {})
                }), c.jsx(cn, {
                    path: "/sobre-nos",
                    element: c.jsx($C, {})
                }), c.jsx(cn, {
                    path: "/politica-de-privacidade",
                    element: c.jsx(WC, {})
                }), c.jsx(cn, {
                    path: "/termos-de-uso",
                    element: c.jsx(QC, {})
                }), c.jsx(cn, {
                    path: "/trocas-e-devolucoes",
                    element: c.jsx(YC, {})
                }), c.jsx(cn, {
                    path: "/frete-e-prazo",
                    element: c.jsx(qC, {})
                }), c.jsx(cn, {
                    path: "*",
                    element: c.jsx(BC, {})
                })]
            })
        })]
    })
});
Wp(document.getElementById("root")).render(c.jsx(ZC, {}));
