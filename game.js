const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const N=n=>"₦"+Math.round(n).toLocaleString("en-NG");
const CAT=[
{id:"bed",n:"Single Bed",e:"🛏️",w:2,h:1,p:0,tag:{Rest:3},c:"Sleep"},
{id:"mat",n:"Foam Mattress",e:"🟪",w:1,h:1,p:6000,tag:{Rest:1},c:"Sleep"},
{id:"net",n:"Mosquito Net",e:"🕸️",w:1,h:1,p:1500,tag:{Rest:1},c:"Sleep"},
{id:"fan",n:"Standing Fan",e:"🌀",w:1,h:1,p:2200,tag:{Rest:1,Fun:1},c:"Comfort"},
{id:"chair",n:"Plastic Chair",e:"🪑",w:1,h:1,p:500,tag:{Social:1},c:"Comfort"},
{id:"sofa",n:"Sofa",e:"🛋️",w:2,h:1,p:45000,tag:{Social:3,Rest:1},c:"Comfort"},
{id:"tv",n:"Flat-screen TV",e:"📺",w:1,h:1,p:85000,tag:{Fun:3},c:"Comfort"},
{id:"desk",n:"Reading Desk",e:"🖥️",w:2,h:1,p:12000,tag:{Study:3},c:"Study"},
{id:"lamp",n:"Rechargeable Lamp",e:"💡",w:1,h:1,p:3500,tag:{Study:1},c:"Study"},
{id:"shelf",n:"Book Shelf",e:"📚",w:1,h:1,p:9000,tag:{Study:2},c:"Study"},
{id:"stove",n:"Gas Cooker",e:"🍳",w:1,h:1,p:18000,tag:{Food:3},c:"Kitchen"},
{id:"fridge",n:"Mini Fridge",e:"🧊",w:1,h:1,p:60000,tag:{Food:2,Rest:1},c:"Kitchen"},
{id:"table",n:"Dining Table",e:"🍽️",w:2,h:1,p:6600,tag:{Food:2,Social:1},c:"Kitchen"},
{id:"lsofa",n:"Leather Sofa",e:"🛋️",w:2,h:1,p:350000,tag:{Social:4,Rest:2},c:"Luxury"},
{id:"bigtv",n:"65-inch Smart TV",e:"📺",w:1,h:1,p:650000,tag:{Fun:5},c:"Luxury"},
{id:"ac",n:"Standing AC",e:"❄️",w:1,h:1,p:420000,tag:{Rest:4},c:"Luxury"},
{id:"console",n:"Gaming Console",e:"🎮",w:1,h:1,p:280000,tag:{Fun:4,Social:2},c:"Luxury"},
{id:"piano",n:"Grand Piano",e:"🎹",w:2,h:1,p:1800000,tag:{Fun:3,Social:3},c:"Luxury"},
{id:"pool",n:"Pool Table",e:"🎱",w:2,h:2,p:750000,tag:{Fun:4,Social:4},c:"Luxury"},
{id:"aqua",n:"Aquarium",e:"🐠",w:1,h:1,p:150000,tag:{Fun:2,Rest:2},c:"Luxury"},
{id:"bigfridge",n:"Fridge-Freezer",e:"🧊",w:1,h:1,p:520000,tag:{Food:4},c:"Luxury"},
{id:"inverter",n:"Solar Inverter Kit",e:"🔋",w:1,h:1,p:1200000,tag:{Rest:3,Study:2},c:"Luxury"},
{id:"cinema",n:"Home Cinema",e:"🎬",w:2,h:1,p:2500000,tag:{Fun:6,Social:3},c:"Luxury"},
{id:"mdining",n:"Marble Dining Set",e:"🍷",w:2,h:1,p:900000,tag:{Food:3,Social:3},c:"Luxury"},
{id:"vanity",n:"Vanity Table & Mirror",e:"🪞",w:2,h:1,p:45000,tag:{Social:3,Rest:1},c:"Style",g:"f"},
{id:"wardrobe",n:"Wardrobe",e:"🚪",w:1,h:1,p:30000,tag:{Social:2},c:"Style",g:"f"},
{id:"plantpot",n:"Indoor Plants",e:"🪴",w:1,h:1,p:8000,tag:{Rest:2,Fun:1},c:"Style",g:"f"},
{id:"bench",n:"Weight Bench",e:"🏋️",w:2,h:1,p:40000,tag:{Fun:2,Social:1},c:"Style",g:"m"},
{id:"gchair",n:"Gaming Chair Setup",e:"🎮",w:1,h:1,p:60000,tag:{Fun:3},c:"Style",g:"m"},
{id:"shoes",n:"Sneaker Rack",e:"👟",w:1,h:1,p:20000,tag:{Social:2},c:"Style",g:"m"}];
let RES=[[4,0],[0,5],[4,5]];let RW=3,RD=3,GW=6,GD=6; /* roommates' beds (2x1 each); yours is at 0,0 */
const BLD=[
{id:"boys",n:"Harmattan Hall",e:"🏠",x:10,y:24,col:"#e4572e",h:"m",d:"Boys' hostel. Girls may visit from 4pm to 10pm."},
{id:"girls",n:"Mariam Hall",e:"🏡",x:26,y:24,col:"#c14a7e",h:"f",d:"Girls' hostel. Boys are not allowed in."},
{id:"admin",n:"Admin Block",e:"🏛️",x:42,y:24,col:"#6b705c",d:"Registry and NIMC desk. Open 8am to 4pm. Bring patience."},
{id:"lecture",n:"Lecture Hall",e:"🎓",x:60,y:24,col:"#0f4c5c",d:"Lectures and exams are held here. Check your timetable in the Portal app."},
{id:"library",n:"Library",e:"📖",x:82,y:24,col:"#7a5c9e",d:"Quiet. Good for studying."},
{id:"cafe",n:"Cafeteria",e:"🍛",x:12,y:62,col:"#f2a900",d:"Jollof and chicken, daily.",a:[{l:"Jollof + chicken",c:1500,en:-25,m:30,msg:"You ate well."},{l:"Zobo only",c:300,en:-8,m:10,msg:"Cold zobo. Small relief."}]},
{id:"market",n:"Campus Market",e:"🛍️",x:32,y:62,col:"#5f9e6e",d:"Everybody is selling something. Pick a hustle.",a:[
{l:"Sell recharge cards",en:20,m:120,earn:[2000,5000],msg:"Sales were steady today."},
{l:"Laundry service",en:25,m:150,earn:[3000,6000],msg:"Hostel clothes, finally clean."},
{l:"Print & type assignments",en:12,m:90,earn:[2500,4500],req:"desk",msg:"Deadline season is good business."},
{l:"Cook & sell jollof",c:2000,en:28,m:150,earn:[5000,9000],req:"stove",msg:"The jollof sold out."},
{l:"Phone repair",en:18,m:120,earn:[3000,7000],minXp:20,msg:"Cracked screens, happy customers."},
{l:"Campus photography",en:15,m:120,earn:[2500,6000],hrs:[8,18],msg:"Everyone wants photos for their profile."},
{l:"Resell data bundles",c:3000,en:10,m:90,earn:[4500,7500],msg:"Data sells itself."},
{l:"Night suya stand",en:25,m:180,earn:[5000,9000],hrs:[18,22],req:"stove",msg:"Smoke, spice and a long queue."}]},
{id:"union",n:"Student Union",e:"🎤",x:54,y:62,col:"#c14a7e",d:"Where campus life happens.",a:[{l:"Hang out",en:10,m:90,mood:10,cha:2,msg:"You met people. Campus X noticed."}]},
{id:"lux1",n:"Lagoon Court",e:"🏢",x:73,y:62,col:"#2a9d8f",h:"x",d:"Luxury hostel for all students. Suites of four, 24h power."},
{id:"lux2",n:"Palmview Suites",e:"🏨",x:91,y:62,col:"#b08d57",h:"x",d:"Luxury hostel for all students. Sea-view suites of four, AC and generator."}];
const DOCS=[
{id:"admission",n:"Admission letter",e:"✉️",req:[],fee:0},
{id:"nin",n:"NIN slip",e:"🪪",req:[],fee:1000},
{id:"matric",n:"Matric number & school ID",e:"🎫",req:["admission","nin"],fee:5000},
{id:"reg",n:"Course registration",e:"📝",req:["matric"],fee:3000},
{id:"dl",n:"Driver's licence",e:"🚗",req:["nin"],fee:12000},
{id:"cac",n:"CAC certificate",e:"📜",req:["nin","matric"],fee:20000}];
let HOLD=null,PG=null;let S,cur="map",bld=null,cat="Sleep";
const def=(b,g,m,home)=>({bg:b,g,home,rm:10+Math.floor(Math.random()*40),money:m,docs:{admission:true},corrupt:0,sav:0,wx:"sun",cd:{},ch:{},hist:{},pd:0,en:80,t:480,day:1,xp:0,mood:70,items:home[0]=="l"?[{id:"bed",x:0,y:0},{id:"lsofa",x:3,y:4},{id:"bigtv",x:9,y:3},{id:"ac",x:9,y:1},{id:"aqua",x:5,y:0},{id:"bigfridge",x:9,y:5},{id:"mdining",x:6,y:6}]:[{id:"bed",x:0,y:0}],px:3,py:3,log:[],posts:["@amaka_o: Hostel water has run out AGAIN 😭","@Chidi_Eco: Who has the ECO 101 handout?","SCU Notice: Registration closes Friday."]});
const save=()=>{try{localStorage.setItem("scu_save_v2",JSON.stringify(S))}catch(e){}};
const load=()=>{try{return JSON.parse(localStorage.getItem("scu_save_v2"))}catch(e){return null}};
const toast=m=>{if(HOLD){HOLD.msg=m;return}const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("on"),2400)};
const hhmm=()=>{let h=Math.floor(S.t/60),m=S.t%60;return(h%12||12)+":"+String(m).padStart(2,"0")+(h<12?" AM":" PM")};
const adv=m=>{if(HOLD){HOLD.m+=m;return}S.t+=m;while(S.t>=1440){S.t-=1440;S.day++;newDay()}settle()};
function newDay(){S.wx=["sun","sun","cloud","rain"][Math.floor(Math.random()*4)];S.sav=Math.round(S.sav*1.005);bizDay();genFx();schoolDay();underDay();
 if(S.day%7==1){const a={NEPO:100000,NAPO:20000,LAPO:3000}[S.bg];S.money+=a;S.log.unshift("+"+N(a)+" · Family allowance");toast("Allowance arrived: "+N(a))}
 const P=["@Chidi_Eco: NEPA took light again. Who has a generator?","@amaka_o: Jollof at the cafe today was 10/10","SCU Notice: Hostel inspection this week.","@tunde_b: Rain is beating Coastville today ☔","@kelechi: Who took my extension box?"];post(P[Math.floor(Math.random()*P.length)])}
const netw=()=>S.money+S.sav+S.items.reduce((a,i)=>a+CAT.find(k=>k.id==i.id).p,0)+((CARS.find(x=>x.id==S.car)||{p:0}).p)+(S.bus?6500000:0)+bizValue();
const wxI=()=>{const h=Math.floor(S.t/60);if(h>=19||h<6)return S.wx=="rain"?"🌧️":"🌙";return{sun:"☀️",cloud:"⛅",rain:"🌧️"}[S.wx]};
function tint(){const h=Math.floor(S.t/60);let c="transparent";if(h>=20||h<5)c="rgba(10,25,70,.38)";else if(h<7)c="rgba(255,150,80,.14)";else if(h>=17)c="rgba(255,140,60,.16)";if(S.wx=="rain"&&c=="transparent")c="rgba(40,60,80,.18)";$("#tint").style.background=c;$("#rain").style.display=S.wx=="rain"?"block":"none"}
const post=p=>{S.posts.unshift(p);S.posts=S.posts.slice(0,12)};
const tx=(a,l)=>{S.money+=a;S.log.unshift((a>=0?"+":"−")+N(Math.abs(a))+" · "+l);S.log=S.log.slice(0,12)};
function hud(){if(S.visit&&cur=="room"&&(hr()>=22||hr()<6)){S.visit=null;toast("Visiting hours are over. You head out.");go("map");return}$("#clock").textContent=wxI()+" "+hhmm()+" · Day "+S.day;$("#where").textContent=cur=="map"?"📍 Coastville":S.in?"📍 "+BLD.find(x=>x.id==S.in).n:S.visit?"📍 "+STU.find(x=>x.id==S.visit).n+"'s room":"📍 "+BLD.find(x=>x.id==S.home).n+", Room "+S.rm;$("#cash").textContent=N(S.money);$("#bar b").style.width=S.en+"%";$("#ev").textContent=S.en+"%";tint();badge();save()}
/* map */
function drawMap2D(){let h='<div class="road" style="left:4%;right:4%;top:44%;height:5%"></div><div class="road" style="left:46%;width:4%;top:10%;bottom:20%"></div>';
 const hr=Math.floor(S.t/60);
 BLD.forEach(b=>{const n=(b.id.length*7+hr*3)%5;h+=`<div class="b" data-id="${b.id}" style="left:${b.x}%;top:${b.y}%"><div class="blk" style="background:${b.col}"></div><div class="bub">${b.h&&!hostelRule(b).ok?"🔒":b.e}</div><u>${n}</u><em>${b.n}</em></div>`});
 $("#mapin").innerHTML=h;
 $$(".b").forEach(el=>el.onclick=()=>travelTo(BLD.find(b=>b.id==el.dataset.id)))}
function openB(b){bld=b;const a=$("#act");let h=`<h3>${b.e} ${b.n}</h3><p>${b.d} Everyone here is inside. The outdoors is empty.</p><div class="opts">`;
 if(b.h){const r=hostelRule(b);if(!r.ok)h+=`<div style="width:100%;color:#b03a2e;font-weight:700;font-size:12px">${r.why}</div>`;else{if(b.id==S.home)h+=`<button class="opt" data-go="room">Go to my room</button>`;STU.filter(s=>s.home==b.id).forEach(s=>h+=`<button class="opt" data-st="${s.id}">Visit ${s.n}<small>${["LAPO","NAPO","NEPO"][s.w]} · Room ${s.rm}</small></button>`)}}
 if(b.id=="admin")DOCS.forEach(d=>{if(S.docs[d.id])return;const miss=d.req.filter(r=>!S.docs[r]);
 h+=miss.length?`<button class="opt x" data-m="1">${d.e} ${d.n}<small>Missing: ${miss.map(r=>DOCS.find(x=>x.id==r).n).join(", ")}</small></button>`:`<button class="opt" data-d="${d.id}">${d.e} Apply: ${d.n}<small>${N(d.fee)} · queue 1–4h</small></button><button class="opt" data-d="${d.id}" data-b="1">Settle the officer<small>${N(d.fee+2000)} · skip queue</small></button>`});
 if(b.id=="admin"&&DOCS.every(d=>S.docs[d.id]))h+=`<div style="width:100%;font-size:12px">All documents collected. You are a registered student.</div>`;
 if(b.id=="lecture")h+=lectureOpts();
 if(b.id=="library")h+=libOpts();
 if(b.id=="yard")h+=yardOpts();
 if(b.id=="union")h+=unionOpts();
 (b.a||[]).forEach((x,i)=>h+=`<button class="opt" data-i="${i}">${x.l}<small>${x.c?N(x.c)+" · ":""}${x.earn?"earn "+N(x.earn[0])+"–"+N(x.earn[1])+" · ":""}⚡${x.en>0?"−"+x.en:"+"+(-x.en)} · ${x.m}min${x.req?" · needs "+CAT.find(k=>k.id==x.req).n:""}${x.minXp?" · XP "+x.minXp:""}${x.hrs?" · "+clk(x.hrs[0]*60)+"–"+clk(x.hrs[1]*60):""}</small></button>`);
 a.innerHTML=h+`<button class="opt x" data-go="close">Close</button></div>`;a.classList.add("on");
 a.onclick=e=>{const t=e.target.closest("button");if(!t)return;if(t.dataset.go=="room"){a.classList.remove("on");S.in=null;S.visit=null;go("room")}else if(t.dataset.go=="close")a.classList.remove("on");else if(t.dataset.m)toast("Bring the missing documents first.");else if(t.dataset.d)applyDoc(DOCS.find(x=>x.id==t.dataset.d),!!t.dataset.b);else if(t.dataset.cl)attendClass(+t.dataset.cl);else if(t.dataset.exm)sitExam(+t.dataset.exm);else if(t.dataset.sc)studyCourse(+t.dataset.sc);else if(t.dataset.ug)ug(t.dataset.ug,t.dataset.v);else if(t.dataset.yb)ybAct(t.dataset.yb,t.dataset.v);else if(t.dataset.st)enterVisit(t.dataset.st);else if(t.dataset.v)visit(b);else doAct(b,b.a[+t.dataset.i])}}
const hr=()=>Math.floor(S.t/60);
function hostelRule(b){const h=hr();if(b.id==S.home)return{ok:true};
 if(b.h=="f"&&S.g=="m")return{ok:false,why:"Boys are not allowed in the girls' hostel."};
 if(b.h=="m"&&S.g=="f"&&(h<16||h>=22))return{ok:false,why:"Girls may visit the boys' hostel from 4pm to 10pm only."};
 return{ok:true}}
function visit(b){const h=hr();if(h>=22||h<6)return toast("It is late. Go to your own room.");if(S.en<5)return toast("Too tired.");
 S.en-=5;adv(60);S.mood=Math.min(100,S.mood+8);
 post(b.h=="m"&&S.g=="f"?"@you was spotted at "+b.n+" 👀":"@you stopped by "+b.n+".");
 toast(b.h=="m"&&S.g=="f"&&hr()>=21?"Leave soon. Visiting ends at 10pm.":"You caught up with people at "+b.n+".");
 hud();drawMap();$("#act").classList.remove("on")}
function applyDoc(d,br){const h=hr();if(h<8||h>=16)return toast("Admin Block is closed. Open 8am to 4pm.");
 const fee=d.fee+(br?2000:0);if(S.money<fee)return toast("Not enough money for the fee.");if(S.en<8)return toast("Too tired to queue.");
 S.en-=8;
 if(!br){const q=60+Math.floor(Math.random()*4)*60;adv(q);if(Math.random()<.25){hud();drawMap();return toast("After "+q/60+"h the officer says: system is down. Come back tomorrow.")}}
 else{adv(15);S.corrupt=(S.corrupt||0)+1;post("Rumour: someone 'settled' an officer at the Admin Block 👀")}
 tx(-fee,d.n);S.docs[d.id]=true;ev("Collected "+d.n);S.xp+=5;toast(d.e+" You collected your "+d.n+".");hud();drawMap();$("#act").classList.remove("on")}
function doAct(b,x){const h=Math.floor(S.t/60);
 if(h>=22||h<6)return toast("Campus is quiet. Go home and sleep.");
 if(["lecture","library"].includes(b.id)&&h>=16)return toast(b.n+" is closed. Try tomorrow.");
 if(b.id=="lecture"&&!S.docs.reg)return toast("You are not registered for any course. See the Admin Block.");
 if(b.id=="library"&&!S.docs.matric)return toast("The library gate needs a school ID. See the Admin Block.");
 if(x.req&&!S.items.some(i=>i.id==x.req))return toast("You need a "+CAT.find(k=>k.id==x.req).n+" in your room.");
 if(x.minXp&&S.xp<x.minXp)return toast("You need more skill first (XP "+x.minXp+").");
 if(x.hrs&&(h<x.hrs[0]||h>=x.hrs[1]))return toast("Not the right time. Open "+clk(x.hrs[0]*60)+" to "+clk(x.hrs[1]*60)+".");
 if(x.en>0&&S.en<x.en)return toast("Too tired. Eat or rest first.");
 if(x.c&&S.money<x.c)return toast("Not enough money.");
 if(x.c)tx(-x.c,b.n);S.en=Math.max(0,Math.min(100,S.en-x.en));adv(x.m);
 if(x.gym)S.gym+=x.gym;if(x.cha)S.cha=Math.min(100,S.cha+x.cha);if(x.xp)S.xp+=x.xp;if(x.mood)S.mood=Math.min(100,S.mood+x.mood);
 if(x.earn){const g=x.earn[0]+Math.floor(Math.random()*(x.earn[1]-x.earn[0]));tx(S.wx=="rain"?Math.round(g*.7):g,x.l);if(S.wx=="rain")toast("Rain kept buyers away. Earnings cut.")}
 if(b.id=="union")post("@you was seen at the Student Union 👀");
 toast(x.msg);hud();drawMap();$("#act").classList.remove("on")}
