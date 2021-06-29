// ==UserScript==
// @name         SB QuickResponses
// @namespace    https://www.nulled.to/user/4103370-m3gz/
// @version      1.0.0
// @updateURL    https://github.com/M3GZ-nulled/sbqr/sbqr.js
// @downloadURL  https://github.com/M3GZ-nulled/sbqr/sbqr.js
// @description  Quick Responses for Nulled.to by M3GZ
// @author       https://www.nulled.to/user/4103370-m3gz
// @match        https://www.nulled.to/
// @icon         https://i.imgur.com/eMYwwQe.png
// ==/UserScript==

var resp = {
    //you can edit these/add your own
    //like r<next_number>: 'something'
    r1:'yes pm @Brian he will give',
    r2:'Go rep4rep M3GZ',
    r3:'In case of an investigation by any federal entity or similar, I do not have any involvement with this group or with the people in it, I do not know how I am here, probably added by a thrid party, I do not support any actions by the members of this group.',
    r4:'https://www.youtube.com/watch?v=K7XHy8nppf4',
    r5:'https://www.nulled.to/topic/1284794-',
    r6:'test',
    //r7:'placeholder',
}

var replaceList="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}",smallCapsList="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ{|}",superscriptList="!\"#$%&'⁽⁾*⁺,⁻./⁰¹²³⁴⁵⁶⁷⁸⁹:;<⁼>?@ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁνᵂˣʸᶻ[\\]^_`ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᑫʳˢᵗᵘᵛʷˣʸᶻ{|}",upsideDownList="¡\"#$%℘,)(*+'-˙/0ƖᄅƐㄣϛ9ㄥ86:;>=<¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMXλZ]\\[^‾,ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz}|{",fullwidthList="！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝",leetList="!\"#$%&'()*+,-./0123456789:;<=>?@48CD3FG#IJK1MN0PQЯ57UVWXY2[\\]^_`48cd3fg#ijk1mn0pqЯ57uvwxy2{|}",thiccList="!\"#$%&'()*+,-./0123456789:;<=>?@卂乃匚刀乇下厶卄工丁长乚从ん口尸㔿尺丂丅凵リ山乂丫乙[\\]^_`卂乃匚刀乇下厶卄工丁长乚从ん口尸㔿尺丂丅凵リ山乂丫乙{|}",a=document.querySelector("#index_stats");for(var i in a.innerHTML="\n<div class=\"ipsBlockOuter\"><h3 class=\"maintitle\">Quick Responses by M3GZ</h3>\n<button style='width:104px;' id='AA'>ABCD</button>\n<button style='width:105px;' id='aa'>abcd</button>\n<button style='width:104px;' id='aA'>aBcD</button>\n\n<button style='width:77px;padding-left:25px;' id='pastafy'><i>Pasta</i></button>\n<button style='width:77px;padding-left:25px;' id='boldify'><b>Bold</b></button>\n<button style='width:79px;padding-left:25px;' id='delfy'><del>Strike</del></button>\n<button style='width:77px;padding-left:25px;' id='cody'><code>Code</code></button>\n\n<button style='width:104px;padding-left:25px;' id='smlcp'>SᴍᴀʟʟCAPS</button>\n<button style='width:105px;padding-left:25px;' id='sprscrpt'>ˢᵘᵖᵉʳˢᶜʳᶦᵖᵗ</button>\n<button style='width:104px;padding-left:20px;' id='invrt'>Iuʌǝɹʇǝp</button>\n\n<button style='width:104px;padding-left:25px;' id='wyd'>Ｗｉｄｅ</button>\n<button style='width:80px;padding-left:25px;' id='n00b'>1337</button>\n<button style='width:129px;padding-left:25px;' id='thivv'>丅卄工匚匚</button>\n\n<div id=\"qr-content\"></div></div>"+a.innerHTML,resp)document.querySelector("#qr-content").innerHTML+=`<a class="trow1" style="color:#fbfbfb;padding: 12px 16px;text-decoration: none;display: block;" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#fbfbfb'" onclick=document.getElementById("shoutbox-input").value="${resp[i].replaceAll(" ","&nbsp;")}">${resp[i]}</a>`;function sexify(e){var t=document.getElementById("shoutbox-input");function n(e){var n="";for(let i of t.value)n+=e[replaceList.indexOf(i)];return[thiccList,fullwidthList].includes(e)?n.replaceAll("undefined","　"):n.replaceAll("undefined"," ")}switch(e){case"aa":t.value=t.value.toLowerCase();break;case"AA":t.value=t.value.toUpperCase();break;case"aA":t.value=t.value.split("").map((e,t)=>t%2==0?e.toLowerCase():e.toUpperCase()).join("");break;case"i":t.value="_"+t.value+"_";break;case"b":t.value="__"+t.value+"__";break;case"d":t.value="~~"+t.value+"~~";break;case"c":t.value="`"+t.value+"`";break;case"sc":t.value=n(smallCapsList);break;case"ss":t.value=n(superscriptList);break;case"ud":t.value=n(upsideDownList);break;case"fw":t.value=n(fullwidthList);break;case"ee":t.value=n(leetList);break;case"cc":t.value=n(thiccList)}return null}var lwB=document.querySelector("#aa"),upB=document.querySelector("#AA"),AaB=document.querySelector("#aA"),iB=document.querySelector("#pastafy"),bB=document.querySelector("#boldify"),dB=document.querySelector("#delfy"),cB=document.querySelector("#cody"),scB=document.querySelector("#smlcp"),ssB=document.querySelector("#sprscrpt"),udB=document.querySelector("#invrt"),fwB=document.querySelector("#wyd"),eeB=document.querySelector("#n00b"),ccB=document.querySelector("#thivv");lwB&&lwB.addEventListener("click",function(){sexify("aa")},!1),upB&&upB.addEventListener("click",function(){sexify("AA")},!1),AaB&&AaB.addEventListener("click",function(){sexify("aA")},!1),iB&&iB.addEventListener("click",function(){sexify("i")},!1),bB&&bB.addEventListener("click",function(){sexify("b")},!1),dB&&dB.addEventListener("click",function(){sexify("d")},!1),cB&&cB.addEventListener("click",function(){sexify("c")},!1),scB&&scB.addEventListener("click",function(){sexify("sc")},!1),ssB&&ssB.addEventListener("click",function(){sexify("ss")},!1),udB&&udB.addEventListener("click",function(){sexify("ud")},!1),fwB&&fwB.addEventListener("click",function(){sexify("fw")},!1),eeB&&eeB.addEventListener("click",function(){sexify("ee")},!1),ccB&&ccB.addEventListener("click",function(){sexify("cc")},!1);
