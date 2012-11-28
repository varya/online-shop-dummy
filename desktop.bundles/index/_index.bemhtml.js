var BEMHTML = (function(exports) {
    exports.apply = apply;
    function apply() {
        var __this = this;
        var __t = this._mode;
        if (__t === "mix") {
            var __t = this.block;
            if (__t === "foot") {
                if (!!this.elem === false) {
                    return [ {
                        block: "box"
                    } ];
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "head") {
                if (!!this.elem === false) {
                    return [ {
                        block: "box",
                        js: true
                    } ];
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-page") {
                if (!!this.elem === false) {
                    return [ {
                        elem: "body"
                    } ];
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "tag") {
            var __t = this.block;
            if (__t === "goods") {
                var __t = this.elem;
                if (__t === "price") {
                    return "span";
                    return;
                } else if (__t === "image") {
                    return "img";
                    return;
                } else if (__t === "title") {
                    return "h3";
                    return;
                } else if (__t === "item") {
                    return "li";
                    return;
                } else {
                    if (!!this.elem === false) {
                        return "ul";
                        return;
                    } else {
                        return $259.call(this);
                    }
                }
            } else if (__t === "b-icon") {
                if (!!this.elem === false) {
                    return "img";
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-link") {
                if (!!this.elem === false) {
                    return "a";
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "box") {
                if (this.elem === "switcher") {
                    return "span";
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-layout-table") {
                if (!(this.elem === "cell" || this.elem === "gap") === false) {
                    return "td";
                    return;
                } else {
                    if (this.elem === "row") {
                        return "tr";
                        return;
                    } else {
                        if (!!this.elem === false) {
                            return "table";
                            return;
                        } else {
                            return $259.call(this);
                        }
                    }
                }
            } else if (__t === "b-search") {
                var __t = this.elem;
                if (__t === "button" || __t === "input") {
                    return "input";
                    return;
                } else {
                    if (!!this.elem === false) {
                        return "form";
                        return;
                    } else {
                        return $259.call(this);
                    }
                }
            } else if (__t === "b-page") {
                var __t = this.elem;
                if (__t === "js") {
                    return "script";
                    return;
                } else if (__t === "css") {
                    if (!this.ctx.url === false) {
                        return "link";
                        return;
                    } else {
                        return "style";
                        return;
                    }
                } else if (__t === "favicon") {
                    return "link";
                    return;
                } else if (__t === "meta") {
                    return "meta";
                    return;
                } else if (__t === "head") {
                    return "head";
                    return;
                } else if (__t === "root") {
                    return "html";
                    return;
                } else {
                    if (!!this.elem === false) {
                        return "body";
                        return;
                    } else {
                        return $259.call(this);
                    }
                }
            } else if (__t === "i-ua") {
                if (!!this.elem === false) {
                    return "script";
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "attrs") {
            var __t = this.block;
            if (__t === "goods") {
                if (this.elem === "image") {
                    return {
                        src: this.ctx.url
                    };
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-icon") {
                if (!!this.elem === false) {
                    var _$1nctx = this.ctx, _$1na = {
                        src: "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",
                        alt: ""
                    }, _$1nprops = [ "alt", "width", "height" ], _$1np;
                    _$1nctx.url && (_$1na.src = _$1nctx.url);
                    while (_$1np = _$1nprops.shift()) {
                        _$1nctx[_$1np] && (_$1na[_$1np] = _$1nctx[_$1np]);
                    }
                    return _$1na;
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-link") {
                if (!!this.elem === false) {
                    return $112.call(this);
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-layout-table") {
                if (!(this.elem === "cell" || this.elem === "gap") === false) {
                    var _$1hctx = this.ctx, _$1ha = {}, _$1hprops = [ "colspan", "rowspan" ], _$1hp;
                    while (_$1hp = _$1hprops.shift()) {
                        _$1hctx[_$1hp] && (_$1ha[_$1hp] = _$1hctx[_$1hp]);
                    }
                    return _$1ha;
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-search") {
                var __t = this.elem;
                if (__t === "button") {
                    return {
                        type: "submit",
                        value: "Search"
                    };
                    return;
                } else if (__t === "input") {
                    return {
                        name: "text"
                    };
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-page") {
                var __t = this.elem;
                if (__t === "js") {
                    if (!this.ctx.url === false) {
                        return {
                            src: this.ctx.url
                        };
                        return;
                    } else {
                        return $259.call(this);
                    }
                } else if (__t === "css") {
                    if (!this.ctx.url === false) {
                        return {
                            rel: "stylesheet",
                            href: this.ctx.url
                        };
                        return;
                    } else {
                        return $259.call(this);
                    }
                } else if (__t === "favicon") {
                    return {
                        rel: "shortcut icon",
                        href: this.ctx.url
                    };
                    return;
                } else if (__t === "meta") {
                    return this.ctx.attrs;
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "content") {
            var __t = this.block;
            if (__t === "goods") {
                if (!!this.elem === false) {
                    return $149.call(this);
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-search") {
                if (!this.ctx.button === false) {
                    if (!this.ctx.input === false) {
                        if (!!this.elem === false) {
                            return $156.call(this);
                        } else {
                            return $259.call(this);
                        }
                    } else {
                        return $259.call(this);
                    }
                } else {
                    return $259.call(this);
                }
            } else if (__t === "head") {
                if (!!this.elem === false) {
                    return [ {
                        block: "layout",
                        content: [ {
                            elem: "left",
                            content: {
                                block: "b-search",
                                attrs: {
                                    action: "/search.xml"
                                },
                                input: {
                                    elem: "input",
                                    attrs: {
                                        placeholder: "Find"
                                    }
                                },
                                button: {
                                    elem: "button"
                                }
                            }
                        }, {
                            elem: "right",
                            content: {
                                block: "b-logo",
                                content: {
                                    elem: "link",
                                    url: "http://bem.info",
                                    content: [ {
                                        elem: "icon",
                                        url: "../../desktop.blocks/b-logo/b-logo.png"
                                    }, {
                                        elem: "slogan",
                                        content: "A new way of thinking"
                                    } ]
                                }
                            }
                        } ]
                    }, {
                        block: "box",
                        elem: "switcher"
                    } ];
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-page") {
                if (!!this.elem === false) {
                    return {
                        elem: "body-i",
                        content: this.ctx.content
                    };
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "i-ua") {
                if (!!this.elem === false) {
                    return [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ].join("");
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "default") {
            var __t = this.block;
            if (__t === "b-logo") {
                var __t = this.elem;
                if (__t === "icon") {
                    var _$1pctx = this.ctx;
                    {
                        "";
                        var __r61 = this._mode;
                        this._mode = "";
                        var __r62 = _$1pctx.elem;
                        _$1pctx.elem = undefined;
                        var __r63 = _$1pctx.block;
                        _$1pctx.block = "b-icon";
                        var __r64 = _$1pctx.mix;
                        _$1pctx.mix = [ {
                            block: "b-logo",
                            elem: "icon"
                        } ];
                        this.apply();
                        this._mode = __r61;
                        _$1pctx.elem = __r62;
                        _$1pctx.block = __r63;
                        _$1pctx.mix = __r64;
                        "";
                    }
                    return;
                } else if (__t === "link") {
                    return $185.call(this);
                } else {
                    return $259.call(this);
                }
            } else if (__t === "b-page") {
                if (this.elem === "css") {
                    if (!this.ctx.hasOwnProperty("ie") === false) {
                        if (!!this.ctx._ieCommented === false) {
                            return $192.call(this);
                        } else {
                            return $197.call(this);
                        }
                    } else {
                        return $197.call(this);
                    }
                } else {
                    return $197.call(this);
                }
            } else if (__t === "i-jquery") {
                if (this.elem === "core") {
                    var __r36, __r37, __r38;
                    return "", __r36 = this._mode, this._mode = "", __r37 = this.ctx, this.ctx = {
                        block: "b-page",
                        elem: "js",
                        url: "//yandex.st/jquery/1.7.2/jquery.min.js"
                    }, __r38 = apply.call(__this), this._mode = __r36, this.ctx = __r37, "", __r38;
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "js") {
            if (this.block === "box") {
                if (!!this.elem === false) {
                    return true;
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "bem") {
            var __t = this.block;
            if (__t === "b-page") {
                var __t = this.elem;
                if (__t === "js" || __t === "css" || __t === "favicon" || __t === "meta" || __t === "head" || __t === "root") {
                    return false;
                    return;
                } else {
                    return $259.call(this);
                }
            } else if (__t === "i-ua") {
                if (!!this.elem === false) {
                    return false;
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "cls") {
            if (this.block === "b-page") {
                if (this.elem === "root") {
                    return "i-ua_js_no i-ua_css_standard";
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else if (__t === "doctype") {
            if (this.block === "b-page") {
                if (!!this.elem === false) {
                    return this.ctx.doctype || "<!DOCTYPE html>";
                    return;
                } else {
                    return $259.call(this);
                }
            } else {
                return $259.call(this);
            }
        } else {
            return $259.call(this);
        }
    }
    function $112() {
        var __this = this;
        var __r52, __r53, __r54, __r55;
        var _$1lctx = this.ctx, _$1lprops = [ "title", "target" ], _$1lp = typeof _$1lctx.url, _$1la = {
            href: _$1lp === "undefined" || _$1lp === "string" ? _$1lctx.url : (_$1lp = [], "", __r52 = this._buf, this._buf = _$1lp, __r53 = this._mode, this._mode = "", __r54 = this.ctx, this.ctx = _$1lctx.url, __r55 = apply.call(__this), this._buf = __r52, this._mode = __r53, this.ctx = __r54, "", __r55, _$1lp.join(""))
        };
        while (_$1lp = _$1lprops.pop()) {
            _$1lctx[_$1lp] && (_$1la[_$1lp] = _$1lctx[_$1lp]);
        }
        return _$1la;
        return;
    }
    function $149() {
        var _$1rcontent = [];
        this.ctx.goods.forEach(function(item) {
            var mods = {};
            if (item["new"]) {
                mods["new"] = "yes";
            } else {
                undefined;
            }
            _$1rcontent.push({
                elem: "item",
                mix: [ {
                    block: "box"
                } ],
                mods: mods,
                content: [ {
                    elem: "title",
                    content: item.title
                }, {
                    elem: "image",
                    url: item.image
                }, {
                    elem: "price",
                    content: {
                        block: "b-link",
                        mix: [ {
                            block: "goods",
                            elem: "link"
                        } ],
                        url: item.url,
                        content: item.price
                    }
                } ]
            });
            _$1rcontent.push(" ");
        });
        for (var _$1ri = 0; _$1ri < 10; _$1ri++) {
            _$1rcontent.push({
                elem: "sizer"
            });
        }
        return _$1rcontent;
        return;
    }
    function $156() {
        this.ctx.input.block = "b-search";
        this.ctx.button.block = "b-search";
        var _$19c = {
            block: "b-layout-table",
            mix: [ {
                block: "b-search",
                elem: "layout"
            } ],
            content: [ {
                elem: "row",
                content: [ {
                    elem: "cell",
                    mix: [ {
                        block: "b-search",
                        elem: "layout-input"
                    } ],
                    content: this.ctx.input
                }, {
                    elem: "cell",
                    mix: [ {
                        block: "b-search",
                        elem: "layout-button"
                    } ],
                    content: this.ctx.button
                } ]
            } ]
        };
        this.ctx.under && _$19c.content.push({
            elem: "row",
            content: [ {
                elem: "cell",
                mix: [ {
                    block: "b-search",
                    elem: "layout-under"
                } ],
                colspan: 2,
                content: this.ctx.under
            } ]
        });
        return _$19c;
        return;
    }
    function $185() {
        var _$1octx = this.ctx, _$1ocontent = _$1octx.content || _$1octx.icon;
        _$1octx.icon && (_$1octx.icon.block = "b-logo");
        if (_$1octx.content instanceof Array) {
            for (var _$1oc in _$1octx.content) {
                _$1octx.content[_$1oc].elem && (_$1octx.content[_$1oc].block = "b-logo");
                _$1octx.content[_$1oc].tag = "span";
            }
        } else {
            undefined;
        }
        {
            "";
            var __r56 = this._mode;
            this._mode = "";
            var __r57 = _$1octx.elem;
            _$1octx.elem = undefined;
            var __r58 = _$1octx.block;
            _$1octx.block = "b-link";
            var __r59 = _$1octx.content;
            _$1octx.content = _$1ocontent;
            var __r60 = _$1octx.mix;
            _$1octx.mix = [ {
                block: "b-logo",
                elem: "link"
            } ];
            this.apply();
            this._mode = __r56;
            _$1octx.elem = __r57;
            _$1octx.block = __r58;
            _$1octx.content = __r59;
            _$1octx.mix = __r60;
            "";
        }
        return;
    }
    function $192() {
        var __this = this;
        var _$10ie = this.ctx.ie;
        if (_$10ie === true) {
            {
                "";
                var __r46 = this._mode;
                this._mode = "";
                var __r47 = this.ctx;
                this.ctx = [ 6, 7, 8, 9 ].map(function(v) {
                    return {
                        elem: "css",
                        url: this.ctx.url + ".ie" + v + ".css",
                        ie: "IE " + v
                    };
                }, this);
                apply.call(__this);
                this._mode = __r46;
                this.ctx = __r47;
                "";
            }
            undefined;
        } else {
            var _$10hideRule = !_$10ie ? [ "gt IE 9", "<!-->", "<!--" ] : _$10ie === "!IE" ? [ _$10ie, "<!-->", "<!--" ] : [ _$10ie, "", "" ];
            {
                "";
                var __r48 = this._mode;
                this._mode = "";
                var __r49 = this.ctx, __r50 = __r49._ieCommented;
                __r49._ieCommented = true;
                var __r51 = this.ctx;
                this.ctx = [ "<!--[if " + _$10hideRule[0] + "]>", _$10hideRule[1], this.ctx, _$10hideRule[2], "<![endif]-->" ];
                apply.call(__this);
                this._mode = __r48;
                __r49._ieCommented = __r50;
                this.ctx = __r51;
                "";
            }
            undefined;
        }
        return;
    }
    function $197() {
        if (!(this["__$anflg"] !== 866397203) === false) {
            if (!!this.elem === false) {
                return $200.call(this);
            } else {
                return $259.call(this);
            }
        } else {
            return $259.call(this);
        }
    }
    function $200() {
        var __this = this;
        var __r39, __r40;
        var _$jctx = this.ctx, _$jdtype = ("", __r39 = this._mode, this._mode = "doctype", __r40 = apply.call(__this), this._mode = __r39, "", __r40), _$jbuf = [ _$jdtype, {
            elem: "root",
            content: [ {
                elem: "head",
                content: [ {
                    tag: "meta",
                    attrs: {
                        charset: "utf-8"
                    }
                }, {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=EmulateIE7, IE=edge"
                    }
                }, {
                    tag: "title",
                    content: _$jctx.title
                }, _$jctx.favicon ? {
                    elem: "favicon",
                    url: _$jctx.favicon
                } : "", _$jctx.meta, {
                    block: "i-ua"
                }, _$jctx.head ]
            }, _$jctx ]
        } ];
        {
            "";
            var __r41 = this["__$anflg"];
            this["__$anflg"] = 866397203;
            {
                "";
                var __r42 = this.ctx;
                this.ctx = _$jbuf;
                var __r43 = this._mode;
                this._mode = "";
                apply.call(__this);
                this.ctx = __r42;
                this._mode = __r43;
                "";
            }
            this["__$anflg"] = __r41;
            "";
        }
        undefined;
        return;
    }
    function $259() {
        if (!!this._start === false) {
            return $261.call(this);
        } else {
            var __t = this._mode;
            if (__t === "content") {
                return this.ctx.content;
                return;
            } else if (__t === "mix" || __t === "bem" || __t === "jsAttr" || __t === "js" || __t === "cls" || __t === "attrs" || __t === "tag") {
                return undefined;
                return;
            } else if (__t === "default") {
                return $280.call(this);
            } else {
                if (!this._.isSimple(this.ctx) === false) {
                    if (!!this._mode === false) {
                        this._listLength--;
                        var _$3ctx = this.ctx;
                        (_$3ctx && _$3ctx !== true || _$3ctx === 0) && this._buf.push(_$3ctx);
                        return;
                    } else {
                        return $287.call(this);
                    }
                } else {
                    return $287.call(this);
                }
            }
        }
    }
    function $261() {
        var _$dBEM_ = {}, _$dtoString = Object.prototype.toString, _$dSHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(_$dBEM_);
        var _$dbuildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }(), _$dctx = {
            ctx: this,
            _start: true,
            apply: apply,
            _buf: [],
            _: {
                isArray: function(obj) {
                    return _$dtoString.call(obj) === "[object Array]";
                },
                isSimple: function(obj) {
                    var t = typeof obj;
                    return t === "string" || t === "number" || t === "boolean";
                },
                isShortTag: function(t) {
                    return _$dSHORT_TAGS.hasOwnProperty(t);
                },
                extend: function(o1, o2) {
                    if (!o1 || !o2) {
                        return o1 || o2;
                    } else {
                        undefined;
                    }
                    var res = {}, n;
                    for (n in o1) {
                        o1.hasOwnProperty(n) && (res[n] = o1[n]);
                    }
                    for (n in o2) {
                        o2.hasOwnProperty(n) && (res[n] = o2[n]);
                    }
                    return res;
                },
                identify: function() {
                    var cnt = 0, expando = "__" + +(new Date), get = function() {
                        return "uniq" + ++cnt;
                    };
                    return function(obj, onlyGet) {
                        if (!obj) {
                            return get();
                        } else {
                            undefined;
                        }
                        if (onlyGet || obj[expando]) {
                            return obj[expando];
                        } else {
                            return obj[expando] = get();
                        }
                    };
                }(),
                xmlEscape: _$dbuildEscape("[&<>]"),
                attrEscape: _$dbuildEscape('["&<>]')
            },
            BEM: _$dBEM_,
            isFirst: function() {
                return this.position === 1;
            },
            isLast: function() {
                return this.position === this._listLength;
            },
            generateId: function() {
                return this._.identify(this.ctx);
            }
        };
        _$dctx.apply();
        return _$dctx._buf.join("");
        return;
    }
    function $280() {
        var __this = this;
        var __r19, __r7, __r11, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r8, __r20, __r21, __r22, __r25, __r26, __r27, __r28, __r29, __r30;
        var _$4_this = this, _$4BEM_ = _$4_this.BEM, _$4v = this.ctx, _$4buf = this._buf, _$4tag;
        _$4tag = ("", __r7 = this._mode, this._mode = "tag", __r8 = apply.call(__this), this._mode = __r7, "", __r8);
        typeof _$4tag != "undefined" || (_$4tag = _$4v.tag);
        typeof _$4tag != "undefined" || (_$4tag = "div");
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if (this.block && _$4v.js !== false) {
                _$4js = ("", __r11 = this._mode, this._mode = "js", __r12 = apply.call(__this), this._mode = __r11, "", __r12);
                _$4js = _$4js ? this._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass(this.block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push("<", _$4tag);
            var _$4isBEM = ("", __r13 = this._mode, this._mode = "bem", __r14 = apply.call(__this), this._mode = __r13, "", __r14);
            typeof _$4isBEM != "undefined" || (_$4isBEM = typeof _$4v.bem != "undefined" ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ("", __r15 = this._mode, this._mode = "cls", __r16 = apply.call(__this), this._mode = __r15, "", __r16);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses(this.block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ("", __r17 = this._mode, this._mode = "mix", __r18 = apply.call(__this), this._mode = __r17, "", __r18);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || "") + "__" + (elem || "");
                        }
                        _$4visited[_$4visitedKey(this.block, this.elem)] = true;
                        if (!this._.isArray(_$4mix)) {
                            _$4mix = [ _$4mix ];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i], _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || _$4_this.block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || _$4_this.elem;
                            _$4hasItem && _$4buf.push(" ");
                            _$4BEM_.INTERNAL[_$4hasItem ? "buildClasses" : "buildModsClasses"](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : _$4_this.elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ("", __r19 = this.block, this.block = _$4block, __r20 = this.elem, this.elem = _$4elem, __r21 = this._mode, this._mode = "mix", __r22 = apply.call(__this), this.block = __r19, this.elem = __r20, this._mode = __r21, "", __r22);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$4cls && _$4buf.push(_$4isBEM ? " " : "", _$4cls);
                _$4addJSInitClass && _$4buf.push(" i-bem");
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ("", __r25 = this._mode, this._mode = "jsAttr", __r26 = apply.call(__this), this._mode = __r25, "", __r26);
                _$4buf.push(" ", _$4jsAttr || "onclick", '="return ', this._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ("", __r27 = this._mode, this._mode = "attrs", __r28 = apply.call(__this), this._mode = __r27, "", __r28);
            _$4attrs = this._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(" ", _$4name, '="', this._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (this._.isShortTag(_$4tag)) {
            _$4buf.push("/>");
        } else {
            _$4tag && _$4buf.push(">");
            var _$4content = ("", __r29 = this._mode, this._mode = "content", __r30 = apply.call(__this), this._mode = __r29, "", __r30);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = this.block || this.elem;
                {
                    "";
                    var __r31 = this._notNewList;
                    this._notNewList = false;
                    var __r32 = this.position;
                    this.position = _$4isBEM ? 1 : this.position;
                    var __r33 = this._listLength;
                    this._listLength = _$4isBEM ? 1 : this._listLength;
                    var __r34 = this.ctx;
                    this.ctx = _$4content;
                    var __r35 = this._mode;
                    this._mode = "";
                    apply.call(__this);
                    this._notNewList = __r31;
                    this.position = __r32;
                    this._listLength = __r33;
                    this.ctx = __r34;
                    this._mode = __r35;
                    "";
                }
                undefined;
            } else {
                undefined;
            }
            _$4tag && _$4buf.push("</", _$4tag, ">");
        }
        return;
    }
    function $287() {
        if (!!this._mode === false) {
            if (!!this.ctx === false) {
                this._listLength--;
                return;
            } else {
                return $293.call(this);
            }
        } else {
            return $293.call(this);
        }
    }
    function $293() {
        var __this = this;
        if (!this._.isArray(this.ctx) === false) {
            if (!!this._mode === false) {
                var _$1v = this.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = this.position, _$1prevNotNewList = this._notNewList;
                if (_$1prevNotNewList) {
                    this._listLength += _$1l - 1;
                } else {
                    this.position = 0;
                    this._listLength = _$1l;
                }
                this._notNewList = true;
                while (_$1i < _$1l) {
                    "";
                    var __r6 = this.ctx;
                    this.ctx = _$1v[_$1i++];
                    apply.call(__this);
                    this.ctx = __r6;
                    "";
                }
                undefined;
                _$1prevNotNewList || (this.position = _$1prevPos);
                return;
            } else {
                return $299.call(this);
            }
        } else {
            return $299.call(this);
        }
    }
    function $299() {
        if (!true === false) {
            if (!!this._mode === false) {
                return $302.call(this);
            } else {
                return $e.call(this);
            }
        } else {
            return $e.call(this);
        }
    }
    function $302() {
        var __this = this;
        var _$0vBlock = this.ctx.block, _$0vElem = this.ctx.elem, _$0block = this._currBlock || this.block;
        this.ctx || (this.ctx = {});
        {
            "";
            var __r0 = this._mode;
            this._mode = "default";
            var __r1 = this.block;
            this.block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r2 = this._currBlock;
            this._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r3 = this.elem;
            this.elem = this.ctx.elem;
            var __r4 = this.mods;
            this.mods = (_$0vBlock ? this.ctx.mods : this.mods) || {};
            var __r5 = this.elemMods;
            this.elemMods = this.ctx.elemMods || {};
            {
                this.block || this.elem ? this.position = (this.position || 0) + 1 : this._listLength--;
                apply.call(__this);
                undefined;
            }
            this._mode = __r0;
            this.block = __r1;
            this._currBlock = __r2;
            this.elem = __r3;
            this.mods = __r4;
            this.elemMods = __r5;
            "";
        }
        return;
    }
    function $e() {
        throw new Error;
        return;
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
BEMHTML = (function(xjst) {
  return function() {
    return xjst.apply.call(
[this]
    ); };
}(BEMHTML));
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);