/* room */
const tags=()=>{const o={};RI().forEach(i=>{const c=CAT.find(k=>k.id==i.id);for(const k in c.tag)o[k]=(o[k]||0)+c.tag[k]});return o};
function fits(x,y,w,h,ign,L){L=L||S.items;if(x<0||y<0||x+w>GW||y+h>GD)return false;if(RES.some(r=>x<r[0]+2&&x+w>r[0]&&y<r[1]+1&&y+h>r[1]))return false;return!L.some(i=>{if(i===ign)return false;const c=CAT.find(k=>k.id==i.id);return x<i.x+c.w&&x+w>i.x&&y<i.y+c.h&&y+h>i.y})}
const RI=()=>S.in?[]:S.visit?vItems():S.items;
/* ===== 3D room (Three.js): upright furniture, first-person + top view, solid walls ===== */
let GL=null;const P={x:0,z:0};
const MODES=["top","tp","fp"],MN={top:"🔭 Top view",tp:"🎥 Third person",fp:"👁️ First person"};
const V={yaw:0,pitch:0,mode:"top",jx:0,jy:0,tgt:null,run:false,last:0,w:0,exitOn:false};
const em=()=>$("#shop").classList.contains("on")||MOVE.on?"top":V.mode;
const camLabel=()=>{$("#camb").textContent=MN[V.mode]};
function nearBed(){const b=S.items.find(i=>i.id=="bed");return b&&Math.hypot(P.x-(b.x+1-RW),P.z-(b.y+.5-RD))<2.4}
const blocked=(x,z)=>{const r=.22;if(Math.abs(x)>RW-r||Math.abs(z)>RD-r)return true;
 if(RES.some(b=>x>b[0]-RW-r&&x<b[0]+2-RW+r&&z>b[1]-RD-r&&z<b[1]+1-RD+r))return true;
 if(GL&&GL.spots&&GL.spots.some(q=>Math.hypot(x-q[0],z-q[1])<.5))return true;
 if(S.in&&IB.some(b=>x>b[0]-r&&x<b[2]+r&&z>b[1]-r&&z<b[3]+r))return true;
 return RI().some(i=>{if(i.id=="mat")return false;const c=CAT.find(k=>k.id==i.id),x0=i.x-RW,x1=i.x+c.w-RW,z0=i.y-RD,z1=i.y+c.h-RD;return x>x0-r&&x<x1+r&&z>z0-r&&z<z1+r})};
function unstuck(){if(!blocked(P.x,P.z))return;for(let r=.3;r<4;r+=.3)for(let a=0;a<12;a++){const x=P.x+Math.cos(a/12*6.283)*r,z=P.z+Math.sin(a/12*6.283)*r;if(!blocked(x,z)){P.x=x;P.z=z;return}}P.x=0;P.z=0}
const MATS={};const mat=c=>MATS[c]||(MATS[c]=new THREE.MeshLambertMaterial({color:c}));
const box=(w,h,d,c,x,y,z,o)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),o?new THREE.MeshLambertMaterial({color:c,transparent:true,opacity:o}):mat(c));m.position.set(x,y+h/2,z);return m};
const MOD={
bed:()=>[box(2,.25,1,0x6b4a2f,0,0,0),box(1.9,.22,.92,0x5b2a86,.02,.25,0),box(.4,.12,.7,0xf1ead8,-.7,.47,0),box(.08,.7,1,0x4a3320,-.98,0,0)],
mat:()=>[box(.9,.15,.9,0x6a3f9e,0,0,0)],
net:()=>[box(.9,1.8,.9,0xffffff,0,0,0,.22)],
fan:()=>[box(.4,.05,.4,0x333333,0,0,0),box(.06,1.1,.06,0x999999,0,.05,0),box(.5,.5,.1,0x6cc3e6,0,1.1,0)],
chair:()=>[box(.5,.08,.5,0xd33a3a,0,.45,0),...[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].map(q=>box(.06,.45,.06,0xb02a2a,q[0],0,q[1])),box(.5,.5,.06,0xd33a3a,0,.53,-.22)],
sofa:()=>[box(1.9,.4,.9,0x232323,0,0,0),box(1.9,.55,.22,0x2d2d2d,0,.4,-.34),box(.2,.3,.9,0x2d2d2d,-.85,.4,0),box(.2,.3,.9,0x2d2d2d,.85,.4,0)],
tv:()=>[box(.9,.5,.5,0xc9a97b,0,0,0),box(.9,.55,.06,0x1b2b3a,0,.5,0)],
desk:()=>[box(1.9,.08,.8,0xd9b88a,0,.7,0),box(.08,.7,.7,0xb89868,-.9,0,0),box(.08,.7,.7,0xb89868,.9,0,0),box(.4,.03,.3,0x888888,0,.78,0),box(.4,.3,.03,0x222222,0,.8,-.1)],
lamp:()=>[box(.3,.03,.3,0x333333,0,0,0),box(.04,1.3,.04,0xbbbbbb,0,.03,0),box(.3,.28,.3,0xfff0c0,0,1.3,0)],
shelf:()=>[box(.05,1.5,.4,0xc9a97b,-.4,0,0),box(.05,1.5,.4,0xc9a97b,.4,0,0),...[.05,.5,1,1.45].map(y=>box(.8,.04,.4,0xc9a97b,0,y,0)),box(.1,.28,.2,0xe4572e,-.2,.54,0),box(.1,.28,.2,0x0f4c5c,0,.54,0),box(.1,.28,.2,0xf2a900,.2,1.04,0)],
stove:()=>[box(.8,.8,.7,0xf0f0f0,0,0,0),box(.6,.03,.5,0x222222,0,.8,0),box(.15,.02,.15,0x888888,-.12,.83,.05),box(.15,.02,.15,0x888888,.12,.83,.05)],
fridge:()=>[box(.8,1,.7,0xf4f6f8,0,0,0),box(.04,.3,.04,0x7aa6c2,.3,.45,.36)],
table:()=>[box(1.8,.08,.8,0xc9a97b,0,.7,0),...[[-.8,-.3],[.8,-.3],[-.8,.3],[.8,.3]].map(q=>box(.08,.7,.08,0x8b6b43,q[0],0,q[1])),box(.2,.04,.2,0xffffff,-.3,.78,0),box(.2,.04,.2,0xffffff,.3,.78,0)]};
/* ===== People: roommates (4 per room), students to visit, luxury rooms ===== */
const MALE=["Kelechi","Chinedu","Segun","Musa","Femi","Uche","Dayo","Yusuf"],FEMALE=["Amaka","Aisha","Chioma","Tola","Hauwa","Ifeoma","Bisi","Kemi"],TRS=["Studious","Loud","Neat","Night owl","Funny","Quiet"];
const SHIRTS=[0xe4572e,0x2a9d8f,0xf2a900,0x5b2a86,0x3a6ea5,0xb23a48],SKINS=[0x8d5524,0x6b3f1f,0xa86b3c,0x5a3417];
const hsh=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))%100003;return x};
const STU=[
{id:"tunde",n:"Tunde",g:"m",home:"boys",w:1,tr:"Studious",rm:12},{id:"emeka",n:"Emeka",g:"m",home:"boys",w:0,tr:"Loud",rm:7},{id:"ibrahim",n:"Ibrahim",g:"m",home:"boys",w:1,tr:"Neat",rm:21},
{id:"zainab",n:"Zainab",g:"f",home:"girls",w:1,tr:"Neat",rm:9},{id:"ngozi",n:"Ngozi",g:"f",home:"girls",w:0,tr:"Night owl",rm:15},{id:"folake",n:"Folake",g:"f",home:"girls",w:1,tr:"Loud",rm:30},
{id:"chidera",n:"Chidera",g:"m",home:"lux1",w:2,tr:"Big spender",rm:101},{id:"tobi",n:"Tobi",g:"f",home:"lux1",w:2,tr:"Gamer",rm:102},
{id:"adaeze",n:"Adaeze",g:"f",home:"lux2",w:2,tr:"Pianist",rm:201},{id:"bayo",n:"Bayo",g:"m",home:"lux2",w:2,tr:"Gamer",rm:202}];
const TIER=[
[{id:"bed",x:0,y:0},{id:"chair",x:2,y:2},{id:"fan",x:5,y:2},{id:"net",x:3,y:0}],
[{id:"bed",x:0,y:0},{id:"desk",x:2,y:2},{id:"chair",x:2,y:3},{id:"lamp",x:4,y:2},{id:"shelf",x:5,y:3},{id:"tv",x:5,y:1},{id:"fan",x:3,y:0},{id:"fridge",x:0,y:3}],
[{id:"bed",x:0,y:0},{id:"lsofa",x:2,y:3},{id:"bigtv",x:5,y:2},{id:"ac",x:5,y:1},{id:"aqua",x:4,y:3},{id:"bigfridge",x:5,y:4}]];
function stItems(st){const L=TIER[st.w].map(i=>({...i}));if(st.w==2){if(st.tr=="Gamer")L.push({id:"console",x:3,y:1});if(st.tr=="Pianist")L.push({id:"piano",x:2,y:5});if(st.tr=="Big spender")L.push({id:"pool",x:0,y:2});L.push({id:"cinema",x:3,y:0},{id:"mdining",x:6,y:5},{id:"inverter",x:9,y:3},{id:"bigfridge",x:9,y:5})}return L}
const SIT={};const vItems=()=>SIT[S.visit]||(SIT[S.visit]=stItems(STU.find(x=>x.id==S.visit)));
function genMates(){const pool=(S.g=="m"?MALE:FEMALE).slice().sort(()=>Math.random()-.5);S.mates=[0,1,2].map(k=>({n:pool[k],tr:TRS[Math.floor(Math.random()*TRS.length)]}))}
function matesFor(st){const pool=(st.g=="m"?MALE:FEMALE).filter(n=>n!=st.n);return[0,1,2].map(k=>({n:pool[(hsh(st.id)+k*3)%pool.length],tr:TRS[(hsh(st.id)+k)%TRS.length]}))}
const SPOT=j=>{const r=RES[j];return[r[0]+1-RW,(r[1]==0?r[1]+1.5:r[1]-.5)-RD]};
function persons(){if(S.in)return inPersons();if(S.visit){const st=STU.find(x=>x.id==S.visit),L=[{n:st.n,tr:st.tr,key:"st:"+st.id,g:st.g,host:true,spot:[1-RW,1.5-RD]}];matesFor(st).forEach((m,j)=>L.push({n:m.n,tr:m.tr,key:"rm:"+m.n,g:st.g,j,spot:SPOT(j)}));return L}
 return S.mates.map((m,j)=>({n:m.n,tr:m.tr,key:"rm:"+m.n,g:S.g,j,spot:SPOT(j)}))}
const presentM=j=>{const h=Math.floor(S.t/60);return h>=22||h<6||(S.day*5+j*3+h)%3!=0};
const bedM=c=>[box(2,.25,1,0x6b4a2f,0,0,0),box(1.9,.22,.92,c,.02,.25,0),box(.4,.12,.7,0xf1ead8,-.7,.47,0),box(.08,.7,1,0x4a3320,-.98,0,0)];
function fixItems(){const keep=[],lost=[];S.items.forEach(i=>{const c=CAT.find(k=>k.id==i.id);if(!c)return;if(i.id=="bed"){keep.push(i);return}if(fits(i.x,i.y,c.w,c.h,null,keep)){keep.push(i);return}
 let ok=false;for(let y=0;y<GD&&!ok;y++)for(let x=0;x<GW&&!ok;x++)if(fits(x,y,c.w,c.h,null,keep)){keep.push({id:i.id,x,y});ok=true}
 if(!ok){S.money+=Math.round(c.p/2);lost.push(c.n)}});if(!keep.some(i=>i.id=="bed"))keep.unshift({id:"bed",x:0,y:0});S.items=keep;if(lost.length)toast("No space for "+lost.join(", ")+". Sold at half price.")}
function enterVisit(id){const st=STU.find(x=>x.id==id),b=BLD.find(x=>x.id==st.home),r=hostelRule(b),h=hr();if(!r.ok)return toast(r.why);if(h>=22||h<6)return toast("It is late. No visitors now.");if(S.en<5)return toast("Too tired to go visiting.");
 S.en-=5;adv(15);S.visit=id;S.in=null;S.loc=st.home;$("#act").classList.remove("on");toast("You knock on "+st.n+"'s door.");go("room")}
const LINES=["Did you hear NEPA took light again?","You borrowed my charger. I saw.","Let's go to the Union on Friday.","I need a new phone. Mine is dying.","Lectures are killing me.","Mama Put has fresh amala today."];
const EX={tv:[3,90,6,3,"You watched the match together."],game:[5,90,8,4,"You played until your thumbs hurt."],piano:[5,60,6,3,"They played. You clapped."],pool:[6,60,7,4,"You lost at pool. Again."]};
function openPerson(p){const a=$("#act"),rel=S.rel[p.key]||0,ow=S.owed[p.key]||0,ids=RI().map(i=>i.id);
 let h=`<h3>🧑🏾 ${p.n}</h3><p>${p.tr} · Friendship ${rel}/100${ow?" · you owe "+N(ow):""}</p><div class="opts"><button class="opt" data-pa="chat">Chat<small>⚡−5 · 30min</small></button><button class="opt" data-pa="study">Study together<small>⚡−8 · 60min</small></button><button class="opt" data-pa="food">Share food<small>${N(500)}</small></button><button class="opt" data-pa="borrow">Borrow ${N(3000)}<small>needs friendship 15+</small></button>`;
 if(ow)h+=`<button class="opt" data-pa="repay">Repay ${N(Math.min(ow,3000))}</button>`;
 const ex=(k,L,l)=>L.some(x=>ids.includes(x))?`<button class="opt" data-pa="${k}">${l}<small>⚡−${EX[k][0]} · ${EX[k][1]}min</small></button>`:"";
 h+=ex("tv",["tv","bigtv","cinema"],"Watch TV together")+ex("game",["console"],"Play console")+ex("piano",["piano"],"Hear the piano")+ex("pool",["pool"],"Play pool")+(p.yb?`<button class="opt" data-pa="yask">Ask for update<small>${N(1000)} airtime</small></button><button class="opt" data-pa="ydrink">Buy a drink<small>${N(2000)}</small></button>`:"");
 a.innerHTML=h+`<button class="opt x" data-pa="x">Close</button></div>`;a.classList.add("on");
 a.onclick=e=>{const t=e.target.closest("button");if(!t)return;if(t.dataset.pa=="x")a.classList.remove("on");else personAct(p,t.dataset.pa)}}
function personAct(p,k){if(k=="yask"||k=="ydrink")return ybAct(k=="yask"?"ask":"drink",p.yb);const rel=v=>{S.rel[p.key]=Math.max(0,Math.min(100,(S.rel[p.key]||0)+v))},need=e=>{if(S.en<e){toast("Too tired.");return false}return true};let msg="";
 if(k=="chat"){if(!need(5))return;S.en-=5;adv(30);S.mood=Math.min(100,S.mood+4);S.cha=Math.min(100,S.cha+1);rel(3);msg=p.n+": "+LINES[Math.floor(Math.random()*LINES.length)]}
 else if(k=="study"){if(!need(8))return;S.en-=8;adv(60);S.xp+=(p.tr=="Studious"?7:4);if(S.prep){let w=0;S.prep.forEach((v,i)=>{if(v<S.prep[w])w=i});S.prep[w]=Math.min(100,S.prep[w]+4)}rel(2);msg="You studied with "+p.n+"."}
 else if(k=="food"){if(S.money<500)return toast("Not enough money.");tx(-500,"Shared food with "+p.n);rel(5);S.mood=Math.min(100,S.mood+2);msg=p.n+" loved that."}
 else if(k=="borrow"){if((S.rel[p.key]||0)<15)return toast(p.n+": we are not that close yet.");if(S.bd[p.key]==S.day)return toast("You already borrowed today.");S.bd[p.key]=S.day;tx(3000,"Borrowed from "+p.n);S.owed[p.key]=(S.owed[p.key]||0)+3000;rel(-4);msg="You borrowed ₦3,000. Remember to pay it back."}
 else if(k=="repay"){const x=Math.min(S.owed[p.key]||0,3000);if(S.money<x)return toast("Not enough money.");tx(-x,"Repaid "+p.n);S.owed[p.key]-=x;rel(3);msg="Debt reduced."}
 else if(EX[k]){const e=EX[k];if(!need(e[0]))return;S.en-=e[0];adv(e[1]);S.mood=Math.min(100,S.mood+e[2]);rel(e[3]);msg=e[4]}
 toast(msg);hud();$("#act").classList.remove("on")}
function spawnFix(){const lv=(S.visit||"")+"|"+(S.in||"");if(V.lv!==lv){V.lv=lv;if(S.visit||S.in){P.x=RW-.8;P.z=.3;V.yaw=Math.PI/2}else{P.x=(S.px==null?3:S.px)-RW;P.z=(S.py==null?3:S.py)-RD}}
 if(S.visit||S.in){MOVE.on=false;MOVE.sel=null}$("#mvb").textContent=MOVE.on?"✋ Done moving":"✋ Move furniture";
 const away=!!(S.visit||S.in);$("#sleep").style.display=$("#buy").style.display=$("#mvb").style.display=away?"none":"";$("#menub").style.display=S.in?"":"none";$("#exit").textContent=S.visit?"🚪 Leave":"🚪 Outside";V.exitOn=null}
const signText=()=>S.in?BLD.find(x=>x.id==S.in).n+" · inside":S.visit?STU.find(x=>x.id==S.visit).n+"'s room · "+STU.find(x=>x.id==S.visit).rm:BLD.find(b=>b.id==S.home).n+" · Room "+S.rm;
Object.assign(MOD,{
lsofa:()=>[box(1.9,.45,.9,0x6b3a1e,0,0,0),box(1.9,.6,.22,0x7d4627,0,.45,-.34),box(.2,.35,.9,0x7d4627,-.85,.45,0),box(.2,.35,.9,0x7d4627,.85,.45,0),box(.5,.1,.5,0xf2d9b0,-.4,.45,.05),box(.5,.1,.5,0xf2d9b0,.4,.45,.05)],
bigtv:()=>[box(.5,.04,.3,0x222222,0,0,0),box(.06,.3,.06,0x222222,0,.04,0),box(.98,.6,.05,0x0b0b0b,0,.34,0),box(.9,.5,.02,0x3b82f6,0,.39,.035)],
ac:()=>[box(.5,1.6,.4,0xf3f3f3,0,0,0),box(.4,.12,.02,0x333333,0,1.3,.21),box(.3,.3,.02,0xbfd9e6,0,.5,.21)],
console:()=>[box(.9,.4,.45,0x2a2a2a,0,0,0),box(.8,.5,.04,0x111111,0,.4,-.05),box(.7,.4,.02,0xe4572e,0,.45,-.025),box(.25,.06,.2,0x1a1a1a,0,.4,.1)],
piano:()=>[box(1.9,.7,.8,0x111111,0,0,0),box(1.8,.05,.3,0xffffff,0,.7,.22),box(1.9,.55,.1,0x111111,0,.7,-.35),box(.12,.7,.12,0x111111,-.8,0,.38),box(.12,.7,.12,0x111111,.8,0,.38)],
pool:()=>[box(1.9,.08,1.7,0x0a7a3a,0,.75,0),box(2,.2,.12,0x4b2a14,0,.7,-.9),box(2,.2,.12,0x4b2a14,0,.7,.9),box(.12,.2,1.8,0x4b2a14,-.98,.7,0),box(.12,.2,1.8,0x4b2a14,.98,.7,0),...[[-.9,-.8],[.9,-.8],[-.9,.8],[.9,.8]].map(q=>box(.12,.75,.12,0x4b2a14,q[0],0,q[1])),box(.08,.08,.08,0xffffff,-.3,.83,.1),box(.08,.08,.08,0xd33a3a,.2,.83,-.1),box(.08,.08,.08,0x111111,.4,.83,.2)],
aqua:()=>[box(.8,.45,.5,0x1a1a1a,0,0,0),box(.8,.5,.5,0x6fd0e6,0,.45,0,.45),box(.1,.3,.1,0x2d8a4e,.15,.45,0),box(.06,.05,.1,0xf2a900,-.1,.6,0)],
bigfridge:()=>[box(.9,1.7,.8,0xdfe6ea,0,0,0),box(.04,.5,.04,0x7a8a94,.35,.9,.42),box(.9,.02,.02,0x9aa6ad,0,1,.41)],
inverter:()=>[box(.5,.9,.3,0x1f6f5f,0,0,0),box(.4,.2,.02,0x111111,0,.5,.16),box(.08,.08,.02,0x7cff7c,.1,.6,.17)],
cinema:()=>[box(1.9,.45,.5,0x1a1a1a,0,0,0),box(1.8,1.1,.06,0x0b0b0b,0,.45,-.1),box(1.7,.95,.02,0x2a6fdb,0,.52,-.06),box(.2,1,.2,0x333333,-.95,0,.2),box(.2,1,.2,0x333333,.95,0,.2)],
mdining:()=>[box(1.8,.1,.8,0xe9e6df,0,.7,0),...[[-.8,-.3],[.8,-.3],[-.8,.3],[.8,.3]].map(q=>box(.1,.7,.1,0xb08d57,q[0],0,q[1])),box(.25,.04,.25,0xffffff,-.4,.8,0),box(.25,.04,.25,0xffffff,.4,.8,0)]});
function makeAvatar(gen,sh,sk){const g=new THREE.Group(),skin=sk||0x8d5524,shirt=sh||((gen||S.g)=="f"?0xc14a7e:0x0f4c5c);
 const L=box(.14,.45,.14,0x2b2b2b,-.1,0,0),R=box(.14,.45,.14,0x2b2b2b,.1,0,0);
 const lp=new THREE.Group(),rp=new THREE.Group();lp.position.set(0,.45,0);rp.position.set(0,.45,0);L.position.set(-.1,-.225,0);R.position.set(.1,-.225,0);lp.add(L);rp.add(R);
 g.add(lp,rp,box(.4,.5,.22,shirt,0,.45,0),box(.1,.45,.1,skin,-.26,.47,0),box(.1,.45,.1,skin,.26,.47,0),box(.26,.26,.26,skin,0,.97,0),box(.3,.06,.3,0x111111,0,1.21,0),box(.24,.06,.24,0x111111,0,1.27,0));
 g.userData.legs=[lp,rp];return g}
