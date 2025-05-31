import Uu, { useState as WS } from "react";
import Gb from "react-dom";
(function() {
  const K = document.createElement("link").relList;
  if (K && K.supports && K.supports("modulepreload"))
    return;
  for (const le of document.querySelectorAll('link[rel="modulepreload"]'))
    z(le);
  new MutationObserver((le) => {
    for (const he of le)
      if (he.type === "childList")
        for (const ut of he.addedNodes)
          ut.tagName === "LINK" && ut.rel === "modulepreload" && z(ut);
  }).observe(document, { childList: !0, subtree: !0 });
  function k(le) {
    const he = {};
    return le.integrity && (he.integrity = le.integrity), le.referrerPolicy && (he.referrerPolicy = le.referrerPolicy), le.crossOrigin === "use-credentials" ? he.credentials = "include" : le.crossOrigin === "anonymous" ? he.credentials = "omit" : he.credentials = "same-origin", he;
  }
  function z(le) {
    if (le.ep)
      return;
    le.ep = !0;
    const he = k(le);
    fetch(le.href, he);
  }
})();
function FS(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var Ip = { exports: {} }, e0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mb;
function IS() {
  if (Mb) return e0;
  Mb = 1;
  var D = Symbol.for("react.transitional.element"), K = Symbol.for("react.fragment");
  function k(z, le, he) {
    var ut = null;
    if (he !== void 0 && (ut = "" + he), le.key !== void 0 && (ut = "" + le.key), "key" in le) {
      he = {};
      for (var Ct in le)
        Ct !== "key" && (he[Ct] = le[Ct]);
    } else he = le;
    return le = he.ref, {
      $$typeof: D,
      type: z,
      key: ut,
      ref: le !== void 0 ? le : null,
      props: he
    };
  }
  return e0.Fragment = K, e0.jsx = k, e0.jsxs = k, e0;
}
var t0 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function PS() {
  return Ub || (Ub = 1, process.env.NODE_ENV !== "production" && function() {
    function D(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === bt ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case _l:
          return "Fragment";
        case et:
          return "Profiler";
        case ft:
          return "StrictMode";
        case jl:
          return "Suspense";
        case xt:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case yt:
            return "Portal";
          case Ut:
            return (B.displayName || "Context") + ".Provider";
          case ga:
            return (B._context.displayName || "Context") + ".Consumer";
          case pl:
            var te = B.render;
            return B = B.displayName, B || (B = te.displayName || te.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case Ve:
            return te = B.displayName || null, te !== null ? te : D(B.type) || "Memo";
          case Jt:
            te = B._payload, B = B._init;
            try {
              return D(B(te));
            } catch {
            }
        }
      return null;
    }
    function K(B) {
      return "" + B;
    }
    function k(B) {
      try {
        K(B);
        var te = !1;
      } catch {
        te = !0;
      }
      if (te) {
        te = console;
        var $ = te.error, oe = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return $.call(
          te,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          oe
        ), K(B);
      }
    }
    function z(B) {
      if (B === _l) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === Jt)
        return "<...>";
      try {
        var te = D(B);
        return te ? "<" + te + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function le() {
      var B = Ze.A;
      return B === null ? null : B.getOwner();
    }
    function he() {
      return Error("react-stack-top-frame");
    }
    function ut(B) {
      if (pe.call(B, "key")) {
        var te = Object.getOwnPropertyDescriptor(B, "key").get;
        if (te && te.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function Ct(B, te) {
      function $() {
        _t || (_t = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          te
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: $,
        configurable: !0
      });
    }
    function Z() {
      var B = D(this.type);
      return A[B] || (A[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function Yt(B, te, $, oe, Oe, at, Be, xu) {
      return $ = at.ref, B = {
        $$typeof: gt,
        type: B,
        key: te,
        props: at,
        _owner: Oe
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: Z
      }) : Object.defineProperty(B, "ref", { enumerable: !1, value: null }), B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(B, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(B, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Be
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xu
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function Ge(B, te, $, oe, Oe, at, Be, xu) {
      var St = te.children;
      if (St !== void 0)
        if (oe)
          if (Kt(St)) {
            for (oe = 0; oe < St.length; oe++)
              lt(St[oe]);
            Object.freeze && Object.freeze(St);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else lt(St);
      if (pe.call(te, "key")) {
        St = D(B);
        var al = Object.keys(te).filter(function(Ai) {
          return Ai !== "key";
        });
        oe = 0 < al.length ? "{key: someKey, " + al.join(": ..., ") + ": ...}" : "{key: someKey}", ce[St + oe] || (al = 0 < al.length ? "{" + al.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          oe,
          St,
          al,
          St
        ), ce[St + oe] = !0);
      }
      if (St = null, $ !== void 0 && (k($), St = "" + $), ut(te) && (k(te.key), St = "" + te.key), "key" in te) {
        $ = {};
        for (var ba in te)
          ba !== "key" && ($[ba] = te[ba]);
      } else $ = te;
      return St && Ct(
        $,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), Yt(
        B,
        St,
        at,
        Oe,
        le(),
        $,
        Be,
        xu
      );
    }
    function lt(B) {
      typeof B == "object" && B !== null && B.$$typeof === gt && B._store && (B._store.validated = 1);
    }
    var Ee = Uu, gt = Symbol.for("react.transitional.element"), yt = Symbol.for("react.portal"), _l = Symbol.for("react.fragment"), ft = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), ga = Symbol.for("react.consumer"), Ut = Symbol.for("react.context"), pl = Symbol.for("react.forward_ref"), jl = Symbol.for("react.suspense"), xt = Symbol.for("react.suspense_list"), Ve = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), bt = Symbol.for("react.client.reference"), Ze = Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = Object.prototype.hasOwnProperty, Kt = Array.isArray, Rl = console.createTask ? console.createTask : function() {
      return null;
    };
    Ee = {
      "react-stack-bottom-frame": function(B) {
        return B();
      }
    };
    var _t, A = {}, Q = Ee["react-stack-bottom-frame"].bind(
      Ee,
      he
    )(), L = Rl(z(he)), ce = {};
    t0.Fragment = _l, t0.jsx = function(B, te, $, oe, Oe) {
      var at = 1e4 > Ze.recentlyCreatedOwnerStacks++;
      return Ge(
        B,
        te,
        $,
        !1,
        oe,
        Oe,
        at ? Error("react-stack-top-frame") : Q,
        at ? Rl(z(B)) : L
      );
    }, t0.jsxs = function(B, te, $, oe, Oe) {
      var at = 1e4 > Ze.recentlyCreatedOwnerStacks++;
      return Ge(
        B,
        te,
        $,
        !0,
        oe,
        Oe,
        at ? Error("react-stack-top-frame") : Q,
        at ? Rl(z(B)) : L
      );
    };
  }()), t0;
}
var xb;
function e2() {
  return xb || (xb = 1, process.env.NODE_ENV === "production" ? Ip.exports = IS() : Ip.exports = PS()), Ip.exports;
}
var Ue = e2(), Pp = { exports: {} }, l0 = {}, ev = { exports: {} }, Og = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function t2() {
  return Hb || (Hb = 1, function(D) {
    function K(A, Q) {
      var L = A.length;
      A.push(Q);
      e: for (; 0 < L; ) {
        var ce = L - 1 >>> 1, B = A[ce];
        if (0 < le(B, Q))
          A[ce] = Q, A[L] = B, L = ce;
        else break e;
      }
    }
    function k(A) {
      return A.length === 0 ? null : A[0];
    }
    function z(A) {
      if (A.length === 0) return null;
      var Q = A[0], L = A.pop();
      if (L !== Q) {
        A[0] = L;
        e: for (var ce = 0, B = A.length, te = B >>> 1; ce < te; ) {
          var $ = 2 * (ce + 1) - 1, oe = A[$], Oe = $ + 1, at = A[Oe];
          if (0 > le(oe, L))
            Oe < B && 0 > le(at, oe) ? (A[ce] = at, A[Oe] = L, ce = Oe) : (A[ce] = oe, A[$] = L, ce = $);
          else if (Oe < B && 0 > le(at, L))
            A[ce] = at, A[Oe] = L, ce = Oe;
          else break e;
        }
      }
      return Q;
    }
    function le(A, Q) {
      var L = A.sortIndex - Q.sortIndex;
      return L !== 0 ? L : A.id - Q.id;
    }
    if (D.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var he = performance;
      D.unstable_now = function() {
        return he.now();
      };
    } else {
      var ut = Date, Ct = ut.now();
      D.unstable_now = function() {
        return ut.now() - Ct;
      };
    }
    var Z = [], Yt = [], Ge = 1, lt = null, Ee = 3, gt = !1, yt = !1, _l = !1, ft = !1, et = typeof setTimeout == "function" ? setTimeout : null, ga = typeof clearTimeout == "function" ? clearTimeout : null, Ut = typeof setImmediate < "u" ? setImmediate : null;
    function pl(A) {
      for (var Q = k(Yt); Q !== null; ) {
        if (Q.callback === null) z(Yt);
        else if (Q.startTime <= A)
          z(Yt), Q.sortIndex = Q.expirationTime, K(Z, Q);
        else break;
        Q = k(Yt);
      }
    }
    function jl(A) {
      if (_l = !1, pl(A), !yt)
        if (k(Z) !== null)
          yt = !0, xt || (xt = !0, pe());
        else {
          var Q = k(Yt);
          Q !== null && _t(jl, Q.startTime - A);
        }
    }
    var xt = !1, Ve = -1, Jt = 5, ne = -1;
    function bt() {
      return ft ? !0 : !(D.unstable_now() - ne < Jt);
    }
    function Ze() {
      if (ft = !1, xt) {
        var A = D.unstable_now();
        ne = A;
        var Q = !0;
        try {
          e: {
            yt = !1, _l && (_l = !1, ga(Ve), Ve = -1), gt = !0;
            var L = Ee;
            try {
              t: {
                for (pl(A), lt = k(Z); lt !== null && !(lt.expirationTime > A && bt()); ) {
                  var ce = lt.callback;
                  if (typeof ce == "function") {
                    lt.callback = null, Ee = lt.priorityLevel;
                    var B = ce(
                      lt.expirationTime <= A
                    );
                    if (A = D.unstable_now(), typeof B == "function") {
                      lt.callback = B, pl(A), Q = !0;
                      break t;
                    }
                    lt === k(Z) && z(Z), pl(A);
                  } else z(Z);
                  lt = k(Z);
                }
                if (lt !== null) Q = !0;
                else {
                  var te = k(Yt);
                  te !== null && _t(
                    jl,
                    te.startTime - A
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              lt = null, Ee = L, gt = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? pe() : xt = !1;
        }
      }
    }
    var pe;
    if (typeof Ut == "function")
      pe = function() {
        Ut(Ze);
      };
    else if (typeof MessageChannel < "u") {
      var Kt = new MessageChannel(), Rl = Kt.port2;
      Kt.port1.onmessage = Ze, pe = function() {
        Rl.postMessage(null);
      };
    } else
      pe = function() {
        et(Ze, 0);
      };
    function _t(A, Q) {
      Ve = et(function() {
        A(D.unstable_now());
      }, Q);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, D.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Jt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return Ee;
    }, D.unstable_next = function(A) {
      switch (Ee) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = Ee;
      }
      var L = Ee;
      Ee = Q;
      try {
        return A();
      } finally {
        Ee = L;
      }
    }, D.unstable_requestPaint = function() {
      ft = !0;
    }, D.unstable_runWithPriority = function(A, Q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = Ee;
      Ee = A;
      try {
        return Q();
      } finally {
        Ee = L;
      }
    }, D.unstable_scheduleCallback = function(A, Q, L) {
      var ce = D.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ce + L : ce) : L = ce, A) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = L + B, A = {
        id: Ge++,
        callback: Q,
        priorityLevel: A,
        startTime: L,
        expirationTime: B,
        sortIndex: -1
      }, L > ce ? (A.sortIndex = L, K(Yt, A), k(Z) === null && A === k(Yt) && (_l ? (ga(Ve), Ve = -1) : _l = !0, _t(jl, L - ce))) : (A.sortIndex = B, K(Z, A), yt || gt || (yt = !0, xt || (xt = !0, pe()))), A;
    }, D.unstable_shouldYield = bt, D.unstable_wrapCallback = function(A) {
      var Q = Ee;
      return function() {
        var L = Ee;
        Ee = Q;
        try {
          return A.apply(this, arguments);
        } finally {
          Ee = L;
        }
      };
    };
  }(Og)), Og;
}
var Mg = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cb;
function l2() {
  return Cb || (Cb = 1, function(D) {
    process.env.NODE_ENV !== "production" && function() {
      function K() {
        if (jl = !1, ne) {
          var A = D.unstable_now();
          pe = A;
          var Q = !0;
          try {
            e: {
              Ut = !1, pl && (pl = !1, Ve(bt), bt = -1), ga = !0;
              var L = et;
              try {
                t: {
                  for (ut(A), ft = z(gt); ft !== null && !(ft.expirationTime > A && Z()); ) {
                    var ce = ft.callback;
                    if (typeof ce == "function") {
                      ft.callback = null, et = ft.priorityLevel;
                      var B = ce(
                        ft.expirationTime <= A
                      );
                      if (A = D.unstable_now(), typeof B == "function") {
                        ft.callback = B, ut(A), Q = !0;
                        break t;
                      }
                      ft === z(gt) && le(gt), ut(A);
                    } else le(gt);
                    ft = z(gt);
                  }
                  if (ft !== null) Q = !0;
                  else {
                    var te = z(yt);
                    te !== null && Yt(
                      Ct,
                      te.startTime - A
                    ), Q = !1;
                  }
                }
                break e;
              } finally {
                ft = null, et = L, ga = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Kt() : ne = !1;
          }
        }
      }
      function k(A, Q) {
        var L = A.length;
        A.push(Q);
        e: for (; 0 < L; ) {
          var ce = L - 1 >>> 1, B = A[ce];
          if (0 < he(B, Q))
            A[ce] = Q, A[L] = B, L = ce;
          else break e;
        }
      }
      function z(A) {
        return A.length === 0 ? null : A[0];
      }
      function le(A) {
        if (A.length === 0) return null;
        var Q = A[0], L = A.pop();
        if (L !== Q) {
          A[0] = L;
          e: for (var ce = 0, B = A.length, te = B >>> 1; ce < te; ) {
            var $ = 2 * (ce + 1) - 1, oe = A[$], Oe = $ + 1, at = A[Oe];
            if (0 > he(oe, L))
              Oe < B && 0 > he(at, oe) ? (A[ce] = at, A[Oe] = L, ce = Oe) : (A[ce] = oe, A[$] = L, ce = $);
            else if (Oe < B && 0 > he(at, L))
              A[ce] = at, A[Oe] = L, ce = Oe;
            else break e;
          }
        }
        return Q;
      }
      function he(A, Q) {
        var L = A.sortIndex - Q.sortIndex;
        return L !== 0 ? L : A.id - Q.id;
      }
      function ut(A) {
        for (var Q = z(yt); Q !== null; ) {
          if (Q.callback === null) le(yt);
          else if (Q.startTime <= A)
            le(yt), Q.sortIndex = Q.expirationTime, k(gt, Q);
          else break;
          Q = z(yt);
        }
      }
      function Ct(A) {
        if (pl = !1, ut(A), !Ut)
          if (z(gt) !== null)
            Ut = !0, ne || (ne = !0, Kt());
          else {
            var Q = z(yt);
            Q !== null && Yt(
              Ct,
              Q.startTime - A
            );
          }
      }
      function Z() {
        return jl ? !0 : !(D.unstable_now() - pe < Ze);
      }
      function Yt(A, Q) {
        bt = xt(function() {
          A(D.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), D.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ge = performance;
        D.unstable_now = function() {
          return Ge.now();
        };
      } else {
        var lt = Date, Ee = lt.now();
        D.unstable_now = function() {
          return lt.now() - Ee;
        };
      }
      var gt = [], yt = [], _l = 1, ft = null, et = 3, ga = !1, Ut = !1, pl = !1, jl = !1, xt = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, Jt = typeof setImmediate < "u" ? setImmediate : null, ne = !1, bt = -1, Ze = 5, pe = -1;
      if (typeof Jt == "function")
        var Kt = function() {
          Jt(K);
        };
      else if (typeof MessageChannel < "u") {
        var Rl = new MessageChannel(), _t = Rl.port2;
        Rl.port1.onmessage = K, Kt = function() {
          _t.postMessage(null);
        };
      } else
        Kt = function() {
          xt(K, 0);
        };
      D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, D.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ze = 0 < A ? Math.floor(1e3 / A) : 5;
      }, D.unstable_getCurrentPriorityLevel = function() {
        return et;
      }, D.unstable_next = function(A) {
        switch (et) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = et;
        }
        var L = et;
        et = Q;
        try {
          return A();
        } finally {
          et = L;
        }
      }, D.unstable_requestPaint = function() {
        jl = !0;
      }, D.unstable_runWithPriority = function(A, Q) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var L = et;
        et = A;
        try {
          return Q();
        } finally {
          et = L;
        }
      }, D.unstable_scheduleCallback = function(A, Q, L) {
        var ce = D.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ce + L : ce) : L = ce, A) {
          case 1:
            var B = -1;
            break;
          case 2:
            B = 250;
            break;
          case 5:
            B = 1073741823;
            break;
          case 4:
            B = 1e4;
            break;
          default:
            B = 5e3;
        }
        return B = L + B, A = {
          id: _l++,
          callback: Q,
          priorityLevel: A,
          startTime: L,
          expirationTime: B,
          sortIndex: -1
        }, L > ce ? (A.sortIndex = L, k(yt, A), z(gt) === null && A === z(yt) && (pl ? (Ve(bt), bt = -1) : pl = !0, Yt(Ct, L - ce))) : (A.sortIndex = B, k(gt, A), Ut || ga || (Ut = !0, ne || (ne = !0, Kt()))), A;
      }, D.unstable_shouldYield = Z, D.unstable_wrapCallback = function(A) {
        var Q = et;
        return function() {
          var L = et;
          et = Q;
          try {
            return A.apply(this, arguments);
          } finally {
            et = L;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Mg)), Mg;
}
var Nb;
function Vb() {
  return Nb || (Nb = 1, process.env.NODE_ENV === "production" ? ev.exports = t2() : ev.exports = l2()), ev.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bb;
function a2() {
  if (Bb) return l0;
  Bb = 1;
  var D = Vb(), K = Uu, k = Gb;
  function z(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function le(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function he(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function ut(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ct(l) {
    if (he(l) !== l)
      throw Error(z(188));
  }
  function Z(l) {
    var n = l.alternate;
    if (!n) {
      if (n = he(l), n === null) throw Error(z(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return Ct(s), l;
          if (r === c) return Ct(s), n;
          r = r.sibling;
        }
        throw Error(z(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, m = s.child; m; ) {
          if (m === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (m === c) {
            y = !0, c = s, u = r;
            break;
          }
          m = m.sibling;
        }
        if (!y) {
          for (m = r.child; m; ) {
            if (m === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (m === c) {
              y = !0, c = r, u = s;
              break;
            }
            m = m.sibling;
          }
          if (!y) throw Error(z(189));
        }
      }
      if (u.alternate !== c) throw Error(z(190));
    }
    if (u.tag !== 3) throw Error(z(188));
    return u.stateNode.current === u ? l : n;
  }
  function Yt(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Yt(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Ge = Object.assign, lt = Symbol.for("react.element"), Ee = Symbol.for("react.transitional.element"), gt = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), _l = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), et = Symbol.for("react.provider"), ga = Symbol.for("react.consumer"), Ut = Symbol.for("react.context"), pl = Symbol.for("react.forward_ref"), jl = Symbol.for("react.suspense"), xt = Symbol.for("react.suspense_list"), Ve = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), bt = Symbol.for("react.memo_cache_sentinel"), Ze = Symbol.iterator;
  function pe(l) {
    return l === null || typeof l != "object" ? null : (l = Ze && l[Ze] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Kt = Symbol.for("react.client.reference");
  function Rl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Kt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case yt:
        return "Fragment";
      case ft:
        return "Profiler";
      case _l:
        return "StrictMode";
      case jl:
        return "Suspense";
      case xt:
        return "SuspenseList";
      case ne:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case gt:
          return "Portal";
        case Ut:
          return (l.displayName || "Context") + ".Provider";
        case ga:
          return (l._context.displayName || "Context") + ".Consumer";
        case pl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ve:
          return n = l.displayName || null, n !== null ? n : Rl(l.type) || "Memo";
        case Jt:
          n = l._payload, l = l._init;
          try {
            return Rl(l(n));
          } catch {
          }
      }
    return null;
  }
  var _t = Array.isArray, A = K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], B = -1;
  function te(l) {
    return { current: l };
  }
  function $(l) {
    0 > B || (l.current = ce[B], ce[B] = null, B--);
  }
  function oe(l, n) {
    B++, ce[B] = l.current, l.current = n;
  }
  var Oe = te(null), at = te(null), Be = te(null), xu = te(null);
  function St(l, n) {
    switch (oe(Be, n), oe(at, l), oe(Oe, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? gu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = gu(n), l = Do(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    $(Oe), oe(Oe, l);
  }
  function al() {
    $(Oe), $(at), $(Be);
  }
  function ba(l) {
    l.memoizedState !== null && oe(xu, l);
    var n = Oe.current, u = Do(n, l.type);
    n !== u && (oe(at, l), oe(Oe, u));
  }
  function Ai(l) {
    at.current === l && ($(Oe), $(at)), xu.current === l && ($(xu), Pl._currentValue = L);
  }
  var Gs = Object.prototype.hasOwnProperty, zi = D.unstable_scheduleCallback, oh = D.unstable_cancelCallback, uv = D.unstable_shouldYield, Ri = D.unstable_requestPaint, ta = D.unstable_now, Wo = D.unstable_getCurrentPriorityLevel, n0 = D.unstable_ImmediatePriority, fh = D.unstable_UserBlockingPriority, Fo = D.unstable_NormalPriority, sh = D.unstable_LowPriority, Cc = D.unstable_IdlePriority, iv = D.log, u0 = D.unstable_setDisableYieldValue, Nc = null, Dl = null;
  function $n(l) {
    if (typeof iv == "function" && u0(l), Dl && typeof Dl.setStrictMode == "function")
      try {
        Dl.setStrictMode(Nc, l);
      } catch {
      }
  }
  var Gl = Math.clz32 ? Math.clz32 : cv, rh = Math.log, i0 = Math.LN2;
  function cv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (rh(l) / i0 | 0) | 0;
  }
  var Bc = 256, Wn = 4194304;
  function la(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Hu(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var m = c & 134217727;
    return m !== 0 ? (c = m & ~r, c !== 0 ? s = la(c) : (y &= m, y !== 0 ? s = la(y) : u || (u = m & ~l, u !== 0 && (s = la(u))))) : (m = c & ~r, m !== 0 ? s = la(m) : y !== 0 ? s = la(y) : u || (u = c & ~l, u !== 0 && (s = la(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function nn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function kt(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cu() {
    var l = Bc;
    return Bc <<= 1, (Bc & 4194048) === 0 && (Bc = 256), l;
  }
  function Di() {
    var l = Wn;
    return Wn <<= 1, (Wn & 62914560) === 0 && (Wn = 4194304), l;
  }
  function Nu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Oi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function c0(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var m = l.entanglements, g = l.expirationTimes, M = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var G = 31 - Gl(u), X = 1 << G;
      m[G] = 0, g[G] = -1;
      var x = M[G];
      if (x !== null)
        for (M[G] = null, G = 0; G < x.length; G++) {
          var C = x[G];
          C !== null && (C.lane &= -536870913);
        }
      u &= ~X;
    }
    c !== 0 && Io(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function Io(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Gl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Po(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Gl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Ga(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Vs(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function o0() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : mm(l.type));
  }
  function ov(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var jt = Math.random().toString(36).slice(2), $t = "__reactFiber$" + jt, Ol = "__reactProps$" + jt, qc = "__reactContainer$" + jt, Xs = "__reactEvents$" + jt, f0 = "__reactListeners$" + jt, Qs = "__reactHandles$" + jt, s0 = "__reactResources$" + jt, I = "__reactMarker$" + jt;
  function ef(l) {
    delete l[$t], delete l[Ol], delete l[Xs], delete l[f0], delete l[Qs];
  }
  function nl(l) {
    var n = l[$t];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[qc] || u[$t]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = rl(l); l !== null; ) {
            if (u = l[$t]) return u;
            l = rl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Mi(l) {
    if (l = l[$t] || l[qc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function tf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(z(33));
  }
  function Fn(l) {
    var n = l[s0];
    return n || (n = l[s0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Gt(l) {
    l[I] = !0;
  }
  var lf = /* @__PURE__ */ new Set(), aa = {};
  function Bu(l, n) {
    qu(l, n), qu(l + "Capture", n);
  }
  function qu(l, n) {
    for (aa[l] = n, l = 0; l < n.length; l++)
      lf.add(n[l]);
  }
  var r0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ws = {}, dh = {};
  function d0(l) {
    return Gs.call(dh, l) ? !0 : Gs.call(ws, l) ? !1 : r0.test(l) ? dh[l] = !0 : (ws[l] = !0, !1);
  }
  function In(l, n, u) {
    if (d0(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function af(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function un(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var Ls, hh;
  function Ui(l) {
    if (Ls === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ls = n && n[1] || "", hh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ls + l + hh;
  }
  var Ml = !1;
  function Yu(l, n) {
    if (!l || Ml) return "";
    Ml = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (C) {
                  var x = C;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (C) {
                  x = C;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                x = C;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (C) {
            if (C && x && typeof C.stack == "string")
              return [C.stack, x.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], m = r[1];
      if (y && m) {
        var g = y.split(`
`), M = m.split(`
`);
        for (s = c = 0; c < g.length && !g[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < M.length && !M[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === g.length || s === M.length)
          for (c = g.length - 1, s = M.length - 1; 1 <= c && 0 <= s && g[c] !== M[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (g[c] !== M[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || g[c] !== M[s]) {
                  var G = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Ml = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ui(u) : "";
  }
  function xi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ui(l.type);
      case 16:
        return Ui("Lazy");
      case 13:
        return Ui("Suspense");
      case 19:
        return Ui("SuspenseList");
      case 0:
      case 15:
        return Yu(l.type, !1);
      case 11:
        return Yu(l.type.render, !1);
      case 1:
        return Yu(l.type, !0);
      case 31:
        return Ui("Activity");
      default:
        return "";
    }
  }
  function yh(l) {
    try {
      var n = "";
      do
        n += xi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function vl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function nf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function mh(l) {
    var n = nf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function _u(l) {
    l._valueTracker || (l._valueTracker = mh(l));
  }
  function Hi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = nf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Yc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var fv = /[\n"\\]/g;
  function Sa(l) {
    return l.replace(
      fv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zs(l, n, u, c, s, r, y, m) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + vl(n)) : l.value !== "" + vl(n) && (l.value = "" + vl(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? uf(l, y, vl(n)) : u != null ? uf(l, y, vl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.name = "" + vl(m) : l.removeAttribute("name");
  }
  function Js(l, n, u, c, s, r, y, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + vl(u) : "", n = n != null ? "" + vl(n) : u, m || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = m ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function uf(l, n, u) {
    n === "number" && Yc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Ci(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + vl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function ph(l, n, u) {
    if (n != null && (n = "" + vl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + vl(u) : "";
  }
  function vh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(z(92));
        if (_t(c)) {
          if (1 < c.length) throw Error(z(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = vl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function _c(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var h0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ks(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || h0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function cf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(z(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Ks(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Ks(l, r, n[r]);
  }
  function Ni(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
        return !0;
    }
  }
  var sv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), y0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function of(l) {
    return y0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Bi = null;
  function ks(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var jc = null, Gc = null;
  function m0(l) {
    var n = Mi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Ol] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Zs(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Sa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Ol] || null;
                if (!s) throw Error(z(90));
                Zs(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Hi(c);
          }
          break e;
        case "textarea":
          ph(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Ci(l, !!u.multiple, n, !1);
      }
    }
  }
  var gh = !1;
  function Vc(l, n, u) {
    if (gh) return l(n, u);
    gh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (gh = !1, (jc !== null || Gc !== null) && (dc(), jc && (n = jc, l = Gc, Gc = jc = null, m0(n), l)))
        for (n = 0; n < l.length; n++) m0(l[n]);
    }
  }
  function qi(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Ol] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        z(231, n, typeof u)
      );
    return u;
  }
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $s = !1;
  if (cn)
    try {
      var Pn = {};
      Object.defineProperty(Pn, "passive", {
        get: function() {
          $s = !0;
        }
      }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
    } catch {
      $s = !1;
    }
  var eu = null, Xc = null, Yi = null;
  function bh() {
    if (Yi) return Yi;
    var l, n = Xc, u = n.length, c, s = "value" in eu ? eu.value : eu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return Yi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function ul(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ws() {
    return !0;
  }
  function Fs() {
    return !1;
  }
  function Ul(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var m in l)
        l.hasOwnProperty(m) && (u = l[m], this[m] = u ? u(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ws : Fs, this.isPropagationStopped = Fs, this;
    }
    return Ge(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ws);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ws);
      },
      persist: function() {
      },
      isPersistent: Ws
    }), n;
  }
  var ju = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Is = Ul(ju), ff = Ge({}, ju, { view: 0, detail: 0 }), p0 = Ul(ff), Sh, Ps, sf, _i = Ge({}, ff, {
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
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== sf && (sf && l.type === "mousemove" ? (Sh = l.screenX - sf.screenX, Ps = l.screenY - sf.screenY) : Ps = Sh = 0, sf = l), Sh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Ps;
    }
  }), Th = Ul(_i), v0 = Ge({}, _i, { dataTransfer: 0 }), g0 = Ul(v0), rv = Ge({}, ff, { relatedTarget: 0 }), Eh = Ul(rv), dv = Ge({}, ju, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), hv = Ul(dv), yv = Ge({}, ju, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), rf = Ul(yv), b0 = Ge({}, ju, { data: 0 }), Ah = Ul(b0), S0 = {
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
  }, T0 = {
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
  }, zh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function E0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = zh[l]) ? !!n[l] : !1;
  }
  function tu() {
    return E0;
  }
  var ji = Ge({}, ff, {
    key: function(l) {
      if (l.key) {
        var n = S0[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = ul(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? T0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function(l) {
      return l.type === "keypress" ? ul(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ul(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Va = Ul(ji), na = Ge({}, _i, {
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
  }), df = Ul(na), er = Ge({}, ff, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu
  }), Rh = Ul(er), Vl = Ge({}, ju, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), A0 = Ul(Vl), tr = Ge({}, _i, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gi = Ul(tr), Dh = Ge({}, ju, {
    newState: 0,
    oldState: 0
  }), z0 = Ul(Dh), R0 = [9, 13, 27, 32], hf = cn && "CompositionEvent" in window, yf = null;
  cn && "documentMode" in document && (yf = document.documentMode);
  var Oh = cn && "TextEvent" in window && !yf, on = cn && (!hf || yf && 8 < yf && 11 >= yf), Mh = " ", lr = !1;
  function mf(l, n) {
    switch (l) {
      case "keyup":
        return R0.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vu = !1;
  function Uh(l, n) {
    switch (l) {
      case "compositionend":
        return Gu(n);
      case "keypress":
        return n.which !== 32 ? null : (lr = !0, Mh);
      case "textInput":
        return l = n.data, l === Mh && lr ? null : l;
      default:
        return null;
    }
  }
  function Vi(l, n) {
    if (Vu)
      return l === "compositionend" || !hf && mf(l, n) ? (l = bh(), Yi = Xc = eu = null, Vu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return on && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var D0 = {
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
  function ar(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!D0[l.type] : n === "textarea";
  }
  function nr(l, n, u, c) {
    jc ? Gc ? Gc.push(c) : Gc = [c] : jc = c, n = Ro(n, "onChange"), 0 < n.length && (u = new Is(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Xa = null, Qa = null;
  function xh(l) {
    pc(l, 0);
  }
  function fn(l) {
    var n = tf(l);
    if (Hi(n)) return l;
  }
  function Hh(l, n) {
    if (l === "change") return n;
  }
  var Ch = !1;
  if (cn) {
    var Xi;
    if (cn) {
      var Qi = "oninput" in document;
      if (!Qi) {
        var Nh = document.createElement("div");
        Nh.setAttribute("oninput", "return;"), Qi = typeof Nh.oninput == "function";
      }
      Xi = Qi;
    } else Xi = !1;
    Ch = Xi && (!document.documentMode || 9 < document.documentMode);
  }
  function Qc() {
    Xa && (Xa.detachEvent("onpropertychange", Bh), Qa = Xa = null);
  }
  function Bh(l) {
    if (l.propertyName === "value" && fn(Qa)) {
      var n = [];
      nr(
        n,
        Qa,
        l,
        ks(l)
      ), Vc(xh, n);
    }
  }
  function ur(l, n, u) {
    l === "focusin" ? (Qc(), Xa = n, Qa = u, Xa.attachEvent("onpropertychange", Bh)) : l === "focusout" && Qc();
  }
  function Xu(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return fn(Qa);
  }
  function lu(l, n) {
    if (l === "click") return fn(n);
  }
  function qh(l, n) {
    if (l === "input" || l === "change")
      return fn(n);
  }
  function Yh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var il = typeof Object.is == "function" ? Object.is : Yh;
  function Qu(l, n) {
    if (il(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Gs.call(n, s) || !il(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function wu(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function it(l, n) {
    var u = wu(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = wu(u);
    }
  }
  function pf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function _h(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Yc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Yc(l.document);
    }
    return n;
  }
  function vf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var wi = cn && "documentMode" in document && 11 >= document.documentMode, sn = null, wa = null, Lu = null, Li = !1;
  function ir(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Li || sn == null || sn !== Yc(c) || (c = sn, "selectionStart" in c && vf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Lu && Qu(Lu, c) || (Lu = c, c = Ro(wa, "onSelect"), 0 < c.length && (n = new Is(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = sn)));
  }
  function au(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Zi = {
    animationend: au("Animation", "AnimationEnd"),
    animationiteration: au("Animation", "AnimationIteration"),
    animationstart: au("Animation", "AnimationStart"),
    transitionrun: au("Transition", "TransitionRun"),
    transitionstart: au("Transition", "TransitionStart"),
    transitioncancel: au("Transition", "TransitionCancel"),
    transitionend: au("Transition", "TransitionEnd")
  }, Ta = {}, La = {};
  cn && (La = document.createElement("div").style, "AnimationEvent" in window || (delete Zi.animationend.animation, delete Zi.animationiteration.animation, delete Zi.animationstart.animation), "TransitionEvent" in window || delete Zi.transitionend.transition);
  function rn(l) {
    if (Ta[l]) return Ta[l];
    if (!Zi[l]) return l;
    var n = Zi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in La)
        return Ta[l] = n[u];
    return l;
  }
  var O0 = rn("animationend"), jh = rn("animationiteration"), M0 = rn("animationstart"), Gh = rn("transitionrun"), cr = rn("transitionstart"), U0 = rn("transitioncancel"), Vh = rn("transitionend"), Xh = /* @__PURE__ */ new Map(), wc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  wc.push("scrollEnd");
  function Ea(l, n) {
    Xh.set(l, n), Bu(n, [l]);
  }
  var Qh = /* @__PURE__ */ new WeakMap();
  function ua(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Qh.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: yh(n)
      }, Qh.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: yh(n)
    };
  }
  var Xl = [], Zu = 0, dn = 0;
  function Za() {
    for (var l = Zu, n = dn = Zu = 0; n < l; ) {
      var u = Xl[n];
      Xl[n++] = null;
      var c = Xl[n];
      Xl[n++] = null;
      var s = Xl[n];
      Xl[n++] = null;
      var r = Xl[n];
      if (Xl[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Zc(u, s, r);
    }
  }
  function Ju(l, n, u, c) {
    Xl[Zu++] = l, Xl[Zu++] = n, Xl[Zu++] = u, Xl[Zu++] = c, dn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Lc(l, n, u, c) {
    return Ju(l, n, u, c), gf(l);
  }
  function hn(l, n) {
    return Ju(l, null, null, n), gf(l);
  }
  function Zc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Gl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function gf(l) {
    if (50 < bo)
      throw bo = 0, Qy = null, Error(z(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Jc = {};
  function x0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ql(l, n, u, c) {
    return new x0(l, n, u, c);
  }
  function bf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ja(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ql(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ze(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function w(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") bf(l) && (y = 1);
    else if (typeof l == "string")
      y = sp(
        l,
        u,
        Oe.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ne:
          return l = Ql(31, u, n, s), l.elementType = ne, l.lanes = r, l;
        case yt:
          return Aa(u.children, s, r, n);
        case _l:
          y = 8, s |= 24;
          break;
        case ft:
          return l = Ql(12, u, n, s | 2), l.elementType = ft, l.lanes = r, l;
        case jl:
          return l = Ql(13, u, n, s), l.elementType = jl, l.lanes = r, l;
        case xt:
          return l = Ql(19, u, n, s), l.elementType = xt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case et:
              case Ut:
                y = 10;
                break e;
              case ga:
                y = 9;
                break e;
              case pl:
                y = 11;
                break e;
              case Ve:
                y = 14;
                break e;
              case Jt:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            z(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ql(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Aa(l, n, u, c) {
    return l = Ql(7, l, c, n), l.lanes = u, l;
  }
  function Kc(l, n, u) {
    return l = Ql(6, l, null, n), l.lanes = u, l;
  }
  function mt(l, n, u) {
    return n = Ql(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Ku = [], ku = 0, Sf = null, kc = 0, za = [], wl = 0, nu = null, Ka = 1, Tt = "";
  function qe(l, n) {
    Ku[ku++] = kc, Ku[ku++] = Sf, Sf = l, kc = n;
  }
  function or(l, n, u) {
    za[wl++] = Ka, za[wl++] = Tt, za[wl++] = nu, nu = l;
    var c = Ka;
    l = Tt;
    var s = 32 - Gl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Gl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, Ka = 1 << 32 - Gl(n) + s | u << s | c, Tt = r + l;
    } else
      Ka = 1 << r | u << s | c, Tt = l;
  }
  function Ji(l) {
    l.return !== null && (qe(l, 1), or(l, 1, 0));
  }
  function yn(l) {
    for (; l === Sf; )
      Sf = Ku[--ku], Ku[ku] = null, kc = Ku[--ku], Ku[ku] = null;
    for (; l === nu; )
      nu = za[--wl], za[wl] = null, Tt = za[--wl], za[wl] = null, Ka = za[--wl], za[wl] = null;
  }
  var Ht = null, Xe = null, je = !1, Ra = null, Da = !1, Ki = Error(z(519));
  function uu(l) {
    var n = Error(z(418, ""));
    throw Fc(ua(n, l)), Ki;
  }
  function Tf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[$t] = l, n[Ol] = c, u) {
      case "dialog":
        ge("cancel", n), ge("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ge("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < is.length; u++)
          ge(is[u], n);
        break;
      case "source":
        ge("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ge("error", n), ge("load", n);
        break;
      case "details":
        ge("toggle", n);
        break;
      case "input":
        ge("invalid", n), Js(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), _u(n);
        break;
      case "select":
        ge("invalid", n);
        break;
      case "textarea":
        ge("invalid", n), vh(n, c.value, c.defaultValue, c.children), _u(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || lm(n.textContent, u) ? (c.popover != null && (ge("beforetoggle", n), ge("toggle", n)), c.onScroll != null && ge("scroll", n), c.onScrollEnd != null && ge("scrollend", n), c.onClick != null && (n.onclick = gd), n = !0) : n = !1, n || uu(l);
  }
  function wh(l) {
    for (Ht = l.return; Ht; )
      switch (Ht.tag) {
        case 5:
        case 13:
          Da = !1;
          return;
        case 27:
        case 3:
          Da = !0;
          return;
        default:
          Ht = Ht.return;
      }
  }
  function $c(l) {
    if (l !== Ht) return !1;
    if (!je) return wh(l), je = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Bn(l.type, l.memoizedProps)), u = !u), u && Xe && uu(l), wh(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(z(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Xe = Pa(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Xe = null;
      }
    } else
      n === 27 ? (n = Xe, di(l.type) ? (l = hi, hi = null, Xe = l) : Xe = n) : Xe = Ht ? Pa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Wc() {
    Xe = Ht = null, je = !1;
  }
  function Lh() {
    var l = Ra;
    return l !== null && ($l === null ? $l = l : $l.push.apply(
      $l,
      l
    ), Ra = null), l;
  }
  function Fc(l) {
    Ra === null ? Ra = [l] : Ra.push(l);
  }
  var Ef = te(null), iu = null, ka = null;
  function cu(l, n, u) {
    oe(Ef, n._currentValue), n._currentValue = u;
  }
  function mn(l) {
    l._currentValue = Ef.current, $(Ef);
  }
  function fr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Zh(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (m.context === n[g]) {
              r.lanes |= u, m = r.alternate, m !== null && (m.lanes |= u), fr(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(z(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), fr(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Ic(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(z(387));
        if (y = y.memoizedProps, y !== null) {
          var m = s.type;
          il(s.pendingProps.value, y.value) || (l !== null ? l.push(m) : l = [m]);
        }
      } else if (s === xu.current) {
        if (y = s.alternate, y === null) throw Error(z(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Pl) : l = [Pl]);
      }
      s = s.return;
    }
    l !== null && Zh(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Af(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!il(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function $u(l) {
    iu = l, ka = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Wt(l) {
    return Jh(iu, l);
  }
  function zf(l, n) {
    return iu === null && $u(l), Jh(l, n);
  }
  function Jh(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, ka === null) {
      if (l === null) throw Error(z(308));
      ka = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else ka = ka.next = n;
    return u;
  }
  var Pc = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, sr = D.unstable_scheduleCallback, H0 = D.unstable_NormalPriority, Vt = {
    $$typeof: Ut,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function eo() {
    return {
      controller: new Pc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pn(l) {
    l.refCount--, l.refCount === 0 && sr(H0, function() {
      l.controller.abort();
    });
  }
  var Wu = null, Rf = 0, Oa = 0, Xt = null;
  function rr(l, n) {
    if (Wu === null) {
      var u = Wu = [];
      Rf = 0, Oa = mc(), Xt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Rf++, n.then(dr, dr), n;
  }
  function dr() {
    if (--Rf === 0 && Wu !== null) {
      Xt !== null && (Xt.status = "fulfilled");
      var l = Wu;
      Wu = null, Oa = 0, Xt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function C0(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var hr = A.S;
  A.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && rr(l, n), hr !== null && hr(l, n);
  };
  var vn = te(null);
  function Df() {
    var l = vn.current;
    return l !== null ? l : tt.pooledCache;
  }
  function ki(l, n) {
    n === null ? oe(vn, vn.current) : oe(vn, n.pool);
  }
  function yr() {
    var l = Df();
    return l === null ? null : { parent: Vt._currentValue, pool: l };
  }
  var Fu = Error(z(460)), mr = Error(z(474)), Of = Error(z(542)), pr = { then: function() {
  } };
  function vr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Mf() {
  }
  function Kh(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Mf, Mf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, $h(l), l;
      default:
        if (typeof n.status == "string") n.then(Mf, Mf);
        else {
          if (l = tt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(z(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, $h(l), l;
        }
        throw $i = n, Fu;
    }
  }
  var $i = null;
  function kh() {
    if ($i === null) throw Error(z(459));
    var l = $i;
    return $i = null, l;
  }
  function $h(l) {
    if (l === Fu || l === Of)
      throw Error(z(483));
  }
  var gn = !1;
  function gr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function br(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ll(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Ke & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = gf(l), Zc(l, null, u), n;
    }
    return Ju(l, c, n, u), gf(l);
  }
  function Wi(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Po(l, u);
    }
  }
  function Wh(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Fh = !1;
  function to() {
    if (Fh) {
      var l = Xt;
      if (l !== null) throw l;
    }
  }
  function ou(l, n, u, c) {
    Fh = !1;
    var s = l.updateQueue;
    gn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var g = m, M = g.next;
      g.next = null, y === null ? r = M : y.next = M, y = g;
      var G = l.alternate;
      G !== null && (G = G.updateQueue, m = G.lastBaseUpdate, m !== y && (m === null ? G.firstBaseUpdate = M : m.next = M, G.lastBaseUpdate = g));
    }
    if (r !== null) {
      var X = s.baseState;
      y = 0, G = M = g = null, m = r;
      do {
        var x = m.lane & -536870913, C = x !== m.lane;
        if (C ? (He & x) === x : (c & x) === x) {
          x !== 0 && x === Oa && (Fh = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var ue = l, ie = m;
            x = n;
            var we = u;
            switch (ie.tag) {
              case 1:
                if (ue = ie.payload, typeof ue == "function") {
                  X = ue.call(we, X, x);
                  break e;
                }
                X = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = ie.payload, x = typeof ue == "function" ? ue.call(we, X, x) : ue, x == null) break e;
                X = Ge({}, X, x);
                break e;
              case 2:
                gn = !0;
            }
          }
          x = m.callback, x !== null && (l.flags |= 64, C && (l.flags |= 8192), C = s.callbacks, C === null ? s.callbacks = [x] : C.push(x));
        } else
          C = {
            lane: x,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, G === null ? (M = G = C, g = X) : G = G.next = C, y |= x;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          C = m, m = C.next, C.next = null, s.lastBaseUpdate = C, s.shared.pending = null;
        }
      } while (!0);
      G === null && (g = X), s.baseState = g, s.firstBaseUpdate = M, s.lastBaseUpdate = G, r === null && (s.shared.lanes = 0), mu |= y, l.lanes = y, l.memoizedState = X;
    }
  }
  function Sr(l, n) {
    if (typeof l != "function")
      throw Error(z(191, l));
    l.call(n);
  }
  function Uf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Sr(u[l], n);
  }
  var Fi = te(null), xf = te(0);
  function Ft(l, n) {
    l = yu, oe(xf, l), oe(Fi, n), yu = l | n.baseLanes;
  }
  function lo() {
    oe(xf, yu), oe(Fi, Fi.current);
  }
  function ao() {
    yu = xf.current, $(Fi), $(xf);
  }
  var Ma = 0, ve = null, Je = null, pt = null, Hf = !1, ia = !1, Iu = !1, $a = 0, ca = 0, fu = null, Ih = 0;
  function vt() {
    throw Error(z(321));
  }
  function Tr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!il(l[u], n[u])) return !1;
    return !0;
  }
  function Er(l, n, u, c, s, r) {
    return Ma = r, ve = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = l === null || l.memoizedState === null ? hy : yy, Iu = !1, r = u(c, s), Iu = !1, ia && (r = Ph(
      n,
      u,
      c,
      s
    )), Pu(l), r;
  }
  function Pu(l) {
    A.H = Gr;
    var n = Je !== null && Je.next !== null;
    if (Ma = 0, pt = Je = ve = null, Hf = !1, ca = 0, fu = null, n) throw Error(z(300));
    l === null || Qt || (l = l.dependencies, l !== null && Af(l) && (Qt = !0));
  }
  function Ph(l, n, u, c) {
    ve = l;
    var s = 0;
    do {
      if (ia && (fu = null), ca = 0, ia = !1, 25 <= s) throw Error(z(301));
      if (s += 1, pt = Je = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      A.H = su, r = n(u, c);
    } while (ia);
    return r;
  }
  function N0() {
    var l = A.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Nf(n) : n, l = l.useState()[0], (Je !== null ? Je.memoizedState : null) !== l && (ve.flags |= 1024), n;
  }
  function Ar() {
    var l = $a !== 0;
    return $a = 0, l;
  }
  function no(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function zr(l) {
    if (Hf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Hf = !1;
    }
    Ma = 0, pt = Je = ve = null, ia = !1, ca = $a = 0, fu = null;
  }
  function gl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pt === null ? ve.memoizedState = pt = l : pt = pt.next = l, pt;
  }
  function Et() {
    if (Je === null) {
      var l = ve.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Je.next;
    var n = pt === null ? ve.memoizedState : pt.next;
    if (n !== null)
      pt = n, Je = l;
    else {
      if (l === null)
        throw ve.alternate === null ? Error(z(467)) : Error(z(310));
      Je = l, l = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, pt === null ? ve.memoizedState = pt = l : pt = pt.next = l;
    }
    return pt;
  }
  function Cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Nf(l) {
    var n = ca;
    return ca += 1, fu === null && (fu = []), l = Kh(fu, l, n), n = ve, (pt === null ? n.memoizedState : pt.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? hy : yy), l;
  }
  function Nt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Nf(l);
      if (l.$$typeof === Ut) return Wt(l);
    }
    throw Error(z(438, String(l)));
  }
  function Rr(l) {
    var n = null, u = ve.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = ve.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Cf(), ve.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = bt;
    return n.index++, u;
  }
  function Sn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Bf(l) {
    var n = Et();
    return Dr(n, Je, l);
  }
  function Dr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(z(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var m = y = null, g = null, M = n, G = !1;
      do {
        var X = M.lane & -536870913;
        if (X !== M.lane ? (He & X) === X : (Ma & X) === X) {
          var x = M.revertLane;
          if (x === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), X === Oa && (G = !0);
          else if ((Ma & x) === x) {
            M = M.next, x === Oa && (G = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, g === null ? (m = g = X, y = r) : g = g.next = X, ve.lanes |= x, mu |= x;
          X = M.action, Iu && u(r, X), r = M.hasEagerState ? M.eagerState : u(r, X);
        } else
          x = {
            lane: X,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, g === null ? (m = g = x, y = r) : g = g.next = x, ve.lanes |= X, mu |= X;
        M = M.next;
      } while (M !== null && M !== n);
      if (g === null ? y = r : g.next = m, !il(r, l.memoizedState) && (Qt = !0, G && (u = Xt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Or(l) {
    var n = Et(), u = n.queue;
    if (u === null) throw Error(z(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      il(r, n.memoizedState) || (Qt = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function qf(l, n, u) {
    var c = ve, s = Et(), r = je;
    if (r) {
      if (u === void 0) throw Error(z(407));
      u = u();
    } else u = n();
    var y = !il(
      (Je || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, Qt = !0), s = s.queue;
    var m = ty.bind(null, c, s, l);
    if (Fe(2048, 8, m, [l]), s.getSnapshot !== n || y || pt !== null && pt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Zl(
        9,
        jf(),
        ey.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), tt === null) throw Error(z(349));
      r || (Ma & 124) !== 0 || Mr(c, n, u);
    }
    return u;
  }
  function Mr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = ve.updateQueue, n === null ? (n = Cf(), ve.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ey(l, n, u, c) {
    n.value = u, n.getSnapshot = c, ly(n) && Ur(l);
  }
  function ty(l, n, u) {
    return u(function() {
      ly(n) && Ur(l);
    });
  }
  function ly(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !il(l, u);
    } catch {
      return !0;
    }
  }
  function Ur(l) {
    var n = hn(l, 2);
    n !== null && sa(n, l, 2);
  }
  function Yf(l) {
    var n = gl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Iu) {
        $n(!0);
        try {
          u();
        } finally {
          $n(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sn,
      lastRenderedState: l
    }, n;
  }
  function xr(l, n, u, c) {
    return l.baseState = u, Dr(
      l,
      Je,
      typeof c == "function" ? c : Sn
    );
  }
  function B0(l, n, u, c, s) {
    if (tc(l)) throw Error(z(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      A.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Hr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Hr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = A.T, y = {};
      A.T = y;
      try {
        var m = u(s, c), g = A.S;
        g !== null && g(y, m), _f(l, n, m);
      } catch (M) {
        Nr(l, n, M);
      } finally {
        A.T = r;
      }
    } else
      try {
        r = u(s, c), _f(l, n, r);
      } catch (M) {
        Nr(l, n, M);
      }
  }
  function _f(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Cr(l, n, c);
      },
      function(c) {
        return Nr(l, n, c);
      }
    ) : Cr(l, n, u);
  }
  function Cr(l, n, u) {
    n.status = "fulfilled", n.value = u, ay(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Hr(l, u)));
  }
  function Nr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ay(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ay(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Br(l, n) {
    return n;
  }
  function ny(l, n) {
    if (je) {
      var u = tt.formState;
      if (u !== null) {
        e: {
          var c = ve;
          if (je) {
            if (Xe) {
              t: {
                for (var s = Xe, r = Da; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Pa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Xe = Pa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            uu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = gl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Br,
      lastRenderedState: n
    }, u.queue = c, u = ry.bind(
      null,
      ve,
      c
    ), c.dispatch = u, c = Yf(!1), r = Xf.bind(
      null,
      ve,
      !1,
      c.queue
    ), c = gl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = B0.bind(
      null,
      ve,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Tn(l) {
    var n = Et();
    return qr(n, Je, l);
  }
  function qr(l, n, u) {
    if (n = Dr(
      l,
      n,
      Br
    )[0], l = Bf(Sn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Nf(n);
      } catch (y) {
        throw y === Fu ? Of : y;
      }
    else c = n;
    n = Et();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (ve.flags |= 2048, Zl(
      9,
      jf(),
      mv.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function mv(l, n) {
    l.action = n;
  }
  function Yr(l) {
    var n = Et(), u = Je;
    if (u !== null)
      return qr(n, u, l);
    Et(), n = n.memoizedState, u = Et();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Zl(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = ve.updateQueue, n === null && (n = Cf(), ve.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function jf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Gf() {
    return Et().memoizedState;
  }
  function ei(l, n, u, c) {
    var s = gl();
    c = c === void 0 ? null : c, ve.flags |= l, s.memoizedState = Zl(
      1 | n,
      jf(),
      u,
      c
    );
  }
  function Fe(l, n, u, c) {
    var s = Et();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Je !== null && c !== null && Tr(c, Je.memoizedState.deps) ? s.memoizedState = Zl(n, r, u, c) : (ve.flags |= l, s.memoizedState = Zl(
      1 | n,
      r,
      u,
      c
    ));
  }
  function q0(l, n) {
    ei(8390656, 8, l, n);
  }
  function Y0(l, n) {
    Fe(2048, 8, l, n);
  }
  function uy(l, n) {
    return Fe(4, 2, l, n);
  }
  function Wa(l, n) {
    return Fe(4, 4, l, n);
  }
  function iy(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function _r(l, n, u) {
    u = u != null ? u.concat([l]) : null, Fe(4, 4, iy.bind(null, n, l), u);
  }
  function Ii() {
  }
  function Pi(l, n) {
    var u = Et();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Tr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function cy(l, n) {
    var u = Et();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Tr(n, c[1]))
      return c[0];
    if (c = l(), Iu) {
      $n(!0);
      try {
        l();
      } finally {
        $n(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Vf(l, n, u) {
    return u === void 0 || (Ma & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = wy(), ve.lanes |= l, mu |= l, u);
  }
  function oy(l, n, u, c) {
    return il(u, n) ? u : Fi.current !== null ? (l = Vf(l, u, c), il(l, n) || (Qt = !0), l) : (Ma & 42) === 0 ? (Qt = !0, l.memoizedState = u) : (l = wy(), ve.lanes |= l, mu |= l, n);
  }
  function _0(l, n, u, c, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var y = A.T, m = {};
    A.T = m, Xf(l, !1, n, u);
    try {
      var g = s(), M = A.S;
      if (M !== null && M(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var G = C0(
          g,
          c
        );
        ec(
          l,
          n,
          G,
          fa(l)
        );
      } else
        ec(
          l,
          n,
          c,
          fa(l)
        );
    } catch (X) {
      ec(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        fa()
      );
    } finally {
      Q.p = r, A.T = y;
    }
  }
  function pv() {
  }
  function jr(l, n, u, c) {
    if (l.tag !== 5) throw Error(z(476));
    var s = j0(l).queue;
    _0(
      l,
      s,
      n,
      L,
      u === null ? pv : function() {
        return uo(l), u(c);
      }
    );
  }
  function j0(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: L
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function uo(l) {
    var n = j0(l).next.queue;
    ec(l, n, {}, fa());
  }
  function Ua() {
    return Wt(Pl);
  }
  function fy() {
    return Et().memoizedState;
  }
  function G0() {
    return Et().memoizedState;
  }
  function V0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = fa();
          l = Ll(u);
          var c = bn(n, l, u);
          c !== null && (sa(c, n, u), Wi(c, n, u)), n = { cache: eo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function sy(l, n, u) {
    var c = fa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tc(l) ? X0(n, u) : (u = Lc(l, n, u, c), u !== null && (sa(u, l, c), dy(u, n, c)));
  }
  function ry(l, n, u) {
    var c = fa();
    ec(l, n, u, c);
  }
  function ec(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (tc(l)) X0(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, m = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = m, il(m, y))
            return Ju(l, n, s, 0), tt === null && Za(), !1;
        } catch {
        } finally {
        }
      if (u = Lc(l, n, s, c), u !== null)
        return sa(u, l, c), dy(u, n, c), !0;
    }
    return !1;
  }
  function Xf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: mc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tc(l)) {
      if (n) throw Error(z(479));
    } else
      n = Lc(
        l,
        u,
        c,
        2
      ), n !== null && sa(n, l, 2);
  }
  function tc(l) {
    var n = l.alternate;
    return l === ve || n !== null && n === ve;
  }
  function X0(l, n) {
    ia = Hf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function dy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Po(l, u);
    }
  }
  var Gr = {
    readContext: Wt,
    use: Nt,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useLayoutEffect: vt,
    useInsertionEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useSyncExternalStore: vt,
    useId: vt,
    useHostTransitionStatus: vt,
    useFormState: vt,
    useActionState: vt,
    useOptimistic: vt,
    useMemoCache: vt,
    useCacheRefresh: vt
  }, hy = {
    readContext: Wt,
    use: Nt,
    useCallback: function(l, n) {
      return gl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Wt,
    useEffect: q0,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ei(
        4194308,
        4,
        iy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return ei(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      ei(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = gl();
      n = n === void 0 ? null : n;
      var c = l();
      if (Iu) {
        $n(!0);
        try {
          l();
        } finally {
          $n(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = gl();
      if (u !== void 0) {
        var s = u(n);
        if (Iu) {
          $n(!0);
          try {
            u(n);
          } finally {
            $n(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = sy.bind(
        null,
        ve,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = gl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Yf(l);
      var n = l.queue, u = ry.bind(null, ve, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, n) {
      var u = gl();
      return Vf(u, l, n);
    },
    useTransition: function() {
      var l = Yf(!1);
      return l = _0.bind(
        null,
        ve,
        l.queue,
        !0,
        !1
      ), gl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = ve, s = gl();
      if (je) {
        if (u === void 0)
          throw Error(z(407));
        u = u();
      } else {
        if (u = n(), tt === null)
          throw Error(z(349));
        (He & 124) !== 0 || Mr(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, q0(ty.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Zl(
        9,
        jf(),
        ey.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = gl(), n = tt.identifierPrefix;
      if (je) {
        var u = Tt, c = Ka;
        u = (c & ~(1 << 32 - Gl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = $a++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = Ih++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ua,
    useFormState: ny,
    useActionState: ny,
    useOptimistic: function(l) {
      var n = gl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Xf.bind(
        null,
        ve,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return gl().memoizedState = V0.bind(
        null,
        ve
      );
    }
  }, yy = {
    readContext: Wt,
    use: Nt,
    useCallback: Pi,
    useContext: Wt,
    useEffect: Y0,
    useImperativeHandle: _r,
    useInsertionEffect: uy,
    useLayoutEffect: Wa,
    useMemo: cy,
    useReducer: Bf,
    useRef: Gf,
    useState: function() {
      return Bf(Sn);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, n) {
      var u = Et();
      return oy(
        u,
        Je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Bf(Sn)[0], n = Et().memoizedState;
      return [
        typeof l == "boolean" ? l : Nf(l),
        n
      ];
    },
    useSyncExternalStore: qf,
    useId: fy,
    useHostTransitionStatus: Ua,
    useFormState: Tn,
    useActionState: Tn,
    useOptimistic: function(l, n) {
      var u = Et();
      return xr(u, Je, l, n);
    },
    useMemoCache: Rr,
    useCacheRefresh: G0
  }, su = {
    readContext: Wt,
    use: Nt,
    useCallback: Pi,
    useContext: Wt,
    useEffect: Y0,
    useImperativeHandle: _r,
    useInsertionEffect: uy,
    useLayoutEffect: Wa,
    useMemo: cy,
    useReducer: Or,
    useRef: Gf,
    useState: function() {
      return Or(Sn);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, n) {
      var u = Et();
      return Je === null ? Vf(u, l, n) : oy(
        u,
        Je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Or(Sn)[0], n = Et().memoizedState;
      return [
        typeof l == "boolean" ? l : Nf(l),
        n
      ];
    },
    useSyncExternalStore: qf,
    useId: fy,
    useHostTransitionStatus: Ua,
    useFormState: Yr,
    useActionState: Yr,
    useOptimistic: function(l, n) {
      var u = Et();
      return Je !== null ? xr(u, Je, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: G0
  }, lc = null, io = 0;
  function Vr(l) {
    var n = io;
    return io += 1, lc === null && (lc = []), Kh(lc, l, n);
  }
  function ac(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function bl(l, n) {
    throw n.$$typeof === lt ? Error(z(525)) : (l = Object.prototype.toString.call(n), Error(
      z(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function my(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Jl(l) {
    function n(R, E) {
      if (l) {
        var O = R.deletions;
        O === null ? (R.deletions = [E], R.flags |= 16) : O.push(E);
      }
    }
    function u(R, E) {
      if (!l) return null;
      for (; E !== null; )
        n(R, E), E = E.sibling;
      return null;
    }
    function c(R) {
      for (var E = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? E.set(R.key, R) : E.set(R.index, R), R = R.sibling;
      return E;
    }
    function s(R, E) {
      return R = Ja(R, E), R.index = 0, R.sibling = null, R;
    }
    function r(R, E, O) {
      return R.index = O, l ? (O = R.alternate, O !== null ? (O = O.index, O < E ? (R.flags |= 67108866, E) : O) : (R.flags |= 67108866, E)) : (R.flags |= 1048576, E);
    }
    function y(R) {
      return l && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, E, O, V) {
      return E === null || E.tag !== 6 ? (E = Kc(O, R.mode, V), E.return = R, E) : (E = s(E, O), E.return = R, E);
    }
    function g(R, E, O, V) {
      var F = O.type;
      return F === yt ? G(
        R,
        E,
        O.props.children,
        V,
        O.key
      ) : E !== null && (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Jt && my(F) === E.type) ? (E = s(E, O.props), ac(E, O), E.return = R, E) : (E = w(
        O.type,
        O.key,
        O.props,
        null,
        R.mode,
        V
      ), ac(E, O), E.return = R, E);
    }
    function M(R, E, O, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== O.containerInfo || E.stateNode.implementation !== O.implementation ? (E = mt(O, R.mode, V), E.return = R, E) : (E = s(E, O.children || []), E.return = R, E);
    }
    function G(R, E, O, V, F) {
      return E === null || E.tag !== 7 ? (E = Aa(
        O,
        R.mode,
        V,
        F
      ), E.return = R, E) : (E = s(E, O), E.return = R, E);
    }
    function X(R, E, O) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Kc(
          "" + E,
          R.mode,
          O
        ), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ee:
            return O = w(
              E.type,
              E.key,
              E.props,
              null,
              R.mode,
              O
            ), ac(O, E), O.return = R, O;
          case gt:
            return E = mt(
              E,
              R.mode,
              O
            ), E.return = R, E;
          case Jt:
            var V = E._init;
            return E = V(E._payload), X(R, E, O);
        }
        if (_t(E) || pe(E))
          return E = Aa(
            E,
            R.mode,
            O,
            null
          ), E.return = R, E;
        if (typeof E.then == "function")
          return X(R, Vr(E), O);
        if (E.$$typeof === Ut)
          return X(
            R,
            zf(R, E),
            O
          );
        bl(R, E);
      }
      return null;
    }
    function x(R, E, O, V) {
      var F = E !== null ? E.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return F !== null ? null : m(R, E, "" + O, V);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Ee:
            return O.key === F ? g(R, E, O, V) : null;
          case gt:
            return O.key === F ? M(R, E, O, V) : null;
          case Jt:
            return F = O._init, O = F(O._payload), x(R, E, O, V);
        }
        if (_t(O) || pe(O))
          return F !== null ? null : G(R, E, O, V, null);
        if (typeof O.then == "function")
          return x(
            R,
            E,
            Vr(O),
            V
          );
        if (O.$$typeof === Ut)
          return x(
            R,
            E,
            zf(R, O),
            V
          );
        bl(R, O);
      }
      return null;
    }
    function C(R, E, O, V, F) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return R = R.get(O) || null, m(E, R, "" + V, F);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Ee:
            return R = R.get(
              V.key === null ? O : V.key
            ) || null, g(E, R, V, F);
          case gt:
            return R = R.get(
              V.key === null ? O : V.key
            ) || null, M(E, R, V, F);
          case Jt:
            var Re = V._init;
            return V = Re(V._payload), C(
              R,
              E,
              O,
              V,
              F
            );
        }
        if (_t(V) || pe(V))
          return R = R.get(O) || null, G(E, R, V, F, null);
        if (typeof V.then == "function")
          return C(
            R,
            E,
            O,
            Vr(V),
            F
          );
        if (V.$$typeof === Ut)
          return C(
            R,
            E,
            O,
            zf(E, V),
            F
          );
        bl(E, V);
      }
      return null;
    }
    function ue(R, E, O, V) {
      for (var F = null, Re = null, ae = E, se = E = 0, el = null; ae !== null && se < O.length; se++) {
        ae.index > se ? (el = ae, ae = null) : el = ae.sibling;
        var _e = x(
          R,
          ae,
          O[se],
          V
        );
        if (_e === null) {
          ae === null && (ae = el);
          break;
        }
        l && ae && _e.alternate === null && n(R, ae), E = r(_e, E, se), Re === null ? F = _e : Re.sibling = _e, Re = _e, ae = el;
      }
      if (se === O.length)
        return u(R, ae), je && qe(R, se), F;
      if (ae === null) {
        for (; se < O.length; se++)
          ae = X(R, O[se], V), ae !== null && (E = r(
            ae,
            E,
            se
          ), Re === null ? F = ae : Re.sibling = ae, Re = ae);
        return je && qe(R, se), F;
      }
      for (ae = c(ae); se < O.length; se++)
        el = C(
          ae,
          R,
          se,
          O[se],
          V
        ), el !== null && (l && el.alternate !== null && ae.delete(
          el.key === null ? se : el.key
        ), E = r(
          el,
          E,
          se
        ), Re === null ? F = el : Re.sibling = el, Re = el);
      return l && ae.forEach(function(gi) {
        return n(R, gi);
      }), je && qe(R, se), F;
    }
    function ie(R, E, O, V) {
      if (O == null) throw Error(z(151));
      for (var F = null, Re = null, ae = E, se = E = 0, el = null, _e = O.next(); ae !== null && !_e.done; se++, _e = O.next()) {
        ae.index > se ? (el = ae, ae = null) : el = ae.sibling;
        var gi = x(R, ae, _e.value, V);
        if (gi === null) {
          ae === null && (ae = el);
          break;
        }
        l && ae && gi.alternate === null && n(R, ae), E = r(gi, E, se), Re === null ? F = gi : Re.sibling = gi, Re = gi, ae = el;
      }
      if (_e.done)
        return u(R, ae), je && qe(R, se), F;
      if (ae === null) {
        for (; !_e.done; se++, _e = O.next())
          _e = X(R, _e.value, V), _e !== null && (E = r(_e, E, se), Re === null ? F = _e : Re.sibling = _e, Re = _e);
        return je && qe(R, se), F;
      }
      for (ae = c(ae); !_e.done; se++, _e = O.next())
        _e = C(ae, R, se, _e.value, V), _e !== null && (l && _e.alternate !== null && ae.delete(_e.key === null ? se : _e.key), E = r(_e, E, se), Re === null ? F = _e : Re.sibling = _e, Re = _e);
      return l && ae.forEach(function(Mv) {
        return n(R, Mv);
      }), je && qe(R, se), F;
    }
    function we(R, E, O, V) {
      if (typeof O == "object" && O !== null && O.type === yt && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Ee:
            e: {
              for (var F = O.key; E !== null; ) {
                if (E.key === F) {
                  if (F = O.type, F === yt) {
                    if (E.tag === 7) {
                      u(
                        R,
                        E.sibling
                      ), V = s(
                        E,
                        O.props.children
                      ), V.return = R, R = V;
                      break e;
                    }
                  } else if (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Jt && my(F) === E.type) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, O.props), ac(V, O), V.return = R, R = V;
                    break e;
                  }
                  u(R, E);
                  break;
                } else n(R, E);
                E = E.sibling;
              }
              O.type === yt ? (V = Aa(
                O.props.children,
                R.mode,
                V,
                O.key
              ), V.return = R, R = V) : (V = w(
                O.type,
                O.key,
                O.props,
                null,
                R.mode,
                V
              ), ac(V, O), V.return = R, R = V);
            }
            return y(R);
          case gt:
            e: {
              for (F = O.key; E !== null; ) {
                if (E.key === F)
                  if (E.tag === 4 && E.stateNode.containerInfo === O.containerInfo && E.stateNode.implementation === O.implementation) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, O.children || []), V.return = R, R = V;
                    break e;
                  } else {
                    u(R, E);
                    break;
                  }
                else n(R, E);
                E = E.sibling;
              }
              V = mt(O, R.mode, V), V.return = R, R = V;
            }
            return y(R);
          case Jt:
            return F = O._init, O = F(O._payload), we(
              R,
              E,
              O,
              V
            );
        }
        if (_t(O))
          return ue(
            R,
            E,
            O,
            V
          );
        if (pe(O)) {
          if (F = pe(O), typeof F != "function") throw Error(z(150));
          return O = F.call(O), ie(
            R,
            E,
            O,
            V
          );
        }
        if (typeof O.then == "function")
          return we(
            R,
            E,
            Vr(O),
            V
          );
        if (O.$$typeof === Ut)
          return we(
            R,
            E,
            zf(R, O),
            V
          );
        bl(R, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, E !== null && E.tag === 6 ? (u(R, E.sibling), V = s(E, O), V.return = R, R = V) : (u(R, E), V = Kc(O, R.mode, V), V.return = R, R = V), y(R)) : u(R, E);
    }
    return function(R, E, O, V) {
      try {
        io = 0;
        var F = we(
          R,
          E,
          O,
          V
        );
        return lc = null, F;
      } catch (ae) {
        if (ae === Fu || ae === Of) throw ae;
        var Re = Ql(29, ae, null, R.mode);
        return Re.lanes = V, Re.return = R, Re;
      } finally {
      }
    };
  }
  var nc = Jl(!0), En = Jl(!1), oa = te(null), Sl = null;
  function ru(l) {
    var n = l.alternate;
    oe(Ie, Ie.current & 1), oe(oa, l), Sl === null && (n === null || Fi.current !== null || n.memoizedState !== null) && (Sl = l);
  }
  function An(l) {
    if (l.tag === 22) {
      if (oe(Ie, Ie.current), oe(oa, l), Sl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Sl = l);
      }
    } else zn();
  }
  function zn() {
    oe(Ie, Ie.current), oe(oa, oa.current);
  }
  function Fa(l) {
    $(oa), Sl === l && (Sl = null), $(Ie);
  }
  var Ie = te(0);
  function Qf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || rs(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ti(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Ge({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Xr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = fa(), s = Ll(c);
      s.payload = n, u != null && (s.callback = u), n = bn(l, s, c), n !== null && (sa(n, l, c), Wi(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = fa(), s = Ll(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = bn(l, s, c), n !== null && (sa(n, l, c), Wi(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = fa(), c = Ll(u);
      c.tag = 2, n != null && (c.callback = n), n = bn(l, c, u), n !== null && (sa(n, l, u), Wi(n, l, u));
    }
  };
  function co(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !Qu(u, c) || !Qu(s, r) : !0;
  }
  function uc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Xr.enqueueReplaceState(n, n.state, null);
  }
  function li(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Ge({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var wf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function oo(l) {
    wf(l);
  }
  function py(l) {
    console.error(l);
  }
  function Lf(l) {
    wf(l);
  }
  function Zf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function vy(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function gy(l, n, u) {
    return u = Ll(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Zf(l, n);
    }, u;
  }
  function by(l) {
    return l = Ll(l), l.tag = 3, l;
  }
  function Kl(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        vy(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      vy(n, u, c), typeof s != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([this]) : ii.add(this));
      var m = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function Q0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Ic(
        n,
        u,
        s,
        !0
      ), u = oa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Sl === null ? yc() : u.alternate === null && Dt === 0 && (Dt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === pr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), hd(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === pr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), hd(l, c, s)), !1;
        }
        throw Error(z(435, u.tag));
      }
      return hd(l, c, s), yc(), !1;
    }
    if (je)
      return n = oa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Ki && (l = Error(z(422), { cause: c }), Fc(ua(l, u)))) : (c !== Ki && (n = Error(z(423), {
        cause: c
      }), Fc(
        ua(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = ua(c, u), s = gy(
        l.stateNode,
        c,
        s
      ), Wh(l, s), Dt !== 4 && (Dt = 2)), !1;
    var r = Error(z(520), { cause: c });
    if (r = ua(r, u), po === null ? po = [r] : po.push(r), Dt !== 4 && (Dt = 2), n === null) return !0;
    c = ua(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = gy(u.stateNode, c, l), Wh(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ii === null || !ii.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = by(s), Kl(
              s,
              l,
              u,
              c
            ), Wh(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var At = Error(z(461)), Qt = !1;
  function It(l, n, u, c) {
    n.child = l === null ? En(n, null, u, c) : nc(
      n,
      l.child,
      u,
      c
    );
  }
  function w0(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var m in c)
        m !== "ref" && (y[m] = c[m]);
    } else y = c;
    return $u(n), c = Er(
      l,
      n,
      u,
      y,
      r,
      s
    ), m = Ar(), l !== null && !Qt ? (no(l, n, s), Rn(l, n, s)) : (je && m && Ji(n), n.flags |= 1, It(l, n, c, s), n.child);
  }
  function du(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !bf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, ic(
        l,
        n,
        r,
        c,
        s
      )) : (l = w(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Fr(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Qu, u(y, c) && l.ref === n.ref)
        return Rn(l, n, s);
    }
    return n.flags |= 1, l = Ja(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function ic(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Qu(r, c) && l.ref === n.ref)
        if (Qt = !1, n.pendingProps = c = r, Fr(l, s))
          (l.flags & 131072) !== 0 && (Qt = !0);
        else
          return n.lanes = l.lanes, Rn(l, n, s);
    }
    return wr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Qr(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return cc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ki(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Ft(n, r) : lo(), An(n);
      else
        return n.lanes = n.childLanes = 536870912, cc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (ki(n, r.cachePool), Ft(n, r), zn(), n.memoizedState = null) : (l !== null && ki(n, null), lo(), zn());
    return It(l, n, s, u), n.child;
  }
  function cc(l, n, u, c) {
    var s = Df();
    return s = s === null ? null : { parent: Vt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && ki(n, null), lo(), An(n), l !== null && Ic(l, n, c, !0), null;
  }
  function Jf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(z(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function wr(l, n, u, c, s) {
    return $u(n), u = Er(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Ar(), l !== null && !Qt ? (no(l, n, s), Rn(l, n, s)) : (je && c && Ji(n), n.flags |= 1, It(l, n, u, s), n.child);
  }
  function Sy(l, n, u, c, s, r) {
    return $u(n), n.updateQueue = null, u = Ph(
      n,
      c,
      u,
      s
    ), Pu(l), c = Ar(), l !== null && !Qt ? (no(l, n, r), Rn(l, n, r)) : (je && c && Ji(n), n.flags |= 1, It(l, n, u, r), n.child);
  }
  function Lr(l, n, u, c, s) {
    if ($u(n), n.stateNode === null) {
      var r = Jc, y = u.contextType;
      typeof y == "object" && y !== null && (r = Wt(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, gr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? Wt(y) : Jc, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (ti(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Xr.enqueueReplaceState(r, r.state, null), ou(n, c, r, s), to(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var m = n.memoizedProps, g = li(u, m);
      r.props = g;
      var M = r.context, G = u.contextType;
      y = Jc, typeof G == "object" && G !== null && (y = Wt(G));
      var X = u.getDerivedStateFromProps;
      G = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = n.pendingProps !== m, G || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || M !== y) && uc(
        n,
        r,
        c,
        y
      ), gn = !1;
      var x = n.memoizedState;
      r.state = x, ou(n, c, r, s), to(), M = n.memoizedState, m || x !== M || gn ? (typeof X == "function" && (ti(
        n,
        u,
        X,
        c
      ), M = n.memoizedState), (g = gn || co(
        n,
        u,
        g,
        c,
        x,
        M,
        y
      )) ? (G || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = M), r.props = c, r.state = M, r.context = y, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, br(l, n), y = n.memoizedProps, G = li(u, y), r.props = G, X = n.pendingProps, x = r.context, M = u.contextType, g = Jc, typeof M == "object" && M !== null && (g = Wt(M)), m = u.getDerivedStateFromProps, (M = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== X || x !== g) && uc(
        n,
        r,
        c,
        g
      ), gn = !1, x = n.memoizedState, r.state = x, ou(n, c, r, s), to();
      var C = n.memoizedState;
      y !== X || x !== C || gn || l !== null && l.dependencies !== null && Af(l.dependencies) ? (typeof m == "function" && (ti(
        n,
        u,
        m,
        c
      ), C = n.memoizedState), (G = gn || co(
        n,
        u,
        G,
        c,
        x,
        C,
        g
      ) || l !== null && l.dependencies !== null && Af(l.dependencies)) ? (M || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, C, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        C,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = C), r.props = c, r.state = C, r.context = g, c = G) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Jf(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = nc(
      n,
      l.child,
      null,
      s
    ), n.child = nc(
      n,
      null,
      u,
      s
    )) : It(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Rn(
      l,
      n,
      s
    ), l;
  }
  function Zr(l, n, u, c) {
    return Wc(), n.flags |= 256, It(l, n, u, c), n.child;
  }
  var Jr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ty(l) {
    return { baseLanes: l, cachePool: yr() };
  }
  function Ey(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ca), l;
  }
  function Ay(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (Ie.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (je) {
        if (s ? ru(n) : zn(), je) {
          var m = Xe, g;
          if (g = m) {
            e: {
              for (g = m, m = Da; g.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (g = Pa(
                  g.nextSibling
                ), g === null) {
                  m = null;
                  break e;
                }
              }
              m = g;
            }
            m !== null ? (n.memoizedState = {
              dehydrated: m,
              treeContext: nu !== null ? { id: Ka, overflow: Tt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = Ql(
              18,
              null,
              null,
              0
            ), g.stateNode = m, g.return = n, n.child = g, Ht = n, Xe = null, g = !0) : g = !1;
          }
          g || uu(n);
        }
        if (m = n.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return rs(m) ? n.lanes = 32 : n.lanes = 536870912, null;
        Fa(n);
      }
      return m = c.children, c = c.fallback, s ? (zn(), s = n.mode, m = kr(
        { mode: "hidden", children: m },
        s
      ), c = Aa(
        c,
        s,
        u,
        null
      ), m.return = n, c.return = n, m.sibling = c, n.child = m, s = n.child, s.memoizedState = Ty(u), s.childLanes = Ey(
        l,
        y,
        u
      ), n.memoizedState = Jr, c) : (ru(n), Kr(n, m));
    }
    if (g = l.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
      if (r)
        n.flags & 256 ? (ru(n), n.flags &= -257, n = ai(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (zn(), n.child = l.child, n.flags |= 128, n = null) : (zn(), s = c.fallback, m = n.mode, c = kr(
          { mode: "visible", children: c.children },
          m
        ), s = Aa(
          s,
          m,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, nc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Ty(u), c.childLanes = Ey(
          l,
          y,
          u
        ), n.memoizedState = Jr, n = s);
      else if (ru(n), rs(m)) {
        if (y = m.nextSibling && m.nextSibling.dataset, y) var M = y.dgst;
        y = M, c = Error(z(419)), c.stack = "", c.digest = y, Fc({ value: c, source: null, stack: null }), n = ai(
          l,
          n,
          u
        );
      } else if (Qt || Ic(l, n, u, !1), y = (u & l.childLanes) !== 0, Qt || y) {
        if (y = tt, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Ga(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== g.retryLane))
          throw g.retryLane = c, hn(l, c), sa(y, l, c), At;
        m.data === "$?" || yc(), n = ai(
          l,
          n,
          u
        );
      } else
        m.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = g.treeContext, Xe = Pa(
          m.nextSibling
        ), Ht = n, je = !0, Ra = null, Da = !1, l !== null && (za[wl++] = Ka, za[wl++] = Tt, za[wl++] = nu, Ka = l.id, Tt = l.overflow, nu = n), n = Kr(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (zn(), s = c.fallback, m = n.mode, g = l.child, M = g.sibling, c = Ja(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 65011712, M !== null ? s = Ja(M, s) : (s = Aa(
      s,
      m,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, m = l.child.memoizedState, m === null ? m = Ty(u) : (g = m.cachePool, g !== null ? (M = Vt._currentValue, g = g.parent !== M ? { parent: M, pool: M } : g) : g = yr(), m = {
      baseLanes: m.baseLanes | u,
      cachePool: g
    }), s.memoizedState = m, s.childLanes = Ey(
      l,
      y,
      u
    ), n.memoizedState = Jr, c) : (ru(n), u = l.child, l = u.sibling, u = Ja(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Kr(l, n) {
    return n = kr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function kr(l, n) {
    return l = Ql(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function ai(l, n, u) {
    return nc(n, l.child, null, u), l = Kr(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Kf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), fr(l.return, n, u);
  }
  function $r(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function Wr(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (It(l, n, c.children, u), c = Ie.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Kf(l, u, n);
          else if (l.tag === 19)
            Kf(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (oe(Ie, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Qf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), $r(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Qf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        $r(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        $r(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Rn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), mu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Ic(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(z(153));
    if (n.child !== null) {
      for (l = n.child, u = Ja(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ja(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Fr(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Af(l)));
  }
  function L0(l, n, u) {
    switch (n.tag) {
      case 3:
        St(n, n.stateNode.containerInfo), cu(n, Vt, l.memoizedState.cache), Wc();
        break;
      case 27:
      case 5:
        ba(n);
        break;
      case 4:
        St(n, n.stateNode.containerInfo);
        break;
      case 10:
        cu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (ru(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ay(l, n, u) : (ru(n), l = Rn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        ru(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Ic(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Wr(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), oe(Ie, Ie.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Qr(l, n, u);
      case 24:
        cu(n, Vt, l.memoizedState.cache);
    }
    return Rn(l, n, u);
  }
  function Z0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Qt = !0;
      else {
        if (!Fr(l, u) && (n.flags & 128) === 0)
          return Qt = !1, L0(
            l,
            n,
            u
          );
        Qt = (l.flags & 131072) !== 0;
      }
    else
      Qt = !1, je && (n.flags & 1048576) !== 0 && or(n, kc, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            bf(c) ? (l = li(c, l), n.tag = 1, n = Lr(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = wr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === pl) {
                n.tag = 11, n = w0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Ve) {
                n.tag = 14, n = du(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Rl(c) || c, Error(z(306, n, ""));
          }
        }
        return n;
      case 0:
        return wr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = li(
          c,
          n.pendingProps
        ), Lr(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (St(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(z(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, br(l, n), ou(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, cu(n, Vt, c), c !== r.cache && Zh(
            n,
            [Vt],
            u,
            !0
          ), to(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Zr(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = ua(
                Error(z(424)),
                n
              ), Fc(s), n = Zr(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Xe = Pa(l.firstChild), Ht = n, je = !0, Ra = null, Da = !0, u = En(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Wc(), c === s) {
              n = Rn(
                l,
                n,
                u
              );
              break e;
            }
            It(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Jf(l, n), l === null ? (u = cp(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : je || (u = n.type, l = n.pendingProps, c = Ba(
          Be.current
        ).createElement(u), c[$t] = n, c[Ol] = l, re(c, u, l), Gt(c), n.stateNode = c) : n.memoizedState = cp(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ba(n), l === null && je && (c = n.stateNode = W(
          n.type,
          n.pendingProps,
          Be.current
        ), Ht = n, Da = !0, s = Xe, di(n.type) ? (hi = s, Xe = Pa(
          c.firstChild
        )) : Xe = s), It(
          l,
          n,
          n.pendingProps.children,
          u
        ), Jf(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && je && ((s = c = Xe) && (c = Mo(
          c,
          n.type,
          n.pendingProps,
          Da
        ), c !== null ? (n.stateNode = c, Ht = n, Xe = Pa(
          c.firstChild
        ), Da = !1, s = !0) : s = !1), s || uu(n)), ba(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, Bn(s, r) ? c = null : y !== null && Bn(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Er(
          l,
          n,
          N0,
          null,
          null,
          u
        ), Pl._currentValue = s), Jf(l, n), It(l, n, c, u), n.child;
      case 6:
        return l === null && je && ((l = u = Xe) && (u = Rv(
          u,
          n.pendingProps,
          Da
        ), u !== null ? (n.stateNode = u, Ht = n, Xe = null, l = !0) : l = !1), l || uu(n)), null;
      case 13:
        return Ay(l, n, u);
      case 4:
        return St(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = nc(
          n,
          null,
          c,
          u
        ) : It(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return w0(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return It(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return It(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return It(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, cu(n, n.type, c.value), It(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, $u(n), s = Wt(s), c = c(s), n.flags |= 1, It(l, n, c, u), n.child;
      case 14:
        return du(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return ic(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Wr(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = kr(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Ja(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Qr(l, n, u);
      case 24:
        return $u(n), c = Wt(Vt), l === null ? (s = Df(), s === null && (s = tt, r = eo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, gr(n), cu(n, Vt, s)) : ((l.lanes & u) !== 0 && (br(l, n), ou(n, null, null, u), to()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), cu(n, Vt, c)) : (c = r.cache, cu(n, Vt, c), c !== s.cache && Zh(
          n,
          [Vt],
          u,
          !0
        ))), It(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(z(156, n.tag));
  }
  function Dn(l) {
    l.flags |= 4;
  }
  function fo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !im(n)) {
      if (n = oa.current, n !== null && ((He & 4194048) === He ? Sl !== null : (He & 62914560) !== He && (He & 536870912) === 0 || n !== Sl))
        throw $i = pr, mr;
      l.flags |= 8192;
    }
  }
  function kf(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Di() : 536870912, l.lanes |= n, mo |= n);
  }
  function so(l, n) {
    if (!je)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function fe(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function zy(l, n, u) {
    var c = n.pendingProps;
    switch (yn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return fe(n), null;
      case 1:
        return fe(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), mn(Vt), al(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && ($c(n) ? Dn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Lh())), fe(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Dn(n), u !== null ? (fe(n), fo(n, u)) : (fe(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Dn(n), fe(n), fo(n, u)) : (fe(n), n.flags &= -16777217) : (l.memoizedProps !== c && Dn(n), fe(n), n.flags &= -16777217), null;
      case 27:
        Ai(n), u = Be.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(z(166));
            return fe(n), null;
          }
          l = Oe.current, $c(n) ? Tf(n) : (l = W(s, c, u), n.stateNode = l, Dn(n));
        }
        return fe(n), null;
      case 5:
        if (Ai(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(z(166));
            return fe(n), null;
          }
          if (l = Oe.current, $c(n))
            Tf(n);
          else {
            switch (s = Ba(
              Be.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[$t] = n, l[Ol] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (re(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Dn(n);
          }
        }
        return fe(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(z(166));
          if (l = Be.current, $c(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Ht, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[$t] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || lm(l.nodeValue, u)), l || uu(n);
          } else
            l = Ba(l).createTextNode(
              c
            ), l[$t] = n, n.stateNode = l;
        }
        return fe(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = $c(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(z(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(z(317));
              s[$t] = n;
            } else
              Wc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            fe(n), s = !1;
          } else
            s = Lh(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Fa(n), n) : (Fa(n), null);
        }
        if (Fa(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), kf(n, n.updateQueue), fe(n), null;
      case 4:
        return al(), l === null && em(n.stateNode.containerInfo), fe(n), null;
      case 10:
        return mn(n.type), fe(n), null;
      case 19:
        if ($(Ie), s = n.memoizedState, s === null) return fe(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) so(s, !1);
          else {
            if (Dt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Qf(l), r !== null) {
                  for (n.flags |= 128, so(s, !1), l = r.updateQueue, n.updateQueue = l, kf(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    ze(u, l), u = u.sibling;
                  return oe(
                    Ie,
                    Ie.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && ta() > id && (n.flags |= 128, c = !0, so(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Qf(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, kf(n, l), so(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !je)
                return fe(n), null;
            } else
              2 * ta() - s.renderingStartTime > id && u !== 536870912 && (n.flags |= 128, c = !0, so(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = ta(), n.sibling = null, l = Ie.current, oe(Ie, c ? l & 1 | 2 : l & 1), n) : (fe(n), null);
      case 22:
      case 23:
        return Fa(n), ao(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (fe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : fe(n), u = n.updateQueue, u !== null && kf(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && $(vn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), mn(Vt), fe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(z(156, n.tag));
  }
  function vv(l, n) {
    switch (yn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return mn(Vt), al(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ai(n), null;
      case 13:
        if (Fa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(z(340));
          Wc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return $(Ie), null;
      case 4:
        return al(), null;
      case 10:
        return mn(n.type), null;
      case 22:
      case 23:
        return Fa(n), ao(), l !== null && $(vn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return mn(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ry(l, n) {
    switch (yn(n), n.tag) {
      case 3:
        mn(Vt), al();
        break;
      case 26:
      case 27:
      case 5:
        Ai(n);
        break;
      case 4:
        al();
        break;
      case 13:
        Fa(n);
        break;
      case 19:
        $(Ie);
        break;
      case 10:
        mn(n.type);
        break;
      case 22:
      case 23:
        Fa(n), ao(), l !== null && $(vn);
        break;
      case 24:
        mn(Vt);
    }
  }
  function $f(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (m) {
      $e(n, n.return, m);
    }
  }
  function ni(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, m = y.destroy;
            if (m !== void 0) {
              y.destroy = void 0, s = n;
              var g = u, M = m;
              try {
                M();
              } catch (G) {
                $e(
                  s,
                  g,
                  G
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (G) {
      $e(n, n.return, G);
    }
  }
  function Ir(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Uf(n, u);
      } catch (c) {
        $e(l, l.return, c);
      }
    }
  }
  function Dy(l, n, u) {
    u.props = li(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      $e(l, n, c);
    }
  }
  function ro(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      $e(l, n, s);
    }
  }
  function Ia(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          $e(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          $e(l, n, s);
        }
      else u.current = null;
  }
  function ho(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      $e(l, l.return, s);
    }
  }
  function Oy(l, n, u) {
    try {
      var c = l.stateNode;
      Ev(c, l.type, u, n), c[Ol] = n;
    } catch (s) {
      $e(l, l.return, s);
    }
  }
  function J0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && di(l.type) || l.tag === 4;
  }
  function xa(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || J0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && di(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = gd));
    else if (c !== 4 && (c === 27 && di(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (oc(l, n, u), l = l.sibling; l !== null; )
        oc(l, n, u), l = l.sibling;
  }
  function Pr(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && di(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Pr(l, n, u), l = l.sibling; l !== null; )
        Pr(l, n, u), l = l.sibling;
  }
  function ed(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      re(n, c, u), n[$t] = l, n[Ol] = u;
    } catch (r) {
      $e(l, l.return, r);
    }
  }
  var On = !1, zt = !1, td = !1, ld = typeof WeakSet == "function" ? WeakSet : Set, wt = null;
  function My(l, n) {
    if (l = l.containerInfo, os = ys, l = _h(l), vf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, m = -1, g = -1, M = 0, G = 0, X = l, x = null;
            t: for (; ; ) {
              for (var C; X !== u || s !== 0 && X.nodeType !== 3 || (m = y + s), X !== r || c !== 0 && X.nodeType !== 3 || (g = y + c), X.nodeType === 3 && (y += X.nodeValue.length), (C = X.firstChild) !== null; )
                x = X, X = C;
              for (; ; ) {
                if (X === l) break t;
                if (x === u && ++M === s && (m = y), x === r && ++G === c && (g = y), (C = X.nextSibling) !== null) break;
                X = x, x = X.parentNode;
              }
              X = C;
            }
            u = m === -1 || g === -1 ? null : { start: m, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (fs = { focusedElem: l, selectionRange: u }, ys = !1, wt = n; wt !== null; )
      if (n = wt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, wt = l;
      else
        for (; wt !== null; ) {
          switch (n = wt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ue = li(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ue,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ie) {
                  $e(
                    u,
                    u.return,
                    ie
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ss(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ss(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(z(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, wt = l;
            break;
          }
          wt = n.return;
        }
  }
  function Uy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Un(l, u), c & 4 && $f(5, u);
        break;
      case 1:
        if (Un(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              $e(u, u.return, y);
            }
          else {
            var s = li(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              $e(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && Ir(u), c & 512 && ro(u, u.return);
        break;
      case 3:
        if (Un(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Uf(l, n);
          } catch (y) {
            $e(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && ed(u);
      case 26:
      case 5:
        Un(l, u), n === null && c & 4 && ho(u), c & 512 && ro(u, u.return);
        break;
      case 12:
        Un(l, u);
        break;
      case 13:
        Un(l, u), c & 4 && ad(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = gv.bind(
          null,
          u
        ), Dv(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || On, !c) {
          n = n !== null && n.memoizedState !== null || zt, s = On;
          var r = zt;
          On = c, (zt = n) && !r ? ui(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Un(l, u), On = s, zt = r;
        }
        break;
      case 30:
        break;
      default:
        Un(l, u);
    }
  }
  function xy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, xy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ef(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var st = null, cl = !1;
  function Mn(l, n, u) {
    for (u = u.child; u !== null; )
      Me(l, n, u), u = u.sibling;
  }
  function Me(l, n, u) {
    if (Dl && typeof Dl.onCommitFiberUnmount == "function")
      try {
        Dl.onCommitFiberUnmount(Nc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        zt || Ia(u, n), Mn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        zt || Ia(u, n);
        var c = st, s = cl;
        di(u.type) && (st = u.stateNode, cl = !1), Mn(
          l,
          n,
          u
        ), Fl(u.stateNode), st = c, cl = s;
        break;
      case 5:
        zt || Ia(u, n);
      case 6:
        if (c = st, s = cl, st = null, Mn(
          l,
          n,
          u
        ), st = c, cl = s, st !== null)
          if (cl)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(u.stateNode);
            } catch (r) {
              $e(
                u,
                n,
                r
              );
            }
          else
            try {
              st.removeChild(u.stateNode);
            } catch (r) {
              $e(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        st !== null && (cl ? (l = st, Sd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), _n(l)) : Sd(st, u.stateNode));
        break;
      case 4:
        c = st, s = cl, st = u.stateNode.containerInfo, cl = !0, Mn(
          l,
          n,
          u
        ), st = c, cl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        zt || ni(2, u, n), zt || ni(4, u, n), Mn(
          l,
          n,
          u
        );
        break;
      case 1:
        zt || (Ia(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Dy(
          u,
          n,
          c
        )), Mn(
          l,
          n,
          u
        );
        break;
      case 21:
        Mn(
          l,
          n,
          u
        );
        break;
      case 22:
        zt = (c = zt) || u.memoizedState !== null, Mn(
          l,
          n,
          u
        ), zt = c;
        break;
      default:
        Mn(
          l,
          n,
          u
        );
    }
  }
  function ad(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _n(l);
      } catch (u) {
        $e(n, n.return, u);
      }
  }
  function Hy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new ld()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new ld()), n;
      default:
        throw Error(z(435, l.tag));
    }
  }
  function nd(l, n) {
    var u = Hy(l);
    n.forEach(function(c) {
      var s = bv.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function xl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, m = y;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (di(m.type)) {
                st = m.stateNode, cl = !1;
                break e;
              }
              break;
            case 5:
              st = m.stateNode, cl = !1;
              break e;
            case 3:
            case 4:
              st = m.stateNode.containerInfo, cl = !0;
              break e;
          }
          m = m.return;
        }
        if (st === null) throw Error(z(160));
        Me(r, y, s), st = null, cl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Wf(n, l), n = n.sibling;
  }
  var Hl = null;
  function Wf(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xl(n, l), Pt(l), c & 4 && (ni(3, l, l.return), $f(3, l), ni(5, l, l.return));
        break;
      case 1:
        xl(n, l), Pt(l), c & 512 && (zt || u === null || Ia(u, u.return)), c & 64 && On && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Hl;
        if (xl(n, l), Pt(l), c & 512 && (zt || u === null || Ia(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[I] || r[$t] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), re(r, c, u), r[$t] = l, Gt(r), c = r;
                      break e;
                    case "link":
                      var y = nm(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), re(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = nm(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), re(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(z(468, c));
                  }
                  r[$t] = l, Gt(r), c = r;
                }
                l.stateNode = c;
              } else
                um(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = fp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? um(
              s,
              l.type,
              l.stateNode
            ) : fp(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Oy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        xl(n, l), Pt(l), c & 512 && (zt || u === null || Ia(u, u.return)), u !== null && c & 4 && Oy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (xl(n, l), Pt(l), c & 512 && (zt || u === null || Ia(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            _c(s, "");
          } catch (C) {
            $e(l, l.return, C);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Oy(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (td = !0);
        break;
      case 6:
        if (xl(n, l), Pt(l), c & 4) {
          if (l.stateNode === null)
            throw Error(z(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (C) {
            $e(l, l.return, C);
          }
        }
        break;
      case 3:
        if (pi = null, s = Hl, Hl = Td(n.containerInfo), xl(n, l), Hl = s, Pt(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _n(n.containerInfo);
          } catch (C) {
            $e(l, l.return, C);
          }
        td && (td = !1, Cy(l));
        break;
      case 4:
        c = Hl, Hl = Td(
          l.stateNode.containerInfo
        ), xl(n, l), Pt(l), Hl = c;
        break;
      case 12:
        xl(n, l), Pt(l);
        break;
      case 13:
        xl(n, l), Pt(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Vy = ta()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, nd(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var g = u !== null && u.memoizedState !== null, M = On, G = zt;
        if (On = M || s, zt = G || g, xl(n, l), zt = G, On = M, Pt(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || g || On || zt || rt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                g = u = n;
                try {
                  if (r = g.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    m = g.stateNode;
                    var X = g.memoizedProps.style, x = X != null && X.hasOwnProperty("display") ? X.display : null;
                    m.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (C) {
                  $e(g, g.return, C);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                g = n;
                try {
                  g.stateNode.nodeValue = s ? "" : g.memoizedProps;
                } catch (C) {
                  $e(g, g.return, C);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, nd(l, u))));
        break;
      case 19:
        xl(n, l), Pt(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, nd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xl(n, l), Pt(l);
    }
  }
  function Pt(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (J0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(z(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = xa(l);
            Pr(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (_c(y, ""), u.flags &= -33);
            var m = xa(l);
            Pr(l, m, y);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, M = xa(l);
            oc(
              l,
              M,
              g
            );
            break;
          default:
            throw Error(z(161));
        }
      } catch (G) {
        $e(l, l.return, G);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Cy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Cy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Un(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Uy(l, n.alternate, n), n = n.sibling;
  }
  function rt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ni(4, n, n.return), rt(n);
          break;
        case 1:
          Ia(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Dy(
            n,
            n.return,
            u
          ), rt(n);
          break;
        case 27:
          Fl(n.stateNode);
        case 26:
        case 5:
          Ia(n, n.return), rt(n);
          break;
        case 22:
          n.memoizedState === null && rt(n);
          break;
        case 30:
          rt(n);
          break;
        default:
          rt(n);
      }
      l = l.sibling;
    }
  }
  function ui(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ui(
            s,
            r,
            u
          ), $f(4, r);
          break;
        case 1:
          if (ui(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (M) {
              $e(c, c.return, M);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var m = c.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  Sr(g[s], m);
            } catch (M) {
              $e(c, c.return, M);
            }
          }
          u && y & 64 && Ir(r), ro(r, r.return);
          break;
        case 27:
          ed(r);
        case 26:
        case 5:
          ui(
            s,
            r,
            u
          ), u && c === null && y & 4 && ho(r), ro(r, r.return);
          break;
        case 12:
          ui(
            s,
            r,
            u
          );
          break;
        case 13:
          ui(
            s,
            r,
            u
          ), u && y & 4 && ad(s, r);
          break;
        case 22:
          r.memoizedState === null && ui(
            s,
            r,
            u
          ), ro(r, r.return);
          break;
        case 30:
          break;
        default:
          ui(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ha(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && pn(u));
  }
  function ud(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l));
  }
  function ol(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ny(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Ny(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ol(
          l,
          n,
          u,
          c
        ), s & 2048 && $f(9, n);
        break;
      case 1:
        ol(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        ol(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l)));
        break;
      case 12:
        if (s & 2048) {
          ol(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            $e(n, n.return, g);
          }
        } else
          ol(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        ol(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? ol(
          l,
          n,
          u,
          c
        ) : Qe(l, n) : r._visibility & 2 ? ol(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, hu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && Ha(y, n);
        break;
      case 24:
        ol(
          l,
          n,
          u,
          c
        ), s & 2048 && ud(n.alternate, n);
        break;
      default:
        ol(
          l,
          n,
          u,
          c
        );
    }
  }
  function hu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, m = u, g = c, M = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          hu(
            r,
            y,
            m,
            g,
            s
          ), $f(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null ? G._visibility & 2 ? hu(
            r,
            y,
            m,
            g,
            s
          ) : Qe(
            r,
            y
          ) : (G._visibility |= 2, hu(
            r,
            y,
            m,
            g,
            s
          )), s && M & 2048 && Ha(
            y.alternate,
            y
          );
          break;
        case 24:
          hu(
            r,
            y,
            m,
            g,
            s
          ), s && M & 2048 && ud(y.alternate, y);
          break;
        default:
          hu(
            r,
            y,
            m,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Qe(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Qe(u, c), s & 2048 && Ha(
              c.alternate,
              c
            );
            break;
          case 24:
            Qe(u, c), s & 2048 && ud(c.alternate, c);
            break;
          default:
            Qe(u, c);
        }
        n = n.sibling;
      }
  }
  var fc = 8192;
  function Rt(l) {
    if (l.subtreeFlags & fc)
      for (l = l.child; l !== null; )
        K0(l), l = l.sibling;
  }
  function K0(l) {
    switch (l.tag) {
      case 26:
        Rt(l), l.flags & fc && l.memoizedState !== null && dp(
          Hl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Rt(l);
        break;
      case 3:
      case 4:
        var n = Hl;
        Hl = Td(l.stateNode.containerInfo), Rt(l), Hl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = fc, fc = 16777216, Rt(l), fc = n) : Rt(l));
        break;
      default:
        Rt(l);
    }
  }
  function By(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function sc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          wt = c, Yy(
            c,
            l
          );
        }
      By(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        qy(l), l = l.sibling;
  }
  function qy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        sc(l), l.flags & 2048 && ni(9, l, l.return);
        break;
      case 3:
        sc(l);
        break;
      case 12:
        sc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Cl(l)) : sc(l);
        break;
      default:
        sc(l);
    }
  }
  function Cl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          wt = c, Yy(
            c,
            l
          );
        }
      By(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ni(8, n, n.return), Cl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Cl(n));
          break;
        default:
          Cl(n);
      }
      l = l.sibling;
    }
  }
  function Yy(l, n) {
    for (; wt !== null; ) {
      var u = wt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ni(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          pn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, wt = c;
      else
        e: for (u = l; wt !== null; ) {
          c = wt;
          var s = c.sibling, r = c.return;
          if (xy(c), c === u) {
            wt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, wt = s;
            break e;
          }
          wt = r;
        }
    }
  }
  var _y = {
    getCacheForType: function(l) {
      var n = Wt(Vt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, k0 = typeof WeakMap == "function" ? WeakMap : Map, Ke = 0, tt = null, xe = null, He = 0, ke = 0, kl = null, xn = !1, yo = !1, jy = !1, yu = 0, Dt = 0, mu = 0, rc = 0, Hn = 0, Ca = 0, mo = 0, po = null, $l = null, Gy = !1, Vy = 0, id = 1 / 0, vo = null, ii = null, fl = 0, Cn = null, go = null, sl = 0, cd = 0, od = null, Xy = null, bo = 0, Qy = null;
  function fa() {
    if ((Ke & 2) !== 0 && He !== 0)
      return He & -He;
    if (A.T !== null) {
      var l = Oa;
      return l !== 0 ? l : mc();
    }
    return o0();
  }
  function wy() {
    Ca === 0 && (Ca = (He & 536870912) === 0 || je ? Cu() : 536870912);
    var l = oa.current;
    return l !== null && (l.flags |= 32), Ca;
  }
  function sa(l, n, u) {
    (l === tt && (ke === 2 || ke === 9) || l.cancelPendingCommit !== null) && (Nn(l, 0), pu(
      l,
      He,
      Ca,
      !1
    )), Oi(l, u), ((Ke & 2) === 0 || l !== tt) && (l === tt && ((Ke & 2) === 0 && (rc |= u), Dt === 4 && pu(
      l,
      He,
      Ca,
      !1
    )), Wl(l));
  }
  function So(l, n, u) {
    if ((Ke & 6) !== 0) throw Error(z(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || nn(l, n), s = c ? Zy(l, n) : fd(l, n, !0), r = c;
    do {
      if (s === 0) {
        yo && !c && pu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !$0(u)) {
          s = fd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var m = l;
              s = po;
              var g = m.current.memoizedState.isDehydrated;
              if (g && (Nn(m, y).flags |= 256), y = fd(
                m,
                y,
                !1
              ), y !== 2) {
                if (jy && !g) {
                  m.errorRecoveryDisabledLanes |= r, rc |= r, s = 4;
                  break e;
                }
                r = $l, $l = s, r !== null && ($l === null ? $l = r : $l.push.apply(
                  $l,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Nn(l, 0), pu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(z(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pu(
                c,
                n,
                Ca,
                !xn
              );
              break e;
            case 2:
              $l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(z(329));
          }
          if ((n & 62914560) === n && (s = Vy + 300 - ta(), 10 < s)) {
            if (pu(
              c,
              n,
              Ca,
              !xn
            ), Hu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = bd(
              Ff.bind(
                null,
                c,
                u,
                $l,
                vo,
                Gy,
                n,
                Ca,
                rc,
                mo,
                xn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Ff(
            c,
            u,
            $l,
            vo,
            Gy,
            n,
            Ca,
            rc,
            mo,
            xn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Wl(l);
  }
  function Ff(l, n, u, c, s, r, y, m, g, M, G, X, x, C) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, (X & 8192 || (X & 16785408) === 16785408) && (Co = { stylesheets: null, count: 0, unsuspend: rp }, K0(n), X = cm(), X !== null)) {
      l.cancelPendingCommit = X(
        I0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          m,
          g,
          G,
          1,
          x,
          C
        )
      ), pu(l, r, y, !M);
      return;
    }
    I0(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      m,
      g
    );
  }
  function $0(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!il(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pu(l, n, u, c) {
    n &= ~Hn, n &= ~rc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Gl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && Io(l, u, n);
  }
  function dc() {
    return (Ke & 6) === 0 ? (ts(0), !1) : !0;
  }
  function ci() {
    if (xe !== null) {
      if (ke === 0)
        var l = xe.return;
      else
        l = xe, ka = iu = null, zr(l), lc = null, io = 0, l = xe;
      for (; l !== null; )
        Ry(l.alternate, l), l = l.return;
      xe = null;
    }
  }
  function Nn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Av(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ci(), tt = l, xe = u = Ja(l.current, null), He = n, ke = 0, kl = null, xn = !1, yo = nn(l, n), jy = !1, mo = Ca = Hn = rc = mu = Dt = 0, $l = po = null, Gy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Gl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return yu = n, Za(), u;
  }
  function Ly(l, n) {
    ve = null, A.H = Gr, n === Fu || n === Of ? (n = kh(), ke = 3) : n === mr ? (n = kh(), ke = 4) : ke = n === At ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, kl = n, xe === null && (Dt = 1, Zf(
      l,
      ua(n, l.current)
    ));
  }
  function W0() {
    var l = A.H;
    return A.H = Gr, l === null ? Gr : l;
  }
  function hc() {
    var l = A.A;
    return A.A = _y, l;
  }
  function yc() {
    Dt = 4, xn || (He & 4194048) !== He && oa.current !== null || (yo = !0), (mu & 134217727) === 0 && (rc & 134217727) === 0 || tt === null || pu(
      tt,
      He,
      Ca,
      !1
    );
  }
  function fd(l, n, u) {
    var c = Ke;
    Ke |= 2;
    var s = W0(), r = hc();
    (tt !== l || He !== n) && (vo = null, Nn(l, n)), n = !1;
    var y = Dt;
    e: do
      try {
        if (ke !== 0 && xe !== null) {
          var m = xe, g = kl;
          switch (ke) {
            case 8:
              ci(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              oa.current === null && (n = !0);
              var M = ke;
              if (ke = 0, kl = null, To(l, m, g, M), u && yo) {
                y = 0;
                break e;
              }
              break;
            default:
              M = ke, ke = 0, kl = null, To(l, m, g, M);
          }
        }
        sd(), y = Dt;
        break;
      } catch (G) {
        Ly(l, G);
      }
    while (!0);
    return n && l.shellSuspendCounter++, ka = iu = null, Ke = c, A.H = s, A.A = r, xe === null && (tt = null, He = 0, Za()), y;
  }
  function sd() {
    for (; xe !== null; ) Ky(xe);
  }
  function Zy(l, n) {
    var u = Ke;
    Ke |= 2;
    var c = W0(), s = hc();
    tt !== l || He !== n ? (vo = null, id = ta() + 500, Nn(l, n)) : yo = nn(
      l,
      n
    );
    e: do
      try {
        if (ke !== 0 && xe !== null) {
          n = xe;
          var r = kl;
          t: switch (ke) {
            case 1:
              ke = 0, kl = null, To(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (vr(r)) {
                ke = 0, kl = null, ky(n);
                break;
              }
              n = function() {
                ke !== 2 && ke !== 9 || tt !== l || (ke = 7), Wl(l);
              }, r.then(n, n);
              break e;
            case 3:
              ke = 7;
              break e;
            case 4:
              ke = 5;
              break e;
            case 7:
              vr(r) ? (ke = 0, kl = null, ky(n)) : (ke = 0, kl = null, To(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (xe.tag) {
                case 26:
                  y = xe.memoizedState;
                case 5:
                case 27:
                  var m = xe;
                  if (!y || im(y)) {
                    ke = 0, kl = null;
                    var g = m.sibling;
                    if (g !== null) xe = g;
                    else {
                      var M = m.return;
                      M !== null ? (xe = M, If(M)) : xe = null;
                    }
                    break t;
                  }
              }
              ke = 0, kl = null, To(l, n, r, 5);
              break;
            case 6:
              ke = 0, kl = null, To(l, n, r, 6);
              break;
            case 8:
              ci(), Dt = 6;
              break e;
            default:
              throw Error(z(462));
          }
        }
        Jy();
        break;
      } catch (G) {
        Ly(l, G);
      }
    while (!0);
    return ka = iu = null, A.H = c, A.A = s, Ke = u, xe !== null ? 0 : (tt = null, He = 0, Za(), Dt);
  }
  function Jy() {
    for (; xe !== null && !uv(); )
      Ky(xe);
  }
  function Ky(l) {
    var n = Z0(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, n === null ? If(l) : xe = n;
  }
  function ky(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Sy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          He
        );
        break;
      case 11:
        n = Sy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          He
        );
        break;
      case 5:
        zr(n);
      default:
        Ry(u, n), n = xe = ze(n, yu), n = Z0(u, n, yu);
    }
    l.memoizedProps = l.pendingProps, n === null ? If(l) : xe = n;
  }
  function To(l, n, u, c) {
    ka = iu = null, zr(n), lc = null, io = 0;
    var s = n.return;
    try {
      if (Q0(
        l,
        s,
        n,
        u,
        He
      )) {
        Dt = 1, Zf(
          l,
          ua(u, l.current)
        ), xe = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw xe = s, r;
      Dt = 1, Zf(
        l,
        ua(u, l.current)
      ), xe = null;
      return;
    }
    n.flags & 32768 ? (je || c === 1 ? l = !0 : yo || (He & 536870912) !== 0 ? l = !1 : (xn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = oa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), F0(n, l)) : If(n);
  }
  function If(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        F0(
          n,
          xn
        );
        return;
      }
      l = n.return;
      var u = zy(
        n.alternate,
        n,
        yu
      );
      if (u !== null) {
        xe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        xe = n;
        return;
      }
      xe = n = l;
    } while (n !== null);
    Dt === 0 && (Dt = 5);
  }
  function F0(l, n) {
    do {
      var u = vv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, xe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        xe = l;
        return;
      }
      xe = l = u;
    } while (l !== null);
    Dt = 6, xe = null;
  }
  function I0(l, n, u, c, s, r, y, m, g) {
    l.cancelPendingCommit = null;
    do
      dd();
    while (fl !== 0);
    if ((Ke & 6) !== 0) throw Error(z(327));
    if (n !== null) {
      if (n === l.current) throw Error(z(177));
      if (r = n.lanes | n.childLanes, r |= dn, c0(
        l,
        u,
        r,
        y,
        m,
        g
      ), l === tt && (xe = tt = null, He = 0), go = n, Cn = l, sl = u, cd = r, od = s, Xy = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Sv(Fo, function() {
        return $y(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = A.T, A.T = null, s = Q.p, Q.p = 2, y = Ke, Ke |= 4;
        try {
          My(l, n, u);
        } finally {
          Ke = y, Q.p = s, A.T = c;
        }
      }
      fl = 1, P0(), Pf(), rd();
    }
  }
  function P0() {
    if (fl === 1) {
      fl = 0;
      var l = Cn, n = go, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = Ke;
        Ke |= 4;
        try {
          Wf(n, l);
          var r = fs, y = _h(l.containerInfo), m = r.focusedElem, g = r.selectionRange;
          if (y !== m && m && m.ownerDocument && pf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (g !== null && vf(m)) {
              var M = g.start, G = g.end;
              if (G === void 0 && (G = M), "selectionStart" in m)
                m.selectionStart = M, m.selectionEnd = Math.min(
                  G,
                  m.value.length
                );
              else {
                var X = m.ownerDocument || document, x = X && X.defaultView || window;
                if (x.getSelection) {
                  var C = x.getSelection(), ue = m.textContent.length, ie = Math.min(g.start, ue), we = g.end === void 0 ? ie : Math.min(g.end, ue);
                  !C.extend && ie > we && (y = we, we = ie, ie = y);
                  var R = it(
                    m,
                    ie
                  ), E = it(
                    m,
                    we
                  );
                  if (R && E && (C.rangeCount !== 1 || C.anchorNode !== R.node || C.anchorOffset !== R.offset || C.focusNode !== E.node || C.focusOffset !== E.offset)) {
                    var O = X.createRange();
                    O.setStart(R.node, R.offset), C.removeAllRanges(), ie > we ? (C.addRange(O), C.extend(E.node, E.offset)) : (O.setEnd(E.node, E.offset), C.addRange(O));
                  }
                }
              }
            }
            for (X = [], C = m; C = C.parentNode; )
              C.nodeType === 1 && X.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < X.length; m++) {
              var V = X[m];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          ys = !!os, fs = os = null;
        } finally {
          Ke = s, Q.p = c, A.T = u;
        }
      }
      l.current = n, fl = 2;
    }
  }
  function Pf() {
    if (fl === 2) {
      fl = 0;
      var l = Cn, n = go, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = Ke;
        Ke |= 4;
        try {
          Uy(l, n.alternate, n);
        } finally {
          Ke = s, Q.p = c, A.T = u;
        }
      }
      fl = 3;
    }
  }
  function rd() {
    if (fl === 4 || fl === 3) {
      fl = 0, Ri();
      var l = Cn, n = go, u = sl, c = Xy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? fl = 5 : (fl = 0, go = Cn = null, ep(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ii = null), Vs(u), n = n.stateNode, Dl && typeof Dl.onCommitFiberRoot == "function")
        try {
          Dl.onCommitFiberRoot(
            Nc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = A.T, s = Q.p, Q.p = 2, A.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var m = c[y];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          A.T = n, Q.p = s;
        }
      }
      (sl & 3) !== 0 && dd(), Wl(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === Qy ? bo++ : (bo = 0, Qy = l) : bo = 0, ts(0);
    }
  }
  function ep(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, pn(n)));
  }
  function dd(l) {
    return P0(), Pf(), rd(), $y();
  }
  function $y() {
    if (fl !== 5) return !1;
    var l = Cn, n = cd;
    cd = 0;
    var u = Vs(sl), c = A.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, A.T = null, u = od, od = null;
      var r = Cn, y = sl;
      if (fl = 0, go = Cn = null, sl = 0, (Ke & 6) !== 0) throw Error(z(331));
      var m = Ke;
      if (Ke |= 4, qy(r.current), Ny(
        r,
        r.current,
        y,
        u
      ), Ke = m, ts(0, !1), Dl && typeof Dl.onPostCommitFiberRoot == "function")
        try {
          Dl.onPostCommitFiberRoot(Nc, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, A.T = c, ep(l, n);
    }
  }
  function Wy(l, n, u) {
    n = ua(u, n), n = gy(l.stateNode, n, 2), l = bn(l, n, 2), l !== null && (Oi(l, 2), Wl(l));
  }
  function $e(l, n, u) {
    if (l.tag === 3)
      Wy(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Wy(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ii === null || !ii.has(c))) {
            l = ua(u, l), u = by(2), c = bn(n, u, 2), c !== null && (Kl(
              u,
              c,
              n,
              l
            ), Oi(c, 2), Wl(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function hd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new k0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (jy = !0, s.add(u), l = Fy.bind(null, l, n, u), n.then(l, l));
  }
  function Fy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, tt === l && (He & u) === u && (Dt === 4 || Dt === 3 && (He & 62914560) === He && 300 > ta() - Vy ? (Ke & 2) === 0 && Nn(l, 0) : Hn |= u, mo === He && (mo = 0)), Wl(l);
  }
  function Iy(l, n) {
    n === 0 && (n = Di()), l = hn(l, n), l !== null && (Oi(l, n), Wl(l));
  }
  function gv(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Iy(l, u);
  }
  function bv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(z(314));
    }
    c !== null && c.delete(n), Iy(l, u);
  }
  function Sv(l, n) {
    return zi(l, n);
  }
  var yd = null, oi = null, es = !1, Eo = !1, md = !1, fi = 0;
  function Wl(l) {
    l !== oi && l.next === null && (oi === null ? yd = oi = l : oi = oi.next = l), Eo = !0, es || (es = !0, ap());
  }
  function ts(l, n) {
    if (!md && Eo) {
      md = !0;
      do
        for (var u = !1, c = yd; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, m = c.pingedLanes;
              r = (1 << 31 - Gl(42 | l) + 1) - 1, r &= s & ~(y & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, as(c, r));
          } else
            r = He, r = Hu(
              c,
              c === tt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || nn(c, r) || (u = !0, as(c, r));
          c = c.next;
        }
      while (u);
      md = !1;
    }
  }
  function tp() {
    ls();
  }
  function ls() {
    Eo = es = !1;
    var l = 0;
    fi !== 0 && (bu() && (l = fi), fi = 0);
    for (var n = ta(), u = null, c = yd; c !== null; ) {
      var s = c.next, r = Py(c, n);
      r === 0 ? (c.next = null, u === null ? yd = s : u.next = s, s === null && (oi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Eo = !0)), c = s;
    }
    ts(l);
  }
  function Py(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Gl(r), m = 1 << y, g = s[y];
      g === -1 ? ((m & u) === 0 || (m & c) !== 0) && (s[y] = kt(m, n)) : g <= n && (l.expiredLanes |= m), r &= ~m;
    }
    if (n = tt, u = He, u = Hu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (ke === 2 || ke === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && oh(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || nn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && oh(c), Vs(u)) {
        case 2:
        case 8:
          u = fh;
          break;
        case 32:
          u = Fo;
          break;
        case 268435456:
          u = Cc;
          break;
        default:
          u = Fo;
      }
      return c = lp.bind(null, l), u = zi(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && oh(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function lp(l, n) {
    if (fl !== 0 && fl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (dd() && l.callbackNode !== u)
      return null;
    var c = He;
    return c = Hu(
      l,
      l === tt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (So(l, c, n), Py(l, ta()), l.callbackNode != null && l.callbackNode === u ? lp.bind(null, l) : null);
  }
  function as(l, n) {
    if (dd()) return null;
    So(l, n, !0);
  }
  function ap() {
    zv(function() {
      (Ke & 6) !== 0 ? zi(
        n0,
        tp
      ) : ls();
    });
  }
  function mc() {
    return fi === 0 && (fi = Cu()), fi;
  }
  function pd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : of("" + l);
  }
  function ns(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function np(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = pd(
        (s[Ol] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Ol] || null) ? pd(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var m = new Is(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (fi !== 0) {
                  var g = y ? ns(s, y) : new FormData(s);
                  jr(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (m.preventDefault(), g = y ? ns(s, y) : new FormData(s), jr(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Ot = 0; Ot < wc.length; Ot++) {
    var us = wc[Ot], Tv = us.toLowerCase(), Ae = us[0].toUpperCase() + us.slice(1);
    Ea(
      Tv,
      "on" + Ae
    );
  }
  Ea(O0, "onAnimationEnd"), Ea(jh, "onAnimationIteration"), Ea(M0, "onAnimationStart"), Ea("dblclick", "onDoubleClick"), Ea("focusin", "onFocus"), Ea("focusout", "onBlur"), Ea(Gh, "onTransitionRun"), Ea(cr, "onTransitionStart"), Ea(U0, "onTransitionCancel"), Ea(Vh, "onTransitionEnd"), qu("onMouseEnter", ["mouseout", "mouseover"]), qu("onMouseLeave", ["mouseout", "mouseover"]), qu("onPointerEnter", ["pointerout", "pointerover"]), qu("onPointerLeave", ["pointerout", "pointerover"]), Bu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Bu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Bu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Bu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Bu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Bu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), si = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(is)
  );
  function pc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var m = c[y], g = m.instance, M = m.currentTarget;
            if (m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = M;
            try {
              r(s);
            } catch (G) {
              wf(G);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (m = c[y], g = m.instance, M = m.currentTarget, m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = M;
            try {
              r(s);
            } catch (G) {
              wf(G);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function ge(l, n) {
    var u = n[Xs];
    u === void 0 && (u = n[Xs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (vd(n, l, 2, !1), u.add(c));
  }
  function Ao(l, n, u) {
    var c = 0;
    n && (c |= 4), vd(
      u,
      l,
      c,
      n
    );
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function em(l) {
    if (!l[zo]) {
      l[zo] = !0, lf.forEach(function(u) {
        u !== "selectionchange" && (si.has(u) || Ao(u, !1, l), Ao(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[zo] || (n[zo] = !0, Ao("selectionchange", !1, n));
    }
  }
  function vd(l, n, u, c) {
    switch (mm(n)) {
      case 2:
        var s = hp;
        break;
      case 8:
        s = yp;
        break;
      default:
        s = hm;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !$s || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Na(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var m = c.stateNode.containerInfo;
          if (m === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var g = y.tag;
              if ((g === 3 || g === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; m !== null; ) {
            if (y = nl(m), y === null) return;
            if (g = y.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = y;
              continue e;
            }
            m = m.parentNode;
          }
        }
        c = c.return;
      }
    Vc(function() {
      var M = r, G = ks(u), X = [];
      e: {
        var x = Xh.get(l);
        if (x !== void 0) {
          var C = Is, ue = l;
          switch (l) {
            case "keypress":
              if (ul(u) === 0) break e;
            case "keydown":
            case "keyup":
              C = Va;
              break;
            case "focusin":
              ue = "focus", C = Eh;
              break;
            case "focusout":
              ue = "blur", C = Eh;
              break;
            case "beforeblur":
            case "afterblur":
              C = Eh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Th;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = g0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Rh;
              break;
            case O0:
            case jh:
            case M0:
              C = hv;
              break;
            case Vh:
              C = A0;
              break;
            case "scroll":
            case "scrollend":
              C = p0;
              break;
            case "wheel":
              C = Gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = df;
              break;
            case "toggle":
            case "beforetoggle":
              C = z0;
          }
          var ie = (n & 4) !== 0, we = !ie && (l === "scroll" || l === "scrollend"), R = ie ? x !== null ? x + "Capture" : null : x;
          ie = [];
          for (var E = M, O; E !== null; ) {
            var V = E;
            if (O = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || O === null || R === null || (V = qi(E, R), V != null && ie.push(
              vu(E, V, O)
            )), we) break;
            E = E.return;
          }
          0 < ie.length && (x = new C(
            x,
            ue,
            null,
            u,
            G
          ), X.push({ event: x, listeners: ie }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (x = l === "mouseover" || l === "pointerover", C = l === "mouseout" || l === "pointerout", x && u !== Bi && (ue = u.relatedTarget || u.fromElement) && (nl(ue) || ue[qc]))
            break e;
          if ((C || x) && (x = G.window === G ? G : (x = G.ownerDocument) ? x.defaultView || x.parentWindow : window, C ? (ue = u.relatedTarget || u.toElement, C = M, ue = ue ? nl(ue) : null, ue !== null && (we = he(ue), ie = ue.tag, ue !== we || ie !== 5 && ie !== 27 && ie !== 6) && (ue = null)) : (C = null, ue = M), C !== ue)) {
            if (ie = Th, V = "onMouseLeave", R = "onMouseEnter", E = "mouse", (l === "pointerout" || l === "pointerover") && (ie = df, V = "onPointerLeave", R = "onPointerEnter", E = "pointer"), we = C == null ? x : tf(C), O = ue == null ? x : tf(ue), x = new ie(
              V,
              E + "leave",
              C,
              u,
              G
            ), x.target = we, x.relatedTarget = O, V = null, nl(G) === M && (ie = new ie(
              R,
              E + "enter",
              ue,
              u,
              G
            ), ie.target = O, ie.relatedTarget = we, V = ie), we = V, C && ue)
              t: {
                for (ie = C, R = ue, E = 0, O = ie; O; O = ri(O))
                  E++;
                for (O = 0, V = R; V; V = ri(V))
                  O++;
                for (; 0 < E - O; )
                  ie = ri(ie), E--;
                for (; 0 < O - E; )
                  R = ri(R), O--;
                for (; E--; ) {
                  if (ie === R || R !== null && ie === R.alternate)
                    break t;
                  ie = ri(ie), R = ri(R);
                }
                ie = null;
              }
            else ie = null;
            C !== null && cs(
              X,
              x,
              C,
              ie,
              !1
            ), ue !== null && we !== null && cs(
              X,
              we,
              ue,
              ie,
              !0
            );
          }
        }
        e: {
          if (x = M ? tf(M) : window, C = x.nodeName && x.nodeName.toLowerCase(), C === "select" || C === "input" && x.type === "file")
            var F = Hh;
          else if (ar(x))
            if (Ch)
              F = qh;
            else {
              F = Xu;
              var Re = ur;
            }
          else
            C = x.nodeName, !C || C.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? M && Ni(M.elementType) && (F = Hh) : F = lu;
          if (F && (F = F(l, M))) {
            nr(
              X,
              F,
              u,
              G
            );
            break e;
          }
          Re && Re(l, x, M), l === "focusout" && M && x.type === "number" && M.memoizedProps.value != null && uf(x, "number", x.value);
        }
        switch (Re = M ? tf(M) : window, l) {
          case "focusin":
            (ar(Re) || Re.contentEditable === "true") && (sn = Re, wa = M, Lu = null);
            break;
          case "focusout":
            Lu = wa = sn = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Li = !1, ir(X, u, G);
            break;
          case "selectionchange":
            if (wi) break;
          case "keydown":
          case "keyup":
            ir(X, u, G);
        }
        var ae;
        if (hf)
          e: {
            switch (l) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          Vu ? mf(l, u) && (se = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (se = "onCompositionStart");
        se && (on && u.locale !== "ko" && (Vu || se !== "onCompositionStart" ? se === "onCompositionEnd" && Vu && (ae = bh()) : (eu = G, Xc = "value" in eu ? eu.value : eu.textContent, Vu = !0)), Re = Ro(M, se), 0 < Re.length && (se = new Ah(
          se,
          l,
          null,
          u,
          G
        ), X.push({ event: se, listeners: Re }), ae ? se.data = ae : (ae = Gu(u), ae !== null && (se.data = ae)))), (ae = Oh ? Uh(l, u) : Vi(l, u)) && (se = Ro(M, "onBeforeInput"), 0 < se.length && (Re = new Ah(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          G
        ), X.push({
          event: Re,
          listeners: se
        }), Re.data = ae)), np(
          X,
          l,
          M,
          u,
          G
        );
      }
      pc(X, n);
    });
  }
  function vu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ro(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = qi(l, u), s != null && c.unshift(
        vu(l, s, r)
      ), s = qi(l, n), s != null && c.push(
        vu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function ri(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function cs(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var m = u, g = m.alternate, M = m.stateNode;
      if (m = m.tag, g !== null && g === c) break;
      m !== 5 && m !== 26 && m !== 27 || M === null || (g = M, s ? (M = qi(u, r), M != null && y.unshift(
        vu(u, M, g)
      )) : s || (M = qi(u, r), M != null && y.push(
        vu(u, M, g)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var ra = /\r\n?/g, tm = /\u0000|\uFFFD/g;
  function up(l) {
    return (typeof l == "string" ? l : "" + l).replace(ra, `
`).replace(tm, "");
  }
  function lm(l, n) {
    return n = up(n), up(l) === n;
  }
  function gd() {
  }
  function ye(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || _c(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && _c(l, "" + c);
        break;
      case "className":
        af(l, "class", c);
        break;
      case "tabIndex":
        af(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        af(l, u, c);
        break;
      case "style":
        cf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          af(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = of("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && ye(l, n, "name", s.name, s, null), ye(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), ye(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), ye(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (ye(l, n, "encType", s.encType, s, null), ye(l, n, "method", s.method, s, null), ye(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = of("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = gd);
        break;
      case "onScroll":
        c != null && ge("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ge("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(z(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(z(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = of("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ge("beforetoggle", l), ge("toggle", l), In(l, "popover", c);
        break;
      case "xlinkActuate":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        In(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = sv.get(u) || u, In(l, u, c));
    }
  }
  function N(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        cf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(z(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(z(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? _c(l, c) : (typeof c == "number" || typeof c == "bigint") && _c(l, "" + c);
        break;
      case "onScroll":
        c != null && ge("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ge("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = gd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!aa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Ol] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : In(l, u, c);
          }
    }
  }
  function re(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ge("error", l), ge("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(z(137, n));
                default:
                  ye(l, n, r, y, u, null);
              }
          }
        s && ye(l, n, "srcSet", u.srcSet, u, null), c && ye(l, n, "src", u.src, u, null);
        return;
      case "input":
        ge("invalid", l);
        var m = r = y = s = null, g = null, M = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var G = u[c];
            if (G != null)
              switch (c) {
                case "name":
                  s = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  g = G;
                  break;
                case "defaultChecked":
                  M = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  m = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(z(137, n));
                  break;
                default:
                  ye(l, n, c, G, u, null);
              }
          }
        Js(
          l,
          r,
          m,
          g,
          M,
          y,
          s,
          !1
        ), _u(l);
        return;
      case "select":
        ge("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (m = u[s], m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                y = m;
                break;
              case "multiple":
                c = m;
              default:
                ye(l, n, s, m, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? Ci(l, !!c, n, !1) : u != null && Ci(l, !!c, u, !0);
        return;
      case "textarea":
        ge("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (m = u[y], m != null))
            switch (y) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(z(91));
                break;
              default:
                ye(l, n, y, m, u, null);
            }
        vh(l, c, s, r), _u(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                ye(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        ge("beforetoggle", l), ge("toggle", l), ge("cancel", l), ge("close", l);
        break;
      case "iframe":
      case "object":
        ge("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < is.length; c++)
          ge(is[c], l);
        break;
      case "image":
        ge("error", l), ge("load", l);
        break;
      case "details":
        ge("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ge("error", l), ge("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in u)
          if (u.hasOwnProperty(M) && (c = u[M], c != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(z(137, n));
              default:
                ye(l, n, M, c, u, null);
            }
        return;
      default:
        if (Ni(n)) {
          for (G in u)
            u.hasOwnProperty(G) && (c = u[G], c !== void 0 && N(
              l,
              n,
              G,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (m in u)
      u.hasOwnProperty(m) && (c = u[m], c != null && ye(l, n, m, c, u, null));
  }
  function Ev(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, y = null, m = null, g = null, M = null, G = null;
        for (C in u) {
          var X = u[C];
          if (u.hasOwnProperty(C) && X != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = X;
              default:
                c.hasOwnProperty(C) || ye(l, n, C, null, c, X);
            }
        }
        for (var x in c) {
          var C = c[x];
          if (X = u[x], c.hasOwnProperty(x) && (C != null || X != null))
            switch (x) {
              case "type":
                r = C;
                break;
              case "name":
                s = C;
                break;
              case "checked":
                M = C;
                break;
              case "defaultChecked":
                G = C;
                break;
              case "value":
                y = C;
                break;
              case "defaultValue":
                m = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(z(137, n));
                break;
              default:
                C !== X && ye(
                  l,
                  n,
                  x,
                  C,
                  c,
                  X
                );
            }
        }
        Zs(
          l,
          y,
          m,
          g,
          M,
          G,
          r,
          s
        );
        return;
      case "select":
        C = y = m = x = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                C = g;
              default:
                c.hasOwnProperty(r) || ye(
                  l,
                  n,
                  r,
                  null,
                  c,
                  g
                );
            }
        for (s in c)
          if (r = c[s], g = u[s], c.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                x = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== g && ye(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = m, u = y, c = C, x != null ? Ci(l, !!u, x, !1) : !!c != !!u && (n != null ? Ci(l, !!u, n, !0) : Ci(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        C = x = null;
        for (m in u)
          if (s = u[m], u.hasOwnProperty(m) && s != null && !c.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                ye(l, n, m, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                x = s;
                break;
              case "defaultValue":
                C = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(z(91));
                break;
              default:
                s !== r && ye(l, n, y, s, c, r);
            }
        ph(l, x, C);
        return;
      case "option":
        for (var ue in u)
          if (x = u[ue], u.hasOwnProperty(ue) && x != null && !c.hasOwnProperty(ue))
            switch (ue) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ye(
                  l,
                  n,
                  ue,
                  null,
                  c,
                  x
                );
            }
        for (g in c)
          if (x = c[g], C = u[g], c.hasOwnProperty(g) && x !== C && (x != null || C != null))
            switch (g) {
              case "selected":
                l.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                ye(
                  l,
                  n,
                  g,
                  x,
                  c,
                  C
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ie in u)
          x = u[ie], u.hasOwnProperty(ie) && x != null && !c.hasOwnProperty(ie) && ye(l, n, ie, null, c, x);
        for (M in c)
          if (x = c[M], C = u[M], c.hasOwnProperty(M) && x !== C && (x != null || C != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(z(137, n));
                break;
              default:
                ye(
                  l,
                  n,
                  M,
                  x,
                  c,
                  C
                );
            }
        return;
      default:
        if (Ni(n)) {
          for (var we in u)
            x = u[we], u.hasOwnProperty(we) && x !== void 0 && !c.hasOwnProperty(we) && N(
              l,
              n,
              we,
              void 0,
              c,
              x
            );
          for (G in c)
            x = c[G], C = u[G], !c.hasOwnProperty(G) || x === C || x === void 0 && C === void 0 || N(
              l,
              n,
              G,
              x,
              c,
              C
            );
          return;
        }
    }
    for (var R in u)
      x = u[R], u.hasOwnProperty(R) && x != null && !c.hasOwnProperty(R) && ye(l, n, R, null, c, x);
    for (X in c)
      x = c[X], C = u[X], !c.hasOwnProperty(X) || x === C || x == null && C == null || ye(l, n, X, x, c, C);
  }
  var os = null, fs = null;
  function Ba(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function gu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Do(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Bn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Oo = null;
  function bu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Oo ? !1 : (Oo = l, !0) : (Oo = null, !1);
  }
  var bd = typeof setTimeout == "function" ? setTimeout : void 0, Av = typeof clearTimeout == "function" ? clearTimeout : void 0, ip = typeof Promise == "function" ? Promise : void 0, zv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ip < "u" ? function(l) {
    return ip.resolve(null).then(l).catch(qn);
  } : bd;
  function qn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function di(l) {
    return l === "head";
  }
  function Sd(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && Fl(y.documentElement), u & 2 && Fl(y.body), u & 4)
              for (u = y.head, Fl(u), y = u.firstChild; y; ) {
                var m = y.nextSibling, g = y.nodeName;
                y[I] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = m;
              }
          }
          if (s === 0) {
            l.removeChild(r), _n(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    _n(n);
  }
  function ss(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ss(u), ef(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Mo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[I])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Pa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Rv(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Pa(l.nextSibling), l === null)) return null;
    return l;
  }
  function rs(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Dv(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Pa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var hi = null;
  function rl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function W(l, n, u) {
    switch (n = Ba(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(z(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(z(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(z(454));
        return l;
      default:
        throw Error(z(451));
    }
  }
  function Fl(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ef(l);
  }
  var Mt = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Set();
  function Td(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Su = Q.d;
  Q.d = {
    f: Ed,
    r: Ad,
    D: Tu,
    C: zd,
    L: yi,
    m: El,
    X: mi,
    S: Il,
    M: am
  };
  function Ed() {
    var l = Su.f(), n = dc();
    return l || n;
  }
  function Ad(l) {
    var n = Mi(l);
    n !== null && n.tag === 5 && n.type === "form" ? uo(n) : Su.r(l);
  }
  var dl = typeof document > "u" ? null : document;
  function en(l, n, u) {
    var c = dl;
    if (c && typeof n == "string" && n) {
      var s = Sa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Tl.has(s) || (Tl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), re(n, "link", l), Gt(n), c.head.appendChild(n)));
    }
  }
  function Tu(l) {
    Su.D(l), en("dns-prefetch", l, null);
  }
  function zd(l, n) {
    Su.C(l, n), en("preconnect", l, n);
  }
  function yi(l, n, u) {
    Su.L(l, n, u);
    var c = dl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Sa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Sa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Sa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Sa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Uo(l);
          break;
        case "script":
          r = qa(l);
      }
      Mt.has(r) || (l = Ge(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Mt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(xo(r)) || n === "script" && c.querySelector(vc(r)) || (n = c.createElement("link"), re(n, "link", l), Gt(n), c.head.appendChild(n)));
    }
  }
  function El(l, n) {
    Su.m(l, n);
    var u = dl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Sa(c) + '"][href="' + Sa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = qa(l);
      }
      if (!Mt.has(r) && (l = Ge({ rel: "modulepreload", href: l }, n), Mt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(vc(r)))
              return;
        }
        c = u.createElement("link"), re(c, "link", l), Gt(c), u.head.appendChild(c);
      }
    }
  }
  function Il(l, n, u) {
    Su.S(l, n, u);
    var c = dl;
    if (c && l) {
      var s = Fn(c).hoistableStyles, r = Uo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var m = { loading: 0, preload: null };
        if (y = c.querySelector(
          xo(r)
        ))
          m.loading = 5;
        else {
          l = Ge(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Mt.get(r)) && Dd(l, u);
          var g = y = c.createElement("link");
          Gt(g), re(g, "link", l), g._p = new Promise(function(M, G) {
            g.onload = M, g.onerror = G;
          }), g.addEventListener("load", function() {
            m.loading |= 1;
          }), g.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Rd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: m
        }, s.set(r, y);
      }
    }
  }
  function mi(l, n) {
    Su.X(l, n);
    var u = dl;
    if (u && l) {
      var c = Fn(u).hoistableScripts, s = qa(l), r = c.get(s);
      r || (r = u.querySelector(vc(s)), r || (l = Ge({ src: l, async: !0 }, n), (n = Mt.get(s)) && Od(l, n), r = u.createElement("script"), Gt(r), re(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function am(l, n) {
    Su.M(l, n);
    var u = dl;
    if (u && l) {
      var c = Fn(u).hoistableScripts, s = qa(l), r = c.get(s);
      r || (r = u.querySelector(vc(s)), r || (l = Ge({ src: l, async: !0, type: "module" }, n), (n = Mt.get(s)) && Od(l, n), r = u.createElement("script"), Gt(r), re(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function cp(l, n, u, c) {
    var s = (s = Be.current) ? Td(s) : null;
    if (!s) throw Error(z(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Uo(u.href), u = Fn(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Uo(u.href);
          var r = Fn(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            xo(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), Mt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Mt.set(l, u), r || op(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(z(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(z(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = qa(u), u = Fn(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(z(444, l));
    }
  }
  function Uo(l) {
    return 'href="' + Sa(l) + '"';
  }
  function xo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ho(l) {
    return Ge({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function op(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), re(n, "link", u), Gt(n), l.head.appendChild(n));
  }
  function qa(l) {
    return '[src="' + Sa(l) + '"]';
  }
  function vc(l) {
    return "script[async]" + l;
  }
  function fp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Sa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Gt(c), c;
          var s = Ge({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Gt(c), re(c, "style", s), Rd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Uo(u.href);
          var r = l.querySelector(
            xo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Gt(r), r;
          c = Ho(u), (s = Mt.get(s)) && Dd(c, s), r = (l.ownerDocument || l).createElement("link"), Gt(r);
          var y = r;
          return y._p = new Promise(function(m, g) {
            y.onload = m, y.onerror = g;
          }), re(r, "link", c), n.state.loading |= 4, Rd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = qa(u.src), (s = l.querySelector(
            vc(r)
          )) ? (n.instance = s, Gt(s), s) : (c = u, (s = Mt.get(r)) && (c = Ge({}, u), Od(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Gt(s), re(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(z(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Rd(c, u.precedence, l));
    return n.instance;
  }
  function Rd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var m = c[y];
      if (m.dataset.precedence === n) r = m;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Dd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Od(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var pi = null;
  function nm(l, n, u) {
    if (pi === null) {
      var c = /* @__PURE__ */ new Map(), s = pi = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = pi, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[I] || r[$t] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var m = c.get(y);
        m ? m.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function um(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function sp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function im(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Co = null;
  function rp() {
  }
  function dp(l, n, u) {
    if (Co === null) throw Error(z(475));
    var c = Co;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Uo(u.href), r = l.querySelector(
          xo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = ds.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Gt(r);
          return;
        }
        r = l.ownerDocument || l, u = Ho(u), (s = Mt.get(s)) && Dd(u, s), r = r.createElement("link"), Gt(r);
        var y = r;
        y._p = new Promise(function(m, g) {
          y.onload = m, y.onerror = g;
        }), re(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = ds.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function cm() {
    if (Co === null) throw Error(z(475));
    var l = Co;
    return l.stylesheets && l.count === 0 && hs(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && hs(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function ds() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) hs(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var No = null;
  function hs(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, No = /* @__PURE__ */ new Map(), n.forEach(da, l), No = null, ds.call(l));
  }
  function da(l, n) {
    if (!(n.state.loading & 4)) {
      var u = No.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), No.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = ds.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Pl = {
    $$typeof: Ut,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0
  };
  function Ov(l, n, u, c, s, r, y, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nu(0), this.hiddenUpdates = Nu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function om(l, n, u, c, s, r, y, m, g, M, G, X) {
    return l = new Ov(
      l,
      n,
      u,
      y,
      m,
      g,
      M,
      X
    ), n = 1, r === !0 && (n |= 24), r = Ql(3, null, null, n), l.current = r, r.stateNode = l, n = eo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, gr(r), l;
  }
  function fm(l) {
    return l ? (l = Jc, l) : Jc;
  }
  function sm(l, n, u, c, s, r) {
    s = fm(s), c.context === null ? c.context = s : c.pendingContext = s, c = Ll(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = bn(l, c, n), u !== null && (sa(u, l, n), Wi(u, l, n));
  }
  function rm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Md(l, n) {
    rm(l, n), (l = l.alternate) && rm(l, n);
  }
  function dm(l) {
    if (l.tag === 13) {
      var n = hn(l, 67108864);
      n !== null && sa(n, l, 67108864), Md(l, 67108864);
    }
  }
  var ys = !0;
  function hp(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = Q.p;
    try {
      Q.p = 2, hm(l, n, u, c);
    } finally {
      Q.p = r, A.T = s;
    }
  }
  function yp(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = Q.p;
    try {
      Q.p = 8, hm(l, n, u, c);
    } finally {
      Q.p = r, A.T = s;
    }
  }
  function hm(l, n, u, c) {
    if (ys) {
      var s = Ud(c);
      if (s === null)
        Na(
          l,
          n,
          c,
          xd,
          u
        ), gc(l, c);
      else if (pp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (gc(l, c), n & 4 && -1 < mp.indexOf(l)) {
        for (; s !== null; ) {
          var r = Mi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = la(r.pendingLanes);
                  if (y !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; y; ) {
                      var g = 1 << 31 - Gl(y);
                      m.entanglements[1] |= g, y &= ~g;
                    }
                    Wl(r), (Ke & 6) === 0 && (id = ta() + 500, ts(0));
                  }
                }
                break;
              case 13:
                m = hn(r, 2), m !== null && sa(m, r, 2), dc(), Md(r, 2);
            }
          if (r = Ud(c), r === null && Na(
            l,
            n,
            c,
            xd,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Na(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Ud(l) {
    return l = ks(l), ym(l);
  }
  var xd = null;
  function ym(l) {
    if (xd = null, l = nl(l), l !== null) {
      var n = he(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = ut(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return xd = l, null;
  }
  function mm(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Wo()) {
          case n0:
            return 2;
          case fh:
            return 8;
          case Fo:
          case sh:
            return 32;
          case Cc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Bo = !1, Yn = null, Eu = null, Au = null, ms = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map(), vi = [], mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function gc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Eu = null;
        break;
      case "mouseover":
      case "mouseout":
        Au = null;
        break;
      case "pointerover":
      case "pointerout":
        ms.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ps.delete(n.pointerId);
    }
  }
  function bc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Mi(n), n !== null && dm(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function pp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Yn = bc(
          Yn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Eu = bc(
          Eu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Au = bc(
          Au,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return ms.set(
          r,
          bc(
            ms.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, ps.set(
          r,
          bc(
            ps.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function pm(l) {
    var n = nl(l.target);
    if (n !== null) {
      var u = he(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = ut(u), n !== null) {
            l.blockedOn = n, ov(l.priority, function() {
              if (u.tag === 13) {
                var c = fa();
                c = Ga(c);
                var s = hn(u, c);
                s !== null && sa(s, u, c), Md(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function vs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Ud(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Bi = c, u.target.dispatchEvent(c), Bi = null;
      } else
        return n = Mi(u), n !== null && dm(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function gs(l, n, u) {
    vs(l) && u.delete(n);
  }
  function qo() {
    Bo = !1, Yn !== null && vs(Yn) && (Yn = null), Eu !== null && vs(Eu) && (Eu = null), Au !== null && vs(Au) && (Au = null), ms.forEach(gs), ps.forEach(gs);
  }
  function Hd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Bo || (Bo = !0, D.unstable_scheduleCallback(
      D.unstable_NormalPriority,
      qo
    )));
  }
  var Sc = null;
  function vm(l) {
    Sc !== l && (Sc = l, D.unstable_scheduleCallback(
      D.unstable_NormalPriority,
      function() {
        Sc === l && (Sc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (ym(c || u) === null)
              continue;
            break;
          }
          var r = Mi(u);
          r !== null && (l.splice(n, 3), n -= 3, jr(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function _n(l) {
    function n(g) {
      return Hd(g, l);
    }
    Yn !== null && Hd(Yn, l), Eu !== null && Hd(Eu, l), Au !== null && Hd(Au, l), ms.forEach(n), ps.forEach(n);
    for (var u = 0; u < vi.length; u++) {
      var c = vi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < vi.length && (u = vi[0], u.blockedOn === null); )
      pm(u), u.blockedOn === null && vi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[Ol] || null;
        if (typeof r == "function")
          y || vm(u);
        else if (y) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Ol] || null)
              m = y.formAction;
            else if (ym(s) !== null) continue;
          } else m = y.action;
          typeof m == "function" ? u[c + 1] = m : (u.splice(c, 3), c -= 3), vm(u);
        }
      }
  }
  function gm(l) {
    this._internalRoot = l;
  }
  Cd.prototype.render = gm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(z(409));
    var u = n.current, c = fa();
    sm(u, c, l, n, null, null);
  }, Cd.prototype.unmount = gm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      sm(l.current, 2, null, l, null, null), dc(), n[qc] = null;
    }
  };
  function Cd(l) {
    this._internalRoot = l;
  }
  Cd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = o0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < vi.length && n !== 0 && n < vi[u].priority; u++) ;
      vi.splice(u, 0, l), u === 0 && pm(l);
    }
  };
  var bm = K.version;
  if (bm !== "19.1.0")
    throw Error(
      z(
        527,
        bm,
        "19.1.0"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(z(188)) : (l = Object.keys(l).join(","), Error(z(268, l)));
    return l = Z(n), l = l !== null ? Yt(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Nl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bs.isDisabled && bs.supportsFiber)
      try {
        Nc = bs.inject(
          Nl
        ), Dl = bs;
      } catch {
      }
  }
  return l0.createRoot = function(l, n) {
    if (!le(l)) throw Error(z(299));
    var u = !1, c = "", s = oo, r = py, y = Lf, m = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks)), n = om(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      m,
      null
    ), l[qc] = n.current, em(l), new gm(n);
  }, l0.hydrateRoot = function(l, n, u) {
    if (!le(l)) throw Error(z(299));
    var c = !1, s = "", r = oo, y = py, m = Lf, g = null, M = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (m = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (M = u.formState)), n = om(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      m,
      g,
      M
    ), n.context = fm(null), u = n.current, c = fa(), c = Ga(c), s = Ll(c), s.callback = null, bn(u, s, c), u = c, n.current.lanes = u, Oi(n, u), Wl(n), l[qc] = n.current, em(l), new Cd(n);
  }, l0.version = "19.1.0", l0;
}
var a0 = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb;
function n2() {
  return qb || (qb = 1, process.env.NODE_ENV !== "production" && function() {
    function D(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function K(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = ye(e) ? e.slice() : Ae({}, e);
      return f[o] = K(e[o], t, a + 1, i), f;
    }
    function k(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return z(e, t, a, 0);
      }
    }
    function z(e, t, a, i) {
      var o = t[i], f = ye(e) ? e.slice() : Ae({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], ye(f) ? f.splice(o, 1) : delete f[o]) : f[o] = z(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function le(e, t, a) {
      var i = t[a], o = ye(e) ? e.slice() : Ae({}, e);
      return a + 1 === t.length ? (ye(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = le(e[i], t, a + 1), o);
    }
    function he() {
      return !1;
    }
    function ut() {
      return null;
    }
    function Ct() {
    }
    function Z() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Yt() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ge() {
    }
    function lt(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function Ee(e, t, a, i) {
      return new yf(e, t, a, i);
    }
    function gt(e, t) {
      e.context === Yo && ($e(e.current, 2, t, e, null, null), ic());
    }
    function yt(e, t) {
      if (Gn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fo(), hf(
          e.current,
          t,
          a
        ), ic();
      }
    }
    function _l(e) {
      Gn = e;
    }
    function ft(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function et(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function ga(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ut(e) {
      if (et(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function pl(e) {
      var t = e.alternate;
      if (!t) {
        if (t = et(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Ut(o), e;
            if (f === i) return Ut(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function jl(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = jl(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function xt(e) {
      return e === null || typeof e != "object" ? null : (e = lm && e[lm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ve(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === gd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ge:
          return "Fragment";
        case zo:
          return "Profiler";
        case Ao:
          return "StrictMode";
        case Ro:
          return "Suspense";
        case ri:
          return "SuspenseList";
        case tm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case pc:
            return "Portal";
          case Na:
            return (e.displayName || "Context") + ".Provider";
          case vd:
            return (e._context.displayName || "Context") + ".Consumer";
          case vu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case cs:
            return t = e.displayName || null, t !== null ? t : Ve(e.type) || "Memo";
          case ra:
            t = e._payload, e = e._init;
            try {
              return Ve(e(t));
            } catch {
            }
        }
      return null;
    }
    function Jt(e) {
      return typeof e.tag == "number" ? ne(e) : typeof e.name == "string" ? e.name : null;
    }
    function ne(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ve(t);
        case 8:
          return t === Ao ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return ne(e.return);
      }
      return null;
    }
    function bt(e) {
      return { current: e };
    }
    function Ze(e, t) {
      0 > Ba ? console.error("Unexpected pop.") : (t !== fs[Ba] && console.error("Unexpected Fiber popped."), e.current = os[Ba], os[Ba] = null, fs[Ba] = null, Ba--);
    }
    function pe(e, t, a) {
      Ba++, os[Ba] = e.current, fs[Ba] = a, e.current = t;
    }
    function Kt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Rl(e, t) {
      pe(Bn, t, e), pe(Do, e, e), pe(gu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ke(t) : Uc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = ke(t), t = kl(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = ih;
                break;
              case "math":
                t = Zp;
                break;
              default:
                t = Uc;
            }
      }
      a = a.toLowerCase(), a = ph(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Ze(gu, e), pe(gu, a, e);
    }
    function _t(e) {
      Ze(gu, e), Ze(Do, e), Ze(Bn, e);
    }
    function A() {
      return Kt(gu.current);
    }
    function Q(e) {
      e.memoizedState !== null && pe(Oo, e, e);
      var t = Kt(gu.current), a = e.type, i = kl(t.context, a);
      a = ph(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (pe(Do, e, e), pe(gu, i, e));
    }
    function L(e) {
      Do.current === e && (Ze(gu, e), Ze(Do, e)), Oo.current === e && (Ze(Oo, e), Fm._currentValue = js);
    }
    function ce(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function B(e) {
      try {
        return te(e), !1;
      } catch {
        return !0;
      }
    }
    function te(e) {
      return "" + e;
    }
    function $(e, t) {
      if (B(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ce(e)
        ), te(e);
    }
    function oe(e, t) {
      if (B(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ce(e)
        ), te(e);
    }
    function Oe(e) {
      if (B(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ce(e)
        ), te(e);
    }
    function at(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        hi = t.inject(e), rl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Be(e) {
      if (typeof Dv == "function" && Pa(e), rl && typeof rl.setStrictMode == "function")
        try {
          rl.setStrictMode(hi, e);
        } catch (t) {
          Fl || (Fl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function xu(e) {
      W = e;
    }
    function St() {
      W !== null && typeof W.markCommitStopped == "function" && W.markCommitStopped();
    }
    function al(e) {
      W !== null && typeof W.markComponentRenderStarted == "function" && W.markComponentRenderStarted(e);
    }
    function ba() {
      W !== null && typeof W.markComponentRenderStopped == "function" && W.markComponentRenderStopped();
    }
    function Ai(e) {
      W !== null && typeof W.markRenderStarted == "function" && W.markRenderStarted(e);
    }
    function Gs() {
      W !== null && typeof W.markRenderStopped == "function" && W.markRenderStopped();
    }
    function zi(e, t) {
      W !== null && typeof W.markStateUpdateScheduled == "function" && W.markStateUpdateScheduled(e, t);
    }
    function oh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Td(e) / Su | 0) | 0;
    }
    function uv(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ri(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return 64;
        case 128:
          return 128;
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ta(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ri(i) : (d &= h, d !== 0 ? o = Ri(d) : a || (a = h & ~e, a !== 0 && (o = Ri(a))))) : (h = i & ~f, h !== 0 ? o = Ri(h) : d !== 0 ? o = Ri(d) : a || (a = i & ~e, a !== 0 && (o = Ri(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function Wo(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function n0(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function fh() {
      var e = Ed;
      return Ed <<= 1, (Ed & 4194048) === 0 && (Ed = 256), e;
    }
    function Fo() {
      var e = Ad;
      return Ad <<= 1, (Ad & 62914560) === 0 && (Ad = 4194304), e;
    }
    function sh(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Cc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function iv(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, p = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var H = 31 - Tl(a), Y = 1 << H;
        h[H] = 0, p[H] = -1;
        var U = v[H];
        if (U !== null)
          for (v[H] = null, H = 0; H < U.length; H++) {
            var _ = U[H];
            _ !== null && (_.lane &= -536870913);
          }
        a &= ~Y;
      }
      i !== 0 && u0(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function u0(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Tl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Nc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Tl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Dl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function $n(e, t, a) {
      if (Mt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Tl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Gl(e, t) {
      if (Mt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Tl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function rh(e) {
      return e &= -e, dl < e ? en < e ? (e & 134217727) !== 0 ? Tu : zd : en : dl;
    }
    function i0() {
      var e = re.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Tu : md(e.type));
    }
    function cv(e, t) {
      var a = re.p;
      try {
        return re.p = e, t();
      } finally {
        re.p = a;
      }
    }
    function Bc(e) {
      delete e[El], delete e[Il], delete e[am], delete e[cp], delete e[Uo];
    }
    function Wn(e) {
      var t = e[El];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[mi] || a[El]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = bo(e); e !== null; ) {
              if (a = e[El])
                return a;
              e = bo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function la(e) {
      if (e = e[El] || e[mi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Hu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function nn(e) {
      var t = e[xo];
      return t || (t = e[xo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function kt(e) {
      e[Ho] = !0;
    }
    function Cu(e, t) {
      Di(e, t), Di(e + "Capture", t);
    }
    function Di(e, t) {
      qa[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), qa[e] = t;
      var a = e.toLowerCase();
      for (vc[a] = e, e === "onDoubleClick" && (vc.ondblclick = e), e = 0; e < t.length; e++)
        op.add(t[e]);
    }
    function Nu(e, t) {
      fp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Oi(e) {
      return bu.call(Od, e) ? !0 : bu.call(Dd, e) ? !1 : Rd.test(e) ? Od[e] = !0 : (Dd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function c0(e, t, a) {
      if (Oi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : ($(a, t), e === "" + a ? a : e);
      }
    }
    function Io(e, t, a) {
      if (Oi(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          $(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Po(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        $(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Ga(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        $(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Vs() {
    }
    function o0() {
      if (pi === 0) {
        nm = console.log, um = console.info, sp = console.warn, im = console.error, Co = console.group, rp = console.groupCollapsed, dp = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Vs,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      pi++;
    }
    function ov() {
      if (pi--, pi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ae({}, e, { value: nm }),
          info: Ae({}, e, { value: um }),
          warn: Ae({}, e, { value: sp }),
          error: Ae({}, e, { value: im }),
          group: Ae({}, e, { value: Co }),
          groupCollapsed: Ae({}, e, { value: rp }),
          groupEnd: Ae({}, e, { value: dp })
        });
      }
      0 > pi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function jt(e) {
      if (cm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          cm = t && t[1] || "", ds = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + cm + e + ds;
    }
    function $t(e, t) {
      if (!e || No) return "";
      var a = hs.get(e);
      if (a !== void 0) return a;
      No = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = N.H, N.H = null, o0();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var U = function() {
                  throw Error();
                };
                if (Object.defineProperty(U.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(U, []);
                  } catch (P) {
                    var _ = P;
                  }
                  Reflect.construct(e, [], U);
                } else {
                  try {
                    U.call();
                  } catch (P) {
                    _ = P;
                  }
                  e.call(U.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (P) {
                  _ = P;
                }
                (U = e()) && typeof U.catch == "function" && U.catch(function() {
                });
              }
            } catch (P) {
              if (P && _ && typeof P.stack == "string")
                return [P.stack, _.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], p = d[1];
        if (h && p) {
          var v = h.split(`
`), H = p.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < H.length && !H[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === H.length)
            for (f = v.length - 1, d = H.length - 1; 1 <= f && 0 <= d && v[f] !== H[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== H[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== H[d]) {
                    var Y = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && hs.set(e, Y), Y;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        No = !1, N.H = i, ov(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? jt(v) : "", typeof e == "function" && hs.set(e, v), v;
    }
    function Ol(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function qc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return jt(e.type);
        case 16:
          return jt("Lazy");
        case 13:
          return jt("Suspense");
        case 19:
          return jt("SuspenseList");
        case 0:
        case 15:
          return $t(e.type, !1);
        case 11:
          return $t(e.type.render, !1);
        case 1:
          return $t(e.type, !0);
        case 31:
          return jt("Activity");
        default:
          return "";
      }
    }
    function Xs(e) {
      try {
        var t = "";
        do {
          t += qc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = jt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    function f0(e) {
      return (e = e ? e.displayName || e.name : "") ? jt(e) : "";
    }
    function Qs() {
      if (da === null) return null;
      var e = da._debugOwner;
      return e != null ? Jt(e) : null;
    }
    function s0() {
      if (da === null) return "";
      var e = da;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += jt(e.type);
            break;
          case 13:
            t += jt("Suspense");
            break;
          case 19:
            t += jt("SuspenseList");
            break;
          case 31:
            t += jt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += f0(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += f0(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Ol(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Ol(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function I(e, t, a, i, o, f, d) {
      var h = da;
      ef(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        ef(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function ef(e) {
      N.getCurrentStack = e === null ? null : s0, Pl = !1, da = e;
    }
    function nl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Oe(e), e;
        default:
          return "";
      }
    }
    function Mi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tf(e) {
      var t = Mi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Oe(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Oe(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Oe(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Fn(e) {
      e._valueTracker || (e._valueTracker = tf(e));
    }
    function Gt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Mi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function lf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function aa(e) {
      return e.replace(
        Ov,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Bu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || fm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Qs() || "A component",
        t.type
      ), fm = !0), t.value === void 0 || t.defaultValue === void 0 || om || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Qs() || "A component",
        t.type
      ), om = !0);
    }
    function qu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? ($(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + nl(t)) : e.value !== "" + nl(t) && (e.value = "" + nl(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ws(e, d, nl(t)) : a != null ? ws(e, d, nl(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? ($(h, "name"), e.name = "" + nl(h)) : e.removeAttribute("name");
    }
    function r0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && ($(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + nl(a) : "", t = t != null ? "" + nl(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && ($(d, "name"), e.name = d);
    }
    function ws(e, t, a) {
      t === "number" && lf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function dh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? us.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || rm || (rm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Md || (Md = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || sm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), sm = !0);
    }
    function d0() {
      var e = Qs();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function In(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + nl(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function af(e, t) {
      for (e = 0; e < ys.length; e++) {
        var a = ys[e];
        if (t[a] != null) {
          var i = ye(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            d0()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            d0()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || dm || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), dm = !0);
    }
    function un(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || hp || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Qs() || "A component"
      ), hp = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ls(e, t, a) {
      if (t != null && (t = "" + nl(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + nl(a) : "";
    }
    function hh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (ye(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = nl(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Ui(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ui(e.children[0], t) : e;
    }
    function Ml(e) {
      return "  " + "  ".repeat(e);
    }
    function Yu(e) {
      return "+ " + "  ".repeat(e);
    }
    function xi(e) {
      return "- " + "  ".repeat(e);
    }
    function yh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function vl(e, t) {
      return yp.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function nf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Yu(a) + vl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Yu(a) + vl(e, i) + `
` + xi(a) + vl(t, i) + `
`;
      }
      return Ml(a) + vl(e, i) + `
`;
    }
    function mh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function _u(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (ye(e)) return "[...]";
          if (e.$$typeof === si)
            return (t = Ve(e.type)) ? "<" + t + ">" : "<...>";
          var a = mh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = _u(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Hi(e, t) {
      return typeof e != "string" || yp.test(e) ? "{" + _u(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Yc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Hi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function fv(e, t, a) {
      var i = "", o = Ae({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = _u(e[f], d);
          t.hasOwnProperty(f) ? (d = _u(t[f], d), i += Yu(a) + f + ": " + h + `
`, i += xi(a) + f + ": " + d + `
`) : i += Yu(a) + f + ": " + h + `
`;
        }
      for (var p in o)
        o.hasOwnProperty(p) && (e = _u(
          o[p],
          120 - 2 * a - p.length - 2
        ), i += xi(a) + p + ": " + e + `
`);
      return i;
    }
    function Sa(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && f.set(
          v.toLowerCase(),
          v
        );
      if (f.size === 1 && f.has("children"))
        o += Yc(
          e,
          t,
          Ml(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, p = f.get(d.toLowerCase());
            if (p !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              p = a[p];
              var H = Hi(
                v,
                h
              );
              h = Hi(
                p,
                h
              ), typeof v == "object" && v !== null && typeof p == "object" && p !== null && mh(v) === "Object" && mh(p) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(p).length || -1 < H.indexOf("...") || -1 < h.indexOf("...")) ? o += Ml(i + 1) + d + `={{
` + fv(
                v,
                p,
                i + 2
              ) + Ml(i + 1) + `}}
` : (o += Yu(i + 1) + d + "=" + H + `
`, o += xi(i + 1) + d + "=" + h + `
`);
            } else
              o += Ml(i + 1) + d + "=" + Hi(t[d], h) + `
`;
          }
        f.forEach(function(Y) {
          if (Y !== "children") {
            var U = 120 - 2 * (i + 1) - Y.length - 1;
            o += xi(i + 1) + Y + "=" + Hi(a[Y], U) + `
`;
          }
        }), o = o === "" ? Ml(i) + "<" + e + `>
` : Ml(i) + "<" + e + `
` + o + Ml(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += nf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + nf("" + t, null, i + 1) : o + nf("" + t, void 0, i + 1)), o;
    }
    function Zs(e, t) {
      var a = yh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Zs(e, t), e = e.sibling;
        return a;
      }
      return Ml(t) + "<" + a + `>
`;
    }
    function Js(e, t) {
      var a = Ui(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ml(t) + `...
` + Js(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ml(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = nf(o, e.serverProps, t), t++;
      else if (f = yh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var p = Hi(o[v], 15);
              if (d -= v.length + p.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + p;
            }
          i = Ml(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Yc(
            f,
            o,
            Yu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Sa(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (v += Js(d, t), f++) : v += Zs(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += Ml(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (xi(t) + vl(f, 120 - 2 * t) + `
`) : v + Yc(
          f.type,
          f.props,
          xi(t)
        );
      return a + i + v;
    }
    function uf(e) {
      try {
        return `

` + Js(e, 0);
      } catch {
        return "";
      }
    }
    function Ci(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? uf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ph(e, t) {
      var a = Ae({}, e || mm), i = { tag: t };
      return Ud.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), xd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function vh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return ym.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function _c(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function h0(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Ks(e, t) {
      t = t || mm;
      var a = t.current;
      if (t = (a = vh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : _c(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Bo[t]) return !1;
      Bo[t] = !0;
      var o = (t = da) ? h0(t.return, i) : null, f = t !== null && o !== null ? Ci(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || I(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function cf(e, t, a) {
      if (a || vh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Bo[a]) return !1;
      Bo[a] = !0;
      var i = (a = da) ? h0(a, t) : null;
      return a = a !== null && i !== null ? Ci(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Ni(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function sv(e) {
      return e.replace(vi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function y0(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? gc.hasOwnProperty(t) && gc[t] || (gc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        sv(t.replace(ps, "ms-"))
      )) : ms.test(t) ? gc.hasOwnProperty(t) && gc[t] || (gc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !mp.test(a) || bc.hasOwnProperty(a) && bc[a] || (bc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(mp, "")
      )), typeof a == "number" && (isNaN(a) ? pp || (pp = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || pm || (pm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || vs.has(t) ? t === "float" ? e.cssFloat = a : (oe(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function of(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Yn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Yn[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var p in t)
            for (o = Yn[p] || [p], f = 0; f < o.length; f++)
              h[o[f]] = p;
          p = {};
          for (var v in i)
            if (o = i[v], (f = h[v]) && o !== f && (d = o + "," + f, !p[d])) {
              p[d] = !0, d = console;
              var H = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                H == null || typeof H == "boolean" || H === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var Y in a)
          !a.hasOwnProperty(Y) || t != null && t.hasOwnProperty(Y) || (Y.indexOf("--") === 0 ? e.setProperty(Y, "") : Y === "float" ? e.cssFloat = "" : e[Y] = "");
        for (var U in t)
          v = t[U], t.hasOwnProperty(U) && a[U] !== v && y0(e, U, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && y0(e, i, t[i]);
    }
    function Bi(e) {
      if (e.indexOf("-") === -1) return !1;
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
          return !0;
      }
    }
    function ks(e) {
      return Hd.get(e) || e;
    }
    function jc(e, t) {
      if (bu.call(_n, t) && _n[t])
        return !0;
      if (Cd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = vm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), _n[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), _n[t] = !0;
      }
      if (gm.test(t)) {
        if (e = t.toLowerCase(), e = vm.hasOwnProperty(e) ? e : null, e == null) return _n[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), _n[t] = !0);
      }
      return !0;
    }
    function Gc(e, t) {
      var a = [], i;
      for (i in t)
        jc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function m0(e, t, a, i) {
      if (bu.call(Nl, t) && Nl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Nl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Nl[t] = !0;
        if (bs.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Nl[t] = !0;
      } else if (bs.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Nl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Nl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Nl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Nl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Nl[t] = !0;
      if (Sc.hasOwnProperty(o)) {
        if (o = Sc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Nl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Nl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Nl[t] = !0);
          }
        case "function":
        case "symbol":
          return Nl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Nl[t] = !0;
          }
      }
      return !0;
    }
    function gh(e, t, a) {
      var i = [], o;
      for (o in t)
        m0(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Vc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function qi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function cn(e) {
      var t = la(e);
      if (t && (e = t.stateNode)) {
        var a = e[Il] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (qu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for ($(t, "name"), a = a.querySelectorAll(
                'input[name="' + aa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Il] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  qu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Gt(i);
            }
            break e;
          case "textarea":
            Ls(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && In(e, !!a.multiple, t, !1);
        }
      }
    }
    function $s(e, t, a) {
      if (m) return e(t, a);
      m = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (m = !1, (r !== null || y !== null) && (ic(), r && (t = r, e = y, y = r = null, cn(t), e)))
          for (t = 0; t < e.length; t++) cn(e[t]);
      }
    }
    function Pn(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Il] || null;
      if (i === null) return null;
      a = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function eu() {
      if (C) return C;
      var e, t = x, a = t.length, i, o = "value" in X ? X.value : X.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return C = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Xc(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Yi() {
      return !0;
    }
    function bh() {
      return !1;
    }
    function ul(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Yi : bh, this.isPropagationStopped = bh, this;
      }
      return Ae(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Yi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Yi);
        },
        persist: function() {
        },
        isPersistent: Yi
      }), t;
    }
    function Ws(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Fb[e]) ? !!t[e] : !1;
    }
    function Fs() {
      return Ws;
    }
    function Ul(e, t) {
      switch (e) {
        case "keyup":
          return fS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Cg;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ju(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Is(e, t) {
      switch (e) {
        case "compositionend":
          return ju(t);
        case "keypress":
          return t.which !== Bg ? null : (Yg = !0, qg);
        case "textInput":
          return e = t.data, e === qg && Yg ? null : e;
        default:
          return null;
      }
    }
    function ff(e, t) {
      if (Nd)
        return e === "compositionend" || !Uv && Ul(e, t) ? (e = eu(), C = x = X = null, Nd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ng && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function p0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!rS[e.type] : t === "textarea";
    }
    function Sh(e) {
      if (!g) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Ps(e, t, a, i) {
      r ? y ? y.push(i) : y = [i] : r = i, t = Wf(t, "onChange"), 0 < t.length && (a = new ie(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function sf(e) {
      Mn(e, 0);
    }
    function _i(e) {
      var t = Hu(e);
      if (Gt(t)) return e;
    }
    function Th(e, t) {
      if (e === "change") return t;
    }
    function v0() {
      Tm && (Tm.detachEvent("onpropertychange", g0), Em = Tm = null);
    }
    function g0(e) {
      if (e.propertyName === "value" && _i(Em)) {
        var t = [];
        Ps(
          t,
          Em,
          e,
          qi(e)
        ), $s(sf, t);
      }
    }
    function rv(e, t, a) {
      e === "focusin" ? (v0(), Tm = t, Em = a, Tm.attachEvent("onpropertychange", g0)) : e === "focusout" && v0();
    }
    function Eh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _i(Em);
    }
    function dv(e, t) {
      if (e === "click") return _i(t);
    }
    function hv(e, t) {
      if (e === "input" || e === "change")
        return _i(t);
    }
    function yv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function rf(e, t) {
      if (ha(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!bu.call(t, o) || !ha(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function b0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Ah(e, t) {
      var a = b0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = b0(a);
      }
    }
    function S0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? S0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function T0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = lf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = lf(e.document);
      }
      return t;
    }
    function zh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function E0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Hv || Bd == null || Bd !== lf(i) || (i = Bd, "selectionStart" in i && zh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Am && rf(Am, i) || (Am = i, i = Wf(xv, "onSelect"), 0 < i.length && (t = new ie(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Bd)));
    }
    function tu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function ji(e) {
      if (Cv[e]) return Cv[e];
      if (!qd[e]) return e;
      var t = qd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in jg)
          return Cv[e] = t[a];
      return e;
    }
    function Va(e, t) {
      wg.set(e, t), Cu(t, [e]);
    }
    function na(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Bv.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Xs(t)
        }, Bv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Xs(t)
      };
    }
    function df() {
      for (var e = Yd, t = Yv = Yd = 0; t < e; ) {
        var a = jn[t];
        jn[t++] = null;
        var i = jn[t];
        jn[t++] = null;
        var o = jn[t];
        jn[t++] = null;
        var f = jn[t];
        if (jn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && A0(a, o, f);
      }
    }
    function er(e, t, a, i) {
      jn[Yd++] = e, jn[Yd++] = t, jn[Yd++] = a, jn[Yd++] = i, Yv |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Rh(e, t, a, i) {
      return er(e, t, a, i), tr(e);
    }
    function Vl(e, t) {
      return er(e, null, null, t), tr(e);
    }
    function A0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & qv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Tl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function tr(e) {
      if (Zm > BS)
        throw Ns = Zm = 0, Jm = dg = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Ns > qS && (Ns = 0, Jm = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Ia(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Ia(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Gi(e) {
      if (Gn === null) return e;
      var t = Gn(e);
      return t === void 0 ? e : t.current;
    }
    function Dh(e) {
      if (Gn === null) return e;
      var t = Gn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Gi(e.render), e.render !== t) ? (t = { $$typeof: vu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function z0(e, t) {
      if (Gn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ra) && (i = !0);
          break;
        case 11:
          (o === vu || o === ra) && (i = !0);
          break;
        case 14:
        case 15:
          (o === cs || o === ra) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Gn(a), e !== void 0 && e === Gn(t)));
    }
    function R0(e) {
      Gn !== null && typeof WeakSet == "function" && (_d === null && (_d = /* @__PURE__ */ new WeakSet()), _d.add(e));
    }
    function hf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, p = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          p = h;
          break;
        case 11:
          p = h.render;
      }
      if (Gn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, p !== null && (p = Gn(p), p !== void 0 && (a.has(p) ? h = !0 : t.has(p) && (d === 1 ? h = !0 : v = !0))), _d !== null && (_d.has(e) || i !== null && _d.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = Vl(e, 2), i !== null && At(i, e, 2)), o === null || h || hf(
        o,
        t,
        a
      ), f !== null && hf(
        f,
        t,
        a
      );
    }
    function yf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Zg || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Oh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function on(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = Ee(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Gi(e.type);
          break;
        case 1:
          a.type = Gi(e.type);
          break;
        case 11:
          a.type = Dh(e.type);
      }
      return a;
    }
    function Mh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function lr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Oh(e) && (d = 1), h = Gi(h);
      else if (typeof e == "string")
        d = A(), d = To(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case tm:
            return t = Ee(31, a, t, o), t.elementType = tm, t.lanes = f, t;
          case ge:
            return Gu(
              a.children,
              o,
              f,
              t
            );
          case Ao:
            d = 8, o |= ea, o |= zu;
            break;
          case zo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = Ee(12, e, t, i | Bl), t.elementType = zo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ro:
            return t = Ee(13, a, t, o), t.elementType = Ro, t.lanes = f, t;
          case ri:
            return t = Ee(19, a, t, o), t.elementType = ri, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case em:
                case Na:
                  d = 10;
                  break e;
                case vd:
                  d = 9;
                  break e;
                case vu:
                  d = 11, h = Dh(h);
                  break e;
                case cs:
                  d = 14;
                  break e;
                case ra:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : ye(e) ? a = "array" : e !== void 0 && e.$$typeof === si ? (a = "<" + (Ve(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Jt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = Ee(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function mf(e, t, a) {
      return t = lr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Gu(e, t, a, i) {
      return e = Ee(7, e, i, t), e.lanes = a, e;
    }
    function Vu(e, t, a) {
      return e = Ee(6, e, null, t), e.lanes = a, e;
    }
    function Uh(e, t, a) {
      return t = Ee(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Vi(e, t) {
      Xa(), jd[Gd++] = gp, jd[Gd++] = vp, vp = e, gp = t;
    }
    function D0(e, t, a) {
      Xa(), Vn[Xn++] = Tc, Vn[Xn++] = Ec, Vn[Xn++] = Ts, Ts = e;
      var i = Tc;
      e = Ec;
      var o = 32 - Tl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Tl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Tc = 1 << 32 - Tl(t) + o | a << o | i, Ec = f + e;
      } else
        Tc = 1 << f | a << o | i, Ec = e;
    }
    function ar(e) {
      Xa(), e.return !== null && (Vi(e, 1), D0(e, 1, 0));
    }
    function nr(e) {
      for (; e === vp; )
        vp = jd[--Gd], jd[Gd] = null, gp = jd[--Gd], jd[Gd] = null;
      for (; e === Ts; )
        Ts = Vn[--Xn], Vn[Xn] = null, Ec = Vn[--Xn], Vn[Xn] = null, Tc = Vn[--Xn], Vn[Xn] = null;
    }
    function Xa() {
      Le || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Qa(e, t) {
      if (e.return === null) {
        if (Qn === null)
          Qn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Qn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Qn.distanceFromLeaf > t && (Qn.distanceFromLeaf = t);
        }
        return Qn;
      }
      var a = Qa(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function xh(e, t) {
      Ac || (e = Qa(e, 0), e.serverProps = null, t !== null && (t = cd(t), e.serverTail.push(t)));
    }
    function fn(e) {
      var t = "", a = Qn;
      throw a !== null && (Qn = null, t = uf(a)), Qc(
        na(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), _v;
    }
    function Hh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[El] = e, t[Il] = i, Un(a, i), a) {
        case "dialog":
          Me("cancel", t), Me("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Me("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Km.length; a++)
            Me(Km[a], t);
          break;
        case "source":
          Me("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Me("error", t), Me("load", t);
          break;
        case "details":
          Me("toggle", t);
          break;
        case "input":
          Nu("input", i), Me("invalid", t), Bu(t, i), r0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), Fn(t);
          break;
        case "option":
          dh(t, i);
          break;
        case "select":
          Nu("select", i), Me("invalid", t), af(t, i);
          break;
        case "textarea":
          Nu("textarea", i), Me("invalid", t), un(t, i), hh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), Fn(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Ny(t.textContent, a) ? (i.popover != null && (Me("beforetoggle", t), Me("toggle", t)), i.onScroll != null && Me("scroll", t), i.onScrollEnd != null && Me("scrollend", t), i.onClick != null && (t.onclick = hu), t = !0) : t = !1, t || fn(e);
    }
    function Ch(e) {
      for (ya = e.return; ya; )
        switch (ya.tag) {
          case 5:
          case 13:
            bi = !1;
            return;
          case 27:
          case 3:
            bi = !0;
            return;
          default:
            ya = ya.return;
        }
    }
    function Xi(e) {
      if (e !== ya) return !1;
      if (!Le)
        return Ch(e), Le = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || xn(e.type, e.memoizedProps)), a = !a), a && Bt) {
        for (a = Bt; a; ) {
          var i = Qa(e, 0), o = cd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Xy(a) : sl(a.nextSibling);
        }
        fn(e);
      }
      if (Ch(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Bt = Xy(e);
      } else
        t === 27 ? (t = Bt, Hn(e.type) ? (e = zg, zg = null, Bt = e) : Bt = t) : Bt = ya ? sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Qi() {
      Bt = ya = null, Ac = Le = !1;
    }
    function Nh() {
      var e = Es;
      return e !== null && (va === null ? va = e : va.push.apply(
        va,
        e
      ), Es = null), e;
    }
    function Qc(e) {
      Es === null ? Es = [e] : Es.push(e);
    }
    function Bh() {
      var e = Qn;
      if (e !== null) {
        Qn = null;
        for (var t = uf(e); 0 < e.children.length; )
          e = e.children[0];
        I(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function ur() {
      Vd = bp = null, Xd = !1;
    }
    function Xu(e, t, a) {
      pe(jv, t._currentValue, e), t._currentValue = a, pe(Gv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $g && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = $g;
    }
    function lu(e, t) {
      e._currentValue = jv.current;
      var a = Gv.current;
      Ze(Gv, t), e._currentRenderer = a, Ze(jv, t);
    }
    function qh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Yh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var p = 0; p < t.length; p++)
              if (h.context === t[p]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), qh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), qh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function il(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            ha(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Oo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Fm) : e = [Fm]);
        }
        o = o.return;
      }
      e !== null && Yh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Qu(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!ha(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function wu(e) {
      bp = e, Vd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function it(e) {
      return Xd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), _h(bp, e);
    }
    function pf(e, t) {
      return bp === null && wu(e), _h(e, t);
    }
    function _h(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Vd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Vd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Vd = Vd.next = t;
      return a;
    }
    function vf() {
      return {
        controller: new bS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function wi(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function sn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && SS(TS, function() {
        e.controller.abort();
      });
    }
    function wa() {
      var e = As;
      return As = 0, e;
    }
    function Lu(e) {
      var t = As;
      return As = e, t;
    }
    function Li(e) {
      var t = As;
      return As += e, t;
    }
    function ir(e) {
      Ya = Qd(), 0 > e.actualStartTime && (e.actualStartTime = Ya);
    }
    function au(e) {
      if (0 <= Ya) {
        var t = Qd() - Ya;
        e.actualDuration += t, e.selfBaseDuration = t, Ya = -1;
      }
    }
    function Zi(e) {
      if (0 <= Ya) {
        var t = Qd() - Ya;
        e.actualDuration += t, Ya = -1;
      }
    }
    function Ta() {
      if (0 <= Ya) {
        var e = Qd() - Ya;
        Ya = -1, As += e;
      }
    }
    function La() {
      Ya = Qd();
    }
    function rn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function O0(e, t) {
      if (zm === null) {
        var a = zm = [];
        Vv = 0, zs = My(), wd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Vv++, t.then(jh, jh), t;
    }
    function jh() {
      if (--Vv === 0 && zm !== null) {
        wd !== null && (wd.status = "fulfilled");
        var e = zm;
        zm = null, zs = 0, wd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function M0(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Gh() {
      var e = Rs.current;
      return e !== null ? e : ct.pooledCache;
    }
    function cr(e, t) {
      t === null ? pe(Rs, Rs.current, e) : pe(Rs, t.pool, e);
    }
    function U0() {
      var e = Gh();
      return e === null ? null : { parent: hl._currentValue, pool: e };
    }
    function Vh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Xh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function wc() {
    }
    function Ea(e, t, a) {
      N.actQueue !== null && (N.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(wc, wc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, ua(e), e;
        default:
          if (typeof t.status == "string")
            t.then(wc, wc);
          else {
            if (e = ct, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, ua(e), e;
          }
          throw Cm = t, Rp = !0, Hm;
      }
    }
    function Qh() {
      if (Cm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Cm;
      return Cm = null, Rp = !1, e;
    }
    function ua(e) {
      if (e === Hm || e === zp)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Xl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Zu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function dn(e) {
      return {
        lane: e,
        tag: e1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Za(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, wv === i && !a1) {
        var o = ne(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), a1 = !0;
      }
      return (We & pa) !== tn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = tr(e), A0(e, null, a), t) : (er(e, i, t, a), tr(e));
    }
    function Ju(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Nc(e, a);
      }
    }
    function Lc(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function hn() {
      if (Lv) {
        var e = wd;
        if (e !== null) throw e;
      }
    }
    function Zc(e, t, a, i) {
      Lv = !1;
      var o = e.updateQueue;
      _o = !1, wv = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var p = h, v = p.next;
        p.next = null, d === null ? f = v : d.next = v, d = p;
        var H = e.alternate;
        H !== null && (H = H.updateQueue, h = H.lastBaseUpdate, h !== d && (h === null ? H.firstBaseUpdate = v : h.next = v, H.lastBaseUpdate = p));
      }
      if (f !== null) {
        var Y = o.baseState;
        d = 0, H = v = p = null, h = f;
        do {
          var U = h.lane & -536870913, _ = U !== h.lane;
          if (_ ? (Ne & U) === U : (i & U) === U) {
            U !== 0 && U === zs && (Lv = !0), H !== null && (H = H.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              U = e;
              var P = h, de = t, ot = a;
              switch (P.tag) {
                case t1:
                  if (P = P.payload, typeof P == "function") {
                    Xd = !0;
                    var Ye = P.call(
                      ot,
                      Y,
                      de
                    );
                    if (U.mode & ea) {
                      Be(!0);
                      try {
                        P.call(ot, Y, de);
                      } finally {
                        Be(!1);
                      }
                    }
                    Xd = !1, Y = Ye;
                    break e;
                  }
                  Y = P;
                  break e;
                case Qv:
                  U.flags = U.flags & -65537 | 128;
                case e1:
                  if (Ye = P.payload, typeof Ye == "function") {
                    if (Xd = !0, P = Ye.call(
                      ot,
                      Y,
                      de
                    ), U.mode & ea) {
                      Be(!0);
                      try {
                        Ye.call(ot, Y, de);
                      } finally {
                        Be(!1);
                      }
                    }
                    Xd = !1;
                  } else P = Ye;
                  if (P == null) break e;
                  Y = Ae({}, Y, P);
                  break e;
                case l1:
                  _o = !0;
              }
            }
            U = h.callback, U !== null && (e.flags |= 64, _ && (e.flags |= 8192), _ = o.callbacks, _ === null ? o.callbacks = [U] : _.push(U));
          } else
            _ = {
              lane: U,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, H === null ? (v = H = _, p = Y) : H = H.next = _, d |= U;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            _ = h, h = _.next, _.next = null, o.lastBaseUpdate = _, o.shared.pending = null;
          }
        } while (!0);
        H === null && (p = Y), o.baseState = p, o.firstBaseUpdate = v, o.lastBaseUpdate = H, f === null && (o.shared.lanes = 0), Xo |= d, e.lanes = d, e.memoizedState = Y;
      }
      wv = null;
    }
    function gf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Jc(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          gf(a[e], t);
    }
    function x0(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          gf(a[e], t);
    }
    function Ql(e, t) {
      var a = Ei;
      pe(Dp, a, e), pe(Ld, t, e), Ei = a | t.baseLanes;
    }
    function bf(e) {
      pe(Dp, Ei, e), pe(
        Ld,
        Ld.current,
        e
      );
    }
    function Ja(e) {
      Ei = Dp.current, Ze(Ld, e), Ze(Dp, e);
    }
    function ze() {
      var e = q;
      Zn === null ? Zn = [e] : Zn.push(e);
    }
    function w() {
      var e = q;
      if (Zn !== null && (Rc++, Zn[Rc] !== e)) {
        var t = ne(me);
        if (!n1.has(t) && (n1.add(t), Zn !== null)) {
          for (var a = "", i = 0; i <= Rc; i++) {
            var o = Zn[i], f = i === Rc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Aa(e) {
      e == null || ye(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        q,
        typeof e
      );
    }
    function Kc() {
      var e = ne(me);
      i1.has(e) || (i1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function mt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ku(e, t) {
      if (Bm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ha(e[a], t[a])) return !1;
      return !0;
    }
    function ku(e, t, a, i, o, f) {
      jo = f, me = t, Zn = e !== null ? e._debugHookTypes : null, Rc = -1, Bm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = ne(me), Zv.has(f) || (Zv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e !== null && e.memoizedState !== null ? Kv : Zn !== null ? c1 : Jv, Os = f = (t.mode & ea) !== dt;
      var d = kv(a, i, o);
      if (Os = !1, Jd && (d = kc(
        t,
        a,
        i,
        o
      )), f) {
        Be(!0);
        try {
          d = kc(
            t,
            a,
            i,
            o
          );
        } finally {
          Be(!1);
        }
      }
      return Sf(e, t), d;
    }
    function Sf(e, t) {
      t._debugHookTypes = Zn, t.dependencies === null ? zc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: zc
      }) : t.dependencies._debugThenableState = zc, N.H = Up;
      var a = nt !== null && nt.next !== null;
      if (jo = 0, Zn = q = tl = nt = me = null, Rc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Op = !1, Nm = 0, zc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Al || (e = e.dependencies, e !== null && Qu(e) && (Al = !0)), Rp ? (Rp = !1, e = !0) : e = !1, e && (t = ne(t) || "Unknown", u1.has(t) || Zv.has(t) || (u1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function kc(e, t, a, i) {
      me = e;
      var o = 0;
      do {
        if (Jd && (zc = null), Nm = 0, Jd = !1, o >= AS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Bm = !1, tl = nt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Rc = -1, N.H = o1, f = kv(t, a, i);
      } while (Jd);
      return f;
    }
    function za() {
      var e = N.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ji(t) : t, e = e.useState()[0], (nt !== null ? nt.memoizedState : null) !== e && (me.flags |= 1024), t;
    }
    function wl() {
      var e = Mp !== 0;
      return Mp = 0, e;
    }
    function nu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & zu) !== dt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ka(e) {
      if (Op) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Op = !1;
      }
      jo = 0, Zn = tl = nt = me = null, Rc = -1, q = null, Jd = !1, Nm = Mp = 0, zc = null;
    }
    function Tt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return tl === null ? me.memoizedState = tl = e : tl = tl.next = e, tl;
    }
    function qe() {
      if (nt === null) {
        var e = me.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = nt.next;
      var t = tl === null ? me.memoizedState : tl.next;
      if (t !== null)
        tl = t, nt = e;
      else {
        if (e === null)
          throw me.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        nt = e, e = {
          memoizedState: nt.memoizedState,
          baseState: nt.baseState,
          baseQueue: nt.baseQueue,
          queue: nt.queue,
          next: null
        }, tl === null ? me.memoizedState = tl = e : tl = tl.next = e;
      }
      return tl;
    }
    function or() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ji(e) {
      var t = Nm;
      return Nm += 1, zc === null && (zc = Vh()), e = Ea(zc, e, t), t = me, (tl === null ? t.memoizedState : tl.next) === null && (t = t.alternate, N.H = t !== null && t.memoizedState !== null ? Kv : Jv), e;
    }
    function yn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ji(e);
        if (e.$$typeof === Na) return it(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ht(e) {
      var t = null, a = me.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = me.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = or(), me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Bm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = up;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Xe(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function je(e, t, a) {
      var i = Tt();
      if (a !== void 0) {
        var o = a(t);
        if (Os) {
          Be(!0);
          try {
            a(t);
          } finally {
            Be(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Fh.bind(
        null,
        me,
        e
      ), [i.memoizedState, e];
    }
    function Ra(e) {
      var t = qe();
      return Da(t, nt, e);
    }
    function Da(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, p = null, v = t, H = !1;
        do {
          var Y = v.lane & -536870913;
          if (Y !== v.lane ? (Ne & Y) === Y : (jo & Y) === Y) {
            var U = v.revertLane;
            if (U === 0)
              p !== null && (p = p.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), Y === zs && (H = !0);
            else if ((jo & U) === U) {
              v = v.next, U === zs && (H = !0);
              continue;
            } else
              Y = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, p === null ? (h = p = Y, d = f) : p = p.next = Y, me.lanes |= U, Xo |= U;
            Y = v.action, Os && a(f, Y), f = v.hasEagerState ? v.eagerState : a(f, Y);
          } else
            U = {
              lane: Y,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, p === null ? (h = p = U, d = f) : p = p.next = U, me.lanes |= Y, Xo |= Y;
          v = v.next;
        } while (v !== null && v !== t);
        if (p === null ? d = f : p.next = h, !ha(f, e.memoizedState) && (Al = !0, H && (a = wd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = p, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Ki(e) {
      var t = qe(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        ha(f, t.memoizedState) || (Al = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function uu(e, t, a) {
      var i = me, o = Tt();
      if (Le) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Zd || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Zd = !0);
      } else {
        if (f = t(), Zd || (a = t(), ha(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Zd = !0)), ct === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ne & 124) !== 0 || wh(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, rr(
        Wc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, pn(
        Ln | yl,
        Wu(),
        $c.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Tf(e, t, a) {
      var i = me, o = qe(), f = Le;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Zd) {
        var d = t();
        ha(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Zd = !0);
      }
      (d = !ha(
        (nt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Al = !0), o = o.queue;
      var h = Wc.bind(null, i, o, e);
      if (Xt(2048, yl, h, [e]), o.getSnapshot !== t || d || tl !== null && tl.memoizedState.tag & Ln) {
        if (i.flags |= 2048, pn(
          Ln | yl,
          Wu(),
          $c.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), ct === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (jo & 124) !== 0 || wh(i, t, a);
      }
      return a;
    }
    function wh(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = me.updateQueue, t === null ? (t = or(), me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function $c(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Lh(t) && Fc(e);
    }
    function Wc(e, t, a) {
      return a(function() {
        Lh(t) && Fc(e);
      });
    }
    function Lh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !ha(e, a);
      } catch {
        return !0;
      }
    }
    function Fc(e) {
      var t = Vl(e, 2);
      t !== null && At(t, e, 2);
    }
    function Ef(e) {
      var t = Tt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Os) {
          Be(!0);
          try {
            a();
          } finally {
            Be(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: e
      }, t;
    }
    function iu(e) {
      e = Ef(e);
      var t = e.queue, a = to.bind(null, me, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function ka(e) {
      var t = Tt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Sr.bind(
        null,
        me,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function cu(e, t) {
      var a = qe();
      return mn(a, nt, e, t);
    }
    function mn(e, t, a, i) {
      return e.baseState = a, Da(
        e,
        nt,
        typeof i == "function" ? i : Xe
      );
    }
    function fr(e, t) {
      var a = qe();
      return nt !== null ? mn(a, nt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Zh(e, t, a, i, o) {
      if (Uf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        N.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Ic(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Ic(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = N.T, d = {};
        N.T = d, N.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), p = N.S;
          p !== null && p(d, h), Af(e, t, h);
        } catch (v) {
          Wt(e, t, v);
        } finally {
          N.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Af(e, t, d);
        } catch (v) {
          Wt(e, t, v);
        }
    }
    function Af(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          $u(e, t, i);
        },
        function(i) {
          return Wt(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : $u(e, t, a);
    }
    function $u(e, t, a) {
      t.status = "fulfilled", t.value = a, zf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ic(e, a)));
    }
    function Wt(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, zf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function zf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Jh(e, t) {
      return t;
    }
    function Pc(e, t) {
      if (Le) {
        var a = ct.formState;
        if (a !== null) {
          e: {
            var i = me;
            if (Le) {
              if (Bt) {
                t: {
                  for (var o = Bt, f = bi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = sl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Sg || f === ib ? o : null;
                }
                if (o) {
                  Bt = sl(
                    o.nextSibling
                  ), i = o.data === Sg;
                  break e;
                }
              }
              fn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Tt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jh,
        lastRenderedState: t
      }, a.queue = i, a = to.bind(
        null,
        me,
        i
      ), i.dispatch = a, i = Ef(!1), f = Sr.bind(
        null,
        me,
        !1,
        i.queue
      ), i = Tt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Zh.bind(
        null,
        me,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function sr(e) {
      var t = qe();
      return H0(t, nt, e);
    }
    function H0(e, t, a) {
      if (t = Da(
        e,
        t,
        Jh
      )[0], e = Ra(Xe)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Ji(t);
        } catch (d) {
          throw d === Hm ? zp : d;
        }
      else i = t;
      t = qe();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (me.flags |= 2048, pn(
        Ln | yl,
        Wu(),
        Vt.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Vt(e, t) {
      e.action = t;
    }
    function eo(e) {
      var t = qe(), a = nt;
      if (a !== null)
        return H0(t, a, e);
      qe(), t = t.memoizedState, a = qe();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function pn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = me.updateQueue, t === null && (t = or(), me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Wu() {
      return { destroy: void 0, resource: void 0 };
    }
    function Rf(e) {
      var t = Tt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Oa(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i, me.flags |= e, o.memoizedState = pn(
        Ln | t,
        Wu(),
        a,
        i
      );
    }
    function Xt(e, t, a, i) {
      var o = qe();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      nt !== null && i !== null && Ku(i, nt.memoizedState.deps) ? o.memoizedState = pn(t, f, a, i) : (me.flags |= e, o.memoizedState = pn(
        Ln | t,
        f,
        a,
        i
      ));
    }
    function rr(e, t) {
      (me.mode & zu) !== dt && (me.mode & Lg) === dt ? Oa(276826112, yl, e, t) : Oa(8390656, yl, e, t);
    }
    function dr(e, t) {
      var a = 4194308;
      return (me.mode & zu) !== dt && (a |= 134217728), Oa(a, ql, e, t);
    }
    function C0(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function hr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (me.mode & zu) !== dt && (i |= 134217728), Oa(
        i,
        ql,
        C0.bind(null, t, e),
        a
      );
    }
    function vn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Xt(
        4,
        ql,
        C0.bind(null, t, e),
        a
      );
    }
    function Df(e, t) {
      return Tt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ki(e, t) {
      var a = qe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Ku(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function yr(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Os) {
        Be(!0);
        try {
          e();
        } finally {
          Be(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Fu(e, t) {
      var a = qe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Ku(t, i[1]))
        return i[0];
      if (i = e(), Os) {
        Be(!0);
        try {
          e();
        } finally {
          Be(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function mr(e, t) {
      var a = Tt();
      return vr(a, e, t);
    }
    function Of(e, t) {
      var a = qe();
      return Mf(
        a,
        nt.memoizedState,
        e,
        t
      );
    }
    function pr(e, t) {
      var a = qe();
      return nt === null ? vr(a, e, t) : Mf(
        a,
        nt.memoizedState,
        e,
        t
      );
    }
    function vr(e, t, a) {
      return a === void 0 || (jo & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Q0(), me.lanes |= e, Xo |= e, a);
    }
    function Mf(e, t, a, i) {
      return ha(a, t) ? a : Ld.current !== null ? (e = vr(e, a, i), ha(e, t) || (Al = !0), e) : (jo & 42) === 0 ? (Al = !0, e.memoizedState = a) : (e = Q0(), me.lanes |= e, Xo |= e, t);
    }
    function Kh(e, t, a, i, o) {
      var f = re.p;
      re.p = f !== 0 && f < en ? f : en;
      var d = N.T, h = {};
      N.T = h, Sr(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var p = o(), v = N.S;
        if (v !== null && v(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          var H = M0(
            p,
            i
          );
          ou(
            e,
            t,
            H,
            Kl(e)
          );
        } else
          ou(
            e,
            t,
            i,
            Kl(e)
          );
      } catch (Y) {
        ou(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: Y },
          Kl(e)
        );
      } finally {
        re.p = f, N.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function $i(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = kh(e).queue;
      Kh(
        e,
        o,
        t,
        js,
        a === null ? Ge : function() {
          return $h(e), a(i);
        }
      );
    }
    function kh(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: js,
        baseState: js,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xe,
          lastRenderedState: js
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xe,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function $h(e) {
      N.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = kh(e).next.queue;
      ou(
        e,
        t,
        {},
        Kl(e)
      );
    }
    function gn() {
      var e = Ef(!1);
      return e = Kh.bind(
        null,
        me,
        e.queue,
        !0,
        !1
      ), Tt().memoizedState = e, [!1, e];
    }
    function gr() {
      var e = Ra(Xe)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ji(e),
        t
      ];
    }
    function br() {
      var e = Ki(Xe)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ji(e),
        t
      ];
    }
    function Ll() {
      return it(Fm);
    }
    function bn() {
      var e = Tt(), t = ct.identifierPrefix;
      if (Le) {
        var a = Ec, i = Tc;
        a = (i & ~(1 << 32 - Tl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Mp++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = ES++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function Wi() {
      return Tt().memoizedState = Wh.bind(
        null,
        me
      );
    }
    function Wh(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Kl(a);
            e = dn(i);
            var o = Za(a, e, i);
            o !== null && (At(o, a, i), Ju(o, a, i)), a = vf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function Fh(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Uf(e) ? Fi(t, o) : (o = Rh(e, t, o, i), o !== null && (At(o, e, i), xf(o, t, i))), zi(e, i);
    }
    function to(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e), ou(e, t, a, i), zi(e, i);
    }
    function ou(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Uf(e)) Fi(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = N.H;
          N.H = Du;
          try {
            var h = t.lastRenderedState, p = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = p, ha(p, h))
              return er(e, t, o, 0), ct === null && df(), !1;
          } catch {
          } finally {
            N.H = d;
          }
        }
        if (a = Rh(e, t, o, i), a !== null)
          return At(a, e, i), xf(a, t, i), !0;
      }
      return !1;
    }
    function Sr(e, t, a, i) {
      if (N.T === null && zs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: My(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Uf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Rh(
          e,
          a,
          i,
          2
        ), t !== null && At(t, e, 2);
      zi(e, 2);
    }
    function Uf(e) {
      var t = e.alternate;
      return e === me || t !== null && t === me;
    }
    function Fi(e, t) {
      Jd = Op = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function xf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Nc(e, a);
      }
    }
    function Ft(e) {
      var t = De;
      return e != null && (De = t === null ? e : t.concat(e)), t;
    }
    function lo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = mf(e, a.mode, 0), t._debugInfo = De, t.return = a), I(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function ao(e) {
      var t = qm;
      return qm += 1, Kd === null && (Kd = Vh()), Ea(Kd, e, t);
    }
    function Ma(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function ve(e, t) {
      throw t.$$typeof === is ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Je(e, t) {
      var a = ne(e) || "Component";
      A1[a] || (A1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function pt(e, t) {
      var a = ne(e) || "Component";
      z1[a] || (z1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Hf(e) {
      function t(b, S) {
        if (e) {
          var T = b.deletions;
          T === null ? (b.deletions = [S], b.flags |= 16) : T.push(S);
        }
      }
      function a(b, S) {
        if (!e) return null;
        for (; S !== null; )
          t(b, S), S = S.sibling;
        return null;
      }
      function i(b) {
        for (var S = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? S.set(b.key, b) : S.set(b.index, b), b = b.sibling;
        return S;
      }
      function o(b, S) {
        return b = on(b, S), b.index = 0, b.sibling = null, b;
      }
      function f(b, S, T) {
        return b.index = T, e ? (T = b.alternate, T !== null ? (T = T.index, T < S ? (b.flags |= 67108866, S) : T) : (b.flags |= 67108866, S)) : (b.flags |= 1048576, S);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, S, T, j) {
        return S === null || S.tag !== 6 ? (S = Vu(
          T,
          b.mode,
          j
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = De, S) : (S = o(S, T), S.return = b, S._debugInfo = De, S);
      }
      function p(b, S, T, j) {
        var J = T.type;
        return J === ge ? (S = H(
          b,
          S,
          T.props.children,
          j,
          T.key
        ), lo(T, S, b), S) : S !== null && (S.elementType === J || z0(S, T) || typeof J == "object" && J !== null && J.$$typeof === ra && Go(J) === S.type) ? (S = o(S, T.props), Ma(S, T), S.return = b, S._debugOwner = T._owner, S._debugInfo = De, S) : (S = mf(T, b.mode, j), Ma(S, T), S.return = b, S._debugInfo = De, S);
      }
      function v(b, S, T, j) {
        return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Uh(T, b.mode, j), S.return = b, S._debugInfo = De, S) : (S = o(S, T.children || []), S.return = b, S._debugInfo = De, S);
      }
      function H(b, S, T, j, J) {
        return S === null || S.tag !== 7 ? (S = Gu(
          T,
          b.mode,
          j,
          J
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = De, S) : (S = o(S, T), S.return = b, S._debugInfo = De, S);
      }
      function Y(b, S, T) {
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
          return S = Vu(
            "" + S,
            b.mode,
            T
          ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = De, S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case si:
              return T = mf(
                S,
                b.mode,
                T
              ), Ma(T, S), T.return = b, b = Ft(S._debugInfo), T._debugInfo = De, De = b, T;
            case pc:
              return S = Uh(
                S,
                b.mode,
                T
              ), S.return = b, S._debugInfo = De, S;
            case ra:
              var j = Ft(S._debugInfo);
              return S = Go(S), b = Y(b, S, T), De = j, b;
          }
          if (ye(S) || xt(S))
            return T = Gu(
              S,
              b.mode,
              T,
              null
            ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, b = Ft(S._debugInfo), T._debugInfo = De, De = b, T;
          if (typeof S.then == "function")
            return j = Ft(S._debugInfo), b = Y(
              b,
              ao(S),
              T
            ), De = j, b;
          if (S.$$typeof === Na)
            return Y(
              b,
              pf(b, S),
              T
            );
          ve(b, S);
        }
        return typeof S == "function" && Je(b, S), typeof S == "symbol" && pt(b, S), null;
      }
      function U(b, S, T, j) {
        var J = S !== null ? S.key : null;
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return J !== null ? null : h(b, S, "" + T, j);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case si:
              return T.key === J ? (J = Ft(T._debugInfo), b = p(
                b,
                S,
                T,
                j
              ), De = J, b) : null;
            case pc:
              return T.key === J ? v(b, S, T, j) : null;
            case ra:
              return J = Ft(T._debugInfo), T = Go(T), b = U(
                b,
                S,
                T,
                j
              ), De = J, b;
          }
          if (ye(T) || xt(T))
            return J !== null ? null : (J = Ft(T._debugInfo), b = H(
              b,
              S,
              T,
              j,
              null
            ), De = J, b);
          if (typeof T.then == "function")
            return J = Ft(T._debugInfo), b = U(
              b,
              S,
              ao(T),
              j
            ), De = J, b;
          if (T.$$typeof === Na)
            return U(
              b,
              S,
              pf(b, T),
              j
            );
          ve(b, T);
        }
        return typeof T == "function" && Je(b, T), typeof T == "symbol" && pt(b, T), null;
      }
      function _(b, S, T, j, J) {
        if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
          return b = b.get(T) || null, h(S, b, "" + j, J);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case si:
              return T = b.get(
                j.key === null ? T : j.key
              ) || null, b = Ft(j._debugInfo), S = p(
                S,
                T,
                j,
                J
              ), De = b, S;
            case pc:
              return b = b.get(
                j.key === null ? T : j.key
              ) || null, v(S, b, j, J);
            case ra:
              var be = Ft(j._debugInfo);
              return j = Go(j), S = _(
                b,
                S,
                T,
                j,
                J
              ), De = be, S;
          }
          if (ye(j) || xt(j))
            return T = b.get(T) || null, b = Ft(j._debugInfo), S = H(
              S,
              T,
              j,
              J,
              null
            ), De = b, S;
          if (typeof j.then == "function")
            return be = Ft(j._debugInfo), S = _(
              b,
              S,
              T,
              ao(j),
              J
            ), De = be, S;
          if (j.$$typeof === Na)
            return _(
              b,
              S,
              T,
              pf(S, j),
              J
            );
          ve(S, j);
        }
        return typeof j == "function" && Je(S, j), typeof j == "symbol" && pt(S, j), null;
      }
      function P(b, S, T, j) {
        if (typeof T != "object" || T === null) return j;
        switch (T.$$typeof) {
          case si:
          case pc:
            Ct(b, S, T);
            var J = T.key;
            if (typeof J != "string") break;
            if (j === null) {
              j = /* @__PURE__ */ new Set(), j.add(J);
              break;
            }
            if (!j.has(J)) {
              j.add(J);
              break;
            }
            I(S, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                J
              );
            });
            break;
          case ra:
            T = Go(T), P(b, S, T, j);
        }
        return j;
      }
      function de(b, S, T, j) {
        for (var J = null, be = null, ee = null, Se = S, Te = S = 0, ht = null; Se !== null && Te < T.length; Te++) {
          Se.index > Te ? (ht = Se, Se = null) : ht = Se.sibling;
          var Zt = U(
            b,
            Se,
            T[Te],
            j
          );
          if (Zt === null) {
            Se === null && (Se = ht);
            break;
          }
          J = P(
            b,
            Zt,
            T[Te],
            J
          ), e && Se && Zt.alternate === null && t(b, Se), S = f(Zt, S, Te), ee === null ? be = Zt : ee.sibling = Zt, ee = Zt, Se = ht;
        }
        if (Te === T.length)
          return a(b, Se), Le && Vi(b, Te), be;
        if (Se === null) {
          for (; Te < T.length; Te++)
            Se = Y(b, T[Te], j), Se !== null && (J = P(
              b,
              Se,
              T[Te],
              J
            ), S = f(
              Se,
              S,
              Te
            ), ee === null ? be = Se : ee.sibling = Se, ee = Se);
          return Le && Vi(b, Te), be;
        }
        for (Se = i(Se); Te < T.length; Te++)
          ht = _(
            Se,
            b,
            Te,
            T[Te],
            j
          ), ht !== null && (J = P(
            b,
            ht,
            T[Te],
            J
          ), e && ht.alternate !== null && Se.delete(
            ht.key === null ? Te : ht.key
          ), S = f(
            ht,
            S,
            Te
          ), ee === null ? be = ht : ee.sibling = ht, ee = ht);
        return e && Se.forEach(function(Hc) {
          return t(b, Hc);
        }), Le && Vi(b, Te), be;
      }
      function ot(b, S, T, j) {
        if (T == null)
          throw Error("An iterable object provided no iterator.");
        for (var J = null, be = null, ee = S, Se = S = 0, Te = null, ht = null, Zt = T.next(); ee !== null && !Zt.done; Se++, Zt = T.next()) {
          ee.index > Se ? (Te = ee, ee = null) : Te = ee.sibling;
          var Hc = U(b, ee, Zt.value, j);
          if (Hc === null) {
            ee === null && (ee = Te);
            break;
          }
          ht = P(
            b,
            Hc,
            Zt.value,
            ht
          ), e && ee && Hc.alternate === null && t(b, ee), S = f(Hc, S, Se), be === null ? J = Hc : be.sibling = Hc, be = Hc, ee = Te;
        }
        if (Zt.done)
          return a(b, ee), Le && Vi(b, Se), J;
        if (ee === null) {
          for (; !Zt.done; Se++, Zt = T.next())
            ee = Y(b, Zt.value, j), ee !== null && (ht = P(
              b,
              ee,
              Zt.value,
              ht
            ), S = f(
              ee,
              S,
              Se
            ), be === null ? J = ee : be.sibling = ee, be = ee);
          return Le && Vi(b, Se), J;
        }
        for (ee = i(ee); !Zt.done; Se++, Zt = T.next())
          Te = _(
            ee,
            b,
            Se,
            Zt.value,
            j
          ), Te !== null && (ht = P(
            b,
            Te,
            Zt.value,
            ht
          ), e && Te.alternate !== null && ee.delete(
            Te.key === null ? Se : Te.key
          ), S = f(
            Te,
            S,
            Se
          ), be === null ? J = Te : be.sibling = Te, be = Te);
        return e && ee.forEach(function($S) {
          return t(b, $S);
        }), Le && Vi(b, Se), J;
      }
      function Ye(b, S, T, j) {
        if (typeof T == "object" && T !== null && T.type === ge && T.key === null && (lo(T, null, b), T = T.props.children), typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case si:
              var J = Ft(T._debugInfo);
              e: {
                for (var be = T.key; S !== null; ) {
                  if (S.key === be) {
                    if (be = T.type, be === ge) {
                      if (S.tag === 7) {
                        a(
                          b,
                          S.sibling
                        ), j = o(
                          S,
                          T.props.children
                        ), j.return = b, j._debugOwner = T._owner, j._debugInfo = De, lo(T, j, b), b = j;
                        break e;
                      }
                    } else if (S.elementType === be || z0(
                      S,
                      T
                    ) || typeof be == "object" && be !== null && be.$$typeof === ra && Go(be) === S.type) {
                      a(
                        b,
                        S.sibling
                      ), j = o(S, T.props), Ma(j, T), j.return = b, j._debugOwner = T._owner, j._debugInfo = De, b = j;
                      break e;
                    }
                    a(b, S);
                    break;
                  } else t(b, S);
                  S = S.sibling;
                }
                T.type === ge ? (j = Gu(
                  T.props.children,
                  b.mode,
                  j,
                  T.key
                ), j.return = b, j._debugOwner = b, j._debugTask = b._debugTask, j._debugInfo = De, lo(T, j, b), b = j) : (j = mf(
                  T,
                  b.mode,
                  j
                ), Ma(j, T), j.return = b, j._debugInfo = De, b = j);
              }
              return b = d(b), De = J, b;
            case pc:
              e: {
                for (J = T, T = J.key; S !== null; ) {
                  if (S.key === T)
                    if (S.tag === 4 && S.stateNode.containerInfo === J.containerInfo && S.stateNode.implementation === J.implementation) {
                      a(
                        b,
                        S.sibling
                      ), j = o(
                        S,
                        J.children || []
                      ), j.return = b, b = j;
                      break e;
                    } else {
                      a(b, S);
                      break;
                    }
                  else t(b, S);
                  S = S.sibling;
                }
                j = Uh(
                  J,
                  b.mode,
                  j
                ), j.return = b, b = j;
              }
              return d(b);
            case ra:
              return J = Ft(T._debugInfo), T = Go(T), b = Ye(
                b,
                S,
                T,
                j
              ), De = J, b;
          }
          if (ye(T))
            return J = Ft(T._debugInfo), b = de(
              b,
              S,
              T,
              j
            ), De = J, b;
          if (xt(T)) {
            if (J = Ft(T._debugInfo), be = xt(T), typeof be != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ee = be.call(T);
            return ee === T ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ee) !== "[object Generator]") && (T1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), T1 = !0) : T.entries !== be || Wv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Wv = !0), b = ot(
              b,
              S,
              ee,
              j
            ), De = J, b;
          }
          if (typeof T.then == "function")
            return J = Ft(T._debugInfo), b = Ye(
              b,
              S,
              ao(T),
              j
            ), De = J, b;
          if (T.$$typeof === Na)
            return Ye(
              b,
              S,
              pf(b, T),
              j
            );
          ve(b, T);
        }
        return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (J = "" + T, S !== null && S.tag === 6 ? (a(
          b,
          S.sibling
        ), j = o(S, J), j.return = b, b = j) : (a(b, S), j = Vu(
          J,
          b.mode,
          j
        ), j.return = b, j._debugOwner = b, j._debugTask = b._debugTask, j._debugInfo = De, b = j), d(b)) : (typeof T == "function" && Je(b, T), typeof T == "symbol" && pt(b, T), a(b, S));
      }
      return function(b, S, T, j) {
        var J = De;
        De = null;
        try {
          qm = 0;
          var be = Ye(
            b,
            S,
            T,
            j
          );
          return Kd = null, be;
        } catch (ht) {
          if (ht === Hm || ht === zp) throw ht;
          var ee = Ee(29, ht, null, b.mode);
          ee.lanes = j, ee.return = b;
          var Se = ee._debugInfo = De;
          if (ee._debugOwner = b._debugOwner, ee._debugTask = b._debugTask, Se != null) {
            for (var Te = Se.length - 1; 0 <= Te; Te--)
              if (typeof Se[Te].stack == "string") {
                ee._debugOwner = Se[Te], ee._debugTask = Se[Te].debugTask;
                break;
              }
          }
          return ee;
        } finally {
          De = J;
        }
      };
    }
    function ia(e) {
      var t = e.alternate;
      pe(
        ml,
        ml.current & $d,
        e
      ), pe(Jn, e, e), Ti === null && (t === null || Ld.current !== null || t.memoizedState !== null) && (Ti = e);
    }
    function Iu(e) {
      if (e.tag === 22) {
        if (pe(ml, ml.current, e), pe(Jn, e, e), Ti === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Ti = e);
        }
      } else $a(e);
    }
    function $a(e) {
      pe(ml, ml.current, e), pe(
        Jn,
        Jn.current,
        e
      );
    }
    function ca(e) {
      Ze(Jn, e), Ti === e && (Ti = null), Ze(ml, e);
    }
    function fu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Mc || Cn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Ih(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Y1.has(t) || (Y1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function vt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ea) {
        Be(!0);
        try {
          f = a(i, o);
        } finally {
          Be(!1);
        }
      }
      f === void 0 && (t = Ve(t) || "Component", C1.has(t) || (C1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ae({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Tr(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ea) {
          Be(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Be(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ve(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !rf(a, i) || !rf(o, f) : !0;
    }
    function Er(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = ne(e) || "Component", O1.has(e) || (O1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Fv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Pu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ae({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Ph(e) {
      Iv(e), console.warn(
        `%s

%s
`,
        Wd ? "An error occurred in the <" + Wd + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function N0(e) {
      var t = Wd ? "The above error occurred in the <" + Wd + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Pv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          yb + e[0],
          mb,
          kp + i + kp,
          pb
        ) : e.splice(
          0,
          0,
          yb,
          mb,
          kp + i + kp,
          pb
        ), e.unshift(console), i = KS.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Ar(e) {
      Iv(e);
    }
    function no(e, t) {
      try {
        Wd = t.source ? ne(t.source) : null, Pv = null;
        var a = t.value;
        if (N.actQueue !== null)
          N.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function zr(e, t, a) {
      try {
        Wd = a.source ? ne(a.source) : null, Pv = ne(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function gl(e, t, a) {
      return a = dn(a), a.tag = Qv, a.payload = { element: null }, a.callback = function() {
        I(t.source, no, e, t);
      }, a;
    }
    function Et(e) {
      return e = dn(e), e.tag = Qv, e;
    }
    function Cf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          R0(a), I(
            i.source,
            zr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        R0(a), I(
          i.source,
          zr,
          t,
          a,
          i
        ), typeof o != "function" && (wo === null ? wo = /* @__PURE__ */ new Set([this]) : wo.add(this)), zS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          ne(a) || "Unknown"
        );
      });
    }
    function Nf(e, t, a, i, o) {
      if (a.flags |= 32768, Mt && ho(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && il(
          t,
          a,
          o,
          !0
        ), Le && (Ac = !0), a = Jn.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Ti === null ? Lr() : a.alternate === null && qt === Oc && (qt = ag), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Xv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), zy(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Xv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), zy(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return zy(e, i, o), Lr(), !1;
      }
      if (Le)
        return Ac = !0, t = Jn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== _v && Qc(
          na(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== _v && Qc(
          na(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = na(i, a), o = gl(
          e.stateNode,
          i,
          o
        ), Lc(e, o), qt !== Ms && (qt = eh)), !1;
      var f = na(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (wm === null ? wm = [f] : wm.push(f), qt !== Ms && (qt = eh), t === null) return !0;
      i = na(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = gl(
              a.stateNode,
              i,
              e
            ), Lc(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (wo === null || !wo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Et(o), Cf(
                o,
                e,
                a,
                i
              ), Lc(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Nt(e, t, a, i) {
      t.child = e === null ? R1(t, null, a, i) : kd(
        t,
        e.child,
        a,
        i
      );
    }
    function Rr(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return wu(t), al(t), i = ku(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = wl(), ba(), e !== null && !Al ? (nu(e, t, o), Tn(e, t, o)) : (Le && h && ar(t), t.flags |= 1, Nt(e, t, i, o), t.child);
    }
    function Sn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Oh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Gi(f), t.tag = 15, t.type = a, Ur(t, f), Bf(
          e,
          t,
          a,
          i,
          o
        )) : (e = lr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !qr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : rf, a(d, i) && e.ref === t.ref)
          return Tn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = on(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Bf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (rf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Al = !1, t.pendingProps = i = f, qr(e, o))
            (e.flags & 131072) !== 0 && (Al = !0);
          else
            return t.lanes = e.lanes, Tn(e, t, o);
      }
      return Mr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Dr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Or(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && cr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Ql(t, f) : bf(t), Iu(t);
        else
          return t.lanes = t.childLanes = 536870912, Or(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (cr(t, f.cachePool), Ql(t, f), $a(t), t.memoizedState = null) : (e !== null && cr(t, null), bf(t), $a(t));
      return Nt(e, t, o, a), t.child;
    }
    function Or(e, t, a, i) {
      var o = Gh();
      return o = o === null ? null : {
        parent: hl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && cr(t, null), bf(t), Iu(t), e !== null && il(e, t, i, !0), null;
    }
    function qf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Mr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ve(a) || "Unknown";
        j1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), j1[f] = !0);
      }
      return t.mode & ea && Ru.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Ur(t, t.type), a.contextTypes && (f = Ve(a) || "Unknown", V1[f] || (V1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), wu(t), al(t), a = ku(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = wl(), ba(), e !== null && !Al ? (nu(e, t, o), Tn(e, t, o)) : (Le && i && ar(t), t.flags |= 1, Nt(e, t, a, o), t.child);
    }
    function ey(e, t, a, i, o, f) {
      return wu(t), al(t), Rc = -1, Bm = e !== null && e.type !== t.type, t.updateQueue = null, a = kc(
        t,
        i,
        a,
        o
      ), Sf(e, t), i = wl(), ba(), e !== null && !Al ? (nu(e, t, f), Tn(e, t, f)) : (Le && i && ar(t), t.flags |= 1, Nt(e, t, a, f), t.child);
    }
    function ty(e, t, a, i, o) {
      switch (ut(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = ct, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Et(h), Cf(
            h,
            d,
            t,
            na(f, t)
          ), Lc(t, h);
      }
      if (wu(t), t.stateNode === null) {
        if (d = Yo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Na) && !q1.has(a) && (q1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === vd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ve(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = it(f)), f = new a(i, d), t.mode & ea) {
          Be(!0);
          try {
            f = new a(i, d);
          } finally {
            Be(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Fv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = D1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ve(a) || "Component", M1.has(d) || (M1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var p = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), d !== null || h !== null || p !== null) {
            f = Ve(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            x1.has(f) || (x1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              p !== null ? `
  ` + p : ""
            ));
          }
        }
        f = t.stateNode, d = Ve(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !B1.has(a) && (B1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !N1.has(a) && (N1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ve(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || U1.has(a) || (U1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ve(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || ye(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Xl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? it(d) : Yo, f.state === i && (d = Ve(a) || "Component", H1.has(d) || (H1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ea && Ru.recordLegacyContextWarning(
          t,
          f
        ), Ru.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (vt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ne(t) || "Component"
        ), Fv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Zc(t, i, f, o), hn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zu) !== dt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var H = t.memoizedProps;
        h = Pu(a, H), f.props = h;
        var Y = f.context;
        p = a.contextType, d = Yo, typeof p == "object" && p !== null && (d = it(p)), v = a.getDerivedStateFromProps, p = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", H = t.pendingProps !== H, p || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (H || Y !== d) && Er(
          t,
          f,
          i,
          d
        ), _o = !1;
        var U = t.memoizedState;
        f.state = U, Zc(t, i, f, o), hn(), Y = t.memoizedState, H || U !== Y || _o ? (typeof v == "function" && (vt(
          t,
          a,
          v,
          i
        ), Y = t.memoizedState), (h = _o || Tr(
          t,
          a,
          h,
          i,
          U,
          Y,
          d
        )) ? (p || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zu) !== dt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zu) !== dt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zu) !== dt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Zu(e, t), d = t.memoizedProps, p = Pu(a, d), f.props = p, v = t.pendingProps, U = f.context, Y = a.contextType, h = Yo, typeof Y == "object" && Y !== null && (h = it(Y)), H = a.getDerivedStateFromProps, (Y = typeof H == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || U !== h) && Er(
          t,
          f,
          i,
          h
        ), _o = !1, U = t.memoizedState, f.state = U, Zc(t, i, f, o), hn();
        var _ = t.memoizedState;
        d !== v || U !== _ || _o || e !== null && e.dependencies !== null && Qu(e.dependencies) ? (typeof H == "function" && (vt(
          t,
          a,
          H,
          i
        ), _ = t.memoizedState), (p = _o || Tr(
          t,
          a,
          p,
          i,
          U,
          _,
          h
        ) || e !== null && e.dependencies !== null && Qu(e.dependencies)) ? (Y || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, _, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          _,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = _), f.props = i, f.state = _, f.context = h, f = p) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, qf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, ef(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Ya = -1;
        else {
          if (al(t), a = r1(h), t.mode & ea) {
            Be(!0);
            try {
              r1(h);
            } finally {
              Be(!1);
            }
          }
          ba();
        }
        t.flags |= 1, e !== null && d ? (t.child = kd(
          t,
          e.child,
          null,
          o
        ), t.child = kd(
          t,
          null,
          a,
          o
        )) : Nt(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Tn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Fd || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        ne(t) || "a component"
      ), Fd = !0), e;
    }
    function ly(e, t, a, i) {
      return Qi(), t.flags |= 256, Nt(e, t, a, i), t.child;
    }
    function Ur(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ve(t) || "Unknown", X1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), X1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ve(t) || "Unknown", G1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), G1[t] = !0));
    }
    function Yf(e) {
      return { baseLanes: e, cachePool: U0() };
    }
    function xr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= an), e;
    }
    function B0(e, t, a) {
      var i, o = t.pendingProps;
      he(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (ml.current & Ym) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Le) {
          if (f ? ia(t) : $a(t), Le) {
            var h = Bt, p;
            if (!(p = !h)) {
              e: {
                var v = h;
                for (p = bi; v.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break e;
                  }
                  if (v = sl(v.nextSibling), v === null) {
                    p = null;
                    break e;
                  }
                }
                p = v;
              }
              p !== null ? (Xa(), t.memoizedState = {
                dehydrated: p,
                treeContext: Ts !== null ? { id: Tc, overflow: Ec } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = Ee(18, null, null, dt), v.stateNode = p, v.return = t, t.child = v, ya = t, Bt = null, p = !0) : p = !1, p = !p;
            }
            p && (xh(
              t,
              h
            ), fn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Cn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ca(t);
        }
        return h = o.children, o = o.fallback, f ? ($a(t), f = t.mode, h = _f(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Gu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Yf(a), f.childLanes = xr(
          e,
          i,
          a
        ), t.memoizedState = tg, o) : (ia(t), Hr(
          t,
          h
        ));
      }
      var H = e.memoizedState;
      if (H !== null && (h = H.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ia(t), t.flags &= -257, t = Cr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? ($a(t), t.child = e.child, t.flags |= 128, t = null) : ($a(t), f = o.fallback, h = t.mode, o = _f(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Gu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, kd(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Yf(a), o.childLanes = xr(
            e,
            i,
            a
          ), t.memoizedState = tg, t = f);
        else if (ia(t), Le && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Cn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            p = i.dgst;
            var Y = i.msg;
            v = i.stck;
            var U = i.cstck;
          }
          h = Y, i = p, o = v, p = f = U, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = p === void 0 ? null : p, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Bv.set(
            f,
            o
          ), Qc(o), t = Cr(
            e,
            t,
            a
          );
        } else if (Al || il(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Al || i) {
          if (i = ct, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Dl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
            throw H.retryLane = o, Vl(
              e,
              o
            ), At(
              i,
              e,
              o
            ), _1;
          h.data === Mc || Lr(), t = Cr(
            e,
            t,
            a
          );
        } else
          h.data === Mc ? (t.flags |= 192, t.child = e.child, t = null) : (e = H.treeContext, Bt = sl(
            h.nextSibling
          ), ya = t, Le = !0, Es = null, Ac = !1, Qn = null, bi = !1, e !== null && (Xa(), Vn[Xn++] = Tc, Vn[Xn++] = Ec, Vn[Xn++] = Ts, Tc = e.id, Ec = e.overflow, Ts = t), t = Hr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? ($a(t), f = o.fallback, h = t.mode, p = e.child, v = p.sibling, o = on(
        p,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = p.subtreeFlags & 65011712, v !== null ? f = on(
        v,
        f
      ) : (f = Gu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Yf(a) : (p = h.cachePool, p !== null ? (v = hl._currentValue, p = p.parent !== v ? { parent: v, pool: v } : p) : p = U0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: p
      }), f.memoizedState = h, f.childLanes = xr(
        e,
        i,
        a
      ), t.memoizedState = tg, o) : (ia(t), a = e.child, e = a.sibling, a = on(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Hr(e, t) {
      return t = _f(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function _f(e, t) {
      return e = Ee(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: qv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Cr(e, t, a) {
      return kd(t, e.child, null, a), e = Hr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Nr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), qh(
        e.return,
        t,
        a
      );
    }
    function ay(e, t) {
      var a = ye(e);
      return e = !a && typeof xt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Br(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function ny(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !Q1[o])
        if (Q1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || eg[f] || (f !== "collapsed" && f !== "hidden" ? (eg[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (eg[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (ye(i)) {
          for (var d = 0; d < i.length; d++)
            if (!ay(i[d], d)) break e;
        } else if (d = xt(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), p = 0; !h.done; h = d.next()) {
              if (!ay(h.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Nt(e, t, i, a), i = ml.current, (i & Ym) !== 0)
        i = i & $d | Ym, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Nr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Nr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= $d;
      }
      switch (pe(ml, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && fu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Br(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && fu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Br(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Br(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Tn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ya = -1, Xo |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (il(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = on(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = on(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function qr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Qu(e)));
    }
    function mv(e, t, a) {
      switch (t.tag) {
        case 3:
          Rl(
            t,
            t.stateNode.containerInfo
          ), Xu(
            t,
            hl,
            e.memoizedState.cache
          ), Qi();
          break;
        case 27:
        case 5:
          Q(t);
          break;
        case 4:
          Rl(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Xu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ia(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? B0(
              e,
              t,
              a
            ) : (ia(t), e = Tn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ia(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (il(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ny(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), pe(
            ml,
            ml.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Dr(e, t, a);
        case 24:
          Xu(
            t,
            hl,
            e.memoizedState.cache
          );
      }
      return Tn(e, t, a);
    }
    function Yr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = lr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Al = !0;
        else {
          if (!qr(e, a) && (t.flags & 128) === 0)
            return Al = !1, mv(
              e,
              t,
              a
            );
          Al = (e.flags & 131072) !== 0;
        }
      else
        Al = !1, (i = Le) && (Xa(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Xa(), D0(t, gp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Go(t.elementType), t.type = e, typeof e == "function")
            Oh(e) ? (i = Pu(
              e,
              i
            ), t.tag = 1, t.type = e = Gi(e), t = ty(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Ur(t, e), t.type = e = Gi(e), t = Mr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === vu) {
                t.tag = 11, t.type = e = Dh(e), t = Rr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === cs) {
                t.tag = 14, t = Sn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ra && (t = " Did you wrap a component in React.lazy() more than once?"), e = Ve(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Mr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Pu(
            i,
            t.pendingProps
          ), ty(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Rl(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Zu(e, t), Zc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Xu(t, hl, i), i !== f.cache && Yh(
              t,
              [hl],
              a,
              !0
            ), hn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = ly(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = na(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Qc(o), t = ly(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Bt = sl(e.firstChild), ya = t, Le = !0, Es = null, Ac = !1, Qn = null, bi = !0, e = R1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (Qi(), i === o) {
                t = Tn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Nt(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return qf(e, t), e === null ? (e = pu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : Le || (e = t.type, a = t.pendingProps, i = Kt(
            Bn.current
          ), i = He(
            i
          ).createElement(e), i[El] = t, i[Il] = a, Rt(i, e, a), kt(i), t.stateNode = i) : t.memoizedState = pu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Q(t), e === null && Le && (i = Kt(Bn.current), o = A(), i = t.stateNode = wy(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Ac || (o = tt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Qa(t, 0).serverProps = o)), ya = t, bi = !0, o = Bt, Hn(t.type) ? (zg = o, Bt = sl(
            i.firstChild
          )) : Bt = o), Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), qf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Le && (f = A(), i = Ks(
            t.type,
            f.ancestorInfo
          ), o = Bt, (d = !o) || (d = ii(
            o,
            t.type,
            t.pendingProps,
            bi
          ), d !== null ? (t.stateNode = d, Ac || (f = tt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Qa(t, 0).serverProps = f)), ya = t, Bt = sl(
            d.firstChild
          ), bi = !1, f = !0) : f = !1, d = !f), d && (i && xh(t, o), fn(t))), Q(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, xn(o, f) ? i = null : d !== null && xn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ku(
            e,
            t,
            za,
            null,
            null,
            a
          ), Fm._currentValue = o), qf(e, t), Nt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && Le && (e = t.pendingProps, a = A(), i = a.ancestorInfo.current, e = i != null ? cf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Bt, (i = !a) || (i = fl(
            a,
            t.pendingProps,
            bi
          ), i !== null ? (t.stateNode = i, ya = t, Bt = null, i = !0) : i = !1, i = !i), i && (e && xh(t, a), fn(t))), null;
        case 13:
          return B0(e, t, a);
        case 4:
          return Rl(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = kd(
            t,
            null,
            i,
            a
          ) : Nt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Rr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Nt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || w1 || (w1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Xu(t, i, f), Nt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), wu(t), o = it(o), al(t), i = kv(
            i,
            o,
            void 0
          ), ba(), t.flags |= 1, Nt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Sn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Bf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ny(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = _f(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = on(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Dr(e, t, a);
        case 24:
          return wu(t), i = it(hl), e === null ? (o = Gh(), o === null && (o = ct, f = vf(), o.pooledCache = f, wi(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Xl(t), Xu(t, hl, o)) : ((e.lanes & a) !== 0 && (Zu(e, t), Zc(t, null, null, a), hn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Xu(t, hl, i)) : (i = f.cache, Xu(t, hl, i), i !== o.cache && Yh(
            t,
            [hl],
            a,
            !0
          ))), Nt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Zl(e) {
      e.flags |= 4;
    }
    function jf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Kn) !== _s)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !If(t)) {
        if (t = Jn.current, t !== null && ((Ne & 4194048) === Ne ? Ti !== null : (Ne & 62914560) !== Ne && (Ne & 536870912) === 0 || t !== Ti))
          throw Cm = Xv, Pg;
        e.flags |= 8192;
      }
    }
    function Gf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Fo() : 536870912, e.lanes |= t, Hs |= t);
    }
    function ei(e, t) {
      if (!Le)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Fe(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Bl) !== dt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Bl) !== dt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function q0(e, t, a) {
      var i = t.pendingProps;
      switch (nr(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Fe(t), null;
        case 1:
          return Fe(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), lu(hl, t), _t(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? (Bh(), Zl(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Nh())), Fe(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Zl(t), a !== null ? (Fe(t), jf(
            t,
            a
          )) : (Fe(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Zl(t), Fe(t), jf(
            t,
            a
          )) : (Fe(t), t.flags &= -16777217) : (e.memoizedProps !== i && Zl(t), Fe(t), t.flags &= -16777217), null;
        case 27:
          L(t), a = Kt(Bn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Zl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Fe(t), null;
            }
            e = A(), Xi(t) ? Hh(t) : (e = wy(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Zl(t));
          }
          return Fe(t), null;
        case 5:
          if (L(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Zl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Fe(t), null;
            }
            if (o = A(), Xi(t))
              Hh(t);
            else {
              switch (e = Kt(Bn.current), Ks(a, o.ancestorInfo), o = o.context, e = He(e), o) {
                case ih:
                  e = e.createElementNS(qo, a);
                  break;
                case Zp:
                  e = e.createElementNS(
                    gs,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        qo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        gs,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || bu.call(
                        ob,
                        a
                      ) || (ob[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[El] = t, e[Il] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Rt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Zl(t);
            }
          }
          return Fe(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Zl(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Kt(Bn.current), a = A(), Xi(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Ac, i = null;
              var f = ya;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = od(
                      e,
                      a,
                      i
                    ), o !== null && (Qa(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = od(
                      e,
                      a,
                      i
                    ), o !== null && (Qa(
                      t,
                      0
                    ).serverProps = o));
                }
              e[El] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ny(e.nodeValue, a)), e || fn(t);
            } else
              o = a.ancestorInfo.current, o != null && cf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = He(e).createTextNode(
                i
              ), e[El] = t, t.stateNode = e;
          }
          return Fe(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Xi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[El] = t, Fe(t), (t.mode & Bl) !== dt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Bh(), Qi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Fe(t), (t.mode & Bl) !== dt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Nh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ca(t), t) : (ca(t), null);
          }
          return ca(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Bl) !== dt && rn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Gf(t, t.updateQueue), Fe(t), (t.mode & Bl) !== dt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _t(t), e === null && Hy(
            t.stateNode.containerInfo
          ), Fe(t), null;
        case 10:
          return lu(t.type, t), Fe(t), null;
        case 19:
          if (Ze(ml, t), o = t.memoizedState, o === null) return Fe(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) ei(o, !1);
            else {
              if (qt !== Oc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = fu(e), f !== null) {
                    for (t.flags |= 128, ei(o, !1), e = f.updateQueue, t.updateQueue = e, Gf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Mh(a, e), a = a.sibling;
                    return pe(
                      ml,
                      ml.current & $d | Ym,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && qn() > Np && (t.flags |= 128, i = !0, ei(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = fu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Gf(t, e), ei(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Le)
                  return Fe(t), null;
              } else
                2 * qn() - o.renderingStartTime > Np && a !== 536870912 && (t.flags |= 128, i = !0, ei(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = qn(), e.sibling = null, a = ml.current, a = i ? a & $d | Ym : a & $d, pe(ml, a, t), e) : (Fe(t), null);
        case 22:
        case 23:
          return ca(t), Ja(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), a = t.updateQueue, a !== null && Gf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Ze(Rs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), lu(hl, t), Fe(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Y0(e, t) {
      switch (nr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Bl) !== dt && rn(t), t) : null;
        case 3:
          return lu(hl, t), _t(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return L(t), null;
        case 13:
          if (ca(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Qi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Bl) !== dt && rn(t), t) : null;
        case 19:
          return Ze(ml, t), null;
        case 4:
          return _t(t), null;
        case 10:
          return lu(t.type, t), null;
        case 22:
        case 23:
          return ca(t), Ja(t), e !== null && Ze(Rs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Bl) !== dt && rn(t), t) : null;
        case 24:
          return lu(hl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function uy(e, t) {
      switch (nr(t), t.tag) {
        case 3:
          lu(hl, t), _t(t);
          break;
        case 26:
        case 27:
        case 5:
          L(t);
          break;
        case 4:
          _t(t);
          break;
        case 13:
          ca(t);
          break;
        case 19:
          Ze(ml, t);
          break;
        case 10:
          lu(t.type, t);
          break;
        case 22:
        case 23:
          ca(t), Ja(t), e !== null && Ze(Rs, t);
          break;
        case 24:
          lu(hl, t);
      }
    }
    function Wa(e) {
      return (e.mode & Bl) !== dt;
    }
    function iy(e, t) {
      Wa(e) ? (La(), Ii(t, e), Ta()) : Ii(t, e);
    }
    function _r(e, t, a) {
      Wa(e) ? (La(), Pi(
        a,
        e,
        t
      ), Ta()) : Pi(
        a,
        e,
        t
      );
    }
    function Ii(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & yl) !== wn ? W !== null && typeof W.markComponentPassiveEffectMountStarted == "function" && W.markComponentPassiveEffectMountStarted(
              t
            ) : (e & ql) !== wn && W !== null && typeof W.markComponentLayoutEffectMountStarted == "function" && W.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & ma) !== wn && (nh = !0), i = I(
              t,
              RS,
              a
            ), (e & ma) !== wn && (nh = !1), (e & yl) !== wn ? W !== null && typeof W.markComponentPassiveEffectMountStopped == "function" && W.markComponentPassiveEffectMountStopped() : (e & ql) !== wn && W !== null && typeof W.markComponentLayoutEffectMountStopped == "function" && W.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & ql) !== 0 ? "useLayoutEffect" : (a.tag & ma) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, I(
                t,
                function(h, p) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    p
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    function Pi(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & yl) !== wn ? W !== null && typeof W.markComponentPassiveEffectUnmountStarted == "function" && W.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & ql) !== wn && W !== null && typeof W.markComponentLayoutEffectUnmountStarted == "function" && W.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & ma) !== wn && (nh = !0), o = t, I(
                o,
                DS,
                o,
                a,
                h
              ), (e & ma) !== wn && (nh = !1), (e & yl) !== wn ? W !== null && typeof W.markComponentPassiveEffectUnmountStopped == "function" && W.markComponentPassiveEffectUnmountStopped() : (e & ql) !== wn && W !== null && typeof W.markComponentLayoutEffectUnmountStopped == "function" && W.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (p) {
        fe(t, t.return, p);
      }
    }
    function cy(e, t) {
      Wa(e) ? (La(), Ii(t, e), Ta()) : Ii(t, e);
    }
    function Vf(e, t, a) {
      Wa(e) ? (La(), Pi(
        a,
        e,
        t
      ), Ta()) : Pi(
        a,
        e,
        t
      );
    }
    function oy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Fd || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          ne(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          ne(e) || "instance"
        ));
        try {
          I(
            e,
            x0,
            t,
            a
          );
        } catch (i) {
          fe(e, e.return, i);
        }
      }
    }
    function _0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function pv(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Fd || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        ne(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        ne(e) || "instance"
      ));
      try {
        var o = Pu(
          e.type,
          a,
          e.elementType === e.type
        ), f = I(
          e,
          _0,
          t,
          o,
          i
        );
        a = L1, f !== void 0 || a.has(e.type) || (a.add(e.type), I(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            ne(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        fe(e, e.return, d);
      }
    }
    function jr(e, t, a) {
      a.props = Pu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Wa(e) ? (La(), I(
        e,
        v1,
        e,
        t,
        a
      ), Ta()) : I(
        e,
        v1,
        e,
        t,
        a
      );
    }
    function j0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Wa(e))
            try {
              La(), e.refCleanup = t(a);
            } finally {
              Ta();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            ne(e)
          ), t.current = a;
      }
    }
    function uo(e, t) {
      try {
        I(e, j0, e);
      } catch (a) {
        fe(e, t, a);
      }
    }
    function Ua(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Wa(e))
              try {
                La(), I(e, i);
              } finally {
                Ta(e);
              }
            else I(e, i);
          } catch (o) {
            fe(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Wa(e))
              try {
                La(), I(e, a, null);
              } finally {
                Ta(e);
              }
            else I(e, a, null);
          } catch (o) {
            fe(e, t, o);
          }
        else a.current = null;
    }
    function fy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Tp && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function G0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Tp && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function V0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        I(
          e,
          yu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        fe(e, e.return, o);
      }
    }
    function sy(e, t, a) {
      try {
        I(
          e,
          Dt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        fe(e, e.return, i);
      }
    }
    function ry(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
    }
    function ec(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ry(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hu));
      else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Xf(e, t, a), e = e.sibling; e !== null; )
          Xf(e, t, a), e = e.sibling;
    }
    function tc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (tc(e, t, a), e = e.sibling; e !== null; )
          tc(e, t, a), e = e.sibling;
    }
    function X0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (ry(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = ec(e), tc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (mu(a), t.flags &= -33), t = ec(e), tc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = ec(e), Xf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function dy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        I(
          e,
          sa,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        fe(e, e.return, i);
      }
    }
    function Gr(e, t) {
      if (e = e.containerInfo, Tg = $p, e = T0(e), zh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, p = -1, v = 0, H = 0, Y = e, U = null;
              t: for (; ; ) {
                for (var _; Y !== a || o !== 0 && Y.nodeType !== 3 || (h = d + o), Y !== f || i !== 0 && Y.nodeType !== 3 || (p = d + i), Y.nodeType === 3 && (d += Y.nodeValue.length), (_ = Y.firstChild) !== null; )
                  U = Y, Y = _;
                for (; ; ) {
                  if (Y === e) break t;
                  if (U === a && ++v === o && (h = d), U === f && ++H === i && (p = d), (_ = Y.nextSibling) !== null) break;
                  Y = U, U = Y.parentNode;
                }
                Y = _;
              }
              a = h === -1 || p === -1 ? null : { start: h, end: p };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (Eg = {
        focusedElem: e,
        selectionRange: a
      }, $p = !1, zl = t; zl !== null; )
        if (t = zl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, zl = e;
        else
          for (; zl !== null; ) {
            switch (e = t = zl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && pv(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    vo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        vo(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, zl = e;
              break;
            }
            zl = t.return;
          }
    }
    function hy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(e, a), i & 4 && iy(a, ql | Ln);
          break;
        case 1:
          if (En(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Fd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ne(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ne(a) || "instance"
              )), Wa(a) ? (La(), I(
                a,
                $v,
                a,
                e
              ), Ta()) : I(
                a,
                $v,
                a,
                e
              );
            else {
              var o = Pu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Fd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ne(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ne(a) || "instance"
              )), Wa(a) ? (La(), I(
                a,
                y1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Ta()) : I(
                a,
                y1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && oy(a), i & 512 && uo(a, a.return);
          break;
        case 3:
          if (t = wa(), En(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              I(
                a,
                x0,
                i,
                o
              );
            } catch (d) {
              fe(a, a.return, d);
            }
          }
          e.effectDuration += Lu(t);
          break;
        case 27:
          t === null && i & 4 && dy(a);
        case 26:
        case 5:
          En(e, a), t === null && i & 4 && V0(a), i & 512 && uo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = wa(), En(e, a), e = a.stateNode, e.effectDuration += Li(i);
            try {
              I(
                a,
                fy,
                a,
                t,
                Sp,
                e.effectDuration
              );
            } catch (d) {
              fe(a, a.return, d);
            }
          } else En(e, a);
          break;
        case 13:
          En(e, a), i & 4 && io(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = $f.bind(
            null,
            a
          ), go(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Dc, !i) {
            t = t !== null && t.memoizedState !== null || Lt, o = Dc;
            var f = Lt;
            Dc = i, (Lt = t) && !f ? An(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : En(e, a), Dc = o, Lt = f;
          }
          break;
        case 30:
          break;
        default:
          En(e, a);
      }
    }
    function yy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function su(e, t, a) {
      for (a = a.child; a !== null; )
        lc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function lc(e, t, a) {
      if (rl && typeof rl.onCommitFiberUnmount == "function")
        try {
          rl.onCommitFiberUnmount(hi, a);
        } catch (f) {
          Fl || (Fl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          Lt || Ua(a, t), su(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Lt || Ua(a, t);
          var i = ll, o = _a;
          Hn(a.type) && (ll = a.stateNode, _a = !1), su(
            e,
            t,
            a
          ), I(
            a,
            So,
            a.stateNode
          ), ll = i, _a = o;
          break;
        case 5:
          Lt || Ua(a, t);
        case 6:
          if (i = ll, o = _a, ll = null, su(
            e,
            t,
            a
          ), ll = i, _a = o, ll !== null)
            if (_a)
              try {
                I(
                  a,
                  mo,
                  ll,
                  a.stateNode
                );
              } catch (f) {
                fe(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                I(
                  a,
                  Ca,
                  ll,
                  a.stateNode
                );
              } catch (f) {
                fe(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          ll !== null && (_a ? (e = ll, po(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), mc(e)) : po(ll, a.stateNode));
          break;
        case 4:
          i = ll, o = _a, ll = a.stateNode.containerInfo, _a = !0, su(
            e,
            t,
            a
          ), ll = i, _a = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Lt || Pi(
            ma,
            a,
            t
          ), Lt || _r(
            a,
            t,
            ql
          ), su(
            e,
            t,
            a
          );
          break;
        case 1:
          Lt || (Ua(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && jr(
            a,
            t,
            i
          )), su(
            e,
            t,
            a
          );
          break;
        case 21:
          su(
            e,
            t,
            a
          );
          break;
        case 22:
          Lt = (i = Lt) || a.memoizedState !== null, su(
            e,
            t,
            a
          ), Lt = i;
          break;
        default:
          su(
            e,
            t,
            a
          );
      }
    }
    function io(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          I(
            t,
            fa,
            e
          );
        } catch (a) {
          fe(t, t.return, a);
        }
    }
    function Vr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Z1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Z1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ac(e, t) {
      var a = Vr(e);
      t.forEach(function(i) {
        var o = ni.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Mt)
            if (Id !== null && Pd !== null)
              ho(Pd, Id);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function bl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Hn(h.type)) {
                  ll = h.stateNode, _a = !1;
                  break e;
                }
                break;
              case 5:
                ll = h.stateNode, _a = !1;
                break e;
              case 3:
              case 4:
                ll = h.stateNode.containerInfo, _a = !0;
                break e;
            }
            h = h.return;
          }
          if (ll === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          lc(o, f, d), ll = null, _a = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          my(t, e), t = t.sibling;
    }
    function my(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bl(t, e), Jl(e), i & 4 && (Pi(
            ma | Ln,
            e,
            e.return
          ), Ii(ma | Ln, e), _r(
            e,
            e.return,
            ql | Ln
          ));
          break;
        case 1:
          bl(t, e), Jl(e), i & 512 && (Lt || a === null || Ua(a, a.return)), i & 64 && Dc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ou;
          if (bl(t, e), Jl(e), i & 512 && (Lt || a === null || Ua(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Ho] || o[El] || o.namespaceURI === qo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Rt(o, i, a), o[El] = e, kt(o), i = o;
                        break e;
                      case "link":
                        var f = Ky(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Rt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = Ky(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], $(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Rt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[El] = e, kt(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  ky(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = fd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? ky(
                o,
                e.type,
                e.stateNode
              ) : fd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && sy(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          bl(t, e), Jl(e), i & 512 && (Lt || a === null || Ua(a, a.return)), a !== null && i & 4 && sy(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (bl(t, e), Jl(e), i & 512 && (Lt || a === null || Ua(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              I(e, mu, t);
            } catch (H) {
              fe(e, e.return, H);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, sy(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (lg = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (bl(t, e), Jl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              I(
                e,
                rc,
                t,
                a,
                i
              );
            } catch (H) {
              fe(e, e.return, H);
            }
          }
          break;
        case 3:
          if (o = wa(), Jp = null, f = Ou, Ou = Ff(t.containerInfo), bl(t, e), Ou = f, Jl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              I(
                e,
                Qy,
                t.containerInfo
              );
            } catch (H) {
              fe(e, e.return, H);
            }
          lg && (lg = !1, nc(e)), t.effectDuration += Lu(o);
          break;
        case 4:
          i = Ou, Ou = Ff(
            e.stateNode.containerInfo
          ), bl(t, e), Jl(e), Ou = i;
          break;
        case 12:
          i = wa(), bl(t, e), Jl(e), e.stateNode.effectDuration += Li(i);
          break;
        case 13:
          bl(t, e), Jl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (og = qn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ac(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, p = Dc, v = Lt;
          if (Dc = p || o, Lt = v || h, bl(t, e), Lt = v, Dc = p, Jl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | qv, o && (a === null || h || Dc || Lt || Sl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? I(h, $l, f) : I(
                      h,
                      Vy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (H) {
                    fe(h, h.return, H);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? I(h, Gy, d) : I(
                      h,
                      id,
                      d,
                      h.memoizedProps
                    );
                  } catch (H) {
                    fe(h, h.return, H);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, ac(e, a))));
          break;
        case 19:
          bl(t, e), Jl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ac(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          bl(t, e), Jl(e);
      }
    }
    function Jl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          I(e, X0, e);
        } catch (a) {
          fe(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function nc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          nc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function En(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          hy(e, t.alternate, t), t = t.sibling;
    }
    function oa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _r(
            e,
            e.return,
            ql
          ), Sl(e);
          break;
        case 1:
          Ua(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && jr(
            e,
            e.return,
            t
          ), Sl(e);
          break;
        case 27:
          I(
            e,
            So,
            e.stateNode
          );
        case 26:
        case 5:
          Ua(e, e.return), Sl(e);
          break;
        case 22:
          e.memoizedState === null && Sl(e);
          break;
        case 30:
          Sl(e);
          break;
        default:
          Sl(e);
      }
    }
    function Sl(e) {
      for (e = e.child; e !== null; )
        oa(e), e = e.sibling;
    }
    function ru(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          An(
            e,
            a,
            i
          ), iy(a, ql);
          break;
        case 1:
          if (An(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && I(
            a,
            $v,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              I(
                a,
                Jc,
                t,
                e
              );
            } catch (f) {
              fe(a, a.return, f);
            }
          }
          i && o & 64 && oy(a), uo(a, a.return);
          break;
        case 27:
          dy(a);
        case 26:
        case 5:
          An(
            e,
            a,
            i
          ), i && t === null && o & 4 && V0(a), uo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = wa(), An(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Li(o);
            try {
              I(
                a,
                fy,
                a,
                t,
                Sp,
                i.effectDuration
              );
            } catch (f) {
              fe(a, a.return, f);
            }
          } else
            An(
              e,
              a,
              i
            );
          break;
        case 13:
          An(
            e,
            a,
            i
          ), i && o & 4 && io(e, a);
          break;
        case 22:
          a.memoizedState === null && An(
            e,
            a,
            i
          ), uo(a, a.return);
          break;
        case 30:
          break;
        default:
          An(
            e,
            a,
            i
          );
      }
    }
    function An(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        ru(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function zn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && wi(e), a != null && sn(a));
    }
    function Fa(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (wi(t), e != null && sn(e));
    }
    function Ie(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Qf(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Qf(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ie(
            e,
            t,
            a,
            i
          ), o & 2048 && cy(t, yl | Ln);
          break;
        case 1:
          Ie(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = wa();
          Ie(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (wi(t), a != null && sn(a))), e.passiveEffectDuration += Lu(f);
          break;
        case 12:
          if (o & 2048) {
            o = wa(), Ie(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Li(o);
            try {
              I(
                t,
                G0,
                t,
                t.alternate,
                Sp,
                e.passiveEffectDuration
              );
            } catch (h) {
              fe(t, t.return, h);
            }
          } else
            Ie(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Ie(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Ss ? Ie(
            e,
            t,
            a,
            i
          ) : co(
            e,
            t
          ) : f._visibility & Ss ? Ie(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Ss, ti(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && zn(d, t);
          break;
        case 24:
          Ie(
            e,
            t,
            a,
            i
          ), o & 2048 && Fa(t.alternate, t);
          break;
        default:
          Ie(
            e,
            t,
            a,
            i
          );
      }
    }
    function ti(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Xr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Xr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ti(
            e,
            t,
            a,
            i,
            o
          ), cy(t, yl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Ss ? ti(
            e,
            t,
            a,
            i,
            o
          ) : co(
            e,
            t
          ) : (d._visibility |= Ss, ti(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && zn(
            t.alternate,
            t
          );
          break;
        case 24:
          ti(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && Fa(t.alternate, t);
          break;
        default:
          ti(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function co(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              co(
                a,
                i
              ), o & 2048 && zn(
                i.alternate,
                i
              );
              break;
            case 24:
              co(
                a,
                i
              ), o & 2048 && Fa(
                i.alternate,
                i
              );
              break;
            default:
              co(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function uc(e) {
      if (e.subtreeFlags & _m)
        for (e = e.child; e !== null; )
          li(e), e = e.sibling;
    }
    function li(e) {
      switch (e.tag) {
        case 26:
          uc(e), e.flags & _m && e.memoizedState !== null && I0(
            Ou,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          uc(e);
          break;
        case 3:
        case 4:
          var t = Ou;
          Ou = Ff(
            e.stateNode.containerInfo
          ), uc(e), Ou = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = _m, _m = 16777216, uc(e), _m = t) : uc(e));
          break;
        default:
          uc(e);
      }
    }
    function wf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function oo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            zl = i, vy(
              i,
              e
            );
          }
        wf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          py(e), e = e.sibling;
    }
    function py(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oo(e), e.flags & 2048 && Vf(
            e,
            e.return,
            yl | Ln
          );
          break;
        case 3:
          var t = wa();
          oo(e), e.stateNode.passiveEffectDuration += Lu(t);
          break;
        case 12:
          t = wa(), oo(e), e.stateNode.passiveEffectDuration += Li(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Ss && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Lf(e)) : oo(e);
          break;
        default:
          oo(e);
      }
    }
    function Lf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            zl = i, vy(
              i,
              e
            );
          }
        wf(e);
      }
      for (e = e.child; e !== null; )
        Zf(e), e = e.sibling;
    }
    function Zf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Vf(
            e,
            e.return,
            yl
          ), Lf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Ss && (t._visibility &= -3, Lf(e));
          break;
        default:
          Lf(e);
      }
    }
    function vy(e, t) {
      for (; zl !== null; ) {
        var a = zl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Vf(
              i,
              t,
              yl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && wi(i));
            break;
          case 24:
            sn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, zl = i;
        else
          e: for (a = e; zl !== null; ) {
            i = zl;
            var o = i.sibling, f = i.return;
            if (yy(i), i === a) {
              zl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, zl = o;
              break e;
            }
            zl = f;
          }
      }
    }
    function gy() {
      MS.forEach(function(e) {
        return e();
      });
    }
    function by() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || N.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Kl(e) {
      if ((We & pa) !== tn && Ne !== 0)
        return Ne & -Ne;
      var t = N.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = zs, e !== 0 ? e : My()) : i0();
    }
    function Q0() {
      an === 0 && (an = (Ne & 536870912) === 0 || Le ? fh() : 536870912);
      var e = Jn.current;
      return e !== null && (e.flags |= 32), an;
    }
    function At(e, t, a) {
      if (nh && console.error("useInsertionEffect must not schedule updates."), hg && (Bp = !0), (e === ct && (Pe === Us || Pe === xs) || e.cancelPendingCommit !== null) && (cc(e, 0), du(
        e,
        Ne,
        an,
        !1
      )), Cc(e, a), (We & pa) !== 0 && e === ct) {
        if (Pl)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Ce && ne(Ce) || "Unknown", tb.has(e) || (tb.add(e), t = ne(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              eb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), eb = !0);
          }
      } else
        Mt && $n(e, t, a), J0(t), e === ct && ((We & pa) === tn && (Qo |= a), qt === Ms && du(
          e,
          Ne,
          an,
          !1
        )), xa(e);
    }
    function Qt(e, t, a) {
      if ((We & (pa | Mu)) !== tn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Wo(e, t), o = i ? Ty(e, t) : Zr(e, t, !0), f = i;
      do {
        if (o === Oc) {
          lh && !i && du(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !w0(a)) {
            o = Zr(e, t, !1), f = !1;
            continue;
          }
          if (o === eh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = wm;
                var p = o.current.memoizedState.isDehydrated;
                if (p && (cc(
                  o,
                  h
                ).flags |= 256), h = Zr(
                  o,
                  h,
                  !1
                ), h !== eh) {
                  if (ig && !p) {
                    o.errorRecoveryDisabledLanes |= f, Qo |= f, o = Ms;
                    break e;
                  }
                  o = va, va = d, o !== null && (va === null ? va = o : va.push.apply(
                    va,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== eh) continue;
            }
          }
          if (o === Gm) {
            cc(e, 0), du(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Oc:
              case Gm:
                throw Error("Root did not complete. This is a bug in React.");
              case Ms:
                if ((t & 4194048) !== t) break;
              case Hp:
                du(
                  i,
                  t,
                  an,
                  !Vo
                );
                break e;
              case eh:
                va = null;
                break;
              case ag:
              case J1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (N.actQueue !== null)
              Wr(
                i,
                a,
                t,
                va,
                Lm,
                Cp,
                an,
                Qo,
                Hs
              );
            else {
              if ((t & 62914560) === t && (f = og + k1 - qn(), 10 < f)) {
                if (du(
                  i,
                  t,
                  an,
                  !Vo
                ), ta(i, 0, !0) !== 0) break e;
                i.timeoutHandle = fb(
                  It.bind(
                    null,
                    i,
                    a,
                    va,
                    Lm,
                    Cp,
                    t,
                    an,
                    Qo,
                    Hs,
                    Vo,
                    o,
                    CS,
                    Wg,
                    0
                  ),
                  f
                );
                break e;
              }
              It(
                i,
                a,
                va,
                Lm,
                Cp,
                t,
                an,
                Qo,
                Hs,
                Vo,
                o,
                xS,
                Wg,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      xa(e);
    }
    function It(e, t, a, i, o, f, d, h, p, v, H, Y, U, _) {
      if (e.timeoutHandle = Ys, Y = t.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (Wm = { stylesheets: null, count: 0, unsuspend: F0 }, li(t), Y = P0(), Y !== null)) {
        e.cancelPendingCommit = Y(
          Wr.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            p,
            H,
            HS,
            U,
            _
          )
        ), du(
          e,
          f,
          d,
          !v
        );
        return;
      }
      Wr(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        p
      );
    }
    function w0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!ha(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function du(e, t, a, i) {
      t &= ~cg, t &= ~Qo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Tl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && u0(e, a, t);
    }
    function ic() {
      return (We & (pa | Mu)) === tn ? (oc(0), !1) : !0;
    }
    function Qr() {
      if (Ce !== null) {
        if (Pe === ja)
          var e = Ce.return;
        else
          e = Ce, ur(), Ka(e), Kd = null, qm = 0, e = Ce;
        for (; e !== null; )
          uy(e.alternate, e), e = e.return;
        Ce = null;
      }
    }
    function cc(e, t) {
      var a = e.timeoutHandle;
      a !== Ys && (e.timeoutHandle = Ys, ZS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Qr(), ct = e, Ce = a = on(e.current, null), Ne = t, Pe = ja, ln = null, Vo = !1, lh = Wo(e, t), ig = !1, qt = Oc, Hs = an = cg = Qo = Xo = 0, va = wm = null, Cp = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Tl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Ei = t, df(), t = kg(), 1e3 < t - Kg && (N.recentlyCreatedOwnerStacks = 0, Kg = t), Ru.discardPendingWarnings(), a;
    }
    function Jf(e, t) {
      me = null, N.H = Up, N.getCurrentStack = null, Pl = !1, da = null, t === Hm || t === zp ? (t = Qh(), Pe = Xm) : t === Pg ? (t = Qh(), Pe = K1) : Pe = t === _1 ? ug : t !== null && typeof t == "object" && typeof t.then == "function" ? th : Vm, ln = t;
      var a = Ce;
      if (a === null)
        qt = Gm, no(
          e,
          na(t, e.current)
        );
      else
        switch (a.mode & Bl && au(a), ba(), Pe) {
          case Vm:
            W !== null && typeof W.markComponentErrored == "function" && W.markComponentErrored(
              a,
              t,
              Ne
            );
            break;
          case Us:
          case xs:
          case Xm:
          case th:
          case Qm:
            W !== null && typeof W.markComponentSuspended == "function" && W.markComponentSuspended(
              a,
              t,
              Ne
            );
        }
    }
    function wr() {
      var e = N.H;
      return N.H = Up, e === null ? Up : e;
    }
    function Sy() {
      var e = N.A;
      return N.A = OS, e;
    }
    function Lr() {
      qt = Ms, Vo || (Ne & 4194048) !== Ne && Jn.current !== null || (lh = !0), (Xo & 134217727) === 0 && (Qo & 134217727) === 0 || ct === null || du(
        ct,
        Ne,
        an,
        !1
      );
    }
    function Zr(e, t, a) {
      var i = We;
      We |= pa;
      var o = wr(), f = Sy();
      if (ct !== e || Ne !== t) {
        if (Mt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (ho(e, Ne), d.clear()), Gl(e, t);
        }
        Lm = null, cc(e, t);
      }
      Ai(t), t = !1, d = qt;
      e: do
        try {
          if (Pe !== ja && Ce !== null) {
            var h = Ce, p = ln;
            switch (Pe) {
              case ug:
                Qr(), d = Hp;
                break e;
              case Xm:
              case Us:
              case xs:
              case th:
                Jn.current === null && (t = !0);
                var v = Pe;
                if (Pe = ja, ln = null, ai(e, h, p, v), a && lh) {
                  d = Oc;
                  break e;
                }
                break;
              default:
                v = Pe, Pe = ja, ln = null, ai(e, h, p, v);
            }
          }
          Jr(), d = qt;
          break;
        } catch (H) {
          Jf(e, H);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ur(), We = i, N.H = o, N.A = f, Gs(), Ce === null && (ct = null, Ne = 0, df()), d;
    }
    function Jr() {
      for (; Ce !== null; ) Ay(Ce);
    }
    function Ty(e, t) {
      var a = We;
      We |= pa;
      var i = wr(), o = Sy();
      if (ct !== e || Ne !== t) {
        if (Mt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (ho(e, Ne), f.clear()), Gl(e, t);
        }
        Lm = null, Np = qn() + $1, cc(e, t);
      } else
        lh = Wo(
          e,
          t
        );
      Ai(t);
      e: do
        try {
          if (Pe !== ja && Ce !== null)
            t: switch (t = Ce, f = ln, Pe) {
              case Vm:
                Pe = ja, ln = null, ai(
                  e,
                  t,
                  f,
                  Vm
                );
                break;
              case Us:
              case xs:
                if (Xh(f)) {
                  Pe = ja, ln = null, Kr(t);
                  break;
                }
                t = function() {
                  Pe !== Us && Pe !== xs || ct !== e || (Pe = Qm), xa(e);
                }, f.then(t, t);
                break e;
              case Xm:
                Pe = Qm;
                break e;
              case K1:
                Pe = ng;
                break e;
              case Qm:
                Xh(f) ? (Pe = ja, ln = null, Kr(t)) : (Pe = ja, ln = null, ai(
                  e,
                  t,
                  f,
                  Qm
                ));
                break;
              case ng:
                var d = null;
                switch (Ce.tag) {
                  case 26:
                    d = Ce.memoizedState;
                  case 5:
                  case 27:
                    var h = Ce;
                    if (!d || If(d)) {
                      Pe = ja, ln = null;
                      var p = h.sibling;
                      if (p !== null) Ce = p;
                      else {
                        var v = h.return;
                        v !== null ? (Ce = v, Kf(v)) : Ce = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Pe = ja, ln = null, ai(
                  e,
                  t,
                  f,
                  ng
                );
                break;
              case th:
                Pe = ja, ln = null, ai(
                  e,
                  t,
                  f,
                  th
                );
                break;
              case ug:
                Qr(), qt = Hp;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          N.actQueue !== null ? Jr() : Ey();
          break;
        } catch (H) {
          Jf(e, H);
        }
      while (!0);
      return ur(), N.H = i, N.A = o, We = a, Ce !== null ? (W !== null && typeof W.markRenderYielded == "function" && W.markRenderYielded(), Oc) : (Gs(), ct = null, Ne = 0, df(), qt);
    }
    function Ey() {
      for (; Ce !== null && !ip(); )
        Ay(Ce);
    }
    function Ay(e) {
      var t = e.alternate;
      (e.mode & Bl) !== dt ? (ir(e), t = I(
        e,
        Yr,
        t,
        e,
        Ei
      ), au(e)) : t = I(
        e,
        Yr,
        t,
        e,
        Ei
      ), e.memoizedProps = e.pendingProps, t === null ? Kf(e) : Ce = t;
    }
    function Kr(e) {
      var t = I(e, kr, e);
      e.memoizedProps = e.pendingProps, t === null ? Kf(e) : Ce = t;
    }
    function kr(e) {
      var t = e.alternate, a = (e.mode & Bl) !== dt;
      switch (a && ir(e), e.tag) {
        case 15:
        case 0:
          t = ey(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ne
          );
          break;
        case 11:
          t = ey(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ne
          );
          break;
        case 5:
          Ka(e);
        default:
          uy(t, e), e = Ce = Mh(e, Ei), t = Yr(t, e, Ei);
      }
      return a && au(e), t;
    }
    function ai(e, t, a, i) {
      ur(), Ka(t), Kd = null, qm = 0;
      var o = t.return;
      try {
        if (Nf(
          e,
          o,
          t,
          a,
          Ne
        )) {
          qt = Gm, no(
            e,
            na(a, e.current)
          ), Ce = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ce = o, f;
        qt = Gm, no(
          e,
          na(a, e.current)
        ), Ce = null;
        return;
      }
      t.flags & 32768 ? (Le || i === Vm ? e = !0 : lh || (Ne & 536870912) !== 0 ? e = !1 : (Vo = e = !0, (i === Us || i === xs || i === Xm || i === th) && (i = Jn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), $r(t, e)) : Kf(t);
    }
    function Kf(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          $r(
            t,
            Vo
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ir(t), a = I(
          t,
          q0,
          a,
          t,
          Ei
        ), (t.mode & Bl) !== dt && Zi(t), a !== null) {
          Ce = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ce = t;
          return;
        }
        Ce = t = e;
      } while (t !== null);
      qt === Oc && (qt = J1);
    }
    function $r(e, t) {
      do {
        var a = Y0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Ce = a;
          return;
        }
        if ((e.mode & Bl) !== dt) {
          Zi(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ce = e;
          return;
        }
        Ce = e = a;
      } while (e !== null);
      qt = Hp, Ce = null;
    }
    function Wr(e, t, a, i, o, f, d, h, p) {
      e.cancelPendingCommit = null;
      do
        fo();
      while (Yl !== Cs);
      if (Ru.flushLegacyContextWarning(), Ru.flushPendingUnsafeLifecycleWarnings(), (We & (pa | Mu)) !== tn)
        throw Error("Should not already be working.");
      if (W !== null && typeof W.markCommitStarted == "function" && W.markCommitStarted(a), t === null) St();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= Yv, iv(
          e,
          a,
          f,
          d,
          h,
          p
        ), e === ct && (Ce = ct = null, Ne = 0), ah = t, Lo = e, Zo = a, sg = f, rg = o, P1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Oy(Mo, function() {
          return kf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Sp = Qd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = N.T, N.T = null, o = re.p, re.p = dl, d = We, We |= Mu;
          try {
            Gr(e, t, a);
          } finally {
            We = d, re.p = o, N.T = i;
          }
        }
        Yl = W1, Rn(), Fr(), L0();
      }
    }
    function Rn() {
      if (Yl === W1) {
        Yl = Cs;
        var e = Lo, t = ah, a = Zo, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = N.T, N.T = null;
          var o = re.p;
          re.p = dl;
          var f = We;
          We |= Mu;
          try {
            Id = a, Pd = e, my(t, e), Pd = Id = null, a = Eg;
            var d = T0(e.containerInfo), h = a.focusedElem, p = a.selectionRange;
            if (d !== h && h && h.ownerDocument && S0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (p !== null && zh(h)) {
                var v = p.start, H = p.end;
                if (H === void 0 && (H = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    H,
                    h.value.length
                  );
                else {
                  var Y = h.ownerDocument || document, U = Y && Y.defaultView || window;
                  if (U.getSelection) {
                    var _ = U.getSelection(), P = h.textContent.length, de = Math.min(
                      p.start,
                      P
                    ), ot = p.end === void 0 ? de : Math.min(p.end, P);
                    !_.extend && de > ot && (d = ot, ot = de, de = d);
                    var Ye = Ah(
                      h,
                      de
                    ), b = Ah(
                      h,
                      ot
                    );
                    if (Ye && b && (_.rangeCount !== 1 || _.anchorNode !== Ye.node || _.anchorOffset !== Ye.offset || _.focusNode !== b.node || _.focusOffset !== b.offset)) {
                      var S = Y.createRange();
                      S.setStart(Ye.node, Ye.offset), _.removeAllRanges(), de > ot ? (_.addRange(S), _.extend(b.node, b.offset)) : (S.setEnd(b.node, b.offset), _.addRange(S));
                    }
                  }
                }
              }
              for (Y = [], _ = h; _ = _.parentNode; )
                _.nodeType === 1 && Y.push({
                  element: _,
                  left: _.scrollLeft,
                  top: _.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < Y.length; h++) {
                var T = Y[h];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            $p = !!Tg, Eg = Tg = null;
          } finally {
            We = f, re.p = o, N.T = i;
          }
        }
        e.current = t, Yl = F1;
      }
    }
    function Fr() {
      if (Yl === F1) {
        Yl = Cs;
        var e = Lo, t = ah, a = Zo, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = N.T, N.T = null;
          var o = re.p;
          re.p = dl;
          var f = We;
          We |= Mu;
          try {
            W !== null && typeof W.markLayoutEffectsStarted == "function" && W.markLayoutEffectsStarted(a), Id = a, Pd = e, hy(
              e,
              t.alternate,
              t
            ), Pd = Id = null, W !== null && typeof W.markLayoutEffectsStopped == "function" && W.markLayoutEffectsStopped();
          } finally {
            We = f, re.p = o, N.T = i;
          }
        }
        Yl = I1;
      }
    }
    function L0() {
      if (Yl === NS || Yl === I1) {
        Yl = Cs, zv();
        var e = Lo, t = ah, a = Zo, i = P1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Yl = fg : (Yl = Cs, ah = Lo = null, Dn(e, e.pendingLanes), Ns = 0, Jm = null);
        var f = e.pendingLanes;
        if (f === 0 && (wo = null), o || ro(e), o = rh(a), t = t.stateNode, rl && typeof rl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case dl:
                var h = Sd;
                break;
              case en:
                h = ss;
                break;
              case Tu:
                h = Mo;
                break;
              case zd:
                h = rs;
                break;
              default:
                h = Mo;
            }
            rl.onCommitFiberRoot(
              hi,
              t,
              h,
              d
            );
          } catch (Y) {
            Fl || (Fl = !0, console.error(
              "React instrumentation encountered an error: %s",
              Y
            ));
          }
        if (Mt && e.memoizedUpdaters.clear(), gy(), i !== null) {
          d = N.T, h = re.p, re.p = dl, N.T = null;
          try {
            var p = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], H = Z0(v.stack);
              I(
                v.source,
                p,
                v.value,
                H
              );
            }
          } finally {
            N.T = d, re.p = h;
          }
        }
        (Zo & 3) !== 0 && fo(), xa(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Ep = !0, e === dg ? Zm++ : (Zm = 0, dg = e)) : Zm = 0, oc(0), St();
      }
    }
    function Z0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Dn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sn(t)));
    }
    function fo(e) {
      return Rn(), Fr(), L0(), kf();
    }
    function kf() {
      if (Yl !== fg) return !1;
      var e = Lo, t = sg;
      sg = 0;
      var a = rh(Zo), i = Tu > a ? Tu : a;
      a = N.T;
      var o = re.p;
      try {
        re.p = i, N.T = null, i = rg, rg = null;
        var f = Lo, d = Zo;
        if (Yl = Cs, ah = Lo = null, Zo = 0, (We & (pa | Mu)) !== tn)
          throw Error("Cannot flush passive effects while already rendering.");
        hg = !0, Bp = !1, W !== null && typeof W.markPassiveEffectsStarted == "function" && W.markPassiveEffectsStarted(d);
        var h = We;
        if (We |= Mu, py(f.current), Qf(
          f,
          f.current,
          d,
          i
        ), W !== null && typeof W.markPassiveEffectsStopped == "function" && W.markPassiveEffectsStopped(), ro(f), We = h, oc(0, !1), Bp ? f === Jm ? Ns++ : (Ns = 0, Jm = f) : Ns = 0, Bp = hg = !1, rl && typeof rl.onPostCommitFiberRoot == "function")
          try {
            rl.onPostCommitFiberRoot(hi, f);
          } catch (v) {
            Fl || (Fl = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var p = f.current.stateNode;
        return p.effectDuration = 0, p.passiveEffectDuration = 0, !0;
      } finally {
        re.p = o, N.T = a, Dn(e, t);
      }
    }
    function so(e, t, a) {
      t = na(a, t), t = gl(e.stateNode, t, 2), e = Za(e, t, 2), e !== null && (Cc(e, 2), xa(e));
    }
    function fe(e, t, a) {
      if (nh = !1, e.tag === 3)
        so(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            so(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (wo === null || !wo.has(i))) {
              e = na(a, e), a = Et(2), i = Za(t, a, 2), i !== null && (Cf(
                a,
                i,
                t,
                e
              ), Cc(i, 2), xa(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function zy(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new US();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (ig = !0, o.add(a), i = vv.bind(null, e, t, a), Mt && ho(e, a), t.then(i, i));
    }
    function vv(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, by() && N.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), ct === e && (Ne & a) === a && (qt === Ms || qt === ag && (Ne & 62914560) === Ne && qn() - og < k1 ? (We & pa) === tn && cc(e, 0) : cg |= a, Hs === Ne && (Hs = 0)), xa(e);
    }
    function Ry(e, t) {
      t === 0 && (t = Fo()), e = Vl(e, t), e !== null && (Cc(e, t), xa(e));
    }
    function $f(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Ry(e, a);
    }
    function ni(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Ry(e, a);
    }
    function Ir(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Ao;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && I(
            o,
            Dy,
            i,
            o,
            (o.mode & Lg) === dt
          ) : Ir(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? I(
            o,
            Dy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && I(
            o,
            Ir,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Dy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Be(!0);
      try {
        oa(t), a && Zf(t), ru(e, t.alternate, t, !1), a && Xr(e, t, 0, null, !1, 0);
      } finally {
        Be(!1);
      }
    }
    function ro(e) {
      var t = !0;
      e.current.mode & (ea | zu) || (t = !1), Ir(
        e,
        e.current,
        t
      );
    }
    function Ia(e) {
      if ((We & pa) === tn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = ne(e) || "ReactComponent", qp !== null) {
            if (qp.has(t)) return;
            qp.add(t);
          } else qp = /* @__PURE__ */ new Set([t]);
          I(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function ho(e, t) {
      Mt && e.memoizedUpdaters.forEach(function(a) {
        $n(e, a, t);
      });
    }
    function Oy(e, t) {
      var a = N.actQueue;
      return a !== null ? (a.push(t), YS) : bd(e, t);
    }
    function J0(e) {
      by() && N.actQueue === null && I(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          ne(e)
        );
      });
    }
    function xa(e) {
      e !== uh && e.next === null && (uh === null ? Yp = uh = e : uh = uh.next = e), _p = !0, N.actQueue !== null ? mg || (mg = !0, wt()) : yg || (yg = !0, wt());
    }
    function oc(e, t) {
      if (!pg && _p) {
        pg = !0;
        do
          for (var a = !1, i = Yp; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Tl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, td(i, f));
            } else
              f = Ne, f = ta(
                i,
                i === ct ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ys
              ), (f & 3) === 0 || Wo(i, f) || (a = !0, td(i, f));
            i = i.next;
          }
        while (a);
        pg = !1;
      }
    }
    function Pr() {
      ed();
    }
    function ed() {
      _p = mg = yg = !1;
      var e = 0;
      Bs !== 0 && (yo() && (e = Bs), Bs = 0);
      for (var t = qn(), a = null, i = Yp; i !== null; ) {
        var o = i.next, f = On(i, t);
        f === 0 ? (i.next = null, a === null ? Yp = o : a.next = o, o === null && (uh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (_p = !0)), i = o;
      }
      oc(e);
    }
    function On(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Tl(f), h = 1 << d, p = o[d];
        p === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = n0(h, t)) : p <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = ct, a = Ne, a = ta(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ys
      ), i = e.callbackNode, a === 0 || e === t && (Pe === Us || Pe === xs) || e.cancelPendingCommit !== null)
        return i !== null && ld(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Wo(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || N.actQueue !== null && i !== vg)
          ld(i);
        else return t;
        switch (rh(a)) {
          case dl:
          case en:
            a = ss;
            break;
          case Tu:
            a = Mo;
            break;
          case zd:
            a = rs;
            break;
          default:
            a = Mo;
        }
        return i = zt.bind(null, e), N.actQueue !== null ? (N.actQueue.push(i), a = vg) : a = bd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && ld(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function zt(e, t) {
      if (Ep = Tp = !1, Yl !== Cs && Yl !== fg)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (fo() && e.callbackNode !== a)
        return null;
      var i = Ne;
      return i = ta(
        e,
        e === ct ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ys
      ), i === 0 ? null : (Qt(
        e,
        i,
        t
      ), On(e, qn()), e.callbackNode != null && e.callbackNode === a ? zt.bind(null, e) : null);
    }
    function td(e, t) {
      if (fo()) return null;
      Tp = Ep, Ep = !1, Qt(e, t, !0);
    }
    function ld(e) {
      e !== vg && e !== null && Av(e);
    }
    function wt() {
      N.actQueue !== null && N.actQueue.push(function() {
        return ed(), null;
      }), JS(function() {
        (We & (pa | Mu)) !== tn ? bd(
          Sd,
          Pr
        ) : ed();
      });
    }
    function My() {
      return Bs === 0 && (Bs = fh()), Bs;
    }
    function Uy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ($(e, "action"), Vc("" + e));
    }
    function xy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function st(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Uy(
          (o[Il] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Il] || null) ? Uy(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new ie(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Bs !== 0) {
                    var p = d ? xy(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: p,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), $i(
                      a,
                      v,
                      null,
                      p
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), p = d ? xy(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: p,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), $i(
                    a,
                    v,
                    f,
                    p
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function cl(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Iv(i);
      }
      e.currentTarget = null;
    }
    function Mn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], p = h.instance, v = h.currentTarget;
              if (h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? I(
                p,
                cl,
                f,
                h,
                v
              ) : cl(f, h, v), o = p;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], p = h.instance, v = h.currentTarget, h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? I(
                p,
                cl,
                f,
                h,
                v
              ) : cl(f, h, v), o = p;
            }
        }
      }
    }
    function Me(e, t) {
      gg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[am];
      a === void 0 && (a = t[am] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (nd(t, e, 2, !1), a.add(i));
    }
    function ad(e, t, a) {
      gg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), nd(
        a,
        e,
        i,
        t
      );
    }
    function Hy(e) {
      if (!e[jp]) {
        e[jp] = !0, op.forEach(function(a) {
          a !== "selectionchange" && (gg.has(a) || ad(a, !1, e), ad(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[jp] || (t[jp] = !0, ad("selectionchange", !1, t));
      }
    }
    function nd(e, t, a, i) {
      switch (md(t)) {
        case dl:
          var o = Sv;
          break;
        case en:
          o = yd;
          break;
        default:
          o = oi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !M || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function xl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Wn(h), d === null) return;
              if (p = d.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      $s(function() {
        var v = f, H = qi(a), Y = [];
        e: {
          var U = wg.get(e);
          if (U !== void 0) {
            var _ = ie, P = e;
            switch (e) {
              case "keypress":
                if (Xc(a) === 0) break e;
              case "keydown":
              case "keyup":
                _ = Pb;
                break;
              case "focusin":
                P = "focus", _ = _e;
                break;
              case "focusout":
                P = "blur", _ = _e;
                break;
              case "beforeblur":
              case "afterblur":
                _ = _e;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                _ = Re;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                _ = se;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                _ = lS;
                break;
              case Gg:
              case Vg:
              case Xg:
                _ = Mv;
                break;
              case Qg:
                _ = nS;
                break;
              case "scroll":
              case "scrollend":
                _ = R;
                break;
              case "wheel":
                _ = iS;
                break;
              case "copy":
              case "cut":
              case "paste":
                _ = Jb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                _ = Hg;
                break;
              case "toggle":
              case "beforetoggle":
                _ = oS;
            }
            var de = (t & 4) !== 0, ot = !de && (e === "scroll" || e === "scrollend"), Ye = de ? U !== null ? U + "Capture" : null : U;
            de = [];
            for (var b = v, S; b !== null; ) {
              var T = b;
              if (S = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || S === null || Ye === null || (T = Pn(b, Ye), T != null && de.push(
                Hl(
                  b,
                  T,
                  S
                )
              )), ot) break;
              b = b.return;
            }
            0 < de.length && (U = new _(
              U,
              P,
              null,
              a,
              H
            ), Y.push({
              event: U,
              listeners: de
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (U = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", U && a !== s && (P = a.relatedTarget || a.fromElement) && (Wn(P) || P[mi]))
              break e;
            if ((_ || U) && (U = H.window === H ? H : (U = H.ownerDocument) ? U.defaultView || U.parentWindow : window, _ ? (P = a.relatedTarget || a.toElement, _ = v, P = P ? Wn(P) : null, P !== null && (ot = et(P), de = P.tag, P !== ot || de !== 5 && de !== 27 && de !== 6) && (P = null)) : (_ = null, P = v), _ !== P)) {
              if (de = Re, T = "onMouseLeave", Ye = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (de = Hg, T = "onPointerLeave", Ye = "onPointerEnter", b = "pointer"), ot = _ == null ? U : Hu(_), S = P == null ? U : Hu(P), U = new de(
                T,
                b + "leave",
                _,
                a,
                H
              ), U.target = ot, U.relatedTarget = S, T = null, Wn(H) === v && (de = new de(
                Ye,
                b + "enter",
                P,
                a,
                H
              ), de.target = S, de.relatedTarget = ot, T = de), ot = T, _ && P)
                t: {
                  for (de = _, Ye = P, b = 0, S = de; S; S = Pt(S))
                    b++;
                  for (S = 0, T = Ye; T; T = Pt(T))
                    S++;
                  for (; 0 < b - S; )
                    de = Pt(de), b--;
                  for (; 0 < S - b; )
                    Ye = Pt(Ye), S--;
                  for (; b--; ) {
                    if (de === Ye || Ye !== null && de === Ye.alternate)
                      break t;
                    de = Pt(de), Ye = Pt(Ye);
                  }
                  de = null;
                }
              else de = null;
              _ !== null && Cy(
                Y,
                U,
                _,
                de,
                !1
              ), P !== null && ot !== null && Cy(
                Y,
                ot,
                P,
                de,
                !0
              );
            }
          }
          e: {
            if (U = v ? Hu(v) : window, _ = U.nodeName && U.nodeName.toLowerCase(), _ === "select" || _ === "input" && U.type === "file")
              var j = Th;
            else if (p0(U))
              if (_g)
                j = hv;
              else {
                j = Eh;
                var J = rv;
              }
            else
              _ = U.nodeName, !_ || _.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? v && Bi(v.elementType) && (j = Th) : j = dv;
            if (j && (j = j(e, v))) {
              Ps(
                Y,
                j,
                a,
                H
              );
              break e;
            }
            J && J(e, U, v), e === "focusout" && v && U.type === "number" && v.memoizedProps.value != null && ws(U, "number", U.value);
          }
          switch (J = v ? Hu(v) : window, e) {
            case "focusin":
              (p0(J) || J.contentEditable === "true") && (Bd = J, xv = v, Am = null);
              break;
            case "focusout":
              Am = xv = Bd = null;
              break;
            case "mousedown":
              Hv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Hv = !1, E0(
                Y,
                a,
                H
              );
              break;
            case "selectionchange":
              if (dS) break;
            case "keydown":
            case "keyup":
              E0(
                Y,
                a,
                H
              );
          }
          var be;
          if (Uv)
            e: {
              switch (e) {
                case "compositionstart":
                  var ee = "onCompositionStart";
                  break e;
                case "compositionend":
                  ee = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ee = "onCompositionUpdate";
                  break e;
              }
              ee = void 0;
            }
          else
            Nd ? Ul(e, a) && (ee = "onCompositionEnd") : e === "keydown" && a.keyCode === Cg && (ee = "onCompositionStart");
          ee && (Ng && a.locale !== "ko" && (Nd || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && Nd && (be = eu()) : (X = H, x = "value" in X ? X.value : X.textContent, Nd = !0)), J = Wf(
            v,
            ee
          ), 0 < J.length && (ee = new xg(
            ee,
            e,
            null,
            a,
            H
          ), Y.push({
            event: ee,
            listeners: J
          }), be ? ee.data = be : (be = ju(a), be !== null && (ee.data = be)))), (be = sS ? Is(e, a) : ff(e, a)) && (ee = Wf(
            v,
            "onBeforeInput"
          ), 0 < ee.length && (J = new kb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            H
          ), Y.push({
            event: J,
            listeners: ee
          }), J.data = be)), st(
            Y,
            e,
            v,
            a,
            H
          );
        }
        Mn(Y, t);
      });
    }
    function Hl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Wf(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Pn(e, a), o != null && i.unshift(
          Hl(e, o, f)
        ), o = Pn(e, t), o != null && i.push(
          Hl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function Pt(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Cy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, p = h.alternate, v = h.stateNode;
        if (h = h.tag, p !== null && p === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (p = v, o ? (v = Pn(a, f), v != null && d.unshift(
          Hl(a, v, p)
        )) : o || (v = Pn(a, f), v != null && d.push(
          Hl(a, v, p)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Un(e, t) {
      Gc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || bm || (bm = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: qa,
        possibleRegistrationNames: vc
      };
      Bi(e) || typeof t.is == "string" || gh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function rt(e, t, a, i) {
      t !== a && (a = ol(a), ol(t) !== a && (i[e] = t));
    }
    function ui(e, t, a) {
      t.forEach(function(i) {
        a[By(i)] = i === "style" ? sc(e) : e.getAttribute(i);
      });
    }
    function Ha(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ud(e, t) {
      return e = e.namespaceURI === gs || e.namespaceURI === qo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function ol(e) {
      return B(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ce(e)
      ), te(e)), (typeof e == "string" ? e : "" + e).replace(_S, `
`).replace(jS, "");
    }
    function Ny(e, t) {
      return t = ol(t), ol(e) === t;
    }
    function hu() {
    }
    function Qe(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (cf(i, t, !1), t === "body" || t === "textarea" && i === "" || Ni(e, i)) : (typeof i == "number" || typeof i == "bigint") && (cf("" + i, t, !1), t !== "body" && Ni(e, "" + i));
          break;
        case "className":
          Po(e, "class", i);
          break;
        case "tabIndex":
          Po(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Po(e, a, i);
          break;
        case "style":
          of(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Po(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          $(i, a), i = Vc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Xp || (Xp = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Vp || (Vp = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Gp ? t !== "button" || o.type == null || o.type === "submit" || Gp ? typeof i == "function" && (o.name == null || nb || (nb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Xp || (Xp = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Vp || (Vp = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Gp = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Gp = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Qe(e, t, "name", o.name, o, null), Qe(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Qe(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Qe(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Qe(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Qe(e, t, "method", o.method, o, null), Qe(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          $(i, a), i = Vc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ha(a, i), e.onclick = hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ha(a, i), Me("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ha(a, i), Me("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          $(i, a), a = Vc("" + i), e.setAttributeNS(qs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? ($(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Qp[a] || (Qp[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? ($(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? ($(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : ($(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Me("beforetoggle", e), Me("toggle", e), Io(e, "popover", i);
          break;
        case "xlinkActuate":
          Ga(
            e,
            qs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Ga(
            e,
            qs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Ga(
            e,
            qs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Ga(
            e,
            qs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Ga(
            e,
            qs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Ga(
            e,
            qs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Ga(
            e,
            bg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Ga(
            e,
            bg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Ga(
            e,
            bg,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Io(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          ub || i == null || typeof i != "object" || (ub = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = ks(a), Io(e, a, i)) : qa.hasOwnProperty(a) && i != null && typeof i != "function" && Ha(a, i);
      }
    }
    function fc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          of(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Ni(e, i) : (typeof i == "number" || typeof i == "bigint") && Ni(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ha(a, i), Me("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ha(a, i), Me("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ha(a, i), e.onclick = hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (qa.hasOwnProperty(a))
            i != null && typeof i != "function" && Ha(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Il] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Io(e, a, i);
            }
      }
    }
    function Rt(e, t, a) {
      switch (Un(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Me("error", e), Me("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Qe(e, t, f, d, a, null);
                }
            }
          o && Qe(e, t, "srcSet", a.srcSet, a, null), i && Qe(e, t, "src", a.src, a, null);
          return;
        case "input":
          Nu("input", a), Me("invalid", e);
          var h = f = d = o = null, p = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var H = a[i];
              if (H != null)
                switch (i) {
                  case "name":
                    o = H;
                    break;
                  case "type":
                    d = H;
                    break;
                  case "checked":
                    p = H;
                    break;
                  case "defaultChecked":
                    v = H;
                    break;
                  case "value":
                    f = H;
                    break;
                  case "defaultValue":
                    h = H;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (H != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Qe(e, t, i, H, a, null);
                }
            }
          Bu(e, a), r0(
            e,
            f,
            h,
            p,
            v,
            d,
            o,
            !1
          ), Fn(e);
          return;
        case "select":
          Nu("select", a), Me("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Qe(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          af(e, a), t = f, a = d, e.multiple = !!i, t != null ? In(e, !!i, t, !1) : a != null && In(e, !!i, a, !0);
          return;
        case "textarea":
          Nu("textarea", a), Me("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Qe(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          un(e, a), hh(e, i, o, f), Fn(e);
          return;
        case "option":
          dh(e, a);
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  Qe(e, t, p, i, a, null);
              }
          return;
        case "dialog":
          Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
          break;
        case "iframe":
        case "object":
          Me("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Km.length; i++)
            Me(Km[i], e);
          break;
        case "image":
          Me("error", e), Me("load", e);
          break;
        case "details":
          Me("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Me("error", e), Me("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Qe(e, t, v, i, a, null);
              }
          return;
        default:
          if (Bi(t)) {
            for (H in a)
              a.hasOwnProperty(H) && (i = a[H], i !== void 0 && fc(
                e,
                t,
                H,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Qe(e, t, h, i, a, null));
    }
    function K0(e, t, a, i) {
      switch (Un(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, p = null, v = null, H = null;
          for (_ in a) {
            var Y = a[_];
            if (a.hasOwnProperty(_) && Y != null)
              switch (_) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = Y;
                default:
                  i.hasOwnProperty(_) || Qe(
                    e,
                    t,
                    _,
                    null,
                    i,
                    Y
                  );
              }
          }
          for (var U in i) {
            var _ = i[U];
            if (Y = a[U], i.hasOwnProperty(U) && (_ != null || Y != null))
              switch (U) {
                case "type":
                  f = _;
                  break;
                case "name":
                  o = _;
                  break;
                case "checked":
                  v = _;
                  break;
                case "defaultChecked":
                  H = _;
                  break;
                case "value":
                  d = _;
                  break;
                case "defaultValue":
                  h = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  _ !== Y && Qe(
                    e,
                    t,
                    U,
                    _,
                    i,
                    Y
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || ab || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ab = !0), !t || i || lb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), lb = !0), qu(
            e,
            d,
            h,
            p,
            v,
            H,
            f,
            o
          );
          return;
        case "select":
          _ = d = h = U = null;
          for (f in a)
            if (p = a[f], a.hasOwnProperty(f) && p != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  _ = p;
                default:
                  i.hasOwnProperty(f) || Qe(
                    e,
                    t,
                    f,
                    null,
                    i,
                    p
                  );
              }
          for (o in i)
            if (f = i[o], p = a[o], i.hasOwnProperty(o) && (f != null || p != null))
              switch (o) {
                case "value":
                  U = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== p && Qe(
                    e,
                    t,
                    o,
                    f,
                    i,
                    p
                  );
              }
          i = h, t = d, a = _, U != null ? In(e, !!t, U, !1) : !!a != !!t && (i != null ? In(e, !!t, i, !0) : In(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          _ = U = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Qe(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  U = o;
                  break;
                case "defaultValue":
                  _ = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Qe(e, t, d, o, i, f);
              }
          Ls(e, U, _);
          return;
        case "option":
          for (var P in a)
            if (U = a[P], a.hasOwnProperty(P) && U != null && !i.hasOwnProperty(P))
              switch (P) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  Qe(
                    e,
                    t,
                    P,
                    null,
                    i,
                    U
                  );
              }
          for (p in i)
            if (U = i[p], _ = a[p], i.hasOwnProperty(p) && U !== _ && (U != null || _ != null))
              switch (p) {
                case "selected":
                  e.selected = U && typeof U != "function" && typeof U != "symbol";
                  break;
                default:
                  Qe(
                    e,
                    t,
                    p,
                    U,
                    i,
                    _
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var de in a)
            U = a[de], a.hasOwnProperty(de) && U != null && !i.hasOwnProperty(de) && Qe(
              e,
              t,
              de,
              null,
              i,
              U
            );
          for (v in i)
            if (U = i[v], _ = a[v], i.hasOwnProperty(v) && U !== _ && (U != null || _ != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Qe(
                    e,
                    t,
                    v,
                    U,
                    i,
                    _
                  );
              }
          return;
        default:
          if (Bi(t)) {
            for (var ot in a)
              U = a[ot], a.hasOwnProperty(ot) && U !== void 0 && !i.hasOwnProperty(ot) && fc(
                e,
                t,
                ot,
                void 0,
                i,
                U
              );
            for (H in i)
              U = i[H], _ = a[H], !i.hasOwnProperty(H) || U === _ || U === void 0 && _ === void 0 || fc(
                e,
                t,
                H,
                U,
                i,
                _
              );
            return;
          }
      }
      for (var Ye in a)
        U = a[Ye], a.hasOwnProperty(Ye) && U != null && !i.hasOwnProperty(Ye) && Qe(e, t, Ye, null, i, U);
      for (Y in i)
        U = i[Y], _ = a[Y], !i.hasOwnProperty(Y) || U === _ || U == null && _ == null || Qe(e, t, Y, U, i, _);
    }
    function By(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function sc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function qy(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (oe(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || vs.has(f) ? (oe(d, f), i += o + f.replace(Eu, "-$1").toLowerCase().replace(Au, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Eu, "-$1").toLowerCase().replace(Au, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = ol(i), ol(t) !== i && (a.style = sc(e)));
      }
    }
    function Cl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if ($(i, t), e === "" + i)
              return;
        }
      rt(t, e, i, f);
    }
    function Yy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      rt(t, e, i, f);
    }
    function _y(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if ($(i, a), e === "" + i)
              return;
        }
      rt(t, e, i, f);
    }
    function k0(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && ($(i, t), e === "" + i))
              return;
        }
      rt(t, e, i, f);
    }
    function Ke(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if ($(i, t), a = Vc("" + i), e === a)
              return;
        }
      rt(t, e, i, f);
    }
    function tt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Bi(t)) {
        for (var p in a)
          if (a.hasOwnProperty(p)) {
            var v = a[p];
            if (v != null) {
              if (qa.hasOwnProperty(p))
                typeof v != "function" && Ha(p, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (p) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || rt(
                      "children",
                      e.textContent,
                      v,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = ud(e, v), rt(
                      p,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(p), qy(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(p.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      p
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = c0(
                      e,
                      "class",
                      v
                    ), rt(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    i.context === Uc && t !== "svg" && t !== "math" ? f.delete(p.toLowerCase()) : f.delete(p), d = c0(
                      e,
                      p,
                      v
                    ), rt(
                      p,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (p = a[v], p != null)) {
            if (qa.hasOwnProperty(v))
              typeof p != "function" && Ha(v, p);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof p != "string" && typeof p != "number" || rt(
                    "children",
                    e.textContent,
                    p,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = ud(e, p), d !== p && (o[v] = { __html: d }));
                  continue;
                case "className":
                  Cl(
                    e,
                    v,
                    "class",
                    p,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Cl(
                    e,
                    v,
                    "tabindex",
                    p,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), qy(e, p, o);
                  continue;
                case "multiple":
                  f.delete(v), rt(
                    v,
                    e.multiple,
                    p,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), rt(
                    v,
                    e.muted,
                    p,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), rt(
                    v,
                    e.autofocus,
                    p,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), rt(
                      v,
                      d,
                      p,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(p !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  Ke(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof p == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === GS) {
                    f.delete(v.toLowerCase()), rt(
                      v,
                      "function",
                      p,
                      o
                    );
                    continue;
                  }
                  Ke(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ke(
                    e,
                    v,
                    "xlink:href",
                    p,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  _y(
                    e,
                    v,
                    "contenteditable",
                    p,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  _y(
                    e,
                    v,
                    "spellcheck",
                    p,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  _y(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Yy(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var H = d = v, Y = o;
                    if (f.delete(H), h = h.getAttribute(H), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (p === !1) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (p === !0 && h === "") break e;
                          break;
                        default:
                          if ($(p, d), h === "" + p)
                            break e;
                      }
                    rt(
                      d,
                      h,
                      p,
                      Y
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, H = d = v, Y = o, f.delete(H), h = h.getAttribute(H), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(p) || 1 > p) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(p) || 1 > p) && ($(p, d), h === "" + p))
                            break e;
                      }
                    rt(
                      d,
                      h,
                      p,
                      Y
                    );
                  }
                  continue;
                case "rowSpan":
                  k0(
                    e,
                    v,
                    "rowspan",
                    p,
                    f,
                    o
                  );
                  continue;
                case "start":
                  k0(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Cl(
                    e,
                    v,
                    "x-height",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Cl(
                    e,
                    v,
                    "xlink:actuate",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Cl(
                    e,
                    v,
                    "xlink:arcrole",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Cl(
                    e,
                    v,
                    "xlink:role",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Cl(
                    e,
                    v,
                    "xlink:show",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Cl(
                    e,
                    v,
                    "xlink:title",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Cl(
                    e,
                    v,
                    "xlink:type",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Cl(
                    e,
                    v,
                    "xml:base",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Cl(
                    e,
                    v,
                    "xml:lang",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Cl(
                    e,
                    v,
                    "xml:space",
                    p,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  p !== "" || Qp[v] || (Qp[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), Yy(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = ks(v), d = !1, i.context === Uc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (H = v.toLowerCase(), H = Sc.hasOwnProperty(
                      H
                    ) && Sc[H] || null, H !== null && H !== v && (d = !0, f.delete(H)), f.delete(h));
                    e: if (H = e, Y = h, h = p, Oi(Y))
                      if (H.hasAttribute(Y))
                        H = H.getAttribute(
                          Y
                        ), $(
                          h,
                          Y
                        ), h = H === "" + h ? h : H;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (H = Y.toLowerCase().slice(0, 5), H !== "data-" && H !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || rt(
                      v,
                      h,
                      p,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ui(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function xe(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function He(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ke(e) {
      switch (e) {
        case qo:
          return ih;
        case gs:
          return Zp;
        default:
          return Uc;
      }
    }
    function kl(e, t) {
      if (e === Uc)
        switch (t) {
          case "svg":
            return ih;
          case "math":
            return Zp;
          default:
            return Uc;
        }
      return e === ih && t === "foreignObject" ? Uc : e;
    }
    function xn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === Ag ? !1 : (Ag = e, !0) : (Ag = null, !1);
    }
    function jy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function yu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Dt(e, t, a, i) {
      K0(e, t, a, i), e[Il] = i;
    }
    function mu(e) {
      Ni(e, "");
    }
    function rc(e, t, a) {
      e.nodeValue = a;
    }
    function Hn(e) {
      return e === "head";
    }
    function Ca(e, t) {
      e.removeChild(t);
    }
    function mo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function po(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Lp) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & XS && So(d.documentElement), a & QS && So(d.body), a & wS)
                for (a = d.head, So(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, p = d.nodeName;
                  d[Ho] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), mc(t);
              return;
            }
            o--;
          } else
            a === wp || a === Mc || a === km ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      mc(t);
    }
    function $l(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Gy(e) {
      e.nodeValue = "";
    }
    function Vy(e, t) {
      t = t[LS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function id(e, t) {
      e.nodeValue = t;
    }
    function vo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            vo(a), Bc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function ii(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ho])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          $(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = sl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function fl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = sl(e.nextSibling), e === null)) return null;
      return e;
    }
    function Cn(e) {
      return e.data === km || e.data === Mc && e.ownerDocument.readyState === cb;
    }
    function go(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Mc || a.readyState === cb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function sl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === wp || t === km || t === Mc || t === Sg || t === ib)
            break;
          if (t === Lp) return null;
        }
      }
      return e;
    }
    function cd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[By(f.name)] = f.name.toLowerCase() === "style" ? sc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function od(e, t, a) {
      return a === null || a[VS] !== !0 ? (e.nodeValue === t ? e = null : (t = ol(t), e = ol(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Xy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Lp) {
            if (t === 0)
              return sl(e.nextSibling);
            t--;
          } else
            a !== wp && a !== km && a !== Mc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function bo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === wp || a === km || a === Mc) {
            if (t === 0) return e;
            t--;
          } else a === Lp && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Qy(e) {
      mc(e);
    }
    function fa(e) {
      mc(e);
    }
    function wy(e, t, a, i, o) {
      switch (o && Ks(e, i.ancestorInfo), t = He(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function sa(e, t, a, i) {
      if (!a[mi] && la(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Rt(a, e, t), a[El] = i, a[Il] = t;
    }
    function So(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Bc(e);
    }
    function Ff(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function $0(e, t, a) {
      var i = ch;
      if (i && typeof t == "string" && t) {
        var o = aa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), hb.has(o) || (hb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Rt(t, "link", e), kt(t), i.head.appendChild(t)));
      }
    }
    function pu(e, t, a, i) {
      var o = (o = Bn.current) ? Ff(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = ci(a.href), t = nn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = ci(a.href);
            var f = nn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: _s, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Nn(e)
            )) && !f._p && (d.instance = f, d.state.loading = $m | Kn), !kn.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              kn.set(e, h), f || W0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + dc(t) + `
  + ` + dc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + dc(t) + `
  + ` + dc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = hc(a), t = nn(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function dc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : bu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : bu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : bu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function ci(e) {
      return 'href="' + aa(e) + '"';
    }
    function Nn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ly(e) {
      return Ae({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function W0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = $m : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= $m;
      }), t.addEventListener("error", function() {
        return i.loading |= rb;
      }), Rt(t, "link", a), kt(t), e.head.appendChild(t));
    }
    function hc(e) {
      return '[src="' + aa(e) + '"]';
    }
    function yc(e) {
      return "script[async]" + e;
    }
    function fd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + aa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, kt(i), i;
            var o = Ae({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), kt(i), Rt(i, "style", o), sd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = ci(a.href);
            var f = e.querySelector(
              Nn(o)
            );
            if (f)
              return t.state.loading |= Kn, t.instance = f, kt(f), f;
            i = Ly(a), (o = kn.get(o)) && Zy(i, o), f = (e.ownerDocument || e).createElement("link"), kt(f);
            var d = f;
            return d._p = new Promise(function(h, p) {
              d.onload = h, d.onerror = p;
            }), Rt(f, "link", i), t.state.loading |= Kn, sd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = hc(a.src), (o = e.querySelector(
              yc(f)
            )) ? (t.instance = o, kt(o), o) : (i = a, (o = kn.get(f)) && (i = Ae({}, a), Jy(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), kt(o), Rt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Kn) === _s && (i = t.instance, t.state.loading |= Kn, sd(i, a.precedence, e));
      return t.instance;
    }
    function sd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Zy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Jy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Ky(e, t, a) {
      if (Jp === null) {
        var i = /* @__PURE__ */ new Map(), o = Jp = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Jp, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ho] || f[El] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== qo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function ky(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function To(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === ih || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = xe(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function If(e) {
      return !(e.type === "stylesheet" && (e.state.loading & db) === _s);
    }
    function F0() {
    }
    function I0(e, t, a) {
      if (Wm === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Wm;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Kn) === _s) {
        if (t.instance === null) {
          var o = ci(a.href), f = e.querySelector(
            Nn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Pf.bind(i), e.then(i, i)), t.state.loading |= Kn, t.instance = f, kt(f);
            return;
          }
          f = e.ownerDocument || e, a = Ly(a), (o = kn.get(o)) && Zy(a, o), f = f.createElement("link"), kt(f);
          var d = f;
          d._p = new Promise(function(h, p) {
            d.onload = h, d.onerror = p;
          }), Rt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & db) === _s && (i.count++, t = Pf.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function P0() {
      if (Wm === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Wm;
      return e.stylesheets && e.count === 0 && rd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && rd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function Pf() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          rd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function rd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Kp = /* @__PURE__ */ new Map(), t.forEach(ep, e), Kp = null, Pf.call(e));
    }
    function ep(e, t) {
      if (!(t.state.loading & Kn)) {
        var a = Kp.get(e);
        if (a) var i = a.get(Rg);
        else {
          a = /* @__PURE__ */ new Map(), Kp.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Rg, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Rg, o), a.set(d, o), this.count++, i = Pf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Kn;
      }
    }
    function dd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ys, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = sh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sh(0), this.hiddenUpdates = sh(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function $y(e, t, a, i, o, f, d, h, p, v, H, Y) {
      return e = new dd(
        e,
        t,
        a,
        d,
        h,
        p,
        v,
        Y
      ), t = pS, f === !0 && (t |= ea | zu), Mt && (t |= Bl), f = Ee(3, null, null, t), e.current = f, f.stateNode = e, t = vf(), wi(t), e.pooledCache = t, wi(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Xl(f), e;
    }
    function Wy(e) {
      return e ? (e = Yo, e) : Yo;
    }
    function $e(e, t, a, i, o, f) {
      if (rl && typeof rl.onScheduleFiberRoot == "function")
        try {
          rl.onScheduleFiberRoot(hi, i, a);
        } catch (d) {
          Fl || (Fl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      W !== null && typeof W.markRenderScheduled == "function" && W.markRenderScheduled(t), o = Wy(o), i.context === null ? i.context = o : i.pendingContext = o, Pl && da !== null && !vb && (vb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        ne(da) || "Unknown"
      )), i = dn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Za(e, i, t), a !== null && (At(a, e, t), Ju(a, e, t));
    }
    function hd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Fy(e, t) {
      hd(e, t), (e = e.alternate) && hd(e, t);
    }
    function Iy(e) {
      if (e.tag === 13) {
        var t = Vl(e, 67108864);
        t !== null && At(t, e, 67108864), Fy(e, 67108864);
      }
    }
    function gv() {
      return da;
    }
    function bv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = uv(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Sv(e, t, a, i) {
      var o = N.T;
      N.T = null;
      var f = re.p;
      try {
        re.p = dl, oi(e, t, a, i);
      } finally {
        re.p = f, N.T = o;
      }
    }
    function yd(e, t, a, i) {
      var o = N.T;
      N.T = null;
      var f = re.p;
      try {
        re.p = en, oi(e, t, a, i);
      } finally {
        re.p = f, N.T = o;
      }
    }
    function oi(e, t, a, i) {
      if ($p) {
        var o = es(i);
        if (o === null)
          xl(
            e,
            t,
            i,
            Wp,
            a
          ), fi(e, i);
        else if (ts(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (fi(e, i), t & 4 && -1 < kS.indexOf(e)) {
          for (; o !== null; ) {
            var f = la(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ri(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var p = 1 << 31 - Tl(d);
                        h.entanglements[1] |= p, d &= ~p;
                      }
                      xa(f), (We & (pa | Mu)) === tn && (Np = qn() + $1, oc(0));
                    }
                  }
                  break;
                case 13:
                  h = Vl(f, 2), h !== null && At(h, f, 2), ic(), Fy(f, 2);
              }
            if (f = es(i), f === null && xl(
              e,
              t,
              i,
              Wp,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          xl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function es(e) {
      return e = qi(e), Eo(e);
    }
    function Eo(e) {
      if (Wp = null, e = Wn(e), e !== null) {
        var t = et(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = ga(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Wp = e, null;
    }
    function md(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return dl;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return en;
        case "message":
          switch (di()) {
            case Sd:
              return dl;
            case ss:
              return en;
            case Mo:
            case Rv:
              return Tu;
            case rs:
              return zd;
            default:
              return Tu;
          }
        default:
          return Tu;
      }
    }
    function fi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Jo = null;
          break;
        case "dragenter":
        case "dragleave":
          Ko = null;
          break;
        case "mouseover":
        case "mouseout":
          ko = null;
          break;
        case "pointerover":
        case "pointerout":
          Im.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pm.delete(t.pointerId);
      }
    }
    function Wl(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = la(t), t !== null && Iy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ts(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Jo = Wl(
            Jo,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Ko = Wl(
            Ko,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ko = Wl(
            ko,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Im.set(
            f,
            Wl(
              Im.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Pm.set(
            f,
            Wl(
              Pm.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function tp(e) {
      var t = Wn(e.target);
      if (t !== null) {
        var a = et(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = ga(a), t !== null) {
              e.blockedOn = t, cv(e.priority, function() {
                if (a.tag === 13) {
                  var i = Kl(a);
                  i = Dl(i);
                  var o = Vl(
                    a,
                    i
                  );
                  o !== null && At(o, a, i), Fy(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ls(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = es(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = la(a), t !== null && Iy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Py(e, t, a) {
      ls(e) && a.delete(t);
    }
    function lp() {
      Dg = !1, Jo !== null && ls(Jo) && (Jo = null), Ko !== null && ls(Ko) && (Ko = null), ko !== null && ls(ko) && (ko = null), Im.forEach(Py), Pm.forEach(Py);
    }
    function as(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Dg || (Dg = !0, Ot.unstable_scheduleCallback(
        Ot.unstable_NormalPriority,
        lp
      )));
    }
    function ap(e) {
      Fp !== e && (Fp = e, Ot.unstable_scheduleCallback(
        Ot.unstable_NormalPriority,
        function() {
          Fp === e && (Fp = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Eo(i || a) === null)
                continue;
              break;
            }
            var f = la(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), $i(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function mc(e) {
      function t(p) {
        return as(p, e);
      }
      Jo !== null && as(Jo, e), Ko !== null && as(Ko, e), ko !== null && as(ko, e), Im.forEach(t), Pm.forEach(t);
      for (var a = 0; a < $o.length; a++) {
        var i = $o[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < $o.length && (a = $o[0], a.blockedOn === null); )
        tp(a), a.blockedOn === null && $o.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Il] || null;
          if (typeof f == "function")
            d || ap(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Il] || null)
                h = d.formAction;
              else if (Eo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), ap(a);
          }
        }
    }
    function pd(e) {
      this._internalRoot = e;
    }
    function ns(e) {
      this._internalRoot = e;
    }
    function np(e) {
      e[mi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ot = Vb(), us = Uu, Tv = Gb, Ae = Object.assign, is = Symbol.for("react.element"), si = Symbol.for("react.transitional.element"), pc = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), Ao = Symbol.for("react.strict_mode"), zo = Symbol.for("react.profiler"), em = Symbol.for("react.provider"), vd = Symbol.for("react.consumer"), Na = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), Ro = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), cs = Symbol.for("react.memo"), ra = Symbol.for("react.lazy"), tm = Symbol.for("react.activity"), up = Symbol.for("react.memo_cache_sentinel"), lm = Symbol.iterator, gd = Symbol.for("react.client.reference"), ye = Array.isArray, N = us.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Tv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ev = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), os = [], fs = [], Ba = -1, gu = bt(null), Do = bt(null), Bn = bt(null), Oo = bt(null), bu = Object.prototype.hasOwnProperty, bd = Ot.unstable_scheduleCallback, Av = Ot.unstable_cancelCallback, ip = Ot.unstable_shouldYield, zv = Ot.unstable_requestPaint, qn = Ot.unstable_now, di = Ot.unstable_getCurrentPriorityLevel, Sd = Ot.unstable_ImmediatePriority, ss = Ot.unstable_UserBlockingPriority, Mo = Ot.unstable_NormalPriority, Rv = Ot.unstable_LowPriority, rs = Ot.unstable_IdlePriority, Dv = Ot.log, Pa = Ot.unstable_setDisableYieldValue, hi = null, rl = null, W = null, Fl = !1, Mt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Tl = Math.clz32 ? Math.clz32 : oh, Td = Math.log, Su = Math.LN2, Ed = 256, Ad = 4194304, dl = 2, en = 8, Tu = 32, zd = 268435456, yi = Math.random().toString(36).slice(2), El = "__reactFiber$" + yi, Il = "__reactProps$" + yi, mi = "__reactContainer$" + yi, am = "__reactEvents$" + yi, cp = "__reactListeners$" + yi, Uo = "__reactHandles$" + yi, xo = "__reactResources$" + yi, Ho = "__reactMarker$" + yi, op = /* @__PURE__ */ new Set(), qa = {}, vc = {}, fp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Rd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Dd = {}, Od = {}, pi = 0, nm, um, sp, im, Co, rp, dp;
    Vs.__reactDisabledLog = !0;
    var cm, ds, No = !1, hs = new (typeof WeakMap == "function" ? WeakMap : Map)(), da = null, Pl = !1, Ov = /[\n"\\]/g, om = !1, fm = !1, sm = !1, rm = !1, Md = !1, dm = !1, ys = ["value", "defaultValue"], hp = !1, yp = /["'&<>\n\t]|^\s|\s$/, hm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Ud = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), xd = Ud.concat(["button"]), ym = "dd dt li option optgroup p rp rt".split(" "), mm = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Bo = {}, Yn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Eu = /([A-Z])/g, Au = /^ms-/, ms = /^(?:webkit|moz|o)[A-Z]/, ps = /^-ms-/, vi = /-(.)/g, mp = /;\s*$/, gc = {}, bc = {}, pp = !1, pm = !1, vs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), gs = "http://www.w3.org/1998/Math/MathML", qo = "http://www.w3.org/2000/svg", Hd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Sc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, _n = {}, gm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Cd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), bm = !1, Nl = {}, bs = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, m = !1, g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = !1;
    if (g)
      try {
        var G = {};
        Object.defineProperty(G, "passive", {
          get: function() {
            M = !0;
          }
        }), window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
      } catch {
        M = !1;
      }
    var X = null, x = null, C = null, ue = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ie = ul(ue), we = Ae({}, ue, { view: 0, detail: 0 }), R = ul(we), E, O, V, F = Ae({}, we, {
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
      getModifierState: Fs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== V && (V && e.type === "mousemove" ? (E = e.screenX - V.screenX, O = e.screenY - V.screenY) : O = E = 0, V = e), E);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : O;
      }
    }), Re = ul(F), ae = Ae({}, F, { dataTransfer: 0 }), se = ul(ae), el = Ae({}, we, { relatedTarget: 0 }), _e = ul(el), gi = Ae({}, ue, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mv = ul(gi), Zb = Ae({}, ue, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Jb = ul(Zb), Kb = Ae({}, ue, { data: 0 }), xg = ul(
      Kb
    ), kb = xg, $b = {
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
    }, Wb = {
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
    }, Fb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Ib = Ae({}, we, {
      key: function(e) {
        if (e.key) {
          var t = $b[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Xc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fs,
      charCode: function(e) {
        return e.type === "keypress" ? Xc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Pb = ul(Ib), eS = Ae({}, F, {
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
    }), Hg = ul(eS), tS = Ae({}, we, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fs
    }), lS = ul(tS), aS = Ae({}, ue, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nS = ul(aS), uS = Ae({}, F, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), iS = ul(uS), cS = Ae({}, ue, {
      newState: 0,
      oldState: 0
    }), oS = ul(cS), fS = [9, 13, 27, 32], Cg = 229, Uv = g && "CompositionEvent" in window, Sm = null;
    g && "documentMode" in document && (Sm = document.documentMode);
    var sS = g && "TextEvent" in window && !Sm, Ng = g && (!Uv || Sm && 8 < Sm && 11 >= Sm), Bg = 32, qg = String.fromCharCode(Bg), Yg = !1, Nd = !1, rS = {
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
    }, Tm = null, Em = null, _g = !1;
    g && (_g = Sh("input") && (!document.documentMode || 9 < document.documentMode));
    var ha = typeof Object.is == "function" ? Object.is : yv, dS = g && "documentMode" in document && 11 >= document.documentMode, Bd = null, xv = null, Am = null, Hv = !1, qd = {
      animationend: tu("Animation", "AnimationEnd"),
      animationiteration: tu("Animation", "AnimationIteration"),
      animationstart: tu("Animation", "AnimationStart"),
      transitionrun: tu("Transition", "TransitionRun"),
      transitionstart: tu("Transition", "TransitionStart"),
      transitioncancel: tu("Transition", "TransitionCancel"),
      transitionend: tu("Transition", "TransitionEnd")
    }, Cv = {}, jg = {};
    g && (jg = document.createElement("div").style, "AnimationEvent" in window || (delete qd.animationend.animation, delete qd.animationiteration.animation, delete qd.animationstart.animation), "TransitionEvent" in window || delete qd.transitionend.transition);
    var Gg = ji("animationend"), Vg = ji("animationiteration"), Xg = ji("animationstart"), hS = ji("transitionrun"), yS = ji("transitionstart"), mS = ji("transitioncancel"), Qg = ji("transitionend"), wg = /* @__PURE__ */ new Map(), Nv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Nv.push("scrollEnd");
    var Bv = /* @__PURE__ */ new WeakMap(), qv = 1, Ss = 2, jn = [], Yd = 0, Yv = 0, Yo = {};
    Object.freeze(Yo);
    var Gn = null, _d = null, dt = 0, pS = 1, Bl = 2, ea = 8, zu = 16, Lg = 64, Zg = !1;
    try {
      var Jg = Object.preventExtensions({});
    } catch {
      Zg = !0;
    }
    var jd = [], Gd = 0, vp = null, gp = 0, Vn = [], Xn = 0, Ts = null, Tc = 1, Ec = "", ya = null, Bt = null, Le = !1, Ac = !1, Qn = null, Es = null, bi = !1, _v = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Kg = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var vS = performance, kg = function() {
        return vS.now();
      };
    else {
      var gS = Date;
      kg = function() {
        return gS.now();
      };
    }
    var jv = bt(null), Gv = bt(null), $g = {}, bp = null, Vd = null, Xd = !1, bS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, SS = Ot.unstable_scheduleCallback, TS = Ot.unstable_NormalPriority, hl = {
      $$typeof: Na,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Qd = Ot.unstable_now, Wg = -0, Sp = -0, Ya = -1.1, As = -0, Tp = !1, Ep = !1, zm = null, Vv = 0, zs = 0, wd = null, Fg = N.S;
    N.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && O0(e, t), Fg !== null && Fg(e, t);
    };
    var Rs = bt(null), Ru = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Rm = [], Dm = [], Om = [], Mm = [], Um = [], xm = [], Ds = /* @__PURE__ */ new Set();
    Ru.recordUnsafeLifecycleWarnings = function(e, t) {
      Ds.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Rm.push(e), e.mode & ea && typeof t.UNSAFE_componentWillMount == "function" && Dm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Om.push(e), e.mode & ea && typeof t.UNSAFE_componentWillReceiveProps == "function" && Mm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Um.push(e), e.mode & ea && typeof t.UNSAFE_componentWillUpdate == "function" && xm.push(e));
    }, Ru.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Rm.length && (Rm.forEach(function(h) {
        e.add(
          ne(h) || "Component"
        ), Ds.add(h.type);
      }), Rm = []);
      var t = /* @__PURE__ */ new Set();
      0 < Dm.length && (Dm.forEach(function(h) {
        t.add(
          ne(h) || "Component"
        ), Ds.add(h.type);
      }), Dm = []);
      var a = /* @__PURE__ */ new Set();
      0 < Om.length && (Om.forEach(function(h) {
        a.add(
          ne(h) || "Component"
        ), Ds.add(h.type);
      }), Om = []);
      var i = /* @__PURE__ */ new Set();
      0 < Mm.length && (Mm.forEach(
        function(h) {
          i.add(
            ne(h) || "Component"
          ), Ds.add(h.type);
        }
      ), Mm = []);
      var o = /* @__PURE__ */ new Set();
      0 < Um.length && (Um.forEach(function(h) {
        o.add(
          ne(h) || "Component"
        ), Ds.add(h.type);
      }), Um = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < xm.length && (xm.forEach(function(h) {
        f.add(
          ne(h) || "Component"
        ), Ds.add(h.type);
      }), xm = []), 0 < t.size) {
        var d = lt(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = lt(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = lt(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = lt(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = lt(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = lt(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Ap = /* @__PURE__ */ new Map(), Ig = /* @__PURE__ */ new Set();
    Ru.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ea && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Ig.has(e.type) && (i = Ap.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ap.set(a, i)), i.push(e));
    }, Ru.flushLegacyContextWarning = function() {
      Ap.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(ne(o) || "Component"), Ig.add(o.type);
          });
          var i = lt(a);
          I(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ru.discardPendingWarnings = function() {
      Rm = [], Dm = [], Om = [], Mm = [], Um = [], xm = [], Ap = /* @__PURE__ */ new Map();
    };
    var Hm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Pg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), zp = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Xv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Cm = null, Rp = !1, wn = 0, Ln = 1, ma = 2, ql = 4, yl = 8, e1 = 0, t1 = 1, l1 = 2, Qv = 3, _o = !1, a1 = !1, wv = null, Lv = !1, Ld = bt(null), Dp = bt(0), Zd, n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set(), Zv = /* @__PURE__ */ new Set(), i1 = /* @__PURE__ */ new Set(), jo = 0, me = null, nt = null, tl = null, Op = !1, Jd = !1, Os = !1, Mp = 0, Nm = 0, zc = null, ES = 0, AS = 25, q = null, Zn = null, Rc = -1, Bm = !1, Up = {
      readContext: it,
      use: yn,
      useCallback: mt,
      useContext: mt,
      useEffect: mt,
      useImperativeHandle: mt,
      useLayoutEffect: mt,
      useInsertionEffect: mt,
      useMemo: mt,
      useReducer: mt,
      useRef: mt,
      useState: mt,
      useDebugValue: mt,
      useDeferredValue: mt,
      useTransition: mt,
      useSyncExternalStore: mt,
      useId: mt,
      useHostTransitionStatus: mt,
      useFormState: mt,
      useActionState: mt,
      useOptimistic: mt,
      useMemoCache: mt,
      useCacheRefresh: mt
    }, Jv = null, c1 = null, Kv = null, o1 = null, Si = null, Du = null, xp = null;
    Jv = {
      readContext: function(e) {
        return it(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return q = "useCallback", ze(), Aa(t), Df(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ze(), it(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", ze(), Aa(t), rr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ze(), Aa(a), hr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", ze(), Aa(t), Oa(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ze(), Aa(t), dr(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ze(), Aa(t);
        var a = N.H;
        N.H = Si;
        try {
          return yr(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ze();
        var i = N.H;
        N.H = Si;
        try {
          return je(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", ze(), Rf(e);
      },
      useState: function(e) {
        q = "useState", ze();
        var t = N.H;
        N.H = Si;
        try {
          return iu(e);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ze();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ze(), mr(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ze(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ze(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ze(), bn();
      },
      useFormState: function(e, t) {
        return q = "useFormState", ze(), Kc(), Pc(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", ze(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", ze(), ka(e);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", ze(), Wi();
      }
    }, c1 = {
      readContext: function(e) {
        return it(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return q = "useCallback", w(), Df(e, t);
      },
      useContext: function(e) {
        return q = "useContext", w(), it(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", w(), rr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", w(), hr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", w(), Oa(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", w(), dr(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", w();
        var a = N.H;
        N.H = Si;
        try {
          return yr(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", w();
        var i = N.H;
        N.H = Si;
        try {
          return je(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", w(), Rf(e);
      },
      useState: function(e) {
        q = "useState", w();
        var t = N.H;
        N.H = Si;
        try {
          return iu(e);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", w();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", w(), mr(e, t);
      },
      useTransition: function() {
        return q = "useTransition", w(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", w(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", w(), bn();
      },
      useActionState: function(e, t) {
        return q = "useActionState", w(), Pc(e, t);
      },
      useFormState: function(e, t) {
        return q = "useFormState", w(), Kc(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", w(), ka(e);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", w(), Wi();
      }
    }, Kv = {
      readContext: function(e) {
        return it(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return q = "useCallback", w(), ki(e, t);
      },
      useContext: function(e) {
        return q = "useContext", w(), it(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", w(), Xt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", w(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", w(), Xt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", w(), Xt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", w();
        var a = N.H;
        N.H = Du;
        try {
          return Fu(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", w();
        var i = N.H;
        N.H = Du;
        try {
          return Ra(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", w(), qe().memoizedState;
      },
      useState: function() {
        q = "useState", w();
        var e = N.H;
        N.H = Du;
        try {
          return Ra(Xe);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", w();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", w(), Of(e, t);
      },
      useTransition: function() {
        return q = "useTransition", w(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", w(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", w(), qe().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", w(), Kc(), sr(e);
      },
      useActionState: function(e) {
        return q = "useActionState", w(), sr(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", w(), cu(e, t);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", w(), qe().memoizedState;
      }
    }, o1 = {
      readContext: function(e) {
        return it(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return q = "useCallback", w(), ki(e, t);
      },
      useContext: function(e) {
        return q = "useContext", w(), it(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", w(), Xt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", w(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", w(), Xt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", w(), Xt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", w();
        var a = N.H;
        N.H = xp;
        try {
          return Fu(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", w();
        var i = N.H;
        N.H = xp;
        try {
          return Ki(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", w(), qe().memoizedState;
      },
      useState: function() {
        q = "useState", w();
        var e = N.H;
        N.H = xp;
        try {
          return Ki(Xe);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", w();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", w(), pr(e, t);
      },
      useTransition: function() {
        return q = "useTransition", w(), br();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", w(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", w(), qe().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", w(), Kc(), eo(e);
      },
      useActionState: function(e) {
        return q = "useActionState", w(), eo(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", w(), fr(e, t);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", w(), qe().memoizedState;
      }
    }, Si = {
      readContext: function(e) {
        return Yt(), it(e);
      },
      use: function(e) {
        return Z(), yn(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", Z(), ze(), Df(e, t);
      },
      useContext: function(e) {
        return q = "useContext", Z(), ze(), it(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", Z(), ze(), rr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", Z(), ze(), hr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", Z(), ze(), Oa(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", Z(), ze(), dr(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", Z(), ze();
        var a = N.H;
        N.H = Si;
        try {
          return yr(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", Z(), ze();
        var i = N.H;
        N.H = Si;
        try {
          return je(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", Z(), ze(), Rf(e);
      },
      useState: function(e) {
        q = "useState", Z(), ze();
        var t = N.H;
        N.H = Si;
        try {
          return iu(e);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", Z(), ze();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", Z(), ze(), mr(e, t);
      },
      useTransition: function() {
        return q = "useTransition", Z(), ze(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", Z(), ze(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", Z(), ze(), bn();
      },
      useFormState: function(e, t) {
        return q = "useFormState", Z(), ze(), Pc(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", Z(), ze(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", Z(), ze(), ka(e);
      },
      useMemoCache: function(e) {
        return Z(), Ht(e);
      },
      useHostTransitionStatus: Ll,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", ze(), Wi();
      }
    }, Du = {
      readContext: function(e) {
        return Yt(), it(e);
      },
      use: function(e) {
        return Z(), yn(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", Z(), w(), ki(e, t);
      },
      useContext: function(e) {
        return q = "useContext", Z(), w(), it(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", Z(), w(), Xt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", Z(), w(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", Z(), w(), Xt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", Z(), w(), Xt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", Z(), w();
        var a = N.H;
        N.H = Du;
        try {
          return Fu(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", Z(), w();
        var i = N.H;
        N.H = Du;
        try {
          return Ra(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", Z(), w(), qe().memoizedState;
      },
      useState: function() {
        q = "useState", Z(), w();
        var e = N.H;
        N.H = Du;
        try {
          return Ra(Xe);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", Z(), w();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", Z(), w(), Of(e, t);
      },
      useTransition: function() {
        return q = "useTransition", Z(), w(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", Z(), w(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", Z(), w(), qe().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", Z(), w(), sr(e);
      },
      useActionState: function(e) {
        return q = "useActionState", Z(), w(), sr(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", Z(), w(), cu(e, t);
      },
      useMemoCache: function(e) {
        return Z(), Ht(e);
      },
      useHostTransitionStatus: Ll,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", w(), qe().memoizedState;
      }
    }, xp = {
      readContext: function(e) {
        return Yt(), it(e);
      },
      use: function(e) {
        return Z(), yn(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", Z(), w(), ki(e, t);
      },
      useContext: function(e) {
        return q = "useContext", Z(), w(), it(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", Z(), w(), Xt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", Z(), w(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", Z(), w(), Xt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", Z(), w(), Xt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", Z(), w();
        var a = N.H;
        N.H = Du;
        try {
          return Fu(e, t);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", Z(), w();
        var i = N.H;
        N.H = Du;
        try {
          return Ki(e, t, a);
        } finally {
          N.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", Z(), w(), qe().memoizedState;
      },
      useState: function() {
        q = "useState", Z(), w();
        var e = N.H;
        N.H = Du;
        try {
          return Ki(Xe);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", Z(), w();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", Z(), w(), pr(e, t);
      },
      useTransition: function() {
        return q = "useTransition", Z(), w(), br();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", Z(), w(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", Z(), w(), qe().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", Z(), w(), eo(e);
      },
      useActionState: function(e) {
        return q = "useActionState", Z(), w(), eo(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", Z(), w(), fr(e, t);
      },
      useMemoCache: function(e) {
        return Z(), Ht(e);
      },
      useHostTransitionStatus: Ll,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", w(), qe().memoizedState;
      }
    };
    var f1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = Pl;
        Pl = !0;
        try {
          return e(t, a);
        } finally {
          Pl = i;
        }
      }
    }, kv = f1["react-stack-bottom-frame"].bind(f1), s1 = {
      "react-stack-bottom-frame": function(e) {
        var t = Pl;
        Pl = !0;
        try {
          return e.render();
        } finally {
          Pl = t;
        }
      }
    }, r1 = s1["react-stack-bottom-frame"].bind(s1), d1 = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          fe(e, e.return, a);
        }
      }
    }, $v = d1["react-stack-bottom-frame"].bind(d1), h1 = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          fe(e, e.return, f);
        }
      }
    }, y1 = h1["react-stack-bottom-frame"].bind(h1), m1 = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, zS = m1["react-stack-bottom-frame"].bind(m1), p1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          fe(e, t, i);
        }
      }
    }, v1 = p1["react-stack-bottom-frame"].bind(p1), g1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, RS = g1["react-stack-bottom-frame"].bind(g1), b1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          fe(e, t, i);
        }
      }
    }, DS = b1["react-stack-bottom-frame"].bind(b1), S1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Go = S1["react-stack-bottom-frame"].bind(S1), Kd = null, qm = 0, De = null, Wv, T1 = Wv = !1, E1 = {}, A1 = {}, z1 = {};
    Ct = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = ne(e), o = i || "null";
        if (!E1[o]) {
          E1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = ne(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = ne(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), I(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var kd = Hf(!0), R1 = Hf(!1), Jn = bt(null), Ti = null, $d = 1, Ym = 2, ml = bt(0), D1 = {}, O1 = /* @__PURE__ */ new Set(), M1 = /* @__PURE__ */ new Set(), U1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), C1 = /* @__PURE__ */ new Set(), N1 = /* @__PURE__ */ new Set(), B1 = /* @__PURE__ */ new Set(), q1 = /* @__PURE__ */ new Set(), Y1 = /* @__PURE__ */ new Set();
    Object.freeze(D1);
    var Fv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = dn(i);
        o.payload = t, a != null && (Ih(a), o.callback = a), t = Za(e, o, i), t !== null && (At(t, e, i), Ju(t, e, i)), zi(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = dn(i);
        o.tag = t1, o.payload = t, a != null && (Ih(a), o.callback = a), t = Za(e, o, i), t !== null && (At(t, e, i), Ju(t, e, i)), zi(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Kl(e), i = dn(a);
        i.tag = l1, t != null && (Ih(t), i.callback = t), t = Za(e, i, a), t !== null && (At(t, e, a), Ju(t, e, a)), W !== null && typeof W.markForceUpdateScheduled == "function" && W.markForceUpdateScheduled(e, a);
      }
    }, Iv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Wd = null, Pv = null, _1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Al = !1, j1 = {}, G1 = {}, V1 = {}, X1 = {}, Fd = !1, Q1 = {}, eg = {}, tg = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, w1 = !1, L1 = null;
    L1 = /* @__PURE__ */ new Set();
    var Dc = !1, Lt = !1, lg = !1, Z1 = typeof WeakSet == "function" ? WeakSet : Set, zl = null, Id = null, Pd = null, ll = null, _a = !1, Ou = null, _m = 8192, OS = {
      getCacheForType: function(e) {
        var t = it(hl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return da;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var jm = Symbol.for;
      jm("selector.component"), jm("selector.has_pseudo_class"), jm("selector.role"), jm("selector.test_id"), jm("selector.text");
    }
    var MS = [], US = typeof WeakMap == "function" ? WeakMap : Map, tn = 0, pa = 2, Mu = 4, Oc = 0, Gm = 1, eh = 2, ag = 3, Ms = 4, Hp = 6, J1 = 5, We = tn, ct = null, Ce = null, Ne = 0, ja = 0, Vm = 1, Us = 2, Xm = 3, K1 = 4, ng = 5, th = 6, Qm = 7, ug = 8, xs = 9, Pe = ja, ln = null, Vo = !1, lh = !1, ig = !1, Ei = 0, qt = Oc, Xo = 0, Qo = 0, cg = 0, an = 0, Hs = 0, wm = null, va = null, Cp = !1, og = 0, k1 = 300, Np = 1 / 0, $1 = 500, Lm = null, wo = null, xS = 0, HS = 1, CS = 2, Cs = 0, W1 = 1, F1 = 2, I1 = 3, NS = 4, fg = 5, Yl = 0, Lo = null, ah = null, Zo = 0, sg = 0, rg = null, P1 = null, BS = 50, Zm = 0, dg = null, hg = !1, Bp = !1, qS = 50, Ns = 0, Jm = null, nh = !1, qp = null, eb = !1, tb = /* @__PURE__ */ new Set(), YS = {}, Yp = null, uh = null, yg = !1, mg = !1, _p = !1, pg = !1, Bs = 0, vg = {};
    (function() {
      for (var e = 0; e < Nv.length; e++) {
        var t = Nv[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Va(a, "on" + t);
      }
      Va(Gg, "onAnimationEnd"), Va(Vg, "onAnimationIteration"), Va(Xg, "onAnimationStart"), Va("dblclick", "onDoubleClick"), Va("focusin", "onFocus"), Va("focusout", "onBlur"), Va(hS, "onTransitionRun"), Va(yS, "onTransitionStart"), Va(mS, "onTransitionCancel"), Va(Qg, "onTransitionEnd");
    })(), Di("onMouseEnter", ["mouseout", "mouseover"]), Di("onMouseLeave", ["mouseout", "mouseover"]), Di("onPointerEnter", ["pointerout", "pointerover"]), Di("onPointerLeave", ["pointerout", "pointerover"]), Cu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Cu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Cu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Cu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Cu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Cu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Km = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), gg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Km)
    ), jp = "_reactListening" + Math.random().toString(36).slice(2), lb = !1, ab = !1, Gp = !1, nb = !1, Vp = !1, Xp = !1, ub = !1, Qp = {}, _S = /\r\n?/g, jS = /\u0000|\uFFFD/g, qs = "http://www.w3.org/1999/xlink", bg = "http://www.w3.org/XML/1998/namespace", GS = "javascript:throw new Error('React form unexpectedly submitted.')", VS = "suppressHydrationWarning", wp = "$", Lp = "/$", Mc = "$?", km = "$!", XS = 1, QS = 2, wS = 4, Sg = "F!", ib = "F", cb = "complete", LS = "style", Uc = 0, ih = 1, Zp = 2, Tg = null, Eg = null, ob = { dialog: !0, webview: !0 }, Ag = null, fb = typeof setTimeout == "function" ? setTimeout : void 0, ZS = typeof clearTimeout == "function" ? clearTimeout : void 0, Ys = -1, sb = typeof Promise == "function" ? Promise : void 0, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof sb < "u" ? function(e) {
      return sb.resolve(null).then(e).catch(jy);
    } : fb, zg = null, _s = 0, $m = 1, rb = 2, db = 3, Kn = 4, kn = /* @__PURE__ */ new Map(), hb = /* @__PURE__ */ new Set(), xc = re.d;
    re.d = {
      f: function() {
        var e = xc.f(), t = ic();
        return e || t;
      },
      r: function(e) {
        var t = la(e);
        t !== null && t.tag === 5 && t.type === "form" ? $h(t) : xc.r(e);
      },
      D: function(e) {
        xc.D(e), $0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        xc.C(e, t), $0("preconnect", e, t);
      },
      L: function(e, t, a) {
        xc.L(e, t, a);
        var i = ch;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + aa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + aa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + aa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + aa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = ci(e);
              break;
            case "script":
              f = hc(e);
          }
          kn.has(f) || (e = Ae(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), kn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Nn(f)
          ) || t === "script" && i.querySelector(yc(f)) || (t = i.createElement("link"), Rt(t, "link", e), kt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        xc.m(e, t);
        var a = ch;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + aa(i) + '"][href="' + aa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = hc(e);
          }
          if (!kn.has(f) && (e = Ae({ rel: "modulepreload", href: e }, t), kn.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(yc(f)))
                  return;
            }
            i = a.createElement("link"), Rt(i, "link", e), kt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        xc.X(e, t);
        var a = ch;
        if (a && e) {
          var i = nn(a).hoistableScripts, o = hc(e), f = i.get(o);
          f || (f = a.querySelector(
            yc(o)
          ), f || (e = Ae({ src: e, async: !0 }, t), (t = kn.get(o)) && Jy(e, t), f = a.createElement("script"), kt(f), Rt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        xc.S(e, t, a);
        var i = ch;
        if (i && e) {
          var o = nn(i).hoistableStyles, f = ci(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: _s, preload: null };
            if (d = i.querySelector(
              Nn(f)
            ))
              h.loading = $m | Kn;
            else {
              e = Ae(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = kn.get(f)) && Zy(e, a);
              var p = d = i.createElement("link");
              kt(p), Rt(p, "link", e), p._p = new Promise(function(v, H) {
                p.onload = v, p.onerror = H;
              }), p.addEventListener("load", function() {
                h.loading |= $m;
              }), p.addEventListener("error", function() {
                h.loading |= rb;
              }), h.loading |= Kn, sd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        xc.M(e, t);
        var a = ch;
        if (a && e) {
          var i = nn(a).hoistableScripts, o = hc(e), f = i.get(o);
          f || (f = a.querySelector(
            yc(o)
          ), f || (e = Ae({ src: e, async: !0, type: "module" }, t), (t = kn.get(o)) && Jy(e, t), f = a.createElement("script"), kt(f), Rt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var ch = typeof document > "u" ? null : document, Jp = null, Wm = null, Rg = null, Kp = null, js = Ev, Fm = {
      $$typeof: Na,
      Provider: null,
      Consumer: null,
      _currentValue: js,
      _currentValue2: js,
      _threadCount: 0
    }, yb = "%c%s%c ", mb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", pb = "", kp = " ", KS = Function.prototype.bind, vb = !1, gb = null, bb = null, Sb = null, Tb = null, Eb = null, Ab = null, zb = null, Rb = null, Db = null;
    gb = function(e, t, a, i) {
      t = D(e, t), t !== null && (a = K(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ae({}, e.memoizedProps), a = Vl(e, 2), a !== null && At(a, e, 2));
    }, bb = function(e, t, a) {
      t = D(e, t), t !== null && (a = le(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ae({}, e.memoizedProps), a = Vl(e, 2), a !== null && At(a, e, 2));
    }, Sb = function(e, t, a, i) {
      t = D(e, t), t !== null && (a = k(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ae({}, e.memoizedProps), a = Vl(e, 2), a !== null && At(a, e, 2));
    }, Tb = function(e, t, a) {
      e.pendingProps = K(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && At(t, e, 2);
    }, Eb = function(e, t) {
      e.pendingProps = le(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && At(t, e, 2);
    }, Ab = function(e, t, a) {
      e.pendingProps = k(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && At(t, e, 2);
    }, zb = function(e) {
      var t = Vl(e, 2);
      t !== null && At(t, e, 2);
    }, Rb = function(e) {
      ut = e;
    }, Db = function(e) {
      he = e;
    };
    var $p = !0, Wp = null, Dg = !1, Jo = null, Ko = null, ko = null, Im = /* @__PURE__ */ new Map(), Pm = /* @__PURE__ */ new Map(), $o = [], kS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Fp = null;
    if (ns.prototype.render = pd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ft(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Kl(i);
      $e(i, o, a, t, null, null);
    }, ns.prototype.unmount = pd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (We & (pa | Mu)) !== tn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), $e(e.current, 2, null, e, null, null), ic(), t[mi] = null;
      }
    }, ns.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = i0();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < $o.length && t !== 0 && t < $o[a].priority; a++) ;
        $o.splice(a, 0, e), a === 0 && tp(e);
      }
    }, function() {
      var e = us.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), re.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = pl(t), e = e !== null ? jl(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = gb, e.overrideHookStateDeletePath = bb, e.overrideHookStateRenamePath = Sb, e.overrideProps = Tb, e.overridePropsDeletePath = Eb, e.overridePropsRenamePath = Ab, e.scheduleUpdate = zb, e.setErrorHandler = Rb, e.setSuspenseHandler = Db, e.scheduleRefresh = yt, e.scheduleRoot = gt, e.setRefreshHandler = _l, e.getCurrentFiber = gv, e.getLaneLabelMap = bv, e.injectProfilingHooks = xu, at(e);
    }() && g && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Ob = window.location.protocol;
      /^(https?|file):$/.test(Ob) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Ob === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    a0.createRoot = function(e, t) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      np(e);
      var a = !1, i = "", o = Ph, f = N0, d = Ar, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === si && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = $y(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[mi] = t.current, Hy(e), new pd(t);
    }, a0.hydrateRoot = function(e, t, a) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      np(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Ph, d = N0, h = Ar, p = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = $y(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        p,
        v
      ), t.context = Wy(null), a = t.current, i = Kl(a), i = Dl(i), o = dn(i), o.callback = null, Za(a, o, i), a = i, t.current.lanes = a, Cc(t, a), xa(t), e[mi] = t.current, Hy(e), new ns(t);
    }, a0.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), a0;
}
var Yb;
function u2() {
  if (Yb) return Pp.exports;
  Yb = 1;
  function D() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D);
      } catch (K) {
        console.error(K);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (D(), Pp.exports = a2()) : Pp.exports = n2(), Pp.exports;
}
var i2 = u2();
const c2 = /* @__PURE__ */ FS(i2);
function Xb(D) {
  var K, k, z = "";
  if (typeof D == "string" || typeof D == "number") z += D;
  else if (typeof D == "object") if (Array.isArray(D)) {
    var le = D.length;
    for (K = 0; K < le; K++) D[K] && (k = Xb(D[K])) && (z && (z += " "), z += k);
  } else for (k in D) D[k] && (z && (z += " "), z += k);
  return z;
}
function o2() {
  for (var D, K, k = 0, z = "", le = arguments.length; k < le; k++) (D = arguments[k]) && (K = Xb(D)) && (z && (z += " "), z += K);
  return z;
}
const Ug = ({
  children: D,
  variant: K = "primary",
  size: k = "md",
  className: z,
  ...le
}) => {
  const he = "rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2", ut = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, Ct = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground"
  };
  return /* @__PURE__ */ Ue.jsx(
    "button",
    {
      className: o2(
        he,
        ut[k],
        Ct[K],
        z
      ),
      ...le,
      children: D
    }
  );
};
Ug.displayName = "Button";
const Qb = ({ title: D = "BreezeUI" }) => /* @__PURE__ */ Ue.jsx("nav", { className: "w-full border-b bg-white dark:border-gray-800 dark:bg-gray-900", children: /* @__PURE__ */ Ue.jsxs("div", { className: "flex w-full items-center justify-between px-6 py-4", children: [
  /* @__PURE__ */ Ue.jsx("div", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: D }),
  /* @__PURE__ */ Ue.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ Ue.jsx(Ug, { variant: "outline", children: "Login" }),
    /* @__PURE__ */ Ue.jsx(Ug, { children: "Sign Up" })
  ] })
] }) });
Qb.displayName = "Navbar";
const tv = ({ title: D, value: K, icon: k, description: z }) => /* @__PURE__ */ Ue.jsxs("div", { className: "flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800", children: [
  /* @__PURE__ */ Ue.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ Ue.jsx("h2", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: D }),
    k && /* @__PURE__ */ Ue.jsx("div", { className: "text-2xl text-brand-500", children: k })
  ] }),
  /* @__PURE__ */ Ue.jsx("p", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: K }),
  z && /* @__PURE__ */ Ue.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: z })
] });
tv.displayName = "Card";
var wb = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, _b = Uu.createContext && /* @__PURE__ */ Uu.createContext(wb), f2 = ["attr", "size", "title"];
function s2(D, K) {
  if (D == null) return {};
  var k = r2(D, K), z, le;
  if (Object.getOwnPropertySymbols) {
    var he = Object.getOwnPropertySymbols(D);
    for (le = 0; le < he.length; le++)
      z = he[le], !(K.indexOf(z) >= 0) && Object.prototype.propertyIsEnumerable.call(D, z) && (k[z] = D[z]);
  }
  return k;
}
function r2(D, K) {
  if (D == null) return {};
  var k = {};
  for (var z in D)
    if (Object.prototype.hasOwnProperty.call(D, z)) {
      if (K.indexOf(z) >= 0) continue;
      k[z] = D[z];
    }
  return k;
}
function lv() {
  return lv = Object.assign ? Object.assign.bind() : function(D) {
    for (var K = 1; K < arguments.length; K++) {
      var k = arguments[K];
      for (var z in k)
        Object.prototype.hasOwnProperty.call(k, z) && (D[z] = k[z]);
    }
    return D;
  }, lv.apply(this, arguments);
}
function jb(D, K) {
  var k = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var z = Object.getOwnPropertySymbols(D);
    K && (z = z.filter(function(le) {
      return Object.getOwnPropertyDescriptor(D, le).enumerable;
    })), k.push.apply(k, z);
  }
  return k;
}
function av(D) {
  for (var K = 1; K < arguments.length; K++) {
    var k = arguments[K] != null ? arguments[K] : {};
    K % 2 ? jb(Object(k), !0).forEach(function(z) {
      d2(D, z, k[z]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(k)) : jb(Object(k)).forEach(function(z) {
      Object.defineProperty(D, z, Object.getOwnPropertyDescriptor(k, z));
    });
  }
  return D;
}
function d2(D, K, k) {
  return K = h2(K), K in D ? Object.defineProperty(D, K, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : D[K] = k, D;
}
function h2(D) {
  var K = y2(D, "string");
  return typeof K == "symbol" ? K : K + "";
}
function y2(D, K) {
  if (typeof D != "object" || !D) return D;
  var k = D[Symbol.toPrimitive];
  if (k !== void 0) {
    var z = k.call(D, K);
    if (typeof z != "object") return z;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (K === "string" ? String : Number)(D);
}
function Lb(D) {
  return D && D.map((K, k) => /* @__PURE__ */ Uu.createElement(K.tag, av({
    key: k
  }, K.attr), Lb(K.child)));
}
function nv(D) {
  return (K) => /* @__PURE__ */ Uu.createElement(m2, lv({
    attr: av({}, D.attr)
  }, K), Lb(D.child));
}
function m2(D) {
  var K = (k) => {
    var {
      attr: z,
      size: le,
      title: he
    } = D, ut = s2(D, f2), Ct = le || k.size || "1em", Z;
    return k.className && (Z = k.className), D.className && (Z = (Z ? Z + " " : "") + D.className), /* @__PURE__ */ Uu.createElement("svg", lv({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, k.attr, z, ut, {
      className: Z,
      style: av(av({
        color: D.color || k.color
      }, k.style), D.style),
      height: Ct,
      width: Ct,
      xmlns: "http://www.w3.org/2000/svg"
    }), he && /* @__PURE__ */ Uu.createElement("title", null, he), D.children);
  };
  return _b !== void 0 ? /* @__PURE__ */ Uu.createElement(_b.Consumer, null, (k) => K(k)) : K(wb);
}
function p2(D) {
  return nv({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" }, child: [] }] })(D);
}
function v2(D) {
  return nv({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z" }, child: [] }] })(D);
}
function g2(D) {
  return nv({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" }, child: [] }] })(D);
}
function b2(D) {
  return nv({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(D);
}
const S2 = () => /* @__PURE__ */ Ue.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
  /* @__PURE__ */ Ue.jsx(Qb, {}),
  /* @__PURE__ */ Ue.jsxs("main", { className: "grid grid-cols-1 gap-6 bg-gray-50 p-8 dark:bg-gray-900 sm:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ Ue.jsx(
      tv,
      {
        title: "Users",
        value: "1,024",
        icon: /* @__PURE__ */ Ue.jsx(b2, {}),
        description: "Active this week"
      }
    ),
    /* @__PURE__ */ Ue.jsx(tv, { title: "Revenue", value: "$8,430" }),
    /* @__PURE__ */ Ue.jsx(tv, { title: "Tasks", value: "76%" })
  ] })
] }), T2 = [
  {
    icon: /* @__PURE__ */ Ue.jsx(v2, {}),
    title: "Component-Driven",
    desc: "Reusable and composable React components."
  },
  {
    icon: /* @__PURE__ */ Ue.jsx(p2, {}),
    title: "Powered by Tailwind",
    desc: "Fast styling with full dark mode support."
  },
  {
    icon: /* @__PURE__ */ Ue.jsx(g2, {}),
    title: "Themeable",
    desc: "Custom themes via Tailwind config."
  }
];
function E2() {
  return /* @__PURE__ */ Ue.jsxs("div", { className: "min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white", children: [
    /* @__PURE__ */ Ue.jsxs("header", { className: "py-16 text-center", children: [
      /* @__PURE__ */ Ue.jsx("h1", { className: "text-5xl font-bold", children: "BreezeUI" }),
      /* @__PURE__ */ Ue.jsx("p", { className: "mt-4 text-xl text-gray-600 dark:text-gray-300", children: "The modern component library for data dashboards." })
    ] }),
    /* @__PURE__ */ Ue.jsx("section", { className: "mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-3", children: T2.map((D, K) => /* @__PURE__ */ Ue.jsxs(
      "div",
      {
        className: "rounded-xl bg-gray-100 p-6 text-center shadow-md dark:bg-gray-800",
        children: [
          /* @__PURE__ */ Ue.jsx("div", { className: "mb-2 text-3xl text-brand-500", children: D.icon }),
          /* @__PURE__ */ Ue.jsx("h3", { className: "mb-1 text-lg font-semibold", children: D.title }),
          /* @__PURE__ */ Ue.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: D.desc })
        ]
      },
      K
    )) })
  ] });
}
function A2() {
  const [D, K] = WS("landing");
  return /* @__PURE__ */ Ue.jsxs("div", { className: D === "dashboard" ? "dark" : "", children: [
    /* @__PURE__ */ Ue.jsxs("nav", { className: "flex justify-center gap-6 bg-gray-200 p-4 dark:bg-gray-800", children: [
      /* @__PURE__ */ Ue.jsx("button", { onClick: () => K("landing"), children: "Landing" }),
      /* @__PURE__ */ Ue.jsx("button", { onClick: () => K("dashboard"), children: "Dashboard" })
    ] }),
    D === "landing" ? /* @__PURE__ */ Ue.jsx(E2, {}) : /* @__PURE__ */ Ue.jsx(S2, {})
  ] });
}
c2.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Ue.jsx(Uu.StrictMode, { children: /* @__PURE__ */ Ue.jsx(A2, {}) })
);
