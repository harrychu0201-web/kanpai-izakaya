var Home3D=(()=>{var Oh=Object.defineProperty;var hm=Object.getOwnPropertyDescriptor;var um=Object.getOwnPropertyNames;var fm=Object.prototype.hasOwnProperty;var dm=(i,t)=>{for(var e in t)Oh(i,e,{get:t[e],enumerable:!0})},pm=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of um(t))!fm.call(i,s)&&s!==e&&Oh(i,s,{get:()=>t[s],enumerable:!(n=hm(t,s))||n.enumerable});return i};var mm=i=>pm(Oh({},"__esModule",{value:!0}),i);var I1={};dm(I1,{D0:()=>Oi,D1:()=>Bi,DX:()=>zi,EXO:()=>cs,H3CSS:()=>R1,RD:()=>wt,RW:()=>ge,SIZES:()=>dl,STARS:()=>If,WH:()=>ri,cozyOf:()=>ul,dailyIncome:()=>Cf,defaultEx:()=>Mf,demoHome:()=>E1,freshHome:()=>im,freshHomeInterior:()=>T1,island:()=>tm,starsOf:()=>Rf,start:()=>C1});var bd=0,wu=1,Md=2;var $o=1,Dc=2,Ja=3,Nr=0,ni=1,Vn=2,ra=0,Ka=1,_s=2,Tu=3,Eu=4,Sd=5;var aa=100,wd=101,Td=102,Ed=103,Ad=104,Rd=200,Cd=201,Id=202,Pd=203,Au=204,Ru=205,Ld=206,Dd=207,Nd=208,Ud=209,Fd=210,Od=211,Bd=212,zd=213,kd=214,Jl=0,Kl=1,jl=2,Ua=3,Ql=4,tc=5,ec=6,nc=7,Nc=0,Gd=1,Vd=2,ks=0,Cu=1,Iu=2,Pu=3,Lu=4,Du=5,Nu=6,Uu=7;var Fu=300,oa=301,ja=302,Uc=303,Fc=304,Ns=1e3,Ls=1001,ic=1002,hi=1003,Hd=1004;var Zo=1005;var Di=1006,Oc=1007;var rr=1008;var Hi=1009,Ou=1010,Bu=1011,Qa=1012,Bc=1013,ys=1014,vs=1015,bs=1016,zc=1017,kc=1018,la=1020,zu=35902,ku=35899,Gu=1021,Vu=1022,Ms=1023,er=1026,ar=1027,Hu=1028,Gc=1029,Ur=1030,Vc=1031;var Hc=1033,Jo=33776,Ko=33777,jo=33778,Qo=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,$c=36196,Zc=37492,Jc=37496,Kc=37488,jc=37489,tl=37490,Qc=37491,th=37808,eh=37809,nh=37810,ih=37811,sh=37812,rh=37813,ah=37814,oh=37815,lh=37816,ch=37817,hh=37818,uh=37819,fh=37820,dh=37821,ph=36492,mh=36494,gh=36495,xh=36283,_h=36284,el=36285,yh=36286;var Mo=2300,sc=2301,Yl=2302,hu=2303,uu=2400,fu=2401,du=2402;var Wd=3200;var vh=0,Xd=1,or="",jn="srgb",So="srgb-linear",wo="linear",An="srgb";var $l=7680;var qd=519,Yd=512,$d=513,Zd=514,Wu=515,Jd=516,Kd=517,Xu=518,qu=519,Yu=35044;var $u="300 es",os=2e3,Fa=2001;function gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jd(){let i=Oa("canvas");return i.style.display="block",i}var Bf={},Ba=null;function To(...i){let t="THREE."+i.shift();Ba?Ba("log",t,...i):console.log(t,...i)}function Qd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Qd(i);let t="THREE."+i.shift();if(Ba)Ba("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ae(...i){i=Qd(i);let t="THREE."+i.shift();if(Ba)Ba("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yo(...i){let t=i.join(" ");t in Bf||(Bf[t]=!0,Re(...i))}function tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ep={[Jl]:Jl,[jl]:ec,[Ql]:Ql,[Ua]:tc,[Kl]:Kl,[ec]:jl,[nc]:nc,[tc]:Ua},Us=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bh=Math.PI/180,rc=180/Math.PI;function Fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wi[i&255]+wi[i>>8&255]+wi[i>>16&255]+wi[i>>24&255]+"-"+wi[t&255]+wi[t>>8&255]+"-"+wi[t>>16&15|64]+wi[t>>24&255]+"-"+wi[e&63|128]+wi[e>>8&255]+"-"+wi[e>>16&255]+wi[e>>24&255]+wi[n&255]+wi[n>>8&255]+wi[n>>16&255]+wi[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function _m(i,t){return(i%t+t)%t}function zh(i,t,e){return(1-e)*i+e*t}function np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ip(i,t){if(t.constructor===Float32Array)return i;let e=bh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sp(i,t){if(t.constructor===Float32Array)return i;let e=bh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var tf=class tf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=nn(this.x,t.x,e.x),this.y=nn(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=nn(this.x,t,e),this.y=nn(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tf.prototype.isVector2=!0;var Nt=tf,Fs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],I=r[a+3];if(p!==I||l!==d||c!==f||u!==g){let _=l*d+c*f+u*g+p*I;_<0&&(d=-d,f=-f,g=-g,I=-I,_=-_);let y=1-o;if(_<.9995){let S=Math.acos(_),L=Math.sin(S);y=Math.sin(y*S)/L,o=Math.sin(o*S)/L,l=l*y+d*o,c=c*y+f*o,u=u*y+g*o,p=p*y+I*o}else{l=l*y+d*o,c=c*y+f*o,u=u*y+g*o,p=p*y+I*o;let S=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=S,c*=S,u*=S,p*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*p+l*f-c*d,t[e+1]=l*g+u*d+c*p-o*f,t[e+2]=c*g+u*f+o*d-l*p,t[e+3]=u*g-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"YXZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"ZXY":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"ZYX":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"YZX":this._x=d*u*p+c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p-d*f*g;break;case"XZY":this._x=d*u*p-c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ef=class ef{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=nn(this.x,t.x,e.x),this.y=nn(this.y,t.y,e.y),this.z=nn(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=nn(this.x,t,e),this.y=nn(this.y,t,e),this.z=nn(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ef.prototype.isVector3=!0;var k=ef,kh=new k,zf=new Fs,nf=class nf{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],f=n[5],g=n[8],I=s[0],_=s[3],y=s[6],S=s[1],L=s[4],E=s[7],F=s[2],N=s[5],M=s[8];return r[0]=a*I+o*S+l*F,r[3]=a*_+o*L+l*N,r[6]=a*y+o*E+l*M,r[1]=c*I+u*S+p*F,r[4]=c*_+u*L+p*N,r[7]=c*y+u*E+p*M,r[2]=d*I+f*S+g*F,r[5]=d*_+f*L+g*N,r[8]=d*y+f*E+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/g;return t[0]=p*I,t[1]=(s*c-u*n)*I,t[2]=(o*n-s*a)*I,t[3]=d*I,t[4]=(u*e-s*l)*I,t[5]=(s*r-o*e)*I,t[6]=f*I,t[7]=(n*l-c*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gh.makeScale(t,e)),this}rotate(t){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gh.makeRotation(-t)),this}translate(t,e){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nf.prototype.isMatrix3=!0;var Oe=nf,Gh=new Oe,kf=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ym(){let i={enabled:!0,workingColorSpace:So,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===An&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===An&&(s.r=Na(s.r),s.g=Na(s.g),s.b=Na(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===or?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[So]:{primaries:t,whitePoint:n,transfer:wo,toXYZ:kf,fromXYZ:Gf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:n,transfer:An,toXYZ:kf,fromXYZ:Gf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),i}var ln=ym();function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ga,ac=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ga===void 0&&(ga=Oa("canvas")),ga.width=t.width,ga.height=t.height;let s=ga.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ga}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=tr(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(tr(e[n]/255)*255):e[n]=tr(e[n]);return{data:e,width:t.width,height:t.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vm=0,za=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vh(s[a].image)):r.push(Vh(s[a]))}else r=Vh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var bm=0,Hh=new k,Ei=class i extends Us{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ls,s=Ls,r=Di,a=rr,o=Ms,l=Hi,c=i.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Fr(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ei.DEFAULT_IMAGE=null;Ei.DEFAULT_MAPPING=Fu;Ei.DEFAULT_ANISOTROPY=1;var sf=class sf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],g=l[9],I=l[2],_=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-I)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+I)<.1&&Math.abs(g+_)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,E=(f+1)/2,F=(y+1)/2,N=(u+d)/4,M=(p+I)/4,C=(g+_)/4;return L>E&&L>F?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=N/n,r=M/n):E>F?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=N/s,r=C/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=M/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((_-g)*(_-g)+(p-I)*(p-I)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(_-g)/S,this.y=(p-I)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=nn(this.x,t.x,e.x),this.y=nn(this.y,t.y,e.y),this.z=nn(this.z,t.z,e.z),this.w=nn(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=nn(this.x,t,e),this.y=nn(this.y,t,e),this.z=nn(this.z,t,e),this.w=nn(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sf.prototype.isVector4=!0;var Gn=sf,oc=class extends Us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Gn(0,0,t,e),this.scissorTest=!1,this.viewport=new Gn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ei({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new za(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Eo=class extends Ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends Ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Lc=class Lc{constructor(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_)}set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=s,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=p,y[14]=d,y[3]=f,y[7]=g,y[11]=I,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/xa.setFromMatrixColumn(t,0).length(),r=1/xa.setFromMatrixColumn(t,1).length(),a=1/xa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,g=o*u,I=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=d-I*c,e[9]=-o*l,e[2]=I-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,g=c*u,I=c*p;e[0]=d+I*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=I+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,g=c*u,I=c*p;e[0]=d-I*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=I-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,g=o*u,I=o*p;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+I,e[1]=l*p,e[5]=I*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,I=o*c;e[0]=l*u,e[4]=I-d*p,e[8]=g*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+g,e[10]=d-I*p}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,I=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+I,e[5]=a*u,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*u,e[10]=I*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mm,t,Sm)}lookAt(t,e,n){let s=this.elements;return Ji.subVectors(t,e),Ji.lengthSq()===0&&(Ji.z=1),Ji.normalize(),Mr.crossVectors(n,Ji),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Ji.x+=1e-4:Ji.z+=1e-4,Ji.normalize(),Mr.crossVectors(n,Ji)),Mr.normalize(),vl.crossVectors(Ji,Mr),s[0]=Mr.x,s[4]=vl.x,s[8]=Ji.x,s[1]=Mr.y,s[5]=vl.y,s[9]=Ji.y,s[2]=Mr.z,s[6]=vl.z,s[10]=Ji.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],f=n[13],g=n[2],I=n[6],_=n[10],y=n[14],S=n[3],L=n[7],E=n[11],F=n[15],N=s[0],M=s[4],C=s[8],q=s[12],z=s[1],W=s[5],Q=s[9],ht=s[13],V=s[2],at=s[6],ct=s[10],st=s[14],Pt=s[3],lt=s[7],St=s[11],xt=s[15];return r[0]=a*N+o*z+l*V+c*Pt,r[4]=a*M+o*W+l*at+c*lt,r[8]=a*C+o*Q+l*ct+c*St,r[12]=a*q+o*ht+l*st+c*xt,r[1]=u*N+p*z+d*V+f*Pt,r[5]=u*M+p*W+d*at+f*lt,r[9]=u*C+p*Q+d*ct+f*St,r[13]=u*q+p*ht+d*st+f*xt,r[2]=g*N+I*z+_*V+y*Pt,r[6]=g*M+I*W+_*at+y*lt,r[10]=g*C+I*Q+_*ct+y*St,r[14]=g*q+I*ht+_*st+y*xt,r[3]=S*N+L*z+E*V+F*Pt,r[7]=S*M+L*W+E*at+F*lt,r[11]=S*C+L*Q+E*ct+F*St,r[15]=S*q+L*ht+E*st+F*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],g=t[3],I=t[7],_=t[11],y=t[15],S=l*f-c*d,L=o*f-c*p,E=o*d-l*p,F=a*f-c*u,N=a*d-l*u,M=a*p-o*u;return e*(I*S-_*L+y*E)-n*(g*S-_*F+y*N)+s*(g*L-I*F+y*M)-r*(g*E-I*N+_*M)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],g=t[12],I=t[13],_=t[14],y=t[15],S=e*o-n*a,L=e*l-s*a,E=e*c-r*a,F=n*l-s*o,N=n*c-r*o,M=s*c-r*l,C=u*I-p*g,q=u*_-d*g,z=u*y-f*g,W=p*_-d*I,Q=p*y-f*I,ht=d*y-f*_,V=S*ht-L*Q+E*W+F*z-N*q+M*C;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let at=1/V;return t[0]=(o*ht-l*Q+c*W)*at,t[1]=(s*Q-n*ht-r*W)*at,t[2]=(I*M-_*N+y*F)*at,t[3]=(d*N-p*M-f*F)*at,t[4]=(l*z-a*ht-c*q)*at,t[5]=(e*ht-s*z+r*q)*at,t[6]=(_*E-g*M-y*L)*at,t[7]=(u*M-d*E+f*L)*at,t[8]=(a*Q-o*z+c*C)*at,t[9]=(n*z-e*Q-r*C)*at,t[10]=(g*N-I*E+y*S)*at,t[11]=(p*E-u*N-f*S)*at,t[12]=(o*q-a*W-l*C)*at,t[13]=(e*W-n*q+s*C)*at,t[14]=(I*L-g*F-_*S)*at,t[15]=(u*F-p*L+d*S)*at,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,g=r*p,I=a*u,_=a*p,y=o*p,S=l*c,L=l*u,E=l*p,F=n.x,N=n.y,M=n.z;return s[0]=(1-(I+y))*F,s[1]=(f+E)*F,s[2]=(g-L)*F,s[3]=0,s[4]=(f-E)*N,s[5]=(1-(d+y))*N,s[6]=(_+S)*N,s[7]=0,s[8]=(g+L)*M,s[9]=(_-S)*M,s[10]=(1-(d+I))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=xa.set(s[0],s[1],s[2]).length(),o=xa.set(s[4],s[5],s[6]).length(),l=xa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ps.copy(this);let c=1/a,u=1/o,p=1/l;return ps.elements[0]*=c,ps.elements[1]*=c,ps.elements[2]*=c,ps.elements[4]*=u,ps.elements[5]*=u,ps.elements[6]*=u,ps.elements[8]*=p,ps.elements[9]*=p,ps.elements[10]*=p,e.setFromRotationMatrix(ps),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=os,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,I;if(l)g=r/(a-r),I=a*r/(a-r);else if(o===os)g=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===Fa)g=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=I,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=os,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,I;if(l)g=1/(a-r),I=a/(a-r);else if(o===os)g=-2/(a-r),I=-(a+r)/(a-r);else if(o===Fa)g=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=I,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Lc.prototype.isMatrix4=!0;var Ln=Lc,xa=new k,ps=new Ln,Mm=new k(0,0,0),Sm=new k(1,1,1),Mr=new k,vl=new k,Ji=new k,Vf=new Ln,Hf=new Fs,nr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nr.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wm=0,Wf=new k,_a=new Fs,$s=new Ln,bl=new k,ho=new k,Tm=new k,Em=new Fs,Xf=new k(1,0,0),qf=new k(0,1,0),Yf=new k(0,0,1),$f={type:"added"},Am={type:"removed"},ya={type:"childadded",child:null},Wh={type:"childremoved",child:null},ui=class i extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new nr,n=new Fs,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Oe}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _a.setFromAxisAngle(t,e),this.quaternion.multiply(_a),this}rotateOnWorldAxis(t,e){return _a.setFromAxisAngle(t,e),this.quaternion.premultiply(_a),this}rotateX(t){return this.rotateOnAxis(Xf,t)}rotateY(t){return this.rotateOnAxis(qf,t)}rotateZ(t){return this.rotateOnAxis(Yf,t)}translateOnAxis(t,e){return Wf.copy(t).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xf,t)}translateY(t){return this.translateOnAxis(qf,t)}translateZ(t){return this.translateOnAxis(Yf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($s.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bl.copy(t):bl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$s.lookAt(ho,bl,this.up):$s.lookAt(bl,ho,this.up),this.quaternion.setFromRotationMatrix($s),s&&($s.extractRotation(s.matrixWorld),_a.setFromRotationMatrix($s),this.quaternion.premultiply(_a.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($f),ya.child=t,this.dispatchEvent(ya),ya.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Am),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$s.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$s.multiply(t.parent.matrixWorld)),t.applyMatrix4($s),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($f),ya.child=t,this.dispatchEvent(ya),ya.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,Tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,Em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ui.DEFAULT_UP=new k(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rm={type:"move"},Ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let I of t.hand.values()){let _=e.getJointPose(I,n),y=this._getHandJoint(c,I);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function Xh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ln.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ln.workingColorSpace){return this.r=t,this.g=e,this.b=n,ln.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ln.workingColorSpace){if(t=_m(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xh(a,r,t+1/3),this.g=Xh(a,r,t),this.b=Xh(a,r,t-1/3)}return ln.colorSpaceToWorking(this,s),this}setStyle(t,e=jn){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){let n=rp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return ln.workingToColorSpace(Ti.copy(this),t),Math.round(nn(Ti.r*255,0,255))*65536+Math.round(nn(Ti.g*255,0,255))*256+Math.round(nn(Ti.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ln.workingColorSpace){ln.workingToColorSpace(Ti.copy(this),e);let n=Ti.r,s=Ti.g,r=Ti.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ln.workingColorSpace){return ln.workingToColorSpace(Ti.copy(this),e),t.r=Ti.r,t.g=Ti.g,t.b=Ti.b,t}getStyle(t=jn){ln.workingToColorSpace(Ti.copy(this),t);let e=Ti.r,n=Ti.g,s=Ti.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sr),this.setHSL(Sr.h+t,Sr.s+e,Sr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sr),t.getHSL(Ml);let n=zh(Sr.h,Ml.h,e),s=zh(Sr.s,Ml.s,e),r=zh(Sr.l,Ml.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ti=new Se;Se.NAMES=rp;var Zr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ms=new k,Zs=new k,qh=new k,Js=new k,va=new k,ba=new k,Zf=new k,Yh=new k,$h=new k,Zh=new k,Jh=new Gn,Kh=new Gn,jh=new Gn,Qs=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ms.subVectors(t,e),s.cross(ms);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ms.subVectors(s,e),Zs.subVectors(n,e),qh.subVectors(t,e);let a=ms.dot(ms),o=ms.dot(Zs),l=ms.dot(qh),c=Zs.dot(Zs),u=Zs.dot(qh),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Js)===null?!1:Js.x>=0&&Js.y>=0&&Js.x+Js.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Js)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Js.x),l.addScaledVector(a,Js.y),l.addScaledVector(o,Js.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Jh.setScalar(0),Kh.setScalar(0),jh.setScalar(0),Jh.fromBufferAttribute(t,e),Kh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jh,r.x),a.addScaledVector(Kh,r.y),a.addScaledVector(jh,r.z),a}static isFrontFacing(t,e,n,s){return ms.subVectors(n,e),Zs.subVectors(t,e),ms.cross(Zs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ms.subVectors(this.c,this.b),Zs.subVectors(this.a,this.b),ms.cross(Zs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;va.subVectors(s,n),ba.subVectors(r,n),Yh.subVectors(t,n);let l=va.dot(Yh),c=ba.dot(Yh);if(l<=0&&c<=0)return e.copy(n);$h.subVectors(t,s);let u=va.dot($h),p=ba.dot($h);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(va,a);Zh.subVectors(t,r);let f=va.dot(Zh),g=ba.dot(Zh);if(g>=0&&f<=g)return e.copy(r);let I=f*c-l*g;if(I<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ba,o);let _=u*g-f*p;if(_<=0&&p-u>=0&&f-g>=0)return Zf.subVectors(r,s),o=(p-u)/(p-u+(f-g)),e.copy(s).addScaledVector(Zf,o);let y=1/(_+I+d);return a=I*y,o=d*y,e.copy(n).addScaledVector(va,a).addScaledVector(ba,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Os=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gs.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gs.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gs.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gs):gs.fromBufferAttribute(r,a),gs.applyMatrix4(t.matrixWorld),this.expandByPoint(gs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(t.matrixWorld),this.union(Sl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gs),gs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uo),wl.subVectors(this.max,uo),Ma.subVectors(t.a,uo),Sa.subVectors(t.b,uo),wa.subVectors(t.c,uo),wr.subVectors(Sa,Ma),Tr.subVectors(wa,Sa),Xr.subVectors(Ma,wa);let e=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-Xr.z,Xr.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,Xr.z,0,-Xr.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-Xr.y,Xr.x,0];return!Qh(e,Ma,Sa,wa,wl)||(e=[1,0,0,0,1,0,0,0,1],!Qh(e,Ma,Sa,wa,wl))?!1:(Tl.crossVectors(wr,Tr),e=[Tl.x,Tl.y,Tl.z],Qh(e,Ma,Sa,wa,wl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ks[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ks[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ks[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ks[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ks[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ks[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ks[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ks[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ks),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ks=[new k,new k,new k,new k,new k,new k,new k,new k],gs=new k,Sl=new Os,Ma=new k,Sa=new k,wa=new k,wr=new k,Tr=new k,Xr=new k,uo=new k,wl=new k,Tl=new k,qr=new k;function Qh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qr.fromArray(i,r);let o=s.x*Math.abs(qr.x)+s.y*Math.abs(qr.y)+s.z*Math.abs(qr.z),l=t.dot(qr),c=e.dot(qr),u=n.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kn=new k,El=new Nt,Cm=0,ji=class extends Us{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=vs,this.version=0,this._normalizationScale=t!==void 0?bh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)El.fromBufferAttribute(this,e),El.applyMatrix3(t),this.setXY(e,El.x,El.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix3(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix4(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyNormalMatrix(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.transformDirection(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ip(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sp(t,this.array)}};var Ao=class extends ji{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ro=class extends ji{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Pe=class extends ji{constructor(t,e,n){super(new Float32Array(t),e,n)}},Im=new Os,fo=new k,tu=new k,Jr=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Im.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fo.subVectors(t,this.center);let e=fo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fo.copy(t.center).add(tu)),this.expandByPoint(fo.copy(t.center).sub(tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pm=0,as=new Ln,eu=new ui,Ta=new k,Ki=new Os,po=new Os,ci=new k,Dn=class i extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?Ro:Ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return as.makeRotationFromQuaternion(t),this.applyMatrix4(as),this}rotateX(t){return as.makeRotationX(t),this.applyMatrix4(as),this}rotateY(t){return as.makeRotationY(t),this.applyMatrix4(as),this}rotateZ(t){return as.makeRotationZ(t),this.applyMatrix4(as),this}translate(t,e,n){return as.makeTranslation(t,e,n),this.applyMatrix4(as),this}scale(t,e,n){return as.makeScale(t,e,n),this.applyMatrix4(as),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ki.setFromBufferAttribute(r),this.morphTargetsRelative?(ci.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ci),ci.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ci)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];po.setFromBufferAttribute(o),this.morphTargetsRelative?(ci.addVectors(Ki.min,po.min),Ki.expandByPoint(ci),ci.addVectors(Ki.max,po.max),Ki.expandByPoint(ci)):(Ki.expandByPoint(po.min),Ki.expandByPoint(po.max))}Ki.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ci.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ci));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ci.fromBufferAttribute(o,c),l&&(Ta.fromBufferAttribute(t,c),ci.add(Ta)),s=Math.max(s,n.distanceToSquared(ci))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ji(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let q=0;q<n.count;q++)o[q]=new k,l[q]=new k;let u=new k,p=new k,d=new k,f=new Nt,g=new Nt,I=new Nt,_=new k,y=new k;function S(q,z,W){c[q]=c[z]=c[W]=1,u.fromBufferAttribute(n,q),p.fromBufferAttribute(n,z),d.fromBufferAttribute(n,W),f.fromBufferAttribute(r,q),g.fromBufferAttribute(r,z),I.fromBufferAttribute(r,W),p.sub(u),d.sub(u),g.sub(f),I.sub(f);let Q=1/(g.x*I.y-I.x*g.y);isFinite(Q)&&(_.copy(p).multiplyScalar(I.y).addScaledVector(d,-g.y).multiplyScalar(Q),y.copy(d).multiplyScalar(g.x).addScaledVector(p,-I.x).multiplyScalar(Q),o[q].add(_),o[z].add(_),o[W].add(_),l[q].add(y),l[z].add(y),l[W].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,z=L.length;q<z;++q){let W=L[q],Q=W.start,ht=W.count;for(let V=Q,at=Q+ht;V<at;V+=3)S(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let E=new k,F=new k,N=new k,M=new k;function C(q){N.fromBufferAttribute(s,q),M.copy(N);let z=o[q];E.copy(z),E.sub(N.multiplyScalar(N.dot(z))).normalize(),F.crossVectors(M,z);let Q=F.dot(l[q])<0?-1:1;a.setXYZW(q,E.x,E.y,E.z,Q)}for(let q=0,z=n.count;q<z;++q)c[q]&&C(q);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ji(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,p=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),I=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,_),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(I,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ci.fromBufferAttribute(t,e),ci.normalize(),t.setXYZ(e,ci.x,ci.y,ci.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let I=0,_=l.length;I<_;I++){o.isInterleavedBufferAttribute?f=l[I]*o.data.stride+o.offset:f=l[I]*u;for(let y=0;y<u;y++)d[g++]=c[f++]}return new ji(d,u,p)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=Fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Jf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Jf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Jf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Fr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Pi=new k,Va=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?bh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pi.fromBufferAttribute(this,e),Pi.applyMatrix4(t),this.setXYZ(e,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pi.fromBufferAttribute(this,e),Pi.applyNormalMatrix(t),this.setXYZ(e,Pi.x,Pi.y,Pi.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pi.fromBufferAttribute(this,e),Pi.transformDirection(t),this.setXYZ(e,Pi.x,Pi.y,Pi.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){To("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ji(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){To("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ip(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sp(t,this.data.array)}},nu=new k,Lm=new k,Dm=new Oe,Li=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nu.subVectors(n,e).cross(Lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dm.getNormalMatrix(t),s=this.coplanarPoint(nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Nm=0,Bs=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Ka,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ei=class extends Bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ea,mo=new k,Aa=new k,Ra=new k,Ca=new Nt,go=new Nt,ap=new Ln,Al=new k,xo=new k,Rl=new k,Kf=new Nt,iu=new Nt,jf=new Nt,fi=class extends ui{constructor(t=new ei){if(super(),this.isSprite=!0,this.type="Sprite",Ea===void 0){Ea=new Dn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Co(e,5);Ea.setIndex([0,1,2,0,2,3]),Ea.setAttribute("position",new Va(n,3,0,!1)),Ea.setAttribute("uv",new Va(n,2,3,!1))}this.geometry=Ea,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Aa.setFromMatrixScale(this.matrixWorld),ap.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ra.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Aa.multiplyScalar(-Ra.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Cl(Al.set(-.5,-.5,0),Ra,a,Aa,s,r),Cl(xo.set(.5,-.5,0),Ra,a,Aa,s,r),Cl(Rl.set(.5,.5,0),Ra,a,Aa,s,r),Kf.set(0,0),iu.set(1,0),jf.set(1,1);let o=t.ray.intersectTriangle(Al,xo,Rl,!1,mo);if(o===null&&(Cl(xo.set(-.5,.5,0),Ra,a,Aa,s,r),iu.set(0,1),o=t.ray.intersectTriangle(Al,Rl,xo,!1,mo),o===null))return;let l=t.ray.origin.distanceTo(mo);l<t.near||l>t.far||e.push({distance:l,point:mo.clone(),uv:Qs.getInterpolation(mo,Al,xo,Rl,Kf,iu,jf,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Cl(i,t,e,n,s,r){Ca.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(go.x=r*Ca.x-s*Ca.y,go.y=s*Ca.x+r*Ca.y):go.copy(Ca),i.copy(t),i.x+=go.x,i.y+=go.y,i.applyMatrix4(ap)}var js=new k,su=new k,Il=new k,Pl=new k,Ha=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,js)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=js.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(js.copy(this.origin).addScaledVector(this.direction,e),js.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){su.copy(t).add(e).multiplyScalar(.5),Il.copy(e).sub(t).normalize(),Pl.copy(this.origin).sub(su);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Il),o=Pl.dot(this.direction),l=-Pl.dot(Il),c=Pl.lengthSq(),u=Math.abs(1-a*a),p,d,f,g;if(u>0)if(p=a*l-o,d=a*o-l,g=r*u,p>=0)if(d>=-g)if(d<=g){let I=1/u;p*=I,d*=I,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(su).addScaledVector(Il,d),f}intersectSphere(t,e){if(t.radius<0)return null;js.subVectors(t.center,this.origin);let n=js.dot(this.direction),s=js.dot(js)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,js)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,I=e.y-a.y,_=e.z-a.z,y=n.x-a.x,S=n.y-a.y,L=n.z-a.z,E=Math.abs(l),F=Math.abs(c),N=Math.abs(u),M,C,q,z,W,Q,ht,V,at,ct,st,Pt;if(E>=F&&E>=N?(q=l,Q=p,at=g,Pt=y,l>=0?(M=c,C=u,z=d,W=f,ht=I,V=_,ct=S,st=L):(M=u,C=c,z=f,W=d,ht=_,V=I,ct=L,st=S)):F>=N?(q=c,Q=d,at=I,Pt=S,c>=0?(M=u,C=l,z=f,W=p,ht=_,V=g,ct=L,st=y):(M=l,C=u,z=p,W=f,ht=g,V=_,ct=y,st=L)):(q=u,Q=f,at=_,Pt=L,u>=0?(M=l,C=c,z=p,W=d,ht=g,V=I,ct=y,st=S):(M=c,C=l,z=d,W=p,ht=I,V=g,ct=S,st=y)),q===0)return null;let lt=M/q,St=C/q,xt=1/q,Ht=z-lt*Q,le=W-St*Q,pt=ht-lt*at,Zt=V-St*at,ie=ct-lt*Pt,_e=st-St*Pt,jt=ie*Zt-_e*pt,re=Ht*_e-le*ie,Xe=pt*le-Zt*Ht;if(s){if(jt<0||re<0||Xe<0)return null}else if((jt<0||re<0||Xe<0)&&(jt>0||re>0||Xe>0))return null;let ye=jt+re+Xe;if(ye===0)return null;let Be=xt*(jt*Q+re*at+Xe*Pt);return(ye>0?Be<0:Be>0)?null:this.at(Be/ye,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qf=new Ln,Yr=new Ha,Ll=new Jr,td=new k,Dl=new k,Nl=new k,Ul=new k,ru=new k,Fl=new k,ed=new k,Ol=new k,mt=class extends ui{constructor(t=new Dn,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(ru.fromBufferAttribute(p,t),a?Fl.addScaledVector(ru,u):Fl.addScaledVector(ru.sub(e),u))}e.add(Fl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(r),Yr.copy(t.ray).recast(t.near),!(Ll.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Ll,td)===null||Yr.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Qf.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,I=d.length;g<I;g++){let _=d[g],y=a[_.materialIndex],S=Math.max(_.start,f.start),L=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let E=S,F=L;E<F;E+=3){let N=o.getX(E),M=o.getX(E+1),C=o.getX(E+2);s=Bl(this,y,t,n,c,u,p,N,M,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),I=Math.min(o.count,f.start+f.count);for(let _=g,y=I;_<y;_+=3){let S=o.getX(_),L=o.getX(_+1),E=o.getX(_+2);s=Bl(this,a,t,n,c,u,p,S,L,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,I=d.length;g<I;g++){let _=d[g],y=a[_.materialIndex],S=Math.max(_.start,f.start),L=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let E=S,F=L;E<F;E+=3){let N=E,M=E+1,C=E+2;s=Bl(this,y,t,n,c,u,p,N,M,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),I=Math.min(l.count,f.start+f.count);for(let _=g,y=I;_<y;_+=3){let S=_,L=_+1,E=_+2;s=Bl(this,a,t,n,c,u,p,S,L,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Um(i,t,e,n,s,r,a,o){let l;if(t.side===ni?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Nr,o),l===null)return null;Ol.copy(o),Ol.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ol);return c<e.near||c>e.far?null:{distance:c,point:Ol.clone(),object:i}}function Bl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Dl),i.getVertexPosition(l,Nl),i.getVertexPosition(c,Ul);let u=Um(i,t,e,n,Dl,Nl,Ul,ed);if(u){let p=new k;Qs.getBarycoord(ed,Dl,Nl,Ul,p),s&&(u.uv=Qs.getInterpolatedAttribute(s,o,l,c,p,new Nt)),r&&(u.uv1=Qs.getInterpolatedAttribute(r,o,l,c,p,new Nt)),a&&(u.normal=Qs.getInterpolatedAttribute(a,o,l,c,p,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Qs.getNormal(Dl,Nl,Ul,d.normal),u.face=d,u.barycoord=p}return u}var cc=class extends Ei{constructor(t=null,e=1,n=1,s,r,a,o,l,c=hi,u=hi,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=new Jr,Fm=new Nt(.5,.5),zl=new k,Rr=class{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=os,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],g=r[8],I=r[9],_=r[10],y=r[11],S=r[12],L=r[13],E=r[14],F=r[15];if(s[0].setComponents(c-a,f-u,y-g,F-S).normalize(),s[1].setComponents(c+a,f+u,y+g,F+S).normalize(),s[2].setComponents(c+o,f+p,y+I,F+L).normalize(),s[3].setComponents(c-o,f-p,y-I,F-L).normalize(),n)s[4].setComponents(l,d,_,E).normalize(),s[5].setComponents(c-l,f-d,y-_,F-E).normalize();else if(s[4].setComponents(c-l,f-d,y-_,F-E).normalize(),e===os)s[5].setComponents(c+l,f+d,y+_,F+E).normalize();else if(e===Fa)s[5].setComponents(l,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){$r.center.set(0,0,0);let e=Fm.distanceTo(t.center);return $r.radius=.7071067811865476+e,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zl.x=s.normal.x>0?t.max.x:t.min.x,zl.y=s.normal.y>0?t.max.y:t.min.y,zl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},nd=new Ln,hc=class i{constructor(){this.coordinateSystem=os,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];nd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Rr),n[s].setFromProjectionMatrix(nd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Rr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Kr=class extends Bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},id=new Ln,pu=new Ha,kl=new Jr,Gl=new k,Wa=class extends ui{constructor(t=new Dn,e=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),kl.radius+=r,t.ray.intersectsSphere(kl)===!1)return;id.copy(s).invert(),pu.copy(t.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,I=f;g<I;g++){let _=c.getX(g);Gl.fromBufferAttribute(p,_),sd(Gl,_,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=d,I=f;g<I;g++)Gl.fromBufferAttribute(p,g),sd(Gl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sd(i,t,e,n,s,r,a){let o=pu.distanceSqToPoint(i);if(o<e){let l=new k;pu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Io=class extends Ei{constructor(t=[],e=oa,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jr=class extends Ei{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ir=class extends Ei{constructor(t,e,n=ys,s,r,a,o=hi,l=hi,c,u=er,p=1){if(u!==er&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Po=class extends ir{constructor(t,e=ys,n=oa,s,r,a=hi,o=hi,l,c=er){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lo=class extends Ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bn=class i extends Dn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(p,2));function g(I,_,y,S,L,E,F,N,M,C,q){let z=E/M,W=F/C,Q=E/2,ht=F/2,V=N/2,at=M+1,ct=C+1,st=0,Pt=0,lt=new k;for(let St=0;St<ct;St++){let xt=St*W-ht;for(let Ht=0;Ht<at;Ht++){let le=Ht*z-Q;lt[I]=le*S,lt[_]=xt*L,lt[y]=V,c.push(lt.x,lt.y,lt.z),lt[I]=0,lt[_]=0,lt[y]=N>0?1:-1,u.push(lt.x,lt.y,lt.z),p.push(Ht/M),p.push(1-St/C),st+=1}}for(let St=0;St<C;St++)for(let xt=0;xt<M;xt++){let Ht=d+xt+at*St,le=d+xt+at*(St+1),pt=d+(xt+1)+at*(St+1),Zt=d+(xt+1)+at*St;l.push(Ht,le,Zt),l.push(le,pt,Zt),Pt+=6}o.addGroup(f,Pt,q),f+=Pt,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qn=class i extends Dn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new k,u=new Nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ai=class i extends Dn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],g=0,I=[],_=n/2,y=0;S(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function S(){let E=new k,F=new k,N=0,M=(e-t)/n;for(let C=0;C<=r;C++){let q=[],z=C/r,W=z*(e-t)+t;for(let Q=0;Q<=s;Q++){let ht=Q/s,V=ht*l+o,at=Math.sin(V),ct=Math.cos(V);F.x=W*at,F.y=-z*n+_,F.z=W*ct,p.push(F.x,F.y,F.z),E.set(at,M,ct).normalize(),d.push(E.x,E.y,E.z),f.push(ht,1-z),q.push(g++)}I.push(q)}for(let C=0;C<s;C++)for(let q=0;q<r;q++){let z=I[q][C],W=I[q+1][C],Q=I[q+1][C+1],ht=I[q][C+1];(t>0||q!==0)&&(u.push(z,W,ht),N+=3),(e>0||q!==r-1)&&(u.push(W,Q,ht),N+=3)}c.addGroup(y,N,0),y+=N}function L(E){let F=g,N=new Nt,M=new k,C=0,q=E===!0?t:e,z=E===!0?1:-1;for(let Q=1;Q<=s;Q++)p.push(0,_*z,0),d.push(0,z,0),f.push(.5,.5),g++;let W=g;for(let Q=0;Q<=s;Q++){let V=Q/s*l+o,at=Math.cos(V),ct=Math.sin(V);M.x=q*ct,M.y=_*z,M.z=q*at,p.push(M.x,M.y,M.z),d.push(0,z,0),N.x=at*.5+.5,N.y=ct*.5*z+.5,f.push(N.x,N.y),g++}for(let Q=0;Q<s;Q++){let ht=F+Q,V=W+Q;E===!0?u.push(V,V+1,ht):u.push(V+1,V,ht),C+=3}c.addGroup(y,C,E===!0?1:2),y+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},di=class i extends Ai{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},uc=class i extends Dn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let L=new k,E=new k,F=new k;for(let N=0;N<e.length;N+=3)f(e[N+0],L),f(e[N+1],E),f(e[N+2],F),l(L,E,F,S)}function l(S,L,E,F){let N=F+1,M=[];for(let C=0;C<=N;C++){M[C]=[];let q=S.clone().lerp(E,C/N),z=L.clone().lerp(E,C/N),W=N-C;for(let Q=0;Q<=W;Q++)Q===0&&C===N?M[C][Q]=q:M[C][Q]=q.clone().lerp(z,Q/W)}for(let C=0;C<N;C++)for(let q=0;q<2*(N-C)-1;q++){let z=Math.floor(q/2);q%2===0?(d(M[C][z+1]),d(M[C+1][z]),d(M[C][z])):(d(M[C][z+1]),d(M[C+1][z+1]),d(M[C+1][z]))}}function c(S){let L=new k;for(let E=0;E<r.length;E+=3)L.x=r[E+0],L.y=r[E+1],L.z=r[E+2],L.normalize().multiplyScalar(S),r[E+0]=L.x,r[E+1]=L.y,r[E+2]=L.z}function u(){let S=new k;for(let L=0;L<r.length;L+=3){S.x=r[L+0],S.y=r[L+1],S.z=r[L+2];let E=_(S)/2/Math.PI+.5,F=y(S)/Math.PI+.5;a.push(E,1-F)}g(),p()}function p(){for(let S=0;S<a.length;S+=6){let L=a[S+0],E=a[S+2],F=a[S+4],N=Math.max(L,E,F),M=Math.min(L,E,F);N>.9&&M<.1&&(L<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),F<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,L){let E=S*3;L.x=t[E+0],L.y=t[E+1],L.z=t[E+2]}function g(){let S=new k,L=new k,E=new k,F=new k,N=new Nt,M=new Nt,C=new Nt;for(let q=0,z=0;q<r.length;q+=9,z+=6){S.set(r[q+0],r[q+1],r[q+2]),L.set(r[q+3],r[q+4],r[q+5]),E.set(r[q+6],r[q+7],r[q+8]),N.set(a[z+0],a[z+1]),M.set(a[z+2],a[z+3]),C.set(a[z+4],a[z+5]),F.copy(S).add(L).add(E).divideScalar(3);let W=_(F);I(N,z+0,S,W),I(M,z+2,L,W),I(C,z+4,E,W)}}function I(S,L,E,F){F<0&&S.x===1&&(a[L]=S.x-1),E.x===0&&E.z===0&&(a[L]=F/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function y(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Qi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],a=[],o=new k,l=new Ln;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(nn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(nn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Xa=class extends Qi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fc=class extends Xa{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var rd=new k,ad=new k,au=new Zu,ou=new Zu,lu=new Zu,dc=class extends Qi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ad.subVectors(s[0],s[1]).add(s[0]),c=ad);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(rd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=rd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),I=Math.pow(p.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f);I<1e-4&&(I=1),g<1e-4&&(g=I),_<1e-4&&(_=I),au.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,I,_),ou.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,I,_),lu.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,I,_)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),ou.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),lu.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(au.calc(l),ou.calc(l),lu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function od(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Om(i,t){let e=1-i;return e*e*t}function Bm(i,t){return 2*(1-i)*i*t}function zm(i,t){return i*i*t}function vo(i,t,e,n){return Om(i,t)+Bm(i,e)+zm(i,n)}function km(i,t){let e=1-i;return e*e*e*t}function Gm(i,t){let e=1-i;return 3*e*e*i*t}function Vm(i,t){return 3*(1-i)*i*i*t}function Hm(i,t){return i*i*i*t}function bo(i,t,e,n,s){return km(i,t)+Gm(i,e)+Vm(i,n)+Hm(i,s)}var Do=class extends Qi{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bo(t,s.x,r.x,a.x,o.x),bo(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends Qi{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bo(t,s.x,r.x,a.x,o.x),bo(t,s.y,r.y,a.y,o.y),bo(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends Qi{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends Qi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Qi{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vo(t,s.x,r.x,a.x),vo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends Qi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vo(t,s.x,r.x,a.x),vo(t,s.y,r.y,a.y),vo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends Qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(od(o,l.x,c.x,u.x,p.x),od(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},mu=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:dc,CubicBezierCurve:Do,CubicBezierCurve3:pc,EllipseCurve:Xa,LineCurve:No,LineCurve3:mc,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:gc,SplineCurve:Fo}),xc=class extends Qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Oo=class extends xc{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new No(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Uo(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Do(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Xa(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},sr=class extends Oo{constructor(t){super(t),this.uuid=Fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Oo().fromJSON(s))}return this}};function Wm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=op(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>p&&(p=g)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return Bo(r,a,e,o,l,c,0),a}function op(i,t,e,n,s){let r;if(s===a0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ld(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ld(a/n|0,i[a],i[a+1],r);return r&&qa(r,r.next)&&(ko(r),r=r.next),r}function Qr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qa(e,e.next)||Xn(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&t0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?qm(i,n,s,r):Xm(i)){t.push(l.i,i.i,c.i),ko(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ym(Qr(i),t),Bo(i,t,e,n,s,r,2)):a===2&&$m(i,t,e,n,s,r):Bo(Qr(i),t,e,n,s,r,1);break}}}function Xm(i){let t=i.prev,e=i,n=i.next;if(Xn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=f&&_o(s,o,r,l,a,c,g.x,g.y)&&Xn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Xn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,p,d),I=Math.max(o,l,c),_=Math.max(u,p,d),y=gu(f,g,t,e,n),S=gu(I,_,t,e,n),L=i.prevZ,E=i.nextZ;for(;L&&L.z>=y&&E&&E.z<=S;){if(L.x>=f&&L.x<=I&&L.y>=g&&L.y<=_&&L!==s&&L!==a&&_o(o,u,l,p,c,d,L.x,L.y)&&Xn(L.prev,L,L.next)>=0||(L=L.prevZ,E.x>=f&&E.x<=I&&E.y>=g&&E.y<=_&&E!==s&&E!==a&&_o(o,u,l,p,c,d,E.x,E.y)&&Xn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;L&&L.z>=y;){if(L.x>=f&&L.x<=I&&L.y>=g&&L.y<=_&&L!==s&&L!==a&&_o(o,u,l,p,c,d,L.x,L.y)&&Xn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;E&&E.z<=S;){if(E.x>=f&&E.x<=I&&E.y>=g&&E.y<=_&&E!==s&&E!==a&&_o(o,u,l,p,c,d,E.x,E.y)&&Xn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Ym(i,t){let e=i;do{let n=e.prev,s=e.next.next;!qa(n,s)&&cp(n,e,e.next,s)&&zo(n,s)&&zo(s,n)&&(t.push(n.i,e.i,s.i),ko(e),ko(e.next),e=i=s),e=e.next}while(e!==i);return Qr(e)}function $m(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&i0(a,o)){let l=hp(a,o);a=Qr(a,a.next),l=Qr(l,l.next),Bo(a,t,e,n,s,r,0),Bo(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=op(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(n0(c))}s.sort(Jm);for(let r=0;r<s.length;r++)e=Km(s[r],e);return e}function Jm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Km(i,t){let e=jm(i,t);if(!e)return t;let n=hp(e,i);return Qr(n,n.next),Qr(e,e.next)}function jm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(qa(i,e))return e;do{if(qa(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&lp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);zo(e,i)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&Qm(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function Qm(i,t){return Xn(i.prev,i,t.prev)<0&&Xn(t.next,i,i.next)<0}function t0(i,t,e,n){let s=i;do s.z===0&&(s.z=gu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,e0(s)}function e0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function gu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function n0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function _o(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&lp(i,t,e,n,s,r,a,o)}function i0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!s0(i,t)&&(zo(i,t)&&zo(t,i)&&r0(i,t)&&(Xn(i.prev,i,t.prev)||Xn(i,t.prev,t))||qa(i,t)&&Xn(i.prev,i,i.next)>0&&Xn(t.prev,t,t.next)>0)}function Xn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qa(i,t){return i.x===t.x&&i.y===t.y}function cp(i,t,e,n){let s=Hl(Xn(i,t,e)),r=Hl(Xn(i,t,n)),a=Hl(Xn(e,n,i)),o=Hl(Xn(e,n,t));return!!(s!==r&&a!==o||s===0&&Vl(i,e,t)||r===0&&Vl(i,n,t)||a===0&&Vl(e,i,n)||o===0&&Vl(e,t,n))}function Vl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hl(i){return i>0?1:i<0?-1:0}function s0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zo(i,t){return Xn(i.prev,i,i.next)<0?Xn(i,t,i.next)>=0&&Xn(i,i.prev,t)>=0:Xn(i,t,i.prev)<0||Xn(i,i.next,t)<0}function r0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hp(i,t){let e=xu(i.i,i.x,i.y),n=xu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ld(i,t,e,n){let s=xu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var _u=class{static triangulate(t,e,n=2){return Wm(t,e,n)}},Ds=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];cd(t),hd(n,t);let a=t.length;e.forEach(cd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,hd(n,e[l]);let o=_u.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function cd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ya=class i extends Dn{constructor(t=new sr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:o0,L,E=!1,F,N,M,C;if(y){L=y.getSpacedPoints(u),E=!0,d=!1;let Mt=y.isCatmullRomCurve3?y.closed:!1;F=y.computeFrenetFrames(u,Mt),N=new k,M=new k,C=new k}d||(_=0,f=0,g=0,I=0);let q=o.extractPoints(c),z=q.shape,W=q.holes;if(!Ds.isClockWise(z)){z=z.reverse();for(let Mt=0,kt=W.length;Mt<kt;Mt++){let Rt=W[Mt];Ds.isClockWise(Rt)&&(W[Mt]=Rt.reverse())}}function ht(Mt){let Rt=10000000000000001e-36,Vt=Mt[0];for(let Ft=1;Ft<=Mt.length;Ft++){let Le=Ft%Mt.length,ce=Mt[Le],Ye=ce.x-Vt.x,$e=ce.y-Vt.y,sn=Ye*Ye+$e*$e,X=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(Vt.x),Math.abs(Vt.y)),Ee=Rt*X*X;if(sn<=Ee){Mt.splice(Le,1),Ft--;continue}Vt=ce}}ht(z),W.forEach(ht);let V=W.length,at=z;for(let Mt=0;Mt<V;Mt++){let kt=W[Mt];z=z.concat(kt)}function ct(Mt,kt,Rt){return kt||Ae("ExtrudeGeometry: vec does not exist"),Mt.clone().addScaledVector(kt,Rt)}let st=z.length;function Pt(Mt,kt,Rt){let Vt,Ft,Le,ce=Mt.x-kt.x,Ye=Mt.y-kt.y,$e=Rt.x-Mt.x,sn=Rt.y-Mt.y,X=ce*ce+Ye*Ye,Ee=ce*sn-Ye*$e;if(Math.abs(Ee)>Number.EPSILON){let Ne=Math.sqrt(X),ze=Math.sqrt($e*$e+sn*sn),Bt=kt.x-Ye/Ne,yn=kt.y+ce/Ne,pe=Rt.x-sn/ze,Me=Rt.y+$e/ze,U=((pe-Bt)*sn-(Me-yn)*$e)/(ce*sn-Ye*$e);Vt=Bt+ce*U-Mt.x,Ft=yn+Ye*U-Mt.y;let w=Vt*Vt+Ft*Ft;if(w<=2)return new Nt(Vt,Ft);Le=Math.sqrt(w/2)}else{let Ne=!1;ce>Number.EPSILON?$e>Number.EPSILON&&(Ne=!0):ce<-Number.EPSILON?$e<-Number.EPSILON&&(Ne=!0):Math.sign(Ye)===Math.sign(sn)&&(Ne=!0),Ne?(Vt=-Ye,Ft=ce,Le=Math.sqrt(X)):(Vt=ce,Ft=Ye,Le=Math.sqrt(X/2))}return new Nt(Vt/Le,Ft/Le)}let lt=[];for(let Mt=0,kt=at.length,Rt=kt-1,Vt=Mt+1;Mt<kt;Mt++,Rt++,Vt++)Rt===kt&&(Rt=0),Vt===kt&&(Vt=0),lt[Mt]=Pt(at[Mt],at[Rt],at[Vt]);let St=[],xt,Ht=lt.concat();for(let Mt=0,kt=V;Mt<kt;Mt++){let Rt=W[Mt];xt=[];for(let Vt=0,Ft=Rt.length,Le=Ft-1,ce=Vt+1;Vt<Ft;Vt++,Le++,ce++)Le===Ft&&(Le=0),ce===Ft&&(ce=0),xt[Vt]=Pt(Rt[Vt],Rt[Le],Rt[ce]);St.push(xt),Ht=Ht.concat(xt)}let le;if(_===0)le=Ds.triangulateShape(at,W);else{let Mt=[],kt=[];for(let Rt=0;Rt<_;Rt++){let Vt=Rt/_,Ft=f*Math.cos(Vt*Math.PI/2),Le=g*Math.sin(Vt*Math.PI/2)+I;for(let ce=0,Ye=at.length;ce<Ye;ce++){let $e=ct(at[ce],lt[ce],Le);re($e.x,$e.y,-Ft),Vt===0&&Mt.push($e)}for(let ce=0,Ye=V;ce<Ye;ce++){let $e=W[ce];xt=St[ce];let sn=[];for(let X=0,Ee=$e.length;X<Ee;X++){let Ne=ct($e[X],xt[X],Le);re(Ne.x,Ne.y,-Ft),Vt===0&&sn.push(Ne)}Vt===0&&kt.push(sn)}}le=Ds.triangulateShape(Mt,kt)}let pt=le.length,Zt=g+I;for(let Mt=0;Mt<st;Mt++){let kt=d?ct(z[Mt],Ht[Mt],Zt):z[Mt];E?(M.copy(F.normals[0]).multiplyScalar(kt.x),N.copy(F.binormals[0]).multiplyScalar(kt.y),C.copy(L[0]).add(M).add(N),re(C.x,C.y,C.z)):re(kt.x,kt.y,0)}for(let Mt=1;Mt<=u;Mt++)for(let kt=0;kt<st;kt++){let Rt=d?ct(z[kt],Ht[kt],Zt):z[kt];E?(M.copy(F.normals[Mt]).multiplyScalar(Rt.x),N.copy(F.binormals[Mt]).multiplyScalar(Rt.y),C.copy(L[Mt]).add(M).add(N),re(C.x,C.y,C.z)):re(Rt.x,Rt.y,p/u*Mt)}for(let Mt=_-1;Mt>=0;Mt--){let kt=Mt/_,Rt=f*Math.cos(kt*Math.PI/2),Vt=g*Math.sin(kt*Math.PI/2)+I;for(let Ft=0,Le=at.length;Ft<Le;Ft++){let ce=ct(at[Ft],lt[Ft],Vt);re(ce.x,ce.y,p+Rt)}for(let Ft=0,Le=W.length;Ft<Le;Ft++){let ce=W[Ft];xt=St[Ft];for(let Ye=0,$e=ce.length;Ye<$e;Ye++){let sn=ct(ce[Ye],xt[Ye],Vt);E?re(sn.x,sn.y+L[u-1].y,L[u-1].x+Rt):re(sn.x,sn.y,p+Rt)}}}ie(),_e();function ie(){let Mt=s.length/3;if(d){let kt=0,Rt=st*kt;for(let Vt=0;Vt<pt;Vt++){let Ft=le[Vt];Xe(Ft[2]+Rt,Ft[1]+Rt,Ft[0]+Rt)}kt=u+_*2,Rt=st*kt;for(let Vt=0;Vt<pt;Vt++){let Ft=le[Vt];Xe(Ft[0]+Rt,Ft[1]+Rt,Ft[2]+Rt)}}else{for(let kt=0;kt<pt;kt++){let Rt=le[kt];Xe(Rt[2],Rt[1],Rt[0])}for(let kt=0;kt<pt;kt++){let Rt=le[kt];Xe(Rt[0]+st*u,Rt[1]+st*u,Rt[2]+st*u)}}n.addGroup(Mt,s.length/3-Mt,0)}function _e(){let Mt=s.length/3,kt=0;jt(at,kt),kt+=at.length;for(let Rt=0,Vt=W.length;Rt<Vt;Rt++){let Ft=W[Rt];jt(Ft,kt),kt+=Ft.length}n.addGroup(Mt,s.length/3-Mt,1)}function jt(Mt,kt){let Rt=Mt.length;for(;--Rt>=0;){let Vt=Rt,Ft=Rt-1;Ft<0&&(Ft=Mt.length-1);for(let Le=0,ce=u+_*2;Le<ce;Le++){let Ye=st*Le,$e=st*(Le+1),sn=kt+Vt+Ye,X=kt+Ft+Ye,Ee=kt+Ft+$e,Ne=kt+Vt+$e;ye(sn,X,Ee,Ne)}}}function re(Mt,kt,Rt){l.push(Mt),l.push(kt),l.push(Rt)}function Xe(Mt,kt,Rt){Be(Mt),Be(kt),Be(Rt);let Vt=s.length/3,Ft=S.generateTopUV(n,s,Vt-3,Vt-2,Vt-1);qe(Ft[0]),qe(Ft[1]),qe(Ft[2])}function ye(Mt,kt,Rt,Vt){Be(Mt),Be(kt),Be(Vt),Be(kt),Be(Rt),Be(Vt);let Ft=s.length/3,Le=S.generateSideWallUV(n,s,Ft-6,Ft-3,Ft-2,Ft-1);qe(Le[0]),qe(Le[1]),qe(Le[3]),qe(Le[1]),qe(Le[2]),qe(Le[3])}function Be(Mt){s.push(l[Mt*3+0]),s.push(l[Mt*3+1]),s.push(l[Mt*3+2])}function qe(Mt){r.push(Mt.x),r.push(Mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return l0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mu[s.type]().fromJSON(s)),new i(n,t.options)}},o0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],I=t[r*3],_=t[r*3+1],y=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-p),new Nt(d,1-g),new Nt(I,1-y)]:[new Nt(o,1-l),new Nt(u,1-p),new Nt(f,1-g),new Nt(_,1-y)]}};function l0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xs=class i extends uc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Go=class i extends Dn{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,p=new k,d=new Nt,f=new k,g=new k,I=new k,_=0,y=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:_=t[S+1].x-t[S].x,y=t[S+1].y-t[S].y,f.x=y*1,f.y=-_,f.z=y*0,I.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:I.normalize(),l.push(I.x,I.y,I.z);break;default:_=t[S+1].x-t[S].x,y=t[S+1].y-t[S].y,f.x=y*1,f.y=-_,f.z=y*0,g.copy(f),f.x+=I.x,f.y+=I.y,f.z+=I.z,f.normalize(),l.push(f.x,f.y,f.z),I.copy(g)}for(let S=0;S<=e;S++){let L=n+S*u*s,E=Math.sin(L),F=Math.cos(L);for(let N=0;N<=t.length-1;N++){p.x=t[N].x*E,p.y=t[N].y,p.z=t[N].x*F,a.push(p.x,p.y,p.z),d.x=S/e,d.y=N/(t.length-1),o.push(d.x,d.y);let M=l[3*N+0]*E,C=l[3*N+1],q=l[3*N+0]*F;c.push(M,C,q)}}for(let S=0;S<e;S++)for(let L=0;L<t.length-1;L++){let E=L+S*t.length,F=E,N=E+t.length,M=E+t.length+1,C=E+1;r.push(F,N,C),r.push(M,C,N)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Qe=class i extends Dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],g=[],I=[],_=[];for(let y=0;y<u;y++){let S=y*d-a;for(let L=0;L<c;L++){let E=L*p-r;g.push(E,-S,0),I.push(0,0,1),_.push(L/o),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let S=0;S<o;S++){let L=S+c*y,E=S+c*(y+1),F=S+1+c*(y+1),N=S+1+c*y;f.push(L,E,N),f.push(E,F,N)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(I,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vo=class i extends Dn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],p=t,d=(e-t)/s,f=new k,g=new Nt;for(let I=0;I<=s;I++){for(let _=0;_<=n;_++){let y=r+_/n*a;f.x=p*Math.cos(y),f.y=p*Math.sin(y),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}p+=d}for(let I=0;I<s;I++){let _=I*(n+1);for(let y=0;y<n;y++){let S=y+_,L=S,E=S+n+1,F=S+n+2,N=S+1;o.push(L,E,N),o.push(E,F,N)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ta=class i extends Dn{constructor(t=new sr([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(a,2));function c(u){let p=s.length/3,d=u.extractPoints(e),f=d.shape,g=d.holes;Ds.isClockWise(f)===!1&&(f=f.reverse());for(let _=0,y=g.length;_<y;_++){let S=g[_];Ds.isClockWise(S)===!0&&(g[_]=S.reverse())}let I=Ds.triangulateShape(f,g);for(let _=0,y=g.length;_<y;_++){let S=g[_];f=f.concat(S)}for(let _=0,y=f.length;_<y;_++){let S=f[_];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let _=0,y=I.length;_<y;_++){let S=I[_],L=S[0]+p,E=S[1]+p,F=S[2]+p;n.push(L,E,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return c0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function c0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pi=class i extends Dn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new k,d=new k,f=[],g=[],I=[],_=[];for(let y=0;y<=n;y++){let S=[],L=y/n,E=a+L*o,F=t*Math.cos(E),N=Math.sqrt(t*t-F*F),M=0;y===0&&a===0?M=.5/e:y===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let q=C/e,z=s+q*r;p.x=-N*Math.cos(z),p.y=F,p.z=N*Math.sin(z),g.push(p.x,p.y,p.z),d.copy(p).normalize(),I.push(d.x,d.y,d.z),_.push(q+M,1-L),S.push(c++)}u.push(S)}for(let y=0;y<n;y++)for(let S=0;S<e;S++){let L=u[y][S+1],E=u[y][S],F=u[y+1][S],N=u[y+1][S+1];(y!==0||a>0)&&f.push(L,E,N),(y!==n-1||l<Math.PI)&&f.push(E,F,N)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(I,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ui=class i extends Dn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],p=[],d=new k,f=new k,g=new k;for(let I=0;I<=n;I++){let _=a+I/n*o;for(let y=0;y<=s;y++){let S=y/s*r;f.x=(t+e*Math.cos(_))*Math.cos(S),f.y=(t+e*Math.cos(_))*Math.sin(S),f.z=e*Math.sin(_),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),p.push(y/s),p.push(I/n)}}for(let I=1;I<=n;I++)for(let _=1;_<=s;_++){let y=(s+1)*I+_-1,S=(s+1)*(I-1)+_-1,L=(s+1)*(I-1)+_,E=(s+1)*I+_;l.push(y,S,E),l.push(S,L,E)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ca(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ud(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ud(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ri(i){let t={};for(let e=0;e<i.length;e++){let n=ca(i[e]);for(let s in n)t[s]=n[s]}return t}function ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function h0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ju(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ln.workingColorSpace}var up={clone:ca,merge:Ri},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zs=class extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ca(t.uniforms),this.uniformsGroups=h0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Gn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ln().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_c=class extends zs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xn=class extends Bs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=Nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yc=class extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vc=class extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ia(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Cr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fu:r=t,o=2*e-n;break;case du:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:a=t,l=2*n-e;break;case du:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),I=g*g,_=I*g,y=-d*_+2*d*I-d*g,S=(1+d)*_+(-1.5-2*d)*I+(-.5+d)*g+1,L=(-1-f)*_+(1.5+f)*I+.5*g,E=f*_-f*I;for(let F=0;F!==o;++F)r[F]=y*a[u+F]+S*a[c+F]+L*a[l+F]+E*a[p+F];return r}},Mc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},Sc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wc=class extends Cr{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),I=1-g;for(let _=0;_!==o;++_)r[_]=a[c+_]*I+a[l+_]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let I=a[c+g],_=a[l+g],y=f*d+g*2,S=p[y],L=p[y+1],E=t*d+g*2,F=u[E],N=u[E+1],M=p0(n,e,S,F,s);r[g]=fp(M,I,L,N,_)}return r}};function fp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function d0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function p0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=fp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=d0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ts=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ia(e,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ia(t.times,Array),values:Ia(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wl(t.settings)&&(n.settings={inTangents:Ia(t.settings.inTangents,Array),outTangents:Ia(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case sc:e=this.InterpolantFactoryMethodLinear;break;case Yl:e=this.InterpolantFactoryMethodSmooth;break;case hu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return Yl;case this.InterpolantFactoryMethodBezier:return hu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Wl(this.settings)&&(fd(this.settings.inTangents,t),fd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wl(this.settings)&&(dd(this.settings.inTangents,t),dd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ae("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ae("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ae("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&xm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ae("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let I=e[p+g];if(I!==e[d+g]||I!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function dd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ts.prototype.ValueTypeName="";ts.prototype.TimeBufferType=Float32Array;ts.prototype.ValueBufferType=Float32Array;ts.prototype.DefaultInterpolation=sc;var Ir=class extends ts{constructor(t,e,n){super(t,e,n)}};Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=Mo;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}};Tc.prototype.ValueTypeName="color";var Ec=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}};Ec.prototype.ValueTypeName="number";var Ac=class extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Fs.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ho=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends ts{constructor(t,e,n){super(t,e,n)}};Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Mo;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}};Rc.prototype.ValueTypeName="vector";var Zl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(pd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!pd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Cc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dp=new Cc,$a=class{constructor(t){this.manager=t!==void 0?t:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pa=new WeakMap,Ic=class extends $a{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Zl.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let p=Pa.get(a);p===void 0&&(p=[],Pa.set(a,p)),p.push({onLoad:e,onError:s})}return a}let o=Oa("img");function l(){u(),e&&e(this);let p=Pa.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onLoad&&f.onLoad(this)}Pa.delete(this),r.manager.itemEnd(t)}function c(p){u(),s&&s(p),Zl.remove(`image:${t}`);let d=Pa.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(p)}Pa.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zl.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var ea=class extends $a{constructor(t){super(t)}load(t,e,n,s){let r=new Ei,a=new Ic(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},na=class extends ui{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ui.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},cu=new Ln,md=new k,gd=new k,Wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(cu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fa||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(cu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xl=new k,ql=new Fs,Ps=new k,Xo=class extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=os,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xl,ql,Ps),Ps.x===1&&Ps.y===1&&Ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Ps.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xl,ql,Ps),Ps.x===1&&Ps.y===1&&Ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Er=new k,xd=new Nt,_d=new Nt,ti=class extends Xo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,e){return this.getViewBounds(t,xd,_d),e.subVectors(_d,xd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yu=class extends Wo{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0}},ia=class extends na{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qo=class extends Xo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vu=class extends Wo{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ui.DEFAULT_UP),this.updateMatrix(),this.target=new ui,this.shadow=new vu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Yo=class extends na{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var La=-90,Da=1,Za=class extends ui{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(La,Da,t,e);s.layers=this.layers,this.add(s);let r=new ti(La,Da,t,e);r.layers=this.layers,this.add(r);let a=new ti(La,Da,t,e);a.layers=this.layers,this.add(a);let o=new ti(La,Da,t,e);o.layers=this.layers,this.add(o);let l=new ti(La,Da,t,e);l.layers=this.layers,this.add(l);let c=new ti(La,Da,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===os)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=I,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pc=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ku="\\[\\]\\.:\\/",m0=new RegExp("["+Ku+"]","g"),ju="[^"+Ku+"]",g0="[^"+Ku.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",ju),_0=/(WCOD+)?/.source.replace("WCOD",g0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),b0=new RegExp("^"+x0+_0+y0+v0+"$"),M0=["material","materials","bones","map"],bu=class{constructor(t,e,n){let s=n||Bn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Bn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(t){let e=b0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bn.Composite=bu;Bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bn.prototype.GetterByBindingType=[Bn.prototype._getValue_direct,Bn.prototype._getValue_array,Bn.prototype._getValue_arrayElement,Bn.prototype._getValue_toArray];Bn.prototype.SetterByBindingTypeAndVersioning=[[Bn.prototype._setValue_direct,Bn.prototype._setValue_direct_setNeedsUpdate,Bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bn.prototype._setValue_array,Bn.prototype._setValue_array_setNeedsUpdate,Bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bn.prototype._setValue_arrayElement,Bn.prototype._setValue_arrayElement_setNeedsUpdate,Bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bn.prototype._setValue_fromArray,Bn.prototype._setValue_fromArray_setNeedsUpdate,Bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L1=new Float32Array(1);var yd=new Ln,sa=class{constructor(t,e,n=0,s=1/0){this.ray=new Ha(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(t,e=!0,n=[]){return Mu(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mu(t[s],this,n,e);return n.sort(vd),n}};function vd(i,t){return i.distance-t.distance}function Mu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mu(r[a],t,e,!0)}}var rf=class rf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};rf.prototype.isMatrix2=!0;var Su=rf;function Qu(i,t,e,n){let s=S0(n);switch(e){case Gu:return i*t;case Hu:return i*t/s.components*s.byteLength;case Gc:return i*t/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case Vc:return i*t*2/s.components*s.byteLength;case Vu:return i*t*3/s.components*s.byteLength;case Ms:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(t,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(t,8)/2;case $c:case Zc:case Kc:case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jc:case tl:case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ph:case mh:case gh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xh:case _h:return Math.ceil(i/4)*Math.ceil(t/4)*8;case el:case yh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S0(i){switch(i){case Hi:case Ou:return{byteLength:1,components:1};case Qa:case Bu:case bs:return{byteLength:2,components:1};case zc:case kc:return{byteLength:2,components:4};case ys:case Bc:case vs:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Up(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function I0(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],I=p[f];I.start<=g.start+g.count+1?g.count=Math.max(g.count,I.start+I.count-g.start):(++d,p[d]=I)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let I=p[f];i.bufferSubData(c,I.start*u.BYTES_PER_ELEMENT,u,I.start,I.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ox=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tn={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:F0,aomap_fragment:O0,aomap_pars_fragment:B0,batching_pars_vertex:z0,batching_vertex:k0,begin_vertex:G0,beginnormal_vertex:V0,bsdfs:H0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:K0,color_pars_vertex:j0,color_vertex:Q0,common:tg,defaultnormal_vertex:eg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:ag,colorspace_pars_fragment:og,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:hg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:fg,fog_vertex:dg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:_g,lights_lambert_fragment:yg,lights_lambert_pars_fragment:vg,lights_pars_begin:bg,lights_toon_fragment:Sg,lights_toon_pars_fragment:wg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Ig,lights_fragment_end:Pg,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Hg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Kg,normal_vertex:jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ax,project_vertex:ox,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:dx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:_x,skinnormal_vertex:yx,specularmap_fragment:vx,specularmap_pars_fragment:bx,tonemapping_fragment:Mx,tonemapping_pars_fragment:Sx,transmission_fragment:wx,transmission_pars_fragment:Tx,uv_pars_fragment:Ex,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Fx,depth_frag:Ox,distance_vert:Bx,distance_frag:zx,equirect_vert:kx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Hx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:$x,meshmatcap_frag:Zx,meshnormal_vert:Jx,meshnormal_frag:Kx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:t_,meshphysical_frag:e_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:a_,shadow_frag:o_,sprite_vert:l_,sprite_frag:c_},ne={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Vs={basic:{uniforms:Ri([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:tn.meshbasic_vert,fragmentShader:tn.meshbasic_frag},lambert:{uniforms:Ri([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:tn.meshlambert_vert,fragmentShader:tn.meshlambert_frag},phong:{uniforms:Ri([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tn.meshphong_vert,fragmentShader:tn.meshphong_frag},standard:{uniforms:Ri([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag},toon:{uniforms:Ri([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:tn.meshtoon_vert,fragmentShader:tn.meshtoon_frag},matcap:{uniforms:Ri([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:tn.meshmatcap_vert,fragmentShader:tn.meshmatcap_frag},points:{uniforms:Ri([ne.points,ne.fog]),vertexShader:tn.points_vert,fragmentShader:tn.points_frag},dashed:{uniforms:Ri([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tn.linedashed_vert,fragmentShader:tn.linedashed_frag},depth:{uniforms:Ri([ne.common,ne.displacementmap]),vertexShader:tn.depth_vert,fragmentShader:tn.depth_frag},normal:{uniforms:Ri([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:tn.meshnormal_vert,fragmentShader:tn.meshnormal_frag},sprite:{uniforms:Ri([ne.sprite,ne.fog]),vertexShader:tn.sprite_vert,fragmentShader:tn.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tn.background_vert,fragmentShader:tn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:tn.backgroundCube_vert,fragmentShader:tn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tn.cube_vert,fragmentShader:tn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tn.equirect_vert,fragmentShader:tn.equirect_frag},distance:{uniforms:Ri([ne.common,ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tn.distance_vert,fragmentShader:tn.distance_frag},shadow:{uniforms:Ri([ne.lights,ne.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:tn.shadow_vert,fragmentShader:tn.shadow_frag}};Vs.physical={uniforms:Ri([Vs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag};var Mh={r:0,b:0,g:0},h_=new Ln,Fp=new Oe;Fp.set(-1,0,0,0,1,0,0,0,1);function u_(i,t,e,n,s,r){let a=new Se(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(S){let L=S.isScene===!0?S.background:null;if(L&&L.isTexture){let E=S.backgroundBlurriness>0;L=t.get(L,E)}return L}function g(S){let L=!1,E=f(S);E===null?_(a,o):E&&E.isColor&&(_(E,1),L=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?e.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(S,L){let E=f(L);E&&E.isCubeTexture?(c===void 0&&(c=new mt(new bn(1,1,1),new zs({name:"BackgroundCubeMaterial",uniforms:ca(Vs.backgroundCube.uniforms),vertexShader:Vs.backgroundCube.vertexShader,fragmentShader:Vs.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(L.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fp),c.material.toneMapped=ln.getTransfer(E.colorSpace)!==An,(u!==E||p!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new mt(new Qe(2,2),new zs({name:"BackgroundMaterial",uniforms:ca(Vs.background.uniforms),vertexShader:Vs.background.vertexShader,fragmentShader:Vs.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=ln.getTransfer(E.colorSpace)!==An,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,L){S.getRGB(Mh,Ju(i)),e.buffers.color.setClear(Mh.r,Mh.g,Mh.b,L,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,L=1){a.set(S),o=L,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,_(a,o)},render:g,addToRenderList:I,dispose:y}}function f_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(W,Q,ht,V,at){let ct=!1,st=p(W,V,ht,Q);r!==st&&(r=st,c(r.object)),ct=f(W,V,ht,at),ct&&g(W,V,ht,at),at!==null&&t.update(at,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,E(W,Q,ht,V),at!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function p(W,Q,ht,V){let at=V.wireframe===!0,ct=n[Q.id];ct===void 0&&(ct={},n[Q.id]=ct);let st=W.isInstancedMesh===!0?W.id:0,Pt=ct[st];Pt===void 0&&(Pt={},ct[st]=Pt);let lt=Pt[ht.id];lt===void 0&&(lt={},Pt[ht.id]=lt);let St=lt[at];return St===void 0&&(St=d(l()),lt[at]=St),St}function d(W){let Q=[],ht=[],V=[];for(let at=0;at<e;at++)Q[at]=0,ht[at]=0,V[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ht,attributeDivisors:V,object:W,attributes:{},index:null}}function f(W,Q,ht,V){let at=r.attributes,ct=Q.attributes,st=0,Pt=ht.getAttributes();for(let lt in Pt)if(Pt[lt].location>=0){let xt=at[lt],Ht=ct[lt];if(Ht===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(Ht=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(Ht=W.instanceColor)),xt===void 0||xt.attribute!==Ht||Ht&&xt.data!==Ht.data)return!0;st++}return r.attributesNum!==st||r.index!==V}function g(W,Q,ht,V){let at={},ct=Q.attributes,st=0,Pt=ht.getAttributes();for(let lt in Pt)if(Pt[lt].location>=0){let xt=ct[lt];xt===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(xt=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(xt=W.instanceColor));let Ht={};Ht.attribute=xt,xt&&xt.data&&(Ht.data=xt.data),at[lt]=Ht,st++}r.attributes=at,r.attributesNum=st,r.index=V}function I(){let W=r.newAttributes;for(let Q=0,ht=W.length;Q<ht;Q++)W[Q]=0}function _(W){y(W,0)}function y(W,Q){let ht=r.newAttributes,V=r.enabledAttributes,at=r.attributeDivisors;ht[W]=1,V[W]===0&&(i.enableVertexAttribArray(W),V[W]=1),at[W]!==Q&&(i.vertexAttribDivisor(W,Q),at[W]=Q)}function S(){let W=r.newAttributes,Q=r.enabledAttributes;for(let ht=0,V=Q.length;ht<V;ht++)Q[ht]!==W[ht]&&(i.disableVertexAttribArray(ht),Q[ht]=0)}function L(W,Q,ht,V,at,ct,st){st===!0?i.vertexAttribIPointer(W,Q,ht,at,ct):i.vertexAttribPointer(W,Q,ht,V,at,ct)}function E(W,Q,ht,V){I();let at=V.attributes,ct=ht.getAttributes(),st=Q.defaultAttributeValues;for(let Pt in ct){let lt=ct[Pt];if(lt.location>=0){let St=at[Pt];if(St===void 0&&(Pt==="instanceMatrix"&&W.instanceMatrix&&(St=W.instanceMatrix),Pt==="instanceColor"&&W.instanceColor&&(St=W.instanceColor)),St!==void 0){let xt=St.normalized,Ht=St.itemSize,le=t.get(St);if(le===void 0)continue;let pt=le.buffer,Zt=le.type,ie=le.bytesPerElement,_e=Zt===i.INT||Zt===i.UNSIGNED_INT||St.gpuType===Bc;if(St.isInterleavedBufferAttribute){let jt=St.data,re=jt.isInterleavedBuffer===!0?jt.stride:jt.itemSize,Xe=St.offset;if(jt.isInstancedInterleavedBuffer||jt.isInstancedBufferAttribute){for(let ye=0;ye<lt.locationSize;ye++)y(lt.location+ye,jt.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let ye=0;ye<lt.locationSize;ye++)_(lt.location+ye);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ye=0;ye<lt.locationSize;ye++)L(lt.location+ye,Ht/lt.locationSize,Zt,xt,re*ie,(Xe+Ht/lt.locationSize*ye)*ie,_e)}else{if(St.isInstancedBufferAttribute){for(let jt=0;jt<lt.locationSize;jt++)y(lt.location+jt,St.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<lt.locationSize;jt++)_(lt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let jt=0;jt<lt.locationSize;jt++)L(lt.location+jt,Ht/lt.locationSize,Zt,xt,Ht*ie,Ht/lt.locationSize*jt*ie,_e)}}else if(st!==void 0){let xt=st[Pt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(lt.location,xt);break;case 3:i.vertexAttrib3fv(lt.location,xt);break;case 4:i.vertexAttrib4fv(lt.location,xt);break;default:i.vertexAttrib1fv(lt.location,xt)}}}}S()}function F(){q();for(let W in n){let Q=n[W];for(let ht in Q){let V=Q[ht];for(let at in V){let ct=V[at];for(let st in ct)u(ct[st].object),delete ct[st];delete V[at]}}delete n[W]}}function N(W){if(n[W.id]===void 0)return;let Q=n[W.id];for(let ht in Q){let V=Q[ht];for(let at in V){let ct=V[at];for(let st in ct)u(ct[st].object),delete ct[st];delete V[at]}}delete n[W.id]}function M(W){for(let Q in n){let ht=n[Q];for(let V in ht){let at=ht[V];if(at[W.id]===void 0)continue;let ct=at[W.id];for(let st in ct)u(ct[st].object),delete ct[st];delete at[W.id]}}}function C(W){for(let Q in n){let ht=n[Q],V=W.isInstancedMesh===!0?W.id:0,at=ht[V];if(at!==void 0){for(let ct in at){let st=at[ct];for(let Pt in st)u(st[Pt].object),delete st[Pt];delete at[ct]}delete ht[V],Object.keys(ht).length===0&&delete n[Q]}}}function q(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:q,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:C,releaseStatesOfProgram:M,initAttributes:I,enableAttribute:_,disableUnusedAttributes:S}}function d_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Ms&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let C=M===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Hi&&M!==vs&&!C&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:I,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:S,maxVaryings:L,maxFragmentUniforms:E,maxSamples:F,samples:N}}function m_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Li,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,I=p.clipIntersection,_=p.clipShadows,y=i.get(p);if(!s||g===null||g.length===0||r&&!_)r?u(null):c();else{let S=r?0:n,L=S*4,E=y.clippingState||null;l.value=E,E=u(g,d,L,f);for(let F=0;F!==L;++F)E[F]=e[F];y.clippingState=E,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,f,g){let I=p!==null?p.length:0,_=null;if(I!==0){if(_=l.value,g!==!0||_===null){let y=f+I*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<y)&&(_=new Float32Array(y));for(let L=0,E=f;L!==I;++L,E+=4)a.copy(p[L]).applyMatrix4(S,o),a.normal.toArray(_,E),_[E+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,_}}var sl=class extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bn(5,5,5),r=new zs({name:"CubemapFromEquirect",uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ni,blending:ra});r.uniforms.tEquirect.value=e;let a=new mt(s,r),o=e.minFilter;return e.minFilter===rr&&(e.minFilter=Di),new Za(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},pp=256,g_=3,x_=20,Op=256,Bp=16,__=3,y_=new k,v_=new Se,wh=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Za(1,10,null),this._boxMesh=new mt(new bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=y_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,I=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,I===null&&(t.background=l.getClearColor(v_));let _=new Za(n,s,u);return _.position.copy(o),_.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=I,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(pp,np(t))}_fromTexture(t,e){t.mapping===oa||t.mapping===ja?this._setSize(t.image.length===0?pp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=mp(t,!1,!1),n=Math.log2(t)-g_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===oa||t.mapping===ja?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=b_(),this._integrationMaterial=M_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Bp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-__)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Op*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=S_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function mp(i,t,e){return new sl(i,{minFilter:rr,generateMipmaps:t,type:bs,colorSpace:So,depthBuffer:e})}function rl(i,t,e){return new zs({name:i,uniforms:t,vertexShader:tn.cube_vert,fragmentShader:e,side:ni,blending:ra,depthTest:!1,depthWrite:!1})}function b_(){return rl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Op}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function M_(){return rl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S_(){return rl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${x_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gp(){return rl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function xp(){return rl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Uc||f===Fc)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let I=new sl(g.height);return I.fromEquirectangularTexture(i,d),t.set(d,I),d.addEventListener("dispose",c),o(I.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Uc||f===Fc,I=f===oa||f===ja;if(g||I){let _=e.get(d),y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new wh(i)),_=g?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let S=d.image;return g&&S&&S.height>0||I&&S&&l(S)?(n===null&&(n=new wh(i)),_=g?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d,f){return f===Uc?d.mapping=oa:f===Fc&&(d.mapping=ja),d}function l(d){let f=0,g=6;for(let I=0;I<g;I++)d[I]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function T_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yo("WebGLRenderer: "+n+" extension not supported."),s}}}function E_(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let _ in g.attributes)t.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let I=r.get(g);I&&(t.remove(I),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,I){return s[I.id]!==void 0||(I.addEventListener("dispose",o),s[I.id]=new WeakRef(I),a.register(I,I.id,I),e.memory.geometries++),I}function u(g){let I=g.attributes;for(let _ in I)t.update(I[_],i.ARRAY_BUFFER)}function p(g){let I=g.index,_=g.attributes.position,y=0;if(_===void 0)return;let S=I!==null?I.array.length:_.array.length/3-1,L=_.count>=65535?Ro:Ao,E=new L(Math.ceil(S/3)*6,1),F=E.array;if(I!==null){let M=I.array;y=I.version;for(let C=0,q=0;C<S;C+=3){let z=M[C+0],W=M[C+1],Q=M[C+2];F[q++]=z,F[q++]=W,F[q++]=W,F[q++]=Q,F[q++]=Q,F[q++]=z}}else{y=_.version;for(let M=0,C=0;M<S;M+=3){let q=M+0,z=M+1,W=M+2;F[C++]=q,F[C++]=z,F[C++]=z,F[C++]=W,F[C++]=W,F[C++]=q}}E.version=y;let N=r.get(g);N&&t.remove(N),r.set(g,E)}function d(g){let I=r.get(g);if(I){let _=g.index;_!==null&&I.version<_.version&&p(g)}else p(g);return r.get(g)}function f(){for(let g in s){let I=s[g].deref();I!==void 0&&l(I)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function A_(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*a,f),e.update(d,n,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let I=0;for(let _=0;_<f;_++)I+=d[_];e.update(I,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function R_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ae("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C_(i,t,e){let n=new WeakMap,s=new Gn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let q=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,I=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],L=0;f===!0&&(L=1),g===!0&&(L=2),I===!0&&(L=3);let E=o.attributes.position.count*L,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let N=new Float32Array(E*F*4*p),M=new Eo(N,E,F,p);M.type=vs,M.needsUpdate=!0;let C=L*4;for(let z=0;z<p;z++){let W=_[z],Q=y[z],ht=S[z],V=E*F*4*z;for(let at=0;at<W.count;at++){let ct=at*C;f===!0&&(s.fromBufferAttribute(W,at),N[V+ct+0]=s.x,N[V+ct+1]=s.y,N[V+ct+2]=s.z,N[V+ct+3]=0),g===!0&&(s.fromBufferAttribute(Q,at),N[V+ct+4]=s.x,N[V+ct+5]=s.y,N[V+ct+6]=s.z,N[V+ct+7]=0),I===!0&&(s.fromBufferAttribute(ht,at),N[V+ct+8]=s.x,N[V+ct+9]=s.y,N[V+ct+10]=s.z,N[V+ct+11]=ht.itemSize===4?s.w:1)}}d={count:p,texture:M,size:new Nt(E,F)},n.set(o,d),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let I=0;I<c.length;I++)f+=c[I];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function I_(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var P_={[Cu]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Pu]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Uu]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function L_(i,t,e,n,s,r){let a=new Ni(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Dn;u.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let p=new _c({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mt(u,p),f=new qo(-1,1,1,-1,0,1),g=null,I=null,_=!1,y,S=null,L=[],E=!1;this.setSize=function(F,N){a.setSize(F,N),o!==null&&o.setSize(F,N),l!==null&&l.setSize(F,N);for(let M=0;M<L.length;M++){let C=L[M];C.setSize&&C.setSize(F,N)}},this.setEffects=function(F){L=F,E=L.length>0&&L[0].isRenderPass===!0;let N=a.width,M=a.height;L.length>0&&o===null&&(o=new Ni(N,M,{type:bs,depthBuffer:!1,stencilBuffer:!1}),l=new Ni(N,M,{type:bs,depthBuffer:!1,stencilBuffer:!1}));let C=s===!0&&L.some(q=>q.needsDepthTexture===!0);C!==(a.depthTexture!==null)&&(C===!0&&c===null&&(c=new ir(N,M),r===!0&&(c.format=ar,c.type=la)),a.dispose(),a.depthTexture=C?c:null,a.resolveDepthBuffer=C,a.storeMultisampledDepthBuffer=C);for(let q=0;q<L.length;q++){let z=L[q];z.setSize&&z.setSize(N,M),C&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(c)}},this.begin=function(F,N){if(_||F.toneMapping===ks&&L.length===0)return!1;if(S=N,N!==null){let M=N.width,C=N.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return E===!1&&F.setRenderTarget(a),y=F.toneMapping,F.toneMapping=ks,!0},this.hasRenderPass=function(){return E},this.end=function(F,N){F.toneMapping=y,_=!0;let M=a,C=o;for(let q=0;q<L.length;q++){let z=L[q];z.enabled!==!1&&(z.render(F,C,M,N),z.needsSwap!==!1&&(M=C,C=C===o?l:o))}if(g!==F.outputColorSpace||I!==F.toneMapping){g=F.outputColorSpace,I=F.toneMapping,p.defines={},ln.getTransfer(g)===An&&(p.defines.SRGB_TRANSFER="");let q=P_[I];q&&(p.defines[q]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=M.texture,F.setRenderTarget(S),F.render(d,f),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var zp=new Ei,kp=new ir(1,1),Gp=new Po(1),Vp=new Eo,Hp=new lc,Wp=new Io,_p=[],yp=[],vp=new Float32Array(16),bp=new Float32Array(9),Mp=new Float32Array(4);function no(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_p[s];if(r===void 0&&(r=new Float32Array(s),_p[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ii(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function si(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Th(i,t){let e=yp[t];e===void 0&&(e=new Int32Array(t),yp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;i.uniform2fv(this.addr,t),si(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ii(e,t))return;i.uniform3fv(this.addr,t),si(e,t)}}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;i.uniform4fv(this.addr,t),si(e,t)}}function O_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ii(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),si(e,t)}else{if(ii(e,n))return;Mp.set(n),i.uniformMatrix2fv(this.addr,!1,Mp),si(e,n)}}function B_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ii(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),si(e,t)}else{if(ii(e,n))return;bp.set(n),i.uniformMatrix3fv(this.addr,!1,bp),si(e,n)}}function z_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ii(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),si(e,t)}else{if(ii(e,n))return;vp.set(n),i.uniformMatrix4fv(this.addr,!1,vp),si(e,n)}}function k_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;i.uniform2iv(this.addr,t),si(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ii(e,t))return;i.uniform3iv(this.addr,t),si(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;i.uniform4iv(this.addr,t),si(e,t)}}function W_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;i.uniform2uiv(this.addr,t),si(e,t)}}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ii(e,t))return;i.uniform3uiv(this.addr,t),si(e,t)}}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;i.uniform4uiv(this.addr,t),si(e,t)}}function Eh(i){return i.version===0&&(i.compareFunction=qu,i.needsUpdate=!0),i}function $_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Eh(kp):r=zp,e.setTexture2D(t||r,s)}function Z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hp,s)}function J_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Eh(Gp):r=Wp,e.setTextureCube(t||r,s)}function K_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vp,s)}function j_(i){switch(i){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}function Q_(i,t){i.uniform1fv(this.addr,t)}function ty(i,t){let e=no(t,this.size,2);i.uniform2fv(this.addr,e)}function ey(i,t){let e=no(t,this.size,3);i.uniform3fv(this.addr,e)}function ny(i,t){let e=no(t,this.size,4);i.uniform4fv(this.addr,e)}function iy(i,t){let e=no(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sy(i,t){let e=no(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ry(i,t){let e=no(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ay(i,t){i.uniform1iv(this.addr,t)}function oy(i,t){i.uniform2iv(this.addr,t)}function ly(i,t){i.uniform3iv(this.addr,t)}function cy(i,t){i.uniform4iv(this.addr,t)}function hy(i,t){i.uniform1uiv(this.addr,t)}function uy(i,t){i.uniform2uiv(this.addr,t)}function fy(i,t){i.uniform3uiv(this.addr,t)}function dy(i,t){i.uniform4uiv(this.addr,t)}function py(i,t,e){let n=this.cache,s=t.length,r=Th(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),si(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eh(kp):a=zp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function my(i,t,e){let n=this.cache,s=t.length,r=Th(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),si(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hp,r[a])}function gy(i,t,e){let n=this.cache,s=t.length,r=Th(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),si(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Eh(Gp):a=Wp;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function xy(i,t,e){let n=this.cache,s=t.length,r=Th(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),si(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vp,r[a])}function _y(i){switch(i){case 5126:return Q_;case 35664:return ty;case 35665:return ey;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return hy;case 36294:return uy;case 36295:return fy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return xy}}var lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j_(e.type)}},cf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_y(e.type)}},hf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},af=/(\w+)(\])?(\[|\.)?/g;function Sp(i,t){i.seq.push(t),i.map[t.id]=t}function yy(i,t,e){let n=i.name,s=n.length;for(af.lastIndex=0;;){let r=af.exec(n),a=af.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sp(e,c===void 0?new lf(o,i,t):new cf(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new hf(o),Sp(e,p)),e=p}}}var to=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);yy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vy=37297,by=0;function My(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Tp=new Oe;function Sy(i){ln._getMatrix(Tp,ln.workingColorSpace,i);let t=`mat3( ${Tp.elements.map(e=>e.toFixed(4))} )`;switch(ln.getTransfer(i)){case wo:return[t,"LinearTransferOETF"];case An:return[t,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ep(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+My(i.getShaderSource(t),o)}else return r}function wy(i,t){let e=Sy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ty={[Cu]:"Linear",[Iu]:"Reinhard",[Pu]:"Cineon",[Lu]:"ACESFilmic",[Nu]:"AgX",[Uu]:"Neutral",[Du]:"Custom"};function Ey(i,t){let e=Ty[t];return e===void 0?(Re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sh=new k;function Ay(){ln.getLuminanceCoefficients(Sh);let i=Sh.x.toFixed(4),t=Sh.y.toFixed(4),e=Sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function Cy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function il(i){return i!==""}function Ap(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Rp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(i){return i.replace(Py,Ly)}function Ly(i,t){let e=tn[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return uf(e)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(i){return i.replace(Dy,Ny)}function Ny(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Uy={[$o]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function Fy(i){return Uy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Oy={[ja]:"ENVMAP_MODE_REFRACTION"};function By(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zy={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[Gd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function ky(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zy[i.combine]||"ENVMAP_BLENDING_NONE"}function Gy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=By(e),p=ky(e),d=Ry(e),f=Cy(r),g=s.createProgram(),I,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(I=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(il).join(`
`),I.length>0&&(I+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(il).join(`
`),_.length>0&&(_+=`
`)):(I=[Ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),_=[Ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ks?"#define TONE_MAPPING":"",e.toneMapping!==ks?tn.tonemapping_pars_fragment:"",e.toneMapping!==ks?Ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",tn.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),Ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(il).join(`
`)),a=uf(a),a=Ap(a,e),a=Rp(a,e),o=uf(o),o=Ap(o,e),o=Rp(o,e),a=Cp(a),o=Cp(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,I=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,_=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=y+I+a,L=y+_+o,E=wp(s,s.VERTEX_SHADER,S),F=wp(s,s.FRAGMENT_SHADER,L);s.attachShader(g,E),s.attachShader(g,F),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function N(z){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(g)||"",Q=s.getShaderInfoLog(E)||"",ht=s.getShaderInfoLog(F)||"",V=W.trim(),at=Q.trim(),ct=ht.trim(),st=!0,Pt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,F);else{let lt=Ep(s,E,"vertex"),St=Ep(s,F,"fragment");Ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+V+`
`+lt+`
`+St)}else V!==""?Re("WebGLProgram: Program Info Log:",V):(at===""||ct==="")&&(Pt=!1);Pt&&(z.diagnostics={runnable:st,programLog:V,vertexShader:{log:at,prefix:I},fragmentShader:{log:ct,prefix:_}})}s.deleteShader(E),s.deleteShader(F),M=new to(s,g),C=Iy(s,g)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(g,vy)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=by++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=F,this}var Vy=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new df(t),e.set(t,n)),n}},df=class{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}};function Hy(i){return i===Ur||i===tl||i===el}function Wy(i,t,e,n,s,r){let a=new ka,o=new ff,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,C,q,z,W,Q){let ht=z.fog,V=W.geometry,at=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,ct=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,st=t.get(M.envMap||at,ct),Pt=d[M.type],lt=n.precision;M.precision!==null&&(lt=n.getMaxPrecision(M.precision),lt!==M.precision&&Re("WebGLProgram.getParameters:",M.precision,"not supported, using",lt,"instead."));let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=St!==void 0?St.length:0,Ht=0;V.morphAttributes.position!==void 0&&(Ht=1),V.morphAttributes.normal!==void 0&&(Ht=2),V.morphAttributes.color!==void 0&&(Ht=3);let le,pt,Zt,ie;if(Pt){let $t=Vs[Pt];le=$t.vertexShader,pt=$t.fragmentShader}else{le=M.vertexShader,pt=M.fragmentShader;let $t=o.getVertexShaderStage(M),on=o.getFragmentShaderStage(M);o.update(M,$t,on),Zt=$t.id,ie=on.id}let _e=i.getRenderTarget(),jt=i.state.buffers.depth.getReversed(),re=W.isInstancedMesh===!0,Xe=W.isBatchedMesh===!0,ye=!!M.map,Be=!!M.matcap,qe=!!st,Mt=qe&&st.isPMREMTexture===!0,kt=!!M.aoMap,Rt=!!M.lightMap,Vt=!!M.bumpMap&&M.wireframe===!1,Ft=!!M.normalMap,Le=!!M.displacementMap,ce=!!M.emissiveMap,Ye=!!M.metalnessMap,$e=!!M.roughnessMap,sn=M.anisotropy>0,X=M.clearcoat>0,Ee=M.diffuseRoughness>0,Ne=M.dispersion>0,ze=M.retroreflectivity>0,Bt=M.iridescence>0,yn=M.sheen>0,pe=M.transmission>0,Me=sn&&!!M.anisotropyMap,U=X&&!!M.clearcoatMap,w=X&&!!M.clearcoatNormalMap,et=X&&!!M.clearcoatRoughnessMap,Lt=Ee&&!!M.diffuseRoughnessMap,vt=Bt&&!!M.iridescenceMap,Ct=Bt&&!!M.iridescenceThicknessMap,zt=yn&&!!M.sheenColorMap,gt=yn&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Gt=!!M.specularColorMap,G=!!M.specularIntensityMap,Y=pe&&!!M.transmissionMap,ut=pe&&!!M.thicknessMap,Xt=!!M.gradientMap,Dt=!!M.alphaMap,Wt=M.alphaTest>0,ue=!!M.alphaHash,Ue=!!M.extensions,Tt=ks;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let me=Mt?st.isCompressedCubeTexture?st.image[0].mipmaps:st.mipmaps:null,Te={shaderID:Pt,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:pt,defines:M.defines,customVertexShaderID:Zt,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:lt,batching:Xe,batchingColor:Xe&&W._colorsTexture!==null,instancing:re,instancingColor:re&&W.instanceColor!==null,instancingMorph:re&&W.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ln.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:Be,envMap:qe,envMapMode:qe&&st.mapping,envMapPMREM:Mt,envMapMaxLod:Mt?me.length-1:null,envMapSize:Mt?me[0].width:null,aoMap:kt,lightMap:Rt,bumpMap:Vt,normalMap:Ft,displacementMap:Le,emissiveMap:ce,normalMapObjectSpace:Ft&&M.normalMapType===Xd,normalMapTangentSpace:Ft&&M.normalMapType===vh,packedNormalMap:Ft&&M.normalMapType===vh&&Hy(M.normalMap.format),metalnessMap:Ye,roughnessMap:$e,anisotropy:sn,anisotropyMap:Me,clearcoat:X,clearcoatMap:U,clearcoatNormalMap:w,clearcoatRoughnessMap:et,diffuseRoughness:Ee,diffuseRoughnessMap:Lt,dispersion:Ne,retroreflection:ze,iridescence:Bt,iridescenceMap:vt,iridescenceThicknessMap:Ct,sheen:yn,sheenColorMap:zt,sheenRoughnessMap:gt,specularMap:_t,specularColorMap:Gt,specularIntensityMap:G,transmission:pe,transmissionMap:Y,thicknessMap:ut,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===Ka&&M.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Wt,alphaHash:ue,combine:M.combine,mapUv:ye&&f(M.map.channel),aoMapUv:kt&&f(M.aoMap.channel),lightMapUv:Rt&&f(M.lightMap.channel),bumpMapUv:Vt&&f(M.bumpMap.channel),normalMapUv:Ft&&f(M.normalMap.channel),displacementMapUv:Le&&f(M.displacementMap.channel),emissiveMapUv:ce&&f(M.emissiveMap.channel),metalnessMapUv:Ye&&f(M.metalnessMap.channel),roughnessMapUv:$e&&f(M.roughnessMap.channel),anisotropyMapUv:Me&&f(M.anisotropyMap.channel),clearcoatMapUv:U&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Lt&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:vt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&f(M.sheenRoughnessMap.channel),specularMapUv:_t&&f(M.specularMap.channel),specularColorMapUv:Gt&&f(M.specularColorMap.channel),specularIntensityMapUv:G&&f(M.specularIntensityMap.channel),transmissionMapUv:Y&&f(M.transmissionMap.channel),thicknessMapUv:ut&&f(M.thicknessMap.channel),alphaMapUv:Dt&&f(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ft||sn),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(ye||Dt),fog:!!ht,useFog:M.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&Ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:jt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:Q.filter($t=>$t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&ln.getTransfer(M.map.colorSpace)===An,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&ln.getTransfer(M.emissiveMap.colorSpace)===An,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===ni,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function I(M){let C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(let q in M.defines)C.push(q),C.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(_(C,M),y(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapPMREM),M.push(C.envMapMaxLod),M.push(C.envMapSize),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.diffuseRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.numLightProbeGrids),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.diffuseRoughness&&a.enable(25),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){let C=d[M.type],q;if(C){let z=Vs[C];q=up.clone(z.uniforms)}else q=M.uniforms;return q}function L(M,C){let q=u.get(C);return q!==void 0?++q.usedTimes:(q=new Gy(i,C,M,s),c.push(q),u.set(C,q)),q}function E(M){if(--M.usedTimes===0){let C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function F(M){o.remove(M)}function N(){o.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:S,acquireProgram:L,releaseProgram:E,releaseShaderCache:F,programs:c,dispose:N}}function Xy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,I,_,y){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:I,renderOrder:d.renderOrder,z:_,group:y},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=I,S.renderOrder=d.renderOrder,S.z=_,S.group=y),t++,S}function l(d,f,g,I,_,y,S){S.reversedDepth===!0&&(_=-_);let L=o(d,f,g,I,_,y);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):e.push(L)}function c(d,f,g,I,_,y){let S=o(d,f,g,I,_,y);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(d,f){e.length>1&&e.sort(d||qy),n.length>1&&n.sort(f||Pp),s.length>1&&s.sort(f||Pp)}function p(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Yy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lp,i.set(n,[a])):s>=r.length?(a=new Lp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $y(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Se};break;case"SpotLight":e={position:new k,direction:new k,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Zy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jy=0;function Ky(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jy(i){let t=new $y,e=Zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new Ln,a=new Ln;function o(c){let u=0,p=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let f=0,g=0,I=0,_=0,y=0,S=0,L=0,E=0,F=0,N=0,M=0,C=0,q=0,z=0;c.sort(Ky);for(let Q=0,ht=c.length;Q<ht;Q++){let V=c[Q],at=V.color,ct=V.intensity,st=V.distance,Pt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ur?Pt=V.shadow.map.texture:Pt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=at.r*ct,p+=at.g*ct,d+=at.b*ct;else if(V.isLightProbe){for(let lt=0;lt<9;lt++)n.probe[lt].addScaledVector(V.sh.coefficients[lt],ct);z++}else if(V.isSunLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let St=V.shadow,xt=e.get(V);xt.shadowIntensity=St.intensity,xt.shadowBias=St.bias,xt.shadowNormalBias=St.normalBias,xt.shadowRadius=St.radius,xt.shadowMapSize.copy(St.mapSize).multiply(St.getFrameExtents()),n.sunShadow[g]=xt,n.sunShadowMap[g]=Pt;let Ht=St.getViewportCount();for(let le=0;le<Ht;le++)n.sunShadowMatrix[I+le]=St.getMatrix(le),n.sunShadowCascade[I+le]=St._cascadeData[le];I+=Ht,g++}n.sun[f]=lt,f++}else if(V.isDirectionalLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let St=V.shadow,xt=e.get(V);xt.shadowIntensity=St.intensity,xt.shadowBias=St.bias,xt.shadowNormalBias=St.normalBias,xt.shadowRadius=St.radius,xt.shadowMapSize=St.mapSize,n.directionalShadow[_]=xt,n.directionalShadowMap[_]=Pt,n.directionalShadowMatrix[_]=V.shadow.matrix,F++}n.directional[_]=lt,_++}else if(V.isSpotLight){let lt=t.get(V);lt.position.setFromMatrixPosition(V.matrixWorld),lt.color.copy(at).multiplyScalar(ct),lt.distance=st,lt.coneCos=Math.cos(V.angle),lt.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),lt.decay=V.decay,n.spot[S]=lt;let St=V.shadow;if(V.map&&(n.spotLightMap[C]=V.map,C++,St.updateMatrices(V),V.castShadow&&q++),n.spotLightMatrix[S]=St.matrix,V.castShadow){let xt=e.get(V);xt.shadowIntensity=St.intensity,xt.shadowBias=St.bias,xt.shadowNormalBias=St.normalBias,xt.shadowRadius=St.radius,xt.shadowMapSize=St.mapSize,n.spotShadow[S]=xt,n.spotShadowMap[S]=Pt,M++}S++}else if(V.isRectAreaLight){let lt=t.get(V);lt.color.copy(at).multiplyScalar(ct),lt.halfWidth.set(V.width*.5,0,0),lt.halfHeight.set(0,V.height*.5,0),n.rectArea[L]=lt,L++}else if(V.isPointLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),lt.distance=V.distance,lt.decay=V.decay,V.castShadow){let St=V.shadow,xt=e.get(V);xt.shadowIntensity=St.intensity,xt.shadowBias=St.bias,xt.shadowNormalBias=St.normalBias,xt.shadowRadius=St.radius,xt.shadowMapSize=St.mapSize,xt.shadowCameraNear=St.camera.near,xt.shadowCameraFar=St.camera.far,n.pointShadow[y]=xt,n.pointShadowMap[y]=Pt,n.pointShadowMatrix[y]=V.shadow.matrix,N++}n.point[y]=lt,y++}else if(V.isHemisphereLight){let lt=t.get(V);lt.skyColor.copy(V.color).multiplyScalar(ct),lt.groundColor.copy(V.groundColor).multiplyScalar(ct),n.hemi[E]=lt,E++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let W=n.hash;(W.sunLength!==f||W.directionalLength!==_||W.pointLength!==y||W.spotLength!==S||W.rectAreaLength!==L||W.hemiLength!==E||W.numSunShadows!==g||W.numDirectionalShadows!==F||W.numPointShadows!==N||W.numSpotShadows!==M||W.numSpotMaps!==C||W.numLightProbes!==z)&&(n.sun.length=f,n.directional.length=_,n.spot.length=S,n.rectArea.length=L,n.point.length=y,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.directionalShadowMatrix.length=F,n.pointShadow.length=N,n.pointShadowMap.length=N,n.pointShadowMatrix.length=N,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+C-q,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=q,n.numLightProbes=z,W.sunLength=f,W.directionalLength=_,W.pointLength=y,W.spotLength=S,W.rectAreaLength=L,W.hemiLength=E,W.numSunShadows=g,W.numDirectionalShadows=F,W.numPointShadows=N,W.numSpotShadows=M,W.numSpotMaps=C,W.numLightProbes=z,n.version=Jy++)}function l(c,u){let p=0,d=0,f=0,g=0,I=0,_=0,y=u.matrixWorldInverse;for(let S=0,L=c.length;S<L;S++){let E=c[S];if(E.isSunLight){let F=n.sun[p];F.direction.setFromMatrixPosition(E.matrixWorld),F.direction.transformDirection(y),p++}else if(E.isDirectionalLight){let F=n.directional[d];F.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(y),d++}else if(E.isSpotLight){let F=n.spot[g];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(y),g++}else if(E.isRectAreaLight){let F=n.rectArea[I];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(y),a.identity(),r.copy(E.matrixWorld),r.premultiply(y),a.extractRotation(r),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),F.halfWidth.applyMatrix4(a),F.halfHeight.applyMatrix4(a),I++}else if(E.isPointLight){let F=n.point[f];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(y),f++}else if(E.isHemisphereLight){let F=n.hemi[_];F.direction.setFromMatrixPosition(E.matrixWorld),F.direction.transformDirection(y),_++}}}return{setup:o,setupView:l,state:n}}function Dp(i){let t=new jy(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dp(i),t.set(s,[o])):r>=a.length?(o=new Dp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n1=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],i1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Np=new Ln,nl=new k,of=new k;function s1(i,t,e){let n=new Rr,s=new Nt,r=new Nt,a=new Gn,o=new yc,l=new vc,c={},u=e.maxTextureSize,p={[Nr]:ni,[ni]:Nr,[Vn]:Vn},d=new zs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:t1,fragmentShader:e1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dn;g.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new mt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let y=this.type;this.render=function(N,M,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;this.type===Dc&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$o);let q=i.getRenderTarget(),z=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(ra),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let ht=y!==this.type;ht&&M.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(at=>at.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,at=N.length;V<at;V++){let ct=N[V],st=ct.shadow;if(st===void 0){Re("WebGLShadowMap:",ct,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let Pt=st.getFrameExtents();s.multiply(Pt),r.copy(st.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Pt.x),s.x=r.x*Pt.x,st.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Pt.y),s.y=r.y*Pt.y,st.mapSize.y=r.y));let lt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=lt,st.map===null||ht===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===Ja){if(ct.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Ni(s.x,s.y,{format:Ur,type:bs,minFilter:Di,magFilter:Di,generateMipmaps:!1}),st.map.texture.name=ct.name+".shadowMap",st.map.depthTexture=new ir(s.x,s.y,vs),st.map.depthTexture.name=ct.name+".shadowMapDepth",st.map.depthTexture.format=er,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=hi,st.map.depthTexture.magFilter=hi}else ct.isPointLight?(st.map=new sl(s.x),st.map.depthTexture=new Po(s.x,ys)):(st.map=new Ni(s.x,s.y),st.map.depthTexture=new ir(s.x,s.y,ys)),st.map.depthTexture.name=ct.name+".shadowMap",st.map.depthTexture.format=er,this.type===$o?(st.map.depthTexture.compareFunction=lt?Xu:Wu,st.map.depthTexture.minFilter=Di,st.map.depthTexture.magFilter=Di):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=hi,st.map.depthTexture.magFilter=hi);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let St=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ct.isPointLight!==!0&&st.updateMatrices(ct,C);let xt=(st.camera.layers.mask&4294967294)!==0?st.camera.layers:C.layers;for(let Ht=0;Ht<St;Ht++){let le=st.getCamera(Ht);if(ct.isPointLight){let pt=st.camera,Zt=st.matrix,ie=ct.distance||pt.far;ie!==pt.far&&(pt.far=ie,pt.updateProjectionMatrix()),nl.setFromMatrixPosition(ct.matrixWorld),pt.position.copy(nl),of.copy(pt.position),of.add(n1[Ht]),pt.up.copy(i1[Ht]),pt.lookAt(of),pt.updateMatrixWorld(),Zt.makeTranslation(-nl.x,-nl.y,-nl.z),Np.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(Np,pt.coordinateSystem,pt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(st.map),i.clear());let pt=st.getViewport(Ht);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Q.viewport(a)}n=st.getFrustum(Ht),E(M,C,le,ct,xt,this.type)}st.isPointLightShadow!==!0&&this.type===Ja&&S(st,C),st.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(q,z,W)};function S(N,M){let C=t.update(I);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null?N.mapPass=new Ni(s.x,s.y,{format:Ur,type:bs}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),d.uniforms.shadow_pass.value=N.map.depthTexture,d.uniforms.resolution.value.set(N.map.width,N.map.height),d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(M,null,C,d,I,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value.set(N.map.width,N.map.height),f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(M,null,C,f,I,null)}function L(N,M,C,q){let z=null,W=C.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(W!==void 0)z=W;else if(z=C.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let Q=z.uuid,ht=M.uuid,V=c[Q];V===void 0&&(V={},c[Q]=V);let at=V[ht];at===void 0&&(at=z.clone(),V[ht]=at,M.addEventListener("dispose",F)),z=at}if(z.visible=M.visible,z.wireframe=M.wireframe,q===Ja?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:p[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,z.map=M.map,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let Q=i.properties.get(z);Q.light=C}return z}function E(N,M,C,q,z,W){if(N.visible===!1)return;if(N.layers.test(z)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Ja)&&(!N.frustumCulled||N.intersectsFrustum(n))){N.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,N.matrixWorld);let V=t.update(N),at=N.material;if(Array.isArray(at)){let ct=V.groups;for(let st=0,Pt=ct.length;st<Pt;st++){let lt=ct[st],St=at[lt.materialIndex];if(St&&St.visible){let xt=L(N,St,q,W);N.onBeforeShadow(i,N,M,C,V,xt,lt),i.renderBufferDirect(C,null,V,xt,N,lt),N.onAfterShadow(i,N,M,C,V,xt,lt)}}}else if(at.visible){let ct=L(N,at,q,W);N.onBeforeShadow(i,N,M,C,V,ct,null),i.renderBufferDirect(C,null,V,ct,N,null),N.onAfterShadow(i,N,M,C,V,ct,null)}}let ht=N.children;for(let V=0,at=ht.length;V<at;V++)E(ht[V],M,C,q,z,W)}function F(N){N.target.removeEventListener("dispose",F);for(let C in c){let q=c[C],z=N.target.uuid;z in q&&(q[z].dispose(),delete q[z])}}}function r1(i,t){function e(){let G=!1,Y=new Gn,ut=null,Xt=new Gn(0,0,0,0);return{setMask:function(Dt){ut!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),ut=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Wt,ue,Ue,Tt){Tt===!0&&(Dt*=Ue,Wt*=Ue,ue*=Ue),Y.set(Dt,Wt,ue,Ue),Xt.equals(Y)===!1&&(i.clearColor(Dt,Wt,ue,Ue),Xt.copy(Y))},reset:function(){G=!1,ut=null,Xt.set(-1,0,0,0)}}}function n(){let G=!1,Y=!1,ut=null,Xt=null,Dt=null;return{setReversed:function(Wt){if(Y!==Wt){let ue=t.get("EXT_clip_control");Wt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),Y=Wt;let Ue=Dt;Dt=null,this.setClear(Ue)}},getReversed:function(){return Y},setTest:function(Wt){Wt?jt(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(Wt){ut!==Wt&&!G&&(i.depthMask(Wt),ut=Wt)},setFunc:function(Wt){if(Y&&(Wt=ep[Wt]),Xt!==Wt){switch(Wt){case Jl:i.depthFunc(i.NEVER);break;case Kl:i.depthFunc(i.ALWAYS);break;case jl:i.depthFunc(i.LESS);break;case Ua:i.depthFunc(i.LEQUAL);break;case Ql:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Xt=Wt}},setLocked:function(Wt){G=Wt},setClear:function(Wt){Dt!==Wt&&(Dt=Wt,Y&&(Wt=1-Wt),i.clearDepth(Wt))},reset:function(){G=!1,ut=null,Xt=null,Dt=null,Y=!1}}}function s(){let G=!1,Y=null,ut=null,Xt=null,Dt=null,Wt=null,ue=null,Ue=null,Tt=null;return{setTest:function(me){G||(me?jt(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(me){Y!==me&&!G&&(i.stencilMask(me),Y=me)},setFunc:function(me,Te,$t){(ut!==me||Xt!==Te||Dt!==$t)&&(i.stencilFunc(me,Te,$t),ut=me,Xt=Te,Dt=$t)},setOp:function(me,Te,$t){(Wt!==me||ue!==Te||Ue!==$t)&&(i.stencilOp(me,Te,$t),Wt=me,ue=Te,Ue=$t)},setLocked:function(me){G=me},setClear:function(me){Tt!==me&&(i.clearStencil(me),Tt=me)},reset:function(){G=!1,Y=null,ut=null,Xt=null,Dt=null,Wt=null,ue=null,Ue=null,Tt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,g=[],I=null,_=!1,y=null,S=null,L=null,E=null,F=null,N=null,M=null,C=new Se(0,0,0),q=0,z=!1,W=null,Q=null,ht=null,V=null,at=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,Pt=0,lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(Pt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),st=Pt>=1):lt.indexOf("OpenGL ES")!==-1&&(Pt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),st=Pt>=2);let St=null,xt={},Ht=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),pt=new Gn().fromArray(Ht),Zt=new Gn().fromArray(le);function ie(G,Y,ut,Xt){let Dt=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(G,Wt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<ut;ue++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,Xt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Y+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Wt}let _e={};_e[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),jt(i.DEPTH_TEST),a.setFunc(Ua),Vt(!1),Ft(wu),jt(i.CULL_FACE),kt(ra);function jt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function re(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Xe(G,Y){return d[G]!==Y?(i.bindFramebuffer(G,Y),d[G]=Y,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Y),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function ye(G,Y){let ut=g,Xt=!1;if(G){ut=f.get(Y),ut===void 0&&(ut=[],f.set(Y,ut));let Dt=G.textures;if(ut.length!==Dt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,ue=Dt.length;Wt<ue;Wt++)ut[Wt]=i.COLOR_ATTACHMENT0+Wt;ut.length=Dt.length,Xt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Xt=!0);Xt&&i.drawBuffers(ut)}function Be(G){return I!==G?(i.useProgram(G),I=G,!0):!1}let qe={[aa]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};qe[Ed]=i.MIN,qe[Ad]=i.MAX;let Mt={[Rd]:i.ZERO,[Cd]:i.ONE,[Id]:i.SRC_COLOR,[Au]:i.SRC_ALPHA,[Fd]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[Ru]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Od]:i.CONSTANT_COLOR,[Bd]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(G,Y,ut,Xt,Dt,Wt,ue,Ue,Tt,me){if(G===ra){_===!0&&(re(i.BLEND),_=!1);return}if(_===!1&&(jt(i.BLEND),_=!0),G!==Sd){if(G!==y||me!==z){if((S!==aa||F!==aa)&&(i.blendEquation(i.FUNC_ADD),S=aa,F=aa),me)switch(G){case Ka:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ae("WebGLState: Invalid blending: ",G);break}else switch(G){case Ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tu:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",G);break}L=null,E=null,N=null,M=null,C.set(0,0,0),q=0,y=G,z=me}return}Dt=Dt||Y,Wt=Wt||ut,ue=ue||Xt,(Y!==S||Dt!==F)&&(i.blendEquationSeparate(qe[Y],qe[Dt]),S=Y,F=Dt),(ut!==L||Xt!==E||Wt!==N||ue!==M)&&(i.blendFuncSeparate(Mt[ut],Mt[Xt],Mt[Wt],Mt[ue]),L=ut,E=Xt,N=Wt,M=ue),(Ue.equals(C)===!1||Tt!==q)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Tt),C.copy(Ue),q=Tt),y=G,z=!1}function Rt(G,Y){G.side===Vn?re(i.CULL_FACE):jt(i.CULL_FACE);let ut=G.side===ni;Y&&(ut=!ut),Vt(ut),G.blending===Ka&&G.transparent===!1?kt(ra):kt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Xt=G.stencilWrite;o.setTest(Xt),Xt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?jt(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(G){W!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),W=G)}function Ft(G){G!==bd?(jt(i.CULL_FACE),G!==Q&&(G===wu?i.cullFace(i.BACK):G===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),Q=G}function Le(G){G!==ht&&(st&&i.lineWidth(G),ht=G)}function ce(G,Y,ut){G?(jt(i.POLYGON_OFFSET_FILL),(V!==Y||at!==ut)&&(V=Y,at=ut,a.getReversed()&&(Y=-Y,ut=-ut),i.polygonOffset(Y,ut))):re(i.POLYGON_OFFSET_FILL)}function Ye(G){G?jt(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function $e(G){G===void 0&&(G=i.TEXTURE0+ct-1),St!==G&&(i.activeTexture(G),St=G)}function sn(G,Y,ut){ut===void 0&&(St===null?ut=i.TEXTURE0+ct-1:ut=St);let Xt=xt[ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},xt[ut]=Xt),(Xt.type!==G||Xt.texture!==Y)&&(St!==ut&&(i.activeTexture(ut),St=ut),i.bindTexture(G,Y||_e[G]),Xt.type=G,Xt.texture=Y)}function X(){let G=xt[St];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ee(){try{i.compressedTexImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Ne(){try{i.compressedTexImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function ze(){try{i.texSubImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Bt(){try{i.texSubImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function yn(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function pe(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Me(){try{i.texStorage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function U(){try{i.texStorage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function w(){try{i.texImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function et(){try{i.texImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Lt(G){return p[G]!==void 0?p[G]:i.getParameter(G)}function vt(G,Y){p[G]!==Y&&(i.pixelStorei(G,Y),p[G]=Y)}function Ct(G){pt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),pt.copy(G))}function zt(G){Zt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Zt.copy(G))}function gt(G,Y){let ut=c.get(Y);ut===void 0&&(ut=new WeakMap,c.set(Y,ut));let Xt=ut.get(G);Xt===void 0&&(Xt=i.getUniformBlockIndex(Y,G.name),i.uniformBlockBinding(Y,Xt,Xt),ut.set(G,Xt))}function _t(G,Y,ut){let Dt=c.get(Y).get(G);l[Dt]!==ut&&(i.bindBufferBase(i.UNIFORM_BUFFER,Dt,ut),l[Dt]=ut)}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},St=null,xt={},d={},l={},f=new WeakMap,g=[],I=null,_=!1,y=null,S=null,L=null,E=null,F=null,N=null,M=null,C=new Se(0,0,0),q=0,z=!1,W=null,Q=null,ht=null,V=null,at=null,pt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:jt,disable:re,bindFramebuffer:Xe,drawBuffers:ye,useProgram:Be,setBlending:kt,setMaterial:Rt,setFlipSided:Vt,setCullFace:Ft,setLineWidth:Le,setPolygonOffset:ce,setScissorTest:Ye,activeTexture:$e,bindTexture:sn,unbindTexture:X,compressedTexImage2D:Ee,compressedTexImage3D:Ne,texImage2D:w,texImage3D:et,pixelStorei:vt,getParameter:Lt,updateUBOMapping:gt,uniformBlockBinding:_t,texStorage2D:Me,texStorage3D:U,texSubImage2D:ze,texSubImage3D:Bt,compressedTexSubImage2D:yn,compressedTexSubImage3D:pe,scissor:Ct,viewport:zt,reset:Gt}}function a1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap,p=new Set,d,f=new WeakMap,g=new Set,I=new FinalizationRegistry(U=>g.delete(U)),_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,w){return _?new OffscreenCanvas(U,w):Oa("canvas")}function S(U,w,et){let Lt=1,vt=Me(U);if((vt.width>et||vt.height>et)&&(Lt=et/Math.max(vt.width,vt.height)),Lt<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let Ct=Math.floor(Lt*vt.width),zt=Math.floor(Lt*vt.height);d===void 0&&(d=y(Ct,zt));let gt=w?y(Ct,zt):d;return gt.width=Ct,gt.height=zt,gt.getContext("2d").drawImage(U,0,0,Ct,zt),Re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+Ct+"x"+zt+")."),gt}else return"data"in U&&Re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function L(U){return U.generateMipmaps}function E(U){i.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(U,w,et,Lt,vt,Ct=!1){if(U!==null){if(i[U]!==void 0)return i[U];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let zt;Lt&&(zt=t.get("EXT_texture_norm16"),zt||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=w;if(w===i.RED&&(et===i.FLOAT&&(gt=i.R32F),et===i.HALF_FLOAT&&(gt=i.R16F),et===i.UNSIGNED_BYTE&&(gt=i.R8),et===i.UNSIGNED_SHORT&&zt&&(gt=zt.R16_EXT),et===i.SHORT&&zt&&(gt=zt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.R8UI),et===i.UNSIGNED_SHORT&&(gt=i.R16UI),et===i.UNSIGNED_INT&&(gt=i.R32UI),et===i.BYTE&&(gt=i.R8I),et===i.SHORT&&(gt=i.R16I),et===i.INT&&(gt=i.R32I)),w===i.RG&&(et===i.FLOAT&&(gt=i.RG32F),et===i.HALF_FLOAT&&(gt=i.RG16F),et===i.UNSIGNED_BYTE&&(gt=i.RG8),et===i.UNSIGNED_SHORT&&zt&&(gt=zt.RG16_EXT),et===i.SHORT&&zt&&(gt=zt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RG8UI),et===i.UNSIGNED_SHORT&&(gt=i.RG16UI),et===i.UNSIGNED_INT&&(gt=i.RG32UI),et===i.BYTE&&(gt=i.RG8I),et===i.SHORT&&(gt=i.RG16I),et===i.INT&&(gt=i.RG32I)),w===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),et===i.UNSIGNED_INT&&(gt=i.RGB32UI),et===i.BYTE&&(gt=i.RGB8I),et===i.SHORT&&(gt=i.RGB16I),et===i.INT&&(gt=i.RGB32I)),w===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),et===i.UNSIGNED_INT&&(gt=i.RGBA32UI),et===i.BYTE&&(gt=i.RGBA8I),et===i.SHORT&&(gt=i.RGBA16I),et===i.INT&&(gt=i.RGBA32I)),w===i.RGB&&(et===i.UNSIGNED_SHORT&&zt&&(gt=zt.RGB16_EXT),et===i.SHORT&&zt&&(gt=zt.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),w===i.RGBA){let _t=Ct?wo:ln.getTransfer(vt);et===i.FLOAT&&(gt=i.RGBA32F),et===i.HALF_FLOAT&&(gt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(gt=_t===An?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&zt&&(gt=zt.RGBA16_EXT),et===i.SHORT&&zt&&(gt=zt.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(U,w){let et;return U?w===null||w===ys||w===la?et=i.DEPTH24_STENCIL8:w===vs?et=i.DEPTH32F_STENCIL8:w===Qa&&(et=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ys||w===la?et=i.DEPTH_COMPONENT24:w===vs?et=i.DEPTH_COMPONENT32F:w===Qa&&(et=i.DEPTH_COMPONENT16),et}function C(U,w){return L(U)===!0||U.isFramebufferTexture&&U.minFilter!==hi&&U.minFilter!==Di?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function q(U){let w=new WeakRef(U);n.get(U).__ref=w,g.add(w),I.register(U,w,w)}function z(U){let w=n.get(U).__ref;w!==void 0&&(g.delete(w),I.unregister(w))}function W(U){ht(U.target)}function Q(U){V(U.target)}function ht(U){U.removeEventListener("dispose",W),z(U),ct(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&p.delete(U)}function V(U){U.removeEventListener("dispose",Q),z(U),Pt(U)}function at(){for(let U of g){let w=U.deref();w!==void 0&&(w.isRenderTarget===!0?V(w):ht(w))}g.clear(),p.clear()}function ct(U){let w=n.get(U);if(w.__webglInit===void 0)return;let et=U.source,Lt=f.get(et);if(Lt){let vt=Lt[w.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&st(U),Object.keys(Lt).length===0&&f.delete(et)}n.remove(U)}function st(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let et=U.source,Lt=f.get(et);delete Lt[w.__cacheKey],a.memory.textures--}function Pt(U){let w=n.get(U);w.__depthDisposeCallback&&w.__depthDisposeCallback();let et=U.depthTexture;if(et&&et.renderTarget===U&&ht(et),U.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(w.__webglFramebuffer[vt]))for(let Ct=0;Ct<w.__webglFramebuffer[vt].length;Ct++)i.deleteFramebuffer(w.__webglFramebuffer[vt][Ct]);else i.deleteFramebuffer(w.__webglFramebuffer[vt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[vt])}else{if(Array.isArray(w.__webglFramebuffer))for(let vt=0;vt<w.__webglFramebuffer.length;vt++)i.deleteFramebuffer(w.__webglFramebuffer[vt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let vt=0;vt<w.__webglColorRenderbuffer.length;vt++)w.__webglColorRenderbuffer[vt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[vt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Lt=U.textures;for(let vt=0,Ct=Lt.length;vt<Ct;vt++){let zt=n.get(Lt[vt]);zt.__webglTexture&&(i.deleteTexture(zt.__webglTexture),a.memory.textures--),n.remove(Lt[vt])}n.remove(U)}let lt=0;function St(){lt=0}function xt(){return lt}function Ht(U){lt=U}function le(){let U=lt;return U>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),lt+=1,U}function pt(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.mipmapsAutoUpdate),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function Zt(U,w){let et=n.get(U);if(U.isVideoTexture&&yn(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){let Lt=U.image;if(Lt===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Lt.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(et,U,w);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+w)}function ie(U,w){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Rt(et,U,w);return}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+w)}function _e(U,w){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Rt(et,U,w);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+w)}function jt(U,w){let et=n.get(U);if(U.version>0&&et.__version!==U.version){Vt(et,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+w)}let re={[Ns]:i.REPEAT,[Ls]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},Xe={[hi]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Zo]:i.NEAREST_MIPMAP_LINEAR,[Di]:i.LINEAR,[Oc]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR},ye={[Yd]:i.NEVER,[qu]:i.ALWAYS,[$d]:i.LESS,[Wu]:i.LEQUAL,[Zd]:i.EQUAL,[Xu]:i.GEQUAL,[Jd]:i.GREATER,[Kd]:i.NOTEQUAL};function Be(U,w){if(w.type===vs&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Di||w.magFilter===Oc||w.magFilter===Zo||w.magFilter===rr||w.minFilter===Di||w.minFilter===Oc||w.minFilter===Zo||w.minFilter===rr)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,re[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,re[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,re[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Xe[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Xe[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hi||w.minFilter!==Zo&&w.minFilter!==rr||w.type===vs&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function qe(U,w){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",W),q(w));let Lt=w.source,vt=f.get(Lt);vt===void 0&&(vt={},f.set(Lt,vt));let Ct=pt(w);if(Ct!==U.__cacheKey){vt[Ct]===void 0&&(vt[Ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),vt[Ct].usedTimes++;let zt=vt[U.__cacheKey];zt!==void 0&&(vt[U.__cacheKey].usedTimes--,zt.usedTimes===0&&st(w)),U.__cacheKey=Ct,U.__webglTexture=vt[Ct].texture}return et}function Mt(U,w,et){return Math.floor(Math.floor(U/et)/w)}function kt(U,w,et,Lt){let Ct=U.updateRanges;if(Ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,et,Lt,w.data);else{Ct.sort((G,Y)=>G.start-Y.start);let zt=0;for(let G=1;G<Ct.length;G++){let Y=Ct[zt],ut=Ct[G],Xt=Y.start+Y.count,Dt=Mt(ut.start,w.width,4),Wt=Mt(Y.start,w.width,4);ut.start<=Xt+1&&Dt===Wt&&Mt(ut.start+ut.count-1,w.width,4)===Dt?Y.count=Math.max(Y.count,ut.start+ut.count-Y.start):(++zt,Ct[zt]=ut)}Ct.length=zt+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let G=0,Y=Ct.length;G<Y;G++){let ut=Ct[G],Xt=Math.floor(ut.start/4),Dt=Math.ceil(ut.count/4),Wt=Xt%w.width,ue=Math.floor(Xt/w.width),Ue=Dt,Tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ue),e.texSubImage2D(i.TEXTURE_2D,0,Wt,ue,Ue,Tt,et,Lt,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function Rt(U,w,et){let Lt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Lt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Lt=i.TEXTURE_3D);let vt=qe(U,w),Ct=w.source;e.bindTexture(Lt,U.__webglTexture,i.TEXTURE0+et);let zt=n.get(Ct);if(Ct.version!==zt.__version||vt===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let Tt=ln.getPrimaries(ln.workingColorSpace),me=w.colorSpace===or?null:ln.getPrimaries(w.colorSpace),Te=w.colorSpace===or||Tt===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let _t=S(w.image,!1,s.maxTextureSize);_t=pe(w,_t);let Gt=r.convert(w.format,w.colorSpace),G=r.convert(w.type),Y=N(w.internalFormat,Gt,G,w.normalized,w.colorSpace,w.isVideoTexture);Be(Lt,w);let ut,Xt=w.mipmaps,Dt=w.isVideoTexture!==!0,Wt=zt.__version===void 0||vt===!0,ue=Ct.dataReady,Ue=C(w,_t);if(w.isDepthTexture)Y=M(w.format===ar,w.type),Wt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Y,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Y,_t.width,_t.height,0,Gt,G,null));else if(w.isDataTexture)if(Xt.length>0){Dt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Ue,Y,Xt[0].width,Xt[0].height);for(let Tt=0,me=Xt.length;Tt<me;Tt++)ut=Xt[Tt],Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,ut.width,ut.height,Gt,G,ut.data):e.texImage2D(i.TEXTURE_2D,Tt,Y,ut.width,ut.height,0,Gt,G,ut.data);w.generateMipmaps=!1}else Dt?(Wt&&e.texStorage2D(i.TEXTURE_2D,Ue,Y,_t.width,_t.height),ue&&kt(w,_t,Gt,G)):e.texImage2D(i.TEXTURE_2D,0,Y,_t.width,_t.height,0,Gt,G,_t.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Dt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Y,Xt[0].width,Xt[0].height,_t.depth);for(let Tt=0,me=Xt.length;Tt<me;Tt++)if(ut=Xt[Tt],w.format!==Ms)if(Gt!==null)if(Dt){if(ue)if(w.layerUpdates.size>0){let Te=Qu(ut.width,ut.height,w.format,w.type);for(let $t of w.layerUpdates){let on=ut.data.subarray($t*Te/ut.data.BYTES_PER_ELEMENT,($t+1)*Te/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,$t,ut.width,ut.height,1,Gt,on)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,ut.width,ut.height,_t.depth,Gt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Tt,Y,ut.width,ut.height,_t.depth,0,ut.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?ue&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,ut.width,ut.height,_t.depth,Gt,G,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Tt,Y,ut.width,ut.height,_t.depth,0,Gt,G,ut.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Dt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Ue,Y,Xt[0].width,Xt[0].height);for(let Tt=0,me=Xt.length;Tt<me;Tt++)ut=Xt[Tt],w.format!==Ms?Gt!==null?Dt?ue&&e.compressedTexSubImage2D(i.TEXTURE_2D,Tt,0,0,ut.width,ut.height,Gt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,Tt,Y,ut.width,ut.height,0,ut.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,ut.width,ut.height,Gt,G,ut.data):e.texImage2D(i.TEXTURE_2D,Tt,Y,ut.width,ut.height,0,Gt,G,ut.data)}else if(w.isDataArrayTexture)if(Dt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Y,_t.width,_t.height,_t.depth),ue)if(w.layerUpdates.size>0){let Tt=Qu(_t.width,_t.height,w.format,w.type);for(let me of w.layerUpdates){let Te=_t.data.subarray(me*Tt/_t.data.BYTES_PER_ELEMENT,(me+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,_t.width,_t.height,1,Gt,G,Te)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Gt,G,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,_t.width,_t.height,_t.depth,0,Gt,G,_t.data);else if(w.isData3DTexture)Dt?(Wt&&e.texStorage3D(i.TEXTURE_3D,Ue,Y,_t.width,_t.height,_t.depth),ue&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Gt,G,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Y,_t.width,_t.height,_t.depth,0,Gt,G,_t.data);else if(w.isFramebufferTexture){if(Wt)if(Dt)e.texStorage2D(i.TEXTURE_2D,Ue,Y,_t.width,_t.height);else{let Tt=_t.width,me=_t.height;for(let Te=0;Te<Ue;Te++)e.texImage2D(i.TEXTURE_2D,Te,Y,Tt,me,0,Gt,G,null),Tt>>=1,me>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Tt=i.canvas;if(Tt.hasAttribute("layoutsubtree")||Tt.setAttribute("layoutsubtree","true"),_t.parentNode!==Tt){Tt.appendChild(_t),p.add(w),Tt.onpaint=me=>{let Te=me.changedElements;for(let $t of p)Te.includes($t.image)&&($t.needsUpdate=!0)},Tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let Te=i.RGBA,$t=i.RGBA,on=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,$t,on,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Dt&&Wt){let Tt=Me(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Ue,Y,Tt.width,Tt.height)}for(let Tt=0,me=Xt.length;Tt<me;Tt++)ut=Xt[Tt],Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Gt,G,ut):e.texImage2D(i.TEXTURE_2D,Tt,Y,Gt,G,ut);w.generateMipmaps=!1}else if(Dt){if(Wt){let Tt=Me(_t);e.texStorage2D(i.TEXTURE_2D,Ue,Y,Tt.width,Tt.height)}ue&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,G,_t)}else e.texImage2D(i.TEXTURE_2D,0,Y,Gt,G,_t);L(w)&&w.mipmapsAutoUpdate===!0&&E(Lt),zt.__version=Ct.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Vt(U,w,et){if(w.image.length!==6)return;let Lt=qe(U,w),vt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+et);let Ct=n.get(vt);if(vt.version!==Ct.__version||Lt===!0){e.activeTexture(i.TEXTURE0+et);let zt=ln.getPrimaries(ln.workingColorSpace),gt=w.colorSpace===or?null:ln.getPrimaries(w.colorSpace),_t=w.colorSpace===or||zt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,G=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let $t=0;$t<6;$t++)!Gt&&!G?Y[$t]=S(w.image[$t],!0,s.maxCubemapSize):Y[$t]=G?w.image[$t].image:w.image[$t],Y[$t]=pe(w,Y[$t]);let ut=Y[0],Xt=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type),Wt=N(w.internalFormat,Xt,Dt,w.normalized,w.colorSpace),ue=w.isVideoTexture!==!0,Ue=Ct.__version===void 0||Lt===!0,Tt=vt.dataReady,me=C(w,ut);Be(i.TEXTURE_CUBE_MAP,w);let Te;if(w.isDepthTexture){if(Wt=M(w.format===ar,w.type),Ue)if(ue)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Wt,ut.width,ut.height);else for(let $t=0;$t<6;$t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Wt,ut.width,ut.height,0,Xt,Dt,null)}else if(Gt){ue&&Ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,me,Wt,ut.width,ut.height);for(let $t=0;$t<6;$t++){Te=Y[$t].mipmaps;for(let on=0;on<Te.length;on++){let zn=Te[on];w.format!==Ms?Xt!==null?ue?Tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on,0,0,zn.width,zn.height,Xt,zn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on,Wt,zn.width,zn.height,0,zn.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on,0,0,zn.width,zn.height,Xt,Dt,zn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on,Wt,zn.width,zn.height,0,Xt,Dt,zn.data)}}}else{if(Te=w.mipmaps,ue&&Ue){Te.length>0&&me++;let $t=Me(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,me,Wt,$t.width,$t.height)}for(let $t=0;$t<6;$t++)if(G){ue?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,0,0,Y[$t].width,Y[$t].height,Xt,Dt,Y[$t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Wt,Y[$t].width,Y[$t].height,0,Xt,Dt,Y[$t].data);for(let on=0;on<Te.length;on++){let cn=Te[on].image[$t].image;ue?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on+1,0,0,cn.width,cn.height,Xt,Dt,cn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on+1,Wt,cn.width,cn.height,0,Xt,Dt,cn.data)}}else{ue?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,0,0,Xt,Dt,Y[$t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Wt,Xt,Dt,Y[$t]);for(let on=0;on<Te.length;on++){let zn=Te[on];ue?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on+1,0,0,Xt,Dt,zn.image[$t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,on+1,Wt,Xt,Dt,zn.image[$t])}}}L(w)&&w.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),Ct.__version=vt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ft(U,w,et,Lt,vt,Ct){let zt=r.convert(et.format,et.colorSpace),gt=r.convert(et.type),_t=N(et.internalFormat,zt,gt,et.normalized,et.colorSpace),Gt=n.get(w),G=n.get(et);if(G.__renderTarget=w,!Gt.__hasExternalTextures){let Y=Math.max(1,w.width>>Ct),ut=Math.max(1,w.height>>Ct);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,Ct,_t,Y,ut,w.depth,0,zt,gt,null):e.texImage2D(vt,Ct,_t,Y,ut,0,zt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Bt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Lt,vt,G.__webglTexture,0,ze(w)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Lt,vt,G.__webglTexture,Ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(U,w,et){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let Lt=w.depthTexture,vt=Lt&&Lt.isDepthTexture?Lt.type:null,Ct=M(w.stencilBuffer,vt),zt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(w),Ct,w.width,w.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(w),Ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,U)}else{let Lt=w.textures;for(let vt=0;vt<Lt.length;vt++){let Ct=Lt[vt],zt=r.convert(Ct.format,Ct.colorSpace),gt=r.convert(Ct.type),_t=N(Ct.internalFormat,zt,gt,Ct.normalized,Ct.colorSpace);Bt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(w),_t,w.width,w.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(w),_t,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,_t,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(U,w,et){let Lt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let vt=n.get(w.depthTexture);vt.__renderTarget=w;let Ct=Lt?w.depthTexture.image[0]:w.depthTexture.image;(!vt.__webglTexture||Ct.width!==w.width||Ct.height!==w.height)&&(Ct.width=w.width,Ct.height=w.height,w.depthTexture.needsUpdate=!0),Lt?jt(w.depthTexture,0):Zt(w.depthTexture,0);let zt=vt.__webglTexture,gt=ze(w),_t=Lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,Gt=w.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===er)Bt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Gt,_t,zt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Gt,_t,zt,0);else if(w.depthTexture.format===ar)Bt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Gt,_t,zt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Gt,_t,zt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(U){let w=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let Lt=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Lt){let vt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Lt.removeEventListener("dispose",vt)};Lt.addEventListener("dispose",vt),w.__depthDisposeCallback=vt}w.__boundDepthTexture=Lt}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(et)for(let Lt=0;Lt<6;Lt++)ce(w.__webglFramebuffer[Lt],U,Lt);else U.texture.mipmaps.length>0?ce(w.__webglFramebuffer[0],U,0):ce(w.__webglFramebuffer,U,0);else if(et){w.__webglDepthbuffer=[];for(let Lt=0;Lt<6;Lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Lt]),w.__webglDepthbuffer[Lt]===void 0)w.__webglDepthbuffer[Lt]=i.createRenderbuffer(),Le(w.__webglDepthbuffer[Lt],U,!1);else{let vt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=w.__webglDepthbuffer[Lt];i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,Ct)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Le(w.__webglDepthbuffer,U,!1);else{let vt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,Ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(U,w,et){let Lt=n.get(U);w!==void 0&&Ft(Lt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&Ye(U)}function sn(U){let w=U.texture,et=n.get(U),Lt=n.get(w);U.addEventListener("dispose",Q),q(U);let vt=U.textures,Ct=U.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture()),Lt.__version=w.version,a.memory.textures++),Ct){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let _t=0;_t<w.mipmaps.length;_t++)et.__webglFramebuffer[gt][_t]=i.createFramebuffer()}else et.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)et.__webglFramebuffer[gt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(zt)for(let gt=0,_t=vt.length;gt<_t;gt++){let Gt=n.get(vt[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Bt(U)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<vt.length;gt++){let _t=vt[gt];et.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);let Gt=r.convert(_t.format,_t.colorSpace),G=r.convert(_t.type),Y=N(_t.internalFormat,Gt,G,_t.normalized,_t.colorSpace,U.isXRRenderTarget===!0),ut=ze(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Y,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(i.TEXTURE_CUBE_MAP,Lt.__webglTexture),Be(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)Ft(et.__webglFramebuffer[gt][_t],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else Ft(et.__webglFramebuffer[gt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);L(w)?E(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(zt){for(let gt=0,_t=vt.length;gt<_t;gt++){let Gt=vt[gt],G=n.get(Gt),Y=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Y=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,G.__webglTexture),Be(Y,Gt),Ft(et.__webglFramebuffer,U,Gt,i.COLOR_ATTACHMENT0+gt,Y,0),L(Gt)&&E(Y)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(gt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Lt.__webglTexture),Be(gt,w),w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)Ft(et.__webglFramebuffer[_t],U,w,i.COLOR_ATTACHMENT0,gt,_t);else Ft(et.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,gt,0);L(w)?E(gt):w.mipmaps.length>0&&i.texParameteri(gt,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&Ye(U)}function X(U){let w=U.textures;for(let et=0,Lt=w.length;et<Lt;et++){let vt=w[et];if(L(vt)&&vt.mipmapsAutoUpdate===!0){let Ct=F(U),zt=n.get(vt).__webglTexture;e.bindTexture(Ct,zt),E(Ct),e.unbindTexture()}}}let Ee=[];function Ne(U){if(U.samples>0){if(Bt(U)===!1){let w=U.textures,et=U.width,Lt=U.height,vt=i.COLOR_BUFFER_BIT,Ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(U),gt=w.length>1;if(gt)for(let Gt=0;Gt<w.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Gt=0;Gt<w.length;Gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Gt]);let G=n.get(w[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,et,Lt,0,0,et,Lt,vt,i.NEAREST),l===!0&&(Ee.length=0,Ee.push(i.COLOR_ATTACHMENT0+Gt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Ee.push(Ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Gt=0;Gt<w.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Gt]);let G=n.get(w[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,G,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ze(U){return Math.min(s.maxSamples,U.samples)}function Bt(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yn(U){let w=a.render.frame;u.get(U)!==w&&(u.set(U,w),U.update())}function pe(U,w){let et=U.colorSpace,Lt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==So&&et!==or&&(ln.getTransfer(et)===An?(Lt!==Ms||vt!==Hi)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",et)),w}function Me(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=St,this.getTextureUnits=xt,this.setTextureUnits=Ht,this.setTexture2D=Zt,this.setTexture2DArray=ie,this.setTexture3D=_e,this.setTextureCube=jt,this.rebindTextures=$e,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Bt,this.dispose=at}function o1(i,t){function e(n,s=or){let r,a=ln.getTransfer(s);if(n===Hi)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ou)return i.BYTE;if(n===Bu)return i.SHORT;if(n===Qa)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===vs)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Vu)return i.RGB;if(n===Ms)return i.RGBA;if(n===er)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Hu)return i.RED;if(n===Gc)return i.RED_INTEGER;if(n===Ur)return i.RG;if(n===Vc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===Jo||n===Ko||n===jo||n===Qo)if(a===An)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c||n===Zc||n===Jc||n===Kc||n===jc||n===tl||n===Qc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$c||n===Zc)return a===An?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jc)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===jc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tl)return r.COMPRESSED_RG11_EAC;if(n===Qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ih)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dh)return a===An?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ph||n===mh||n===gh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ph)return a===An?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===_h||n===el||n===yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new zs({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends Us{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,g=null,I=typeof XRWebGLBinding!="undefined",_=new pf,y={},S=e.getContextAttributes(),L=null,E=null,F=[],N=[],M=new Nt,C=null,q=null,z=new ti;z.viewport=new Gn;let W=new ti;W.viewport=new Gn;let Q=[z,W],ht=new Pc,V=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let Zt=F[pt];return Zt===void 0&&(Zt=new Ga,F[pt]=Zt),Zt.getTargetRaySpace()},this.getControllerGrip=function(pt){let Zt=F[pt];return Zt===void 0&&(Zt=new Ga,F[pt]=Zt),Zt.getGripSpace()},this.getHand=function(pt){let Zt=F[pt];return Zt===void 0&&(Zt=new Ga,F[pt]=Zt),Zt.getHandSpace()};function ct(pt){let Zt=N.indexOf(pt.inputSource);if(Zt===-1)return;let ie=F[Zt];ie!==void 0&&(ie.update(pt.inputSource,pt.frame,c||a),ie.dispatchEvent({type:pt.type,data:pt.inputSource}))}function st(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",Pt);for(let pt=0;pt<F.length;pt++){let Zt=N[pt];Zt!==null&&(N[pt]=null,F[pt].disconnect(Zt))}V=null,at=null,_.reset();for(let pt in y)delete y[pt];if(t.setRenderTarget(L),f=null,d=null,p=null,s=null,E=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(M.width,M.height,!1),q!==null){let pt=q.camera;pt.fov=q.fov,pt.zoom=q.zoom,pt.updateProjectionMatrix(),q=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(pt){c=pt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&I&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",st),s.addEventListener("inputsourceschange",Pt),S.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(M),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,_e=null,jt=null;S.depth&&(jt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ie=S.stencil?ar:er,_e=S.stencil?la:ys);let re={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(re),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ni(d.textureWidth,d.textureHeight,{format:Ms,type:Hi,depthTexture:new ir(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ie),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ni(f.framebufferWidth,f.framebufferHeight,{format:Ms,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Pt(pt){for(let Zt=0;Zt<pt.removed.length;Zt++){let ie=pt.removed[Zt],_e=N.indexOf(ie);_e>=0&&(N[_e]=null,F[_e].disconnect(ie))}for(let Zt=0;Zt<pt.added.length;Zt++){let ie=pt.added[Zt],_e=N.indexOf(ie);if(_e===-1){for(let re=0;re<F.length;re++)if(re>=N.length){N.push(ie),_e=re;break}else if(N[re]===null){N[re]=ie,_e=re;break}if(_e===-1)break}let jt=F[_e];jt&&jt.connect(ie)}}function lt(pt,Zt){Zt===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(Zt.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let Zt=pt.near,ie=pt.far;_.texture!==null&&(_.depthNear>0&&(Zt=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),ht.near=W.near=z.near=Zt,ht.far=W.far=z.far=ie,(V!==ht.near||at!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),V=ht.near,at=ht.far),ht.layers.mask=pt.layers.mask|6,z.layers.mask=ht.layers.mask&-5,W.layers.mask=ht.layers.mask&-3;let _e=pt.parent,jt=ht.cameras;lt(ht,_e);for(let re=0;re<jt.length;re++)lt(jt[re],_e);ht.projectionMatrix.copy(z.projectionMatrix),ht.projectionMatrixInverse.copy(z.projectionMatrixInverse),q===null&&pt.isPerspectiveCamera&&(q={camera:pt,fov:pt.fov,zoom:pt.zoom}),St(pt,ht,_e)};function St(pt,Zt,ie){ie===null?pt.matrix.copy(Zt.matrixWorld):(pt.matrix.copy(ie.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(Zt.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(Zt.projectionMatrix),pt.projectionMatrixInverse.copy(Zt.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=rc*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(pt){l=pt,d!==null&&(d.fixedFoveation=pt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=pt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ht)},this.getCameraTexture=function(pt){return y[pt]};let xt=null;function Ht(pt,Zt){if(u=Zt.getViewerPose(c||a),g=Zt,u!==null){let ie=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let _e=!1;ie.length!==ht.cameras.length&&(ht.cameras.length=0,_e=!0);for(let ye=0;ye<ie.length;ye++){let Be=ie[ye],qe=null;if(f!==null)qe=f.getViewport(Be);else{let kt=p.getViewSubImage(d,Be);qe=kt.viewport,ye===0&&(t.setRenderTargetTextures(E,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(E))}let Mt=Q[ye];Mt===void 0&&(Mt=new ti,Mt.layers.enable(ye),Mt.viewport=new Gn,Q[ye]=Mt),Mt.matrix.fromArray(Be.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Be.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(qe.x,qe.y,qe.width,qe.height),ye===0&&(ht.matrix.copy(Mt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),_e===!0&&ht.cameras.push(Mt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){p=n.getBinding();let ye=p.getDepthInformation(ie[0]);ye&&ye.isValid&&ye.texture&&_.init(ye,s.renderState)}if(jt&&jt.includes("camera-access")&&I){t.state.unbindTexture(),p=n.getBinding();for(let ye=0;ye<ie.length;ye++){let Be=ie[ye].camera;if(Be){let qe=y[Be];qe||(qe=new Lo,y[Be]=qe);let Mt=p.getCameraImage(Be);qe.sourceTexture=Mt}}}}for(let ie=0;ie<F.length;ie++){let _e=N[ie],jt=F[ie];_e!==null&&jt!==void 0&&jt.update(_e,Zt,c||a)}xt&&xt(pt,Zt),Zt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Zt}),g=null}let le=new Up;le.setAnimationLoop(Ht),this.setAnimationLoop=function(pt){xt=pt},this.dispose=function(){}}},h1=new Ln,Xp=new Oe;Xp.set(-1,0,0,0,1,0,0,0,1);function u1(i,t){function e(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function n(_,y){y.color.getRGB(_.fogColor.value,Ju(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function s(_,y,S,L,E){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(_,y):y.isMeshLambertMaterial?(r(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(_,y),p(_,y)):y.isMeshPhongMaterial?(r(_,y),u(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(_,y),d(_,y),y.isMeshPhysicalMaterial&&f(_,y,E)):y.isMeshMatcapMaterial?(r(_,y),g(_,y)):y.isMeshDepthMaterial?r(_,y):y.isMeshDistanceMaterial?(r(_,y),I(_,y)):y.isMeshNormalMaterial?r(_,y):y.isLineBasicMaterial?(a(_,y),y.isLineDashedMaterial&&o(_,y)):y.isPointsMaterial?l(_,y,S,L):y.isSpriteMaterial?c(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,e(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===ni&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,e(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===ni&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,e(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,e(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);let S=t.get(y),L=S.envMap,E=S.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(E)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Xp),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,_.aoMapTransform))}function a(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform))}function o(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function l(_,y,S,L){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*S,_.scale.value=L*.5,y.map&&(_.map.value=y.map,e(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function u(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function p(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function d(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function f(_,y,S){_.ior.value=y.ior,y.diffuseRoughness>0&&(_.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=y.diffuseRoughnessMap,e(y.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.retroreflectivity>0&&(_.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,y){y.matcap&&(_.matcap.value=y.matcap)}function I(_,y){let S=t.get(y).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f1(i,t,e,n){let s={},r={};function a(S,L){let E=L.program;n.uniformBlockBinding(S,E,s[S.id])}function o(S,L){let E=s[S.id];E===void 0&&(g(S),E=l(S),s[S.id]=E,S.addEventListener("dispose",_));let F=L.program;n.updateUBOMapping(S,F);let N=t.render.frame;r[S.id]!==N&&(c(S),r[S.id]=N)}function l(S){let L=i.createBuffer(),E=S.__size,F=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,E,F),i.bindBuffer(i.UNIFORM_BUFFER,null),L}function c(S){let L=s[S.id],E=S.uniforms,F=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let N=0,M=E.length;N<M;N++){let C=E[N];if(Array.isArray(C))for(let q=0,z=C.length;q<z;q++)u(C[q],N,q,F);else u(C,N,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,L,E,F){if(d(S,L,E,F)===!0){let N=S.__offset,M=S.value;if(Array.isArray(M)){let C=0;for(let q=0;q<M.length;q++){let z=M[q],W=I(z,!0);p(z,S.__data,C),C+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else p(M,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}function p(S,L,E){typeof S=="number"||typeof S=="boolean"?L[E]=S:S.isMatrix3?(L[E]=S.elements[0],L[E+1]=S.elements[1],L[E+2]=S.elements[2],L[E+3]=0,L[E+4]=S.elements[3],L[E+5]=S.elements[4],L[E+6]=S.elements[5],L[E+7]=0,L[E+8]=S.elements[6],L[E+9]=S.elements[7],L[E+10]=S.elements[8],L[E+11]=0):ArrayBuffer.isView(S)?L.set(S.subarray(0,L.length-E),E):S.toArray(L,E)}function d(S,L,E,F){let N=S.value,M=L+"_"+E;if(Array.isArray(N)){F[M]===void 0&&(F[M]=[]);let C=F[M],q=!1;for(let z=0;z<N.length;z++)f(N[z],C,z)===!0&&(q=!0);return q}return f(N,F,M)}function f(S,L,E){if(L[E]===void 0)return typeof S=="number"||typeof S=="boolean"?L[E]=S:ArrayBuffer.isView(S)?L[E]=S.slice():L[E]=S.clone(),!0;{let F=L[E];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return L[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(F.equals(S)===!1)return F.copy(S),!0}}return!1}function g(S){let L=S.uniforms,E=0,F=16;for(let M=0,C=L.length;M<C;M++){let q=Array.isArray(L[M])?L[M]:[L[M]];for(let z=0,W=q.length;z<W;z++){let Q=q[z],ht=Array.isArray(Q.value)?Q.value:[Q.value],V=Array.isArray(L[M])||Array.isArray(Q.value),at=E;for(let st=0,Pt=ht.length;st<Pt;st++){let lt=ht[st],St=I(lt,V),xt=E%F,Ht=xt%St.boundary,le=xt+Ht;E+=Ht,le!==0&&F-le<St.storage&&(E+=F-le),st===0&&(at=E),E+=St.storage}let ct=Q.type==="int"?Int32Array:Q.type==="uint"?Uint32Array:Float32Array;Q.__data=new ct((E-at)/Float32Array.BYTES_PER_ELEMENT),Q.__offset=at}}let N=E%F;return N>0&&(E+=F-N),S.__size=E,S.__cache={},this}function I(S,L){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",S),L===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function _(S){let L=S.target;L.removeEventListener("dispose",_),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function y(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:y}}var d1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gs=null;function p1(){return Gs===null&&(Gs=new cc(d1,16,16,Ur,bs),Gs.name="DFG_LUT",Gs.minFilter=Di,Gs.magFilter=Di,Gs.wrapS=Ls,Gs.wrapT=Ls,Gs.generateMipmaps=!1,Gs.needsUpdate=!0),Gs}var eo=class{constructor(t={}){let{canvas:e=jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Hi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let I=f,_=new Set([Hc,Vc,Gc]),y=new Set([Hi,ys,Qa,la,zc,kc]),S=new Uint32Array(4),L=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},F=null,N=null,M=[],C=[],q=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ks,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,W=!1,Q=null,ht=null,V=null,at=null;this._outputColorSpace=jn;let ct=0,st=0,Pt=null,lt=-1,St=null,xt=new Gn,Ht=new Gn,le=null,pt=new Se(0),Zt=0,ie=e.width,_e=e.height,jt=1,re=null,Xe=null,ye=new Gn(0,0,ie,_e),Be=new Gn(0,0,ie,_e),qe=!1,Mt=new Rr,kt=new hc,Rt=!1,Vt=!1,Ft=new Ln,Le=new k,ce=new Gn,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function sn(){return Pt===null?jt:1}let X=n;function Ee(R,H){return e.getContext(R,H)}let Ne,ze,Bt,yn,pe,Me,U,w,et,Lt,vt,Ct,zt,gt,_t,Gt,G,Y,ut,Xt,Dt,Wt,ue;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",$t,!1),X===null){let H="webgl2";if(X=Ee(H,R),X===null)throw Ee(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(R){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),Ae("WebGLRenderer: "+R.message),R}function Ue(){Ne=new T_(X),Ne.init(),Dt=new o1(X,Ne),ze=new p_(X,Ne,t,Dt),Bt=new r1(X,Ne),ze.reversedDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),ht=X.createFramebuffer(),V=X.createFramebuffer(),at=X.createFramebuffer(),yn=new R_(X),pe=new Xy,Me=new a1(X,Ne,Bt,pe,ze,Dt,yn),U=new w_(z),w=new I0(X),Wt=new f_(X,w),et=new E_(X,w,yn,Wt),Lt=new I_(X,et,w,Wt,yn),Y=new C_(X,ze,Me),_t=new m_(pe),vt=new Wy(z,U,Ne,ze,Wt,_t),Ct=new u1(z,pe),zt=new Yy,gt=new Qy(Ne),G=new u_(z,U,Bt,Lt,g,l),Gt=new s1(z,Lt,ze),ue=new f1(X,yn,ze,Bt),ut=new d_(X,Ne,yn),Xt=new A_(X,Ne,yn),yn.programs=vt.programs,z.capabilities=ze,z.extensions=Ne,z.properties=pe,z.renderLists=zt,z.shadowMap=Gt,z.state=Bt,z.info=yn}I!==Hi&&(q=new L_(I,e.width,e.height,o,s,r));let Tt=new mf(z,X);this.xr=Tt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(R){R!==void 0&&(jt=R,this.setSize(ie,_e,!1))},this.getSize=function(R){return R.set(ie,_e)},this.setSize=function(R,H,ot=!0){if(Tt.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,_e=H,e.width=Math.floor(R*jt),e.height=Math.floor(H*jt),ot===!0&&(e.style.width=R+"px",e.style.height=H+"px"),q!==null&&q.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(ie*jt,_e*jt).floor()},this.setDrawingBufferSize=function(R,H,ot){ie=R,_e=H,jt=ot,e.width=Math.floor(R*ot),e.height=Math.floor(H*ot),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(I===Hi){Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(xt)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,H,ot,nt){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,H,ot,nt),Bt.viewport(xt.copy(ye).multiplyScalar(sn()).round())},this.getScissor=function(R){return R.copy(Be)},this.setScissor=function(R,H,ot,nt){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,H,ot,nt),Bt.scissor(Ht.copy(Be).multiplyScalar(sn()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(R){Bt.setScissorTest(qe=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){Xe=R},this.getClearColor=function(R){return R.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ot=!0){let nt=0;if(R){let it=!1;if(Pt!==null){let Ot=Pt.texture.format;it=_.has(Ot)}if(it){let Ot=Pt.texture.type,ee=y.has(Ot),qt=G.getClearColor(),Qt=G.getClearAlpha(),O=qt.r,xe=qt.g,ke=qt.b;ee?(S[0]=O,S[1]=xe,S[2]=ke,S[3]=Qt,X.clearBufferuiv(X.COLOR,0,S)):(L[0]=O,L[1]=xe,L[2]=ke,L[3]=Qt,X.clearBufferiv(X.COLOR,0,L))}else nt|=X.COLOR_BUFFER_BIT}H&&(nt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),G.dispose(),zt.dispose(),gt.dispose(),Me.dispose(),pe.dispose(),U.dispose(),Lt.dispose(),et.dispose(),Wt.dispose(),ue.dispose(),vt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",hr),Tt.removeEventListener("sessionend",As),Jn.stop()};function me(R){R.preventDefault(),To("WebGLRenderer: Context Lost."),W=!0}function Te(){To("WebGLRenderer: Context Restored."),W=!1;let R=yn.autoReset,H=Gt.enabled,ot=Gt.autoUpdate,nt=Gt.needsUpdate,it=Gt.type;Ue(),yn.autoReset=R,Gt.enabled=H,Gt.autoUpdate=ot,Gt.needsUpdate=nt,Gt.type=it}function $t(R){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function on(R){let H=R.target;H.removeEventListener("dispose",on),zn(H)}function zn(R){cn(R),pe.remove(R)}function cn(R){let H=pe.get(R).programs;H!==void 0&&(H.forEach(function(ot){vt.releaseProgram(ot)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ot,nt,it,Ot){H===null&&(H=Ye);let ee=it.isMesh&&it.matrixWorld.determinantAffine()<0,qt=Hn(R,H,ot,nt,it);Bt.setMaterial(nt,ee);let Qt=ot.index,O=1;if(nt.wireframe===!0){if(Qt=et.getWireframeAttribute(ot),Qt===void 0)return;O=2}let xe=ot.drawRange,ke=ot.attributes.position,Yt=xe.start*O,Ve=(xe.start+xe.count)*O;Ot!==null&&(Yt=Math.max(Yt,Ot.start*O),Ve=Math.min(Ve,(Ot.start+Ot.count)*O)),Qt!==null?(Yt=Math.max(Yt,0),Ve=Math.min(Ve,Qt.count)):ke!=null&&(Yt=Math.max(Yt,0),Ve=Math.min(Ve,ke.count));let Un=Ve-Yt;if(Un<0||Un===1/0)return;Wt.setup(it,nt,qt,ot,Qt);let rn,Ge=ut;if(Qt!==null&&(rn=w.get(Qt),Ge=Xt,Ge.setIndex(rn)),it.isMesh)nt.wireframe===!0?(Bt.setLineWidth(nt.wireframeLinewidth*sn()),Ge.setMode(X.LINES)):Ge.setMode(X.TRIANGLES);else if(it.isLine){let Fn=nt.linewidth;Fn===void 0&&(Fn=1),Bt.setLineWidth(Fn*sn()),it.isLineSegments?Ge.setMode(X.LINES):it.isLineLoop?Ge.setMode(X.LINE_LOOP):Ge.setMode(X.LINE_STRIP)}else it.isPoints?Ge.setMode(X.POINTS):it.isSprite&&Ge.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))Ge.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let Fn=it._multiDrawStarts,Jt=it._multiDrawCounts,gn=it._multiDrawCount,Fe=Qt?w.get(Qt).bytesPerElement:1,ai=pe.get(nt).currentProgram.getUniforms();for(let Yn=0;Yn<gn;Yn++)ai.setValue(X,"_gl_DrawID",Yn),Ge.render(Fn[Yn]/Fe,Jt[Yn])}else if(it.isInstancedMesh)Ge.renderInstances(Yt,Un,it.count);else if(ot.isInstancedBufferGeometry){let Fn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Jt=Math.min(ot.instanceCount,Fn);Ge.renderInstances(Yt,Un,Jt)}else Ge.render(Yt,Un)};function us(R,H,ot,nt){Q!==null&&R.isNodeMaterial&&Q.setObject(nt,R),Rt===!0&&_t.setState(R,ot,!1),R.transparent===!0&&R.side===Vn&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,xi(R,H,nt),R.side=Nr,R.needsUpdate=!0,xi(R,H,nt),R.side=Vn):xi(R,H,nt)}this.compile=function(R,H,ot=null){ot===null&&(ot=R),Q!==null&&Q.renderStart(R,H,ot),N=gt.get(ot),N.init(H),C.push(N),ot.traverseVisible(function(it){it.isLight&&it.layers.test(H.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),R!==ot&&R.traverseVisible(function(it){it.isLight&&it.layers.test(H.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),N.setupLights(),Q!==null&&Q.updateLights(N.state.lightsArray),Vt=this.localClippingEnabled,Rt=_t.init(this.clippingPlanes,Vt),Rt===!0&&_t.setGlobalState(this.clippingPlanes,H),Q!==null&&Gt.render(N.state.shadowsArray,ot,H);let nt=new Set;return R.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let ee=0;ee<Ot.length;ee++){let qt=Ot[ee];us(qt,ot,H,it),nt.add(qt)}else us(Ot,ot,H,it),nt.add(Ot)}),N=C.pop(),Q!==null&&Q.renderEnd(),nt},this.compileAsync=function(R,H,ot=null){let nt=this.compile(R,H,ot);return new Promise(it=>{function Ot(){if(nt.forEach(function(ee){let Qt=pe.get(ee).currentProgram;(Qt===void 0||Qt.isReady())&&nt.delete(ee)}),nt.size===0){it(R);return}setTimeout(Ot,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Mn=null;function gi(R){Mn&&Mn(R)}function hr(){Jn.stop()}function As(){Jn.start()}let Jn=new Up;Jn.setAnimationLoop(gi),typeof self!="undefined"&&Jn.setContext(self),this.setAnimationLoop=function(R){Mn=R,Tt.setAnimationLoop(R),R===null?Jn.stop():Jn.start()},Tt.addEventListener("sessionstart",hr),Tt.addEventListener("sessionend",As),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Q!==null&&Q.renderStart(R,H);let ot=Tt.enabled===!0&&Tt.isPresenting===!0,nt=q!==null&&(Pt===null||ot)&&q.begin(z,Pt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(H),H=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(z,R,H,Pt),N=gt.get(R,C.length),N.init(H),N.state.textureUnits=Me.getTextureUnits(),C.push(N),Ft.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?kt.setFromArrayCamera(H):Mt.setFromProjectionMatrix(Ft,os,H.reversedDepth),Vt=this.localClippingEnabled,Rt=_t.init(this.clippingPlanes,Vt),F=zt.get(R,M.length),F.init(),M.push(F),this.info.render.frame++,Tt.enabled===!0&&Tt.isPresenting===!0){let ee=z.xr.getDepthSensingMesh();ee!==null&&ur(ee,H,-1/0,z.sortObjects)}ur(R,H,0,z.sortObjects),F.finish(),Q!==null&&Q.updateLights(N.state.lightsArray),z.sortObjects===!0&&F.sort(re,Xe),$e=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,$e&&G.addToRenderList(F,R),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&_t.beginShadows();let it=N.state.shadowsArray;if(Gt.render(it,R,H),Rt===!0&&_t.endShadows(),(nt&&q.hasRenderPass())===!1){let ee=F.opaque,qt=F.transmissive;if(N.setupLights(),H.isArrayCamera){let Qt=H.cameras;if(qt.length>0)for(let O=0,xe=Qt.length;O<xe;O++){let ke=Qt[O];Rs(ee,qt,R,ke)}$e&&G.render(R);for(let O=0,xe=Qt.length;O<xe;O++){let ke=Qt[O];Wi(F,R,ke,ke.viewport)}}else qt.length>0&&Rs(ee,qt,R,H),$e&&G.render(R),Wi(F,R,H)}Pt!==null&&st===0&&(Me.updateMultisampleRenderTarget(Pt),Me.updateRenderTargetMipmap(Pt)),nt&&q.end(z),R.isScene===!0&&R.onAfterRender(z,R,H),Wt.resetDefaultState(),lt=-1,St=null,C.pop(),C.length>0?(N=C[C.length-1],Me.setTextureUnits(N.state.textureUnits),Rt===!0&&_t.setGlobalState(z.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?F=M[M.length-1]:F=null,Q!==null&&Q.renderEnd()};function ur(R,H,ot,nt){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){let ee=H.isArrayCamera?kt:Mt;if(!R.frustumCulled||R.intersectsFrustum(ee)){nt&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);let qt=Lt.update(R),Qt=R.material;Qt.visible&&F.push(R,qt,Qt,ot,ce.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let ee=H.isArrayCamera?kt:Mt;if(!R.frustumCulled||R.intersectsFrustum(ee)){let qt=Lt.update(R),Qt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ce.copy(qt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(Qt)){let O=qt.groups;for(let xe=0,ke=O.length;xe<ke;xe++){let Yt=O[xe],Ve=Qt[Yt.materialIndex];Ve&&Ve.visible&&F.push(R,qt,Ve,ot,ce.z,Yt,H)}}else Qt.visible&&F.push(R,qt,Qt,ot,ce.z,null,H)}}}let Ot=R.children;for(let ee=0,qt=Ot.length;ee<qt;ee++)ur(Ot[ee],H,ot,nt)}function Wi(R,H,ot,nt){let{opaque:it,transmissive:Ot,transparent:ee}=R;N.setupLightsView(ot),Rt===!0&&_t.setGlobalState(z.clippingPlanes,ot),nt&&Bt.viewport(xt.copy(nt)),it.length>0&&se(it,H,ot),Ot.length>0&&se(Ot,H,ot),ee.length>0&&se(ee,H,ot),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Rs(R,H,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){let Yt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new Ni(1,1,{generateMipmaps:!0,type:Yt?bs:Hi,minFilter:rr,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ln.workingColorSpace})}let Ot=N.state.transmissionRenderTarget[nt.id],ee=nt.viewport||xt;Ot.setSize(ee.z*z.transmissionResolutionScale,ee.w*z.transmissionResolutionScale);let qt=z.getRenderTarget(),Qt=z.getActiveCubeFace(),O=z.getActiveMipmapLevel();z.setRenderTarget(Ot),z.getClearColor(pt),Zt=z.getClearAlpha(),Zt<1&&z.setClearColor(16777215,.5),z.clear(),$e&&G.render(ot);let xe=z.toneMapping;z.toneMapping=ks;let ke=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),Rt===!0&&_t.setGlobalState(z.clippingPlanes,nt),se(R,ot,nt),Me.updateMultisampleRenderTarget(Ot),Me.updateRenderTargetMipmap(Ot),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ve=0,Un=H.length;Ve<Un;Ve++){let rn=H[Ve],{object:Ge,geometry:Fn,material:Jt,group:gn}=rn;if(Jt.side===Vn&&Ge.layers.test(nt.layers)){let Fe=Jt.side;Jt.side=ni,Jt.needsUpdate=!0,fa(Ge,ot,nt,Fn,Jt,gn),Jt.side=Fe,Jt.needsUpdate=!0,Yt=!0}}Yt===!0&&(Me.updateMultisampleRenderTarget(Ot),Me.updateRenderTargetMipmap(Ot))}z.setRenderTarget(qt,Qt,O),z.setClearColor(pt,Zt),ke!==void 0&&(nt.viewport=ke),z.toneMapping=xe}function se(R,H,ot){let nt=H.isScene===!0?H.overrideMaterial:null;for(let it=0,Ot=R.length;it<Ot;it++){let ee=R[it],{object:qt,geometry:Qt,group:O}=ee,xe=ee.material;xe.allowOverride===!0&&nt!==null&&(xe=nt),qt.layers.test(ot.layers)&&fa(qt,H,ot,Qt,xe,O)}}function fa(R,H,ot,nt,it,Ot){Q!==null&&it.isNodeMaterial&&Q.setObject(R,it),R.onBeforeRender(z,H,ot,nt,it,Ot),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),it.onBeforeRender(z,H,ot,nt,R,Ot),it.transparent===!0&&it.side===Vn&&it.forceSinglePass===!1?(it.side=ni,it.needsUpdate=!0,z.renderBufferDirect(ot,H,nt,it,R,Ot),it.side=Nr,it.needsUpdate=!0,z.renderBufferDirect(ot,H,nt,it,R,Ot),it.side=Vn):z.renderBufferDirect(ot,H,nt,it,R,Ot),R.onAfterRender(z,H,ot,nt,it,Ot)}function fr(R){let H=0;for(let ot of R)ot.texture!==null&&H++;return H}function xi(R,H,ot){H.isScene!==!0&&(H=Ye);let nt=pe.get(R),it=N.state.lights,Ot=N.state.shadowsArray,ee=it.state.version,qt=vt.getParameters(R,it.state,Ot,H,ot,N.state.lightProbeGridArray),Qt=vt.getProgramCacheKey(qt),O=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,nt.fog=H.fog;let xe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=U.get(R.envMap||nt.environment,xe),nt.envMapRotation=nt.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,O===void 0&&(R.addEventListener("dispose",on),O=new Map,nt.programs=O,nt.programVariants=new Map);let ke=O.get(Qt);if(ke!==void 0){if(nt.currentProgram===ke&&nt.lightsStateVersion===ee)return dr(R,qt),ke}else qt.uniforms=vt.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,ot,qt),R.onBeforeCompile(qt,z),ke=vt.acquireProgram(qt,Qt),O.set(Qt,ke),nt.uniforms=qt.uniforms;let Yt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=_t.uniform),dr(R,qt),nt.needsLights=Xi(R),nt.lightsStateVersion=ee,nt.needsLights&&(Yt.ambientLightColor.value=it.state.ambient,Yt.lightProbe.value=it.state.probe,Yt.sunLights.value=it.state.sun,Yt.sunLightShadows.value=it.state.sunShadow,Yt.directionalLights.value=it.state.directional,Yt.directionalLightShadows.value=it.state.directionalShadow,Yt.spotLights.value=it.state.spot,Yt.spotLightShadows.value=it.state.spotShadow,Yt.rectAreaLights.value=it.state.rectArea,Yt.ltc_1.value=it.state.rectAreaLTC1,Yt.ltc_2.value=it.state.rectAreaLTC2,Yt.pointLights.value=it.state.point,Yt.pointLightShadows.value=it.state.pointShadow,Yt.hemisphereLights.value=it.state.hemi,Yt.sunShadowMatrix.value=it.state.sunShadowMatrix,Yt.sunShadowCascade.value=it.state.sunShadowCascade,Yt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Yt.spotLightMatrix.value=it.state.spotLightMatrix,Yt.spotLightMap.value=it.state.spotLightMap,Yt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.numLightProbeGrids=fr(N.state.lightProbeGridArray),nt.currentProgram=ke,nt.uniformsList=null,ke}function Xs(R,H,ot,nt,it){let Ot=pe.get(R),ee=Ot.currentProgram.id+","+nt+","+it,qt=Ot.programVariants.get(ee);return qt===void 0?(qt=xi(R,H,ot),Ot.programVariants.set(ee,qt)):(Ot.currentProgram=qt,Ot.uniformsList=null,Ot.outputColorSpace=nt,Ot.toneMapping=it),qt}function ki(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=to.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function dr(R,H){let ot=pe.get(R);ot.outputColorSpace=H.outputColorSpace,ot.batching=H.batching,ot.batchingColor=H.batchingColor,ot.instancing=H.instancing,ot.instancingColor=H.instancingColor,ot.instancingMorph=H.instancingMorph,ot.skinning=H.skinning,ot.morphTargets=H.morphTargets,ot.morphNormals=H.morphNormals,ot.morphColors=H.morphColors,ot.morphTargetsCount=H.morphTargetsCount,ot.numClippingPlanes=H.numClippingPlanes,ot.numIntersection=H.numClipIntersection,ot.vertexAlphas=H.vertexAlphas,ot.vertexTangents=H.vertexTangents,ot.toneMapping=H.toneMapping}function Hn(R,H,ot,nt,it){H.isScene!==!0&&(H=Ye),Me.resetTextureUnits();let Ot=H.fog,ee=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?H.environment:null,qt=Pt===null?z.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:ln.workingColorSpace,Qt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,O=U.get(nt.envMap||ee,Qt),xe=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ke=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Yt=!!ot.morphAttributes.position,Ve=!!ot.morphAttributes.normal,Un=!!ot.morphAttributes.color,rn=ks;nt.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(rn=z.toneMapping);let Ge=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fn=Ge!==void 0?Ge.length:0,Jt=pe.get(nt),gn=N.state.lights;if(Rt===!0&&(Vt===!0||R!==St)){let Ze=R===St&&nt.id===lt;_t.setState(nt,R,Ze)}let Fe=!1,ai=!1;nt.version===Jt.__version?Jt.needsLights&&Jt.lightsStateVersion!==gn.state.version||it.isBatchedMesh&&Jt.batching===!1||!it.isBatchedMesh&&Jt.batching===!0||it.isBatchedMesh&&Jt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Jt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Jt.instancing===!1||!it.isInstancedMesh&&Jt.instancing===!0||it.isSkinnedMesh&&Jt.skinning===!1||!it.isSkinnedMesh&&Jt.skinning===!0||it.isInstancedMesh&&Jt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Jt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Jt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Jt.instancingMorph===!1&&it.morphTexture!==null||Jt.envMap!==O||nt.fog===!0&&Jt.fog!==Ot||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==_t.numPlanes||Jt.numIntersection!==_t.numIntersection)||Jt.vertexAlphas!==xe||Jt.vertexTangents!==ke||Jt.morphTargets!==Yt||Jt.morphNormals!==Ve||Jt.morphColors!==Un||Jt.morphTargetsCount!==Fn||Jt.numLightProbeGrids!==fr(N.state.lightProbeGridArray)?Fe=!0:(Jt.outputColorSpace!==qt||Jt.toneMapping!==rn)&&(ai=!0):(Fe=!0,Jt.__version=nt.version);let Yn=Jt.currentProgram;(Fe===!0||ai===!0)&&(Yn=ai===!0?Xs(nt,H,it,qt,rn):xi(nt,H,it),Q&&nt.isNodeMaterial&&Q.onUpdateProgram(nt,Yn,Jt));let pn=!1,oi=!1,Nn=!1,He=Yn.getUniforms(),Sn=Jt.uniforms;if(Bt.useProgram(Yn.program)&&(pn=!0,oi=!0,Nn=!0),nt.id!==lt&&(lt=nt.id,oi=!0),pn||St!==R){Bt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(X,"projectionMatrix",R.projectionMatrix),He.setValue(X,"viewMatrix",R.matrixWorldInverse);let vn=He.map.cameraPosition;vn!==void 0&&vn.setValue(X,Le.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&He.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&He.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),St!==R&&(St=R,oi=!0,Nn=!0)}if(Jt.needsLights&&(gn.state.sunShadowMap.length>0&&He.setValue(X,"sunShadowMap",gn.state.sunShadowMap,Me),gn.state.directionalShadowMap.length>0&&He.setValue(X,"directionalShadowMap",gn.state.directionalShadowMap,Me),gn.state.spotShadowMap.length>0&&He.setValue(X,"spotShadowMap",gn.state.spotShadowMap,Me),gn.state.pointShadowMap.length>0&&He.setValue(X,"pointShadowMap",gn.state.pointShadowMap,Me)),it.isSkinnedMesh){He.setOptional(X,it,"bindMatrix"),He.setOptional(X,it,"bindMatrixInverse");let Ze=it.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),He.setValue(X,"boneTexture",Ze.boneTexture,Me))}it.isBatchedMesh&&(He.setOptional(X,it,"batchingTexture"),He.setValue(X,"batchingTexture",it._matricesTexture,Me),He.setOptional(X,it,"batchingIdTexture"),He.setValue(X,"batchingIdTexture",it._indirectTexture,Me),He.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&He.setValue(X,"batchingColorTexture",it._colorsTexture,Me));let hn=ot.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Y.update(it,ot,Yn),(oi||Jt.receiveShadow!==it.receiveShadow)&&(Jt.receiveShadow=it.receiveShadow,He.setValue(X,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&H.environment!==null&&(Sn.envMapIntensity.value=H.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=p1()),oi){if(He.setValue(X,"toneMappingExposure",z.toneMappingExposure),Jt.needsLights&&qn(Sn,Nn),Ot&&nt.fog===!0&&Ct.refreshFogUniforms(Sn,Ot),Ct.refreshMaterialUniforms(Sn,nt,jt,_e,N.state.transmissionRenderTarget[R.id]),Jt.needsLights&&Jt.numLightProbeGrids>0){let Ze=E,vn=0;for(let Gi of N.state.lightProbeGridArray)Gi.texture!==null&&(Ze.textures[vn]=Gi.texture,Ze.min[vn]=Gi.boundingBox.min,Ze.max[vn]=Gi.boundingBox.max,Ze.resolution[vn]=Gi.resolution,vn++);for(let Gi in Ze)Ze[Gi].length=vn;Sn.probesSH.value=Ze.textures,Sn.probesMin.value=Ze.min,Sn.probesMax.value=Ze.max,Sn.probesResolution.value=Ze.resolution}to.upload(X,ki(Jt),Sn,Me)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(to.upload(X,ki(Jt),Sn,Me),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&He.setValue(X,"center",it.center),He.setValue(X,"modelViewMatrix",it.modelViewMatrix),He.setValue(X,"normalMatrix",it.normalMatrix),He.setValue(X,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let Ze=nt.uniformsGroups;for(let vn=0,Gi=Ze.length;vn<Gi;vn++){let pr=Ze[vn];ue.update(pr,Yn),ue.bind(pr,Yn)}}return Yn}function qn(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Xi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return Pt},this.setRenderTargetTextures=function(R,H,ot){let nt=pe.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),pe.get(R.texture).__webglTexture=H,pe.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let ot=pe.get(R);ot.__webglFramebuffer=H,ot.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ot=0){Pt=R,ct=H,st=ot;let nt=null,it=!1,Ot=!1;if(R){let qt=pe.get(R);if(qt.__useDefaultFramebuffer!==void 0){Bt.bindFramebuffer(X.FRAMEBUFFER,qt.__webglFramebuffer),xt.copy(R.viewport),Ht.copy(R.scissor),le=R.scissorTest,Bt.viewport(xt),Bt.scissor(Ht),Bt.setScissorTest(le),lt=-1;return}else if(qt.__webglFramebuffer===void 0)Me.setupRenderTarget(R);else if(qt.__hasExternalTextures)Me.rebindTextures(R,pe.get(R.texture).__webglTexture,pe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let xe=R.depthTexture;if(qt.__boundDepthTexture!==xe){if(xe!==null&&pe.has(xe)&&(R.width!==xe.image.width||R.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(R)}}let Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);let O=pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(O[H])?nt=O[H][ot]:nt=O[H],it=!0):R.samples>0&&Me.useMultisampledRTT(R)===!1?nt=pe.get(R).__webglMultisampledFramebuffer:Array.isArray(O)?nt=O[ot]:nt=O,xt.copy(R.viewport),Ht.copy(R.scissor),le=R.scissorTest}else xt.copy(ye).multiplyScalar(jt).floor(),Ht.copy(Be).multiplyScalar(jt).floor(),le=qe;if(ot!==0&&(nt=ht),Bt.bindFramebuffer(X.FRAMEBUFFER,nt)&&Bt.drawBuffers(R,nt),Bt.viewport(xt),Bt.scissor(Ht),Bt.setScissorTest(le),it){let qt=pe.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,qt.__webglTexture,ot)}else if(Ot){let qt=H;for(let Qt=0;Qt<R.textures.length;Qt++){let O=pe.get(R.textures[Qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Qt,O.__webglTexture,ot,qt)}}else if(R!==null&&ot!==0){let qt=pe.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,ot)}lt=-1};function K(R){let H=pe.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=ze.textureFormatReadable(R.format),H.__typeReadable=ze.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ot,nt,it,Ot,ee,qt=0){if(!(R&&R.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ee!==void 0&&(Qt=Qt[ee],Array.isArray(Qt)&&(Qt=Qt[0])),Qt){Bt.bindFramebuffer(X.FRAMEBUFFER,Qt);try{let O=R.textures[qt],xe=O.format,ke=O.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qt);let Yt=K(O);if(Yt.__formatReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-nt&&ot>=0&&ot<=R.height-it&&X.readPixels(H,ot,nt,it,Dt.convert(xe),Dt.convert(ke),Ot)}finally{let O=Pt!==null?pe.get(Pt).__webglFramebuffer:null;Bt.bindFramebuffer(X.FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(R,H,ot,nt,it,Ot,ee,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ee!==void 0&&(Qt=Qt[ee],Array.isArray(Qt)&&(Qt=Qt[0])),Qt)if(H>=0&&H<=R.width-nt&&ot>=0&&ot<=R.height-it){Bt.bindFramebuffer(X.FRAMEBUFFER,Qt);let O=R.textures[qt],xe=O.format,ke=O.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qt);let Yt=K(O);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ve),X.bufferData(X.PIXEL_PACK_BUFFER,Ot.byteLength,X.STREAM_READ),X.readPixels(H,ot,nt,it,Dt.convert(xe),Dt.convert(ke),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Un=Pt!==null?pe.get(Pt).__webglFramebuffer:null;Bt.bindFramebuffer(X.FRAMEBUFFER,Un);let rn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tp(X,rn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ve),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ot),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ve),X.deleteSync(rn),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ot=0){let nt=Math.pow(2,-ot),it=Math.floor(R.image.width*nt),Ot=Math.floor(R.image.height*nt),ee=H!==null?H.x:0,qt=H!==null?H.y:0;Me.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,ee,qt,it,Ot),Bt.unbindTexture()},this.copyTextureToTexture=function(R,H,ot=null,nt=null,it=0,Ot=0){let ee,qt,Qt,O,xe,ke,Yt,Ve,Un,rn=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(ot!==null)ee=ot.max.x-ot.min.x,qt=ot.max.y-ot.min.y,Qt=ot.isBox3?ot.max.z-ot.min.z:1,O=ot.min.x,xe=ot.min.y,ke=ot.isBox3?ot.min.z:0;else{let He=Math.pow(2,-it);ee=Math.floor(rn.width*He),qt=Math.floor(rn.height*He),R.isDataArrayTexture?Qt=rn.depth:R.isData3DTexture?Qt=Math.floor(rn.depth*He):Qt=1,O=0,xe=0,ke=0}nt!==null?(Yt=nt.x,Ve=nt.y,Un=nt.z):(Yt=0,Ve=0,Un=0);let Ge=Dt.convert(H.format),Fn=Dt.convert(H.type),Jt;H.isData3DTexture?(Me.setTexture3D(H,0),Jt=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Me.setTexture2DArray(H,0),Jt=X.TEXTURE_2D_ARRAY):(Me.setTexture2D(H,0),Jt=X.TEXTURE_2D),Bt.activeTexture(X.TEXTURE0),Bt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),Bt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Bt.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let gn=Bt.getParameter(X.UNPACK_ROW_LENGTH),Fe=Bt.getParameter(X.UNPACK_IMAGE_HEIGHT),ai=Bt.getParameter(X.UNPACK_SKIP_PIXELS),Yn=Bt.getParameter(X.UNPACK_SKIP_ROWS),pn=Bt.getParameter(X.UNPACK_SKIP_IMAGES);Bt.pixelStorei(X.UNPACK_ROW_LENGTH,rn.width),Bt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,rn.height),Bt.pixelStorei(X.UNPACK_SKIP_PIXELS,O),Bt.pixelStorei(X.UNPACK_SKIP_ROWS,xe),Bt.pixelStorei(X.UNPACK_SKIP_IMAGES,ke);let oi=R.isDataArrayTexture||R.isData3DTexture,Nn=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let He=pe.get(R),Sn=pe.get(H),hn=pe.get(He.__renderTarget),Ze=pe.get(Sn.__renderTarget);Bt.bindFramebuffer(X.READ_FRAMEBUFFER,hn.__webglFramebuffer),Bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let vn=0;vn<Qt;vn++)oi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pe.get(R).__webglTexture,it,ke+vn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pe.get(H).__webglTexture,Ot,Un+vn)),X.blitFramebuffer(O,xe,O+ee,xe+qt,Yt,Ve,Yt+ee,Ve+qt,X.DEPTH_BUFFER_BIT,X.NEAREST);Bt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||R.isRenderTargetTexture||pe.has(R)){let He=pe.get(R),Sn=pe.get(H);Bt.bindFramebuffer(X.READ_FRAMEBUFFER,V),Bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,at);for(let hn=0;hn<Qt;hn++)oi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,it,ke+hn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,He.__webglTexture,it),Nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Sn.__webglTexture,Ot,Un+hn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Sn.__webglTexture,Ot),it!==0?X.blitFramebuffer(O,xe,O+ee,xe+qt,Yt,Ve,Yt+ee,Ve+qt,X.COLOR_BUFFER_BIT,X.NEAREST):Nn?X.copyTexSubImage3D(Jt,Ot,Yt,Ve,Un+hn,O,xe,ee,qt):X.copyTexSubImage2D(Jt,Ot,Yt,Ve,O,xe,ee,qt);Bt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Jt,Ot,Yt,Ve,Un,ee,qt,Qt,Ge,Fn,rn.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Jt,Ot,Yt,Ve,Un,ee,qt,Qt,Ge,rn.data):X.texSubImage3D(Jt,Ot,Yt,Ve,Un,ee,qt,Qt,Ge,Fn,rn):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ot,Yt,Ve,ee,qt,Ge,Fn,rn.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ot,Yt,Ve,rn.width,rn.height,Ge,rn.data):X.texSubImage2D(X.TEXTURE_2D,Ot,Yt,Ve,ee,qt,Ge,Fn,rn);Bt.pixelStorei(X.UNPACK_ROW_LENGTH,gn),Bt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Fe),Bt.pixelStorei(X.UNPACK_SKIP_PIXELS,ai),Bt.pixelStorei(X.UNPACK_SKIP_ROWS,Yn),Bt.pixelStorei(X.UNPACK_SKIP_IMAGES,pn),Ot===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&X.generateMipmap(Jt),Bt.unbindTexture()},this.initRenderTarget=function(R){pe.get(R).__webglFramebuffer===void 0&&Me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Me.setTextureCube(R,0):R.isData3DTexture?Me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Me.setTexture2DArray(R,0):Me.setTexture2D(R,0),Bt.unbindTexture()},this.resetState=function(){ct=0,st=0,Pt=null,Bt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ln._getDrawingBufferColorSpace(t),e.unpackColorSpace=ln._getUnpackColorSpace()}};var ha={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},io=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function Yp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Dn;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let p=i[u],d=0,f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(e){let u=0,p=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(let u in r){let p=qp(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){let f=[];for(let I=0;I<a[u].length;++I)f.push(a[u][I][d]);let g=qp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function qp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new ji(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let p=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){let I=u.getComponent(d,g);o.setComponent(d+p,g,I)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Zn="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",$p={},te=(i,t)=>t?new xn(Object.assign({color:i},t)):$p[i]||($p[i]=new xn({color:i})),_n=(i,t)=>new je(Object.assign({color:i},t)),Zp={},m1=i=>Zp[i]||(Zp[i]=new xn({color:i,flatShading:!0}));function be(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new jr(n);return s.colorSpace=jn,s.anisotropy=4,s}function Br(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ua=be(128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)});function dt(i,t,e,n,s,r,a,o,l){let c=new mt(new bn(t,e,n),typeof s=="string"?te(s):s);return c.position.set(r,a,o),l&&(c.rotation.y=l),i.add(c),c}function oe(i,t,e,n,s,r,a,o,l){let c=new mt(new Ai(t,e,n,l||16),typeof s=="string"?te(s):s);return c.position.set(r,a,o),i.add(c),c}function Ie(i,t,e,n,s,r,a,o,l,c){let u=new mt(new pi(t,c||16,c?c*.7|0:12),typeof e=="string"?te(e):e);return u.position.set(n,s,r),u.scale.set(a||1,o||1,l||1),i.add(u),u}function ls(i,t,e,n,s,r,a){let o=new mt(new xs(t,1),m1(e));return o.position.set(n,s,r),a&&o.scale.set(a[0],a[1],a[2]),i.add(o),o}function zr(i,t,e,n,s,r,a){let o=new fi(new ei({map:ua,blending:_s,transparent:!0,depthWrite:!1,opacity:r}));return a&&o.material.color.set(a),o.scale.set(s,s,1),o.position.set(t,e,n),i.add(o),i.userData.glows=(i.userData.glows||[]).concat(o),o}function so(i,t,e,n,s,r,a,o,l){let c=new mt(new Qe(t,e),new je({map:n,transparent:!0,side:l?Vn:void 0,alphaTest:.05}));return c.position.set(s,r,a),o&&(c.rotation.y=o),i.add(c),c}function al(i,t,e,n,s,r,a){let o=new mt(new Go(t.map(l=>new Nt(l[0],l[1])),a||20),typeof e=="string"?te(e):e);return o.position.set(n,s,r),i.add(o),o}var Hs="#a8703f",bi="#6b3f1f",ro="#d4a56a",vi="#3a2214",g1="#d23a28",x1="#f3e2bd",Jp={};function xf(i,t,e,n,s,r){let a=i+t+e+n+s;return Jp[a]||(Jp[a]=be(n,s,o=>{o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";let l=[...i];o.font=`900 ${r}px ${Zn}`,s>n?l.forEach((c,u)=>o.fillText(c,n/2,s/(l.length+1)*(u+1))):o.fillText(i,n/2,s/2+2,n-10)}))}var jp=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],ol=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.81,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.39,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.07,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],Qp=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];ol.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.43,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.52,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.77,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var Kp={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};ol.forEach(i=>{!i.hc&&Kp[i.k]&&(i.hc=Kp[i.k])});var De={};ol.forEach(i=>{i.L=i.L||"main",i.solid===void 0&&(i.solid=i.L==="main"?1:0),De[i.k]=i});var _f=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],yf=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],ae={};ae.table=i=>{dt(i,1.9,.08,.9,Hs,0,.74,0),dt(i,1.84,.03,.84,ro,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])dt(i,.08,.72,.08,bi,t,.36,e);dt(i,1.6,.06,.04,bi,0,.55,-.36),dt(i,1.6,.06,.04,bi,0,.55,.36)};ae.chabu=i=>{oe(i,.46,.46,.06,Hs,0,.34,0,28),oe(i,.44,.44,.02,ro,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;dt(i,.07,.32,.07,bi,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};ae.counter=i=>{dt(i,1.96,1,.8,bi,0,.5,0),dt(i,2.04,.08,.96,ro,0,1.03,.04),dt(i,1.9,.12,.04,Hs,0,.14,.41);for(let t=-2;t<=2;t++)dt(i,.04,.8,.02,"#5a3216",t*.38,.52,.405)};ae.chair=i=>{dt(i,.48,.06,.48,Hs,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])dt(i,.05,.46,.05,bi,t,.23,e);dt(i,.48,.5,.05,Hs,0,.74,-.2),dt(i,.4,.06,.03,ro,0,.86,-.18)};ae.stool=i=>{oe(i,.22,.2,.07,"#c23a2a",0,.76,0,18),oe(i,.03,.03,.72,"#3a3a40",0,.38,0,8),oe(i,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new mt(new Ui(.13,.015,6,18),te("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,i.add(t)};ae.zabu=i=>{let t=dt(i,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new bn(.62,.1,.62,2,1,2),Ie(i,.05,"#e9c34a",0,.12,0)};ae.bench=i=>{dt(i,1.9,.07,.42,Hs,0,.44,0);for(let t of[-.8,.8])dt(i,.07,.42,.36,bi,t,.21,0);dt(i,1.6,.05,.04,bi,0,.2,0)};ae.register=i=>{dt(i,.9,.95,.7,bi,0,.475,0),dt(i,.96,.06,.78,ro,0,.98,0),dt(i,.5,.22,.36,"#2b2b33",0,1.12,-.05),dt(i,.42,.1,.3,"#3c3c46",0,1.26,-.12),dt(i,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=_n("#9fe0b6"),Ie(i,.07,"#e9b830",.3,1.06,.2),Ie(i,.05,"#e9b830",.22,1.04,.26)};ae.lantern=i=>{oe(i,.025,.025,1.7,vi,0,.85,0,6),dt(i,.5,.04,.04,vi,.2,1.68,0),oe(i,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new ve;t.position.set(.38,1.3,0),i.add(t);let e=Ie(t,.22,_n("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,oe(t,.14,.14,.06,vi,0,.3,0,12),oe(t,.14,.14,.06,vi,0,-.3,0,12),so(t,.2,.34,xf("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),oe(t,.01,.01,.2,vi,0,.42,0,4),zr(t,0,0,.1,1.8,.55),i.userData.swing=t};ae.andon=i=>{for(let e of[-.17,.17])for(let n of[-.17,.17])dt(i,.04,.9,.04,vi,e,.45,n);let t=dt(i,.32,.5,.32,_n("#fff1c8"),0,.55,0);t.userData.lit=1,dt(i,.4,.04,.4,vi,0,.82,0),dt(i,.4,.04,.4,vi,0,.29,0);for(let e of[-.06,.06])dt(i,.005,.48,.33,vi,e,.55,0);zr(i,0,.55,0,2.2,.6)};ae.stonel=i=>{let t="#9a9590";dt(i,.5,.12,.5,t,0,.06,0),oe(i,.1,.13,.5,t,0,.37,0,8),dt(i,.42,.1,.42,t,0,.66,0);let e=dt(i,.3,.28,.3,_n("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])dt(i,.06,.3,.06,t,s[0],.85,s[1]);let n=new mt(new di(.45,.3,4),te(t));n.rotation.y=Math.PI/4,n.position.y=1.14,i.add(n),Ie(i,.07,t,0,1.33,0),zr(i,0,.85,0,1.6,.55)};ae.chochin=i=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let n=0;n<5;n++){let s=-.8+n*.4,r=2.25-Math.sin(n/4*Math.PI)*.25,a=Ie(i,.12,_n(t[n]),s,r,.18,1,1.25,1,12);a.userData.lit=1,zr(i,s,r,.26,.8,.35)}let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let n=0;n<8;n++){let[s,r]=e[n],[a,o]=e[n+1],l=dt(i,Math.hypot(a-s,o-r),.015,.015,vi,(s+a)/2,(r+o)/2,.18);l.rotation.z=Math.atan2(o-r,a-s)}};ae.tanuki=i=>{let t="#8a6a4a",e="#e8d8b8";Ie(i,.3,t,0,.38,0,1,1.05,.95),Ie(i,.2,e,0,.36,.16,1,1.1,.5),Ie(i,.22,t,0,.82,.02);for(let r of[-.13,.13])Ie(i,.06,t,r,1,0),Ie(i,.055,vi,r*.7,.85,.19,1,.8,.5),Ie(i,.02,"#fff",r*.7+.01,.86,.21);Ie(i,.045,vi,0,.78,.22),dt(i,.34,.06,.3,"#5a4a3a",0,1.03,0),oe(i,.16,.2,.04,"#5a4a3a",0,1,0,14);let n=oe(i,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);n.rotation.z=-.3;let s=dt(i,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Ie(i,.15,t,-.2,.12,.12,1,.6,1),Ie(i,.15,t,.2,.12,.12,1,.6,1),Ie(i,.12,t,.1,.25,-.3,1,.7,1.4)};ae.barrel=i=>{al(i,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new mt(new Ui(.34,.025,6,22),te("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,i.add(e)}so(i,.36,.36,xf("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),oe(i,.3,.3,.02,ro,0,.91,0,22)};ae.crates=i=>{let t=(e,n,s)=>{let r=new ve;r.position.y=e,r.rotation.y=n,i.add(r),dt(r,.6,.32,.44,s,0,.16,0);for(let a=0;a<3;a++)for(let o=0;o<2;o++)oe(r,.06,.06,.36,"#7a4a1a",-.18+a*.18,.3,-.1+o*.2,8),oe(r,.025,.03,.1,"#f2e6c8",-.18+a*.18,.52,-.1+o*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};ae.byobu=i=>{let t=be(256,128,(e,n,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,n,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*n,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let n=new ve;n.position.set(-.72+e*.48,0,e%2?.08:-.08),n.rotation.y=e%2?.3:-.3,i.add(n),dt(n,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new mt(new Qe(.42,1.4),new je({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),n.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,n.add(r)}};ae.shelf=i=>{for(let n of[-.925,.925])dt(i,.05,1.8,.42,bi,n,.9,-.1);dt(i,1.9,.05,.42,bi,0,1.775,-.1),dt(i,1.8,1.7,.02,"#2a1408",0,.9,-.3),dt(i,1.8,.06,.38,Hs,0,.03,-.1);for(let n of[.35,.8,1.25,1.65])dt(i,1.8,.04,.38,Hs,0,n,-.1);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let n of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],a=.26+e%3*.04;oe(i,.055,.065,a,r,-.72+s*.29,n+a/2,-.06,10),oe(i,.02,.03,.09,r,-.72+s*.29,n+a+.04,-.06,6),e%2&&dt(i,.1,.08,.01,x1,-.72+s*.29,n+a*.5,.012)}};ae.hibachi=i=>{al(i,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),oe(i,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let n=ls(i,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);n.material=_n("#ff7a2a"),n.userData.lit=1}oe(i,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=oe(i,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,zr(i,0,.55,0,1.4,.6,"#ff8a3a")};ae.tank=i=>{dt(i,.7,.55,.5,bi,0,.275,0);let t=dt(i,.68,.5,.48,te("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,dt(i,.62,.4,.42,_n("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,dt(i,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let n=new ve;n.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),i.add(n),Ie(n,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new mt(new di(.04,.07,6),te("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,n.add(s),i.userData.fish=(i.userData.fish||[]).concat(n)}ls(i,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),ls(i,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};ae.jukebox=i=>{dt(i,.7,.7,.5,bi,0,.35,0),dt(i,.74,.05,.54,Hs,0,.72,0),oe(i,.24,.24,.02,"#141414",-.05,.76,.02,28),oe(i,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=dt(i,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new mt(new di(.22,.4,18,1,!0),te("#d8a83a",{side:Vn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),i.add(e),oe(i,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),dt(i,.5,.3,.02,"#2a1408",0,.35,.26),i.userData.spin=i.children[2]};ae.pine=i=>{oe(i,.2,.16,.14,"#3a5a8a",0,.07,0,6),oe(i,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=oe(i,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,ls(i,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),ls(i,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),ls(i,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};ae.bamboo=i=>{oe(i,.22,.18,.32,"#e8e0d0",0,.16,0,18),oe(i,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,n=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;oe(i,.025,.025,s,"#6a9a3a",e,.3+s/2,n,8);for(let r=1;r<4;r++)oe(i,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,n,8);for(let r=0;r<3;r++){let a=new mt(new Qe(.32,.06),new xn({color:"#5a9a3a",side:Vn}));a.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),n+.12*Math.sin(r*2+t)),a.rotation.set(-.3,r*2+t,-.4),i.add(a)}}};ae.sakura=i=>{oe(i,.26,.22,.36,"#2a3a5a",0,.18,0,8),oe(i,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=oe(i,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=oe(i,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let n=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,a,o],l)=>ls(i,o,n[l%3],s,r,a,[1,.75,1])),i.userData.petals=1};ae.ajisai=i=>{oe(i,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)ls(i,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let n=e*1.25;ls(i,.12,t[e%4],Math.cos(n)*.12,.5+e%2*.08,Math.sin(n)*.12)}};ae.scroll=i=>{let t=be(96,256,(e,n,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,n,s),e.fillStyle="#c8b890",e.fillRect(0,0,n,30),e.fillRect(0,s-30,n,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${Zn}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,a)=>e.fillText(r,n/2,76+a*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});dt(i,.5,.04,.04,vi,0,2.25,.04),dt(i,.5,.04,.04,vi,0,1.02,.04),so(i,.42,1.2,t,0,1.63,.03)};ae.menu=i=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let n=xf(t[e],"#e9d3a4","#2a1408",64,256,36);dt(i,.22,.82,.03,bi,-.7+e*.28,1.75,.015),so(i,.18,.76,n,-.7+e*.28,1.75,.035)}dt(i,1.8,.06,.05,vi,0,2.2,.03)};ae.clock=i=>{let t=be(128,128,a=>{a.fillStyle="#f8f0dc",a.beginPath(),a.arc(64,64,60,0,7),a.fill(),a.fillStyle="#2a1408",a.font=`700 18px ${Zn}`,a.textAlign="center",a.textBaseline="middle";for(let o=1;o<=12;o++){let l=o/12*Math.PI*2-Math.PI/2;a.fillText(String(o),64+Math.cos(l)*46,64+Math.sin(l)*46)}});dt(i,.5,.7,.1,bi,0,1.95,.05),oe(i,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=so(i,.4,.4,t,0,2.05,.105),n=dt(i,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=dt(i,.01,.17,.01,"#1a1a1a",0,2.1,.115);i.userData.hands=[n,s],i.userData.handY=2.05;let r=new ve;r.position.set(0,1.75,.07),i.add(r),dt(r,.01,.2,.01,"#c8a040",0,-.1,0),i.userData.swing=r};ae.mado=i=>{let t=be(256,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1a1a40"),o.addColorStop(1,"#5a3a6a"),s.fillStyle=o,s.fillRect(0,0,r,a),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*a*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new mt(new Qn(.62,32),new je({map:t}));e.position.set(0,1.6,.03),i.add(e);let n=new mt(new Ui(.64,.06,8,32),te(bi));n.position.set(0,1.6,.04),i.add(n);for(let s of[-.2,.2])dt(i,.02,1.2,.02,vi,s,1.6,.05);dt(i,1.2,.02,.02,vi,0,1.6,.05),zr(i,0,1.6,.15,1.6,.25,"#b8c8ff")};ae.fuji=i=>{let t=be(256,160,(e,n,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,n,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,n,20)});dt(i,1.6,1,.05,"#2a1408",0,1.7,.025),so(i,1.5,.9,t,0,1.7,.055)};ae.maneki=i=>{let t="#f8f4ec";Ie(i,.12,t,0,.13,0,1,1.1,.9),Ie(i,.1,t,0,.32,.01);for(let n of[-.06,.06]){let s=new mt(new di(.035,.06,4),te(t));s.position.set(n,.42,0),i.add(s),Ie(i,.012,"#1a1a1a",n*.6,.34,.09)}Ie(i,.02,"#f08a9a",0,.31,.1),dt(i,.16,.025,.05,g1,0,.23,.06),Ie(i,.02,"#e9b830",0,.21,.1);let e=new ve;e.position.set(.09,.3,.02),i.add(e),Ie(e,.035,t,0,.07,0,1,1.6,1),i.userData.wave=e,Ie(i,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};ae.daruma=i=>{Ie(i,.14,"#d23a28",0,.15,0,1,1.1,1),Ie(i,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Ie(i,.016,"#1a1a1a",t,.2,.125);dt(i,.08,.012,.01,"#1a1a1a",0,.155,.13)};ae.beer=i=>{oe(i,.07,.065,.2,te("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),oe(i,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new mt(new Ui(.05,.012,6,12,Math.PI),te("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,i.add(t)};ae.sake=i=>{dt(i,.34,.02,.2,bi,0,.01,0),al(i,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])oe(i,.03,.025,.04,"#f0ece0",t,.04,0,10)};ae.yakitori=i=>{oe(i,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new ve;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,i.add(e),dt(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let n=0;n<4;n++)ls(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+n*.05,.005,0,[1.1,.9,1])}};ae.sushi=i=>{dt(i,.34,.03,.16,Hs,0,.03,0);for(let t=0;t<4;t++)dt(i,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),dt(i,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};ae.ramen=i=>{al(i,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),oe(i,.12,.12,.01,"#d89a4a",0,.09,0,20),Ie(i,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),dt(i,.05,.01,.04,"#8a4a2a",.04,.1,-.02),dt(i,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=dt(i,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};ae.edamame=i=>{oe(i,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)ls(i,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};ae.vase=i=>{al(i,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),oe(i,.006,.006,.25,"#4a7a3a",0,.36,0,4),Ie(i,.035,"#f0e0e8",0,.5,0),Ie(i,.03,"#e898b0",.02,.48,.02)};ae.tatami=i=>{let t=be(256,256,(n,s,r)=>{n.fillStyle="#c8c47a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=3)n.fillStyle=a%6?"#bcb86e":"#d2ce86",n.fillRect(0,a,s,1);n.fillStyle="#2a3a2a",n.fillRect(0,0,s,10),n.fillRect(0,r-10,s,10),n.fillRect(0,124,s,8)}),e=new mt(new bn(1.96,.04,1.96),[te("#2a3a2a"),te("#2a3a2a"),new xn({map:t}),te("#2a3a2a"),te("#2a3a2a"),te("#2a3a2a")]);e.position.y=.02,i.add(e)};ae.rug=i=>{let t=be(256,256,(n,s,r)=>{n.fillStyle="#23315c",n.fillRect(0,0,s,r),n.strokeStyle="#e8e0d0",n.lineWidth=3;for(let a=0;a<5;a++)for(let o=0;o<5;o++){let l=26+a*51,c=26+o*51;n.beginPath();for(let u=0;u<3;u++)n.arc(l,c,8+u*7,Math.PI,0);n.stroke()}n.strokeStyle="#c8a040",n.lineWidth=6,n.strokeRect(6,6,s-12,r-12)}),e=new mt(new Qn(.96,40),new xn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,i.add(e)};ae.step=i=>{ls(i,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function _1(i){let t=new Set,e=i.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),i.updateMatrixWorld(!0);let n=new Map;i.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)});for(let s of n.values())if(!(s.length<2))try{let r=s.map(l=>{let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(c.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&c.deleteAttribute(u);return c.attributes.uv?(c.applyMatrix4(l.matrixWorld),c):null});if(r.some(l=>!l))continue;let a=Yp(r,!1);if(!a)continue;let o=new mt(a,s[0].material);i.add(o),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var y1="#6fa8d6",gf="#4f86b8",lr="#f6f2ea",Or="#d9b07a";ae.sofa=i=>{dt(i,1.9,.42,.82,gf,0,.21,0);for(let t of[-.46,.46])dt(i,.9,.16,.7,y1,t,.5,.06);dt(i,1.9,.55,.2,gf,0,.72,-.32);for(let t of[-.88,.88])dt(i,.18,.58,.82,gf,t,.45,0);Ie(i,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),Ie(i,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};ae.armchair=i=>{dt(i,.8,.4,.78,"#e07a5f",0,.2,0),dt(i,.62,.14,.64,"#ee9a7a",0,.48,.05),dt(i,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])dt(i,.14,.52,.78,"#e07a5f",t,.45,0)};ae.ctable=i=>{dt(i,1.6,.06,.7,Or,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])oe(i,.03,.03,.38,"#8a6a4a",t,.19,e,8);dt(i,1.5,.03,.6,"#c89a62",0,.15,0)};ae.tv=i=>{dt(i,1.8,.5,.48,lr,0,.25,-.1);for(let e of[-.45,.45])dt(i,.8,.38,.02,"#e8e0d0",e,.25,.15);dt(i,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=dt(i,1.2,.68,.02,_n("#4a8ad8"),0,.98,-.085);t.userData.lit=1,i.userData.tvs=t,dt(i,.3,.08,.2,"#2a2a2e",0,.54,-.12)};ae.books=i=>{for(let n of[-.925,.925])dt(i,.05,1.9,.4,Or,n,.95,-.1);dt(i,1.9,.05,.4,Or,0,1.875,-.1),dt(i,1.8,1.8,.02,"#a07850",0,.95,-.29);for(let n of[.05,.5,.95,1.4])dt(i,1.8,.04,.36,"#c8a070",0,n+.02,-.1);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let n of[.09,.54,.99]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,a=.3+e*7%5*.025;dt(i,r,a,.24,t[e%7],s+r/2,n+a/2,-.08),s+=r+.01,e++}}Ie(i,.12,"#3f8f4f",.6,1.54,-.08)};ae.flamp=i=>{oe(i,.2,.22,.04,"#3a3a3e",0,.02,0,18),oe(i,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=oe(i,.16,.26,.32,_n("#fff0c8"),0,1.6,0,18);t.userData.lit=1,zr(i,0,1.55,0,2.4,.55)};ae.piano=i=>{dt(i,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),dt(i,1.6,.06,.7,"#1e1a1a",0,.72,.05),dt(i,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)dt(i,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])dt(i,.1,.7,.1,"#1e1a1a",t,.35,.3);dt(i,.5,.05,.3,"#1e1a1a",0,.45,.6),dt(i,.5,.04,.3,"#8a3a2a",0,.48,.6)};ae.bed=i=>{dt(i,1.9,.3,1.95,Or,0,.25,0),dt(i,1.9,.9,.1,Or,0,.55,-.95),dt(i,1.8,.2,1.85,lr,0,.5,.02),dt(i,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])Ie(i,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])dt(i,.08,.12,.08,"#8a6a4a",t,.06,e)};ae.wardrobe=i=>{dt(i,1.8,2,.6,lr,0,1,-.15),dt(i,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])oe(i,.02,.02,.3,"#c8a040",t,1.05,.18,6);dt(i,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};ae.nstand=i=>{dt(i,.5,.5,.45,Or,0,.27,0),dt(i,.46,.02,.02,"#8a6a4a",0,.35,.23),Ie(i,.025,"#c8a040",0,.25,.24)};ae.desk=i=>{dt(i,1.6,.05,.65,Or,0,.74,0);for(let t of[-.74,.74])dt(i,.06,.72,.6,"#e8e0d0",t,.36,0);dt(i,.45,.3,.55,"#e8e0d0",.45,.55,0)};ae.kcounter=i=>{dt(i,1.9,.86,.62,lr,0,.43,-.1),dt(i,1.96,.06,.7,"#9aa0a8",0,.89,-.08),dt(i,.6,.04,.4,"#6a7078",-.4,.91,-.08),oe(i,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])dt(i,.5,.6,.02,"#ece6da",e,.43,.22);let t=oe(i,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};ae.stove=i=>{dt(i,.8,.86,.62,"#e8e4dc",0,.43,-.1),dt(i,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new mt(new Ui(.1,.02,6,16),te("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),i.add(e)}dt(i,.7,.4,.02,"#2a2a2e",0,.45,.22),oe(i,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};ae.fridge=i=>{dt(i,.78,1.85,.7,"#eaf2f8",0,.93,-.08),dt(i,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])dt(i,.03,.25,.04,"#a8b0b8",.3,t,.3);dt(i,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};ae.catbed=i=>{let t=new mt(new Ui(.32,.12,8,20),te("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,i.add(t),oe(i,.3,.3,.08,"#f2d8b0",0,.05,0,18),Ie(i,.18,"#e8a050",.02,.2,0,1.4,.7,1),Ie(i,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let n=new mt(new di(.04,.07,4),te("#e8a050"));n.position.set(.22,.36,e),i.add(n)}};ae.monstera=i=>{oe(i,.24,.18,.4,"#f2efe6",0,.2,0,14),oe(i,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,n=new mt(new Qn(.28,10),new xn({color:t%2?"#2f7a3a":"#3f8f4a",side:Vn}));n.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),n.rotation.set(-1+Math.random()*.4,e,0),i.add(n),oe(i,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};ae.cactus=i=>{oe(i,.09,.07,.12,"#c8704a",0,.06,0,12),oe(i,.06,.06,.22,"#4a9a4a",0,.22,0,10),Ie(i,.06,"#4a9a4a",0,.33,0);let t=oe(i,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,Ie(i,.025,"#f29ab8",0,.39,0)};ae.wwin=i=>{let t=dt(i,1.5,1.1,.03,_n("#bfe6ff"),0,1.65,.02);i.userData.pane=t,dt(i,1.62,.08,.08,lr,0,2.24,.04),dt(i,1.62,.08,.08,lr,0,1.06,.04),dt(i,.06,1.15,.06,lr,0,1.65,.05),dt(i,1.62,.1,.2,lr,0,1.03,.1),dt(i,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let n=dt(i,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);n.geometry=new bn(.38,1.4,.05,4,1,1)}};ae.photos=i=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,n,s,r],a)=>{dt(i,s+.08,r+.08,.03,a%2?"#3a2a1a":lr,e,n,.015),dt(i,s,r,.01,_n(t[a]),e,n,.035),Ie(i,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][a],e-s*.15,n-r*.1,.04,1,1,.2)})};ae.shelfw=i=>{dt(i,1.7,.05,.25,Or,0,1.6,.12);for(let t of[-.7,.7])dt(i,.04,.15,.2,"#8a6a4a",t,1.52,.1);oe(i,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),Ie(i,.09,"#4a9a4a",-.5,1.82,.12),dt(i,.3,.22,.16,"#2f6bb8",0,1.74,.12),Ie(i,.08,"#f2b630",.45,1.7,.12)};ae.book=i=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let n=dt(i,.22,.045,.16,t[e],0,.025+e*.047,0);n.rotation.y=e*.25}};ae.mug=i=>{oe(i,.05,.045,.1,"#f6f2ea",0,.05,0,14),oe(i,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new mt(new Ui(.03,.01,6,10),te("#f6f2ea"));t.position.set(.06,.05,0),i.add(t)};ae.cake=i=>{oe(i,.14,.14,.02,"#f6f2ea",0,.01,0,20),oe(i,.1,.1,.1,"#fff8f0",0,.07,0,20),oe(i,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)Ie(i,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};ae.laptop=i=>{dt(i,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new ve;t.position.set(0,.015,-.11),t.rotation.x=-.35,i.add(t),dt(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=dt(t,.29,.17,.002,_n("#8ac0f0"),0,.1,.007);e.userData.lit=1};ae.dlamp=i=>{oe(i,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=oe(i,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=oe(i,.04,.09,.1,_n("#fff0c8"),0,.33,0,12);e.userData.lit=1,zr(i,0,.3,0,1.2,.5)};ae.teddy=i=>{let t="#b8814a";Ie(i,.1,t,0,.1,0,1,1.1,.9),Ie(i,.08,t,0,.24,0);for(let e of[-.06,.06])Ie(i,.03,t,e,.31,0),Ie(i,.012,"#1a1a1a",e*.5,.26,.07),Ie(i,.035,t,e*1.3,.1,.06);Ie(i,.03,"#e8d0b0",0,.225,.07)};ae.carpet=i=>{let t=be(256,256,(n,s,r)=>{n.fillStyle="#f2e6d0",n.fillRect(0,0,s,r);let a=v1(3);for(let o=0;o<1600;o++)n.fillStyle=a()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",n.fillRect(a()*s,a()*r,3,3);n.strokeStyle="#e8a0b0",n.lineWidth=10,n.strokeRect(14,14,s-28,r-28)}),e=new mt(new bn(1.9,.04,1.9),[te("#e8d8c0"),te("#e8d8c0"),new xn({map:t}),te("#e8d8c0"),te("#e8d8c0"),te("#e8d8c0")]);e.position.y=.02,i.add(e)};var v1=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function vf(i){let t=new ve,e=ae[i];return e?e(t):dt(t,.8,.8,.8,"#f0f",0,.4,0),_1(t),t.traverse(n=>{n.isMesh&&(n.userData.item=t)}),t}var kr=(i,t)=>i+Math.random()*(t-i),Fi=(i,t,e)=>Math.max(t,Math.min(e,i)),ll=(i,t,e)=>i+(t-i)*e,Gr=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Vr=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},cs={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},b1={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},Mf=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),Ss=46,es=34,Ws=7,M1=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],cl=2,bf=8.5,S1=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],hl=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],w1=`
.i3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.i3info{position:absolute;left:max(12px,env(safe-area-inset-left));top:92px;background:#ffffffe6;color:#3a2a1a;border:3px solid #3a2a1a;border-radius:16px;padding:6px 14px;font-size:15px;line-height:1.35;z-index:3;pointer-events:none;box-shadow:0 4px 0 #0003}
.i3info b{font-size:19px;display:block}
.i3pan{position:absolute;left:0;right:0;bottom:0;background:#fff8eaf2;border-top:4px solid #3a2a1a;z-index:5;padding:6px max(10px,env(safe-area-inset-right)) 10px max(10px,env(safe-area-inset-left));display:none;color:#3a2a1a}
.i3pan.on{display:block}
.i3row{display:flex;gap:8px;overflow-x:auto;padding:4px 2px 2px;scrollbar-width:thin}
.i3opt{flex:none;min-width:76px;min-height:64px;border:3px solid #3a2a1a;border-radius:14px;background:#fff;color:#3a2a1a;font-weight:800;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:4px 8px}
.i3opt i{display:block;width:30px;height:22px;border-radius:7px;border:2px solid #0003}
.i3opt.on{background:#ffd27a;outline:3px solid #ff9a2a}
.i3joy{position:absolute;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;background:#ffffff26;border:3px solid #ffffffaa;pointer-events:none;z-index:2;display:none}
.i3joy i{position:absolute;left:50%;top:50%;width:50px;height:50px;margin:-25px 0 0 -25px;border-radius:50%;background:#ffffffe0;box-shadow:0 2px 6px #0004}
.i3joy.rest{display:block;opacity:.55}.i3joy.on{display:block;opacity:1}
.i3door{position:absolute;transform:translate(-50%,-100%);z-index:4;border:3px solid #3a2a1a;border-radius:999px;background:#fff8ea;color:#3a2a1a;font-weight:900;font-size:17px;min-height:50px;padding:0 18px;box-shadow:0 4px 0 #0004;display:none;white-space:nowrap;animation:i3bob 1.2s ease-in-out infinite}
.i3door.on{display:block}.i3door.off{background:#e8e2d4;color:#7a6a5a}
.i3door:after{content:'';position:absolute;left:50%;bottom:-11px;margin-left:-8px;border:8px solid transparent;border-top-color:#3a2a1a}
@keyframes i3bob{0%,100%{margin-top:0}50%{margin-top:-6px}}
@media (max-height:520px){.i3door{font-size:15px;min-height:46px;padding:0 14px}.i3hud{top:64px;gap:8px}.i3info{top:64px;font-size:12px;padding:4px 10px}.i3info b{font-size:15px}.i3opt{min-width:64px;min-height:50px;font-size:11.5px;border-width:2px}.i3opt i{width:24px;height:16px}}
`;function tm(i){let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.data||{};if(r.ex=Object.assign(Mf(),r.ex||{}),!document.getElementById("i3css")){let m=document.createElement("style");m.id="i3css",m.textContent=w1,document.head.appendChild(m)}if(!document.getElementById("h3css")&&i.css){let m=document.createElement("style");m.id="h3css",m.textContent=i.css,document.head.appendChild(m)}let a=Math.min(screen.width,screen.height)<600,o=new eo({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});o.shadowMap.enabled=!0,o.shadowMap.type=Dc;let l=new Ar,c=new Zr(12576511,60,170);l.fog=c;let u=new ti(38,2,.3,600),p=new ea,d=(m,T)=>p.load(m,A=>{A.colorSpace=jn,T&&T(A)}),f={},g=(m,T)=>T?new xn(Object.assign({color:m},T)):f[m]||(f[m]=new xn({color:m})),I=(m,T)=>new je(Object.assign({color:m},T||{})),_=(m,T,A)=>{let B=m.clone();return B.wrapS=B.wrapT=Ns,B.repeat.set(T,A),B.needsUpdate=!0,B},y=[];function S(m,T,A,B,J,ft,yt,Et,Ut){let bt=new mt(new bn(m,T,A),typeof B=="string"?g(B):B);return bt.position.set(J,ft,yt),(Et||l).add(bt),Ut!==!1&&(bt.castShadow=!0),bt.receiveShadow=!0,bt}function L(m,T,A,B,J,ft,yt,Et,Ut){let bt=new mt(new Ai(m,T,A,Ut||14),typeof B=="string"?g(B):B);return bt.position.set(J,ft,yt),(Et||l).add(bt),bt.castShadow=!0,bt.receiveShadow=!0,bt}function E(m,T,A,B,J,ft,yt,Et,Ut,bt){let Je=new mt(bt?new xs(m,1):new pi(m,16,12),typeof T=="string"?bt?g(T,{flatShading:!0}):g(T):T);return Je.position.set(A,B,J),yt&&Je.scale.set(yt,Et,Ut),(ft||l).add(Je),Je.castShadow=!0,Je}let F=[];function N(m,T,A,B,J,ft){let yt=new fi(new ei({map:ua,blending:_s,transparent:!0,depthWrite:!1,opacity:0}));return ft&&yt.material.color.set(ft),yt.scale.set(B,B,1),yt.position.set(m,T,A),(J||l).add(yt),F.push(yt),yt}let M=[];function C(m,T){let A=new je({color:m});return A.userData.day=new Se(m),A.userData.night=new Se(T||"#ffd98a"),M.push(A),A}let q=new pi(300,24,16),z=new Float32Array(q.attributes.position.count*3);q.setAttribute("color",new Pe(z,3));let W=new mt(q,new je({vertexColors:!0,side:ni,fog:!1,depthWrite:!1}));W.renderOrder=-10,l.add(W);let Q=new Dn;{let m=[],T=Vr(9);for(let A=0;A<400;A++){let B=T()*Math.PI*2,J=.15+T()*1.3;m.push(Math.cos(B)*Math.cos(J)*280,Math.sin(J)*280,Math.sin(B)*Math.cos(J)*280)}Q.setAttribute("position",new Pe(m,3))}let ht=be(128,128,m=>{let T=m.createRadialGradient(64,64,10,64,64,64);T.addColorStop(0,"rgba(255,255,240,1)"),T.addColorStop(.35,"rgba(255,240,200,.9)"),T.addColorStop(.4,"rgba(255,230,180,.3)"),T.addColorStop(1,"rgba(255,230,180,0)"),m.fillStyle=T,m.fillRect(0,0,128,128)}),V=new fi(new ei({map:ht,fog:!1,depthWrite:!1,transparent:!0}));V.scale.set(50,50,1),W.add(V);let at=be(128,128,m=>{let T=m.createRadialGradient(64,64,18,64,64,64);T.addColorStop(0,"rgba(255,248,220,1)"),T.addColorStop(.42,"rgba(255,244,210,1)"),T.addColorStop(.46,"rgba(255,240,200,.25)"),T.addColorStop(1,"rgba(255,240,200,0)"),m.fillStyle=T,m.fillRect(0,0,128,128)}),ct=new fi(new ei({map:at,fog:!1,depthWrite:!1,transparent:!0}));ct.scale.set(36,36,1),W.add(ct);let st=new ve;W.add(st);{let m=be(16,16,B=>{B.fillStyle="#fff8e0",B.beginPath(),B.arc(8,8,3,0,7),B.fill()}),T=Q.attributes.position,A=new ei({map:m,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let B=0;B<T.count;B+=2){let J=new fi(A);J.position.set(T.getX(B),T.getY(B),T.getZ(B)),J.scale.set(1.4,1.4,1),st.add(J)}st.userData.m=A}let Pt=new ve;l.add(Pt);{let m=Vr(4);for(let T=0;T<14;T++){let A=new ve,B=3+(m()*3|0);for(let yt=0;yt<B;yt++){let Et=new mt(new xs(3+m()*3,1),new xn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));Et.position.set(yt*4-B*2,m()*1.5,m()*2),Et.scale.y=.6,A.add(Et)}let J=m()*Math.PI*2,ft=110+m()*60;A.position.set(Math.cos(J)*ft,40+m()*25,Math.sin(J)*ft),A.userData.a=J,A.userData.R=ft,Pt.add(A)}}let lt=new Lr(14676735,8036442,1.4);l.add(lt);let St=new Yo(16777215,.25);l.add(St);let xt=new Dr(16773852,2.2);xt.castShadow=!0;let Ht=a?1024:2048;xt.shadow.mapSize.set(Ht,Ht),Object.assign(xt.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),xt.shadow.bias=-8e-4,xt.shadow.normalBias=.03,l.add(xt),l.add(xt.target);let le=be(256,256,(m,T,A)=>{m.fillStyle="#3fb7d8",m.fillRect(0,0,T,A);let B=Vr(2);for(let J=0;J<90;J++){m.strokeStyle=`rgba(255,255,255,${.12+B()*.25})`,m.lineWidth=2+B()*2;let ft=B()*T,yt=B()*A,Et=10+B()*24;m.beginPath(),m.moveTo(ft,yt),m.quadraticCurveTo(ft+Et/2,yt-4,ft+Et,yt),m.stroke()}});le.wrapS=le.wrapT=Ns,le.repeat.set(40,40);let pt=new xn({map:le,color:"#ffffff"}),Zt=new mt(new Qe(900,900),pt);Zt.rotation.x=-Math.PI/2,Zt.position.y=-.45,Zt.receiveShadow=!0,l.add(Zt);function ie(m,T,A){let B=new sr;return B.moveTo(-m+A,-T),B.lineTo(m-A,-T),B.quadraticCurveTo(m,-T,m,-T+A),B.lineTo(m,T-A),B.quadraticCurveTo(m,T,m-A,T),B.lineTo(-m+A,T),B.quadraticCurveTo(-m,T,-m,T-A),B.lineTo(-m,-T+A),B.quadraticCurveTo(-m,-T,-m+A,-T),B}let _e=be(128,128,(m,T,A)=>{m.fillStyle="#f3dfa8",m.fillRect(0,0,T,A);let B=Vr(7);for(let J=0;J<300;J++)m.fillStyle=B()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",m.fillRect(B()*T,B()*A,2,2)});{let m=new Ya(ie(Ss+Ws,es+Ws,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});m.rotateX(Math.PI/2);let T=new mt(m,new xn({map:_(_e,.4,.4)}));T.position.y=-.83,T.receiveShadow=!0,l.add(T);let A=new mt(new ta(ie(Ss+Ws+3.4,es+Ws+3.4,18),12),new je({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.y=-.38,l.add(A)}let jt=be(256,256,(m,T,A)=>{m.fillStyle="#7ccb5a",m.fillRect(0,0,T,A);let B=Vr(5);for(let J=0;J<900;J++){m.fillStyle=B()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ft=B()*T,yt=B()*A;m.fillRect(ft,yt,2,5)}});{let m=new ta(ie(Ss,27,12),10);m.rotateX(-Math.PI/2),m.translate(0,0,-7);let T=m.attributes.uv;for(let B=0;B<T.count;B++)T.setXY(B,T.getX(B)/8,T.getY(B)/8);let A=new mt(m,new xn({map:_(jt,1,1)}));A.position.y=.02,A.receiveShadow=!0,l.add(A)}let re=be(128,128,(m,T,A)=>{m.fillStyle="#d9d4cc",m.fillRect(0,0,T,A);let B=Vr(8);for(let J=0;J<4;J++)for(let ft=0;ft<4;ft++){let yt=(B()*14|0)-7;m.fillStyle=`rgb(${206+yt},${200+yt},${190+yt})`,m.fillRect(ft*32+1,J*32+1,30,30)}}),Xe=g("#f4f1ea");for(let[m,T,A,B]of M1){let J=Math.hypot(A-m,B-T)+cl*2,ft=(m+A)/2,yt=(T+B)/2,Et=T===B,Ut=new mt(new Qe(Et?J:cl*2,Et?cl*2:J),new xn({map:_(re,(Et?J:4)/2,(Et?4:J)/2)}));Ut.rotation.x=-Math.PI/2,Ut.position.set(ft,.04,yt),Ut.receiveShadow=!0,l.add(Ut);for(let bt of[-1,1]){let Je=new mt(new bn(Et?J:.25,.12,Et?.25:J),Xe);Je.position.set(ft+(Et?0:bt*(cl+.1)),.06,yt+(Et?bt*(cl+.1):0)),Je.receiveShadow=!0,l.add(Je)}}let ye=be(512,512,(m,T,A)=>{m.fillStyle="#e9b98a",m.fillRect(0,0,T,A),m.translate(256,256);for(let B=250;B>40;B-=26)m.strokeStyle=B%52?"#f4d2a6":"#d99a6a",m.lineWidth=10,m.beginPath(),m.arc(0,0,B,0,7),m.stroke();for(let B=0;B<16;B++)m.rotate(Math.PI/8),m.strokeStyle="#f7e2c0",m.lineWidth=4,m.beginPath(),m.moveTo(50,0),m.lineTo(250,0),m.stroke()});{let m=new mt(new Qn(bf,48),new xn({map:ye}));m.rotation.x=-Math.PI/2,m.position.y=.06,m.receiveShadow=!0,l.add(m);let T=new mt(new Vo(bf,bf+.35,48),Xe);T.rotation.x=-Math.PI/2,T.position.y=.08,l.add(T)}let Be=[];{let m=new ve;l.add(m);let T=g("#f4f1ea");L(3.4,3.6,.7,T,0,.35,0,m,32);let A=be(128,128,(yt,Et,Ut)=>{yt.fillStyle="#5ec8e8",yt.fillRect(0,0,Et,Ut),yt.strokeStyle="rgba(255,255,255,.5)",yt.lineWidth=3;for(let bt=0;bt<8;bt++)yt.beginPath(),yt.arc(64,64,8+bt*8,0,7),yt.stroke()}),B=new mt(new Qn(3.05,32),new je({map:A}));B.rotation.x=-Math.PI/2,B.position.y=.72,m.add(B),Be.push(B),L(.5,.7,1.4,T,0,1.3,0,m,16),L(1.4,1.2,.25,T,0,2.05,0,m,24),L(.25,.35,.9,T,0,2.6,0,m,12),L(.7,.6,.18,T,0,3.1,0,m,20);let J=new je({color:"#c8f0ff",transparent:!0,opacity:.75}),ft=new mt(new Ai(.12,.2,1.2,10,1,!0),J);ft.position.y=3.7,m.add(ft),Be.push(ft);for(let yt=0;yt<8;yt++){let Et=yt/8*Math.PI*2,Ut=new mt(new Ui(.9,.06,6,12,Math.PI*.6),J);Ut.position.set(Math.cos(Et)*.9,2.2,Math.sin(Et)*.9),Ut.rotation.set(0,-Et,Math.PI*.2),m.add(Ut)}for(let yt=0;yt<6;yt++){let Et=yt/6*Math.PI*2+.26;qe(Math.cos(Et)*6.6,Math.sin(Et)*6.6,Et)}}function qe(m,T,A){let B=new ve;B.position.set(m,0,T),B.rotation.y=-A,l.add(B),S(1.6,.45,1,"#c8704a",0,.22,0,B),S(1.45,.1,.85,"#5a3a24",0,.45,0,B,!1);let J=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ft=0;ft<8;ft++)E(.13,J[ft%5],-.55+ft%4*.36,.62,-.2+Math.floor(ft/4)*.4,B),E(.1,"#4a9a3a",-.55+ft%4*.36,.52,-.2+Math.floor(ft/4)*.4,B)}function Mt(m){return be(128,128,(T,A,B)=>{T.fillStyle=m,T.fillRect(0,0,A,B);for(let J=0;J<B;J+=16)T.fillStyle="rgba(0,0,0,.08)",T.fillRect(0,J,A,2),T.fillStyle="rgba(255,255,255,.08)",T.fillRect(0,J+2,A,2)})}function kt(m){return be(512,128,(T,A,B)=>{T.fillStyle="#fff8ea",T.strokeStyle="#3a2a1a",T.lineWidth=10,Br(T,6,6,A-12,B-12,24),T.fill(),T.stroke(),T.fillStyle="#3a2a1a",T.textAlign="center",T.textBaseline="middle";let J=64;for(T.font=`900 ${J}px ${Zn}`;T.measureText(m).width>A-60&&J>20;)J-=2,T.font=`900 ${J}px ${Zn}`;T.fillText(m,A/2,B/2+3)})}let Rt=5.4,Vt=4.2,Ft=3;function Le(m,T){let A=new ve,B=m.wall,J=new xn({map:Mt(B)}),ft=-.6;S(Rt+.3,.35,Vt+.3,"#e8e2d4",0,.17,ft,A);let yt=S(Rt,Ft,Vt,J,0,.35+Ft/2,ft,A);for(let At of[-1,1])S(.22,Ft,.22,"#f4efe2",At*Rt/2,.35+Ft/2,ft+Vt/2,A);S(Rt+.1,.18,.18,"#f4efe2",0,.35+Ft,ft+Vt/2+.02,A);let Et=g(m.roofC),Ut=.35+Ft;if(m.roof==="flat")S(Rt+.6,.35,Vt+.6,Et,0,Ut+.17,ft,A),S(Rt+.2,.3,Vt+.2,"#f4efe2",0,Ut+.5,ft,A),S(1,.7,1,"#9a9a9a",1.4,Ut+.9,ft-.6,A);else if(m.roof==="round"){let At=new mt(new Ai(Vt/2+.45,Vt/2+.45,Rt+.5,24,1,!1,0,Math.PI),Et);At.rotation.set(0,0,Math.PI/2),At.scale.set(.72,1,1),At.position.set(0,Ut,ft),At.castShadow=!0,A.add(At);for(let rt of[-1,1]){let Kt=new mt(new Qn(Vt/2+.45,24,0,Math.PI),J);Kt.rotation.y=rt*Math.PI/2,Kt.scale.set(1,.72,1),Kt.position.set(rt*(Rt/2+.251),Ut,ft),A.add(Kt)}}else if(m.roof==="hip"){let At=(Rt+.9)/2,rt=(Vt+.9)/2,Kt=1.7,fe=Math.max(.3,At-rt),en=(li,br,ml)=>[li,br,ml],wn=en(-At,0,rt),an=en(At,0,rt),Rn=en(At,0,-rt),un=en(-At,0,-rt),Pn=en(-fe,Kt,0),Wn=en(fe,Kt,0),$n=[wn,an,Wn,wn,Wn,Pn,Rn,un,Pn,Rn,Pn,Wn,an,Rn,Wn,un,wn,Pn],_i=new Dn;_i.setAttribute("position",new Pe($n.flat(),3)),_i.computeVertexNormals();let yi=new mt(_i,Et.clone());yi.material.side=Vn,yi.position.set(0,Ut-.05,ft),yi.castShadow=!0,A.add(yi),S(2*At,.12,2*rt,"#f4efe2",0,Ut-.02,ft,A).castShadow=!1}else{let At=new sr,rt=Vt/2+.5;At.moveTo(-rt,0),At.lineTo(0,1.9),At.lineTo(rt,0),At.lineTo(-rt,0);let Kt=new Ya(At,{depth:Rt+.6,bevelEnabled:!1});Kt.translate(0,0,-(Rt+.6)/2);let fe=new mt(Kt,[Et,Et]);fe.rotation.y=Math.PI/2,fe.position.set(0,Ut-.05,ft),fe.castShadow=!0,A.add(fe);let en=new sr;en.moveTo(-Vt/2,0),en.lineTo(0,1.55),en.lineTo(Vt/2,0);let wn=new mt(new ta(en),J);wn.rotation.y=Math.PI/2;for(let Rn of[-1,1]){let un=wn.clone();un.rotation.y=Rn*Math.PI/2,un.position.set(Rn*(Rt/2+.001),Ut,ft),A.add(un)}let an=new mt(new Qn(.35,20),C("#bfe6ff"));an.position.set(0,Ut+.5,ft+Vt/2+.02),A.add(an)}let bt=ft+Vt/2+.02,Je=g(m.doorC);S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,bt,A);let In=new ve;{let At=new mt(new Qe(1.1,2.3),new je({color:"#2a1a10"}));At.position.set(0,.35+1.15,bt+.005),A.add(At);let rt=new mt(new Qe(1,2.1),C("#5a3a24","#ffcf7a"));rt.position.set(0,.35+1.07,bt+.007),A.add(rt)}if(m.door==="arch"){S(1.1,1.75,.14,Je,0,.35+.88,bt+.02,In);let At=new mt(new Qn(.55,20,0,Math.PI),Je);At.position.set(0,.35+1.75,bt+.1),In.add(At)}else S(1.1,2.05,.14,Je,0,.35+1.02,bt+.02,In);if(m.door==="round"){let At=new mt(new Qn(.26,20),C("#bfe6ff"));At.position.set(0,.35+1.5,bt+.1),In.add(At);let rt=new mt(new Ui(.28,.05,8,20),g("#c8c8d0"));rt.position.set(0,.35+1.5,bt+.1),In.add(rt)}else if(m.door==="grid")for(let At=0;At<3;At++)for(let rt=0;rt<2;rt++){let Kt=new mt(new Qe(.38,.4),C("#e8f4ff","#ffe0a0"));Kt.position.set(-.21+rt*.42,.35+1.15+At*.45,bt+.1),In.add(Kt)}E(.06,"#e9c34a",.4,.35+1,bt+.12,In);{let At=new ve;At.position.set(-.55,0,bt+.02),A.add(At),In.position.set(.55,0,-(bt+.02)),At.add(In),A.userData.doorPivot=At,A.userData.doorZ=bt}let Mi=E(.16,I("#fff4d0"),.95,.35+2.3,bt+.2,A);N(.95,.35+2.3,bt+.3,2.2,A);for(let At of[-1.75,1.75]){if(m.win==="round"){let Kt=new mt(new Qn(.5,24),C("#bfe6ff"));Kt.position.set(At,2.05,bt+.01),A.add(Kt);let fe=new mt(new Ui(.52,.08,8,24),g("#f4efe2"));fe.position.set(At,2.05,bt+.02),A.add(fe)}else if(m.win==="arch"){let Kt=new mt(new Qe(.9,.8),C("#bfe6ff"));Kt.position.set(At,2.05-.15,bt+.01),A.add(Kt);let fe=new mt(new Qn(.45,16,0,Math.PI),C("#bfe6ff"));fe.position.set(At,2.05+.25,bt+.01),A.add(fe),S(1.05,.1,.14,"#f4efe2",At,2.05-.58,bt+.05,A)}else if(m.win==="shoji"){let Kt=new mt(new Qe(1.1,1),C("#fff4dc","#ffcf7a"));Kt.position.set(At,2.05,bt+.01),A.add(Kt);for(let fe=-1;fe<=1;fe++)S(.04,1,.04,"#6b3f1f",At+fe*.36,2.05,bt+.04,A,!1),S(1.1,.04,.04,"#6b3f1f",At,2.05+fe*.33,bt+.04,A,!1)}else{let Kt=new mt(new Qe(1.05,.95),C("#bfe6ff"));Kt.position.set(At,2.05,bt+.01),A.add(Kt),S(1.2,.1,.1,"#f4efe2",At,2.05+.5,bt+.04,A,!1),S(1.2,.1,.1,"#f4efe2",At,2.05-.5,bt+.04,A,!1),S(.1,1.05,.1,"#f4efe2",At-.55,2.05,bt+.04,A,!1),S(.1,1.05,.1,"#f4efe2",At+.55,2.05,bt+.04,A,!1),S(.06,1,.06,"#f4efe2",At,2.05,bt+.04,A,!1),S(1.3,.14,.32,"#f4efe2",At,2.05-.6,bt+.14,A)}if(m.garden!=="none"){S(1,.2,.25,"#8a5a34",At,2.05-.78,bt+.2,A);for(let Kt=0;Kt<4;Kt++)E(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][Kt],At-.36+Kt*.24,2.05-.62,bt+.2,A)}}if(+m.porch){S(Rt+.6,.3,1.7,"#c8935a",0,.15,bt+.85,A);for(let At=0;At<9;At++)S(.02,.02,1.7,"#9a6a3a",-Rt/2-.1+At*.7,.31,bt+.85,A,!1);S(1.6,.15,.5,"#c8935a",0,.075,bt+1.95,A);for(let At of[-1,1])S(.12,.9,.12,"#f4efe2",At*(Rt/2+.15),.75,bt+1.62,A),S(.12,.9,.12,"#f4efe2",At*1,.75,bt+1.62,A),S(Rt/2-.8,.08,.08,"#f4efe2",At*(Rt/4+.58),1.1,bt+1.62,A)}{let At=new ve;At.position.set(Rt/2+.2,0,bt+2.4),A.add(At),S(.1,1,.1,"#6b3f1f",0,.5,0,At),S(.4,.32,.55,m.doorC==="#f4efe2"?"#e8553f":m.doorC,0,1.12,0,At),S(.05,.25,.05,"#e8553f",.22,1.3,.1,At)}let Si=bt+2.9,vr=Rt/2+1.1;if(m.fence==="white"||m.fence==="wood"){let At=m.fence==="white"?"#ffffff":"#c8b070";for(let rt of[-1,1]){for(let Kt=0;Kt<6;Kt++){let fe=rt*(1.3+Kt*.55);if(S(.12,.8,.06,At,fe,.4,Si,A),m.fence==="white"){let en=new mt(new di(.09,.16,4),g(At));en.position.set(fe,.88,Si),en.rotation.y=Math.PI/4,A.add(en)}}S(2.9,.08,.05,At,rt*2.65,.55,Si-.04,A,!1),S(2.9,.08,.05,At,rt*2.65,.25,Si-.04,A,!1)}}else if(m.fence==="hedge")for(let At of[-1,1]){let rt=S(2.8,.7,.6,g("#3f9a3f"),At*2.6,.35,Si,A);rt.geometry=new bn(2.8,.7,.6,3,1,1);for(let Kt=0;Kt<4;Kt++)E(.38,"#4aa84a",At*(1.5+Kt*.72),.7,Si,A,1,.8,1,!0)}if(m.garden==="flower")for(let At of[-1,1])for(let rt=0;rt<5;rt++)E(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(rt+(At>0?2:0))%5],At*(2.1+rt%3*.5),.28,bt+2+Math.floor(rt/3)*.4,A),E(.12,"#3f8a2f",At*(2.1+rt%3*.5),.14,bt+2+Math.floor(rt/3)*.4,A);else if(m.garden==="pots")for(let At of[-1,1])L(.28,.22,.45,"#c8704a",At*2.3,.22,bt+2.1,A),E(.38,"#4a9a3a",At*2.3,.7,bt+2.1,A,1,1,1,!0);else m.garden==="tree"&&(L(.12,.16,1.5,"#7a5034",-Rt/2-.6,.75,bt+1.6,A),E(.95,"#4aa84a",-Rt/2-.6,2,bt+1.6,A,1,1,1,!0),E(.6,"#5ab85a",-Rt/2-.2,2.4,bt+1.9,A,1,1,1,!0));if(T){let At=new mt(new Qe(1.8,.45),new je({map:kt(T),transparent:!0}));At.position.set(0,.35+2.5,bt+.09),A.add(At)}return A.traverse(At=>{At.isMesh&&(At.castShadow=At.castShadow||!1,At.receiveShadow=!0)}),A.userData.door=new k(0,0,bt+2.4),A}let ce=[],Ye=Vr(31),$e=m=>{let T=io.find(A=>A.id===m||A.spr===m);return T?T.name.split(" ")[0]:m};function sn(m){let T=A=>A[Math.floor(m()*A.length)][0];return{wall:T(cs.wall),roof:T(cs.roof),roofC:T(cs.roofC),door:T(cs.door),doorC:T(cs.doorC),win:T(cs.win),porch:m()<.75?1:0,fence:T(cs.fence),garden:T(cs.garden)}}function X(m){m.g&&(l.remove(m.g),m.g.traverse(yt=>{yt.geometry&&yt.geometry.dispose()}));let T=m.own?r.ex:m.ex,A=m.own?i.houseName||"\u6211\u7684\u5BB6":m.label;m.g=Le(T,A),m.g.position.set(m.x,0,m.z),m.g.rotation.y=m.f===2?Math.PI:0,l.add(m.g),m.g.traverse(yt=>{yt.isMesh&&(yt.userData.house=m)});let B=m.g.userData.door.clone();m.f===2&&(B.x=-B.x,B.z=-B.z),m.door={x:m.x+B.x,z:m.z+B.z};let J=m.f===2?-1:1,ft=m.g.userData.doorZ+.6;m.face={x:m.x,z:m.z+J*ft},m.inw=-J,m.pivot=m.g.userData.doorPivot}S1.forEach(m=>{let T=Object.assign({},m);if(!T.own){T.ex=sn(Ye);let A=io.find(B=>B.spr===m.npc||B.id===m.npc);T.label=(A?A.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}ce.push(T),X(T)});let Ee=ce.find(m=>m.own);function Ne(m){let T=new ve;T.position.set(m.x,0,m.z),l.add(T);let A={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[m.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,T),S(6.6,3.4,5,A[0],0,2,-.2,T),S(7.4,.4,6,A[1],0,3.9,-.2,T),S(7.6,.3,1.6,A[1],0,3.1,2.6,T).rotation.x=.35;let B=new mt(new Qe(4.2,.9),new je({map:kt(m.k==="izakaya"&&r.name?r.name:A[3])}));B.position.set(0,4.55,2.85),T.add(B),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,T);let J=new mt(new Qe(2.2,1.4),C("#cfe8f4"));J.position.set(-1.9,1.7,2.31),T.add(J);let ft=J.clone();ft.position.x=1.9,T.add(ft),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,T);let yt=be(256,100,(Ut,bt,Je)=>{for(let In=0;In<3;In++)Ut.fillStyle=A[2],Ut.fillRect(4+In*84,0,80,Je-4);Ut.fillStyle="#fff",Ut.textAlign="center",Ut.textBaseline="middle",Ut.font=`900 40px ${Zn}`,[...m.k==="bar"?"\u6708\u5F71":m.n.slice(0,3)].slice(0,3).forEach((In,Mi)=>Ut.fillText(In,44+Mi*84,44))}),Et=new mt(new Qe(1.5,.65),new je({map:yt,transparent:!0,side:Vn}));Et.position.set(0,2.25,2.42),T.add(Et);for(let Ut of[-1,1]){let bt=E(.3,I(m.k==="sushi"?"#ffffff":"#e2452f"),Ut*1.15,2.3,2.5,T,1,1.3,1);N(Ut*1.15,2.3,2.6,2.6,T)}if(m.k==="ramen")for(let Ut=0;Ut<3;Ut++)L(.25,.25,.7,"#c8352a",-1.2+Ut*1.2,.35,3.5,T,12);if(m.k==="sushi"){let Ut=new mt(new di(.4,1.2,4),g("#2f6bb8"));Ut.position.set(3.1,3.2,2.6),Ut.rotation.z=-1.3,T.add(Ut)}return T.traverse(Ut=>{Ut.isMesh&&(Ut.userData.shop=m)}),m.door={x:m.x,z:m.z+3.6},m.face={x:m.x,z:m.z+2.85},m.inw=-1,T}hl.forEach(Ne);let ze=[],Bt=[];ce.forEach(m=>{ze.push([m.x-Rt/2-.2,m.z-(m.f===2?-.6:.6)-Vt/2-.2,m.x+Rt/2+.2,m.z-(m.f===2?-.6:.6)+Vt/2+.2])}),hl.forEach(m=>ze.push([m.x-3.5,m.z-3,m.x+3.5,m.z+2.4])),Bt.push([0,0,3.6]);for(let m=0;m<6;m++){let T=m/6*Math.PI*2+.26;Bt.push([Math.cos(T)*6.6,Math.sin(T)*6.6,.7])}function yn(m,T,A,B){let J=new ve;if(J.position.set(m,0,T),J.scale.setScalar(A),l.add(J),B==="palm"){let ft=0,yt=0;for(let Et=0;Et<6;Et++){let Ut=L(.22-Et*.02,.26-Et*.02,.8,"#a07850",ft,yt+.4,0,J,8);Ut.rotation.z=-.08*Et,ft+=.06*Et,yt+=.78}for(let Et=0;Et<7;Et++){let Ut=Et/7*Math.PI*2,bt=new mt(new di(.32,2.6,4),g("#3fa04a",{flatShading:!0}));bt.scale.z=.25,bt.position.set(ft+Math.cos(Ut)*1.1,yt+.1,Math.sin(Ut)*1.1),bt.rotation.set(Math.sin(Ut)*1.6,0,-Math.cos(Ut)*1.6),bt.castShadow=!0,J.add(bt)}E(.18,"#6a4a2a",ft,yt-.1,.1,J)}else L(.22,.3,1.8,"#8a5a3a",0,.9,0,J,8),E(1.5,B==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,J,1,.9,1,!0),E(1,B==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,J,1,1,1,!0),E(.9,B==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,J,1,1,1,!0);ze.push([m-.5*A,T-.5*A,m+.5*A,T+.5*A])}let pe=Vr(77);for(let m=0;m<34;m++){let T=m/34*Math.PI*2+pe()*.1,A=Math.cos(T)*(Ss-1.5+pe()*2),B=Math.sin(T)*(es-1.5+pe()*2);if(B>18){pe()<.5&&yn(Fi(A*1.05,-Ss-3,Ss+3),Fi(B,22,es+4),.9,"palm");continue}yn(Fi(A,-Ss+2,Ss-2),Fi(B,-es+2,es-2),.9+pe()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([m,T],A)=>yn(m,T,.8+A%3*.1,A%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([m,T])=>yn(m,T,.8,"pink"));function Me(m,T){let A=new ve;A.position.set(m,0,T),l.add(A),L(.09,.12,3.6,"#3a3a44",0,1.8,0,A,8);let B=E(.28,I("#fff4d0"),0,3.7,0,A);L(.3,.2,.12,"#3a3a44",0,3.98,0,A,10),N(0,3.7,0,5,A);let J=new mt(new Qn(3,20),new je({map:ua,transparent:!0,blending:_s,depthWrite:!1,opacity:0}));J.rotation.x=-Math.PI/2,J.position.y=.08,A.add(J),F.push(J),J.userData.k=.35,ze.push([m-.2,T-.2,m+.2,T+.2])}for(let[m,T]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Me(m,T);function U(m,T,A){let B=new ve;B.position.set(m,0,T),B.rotation.y=A,l.add(B),S(2,.12,.55,"#b8824a",0,.5,0,B),S(2,.5,.1,"#b8824a",0,.85,-.25,B);for(let Et of[-.85,.85])S(.1,.5,.5,"#3a3a44",Et,.25,0,B);let J=Math.abs(Math.sin(A))>.7,ft=J?.4:1,yt=J?1:.4;return ze.push([m-ft,T-yt,m+ft,T+yt]),B}U(0,6.9,Math.PI),U(0,-6.9,0),U(-6.9,0,Math.PI/2),U(6.9,0,-Math.PI/2);let w=new ve;w.position.set(4.6,0,-4.6),w.rotation.y=-Math.PI/4,l.add(w);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,w),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,w);let m=be(256,160,(A,B,J)=>{A.fillStyle="#c8935a",A.fillRect(0,0,B,J),A.strokeStyle="#6b3f1f",A.lineWidth=10,A.strokeRect(0,0,B,J),A.fillStyle="#fff8ea",A.fillRect(20,30,100,70),A.fillStyle="#ffe0ea",A.fillRect(135,22,100,80),A.fillStyle="#3a2a1a",A.font=`900 26px ${Zn}`,A.textAlign="center",A.fillText("\u5CF6\u306E\u63B2\u793A\u677F",B/2,J-18)}),T=new mt(new bn(1.8,1.1,.1),[g("#6b3f1f"),g("#6b3f1f"),g("#6b3f1f"),g("#6b3f1f"),new je({map:m}),g("#6b3f1f")]);T.position.y=1.4,T.castShadow=!0,w.add(T),ze.push([3.8,-5.4,5.4,-3.8])}function et(m,T,A){let B=new ve;B.position.set(m,0,T),l.add(B),L(.05,.05,2.4,"#f4efe2",0,1.2,0,B,6);let J=new mt(new di(1.5,.7,12),g(A,{flatShading:!0}));J.position.y=2.5,J.castShadow=!0,B.add(J);let ft=new mt(new di(1.52,.7,12,1,!0,0,Math.PI/6),g("#ffffff",{side:Vn}));for(let yt=0;yt<6;yt++){let Et=ft.clone();Et.rotation.y=yt*Math.PI/3,Et.position.y=2.5,B.add(Et)}}function Lt(m,T,A){let B=new ve;B.position.set(m,0,T),l.add(B),S(.7,.12,1.8,A,0,.35,0,B);let J=S(.7,.1,.8,A,0,.6,-.85,B);J.rotation.x=.6;for(let ft of[-.3,.3])for(let yt of[-.7,.7])S(.05,.3,.05,"#f4efe2",ft,.15,yt,B)}et(-18,28,"#2f6bb8"),Lt(-16.2,28.4,"#6fd1c0"),Lt(-19.6,28.8,"#f29ab8"),et(-4,30,"#e8553f"),Lt(-2.2,30.2,"#f6cf4a"),et(22,29,"#3f8f4f"),Lt(23.8,29.3,"#f29ab8"),et(-30,27,"#f6cf4a");{let m=new ve;m.position.set(10,0,es+6),l.add(m),S(3,.3,16,"#b8824a",0,.15,6,m);for(let B=0;B<6;B++)for(let J of[-1.4,1.4])L(.15,.15,1.6,"#8a5a34",J,-.5,-1+B*3,m,8);for(let B=0;B<16;B++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+B,m,!1);let T=new ve;T.position.set(14,-.2,es+17),l.add(T),S(1.8,.6,4,"#f4efe2",0,.3,0,T),S(1.9,.15,4.1,"#e8553f",0,.65,0,T),L(.06,.06,3,"#8a5a34",0,2,0,T,6);let A=new mt(new Qe(1.6,2.2),g("#ffffff",{side:Vn}));A.position.set(0,2.2,.6),A.rotation.y=Math.PI/2,T.add(A),Pt.userData.boat=T}let vt=[8.5,es+4,11.5,es+19],Ct=[],zt=1.5,gt=be(64,64,m=>{let T=m.createRadialGradient(32,32,2,32,32,32);T.addColorStop(0,"rgba(0,0,0,.55)"),T.addColorStop(1,"rgba(0,0,0,0)"),m.fillStyle=T,m.fillRect(0,0,64,64)});function _t(m,T){return be(512,112,(A,B,J)=>{A.textAlign="center",A.textBaseline="middle";let ft=52;A.font=`900 ${ft}px ${Zn}`;let yt=String(m||"").slice(0,16);for(;A.measureText(yt).width>B-80&&ft>22;)ft-=2,A.font=`900 ${ft}px ${Zn}`;let Et=Math.min(B-12,A.measureText(yt).width+56);A.fillStyle=T==="me"?"#ffffffee":"#2a2a48e0",A.strokeStyle=T==="me"?"#3a2a1a":"#c8c0ff",A.lineWidth=7,Br(A,(B-Et)/2,14,Et,J-28,(J-28)/2),A.fill(),A.stroke(),A.fillStyle=T==="me"?"#3a2a1a":"#fff3d6",A.fillText(yt,B/2,J/2+2)})}let Gt=be(128,112,m=>{m.strokeStyle="#2a1810",m.lineWidth=6,m.lineJoin="round",m.fillStyle="#ffffff",Br(m,12,8,104,66,24),m.fill(),m.stroke(),m.beginPath(),m.moveTo(44,72),m.lineTo(34,100),m.lineTo(66,74),m.closePath(),m.fill(),m.stroke(),m.fillRect(46,68,18,8),m.fillStyle="#2a1810";for(let T=0;T<3;T++)m.beginPath(),m.arc(40+T*24,42,6,0,7),m.fill()});function G(m,T,A){A=A||{};let B=new ve;l.add(B);let J=new Qe(1,1);J.translate(0,.5,0);let ft=new je({transparent:!0,alphaTest:.04,color:16777215}),yt=new mt(J,ft);B.add(yt);let Et={grp:B,m:yt,mat:ft,h0:T,h:T*zt,ar:.8,w:T*zt*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};d(m,bt=>{ft.map=bt,ft.needsUpdate=!0,Et.ar=bt.image.width/bt.image.height,Et.w=Et.h*Et.ar});let Ut=new mt(new Qn(.5,16),new je({map:gt,transparent:!0,depthWrite:!1}));if(Ut.rotation.x=-Math.PI/2,l.add(Ut),Et.sh=Ut,A.name){let bt=new fi(new ei({map:_t(A.name,A.nk),transparent:!0,depthTest:!1}));bt.renderOrder=30,bt.scale.set(2.2,.48,1),l.add(bt),Et.tag=bt}if(A.bubble){let bt=new fi(new ei({map:Gt,transparent:!0,depthWrite:!1}));bt.scale.set(.85,.74,1),l.add(bt),Et.bub=bt}return Ct.push(Et),Et}let Y=G(i.me.src,1.5,{name:i.me.name||"\u6211",nk:"me"}),ut=.35;i.spawn==="door"&&Ee?(Y.x=Ee.face.x,Y.z=Ee.face.z-Ee.inw*.9):i.spawn==="front"&&Ee?(Y.x=Ee.face.x+.8,Y.z=Ee.face.z-Ee.inw*1.9,ut=Ee.f===2?Math.PI:0):i.spawn==="shop"?(Y.x=hl[0].face.x,Y.z=hl[0].face.z+.9):(Y.x=0,Y.z=11.5);function Xt(m,T){let A=Math.abs(m),B=Math.abs(T),J=Ss+Ws-1,ft=es+Ws-1,yt=14;return m>=vt[0]&&m<=vt[2]&&T>=vt[1]&&T<=vt[3]?!0:A>J||B>ft?!1:A>J-yt&&B>ft-yt?Math.hypot(A-(J-yt),B-(ft-yt))<yt:!0}function Dt(m,T,A){if(!Xt(m,T))return!0;for(let B of ze)if(m>B[0]-A&&m<B[2]+A&&T>B[1]-A&&T<B[3]+A)return!0;for(let B of Bt)if(Math.hypot(m-B[0],T-B[1])<B[2]+A)return!0;return!1}let Wt=1,ue=-Ss-Ws,Ue=-es-Ws,Tt=Math.ceil((Ss+Ws)*2),me=Math.ceil((es+Ws)*2+16),Te=null;function $t(){Te=new Uint8Array(Tt*me);for(let m=0;m<me;m++)for(let T=0;T<Tt;T++)Te[m*Tt+T]=Dt(ue+T+.5,Ue+m+.5,.35)?1:0}$t();function on(m,T,A,B){let J=an=>Math.floor(an-ue),ft=an=>Math.floor(an-Ue),yt=J(m),Et=ft(T),Ut=J(A),bt=ft(B);if(Ut<0||bt<0||Ut>=Tt||bt>=me)return null;if(Te[bt*Tt+Ut]){let an=null,Rn=1e9;for(let un=-3;un<=3;un++)for(let Pn=-3;Pn<=3;Pn++){let Wn=Ut+Pn,$n=bt+un;if(Wn<0||$n<0||Wn>=Tt||$n>=me||Te[$n*Tt+Wn])continue;let _i=Pn*Pn+un*un;_i<Rn&&(Rn=_i,an=[Wn,$n])}if(!an)return null;[Ut,bt]=an}let Je=new Int32Array(Tt*me).fill(-1),In=Et*Tt+yt,Mi=bt*Tt+Ut;Je[In]=In;let Si=[In],vr=0;for(;vr<Si.length;){let an=Si[vr++];if(an===Mi)break;let Rn=an%Tt,un=an/Tt|0;for(let[Pn,Wn]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let $n=Rn+Pn,_i=un+Wn;if($n<0||_i<0||$n>=Tt||_i>=me)continue;let yi=_i*Tt+$n;Je[yi]>=0||Te[yi]||Pn&&Wn&&(Te[un*Tt+$n]||Te[_i*Tt+Rn])||(Je[yi]=an,Si.push(yi))}}if(Je[Mi]<0)return null;let At=[],rt=Mi;for(;rt!==In;)At.push([ue+rt%Tt+.5,Ue+(rt/Tt|0)+.5]),rt=Je[rt];At.reverse();let Kt=[],fe=m,en=T,wn=0;for(;wn<At.length;){let an=wn;for(let Rn=At.length-1;Rn>wn;Rn--)if(zn(fe,en,At[Rn][0],At[Rn][1])){an=Rn;break}Kt.push(At[an]),fe=At[an][0],en=At[an][1],wn=an+1}return Kt}function zn(m,T,A,B){let J=Math.hypot(A-m,B-T),ft=Math.ceil(J/.4);for(let yt=1;yt<=ft;yt++){let Et=yt/ft;if(Dt(m+(A-m)*Et,T+(B-T)*Et,.3))return!1}return!0}let cn=[],us={};function Mn(m,T){let A=m+","+T;return us[A]!==void 0?us[A]:(us[A]=cn.length,cn.push({x:m,z:T,n:[]}),cn.length-1)}{let m=[-36,-26,-15,0,15,26,36],T=[-18,0,16];for(let Et of T)for(let Ut=0;Ut<m.length-1;Ut++){let bt=Mn(m[Ut],Et),Je=Mn(m[Ut+1],Et);cn[bt].n.push(Je),cn[Je].n.push(bt)}for(let Et of[-36,36])for(let Ut=0;Ut<T.length-1;Ut++){let bt=Mn(Et,T[Ut]),Je=Mn(Et,T[Ut+1]);cn[bt].n.push(Je),cn[Je].n.push(bt)}let A=Mn(0,-28),B=Mn(0,-18);cn[A].n.push(B),cn[B].n.push(A);let J=Mn(0,-9.5),ft=Mn(0,9.5);for(let[Et,Ut]of[[B,J],[ft,Mn(0,16)],[J,Mn(-9.5,0)],[J,Mn(9.5,0)],[ft,Mn(-9.5,0)],[ft,Mn(9.5,0)],[Mn(-9.5,0),Mn(-15,0)],[Mn(9.5,0),Mn(15,0)]])cn[Et].n.push(Ut),cn[Ut].n.push(Et);let yt=us["0,0"];yt!==void 0&&cn[yt].n.forEach(Et=>{cn[Et].n=cn[Et].n.filter(Ut=>Ut!==yt)}),yt!==void 0&&(cn[yt].n=[])}let gi=[];io.filter(m=>i.walk&&i.walk[m.spr]&&m.spr!=="robot").sort(()=>Math.random()-.5).slice(0,a?7:10).forEach(m=>{let T=G(i.walk[m.spr],m.h,{bubble:1});T.d=m,T.sp=m.sp*.9;let A;do A=Math.floor(Math.random()*cn.length);while(!cn[A].n.length);T.x=cn[A].x+kr(-1,1),T.z=cn[A].z+kr(-1,1),T.node=A,T.state="idle",T.t=kr(0,3),gi.push(T)});function As(m){let T=cn[m.node];if(!T.n.length)return;let A=T.n[Math.floor(Math.random()*T.n.length)];m.node=A;let B=cn[A];m.tx=B.x+kr(-1.2,1.2),m.tz=B.z+kr(-1.2,1.2),m.state="walk"}let Jn=(m,T,A,B)=>{let J=document.createElement(m);return T&&(J.className=T),A!=null&&(J.innerHTML=A),(B||e).appendChild(J),J},ur=[],Wi=m=>(ur.push(m),m),Rs=Wi(Jn("div","i3info")),se=Wi(Jn("div","i3hud")),fa=Wi(Jn("div","h3hint")),fr=Wi(Jn("div","h3toast")),xi=Wi(Jn("div","h3card")),Xs=Wi(Jn("div","i3pan")),ki=Wi(Jn("div","i3joy","<i></i>")),dr=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,Hn=()=>{if(K.dead)return;let m=t.getBoundingClientRect(),T=e.getBoundingClientRect();ki.style.left=m.left-T.left+110+"px",ki.style.top=m.bottom-T.top-110+"px",ki.firstChild.style.transform="",ki.className="i3joy"+(dr&&K.mode==="walk"?" rest":"")},qn=Wi(Jn("button","i3door"));qn.type="button",qn.dataset.i3="door";function Xi(m){fr.textContent=m,fr.classList.add("on"),clearTimeout(Xi.t),Xi.t=setTimeout(()=>fr.classList.remove("on"),2400)}let K={dead:!1,mode:"walk",yaw:ut,yawT:ut,pitch:.72,pitchT:.72,dist:17,distT:17,fp:!1,fpK:0,fpP:0,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new k(Y.x,1,Y.z)},R=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],H=0;function ot(){if(R[H][0]!==null)return R[H][0];let m=new Date;return m.getHours()+m.getMinutes()/60}function nt(){if(K.mode==="edit"){se.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}se.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button>${n.stats?'<button class="h3b" type="button" data-i3="stats"><i>\u{1F4CB}</i>\u5E97\u6CC1</button>':""}<button class="h3b" type="button" data-i3="fp"><i>\u{1F441}</i>${K.fp?"\u7B2C\u4E09\u4EBA\u7A31":"\u7B2C\u4E00\u4EBA\u7A31"}</button><button class="h3b" type="button" data-i3="time"><i>\u{1F550}</i>${R[H][1]}</button>`}function it(){let m=ot(),T=Math.floor(m),A=Math.floor((m-T)*60);Rs.innerHTML=`<b>\u{1F3DD}\uFE0F ${Gr(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(i.owner&&i.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(T).padStart(2,"0")}:${String(A).padStart(2,"0")}\u30FB${m<5||m>=19.5?"\u591C\u665A \u{1F319}":m<7?"\u6E05\u6668 \u{1F305}":m<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}nt(),it(),setTimeout(Hn,50),window.addEventListener("resize",Hn);let Ot="wall";function ee(){let m=Object.keys(cs).map(A=>`<button class="h3tab ${Ot===A?"on":""}" type="button" data-i3="tab" data-k="${A}">${b1[A]}</button>`).join(""),T=cs[Ot].map(([A,B])=>{let J=typeof A=="string"&&A[0]==="#";return`<button class="i3opt ${String(r.ex[Ot])===String(A)?"on":""}" type="button" data-i3="opt" data-v="${A}">${J?`<i style="background:${A}"></i>`:""}${Gr(B)}</button>`}).join("");Xs.innerHTML=`<div class="h3tabs">${m}</div><div class="i3row">${T}</div>`}function qt(m){K.mode=m,setTimeout(Hn,0),Yt(),K.tgt=null,Xs.classList.toggle("on",m==="edit"),nt(),Rs.style.display=m==="edit"?"none":"",m==="edit"?(ee(),K.distT=14,K.pitchT=.5,K.yawT=Ee.f===2?Math.PI:0):(K.distT=17,K.pitchT=.72,O())}let Qt=0;function O(){s&&(clearTimeout(Qt),Qt=setTimeout(()=>{try{n.save&&n.save(r)}catch{}},500))}function xe(m){Yt(),K.talk=m,m.state="talk",(!m.deck||!m.deck.length)&&(m.deck=m.d.lines.map(B=>({kind:B[0],text:B[1]})).sort(()=>Math.random()-.5));let T=m.deck.pop(),A=ha[T.kind]||ha.chat;xi.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${i.walk[m.d.spr]}')"></div><div class="h3nm"><b>${Gr(m.d.name)}</b><small>${Gr(m.d.role||"")}</small></div><span class="h3k" style="background:${A.c}">${A.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${T.kind==="mind"?" mind":""}">${T.kind==="mind"?"\uFF08"+Gr(T.text)+"\uFF09":"\u300C"+Gr(T.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,xi.classList.toggle("r",He(new k(m.x,1,m.z)).x<Fe().left+Fe().width/2),xi.classList.add("on")}function ke(m,T,A,B){Yt(),xi.innerHTML=`<div class="h3h"><div class="h3nm"><b>${Gr(m)}</b><small>${Gr(T||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${A}</p>${B?`<div class="h3bt">${B}</div>`:""}`,xi.classList.remove("r"),xi.classList.add("on")}function Yt(){xi.classList.remove("on");let m=K.talk;K.talk=null,m&&m.state==="talk"&&(m.state="idle",m.t=kr(1,2))}let Ve=m=>{let T=m.target.closest("[data-i3]");if(!T||!e.contains(T))return;let A=T.dataset.i3;if(A==="close")Yt();else if(A==="more"&&K.talk)xe(K.talk);else if(A==="edit")K.mode==="walk"&&qt("edit");else if(A==="done")qt("walk");else if(A==="tab")Ot=T.dataset.k,ee();else if(A==="opt"){let B=T.dataset.v;r.ex[Ot]=/^\d$/.test(B)?+B:B,X(Ee),ee(),O()}else if(A==="home")Yt(),Jt(rn.find(B=>B.kind==="home"));else if(A==="enter")Yt(),Fn(rn.find(B=>B.kind==="home"));else if(A==="shopin")Yt(),Jt(rn.find(B=>B.kind==="shop"));else if(A==="door")Fn(Ge);else if(A==="stats")try{n.stats&&n.stats()}catch{}else A==="fp"?(K.fp=!K.fp,nt(),Xi(K.fp?"\u7B2C\u4E00\u4EBA\u7A31\uFF1A\u62D6\u66F3\u770B\u56DB\u5468\uFF0C\u6416\u687F\u8D70\u8DEF":"\u7B2C\u4E09\u4EBA\u7A31\uFF1A\u62D6\u66F3\u8F49\u93E1\u982D")):A==="time"&&(H=(H+1)%R.length,nt(),it(),Xi(H?`\u9810\u89BD\uFF1A${R[H][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",Ve);function Un(m){if(!K.entering){K.entering=!0;try{n.enter&&n.enter(m||"home")}catch{K.entering=!1}}}let rn=ce.map(m=>({h:m,face:m.face,inw:m.inw,pivot:m.pivot,kind:m.own?"home":"npc",label:m.own?s?"\u{1F6AA} \u958B\u9580":"\u{1F6AA} \u62DC\u8A2A":"\u{1F514} \u6309\u9580\u9234",name:m.own?"":m.label})).concat(hl.map(m=>({s:m,face:m.face,inw:m.inw,kind:m.k==="izakaya"?"shop":"closed",label:m.k==="izakaya"?s?"\u{1F3EE} \u9032\u5E97":"\u{1F3EE} \u9032\u53BB\u901B":"\u{1F6A7} \u6E96\u5099\u4E2D",name:m.n}))),Ge=null;function Fn(m){if(!(!m||K.ent)){if(m.kind==="npc"){Xi(`\u53EE\u549A\uFF5E ${m.name}\u597D\u50CF\u6C92\u4EBA\u5728\u5BB6`);return}if(m.kind==="closed"){Xi(`${m.name}\u9084\u5728\u6E96\u5099\u4E2D\uFF0C\u4E4B\u5F8C\u5C31\u80FD\u9032\u53BB\u4E86\uFF01`);return}Yt(),K.tgt=null,K.ent={d:m,t:0,x0:Y.x,z0:Y.z}}}function Jt(m){gn(m.face.x,m.face.z-m.inw*.7,()=>Fn(m))}i.spawn==="door"&&Ee&&Ee.pivot&&(Ee.pivot.rotation.y=1.6,K.closing=Ee.pivot);function gn(m,T,A){let B=on(Y.x,Y.z,m,T);if(!B){Xi("\u8D70\u4E0D\u904E\u53BB");return}K.tgt={path:B,fn:A}}let Fe=()=>t.getBoundingClientRect(),ai=new sa,Yn=new Nt,pn=new Li(new k(0,1,0),0),oi=new k,Nn=(m,T)=>{let A=Fe();return Yn.set((m-A.left)/A.width*2-1,-((T-A.top)/A.height*2-1)),Yn},He=m=>{let T=m.clone().project(u),A=Fe();return{x:(T.x+1)/2*A.width+A.left,y:(1-T.y)/2*A.height+A.top}},Sn=new Map,hn=null,Ze=null;t.addEventListener("contextmenu",m=>m.preventDefault());let vn=null;t.addEventListener("pointerdown",m=>{K.pt=m.pointerType,m.preventDefault();try{t.setPointerCapture(m.pointerId)}catch{}if(m.pointerType==="touch"&&!vn&&K.mode==="walk"&&!K.ent){let T=Fe();if(m.clientX-T.left<T.width*.45){let A=e.getBoundingClientRect();vn={id:m.pointerId,x:m.clientX,y:m.clientY},K.tgt=null,ki.className="i3joy on",ki.style.left=m.clientX-A.left+"px",ki.style.top=m.clientY-A.top+"px",ki.firstChild.style.transform="";return}}if(Sn.set(m.pointerId,{x:m.clientX,y:m.clientY}),Sn.size===2){let[T,A]=[...Sn.values()];Ze={d:Math.hypot(T.x-A.x,T.y-A.y),dist:K.distT,ang:Math.atan2(A.y-T.y,A.x-T.x),yaw:K.yawT},hn=null;return}hn={id:m.pointerId,x:m.clientX,y:m.clientY,moved:0,yaw0:K.yawT,pit0:K.pitchT,fp0:K.fpP}}),t.addEventListener("pointermove",m=>{if(vn&&m.pointerId===vn.id){let B=m.clientX-vn.x,J=m.clientY-vn.y,ft=Math.hypot(B,J),yt=50,Et=Math.min(1,ft/yt)/Math.max(ft,1e-6);K.joy={x:B*Et,y:J*Et},ki.firstChild.style.transform=`translate(${K.joy.x*yt}px,${K.joy.y*yt}px)`;return}if(Sn.has(m.pointerId)&&Sn.set(m.pointerId,{x:m.clientX,y:m.clientY}),Ze&&Sn.size>=2){let[B,J]=[...Sn.values()];K.distT=Fi(Ze.dist*Ze.d/Math.max(20,Math.hypot(B.x-J.x,B.y-J.y)),7,40),K.yawT=Ze.yaw-(Math.atan2(J.y-B.y,J.x-B.x)-Ze.ang);return}if(!hn||hn.id!==m.pointerId)return;let T=m.clientX-hn.x,A=m.clientY-hn.y;!hn.moved&&Math.hypot(T,A)>8&&(hn.moved=1),hn.moved&&(K.yawT=hn.yaw0-T*.007,K.fp?K.fpP=Fi(hn.fp0+A*.005,-1.2,1.2):K.pitchT=Fi(hn.pit0+A*.005,.22,1.3))});let Gi=m=>{if(vn&&m.pointerId===vn.id){vn=null,K.joy=null,Hn();return}Sn.delete(m.pointerId),Sn.size<2&&(Ze=null),!(!hn||hn.id!==m.pointerId)&&(hn.moved||gr(m.clientX,m.clientY),hn=null)};t.addEventListener("pointerup",Gi),t.addEventListener("pointercancel",Gi),t.addEventListener("wheel",m=>{m.preventDefault(),K.fp||(K.distT=Fi(K.distT+Math.sign(m.deltaY)*1.6,7,40))},{passive:!1});let pr=m=>{if(!document.contains(t)||/input|textarea/i.test(m.target&&m.target.tagName||""))return;let T=m.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(T)&&(K.keys[T]=1,/^[qe]$/.test(T)||(K.tgt=null),m.preventDefault())},mr=m=>{delete K.keys[m.key.toLowerCase()]};document.addEventListener("keydown",pr),document.addEventListener("keyup",mr);function ao(m,T){let A=null,B=1e9;for(let J of gi){let ft=He(new k(J.x,0,J.z)),yt=He(new k(J.x,J.h+.2,J.z)),Et=ft.y-yt.y;if(Et<6)continue;let Ut=Math.max(Et*.38,26),bt=Math.abs(m-ft.x);if(bt<Ut&&T>yt.y-10&&T<ft.y+10){let Je=bt;Je<B&&(B=Je,A=J)}}return A}function gr(m,T){if(K.mode==="edit"||K.ent)return;let A=ao(m,T);if(A){let J=Math.hypot(A.x-Y.x,A.z-Y.z);xe(A),J>3&&gn(A.x+(Y.x-A.x)/J*1.4,A.z+(Y.z-A.z)/J*1.4);return}ai.setFromCamera(Nn(m,T),u);let B=ai.intersectObjects(l.children,!0).filter(J=>J.object.isMesh&&(J.object.userData.house||J.object.userData.shop));if(B.length){let J=B[0].object.userData;if(J.house||J.shop){let ft=rn.find(yt=>yt.h===J.house&&J.house||yt.s===J.shop&&J.shop);Yt(),ft&&gn(ft.face.x,ft.face.z-ft.inw*.8);return}if(J.house){let ft=J.house;ft.own?(ke(s?"\u6211\u7684\u5BB6":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),gn(ft.door.x,ft.door.z)):(ke(ft.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),gn(ft.door.x,ft.door.z));return}if(J.shop){let ft=J.shop;if(ft.k==="izakaya"){ke(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),gn(ft.door.x,ft.door.z);return}ke(ft.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),gn(ft.door.x,ft.door.z);return}}if(Yt(),K.pt!=="touch"&&ai.ray.intersectPlane(pn,oi)){let J=on(Y.x,Y.z,oi.x,oi.z);J&&(K.tgt={path:J})}}let Hr=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],oo=new Se,Ch=new Se,xr=new Se;function Ih(m){let T=0;for(;T<Hr.length-2&&m>=Hr[T+1][0];)T++;let A=Hr[T],B=Hr[T+1],J=Fi((m-A[0])/(B[0]-A[0]),0,1),ft=yt=>oo.set(A[yt]).clone().lerp(Ch.set(B[yt]),J);return{zen:ft(1),hor:ft(2),sunC:ft(3),sunI:ll(A[4],B[4],J),hemiI:ll(A[5],B[5],J),fog:ft(6),night:ll(A[7],B[7],J)}}let qs=-1;function da(m){let T=Ih(m),A=q.attributes.position;for(let Et=0;Et<A.count;Et++){let Ut=A.getY(Et)/300;xr.copy(T.hor).lerp(T.zen,Fi((Ut+.05)/.55,0,1));let bt=q.attributes.color.array;bt[Et*3]=xr.r,bt[Et*3+1]=xr.g,bt[Et*3+2]=xr.b}q.attributes.color.needsUpdate=!0,c.color.copy(T.fog),o.setClearColor(T.fog),xt.color.copy(T.sunC),xt.intensity=T.sunI,lt.intensity=T.hemiI,St.intensity=.2+T.night*.15,lt.color.set(T.night>.5?"#8a9aff":"#dff2ff");let B=(m-6)/12*Math.PI,J=Math.sin(B);V.position.set(Math.cos(B)*260,Math.max(-40,J*220),-60),V.material.opacity=Fi(J*3,0,1);let ft=((m+6)%24-6)/12*Math.PI;ct.position.set(-Math.cos(B)*240,Math.max(30,Math.abs(Math.sin(ft))*200),-80),ct.material.opacity=T.night,st.userData.m.opacity=T.night*.9;let yt=T.night;F.forEach(Et=>{Et.material.opacity=yt*(Et.userData.k||.75)}),M.forEach(Et=>Et.color.copy(Et.userData.day).lerp(Et.userData.night,yt)),pt.color.set("#ffffff").lerp(xr.set("#3a4a8a"),yt*.6),Pt.children.forEach(Et=>Et.children.forEach(Ut=>Ut.material.color.set("#ffffff").lerp(xr.set("#4a4a7a"),yt*.8))),K.night=yt}let Ph={get dead(){return K.dead},set dead(m){m&&qi()},dispose:qi,kind:"island",probe(){let m=T=>{let A=He(T);return{x:Math.round(A.x),y:Math.round(A.y)}};return{mode:K.mode,fp:K.fp,fpK:+K.fpK.toFixed(2),me:{x:+Y.x.toFixed(2),z:+Y.z.toFixed(2)},calls:o.info.render.calls,tris:o.info.render.triangles,yaw:+K.yaw.toFixed(2),pitch:+K.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(K.night||0).toFixed(2),card:xi.classList.contains("on")?xi.textContent:"",door:qn.classList.contains("on")?qn.textContent:"",doorXY:qn.classList.contains("on")?(()=>{let T=qn.getBoundingClientRect();return{x:Math.round(T.left+T.width/2),y:Math.round(T.top+T.height/2)}})():null,ent:!!K.ent,myDoor:m(new k(Ee.door.x,1.2,Ee.door.z-2.8*(Ee.f===2?-1:1))),myHouse:m(new k(Ee.x,2,Ee.z)),npcs:gi.map(T=>Object.assign({id:T.d.id,state:T.state},m(new k(T.x,T.h*.5,T.z))))}},px(m,T,A){let B=He(new k(m,T,A));return{x:Math.round(B.x),y:Math.round(B.y)}},teleport(m,T){Y.x=m,Y.z=T,K.cam.set(m,1,T)},setYaw(m){K.yaw=K.yawT=m},setPitch(m){K.pitch=K.pitchT=m},setDist(m){K.dist=K.distT=m},setHour(m){R[0][0]=m,qs=-1}};function qi(){if(!K.dead){if(K.dead=!0,cancelAnimationFrame(K.raf),clearTimeout(Qt),s)try{n.save&&n.save(r,!0)}catch{}document.removeEventListener("keydown",pr),document.removeEventListener("keyup",mr),e.removeEventListener("click",Ve),window.removeEventListener("resize",Hn),ur.forEach(m=>m.remove()),l.traverse(m=>{m.geometry&&m.geometry.dispose(),(m.material?Array.isArray(m.material)?m.material:[m.material]:[]).forEach(A=>{A.map&&A.map.dispose(),A.dispose()})});try{o.dispose(),o.forceContextLoss()}catch{}}}let mn=0,ns=0,is=0,ss=1,_r=1,Wr=0,pa=0,yr=new k,Yi=new k,fs=new k,Cs=new k,ma=new k,pl=new k;function Lh(){let m=t.getBoundingClientRect(),T=Math.max(1,t.clientWidth),A=Math.max(1,t.clientHeight),B=Math.min(2,window.devicePixelRatio||1),J=Math.round(Fi(1.75-((m.height||A)-380)/440*.6,1.15,1.75)*20)/20;J!==zt&&(zt=J,Ct.forEach(ft=>{ft.h=ft.h0*zt,ft.w=ft.h*ft.ar})),!(T===mn&&A===ns&&B===is)&&(mn=T,ns=A,is=B,ss=Fi(m.width*B/T,.5,2),ss=Math.min(ss,Math.sqrt(22e5/(T*A))),_r=Math.max(Math.min(ss,.9),ss*.8),o.setPixelRatio(ss),o.setSize(T,A,!1),u.aspect=T/A,u.updateProjectionMatrix())}function rs(m){if(K.dead)return;if(!document.contains(t)){qi();return}K.raf=requestAnimationFrame(rs);let T=Math.min(.1,(m-K.last)/1e3);K.last=m,K.t+=T;let A=K.t;if(Lh(),Wr+=T,pa++,Wr>1.5){let rt=Wr/pa>.03;rt&&o.shadowMap.enabled?(o.shadowMap.enabled=!1,l.traverse(Kt=>{Kt.material&&(Array.isArray(Kt.material)?Kt.material:[Kt.material]).forEach(fe=>{fe.needsUpdate=!0})})):rt&&ss>_r+.01&&(ss=Math.max(_r,ss*.9),o.setPixelRatio(ss),o.setSize(mn,ns,!1)),Wr=0,pa=0}let B=ot();Math.abs(B-qs)>.02&&(da(B),qs=B,it());let J=K.keys;J.q&&(K.yawT+=T*1.8),J.e&&(K.yawT-=T*1.8),K.yaw+=(K.yawT-K.yaw)*Math.min(1,T*9),K.pitch+=(K.pitchT-K.pitch)*Math.min(1,T*9),K.dist+=(K.distT-K.dist)*Math.min(1,T*6);let ft=Math.sin(K.yaw),yt=Math.cos(K.yaw);if(yr.set(-ft,0,-yt),Yi.set(yt,0,-ft),Y.moving=!1,K.mode==="walk"&&!K.ent){let rt=0,Kt=0,fe=1e9,en=(J.arrowright||J.d?1:0)-(J.arrowleft||J.a?1:0),wn=(J.arrowup||J.w?1:0)-(J.arrowdown||J.s?1:0);if(K.joy&&Math.hypot(K.joy.x,K.joy.y)>.15)rt=Yi.x*K.joy.x-yr.x*K.joy.y,Kt=Yi.z*K.joy.x-yr.z*K.joy.y,fe=5*T*Math.min(1,Math.hypot(K.joy.x,K.joy.y));else if(en||wn)rt=Yi.x*en+yr.x*wn,Kt=Yi.z*en+yr.z*wn;else if(K.tgt){let Rn=K.tgt.path[0];if(Rn){let un=Rn[0]-Y.x,Pn=Rn[1]-Y.z,Wn=Math.hypot(un,Pn);Wn<.1?K.tgt.path.shift():(rt=un,Kt=Pn,fe=Wn)}else{let un=K.tgt.fn;K.tgt=null,un&&un()}}let an=Math.hypot(rt,Kt);if(an>.01){let Rn=Math.min(5*T,fe),un=rt/an*Rn,Pn=Kt/an*Rn,Wn=!1;if(!Dt(Y.x+un,Y.z+Pn,.3))Y.x+=un,Y.z+=Pn,Wn=!0;else if(!Dt(Y.x+un,Y.z,.3))Y.x+=un,Wn=!0;else if(!Dt(Y.x,Y.z+Pn,.3))Y.z+=Pn,Wn=!0;else for(let $n of[.6,-.6,1.2,-1.2]){let _i=Math.cos($n),yi=Math.sin($n),li=(un*_i-Pn*yi)*.8,br=(un*yi+Pn*_i)*.8;if(!Dt(Y.x+li,Y.z+br,.3)){Y.x+=li,Y.z+=br,Wn=!0;break}}if(Wn){K.mvz=Pn/Math.max(1e-6,Math.hypot(un,Pn)),Y.moving=!0,Y.ph+=T*10;let $n=rt/an*Yi.x+Kt/an*Yi.z;Math.abs($n)>.2&&(Y.face=$n>0?1:-1)}else if(K.tgt&&(K.tgt.stuck=(K.tgt.stuck||0)+T,K.tgt.stuck>.5)){let $n=K.tgt.fn;K.tgt=null,$n&&$n()}K.talk&&Math.hypot(K.talk.x-Y.x,K.talk.z-Y.z)>9&&Yt()}}if(Ge=null,K.mode==="walk"&&!K.ent){let rt=2.6;for(let Kt of rn){let fe=Math.hypot(Y.x-Kt.face.x,Y.z-Kt.face.z);fe<rt&&(rt=fe,Ge=Kt)}Ge&&(Ge.kind==="home"||Ge.kind==="shop")&&rt<.8&&Y.moving&&(K.mvz||0)*Ge.inw>.5&&Fn(Ge)}if(Ge&&!K.ent){let rt=Ge,Kt=He(new k(rt.face.x,rt.s?3.1:2.95,rt.face.z+rt.inw*.5)),fe=Fe();qn.textContent=rt.label,qn.classList.toggle("off",rt.kind==="npc"||rt.kind==="closed"),qn.style.left=Kt.x-fe.left+"px",qn.style.top=Kt.y-fe.top+"px",qn.classList.add("on")}else qn.classList.remove("on");if(K.ent){let rt=K.ent,Kt=rt.d;rt.t+=T,Kt.pivot&&(Kt.pivot.rotation.y=Math.min(1,rt.t/.45)*1.6);let fe=Fi((rt.t-.2)/.75,0,1),en=Kt.face.x,wn=Kt.face.z+Kt.inw*1.1;Y.x=ll(rt.x0,en,fe),Y.z=ll(rt.z0,wn,fe),Y.moving=fe>0&&fe<1,Y.moving&&(Y.ph+=T*10),Y.mat.opacity=1-Fi((rt.t-.55)/.45,0,1),Y.tag&&(Y.tag.material.opacity=Y.mat.opacity),rt.t>1.05&&!rt.done&&(rt.done=1,Un(Kt.kind))}K.closing&&(K.closing.rotation.y=Math.max(0,K.closing.rotation.y-T*2.4),K.closing.rotation.y<=0&&(K.closing=null)),Y.y=0;for(let rt of ce)if(+(rt.own?r.ex:rt.ex).porch&&Math.abs(Y.x-rt.x)<Rt/2+.3){let Kt=(Y.z-rt.z)*(rt.f===2?-1:1);Kt>1.42&&Kt<3.15&&(Y.y=.3)}for(let rt of gi){if(rt.moving=!1,rt.state==="talk"){rt.face=(Y.x-rt.x)*Yi.x+(Y.z-rt.z)*Yi.z>0?1:-1;continue}if(rt.state==="idle"){rt.t-=T,rt.t<=0&&As(rt);continue}let Kt=rt.tx-rt.x,fe=rt.tz-rt.z,en=Math.hypot(Kt,fe);if(en<.1){rt.state="idle",rt.t=Math.random()<.3?kr(3,8):kr(.2,1);continue}let wn=Math.min(en,rt.sp*T);rt.x+=Kt/en*wn,rt.z+=fe/en*wn,rt.moving=!0,rt.ph+=T*(4+rt.sp*3);let an=Kt*Yi.x+fe*Yi.z;Math.abs(an)>.05&&(rt.face=an>0?1:-1)}let Et=Y.x,Ut=Y.z;K.mode==="edit"&&(Et=Ee.x,Ut=Ee.z+(Ee.f===2?-1:1)*3.2),K.cam.x+=(Et-K.cam.x)*Math.min(1,T*8),K.cam.z+=(Ut-K.cam.z)*Math.min(1,T*8),K.cam.y+=((K.mode==="edit"?1.8:1.1)-K.cam.y)*Math.min(1,T*4);let bt=mn/ns,Je=K.dist*(bt<1.4?1.4/bt:1);fs.set(K.cam.x+ft*Math.cos(K.pitch)*Je,K.cam.y+Math.sin(K.pitch)*Je,K.cam.z+yt*Math.cos(K.pitch)*Je),fs.y<.8&&(fs.y=.8),K.fpK+=((K.fp&&K.mode==="walk"&&!K.ent?1:0)-K.fpK)*Math.min(1,T*5);let In=K.fpK,Mi=Math.cos(K.fpP),Si=Math.sin(K.fpP);Cs.set(K.cam.x,Y.y+1.55,K.cam.z),ma.set(K.cam.x,K.cam.y+.4,K.cam.z),pl.set(Cs.x-ft*Mi*10,Cs.y+Si*10,Cs.z-yt*Mi*10),fs.lerp(Cs,In),ma.lerp(pl,In),Y.grp.visible=In<.5,Y.sh.visible=In<.5,Y.tag&&(Y.tag.visible=In<.5),u.position.copy(fs),u.lookAt(ma),W.position.copy(fs),xt.position.set(K.cam.x+30,60,K.cam.z+22),xt.target.position.set(K.cam.x,0,K.cam.z),K.night>.6&&xt.position.set(K.cam.x-25,50,K.cam.z+30);let vr=Math.atan2(fs.x-K.cam.x,fs.z-K.cam.z);for(let rt of Ct){let Kt=rt.w,fe=rt.h,en=rt.moving,wn=Math.sin(rt.ph),an=en?Math.abs(wn)*.06:0,Rn=en?wn*.06:Math.sin(A*1.6+rt.ph)*.01,un=en?1+Math.cos(rt.ph*2)*.025:1+Math.sin(A*1.6+rt.ph)*.008;rt.grp.position.set(rt.x,(rt.y||0)+an,rt.z),rt.m.rotation.set(0,vr,Rn*rt.face),rt.m.scale.set(Kt*rt.face*(2-un),fe*un,1),rt.sh.position.set(rt.x,(rt.y||0)+.07,rt.z),rt.sh.scale.set(Kt*.7,Kt*.4,1),rt.tag&&rt.tag.position.set(rt.x,(rt.y||0)+fe+.35,rt.z),rt.bub&&(rt.bub.visible=rt!==K.talk,rt.bub.position.set(rt.x,fe+.5+Math.sin(A*2.3+rt.ph)*.06,rt.z))}le.offset.set(A*.004,A*.006),Be.forEach((rt,Kt)=>{Kt===0?rt.rotation.z=A*.3:rt.scale.y=1+Math.sin(A*6)*.08}),Pt.children.forEach(rt=>{rt.userData.a+=T*.004,rt.position.x=Math.cos(rt.userData.a)*rt.userData.R,rt.position.z=Math.sin(rt.userData.a)*rt.userData.R,rt.lookAt(0,rt.position.y,0)});let At=Pt.userData.boat;At&&(At.position.y=-.2+Math.sin(A*1.2)*.08,At.rotation.z=Math.sin(A*.9)*.04),o.render(l,u)}return K.raf=requestAnimationFrame(rs),Ph}var Ci=(i,t)=>i+Math.random()*(t-i),hs=(i,t,e)=>Math.max(t,Math.min(e,i));var ws=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Cn=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Sf=new Uint8Array(256).map((i,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),cr=i=>"\xA5"+Math.round(i).toLocaleString("en-US"),dl=[[10,8,0],[12,9,5e4],[14,10,15e4],[16,12,4e5]],ri=3.1,ge=10,wt=8,Oi=4,Bi=6,zi=5,Ts,Es,Tf,Ef,Af,em,Ah,mi,Rh,fl;function nm(i){let t=dl[hs(i|0,0,dl.length-1)];ge=t[0],wt=t[1],Oi=ge/2-1,Bi=ge/2+1,zi=ge/2,Ts=-10,Es=ge+10,Tf=wt+9,Ef=-4,Af=ge+4,em=wt+1,Ah=wt+4,mi={x:zi+2.3,z:wt+1.4},Rh=Math.floor(mi.x),fl=new Set;for(let e=wt;e<Ah+1;e++)for(let n=Oi;n<Bi;n++)fl.add(n+","+e);fl.add(Rh+","+(wt+1))}nm(0);var If=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function ul(i){let t=0,e={};for(let[n]of i.it||[]){let s=De[n];s&&(e[n]=(e[n]||0)+1,t+=e[n]<=2?s.c:s.c*.4)}return i.fl&&i.fl!=="wood"&&(t+=6),i.wa&&i.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function Rf(i){let t=0;return If.forEach((e,n)=>{i>=e[0]&&(t=n)}),t}var Cf=i=>Math.min(8e4,3e3+i*400);function im(i){return{v:1,name:i||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function T1(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function E1(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var wf={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},A1=["daruma","maneki","beer","vase","pine","sake"],sm=`
.h3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.h3b{min-width:92px;min-height:76px;border-radius:20px;border:3px solid #2a1810;background:#fff6e0;color:#3a1e0c;font-weight:900;font-size:19px;line-height:1.15;padding:6px 10px;box-shadow:0 5px 0 #0007;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.h3b i{font-style:normal;font-size:30px;line-height:1}
.h3b:active{transform:translateY(3px);box-shadow:0 2px 0 #0007}
.h3b.hot{background:#ffd27a}
.h3b:disabled{opacity:.45}
.h3info{position:absolute;left:max(12px,env(safe-area-inset-left));top:92px;background:#2a1810d9;color:#fff3d6;border:2px solid #ffd27a;border-radius:16px;padding:8px 14px;font-size:16px;line-height:1.35;z-index:3;pointer-events:none;max-width:44%}
.h3info b{font-size:20px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.h3info .h3st{color:#ffd34d;letter-spacing:1px}
.h3cam{position:absolute;left:max(14px,env(safe-area-inset-left));bottom:26px;display:flex;gap:14px;z-index:3}
.h3cam button{width:80px;height:80px;border-radius:50%;border:4px solid #ffffffcc;background:#2a1810cc;color:#fff3d6;font-size:40px;line-height:1;padding:0;touch-action:none;user-select:none;-webkit-user-select:none}
.h3cam button:active{background:#6b3a1ab3}
.h3hint{position:absolute;left:50%;bottom:30px;transform:translateX(-50%);background:#2a1810d9;color:#fff3d6;border:2px solid #ffd27a;border-radius:999px;padding:7px 18px;font-size:16px;font-weight:700;pointer-events:none;opacity:0;transition:opacity .25s;white-space:nowrap;z-index:3}
.h3hint.on{opacity:1}
.h3toast{position:absolute;left:50%;top:150px;transform:translateX(-50%);background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:14px;padding:8px 18px;font-size:18px;font-weight:800;box-shadow:0 5px 0 #0006;opacity:0;transition:opacity .25s;pointer-events:none;z-index:9;white-space:nowrap}
.h3toast.on{opacity:1}
.h3j{position:absolute;width:110px;height:110px;margin:-55px 0 0 -55px;border-radius:50%;background:#ffffff1f;border:3px solid #ffffff99;pointer-events:none;display:none;z-index:2}
.h3j i{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#ffffffd9}
.h3card{position:absolute;bottom:26px;left:12px;width:min(470px,calc(48% - 6px));background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:16px;box-shadow:0 6px 0 #0006;padding:8px 10px;display:none;font-size:16px;line-height:1.45;z-index:6}
.h3card.r{left:auto;right:12px}
.h3card.on{display:block;animation:h3pop .16s ease-out}
@keyframes h3pop{from{transform:scale(.94);opacity:0}to{transform:scale(1);opacity:1}}
.h3h{display:flex;align-items:center;gap:10px;margin-bottom:6px}
.h3av{flex:none;width:46px;height:46px;border-radius:50%;border:2px solid #2a1810;background-color:#e9d3a4;background-repeat:no-repeat;background-size:230% auto;background-position:50% 3%}
.h3nm{flex:1;min-width:0;line-height:1.25}.h3nm b{font-size:17px;display:block}.h3nm small{font-size:12px;opacity:.7}
.h3k{flex:none;border:2px solid #2a1810;border-radius:999px;padding:1px 8px;font-size:12px;font-weight:700;white-space:nowrap}
.h3x{flex:none;width:68px;height:68px;border-radius:50%;border:4px solid #2a1810;background:#fff;font-size:40px;line-height:1;padding:0;color:#3a1e0c}
.h3t{font-size:17px}.h3t.mind{font-style:italic;color:#4a3a78}
.h3bt{display:flex;justify-content:flex-end;gap:10px;margin-top:6px;flex-wrap:wrap}
.h3n{border:2px solid #2a1810;border-radius:999px;background:#ffd27a;color:#3a1e0c;font-weight:800;font-size:20px;padding:0 26px;min-height:68px}
.h3n.alt{background:#fff}
.h3n:disabled{opacity:.45}
.h3bp{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(#2a1810e6,#1a0e08f2);border-top:3px solid #ffd27a;z-index:5;padding:6px max(10px,env(safe-area-inset-right)) 10px max(10px,env(safe-area-inset-left));display:none}
.h3bp.on{display:block}
.h3tabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:6px}
.h3tabs::-webkit-scrollbar{display:none}
.h3tab{flex:none;border:2px solid #ffd27a;background:#3a2214;color:#fff3d6;border-radius:999px;font-size:16px;font-weight:800;padding:0 16px;min-height:52px}
.h3tab.on{background:#ffd27a;color:#3a1e0c}
.h3row{display:flex;gap:8px;overflow-x:auto;scrollbar-width:thin;padding:2px 2px 4px}
.h3it{flex:none;width:112px;border:3px solid #2a1810;border-radius:14px;background:#fff6e0;color:#3a1e0c;padding:4px 4px 6px;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:13px;font-weight:800;line-height:1.15;position:relative}
.h3it img,.h3it .ph{width:84px;height:84px;object-fit:contain;border-radius:10px;background:radial-gradient(#fff,#f0dcb0)}
.h3it .pr{font-size:13px;color:#8a3a14}
.h3it .ow{position:absolute;top:2px;right:4px;background:#2f8a4a;color:#fff;border-radius:999px;padding:0 7px;font-size:13px}
.h3it.cur{outline:4px solid #ffb02a}
.h3it.no{opacity:.55}
.h3sel{position:absolute;right:max(14px,env(safe-area-inset-right));bottom:214px;display:none;gap:10px;z-index:6}
.h3sel.on{display:flex}
.h3top{position:absolute;left:50%;top:96px;transform:translateX(-50%);display:none;z-index:4;background:#2a1810d9;border:2px solid #ffd27a;border-radius:999px;padding:6px 16px;color:#fff3d6;font-weight:800;font-size:15px;white-space:nowrap;pointer-events:none;max-width:56%;overflow:hidden;text-overflow:ellipsis}
.h3top.on{display:flex}
.h3pan{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(620px,92%);max-height:84%;overflow:auto;background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:18px;box-shadow:0 8px 0 #0007;padding:12px 16px;z-index:8;display:none;font-size:16px}
.h3pan.on{display:block;animation:h3pop .16s ease-out}
.h3pan h3{margin:0 0 8px;font-size:22px}
.h3pan .msg{border-bottom:1px dashed #c8a878;padding:6px 2px}
.h3pan .msg b{color:#8a3a14}.h3pan .msg small{opacity:.6;margin-left:6px}
.h3pan textarea,.h3pan input{width:100%;box-sizing:border-box;font-size:17px;border:2px solid #2a1810;border-radius:10px;padding:8px;font-family:inherit;background:#fff}
.h3pan .gifts{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
.h3pan .gifts button{border:3px solid #2a1810;border-radius:12px;background:#fff;min-height:56px;padding:0 12px;font-size:15px;font-weight:800}
.h3pan .gifts button.on{background:#ffd27a}
@media (max-height:520px){
.h3hud{top:64px;gap:8px}.h3b{min-width:70px;min-height:56px;font-size:14px;border-radius:15px;padding:3px 8px;border-width:2px}.h3b i{font-size:21px}
.h3info{top:64px;font-size:12px;padding:4px 10px;border-radius:12px}.h3info b{font-size:15px}
.h3top{top:64px;font-size:13px;padding:4px 12px}
.h3cam{bottom:12px;gap:10px}.h3cam button{width:58px;height:58px;font-size:28px;border-width:3px}
.h3bp{padding-top:4px;padding-bottom:5px}.h3tab{min-height:44px;font-size:14px;padding:0 11px}.h3tabs{padding-bottom:4px;gap:5px}
.h3it{width:82px;font-size:11.5px;padding:3px 3px 4px;border-width:2px}.h3it img,.h3it .ph{width:54px;height:54px}.h3it .pr{font-size:11.5px}
.h3card{bottom:10px;font-size:14px;padding:6px 8px;width:min(430px,calc(52% - 6px))}.h3x{width:48px;height:48px;font-size:28px;border-width:3px}.h3n{min-height:48px;font-size:16px;padding:0 16px}.h3t{font-size:14.5px}.h3av{width:36px;height:36px}.h3h{margin-bottom:2px}
.h3pan{max-height:88%;padding:8px 12px;font-size:14px}.h3pan h3{font-size:17px;margin-bottom:4px}.h3pan textarea,.h3pan input{font-size:16px;padding:6px}.h3pan .gifts button{min-height:46px;font-size:13px}
.h3toast{top:70px;font-size:15px}
}
.home .modal.h3m::after{display:none}
.h3door{position:absolute;transform:translate(-50%,-100%);z-index:4;border:3px solid #3a2a1a;border-radius:999px;background:#fff8ea;color:#3a2a1a;font-weight:900;font-size:17px;min-height:50px;padding:0 18px;box-shadow:0 4px 0 #0004;display:none;white-space:nowrap}
.h3door.on{display:block}
.h3door:after{content:'';position:absolute;left:50%;bottom:-11px;margin-left:-8px;border:8px solid transparent;border-top-color:#3a2a1a}
.h3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff3d6;font-size:18px;background:#140f2e;z-index:9}
`,R1=sm;function C1(i){nm(i.data&&i.data.sz);let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.kind==="home",a=!!i.island,o=i.data||im();if(o.it=(o.it||[]).filter(h=>De[h[0]]),o.inv=o.inv||{},o.fo=o.fo||{wood:1},o.wo=o.wo||{tsuchi:1},o.gc=o.gc||{},!document.getElementById("h3css")){let h=document.createElement("style");h.id="h3css",h.textContent=sm,document.head.appendChild(h)}let l=new eo({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});l.setClearColor(1709366,1);let c=new Ar;c.fog=new Zr(3811400,26,80);let u=new ti(40,2,.2,500),p=new ea,d=(h,x)=>p.load(h,b=>{b.colorSpace=jn,b.anisotropy=4,x&&x(b)}),f=new pi(250,24,16);{let h=[],x=f.attributes.position,b=new Se("#121032"),v=new Se("#7a4058"),P=new Se("#3a2350"),D=new Se;for(let $=0;$<x.count;$++){let j=x.getY($)/250;j>.25?D.copy(P).lerp(b,hs((j-.25)/.55,0,1)):D.copy(v).lerp(P,hs((j+.05)/.3,0,1)),h.push(D.r,D.g,D.b)}f.setAttribute("color",new Pe(h,3))}let g=new mt(f,new je({vertexColors:!0,side:ni,fog:!1,depthWrite:!1}));g.renderOrder=-10,c.add(g);{let h=[],x=ws(11);for(let v=0;v<300;v++){let P=x()*Math.PI*2,D=.2+x()*1.2,$=230;h.push(Math.cos(P)*Math.cos(D)*$,Math.sin(D)*$,Math.sin(P)*Math.cos(D)*$)}let b=new Dn;b.setAttribute("position",new Pe(h,3)),g.add(new Wa(b,new Kr({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let h=be(128,128,b=>{let v=b.createRadialGradient(64,64,20,64,64,64);v.addColorStop(0,"rgba(255,246,214,1)"),v.addColorStop(.5,"rgba(255,240,200,1)"),v.addColorStop(.52,"rgba(255,230,180,.25)"),v.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=v,b.fillRect(0,0,128,128)}),x=new fi(new ei({map:h,fog:!1,depthWrite:!1}));x.scale.set(40,40,1),x.position.set(-90,120,-170),g.add(x)}let I=new Lr(12103408,5914696,1.15);c.add(I);let _=(()=>{let h=new Date;return i.hour!=null?i.hour:h.getHours()+h.getMinutes()/60})(),y=_<5||_>=19.5?1:_<6.5?(6.5-_)/1.5:_>17.5?(_-17.5)/2:0,S=new Dr(16769208,.7);S.position.set(-6,12,10),c.add(S);let L=new ia(16756832,14,13,1.3);L.position.set(ge*.3,2.7,wt*.45),c.add(L);let E=new ia(16756832,14,13,1.3);E.position.set(ge*.72,2.7,wt*.55),c.add(E);let F=new ia(16752720,10,9,1.4);F.position.set(zi,2.4,wt+1.4),c.add(F);let N=be(64,64,h=>{let x=h.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(0,0,0,.7)"),x.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=x,h.fillRect(0,0,64,64)}),M=(h,x,b)=>{let v=h.clone();return v.wrapS=v.wrapT=Ns,v.repeat.set(x,b),v.needsUpdate=!0,v};function C(h,x,b,v,P,D,$,j){let tt=new mt(new bn(h,x,b),v);return tt.position.set(P,D,$),(j||c).add(tt),tt}function q(h,x,b,v,P,D,$){let j=new fi(new ei({map:ua,blending:_s,transparent:!0,depthWrite:!1,opacity:P}));return $&&j.material.color.set($),j.scale.set(v,v,1),j.position.set(h,x,b),(D||c).add(j),j}let z={wood:()=>be(256,256,(h,x,b)=>{let v=ws(4);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(60,30,10,.35)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<6;$++)h.fillStyle="rgba(90,50,20,.12)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),dark:()=>be(256,256,(h,x,b)=>{let v=ws(8);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(0,0,0,.4)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<5;$++)h.fillStyle="rgba(255,220,180,.05)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),tatami:()=>be(256,256,(h,x,b)=>{for(let v=0;v<2;v++){let P=v*128;h.fillStyle="#c4c078",h.fillRect(P,0,128,b);for(let D=0;D<b;D+=3)h.fillStyle=D%6?"#b8b46c":"#cfcb84",h.fillRect(P,D,128,1);h.fillStyle="#2a3a2a",h.fillRect(P,0,6,b),h.fillRect(P+122,0,6,b)}}),stone:()=>be(256,256,(h,x,b)=>{h.fillStyle="#5a5250",h.fillRect(0,0,x,b);let v=ws(6);for(let P=0;P<4;P++)for(let D=0;D<4;D++){let $=v()*18|0;h.fillStyle=`rgb(${120+$},${112+$},${104+$})`,h.fillRect(D*64+3+P%2*8,P*64+3,58,58)}}),light:()=>be(256,256,(h,x,b)=>{let v=ws(12);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(120,80,40,.25)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<6;$++)h.fillStyle="rgba(160,110,60,.1)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),carpetf:()=>be(256,256,(h,x,b)=>{h.fillStyle="#e8dcc4",h.fillRect(0,0,x,b);let v=ws(14);for(let P=0;P<3e3;P++)h.fillStyle=v()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",h.fillRect(v()*x,v()*b,2,2)}),check:()=>be(256,256,(h,x,b)=>{for(let v=0;v<4;v++)for(let P=0;P<4;P++)h.fillStyle=(P+v)%2?"#2a3a36":"#d8c8a0",h.fillRect(P*64,v*64,64,64);h.strokeStyle="rgba(0,0,0,.2)",h.lineWidth=2;for(let v=0;v<=4;v++)h.beginPath(),h.moveTo(v*64,0),h.lineTo(v*64,b),h.moveTo(0,v*64),h.lineTo(x,v*64),h.stroke()})};function W(h,x){let v=Math.round(x*64),P=Math.round(ri*64);return be(v,P,D=>{let $=ws(x*7|0);if(h==="plank")for(let tt=0;tt<v;tt+=22){let It=$();D.fillStyle=`hsl(28,${36+It*8}%,${40+It*8}%)`,D.fillRect(tt,0,22,P),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(tt,0,2,P)}else if(h==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,v,P);for(let tt=0;tt<300;tt++)D.fillStyle=$()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect($()*v,$()*P,8,8);D.fillStyle="#5a2a14";for(let tt=0;tt<v;tt+=128)D.fillRect(tt,0,8,P)}else if(h==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,v,P),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let tt=0;tt<P;tt+=24)for(let It=tt/24%2*12;It<v;It+=24)D.beginPath(),D.arc(It,tt,9,Math.PI,0),D.stroke()}else if(h==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/900;tt++){let It=$()*v,We=$()*P;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][tt%3];for(let we=0;we<5;we++){let he=we/5*Math.PI*2;D.beginPath(),D.ellipse(It+Math.cos(he)*4,We+Math.sin(he)*4,3.5,2,he,0,7),D.fill()}}}else if(h==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/80;tt++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect($()*v,$()*P,2,2)}else if(h==="stripe")for(let tt=0;tt<v;tt+=24)D.fillStyle=tt/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(tt,0,24,P);else if(h==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,v,P);for(let tt=12;tt<P;tt+=30)for(let It=tt/30%2*16;It<v;It+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(It+tt)%3];for(let We=0;We<5;We++){let we=We/5*Math.PI*2;D.beginPath(),D.arc(It+Math.cos(we)*4,tt+Math.sin(we)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(It,tt,2,0,7),D.fill()}}else if(h==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/70;tt++)D.fillStyle=$()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect($()*v,$()*P,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/60;tt++)D.fillStyle=$()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect($()*v,$()*P,3,3);D.fillStyle="#6b3f1f";for(let tt=0;tt<v;tt+=64*2.5)D.fillRect(tt,0,10,P)}let j=P-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,j,v,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let tt=0;tt<v;tt+=28)D.fillRect(tt,j,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,j-6,v,8),D.fillRect(0,0,v,10)})}let Q=c.children.length,ht=be(256,256,(h,x,b)=>{h.fillStyle="#4a4246",h.fillRect(0,0,x,b);let v=ws(3);for(let P=0;P<4;P++)for(let D=0;D<4;D++){let $=(v()*16|0)-8;h.fillStyle=`rgb(${96+$},${86+$},${84+$})`,h.fillRect(D*64+2,P*64+2,60,60)}}),V=be(256,256,(h,x,b)=>{h.fillStyle="#2c2830",h.fillRect(0,0,x,b);let v=ws(5);for(let P=0;P<700;P++){let D=34+(v()*22|0);h.fillStyle=`rgb(${D},${D-3},${D+4})`,h.fillRect(v()*x,v()*b,2,2)}});{let h=new mt(new Qe(600,600),te("#1c1826"));h.rotation.x=-Math.PI/2,h.position.y=-.04,c.add(h)}{let h=Es-Ts+30,x=(Ts+Es)/2,b=new mt(new Qe(h,6.2),te("#ffffff",{map:M(ht,h/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(x,.005,wt+3.1),c.add(b);let v=new mt(new Qe(h,6),te("#ffffff",{map:M(V,h/6,1)}));v.rotation.x=-Math.PI/2,v.position.set(x,0,wt+9.2),c.add(v);for(let D=Ts-14;D<Es+14;D+=3.4)C(1.7,.02,.14,_n("#cfc8b4"),D,.02,wt+9.2);C(h,.16,.2,te("#7a6e66"),x,.08,wt+6.15);let P=new mt(new Qe(h,5),te("#ffffff",{map:M(ht,h/3,5/3)}));P.rotation.x=-Math.PI/2,P.position.set(x,.005,wt+14.7),c.add(P)}let at=c.children.length,ct=new xn({color:"#ffffff"}),st=new mt(new Qe(ge,wt),ct);st.rotation.x=-Math.PI/2,st.position.set(ge/2,.02,wt/2),c.add(st);function Pt(h){ct.map&&ct.map.dispose();let x=(z[h]||z.wood)();x.wrapS=x.wrapT=Ns,x.repeat.set(ge/2,wt/2),ct.map=x,ct.needsUpdate=!0}C(ge+.4,.12,wt+.4,te("#2a1810"),ge/2,-.075,wt/2);let lt={back:new xn,left:new xn,right:new xn,front:new xn},St=be(256,200,(h,x,b)=>{h.fillStyle="#5a3a24",h.fillRect(0,0,x,b);for(let v=0;v<x;v+=16)h.fillStyle=v%32?"#4a2e1c":"#6a4630",h.fillRect(v,0,14,b);h.fillStyle="#2a1810",h.fillRect(0,b-40,x,40)}),xt=new xn({map:M(St,3,1)}),Ht=te("#3a2214"),le={};function pt(h,x,b,v,P,D){let $=new ve;$.position.set(v,0,P),c.add($);let j=new mt(new bn(x,ri,b),D);return j.position.y=ri/2,$.add(j),le[h]=le[h]||[],le[h].push($),$}pt("back",ge+.4,.2,ge/2,-.1,[Ht,Ht,Ht,Ht,lt.back,xt]),pt("left",.2,wt,-.1,wt/2,[lt.left,xt,Ht,Ht,Ht,Ht]),pt("right",.2,wt,ge+.1,wt/2,[xt,lt.right,Ht,Ht,Ht,Ht]);let Zt=be(640,200,(h,x,b)=>{h.fillStyle="#6a4228",h.fillRect(0,0,x,b);for(let P=0;P<x;P+=14)h.fillStyle=P%28?"#5a3620":"#74482c",h.fillRect(P,0,12,b);let v=P=>{h.fillStyle="#ffd98a",h.fillRect(P,56,128,70),h.strokeStyle="#2a1408",h.lineWidth=6,h.strokeRect(P,56,128,70),h.lineWidth=3;for(let D=1;D<4;D++)h.beginPath(),h.moveTo(P+D*32,56),h.lineTo(P+D*32,126),h.stroke();h.beginPath(),h.moveTo(P,91),h.lineTo(P+128,91),h.stroke()};v(64),v(448),h.fillStyle="#2a1810",h.fillRect(0,b-40,x,40)}),ie=new je({map:Zt}),_e=(h,x)=>{let b=new je({map:Zt.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(x-h,1),b.map.offset.set(h,0),b};pt("front",Oi+.2,.2,(Oi-.2)/2,wt+.1,[Ht,Ht,Ht,Ht,_e(0,(Oi+.2)/(ge+.4)),lt.front]),pt("front",ge-Bi+.2,.2,(Bi+ge+.2)/2,wt+.1,[Ht,Ht,Ht,Ht,_e((Bi+.2)/(ge+.4),1),lt.front]);{let h=new ve;h.position.set(zi,0,wt+.1),c.add(h),C(Bi-Oi,ri-2.35,.2,te("#4a2a14"),0,2.35+(ri-2.35)/2,0,h),le.front.push(h)}function jt(h){let x={back:ge+.4,left:wt,right:wt,front:ge+.4};for(let b in lt){let v=lt[b];v.map&&v.map.dispose(),v.map=W(h,x[b]),v.needsUpdate=!0}}let re=new ve;c.add(re),le.front.push(re);let Xe=te("#3a2214");C(.22,2.45,.34,Xe,Oi+.05,1.22,wt+.14,re),C(.22,2.45,.34,Xe,Bi-.05,1.22,wt+.14,re),C(Bi-Oi+.4,.24,.38,Xe,zi,2.42,wt+.14,re);let ye=new ve;ye.position.set(zi,2.32,wt+.3),re.add(ye);let Be=be(256,140,(h,x,b)=>{for(let v=0;v<3;v++){let P=4+v*84;h.fillStyle="#23315c",h.fillRect(P,0,80,b-6),h.fillStyle="rgba(0,0,0,.22)",h.fillRect(P,b-16,80,10)}h.fillStyle="#f3e6c8",h.textAlign="center",h.textBaseline="middle",h.font=`900 50px ${Zn}`,["\u55B6","\u696D","\u4E2D"].forEach((v,P)=>h.fillText(v,44+P*84,56))}),qe=new mt(new Qe(1.95,1.05),new je({map:Be,transparent:!0,side:Vn,alphaTest:.05}));qe.position.y=-.52,ye.add(qe);let Mt=document.createElement("canvas");Mt.width=640,Mt.height=140;let kt=new jr(Mt);kt.colorSpace=jn,kt.anisotropy=4;function Rt(){let h=Mt.getContext("2d"),x=640,b=140;h.clearRect(0,0,x,b),h.fillStyle="#f3e2bd",h.strokeStyle="#2a1810",h.lineWidth=10,Br(h,6,6,x-12,b-12,16),h.fill(),h.stroke(),h.fillStyle="#3a1e0c",h.textAlign="center",h.textBaseline="middle";let v=72,P=o.name||"";for(h.font=`900 ${v}px ${Zn}`;h.measureText(P).width>x-60&&v>24;)v-=2,h.font=`900 ${v}px ${Zn}`;h.fillText(P,x/2,b/2+4),kt.needsUpdate=!0}Rt();{let h=new mt(new bn(3.6,.76,.12),[Xe,Xe,Xe,Xe,new je({map:kt}),Xe]);h.position.set(zi,2.86,wt+.34),re.add(h)}let Vt=[];for(let h of[Oi-.45,Bi+.45]){let x=new ve;x.position.set(h,1.95,wt+.45),re.add(x);let b=new mt(new pi(.28,16,12),_n("#e2452f"));b.scale.y=1.3,x.add(b),C(.26,.06,.26,_n("#2a1810"),0,.38,0,x),C(.26,.06,.26,_n("#2a1810"),0,-.38,0,x),Vt.push(q(0,0,.12,2.3,.55,x))}let Ft=new ve;c.add(Ft);{let h=be(128,128,(D,$,j)=>{D.fillStyle="#2c3044",D.fillRect(0,0,$,j);for(let tt=0;tt<j;tt+=16){D.fillStyle="#3a4058",D.fillRect(0,tt,$,3);for(let It=tt/16%2*16;It<$;It+=32)D.fillStyle="#20242f",D.fillRect(It,tt,2,16)}}),x=new xn({map:M(h,6,3)}),b=Math.hypot(wt/2+.9,1.6);for(let D of[-1,1]){let $=new mt(new bn(ge+1.6,.14,b),x);$.position.set(ge/2,ri+1.5,wt/2+D*(wt/4+.45)),$.rotation.x=D*Math.atan2(1.6,wt/2+.9),Ft.add($)}let v=new mt(new bn(ge+1.7,.2,.3),te("#1c1f2a"));v.position.set(ge/2,ri+2.32,wt/2),Ft.add(v);for(let D of[-.2,ge+.2]){let $=new Dn;$.setAttribute("position",new Pe([D,ri,-.2,D,ri,wt+.2,D,ri+2.32,wt/2,D,ri,-.2,D,ri+.7,-.9,D,ri+2.32,wt/2,D,ri,wt+.2,D,ri+.7,wt+.9,D,ri+2.32,wt/2],3)),$.computeVertexNormals(),Ft.add(new mt($,new xn({color:"#4a2e1c",side:Vn})))}for(let D of[-.1,wt+.1]){let $=new mt(new bn(ge+.4,1,.2),xt);$.position.set(ge/2,ri+.5,D),Ft.add($)}let P=new mt(new bn(ge+1.4,.18,1.3),te("#2c3044"));P.position.set(ge/2,ri+.72,wt+.75),P.rotation.x=.25,Ft.add(P)}let Le=c.children.length,ce=[21,33].map(h=>be(128,256,(x,b,v)=>{let P=ws(h);x.fillStyle="#1b1636",x.fillRect(0,0,b,v);for(let D=0;D<16;D++)for(let $=0;$<8;$++)x.fillStyle=P()<.33?P()<.5?"#ffd98a":"#ffbe68":"#272043",x.fillRect($*16+3,D*16+3,10,10)})),Ye=[];function $e(h,x,b,v,P,D){let $=x-h,j=(h+x)/2,tt=new ve;tt.position.set(j,0,0),c.add(tt),Ye.push(tt),C($-.2,b,wt+1,te(v),0,b/2,wt/2-.4,tt);let It=be(Math.round($*40),Math.round(b*40),(he,Ke,kn)=>{he.fillStyle=v,he.fillRect(0,0,Ke,kn);for(let Ii=0;Ii<Ke;Ii+=12)he.fillStyle="rgba(0,0,0,.12)",he.fillRect(Ii,0,2,kn);he.fillStyle="#ffcf7a",he.fillRect(Ke*.18,kn-2.2*40,Ke*.64,1.6*40),he.strokeStyle="#2a1408",he.lineWidth=4,he.strokeRect(Ke*.18,kn-2.2*40,Ke*.64,1.6*40);for(let Ii=1;Ii<4;Ii++)he.beginPath(),he.moveTo(Ke*.18+Ke*.16*Ii,kn-2.2*40),he.lineTo(Ke*.18+Ke*.16*Ii,kn-.6*40),he.stroke();b>4&&(he.fillStyle="#ffd98a",he.fillRect(Ke*.25,20,Ke*.2,40),he.fillRect(Ke*.55,20,Ke*.2,40))}),We=new mt(new Qe($-.2,b),new je({map:It}));We.position.set(0,b/2,wt+.11),tt.add(We);let we=new mt(new bn($+.2,.2,1.4),te("#2c3044"));if(we.position.set(0,Math.min(b,3.1),wt+.7),we.rotation.x=.25,tt.add(we),P){let he=be(256,120,(kn,Ii,Fh)=>{for(let Z=0;Z<3;Z++)kn.fillStyle=D,kn.fillRect(4+Z*84,0,80,Fh-6);kn.fillStyle="#f8ecd8",kn.textAlign="center",kn.textBaseline="middle",kn.font=`900 46px ${Zn}`,[...P].forEach((Z,de)=>kn.fillText(Z,44+de*84,52))}),Ke=new mt(new Qe(1.8,.85),new je({map:he,transparent:!0,side:Vn}));Ke.position.set(0,2.1,wt+.5),tt.add(Ke)}q(0,1.2,wt+.6,3.5,.35,tt)}$e(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),$e(-13,-6.6,3.4,"#3a4a4a","",""),$e(ge+.3,ge+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),$e(ge+6.4,ge+13,5.4,"#3a3a5a","","");{let h=ws(17);for(let x=-40;x<60;x+=7+h()*5){let b=8+h()*18,v=6+h()*5,P=new mt(new bn(v,b,6),[_n("#1c1736"),_n("#1c1736"),_n("#18132e"),_n("#18132e"),_n("#ffffff",{map:M(ce[h()*2|0],v/5,b/6)}),_n("#1c1736")]);P.position.set(x,b/2,-12-h()*6),c.add(P)}for(let x=-40;x<60;x+=7+h()*6){let b=5+h()*10,v=5+h()*5,P=new mt(new bn(v,b,6),[_n("#1c1736"),_n("#1c1736"),_n("#18132e"),_n("#18132e"),_n("#ffffff",{map:M(ce[h()*2|0],v/5,b/6)}),_n("#1c1736")]);P.position.set(x,b/2,wt+22+h()*4),P.rotation.y=Math.PI,c.add(P)}}let sn=[];function X(h,x){let b=new ve;b.position.set(h,0,x),c.add(b),C(.3,.14,.3,te("#3a3030"),0,.07,0,b),C(.11,4,.11,te("#2b2422"),0,2,0,b),C(.7,.09,.09,te("#2b2422"),0,4,0,b);let v=C(.44,.44,.44,_n("#ffe2a6"),0,3.78,0,b);sn.push(q(0,3.78,0,4.5,.55,b));let P=new mt(new Qe(6,6),new je({map:ua,blending:_s,transparent:!0,depthWrite:!1,opacity:.28}));P.rotation.x=-Math.PI/2,P.position.y=.03,b.add(P)}X(-3.2,wt+5.7),X(ge+3.2,wt+5.7),X(-12,wt+5.7),X(ge+12,wt+5.7);let Ee=[];function Ne(h,x,b){let v=new ve;v.position.set(h,0,x),v.scale.setScalar(b),c.add(v);let P=new mt(new Ai(.16,.26,2.6,7),te("#4a3024"));P.position.y=1.3,v.add(P);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([$,j,tt,It],We)=>{let we=new mt(new xs(It,1),new xn({color:D[We%3],flatShading:!0}));we.position.set($,j,tt),v.add(we)}),Ee.push({x:h,z:x,y:3.2*b,r:2*b})}Ne(-6,wt+16.5,1.1),Ne(3,wt+17,1),Ne(13,wt+16.6,1.15),Ne(-14,wt+3.5,.95),Ne(ge+15,wt+3.4,1);{let h=be(64,128,(v,P,D)=>{v.fillStyle="#c23a2a",v.fillRect(0,0,P,D),v.fillStyle="#fff3d6",v.fillRect(6,8,52,50);let $=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let j=0;j<8;j++)v.fillStyle=$[j%4],v.fillRect(10+j%4*12,14+Math.floor(j/4)*20,9,14);v.fillStyle="#111",v.fillRect(10,90,44,12)}),x=new ve;x.position.set(-1.4,0,wt+.6),c.add(x);let b=new mt(new bn(.95,1.9,.75),[te("#c23a2a"),te("#c23a2a"),te("#c23a2a"),te("#c23a2a"),_n("#ffffff",{map:h}),te("#c23a2a")]);b.position.y=.95,x.add(b),q(0,1.2,.7,2.2,.35,x)}{let h=new ve;h.position.set(ge+1.8,0,wt+5.2),c.add(h),C(1.6,.1,.5,te("#8a5a30"),0,.5,0,h),C(1.6,.5,.08,te("#8a5a30"),0,.8,.22,h),C(.1,.5,.4,te("#2b2422"),-.7,.25,0,h),C(.1,.5,.4,te("#2b2422"),.7,.25,0,h)}let ze=new ve;ze.position.set(ge+1.5,.55,wt+5.2),c.add(ze);{let h="#e8a050",x=new mt(new pi(.22,14,10),te(h));x.scale.set(1.4,.7,1),ze.add(x);let b=new mt(new pi(.13,12,10),te(h));b.position.set(.3,.05,0),ze.add(b);for(let P of[-.06,.06]){let D=new mt(new di(.05,.09,4),te(h));D.position.set(.32,.17,P),ze.add(D)}let v=new mt(new Ai(.035,.03,.4,6),te(h));v.rotation.z=1.2,v.position.set(-.34,.02,.08),ze.add(v)}let Bt=new ve;Bt.position.set(mi.x,0,mi.z),c.add(Bt);{C(.1,1.5,.1,te("#4a2a14"),-.55,.75,0,Bt),C(.1,1.5,.1,te("#4a2a14"),.55,.75,0,Bt);let h=be(256,160,(v,P,D)=>{v.fillStyle="#b8864a",v.fillRect(0,0,P,D),v.strokeStyle="#4a2a14",v.lineWidth=10,v.strokeRect(0,0,P,D);let $=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let j=0;j<5;j++){v.save(),v.translate(40+j%3*80,44+Math.floor(j/3)*70),v.rotate((j%2?-1:1)*.12),v.fillStyle=$[j%4],v.fillRect(-28,-22,56,44),v.fillStyle="#e2452f",v.beginPath(),v.arc(0,-18,4,0,7),v.fill(),v.fillStyle="#8a7a6a";for(let tt=0;tt<3;tt++)v.fillRect(-20,-6+tt*9,40-tt*8,3);v.restore()}v.fillStyle="#3a1e0c",v.font=`900 26px ${Zn}`,v.textAlign="right",v.fillText("\u7559\u8A00\u677F",P-14,D-14)}),x=new mt(new bn(1.3,.85,.08),[Xe,Xe,Xe,Xe,new je({map:h}),Xe]);x.position.y=1.15,Bt.add(x);let b=new mt(new bn(1.5,.08,.35),te("#2c3044"));b.position.y=1.62,b.rotation.x=.2,Bt.add(b),Bt.traverse(v=>{v.isMesh&&(v.userData.board=1)})}let yn=[];if(Bt.traverse(h=>{h.isMesh&&yn.push(h)}),a){let h=c.children.length;c.children.slice(Le,h).concat(c.children.slice(Q,at)).forEach(tt=>c.remove(tt)),yn.length=0,Ee.length=0;let x=new Se("#8fd3f6"),b=new Se("#16204a"),v=new Se("#f0a890"),P=x.clone().lerp(_>15&&_<20?v:b,_>15&&_<20&&y<.5?Math.min(1,y*2):y).lerp(b,y>.5?(y-.5)*2:0);c.fog.color.copy(P),c.fog.near=30,c.fog.far=90,l.setClearColor(P,1),g.visible=!1,I.color.set(y>.5?"#9aa8ff":"#e8f4ff"),I.groundColor.set("#6a8a4a"),I.intensity=1.25+(1-y)*.6,S.intensity=.4+(1-y)*1,S.color.set(y>.5?"#a0b0ff":"#fff2dc");let D=new mt(new Qe(220,220),te(y>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,c.add(D);let $=new mt(new Qe(2.2,6),te("#d9d4cc"));$.rotation.x=-Math.PI/2,$.position.set(zi,-.01,wt+3.2),c.add($);let j=y>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[ge+4,1],[ge+5,6],[-3,wt+5],[ge+3,wt+6],[2,-4],[8,-5]].forEach(([tt,It],We)=>{let we=new ve;we.position.set(tt,0,It),c.add(we);let he=new mt(new Ai(.2,.28,1.8,7),te("#8a5a3a"));he.position.y=.9,we.add(he);let Ke=new mt(new xs(1.4,1),new xn({color:We%3?j:y>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));Ke.position.y=2.6,we.add(Ke)})}let pe=140,Me=new Float32Array(pe*3),U=[],w=be(32,32,h=>{h.fillStyle="#f8c8d8",h.beginPath(),h.ellipse(16,16,12,7,.5,0,7),h.fill()}),et=new Wa(new Dn,new Kr({map:w,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));et.geometry.setAttribute("position",new Pe(Me,3)),c.add(et);function Lt(h,x){let b=Ee.concat(vt)[Math.floor(Math.random()*(Ee.length+vt.length))]||Ee[0]||{x:-999,z:-999,y:0,r:.1};Me[h*3]=b.x+Ci(-b.r,b.r),Me[h*3+1]=x?Ci(0,b.y):b.y+Ci(-.3,.3),Me[h*3+2]=b.z+Ci(-b.r,b.r),U[h]={vx:Ci(-.2,.4),vy:Ci(-.5,-.25),ph:Math.random()*7,fl:b.y}}let vt=[],Ct=[],zt=[],gt=(h,x)=>h>=0&&h<ge&&x>=0&&x<wt,_t=(h,x)=>!a&&h>=Ef&&h<Af&&x>=em&&x<Ah,Gt=(h,x)=>x%2?[h.d,h.w]:[h.w,h.d];function G(h){let x=De[h.k];if(x.L==="wall")return Y(h);let[b,v]=Gt(x,h.r),P=[];for(let D=0;D<b;D++)for(let $=0;$<v;$++)P.push([h.x+D,h.z+$]);return P}function Y(h){let x=De[h.k],b=[];for(let v=0;v<x.w;v++)h.r===0?b.push(["b",h.x+v]):h.r===2?b.push(["f",h.x+v]):h.r===1?b.push(["l",h.z+v]):b.push(["r",h.z+v]);return b}function ut(h){return h===0?"back":h===2?"front":h===1?"left":"right"}function Xt(h,x){let b=De[h.k];for(let[v,P]of Y(h)){let D=v==="b"||v==="f"?ge:wt;if(P<0||P>=D||v==="f"&&P>=Oi-0&&P<Bi)return!1;v==="f"&&P>=Oi-1&&P<Bi+1&&b.w>1}for(let v of Ct){if(v===x||De[v.k].L!=="wall")continue;let P=Y(v);for(let D of Y(h))if(P.some($=>$[0]===D[0]&&$[1]===D[1]))return!1}return!0}function Dt(h,x,b,v){for(let P of Ct)if(!(P===v||De[P.k].L!==b)&&G(P).some(D=>D[0]===h&&D[1]===x))return P;return null}function Wt(h,x,b){let v=Dt(h,x,"main",b);return v&&De[v.k].sf?v:null}function ue(h,x){let b=De[h.k];if(b.L==="wall")return Xt(h,x);let v=G(h),P=null;for(let[D,$]of v){let j=gt(D,$),tt=_t(D,$);if(!j&&!tt)return!1;if(P===null)P=j;else if(P!==j)return!1;if(fl.has(D+","+$))return!1;if(b.L==="top"){if(Dt(D,$,"top",x))return!1;let It=Dt(D,$,"main",x);if(It&&!De[It.k].sf||It&&It.k==="tank")return!1}else if(Dt(D,$,b.L,x))return!1;if(b.L==="main"&&b.solid&&j&&$===wt-1&&D>=Oi&&D<Bi)return!1}return b.L==="main"&&b.solid,!0}function Ue(h){if(De[h.k].L!=="top")return 0;let b=0;for(let[v,P]of G(h)){let D=Wt(v,P);D&&(b=Math.max(b,De[D.k].sf))}return b}function Tt(h){let x=De[h.k];if(x.L==="wall"){let[P,D]=Y(h)[0],$=D+x.w/2;return P==="b"?[$,0,.02]:P==="f"?[$,0,wt-.02]:P==="l"?[.02,0,$]:[ge-.02,0,$]}let[b,v]=Gt(x,h.r);return[h.x+b/2,Ue(h),h.z+v/2]}let me=new je({map:N,transparent:!0,depthWrite:!1,opacity:.55});function Te(h,x){let b=De[h.k];if(h.I=b,h.g=vf(h.k),c.add(h.g),h.g.userData.e=h,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[v,P]=Gt(b,0),D=new mt(new Qe(v*.95,P*.95),me);D.rotation.x=-Math.PI/2,D.position.y=.012,h.g.add(D),D.raycast=()=>{}}return h.g.traverse(v=>{v.isMesh&&(v.userData.e=h,zt.push(v))}),Ct.push(h),$t(h),x||gi(),h}function $t(h){let[x,b,v]=Tt(h);h.g.position.set(x,b,v),h.g.rotation.y=h.r*Math.PI/2}function on(h){let x=Ct.indexOf(h);x>=0&&Ct.splice(x,1),c.remove(h.g);for(let b=zt.length-1;b>=0;b--)zt[b].userData.e===h&&zt.splice(b,1);h.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function zn(h){let x=G(h);return Ct.filter(b=>De[b.k].L==="top"&&G(b).some(v=>x.some(P=>P[0]===v[0]&&P[1]===v[1])))}if(o.it.forEach(([h,x,b,v])=>{let P={k:h,x,z:b,r:v||0};ue(P)?Te(P,!0):s&&(o.inv[h]=(o.inv[h]||0)+1)}),Ct.filter(h=>De[h.k].L==="top").forEach($t),Pt(o.fl),jt(o.wa),r){let h=i.ex||{},x=h.wall||"#f29ab8",b=be(640,200,(v,P,D)=>{v.fillStyle=x,v.fillRect(0,0,P,D);for(let j=0;j<D;j+=14)v.fillStyle="rgba(0,0,0,.08)",v.fillRect(0,j,P,2);let $=j=>{v.fillStyle=y>.5?"#ffd98a":"#bfe6ff",v.fillRect(j,60,110,70),v.strokeStyle="#f4efe2",v.lineWidth=8,v.strokeRect(j,60,110,70),v.beginPath(),v.moveTo(j+55,60),v.lineTo(j+55,130),v.stroke()};$(70),$(460),v.fillStyle="#e8e2d4",v.fillRect(0,D-26,P,26)});le.front.forEach(v=>v.traverse(P=>{if(P.isMesh&&Array.isArray(P.material)&&P.material[4]&&P.material[4].map){let D=P.material[4].map.offset.x,$=P.material[4].map.repeat.x,j=b.clone();j.needsUpdate=!0,j.offset.set(D,0),j.repeat.set($,1),P.material[4]=new je({map:j})}})),xt.map=null,xt.color.set(x),xt.needsUpdate=!0,re.children.slice().forEach(v=>{v!==re.children[0]&&v!==re.children[1]&&v!==re.children[2]&&(v.visible=!1)}),Vt.forEach(v=>{v.visible=!1}),Ft.traverse(v=>{v.isMesh&&v.material&&v.material.map&&(v.material.map=null,v.material.color.set(h.roofC||"#d8452f"),v.material.needsUpdate=!0)})}function cn(){vt=Ct.filter(h=>h.k==="sakura").map(h=>({x:h.g.position.x,z:h.g.position.z,y:2,r:.5}))}cn();for(let h=0;h<pe;h++)Lt(h,1);let us=0;function Mn(){return o.it=Ct.map(h=>[h.k,h.x,h.z,h.r]),o}function gi(){s&&(Mn(),clearTimeout(us),us=setTimeout(()=>{try{n.save&&n.save(o)}catch{}},700),Sn())}let hr=[],As=1.5,Jn={};function ur(h){return Jn[h]?Jn[h]:Jn[h]=be(128,112,x=>{if(x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",h==="mind"||h==="zzz"){x.fillStyle=h==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([v,P,D])=>{x.beginPath(),x.arc(v,P,D,0,7),x.stroke()}),b.forEach(([v,P,D])=>{x.beginPath(),x.arc(v,P,D,0,7),x.fill()}),x.beginPath(),x.arc(44,90,7,0,7),x.fill(),x.stroke(),x.beginPath(),x.arc(30,104,4,0,7),x.fill(),x.stroke()}else x.fillStyle=h==="idea"?"#fff0a8":h==="msg"?"#ffe0ea":"#ffffff",Br(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8);if(x.fillStyle="#2a1810",x.textAlign="center",x.textBaseline="middle",h==="idea")x.font=`900 44px ${Zn}`,x.fillText("!",64,42);else if(h==="zzz")x.font=`900 30px ${Zn}`,x.fillText("z z Z",64,42);else if(h==="msg")x.font=`900 40px ${Zn}`,x.fillText("\u2709",64,42);else for(let b=0;b<3;b++)x.beginPath(),x.arc(40+b*24,42,6,0,7),x.fill()})}function Wi(h,x){return be(512,112,P=>{P.textAlign="center",P.textBaseline="middle";let D=52;P.font=`900 ${D}px ${Zn}`;let $=String(h||"").slice(0,16);for(;P.measureText($).width>432&&D>22;)D-=2,P.font=`900 ${D}px ${Zn}`;let j=Math.min(500,P.measureText($).width+56);P.fillStyle=x==="me"?"#2a1810e6":x==="owner"?"#7a3a14e6":"#2a2a48e0",P.strokeStyle=x==="me"?"#ffd27a":x==="owner"?"#ffb36b":"#c8c0ff",P.lineWidth=6,Br(P,(512-j)/2,14,j,84,84/2),P.fill(),P.stroke(),P.fillStyle="#fff3d6",P.fillText($,512/2,112/2+2)})}function Rs(h,x,b){b=b||{};let v=new ve;c.add(v);let P=new Qe(1,1);P.translate(0,.5,0);let D=new je({transparent:!0,alphaTest:.04,color:b.tint||16051952}),$=new mt(P,D);v.add($);let j={grp:v,m:$,mat:D,h0:x,h:x*As,ar:.8,w:x*As*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};d(h,It=>{D.map=It,D.needsUpdate=!0,j.ar=It.image.width/It.image.height,j.w=j.h*j.ar});let tt=new mt(new Qn(.5,16),new je({map:N,transparent:!0,depthWrite:!1,opacity:.8}));if(tt.rotation.x=-Math.PI/2,c.add(tt),j.sh=tt,b.name){let It=new fi(new ei({map:Wi(b.name,b.nk),transparent:!0,depthTest:!1}));It.renderOrder=30,It.scale.set(2,.44,1),c.add(It),j.tag=It,j.name=b.name}if(b.bubble){let It=new fi(new ei({map:ur(b.bubble),transparent:!0,depthWrite:!1}));It.scale.set(.8,.7,1),c.add(It),j.bub=It,j.kind=b.bubble}return hr.push(j),j}let se=Rs(i.me.src,1.5,{me:1,name:i.me.name||"\u6211",nk:"me"});se.x=zi,se.z=wt+2.6,(s&&i.startInside!==!1||i.island)&&(se.x=zi,se.z=wt-1.6);let fa=Ts,fr=Es,xi=Tf;function Xs(h,x){if(h<fa||h>=fr||x<0||x>=xi||x<wt&&(h<0||h>=ge)||x>=wt&&fl.has(h+","+x)&&h===Rh&&x===wt+1)return!0;let b=Dt(h,x,"main");return!!(b&&De[b.k].solid)}let ki=(h,x,b,v)=>Xs(b,v)?!1:x===wt-1&&v===wt||x===wt&&v===wt-1?h>=Oi&&h<Bi&&b===h:!0;function dr(h,x,b,v){h=Math.floor(h),x=Math.floor(x);let P=(j,tt)=>(j-fa)*100+tt,D=new Map;D.set(P(h,x),null);let $=[[h,x]];for(;$.length;){let[j,tt]=$.shift();if(j===b&&tt===v){let It=[],We=P(j,tt),we=j,he=tt;for(;We!==null;){It.push([we+.5,he+.5]);let Ke=D.get(We);if(Ke===null)break;we=Ke[0],he=Ke[1],We=P(we,he)}return It.reverse()}for(let[It,We]of[[1,0],[-1,0],[0,1],[0,-1]]){let we=j+It,he=tt+We,Ke=P(we,he);D.has(Ke)||!ki(j,tt,we,he)||(D.set(Ke,[j,tt]),$.push([we,he]))}}return null}let Hn=.28;function qn(h,x,b){let v=h>=Oi+Hn&&h<=Bi-Hn;if(b<wt){if(x<wt&&(h<Hn||h>ge-Hn||x<Hn)||x>=wt-Hn&&!v)return!1}else if(x<wt+Hn&&!v||x<wt&&!v)return!1;if(h<Ts+.4||h>Es-.4||x>Tf-.4||x<wt&&(h<0||h>ge))return!1;for(let[P,D]of[[-Hn,-Hn],[Hn,-Hn],[-Hn,Hn],[Hn,Hn],[0,0]]){let $=Math.floor(h+P*.8),j=Math.floor(x+D*.8),tt=Dt($,j,"main");if(tt&&De[tt.k].solid||$===Rh&&j===wt+1&&Math.hypot(h-mi.x,x-mi.z)<.7)return!1}return!0}function Xi(h){let x=[];if(h)for(let b=0;b<wt;b++)for(let v=0;v<ge;v++)Xs(v,b)||x.push([v,b]);else for(let b=wt+1;b<wt+6;b++)for(let v=-6;v<ge+6;v++)Xs(v,b)||x.push([v,b]);return x}let K=[],R=()=>Rf(ul(Mn())),H=ot(io.filter(h=>i.walk&&i.walk[h.spr]&&h.spr!=="robot"));function ot(h){for(let x=h.length-1;x>0;x--){let b=Math.floor(Math.random()*(x+1));[h[x],h[b]]=[h[b],h[x]]}return h}let nt=r?0:hs(2+R(),2,7);H.slice(0,nt).forEach((h,x)=>{let b=Rs(i.walk[h.spr],h.h,{bubble:"chat"});b.d=h,b.sp=h.sp*.8,b.kind2="npc",b.state="out",b.t=x*2.2+Ci(0,1.5),b.x=Ts+1,b.z=wt+4,b.hidden=!0,K.push(b)});function it(h){let x=Rs(i.me.src,1.5,{name:h.name,nk:"vis",bubble:"msg",tint:16771312});x.d={id:"v"+h.id,name:h.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},x.v=h,x.sp=1.3,x.kind2="vis",x.state="out",x.t=Ci(1,6),x.x=Es-1,x.z=wt+4,x.hidden=!0,K.push(x)}let Ot=null,ee=null;if(r){let h=new ve;c.add(h);let x="#e8a050",b="#fff3e0",v=new mt(new pi(.2,14,10),te(x));v.scale.set(1.5,.8,.9),v.position.y=.2,h.add(v);let P=new mt(new pi(.14,14,10),te(x));P.position.set(.3,.34,0),h.add(P);let D=new mt(new pi(.07,10,8),te(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),h.add(D);for(let It of[-.07,.07]){let We=new mt(new di(.05,.1,4),te(x));We.position.set(.3,.5,It),h.add(We);let we=new mt(new pi(.018,6,6),te("#1a1a1a"));we.position.set(.43,.38,It*.7),h.add(we)}let $=[];for(let[It,We]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let we=new mt(new Ai(.04,.04,.16,6),te(x));we.position.set(It,.08,We),h.add(we),$.push(we)}let j=new mt(new Ai(.03,.025,.4,6),te(x));j.position.set(-.38,.36,0),j.rotation.z=.8,h.add(j),h.traverse(It=>{It.isMesh&&(It.userData.pet=1)});let tt=Ct.find(It=>It.k==="catbed");ee={g:h,legs:$,tail:j,x:tt?tt.g.position.x:2.5,z:tt?tt.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!tt}}if(!s){let h=Ct.find(v=>v.k==="register"),x=zi,b=2;if(h){let v=[[h.x,h.z-1],[h.x+1,h.z],[h.x-1,h.z],[h.x,h.z+1]].find(([P,D])=>gt(P,D)&&!Xs(P,D));v&&(x=v[0]+.5,b=v[1]+.5)}Ot=Rs(i.owner&&i.owner.src||i.me.src,1.5,{name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),Ot.x=x,Ot.z=b,Ot.kind2="owner",Ot.state="sleep",Ot.d={name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),role:o.name},K.push(Ot)}function qt(h){let x=h.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];Ct.forEach($=>{$.k==="register"&&b.push(...G($))}),b.push([7,wt+1]);let v=Xi(x).filter(([$,j])=>!b.some(tt=>Math.abs(tt[0]-$)<=1&&Math.abs(tt[1]-j)<=1)&&!hr.some(tt=>tt!==h&&!tt.hidden&&Math.floor(tt.x)===$&&Math.floor(tt.z)===j));if(!v.length)return null;let P=v.filter(([$,j])=>Ct.some(tt=>De[tt.k].L!=="rug"&&G(tt).some(It=>Math.abs(It[0]-$)+Math.abs(It[1]-j)===1))),D=P.length&&Math.random()<.75?P:v;return D[Math.floor(Math.random()*D.length)]}function Qt(h,x,b){let v=dr(h.x,h.z,x,b);return v&&v.length?(h.path=v,h.state="walk",!0):!1}let O={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:se.z<wt,cam:new k(se.x,1,se.z),low:{},pitch:.7,pitchT:.7},xe=(h,x,b,v)=>{let P=document.createElement(h);return x&&(P.className=x),b!=null&&(P.innerHTML=b),(v||e).appendChild(P),P},ke=[],Yt=h=>(ke.push(h),h),Ve=Yt(xe("div","h3info")),Un=Yt(xe("div","h3hud")),rn=xe("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),Ge=Yt(xe("div","h3hint")),Fn=Yt(xe("div","h3toast")),Jt=Yt(xe("div","h3j","<i></i>")),gn=Yt(xe("div","h3card")),Fe=Yt(xe("div","h3bp")),ai=Yt(xe("div","h3sel")),Yn=Yt(xe("div","h3top")),pn=Yt(xe("div","h3pan")),oi=Yt(xe("button","h3door","\u{1F6AA} \u51FA\u9580"));oi.type="button",oi.dataset.h3="exit";function Nn(h){Fn.textContent=h,Fn.classList.add("on"),clearTimeout(Nn.t),Nn.t=setTimeout(()=>Fn.classList.remove("on"),2200)}function He(){if(O.mode==="build"){Un.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}Un.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function Sn(){let h=ul(Mn()),x=Rf(h);if(r){Ve.innerHTML=`<b>\u{1F3E0} ${Cn(i.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> \u6EAB\u99A8\u5EA6 ${h}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${Cn(i.owner&&i.owner.name||"")} \u7684\u5BB6`}</small>`;return}Ve.innerHTML=`<b>\u{1F3EE} ${Cn(o.name)}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> ${Cn(If[x][1])}<br><small>\u6EAB\u99A8\u5EA6 ${h}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${cr(Cf(h))}`:`\u30FB\u5E97\u9577 ${Cn(i.owner&&i.owner.name||"")}`}</small>`}He(),Sn(),rn.style.display="none",setTimeout(()=>_r(),50),window.addEventListener("resize",()=>_r()),rn.querySelectorAll("button").forEach((h,x)=>{let b=x?-1:1;h.addEventListener("pointerdown",P=>{P.preventDefault(),O.camV=b;try{h.setPointerCapture(P.pointerId)}catch{}});let v=()=>{O.camV=0};h.addEventListener("pointerup",v),h.addEventListener("pointercancel",v),h.addEventListener("click",()=>{O.camV||(O.yawT+=b*.5)})});let hn=()=>t.getBoundingClientRect(),Ze=new sa,vn=new Nt,Gi=new Li(new k(0,1,0),0),pr=new k,mr=(h,x)=>{let b=hn();return vn.set((h-b.left)/b.width*2-1,-((x-b.top)/b.height*2-1)),vn},ao=(h,x)=>{let b=hn();return{x:(h-b.left)*(t.clientWidth/b.width),y:(x-b.top)*(t.clientHeight/b.height)}},gr=h=>{let x=h.clone().project(u),b=hn();return{x:(x.x+1)/2*b.width+b.left,y:(1-x.y)/2*b.height+b.top,z:x.z}};function Hr(h,x){return Ze.setFromCamera(mr(h,x),u),Ze.ray.intersectPlane(Gi,pr)?pr.clone():null}function oo(h,x){Ze.setFromCamera(mr(h,x),u);let b=Ze.intersectObjects(zt.filter(v=>v.visible&&v.parent&&Ch(v)),!1);return b.length?b[0].object.userData.e:null}function Ch(h){let x=h;for(;x;){if(!x.visible)return!1;x=x.parent}return!0}function xr(h,x){let b=null,v=1e9;for(let P of K){if(P.hidden)continue;let D=gr(new k(P.x,0,P.z)),$=gr(new k(P.x,P.h+.3,P.z)),j=D.y-$.y;if(j<6)continue;let tt=Math.max(j*.36,30),It=Math.abs(h-D.x);if(It<tt&&x>$.y-14&&x<D.y+12){let We=It+Math.abs(x-(D.y+$.y)/2)*.3;We<v&&(v=We,b=P)}}return b}function Ih(h,x){return Ze.setFromCamera(mr(h,x),u),Ze.intersectObjects(yn,!1).length>0}let qs=[],da=[];function Ph(h,x){return Ze.setFromCamera(mr(h,x),u),Ze.intersectObjects(da,!1).length>0}let qi=new Map,mn=null,ns=null,is=null,ss=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("pointerdown",h=>{O.pt=h.pointerType,h.preventDefault();try{t.setPointerCapture(h.pointerId)}catch{}let x=ao(h.clientX,h.clientY);if(h.pointerType==="touch"&&!is&&O.mode==="walk"&&!pn.classList.contains("on")){let b=hn();if(h.clientX-b.left<b.width*.45){is={id:h.pointerId,sx:x.x,sy:x.y},O.tgt=null,Jt.style.display="block",Jt.style.opacity=1,Jt.style.left=x.x+"px",Jt.style.top=x.y+"px",Jt.firstChild.style.transform="";return}}if(qi.set(h.pointerId,{x:h.clientX,y:h.clientY}),qi.size===2){let[b,v]=[...qi.values()];ns={d:Math.hypot(b.x-v.x,b.y-v.y),dist:O.distT,ang:Math.atan2(v.y-b.y,v.x-b.x),yaw:O.yawT},mn=null,un();return}if(mn={id:h.pointerId,sx:x.x,sy:x.y,cx:h.clientX,cy:h.clientY,moved:0,btn:h.button,yaw0:O.yawT,pit0:O.pitchT},O.mode==="build"){let b=oo(h.clientX,h.clientY);b&&b===O.sel&&!b.I.fixed2?mn.dragItem=b:b&&(mn.pickItem=b)}}),t.addEventListener("pointermove",h=>{if(is&&h.pointerId===is.id){let D=ao(h.clientX,h.clientY),$=D.x-is.sx,j=D.y-is.sy,tt=Math.hypot($,j),It=50,We=Math.min(1,tt/It)/Math.max(tt,1e-6);O.joy={x:$*We,y:j*We},Jt.firstChild.style.transform=`translate(${O.joy.x*It}px,${O.joy.y*It}px)`;return}if(qi.has(h.pointerId)&&qi.set(h.pointerId,{x:h.clientX,y:h.clientY}),ns&&qi.size>=2){let[D,$]=[...qi.values()],j=Math.hypot(D.x-$.x,D.y-$.y);O.distT=hs(ns.dist*ns.d/Math.max(20,j),6,20),O.yawT=ns.yaw-(Math.atan2($.y-D.y,$.x-D.x)-ns.ang);return}if(!mn||mn.id!==h.pointerId)return;let x=ao(h.clientX,h.clientY),b=x.x-mn.sx,v=x.y-mn.sy,P=Math.hypot(b,v);if(!mn.moved&&P>10&&(mn.moved=1,mn.pickItem&&O.mode==="build"&&(At(mn.pickItem),mn.dragItem=mn.pickItem)),!!mn.moved){if(mn.btn===2||O.mode==="walk"||O.mode==="build"&&!mn.dragItem){O.yawT=mn.yaw0-b*.008,O.pitchT=hs(mn.pit0+v*.005,.3,1.25);return}if(O.mode==="build"&&mn.dragItem){an(mn.dragItem,h.clientX,h.clientY);return}if(O.mode==="walk"){let $=Math.min(1,P/55)/Math.max(P,1e-6);O.joy={x:b*$,y:v*$},O.tgt=null,Jt.style.display="block",Jt.style.left=mn.sx+"px",Jt.style.top=mn.sy+"px",Jt.firstChild.style.transform=`translate(${O.joy.x*55}px,${O.joy.y*55}px)`}}});let _r=()=>{O.dead||(ss&&O.mode==="walk"?(Jt.style.display="block",Jt.style.opacity=.55,Jt.style.left="110px",Jt.style.top=t.clientHeight-110+"px",Jt.firstChild.style.transform=""):Jt.style.display="none")},Wr=h=>{if(is&&h.pointerId===is.id){is=null,O.joy=null,_r();return}qi.delete(h.pointerId),qi.size<2&&(ns=null),!(!mn||mn.id!==h.pointerId)&&(mn.moved||Yi(h.clientX,h.clientY,mn),mn.dragItem&&un(),mn=null)};t.addEventListener("pointerup",Wr),t.addEventListener("pointercancel",Wr),t.addEventListener("wheel",h=>{h.preventDefault(),O.distT=hs(O.distT+Math.sign(h.deltaY)*1.2,6,20)},{passive:!1});let pa=h=>{if(!document.contains(t)||/input|textarea/i.test(h.target&&h.target.tagName||""))return;let x=h.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(x)){if(x==="r"&&O.sel){Pn(),h.preventDefault();return}O.keys[x]=1,/^(arrow|w|a|s|d)/.test(x)&&(O.tgt=null),h.preventDefault()}},yr=h=>{delete O.keys[h.key.toLowerCase()]};document.addEventListener("keydown",pa),document.addEventListener("keyup",yr);function Yi(h,x){if(pn.classList.contains("on"))return;if(O.mode==="build"){let D=oo(h,x);At(D||null);return}let b=xr(h,x);if(b){ma(b);return}if(ee){Ze.setFromCamera(mr(h,x),u);let D=[];if(ee.g.traverse($=>{$.isMesh&&D.push($)}),Ze.intersectObjects(D,!1).length){Nn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),ee.t=2,ee.path=null;return}}if(da.length&&Ph(h,x)){Cs(mi.x-1,mi.z+.9,Lf);return}if(Ih(h,x)){Cs(mi.x,mi.z+1,Dh);return}let v=oo(h,x);if(v&&De[v.k].L==="top"){let D=G(v).map($=>Wt($[0],$[1])).find(Boolean);D&&D.k==="register"&&(v=D)}if(v&&v.k==="register"){Cs(v.g.position.x,v.g.position.z+1.2,()=>T(v));return}if(v&&De[v.k].L!=="rug"){let D=v.g.position;rs(),Lh(v),O.tgt=fs(D.x,D.z);return}if(rs(),O.pt==="touch"&&O.mode==="walk")return;let P=Hr(h,x);P&&(O.tgt={x:P.x,z:P.z})}function fs(h,x){let b=null,v=1e9;for(let[P,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let $=h+P,j=x+D;if(qn($,j,j<wt?0:wt+1)){let tt=Math.hypot($-se.x,j-se.z);tt<v&&(v=tt,b={x:$,z:j})}}return b}function Cs(h,x,b){rs();let v=fs(h,x-1)||{x:h,z:x};O.tgt={x:v.x,z:v.z,fn:b},Math.hypot(se.x-v.x,se.z-v.z)<1.6&&(O.tgt=null,b())}function ma(h){rs(!0),O.talk=h,h.kind2==="npc"&&(h.state="talk",h.t=0);let x=Cn(h.d.name),b=Cn(h.d.role||""),v="",P=ha.chat,D="";if(h.kind2==="owner")P={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},v=r?`<p class="h3t mind">\uFF08${Cn(i.owner&&i.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${Cn(i.owner&&i.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,v+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(h.kind2==="vis")P={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},v=`<p class="h3t">\u300C${Cn(h.v.msg||"\u2026\u2026")}\u300D</p>${h.v.gift&&De[h.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${Cn(De[h.v.gift].n)}\u300D</p>`:""}`;else{let It=pl(h);P=ha[It.kind]||ha.chat,v=`<p class="h3t${It.kind==="mind"?" mind":""}">${It.kind==="mind"?"\uFF08"+Cn(It.text)+"\uFF09":"\u300C"+Cn(It.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let $=h.kind2==="npc"?i.walk[h.d.spr]:h.kind2==="owner"&&i.owner&&i.owner.src||i.me.src;gn.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${$}')"></div><div class="h3nm"><b>${x}</b><small>${b}</small></div><span class="h3k" style="background:${P.c}">${P.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${v}<div class="h3bt">${D}</div>`;let j=hn(),tt=gr(new k(h.x,h.h*.5,h.z));gn.classList.toggle("r",tt.x-j.left<j.width/2),gn.classList.add("on"),h.bub&&(h.bub.visible=!1)}function pl(h){let x=Ct.filter(b=>wf[b.k]&&Math.hypot(b.g.position.x-h.x,b.g.position.z-h.z)<3.2);if(x.length&&Math.random()<.5){let b=x[Math.floor(Math.random()*x.length)];return{kind:"chat",text:wf[b.k]}}return(!h.deck||!h.deck.length)&&(h.deck=ot(h.d.lines.map(b=>({kind:b[0],text:b[1]})))),h.deck.pop()}function Lh(h){let x=De[h.k];O.talk=null,gn.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${x.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${Cn(x.n)}</b><small>\u6EAB\u99A8\u5EA6 +${x.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${Cn(wf[h.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,gn.classList.remove("r"),gn.classList.add("on")}function rs(h){gn.classList.remove("on");let x=O.talk;O.talk=null,x&&x.kind2==="npc"&&x.state==="talk"&&(x.state="idle",x.t=Ci(1,2.5))}function m(){if(!s||r)return 0;let h=n.today?n.today():Math.floor(Date.now()/864e5);return(o.cl?hs(h-o.cl,0,3):1)*Cf(ul(Mn()))}function T(h){if(!s){Nn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let x=m();if(x<=0){Nn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=n.collect?n.collect(x):!1}catch{}if(!b){Nn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}o.cl=n.today?n.today():Math.floor(Date.now()/864e5),gi(),J(h),Nn(`\u6536\u5230 ${cr(x)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let A=new fi(new ei({map:be(128,128,h=>{h.fillStyle="#f2c230",h.strokeStyle="#8a5a10",h.lineWidth=8,h.beginPath(),h.arc(64,64,52,0,7),h.fill(),h.stroke(),h.fillStyle="#8a5a10",h.font=`900 64px ${Zn}`,h.textAlign="center",h.textBaseline="middle",h.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));A.renderOrder=25,A.scale.set(.55,.55,1),c.add(A);let B=[];function J(h){for(let x=0;x<8;x++){let b=A.clone();b.material=A.material.clone(),b.position.copy(h.g.position).add(new k(0,1.4,0)),b.userData.v=new k(Ci(-1.2,1.2),Ci(2.5,4),Ci(-1.2,1.2)),b.userData.t=0,c.add(b),B.push(b)}}function ft(h){if(O.mode=h,At(null),rs(),O.tgt=null,He(),setTimeout(_r,0),Fe.classList.toggle("on",h==="build"),Yn.classList.toggle("on",h==="build"),h!=="build"&&(rn.style.bottom=""),Ve.style.display=h==="build"?"none":"",h==="build")Yn.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",Mi(),O.distT=13.5;else{if(O.distT=O.inside?10.5:13,!qn(se.x,se.z,se.z)){let x=Xi(se.z<wt).sort((b,v)=>Math.hypot(b[0]+.5-se.x,b[1]+.5-se.z)-Math.hypot(v[0]+.5-se.x,v[1]+.5-se.z)).find(b=>qn(b[0]+.5,b[1]+.5,b[1]));x&&(se.x=x[0]+.5,se.z=x[1]+.5)}gi()}}let yt=r?"liv":"tbl",Et={},Ut=null,bt=null,Je=null;function In(h){if(Et[h])return Et[h];try{if(!Ut){Ut=new Ni(128,128),bt=new Ar,bt.add(new Lr(16774368,8413264,2.2));let he=new Dr(16777215,1.4);he.position.set(2,4,3),bt.add(he),Je=new ti(30,1,.05,50)}let x=vf(h);bt.add(x);let b=De[h],v=new Os().setFromObject(x),P=v.getCenter(new k),D=v.getSize(new k),j=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;Je.position.set(P.x+j*.55,P.y+j*.45,P.z+j*.7),Je.lookAt(P),b.L==="wall"&&(Je.position.set(P.x+j*.25,P.y+j*.1,P.z+j*.96),Je.lookAt(P)),l.setRenderTarget(Ut),l.setClearColor(0,0),l.clear(),l.render(bt,Je),l.setRenderTarget(null),l.setClearColor(1709366,1);let tt=new Uint8Array(16384*4);l.readRenderTargetPixels(Ut,0,0,128,128,tt);let It=document.createElement("canvas");It.width=It.height=128;let We=It.getContext("2d"),we=We.createImageData(128,128);for(let he=0;he<128;he++)we.data.set(tt.subarray((127-he)*512,(128-he)*512),he*512);for(let he=0;he<we.data.length;he+=4)we.data[he]=Sf[we.data[he]],we.data[he+1]=Sf[we.data[he+1]],we.data[he+2]=Sf[we.data[he+2]];return We.putImageData(we,0,0),bt.remove(x),x.traverse(he=>{he.geometry&&he.geometry.dispose()}),Et[h]=It.toDataURL()}catch{return Et[h]=""}}function Mi(){let h=n.coins?n.coins():0,x=(r?Qp:jp).map(([j,tt])=>`<button class="h3tab ${yt===j?"on":""}" type="button" data-h3="cat" data-k="${j}">${tt}</button>`).join("")+`<button class="h3tab ${yt==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${cr(h)}</span>`,b="";if(yt==="reno"){let j=o.sz|0,tt=dl[j+1];b=(s?`<button class="h3it ${tt&&h<tt[2]?"no":""}" type="button" data-h3="expand" ${tt?"":"disabled"}><span class="ph" style="display:flex;align-items:center;justify-content:center;font-size:34px">\u{1F4D0}</span>${tt?`\u64F4\u5EFA\u5230 ${tt[0]}\xD7${tt[1]}<span class="pr">${cr(tt[2])}</span>`:`\u5DF2\u7D93\u6700\u5927<span class="pr">${ge}\xD7${wt}</span>`}</button>`:"")+_f.map(([It,We,we])=>{let he=o.fo[It],Ke=o.fl===It;return`<button class="h3it ${Ke?"cur":""}" type="button" data-h3="floor" data-k="${It}"><span class="ph" style="background:url(${vr("f",It)}) center/cover"></span>${Cn(We)}${Ke?'<span class="pr">\u4F7F\u7528\u4E2D</span>':he?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${cr(we)}</span>`}</button>`}).join("")+yf.map(([It,We,we])=>{let he=o.wo[It],Ke=o.wa===It;return`<button class="h3it ${Ke?"cur":""}" type="button" data-h3="wall" data-k="${It}"><span class="ph" style="background:url(${vr("w",It)}) center/cover"></span>${Cn(We)}${Ke?'<span class="pr">\u4F7F\u7528\u4E2D</span>':he?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${cr(we)}</span>`}</button>`}).join("")}else b=ol.filter(j=>(r?j.hc===yt:j.cat===yt)&&!j.fixed).map(j=>{let tt=o.inv[j.k]||0,It=In(j.k);return`<button class="h3it ${!tt&&h<j.p?"no":""}" type="button" data-h3="item" data-k="${j.k}">${tt?`<span class="ow">\xD7${tt}</span>`:""}${It?`<img src="${It}" alt="">`:'<span class="ph"></span>'}${Cn(j.n)}<span class="pr">${tt?"\u62FF\u51FA\u4F86\u64FA":cr(j.p)}</span></button>`}).join("");let v=Fe.querySelector(".h3row"),P=v?v.scrollLeft:0,D=Fe.dataset.cat===yt;Fe.innerHTML=`<div class="h3tabs">${x}</div><div class="h3row">${b}</div>`,Fe.dataset.cat=yt,D&&(Fe.querySelector(".h3row").scrollLeft=P);let $=Fe.offsetHeight||150;rn.style.bottom=$+8+"px",ai.style.bottom=$+8+"px"}let Si={};function vr(h,x){let b=h+x;if(Si[b])return Si[b];let v;return h==="f"?v=(z[x]||z.wood)().image:v=W(x,2).image,Si[b]=v.toDataURL()}function At(h){if(O.sel&&O.sel!==h&&(O.sel.ok||rt(O.sel)),O.sel=h,fe.visible=!!h,ai.classList.toggle("on",!!h),h){h.last={x:h.x,z:h.z,r:h.r},h.ok=!0;let x=De[h.k];ai.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${x.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${x.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,wn()}}function rt(h){if(!h.last)return;let x=h.last.x-h.x,b=h.last.z-h.z,v=De[h.k].sf?zn(h):[];h.x=h.last.x,h.z=h.last.z,h.r=h.last.r,$t(h),v.forEach(P=>{P.x+=x,P.z+=b,$t(P)}),h.ok=!0,wn()}let Kt=be(64,64,h=>{h.strokeStyle="#fff",h.lineWidth=6,h.strokeRect(3,3,58,58)}),fe=new mt(new Qe(1,1),new je({map:Kt,transparent:!0,depthWrite:!1,color:"#6aff8a"}));fe.rotation.x=-Math.PI/2,fe.visible=!1,fe.renderOrder=5,c.add(fe);let en=new mt(new Qe(1,1),new je({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));en.rotation.x=-Math.PI/2,fe.add(en),en.rotation.x=0,en.position.z=-.001;function wn(){let h=O.sel;if(!h)return;let x=De[h.k],b=ue(h,h);h.ok=b;let v=b?"#6aff8a":"#ff5a4a";if(fe.material.color.set(v),en.material.color.set(v),x.L==="wall"){let[D,,$]=Tt(h),j=ut(h.r);fe.scale.set(x.w,.6,1),fe.position.set(D+(j==="left"?.35:j==="right"?-.35:0),.03,$+(j==="back"?.35:j==="front"?-.35:0)),fe.rotation.z=j==="left"||j==="right"?Math.PI/2:0}else{let[D,$]=Gt(x,h.r),[j,tt,It]=Tt(h);fe.scale.set(D,$,1),fe.rotation.z=0,fe.position.set(j,tt+.03,It)}let P=ai.querySelector('[data-h3="ok"]');P&&(P.disabled=!b)}function an(h,x,b){let v=Hr(x,b);if(!v)return;let P=De[h.k],D=h.x,$=h.z;if(P.L==="wall"){let j=[[v.z,0],[v.x,1],[ge-v.x,3],[wt-v.z,2]].filter(tt=>!O.low[ut(tt[1])]).sort((tt,It)=>tt[0]-It[0]);if(!j.length)return;h.r=j[0][1],h.r===0||h.r===2?(h.x=hs(Math.round(v.x-P.w/2),0,ge-P.w),h.z=h.r===0?0:wt-1):(h.z=hs(Math.round(v.z-P.w/2),0,wt-P.w),h.x=h.r===1?0:ge-1)}else{let[j,tt]=Gt(P,h.r);h.x=Math.round(v.x-j/2),h.z=Math.round(v.z-tt/2)}(h.x!==D||h.z!==$||P.L==="wall")&&(P.sf&&Rn(h,D,$),$t(h),wn())}function Rn(h,x,b){let v={x,z:b,r:h.r,k:h.k},P=G(v);Ct.filter(D=>De[D.k].L==="top"&&G(D).some($=>P.some(j=>j[0]===$[0]&&j[1]===$[1]))).forEach(D=>{D.x+=h.x-x,D.z+=h.z-b,$t(D)})}function un(){O.sel&&(wn(),Ct.filter(h=>De[h.k].L==="top").forEach($t))}function Pn(){let h=O.sel;if(!h||De[h.k].L==="wall")return;let x=De[h.k].sf?zn(h):[];x.length&&(x.forEach(b=>{on(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),Nn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),h.r=(h.r+1)%4,$t(h),wn()}function Wn(){let h=O.sel;if(!h||De[h.k].fixed)return;(De[h.k].sf?zn(h):[]).forEach(b=>{on(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),O.sel=null,on(h),o.inv[h.k]=(o.inv[h.k]||0)+1,fe.visible=!1,ai.classList.remove("on"),cn(),gi(),Mi()}function $n(){let h=O.sel;if(h){if(!ue(h,h)){Nn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}h.last=null,O.sel=null,fe.visible=!1,ai.classList.remove("on"),cn(),gi()}}function _i(h){let x=De[h],b={k:h,x:0,z:0,r:0},v=O.cam.x,P=O.cam.z,D=null,$=1e9;if(x.L==="wall")for(let j of[0,1,3,2].filter(tt=>!O.low[ut(tt)]))for(let tt=0;tt<10;tt++){let It={k:h,r:j,x:j===0||j===2?tt:j===1?0:ge-1,z:j===1||j===3?tt:j===0?0:wt-1};if(Xt(It)){let[We,,we]=Tt(It),he=Math.hypot(We-v,we-P);he<$&&($=he,D=It)}}else for(let j=0;j<Ah;j++)for(let tt=Ef;tt<Af;tt++){let It={k:h,x:tt,z:j,r:0};if(!ue(It))continue;let[We,,we]=Tt(It),he=gt(tt,j),Ke=Math.hypot(We-v,we-P)+(he===O.inside?0:6)+(x.L==="top"&&!Wt(tt,j)?1.5:0);Ke<$&&($=Ke,D=It)}D?Object.assign(b,D):(b.x=1,b.z=1),Te(b,!0),o.inv[h]--,o.inv[h]||delete o.inv[h],At(b),D||wn(),cn(),gi(),Mi()}function yi(h,x,b,v,P){let D=n.coins?n.coins():0;pn.innerHTML=`<h3>\u8CB7\u4E0B\u300C${Cn(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${cr(v)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${cr(D)}</b></p>${D<v?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<v?"disabled":""}>\u8CB7\u4E0B</button></div>`,pn.classList.add("on"),pn._buy=()=>{let $=!1;try{$=n.buy?n.buy(v,b):!1}catch{}if(!$){Nn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}pn.classList.remove("on"),P()}}let li=null,br=!1;function ml(h){return li&&!h?Promise.resolve(li):n.msgs?Promise.resolve(n.msgs()).then(x=>(li=(x||[]).slice().sort((b,v)=>(v.t||0)-(b.t||0)),br=!1,li),()=>(br=!0,li=[],li)):(li=[],Promise.resolve(li))}let lo="";function Dh(){rs(),pn.innerHTML=`<h3>\u{1F4DC} ${Cn(o.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,pn.classList.add("on"),ml(!0).then(h=>{if(!pn.classList.contains("on"))return;let x=h.slice(0,30).map(v=>`<div class="msg"><b>${Cn(v.name||"\u73A9\u5BB6")}</b><small>${v.t?new Date(v.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${v.gift&&De[v.gift]?` <small>\u{1F381} ${Cn(De[v.gift].n)}</small>`:""}<br>${Cn(v.msg||"")}</div>`).join("")||`<p style="opacity:.7">${br?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let v=r?0:h.filter(P=>P.gift&&De[P.gift]&&!o.gc[P.id]).length;b=`<div class="h3bt">${v?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${v} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let v=n.giftSent?n.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${i.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${v?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...A1].map(P=>`<button type="button" data-h3="gpick" data-k="${P}" class="${lo===P?"on":""}">${P?Cn(De[P].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}pn.innerHTML=`<h3>\u{1F4DC} ${Cn(o.name)} \u7684\u7559\u8A00\u677F</h3>${x}${b}`})}function rm(){if(i.demo){Nn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),pn.classList.remove("on");return}let h=pn.querySelector("#h3msg"),x=(h&&h.value||"").trim().slice(0,60);if(x.length<1){Nn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=n.giftSent&&n.giftSent()?"":lo,v=pn.querySelector('[data-h3="post"]');v&&(v.disabled=!0),Promise.resolve(n.post?n.post({msg:x,gift:b}):null).then(()=>{Nn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),lo="",li=null,pn.classList.remove("on")},()=>{Nn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),v&&(v.disabled=!1)})}function Pf(){if(qs.forEach(x=>c.remove(x)),qs.length=0,da.length=0,!s||!li)return;let h=li.filter(x=>x.gift&&De[x.gift]&&!o.gc[x.id]);h.slice(0,5).forEach((x,b)=>{let v=new ve;v.position.set(mi.x-1.1-b%3*.55,0,mi.z+.4+Math.floor(b/3)*.5),c.add(v);let P=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=C(.42,.36,.42,te(P),0,.18,0,v);C(.44,.38,.08,te("#fff3d6"),0,.18,0,v),C(.08,.38,.44,te("#fff3d6"),0,.18,0,v);let $=C(.46,.08,.46,te(P),0,.4,0,v),j=new mt(new pi(.08,10,8),te("#fff3d6"));j.position.y=.48,j.scale.set(1.6,.8,1),v.add(j),v.traverse(tt=>{tt.isMesh&&da.push(tt)}),qs.push(v),v.userData.ph=b}),h.length&&Nn(i.island?`\u6709 ${h.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${h.length} \u4EFD\u79AE\u7269\uFF01`)}function Lf(){if(!s||!li)return;let h=li.filter(x=>x.gift&&De[x.gift]&&!o.gc[x.id]);h.length&&(h.forEach(x=>{o.inv[x.gift]=(o.inv[x.gift]||0)+1,o.gc[x.id]=1}),gi(),Pf(),pn.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${h.map(x=>`<div class="msg"><b>${Cn(x.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${Cn(De[x.gift].n)}\u300D<br>${Cn(x.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,pn.classList.add("on"))}function am(){rs(),pn.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${Cn(o.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,pn.classList.add("on")}let Df=h=>{let x=h.target.closest("[data-h3]");if(!x||!e.contains(x)||x.disabled)return;let b=x.dataset.h3,v=x.dataset.k;if(b==="close")rs();else if(b==="more"&&O.talk)ma(O.talk);else if(b==="build")ft("build");else if(b==="done")ft("walk");else if(b==="rename")am();else if(b==="nameok"){let P=(pn.querySelector("#h3name").value||"").trim().slice(0,12);P&&(o.name=P,Rt(),gi()),pn.classList.remove("on")}else if(b==="board"){if(O.mode!=="walk")return;i.island?Dh():Cs(mi.x,mi.z+1,Dh)}else if(b==="claim")Lf();else if(b==="exit"){if(i.island){O.exited=!0;try{n.exit&&n.exit()}catch{}}}else if(b==="pclose")pn.classList.remove("on");else if(b==="post")rm();else if(b==="gpick")lo=v||"",pn.querySelectorAll('[data-h3="gpick"]').forEach(P=>P.classList.toggle("on",(P.dataset.k||"")===lo));else if(b==="buyok"&&pn._buy)pn._buy();else if(b==="cat")yt=v,Mi();else if(b==="item"){let P=De[v];O.sel&&!O.sel.ok&&rt(O.sel),At(null),o.inv[v]?_i(v):yi("item",v,P.n,P.p,()=>{o.inv[v]=(o.inv[v]||0)+1,_i(v)})}else if(b==="floor"){let P=_f.find($=>$[0]===v),D=()=>{o.fo[v]=1,o.fl=v,Pt(v),gi(),Mi()};o.fo[v]?D():yi("floor",v,P[1],P[2],D)}else if(b==="wall"){let P=yf.find($=>$[0]===v),D=()=>{o.wo[v]=1,o.wa=v,jt(v),gi(),Mi()};o.wo[v]?D():yi("wall",v,P[1],P[2],D)}else if(b==="expand"){let P=o.sz|0,D=dl[P+1];if(!D)return;yi("expand","x",`\u64F4\u5EFA\u5230 ${D[0]}\xD7${D[1]} \u683C\uFF08\u73FE\u5728 ${ge}\xD7${wt}\uFF09`,D[2],()=>{o.sz=P+1,Mn();try{n.save&&n.save(o,!0)}catch{}Nn("\u64F4\u5EFA\u5B8C\u6210\uFF01"),n.reload&&setTimeout(()=>n.reload(),400)})}else b==="rot"?Pn():b==="store"?Wn():b==="ok"&&$n()};e.addEventListener("click",Df),ml().then(h=>{if(!O.dead&&s&&!r){Pf();let x={};h.filter(b=>b.name&&!x[b.from||b.name]&&(x[b.from||b.name]=1)).slice(0,3).forEach(it)}});let om={get dead(){return O.dead},set dead(h){h&&Nh()},cv:t,dispose:Nh,data:()=>JSON.parse(JSON.stringify(Mn())),probe(){let h=x=>{let b=gr(x);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:O.mode,inside:O.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+se.x.toFixed(2),z:+se.z.toFixed(2)},yaw:+O.yaw.toFixed(2),sel:O.sel?{k:O.sel.k,x:O.sel.x,z:O.sel.z,r:O.sel.r,ok:O.sel.ok}:null,items:Ct.map(x=>Object.assign({k:x.k,x:x.x,z:x.z,r:x.r},h(new k(x.g.position.x,x.g.position.y+.4,x.g.position.z)))),npcs:K.filter(x=>!x.hidden).map(x=>Object.assign({id:x.d.id||x.kind2,kind:x.kind2,state:x.state},h(new k(x.x,x.h*.5,x.z)))),board:h(new k(mi.x,1.15,mi.z)),gifts:qs.length,card:gn.classList.contains("on")?gn.textContent:"",pan:pn.classList.contains("on")?pn.textContent:"",cozy:ul(Mn()),inv:Object.assign({},o.inv),name:o.name,fl:o.fl,wa:o.wa,tag:se.tag?se.tag.visible:!1,cellPx:(x,b)=>h(new k(x,0,b))}},px(h,x,b){let v=gr(new k(h,x,b));return{x:Math.round(v.x),y:Math.round(v.y)}},teleport(h,x){se.x=h,se.z=x,O.inside=x<wt},setYaw(h){O.yaw=O.yawT=h},setDist(h){O.dist=O.distT=h}};function Nh(){if(!O.dead){if(O.dead=!0,cancelAnimationFrame(O.raf),clearTimeout(us),s)try{Mn(),n.save&&n.save(o,!0)}catch{}document.removeEventListener("keydown",pa),document.removeEventListener("keyup",yr),e.removeEventListener("click",Df),ke.forEach(h=>h.remove()),c.traverse(h=>{h.geometry&&h.geometry.dispose(),(h.material?Array.isArray(h.material)?h.material:[h.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),Ut&&Ut.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let gl=0,xl=0,Nf=0,$i=1,_l=0,Uh=0,Uf=9,yl=.9,co=new k,ds=new k,Ys=new k;function lm(h){return Math.round(hs(1.75-(h-380)/440*.6,1.15,1.75)*20)/20}function cm(){let h=t.getBoundingClientRect(),x=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),v=Math.min(2,window.devicePixelRatio||1),P=lm(h.height||b);P!==As&&(As=P,hr.forEach(D=>{D.h=D.h0*As,D.w=D.h*D.ar})),!(x===gl&&b===xl&&v===Nf)&&(gl=x,xl=b,Nf=v,$i=hs(h.width*v/x,.5,2.2),$i=Math.min($i,Math.sqrt(2e6/(x*b))),yl=Math.max(Math.min($i,.9),$i*.8),$i=Math.max(yl,Math.min($i,Uf)),l.setPixelRatio($i),l.setSize(x,b,!1),u.aspect=x/b,u.updateProjectionMatrix())}function Ff(h,x){if(!h.path||!h.path.length)return!0;let[b,v]=h.path[0],P=b-h.x,D=v-h.z,$=Math.hypot(P,D),j=h.sp;if($<.06)return h.path.shift(),!h.path.length;let tt=Math.min($,j*x);h.x+=P/$*tt,h.z+=D/$*tt,h.moving=!0,h.ph+=x*(4+j*3.2);let It=P*ds.x+D*ds.z;return Math.abs(It)>.05&&(h.face=It>0?1:-1),!1}function Of(h){if(O.dead)return;if(!document.contains(t)){Nh();return}O.raf=requestAnimationFrame(Of);let x=Math.min(.1,(h-O.last)/1e3);O.last=h,O.t+=x;let b=O.t;cm(),_l+=x,Uh++,_l>1.2&&(_l/Uh>.028&&(l.shadowMap.enabled?(l.shadowMap.enabled=!1,c.traverse(de=>{de.material&&[].concat(de.material).forEach(Ce=>Ce.needsUpdate=!0)})):$i>yl+.01&&($i=Math.max(yl,$i*.88),Uf=$i,l.setPixelRatio($i),l.setSize(gl,xl,!1))),_l=0,Uh=0);let v=O.keys;v.q&&(O.yawT+=x*1.8),v.e&&(O.yawT-=x*1.8),O.camV&&(O.yawT+=O.camV*x*1.8),O.yaw+=(O.yawT-O.yaw)*Math.min(1,x*8),O.pitch+=(O.pitchT-O.pitch)*Math.min(1,x*8),O.dist+=(O.distT-O.dist)*Math.min(1,x*5);let P=Math.sin(O.yaw),D=Math.cos(O.yaw);if(co.set(-P,0,-D),ds.set(D,0,-P),se.moving=!1,O.mode==="walk"&&!pn.classList.contains("on")){let Z=0,de=0,Ce=0,fn=1e9;if(O.joy)Z=ds.x*O.joy.x+co.x*-O.joy.y,de=ds.z*O.joy.x+co.z*-O.joy.y,Ce=Math.hypot(O.joy.x,O.joy.y);else{let Tn=(v.arrowright||v.d?1:0)-(v.arrowleft||v.a?1:0),dn=(v.arrowup||v.w?1:0)-(v.arrowdown||v.s?1:0);if(Tn||dn){let En=Math.hypot(Tn,dn);Z=(ds.x*Tn+co.x*dn)/En,de=(ds.z*Tn+co.z*dn)/En,Ce=1}else if(O.tgt){if(!O.tgt.path){let On=dr(se.x,se.z,Math.floor(O.tgt.x),Math.floor(O.tgt.z));O.tgt.path=On?On.slice(1):[],On?O.tgt.path.length?O.tgt.path[O.tgt.path.length-1]=[O.tgt.x,O.tgt.z]:O.tgt.path=[[O.tgt.x,O.tgt.z]]:O.tgt.path=[[O.tgt.x,O.tgt.z]]}let En=O.tgt.path[0];if(En){let On=En[0]-se.x,Vi=En[1]-se.z,Zi=Math.hypot(On,Vi);if(Zi<.12){if(O.tgt.path.shift(),!O.tgt.path.length){let Is=O.tgt.fn;O.tgt=null,Is&&Is()}}else Z=On/Zi,de=Vi/Zi,Ce=1,fn=Zi}else{let On=O.tgt.fn;O.tgt=null,On&&On()}}}if(Ce>.05){let Tn=Math.hypot(Z,de)||1,dn=4*Math.min(1,Ce),En=Math.min(dn*x,fn),On=Z/Tn*En,Vi=de/Tn*En,Zi=!1;if(qn(se.x+On,se.z+Vi,se.z)?(se.x+=On,se.z+=Vi,Zi=!0):qn(se.x+On,se.z,se.z)?(se.x+=On,Zi=!0):qn(se.x,se.z+Vi,se.z)&&(se.z+=Vi,Zi=!0),!Zi&&O.tgt&&(O.tgt.stuck=(O.tgt.stuck||0)+x,O.tgt.stuck>.6)){let Is=O.tgt.fn;O.tgt=null,Is&&Math.hypot(se.x-mi.x,se.z-mi.z)<3&&Is()}if(Zi){se.moving=!0,se.ph+=x*9*Math.min(1,Ce);let Is=Z/Tn*ds.x+de/Tn*ds.z;Math.abs(Is)>.2&&(se.face=Is>0?1:-1)}O.talk&&Math.hypot(O.talk.x-se.x,O.talk.z-se.z)>6&&rs()}}if(i.island&&!O.exited&&se.z>wt+.5&&O.mode==="walk"){O.exited=!0;try{n.exit&&n.exit()}catch{}return}if(a){let Z=O.mode==="walk"&&!O.exited&&se.z>wt-2&&Math.abs(se.x-zi)<2;if(oi.classList.toggle("on",Z),Z){let de=gr(new k(zi,O.low&&O.low.front?.5:2.7,wt-.15)),Ce=hn();oi.style.left=de.x-Ce.left+"px",oi.style.top=de.y-Ce.top+"px"}}let $=O.inside;O.inside=se.z<wt-.05,$!==O.inside&&O.mode==="walk"&&(O.distT=O.inside?10.5:13,Ge.textContent=O.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${o.name}\u300D`:"\u5E97\u5916",Ge.classList.add("on"),clearTimeout(Ge.t),Ge.t=setTimeout(()=>Ge.classList.remove("on"),1800));for(let Z of K){if(Z.moving=!1,Z.kind2==="owner")continue;if(Z.state==="talk"){Z.face=(se.x-Z.x)*ds.x+(se.z-Z.z)*ds.z>0?1:-1;continue}if(Z.state==="out"){if(Z.t-=x,Z.t<=0){let dn=Math.random()<.5;Z.x=dn?Ts+4:Es-4,Z.z=wt+Ci(3.5,5.5),Z.hidden=!1,Z.alpha=0,Z.stops=2+Math.floor(Math.random()*3);let En=qt(Z);(!En||!Qt(Z,En[0],En[1]))&&(Z.hidden=!0,Z.t=3)}continue}if(Z.alpha=Math.min(1,(Z.alpha||0)+x*2),Z.state==="walk")Ff(Z,x)&&(Z.state="idle",Z.t=Ci(3,7));else if(Z.state==="idle"){if(Z.t-=x,Z.t<=0)if(Z.stops--,Z.stops<=0){let dn=Math.random()<.5?Ts+1:Es-2;Qt(Z,dn,wt+4)?Z.state="leave":Z.t=2}else{let dn=qt(Z);(!dn||!Qt(Z,dn[0],dn[1]))&&(Z.t=2)}}else Z.state==="leave"&&(Ff(Z,x)?(Z.hidden=!0,Z.state="out",Z.t=Ci(4,12)):(Z.x<Ts+3||Z.x>Es-3)&&(Z.alpha=Math.max(0,Math.min(Z.alpha,Math.min(Z.x-Ts,Es-Z.x)/3))));let de=Z.x-se.x,Ce=Z.z-se.z,fn=Math.hypot(de,Ce),Tn=.55;if(fn<Tn&&fn>.001&&Z.state!=="walk"&&Z.state!=="leave"){let dn=Z.x+de/fn*(Tn-fn),En=Z.z+Ce/fn*(Tn-fn);qn(dn,En,Z.z)&&(Z.x=dn,Z.z=En)}}if(ee){let Z=ee;Z.t-=x;let de=!1;if(Z.path&&Z.path.length){let[fn,Tn]=Z.path[0],dn=fn-Z.x,En=Tn-Z.z,On=Math.hypot(dn,En);if(On<.05)Z.path.shift();else{let Vi=Math.min(On,1.1*x);Z.x+=dn/On*Vi,Z.z+=En/On*Vi,Z.g.rotation.y=Math.atan2(-En,dn),de=!0}Z.path.length||(Z.t=Ci(3,8))}else if(Z.t<=0){let fn=Xi(!0),Tn=fn[Math.floor(Math.random()*fn.length)],dn=Ct.find(Vi=>Vi.k==="catbed"),En=dn&&Math.random()<.35?[dn.x,dn.z]:Tn,On=En&&dr(Z.x,Z.z,En[0],En[1]);On&&On.length?(Z.path=On,Z.sleep=!1):Z.t=3,dn&&En&&En[0]===dn.x&&En[1]===dn.z&&(Z.sleep=!0)}Z.ph+=x*(de?12:0),Z.legs.forEach((fn,Tn)=>{fn.rotation.z=de?Math.sin(Z.ph+Tn*Math.PI)*.5:0}),Z.tail.rotation.z=.8+Math.sin(b*2)*.25;let Ce=!de&&Z.sleep&&Ct.some(fn=>fn.k==="catbed"&&Math.hypot(fn.g.position.x-Z.x,fn.g.position.z-Z.z)<.4);Z.g.position.set(Z.x,Ce?.1:0,Z.z),Z.g.scale.y=Ce?.75+Math.sin(b*1.5)*.03:1}let j=se.x,tt=se.z,It=1.1;O.mode==="build"&&(O.inside?(j=ge/2+P*2.2,tt=wt/2+D*2.2):(j=zi+P*2,tt=wt+2.5+D*2),It=.4),O.cam.x+=(j-O.cam.x)*Math.min(1,x*(O.mode==="build"?4:12)),O.cam.z+=(tt-O.cam.z)*Math.min(1,x*(O.mode==="build"?4:12)),O.cam.y+=(It-O.cam.y)*Math.min(1,x*4);let We=gl/xl,we=We<1.45?1.45/We:1,he=O.dist*we*Math.max(ge/10,wt/8),Ke=O.mode==="build"?Math.max(.75,O.pitch):O.pitch;Ys.set(O.cam.x+P*Math.cos(Ke)*he,O.cam.y+Math.sin(Ke)*he,O.cam.z+D*Math.cos(Ke)*he),u.position.copy(Ys),u.lookAt(O.cam.x,O.cam.y+.5,O.cam.z),g.position.copy(Ys);let kn=O.inside||O.mode==="build"&&O.inside;Ft.visible=!kn;let Ii=O.low={back:kn&&Ys.z<0,front:kn&&Ys.z>wt,left:kn&&Ys.x<0,right:kn&&Ys.x>ge};for(let Z in le){let de=Ii[Z];for(let Ce of le[Z]){let fn=de?.14:1;Ce.scale.y+=(fn-Ce.scale.y)*Math.min(1,x*10)}}for(let Z of Ct)if(De[Z.k].L==="wall"){let de=ut(Z.r);Z.g.visible=!Ii[de]||!kn}re.visible=!Ii.front;for(let Z of Ye)Z.visible=!(kn&&(Ii.left&&Z.position.x<0||Ii.right&&Z.position.x>ge));L.intensity=E.intensity=kn?14:6;let Fh=Math.atan2(Ys.x-O.cam.x,Ys.z-O.cam.z);for(let Z of hr){let de=!Z.hidden,Ce=!kn&&Z.z<wt;if(Z.grp.visible=de,Z.sh.visible=de,Z.tag&&(Z.tag.visible=de&&!Ce),Z.bub&&(Z.bub.visible=de&&!Ce&&Z!==O.talk&&Z.state!=="leave"),!de)continue;let fn=Z.w,Tn=Z.h,dn=Z.moving?1:0,En=Math.sin(Z.ph),On=dn?Math.abs(En)*.06:0,Vi=dn?En*.06:Math.sin(b*1.6+Z.ph)*.01,Zi=dn?1+Math.cos(Z.ph*2)*.025:1+Math.sin(b*1.6+Z.ph)*.008,Is=Z.state==="sleep"?Math.sin(b*1.2)*.015:0;Z.grp.position.set(Z.x,On,Z.z),Z.m.rotation.set(0,Fh,Vi*Z.face+Is),Z.m.scale.set(fn*Z.face*(2-Zi),Tn*Zi,1),Z.mat.opacity=Z.alpha==null?1:Z.alpha,Z.sh.position.set(Z.x,.025,Z.z),Z.sh.scale.set(fn*.7,fn*.4,1),Z.tag&&(Z.tag.position.set(Z.x,Tn+.3,Z.z),Z.tag.material.opacity=Z.alpha==null?1:Z.alpha),Z.bub&&Z.bub.position.set(Z.x,Tn+(Z.tag?.82:.45)+Math.sin(b*2.3+Z.ph)*.06,Z.z)}ye.rotation.x=Math.sin(b*1.7)*.05;for(let Z of Vt)Z.material.opacity=.45+.12*Math.sin(b*6);for(let Z of sn)Z.material.opacity=.5+.05*Math.sin(b*3+Z.parent.position.x);for(let Z of Ct){let de=Z.g.userData;if(de.glows)for(let Ce of de.glows)Ce.material.opacity=(Ce.userData.o0||(Ce.userData.o0=Ce.material.opacity))*(.85+.15*Math.sin(b*5+Z.x*1.7));if(de.swing&&(de.swing.rotation.z=Math.sin(b*1.5+Z.x)*.06),de.wave&&(de.wave.rotation.x=-.6+Math.sin(b*4)*.5),de.fish&&de.fish.forEach((Ce,fn)=>{let Tn=b*(.6+fn*.2)+fn*2;Ce.position.x=Math.cos(Tn)*.2,Ce.position.z=Math.sin(Tn)*.12,Ce.rotation.y=-Tn+Math.PI/2*(fn%2?1:-1)}),de.spin&&(de.spin.rotation.y=b*3),de.hands){let Ce=new Date;de.hands[0].rotation.z=-(Ce.getHours()%12+Ce.getMinutes()/60)/12*Math.PI*2,de.hands[1].rotation.z=-Ce.getMinutes()/60*Math.PI*2,de.hands.forEach(fn=>{let Tn=fn.rotation.z,dn=fn.geometry.parameters.height/2;fn.position.x=-Math.sin(Tn)*dn,fn.position.y=de.handY+Math.cos(Tn)*dn})}}for(let Z of qs)Z.position.y=Math.abs(Math.sin(b*3+Z.userData.ph))*.12;{let Z=et.geometry.attributes.position.array;for(let de=0;de<pe;de++){let Ce=U[de];Z[de*3]+=(Ce.vx+Math.sin(b*1.5+Ce.ph)*.3)*x,Z[de*3+1]+=Ce.vy*x,Z[de*3+2]+=Math.cos(b*1.2+Ce.ph)*.2*x,Z[de*3+1]<.02&&Lt(de)}et.geometry.attributes.position.needsUpdate=!0}ze.children[1].rotation.z=Math.sin(b*.8)*.08,ze.children[4].rotation.y=Math.sin(b*2)*.4;{let Z=s?Ct.find(Ce=>Ce.k==="register"):null,de=Z?m():0;A.visible=!!(Z&&de>0&&O.mode==="walk"&&O.inside),A.visible&&(A.position.set(Z.g.position.x,1.75+Math.sin(b*3)*.1,Z.g.position.z),A.material.rotation=0,A.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let Z=B.length-1;Z>=0;Z--){let de=B[Z],Ce=de.userData;Ce.t+=x,Ce.v.y-=9*x,de.position.addScaledVector(Ce.v,x),de.material.opacity=Math.max(0,1-Ce.t/1.1),Ce.t>1.1&&(c.remove(de),de.material.dispose(),B.splice(Z,1))}O.sel&&(fe.material.opacity=.7+.3*Math.sin(b*6)),l.render(c,u)}return O.raf=requestAnimationFrame(Of),om}return mm(I1);})();