function drawSign(){const c=document.createElement("canvas");c.width=512;c.height=128;const x=c.getContext("2d");x.fillStyle=(GL.rt&&GL.rt.sign)||"#0f4c5c";x.fillRect(0,0,512,128);x.fillStyle="#fbf8f0";x.font="bold 44px sans-serif";x.textAlign="center";x.textBaseline="middle";x.fillText(signText(),256,66);
 const t=new THREE.CanvasTexture(c);GL.sign.material.map=t;GL.sign.material.needsUpdate=true}
function initGL(){if(GL)return true;if(typeof THREE==="undefined"){toast("3D engine could not load. Check your internet and reload.");return false}
 const cv=$("#gl"),r=new THREE.WebGLRenderer({canvas:cv,antialias:true});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
 const sc=new THREE.Scene();sc.background=new THREE.Color(0xcfe3ea);const cam=new THREE.PerspectiveCamera(42,2,.1,60);cam.rotation.order="YXZ";
 sc.add(new THREE.AmbientLight(0xffffff,.8));const dl=new THREE.DirectionalLight(0xfff2d6,.65);dl.position.set(4,9,5);sc.add(dl);
 const ct=document.createElement("canvas");ct.width=ct.height=64;const cx=ct.getContext("2d");cx.fillStyle="#e0c690";cx.fillRect(0,0,64,64);cx.fillStyle="#d1b27a";cx.fillRect(0,0,32,32);cx.fillRect(32,32,32,32);
 const ft=new THREE.CanvasTexture(ct);ft.wrapS=ft.wrapT=THREE.RepeatWrapping;ft.repeat.set(3,3);ft.magFilter=THREE.NearestFilter;
 const fl=new THREE.Mesh(new THREE.PlaneGeometry(6,6),new THREE.MeshLambertMaterial({map:ft}));fl.rotation.x=-Math.PI/2;sc.add(fl);
 const gr=new THREE.Mesh(new THREE.PlaneGeometry(60,60),new THREE.MeshLambertMaterial({color:0xa9cc7b}));gr.rotation.x=-Math.PI/2;gr.position.y=-.02;sc.add(gr);
 const walls=new THREE.Group();[[6.4,.2,0,-3.1],[6.4,.2,0,3.1],[.2,6.4,-3.1,0],[.2,6.4,3.1,0]].forEach(w=>walls.add(box(w[0],2.4,w[1]==.2&&w[0]==6.4?.2:w[1],0xf3ead2,w[2],0,w[3])));
 walls.children[2].geometry=new THREE.BoxGeometry(.2,2.4,6.4);walls.children[3].geometry=new THREE.BoxGeometry(.2,2.4,6.4);sc.add(walls);
 const sign=new THREE.Mesh(new THREE.PlaneGeometry(2.6,.65),new THREE.MeshBasicMaterial({color:0xffffff}));sign.position.set(0,1.7,-2.98);walls.add(sign);
 const wn=(x,z,ry)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(.9,.7),new THREE.MeshBasicMaterial({color:0xbfe6f5}));m.position.set(x,1.3,z);m.rotation.y=ry;walls.add(m)};wn(-2.98,-1.2,Math.PI/2);wn(-2.98,1.4,Math.PI/2);wn(2.98,1.6,-Math.PI/2);
 const door=box(.06,1.9,.9,0x6b4423,2.95,0,0);walls.add(door);walls.add(box(.05,.08,.08,0xf2a900,2.9,.95,.3));
 const fur=new THREE.Group();sc.add(fur);const AV=makeAvatar();sc.add(AV);
 GL={r,sc,cam,walls,fur,AV,sign,cv,fl,rc:new THREE.Raycaster(),key:"init"};
 P.x=(S.px==null?3:S.px)-3;P.z=(S.py==null?3:S.py)-3;wire();return true}
function wire(){const cv=GL.cv;let ptr=null;
 cv.addEventListener("pointerdown",e=>{ptr={id:e.pointerId,x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now()};try{cv.setPointerCapture(e.pointerId)}catch(_){}});
 cv.addEventListener("pointermove",e=>{if(!ptr||e.pointerId!=ptr.id)return;const dx=e.clientX-ptr.x,dy=e.clientY-ptr.y;ptr.x=e.clientX;ptr.y=e.clientY;V.yaw+=dx*.006;if(em()=="fp")V.pitch=Math.max(-1.1,Math.min(1.1,V.pitch+dy*.005))});
 cv.addEventListener("pointerup",e=>{if(!ptr||e.pointerId!=ptr.id)return;const m=Math.hypot(e.clientX-ptr.sx,e.clientY-ptr.sy),dt=performance.now()-ptr.t;const q=ptr;ptr=null;if(m<10&&dt<450)tap(e.clientX,e.clientY)});
 cv.addEventListener("pointercancel",()=>{ptr=null});
 const jo=$("#joy"),st=$("#stick");let jp=null;
 const jm=e=>{const b=jo.getBoundingClientRect();let dx=(e.clientX-b.left-b.width/2)/(b.width/2),dy=(e.clientY-b.top-b.height/2)/(b.height/2);const m=Math.hypot(dx,dy);if(m>1){dx/=m;dy/=m}V.jx=dx;V.jy=dy;st.style.transform="translate("+dx*30+"px,"+dy*30+"px)"};
 jo.addEventListener("pointerdown",e=>{jp=e.pointerId;try{jo.setPointerCapture(e.pointerId)}catch(_){}jm(e)});
 jo.addEventListener("pointermove",e=>{if(e.pointerId==jp)jm(e)});
 const je=e=>{if(e.pointerId==jp){jp=null;V.jx=V.jy=0;st.style.transform=""}};jo.addEventListener("pointerup",je);jo.addEventListener("pointercancel",je)}
function tap(cx,cy){const b=GL.cv.getBoundingClientRect();GL.rc.setFromCamera(new THREE.Vector2((cx-b.left)/b.width*2-1,-((cy-b.top)/b.height*2-1)),GL.cam);
 const hits=GL.rc.intersectObjects(GL.fur.children,true);
 for(const hh of hits){let o=hh.object;while(o&&o.userData.idx===undefined&&o.userData.mate===undefined)o=o.parent;if(!o)continue;
  if(o.userData.mate!==undefined){if(!o.visible)continue;if(Math.hypot(o.position.x-P.x,o.position.z-P.z)>2.4)return toast("Walk closer to talk to "+o.userData.person.n+".");openPerson(o.userData.person);return}
  if(S.in)continue;
  const i=RI()[o.userData.idx],c=CAT.find(k=>k.id==i.id);
  if(S.visit)return toast(c.n+" belongs to "+STU.find(x=>x.id==S.visit).n+".");
  if(MOVE.on){if(i.id=="bed")return toast("The bed is fixed to the wall.");MOVE.sel=o.userData.idx;toast("Picked up "+c.n+". Tap a free spot on the floor.");drawRoom();return}
  if(i.id=="bed")return toast("The bed came with the room.");
  if(!$("#shop").classList.contains("on"))return toast(c.n+" · open Buy mode to sell it, or Move furniture to rearrange");
  S.items.splice(o.userData.idx,1);tx(c.p/2,"Sold "+c.n);toast("Sold "+c.n+" for "+N(c.p/2));drawRoom();shop();hud();return}
 const pt=new THREE.Vector3();if(!GL.rc.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),0),pt))return;
 if(MOVE.on&&MOVE.sel!=null){const it=S.items[MOVE.sel],c=CAT.find(k=>k.id==it.id),nx=Math.round(pt.x+RW-c.w/2),ny=Math.round(pt.z+RD-c.h/2);
  if(moveItem(MOVE.sel,nx,ny)){MOVE.sel=null;unstuck();toast(c.n+" moved.");drawRoom();hud()}else toast("It will not fit there.");return}
 if(em()=="top")V.tgt={x:Math.max(-RW+.3,Math.min(RW-.3,pt.x)),z:Math.max(-RD+.3,Math.min(RD-.3,pt.z))}}
function upd(dt){const mag=Math.hypot(V.jx,V.jy);let mx=0,mz=0,sp=0;
 if(mag>.12){const f=-V.jy,rt=V.jx;mx=-Math.sin(V.yaw)*f+Math.cos(V.yaw)*rt;mz=-Math.cos(V.yaw)*f-Math.sin(V.yaw)*rt;sp=Math.min(1,mag);V.tgt=null}
 else if(V.tgt){const dx=V.tgt.x-P.x,dz=V.tgt.z-P.z,d=Math.hypot(dx,dz);if(d<.1)V.tgt=null;else{mx=dx;mz=dz;sp=1}}
 let moved=false;
 if(sp>0){const l=Math.hypot(mx,mz)||1;mx/=l;mz/=l;const st=sp*2.4*dt,nx=P.x+mx*st,nz=P.z+mz*st;
  if(!blocked(nx,P.z)){P.x=nx;moved=true}if(!blocked(P.x,nz)){P.z=nz;moved=true}
  if(moved)GL.AV.rotation.y=Math.atan2(mx,mz);else V.tgt=null}
 V.w+=moved?dt*11:0;const sw=moved?Math.sin(V.w)*.7:0;GL.AV.userData.legs[0].rotation.x=sw;GL.AV.userData.legs[1].rotation.x=-sw;
 GL.AV.position.set(P.x,0,P.z);if(!S.visit&&!S.in){S.px=P.x+RW;S.py=P.z+RD}
 if(GL.mav){const sp=[];GL.mav.forEach(m=>{const vis=m.host||presentM(m.j);m.av.visible=vis;if(vis)sp.push([m.av.position.x,m.av.position.z])});GL.spots=sp}
 const cam=GL.cam;
 const eff=em();
 if(eff=="fp"){cam.position.set(P.x,1.45,P.z);cam.rotation.set(V.pitch,V.yaw,0);GL.AV.visible=false;GL.walls.scale.y=1}
 else if(eff=="tp"){const cx=Math.max(-RW+.2,Math.min(RW-.2,P.x+Math.sin(V.yaw)*3)),cz=Math.max(-RD+.2,Math.min(RD-.2,P.z+Math.cos(V.yaw)*3));cam.position.set(cx,2.6,cz);cam.lookAt(P.x,1,P.z);GL.AV.visible=true;GL.walls.scale.y=1}
 else{const ka=Math.max(1,.95/((GL.cv.clientWidth||1)/(GL.cv.clientHeight||1)))*Math.max(RW,RD)/3;cam.position.set(Math.sin(V.yaw)*7.2*ka,9.5*ka,(Math.cos(V.yaw)*7.2+.4)*ka);cam.lookAt(0,0,.2);GL.AV.visible=true;GL.walls.scale.y=.38}
 const on=!!S.visit||Math.hypot(P.x-(RW-.22),P.z)<1.1;if(on!=V.exitOn){V.exitOn=on;$("#exit").style.display=on?"":"none"}
 const w=GL.cv.clientWidth,h=GL.cv.clientHeight;if(w&&h&&(GL.w!=w||GL.h!=h)){GL.w=w;GL.h=h;GL.r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}}
function loop(t){if(cur!="room"){V.run=false;return}requestAnimationFrame(loop);const dt=Math.min(.05,((t-V.last)/1000)||0);V.last=t;upd(dt);GL.r.render(GL.sc,GL.cam)}
function drawRoom(){if(!initGL())return;setRT();
 const g=GL.fur;g.children.slice().forEach(c=>{g.remove(c);c.traverse(o=>{if(o.geometry)o.geometry.dispose()})});
 RI().forEach((it,i)=>{const c=CAT.find(k=>k.id==it.id),gp=new THREE.Group();(MOD[it.id]?MOD[it.id]():[box(c.w*.9,.6,c.h*.9,0x888888,0,0,0)]).forEach(m=>gp.add(m));gp.position.set(it.x+c.w/2-RW,MOVE.sel===i?.25:0,it.y+c.h/2-RD);gp.userData.idx=i;g.add(gp)});
 buildInterior(g);
 RES.forEach((r,j)=>{const gp=new THREE.Group();bedM([0x2f6f4e,0xb23a48,0x2b5aa8][j]).forEach(m=>gp.add(m));gp.position.set(r[0]+1-RW,0,r[1]+.5-RD);g.add(gp)});
 GL.mav=persons().map(p=>{const hs=hsh(p.key),av=makeAvatar(p.g,SHIRTS[hs%SHIRTS.length],SKINS[(hs>>3)%SKINS.length]);av.userData.person=p;av.userData.mate=p.host?-1:p.j;av.position.set(p.spot[0],0,p.spot[1]);av.rotation.y=Math.atan2(-p.spot[0],-p.spot[1]);g.add(av);return{av,j:p.j,host:!!p.host}});
 if(GL.AV.userData.g!=S.g){GL.sc.remove(GL.AV);GL.AV=makeAvatar();GL.AV.userData.g=S.g;GL.sc.add(GL.AV)}
 drawSign();spawnFix();unstuck();const t=tags();$("#tally").innerHTML=Object.keys(t).map(k=>`<span class="pill">${k} ${t[k]}</span>`).join("");
 camLabel();if(!V.run&&cur=="room"){V.run=true;V.last=performance.now();requestAnimationFrame(loop)}}
$("#camb").onclick=()=>{V.mode=MODES[(MODES.indexOf(V.mode)+1)%3];V.pitch=0;camLabel();toast({top:"Top view. Tap the floor to walk, drag to rotate.",tp:"Third person. Joystick to walk, drag to turn the camera.",fp:"First person. Drag to look, joystick to walk."}[V.mode])};
$("#exit").onclick=()=>go("map");
function shop(){const cs=[...new Set(CAT.filter(c=>!c.g||c.g==S.g).map(c=>c.c))];$("#cats").innerHTML=cs.map(c=>`<button class="chip ${c==cat?"on":""}" data-c="${c}">${c}</button>`).join("");
 $("#shopgrid").innerHTML=CAT.filter(c=>c.c==cat&&c.p>0&&(!c.g||c.g==S.g)).map(c=>`<button class="card ${S.money<c.p?"no":""}" data-id="${c.id}"><div class="e">${c.e}</div><b>${c.n}</b><span>${c.w}×${c.h}</span><br><span class="t">${Object.entries(c.tag).map(([k,v])=>"+"+k+" "+v).join(" ")}</span><b>${N(c.p)}</b></button>`).join("");
 $$("#cats .chip").forEach(e=>e.onclick=()=>{cat=e.dataset.c;shop()});
 $$("#shopgrid .card").forEach(e=>e.onclick=()=>{const c=CAT.find(k=>k.id==e.dataset.id);if(S.money<c.p)return toast("Not enough money.");
  for(let y=0;y<GD;y++)for(let x=0;x<GW;x++)if(fits(x,y,c.w,c.h)){S.items.push({id:c.id,x,y});tx(-c.p,c.n);toast(c.n+" placed. Tap it to sell.");drawRoom();shop();hud();return}
  toast("No space left. Sell something first.")})}
$("#buy").onclick=()=>{$("#shop").classList.add("on");shop()};$("#shopx").onclick=()=>$("#shop").classList.remove("on");
$("#sleep").onclick=()=>{if(GL&&!nearBed())return toast("Walk to your bed first.");const r=tags().Rest||0;const sl=(S.t>=1260||S.t<360)?480:180;adv(sl);S.en=Math.min(100,S.en+30+r*6+(S.ins>=S.day?10:0));S.mood=Math.min(100,S.mood+3);toast("You slept. Rest bonus +"+r*6+" energy.");hud();drawRoom()};
/* phone */
const APPS=[["Messages","💬",3],["Campus X","🐦",0],["Bank","🏦",0],["Portal","🎓",0],["Jobs","💼",0],["Notes","📝",0],["Documents","📄",0],["LagosBet","🎰",0],["Gist Times","📰",0],["Lagos Gist","🗣️",0],["Support","🎧",0],["Houses","🏘️",0],["Cars","🚗",0],["Family","👪",0],["Assurance","🛡️",0],["Shops","🛒",0],["Company","🏢",0],["Staff","🧑🏾‍💼",0],["Bus Co.","🚌",0],["Government","🏛️",0],["Police","👮",0],["Court","⚖️",0],["Forbes","💎",0],["Plug","🕶️",0]];
const CHATS={
mum:{n:"Mum",b:[{t:"Have you eaten today?",o:[{l:"Yes ma",r:"Good. Keep it up.",mood:3},{l:"Not yet",r:"Ah ah. I am sending ₦3,000 now.",cash:3000}]},{t:"Your uncle is asking about your results.",o:[{l:"Tell him I am working hard",r:"God will do it.",mood:2},{l:"Ask him for allowance",r:"I will talk to him.",cash:5000}]}]},
kel:{n:"Kelechi",b:[{t:"Bring the extension box when you come back.",o:[{l:"Okay, I have it",r:"You are a legend.",mood:4},{l:"Buy your own",r:"Wow. Okay.",mood:-2}]},{t:"Party at the Union on Friday. You coming?",o:[{l:"I'm in",r:"See you there.",mood:6,post:"@you is going to the Union party 🎉"},{l:"I have to study",r:"Boring. But fine.",xp:5}]}]},
amaka:{n:"Amaka",b:[{t:"Do you have the ECO 101 handout?",o:[{l:"Sending it now",r:"Thank you! I owe you jollof.",mood:3},{l:"Check the library",r:"Ok o.",mood:0}]}]}};
const avail=id=>{const c=CHATS[id],i=S.ch[id]||0;return i<c.b.length&&S.day>(S.cd[id]||0)};
const cnt=()=>Object.keys(CHATS).filter(avail).length;
function badge(){const n=cnt(),b=$("#badge");b.textContent=n;b.style.display=n?"":"none"}
const chatList=()=>Object.keys(CHATS).map(id=>`<p><button class="cl" data-c="${id}"><b>${CHATS[id].n}</b> ${avail(id)?"● new message":""}<br>${(S.hist[id]||[]).slice(-1)[0]||"No messages yet"}</button></p>`).join("");
function thread(id){const c=CHATS[id],i=S.ch[id]||0;let h=`<button class="back" id="pb">‹ Messages</button><div class="sub"><b>${c.n}</b>`;
 (S.hist[id]||[]).forEach(l=>h+=`<p>${l}</p>`);
 if(avail(id))h+=`<p>${c.n}: ${c.b[i].t}</p>`+c.b[i].o.map((o,k)=>`<button class="mini rep" data-c="${id}" data-k="${k}">${o.l}</button>`).join("");else h+=`<p><i>No new messages.</i></p>`;
 $("#scr").innerHTML=h+"</div>";$("#pb").onclick=()=>phone("Messages");bind()}
function answer(id,k){const c=CHATS[id],i=S.ch[id]||0,o=c.b[i].o[k];(S.hist[id]=S.hist[id]||[]).push(c.n+": "+c.b[i].t,"You: "+o.l,c.n+": "+o.r);
 if(o.mood)S.mood=Math.max(0,Math.min(100,S.mood+o.mood));if(o.cash)tx(o.cash,"From "+c.n);if(o.xp)S.xp+=o.xp;if(o.post)post(o.post);
 S.ch[id]=i+1;S.cd[id]=S.day;hud();thread(id)}
