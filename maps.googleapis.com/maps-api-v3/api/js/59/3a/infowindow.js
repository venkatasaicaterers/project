google.maps.__gjsload__('infowindow', function(_) {
    var rN = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        CSa = function(a, b) {
            if (a.Eg.size === 1) {
                const c = Array.from(a.Eg.values())[0];
                c.kv !== b.kv && (c.set("map", null), a.Eg.delete(c))
            }
            a.Eg.add(b)
        },
        ESa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Pl: a,
                Ej: _.Xy.Ej(),
                ex: c,
                shouldFocus: b
            };
            return new DSa(b)
        },
        sN = function(a, b) {
            a.Yg.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? FSa(a) : a.Pg = !1
        },
        GSa = function(a) {
            a.Mi.setAttribute("aria-labelledby", a.Kg.id)
        },
        HSa = function(a) {
            const b = !!a.get("open");
            var c = a.get("content");
            c = b ? c : null;
            if (c == a.Ig) sN(a, b && a.get("position"));
            else {
                if (a.Ig) {
                    const d = a.Ig.parentNode;
                    d == a.Eg && d.removeChild(a.Ig)
                }
                c && (a.Og = !1, a.Eg.appendChild(c));
                sN(a, b && a.get("position"));
                a.Ig = c;
                tN(a)
            }
        },
        uN = function(a) {
            var b = !!a.get("open"),
                c = a.get("headerContent");
            const d = !!a.get("ariaLabel"),
                e = !a.get("headerDisabled");
            b = b ? c : null;
            a.Mi.style.paddingTop = e ? "0" : "12px";
            b === a.Jg ? a.Hg.style.display = e ? "" : "none" : (a.Jg && (c = a.Jg.parentNode, c === a.Kg && c.removeChild(a.Jg)),
                b && (a.Og = !1, a.Kg.appendChild(b), e && !d && GSa(a)), a.Hg.style.display = e ? "" : "none", a.Jg = b, tN(a))
        },
        tN = function(a) {
            var b = a.getSize();
            if (b) {
                var c = b.em;
                b = b.minWidth;
                a.Mi.style.maxWidth = _.os(c.width);
                a.Mi.style.maxHeight = _.os(c.height);
                a.Mi.style.minWidth = _.os(b);
                a.Eg.style.maxHeight = _.rn.Eg ? _.os(c.height - 18) : _.os(c.height - 36);
                vN(a);
                a.Ng.start()
            }
        },
        ISa = function(a) {
            const b = a.get("pixelOffset") || new _.Ml(0, 0);
            var c = new _.Ml(a.Mi.offsetWidth, a.Mi.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            let d = b.height + 60;
            const e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            b.height < 0 && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        FSa = function(a) {
            !a.Pg && a.get("open") && a.get("visible") && a.get("position") && (_.Uk(a, "visible"), a.Pg = !0)
        },
        vN = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = ISa(a);
                const d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.Ss(a.anchor, b);
                b = a.get("zIndex");
                _.Us(a.Yg, _.Nj(b) ? b : e + 60);
                a.set("pixelBounds", _.Cm(d, e, f, c))
            }
        },
        KSa = function(a, b, c) {
            return b instanceof _.pl ? new JSa(a,
                b, c) : new JSa(a, b)
        },
        MSa = function(a) {
            a.Eg && a.pi.push(_.Sk(a.Eg, "pixelposition_changed", () => {
                LSa(a)
            }))
        },
        LSa = function(a) {
            const b = a.model.get("pixelPosition") || a.Eg && a.Eg.get("pixelPosition");
            a.Ig.set("position", b)
        },
        OSa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new NSa);
            return a.get("IW_AUTO_CLOSER")
        },
        NSa = class {
            constructor() {
                this.Eg = new Set
            }
        };
    var DSa = class extends _.Xk {
        constructor(a) {
            super();
            this.Ig = this.Jg = this.Mg = null;
            this.Pg = this.Og = !1;
            this.ex = a.ex;
            this.shouldFocus = a.shouldFocus;
            this.Yg = document.createElement("div");
            this.Yg.style.cursor = "default";
            this.Yg.style.position = "absolute";
            this.Yg.style.left = this.Yg.style.top = "0";
            a.Pl.floatPane.appendChild(this.Yg);
            this.anchor = _.Ts("div", this.Yg);
            this.Lg = _.Ts("div", this.anchor);
            this.Mi = _.Ts("div", this.Lg);
            this.Mi.setAttribute("role", "dialog");
            this.Mi.tabIndex = -1;
            this.Hg = _.Ts("div", this.Mi);
            this.Kg =
                _.Ts("div", this.Hg);
            this.Sg = _.Ts("div", this.Lg);
            this.Eg = _.Ts("div", this.Mi);
            _.$Ia(this.Yg);
            _.Ns(this.Mi, "gm-style-iw");
            _.Ns(this.anchor, "gm-style-iw-a");
            _.Ns(this.Lg, "gm-style-iw-t");
            _.Ns(this.Sg, "gm-style-iw-tc");
            _.Ns(this.Mi, "gm-style-iw-c");
            _.Ns(this.Hg, "gm-style-iw-chr");
            _.Ns(this.Kg, "gm-style-iw-ch");
            _.Ns(this.Eg, "gm-style-iw-d");
            this.Kg.setAttribute("id", _.to());
            _.rn.Eg && !_.rn.Mg && (this.Mi.style.paddingInlineEnd = "0", this.Mi.style.paddingBottom = "0", this.Eg.style.overflow = "scroll");
            sN(this, !1);
            _.Ok(this.Yg, "mousedown", _.Gk);
            _.Ok(this.Yg, "mouseup", _.Gk);
            _.Ok(this.Yg, "mousemove", _.Gk);
            _.Ok(this.Yg, "pointerdown", _.Gk);
            _.Ok(this.Yg, "pointerup", _.Gk);
            _.Ok(this.Yg, "pointermove", _.Gk);
            _.Ok(this.Yg, "dblclick", _.Gk);
            _.Ok(this.Yg, "click", _.Gk);
            _.Ok(this.Yg, "touchstart", _.Gk);
            _.Ok(this.Yg, "touchend", _.Gk);
            _.Ok(this.Yg, "touchmove", _.Gk);
            _.zs(this.Yg, "contextmenu", this, this.Rg);
            _.zs(this.Yg, "wheel", this, _.Gk);
            _.zs(this.Yg, "mousewheel", this, _.Dk);
            _.zs(this.Yg, "MozMousePixelScroll", this, _.Dk);
            this.Fg =
                new _.yy({
                    xq: new _.Kl(12, 12),
                    Pr: new _.Ml(24, 24),
                    offset: new _.Kl(-6, -6),
                    zB: !0,
                    ownerElement: this.Hg
                });
            this.Hg.appendChild(this.Fg.element);
            _.Ok(this.Fg.element, "click", b => {
                _.Gk(b);
                _.Uk(this, "closeclick");
                this.set("open", !1)
            });
            this.Ng = new _.an(() => {
                !this.Og && this.get("content") && this.get("visible") && (_.Uk(this, "domready"), this.Og = !0)
            }, 0);
            this.Qg = _.Ok(this.Yg, "keydown", b => {
                b.key !== "Escape" && b.key !== "Esc" || !this.Mi.contains(document.activeElement) || (b.stopPropagation(), _.Uk(this, "closeclick"), this.set("open", !1))
            })
        }
        ariaLabel_changed() {
            const a = this.get("ariaLabel");
            a ? this.Mi.setAttribute("aria-label", a) : (this.Mi.removeAttribute("aria-label"), this.get("headerDisabled") || GSa(this))
        }
        open_changed() {
            HSa(this);
            uN(this)
        }
        headerContent_changed() {
            uN(this)
        }
        headerDisabled_changed() {
            uN(this)
        }
        content_changed() {
            HSa(this)
        }
        pendingFocus_changed() {
            this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? _.un(this.Mi, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."),
                this.set("pendingFocus", !1))
        }
        dispose() {
            setTimeout(() => {
                document.activeElement && document.activeElement !== document.body || (this.Mg && this.Mg !== document.body ? _.un(this.Mg, !0) || _.un(this.ex, !0) : _.un(this.ex, !0))
            });
            this.Qg && _.Kk(this.Qg);
            this.Yg.parentNode.removeChild(this.Yg);
            this.Ng.stop();
            this.Ng.dispose()
        }
        getSize() {
            var a = this.get("layoutPixelBounds"),
                b = this.get("pixelOffset");
            const c = this.get("maxWidth") || 648,
                d = this.get("minWidth") || 0;
            if (!b) return null;
            a ? (b = a.maxY - a.minY - (11 + -b.height), a = a.maxX - a.minX -
                6, a >= 240 && (a -= 120), b >= 240 && (b -= 120)) : (a = 648, b = 654);
            a = Math.min(a, c);
            a = Math.max(d, a);
            a = Math.max(0, a);
            b = Math.max(0, b);
            return {
                em: new _.Ml(a, b),
                minWidth: d
            }
        }
        pixelOffset_changed() {
            const a = this.get("pixelOffset") || new _.Ml(0, 0);
            this.Lg.style.right = _.os(-a.width);
            this.Lg.style.bottom = _.os(-a.height + 11);
            tN(this)
        }
        layoutPixelBounds_changed() {
            tN(this)
        }
        position_changed() {
            this.get("position") ? (vN(this), sN(this, !!this.get("open"))) : sN(this, !1)
        }
        zIndex_changed() {
            vN(this)
        }
        visible_changed() {
            this.Yg.style.display = this.get("visible") ?
                "" : "none";
            this.Ng.start();
            if (this.get("visible")) {
                const a = this.Fg.element.style.display;
                this.Fg.element.style.display = "none";
                this.Fg.element.getBoundingClientRect();
                this.Fg.element.style.display = a;
                FSa(this)
            } else this.Pg = !1
        }
        Rg(a) {
            let b = !1;
            const c = this.get("content");
            let d = a.target;
            for (; !b && d;) b = d == c, d = d.parentNode;
            b ? _.Dk(a) : _.Fk(a)
        }
        focus() {
            this.Mg = document.activeElement;
            let a;
            _.rn.Ng && (a = this.Eg.getBoundingClientRect());
            if (this.get("disableAutoPan")) _.un(this.Mi, !0);
            else {
                var b = _.Zs(this.Eg);
                if (b.length) {
                    b =
                        b[0];
                    a = a || this.Eg.getBoundingClientRect();
                    var c = b.getBoundingClientRect();
                    _.un(c.bottom <= a.bottom && c.right <= a.right ? b : this.Mi, !0)
                } else _.un(this.Fg.element, !0)
            }
        }
    };
    var JSa = class {
        constructor(a, b, c) {
            this.model = a;
            this.isOpen = !0;
            this.Eg = this.Hg = this.ah = null;
            this.pi = [];
            var d = a.get("shouldFocus");
            this.Ig = ESa(b, d);
            const e = b.__gm;
            (d = b instanceof _.pl) && c ? c.then(h => {
                this.isOpen && (this.ah = h, this.Eg = new _.GK(k => {
                    this.Hg = new _.sy(b, h, k, () => {});
                    h.Ii(this.Hg);
                    return this.Hg
                }), this.Eg.bindTo("latLngPosition", a, "position"), MSa(this))
            }) : (this.Eg = new _.GK, this.Eg.bindTo("latLngPosition", a, "position"), this.Eg.bindTo("center", e, "projectionCenterQ"), this.Eg.bindTo("zoom", e), this.Eg.bindTo("offset",
                e), this.Eg.bindTo("projection", b), this.Eg.bindTo("focus", b, "position"), MSa(this));
            this.Jg = d ? rN(a) ? "Ia" : "Id" : null;
            this.Kg = d ? rN(a) ? 148284 : 148285 : null;
            const f = new _.hK(["scale"], "visible", h => h == null || h >= .3);
            this.Eg && f.bindTo("scale", this.Eg);
            const g = this.Ig;
            g.set("logAsInternal", rN(a));
            g.bindTo("ariaLabel", a);
            g.bindTo("zIndex", a);
            g.bindTo("layoutPixelBounds", e, "pixelBounds");
            g.bindTo("disableAutoPan", a);
            g.bindTo("pendingFocus", a);
            g.bindTo("maxWidth", a);
            g.bindTo("minWidth", a);
            g.bindTo("content", a);
            g.bindTo("headerContent",
                a);
            g.bindTo("headerDisabled", a);
            g.bindTo("pixelOffset", a);
            g.bindTo("visible", f);
            this.Fg = new _.an(() => {
                if (b instanceof _.pl)
                    if (this.ah) {
                        var h = a.get("position");
                        h && (0, _.coa.zE)(b, this.ah, new _.vl(h), ISa(g))
                    } else c.then(() => {
                        this.Fg.start()
                    });
                else(h = g.get("pixelBounds")) ? _.Uk(e, "pantobounds", h) : this.Fg.start()
            }, 150);
            if (d) {
                let h = null;
                this.pi.push(_.Sk(a, "position_changed", () => {
                    const k = a.get("position");
                    !k || a.get("disableAutoPan") || k.equals(h) || (this.Fg.start(), h = k)
                }))
            } else a.get("disableAutoPan") || this.Fg.start();
            g.set("open", !0);
            this.pi.push(_.Ik(g, "domready", () => {
                a.trigger("domready")
            }));
            this.pi.push(_.Ik(g, "visible", () => {
                a.trigger("visible")
            }));
            this.pi.push(_.Ik(g, "closeclick", () => {
                a.close();
                a.trigger("closeclick")
            }));
            this.pi.push(_.Sk(a, "pixelposition_changed", () => {
                LSa(this)
            }));
            this.Jg && _.El(b, this.Jg);
            this.Kg && _.M(b, this.Kg)
        }
        close() {
            if (this.isOpen) {
                this.isOpen = !1;
                this.model.trigger("close");
                for (var a of this.pi) _.Kk(a);
                this.pi.length = 0;
                this.Fg.stop();
                this.Fg.dispose();
                this.ah && this.Hg && this.ah.tl(this.Hg);
                a = this.Ig;
                a.unbindAll();
                a.set("open", !1);
                a.dispose();
                this.Eg && this.Eg.unbindAll()
            }
        }
    };
    _.Aj("infowindow", {
        yG: function(a) {
            let b = null;
            _.Sk(a, "map_changed", function d() {
                const e = a.get("map");
                b && (b.zC.Eg.delete(a), b.nK.close(), b = null);
                if (e) {
                    const f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        nK: KSa(a, e, e instanceof _.pl ? f.Fg.then(({
                            ah: g
                        }) => g) : void 0),
                        zC: OSa(e)
                    }, CSa(b.zC, a)) : _.Rk(f, "innercontainer_changed", d) : _.Rk(f, "panes_changed", d)
                }
            })
        }
    });
});