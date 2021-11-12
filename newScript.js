(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18], {
      "/ur9": function(e, t, n) {
          "use strict";
          var r = n("vJKn"),
              o = n.n(r),
              i = n("rg98"),
              a = n("H+61"),
              s = n("UlJF"),
              c = n("cpVT"),
              l = n("mOvS"),
              u = n.n(l),
              d = n("9/5/"),
              p = n.n(d),
              f = n("TJAO"),
              y = n("jT3O"),
              v = n("VX74");

          function h() {
              var e = Object(y.a)(["\n  query drmToken {\n    drmToken {\n      token\n    }\n  }\n"]);
              return h = function() {
                  return e
              }, e
          }
          var m = Object(v.gql)(h()),
              g = n("IhR4"),
              b = n("eCDF"),
              w = n("ep5R");

          function j(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t && (r = r.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), n.push.apply(n, r)
              }
              return n
          }

          function k(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? j(Object(n), !0).forEach((function(t) {
                      Object(c.a)(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
              }
              return e
          }
          var P, O = u()().publicRuntimeConfig;
          f.s && (P = n("OJro").App);
          var C = function() {},
              E = [{
                  start: 0,
                  interval: 10
              }, {
                  start: 60,
                  interval: 30
              }],
              S = new(function() {
                  function e() {
                      var t = this;
                      Object(a.a)(this, e), Object(c.a)(this, "userInteracted", !1), Object(c.a)(this, "playerOptions", {}), Object(c.a)(this, "isPlayerLoaded", !1), Object(c.a)(this, "isAdPlaying", !1), Object(c.a)(this, "Player", void 0), Object(c.a)(this, "onHeartBeatCallback", void 0), Object(c.a)(this, "onReadyCallback", void 0), Object(c.a)(this, "onPlayCallback", void 0), Object(c.a)(this, "onTimeCallback", void 0), Object(c.a)(this, "onBufferChangeCallback", void 0), Object(c.a)(this, "onSeekCallback", void 0), Object(c.a)(this, "onSeekedCallback", void 0), Object(c.a)(this, "onProviderFirstFrameCallback", void 0), Object(c.a)(this, "onPauseCallback", void 0), Object(c.a)(this, "onFirstFrameCallback", void 0), Object(c.a)(this, "onCompleteCallback", void 0), Object(c.a)(this, "onPlaylistCallback", void 0), Object(c.a)(this, "onPlaylistItemCallback", void 0), Object(c.a)(this, "stopHeartBeatCallback", void 0), Object(c.a)(this, "onMuteCallback", void 0), Object(c.a)(this, "onAdPlayCallback", void 0), Object(c.a)(this, "onAdBreakEndCallback", void 0), Object(c.a)(this, "onAdCompletedCallback", void 0), Object(c.a)(this, "onPlayerErrorCallback", void 0), Object(c.a)(this, "playPreviousItemCallback", void 0), Object(c.a)(this, "playNextItemCall", void 0), Object(c.a)(this, "onFloating", void 0), Object(c.a)(this, "onCast", void 0), Object(c.a)(this, "onClick", (function() {
                          t.userInteracted = !0, document.body.removeEventListener("click", t.onClick)
                      })), Object(c.a)(this, "setPlayerOptions", (function(e) {
                          t.playerOptions = e
                      })), Object(c.a)(this, "setHeartbeat", (function() {
                          void 0 === typeof window.Taq && setTimeout(t.setHeartbeat, 50), window.Taq.push(["load", "HeartBeat", {
                              scheme: E,
                              events: {
                                  onHeartBeat: t.heartBeatCallback
                              }
                          }])
                      })), Object(c.a)(this, "initPlayer", function() {
                          var e = Object(i.a)(o.a.mark((function e(n, r, a) {
                              var s, c, l, u, d, p;
                              return o.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          if (!t.isPlayerLoaded) {
                                              e.next = 2;
                                              break
                                          }
                                          return e.abrupt("return");
                                      case 2:
                                          if ((u = JSON.parse(JSON.stringify(t.playerOptions))).jwplayer.config.key = null === (s = t.playerOptions.jwplayer) || void 0 === s || null === (c = s.config) || void 0 === c ? void 0 : c.licenseKey, u.modules = JSON.parse(JSON.stringify(t.playerOptions.modules)), u.jwplayer.config.logo.file = "", u.jwplayer.config.liveTimeout = 0, u.modules.drm = k(k({}, null === (l = t.playerOptions.modules) || void 0 === l ? void 0 : l.drm), {}, {
                                                  licenseRequestInvocation: function() {
                                                      var e = Object(i.a)(o.a.mark((function e(t) {
                                                          var r, i, a, s, c, l;
                                                          return o.a.wrap((function(e) {
                                                              for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                      return r = t.drmProvider, i = t.request, e.next = 3, n.query({
                                                                          query: m,
                                                                          fetchPolicy: "no-cache"
                                                                      });
                                                                  case 3:
                                                                      a = e.sent, s = a.data.drmToken.token, e.t0 = r, e.next = "fairplay" === e.t0 || "widevine" === e.t0 ? 8 : 10;
                                                                      break;
                                                                  case 8:
                                                                      return i.headers.Authorization = "Basic ".concat(s), e.abrupt("break", 14);
                                                                  case 10:
                                                                      return c = atob(s).split(":"), l = c.slice(0, 2).join(":"), i.uris[0] += "&account=".concat(l, "&auth=").concat(c[2]), e.abrupt("break", 14);
                                                                  case 14:
                                                                      return e.abrupt("return", !0);
                                                                  case 15:
                                                                  case "end":
                                                                      return e.stop()
                                                              }
                                                          }), e)
                                                      })));
                                                      return function(t) {
                                                          return e.apply(this, arguments)
                                                      }
                                                  }()
                                              }), u.jwplayer.config.autoPause = {
                                                  viewability: !1
                                              }, u.jwplayer.config.floating = {
                                                  dismissible: !0,
                                                  mode: r === f.f.MOBILE ? "never" : "notVisible"
                                              }, !Object(g.hasOwnProperty)(u.jwplayer.config, "advertising") || !Object(g.hasOwnProperty)(u.jwplayer.config.advertising, "freewheel")) {
                                              e.next = 33;
                                              break
                                          }
                                          return d = r === f.f.DESKTOP ? "desktop" : "mobileweb", "vod", u.jwplayer.config.advertising.vpaidcontrols = !0, u.jwplayer.config.advertising.freewheel.sectionid = "talpa_kijk2_".concat(d, "_").concat("vod"), u.jwplayer.config.advertising.freewheel.adManagerURL = "https://mssl.fwmrm.net/libs/adm/".concat(O.admanager.version, "/AdManager.js"), e.next = 18, b.a.waitUntilReady();
                                      case 18:
                                          if (b.a.isFeatureEnabled(f.v.CASTING) ? u.jwplayer.config.cast.customAppId = "877D17E1" : u.jwplayer.config.cast = null, !b.a.isFeatureEnabled(f.v.DISABLE_ADS)) {
                                              e.next = 23;
                                              break
                                          }
                                          u.jwplayer.config.advertising = {}, e.next = 32;
                                          break;
                                      case 23:
                                          if (!b.a.isFeatureEnabled(f.v.ADHESE_ADVERTISING)) {
                                              e.next = 30;
                                              break
                                          }
                                          return e.next = 26, Object(w.a)(a, r);
                                      case 26:
                                          p = e.sent, u.jwplayer.config.advertising.freewheel.custom = p, e.next = 31;
                                          break;
                                      case 30:
                                          u.jwplayer.config.advertising.freewheel.custom = {
                                              adh: "disabled"
                                          };
                                      case 31:
                                          u.jwplayer.config.advertising.schedule = {
                                              adbreak: {
                                                  offset: "pre",
                                                  tag: "placeholder_preroll"
                                              }
                                          };
                                      case 32:
                                          u.jwplayer.version = O.jwplayer.version;
                                      case 33:
                                          u.modules.sharing.enabled = !1, u.jwplayer.config.autostart = "true", u.jwplayer.config.mute = !1, u.jwplayer.config.autoPause.pauseAds = !0, u.modules.analytics = {
                                              enabled: !0
                                          }, t.Player = new P, t.Player.setOptions(u, !0), t.Player.on("setup", t.onSetup), t.Player.on("error", t.onPlayerError), t.isPlayerLoaded = !0;
                                      case 43:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t, n, r) {
                              return e.apply(this, arguments)
                          }
                      }()), Object(c.a)(this, "load", (function(e) {
                          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                          t.isPlayerLoaded ? t.Player.setPlaylist(JSON.parse(JSON.stringify(e)), !0, n) : setTimeout(t.load, 50, e, n)
                      })), Object(c.a)(this, "seek", (function(e) {
                          var n, r, o;
                          null === (n = t.Player) || void 0 === n || null === (r = n.instance) || void 0 === r || null === (o = r.seek) || void 0 === o || o.call(r, e)
                      })), Object(c.a)(this, "play", (function() {
                          var e, n, r;
                          null === (e = t.Player) || void 0 === e || null === (n = e.instance) || void 0 === n || null === (r = n.play) || void 0 === r || r.call(n)
                      })), Object(c.a)(this, "stop", (function() {
                          var e, n, r;
                          null === (e = t.Player) || void 0 === e || null === (n = e.instance) || void 0 === n || null === (r = n.stop) || void 0 === r || r.call(n)
                      })), Object(c.a)(this, "pause", (function() {
                          var e, n, r;
                          null === (e = t.Player) || void 0 === e || null === (n = e.instance) || void 0 === n || null === (r = n.pause) || void 0 === r || r.call(n)
                      })), Object(c.a)(this, "getFloating", (function() {
                          var e, n, r;
                          return null === (e = t.Player) || void 0 === e || null === (n = e.instance) || void 0 === n || null === (r = n.getFloating) || void 0 === r ? void 0 : r.call(n)
                      })), Object(c.a)(this, "setMute", (function(e) {
                          var n, r, o;
                          null === (n = t.Player) || void 0 === n || null === (r = n.instance) || void 0 === r || null === (o = r.setMute) || void 0 === o || o.call(r, e)
                      })), Object(c.a)(this, "getLoadState", (function() {
                          var e;
                          return (null === (e = t.Player) || void 0 === e ? void 0 : e.loadState) || 0
                      })), Object(c.a)(this, "getPlaylistItem", (function() {
                          try {
                              return t.Player.instance.getPlaylistItem()
                          } catch (e) {
                              return null
                          }
                      })), Object(c.a)(this, "getPlaylistIndex", (function() {
                          try {
                              return t.Player.instance.getPlaylistIndex()
                          } catch (e) {
                              return 0
                          }
                      })), Object(c.a)(this, "getMute", (function() {
                          try {
                              return t.Player.instance.getMute()
                          } catch (e) {
                              return !1
                          }
                      })), Object(c.a)(this, "getState", (function() {
                          try {
                              return t.Player.instance.getState()
                          } catch (e) {
                              return ""
                          }
                      })), Object(c.a)(this, "getGuid", (function() {
                          try {
                              var e;
                              return (null === (e = t.getPlaylistItem()) || void 0 === e ? void 0 : e.guid) || null
                          } catch (n) {
                              return ""
                          }
                      })), Object(c.a)(this, "getCurrentTime", (function() {
                          try {
                              return t.Player.instance.getCurrentTime()
                          } catch (e) {
                              return 0
                          }
                      })), Object(c.a)(this, "getDuration", (function() {
                          try {
                              var e;
                              return (null === (e = t.getPlaylistItem()) || void 0 === e ? void 0 : e.duration) || null
                          } catch (n) {
                              return null
                          }
                      })), Object(c.a)(this, "getContainer", (function() {
                          try {
                              return t.Player.instance.getContainer()
                          } catch (e) {
                              return null
                          }
                      })), Object(c.a)(this, "onSetup", (function() {
                          var e = new CustomEvent("talpa-jwplayer-setup");
                          window.dispatchEvent(e), t.Player.instance.on("ready", t.onReadyCallback), t.Player.instance.on("play", t.onPlayCallback), t.Player.instance.on("time", t.onTimeCallback), t.Player.instance.on("bufferChange", t.onBufferChangeCallback), t.Player.instance.on("seek", t.onSeekCallback), t.Player.instance.on("seeked", t.onSeekedCallback), t.Player.instance.on("providerFirstFrame", t.onProviderFirstFrameCallback), t.Player.instance.on("pause", t.onPauseCallback), t.Player.instance.on("firstFrame", t.onFirstFrameCallback), t.Player.instance.on("complete", t.onCompleteCallback), t.Player.instance.on("playlist", t.onPlaylistCallback), t.Player.instance.on("playlistItem", p()(t.onPlaylistItemCallback, 10)), t.Player.instance.on("remove", t.stopHeartBeatCallback), t.Player.instance.on("mute", t.onMuteCallback), t.Player.instance.on("adBreakStart", t.onAdBreakStart), t.Player.instance.on("adBreakEnd", t.onAdBreakEndCallback), t.Player.instance.on("adComplete", t.onAdCompletedCallback), t.Player.instance.on("adStarted", t.onVpaidAdStart), t.Player.instance.on("error", t.onPlayerErrorCallback), t.Player.instance.on("float", t.onFloating), t.Player.instance.on("cast", t.onCast)
                      })), Object(c.a)(this, "onPlayerError", (function(e) {
                          var n;
                          "Cannot read property 'paused' of null" === (null === (n = e.sourceError) || void 0 === n ? void 0 : n.message) && (t.pause(), t.stop(), t.play(), t.removeOverlay())
                      })), Object(c.a)(this, "onVpaidAdStart", (function() {
                          t.Player.instance.getContainer().classList.remove("jw-flag-ads-vpaid")
                      })), Object(c.a)(this, "onAdBreakStart", (function() {
                          var e, n, r;
                          t.userInteracted && (null === (e = t.Player) || void 0 === e || null === (n = e.instance) || void 0 === n || null === (r = n.setMute) || void 0 === r || r.call(n, !1))
                      })), Object(c.a)(this, "addControlButtons", (function() {
                          var e;
                          if (!t.Player.getJwWrapper().querySelector(".talpa-jw-display-icon-prev")) {
                              t.Player.getJwWrapper().querySelector(".jw-display-icon-rewind").insertAdjacentHTML("afterend", '\n        <div class="jw-display-icon-container jw-reset talpa-jw-display-icon-prev">\n          <div class="jw-icon jw-icon-display jw-button-color jw-reset" role="button" tabIndex="0" aria-label="Previous">\n            <svg class="jw-svg-icon talpa-jw-svg-icon-prev" viewBox="0 0 240 240" focusable="false"/>\n          </div>\n        </div>\n      '), t.Player.getJwWrapper().querySelector(".talpa-jw-display-icon-prev").addEventListener("click", t.playPreviousItemCallback)
                          }
                          if (!t.Player.getJwWrapper().querySelector(".talpa-jw-display-icon-next")) {
                              t.Player.getJwWrapper().querySelector(".jw-display-icon-next").insertAdjacentHTML("afterend", '\n        <div class="jw-display-icon-container jw-reset talpa-jw-display-icon-next">\n          <div class="jw-icon jw-icon-display jw-button-color jw-reset" role="button" tabIndex="0" aria-label="Next">\n            <svg class="jw-svg-icon talpa-jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"/>\n          </div>\n        </div>\n      '), t.Player.getJwWrapper().querySelector(".talpa-jw-display-icon-next").addEventListener("click", t.playNextItemCall)
                          }
                          var n = t.Player.getJwWrapper().querySelector(".jw-display-icon-display .jw-icon-display"),
                              r = t.Player.getJwWrapper().querySelector(".jw-display-icon-display .jw-icon-display .jw-svg-icon-buffer");
                          null === r || void 0 === r || null === (e = r.parentNode) || void 0 === e || e.removeChild(r);
                          var o = document.createElement("div");
                          o.setAttribute("class", "jw-svg-icon jw-svg-icon-buffer"), n.appendChild(o)
                      })), Object(c.a)(this, "removeControlButtons", (function() {
                          var e, n, r;
                          (null === (e = t.Player) || void 0 === e || null === (n = e.getJwWrapper) || void 0 === n ? void 0 : n.call(e)) && (null === (r = t.Player) || void 0 === r ? void 0 : r.instance) && (document.querySelector(".talpa-jw-display-icon-prev") && t.Player.getJwWrapper().querySelector(".talpa-jw-display-icon-prev").removeEventListener("click", t.Player.instance.playlistPrev), document.querySelector(".talpa-jw-display-icon-next") && t.Player.getJwWrapper().querySelector(".talpa-jw-display-icon-next").removeEventListener("click", t.Player.instance.playlistNext))
                      })), Object(c.a)(this, "removeOverlay", (function() {
                          var e = t.Player.instance.getContainer().querySelector(".talpa-jw-modal-overlay");
                          e.parentNode.removeChild(e)
                      })), Object(c.a)(this, "heartBeatCallback", (function(e) {
                          t.onHeartBeatCallback();
                          var n = e.currentHeartBeat;
                          return 180 === n ? {
                              event_value: 180
                          } : n % 300 === 0 && {
                              event_value: 300
                          }
                      })), Object(c.a)(this, "resetCallbacks", (function() {
                          var e;
                          if (t.isPlayerLoaded && "function" === typeof(null === (e = t.Player) || void 0 === e ? void 0 : e.remove)) try {
                              t.isPlayerLoaded = !1, t.Player.remove()
                          } catch (n) {}
                          t.onHeartBeatCallback = C, t.onReadyCallback = C, t.onPlayCallback = C, t.onTimeCallback = C, t.onBufferChangeCallback = C, t.onSeekCallback = C, t.onSeekedCallback = C, t.onProviderFirstFrameCallback = C, t.onPauseCallback = C, t.onFirstFrameCallback = C, t.onCompleteCallback = C, t.onPlaylistCallback = C, t.onPlaylistItemCallback = C, t.stopHeartBeatCallback = C, t.onMuteCallback = C, t.onAdPlayCallback = C, t.onAdBreakEndCallback = C, t.onAdCompletedCallback = C, t.onPlayerErrorCallback = C, t.playPreviousItemCallback = C, t.playNextItemCall = C, t.onFloating = C, t.onCast = C
                      })), f.s && (this.setHeartbeat(), document.body.addEventListener("click", this.onClick))
                  }
                  return Object(s.a)(e, [{
                      key: "setPlaylistItem",
                      value: function(e) {
                          var t, n;
                          null === (t = this.Player) || void 0 === t || null === (n = t.setPlaylistItem) || void 0 === n || n.call(t, e)
                      }
                  }, {
                      key: "showPlayerLoader",
                      value: function() {
                          var e = this.Player.getJwWrapper();
                          e && (e.classList.remove("jw-state-playing"), e.classList.add("jw-state-buffering"))
                      }
                  }, {
                      key: "hidePlayerLoader",
                      value: function() {
                          var e = this.Player.getJwWrapper();
                          e && (e.classList.add("jw-state-playing"), e.classList.remove("jw-state-buffering"))
                      }
                  }, {
                      key: "removeFirstframe",
                      value: function() {
                          this.Player.instance.getContainer().classList.remove("talpa-jw-waiting-firstframe")
                      }
                  }, {
                      key: "addFirstframe",
                      value: function() {
                          this.Player.instance.getContainer().classList.add("talpa-jw-waiting-firstframe")
                      }
                  }, {
                      key: "setOnHeartBeatCallback",
                      value: function(e) {
                          this.onHeartBeatCallback = e
                      }
                  }, {
                      key: "setOnReadyCallback",
                      value: function(e) {
                          this.onReadyCallback = e
                      }
                  }, {
                      key: "setOnPlayCallback",
                      value: function(e) {
                          this.onPlayCallback = e
                      }
                  }, {
                      key: "setOnTimeCallback",
                      value: function(e) {
                          this.onTimeCallback = e
                      }
                  }, {
                      key: "setOnBufferChangeCallback",
                      value: function(e) {
                          this.onBufferChangeCallback = e
                      }
                  }, {
                      key: "setOnSeekCallback",
                      value: function(e) {
                          this.onSeekCallback = e
                      }
                  }, {
                      key: "setOnSeekedCallback",
                      value: function(e) {
                          this.onSeekedCallback = e
                      }
                  }, {
                      key: "setOnProviderFirstFrameCallback",
                      value: function(e) {
                          this.onProviderFirstFrameCallback = e
                      }
                  }, {
                      key: "setOnPauseCallback",
                      value: function(e) {
                          this.onPauseCallback = e
                      }
                  }, {
                      key: "setOnFirstFrameCallback",
                      value: function(e) {
                          this.onFirstFrameCallback = e
                      }
                  }, {
                      key: "setOnCompleteCallback",
                      value: function(e) {
                          this.onCompleteCallback = e
                      }
                  }, {
                      key: "setOnPlaylistCallback",
                      value: function(e) {
                          this.onPlaylistCallback = e
                      }
                  }, {
                      key: "setOnPlaylistItemCallback",
                      value: function(e) {
                          this.onPlaylistItemCallback = e
                      }
                  }, {
                      key: "setStopHeartBeatCallback",
                      value: function(e) {
                          this.stopHeartBeatCallback = e
                      }
                  }, {
                      key: "setOnMuteCallback",
                      value: function(e) {
                          this.onMuteCallback = e
                      }
                  }, {
                      key: "setOnAdPlayCallback",
                      value: function(e) {
                          this.onAdPlayCallback = e
                      }
                  }, {
                      key: "setOnAdBreakEndCallback",
                      value: function(e) {
                          this.onAdBreakEndCallback = e
                      }
                  }, {
                      key: "setOnAdCompletedCallback",
                      value: function(e) {
                          this.onAdCompletedCallback = e
                      }
                  }, {
                      key: "setOnPlayerErrorCallback",
                      value: function(e) {
                          this.onPlayerErrorCallback = e
                      }
                  }, {
                      key: "setPlayPreviousItemCallback",
                      value: function(e) {
                          this.playPreviousItemCallback = e
                      }
                  }, {
                      key: "setPlayNextItemCall",
                      value: function(e) {
                          this.playNextItemCall = e
                      }
                  }, {
                      key: "setOnFloatCallback",
                      value: function(e) {
                          this.onFloating = e
                      }
                  }, {
                      key: "setOnCastCallback",
                      value: function(e) {
                          this.onCast = e
                      }
                  }]), e
              }());
          t.a = S
      },
      "45CL": function(e, t, n) {
          e.exports = function() {
              "use strict";

              function e() {
                  return void 0 !== navigator.brave && void 0 !== navigator.brave.isBrave
              }

              function t() {
                  return "string" == typeof navigator.userAgent && navigator.userAgent.match(/Opera|OPR\//)
              }

              function n() {
                  return new Promise((function(e, t) {
                      var n = new XMLHttpRequest;
                      n.onreadystatechange = function() {
                          4 == n.readyState && e(n)
                      }, n.open("GET", "https://raw.githubusercontent.com/wmcmurray/just-detect-adblock/master/baits/pagead2.googlesyndication.com", !0), n.send()
                  }))
              }

              function r(e) {
                  return 200 === e.status && !e.responseText.match(/^thistextshouldbethere(\n|)$/)
              }

              function o(e) {
                  return 0 === e.status && !e.responseText.match(/^thistextshouldbethere(\n|)$/)
              }

              function i() {
                  return false;
              }
              var a;
              return {
                  detectAnyAdblocker: function() {
                      return new Promise((function(a, s) {
                          if (i()) return a(!0);
                          e() || t() ? n().then((function(n) {
                              return e() ? a(r(n)) : t() ? a(o(n)) : void a(!1)
                          })) : a(!1)
                      }))
                  },
                  detectDomAdblocker: (a = i, function() {
                      var e = arguments;
                      return new Promise((function(t, n) {
                          t(a.apply(this, e))
                      }))
                  }),
                  detectBraveShields: function() {
                      return new Promise((function(t, o) {
                          e() ? n().then((function(e) {
                              t(r(e))
                          })) : t(!1)
                      }))
                  },
                  detectOperaAdblocker: function() {
                      return new Promise((function(e, r) {
                          t() ? n().then((function(t) {
                              e(o(t))
                          })) : e(!1)
                      }))
                  },
                  isDetected: function(e, t) {
                      return function() {
                          return console.warn("just-detect-adblock : " + (t || "This method is deprecated.")), e.apply(this, arguments)
                      }
                  }(i, "The `isDetected()` method is now deprecated, please use `detectAnyAdblocker()` instead, which returns a Promise and can detect more stuff (like Brave Shields).")
              }
          }()
      },
      "7Vnt": function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return s
          })), n.d(t, "a", (function() {
              return c
          }));
          var r = n("vJKn"),
              o = n.n(r),
              i = n("rg98"),
              a = n("WcmU"),
              s = function(e, t) {
                  var n = t.currentState;
                  e.mutate({
                      mutation: a.c,
                      variables: {
                          currentState: n
                      }
                  })
              },
              c = function() {
                  var e = Object(i.a)(o.a.mark((function e(t, n) {
                      var r, i;
                      return o.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = n.nextState, e.next = 3, t.query({
                                      query: a.d
                                  });
                              case 3:
                                  i = e.sent, "unmounted" !== i.data.playerState.currentState && t.mutate({
                                      mutation: a.a,
                                      variables: {
                                          nextState: r
                                      }
                                  });
                              case 6:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()
      },
      OJro: function(e, t, n) {
          window,
          e.exports = function() {
              var e = Number.isNaN;
              return function(e) {
                  function t(r) {
                      if (n[r]) return n[r].exports;
                      var o = n[r] = {
                          i: r,
                          l: !1,
                          exports: {}
                      };
                      return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                  }
                  var n = {};
                  return t.m = e, t.c = n, t.d = function(e, n, r) {
                      t.o(e, n) || Object.defineProperty(e, n, {
                          enumerable: !0,
                          get: r
                      })
                  }, t.r = function(e) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                          value: "Module"
                      }), Object.defineProperty(e, "__esModule", {
                          value: !0
                      })
                  }, t.t = function(e, n) {
                      if (1 & n && (e = t(e)), 8 & n) return e;
                      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                      var r = Object.create(null);
                      if (t.r(r), Object.defineProperty(r, "default", {
                              enumerable: !0,
                              value: e
                          }), 2 & n && "string" != typeof e)
                          for (var o in e) t.d(r, o, function(t) {
                              return e[t]
                          }.bind(null, o));
                      return r
                  }, t.n = function(e) {
                      var n = e && e.__esModule ? function() {
                          return e.default
                      } : function() {
                          return e
                      };
                      return t.d(n, "a", n), n
                  }, t.o = function(e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t)
                  }, t.p = "", t(t.s = 24)
              }([function(e) {
                  e.exports = function(e, t, n) {
                      return t in e ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      }) : e[t] = n, e
                  }
              }, function(e) {
                  e.exports = function(e) {
                      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e
                  }
              }, function(e) {
                  function t(n) {
                      return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e)
                      }, t(n)
                  }
                  e.exports = t
              }, function(e, t, n) {
                  e.exports = n(17)
              }, function(e) {
                  e.exports = function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }
              }, function(e, t, n) {
                  var r = n(18);
                  e.exports = function(e, t) {
                      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                      e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                              value: e,
                              writable: !0,
                              configurable: !0
                          }
                      }), t && r(e, t)
                  }
              }, function(e, t, n) {
                  var r = n(8),
                      o = n(1);
                  e.exports = function(e, t) {
                      return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
                  }
              }, function(e) {
                  function t(e, t, n, r, o, i, a) {
                      try {
                          var s = e[i](a),
                              c = s.value
                      } catch (e) {
                          return void n(e)
                      }
                      s.done ? t(c) : Promise.resolve(c).then(r, o)
                  }
                  e.exports = function(e) {
                      return function() {
                          var n = this,
                              r = arguments;
                          return new Promise((function(o, i) {
                              function a(e) {
                                  t(c, o, i, a, s, "next", e)
                              }

                              function s(e) {
                                  t(c, o, i, a, s, "throw", e)
                              }
                              var c = e.apply(n, r);
                              a(void 0)
                          }))
                      }
                  }
              }, function(e) {
                  function t(n) {
                      return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                          return typeof e
                      } : function(e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                      }, t(n)
                  }
                  e.exports = t
              }, function(e) {
                  "use strict";

                  function t(e) {
                      var t = Object.prototype.toString.call(e);
                      return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                          return e.$$typeof === l
                      }(e)
                  }

                  function n(e, t) {
                      return !1 !== t.clone && t.isMergeableObject(e) ? s(function(e) {
                          return Array.isArray(e) ? [] : {}
                      }(e), e, t) : e
                  }

                  function r(e, t, r) {
                      return e.concat(t).map((function(e) {
                          return n(e, r)
                      }))
                  }

                  function o(e) {
                      return Object.keys(e).concat(function(e) {
                          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                              return e.propertyIsEnumerable(t)
                          })) : []
                      }(e))
                  }

                  function i(e, t) {
                      try {
                          return t in e
                      } catch (e) {
                          return !1
                      }
                  }

                  function a(e, t, r) {
                      var a = {};
                      return r.isMergeableObject(e) && o(e).forEach((function(t) {
                          a[t] = n(e[t], r)
                      })), o(t).forEach((function(o) {
                          (function(e, t) {
                              return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                          })(e, o) || (i(e, o) && r.isMergeableObject(t[o]) ? a[o] = function(e, t) {
                              if (!t.customMerge) return s;
                              var n = t.customMerge(e);
                              return "function" == typeof n ? n : s
                          }(o, r)(e[o], t[o], r) : a[o] = n(t[o], r))
                      })), a
                  }

                  function s(e, t, o) {
                      (o = o || {}).arrayMerge = o.arrayMerge || r, o.isMergeableObject = o.isMergeableObject || c, o.cloneUnlessOtherwiseSpecified = n;
                      var i = Array.isArray(t);
                      return i === Array.isArray(e) ? i ? o.arrayMerge(e, t, o) : a(e, t, o) : n(t, o)
                  }
                  var c = function(e) {
                          return function(e) {
                              return !!e && "object" == typeof e
                          }(e) && !t(e)
                      },
                      l = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
                  s.all = function(e, t) {
                      if (!Array.isArray(e)) throw new Error("first argument should be an array");
                      return e.reduce((function(e, n) {
                          return s(e, n, t)
                      }), {})
                  }, e.exports = s
              }, function(e) {
                  e.exports = function(e, t) {
                      (null == t || t > e.length) && (t = e.length);
                      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                      return r
                  }
              }, function(t) {
                  "use strict";

                  function n() {
                      n.init.call(this)
                  }

                  function r(e) {
                      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                  }

                  function o(e) {
                      return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners
                  }

                  function i(e, t, n, i) {
                      var a, s, c;
                      if (r(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), c = s[t]), void 0 === c) c = s[t] = n, ++e._eventsCount;
                      else if ("function" == typeof c ? c = s[t] = i ? [n, c] : [c, n] : i ? c.unshift(n) : c.push(n), 0 < (a = o(e)) && c.length > a && !c.warned) {
                          c.warned = !0;
                          var l = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                          l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = c.length,
                              function(e) {
                                  console && console.warn && console.warn(e)
                              }(l)
                      }
                      return e
                  }

                  function a() {
                      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                  }

                  function s(e, t, n) {
                      var r = {
                              fired: !1,
                              wrapFn: void 0,
                              target: e,
                              type: t,
                              listener: n
                          },
                          o = a.bind(r);
                      return o.listener = n, r.wrapFn = o, o
                  }

                  function c(e, t, n) {
                      var r = e._events;
                      if (void 0 === r) return [];
                      var o = r[t];
                      return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
                          for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                          return t
                      }(o) : u(o, o.length)
                  }

                  function l(e) {
                      var t = this._events;
                      if (void 0 !== t) {
                          var n = t[e];
                          if ("function" == typeof n) return 1;
                          if (void 0 !== n) return n.length
                      }
                      return 0
                  }

                  function u(e, t) {
                      for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
                      return n
                  }
                  var d, p = "object" == typeof Reflect ? Reflect : null,
                      f = p && "function" == typeof p.apply ? p.apply : function(e, t, n) {
                          return Function.prototype.apply.call(e, t, n)
                      };
                  d = p && "function" == typeof p.ownKeys ? p.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                  } : function(e) {
                      return Object.getOwnPropertyNames(e)
                  };
                  var y = e || function(e) {
                      return e != e
                  };
                  t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._eventsCount = 0, n.prototype._maxListeners = void 0;
                  var v = 10;
                  Object.defineProperty(n, "defaultMaxListeners", {
                      enumerable: !0,
                      get: function() {
                          return v
                      },
                      set: function(e) {
                          if ("number" != typeof e || 0 > e || y(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                          v = e
                      }
                  }), n.init = function() {
                      (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                  }, n.prototype.setMaxListeners = function(e) {
                      if ("number" != typeof e || 0 > e || y(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                      return this._maxListeners = e, this
                  }, n.prototype.getMaxListeners = function() {
                      return o(this)
                  }, n.prototype.emit = function(e) {
                      for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                      var r = "error" === e,
                          o = this._events;
                      if (void 0 !== o) r = r && void 0 === o.error;
                      else if (!r) return !1;
                      if (r) {
                          var i;
                          if (0 < t.length && (i = t[0]), i instanceof Error) throw i;
                          var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                          throw a.context = i, a
                      }
                      var s = o[e];
                      if (void 0 === s) return !1;
                      if ("function" == typeof s) f(s, this, t);
                      else {
                          var c = s.length,
                              l = u(s, c);
                          for (n = 0; n < c; ++n) f(l[n], this, t)
                      }
                      return !0
                  }, n.prototype.addListener = function(e, t) {
                      return i(this, e, t, !1)
                  }, n.prototype.on = n.prototype.addListener, n.prototype.prependListener = function(e, t) {
                      return i(this, e, t, !0)
                  }, n.prototype.once = function(e, t) {
                      return r(t), this.on(e, s(this, e, t)), this
                  }, n.prototype.prependOnceListener = function(e, t) {
                      return r(t), this.prependListener(e, s(this, e, t)), this
                  }, n.prototype.removeListener = function(e, t) {
                      var n, o, i, a, s;
                      if (r(t), void 0 === (o = this._events)) return this;
                      if (void 0 === (n = o[e])) return this;
                      if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, n.listener || t));
                      else if ("function" != typeof n) {
                          for (i = -1, a = n.length - 1; 0 <= a; a--)
                              if (n[a] === t || n[a].listener === t) {
                                  s = n[a].listener, i = a;
                                  break
                              } if (0 > i) return this;
                          0 === i ? n.shift() : function(e, t) {
                              for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                              e.pop()
                          }(n, i), 1 === n.length && (o[e] = n[0]), void 0 !== o.removeListener && this.emit("removeListener", e, s || t)
                      }
                      return this
                  }, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = function(e) {
                      var t, n, r;
                      if (void 0 === (n = this._events)) return this;
                      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                      if (0 === arguments.length) {
                          var o, i = Object.keys(n);
                          for (r = 0; r < i.length; ++r) "removeListener" === (o = i[r]) || this.removeAllListeners(o);
                          return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                      }
                      if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                      else if (void 0 !== t)
                          for (r = t.length - 1; 0 <= r; r--) this.removeListener(e, t[r]);
                      return this
                  }, n.prototype.listeners = function(e) {
                      return c(this, e, !0)
                  }, n.prototype.rawListeners = function(e) {
                      return c(this, e, !1)
                  }, n.listenerCount = function(e, t) {
                      return "function" == typeof e.listenerCount ? e.listenerCount(t) : l.call(e, t)
                  }, n.prototype.listenerCount = l, n.prototype.eventNames = function() {
                      return 0 < this._eventsCount ? d(this._events) : []
                  }
              }, function(e) {
                  function t(e, t) {
                      for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                  }
                  e.exports = function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e
                  }
              }, function(e, t, n) {
                  var r = n(19),
                      o = n(20),
                      i = n(21),
                      a = n(22);
                  e.exports = function(e) {
                      return r(e) || o(e) || i(e) || a()
                  }
              }, function(e, t, n) {
                  var r;
                  ! function(o, i) {
                      function a(e) {
                          return function() {
                              var t = {
                                      method: e
                                  },
                                  n = Array.prototype.slice.call(arguments);
                              /^get/.test(e) ? (s.assert(0 < n.length, "Get methods require a callback."), n.unshift(t)) : (/^set/.test(e) && (s.assert(0 !== n.length, "Set methods require a value."), t.value = n[0]), n = [t]), this.send.apply(this, n)
                          }
                      }
                      var s = {
                          DEBUG: !1,
                          VERSION: "0.0.11",
                          CONTEXT: "player.js"
                      };
                      s.POST_MESSAGE = !!o.postMessage, s.origin = function(e) {
                          return "//" === e.substr(0, 2) && (e = o.location.protocol + e), e.split("/").slice(0, 3).join("/")
                      }, s.addEvent = function(e, t, n) {
                          e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
                      }, s.log = function() {
                          s.log.history = s.log.history || [], s.log.history.push(arguments), o.console && s.DEBUG && o.console.log(Array.prototype.slice.call(arguments))
                      }, s.isString = function(e) {
                          return "[object String]" === Object.prototype.toString.call(e)
                      }, s.isObject = function(e) {
                          return "[object Object]" === Object.prototype.toString.call(e)
                      }, s.isArray = function(e) {
                          return "[object Array]" === Object.prototype.toString.call(e)
                      }, s.isNone = function(e) {
                          return null == e
                      }, s.has = function(e, t) {
                          return Object.prototype.hasOwnProperty.call(e, t)
                      }, s.indexOf = function(e, t) {
                          if (null == e) return -1;
                          var n = 0,
                              r = e.length;
                          if (Array.prototype.IndexOf && e.indexOf === Array.prototype.IndexOf) return e.indexOf(t);
                          for (; n < r; n++)
                              if (e[n] === t) return n;
                          return -1
                      }, s.assert = function(e, t) {
                          if (!e) throw t || "Player.js Assert Failed"
                      }, s.Keeper = function() {
                          this.init()
                      }, s.Keeper.prototype.init = function() {
                          this.data = {}
                      }, s.Keeper.prototype.getUUID = function() {
                          return "listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                              var t = 0 | 16 * Math.random();
                              return ("x" === e ? t : 8 | 3 & t).toString(16)
                          }))
                      }, s.Keeper.prototype.has = function(e, t) {
                          if (!this.data.hasOwnProperty(e)) return !1;
                          if (s.isNone(t)) return !0;
                          for (var n = this.data[e], r = 0; r < n.length; r++)
                              if (n[r].id === t) return !0;
                          return !1
                      }, s.Keeper.prototype.add = function(e, t, n, r, o) {
                          var i = {
                              id: e,
                              event: t,
                              cb: n,
                              ctx: r,
                              one: o
                          };
                          this.has(t) ? this.data[t].push(i) : this.data[t] = [i]
                      }, s.Keeper.prototype.execute = function(e, t, n, r) {
                          if (!this.has(e, t)) return !1;
                          for (var o, i = [], a = [], c = 0; c < this.data[e].length; c++) o = this.data[e][c], s.isNone(t) || !s.isNone(t) && o.id === t ? (a.push({
                              cb: o.cb,
                              ctx: o.ctx ? o.ctx : r,
                              data: n
                          }), !1 === o.one && i.push(o)) : i.push(o);
                          0 === i.length ? delete this.data[e] : this.data[e] = i;
                          for (var l, u = 0; u < a.length; u++)(l = a[u]).cb.call(l.ctx, l.data)
                      }, s.Keeper.prototype.on = function(e, t, n, r) {
                          this.add(e, t, n, r, !1)
                      }, s.Keeper.prototype.one = function(e, t, n, r) {
                          this.add(e, t, n, r, !0)
                      }, s.Keeper.prototype.off = function(e, t) {
                          var n = [];
                          if (!this.data.hasOwnProperty(e)) return n;
                          for (var r, o = [], i = 0; i < this.data[e].length; i++) r = this.data[e][i], s.isNone(t) || r.cb === t ? !s.isNone(r.id) && n.push(r.id) : o.push(r);
                          return 0 === o.length ? delete this.data[e] : this.data[e] = o, n
                      }, s.Player = function(e, t) {
                          return this instanceof s.Player ? void this.init(e, t) : new s.Player(e, t)
                      }, s.EVENTS = {
                          READY: "ready",
                          PLAY: "play",
                          PAUSE: "pause",
                          ENDED: "ended",
                          TIMEUPDATE: "timeupdate",
                          PROGRESS: "progress",
                          ERROR: "error"
                      }, s.EVENTS.all = function() {
                          var e = [];
                          for (var t in s.EVENTS) s.has(s.EVENTS, t) && s.isString(s.EVENTS[t]) && e.push(s.EVENTS[t]);
                          return e
                      }, s.METHODS = {
                          PLAY: "play",
                          PAUSE: "pause",
                          GETPAUSED: "getPaused",
                          MUTE: "mute",
                          UNMUTE: "unmute",
                          GETMUTED: "getMuted",
                          SETVOLUME: "setVolume",
                          GETVOLUME: "getVolume",
                          GETDURATION: "getDuration",
                          SETCURRENTTIME: "setCurrentTime",
                          GETCURRENTTIME: "getCurrentTime",
                          SETLOOP: "setLoop",
                          GETLOOP: "getLoop",
                          REMOVEEVENTLISTENER: "removeEventListener",
                          ADDEVENTLISTENER: "addEventListener"
                      }, s.METHODS.all = function() {
                          var e = [];
                          for (var t in s.METHODS) s.has(s.METHODS, t) && s.isString(s.METHODS[t]) && e.push(s.METHODS[t]);
                          return e
                      }, s.READIED = [], s.Player.prototype.init = function(e) {
                          var t = this;
                          s.isString(e) && (e = i.getElementById(e)), this.elem = e, s.assert("IFRAME" === e.nodeName, 'playerjs.Player constructor requires an Iframe, got "' + e.nodeName + '"'), s.assert(e.src, "playerjs.Player constructor requires a Iframe with a 'src' attribute."), this.origin = s.origin(e.src), this.keeper = new s.Keeper, this.isReady = !1, this.queue = [], this.events = s.EVENTS.all(), this.methods = s.METHODS.all(), s.POST_MESSAGE ? s.addEvent(o, "message", (function(e) {
                              t.receive(e)
                          })) : s.log("Post Message is not Available."), -1 < s.indexOf(s.READIED, e.src) ? t.loaded = !0 : this.elem.onload = function() {
                              t.loaded = !0
                          }
                      }, s.Player.prototype.send = function(e, t, n) {
                          if (e.context = s.CONTEXT, e.version = s.VERSION, t) {
                              var r = this.keeper.getUUID();
                              e.listener = r, this.keeper.one(r, e.method, t, n)
                          }
                          return this.isReady || "ready" === e.value ? (s.log("Player.send", e, this.origin), !0 === this.loaded && this.elem.contentWindow.postMessage(JSON.stringify(e), this.origin), !0) : (s.log("Player.queue", e), this.queue.push(e), !1)
                      }, s.Player.prototype.receive = function(e) {
                          if (s.log("Player.receive", e), e.origin !== this.origin) return !1;
                          var t;
                          try {
                              t = JSON.parse(e.data)
                          } catch (t) {
                              return !1
                          }
                          return t.context === s.CONTEXT && ("ready" === t.event && t.value && t.value.src === this.elem.src && this.ready(t), void(this.keeper.has(t.event, t.listener) && this.keeper.execute(t.event, t.listener, t.value, this)))
                      }, s.Player.prototype.ready = function(e) {
                          if (!0 === this.isReady) return !1;
                          e.value.events && (this.events = e.value.events), e.value.methods && (this.methods = e.value.methods), this.isReady = !0, this.loaded = !0;
                          for (var t, n = 0; n < this.queue.length; n++) t = this.queue[n], s.log("Player.dequeue", t), "ready" === e.event && this.keeper.execute(t.event, t.listener, !0, this), this.send(t);
                          this.queue = []
                      }, s.Player.prototype.on = function(e, t, n) {
                          var r = this.keeper.getUUID();
                          return "ready" === e ? this.keeper.one(r, e, t, n) : this.keeper.on(r, e, t, n), this.send({
                              method: "addEventListener",
                              value: e,
                              listener: r
                          }), !0
                      }, s.Player.prototype.off = function(e, t) {
                          var n = this.keeper.off(e, t);
                          if (s.log("Player.off", n), 0 < n.length)
                              for (var r in n) return this.send({
                                  method: "removeEventListener",
                                  value: e,
                                  listener: n[r]
                              }), !0;
                          return !1
                      }, s.Player.prototype.supports = function(e, t) {
                          s.assert(-1 < s.indexOf(["method", "event"], e), 'evtOrMethod needs to be either "event" or "method" got ' + e), t = s.isArray(t) ? t : [t];
                          for (var n = "event" === e ? this.events : this.methods, r = 0; r < t.length; r++)
                              if (-1 === s.indexOf(n, t[r])) return !1;
                          return !0
                      };
                      for (var c, l = 0, u = s.METHODS.all().length; l < u; l++) c = s.METHODS.all()[l], s.Player.prototype.hasOwnProperty(c) || (s.Player.prototype[c] = a(c));
                      s.addEvent(o, "message", (function(e) {
                          var t;
                          try {
                              t = JSON.parse(e.data)
                          } catch (t) {
                              return !1
                          }
                          return !(t.context !== s.CONTEXT) && void("ready" === t.event && t.value && t.value.src && s.READIED.push(t.value.src))
                      })), s.Receiver = function(e, t) {
                          this.init(e, t)
                      }, s.Receiver.prototype.init = function(e, t) {
                          var n = this;
                          this.isReady = !1, this.origin = s.origin(i.referrer), this.methods = {}, this.supported = {
                              events: e || s.EVENTS.all(),
                              methods: t || s.METHODS.all()
                          }, this.eventListeners = {}, this.reject = !(o.self !== o.top && s.POST_MESSAGE), this.reject || s.addEvent(o, "message", (function(e) {
                              n.receive(e)
                          }))
                      }, s.Receiver.prototype.receive = function(e) {
                          if (e.origin !== this.origin) return !1;
                          var t = {};
                          if (s.isObject(e.data)) t = e.data;
                          else try {
                              t = o.JSON.parse(e.data)
                          } catch (t) {
                              s.log("JSON Parse Error", t)
                          }
                          if (s.log("Receiver.receive", e, t), !t.method) return !1;
                          if (t.context !== s.CONTEXT) return !1;
                          if (-1 === s.indexOf(s.METHODS.all(), t.method)) return this.emit("error", {
                              code: 2,
                              msg: 'Invalid Method "' + t.method + '"'
                          }), !1;
                          var n = s.isNone(t.listener) ? null : t.listener;
                          if ("addEventListener" === t.method) this.eventListeners.hasOwnProperty(t.value) ? -1 === s.indexOf(this.eventListeners[t.value], n) && this.eventListeners[t.value].push(n) : this.eventListeners[t.value] = [n], "ready" === t.value && this.isReady && this.ready();
                          else if ("removeEventListener" !== t.method) this.get(t.method, t.value, n);
                          else if (this.eventListeners.hasOwnProperty(t.value)) {
                              var r = s.indexOf(this.eventListeners[t.value], n); - 1 < r && this.eventListeners[t.value].splice(r, 1), 0 === this.eventListeners[t.value].length && delete this.eventListeners[t.value]
                          }
                      }, s.Receiver.prototype.get = function(e, t, n) {
                          var r = this;
                          if (!this.methods.hasOwnProperty(e)) return this.emit("error", {
                              code: 3,
                              msg: 'Method Not Supported"' + e + '"'
                          }), !1;
                          var o = this.methods[e];
                          "get" === e.substr(0, 3) ? o.call(this, (function(t) {
                              r.send(e, t, n)
                          })) : o.call(this, t)
                      }, s.Receiver.prototype.on = function(e, t) {
                          this.methods[e] = t
                      }, s.Receiver.prototype.send = function(e, t, n) {
                          if (s.log("Receiver.send", e, t, n), this.reject) return s.log("Receiver.send.reject", e, t, n), !1;
                          var r = {
                              context: s.CONTEXT,
                              version: s.VERSION,
                              event: e
                          };
                          s.isNone(t) || (r.value = t), s.isNone(n) || (r.listener = n);
                          var i = JSON.stringify(r);
                          o.parent.postMessage(i, "" === this.origin ? "*" : this.origin)
                      }, s.Receiver.prototype.emit = function(e, t) {
                          if (!this.eventListeners.hasOwnProperty(e)) return !1;
                          s.log("Instance.emit", e, t, this.eventListeners[e]);
                          for (var n, r = 0; r < this.eventListeners[e].length; r++) n = this.eventListeners[e][r], this.send(e, t, n);
                          return !0
                      }, s.Receiver.prototype.ready = function() {
                          s.log("Receiver.ready"), this.isReady = !0;
                          var e = {
                              src: o.location.toString(),
                              events: this.supported.events,
                              methods: this.supported.methods
                          };
                          this.emit("ready", e) || this.send("ready", e)
                      }, s.HTML5Adapter = function(e) {
                          return this instanceof s.HTML5Adapter ? void this.init(e) : new s.HTML5Adapter(e)
                      }, s.HTML5Adapter.prototype.init = function(e) {
                          s.assert(e, "playerjs.HTML5Adapter requires a video element");
                          var t = this.receiver = new s.Receiver;
                          e.addEventListener("playing", (function() {
                              t.emit("play")
                          })), e.addEventListener("pause", (function() {
                              t.emit("pause")
                          })), e.addEventListener("ended", (function() {
                              t.emit("ended")
                          })), e.addEventListener("timeupdate", (function() {
                              t.emit("timeupdate", {
                                  seconds: e.currentTime,
                                  duration: e.duration
                              })
                          })), e.addEventListener("progress", (function() {
                              t.emit("buffered", {
                                  percent: e.buffered.length
                              })
                          })), t.on("play", (function() {
                              e.play()
                          })), t.on("pause", (function() {
                              e.pause()
                          })), t.on("getPaused", (function(t) {
                              t(e.paused)
                          })), t.on("getCurrentTime", (function(t) {
                              t(e.currentTime)
                          })), t.on("setCurrentTime", (function(t) {
                              e.currentTime = t
                          })), t.on("getDuration", (function(t) {
                              t(e.duration)
                          })), t.on("getVolume", (function(t) {
                              t(100 * e.volume)
                          })), t.on("setVolume", (function(t) {
                              e.volume = t / 100
                          })), t.on("mute", (function() {
                              e.muted = !0
                          })), t.on("unmute", (function() {
                              e.muted = !1
                          })), t.on("getMuted", (function(t) {
                              t(e.muted)
                          })), t.on("getLoop", (function(t) {
                              t(e.loop)
                          })), t.on("setLoop", (function(t) {
                              e.loop = t
                          }))
                      }, s.HTML5Adapter.prototype.ready = function() {
                          this.receiver.ready()
                      }, s.JWPlayerAdapter = function(e) {
                          return this instanceof s.JWPlayerAdapter ? void this.init(e) : new s.JWPlayerAdapter(e)
                      }, s.JWPlayerAdapter.prototype.init = function(e) {
                          s.assert(e, "playerjs.JWPlayerAdapter requires a player object");
                          var t = this.receiver = new s.Receiver;
                          this.looped = !1, e.on("pause", (function() {
                              t.emit("pause")
                          })), e.on("play", (function() {
                              t.emit("play")
                          })), e.on("time", (function(e) {
                              var n = e.position,
                                  r = e.duration;
                              if (!n || !r) return !1;
                              t.emit("timeupdate", {
                                  seconds: n,
                                  duration: r
                              })
                          }));
                          var n = this;
                          e.on("complete", (function() {
                              !0 === n.looped ? e.seek(0) : t.emit("ended")
                          })), e.on("error", (function() {
                              t.emit("error")
                          })), t.on("play", (function() {
                              e.play(!0)
                          })), t.on("pause", (function() {
                              e.pause(!0)
                          })), t.on("getPaused", (function(t) {
                              t(e.getState().toLowerCase() !== "PLAYING".toLowerCase())
                          })), t.on("getCurrentTime", (function(t) {
                              t(e.getPosition())
                          })), t.on("setCurrentTime", (function(t) {
                              e.seek(t)
                          })), t.on("getDuration", (function(t) {
                              t(e.getDuration())
                          })), t.on("getVolume", (function(t) {
                              t(e.getVolume())
                          })), t.on("setVolume", (function(t) {
                              e.setVolume(t)
                          })), t.on("mute", (function() {
                              e.setMute(!0)
                          })), t.on("unmute", (function() {
                              e.setMute(!1)
                          })), t.on("getMuted", (function(t) {
                              t(!0 === e.getMute())
                          })), t.on("getLoop", (function(e) {
                              e(this.looped)
                          }), this), t.on("setLoop", (function(e) {
                              this.looped = e
                          }), this)
                      }, s.JWPlayerAdapter.prototype.ready = function() {
                          this.receiver.ready()
                      }, s.MockAdapter = function() {
                          return this instanceof s.MockAdapter ? void this.init() : new s.MockAdapter
                      }, s.MockAdapter.prototype.init = function() {
                          var e = {
                                  duration: 20,
                                  currentTime: 0,
                                  interval: null,
                                  timeupdate: function() {},
                                  volume: 100,
                                  mute: !1,
                                  playing: !1,
                                  loop: !1,
                                  play: function() {
                                      e.interval = setInterval((function() {
                                          e.currentTime += .25, e.timeupdate({
                                              seconds: e.currentTime,
                                              duration: e.duration
                                          })
                                      }), 250), e.playing = !0
                                  },
                                  pause: function() {
                                      clearInterval(e.interval), e.playing = !1
                                  }
                              },
                              t = this.receiver = new s.Receiver;
                          t.on("play", (function() {
                              var t = this;
                              e.play(), this.emit("play"), e.timeupdate = function(e) {
                                  t.emit("timeupdate", e)
                              }
                          })), t.on("pause", (function() {
                              e.pause(), this.emit("pause")
                          })), t.on("getPaused", (function(t) {
                              t(!e.playing)
                          })), t.on("getCurrentTime", (function(t) {
                              t(e.currentTime)
                          })), t.on("setCurrentTime", (function(t) {
                              e.currentTime = t
                          })), t.on("getDuration", (function(t) {
                              t(e.duration)
                          })), t.on("getVolume", (function(t) {
                              t(e.volume)
                          })), t.on("setVolume", (function(t) {
                              e.volume = t
                          })), t.on("mute", (function() {
                              e.mute = !0
                          })), t.on("unmute", (function() {
                              e.mute = !1
                          })), t.on("getMuted", (function(t) {
                              t(e.mute)
                          })), t.on("getLoop", (function(t) {
                              t(e.loop)
                          })), t.on("setLoop", (function(t) {
                              e.loop = t
                          }))
                      }, s.MockAdapter.prototype.ready = function() {
                          this.receiver.ready()
                      }, s.VideoJSAdapter = function(e) {
                          return this instanceof s.VideoJSAdapter ? void this.init(e) : new s.VideoJSAdapter(e)
                      }, s.VideoJSAdapter.prototype.init = function(e) {
                          s.assert(e, "playerjs.VideoJSReceiver requires a player object");
                          var t = this.receiver = new s.Receiver;
                          e.on("pause", (function() {
                              t.emit("pause")
                          })), e.on("play", (function() {
                              t.emit("play")
                          })), e.on("timeupdate", (function() {
                              var n = e.currentTime(),
                                  r = e.duration();
                              if (!n || !r) return !1;
                              t.emit("timeupdate", {
                                  seconds: n,
                                  duration: r
                              })
                          })), e.on("ended", (function() {
                              t.emit("ended")
                          })), e.on("error", (function() {
                              t.emit("error")
                          })), t.on("play", (function() {
                              e.play()
                          })), t.on("pause", (function() {
                              e.pause()
                          })), t.on("getPaused", (function(t) {
                              t(e.paused())
                          })), t.on("getCurrentTime", (function(t) {
                              t(e.currentTime())
                          })), t.on("setCurrentTime", (function(t) {
                              e.currentTime(t)
                          })), t.on("getDuration", (function(t) {
                              t(e.duration())
                          })), t.on("getVolume", (function(t) {
                              t(100 * e.volume())
                          })), t.on("setVolume", (function(t) {
                              e.volume(t / 100)
                          })), t.on("mute", (function() {
                              e.volume(0)
                          })), t.on("unmute", (function() {
                              e.volume(1)
                          })), t.on("getMuted", (function(t) {
                              t(0 === e.volume())
                          })), t.on("getLoop", (function(t) {
                              t(e.loop())
                          })), t.on("setLoop", (function(t) {
                              e.loop(t)
                          }))
                      }, s.VideoJSAdapter.prototype.ready = function() {
                          this.receiver.ready()
                      }, void 0 === (r = function() {
                          return s
                      }.call(t, n, t, e)) || (e.exports = r)
                  }(window, document)
              }, function(e) {
                  e.exports = JSON.parse("{}")
              }, function(e) {
                  e.exports = JSON.parse('{"nextUp":"Volgende","advertising":{"cuetext":"Advertentie","podmessage":"Adv. __AD_POD_CURRENT__ van __AD_POD_LENGTH__","loadingAd":"Advertentie laden"}}')
              }, function(e) {
                  var t = function(e) {
                      "use strict";

                      function t(e, t, n, o) {
                          var i = t && t.prototype instanceof r ? t : r,
                              a = Object.create(i.prototype),
                              s = new p(o || []);
                          return a._invoke = c(e, n, s), a
                      }

                      function n(e, t, n) {
                          try {
                              return {
                                  type: "normal",
                                  arg: e.call(t, n)
                              }
                          } catch (e) {
                              return {
                                  type: "throw",
                                  arg: e
                              }
                          }
                      }

                      function r() {}

                      function o() {}

                      function i() {}

                      function a(e) {
                          ["next", "throw", "return"].forEach((function(t) {
                              e[t] = function(e) {
                                  return this._invoke(t, e)
                              }
                          }))
                      }

                      function s(e, t) {
                          function r(o, i, a, s) {
                              var c = n(e[o], e, i);
                              if ("throw" !== c.type) {
                                  var l = c.arg,
                                      u = l.value;
                                  return u && "object" == typeof u && h.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                      r("next", e, a, s)
                                  }), (function(e) {
                                      r("throw", e, a, s)
                                  })) : t.resolve(u).then((function(e) {
                                      l.value = e, a(l)
                                  }), (function(e) {
                                      return r("throw", e, a, s)
                                  }))
                              }
                              s(c.arg)
                          }
                          var o;
                          this._invoke = function(e, n) {
                              function i() {
                                  return new t((function(t, o) {
                                      r(e, n, t, o)
                                  }))
                              }
                              return o = o ? o.then(i, i) : i()
                          }
                      }

                      function c(e, t, r) {
                          var o = j;
                          return function(i, a) {
                              if (o === P) throw new Error("Generator is already running");
                              if (o === O) {
                                  if ("throw" === i) throw a;
                                  return {
                                      value: void 0,
                                      done: !0
                                  }
                              }
                              for (r.method = i, r.arg = a;;) {
                                  var s = r.delegate;
                                  if (s) {
                                      var c = l(s, r);
                                      if (c) {
                                          if (c === C) continue;
                                          return c
                                      }
                                  }
                                  if ("next" === r.method) r.sent = r._sent = r.arg;
                                  else if ("throw" === r.method) {
                                      if (o === j) throw o = O, r.arg;
                                      r.dispatchException(r.arg)
                                  } else "return" === r.method && r.abrupt("return", r.arg);
                                  o = P;
                                  var u = n(e, t, r);
                                  if ("normal" === u.type) {
                                      if (o = r.done ? O : k, u.arg === C) continue;
                                      return {
                                          value: u.arg,
                                          done: r.done
                                      }
                                  }
                                  "throw" === u.type && (o = O, r.method = "throw", r.arg = u.arg)
                              }
                          }
                      }

                      function l(e, t) {
                          var r = e.iterator[t.method];
                          if (void 0 === r) {
                              if (t.delegate = null, "throw" === t.method) {
                                  if (e.iterator.return && (t.method = "return", t.arg = void 0, l(e, t), "throw" === t.method)) return C;
                                  t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                              }
                              return C
                          }
                          var o = n(r, e.iterator, t.arg);
                          if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, C;
                          var i = o.arg;
                          return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, C) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, C)
                      }

                      function u(e) {
                          var t = {
                              tryLoc: e[0]
                          };
                          1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                      }

                      function d(e) {
                          var t = e.completion || {};
                          t.type = "normal", delete t.arg, e.completion = t
                      }

                      function p(e) {
                          this.tryEntries = [{
                              tryLoc: "root"
                          }], e.forEach(u, this), this.reset(!0)
                      }

                      function f(e) {
                          if (e) {
                              var t = e[g];
                              if (t) return t.call(e);
                              if ("function" == typeof e.next) return e;
                              if (!isNaN(e.length)) {
                                  var n = -1,
                                      r = function t() {
                                          for (; ++n < e.length;)
                                              if (h.call(e, n)) return t.value = e[n], t.done = !1, t;
                                          return t.value = void 0, t.done = !0, t
                                      };
                                  return r.next = r
                              }
                          }
                          return {
                              next: y
                          }
                      }

                      function y() {
                          return {
                              value: void 0,
                              done: !0
                          }
                      }
                      var v = Object.prototype,
                          h = v.hasOwnProperty,
                          m = "function" == typeof Symbol ? Symbol : {},
                          g = m.iterator || "@@iterator",
                          b = m.asyncIterator || "@@asyncIterator",
                          w = m.toStringTag || "@@toStringTag";
                      e.wrap = t;
                      var j = "suspendedStart",
                          k = "suspendedYield",
                          P = "executing",
                          O = "completed",
                          C = {},
                          E = {};
                      E[g] = function() {
                          return this
                      };
                      var S = Object.getPrototypeOf,
                          x = S && S(S(f([])));
                      x && x !== v && h.call(x, g) && (E = x);
                      var L = i.prototype = r.prototype = Object.create(E);
                      return o.prototype = L.constructor = i, i.constructor = o, i[w] = o.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                          var t = "function" == typeof e && e.constructor;
                          return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
                      }, e.mark = function(e) {
                          return Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : (e.__proto__ = i, !(w in e) && (e[w] = "GeneratorFunction")), e.prototype = Object.create(L), e
                      }, e.awrap = function(e) {
                          return {
                              __await: e
                          }
                      }, a(s.prototype), s.prototype[b] = function() {
                          return this
                      }, e.AsyncIterator = s, e.async = function(n, r, o, i, a) {
                          void 0 === a && (a = Promise);
                          var c = new s(t(n, r, o, i), a);
                          return e.isGeneratorFunction(r) ? c : c.next().then((function(e) {
                              return e.done ? e.value : c.next()
                          }))
                      }, a(L), L[w] = "Generator", L[g] = function() {
                          return this
                      }, L.toString = function() {
                          return "[object Generator]"
                      }, e.keys = function(e) {
                          var t = [];
                          for (var n in e) t.push(n);
                          return t.reverse(),
                              function n() {
                                  for (; t.length;) {
                                      var r = t.pop();
                                      if (r in e) return n.value = r, n.done = !1, n
                                  }
                                  return n.done = !0, n
                              }
                      }, e.values = f, p.prototype = {
                          constructor: p,
                          reset: function(e) {
                              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(d), !e)
                                  for (var t in this) "t" === t.charAt(0) && h.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                          },
                          stop: function() {
                              this.done = !0;
                              var e = this.tryEntries[0].completion;
                              if ("throw" === e.type) throw e.arg;
                              return this.rval
                          },
                          dispatchException: function(e) {
                              function t(t, r) {
                                  return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = void 0), !!r
                              }
                              if (this.done) throw e;
                              for (var n = this, r = this.tryEntries.length - 1; 0 <= r; --r) {
                                  var o = this.tryEntries[r],
                                      i = o.completion;
                                  if ("root" === o.tryLoc) return t("end");
                                  if (o.tryLoc <= this.prev) {
                                      var a = h.call(o, "catchLoc"),
                                          s = h.call(o, "finallyLoc");
                                      if (a && s) {
                                          if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                          if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                      } else if (a) {
                                          if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                                      } else {
                                          if (!s) throw new Error("try statement without catch or finally");
                                          if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                      }
                                  }
                              }
                          },
                          abrupt: function(e, t) {
                              for (var n, r = this.tryEntries.length - 1; 0 <= r; --r)
                                  if ((n = this.tryEntries[r]).tryLoc <= this.prev && h.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                      var o = n;
                                      break
                                  } o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                              var i = o ? o.completion : {};
                              return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, C) : this.complete(i)
                          },
                          complete: function(e, t) {
                              if ("throw" === e.type) throw e.arg;
                              return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), C
                          },
                          finish: function(e) {
                              for (var t, n = this.tryEntries.length - 1; 0 <= n; --n)
                                  if ((t = this.tryEntries[n]).finallyLoc === e) return this.complete(t.completion, t.afterLoc), d(t), C
                          },
                          catch: function(e) {
                              for (var t, n = this.tryEntries.length - 1; 0 <= n; --n)
                                  if ((t = this.tryEntries[n]).tryLoc === e) {
                                      var r = t.completion;
                                      if ("throw" === r.type) {
                                          var o = r.arg;
                                          d(t)
                                      }
                                      return o
                                  } throw new Error("illegal catch attempt")
                          },
                          delegateYield: function(e, t, n) {
                              return this.delegate = {
                                  iterator: f(e),
                                  resultName: t,
                                  nextLoc: n
                              }, "next" === this.method && (this.arg = void 0), C
                          }
                      }, e
                  }(e.exports);
                  try {
                      regeneratorRuntime = t
                  } catch (e) {
                      Function("r", "regeneratorRuntime = r")(t)
                  }
              }, function(e) {
                  function t(n, r) {
                      return e.exports = t = Object.setPrototypeOf || function(e, t) {
                          return e.__proto__ = t, e
                      }, t(n, r)
                  }
                  e.exports = t
              }, function(e, t, n) {
                  var r = n(10);
                  e.exports = function(e) {
                      if (Array.isArray(e)) return r(e)
                  }
              }, function(e) {
                  e.exports = function(e) {
                      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                  }
              }, function(e, t, n) {
                  var r = n(10);
                  e.exports = function(e, t) {
                      if (e) {
                          if ("string" == typeof e) return r(e, t);
                          var n = Object.prototype.toString.call(e).slice(8, -1);
                          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                      }
                  }
              }, function(e) {
                  e.exports = function() {
                      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }
              }, function() {}, function(t, n, r) {
                  "use strict";

                  function o() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }

                  function i() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }

                  function a() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }

                  function s(e) {
                      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                          if (Array.isArray(e) || (e = function(e, t) {
                                  if (e) {
                                      if ("string" == typeof e) return c(e, t);
                                      var n = Object.prototype.toString.call(e).slice(8, -1);
                                      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                                  }
                              }(e))) {
                              var t = 0,
                                  n = function() {};
                              return {
                                  s: n,
                                  n: function() {
                                      return t >= e.length ? {
                                          done: !0
                                      } : {
                                          done: !1,
                                          value: e[t++]
                                      }
                                  },
                                  e: function(e) {
                                      throw e
                                  },
                                  f: n
                              }
                          }
                          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                      }
                      var r, o, i = !0,
                          a = !1;
                      return {
                          s: function() {
                              r = e[Symbol.iterator]()
                          },
                          n: function() {
                              var e = r.next();
                              return i = e.done, e
                          },
                          e: function(e) {
                              a = !0, o = e
                          },
                          f: function() {
                              try {
                                  i || null == r.return || r.return()
                              } finally {
                                  if (a) throw o
                              }
                          }
                      }
                  }

                  function c(e, t) {
                      (null == t || t > e.length) && (t = e.length);
                      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                      return r
                  }

                  function l() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }

                  function u() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }

                  function d() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }

                  function p() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                      } catch (e) {
                          return !1
                      }
                  }
                  r.r(n), r.d(n, "App", (function() {
                      return Fe
                  }));
                  var f = r(3),
                      y = r.n(f),
                      v = r(7),
                      h = r.n(v),
                      m = r(4),
                      g = r.n(m),
                      b = r(1),
                      w = r.n(b),
                      j = r(5),
                      k = r.n(j),
                      P = r(6),
                      O = r.n(P),
                      C = r(2),
                      E = r.n(C),
                      S = r(0),
                      x = r.n(S),
                      L = r(11),
                      A = r.n(L),
                      R = r(9),
                      T = r.n(R),
                      _ = r(8),
                      M = r.n(_),
                      I = function(e, t) {
                          return "object" === M()(e) && null !== e && Object.prototype.hasOwnProperty.call(e, t)
                      },
                      N = function e(t, n, r) {
                          var o = this;
                          g()(this, e), x()(this, "moduleName", "Module"), x()(this, "core", !1), x()(this, "options", {}), x()(this, "setupOptions", (function() {
                              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                              if (o.options = e, I(o.core.options, "modules")) {
                                  var t = o.moduleName.toLowerCase();
                                  I(o.core.options.modules, t) && (o.options = T()(e || {}, o.core.options.modules[t]))
                              }
                          })), this.moduleName = t, this.core = n, this.setupOptions(r), console.log("Loaded Module ".concat(t))
                      },
                      D = {
                          enabled: !0
                      },
                      B = function(e) {
                          function t(e, r) {
                              var o;
                              return g()(this, t), o = n.call(this, e, r, D), x()(w()(o), "setupEventListeners", (function() {
                                  o.setupAdblockDetection()
                              })), x()(w()(o), "setupAdblockDetection", (function() {
                                  o.core.instance.on("adBlock", o.notify)
                              })), x()(w()(o), "notify", (function() {})), o.options.enabled && o.core.on("setup", o.setupEventListeners), o
                          }
                          k()(t, e);
                          var n = function(e) {
                              return function() {
                                  var t, n = E()(e);
                                  if (o()) {
                                      var r = E()(this).constructor;
                                      t = Reflect.construct(n, arguments, r)
                                  } else t = n.apply(this, arguments);
                                  return O()(this, t)
                              }
                          }(t);
                          return t
                      }(N),
                      q = r(12),
                      F = r.n(q),
                      J = "fairplay",
                      H = "playready",
                      V = "widevine",
                      U = -1,
                      W = 0,
                      G = 1,
                      K = 2,
                      Q = "warning",
                      z = {
                          enabled: !1,
                          licenseRequestInvocation: !1,
                          licenseResponseInvocation: !1
                      },
                      X = function(t) {
                          function n(e, t) {
                              var o;
                              return g()(this, n), o = r.call(this, e, t, z), x()(w()(o), "onSetupPlaylist", (function(e) {
                                  Array.isArray(e) && e.forEach((function(e) {
                                      return o.setPlaylistItem(e)
                                  }))
                              })), x()(w()(o), "setPlaylistItem", (function(e) {
                                  Array.isArray(e.sources) && e.sources.forEach((function(e) {
                                      if (e.drm) {
                                          var t = Object.keys(e.drm)[0],
                                              n = e.drm[t];
                                          switch (t) {
                                              case V:
                                              case J:
                                              case H:
                                                  o[t](n)
                                          }
                                      }
                                  }))
                              })), x()(w()(o), "widevine", (function(e) {
                                  var t = e;
                                  t.licenseRequestFilter = function() {
                                      var e = h()(y.a.mark((function e(r, i) {
                                          var a;
                                          return y.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      if (i.videoRobustness = "SW_SECURE_CRYPTO", i.audioRobustness = "SW_SECURE_CRYPTO", r.headers["Content-Type"] = "application/json", a = n.decodeMessage(new Uint8Array(r.body)), r.body = JSON.stringify({
                                                              getRawWidevineLicense: {
                                                                  releasePid: t.releasePid,
                                                                  widevineChallenge: a
                                                              }
                                                          }), !o.options.licenseRequestInvocation) {
                                                          e.next = 8;
                                                          break
                                                      }
                                                      return e.next = 8, o.options.licenseRequestInvocation({
                                                          drmProvider: V,
                                                          request: r,
                                                          source: t,
                                                          drmInfo: i
                                                      });
                                                  case 8:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })));
                                      return function() {
                                          return e.apply(this, arguments)
                                      }
                                  }(), t.licenseResponseFilter = function() {
                                      var e = h()(y.a.mark((function e(t) {
                                          return y.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      if (!o.options.licenseResponseInvocation) {
                                                          e.next = 3;
                                                          break
                                                      }
                                                      return e.next = 3, o.options.licenseResponseInvocation({
                                                          drmProvider: V,
                                                          response: t
                                                      });
                                                  case 3:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })));
                                      return function() {
                                          return e.apply(this, arguments)
                                      }
                                  }()
                              })), x()(w()(o), "fairplay", (function(e) {
                                  var t = null,
                                      r = e;
                                  r.licenseResponseType = "json", r.licenseRequestMessage = function(e) {
                                      t = n.base64EncodeUint8Array(e)
                                  }, r.extractContentId = function() {
                                      return r.releasePid
                                  }, r.licenseRequestFilter = function() {
                                      var e = h()(y.a.mark((function e(n) {
                                          return y.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      if (n.body = JSON.stringify({
                                                              getFairplayLicense: {
                                                                  releasePid: r.releasePid,
                                                                  spcMessage: t
                                                              }
                                                          }), !o.options.licenseRequestInvocation) {
                                                          e.next = 4;
                                                          break
                                                      }
                                                      return e.next = 4, o.options.licenseRequestInvocation({
                                                          drmProvider: J,
                                                          request: n,
                                                          source: r
                                                      });
                                                  case 4:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })));
                                      return function() {
                                          return e.apply(this, arguments)
                                      }
                                  }(), r.licenseResponseFilter = function() {
                                      var e = h()(y.a.mark((function e(t) {
                                          return y.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      if (t.data = n.arrayBufferFromBase64(t.data.getFairplayLicenseResponse.ckcResponse), !o.options.licenseResponseInvocation) {
                                                          e.next = 4;
                                                          break
                                                      }
                                                      return e.next = 4, o.options.licenseResponseInvocation({
                                                          drmProvider: J,
                                                          response: t
                                                      });
                                                  case 4:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })));
                                      return function() {
                                          return e.apply(this, arguments)
                                      }
                                  }(), r.licenseResponseMessage = function(e) {
                                      return new window.Blob([e], {
                                          type: "application/octet-binary"
                                      })
                                  }
                              })), x()(w()(o), "playready", (function(e) {
                                  var t = e;
                                  t.licenseRequestFilter = function() {
                                      var e = h()(y.a.mark((function e(n, r) {
                                          return y.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      if (!o.options.licenseRequestInvocation) {
                                                          e.next = 3;
                                                          break
                                                      }
                                                      return e.next = 3, o.options.licenseRequestInvocation({
                                                          drmProvider: H,
                                                          request: n,
                                                          source: t,
                                                          drmInfo: r
                                                      });
                                                  case 3:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })));
                                      return function() {
                                          return e.apply(this, arguments)
                                      }
                                  }(), t.licenseResponseFilter = function() {
                                      var e = h()(y.a.mark((function e(t) {
                                          return y.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      if (!o.options.licenseResponseInvocation) {
                                                          e.next = 3;
                                                          break
                                                      }
                                                      return e.next = 3, o.options.licenseResponseInvocation({
                                                          drmProvider: H,
                                                          response: t
                                                      });
                                                  case 3:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })));
                                      return function() {
                                          return e.apply(this, arguments)
                                      }
                                  }()
                              })), o.options.enabled && o.core.on("setupPlaylist", o.onSetupPlaylist), o
                          }
                          k()(n, t);
                          var r = function(e) {
                              return function() {
                                  var t, n = E()(e);
                                  if (i()) {
                                      var r = E()(this).constructor;
                                      t = Reflect.construct(n, arguments, r)
                                  } else t = n.apply(this, arguments);
                                  return O()(this, t)
                              }
                          }(n);
                          return F()(n, null, [{
                              key: "arrayBufferFromBase64",
                              value: function(e) {
                                  for (var t = window.atob(e.replace(/-/g, "+").replace(/_/g, "/")), n = new Uint8Array(t.length), r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
                                  return n
                              }
                          }, {
                              key: "decodeMessage",
                              value: function(e) {
                                  for (var t, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "", o = e, i = o.byteLength, a = i % 3, s = i - a, c = 0; c < s; c += 3) r += n[(16515072 & (t = o[c] << 16 | o[c + 1] << 8 | o[c + 2])) >> 18] + n[(258048 & t) >> 12] + n[(4032 & t) >> 6] + n[63 & t];
                                  return 1 == a ? r += n[(252 & (t = o[s])) >> 2] + n[(3 & t) << 4] + "==" : 2 == a && (r += n[(64512 & (t = o[s] << 8 | o[s + 1])) >> 10] + n[(1008 & t) >> 4] + n[(15 & t) << 2] + "="), r
                              }
                          }, {
                              key: "base64EncodeUint8Array",
                              value: function(t) {
                                  for (var n, r, o, i, a, s, c, l = Number.NaN, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = "", p = 0; p < t.length;) i = (n = t[p++]) >> 2, a = (3 & n) << 4 | (r = p < t.length ? t[p++] : l) >> 4, s = (15 & r) << 2 | (o = p < t.length ? t[p++] : l) >> 6, c = 63 & o, e(r) ? (s = 64, c = 64) : e(o) && (c = 64), d += u.charAt(i) + u.charAt(a) + u.charAt(s) + u.charAt(c);
                                  return d
                              }
                          }]), n
                      }(N),
                      Y = function(e, t, n, r) {
                          if ("string" != typeof e) return !1;
                          var o = document.createElement(e),
                              i = [];
                          return "string" == typeof t ? i.push(t) : Array.isArray(t) && (i = t), i.forEach((function(e) {
                              return o.classList.add(e)
                          })), "string" == typeof n ? o.innerText = n : r && o.appendChild(r), o
                      },
                      $ = new Proxy({
                          "generic.error": function() {
                              this.setHeader("Helaas kan de video niet worden afgespeeld"), this.setBody("\n        Mogelijk is deze niet meer beschikbaar, wordt de browser niet\n        ondersteund of kijk je vanuit het buitenland.")
                          },
                          "user.not.allowed": function() {
                              this.setHeader("Helaas kan de video niet worden afgespeeld"), this.setBody("\n        Mogelijk is deze niet meer beschikbaar, wordt de browser niet\n        ondersteund of kijk je vanuit het buitenland.")
                          },
                          playAttemptFailed: function() {},
                          cantPlayVideo: function() {
                              this.setHeader("Helaas kan de video niet worden afgespeeld"), this.setBody("\n        Mogelijk is deze niet meer beschikbaar, wordt de browser niet\n        ondersteund of kijk je vanuit het buitenland.")
                          },
                          protectedContent: function() {
                              this.setHeader("Helaas kan de video niet worden afgespeeld"), this.setBody("\n        Mogelijk is deze niet meer beschikbaar, wordt de browser niet\n        ondersteund of kijk je vanuit het buitenland.")
                          },
                          unsupportedBrowser: function() {
                              this.core.instance.load([]), this.setHeader("KIJK werkt niet in deze browser"), this.setBody("We ondersteunen sommige oudere internet-browsers niet meer.\n            Installeer de laatste versie van bijv. Google Chrome, Microsoft\n            Edge, Apple Safari of Mozilla Firefox en probeer het opnieuw.")
                          }
                      }, {
                          get: function(e, t) {
                              var n = e[t];
                              return function() {
                                  if (n) {
                                      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                      return n.apply(this, t)
                                  }
                                  return !1
                              }
                          }
                      }),
                      Z = {
                          "Cannot load M3U8": 232403,
                          "Error loading media": 241403
                      },
                      ee = r(13),
                      te = r.n(ee),
                      ne = function e(t) {
                          var n = this,
                              r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                              o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                          g()(this, e), x()(this, "modalOverlay", null), x()(this, "modal", null), x()(this, "setupElement", (function() {
                              n.removeElement(), n.modalOverlay = Y("div", ["jw-reset", "talpa-jw-modal-overlay"].concat(te()(n.classNames))), n.modal = Y("div", ["jw-reset", "talpa-jw-modal"]), n.modalOverlay.appendChild(n.modal), "string" == typeof n.html ? n.modal.innerHTML += n.html : "object" === M()(n.html) && n.modal.appendChild(n.html)
                          })), x()(this, "removeElement", (function() {
                              var e = n.core.getJwWrapper().querySelector(".talpa-jw-modal-overlay");
                              e && e.parentNode.removeChild(e)
                          })), x()(this, "attachElem", (function() {
                              n.core.getJwWrapper() && n.modalOverlay && n.core.getJwWrapper().appendChild(n.modalOverlay)
                          })), x()(this, "getModal", (function() {
                              return n.modal
                          })), x()(this, "render", (function() {
                              n.modalOverlay.classList.add("open"), n.core.instance && n.core.instance.pause()
                          })), x()(this, "reset", (function() {
                              var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                              n.modalOverlay.classList.remove("open"), e && n.core.instance.play()
                          })), this.core = t, this.html = r, this.classNames = o, this.setupElement(), this.attachElem()
                      },
                      re = "Setup Errors - Miscellaneous",
                      oe = "Setup Errors - Loading Javascript Components",
                      ie = "Setup Errors - Playlist Parsing",
                      ae = "Setup Errors - Empty Playlist",
                      se = "Player Errors - Miscellaneous",
                      ce = "Player Errors - Loading New Playlist",
                      le = "Player Errors - Playlist Item",
                      ue = "Player Errors - Loading Javascript Components",
                      de = "Player Errors - Media Playback Flash",
                      pe = "Player Errors - Media Playback HTML5",
                      fe = "Player Errors - Media Playback HLS.JS",
                      ye = "Player Errors - Media Playback Shaka",
                      ve = "Unknown jwplayer error code",
                      he = "Warning - playAttemptFailed",
                      me = "Warning - Loading Javascript Components",
                      ge = "Warning - Related",
                      be = "Warning - Captions",
                      we = "Warning - VR",
                      je = "Warning - Localization",
                      ke = "Warning - Media Playback HLS.JS",
                      Pe = "Warning - Casting",
                      Oe = "Unknown jwplayer warning",
                      Ce = {
                          enabled: !0
                      },
                      Ee = function(e) {
                          function t(e, r) {
                              var o;
                              return g()(this, t), o = n.call(this, e, r, Ce), x()(w()(o), "elem", !1), x()(w()(o), "handledKeys", ["playAttemptFailed", "cantPlayVideo", "protectedContent", "unsupportedBrowser"]), x()(w()(o), "onInit", (function() {
                                  o.setupElement()
                              })), x()(w()(o), "setupElement", (function() {
                                  o.elem = Y("div", ["jw-reset"]), o.elem.appendChild(Y("h1", [], "")), o.elem.appendChild(Y("p", [], ""))
                              })), x()(w()(o), "setupEventListeners", (function() {
                                  o.core.instance.on("ready", o.checkBrowserSupport), o.core.on("setPlaylistItem", (function() {
                                      o.modal && o.modal.reset()
                                  }))
                              })), x()(w()(o), "checkBrowserSupport", (function() {
                                  var e = o.core.instance.getEnvironment().Browser;
                                  (e.ie || e.msie) && !e.edge && o.core.emit("error", {
                                      type: "core",
                                      key: "unsupportedBrowser"
                                  })
                              })), x()(w()(o), "handleInfo", (function(e) {
                                  ! function(e) {
                                      var t = e.type,
                                          n = e.key;
                                      "error" === t && function(e) {
                                          return Object.entries(Z).some((function(t) {
                                              return e.includes(t[1])
                                          }))
                                      }([232403, 241403]) ? $["user.not.allowed"].call(w()(o)) : n && o.handledKeys.includes(n) ? $[n].call(w()(o)) : ("error" === t || "setupError" === t) && $["generic.error"].call(w()(o))
                                  }(e)
                              })), x()(w()(o), "notify", (function(e) {
                                  var t = e.type === Q; - 1 !== [230002, 330002, 334001].indexOf(e.code) || t || o.show(), o.handleInfo(e), o.notifyNewRelic(e)
                              })), x()(w()(o), "setHeader", (function(e) {
                                  o.elem.querySelector("h1").innerText = e
                              })), x()(w()(o), "setBody", (function(e) {
                                  o.elem.querySelector("p").innerText = e
                              })), x()(w()(o), "show", (function() {
                                  o.modal = new ne(o.core, o.elem, ["talpa-jw-error"]), o.modal.render()
                              })), x()(w()(o), "notifyNewRelic", (function(e) {
                                  if ("object" !== M()(window.newrelic)) return !1;
                                  var t = {
                                          error_code: e.code.toString(),
                                          error_type: e.type,
                                          error_key: e.key,
                                          error_details: null,
                                          error_response_code: !1,
                                          error_group: null,
                                          media_id: null,
                                          media_videotype: null
                                      },
                                      n = o.core.instance && o.core.instance.getPlaylistItem();
                                  return n && (t.media_id = n.metadata.media_id, t.media_videotype = n.metadata.media_videotype), t && I(e, "sourceError") && (I(e.sourceError, "details") && (t.error_details = e.sourceError.details), I(e.sourceError, "response") && I(e.sourceError.response, "code") && (t.error_response_code = e.sourceError.response.code.toString())), "error" === e.type ? t.error_group = o.getErrorGroup(e.code) : "warning" === e.type && (t.error_group = o.getWarningGroup(e.code)), window.newrelic.noticeError(e, t)
                              })), x()(w()(o), "getErrorGroup", (function(e) {
                                  switch (!0) {
                                      case 1e5 <= e && 100014 >= e:
                                          return re;
                                      case 101100 <= e && 104153 >= e:
                                          return oe;
                                      case 102e3 <= e && 102621 >= e:
                                          return ie;
                                      case 102630 <= e && 102700 >= e:
                                          return ae;
                                      case 200001 === e:
                                          return se;
                                      case 202e3 <= e && 202630 >= e:
                                          return ce;
                                      case 203e3 <= e && 203640 >= e:
                                          return le;
                                      case 204100 <= e && 204154 >= e:
                                          return ue;
                                      case 21e4 <= e && 214e3 >= e:
                                          return de;
                                      case 220001 <= e && 226599 >= e:
                                          return pe;
                                      case 23e4 <= e && 239e3 >= e:
                                          return fe;
                                      case 24e4 <= e && 34e4 >= e:
                                          return ye;
                                      default:
                                          return ve
                                  }
                              })), x()(w()(o), "getWarningGroup", (function(e) {
                                  switch (!0) {
                                      case 303200 <= e && 303230 >= e:
                                          return he;
                                      case 301121 <= e && 305107 >= e:
                                          return me;
                                      case 302001 <= e && 302611 >= e:
                                          return ge;
                                      case 306001 <= e && 306009 >= e:
                                          return be;
                                      case 307e3 <= e && 307012 >= e:
                                          return we;
                                      case 308e3 <= e && 308640 >= e:
                                          return je;
                                      case 33e4 <= e && 339e3 >= e:
                                          return ke;
                                      case 35e4 === e:
                                          return Pe;
                                      default:
                                          return Oe
                                  }
                              })), o.options.enabled && (o.core.on("init", o.onInit), o.core.on("setup", o.setupEventListeners), o.core.on("warning", o.notify), o.core.on("error", o.notify)), o
                          }
                          k()(t, e);
                          var n = function(e) {
                              return function() {
                                  var t, n = E()(e);
                                  if (a()) {
                                      var r = E()(this).constructor;
                                      t = Reflect.construct(n, arguments, r)
                                  } else t = n.apply(this, arguments);
                                  return O()(this, t)
                              }
                          }(t);
                          return t
                      }(N),
                      Se = function() {
                          return window !== window.parent ? function(e) {
                              var t = document.createElement("a");
                              return t.href = e, t
                          }(window.document.referrer || null).hostname : window.location.hostname
                      },
                      xe = function(e) {
                          var t, n = "".concat(e, "="),
                              r = s(decodeURIComponent(document.cookie).split(";"));
                          try {
                              for (r.s(); !(t = r.n()).done;) {
                                  for (var o = t.value;
                                      " " === o.charAt(0);) o = o.substring(1);
                                  if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                          return null
                      },
                      Le = {
                          enabled: !0
                      },
                      Ae = function(e) {
                          function t(e, r) {
                              var o;
                              return g()(this, t), o = n.call(this, e, r, Le), x()(w()(o), "customParams", {
                                  embedded_domain: Se()
                              }), x()(w()(o), "adSchedule", {}), x()(w()(o), "isEnabled", (function() {
                                  return o.options.enabled && o.core.options.jwplayer.config.advertising && "freewheel" === o.core.options.jwplayer.config.advertising.client && o.core.options.jwplayer.config.advertising.freewheel
                              })), x()(w()(o), "onInit", (function() {
                                  o.core.options.jwplayer.config.advertising.freewheel.custom = Object.assign(o.customParams, o.core.options.jwplayer.config.advertising.freewheel.custom), o.core.options.jwplayer.config.advertising.adSchedule = o.adSchedule
                              })), x()(w()(o), "setupEventListeners", (function() {
                                  o.core.instance.on("playlistItem", o.setupMetaData), o.setupConsent()
                              })), x()(w()(o), "setCustomParam", (function(e, t) {
                                  try {
                                      o.customParams[e] = t.toString()
                                  } catch (t) {
                                      delete o.customParams[e]
                                  }
                              })), x()(w()(o), "setupMetaData", (function(e) {
                                  e.item.fwassetid = e.item.metadata.media_id, o.setCustomParam("media_videotype", e.item.metadata.media_videotype), o.setCustomParam("vdur", e.item.metadata.media_duration), o.setCustomParam("cd_type", e.item.metadata.c_media_duration_type), o.setCustomParam("_fw_site_page", window.location.href)
                              })), x()(w()(o), "setupConsent", (function() {
                                  o.core.instance.on("adManager", o.setConsentParameters), o.core.instance.on("beforePlay", o.setConsentParameters)
                              })), x()(w()(o), "setConsentParameters", (function() {
                                  var e = o.getConsentString();
                                  o.setCustomParam("_fw_gdpr_consented_providers", ""), o.setCustomParam("_fw_gdpr_consent", e), o.setCustomParam("_fw_gdpr", 1), o.setCustomParam("talpa_consent", o.hasTalpaConsent() ? 1 : 0)
                              })), x()(w()(o), "getConsentedVendors", (function() {
                                  var e = xe("consentedvendors-v2");
                                  return e ? JSON.parse(e).consented_vendors_v2.join(",") : null
                              })), x()(w()(o), "getConsentString", (function() {
                                  return xe("euconsent-v2") || null
                              })), x()(w()(o), "hasTalpaConsent", (function() {
                                  var e = xe("consentedvendors-v2");
                                  if (e) {
                                      var t = JSON.parse(e).consented_purposes_v2;
                                      if (Array.isArray(t) && 0 < t.length) {
                                          var n = [2, 3, 4, 7, 9];
                                          if (t.filter((function(e) {
                                                  return -1 < n.indexOf(e)
                                              })).length === n.length) return !0
                                      }
                                  }
                                  return !1
                              })), o.isEnabled() && (o.core.on("init", o.onInit), o.core.on("setup", o.setupEventListeners)), o
                          }
                          k()(t, e);
                          var n = function(e) {
                              return function() {
                                  var t, n = E()(e);
                                  if (l()) {
                                      var r = E()(this).constructor;
                                      t = Reflect.construct(n, arguments, r)
                                  } else t = n.apply(this, arguments);
                                  return O()(this, t)
                              }
                          }(t);
                          return t
                      }(N),
                      Re = {
                          enabled: !0,
                          mode: "default"
                      },
                      Te = function(e) {
                          function t(e, r) {
                              var o;
                              return g()(this, t), o = n.call(this, e, r, Re), x()(w()(o), "modal", !1), x()(w()(o), "linkCopied", !1), x()(w()(o), "containerQuerySelector", (function(e) {
                                  return o.core.instance.getContainer().querySelector(e)
                              })), x()(w()(o), "setupEventListeners", (function() {
                                  o.core.instance.on("ready", (function() {
                                      return o.onReady()
                                  }))
                              })), x()(w()(o), "removeDefaultSharingOptions", (function() {
                                  var e = o.containerQuerySelector('.jw-settings-sharing[role="button"]'),
                                      t = o.containerQuerySelector('.jw-settings-content-item.jw-sharing-link[aria-label="email"]'),
                                      n = o.containerQuerySelector('.jw-settings-content-item.jw-sharing-copy[aria-label="link"]'),
                                      r = e.cloneNode(!0);
                                  t.parentNode.removeChild(t), n.parentNode.removeChild(n), e.parentNode.replaceChild(r, e), r.addEventListener("click", o.onModalOpen), o.core.instance.on("remove", (function() {
                                      return r.removeEventListener("click", o.onModalOpen)
                                  }))
                              })), x()(w()(o), "toggleCopiedAction", (function() {
                                  var e = o.containerQuerySelector("button.talpa-jw-modal-copy-button");
                                  e.innerText = "Kopieer" === e.innerText ? "Gekopieerd" : "Kopieer", e.classList.toggle("copied")
                              })), x()(w()(o), "createCopyLink", (function() {
                                  var e = Y("div", ["jw-reset", "talpa-jw-modal-copy-link-wrapper"]),
                                      t = Y("input", ["jw-reset", "talpa-jw-modal-copy-link-input"]),
                                      n = Y("button", ["jw-reset", "talpa-jw-modal-copy-button"], "Kopieer"),
                                      r = Y("h3", ["jw-reset", "talpa-jw-modal-copy-title"], "Kopieer link"),
                                      i = function() {
                                          o.linkCopied || (o.toggleCopiedAction(), t.select(), document.execCommand("copy"), o.linkCopied = !0)
                                      };
                                  return t.setAttribute("readonly", "true"), t.value = window.location.href, t.addEventListener("click", i), o.core.instance.on("remove", (function() {
                                      return t.removeEventListener("click", i)
                                  })), n.addEventListener("click", i), o.core.instance.on("remove", (function() {
                                      return n.removeEventListener("click", i)
                                  })), e.appendChild(r), e.appendChild(t), e.appendChild(n), e
                              })), x()(w()(o), "createHeader", (function() {
                                  var e = Y("div", ["jw-reset", "talpa-jw-modal-header"]),
                                      t = Y("h2", ["jw-reset", "talpa-jw-modal-title"], "Video delen"),
                                      n = o.containerQuerySelector(".jw-icon.jw-settings-close").cloneNode(!0);
                                  return n.addEventListener("click", o.onModalClose, !1), o.core.instance.on("remove", (function() {
                                      return n.removeEventListener("click", o.onModalClose)
                                  })), e.appendChild(t), e.appendChild(n), e
                              })), x()(w()(o), "createBody", (function() {
                                  var e = Y("div", ["jw-reset", "talpa-jw-modal-body"]),
                                      t = Y("div", ["jw-reset", "talpa-jw-modal-social-body"]),
                                      n = o.containerQuerySelector('button.jw-sharing-link[aria-label="facebook"]'),
                                      r = o.containerQuerySelector('button.jw-sharing-link[aria-label="twitter"]');
                                  return t.appendChild(r), t.appendChild(n), e.appendChild(t), e.appendChild(o.createCopyLink()), e
                              })), x()(w()(o), "setupModal", (function() {
                                  var e = o.containerQuerySelector(".jw-settings-submenu.jw-sharing-menu");
                                  e.appendChild(o.createHeader()), e.appendChild(o.createBody()), o.modal = new ne(o.core, e), o.containerQuerySelector(".talpa-jw-modal-overlay").addEventListener("click", o.handleOverlayClick), o.core.instance.on("remove", (function() {
                                      return o.containerQuerySelector(".talpa-jw-modal-overlay").removeEventListener("click", o.handleOverlayClick)
                                  })), o.removeDefaultSharingOptions()
                              })), x()(w()(o), "handleOverlayClick", (function(e) {
                                  e.target.classList.contains("talpa-jw-modal-overlay") && o.onModalClose()
                              })), x()(w()(o), "onModalOpen", (function() {
                                  o.containerQuerySelector(".jw-settings-submenu.jw-sharing-menu").classList.add("jw-settings-submenu-active"), document.body.classList.add("talpa-jw-modal-open"), o.modal.render()
                              })), x()(w()(o), "onModalClose", (function() {
                                  var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                                  o.containerQuerySelector(".jw-settings-submenu.jw-sharing-menu").classList.remove("jw-settings-submenu-active"), document.body.classList.remove("talpa-jw-modal-open"), o.modal.reset(e), o.linkCopied && (o.toggleCopiedAction(), o.linkCopied = !1)
                              })), x()(w()(o), "onReady", (function() {
                                  o.options.enabled ? "modal" === o.options.mode && (o.core.instance.on("firstFrame", (function() {
                                      return o.setupModal()
                                  })), o.core.instance.on("viewable", (function(e) {
                                      return o.onViewable(e)
                                  })), o.core.instance.on("playlistItem", (function() {
                                      return o.onPlaylistItem()
                                  }))) : o.core.instance.getContainer().querySelectorAll('div[aria-label="Share"').forEach((function(e) {
                                      e.parentNode.removeChild(e)
                                  }))
                              })), x()(w()(o), "onViewable", (function(e) {
                                  0 !== e.viewable || !o.core.instance || !o.core.instance.getContainer() || !o.core.instance.getContainer().querySelector(".talpa-jw-modal-overlay") || !o.core.instance.getContainer().querySelector(".talpa-jw-modal-overlay").offsetParent || o.onModalClose(!1)
                              })), x()(w()(o), "onPlaylistItem", (function() {
                                  !o.core.instance || !o.core.instance.getContainer() || !o.core.instance.getContainer().querySelector(".talpa-jw-modal-overlay") || !o.core.instance.getContainer().querySelector(".talpa-jw-modal-overlay").offsetParent || o.onModalClose()
                              })), o.options.enabled && o.core.on("setup", o.setupEventListeners), o
                          }
                          k()(t, e);
                          var n = function(e) {
                              return function() {
                                  var t, n = E()(e);
                                  if (u()) {
                                      var r = E()(this).constructor;
                                      t = Reflect.construct(n, arguments, r)
                                  } else t = n.apply(this, arguments);
                                  return O()(this, t)
                              }
                          }(t);
                          return t
                      }(N),
                      _e = r(14),
                      Me = r.n(_e),
                      Ie = window !== window.parent,
                      Ne = {
                          enabled: !1
                      },
                      De = {
                          AdblockDetect: B,
                          Drm: X,
                          ErrorReporting: Ee,
                          Freewheel: Ae,
                          Sharing: Te,
                          Playerjs: function(e) {
                              function t(e, r) {
                                  var o;
                                  return g()(this, t), o = n.call(this, e, r, Ne), x()(w()(o), "setupEventListeners", (function() {
                                      o.setupPlayerJs()
                                  })), x()(w()(o), "setupPlayerJs", (function() {
                                      if (Ie) {
                                          var e = new Me.a.JWPlayerAdapter(o.core.instance);
                                          o.core.instance.on("ready", (function() {
                                              return e.ready()
                                          }))
                                      }
                                  })), o.options.enabled && o.core.on("setup", o.setupEventListeners), o
                              }
                              k()(t, e);
                              var n = function(e) {
                                  return function() {
                                      var t, n = E()(e);
                                      if (d()) {
                                          var r = E()(this).constructor;
                                          t = Reflect.construct(n, arguments, r)
                                      } else t = n.apply(this, arguments);
                                      return O()(this, t)
                                  }
                              }(t);
                              return t
                          }(N)
                      },
                      Be = (r(23), {
                          jwplayer: {
                              id: "player",
                              version: "8.11.2",
                              debug: !1,
                              config: {
                                  sharing: {
                                      enabled: !0,
                                      mode: "default"
                                  },
                                  key: null,
                                  aspectratio: "16:9",
                                  autostart: !0,
                                  cast: {},
                                  displaytitle: !1,
                                  displaydescription: !1,
                                  height: "100%",
                                  mute: !1,
                                  nextUpDisplay: !1,
                                  playlist: [],
                                  related: [],
                                  stretching: "uniform",
                                  width: "100%",
                                  intl: {
                                      en: r(15),
                                      nl: r(16)
                                  }
                              }
                          }
                      }),
                      qe = [],
                      Fe = function(e) {
                          function t() {
                              var e, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                              return g()(this, t), e = n.call(this), x()(w()(e), "loadState", W), x()(w()(e), "instance", !1), x()(w()(e), "options", {
                                  jwplayer: {
                                      config: {
                                          playlist: []
                                      }
                                  },
                                  modules: {}
                              }), x()(w()(e), "setOptions", (function() {
                                  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                      n = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                                      r = e.options.jwplayer.config.playlist;
                                  e.options = T()(Be, t), e.options.jwplayer.config.playlist = r, n && e.init()
                              })), x()(w()(e), "init", h()(y.a.mark((function t() {
                                  return y.a.wrap((function(t) {
                                      for (;;) switch (t.prev = t.next) {
                                          case 0:
                                              return t.next = 2, e.load();
                                          case 2:
                                              e.loadState === K && document.getElementById(e.options.jwplayer.id) && I(window, "jwplayer") && (e.instance = jwplayer(e.options.jwplayer.id), e.emit("init"));
                                          case 3:
                                          case "end":
                                              return t.stop()
                                      }
                                  }), t)
                              })))), x()(w()(e), "load", h()(y.a.mark((function t() {
                                  return y.a.wrap((function(t) {
                                      for (;;) switch (t.prev = t.next) {
                                          case 0:
                                              if (e.loadState !== W) {
                                                  t.next = 15;
                                                  break
                                              }
                                              return e.loadState = G, t.prev = 2, e.loadModules(), t.next = 6, e._loadJwPlayer();
                                          case 6:
                                              jwplayer.debug = e.options.jwplayer.debug, e.loadState = K, e.emit("loaded"), t.next = 15;
                                              break;
                                          case 11:
                                              t.prev = 11, t.t0 = t.catch(2), e.loadState = U, e.emit("error", t.t0);
                                          case 15:
                                          case "end":
                                              return t.stop()
                                      }
                                  }), t, null, [
                                      [2, 11]
                                  ])
                              })))), x()(w()(e), "loadModules", (function() {
                                  qe = [], Object.keys(De).forEach((function(t) {
                                      qe.push(new De[t](t, w()(e)))
                                  }))
                              })), x()(w()(e), "_loadJwPlayer", h()(y.a.mark((function t() {
                                  return y.a.wrap((function(t) {
                                      for (;;) switch (t.prev = t.next) {
                                          case 0:
                                              return t.abrupt("return", new Promise((function(t, n) {
                                                  var r = document.createElement("script");
                                                  r.type = "text/javascript", r.src = "".concat("//ssl.p.jwpcdn.com/player/v/").concat(e.options.jwplayer.version, "/jwplayer.js"), r.onload = t, r.onerror = n, document.head.appendChild(r)
                                              })));
                                          case 1:
                                          case "end":
                                              return t.stop()
                                      }
                                  }), t)
                              })))), x()(w()(e), "setPlaylist", (function() {
                                  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                                      n = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                                      r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                                  e.options.jwplayer.config.playlist = t, e.options.jwplayer.config.playlistIndex = r, e.emit("setupPlaylist", t), n && e.setup()
                              })), x()(w()(e), "resetPlaylist", (function() {
                                  e.options.jwplayer.config.playlist = [], e.emit("resetPlaylist")
                              })), x()(w()(e), "setPlaylistItem", (function(t) {
                                  e.instance.playlistItem(t), e.emit("setPlaylistItem", t)
                              })), x()(w()(e), "setup", (function() {
                                  e.instance ? (e.instance.setup(e.options.jwplayer.config), e.emit("setup"), e.setupCoreEvents()) : e.once("init", e.setup)
                              })), x()(w()(e), "setupCoreEvents", (function() {
                                  e.instance.on("warning", (function(t) {
                                      return e.emit("warning", t)
                                  })), e.instance.on("setupError", (function(t) {
                                      return e.emit("error", t)
                                  })), e.instance.on("error", (function(t) {
                                      return e.emit("error", t)
                                  }))
                              })), x()(w()(e), "unload", (function() {
                                  e.instance.remove()
                              })), x()(w()(e), "getModule", (function(e) {
                                  return qe.filter((function(t) {
                                      return t.name === e
                                  }))[0] || !1
                              })), x()(w()(e), "getJwWrapper", (function() {
                                  return e.instance ? e.instance.getContainer() : null
                              })), e.setOptions(r, !1), e.resetPlaylist(), e
                          }
                          k()(t, e);
                          var n = function(e) {
                              return function() {
                                  var t, n = E()(e);
                                  if (p()) {
                                      var r = E()(this).constructor;
                                      t = Reflect.construct(n, arguments, r)
                                  } else t = n.apply(this, arguments);
                                  return O()(this, t)
                              }
                          }(t);
                          return t
                      }(A.a)
              }])
          }()
      },
      WcmU: function(e, t, n) {
          "use strict";
          n.d(t, "d", (function() {
              return u
          })), n.d(t, "b", (function() {
              return d
          })), n.d(t, "c", (function() {
              return p
          })), n.d(t, "a", (function() {
              return f
          }));
          var r = n("jT3O"),
              o = n("VX74");

          function i() {
              var e = Object(r.a)(["\n  mutation playerAction($nextState: String) {\n    playerAction(nextState: $nextState) @client\n  }\n"]);
              return i = function() {
                  return e
              }, e
          }

          function a() {
              var e = Object(r.a)(["\n  mutation playerState($currentState: String) {\n    playerState(currentState: $currentState) @client\n  }\n"]);
              return a = function() {
                  return e
              }, e
          }

          function s() {
              var e = Object(r.a)(["\n  query playerGuid {\n    playerGuid @client {\n      guid\n    }\n  }\n"]);
              return s = function() {
                  return e
              }, e
          }

          function c() {
              var e = Object(r.a)(["\n  query playerAction {\n    playerAction @client {\n      nextState\n    }\n  }\n"]);
              return c = function() {
                  return e
              }, e
          }

          function l() {
              var e = Object(r.a)(["\n  query playerState {\n    playerState @client {\n      currentState\n    }\n  }\n"]);
              return l = function() {
                  return e
              }, e
          }
          var u = Object(o.gql)(l()),
              d = Object(o.gql)(c()),
              p = (Object(o.gql)(s()), Object(o.gql)(a())),
              f = Object(o.gql)(i())
      },
      "lU/v": function(e, t, n) {
          "use strict";
          t.a = {
              azure: "#1da1f2",
              battleshipGrey: "rgba(110, 116, 120)",
              black: "#000000",
              nero: "#222222",
              black20: "rgba(0, 0, 0, 0.2)",
              black30: "rgba(0, 0, 0, 0.3)",
              black40: "rgba(0, 0, 0, 0.4)",
              black50: "rgba(0, 0, 0, 0.5)",
              black68: "rgba(0, 0, 0, 0.68)",
              black60: "rgba(0, 0, 0, 0.6)",
              black70: "rgba(0, 0, 0, 0.7)",
              black80: "rgba(0, 0, 0, 0.8)",
              nero40: "rgba(34, 34, 34, 0.4)",
              nero60: "rgba(34, 34, 34, 0.6)",
              nero80: "rgba(34, 34, 34, 0.8)",
              brownGrey: "#888888",
              grey: "#7f7f7f",
              butter: "#feff80",
              denimBlue: "#3b5998",
              greenishTeal: "#33c497",
              greyishBrown: "#444444",
              greyishBrown40: "rgba(68, 68, 68, 0.4)",
              khaki: "#cab53c",
              mediumBlue: "#2f7eb0",
              transparentMediumBlue: "rgba(47, 126, 176, 0)",
              paleLavender: "#eee1f8",
              royal: "#280f80",
              violet: "#ab13dd",
              white: "#ffffff",
              transparentBlack: "rgba(0, 0, 0, 0)",
              transparentNero: "rgba(34, 34, 34, 0)",
              transparent: "transparent",
              red: "#df1a0a",
              paleGrey: "#d2d2d2",
              darkWhite: "#e8e8e8",
              twitterBlue: "#1da1f2",
              facebookBlue: "#3b5998",
              brandsGrey: "#2e2e2e"
          }
      }
  }
]);