const JOBS=[{id:"shelf",n:"Library shelver",pay:2500,m:180,en:15,need:"matric"},{id:"tutor",n:"Tutor SS2 students",pay:6000,m:180,en:20,need:"reg"},{id:"rider",n:"Campus delivery rider",pay:3500,m:120,en:18}];
const jobsHtml=()=>JOBS.map(j=>`<p><b>${j.n}</b><br>${N(j.pay)}${j.id=="rider"?" (+30% in rain)":""} · ${j.m/60}h · ⚡−${j.en}${j.need?" · needs "+DOCS.find(d=>d.id==j.need).n:""}<br><button class="mini" data-j="${j.id}">Work a shift</button></p>`).join("")+"<p>Shifts: 8am to 8pm.</p>";
const VIBES=["Lectures have started and my brain has not 😭","Jollof or nothing today.","Rain, hostel, indomie. Perfect.","Who else is awake for no reason?","Registry queue taught me patience."];
function mini(d){if(d.k&&ACT[d.k]){ACT[d.k](d);hud();phone(APP);return}const h=hr();
 if(d.k=="dep"){if(S.money<5000)toast("Not enough money.");else{tx(-5000,"Saved");S.sav+=5000;toast("₦5,000 saved. It grows 0.5% a day.")}}
 else if(d.k=="wd"){if(!S.sav)toast("Nothing saved yet.");else{tx(S.sav,"Savings withdrawn");S.sav=0;toast("Savings withdrawn.")}}
 else if(d.k=="post"){if(S.pd==S.day)toast("You already posted today.");else{S.pd=S.day;S.cha=Math.min(100,S.cha+1);S.mood=Math.min(100,S.mood+3);post("@you: "+VIBES[Math.floor(Math.random()*VIBES.length)])}}
 else if(d.j){const j=JOBS.find(x=>x.id==d.j);if(h<8||h>=20)toast("No shifts right now.");else if(j.need&&!S.docs[j.need])toast("You need your "+DOCS.find(x=>x.id==j.need).n+" first.");else if(S.en<j.en)toast("Too tired for a shift.");
  else{S.en-=j.en;adv(j.m);const g=Math.round(j.pay*(j.id=="rider"&&S.wx=="rain"?1.3:1));tx(g,j.n);S.xp+=2;toast("Shift done. You earned "+N(g)+".")}}
 hud();phone(APP)}
function bind(){$$(".cl").forEach(e=>e.onclick=()=>phone("chat:"+e.dataset.c));$$(".rep").forEach(e=>e.onclick=()=>answer(e.dataset.c,+e.dataset.k));$$(".mini:not(.rep)").forEach(e=>e.onclick=()=>mini(e.dataset))}
let APP=null,AC=null,rad=0,seqT=null,nwT=null;

/* ===== Modules: careers, LagosBet, Gist, city apps ===== */
const TAB={};let ANS="";
const ev=t=>{S.evl=S.evl||[];S.evl.unshift("Day "+S.day+" · "+t);S.evl=S.evl.slice(0,15)};
const clk=m=>{const h=Math.floor(m/60);return(h%12||12)+":"+String(m%60).padStart(2,"0")+(h<12?" AM":" PM")};
const sd=a=>{let x=(S.day*9301+a*49297)%233280;return x};
const carSave=()=>{const c=CARS.find(x=>x.id==S.car);return c?c.sv:0};
const tabs=(ts,cur)=>"<p>"+ts.map(t=>`<button class="mini" data-k="tab" data-t="${t[0]}" ${cur==t[0]?"style='background:#e4572e'":""}>${t[1]}</button>`).join("")+"</p>";
/* careers */
const TRACKS={
tech:{n:"Tech",e:"💻",need:"reg",t:[["Intern 1",800],["Junior Developer",1800],["Mid Developer",3500],["Senior Developer",7000],["Tech Lead",14000],["CTO",30000]]},
bank:{n:"Banking",e:"🏦",need:"nin",t:[["Marketer 1",700],["Marketer 2",1400],["Relationship Officer",2800],["Branch Manager",6000],["Regional Head",15000]]},
music:{n:"Music",e:"🎤",t:[["Street Performer",500],["Open Mic Act",1500],["Studio Artist",4000],["Signed Artist",10000],["Headliner",25000]]},
ride:{n:"Riding",e:"🏍️",t:[["Campus Rider",600],["Okada Rider",1200],["Keke Driver",2200],["Danfo Driver",4000],["Fleet Owner",9000]]}};
/* football data */
const TEAMS={epl:{Arsenal:8,Chelsea:6,"Man City":9,Liverpool:8,"Man United":6,Spurs:6},ll:{"Real Madrid":9,Barcelona:8,Atletico:7,Sevilla:5,Valencia:5,Villarreal:5}};
function genFx(){const f=[];["epl","ll"].forEach(lg=>{const t=Object.keys(TEAMS[lg]).sort(()=>Math.random()-.5);for(let i=0;i<2;i++){const h=t[i*2],a=t[i*2+1];f.push({id:lg+i,lg,h,a,hs:TEAMS[lg][h],as:TEAMS[lg][a],ko:[900,1050,1200,1290][f.length]})}});S.fx=f}
const prb=m=>{const pd=.26,ph=(1-pd)*(m.hs+1.5)/(m.hs+m.as+3);return[ph,pd,1-pd-ph]};
const od=p=>Math.max(1.05,Math.round(.92/p*100)/100);
function settle(){const now=S.day*1440+S.t;(S.bets||[]).forEach(b=>{if(b.done||now<b.at)return;b.done=1;let win=false,res="";
 if(b.k=="fb"){const r=Math.random(),o=r<b.pr[0]?"H":r<b.pr[0]+b.pr[1]?"D":"A",g=Math.floor(Math.random()*3),sc=o=="H"?[g+1,g]:o=="D"?[g,g]:[g,g+1];res=b.lbl+" "+sc[0]+"-"+sc[1];win=o==b.pick}
 else{const n=Math.floor(Math.random()*37),red=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].includes(n),c=n==0?"green":red?"red":"black";res="Roulette "+n+" "+c;win=c==b.pick}
 b.win=win;b.res=res;if(win){tx(Math.round(b.stake*b.odds),"LagosBet win");ev("Bet won: "+res)}else ev("Bet lost: "+res);toast((win?"🎉 Won · ":"Lost · ")+res)})}
function bizDay(){if(S.biz){const g=S.staff?6000:2500,w=S.staff?2500:0;tx(g-w,"Kiosk income")}if(S.bus)tx(9000,"Danfo income");if(S.biz||S.bus)ev("Business income received")}
/* content */
const CITY=["Naira holds steady as traders say wait small","Danfo drivers threaten strike over new lane rules","Coastville marina reopens after repairs","NEPA promises improved supply, again","Traffic on Herbert Macaulay Way hits record patience levels","Mama Put prices rise, portions stay the same","Council announces new bus lanes, buses unaware","Tech hub opens in Yaba hiring interns who love hustle"];
const CAMP=["Hostel water will be restored soon, says Senate","Registry queue: officers blame the system","Library adds 40 chairs, 400 students arrive","Lecturers' strike rumour confirmed to be a rumour","Union party Friday: security under control","Cafeteria jollof wins Student Choice, again"];
const STORIES=["Amina sold her first batch of puff-puff and paid her school fees.","A danfo conductor returned a lost phone with ₦40,000 inside.","Tunde coded an app on a borrowed laptop and got hired.","Mama Nkechi's amala spot now has a queue and a POS.","A hostel generator group chat saved a whole block from darkness."];
const TRENDS=["#NEPAtookLight","#JollofWars","#ECO101Pain","#DanfoDiaries","#SettleTheOfficer","#CoastvilleRain","#MatricNumberLoading","#HostelWater"];
const TR=[{id:"suya",n:"Mallam's Suya",p:1200,en:15},{id:"amala",n:"Mama Put Amala",p:1500,en:18},{id:"puff",n:"Puff-Puff Corner",p:500,en:8},{id:"akara",n:"Akara & Pap",p:400,en:7}];
const FAQ=[{k:["document","nin","id","matric","register"],q:"How do I get my documents?",a:"Visit the Admin Block, 8am to 4pm. NIN first, then school ID, then course registration."},
{k:["hostel","girl","boy","enter"],q:"Who can enter which hostel?",a:"Boys cannot enter the girls' hostel. Girls may visit the boys' hostel from 4pm to 10pm. Luxury hostels are open to all."},
{k:["save","saving","interest","bank"],q:"How do savings work?",a:"In the Bank app, save ₦5,000 at a time. Savings grow 0.5% every day."},
{k:["job","promot","career","work"],q:"How do I get promoted?",a:"Work shifts in Jobs. You need enough shifts and XP. Study and attend lectures to earn XP."},
{k:["bet","football","roulette","gambl"],q:"How does LagosBet work?",a:"Pick a stake, then a bet. Football settles after full time, roulette spins each hour. Bet small."},
{k:["exam","timetable","class","gpa","attend","semester","lecture","grade"],q:"How do classes and exams work?",a:"Open Portal for your timetable. Attend lectures in the Lecture Hall during the slot, study each course in the Library, then sit each exam at 9 AM on its day. Missing an exam scores zero."},
{k:["rain","weather"],q:"What does rain change?",a:"Rain cuts market hustle earnings by 30% and raises rider pay by 30%."},
{k:["energy","tired","food"],q:"I am tired. What now?",a:"Eat at the Cafeteria or Shops, or go to your room and sleep. Furniture with Rest helps."}];
/* actions */
const ACT={
tab(d){TAB[APP]=d.t},
stake(d){S.stake=+d.v},
apply(d){const T=TRACKS[d.v];if(T.need&&!S.docs[T.need])return toast("You need your "+DOCS.find(x=>x.id==T.need).n+" first.");S.job={k:d.v,i:0,sh:0};ev("Hired as "+T.t[0][0]);post("@you got a job as "+T.t[0][0]+" 💼");toast("You are now a "+T.t[0][0])},
quit(){S.job=null;toast("You resigned.")},
work(){const j=S.job,T=TRACKS[j.k],t=T.t[j.i],h=hr();if(h<8||h>=20)return toast("No shifts right now.");const en=Math.max(8,18-carSave());if(S.en<en)return toast("Too tired for a shift.");
 S.en-=en;adv(240);const pay=Math.round(t[1]*4*(j.k=="ride"&&S.wx=="rain"?1.3:1));tx(pay,t[0]);S.xp+=4;j.sh++;
 if(T.t[j.i+1]&&j.sh>=3+j.i*2&&S.xp>=(j.i+1)*15){j.i++;j.sh=0;ev("Promoted to "+T.t[j.i][0]);post("@you was promoted to "+T.t[j.i][0]+" 🎉");toast("🎉 Promoted to "+T.t[j.i][0])}else toast("Shift done. Earned "+N(pay))},
bf(d){const f=S.fx.find(x=>x.id==d.f);if(S.t>=f.ko)return toast("Match already started.");if(S.money<S.stake)return toast("Not enough money.");const pr=prb(f),i="HDA".indexOf(d.p);
 tx(-S.stake,"LagosBet stake");S.bets.unshift({k:"fb",lbl:f.h+" v "+f.a,pick:d.p,odds:od(pr[i]),stake:S.stake,at:S.day*1440+f.ko+120,pr});S.bets=S.bets.slice(0,15);toast("Bet placed. Result after full time.")},
rl(d){if(S.money<S.stake)return toast("Not enough money.");const at=S.day*1440+Math.ceil((S.t+1)/60)*60;tx(-S.stake,"LagosBet stake");
 S.bets.unshift({k:"rl",lbl:"Roulette",pick:d.p,odds:d.p=="green"?14:2,stake:S.stake,at});S.bets=S.bets.slice(0,15);toast("Bet placed. Wheel spins at "+clk(at%1440))},
hl(d){if(S.money<S.stake)return toast("Not enough money.");const n=1+Math.floor(Math.random()*100),w=(d.p=="hi"&&n>50)||(d.p=="lo"&&n<=50);tx(-S.stake,"LagosBet stake");if(w)tx(Math.round(S.stake*1.9),"High-Low win");toast((w?"🎉 Won · ":"Lost · ")+"rolled "+n)},
trail(d){const p=TR.find(x=>x.id==d.v),h=hr();if(h<10||h>=22)return toast("The spots are closed.");if(S.tr.d!=S.day)S.tr={d:S.day,ids:[]};if(S.tr.ids.includes(p.id))return toast("You already ate there today.");if(S.money<p.p)return toast("Not enough money.");
 tx(-p.p,p.n);S.en=Math.min(100,S.en+p.en);adv(40);S.tr.ids.push(p.id);if(S.tr.ids.length==3){tx(3000,"Food Trail bonus");S.mood=Math.min(100,S.mood+8);ev("Completed the Food Trail");toast("🍽️ Food Trail complete. +₦3,000")}else toast("Delicious. "+S.tr.ids.length+"/3 on today's trail.")},
join(d){if(S.tj==S.day)return toast("You already joined a trend today.");S.tj=S.day;S.mood=Math.min(100,S.mood+2);post("@you joined "+d.v);toast("Trend joined.")},
ask(){const q=($("#q")?$("#q").value:"").toLowerCase();const f=FAQ.find(x=>x.k.some(w=>q.includes(w)));ANS=f?f.a:"Try asking about documents, hostel, savings, jobs, bet, rain or energy."},
faq(d){ANS=FAQ[+d.v].a},
move(d){const c=+d.c;if(S.money<c)return toast("Not enough money.");tx(-c,"Hostel move");S.home=d.v;genMates();ev("Moved to "+BLD.find(x=>x.id==d.v).n);toast("Moved. Your room label updates in Room view.")},
sendhome(){if(S.money<5000)return toast("Not enough money.");tx(-5000,"Sent home");S.mood=Math.min(100,S.mood+4);toast("Mum prayed for you for ten minutes.")},
call(){adv(10);S.mood=Math.min(100,S.mood+3);toast("Mum asked if you have eaten.")},
car(d){const c=CARS.find(x=>x.id==d.v);if(c.need&&!S.docs[c.need])return toast("You need a driver's licence first.");if(S.money<c.p)return toast("Not enough money.");tx(-c.p,c.n);S.car=c.id;ev("Bought a "+c.n);toast(c.n+" bought. Shifts cost less energy.")},
ins(){if(S.money<5000)return toast("Not enough money.");tx(-5000,"Health plan");S.ins=S.day+7;toast("Covered for 7 days. Sleep restores more energy.")},
shop(d){const x=SHOP.find(i=>i.id==d.v);if(S.money<x.p)return toast("Not enough money.");tx(-x.p,x.n);S.en=Math.min(100,S.en+(x.en||0));S.mood=Math.min(100,S.mood+(x.mood||0));toast(x.n+" bought.")},
biz(){if(!S.docs.cac)return toast("Register with CAC first (Admin Block).");if(S.money<50000)return toast("Not enough money.");tx(-50000,"Kiosk setup");S.biz=1;ev("Opened a recharge-card kiosk");toast("Kiosk open. Income arrives each morning.")},
staff(){if(!S.biz)return toast("Open a business first.");S.staff=1;ev("Hired a kiosk attendant");toast("Attendant hired.")},
bus(){if(!S.docs.dl)return toast("You need a driver's licence first.");if(S.money<6500000)return toast("Not enough money.");tx(-6500000,"Danfo purchase");S.bus=1;ev("Bought a danfo");toast("Your danfo is on the road.")},
levy(){if(S.money<1000)return toast("Not enough money.");tx(-1000,"Civic levy");S.civ++;toast("Thank you for paying. A receipt is promised.")},
fine(){if(S.money<20000)return toast("Not enough money.");tx(-20000,"Court fine");S.corrupt=0;ev("Paid a court fine");toast("Case closed.")}};
const CARS=[{id:"bike",n:"Bicycle",e:"🚲",p:45000,sp:.7,sv:2},{id:"okada",n:"Okada (motorbike)",e:"🏍️",p:450000,sp:.5,sv:3,need:"dl"},{id:"keke",n:"Keke Napep",e:"🛺",p:1800000,sp:.45,sv:3,need:"dl"},{id:"car",n:"Used Corolla",e:"🚗",p:2500000,sp:.35,sv:4,need:"dl"},{id:"camry",n:"Toyota Camry",e:"🚙",p:6500000,sp:.3,sv:5,need:"dl",ch:2},{id:"suv",n:"Lexus SUV",e:"🚘",p:38000000,sp:.25,sv:6,need:"dl",ch:5},{id:"rr",n:"Range Rover",e:"🚙",p:95000000,sp:.2,sv:7,need:"dl",ch:8},{id:"lambo",n:"Supercar",e:"🏎️",p:260000000,sp:.15,sv:8,need:"dl",ch:12}];
const SHOP=[{id:"indo",n:"Indomie pack",p:300,en:12},{id:"malt",n:"Malt & Gala",p:600,en:8,mood:3},{id:"data",n:"Data bundle",p:1000,mood:5}];
const btn=(k,l,x="")=>`<button class="mini" data-k="${k}" ${x}>${l}</button>`;
/* app screens */
const NEW={
Jobs(){let h="";const j=S.job;
 if(j){const T=TRACKS[j.k],t=T.t[j.i],nx=T.t[j.i+1];h+=`<p><b>${T.e} ${t[0]}</b><br>${N(t[1])}/h · 4h shift = ${N(t[1]*4)}<br>${nx?`Next: ${nx[0]}<br>Shifts ${j.sh}/${3+j.i*2} · XP ${S.xp}/${(j.i+1)*15}`:"Top of the ladder."}<br>${btn("work","Work a shift")}${btn("quit","Quit")}</p>`}
 else h+=Object.keys(TRACKS).map(k=>{const T=TRACKS[k];return`<p><b>${T.e} ${T.n}</b><br>Start: ${T.t[0][0]} · ${N(T.t[0][1])}/h<br>Top: ${T.t[T.t.length-1][0]}${T.need?" · needs "+DOCS.find(d=>d.id==T.need).n:""}<br>${btn("apply","Apply",`data-v="${k}"`)}</p>`}).join("");
 return h+"<p><b>Campus gigs</b></p>"+jobsHtml()},
LagosBet(){const t=TAB.LagosBet||"fb";let h=tabs([["fb","Football"],["hl","High-Low"],["rl","Roulette"],["my","My bets"]],t)+`<p>Stake: ${[500,1000,5000].map(v=>btn("stake",N(v),`data-v="${v}" ${S.stake==v?"style='background:#e4572e'":""}`)).join("")}<br>Wallet ${N(S.money)}</p>`;
 if(t=="fb")h+=S.fx.map(f=>{const pr=prb(f),open=S.t<f.ko;return`<p><b>${f.h} v ${f.a}</b><br>${f.lg=="epl"?"Premier League":"La Liga"} · KO ${clk(f.ko)}${open?"":" · started"}<br>${["H","D","A"].map((x,i)=>btn("bf",x+" "+od(pr[i]),`data-f="${f.id}" data-p="${x}" ${open?"":"disabled"}`)).join("")}</p>`}).join("");
 if(t=="hl")h+=`<p>Pick High (51–100) or Low (1–50). Pays 1.9x. Instant.<br>${btn("hl","High","data-p='hi'")}${btn("hl","Low","data-p='lo'")}</p>`;
 if(t=="rl")h+=`<p>The wheel spins every hour. Red or black pays 2x. Green (0) pays 14x.<br>${btn("rl","Red","data-p='red'")}${btn("rl","Black","data-p='black'")}${btn("rl","Green","data-p='green'")}</p>`;
 if(t=="my")h+=(S.bets.length?S.bets.map(b=>`<p>${b.lbl} (${b.pick}) @${b.odds}<br>${N(b.stake)} · ${b.done?(b.win?"✅ Won "+N(b.stake*b.odds):"❌ Lost")+" · "+b.res:"⏳ result at "+clk(b.at%1440)}</p>`).join(""):"<p>No bets yet.</p>");
 return h+"<p><i>18+. Bet small. The house always wins.</i></p>"},
"Gist Times"(){const t=TAB["Gist Times"]||"city";let h=tabs([["city","City"],["campus","Campus"],["log","My log"]],t);
 const pick=(a,k)=>a[(S.day+k*3)%a.length];
 if(t=="city")h+=`<p><b>${S.wx=="rain"?"Rain floods Coastville drainage again. Residents: we saw it coming.":"Clear skies over Coastville. Generator sellers report a slow day."}</b></p>`+[0,1,2].map(k=>`<p>${pick(CITY,k)}</p>`).join("");
 if(t=="campus")h+=[0,1].map(k=>`<p>${pick(CAMP,k)}</p>`).join("")+(S.corrupt>0?"<p>Rumour mill: officers are settling things at the Admin Block.</p>":"")+(S.day%7==1?"<p>Allowance Day: banks report happy students.</p>":"");
 if(t=="log")h+=(S.evl.length?S.evl.map(e=>`<p>${e}</p>`).join(""):"<p>Nothing logged yet.</p>");return h},
"Lagos Gist"(){const t=TAB["Lagos Gist"]||"st";let h=tabs([["st","Stories"],["food","Food Trail"],["tr","Trends"]],t);
 if(t=="st")h+=[0,1].map(k=>`<p>${STORIES[(S.day+k*2)%STORIES.length]}</p>`).join("");
 if(t=="food"){const n=S.tr.d==S.day?S.tr.ids.length:0;h+=`<p><b>The Food Trail</b><br>Eat at 3 different spots today for ₦3,000. Progress ${n}/3. Open 10am to 10pm.</p>`+TR.map(x=>`<p>${x.n} · ${N(x.p)} · ⚡+${x.en}<br>${btn("trail","Eat here",`data-v="${x.id}"`)}</p>`).join("")}
 if(t=="tr")h+=[0,1,2,3].map(k=>`<p><b>${TRENDS[(S.day*3+k*2)%TRENDS.length]}</b><br>${sd(k+10)%90+10}K posts<br>${btn("join","Join",`data-v="${TRENDS[(S.day*3+k*2)%TRENDS.length]}"`)}</p>`).join("");return h},
Support(){return `<p><b>Ask for help</b></p><input id="q" placeholder="Ask about documents, hostel, bet..."><p>${btn("ask","Ask")}</p>${ANS?`<p>🎧 ${ANS}</p>`:""}`+FAQ.map((f,i)=>`<p>${btn("faq",f.q,`data-v="${i}"`)}</p>`).join("")},
Houses(){const cur=BLD.find(x=>x.id==S.home);return `<p>Now: <b>${cur.n}</b>, Room ${S.rm}</p>`+[["lux1",120000],["lux2",200000],[S.g=="m"?"boys":"girls",0]].filter(a=>a[0]!=S.home).map(a=>`<p>${BLD.find(x=>x.id==a[0]).n}<br>${a[1]?N(a[1])+" move-in":"Free"}<br>${btn("move","Move",`data-v="${a[0]}" data-c="${a[1]}"`)}</p>`).join("")},
Cars(){return `<p>Owned: <b>${S.car?CARS.find(c=>c.id==S.car).n:"none"}</b>. Vehicles cut shift energy cost.</p>`+CARS.map(c=>`<p>${c.n} · ${N(c.p)}${c.need?" · needs driver's licence":""}<br>${btn("car","Buy",`data-v="${c.id}"`)}</p>`).join("")},
Family(){return `<p>Background: <b>${S.bg}</b><br>Allowance every 7th day.</p><p>${btn("sendhome","Send ₦5,000 home")}${btn("call","Call Mum")}</p>`},
Assurance(){return `<p>Health plan: ₦5,000 for 7 days. Sleep restores +10 energy.<br>${S.ins>=S.day?"Active until day "+S.ins:"Not covered"}<br>${btn("ins","Buy plan")}</p>`},
Shops(){return SHOP.map(x=>`<p>${x.n} · ${N(x.p)}<br>${btn("shop","Buy",`data-v="${x.id}"`)}</p>`).join("")},
Company(){return `<p>${S.biz?"Recharge-card kiosk is open. Net income arrives each morning.":"Start a recharge-card kiosk for ₦50,000. Needs a CAC certificate."}<br>${S.biz?"":btn("biz","Open kiosk")}</p>`},
Staff(){return `<p>${S.staff?"Attendant hired. Kiosk makes ₦6,000 a day, wages ₦2,500.":"Hire an attendant for your kiosk. Net income rises from ₦2,500 to ₦3,500 a day."}<br>${S.staff?"":btn("staff","Hire attendant")}</p>`},
"Bus Co."(){return `<p>${S.bus?"Your danfo earns ₦9,000 a day.":"Buy a danfo for ₦6,500,000. Needs a driver's licence."}<br>${S.bus?"":btn("bus","Buy danfo")}</p>`},
Government(){const dn=DOCS.filter(d=>S.docs[d.id]).length;return `<p>Documents held: <b>${dn}/${DOCS.length}</b><br>Civic score: <b>${dn*10+S.civ*5-S.corrupt*10}</b></p><p>${btn("levy","Pay civic levy ₦1,000")}</p>`},
Police(){return `<p>Status: <b>${S.corrupt>=2?"Watched":"Clear"}</b><br>${S.corrupt>=2?"Officers are asking about rumours at the Admin Block.":"No complaints on file."}</p>`},
Court(){return S.corrupt>=3?`<p>Summons: improper dealings at the Admin Block.<br>Fine: ₦20,000<br>${btn("fine","Pay fine")}</p>`:`<p>No cases against you.</p>`},
Forbes(){const L=[["Chief Okonkwo",18e9],["Madam Ife",6.2e9],["Engr. Bello",1.1e9],["Kemi Prints",9e7],["Tunde Rides",4e6],["Chidi Eco",3e5],["You",netw()]].sort((a,b)=>b[1]-a[1]);return L.map((r,i)=>`<p>${i+1}. ${r[0]==="You"?"<b>You</b>":r[0]} · ${N(r[1])}</p>`).join("")}};
function phone(a){APP=a||null;if(a&&a.startsWith("chat:"))return thread(a.slice(5));const s=$("#scr");
 if(!a){s.innerHTML=`<div class="clk">${hhmm().replace(/ [AP]M/,"")}</div><div class="dt">Day ${S.day} · Coastville</div><div class="apps">${APPS.filter(p=>p[0]!="Plug"||S.yb).map(p=>`<div class="app" data-a="${p[0]}"><s>${p[1]}${(p[0]=="Messages"?cnt():p[2])?`<i>${p[0]=="Messages"?cnt():p[2]}</i>`:""}</s>${p[0]}</div>`).join("")}</div>`;
  $$(".app").forEach(e=>e.onclick=()=>phone(e.dataset.a));return}
 if(NEW[a]){s.innerHTML=`<button class="back" id="pb">‹ Home</button><div class="sub">${NEW[a]()}</div>`;$("#pb").onclick=()=>phone();bind();return}
 const body={Messages:chatList(),
 "Campus X":`<p><button class="mini" data-k="post">Post a vibe</button></p>`+S.posts.map(p=>`<p>${p}</p>`).join(""),
 Bank:`<p><b>Wallet ${N(S.money)}</b><br>Savings ${N(S.sav)} · 0.5% a day<br>Net worth ${N(netw())}</p><p><button class="mini" data-k="dep">Save ₦5,000</button><button class="mini" data-k="wd">Withdraw all</button></p>`+(S.log.map(l=>`<p>${l}</p>`).join("")||"<p>No transactions yet.</p>"),
 Portal:`<p>Background: <b>${S.bg}</b></p><p>Course XP: <b>${S.xp}</b></p><p>Mood: <b>${S.mood}%</b></p>`,
 Documents:DOCS.map(d=>`<p>${S.docs[d.id]?"✅":"⬜"} ${d.e} <b>${d.n}</b>${S.docs[d.id]?"":"<br>Needs: "+(d.req.length?d.req.map(r=>DOCS.find(x=>x.id==r).n).join(", "):"nothing")+" · "+N(d.fee)}</p>`).join("")+(S.degree?"<p>🎓 <b>Degree certificate</b>: "+S.degree.cls+"</p>":"")+"<p>Collect them at the Admin Block, 8am to 4pm.</p>",
 Jobs:jobsHtml(),Notes:`<p>To do: eat, ECO 101 notes, buy a lamp.</p>`}[a];
 s.innerHTML=`<button class="back" id="pb">‹ Home</button><div class="sub">${body}</div>`;$("#pb").onclick=()=>phone();bind()}
