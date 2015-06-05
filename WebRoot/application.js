! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = oe.type(t);
        return "function" === n || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (oe.isFunction(e))
            return oe.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return oe.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (fe.test(e))
                return oe.filter(e, t, n);
            e = oe.filter(e, t)
        }
        return oe.grep(t, function(t) {
            return oe.inArray(t, e) >= 0 !== n
        })
    }

    function r(t, e) {
        do
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = we[t] = {};
        return oe.each(t.match(xe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (me.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (s(), oe.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Ee, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : je.test(n) ? oe.parseJSON(n) : n
                } catch (r) {}
                oe.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (oe.acceptData(t)) {
            var r, o, s = oe.expando,
                a = t.nodeType,
                l = a ? oe.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = a ? t[s] = Y.pop() || oe.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: oe.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = oe.extend(l[u], e) : l[u].data = oe.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[oe.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[oe.camelCase(e)])) : r = o, r
        }
    }

    function h(t, e, n) {
        if (oe.acceptData(t)) {
            var i, r, o = t.nodeType,
                s = o ? oe.cache : t,
                a = o ? t[oe.expando] : oe.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in i ? e = [e] : (e = oe.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;)
                        delete i[e[r]];
                    if (n ? !u(i) : !oe.isEmptyObject(i))
                        return
                }
                (n || (delete s[a].data, u(s[a]))) && (o ? oe.cleanData([t], !0) : ie.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return me.activeElement
        } catch (t) {}
    }

    function m(t) {
        var e = ze.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;)
                n.createElement(e.pop());
        return n
    }

    function g(t, e) {
        var n, i, r = 0,
            o = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)!e || oe.nodeName(i, e) ? o.push(i) : oe.merge(o, g(i, e));
        return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], o) : o
    }

    function v(t) {
        qe.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
    }

    function x(t) {
        var e = Ye.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            oe._data(n, "globalEval", !e || oe._data(e[i], "globalEval"))
    }

    function _(t, e) {
        if (1 === e.nodeType && oe.hasData(t)) {
            var n, i, r, o = oe._data(t),
                s = oe._data(e, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++)
                        oe.event.add(e, n, a[n][i])
            }
            s.data && (s.data = oe.extend({}, s.data))
        }
    }

    function T(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[oe.expando]) {
                r = oe._data(e);
                for (i in r.events)
                    oe.removeEvent(e, i, r.handle);
                e.removeAttribute(oe.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && qe.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, n) {
        var i = oe(n.createElement(e)).appendTo(n.body),
            r = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : oe.css(i[0], "display");
        return i.detach(), r
    }

    function j(t) {
        var e = me,
            n = tn[t];
        return n || (n = C(t, e), "none" !== n && n || (Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Ze.detach()), tn[t] = n), n
    }

    function E(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n)
                    return n ? (delete this.get, void 0) : (this.get = e).apply(this, arguments)
            }
        }
    }

    function k(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = pn.length; r--;)
            if (e = pn[r] + n, e in t)
                return e;
        return i
    }

    function N(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
            i = t[s], i.style && (o[s] = oe._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (o[s] = oe._data(i, "olddisplay", j(i.nodeName)))) : o[s] || (r = Se(i), (n && "none" !== n || !r) && oe._data(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function S(t, e, n) {
        var i = cn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function D(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += oe.css(t, n + Ne[o], !0, r)), i ? ("content" === n && (s -= oe.css(t, "padding" + Ne[o], !0, r)), "margin" !== n && (s -= oe.css(t, "border" + Ne[o] + "Width", !0, r))) : (s += oe.css(t, "padding" + Ne[o], !0, r), "padding" !== n && (s += oe.css(t, "border" + Ne[o] + "Width", !0, r)));
        return s
    }

    function q(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = en(t),
            s = ie.boxSizing() && "border-box" === oe.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = nn(t, e, o), (0 > r || null == r) && (r = t.style[e]), on.test(r))
                return r;
            i = s && (ie.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + D(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function A(t, e, n, i, r) {
        return new A.prototype.init(t, e, n, i, r)
    }

    function L() {
        return setTimeout(function() {
            mn = void 0
        }), mn = oe.now()
    }

    function M(t, e) {
        var n, i = {
                height: t
            }, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            n = Ne[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function F(t, e, n) {
        for (var i, r = (wn[e] || []).concat(wn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }

    function H(t, e, n) {
        var i, r, o, s, a, l, u, c, h = this,
            d = {}, f = t.style,
            p = t.nodeType && Se(t),
            m = oe._data(t, "fxshow");
        n.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = oe.css(t, "display"), c = j(t.nodeName), "none" === u && (u = c), "inline" === u && "none" === oe.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== c ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], vn.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    p = !0
                }
                d[i] = m && m[i] || oe.style(t, i)
            }
        if (!oe.isEmptyObject(d)) {
            m ? "hidden" in m && (p = m.hidden) : m = oe._data(t, "fxshow", {}), o && (m.hidden = !p), p ? oe(t).show() : h.done(function() {
                oe(t).hide()
            }), h.done(function() {
                var e;
                oe._removeData(t, "fxshow");
                for (e in d)
                    oe.style(t, e, d[e])
            });
            for (i in d)
                s = F(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function z(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = oe.camelCase(n), r = e[i], o = t[n], oe.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = oe.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = r)
            } else
                e[i] = r
    }

    function O(t, e, n) {
        var i, r, o = 0,
            s = xn.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r)
                    return !1;
                for (var e = mn || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)
                    u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
            }, u = a.promise({
                elem: t,
                props: oe.extend({}, e),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: mn || L(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = oe.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; i > n; n++)
                        u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (z(c, u.opts.specialEasing); s > o; o++)
            if (i = xn[o].call(u, t, c, u.opts))
                return i;
        return oe.map(c, F, u), oe.isFunction(u.opts.start) && u.opts.start.call(t, u), oe.fx.timer(oe.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(xe) || [];
            if (oe.isFunction(n))
                for (; i = o[r++];)
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function I(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, oe.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {}, s = t === Un;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function P(t, e) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && oe.extend(!0, t, n), t
    }

    function B(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];)
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n)
            o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function R(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else
        if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"])
                    e = s(e);
                else
                    try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + o
                        }
                    }
        }
        return {
            state: "success",
            data: e
        }
    }

    function $(t, e, n, i) {
        var r;
        if (oe.isArray(e))
            oe.each(e, function(e, r) {
                n || Qn.test(t) ? i(t, r) : $(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== oe.type(e))
            i(t, e);
        else
            for (r in e)
                $(t + "[" + r + "]", e[r], n, i)
    }

    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function X() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function V(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Y = [],
        Q = Y.slice,
        G = Y.concat,
        J = Y.push,
        K = Y.indexOf,
        Z = {}, te = Z.toString,
        ee = Z.hasOwnProperty,
        ne = "".trim,
        ie = {}, re = "1.11.0",
        oe = function(t, e) {
            return new oe.fn.init(t, e)
        }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ue = function(t, e) {
            return e.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function(t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return oe.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(oe.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r)
                    t = s[i], n = r[i], s !== n && (u && n && (oe.isPlainObject(n) || (e = oe.isArray(n))) ? (e ? (e = !1, o = t && oe.isArray(t) ? t : []) : o = t && oe.isPlainObject(t) ? t : {}, s[i] = oe.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === oe.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === oe.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (ie.ownLast)
                for (e in t)
                    return ee.call(t, e);
            for (e in t)
            ;
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && oe.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(ae, "ms-").replace(le, ue)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], i), r !== !1); o++)
                ;
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1)
                            break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++)
            ;
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1)
                        break;
            return t
        },
        trim: ne && !ne.call("﻿ ") ? function(t) {
            return null == t ? "" : ne.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(se, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (K)
                    return K.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;)
                t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];)
                    t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)
                i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; s > o; o++)
                    r = e(t[o], o, i), null != r && l.push(r);
            else
                for (o in t)
                    r = e(t[o], o, i), null != r && l.push(r);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), oe.isFunction(t) ? (n = Q.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(Q.call(arguments)))
            }, i.guid = t.guid = t.guid || oe.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, h, p, m, g;
            if ((e ? e.ownerDocument || e : I) !== A && q(e), e = e || A, n = n || [], !t || "string" != typeof t)
                return n;
            if (1 !== (a = e.nodeType) && 9 !== a)
                return [];
            if (M && !i) {
                if (r = ye.exec(t))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && O(e, o) && o.id === s)
                            return n.push(o), n
                    } else {
                        if (r[2])
                            return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = r[3]) && T.getElementsByClassName && e.getElementsByClassName)
                            return Z.apply(n, e.getElementsByClassName(s)), n
                    }
                if (T.qsa && (!F || !F.test(t))) {
                    if (p = h = W, m = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = d(t), (h = e.getAttribute("id")) ? p = h.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)
                            u[l] = p + f(u[l]);
                        m = be.test(t) && c(e.parentNode) || e, g = u.join(",")
                    }
                    if (g)
                        try {
                            return Z.apply(n, m.querySelectorAll(g)), n
                        } catch (v) {} finally {
                            h || e.removeAttribute("id")
                        }
                }
            }
            return w(t.replace(le, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[W] = !0, t
        }

        function r(t) {
            var e = A.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;)
                C.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;)
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function h() {}

        function d(t, n) {
            var i, r, o, s, a, l, u, c = $[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t, l = [], u = C.preFilter; a;) {
                (!i || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in C.filter)!(r = pe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : $(t, l).slice(0)
        }

        function f(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = B++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            } : function(e, n, s) {
                var a, l, u = [P, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (l = e[W] || (e[W] = {}), (a = l[i]) && a[0] === P && a[1] === o)
                                return u[2] = a[2];
                            if (l[i] = u, u[2] = t(e, n, s))
                                return !0
                        }
            }
        }

        function m(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)
                (o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[W] && (r = v(r)), o && !o[W] && (o = v(o, s)), i(function(i, s, a, l) {
                var u, c, h, d = [],
                    f = [],
                    p = s.length,
                    m = i || x(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !i && e ? m : g(m, d, t, a, l),
                    y = n ? o || (i ? t : p || r) ? [] : s : v;
                if (n && n(v, y, a, l), r)
                    for (u = g(y, f), r(u, [], a, l), c = u.length; c--;)
                        (h = u[c]) && (y[f[c]] = !(v[f[c]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = y.length; c--;)
                                (h = y[c]) && u.push(v[c] = h);
                            o(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)
                            (h = y[c]) && (u = o ? ee.call(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                    }
                } else
                    y = g(y === s ? y.splice(p, y.length) : y), o ? o(null, s, y, l) : Z.apply(s, y)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = C.relative[t[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                    return t === e
                }, s, !0), u = p(function(t) {
                    return ee.call(e, t) > -1
                }, s, !0), c = [
                    function(t, n, i) {
                        return !o && (i || n !== N) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }
                ]; r > a; a++)
                if (n = C.relative[t[a].type])
                    c = [p(m(c), n)];
                else {
                    if (n = C.filter[t[a].type].apply(null, t[a].matches), n[W]) {
                        for (i = ++a; r > i && !C.relative[t[i].type]; i++)
                        ;
                        return v(a > 1 && m(c), a > 1 && f(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && f(t))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function b(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, l, u) {
                    var c, h, d, f = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = N,
                        b = i || o && C.find.TAG("*", u),
                        x = P += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (N = s !== A && s); p !== w && null != (c = b[p]); p++) {
                        if (o && c) {
                            for (h = 0; d = t[h++];)
                                if (d(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (P = x)
                        }
                        r && ((c = !d && c) && f--, i && m.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (h = 0; d = n[h++];)
                            d(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;)
                                    m[p] || v[p] || (v[p] = J.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (P = x, N = y), m
                };
            return r ? i(s) : s
        }

        function x(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }

        function w(t, e, n, i) {
            var r, o, s, a, l, u = d(t);
            if (!i && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === e.nodeType && M && C.relative[o[1].type]) {
                    if (e = (C.find.ID(s.matches[0].replace(we, _e), e) || [])[0], !e)
                        return n;
                    t = t.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(we, _e), be.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && f(o), !t)
                            return Z.apply(n, i), n;
                        break
                    }
            }
            return k(t, u)(i, e, !M, n, be.test(t) && c(e.parentNode) || e), n
        }
        var _, T, C, j, E, k, N, S, D, q, A, L, M, F, H, z, O, W = "sizzle" + -new Date,
            I = t.document,
            P = 0,
            B = 0,
            R = n(),
            $ = n(),
            U = n(),
            X = function(t, e) {
                return t === e && (D = !0), 0
            }, V = "undefined",
            Y = 1 << 31,
            Q = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            K = G.push,
            Z = G.push,
            te = G.slice,
            ee = G.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t)
                        return e;
                return -1
            }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            se = "\\[" + ie + "*(" + re + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ie + "*\\]",
            ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ue = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(ae),
            fe = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            _e = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(G = te.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
        } catch (Te) {
            Z = {
                apply: G.length ? function(t, e) {
                    K.apply(t, te.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];)
                    ;
                    t.length = n - 1
                }
            }
        }
        T = e.support = {}, E = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, q = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : I,
                i = n.defaultView;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, L = n.documentElement, M = !E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                q()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                q()
            })), T.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), T.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), T.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), T.getById = r(function(t) {
                return L.appendChild(t).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), T.getById ? (C.find.ID = function(t, e) {
                if (typeof e.getElementById !== V && M) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = T.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== V && M ? e.getElementsByClassName(t) : void 0
            }, H = [], F = [], (T.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && F.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || F.push(":checked")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
            })), (T.matchesSelector = ve.test(z = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                T.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), H.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), H = H.length && new RegExp(H.join("|")), e = ve.test(L.compareDocumentPosition), O = e || ve.test(L.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e)
                    return D = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !T.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === I && O(I, t) ? -1 : e === n || e.ownerDocument === I && O(I, e) ? 1 : S ? ee.call(S, t) - ee.call(S, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e)
                    return D = !0, 0;
                var i, r = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!o || !a)
                    return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : S ? ee.call(S, t) - ee.call(S, e) : 0;
                if (o === a)
                    return s(t, e);
                for (i = t; i = i.parentNode;)
                    l.unshift(i);
                for (i = e; i = i.parentNode;)
                    u.unshift(i);
                for (; l[r] === u[r];)
                    r++;
                return r ? s(l[r], u[r]) : l[r] === I ? -1 : u[r] === I ? 1 : 0
            }, n) : A
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== A && q(t), n = n.replace(he, "='$1']"), !(!T.matchesSelector || !M || H && H.test(n) || F && F.test(n)))
                try {
                    var i = z.call(t, n);
                    if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (r) {}
            return e(n, A, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== A && q(t), O(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== A && q(t);
            var n = C.attrHandle[e.toLowerCase()],
                i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
            return void 0 !== i ? i : T.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (D = !T.detectDuplicates, S = !T.sortStable && t.slice(0), t.sort(X), D) {
                for (; e = t[r++];)
                    e === t[r] && (i = n.push(r));
                for (; i--;)
                    t.splice(n[i], 1)
            }
            return S = null, t
        }, j = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += j(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++];)
                    n += j(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, _e), t[3] = (t[4] || t[5] || "").replace(we, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[5] && t[2];
                    return pe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && de.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, _e).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = R[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && R(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[W] || (g[W] = {}), u = c[t] || [], f = u[0] === P && u[1], d = u[0] === P && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (d = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++d && h === e) {
                                        c[t] = [P, f, d];
                                        break
                                    }
                            } else if (y && (u = (e[W] || (e[W] = {}))[t]) && u[0] === P)
                                d = u[1];
                            else
                                for (;
                                    (h = ++f && h && h[m] || (d = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[W] || (h[W] = {}))[t] = [P, d]), h !== e));)
                            ;
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[W] ? o(n) : o.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;)
                            i = ee.call(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = k(t.replace(le, "$1"));
                    return r[W] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)
                            (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || j(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, _e).toLowerCase(),
                    function(e) {
                        var n;
                        do
                            if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !! t.checked || "option" === e && !! t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !C.pseudos.empty(t)
                },
                header: function(t) {
                    return ge.test(t.nodeName)
                },
                input: function(t) {
                    return me.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (_ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[_] = a(_);
        for (_ in {
            submit: !0,
            reset: !0
        })
            C.pseudos[_] = l(_);
        return h.prototype = C.filters = C.pseudos, C.setFilters = new h, k = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = U[t + " "];
            if (!o) {
                for (e || (e = d(t)), n = e.length; n--;)
                    o = y(e[n]), o[W] ? i.push(o) : r.push(o);
                o = U(t, b(r, i))
            }
            return o
        }, T.sortStable = W.split("").sort(X).join("") === W, T.detectDuplicates = !! D, q(), T.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(A.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), T.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var he = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    oe.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, oe.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t)
                return this.pushStack(oe(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (oe.contains(i[e], this))
                            return !0
                }));
            for (e = 0; r > e; e++)
                oe.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && he.test(t) ? oe(t) : t || [], !1).length
        }
    });
    var pe, me = t.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = oe.fn.init = function(t, e) {
            var n, i;
            if (!t)
                return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !n || !n[1] && e)
                    return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), de.test(n[1]) && oe.isPlainObject(e))
                        for (n in e)
                            oe.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = me.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2])
                        return pe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = me, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
        };
    ve.prototype = oe.fn, pe = oe(me);
    var ye = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !oe(r).is(n));)
                1 === r.nodeType && i.push(r), r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), oe.fn.extend({
        has: function(t) {
            var e, n = oe(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (oe.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = he.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), oe.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return oe.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return oe.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return oe.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return oe.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return oe.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return oe.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return oe.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return oe.sibling(t.firstChild)
        },
        contents: function(t) {
            return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
        }
    }, function(t, e) {
        oe.fn[t] = function(n, i) {
            var r = oe.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (be[t] || (r = oe.unique(r)), ye.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var xe = /\S+/g,
        we = {};
    oe.Callbacks = function(t) {
        t = "string" == typeof t ? we[t] || o(t) : oe.extend({}, t);
        var e, n, i, r, s, a, l = [],
            u = !t.once && [],
            c = function(o) {
                for (n = t.memory && o, i = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++)
                    if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : h.disable())
            }, h = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(e) {
                            oe.each(e, function(e, n) {
                                var i = oe.type(n);
                                "function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), e ? r = l.length : n && (a = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(t, n) {
                        for (var i;
                            (i = oe.inArray(n, l, i)) > -1;)
                            l.splice(i, 1), e && (r >= i && r--, s >= i && s--)
                    }), this
                },
                has: function(t) {
                    return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, n) {
                    return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return h
    }, oe.extend({
        Deferred: function(t) {
            var e = [
                ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                ["notify", "progress", oe.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(e, function(e, o) {
                                var s = oe.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && oe.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? oe.extend(t, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, oe.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = Q.call(arguments),
                s = o.length,
                a = 1 !== s || t && oe.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : oe.Deferred(),
                u = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)
                    o[r] && oe.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var _e;
    oe.fn.ready = function(t) {
        return oe.ready.promise().done(t), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!me.body)
                    return setTimeout(oe.ready);
                oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (_e.resolveWith(me, [oe]), oe.fn.trigger && oe(me).trigger("ready").off("ready"))
            }
        }
    }), oe.ready.promise = function(e) {
        if (!_e)
            if (_e = oe.Deferred(), "complete" === me.readyState)
                setTimeout(oe.ready);
            else
        if (me.addEventListener)
            me.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            me.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && me.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    s(), oe.ready()
                }
            }()
        }
        return _e.promise(e)
    };
    var Te, Ce = "undefined";
    for (Te in oe(ie))
        break;
    ie.ownLast = "0" !== Te, ie.inlineBlockNeedsLayout = !1, oe(function() {
        var t, e, n = me.getElementsByTagName("body")[0];
        n && (t = me.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = me.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null)
    }),
    function() {
        var t = me.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), oe.acceptData = function(t) {
        var e = oe.noData[(t.nodeName + " ").toLowerCase()],
            n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !! t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return h(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return h(t, e, !0)
        }
    }), oe.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;)
                        i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i]));
                    oe._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                oe.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, t, e)
            }) : o ? l(o, t, oe.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                oe.removeData(this, t)
            })
        }
    }), oe.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = oe._data(t, e), n && (!i || oe.isArray(n) ? i = oe._data(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = oe.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = oe._queueHooks(t, e),
                s = function() {
                    oe.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return oe._data(t, n) || oe._data(t, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(t, e + "queue"), oe._removeData(t, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = oe.queue(this, t, e);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                oe.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = oe.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                n = oe._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = ["Top", "Right", "Bottom", "Left"],
        Se = function(t, e) {
            return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
        }, De = oe.access = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === oe.type(n)) {
                r = !0;
                for (a in n)
                    oe.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                return u.call(oe(t), n)
            })), e))
                for (; l > a; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        }, qe = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = me.createDocumentFragment(),
            e = me.createElement("div"),
            n = me.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !! e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ie.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
            ie.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ie.deleteExpando = !1
            }
        }
        t = e = n = null
    }(),
    function() {
        var e, n, i = me.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ae = /^(?:input|select|textarea)$/i,
        Le = /^key/,
        Me = /^(?:mouse|contextmenu)|click/,
        Fe = /^(?:focusinfocus|focusoutblur)$/,
        He = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, f, p, m, g = oe._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = oe.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                    return typeof oe === Ce || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(xe) || [""], a = e.length; a--;)
                    o = He.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = oe.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = oe.event.special[f] || {}, h = oe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), oe.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, f, p, m, g = oe.hasData(t) && oe._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(xe) || [""], u = e.length; u--;)
                    if (a = He.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = oe.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;)
                            s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || oe.removeEvent(t, f, g.handle), delete c[f])
                    } else
                        for (f in c)
                            oe.event.remove(t, f + e[u], n, i, !0);
                oe.isEmptyObject(c) && (delete g.handle, oe._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, h, d = [i || me],
                f = ee.call(e, "type") ? e.type : e,
                p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[oe.expando] ? e : new oe.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), u = oe.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !oe.isWindow(i)) {
                    for (l = u.delegateType || f, Fe.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a), c = a;
                    c === (i.ownerDocument || me) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0;
                    (a = d[h++]) && !e.isPropagationStopped();)
                    e.type = h > 1 ? l : u.bindType || f, o = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && oe.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && oe.acceptData(i) && s && i[f] && !oe.isWindow(i)) {
                    c = i[s], c && (i[s] = null), oe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (m) {}
                    oe.event.triggered = void 0, c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = oe.event.fix(t);
            var e, n, i, r, o, s = [],
                a = Q.call(arguments),
                l = (oe._data(this, "events") || {})[t.type] || [],
                u = oe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = oe.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)
                        (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], o = 0; a > o; o++)
                            i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[oe.expando])
                return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Me.test(r) ? this.mouseHooks : Le.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new oe.Event(o), e = i.length; e--;)
                n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || me, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return oe.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = oe.extend(new oe.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? oe.event.trigger(r, null, e) : oe.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = me.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Ce && (t[i] = null), t.detachEvent(i, n))
    }, oe.Event = function(t, e) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? d : f) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), this[oe.expando] = !0, void 0) : new oe.Event(t, e)
    }, oe.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = d, this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        oe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !oe.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ie.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : (oe.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : (oe.event.remove(this, "._submit"), void 0)
        }
    }), ie.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
            })), !1) : (oe.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ae.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
                }), oe._data(e, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Ae.test(this.nodeName)
        }
    }), ie.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            oe.event.simulate(e, t.target, oe.event.fix(t), !0)
        };
        oe.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = oe._data(i, e);
                r || i.addEventListener(t, n, !0), oe._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = oe._data(i, e) - 1;
                r ? oe._data(i, e, r) : (i.removeEventListener(t, n, !0), oe._removeData(i, e))
            }
        }
    }), oe.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t)
                    this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)
                i = f;
            else if (!i)
                return this;
            return 1 === r && (s = i, i = function(t) {
                return oe().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                oe.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                oe.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? oe.event.trigger(t, e, n, !0) : void 0
        }
    });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        We = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        Ie = /^\s+/,
        Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Be = /<([\w:]+)/,
        Re = /<tbody/i,
        $e = /<|&#?\w+;/,
        Ue = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ye = /^true\/(.*)/,
        Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Je = m(me),
        Ke = Je.appendChild(me.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a, l = oe.contains(t.ownerDocument, t);
            if (ie.html5Clone || oe.isXMLDoc(t) || !We.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))
                for (i = g(o), a = g(t), s = 0; null != (r = a[s]); ++s)
                    i[s] && T(r, i[s]);
            if (e)
                if (n)
                    for (a = a || g(t), i = i || g(o), s = 0; null != (r = a[s]); s++)
                        _(r, i[s]);
                else
                    _(t, o);
            return i = g(o, "script"), i.length > 0 && w(i, !l && g(t, "script")), i = a = r = null, o
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, l, u, c, h = t.length, d = m(e), f = [], p = 0; h > p; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === oe.type(o))
                        oe.merge(f, o.nodeType ? [o] : o);
                    else
            if ($e.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, a.innerHTML = c[1] + o.replace(Pe, "<$1></$2>") + c[2], r = c[0]; r--;)
                    a = a.lastChild;
                if (!ie.leadingWhitespace && Ie.test(o) && f.push(e.createTextNode(Ie.exec(o)[0])), !ie.tbody)
                    for (o = "table" !== l || Re.test(o) ? "<table>" !== c[1] || Re.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;)
                        oe.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (oe.merge(f, a.childNodes), a.textContent = ""; a.firstChild;)
                    a.removeChild(a.firstChild);
                a = d.lastChild
            } else
                f.push(e.createTextNode(o));
            for (a && d.removeChild(a), ie.appendChecked || oe.grep(g(f, "input"), v), p = 0; o = f[p++];)
                if ((!i || -1 === oe.inArray(o, i)) && (s = oe.contains(o.ownerDocument, o), a = g(d.appendChild(o), "script"), s && w(a), n))
                    for (r = 0; o = a[r++];)
                        Ve.test(o.type || "") && n.push(o);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = oe.expando, l = oe.cache, u = ie.deleteExpando, c = oe.event.special; null != (n = t[s]); s++)
                if ((e || oe.acceptData(n)) && (r = n[a], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Ce ? n.removeAttribute(a) : n[a] = null, Y.push(r))
                }
        }
    }), oe.fn.extend({
        text: function(t) {
            return De(this, function(t) {
                return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? oe.filter(t, this) : this, r = 0; null != (n = i[r]); r++)
                e || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (e && oe.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild;)
                    t.removeChild(t.firstChild);
                t.options && oe.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return oe.clone(this, t, e)
            })
        },
        html: function(t) {
            return De(this, function(t) {
                var e = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof t || Ue.test(t) || !ie.htmlSerialize && We.test(t) || !ie.leadingWhitespace && Ie.test(t) || Ge[(Be.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Pe, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, oe.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = G.apply([], t);
            var n, i, r, o, s, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = t[0],
                f = oe.isFunction(d);
            if (f || u > 1 && "string" == typeof d && !ie.checkClone && Xe.test(d))
                return this.each(function(n) {
                    var i = c.eq(n);
                    f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
            if (u && (a = oe.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = oe.map(g(a, "script"), b), r = o.length; u > l; l++)
                    i = a, l !== h && (i = oe.clone(i, !0, !0), r && oe.merge(o, g(i, "script"))), e.call(this[l], i, l);
                if (r)
                    for (s = o[o.length - 1].ownerDocument, oe.map(o, x), l = 0; r > l; l++)
                        i = o[l], Ve.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                a = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        oe.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = oe(t), s = o.length - 1; s >= i; i++)
                n = i === s ? this : this.clone(!0), oe(o[i])[e](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ze, tn = {};
    ! function() {
        var t, e, n = me.createElement("div"),
            i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(t.style.opacity), ie.cssFloat = !! t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, ie.shrinkWrapBlocks = function() {
            var t, n, r, o;
            if (null == e) {
                if (t = me.getElementsByTagName("body")[0], !t)
                    return;
                o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), r = me.createElement("div"), t.appendChild(n).appendChild(r), e = !1, typeof r.style.zoom !== Ce && (r.style.cssText = i + ";width:1px;padding:1px;zoom:1", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", e = 3 !== r.offsetWidth), t.removeChild(n), t = n = r = null
            }
            return e
        }
    }();
    var en, nn, rn = /^margin/,
        on = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        sn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (en = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, nn = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || en(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || oe.contains(t.ownerDocument, t) || (s = oe.style(t, e)), on.test(s) && rn.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
    }) : me.documentElement.currentStyle && (en = function(t) {
        return t.currentStyle
    }, nn = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || en(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), on.test(s) && !sn.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
    }),
    function() {
        function e() {
            var e, n, i = me.getElementsByTagName("body")[0];
            i && (e = me.createElement("div"), n = me.createElement("div"), e.style.cssText = u, i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", oe.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                r = 4 === n.offsetWidth
            }), o = !0, s = !1, a = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(n, null) || {}).top, o = "4px" === (t.getComputedStyle(n, null) || {
                width: "4px"
            }).width), i.removeChild(e), n = i = null)
        }
        var n, i, r, o, s, a, l = me.createElement("div"),
            u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !! n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, oe.extend(ie, {
            reliableHiddenOffsets: function() {
                if (null != i)
                    return i;
                var t, e, n, r = me.createElement("div"),
                    o = me.getElementsByTagName("body")[0];
                if (o)
                    return r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = me.createElement("div"), t.style.cssText = u, o.appendChild(t).appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = r.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, o.removeChild(t), r = o = null, i
            },
            boxSizing: function() {
                return null == r && e(), r
            },
            boxSizingReliable: function() {
                return null == o && e(), o
            },
            pixelPosition: function() {
                return null == s && e(), s
            },
            reliableMarginRight: function() {
                var e, n, i, r;
                if (null == a && t.getComputedStyle) {
                    if (e = me.getElementsByTagName("body")[0], !e)
                        return;
                    n = me.createElement("div"), i = me.createElement("div"), n.style.cssText = u, e.appendChild(n).appendChild(i), r = i.appendChild(me.createElement("div")), r.style.cssText = i.style.cssText = c, r.style.marginRight = r.style.width = "0", i.style.width = "1px", a = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(n)
                }
                return a
            }
        })
    }(), oe.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e)
            s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)
            t.style[o] = s[o];
        return r
    };
    var an = /alpha\([^)]*\)/i,
        ln = /opacity\s*=\s*([^)]*)/,
        un = /^(none|table(?!-c[ea]).+)/,
        cn = new RegExp("^(" + ke + ")(.*)$", "i"),
        hn = new RegExp("^([+-])=(" + ke + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, fn = {
            letterSpacing: 0,
            fontWeight: 400
        }, pn = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = nn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = oe.camelCase(e),
                    l = t.style;
                if (e = oe.cssProps[a] || (oe.cssProps[a] = k(l, a)), s = oe.cssHooks[e] || oe.cssHooks[a], void 0 === n)
                    return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = hn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(oe.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || oe.cssNumber[a] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
                    try {
                        l[e] = "", l[e] = n
                    } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = oe.camelCase(e);
            return e = oe.cssProps[a] || (oe.cssProps[a] = k(t.style, a)), s = oe.cssHooks[e] || oe.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = nn(t, e, i)), "normal" === o && e in fn && (o = fn[e]), "" === n || n ? (r = parseFloat(o), n === !0 || oe.isNumeric(r) ? r || 0 : o) : o
        }
    }), oe.each(["height", "width"], function(t, e) {
        oe.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? 0 === t.offsetWidth && un.test(oe.css(t, "display")) ? oe.swap(t, dn, function() {
                    return q(t, e, i)
                }) : q(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && en(t);
                return S(t, n, i ? D(t, e, i, ie.boxSizing() && "border-box" === oe.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ie.opacity || (oe.cssHooks.opacity = {
        get: function(t, e) {
            return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
        }
    }), oe.cssHooks.marginRight = E(ie.reliableMarginRight, function(t, e) {
        return e ? oe.swap(t, {
            display: "inline-block"
        }, nn, [t, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        oe.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + Ne[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, rn.test(t) || (oe.cssHooks[t + e].set = S)
    }), oe.fn.extend({
        css: function(t, e) {
            return De(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (oe.isArray(e)) {
                    for (i = en(t), r = e.length; r > s; s++)
                        o[e[s]] = oe.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Se(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = A, A.prototype = {
        constructor: A,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = A.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, oe.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, oe.fx = A.prototype.init, oe.fx.step = {};
    var mn, gn, vn = /^(?:toggle|show|hide)$/,
        yn = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        bn = /queueHooks$/,
        xn = [H],
        wn = {
            "*": [
                function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = yn.exec(e),
                        o = r && r[3] || (oe.cssNumber[t] ? "" : "px"),
                        s = (oe.cssNumber[t] || "px" !== o && +i) && yn.exec(oe.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do
                            a = a || ".5", s /= a, oe.style(n.elem, t, s + o);
                        while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }
            ]
        };
    oe.Animation = oe.extend(O, {
        tweener: function(t, e) {
            oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++)
                n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? xn.unshift(t) : xn.push(t)
        }
    }), oe.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? oe.extend({}, t) : {
            complete: n || !n && e || oe.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !oe.isFunction(e) && e
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
        }, i
    }, oe.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Se).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = oe.isEmptyObject(t),
                o = oe.speed(e, n, i),
                s = function() {
                    var e = O(this, oe.extend({}, t), o);
                    (r || oe._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    o = oe.timers,
                    s = oe._data(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && bn.test(r) && i(s[r]);
                for (r = o.length; r--;)
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                (e || !n) && oe.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = oe._data(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = oe.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, oe.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function(t, e) {
        var n = oe.fn[e];
        oe.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, i, r)
        }
    }), oe.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        oe.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), oe.timers = [], oe.fx.tick = function() {
        var t, e = oe.timers,
            n = 0;
        for (mn = oe.now(); n < e.length; n++)
            t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || oe.fx.stop(), mn = void 0
    }, oe.fx.timer = function(t) {
        oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function() {
        gn || (gn = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function() {
        clearInterval(gn), gn = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fn.delay = function(t, e) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var t, e, n, i, r = me.createElement("div");
        r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = r.getElementsByTagName("a")[0], n = me.createElement("select"), i = n.appendChild(me.createElement("option")), e = r.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ie.getSetAttribute = "t" !== r.className, ie.style = /top/.test(t.getAttribute("style")), ie.hrefNormalized = "/a" === t.getAttribute("href"), ie.checkOn = !! e.value, ie.optSelected = i.selected, ie.enctype = !! me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, e = me.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value, t = e = n = i = r = null
    }();
    var _n = /\r/g;
    oe.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length)
                    return i = oe.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, oe(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return e = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_n, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = oe.find.attr(t, "value");
                    return null != e ? e : oe.text(t)
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (e = oe(n).val(), o)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = oe.makeArray(e), s = r.length; s--;)
                        if (i = r[s], oe.inArray(oe.valHooks.option.get(i), o) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            } else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(t, e) {
                return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Tn, Cn, jn = oe.expr.attrHandle,
        En = /^(?:checked|selected)$/i,
        kn = ie.getSetAttribute,
        Nn = ie.input;
    oe.fn.extend({
        attr: function(t, e) {
            return De(this, oe.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                oe.removeAttr(this, t)
            })
        }
    }), oe.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return typeof t.getAttribute === Ce ? oe.prop(t, e, n) : (1 === o && oe.isXMLDoc(t) || (e = e.toLowerCase(), i = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? Cn : Tn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = oe.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : (oe.removeAttr(t, e), void 0))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(xe);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];)
                    i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Nn && kn || !En.test(n) ? t[i] = !1 : t[oe.camelCase("default-" + n)] = t[i] = !1 : oe.attr(t, n, ""), t.removeAttribute(kn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), Cn = {
        set: function(t, e, n) {
            return e === !1 ? oe.removeAttr(t, n) : Nn && kn || !En.test(n) ? t.setAttribute(!kn && oe.propFix[n] || n, n) : t[oe.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = jn[e] || oe.find.attr;
        jn[e] = Nn && kn || !En.test(e) ? function(t, e, i) {
            var r, o;
            return i || (o = jn[e], jn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, jn[e] = o), r
        } : function(t, e, n) {
            return n ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Nn && kn || (oe.attrHooks.value = {
        set: function(t, e, n) {
            return oe.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Tn && Tn.set(t, e, n)
        }
    }), kn || (Tn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, jn.id = jn.name = jn.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    }, oe.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Tn.set(t, "" === e ? !1 : e, n)
        }
    }, oe.each(["width", "height"], function(t, e) {
        oe.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ie.style || (oe.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Sn = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(t, e) {
            return De(this, oe.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = oe.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !oe.isXMLDoc(t), o && (e = oe.propFix[e] || e, r = oe.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = oe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Sn.test(t.nodeName) || Dn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || oe.each(["href", "src"], function(t, e) {
        oe.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ie.enctype || (oe.propFix.enctype = "encoding");
    var qn = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(xe) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(qn, " ") : " ")) {
                        for (o = 0; r = e[o++];)
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = oe.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(xe) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(qn, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;)
                                i = i.replace(" " + r + " ", " ");
                        s = t ? oe.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : oe.isFunction(t) ? this.each(function(n) {
                oe(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var e, i = 0, r = oe(this), o = t.match(xe) || []; e = o[i++];)
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    (n === Ce || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(qn, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        oe.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), oe.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var An = oe.now(),
        Ln = /\?/,
        Mn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null,
            r = oe.trim(e + "");
        return r && !oe.trim(r.replace(Mn, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : oe.error("Invalid JSON: " + e)
    }, oe.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), n
    };
    var Fn, Hn, zn = /#.*$/,
        On = /([?&])_=[^&]*/,
        Wn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pn = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        Rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $n = {}, Un = {}, Xn = "*/".concat("*");
    try {
        Hn = location.href
    } catch (Vn) {
        Hn = me.createElement("a"), Hn.href = "", Hn = Hn.href
    }
    Fn = Rn.exec(Hn.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: In.test(Fn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? P(P(t, oe.ajaxSettings), e) : P(oe.ajaxSettings, t)
        },
        ajaxPrefilter: W($n),
        ajaxTransport: W(Un),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, c, v, y, x, _ = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = B(h, w, n)), y = R(h, y, w, r), r ? (h.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (oe.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (oe.etag[o] = x)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, r = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || _) + "", r ? p.resolveWith(d, [c, _, w]) : p.rejectWith(d, [w, _, v]), w.statusCode(g), g = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? c : v]), m.fireWith(d, [w, _]), l && (f.trigger("ajaxComplete", [w, h]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, l, u, c, h = oe.ajaxSetup({}, e),
                d = h.context || h,
                f = h.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                p = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = h.statusCode || {}, v = {}, y = {}, b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Wn.exec(s);)
                                    c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t)
                                    g[e] = [g[e], t[e]];
                            else
                                w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Hn) + "").replace(zn, "").replace(Bn, Fn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = oe.trim(h.dataType || "*").toLowerCase().match(xe) || [""], null == h.crossDomain && (i = Rn.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Fn[1] && i[2] === Fn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Fn[3] || ("http:" === Fn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)), I($n, h, e, w), 2 === b)
                return w;
            l = h.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pn.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Ln.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = On.test(o) ? o.replace(On, "$1_=" + An++) : o + (Ln.test(o) ? "&" : "?") + "_=" + An++)), h.ifModified && (oe.lastModified[o] && w.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && w.setRequestHeader("If-None-Match", oe.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : h.accepts["*"]);
            for (r in h.headers)
                w.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b))
                return w.abort();
            x = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[r](h[r]);
            if (u = I(Un, h, e, w)) {
                w.readyState = 1, l && f.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (_) {
                    if (!(2 > b))
                        throw _;
                    n(-1, _)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return oe.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return oe.get(t, void 0, e, "script")
        }
    }), oe.each(["get", "post"], function(t, e) {
        oe[e] = function(t, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        oe.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), oe._evalUrl = function(t) {
        return oe.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(t) {
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return oe.isFunction(t) ? this.each(function(e) {
                oe(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = oe(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = oe.isFunction(t);
            return this.each(function(n) {
                oe(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
    }, oe.expr.filters.visible = function(t) {
        return !oe.expr.filters.hidden(t)
    };
    var Yn = /%20/g,
        Qn = /\[\]$/,
        Gn = /\r?\n/g,
        Jn = /^(?:submit|button|image|reset|file)$/i,
        Kn = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t))
            oe.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                $(n, t[n], e, r);
        return i.join("&").replace(Yn, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && Kn.test(this.nodeName) && !Jn.test(t) && (this.checked || !qe.test(t))
            }).map(function(t, e) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Gn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Gn, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
    } : U;
    var Zn = 0,
        ti = {}, ei = oe.ajaxSettings.xhr();
    t.ActiveXObject && oe(t).on("unload", function() {
        for (var t in ti)
            ti[t](void 0, !0)
    }), ie.cors = !! ei && "withCredentials" in ei, ei = ie.ajax = !! ei, ei && oe.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, o = t.xhr(),
                        s = ++Zn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields)
                            o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(t.hasContent && t.data || null), e = function(n, r) {
                        var a, l, u;
                        if (e && (r || 4 === o.readyState))
                            if (delete ti[s], e = void 0, o.onreadystatechange = oe.noop, r)
                                4 !== o.readyState && o.abort();
                            else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && i(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = ti[s] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return oe.globalEval(t), t
            }
        }
    }), oe.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), oe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = me.head || oe("head")[0] || me.documentElement;
            return {
                send: function(i, r) {
                    e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ni = [],
        ii = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ni.pop() || oe.expando + "_" + An++;
            return this[t] = !0, t
        }
    }), oe.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ii, "$1" + r) : e.jsonp !== !1 && (e.url += (Ln.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || oe.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, ni.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || me;
        var i = de.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = oe.buildFragment([t], e, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var ri = oe.fn.load;
    oe.fn.load = function(t, e, n) {
        if ("string" != typeof t && ri)
            return ri.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = t.slice(a, t.length), t = t.slice(0, a)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && oe.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, r || [t.responseText, e, t])
        }), this
    }, oe.expr.filters.animated = function(t) {
        return oe.grep(oe.timers, function(e) {
            return t === e.elem
        }).length
    };
    var oi = t.document.documentElement;
    oe.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u, c = oe.css(t, "position"),
                h = oe(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = oe.css(t, "top"), l = oe.css(t, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, oe.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    oe.offset.setOffset(this, t, e)
                });
            var e, n, i = {
                    top: 0,
                    left: 0
                }, r = this[0],
                o = r && r.ownerDocument;
            if (o)
                return e = o.documentElement, oe.contains(e, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = V(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                return "fixed" === oe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (n = t.offset()), n.top += oe.css(t[0], "borderTopWidth", !0), n.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - oe.css(i, "marginTop", !0),
                    left: e.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || oi; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");)
                    t = t.offsetParent;
                return t || oi
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        oe.fn[t] = function(i) {
            return De(this, function(t, i, r) {
                var o = V(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : (o ? o.scrollTo(n ? oe(o).scrollLeft() : r, n ? r : oe(o).scrollTop()) : t[i] = r, void 0)
            }, t, i, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(t, e) {
        oe.cssHooks[e] = E(ie.pixelPosition, function(t, n) {
            return n ? (n = nn(t, e), on.test(n) ? oe(t).position()[e] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        oe.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            oe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return De(this, function(e, n, i) {
                    var r;
                    return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? oe.css(e, n, s) : oe.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var si = t.jQuery,
        ai = t.$;
    return oe.noConflict = function(e) {
        return t.$ === oe && (t.$ = ai), e && t.jQuery === oe && (t.jQuery = si), oe
    }, typeof e === Ce && (t.jQuery = t.$ = oe), oe
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(i) {
            var r, o, s, a, l, u, c, h;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("cross-domain"), l = a === e ? null : a, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), s = i.serializeArray();
                    var d = i.data("ujs:submit-button");
                    d && (s.push(d), i.data("ujs:submit-button", null))
                } else
                    i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                h = {
                    type: r || "GET",
                    data: s,
                    dataType: c,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r])
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: l
                }, u && (h.xhrFields = {
                    withCredentials: u
                }), o && (h.url = o);
                var f = n.ajax(h);
                return i.trigger("ajax:send", f), f
            }
            return !1
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function(e) {
            e.find(n.disableSelector).each(function() {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(n.enableSelector).each(function() {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function(e, n, i) {
            var r, o, s = t(),
                a = n || "input,textarea",
                l = e.find(a);
            return l.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)
                        return !0;
                    s = s.add(r)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var r = t(this),
            o = r.data("method"),
            s = r.data("params"),
            a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r))
            return n.stopEverything(i);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (a && (!o || "GET" === o) && !s)
                return !0;
            var l = n.handleRemote(r);
            return l === !1 ? n.enableElement(r) : l.error(function() {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r = t(this),
            o = r.data("remote") !== e,
            s = n.blankInputs(r, n.requiredInputSelector),
            a = n.nonBlankInputs(r, n.fileInputSelector);
        if (!n.allowAction(r))
            return n.stopEverything(i);
        if (s && r.attr("novalidate") == e && n.fire(r, "ajax:aborted:required", [s]))
            return n.stopEverything(i);
        if (o) {
            if (a) {
                setTimeout(function() {
                    n.disableFormElements(r)
                }, 13);
                var l = n.fire(r, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    n.enableFormElements(r)
                }, 13), l
            }
            return n.handleRemote(r), !1
        }
        setTimeout(function() {
            n.disableFormElements(r)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery);
var module, countdown = function(t) {
        "use strict";

        function e(t, e) {
            var n = t.getTime();
            return t.setUTCMonth(t.getUTCMonth() + e), Math.round((t.getTime() - n) / L)
        }

        function n(t) {
            var e = t.getTime(),
                n = new Date(e);
            return n.setUTCMonth(t.getUTCMonth() + 1), Math.round((n.getTime() - e) / L)
        }

        function i(t) {
            var e = t.getTime(),
                n = new Date(e);
            return n.setUTCFullYear(t.getUTCFullYear() + 1), Math.round((n.getTime() - e) / L)
        }

        function r(t, e) {
            return t + " " + (1 === t ? p[e] : m[e])
        }

        function o() {}

        function s(t, e) {
            switch (e) {
                case "seconds":
                    if (t.seconds !== D || isNaN(t.minutes))
                        return;
                    t.minutes++, t.seconds = 0;
                case "minutes":
                    if (t.minutes !== q || isNaN(t.hours))
                        return;
                    t.hours++, t.minutes = 0;
                case "hours":
                    if (t.hours !== A || isNaN(t.days))
                        return;
                    t.days++, t.hours = 0;
                case "days":
                    if (t.days !== M || isNaN(t.weeks))
                        return;
                    t.weeks++, t.days = 0;
                case "weeks":
                    if (t.weeks !== n(t.refMonth) / M || isNaN(t.months))
                        return;
                    t.months++, t.weeks = 0;
                case "months":
                    if (t.months !== F || isNaN(t.years))
                        return;
                    t.years++, t.months = 0;
                case "years":
                    if (t.years !== H || isNaN(t.decades))
                        return;
                    t.decades++, t.years = 0;
                case "decades":
                    if (t.decades !== z || isNaN(t.centuries))
                        return;
                    t.centuries++, t.decades = 0;
                case "centuries":
                    if (t.centuries !== O || isNaN(t.millennia))
                        return;
                    t.millennia++, t.centuries = 0
            }
        }

        function a(t, e, n, i, r, o) {
            return t[n] >= 0 && (e += t[n], delete t[n]), e /= r, 1 >= e + 1 ? 0 : t[i] >= 0 ? (t[i] = +(t[i] + e).toFixed(o), s(t, i), 0) : e
        }

        function l(t, e) {
            var r = a(t, 0, "milliseconds", "seconds", S, e);
            if (r && (r = a(t, r, "seconds", "minutes", D, e), r && (r = a(t, r, "minutes", "hours", q, e), r && (r = a(t, r, "hours", "days", A, e), r && (r = a(t, r, "days", "weeks", M, e), r && (r = a(t, r, "weeks", "months", n(t.refMonth) / M, e), r && (r = a(t, r, "months", "years", i(t.refMonth) / n(t.refMonth), e), r && (r = a(t, r, "years", "decades", H, e), r && (r = a(t, r, "decades", "centuries", z, e), r && (r = a(t, r, "centuries", "millennia", O, e)))))))))))
                throw new Error("Fractional unit overflow")
        }

        function u(t) {
            var n;
            for (t.milliseconds < 0 ? (n = W(-t.milliseconds / S), t.seconds -= n, t.milliseconds += n * S) : t.milliseconds >= S && (t.seconds += I(t.milliseconds / S), t.milliseconds %= S), t.seconds < 0 ? (n = W(-t.seconds / D), t.minutes -= n, t.seconds += n * D) : t.seconds >= D && (t.minutes += I(t.seconds / D), t.seconds %= D), t.minutes < 0 ? (n = W(-t.minutes / q), t.hours -= n, t.minutes += n * q) : t.minutes >= q && (t.hours += I(t.minutes / q), t.minutes %= q), t.hours < 0 ? (n = W(-t.hours / A), t.days -= n, t.hours += n * A) : t.hours >= A && (t.days += I(t.hours / A), t.hours %= A); t.days < 0;)
                t.months--, t.days += e(t.refMonth, 1);
            t.days >= M && (t.weeks += I(t.days / M), t.days %= M), t.months < 0 ? (n = W(-t.months / F), t.years -= n, t.months += n * F) : t.months >= F && (t.years += I(t.months / F), t.months %= F), t.years >= H && (t.decades += I(t.years / H), t.years %= H, t.decades >= z && (t.centuries += I(t.decades / z), t.decades %= z, t.centuries >= O && (t.millennia += I(t.centuries / O), t.centuries %= O)))
        }

        function c(t, n, i, r) {
            var o = 0;
            !(n & k) || o >= i ? (t.centuries += t.millennia * O, delete t.millennia) : t.millennia && o++, !(n & E) || o >= i ? (t.decades += t.centuries * z, delete t.centuries) : t.centuries && o++, !(n & j) || o >= i ? (t.years += t.decades * H, delete t.decades) : t.decades && o++, !(n & C) || o >= i ? (t.months += t.years * F, delete t.years) : t.years && o++, !(n & T) || o >= i ? (t.months && (t.days += e(t.refMonth, t.months)), delete t.months, t.days >= M && (t.weeks += I(t.days / M), t.days %= M)) : t.months && o++, !(n & _) || o >= i ? (t.days += t.weeks * M, delete t.weeks) : t.weeks && o++, !(n & w) || o >= i ? (t.hours += t.days * A, delete t.days) : t.days && o++, !(n & x) || o >= i ? (t.minutes += t.hours * q, delete t.hours) : t.hours && o++, !(n & b) || o >= i ? (t.seconds += t.minutes * D, delete t.minutes) : t.minutes && o++, !(n & y) || o >= i ? (t.milliseconds += t.seconds * S, delete t.seconds) : t.seconds && o++, (!(n & v) || o >= i) && l(t, r)
        }

        function h(t, e, n, i, r, o) {
            if (t.start = e, t.end = n, t.units = i, t.value = n.getTime() - e.getTime(), t.value < 0) {
                var s = n;
                n = e, e = s
            }
            t.refMonth = new Date(e.getFullYear(), e.getMonth(), 15);
            try {
                t.millennia = 0, t.centuries = 0, t.decades = 0, t.years = n.getUTCFullYear() - e.getUTCFullYear(), t.months = n.getUTCMonth() - e.getUTCMonth(), t.weeks = 0, t.days = n.getUTCDate() - e.getUTCDate(), t.hours = n.getUTCHours() - e.getUTCHours(), t.minutes = n.getUTCMinutes() - e.getUTCMinutes(), t.seconds = n.getUTCSeconds() - e.getUTCSeconds(), t.milliseconds = n.getUTCMilliseconds() - e.getUTCMilliseconds(), u(t), c(t, i, r, o)
            } finally {
                delete t.refMonth
            }
            return t
        }

        function d(t) {
            return t & v ? S / 30 : t & y ? S : t & b ? S * D : t & x ? S * D * q : t & w ? S * D * q * A : S * D * q * A * M
        }

        function f(t, e, n, i, r) {
            var s;
            if (n = +n || N, i = i > 0 ? i : 0 / 0, r = r > 0 ? 20 > r ? Math.round(r) : 20 : 0, "function" == typeof t ? (s = t, t = null) : t instanceof Date || (t = null !== t && isFinite(t) ? new Date(t) : null), "function" == typeof e ? (s = e, e = null) : e instanceof Date || (e = null !== e && isFinite(e) ? new Date(e) : null), !t && !e)
                return new o;
            if (!s)
                return h(new o, t || new Date, e || new Date, n, i, r);
            var a, l = d(n),
                u = function() {
                    s(h(new o, t || new Date, e || new Date, n, i, r), a)
                };
            return u(), a = setInterval(u, l)
        }
        var p, m, g, v = 1,
            y = 2,
            b = 4,
            x = 8,
            w = 16,
            _ = 32,
            T = 64,
            C = 128,
            j = 256,
            E = 512,
            k = 1024,
            N = C | T | w | x | b | y,
            S = 1e3,
            D = 60,
            q = 60,
            A = 24,
            L = A * q * D * S,
            M = 7,
            F = 12,
            H = 10,
            z = 10,
            O = 10,
            W = Math.ceil,
            I = Math.floor,
            P = 0,
            B = 1,
            R = 2,
            $ = 3,
            U = 4,
            X = 5,
            V = 6,
            Y = 7,
            Q = 8,
            G = 9,
            J = 10;
        o.prototype.toString = function() {
            var t = g(this),
                e = t.length;
            return e ? t.join(" ") : ""
        }, o.prototype.toHTML = function(t) {
            t = t || "span";
            var e = g(this),
                n = e.length;
            if (!n)
                return "";
            for (var i = 0; n > i; i++)
                e[i] = "<" + t + ">" + e[i] + "</" + t + ">";
            return --n && (e[n] = "and " + e[n]), e.join(", ")
        }, g = function(t) {
            var e = [],
                n = t.millennia;
            return n && e.push(r(n, J)), n = t.centuries, n && e.push(r(n, G)), n = t.decades, n && e.push(r(n, Q)), n = t.years, n && e.push(r(n, Y)), n = t.months, n && e.push(r(n, V)), n = t.weeks, n && e.push(r(n, X)), n = t.days, n && e.push(r(n, U)), n = t.hours, n && e.push(r(n, $)), n = t.minutes, n && e.push(r(n, R)), n = t.seconds, n && e.push(r(n, B)), n = t.milliseconds, n && e.push(r(n, P)), e
        }, f.MILLISECONDS = v, f.SECONDS = y, f.MINUTES = b, f.HOURS = x, f.DAYS = w, f.WEEKS = _, f.MONTHS = T, f.YEARS = C, f.DECADES = j, f.CENTURIES = E, f.MILLENNIA = k, f.DEFAULTS = N, f.ALL = k | E | j | C | T | _ | w | x | b | y | v;
        var K = (f.setLabels = function(t, e) {
            t = t || [], t.split && (t = t.split("|")), e = e || [], e.split && (e = e.split("|"));
            for (var n = P; J >= n; n++)
                p[n] = t[n] || p[n], m[n] = e[n] || m[n]
        }, f.resetLabels = function() {
            p = "millisecond|second|minute|hour|day|week|month|year|decade|century|millennium".split("|"), p = "毫秒|秒|分|时|天|周|月|年|十年|世纪|千年".split("|"), m = p
        });
        return K(), t && t.exports ? t.exports = f : "function" == typeof window.define && window.define.amd && window.define("countdown", [], function() {
            return f
        }), f
    }(module);
! function(t) {
    "use strict";
    var e = t.jCarousel = {};
    e.version = "0.3.0";
    var n = /^([+\-]=)?(.+)$/;
    e.parseTarget = function(t) {
        var e = !1,
            i = "object" != typeof t ? n.exec(t) : null;
        return i ? (t = parseInt(i[2], 10) || 0, i[1] && (e = !0, "-=" === i[1] && (t *= -1))) : "object" != typeof t && (t = parseInt(t, 10) || 0), {
            target: t,
            relative: e
        }
    }, e.detectCarousel = function(t) {
        for (var e; t.length > 0;) {
            if (e = t.filter("[data-jcarousel]"), e.length > 0)
                return e;
            if (e = t.find("[data-jcarousel]"), e.length > 0)
                return e;
            t = t.parent()
        }
        return null
    }, e.base = function(n) {
        return {
            version: e.version,
            _options: {},
            _element: null,
            _carousel: null,
            _init: t.noop,
            _create: t.noop,
            _destroy: t.noop,
            _reload: t.noop,
            create: function() {
                return this._element.attr("data-" + n.toLowerCase(), !0).data(n, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this)
            },
            destroy: function() {
                return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(n).removeAttr("data-" + n.toLowerCase()), this)
            },
            reload: function(t) {
                return !1 === this._trigger("reload") ? this : (t && this.options(t), this._reload(), this._trigger("reloadend"), this)
            },
            element: function() {
                return this._element
            },
            options: function(e, n) {
                if (0 === arguments.length)
                    return t.extend({}, this._options);
                if ("string" == typeof e) {
                    if (void 0 === n)
                        return void 0 === this._options[e] ? null : this._options[e];
                    this._options[e] = n
                } else
                    this._options = t.extend({}, this._options, e);
                return this
            },
            carousel: function() {
                return this._carousel || (this._carousel = e.detectCarousel(this.options("carousel") || this._element), this._carousel || t.error('Could not detect carousel for plugin "' + n + '"')), this._carousel
            },
            _trigger: function(e, i, r) {
                var o, s = !1;
                return r = [this].concat(r || []), (i || this._element).each(function() {
                    o = t.Event((n + ":" + e).toLowerCase()), t(this).trigger(o, r), o.isDefaultPrevented() && (s = !0)
                }), !s
            }
        }
    }, e.plugin = function(n, i) {
        var r = t[n] = function(e, n) {
            this._element = t(e), this.options(n), this._init(), this.create()
        };
        return r.fn = r.prototype = t.extend({}, e.base(n), i), t.fn[n] = function(e) {
            var i = Array.prototype.slice.call(arguments, 1),
                o = this;
            return "string" == typeof e ? this.each(function() {
                var r = t(this).data(n);
                if (!r)
                    return t.error("Cannot call methods on " + n + ' prior to initialization; attempted to call method "' + e + '"');
                if (!t.isFunction(r[e]) || "_" === e.charAt(0))
                    return t.error('No such method "' + e + '" for ' + n + " instance");
                var s = r[e].apply(r, i);
                return s !== r && void 0 !== s ? (o = s, !1) : void 0
            }) : this.each(function() {
                var i = t(this).data(n);
                i instanceof r ? i.reload(e) : new r(this, e)
            }), o
        }, r
    }
}(jQuery),
function(t, e) {
    "use strict";
    var n = function(t) {
        return parseFloat(t) || 0
    };
    t.jCarousel.plugin("jcarousel", {
        animating: !1,
        tail: 0,
        inTail: !1,
        resizeTimer: null,
        lt: null,
        vertical: !1,
        rtl: !1,
        circular: !1,
        underflow: !1,
        relative: !1,
        _options: {
            list: function() {
                return this.element().children().eq(0)
            },
            items: function() {
                return this.list().children()
            },
            animation: 400,
            transitions: !1,
            wrap: null,
            vertical: null,
            rtl: null,
            center: !1
        },
        _list: null,
        _items: null,
        _target: null,
        _first: null,
        _last: null,
        _visible: null,
        _fullyvisible: null,
        _init: function() {
            var t = this;
            return this.onWindowResize = function() {
                t.resizeTimer && clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function() {
                    t.reload()
                }, 100)
            }, this
        },
        _create: function() {
            this._reload(), t(e).on("resize.jcarousel", this.onWindowResize)
        },
        _destroy: function() {
            t(e).off("resize.jcarousel", this.onWindowResize)
        },
        _reload: function() {
            this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function(e) {
                if ("rtl" === ("" + e.attr("dir")).toLowerCase())
                    return !0;
                var n = !1;
                return e.parents("[dir]").each(function() {
                    return /rtl/i.test(t(this).attr("dir")) ? (n = !0, !1) : void 0
                }), n
            }(this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null;
            var e = this._target && this.index(this._target) >= 0 ? this._target : this.closest();
            this.circular = "circular" === this.options("wrap"), this.underflow = !1;
            var n = {
                left: 0,
                top: 0
            };
            return e.length > 0 && (this._prepare(e), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, n[this.lt] = this._position(e) + "px"), this.move(n), this
        },
        list: function() {
            if (null === this._list) {
                var e = this.options("list");
                this._list = t.isFunction(e) ? e.call(this) : this._element.find(e)
            }
            return this._list
        },
        items: function() {
            if (null === this._items) {
                var e = this.options("items");
                this._items = (t.isFunction(e) ? e.call(this) : this.list().find(e)).not("[data-jcarousel-clone]")
            }
            return this._items
        },
        index: function(t) {
            return this.items().index(t)
        },
        closest: function() {
            var e, i = this,
                r = this.list().position()[this.lt],
                o = t(),
                s = !1,
                a = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
            return this.rtl && this.relative && !this.vertical && (r += this.list().width() - this.clipping()), this.items().each(function() {
                if (o = t(this), s)
                    return !1;
                var l = i.dimension(o);
                if (r += l, r >= 0) {
                    if (e = l - n(o.css("margin-" + a)), !(0 >= Math.abs(r) - l + e / 2))
                        return !1;
                    s = !0
                }
            }), o
        },
        target: function() {
            return this._target
        },
        first: function() {
            return this._first
        },
        last: function() {
            return this._last
        },
        visible: function() {
            return this._visible
        },
        fullyvisible: function() {
            return this._fullyvisible
        },
        hasNext: function() {
            if (!1 === this._trigger("hasnext"))
                return !0;
            var t = this.options("wrap"),
                e = this.items().length - 1;
            return e >= 0 && (t && "first" !== t || e > this.index(this._last) || this.tail && !this.inTail) ? !0 : !1
        },
        hasPrev: function() {
            if (!1 === this._trigger("hasprev"))
                return !0;
            var t = this.options("wrap");
            return this.items().length > 0 && (t && "last" !== t || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
        },
        clipping: function() {
            return this._element["inner" + (this.vertical ? "Height" : "Width")]()
        },
        dimension: function(t) {
            return t["outer" + (this.vertical ? "Height" : "Width")](!0)
        },
        scroll: function(e, n, i) {
            if (this.animating)
                return this;
            if (!1 === this._trigger("scroll", null, [e, n]))
                return this;
            t.isFunction(n) && (i = n, n = !0);
            var r = t.jCarousel.parseTarget(e);
            if (r.relative) {
                var o, s, a, l, u, c, h, d, f = this.items().length - 1,
                    p = Math.abs(r.target),
                    m = this.options("wrap");
                if (r.target > 0) {
                    var g = this.index(this._last);
                    if (g >= f && this.tail)
                        this.inTail ? "both" === m || "last" === m ? this._scroll(0, n, i) : t.isFunction(i) && i.call(this, !1) : this._scrollTail(n, i);
                    else if (o = this.index(this._target), this.underflow && o === f && ("circular" === m || "both" === m || "last" === m) || !this.underflow && g === f && ("both" === m || "last" === m))
                        this._scroll(0, n, i);
                    else if (a = o + p, this.circular && a > f) {
                        for (d = f, u = this.items().get(-1); a > d++;)
                            u = this.items().eq(0), c = this._visible.index(u) >= 0, c && u.after(u.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(u), c || (h = {}, h[this.lt] = this.dimension(u), this.moveBy(h)), this._items = null;
                        this._scroll(u, n, i)
                    } else
                        this._scroll(Math.min(a, f), n, i)
                } else if (this.inTail)
                    this._scroll(Math.max(this.index(this._first) - p + 1, 0), n, i);
                else if (s = this.index(this._first), o = this.index(this._target), l = this.underflow ? o : s, a = l - p, 0 >= l && (this.underflow && "circular" === m || "both" === m || "first" === m))
                    this._scroll(f, n, i);
                else if (this.circular && 0 > a) {
                    for (d = a, u = this.items().get(0); 0 > d++;) {
                        u = this.items().eq(-1), c = this._visible.index(u) >= 0, c && u.after(u.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(u), this._items = null;
                        var v = this.dimension(u);
                        h = {}, h[this.lt] = -v, this.moveBy(h)
                    }
                    this._scroll(u, n, i)
                } else
                    this._scroll(Math.max(a, 0), n, i)
            } else
                this._scroll(r.target, n, i);
            return this._trigger("scrollend"), this
        },
        moveBy: function(t, e) {
            var i = this.list().position(),
                r = 1,
                o = 0;
            return this.rtl && !this.vertical && (r = -1, this.relative && (o = this.list().width() - this.clipping())), t.left && (t.left = i.left + o + n(t.left) * r + "px"), t.top && (t.top = i.top + o + n(t.top) * r + "px"), this.move(t, e)
        },
        move: function(e, n) {
            n = n || {};
            var i = this.options("transitions"),
                r = !! i,
                o = !! i.transforms,
                s = !! i.transforms3d,
                a = n.duration || 0,
                l = this.list();
            if (!r && a > 0)
                return l.animate(e, n), void 0;
            var u = n.complete || t.noop,
                c = {};
            if (r) {
                var h = l.css(["transitionDuration", "transitionTimingFunction", "transitionProperty"]),
                    d = u;
                u = function() {
                    t(this).css(h), d.call(this)
                }, c = {
                    transitionDuration: (a > 0 ? a / 1e3 : 0) + "s",
                    transitionTimingFunction: i.easing || n.easing,
                    transitionProperty: a > 0 ? function() {
                        return o || s ? "all" : e.left ? "left" : "top"
                    }() : "none",
                    transform: "none"
                }
            }
            s ? c.transform = "translate3d(" + (e.left || 0) + "," + (e.top || 0) + ",0)" : o ? c.transform = "translate(" + (e.left || 0) + "," + (e.top || 0) + ")" : t.extend(c, e), r && a > 0 && l.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", u), l.css(c), 0 >= a && l.each(function() {
                u.call(this)
            })
        },
        _scroll: function(e, n, i) {
            if (this.animating)
                return t.isFunction(i) && i.call(this, !1), this;
            if ("object" != typeof e ? e = this.items().eq(e) : void 0 === e.jquery && (e = t(e)), 0 === e.length)
                return t.isFunction(i) && i.call(this, !1), this;
            this.inTail = !1, this._prepare(e);
            var r = this._position(e),
                o = this.list().position()[this.lt];
            if (r === o)
                return t.isFunction(i) && i.call(this, !1), this;
            var s = {};
            return s[this.lt] = r + "px", this._animate(s, n, i), this
        },
        _scrollTail: function(e, n) {
            if (this.animating || !this.tail)
                return t.isFunction(n) && n.call(this, !1), this;
            var i = this.list().position()[this.lt];
            this.rtl && this.relative && !this.vertical && (i += this.list().width() - this.clipping()), this.rtl && !this.vertical ? i += this.tail : i -= this.tail, this.inTail = !0;
            var r = {};
            return r[this.lt] = i + "px", this._update({
                target: this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            }), this._animate(r, e, n), this
        },
        _animate: function(e, n, i) {
            if (i = i || t.noop, !1 === this._trigger("animate"))
                return i.call(this, !1), this;
            this.animating = !0;
            var r = this.options("animation"),
                o = t.proxy(function() {
                    this.animating = !1;
                    var t = this.list().find("[data-jcarousel-clone]");
                    t.length > 0 && (t.remove(), this._reload()), this._trigger("animateend"), i.call(this, !0)
                }, this),
                s = "object" == typeof r ? t.extend({}, r) : {
                    duration: r
                }, a = s.complete || t.noop;
            return n === !1 ? s.duration = 0 : void 0 !== t.fx.speeds[s.duration] && (s.duration = t.fx.speeds[s.duration]), s.complete = function() {
                o(), a.call(this)
            }, this.move(e, s), this
        },
        _prepare: function(e) {
            var i, r, o, s, a = this.index(e),
                l = a,
                u = this.dimension(e),
                c = this.clipping(),
                h = this.vertical ? "bottom" : this.rtl ? "left" : "right",
                d = this.options("center"),
                f = {
                    target: e,
                    first: e,
                    last: e,
                    visible: e,
                    fullyvisible: c >= u ? e : t()
                };
            if (d && (u /= 2, c /= 2), c > u)
                for (;;) {
                    if (i = this.items().eq(++l), 0 === i.length) {
                        if (!this.circular)
                            break;
                        if (i = this.items().eq(0), e.get(0) === i.get(0))
                            break;
                        if (r = this._visible.index(i) >= 0, r && i.after(i.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(i), !r) {
                            var p = {};
                            p[this.lt] = this.dimension(i), this.moveBy(p)
                        }
                        this._items = null
                    }
                    if (s = this.dimension(i), 0 === s)
                        break;
                    if (u += s, f.last = i, f.visible = f.visible.add(i), o = n(i.css("margin-" + h)), c >= u - o && (f.fullyvisible = f.fullyvisible.add(i)), u >= c)
                        break
                }
            if (!this.circular && !d && c > u)
                for (l = a; !(0 > --l) && (i = this.items().eq(l), 0 !== i.length) && (s = this.dimension(i), 0 !== s) && (u += s, f.first = i, f.visible = f.visible.add(i), o = n(i.css("margin-" + h)), c >= u - o && (f.fullyvisible = f.fullyvisible.add(i)), !(u >= c));)
            ;
            return this._update(f), this.tail = 0, d || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(f.last) !== this.items().length - 1 || (u -= n(f.last.css("margin-" + h)), u > c && (this.tail = u - c)), this
        },
        _position: function(t) {
            var e = this._first,
                n = e.position()[this.lt],
                i = this.options("center"),
                r = i ? this.clipping() / 2 - this.dimension(e) / 2 : 0;
            return this.rtl && !this.vertical ? (n -= this.relative ? this.list().width() - this.dimension(e) : this.clipping() - this.dimension(e), n += r) : n -= r, !i && (this.index(t) > this.index(e) || this.inTail) && this.tail ? (n = this.rtl && !this.vertical ? n - this.tail : n + this.tail, this.inTail = !0) : this.inTail = !1, -n
        },
        _update: function(e) {
            var n, i = this,
                r = {
                    target: this._target || t(),
                    first: this._first || t(),
                    last: this._last || t(),
                    visible: this._visible || t(),
                    fullyvisible: this._fullyvisible || t()
                }, o = this.index(e.first || r.first) < this.index(r.first),
                s = function(n) {
                    var s = [],
                        a = [];
                    e[n].each(function() {
                        0 > r[n].index(this) && s.push(this)
                    }), r[n].each(function() {
                        0 > e[n].index(this) && a.push(this)
                    }), o ? s = s.reverse() : a = a.reverse(), i._trigger(n + "in", t(s)), i._trigger(n + "out", t(a)), i["_" + n] = e[n]
                };
            for (n in e)
                s(n);
            return this
        }
    })
}(jQuery, window),
function(t) {
    "use strict";
    t.jcarousel.fn.scrollIntoView = function(e, n, i) {
        var r, o = t.jCarousel.parseTarget(e),
            s = this.index(this._fullyvisible.first()),
            a = this.index(this._fullyvisible.last());
        if (r = o.relative ? 0 > o.target ? Math.max(0, s + o.target) : a + o.target : "object" != typeof o.target ? o.target : this.index(o.target), s > r)
            return this.scroll(r, n, i);
        if (r >= s && a >= r)
            return t.isFunction(i) && i.call(this, !1), this;
        for (var l, u = this.items(), c = this.clipping(), h = this.vertical ? "bottom" : this.rtl ? "left" : "right", d = 0; l = u.eq(r), 0 !== l.length;) {
            if (d += this.dimension(l), d >= c) {
                var f = parseFloat(l.css("margin-" + h)) || 0;
                d - f !== c && r++;
                break
            }
            if (0 >= r)
                break;
            r--
        }
        return this.scroll(r, n, i)
    }
}(jQuery),
function(t) {
    "use strict";
    t.jCarousel.plugin("jcarouselControl", {
        _options: {
            target: "+=1",
            event: "click",
            method: "scroll"
        },
        _active: null,
        _init: function() {
            this.onDestroy = t.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
            }, this), this.onReload = t.proxy(this._reload, this), this.onEvent = t.proxy(function(e) {
                e.preventDefault();
                var n = this.options("method");
                t.isFunction(n) ? n.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
            }, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload()
        },
        _destroy: function() {
            this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
        },
        _reload: function() {
            var e, n = t.jCarousel.parseTarget(this.options("target")),
                i = this.carousel();
            if (n.relative)
                e = i.jcarousel(n.target > 0 ? "hasNext" : "hasPrev");
            else {
                var r = "object" != typeof n.target ? i.jcarousel("items").eq(n.target) : n.target;
                e = i.jcarousel("target").index(r) >= 0
            }
            return this._active !== e && (this._trigger(e ? "active" : "inactive"), this._active = e), this
        }
    })
}(jQuery),
function(t) {
    "use strict";
    t.jCarousel.plugin("jcarouselPagination", {
        _options: {
            perPage: null,
            item: function(t) {
                return '<a href="#' + t + '">' + t + "</a>"
            },
            event: "click",
            method: "scroll"
        },
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = t.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
            }, this), this.onReload = t.proxy(this._reload, this), this.onScroll = t.proxy(this._update, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload()
        },
        _destroy: function() {
            this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll)
        },
        _reload: function() {
            var e = this.options("perPage");
            if (this._pages = {}, this._items = {}, t.isFunction(e) && (e = e.call(this)), null == e)
                this._pages = this._calculatePages();
            else
                for (var n, i = parseInt(e, 10) || 0, r = this.carousel().jcarousel("items"), o = 1, s = 0; n = r.eq(s++), 0 !== n.length;)
                    this._pages[o] = this._pages[o] ? this._pages[o].add(n) : n, 0 === s % i && o++;
            this._clear();
            var a = this,
                l = this.carousel().data("jcarousel"),
                u = this._element,
                c = this.options("item");
            t.each(this._pages, function(e, n) {
                var i = a._items[e] = t(c.call(a, e, n));
                i.on(a.options("event") + ".jcarouselpagination", t.proxy(function() {
                    var t = n.eq(0);
                    if (l.circular) {
                        var i = l.index(l.target()),
                            r = l.index(t);
                        parseFloat(e) > parseFloat(a._currentPage) ? i > r && (t = "+=" + (l.items().length - i + r)) : r > i && (t = "-=" + (i + (l.items().length - r)))
                    }
                    l[this.options("method")](t)
                }, a)), u.append(i)
            }), this._update()
        },
        _update: function() {
            var e, n = this.carousel().jcarousel("target");
            t.each(this._pages, function(t, i) {
                return i.each(function() {
                    return n.is(this) ? (e = t, !1) : void 0
                }), e ? !1 : void 0
            }), this._currentPage !== e && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[e])), this._currentPage = e
        },
        items: function() {
            return this._items
        },
        _clear: function() {
            this._element.empty(), this._currentPage = null
        },
        _calculatePages: function() {
            for (var t, e = this.carousel().data("jcarousel"), n = e.items(), i = e.clipping(), r = 0, o = 0, s = 1, a = {}; t = n.eq(o++), 0 !== t.length;)
                a[s] = a[s] ? a[s].add(t) : t, r += e.dimension(t), r >= i && (s++, r = 0);
            return a
        }
    })
}(jQuery),
function(t) {
    "use strict";
    t.jCarousel.plugin("jcarouselAutoscroll", {
        _options: {
            target: "+=1",
            interval: 3e3,
            autostart: !0
        },
        _timer: null,
        _init: function() {
            this.onDestroy = t.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
            }, this), this.onAnimateEnd = t.proxy(this.start, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy), this.options("autostart") && this.start()
        },
        _destroy: function() {
            this.stop(), this.carousel().off("jcarousel:destroy", this.onDestroy)
        },
        start: function() {
            return this.stop(), this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(t.proxy(function() {
                this.carousel().jcarousel("scroll", this.options("target"))
            }, this), this.options("interval")), this
        },
        stop: function() {
            return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this
        }
    })
}(jQuery),
function(t, e, n) {
    ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.qtip && t(jQuery)
    }(function(i) {
        "use strict";

        function r(t, e, n, r) {
            this.id = n, this.target = t, this.tooltip = A, this.elements = {
                target: t
            }, this._id = U + "-" + n, this.timers = {
                img: {}
            }, this.options = e, this.plugins = {}, this.cache = {
                event: {},
                target: i(),
                disabled: q,
                attr: r,
                onTooltip: q,
                lastClass: ""
            }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = q
        }

        function o(t) {
            return t === A || "object" !== i.type(t)
        }

        function s(t) {
            return !(i.isFunction(t) || t && t.attr || t.length || "object" === i.type(t) && (t.jquery || t.then))
        }

        function a(t) {
            var e, n, r, a;
            return o(t) ? q : (o(t.metadata) && (t.metadata = {
                type: t.metadata
            }), "content" in t && (e = t.content, o(e) || e.jquery || e.done ? e = t.content = {
                text: n = s(e) ? q : e
            } : n = e.text, "ajax" in e && (r = e.ajax, a = r && r.once !== q, delete e.ajax, e.text = function(t, e) {
                var o = n || i(this).attr(e.options.content.attr) || "Loading...",
                    s = i.ajax(i.extend({}, r, {
                        context: e
                    })).then(r.success, A, r.error).then(function(t) {
                        return t && a && e.set("content.text", t), t
                    }, function(t, n, i) {
                        e.destroyed || 0 === t.status || e.set("content.text", n + ": " + i)
                    });
                return a ? o : (e.set("content.text", o), s)
            }), "title" in e && (o(e.title) || (e.button = e.title.button, e.title = e.title.text), s(e.title || q) && (e.title = q))), "position" in t && o(t.position) && (t.position = {
                my: t.position,
                at: t.position
            }), "show" in t && o(t.show) && (t.show = t.show.jquery ? {
                target: t.show
            } : t.show === D ? {
                ready: D
            } : {
                event: t.show
            }), "hide" in t && o(t.hide) && (t.hide = t.hide.jquery ? {
                target: t.hide
            } : {
                event: t.hide
            }), "style" in t && o(t.style) && (t.style = {
                classes: t.style
            }), i.each($, function() {
                this.sanitize && this.sanitize(t)
            }), t)
        }

        function l(t, e) {
            for (var n, i = 0, r = t, o = e.split("."); r = r[o[i++]];)
                o.length > i && (n = r);
            return [n || t, o.pop()]
        }

        function u(t, e) {
            var n, i, r;
            for (n in this.checks)
                for (i in this.checks[n])
                    (r = RegExp(i, "i").exec(t)) && (e.push(r), ("builtin" === n || this.plugins[n]) && this.checks[n][i].apply(this.plugins[n] || this, e))
        }

        function c(t) {
            return Y.concat("").join(t ? "-" + t + " " : " ")
        }

        function h(n) {
            return n && {
                type: n.type,
                pageX: n.pageX,
                pageY: n.pageY,
                target: n.target,
                relatedTarget: n.relatedTarget,
                scrollX: n.scrollX || t.pageXOffset || e.body.scrollLeft || e.documentElement.scrollLeft,
                scrollY: n.scrollY || t.pageYOffset || e.body.scrollTop || e.documentElement.scrollTop
            } || {}
        }

        function d(t, e) {
            return e > 0 ? setTimeout(i.proxy(t, this), e) : (t.call(this), n)
        }

        function f(t) {
            return this.tooltip.hasClass(ee) ? q : (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = d.call(this, function() {
                this.toggle(D, t)
            }, this.options.show.delay), n)
        }

        function p(t) {
            if (this.tooltip.hasClass(ee))
                return q;
            var e = i(t.relatedTarget),
                n = e.closest(Q)[0] === this.tooltip[0],
                r = e[0] === this.options.show.target[0];
            if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== e[0] && "mouse" === this.options.position.target && n || this.options.hide.fixed && /mouse(out|leave|move)/.test(t.type) && (n || r))
                try {
                    t.preventDefault(), t.stopImmediatePropagation()
                } catch (o) {} else
                this.timers.hide = d.call(this, function() {
                    this.toggle(q, t)
                }, this.options.hide.delay, this)
        }

        function m(t) {
            return this.tooltip.hasClass(ee) || !this.options.hide.inactive ? q : (clearTimeout(this.timers.inactive), this.timers.inactive = d.call(this, function() {
                this.hide(t)
            }, this.options.hide.inactive), n)
        }

        function g(t) {
            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(t)
        }

        function v(t, n, r) {
            i(e.body).delegate(t, (n.split ? n : n.join(le + " ")) + le, function() {
                var t = j.api[i.attr(this, V)];
                t && !t.disabled && r.apply(t, arguments)
            })
        }

        function y(t, n, o) {
            var s, l, u, c, h, d = i(e.body),
                f = t[0] === e ? d : t,
                p = t.metadata ? t.metadata(o.metadata) : A,
                m = "html5" === o.metadata.type && p ? p[o.metadata.name] : A,
                g = t.data(o.metadata.name || "qtipopts");
            try {
                g = "string" == typeof g ? i.parseJSON(g) : g
            } catch (v) {}
            if (c = i.extend(D, {}, j.defaults, o, "object" == typeof g ? a(g) : A, a(m || p)), l = c.position, c.id = n, "boolean" == typeof c.content.text) {
                if (u = t.attr(c.content.attr), c.content.attr === q || !u)
                    return q;
                c.content.text = u
            }
            if (l.container.length || (l.container = d), l.target === q && (l.target = f), c.show.target === q && (c.show.target = f), c.show.solo === D && (c.show.solo = l.container.closest("body")), c.hide.target === q && (c.hide.target = f), c.position.viewport === D && (c.position.viewport = l.container), l.container = l.container.eq(0), l.at = new k(l.at, D), l.my = new k(l.my), t.data(U))
                if (c.overwrite)
                    t.qtip("destroy", !0);
                else
            if (c.overwrite === q)
                return q;
            return t.attr(X, n), c.suppress && (h = t.attr("title")) && t.removeAttr("title").attr(ie, h).attr("title", ""), s = new r(t, c, n, !! u), t.data(U, s), t.one("remove.qtip-" + n + " removeqtip.qtip-" + n, function() {
                var t;
                (t = i(this).data(U)) && t.destroy(!0)
            }), s
        }

        function b(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function x(t, e) {
            var i, r, o = e.charAt(0).toUpperCase() + e.slice(1),
                s = (e + " " + be.join(o + " ") + o).split(" "),
                a = 0;
            if (ye[e])
                return t.css(ye[e]);
            for (; i = s[a++];)
                if ((r = t.css(i)) !== n)
                    return ye[e] = i, r
        }

        function w(t, e) {
            return Math.ceil(parseFloat(x(t, e)))
        }

        function _(t, e) {
            this._ns = "tip", this.options = e, this.offset = e.offset, this.size = [e.width, e.height], this.init(this.qtip = t)
        }

        function T(t, e) {
            this.options = e, this._ns = "-modal", this.init(this.qtip = t)
        }

        function C(t) {
            this._ns = "ie6", this.init(this.qtip = t)
        }
        var j, E, k, N, S, D = !0,
            q = !1,
            A = null,
            L = "x",
            M = "y",
            F = "width",
            H = "height",
            z = "top",
            O = "left",
            W = "bottom",
            I = "right",
            P = "center",
            B = "flipinvert",
            R = "shift",
            $ = {}, U = "qtip",
            X = "data-hasqtip",
            V = "data-qtip-id",
            Y = ["ui-widget", "ui-tooltip"],
            Q = "." + U,
            G = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
            J = U + "-fixed",
            K = U + "-default",
            Z = U + "-focus",
            te = U + "-hover",
            ee = U + "-disabled",
            ne = "_replacedByqTip",
            ie = "oldtitle",
            re = {
                ie: function() {
                    for (var t = 3, n = e.createElement("div");
                        (n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && n.getElementsByTagName("i")[0];)
                    ;
                    return t > 4 ? t : 0 / 0
                }(),
                iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || q
            };
        E = r.prototype, E._when = function(t) {
            return i.when.apply(i, t)
        }, E.render = function(t) {
            if (this.rendered || this.destroyed)
                return this;
            var e, n = this,
                r = this.options,
                o = this.cache,
                s = this.elements,
                a = r.content.text,
                l = r.content.title,
                u = r.content.button,
                c = r.position,
                h = ("." + this._id + " ", []);
            return i.attr(this.target[0], "aria-describedby", this._id), this.tooltip = s.tooltip = e = i("<div/>", {
                id: this._id,
                "class": [U, K, r.style.classes, U + "-pos-" + r.position.my.abbrev()].join(" "),
                width: r.style.width || "",
                height: r.style.height || "",
                tracking: "mouse" === c.target && c.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": q,
                "aria-describedby": this._id + "-content",
                "aria-hidden": D
            }).toggleClass(ee, this.disabled).attr(V, this.id).data(U, this).appendTo(c.container).append(s.content = i("<div />", {
                "class": U + "-content",
                id: this._id + "-content",
                "aria-atomic": D
            })), this.rendered = -1, this.positioning = D, l && (this._createTitle(), i.isFunction(l) || h.push(this._updateTitle(l, q))), u && this._createButton(), i.isFunction(a) || h.push(this._updateContent(a, q)), this.rendered = D, this._setWidget(), i.each($, function(t) {
                var e;
                "render" === this.initialize && (e = this(n)) && (n.plugins[t] = e)
            }), this._unassignEvents(), this._assignEvents(), this._when(h).then(function() {
                n._trigger("render"), n.positioning = q, n.hiddenDuringWait || !r.show.ready && !t || n.toggle(D, o.event, q), n.hiddenDuringWait = q
            }), j.api[this.id] = this, this
        }, E.destroy = function(t) {
            function e() {
                if (!this.destroyed) {
                    this.destroyed = D;
                    var t = this.target,
                        e = t.attr(ie);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), i.each(this.plugins, function() {
                        this.destroy && this.destroy()
                    }), clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this._unassignEvents(), t.removeData(U).removeAttr(V).removeAttr(X).removeAttr("aria-describedby"), this.options.suppress && e && t.attr("title", e).removeAttr(ie), this._unbind(t), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = A, delete j.api[this.id]
                }
            }
            return this.destroyed ? this.target : (t === D && "hide" !== this.triggering || !this.rendered ? e.call(this) : (this.tooltip.one("tooltiphidden", i.proxy(e, this)), !this.triggering && this.hide()), this.target)
        }, N = E.checks = {
            builtin: {
                "^id$": function(t, e, n, r) {
                    var o = n === D ? j.nextid : n,
                        s = U + "-" + o;
                    o !== q && o.length > 0 && !i("#" + s).length ? (this._id = s, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : t[e] = r
                },
                "^prerender": function(t, e, n) {
                    n && !this.rendered && this.render(this.options.show.ready)
                },
                "^content.text$": function(t, e, n) {
                    this._updateContent(n)
                },
                "^content.attr$": function(t, e, n, i) {
                    this.options.content.text === this.target.attr(i) && this._updateContent(this.target.attr(n))
                },
                "^content.title$": function(t, e, i) {
                    return i ? (i && !this.elements.title && this._createTitle(), this._updateTitle(i), n) : this._removeTitle()
                },
                "^content.button$": function(t, e, n) {
                    this._updateButton(n)
                },
                "^content.title.(text|button)$": function(t, e, n) {
                    this.set("content." + e, n)
                },
                "^position.(my|at)$": function(t, e, n) {
                    "string" == typeof n && (t[e] = new k(n, "at" === e))
                },
                "^position.container$": function(t, e, n) {
                    this.rendered && this.tooltip.appendTo(n)
                },
                "^show.ready$": function(t, e, n) {
                    n && (!this.rendered && this.render(D) || this.toggle(D))
                },
                "^style.classes$": function(t, e, n, i) {
                    this.rendered && this.tooltip.removeClass(i).addClass(n)
                },
                "^style.(width|height)": function(t, e, n) {
                    this.rendered && this.tooltip.css(e, n)
                },
                "^style.widget|content.title": function() {
                    this.rendered && this._setWidget()
                },
                "^style.def": function(t, e, n) {
                    this.rendered && this.tooltip.toggleClass(K, !! n)
                },
                "^events.(render|show|move|hide|focus|blur)$": function(t, e, n) {
                    this.rendered && this.tooltip[(i.isFunction(n) ? "" : "un") + "bind"]("tooltip" + e, n)
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    if (this.rendered) {
                        var t = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === t.target && t.adjust.mouse), this._unassignEvents(), this._assignEvents()
                    }
                }
            }
        }, E.get = function(t) {
            if (this.destroyed)
                return this;
            var e = l(this.options, t.toLowerCase()),
                n = e[0][e[1]];
            return n.precedance ? n.string() : n
        };
        var oe = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
            se = /^prerender|show\.ready/i;
        E.set = function(t, e) {
            if (this.destroyed)
                return this;
            var r, o = this.rendered,
                s = q,
                c = this.options;
            return this.checks, "string" == typeof t ? (r = t, t = {}, t[r] = e) : t = i.extend({}, t), i.each(t, function(e, r) {
                if (o && se.test(e))
                    return delete t[e], n;
                var a, u = l(c, e.toLowerCase());
                a = u[0][u[1]], u[0][u[1]] = r && r.nodeType ? i(r) : r, s = oe.test(e) || s, t[e] = [u[0], u[1], r, a]
            }), a(c), this.positioning = D, i.each(t, i.proxy(u, this)), this.positioning = q, this.rendered && this.tooltip[0].offsetWidth > 0 && s && this.reposition("mouse" === c.position.target ? A : this.cache.event), this
        }, E._update = function(t, e) {
            var n = this,
                r = this.cache;
            return this.rendered && t ? (i.isFunction(t) && (t = t.call(this.elements.target, r.event, this) || ""), i.isFunction(t.then) ? (r.waiting = D, t.then(function(t) {
                return r.waiting = q, n._update(t, e)
            }, A, function(t) {
                return n._update(t, e)
            })) : t === q || !t && "" !== t ? q : (t.jquery && t.length > 0 ? e.empty().append(t.css({
                display: "block",
                visibility: "visible"
            })) : e.html(t), this._waitForContent(e).then(function(t) {
                t.images && t.images.length && n.rendered && n.tooltip[0].offsetWidth > 0 && n.reposition(r.event, !t.length)
            }))) : q
        }, E._waitForContent = function(t) {
            var e = this.cache;
            return e.waiting = D, (i.fn.imagesLoaded ? t.imagesLoaded() : i.Deferred().resolve([])).done(function() {
                e.waiting = q
            }).promise()
        }, E._updateContent = function(t, e) {
            this._update(t, this.elements.content, e)
        }, E._updateTitle = function(t, e) {
            this._update(t, this.elements.title, e) === q && this._removeTitle(q)
        }, E._createTitle = function() {
            var t = this.elements,
                e = this._id + "-title";
            t.titlebar && this._removeTitle(), t.titlebar = i("<div />", {
                "class": U + "-titlebar " + (this.options.style.widget ? c("header") : "")
            }).append(t.title = i("<div />", {
                id: e,
                "class": U + "-title",
                "aria-atomic": D
            })).insertBefore(t.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(t) {
                i(this).toggleClass("ui-state-active ui-state-focus", "down" === t.type.substr(-4))
            }).delegate(".qtip-close", "mouseover mouseout", function(t) {
                i(this).toggleClass("ui-state-hover", "mouseover" === t.type)
            }), this.options.content.button && this._createButton()
        }, E._removeTitle = function(t) {
            var e = this.elements;
            e.title && (e.titlebar.remove(), e.titlebar = e.title = e.button = A, t !== q && this.reposition())
        }, E.reposition = function(n, r) {
            if (!this.rendered || this.positioning || this.destroyed)
                return this;
            this.positioning = D;
            var o, s, a = this.cache,
                l = this.tooltip,
                u = this.options.position,
                c = u.target,
                h = u.my,
                d = u.at,
                f = u.viewport,
                p = u.container,
                m = u.adjust,
                g = m.method.split(" "),
                v = l.outerWidth(q),
                y = l.outerHeight(q),
                b = 0,
                x = 0,
                w = l.css("position"),
                _ = {
                    left: 0,
                    top: 0
                }, T = l[0].offsetWidth > 0,
                C = n && "scroll" === n.type,
                j = i(t),
                E = p[0].ownerDocument,
                k = this.mouse;
            if (i.isArray(c) && 2 === c.length)
                d = {
                    x: O,
                    y: z
                }, _ = {
                    left: c[0],
                    top: c[1]
                };
            else if ("mouse" === c)
                d = {
                    x: O,
                    y: z
                }, !k || !k.pageX || !m.mouse && n && n.pageX ? n && n.pageX || ((!m.mouse || this.options.show.distance) && a.origin && a.origin.pageX ? n = a.origin : (!n || n && ("resize" === n.type || "scroll" === n.type)) && (n = a.event)) : n = k, "static" !== w && (_ = p.offset()), E.body.offsetWidth !== (t.innerWidth || E.documentElement.clientWidth) && (s = i(e.body).offset()), _ = {
                    left: n.pageX - _.left + (s && s.left || 0),
                    top: n.pageY - _.top + (s && s.top || 0)
                }, m.mouse && C && k && (_.left -= (k.scrollX || 0) - j.scrollLeft(), _.top -= (k.scrollY || 0) - j.scrollTop());
            else {
                if ("event" === c ? n && n.target && "scroll" !== n.type && "resize" !== n.type ? a.target = i(n.target) : n.target || (a.target = this.elements.target) : "event" !== c && (a.target = i(c.jquery ? c : this.elements.target)), c = a.target, c = i(c).eq(0), 0 === c.length)
                    return this;
                c[0] === e || c[0] === t ? (b = re.iOS ? t.innerWidth : c.width(), x = re.iOS ? t.innerHeight : c.height(), c[0] === t && (_ = {
                    top: (f || c).scrollTop(),
                    left: (f || c).scrollLeft()
                })) : $.imagemap && c.is("area") ? o = $.imagemap(this, c, d, $.viewport ? g : q) : $.svg && c && c[0].ownerSVGElement ? o = $.svg(this, c, d, $.viewport ? g : q) : (b = c.outerWidth(q), x = c.outerHeight(q), _ = c.offset()), o && (b = o.width, x = o.height, s = o.offset, _ = o.position), _ = this.reposition.offset(c, _, p), (re.iOS > 3.1 && 4.1 > re.iOS || re.iOS >= 4.3 && 4.33 > re.iOS || !re.iOS && "fixed" === w) && (_.left -= j.scrollLeft(), _.top -= j.scrollTop()), (!o || o && o.adjustable !== q) && (_.left += d.x === I ? b : d.x === P ? b / 2 : 0, _.top += d.y === W ? x : d.y === P ? x / 2 : 0)
            }
            return _.left += m.x + (h.x === I ? -v : h.x === P ? -v / 2 : 0), _.top += m.y + (h.y === W ? -y : h.y === P ? -y / 2 : 0), $.viewport ? (_.adjusted = $.viewport(this, _, u, b, x, v, y), s && _.adjusted.left && (_.left += s.left), s && _.adjusted.top && (_.top += s.top)) : _.adjusted = {
                left: 0,
                top: 0
            }, this._trigger("move", [_, f.elem || f], n) ? (delete _.adjusted, r === q || !T || isNaN(_.left) || isNaN(_.top) || "mouse" === c || !i.isFunction(u.effect) ? l.css(_) : i.isFunction(u.effect) && (u.effect.call(l, this, i.extend({}, _)), l.queue(function(t) {
                i(this).css({
                    opacity: "",
                    height: ""
                }), re.ie && this.style.removeAttribute("filter"), t()
            })), this.positioning = q, this) : this
        }, E.reposition.offset = function(t, n, r) {
            function o(t, e) {
                n.left += e * t.scrollLeft(), n.top += e * t.scrollTop()
            }
            if (!r[0])
                return n;
            var s, a, l, u, c = i(t[0].ownerDocument),
                h = !! re.ie && "CSS1Compat" !== e.compatMode,
                d = r[0];
            do
                "static" !== (a = i.css(d, "position")) && ("fixed" === a ? (l = d.getBoundingClientRect(), o(c, -1)) : (l = i(d).position(), l.left += parseFloat(i.css(d, "borderLeftWidth")) || 0, l.top += parseFloat(i.css(d, "borderTopWidth")) || 0), n.left -= l.left + (parseFloat(i.css(d, "marginLeft")) || 0), n.top -= l.top + (parseFloat(i.css(d, "marginTop")) || 0), s || "hidden" === (u = i.css(d, "overflow")) || "visible" === u || (s = i(d)));
            while (d = d.offsetParent);
            return s && (s[0] !== c[0] || h) && o(s, 1), n
        };
        var ae = (k = E.reposition.Corner = function(t, e) {
            t = ("" + t).replace(/([A-Z])/, " $1").replace(/middle/gi, P).toLowerCase(), this.x = (t.match(/left|right/i) || t.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (t.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !! e;
            var n = t.charAt(0);
            this.precedance = "t" === n || "b" === n ? M : L
        }).prototype;
        ae.invert = function(t, e) {
            this[t] = this[t] === O ? I : this[t] === I ? O : e || this[t]
        }, ae.string = function() {
            var t = this.x,
                e = this.y;
            return t === e ? t : this.precedance === M || this.forceY && "center" !== e ? e + " " + t : t + " " + e
        }, ae.abbrev = function() {
            var t = this.string().split(" ");
            return t[0].charAt(0) + (t[1] && t[1].charAt(0) || "")
        }, ae.clone = function() {
            return new k(this.string(), this.forceY)
        }, E.toggle = function(t, n) {
            var r = this.cache,
                o = this.options,
                s = this.tooltip;
            if (n) {
                if (/over|enter/.test(n.type) && /out|leave/.test(r.event.type) && o.show.target.add(n.target).length === o.show.target.length && s.has(n.relatedTarget).length)
                    return this;
                r.event = h(n)
            }
            if (this.waiting && !t && (this.hiddenDuringWait = D), !this.rendered)
                return t ? this.render(1) : this;
            if (this.destroyed || this.disabled)
                return this;
            var a, l, u, c = t ? "show" : "hide",
                d = this.options[c],
                f = (this.options[t ? "hide" : "show"], this.options.position),
                p = this.options.content,
                m = this.tooltip.css("width"),
                g = this.tooltip.is(":visible"),
                v = t || 1 === d.target.length,
                y = !n || 2 > d.target.length || r.target[0] === n.target;
            return (typeof t).search("boolean|number") && (t = !g), a = !s.is(":animated") && g === t && y, l = a ? A : !! this._trigger(c, [90]), this.destroyed ? this : (l !== q && t && this.focus(n), !l || a ? this : (i.attr(s[0], "aria-hidden", !t), t ? (r.origin = h(this.mouse), i.isFunction(p.text) && this._updateContent(p.text, q), i.isFunction(p.title) && this._updateTitle(p.title, q), !S && "mouse" === f.target && f.adjust.mouse && (i(e).bind("mousemove." + U, this._storeMouse), S = D), m || s.css("width", s.outerWidth(q)), this.reposition(n, arguments[2]), m || s.css("width", ""), d.solo && ("string" == typeof d.solo ? i(d.solo) : i(Q, d.solo)).not(s).not(d.target).qtip("hide", i.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete r.origin, S && !i(Q + '[tracking="true"]:visible', d.solo).not(s).length && (i(e).unbind("mousemove." + U), S = q), this.blur(n)), u = i.proxy(function() {
                t ? (re.ie && s[0].style.removeAttribute("filter"), s.css("overflow", ""), "string" == typeof d.autofocus && i(this.options.show.autofocus, s).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : s.css({
                    display: "",
                    visibility: "",
                    opacity: "",
                    left: "",
                    top: ""
                }), this._trigger(t ? "visible" : "hidden")
            }, this), d.effect === q || v === q ? (s[c](), u()) : i.isFunction(d.effect) ? (s.stop(1, 1), d.effect.call(s, this), s.queue("fx", function(t) {
                u(), t()
            })) : s.fadeTo(90, t ? 1 : 0, u), t && d.target.trigger("qtip-" + this.id + "-inactive"), this))
        }, E.show = function(t) {
            return this.toggle(D, t)
        }, E.hide = function(t) {
            return this.toggle(q, t)
        }, E.focus = function(t) {
            if (!this.rendered || this.destroyed)
                return this;
            var e = i(Q),
                n = this.tooltip,
                r = parseInt(n[0].style.zIndex, 10),
                o = j.zindex + e.length;
            return n.hasClass(Z) || this._trigger("focus", [o], t) && (r !== o && (e.each(function() {
                this.style.zIndex > r && (this.style.zIndex = this.style.zIndex - 1)
            }), e.filter("." + Z).qtip("blur", t)), n.addClass(Z)[0].style.zIndex = o), this
        }, E.blur = function(t) {
            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(Z), this._trigger("blur", [this.tooltip.css("zIndex")], t), this)
        }, E.disable = function(t) {
            return this.destroyed ? this : ("toggle" === t ? t = !(this.rendered ? this.tooltip.hasClass(ee) : this.disabled) : "boolean" != typeof t && (t = D), this.rendered && this.tooltip.toggleClass(ee, t).attr("aria-disabled", t), this.disabled = !! t, this)
        }, E.enable = function() {
            return this.disable(q)
        }, E._createButton = function() {
            var t = this,
                e = this.elements,
                n = e.tooltip,
                r = this.options.content.button,
                o = "string" == typeof r,
                s = o ? r : "Close tooltip";
            e.button && e.button.remove(), e.button = r.jquery ? r : i("<a />", {
                "class": "qtip-close " + (this.options.style.widget ? "" : U + "-icon"),
                title: s,
                "aria-label": s
            }).prepend(i("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            })), e.button.appendTo(e.titlebar || n).attr("role", "button").click(function(e) {
                return n.hasClass(ee) || t.hide(e), q
            })
        }, E._updateButton = function(t) {
            if (!this.rendered)
                return q;
            var e = this.elements.button;
            t ? this._createButton() : e.remove()
        }, E._setWidget = function() {
            var t = this.options.style.widget,
                e = this.elements,
                n = e.tooltip,
                i = n.hasClass(ee);
            n.removeClass(ee), ee = t ? "ui-state-disabled" : "qtip-disabled", n.toggleClass(ee, i), n.toggleClass("ui-helper-reset " + c(), t).toggleClass(K, this.options.style.def && !t), e.content && e.content.toggleClass(c("content"), t), e.titlebar && e.titlebar.toggleClass(c("header"), t), e.button && e.button.toggleClass(U + "-icon", !t)
        }, E._storeMouse = function(t) {
            (this.mouse = h(t)).type = "mousemove"
        }, E._bind = function(t, e, n, r, o) {
            var s = "." + this._id + (r ? "-" + r : "");
            e.length && i(t).bind((e.split ? e : e.join(s + " ")) + s, i.proxy(n, o || this))
        }, E._unbind = function(t, e) {
            i(t).unbind("." + this._id + (e ? "-" + e : ""))
        };
        var le = "." + U;
        i(function() {
            v(Q, ["mouseenter", "mouseleave"], function(t) {
                var e = "mouseenter" === t.type,
                    n = i(t.currentTarget),
                    r = i(t.relatedTarget || t.target),
                    o = this.options;
                e ? (this.focus(t), n.hasClass(J) && !n.hasClass(ee) && clearTimeout(this.timers.hide)) : "mouse" === o.position.target && o.hide.event && o.show.target && !r.closest(o.show.target[0]).length && this.hide(t), n.toggleClass(te, e)
            }), v("[" + V + "]", G, m)
        }), E._trigger = function(t, e, n) {
            var r = i.Event("tooltip" + t);
            return r.originalEvent = n && i.extend({}, n) || this.cache.event || A, this.triggering = t, this.tooltip.trigger(r, [this].concat(e || [])), this.triggering = q, !r.isDefaultPrevented()
        }, E._bindEvents = function(t, e, r, o, s, a) {
            if (o.add(r).length === o.length) {
                var l = [];
                e = i.map(e, function(e) {
                    var r = i.inArray(e, t);
                    return r > -1 ? (l.push(t.splice(r, 1)[0]), n) : e
                }), l.length && this._bind(r, l, function(t) {
                    var e = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                    (e ? a : s).call(this, t)
                })
            }
            this._bind(r, t, s), this._bind(o, e, a)
        }, E._assignInitialEvents = function(t) {
            function e(t) {
                return this.disabled || this.destroyed ? q : (this.cache.event = h(t), this.cache.target = t ? i(t.target) : [n], clearTimeout(this.timers.show), this.timers.show = d.call(this, function() {
                    this.render("object" == typeof t || r.show.ready)
                }, r.show.delay), n)
            }
            var r = this.options,
                o = r.show.target,
                s = r.hide.target,
                a = r.show.event ? i.trim("" + r.show.event).split(" ") : [],
                l = r.hide.event ? i.trim("" + r.hide.event).split(" ") : [];
            /mouse(over|enter)/i.test(r.show.event) && !/mouse(out|leave)/i.test(r.hide.event) && l.push("mouseleave"), this._bind(o, "mousemove", function(t) {
                this._storeMouse(t), this.cache.onTarget = D
            }), this._bindEvents(a, l, o, s, e, function() {
                clearTimeout(this.timers.show)
            }), (r.show.ready || r.prerender) && e.call(this, t)
        }, E._assignEvents = function() {
            var n = this,
                r = this.options,
                o = r.position,
                s = this.tooltip,
                a = r.show.target,
                l = r.hide.target,
                u = o.container,
                c = o.viewport,
                h = i(e),
                d = (i(e.body), i(t)),
                v = r.show.event ? i.trim("" + r.show.event).split(" ") : [],
                y = r.hide.event ? i.trim("" + r.hide.event).split(" ") : [];
            i.each(r.events, function(t, e) {
                n._bind(s, "toggle" === t ? ["tooltipshow", "tooltiphide"] : ["tooltip" + t], e, null, s)
            }), /mouse(out|leave)/i.test(r.hide.event) && "window" === r.hide.leave && this._bind(h, ["mouseout", "blur"], function(t) {
                /select|option/.test(t.target.nodeName) || t.relatedTarget || this.hide(t)
            }), r.hide.fixed ? l = l.add(s.addClass(J)) : /mouse(over|enter)/i.test(r.show.event) && this._bind(l, "mouseleave", function() {
                clearTimeout(this.timers.show)
            }), ("" + r.hide.event).indexOf("unfocus") > -1 && this._bind(u.closest("html"), ["mousedown", "touchstart"], function(t) {
                var e = i(t.target),
                    n = this.rendered && !this.tooltip.hasClass(ee) && this.tooltip[0].offsetWidth > 0,
                    r = e.parents(Q).filter(this.tooltip[0]).length > 0;
                e[0] === this.target[0] || e[0] === this.tooltip[0] || r || this.target.has(e[0]).length || !n || this.hide(t)
            }), "number" == typeof r.hide.inactive && (this._bind(a, "qtip-" + this.id + "-inactive", m), this._bind(l.add(s), j.inactiveEvents, m, "-inactive")), this._bindEvents(v, y, a, l, f, p), this._bind(a.add(s), "mousemove", function(t) {
                if ("number" == typeof r.hide.distance) {
                    var e = this.cache.origin || {}, n = this.options.hide.distance,
                        i = Math.abs;
                    (i(t.pageX - e.pageX) >= n || i(t.pageY - e.pageY) >= n) && this.hide(t)
                }
                this._storeMouse(t)
            }), "mouse" === o.target && o.adjust.mouse && (r.hide.event && this._bind(a, ["mouseenter", "mouseleave"], function(t) {
                this.cache.onTarget = "mouseenter" === t.type
            }), this._bind(h, "mousemove", function(t) {
                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(ee) && this.tooltip[0].offsetWidth > 0 && this.reposition(t)
            })), (o.adjust.resize || c.length) && this._bind(i.event.special.resize ? c : d, "resize", g), o.adjust.scroll && this._bind(d.add(o.container), "scroll", g)
        }, E._unassignEvents = function() {
            var n = [this.options.show.target[0], this.options.hide.target[0], this.rendered && this.tooltip[0], this.options.position.container[0], this.options.position.viewport[0], this.options.position.container.closest("html")[0], t, e];
            this._unbind(i([]).pushStack(i.grep(n, function(t) {
                return "object" == typeof t
            })))
        }, j = i.fn.qtip = function(t, e, r) {
            var o = ("" + t).toLowerCase(),
                s = A,
                l = i.makeArray(arguments).slice(1),
                u = l[l.length - 1],
                c = this[0] ? i.data(this[0], U) : A;
            return !arguments.length && c || "api" === o ? c : "string" == typeof t ? (this.each(function() {
                var t = i.data(this, U);
                if (!t)
                    return D;
                if (u && u.timeStamp && (t.cache.event = u), !e || "option" !== o && "options" !== o)
                    t[o] && t[o].apply(t, l);
                else {
                    if (r === n && !i.isPlainObject(e))
                        return s = t.get(e), q;
                    t.set(e, r)
                }
            }), s !== A ? s : this) : "object" != typeof t && arguments.length ? n : (c = a(i.extend(D, {}, t)), this.each(function(t) {
                var e, r;
                return r = i.isArray(c.id) ? c.id[t] : c.id, r = !r || r === q || 1 > r.length || j.api[r] ? j.nextid++ : r, e = y(i(this), r, c), e === q ? D : (j.api[r] = e, i.each($, function() {
                    "initialize" === this.initialize && this(e)
                }), e._assignInitialEvents(u), n)
            }))
        }, i.qtip = r, j.api = {}, i.each({
            attr: function(t, e) {
                if (this.length) {
                    var n = this[0],
                        r = "title",
                        o = i.data(n, "qtip");
                    if (t === r && o && "object" == typeof o && o.options.suppress)
                        return 2 > arguments.length ? i.attr(n, ie) : (o && o.options.content.attr === r && o.cache.attr && o.set("content.text", e), this.attr(ie, e))
                }
                return i.fn["attr" + ne].apply(this, arguments)
            },
            clone: function(t) {
                var e = (i([]), i.fn["clone" + ne].apply(this, arguments));
                return t || e.filter("[" + ie + "]").attr("title", function() {
                    return i.attr(this, ie)
                }).removeAttr(ie), e
            }
        }, function(t, e) {
            if (!e || i.fn[t + ne])
                return D;
            var n = i.fn[t + ne] = i.fn[t];
            i.fn[t] = function() {
                return e.apply(this, arguments) || n.apply(this, arguments)
            }
        }), i.ui || (i["cleanData" + ne] = i.cleanData, i.cleanData = function(t) {
            for (var e, n = 0;
                (e = i(t[n])).length; n++)
                if (e.attr(X))
                    try {
                        e.triggerHandler("removeqtip")
                    } catch (r) {}
            i["cleanData" + ne].apply(this, arguments)
        }), j.version = "2.2.0", j.nextid = 0, j.inactiveEvents = G, j.zindex = 15e3, j.defaults = {
            prerender: q,
            id: q,
            overwrite: D,
            suppress: D,
            content: {
                text: D,
                attr: "title",
                title: q,
                button: q
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: q,
                container: q,
                viewport: q,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: D,
                    scroll: D,
                    resize: D,
                    method: "flipinvert flipinvert"
                },
                effect: function(t, e) {
                    i(this).animate(e, {
                        duration: 200,
                        queue: q
                    })
                }
            },
            show: {
                target: q,
                event: "mouseenter",
                effect: D,
                delay: 90,
                solo: q,
                ready: q,
                autofocus: q
            },
            hide: {
                target: q,
                event: "mouseleave",
                effect: D,
                delay: 0,
                fixed: q,
                inactive: q,
                leave: "window",
                distance: q
            },
            style: {
                classes: "",
                widget: q,
                width: q,
                height: q,
                def: D
            },
            events: {
                render: A,
                move: A,
                show: A,
                hide: A,
                toggle: A,
                visible: A,
                hidden: A,
                focus: A,
                blur: A
            }
        };
        var ue, ce = "margin",
            he = "border",
            de = "color",
            fe = "background-color",
            pe = "transparent",
            me = " !important",
            ge = !! e.createElement("canvas").getContext,
            ve = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
            ye = {}, be = ["Webkit", "O", "Moz", "ms"];
        if (ge)
            var xe = t.devicePixelRatio || 1,
        we = function() {
            var t = e.createElement("canvas").getContext("2d");
            return t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || 1
        }(), _e = xe / we;
        else
            var Te = function(t, e, n) {
                return "<qtipvml:" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (e || "") + ' style="behavior: url(#default#VML); ' + (n || "") + '" />'
            };
        i.extend(_.prototype, {
            init: function(t) {
                var e, n;
                n = this.element = t.elements.tip = i("<div />", {
                    "class": U + "-tip"
                }).prependTo(t.tooltip), ge ? (e = i("<canvas />").appendTo(this.element)[0].getContext("2d"), e.lineJoin = "miter", e.miterLimit = 1e5, e.save()) : (e = Te("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(e + e), t._bind(i("*", n).add(n), ["click", "mousedown"], function(t) {
                    t.stopPropagation()
                }, this._ns)), t._bind(t.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
            },
            _swapDimensions: function() {
                this.size[0] = this.options.height, this.size[1] = this.options.width
            },
            _resetDimensions: function() {
                this.size[0] = this.options.width, this.size[1] = this.options.height
            },
            _useTitle: function(t) {
                var e = this.qtip.elements.titlebar;
                return e && (t.y === z || t.y === P && this.element.position().top + this.size[1] / 2 + this.options.offset < e.outerHeight(D))
            },
            _parseCorner: function(t) {
                var e = this.qtip.options.position.my;
                return t === q || e === q ? t = q : t === D ? t = new k(e.string()) : t.string || (t = new k(t), t.fixed = D), t
            },
            _parseWidth: function(t, e, n) {
                var i = this.qtip.elements,
                    r = he + b(e) + "Width";
                return (n ? w(n, r) : w(i.content, r) || w(this._useTitle(t) && i.titlebar || i.content, r) || w(i.tooltip, r)) || 0
            },
            _parseRadius: function(t) {
                var e = this.qtip.elements,
                    n = he + b(t.y) + b(t.x) + "Radius";
                return 9 > re.ie ? 0 : w(this._useTitle(t) && e.titlebar || e.content, n) || w(e.tooltip, n) || 0
            },
            _invalidColour: function(t, e, n) {
                var i = t.css(e);
                return !i || n && i === t.css(n) || ve.test(i) ? q : i
            },
            _parseColours: function(t) {
                var e = this.qtip.elements,
                    n = this.element.css("cssText", ""),
                    r = he + b(t[t.precedance]) + b(de),
                    o = this._useTitle(t) && e.titlebar || e.content,
                    s = this._invalidColour,
                    a = [];
                return a[0] = s(n, fe) || s(o, fe) || s(e.content, fe) || s(e.tooltip, fe) || n.css(fe), a[1] = s(n, r, de) || s(o, r, de) || s(e.content, r, de) || s(e.tooltip, r, de) || e.tooltip.css(r), i("*", n).add(n).css("cssText", fe + ":" + pe + me + ";" + he + ":0" + me + ";"), a
            },
            _calculateSize: function(t) {
                var e, n, i, r = t.precedance === M,
                    o = this.options.width,
                    s = this.options.height,
                    a = "c" === t.abbrev(),
                    l = (r ? o : s) * (a ? .5 : 1),
                    u = Math.pow,
                    c = Math.round,
                    h = Math.sqrt(u(l, 2) + u(s, 2)),
                    d = [this.border / l * h, this.border / s * h];
                return d[2] = Math.sqrt(u(d[0], 2) - u(this.border, 2)), d[3] = Math.sqrt(u(d[1], 2) - u(this.border, 2)), e = h + d[2] + d[3] + (a ? 0 : d[0]), n = e / h, i = [c(n * o), c(n * s)], r ? i : i.reverse()
            },
            _calculateTip: function(t, e, n) {
                n = n || 1, e = e || this.size;
                var i = e[0] * n,
                    r = e[1] * n,
                    o = Math.ceil(i / 2),
                    s = Math.ceil(r / 2),
                    a = {
                        br: [0, 0, i, r, i, 0],
                        bl: [0, 0, i, 0, 0, r],
                        tr: [0, r, i, 0, i, r],
                        tl: [0, 0, 0, r, i, r],
                        tc: [0, r, o, 0, i, r],
                        bc: [0, 0, i, 0, o, r],
                        rc: [0, 0, i, s, 0, r],
                        lc: [i, 0, i, r, 0, s]
                    };
                return a.lt = a.br, a.rt = a.bl, a.lb = a.tr, a.rb = a.tl, a[t.abbrev()]
            },
            _drawCoords: function(t, e) {
                t.beginPath(), t.moveTo(e[0], e[1]), t.lineTo(e[2], e[3]), t.lineTo(e[4], e[5]), t.closePath()
            },
            create: function() {
                var t = this.corner = (ge || re.ie) && this._parseCorner(this.options.corner);
                return (this.enabled = !! this.corner && "c" !== this.corner.abbrev()) && (this.qtip.cache.corner = t.clone(), this.update()), this.element.toggle(this.enabled), this.corner
            },
            update: function(e, n) {
                if (!this.enabled)
                    return this;
                var r, o, s, a, l, u, c, h, d = this.qtip.elements,
                    f = this.element,
                    p = f.children(),
                    m = this.options,
                    g = this.size,
                    v = m.mimic,
                    y = Math.round;
                e || (e = this.qtip.cache.corner || this.corner), v === q ? v = e : (v = new k(v), v.precedance = e.precedance, "inherit" === v.x ? v.x = e.x : "inherit" === v.y ? v.y = e.y : v.x === v.y && (v[e.precedance] = e[e.precedance])), o = v.precedance, e.precedance === L ? this._swapDimensions() : this._resetDimensions(), r = this.color = this._parseColours(e), r[1] !== pe ? (h = this.border = this._parseWidth(e, e[e.precedance]), m.border && 1 > h && !ve.test(r[1]) && (r[0] = r[1]), this.border = h = m.border !== D ? m.border : h) : this.border = h = 0, c = this.size = this._calculateSize(e), f.css({
                    width: c[0],
                    height: c[1],
                    lineHeight: c[1] + "px"
                }), u = e.precedance === M ? [y(v.x === O ? h : v.x === I ? c[0] - g[0] - h : (c[0] - g[0]) / 2), y(v.y === z ? c[1] - g[1] : 0)] : [y(v.x === O ? c[0] - g[0] : 0), y(v.y === z ? h : v.y === W ? c[1] - g[1] - h : (c[1] - g[1]) / 2)], ge ? (s = p[0].getContext("2d"), s.restore(), s.save(), s.clearRect(0, 0, 6e3, 6e3), a = this._calculateTip(v, g, _e), l = this._calculateTip(v, this.size, _e), p.attr(F, c[0] * _e).attr(H, c[1] * _e), p.css(F, c[0]).css(H, c[1]), this._drawCoords(s, l), s.fillStyle = r[1], s.fill(), s.translate(u[0] * _e, u[1] * _e), this._drawCoords(s, a), s.fillStyle = r[0], s.fill()) : (a = this._calculateTip(v), a = "m" + a[0] + "," + a[1] + " l" + a[2] + "," + a[3] + " " + a[4] + "," + a[5] + " xe", u[2] = h && /^(r|b)/i.test(e.string()) ? 8 === re.ie ? 2 : 1 : 0, p.css({
                    coordsize: c[0] + h + " " + (c[1] + h),
                    antialias: "" + (v.string().indexOf(P) > -1),
                    left: u[0] - u[2] * Number(o === L),
                    top: u[1] - u[2] * Number(o === M),
                    width: c[0] + h,
                    height: c[1] + h
                }).each(function(t) {
                    var e = i(this);
                    e[e.prop ? "prop" : "attr"]({
                        coordsize: c[0] + h + " " + (c[1] + h),
                        path: a,
                        fillcolor: r[0],
                        filled: !! t,
                        stroked: !t
                    }).toggle(!(!h && !t)), !t && e.html(Te("stroke", 'weight="' + 2 * h + 'px" color="' + r[1] + '" miterlimit="1000" joinstyle="miter"'))
                })), t.opera && setTimeout(function() {
                    d.tip.css({
                        display: "inline-block",
                        visibility: "visible"
                    })
                }, 1), n !== q && this.calculate(e, c)
            },
            calculate: function(t, e) {
                if (!this.enabled)
                    return q;
                var n, r, o = this,
                    s = this.qtip.elements,
                    a = this.element,
                    l = this.options.offset,
                    u = (s.tooltip.hasClass("ui-widget"), {});
                return t = t || this.corner, n = t.precedance, e = e || this._calculateSize(t), r = [t.x, t.y], n === L && r.reverse(), i.each(r, function(i, r) {
                    var a, c, h;
                    r === P ? (a = n === M ? O : z, u[a] = "50%", u[ce + "-" + a] = -Math.round(e[n === M ? 0 : 1] / 2) + l) : (a = o._parseWidth(t, r, s.tooltip), c = o._parseWidth(t, r, s.content), h = o._parseRadius(t), u[r] = Math.max(-o.border, i ? c : l + (h > a ? h : -a)))
                }), u[t[n]] -= e[n === L ? 0 : 1], a.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                }).css(u), u
            },
            reposition: function(t, e, i) {
                function r(t, e, n, i, r) {
                    t === R && u.precedance === e && c[i] && u[n] !== P ? u.precedance = u.precedance === L ? M : L : t !== R && c[i] && (u[e] = u[e] === P ? c[i] > 0 ? i : r : u[e] === i ? r : i)
                }

                function o(t, e, r) {
                    u[t] === P ? m[ce + "-" + e] = p[t] = s[ce + "-" + e] - c[e] : (a = s[r] !== n ? [c[e], -s[e]] : [-c[e], s[e]], (p[t] = Math.max(a[0], a[1])) > a[0] && (i[e] -= c[e], p[e] = q), m[s[r] !== n ? r : e] = p[t])
                }
                if (this.enabled) {
                    var s, a, l = e.cache,
                        u = this.corner.clone(),
                        c = i.adjusted,
                        h = e.options.position.adjust.method.split(" "),
                        d = h[0],
                        f = h[1] || h[0],
                        p = {
                            left: q,
                            top: q,
                            x: 0,
                            y: 0
                        }, m = {};
                    this.corner.fixed !== D && (r(d, L, M, O, I), r(f, M, L, z, W), u.string() === l.corner.string() || l.cornerTop === c.top && l.cornerLeft === c.left || this.update(u, q)), s = this.calculate(u), s.right !== n && (s.left = -s.right), s.bottom !== n && (s.top = -s.bottom), s.user = this.offset, (p.left = d === R && !! c.left) && o(L, O, I), (p.top = f === R && !! c.top) && o(M, z, W), this.element.css(m).toggle(!(p.x && p.y || u.x === P && p.y || u.y === P && p.x)), i.left -= s.left.charAt ? s.user : d !== R || p.top || !p.left && !p.top ? s.left + this.border : 0, i.top -= s.top.charAt ? s.user : f !== R || p.left || !p.left && !p.top ? s.top + this.border : 0, l.cornerLeft = c.left, l.cornerTop = c.top, l.corner = u.clone()
                }
            },
            destroy: function() {
                this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
            }
        }), ue = $.tip = function(t) {
            return new _(t, t.options.style.tip)
        }, ue.initialize = "render", ue.sanitize = function(t) {
            if (t.style && "tip" in t.style) {
                var e = t.style.tip;
                "object" != typeof e && (e = t.style.tip = {
                    corner: e
                }), /string|boolean/i.test(typeof e.corner) || (e.corner = D)
            }
        }, N.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                this.create(), this.qtip.reposition()
            },
            "^style.tip.(height|width)$": function(t) {
                this.size = [t.width, t.height], this.update(), this.qtip.reposition()
            },
            "^content.title|style.(classes|widget)$": function() {
                this.update()
            }
        }, i.extend(D, j.defaults, {
            style: {
                tip: {
                    corner: D,
                    mimic: q,
                    width: 6,
                    height: 6,
                    border: D,
                    offset: 0
                }
            }
        });
        var Ce, je, Ee = "qtip-modal",
            ke = "." + Ee;
        je = function() {
            function t(t) {
                if (i.expr[":"].focusable)
                    return i.expr[":"].focusable;
                var e, n, r, o = !isNaN(i.attr(t, "tabindex")),
                    s = t.nodeName && t.nodeName.toLowerCase();
                return "area" === s ? (e = t.parentNode, n = e.name, t.href && n && "map" === e.nodeName.toLowerCase() ? (r = i("img[usemap=#" + n + "]")[0], !! r && r.is(":visible")) : !1) : /input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s ? t.href || o : o
            }

            function n(t) {
                1 > c.length && t.length ? t.not("body").blur() : c.first().focus()
            }

            function r(t) {
                if (l.is(":visible")) {
                    var e, r = i(t.target),
                        a = o.tooltip,
                        u = r.closest(Q);
                    e = 1 > u.length ? q : parseInt(u[0].style.zIndex, 10) > parseInt(a[0].style.zIndex, 10), e || r.closest(Q)[0] === a[0] || n(r), s = t.target === c[c.length - 1]
                }
            }
            var o, s, a, l, u = this,
                c = {};
            i.extend(u, {
                init: function() {
                    return l = u.elem = i("<div />", {
                        id: "qtip-overlay",
                        html: "<div></div>",
                        mousedown: function() {
                            return q
                        }
                    }).hide(), i(e.body).bind("focusin" + ke, r), i(e).bind("keydown" + ke, function(t) {
                        o && o.options.show.modal.escape && 27 === t.keyCode && o.hide(t)
                    }), l.bind("click" + ke, function(t) {
                        o && o.options.show.modal.blur && o.hide(t)
                    }), u
                },
                update: function(e) {
                    o = e, c = e.options.show.modal.stealfocus !== q ? e.tooltip.find("*").filter(function() {
                        return t(this)
                    }) : []
                },
                toggle: function(t, r, s) {
                    var c = (i(e.body), t.tooltip),
                        h = t.options.show.modal,
                        d = h.effect,
                        f = r ? "show" : "hide",
                        p = l.is(":visible"),
                        m = i(ke).filter(":visible:not(:animated)").not(c);
                    return u.update(t), r && h.stealfocus !== q && n(i(":focus")), l.toggleClass("blurs", h.blur), r && l.appendTo(e.body), l.is(":animated") && p === r && a !== q || !r && m.length ? u : (l.stop(D, q), i.isFunction(d) ? d.call(l, r) : d === q ? l[f]() : l.fadeTo(parseInt(s, 10) || 90, r ? 1 : 0, function() {
                        r || l.hide()
                    }), r || l.queue(function(t) {
                        l.css({
                            left: "",
                            top: ""
                        }), i(ke).length || l.detach(), t()
                    }), a = r, o.destroyed && (o = A), u)
                }
            }), u.init()
        }, je = new je, i.extend(T.prototype, {
            init: function(t) {
                var e = t.tooltip;
                return this.options.on ? (t.elements.overlay = je.elem, e.addClass(Ee).css("z-index", j.modal_zindex + i(ke).length), t._bind(e, ["tooltipshow", "tooltiphide"], function(t, n, r) {
                    var o = t.originalEvent;
                    if (t.target === e[0])
                        if (o && "tooltiphide" === t.type && /mouse(leave|enter)/.test(o.type) && i(o.relatedTarget).closest(je.elem[0]).length)
                            try {
                                t.preventDefault()
                            } catch (s) {} else
                            (!o || o && "tooltipsolo" !== o.type) && this.toggle(t, "tooltipshow" === t.type, r)
                }, this._ns, this), t._bind(e, "tooltipfocus", function(t, n) {
                    if (!t.isDefaultPrevented() && t.target === e[0]) {
                        var r = i(ke),
                            o = j.modal_zindex + r.length,
                            s = parseInt(e[0].style.zIndex, 10);
                        je.elem[0].style.zIndex = o - 1, r.each(function() {
                            this.style.zIndex > s && (this.style.zIndex -= 1)
                        }), r.filter("." + Z).qtip("blur", t.originalEvent), e.addClass(Z)[0].style.zIndex = o, je.update(n);
                        try {
                            t.preventDefault()
                        } catch (a) {}
                    }
                }, this._ns, this), t._bind(e, "tooltiphide", function(t) {
                    t.target === e[0] && i(ke).filter(":visible").not(e).last().qtip("focus", t)
                }, this._ns, this), n) : this
            },
            toggle: function(t, e, i) {
                return t && t.isDefaultPrevented() ? this : (je.toggle(this.qtip, !! e, i), n)
            },
            destroy: function() {
                this.qtip.tooltip.removeClass(Ee), this.qtip._unbind(this.qtip.tooltip, this._ns), je.toggle(this.qtip, q), delete this.qtip.elements.overlay
            }
        }), Ce = $.modal = function(t) {
            return new T(t, t.options.show.modal)
        }, Ce.sanitize = function(t) {
            t.show && ("object" != typeof t.show.modal ? t.show.modal = {
                on: !! t.show.modal
            } : t.show.modal.on === n && (t.show.modal.on = D))
        }, j.modal_zindex = j.zindex - 200, Ce.initialize = "render", N.modal = {
            "^show.modal.(on|blur)$": function() {
                this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
            }
        }, i.extend(D, j.defaults, {
            show: {
                modal: {
                    on: q,
                    effect: D,
                    blur: D,
                    stealfocus: D,
                    escape: D
                }
            }
        }), $.viewport = function(n, i, r, o, s, a, l) {
            function u(t, e, n, r, o, s, a, l, u) {
                var c = i[o],
                    d = w[t],
                    b = _[t],
                    x = n === R,
                    T = d === o ? u : d === s ? -u : -u / 2,
                    C = b === o ? l : b === s ? -l : -l / 2,
                    j = v[o] + y[o] - (p ? 0 : f[o]),
                    E = j - c,
                    k = c + u - (a === F ? m : g) - j,
                    N = T - (w.precedance === t || d === w[e] ? C : 0) - (b === P ? l / 2 : 0);
                return x ? (N = (d === o ? 1 : -1) * T, i[o] += E > 0 ? E : k > 0 ? -k : 0, i[o] = Math.max(-f[o] + y[o], c - N, Math.min(Math.max(-f[o] + y[o] + (a === F ? m : g), c + N), i[o], "center" === d ? c - T : 1e9))) : (r *= n === B ? 2 : 0, E > 0 && (d !== o || k > 0) ? (i[o] -= N + r, h.invert(t, o)) : k > 0 && (d !== s || E > 0) && (i[o] -= (d === P ? -N : N) + r, h.invert(t, s)), v > i[o] && -i[o] > k && (i[o] = c, h = w.clone())), i[o] - c
            }
            var c, h, d, f, p, m, g, v, y, b = r.target,
                x = n.elements.tooltip,
                w = r.my,
                _ = r.at,
                T = r.adjust,
                C = T.method.split(" "),
                j = C[0],
                E = C[1] || C[0],
                k = r.viewport,
                N = r.container,
                S = n.cache,
                D = {
                    left: 0,
                    top: 0
                };
            return k.jquery && b[0] !== t && b[0] !== e.body && "none" !== T.method ? (f = N.offset() || D, p = "static" === N.css("position"), c = "fixed" === x.css("position"), m = k[0] === t ? k.width() : k.outerWidth(q), g = k[0] === t ? k.height() : k.outerHeight(q), v = {
                left: c ? 0 : k.scrollLeft(),
                top: c ? 0 : k.scrollTop()
            }, y = k.offset() || D, ("shift" !== j || "shift" !== E) && (h = w.clone()), D = {
                left: "none" !== j ? u(L, M, j, T.x, O, I, F, o, a) : 0,
                top: "none" !== E ? u(M, L, E, T.y, z, W, H, s, l) : 0
            }, h && S.lastClass !== (d = U + "-pos-" + h.abbrev()) && x.removeClass(n.cache.lastClass).addClass(n.cache.lastClass = d), D) : D
        }, $.polys = {
            polygon: function(t, e) {
                var n, i, r, o = {
                        width: 0,
                        height: 0,
                        position: {
                            top: 1e10,
                            right: 0,
                            bottom: 0,
                            left: 1e10
                        },
                        adjustable: q
                    }, s = 0,
                    a = [],
                    l = 1,
                    u = 1,
                    c = 0,
                    h = 0;
                for (s = t.length; s--;)
                    n = [parseInt(t[--s], 10), parseInt(t[s + 1], 10)], n[0] > o.position.right && (o.position.right = n[0]), n[0] < o.position.left && (o.position.left = n[0]), n[1] > o.position.bottom && (o.position.bottom = n[1]), n[1] < o.position.top && (o.position.top = n[1]), a.push(n);
                if (i = o.width = Math.abs(o.position.right - o.position.left), r = o.height = Math.abs(o.position.bottom - o.position.top), "c" === e.abbrev())
                    o.position = {
                        left: o.position.left + o.width / 2,
                        top: o.position.top + o.height / 2
                    };
                else {
                    for (; i > 0 && r > 0 && l > 0 && u > 0;)
                        for (i = Math.floor(i / 2), r = Math.floor(r / 2), e.x === O ? l = i : e.x === I ? l = o.width - i : l += Math.floor(i / 2), e.y === z ? u = r : e.y === W ? u = o.height - r : u += Math.floor(r / 2), s = a.length; s-- && !(2 > a.length);)
                            c = a[s][0] - o.position.left, h = a[s][1] - o.position.top, (e.x === O && c >= l || e.x === I && l >= c || e.x === P && (l > c || c > o.width - l) || e.y === z && h >= u || e.y === W && u >= h || e.y === P && (u > h || h > o.height - u)) && a.splice(s, 1);
                    o.position = {
                        left: a[0][0],
                        top: a[0][1]
                    }
                }
                return o
            },
            rect: function(t, e, n, i) {
                return {
                    width: Math.abs(n - t),
                    height: Math.abs(i - e),
                    position: {
                        left: Math.min(t, n),
                        top: Math.min(e, i)
                    }
                }
            },
            _angles: {
                tc: 1.5,
                tr: 7 / 4,
                tl: 5 / 4,
                bc: .5,
                br: .25,
                bl: .75,
                rc: 2,
                lc: 1,
                c: 0
            },
            ellipse: function(t, e, n, i, r) {
                var o = $.polys._angles[r.abbrev()],
                    s = 0 === o ? 0 : n * Math.cos(o * Math.PI),
                    a = i * Math.sin(o * Math.PI);
                return {
                    width: 2 * n - Math.abs(s),
                    height: 2 * i - Math.abs(a),
                    position: {
                        left: t + s,
                        top: e + a
                    },
                    adjustable: q
                }
            },
            circle: function(t, e, n, i) {
                return $.polys.ellipse(t, e, n, n, i)
            }
        }, $.svg = function(t, n, r) {
            for (var o, s, a, l, u, c, h, d, f, p = (i(e), n[0]), m = i(p.ownerSVGElement), g = p.ownerDocument, v = (parseInt(n.css("stroke-width"), 10) || 0) / 2, y = !0; !p.getBBox;)
                p = p.parentNode;
            if (!p.getBBox || !p.parentNode)
                return q;
            switch (p.nodeName) {
                case "ellipse":
                case "circle":
                    d = $.polys.ellipse(p.cx.baseVal.value, p.cy.baseVal.value, (p.rx || p.r).baseVal.value + v, (p.ry || p.r).baseVal.value + v, r);
                    break;
                case "line":
                case "polygon":
                case "polyline":
                    for (h = p.points || [{
                        x: p.x1.baseVal.value,
                        y: p.y1.baseVal.value
                    }, {
                        x: p.x2.baseVal.value,
                        y: p.y2.baseVal.value
                    }], d = [], c = -1, l = h.numberOfItems || h.length; l > ++c;)
                        u = h.getItem ? h.getItem(c) : h[c], d.push.apply(d, [u.x, u.y]);
                    d = $.polys.polygon(d, r);
                    break;
                default:
                    d = p.getBoundingClientRect(), d = {
                        width: d.width,
                        height: d.height,
                        position: {
                            left: d.left,
                            top: d.top
                        }
                    }, y = !1
            }
            if (f = d.position, m = m[0], y && m.createSVGPoint && (s = p.getScreenCTM(), h = m.createSVGPoint(), h.x = f.left, h.y = f.top, a = h.matrixTransform(s), f.left = a.x, f.top = a.y), g !== e) {
                var o = i((g.defaultView || g.parentWindow).frameElement).offset();
                o && (f.left += o.left, f.top += o.top)
            }
            return g = i(g), f.left += g.scrollLeft(), f.top += g.scrollTop(), d
        }, $.imagemap = function(t, e, n) {
            e.jquery || (e = i(e));
            var r, o, s, a, l, u = e.attr("shape").toLowerCase().replace("poly", "polygon"),
                c = i('img[usemap="#' + e.parent("map").attr("name") + '"]'),
                h = i.trim(e.attr("coords")),
                d = h.replace(/,$/, "").split(",");
            if (!c.length)
                return q;
            if ("polygon" === u)
                a = $.polys.polygon(d, n);
            else {
                if (!$.polys[u])
                    return q;
                for (s = -1, l = d.length, o = []; l > ++s;)
                    o.push(parseInt(d[s], 10));
                a = $.polys[u].apply(this, o.concat(n))
            }
            return r = c.offset(), r.left += Math.ceil((c.outerWidth(q) - c.width()) / 2), r.top += Math.ceil((c.outerHeight(q) - c.height()) / 2), a.position.left += r.left, a.position.top += r.top, a
        };
        var Ne, Se = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
        i.extend(C.prototype, {
            _scroll: function() {
                var e = this.qtip.elements.overlay;
                e && (e[0].style.top = i(t).scrollTop() + "px")
            },
            init: function(n) {
                var r = n.tooltip;
                1 > i("select, object").length && (this.bgiframe = n.elements.bgiframe = i(Se).appendTo(r), n._bind(r, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = i("<div/>", {
                    id: U + "-rcontainer"
                }).appendTo(e.body), n.elements.overlay && n.elements.overlay.addClass("qtipmodal-ie6fix") && (n._bind(t, ["scroll", "resize"], this._scroll, this._ns, this), n._bind(r, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw()
            },
            adjustBGIFrame: function() {
                var t, e, n = this.qtip.tooltip,
                    i = {
                        height: n.outerHeight(q),
                        width: n.outerWidth(q)
                    }, r = this.qtip.plugins.tip,
                    o = this.qtip.elements.tip;
                e = parseInt(n.css("borderLeftWidth"), 10) || 0, e = {
                    left: -e,
                    top: -e
                }, r && o && (t = "x" === r.corner.precedance ? [F, O] : [H, z], e[t[1]] -= o[t[0]]()), this.bgiframe.css(e).css(i)
            },
            redraw: function() {
                if (1 > this.qtip.rendered || this.drawing)
                    return this;
                var t, e, n, i, r = this.qtip.tooltip,
                    o = this.qtip.options.style,
                    s = this.qtip.options.position.container;
                return this.qtip.drawing = 1, o.height && r.css(H, o.height), o.width ? r.css(F, o.width) : (r.css(F, "").appendTo(this.redrawContainer), e = r.width(), 1 > e % 2 && (e += 1), n = r.css("maxWidth") || "", i = r.css("minWidth") || "", t = (n + i).indexOf("%") > -1 ? s.width() / 100 : 0, n = (n.indexOf("%") > -1 ? t : 1) * parseInt(n, 10) || e, i = (i.indexOf("%") > -1 ? t : 1) * parseInt(i, 10) || 0, e = n + i ? Math.min(Math.max(e, i), n) : e, r.css(F, Math.round(e)).appendTo(s)), this.drawing = 0, this
            },
            destroy: function() {
                this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([t, this.qtip.tooltip], this._ns)
            }
        }), Ne = $.ie6 = function(t) {
            return 6 === re.ie ? new C(t) : q
        }, Ne.initialize = "render", N.ie6 = {
            "^content|style$": function() {
                this.redraw()
            }
        }
    })
}(window, document),
function() {
    var t, e, n, i, r, o, s;
    i = "74bf0bf0d27dc22d8f6d5a62726cb6cc", r = document.createElement("script"), r.async = !0, r.src = "//hm.baidu.com/h.js?" + i, (document.head || document.body).appendChild(r), o = "我刚刚发现一个活动@BCTF百度杯网络安全技术对抗赛 http://bctf.cn ，由@百度 主办，@安全宝-蓝莲花 战队提供技术支持的全国性CTF竞赛，提供五万元冠军奖金，@百度杀毒 和@百度卫士 的实习工作Offer，清华北大实验室实习机会，及大学生创业扶持，小伙伴们组队来玩吧", $(".social a").each(function(t, e) {
        return e.href = e.href.replace("{url}", location.origin).replace("{title}", o)
    }), $("#regenerate").click(function() {
        return $.post(this.href, function() {
            return location.reload()
        }), !1
    }), (e = document.getElementById("countdown")) && (s = function() {
        var t, n, i, o, a, l, u, c, h, d;
        for (a = [new Date(Date.UTC(2014, 2, 8, 0, 0, 0)), "离资格赛开始还有 "], o = [new Date(Date.UTC(2014, 2, 10, 0, 0, 0)), "离资格赛结束还有 "], n = [new Date(Date.UTC(2014, 4, 1, 16, 0, 0)), "离决赛开始还有 "], t = [new Date(Date.UTC(2014, 4, 3, 16, 0, 0)), "离决赛开始还有 "], h = [a, o, n, t], d = [], u = 0, c = h.length; c > u; u++) {
            if (i = h[u], l = countdown(null, i[0], countdown.ALL & ~countdown.MILLISECONDS), l.value >= 0) {
                r = "" + i[1] + " " + l.toString(), "zh-Hant" === document.documentElement.lang && (r = r.replace("离", "離"), r = r.replace("资格", "資格"), r = r.replace("赛", "賽"), r = r.replace("开始", "開始"), r = r.replace("还有", "還有"), r = r.replace("时", "時"), r = r.replace("周", "週")), e.textContent = r, "undefined" != typeof requestAnimationFrame && null !== requestAnimationFrame ? requestAnimationFrame(s, e) : setTimeout(s, 1e3);
                break
            }
            d.push(void 0)
        }
        return d
    })(), (t = $(".jcarousel").jcarousel({
        wrap: "both"
    })) && $(".girls-show").size() > 0 && t.each(function(t, e) {
        var n;
        return (n = function(t) {
            return setTimeout(function() {
                return $(t).jcarousel("scroll", "+=1"), n(t)
            }, 5e3 * Math.random() + 2e3)
        })(e)
    }), $(".jcarousel-pagination").on("jcarouselpagination:active", "a", function() {
        return $(this).addClass("active")
    }).on("jcarouselpagination:inactive", "a", function() {
        return $(this).removeClass("active")
    }).each(function(e, n) {
        return $(n).jcarouselPagination({
            carousel: $(t[e]),
            item: function(t) {
                return "<a href=#" + t + "></a>"
            }
        })
    }), $("#girl-poll-range").on("change", function() {
        return $("#girl-poll-number").prop("value", this.value)
    }), $("#girl-poll-number").on("input", function() {
        var t, e;
        return t = $("#girl-poll-range"), e = Math.min(this.value, t.prop("max")), $("#girl-poll-range").prop("value", e)
    }), n = $("#girl-poll-range")[0], n && "range" !== n.type && (n.style.display = "none")
}.call(this);