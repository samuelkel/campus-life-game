import { drawRoom, drawMap, initGL } from './renderer.js';

export const $ = s => document.querySelector(s);
export const $$ = s => [...document.querySelectorAll(s)];
export const N = n => "₦" + Math.round(n).toLocaleString("en-NG");

export const CAT = [
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

export let RES = [[4,0],[0,5],[4,5]];
export let RW = 3, RD = 3, GW = 6, GD = 6;

export const BLD = [
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

export const DOCS = [
{id:"admission",n:"Admission letter",e:"✉️",req:[],fee:0},
{id:"nin",n:"NIN slip",e:"🪪",req:[],fee:1000},
{id:"matric",n:"Matric number & school ID",e:"🎫",req:["admission","nin"],fee:5000},
{id:"reg",n:"Course registration",e:"📝",req:["matric"],fee:3000},
{id:"dl",n:"Driver's licence",e:"🚗",req:["nin"],fee:12000},
{id:"cac",n:"CAC certificate",e:"📜",req:["nin","matric"],fee:20000}];

export let HOLD = null, PG = null;
export let S = null, cur = "map", bld = null, cat = "Sleep";

export const def = (b, g, m, home) => ({
  bg: b, g, home, rm: 10 + Math.floor(Math.random() * 40), money: m, docs: { admission: true }, corrupt: 0, sav: 0, wx: "sun", cd: {}, ch: {}, hist: {}, pd: 0, en: 80, t: 480, day: 1, xp: 0, mood: 70, 
  items: home[0] == "l" ? [{id:"bed",x:0,y:0},{id:"lsofa",x:3,y:4},{id:"bigtv",x:9,y:3},{id:"ac",x:9,y:1},{id:"aqua",x:5,y:0},{id:"bigfridge",x:9,y:5},{id:"mdining",x:6,y:6}] : [{id:"bed",x:0,y:0}], 
  px: 3, py: 3, log: [], posts: ["@amaka_o: Hostel water has run out AGAIN 😭", "@Chidi_Eco: Who has the ECO 101 handout?", "SCU Notice: Registration closes Friday."]
});

export const save = () => { try { localStorage.setItem("scu_save_v2", JSON.stringify(S)); } catch (e) {} };
export const load = () => { try { return JSON.parse(localStorage.getItem("scu_save_v2")); } catch (e) { return null; } };

export const toast = m => {
  if (HOLD) { HOLD.msg = m; return; }
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("on");
  clearTimeout(toast.h);
  toast.h = setTimeout(() => t.classList.remove("on"), 2400);
};

export const hhmm = () => {
  let h = Math.floor(S.t / 60), m = S.t % 60;
  return (h % 12 || 12) + ":" + String(m).padStart(2, "0") + (h < 12 ? " AM" : " PM");
};

export function hud() {
  $("#clock").textContent = hhmm() + " · Day " + S.day;
  $("#where").textContent = cur == "map" ? "📍 Coastville" : S.in ? "📍 " + BLD.find(x => x.id == S.in).n : "📍 " + BLD.find(x => x.id == S.home).n + ", Room " + S.rm;
  $("#cash").textContent = N(S.money);
  $("#bar b").style.width = S.en + "%";
  $("#ev").textContent = S.en + "%";
  save();
}

export function go(v) {
  if (v == "map") { S.visit = null; S.in = null; }
  cur = v;
  if (v == "room" && !S.in && !S.visit) S.loc = S.home;
  $$(".view").forEach(e => e.classList.toggle("on", e.id == v));
  $("#gmap").classList.toggle("act", v == "map");
  $("#groom").classList.toggle("act", v == "room");
  $("#act").classList.remove("on");
  if (v == "room") drawRoom(); else drawMap();
  hud();
}

export function boot(s) {
  S = s;
  S.docs = S.docs || { admission: true };
  S.sav = S.sav || 0;
  S.wx = S.wx || "sun";
  S.cd = S.cd || {};
  S.ch = S.ch || {};
  S.hist = S.hist || {};
  S.pd = S.pd || 0;
  S.bets = S.bets || [];
  S.stake = S.stake || 1000;
  S.tr = S.tr || { d: 0, ids: [] };
  S.job = S.job || null;
  S.evl = S.evl || [];
  S.civ = S.civ || 0;
  S.ins = S.ins || 0;
  S.tj = S.tj || 0;
  S.corrupt = S.corrupt || 0;
  S.rel = S.rel || {};
  S.owed = S.owed || {};
  S.bd = S.bd || {};
  S.sem = S.sem || 1;
  S.att = S.att || [0,1,2,3].map(() => ({ a: 0, h: 0 }));
  S.prep = S.prep || [0,0,0,0];
  S.ex = S.ex || [null,null,null,null];
  S.gpas = S.gpas || [];
  S.degree = S.degree || null;
  S.lastSlot = S.lastSlot || "";
  S.cha = S.cha == null ? 10 : S.cha;
  S.gym = S.gym || 0;
  S.heat = S.heat || 0;
  S.strikes = S.strikes || 0;
  S.expelled = !!S.expelled;
  S.visit = null;
  S.in = null;
  S.loc = S.loc || S.home;
  S.bz = S.bz || {};
  
  $("#start").style.display = "none";
  go("map");
}

// Global Event Binds
window.addEventListener("DOMContentLoaded", () => {
  const old = load();
  if (old && old.g) {
    boot(old);
    toast("Welcome back to SCU!");
  }

  $$("[data-g]").forEach(b => b.onclick = () => {
    window._G = b.dataset.g;
    $$("[data-g]").forEach(x => x.classList.toggle("sel", x == b));
    $("#s2").hidden = false;
  });

  $("#rollbtn").onclick = () => {
    const k = ["NEPO","NAPO","LAPO"][Math.floor(Math.random()*3)];
    const m = k == "NEPO" ? 300000 : k == "NAPO" ? 60000 : 10000;
    const home = k == "NEPO" ? "lux1" : (window._G == "m" ? "boys" : "girls");
    boot(def(k, window._G, m, home));
    toast("Admission letter in hand. Welcome to Coastville!");
  };

  $("#gmap").onclick = () => go("map");
  $("#groom").onclick = () => go("room");
});
 