/* nav */
function go(v){if(v=="map"){S.visit=null;S.in=null}cur=v;if(v=="room"&&!S.in&&!S.visit)S.loc=S.home;$$(".view").forEach(e=>e.classList.toggle("on",e.id==v));$("#gmap").classList.toggle("act",v=="map");$("#groom").classList.toggle("act",v=="room");$("#act").classList.remove("on");$("#shop").classList.remove("on");if(v=="room")drawRoom();else drawMap();hud()}
const NEWS=["Naira steady as fuel queues return. Analysts say wait small.","Coastville: danfo driver wins argument with traffic warden.","SCU Senate: hostel water will be restored soon.","Weather: umbrellas are now currency.","Breaking: someone's generator is louder than the lecture."];
const nw=()=>toast("📻 "+NEWS[Math.floor(Math.random()*NEWS.length)]);
function tone(f,d,t,ty,v,f2){const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d)}
function noise(t,d,v){const n=Math.floor(AC.sampleRate*d),b=AC.createBuffer(1,n,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const x=AC.createBufferSource(),g=AC.createGain();x.buffer=b;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);x.connect(g);g.connect(AC.destination);x.start(t)}
function beats(){AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state=="suspended")AC.resume();let st=0;const bass=[55,0,0,55,0,65,0,0,73,0,0,73,0,65,0,82];
 seqT=setInterval(()=>{const t=AC.currentTime+.02,k=st%16;if(k%4==0)tone(120,.12,t,"sine",.5,45);if(k==4||k==12)noise(t,.08,.2);if(k%2==0)noise(t,.03,.06);if(bass[k])tone(bass[k]*2,.2,t,"triangle",.25);st++},144)}
$("#gradio").onclick=()=>{rad=(rad+1)%3;clearInterval(seqT);clearInterval(nwT);$("#gradio").classList.toggle("act",rad>0);
 if(rad==0)return toast("Radio off");if(rad==1){toast("Coastline FM · afrobeat");beats()}else{toast("Naija Talk 99.1");nw();nwT=setInterval(nw,12000)}};
$("#gmap").onclick=()=>go("map");$("#groom").onclick=()=>goHome();
$("#gphone").onclick=()=>{const p=$("#phone");p.classList.toggle("on");if(p.classList.contains("on"))phone()};
/* ===== School: timetable, attendance, exams, GPA, graduation ===== */
const DEPT=["ECO","MTH","ENG","CSC"],WD=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const SLOTS=[[0,0,8,10],[0,2,10,12],[1,1,8,10],[1,3,10,12],[2,0,12,14],[2,4,8,10],[3,1,12,14],[3,3,14,16]]; /* [course, weekday 0=Mon, start hour, end hour] */
const EXD=[22,23,24,25]; /* semester day of each course's exam, 9-11 AM */
const courses=()=>DEPT.map((d,i)=>({code:d+" "+(Math.ceil(Math.min(S.sem,8)/2)*100+(S.sem%2?1:2)),i}));
const semDay=()=>(S.day-1)%28+1,wday=d=>(d-1)%7;
const teaching=()=>S.sem<=8&&!S.degree&&!S.expelled&&semDay()<=21;
const slotNow=()=>{if(!teaching())return null;const wd=wday(S.day);return SLOTS.find(s=>s[1]==wd&&S.t>=s[2]*60&&S.t<s[3]*60)||null};
const grade=sc=>sc>=70?["A",5]:sc>=60?["B",4]:sc>=50?["C",3]:sc>=45?["D",2]:sc>=40?["E",1]:["F",0];
const cgpa=()=>S.gpas.length?S.gpas.reduce((a,x)=>a+x.gpa,0)/S.gpas.length:0;
const klass=c=>c>=4.5?"First Class":c>=3.5?"Second Class Upper":c>=2.4?"Second Class Lower":c>=1.5?"Third Class":"Pass";
function nextClass(){const cs=courses();for(let o=0;o<7;o++){const wd=wday(S.day+o),L=SLOTS.filter(s=>s[1]==wd&&(o>0||s[2]*60>S.t)).sort((a,b)=>a[2]-b[2]);if(L.length&&semDay()+o<=21)return(o==0?"today":WD[wd])+" "+clk(L[0][2]*60)+" "+cs[L[0][0]].code}return""}
const note=t=>`<div style="width:100%;font-size:12px">${t}</div>`;
function lectureOpts(){if(S.expelled)return note("You have been expelled from SCU.");if(S.degree)return note("You have graduated. The hall is empty for you.");if(!S.docs.reg)return note("Register your courses at the Admin Block first.");
 const cs=courses(),sl=slotNow(),ei=EXD.indexOf(semDay());let h="";
 if(sl){const k=SLOTS.indexOf(sl),done=S.lastSlot==S.day+":"+k;h+=`<button class="opt" data-cl="${k}" ${done?"disabled":""}>Attend ${cs[sl[0]].code}<small>${done?"already attended":"until "+clk(sl[3]*60)+" · ⚡−15"}</small></button>`}
 else h+=note(teaching()?"No class right now. Next: "+(nextClass()||"none this week"):semDay()<=25?"No lectures. It is exam week.":"Semester break. No classes.");
 if(ei>=0&&S.ex[ei]==null)h+=`<button class="opt" data-exm="${ei}">Sit exam: ${cs[ei].code}<small>9:00 to 10:30 AM entry · ⚡−20</small></button>`;
 return h}
function libOpts(){if(S.degree||S.expelled)return"";if(!S.docs.matric)return note("The library gate needs a school ID.");return courses().map((c,i)=>`<button class="opt" data-sc="${i}">Study ${c.code}<small>Prep ${Math.round(S.prep[i])}% · ⚡−12 · 90min</small></button>`).join("")}
function attendClass(k){const s=SLOTS[k];if(!S.docs.reg)return toast("Register your courses first.");const sl=slotNow();if(!sl||SLOTS.indexOf(sl)!=k)return toast("That class is not on right now.");if(S.lastSlot==S.day+":"+k)return toast("You already attended.");if(S.en<15)return toast("Too tired. Eat or rest first.");
 S.en-=15;adv(s[3]*60-S.t);S.att[s[0]].a++;S.prep[s[0]]=Math.min(100,S.prep[s[0]]+3);S.xp+=6;S.lastSlot=S.day+":"+k;toast("You attended "+courses()[s[0]].code+". Notes taken.");hud();drawMap();$("#act").classList.remove("on")}
function studyCourse(i){if(!S.docs.matric)return toast("The library gate needs a school ID.");if(hr()>=16||hr()<8)return toast("The library is closed. Open 8am to 4pm.");if(S.en<12)return toast("Too tired to read.");
 S.en-=12;adv(90);S.prep[i]=Math.min(100,S.prep[i]+8);S.xp+=4;toast("Studied "+courses()[i].code+". Prep "+Math.round(S.prep[i])+"%.");hud();drawMap();$("#act").classList.remove("on")}
function sitExam(i){const t=S.t;if(!S.docs.reg)return toast("You are not registered.");if(S.ex[i]!=null)return toast("You already wrote this paper.");if(semDay()!=EXD[i])return toast("This exam is not today.");if(t<540)return toast("The exam starts at 9:00 AM.");if(t>=630)return toast("Too late. The hall is sealed.");if(S.en<10)return toast("Too tired to write.");
 const mult=Math.min(1,(660-Math.max(t,540))/90),a=S.att[i],pct=a.h?a.a/a.h*100:0;
 let sc=pct*.3+Math.min(100,S.prep[i])*.5+S.mood/100*10+Math.random()*15-(S.en<30?10:0);sc=Math.max(0,Math.min(100,sc))*mult;
 S.ex[i]=Math.round(sc);S.en=Math.max(0,S.en-20);adv(660-t);S.xp+=10;ev("Wrote "+courses()[i].code);toast("Paper submitted. Results come at the end of the semester.");hud();drawMap();$("#act").classList.remove("on")}
function schoolDay(){if(S.sem>8||S.degree||S.expelled)return;const ended=S.day-1,esd=(ended-1)%28+1;
 if(esd<=21)SLOTS.filter(s=>s[1]==wday(ended)).forEach(s=>S.att[s[0]].h++);
 const ei=EXD.indexOf(esd);if(ei>=0&&S.ex[ei]==null){S.ex[ei]=0;post("@you missed the "+courses()[ei].code+" exam 😬");ev("Missed the "+courses()[ei].code+" exam")}
 if(S.day%28==1&&S.day>1)endSem();
 if(S.sem<=8&&!S.degree){const ni=EXD.indexOf(semDay());if(ni>=0&&S.ex[ni]==null)toast("📝 Exam today: "+courses()[ni].code+" at 9 AM, Lecture Hall.")}}
function endSem(){const cs=courses(),gr=cs.map((c,i)=>{const sc=S.ex[i]==null?0:S.ex[i],g=grade(sc);return{code:c.code,sc,l:g[0],p:g[1]}});
 const gpa=Math.round(gr.reduce((a,x)=>a+x.p,0)/gr.length*100)/100;S.gpas.push({sem:S.sem,gpa,gr});
 post("SCU Results are out. Semester "+S.sem+" GPA: "+gpa.toFixed(2));ev("Semester "+S.sem+" GPA "+gpa.toFixed(2));
 let nt="";if(gpa>=4.5){tx(50000,"Scholarship");nt=" Scholarship: ₦50,000!"}else if(gpa>=3.5){tx(20000,"Merit award");nt=" Merit award: ₦20,000."}else if(gpa<1.5)nt=" Academic warning.";
 toast("📋 Semester "+S.sem+" results: GPA "+gpa.toFixed(2)+"."+nt);
 if(S.sem>=8){const cg=cgpa();if(cg<1){S.gpas.splice(-2);S.sem=7;ev("Did not graduate: repeat final year");toast("CGPA "+cg.toFixed(2)+". You must repeat the final year.")}
  else{S.degree={cls:klass(cg),cg:Math.round(cg*100)/100};S.sem=9;ev("Graduated with "+S.degree.cls);post("@you graduated with a "+S.degree.cls+" degree 🎓");toast("🎓 Graduation! "+S.degree.cls+" (CGPA "+S.degree.cg.toFixed(2)+")")}}
 else S.sem++;
 S.att=[0,1,2,3].map(()=>({a:0,h:0}));S.prep=[0,0,0,0];S.ex=[null,null,null,null];S.lastSlot=""}
NEW.Portal=()=>{const t=TAB.Portal||"tt";let h=tabs([["tt","Timetable"],["ex","Exams"],["rs","Results"]],t);
 if(S.expelled)return h+"<p>🚫 You have been expelled from SCU. Your records are closed.</p>";
 if(S.degree&&t!="rs")return h+`<p>🎓 You graduated with a <b>${S.degree.cls}</b> degree (CGPA ${S.degree.cg.toFixed(2)}).</p>`;
 const cs=courses(),sd=semDay();
 if(t!="rs")h+=`<p><b>Semester ${S.sem} of 8</b> · Day ${sd}/28<br>${sd<=21?"Classes":sd<=25?"Exam week":"Break"} · XP ${S.xp} · Mood ${S.mood}%<br>Charisma ${S.cha} · Gym ${S.gym.toFixed(1)}h</p>`;
 if(t=="tt"){h+=SLOTS.slice().sort((a,b)=>a[1]-b[1]||a[2]-b[2]).map(x=>`<p>${wday(S.day)==x[1]&&sd<=21?"▶ ":""}${WD[x[1]]} ${clk(x[2]*60)}–${clk(x[3]*60)}<br><b>${cs[x[0]].code}</b></p>`).join("");
  h+=cs.map((c,i)=>{const a=S.att[i];return`<p><b>${c.code}</b><br>Attendance ${a.a}/${a.h}${a.h?" ("+Math.round(a.a/a.h*100)+"%)":""}<br>Prep ${Math.round(S.prep[i])}%</p>`}).join("")}
 if(t=="ex"){const st=S.day-sd+1;h+=cs.map((c,i)=>{const d=st+EXD[i]-1,r=S.ex[i];return`<p><b>${c.code}</b> · ${WD[wday(d)]}, day ${d}<br>9:00 AM, Lecture Hall<br>${r==null?(sd>EXD[i]?"Missed":"Not written"):"Written ✅"}</p>`}).join("")+"<p>Enter by 10:30 AM. Late entry cuts your score. Missing an exam scores zero.</p>"}
 if(t=="rs"){h+=S.gpas.length?S.gpas.map(g=>`<p><b>Semester ${g.sem}</b> · GPA ${g.gpa.toFixed(2)}<br>${g.gr.map(x=>x.code+" "+x.l+" ("+x.sc+")").join("<br>")}</p>`).join("")+`<p><b>CGPA ${cgpa().toFixed(2)} / 5.00</b></p>`:"<p>No results yet. The first results come at the end of Semester 1.</p>";
  if(S.degree)h+=`<p>🎓 ${S.degree.cls}</p>`}
 return h};
