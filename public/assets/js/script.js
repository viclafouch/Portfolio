const sidebar = document.getElementById('sidebar');
const backBtn = document.getElementById('back');
var nav = document.getElementsByTagName("nav");
const burgerMenu = document.getElementById('menuburger');
const srcImg = '/public/assets/img/';
var tags = {YouTube:"#YTHelp", Chrome:"#HC"};
var openedMenu = false;
var waiting = false;
const tiempo = 3000;
var arrayBadge = ['rs', 'tc', 'cs'];

if (!openedMenu) {
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        sidebar.classList.add('opened');
        openedMenu = true;
    });
}

for (i=0; i<nav.length; i++) {
    nav[i].addEventListener("click", function() {
        if (openedMenu) {
            sidebar.classList.remove('opened');
            openedMenu = false;
        }
    });
}

function activePopup(popupID) {
    document.getElementById(popupID).classList.add('active');
}


function Typewriter() {
    var textOpts = ["LA BONNE FICHE D'AIDE", "LA MEILLEURE RÉPONSE !"],
        timeOut,
        len = textOpts.length,
        writer = document.getElementById('writer'),
        currentValue = 0,
        charVal = 0,
        cursor = '<span class="cursor">|</span>',
        lengths = [];

    for (var i = textOpts.length - 1; i >= 0; i--) {
        lengths.push(textOpts[i].length);
    }

    function typeAnimationIt() {
        var humanize = Math.round(Math.random() * (200 - 30)) + 30;
        timeOut = setTimeout(function() {
            charVal++;
            var txtLen = lengths[currentValue],
            type = textOpts[currentValue].substring(0, charVal);
            writer.innerHTML = type;
            typeAnimationIt();
            if (charVal == txtLen) {
                clearTimeout(timeOut);
                if (currentValue < len - 1) {
                    setTimeout(function() {
                        typeAnimationDelete();
                    }, 1000);
                }
            }
        }, humanize);
    }

    function typeAnimationDelete() {
        var humanize = Math.round(Math.random() * (200 - 30)) + 30;
        timeOut = setTimeout(function() {
            charVal--;
            var type = textOpts[currentValue].substring(0, charVal);
            writer.innerHTML = type;
            typeAnimationDelete();
            if (charVal == 0) {
                clearTimeout(timeOut);
                currentValue++;
                setTimeout(function() {
                    typeAnimationIt();
                }, 1000);
            }
        }, humanize);
    }

    typeAnimationIt();
};

