!function (t, e) {
    function n(t) {
        var e = t.length, n = ce.type(t);
        return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        var e = $e[t] = {};
        return ce.each(t.match(de) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function r(t, n, i, r) {
        if (ce.acceptData(t)) {
            var o, s, a = ce.expando, l = t.nodeType, u = l ? ce.cache : t, c = l ? t[a] : t[a] && a;
            if (c && u[c] && (r || u[c].data) || i !== e || "string" != typeof n)return c || (c = l ? t[a] = ee.pop() || ce.guid++ : a), u[c] || (u[c] = l ? {} : {toJSON: ce.noop}), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), s = u[c], r || (s.data || (s.data = {}), s = s.data), i !== e && (s[ce.camelCase(n)] = i), "string" == typeof n ? (o = s[n], null == o && (o = s[ce.camelCase(n)])) : o = s, o
        }
    }

    function o(t, e, n) {
        if (ce.acceptData(t)) {
            var i, r, o = t.nodeType, s = o ? ce.cache : t, l = o ? t[ce.expando] : ce.expando;
            if (s[l]) {
                if (e && (i = n ? s[l] : s[l].data)) {
                    ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in i ? e = [e] : (e = ce.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;)delete i[e[r]];
                    if (n ? !a(i) : !ce.isEmptyObject(i))return
                }
                (n || (delete s[l].data, a(s[l]))) && (o ? ce.cleanData([t], !0) : ce.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function s(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var r = "data-" + n.replace(Se, "-$1").toLowerCase();
            if (i = t.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ee.test(i) ? ce.parseJSON(i) : i
                } catch (o) {
                }
                ce.data(t, n, i)
            } else i = e
        }
        return i
    }

    function a(t) {
        var e;
        for (e in t)if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e)return!1;
        return!0
    }

    function l() {
        return!0
    }

    function u() {
        return!1
    }

    function c() {
        try {
            return G.activeElement
        } catch (t) {
        }
    }

    function f(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function d(t, e, n) {
        if (ce.isFunction(e))return ce.grep(t, function (t, i) {
            return!!e.call(t, i, t) !== n
        });
        if (e.nodeType)return ce.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (We.test(e))return ce.filter(e, t, n);
            e = ce.filter(e, t)
        }
        return ce.grep(t, function (t) {
            return ce.inArray(t, e) >= 0 !== n
        })
    }

    function p(t) {
        var e = Qe.split("|"), n = t.createDocumentFragment();
        if (n.createElement)for (; e.length;)n.createElement(e.pop());
        return n
    }

    function h(t, e) {
        return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function m(t) {
        return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type, t
    }

    function g(t) {
        var e = on.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)ce._data(n, "globalEval", !e || ce._data(e[i], "globalEval"))
    }

    function y(t, e) {
        if (1 === e.nodeType && ce.hasData(t)) {
            var n, i, r, o = ce._data(t), s = ce._data(e, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)for (i = 0, r = a[n].length; r > i; i++)ce.event.add(e, n, a[n][i])
            }
            s.data && (s.data = ce.extend({}, s.data))
        }
    }

    function b(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                r = ce._data(e);
                for (i in r.events)ce.removeEvent(e, i, r.handle);
                e.removeAttribute(ce.expando)
            }
            "script" === n && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function x(t, n) {
        var i, r, o = 0, s = typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== Y ? t.querySelectorAll(n || "*") : e;
        if (!s)for (s = [], i = t.childNodes || t; null != (r = i[o]); o++)!n || ce.nodeName(r, n) ? s.push(r) : ce.merge(s, x(r, n));
        return n === e || n && ce.nodeName(t, n) ? ce.merge([t], s) : s
    }

    function w(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }

    function C(t, e) {
        if (e in t)return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = $n.length; r--;)if (e = $n[r] + n, e in t)return e;
        return i
    }

    function k(t, e) {
        return t = e || t, "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
    }

    function T(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (o[s] = ce._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (o[s] = ce._data(i, "olddisplay", N(i.nodeName)))) : o[s] || (r = k(i), (n && "none" !== n || !r) && ce._data(i, "olddisplay", r ? n : ce.css(i, "display"))));
        for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function $(t, e, n) {
        var i = yn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function E(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ce.css(t, n + Tn[o], !0, r)), i ? ("content" === n && (s -= ce.css(t, "padding" + Tn[o], !0, r)), "margin" !== n && (s -= ce.css(t, "border" + Tn[o] + "Width", !0, r))) : (s += ce.css(t, "padding" + Tn[o], !0, r), "padding" !== n && (s += ce.css(t, "border" + Tn[o] + "Width", !0, r)));
        return s
    }

    function S(t, e, n) {
        var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = fn(t), s = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = dn(t, e, o), (0 > r || null == r) && (r = t.style[e]), bn.test(r))return r;
            i = s && (ce.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + E(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function N(t) {
        var e = G, n = wn[t];
        return n || (n = j(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = j(t, e), cn.detach()), wn[t] = n), n
    }

    function j(t, e) {
        var n = ce(e.createElement(t)).appendTo(e.body), i = ce.css(n[0], "display");
        return n.remove(), i
    }

    function A(t, e, n, i) {
        var r;
        if (ce.isArray(e))ce.each(e, function (e, r) {
            n || Sn.test(t) ? i(t, r) : A(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        }); else if (n || "object" !== ce.type(e))i(t, e); else for (r in e)A(t + "[" + r + "]", e[r], n, i)
    }

    function D(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(de) || [];
            if (ce.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function L(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, ce.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return"string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }

        var o = {}, s = t === zn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function H(t, n) {
        var i, r, o = ce.ajaxSettings.flatOptions || {};
        for (r in n)n[r] !== e && ((o[r] ? t : i || (i = {}))[r] = n[r]);
        return i && ce.extend(!0, t, i), t
    }

    function q(t, n, i) {
        for (var r, o, s, a, l = t.contents, u = t.dataTypes; "*" === u[0];)u.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (a in l)if (l[a] && l[a].test(o)) {
            u.unshift(a);
            break
        }
        if (u[0]in i)s = u[0]; else {
            for (a in i) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                r || (r = a)
            }
            s = s || r
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : void 0
    }

    function O(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])for (s in t.converters)u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)for (r in u)if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && t["throws"])e = s(e); else try {
                e = s(e)
            } catch (f) {
                return{state: "parsererror", error: s ? f : "No conversion from " + l + " to " + o}
            }
        }
        return{state: "success", data: e}
    }

    function P() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function F() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function M() {
        return setTimeout(function () {
            Zn = e
        }), Zn = ce.now()
    }

    function _(t, e, n) {
        for (var i, r = (oi[e] || []).concat(oi["*"]), o = 0, s = r.length; s > o; o++)if (i = r[o].call(n, e, t))return i
    }

    function B(t, e, n) {
        var i, r, o = 0, s = ri.length, a = ce.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return!1;
            for (var e = Zn || M(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({elem: t, props: ce.extend({}, e), opts: ce.extend(!0, {specialEasing: {}}, n), originalProperties: e, originalOptions: n, startTime: Zn || M(), duration: n.duration, tweens: [], createTween: function (e, n) {
            var i = ce.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
            return u.tweens.push(i), i
        }, stop: function (e) {
            var n = 0, i = e ? u.tweens.length : 0;
            if (r)return this;
            for (r = !0; i > n; n++)u.tweens[n].run(1);
            return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
        }}), c = u.props;
        for (R(c, u.opts.specialEasing); s > o; o++)if (i = ri[o].call(u, t, c, u.opts))return i;
        return ce.map(c, _, u), ce.isFunction(u.opts.start) && u.opts.start.call(t, u), ce.fx.timer(ce.extend(l, {elem: t, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(t, e) {
        var n, i, r, o, s;
        for (n in t)if (i = ce.camelCase(n), r = e[i], o = t[n], ce.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ce.cssHooks[i], s && "expand"in s) {
            o = s.expand(o), delete t[i];
            for (n in o)n in t || (t[n] = o[n], e[n] = r)
        } else e[i] = r
    }

    function W(t, e, n) {
        var i, r, o, s, a, l, u = this, c = {}, f = t.style, d = t.nodeType && k(t), p = ce._data(t, "fxshow");
        n.queue || (a = ce._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, ce.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)if (r = e[i], ei.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show"))continue;
            c[i] = p && p[i] || ce.style(t, i)
        }
        if (!ce.isEmptyObject(c)) {
            p ? "hidden"in p && (d = p.hidden) : p = ce._data(t, "fxshow", {}), o && (p.hidden = !d), d ? ce(t).show() : u.done(function () {
                ce(t).hide()
            }), u.done(function () {
                var e;
                ce._removeData(t, "fxshow");
                for (e in c)ce.style(t, e, c[e])
            });
            for (i in c)s = _(d ? p[i] : 0, i, u), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function I(t, e, n, i, r) {
        return new I.prototype.init(t, e, n, i, r)
    }

    function z(t, e) {
        var n, i = {height: t}, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)n = Tn[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function X(t) {
        return ce.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var Q, U, Y = typeof e, V = t.location, G = t.document, J = G.documentElement, K = t.jQuery, Z = t.$, te = {}, ee = [], ne = "1.10.1", ie = ee.concat, re = ee.push, oe = ee.slice, se = ee.indexOf, ae = te.toString, le = te.hasOwnProperty, ue = ne.trim, ce = function (t, e) {
        return new ce.fn.init(t, e, U)
    }, fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, de = /\S+/g, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ge = /^[\],:{}\s]*$/, ve = /(?:^|:|,)(?:\s*\[)+/g, ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xe = /^-ms-/, we = /-([\da-z])/gi, Ce = function (t, e) {
        return e.toUpperCase()
    }, ke = function (t) {
        (G.addEventListener || "load" === t.type || "complete" === G.readyState) && (Te(), ce.ready())
    }, Te = function () {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", ke, !1), t.removeEventListener("load", ke, !1)) : (G.detachEvent("onreadystatechange", ke), t.detachEvent("onload", ke))
    };
    ce.fn = ce.prototype = {jquery: ne, constructor: ce, init: function (t, n, i) {
        var r, o;
        if (!t)return this;
        if ("string" == typeof t) {
            if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : he.exec(t), !r || !r[1] && n)return!n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
            if (r[1]) {
                if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), me.test(r[1]) && ce.isPlainObject(n))for (r in n)ce.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                return this
            }
            if (o = G.getElementById(r[2]), o && o.parentNode) {
                if (o.id !== r[2])return i.find(t);
                this.length = 1, this[0] = o
            }
            return this.context = G, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
    }, selector: "", length: 0, toArray: function () {
        return oe.call(this)
    }, get: function (t) {
        return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
    }, pushStack: function (t) {
        var e = ce.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
    }, each: function (t, e) {
        return ce.each(this, t, e)
    }, ready: function (t) {
        return ce.ready.promise().done(t), this
    }, slice: function () {
        return this.pushStack(oe.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (t) {
        var e = this.length, n = +t + (0 > t ? e : 0);
        return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
    }, map: function (t) {
        return this.pushStack(ce.map(this, function (e, n) {
            return t.call(e, n, e)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: re, sort: [].sort, splice: [].splice}, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function () {
        var t, n, i, r, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ce.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)if (null != (o = arguments[l]))for (r in o)t = a[r], i = o[r], a !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, s = t && ce.isArray(t) ? t : []) : s = t && ce.isPlainObject(t) ? t : {}, a[r] = ce.extend(c, s, i)) : i !== e && (a[r] = i));
        return a
    }, ce.extend({expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
        return t.$ === ce && (t.$ = Z), e && t.jQuery === ce && (t.jQuery = K), ce
    }, isReady: !1, readyWait: 1, holdReady: function (t) {
        t ? ce.readyWait++ : ce.ready(!0)
    }, ready: function (t) {
        if (t === !0 ? !--ce.readyWait : !ce.isReady) {
            if (!G.body)return setTimeout(ce.ready);
            ce.isReady = !0, t !== !0 && --ce.readyWait > 0 || (Q.resolveWith(G, [ce]), ce.fn.trigger && ce(G).trigger("ready").off("ready"))
        }
    }, isFunction: function (t) {
        return"function" === ce.type(t)
    }, isArray: Array.isArray || function (t) {
        return"array" === ce.type(t)
    }, isWindow: function (t) {
        return null != t && t == t.window
    }, isNumeric: function (t) {
        return!isNaN(parseFloat(t)) && isFinite(t)
    }, type: function (t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
    }, isPlainObject: function (t) {
        var n;
        if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t))return!1;
        try {
            if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf"))return!1
        } catch (i) {
            return!1
        }
        if (ce.support.ownLast)for (n in t)return le.call(t, n);
        for (n in t);
        return n === e || le.call(t, n)
    }, isEmptyObject: function (t) {
        var e;
        for (e in t)return!1;
        return!0
    }, error: function (t) {
        throw new Error(t)
    }, parseHTML: function (t, e, n) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || G;
        var i = me.exec(t), r = !n && [];
        return i ? [e.createElement(i[1])] : (i = ce.buildFragment([t], e, r), r && ce(r).remove(), ce.merge([], i.childNodes))
    }, parseJSON: function (e) {
        return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ce.trim(e), e && ge.test(e.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? new Function("return " + e)() : (ce.error("Invalid JSON: " + e), void 0)
    }, parseXML: function (n) {
        var i, r;
        if (!n || "string" != typeof n)return null;
        try {
            t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
        } catch (o) {
            i = e
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
    }, noop: function () {
    }, globalEval: function (e) {
        e && ce.trim(e) && (t.execScript || function (e) {
            t.eval.call(t, e)
        })(e)
    }, camelCase: function (t) {
        return t.replace(xe, "ms-").replace(we, Ce)
    }, nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }, each: function (t, e, i) {
        var r, o = 0, s = t.length, a = n(t);
        if (i) {
            if (a)for (; s > o && (r = e.apply(t[o], i), r !== !1); o++); else for (o in t)if (r = e.apply(t[o], i), r === !1)break
        } else if (a)for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++); else for (o in t)if (r = e.call(t[o], o, t[o]), r === !1)break;
        return t
    }, trim: ue && !ue.call("﻿ ") ? function (t) {
        return null == t ? "" : ue.call(t)
    } : function (t) {
        return null == t ? "" : (t + "").replace(pe, "")
    }, makeArray: function (t, e) {
        var i = e || [];
        return null != t && (n(Object(t)) ? ce.merge(i, "string" == typeof t ? [t] : t) : re.call(i, t)), i
    }, inArray: function (t, e, n) {
        var i;
        if (e) {
            if (se)return se.call(e, t, n);
            for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
        }
        return-1
    }, merge: function (t, n) {
        var i = n.length, r = t.length, o = 0;
        if ("number" == typeof i)for (; i > o; o++)t[r++] = n[o]; else for (; n[o] !== e;)t[r++] = n[o++];
        return t.length = r, t
    }, grep: function (t, e, n) {
        var i, r = [], o = 0, s = t.length;
        for (n = !!n; s > o; o++)i = !!e(t[o], o), n !== i && r.push(t[o]);
        return r
    }, map: function (t, e, i) {
        var r, o = 0, s = t.length, a = n(t), l = [];
        if (a)for (; s > o; o++)r = e(t[o], o, i), null != r && (l[l.length] = r); else for (o in t)r = e(t[o], o, i), null != r && (l[l.length] = r);
        return ie.apply([], l)
    }, guid: 1, proxy: function (t, n) {
        var i, r, o;
        return"string" == typeof n && (o = t[n], n = t, t = o), ce.isFunction(t) ? (i = oe.call(arguments, 2), r = function () {
            return t.apply(n || this, i.concat(oe.call(arguments)))
        }, r.guid = t.guid = t.guid || ce.guid++, r) : e
    }, access: function (t, n, i, r, o, s, a) {
        var l = 0, u = t.length, c = null == i;
        if ("object" === ce.type(i)) {
            o = !0;
            for (l in i)ce.access(t, n, l, i[l], !0, s, a)
        } else if (r !== e && (o = !0, ce.isFunction(r) || (a = !0), c && (a ? (n.call(t, r), n = null) : (c = n, n = function (t, e, n) {
            return c.call(ce(t), n)
        })), n))for (; u > l; l++)n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
        return o ? t : c ? n.call(t) : u ? n(t[0], i) : s
    }, now: function () {
        return(new Date).getTime()
    }, swap: function (t, e, n, i) {
        var r, o, s = {};
        for (o in e)s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)t.style[o] = s[o];
        return r
    }}), ce.ready.promise = function (e) {
        if (!Q)if (Q = ce.Deferred(), "complete" === G.readyState)setTimeout(ce.ready); else if (G.addEventListener)G.addEventListener("DOMContentLoaded", ke, !1), t.addEventListener("load", ke, !1); else {
            G.attachEvent("onreadystatechange", ke), t.attachEvent("onload", ke);
            var n = !1;
            try {
                n = null == t.frameElement && G.documentElement
            } catch (i) {
            }
            n && n.doScroll && function r() {
                if (!ce.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    Te(), ce.ready()
                }
            }()
        }
        return Q.promise(e)
    }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    }), U = ce(G), function (t, e) {
        function n(t, e, n, i) {
            var r, o, s, a, l, u, c, f, d, p;
            if ((e ? e.ownerDocument || e : z) !== P && O(e), e = e || P, n = n || [], !t || "string" != typeof t)return n;
            if (1 !== (a = e.nodeType) && 9 !== a)return[];
            if (M && !i) {
                if (r = ke.exec(t))if (s = r[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(s), !o || !o.parentNode)return n;
                        if (o.id === s)return n.push(o), n
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && W(e, o) && o.id === s)return n.push(o), n
                } else {
                    if (r[2])return re.apply(n, e.getElementsByTagName(t)), n;
                    if ((s = r[3]) && S.getElementsByClassName && e.getElementsByClassName)return re.apply(n, e.getElementsByClassName(s)), n
                }
                if (S.qsa && (!_ || !_.test(t))) {
                    if (f = c = I, d = e, p = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = m(t), (c = e.getAttribute("id")) ? f = c.replace(Ee, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;)u[l] = f + g(u[l]);
                        d = ve.test(t) && e.parentNode || e, p = u.join(",")
                    }
                    if (p)try {
                        return re.apply(n, d.querySelectorAll(p)), n
                    } catch (h) {
                    } finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(he, "$1"), e, n, i)
        }

        function i(t) {
            return Ce.test(t + "")
        }

        function r() {
            function t(n, i) {
                return e.push(n += " ") > j.cacheLength && delete t[e.shift()], t[n] = i
            }

            var e = [];
            return t
        }

        function o(t) {
            return t[I] = !0, t
        }

        function s(t) {
            var e = P.createElement("div");
            try {
                return!!t(e)
            } catch (n) {
                return!1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function a(t, e, n) {
            t = t.split("|");
            for (var i, r = t.length, o = n ? null : e; r--;)(i = j.attrHandle[t[r]]) && i !== e || (j.attrHandle[t[r]] = o)
        }

        function l(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : t[e] === !0 ? e.toLowerCase() : null
        }

        function u(t, e) {
            return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }

        function c(t) {
            return"input" === t.nodeName.toLowerCase() ? t.defaultValue : void 0
        }

        function f(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Z) - (~t.sourceIndex || Z);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === e)return-1;
            return t ? 1 : -1
        }

        function d(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return"input" === n && e.type === t
            }
        }

        function p(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return("input" === n || "button" === n) && e.type === t
            }
        }

        function h(t) {
            return o(function (e) {
                return e = +e, o(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function m(t, e) {
            var i, r, o, s, a, l, u, c = Y[t + " "];
            if (c)return e ? 0 : c.slice(0);
            for (a = t, l = [], u = j.preFilter; a;) {
                (!i || (r = me.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ge.exec(a)) && (i = r.shift(), o.push({value: i, type: r[0].replace(he, " ")}), a = a.slice(i.length));
                for (s in j.filter)!(r = we[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({value: i, type: s, matches: r}), a = a.slice(i.length));
                if (!i)break
            }
            return e ? a.length : a ? n.error(t) : Y(t, l).slice(0)
        }

        function g(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
            return i
        }

        function v(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = Q++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)if (1 === e.nodeType || r)return t(e, n, o)
            } : function (e, n, s) {
                var a, l, u, c = X + " " + o;
                if (s) {
                    for (; e = e[i];)if ((1 === e.nodeType || r) && t(e, n, s))return!0
                } else for (; e = e[i];)if (1 === e.nodeType || r)if (u = e[I] || (e[I] = {}), (l = u[i]) && l[0] === c) {
                    if ((a = l[1]) === !0 || a === N)return a === !0
                } else if (l = u[i] = [c], l[1] = t(e, n, s) || N, l[1] === !0)return!0
            }
        }

        function y(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)if (!t[r](e, n, i))return!1;
                return!0
            } : t[0]
        }

        function b(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }

        function x(t, e, n, i, r, s) {
            return i && !i[I] && (i = x(i)), r && !r[I] && (r = x(r, s)), o(function (o, s, a, l) {
                var u, c, f, d = [], p = [], h = s.length, m = o || k(e || "*", a.nodeType ? [a] : a, []), g = !t || !o && e ? m : b(m, d, t, a, l), v = n ? r || (o ? t : h || i) ? [] : s : g;
                if (n && n(g, v, a, l), i)for (u = b(v, p), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[p[c]] = !(g[p[c]] = f));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(g[c] = f);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (u = r ? se.call(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f))
                    }
                } else v = b(v === s ? v.splice(h, v.length) : v), r ? r(null, s, v, l) : re.apply(s, v)
            })
        }

        function w(t) {
            for (var e, n, i, r = t.length, o = j.relative[t[0].type], s = o || j.relative[" "], a = o ? 1 : 0, l = v(function (t) {
                return t === e
            }, s, !0), u = v(function (t) {
                return se.call(e, t) > -1
            }, s, !0), c = [function (t, n, i) {
                return!o && (i || n !== H) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
            }]; r > a; a++)if (n = j.relative[t[a].type])c = [v(y(c), n)]; else {
                if (n = j.filter[t[a].type].apply(null, t[a].matches), n[I]) {
                    for (i = ++a; r > i && !j.relative[t[i].type]; i++);
                    return x(a > 1 && y(c), a > 1 && g(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(he, "$1"), n, i > a && w(t.slice(a, i)), r > i && w(t = t.slice(i)), r > i && g(t))
                }
                c.push(n)
            }
            return y(c)
        }

        function C(t, e) {
            var i = 0, r = e.length > 0, s = t.length > 0, a = function (o, a, l, u, c) {
                var f, d, p, h = [], m = 0, g = "0", v = o && [], y = null != c, x = H, w = o || s && j.find.TAG("*", c && a.parentNode || a), C = X += null == x ? 1 : Math.random() || .1;
                for (y && (H = a !== P && a, N = i); null != (f = w[g]); g++) {
                    if (s && f) {
                        for (d = 0; p = t[d++];)if (p(f, a, l)) {
                            u.push(f);
                            break
                        }
                        y && (X = C, N = ++i)
                    }
                    r && ((f = !p && f) && m--, o && v.push(f))
                }
                if (m += g, r && g !== m) {
                    for (d = 0; p = e[d++];)p(v, h, a, l);
                    if (o) {
                        if (m > 0)for (; g--;)v[g] || h[g] || (h[g] = ne.call(u));
                        h = b(h)
                    }
                    re.apply(u, h), y && !o && h.length > 0 && m + e.length > 1 && n.uniqueSort(u)
                }
                return y && (X = C, H = x), v
            };
            return r ? o(a) : a
        }

        function k(t, e, i) {
            for (var r = 0, o = e.length; o > r; r++)n(t, e[r], i);
            return i
        }

        function T(t, e, n, i) {
            var r, o, s, a, l, u = m(t);
            if (!i && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && S.getById && 9 === e.nodeType && M && j.relative[o[1].type]) {
                    if (e = (j.find.ID(s.matches[0].replace(Se, Ne), e) || [])[0], !e)return n;
                    t = t.slice(o.shift().value.length)
                }
                for (r = we.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !j.relative[a = s.type]);)if ((l = j.find[a]) && (i = l(s.matches[0].replace(Se, Ne), ve.test(o[0].type) && e.parentNode || e))) {
                    if (o.splice(r, 1), t = i.length && g(o), !t)return re.apply(n, i), n;
                    break
                }
            }
            return L(t, u)(i, e, !M, n, ve.test(t)), n
        }

        function $() {
        }

        var E, S, N, j, A, D, L, H, q, O, P, F, M, _, B, R, W, I = "sizzle" + -new Date, z = t.document, X = 0, Q = 0, U = r(), Y = r(), V = r(), G = !1, J = function () {
            return 0
        }, K = typeof e, Z = 1 << 31, te = {}.hasOwnProperty, ee = [], ne = ee.pop, ie = ee.push, re = ee.push, oe = ee.slice, se = ee.indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (this[e] === t)return e;
            return-1
        }, ae = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", le = "[\\x20\\t\\r\\n\\f]", ue = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fe = ue.replace("w", "w#"), de = "\\[" + le + "*(" + ue + ")" + le + "*(?:([*^$|!~]?=)" + le + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fe + ")|)|)" + le + "*\\]", pe = ":(" + ue + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + de.replace(3, 8) + ")*)|.*)\\)|)", he = new RegExp("^" + le + "+|((?:^|[^\\\\])(?:\\\\.)*)" + le + "+$", "g"), me = new RegExp("^" + le + "*," + le + "*"), ge = new RegExp("^" + le + "*([>+~]|" + le + ")" + le + "*"), ve = new RegExp(le + "*[+~]"), ye = new RegExp("=" + le + "*([^\\]'\"]*)" + le + "*\\]", "g"), be = new RegExp(pe), xe = new RegExp("^" + fe + "$"), we = {ID: new RegExp("^#(" + ue + ")"), CLASS: new RegExp("^\\.(" + ue + ")"), TAG: new RegExp("^(" + ue.replace("w", "w*") + ")"), ATTR: new RegExp("^" + de), PSEUDO: new RegExp("^" + pe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + le + "*(even|odd|(([+-]|)(\\d*)n|)" + le + "*(?:([+-]|)" + le + "*(\\d+)|))" + le + "*\\)|)", "i"), bool: new RegExp("^(?:" + ae + ")$", "i"), needsContext: new RegExp("^" + le + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + le + "*((?:-\\d)?\\d*)" + le + "*\\)|)(?=[^-]|$)", "i")}, Ce = /^[^{]+\{\s*\[native \w/, ke = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Te = /^(?:input|select|textarea|button)$/i, $e = /^h\d$/i, Ee = /'|\\/g, Se = new RegExp("\\\\([\\da-f]{1,6}" + le + "?|(" + le + ")|.)", "ig"), Ne = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        };
        try {
            re.apply(ee = oe.call(z.childNodes), z.childNodes), ee[z.childNodes.length].nodeType
        } catch (je) {
            re = {apply: ee.length ? function (t, e) {
                ie.apply(t, oe.call(e))
            } : function (t, e) {
                for (var n = t.length, i = 0; t[n++] = e[i++];);
                t.length = n - 1
            }}
        }
        D = n.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, S = n.support = {}, O = n.setDocument = function (t) {
            var e = t ? t.ownerDocument || t : z, n = e.parentWindow;
            return e !== P && 9 === e.nodeType && e.documentElement ? (P = e, F = e.documentElement, M = !D(e), n && n.frameElement && n.attachEvent("onbeforeunload", function () {
                O()
            }), S.attributes = s(function (t) {
                return t.innerHTML = "<a href='#'></a>", a("type|href|height|width", u, "#" === t.firstChild.getAttribute("href")), a(ae, l, null == t.getAttribute("disabled")), t.className = "i", !t.getAttribute("className")
            }), S.input = s(function (t) {
                return t.innerHTML = "<input>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }), a("value", c, S.attributes && S.input), S.getElementsByTagName = s(function (t) {
                return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
            }), S.getElementsByClassName = s(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), S.getById = s(function (t) {
                return F.appendChild(t).id = I, !e.getElementsByName || !e.getElementsByName(I).length
            }), S.getById ? (j.find.ID = function (t, e) {
                if (typeof e.getElementById !== K && M) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, j.filter.ID = function (t) {
                var e = t.replace(Se, Ne);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete j.find.ID, j.filter.ID = function (t) {
                var e = t.replace(Se, Ne);
                return function (t) {
                    var n = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), j.find.TAG = S.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== K ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, j.find.CLASS = S.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== K && M ? e.getElementsByClassName(t) : void 0
            }, B = [], _ = [], (S.qsa = i(e.querySelectorAll)) && (s(function (t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || _.push("\\[" + le + "*(?:value|" + ae + ")"), t.querySelectorAll(":checked").length || _.push(":checked")
            }), s(function (t) {
                var n = e.createElement("input");
                n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && _.push("[*^$]=" + le + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), _.push(",.*:")
            })), (S.matchesSelector = i(R = F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && s(function (t) {
                S.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), B.push("!=", pe)
            }), _ = _.length && new RegExp(_.join("|")), B = B.length && new RegExp(B.join("|")), W = i(F.contains) || F.compareDocumentPosition ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return!0;
                return!1
            }, S.sortDetached = s(function (t) {
                return 1 & t.compareDocumentPosition(e.createElement("div"))
            }), J = F.compareDocumentPosition ? function (t, n) {
                if (t === n)return G = !0, 0;
                var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
                return i ? 1 & i || !S.sortDetached && n.compareDocumentPosition(t) === i ? t === e || W(z, t) ? -1 : n === e || W(z, n) ? 1 : q ? se.call(q, t) - se.call(q, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
            } : function (t, n) {
                var i, r = 0, o = t.parentNode, s = n.parentNode, a = [t], l = [n];
                if (t === n)return G = !0, 0;
                if (!o || !s)return t === e ? -1 : n === e ? 1 : o ? -1 : s ? 1 : q ? se.call(q, t) - se.call(q, n) : 0;
                if (o === s)return f(t, n);
                for (i = t; i = i.parentNode;)a.unshift(i);
                for (i = n; i = i.parentNode;)l.unshift(i);
                for (; a[r] === l[r];)r++;
                return r ? f(a[r], l[r]) : a[r] === z ? -1 : l[r] === z ? 1 : 0
            }, e) : P
        }, n.matches = function (t, e) {
            return n(t, null, null, e)
        }, n.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== P && O(t), e = e.replace(ye, "='$1']"), !(!S.matchesSelector || !M || B && B.test(e) || _ && _.test(e)))try {
                var i = R.call(t, e);
                if (i || S.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
            } catch (r) {
            }
            return n(e, P, null, [t]).length > 0
        }, n.contains = function (t, e) {
            return(t.ownerDocument || t) !== P && O(t), W(t, e)
        }, n.attr = function (t, n) {
            (t.ownerDocument || t) !== P && O(t);
            var i = j.attrHandle[n.toLowerCase()], r = i && te.call(j.attrHandle, n.toLowerCase()) ? i(t, n, !M) : e;
            return r === e ? S.attributes || !M ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r
        }, n.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, n.uniqueSort = function (t) {
            var e, n = [], i = 0, r = 0;
            if (G = !S.detectDuplicates, q = !S.sortStable && t.slice(0), t.sort(J), G) {
                for (; e = t[r++];)e === t[r] && (i = n.push(r));
                for (; i--;)t.splice(n[i], 1)
            }
            return t
        }, A = n.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)n += A(t)
                } else if (3 === r || 4 === r)return t.nodeValue
            } else for (; e = t[i]; i++)n += A(e);
            return n
        }, j = n.selectors = {cacheLength: 50, createPseudo: o, match: we, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (t) {
            return t[1] = t[1].replace(Se, Ne), t[3] = (t[4] || t[5] || "").replace(Se, Ne), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
        }, CHILD: function (t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
        }, PSEUDO: function (t) {
            var n, i = !t[5] && t[2];
            return we.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && be.test(i) && (n = m(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
        }}, filter: {TAG: function (t) {
            var e = t.replace(Se, Ne).toLowerCase();
            return"*" === t ? function () {
                return!0
            } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
            }
        }, CLASS: function (t) {
            var e = U[t + " "];
            return e || (e = new RegExp("(^|" + le + ")" + t + "(" + le + "|$)")) && U(t, function (t) {
                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
            })
        }, ATTR: function (t, e, i) {
            return function (r) {
                var o = n.attr(r, t);
                return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
            }
        }, CHILD: function (t, e, n, i, r) {
            var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
            return 1 === i && 0 === r ? function (t) {
                return!!t.parentNode
            } : function (e, n, l) {
                var u, c, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                if (g) {
                    if (o) {
                        for (; m;) {
                            for (f = e; f = f[m];)if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return!1;
                            h = m = "only" === t && !h && "nextSibling"
                        }
                        return!0
                    }
                    if (h = [s ? g.firstChild : g.lastChild], s && y) {
                        for (c = g[I] || (g[I] = {}), u = c[t] || [], p = u[0] === X && u[1], d = u[0] === X && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)if (1 === f.nodeType && ++d && f === e) {
                            c[t] = [X, p, d];
                            break
                        }
                    } else if (y && (u = (e[I] || (e[I] = {}))[t]) && u[0] === X)d = u[1]; else for (; (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[I] || (f[I] = {}))[t] = [X, d]), f !== e)););
                    return d -= r, d === i || 0 === d % i && d / i >= 0
                }
            }
        }, PSEUDO: function (t, e) {
            var i, r = j.pseudos[t] || j.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
            return r[I] ? r(e) : r.length > 1 ? (i = [t, t, "", e], j.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function (t, n) {
                for (var i, o = r(t, e), s = o.length; s--;)i = se.call(t, o[s]), t[i] = !(n[i] = o[s])
            }) : function (t) {
                return r(t, 0, i)
            }) : r
        }}, pseudos: {not: o(function (t) {
            var e = [], n = [], i = L(t.replace(he, "$1"));
            return i[I] ? o(function (t, e, n, r) {
                for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
            }) : function (t, r, o) {
                return e[0] = t, i(e, null, o, n), !n.pop()
            }
        }), has: o(function (t) {
            return function (e) {
                return n(t, e).length > 0
            }
        }), contains: o(function (t) {
            return function (e) {
                return(e.textContent || e.innerText || A(e)).indexOf(t) > -1
            }
        }), lang: o(function (t) {
            return xe.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Se, Ne).toLowerCase(), function (e) {
                var n;
                do if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                return!1
            }
        }), target: function (e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id
        }, root: function (t) {
            return t === F
        }, focus: function (t) {
            return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
        }, enabled: function (t) {
            return t.disabled === !1
        }, disabled: function (t) {
            return t.disabled === !0
        }, checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return"input" === e && !!t.checked || "option" === e && !!t.selected
        }, selected: function (t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
        }, empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)return!1;
            return!0
        }, parent: function (t) {
            return!j.pseudos.empty(t)
        }, header: function (t) {
            return $e.test(t.nodeName)
        }, input: function (t) {
            return Te.test(t.nodeName)
        }, button: function (t) {
            var e = t.nodeName.toLowerCase();
            return"input" === e && "button" === t.type || "button" === e
        }, text: function (t) {
            var e;
            return"input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
        }, first: h(function () {
            return[0]
        }), last: h(function (t, e) {
            return[e - 1]
        }), eq: h(function (t, e, n) {
            return[0 > n ? n + e : n]
        }), even: h(function (t, e) {
            for (var n = 0; e > n; n += 2)t.push(n);
            return t
        }), odd: h(function (t, e) {
            for (var n = 1; e > n; n += 2)t.push(n);
            return t
        }), lt: h(function (t, e, n) {
            for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
            return t
        }), gt: h(function (t, e, n) {
            for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
            return t
        })}};
        for (E in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})j.pseudos[E] = d(E);
        for (E in{submit: !0, reset: !0})j.pseudos[E] = p(E);
        L = n.compile = function (t, e) {
            var n, i = [], r = [], o = V[t + " "];
            if (!o) {
                for (e || (e = m(t)), n = e.length; n--;)o = w(e[n]), o[I] ? i.push(o) : r.push(o);
                o = V(t, C(r, i))
            }
            return o
        }, j.pseudos.nth = j.pseudos.eq, $.prototype = j.filters = j.pseudos, j.setFilters = new $, S.sortStable = I.split("").sort(J).join("") === I, O(), [0, 0].sort(J), S.detectDuplicates = G, ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
    }(t);
    var $e = {};
    ce.Callbacks = function (t) {
        t = "string" == typeof t ? $e[t] || i(t) : ce.extend({}, t);
        var n, r, o, s, a, l, u = [], c = !t.once && [], f = function (e) {
            for (r = t.memory && e, o = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, u && (c ? c.length && f(c.shift()) : r ? u = [] : d.disable())
        }, d = {add: function () {
            if (u) {
                var e = u.length;
                !function i(e) {
                    ce.each(e, function (e, n) {
                        var r = ce.type(n);
                        "function" === r ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                    })
                }(arguments), n ? s = u.length : r && (l = e, f(r))
            }
            return this
        }, remove: function () {
            return u && ce.each(arguments, function (t, e) {
                for (var i; (i = ce.inArray(e, u, i)) > -1;)u.splice(i, 1), n && (s >= i && s--, a >= i && a--)
            }), this
        }, has: function (t) {
            return t ? ce.inArray(t, u) > -1 : !(!u || !u.length)
        }, empty: function () {
            return u = [], s = 0, this
        }, disable: function () {
            return u = c = r = e, this
        }, disabled: function () {
            return!u
        }, lock: function () {
            return c = e, r || d.disable(), this
        }, locked: function () {
            return!c
        }, fireWith: function (t, e) {
            return e = e || [], e = [t, e.slice ? e.slice() : e], !u || o && !c || (n ? c.push(e) : f(e)), this
        }, fire: function () {
            return d.fireWith(this, arguments), this
        }, fired: function () {
            return!!o
        }};
        return d
    }, ce.extend({Deferred: function (t) {
        var e = [
            ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ce.Callbacks("memory")]
        ], n = "pending", i = {state: function () {
            return n
        }, always: function () {
            return r.done(arguments).fail(arguments), this
        }, then: function () {
            var t = arguments;
            return ce.Deferred(function (n) {
                ce.each(e, function (e, o) {
                    var s = o[0], a = ce.isFunction(t[e]) && t[e];
                    r[o[1]](function () {
                        var t = a && a.apply(this, arguments);
                        t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                    })
                }), t = null
            }).promise()
        }, promise: function (t) {
            return null != t ? ce.extend(t, i) : i
        }}, r = {};
        return i.pipe = i.then, ce.each(e, function (t, o) {
            var s = o[2], a = o[3];
            i[o[1]] = s.add, a && s.add(function () {
                n = a
            }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                return r[o[0] + "With"](this === r ? i : this, arguments), this
            }, r[o[0] + "With"] = s.fireWith
        }), i.promise(r), t && t.call(r, r), r
    }, when: function (t) {
        var e, n, i, r = 0, o = oe.call(arguments), s = o.length, a = 1 !== s || t && ce.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ce.Deferred(), u = function (t, n, i) {
            return function (r) {
                n[t] = this, i[t] = arguments.length > 1 ? oe.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
            }
        };
        if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)o[r] && ce.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
        return a || l.resolveWith(i, o), l.promise()
    }}), ce.support = function (e) {
        var n, i, r, o, s, a, l, u, c, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], i = f.getElementsByTagName("a")[0], !i || !i.style || !n.length)return e;
        o = G.createElement("select"), a = o.appendChild(G.createElement("option")), r = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== f.className, e.leadingWhitespace = 3 === f.firstChild.nodeType, e.tbody = !f.getElementsByTagName("tbody").length, e.htmlSerialize = !!f.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!r.value, e.optSelected = a.selected, e.enctype = !!G.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete f.test
        } catch (d) {
            e.deleteExpando = !1
        }
        r = G.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(r), e.appendChecked = r.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            e.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in{submit: !0, change: !0, focusin: !0})f.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || f.attributes[l].expando === !1;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in ce(e))break;
        return e.ownLast = "0" !== c, ce(function () {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = G.getElementsByTagName("body")[0];
            s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = f.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(s, null != s.style.zoom ? {zoom: 1} : {}, function () {
                e.boxSizing = 4 === f.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(f, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(f, null) || {width: "4px"}).width, i = f.appendChild(G.createElement("div")), i.style.cssText = f.style.cssText = o, i.style.marginRight = i.style.width = "0", f.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== f.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = f = r = i = null)
        }), n = o = s = a = i = r = null, e
    }({});
    var Ee = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Se = /([A-Z])/g;
    ce.extend({cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (t) {
        return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando], !!t && !a(t)
    }, data: function (t, e, n) {
        return r(t, e, n)
    }, removeData: function (t, e) {
        return o(t, e)
    }, _data: function (t, e, n) {
        return r(t, e, n, !0)
    }, _removeData: function (t, e) {
        return o(t, e, !0)
    }, acceptData: function (t) {
        if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)return!1;
        var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
        return!e || e !== !0 && t.getAttribute("classid") === e
    }}), ce.fn.extend({data: function (t, n) {
        var i, r, o = null, a = 0, l = this[0];
        if (t === e) {
            if (this.length && (o = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                for (i = l.attributes; a < i.length; a++)r = i[a].name, 0 === r.indexOf("data-") && (r = ce.camelCase(r.slice(5)), s(l, r, o[r]));
                ce._data(l, "parsedAttrs", !0)
            }
            return o
        }
        return"object" == typeof t ? this.each(function () {
            ce.data(this, t)
        }) : arguments.length > 1 ? this.each(function () {
            ce.data(this, t, n)
        }) : l ? s(l, t, ce.data(l, t)) : null
    }, removeData: function (t) {
        return this.each(function () {
            ce.removeData(this, t)
        })
    }}), ce.extend({queue: function (t, e, n) {
        var i;
        return t ? (e = (e || "fx") + "queue", i = ce._data(t, e), n && (!i || ce.isArray(n) ? i = ce._data(t, e, ce.makeArray(n)) : i.push(n)), i || []) : void 0
    }, dequeue: function (t, e) {
        e = e || "fx";
        var n = ce.queue(t, e), i = n.length, r = n.shift(), o = ce._queueHooks(t, e), s = function () {
            ce.dequeue(t, e)
        };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
    }, _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return ce._data(t, n) || ce._data(t, n, {empty: ce.Callbacks("once memory").add(function () {
            ce._removeData(t, e + "queue"), ce._removeData(t, n)
        })})
    }}), ce.fn.extend({queue: function (t, n) {
        var i = 2;
        return"string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ce.queue(this[0], t) : n === e ? this : this.each(function () {
            var e = ce.queue(this, t, n);
            ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
        })
    }, dequeue: function (t) {
        return this.each(function () {
            ce.dequeue(this, t)
        })
    }, delay: function (t, e) {
        return t = ce.fx ? ce.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, clearQueue: function (t) {
        return this.queue(t || "fx", [])
    }, promise: function (t, n) {
        var i, r = 1, o = ce.Deferred(), s = this, a = this.length, l = function () {
            --r || o.resolveWith(s, [s])
        };
        for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;)i = ce._data(s[a], t + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
        return l(), o.promise(n)
    }});
    var Ne, je, Ae = /[\t\r\n\f]/g, De = /\r/g, Le = /^(?:input|select|textarea|button|object)$/i, He = /^(?:a|area)$/i, qe = /^(?:checked|selected)$/i, Oe = ce.support.getSetAttribute, Pe = ce.support.input;
    ce.fn.extend({attr: function (t, e) {
        return ce.access(this, ce.attr, t, e, arguments.length > 1)
    }, removeAttr: function (t) {
        return this.each(function () {
            ce.removeAttr(this, t)
        })
    }, prop: function (t, e) {
        return ce.access(this, ce.prop, t, e, arguments.length > 1)
    }, removeProp: function (t) {
        return t = ce.propFix[t] || t, this.each(function () {
            try {
                this[t] = e, delete this[t]
            } catch (n) {
            }
        })
    }, addClass: function (t) {
        var e, n, i, r, o, s = 0, a = this.length, l = "string" == typeof t && t;
        if (ce.isFunction(t))return this.each(function (e) {
            ce(this).addClass(t.call(this, e, this.className))
        });
        if (l)for (e = (t || "").match(de) || []; a > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
            for (o = 0; r = e[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            n.className = ce.trim(i)
        }
        return this
    }, removeClass: function (t) {
        var e, n, i, r, o, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
        if (ce.isFunction(t))return this.each(function (e) {
            ce(this).removeClass(t.call(this, e, this.className))
        });
        if (l)for (e = (t || "").match(de) || []; a > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
            for (o = 0; r = e[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
            n.className = t ? ce.trim(i) : ""
        }
        return this
    }, toggleClass: function (t, e) {
        var n = typeof t, i = "boolean" == typeof e;
        return ce.isFunction(t) ? this.each(function (n) {
            ce(this).toggleClass(t.call(this, n, this.className, e), e)
        }) : this.each(function () {
            if ("string" === n)for (var r, o = 0, s = ce(this), a = e, l = t.match(de) || []; r = l[o++];)a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r); else(n === Y || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ce._data(this, "__className__") || "")
        })
    }, hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0)return!0;
        return!1
    }, val: function (t) {
        var n, i, r, o = this[0];
        {
            if (arguments.length)return r = ce.isFunction(t), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = r ? t.call(this, n, ce(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function (t) {
                    return null == t ? "" : t + ""
                })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, o, "value") !== e || (this.value = o))
            });
            if (o)return i = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], i && "get"in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
        }
    }}), ce.extend({valHooks: {option: {get: function (t) {
        var e = ce.find.attr(t, "value");
        return null != e ? e : t.text
    }}, select: {get: function (t) {
        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== r || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
            if (e = ce(n).val(), o)return e;
            s.push(e)
        }
        return s
    }, set: function (t, e) {
        for (var n, i, r = t.options, o = ce.makeArray(e), s = r.length; s--;)i = r[s], (i.selected = ce.inArray(ce(i).val(), o) >= 0) && (n = !0);
        return n || (t.selectedIndex = -1), o
    }}}, attr: function (t, n, i) {
        var r, o, s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s)return typeof t.getAttribute === Y ? ce.prop(t, n, i) : (1 === s && ce.isXMLDoc(t) || (n = n.toLowerCase(), r = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? je : Ne)), i === e ? r && "get"in r && null !== (o = r.get(t, n)) ? o : (o = ce.find.attr(t, n), null == o ? e : o) : null !== i ? r && "set"in r && (o = r.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), i) : (ce.removeAttr(t, n), void 0))
    }, removeAttr: function (t, e) {
        var n, i, r = 0, o = e && e.match(de);
        if (o && 1 === t.nodeType)for (; n = o[r++];)i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Pe && Oe || !qe.test(n) ? t[i] = !1 : t[ce.camelCase("default-" + n)] = t[i] = !1 : ce.attr(t, n, ""), t.removeAttribute(Oe ? n : i)
    }, attrHooks: {type: {set: function (t, e) {
        if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
            var n = t.value;
            return t.setAttribute("type", e), n && (t.value = n), e
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, n, i) {
        var r, o, s, a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a)return s = 1 !== a || !ce.isXMLDoc(t), s && (n = ce.propFix[n] || n, o = ce.propHooks[n]), i !== e ? o && "set"in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get"in o && null !== (r = o.get(t, n)) ? r : t[n]
    }, propHooks: {tabIndex: {get: function (t) {
        var e = ce.find.attr(t, "tabindex");
        return e ? parseInt(e, 10) : Le.test(t.nodeName) || He.test(t.nodeName) && t.href ? 0 : -1
    }}}}), je = {set: function (t, e, n) {
        return e === !1 ? ce.removeAttr(t, n) : Pe && Oe || !qe.test(n) ? t.setAttribute(!Oe && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0, n
    }}, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (t, n) {
        var i = ce.expr.attrHandle[n] || ce.find.attr;
        ce.expr.attrHandle[n] = Pe && Oe || !qe.test(n) ? function (t, n, r) {
            var o = ce.expr.attrHandle[n], s = r ? e : (ce.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
            return ce.expr.attrHandle[n] = o, s
        } : function (t, n, i) {
            return i ? e : t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Pe && Oe || (ce.attrHooks.value = {set: function (t, e, n) {
        return ce.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Ne && Ne.set(t, e, n)
    }}), Oe || (Ne = {set: function (t, n, i) {
        var r = t.getAttributeNode(i);
        return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
    }}, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function (t, n, i) {
        var r;
        return i ? e : (r = t.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }, ce.valHooks.button = {get: function (t, n) {
        var i = t.getAttributeNode(n);
        return i && i.specified ? i.value : e
    }, set: Ne.set}, ce.attrHooks.contenteditable = {set: function (t, e, n) {
        Ne.set(t, "" === e ? !1 : e, n)
    }}, ce.each(["width", "height"], function (t, e) {
        ce.attrHooks[e] = {set: function (t, n) {
            return"" === n ? (t.setAttribute(e, "auto"), n) : void 0
        }}
    })), ce.support.hrefNormalized || ce.each(["href", "src"], function (t, e) {
        ce.propHooks[e] = {get: function (t) {
            return t.getAttribute(e, 4)
        }}
    }), ce.support.style || (ce.attrHooks.style = {get: function (t) {
        return t.style.cssText || e
    }, set: function (t, e) {
        return t.style.cssText = e + ""
    }}), ce.support.optSelected || (ce.propHooks.selected = {get: function (t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }}), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ce.propFix[this.toLowerCase()] = this
    }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function () {
        ce.valHooks[this] = {set: function (t, e) {
            return ce.isArray(e) ? t.checked = ce.inArray(ce(t).val(), e) >= 0 : void 0
        }}, ce.support.checkOn || (ce.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Fe = /^(?:input|select|textarea)$/i, Me = /^key/, _e = /^(?:mouse|contextmenu)|click/, Be = /^(?:focusinfocus|focusoutblur)$/, Re = /^([^.]*)(?:\.(.+)|)$/;
    ce.event = {global: {}, add: function (t, n, i, r, o) {
        var s, a, l, u, c, f, d, p, h, m, g, v = ce._data(t);
        if (v) {
            for (i.handler && (u = i, i = u.handler, o = u.selector), i.guid || (i.guid = ce.guid++), (a = v.events) || (a = v.events = {}), (f = v.handle) || (f = v.handle = function (t) {
                return typeof ce === Y || t && ce.event.triggered === t.type ? e : ce.event.dispatch.apply(f.elem, arguments)
            }, f.elem = t), n = (n || "").match(de) || [""], l = n.length; l--;)s = Re.exec(n[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h && (c = ce.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ce.event.special[h] || {}, d = ce.extend({type: h, origType: g, data: r, handler: i, guid: i.guid, selector: o, needsContext: o && ce.expr.match.needsContext.test(o), namespace: m.join(".")}, u), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, c.setup && c.setup.call(t, r, m, f) !== !1 || (t.addEventListener ? t.addEventListener(h, f, !1) : t.attachEvent && t.attachEvent("on" + h, f))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ce.event.global[h] = !0);
            t = null
        }
    }, remove: function (t, e, n, i, r) {
        var o, s, a, l, u, c, f, d, p, h, m, g = ce.hasData(t) && ce._data(t);
        if (g && (c = g.events)) {
            for (e = (e || "").match(de) || [""], u = e.length; u--;)if (a = Re.exec(e[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                for (f = ce.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;)s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, f.remove && f.remove.call(t, s));
                l && !d.length && (f.teardown && f.teardown.call(t, h, g.handle) !== !1 || ce.removeEvent(t, p, g.handle), delete c[p])
            } else for (p in c)ce.event.remove(t, p + e[u], n, i, !0);
            ce.isEmptyObject(c) && (delete g.handle, ce._removeData(t, "events"))
        }
    }, trigger: function (n, i, r, o) {
        var s, a, l, u, c, f, d, p = [r || G], h = le.call(n, "type") ? n.type : n, m = le.call(n, "namespace") ? n.namespace.split(".") : [];
        if (l = f = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Be.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = h.indexOf(":") < 0 && "on" + h, n = n[ce.expando] ? n : new ce.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = r), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[h] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
            if (!o && !c.noBubble && !ce.isWindow(r)) {
                for (u = c.delegateType || h, Be.test(u + h) || (l = l.parentNode); l; l = l.parentNode)p.push(l), f = l;
                f === (r.ownerDocument || G) && p.push(f.defaultView || f.parentWindow || t)
            }
            for (d = 0; (l = p[d++]) && !n.isPropagationStopped();)n.type = d > 1 ? u : c.bindType || h, s = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && ce.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
            if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ce.acceptData(r) && a && r[h] && !ce.isWindow(r)) {
                f = r[a], f && (r[a] = null), ce.event.triggered = h;
                try {
                    r[h]()
                } catch (g) {
                }
                ce.event.triggered = e, f && (r[a] = f)
            }
            return n.result
        }
    }, dispatch: function (t) {
        t = ce.event.fix(t);
        var n, i, r, o, s, a = [], l = oe.call(arguments), u = (ce._data(this, "events") || {})[t.type] || [], c = ce.event.special[t.type] || {};
        if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
            for (a = ce.event.handlers.call(this, t, u), n = 0; (o = a[n++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, s = 0; (r = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, t), t.result
        }
    }, handlers: function (t, n) {
        var i, r, o, s, a = [], l = n.delegateCount, u = t.target;
        if (l && u.nodeType && (!t.button || "click" !== t.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
            for (o = [], s = 0; l > s; s++)r = n[s], i = r.selector + " ", o[i] === e && (o[i] = r.needsContext ? ce(i, this).index(u) >= 0 : ce.find(i, this, null, [u]).length), o[i] && o.push(r);
            o.length && a.push({elem: u, handlers: o})
        }
        return l < n.length && a.push({elem: this, handlers: n.slice(l)}), a
    }, fix: function (t) {
        if (t[ce.expando])return t;
        var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
        for (s || (this.fixHooks[r] = s = _e.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ce.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
        return t.target || (t.target = o.srcElement || G), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (t, n) {
        var i, r, o, s = n.button, a = n.fromElement;
        return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || G, o = r.documentElement, i = r.body, t.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== c() && this.focus)try {
            return this.focus(), !1
        } catch (t) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === c() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function () {
        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }, _default: function (t) {
        return ce.nodeName(t.target, "a")
    }}, beforeunload: {postDispatch: function (t) {
        t.result !== e && (t.originalEvent.returnValue = t.result)
    }}}, simulate: function (t, e, n, i) {
        var r = ce.extend(new ce.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
        i ? ce.event.trigger(r, null, e) : ce.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
    }}, ce.removeEvent = G.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Y && (t[i] = null), t.detachEvent(i, n))
    }, ce.Event = function (t, e) {
        return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && ce.extend(this, e), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, void 0) : new ce.Event(t, e)
    }, ce.Event.prototype = {isDefaultPrevented: u, isPropagationStopped: u, isImmediatePropagationStopped: u, preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    }, stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = l, this.stopPropagation()
    }}, ce.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
        ce.event.special[t] = {delegateType: e, bindType: e, handle: function (t) {
            var n, i = this, r = t.relatedTarget, o = t.handleObj;
            return(!r || r !== i && !ce.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
        }}
    }), ce.support.submitBubbles || (ce.event.special.submit = {setup: function () {
        return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function (t) {
            var n = t.target, i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : e;
            i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function (t) {
                t._submit_bubble = !0
            }), ce._data(i, "submitBubbles", !0))
        }), void 0)
    }, postDispatch: function (t) {
        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
    }, teardown: function () {
        return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), void 0)
    }}), ce.support.changeBubbles || (ce.event.special.change = {setup: function () {
        return Fe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function (t) {
            "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
        }), ce.event.add(this, "click._change", function (t) {
            this._just_changed && !t.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, t, !0)
        })), !1) : (ce.event.add(this, "beforeactivate._change", function (t) {
            var e = t.target;
            Fe.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change", function (t) {
                !this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
            }), ce._data(e, "changeBubbles", !0))
        }), void 0)
    }, handle: function (t) {
        var e = t.target;
        return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return ce.event.remove(this, "._change"), !Fe.test(this.nodeName)
    }}), ce.support.focusinBubbles || ce.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = 0, i = function (t) {
            ce.event.simulate(e, t.target, ce.event.fix(t), !0)
        };
        ce.event.special[e] = {setup: function () {
            0 === n++ && G.addEventListener(t, i, !0)
        }, teardown: function () {
            0 === --n && G.removeEventListener(t, i, !0)
        }}
    }), ce.fn.extend({on: function (t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = e);
            for (s in t)this.on(s, n, i, t[s], o);
            return this
        }
        if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1)r = u; else if (!r)return this;
        return 1 === o && (a = r, r = function (t) {
            return ce().off(t), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = ce.guid++)), this.each(function () {
            ce.event.add(this, t, r, i, n)
        })
    }, one: function (t, e, n, i) {
        return this.on(t, e, n, i, 1)
    }, off: function (t, n, i) {
        var r, o;
        if (t && t.preventDefault && t.handleObj)return r = t.handleObj, ce(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof t) {
            for (o in t)this.off(o, n, t[o]);
            return this
        }
        return(n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function () {
            ce.event.remove(this, t, i, n)
        })
    }, trigger: function (t, e) {
        return this.each(function () {
            ce.event.trigger(t, e, this)
        })
    }, triggerHandler: function (t, e) {
        var n = this[0];
        return n ? ce.event.trigger(t, e, n, !0) : void 0
    }});
    var We = /^.[^:#\[\.,]*$/, Ie = /^(?:parents|prev(?:Until|All))/, ze = ce.expr.match.needsContext, Xe = {children: !0, contents: !0, next: !0, prev: !0};
    ce.fn.extend({find: function (t) {
        var e, n = [], i = this, r = i.length;
        if ("string" != typeof t)return this.pushStack(ce(t).filter(function () {
            for (e = 0; r > e; e++)if (ce.contains(i[e], this))return!0
        }));
        for (e = 0; r > e; e++)ce.find(t, i[e], n);
        return n = this.pushStack(r > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
    }, has: function (t) {
        var e, n = ce(t, this), i = n.length;
        return this.filter(function () {
            for (e = 0; i > e; e++)if (ce.contains(this, n[e]))return!0
        })
    }, not: function (t) {
        return this.pushStack(d(this, t || [], !0))
    }, filter: function (t) {
        return this.pushStack(d(this, t || [], !1))
    }, is: function (t) {
        return!!d(this, "string" == typeof t && ze.test(t) ? ce(t) : t || [], !1).length
    }, closest: function (t, e) {
        for (var n, i = 0, r = this.length, o = [], s = ze.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
            n = o.push(n);
            break
        }
        return this.pushStack(o.length > 1 ? ce.unique(o) : o)
    }, index: function (t) {
        return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (t, e) {
        var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t), i = ce.merge(this.get(), n);
        return this.pushStack(ce.unique(i))
    }, addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }}), ce.each({parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
    }, parents: function (t) {
        return ce.dir(t, "parentNode")
    }, parentsUntil: function (t, e, n) {
        return ce.dir(t, "parentNode", n)
    }, next: function (t) {
        return f(t, "nextSibling")
    }, prev: function (t) {
        return f(t, "previousSibling")
    }, nextAll: function (t) {
        return ce.dir(t, "nextSibling")
    }, prevAll: function (t) {
        return ce.dir(t, "previousSibling")
    }, nextUntil: function (t, e, n) {
        return ce.dir(t, "nextSibling", n)
    }, prevUntil: function (t, e, n) {
        return ce.dir(t, "previousSibling", n)
    }, siblings: function (t) {
        return ce.sibling((t.parentNode || {}).firstChild, t)
    }, children: function (t) {
        return ce.sibling(t.firstChild)
    }, contents: function (t) {
        return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ce.merge([], t.childNodes)
    }}, function (t, e) {
        ce.fn[t] = function (n, i) {
            var r = ce.map(this, e, n);
            return"Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ce.filter(i, r)), this.length > 1 && (Xe[t] || (r = ce.unique(r)), Ie.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    }), ce.extend({filter: function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ce.find.matchesSelector(i, t) ? [i] : [] : ce.find.matches(t, ce.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, dir: function (t, n, i) {
        for (var r = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !ce(o).is(i));)1 === o.nodeType && r.push(o), o = o[n];
        return r
    }, sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
        return n
    }});
    var Qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ue = / jQuery\d+="(?:null|\d+)"/g, Ye = new RegExp("<(?:" + Qe + ")[\\s/>]", "i"), Ve = /^\s+/, Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Je = /<([\w:]+)/, Ke = /<tbody/i, Ze = /<|&#?\w+;/, tn = /<(?:script|style|link)/i, en = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, ln = p(G), un = ln.appendChild(G.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ce.fn.extend({text: function (t) {
        return ce.access(this, function (t) {
            return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(t))
        }, null, t, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = h(this, t);
                e.appendChild(t)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = h(this, t);
                e.insertBefore(t, e.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
    }, remove: function (t, e) {
        for (var n, i = t ? ce.filter(t, this) : this, r = 0; null != (n = i[r]); r++)e || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (e && ce.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
        return this
    }, empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && ce.cleanData(x(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
            t.options && ce.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
    }, clone: function (t, e) {
        return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
            return ce.clone(this, t, e)
        })
    }, html: function (t) {
        return ce.access(this, function (t) {
            var n = this[0] || {}, i = 0, r = this.length;
            if (t === e)return 1 === n.nodeType ? n.innerHTML.replace(Ue, "") : e;
            if (!("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Ye.test(t) || !ce.support.leadingWhitespace && Ve.test(t) || an[(Je.exec(t) || ["", ""])[1].toLowerCase()])) {
                t = t.replace(Ge, "<$1></$2>");
                try {
                    for (; r > i; i++)n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = t);
                    n = 0
                } catch (o) {
                }
            }
            n && this.empty().append(t)
        }, null, t, arguments.length)
    }, replaceWith: function () {
        var t = ce.map(this, function (t) {
            return[t.nextSibling, t.parentNode]
        }), e = 0;
        return this.domManip(arguments, function (n) {
            var i = t[e++], r = t[e++];
            r && (i && i.parentNode !== r && (i = this.nextSibling), ce(this).remove(), r.insertBefore(n, i))
        }, !0), e ? this : this.remove()
    }, detach: function (t) {
        return this.remove(t, !0)
    }, domManip: function (t, e, n) {
        t = ie.apply([], t);
        var i, r, o, s, a, l, u = 0, c = this.length, f = this, d = c - 1, p = t[0], h = ce.isFunction(p);
        if (h || !(1 >= c || "string" != typeof p || ce.support.checkClone) && nn.test(p))return this.each(function (i) {
            var r = f.eq(i);
            h && (t[0] = p.call(this, i, r.html())), r.domManip(t, e, n)
        });
        if (c && (l = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
            for (s = ce.map(x(l, "script"), m), o = s.length; c > u; u++)r = l, u !== d && (r = ce.clone(r, !0, !0), o && ce.merge(s, x(r, "script"))), e.call(this[u], r, u);
            if (o)for (a = s[s.length - 1].ownerDocument, ce.map(s, g), u = 0; o > u; u++)r = s[u], rn.test(r.type || "") && !ce._data(r, "globalEval") && ce.contains(a, r) && (r.src ? ce._evalUrl(r.src) : ce.globalEval((r.text || r.textContent || r.innerHTML || "").replace(sn, "")));
            l = i = null
        }
        return this
    }}), ce.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
        ce.fn[t] = function (t) {
            for (var n, i = 0, r = [], o = ce(t), s = o.length - 1; s >= i; i++)n = i === s ? this : this.clone(!0), ce(o[i])[e](n), re.apply(r, n.get());
            return this.pushStack(r)
        }
    }), ce.extend({clone: function (t, e, n) {
        var i, r, o, s, a, l = ce.contains(t.ownerDocument, t);
        if (ce.support.html5Clone || ce.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(o = un.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t)))for (i = x(o), a = x(t), s = 0; null != (r = a[s]); ++s)i[s] && b(r, i[s]);
        if (e)if (n)for (a = a || x(t), i = i || x(o), s = 0; null != (r = a[s]); s++)y(r, i[s]); else y(t, o);
        return i = x(o, "script"), i.length > 0 && v(i, !l && x(t, "script")), i = a = r = null, o
    }, buildFragment: function (t, e, n, i) {
        for (var r, o, s, a, l, u, c, f = t.length, d = p(e), h = [], m = 0; f > m; m++)if (o = t[m], o || 0 === o)if ("object" === ce.type(o))ce.merge(h, o.nodeType ? [o] : o); else if (Ze.test(o)) {
            for (a = a || d.appendChild(e.createElement("div")), l = (Je.exec(o) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2], r = c[0]; r--;)a = a.lastChild;
            if (!ce.support.leadingWhitespace && Ve.test(o) && h.push(e.createTextNode(Ve.exec(o)[0])), !ce.support.tbody)for (o = "table" !== l || Ke.test(o) ? "<table>" !== c[1] || Ke.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;)ce.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
            for (ce.merge(h, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
            a = d.lastChild
        } else h.push(e.createTextNode(o));
        for (a && d.removeChild(a), ce.support.appendChecked || ce.grep(x(h, "input"), w), m = 0; o = h[m++];)if ((!i || -1 === ce.inArray(o, i)) && (s = ce.contains(o.ownerDocument, o), a = x(d.appendChild(o), "script"), s && v(a), n))for (r = 0; o = a[r++];)rn.test(o.type || "") && n.push(o);
        return a = null, d
    }, cleanData: function (t, e) {
        for (var n, i, r, o, s = 0, a = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = t[s]); s++)if ((e || ce.acceptData(n)) && (r = n[a], o = r && l[r])) {
            if (o.events)for (i in o.events)c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, o.handle);
            l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Y ? n.removeAttribute(a) : n[a] = null, ee.push(r))
        }
    }, _evalUrl: function (t) {
        return ce.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }}), ce.fn.extend({wrapAll: function (t) {
        if (ce.isFunction(t))return this.each(function (e) {
            ce(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
            var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                return t
            }).append(this)
        }
        return this
    }, wrapInner: function (t) {
        return ce.isFunction(t) ? this.each(function (e) {
            ce(this).wrapInner(t.call(this, e))
        }) : this.each(function () {
            var e = ce(this), n = e.contents();
            n.length ? n.wrapAll(t) : e.append(t)
        })
    }, wrap: function (t) {
        var e = ce.isFunction(t);
        return this.each(function (n) {
            ce(this).wrapAll(e ? t.call(this, n) : t)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
        }).end()
    }});
    var cn, fn, dn, pn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, mn = /^(top|right|bottom|left)$/, gn = /^(none|table(?!-c[ea]).+)/, vn = /^margin/, yn = new RegExp("^(" + fe + ")(.*)$", "i"), bn = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"), xn = new RegExp("^([+-])=(" + fe + ")", "i"), wn = {BODY: "block"}, Cn = {position: "absolute", visibility: "hidden", display: "block"}, kn = {letterSpacing: 0, fontWeight: 400}, Tn = ["Top", "Right", "Bottom", "Left"], $n = ["Webkit", "O", "Moz", "ms"];
    ce.fn.extend({css: function (t, n) {
        return ce.access(this, function (t, n, i) {
            var r, o, s = {}, a = 0;
            if (ce.isArray(n)) {
                for (o = fn(t), r = n.length; r > a; a++)s[n[a]] = ce.css(t, n[a], !1, o);
                return s
            }
            return i !== e ? ce.style(t, n, i) : ce.css(t, n)
        }, t, n, arguments.length > 1)
    }, show: function () {
        return T(this, !0)
    }, hide: function () {
        return T(this)
    }, toggle: function (t) {
        var e = "boolean" == typeof t;
        return this.each(function () {
            (e ? t : k(this)) ? ce(this).show() : ce(this).hide()
        })
    }}), ce.extend({cssHooks: {opacity: {get: function (t, e) {
        if (e) {
            var n = dn(t, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": ce.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (t, n, i, r) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var o, s, a, l = ce.camelCase(n), u = t.style;
            if (n = ce.cssProps[l] || (ce.cssProps[l] = C(u, l)), a = ce.cssHooks[n] || ce.cssHooks[l], i === e)return a && "get"in a && (o = a.get(t, !1, r)) !== e ? o : u[n];
            if (s = typeof i, "string" === s && (o = xn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ce.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set"in a && (i = a.set(t, i, r)) === e)))try {
                u[n] = i
            } catch (c) {
            }
        }
    }, css: function (t, n, i, r) {
        var o, s, a, l = ce.camelCase(n);
        return n = ce.cssProps[l] || (ce.cssProps[l] = C(t.style, l)), a = ce.cssHooks[n] || ce.cssHooks[l], a && "get"in a && (s = a.get(t, !0, i)), s === e && (s = dn(t, n, r)), "normal" === s && n in kn && (s = kn[n]), "" === i || i ? (o = parseFloat(s), i === !0 || ce.isNumeric(o) ? o || 0 : s) : s
    }}), t.getComputedStyle ? (fn = function (e) {
        return t.getComputedStyle(e, null)
    }, dn = function (t, n, i) {
        var r, o, s, a = i || fn(t), l = a ? a.getPropertyValue(n) || a[n] : e, u = t.style;
        return a && ("" !== l || ce.contains(t.ownerDocument, t) || (l = ce.style(t, n)), bn.test(l) && vn.test(n) && (r = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = o, u.maxWidth = s)), l
    }) : G.documentElement.currentStyle && (fn = function (t) {
        return t.currentStyle
    }, dn = function (t, n, i) {
        var r, o, s, a = i || fn(t), l = a ? a[n] : e, u = t.style;
        return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (r = u.left, o = t.runtimeStyle, s = o && o.left, s && (o.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, s && (o.left = s)), "" === l ? "auto" : l
    }), ce.each(["height", "width"], function (t, e) {
        ce.cssHooks[e] = {get: function (t, n, i) {
            return n ? 0 === t.offsetWidth && gn.test(ce.css(t, "display")) ? ce.swap(t, Cn, function () {
                return S(t, e, i)
            }) : S(t, e, i) : void 0
        }, set: function (t, n, i) {
            var r = i && fn(t);
            return $(t, n, i ? E(t, e, i, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, r), r) : 0)
        }}
    }), ce.support.opacity || (ce.cssHooks.opacity = {get: function (t, e) {
        return hn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    }, set: function (t, e) {
        var n = t.style, i = t.currentStyle, r = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = i && i.filter || n.filter || "";
        n.zoom = 1, (e >= 1 || "" === e) && "" === ce.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pn.test(o) ? o.replace(pn, r) : o + " " + r)
    }}), ce(function () {
        ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {get: function (t, e) {
            return e ? ce.swap(t, {display: "inline-block"}, dn, [t, "marginRight"]) : void 0
        }}), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function (t, e) {
            ce.cssHooks[e] = {get: function (t, n) {
                return n ? (n = dn(t, e), bn.test(n) ? ce(t).position()[e] + "px" : n) : void 0
            }}
        })
    }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
    }, ce.expr.filters.visible = function (t) {
        return!ce.expr.filters.hidden(t)
    }), ce.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        ce.cssHooks[t + e] = {expand: function (n) {
            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[t + Tn[i] + e] = o[i] || o[i - 2] || o[0];
            return r
        }}, vn.test(t) || (ce.cssHooks[t + e].set = $)
    });
    var En = /%20/g, Sn = /\[\]$/, Nn = /\r?\n/g, jn = /^(?:submit|button|image|reset|file)$/i, An = /^(?:input|select|textarea|keygen)/i;
    ce.fn.extend({serialize: function () {
        return ce.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var t = ce.prop(this, "elements");
            return t ? ce.makeArray(t) : this
        }).filter(function () {
            var t = this.type;
            return this.name && !ce(this).is(":disabled") && An.test(this.nodeName) && !jn.test(t) && (this.checked || !en.test(t))
        }).map(function (t, e) {
            var n = ce(this).val();
            return null == n ? null : ce.isArray(n) ? ce.map(n, function (t) {
                return{name: e.name, value: t.replace(Nn, "\r\n")}
            }) : {name: e.name, value: n.replace(Nn, "\r\n")}
        }).get()
    }}), ce.param = function (t, n) {
        var i, r = [], o = function (t, e) {
            e = ce.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t))ce.each(t, function () {
            o(this.name, this.value)
        }); else for (i in t)A(i, t[i], n, o);
        return r.join("&").replace(En, "+")
    }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ce.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ce.fn.extend({hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    }, bind: function (t, e, n) {
        return this.on(t, null, e, n)
    }, unbind: function (t, e) {
        return this.off(t, null, e)
    }, delegate: function (t, e, n, i) {
        return this.on(e, t, n, i)
    }, undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
    }});
    var Dn, Ln, Hn = ce.now(), qn = /\?/, On = /#.*$/, Pn = /([?&])_=[^&]*/, Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _n = /^(?:GET|HEAD)$/, Bn = /^\/\//, Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Wn = ce.fn.load, In = {}, zn = {}, Xn = "*/".concat("*");
    try {
        Ln = V.href
    } catch (Qn) {
        Ln = G.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    Dn = Rn.exec(Ln.toLowerCase()) || [], ce.fn.load = function (t, n, i) {
        if ("string" != typeof t && Wn)return Wn.apply(this, arguments);
        var r, o, s, a = this, l = t.indexOf(" ");
        return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), ce.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ce.ajax({url: t, type: s, dataType: "html", data: n}).done(function (t) {
            o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(t)).find(r) : t)
        }).complete(i && function (t, e) {
            a.each(i, o || [t.responseText, e, t])
        }), this
    }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ce.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ce.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ln, type: "GET", isLocal: Mn.test(Dn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Xn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": ce.parseJSON, "text xml": ce.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (t, e) {
        return e ? H(H(t, ce.ajaxSettings), e) : H(ce.ajaxSettings, t)
    }, ajaxPrefilter: D(In), ajaxTransport: D(zn), ajax: function (t, n) {
        function i(t, n, i, r) {
            var o, f, y, b, w, k = n;
            2 !== x && (x = 2, l && clearTimeout(l), c = e, a = r || "", C.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (b = q(d, C, i)), b = O(d, b, C, o), o ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ce.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (ce.etag[s] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, f = b.data, y = b.error, o = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || k) + "", o ? m.resolveWith(p, [f, k, C]) : m.rejectWith(p, [C, k, y]), C.statusCode(v), v = e, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, d, o ? f : y]), g.fireWith(p, [C, k]), u && (h.trigger("ajaxComplete", [C, d]), --ce.active || ce.event.trigger("ajaxStop")))
        }

        "object" == typeof t && (n = t, t = e), n = n || {};
        var r, o, s, a, l, u, c, f, d = ce.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? ce(p) : ce.event, m = ce.Deferred(), g = ce.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", C = {readyState: 0, getResponseHeader: function (t) {
            var e;
            if (2 === x) {
                if (!f)for (f = {}; e = Fn.exec(a);)f[e[1].toLowerCase()] = e[2];
                e = f[t.toLowerCase()]
            }
            return null == e ? null : e
        }, getAllResponseHeaders: function () {
            return 2 === x ? a : null
        }, setRequestHeader: function (t, e) {
            var n = t.toLowerCase();
            return x || (t = b[n] = b[n] || t, y[t] = e), this
        }, overrideMimeType: function (t) {
            return x || (d.mimeType = t), this
        }, statusCode: function (t) {
            var e;
            if (t)if (2 > x)for (e in t)v[e] = [v[e], t[e]]; else C.always(t[C.status]);
            return this
        }, abort: function (t) {
            var e = t || w;
            return c && c.abort(e), i(0, e), this
        }};
        if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || Ln) + "").replace(On, "").replace(Bn, Dn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (r = Rn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Dn[1] && r[2] === Dn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Dn[3] || ("http:" === Dn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), L(In, d, n, C), 2 === x)return C;
        u = d.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !_n.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (qn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Pn.test(s) ? s.replace(Pn, "$1_=" + Hn++) : s + (qn.test(s) ? "&" : "?") + "_=" + Hn++)), d.ifModified && (ce.lastModified[s] && C.setRequestHeader("If-Modified-Since", ce.lastModified[s]), ce.etag[s] && C.setRequestHeader("If-None-Match", ce.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
        for (o in d.headers)C.setRequestHeader(o, d.headers[o]);
        if (d.beforeSend && (d.beforeSend.call(p, C, d) === !1 || 2 === x))return C.abort();
        w = "abort";
        for (o in{success: 1, error: 1, complete: 1})C[o](d[o]);
        if (c = L(zn, d, n, C)) {
            C.readyState = 1, u && h.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                C.abort("timeout")
            }, d.timeout));
            try {
                x = 1, c.send(y, i)
            } catch (k) {
                if (!(2 > x))throw k;
                i(-1, k)
            }
        } else i(-1, "No Transport");
        return C
    }, getJSON: function (t, e, n) {
        return ce.get(t, e, n, "json")
    }, getScript: function (t, n) {
        return ce.get(t, e, n, "script")
    }}), ce.each(["get", "post"], function (t, n) {
        ce[n] = function (t, i, r, o) {
            return ce.isFunction(i) && (o = o || r, r = i, i = e), ce.ajax({url: t, type: n, dataType: o, data: i, success: r})
        }
    }), ce.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (t) {
        return ce.globalEval(t), t
    }}}), ce.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ce.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var n, i = G.head || ce("head")[0] || G.documentElement;
            return{send: function (e, r) {
                n = G.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
                    (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || r(200, "success"))
                }, i.insertBefore(n, i.firstChild)
            }, abort: function () {
                n && n.onload(e, !0)
            }}
        }
    });
    var Un = [], Yn = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var t = Un.pop() || ce.expando + "_" + Hn++;
        return this[t] = !0, t
    }}), ce.ajaxPrefilter("json jsonp", function (n, i, r) {
        var o, s, a, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (qn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return a || ce.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = t[o], t[o] = function () {
            a = arguments
        }, r.always(function () {
            t[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, Un.push(o)), a && ce.isFunction(s) && s(a[0]), a = s = e
        }), "script") : void 0
    });
    var Vn, Gn, Jn = 0, Kn = t.ActiveXObject && function () {
        var t;
        for (t in Vn)Vn[t](e, !0)
    };
    ce.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return!this.isLocal && P() || F()
    } : P, Gn = ce.ajaxSettings.xhr(), ce.support.cors = !!Gn && "withCredentials"in Gn, Gn = ce.support.ajax = !!Gn, Gn && ce.ajaxTransport(function (n) {
        if (!n.crossDomain || ce.support.cors) {
            var i;
            return{send: function (r, o) {
                var s, a, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (a in n.xhrFields)l[a] = n.xhrFields[a];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (a in r)l.setRequestHeader(a, r[a])
                } catch (u) {
                }
                l.send(n.hasContent && n.data || null), i = function (t, r) {
                    var a, u, c, f;
                    try {
                        if (i && (r || 4 === l.readyState))if (i = e, s && (l.onreadystatechange = ce.noop, Kn && delete Vn[s]), r)4 !== l.readyState && l.abort(); else {
                            f = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                            try {
                                c = l.statusText
                            } catch (d) {
                                c = ""
                            }
                            a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                        }
                    } catch (p) {
                        r || o(-1, p)
                    }
                    f && o(a, c, f, u)
                }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Jn, Kn && (Vn || (Vn = {}, ce(t).unload(Kn)), Vn[s] = i), l.onreadystatechange = i) : i()
            }, abort: function () {
                i && i(e, !0)
            }}
        }
    });
    var Zn, ti, ei = /^(?:toggle|show|hide)$/, ni = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"), ii = /queueHooks$/, ri = [W], oi = {"*": [function (t, e) {
        var n = this.createTween(t, e), i = n.cur(), r = ni.exec(e), o = r && r[3] || (ce.cssNumber[t] ? "" : "px"), s = (ce.cssNumber[t] || "px" !== o && +i) && ni.exec(ce.css(n.elem, t)), a = 1, l = 20;
        if (s && s[3] !== o) {
            o = o || s[3], r = r || [], s = +i || 1;
            do a = a || ".5", s /= a, ce.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
        }
        return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
    }]};
    ce.Animation = ce.extend(B, {tweener: function (t, e) {
        ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
        for (var n, i = 0, r = t.length; r > i; i++)n = t[i], oi[n] = oi[n] || [], oi[n].unshift(e)
    }, prefilter: function (t, e) {
        e ? ri.unshift(t) : ri.push(t)
    }}), ce.Tween = I, I.prototype = {constructor: I, init: function (t, e, n, i, r, o) {
        this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ce.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var t = I.propHooks[this.prop];
        return t && t.get ? t.get(this) : I.propHooks._default.get(this)
    }, run: function (t) {
        var e, n = I.propHooks[this.prop];
        return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
    }}, I.prototype.init.prototype = I.prototype, I.propHooks = {_default: {get: function (t) {
        var e;
        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
    }, set: function (t) {
        ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
    }}}, I.propHooks.scrollTop = I.propHooks.scrollLeft = {set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }}, ce.each(["toggle", "show", "hide"], function (t, e) {
        var n = ce.fn[e];
        ce.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, r)
        }
    }), ce.fn.extend({fadeTo: function (t, e, n, i) {
        return this.filter(k).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
    }, animate: function (t, e, n, i) {
        var r = ce.isEmptyObject(t), o = ce.speed(e, n, i), s = function () {
            var e = B(this, ce.extend({}, t), o);
            (r || ce._data(this, "finish")) && e.stop(!0)
        };
        return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
    }, stop: function (t, n, i) {
        var r = function (t) {
            var e = t.stop;
            delete t.stop, e(i)
        };
        return"string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
            var e = !0, n = null != t && t + "queueHooks", o = ce.timers, s = ce._data(this);
            if (n)s[n] && s[n].stop && r(s[n]); else for (n in s)s[n] && s[n].stop && ii.test(n) && r(s[n]);
            for (n = o.length; n--;)o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
            (e || !i) && ce.dequeue(this, t)
        })
    }, finish: function (t) {
        return t !== !1 && (t = t || "fx"), this.each(function () {
            var e, n = ce._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = ce.timers, s = i ? i.length : 0;
            for (n.finish = !0, ce.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish
        })
    }}), ce.each({slideDown: z("show"), slideUp: z("hide"), slideToggle: z("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
        ce.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ce.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? ce.extend({}, t) : {complete: n || !n && e || ce.isFunction(t) && t, duration: t, easing: n && e || e && !ce.isFunction(e) && e};
        return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
        }, i
    }, ce.easing = {linear: function (t) {
        return t
    }, swing: function (t) {
        return.5 - Math.cos(t * Math.PI) / 2
    }}, ce.timers = [], ce.fx = I.prototype.init, ce.fx.tick = function () {
        var t, n = ce.timers, i = 0;
        for (Zn = ce.now(); i < n.length; i++)t = n[i], t() || n[i] !== t || n.splice(i--, 1);
        n.length || ce.fx.stop(), Zn = e
    }, ce.fx.timer = function (t) {
        t() && ce.timers.push(t) && ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function () {
        ti || (ti = setInterval(ce.fx.tick, ce.fx.interval))
    }, ce.fx.stop = function () {
        clearInterval(ti), ti = null
    }, ce.fx.speeds = {slow: 600, fast: 200, _default: 400}, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function (t) {
        return ce.grep(ce.timers,function (e) {
            return t === e.elem
        }).length
    }), ce.fn.offset = function (t) {
        if (arguments.length)return t === e ? this : this.each(function (e) {
            ce.offset.setOffset(this, t, e)
        });
        var n, i, r = {top: 0, left: 0}, o = this[0], s = o && o.ownerDocument;
        if (s)return n = s.documentElement, ce.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (r = o.getBoundingClientRect()), i = X(s), {top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : r
    }, ce.offset = {setOffset: function (t, e, n) {
        var i = ce.css(t, "position");
        "static" === i && (t.style.position = "relative");
        var r, o, s = ce(t), a = s.offset(), l = ce.css(t, "top"), u = ce.css(t, "left"), c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, u]) > -1, f = {}, d = {};
        c ? (d = s.position(), r = d.top, o = d.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), ce.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + r), null != e.left && (f.left = e.left - a.left + o), "using"in e ? e.using.call(t, f) : s.css(f)
    }}, ce.fn.extend({position: function () {
        if (this[0]) {
            var t, e, n = {top: 0, left: 0}, i = this[0];
            return"fixed" === ce.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)), {top: e.top - n.top - ce.css(i, "marginTop", !0), left: e.left - n.left - ce.css(i, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var t = this.offsetParent || J; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");)t = t.offsetParent;
            return t || J
        })
    }}), ce.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var i = /Y/.test(n);
        ce.fn[t] = function (r) {
            return ce.access(this, function (t, r, o) {
                var s = X(t);
                return o === e ? s ? n in s ? s[n] : s.document.documentElement[r] : t[r] : (s ? s.scrollTo(i ? ce(s).scrollLeft() : o, i ? o : ce(s).scrollTop()) : t[r] = o, void 0)
            }, t, r, arguments.length, null)
        }
    }), ce.each({Height: "height", Width: "width"}, function (t, n) {
        ce.each({padding: "inner" + t, content: n, "": "outer" + t}, function (i, r) {
            ce.fn[r] = function (r, o) {
                var s = arguments.length && (i || "boolean" != typeof r), a = i || (r === !0 || o === !0 ? "margin" : "border");
                return ce.access(this, function (n, i, r) {
                    var o;
                    return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? ce.css(n, i, a) : ce.style(n, i, r, a)
                }, n, s ? r : e, s, null)
            }
        })
    }), ce.fn.size = function () {
        return this.length
    }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ce
    }))
}(window), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", buttonClickSelector: "button[data-remote]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (e) {
        var n = t('meta[name="csrf-token"]').attr("content");
        n && e.setRequestHeader("X-CSRF-Token", n)
    }, fire: function (e, n, i) {
        var r = t.Event(n);
        return e.trigger(r, i), r.result !== !1
    }, confirm: function (t) {
        return confirm(t)
    }, ajax: function (e) {
        return t.ajax(e)
    }, href: function (t) {
        return t.attr("href")
    }, handleRemote: function (i) {
        var r, o, s, a, l, u, c, f;
        if (n.fire(i, "ajax:before")) {
            if (a = i.data("cross-domain"), l = a === e ? null : a, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                r = i.attr("method"), o = i.attr("action"), s = i.serializeArray();
                var d = i.data("ujs:submit-button");
                d && (s.push(d), i.data("ujs:submit-button", null))
            } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
            f = {type: r || "GET", data: s, dataType: c, beforeSend: function (t, r) {
                return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r])
            }, success: function (t, e, n) {
                i.trigger("ajax:success", [t, e, n])
            }, complete: function (t, e) {
                i.trigger("ajax:complete", [t, e])
            }, error: function (t, e, n) {
                i.trigger("ajax:error", [t, e, n])
            }, crossDomain: l}, u && (f.xhrFields = {withCredentials: u}), o && (f.url = o);
            var p = n.ajax(f);
            return i.trigger("ajax:send", p), p
        }
        return!1
    }, handleMethod: function (i) {
        var r = n.href(i), o = i.data("method"), s = i.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), u = t('<form method="post" action="' + r + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
        l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
    }, disableFormElements: function (e) {
        e.find(n.disableSelector).each(function () {
            var e = t(this), n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
        })
    }, enableFormElements: function (e) {
        e.find(n.enableSelector).each(function () {
            var e = t(this), n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
        })
    }, allowAction: function (t) {
        var e, i = t.data("confirm"), r = !1;
        return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
    }, blankInputs: function (e, n, i) {
        var r, o, s = t(), a = n || "input,textarea", l = e.find(a);
        return l.each(function () {
            if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)return!0;
                s = s.add(r)
            }
        }), s.length ? s : !1
    }, nonBlankInputs: function (t, e) {
        return n.blankInputs(t, e, !0)
    }, stopEverything: function (e) {
        return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
    }, disableElement: function (t) {
        t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
            return n.stopEverything(t)
        })
    }, enableElement: function (t) {
        t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
    }}, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var r = t(this), o = r.data("method"), s = r.data("params");
        if (!n.allowAction(r))return n.stopEverything(i);
        if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (!(!i.metaKey && !i.ctrlKey || o && "GET" !== o || s))return!0;
            var a = n.handleRemote(r);
            return a === !1 ? n.enableElement(r) : a.error(function () {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var r = t(this), o = r.data("remote") !== e, s = n.blankInputs(r, n.requiredInputSelector), a = n.nonBlankInputs(r, n.fileInputSelector);
        if (!n.allowAction(r))return n.stopEverything(i);
        if (s && r.attr("novalidate") == e && n.fire(r, "ajax:aborted:required", [s]))return n.stopEverything(i);
        if (o) {
            if (a) {
                setTimeout(function () {
                    n.disableFormElements(r)
                }, 13);
                var l = n.fire(r, "ajax:aborted:file", [a]);
                return l || setTimeout(function () {
                    n.enableFormElements(r)
                }, 13), l
            }
            return n.handleRemote(r), !1
        }
        setTimeout(function () {
            n.disableFormElements(r)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))return n.stopEverything(e);
        var r = i.attr("name"), o = r ? {name: r, value: i.val()} : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + n + '"]').val(e)
    }))
}(jQuery), !function (t) {
    "use strict";
    t(function () {
        t.support.transition = function () {
            var t = function () {
                var t, e = document.createElement("bootstrap"), n = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
                for (t in n)if (void 0 !== e.style[t])return n[t]
            }();
            return t && {end: t}
        }()
    })
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = t.extend({}, t.fn.affix.defaults, n), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = t(e), this.checkPosition()
    };
    e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e, n = t(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(), o = this.options.offset, s = o.bottom, a = o.top, l = "affix affix-top affix-bottom";
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top()), "function" == typeof s && (s = o.bottom()), e = null != this.unpin && i + this.unpin <= r.top ? !1 : null != s && r.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1, this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? r.top - i : null, this.$element.removeClass(l).addClass("affix" + (e ? "-" + e : "")))
        }
    };
    var n = t.fn.affix;
    t.fn.affix = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("affix"), o = "object" == typeof n && n;
            r || i.data("affix", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {offset: 0}, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this), n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
        })
    })
}(window.jQuery), !function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]', n = function (n) {
        t(n).on("click", e, this.close)
    };
    n.prototype.close = function (e) {
        function n() {
            i.trigger("closed").remove()
        }

        var i, r = t(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), i = t(o), e && e.preventDefault(), i.length || (i = r.hasClass("alert") ? r : r.parent()), i.trigger(e = t.Event("close")), e.isDefaultPrevented() || (i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.on(t.support.transition.end, n) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var i = t(this), r = i.data("alert");
            r || i.data("alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = i, this
    }, t(document).on("click.alert.data-api", e, n.prototype.close)
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, n)
    };
    e.prototype.setState = function (t) {
        var e = "disabled", n = this.$element, i = n.data(), r = n.is("input") ? "val" : "html";
        t += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[t] || this.options[t]), setTimeout(function () {
            "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function () {
        var t = this.$element.closest('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("button"), o = "object" == typeof n && n;
            r || i.data("button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    }, t.fn.button.defaults = {loadingText: "loading..."}, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.button.data-api", "[data-toggle^=button]", function (e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
    })
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.prototype = {cycle: function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, getActiveIndex: function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, to: function (e) {
        var n = this.getActiveIndex(), i = this;
        if (!(e > this.$items.length - 1 || 0 > e))return this.sliding ? this.$element.one("slid", function () {
            i.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
    }, pause: function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
    }, next: function () {
        return this.sliding ? void 0 : this.slide("next")
    }, prev: function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, slide: function (e, n) {
        var i, r = this.$element.find(".item.active"), o = n || r[e](), s = this.interval, a = "next" == e ? "left" : "right", l = "next" == e ? "first" : "last", u = this;
        if (this.sliding = !0, s && this.pause(), o = o.length ? o : this.$element.find(".item")[l](), i = t.Event("slide", {relatedTarget: o[0], direction: a}), !o.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                var e = t(u.$indicators.children()[u.getActiveIndex()]);
                e && e.addClass("active")
            })), t.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(i), i.isDefaultPrevented())return;
                o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), this.$element.one(t.support.transition.end, function () {
                    o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), u.sliding = !1, setTimeout(function () {
                        u.$element.trigger("slid")
                    }, 0)
                })
            } else {
                if (this.$element.trigger(i), i.isDefaultPrevented())return;
                r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return s && this.cycle(), this
        }
    }};
    var n = t.fn.carousel;
    t.fn.carousel = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("carousel"), o = t.extend({}, t.fn.carousel.defaults, "object" == typeof n && n), s = "string" == typeof n ? n : o.slide;
            r || i.data("carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }, t.fn.carousel.defaults = {interval: 5e3, pause: "hover"}, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var n, i, r = t(this), o = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), s = t.extend({}, o.data(), r.data());
        o.carousel(s), (i = r.attr("data-slide-to")) && o.data("carousel").pause().to(i).cycle(), e.preventDefault()
    })
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, n), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.prototype = {constructor: e, dimension: function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, show: function () {
        var e, n, i, r;
        if (!this.transitioning && !this.$element.hasClass("in")) {
            if (e = this.dimension(), n = t.camelCase(["scroll", e].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), i && i.length) {
                if (r = i.data("collapse"), r && r.transitioning)return;
                i.collapse("hide"), r || i.data("collapse", null)
            }
            this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][n])
        }
    }, hide: function () {
        var e;
        !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
    }, reset: function (t) {
        var e = this.dimension();
        return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), this
    }, transition: function (e, n, i) {
        var r = this, o = function () {
            "show" == n.type && r.reset(), r.transitioning = 0, r.$element.trigger(i)
        };
        this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o())
    }, toggle: function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }};
    var n = t.fn.collapse;
    t.fn.collapse = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("collapse"), o = t.extend({}, t.fn.collapse.defaults, i.data(), "object" == typeof n && n);
            r || i.data("collapse", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.collapse.defaults = {toggle: !0}, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (e) {
        var n, i = t(this), r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = t(r).data("collapse") ? "toggle" : i.data();
        i[t(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(r).collapse(o)
    })
}(window.jQuery), !function (t) {
    "use strict";
    function e() {
        t(".dropdown-backdrop").remove(), t(i).each(function () {
            n(t(this)).removeClass("open")
        })
    }

    function n(e) {
        var n, i = e.attr("data-target");
        return i || (i = e.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), n = i && t(i), n && n.length || (n = e.parent()), n
    }

    var i = "[data-toggle=dropdown]", r = function (e) {
        var n = t(e).on("click.dropdown.data-api", this.toggle);
        t("html").on("click.dropdown.data-api", function () {
            n.parent().removeClass("open")
        })
    };
    r.prototype = {constructor: r, toggle: function () {
        var i, r, o = t(this);
        if (!o.is(".disabled, :disabled"))return i = n(o), r = i.hasClass("open"), e(), r || ("ontouchstart"in document.documentElement && t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click", e), i.toggleClass("open")), o.focus(), !1
    }, keydown: function (e) {
        var r, o, s, a, l;
        if (/(38|40|27)/.test(e.keyCode) && (r = t(this), e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled"))) {
            if (s = n(r), a = s.hasClass("open"), !a || a && 27 == e.keyCode)return 27 == e.which && s.find(i).focus(), r.click();
            o = t("[role=menu] li:not(.divider):visible a", s), o.length && (l = o.index(o.filter(":focus")), 38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).focus())
        }
    }};
    var o = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var n = t(this), i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = o, this
    }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form",function (t) {
        t.stopPropagation()
    }).on("click.dropdown.data-api", i, r.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown)
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {constructor: e, toggle: function () {
        return this[this.isShown ? "hide" : "show"]()
    }, show: function () {
        var e = this, n = t.Event("show");
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function () {
            var n = t.support.transition && e.$element.hasClass("fade");
            e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), n && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), n ? e.$element.one(t.support.transition.end, function () {
                e.$element.focus().trigger("shown")
            }) : e.$element.focus().trigger("shown")
        }))
    }, hide: function (e) {
        e && e.preventDefault(), e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
    }, enforceFocus: function () {
        var e = this;
        t(document).on("focusin.modal", function (t) {
            e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
        })
    }, escape: function () {
        var t = this;
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (e) {
            27 == e.which && t.hide()
        }) : this.isShown || this.$element.off("keyup.dismiss.modal")
    }, hideWithTransition: function () {
        var e = this, n = setTimeout(function () {
            e.$element.off(t.support.transition.end), e.hideModal()
        }, 500);
        this.$element.one(t.support.transition.end, function () {
            clearTimeout(n), e.hideModal()
        })
    }, hideModal: function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden")
        })
    }, removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, backdrop: function (e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            i ? this.$backdrop.one(t.support.transition.end, e) : e()
        } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
    }};
    var n = t.fn.modal;
    t.fn.modal = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("modal"), o = t.extend({}, t.fn.modal.defaults, i.data(), "object" == typeof n && n);
            r || i.data("modal", r = new e(this, o)), "string" == typeof n ? r[n]() : o.show && r.show()
        })
    }, t.fn.modal.defaults = {backdrop: !0, keyboard: !0, show: !0}, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function (e) {
        var n = t(this), i = n.attr("href"), r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), o = r.data("modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, r.data(), n.data());
        e.preventDefault(), r.modal(o).one("hide", function () {
            n.focus()
        })
    })
}(window.jQuery), !function (t) {
    "use strict";
    function e(e, n) {
        var i, r = t.proxy(this.process, this), o = t(e).is("body") ? t(window) : t(e);
        this.options = t.extend({}, t.fn.scrollspy.defaults, n), this.$scrollElement = o.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (i = t(e).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = t("body"), this.refresh(), this.process()
    }

    e.prototype = {constructor: e, refresh: function () {
        var e, n = this;
        this.offsets = t([]), this.targets = t([]), e = this.$body.find(this.selector).map(function () {
            var e = t(this), i = e.data("target") || e.attr("href"), r = /^#\w/.test(i) && t(i);
            return r && r.length && [
                [r.position().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, process: function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (e >= i)return s != (t = o.last()[0]) && this.activate(t);
        for (t = r.length; t--;)s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
    }, activate: function (e) {
        var n, i;
        this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = t(i).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
    }};
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("scrollspy"), o = "object" == typeof n && n;
            r || i.data("scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {offset: 10}, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype = {constructor: e, show: function () {
        var e, n, i, r = this.element, o = r.closest("ul:not(.dropdown-menu)"), s = r.attr("data-target");
        s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (e = o.find(".active:last a")[0], i = t.Event("show", {relatedTarget: e}), r.trigger(i), i.isDefaultPrevented() || (n = t(s), this.activate(r.parent("li"), o), this.activate(n, n.parent(), function () {
            r.trigger({type: "shown", relatedTarget: e})
        })))
    }, activate: function (e, n, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }

        var o = n.find("> .active"), s = i && t.support.transition && o.hasClass("fade");
        s ? o.one(t.support.transition.end, r) : r(), o.removeClass("in")
    }};
    var n = t.fn.tab;
    t.fn.tab = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("tab");
            r || i.data("tab", r = new e(this)), "string" == typeof n && r[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    }, t(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("tooltip", t, e)
    };
    e.prototype = {constructor: e, init: function (e, n, i) {
        var r, o, s, a, l;
        for (this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.enabled = !0, s = this.options.trigger.split(" "), l = s.length; l--;)a = s[l], "click" == a ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != a && (r = "hover" == a ? "mouseenter" : "focus", o = "hover" == a ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
        this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, getOptions: function (e) {
        return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay, hide: e.delay}), e
    }, enter: function (e) {
        var n, i = t.fn[this.type].defaults, r = {};
        return this._options && t.each(this._options, function (t, e) {
            i[t] != e && (r[t] = e)
        }, this), n = t(e.currentTarget)[this.type](r).data(this.type), n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show), void 0) : n.show()
    }, leave: function (e) {
        var n = t(e.currentTarget)[this.type](this._options).data(this.type);
        return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", this.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide), void 0) : n.hide()
    }, show: function () {
        var e, n, i, r, o, s, a = t.Event("show");
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(a), a.isDefaultPrevented())return;
            switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({top: 0, left: 0, display: "block"}), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), n = this.getPosition(), i = e[0].offsetWidth, r = e[0].offsetHeight, o) {
                case"bottom":
                    s = {top: n.top + n.height, left: n.left + n.width / 2 - i / 2};
                    break;
                case"top":
                    s = {top: n.top - r, left: n.left + n.width / 2 - i / 2};
                    break;
                case"left":
                    s = {top: n.top + n.height / 2 - r / 2, left: n.left - i};
                    break;
                case"right":
                    s = {top: n.top + n.height / 2 - r / 2, left: n.left + n.width}
            }
            this.applyPlacement(s, o), this.$element.trigger("shown")
        }
    }, applyPlacement: function (t, e) {
        var n, i, r, o, s = this.tip(), a = s[0].offsetWidth, l = s[0].offsetHeight;
        s.offset(t).addClass(e).addClass("in"), n = s[0].offsetWidth, i = s[0].offsetHeight, "top" == e && i != l && (t.top = t.top + l - i, o = !0), "bottom" == e || "top" == e ? (r = 0, t.left < 0 && (r = -2 * t.left, t.left = 0, s.offset(t), n = s[0].offsetWidth, i = s[0].offsetHeight), this.replaceArrow(r - a + n, n, "left")) : this.replaceArrow(i - l, i, "top"), o && s.offset(t)
    }, replaceArrow: function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, setContent: function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, hide: function () {
        function e() {
            var e = setTimeout(function () {
                n.off(t.support.transition.end).detach()
            }, 500);
            n.one(t.support.transition.end, function () {
                clearTimeout(e), n.detach()
            })
        }

        var n = this.tip(), i = t.Event("hide");
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : n.detach(), this.$element.trigger("hidden"), this)
    }, fixTitle: function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, hasContent: function () {
        return this.getTitle()
    }, getPosition: function () {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {width: e.offsetWidth, height: e.offsetHeight}, this.$element.offset())
    }, getTitle: function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, tip: function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, arrow: function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, validate: function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
        this.enabled = !0
    }, disable: function () {
        this.enabled = !1
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }, toggle: function (e) {
        var n = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
        n.tip().hasClass("in") ? n.hide() : n.show()
    }, destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }};
    var n = t.fn.tooltip;
    t.fn.tooltip = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("tooltip"), o = "object" == typeof n && n;
            r || i.data("tooltip", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1}, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {constructor: e, setContent: function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), t.removeClass("fade top bottom left right in")
    }, hasContent: function () {
        return this.getTitle() || this.getContent()
    }, getContent: function () {
        var t, e = this.$element, n = this.options;
        return t = ("function" == typeof n.content ? n.content.call(e[0]) : n.content) || e.attr("data-content")
    }, tip: function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    }, destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }});
    var n = t.fn.popover;
    t.fn.popover = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("popover"), o = "object" == typeof n && n;
            r || i.data("popover", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(window.jQuery), !function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
    };
    e.prototype = {constructor: e, select: function () {
        var t = this.$menu.find(".active").attr("data-value");
        return this.$element.val(this.updater(t)).change(), this.hide()
    }, updater: function (t) {
        return t
    }, show: function () {
        var e = t.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
        return this.$menu.insertAfter(this.$element).css({top: e.top + e.height, left: e.left}).show(), this.shown = !0, this
    }, hide: function () {
        return this.$menu.hide(), this.shown = !1, this
    }, lookup: function () {
        var e;
        return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (e = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, e ? this.process(e) : this)
    }, process: function (e) {
        var n = this;
        return e = t.grep(e, function (t) {
            return n.matcher(t)
        }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
    }, matcher: function (t) {
        return~t.toLowerCase().indexOf(this.query.toLowerCase())
    }, sorter: function (t) {
        for (var e, n = [], i = [], r = []; e = t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? i.push(e) : r.push(e) : n.push(e);
        return n.concat(i, r)
    }, highlighter: function (t) {
        var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        return t.replace(new RegExp("(" + e + ")", "ig"), function (t, e) {
            return"<strong>" + e + "</strong>"
        })
    }, render: function (e) {
        var n = this;
        return e = t(e).map(function (e, i) {
            return e = t(n.options.item).attr("data-value", i), e.find("a").html(n.highlighter(i)), e[0]
        }), e.first().addClass("active"), this.$menu.html(e), this
    }, next: function () {
        var e = this.$menu.find(".active").removeClass("active"), n = e.next();
        n.length || (n = t(this.$menu.find("li")[0])), n.addClass("active")
    }, prev: function () {
        var t = this.$menu.find(".active").removeClass("active"), e = t.prev();
        e.length || (e = this.$menu.find("li").last()), e.addClass("active")
    }, listen: function () {
        this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
    }, eventSupported: function (t) {
        var e = t in this.$element;
        return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
    }, move: function (t) {
        if (this.shown) {
            switch (t.keyCode) {
                case 9:
                case 13:
                case 27:
                    t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.prev();
                    break;
                case 40:
                    t.preventDefault(), this.next()
            }
            t.stopPropagation()
        }
    }, keydown: function (e) {
        this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
    }, keypress: function (t) {
        this.suppressKeyPressRepeat || this.move(t)
    }, keyup: function (t) {
        switch (t.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
            case 13:
                if (!this.shown)return;
                this.select();
                break;
            case 27:
                if (!this.shown)return;
                this.hide();
                break;
            default:
                this.lookup()
        }
        t.stopPropagation(), t.preventDefault()
    }, focus: function () {
        this.focused = !0
    }, blur: function () {
        this.focused = !1, !this.mousedover && this.shown && this.hide()
    }, click: function (t) {
        t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
    }, mouseenter: function (e) {
        this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
    }, mouseleave: function () {
        this.mousedover = !1, !this.focused && this.shown && this.hide()
    }};
    var n = t.fn.typeahead;
    t.fn.typeahead = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("typeahead"), o = "object" == typeof n && n;
            r || i.data("typeahead", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.typeahead.defaults = {source: [], items: 8, menu: '<ul class="typeahead dropdown-menu"></ul>', item: '<li><a href="#"></a></li>', minLength: 1}, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function () {
        return t.fn.typeahead = n, this
    }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function () {
        var e = t(this);
        e.data("typeahead") || e.typeahead(e.data())
    })
}(window.jQuery), function () {
}.call(this), function (t, e, n) {
    "use strict";
    t.fn.backstretch = function (i, o) {
        return(i === n || 0 === i.length) && t.error("No images were supplied for Backstretch"), 0 === t(e).scrollTop() && e.scrollTo(0, 0), this.each(function () {
            var e = t(this), n = e.data("backstretch");
            n && (o = t.extend(n.options, o), n.destroy(!0)), n = new r(this, i, o), e.data("backstretch", n)
        })
    }, t.backstretch = function (e, n) {
        return t("body").backstretch(e, n).data("backstretch")
    }, t.expr[":"].backstretch = function (e) {
        return t(e).data("backstretch") !== n
    }, t.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5e3, fade: 0};
    var i = {wrap: {left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999}, img: {position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxWidth: "none", zIndex: -999999}}, r = function (n, r, s) {
        if (this.options = t.extend({}, t.fn.backstretch.defaults, s || {}), this.images = t.isArray(r) ? r : [r], t.each(this.images, function () {
            t("<img />")[0].src = this
        }), this.isBody = n === document.body, this.$container = t(n), this.$wrap = t('<div class="backstretch"></div>').css(i.wrap).appendTo(this.$container), this.$root = this.isBody ? o ? t(e) : t(document) : this.$container, !this.isBody) {
            var a = this.$container.css("position"), l = this.$container.css("zIndex");
            this.$container.css({position: "static" === a ? "relative" : a, zIndex: "auto" === l ? 0 : l, background: "none"}), this.$wrap.css({zIndex: -999998})
        }
        this.$wrap.css({position: this.isBody && o ? "fixed" : "absolute"}), this.index = 0, this.show(this.index), t(e).on("resize.backstretch", t.proxy(this.resize, this)).on("orientationchange.backstretch", t.proxy(function () {
            this.isBody && 0 === e.pageYOffset && (e.scrollTo(0, 1), this.resize())
        }, this))
    };
    r.prototype = {resize: function () {
        try {
            var t, n = {left: 0, top: 0}, i = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = i, o = this.isBody ? e.innerHeight ? e.innerHeight : this.$root.height() : this.$root.innerHeight(), s = r / this.$img.data("ratio");
            s >= o ? (t = (s - o) / 2, this.options.centeredY && (n.top = "-" + t + "px")) : (s = o, r = s * this.$img.data("ratio"), t = (r - i) / 2, this.options.centeredX && (n.left = "-" + t + "px")), this.$wrap.css({width: i, height: o}).find("img:not(.deleteable)").css({width: r, height: s}).css(n)
        } catch (a) {
        }
        return this
    }, show: function (e) {
        if (!(Math.abs(e) > this.images.length - 1)) {
            this.index = e;
            var n = this, r = n.$wrap.find("img").addClass("deleteable"), o = t.Event("backstretch.show", {relatedTarget: n.$container[0]});
            return clearInterval(n.interval), n.$img = t("<img />").css(i.img).bind("load",function (e) {
                var i = this.width || t(e.target).width(), s = this.height || t(e.target).height();
                t(this).data("ratio", i / s), t(this).fadeIn(n.options.speed || n.options.fade, function () {
                    r.remove(), n.paused || n.cycle(), n.$container.trigger(o, n)
                }), n.resize()
            }).appendTo(n.$wrap), n.$img.attr("src", n.images[e]), n
        }
    }, next: function () {
        return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
    }, prev: function () {
        return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
    }, pause: function () {
        return this.paused = !0, this
    }, resume: function () {
        return this.paused = !1, this.next(), this
    }, cycle: function () {
        return this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(t.proxy(function () {
            this.paused || this.next()
        }, this), this.options.duration)), this
    }, destroy: function (n) {
        t(e).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch")
    }};
    var o = function () {
        var t = navigator.userAgent, n = navigator.platform, i = t.match(/AppleWebKit\/([0-9]+)/), r = !!i && i[1], o = t.match(/Fennec\/([0-9]+)/), s = !!o && o[1], a = t.match(/Opera Mobi\/([0-9]+)/), l = !!a && a[1], u = t.match(/MSIE ([0-9]+)/), c = !!u && u[1];
        return!((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && r && 534 > r || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || a && 7458 > l || t.indexOf("Android") > -1 && r && 533 > r || s && 6 > s || "palmGetResource"in e && r && 534 > r || t.indexOf("MeeGo") > -1 && t.indexOf("NokiaBrowser/8.5.0") > -1 || c && 6 >= c)
    }()
}(jQuery, window), function () {
}.call(this);