/* ===== Underground life: gym, charisma, fraternities, rivals, police heat, fast-life contacts ===== */
BLD.push(
{id:"gym",n:"Campus Gym",e:"🏋️",x:20,y:44,col:"#3a6ea5",d:"Lift, sweat, be seen. Gym hours and charisma open doors.",a:[{l:"Workout",c:500,en:20,m:90,gym:1.5,cha:1,msg:"You trained hard. People noticed."},{l:"Heavy session",c:500,en:30,m:150,gym:2.5,cha:1,msg:"Muscles on fire. Respect earned."}]},
{id:"yard",n:"The Old Quarry",e:"🕳️",x:70,y:44,col:"#4a4a4a",d:"A rumoured hangout behind the football field. The wall always has ears."});
const RIVALS=[{n:"Lagoon Wolves"},{n:"The Red Tide"},{n:"Order of the Harmattan"}],CULTNAMES=["Night Sons of Coastville","The Salt Brothers","Harbour Kings","Brotherhood of the Lantern"],CULTREQ={cha:40,gym:20,cash:100000};
const YB=[{id:"slim",n:"Slim",e:"🕶️"},{id:"don",n:"Don Ola",e:"💎"},{id:"kay",n:"Baba Kay",e:"📱"}];
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const cstr=()=>S.cult&&S.cult.role=="leader"?S.cult.m*3+S.gym*.8+S.cult.rep*.5+S.cult.train:0;
const leak=(t,p=.35)=>{if(Math.random()<p)post(t)};
const ob=(k,l,sm,v)=>`<button class="opt" data-ug="${k}"${v!=null?` data-v="${v}"`:""}>${l}<small>${sm}</small></button>`;
function yardOpts(){if(S.expelled)return note("Security chases expelled students away from the quarry.");const c=S.cult;let h="";
 if(!c){h+=note(`Your standing: charisma ${S.cha}/${CULTREQ.cha} · gym ${S.gym.toFixed(1)}h/${CULTREQ.gym}h · heat ${S.heat}`);
  h+=ob("form","Form a fraternity",N(CULTREQ.cash)+" · needs charisma "+CULTREQ.cha+", gym "+CULTREQ.gym+"h");
  RIVALS.forEach((r,i)=>h+=ob("join","Ask to join "+r.n,"needs charisma 20, gym 10h",i));return h}
 if(c.role=="leader")return note(`${c.name} · members ${c.m} · rep ${c.rep} · strength ${Math.round(cstr())} · heat ${S.heat}${c.pro>=S.day?" · protected":""}`)+
  ob("recruit","Recruit members",N(5000)+" · ⚡−15 · 2h")+ob("train","Train the crew",N(10000)+" · ⚡−20 · 2h")+ob("weed","Sell weed","⚡−15 · 2h · heat +8")+ob("hard","Move harder product","⚡−20 · 2.5h · heat +18")+ob("tribute","Pay tribute to the big groups",N(30000)+" · 7 days of peace")+ob("bribe","Settle an officer",N(30000)+" · heat −30")+ob("disband","Disband","members scatter");
 return note(`${c.name} (member) · heat ${S.heat}`)+ob("errand","Run an errand","⚡−15 · 2h · heat +6")+ob("quit","Leave the group","they will remember")}
function ug(k,v){const c=S.cult,need=e=>{if(S.en<e){toast("Too tired.");return false}return true};
 if(S.expelled)return toast("Security chases you away.");
 if(k=="form"){if(c)return toast("You already belong to a group.");if(S.cha<CULTREQ.cha)return toast("Not enough charisma ("+S.cha+"/"+CULTREQ.cha+"). Mix with people.");if(S.gym<CULTREQ.gym)return toast("Not strong enough ("+S.gym.toFixed(1)+"/"+CULTREQ.gym+"h). Hit the gym.");if(S.money<CULTREQ.cash)return toast("You need "+N(CULTREQ.cash)+" to start.");
  tx(-CULTREQ.cash,"Fraternity startup");const nm=CULTNAMES[rnd(0,CULTNAMES.length-1)];S.cult={role:"leader",name:nm,m:3,rep:0,train:0,pro:0};S.heat+=15;
  post("Rumour: a new fraternity, "+nm+", is recruiting around campus. The wall has ears. 👀");ev("Founded "+nm);toast("You founded "+nm+". Campus X is already talking.")}
 else if(k=="join"){const r=RIVALS[+v];if(c)return toast("You already belong to a group.");if(S.cha<20||S.gym<10)return toast(r.n+" is not impressed (needs charisma 20, gym 10h).");
  if(Math.random()<.7){S.cult={role:"member",name:r.n,rid:+v,rep:0};S.heat+=5;leak("Rumour: new faces are being seen with "+r.n+" 👀",.5);ev("Joined "+r.n);toast("You are in. Do not talk too much.")}else{S.mood=Math.max(0,S.mood-5);toast("They laughed at you and sent you away.")}}
 else if(!c)return;
 else if(k=="recruit"&&c.role=="leader"){if(S.money<5000)return toast("Not enough money.");if(!need(15))return;tx(-5000,"Recruitment");S.en-=15;adv(120);const g=1+(S.cha>=60?1:0)+rnd(0,2);c.m=Math.min(30,c.m+g);c.rep+=1;S.heat+=4;leak("Rumour: "+c.name+" has been approaching freshers at the hostels 👀");toast("Recruited "+g+" new members.")}
 else if(k=="train"&&c.role=="leader"){if(S.money<10000)return toast("Not enough money.");if(!need(20))return;tx(-10000,"Crew training");S.en-=20;adv(120);c.train+=4;S.heat+=2;toast("The crew is sharper. Strength +4.")}
 else if(k=="weed"&&c.role=="leader"){if(!need(15))return;S.en-=15;adv(120);const g=rnd(8000,20000)+c.m*500;tx(g,"Weed sales");S.heat+=8;if(Math.random()<.15){S.heat+=12;post("Rumour: someone was seen selling weed near the quarry 🌿 👀")}toast("Business was quiet. You made "+N(g)+".")}
 else if(k=="hard"&&c.role=="leader"){if(!need(20))return;S.en-=20;adv(150);const g=rnd(25000,70000)+c.m*1000;tx(g,"Product sales");S.heat+=18;S.mood=Math.max(0,S.mood-4);if(Math.random()<.25){S.heat+=15;post("Rumour: students are talking about a plug behind the field 👀")}toast("Risky, but it paid: "+N(g)+".")}
 else if(k=="tribute"&&c.role=="leader"){if(S.money<30000)return toast("Not enough money.");tx(-30000,"Tribute");c.pro=S.day+7;toast("The big groups will leave you alone for a week.")}
 else if(k=="bribe"){if(S.money<30000)return toast("Not enough money.");tx(-30000,"Settled an officer");S.heat=Math.max(0,S.heat-30);S.corrupt++;toast("An officer lost your file. This is noted.")}
 else if(k=="disband"&&c.role=="leader"){S.cult=null;ev("Disbanded "+c.name);toast(c.name+" is no more.")}
 else if(k=="errand"&&c.role=="member"){if(!need(15))return;S.en-=15;adv(120);const g=rnd(3000,8000);tx(g,"Group errand");S.heat+=6;c.rep+=1;toast("Errand done. You earned "+N(g)+".")}
 else if(k=="quit"&&c.role=="member"){S.cult=null;S.mark=S.day+5;toast("You left. They will remember.")}
 hud();drawMap();$("#act").classList.remove("on")}
function underDay(){if(S.expelled)return;S.heat=Math.max(0,S.heat-(S.cult?2:3));const c=S.cult;
 if(c&&c.role=="leader"){tx(c.m*400,"Fraternity dues");
  if(c.pro<S.day&&Math.random()<.2+S.heat/400){const i=rnd(0,RIVALS.length-1),theirs=S.rs[i]+rnd(-10,10);
   if(cstr()>=theirs){c.rep+=3;S.rs[i]=Math.max(20,S.rs[i]-5);post("Clash: "+c.name+" stood their ground against "+RIVALS[i].n+" 👀");toast("⚔️ You repelled "+RIVALS[i].n+". Your rep grows.")}
   else{const loss=Math.max(1,Math.ceil(c.m*(.25+Math.random()*.25)));c.m-=loss;c.rep=Math.max(0,c.rep-3);S.en=Math.max(5,S.en-30);S.mood=Math.max(0,S.mood-15);
    if(c.m<=0){S.cult=null;S.en=10;S.mood=Math.max(0,S.mood-30);tx(-Math.min(S.money,30000),"Hospital bill");post(c.name+" has been wiped out by "+RIVALS[i].n+" 😶");ev(c.name+" was wiped out");toast("☠️ "+c.name+" was wiped out by "+RIVALS[i].n+". You barely escaped.")}
    else{post("Clash: "+RIVALS[i].n+" attacked "+c.name+". Members are hurt 👀");toast("⚔️ "+RIVALS[i].n+" hit you. You lost "+loss+" members.")}}}}
 else if(!c&&S.mark>=S.day&&Math.random()<.3){const l=Math.min(S.money,rnd(5000,20000));tx(-l,"Ambush");S.en=Math.max(5,S.en-25);S.mood=Math.max(0,S.mood-10);toast("You were ambushed on the way back. Lost "+N(l)+".")}
 else if(c&&c.role=="member"&&Math.random()<.06){const g=rnd(2000,6000);tx(g,"Share from the group");toast("Your group shared "+N(g)+" with you.")}
 S.rs=S.rs.map(v=>Math.min(95,v+(Math.random()<.3?1:0)));
 if(S.heat>=60&&Math.random()<(S.heat-50)/100)raid()}
function raid(){S.strikes++;S.heat=25;post("Police raid near the quarry. Names are being collected 🚔");
 if(S.strikes==1){const f=Math.min(S.money,20000);tx(-f,"Police fine");toast("🚔 Raid! A warning and a fine of "+N(f)+". Strike 1 of 3.")}
 else if(S.strikes==2){const b=Math.min(S.money,50000);tx(-b,"Bail");S.en=10;S.mood=Math.max(0,S.mood-20);if(S.cult&&S.cult.role=="leader")S.cult.m=Math.max(1,Math.floor(S.cult.m*.6));toast("🚔 Detained overnight. Bail "+N(b)+". Strike 2 of 3.")}
 else{S.expelled=true;S.cult=null;S.yb=null;ev("Expelled from SCU");post("SCU Senate: a student has been expelled over criminal activity 🚨");toast("🚨 Strike 3. You have been expelled from SCU.")}}

function ybAct(k,id){const y=YB.find(x=>x.id==id),key="yb:"+id;if(S.expelled)return;
 if(k=="drink"){if(S.money<2000)return toast("Not enough money.");tx(-2000,"Drinks with "+y.n);S.rel[key]=Math.min(100,(S.rel[key]||0)+10);S.cha=Math.min(100,S.cha+1);toast(y.n+" likes your energy.")}
 else{if(S.yb)return toast("You are already working with "+S.yb.n+".");if((S.ybcd[id]||0)>=S.day)return toast(y.n+": I go call you.");if(S.money<1000)return toast("Not enough money for airtime.");
  tx(-1000,"Airtime for "+y.n);S.ybcd[id]=S.day+1;const p=Math.min(.55,.2+S.cha/500+(S.rel[key]||0)/300);
  if(Math.random()<p){S.yb={id,n:y.n,lv:1,runs:0};S.heat+=3;leak("Rumour: some guys in the hostel suddenly have new phones 👀",.3);ev("Got an update from "+y.n);toast("📲 Update! "+y.n+" says: check your Plug app.")}
  else toast(["No update. Network no gree.","Slow down. Try again tomorrow.","He left you on read."][rnd(0,2)])}
 hud();$("#act").classList.remove("on")}
Object.assign(ACT,{
session(){if(!S.yb||S.expelled)return;if(S.en<25)return toast("Too tired to work.");const y=S.yb,r=Math.random(),pl=.08+y.lv*.04,pb=.42;S.en-=25;adv(240);y.runs++;S.heat+=8;let m=0,t="";
 if(r<pl){m=rnd(150000,600000);S.mood=Math.min(100,S.mood+15);t="💸 Big one. You are balling.";leak("@you posted new sneakers and a fresh phone 📸 👀",.5)}
 else if(r<pl+pb){m=rnd(8000,25000);t="Enough to sort basic needs."}else{S.mood=Math.max(0,S.mood-5);t="Nothing came in today."}
 if(m)tx(m,"Online work");if(y.runs%5==0&&y.lv<5){y.lv++;t+=" Level up."}toast(t+(m?" "+N(m):""))},
quitwork(){S.yb=null;toast("You stopped.")},
settle(){if(S.money<30000)return toast("Not enough money.");tx(-30000,"Settled an officer");S.heat=Math.max(0,S.heat-30);S.corrupt++;toast("An officer lost your file. This is noted.")}});
NEW.Plug=()=>!S.yb?"<p>No contact yet. Ask around at the Student Union.</p>":`<p><b>${S.yb.n}</b> · Level ${S.yb.lv} · ${S.yb.runs} sessions<br>Heat ${S.heat}/100 · Strikes ${S.strikes}/3<br>Each session: ⚡−25 · 4h. Luck decides: some days big, some days basic, many days nothing.</p><p>${btn("session","Work a session")}${btn("quitwork","Stop")}</p>`;
NEW.Police=()=>`<p>Status: <b>${S.heat>=60?"Wanted":S.heat>=30||S.corrupt>=2?"Watched":"Clear"}</b><br>Heat ${S.heat}/100 · Strikes ${S.strikes}/3<br>${S.expelled?"You have been expelled.":"Three strikes and SCU expels you."}</p><p>${btn("settle","Settle an officer ₦30,000")}</p>`;
/* ===== 3D campus map ===== */
const BPL={boys:[-7.5,-4],girls:[-2.5,-4],admin:[2.5,-4],lecture:[7.5,-4],library:[-7.5,0],cafe:[-2.5,0],market:[2.5,0],union:[7.5,0],gym:[-7.5,4],yard:[-2.5,4],lux1:[2.5,4],lux2:[7.5,4]};
const BPP={boys:[-3.6,-7.5],girls:[0,-7.5],admin:[3.6,-7.5],lecture:[-3.6,-2.5],library:[0,-2.5],gym:[3.6,-2.5],cafe:[-3.6,2.5],market:[0,2.5],union:[3.6,2.5],yard:[-3.6,7.5],lux1:[0,7.5],lux2:[3.6,7.5]};
const BHT={boys:2.4,girls:2.4,admin:2.1,lecture:1.9,library:2.4,cafe:1.3,market:1.1,union:1.8,gym:2.1,yard:1.3,lux1:3.9,lux2:3.5};
let MG=null;
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()};
function spr(w,h,cw,ch,draw){const cv=document.createElement("canvas");cv.width=cw;cv.height=ch;const c=cv.getContext("2d"),tx=new THREE.CanvasTexture(cv),sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tx,transparent:true,depthTest:false}));sp.scale.set(w,h,1);sp.renderOrder=10;sp.userData.up=t=>{c.clearRect(0,0,cw,ch);draw(c,t,cw,ch);tx.needsUpdate=true};return sp}
const dBub=(c,t,w,h)=>{c.fillStyle="#fbf8f0";c.beginPath();c.arc(w/2,h/2,w/2-4,0,7);c.fill();c.lineWidth=4;c.strokeStyle="rgba(23,37,42,.35)";c.stroke();c.font=(w*.5)+"px sans-serif";c.textAlign="center";c.textBaseline="middle";c.fillText(t,w/2,h/2+3)};
const dLab=(c,t,w,h)=>{c.font="700 30px sans-serif";const tw=c.measureText(t).width+30;c.fillStyle="rgba(251,248,240,.92)";rr(c,(w-tw)/2,12,tw,h-24,16);c.fill();c.fillStyle="#17252a";c.textAlign="center";c.textBaseline="middle";c.fillText(t,w/2,h/2)};
function mkB(b){const g=new THREE.Group(),A=(w,h,d,c,x,y,z,o)=>{const m=box(w,h,d,c,x,y,z,o);g.add(m);return m},col=parseInt(b.col.slice(1),16),dark=0x2b2b2b;
 const win=(n,rows,y0,z)=>{for(let r=0;r<rows;r++)for(let i=0;i<n;i++)A(.26,.28,.04,0xcfeaff,(i-(n-1)/2)*.5,y0+r*.55,z)},door=()=>A(.4,.7,.05,0x3b2a1a,0,0,1.02);
 switch(b.id){
 case"boys":A(2.2,2.4,2,col,0,0,0);A(2.3,.12,2.1,dark,0,2.4,0);win(4,4,.9,1.02);door();A(.05,.9,.05,0xffffff,1.45,0,1.2);A(.05,.9,.05,0xffffff,1.45,0,.4);A(.05,.05,.85,0xffffff,1.45,.9,.8);break;
 case"girls":A(2.2,2.4,2,col,0,0,0);A(2.3,.12,2.1,0xf7d6e6,0,2.4,0);win(4,4,.9,1.02);door();A(2.2,.08,.4,0xf7d6e6,0,1.2,1.2);A(2.2,.3,.05,0xd47aa6,0,1.2,1.4);[-.7,0,.7].forEach((x,i)=>A(.25,.2,.25,[0xf06292,0xffd54f,0xba68c8][i],x,0,1.35));break;
 case"admin":A(2.2,1.9,2,0xcfc7b0,0,0,0);A(2.4,.14,2.2,0x6b705c,0,1.9,0);[-.8,-.27,.27,.8].forEach(x=>A(.14,1.9,.14,0xf2eee0,x,0,1.1));A(2.2,.25,.1,0xe8e2cf,0,1.9,1.1);door();break;
 case"lecture":A(2.2,1.8,2,col,0,0,0);A(2.4,.12,2.2,dark,0,1.8,0);[-.8,0,.8].forEach(x=>A(.16,1.8,.16,0xe9e9e9,x,0,1.15));A(1.8,.1,.4,0xbbbbbb,0,0,1.25);win(4,2,.9,1.02);door();break;
 case"library":{A(2.2,1.6,2,col,0,0,0);A(2.3,.1,2.1,dark,0,1.6,0);const d=new THREE.Mesh(new THREE.SphereGeometry(.75,16,10,0,Math.PI*2,0,Math.PI/2),mat(0xd9d2ea));d.position.set(0,1.7,0);g.add(d);win(3,2,.6,1.02);door();break}
 case"cafe":A(2.2,1.2,2,col,0,0,0);A(2.3,.08,2.1,dark,0,1.2,0);A(2.3,.08,.7,0xe4572e,0,.95,1.25);[-.6,.6].forEach(x=>A(.35,.04,.35,0xffffff,x,.35,1.5));win(3,1,.6,1.02);door();break;
 case"market":A(2.2,.05,2,0xb89b6a,0,0,0);[[-.55,-.5],[.55,-.5],[-.55,.5],[.55,.5]].forEach((q,k)=>{A(.6,.5,.4,0x8b6b4a,q[0],0,q[1]);A(.8,.06,.6,[0xe4572e,0x2a9d8f,0xf2a900,0x5b2a86][k],q[0],.9,q[1])});break;
 case"union":A(2.2,1.7,2,col,0,0,0);A(2.3,.1,2.1,dark,0,1.7,0);A(1.2,.2,.6,0x222222,0,0,1.3);[-.7,.7].forEach(x=>A(.2,.5,.2,0x111111,x,.2,1.3));win(3,2,.7,1.02);break;
 case"gym":A(2.2,1.6,2,col,0,0,0);A(2.3,.1,2.1,dark,0,1.6,0);A(.9,.1,.1,0x333333,0,1.85,1.05);[-.5,.5].forEach(x=>A(.25,.35,.25,0x333333,x,1.72,1.05));win(3,2,.5,1.02);door();break;
 case"yard":A(2.2,.05,2,0x3a3a3a,0,0,0);A(.5,.4,.4,0x6b6b6b,-.6,0,-.4);A(.4,.3,.5,0x777777,.7,0,-.5);A(.12,1.2,.12,0x4a3a2a,.5,0,.2);A(.5,.08,.08,0x4a3a2a,.6,1,.2);A(.22,.3,.22,0xe4572e,-.3,0,.5);break;
 case"lux1":case"lux2":{const h=b.id=="lux1"?3.6:3.2;A(1.8,h,1.7,col,0,0,0);A(1.9,.12,1.8,0xf2c94c,0,h,0);win(3,Math.floor(h/.55)-1,.6,.88);A(.5,.8,.05,0x222222,0,0,.88);break}
 default:A(2.2,1.6,2,col,0,0,0)}
 g.userData.bid=b.id;const ht=BHT[b.id]||2,bub=spr(.95,.95,128,128,dBub),lab=spr(2.6,.5,320,64,dLab);bub.position.set(0,ht+.95,0);lab.position.set(0,ht+.35,0);bub.userData.bid=lab.userData.bid=b.id;g.add(bub,lab);MG.labs[b.id]={bub,lab};return g}