var defaultDiacriticsRemovalMap = [
    {'base':'A', 'letters':'\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},
    {'base':'AA','letters':'\uA732'},
    {'base':'AE','letters':'\u00C6\u01FC\u01E2'},
    {'base':'AO','letters':'\uA734'},
    {'base':'AU','letters':'\uA736'},
    {'base':'AV','letters':'\uA738\uA73A'},
    {'base':'AY','letters':'\uA73C'},
    {'base':'B', 'letters':'\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'},
    {'base':'C', 'letters':'\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'},
    {'base':'D', 'letters':'\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'},
    {'base':'DZ','letters':'\u01F1\u01C4'},
    {'base':'Dz','letters':'\u01F2\u01C5'},
    {'base':'E', 'letters':'\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},
    {'base':'F', 'letters':'\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'},
    {'base':'G', 'letters':'\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'},
    {'base':'H', 'letters':'\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'},
    {'base':'I', 'letters':'\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},
    {'base':'J', 'letters':'\u004A\u24BF\uFF2A\u0134\u0248'},
    {'base':'K', 'letters':'\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'},
    {'base':'L', 'letters':'\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'},
    {'base':'LJ','letters':'\u01C7'},
    {'base':'Lj','letters':'\u01C8'},
    {'base':'M', 'letters':'\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'},
    {'base':'N', 'letters':'\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'},
    {'base':'NJ','letters':'\u01CA'},
    {'base':'Nj','letters':'\u01CB'},
    {'base':'O', 'letters':'\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'},
    {'base':'OI','letters':'\u01A2'},
    {'base':'OO','letters':'\uA74E'},
    {'base':'OU','letters':'\u0222'},
    {'base':'OE','letters':'\u008C\u0152'},
    {'base':'oe','letters':'\u009C\u0153'},
    {'base':'P', 'letters':'\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'},
    {'base':'Q', 'letters':'\u0051\u24C6\uFF31\uA756\uA758\u024A'},
    {'base':'R', 'letters':'\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'},
    {'base':'S', 'letters':'\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'},
    {'base':'T', 'letters':'\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'},
    {'base':'TZ','letters':'\uA728'},
    {'base':'U', 'letters':'\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},
    {'base':'V', 'letters':'\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'},
    {'base':'VY','letters':'\uA760'},
    {'base':'W', 'letters':'\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'},
    {'base':'X', 'letters':'\u0058\u24CD\uFF38\u1E8A\u1E8C'},
    {'base':'Y', 'letters':'\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'},
    {'base':'Z', 'letters':'\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'},
    {'base':'a', 'letters':'\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'},
    {'base':'aa','letters':'\uA733'},
    {'base':'ae','letters':'\u00E6\u01FD\u01E3'},
    {'base':'ao','letters':'\uA735'},
    {'base':'au','letters':'\uA737'},
    {'base':'av','letters':'\uA739\uA73B'},
    {'base':'ay','letters':'\uA73D'},
    {'base':'b', 'letters':'\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'},
    {'base':'c', 'letters':'\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'},
    {'base':'d', 'letters':'\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'},
    {'base':'dz','letters':'\u01F3\u01C6'},
    {'base':'e', 'letters':'\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},
    {'base':'f', 'letters':'\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'},
    {'base':'g', 'letters':'\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'},
    {'base':'h', 'letters':'\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'},
    {'base':'hv','letters':'\u0195'},
    {'base':'i', 'letters':'\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},
    {'base':'j', 'letters':'\u006A\u24D9\uFF4A\u0135\u01F0\u0249'},
    {'base':'k', 'letters':'\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'},
    {'base':'l', 'letters':'\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'},
    {'base':'lj','letters':'\u01C9'},
    {'base':'m', 'letters':'\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'},
    {'base':'n', 'letters':'\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'},
    {'base':'nj','letters':'\u01CC'},
    {'base':'o', 'letters':'\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'},
    {'base':'oi','letters':'\u01A3'},
    {'base':'ou','letters':'\u0223'},
    {'base':'oo','letters':'\uA74F'},
    {'base':'p','letters':'\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'},
    {'base':'q','letters':'\u0071\u24E0\uFF51\u024B\uA757\uA759'},
    {'base':'r','letters':'\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'},
    {'base':'s','letters':'\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'},
    {'base':'t','letters':'\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'},
    {'base':'tz','letters':'\uA729'},
    {'base':'u','letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'},
    {'base':'v','letters':'\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'},
    {'base':'vy','letters':'\uA761'},
    {'base':'w','letters':'\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'},
    {'base':'x','letters':'\u0078\u24E7\uFF58\u1E8B\u1E8D'},
    {'base':'y','letters':'\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'},
    {'base':'z','letters':'\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'}
];

var diacriticsMap = {};
for (var i=0; i < defaultDiacriticsRemovalMap .length; i++){
    var letters = defaultDiacriticsRemovalMap [i].letters;
    for (var j=0; j < letters.length ; j++){
        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap [i].base;
    }
}

function removeDiacritics (str) {
    return str.replace(/[^\u0000-\u007E]/g, function(a){ 
       return diacriticsMap[a] || a; 
    });
}

function displayErrorPopup(text) {
    document.getElementById('errorMessage').innerHTML = text;
    document.getElementById('errorMessage').style.color = "red";
    document.getElementById('popupError').classList.add('active');
}

function displayValidePopup(text) {
    document.getElementById('errorMessage').innerHTML = text;
    document.getElementById('errorMessage').style.color = "green";
    document.getElementById('popupError').classList.add('active');
    setTimeout(function() {
         document.getElementById('popupError').classList.remove('active');
    }, 4000);
}

function copy(button, url = null, title = null, plateforme = null, content = null, product = null) {
    if (!waiting) {
        waiting = true;
        var storage = document.createElement('div');
        storage.setAttribute("contentEditable", true);
        storage.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
        if (plateforme == 'forum') {
            var core = document.createElement('a');
            core.textContent = title;
            core.setAttribute('href', url);
        } else if (plateforme == 'hos') {
            var core = document.createElement('span');
            core.innerHTML = 'Avez-vous consulté le support ';
            var a = document.createElement('a');
            a.textContent = url;
            a.setAttribute('href', url);
            core.appendChild(a);
            core.innerHTML += tagProduct(product);
        }  else if (!plateforme && content) {
            var core = document.createElement('div');
            core.innerHTML = content;
        }
        storage.appendChild(core);
        document.getElementById('storageCopy').appendChild(storage);
        storage.focus();
        var successful = document.execCommand('copy');  
        if (successful) {
            var btn = button;
            btn.classList.add('success');
            setTimeout(function() {
                btn.classList.remove('success');
            }, tiempo);
            if (plateforme) {
                var http = new XMLHttpRequest();
                var action = window.location.href;
                http.open("POST", action, true);
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.send(encodeURI('url='+url));
            }
        }
        storage.remove();
        setTimeout(function() {
            waiting = false;
        }, tiempo);
    }
}

var tagProduct = function(product) {
    if (isNaN(product)) {
        var tag = tags[product];
    } else {
        var tag = tags[Object.keys(tags)[product]];
    }
    tag = ' '+tag+' #gHelp';
    return tag;
};

function hosAnswer(link, product) {
    const answer = '<p>Avez vous consulté le support <a href="'+link+'">'+link+'</a> ? '+tagProduct(product)+'</p>';
    return answer;
}

function forumAnswer(link, name) {
    const answer = '<p>Bonjour,</p>'+
        '<p><br/></p>'+
        '<p>Je vous invite à lire ceci : <a href="'+link+'" data-answer-link>'+name+'</a></p>'+
        '<p><br/></p>'+
        '<p>Tenez-nous au courant</p>'+
        '<p onclick="this.textContent = `&nbsp;`; this.removeAttribute(`onclick`);">[*PRENOM*]</p>'
    return answer;
}

function redirection(url) {
    window.open(url, '_blank');
}

var EPPZScrollTo = {
    documentVerticalScrollPosition: function() {
        if (self.pageYOffset) return self.pageYOffset;
        if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6 (standards mode).
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    },

    viewportHeight: function() { return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight; },
    documentHeight: function() { return (document.height !== undefined) ? document.height : document.body.offsetHeight; },
    documentMaximumScrollPosition: function() { return this.documentHeight() - this.viewportHeight(); },

    elementVerticalClientPositionById: function(id) {
        var element = document.getElementById(id);
        var rectangle = element.getBoundingClientRect();
        return rectangle.top;
    },
    scrollVerticalTickToPosition: function(currentPosition, targetPosition) {
        var filter = 0.2;
        var fps = 60;
        var difference = parseFloat(targetPosition) - parseFloat(currentPosition);
        var arrived = (Math.abs(difference) <= 0.5);
        if (arrived) {
            scrollTo(0.0, targetPosition);
            return;
        }
        currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);
        scrollTo(0.0, Math.round(currentPosition));
        setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+currentPosition+", "+targetPosition+")", (1000 / fps));
    },

    scrollVerticalToElementById: function(id, padding) {
        var element = document.getElementById(id);
        if (element == null) {
            console.warn('Cannot find element with id \''+id+'\'.');
            return;
        }            
        var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
        var currentPosition = this.documentVerticalScrollPosition();
        var maximumScrollPosition = this.documentMaximumScrollPosition();
        if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;
        this.scrollVerticalTickToPosition(currentPosition, targetPosition);
    }
};

if (document.getElementById('mouse')) {
    if (window.pageYOffset == 0) {
        var lastScrollTop = 0;
    } else {
        var lastScrollTop = window.pageYOffset;
    }
}

window.addEventListener('scroll', function(e) {
    if (document.getElementById('mouse')) {
        if (openedMenu) {
            sidebar.classList.remove('opened');
            openedMenu = false;
        }

        var st = window.pageYOffset;
        if (st > lastScrollTop){
            if (lastScrollTop == 0) {
                EPPZScrollTo.scrollVerticalToElementById('sd', 0);
            }
        }
        lastScrollTop = st;
    }
});

document.addEventListener('turbolinks:load', function() {

    if (document.getElementById('mouse')) {
        Typewriter();
        
        var h = document.querySelector('.home-screen').offsetHeight;
        document.getElementById('mouse').addEventListener('click', function() {
            EPPZScrollTo.scrollVerticalToElementById('sd', 0);
        });
    }
    if (document.querySelector('.card_title')) {

        var waypoint = new Waypoint({
            element: document.querySelector('.card_title'),
            handler: function() {
                this.element.classList.add('fadeInUp');
            },
            offset: '75%'
        });

        document.querySelectorAll('.card').forEach( function(element, index) {
            var waypoint = new Waypoint({
                element: element,
                handler: function() {
                    element.classList.add('fadeInUp');
                },
                offset: '70%'
            });
        });

        var scrollFlag = false;
        var waypoint = new Waypoint({
            element: document.querySelector('.separation'),
            handler: function() {
                if (!scrollFlag) {
                    if (document.getElementById('numCards')) {
                        var numAnim = new CountUp(document.getElementById('numCards'), 0, document.getElementById('numCards').getAttribute('data-countTo'));
                        numAnim.start();
                        var numAnim = new CountUp(document.getElementById('numExperts'), 0, document.getElementById('numExperts').getAttribute('data-countTo'));
                        numAnim.start();
                        var numAnim = new CountUp(document.getElementById('numAnswers'), 0, document.getElementById('numAnswers').getAttribute('data-countTo'));
                        numAnim.start();
                        scrollFlag = true;
                    }
                }
            },
            offset: '90%'
        });
    }

    document.querySelectorAll('.step').forEach( function(element, index) {
       var waypoint = new Waypoint({
            element: element,
            handler: function() {
                if (this.element.getAttribute('id') == 'shareAnswer') {
                    this.element.firstElementChild.classList.add('slideInRight');
                    this.element.lastElementChild.classList.add('slideInLeft');
                } else {
                    this.element.firstElementChild.classList.add('slideInLeft');
                    this.element.lastElementChild.classList.add('slideInRight');
                }
            },
            offset: '100%'
        });
    });

    if (document.querySelector('.editable')) {
        var autolist = new AutoList();
        var editor = new MediumEditor('.editable', {
            spellcheck: false,
            targetBlank: true,
            autoLink: false,
            imageDragging: false,
            toolbar: {
                diffLeft: 0,
                diffTop: -10,
                static: false,
                buttons: 
                [
                    { name: 'bold', contentDefault: '<i class="fa fa-bold" aria-hidden="true"></i>' },
                    { name: 'italic', contentDefault: '<i class="fa fa-italic" aria-hidden="true"></i>' },
                    { name: 'underline', contentDefault: '<i class="fa fa-underline" aria-hidden="true"></i>' },,
                    { name: 'strikethrough', contentDefault: '<i class="fa fa-strikethrough" aria-hidden="true"></i>' },
                    { name: 'anchor', contentDefault: '<i class="fa fa-link" aria-hidden="true"></i>' },
                    { name: 'unorderedlist'},
                    { name: 'removeFormat', contentDefault: '<i class="fa fa-eraser" aria-hidden="true"></i>' }
                ],
            },

            extensions: {
                'autolist': autolist
            },
            
            anchor: {
                customClassOption: false,
                customClassOptionText: 'Text',
                linkValidation: true,
                placeholderText: 'Insérez un lien de redirection',
                targetCheckbox: false,
                targetCheckboxText: 'Text'
            },

            paste: {
                forcePlainText: true,
                cleanPastedHTML: false,
                cleanReplacements: [],
                cleanAttrs: ['class', 'style', 'dir', 'id'],
                cleanTags: ['meta','script','style','img','object','iframe'],
                unwrapTags: ['span', 'a']
            },

            placeholder: {
                text: 'Votre texte ici...',
                hideOnClick: true
            },

            anchorPreview: {
                hideDelay: 0,
                previewValueSelector: 'a'
            },

            keyboardCommands: {
                commands: [
                    { command: 'bold', key: 'B', meta: true, shift: false, alt: false },
                    { command: 'italic', key: 'I', meta: true, shift: false, alt: false },
                    { command: 'underline', key: 'U', meta: true, shift: false, alt: false },
                    { command: 'anchor', key: 'K', meta: true, shift: false, alt: false },
                    { command: 'strikethrough', key: 'M', meta: true, shift: false, alt: false }
                ],
            },
        });
    }

    var main = document.getElementsByTagName('main');
    var popups = document.querySelectorAll('[data-to-popup]');
    var formAddCard = document.getElementById('addCardForm');

    document.getElementById('product').addEventListener("change", function() {
        var valueSelect = this.value;
        if (document.getElementById('categorie')) {
            document.getElementById('categorie').parentNode.parentNode.style.height = 0+'px';
        }
        document.querySelector('[data-disable]').setAttribute('disabled', 'disabled');
        var url = window.location.href;;
        var http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.responseType = 'json';
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200 && http.response != null) {
                var div = document.querySelector('[data-select-section]');
                var select = document.createElement('select');
                select.setAttribute('required', 'required');
                var option = document.createElement('option');
                option.textContent = 'Sélectionner une section';
                option.setAttribute('value', '');
                select.appendChild(option);
                select.setAttribute('id', 'section');
                select.setAttribute('name', 'section');
                div.innerHTML = '';
                div.appendChild(select);
                var response = http.response;
                response.forEach(function(el) {
                    var sectionOption = document.createElement('option');
                    sectionOption.textContent = el[0];
                    sectionOption.setAttribute('value', el[1]);
                    document.getElementById('section').appendChild(sectionOption);
                });
                div.parentNode.style.height = div.style.height;

                document.getElementById('section').addEventListener("change", function() {
                    option.setAttribute('disabled', 'disabled');
                    var valueSelect = this.value;
                    var url = window.location.href;;
                    var http = new XMLHttpRequest();
                    http.open("POST", url, true);
                    http.responseType = 'json';
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    http.onreadystatechange = function() {
                        if (http.readyState == 4 && http.status == 200 && http.response != null) {
                            var div = document.querySelector('[data-select-categorie]');
                            var select = document.createElement('select');
                            select.setAttribute('required', 'required');
                            var option = document.createElement('option');
                            option.textContent = 'Sélectionner une section';
                            option.setAttribute('value', '');
                            select.appendChild(option);
                            select.setAttribute('id', 'categorie');
                            select.setAttribute('name', 'categorie');
                            div.innerHTML = '';
                            div.appendChild(select);
                            var response = http.response;
                            response.forEach(function(el) {
                                var categorieOption = document.createElement('option');
                                categorieOption.textContent = el[0];
                                categorieOption.setAttribute('value', el[1]);
                                document.getElementById('categorie').appendChild(categorieOption);
                            });
                            div.parentNode.style.height = div.style.height;
                            document.getElementById('categorie').addEventListener("change", function() {
                                option.setAttribute('disabled', 'disabled');
                            });
                        };
                    }
                    http.send('selectSection='+valueSelect);
                });
            }
        }
        http.send('selectProduct='+valueSelect);
    });

    formAddCard.addEventListener('submit', function(e) {
        e.preventDefault();

        var http = new XMLHttpRequest();
        var url = window.location.href;
        var product = document.getElementById('product').value;
        var section = document.getElementById('section').value;
        var categorie = document.getElementById('categorie').value;
        var link = document.getElementById('link').value;
        var title = document.getElementById('title').value;

        http.responseType = 'json';
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                if (http.response != null) {
                    if (http.response.status == 'success') {
                        document.getElementById('link').value = '';
                        document.getElementById('title').value = '';
                        displayValidePopup('Fiche en attente de validation par Victor');
                    }
                } else {
                    displayErrorPopup('Une erreur est survenue');
                    return false;
                }
            }
        }
        http.send(encodeURI('product='+product+'&section='+section+'&categorie='+categorie+'&link='+link+'&title='+title));
    });

    var formAddUser = document.getElementById('addUserForm');

    var flagForm = true;
    formAddUser.addEventListener('submit', function(e) {
        e.preventDefault();
        if (flagForm) {
            flagForm = false;
            var pseudo = document.getElementById('pseudoForum');
            var badge = document.getElementById('badge');
            var avatar = document.getElementById('imgProfil');
            var bio = document.getElementById('bio');
            var twitter = document.getElementById('twitter');
            var linkedin = document.getElementById('linkedin');

            var array = [];
            document.querySelectorAll('.product-check').forEach( function(element, index) {
                if (element.checked) {
                    array.push(element.value);
                }
            });

            if (pseudo && badge && avatar && twitter && linkedin && bio) {
                pseudo = pseudo.value;
                badge = badge.value;
                twitter = twitter.value;
                linkedin = linkedin.value;
                bio = bio.value;

                if (array.length == 0) {
                    displayErrorPopup('Vous devez coché au moins 1 produit auquel vous participé.');
                    return false;
                } else {
                    var file = avatar.files[0];
                    if (file.size > 2097152) {
                        displayErrorPopup('La taille du fichier est trop élevée');
                        return false;
                    }
                    var fd = new FormData();
                    fd.append("afile", file);
                    fd.append('pseudo', pseudo);
                    fd.append('badge', badge);
                    fd.append('twitter', twitter);
                    fd.append('linkedin', linkedin);
                    fd.append('products', array);
                    fd.append('bio', bio);

                    var http = new XMLHttpRequest();
                    http.responseType = 'json';
                    http.open('POST', window.location.href, true);
                    http.onreadystatechange = function() {
                        console.log(http.response);
                        if (http.readyState == 4 && http.status == 200) {
                            if (http.response.error != null) {
                                displayErrorPopup(http.response.error);
                            } else if (http.response.success == true) {
                                formAddUser.reset();
                                document.getElementById('popupAddUser').classList.remove('active');
                                displayValidePopup('Le profil a bien été créé, vous pouvez dorénavant partager vos propres réponses standardisées !');
                                flagForm = true;
                            }
                        }
                    }
                    http.send(fd);
                }
            } else {
                return false;
            }
        }
    });

    popups.forEach( function(element, index) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            activePopup(this.getAttribute('data-to-popup'));
            sidebar.classList.remove('opened');
            openedMenu = false;
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            history.back();
        });
    }

    for(i=0; i<main.length; i++) {
        main[i].addEventListener("click", function() {
            if (openedMenu) {
                sidebar.classList.remove('opened');
                openedMenu = false;
            }
        });
    }

    var plateformeCreatAnswer, forumTextCustom, hosTextCustom;
    var flag = true;
    const plateformeBtn = document.querySelectorAll('[data-plateforme]');
    const popupOverlay = document.querySelectorAll('.popup_overlay');
    const actionAnswerSearchBtn = document.querySelectorAll('.actionAnswerSearch');
    const choiceCat = document.querySelectorAll('.choice_cat');
    const mediumEditorDiv = document.getElementById('creatAnswerEditor');
    const btnCopyCustom = document.getElementById('copyCustomAnswer');
    var yourName;
    var fichesResult;

    choiceCat.forEach(function(el) {
        el.addEventListener('click', function() {
            var id = this.getAttribute('data-cat-id');
            var http = new XMLHttpRequest();
            var url = window.location.href;

            http.open("POST", url, true);

            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            http.onreadystatechange = function(html) {
                if (http.readyState == 4 && http.status == 200) {
                    let content = html.currentTarget.responseText;
                    let storage = document.querySelector('.fiche_choices');
                    storage.innerHTML = content;
                    let h = storage.children[0].offsetHeight;
                    storage.style.height = h+'px';
                    document.getElementById('result_false').children[0].textContent = 'Selectionne une fiche';
                    fichesResult = document.querySelectorAll('.fiche_name');

                    fichesResult.forEach(function(el) {
                        el.addEventListener('click', function() {
                            let url = this.getAttribute('data-fiche-url');
                            let title = this.textContent;
                            document.getElementById('resultFicheName').textContent = title;
                            document.getElementById('resultFicheUrl').textContent = url;
                            document.getElementById('resultFicheUrl').setAttribute('href', url);
                            document.getElementById('result_false').style.display = 'none';
                            document.getElementById('result_true').removeAttribute('style');
                        });
                    });
                }
            }
            http.send(encodeURI('catID='+id));
        });
    });

    actionAnswerSearchBtn.forEach(function(el) {
        el.addEventListener('click', function() {
            var attrId = el.getAttribute('id');
            var url = document.getElementById('resultFicheUrl').getAttribute('href');
            var title = document.getElementById('resultFicheName').textContent;
            var popup = document.getElementById('popupCreatAnswer');
            if (attrId == 'redirection') {
                redirection(url);
            }
            else if (attrId == 'creatAnswer') {
                popup.children[1].children[1].setAttribute('data-url', url);
                popup.children[1].children[1].setAttribute('data-name', title);
                var product = popup.children[1].children[1].getAttribute('data-product');
                editor.setContent(forumAnswer(url, title));
                var textHos = document.createElement('div');
                textHos.innerHTML = hosAnswer(url, product);
                let countLetter = textHos.textContent.length;
                document.getElementById('countLetter').classList.add('active');
                document.getElementById('countLetter').textContent = countLetter;
                activePopup('popupCreatAnswer');
            } else if (attrId == 'copyLink') {
                copy(this, url, title, 'forum');
            }
        });
    });

    if (mediumEditorDiv) {
        mediumEditorDiv.addEventListener('keyup', function() {
            if (!flag) {
                document.getElementById('countLetter').textContent = this.textContent.length;
            }
        });
    }

    plateformeBtn.forEach(function(el) {
        el.addEventListener('click', function() {
            var plateforme = this.getAttribute('data-plateforme');
            var url = this.parentNode.getAttribute('data-url');
            var title = this.parentNode.getAttribute('data-name');
            var product = this.parentNode.getAttribute('data-product');
            document.querySelector('.plateforme_answer.active').classList.remove('active');
            this.classList.add('active');

            if (flag && plateforme == 'hos') {
                flag = false;
                document.getElementById('countLetter').classList.remove('active');
                forumTextCustom = editor.getContent();
                if (hosTextCustom == null || hosTextCustom == undefined) {
                    editor.setContent(hosAnswer(url, product));
                } else {
                    editor.setContent(hosTextCustom);
                }
            } else if (!flag && plateforme == 'forum') {
                flag = true;
                document.getElementById('countLetter').classList.add('active');
                hosTextCustom = editor.getContent();
                editor.setContent(forumTextCustom);
            }
        });
    });

    if (btnCopyCustom) {
        btnCopyCustom.addEventListener('click', function() {
            var core = editor.getContent();
            copy(this, false, false, false, core);
        });
    }

    popupOverlay.forEach(function(el) {
        el.addEventListener('click', function() {
            el.parentNode.classList.remove('active');
            if (!flag) {
                flag = true;
                hos = null;
            }
            hosTextCustom = null;
            for (var i = plateformeBtn.length - 1; i >= 0; i--) {
                if (plateformeBtn[i].getAttribute('data-plateforme') == 'forum') {
                    plateformeBtn[i].click();
                }
            }
        });
    });

    var nextPage = document.querySelectorAll('.next-page');
    var listPage = document.getElementById('containerPages');
    var answerCustom = document.getElementById('answerCustom');
    var pseudoCustom = document.getElementById('pseudonyme');
    var formAddAnswer = document.getElementById('addAnswer');
    var product, keyID; var pseudo = false;
    var page = 1;

    if (answerCustom && pseudoCustom) {
        pseudoCustom.addEventListener('keyup', function() {
            if (this.value.length > 2 && product) {
                var value = this.value;
                var http = new XMLHttpRequest();
                var url = window.location.href;
                http.open("POST", url, true);
                http.responseType = 'json';
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.onreadystatechange = function(html) {
                    if (http.readyState == 4 && http.status == 200) {
                        if (http.response) {
                            pseudoCustom.value = http.response.pseudo;
                            pseudo = true;
                            keyID = http.response.id;
                            pseudoCustom.style.borderColor = "#27ae60";
                            pseudoCustom.style.color = "#27ae60";
                            if (document.querySelector('.user-badge')) {
                                document.querySelector('.user-badge').remove();
                            }
                            var userBagde = document.createElement('img');
                            userBagde.setAttribute('src', srcImg+http.response.badge+'.png');
                            userBagde.setAttribute('class', 'user-badge');
                            document.querySelector('.inputAddAnswer').appendChild(userBagde);
                            answerCustom.focus();
                        } else {
                            pseudoCustom.removeAttribute('style');
                            if (document.querySelector('.user-badge')) {
                                document.querySelector('.user-badge').remove();
                                pseudo = false;
                            }
                        }
                    }
                }
                http.send(encodeURI('pseudonyme='+value+'&product='+product));
            } else {
                pseudoCustom.removeAttribute('style');
                if (document.querySelector('.user-badge')) {
                    document.querySelector('.user-badge').remove();
                }
                pseudo = false;
            }
        });

        answerCustom.addEventListener('keyup', function() {
            if (this.getAttribute('style')) {
                this.removeAttribute('style');
            }
        });
    }

    if (formAddAnswer) {
        formAddAnswer.addEventListener('submit', function(e) {
            e.preventDefault();
            if (answerCustom.textContent.trim().length == 0 || !pseudo) {
                if (answerCustom.textContent.trim().length == 0) {
                     answerCustom.style.borderColor = "#c0392b";
                }
                if (!pseudo) {
                     pseudoCustom.style.borderColor = "#c0392b";
                     displayErrorPopup('Pas de profil ? <span style="color: #15c; text-decoration: underline; cursor: pointer;" onclick="activePopup(`popupAddUser`);">Ajoutez-y le votre !</span>');
                }
                return false;
            } else {
                var http = new XMLHttpRequest();
                var url = window.location.href;
                http.open("POST", url, true);
                http.responseType = 'json';
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                var content = answerCustom.innerHTML.trim().replace('&', '%26');
                http.send(encodeURI('productID='+product+'&pseudonyme='+keyID+'&answerHTML='+content));
                http.onreadystatechange = function(html) {
                    if (http.readyState == 4 && http.status == 200) {
                        if (http.response.success) {
                            document.getElementById('btnSubmitCreatAnswers').classList.add('success');
                            if (document.querySelector('.user-badge')) {
                                document.querySelector('.user-badge').remove();
                            }
                            pseudoCustom.removeAttribute('style');
                            pseudo = false;
                            formAddAnswer.reset();
                            editor.resetContent();
                            displayValidePopup('Votre réponse a bien été enregistrée');
                            setTimeout(function() {
                                document.getElementById('btnSubmitCreatAnswers').classList.remove('success');
                            }, tiempo);
                        } else {    
                            displayErrorPopup('Une erreur est survenue, veuillez réessayer.');
                        }
                    }
                }
            }
        });
    }

    document.addEventListener('click', function(e) {
        if (e.target != document.querySelector('html')) {
            if (e.target.getAttribute('id') == 'copyAnswer' || e.target.parentElement.getAttribute('id') == 'copyAnswer') {
                var li = e.target.parentNode;
                while (li.tagName != 'LI') {
                    li = li.parentNode;
                }
                var answerText = li.childNodes[1].innerHTML;
                copy(document.getElementById('copyAnswer'), false, false, false, answerText);

            }
        }
    });

    if (document.querySelector('.backpage')) {
        document.querySelector('.backpage').addEventListener('click', function(e) {
            if (this.getAttribute('id') == 'previousPage') {
                e.preventDefault();
                e.stopPropagation();
                page = page - 1;
                var w = listPage.offsetWidth;
                var l = parseFloat(window.getComputedStyle(listPage,null).getPropertyValue('left'));
                listPage.style.left = l + w+'px';
                if (page == 1) {
                    this.removeAttribute('id');
                } else if (page == 2) {
                    document.querySelectorAll('[data-btn-action]').forEach( function(element, index) {
                        setTimeout(function() {
                            element.classList.add('hidden');
                            if (document.querySelector('.user-badge')) {
                                document.querySelector('.user-badge').remove();
                            }
                            pseudoCustom.removeAttribute('style');
                            pseudo = false;
                            formAddAnswer.reset();
                            editor.resetContent();
                        }, 500);
                    });
                }
                return false;
            }
            return false;
        });
    }

    nextPage.forEach(function(el) {
        el.addEventListener('click', function(e) {
            page = page + 1;
            e.preventDefault();
            if (this.classList.contains('action')) {
                var id = this.getAttribute('id');
                var li = document.querySelector('[data-btn-action="'+id+'"]');
                if (li) {
                    li.classList.remove('hidden');
                }
            }
            var w = listPage.offsetWidth;
            var l = parseFloat(window.getComputedStyle(listPage,null).getPropertyValue('left'));
            listPage.style.left = l - w+'px';

            if (!document.getElementById('previousPage')) {
                document.querySelector('.backpage').setAttribute('id', 'previousPage');
            }

            if (this.getAttribute('data-product')) {
                product = this.getAttribute('data-product');
                setTimeout(function(){
                    var http = new XMLHttpRequest();
                    var url = window.location.href;
                    http.open("POST", url, true);
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    http.send(encodeURI('product='+product));
                    http.onreadystatechange = function(html) {
                        if (http.readyState == 4 && http.status == 200) {
                            document.querySelector('.list-users').innerHTML = http.responseText;
                            document.querySelectorAll('.user').forEach(function(el) {
                                el.addEventListener('click', function() {
                                    var pseudoText = this.textContent.trim();
                                    document.getElementById('pseudoAnswer').textContent = pseudoText;
                                    var key = this.getAttribute('data-key');
                                    var http = new XMLHttpRequest();
                                    var url = window.location.href;
                                    http.open("POST", url, true);
                                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");                                        
                                    http.send(encodeURI('answerKey='+key+'&product='+product));
                                    http.onreadystatechange = function(html) {
                                        if (http.readyState == 4 && http.status == 200) {
                                            document.querySelector('.list-answers').innerHTML = http.response;

                                            var w = listPage.offsetWidth;
                                            var l = parseFloat(window.getComputedStyle(listPage,null).getPropertyValue('left'));
                                            listPage.style.left = l - w+'px';
                                            page = page + 1;
                                            document.querySelectorAll('.answer').forEach(function(el) {
                                                el.addEventListener('mouseenter', function() {
                                                    var xmlString = '<span class="copyAnswerIco" id="copyAnswer"><i class="fa fa-clipboard" aria-hidden="true"></i></span>';
                                                    var div = document.createElement('div');
                                                    div.innerHTML = xmlString;
                                                    this.appendChild(div.firstChild);
                                                });
                                                el.addEventListener('mouseleave', function() {
                                                    if (document.getElementById('copyAnswer')) {
                                                        document.getElementById('copyAnswer').remove();
                                                    }
                                                });
                                            });
                                        }
                                    }
                                });
                            });
                        }
                    }
                }, 500);
            }
        });
    });

    var popupUser = document.getElementById('expertView');
    var products = document.querySelectorAll('li.product');

    function showBio() {
        var users = document.querySelectorAll('.expert');
        users.forEach(function(element, index) {
            element.addEventListener('click', function(e) {
                e.preventDefault();

                var srcAvatar = this.getAttribute('data-image-profil');
                var pseudo = this.children[0].children[0].textContent;
                var twitter = this.getAttribute('data-twitter');
                var role = this.getAttribute('data-role');
                var srcBadge = this.getAttribute('data-badge');
                var linkedin = this.getAttribute('data-linkedin');
                var key = this.getAttribute('data-key');

                var avatarPopup = document.querySelector('.profilAvatar');
                var pseudoPopup = document.querySelector('.pseudo');
                var twitterPopup = document.querySelector('.twitter');
                var linkedinPopup = document.querySelector('.linkedin');

                for (var i = arrayBadge.length - 1; i >= 0; i--) {
                    if (avatarPopup.classList.contains(arrayBadge[i])) {
                        avatarPopup.classList.remove(arrayBadge[i]);
                    }
                }

                if (twitter) {
                    twitterPopup.style.display = 'inline-block';
                    twitterPopup.setAttribute('href', twitter);
                } else {
                    twitterPopup.style.display = 'none';
                }

                if (linkedin) {
                    linkedinPopup.style.display = 'inline-block';
                    linkedinPopup.setAttribute('href', linkedin);
                } else {
                    linkedinPopup.style.display = 'none';
                }

                avatarPopup.src = srcAvatar;
                avatarPopup.setAttribute('alt', 'Avatar - '+pseudo);
                avatarPopup.setAttribute('title', pseudo);
                avatarPopup.classList.add(role);
                avatarPopup.nextElementSibling.src = srcBadge;
                pseudoPopup.textContent = pseudo;
               

                var http = new XMLHttpRequest();
                var url = window.location.href;
                http.open("POST", url, true);
                http.responseType = 'json';
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.send(encodeURI('expertKey='+key));
                http.onreadystatechange = function(html) {
                    if (http.readyState == 4 && http.status == 200) {
                        var bio = http.response.bio;
                        if (bio) {
                            document.querySelector('.bio').style.display = 'block';
                            document.querySelector('.bio').textContent = bio;
                        } else {
                            document.querySelector('.bio').style.display = 'none';
                        }

                        var product = http.response.product;
                        var products;
                        document.querySelector('.list-product').innerHTML = '';
                        for (var i = product.length - 1; i >= 0; i--) {
                            var img = document.createElement('img');
                            img.classList.add('product-icon');
                            img.src = product[i];
                            img.setAttribute('alt', 'product-icon');
                            document.querySelector('.list-product').append(img);
                        }
                    }
                }
                popupUser.classList.add('active');
            }, false);
        });
    };

    showBio();

    var flagAjax = false;
    products.forEach(function(element, index) {
        element.addEventListener('click', function() {
            if (!flagAjax) {
                flagAjax = true;
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    var http = new XMLHttpRequest();
                    var url = window.location.href;
                    http.open("POST", url, true);
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");                             
                    http.send('product');
                    http.onreadystatechange = function(html) {
                        if (http.readyState == 4 && http.status == 200) {
                            document.querySelector('.list_experts').innerHTML = http.response;
                            var temps = 100;
                            document.querySelectorAll('.hide').forEach(function(el) {
                                setTimeout(function() {
                                    el.classList.remove('hide');
                                }, temps);
                                temps = temps + 100;
                            });
                            flagAjax = false;
                            showBio();
                        }
                    }
                } else {
                    products.forEach(function(element, index) {
                        element.classList.remove('active');
                    });
                    this.classList.add('active');

                    var http = new XMLHttpRequest();
                    var url = window.location.href;
                    http.open("POST", url, true);
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");                                 
                    http.onreadystatechange = function(html) {
                        if (http.readyState == 4 && http.status == 200) {
                            document.querySelector('.list_experts').innerHTML = http.response;
                            var temps = 100;
                            document.querySelectorAll('.hide').forEach(function(el) {
                                setTimeout(function() {
                                    el.classList.remove('hide');
                                }, temps);
                                temps = temps + 100;
                            });
                            flagAjax = false;
                            showBio();
                        }
                    }
                    http.send(encodeURI('product='+this.getAttribute('data-key')));
                }
            }
        }, false);
    });

    var actionsTable = document.querySelectorAll('.actionTable');

    actionsTable.forEach( function(element, index) {
        element.addEventListener('click', function(e) {
            var action = this.getAttribute('data-action');
            var row = this.parentNode.parentNode;
            var id = row.getAttribute('data-id');
            var http = new XMLHttpRequest();
            var url = window.location.href;
            http.open("POST", url, true);
            http.responseType = 'json';
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
            if (action == 'valideCard') {
                http.send(encodeURI('valideCard='+id));
            } else if (action == 'deleteCard') {
                http.send(encodeURI('deleteCard='+id));
            } else if (action == 'valideUser') {
                http.send(encodeURI('valideUser='+id));
            } else if (action == 'deleteUser') {
                http.send(encodeURI('deleteUser='+id));
            }                       
            http.onreadystatechange = function(html) {
                if (http.readyState == 4 && http.status == 200) {
                    if (http.response.success) {
                        row.classList.add('hide');
                        setTimeout(function(){
                            row.remove();
                        }, 1500);
                    } else {
                        displayErrorPopup('Une erreur est survenue');
                    }
                }
            }
        });
    });
});

