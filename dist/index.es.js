import Jn, { useRef as pA, useState as jt, useEffect as yA } from "react";
var _r = { exports: {} }, fA = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function ha() {
  if (yn) return fA;
  yn = 1;
  var e = Jn, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), A = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, m, E) {
    var p, h = {}, D = null, S = null;
    E !== void 0 && (D = "" + E), m.key !== void 0 && (D = "" + m.key), m.ref !== void 0 && (S = m.ref);
    for (p in m) A.call(m, p) && !n.hasOwnProperty(p) && (h[p] = m[p]);
    if (f && f.defaultProps) for (p in m = f.defaultProps, m) h[p] === void 0 && (h[p] = m[p]);
    return { $$typeof: t, type: f, key: D, ref: S, props: h, _owner: r.current };
  }
  return fA.Fragment = i, fA.jsx = l, fA.jsxs = l, fA;
}
var hA = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function ca() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Jn, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), q = Symbol.iterator, w = "@@iterator";
    function s(v) {
      if (v === null || typeof v != "object")
        return null;
      var ee = q && v[q] || v[w];
      return typeof ee == "function" ? ee : null;
    }
    var a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(v) {
      {
        for (var ee = arguments.length, le = new Array(ee > 1 ? ee - 1 : 0), Ce = 1; Ce < ee; Ce++)
          le[Ce - 1] = arguments[Ce];
        g("error", v, le);
      }
    }
    function g(v, ee, le) {
      {
        var Ce = a.ReactDebugCurrentFrame, Le = Ce.getStackAddendum();
        Le !== "" && (ee += "%s", le = le.concat([Le]));
        var Ge = le.map(function(ve) {
          return String(ve);
        });
        Ge.unshift("Warning: " + ee), Function.prototype.apply.call(console[v], console, Ge);
      }
    }
    var B = !1, M = !1, L = !1, N = !1, W = !1, F;
    F = Symbol.for("react.module.reference");
    function ae(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === A || v === n || W || v === r || v === E || v === p || N || v === S || B || M || L || typeof v == "object" && v !== null && (v.$$typeof === D || v.$$typeof === h || v.$$typeof === l || v.$$typeof === f || v.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === F || v.getModuleId !== void 0));
    }
    function G(v, ee, le) {
      var Ce = v.displayName;
      if (Ce)
        return Ce;
      var Le = ee.displayName || ee.name || "";
      return Le !== "" ? le + "(" + Le + ")" : le;
    }
    function ne(v) {
      return v.displayName || "Context";
    }
    function Ae(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case A:
          return "Fragment";
        case i:
          return "Portal";
        case n:
          return "Profiler";
        case r:
          return "StrictMode";
        case E:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case f:
            var ee = v;
            return ne(ee) + ".Consumer";
          case l:
            var le = v;
            return ne(le._context) + ".Provider";
          case m:
            return G(v, v.render, "ForwardRef");
          case h:
            var Ce = v.displayName || null;
            return Ce !== null ? Ce : Ae(v.type) || "Memo";
          case D: {
            var Le = v, Ge = Le._payload, ve = Le._init;
            try {
              return Ae(ve(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, fe = 0, Oe, qe, Xe, Re, rt, Dt, et;
    function ai() {
    }
    ai.__reactDisabledLog = !0;
    function Ti() {
      {
        if (fe === 0) {
          Oe = console.log, qe = console.info, Xe = console.warn, Re = console.error, rt = console.group, Dt = console.groupCollapsed, et = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: ai,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        fe++;
      }
    }
    function xi() {
      {
        if (fe--, fe === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, v, {
              value: Oe
            }),
            info: X({}, v, {
              value: qe
            }),
            warn: X({}, v, {
              value: Xe
            }),
            error: X({}, v, {
              value: Re
            }),
            group: X({}, v, {
              value: rt
            }),
            groupCollapsed: X({}, v, {
              value: Dt
            }),
            groupEnd: X({}, v, {
              value: et
            })
          });
        }
        fe < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = a.ReactCurrentDispatcher, mt;
    function oi(v, ee, le) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (Le) {
            var Ce = Le.stack.trim().match(/\n( *(at )?)/);
            mt = Ce && Ce[1] || "";
          }
        return `
` + mt + v;
      }
    }
    var ti = !1, St;
    {
      var gt = typeof WeakMap == "function" ? WeakMap : Map;
      St = new gt();
    }
    function vt(v, ee) {
      if (!v || ti)
        return "";
      {
        var le = St.get(v);
        if (le !== void 0)
          return le;
      }
      var Ce;
      ti = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = yt.current, yt.current = null, Ti();
      try {
        if (ee) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (y) {
              Ce = y;
            }
            Reflect.construct(v, [], ve);
          } else {
            try {
              ve.call();
            } catch (y) {
              Ce = y;
            }
            v.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            Ce = y;
          }
          v();
        }
      } catch (y) {
        if (y && Ce && typeof y.stack == "string") {
          for (var _e = y.stack.split(`
`), Tt = Ce.stack.split(`
`), nt = _e.length - 1, ot = Tt.length - 1; nt >= 1 && ot >= 0 && _e[nt] !== Tt[ot]; )
            ot--;
          for (; nt >= 1 && ot >= 0; nt--, ot--)
            if (_e[nt] !== Tt[ot]) {
              if (nt !== 1 || ot !== 1)
                do
                  if (nt--, ot--, ot < 0 || _e[nt] !== Tt[ot]) {
                    var xt = `
` + _e[nt].replace(" at new ", " at ");
                    return v.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", v.displayName)), typeof v == "function" && St.set(v, xt), xt;
                  }
                while (nt >= 1 && ot >= 0);
              break;
            }
        }
      } finally {
        ti = !1, yt.current = Ge, xi(), Error.prepareStackTrace = Le;
      }
      var u = v ? v.displayName || v.name : "", o = u ? oi(u) : "";
      return typeof v == "function" && St.set(v, o), o;
    }
    function Ri(v, ee, le) {
      return vt(v, !1);
    }
    function Qt(v) {
      var ee = v.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function Lt(v, ee, le) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return vt(v, Qt(v));
      if (typeof v == "string")
        return oi(v);
      switch (v) {
        case E:
          return oi("Suspense");
        case p:
          return oi("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case m:
            return Ri(v.render);
          case h:
            return Lt(v.type, ee, le);
          case D: {
            var Ce = v, Le = Ce._payload, Ge = Ce._init;
            try {
              return Lt(Ge(Le), ee, le);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, Be = {}, Et = a.ReactDebugCurrentFrame;
    function It(v) {
      if (v) {
        var ee = v._owner, le = Lt(v.type, v._source, ee ? ee.type : null);
        Et.setExtraStackFrame(le);
      } else
        Et.setExtraStackFrame(null);
    }
    function c(v, ee, le, Ce, Le) {
      {
        var Ge = Function.call.bind(wt);
        for (var ve in v)
          if (Ge(v, ve)) {
            var _e = void 0;
            try {
              if (typeof v[ve] != "function") {
                var Tt = Error((Ce || "React class") + ": " + le + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tt.name = "Invariant Violation", Tt;
              }
              _e = v[ve](ee, ve, Ce, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              _e = nt;
            }
            _e && !(_e instanceof Error) && (It(Le), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", le, ve, typeof _e), It(null)), _e instanceof Error && !(_e.message in Be) && (Be[_e.message] = !0, It(Le), I("Failed %s type: %s", le, _e.message), It(null));
          }
      }
    }
    var x = Array.isArray;
    function _(v) {
      return x(v);
    }
    function C(v) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, le = ee && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return le;
      }
    }
    function Y(v) {
      try {
        return P(v), !1;
      } catch {
        return !0;
      }
    }
    function P(v) {
      return "" + v;
    }
    function z(v) {
      if (Y(v))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", C(v)), P(v);
    }
    var Z = a.ReactCurrentOwner, $ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ce, de;
    de = {};
    function Ne(v) {
      if (wt.call(v, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function pe(v) {
      if (wt.call(v, "key")) {
        var ee = Object.getOwnPropertyDescriptor(v, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Je(v, ee) {
      if (typeof v.ref == "string" && Z.current && ee && Z.current.stateNode !== ee) {
        var le = Ae(Z.current.type);
        de[le] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(Z.current.type), v.ref), de[le] = !0);
      }
    }
    function Yt(v, ee) {
      {
        var le = function() {
          he || (he = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        le.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function Vt(v, ee) {
      {
        var le = function() {
          ce || (ce = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        le.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var tt = function(v, ee, le, Ce, Le, Ge, ve) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: v,
        key: ee,
        ref: le,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return _e._store = {}, Object.defineProperty(_e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(_e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function Vi(v, ee, le, Ce, Le) {
      {
        var Ge, ve = {}, _e = null, Tt = null;
        le !== void 0 && (z(le), _e = "" + le), pe(ee) && (z(ee.key), _e = "" + ee.key), Ne(ee) && (Tt = ee.ref, Je(ee, Le));
        for (Ge in ee)
          wt.call(ee, Ge) && !$.hasOwnProperty(Ge) && (ve[Ge] = ee[Ge]);
        if (v && v.defaultProps) {
          var nt = v.defaultProps;
          for (Ge in nt)
            ve[Ge] === void 0 && (ve[Ge] = nt[Ge]);
        }
        if (_e || Tt) {
          var ot = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          _e && Yt(ve, ot), Tt && Vt(ve, ot);
        }
        return tt(v, _e, Tt, Le, Ce, Z.current, ve);
      }
    }
    var li = a.ReactCurrentOwner, ft = a.ReactDebugCurrentFrame;
    function ui(v) {
      if (v) {
        var ee = v._owner, le = Lt(v.type, v._source, ee ? ee.type : null);
        ft.setExtraStackFrame(le);
      } else
        ft.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function nA(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function sA() {
      {
        if (li.current) {
          var v = Ae(li.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function ct(v) {
      return "";
    }
    var Wi = {};
    function bi(v) {
      {
        var ee = sA();
        if (!ee) {
          var le = typeof v == "string" ? v : v.displayName || v.name;
          le && (ee = `

Check the top-level render call using <` + le + ">.");
        }
        return ee;
      }
    }
    function Bt(v, ee) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var le = bi(ee);
        if (Wi[le])
          return;
        Wi[le] = !0;
        var Ce = "";
        v && v._owner && v._owner !== li.current && (Ce = " It was passed a child from " + Ae(v._owner.type) + "."), ui(v), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, Ce), ui(null);
      }
    }
    function vi(v, ee) {
      {
        if (typeof v != "object")
          return;
        if (_(v))
          for (var le = 0; le < v.length; le++) {
            var Ce = v[le];
            nA(Ce) && Bt(Ce, ee);
          }
        else if (nA(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Le = s(v);
          if (typeof Le == "function" && Le !== v.entries)
            for (var Ge = Le.call(v), ve; !(ve = Ge.next()).done; )
              nA(ve.value) && Bt(ve.value, ee);
        }
      }
    }
    function cr(v) {
      {
        var ee = v.type;
        if (ee == null || typeof ee == "string")
          return;
        var le;
        if (typeof ee == "function")
          le = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === h))
          le = ee.propTypes;
        else
          return;
        if (le) {
          var Ce = Ae(ee);
          c(le, v.props, "prop", Ce, v);
        } else if (ee.PropTypes !== void 0 && !We) {
          We = !0;
          var Le = Ae(ee);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ii(v) {
      {
        for (var ee = Object.keys(v.props), le = 0; le < ee.length; le++) {
          var Ce = ee[le];
          if (Ce !== "children" && Ce !== "key") {
            ui(v), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), ui(null);
            break;
          }
        }
        v.ref !== null && (ui(v), I("Invalid attribute `ref` supplied to `React.Fragment`."), ui(null));
      }
    }
    var aA = {};
    function Wt(v, ee, le, Ce, Le, Ge) {
      {
        var ve = ae(v);
        if (!ve) {
          var _e = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tt = ct();
          Tt ? _e += Tt : _e += sA();
          var nt;
          v === null ? nt = "null" : _(v) ? nt = "array" : v !== void 0 && v.$$typeof === t ? (nt = "<" + (Ae(v.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof v, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, _e);
        }
        var ot = Vi(v, ee, le, Le, Ge);
        if (ot == null)
          return ot;
        if (ve) {
          var xt = ee.children;
          if (xt !== void 0)
            if (Ce)
              if (_(xt)) {
                for (var u = 0; u < xt.length; u++)
                  vi(xt[u], v);
                Object.freeze && Object.freeze(xt);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vi(xt, v);
        }
        if (wt.call(ee, "key")) {
          var o = Ae(v), y = Object.keys(ee).filter(function(k) {
            return k !== "key";
          }), R = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!aA[o + R]) {
            var d = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, R, o, d, o), aA[o + R] = !0;
          }
        }
        return v === A ? ii(ot) : cr(ot), ot;
      }
    }
    function dr(v, ee, le) {
      return Wt(v, ee, le, !0);
    }
    function oA(v, ee, le) {
      return Wt(v, ee, le, !1);
    }
    var DA = oA, mr = dr;
    hA.Fragment = A, hA.jsx = DA, hA.jsxs = mr;
  }()), hA;
}
process.env.NODE_ENV === "production" ? _r.exports = ha() : _r.exports = ca();
var Ve = _r.exports;
const xc = () => /* @__PURE__ */ Ve.jsx("button", { className: "bg-red-30 text-red-900", children: "Button" });
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Vn;
function ue() {
  return Vn.apply(null, arguments);
}
function da(e) {
  Vn = e;
}
function Zt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Pi(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Pe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Nr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Pe(e, t))
      return !1;
  return !0;
}
function Ot(e) {
  return e === void 0;
}
function Ci(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function RA(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Wn(e, t) {
  var i = [], A, r = e.length;
  for (A = 0; A < r; ++A)
    i.push(t(e[A], A));
  return i;
}
function Mi(e, t) {
  for (var i in t)
    Pe(t, i) && (e[i] = t[i]);
  return Pe(t, "toString") && (e.toString = t.toString), Pe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ni(e, t, i, A) {
  return ms(e, t, i, A, !0).utc();
}
function ma() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function De(e) {
  return e._pf == null && (e._pf = ma()), e._pf;
}
var Mr;
Array.prototype.some ? Mr = Array.prototype.some : Mr = function(e) {
  var t = Object(this), i = t.length >>> 0, A;
  for (A = 0; A < i; A++)
    if (A in t && e.call(this, t[A], A, t))
      return !0;
  return !1;
};
function Jr(e) {
  var t = null, i = !1, A = e._d && !isNaN(e._d.getTime());
  if (A && (t = De(e), i = Mr.call(t.parsedDateParts, function(r) {
    return r != null;
  }), A = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i), e._strict && (A = A && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = A;
  else
    return A;
  return e._isValid;
}
function ZA(e) {
  var t = ni(NaN);
  return e != null ? Mi(De(t), e) : De(t).userInvalidated = !0, t;
}
var Cn = ue.momentProperties = [], gr = !1;
function Vr(e, t) {
  var i, A, r, n = Cn.length;
  if (Ot(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ot(t._i) || (e._i = t._i), Ot(t._f) || (e._f = t._f), Ot(t._l) || (e._l = t._l), Ot(t._strict) || (e._strict = t._strict), Ot(t._tzm) || (e._tzm = t._tzm), Ot(t._isUTC) || (e._isUTC = t._isUTC), Ot(t._offset) || (e._offset = t._offset), Ot(t._pf) || (e._pf = De(t)), Ot(t._locale) || (e._locale = t._locale), n > 0)
    for (i = 0; i < n; i++)
      A = Cn[i], r = t[A], Ot(r) || (e[A] = r);
  return e;
}
function SA(e) {
  Vr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), gr === !1 && (gr = !0, ue.updateOffset(this), gr = !1);
}
function zt(e) {
  return e instanceof SA || e != null && e._isAMomentObject != null;
}
function Gn(e) {
  ue.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Nt(e, t) {
  var i = !0;
  return Mi(function() {
    if (ue.deprecationHandler != null && ue.deprecationHandler(null, e), i) {
      var A = [], r, n, l, f = arguments.length;
      for (n = 0; n < f; n++) {
        if (r = "", typeof arguments[n] == "object") {
          r += `
[` + n + "] ";
          for (l in arguments[0])
            Pe(arguments[0], l) && (r += l + ": " + arguments[0][l] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[n];
        A.push(r);
      }
      Gn(
        e + `
Arguments: ` + Array.prototype.slice.call(A).join("") + `
` + new Error().stack
      ), i = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var En = {};
function jn(e, t) {
  ue.deprecationHandler != null && ue.deprecationHandler(e, t), En[e] || (Gn(t), En[e] = !0);
}
ue.suppressDeprecationWarnings = !1;
ue.deprecationHandler = null;
function si(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ga(e) {
  var t, i;
  for (i in e)
    Pe(e, i) && (t = e[i], si(t) ? this[i] = t : this["_" + i] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function qr(e, t) {
  var i = Mi({}, e), A;
  for (A in t)
    Pe(t, A) && (Pi(e[A]) && Pi(t[A]) ? (i[A] = {}, Mi(i[A], e[A]), Mi(i[A], t[A])) : t[A] != null ? i[A] = t[A] : delete i[A]);
  for (A in e)
    Pe(e, A) && !Pe(t, A) && Pi(e[A]) && (i[A] = Mi({}, i[A]));
  return i;
}
function Wr(e) {
  e != null && this.set(e);
}
var kr;
Object.keys ? kr = Object.keys : kr = function(e) {
  var t, i = [];
  for (t in e)
    Pe(e, t) && i.push(t);
  return i;
};
var pa = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function ya(e, t, i) {
  var A = this._calendar[e] || this._calendar.sameElse;
  return si(A) ? A.call(t, i) : A;
}
function ri(e, t, i) {
  var A = "" + Math.abs(e), r = t - A.length, n = e >= 0;
  return (n ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + A;
}
var Gr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, bA = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, pr = {}, Xi = {};
function ye(e, t, i, A) {
  var r = A;
  typeof A == "string" && (r = function() {
    return this[A]();
  }), e && (Xi[e] = r), t && (Xi[t[0]] = function() {
    return ri(r.apply(this, arguments), t[1], t[2]);
  }), i && (Xi[i] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function wa(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ca(e) {
  var t = e.match(Gr), i, A;
  for (i = 0, A = t.length; i < A; i++)
    Xi[t[i]] ? t[i] = Xi[t[i]] : t[i] = wa(t[i]);
  return function(r) {
    var n = "", l;
    for (l = 0; l < A; l++)
      n += si(t[l]) ? t[l].call(r, e) : t[l];
    return n;
  };
}
function YA(e, t) {
  return e.isValid() ? (t = Hn(t, e.localeData()), pr[t] = pr[t] || Ca(t), pr[t](e)) : e.localeData().invalidDate();
}
function Hn(e, t) {
  var i = 5;
  function A(r) {
    return t.longDateFormat(r) || r;
  }
  for (bA.lastIndex = 0; i >= 0 && bA.test(e); )
    e = e.replace(
      bA,
      A
    ), bA.lastIndex = 0, i -= 1;
  return e;
}
var Ea = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ia(e) {
  var t = this._longDateFormat[e], i = this._longDateFormat[e.toUpperCase()];
  return t || !i ? t : (this._longDateFormat[e] = i.match(Gr).map(function(A) {
    return A === "MMMM" || A === "MM" || A === "DD" || A === "dddd" ? A.slice(1) : A;
  }).join(""), this._longDateFormat[e]);
}
var Ta = "Invalid date";
function xa() {
  return this._invalidDate;
}
var Ra = "%d", Sa = /\d{1,2}/;
function _a(e) {
  return this._ordinal.replace("%d", e);
}
var Ma = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function qa(e, t, i, A) {
  var r = this._relativeTime[i];
  return si(r) ? r(e, t, i, A) : r.replace(/%d/i, e);
}
function ka(e, t) {
  var i = this._relativeTime[e > 0 ? "future" : "past"];
  return si(i) ? i(t) : i.replace(/%s/i, t);
}
var In = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Jt(e) {
  return typeof e == "string" ? In[e] || In[e.toLowerCase()] : void 0;
}
function jr(e) {
  var t = {}, i, A;
  for (A in e)
    Pe(e, A) && (i = Jt(A), i && (t[i] = e[A]));
  return t;
}
var Da = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function ba(e) {
  var t = [], i;
  for (i in e)
    Pe(e, i) && t.push({ unit: i, priority: Da[i] });
  return t.sort(function(A, r) {
    return A.priority - r.priority;
  }), t;
}
var Xn = /\d/, Ut = /\d\d/, Zn = /\d{3}/, Hr = /\d{4}/, zA = /[+-]?\d{6}/, $e = /\d\d?/, zn = /\d\d\d\d?/, $n = /\d\d\d\d\d\d?/, $A = /\d{1,3}/, Xr = /\d{1,4}/, er = /[+-]?\d{1,6}/, eA = /\d+/, tr = /[+-]?\d+/, va = /Z|[+-]\d\d:?\d\d/gi, ir = /Z|[+-]\d\d(?::?\d\d)?/gi, Qa = /[+-]?\d+(\.\d{1,3})?/, _A = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, tA = /^[1-9]\d?/, Zr = /^([1-9]\d|\d)/, NA;
NA = {};
function me(e, t, i) {
  NA[e] = si(t) ? t : function(A, r) {
    return A && i ? i : t;
  };
}
function Ba(e, t) {
  return Pe(NA, e) ? NA[e](t._strict, t._locale) : new RegExp(Oa(e));
}
function Oa(e) {
  return yi(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, i, A, r, n) {
        return i || A || r || n;
      }
    )
  );
}
function yi(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Pt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Qe(e) {
  var t = +e, i = 0;
  return t !== 0 && isFinite(t) && (i = Pt(t)), i;
}
var Dr = {};
function je(e, t) {
  var i, A = t, r;
  for (typeof e == "string" && (e = [e]), Ci(t) && (A = function(n, l) {
    l[t] = Qe(n);
  }), r = e.length, i = 0; i < r; i++)
    Dr[e[i]] = A;
}
function MA(e, t) {
  je(e, function(i, A, r, n) {
    r._w = r._w || {}, t(i, r._w, r, n);
  });
}
function Fa(e, t, i) {
  t != null && Pe(Dr, e) && Dr[e](t, i._a, i, e);
}
function Ar(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var kt = 0, gi = 1, Ai = 2, pt = 3, Ht = 4, pi = 5, Ui = 6, Ya = 7, Ua = 8;
ye("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ri(e, 4) : "+" + e;
});
ye(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
ye(0, ["YYYY", 4], 0, "year");
ye(0, ["YYYYY", 5], 0, "year");
ye(0, ["YYYYYY", 6, !0], 0, "year");
me("Y", tr);
me("YY", $e, Ut);
me("YYYY", Xr, Hr);
me("YYYYY", er, zA);
me("YYYYYY", er, zA);
je(["YYYYY", "YYYYYY"], kt);
je("YYYY", function(e, t) {
  t[kt] = e.length === 2 ? ue.parseTwoDigitYear(e) : Qe(e);
});
je("YY", function(e, t) {
  t[kt] = ue.parseTwoDigitYear(e);
});
je("Y", function(e, t) {
  t[kt] = parseInt(e, 10);
});
function wA(e) {
  return Ar(e) ? 366 : 365;
}
ue.parseTwoDigitYear = function(e) {
  return Qe(e) + (Qe(e) > 68 ? 1900 : 2e3);
};
var es = iA("FullYear", !0);
function La() {
  return Ar(this.year());
}
function iA(e, t) {
  return function(i) {
    return i != null ? (ts(this, e, i), ue.updateOffset(this, t), this) : CA(this, e);
  };
}
function CA(e, t) {
  if (!e.isValid())
    return NaN;
  var i = e._d, A = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return A ? i.getUTCMilliseconds() : i.getMilliseconds();
    case "Seconds":
      return A ? i.getUTCSeconds() : i.getSeconds();
    case "Minutes":
      return A ? i.getUTCMinutes() : i.getMinutes();
    case "Hours":
      return A ? i.getUTCHours() : i.getHours();
    case "Date":
      return A ? i.getUTCDate() : i.getDate();
    case "Day":
      return A ? i.getUTCDay() : i.getDay();
    case "Month":
      return A ? i.getUTCMonth() : i.getMonth();
    case "FullYear":
      return A ? i.getUTCFullYear() : i.getFullYear();
    default:
      return NaN;
  }
}
function ts(e, t, i) {
  var A, r, n, l, f;
  if (!(!e.isValid() || isNaN(i))) {
    switch (A = e._d, r = e._isUTC, t) {
      case "Milliseconds":
        return void (r ? A.setUTCMilliseconds(i) : A.setMilliseconds(i));
      case "Seconds":
        return void (r ? A.setUTCSeconds(i) : A.setSeconds(i));
      case "Minutes":
        return void (r ? A.setUTCMinutes(i) : A.setMinutes(i));
      case "Hours":
        return void (r ? A.setUTCHours(i) : A.setHours(i));
      case "Date":
        return void (r ? A.setUTCDate(i) : A.setDate(i));
      case "FullYear":
        break;
      default:
        return;
    }
    n = i, l = e.month(), f = e.date(), f = f === 29 && l === 1 && !Ar(n) ? 28 : f, r ? A.setUTCFullYear(n, l, f) : A.setFullYear(n, l, f);
  }
}
function Pa(e) {
  return e = Jt(e), si(this[e]) ? this[e]() : this;
}
function Ka(e, t) {
  if (typeof e == "object") {
    e = jr(e);
    var i = ba(e), A, r = i.length;
    for (A = 0; A < r; A++)
      this[i[A].unit](e[i[A].unit]);
  } else if (e = Jt(e), si(this[e]))
    return this[e](t);
  return this;
}
function Na(e, t) {
  return (e % t + t) % t;
}
var ht;
Array.prototype.indexOf ? ht = Array.prototype.indexOf : ht = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function zr(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var i = Na(t, 12);
  return e += (t - i) / 12, i === 1 ? Ar(e) ? 29 : 28 : 31 - i % 7 % 2;
}
ye("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
ye("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
ye("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
me("M", $e, tA);
me("MM", $e, Ut);
me("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
me("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
je(["M", "MM"], function(e, t) {
  t[gi] = Qe(e) - 1;
});
je(["MMM", "MMMM"], function(e, t, i, A) {
  var r = i._locale.monthsParse(e, A, i._strict);
  r != null ? t[gi] = r : De(i).invalidMonth = e;
});
var Ja = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), is = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), As = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Va = _A, Wa = _A;
function Ga(e, t) {
  return e ? Zt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || As).test(t) ? "format" : "standalone"][e.month()] : Zt(this._months) ? this._months : this._months.standalone;
}
function ja(e, t) {
  return e ? Zt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[As.test(t) ? "format" : "standalone"][e.month()] : Zt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Ha(e, t, i) {
  var A, r, n, l = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], A = 0; A < 12; ++A)
      n = ni([2e3, A]), this._shortMonthsParse[A] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[A] = this.months(n, "").toLocaleLowerCase();
  return i ? t === "MMM" ? (r = ht.call(this._shortMonthsParse, l), r !== -1 ? r : null) : (r = ht.call(this._longMonthsParse, l), r !== -1 ? r : null) : t === "MMM" ? (r = ht.call(this._shortMonthsParse, l), r !== -1 ? r : (r = ht.call(this._longMonthsParse, l), r !== -1 ? r : null)) : (r = ht.call(this._longMonthsParse, l), r !== -1 ? r : (r = ht.call(this._shortMonthsParse, l), r !== -1 ? r : null));
}
function Xa(e, t, i) {
  var A, r, n;
  if (this._monthsParseExact)
    return Ha.call(this, e, t, i);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), A = 0; A < 12; A++) {
    if (r = ni([2e3, A]), i && !this._longMonthsParse[A] && (this._longMonthsParse[A] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[A] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !i && !this._monthsParse[A] && (n = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[A] = new RegExp(n.replace(".", ""), "i")), i && t === "MMMM" && this._longMonthsParse[A].test(e))
      return A;
    if (i && t === "MMM" && this._shortMonthsParse[A].test(e))
      return A;
    if (!i && this._monthsParse[A].test(e))
      return A;
  }
}
function rs(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Qe(t);
    else if (t = e.localeData().monthsParse(t), !Ci(t))
      return e;
  }
  var i = t, A = e.date();
  return A = A < 29 ? A : Math.min(A, zr(e.year(), i)), e._isUTC ? e._d.setUTCMonth(i, A) : e._d.setMonth(i, A), e;
}
function ns(e) {
  return e != null ? (rs(this, e), ue.updateOffset(this, !0), this) : CA(this, "Month");
}
function Za() {
  return zr(this.year(), this.month());
}
function za(e) {
  return this._monthsParseExact ? (Pe(this, "_monthsRegex") || ss.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Pe(this, "_monthsShortRegex") || (this._monthsShortRegex = Va), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function $a(e) {
  return this._monthsParseExact ? (Pe(this, "_monthsRegex") || ss.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Pe(this, "_monthsRegex") || (this._monthsRegex = Wa), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ss() {
  function e(m, E) {
    return E.length - m.length;
  }
  var t = [], i = [], A = [], r, n, l, f;
  for (r = 0; r < 12; r++)
    n = ni([2e3, r]), l = yi(this.monthsShort(n, "")), f = yi(this.months(n, "")), t.push(l), i.push(f), A.push(f), A.push(l);
  t.sort(e), i.sort(e), A.sort(e), this._monthsRegex = new RegExp("^(" + A.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + i.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function eo(e, t, i, A, r, n, l) {
  var f;
  return e < 100 && e >= 0 ? (f = new Date(e + 400, t, i, A, r, n, l), isFinite(f.getFullYear()) && f.setFullYear(e)) : f = new Date(e, t, i, A, r, n, l), f;
}
function EA(e) {
  var t, i;
  return e < 100 && e >= 0 ? (i = Array.prototype.slice.call(arguments), i[0] = e + 400, t = new Date(Date.UTC.apply(null, i)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function JA(e, t, i) {
  var A = 7 + t - i, r = (7 + EA(e, 0, A).getUTCDay() - t) % 7;
  return -r + A - 1;
}
function as(e, t, i, A, r) {
  var n = (7 + i - A) % 7, l = JA(e, A, r), f = 1 + 7 * (t - 1) + n + l, m, E;
  return f <= 0 ? (m = e - 1, E = wA(m) + f) : f > wA(e) ? (m = e + 1, E = f - wA(e)) : (m = e, E = f), {
    year: m,
    dayOfYear: E
  };
}
function IA(e, t, i) {
  var A = JA(e.year(), t, i), r = Math.floor((e.dayOfYear() - A - 1) / 7) + 1, n, l;
  return r < 1 ? (l = e.year() - 1, n = r + wi(l, t, i)) : r > wi(e.year(), t, i) ? (n = r - wi(e.year(), t, i), l = e.year() + 1) : (l = e.year(), n = r), {
    week: n,
    year: l
  };
}
function wi(e, t, i) {
  var A = JA(e, t, i), r = JA(e + 1, t, i);
  return (wA(e) - A + r) / 7;
}
ye("w", ["ww", 2], "wo", "week");
ye("W", ["WW", 2], "Wo", "isoWeek");
me("w", $e, tA);
me("ww", $e, Ut);
me("W", $e, tA);
me("WW", $e, Ut);
MA(
  ["w", "ww", "W", "WW"],
  function(e, t, i, A) {
    t[A.substr(0, 1)] = Qe(e);
  }
);
function to(e) {
  return IA(e, this._week.dow, this._week.doy).week;
}
var io = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ao() {
  return this._week.dow;
}
function ro() {
  return this._week.doy;
}
function no(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function so(e) {
  var t = IA(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
ye("d", 0, "do", "day");
ye("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
ye("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
ye("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
ye("e", 0, 0, "weekday");
ye("E", 0, 0, "isoWeekday");
me("d", $e);
me("e", $e);
me("E", $e);
me("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
me("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
me("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
MA(["dd", "ddd", "dddd"], function(e, t, i, A) {
  var r = i._locale.weekdaysParse(e, A, i._strict);
  r != null ? t.d = r : De(i).invalidWeekday = e;
});
MA(["d", "e", "E"], function(e, t, i, A) {
  t[A] = Qe(e);
});
function ao(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function oo(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function $r(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var lo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), os = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), uo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), fo = _A, ho = _A, co = _A;
function mo(e, t) {
  var i = Zt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? $r(i, this._week.dow) : e ? i[e.day()] : i;
}
function go(e) {
  return e === !0 ? $r(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function po(e) {
  return e === !0 ? $r(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function yo(e, t, i) {
  var A, r, n, l = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], A = 0; A < 7; ++A)
      n = ni([2e3, 1]).day(A), this._minWeekdaysParse[A] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[A] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[A] = this.weekdays(n, "").toLocaleLowerCase();
  return i ? t === "dddd" ? (r = ht.call(this._weekdaysParse, l), r !== -1 ? r : null) : t === "ddd" ? (r = ht.call(this._shortWeekdaysParse, l), r !== -1 ? r : null) : (r = ht.call(this._minWeekdaysParse, l), r !== -1 ? r : null) : t === "dddd" ? (r = ht.call(this._weekdaysParse, l), r !== -1 || (r = ht.call(this._shortWeekdaysParse, l), r !== -1) ? r : (r = ht.call(this._minWeekdaysParse, l), r !== -1 ? r : null)) : t === "ddd" ? (r = ht.call(this._shortWeekdaysParse, l), r !== -1 || (r = ht.call(this._weekdaysParse, l), r !== -1) ? r : (r = ht.call(this._minWeekdaysParse, l), r !== -1 ? r : null)) : (r = ht.call(this._minWeekdaysParse, l), r !== -1 || (r = ht.call(this._weekdaysParse, l), r !== -1) ? r : (r = ht.call(this._shortWeekdaysParse, l), r !== -1 ? r : null));
}
function wo(e, t, i) {
  var A, r, n;
  if (this._weekdaysParseExact)
    return yo.call(this, e, t, i);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), A = 0; A < 7; A++) {
    if (r = ni([2e3, 1]).day(A), i && !this._fullWeekdaysParse[A] && (this._fullWeekdaysParse[A] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[A] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[A] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[A] || (n = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[A] = new RegExp(n.replace(".", ""), "i")), i && t === "dddd" && this._fullWeekdaysParse[A].test(e))
      return A;
    if (i && t === "ddd" && this._shortWeekdaysParse[A].test(e))
      return A;
    if (i && t === "dd" && this._minWeekdaysParse[A].test(e))
      return A;
    if (!i && this._weekdaysParse[A].test(e))
      return A;
  }
}
function Co(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = CA(this, "Day");
  return e != null ? (e = ao(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Eo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Io(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = oo(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function To(e) {
  return this._weekdaysParseExact ? (Pe(this, "_weekdaysRegex") || en.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Pe(this, "_weekdaysRegex") || (this._weekdaysRegex = fo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function xo(e) {
  return this._weekdaysParseExact ? (Pe(this, "_weekdaysRegex") || en.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Pe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ho), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ro(e) {
  return this._weekdaysParseExact ? (Pe(this, "_weekdaysRegex") || en.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Pe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = co), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function en() {
  function e(p, h) {
    return h.length - p.length;
  }
  var t = [], i = [], A = [], r = [], n, l, f, m, E;
  for (n = 0; n < 7; n++)
    l = ni([2e3, 1]).day(n), f = yi(this.weekdaysMin(l, "")), m = yi(this.weekdaysShort(l, "")), E = yi(this.weekdays(l, "")), t.push(f), i.push(m), A.push(E), r.push(f), r.push(m), r.push(E);
  t.sort(e), i.sort(e), A.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + A.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + i.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function tn() {
  return this.hours() % 12 || 12;
}
function So() {
  return this.hours() || 24;
}
ye("H", ["HH", 2], 0, "hour");
ye("h", ["hh", 2], 0, tn);
ye("k", ["kk", 2], 0, So);
ye("hmm", 0, 0, function() {
  return "" + tn.apply(this) + ri(this.minutes(), 2);
});
ye("hmmss", 0, 0, function() {
  return "" + tn.apply(this) + ri(this.minutes(), 2) + ri(this.seconds(), 2);
});
ye("Hmm", 0, 0, function() {
  return "" + this.hours() + ri(this.minutes(), 2);
});
ye("Hmmss", 0, 0, function() {
  return "" + this.hours() + ri(this.minutes(), 2) + ri(this.seconds(), 2);
});
function ls(e, t) {
  ye(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ls("a", !0);
ls("A", !1);
function us(e, t) {
  return t._meridiemParse;
}
me("a", us);
me("A", us);
me("H", $e, Zr);
me("h", $e, tA);
me("k", $e, tA);
me("HH", $e, Ut);
me("hh", $e, Ut);
me("kk", $e, Ut);
me("hmm", zn);
me("hmmss", $n);
me("Hmm", zn);
me("Hmmss", $n);
je(["H", "HH"], pt);
je(["k", "kk"], function(e, t, i) {
  var A = Qe(e);
  t[pt] = A === 24 ? 0 : A;
});
je(["a", "A"], function(e, t, i) {
  i._isPm = i._locale.isPM(e), i._meridiem = e;
});
je(["h", "hh"], function(e, t, i) {
  t[pt] = Qe(e), De(i).bigHour = !0;
});
je("hmm", function(e, t, i) {
  var A = e.length - 2;
  t[pt] = Qe(e.substr(0, A)), t[Ht] = Qe(e.substr(A)), De(i).bigHour = !0;
});
je("hmmss", function(e, t, i) {
  var A = e.length - 4, r = e.length - 2;
  t[pt] = Qe(e.substr(0, A)), t[Ht] = Qe(e.substr(A, 2)), t[pi] = Qe(e.substr(r)), De(i).bigHour = !0;
});
je("Hmm", function(e, t, i) {
  var A = e.length - 2;
  t[pt] = Qe(e.substr(0, A)), t[Ht] = Qe(e.substr(A));
});
je("Hmmss", function(e, t, i) {
  var A = e.length - 4, r = e.length - 2;
  t[pt] = Qe(e.substr(0, A)), t[Ht] = Qe(e.substr(A, 2)), t[pi] = Qe(e.substr(r));
});
function _o(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Mo = /[ap]\.?m?\.?/i, qo = iA("Hours", !0);
function ko(e, t, i) {
  return e > 11 ? i ? "pm" : "PM" : i ? "am" : "AM";
}
var fs = {
  calendar: pa,
  longDateFormat: Ea,
  invalidDate: Ta,
  ordinal: Ra,
  dayOfMonthOrdinalParse: Sa,
  relativeTime: Ma,
  months: Ja,
  monthsShort: is,
  week: io,
  weekdays: lo,
  weekdaysMin: uo,
  weekdaysShort: os,
  meridiemParse: Mo
}, At = {}, cA = {}, TA;
function Do(e, t) {
  var i, A = Math.min(e.length, t.length);
  for (i = 0; i < A; i += 1)
    if (e[i] !== t[i])
      return i;
  return A;
}
function Tn(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function bo(e) {
  for (var t = 0, i, A, r, n; t < e.length; ) {
    for (n = Tn(e[t]).split("-"), i = n.length, A = Tn(e[t + 1]), A = A ? A.split("-") : null; i > 0; ) {
      if (r = rr(n.slice(0, i).join("-")), r)
        return r;
      if (A && A.length >= i && Do(n, A) >= i - 1)
        break;
      i--;
    }
    t++;
  }
  return TA;
}
function vo(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function rr(e) {
  var t = null, i;
  if (At[e] === void 0 && typeof module < "u" && module && module.exports && vo(e))
    try {
      t = TA._abbr, i = require, i("./locale/" + e), ki(t);
    } catch {
      At[e] = null;
    }
  return At[e];
}
function ki(e, t) {
  var i;
  return e && (Ot(t) ? i = Ei(e) : i = An(e, t), i ? TA = i : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), TA._abbr;
}
function An(e, t) {
  if (t !== null) {
    var i, A = fs;
    if (t.abbr = e, At[e] != null)
      jn(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), A = At[e]._config;
    else if (t.parentLocale != null)
      if (At[t.parentLocale] != null)
        A = At[t.parentLocale]._config;
      else if (i = rr(t.parentLocale), i != null)
        A = i._config;
      else
        return cA[t.parentLocale] || (cA[t.parentLocale] = []), cA[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return At[e] = new Wr(qr(A, t)), cA[e] && cA[e].forEach(function(r) {
      An(r.name, r.config);
    }), ki(e), At[e];
  } else
    return delete At[e], null;
}
function Qo(e, t) {
  if (t != null) {
    var i, A, r = fs;
    At[e] != null && At[e].parentLocale != null ? At[e].set(qr(At[e]._config, t)) : (A = rr(e), A != null && (r = A._config), t = qr(r, t), A == null && (t.abbr = e), i = new Wr(t), i.parentLocale = At[e], At[e] = i), ki(e);
  } else
    At[e] != null && (At[e].parentLocale != null ? (At[e] = At[e].parentLocale, e === ki() && ki(e)) : At[e] != null && delete At[e]);
  return At[e];
}
function Ei(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return TA;
  if (!Zt(e)) {
    if (t = rr(e), t)
      return t;
    e = [e];
  }
  return bo(e);
}
function Bo() {
  return kr(At);
}
function rn(e) {
  var t, i = e._a;
  return i && De(e).overflow === -2 && (t = i[gi] < 0 || i[gi] > 11 ? gi : i[Ai] < 1 || i[Ai] > zr(i[kt], i[gi]) ? Ai : i[pt] < 0 || i[pt] > 24 || i[pt] === 24 && (i[Ht] !== 0 || i[pi] !== 0 || i[Ui] !== 0) ? pt : i[Ht] < 0 || i[Ht] > 59 ? Ht : i[pi] < 0 || i[pi] > 59 ? pi : i[Ui] < 0 || i[Ui] > 999 ? Ui : -1, De(e)._overflowDayOfYear && (t < kt || t > Ai) && (t = Ai), De(e)._overflowWeeks && t === -1 && (t = Ya), De(e)._overflowWeekday && t === -1 && (t = Ua), De(e).overflow = t), e;
}
var Oo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Fo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yo = /Z|[+-]\d\d(?::?\d\d)?/, vA = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], yr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Uo = /^\/?Date\((-?\d+)/i, Lo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Po = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function hs(e) {
  var t, i, A = e._i, r = Oo.exec(A) || Fo.exec(A), n, l, f, m, E = vA.length, p = yr.length;
  if (r) {
    for (De(e).iso = !0, t = 0, i = E; t < i; t++)
      if (vA[t][1].exec(r[1])) {
        l = vA[t][0], n = vA[t][2] !== !1;
        break;
      }
    if (l == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, i = p; t < i; t++)
        if (yr[t][1].exec(r[3])) {
          f = (r[2] || " ") + yr[t][0];
          break;
        }
      if (f == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && f != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Yo.exec(r[4]))
        m = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = l + (f || "") + (m || ""), sn(e);
  } else
    e._isValid = !1;
}
function Ko(e, t, i, A, r, n) {
  var l = [
    No(e),
    is.indexOf(t),
    parseInt(i, 10),
    parseInt(A, 10),
    parseInt(r, 10)
  ];
  return n && l.push(parseInt(n, 10)), l;
}
function No(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Jo(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Vo(e, t, i) {
  if (e) {
    var A = os.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (A !== r)
      return De(i).weekdayMismatch = !0, i._isValid = !1, !1;
  }
  return !0;
}
function Wo(e, t, i) {
  if (e)
    return Po[e];
  if (t)
    return 0;
  var A = parseInt(i, 10), r = A % 100, n = (A - r) / 100;
  return n * 60 + r;
}
function cs(e) {
  var t = Lo.exec(Jo(e._i)), i;
  if (t) {
    if (i = Ko(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Vo(t[1], i, e))
      return;
    e._a = i, e._tzm = Wo(t[8], t[9], t[10]), e._d = EA.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), De(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Go(e) {
  var t = Uo.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (hs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (cs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : ue.createFromInputFallback(e);
}
ue.createFromInputFallback = Nt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ji(e, t, i) {
  return e ?? t ?? i;
}
function jo(e) {
  var t = new Date(ue.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function nn(e) {
  var t, i, A = [], r, n, l;
  if (!e._d) {
    for (r = jo(e), e._w && e._a[Ai] == null && e._a[gi] == null && Ho(e), e._dayOfYear != null && (l = ji(e._a[kt], r[kt]), (e._dayOfYear > wA(l) || e._dayOfYear === 0) && (De(e)._overflowDayOfYear = !0), i = EA(l, 0, e._dayOfYear), e._a[gi] = i.getUTCMonth(), e._a[Ai] = i.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = A[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = A[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[pt] === 24 && e._a[Ht] === 0 && e._a[pi] === 0 && e._a[Ui] === 0 && (e._nextDay = !0, e._a[pt] = 0), e._d = (e._useUTC ? EA : eo).apply(
      null,
      A
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[pt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (De(e).weekdayMismatch = !0);
  }
}
function Ho(e) {
  var t, i, A, r, n, l, f, m, E;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, l = 4, i = ji(
    t.GG,
    e._a[kt],
    IA(ze(), 1, 4).year
  ), A = ji(t.W, 1), r = ji(t.E, 1), (r < 1 || r > 7) && (m = !0)) : (n = e._locale._week.dow, l = e._locale._week.doy, E = IA(ze(), n, l), i = ji(t.gg, e._a[kt], E.year), A = ji(t.w, E.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (m = !0)) : t.e != null ? (r = t.e + n, (t.e < 0 || t.e > 6) && (m = !0)) : r = n), A < 1 || A > wi(i, n, l) ? De(e)._overflowWeeks = !0 : m != null ? De(e)._overflowWeekday = !0 : (f = as(i, A, r, n, l), e._a[kt] = f.year, e._dayOfYear = f.dayOfYear);
}
ue.ISO_8601 = function() {
};
ue.RFC_2822 = function() {
};
function sn(e) {
  if (e._f === ue.ISO_8601) {
    hs(e);
    return;
  }
  if (e._f === ue.RFC_2822) {
    cs(e);
    return;
  }
  e._a = [], De(e).empty = !0;
  var t = "" + e._i, i, A, r, n, l, f = t.length, m = 0, E, p;
  for (r = Hn(e._f, e._locale).match(Gr) || [], p = r.length, i = 0; i < p; i++)
    n = r[i], A = (t.match(Ba(n, e)) || [])[0], A && (l = t.substr(0, t.indexOf(A)), l.length > 0 && De(e).unusedInput.push(l), t = t.slice(
      t.indexOf(A) + A.length
    ), m += A.length), Xi[n] ? (A ? De(e).empty = !1 : De(e).unusedTokens.push(n), Fa(n, A, e)) : e._strict && !A && De(e).unusedTokens.push(n);
  De(e).charsLeftOver = f - m, t.length > 0 && De(e).unusedInput.push(t), e._a[pt] <= 12 && De(e).bigHour === !0 && e._a[pt] > 0 && (De(e).bigHour = void 0), De(e).parsedDateParts = e._a.slice(0), De(e).meridiem = e._meridiem, e._a[pt] = Xo(
    e._locale,
    e._a[pt],
    e._meridiem
  ), E = De(e).era, E !== null && (e._a[kt] = e._locale.erasConvertYear(E, e._a[kt])), nn(e), rn(e);
}
function Xo(e, t, i) {
  var A;
  return i == null ? t : e.meridiemHour != null ? e.meridiemHour(t, i) : (e.isPM != null && (A = e.isPM(i), A && t < 12 && (t += 12), !A && t === 12 && (t = 0)), t);
}
function Zo(e) {
  var t, i, A, r, n, l, f = !1, m = e._f.length;
  if (m === 0) {
    De(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < m; r++)
    n = 0, l = !1, t = Vr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], sn(t), Jr(t) && (l = !0), n += De(t).charsLeftOver, n += De(t).unusedTokens.length * 10, De(t).score = n, f ? n < A && (A = n, i = t) : (A == null || n < A || l) && (A = n, i = t, l && (f = !0));
  Mi(e, i || t);
}
function zo(e) {
  if (!e._d) {
    var t = jr(e._i), i = t.day === void 0 ? t.date : t.day;
    e._a = Wn(
      [t.year, t.month, i, t.hour, t.minute, t.second, t.millisecond],
      function(A) {
        return A && parseInt(A, 10);
      }
    ), nn(e);
  }
}
function $o(e) {
  var t = new SA(rn(ds(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ds(e) {
  var t = e._i, i = e._f;
  return e._locale = e._locale || Ei(e._l), t === null || i === void 0 && t === "" ? ZA({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), zt(t) ? new SA(rn(t)) : (RA(t) ? e._d = t : Zt(i) ? Zo(e) : i ? sn(e) : el(e), Jr(e) || (e._d = null), e));
}
function el(e) {
  var t = e._i;
  Ot(t) ? e._d = new Date(ue.now()) : RA(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Go(e) : Zt(t) ? (e._a = Wn(t.slice(0), function(i) {
    return parseInt(i, 10);
  }), nn(e)) : Pi(t) ? zo(e) : Ci(t) ? e._d = new Date(t) : ue.createFromInputFallback(e);
}
function ms(e, t, i, A, r) {
  var n = {};
  return (t === !0 || t === !1) && (A = t, t = void 0), (i === !0 || i === !1) && (A = i, i = void 0), (Pi(e) && Nr(e) || Zt(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = r, n._l = i, n._i = e, n._f = t, n._strict = A, $o(n);
}
function ze(e, t, i, A) {
  return ms(e, t, i, A, !1);
}
var tl = Nt(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ze.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : ZA();
  }
), il = Nt(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ze.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : ZA();
  }
);
function gs(e, t) {
  var i, A;
  if (t.length === 1 && Zt(t[0]) && (t = t[0]), !t.length)
    return ze();
  for (i = t[0], A = 1; A < t.length; ++A)
    (!t[A].isValid() || t[A][e](i)) && (i = t[A]);
  return i;
}
function Al() {
  var e = [].slice.call(arguments, 0);
  return gs("isBefore", e);
}
function rl() {
  var e = [].slice.call(arguments, 0);
  return gs("isAfter", e);
}
var nl = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, dA = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function sl(e) {
  var t, i = !1, A, r = dA.length;
  for (t in e)
    if (Pe(e, t) && !(ht.call(dA, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (A = 0; A < r; ++A)
    if (e[dA[A]]) {
      if (i)
        return !1;
      parseFloat(e[dA[A]]) !== Qe(e[dA[A]]) && (i = !0);
    }
  return !0;
}
function al() {
  return this._isValid;
}
function ol() {
  return $t(NaN);
}
function nr(e) {
  var t = jr(e), i = t.year || 0, A = t.quarter || 0, r = t.month || 0, n = t.week || t.isoWeek || 0, l = t.day || 0, f = t.hour || 0, m = t.minute || 0, E = t.second || 0, p = t.millisecond || 0;
  this._isValid = sl(t), this._milliseconds = +p + E * 1e3 + // 1000
  m * 6e4 + // 1000 * 60
  f * 1e3 * 60 * 60, this._days = +l + n * 7, this._months = +r + A * 3 + i * 12, this._data = {}, this._locale = Ei(), this._bubble();
}
function UA(e) {
  return e instanceof nr;
}
function br(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function ll(e, t, i) {
  var A = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), n = 0, l;
  for (l = 0; l < A; l++)
    Qe(e[l]) !== Qe(t[l]) && n++;
  return n + r;
}
function ps(e, t) {
  ye(e, 0, 0, function() {
    var i = this.utcOffset(), A = "+";
    return i < 0 && (i = -i, A = "-"), A + ri(~~(i / 60), 2) + t + ri(~~i % 60, 2);
  });
}
ps("Z", ":");
ps("ZZ", "");
me("Z", ir);
me("ZZ", ir);
je(["Z", "ZZ"], function(e, t, i) {
  i._useUTC = !0, i._tzm = an(ir, e);
});
var ul = /([\+\-]|\d\d)/gi;
function an(e, t) {
  var i = (t || "").match(e), A, r, n;
  return i === null ? null : (A = i[i.length - 1] || [], r = (A + "").match(ul) || ["-", 0, 0], n = +(r[1] * 60) + Qe(r[2]), n === 0 ? 0 : r[0] === "+" ? n : -n);
}
function on(e, t) {
  var i, A;
  return t._isUTC ? (i = t.clone(), A = (zt(e) || RA(e) ? e.valueOf() : ze(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + A), ue.updateOffset(i, !1), i) : ze(e).local();
}
function vr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
ue.updateOffset = function() {
};
function fl(e, t, i) {
  var A = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = an(ir, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !i && (e = e * 60);
    return !this._isUTC && t && (r = vr(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), A !== e && (!t || this._changeInProgress ? Cs(
      this,
      $t(e - A, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ue.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? A : vr(this);
}
function hl(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function cl(e) {
  return this.utcOffset(0, e);
}
function dl(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(vr(this), "m")), this;
}
function ml() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = an(va, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function gl(e) {
  return this.isValid() ? (e = e ? ze(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function pl() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function yl() {
  if (!Ot(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Vr(e, this), e = ds(e), e._a ? (t = e._isUTC ? ni(e._a) : ze(e._a), this._isDSTShifted = this.isValid() && ll(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function wl() {
  return this.isValid() ? !this._isUTC : !1;
}
function Cl() {
  return this.isValid() ? this._isUTC : !1;
}
function ys() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var El = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Il = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function $t(e, t) {
  var i = e, A = null, r, n, l;
  return UA(e) ? i = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ci(e) || !isNaN(+e) ? (i = {}, t ? i[t] = +e : i.milliseconds = +e) : (A = El.exec(e)) ? (r = A[1] === "-" ? -1 : 1, i = {
    y: 0,
    d: Qe(A[Ai]) * r,
    h: Qe(A[pt]) * r,
    m: Qe(A[Ht]) * r,
    s: Qe(A[pi]) * r,
    ms: Qe(br(A[Ui] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (A = Il.exec(e)) ? (r = A[1] === "-" ? -1 : 1, i = {
    y: Qi(A[2], r),
    M: Qi(A[3], r),
    w: Qi(A[4], r),
    d: Qi(A[5], r),
    h: Qi(A[6], r),
    m: Qi(A[7], r),
    s: Qi(A[8], r)
  }) : i == null ? i = {} : typeof i == "object" && ("from" in i || "to" in i) && (l = Tl(
    ze(i.from),
    ze(i.to)
  ), i = {}, i.ms = l.milliseconds, i.M = l.months), n = new nr(i), UA(e) && Pe(e, "_locale") && (n._locale = e._locale), UA(e) && Pe(e, "_isValid") && (n._isValid = e._isValid), n;
}
$t.fn = nr.prototype;
$t.invalid = ol;
function Qi(e, t) {
  var i = e && parseFloat(e.replace(",", "."));
  return (isNaN(i) ? 0 : i) * t;
}
function xn(e, t) {
  var i = {};
  return i.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +e.clone().add(i.months, "M"), i;
}
function Tl(e, t) {
  var i;
  return e.isValid() && t.isValid() ? (t = on(t, e), e.isBefore(t) ? i = xn(e, t) : (i = xn(t, e), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : { milliseconds: 0, months: 0 };
}
function ws(e, t) {
  return function(i, A) {
    var r, n;
    return A !== null && !isNaN(+A) && (jn(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = i, i = A, A = n), r = $t(i, A), Cs(this, r, e), this;
  };
}
function Cs(e, t, i, A) {
  var r = t._milliseconds, n = br(t._days), l = br(t._months);
  e.isValid() && (A = A ?? !0, l && rs(e, CA(e, "Month") + l * i), n && ts(e, "Date", CA(e, "Date") + n * i), r && e._d.setTime(e._d.valueOf() + r * i), A && ue.updateOffset(e, n || l));
}
var xl = ws(1, "add"), Rl = ws(-1, "subtract");
function Es(e) {
  return typeof e == "string" || e instanceof String;
}
function Sl(e) {
  return zt(e) || RA(e) || Es(e) || Ci(e) || Ml(e) || _l(e) || e === null || e === void 0;
}
function _l(e) {
  var t = Pi(e) && !Nr(e), i = !1, A = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, n, l = A.length;
  for (r = 0; r < l; r += 1)
    n = A[r], i = i || Pe(e, n);
  return t && i;
}
function Ml(e) {
  var t = Zt(e), i = !1;
  return t && (i = e.filter(function(A) {
    return !Ci(A) && Es(e);
  }).length === 0), t && i;
}
function ql(e) {
  var t = Pi(e) && !Nr(e), i = !1, A = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, n;
  for (r = 0; r < A.length; r += 1)
    n = A[r], i = i || Pe(e, n);
  return t && i;
}
function kl(e, t) {
  var i = e.diff(t, "days", !0);
  return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
}
function Dl(e, t) {
  arguments.length === 1 && (arguments[0] ? Sl(arguments[0]) ? (e = arguments[0], t = void 0) : ql(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var i = e || ze(), A = on(i, this).startOf("day"), r = ue.calendarFormat(this, A) || "sameElse", n = t && (si(t[r]) ? t[r].call(this, i) : t[r]);
  return this.format(
    n || this.localeData().calendar(r, this, ze(i))
  );
}
function bl() {
  return new SA(this);
}
function vl(e, t) {
  var i = zt(e) ? e : ze(e);
  return this.isValid() && i.isValid() ? (t = Jt(t) || "millisecond", t === "millisecond" ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Ql(e, t) {
  var i = zt(e) ? e : ze(e);
  return this.isValid() && i.isValid() ? (t = Jt(t) || "millisecond", t === "millisecond" ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf()) : !1;
}
function Bl(e, t, i, A) {
  var r = zt(e) ? e : ze(e), n = zt(t) ? t : ze(t);
  return this.isValid() && r.isValid() && n.isValid() ? (A = A || "()", (A[0] === "(" ? this.isAfter(r, i) : !this.isBefore(r, i)) && (A[1] === ")" ? this.isBefore(n, i) : !this.isAfter(n, i))) : !1;
}
function Ol(e, t) {
  var i = zt(e) ? e : ze(e), A;
  return this.isValid() && i.isValid() ? (t = Jt(t) || "millisecond", t === "millisecond" ? this.valueOf() === i.valueOf() : (A = i.valueOf(), this.clone().startOf(t).valueOf() <= A && A <= this.clone().endOf(t).valueOf())) : !1;
}
function Fl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Yl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ul(e, t, i) {
  var A, r, n;
  if (!this.isValid())
    return NaN;
  if (A = on(e, this), !A.isValid())
    return NaN;
  switch (r = (A.utcOffset() - this.utcOffset()) * 6e4, t = Jt(t), t) {
    case "year":
      n = LA(this, A) / 12;
      break;
    case "month":
      n = LA(this, A);
      break;
    case "quarter":
      n = LA(this, A) / 3;
      break;
    case "second":
      n = (this - A) / 1e3;
      break;
    case "minute":
      n = (this - A) / 6e4;
      break;
    case "hour":
      n = (this - A) / 36e5;
      break;
    case "day":
      n = (this - A - r) / 864e5;
      break;
    case "week":
      n = (this - A - r) / 6048e5;
      break;
    default:
      n = this - A;
  }
  return i ? n : Pt(n);
}
function LA(e, t) {
  if (e.date() < t.date())
    return -LA(t, e);
  var i = (t.year() - e.year()) * 12 + (t.month() - e.month()), A = e.clone().add(i, "months"), r, n;
  return t - A < 0 ? (r = e.clone().add(i - 1, "months"), n = (t - A) / (A - r)) : (r = e.clone().add(i + 1, "months"), n = (t - A) / (r - A)), -(i + n) || 0;
}
ue.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ue.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Ll() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Pl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, i = t ? this.clone().utc() : this;
  return i.year() < 0 || i.year() > 9999 ? YA(
    i,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : si(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", YA(i, "Z")) : YA(
    i,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Kl() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", i, A, r, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), i = "[" + e + '("]', A = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(i + A + r + n);
}
function Nl(e) {
  e || (e = this.isUtc() ? ue.defaultFormatUtc : ue.defaultFormat);
  var t = YA(this, e);
  return this.localeData().postformat(t);
}
function Jl(e, t) {
  return this.isValid() && (zt(e) && e.isValid() || ze(e).isValid()) ? $t({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Vl(e) {
  return this.from(ze(), e);
}
function Wl(e, t) {
  return this.isValid() && (zt(e) && e.isValid() || ze(e).isValid()) ? $t({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Gl(e) {
  return this.to(ze(), e);
}
function Is(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Ei(e), t != null && (this._locale = t), this);
}
var Ts = Nt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function xs() {
  return this._locale;
}
var VA = 1e3, Zi = 60 * VA, WA = 60 * Zi, Rs = (365 * 400 + 97) * 24 * WA;
function zi(e, t) {
  return (e % t + t) % t;
}
function Ss(e, t, i) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, i) - Rs : new Date(e, t, i).valueOf();
}
function _s(e, t, i) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, i) - Rs : Date.UTC(e, t, i);
}
function jl(e) {
  var t, i;
  if (e = Jt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (i = this._isUTC ? _s : Ss, e) {
    case "year":
      t = i(this.year(), 0, 1);
      break;
    case "quarter":
      t = i(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = i(this.year(), this.month(), 1);
      break;
    case "week":
      t = i(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = i(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = i(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= zi(
        t + (this._isUTC ? 0 : this.utcOffset() * Zi),
        WA
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= zi(t, Zi);
      break;
    case "second":
      t = this._d.valueOf(), t -= zi(t, VA);
      break;
  }
  return this._d.setTime(t), ue.updateOffset(this, !0), this;
}
function Hl(e) {
  var t, i;
  if (e = Jt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (i = this._isUTC ? _s : Ss, e) {
    case "year":
      t = i(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = i(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = i(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = i(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = i(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = i(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += WA - zi(
        t + (this._isUTC ? 0 : this.utcOffset() * Zi),
        WA
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Zi - zi(t, Zi) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += VA - zi(t, VA) - 1;
      break;
  }
  return this._d.setTime(t), ue.updateOffset(this, !0), this;
}
function Xl() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Zl() {
  return Math.floor(this.valueOf() / 1e3);
}
function zl() {
  return new Date(this.valueOf());
}
function $l() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function eu() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function tu() {
  return this.isValid() ? this.toISOString() : null;
}
function iu() {
  return Jr(this);
}
function Au() {
  return Mi({}, De(this));
}
function ru() {
  return De(this).overflow;
}
function nu() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
ye("N", 0, 0, "eraAbbr");
ye("NN", 0, 0, "eraAbbr");
ye("NNN", 0, 0, "eraAbbr");
ye("NNNN", 0, 0, "eraName");
ye("NNNNN", 0, 0, "eraNarrow");
ye("y", ["y", 1], "yo", "eraYear");
ye("y", ["yy", 2], 0, "eraYear");
ye("y", ["yyy", 3], 0, "eraYear");
ye("y", ["yyyy", 4], 0, "eraYear");
me("N", ln);
me("NN", ln);
me("NNN", ln);
me("NNNN", gu);
me("NNNNN", pu);
je(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, i, A) {
    var r = i._locale.erasParse(e, A, i._strict);
    r ? De(i).era = r : De(i).invalidEra = e;
  }
);
me("y", eA);
me("yy", eA);
me("yyy", eA);
me("yyyy", eA);
me("yo", yu);
je(["y", "yy", "yyy", "yyyy"], kt);
je(["yo"], function(e, t, i, A) {
  var r;
  i._locale._eraYearOrdinalRegex && (r = e.match(i._locale._eraYearOrdinalRegex)), i._locale.eraYearOrdinalParse ? t[kt] = i._locale.eraYearOrdinalParse(e, r) : t[kt] = parseInt(e, 10);
});
function su(e, t) {
  var i, A, r, n = this._eras || Ei("en")._eras;
  for (i = 0, A = n.length; i < A; ++i) {
    switch (typeof n[i].since) {
      case "string":
        r = ue(n[i].since).startOf("day"), n[i].since = r.valueOf();
        break;
    }
    switch (typeof n[i].until) {
      case "undefined":
        n[i].until = 1 / 0;
        break;
      case "string":
        r = ue(n[i].until).startOf("day").valueOf(), n[i].until = r.valueOf();
        break;
    }
  }
  return n;
}
function au(e, t, i) {
  var A, r, n = this.eras(), l, f, m;
  for (e = e.toUpperCase(), A = 0, r = n.length; A < r; ++A)
    if (l = n[A].name.toUpperCase(), f = n[A].abbr.toUpperCase(), m = n[A].narrow.toUpperCase(), i)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (f === e)
            return n[A];
          break;
        case "NNNN":
          if (l === e)
            return n[A];
          break;
        case "NNNNN":
          if (m === e)
            return n[A];
          break;
      }
    else if ([l, f, m].indexOf(e) >= 0)
      return n[A];
}
function ou(e, t) {
  var i = e.since <= e.until ? 1 : -1;
  return t === void 0 ? ue(e.since).year() : ue(e.since).year() + (t - e.offset) * i;
}
function lu() {
  var e, t, i, A = this.localeData().eras();
  for (e = 0, t = A.length; e < t; ++e)
    if (i = this.clone().startOf("day").valueOf(), A[e].since <= i && i <= A[e].until || A[e].until <= i && i <= A[e].since)
      return A[e].name;
  return "";
}
function uu() {
  var e, t, i, A = this.localeData().eras();
  for (e = 0, t = A.length; e < t; ++e)
    if (i = this.clone().startOf("day").valueOf(), A[e].since <= i && i <= A[e].until || A[e].until <= i && i <= A[e].since)
      return A[e].narrow;
  return "";
}
function fu() {
  var e, t, i, A = this.localeData().eras();
  for (e = 0, t = A.length; e < t; ++e)
    if (i = this.clone().startOf("day").valueOf(), A[e].since <= i && i <= A[e].until || A[e].until <= i && i <= A[e].since)
      return A[e].abbr;
  return "";
}
function hu() {
  var e, t, i, A, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (i = r[e].since <= r[e].until ? 1 : -1, A = this.clone().startOf("day").valueOf(), r[e].since <= A && A <= r[e].until || r[e].until <= A && A <= r[e].since)
      return (this.year() - ue(r[e].since).year()) * i + r[e].offset;
  return this.year();
}
function cu(e) {
  return Pe(this, "_erasNameRegex") || un.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function du(e) {
  return Pe(this, "_erasAbbrRegex") || un.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function mu(e) {
  return Pe(this, "_erasNarrowRegex") || un.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ln(e, t) {
  return t.erasAbbrRegex(e);
}
function gu(e, t) {
  return t.erasNameRegex(e);
}
function pu(e, t) {
  return t.erasNarrowRegex(e);
}
function yu(e, t) {
  return t._eraYearOrdinalRegex || eA;
}
function un() {
  var e = [], t = [], i = [], A = [], r, n, l, f, m, E = this.eras();
  for (r = 0, n = E.length; r < n; ++r)
    l = yi(E[r].name), f = yi(E[r].abbr), m = yi(E[r].narrow), t.push(l), e.push(f), i.push(m), A.push(l), A.push(f), A.push(m);
  this._erasRegex = new RegExp("^(" + A.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + i.join("|") + ")",
    "i"
  );
}
ye(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
ye(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function sr(e, t) {
  ye(0, [e, e.length], 0, t);
}
sr("gggg", "weekYear");
sr("ggggg", "weekYear");
sr("GGGG", "isoWeekYear");
sr("GGGGG", "isoWeekYear");
me("G", tr);
me("g", tr);
me("GG", $e, Ut);
me("gg", $e, Ut);
me("GGGG", Xr, Hr);
me("gggg", Xr, Hr);
me("GGGGG", er, zA);
me("ggggg", er, zA);
MA(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, i, A) {
    t[A.substr(0, 2)] = Qe(e);
  }
);
MA(["gg", "GG"], function(e, t, i, A) {
  t[A] = ue.parseTwoDigitYear(e);
});
function wu(e) {
  return Ms.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Cu(e) {
  return Ms.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Eu() {
  return wi(this.year(), 1, 4);
}
function Iu() {
  return wi(this.isoWeekYear(), 1, 4);
}
function Tu() {
  var e = this.localeData()._week;
  return wi(this.year(), e.dow, e.doy);
}
function xu() {
  var e = this.localeData()._week;
  return wi(this.weekYear(), e.dow, e.doy);
}
function Ms(e, t, i, A, r) {
  var n;
  return e == null ? IA(this, A, r).year : (n = wi(e, A, r), t > n && (t = n), Ru.call(this, e, t, i, A, r));
}
function Ru(e, t, i, A, r) {
  var n = as(e, t, i, A, r), l = EA(n.year, 0, n.dayOfYear);
  return this.year(l.getUTCFullYear()), this.month(l.getUTCMonth()), this.date(l.getUTCDate()), this;
}
ye("Q", 0, "Qo", "quarter");
me("Q", Xn);
je("Q", function(e, t) {
  t[gi] = (Qe(e) - 1) * 3;
});
function Su(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
ye("D", ["DD", 2], "Do", "date");
me("D", $e, tA);
me("DD", $e, Ut);
me("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
je(["D", "DD"], Ai);
je("Do", function(e, t) {
  t[Ai] = Qe(e.match($e)[0]);
});
var qs = iA("Date", !0);
ye("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
me("DDD", $A);
me("DDDD", Zn);
je(["DDD", "DDDD"], function(e, t, i) {
  i._dayOfYear = Qe(e);
});
function _u(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
ye("m", ["mm", 2], 0, "minute");
me("m", $e, Zr);
me("mm", $e, Ut);
je(["m", "mm"], Ht);
var Mu = iA("Minutes", !1);
ye("s", ["ss", 2], 0, "second");
me("s", $e, Zr);
me("ss", $e, Ut);
je(["s", "ss"], pi);
var qu = iA("Seconds", !1);
ye("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
ye(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
ye(0, ["SSS", 3], 0, "millisecond");
ye(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
ye(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
ye(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
ye(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
ye(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
ye(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
me("S", $A, Xn);
me("SS", $A, Ut);
me("SSS", $A, Zn);
var qi, ks;
for (qi = "SSSS"; qi.length <= 9; qi += "S")
  me(qi, eA);
function ku(e, t) {
  t[Ui] = Qe(("0." + e) * 1e3);
}
for (qi = "S"; qi.length <= 9; qi += "S")
  je(qi, ku);
ks = iA("Milliseconds", !1);
ye("z", 0, 0, "zoneAbbr");
ye("zz", 0, 0, "zoneName");
function Du() {
  return this._isUTC ? "UTC" : "";
}
function bu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var te = SA.prototype;
te.add = xl;
te.calendar = Dl;
te.clone = bl;
te.diff = Ul;
te.endOf = Hl;
te.format = Nl;
te.from = Jl;
te.fromNow = Vl;
te.to = Wl;
te.toNow = Gl;
te.get = Pa;
te.invalidAt = ru;
te.isAfter = vl;
te.isBefore = Ql;
te.isBetween = Bl;
te.isSame = Ol;
te.isSameOrAfter = Fl;
te.isSameOrBefore = Yl;
te.isValid = iu;
te.lang = Ts;
te.locale = Is;
te.localeData = xs;
te.max = il;
te.min = tl;
te.parsingFlags = Au;
te.set = Ka;
te.startOf = jl;
te.subtract = Rl;
te.toArray = $l;
te.toObject = eu;
te.toDate = zl;
te.toISOString = Pl;
te.inspect = Kl;
typeof Symbol < "u" && Symbol.for != null && (te[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
te.toJSON = tu;
te.toString = Ll;
te.unix = Zl;
te.valueOf = Xl;
te.creationData = nu;
te.eraName = lu;
te.eraNarrow = uu;
te.eraAbbr = fu;
te.eraYear = hu;
te.year = es;
te.isLeapYear = La;
te.weekYear = wu;
te.isoWeekYear = Cu;
te.quarter = te.quarters = Su;
te.month = ns;
te.daysInMonth = Za;
te.week = te.weeks = no;
te.isoWeek = te.isoWeeks = so;
te.weeksInYear = Tu;
te.weeksInWeekYear = xu;
te.isoWeeksInYear = Eu;
te.isoWeeksInISOWeekYear = Iu;
te.date = qs;
te.day = te.days = Co;
te.weekday = Eo;
te.isoWeekday = Io;
te.dayOfYear = _u;
te.hour = te.hours = qo;
te.minute = te.minutes = Mu;
te.second = te.seconds = qu;
te.millisecond = te.milliseconds = ks;
te.utcOffset = fl;
te.utc = cl;
te.local = dl;
te.parseZone = ml;
te.hasAlignedHourOffset = gl;
te.isDST = pl;
te.isLocal = wl;
te.isUtcOffset = Cl;
te.isUtc = ys;
te.isUTC = ys;
te.zoneAbbr = Du;
te.zoneName = bu;
te.dates = Nt(
  "dates accessor is deprecated. Use date instead.",
  qs
);
te.months = Nt(
  "months accessor is deprecated. Use month instead",
  ns
);
te.years = Nt(
  "years accessor is deprecated. Use year instead",
  es
);
te.zone = Nt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  hl
);
te.isDSTShifted = Nt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  yl
);
function vu(e) {
  return ze(e * 1e3);
}
function Qu() {
  return ze.apply(null, arguments).parseZone();
}
function Ds(e) {
  return e;
}
var Ke = Wr.prototype;
Ke.calendar = ya;
Ke.longDateFormat = Ia;
Ke.invalidDate = xa;
Ke.ordinal = _a;
Ke.preparse = Ds;
Ke.postformat = Ds;
Ke.relativeTime = qa;
Ke.pastFuture = ka;
Ke.set = ga;
Ke.eras = su;
Ke.erasParse = au;
Ke.erasConvertYear = ou;
Ke.erasAbbrRegex = du;
Ke.erasNameRegex = cu;
Ke.erasNarrowRegex = mu;
Ke.months = Ga;
Ke.monthsShort = ja;
Ke.monthsParse = Xa;
Ke.monthsRegex = $a;
Ke.monthsShortRegex = za;
Ke.week = to;
Ke.firstDayOfYear = ro;
Ke.firstDayOfWeek = Ao;
Ke.weekdays = mo;
Ke.weekdaysMin = po;
Ke.weekdaysShort = go;
Ke.weekdaysParse = wo;
Ke.weekdaysRegex = To;
Ke.weekdaysShortRegex = xo;
Ke.weekdaysMinRegex = Ro;
Ke.isPM = _o;
Ke.meridiem = ko;
function GA(e, t, i, A) {
  var r = Ei(), n = ni().set(A, t);
  return r[i](n, e);
}
function bs(e, t, i) {
  if (Ci(e) && (t = e, e = void 0), e = e || "", t != null)
    return GA(e, t, i, "month");
  var A, r = [];
  for (A = 0; A < 12; A++)
    r[A] = GA(e, A, i, "month");
  return r;
}
function fn(e, t, i, A) {
  typeof e == "boolean" ? (Ci(t) && (i = t, t = void 0), t = t || "") : (t = e, i = t, e = !1, Ci(t) && (i = t, t = void 0), t = t || "");
  var r = Ei(), n = e ? r._week.dow : 0, l, f = [];
  if (i != null)
    return GA(t, (i + n) % 7, A, "day");
  for (l = 0; l < 7; l++)
    f[l] = GA(t, (l + n) % 7, A, "day");
  return f;
}
function Bu(e, t) {
  return bs(e, t, "months");
}
function Ou(e, t) {
  return bs(e, t, "monthsShort");
}
function Fu(e, t, i) {
  return fn(e, t, i, "weekdays");
}
function Yu(e, t, i) {
  return fn(e, t, i, "weekdaysShort");
}
function Uu(e, t, i) {
  return fn(e, t, i, "weekdaysMin");
}
ki("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, i = Qe(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + i;
  }
});
ue.lang = Nt(
  "moment.lang is deprecated. Use moment.locale instead.",
  ki
);
ue.langData = Nt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ei
);
var di = Math.abs;
function Lu() {
  var e = this._data;
  return this._milliseconds = di(this._milliseconds), this._days = di(this._days), this._months = di(this._months), e.milliseconds = di(e.milliseconds), e.seconds = di(e.seconds), e.minutes = di(e.minutes), e.hours = di(e.hours), e.months = di(e.months), e.years = di(e.years), this;
}
function vs(e, t, i, A) {
  var r = $t(t, i);
  return e._milliseconds += A * r._milliseconds, e._days += A * r._days, e._months += A * r._months, e._bubble();
}
function Pu(e, t) {
  return vs(this, e, t, 1);
}
function Ku(e, t) {
  return vs(this, e, t, -1);
}
function Rn(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Nu() {
  var e = this._milliseconds, t = this._days, i = this._months, A = this._data, r, n, l, f, m;
  return e >= 0 && t >= 0 && i >= 0 || e <= 0 && t <= 0 && i <= 0 || (e += Rn(Qr(i) + t) * 864e5, t = 0, i = 0), A.milliseconds = e % 1e3, r = Pt(e / 1e3), A.seconds = r % 60, n = Pt(r / 60), A.minutes = n % 60, l = Pt(n / 60), A.hours = l % 24, t += Pt(l / 24), m = Pt(Qs(t)), i += m, t -= Rn(Qr(m)), f = Pt(i / 12), i %= 12, A.days = t, A.months = i, A.years = f, this;
}
function Qs(e) {
  return e * 4800 / 146097;
}
function Qr(e) {
  return e * 146097 / 4800;
}
function Ju(e) {
  if (!this.isValid())
    return NaN;
  var t, i, A = this._milliseconds;
  if (e = Jt(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + A / 864e5, i = this._months + Qs(t), e) {
      case "month":
        return i;
      case "quarter":
        return i / 3;
      case "year":
        return i / 12;
    }
  else
    switch (t = this._days + Math.round(Qr(this._months)), e) {
      case "week":
        return t / 7 + A / 6048e5;
      case "day":
        return t + A / 864e5;
      case "hour":
        return t * 24 + A / 36e5;
      case "minute":
        return t * 1440 + A / 6e4;
      case "second":
        return t * 86400 + A / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + A;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ii(e) {
  return function() {
    return this.as(e);
  };
}
var Bs = Ii("ms"), Vu = Ii("s"), Wu = Ii("m"), Gu = Ii("h"), ju = Ii("d"), Hu = Ii("w"), Xu = Ii("M"), Zu = Ii("Q"), zu = Ii("y"), $u = Bs;
function ef() {
  return $t(this);
}
function tf(e) {
  return e = Jt(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ji(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Af = Ji("milliseconds"), rf = Ji("seconds"), nf = Ji("minutes"), sf = Ji("hours"), af = Ji("days"), of = Ji("months"), lf = Ji("years");
function uf() {
  return Pt(this.days() / 7);
}
var mi = Math.round, Hi = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function ff(e, t, i, A, r) {
  return r.relativeTime(t || 1, !!i, e, A);
}
function hf(e, t, i, A) {
  var r = $t(e).abs(), n = mi(r.as("s")), l = mi(r.as("m")), f = mi(r.as("h")), m = mi(r.as("d")), E = mi(r.as("M")), p = mi(r.as("w")), h = mi(r.as("y")), D = n <= i.ss && ["s", n] || n < i.s && ["ss", n] || l <= 1 && ["m"] || l < i.m && ["mm", l] || f <= 1 && ["h"] || f < i.h && ["hh", f] || m <= 1 && ["d"] || m < i.d && ["dd", m];
  return i.w != null && (D = D || p <= 1 && ["w"] || p < i.w && ["ww", p]), D = D || E <= 1 && ["M"] || E < i.M && ["MM", E] || h <= 1 && ["y"] || ["yy", h], D[2] = t, D[3] = +e > 0, D[4] = A, ff.apply(null, D);
}
function cf(e) {
  return e === void 0 ? mi : typeof e == "function" ? (mi = e, !0) : !1;
}
function df(e, t) {
  return Hi[e] === void 0 ? !1 : t === void 0 ? Hi[e] : (Hi[e] = t, e === "s" && (Hi.ss = t - 1), !0);
}
function mf(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = !1, A = Hi, r, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (i = e), typeof t == "object" && (A = Object.assign({}, Hi, t), t.s != null && t.ss == null && (A.ss = t.s - 1)), r = this.localeData(), n = hf(this, !i, A, r), i && (n = r.pastFuture(+this, n)), r.postformat(n);
}
var wr = Math.abs;
function Gi(e) {
  return (e > 0) - (e < 0) || +e;
}
function ar() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = wr(this._milliseconds) / 1e3, t = wr(this._days), i = wr(this._months), A, r, n, l, f = this.asSeconds(), m, E, p, h;
  return f ? (A = Pt(e / 60), r = Pt(A / 60), e %= 60, A %= 60, n = Pt(i / 12), i %= 12, l = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", m = f < 0 ? "-" : "", E = Gi(this._months) !== Gi(f) ? "-" : "", p = Gi(this._days) !== Gi(f) ? "-" : "", h = Gi(this._milliseconds) !== Gi(f) ? "-" : "", m + "P" + (n ? E + n + "Y" : "") + (i ? E + i + "M" : "") + (t ? p + t + "D" : "") + (r || A || e ? "T" : "") + (r ? h + r + "H" : "") + (A ? h + A + "M" : "") + (e ? h + l + "S" : "")) : "P0D";
}
var Ue = nr.prototype;
Ue.isValid = al;
Ue.abs = Lu;
Ue.add = Pu;
Ue.subtract = Ku;
Ue.as = Ju;
Ue.asMilliseconds = Bs;
Ue.asSeconds = Vu;
Ue.asMinutes = Wu;
Ue.asHours = Gu;
Ue.asDays = ju;
Ue.asWeeks = Hu;
Ue.asMonths = Xu;
Ue.asQuarters = Zu;
Ue.asYears = zu;
Ue.valueOf = $u;
Ue._bubble = Nu;
Ue.clone = ef;
Ue.get = tf;
Ue.milliseconds = Af;
Ue.seconds = rf;
Ue.minutes = nf;
Ue.hours = sf;
Ue.days = af;
Ue.weeks = uf;
Ue.months = of;
Ue.years = lf;
Ue.humanize = mf;
Ue.toISOString = ar;
Ue.toString = ar;
Ue.toJSON = ar;
Ue.locale = Is;
Ue.localeData = xs;
Ue.toIsoString = Nt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ar
);
Ue.lang = Ts;
ye("X", 0, 0, "unix");
ye("x", 0, 0, "valueOf");
me("x", tr);
me("X", Qa);
je("X", function(e, t, i) {
  i._d = new Date(parseFloat(e) * 1e3);
});
je("x", function(e, t, i) {
  i._d = new Date(Qe(e));
});
//! moment.js
ue.version = "2.30.1";
da(ze);
ue.fn = te;
ue.min = Al;
ue.max = rl;
ue.now = nl;
ue.utc = ni;
ue.unix = vu;
ue.months = Bu;
ue.isDate = RA;
ue.locale = ki;
ue.invalid = ZA;
ue.duration = $t;
ue.isMoment = zt;
ue.weekdays = Fu;
ue.parseZone = Qu;
ue.localeData = Ei;
ue.isDuration = UA;
ue.monthsShort = Ou;
ue.weekdaysMin = Uu;
ue.defineLocale = An;
ue.updateLocale = Qo;
ue.locales = Bo;
ue.weekdaysShort = Yu;
ue.normalizeUnits = Jt;
ue.relativeTimeRounding = cf;
ue.relativeTimeThreshold = df;
ue.calendarFormat = kl;
ue.prototype = te;
ue.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const gf = "data:image/png;base64,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AAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAAhCCKAAAAAAAAIYgiAAAAAABACKIIAAAAAAAQgigCAAAAAACEIIoAAAAAAAAhiCIAAAAAAEAIoggAAAAAABCCKAIAAAAAAIQgigAAAAAAACGIIgAAAAAAQAiiCAAAAAAAEIIoAgAAAAAA9F9K6f/oFhq3zB4CcgAAAABJRU5ErkJggg==", pf = "data:image/png;base64,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";
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var lt = typeof window < "u" ? window : typeof module < "u" && module.exports && typeof global < "u" ? global : {}, ke = function(e) {
  var t = e.document, i = e.GreenSockGlobals = e.GreenSockGlobals || e;
  if (i.TweenLite)
    return i.TweenLite;
  var A = function(c) {
    var x = c.split("."), _ = i, C;
    for (C = 0; C < x.length; C++)
      _[x[C]] = _ = _[x[C]] || {};
    return _;
  }, r = A("com.greensock"), n = 1e-8, l = function(c) {
    var x = [], _ = c.length, C;
    for (C = 0; C !== _; x.push(c[C++]))
      ;
    return x;
  }, f = function() {
  }, m = function() {
    var c = Object.prototype.toString, x = c.call([]);
    return function(_) {
      return _ != null && (_ instanceof Array || typeof _ == "object" && !!_.push && c.call(_) === x);
    };
  }(), E, p, h, D, S, q = {}, w = function(c, x, _, C) {
    this.sc = q[c] ? q[c].sc : [], q[c] = this, this.gsClass = null, this.func = _;
    var Y = [];
    this.check = function(P) {
      for (var z = x.length, Z = z, $, he, ce, de; --z > -1; )
        ($ = q[x[z]] || new w(x[z], [])).gsClass ? (Y[z] = $.gsClass, Z--) : P && $.sc.push(this);
      if (Z === 0 && _)
        for (he = ("com.greensock." + c).split("."), ce = he.pop(), de = A(he.join("."))[ce] = this.gsClass = _.apply(_, Y), C && (i[ce] = de), z = 0; z < this.sc.length; z++)
          this.sc[z].check();
    }, this.check(!0);
  }, s = e._gsDefine = function(c, x, _, C) {
    return new w(c, x, _, C);
  }, a = r._class = function(c, x, _) {
    return x = x || function() {
    }, s(c, [], function() {
      return x;
    }, _), x;
  };
  s.globals = i;
  var I = [0, 0, 1, 1], g = a("easing.Ease", function(c, x, _, C) {
    this._func = c, this._type = _ || 0, this._power = C || 0, this._params = x ? I.concat(x) : I;
  }, !0), B = g.map = {}, M = g.register = function(c, x, _, C) {
    for (var Y = x.split(","), P = Y.length, z = (_ || "easeIn,easeOut,easeInOut").split(","), Z, $, he, ce; --P > -1; )
      for ($ = Y[P], Z = C ? a("easing." + $, null, !0) : r.easing[$] || {}, he = z.length; --he > -1; )
        ce = z[he], B[$ + "." + ce] = B[ce + $] = Z[ce] = c.getRatio ? c : c[ce] || new c();
  };
  for (h = g.prototype, h._calcEnd = !1, h.getRatio = function(c) {
    if (this._func)
      return this._params[0] = c, this._func.apply(null, this._params);
    var x = this._type, _ = this._power, C = x === 1 ? 1 - c : x === 2 ? c : c < 0.5 ? c * 2 : (1 - c) * 2;
    return _ === 1 ? C *= C : _ === 2 ? C *= C * C : _ === 3 ? C *= C * C * C : _ === 4 && (C *= C * C * C * C), x === 1 ? 1 - C : x === 2 ? C : c < 0.5 ? C / 2 : 1 - C / 2;
  }, E = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], p = E.length; --p > -1; )
    h = E[p] + ",Power" + p, M(new g(null, null, 1, p), h, "easeOut", !0), M(new g(null, null, 2, p), h, "easeIn" + (p === 0 ? ",easeNone" : "")), M(new g(null, null, 3, p), h, "easeInOut");
  B.linear = r.easing.Linear.easeIn, B.swing = r.easing.Quad.easeInOut;
  var L = a("events.EventDispatcher", function(c) {
    this._listeners = {}, this._eventTarget = c || this;
  });
  h = L.prototype, h.addEventListener = function(c, x, _, C, Y) {
    Y = Y || 0;
    var P = this._listeners[c], z = 0, Z, $;
    for (this === D && !S && D.wake(), P == null && (this._listeners[c] = P = []), $ = P.length; --$ > -1; )
      Z = P[$], Z.c === x && Z.s === _ ? P.splice($, 1) : z === 0 && Z.pr < Y && (z = $ + 1);
    P.splice(z, 0, { c: x, s: _, up: C, pr: Y });
  }, h.removeEventListener = function(c, x) {
    var _ = this._listeners[c], C;
    if (_) {
      for (C = _.length; --C > -1; )
        if (_[C].c === x) {
          _.splice(C, 1);
          return;
        }
    }
  }, h.dispatchEvent = function(c) {
    var x = this._listeners[c], _, C, Y;
    if (x)
      for (_ = x.length, _ > 1 && (x = x.slice(0)), C = this._eventTarget; --_ > -1; )
        Y = x[_], Y && (Y.up ? Y.c.call(Y.s || C, { type: c, target: C }) : Y.c.call(Y.s || C));
  };
  var N = e.requestAnimationFrame, W = e.cancelAnimationFrame, F = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  }, ae = F();
  for (E = ["ms", "moz", "webkit", "o"], p = E.length; --p > -1 && !N; )
    N = e[E[p] + "RequestAnimationFrame"], W = e[E[p] + "CancelAnimationFrame"] || e[E[p] + "CancelRequestAnimationFrame"];
  a("Ticker", function(c, x) {
    var _ = this, C = F(), Y = x !== !1 && N ? "auto" : !1, P = 500, z = 33, Z = "tick", $, he, ce, de, Ne, pe = function(Je) {
      var Yt = F() - ae, Vt, tt;
      Yt > P && (C += Yt - z), ae += Yt, _.time = (ae - C) / 1e3, Vt = _.time - Ne, (!$ || Vt > 0 || Je === !0) && (_.frame++, Ne += Vt + (Vt >= de ? 4e-3 : de - Vt), tt = !0), Je !== !0 && (ce = he(pe)), tt && _.dispatchEvent(Z);
    };
    L.call(_), _.time = _.frame = 0, _.tick = function() {
      pe(!0);
    }, _.lagSmoothing = function(Je, Yt) {
      if (!arguments.length)
        return P < 1 / n;
      P = Je || 1 / n, z = Math.min(Yt, P, 0);
    }, _.sleep = function() {
      ce != null && (!Y || !W ? clearTimeout(ce) : W(ce), he = f, ce = null, _ === D && (S = !1));
    }, _.wake = function(Je) {
      ce !== null ? _.sleep() : Je ? C += -ae + (ae = F()) : _.frame > 10 && (ae = F() - P + 5), he = $ === 0 ? f : !Y || !N ? function(Yt) {
        return setTimeout(Yt, (Ne - _.time) * 1e3 + 1 | 0);
      } : N, _ === D && (S = !0), pe(2);
    }, _.fps = function(Je) {
      if (!arguments.length)
        return $;
      $ = Je, de = 1 / ($ || 60), Ne = this.time + de, _.wake();
    }, _.useRAF = function(Je) {
      if (!arguments.length)
        return Y;
      _.sleep(), Y = Je, _.fps($);
    }, _.fps(c), setTimeout(function() {
      Y === "auto" && _.frame < 5 && (t || {}).visibilityState !== "hidden" && _.useRAF(!1);
    }, 1500);
  }), h = r.Ticker.prototype = new r.events.EventDispatcher(), h.constructor = r.Ticker;
  var G = a("core.Animation", function(c, x) {
    if (this.vars = x = x || {}, this._duration = this._totalDuration = c || 0, this._delay = Number(x.delay) || 0, this._timeScale = 1, this._active = !!x.immediateRender, this.data = x.data, this._reversed = !!x.reversed, !!vt) {
      S || D.wake();
      var _ = this.vars.useFrames ? gt : vt;
      _.add(this, _._time), this.vars.paused && this.paused(!0);
    }
  });
  D = G.ticker = new r.Ticker(), h = G.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
  var ne = function() {
    S && F() - ae > 2e3 && ((t || {}).visibilityState !== "hidden" || !D.lagSmoothing()) && D.wake();
    var c = setTimeout(ne, 2e3);
    c.unref && c.unref();
  };
  ne(), h.play = function(c, x) {
    return c != null && this.seek(c, x), this.reversed(!1).paused(!1);
  }, h.pause = function(c, x) {
    return c != null && this.seek(c, x), this.paused(!0);
  }, h.resume = function(c, x) {
    return c != null && this.seek(c, x), this.paused(!1);
  }, h.seek = function(c, x) {
    return this.totalTime(Number(c), x !== !1);
  }, h.restart = function(c, x) {
    return this.reversed(!1).paused(!1).totalTime(c ? -this._delay : 0, x !== !1, !0);
  }, h.reverse = function(c, x) {
    return c != null && this.seek(c || this.totalDuration(), x), this.reversed(!0).paused(!1);
  }, h.render = function(c, x, _) {
  }, h.invalidate = function() {
    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
  }, h.isActive = function() {
    var c = this._timeline, x = this._startTime, _;
    return !c || !this._gc && !this._paused && c.isActive() && (_ = c.rawTime(!0)) >= x && _ < x + this.totalDuration() / this._timeScale - n;
  }, h._enabled = function(c, x) {
    return S || D.wake(), this._gc = !c, this._active = this.isActive(), x !== !0 && (c && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !c && this.timeline && this._timeline._remove(this, !0)), !1;
  }, h._kill = function(c, x) {
    return this._enabled(!1, !1);
  }, h.kill = function(c, x) {
    return this._kill(c, x), this;
  }, h._uncache = function(c) {
    for (var x = c ? this : this.timeline; x; )
      x._dirty = !0, x = x.timeline;
    return this;
  }, h._swapSelfInParams = function(c) {
    for (var x = c.length, _ = c.concat(); --x > -1; )
      c[x] === "{self}" && (_[x] = this);
    return _;
  }, h._callback = function(c) {
    var x = this.vars, _ = x[c], C = x[c + "Params"], Y = x[c + "Scope"] || x.callbackScope || this, P = C ? C.length : 0;
    switch (P) {
      case 0:
        _.call(Y);
        break;
      case 1:
        _.call(Y, C[0]);
        break;
      case 2:
        _.call(Y, C[0], C[1]);
        break;
      default:
        _.apply(Y, C);
    }
  }, h.eventCallback = function(c, x, _, C) {
    if ((c || "").substr(0, 2) === "on") {
      var Y = this.vars;
      if (arguments.length === 1)
        return Y[c];
      x == null ? delete Y[c] : (Y[c] = x, Y[c + "Params"] = m(_) && _.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(_) : _, Y[c + "Scope"] = C), c === "onUpdate" && (this._onUpdate = x);
    }
    return this;
  }, h.delay = function(c) {
    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + c - this._delay), this._delay = c, this) : this._delay;
  }, h.duration = function(c) {
    return arguments.length ? (this._duration = this._totalDuration = c, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && c !== 0 && this.totalTime(this._totalTime * (c / this._duration), !0), this) : (this._dirty = !1, this._duration);
  }, h.totalDuration = function(c) {
    return this._dirty = !1, arguments.length ? this.duration(c) : this._totalDuration;
  }, h.time = function(c, x) {
    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(c > this._duration ? this._duration : c, x)) : this._time;
  }, h.totalTime = function(c, x, _) {
    if (S || D.wake(), !arguments.length)
      return this._totalTime;
    if (this._timeline) {
      if (c < 0 && !_ && (c += this.totalDuration()), this._timeline.smoothChildTiming) {
        this._dirty && this.totalDuration();
        var C = this._totalDuration, Y = this._timeline;
        if (c > C && !_ && (c = C), this._startTime = (this._paused ? this._pauseTime : Y._time) - (this._reversed ? C - c : c) / this._timeScale, Y._dirty || this._uncache(!1), Y._timeline)
          for (; Y._timeline; )
            Y._timeline._time !== (Y._startTime + Y._totalTime) / Y._timeScale && Y.totalTime(Y._totalTime, !0), Y = Y._timeline;
      }
      this._gc && this._enabled(!0, !1), (this._totalTime !== c || this._duration === 0) && (qe.length && Qt(), this.render(c, x, !1), qe.length && Qt());
    }
    return this;
  }, h.progress = h.totalProgress = function(c, x) {
    var _ = this.duration();
    return arguments.length ? this.totalTime(_ * c, x) : _ ? this._time / _ : this.ratio;
  }, h.startTime = function(c) {
    return arguments.length ? (c !== this._startTime && (this._startTime = c, this.timeline && this.timeline._sortChildren && this.timeline.add(this, c - this._delay)), this) : this._startTime;
  }, h.endTime = function(c) {
    return this._startTime + (c != !1 ? this.totalDuration() : this.duration()) / this._timeScale;
  }, h.timeScale = function(c) {
    if (!arguments.length)
      return this._timeScale;
    var x, _;
    for (c = c || n, this._timeline && this._timeline.smoothChildTiming && (x = this._pauseTime, _ = x || x === 0 ? x : this._timeline.totalTime(), this._startTime = _ - (_ - this._startTime) * this._timeScale / c), this._timeScale = c, _ = this.timeline; _ && _.timeline; )
      _._dirty = !0, _.totalDuration(), _ = _.timeline;
    return this;
  }, h.reversed = function(c) {
    return arguments.length ? (c != this._reversed && (this._reversed = c, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
  }, h.paused = function(c) {
    if (!arguments.length)
      return this._paused;
    var x = this._timeline, _, C;
    return c != this._paused && x && (!S && !c && D.wake(), _ = x.rawTime(), C = _ - this._pauseTime, !c && x.smoothChildTiming && (this._startTime += C, this._uncache(!1)), this._pauseTime = c ? _ : null, this._paused = c, this._active = this.isActive(), !c && C !== 0 && this._initted && this.duration() && (_ = x.smoothChildTiming ? this._totalTime : (_ - this._startTime) / this._timeScale, this.render(_, _ === this._totalTime, !0))), this._gc && !c && this._enabled(!0, !1), this;
  };
  var Ae = a("core.SimpleTimeline", function(c) {
    G.call(this, 0, c), this.autoRemoveChildren = this.smoothChildTiming = !0;
  });
  h = Ae.prototype = new G(), h.constructor = Ae, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(c, x, _, C) {
    var Y, P;
    if (c._startTime = Number(x || 0) + c._delay, c._paused && this !== c._timeline && (c._pauseTime = this.rawTime() - (c._timeline.rawTime() - c._pauseTime)), c.timeline && c.timeline._remove(c, !0), c.timeline = c._timeline = this, c._gc && c._enabled(!0, !0), Y = this._last, this._sortChildren)
      for (P = c._startTime; Y && Y._startTime > P; )
        Y = Y._prev;
    return Y ? (c._next = Y._next, Y._next = c) : (c._next = this._first, this._first = c), c._next ? c._next._prev = c : this._last = c, c._prev = Y, this._recent = c, this._timeline && this._uncache(!0), this;
  }, h._remove = function(c, x) {
    return c.timeline === this && (x || c._enabled(!1, !0), c._prev ? c._prev._next = c._next : this._first === c && (this._first = c._next), c._next ? c._next._prev = c._prev : this._last === c && (this._last = c._prev), c._next = c._prev = c.timeline = null, c === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
  }, h.render = function(c, x, _) {
    var C = this._first, Y;
    for (this._totalTime = this._time = this._rawPrevTime = c; C; )
      Y = C._next, (C._active || c >= C._startTime && !C._paused && !C._gc) && (C._reversed ? C.render((C._dirty ? C.totalDuration() : C._totalDuration) - (c - C._startTime) * C._timeScale, x, _) : C.render((c - C._startTime) * C._timeScale, x, _)), C = Y;
  }, h.rawTime = function() {
    return S || D.wake(), this._totalTime;
  };
  var X = a("TweenLite", function(c, x, _) {
    if (G.call(this, x, _), this.render = X.prototype.render, c == null)
      throw "Cannot tween a null target.";
    this.target = c = typeof c != "string" ? c : X.selector(c) || c;
    var C = c.jquery || c.length && c !== e && c[0] && (c[0] === e || c[0].nodeType && c[0].style && !c.nodeType), Y = this.vars.overwrite, P, z, Z;
    if (this._overwrite = Y = Y == null ? St[X.defaultOverwrite] : typeof Y == "number" ? Y >> 0 : St[Y], (C || c instanceof Array || c.push && m(c)) && typeof c[0] != "number")
      for (this._targets = Z = l(c), this._propLookup = [], this._siblings = [], P = 0; P < Z.length; P++) {
        if (z = Z[P], z) {
          if (typeof z == "string") {
            z = Z[P--] = X.selector(z), typeof z == "string" && Z.splice(P + 1, 1);
            continue;
          } else if (z.length && z !== e && z[0] && (z[0] === e || z[0].nodeType && z[0].style && !z.nodeType)) {
            Z.splice(P--, 1), this._targets = Z = Z.concat(l(z));
            continue;
          }
        } else {
          Z.splice(P--, 1);
          continue;
        }
        this._siblings[P] = Lt(z, this, !1), Y === 1 && this._siblings[P].length > 1 && Be(z, this, null, 1, this._siblings[P]);
      }
    else
      this._propLookup = {}, this._siblings = Lt(c, this, !1), Y === 1 && this._siblings.length > 1 && Be(c, this, null, 1, this._siblings);
    (this.vars.immediateRender || x === 0 && this._delay === 0 && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)));
  }, !0), fe = function(c) {
    return c && c.length && c !== e && c[0] && (c[0] === e || c[0].nodeType && c[0].style && !c.nodeType);
  }, Oe = function(c, x) {
    var _ = {}, C;
    for (C in c)
      !ti[C] && (!(C in x) || C === "transform" || C === "x" || C === "y" || C === "width" || C === "height" || C === "className" || C === "border") && (!yt[C] || yt[C] && yt[C]._autoCSS) && (_[C] = c[C], delete c[C]);
    c.css = _;
  };
  h = X.prototype = new G(), h.constructor = X, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, X.version = "2.1.3", X.defaultEase = h._ease = new g(null, null, 1, 1), X.defaultOverwrite = "auto", X.ticker = D, X.autoSleep = 120, X.lagSmoothing = function(c, x) {
    D.lagSmoothing(c, x);
  }, X.selector = e.$ || e.jQuery || function(c) {
    var x = e.$ || e.jQuery;
    return x ? (X.selector = x, x(c)) : (t || (t = e.document), t ? t.querySelectorAll ? t.querySelectorAll(c) : t.getElementById(c.charAt(0) === "#" ? c.substr(1) : c) : c);
  };
  var qe = [], Xe = {}, Re = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, rt = /[\+-]=-?[\.\d]/, Dt = function(c) {
    for (var x = this._firstPT, _ = 1e-6, C; x; )
      C = x.blob ? c === 1 && this.end != null ? this.end : c ? this.join("") : this.start : x.c * c + x.s, x.m ? C = x.m.call(this._tween, C, this._target || x.t, this._tween) : C < _ && C > -_ && !x.blob && (C = 0), x.f ? x.fp ? x.t[x.p](x.fp, C) : x.t[x.p](C) : x.t[x.p] = C, x = x._next;
  }, et = function(c) {
    return (c * 1e3 | 0) / 1e3 + "";
  }, ai = function(c, x, _, C) {
    var Y = [], P = 0, z = "", Z = 0, $, he, ce, de, Ne, pe, Je;
    for (Y.start = c, Y.end = x, c = Y[0] = c + "", x = Y[1] = x + "", _ && (_(Y), c = Y[0], x = Y[1]), Y.length = 0, $ = c.match(Re) || [], he = x.match(Re) || [], C && (C._next = null, C.blob = 1, Y._firstPT = Y._applyPT = C), Ne = he.length, de = 0; de < Ne; de++)
      Je = he[de], pe = x.substr(P, x.indexOf(Je, P) - P), z += pe || !de ? pe : ",", P += pe.length, Z ? Z = (Z + 1) % 5 : pe.substr(-5) === "rgba(" && (Z = 1), Je === $[de] || $.length <= de ? z += Je : (z && (Y.push(z), z = ""), ce = parseFloat($[de]), Y.push(ce), Y._firstPT = { _next: Y._firstPT, t: Y, p: Y.length - 1, s: ce, c: (Je.charAt(1) === "=" ? parseInt(Je.charAt(0) + "1", 10) * parseFloat(Je.substr(2)) : parseFloat(Je) - ce) || 0, f: 0, m: Z && Z < 4 ? Math.round : et }), P += Je.length;
    return z += x.substr(P), z && Y.push(z), Y.setRatio = Dt, rt.test(x) && (Y.end = null), Y;
  }, Ti = function(c, x, _, C, Y, P, z, Z, $) {
    typeof C == "function" && (C = C($ || 0, c));
    var he = typeof c[x], ce = he !== "function" ? "" : x.indexOf("set") || typeof c["get" + x.substr(3)] != "function" ? x : "get" + x.substr(3), de = _ !== "get" ? _ : ce ? z ? c[ce](z) : c[ce]() : c[x], Ne = typeof C == "string" && C.charAt(1) === "=", pe = { t: c, p: x, s: de, f: he === "function", pg: 0, n: Y || x, m: P ? typeof P == "function" ? P : Math.round : 0, pr: 0, c: Ne ? parseInt(C.charAt(0) + "1", 10) * parseFloat(C.substr(2)) : parseFloat(C) - de || 0 }, Je;
    if ((typeof de != "number" || typeof C != "number" && !Ne) && (z || isNaN(de) || !Ne && isNaN(C) || typeof de == "boolean" || typeof C == "boolean" ? (pe.fp = z, Je = ai(de, Ne ? parseFloat(pe.s) + pe.c + (pe.s + "").replace(/[0-9\-\.]/g, "") : C, Z || X.defaultStringFilter, pe), pe = { t: Je, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: Y || x, pr: 0, m: 0 }) : (pe.s = parseFloat(de), Ne || (pe.c = parseFloat(C) - pe.s || 0))), pe.c)
      return (pe._next = this._firstPT) && (pe._next._prev = pe), this._firstPT = pe, pe;
  }, xi = X._internals = { isArray: m, isSelector: fe, lazyTweens: qe, blobDif: ai }, yt = X._plugins = {}, mt = xi.tweenLookup = {}, oi = 0, ti = xi.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 }, St = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 }, gt = G._rootFramesTimeline = new Ae(), vt = G._rootTimeline = new Ae(), Ri = 30, Qt = xi.lazyRender = function() {
    var c = qe.length, x, _;
    for (Xe = {}, x = 0; x < c; x++)
      _ = qe[x], _ && _._lazy !== !1 && (_.render(_._lazy[0], _._lazy[1], !0), _._lazy = !1);
    qe.length = 0;
  };
  vt._startTime = D.time, gt._startTime = D.frame, vt._active = gt._active = !0, setTimeout(Qt, 1), G._updateRoot = X.render = function() {
    var c, x, _;
    if (qe.length && Qt(), vt.render((D.time - vt._startTime) * vt._timeScale, !1, !1), gt.render((D.frame - gt._startTime) * gt._timeScale, !1, !1), qe.length && Qt(), D.frame >= Ri) {
      Ri = D.frame + (parseInt(X.autoSleep, 10) || 120);
      for (_ in mt) {
        for (x = mt[_].tweens, c = x.length; --c > -1; )
          x[c]._gc && x.splice(c, 1);
        x.length === 0 && delete mt[_];
      }
      if (_ = vt._first, (!_ || _._paused) && X.autoSleep && !gt._first && D._listeners.tick.length === 1) {
        for (; _ && _._paused; )
          _ = _._next;
        _ || D.sleep();
      }
    }
  }, D.addEventListener("tick", G._updateRoot);
  var Lt = function(c, x, _) {
    var C = c._gsTweenID, Y, P;
    if (mt[C || (c._gsTweenID = C = "t" + oi++)] || (mt[C] = { target: c, tweens: [] }), x && (Y = mt[C].tweens, Y[P = Y.length] = x, _))
      for (; --P > -1; )
        Y[P] === x && Y.splice(P, 1);
    return mt[C].tweens;
  }, wt = function(c, x, _, C) {
    var Y = c.vars.onOverwrite, P, z;
    return Y && (P = Y(c, x, _, C)), Y = X.onOverwrite, Y && (z = Y(c, x, _, C)), P !== !1 && z !== !1;
  }, Be = function(c, x, _, C, Y) {
    var P, z, Z, $;
    if (C === 1 || C >= 4) {
      for ($ = Y.length, P = 0; P < $; P++)
        if ((Z = Y[P]) !== x)
          Z._gc || Z._kill(null, c, x) && (z = !0);
        else if (C === 5)
          break;
      return z;
    }
    var he = x._startTime + n, ce = [], de = 0, Ne = x._duration === 0, pe;
    for (P = Y.length; --P > -1; )
      (Z = Y[P]) === x || Z._gc || Z._paused || (Z._timeline !== x._timeline ? (pe = pe || Et(x, 0, Ne), Et(Z, pe, Ne) === 0 && (ce[de++] = Z)) : Z._startTime <= he && Z._startTime + Z.totalDuration() / Z._timeScale > he && ((Ne || !Z._initted) && he - Z._startTime <= n * 2 || (ce[de++] = Z)));
    for (P = de; --P > -1; )
      if (Z = ce[P], $ = Z._firstPT, C === 2 && Z._kill(_, c, x) && (z = !0), C !== 2 || !Z._firstPT && Z._initted && $) {
        if (C !== 2 && !wt(Z, x))
          continue;
        Z._enabled(!1, !1) && (z = !0);
      }
    return z;
  }, Et = function(c, x, _) {
    for (var C = c._timeline, Y = C._timeScale, P = c._startTime; C._timeline; ) {
      if (P += C._startTime, Y *= C._timeScale, C._paused)
        return -100;
      C = C._timeline;
    }
    return P /= Y, P > x ? P - x : _ && P === x || !c._initted && P - x < 2 * n ? n : (P += c.totalDuration() / c._timeScale / Y) > x + n ? 0 : P - x - n;
  };
  h._init = function() {
    var c = this.vars, x = this._overwrittenProps, _ = this._duration, C = !!c.immediateRender, Y = c.ease, P = this._startAt, z, Z, $, he, ce, de;
    if (c.startAt) {
      P && (P.render(-1, !0), P.kill()), ce = {};
      for (he in c.startAt)
        ce[he] = c.startAt[he];
      if (ce.data = "isStart", ce.overwrite = !1, ce.immediateRender = !0, ce.lazy = C && c.lazy !== !1, ce.startAt = ce.delay = null, ce.onUpdate = c.onUpdate, ce.onUpdateParams = c.onUpdateParams, ce.onUpdateScope = c.onUpdateScope || c.callbackScope || this, this._startAt = X.to(this.target || {}, 0, ce), C) {
        if (this._time > 0)
          this._startAt = null;
        else if (_ !== 0)
          return;
      }
    } else if (c.runBackwards && _ !== 0)
      if (P)
        P.render(-1, !0), P.kill(), this._startAt = null;
      else {
        this._time !== 0 && (C = !1), $ = {};
        for (he in c)
          (!ti[he] || he === "autoCSS") && ($[he] = c[he]);
        if ($.overwrite = 0, $.data = "isFromStart", $.lazy = C && c.lazy !== !1, $.immediateRender = C, this._startAt = X.to(this.target, 0, $), !C)
          this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
        else if (this._time === 0)
          return;
      }
    if (this._ease = Y = Y ? Y instanceof g ? Y : typeof Y == "function" ? new g(Y, c.easeParams) : B[Y] || X.defaultEase : X.defaultEase, c.easeParams instanceof Array && Y.config && (this._ease = Y.config.apply(Y, c.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
      for (de = this._targets.length, z = 0; z < de; z++)
        this._initProps(this._targets[z], this._propLookup[z] = {}, this._siblings[z], x ? x[z] : null, z) && (Z = !0);
    else
      Z = this._initProps(this.target, this._propLookup, this._siblings, x, 0);
    if (Z && X._onPluginEvent("_onInitAllProps", this), x && (this._firstPT || typeof this.target != "function" && this._enabled(!1, !1)), c.runBackwards)
      for ($ = this._firstPT; $; )
        $.s += $.c, $.c = -$.c, $ = $._next;
    this._onUpdate = c.onUpdate, this._initted = !0;
  }, h._initProps = function(c, x, _, C, Y) {
    var P, z, Z, $, he, ce;
    if (c == null)
      return !1;
    Xe[c._gsTweenID] && Qt(), this.vars.css || c.style && c !== e && c.nodeType && yt.css && this.vars.autoCSS !== !1 && Oe(this.vars, c);
    for (P in this.vars)
      if (ce = this.vars[P], ti[P])
        ce && (ce instanceof Array || ce.push && m(ce)) && ce.join("").indexOf("{self}") !== -1 && (this.vars[P] = ce = this._swapSelfInParams(ce, this));
      else if (yt[P] && ($ = new yt[P]())._onInitTween(c, this.vars[P], this, Y)) {
        for (this._firstPT = he = { _next: this._firstPT, t: $, p: "setRatio", s: 0, c: 1, f: 1, n: P, pg: 1, pr: $._priority, m: 0 }, z = $._overwriteProps.length; --z > -1; )
          x[$._overwriteProps[z]] = this._firstPT;
        ($._priority || $._onInitAllProps) && (Z = !0), ($._onDisable || $._onEnable) && (this._notifyPluginsOfEnabled = !0), he._next && (he._next._prev = he);
      } else
        x[P] = Ti.call(this, c, P, "get", ce, P, 0, null, this.vars.stringFilter, Y);
    return C && this._kill(C, c) ? this._initProps(c, x, _, C, Y) : this._overwrite > 1 && this._firstPT && _.length > 1 && Be(c, this, x, this._overwrite, _) ? (this._kill(x, c), this._initProps(c, x, _, C, Y)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (Xe[c._gsTweenID] = !0), Z);
  }, h.render = function(c, x, _) {
    var C = this, Y = C._time, P = C._duration, z = C._rawPrevTime, Z, $, he, ce;
    if (c >= P - n && c >= 0)
      C._totalTime = C._time = P, C.ratio = C._ease._calcEnd ? C._ease.getRatio(1) : 1, C._reversed || (Z = !0, $ = "onComplete", _ = _ || C._timeline.autoRemoveChildren), P === 0 && (C._initted || !C.vars.lazy || _) && (C._startTime === C._timeline._duration && (c = 0), (z < 0 || c <= 0 && c >= -n || z === n && C.data !== "isPause") && z !== c && (_ = !0, z > n && ($ = "onReverseComplete")), C._rawPrevTime = ce = !x || c || z === c ? c : n);
    else if (c < n)
      C._totalTime = C._time = 0, C.ratio = C._ease._calcEnd ? C._ease.getRatio(0) : 0, (Y !== 0 || P === 0 && z > 0) && ($ = "onReverseComplete", Z = C._reversed), c > -n ? c = 0 : c < 0 && (C._active = !1, P === 0 && (C._initted || !C.vars.lazy || _) && (z >= 0 && !(z === n && C.data === "isPause") && (_ = !0), C._rawPrevTime = ce = !x || c || z === c ? c : n)), (!C._initted || C._startAt && C._startAt.progress()) && (_ = !0);
    else if (C._totalTime = C._time = c, C._easeType) {
      var de = c / P, Ne = C._easeType, pe = C._easePower;
      (Ne === 1 || Ne === 3 && de >= 0.5) && (de = 1 - de), Ne === 3 && (de *= 2), pe === 1 ? de *= de : pe === 2 ? de *= de * de : pe === 3 ? de *= de * de * de : pe === 4 && (de *= de * de * de * de), C.ratio = Ne === 1 ? 1 - de : Ne === 2 ? de : c / P < 0.5 ? de / 2 : 1 - de / 2;
    } else
      C.ratio = C._ease.getRatio(c / P);
    if (!(C._time === Y && !_)) {
      if (!C._initted) {
        if (C._init(), !C._initted || C._gc)
          return;
        if (!_ && C._firstPT && (C.vars.lazy !== !1 && C._duration || C.vars.lazy && !C._duration)) {
          C._time = C._totalTime = Y, C._rawPrevTime = z, qe.push(C), C._lazy = [c, x];
          return;
        }
        C._time && !Z ? C.ratio = C._ease.getRatio(C._time / P) : Z && C._ease._calcEnd && (C.ratio = C._ease.getRatio(C._time === 0 ? 0 : 1));
      }
      for (C._lazy !== !1 && (C._lazy = !1), C._active || !C._paused && C._time !== Y && c >= 0 && (C._active = !0), Y === 0 && (C._startAt && (c >= 0 ? C._startAt.render(c, !0, _) : $ || ($ = "_dummyGS")), C.vars.onStart && (C._time !== 0 || P === 0) && (x || C._callback("onStart"))), he = C._firstPT; he; )
        he.f ? he.t[he.p](he.c * C.ratio + he.s) : he.t[he.p] = he.c * C.ratio + he.s, he = he._next;
      C._onUpdate && (c < 0 && C._startAt && c !== -1e-4 && C._startAt.render(c, !0, _), x || (C._time !== Y || Z || _) && C._callback("onUpdate")), $ && (!C._gc || _) && (c < 0 && C._startAt && !C._onUpdate && c !== -1e-4 && C._startAt.render(c, !0, _), Z && (C._timeline.autoRemoveChildren && C._enabled(!1, !1), C._active = !1), !x && C.vars[$] && C._callback($), P === 0 && C._rawPrevTime === n && ce !== n && (C._rawPrevTime = 0));
    }
  }, h._kill = function(c, x, _) {
    if (c === "all" && (c = null), c == null && (x == null || x === this.target)) return this._lazy = !1, this._enabled(!1, !1);
    x = typeof x != "string" ? x || this._targets || this.target : X.selector(x) || x;
    var C = _ && this._time && _._startTime === this._startTime && this._timeline === _._timeline, Y = this._firstPT, P, z, Z, $, he, ce, de, Ne, pe;
    if ((m(x) || fe(x)) && typeof x[0] != "number")
      for (P = x.length; --P > -1; )
        this._kill(c, x[P], _) && (ce = !0);
    else {
      if (this._targets) {
        for (P = this._targets.length; --P > -1; )
          if (x === this._targets[P]) {
            he = this._propLookup[P] || {}, this._overwrittenProps = this._overwrittenProps || [], z = this._overwrittenProps[P] = c ? this._overwrittenProps[P] || {} : "all";
            break;
          }
      } else {
        if (x !== this.target)
          return !1;
        he = this._propLookup, z = this._overwrittenProps = c ? this._overwrittenProps || {} : "all";
      }
      if (he) {
        if (de = c || he, Ne = c !== z && z !== "all" && c !== he && (typeof c != "object" || !c._tempKill), _ && (X.onOverwrite || this.vars.onOverwrite)) {
          for (Z in de)
            he[Z] && (pe || (pe = []), pe.push(Z));
          if ((pe || !c) && !wt(this, _, x, pe))
            return !1;
        }
        for (Z in de)
          ($ = he[Z]) && (C && ($.f ? $.t[$.p]($.s) : $.t[$.p] = $.s, ce = !0), $.pg && $.t._kill(de) && (ce = !0), (!$.pg || $.t._overwriteProps.length === 0) && ($._prev ? $._prev._next = $._next : $ === this._firstPT && (this._firstPT = $._next), $._next && ($._next._prev = $._prev), $._next = $._prev = null), delete he[Z]), Ne && (z[Z] = 1);
        !this._firstPT && this._initted && Y && this._enabled(!1, !1);
      }
    }
    return ce;
  }, h.invalidate = function() {
    this._notifyPluginsOfEnabled && X._onPluginEvent("_onDisable", this);
    var c = this._time;
    return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], G.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(c, !1, this.vars.lazy !== !1)), this;
  }, h._enabled = function(c, x) {
    if (S || D.wake(), c && this._gc) {
      var _ = this._targets, C;
      if (_)
        for (C = _.length; --C > -1; )
          this._siblings[C] = Lt(_[C], this, !0);
      else
        this._siblings = Lt(this.target, this, !0);
    }
    return G.prototype._enabled.call(this, c, x), this._notifyPluginsOfEnabled && this._firstPT ? X._onPluginEvent(c ? "_onEnable" : "_onDisable", this) : !1;
  }, X.to = function(c, x, _) {
    return new X(c, x, _);
  }, X.from = function(c, x, _) {
    return _.runBackwards = !0, _.immediateRender = _.immediateRender != !1, new X(c, x, _);
  }, X.fromTo = function(c, x, _, C) {
    return C.startAt = _, C.immediateRender = C.immediateRender != !1 && _.immediateRender != !1, new X(c, x, C);
  }, X.delayedCall = function(c, x, _, C, Y) {
    return new X(x, 0, { delay: c, onComplete: x, onCompleteParams: _, callbackScope: C, onReverseComplete: x, onReverseCompleteParams: _, immediateRender: !1, lazy: !1, useFrames: Y, overwrite: 0 });
  }, X.set = function(c, x) {
    return new X(c, 0, x);
  }, X.getTweensOf = function(c, x) {
    if (c == null)
      return [];
    c = typeof c != "string" ? c : X.selector(c) || c;
    var _, C, Y, P;
    if ((m(c) || fe(c)) && typeof c[0] != "number") {
      for (_ = c.length, C = []; --_ > -1; )
        C = C.concat(X.getTweensOf(c[_], x));
      for (_ = C.length; --_ > -1; )
        for (P = C[_], Y = _; --Y > -1; )
          P === C[Y] && C.splice(_, 1);
    } else if (c._gsTweenID)
      for (C = Lt(c).concat(), _ = C.length; --_ > -1; )
        (C[_]._gc || x && !C[_].isActive()) && C.splice(_, 1);
    return C || [];
  }, X.killTweensOf = X.killDelayedCallsTo = function(c, x, _) {
    typeof x == "object" && (_ = x, x = !1);
    for (var C = X.getTweensOf(c, x), Y = C.length; --Y > -1; )
      C[Y]._kill(_, c);
  };
  var It = a("plugins.TweenPlugin", function(c, x) {
    this._overwriteProps = (c || "").split(","), this._propName = this._overwriteProps[0], this._priority = x || 0, this._super = It.prototype;
  }, !0);
  if (h = It.prototype, It.version = "1.19.0", It.API = 2, h._firstPT = null, h._addTween = Ti, h.setRatio = Dt, h._kill = function(c) {
    var x = this._overwriteProps, _ = this._firstPT, C;
    if (c[this._propName] != null)
      this._overwriteProps = [];
    else
      for (C = x.length; --C > -1; )
        c[x[C]] != null && x.splice(C, 1);
    for (; _; )
      c[_.n] != null && (_._next && (_._next._prev = _._prev), _._prev ? (_._prev._next = _._next, _._prev = null) : this._firstPT === _ && (this._firstPT = _._next)), _ = _._next;
    return !1;
  }, h._mod = h._roundProps = function(c) {
    for (var x = this._firstPT, _; x; )
      _ = c[this._propName] || x.n != null && c[x.n.split(this._propName + "_").join("")], _ && typeof _ == "function" && (x.f === 2 ? x.t._applyPT.m = _ : x.m = _), x = x._next;
  }, X._onPluginEvent = function(c, x) {
    var _ = x._firstPT, C, Y, P, z, Z;
    if (c === "_onInitAllProps") {
      for (; _; ) {
        for (Z = _._next, Y = P; Y && Y.pr > _.pr; )
          Y = Y._next;
        (_._prev = Y ? Y._prev : z) ? _._prev._next = _ : P = _, (_._next = Y) ? Y._prev = _ : z = _, _ = Z;
      }
      _ = x._firstPT = P;
    }
    for (; _; )
      _.pg && typeof _.t[c] == "function" && _.t[c]() && (C = !0), _ = _._next;
    return C;
  }, It.activate = function(c) {
    for (var x = c.length; --x > -1; )
      c[x].API === It.API && (yt[new c[x]()._propName] = c[x]);
    return !0;
  }, s.plugin = function(c) {
    if (!c || !c.propName || !c.init || !c.API)
      throw "illegal plugin definition.";
    var x = c.propName, _ = c.priority || 0, C = c.overwriteProps, Y = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, P = a(
      "plugins." + x.charAt(0).toUpperCase() + x.substr(1) + "Plugin",
      function() {
        It.call(this, x, _), this._overwriteProps = C || [];
      },
      c.global === !0
    ), z = P.prototype = new It(x), Z;
    z.constructor = P, P.API = c.API;
    for (Z in Y)
      typeof c[Z] == "function" && (z[Y[Z]] = c[Z]);
    return P.version = c.version, It.activate([P]), P;
  }, E = e._gsQueue, E) {
    for (p = 0; p < E.length; p++)
      E[p]();
    for (h in q)
      q[h].func || e.console.log("GSAP encountered missing dependency: " + h);
  }
  return S = !1, X;
}(lt), ut = lt.GreenSockGlobals, hn = ut.com.greensock, Yi = hn.core.SimpleTimeline, Mt = hn.core.Animation, qt = ut.Ease;
ut.Linear;
ut.Power1;
ut.Power2;
ut.Power3;
ut.Power4;
var QA = ut.TweenPlugin;
hn.events.EventDispatcher;
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
lt._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
  var e = function(S) {
    var q = [], w = S.length, s;
    for (s = 0; s !== w; q.push(S[s++])) ;
    return q;
  }, t = function(S, q, w) {
    var s = S.cycle, a, I;
    for (a in s)
      I = s[a], S[a] = typeof I == "function" ? I(w, q[w], q) : I[w % I.length];
    delete S.cycle;
  }, i = function(S) {
    if (typeof S == "function")
      return S;
    var q = typeof S == "object" ? S : { each: S }, w = q.ease, s = q.from || 0, a = q.base || 0, I = {}, g = isNaN(s), B = q.axis, M = { center: 0.5, end: 1 }[s] || 0;
    return function(L, N, W) {
      var F = (W || q).length, ae = I[F], G, ne, Ae, X, fe, Oe, qe, Xe, Re;
      if (!ae) {
        if (Re = q.grid === "auto" ? 0 : (q.grid || [1 / 0])[0], !Re) {
          for (qe = -1 / 0; qe < (qe = W[Re++].getBoundingClientRect().left) && Re < F; )
            ;
          Re--;
        }
        for (ae = I[F] = [], G = g ? Math.min(Re, F) * M - 0.5 : s % Re, ne = g ? F * M / Re - 0.5 : s / Re | 0, qe = 0, Xe = 1 / 0, Oe = 0; Oe < F; Oe++)
          Ae = Oe % Re - G, X = ne - (Oe / Re | 0), ae[Oe] = fe = B ? Math.abs(B === "y" ? X : Ae) : Math.sqrt(Ae * Ae + X * X), fe > qe && (qe = fe), fe < Xe && (Xe = fe);
        ae.max = qe - Xe, ae.min = Xe, ae.v = F = q.amount || q.each * (Re > F ? F - 1 : B ? B === "y" ? F / Re : Re : Math.max(Re, F / Re)) || 0, ae.b = F < 0 ? a - F : a;
      }
      return F = (ae[L] - ae.min) / ae.max, ae.b + (w ? w.getRatio(F) : F) * ae.v;
    };
  }, A = function(S, q, w) {
    ke.call(this, S, q, w), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = A.prototype.render;
  }, r = 1e-8, n = ke._internals, l = n.isSelector, f = n.isArray, m = A.prototype = ke.to({}, 0.1, {}), E = [];
  A.version = "2.1.3", m.constructor = A, m.kill()._gc = !1, A.killTweensOf = A.killDelayedCallsTo = ke.killTweensOf, A.getTweensOf = ke.getTweensOf, A.lagSmoothing = ke.lagSmoothing, A.ticker = ke.ticker, A.render = ke.render, A.distribute = i, m.invalidate = function() {
    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), ke.prototype.invalidate.call(this);
  }, m.updateTo = function(S, q) {
    var w = this, s = w.ratio, a = w.vars.immediateRender || S.immediateRender, I;
    q && w._startTime < w._timeline._time && (w._startTime = w._timeline._time, w._uncache(!1), w._gc ? w._enabled(!0, !1) : w._timeline.insert(w, w._startTime - w._delay));
    for (I in S)
      w.vars[I] = S[I];
    if (w._initted || a) {
      if (q)
        w._initted = !1, a && w.render(0, !0, !0);
      else if (w._gc && w._enabled(!0, !1), w._notifyPluginsOfEnabled && w._firstPT && ke._onPluginEvent("_onDisable", w), w._time / w._duration > 0.998) {
        var g = w._totalTime;
        w.render(0, !0, !1), w._initted = !1, w.render(g, !0, !1);
      } else if (w._initted = !1, w._init(), w._time > 0 || a)
        for (var B = 1 / (1 - s), M = w._firstPT, L; M; )
          L = M.s + M.c, M.c *= B, M.s = L - M.c, M = M._next;
    }
    return w;
  }, m.render = function(S, q, w) {
    this._initted || this._duration === 0 && this.vars.repeat && this.invalidate();
    var s = this, a = s._dirty ? s.totalDuration() : s._totalDuration, I = s._time, g = s._totalTime, B = s._cycle, M = s._duration, L = s._rawPrevTime, N, W, F, ae, G, ne, Ae, X, fe;
    if (S >= a - r && S >= 0 ? (s._totalTime = a, s._cycle = s._repeat, s._yoyo && s._cycle & 1 ? (s._time = 0, s.ratio = s._ease._calcEnd ? s._ease.getRatio(0) : 0) : (s._time = M, s.ratio = s._ease._calcEnd ? s._ease.getRatio(1) : 1), s._reversed || (N = !0, W = "onComplete", w = w || s._timeline.autoRemoveChildren), M === 0 && (s._initted || !s.vars.lazy || w) && (s._startTime === s._timeline._duration && (S = 0), (L < 0 || S <= 0 && S >= -r || L === r && s.data !== "isPause") && L !== S && (w = !0, L > r && (W = "onReverseComplete")), s._rawPrevTime = X = !q || S || L === S ? S : r)) : S < r ? (s._totalTime = s._time = s._cycle = 0, s.ratio = s._ease._calcEnd ? s._ease.getRatio(0) : 0, (g !== 0 || M === 0 && L > 0) && (W = "onReverseComplete", N = s._reversed), S > -r ? S = 0 : S < 0 && (s._active = !1, M === 0 && (s._initted || !s.vars.lazy || w) && (L >= 0 && (w = !0), s._rawPrevTime = X = !q || S || L === S ? S : r)), s._initted || (w = !0)) : (s._totalTime = s._time = S, s._repeat !== 0 && (ae = M + s._repeatDelay, s._cycle = s._totalTime / ae >> 0, s._cycle !== 0 && s._cycle === s._totalTime / ae && g <= S && s._cycle--, s._time = s._totalTime - s._cycle * ae, s._yoyo && s._cycle & 1 && (s._time = M - s._time, fe = s._yoyoEase || s.vars.yoyoEase, fe && (s._yoyoEase || (fe === !0 && !s._initted ? (fe = s.vars.ease, s._yoyoEase = fe = fe ? fe instanceof qt ? fe : typeof fe == "function" ? new qt(fe, s.vars.easeParams) : qt.map[fe] || ke.defaultEase : ke.defaultEase) : s._yoyoEase = fe = fe === !0 ? s._ease : fe instanceof qt ? fe : qt.map[fe]), s.ratio = fe ? 1 - fe.getRatio((M - s._time) / M) : 0)), s._time > M ? s._time = M : s._time < 0 && (s._time = 0)), s._easeType && !fe ? (G = s._time / M, ne = s._easeType, Ae = s._easePower, (ne === 1 || ne === 3 && G >= 0.5) && (G = 1 - G), ne === 3 && (G *= 2), Ae === 1 ? G *= G : Ae === 2 ? G *= G * G : Ae === 3 ? G *= G * G * G : Ae === 4 && (G *= G * G * G * G), s.ratio = ne === 1 ? 1 - G : ne === 2 ? G : s._time / M < 0.5 ? G / 2 : 1 - G / 2) : fe || (s.ratio = s._ease.getRatio(s._time / M))), I === s._time && !w && B === s._cycle) {
      g !== s._totalTime && s._onUpdate && (q || s._callback("onUpdate"));
      return;
    } else if (!s._initted) {
      if (s._init(), !s._initted || s._gc)
        return;
      if (!w && s._firstPT && (s.vars.lazy !== !1 && s._duration || s.vars.lazy && !s._duration)) {
        s._time = I, s._totalTime = g, s._rawPrevTime = L, s._cycle = B, n.lazyTweens.push(s), s._lazy = [S, q];
        return;
      }
      s._time && !N && !fe ? s.ratio = s._ease.getRatio(s._time / M) : N && this._ease._calcEnd && !fe && (s.ratio = s._ease.getRatio(s._time === 0 ? 0 : 1));
    }
    for (s._lazy !== !1 && (s._lazy = !1), s._active || !s._paused && s._time !== I && S >= 0 && (s._active = !0), g === 0 && (s._initted === 2 && S > 0 && s._init(), s._startAt && (S >= 0 ? s._startAt.render(S, !0, w) : W || (W = "_dummyGS")), s.vars.onStart && (s._totalTime !== 0 || M === 0) && (q || s._callback("onStart"))), F = s._firstPT; F; )
      F.f ? F.t[F.p](F.c * s.ratio + F.s) : F.t[F.p] = F.c * s.ratio + F.s, F = F._next;
    s._onUpdate && (S < 0 && s._startAt && s._startTime && s._startAt.render(S, !0, w), q || (s._totalTime !== g || W) && s._callback("onUpdate")), s._cycle !== B && (q || s._gc || s.vars.onRepeat && s._callback("onRepeat")), W && (!s._gc || w) && (S < 0 && s._startAt && !s._onUpdate && s._startTime && s._startAt.render(S, !0, w), N && (s._timeline.autoRemoveChildren && s._enabled(!1, !1), s._active = !1), !q && s.vars[W] && s._callback(W), M === 0 && s._rawPrevTime === r && X !== r && (s._rawPrevTime = 0));
  }, A.to = function(S, q, w) {
    return new A(S, q, w);
  }, A.from = function(S, q, w) {
    return w.runBackwards = !0, w.immediateRender = w.immediateRender != !1, new A(S, q, w);
  }, A.fromTo = function(S, q, w, s) {
    return s.startAt = w, s.immediateRender = s.immediateRender != !1 && w.immediateRender != !1, new A(S, q, s);
  }, A.staggerTo = A.allTo = function(S, q, w, s, a, I, g) {
    var B = [], M = i(w.stagger || s), L = w.cycle, N = (w.startAt || E).cycle, W, F, ae, G;
    for (f(S) || (typeof S == "string" && (S = ke.selector(S) || S), l(S) && (S = e(S))), S = S || [], W = S.length - 1, ae = 0; ae <= W; ae++) {
      F = {};
      for (G in w)
        F[G] = w[G];
      if (L && (t(F, S, ae), F.duration != null && (q = F.duration, delete F.duration)), N) {
        N = F.startAt = {};
        for (G in w.startAt)
          N[G] = w.startAt[G];
        t(F.startAt, S, ae);
      }
      F.delay = M(ae, S[ae], S) + (F.delay || 0), ae === W && a && (F.onComplete = function() {
        w.onComplete && w.onComplete.apply(w.onCompleteScope || this, arguments), a.apply(g || w.callbackScope || this, I || E);
      }), B[ae] = new A(S[ae], q, F);
    }
    return B;
  }, A.staggerFrom = A.allFrom = function(S, q, w, s, a, I, g) {
    return w.runBackwards = !0, w.immediateRender = w.immediateRender != !1, A.staggerTo(S, q, w, s, a, I, g);
  }, A.staggerFromTo = A.allFromTo = function(S, q, w, s, a, I, g, B) {
    return s.startAt = w, s.immediateRender = s.immediateRender != !1 && w.immediateRender != !1, A.staggerTo(S, q, s, a, I, g, B);
  }, A.delayedCall = function(S, q, w, s, a) {
    return new A(q, 0, { delay: S, onComplete: q, onCompleteParams: w, callbackScope: s, onReverseComplete: q, onReverseCompleteParams: w, immediateRender: !1, useFrames: a, overwrite: 0 });
  }, A.set = function(S, q) {
    return new A(S, 0, q);
  }, A.isTweening = function(S) {
    return ke.getTweensOf(S, !0).length > 0;
  };
  var p = function(S, q) {
    for (var w = [], s = 0, a = S._first; a; )
      a instanceof ke ? w[s++] = a : (q && (w[s++] = a), w = w.concat(p(a, q)), s = w.length), a = a._next;
    return w;
  }, h = A.getAllTweens = function(S) {
    return p(Mt._rootTimeline, S).concat(p(Mt._rootFramesTimeline, S));
  };
  A.killAll = function(S, q, w, s) {
    q == null && (q = !0), w == null && (w = !0);
    var a = h(s != !1), I = a.length, g = q && w && s, B, M, L;
    for (L = 0; L < I; L++)
      M = a[L], (g || M instanceof Yi || (B = M.target === M.vars.onComplete) && w || q && !B) && (S ? M.totalTime(M._reversed ? 0 : M.totalDuration()) : M._enabled(!1, !1));
  }, A.killChildTweensOf = function(S, q) {
    if (S != null) {
      var w = n.tweenLookup, s, a, I, g, B;
      if (typeof S == "string" && (S = ke.selector(S) || S), l(S) && (S = e(S)), f(S)) {
        for (g = S.length; --g > -1; )
          A.killChildTweensOf(S[g], q);
        return;
      }
      s = [];
      for (I in w)
        for (a = w[I].target.parentNode; a; )
          a === S && (s = s.concat(w[I].tweens)), a = a.parentNode;
      for (B = s.length, g = 0; g < B; g++)
        q && s[g].totalTime(s[g].totalDuration()), s[g]._enabled(!1, !1);
    }
  };
  var D = function(S, q, w, s) {
    q = q !== !1, w = w !== !1, s = s !== !1;
    for (var a = h(s), I = q && w && s, g = a.length, B, M; --g > -1; )
      M = a[g], (I || M instanceof Yi || (B = M.target === M.vars.onComplete) && w || q && !B) && M.paused(S);
  };
  return A.pauseAll = function(S, q, w) {
    D(!0, S, q, w);
  }, A.resumeAll = function(S, q, w) {
    D(!1, S, q, w);
  }, A.globalTimeScale = function(S) {
    var q = Mt._rootTimeline, w = ke.ticker.time;
    return arguments.length ? (S = S || r, q._startTime = w - (w - q._startTime) * q._timeScale / S, q = Mt._rootFramesTimeline, w = ke.ticker.frame, q._startTime = w - (w - q._startTime) * q._timeScale / S, q._timeScale = Mt._rootTimeline._timeScale = S, S) : q._timeScale;
  }, m.progress = function(S, q) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && this._cycle & 1 ? 1 - S : S) + this._cycle * (this._duration + this._repeatDelay), q) : this.duration() ? this._time / this._duration : this.ratio;
  }, m.totalProgress = function(S, q) {
    return arguments.length ? this.totalTime(this.totalDuration() * S, q) : this._totalTime / this.totalDuration();
  }, m.time = function(S, q) {
    if (!arguments.length)
      return this._time;
    this._dirty && this.totalDuration();
    var w = this._duration, s = this._cycle, a = s * (w + this._repeatDelay);
    return S > w && (S = w), this.totalTime(this._yoyo && s & 1 ? w - S + a : this._repeat ? S + a : S, q);
  }, m.duration = function(S) {
    return arguments.length ? Mt.prototype.duration.call(this, S) : this._duration;
  }, m.totalDuration = function(S) {
    return arguments.length ? this._repeat === -1 ? this : this.duration((S - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
  }, m.repeat = function(S) {
    return arguments.length ? (this._repeat = S, this._uncache(!0)) : this._repeat;
  }, m.repeatDelay = function(S) {
    return arguments.length ? (this._repeatDelay = S, this._uncache(!0)) : this._repeatDelay;
  }, m.yoyo = function(S) {
    return arguments.length ? (this._yoyo = S, this) : this._yoyo;
  }, A;
}, !0);
var yf = ut.TweenMax;
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
lt._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
  var e = function() {
    QA.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = e.prototype.setRatio;
  }, t = lt._gsDefine.globals, i, A, r, n, l = {}, f = e.prototype = new QA("css");
  f.constructor = e, e.version = "2.1.3", e.API = 2, e.defaultTransformPerspective = 0, e.defaultSkewType = "compensated", e.defaultSmoothOrigin = !0, f = "px", e.suffixMap = { top: f, right: f, bottom: f, left: f, width: f, height: f, fontSize: f, padding: f, margin: f, perspective: f, lineHeight: "" };
  var m = /(?:\-|\.|\b)(\d|\.|e\-)+/g, E = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, p = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, h = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, D = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, S = /(?:\d|\-|\+|=|#|\.)*/g, q = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, s = /alpha\(opacity *=.+?\)/i, a = /^(rgb|hsl)/, I = /([A-Z])/g, g = /-([a-z])/gi, B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, M = function(u, o) {
    return o.toUpperCase();
  }, L = /(?:Left|Right|Width)/i, N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, W = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, F = /,(?=[^\)]*(?:\(|$))/gi, ae = /[\s,\(]/i, G = Math.PI / 180, ne = 180 / Math.PI, Ae = {}, X = { style: {} }, fe = lt.document || { createElement: function() {
    return X;
  } }, Oe = function(u, o) {
    var y = fe.createElementNS ? fe.createElementNS(o || "http://www.w3.org/1999/xhtml", u) : fe.createElement(u);
    return y.style ? y : fe.createElement(u);
  }, qe = Oe("div"), Xe = Oe("img"), Re = e._internals = { _specialProps: l }, rt = (lt.navigator || {}).userAgent || "", Dt, et, ai, Ti, xi, yt, mt = function() {
    var u = rt.indexOf("Android"), o = Oe("a");
    return ai = rt.indexOf("Safari") !== -1 && rt.indexOf("Chrome") === -1 && (u === -1 || parseFloat(rt.substr(u + 8, 2)) > 3), xi = ai && parseFloat(rt.substr(rt.indexOf("Version/") + 8, 2)) < 6, Ti = rt.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(rt) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(rt)) && (yt = parseFloat(RegExp.$1)), o ? (o.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(o.style.opacity)) : !1;
  }(), oi = function(u) {
    return q.test(typeof u == "string" ? u : (u.currentStyle ? u.currentStyle.filter : u.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
  }, ti = function(u) {
    lt.console && console.log(u);
  }, St, gt, vt = "", Ri = "", Qt = function(u, o) {
    o = o || qe;
    var y = o.style, R, d;
    if (y[u] !== void 0)
      return u;
    for (u = u.charAt(0).toUpperCase() + u.substr(1), R = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && y[R[d] + u] === void 0; )
      ;
    return d >= 0 ? (Ri = d === 3 ? "ms" : R[d], vt = "-" + Ri.toLowerCase() + "-", Ri + u) : null;
  }, Lt = typeof window < "u" ? window : fe.defaultView || { getComputedStyle: function() {
  } }, wt = function(u) {
    return Lt.getComputedStyle(u);
  }, Be = e.getStyle = function(u, o, y, R, d) {
    var k;
    return !mt && o === "opacity" ? oi(u) : (!R && u.style[o] ? k = u.style[o] : (y = y || wt(u)) ? k = y[o] || y.getPropertyValue(o) || y.getPropertyValue(o.replace(I, "-$1").toLowerCase()) : u.currentStyle && (k = u.currentStyle[o]), d != null && (!k || k === "none" || k === "auto" || k === "auto auto") ? d : k);
  }, Et = Re.convertToPixels = function(u, o, y, R, d) {
    if (R === "px" || !R && o !== "lineHeight")
      return y;
    if (R === "auto" || !y)
      return 0;
    var k = L.test(o), T = u, b = qe.style, O = y < 0, K = y === 1, U, j, Q;
    if (O && (y = -y), K && (y *= 100), o === "lineHeight" && !R)
      j = wt(u).lineHeight, u.style.lineHeight = y, U = parseFloat(wt(u).lineHeight), u.style.lineHeight = j;
    else if (R === "%" && o.indexOf("border") !== -1)
      U = y / 100 * (k ? u.clientWidth : u.clientHeight);
    else {
      if (b.cssText = "border:0 solid red;position:" + Be(u, "position") + ";line-height:0;", R === "%" || !T.appendChild || R.charAt(0) === "v" || R === "rem") {
        if (T = u.parentNode || fe.body, Be(T, "display").indexOf("flex") !== -1 && (b.position = "absolute"), j = T._gsCache, Q = ke.ticker.frame, j && k && j.time === Q)
          return j.width * y / 100;
        b[k ? "width" : "height"] = y + R;
      } else
        b[k ? "borderLeftWidth" : "borderTopWidth"] = y + R;
      T.appendChild(qe), U = parseFloat(qe[k ? "offsetWidth" : "offsetHeight"]), T.removeChild(qe), k && R === "%" && e.cacheWidths !== !1 && (j = T._gsCache = T._gsCache || {}, j.time = Q, j.width = U / y * 100), U === 0 && !d && (U = Et(u, o, y, R, !0));
    }
    return K && (U /= 100), O ? -U : U;
  }, It = Re.calculateOffset = function(u, o, y) {
    if (Be(u, "position", y) !== "absolute")
      return 0;
    var R = o === "left" ? "Left" : "Top", d = Be(u, "margin" + R, y);
    return u["offset" + R] - (Et(u, o, parseFloat(d), d.replace(S, "")) || 0);
  }, c = function(u, o) {
    var y = {}, R, d, k;
    if (o = o || wt(u))
      if (R = o.length)
        for (; --R > -1; )
          k = o[R], (k.indexOf("-transform") === -1 || Wi === k) && (y[k.replace(g, M)] = o.getPropertyValue(k));
      else
        for (R in o)
          (R.indexOf("Transform") === -1 || ct === R) && (y[R] = o[R]);
    else if (o = u.currentStyle || u.style)
      for (R in o)
        typeof R == "string" && y[R] === void 0 && (y[R.replace(g, M)] = o[R]);
    return mt || (y.opacity = oi(u)), d = Ce(u, o, !1), y.rotation = d.rotation, y.skewX = d.skewX, y.scaleX = d.scaleX, y.scaleY = d.scaleY, y.x = d.x, y.y = d.y, Bt && (y.z = d.z, y.rotationX = d.rotationX, y.rotationY = d.rotationY, y.scaleZ = d.scaleZ), y.filters && delete y.filters, y;
  }, x = function(u, o, y, R, d) {
    var k = {}, T = u.style, b, O, K;
    for (O in y)
      O !== "cssText" && O !== "length" && isNaN(O) && (o[O] !== (b = y[O]) || d && d[O]) && O.indexOf("Origin") === -1 && (typeof b == "number" || typeof b == "string") && (k[O] = b === "auto" && (O === "left" || O === "top") ? It(u, O) : (b === "" || b === "auto" || b === "none") && typeof o[O] == "string" && o[O].replace(D, "") !== "" ? 0 : b, T[O] !== void 0 && (K = new Vt(T, O, T[O], K)));
    if (R)
      for (O in R)
        O !== "className" && (k[O] = R[O]);
    return { difs: k, firstMPT: K };
  }, _ = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, C = ["marginLeft", "marginRight", "marginTop", "marginBottom"], Y = function(u, o, y) {
    if ((u.nodeName + "").toLowerCase() === "svg")
      return (y || wt(u))[o] || 0;
    if (u.getCTM && v(u))
      return u.getBBox()[o] || 0;
    var R = parseFloat(o === "width" ? u.offsetWidth : u.offsetHeight), d = _[o], k = d.length;
    for (y = y || wt(u); --k > -1; )
      R -= parseFloat(Be(u, "padding" + d[k], y, !0)) || 0, R -= parseFloat(Be(u, "border" + d[k] + "Width", y, !0)) || 0;
    return R;
  }, P = function(u, o) {
    if (u === "contain" || u === "auto" || u === "auto auto")
      return u + " ";
    (u == null || u === "") && (u = "0 0");
    var y = u.split(" "), R = u.indexOf("left") !== -1 ? "0%" : u.indexOf("right") !== -1 ? "100%" : y[0], d = u.indexOf("top") !== -1 ? "0%" : u.indexOf("bottom") !== -1 ? "100%" : y[1], k;
    if (y.length > 3 && !o) {
      for (y = u.split(", ").join(",").split(","), u = [], k = 0; k < y.length; k++)
        u.push(P(y[k]));
      return u.join(",");
    }
    return d == null ? d = R === "center" ? "50%" : "0" : d === "center" && (d = "50%"), (R === "center" || isNaN(parseFloat(R)) && (R + "").indexOf("=") === -1) && (R = "50%"), u = R + " " + d + (y.length > 2 ? " " + y[2] : ""), o && (o.oxp = R.indexOf("%") !== -1, o.oyp = d.indexOf("%") !== -1, o.oxr = R.charAt(1) === "=", o.oyr = d.charAt(1) === "=", o.ox = parseFloat(R.replace(D, "")), o.oy = parseFloat(d.replace(D, "")), o.v = u), o || u;
  }, z = function(u, o) {
    return typeof u == "function" && (u = u(gt, St)), typeof u == "string" && u.charAt(1) === "=" ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - parseFloat(o) || 0;
  }, Z = function(u, o) {
    typeof u == "function" && (u = u(gt, St));
    var y = typeof u == "string" && u.charAt(1) === "=";
    return typeof u == "string" && u.charAt(u.length - 2) === "v" && (u = (y ? u.substr(0, 2) : 0) + window["inner" + (u.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(y ? u.substr(2) : u) / 100)), u == null ? o : y ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) + o : parseFloat(u) || 0;
  }, $ = function(u, o, y, R) {
    var d = 1e-6, k, T, b, O, K;
    return typeof u == "function" && (u = u(gt, St)), u == null ? O = o : typeof u == "number" ? O = u : (k = 360, T = u.split("_"), K = u.charAt(1) === "=", b = (K ? parseInt(u.charAt(0) + "1", 10) * parseFloat(T[0].substr(2)) : parseFloat(T[0])) * (u.indexOf("rad") === -1 ? 1 : ne) - (K ? 0 : o), T.length && (R && (R[y] = o + b), u.indexOf("short") !== -1 && (b = b % k, b !== b % (k / 2) && (b = b < 0 ? b + k : b - k)), u.indexOf("_cw") !== -1 && b < 0 ? b = (b + k * 9999999999) % k - (b / k | 0) * k : u.indexOf("ccw") !== -1 && b > 0 && (b = (b - k * 9999999999) % k - (b / k | 0) * k)), O = o + b), O < d && O > -d && (O = 0), O;
  }, he = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    fuchsia: [255, 0, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  }, ce = function(u, o, y) {
    return u = u < 0 ? u + 1 : u > 1 ? u - 1 : u, (u * 6 < 1 ? o + (y - o) * u * 6 : u < 0.5 ? y : u * 3 < 2 ? o + (y - o) * (2 / 3 - u) * 6 : o) * 255 + 0.5 | 0;
  }, de = e.parseColor = function(u, o) {
    var y, R, d, k, T, b, O, K, U, j, Q;
    if (!u)
      y = he.black;
    else if (typeof u == "number")
      y = [u >> 16, u >> 8 & 255, u & 255];
    else {
      if (u.charAt(u.length - 1) === "," && (u = u.substr(0, u.length - 1)), he[u])
        y = he[u];
      else if (u.charAt(0) === "#")
        u.length === 4 && (R = u.charAt(1), d = u.charAt(2), k = u.charAt(3), u = "#" + R + R + d + d + k + k), u = parseInt(u.substr(1), 16), y = [u >> 16, u >> 8 & 255, u & 255];
      else if (u.substr(0, 3) === "hsl") {
        if (y = Q = u.match(m), !o)
          T = Number(y[0]) % 360 / 360, b = Number(y[1]) / 100, O = Number(y[2]) / 100, d = O <= 0.5 ? O * (b + 1) : O + b - O * b, R = O * 2 - d, y.length > 3 && (y[3] = Number(y[3])), y[0] = ce(T + 1 / 3, R, d), y[1] = ce(T, R, d), y[2] = ce(T - 1 / 3, R, d);
        else if (u.indexOf("=") !== -1)
          return u.match(E);
      } else
        y = u.match(m) || he.transparent;
      y[0] = Number(y[0]), y[1] = Number(y[1]), y[2] = Number(y[2]), y.length > 3 && (y[3] = Number(y[3]));
    }
    return o && !Q && (R = y[0] / 255, d = y[1] / 255, k = y[2] / 255, K = Math.max(R, d, k), U = Math.min(R, d, k), O = (K + U) / 2, K === U ? T = b = 0 : (j = K - U, b = O > 0.5 ? j / (2 - K - U) : j / (K + U), T = K === R ? (d - k) / j + (d < k ? 6 : 0) : K === d ? (k - R) / j + 2 : (R - d) / j + 4, T *= 60), y[0] = T + 0.5 | 0, y[1] = b * 100 + 0.5 | 0, y[2] = O * 100 + 0.5 | 0), y;
  }, Ne = function(u, o) {
    var y = u.match(pe) || [], R = 0, d = "", k, T, b;
    if (!y.length)
      return u;
    for (k = 0; k < y.length; k++)
      T = y[k], b = u.substr(R, u.indexOf(T, R) - R), R += b.length + T.length, T = de(T, o), T.length === 3 && T.push(1), d += b + (o ? "hsla(" + T[0] + "," + T[1] + "%," + T[2] + "%," + T[3] : "rgba(" + T.join(",")) + ")";
    return d + u.substr(R);
  }, pe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
  for (f in he)
    pe += "|" + f + "\\b";
  pe = new RegExp(pe + ")", "gi"), e.colorStringFilter = function(u) {
    var o = u[0] + " " + u[1], y;
    pe.test(o) && (y = o.indexOf("hsl(") !== -1 || o.indexOf("hsla(") !== -1, u[0] = Ne(u[0], y), u[1] = Ne(u[1], y)), pe.lastIndex = 0;
  }, ke.defaultStringFilter || (ke.defaultStringFilter = e.colorStringFilter);
  var Je = function(u, o, y, R) {
    if (u == null)
      return function(Q) {
        return Q;
      };
    var d = o ? (u.match(pe) || [""])[0] : "", k = u.split(d).join("").match(p) || [], T = u.substr(0, u.indexOf(k[0])), b = u.charAt(u.length - 1) === ")" ? ")" : "", O = u.indexOf(" ") !== -1 ? " " : ",", K = k.length, U = K > 0 ? k[0].replace(m, "") : "", j;
    return K ? o ? (j = function(Q) {
      var ie, re, J, se;
      if (typeof Q == "number")
        Q += U;
      else if (R && F.test(Q)) {
        for (se = Q.replace(F, "|").split("|"), J = 0; J < se.length; J++)
          se[J] = j(se[J]);
        return se.join(",");
      }
      if (ie = (Q.match(pe) || [d])[0], re = Q.split(ie).join("").match(p) || [], J = re.length, K > J--)
        for (; ++J < K; )
          re[J] = y ? re[(J - 1) / 2 | 0] : k[J];
      return T + re.join(O) + O + ie + b + (Q.indexOf("inset") !== -1 ? " inset" : "");
    }, j) : (j = function(Q) {
      var ie, re, J;
      if (typeof Q == "number")
        Q += U;
      else if (R && F.test(Q)) {
        for (re = Q.replace(F, "|").split("|"), J = 0; J < re.length; J++)
          re[J] = j(re[J]);
        return re.join(",");
      }
      if (ie = Q.match(O === "," ? p : h) || [], J = ie.length, K > J--)
        for (; ++J < K; )
          ie[J] = y ? ie[(J - 1) / 2 | 0] : k[J];
      return (T && Q !== "none" && Q.substr(0, Q.indexOf(ie[0])) || T) + ie.join(O) + b;
    }, j) : function(Q) {
      return Q;
    };
  }, Yt = function(u) {
    return u = u.split(","), function(o, y, R, d, k, T, b) {
      var O = (y + "").split(" "), K;
      for (b = {}, K = 0; K < 4; K++)
        b[u[K]] = O[K] = O[K] || O[(K - 1) / 2 >> 0];
      return d.parse(o, b, k, T);
    };
  };
  Re._setPluginRatio = function(u) {
    this.plugin.setRatio(u);
    for (var o = this.data, y = o.proxy, R = o.firstMPT, d = 1e-6, k, T, b, O, K; R; )
      k = y[R.v], R.r ? k = R.r(k) : k < d && k > -d && (k = 0), R.t[R.p] = k, R = R._next;
    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, y.rotation, this.t, this._tween) : y.rotation), u === 1 || u === 0)
      for (R = o.firstMPT, K = u === 1 ? "e" : "b"; R; ) {
        if (T = R.t, !T.type)
          T[K] = T.s + T.xs0;
        else if (T.type === 1) {
          for (O = T.xs0 + T.s + T.xs1, b = 1; b < T.l; b++)
            O += T["xn" + b] + T["xs" + (b + 1)];
          T[K] = O;
        }
        R = R._next;
      }
  };
  var Vt = function(u, o, y, R, d) {
    this.t = u, this.p = o, this.v = y, this.r = d, R && (R._prev = this, this._next = R);
  };
  Re._parseToProxy = function(u, o, y, R, d, k) {
    var T = R, b = {}, O = {}, K = y._transform, U = Ae, j, Q, ie, re, J;
    for (y._transform = null, Ae = o, R = J = y.parse(u, o, R, d), Ae = U, k && (y._transform = K, T && (T._prev = null, T._prev && (T._prev._next = null))); R && R !== T; ) {
      if (R.type <= 1 && (Q = R.p, O[Q] = R.s + R.c, b[Q] = R.s, k || (re = new Vt(R, "s", Q, re, R.r), R.c = 0), R.type === 1))
        for (j = R.l; --j > 0; )
          ie = "xn" + j, Q = R.p + "_" + ie, O[Q] = R.data[ie], b[Q] = R[ie], k || (re = new Vt(R, ie, Q, re, R.rxp[ie]));
      R = R._next;
    }
    return { proxy: b, end: O, firstMPT: re, pt: J };
  };
  var tt = Re.CSSPropTween = function(u, o, y, R, d, k, T, b, O, K, U) {
    this.t = u, this.p = o, this.s = y, this.c = R, this.n = T || o, u instanceof tt || n.push(this.n), this.r = b && (typeof b == "function" ? b : Math.round), this.type = k || 0, O && (this.pr = O, i = !0), this.b = K === void 0 ? y : K, this.e = U === void 0 ? y + R : U, d && (this._next = d, d._prev = this);
  }, Vi = function(u, o, y, R, d, k) {
    var T = new tt(u, o, y, R - y, d, -1, k);
    return T.b = y, T.e = T.xs0 = R, T;
  }, li = e.parseComplex = function(u, o, y, R, d, k, T, b, O, K) {
    y = y || k || "", typeof R == "function" && (R = R(gt, St)), T = new tt(u, o, 0, 0, T, K ? 2 : 1, null, !1, b, y, R), R += "", d && pe.test(R + y) && (R = [y, R], e.colorStringFilter(R), y = R[0], R = R[1]);
    var U = y.split(", ").join(",").split(" "), j = R.split(", ").join(",").split(" "), Q = U.length, ie = Dt !== !1, re, J, se, H, oe, we, Ie, Te, Ee, Se, Fe, xe, He;
    for ((R.indexOf(",") !== -1 || y.indexOf(",") !== -1) && ((R + y).indexOf("rgb") !== -1 || (R + y).indexOf("hsl") !== -1 ? (U = U.join(" ").replace(F, ", ").split(" "), j = j.join(" ").replace(F, ", ").split(" ")) : (U = U.join(" ").split(",").join(", ").split(" "), j = j.join(" ").split(",").join(", ").split(" ")), Q = U.length), Q !== j.length && (U = (k || "").split(" "), Q = U.length), T.plugin = O, T.setRatio = K, pe.lastIndex = 0, re = 0; re < Q; re++)
      if (H = U[re], oe = j[re] + "", Te = parseFloat(H), Te || Te === 0)
        T.appendXtra("", Te, z(oe, Te), oe.replace(E, ""), ie && oe.indexOf("px") !== -1 ? Math.round : !1, !0);
      else if (d && pe.test(H))
        xe = oe.indexOf(")") + 1, xe = ")" + (xe ? oe.substr(xe) : ""), He = oe.indexOf("hsl") !== -1 && mt, Se = oe, H = de(H, He), oe = de(oe, He), Ee = H.length + oe.length > 6, Ee && !mt && oe[3] === 0 ? (T["xs" + T.l] += T.l ? " transparent" : "transparent", T.e = T.e.split(j[re]).join("transparent")) : (mt || (Ee = !1), He ? T.appendXtra(Se.substr(0, Se.indexOf("hsl")) + (Ee ? "hsla(" : "hsl("), H[0], z(oe[0], H[0]), ",", !1, !0).appendXtra("", H[1], z(oe[1], H[1]), "%,", !1).appendXtra("", H[2], z(oe[2], H[2]), Ee ? "%," : "%" + xe, !1) : T.appendXtra(Se.substr(0, Se.indexOf("rgb")) + (Ee ? "rgba(" : "rgb("), H[0], oe[0] - H[0], ",", Math.round, !0).appendXtra("", H[1], oe[1] - H[1], ",", Math.round).appendXtra("", H[2], oe[2] - H[2], Ee ? "," : xe, Math.round), Ee && (H = H.length < 4 ? 1 : H[3], T.appendXtra("", H, (oe.length < 4 ? 1 : oe[3]) - H, xe, !1))), pe.lastIndex = 0;
      else if (we = H.match(m), !we)
        T["xs" + T.l] += T.l || T["xs" + T.l] ? " " + oe : oe;
      else {
        if (Ie = oe.match(E), !Ie || Ie.length !== we.length)
          return T;
        for (se = 0, J = 0; J < we.length; J++)
          Fe = we[J], Se = H.indexOf(Fe, se), T.appendXtra(H.substr(se, Se - se), Number(Fe), z(Ie[J], Fe), "", ie && H.substr(Se + Fe.length, 2) === "px" ? Math.round : !1, J === 0), se = Se + Fe.length;
        T["xs" + T.l] += H.substr(se);
      }
    if (R.indexOf("=") !== -1 && T.data) {
      for (xe = T.xs0 + T.data.s, re = 1; re < T.l; re++)
        xe += T["xs" + re] + T.data["xn" + re];
      T.e = xe + T["xs" + re];
    }
    return T.l || (T.type = -1, T.xs0 = T.e), T.xfirst || T;
  }, ft = 9;
  for (f = tt.prototype, f.l = f.pr = 0; --ft > 0; )
    f["xn" + ft] = 0, f["xs" + ft] = "";
  f.xs0 = "", f._next = f._prev = f.xfirst = f.data = f.plugin = f.setRatio = f.rxp = null, f.appendXtra = function(u, o, y, R, d, k) {
    var T = this, b = T.l;
    return T["xs" + b] += k && (b || T["xs" + b]) ? " " + u : u || "", !y && b !== 0 && !T.plugin ? (T["xs" + b] += o + (R || ""), T) : (T.l++, T.type = T.setRatio ? 2 : 1, T["xs" + T.l] = R || "", b > 0 ? (T.data["xn" + b] = o + y, T.rxp["xn" + b] = d, T["xn" + b] = o, T.plugin || (T.xfirst = new tt(T, "xn" + b, o, y, T.xfirst || T, 0, T.n, d, T.pr), T.xfirst.xs0 = 0), T) : (T.data = { s: o + y }, T.rxp = {}, T.s = o, T.c = y, T.r = d, T));
  };
  var ui = function(u, o) {
    o = o || {}, this.p = o.prefix && Qt(u) || u, l[u] = l[this.p] = this, this.format = o.formatter || Je(o.defaultValue, o.color, o.collapsible, o.multi), o.parser && (this.parse = o.parser), this.clrs = o.color, this.multi = o.multi, this.keyword = o.keyword, this.dflt = o.defaultValue, this.allowFunc = o.allowFunc, this.pr = o.priority || 0;
  }, We = Re._registerComplexSpecialProp = function(u, o, y) {
    typeof o != "object" && (o = { parser: y });
    var R = u.split(","), d = o.defaultValue, k;
    for (y = y || [d], k = 0; k < R.length; k++)
      o.prefix = k === 0 && o.prefix, o.defaultValue = y[k] || d, new ui(R[k], o);
  }, nA = Re._registerPluginProp = function(u) {
    if (!l[u]) {
      var o = u.charAt(0).toUpperCase() + u.substr(1) + "Plugin";
      We(u, { parser: function(y, R, d, k, T, b, O) {
        var K = t.com.greensock.plugins[o];
        return K ? (K._cssRegister(), l[d].parse(y, R, d, k, T, b, O)) : (ti("Error: " + o + " js file not loaded."), T);
      } });
    }
  };
  f = ui.prototype, f.parseComplex = function(u, o, y, R, d, k) {
    var T = this.keyword, b, O, K, U, j, Q;
    if (this.multi && (F.test(y) || F.test(o) ? (O = o.replace(F, "|").split("|"), K = y.replace(F, "|").split("|")) : T && (O = [o], K = [y])), K) {
      for (U = K.length > O.length ? K.length : O.length, b = 0; b < U; b++)
        o = O[b] = O[b] || this.dflt, y = K[b] = K[b] || this.dflt, T && (j = o.indexOf(T), Q = y.indexOf(T), j !== Q && (Q === -1 ? O[b] = O[b].split(T).join("") : j === -1 && (O[b] += " " + T)));
      o = O.join(", "), y = K.join(", ");
    }
    return li(u, this.p, o, y, this.clrs, this.dflt, R, this.pr, d, k);
  }, f.parse = function(u, o, y, R, d, k, T) {
    return this.parseComplex(u.style, this.format(Be(u, this.p, r, !1, this.dflt)), this.format(o), d, k);
  }, e.registerSpecialProp = function(u, o, y) {
    We(u, { parser: function(R, d, k, T, b, O, K) {
      var U = new tt(R, k, 0, 0, b, 2, k, !1, y);
      return U.plugin = O, U.setRatio = o(R, d, T._tween, k), U;
    }, priority: y });
  }, e.useSVGTransformAttr = !0;
  var sA = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), ct = Qt("transform"), Wi = vt + "transform", bi = Qt("transformOrigin"), Bt = Qt("perspective") !== null, vi = Re.Transform = function() {
    this.perspective = parseFloat(e.defaultTransformPerspective) || 0, this.force3D = e.defaultForce3D === !1 || !Bt ? !1 : e.defaultForce3D || "auto";
  }, cr = lt.SVGElement, ii, aA = function(u, o, y) {
    var R = fe.createElementNS("http://www.w3.org/2000/svg", u), d = /([a-z])([A-Z])/g, k;
    for (k in y)
      R.setAttributeNS(null, k.replace(d, "$1-$2").toLowerCase(), y[k]);
    return o.appendChild(R), R;
  }, Wt = fe.documentElement || {}, dr = function() {
    var u = yt || /Android/i.test(rt) && !lt.chrome, o, y, R;
    return fe.createElementNS && Wt.appendChild && !u && (o = aA("svg", Wt), y = aA("rect", o, { width: 100, height: 50, x: 100 }), R = y.getBoundingClientRect().width, y.style[bi] = "50% 50%", y.style[ct] = "scaleX(0.5)", u = R === y.getBoundingClientRect().width && !(Ti && Bt), Wt.removeChild(o)), u;
  }(), oA = function(u, o, y, R, d, k) {
    var T = u._gsTransform, b = le(u, !0), O, K, U, j, Q, ie, re, J, se, H, oe, we, Ie, Te;
    T && (Ie = T.xOrigin, Te = T.yOrigin), (!R || (O = R.split(" ")).length < 2) && (re = u.getBBox(), re.x === 0 && re.y === 0 && re.width + re.height === 0 && (re = { x: parseFloat(u.hasAttribute("x") ? u.getAttribute("x") : u.hasAttribute("cx") ? u.getAttribute("cx") : 0) || 0, y: parseFloat(u.hasAttribute("y") ? u.getAttribute("y") : u.hasAttribute("cy") ? u.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), o = P(o).split(" "), O = [
      (o[0].indexOf("%") !== -1 ? parseFloat(o[0]) / 100 * re.width : parseFloat(o[0])) + re.x,
      (o[1].indexOf("%") !== -1 ? parseFloat(o[1]) / 100 * re.height : parseFloat(o[1])) + re.y
    ]), y.xOrigin = j = parseFloat(O[0]), y.yOrigin = Q = parseFloat(O[1]), R && b !== ee && (ie = b[0], re = b[1], J = b[2], se = b[3], H = b[4], oe = b[5], we = ie * se - re * J, we && (K = j * (se / we) + Q * (-J / we) + (J * oe - se * H) / we, U = j * (-re / we) + Q * (ie / we) - (ie * oe - re * H) / we, j = y.xOrigin = O[0] = K, Q = y.yOrigin = O[1] = U)), T && (k && (y.xOffset = T.xOffset, y.yOffset = T.yOffset, T = y), d || d !== !1 && e.defaultSmoothOrigin !== !1 ? (K = j - Ie, U = Q - Te, T.xOffset += K * b[0] + U * b[2] - K, T.yOffset += K * b[1] + U * b[3] - U) : T.xOffset = T.yOffset = 0), k || u.setAttribute("data-svg-origin", O.join(" "));
  }, DA = function(u) {
    var o = Oe("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), y = this.parentNode, R = this.nextSibling, d = this.style.cssText, k;
    if (Wt.appendChild(o), o.appendChild(this), this.style.display = "block", u)
      try {
        k = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = DA;
      } catch {
      }
    else this._originalGetBBox && (k = this._originalGetBBox());
    return R ? y.insertBefore(this, R) : y.appendChild(this), Wt.removeChild(o), this.style.cssText = d, k;
  }, mr = function(u) {
    try {
      return u.getBBox();
    } catch {
      return DA.call(u, !0);
    }
  }, v = function(u) {
    return !!(cr && u.getCTM && (!u.parentNode || u.ownerSVGElement) && mr(u));
  }, ee = [1, 0, 0, 1, 0, 0], le = function(u, o) {
    var y = u._gsTransform || new vi(), R = 1e5, d = u.style, k, T, b, O, K, U, j;
    if (ct ? T = Be(u, Wi, null, !0) : u.currentStyle && (T = u.currentStyle.filter.match(N), T = T && T.length === 4 ? [T[0].substr(4), Number(T[2].substr(4)), Number(T[1].substr(4)), T[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), k = !T || T === "none" || T === "matrix(1, 0, 0, 1, 0, 0)", ct && k && !u.offsetParent && u !== Wt && (O = d.display, d.display = "block", j = u.parentNode, (!j || !u.offsetParent) && (K = 1, U = u.nextSibling, Wt.appendChild(u)), T = Be(u, Wi, null, !0), k = !T || T === "none" || T === "matrix(1, 0, 0, 1, 0, 0)", O ? d.display = O : _e(d, "display"), K && (U ? j.insertBefore(u, U) : j ? j.appendChild(u) : Wt.removeChild(u))), (y.svg || u.getCTM && v(u)) && (k && (d[ct] + "").indexOf("matrix") !== -1 && (T = d[ct], k = 0), b = u.getAttribute("transform"), k && b && (b = u.transform.baseVal.consolidate().matrix, T = "matrix(" + b.a + "," + b.b + "," + b.c + "," + b.d + "," + b.e + "," + b.f + ")", k = 0)), k)
      return ee;
    for (b = (T || "").match(m) || [], ft = b.length; --ft > -1; )
      O = Number(b[ft]), b[ft] = (K = O - (O |= 0)) ? (K * R + (K < 0 ? -0.5 : 0.5) | 0) / R + O : O;
    return o && b.length > 6 ? [b[0], b[1], b[4], b[5], b[12], b[13]] : b;
  }, Ce = Re.getTransform = function(u, o, y, R) {
    if (u._gsTransform && y && !R)
      return u._gsTransform;
    var d = y ? u._gsTransform || new vi() : new vi(), k = d.scaleX < 0, T = 2e-5, b = 1e5, O = Bt && (parseFloat(Be(u, bi, o, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0, K = parseFloat(e.defaultTransformPerspective) || 0, U, j, Q, ie, re, J;
    if (d.svg = !!(u.getCTM && v(u)), d.svg && (oA(u, Be(u, bi, o, !1, "50% 50%") + "", d, u.getAttribute("data-svg-origin")), ii = e.useSVGTransformAttr || dr), U = le(u), U !== ee) {
      if (U.length === 16) {
        var se = U[0], H = U[1], oe = U[2], we = U[3], Ie = U[4], Te = U[5], Ee = U[6], Se = U[7], Fe = U[8], xe = U[9], He = U[10], fi = U[12], hi = U[13], Rt = U[14], _t = U[11], ge = Math.atan2(Ee, He), st, at, ci, Ye, be;
        d.zOrigin && (Rt = -d.zOrigin, fi = Fe * Rt - U[12], hi = xe * Rt - U[13], Rt = He * Rt + d.zOrigin - U[14]), d.rotationX = ge * ne, ge && (Ye = Math.cos(-ge), be = Math.sin(-ge), st = Ie * Ye + Fe * be, at = Te * Ye + xe * be, ci = Ee * Ye + He * be, Fe = Ie * -be + Fe * Ye, xe = Te * -be + xe * Ye, He = Ee * -be + He * Ye, _t = Se * -be + _t * Ye, Ie = st, Te = at, Ee = ci), ge = Math.atan2(-oe, He), d.rotationY = ge * ne, ge && (Ye = Math.cos(-ge), be = Math.sin(-ge), st = se * Ye - Fe * be, at = H * Ye - xe * be, ci = oe * Ye - He * be, xe = H * be + xe * Ye, He = oe * be + He * Ye, _t = we * be + _t * Ye, se = st, H = at, oe = ci), ge = Math.atan2(H, se), d.rotation = ge * ne, ge && (Ye = Math.cos(ge), be = Math.sin(ge), st = se * Ye + H * be, at = Ie * Ye + Te * be, ci = Fe * Ye + xe * be, H = H * Ye - se * be, Te = Te * Ye - Ie * be, xe = xe * Ye - Fe * be, se = st, Ie = at, Fe = ci), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), ge = Math.atan2(Ie, Te), d.scaleX = (Math.sqrt(se * se + H * H + oe * oe) * b + 0.5 | 0) / b, d.scaleY = (Math.sqrt(Te * Te + Ee * Ee) * b + 0.5 | 0) / b, d.scaleZ = (Math.sqrt(Fe * Fe + xe * xe + He * He) * b + 0.5 | 0) / b, se /= d.scaleX, Ie /= d.scaleY, H /= d.scaleX, Te /= d.scaleY, Math.abs(ge) > T ? (d.skewX = ge * ne, Ie = 0, d.skewType !== "simple" && (d.scaleY *= 1 / Math.cos(ge))) : d.skewX = 0, d.perspective = _t ? 1 / (_t < 0 ? -_t : _t) : 0, d.x = fi, d.y = hi, d.z = Rt, d.svg && (d.x -= d.xOrigin - (d.xOrigin * se - d.yOrigin * Ie), d.y -= d.yOrigin - (d.yOrigin * H - d.xOrigin * Te));
      } else if (!Bt || R || !U.length || d.x !== U[4] || d.y !== U[5] || !d.rotationX && !d.rotationY) {
        var Ct = U.length >= 6, Gt = Ct ? U[0] : 1, bt = U[1] || 0, lA = U[2] || 0, uA = Ct ? U[3] : 1;
        d.x = U[4] || 0, d.y = U[5] || 0, Q = Math.sqrt(Gt * Gt + bt * bt), ie = Math.sqrt(uA * uA + lA * lA), re = Gt || bt ? Math.atan2(bt, Gt) * ne : d.rotation || 0, J = lA || uA ? Math.atan2(lA, uA) * ne + re : d.skewX || 0, d.scaleX = Q, d.scaleY = ie, d.rotation = re, d.skewX = J, Bt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = K, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * Gt + d.yOrigin * lA), d.y -= d.yOrigin - (d.xOrigin * bt + d.yOrigin * uA));
      }
      Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (k ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = O;
      for (j in d)
        d[j] < T && d[j] > -T && (d[j] = 0);
    }
    return y && (u._gsTransform = d, d.svg && (ii && u.style[ct] ? ke.delayedCall(1e-3, function() {
      _e(u.style, ct);
    }) : !ii && u.getAttribute("transform") && ke.delayedCall(1e-3, function() {
      u.removeAttribute("transform");
    }))), d;
  }, Le = function(u) {
    var o = this.data, y = -o.rotation * G, R = y + o.skewX * G, d = 1e5, k = (Math.cos(y) * o.scaleX * d | 0) / d, T = (Math.sin(y) * o.scaleX * d | 0) / d, b = (Math.sin(R) * -o.scaleY * d | 0) / d, O = (Math.cos(R) * o.scaleY * d | 0) / d, K = this.t.style, U = this.t.currentStyle, j, Q;
    if (U) {
      Q = T, T = -b, b = -Q, j = U.filter, K.filter = "";
      var ie = this.t.offsetWidth, re = this.t.offsetHeight, J = U.position !== "absolute", se = "progid:DXImageTransform.Microsoft.Matrix(M11=" + k + ", M12=" + T + ", M21=" + b + ", M22=" + O, H = o.x + ie * o.xPercent / 100, oe = o.y + re * o.yPercent / 100, we, Ie;
      if (o.ox != null && (we = (o.oxp ? ie * o.ox * 0.01 : o.ox) - ie / 2, Ie = (o.oyp ? re * o.oy * 0.01 : o.oy) - re / 2, H += we - (we * k + Ie * T), oe += Ie - (we * b + Ie * O)), J ? (we = ie / 2, Ie = re / 2, se += ", Dx=" + (we - (we * k + Ie * T) + H) + ", Dy=" + (Ie - (we * b + Ie * O) + oe) + ")") : se += ", sizingMethod='auto expand')", j.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? K.filter = j.replace(W, se) : K.filter = se + " " + j, (u === 0 || u === 1) && k === 1 && T === 0 && b === 0 && O === 1 && (!J || se.indexOf("Dx=0, Dy=0") !== -1) && (!q.test(j) || parseFloat(RegExp.$1) === 100) && j.indexOf(j.indexOf("Alpha")) === -1 && K.removeAttribute("filter"), !J) {
        var Te = yt < 8 ? 1 : -1, Ee, Se, Fe;
        for (we = o.ieOffsetX || 0, Ie = o.ieOffsetY || 0, o.ieOffsetX = Math.round((ie - ((k < 0 ? -k : k) * ie + (T < 0 ? -T : T) * re)) / 2 + H), o.ieOffsetY = Math.round((re - ((O < 0 ? -O : O) * re + (b < 0 ? -b : b) * ie)) / 2 + oe), ft = 0; ft < 4; ft++)
          Se = C[ft], Ee = U[Se], Q = Ee.indexOf("px") !== -1 ? parseFloat(Ee) : Et(this.t, Se, parseFloat(Ee), Ee.replace(S, "")) || 0, Q !== o[Se] ? Fe = ft < 2 ? -o.ieOffsetX : -o.ieOffsetY : Fe = ft < 2 ? we - o.ieOffsetX : Ie - o.ieOffsetY, K[Se] = (o[Se] = Math.round(Q - Fe * (ft === 0 || ft === 2 ? 1 : Te))) + "px";
      }
    }
  }, Ge = Re.set3DTransformRatio = Re.setTransformRatio = function(u) {
    var o = this.data, y = this.t.style, R = o.rotation, d = o.rotationX, k = o.rotationY, T = o.scaleX, b = o.scaleY, O = o.scaleZ, K = o.x, U = o.y, j = o.z, Q = o.svg, ie = o.perspective, re = o.force3D, J = o.skewY, se = o.skewX, H, oe, we, Ie, Te, Ee, Se, Fe, xe, He, fi, hi, Rt, _t, ge, st, at, ci, Ye, be, Ct, Gt, bt;
    if (J && (se += J, R += J), ((u === 1 || u === 0) && re === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !re) && !j && !ie && !k && !d && O === 1 || ii && Q || !Bt) {
      R || se || Q ? (R *= G, Gt = se * G, bt = 1e5, oe = Math.cos(R) * T, Te = Math.sin(R) * T, we = Math.sin(R - Gt) * -b, Ee = Math.cos(R - Gt) * b, Gt && o.skewType === "simple" && (H = Math.tan(Gt - J * G), H = Math.sqrt(1 + H * H), we *= H, Ee *= H, J && (H = Math.tan(J * G), H = Math.sqrt(1 + H * H), oe *= H, Te *= H)), Q && (K += o.xOrigin - (o.xOrigin * oe + o.yOrigin * we) + o.xOffset, U += o.yOrigin - (o.xOrigin * Te + o.yOrigin * Ee) + o.yOffset, ii && (o.xPercent || o.yPercent) && (ge = this.t.getBBox(), K += o.xPercent * 0.01 * ge.width, U += o.yPercent * 0.01 * ge.height), ge = 1e-6, K < ge && K > -ge && (K = 0), U < ge && U > -ge && (U = 0)), Ye = (oe * bt | 0) / bt + "," + (Te * bt | 0) / bt + "," + (we * bt | 0) / bt + "," + (Ee * bt | 0) / bt + "," + K + "," + U + ")", Q && ii ? this.t.setAttribute("transform", "matrix(" + Ye) : y[ct] = (o.xPercent || o.yPercent ? "translate(" + o.xPercent + "%," + o.yPercent + "%) matrix(" : "matrix(") + Ye) : y[ct] = (o.xPercent || o.yPercent ? "translate(" + o.xPercent + "%," + o.yPercent + "%) matrix(" : "matrix(") + T + ",0,0," + b + "," + K + "," + U + ")";
      return;
    }
    if (Ti && (ge = 1e-4, T < ge && T > -ge && (T = O = 2e-5), b < ge && b > -ge && (b = O = 2e-5), ie && !o.z && !o.rotationX && !o.rotationY && (ie = 0)), R || se)
      R *= G, st = oe = Math.cos(R), at = Te = Math.sin(R), se && (R -= se * G, st = Math.cos(R), at = Math.sin(R), o.skewType === "simple" && (H = Math.tan((se - J) * G), H = Math.sqrt(1 + H * H), st *= H, at *= H, o.skewY && (H = Math.tan(J * G), H = Math.sqrt(1 + H * H), oe *= H, Te *= H))), we = -at, Ee = st;
    else if (!k && !d && O === 1 && !ie && !Q) {
      y[ct] = (o.xPercent || o.yPercent ? "translate(" + o.xPercent + "%," + o.yPercent + "%) translate3d(" : "translate3d(") + K + "px," + U + "px," + j + "px)" + (T !== 1 || b !== 1 ? " scale(" + T + "," + b + ")" : "");
      return;
    } else
      oe = Ee = 1, we = Te = 0;
    He = 1, Ie = Se = Fe = xe = fi = hi = 0, Rt = ie ? -1 / ie : 0, _t = o.zOrigin, ge = 1e-6, be = ",", Ct = "0", R = k * G, R && (st = Math.cos(R), at = Math.sin(R), Fe = -at, fi = Rt * -at, Ie = oe * at, Se = Te * at, He = st, Rt *= st, oe *= st, Te *= st), R = d * G, R && (st = Math.cos(R), at = Math.sin(R), H = we * st + Ie * at, ci = Ee * st + Se * at, xe = He * at, hi = Rt * at, Ie = we * -at + Ie * st, Se = Ee * -at + Se * st, He = He * st, Rt = Rt * st, we = H, Ee = ci), O !== 1 && (Ie *= O, Se *= O, He *= O, Rt *= O), b !== 1 && (we *= b, Ee *= b, xe *= b, hi *= b), T !== 1 && (oe *= T, Te *= T, Fe *= T, fi *= T), (_t || Q) && (_t && (K += Ie * -_t, U += Se * -_t, j += He * -_t + _t), Q && (K += o.xOrigin - (o.xOrigin * oe + o.yOrigin * we) + o.xOffset, U += o.yOrigin - (o.xOrigin * Te + o.yOrigin * Ee) + o.yOffset), K < ge && K > -ge && (K = Ct), U < ge && U > -ge && (U = Ct), j < ge && j > -ge && (j = 0)), Ye = o.xPercent || o.yPercent ? "translate(" + o.xPercent + "%," + o.yPercent + "%) matrix3d(" : "matrix3d(", Ye += (oe < ge && oe > -ge ? Ct : oe) + be + (Te < ge && Te > -ge ? Ct : Te) + be + (Fe < ge && Fe > -ge ? Ct : Fe), Ye += be + (fi < ge && fi > -ge ? Ct : fi) + be + (we < ge && we > -ge ? Ct : we) + be + (Ee < ge && Ee > -ge ? Ct : Ee), d || k || O !== 1 ? (Ye += be + (xe < ge && xe > -ge ? Ct : xe) + be + (hi < ge && hi > -ge ? Ct : hi) + be + (Ie < ge && Ie > -ge ? Ct : Ie), Ye += be + (Se < ge && Se > -ge ? Ct : Se) + be + (He < ge && He > -ge ? Ct : He) + be + (Rt < ge && Rt > -ge ? Ct : Rt) + be) : Ye += ",0,0,0,0,1,0,", Ye += K + be + U + be + j + be + (ie ? 1 + -j / ie : 1) + ")", y[ct] = Ye;
  };
  f = vi.prototype, f.x = f.y = f.z = f.skewX = f.skewY = f.rotation = f.rotationX = f.rotationY = f.zOrigin = f.xPercent = f.yPercent = f.xOffset = f.yOffset = 0, f.scaleX = f.scaleY = f.scaleZ = 1, We("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(u, o, y, R, d, k, T) {
    if (R._lastParsedTransform === T)
      return d;
    R._lastParsedTransform = T;
    var b = T.scale && typeof T.scale == "function" ? T.scale : 0;
    b && (T.scale = b(gt, u));
    var O = u._gsTransform, K = u.style, U = 1e-6, j = sA.length, Q = T, ie = {}, re = "transformOrigin", J = Ce(u, r, !0, Q.parseTransform), se = Q.transform && (typeof Q.transform == "function" ? Q.transform(gt, St) : Q.transform), H, oe, we, Ie, Te, Ee, Se, Fe, xe;
    if (J.skewType = Q.skewType || J.skewType || e.defaultSkewType, R._transform = J, "rotationZ" in Q && (Q.rotation = Q.rotationZ), se && typeof se == "string" && ct)
      oe = qe.style, oe[ct] = se, oe.display = "block", oe.position = "absolute", se.indexOf("%") !== -1 && (oe.width = Be(u, "width"), oe.height = Be(u, "height")), fe.body.appendChild(qe), H = Ce(qe, null, !1), J.skewType === "simple" && (H.scaleY *= Math.cos(H.skewX * G)), J.svg && (Ee = J.xOrigin, Se = J.yOrigin, H.x -= J.xOffset, H.y -= J.yOffset, (Q.transformOrigin || Q.svgOrigin) && (se = {}, oA(u, P(Q.transformOrigin), se, Q.svgOrigin, Q.smoothOrigin, !0), Ee = se.xOrigin, Se = se.yOrigin, H.x -= se.xOffset - J.xOffset, H.y -= se.yOffset - J.yOffset), (Ee || Se) && (Fe = le(qe, !0), H.x -= Ee - (Ee * Fe[0] + Se * Fe[2]), H.y -= Se - (Ee * Fe[1] + Se * Fe[3]))), fe.body.removeChild(qe), H.perspective || (H.perspective = J.perspective), Q.xPercent != null && (H.xPercent = Z(Q.xPercent, J.xPercent)), Q.yPercent != null && (H.yPercent = Z(Q.yPercent, J.yPercent));
    else if (typeof Q == "object") {
      if (H = {
        scaleX: Z(Q.scaleX != null ? Q.scaleX : Q.scale, J.scaleX),
        scaleY: Z(Q.scaleY != null ? Q.scaleY : Q.scale, J.scaleY),
        scaleZ: Z(Q.scaleZ, J.scaleZ),
        x: Z(Q.x, J.x),
        y: Z(Q.y, J.y),
        z: Z(Q.z, J.z),
        xPercent: Z(Q.xPercent, J.xPercent),
        yPercent: Z(Q.yPercent, J.yPercent),
        perspective: Z(Q.transformPerspective, J.perspective)
      }, Te = Q.directionalRotation, Te != null)
        if (typeof Te == "object")
          for (oe in Te)
            Q[oe] = Te[oe];
        else
          Q.rotation = Te;
      typeof Q.x == "string" && Q.x.indexOf("%") !== -1 && (H.x = 0, H.xPercent = Z(Q.x, J.xPercent)), typeof Q.y == "string" && Q.y.indexOf("%") !== -1 && (H.y = 0, H.yPercent = Z(Q.y, J.yPercent)), H.rotation = $("rotation" in Q ? Q.rotation : "shortRotation" in Q ? Q.shortRotation + "_short" : J.rotation, J.rotation, "rotation", ie), Bt && (H.rotationX = $("rotationX" in Q ? Q.rotationX : "shortRotationX" in Q ? Q.shortRotationX + "_short" : J.rotationX || 0, J.rotationX, "rotationX", ie), H.rotationY = $("rotationY" in Q ? Q.rotationY : "shortRotationY" in Q ? Q.shortRotationY + "_short" : J.rotationY || 0, J.rotationY, "rotationY", ie)), H.skewX = $(Q.skewX, J.skewX), H.skewY = $(Q.skewY, J.skewY);
    }
    for (Bt && Q.force3D != null && (J.force3D = Q.force3D, Ie = !0), we = J.force3D || J.z || J.rotationX || J.rotationY || H.z || H.rotationX || H.rotationY || H.perspective, !we && Q.scale != null && (H.scaleZ = 1); --j > -1; )
      xe = sA[j], se = H[xe] - J[xe], (se > U || se < -U || Q[xe] != null || Ae[xe] != null) && (Ie = !0, d = new tt(J, xe, J[xe], se, d), xe in ie && (d.e = ie[xe]), d.xs0 = 0, d.plugin = k, R._overwriteProps.push(d.n));
    return se = typeof Q.transformOrigin == "function" ? Q.transformOrigin(gt, St) : Q.transformOrigin, J.svg && (se || Q.svgOrigin) && (Ee = J.xOffset, Se = J.yOffset, oA(u, P(se), H, Q.svgOrigin, Q.smoothOrigin), d = Vi(J, "xOrigin", (O ? J : H).xOrigin, H.xOrigin, d, re), d = Vi(J, "yOrigin", (O ? J : H).yOrigin, H.yOrigin, d, re), (Ee !== J.xOffset || Se !== J.yOffset) && (d = Vi(J, "xOffset", O ? Ee : J.xOffset, J.xOffset, d, re), d = Vi(J, "yOffset", O ? Se : J.yOffset, J.yOffset, d, re)), se = "0px 0px"), (se || Bt && we && J.zOrigin) && (ct ? (Ie = !0, xe = bi, se || (se = (Be(u, xe, r, !1, "50% 50%") + "").split(" "), se = se[0] + " " + se[1] + " " + J.zOrigin + "px"), se += "", d = new tt(K, xe, 0, 0, d, -1, re), d.b = K[xe], d.plugin = k, Bt ? (oe = J.zOrigin, se = se.split(" "), J.zOrigin = (se.length > 2 ? parseFloat(se[2]) : oe) || 0, d.xs0 = d.e = se[0] + " " + (se[1] || "50%") + " 0px", d = new tt(J, "zOrigin", 0, 0, d, -1, d.n), d.b = oe, d.xs0 = d.e = J.zOrigin) : d.xs0 = d.e = se) : P(se + "", J)), Ie && (R._transformType = !(J.svg && ii) && (we || this._transformType === 3) ? 3 : 2), b && (T.scale = b), d;
  }, allowFunc: !0, prefix: !0 }), We("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), We("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: Je("inset(0% 0% 0% 0%)", !1, !0) }), We("borderRadius", { defaultValue: "0px", parser: function(u, o, y, R, d, k) {
    o = this.format(o);
    var T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], b = u.style, O, K, U, j, Q, ie, re, J, se, H, oe, we, Ie, Te, Ee, Se;
    for (se = parseFloat(u.offsetWidth), H = parseFloat(u.offsetHeight), O = o.split(" "), K = 0; K < T.length; K++)
      this.p.indexOf("border") && (T[K] = Qt(T[K])), Q = j = Be(u, T[K], r, !1, "0px"), Q.indexOf(" ") !== -1 && (j = Q.split(" "), Q = j[0], j = j[1]), ie = U = O[K], re = parseFloat(Q), we = Q.substr((re + "").length), Ie = ie.charAt(1) === "=", Ie ? (J = parseInt(ie.charAt(0) + "1", 10), ie = ie.substr(2), J *= parseFloat(ie), oe = ie.substr((J + "").length - (J < 0 ? 1 : 0)) || "") : (J = parseFloat(ie), oe = ie.substr((J + "").length)), oe === "" && (oe = A[y] || we), oe !== we && (Te = Et(u, "borderLeft", re, we), Ee = Et(u, "borderTop", re, we), oe === "%" ? (Q = Te / se * 100 + "%", j = Ee / H * 100 + "%") : oe === "em" ? (Se = Et(u, "borderLeft", 1, "em"), Q = Te / Se + "em", j = Ee / Se + "em") : (Q = Te + "px", j = Ee + "px"), Ie && (ie = parseFloat(Q) + J + oe, U = parseFloat(j) + J + oe)), d = li(b, T[K], Q + " " + j, ie + " " + U, !1, "0px", d);
    return d;
  }, prefix: !0, formatter: Je("0px 0px 0px 0px", !1, !0) }), We("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(u, o, y, R, d, k) {
    return li(u.style, y, this.format(Be(u, y, r, !1, "0px 0px")), this.format(o), !1, "0px", d);
  }, prefix: !0, formatter: Je("0px 0px", !1, !0) }), We("backgroundPosition", { defaultValue: "0 0", parser: function(u, o, y, R, d, k) {
    var T = "background-position", b = r || wt(u), O = this.format((b ? yt ? b.getPropertyValue(T + "-x") + " " + b.getPropertyValue(T + "-y") : b.getPropertyValue(T) : u.currentStyle.backgroundPositionX + " " + u.currentStyle.backgroundPositionY) || "0 0"), K = this.format(o), U, j, Q, ie, re, J;
    if (O.indexOf("%") !== -1 != (K.indexOf("%") !== -1) && K.split(",").length < 2 && (J = Be(u, "backgroundImage").replace(B, ""), J && J !== "none")) {
      for (U = O.split(" "), j = K.split(" "), Xe.setAttribute("src", J), Q = 2; --Q > -1; )
        O = U[Q], ie = O.indexOf("%") !== -1, ie !== (j[Q].indexOf("%") !== -1) && (re = Q === 0 ? u.offsetWidth - Xe.width : u.offsetHeight - Xe.height, U[Q] = ie ? parseFloat(O) / 100 * re + "px" : parseFloat(O) / re * 100 + "%");
      O = U.join(" ");
    }
    return this.parseComplex(u.style, O, K, d, k);
  }, formatter: P }), We("backgroundSize", { defaultValue: "0 0", formatter: function(u) {
    return u += "", u.substr(0, 2) === "co" ? u : P(u.indexOf(" ") === -1 ? u + " " + u : u);
  } }), We("perspective", { defaultValue: "0px", prefix: !0 }), We("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), We("transformStyle", { prefix: !0 }), We("backfaceVisibility", { prefix: !0 }), We("userSelect", { prefix: !0 }), We("margin", { parser: Yt("marginTop,marginRight,marginBottom,marginLeft") }), We("padding", { parser: Yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), We("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(u, o, y, R, d, k) {
    var T, b, O;
    return yt < 9 ? (b = u.currentStyle, O = yt < 8 ? " " : ",", T = "rect(" + b.clipTop + O + b.clipRight + O + b.clipBottom + O + b.clipLeft + ")", o = this.format(o).split(",").join(O)) : (T = this.format(Be(u, this.p, r, !1, this.dflt)), o = this.format(o)), this.parseComplex(u.style, T, o, d, k);
  } }), We("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), We("autoRound,strictUnits", { parser: function(u, o, y, R, d) {
    return d;
  } }), We("border", { defaultValue: "0px solid #000", parser: function(u, o, y, R, d, k) {
    var T = Be(u, "borderTopWidth", r, !1, "0px"), b = this.format(o).split(" "), O = b[0].replace(S, "");
    return O !== "px" && (T = parseFloat(T) / Et(u, "borderTopWidth", 1, O) + O), this.parseComplex(u.style, this.format(T + " " + Be(u, "borderTopStyle", r, !1, "solid") + " " + Be(u, "borderTopColor", r, !1, "#000")), b.join(" "), d, k);
  }, color: !0, formatter: function(u) {
    var o = u.split(" ");
    return o[0] + " " + (o[1] || "solid") + " " + (u.match(pe) || ["#000"])[0];
  } }), We("borderWidth", { parser: Yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), We("float,cssFloat,styleFloat", { parser: function(u, o, y, R, d, k) {
    var T = u.style, b = "cssFloat" in T ? "cssFloat" : "styleFloat";
    return new tt(T, b, 0, 0, d, -1, y, !1, 0, T[b], o);
  } });
  var ve = function(u) {
    var o = this.t, y = o.filter || Be(this.data, "filter") || "", R = this.s + this.c * u | 0, d;
    R === 100 && (y.indexOf("atrix(") === -1 && y.indexOf("radient(") === -1 && y.indexOf("oader(") === -1 ? (o.removeAttribute("filter"), d = !Be(this.data, "filter")) : (o.filter = y.replace(s, ""), d = !0)), d || (this.xn1 && (o.filter = y = y || "alpha(opacity=" + R + ")"), y.indexOf("pacity") === -1 ? (R !== 0 || !this.xn1) && (o.filter = y + " alpha(opacity=" + R + ")") : o.filter = y.replace(q, "opacity=" + R));
  };
  We("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(u, o, y, R, d, k) {
    var T = parseFloat(Be(u, "opacity", r, !1, "1")), b = u.style, O = y === "autoAlpha";
    return typeof o == "string" && o.charAt(1) === "=" && (o = (o.charAt(0) === "-" ? -1 : 1) * parseFloat(o.substr(2)) + T), O && T === 1 && Be(u, "visibility", r) === "hidden" && o !== 0 && (T = 0), mt ? d = new tt(b, "opacity", T, o - T, d) : (d = new tt(b, "opacity", T * 100, (o - T) * 100, d), d.xn1 = O ? 1 : 0, b.zoom = 1, d.type = 2, d.b = "alpha(opacity=" + d.s + ")", d.e = "alpha(opacity=" + (d.s + d.c) + ")", d.data = u, d.plugin = k, d.setRatio = ve), O && (d = new tt(b, "visibility", 0, 0, d, -1, null, !1, 0, T !== 0 ? "inherit" : "hidden", o === 0 ? "hidden" : "inherit"), d.xs0 = "inherit", R._overwriteProps.push(d.n), R._overwriteProps.push(y)), d;
  } });
  var _e = function(u, o) {
    o && (u.removeProperty ? ((o.substr(0, 2) === "ms" || o.substr(0, 6) === "webkit") && (o = "-" + o), u.removeProperty(o.replace(I, "-$1").toLowerCase())) : u.removeAttribute(o));
  }, Tt = function(u) {
    if (this.t._gsClassPT = this, u === 1 || u === 0) {
      this.t.setAttribute("class", u === 0 ? this.b : this.e);
      for (var o = this.data, y = this.t.style; o; )
        o.v ? y[o.p] = o.v : _e(y, o.p), o = o._next;
      u === 1 && this.t._gsClassPT === this && (this.t._gsClassPT = null);
    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
  };
  We("className", { parser: function(u, o, y, R, d, k, T) {
    var b = u.getAttribute("class") || "", O = u.style.cssText, K, U, j, Q, ie;
    if (d = R._classNamePT = new tt(u, y, 0, 0, d, 2), d.setRatio = Tt, d.pr = -11, i = !0, d.b = b, U = c(u, r), j = u._gsClassPT, j) {
      for (Q = {}, ie = j.data; ie; )
        Q[ie.p] = 1, ie = ie._next;
      j.setRatio(1);
    }
    return u._gsClassPT = d, d.e = o.charAt(1) !== "=" ? o : b.replace(new RegExp("(?:\\s|^)" + o.substr(2) + "(?![\\w-])"), "") + (o.charAt(0) === "+" ? " " + o.substr(2) : ""), u.setAttribute("class", d.e), K = x(u, U, c(u), T, Q), u.setAttribute("class", b), d.data = K.firstMPT, u.style.cssText !== O && (u.style.cssText = O), d = d.xfirst = R.parse(u, K.difs, d, k), d;
  } });
  var nt = function(u) {
    if ((u === 1 || u === 0) && this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
      var o = this.t.style, y = l.transform.parse, R, d, k, T, b;
      if (this.e === "all")
        o.cssText = "", T = !0;
      else
        for (R = this.e.split(" ").join("").split(","), k = R.length; --k > -1; )
          d = R[k], l[d] && (l[d].parse === y ? T = !0 : d = d === "transformOrigin" ? bi : l[d].p), _e(o, d);
      T && (_e(o, ct), b = this.t._gsTransform, b && (b.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
    }
  };
  for (We("clearProps", { parser: function(u, o, y, R, d) {
    return d = new tt(u, y, 0, 0, d, 2), d.setRatio = nt, d.e = o, d.pr = -10, d.data = R._tween, i = !0, d;
  } }), f = "bezier,throwProps,physicsProps,physics2D".split(","), ft = f.length; ft--; )
    nA(f[ft]);
  f = e.prototype, f._firstPT = f._lastParsedTransform = f._transform = null, f._onInitTween = function(u, o, y, R) {
    if (!u.nodeType)
      return !1;
    this._target = St = u, this._tween = y, this._vars = o, gt = R, Dt = o.autoRound, i = !1, A = o.suffixMap || e.suffixMap, r = wt(u), n = this._overwriteProps;
    var d = u.style, k, T, b, O, K, U, j, Q, ie;
    if (et && d.zIndex === "" && (k = Be(u, "zIndex", r), (k === "auto" || k === "") && this._addLazySet(d, "zIndex", 0)), typeof o == "string" && (O = d.cssText, k = c(u, r), d.cssText = O + ";" + o, k = x(u, k, c(u)).difs, !mt && w.test(o) && (k.opacity = parseFloat(RegExp.$1)), o = k, d.cssText = O), o.className ? this._firstPT = T = l.className.parse(u, o.className, "className", this, null, null, o) : this._firstPT = T = this.parse(u, o, null), this._transformType) {
      for (ie = this._transformType === 3, ct ? ai && (et = !0, d.zIndex === "" && (j = Be(u, "zIndex", r), (j === "auto" || j === "") && this._addLazySet(d, "zIndex", 0)), xi && this._addLazySet(d, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (ie ? "visible" : "hidden"))) : d.zoom = 1, b = T; b && b._next; )
        b = b._next;
      Q = new tt(u, "transform", 0, 0, null, 2), this._linkCSSP(Q, null, b), Q.setRatio = ct ? Ge : Le, Q.data = this._transform || Ce(u, r, !0), Q.tween = y, Q.pr = -1, n.pop();
    }
    if (i) {
      for (; T; ) {
        for (U = T._next, b = O; b && b.pr > T.pr; )
          b = b._next;
        (T._prev = b ? b._prev : K) ? T._prev._next = T : O = T, (T._next = b) ? b._prev = T : K = T, T = U;
      }
      this._firstPT = O;
    }
    return !0;
  }, f.parse = function(u, o, y, R) {
    var d = u.style, k, T, b, O, K, U, j, Q, ie, re;
    for (k in o) {
      if (U = o[k], T = l[k], typeof U == "function" && !(T && T.allowFunc) && (U = U(gt, St)), T)
        y = T.parse(u, U, k, this, y, R, o);
      else if (k.substr(0, 2) === "--") {
        this._tween._propLookup[k] = this._addTween.call(this._tween, u.style, "setProperty", wt(u).getPropertyValue(k) + "", U + "", k, !1, k);
        continue;
      } else
        K = Be(u, k, r) + "", ie = typeof U == "string", k === "color" || k === "fill" || k === "stroke" || k.indexOf("Color") !== -1 || ie && a.test(U) ? (ie || (U = de(U), U = (U.length > 3 ? "rgba(" : "rgb(") + U.join(",") + ")"), y = li(d, k, K, U, !0, "transparent", y, 0, R)) : ie && ae.test(U) ? y = li(d, k, K, U, !0, null, y, 0, R) : (b = parseFloat(K), j = b || b === 0 ? K.substr((b + "").length) : "", (K === "" || K === "auto") && (k === "width" || k === "height" ? (b = Y(u, k, r), j = "px") : k === "left" || k === "top" ? (b = It(u, k, r), j = "px") : (b = k !== "opacity" ? 0 : 1, j = "")), re = ie && U.charAt(1) === "=", re ? (O = parseInt(U.charAt(0) + "1", 10), U = U.substr(2), O *= parseFloat(U), Q = U.replace(S, "")) : (O = parseFloat(U), Q = ie ? U.replace(S, "") : ""), Q === "" && (Q = k in A ? A[k] : j), U = O || O === 0 ? (re ? O + b : O) + Q : o[k], j !== Q && (Q !== "" || k === "lineHeight") && (O || O === 0) && b && (b = Et(u, k, b, j), Q === "%" ? (b /= Et(u, k, 100, "%") / 100, o.strictUnits !== !0 && (K = b + "%")) : Q === "em" || Q === "rem" || Q === "vw" || Q === "vh" ? b /= Et(u, k, 1, Q) : Q !== "px" && (O = Et(u, k, O, Q), Q = "px"), re && (O || O === 0) && (U = O + b + Q)), re && (O += b), (b || b === 0) && (O || O === 0) ? (y = new tt(d, k, b, O - b, y, 0, k, Dt !== !1 && (Q === "px" || k === "zIndex"), 0, K, U), y.xs0 = Q) : d[k] === void 0 || !U && (U + "" == "NaN" || U == null) ? ti("invalid " + k + " tween value: " + o[k]) : (y = new tt(d, k, O || b || 0, 0, y, -1, k, !1, 0, K, U), y.xs0 = U === "none" && (k === "display" || k.indexOf("Style") !== -1) ? K : U));
      R && y && !y.plugin && (y.plugin = R);
    }
    return y;
  }, f.setRatio = function(u) {
    var o = this._firstPT, y = 1e-6, R, d, k;
    if (u === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0))
      for (; o; ) {
        if (o.type !== 2)
          if (o.r && o.type !== -1) {
            if (R = o.r(o.s + o.c), !o.type)
              o.t[o.p] = R + o.xs0;
            else if (o.type === 1) {
              for (k = o.l, d = o.xs0 + R + o.xs1, k = 1; k < o.l; k++)
                d += o["xn" + k] + o["xs" + (k + 1)];
              o.t[o.p] = d;
            }
          } else
            o.t[o.p] = o.e;
        else
          o.setRatio(u);
        o = o._next;
      }
    else if (u || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -1e-6)
      for (; o; ) {
        if (R = o.c * u + o.s, o.r ? R = o.r(R) : R < y && R > -y && (R = 0), !o.type)
          o.t[o.p] = R + o.xs0;
        else if (o.type === 1)
          if (k = o.l, k === 2)
            o.t[o.p] = o.xs0 + R + o.xs1 + o.xn1 + o.xs2;
          else if (k === 3)
            o.t[o.p] = o.xs0 + R + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
          else if (k === 4)
            o.t[o.p] = o.xs0 + R + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
          else if (k === 5)
            o.t[o.p] = o.xs0 + R + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
          else {
            for (d = o.xs0 + R + o.xs1, k = 1; k < o.l; k++)
              d += o["xn" + k] + o["xs" + (k + 1)];
            o.t[o.p] = d;
          }
        else o.type === -1 ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(u);
        o = o._next;
      }
    else
      for (; o; )
        o.type !== 2 ? o.t[o.p] = o.b : o.setRatio(u), o = o._next;
  }, f._enableTransforms = function(u) {
    this._transform = this._transform || Ce(this._target, r, !0), this._transformType = !(this._transform.svg && ii) && (u || this._transformType === 3) ? 3 : 2;
  };
  var ot = function(u) {
    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
  };
  f._addLazySet = function(u, o, y) {
    var R = this._firstPT = new tt(u, o, 0, 0, this._firstPT, 2);
    R.e = y, R.setRatio = ot, R.data = this;
  }, f._linkCSSP = function(u, o, y, R) {
    return u && (o && (o._prev = u), u._next && (u._next._prev = u._prev), u._prev ? u._prev._next = u._next : this._firstPT === u && (this._firstPT = u._next, R = !0), y ? y._next = u : !R && this._firstPT === null && (this._firstPT = u), u._next = o, u._prev = y), u;
  }, f._mod = function(u) {
    for (var o = this._firstPT; o; )
      typeof u[o.p] == "function" && (o.r = u[o.p]), o = o._next;
  }, f._kill = function(u) {
    var o = u, y, R, d;
    if (u.autoAlpha || u.alpha) {
      o = {};
      for (R in u)
        o[R] = u[R];
      o.opacity = 1, o.autoAlpha && (o.visibility = 1);
    }
    for (u.className && (y = this._classNamePT) && (d = y.xfirst, d && d._prev ? this._linkCSSP(d._prev, y._next, d._prev._prev) : d === this._firstPT && (this._firstPT = y._next), y._next && this._linkCSSP(y._next, y._next._next, d._prev), this._classNamePT = null), y = this._firstPT; y; )
      y.plugin && y.plugin !== R && y.plugin._kill && (y.plugin._kill(u), R = y.plugin), y = y._next;
    return QA.prototype._kill.call(this, o);
  };
  var xt = function(u, o, y) {
    var R, d, k, T;
    if (u.slice) {
      for (d = u.length; --d > -1; )
        xt(u[d], o, y);
      return;
    }
    for (R = u.childNodes, d = R.length; --d > -1; )
      k = R[d], T = k.type, k.style && (o.push(c(k)), y && y.push(k)), (T === 1 || T === 9 || T === 11) && k.childNodes.length && xt(k, o, y);
  };
  return e.cascadeTo = function(u, o, y) {
    var R = ke.to(u, o, y), d = [R], k = [], T = [], b = [], O = ke._internals.reservedProps, K, U, j, Q;
    for (u = R._targets || R.target, xt(u, k, b), R.render(o, !0, !0), xt(u, T), R.render(0, !0, !0), R._enabled(!0), K = b.length; --K > -1; )
      if (U = x(b[K], k[K], T[K]), U.firstMPT) {
        U = U.difs;
        for (j in y)
          O[j] && (U[j] = y[j]);
        Q = {};
        for (j in U)
          Q[j] = k[K][j];
        d.push(ke.fromTo(b[K], o, Q, U));
      }
    return d;
  }, QA.activate([e]), e;
}, !0);
var wf = ut.CSSPlugin;
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var Cf = lt._gsDefine.plugin({
  propName: "attr",
  API: 2,
  version: "0.6.1",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(e, t, i, A) {
    var r, n;
    if (typeof e.setAttribute != "function")
      return !1;
    for (r in t)
      n = t[r], typeof n == "function" && (n = n(A, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
    return !0;
  }
});
/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var Os = lt._gsDefine.plugin({
  propName: "roundProps",
  version: "1.7.0",
  priority: -1,
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(e, t, i) {
    return this._tween = i, !0;
  }
}), Ef = function(e) {
  var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
  return function(i) {
    return (Math.round(i / e) * e * t | 0) / t;
  };
}, If = function(e, t) {
  for (; e; )
    !e.f && !e.blob && (e.m = t || Math.round), e = e._next;
}, Fs = Os.prototype;
Fs._onInitAllProps = function() {
  var e = this._tween, t = e.vars.roundProps, i = {}, A = e._propLookup.roundProps, r, n, l, f;
  if (typeof t == "object" && !t.push)
    for (f in t)
      i[f] = Ef(t[f]);
  else
    for (typeof t == "string" && (t = t.split(",")), l = t.length; --l > -1; )
      i[t[l]] = Math.round;
  for (f in i)
    for (r = e._firstPT; r; )
      n = r._next, r.pg ? r.t._mod(i) : r.n === f && (r.f === 2 && r.t ? If(r.t._firstPT, i[f]) : (this._add(r.t, f, r.s, r.c, i[f]), n && (n._prev = r._prev), r._prev ? r._prev._next = n : e._firstPT === r && (e._firstPT = n), r._next = r._prev = null, e._propLookup[f] = A)), r = n;
  return !1;
};
Fs._add = function(e, t, i, A, r) {
  this._addTween(e, t, i, i + A, t, r || Math.round), this._overwriteProps.push(t);
};
/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var Ys = lt._gsDefine.plugin({
  propName: "directionalRotation",
  version: "0.3.1",
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(e, t, i, A) {
    typeof t != "object" && (t = { rotation: t }), this.finals = {};
    var r = t.useRadians === !0 ? Math.PI * 2 : 360, n = 1e-6, l, f, m, E, p, h;
    for (l in t)
      l !== "useRadians" && (E = t[l], typeof E == "function" && (E = E(A, e)), h = (E + "").split("_"), f = h[0], m = parseFloat(typeof e[l] != "function" ? e[l] : e[l.indexOf("set") || typeof e["get" + l.substr(3)] != "function" ? l : "get" + l.substr(3)]()), E = this.finals[l] = typeof f == "string" && f.charAt(1) === "=" ? m + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, p = E - m, h.length && (f = h.join("_"), f.indexOf("short") !== -1 && (p = p % r, p !== p % (r / 2) && (p = p < 0 ? p + r : p - r)), f.indexOf("_cw") !== -1 && p < 0 ? p = (p + r * 9999999999) % r - (p / r | 0) * r : f.indexOf("ccw") !== -1 && p > 0 && (p = (p - r * 9999999999) % r - (p / r | 0) * r)), (p > n || p < -n) && (this._addTween(e, l, m, m + p, l), this._overwriteProps.push(l)));
    return !0;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(e) {
    var t;
    if (e !== 1)
      this._super.setRatio.call(this, e);
    else
      for (t = this._firstPT; t; )
        t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next;
  }
});
Ys._autoCSS = !0;
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
lt._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
  var e = function(s) {
    Yi.call(this, s);
    var a = this, I = a.vars, g, B;
    a._labels = {}, a.autoRemoveChildren = !!I.autoRemoveChildren, a.smoothChildTiming = !!I.smoothChildTiming, a._sortChildren = !0, a._onUpdate = I.onUpdate;
    for (B in I)
      g = I[B], n(g) && g.join("").indexOf("{self}") !== -1 && (I[B] = a._swapSelfInParams(g));
    n(I.tweens) && a.add(I.tweens, 0, I.align, I.stagger);
  }, t = 1e-8, i = ke._internals, A = e._internals = {}, r = i.isSelector, n = i.isArray, l = i.lazyTweens, f = i.lazyRender, m = lt._gsDefine.globals, E = function(s) {
    var a = {}, I;
    for (I in s)
      a[I] = s[I];
    return a;
  }, p = function(s, a, I) {
    var g = s.cycle, B, M;
    for (B in g)
      M = g[B], s[B] = typeof M == "function" ? M(I, a[I], a) : M[I % M.length];
    delete s.cycle;
  }, h = A.pauseCallback = function() {
  }, D = function(s) {
    var a = [], I = s.length, g;
    for (g = 0; g !== I; a.push(s[g++])) ;
    return a;
  }, S = function(s, a, I, g) {
    var B = "immediateRender";
    return B in a || (a[B] = !(I && I[B] === !1 || g)), a;
  }, q = function(s) {
    if (typeof s == "function")
      return s;
    var a = typeof s == "object" ? s : { each: s }, I = a.ease, g = a.from || 0, B = a.base || 0, M = {}, L = isNaN(g), N = a.axis, W = { center: 0.5, end: 1 }[g] || 0;
    return function(F, ae, G) {
      var ne = (G || a).length, Ae = M[ne], X, fe, Oe, qe, Xe, Re, rt, Dt, et;
      if (!Ae) {
        if (et = a.grid === "auto" ? 0 : (a.grid || [1 / 0])[0], !et) {
          for (rt = -1 / 0; rt < (rt = G[et++].getBoundingClientRect().left) && et < ne; )
            ;
          et--;
        }
        for (Ae = M[ne] = [], X = L ? Math.min(et, ne) * W - 0.5 : g % et, fe = L ? ne * W / et - 0.5 : g / et | 0, rt = 0, Dt = 1 / 0, Re = 0; Re < ne; Re++)
          Oe = Re % et - X, qe = fe - (Re / et | 0), Ae[Re] = Xe = N ? Math.abs(N === "y" ? qe : Oe) : Math.sqrt(Oe * Oe + qe * qe), Xe > rt && (rt = Xe), Xe < Dt && (Dt = Xe);
        Ae.max = rt - Dt, Ae.min = Dt, Ae.v = ne = a.amount || a.each * (et > ne ? ne - 1 : N ? N === "y" ? ne / et : et : Math.max(et, ne / et)) || 0, Ae.b = ne < 0 ? B - ne : B;
      }
      return ne = (Ae[F] - Ae.min) / Ae.max, Ae.b + (I ? I.getRatio(ne) : ne) * Ae.v;
    };
  }, w = e.prototype = new Yi();
  return e.version = "2.1.3", e.distribute = q, w.constructor = e, w.kill()._gc = w._forcingPlayhead = w._hasPause = !1, w.to = function(s, a, I, g) {
    var B = I.repeat && m.TweenMax || ke;
    return a ? this.add(new B(s, a, I), g) : this.set(s, I, g);
  }, w.from = function(s, a, I, g) {
    return this.add((I.repeat && m.TweenMax || ke).from(s, a, S(this, I)), g);
  }, w.fromTo = function(s, a, I, g, B) {
    var M = g.repeat && m.TweenMax || ke;
    return g = S(this, g, I), a ? this.add(M.fromTo(s, a, I, g), B) : this.set(s, g, B);
  }, w.staggerTo = function(s, a, I, g, B, M, L, N) {
    var W = new e({ onComplete: M, onCompleteParams: L, callbackScope: N, smoothChildTiming: this.smoothChildTiming }), F = q(I.stagger || g), ae = I.startAt, G = I.cycle, ne, Ae;
    for (typeof s == "string" && (s = ke.selector(s) || s), s = s || [], r(s) && (s = D(s)), Ae = 0; Ae < s.length; Ae++)
      ne = E(I), ae && (ne.startAt = E(ae), ae.cycle && p(ne.startAt, s, Ae)), G && (p(ne, s, Ae), ne.duration != null && (a = ne.duration, delete ne.duration)), W.to(s[Ae], a, ne, F(Ae, s[Ae], s));
    return this.add(W, B);
  }, w.staggerFrom = function(s, a, I, g, B, M, L, N) {
    return I.runBackwards = !0, this.staggerTo(s, a, S(this, I), g, B, M, L, N);
  }, w.staggerFromTo = function(s, a, I, g, B, M, L, N, W) {
    return g.startAt = I, this.staggerTo(s, a, S(this, g, I), B, M, L, N, W);
  }, w.call = function(s, a, I, g) {
    return this.add(ke.delayedCall(0, s, a, I), g);
  }, w.set = function(s, a, I) {
    return this.add(new ke(s, 0, S(this, a, null, !0)), I);
  }, e.exportRoot = function(s, a) {
    s = s || {}, s.smoothChildTiming == null && (s.smoothChildTiming = !0);
    var I = new e(s), g = I._timeline, B, M, L, N;
    for (a == null && (a = !0), g._remove(I, !0), I._startTime = 0, I._rawPrevTime = I._time = I._totalTime = g._time, L = g._first; L; )
      N = L._next, (!a || !(L instanceof ke && L.target === L.vars.onComplete)) && (M = L._startTime - L._delay, M < 0 && (B = 1), I.add(L, M)), L = N;
    return g.add(I, 0), B && I.totalDuration(), I;
  }, w.add = function(s, a, I, g) {
    var B = this, M, L, N, W, F, ae;
    if (typeof a != "number" && (a = B._parseTimeOrLabel(a, 0, !0, s)), !(s instanceof Mt))
      if (s instanceof Array || s && s.push && n(s)) {
        for (I = I || "normal", g = g || 0, M = a, L = s.length, N = 0; N < L; N++)
          n(W = s[N]) && (W = new e({ tweens: W })), B.add(W, M), typeof W != "string" && typeof W != "function" && (I === "sequence" ? M = W._startTime + W.totalDuration() / W._timeScale : I === "start" && (W._startTime -= W.delay())), M += g;
        return B._uncache(!0);
      } else {
        if (typeof s == "string")
          return B.addLabel(s, a);
        if (typeof s == "function")
          s = ke.delayedCall(0, s);
        else
          throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
      }
    if (Yi.prototype.add.call(B, s, a), (s._time || !s._duration && s._initted) && (M = (B.rawTime() - s._startTime) * s._timeScale, (!s._duration || Math.abs(Math.max(0, Math.min(s.totalDuration(), M))) - s._totalTime > 1e-5) && s.render(M, !1, !1)), (B._gc || B._time === B._duration) && !B._paused && B._duration < B.duration()) for (F = B, ae = F.rawTime() > s._startTime; F._timeline; )
      ae && F._timeline.smoothChildTiming ? F.totalTime(F._totalTime, !0) : F._gc && F._enabled(!0, !1), F = F._timeline;
    return B;
  }, w.remove = function(s) {
    if (s instanceof Mt) {
      this._remove(s, !1);
      var a = s._timeline = s.vars.useFrames ? Mt._rootFramesTimeline : Mt._rootTimeline;
      return s._startTime = (s._paused ? s._pauseTime : a._time) - (s._reversed ? s.totalDuration() - s._totalTime : s._totalTime) / s._timeScale, this;
    } else if (s instanceof Array || s && s.push && n(s)) {
      for (var I = s.length; --I > -1; )
        this.remove(s[I]);
      return this;
    } else if (typeof s == "string")
      return this.removeLabel(s);
    return this.kill(null, s);
  }, w._remove = function(s, a) {
    Yi.prototype._remove.call(this, s, a);
    var I = this._last;
    return I ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
  }, w.append = function(s, a) {
    return this.add(s, this._parseTimeOrLabel(null, a, !0, s));
  }, w.insert = w.insertMultiple = function(s, a, I, g) {
    return this.add(s, a || 0, I, g);
  }, w.appendMultiple = function(s, a, I, g) {
    return this.add(s, this._parseTimeOrLabel(null, a, !0, s), I, g);
  }, w.addLabel = function(s, a) {
    return this._labels[s] = this._parseTimeOrLabel(a), this;
  }, w.addPause = function(s, a, I, g) {
    var B = ke.delayedCall(0, h, I, g || this);
    return B.vars.onComplete = B.vars.onReverseComplete = a, B.data = "isPause", this._hasPause = !0, this.add(B, s);
  }, w.removeLabel = function(s) {
    return delete this._labels[s], this;
  }, w.getLabelTime = function(s) {
    return this._labels[s] != null ? this._labels[s] : -1;
  }, w._parseTimeOrLabel = function(s, a, I, g) {
    var B, M;
    if (g instanceof Mt && g.timeline === this)
      this.remove(g);
    else if (g && (g instanceof Array || g.push && n(g)))
      for (M = g.length; --M > -1; )
        g[M] instanceof Mt && g[M].timeline === this && this.remove(g[M]);
    if (B = typeof s == "number" && !a ? 0 : this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, typeof a == "string")
      return this._parseTimeOrLabel(a, I && typeof s == "number" && this._labels[a] == null ? s - B : 0, I);
    if (a = a || 0, typeof s == "string" && (isNaN(s) || this._labels[s] != null)) {
      if (M = s.indexOf("="), M === -1)
        return this._labels[s] == null ? I ? this._labels[s] = B + a : a : this._labels[s] + a;
      a = parseInt(s.charAt(M - 1) + "1", 10) * Number(s.substr(M + 1)), s = M > 1 ? this._parseTimeOrLabel(s.substr(0, M - 1), 0, I) : B;
    } else s == null && (s = B);
    return Number(s) + a;
  }, w.seek = function(s, a) {
    return this.totalTime(typeof s == "number" ? s : this._parseTimeOrLabel(s), a !== !1);
  }, w.stop = function() {
    return this.paused(!0);
  }, w.gotoAndPlay = function(s, a) {
    return this.play(s, a);
  }, w.gotoAndStop = function(s, a) {
    return this.pause(s, a);
  }, w.render = function(s, a, I) {
    this._gc && this._enabled(!0, !1);
    var g = this, B = g._time, M = g._dirty ? g.totalDuration() : g._totalDuration, L = g._startTime, N = g._timeScale, W = g._paused, F, ae, G, ne, Ae, X, fe, Oe;
    if (B !== g._time && (s += g._time - B), g._hasPause && !g._forcingPlayhead && !a) {
      if (s > B)
        for (F = g._first; F && F._startTime <= s && !X; )
          F._duration || F.data === "isPause" && !F.ratio && !(F._startTime === 0 && g._rawPrevTime === 0) && (X = F), F = F._next;
      else
        for (F = g._last; F && F._startTime >= s && !X; )
          F._duration || F.data === "isPause" && F._rawPrevTime > 0 && (X = F), F = F._prev;
      X && (g._time = g._totalTime = s = X._startTime, Oe = g._startTime + (g._reversed ? g._duration - s : s) / g._timeScale);
    }
    if (s >= M - t && s >= 0)
      g._totalTime = g._time = M, g._reversed || g._hasPausedChild() || (ae = !0, ne = "onComplete", Ae = !!g._timeline.autoRemoveChildren, g._duration === 0 && (s <= 0 && s >= -t || g._rawPrevTime < 0 || g._rawPrevTime === t) && g._rawPrevTime !== s && g._first && (Ae = !0, g._rawPrevTime > t && (ne = "onReverseComplete"))), g._rawPrevTime = g._duration || !a || s || g._rawPrevTime === s ? s : t, s = M + 1e-4;
    else if (s < t)
      if (g._totalTime = g._time = 0, s > -t && (s = 0), (B !== 0 || g._duration === 0 && g._rawPrevTime !== t && (g._rawPrevTime > 0 || s < 0 && g._rawPrevTime >= 0)) && (ne = "onReverseComplete", ae = g._reversed), s < 0)
        g._active = !1, g._timeline.autoRemoveChildren && g._reversed ? (Ae = ae = !0, ne = "onReverseComplete") : g._rawPrevTime >= 0 && g._first && (Ae = !0), g._rawPrevTime = s;
      else {
        if (g._rawPrevTime = g._duration || !a || s || g._rawPrevTime === s ? s : t, s === 0 && ae)
          for (F = g._first; F && F._startTime === 0; )
            F._duration || (ae = !1), F = F._next;
        s = 0, g._initted || (Ae = !0);
      }
    else
      g._totalTime = g._time = g._rawPrevTime = s;
    if (!((g._time === B || !g._first) && !I && !Ae && !X)) {
      if (g._initted || (g._initted = !0), g._active || !g._paused && g._time !== B && s > 0 && (g._active = !0), B === 0 && g.vars.onStart && (g._time !== 0 || !g._duration) && (a || g._callback("onStart")), fe = g._time, fe >= B)
        for (F = g._first; F && (G = F._next, !(fe !== g._time || g._paused && !W)); )
          (F._active || F._startTime <= fe && !F._paused && !F._gc) && (X === F && (g.pause(), g._pauseTime = Oe), F._reversed ? F.render((F._dirty ? F.totalDuration() : F._totalDuration) - (s - F._startTime) * F._timeScale, a, I) : F.render((s - F._startTime) * F._timeScale, a, I)), F = G;
      else
        for (F = g._last; F && (G = F._prev, !(fe !== g._time || g._paused && !W)); ) {
          if (F._active || F._startTime <= B && !F._paused && !F._gc) {
            if (X === F) {
              for (X = F._prev; X && X.endTime() > g._time; )
                X.render(X._reversed ? X.totalDuration() - (s - X._startTime) * X._timeScale : (s - X._startTime) * X._timeScale, a, I), X = X._prev;
              X = null, g.pause(), g._pauseTime = Oe;
            }
            F._reversed ? F.render((F._dirty ? F.totalDuration() : F._totalDuration) - (s - F._startTime) * F._timeScale, a, I) : F.render((s - F._startTime) * F._timeScale, a, I);
          }
          F = G;
        }
      g._onUpdate && (a || (l.length && f(), g._callback("onUpdate"))), ne && (g._gc || (L === g._startTime || N !== g._timeScale) && (g._time === 0 || M >= g.totalDuration()) && (ae && (l.length && f(), g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !a && g.vars[ne] && g._callback(ne)));
    }
  }, w._hasPausedChild = function() {
    for (var s = this._first; s; ) {
      if (s._paused || s instanceof e && s._hasPausedChild())
        return !0;
      s = s._next;
    }
    return !1;
  }, w.getChildren = function(s, a, I, g) {
    g = g || -9999999999;
    for (var B = [], M = this._first, L = 0; M; )
      M._startTime < g || (M instanceof ke ? a !== !1 && (B[L++] = M) : (I !== !1 && (B[L++] = M), s !== !1 && (B = B.concat(M.getChildren(!0, a, I)), L = B.length))), M = M._next;
    return B;
  }, w.getTweensOf = function(s, a) {
    var I = this._gc, g = [], B = 0, M, L;
    for (I && this._enabled(!0, !0), M = ke.getTweensOf(s), L = M.length; --L > -1; )
      (M[L].timeline === this || a && this._contains(M[L])) && (g[B++] = M[L]);
    return I && this._enabled(!1, !0), g;
  }, w.recent = function() {
    return this._recent;
  }, w._contains = function(s) {
    for (var a = s.timeline; a; ) {
      if (a === this)
        return !0;
      a = a.timeline;
    }
    return !1;
  }, w.shiftChildren = function(s, a, I) {
    I = I || 0;
    for (var g = this._first, B = this._labels, M; g; )
      g._startTime >= I && (g._startTime += s), g = g._next;
    if (a)
      for (M in B)
        B[M] >= I && (B[M] += s);
    return this._uncache(!0);
  }, w._kill = function(s, a) {
    if (!s && !a)
      return this._enabled(!1, !1);
    for (var I = a ? this.getTweensOf(a) : this.getChildren(!0, !0, !1), g = I.length, B = !1; --g > -1; )
      I[g]._kill(s, a) && (B = !0);
    return B;
  }, w.clear = function(s) {
    var a = this.getChildren(!1, !0, !0), I = a.length;
    for (this._time = this._totalTime = 0; --I > -1; )
      a[I]._enabled(!1, !1);
    return s !== !1 && (this._labels = {}), this._uncache(!0);
  }, w.invalidate = function() {
    for (var s = this._first; s; )
      s.invalidate(), s = s._next;
    return Mt.prototype.invalidate.call(this);
  }, w._enabled = function(s, a) {
    if (s === this._gc)
      for (var I = this._first; I; )
        I._enabled(s, !0), I = I._next;
    return Yi.prototype._enabled.call(this, s, a);
  }, w.totalTime = function(s, a, I) {
    this._forcingPlayhead = !0;
    var g = Mt.prototype.totalTime.apply(this, arguments);
    return this._forcingPlayhead = !1, g;
  }, w.duration = function(s) {
    return arguments.length ? (this.duration() !== 0 && s !== 0 && this.timeScale(this._duration / s), this) : (this._dirty && this.totalDuration(), this._duration);
  }, w.totalDuration = function(s) {
    if (!arguments.length) {
      if (this._dirty) {
        for (var a = 0, I = this, g = I._last, B = 999999999999, M, L; g; )
          M = g._prev, g._dirty && g.totalDuration(), g._startTime > B && I._sortChildren && !g._paused && !I._calculatingDuration ? (I._calculatingDuration = 1, I.add(g, g._startTime - g._delay), I._calculatingDuration = 0) : B = g._startTime, g._startTime < 0 && !g._paused && (a -= g._startTime, I._timeline.smoothChildTiming && (I._startTime += g._startTime / I._timeScale, I._time -= g._startTime, I._totalTime -= g._startTime, I._rawPrevTime -= g._startTime), I.shiftChildren(-g._startTime, !1, -9999999999), B = 0), L = g._startTime + g._totalDuration / g._timeScale, L > a && (a = L), g = M;
        I._duration = I._totalDuration = a, I._dirty = !1;
      }
      return this._totalDuration;
    }
    return s && this.totalDuration() ? this.timeScale(this._totalDuration / s) : this;
  }, w.paused = function(s) {
    if (s === !1 && this._paused)
      for (var a = this._first; a; )
        a._startTime === this._time && a.data === "isPause" && (a._rawPrevTime = 0), a = a._next;
    return Mt.prototype.paused.apply(this, arguments);
  }, w.usesFrames = function() {
    for (var s = this._timeline; s._timeline; )
      s = s._timeline;
    return s === Mt._rootFramesTimeline;
  }, w.rawTime = function(s) {
    return s && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(s) - this._startTime) * this._timeScale;
  }, e;
}, !0);
var Oi = ut.TimelineLite;
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
lt._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
  var e = function(m) {
    Oi.call(this, m), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
  }, t = 1e-8, i = ke._internals, A = i.lazyTweens, r = i.lazyRender, n = lt._gsDefine.globals, l = new qt(null, null, 1, 0), f = e.prototype = new Oi();
  return f.constructor = e, f.kill()._gc = !1, e.version = "2.1.3", f.invalidate = function() {
    return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), Oi.prototype.invalidate.call(this);
  }, f.addCallback = function(m, E, p, h) {
    return this.add(ke.delayedCall(0, m, p, h), E);
  }, f.removeCallback = function(m, E) {
    if (m)
      if (E == null)
        this._kill(null, m);
      else
        for (var p = this.getTweensOf(m, !1), h = p.length, D = this._parseTimeOrLabel(E); --h > -1; )
          p[h]._startTime === D && p[h]._enabled(!1, !1);
    return this;
  }, f.removePause = function(m) {
    return this.removeCallback(Oi._internals.pauseCallback, m);
  }, f.tweenTo = function(m, E) {
    E = E || {};
    var p = { ease: l, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 }, h = E.repeat && n.TweenMax || ke, D, S, q;
    for (S in E)
      p[S] = E[S];
    return p.time = this._parseTimeOrLabel(m), D = Math.abs(Number(p.time) - this._time) / this._timeScale || 1e-3, q = new h(this, D, p), p.onStart = function() {
      q.target.paused(!0), q.vars.time !== q.target.time() && D === q.duration() && !q.isFromTo && q.duration(Math.abs(q.vars.time - q.target.time()) / q.target._timeScale).render(q.time(), !0, !0), E.onStart && E.onStart.apply(E.onStartScope || E.callbackScope || q, E.onStartParams || []);
    }, q;
  }, f.tweenFromTo = function(m, E, p) {
    p = p || {}, m = this._parseTimeOrLabel(m), p.startAt = { onComplete: this.seek, onCompleteParams: [m], callbackScope: this }, p.immediateRender = p.immediateRender !== !1;
    var h = this.tweenTo(E, p);
    return h.isFromTo = 1, h.duration(Math.abs(h.vars.time - m) / this._timeScale || 1e-3);
  }, f.render = function(m, E, p) {
    this._gc && this._enabled(!0, !1);
    var h = this, D = h._time, S = h._dirty ? h.totalDuration() : h._totalDuration, q = h._duration, w = h._totalTime, s = h._startTime, a = h._timeScale, I = h._rawPrevTime, g = h._paused, B = h._cycle, M, L, N, W, F, ae, G, ne, Ae;
    if (D !== h._time && (m += h._time - D), m >= S - t && m >= 0)
      h._locked || (h._totalTime = S, h._cycle = h._repeat), h._reversed || h._hasPausedChild() || (L = !0, W = "onComplete", F = !!h._timeline.autoRemoveChildren, h._duration === 0 && (m <= 0 && m >= -t || I < 0 || I === t) && I !== m && h._first && (F = !0, I > t && (W = "onReverseComplete"))), h._rawPrevTime = h._duration || !E || m || h._rawPrevTime === m ? m : t, h._yoyo && h._cycle & 1 ? h._time = m = 0 : (h._time = q, m = q + 1e-4);
    else if (m < t)
      if (h._locked || (h._totalTime = h._cycle = 0), h._time = 0, m > -t && (m = 0), (D !== 0 || q === 0 && I !== t && (I > 0 || m < 0 && I >= 0) && !h._locked) && (W = "onReverseComplete", L = h._reversed), m < 0)
        h._active = !1, h._timeline.autoRemoveChildren && h._reversed ? (F = L = !0, W = "onReverseComplete") : I >= 0 && h._first && (F = !0), h._rawPrevTime = m;
      else {
        if (h._rawPrevTime = q || !E || m || h._rawPrevTime === m ? m : t, m === 0 && L)
          for (M = h._first; M && M._startTime === 0; )
            M._duration || (L = !1), M = M._next;
        m = 0, h._initted || (F = !0);
      }
    else
      q === 0 && I < 0 && (F = !0), h._time = h._rawPrevTime = m, h._locked || (h._totalTime = m, h._repeat !== 0 && (ae = q + h._repeatDelay, h._cycle = h._totalTime / ae >> 0, h._cycle && h._cycle === h._totalTime / ae && w <= m && h._cycle--, h._time = h._totalTime - h._cycle * ae, h._yoyo && h._cycle & 1 && (h._time = q - h._time), h._time > q ? (h._time = q, m = q + 1e-4) : h._time < 0 ? h._time = m = 0 : m = h._time));
    if (h._hasPause && !h._forcingPlayhead && !E) {
      if (m = h._time, m > D || h._repeat && B !== h._cycle)
        for (M = h._first; M && M._startTime <= m && !G; )
          M._duration || M.data === "isPause" && !M.ratio && !(M._startTime === 0 && h._rawPrevTime === 0) && (G = M), M = M._next;
      else
        for (M = h._last; M && M._startTime >= m && !G; )
          M._duration || M.data === "isPause" && M._rawPrevTime > 0 && (G = M), M = M._prev;
      G && (Ae = h._startTime + (h._reversed ? h._duration - G._startTime : G._startTime) / h._timeScale, G._startTime < q && (h._time = h._rawPrevTime = m = G._startTime, h._totalTime = m + h._cycle * (h._totalDuration + h._repeatDelay)));
    }
    if (h._cycle !== B && !h._locked) {
      var X = h._yoyo && (B & 1) !== 0, fe = X === (h._yoyo && (h._cycle & 1) !== 0), Oe = h._totalTime, qe = h._cycle, Xe = h._rawPrevTime, Re = h._time;
      if (h._totalTime = B * q, h._cycle < B ? X = !X : h._totalTime += q, h._time = D, h._rawPrevTime = q === 0 ? I - 1e-4 : I, h._cycle = B, h._locked = !0, D = X ? 0 : q, h.render(D, E, q === 0), E || h._gc || h.vars.onRepeat && (h._cycle = qe, h._locked = !1, h._callback("onRepeat")), D !== h._time || (fe && (h._cycle = B, h._locked = !0, D = X ? q + 1e-4 : -1e-4, h.render(D, !0, !1)), h._locked = !1, h._paused && !g))
        return;
      h._time = Re, h._totalTime = Oe, h._cycle = qe, h._rawPrevTime = Xe;
    }
    if ((h._time === D || !h._first) && !p && !F && !G) {
      w !== h._totalTime && h._onUpdate && (E || h._callback("onUpdate"));
      return;
    } else h._initted || (h._initted = !0);
    if (h._active || !h._paused && h._totalTime !== w && m > 0 && (h._active = !0), w === 0 && h.vars.onStart && (h._totalTime !== 0 || !h._totalDuration) && (E || h._callback("onStart")), ne = h._time, ne >= D)
      for (M = h._first; M && (N = M._next, !(ne !== h._time || h._paused && !g)); )
        (M._active || M._startTime <= h._time && !M._paused && !M._gc) && (G === M && (h.pause(), h._pauseTime = Ae), M._reversed ? M.render((M._dirty ? M.totalDuration() : M._totalDuration) - (m - M._startTime) * M._timeScale, E, p) : M.render((m - M._startTime) * M._timeScale, E, p)), M = N;
    else
      for (M = h._last; M && (N = M._prev, !(ne !== h._time || h._paused && !g)); ) {
        if (M._active || M._startTime <= D && !M._paused && !M._gc) {
          if (G === M) {
            for (G = M._prev; G && G.endTime() > h._time; )
              G.render(G._reversed ? G.totalDuration() - (m - G._startTime) * G._timeScale : (m - G._startTime) * G._timeScale, E, p), G = G._prev;
            G = null, h.pause(), h._pauseTime = Ae;
          }
          M._reversed ? M.render((M._dirty ? M.totalDuration() : M._totalDuration) - (m - M._startTime) * M._timeScale, E, p) : M.render((m - M._startTime) * M._timeScale, E, p);
        }
        M = N;
      }
    h._onUpdate && (E || (A.length && r(), h._callback("onUpdate"))), W && (h._locked || h._gc || (s === h._startTime || a !== h._timeScale) && (h._time === 0 || S >= h.totalDuration()) && (L && (A.length && r(), h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !E && h.vars[W] && h._callback(W)));
  }, f.getActive = function(m, E, p) {
    var h = [], D = this.getChildren(m || m == null, E || m == null, !!p), S = 0, q = D.length, w, s;
    for (w = 0; w < q; w++)
      s = D[w], s.isActive() && (h[S++] = s);
    return h;
  }, f.getLabelAfter = function(m) {
    m || m !== 0 && (m = this._time);
    var E = this.getLabelsArray(), p = E.length, h;
    for (h = 0; h < p; h++)
      if (E[h].time > m)
        return E[h].name;
    return null;
  }, f.getLabelBefore = function(m) {
    m == null && (m = this._time);
    for (var E = this.getLabelsArray(), p = E.length; --p > -1; )
      if (E[p].time < m)
        return E[p].name;
    return null;
  }, f.getLabelsArray = function() {
    var m = [], E = 0, p;
    for (p in this._labels)
      m[E++] = { time: this._labels[p], name: p };
    return m.sort(function(h, D) {
      return h.time - D.time;
    }), m;
  }, f.invalidate = function() {
    return this._locked = !1, Oi.prototype.invalidate.call(this);
  }, f.progress = function(m, E) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && this._cycle & 1 ? 1 - m : m) + this._cycle * (this._duration + this._repeatDelay), E) : this._time / this.duration() || 0;
  }, f.totalProgress = function(m, E) {
    return arguments.length ? this.totalTime(this.totalDuration() * m, E) : this._totalTime / this.totalDuration() || 0;
  }, f.totalDuration = function(m) {
    return arguments.length ? this._repeat === -1 || !m ? this : this.timeScale(this.totalDuration() / m) : (this._dirty && (Oi.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
  }, f.time = function(m, E) {
    if (!arguments.length)
      return this._time;
    this._dirty && this.totalDuration();
    var p = this._duration, h = this._cycle, D = h * (p + this._repeatDelay);
    return m > p && (m = p), this.totalTime(this._yoyo && h & 1 ? p - m + D : this._repeat ? m + D : m, E);
  }, f.repeat = function(m) {
    return arguments.length ? (this._repeat = m, this._uncache(!0)) : this._repeat;
  }, f.repeatDelay = function(m) {
    return arguments.length ? (this._repeatDelay = m, this._uncache(!0)) : this._repeatDelay;
  }, f.yoyo = function(m) {
    return arguments.length ? (this._yoyo = m, this) : this._yoyo;
  }, f.currentLabel = function(m) {
    return arguments.length ? this.seek(m, !0) : this.getLabelBefore(this._time + t);
  }, e;
}, !0);
var Tf = ut.TimelineMax;
/*!
 * VERSION: 1.3.9
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var xf = 180 / Math.PI, _i = [], Li = [], Fi = [], BA = {}, Rf = lt._gsDefine.globals, $i = function(e, t, i, A) {
  i === A && (i = A - (A - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = A, this.da = A - e, this.ca = i - e, this.ba = t - e;
}, Sf = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", Br = function(e, t, i, A) {
  var r = { a: e }, n = {}, l = {}, f = { c: A }, m = (e + t) / 2, E = (t + i) / 2, p = (i + A) / 2, h = (m + E) / 2, D = (E + p) / 2, S = (D - h) / 8;
  return r.b = m + (e - m) / 4, n.b = h + S, r.c = n.a = (r.b + n.b) / 2, n.c = l.a = (h + D) / 2, l.b = D - S, f.b = p + (A - p) / 4, l.c = f.a = (l.b + f.b) / 2, [r, n, l, f];
}, _f = function(e, t, i, A, r) {
  var n = e.length - 1, l = 0, f = e[0].a, m, E, p, h, D, S, q, w, s, a, I, g, B;
  for (m = 0; m < n; m++)
    D = e[l], E = D.a, p = D.d, h = e[l + 1].d, r ? (I = _i[m], g = Li[m], B = (g + I) * t * 0.25 / (A ? 0.5 : Fi[m] || 0.5), S = p - (p - E) * (A ? t * 0.5 : I !== 0 ? B / I : 0), q = p + (h - p) * (A ? t * 0.5 : g !== 0 ? B / g : 0), w = p - (S + ((q - S) * (I * 3 / (I + g) + 0.5) / 4 || 0))) : (S = p - (p - E) * t * 0.5, q = p + (h - p) * t * 0.5, w = p - (S + q) / 2), S += w, q += w, D.c = s = S, m !== 0 ? D.b = f : D.b = f = D.a + (D.c - D.a) * 0.6, D.da = p - E, D.ca = s - E, D.ba = f - E, i ? (a = Br(E, f, s, p), e.splice(l, 1, a[0], a[1], a[2], a[3]), l += 4) : l++, f = q;
  D = e[l], D.b = f, D.c = f + (D.d - f) * 0.4, D.da = D.d - D.a, D.ca = D.c - D.a, D.ba = f - D.a, i && (a = Br(D.a, f, D.c, D.d), e.splice(l, 1, a[0], a[1], a[2], a[3]));
}, Mf = function(e, t, i, A) {
  var r = [], n, l, f, m, E, p;
  if (A)
    for (e = [A].concat(e), l = e.length; --l > -1; )
      typeof (p = e[l][t]) == "string" && p.charAt(1) === "=" && (e[l][t] = A[t] + Number(p.charAt(0) + p.substr(2)));
  if (n = e.length - 2, n < 0)
    return r[0] = new $i(e[0][t], 0, 0, e[0][t]), r;
  for (l = 0; l < n; l++)
    f = e[l][t], m = e[l + 1][t], r[l] = new $i(f, 0, 0, m), i && (E = e[l + 2][t], _i[l] = (_i[l] || 0) + (m - f) * (m - f), Li[l] = (Li[l] || 0) + (E - m) * (E - m));
  return r[l] = new $i(e[l][t], 0, 0, e[l + 1][t]), r;
}, Us = function(e, t, i, A, r, n) {
  var l = {}, f = [], m = n || e[0], E, p, h, D, S, q, w, s;
  r = typeof r == "string" ? "," + r + "," : Sf, t == null && (t = 1);
  for (p in e[0])
    f.push(p);
  if (e.length > 1) {
    for (s = e[e.length - 1], w = !0, E = f.length; --E > -1; )
      if (p = f[E], Math.abs(m[p] - s[p]) > 0.05) {
        w = !1;
        break;
      }
    w && (e = e.concat(), n && e.unshift(n), e.push(e[1]), n = e[e.length - 3]);
  }
  for (_i.length = Li.length = Fi.length = 0, E = f.length; --E > -1; )
    p = f[E], BA[p] = r.indexOf("," + p + ",") !== -1, l[p] = Mf(e, p, BA[p], n);
  for (E = _i.length; --E > -1; )
    _i[E] = Math.sqrt(_i[E]), Li[E] = Math.sqrt(Li[E]);
  if (!A) {
    for (E = f.length; --E > -1; )
      if (BA[p])
        for (h = l[f[E]], q = h.length - 1, D = 0; D < q; D++)
          S = h[D + 1].da / Li[D] + h[D].da / _i[D] || 0, Fi[D] = (Fi[D] || 0) + S * S;
    for (E = Fi.length; --E > -1; )
      Fi[E] = Math.sqrt(Fi[E]);
  }
  for (E = f.length, D = i ? 4 : 1; --E > -1; )
    p = f[E], h = l[p], _f(h, t, i, A, BA[p]), w && (h.splice(0, D), h.splice(h.length - D, D));
  return l;
}, qf = function(e, t, i) {
  t = t || "soft";
  var A = {}, r = t === "cubic" ? 3 : 2, n = t === "soft", l = [], f, m, E, p, h, D, S, q, w, s, a;
  if (n && i && (e = [i].concat(e)), e == null || e.length < r + 1)
    throw "invalid Bezier data";
  for (w in e[0])
    l.push(w);
  for (D = l.length; --D > -1; ) {
    for (w = l[D], A[w] = h = [], s = 0, q = e.length, S = 0; S < q; S++)
      f = i == null ? e[S][w] : typeof (a = e[S][w]) == "string" && a.charAt(1) === "=" ? i[w] + Number(a.charAt(0) + a.substr(2)) : Number(a), n && S > 1 && S < q - 1 && (h[s++] = (f + h[s - 2]) / 2), h[s++] = f;
    for (q = s - r + 1, s = 0, S = 0; S < q; S += r)
      f = h[S], m = h[S + 1], E = h[S + 2], p = r === 2 ? 0 : h[S + 3], h[s++] = a = r === 3 ? new $i(f, m, E, p) : new $i(f, (2 * m + f) / 3, (2 * m + E) / 3, E);
    h.length = s;
  }
  return A;
}, kf = function(e, t, i) {
  for (var A = 1 / i, r = e.length, n, l, f, m, E, p, h, D, S, q, w; --r > -1; )
    for (q = e[r], f = q.a, m = q.d - f, E = q.c - f, p = q.b - f, n = l = 0, D = 1; D <= i; D++)
      h = A * D, S = 1 - h, n = l - (l = (h * h * m + 3 * S * (h * E + S * p)) * h), w = r * i + D - 1, t[w] = (t[w] || 0) + n * n;
}, Df = function(e, t) {
  t = t >> 0 || 6;
  var i = [], A = [], r = 0, n = 0, l = t - 1, f = [], m = [], E, p, h, D;
  for (E in e)
    kf(e[E], i, t);
  for (h = i.length, p = 0; p < h; p++)
    r += Math.sqrt(i[p]), D = p % t, m[D] = r, D === l && (n += r, D = p / t >> 0, f[D] = m, A[D] = n, r = 0, m = []);
  return { length: n, lengths: A, segments: f };
}, Di = lt._gsDefine.plugin({
  propName: "bezier",
  priority: -1,
  version: "1.3.9",
  API: 2,
  global: !0,
  //gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(e, t, i) {
    this._target = e, t instanceof Array && (t = { values: t }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution, 10);
    var A = t.values || [], r = {}, n = A[0], l = t.autoRotate || i.vars.orientToBezier, f, m, E, p, h;
    this._autoRotate = l ? l instanceof Array ? l : [["x", "y", "rotation", l === !0 ? 0 : Number(l) || 0]] : null;
    for (f in n)
      this._props.push(f);
    for (E = this._props.length; --E > -1; )
      f = this._props[E], this._overwriteProps.push(f), m = this._func[f] = typeof e[f] == "function", r[f] = m ? e[f.indexOf("set") || typeof e["get" + f.substr(3)] != "function" ? f : "get" + f.substr(3)]() : parseFloat(e[f]), h || r[f] !== A[0][f] && (h = r);
    if (this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? Us(A, isNaN(t.curviness) ? 1 : t.curviness, !1, t.type === "thruBasic", t.correlate, h) : qf(A, t.type, r), this._segCount = this._beziers[f].length, this._timeRes) {
      var D = Df(this._beziers, this._timeRes);
      this._length = D.length, this._lengths = D.lengths, this._segments = D.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
    }
    if (l = this._autoRotate)
      for (this._initialRotations = [], l[0] instanceof Array || (this._autoRotate = l = [l]), E = l.length; --E > -1; ) {
        for (p = 0; p < 3; p++)
          f = l[E][p], this._func[f] = typeof e[f] == "function" ? e[f.indexOf("set") || typeof e["get" + f.substr(3)] != "function" ? f : "get" + f.substr(3)] : !1;
        f = l[E][2], this._initialRotations[E] = (this._func[f] ? this._func[f].call(this._target) : this._target[f]) || 0, this._overwriteProps.push(f);
      }
    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(e) {
    var t = this._segCount, i = this._func, A = this._target, r = e !== this._startRatio, n, l, f, m, E, p, h, D, S, q, w;
    if (!this._timeRes)
      n = e < 0 ? 0 : e >= 1 ? t - 1 : t * e >> 0, p = (e - n * (1 / t)) * t;
    else {
      if (S = this._lengths, q = this._curSeg, w = e * this._length, f = this._li, w > this._l2 && f < t - 1) {
        for (D = t - 1; f < D && (this._l2 = S[++f]) <= w; )
          ;
        this._l1 = S[f - 1], this._li = f, this._curSeg = q = this._segments[f], this._s2 = q[this._s1 = this._si = 0];
      } else if (w < this._l1 && f > 0) {
        for (; f > 0 && (this._l1 = S[--f]) >= w; )
          ;
        f === 0 && w < this._l1 ? this._l1 = 0 : f++, this._l2 = S[f], this._li = f, this._curSeg = q = this._segments[f], this._s1 = q[(this._si = q.length - 1) - 1] || 0, this._s2 = q[this._si];
      }
      if (n = f, w -= this._l1, f = this._si, w > this._s2 && f < q.length - 1) {
        for (D = q.length - 1; f < D && (this._s2 = q[++f]) <= w; )
          ;
        this._s1 = q[f - 1], this._si = f;
      } else if (w < this._s1 && f > 0) {
        for (; f > 0 && (this._s1 = q[--f]) >= w; )
          ;
        f === 0 && w < this._s1 ? this._s1 = 0 : f++, this._s2 = q[f], this._si = f;
      }
      p = e === 1 ? 1 : (f + (w - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
    }
    for (l = 1 - p, f = this._props.length; --f > -1; )
      m = this._props[f], E = this._beziers[m][n], h = (p * p * E.da + 3 * l * (p * E.ca + l * E.ba)) * p + E.a, this._mod[m] && (h = this._mod[m](h, A)), i[m] ? A[m](h) : A[m] = h;
    if (this._autoRotate) {
      var s = this._autoRotate, a, I, g, B, M, L, N;
      for (f = s.length; --f > -1; )
        m = s[f][2], L = s[f][3] || 0, N = s[f][4] === !0 ? 1 : xf, E = this._beziers[s[f][0]], a = this._beziers[s[f][1]], E && a && (E = E[n], a = a[n], I = E.a + (E.b - E.a) * p, B = E.b + (E.c - E.b) * p, I += (B - I) * p, B += (E.c + (E.d - E.c) * p - B) * p, g = a.a + (a.b - a.a) * p, M = a.b + (a.c - a.b) * p, g += (M - g) * p, M += (a.c + (a.d - a.c) * p - M) * p, h = r ? Math.atan2(M - g, B - I) * N + L : this._initialRotations[f], this._mod[m] && (h = this._mod[m](h, A)), i[m] ? A[m](h) : A[m] = h);
    }
  }
}), Ls = Di.prototype;
Di.bezierThrough = Us;
Di.cubicToQuadratic = Br;
Di._autoCSS = !0;
Di.quadraticToCubic = function(e, t, i) {
  return new $i(e, (2 * t + e) / 3, (2 * t + i) / 3, i);
};
Di._cssRegister = function() {
  var e = Rf.CSSPlugin;
  if (e) {
    var t = e._internals, i = t._parseToProxy, A = t._setPluginRatio, r = t.CSSPropTween;
    t._registerComplexSpecialProp("bezier", { parser: function(n, l, f, m, E, p) {
      l instanceof Array && (l = { values: l }), p = new Di();
      var h = l.values, D = h.length - 1, S = [], q = {}, w, s, a;
      if (D < 0)
        return E;
      for (w = 0; w <= D; w++)
        a = i(n, h[w], m, E, p, D !== w), S[w] = a.end;
      for (s in l)
        q[s] = l[s];
      return q.values = S, E = new r(n, "bezier", 0, 0, a.pt, 2), E.data = a, E.plugin = p, E.setRatio = A, q.autoRotate === 0 && (q.autoRotate = !0), q.autoRotate && !(q.autoRotate instanceof Array) && (w = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = a.end.left != null ? [["left", "top", "rotation", w, !1]] : a.end.x != null ? [["x", "y", "rotation", w, !1]] : !1), q.autoRotate && (m._transform || m._enableTransforms(!1), a.autoRotate = m._target._gsTransform, a.proxy.rotation = a.autoRotate.rotation || 0, m._overwriteProps.push("rotation")), p._onInitTween(a.proxy, q, m._tween), E;
    } });
  }
};
Ls._mod = function(e) {
  for (var t = this._overwriteProps, i = t.length, A; --i > -1; )
    A = e[t[i]], A && typeof A == "function" && (this._mod[t[i]] = A);
};
Ls._kill = function(e) {
  var t = this._props, i, A;
  for (i in this._beziers)
    if (i in e)
      for (delete this._beziers[i], delete this._func[i], A = t.length; --A > -1; )
        t[A] === i && t.splice(A, 1);
  if (t = this._autoRotate, t)
    for (A = t.length; --A > -1; )
      e[t[A][2]] && t.splice(A, 1);
  return this._super._kill.call(this, e);
};
/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
lt._gsDefine("easing.Back", ["easing.Ease"], function() {
  var e = lt.GreenSockGlobals || lt, t = e.com.greensock, i = Math.PI * 2, A = Math.PI / 2, r = t._class, n = function(a, I) {
    var g = r("easing." + a, function() {
    }, !0), B = g.prototype = new qt();
    return B.constructor = g, B.getRatio = I, g;
  }, l = qt.register || function() {
  }, f = function(a, I, g, B, M) {
    var L = r("easing." + a, {
      easeOut: new I(),
      easeIn: new g(),
      easeInOut: new B()
    }, !0);
    return l(L, a), L;
  }, m = function(a, I, g) {
    this.t = a, this.v = I, g && (this.next = g, g.prev = this, this.c = g.v - I, this.gap = g.t - a);
  }, E = function(a, I) {
    var g = r("easing." + a, function(M) {
      this._p1 = M || M === 0 ? M : 1.70158, this._p2 = this._p1 * 1.525;
    }, !0), B = g.prototype = new qt();
    return B.constructor = g, B.getRatio = I, B.config = function(M) {
      return new g(M);
    }, g;
  }, p = f(
    "Back",
    E("BackOut", function(a) {
      return (a = a - 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
    }),
    E("BackIn", function(a) {
      return a * a * ((this._p1 + 1) * a - this._p1);
    }),
    E("BackInOut", function(a) {
      return (a *= 2) < 1 ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
    })
  ), h = r("easing.SlowMo", function(a, I, g) {
    I = I || I === 0 ? I : 0.7, a == null ? a = 0.7 : a > 1 && (a = 1), this._p = a !== 1 ? I : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = g === !0;
  }, !0), D = h.prototype = new qt(), S, q, w, s;
  return D.constructor = h, D.getRatio = function(a) {
    var I = a + (0.5 - a) * this._p;
    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : I - (a = 1 - a / this._p1) * a * a * a * I : a > this._p3 ? this._calcEnd ? a === 1 ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : I + (a - I) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : I;
  }, h.ease = new h(0.7, 0.7), D.config = h.config = function(a, I, g) {
    return new h(a, I, g);
  }, S = r("easing.SteppedEase", function(a, I) {
    a = a || 1, this._p1 = 1 / a, this._p2 = a + (I ? 0 : 1), this._p3 = I ? 1 : 0;
  }, !0), D = S.prototype = new qt(), D.constructor = S, D.getRatio = function(a) {
    return a < 0 ? a = 0 : a >= 1 && (a = 0.999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
  }, D.config = S.config = function(a, I) {
    return new S(a, I);
  }, q = r("easing.ExpoScaleEase", function(a, I, g) {
    this._p1 = Math.log(I / a), this._p2 = I - a, this._p3 = a, this._ease = g;
  }, !0), D = q.prototype = new qt(), D.constructor = q, D.getRatio = function(a) {
    return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
  }, D.config = q.config = function(a, I, g) {
    return new q(a, I, g);
  }, w = r("easing.RoughEase", function(a) {
    a = a || {};
    for (var I = a.taper || "none", g = [], B = 0, M = (a.points || 20) | 0, L = M, N = a.randomize !== !1, W = a.clamp === !0, F = a.template instanceof qt ? a.template : null, ae = typeof a.strength == "number" ? a.strength * 0.4 : 0.4, G, ne, Ae, X, fe, Oe; --L > -1; )
      G = N ? Math.random() : 1 / M * L, ne = F ? F.getRatio(G) : G, I === "none" ? Ae = ae : I === "out" ? (X = 1 - G, Ae = X * X * ae) : I === "in" ? Ae = G * G * ae : G < 0.5 ? (X = G * 2, Ae = X * X * 0.5 * ae) : (X = (1 - G) * 2, Ae = X * X * 0.5 * ae), N ? ne += Math.random() * Ae - Ae * 0.5 : L % 2 ? ne += Ae * 0.5 : ne -= Ae * 0.5, W && (ne > 1 ? ne = 1 : ne < 0 && (ne = 0)), g[B++] = { x: G, y: ne };
    for (g.sort(function(qe, Xe) {
      return qe.x - Xe.x;
    }), Oe = new m(1, 1, null), L = M; --L > -1; )
      fe = g[L], Oe = new m(fe.x, fe.y, Oe);
    this._prev = new m(0, 0, Oe.t !== 0 ? Oe : Oe.next);
  }, !0), D = w.prototype = new qt(), D.constructor = w, D.getRatio = function(a) {
    var I = this._prev;
    if (a > I.t) {
      for (; I.next && a >= I.t; )
        I = I.next;
      I = I.prev;
    } else
      for (; I.prev && a <= I.t; )
        I = I.prev;
    return this._prev = I, I.v + (a - I.t) / I.gap * I.c;
  }, D.config = function(a) {
    return new w(a);
  }, w.ease = new w(), f(
    "Bounce",
    n("BounceOut", function(a) {
      return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
    }),
    n("BounceIn", function(a) {
      return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
    }),
    n("BounceInOut", function(a) {
      var I = a < 0.5;
      return I ? a = 1 - a * 2 : a = a * 2 - 1, a < 1 / 2.75 ? a = 7.5625 * a * a : a < 2 / 2.75 ? a = 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? a = 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : a = 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375, I ? (1 - a) * 0.5 : a * 0.5 + 0.5;
    })
  ), f(
    "Circ",
    n("CircOut", function(a) {
      return Math.sqrt(1 - (a = a - 1) * a);
    }),
    n("CircIn", function(a) {
      return -(Math.sqrt(1 - a * a) - 1);
    }),
    n("CircInOut", function(a) {
      return (a *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
    })
  ), s = function(a, I, g) {
    var B = r("easing." + a, function(L, N) {
      this._p1 = L >= 1 ? L : 1, this._p2 = (N || g) / (L < 1 ? L : 1), this._p3 = this._p2 / i * (Math.asin(1 / this._p1) || 0), this._p2 = i / this._p2;
    }, !0), M = B.prototype = new qt();
    return M.constructor = B, M.getRatio = I, M.config = function(L, N) {
      return new B(L, N);
    }, B;
  }, f(
    "Elastic",
    s("ElasticOut", function(a) {
      return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
    }, 0.3),
    s("ElasticIn", function(a) {
      return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
    }, 0.3),
    s("ElasticInOut", function(a) {
      return (a *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * 0.5 + 1;
    }, 0.45)
  ), f(
    "Expo",
    n("ExpoOut", function(a) {
      return 1 - Math.pow(2, -10 * a);
    }),
    n("ExpoIn", function(a) {
      return Math.pow(2, 10 * (a - 1)) - 1e-3;
    }),
    n("ExpoInOut", function(a) {
      return (a *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
    })
  ), f(
    "Sine",
    n("SineOut", function(a) {
      return Math.sin(a * A);
    }),
    n("SineIn", function(a) {
      return -Math.cos(a * A) + 1;
    }),
    n("SineInOut", function(a) {
      return -0.5 * (Math.cos(Math.PI * a) - 1);
    })
  ), r("easing.EaseLookup", {
    find: function(a) {
      return qt.map[a];
    }
  }, !0), l(e.SlowMo, "SlowMo", "ease,"), l(w, "RoughEase", "ease,"), l(S, "SteppedEase", "ease,"), p;
}, !0);
var bf = ut.Back, vf = ut.Elastic, Qf = ut.Bounce, Bf = ut.RoughEase, Of = ut.SlowMo, Ff = ut.SteppedEase, Yf = ut.Circ, Uf = ut.Expo, Lf = ut.Sine, Pf = ut.ExpoScaleEase;
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var Ps = yf;
Ps._autoActivated = [Oi, Tf, wf, Cf, Di, Os, Ys, bf, vf, Qf, Bf, Of, Ff, Yf, Uf, Lf, Pf];
class Kf {
  constructor(t, i) {
    this.cavnas = document.createElement("canvas");
    let A = {
      canvas: null,
      centerX: null,
      centerY: null,
      outerRadius: null,
      innerRadius: 0,
      numSegments: 1,
      drawMode: "code",
      rotationAngle: 0,
      textFontFamily: "Arial",
      textFontSize: 20,
      textFontWeight: "bold",
      textOrientation: "horizontal",
      textAlignment: "center",
      textDirection: "normal",
      textMargin: null,
      textFillStyle: "black",
      textStrokeStyle: null,
      textLineWidth: 1,
      fillStyle: "silver",
      strokeStyle: "black",
      lineWidth: 1,
      clearTheCanvas: !0,
      imageOverlay: !1,
      drawText: !0,
      pointerAngle: 0,
      wheelImage: null,
      pin: null,
      imageDirection: "N",
      //- (N)orth, (E)ast, (S)outh, (W)est.
      drawButton: null,
      drawBG: null
    };
    for (var r in A)
      t != null && typeof t[r] < "u" ? this[r] = t[r] : this[r] = A[r];
    if (t != null)
      for (var r in t)
        typeof this[r] > "u" && (this[r] = t[r]);
    this.canvas ? (this.centerX == null && (this.centerX = this.canvas.width / 2), this.centerY == null && (this.centerY = this.canvas.height / 2), this.outerRadius == null && (this.canvas.width < this.canvas.height ? this.outerRadius = this.canvas.width / 2 - this.lineWidth : this.outerRadius = this.canvas.height / 2 - this.lineWidth), this.ctx = this.canvas.getContext("2d")) : (this.cavnas = null, this.ctx = null), this.segments = new Array(null);
    for (let n = 1; n <= this.numSegments; n++)
      t != null && t.segments && typeof t.segments[n - 1] < "u" ? this.segments[n] = new Cr(t.segments[n - 1]) : this.segments[n] = new Cr();
    if (this.updateSegmentSizes(), this.textMargin === null && (this.textMargin = this.textFontSize / 1.7), t != null && t.animation && typeof t.animation < "u" ? this.animation = new Sn(t.animation) : this.animation = new Sn(), t != null && t.pin && typeof t.pin < "u" && (this.pin = new Nf(t.pin)), this.drawMode == "image" || this.drawMode == "segmentImage" ? (typeof t.fillStyle > "u" && (this.fillStyle = null), typeof t.strokeStyle > "u" && (this.strokeStyle = "red"), typeof t.drawText > "u" && (this.drawText = !1), typeof t.lineWidth > "u" && (this.lineWidth = 1), typeof i > "u" && (i = !1)) : typeof i > "u" && (i = !0), t != null && t.pointerGuide && typeof t.pointerGuide < "u" ? this.pointerGuide = new _n(t.pointerGuide) : this.pointerGuide = new _n(), i == !0)
      this.draw(this.clearTheCanvas);
    else if (this.drawMode == "segmentImage") {
      dt = this, jA = !1;
      for (let n = 1; n <= this.numSegments; n++)
        this.segments[n].image !== null && this.segments[n].imgData === null && (this.segments[n].imgData = new Image(), this.segments[n].imgData.onload = Ks, this.segments[n].imgData.src = this.segments[n].image);
    }
  }
  updateSegmentSizes() {
    if (this.segments) {
      var t = 0, i = 0;
      for (let l = 1; l <= this.numSegments; l++)
        this.segments[l].size !== null && (t += this.segments[l].size, i++);
      var A = 360 - t, r = 0;
      A > 0 && (r = A / (this.numSegments - i));
      var n = 0;
      for (let l = 1; l <= this.numSegments; l++)
        this.segments[l].startAngle = n, this.segments[l].size ? n += this.segments[l].size : n += r, this.segments[l].endAngle = n;
    }
  }
  clearCanvas() {
    this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  draw(t) {
    var i, A;
    this.ctx && (typeof t < "u" ? t == !0 && this.clearCanvas() : this.clearCanvas(), (i = this.drawBG) == null || i.call(this, this.canvas, this.ctx), this.drawMode == "image" ? (this.drawWheelImage(), this.drawText == !0 && this.drawSegmentText(), this.imageOverlay == !0 && this.drawSegments()) : this.drawMode == "segmentImage" ? (this.imageOverlay == !0 && this.drawSegments(), this.drawSegmentImages(), this.drawText == !0 && this.drawSegmentText()) : (this.drawSegments(), this.drawText == !0 && this.drawSegmentText()), (A = this.drawButton) == null || A.call(this, this.canvas, this.ctx), typeof this.pin !== null && this.drawPin(), this.pointerGuide.display == !0 && this.drawPointerGuide());
  }
  drawPin() {
    if (this.pin) {
      let t = this.pin.imgData, i = t.width, A = t.height, r = this.pin.x, n = this.pin.y;
      this.ctx.save(), this.ctx.translate(r, n), this.ctx.drawImage(this.pin.imgData, -i / 2, -A / 2, i, A), this.ctx.restore();
    }
  }
  drawPointerGuide() {
    this.ctx && (this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.pointerAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.strokeStyle = this.pointerGuide.strokeStyle, this.ctx.lineWidth = this.pointerGuide.lineWidth, this.ctx.beginPath(), this.ctx.moveTo(this.centerX, this.centerY), this.ctx.lineTo(this.centerX, -(this.outerRadius / 4)), this.ctx.stroke(), this.ctx.restore());
  }
  drawWheelImage() {
    if (this.wheelImage != null) {
      var t = this.centerX - this.wheelImage.height / 2, i = this.centerY - this.wheelImage.width / 2;
      this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.rotationAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.drawImage(this.wheelImage, t, i), this.ctx.restore();
    }
  }
  drawSegmentImages() {
    if (this.ctx && this.segments)
      for (let n = 1; n <= this.numSegments; n++) {
        let l = this.segments[n];
        if (l.imgData.height) {
          var t = 0, i = 0, A = 0, r = "";
          l.imageDirection !== null ? r = l.imageDirection : r = this.imageDirection, r == "S" ? (t = this.centerX - l.imgData.width / 2, i = this.centerY, A = l.startAngle + 180 + (l.endAngle - l.startAngle) / 2) : r == "E" ? (t = this.centerX, i = this.centerY - l.imgData.height / 2, A = l.startAngle + 270 + (l.endAngle - l.startAngle) / 2) : r == "W" ? (t = this.centerX - l.imgData.width, i = this.centerY - l.imgData.height / 2, A = l.startAngle + 90 + (l.endAngle - l.startAngle) / 2) : (t = this.centerX - l.imgData.width / 2, i = this.centerY - l.imgData.height, A = l.startAngle + (l.endAngle - l.startAngle) / 2), this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.rotationAngle + A)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.drawImage(
            l.imgData,
            t,
            i + l.imageSpaceTop
          ), this.ctx.restore();
        } else
          console.log("Segment " + n + " imgData is not loaded");
      }
  }
  drawSegments() {
    if (this.ctx && this.segments)
      for (let r = 1; r <= this.numSegments; r++) {
        let n = this.segments[r];
        var t, i, A;
        n.fillStyle !== null ? t = n.fillStyle : t = this.fillStyle, this.ctx.fillStyle = t, n.lineWidth !== null ? i = n.lineWidth : i = this.lineWidth, this.ctx.lineWidth = i, n.strokeStyle !== null ? A = n.strokeStyle : A = this.strokeStyle, this.ctx.strokeStyle = A, (A || t) && (this.ctx.beginPath(), this.innerRadius || this.ctx.moveTo(this.centerX, this.centerY), this.ctx.arc(
          this.centerX,
          this.centerY,
          this.outerRadius,
          this.degToRad(n.startAngle + this.rotationAngle - 90),
          this.degToRad(n.endAngle + this.rotationAngle - 90),
          !1
        ), this.innerRadius ? this.ctx.arc(
          this.centerX,
          this.centerY,
          this.innerRadius,
          this.degToRad(n.endAngle + this.rotationAngle - 90),
          this.degToRad(n.startAngle + this.rotationAngle - 90),
          !0
        ) : this.ctx.lineTo(this.centerX, this.centerY), t && this.ctx.fill(), A && this.ctx.stroke());
      }
  }
  drawSegmentText() {
    if (this.ctx) {
      var t, i, A, r, n, l, f, m, E, p, h;
      for (let L = 1; L <= this.numSegments; L++) {
        this.ctx.save();
        let N = this.segments[L];
        if (N.text) {
          N.textFontFamily !== null ? t = N.textFontFamily : t = this.textFontFamily, N.textFontSize !== null ? i = N.textFontSize : i = this.textFontSize, N.textFontWeight !== null ? A = N.textFontWeight : A = this.textFontWeight, N.textOrientation !== null ? r = N.textOrientation : r = this.textOrientation, N.textAlignment !== null ? n = N.textAlignment : n = this.textAlignment, N.textDirection !== null ? l = N.textDirection : l = this.textDirection, N.textMargin !== null ? f = N.textMargin : f = this.textMargin, N.textFillStyle !== null ? m = N.textFillStyle : m = this.textFillStyle, N.textStrokeStyle !== null ? E = N.textStrokeStyle : E = this.textStrokeStyle, N.textLineWidth !== null ? p = N.textLineWidth : p = this.textLineWidth, h = "", A != null && (h += A + " "), i != null && (h += i + "px "), t != null && (h += t), this.ctx.font = h, this.ctx.fillStyle = m, this.ctx.strokeStyle = E, this.ctx.lineWidth = p;
          var D = N.text.split(`
`), S = 0 - i * (D.length / 2) + i / 2;
          r == "curved" && (n == "inner" || n == "outer") && (S = 0);
          for (let W = 0; W < D.length; W++) {
            if (l == "reversed") {
              if (r == "horizontal") {
                n == "inner" ? this.ctx.textAlign = "right" : n == "outer" ? this.ctx.textAlign = "left" : this.ctx.textAlign = "center", this.ctx.textBaseline = "middle";
                var q = this.degToRad(
                  N.endAngle - (N.endAngle - N.startAngle) / 2 + this.rotationAngle - 90 - 180
                );
                this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(q), this.ctx.translate(-this.centerX, -this.centerY), n == "inner" ? (m && this.ctx.fillText(
                  D[W],
                  this.centerX - this.innerRadius - f,
                  this.centerY + S
                ), E && this.ctx.strokeText(
                  D[W],
                  this.centerX - this.innerRadius - f,
                  this.centerY + S
                )) : n == "outer" ? (m && this.ctx.fillText(
                  D[W],
                  this.centerX - this.outerRadius + f,
                  this.centerY + S
                ), E && this.ctx.strokeText(
                  D[W],
                  this.centerX - this.outerRadius + f,
                  this.centerY + S
                )) : (m && this.ctx.fillText(
                  D[W],
                  this.centerX - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - f,
                  this.centerY + S
                ), E && this.ctx.strokeText(
                  D[W],
                  this.centerX - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - f,
                  this.centerY + S
                )), this.ctx.restore();
              } else if (r == "vertical") {
                this.ctx.textAlign = "center", n == "inner" ? this.ctx.textBaseline = "top" : n == "outer" ? this.ctx.textBaseline = "bottom" : this.ctx.textBaseline = "middle";
                var q = N.endAngle - (N.endAngle - N.startAngle) / 2 - 180;
                if (q += this.rotationAngle, this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(q)), this.ctx.translate(-this.centerX, -this.centerY), n == "outer")
                  var w = this.centerY + this.outerRadius - f;
                else if (n == "inner")
                  var w = this.centerY + this.innerRadius + f;
                var s = i - i / 9;
                if (n == "outer")
                  for (var a = D[W].length - 1; a >= 0; a--) {
                    let ae = D[W].charAt(a);
                    m && this.ctx.fillText(
                      ae,
                      this.centerX + S,
                      w
                    ), E && this.ctx.strokeText(
                      ae,
                      this.centerX + S,
                      w
                    ), w -= s;
                  }
                else if (n == "inner")
                  for (var a = 0; a < D[W].length; a++) {
                    let G = D[W].charAt(a);
                    m && this.ctx.fillText(
                      G,
                      this.centerX + S,
                      w
                    ), E && this.ctx.strokeText(
                      G,
                      this.centerX + S,
                      w
                    ), w += s;
                  }
                else if (n == "center") {
                  var I = 0;
                  D[W].length > 1 && (I = s * (D[W].length - 1) / 2);
                  for (var w = this.centerY + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + I + f, a = D[W].length - 1; a >= 0; a--) {
                    let ne = D[W].charAt(a);
                    m && this.ctx.fillText(
                      ne,
                      this.centerX + S,
                      w
                    ), E && this.ctx.strokeText(
                      ne,
                      this.centerX + S,
                      w
                    ), w -= s;
                  }
                }
                this.ctx.restore();
              } else if (r == "curved") {
                var g = 0;
                n == "inner" ? (g = this.innerRadius + f, this.ctx.textBaseline = "top") : n == "outer" ? (g = this.outerRadius - f, this.ctx.textBaseline = "bottom", g -= i * (D.length - 1)) : n == "center" && (g = this.innerRadius + f + (this.outerRadius - this.innerRadius) / 2, this.ctx.textBaseline = "middle");
                var B = 0, M = 0;
                if (D[W].length > 1) {
                  this.ctx.textAlign = "left", B = 4 * (i / 10);
                  let F = 100 / g;
                  B = B * F;
                  let ae = B * D[W].length;
                  M = N.startAngle + ((N.endAngle - N.startAngle) / 2 - ae / 2);
                } else
                  M = N.startAngle + (N.endAngle - N.startAngle) / 2, this.ctx.textAlign = "center";
                for (M += this.rotationAngle, M -= 180, a = D[W].length; a >= 0; a--) {
                  this.ctx.save();
                  let F = D[W].charAt(a);
                  this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(M)), this.ctx.translate(-this.centerX, -this.centerY), E && this.ctx.strokeText(
                    F,
                    this.centerX,
                    this.centerY + g + S
                  ), m && this.ctx.fillText(
                    F,
                    this.centerX,
                    this.centerY + g + S
                  ), M += B, this.ctx.restore();
                }
              }
            } else if (r == "horizontal") {
              n == "inner" ? this.ctx.textAlign = "left" : n == "outer" ? this.ctx.textAlign = "right" : this.ctx.textAlign = "center", this.ctx.textBaseline = "middle";
              var q = this.degToRad(
                N.endAngle - (N.endAngle - N.startAngle) / 2 + this.rotationAngle - 90
              );
              this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(q), this.ctx.translate(-this.centerX, -this.centerY), n == "inner" ? (m && this.ctx.fillText(
                D[W],
                this.centerX + this.innerRadius + f,
                this.centerY + S
              ), E && this.ctx.strokeText(
                D[W],
                this.centerX + this.innerRadius + f,
                this.centerY + S
              )) : n == "outer" ? (m && this.ctx.fillText(
                D[W],
                this.centerX + this.outerRadius - f,
                this.centerY + S
              ), E && this.ctx.strokeText(
                D[W],
                this.centerX + this.outerRadius - f,
                this.centerY + S
              )) : (m && this.ctx.fillText(
                D[W],
                this.centerX + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + f,
                this.centerY + S
              ), E && this.ctx.strokeText(
                D[W],
                this.centerX + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + f,
                this.centerY + S
              )), this.ctx.restore();
            } else if (r == "vertical") {
              this.ctx.textAlign = "center", n == "inner" ? this.ctx.textBaseline = "bottom" : n == "outer" ? this.ctx.textBaseline = "top" : this.ctx.textBaseline = "middle";
              var q = N.endAngle - (N.endAngle - N.startAngle) / 2;
              if (q += this.rotationAngle, this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(q)), this.ctx.translate(-this.centerX, -this.centerY), n == "outer")
                var w = this.centerY - this.outerRadius + f;
              else if (n == "inner")
                var w = this.centerY - this.innerRadius - f;
              var s = i - i / 9;
              if (n == "outer")
                for (var a = 0; a < D[W].length; a++) {
                  let Ae = D[W].charAt(a);
                  m && this.ctx.fillText(
                    Ae,
                    this.centerX + S,
                    w
                  ), E && this.ctx.strokeText(
                    Ae,
                    this.centerX + S,
                    w
                  ), w += s;
                }
              else if (n == "inner")
                for (var a = D[W].length - 1; a >= 0; a--) {
                  let Ae = D[W].charAt(a);
                  m && this.ctx.fillText(
                    Ae,
                    this.centerX + S,
                    w
                  ), E && this.ctx.strokeText(
                    Ae,
                    this.centerX + S,
                    w
                  ), w -= s;
                }
              else if (n == "center") {
                var I = 0;
                D[W].length > 1 && (I = s * (D[W].length - 1) / 2);
                for (var w = this.centerY - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - I - f, a = 0; a < D[W].length; a++) {
                  let fe = D[W].charAt(a);
                  m && this.ctx.fillText(
                    fe,
                    this.centerX + S,
                    w
                  ), E && this.ctx.strokeText(
                    fe,
                    this.centerX + S,
                    w
                  ), w += s;
                }
              }
              this.ctx.restore();
            } else if (r == "curved") {
              var g = 0;
              n == "inner" ? (g = this.innerRadius + f, this.ctx.textBaseline = "bottom", g += i * (D.length - 1)) : n == "outer" ? (g = this.outerRadius - f, this.ctx.textBaseline = "top") : n == "center" && (g = this.innerRadius + f + (this.outerRadius - this.innerRadius) / 2, this.ctx.textBaseline = "middle");
              var B = 0, M = 0;
              if (D[W].length > 1) {
                this.ctx.textAlign = "left", B = 4 * (i / 10);
                let ne = 100 / g;
                B = B * ne;
                let Ae = B * D[W].length;
                M = N.startAngle + ((N.endAngle - N.startAngle) / 2 - Ae / 2);
              } else
                M = N.startAngle + (N.endAngle - N.startAngle) / 2, this.ctx.textAlign = "center";
              for (M += this.rotationAngle, a = 0; a < D[W].length; a++) {
                this.ctx.save();
                let ne = D[W].charAt(a);
                this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(M)), this.ctx.translate(-this.centerX, -this.centerY), E && this.ctx.strokeText(
                  ne,
                  this.centerX,
                  this.centerY - g + S
                ), m && this.ctx.fillText(
                  ne,
                  this.centerX,
                  this.centerY - g + S
                ), M += B, this.ctx.restore();
              }
            }
            S += i;
          }
        }
        this.ctx.restore();
      }
    }
  }
  degToRad(t) {
    return t * 0.017453292519943295;
  }
  setCenter(t, i) {
    this.centerX = t, this.centerY = i;
  }
  addSegment(t, i) {
    let A = new Cr(t);
    this.numSegments++;
    var r;
    if (typeof i < "u") {
      for (var n = this.numSegments; n > i; n--)
        this.segments[n] = this.segments[n - 1];
      this.segments[i] = A, r = i;
    } else
      this.segments[this.numSegments] = A, r = this.numSegments;
    return this.updateSegmentSizes(), this.segments[r];
  }
  deleteSegment(t) {
    if (this.numSegments > 1) {
      if (typeof t < "u")
        for (var i = t; i < this.numSegments; i++)
          this.segments[i] = this.segments[i + 1];
      this.segments[this.numSegments] = void 0, this.numSegments--, this.updateSegmentSizes();
    }
  }
  windowToCanvas(t, i) {
    var A = this.canvas.getBoundingClientRect();
    return {
      x: Math.floor(t - A.left * (this.canvas.width / A.width)),
      y: Math.floor(i - A.top * (this.canvas.height / A.height))
    };
  }
  getSegmentAt(t, i) {
    var A = null, r = this.getSegmentNumberAt(t, i);
    return r !== null && (A = this.segments[r]), A;
  }
  getSegmentNumberAt(t, i) {
    var A = this.windowToCanvas(t, i), r, n, l, f, m;
    A.x > this.centerX ? (l = A.x - this.centerX, n = "R") : (l = this.centerX - A.x, n = "L"), A.y > this.centerY ? (f = A.y - this.centerY, r = "B") : (f = this.centerY - A.y, r = "T");
    var E = f / l, p = Math.atan(E) * 180 / Math.PI, h = 0;
    if (m = Math.sqrt(
      f * f + l * l
    ), r == "T" && n == "R" ? h = Math.round(90 - p) : r == "B" && n == "R" ? h = Math.round(p + 90) : r == "B" && n == "L" ? h = Math.round(90 - p + 180) : r == "T" && n == "L" && (h = Math.round(p + 270)), this.rotationAngle != 0) {
      var D = this.getRotationPosition();
      h = h - D, h < 0 && (h = 360 - Math.abs(h));
    }
    for (var S = null, t = 1; t <= this.numSegments; t++)
      if (h >= this.segments[t].startAngle && h <= this.segments[t].endAngle && m >= this.innerRadius && m <= this.outerRadius) {
        S = t;
        break;
      }
    return S;
  }
  getIndicatedSegment() {
    var t = this.getIndicatedSegmentNumber();
    return this.segments[t];
  }
  getIndicatedSegmentNumber() {
    var t = 0, i = this.getRotationPosition(), A = Math.floor(this.pointerAngle - i);
    A < 0 && (A = 360 - Math.abs(A));
    for (let r = 1; r < this.segments.length; r++)
      if (A >= this.segments[r].startAngle && A <= this.segments[r].endAngle) {
        t = r;
        break;
      }
    return t;
  }
  getRotationPosition() {
    var t = this.rotationAngle;
    if (t >= 0) {
      if (t > 360) {
        var i = Math.floor(t / 360);
        t = t - 360 * i;
      }
    } else {
      if (t < -360) {
        var i = Math.ceil(t / 360);
        t = t - 360 * i;
      }
      t = 360 + t;
    }
    return t;
  }
  startAnimation() {
    if (this.animation) {
      this.computeAnimation(), dt = this;
      var t = new Array(null);
      t[this.animation.propertyName] = this.animation.propertyValue, t.yoyo = this.animation.yoyo, t.repeat = this.animation.repeat, t.ease = this.animation.easing, t.onUpdate = Jf, t.onComplete = Mn, this.tween = Ps.to(this, this.animation.duration, t);
    }
  }
  stopAnimation(t) {
    dt && (dt.tween.kill(), Mn(t)), dt = this;
  }
  pauseAnimation() {
    this.tween && this.tween.pause();
  }
  resumeAnimation() {
    this.tween && this.tween.play();
  }
  computeAnimation() {
    this.animation && (this.animation.propertyName = "rotationAngle", this.animation.spins == null && (this.animation.spins = 5), this.animation.repeat == null && (this.animation.repeat = 0), this.animation.easing == null && (this.animation.easing = "Power4.easeOut"), this.animation.stopAngle == null ? this.animation._stopAngle = Math.floor(Math.random() * 359) : this.animation._stopAngle = (360 - this.animation.stopAngle + this.pointerAngle) % 360, this.animation.yoyo == null && (this.animation.yoyo = !1), this.animation.propertyValue = this.animation.spins * 360, this.animation.direction == "anti-clockwise" ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle);
  }
  getRandomForSegment(t) {
    var i = 0;
    if (t)
      if (typeof this.segments[t] < "u") {
        var A = this.segments[t].startAngle, r = this.segments[t].endAngle, n = r - A - 2;
        n > 0 ? i = A + 1 + Math.floor(Math.random() * n) : console.log(
          "Segment size is too small to safely get random angle inside it"
        );
      } else
        console.log("Segment " + t + " undefined");
    else
      console.log("Segment number not specified");
    return i;
  }
}
class Nf {
  constructor(t) {
    let i = {
      x: 0,
      y: 0,
      imgData: null
    };
    for (var A in i)
      t != null && typeof t[A] < "u" ? this[A] = t[A] : this[A] = i[A];
    if (t != null)
      for (var A in t)
        typeof this[A] > "u" && (this[A] = t[A]);
  }
}
class Sn {
  constructor(t) {
    let i = {
      direction: "clockwise",
      propertyName: null,
      propertyValue: null,
      duration: 10,
      yoyo: !1,
      repeat: 0,
      easing: "power3.easeOut",
      stopAngle: null,
      spins: null,
      clearTheCanvas: null,
      callbackFinished: null,
      callbackBefore: null,
      callbackAfter: null
    };
    for (var A in i)
      t != null && typeof t[A] < "u" ? this[A] = t[A] : this[A] = i[A];
    if (t != null)
      for (var A in t)
        typeof this[A] > "u" && (this[A] = t[A]);
  }
}
class Cr {
  constructor(t) {
    let i = {
      index: -1,
      size: null,
      text: "",
      fillStyle: null,
      strokeStyle: null,
      lineWidth: null,
      textFontFamily: null,
      textFontSize: null,
      textFontWeight: null,
      textOrientation: null,
      textAlignment: null,
      textDirection: null,
      textMargin: null,
      textFillStyle: null,
      textStrokeStyle: null,
      textLineWidth: null,
      image: null,
      imageDirection: null,
      imageSpaceTop: 0,
      imgData: null
      //- Image object created here and loaded with image data.
    };
    for (var A in i)
      t != null && typeof t[A] < "u" ? this[A] = t[A] : this[A] = i[A];
    if (t != null)
      for (var A in t)
        typeof this[A] > "u" && (this[A] = t[A]);
    this.startAngle = 0, this.endAngle = 0;
  }
  changeImage(t, i) {
    this.image = t, this.imgData = null, i && (this.imageDirection = i), jA = !1, this.imgData = new Image(), this.imgData.onload = Ks, this.imgData.src = this.image;
  }
}
class _n {
  constructor(t) {
    let i = {
      display: !1,
      strokeStyle: "red",
      lineWidth: 3
    };
    for (var A in i)
      t != null && typeof t[A] < "u" ? this[A] = t[A] : this[A] = i[A];
  }
}
function Jf() {
  var e, t, i, A;
  dt && (dt.animation.clearTheCanvas != !1 && dt.ctx.clearRect(
    0,
    0,
    dt.canvas.width,
    dt.canvas.height
  ), (t = (e = dt.animation).callbackBefore) == null || t.call(e), dt.draw(!1), (A = (i = dt.animation).callbackAfter) == null || A.call(i));
}
var dt = null;
function Mn(e) {
  var t, i;
  e != !1 && ((i = (t = dt.animation).callbackFinished) == null || i.call(
    t,
    dt.getIndicatedSegment()
  ));
}
var jA = !1;
function Ks() {
  if (jA == !1) {
    var e = 0;
    for (let t = 1; t <= dt.numSegments; t++)
      dt.segments[t].imgData != null && dt.segments[t].imgData.height && e++;
    e == dt.numSegments && (jA = !0, dt.draw());
  }
}
let Er = 170, Bi = 50, Vf = 90, Wf = ["#7eba57", "#27539e"], Gf = "#dfdfdf", qn = 0, mA = !1, OA = [], FA = 0;
const it = Math.min(500, window.innerWidth), Ir = document.createElement("img"), kn = document.createElement("img"), jf = ({
  campaignId: e,
  gifts: t,
  quantity: i,
  goHome: A,
  onGetResult: r = () => new Promise()
}) => {
  const n = pA(null), [l, f] = jt(null), [m, E] = jt(0), p = pA(null), h = pA([]), D = pA({
    win: new Audio(Xf),
    tick: new Audio(Hf),
    platform: "iOS"
  });
  yA(() => {
    FA = i ?? 0, t && (E(+FA), S(t));
  }, [t]), yA(() => {
    FA = i ?? 0, t && E(+FA);
  }, [i]);
  const S = async (M) => {
    var N, W;
    OA = [];
    for (let F = 0; F < M.length; F++)
      try {
        let ae = new URL(
          (N = M[F]) == null ? void 0 : N.giftIcon,
          "https://advancesystem.creasia.vn/"
        ), G = document.createElement("img");
        await s(G, ae), OA.push({
          image: G,
          color: M[F] ? (W = M[F]) == null ? void 0 : W.giftBackgroundColor : Wf[F % 2],
          title: M[F].giftName
        });
      } catch {
        console.log(M[F]);
      }
    await s(Ir, pf);
    const L = new Kf(
      {
        canvas: n.current,
        outerRadius: Er,
        innerRadius: Bi,
        centerX: it / 2,
        centerY: it / 2,
        numSegments: M.length,
        drawMode: "segmentImage",
        textFontFamily: "Roboto",
        textFontSize: 10,
        textFontWeight: "bold",
        textOrientation: "curved",
        textAlignment: "outer",
        textDirection: "reversed",
        textMargin: 15,
        textFillStyle: "#000",
        // 'textStrokeStyle': "#fff",
        // 'textLineWidth': 4,6
        // 'fillStyle': 'silver',
        strokeStyle: "#fff0",
        // lineWidth: 0,
        clearTheCanvas: !0,
        imageOverlay: !0,
        // drawText: true,
        segments: OA.map((F, ae) => ({
          index: ae,
          lineWidth: 0,
          text: F.title,
          fillStyle: F.color,
          imageDirection: "S",
          imageSpaceTop: Vf,
          imgData: F.image,
          image: F.image.src
        })),
        pin: {
          imgData: Ir,
          x: it / 2,
          y: it / 2 + Er - Ir.height / 2
        },
        pointerAngle: 180,
        // 'pointerGuide':
        // {
        //     'display': true,
        // },
        animation: {
          duration: 5,
          spins: 8,
          callbackFinished: a,
          callbackBefore: () => {
            p.current.getIndicatedSegment();
          }
        },
        drawButton: g,
        drawBG: I
      },
      !0
    );
    p.current = L;
  }, q = (M) => {
    var L = M.nativeEvent.offsetX, N = M.nativeEvent.offsetY;
    mA == !1 && L >= it / 2 - Bi && L <= it / 2 + Bi && N >= it / 2 - Bi && N <= it / 2 + Bi && (f(null), mA = !0, r().then((W) => {
      if (W && (W != null && W.giftIndex)) {
        const G = p.current;
        h.current.push(W), qn = W.giftIndex - 1;
        var F = 360 / OA.length, ae = qn * F + w(5, F - 5);
        G.animation.stopAngle = ae, G.startAnimation();
      } else
        A();
    }).catch(() => {
      mA = !1;
    }));
  }, w = (M, L) => Math.random() * (L - M) + M, s = (M, L) => new Promise((N, W) => {
    M.onload = () => {
      N();
    }, M.onerror = () => {
      W();
    }, M.src = L;
  }), a = ({ index: M, text: L, image: N }) => {
    setTimeout(() => {
      const W = h.current[h.current.length - 1];
      mA = !1, f({
        giftId: W.giftId,
        message: W.giftName,
        giftIndex: W.giftIndex,
        image: W.giftWinImage,
        date: W.prizeWinningDay,
        code: W.giftCode
      }), E((F) => F - 1), D.current.win.currentTime = 0, D.current.win.play();
    }, 500);
  }, I = (M, L) => {
    let N = Er;
    switch (L.fillStyle = Gf, L.beginPath(), L.moveTo(it / 2, it / 2), L.arc(it / 2, it / 2, N + 8, 0, Math.PI * 2), L.fill(), e) {
      case 170:
        L.fillStyle = "#8ac748";
        break;
      default:
        L.fillStyle = "#27539e";
        break;
    }
    L.beginPath(), L.moveTo(it / 2, it / 2), L.arc(it / 2, it / 2, N + 1, 0, Math.PI * 2), L.fill();
  }, g = (M, L) => {
    let N = 0.8;
    kn.width * N, kn.height * N, L.save(), L.translate(it / 2, it / 2), L.fillStyle = "#7eba57", L.beginPath(), L.arc(0, 0, Bi + 3, 0, Math.PI * 2), L.fill(), L.fillStyle = "#056A37", L.beginPath(), L.arc(0, 0, Bi, 0, Math.PI * 2), L.fill(), L.font = "bold 17px Roboto", L.textAlign = "center", e == 170 ? L.strokeStyle = "#3f3f3f" : L.strokeStyle = "#27539e", L.lineWidth = 3, mA ? (L.strokeText("ĐANG", 0, -5), L.strokeText("QUAY", 0, 19), L.fillStyle = "#fff", L.fillText("ĐANG", 0, -5), L.fillText("QUAY", 0, 19)) : (L.strokeText("CHẠM", 0, -5), L.strokeText("ĐỂ QUAY", 0, 19), L.fillStyle = "#fff", L.fillText("CHẠM", 0, -5), L.fillText("ĐỂ QUAY", 0, 19)), L.restore();
  }, B = () => {
    m > 0 ? (f(null), p.current.stopAnimation(!1), p.current.rotationAngle = 0, p.current.draw()) : A();
  };
  return /* @__PURE__ */ Ve.jsxs("div", { className: "relative h-full w-full flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ Ve.jsx(
      "div",
      {
        className: "pt-6 flex flex-col items-center justify-center relative z-10",
        style: { width: it },
        children: /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
          /* @__PURE__ */ Ve.jsx("div", { className: "h-16" }),
          /* @__PURE__ */ Ve.jsx("div", { className: "h-28" }),
          /* @__PURE__ */ Ve.jsx(
            "span",
            {
              className: " text-white text-2xl uppercase mt-3",
              style: {
                WebkitTextStroke: "0.5px #ffffff",
                textShadow: "1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #7eba47, -1px 1px 0 #7eba47, 1px 2px 4px #000"
              },
              children: "vòng quay may mắn"
            }
          ),
          /* @__PURE__ */ Ve.jsxs(
            "p",
            {
              className: "absolute right-2 top-1 text-xl font-roboto font-bold",
              style: {
                WebkitTextStroke: "0.5px #ffffff",
                textShadow: "1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 0px -1px 0 #ffffff, -1px 1px 0 #ffffff,  1px 2px 4px #000"
              },
              children: [
                i != m && "Còn",
                " ",
                m,
                " lần quay"
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ Ve.jsxs("div", { className: "flex flex-col items-center h-screen", children: [
      l && /* @__PURE__ */ Ve.jsxs(
        "div",
        {
          className: "flex flex-col items-center z-10 sm:scale-110 ",
          style: { width: it },
          children: [
            /* @__PURE__ */ Ve.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ Ve.jsx("img", { src: gf, width: it * 0.6, height: it * 0.6, alt: "" }),
              /* @__PURE__ */ Ve.jsx("div", { className: "absolute left-1/2 -top-14 translate-y-1/2 -translate-x-1/2 w-[70%]", children: /* @__PURE__ */ Ve.jsx(
                "img",
                {
                  src: new URL(l.image, "https://advancesystem.creasia.vn/"),
                  className: "w-full",
                  alt: ""
                }
              ) })
            ] }),
            /* @__PURE__ */ Ve.jsxs("p", { className: "text-center text-[24px] uppercase font-black font-roboto leading-7 mt-2 tracking-tight", children: [
              /* @__PURE__ */ Ve.jsx(
                "span",
                {
                  className: " text-white text",
                  style: {
                    WebkitTextStroke: "0.5px #ffffff",
                    textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 2px 4px #000"
                  },
                  children: "Chúc mừng bạn đã trúng"
                }
              ),
              /* @__PURE__ */ Ve.jsx("br", {}),
              /* @__PURE__ */ Ve.jsx("div", { className: "text-center text-[20px] uppercase font-black mt-[3vh] tracking-tight relative flex flex-col items-center", children: /* @__PURE__ */ Ve.jsx(
                "span",
                {
                  className: " text-[#fff]",
                  style: {
                    WebkitTextStroke: "0.5px #fff",
                    textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 0px -1px 0 #000, -1px 1px 0 #000,  1px 2px 4px #000"
                  },
                  children: l.message
                }
              ) }),
              /* @__PURE__ */ Ve.jsx("br", {})
            ] }),
            /* @__PURE__ */ Ve.jsxs(
              "div",
              {
                className: "text-white my-1 px-8 py-0.5 border-2 border-dashed border-white",
                style: {
                  WebkitTextStroke: "0.5px #ffffff",
                  textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 0px -1px 0 #000, -1px 1px 0 #000,  1px 2px 4px #000"
                },
                children: [
                  /* @__PURE__ */ Ve.jsx("b", { children: l.code }),
                  " -",
                  " ",
                  /* @__PURE__ */ Ve.jsx("i", { children: ue(l.date).format("DD/MM/YYYY HH:mm") })
                ]
              }
            ),
            /* @__PURE__ */ Ve.jsx(
              "button",
              {
                className: "mt-5 uppercase font-bold text-[#27539e] bg-white border-[#7eba57] border-2 p-2 rounded-lg shadow-xl",
                onClick: B,
                children: m > 0 ? "Quay tiếp" : "Hoàn tất"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ Ve.jsx("div", { className: l ? "hidden relative" : "relative z-0 h-auto", children: /* @__PURE__ */ Ve.jsx(
        "canvas",
        {
          id: "canvas",
          ref: n,
          height: it,
          width: it,
          onClick: q
        }
      ) })
    ] })
  ] });
}, Hf = "data:audio/mpeg;base64,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", Xf = "data:audio/mpeg;base64,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NKsIkzIqUJlWESbK05XkpxlqtsyDZSSJLKCFEsoIEpYQoqhhCiqKFMVRRkxBTUUzLjk4LjSqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5LE84OYuaMsbD0rwyUt4kmXpfGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
function Ns(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Zf } = Object.prototype, { getPrototypeOf: cn } = Object, or = /* @__PURE__ */ ((e) => (t) => {
  const i = Zf.call(t);
  return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ei = (e) => (e = e.toLowerCase(), (t) => or(t) === e), lr = (e) => (t) => typeof t === e, { isArray: AA } = Array, xA = lr("undefined");
function zf(e) {
  return e !== null && !xA(e) && e.constructor !== null && !xA(e.constructor) && Kt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Js = ei("ArrayBuffer");
function $f(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Js(e.buffer), t;
}
const eh = lr("string"), Kt = lr("function"), Vs = lr("number"), ur = (e) => e !== null && typeof e == "object", th = (e) => e === !0 || e === !1, PA = (e) => {
  if (or(e) !== "object")
    return !1;
  const t = cn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ih = ei("Date"), Ah = ei("File"), rh = ei("Blob"), nh = ei("FileList"), sh = (e) => ur(e) && Kt(e.pipe), ah = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Kt(e.append) && ((t = or(e)) === "formdata" || // detect form-data instance
  t === "object" && Kt(e.toString) && e.toString() === "[object FormData]"));
}, oh = ei("URLSearchParams"), [lh, uh, fh, hh] = ["ReadableStream", "Request", "Response", "Headers"].map(ei), ch = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qA(e, t, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let A, r;
  if (typeof e != "object" && (e = [e]), AA(e))
    for (A = 0, r = e.length; A < r; A++)
      t.call(null, e[A], A, e);
  else {
    const n = i ? Object.getOwnPropertyNames(e) : Object.keys(e), l = n.length;
    let f;
    for (A = 0; A < l; A++)
      f = n[A], t.call(null, e[f], f, e);
  }
}
function Ws(e, t) {
  t = t.toLowerCase();
  const i = Object.keys(e);
  let A = i.length, r;
  for (; A-- > 0; )
    if (r = i[A], t === r.toLowerCase())
      return r;
  return null;
}
const Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, js = (e) => !xA(e) && e !== Gs;
function Or() {
  const { caseless: e } = js(this) && this || {}, t = {}, i = (A, r) => {
    const n = e && Ws(t, r) || r;
    PA(t[n]) && PA(A) ? t[n] = Or(t[n], A) : PA(A) ? t[n] = Or({}, A) : AA(A) ? t[n] = A.slice() : t[n] = A;
  };
  for (let A = 0, r = arguments.length; A < r; A++)
    arguments[A] && qA(arguments[A], i);
  return t;
}
const dh = (e, t, i, { allOwnKeys: A } = {}) => (qA(t, (r, n) => {
  i && Kt(r) ? e[n] = Ns(r, i) : e[n] = r;
}, { allOwnKeys: A }), e), mh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gh = (e, t, i, A) => {
  e.prototype = Object.create(t.prototype, A), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), i && Object.assign(e.prototype, i);
}, ph = (e, t, i, A) => {
  let r, n, l;
  const f = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), n = r.length; n-- > 0; )
      l = r[n], (!A || A(l, e, t)) && !f[l] && (t[l] = e[l], f[l] = !0);
    e = i !== !1 && cn(e);
  } while (e && (!i || i(e, t)) && e !== Object.prototype);
  return t;
}, yh = (e, t, i) => {
  e = String(e), (i === void 0 || i > e.length) && (i = e.length), i -= t.length;
  const A = e.indexOf(t, i);
  return A !== -1 && A === i;
}, wh = (e) => {
  if (!e) return null;
  if (AA(e)) return e;
  let t = e.length;
  if (!Vs(t)) return null;
  const i = new Array(t);
  for (; t-- > 0; )
    i[t] = e[t];
  return i;
}, Ch = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && cn(Uint8Array)), Eh = (e, t) => {
  const A = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = A.next()) && !r.done; ) {
    const n = r.value;
    t.call(e, n[0], n[1]);
  }
}, Ih = (e, t) => {
  let i;
  const A = [];
  for (; (i = e.exec(t)) !== null; )
    A.push(i);
  return A;
}, Th = ei("HTMLFormElement"), xh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, A, r) {
    return A.toUpperCase() + r;
  }
), Dn = (({ hasOwnProperty: e }) => (t, i) => e.call(t, i))(Object.prototype), Rh = ei("RegExp"), Hs = (e, t) => {
  const i = Object.getOwnPropertyDescriptors(e), A = {};
  qA(i, (r, n) => {
    let l;
    (l = t(r, n, e)) !== !1 && (A[n] = l || r);
  }), Object.defineProperties(e, A);
}, Sh = (e) => {
  Hs(e, (t, i) => {
    if (Kt(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const A = e[i];
    if (Kt(A)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, _h = (e, t) => {
  const i = {}, A = (r) => {
    r.forEach((n) => {
      i[n] = !0;
    });
  };
  return AA(e) ? A(e) : A(String(e).split(t)), i;
}, Mh = () => {
}, qh = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Tr = "abcdefghijklmnopqrstuvwxyz", bn = "0123456789", Xs = {
  DIGIT: bn,
  ALPHA: Tr,
  ALPHA_DIGIT: Tr + Tr.toUpperCase() + bn
}, kh = (e = 16, t = Xs.ALPHA_DIGIT) => {
  let i = "";
  const { length: A } = t;
  for (; e--; )
    i += t[Math.random() * A | 0];
  return i;
};
function Dh(e) {
  return !!(e && Kt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const bh = (e) => {
  const t = new Array(10), i = (A, r) => {
    if (ur(A)) {
      if (t.indexOf(A) >= 0)
        return;
      if (!("toJSON" in A)) {
        t[r] = A;
        const n = AA(A) ? [] : {};
        return qA(A, (l, f) => {
          const m = i(l, r + 1);
          !xA(m) && (n[f] = m);
        }), t[r] = void 0, n;
      }
    }
    return A;
  };
  return i(e, 0);
}, vh = ei("AsyncFunction"), Qh = (e) => e && (ur(e) || Kt(e)) && Kt(e.then) && Kt(e.catch), V = {
  isArray: AA,
  isArrayBuffer: Js,
  isBuffer: zf,
  isFormData: ah,
  isArrayBufferView: $f,
  isString: eh,
  isNumber: Vs,
  isBoolean: th,
  isObject: ur,
  isPlainObject: PA,
  isReadableStream: lh,
  isRequest: uh,
  isResponse: fh,
  isHeaders: hh,
  isUndefined: xA,
  isDate: ih,
  isFile: Ah,
  isBlob: rh,
  isRegExp: Rh,
  isFunction: Kt,
  isStream: sh,
  isURLSearchParams: oh,
  isTypedArray: Ch,
  isFileList: nh,
  forEach: qA,
  merge: Or,
  extend: dh,
  trim: ch,
  stripBOM: mh,
  inherits: gh,
  toFlatObject: ph,
  kindOf: or,
  kindOfTest: ei,
  endsWith: yh,
  toArray: wh,
  forEachEntry: Eh,
  matchAll: Ih,
  isHTMLForm: Th,
  hasOwnProperty: Dn,
  hasOwnProp: Dn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hs,
  freezeMethods: Sh,
  toObjectSet: _h,
  toCamelCase: xh,
  noop: Mh,
  toFiniteNumber: qh,
  findKey: Ws,
  global: Gs,
  isContextDefined: js,
  ALPHABET: Xs,
  generateString: kh,
  isSpecCompliantForm: Dh,
  toJSONObject: bh,
  isAsyncFn: vh,
  isThenable: Qh
};
function Me(e, t, i, A, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), i && (this.config = i), A && (this.request = A), r && (this.response = r);
}
V.inherits(Me, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Zs = Me.prototype, zs = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  zs[e] = { value: e };
});
Object.defineProperties(Me, zs);
Object.defineProperty(Zs, "isAxiosError", { value: !0 });
Me.from = (e, t, i, A, r, n) => {
  const l = Object.create(Zs);
  return V.toFlatObject(e, l, function(m) {
    return m !== Error.prototype;
  }, (f) => f !== "isAxiosError"), Me.call(l, e.message, t, i, A, r), l.cause = e, l.name = e.name, n && Object.assign(l, n), l;
};
const Bh = null;
function Fr(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function $s(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vn(e, t, i) {
  return e ? e.concat(t).map(function(r, n) {
    return r = $s(r), !i && n ? "[" + r + "]" : r;
  }).join(i ? "." : "") : t;
}
function Oh(e) {
  return V.isArray(e) && !e.some(Fr);
}
const Fh = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function fr(e, t, i) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), i = V.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, s) {
    return !V.isUndefined(s[w]);
  });
  const A = i.metaTokens, r = i.visitor || p, n = i.dots, l = i.indexes, m = (i.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(r))
    throw new TypeError("visitor must be a function");
  function E(q) {
    if (q === null) return "";
    if (V.isDate(q))
      return q.toISOString();
    if (!m && V.isBlob(q))
      throw new Me("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(q) || V.isTypedArray(q) ? m && typeof Blob == "function" ? new Blob([q]) : Buffer.from(q) : q;
  }
  function p(q, w, s) {
    let a = q;
    if (q && !s && typeof q == "object") {
      if (V.endsWith(w, "{}"))
        w = A ? w : w.slice(0, -2), q = JSON.stringify(q);
      else if (V.isArray(q) && Oh(q) || (V.isFileList(q) || V.endsWith(w, "[]")) && (a = V.toArray(q)))
        return w = $s(w), a.forEach(function(g, B) {
          !(V.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? vn([w], B, n) : l === null ? w : w + "[]",
            E(g)
          );
        }), !1;
    }
    return Fr(q) ? !0 : (t.append(vn(s, w, n), E(q)), !1);
  }
  const h = [], D = Object.assign(Fh, {
    defaultVisitor: p,
    convertValue: E,
    isVisitable: Fr
  });
  function S(q, w) {
    if (!V.isUndefined(q)) {
      if (h.indexOf(q) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      h.push(q), V.forEach(q, function(a, I) {
        (!(V.isUndefined(a) || a === null) && r.call(
          t,
          a,
          V.isString(I) ? I.trim() : I,
          w,
          D
        )) === !0 && S(a, w ? w.concat(I) : [I]);
      }), h.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function Qn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(A) {
    return t[A];
  });
}
function dn(e, t) {
  this._pairs = [], e && fr(e, this, t);
}
const ea = dn.prototype;
ea.append = function(t, i) {
  this._pairs.push([t, i]);
};
ea.toString = function(t) {
  const i = t ? function(A) {
    return t.call(this, A, Qn);
  } : Qn;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function Yh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ta(e, t, i) {
  if (!t)
    return e;
  const A = i && i.encode || Yh, r = i && i.serialize;
  let n;
  if (r ? n = r(t, i) : n = V.isURLSearchParams(t) ? t.toString() : new dn(t, i).toString(A), n) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}
class Bn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, i, A) {
    return this.handlers.push({
      fulfilled: t,
      rejected: i,
      synchronous: A ? A.synchronous : !1,
      runWhen: A ? A.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    V.forEach(this.handlers, function(A) {
      A !== null && t(A);
    });
  }
}
const ia = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Uh = typeof URLSearchParams < "u" ? URLSearchParams : dn, Lh = typeof FormData < "u" ? FormData : null, Ph = typeof Blob < "u" ? Blob : null, Kh = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Uh,
    FormData: Lh,
    Blob: Ph
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, mn = typeof window < "u" && typeof document < "u", Nh = ((e) => mn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Jh = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vh = mn && window.location.href || "http://localhost", Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: mn,
  hasStandardBrowserEnv: Nh,
  hasStandardBrowserWebWorkerEnv: Jh,
  origin: Vh
}, Symbol.toStringTag, { value: "Module" })), Xt = {
  ...Wh,
  ...Kh
};
function Gh(e, t) {
  return fr(e, new Xt.classes.URLSearchParams(), Object.assign({
    visitor: function(i, A, r, n) {
      return Xt.isNode && V.isBuffer(i) ? (this.append(A, i.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function jh(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Hh(e) {
  const t = {}, i = Object.keys(e);
  let A;
  const r = i.length;
  let n;
  for (A = 0; A < r; A++)
    n = i[A], t[n] = e[n];
  return t;
}
function Aa(e) {
  function t(i, A, r, n) {
    let l = i[n++];
    if (l === "__proto__") return !0;
    const f = Number.isFinite(+l), m = n >= i.length;
    return l = !l && V.isArray(r) ? r.length : l, m ? (V.hasOwnProp(r, l) ? r[l] = [r[l], A] : r[l] = A, !f) : ((!r[l] || !V.isObject(r[l])) && (r[l] = []), t(i, A, r[l], n) && V.isArray(r[l]) && (r[l] = Hh(r[l])), !f);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const i = {};
    return V.forEachEntry(e, (A, r) => {
      t(jh(A), r, i, 0);
    }), i;
  }
  return null;
}
function Xh(e, t, i) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (A) {
      if (A.name !== "SyntaxError")
        throw A;
    }
  return (i || JSON.stringify)(e);
}
const kA = {
  transitional: ia,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, i) {
    const A = i.getContentType() || "", r = A.indexOf("application/json") > -1, n = V.isObject(t);
    if (n && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return r ? JSON.stringify(Aa(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t) || V.isReadableStream(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let f;
    if (n) {
      if (A.indexOf("application/x-www-form-urlencoded") > -1)
        return Gh(t, this.formSerializer).toString();
      if ((f = V.isFileList(t)) || A.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return fr(
          f ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return n || r ? (i.setContentType("application/json", !1), Xh(t)) : t;
  }],
  transformResponse: [function(t) {
    const i = this.transitional || kA.transitional, A = i && i.forcedJSONParsing, r = this.responseType === "json";
    if (V.isResponse(t) || V.isReadableStream(t))
      return t;
    if (t && V.isString(t) && (A && !this.responseType || r)) {
      const l = !(i && i.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (f) {
        if (l)
          throw f.name === "SyntaxError" ? Me.from(f, Me.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Xt.classes.FormData,
    Blob: Xt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  kA.headers[e] = {};
});
const Zh = V.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), zh = (e) => {
  const t = {};
  let i, A, r;
  return e && e.split(`
`).forEach(function(l) {
    r = l.indexOf(":"), i = l.substring(0, r).trim().toLowerCase(), A = l.substring(r + 1).trim(), !(!i || t[i] && Zh[i]) && (i === "set-cookie" ? t[i] ? t[i].push(A) : t[i] = [A] : t[i] = t[i] ? t[i] + ", " + A : A);
  }), t;
}, On = Symbol("internals");
function gA(e) {
  return e && String(e).trim().toLowerCase();
}
function KA(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(KA) : String(e);
}
function $h(e) {
  const t = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let A;
  for (; A = i.exec(e); )
    t[A[1]] = A[2];
  return t;
}
const ec = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xr(e, t, i, A, r) {
  if (V.isFunction(A))
    return A.call(this, t, i);
  if (r && (t = i), !!V.isString(t)) {
    if (V.isString(A))
      return t.indexOf(A) !== -1;
    if (V.isRegExp(A))
      return A.test(t);
  }
}
function tc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, i, A) => i.toUpperCase() + A);
}
function ic(e, t) {
  const i = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((A) => {
    Object.defineProperty(e, A + i, {
      value: function(r, n, l) {
        return this[A].call(this, t, r, n, l);
      },
      configurable: !0
    });
  });
}
class Ft {
  constructor(t) {
    t && this.set(t);
  }
  set(t, i, A) {
    const r = this;
    function n(f, m, E) {
      const p = gA(m);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const h = V.findKey(r, p);
      (!h || r[h] === void 0 || E === !0 || E === void 0 && r[h] !== !1) && (r[h || m] = KA(f));
    }
    const l = (f, m) => V.forEach(f, (E, p) => n(E, p, m));
    if (V.isPlainObject(t) || t instanceof this.constructor)
      l(t, i);
    else if (V.isString(t) && (t = t.trim()) && !ec(t))
      l(zh(t), i);
    else if (V.isHeaders(t))
      for (const [f, m] of t.entries())
        n(m, f, A);
    else
      t != null && n(i, t, A);
    return this;
  }
  get(t, i) {
    if (t = gA(t), t) {
      const A = V.findKey(this, t);
      if (A) {
        const r = this[A];
        if (!i)
          return r;
        if (i === !0)
          return $h(r);
        if (V.isFunction(i))
          return i.call(this, r, A);
        if (V.isRegExp(i))
          return i.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, i) {
    if (t = gA(t), t) {
      const A = V.findKey(this, t);
      return !!(A && this[A] !== void 0 && (!i || xr(this, this[A], A, i)));
    }
    return !1;
  }
  delete(t, i) {
    const A = this;
    let r = !1;
    function n(l) {
      if (l = gA(l), l) {
        const f = V.findKey(A, l);
        f && (!i || xr(A, A[f], f, i)) && (delete A[f], r = !0);
      }
    }
    return V.isArray(t) ? t.forEach(n) : n(t), r;
  }
  clear(t) {
    const i = Object.keys(this);
    let A = i.length, r = !1;
    for (; A--; ) {
      const n = i[A];
      (!t || xr(this, this[n], n, t, !0)) && (delete this[n], r = !0);
    }
    return r;
  }
  normalize(t) {
    const i = this, A = {};
    return V.forEach(this, (r, n) => {
      const l = V.findKey(A, n);
      if (l) {
        i[l] = KA(r), delete i[n];
        return;
      }
      const f = t ? tc(n) : String(n).trim();
      f !== n && delete i[n], i[f] = KA(r), A[f] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const i = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (A, r) => {
      A != null && A !== !1 && (i[r] = t && V.isArray(A) ? A.join(", ") : A);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...i) {
    const A = new this(t);
    return i.forEach((r) => A.set(r)), A;
  }
  static accessor(t) {
    const A = (this[On] = this[On] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function n(l) {
      const f = gA(l);
      A[f] || (ic(r, l), A[f] = !0);
    }
    return V.isArray(t) ? t.forEach(n) : n(t), this;
  }
}
Ft.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(Ft.prototype, ({ value: e }, t) => {
  let i = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(A) {
      this[i] = A;
    }
  };
});
V.freezeMethods(Ft);
function Rr(e, t) {
  const i = this || kA, A = t || i, r = Ft.from(A.headers);
  let n = A.data;
  return V.forEach(e, function(f) {
    n = f.call(i, n, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), n;
}
function ra(e) {
  return !!(e && e.__CANCEL__);
}
function rA(e, t, i) {
  Me.call(this, e ?? "canceled", Me.ERR_CANCELED, t, i), this.name = "CanceledError";
}
V.inherits(rA, Me, {
  __CANCEL__: !0
});
function na(e, t, i) {
  const A = i.config.validateStatus;
  !i.status || !A || A(i.status) ? e(i) : t(new Me(
    "Request failed with status code " + i.status,
    [Me.ERR_BAD_REQUEST, Me.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function Ac(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function rc(e, t) {
  e = e || 10;
  const i = new Array(e), A = new Array(e);
  let r = 0, n = 0, l;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const E = Date.now(), p = A[n];
    l || (l = E), i[r] = m, A[r] = E;
    let h = n, D = 0;
    for (; h !== r; )
      D += i[h++], h = h % e;
    if (r = (r + 1) % e, r === n && (n = (n + 1) % e), E - l < t)
      return;
    const S = p && E - p;
    return S ? Math.round(D * 1e3 / S) : void 0;
  };
}
function nc(e, t) {
  let i = 0;
  const A = 1e3 / t;
  let r = null;
  return function() {
    const l = this === !0, f = Date.now();
    if (l || f - i > A)
      return r && (clearTimeout(r), r = null), i = f, e.apply(null, arguments);
    r || (r = setTimeout(() => (r = null, i = Date.now(), e.apply(null, arguments)), A - (f - i)));
  };
}
const HA = (e, t, i = 3) => {
  let A = 0;
  const r = rc(50, 250);
  return nc((n) => {
    const l = n.loaded, f = n.lengthComputable ? n.total : void 0, m = l - A, E = r(m), p = l <= f;
    A = l;
    const h = {
      loaded: l,
      total: f,
      progress: f ? l / f : void 0,
      bytes: m,
      rate: E || void 0,
      estimated: E && f && p ? (f - l) / E : void 0,
      event: n,
      lengthComputable: f != null
    };
    h[t ? "download" : "upload"] = !0, e(h);
  }, i);
}, sc = Xt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
    let A;
    function r(n) {
      let l = n;
      return t && (i.setAttribute("href", l), l = i.href), i.setAttribute("href", l), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return A = r(window.location.href), function(l) {
      const f = V.isString(l) ? r(l) : l;
      return f.protocol === A.protocol && f.host === A.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ac = Xt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, i, A, r, n) {
      const l = [e + "=" + encodeURIComponent(t)];
      V.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), V.isString(A) && l.push("path=" + A), V.isString(r) && l.push("domain=" + r), n === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function oc(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lc(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function sa(e, t) {
  return e && !oc(t) ? lc(e, t) : t;
}
const Fn = (e) => e instanceof Ft ? { ...e } : e;
function Ni(e, t) {
  t = t || {};
  const i = {};
  function A(E, p, h) {
    return V.isPlainObject(E) && V.isPlainObject(p) ? V.merge.call({ caseless: h }, E, p) : V.isPlainObject(p) ? V.merge({}, p) : V.isArray(p) ? p.slice() : p;
  }
  function r(E, p, h) {
    if (V.isUndefined(p)) {
      if (!V.isUndefined(E))
        return A(void 0, E, h);
    } else return A(E, p, h);
  }
  function n(E, p) {
    if (!V.isUndefined(p))
      return A(void 0, p);
  }
  function l(E, p) {
    if (V.isUndefined(p)) {
      if (!V.isUndefined(E))
        return A(void 0, E);
    } else return A(void 0, p);
  }
  function f(E, p, h) {
    if (h in t)
      return A(E, p);
    if (h in e)
      return A(void 0, E);
  }
  const m = {
    url: n,
    method: n,
    data: n,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: f,
    headers: (E, p) => r(Fn(E), Fn(p), !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const h = m[p] || r, D = h(e[p], t[p], p);
    V.isUndefined(D) && h !== f || (i[p] = D);
  }), i;
}
const aa = (e) => {
  const t = Ni({}, e);
  let { data: i, withXSRFToken: A, xsrfHeaderName: r, xsrfCookieName: n, headers: l, auth: f } = t;
  t.headers = l = Ft.from(l), t.url = ta(sa(t.baseURL, t.url), e.params, e.paramsSerializer), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))
  );
  let m;
  if (V.isFormData(i)) {
    if (Xt.hasStandardBrowserEnv || Xt.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((m = l.getContentType()) !== !1) {
      const [E, ...p] = m ? m.split(";").map((h) => h.trim()).filter(Boolean) : [];
      l.setContentType([E || "multipart/form-data", ...p].join("; "));
    }
  }
  if (Xt.hasStandardBrowserEnv && (A && V.isFunction(A) && (A = A(t)), A || A !== !1 && sc(t.url))) {
    const E = r && n && ac.read(n);
    E && l.set(r, E);
  }
  return t;
}, uc = typeof XMLHttpRequest < "u", fc = uc && function(e) {
  return new Promise(function(i, A) {
    const r = aa(e);
    let n = r.data;
    const l = Ft.from(r.headers).normalize();
    let { responseType: f } = r, m;
    function E() {
      r.cancelToken && r.cancelToken.unsubscribe(m), r.signal && r.signal.removeEventListener("abort", m);
    }
    let p = new XMLHttpRequest();
    p.open(r.method.toUpperCase(), r.url, !0), p.timeout = r.timeout;
    function h() {
      if (!p)
        return;
      const S = Ft.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), w = {
        data: !f || f === "text" || f === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: S,
        config: e,
        request: p
      };
      na(function(a) {
        i(a), E();
      }, function(a) {
        A(a), E();
      }, w), p = null;
    }
    "onloadend" in p ? p.onloadend = h : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, p.onabort = function() {
      p && (A(new Me("Request aborted", Me.ECONNABORTED, r, p)), p = null);
    }, p.onerror = function() {
      A(new Me("Network Error", Me.ERR_NETWORK, r, p)), p = null;
    }, p.ontimeout = function() {
      let q = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const w = r.transitional || ia;
      r.timeoutErrorMessage && (q = r.timeoutErrorMessage), A(new Me(
        q,
        w.clarifyTimeoutError ? Me.ETIMEDOUT : Me.ECONNABORTED,
        r,
        p
      )), p = null;
    }, n === void 0 && l.setContentType(null), "setRequestHeader" in p && V.forEach(l.toJSON(), function(q, w) {
      p.setRequestHeader(w, q);
    }), V.isUndefined(r.withCredentials) || (p.withCredentials = !!r.withCredentials), f && f !== "json" && (p.responseType = r.responseType), typeof r.onDownloadProgress == "function" && p.addEventListener("progress", HA(r.onDownloadProgress, !0)), typeof r.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", HA(r.onUploadProgress)), (r.cancelToken || r.signal) && (m = (S) => {
      p && (A(!S || S.type ? new rA(null, e, p) : S), p.abort(), p = null);
    }, r.cancelToken && r.cancelToken.subscribe(m), r.signal && (r.signal.aborted ? m() : r.signal.addEventListener("abort", m)));
    const D = Ac(r.url);
    if (D && Xt.protocols.indexOf(D) === -1) {
      A(new Me("Unsupported protocol " + D + ":", Me.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(n || null);
  });
}, hc = (e, t) => {
  let i = new AbortController(), A;
  const r = function(m) {
    if (!A) {
      A = !0, l();
      const E = m instanceof Error ? m : this.reason;
      i.abort(E instanceof Me ? E : new rA(E instanceof Error ? E.message : E));
    }
  };
  let n = t && setTimeout(() => {
    r(new Me(`timeout ${t} of ms exceeded`, Me.ETIMEDOUT));
  }, t);
  const l = () => {
    e && (n && clearTimeout(n), n = null, e.forEach((m) => {
      m && (m.removeEventListener ? m.removeEventListener("abort", r) : m.unsubscribe(r));
    }), e = null);
  };
  e.forEach((m) => m && m.addEventListener && m.addEventListener("abort", r));
  const { signal: f } = i;
  return f.unsubscribe = l, [f, () => {
    n && clearTimeout(n), n = null;
  }];
}, cc = function* (e, t) {
  let i = e.byteLength;
  if (!t || i < t) {
    yield e;
    return;
  }
  let A = 0, r;
  for (; A < i; )
    r = A + t, yield e.slice(A, r), A = r;
}, dc = async function* (e, t, i) {
  for await (const A of e)
    yield* cc(ArrayBuffer.isView(A) ? A : await i(String(A)), t);
}, Yn = (e, t, i, A, r) => {
  const n = dc(e, t, r);
  let l = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(f) {
      const { done: m, value: E } = await n.next();
      if (m) {
        f.close(), A();
        return;
      }
      let p = E.byteLength;
      i && i(l += p), f.enqueue(new Uint8Array(E));
    },
    cancel(f) {
      return A(f), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, Un = (e, t) => {
  const i = e != null;
  return (A) => setTimeout(() => t({
    lengthComputable: i,
    total: e,
    loaded: A
  }));
}, hr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", oa = hr && typeof ReadableStream == "function", Yr = hr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), mc = oa && (() => {
  let e = !1;
  const t = new Request(Xt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), Ln = 64 * 1024, Ur = oa && !!(() => {
  try {
    return V.isReadableStream(new Response("").body);
  } catch {
  }
})(), XA = {
  stream: Ur && ((e) => e.body)
};
hr && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !XA[t] && (XA[t] = V.isFunction(e[t]) ? (i) => i[t]() : (i, A) => {
      throw new Me(`Response type '${t}' is not supported`, Me.ERR_NOT_SUPPORT, A);
    });
  });
})(new Response());
const gc = async (e) => {
  if (e == null)
    return 0;
  if (V.isBlob(e))
    return e.size;
  if (V.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (V.isArrayBufferView(e))
    return e.byteLength;
  if (V.isURLSearchParams(e) && (e = e + ""), V.isString(e))
    return (await Yr(e)).byteLength;
}, pc = async (e, t) => {
  const i = V.toFiniteNumber(e.getContentLength());
  return i ?? gc(t);
}, yc = hr && (async (e) => {
  let {
    url: t,
    method: i,
    data: A,
    signal: r,
    cancelToken: n,
    timeout: l,
    onDownloadProgress: f,
    onUploadProgress: m,
    responseType: E,
    headers: p,
    withCredentials: h = "same-origin",
    fetchOptions: D
  } = aa(e);
  E = E ? (E + "").toLowerCase() : "text";
  let [S, q] = r || n || l ? hc([r, n], l) : [], w, s;
  const a = () => {
    !w && setTimeout(() => {
      S && S.unsubscribe();
    }), w = !0;
  };
  let I;
  try {
    if (m && mc && i !== "get" && i !== "head" && (I = await pc(p, A)) !== 0) {
      let L = new Request(t, {
        method: "POST",
        body: A,
        duplex: "half"
      }), N;
      V.isFormData(A) && (N = L.headers.get("content-type")) && p.setContentType(N), L.body && (A = Yn(L.body, Ln, Un(
        I,
        HA(m)
      ), null, Yr));
    }
    V.isString(h) || (h = h ? "cors" : "omit"), s = new Request(t, {
      ...D,
      signal: S,
      method: i.toUpperCase(),
      headers: p.normalize().toJSON(),
      body: A,
      duplex: "half",
      withCredentials: h
    });
    let g = await fetch(s);
    const B = Ur && (E === "stream" || E === "response");
    if (Ur && (f || B)) {
      const L = {};
      ["status", "statusText", "headers"].forEach((W) => {
        L[W] = g[W];
      });
      const N = V.toFiniteNumber(g.headers.get("content-length"));
      g = new Response(
        Yn(g.body, Ln, f && Un(
          N,
          HA(f, !0)
        ), B && a, Yr),
        L
      );
    }
    E = E || "text";
    let M = await XA[V.findKey(XA, E) || "text"](g, e);
    return !B && a(), q && q(), await new Promise((L, N) => {
      na(L, N, {
        data: M,
        headers: Ft.from(g.headers),
        status: g.status,
        statusText: g.statusText,
        config: e,
        request: s
      });
    });
  } catch (g) {
    throw a(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(
      new Me("Network Error", Me.ERR_NETWORK, e, s),
      {
        cause: g.cause || g
      }
    ) : Me.from(g, g && g.code, e, s);
  }
}), Lr = {
  http: Bh,
  xhr: fc,
  fetch: yc
};
V.forEach(Lr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Pn = (e) => `- ${e}`, wc = (e) => V.isFunction(e) || e === null || e === !1, la = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let i, A;
    const r = {};
    for (let n = 0; n < t; n++) {
      i = e[n];
      let l;
      if (A = i, !wc(i) && (A = Lr[(l = String(i)).toLowerCase()], A === void 0))
        throw new Me(`Unknown adapter '${l}'`);
      if (A)
        break;
      r[l || "#" + n] = A;
    }
    if (!A) {
      const n = Object.entries(r).map(
        ([f, m]) => `adapter ${f} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? n.length > 1 ? `since :
` + n.map(Pn).join(`
`) : " " + Pn(n[0]) : "as no adapter specified";
      throw new Me(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return A;
  },
  adapters: Lr
};
function Sr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new rA(null, e);
}
function Kn(e) {
  return Sr(e), e.headers = Ft.from(e.headers), e.data = Rr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), la.getAdapter(e.adapter || kA.adapter)(e).then(function(A) {
    return Sr(e), A.data = Rr.call(
      e,
      e.transformResponse,
      A
    ), A.headers = Ft.from(A.headers), A;
  }, function(A) {
    return ra(A) || (Sr(e), A && A.response && (A.response.data = Rr.call(
      e,
      e.transformResponse,
      A.response
    ), A.response.headers = Ft.from(A.response.headers))), Promise.reject(A);
  });
}
const ua = "1.7.2", gn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  gn[e] = function(A) {
    return typeof A === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nn = {};
gn.transitional = function(t, i, A) {
  function r(n, l) {
    return "[Axios v" + ua + "] Transitional option '" + n + "'" + l + (A ? ". " + A : "");
  }
  return (n, l, f) => {
    if (t === !1)
      throw new Me(
        r(l, " has been removed" + (i ? " in " + i : "")),
        Me.ERR_DEPRECATED
      );
    return i && !Nn[l] && (Nn[l] = !0, console.warn(
      r(
        l,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), t ? t(n, l, f) : !0;
  };
};
function Cc(e, t, i) {
  if (typeof e != "object")
    throw new Me("options must be an object", Me.ERR_BAD_OPTION_VALUE);
  const A = Object.keys(e);
  let r = A.length;
  for (; r-- > 0; ) {
    const n = A[r], l = t[n];
    if (l) {
      const f = e[n], m = f === void 0 || l(f, n, e);
      if (m !== !0)
        throw new Me("option " + n + " must be " + m, Me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new Me("Unknown option " + n, Me.ERR_BAD_OPTION);
  }
}
const Pr = {
  assertOptions: Cc,
  validators: gn
}, Si = Pr.validators;
class Ki {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Bn(),
      response: new Bn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, i) {
    try {
      return await this._request(t, i);
    } catch (A) {
      if (A instanceof Error) {
        let r;
        Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error();
        const n = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          A.stack ? n && !String(A.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (A.stack += `
` + n) : A.stack = n;
        } catch {
        }
      }
      throw A;
    }
  }
  _request(t, i) {
    typeof t == "string" ? (i = i || {}, i.url = t) : i = t || {}, i = Ni(this.defaults, i);
    const { transitional: A, paramsSerializer: r, headers: n } = i;
    A !== void 0 && Pr.assertOptions(A, {
      silentJSONParsing: Si.transitional(Si.boolean),
      forcedJSONParsing: Si.transitional(Si.boolean),
      clarifyTimeoutError: Si.transitional(Si.boolean)
    }, !1), r != null && (V.isFunction(r) ? i.paramsSerializer = {
      serialize: r
    } : Pr.assertOptions(r, {
      encode: Si.function,
      serialize: Si.function
    }, !0)), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let l = n && V.merge(
      n.common,
      n[i.method]
    );
    n && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (q) => {
        delete n[q];
      }
    ), i.headers = Ft.concat(l, n);
    const f = [];
    let m = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(i) === !1 || (m = m && w.synchronous, f.unshift(w.fulfilled, w.rejected));
    });
    const E = [];
    this.interceptors.response.forEach(function(w) {
      E.push(w.fulfilled, w.rejected);
    });
    let p, h = 0, D;
    if (!m) {
      const q = [Kn.bind(this), void 0];
      for (q.unshift.apply(q, f), q.push.apply(q, E), D = q.length, p = Promise.resolve(i); h < D; )
        p = p.then(q[h++], q[h++]);
      return p;
    }
    D = f.length;
    let S = i;
    for (h = 0; h < D; ) {
      const q = f[h++], w = f[h++];
      try {
        S = q(S);
      } catch (s) {
        w.call(this, s);
        break;
      }
    }
    try {
      p = Kn.call(this, S);
    } catch (q) {
      return Promise.reject(q);
    }
    for (h = 0, D = E.length; h < D; )
      p = p.then(E[h++], E[h++]);
    return p;
  }
  getUri(t) {
    t = Ni(this.defaults, t);
    const i = sa(t.baseURL, t.url);
    return ta(i, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
  Ki.prototype[t] = function(i, A) {
    return this.request(Ni(A || {}, {
      method: t,
      url: i,
      data: (A || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function i(A) {
    return function(n, l, f) {
      return this.request(Ni(f || {}, {
        method: t,
        headers: A ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: l
      }));
    };
  }
  Ki.prototype[t] = i(), Ki.prototype[t + "Form"] = i(!0);
});
class pn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(n) {
      i = n;
    });
    const A = this;
    this.promise.then((r) => {
      if (!A._listeners) return;
      let n = A._listeners.length;
      for (; n-- > 0; )
        A._listeners[n](r);
      A._listeners = null;
    }), this.promise.then = (r) => {
      let n;
      const l = new Promise((f) => {
        A.subscribe(f), n = f;
      }).then(r);
      return l.cancel = function() {
        A.unsubscribe(n);
      }, l;
    }, t(function(n, l, f) {
      A.reason || (A.reason = new rA(n, l, f), i(A.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new pn(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function Ec(e) {
  return function(i) {
    return e.apply(null, i);
  };
}
function Ic(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const Kr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Kr).forEach(([e, t]) => {
  Kr[t] = e;
});
function fa(e) {
  const t = new Ki(e), i = Ns(Ki.prototype.request, t);
  return V.extend(i, Ki.prototype, t, { allOwnKeys: !0 }), V.extend(i, t, null, { allOwnKeys: !0 }), i.create = function(r) {
    return fa(Ni(e, r));
  }, i;
}
const Ze = fa(kA);
Ze.Axios = Ki;
Ze.CanceledError = rA;
Ze.CancelToken = pn;
Ze.isCancel = ra;
Ze.VERSION = ua;
Ze.toFormData = fr;
Ze.AxiosError = Me;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(t) {
  return Promise.all(t);
};
Ze.spread = Ec;
Ze.isAxiosError = Ic;
Ze.mergeConfig = Ni;
Ze.AxiosHeaders = Ft;
Ze.formToJSON = (e) => Aa(V.isHTMLForm(e) ? new FormData(e) : e);
Ze.getAdapter = la.getAdapter;
Ze.HttpStatusCode = Kr;
Ze.default = Ze;
const Rc = ({ urlParams: e, onCallBackData: t }) => {
  const i = new URLSearchParams(e);
  jt(!1), jt(!0);
  const [A, r] = jt(null);
  jt(!1);
  const [n, l] = jt(null), [f, m] = jt(null), [E, p] = jt(0);
  jt("");
  const [h, D] = jt(null), S = pA([]);
  yA(() => {
    Ze.defaults.baseURL = "https://zalo-mini-api.creasia.vn", Ze.defaults.headers.common["Access-Control-Allow-Origin"] = "*", Ze.defaults.headers.common["Content-Type"] = "application/json";
  }, []), yA(() => {
    let I = i.get("accept_token"), g = i.get("giftCode"), B = i.get("campaignId");
    I && (Ze.defaults.headers.common.Authorization = "Bearer " + I, m(B == "" ? null : B - 0), l(g));
  }, []), yA(() => {
    f && (q(f), w(f, i.get("giftCode")));
  }, [f]);
  const q = (I) => {
    let g = i.get("provinceId"), B = i.get("channelId"), M = i.get("giftCode");
    Ze.get("api/miniapp/creadvanced/getluckywheel", {
      params: {
        orderCode: M,
        campaignId: I - 0,
        provinceId: g == "null" ? null : g - 0,
        channelId: B == "null" ? null : B - 0
      }
    }).then(({ data: L }) => {
      const N = JSON.parse((L == null ? void 0 : L.data) ?? "");
      N && JSON.stringify(N) != JSON.stringify(A) && r(N);
    });
  }, w = (I, g) => {
    Ze.get("api/miniapp/creadvanced/getluckywheelnoofwheel", {
      params: {
        orderCode: g,
        campaignId: I
      }
    }).then(({ data: B }) => {
      const M = JSON.parse((B == null ? void 0 : B.data) ?? "");
      if (M) {
        if (M.totalGiftPlan == 0) {
          D("Mã không đúng hoặc đã hết quà!");
          return;
        }
        if (M.noOfWheel == M.noOfWheelUsed) {
          D(
            `Bạn đã hết lượt chơi
Cảm ơn bạn đã tham gia chương trình`
          );
          return;
        }
        p(M.noOfWheel - M.noOfWheelUsed);
      }
    });
  }, s = () => {
    t({
      type: "END",
      data: null,
      message: "Đã kết thúc"
    });
  }, a = async (I) => {
    let g = i.get("provinceId"), B = i.get("channelId");
    return Ze.get("api/miniapp/creadvanced/getwheelspin", {
      params: {
        orderCode: I,
        campaignId: f,
        provinceId: g == "null" ? null : g - 0,
        channelId: B == "null" ? null : B - 0
      }
    }).then(({ data: M, status: L }) => {
      const N = JSON.parse((M == null ? void 0 : M.data) ?? "");
      if (L == 200)
        return S.current.push(N), t({
          type: "RESULT",
          data: N,
          message: "Phần quà"
        }), N;
      t({
        type: "RESULT-NONE",
        data: N,
        message: "Hết quà"
      });
    });
  };
  return /* @__PURE__ */ Ve.jsx(
    "div",
    {
      className: "bg-center bg-cover flex h-screen w-full overflow-x-hidden overflow-y-auto  bg-cbvn2024",
      children: /* @__PURE__ */ Ve.jsx("div", { className: "flex-1", children: /* @__PURE__ */ Ve.jsx(
        jf,
        {
          campaignId: f,
          quantity: E,
          gifts: A,
          goHome: s,
          onGetResult: () => a(n)
        }
      ) })
    }
  );
};
export {
  Rc as CBVNLuckyDraw2024,
  xc as MyButtonComponent
};
//# sourceMappingURL=index.es.js.map