function buildMap(port){const bl=MG.bl;bl.children.slice().forEach(c=>{bl.remove(c);c.traverse(o=>{if(o.geometry)o.geometry.dispose()})});MG.labs={};
 const gnd=new THREE.Mesh(new THREE.PlaneGeometry(90,90),mat(0xa9cc7b));gnd.rotation.x=-Math.PI/2;bl.add(gnd);
 const P=port?BPP:BPL,SZ=port?10.9:7.3,rc=0xcfc09a;
 if(port){[-5,0,5].forEach(z=>bl.add(box(11,.03,.9,rc,0,0,z)));[-1.8,1.8].forEach(x=>bl.add(box(.9,.03,17,rc,x,0,0)))}
 else{[-2,2].forEach(z=>bl.add(box(21,.03,1.1,rc,0,0,z)));[-5,0,5].forEach(x=>bl.add(box(1.1,.03,13,rc,x,0,0)))}
 bl.add(box(70,.05,.9,0xe8d8b0,0,0,SZ-.45));bl.add(box(70,.05,16,0x4fa3b5,0,-.01,SZ+8));bl.add(box(1.4,.08,3.2,0x8b6b4a,port?3:-4,0,SZ+1.2));
 (port?[[-5.8,-9.5],[5.8,-9.5],[-5.8,9],[5.8,9]]:[[-10.5,6],[10.5,6],[-10.5,-6],[10.5,-6]]).forEach(q=>{const t=box(.14,1.1,.14,0x7a5c36,q[0],0,q[1]);bl.add(t);bl.add(box(.9,.35,.9,0x2e8b57,q[0],1.1,q[1]))});
 BLD.forEach(b=>{const pp=P[b.id];if(!pp)return;const g=mkB(b);g.position.set(pp[0],0,pp[1]);bl.add(g)})}
function mcam(){const w=MG.cv.clientWidth,h=MG.cv.clientHeight;if(!w||!h)return;MG.r.setSize(w,h,false);const cam=MG.cam,asp=w/h;cam.aspect=asp;cam.updateProjectionMatrix();
 const port=asp<1,W=port?11.5:20,Dp=port?17:13,th=Math.tan(cam.fov*Math.PI/360),pit=.88,dw=W/(2*th*asp),dv=Dp*.9/(2*th),dist=Math.max(dw,dv)*1.08;
 cam.position.set(Math.sin(MG.yaw)*Math.cos(pit)*dist,Math.sin(pit)*dist,Math.cos(MG.yaw)*Math.cos(pit)*dist+.5);cam.lookAt(0,0,.5)}
function mtap(cx,cy){const b=MG.cv.getBoundingClientRect();MG.rc.setFromCamera(new THREE.Vector2((cx-b.left)/b.width*2-1,-((cy-b.top)/b.height*2-1)),MG.cam);
 for(const h of MG.rc.intersectObjects(MG.bl.children,true)){let o=h.object;while(o&&!o.userData.bid)o=o.parent;if(o){travelTo(BLD.find(x=>x.id==o.userData.bid));return}}}
function mloop(){if(cur!="map"||!MG){if(MG)MG.run=false;return}MG.r.render(MG.sc,MG.cam);requestAnimationFrame(mloop)}
function initMap(){if(MG)return true;if(typeof THREE==="undefined")return false;
 const cv=document.createElement("canvas");cv.style.cssText="position:absolute;inset:0;width:100%;height:100%;touch-action:none;display:block";$("#map").insertBefore(cv,$("#mapin"));
 const r=new THREE.WebGLRenderer({canvas:cv,antialias:true});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
 const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(46,1,.1,200),amb=new THREE.AmbientLight(0xffffff,.85),sun=new THREE.DirectionalLight(0xffffff,.55);sun.position.set(6,12,5);sc.add(amb);sc.add(sun);
 MG={r,sc,cam,cv,amb,bl:new THREE.Group(),yaw:0,port:null,run:false,labs:{},rc:new THREE.Raycaster()};sc.add(MG.bl);
 let dn=null;cv.addEventListener("pointerdown",e=>{dn={x:e.clientX,y:e.clientY,yaw:MG.yaw,m:false};cv.setPointerCapture(e.pointerId)});
 cv.addEventListener("pointermove",e=>{if(!dn)return;const dx=e.clientX-dn.x;if(Math.abs(dx)>8||Math.abs(e.clientY-dn.y)>8)dn.m=true;if(dn.m){MG.yaw=Math.max(-1,Math.min(1,dn.yaw+dx*.006));mcam()}});
 cv.addEventListener("pointerup",e=>{if(dn&&!dn.m)mtap(e.clientX,e.clientY);dn=null});
 window.addEventListener("resize",()=>{if(cur=="map")drawMap()});return true}
function drawMap(){if(!initMap()){$("#mapin").style.display="";return drawMap2D()}
 $("#mapin").innerHTML="";$("#mapin").style.display="none";
 const w=MG.cv.clientWidth||window.innerWidth,h=MG.cv.clientHeight||window.innerHeight,port=w/h<1;
 if(MG.port!==port){MG.port=port;buildMap(port)}
 const hr=Math.floor(S.t/60);BLD.forEach(b=>{const L=MG.labs[b.id];if(!L)return;const n=(b.id.length*7+hr*3)%5,lock=b.h&&!hostelRule(b).ok;L.bub.userData.up(lock?"🔒":b.e);L.lab.userData.up(b.n+" · "+n+" inside")});
 const night=hr>=19||hr<6;MG.sc.background=new THREE.Color(night?0x1b2a49:S.wx=="rain"?0x9fb3bf:0xbcd9e8);MG.amb.intensity=night?.5:.85;
 mcam();if(!MG.run){MG.run=true;mloop()}}
/* ===== Room types, indoor buildings, travel, timed activities, move mode, cars, businesses ===== */
const MOVE={on:false,sel:null};
const RTY={
boys:{w:6,d:6,floor:[0xc9a56a,0xb08d57],wall:0xb9c4d6,trim:0x4a5a73,sign:"#1d3557",res:[[4,0],[0,5],[4,5]],deco:"boys"},
girls:{w:6,d:6,floor:[0xf3d9e3,0xe9c3d3],wall:0xf7d6e6,trim:0xd47aa6,sign:"#a23b72",res:[[4,0],[0,5],[4,5]],deco:"girls",curt:0xf7b6d2},
lux1:{w:10,d:8,h:3,floor:[0xe9e6df,0xd5d0c4],wall:0xe9edf2,trim:0xf2c94c,sign:"#1b2a49",res:[[8,0],[0,7],[8,7]],deco:"lux1",curt:0xc9a24a},
lux2:{w:10,d:8,h:3,floor:[0xcfd8dc,0xb8c4cb],wall:0xf3ecdf,trim:0xc9a24a,sign:"#3a2a14",res:[[8,0],[0,7],[8,7]],deco:"lux2",curt:0x2a7f8f}};
const hostelOf=()=>S.visit?STU.find(x=>x.id==S.visit).home:S.home;
const rtOf=()=>S.in?Object.assign({res:[],h:2.6},INT[S.in]):(RTY[hostelOf()]||RTY.boys);
const rtKey=()=>S.in?"in:"+S.in:hostelOf();
function calcRT(){const rt=rtOf();RW=rt.w/2;RD=rt.d/2;GW=rt.w;GD=rt.d;RES=rt.res;return rt}
function setRT(){const rt=calcRT();GL.rt=rt;setShell(rt,rtKey())}
function setShell(rt,key){if(GL.key===key)return;GL.key=key;
 if(GL.walls){GL.sc.remove(GL.walls);GL.walls.traverse(o=>{if(o.geometry)o.geometry.dispose()})}
 if(GL.fl){GL.sc.remove(GL.fl);GL.fl.geometry.dispose()}
 const W=rt.w,D=rt.d,H=rt.h||2.4,hex=c=>"#"+c.toString(16).padStart(6,"0"),ct=document.createElement("canvas");ct.width=ct.height=64;const cx=ct.getContext("2d");
 cx.fillStyle=hex(rt.floor[0]);cx.fillRect(0,0,64,64);cx.fillStyle=hex(rt.floor[1]);cx.fillRect(0,0,32,32);cx.fillRect(32,32,32,32);
 const ft=new THREE.CanvasTexture(ct);ft.wrapS=ft.wrapT=THREE.RepeatWrapping;ft.repeat.set(W/2,D/2);ft.magFilter=THREE.NearestFilter;
 const fl=new THREE.Mesh(new THREE.PlaneGeometry(W,D),new THREE.MeshLambertMaterial({map:ft}));fl.rotation.x=-Math.PI/2;GL.sc.add(fl);GL.fl=fl;
 const wc=rt.wall,walls=new THREE.Group(),pl=(w,h,c,x,y,z,ry)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:c}));m.position.set(x,y,z);m.rotation.y=ry||0;walls.add(m);return m},A=(w,h,d,c,x,y,z)=>walls.add(box(w,h,d,c,x,y,z));
 A(W+.4,H,.2,wc,0,0,-D/2-.1);A(W+.4,H,.2,wc,0,0,D/2+.1);A(.2,H,D,wc,-W/2-.1,0,0);A(.2,H,D,wc,W/2+.1,0,0);
 if(rt.trim){A(W,.12,.06,rt.trim,0,0,-D/2+.03);A(.06,.12,D,rt.trim,-W/2+.03,0,0);A(.06,.12,D,rt.trim,W/2-.03,0,0)}
 const wins=Math.max(1,Math.round(W/3.2));
 for(let i=0;i<wins;i++){const x=(i-(wins-1)/2)*(W/wins)*.9;if(wins%2&&i==(wins-1)/2)continue;pl(.9,.7,0xbfe6f5,x,H*.55,-D/2+.02);if(rt.curt){A(.3,1.1,.08,rt.curt,x-.62,.75,-D/2+.07);A(.3,1.1,.08,rt.curt,x+.62,.75,-D/2+.07)}}
 [-D/4,D/4].forEach(z=>pl(.9,.7,0xbfe6f5,-W/2+.02,H*.55,z,Math.PI/2));[-D/3,D/3].forEach(z=>pl(.9,.7,0xbfe6f5,W/2-.02,H*.55,z,-Math.PI/2));
 A(.06,1.9,.9,0x6b4423,W/2-.05,0,0);A(.05,.08,.08,0xf2a900,W/2-.1,.95,.3);
 const dc=rt.deco;
 if(dc=="boys"){pl(1.1,1.5,0x2e7d32,-W/2+.03,1.5,-1,Math.PI/2);pl(.1,1.4,0xffffff,-W/2+.04,1.5,-1,Math.PI/2);A(.3,.06,1.1,0x6b4a2f,-W/2+.18,1.3,1.6);[0,1,2].forEach(i=>A(.12,.22,.12,0xf2c94c,-W/2+.18,1.36,1.2+i*.35));pl(.6,.35,0xe4572e,-1.8,1.9,-D/2+.03);A(2.6,.02,2.2,0x3a6ea5,0,0,.4)}
 if(dc=="girls"){A(.06,1.3,.7,0xd47aa6,-W/2+.05,.7,1.8);pl(.6,1.2,0xdff3f8,-W/2+.09,1.35,1.8,Math.PI/2);for(let i=0;i<12;i++)A(.07,.07,.07,0xfff2a8,-W/2+.5+i*(W-1)/11,H-.3,-D/2+.1);A(2.4,.02,2.4,0xf0a6c3,0,0,.4)}
 if(dc=="lux1"||dc=="lux2"){[-D/2-.1,D/2+.1].forEach(z=>A(W+.4,.14,.22,rt.trim,0,H-.14,z));A(.22,.14,D,rt.trim,-W/2-.1,H-.14,0);A(.22,.14,D,rt.trim,W/2+.1,H-.14,0);
  const chd=new THREE.Mesh(new THREE.SphereGeometry(.35,10,8),new THREE.MeshBasicMaterial({color:0xfff2b0}));chd.position.set(0,H-.6,0);walls.add(chd);A(.04,.5,.04,0xc9a24a,0,H-.5,0)}
 if(dc=="lux1"){A(5.5,.015,3.9,0xc9a24a,0,0,.2);A(5.2,.02,3.6,0x8b1e2d,0,0,.2)}
 if(dc=="lux2"){pl(4,1.6,0x7ec8e3,2.5,H*.6,-D/2+.025);pl(4,.15,0x2a7f8f,2.5,H*.6-.7,-D/2+.03);A(5.2,.02,3.6,0x2a7f8f,0,0,.2)}
 if(dc=="gym")pl(5,1.4,0xdff3f8,0,1.3,-D/2+.03);
 if(dc=="union"){[-3,0,3].forEach((x,i)=>A(.5,.12,.5,[0xe4572e,0x2a9d8f,0xf2a900][i],x,H-.2,-D/2+.3))}
 const sign=pl(2.6,.65,0xffffff,0,H*.8,-D/2+.045);GL.sign=sign;
 GL.sc.add(walls);GL.walls=walls}
/* ----- indoor models and building interiors ----- */
let IB=[];
const IM={
desk2:()=>[box(.9,.06,.5,0xd9b88a,0,.6,0),...[[-.4,-.2],[.4,-.2],[-.4,.2],[.4,.2]].map(q=>box(.05,.6,.05,0x8b6b4a,q[0],0,q[1])),box(.4,.05,.4,0x3a6ea5,0,.4,.55),box(.4,.4,.05,0x3a6ea5,0,.45,.77)],
board:()=>[box(2.6,1.1,.06,0xffffff,0,.9,0),box(2.7,.08,.1,0x555555,0,.85,0)],
lectern:()=>[box(.7,1,.45,0x6b4a2f,0,0,0)],
counter:c=>[box(2.6,.9,.7,c||0x8b6b4a,0,0,0),box(2.7,.06,.8,0xe0d0ae,0,.9,0),box(.5,.4,.05,0x333333,.7,.96,-.1)],
table4:()=>[box(1,.06,1,0xb8905a,0,.6,0),box(.08,.6,.08,0x6b4a2f,0,0,0),...[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]].map(q=>box(.3,.4,.3,0x333333,q[0],0,q[1]))],
shelf2:()=>[box(1.8,2,.4,0xcaa979,0,0,0),...[.5,1,1.5].map(y=>box(1.7,.05,.38,0x8b6b4a,0,y,.02)),...[0,1,2,3,4,5].map(i=>box(.12,.35,.3,[0xc0392b,0x2980b9,0x27ae60,0xf1c40f][i%4],-.7+i*.28,.55,.03))],
gbench:()=>[box(1.8,.12,.5,0x222222,0,.4,0),box(.08,.4,.08,0x555555,-.7,0,0),box(.08,.4,.08,0x555555,.7,0,0),box(1.9,.08,.08,0x999999,0,.95,-.35),box(.08,.35,.35,0x333333,-.9,.78,-.35),box(.08,.35,.35,0x333333,.9,.78,-.35)],
treadmill:()=>[box(.6,.15,1.5,0x2b2b2b,0,.2,0),box(.05,1,.05,0x888888,-.25,.2,-.6),box(.05,1,.05,0x888888,.25,.2,-.6),box(.6,.1,.1,0x444444,0,1.1,-.6),box(.5,.25,.05,0x2a6fdb,0,.85,-.6)],
rack:()=>[box(1.6,.9,.4,0x333333,0,0,0),...[-.6,-.2,.2,.6].map(x=>box(.3,.3,.08,0x555555,x,.95,0))],
stall:c=>[box(1.6,.5,.7,0x8b6b4a,0,0,0),box(1.8,.06,1,c||0xe4572e,0,1.4,0),box(.06,1.4,.06,0x6b4a2f,-.8,0,.4),box(.06,1.4,.06,0x6b4a2f,.8,0,.4),box(.3,.2,.3,0xf2a900,-.4,.5,0),box(.3,.25,.3,0x2a9d8f,.3,.5,0)],
stage:()=>[box(3.2,.3,1.4,0x222222,0,0,0),box(.4,1,.4,0x111111,-1.6,0,0),box(.4,1,.4,0x111111,1.6,0,0),box(.05,1.3,.05,0x888888,0,.3,.3),box(.1,.1,.1,0x111111,0,1.6,.3)],
sofa:()=>MOD.sofa(),lsofa:()=>MOD.lsofa(),
plant:()=>[box(.3,.3,.3,0x8b5a2b,0,0,0),box(.5,.7,.5,0x2e8b57,0,.3,0)],
recep:()=>[box(2.4,.9,.7,0x6b4a2f,0,0,0),box(2.5,.06,.8,0xdcc9a0,0,.9,0),box(.5,.4,.05,0x333333,.6,.96,-.1)],
rock:()=>[box(.7,.5,.6,0x6b6b6b,0,0,0),box(.4,.3,.4,0x777777,.3,.5,.1)],
barrel:()=>[box(.45,.7,.45,0xe4572e,0,0,0),box(.3,.25,.3,0xffb347,0,.7,0)],
tree:()=>[box(.14,1.4,.14,0x4a3a2a,0,0,0),box(.6,.08,.08,0x4a3a2a,.25,1.1,0),box(.5,.08,.08,0x4a3a2a,-.2,.8,0)],
crate:()=>[box(.6,.6,.6,0xb8905a,0,0,0)],
qbench:()=>[box(1.8,.1,.5,0x8b6b4a,0,.4,0),box(.08,.4,.08,0x555555,-.8,0,0),box(.08,.4,.08,0x555555,.8,0,0),box(1.8,.45,.08,0x8b6b4a,0,.5,-.22)],
vend:()=>[box(.8,1.7,.6,0xc0392b,0,0,0),box(.6,.9,.05,0x1f2d3a,0,.6,.31)],
cook:()=>[box(2,.9,.7,0xdddddd,0,0,0),box(.5,.3,.5,0x555555,-.4,.9,0),box(.5,.3,.5,0x555555,.4,.9,0)],
notice:()=>[box(1.4,.9,.05,0xc9a56a,0,1,0),box(.3,.25,.02,0xffffff,-.4,1.3,.04),box(.3,.25,.02,0xffe38a,.1,1.2,.04),box(.3,.25,.02,0xbfe6f5,.45,1.4,.04)]};
const mkRows=(m,xs,zs,fw,fd)=>{const L=[];zs.forEach(z=>xs.forEach(x=>L.push([m,x,z,fw,fd])));return L};
const INT={
lecture:{w:10,d:8,floor:[0xd9d2c0,0xcfc7b0],wall:0xe9e6dc,sign:"#0f4c5c",npc:8,items:[["board",0,-3.9,0,0],["lectern",0,-2.9,.8,.5]].concat(mkRows("desk2",[-3,-1,1,3],[-1.2,.6,2.4],1,1.3))},
library:{w:10,d:8,floor:[0xcdbf9f,0xc2b390],wall:0xe6dcc6,sign:"#5b2a86",npc:6,items:[...[-3.6,-1.2,1.2,3.6].map(x=>["shelf2",x,-3.6,1.8,.5]),["table4",-3,.5,2.2,2.2],["table4",0,.5,2.2,2.2],["plant",-4.3,-3.2,.5,.5],["plant",4.3,-3.2,.5,.5]]},
cafe:{w:9,d:7,floor:[0xf0d9a8,0xe6c98a],wall:0xf6ecd0,sign:"#a05a00",npc:6,items:[["counter",0,-2.8,2.6,.8,0xc0762b],["cook",-3,-2.9,2,.7],["vend",3.5,-2.9,.8,.6],["table4",-2.5,-.2,2.2,2.2],["table4",.3,-.2,2.2,2.2],["table4",-2.5,2.1,2.2,2.2],["table4",.3,2.1,2.2,2.2]]},
market:{w:11,d:8,floor:[0xb89b6a,0xa88a5a],wall:0xf0e6d0,sign:"#2e6b3f",npc:7,items:[["stall",-3.5,-2.7,1.8,1,0xe4572e],["stall",0,-2.7,1.8,1,0x2a9d8f],["stall",3.5,-2.7,1.8,1,0xf2a900],["stall",-3.5,1.2,1.8,1,0x5b2a86],["stall",0,1.2,1.8,1,0x3a6ea5],["stall",3.5,1.2,1.8,1,0xc14a7e],["crate",-4.8,3.2,.6,.6],["crate",4.6,3.2,.6,.6]]},
union:{w:10,d:8,floor:[0x3b3345,0x332c3d],wall:0x6b5b7b,sign:"#7a1f5c",deco:"union",npc:8,items:[["stage",0,-3.2,3.4,1.5],["sofa",-3.2,1.2,1.9,.9],["sofa",-.8,1.2,1.9,.9],["table4",2.6,.4,2.2,2.2],["vend",-4.5,-1,.6,.8]]},
gym:{w:10,d:8,floor:[0x4a4a4a,0x3f3f3f],wall:0xcfd8e3,sign:"#1d3557",deco:"gym",npc:6,items:[...[-3.6,-2.4,-1.2].map(x=>["treadmill",x,-3,.8,1.6]),["gbench",1.5,-1.2,1.9,.6],["gbench",1.5,.8,1.9,.6],["rack",-3.4,.4,1.7,.5],["rack",-3.4,2.2,1.7,.5],["gbench",1.5,2.7,1.9,.6]]},
admin:{w:9,d:7,floor:[0xd8d2c0,0xcdc6b0],wall:0xeee8d6,sign:"#4f5b3a",npc:5,items:[["counter",-2.2,-2.7,2.6,.8,0x6b705c],["counter",2.2,-2.7,2.6,.8,0x3a6ea5],["notice",0,-3.4,0,0],["qbench",-2.5,.2,1.8,.5],["qbench",-2.5,1.4,1.8,.5],["qbench",-2.5,2.6,1.8,.5],["plant",-4,-3,.5,.5],["plant",4,-3,.5,.5]]},
yard:{w:9,d:7,floor:[0x3a3a3a,0x333333],wall:0x4a4a4a,sign:"#222222",npc:3,items:[["rock",-3,-2,.8,.7],["rock",3,-2.4,.8,.7],["rock",-2.2,2.2,.8,.7],["rock",1.8,2.4,.8,.7],["barrel",-.5,-1,.5,.5],["barrel",.8,-.5,.5,.5],["tree",-3.6,.4,.3,.3],["tree",3.4,1.2,.3,.3],["crate",0,2.6,.6,.6]]},
boys:{w:8,d:6,floor:[0xc9a56a,0xb08d57],wall:0xb9c4d6,sign:"#1d3557",npc:4,items:[["recep",0,-2.2,2.5,.8],["sofa",-2.5,.9,1.9,.9],["sofa",-2.5,-.9,1.9,.9],["notice",-3.9,0,0,0],["plant",3.3,-2.4,.5,.5],["plant",-3.3,-2.4,.5,.5]]},
girls:{w:8,d:6,floor:[0xf3d9e3,0xe9c3d3],wall:0xf7d6e6,sign:"#a23b72",npc:4,items:[["recep",0,-2.2,2.5,.8],["sofa",-2.5,.9,1.9,.9],["sofa",-2.5,-.9,1.9,.9],["plant",3.3,-2.4,.5,.5],["plant",-3.3,-2.4,.5,.5],["plant",3.3,2.4,.5,.5]]},
lux1:{w:10,d:8,h:3,floor:[0xe9e6df,0xd5d0c4],wall:0xe9edf2,trim:0xf2c94c,deco:"lux1",sign:"#1b2a49",npc:4,items:[["recep",0,-3,2.5,.8],["lsofa",-3,1,2,1],["lsofa",-3,3,2,1],["plant",4,-3.2,.5,.5],["plant",-4.3,-3.2,.5,.5]]},
lux2:{w:10,d:8,h:3,floor:[0xcfd8dc,0xb8c4cb],wall:0xf3ecdf,trim:0xc9a24a,deco:"lux2",sign:"#3a2a14",npc:4,items:[["recep",0,-3,2.5,.8],["lsofa",-3,1,2,1],["lsofa",-3,3,2,1],["plant",4,-3.2,.5,.5],["plant",-4.3,-3.2,.5,.5]]}};
const NPCPOOL=["Dayo","Yusuf","Hauwa","Bisi","Kemi","Tola","Segun","Musa","Femi","Aisha","Chioma","Uche"];
function inPersons(){const b=S.in,d=INT[b],pool=b=="boys"?MALE:b=="girls"?FEMALE:NPCPOOL;let sd=hsh(b+"|"+S.day+"|"+Math.floor(S.t/60));const rs=()=>{sd=(sd*9301+49297)%233280;return sd/233280},L=[];
 const place=()=>{for(let k=0;k<40;k++){const x=(rs()*2-1)*(RW-1.2),z=(rs()*2-1)*(RD-1.2);if(!blocked(x,z)&&Math.hypot(x-(RW-.8),z)>1.8&&!L.some(p=>Math.hypot(p.spot[0]-x,p.spot[1]-z)<1.1))return[x,z]}return null};
 for(let i=0;i<(d.npc||0);i++){const sp=place();if(!sp)continue;const nm=pool[Math.floor(rs()*pool.length)];L.push({n:nm,tr:TRS[Math.floor(rs()*TRS.length)],key:"npc:"+nm,g:(b=="girls"||FEMALE.includes(nm)||["Hauwa","Bisi","Kemi","Tola","Aisha","Chioma"].includes(nm))?"f":"m",host:true,spot:sp})}
 if(b=="union")YB.filter(y=>ybHere(y.id)).forEach(y=>{const sp=place();if(sp)L.push({n:y.n,tr:"Fast life",key:"yb:"+y.id,g:"m",host:true,yb:y.id,spot:sp})});
 return L}