document.addEventListener('turbolinks:before-visit', function() {
    if (sidebar.classList.contains('opened')) {
        sidebar.classList.remove('opened');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchText');
    const checkboxText = document.querySelectorAll(".checkbox-text");
    const cards = document.querySelectorAll('.card');
    const inputRadioSection = document.querySelectorAll('.checkbox-section');
    const inputPlateforme = document.querySelectorAll('[name=plateforme]');
    const btnActionSearch = document.querySelectorAll('.field-button-search');
    const labelRadio = document.querySelectorAll('.label-section');
    var filtre = false;
    var plateforme = 'forum';

    DOMTokenList.prototype.addMany = function(classes) {
        var array = classes.split(' ');
        for (var i = 0, length = array.length; i < length; i++) {
          this.add(array[i]);
        }
    }

    DOMTokenList.prototype.removeMany = function(classes) {
        var array = classes.split(' ');
        for (var i = 0, length = array.length; i < length; i++) {
          this.remove(array[i]);
        }
    }

    function statutBtn(elements, statut) {
        elements.forEach(function(elem) {
            elem.disabled = statut;
        });
    }

    var sectionID = function(elem) {
        var sectionID = elem.value;
        return sectionID;
    }

    function filter(elem) {
        filtre = true;
        var section = sectionID(elem);
        var result = document.querySelectorAll('[data-result]');
        result.forEach(function(elem) {
            if (elem.getAttribute('data-search-section') != section) {
                elem.classList.add("hidden");
            }
        });
    }

    function hiddenCard() {
        for (var i = cards.length - 1; i >= 0; i--) {
            cards[i].classList.add('hidden');
            cards[i].classList.remove('active');
            statutBtn(btnActionSearch, true);
        }
    }

    inputPlateforme.forEach(function(element) {
        element.addEventListener('click', function() {
            plateforme = this.value;
        });
    });

    checkboxText.forEach(function(element) {
        element.addEventListener('click', function (e) {
            var radio = document.getElementById(this.getAttribute('data-to-input'));

            if (radio.classList.contains('checkbox-section')) {
                statutBtn(btnActionSearch, true);
                var result = document.querySelectorAll('[data-result]');
                result.forEach(function(elem) {
                    elem.classList.removeMany("hidden active");
                });
                if (radio.checked) {
                    radio.checked = false
                    filtre = false;
                } else {
                    radio.checked = true;
                    filter(radio);
                }
            } else {
                plateforme = radio.value;
                radio.checked = true;
            }
        });
    });

    labelRadio.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var radio = document.getElementById(this.getAttribute('for'));
            if (radio.checked) {
                radio.checked = false;
                filtre = false;
            } else {
                radio.checked = true;
                filter(radio);
            }
        });
    });

    btnActionSearch.forEach(function(element) {
        element.addEventListener('click', function(e) {
            var cardActive = document.querySelector('.card.active');
            var url = cardActive.getAttribute('data-card-url');
            var title = cardActive.textContent.trim();
            if (element.getAttribute('id') == 'redirectionSearchBtn') {
                redirection(url);
            }
            else if (element.getAttribute('id') == 'copySearchBtn') {
                var product = document.querySelector('.list_card').getAttribute('data-product');
                copy(this, url, title, plateforme, null, product);
            }
        });
    });

    cards.forEach(function(element) {
        element.addEventListener('click', function(e) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
                statutBtn(btnActionSearch, true);
            } else {
                var cardActive = document.querySelector('.card.active');
                if (cardActive) {
                    cardActive.classList.remove('active');
                }
                element.classList.add('active');
                statutBtn(btnActionSearch, false);
            }
        });
    });

    if (searchInput) {
        var searchValue = removeDiacritics(searchInput.value);

        if (searchValue == '') {
            hiddenCard('.card');
        }
        else {
            cards.forEach(function(el) {
                var title = removeDiacritics(el.textContent.trim());
                if (title.search(new RegExp(searchValue, "i")) < 0) {
                    el.classList.add('hidden');
                    el.removeAttribute('data-result');
                } else {
                    el.classList.remove('hidden');
                    el.setAttribute('data-result', true);
                }
            });
        }

        searchInput.addEventListener('keyup', function() {
            searchValue = removeDiacritics(this.value);

            var cardActive = document.querySelector('.card.active');
            if (cardActive) { cardActive.classList.remove('active'); }
            statutBtn(btnActionSearch, true);

            if (searchValue.length > 2) {

                cards.forEach(function(el) {
                    var title = removeDiacritics(el.textContent.trim());
                    if (title.search(new RegExp(searchValue, "i")) < 0) {
                        el.classList.add('hidden');
                        el.removeAttribute('data-result');
                    } else {
                        el.classList.remove('hidden');
                        el.setAttribute('data-result', true);
                    }
                });

                if (filtre) {
                    var section = sectionID(document.querySelector('.checkbox-section:checked'))
                    let result = document.querySelectorAll('[data-result]');
                    result.forEach(function(elem) {
                        if (elem.getAttribute('data-search-section') != section) {
                            elem.classList.add('hidden');
                        }
                    });
                }

            } else {
                hiddenCard('.card');
                cards.forEach(function(elem) {
                    elem.removeAttribute('data-result');
                });
            }
        });
    }
});