function buildInterior(g){IB=[];if(!S.in)return;INT[S.in].items.forEach(it=>{const gp=new THREE.Group();IM[it[0]](it[5]).forEach(m=>gp.add(m));gp.position.set(it[1],0,it[2]);g.add(gp);if(it[3])IB.push([it[1]-it[3]/2,it[2]-it[4]/2,it[1]+it[3]/2,it[2]+it[4]/2])})}
/* ----- Student Union: fast-life contacts are not always around ----- */
const ybHere=id=>{const h=hr();return h>=15&&h<23&&(S.day*5+hsh(id))%3==0};
function unionOpts(){if(S.expelled)return"";if(S.yb)return note("You are working with "+S.yb.n+". Open the Plug app.");const here=YB.filter(y=>ybHere(y.id));
 if(!here.length)return note("Nobody you know is around today. Try again another evening (after 3 PM).");
 return note("Some guys are at the back with new phones.")+here.map(y=>`<button class="opt" data-yb="ask" data-v="${y.id}">${y.e} Ask ${y.n} for update<small>${N(1000)} airtime · luck decides</small></button><button class="opt" data-yb="drink" data-v="${y.id}">Buy ${y.n} a drink<small>${N(2000)} · friendship</small></button>`).join("")}
/* ----- travel and timed activities ----- */
const travelMin=(from,to)=>{if(from==to)return 0;const a=BPL[from]||BPL[S.home],b=BPL[to],d=Math.hypot(a[0]-b[0],a[1]-b[1]),c=CARS.find(x=>x.id==S.car);return Math.max(2,Math.round((3+d*1.6)*(c?c.sp:1)))};
function travelTo(b,room){const r=b.h?hostelRule(b):{ok:true};if(!r.ok)return toast(r.why);if(S.expelled&&["lecture","library"].includes(b.id))return toast("Security will not let you in.");
 const from=S.loc||S.home,mins=travelMin(from,b.id),c=CARS.find(x=>x.id==S.car);
 const arrive=()=>{S.loc=b.id;S.visit=null;if(room){S.in=null;go("room")}else{S.in=b.id;go("room");setTimeout(()=>{if(S.in==b.id&&cur=="room")openB(b)},350)}};
 if(!mins)return arrive();runProg((c?"Driving to ":"Walking to ")+b.n,mins,arrive,c?0:Math.floor(mins/12))}
function goHome(){travelTo(BLD.find(x=>x.id==S.home),true)}
function runProg(label,min,done,en){if(PG)return;if(en)S.en=Math.max(0,S.en-en);const secs=Math.max(2.5,Math.min(22,min/9)),t0=performance.now(),t00=S.t;
 $("#plabel").textContent=label;$("#pfill").style.width="0%";$("#prog").classList.add("on");
 const fin=()=>{if(!PG)return;clearInterval(PG.iv);PG=null;$("#prog").classList.remove("on");adv(min);hud();if(cur=="map")drawMap();if($("#phone").classList.contains("on"))phone(APP);if(done)done()};
 PG={iv:setInterval(()=>{const f=Math.min(1,(performance.now()-t0)/(secs*1000));$("#pfill").style.width=(f*100)+"%";$("#ptime").textContent=clk((t00+Math.round(f*min))%1440)+" · "+Math.ceil(secs*(1-f))+"s";if(f>=1)fin()},100),fin};
 $("#pskip").onclick=()=>{if(PG)PG.fin()}}
function runTimed(fn,label){if(HOLD||PG)return fn();HOLD={m:0,msg:null};let r,h;try{r=fn()}finally{h=HOLD;HOLD=null}
 if(!h.m){if(h.msg)toast(h.msg);return r}
 runProg(label||"Working",h.m,()=>{if(h.msg)toast(h.msg)},0);return r}
{const w=(f,l)=>function(...a){return runTimed(()=>f.apply(this,a),typeof l=="function"?l(...a):l)};
 const _d=doAct,_a=attendClass,_s=studyCourse,_e=sitExam,_p=applyDoc,_u=ug;
 doAct=w(_d,(b,x)=>x&&x.l);attendClass=w(_a,"In class");studyCourse=w(_s,"Studying");sitExam=w(_e,"Writing the exam");applyDoc=w(_p,"Queueing at the Admin Block");ug=w(_u,"Underground business");
 ACT.work=w(ACT.work,"Working a shift");ACT.session=w(ACT.session,"Online work")}
/* ----- move furniture ----- */
function moveItem(i,x,y){const it=S.items[i],c=CAT.find(k=>k.id==it.id);if(!fits(x,y,c.w,c.h,it))return false;it.x=x;it.y=y;return true}
$("#mvb").onclick=()=>{MOVE.on=!MOVE.on;MOVE.sel=null;$("#mvb").textContent=MOVE.on?"✋ Done moving":"✋ Move furniture";toast(MOVE.on?"Move mode. Tap a piece of furniture, then tap where it should go.":"Move mode off.");drawRoom()};
$("#menub").onclick=()=>{if(S.in)openB(BLD.find(x=>x.id==S.in))};
$("#pclose").onclick=()=>$("#phone").classList.remove("on");
/* ----- gendered furniture models ----- */
Object.assign(MOD,{
vanity:()=>[box(1.8,.06,.6,0xf2c9d9,0,.7,0),box(.08,.7,.5,0xd9a0b8,-.8,0,0),box(.08,.7,.5,0xd9a0b8,.8,0,0),box(.9,.9,.05,0xcfe8f0,0,.76,-.25),box(.96,.96,.03,0xd47aa6,0,.73,-.27),box(.3,.4,.3,0xf2c9d9,0,0,.5)],
wardrobe:()=>[box(.9,1.9,.55,0xf1d7e3,0,0,0),box(.02,1.7,.02,0xd47aa6,0,.1,.29)],
plantpot:()=>[box(.4,.4,.4,0xb5651d,0,0,0),box(.7,.9,.7,0x2e8b57,0,.4,0),box(.4,.5,.4,0x3cb371,0,1,0)],
bench:()=>[box(1.8,.12,.5,0x222222,0,.4,0),box(.08,.4,.08,0x555555,-.7,0,0),box(.08,.4,.08,0x555555,.7,0,0),box(1.9,.08,.08,0x999999,0,.95,-.35),box(.08,.35,.35,0x333333,-.9,.78,-.35),box(.08,.35,.35,0x333333,.9,.78,-.35)],
gchair:()=>[box(.5,.08,.5,0x111111,0,.45,0),box(.5,.8,.08,0xe4572e,0,.5,-.22),box(.06,.45,.06,0x333333,0,0,0),box(.5,.05,.5,0x333333,0,0,0),box(.7,.5,.05,0x111111,0,.5,.45)],
shoes:()=>[box(.8,1.2,.3,0x555555,0,0,0),...[.3,.6,.9].map(y=>box(.7,.05,.28,0x888888,0,y,0)),box(.15,.12,.22,0xe4572e,-.2,.35,0)]});
/* ----- cars with different speeds, businesses with staff ----- */
const BIZ=[{id:"kiosk",n:"Recharge-card kiosk",e:"📱",cost:50000,inc:2500,g:3500,w:2500},{id:"pos",n:"POS agent",e:"💳",cost:150000,inc:6000,g:5000,w:3000},{id:"laundry",n:"Laundromat",e:"🧺",cost:200000,inc:7000,g:5000,w:3000},{id:"salon",n:"Barbershop / Salon",e:"💈",cost:250000,inc:8000,g:6000,w:3500},{id:"repair",n:"Phone repair shop",e:"🔧",cost:300000,inc:10000,g:7000,w:4000},{id:"bukka",n:"Bukka (restaurant)",e:"🍲",cost:400000,inc:12000,g:9000,w:5000},{id:"gymbiz",n:"Gym franchise",e:"🏋️",cost:1500000,inc:25000,g:15000,w:8000},{id:"pharma",n:"Pharmacy",e:"💊",cost:3000000,inc:40000,g:22000,w:12000},{id:"logistics",n:"Dispatch company",e:"📦",cost:6000000,inc:70000,g:35000,w:18000},{id:"estate",n:"Real estate firm",e:"🏘️",cost:30000000,inc:300000,g:120000,w:60000}];
const bizOk=b=>!S.docs.cac?"Needs a CAC certificate (Admin Block)":b.id=="logistics"&&!S.car?"Needs a vehicle":b.id=="estate"&&S.cha<40?"Needs charisma 40":b.id=="pharma"&&!S.docs.matric?"Needs a school ID":"";
const bizValue=()=>Object.keys(S.bz||{}).reduce((a,k)=>a+BIZ.find(b=>b.id==k).cost*.8,0);
function bizDay(){let t=0;Object.keys(S.bz||{}).forEach(k=>{const b=BIZ.find(x=>x.id==k),o=S.bz[k],gross=(b.inc+o.st*b.g)*(.75+Math.random()*.5),net=Math.round(gross-o.st*b.w);tx(net,b.n);t+=net});if(S.bus){tx(9000,"Danfo income");t+=9000}if(t)ev("Business income "+N(t))}
NEW.Company=()=>`<p>Your businesses pay out every morning. Open more as you grow.</p>`+BIZ.map(b=>{const own=S.bz[b.id],why=bizOk(b);return`<p>${b.e} <b>${b.n}</b><br>${N(b.cost)} · about ${N(b.inc)}/day${own?" · staff "+own.st+"/3":""}<br>${own?"Owned ✅":why?why:btn("buybiz","Open",`data-v="${b.id}"`)}</p>`}).join("");
NEW.Staff=()=>{const L=BIZ.filter(b=>S.bz[b.id]);return L.length?L.map(b=>{const o=S.bz[b.id];return`<p>${b.e} <b>${b.n}</b> · staff ${o.st}/3<br>Each staff: +${N(b.g)}/day, wage ${N(b.w)}/day<br>${o.st<3?btn("hire","Hire ("+N(5000)+")",`data-v="${b.id}"`):""}${o.st>0?btn("fire","Let one go",`data-v="${b.id}"`):""}</p>`}).join(""):"<p>Open a business first in the Company app.</p>"};
NEW.Cars=()=>{const o=CARS.find(c=>c.id==S.car);return`<p>Owned: <b>${o?o.e+" "+o.n:"none"}</b><br>Vehicles make campus trips faster and cut shift energy.</p>`+CARS.map(c=>`<p>${c.e} <b>${c.n}</b> · ${N(c.p)}<br>Trips ${Math.round((1-c.sp)*100)}% faster · shifts ⚡−${c.sv}${c.need?" · needs licence":""}${c.ch?" · +"+c.ch+" charisma":""}<br>${S.car==c.id?"Owned ✅":btn("car","Buy",`data-v="${c.id}"`)}</p>`).join("")+(o?`<p>${btn("sellcar","Sell current vehicle (60%)")}</p>`:"")};
Object.assign(ACT,{
car(d){const c=CARS.find(x=>x.id==d.v),old=CARS.find(x=>x.id==S.car);if(c.need&&!S.docs[c.need])return toast("You need a driver's licence first.");const tr=old?Math.round(old.p*.6):0;if(S.money+tr<c.p)return toast("Not enough money.");if(tr)tx(tr,"Trade-in "+old.n);tx(-c.p,c.n);S.car=c.id;if(c.ch)S.cha=Math.min(100,S.cha+c.ch);ev("Bought a "+c.n);toast(c.n+" bought."+(tr?" Trade-in: "+N(tr)+".":""))},
sellcar(){const o=CARS.find(x=>x.id==S.car);if(!o)return;tx(Math.round(o.p*.6),"Sold "+o.n);S.car=null;toast(o.n+" sold.")},
buybiz(d){const b=BIZ.find(x=>x.id==d.v),why=bizOk(b);if(why)return toast(why);if(S.bz[b.id])return;if(S.money<b.cost)return toast("Not enough money.");tx(-b.cost,b.n+" setup");S.bz[b.id]={st:0};ev("Opened "+b.n);toast(b.n+" is open. Income arrives each morning.")},
hire(d){const o=S.bz[d.v];if(!o||o.st>=3)return;if(S.money<5000)return toast("Not enough money.");tx(-5000,"Hiring fee");o.st++;toast("Hired. Staff: "+o.st+"/3.")},
fire(d){const o=S.bz[d.v];if(!o||o.st<1)return;o.st--;toast("Let one go. Staff: "+o.st+"/3.")}});
function boot(s){
S=s;S.docs=S.docs||{admission:true};S.sav=S.sav||0;S.wx=S.wx||"sun";S.cd=S.cd||{};S.ch=S.ch||{};S.hist=S.hist||{};S.pd=S.pd||0;S.bets=S.bets||[];S.stake=S.stake||1000;S.tr=S.tr||{d:0,ids:[]};S.job=S.job||null;S.evl=S.evl||[];S.civ=S.civ||0;S.ins=S.ins||0;S.tj=S.tj||0;if(!S.fx)genFx();S.corrupt=S.corrupt||0;S.rel=S.rel||{};S.owed=S.owed||{};S.bd=S.bd||{};S.sem=S.sem||Math.min(8,Math.floor((S.day-1)/28)+1);S.att=S.att||[0,1,2,3].map(()=>({a:0,h:0}));S.prep=S.prep||[0,0,0,0];S.ex=S.ex||[null,null,null,null];S.gpas=S.gpas||[];S.degree=S.degree||null;S.lastSlot=S.lastSlot||"";S.cha=S.cha==null?10:S.cha;S.gym=S.gym||0;S.heat=S.heat||0;S.strikes=S.strikes||0;S.expelled=!!S.expelled;S.cult=S.cult||null;S.yb=S.yb||null;S.ybcd=S.ybcd||{};S.mark=S.mark||0;S.rs=S.rs||[80,60,45];S.visit=null;S.in=null;S.loc=S.loc||S.home;S.bz=S.bz||{};if(S.biz&&!S.bz.kiosk){S.bz.kiosk={st:S.staff?1:0};S.biz=0;S.staff=0}if(!S.mates)genMates();calcRT();fixItems();$("#start").style.display="none";go("map");setInterval(()=>{S.en>0&&Math.random()<.2&&(S.en=Math.max(0,S.en-1));hud()},20000)}
let G=null,R=null;
const ODDS=[["NEPO",15],["NAPO",50],["LAPO",35]];
const FAM={NEPO:{s:"Your parents are connected. Everyone has heard the surname.",m:[200000,400000]},NAPO:{s:"Your parents work hard and send what they can. You will have to budget.",m:[40000,90000]},LAPO:{s:"Money is tight and nobody is coming to rescue you. Hustle, or go hungry.",m:[5000,15000]}};
function draw(){let r=Math.random()*100,a=0;for(const[k,v]of ODDS){a+=v;if(r<a)return k}return"LAPO"}
$$("[data-g]").forEach(b=>b.onclick=()=>{if(R)return;G=b.dataset.g;$$("[data-g]").forEach(x=>x.classList.toggle("sel",x==b));$("#s2").hidden=false});
$("#rollbtn").onclick=()=>{if(R){boot(def(R.k,G,R.m,R.home));toast("Admission letter in hand. Head to the Admin Block.");return}
 const btn=$("#rollbtn"),box=$("#roll");btn.disabled=true;let n=0;
 const iv=setInterval(()=>{box.textContent=ODDS[n++%3][0]+" ...";if(n>12){clearInterval(iv);fin()}},110);
 function fin(){const k=draw(),f=FAM[k],m=Math.round((f.m[0]+Math.random()*(f.m[1]-f.m[0]))/500)*500;
  const home=k=="NEPO"?(Math.random()<.5?"lux1":"lux2"):(G=="m"?"boys":"girls");
  R={k,m,home};box.innerHTML=`<b>${k}</b><br>${f.s}<br>Pocket money: ${N(m)}<br>Your hostel: ${BLD.find(x=>x.id==home).n}`;btn.disabled=false;btn.textContent="Enter SCU"}};
const old=load();if(old&&old.g){boot(old);toast("Welcome back. Day "+S.day)}
