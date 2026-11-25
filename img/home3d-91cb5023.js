var Home3D=(()=>{var kh=Object.defineProperty;var hm=Object.getOwnPropertyDescriptor;var um=Object.getOwnPropertyNames;var fm=Object.prototype.hasOwnProperty;var dm=(i,t)=>{for(var e in t)kh(i,e,{get:t[e],enumerable:!0})},pm=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of um(t))!fm.call(i,s)&&s!==e&&kh(i,s,{get:()=>t[s],enumerable:!(n=hm(t,s))||n.enumerable});return i};var mm=i=>pm(kh({},"__esModule",{value:!0}),i);var I1={};dm(I1,{D0:()=>Gi,D1:()=>Vi,DX:()=>Hi,EXO:()=>cs,H3CSS:()=>R1,RD:()=>wt,RW:()=>ge,SIZES:()=>gl,STARS:()=>Df,WH:()=>hi,cozyOf:()=>pl,dailyIncome:()=>Lf,defaultEx:()=>Tf,demoHome:()=>E1,freshHome:()=>sm,freshHomeInterior:()=>T1,island:()=>em,starsOf:()=>Pf,start:()=>C1});var Md=0,Au=1,Sd=2;var Ko=1,Oc=2,Qa=3,Lr=0,oi=1,Hn=2,ra=0,to=1,Ms=2,Ru=3,Cu=4,wd=5;var aa=100,Td=101,Ed=102,Ad=103,Rd=104,Cd=200,Id=201,Pd=202,Ld=203,Iu=204,Pu=205,Dd=206,Nd=207,Ud=208,Fd=209,Od=210,Bd=211,zd=212,kd=213,Gd=214,tc=0,ec=1,nc=2,Ba=3,ic=4,sc=5,rc=6,ac=7,Bc=0,Vd=1,Hd=2,Ws=0,Lu=1,Du=2,Nu=3,Uu=4,Fu=5,Ou=6,Bu=7;var zu=300,oa=301,eo=302,zc=303,kc=304,Bs=1e3,Fs=1001,oc=1002,pi=1003,Wd=1004;var jo=1005;var Oi=1006,Gc=1007;var hr=1008;var qi=1009,ku=1010,Gu=1011,no=1012,Vc=1013,Ss=1014,ws=1015,Ts=1016,Hc=1017,Wc=1018,la=1020,Vu=35902,Hu=35899,Wu=1021,Xu=1022,Es=1023,ar=1026,ur=1027,qu=1028,Xc=1029,Dr=1030,qc=1031;var Yc=1033,Qo=33776,tl=33777,el=33778,nl=33779,$c=35840,Zc=35841,Jc=35842,Kc=35843,jc=36196,Qc=37492,th=37496,eh=37488,nh=37489,il=37490,ih=37491,sh=37808,rh=37809,ah=37810,oh=37811,lh=37812,ch=37813,hh=37814,uh=37815,fh=37816,dh=37817,ph=37818,mh=37819,gh=37820,xh=37821,_h=36492,yh=36494,vh=36495,bh=36283,Mh=36284,sl=36285,Sh=36286;var To=2300,lc=2301,Kl=2302,du=2303,pu=2400,mu=2401,gu=2402;var Xd=3200;var wh=0,qd=1,fr="",ii="srgb",Eo="srgb-linear",Ao="linear",En="srgb";var jl=7680;var Yd=519,$d=512,Zd=513,Jd=514,Yu=515,Kd=516,jd=517,$u=518,Zu=519,Ju=35044;var Ku="300 es",os=2e3,za=2001;function gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){let i=ka("canvas");return i.style.display="block",i}var zf={},Ga=null;function Ro(...i){let t="THREE."+i.shift();Ga?Ga("log",t,...i):console.log(t,...i)}function tp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=tp(i);let t="THREE."+i.shift();if(Ga)Ga("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ae(...i){i=tp(i);let t="THREE."+i.shift();if(Ga)Ga("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Mo(...i){let t=i.join(" ");t in zf||(zf[t]=!0,Re(...i))}function ep(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var np={[tc]:tc,[nc]:rc,[ic]:ic,[Ba]:sc,[ec]:ec,[rc]:nc,[ac]:ac,[sc]:Ba},zs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gh=Math.PI/180,cc=180/Math.PI;function Nr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ai[i&255]+Ai[i>>8&255]+Ai[i>>16&255]+Ai[i>>24&255]+"-"+Ai[t&255]+Ai[t>>8&255]+"-"+Ai[t>>16&15|64]+Ai[t>>24&255]+"-"+Ai[e&63|128]+Ai[e>>8&255]+"-"+Ai[e>>16&255]+Ai[e>>24&255]+Ai[n&255]+Ai[n>>8&255]+Ai[n>>16&255]+Ai[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function _m(i,t){return(i%t+t)%t}function Vh(i,t,e){return(1-e)*i+e*t}function ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Th(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(i,t){if(t.constructor===Float32Array)return i;let e=Th(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function rp(i,t){if(t.constructor===Float32Array)return i;let e=Th(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var sf=class sf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=nn(this.x,t.x,e.x),this.y=nn(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=nn(this.x,t,e),this.y=nn(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sf.prototype.isVector2=!0;var Nt=sf,ks=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],I=r[a+3];if(p!==I||l!==d||c!==f||u!==g){let _=l*d+c*f+u*g+p*I;_<0&&(d=-d,f=-f,g=-g,I=-I,_=-_);let y=1-o;if(_<.9995){let S=Math.acos(_),L=Math.sin(S);y=Math.sin(y*S)/L,o=Math.sin(o*S)/L,l=l*y+d*o,c=c*y+f*o,u=u*y+g*o,p=p*y+I*o}else{l=l*y+d*o,c=c*y+f*o,u=u*y+g*o,p=p*y+I*o;let S=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=S,c*=S,u*=S,p*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*p+l*f-c*d,t[e+1]=l*g+u*d+c*p-o*f,t[e+2]=c*g+u*f+o*d-l*p,t[e+3]=u*g-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"YXZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"ZXY":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"ZYX":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"YZX":this._x=d*u*p+c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p-d*f*g;break;case"XZY":this._x=d*u*p-c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rf=class rf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=nn(this.x,t.x,e.x),this.y=nn(this.y,t.y,e.y),this.z=nn(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=nn(this.x,t,e),this.y=nn(this.y,t,e),this.z=nn(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hh.copy(this).projectOnVector(t),this.sub(Hh)}reflect(t){return this.sub(Hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rf.prototype.isVector3=!0;var k=rf,Hh=new k,kf=new ks,af=class af{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],f=n[5],g=n[8],I=s[0],_=s[3],y=s[6],S=s[1],L=s[4],E=s[7],F=s[2],N=s[5],M=s[8];return r[0]=a*I+o*S+l*F,r[3]=a*_+o*L+l*N,r[6]=a*y+o*E+l*M,r[1]=c*I+u*S+p*F,r[4]=c*_+u*L+p*N,r[7]=c*y+u*E+p*M,r[2]=d*I+f*S+g*F,r[5]=d*_+f*L+g*N,r[8]=d*y+f*E+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/g;return t[0]=p*I,t[1]=(s*c-u*n)*I,t[2]=(o*n-s*a)*I,t[3]=d*I,t[4]=(u*e-s*l)*I,t[5]=(s*r-o*e)*I,t[6]=f*I,t[7]=(n*l-c*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wh.makeScale(t,e)),this}rotate(t){return Mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wh.makeRotation(-t)),this}translate(t,e){return Mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};af.prototype.isMatrix3=!0;var Fe=af,Wh=new Fe,Gf=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vf=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ym(){let i={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===En&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===En&&(s.r=Oa(s.r),s.g=Oa(s.g),s.b=Oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fr?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Eo]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:Gf,fromXYZ:Vf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:n,transfer:En,toXYZ:Gf,fromXYZ:Vf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}var cn=ym();function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ya,hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ya===void 0&&(ya=ka("canvas")),ya.width=t.width,ya.height=t.height;let s=ya.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ya}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ka("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rr(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rr(e[n]/255)*255):e[n]=rr(e[n]);return{data:e,width:t.width,height:t.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vm=0,Va=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xh(s[a].image)):r.push(Xh(s[a]))}else r=Xh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var bm=0,qh=new k,Ci=class i extends zs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fs,s=Fs,r=Oi,a=hr,o=Es,l=qi,c=i.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Nr(),this.name="",this.source=new Va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qh).x}get height(){return this.source.getSize(qh).y}get depth(){return this.source.getSize(qh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case Fs:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case Fs:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=zu;Ci.DEFAULT_ANISOTROPY=1;var of=class of{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],g=l[9],I=l[2],_=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-I)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+I)<.1&&Math.abs(g+_)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,E=(f+1)/2,F=(y+1)/2,N=(u+d)/4,M=(p+I)/4,A=(g+_)/4;return L>E&&L>F?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=N/n,r=M/n):E>F?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=N/s,r=A/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=M/r,s=A/r),this.set(n,s,r,e),this}let S=Math.sqrt((_-g)*(_-g)+(p-I)*(p-I)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(_-g)/S,this.y=(p-I)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=nn(this.x,t.x,e.x),this.y=nn(this.y,t.y,e.y),this.z=nn(this.z,t.z,e.z),this.w=nn(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=nn(this.x,t,e),this.y=nn(this.y,t,e),this.z=nn(this.z,t,e),this.w=nn(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};of.prototype.isVector4=!0;var Vn=of,uc=class extends zs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Vn(0,0,t,e),this.scissorTest=!1,this.viewport=new Vn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ci({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Va(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Co=class extends Ci{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends Ci{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fc=class Fc{constructor(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_)}set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=s,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=p,y[14]=d,y[3]=f,y[7]=g,y[11]=I,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/va.setFromMatrixColumn(t,0).length(),r=1/va.setFromMatrixColumn(t,1).length(),a=1/va.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,g=o*u,I=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=d-I*c,e[9]=-o*l,e[2]=I-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,g=c*u,I=c*p;e[0]=d+I*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=I+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,g=c*u,I=c*p;e[0]=d-I*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=I-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,g=o*u,I=o*p;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+I,e[1]=l*p,e[5]=I*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,I=o*c;e[0]=l*u,e[4]=I-d*p,e[8]=g*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+g,e[10]=d-I*p}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,I=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+I,e[5]=a*u,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*u,e[10]=I*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mm,t,Sm)}lookAt(t,e,n){let s=this.elements;return ji.subVectors(t,e),ji.lengthSq()===0&&(ji.z=1),ji.normalize(),vr.crossVectors(n,ji),vr.lengthSq()===0&&(Math.abs(n.z)===1?ji.x+=1e-4:ji.z+=1e-4,ji.normalize(),vr.crossVectors(n,ji)),vr.normalize(),wl.crossVectors(ji,vr),s[0]=vr.x,s[4]=wl.x,s[8]=ji.x,s[1]=vr.y,s[5]=wl.y,s[9]=ji.y,s[2]=vr.z,s[6]=wl.z,s[10]=ji.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],f=n[13],g=n[2],I=n[6],_=n[10],y=n[14],S=n[3],L=n[7],E=n[11],F=n[15],N=s[0],M=s[4],A=s[8],q=s[12],z=s[1],W=s[5],Q=s[9],ut=s[13],V=s[2],at=s[6],ct=s[10],st=s[14],Pt=s[3],lt=s[7],Mt=s[11],xt=s[15];return r[0]=a*N+o*z+l*V+c*Pt,r[4]=a*M+o*W+l*at+c*lt,r[8]=a*A+o*Q+l*ct+c*Mt,r[12]=a*q+o*ut+l*st+c*xt,r[1]=u*N+p*z+d*V+f*Pt,r[5]=u*M+p*W+d*at+f*lt,r[9]=u*A+p*Q+d*ct+f*Mt,r[13]=u*q+p*ut+d*st+f*xt,r[2]=g*N+I*z+_*V+y*Pt,r[6]=g*M+I*W+_*at+y*lt,r[10]=g*A+I*Q+_*ct+y*Mt,r[14]=g*q+I*ut+_*st+y*xt,r[3]=S*N+L*z+E*V+F*Pt,r[7]=S*M+L*W+E*at+F*lt,r[11]=S*A+L*Q+E*ct+F*Mt,r[15]=S*q+L*ut+E*st+F*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],g=t[3],I=t[7],_=t[11],y=t[15],S=l*f-c*d,L=o*f-c*p,E=o*d-l*p,F=a*f-c*u,N=a*d-l*u,M=a*p-o*u;return e*(I*S-_*L+y*E)-n*(g*S-_*F+y*N)+s*(g*L-I*F+y*M)-r*(g*E-I*N+_*M)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],g=t[12],I=t[13],_=t[14],y=t[15],S=e*o-n*a,L=e*l-s*a,E=e*c-r*a,F=n*l-s*o,N=n*c-r*o,M=s*c-r*l,A=u*I-p*g,q=u*_-d*g,z=u*y-f*g,W=p*_-d*I,Q=p*y-f*I,ut=d*y-f*_,V=S*ut-L*Q+E*W+F*z-N*q+M*A;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let at=1/V;return t[0]=(o*ut-l*Q+c*W)*at,t[1]=(s*Q-n*ut-r*W)*at,t[2]=(I*M-_*N+y*F)*at,t[3]=(d*N-p*M-f*F)*at,t[4]=(l*z-a*ut-c*q)*at,t[5]=(e*ut-s*z+r*q)*at,t[6]=(_*E-g*M-y*L)*at,t[7]=(u*M-d*E+f*L)*at,t[8]=(a*Q-o*z+c*A)*at,t[9]=(n*z-e*Q-r*A)*at,t[10]=(g*N-I*E+y*S)*at,t[11]=(p*E-u*N-f*S)*at,t[12]=(o*q-a*W-l*A)*at,t[13]=(e*W-n*q+s*A)*at,t[14]=(I*L-g*F-_*S)*at,t[15]=(u*F-p*L+d*S)*at,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,g=r*p,I=a*u,_=a*p,y=o*p,S=l*c,L=l*u,E=l*p,F=n.x,N=n.y,M=n.z;return s[0]=(1-(I+y))*F,s[1]=(f+E)*F,s[2]=(g-L)*F,s[3]=0,s[4]=(f-E)*N,s[5]=(1-(d+y))*N,s[6]=(_+S)*N,s[7]=0,s[8]=(g+L)*M,s[9]=(_-S)*M,s[10]=(1-(d+I))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=va.set(s[0],s[1],s[2]).length(),o=va.set(s[4],s[5],s[6]).length(),l=va.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_s.copy(this);let c=1/a,u=1/o,p=1/l;return _s.elements[0]*=c,_s.elements[1]*=c,_s.elements[2]*=c,_s.elements[4]*=u,_s.elements[5]*=u,_s.elements[6]*=u,_s.elements[8]*=p,_s.elements[9]*=p,_s.elements[10]*=p,e.setFromRotationMatrix(_s),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=os,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,I;if(l)g=r/(a-r),I=a*r/(a-r);else if(o===os)g=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===za)g=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=I,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=os,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,I;if(l)g=1/(a-r),I=a/(a-r);else if(o===os)g=-2/(a-r),I=-(a+r)/(a-r);else if(o===za)g=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=I,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fc.prototype.isMatrix4=!0;var In=Fc,va=new k,_s=new In,Mm=new k(0,0,0),Sm=new k(1,1,1),vr=new k,wl=new k,ji=new k,Hf=new In,Wf=new ks,or=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};or.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wm=0,Xf=new k,ba=new ks,Qs=new In,Tl=new k,po=new k,Tm=new k,Em=new ks,qf=new k(1,0,0),Yf=new k(0,1,0),$f=new k(0,0,1),Zf={type:"added"},Am={type:"removed"},Ma={type:"childadded",child:null},Yh={type:"childremoved",child:null},mi=class i extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new or,n=new ks,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new In},normalMatrix:{value:new Fe}}),this.matrix=new In,this.matrixWorld=new In,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ba.setFromAxisAngle(t,e),this.quaternion.multiply(ba),this}rotateOnWorldAxis(t,e){return ba.setFromAxisAngle(t,e),this.quaternion.premultiply(ba),this}rotateX(t){return this.rotateOnAxis(qf,t)}rotateY(t){return this.rotateOnAxis(Yf,t)}rotateZ(t){return this.rotateOnAxis($f,t)}translateOnAxis(t,e){return Xf.copy(t).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qf,t)}translateY(t){return this.translateOnAxis(Yf,t)}translateZ(t){return this.translateOnAxis($f,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tl.copy(t):Tl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qs.lookAt(po,Tl,this.up):Qs.lookAt(Tl,po,this.up),this.quaternion.setFromRotationMatrix(Qs),s&&(Qs.extractRotation(s.matrixWorld),ba.setFromRotationMatrix(Qs),this.quaternion.premultiply(ba.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zf),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Am),Yh.child=t,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zf),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,t,Tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,Em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mi.DEFAULT_UP=new k(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ye=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rm={type:"move"},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let I of t.hand.values()){let _=e.getJointPose(I,n),y=this._getHandJoint(c,I);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},El={h:0,s:0,l:0};function $h(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=cn.workingColorSpace){return this.r=t,this.g=e,this.b=n,cn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=cn.workingColorSpace){if(t=_m(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$h(a,r,t+1/3),this.g=$h(a,r,t),this.b=$h(a,r,t-1/3)}return cn.colorSpaceToWorking(this,s),this}setStyle(t,e=ii){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let n=ap[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return cn.workingToColorSpace(Ri.copy(this),t),Math.round(nn(Ri.r*255,0,255))*65536+Math.round(nn(Ri.g*255,0,255))*256+Math.round(nn(Ri.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=cn.workingColorSpace){cn.workingToColorSpace(Ri.copy(this),e);let n=Ri.r,s=Ri.g,r=Ri.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=cn.workingColorSpace){return cn.workingToColorSpace(Ri.copy(this),e),t.r=Ri.r,t.g=Ri.g,t.b=Ri.b,t}getStyle(t=ii){cn.workingToColorSpace(Ri.copy(this),t);let e=Ri.r,n=Ri.g,s=Ri.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(br),this.setHSL(br.h+t,br.s+e,br.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(br),t.getHSL(El);let n=Vh(br.h,El.h,e),s=Vh(br.s,El.s,e),r=Vh(br.l,El.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ri=new Me;Me.NAMES=ap;var Zr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ys=new k,tr=new k,Zh=new k,er=new k,Sa=new k,wa=new k,Jf=new k,Jh=new k,Kh=new k,jh=new k,Qh=new Vn,tu=new Vn,eu=new Vn,sr=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ys.subVectors(t,e),s.cross(ys);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ys.subVectors(s,e),tr.subVectors(n,e),Zh.subVectors(t,e);let a=ys.dot(ys),o=ys.dot(tr),l=ys.dot(Zh),c=tr.dot(tr),u=tr.dot(Zh),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,er.x),l.addScaledVector(a,er.y),l.addScaledVector(o,er.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qh.setScalar(0),tu.setScalar(0),eu.setScalar(0),Qh.fromBufferAttribute(t,e),tu.fromBufferAttribute(t,n),eu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qh,r.x),a.addScaledVector(tu,r.y),a.addScaledVector(eu,r.z),a}static isFrontFacing(t,e,n,s){return ys.subVectors(n,e),tr.subVectors(t,e),ys.cross(tr).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ys.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),ys.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Sa.subVectors(s,n),wa.subVectors(r,n),Jh.subVectors(t,n);let l=Sa.dot(Jh),c=wa.dot(Jh);if(l<=0&&c<=0)return e.copy(n);Kh.subVectors(t,s);let u=Sa.dot(Kh),p=wa.dot(Kh);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Sa,a);jh.subVectors(t,r);let f=Sa.dot(jh),g=wa.dot(jh);if(g>=0&&f<=g)return e.copy(r);let I=f*c-l*g;if(I<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wa,o);let _=u*g-f*p;if(_<=0&&p-u>=0&&f-g>=0)return Jf.subVectors(r,s),o=(p-u)/(p-u+(f-g)),e.copy(s).addScaledVector(Jf,o);let y=1/(_+I+d);return a=I*y,o=d*y,e.copy(n).addScaledVector(Sa,a).addScaledVector(wa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gs=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vs.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vs.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vs.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vs):vs.fromBufferAttribute(r,a),vs.applyMatrix4(t.matrixWorld),this.expandByPoint(vs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Al.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(t.matrixWorld),this.union(Al)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vs),vs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mo),Rl.subVectors(this.max,mo),Ta.subVectors(t.a,mo),Ea.subVectors(t.b,mo),Aa.subVectors(t.c,mo),Mr.subVectors(Ea,Ta),Sr.subVectors(Aa,Ea),Xr.subVectors(Ta,Aa);let e=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-Xr.z,Xr.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,Xr.z,0,-Xr.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-Xr.y,Xr.x,0];return!nu(e,Ta,Ea,Aa,Rl)||(e=[1,0,0,0,1,0,0,0,1],!nu(e,Ta,Ea,Aa,Rl))?!1:(Cl.crossVectors(Mr,Sr),e=[Cl.x,Cl.y,Cl.z],nu(e,Ta,Ea,Aa,Rl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nr=[new k,new k,new k,new k,new k,new k,new k,new k],vs=new k,Al=new Gs,Ta=new k,Ea=new k,Aa=new k,Mr=new k,Sr=new k,Xr=new k,mo=new k,Rl=new k,Cl=new k,qr=new k;function nu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qr.fromArray(i,r);let o=s.x*Math.abs(qr.x)+s.y*Math.abs(qr.y)+s.z*Math.abs(qr.z),l=t.dot(qr),c=e.dot(qr),u=n.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ni=new k,Il=new Nt,Cm=0,ts=class extends zs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=ws,this.version=0,this._normalizationScale=t!==void 0?Th(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Il.fromBufferAttribute(this,e),Il.applyMatrix3(t),this.setXY(e,Il.x,Il.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix3(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rp(t,this.array)}};var Io=class extends ts{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Po=class extends ts{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Pe=class extends ts{constructor(t,e,n){super(new Float32Array(t),e,n)}},Im=new Gs,go=new k,iu=new k,Jr=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Im.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;go.subVectors(t,this.center);let e=go.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(go,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(iu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(go.copy(t.center).add(iu)),this.expandByPoint(go.copy(t.center).sub(iu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pm=0,as=new In,su=new mi,Ra=new k,Qi=new Gs,xo=new Gs,di=new k,Pn=class i extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?Po:Io)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return as.makeRotationFromQuaternion(t),this.applyMatrix4(as),this}rotateX(t){return as.makeRotationX(t),this.applyMatrix4(as),this}rotateY(t){return as.makeRotationY(t),this.applyMatrix4(as),this}rotateZ(t){return as.makeRotationZ(t),this.applyMatrix4(as),this}translate(t,e,n){return as.makeTranslation(t,e,n),this.applyMatrix4(as),this}scale(t,e,n){return as.makeScale(t,e,n),this.applyMatrix4(as),this}lookAt(t){return su.lookAt(t),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ra).negate(),this.translate(Ra.x,Ra.y,Ra.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qi.setFromBufferAttribute(r),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Qi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];xo.setFromBufferAttribute(o),this.morphTargetsRelative?(di.addVectors(Qi.min,xo.min),Qi.expandByPoint(di),di.addVectors(Qi.max,xo.max),Qi.expandByPoint(di)):(Qi.expandByPoint(xo.min),Qi.expandByPoint(xo.max))}Qi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)di.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(di));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)di.fromBufferAttribute(o,c),l&&(Ra.fromBufferAttribute(t,c),di.add(Ra)),s=Math.max(s,n.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ts(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let q=0;q<n.count;q++)o[q]=new k,l[q]=new k;let u=new k,p=new k,d=new k,f=new Nt,g=new Nt,I=new Nt,_=new k,y=new k;function S(q,z,W){c[q]=c[z]=c[W]=1,u.fromBufferAttribute(n,q),p.fromBufferAttribute(n,z),d.fromBufferAttribute(n,W),f.fromBufferAttribute(r,q),g.fromBufferAttribute(r,z),I.fromBufferAttribute(r,W),p.sub(u),d.sub(u),g.sub(f),I.sub(f);let Q=1/(g.x*I.y-I.x*g.y);isFinite(Q)&&(_.copy(p).multiplyScalar(I.y).addScaledVector(d,-g.y).multiplyScalar(Q),y.copy(d).multiplyScalar(g.x).addScaledVector(p,-I.x).multiplyScalar(Q),o[q].add(_),o[z].add(_),o[W].add(_),l[q].add(y),l[z].add(y),l[W].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,z=L.length;q<z;++q){let W=L[q],Q=W.start,ut=W.count;for(let V=Q,at=Q+ut;V<at;V+=3)S(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let E=new k,F=new k,N=new k,M=new k;function A(q){N.fromBufferAttribute(s,q),M.copy(N);let z=o[q];E.copy(z),E.sub(N.multiplyScalar(N.dot(z))).normalize(),F.crossVectors(M,z);let Q=F.dot(l[q])<0?-1:1;a.setXYZW(q,E.x,E.y,E.z,Q)}for(let q=0,z=n.count;q<z;++q)c[q]&&A(q);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ts(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,p=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),I=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,_),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(I,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)di.fromBufferAttribute(t,e),di.normalize(),t.setXYZ(e,di.x,di.y,di.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let I=0,_=l.length;I<_;I++){o.isInterleavedBufferAttribute?f=l[I]*o.data.stride+o.offset:f=l[I]*u;for(let y=0;y<u;y++)d[g++]=c[f++]}return new ts(d,u,p)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ju,this.updateRanges=[],this.version=0,this.uuid=Nr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Kf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Kf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Kf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Nr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ui=new k,Xa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Th(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.applyMatrix4(t),this.setXYZ(e,Ui.x,Ui.y,Ui.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.applyNormalMatrix(t),this.setXYZ(e,Ui.x,Ui.y,Ui.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.transformDirection(t),this.setXYZ(e,Ui.x,Ui.y,Ui.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ts(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sp(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rp(t,this.data.array)}},ru=new k,Lm=new k,Dm=new Fe,Fi=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ru.subVectors(n,e).cross(Lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ru),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dm.getNormalMatrix(t),s=this.coplanarPoint(ru).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Nm=0,Vs=class extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=to,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Pu,this.blendEquation=aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jl,this.stencilZFail=jl,this.stencilZPass=jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ai=class extends Vs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ca,_o=new k,Ia=new k,Pa=new k,La=new Nt,yo=new Nt,op=new In,Pl=new k,vo=new k,Ll=new k,jf=new Nt,au=new Nt,Qf=new Nt,gi=class extends mi{constructor(t=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Ca===void 0){Ca=new Pn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lo(e,5);Ca.setIndex([0,1,2,0,2,3]),Ca.setAttribute("position",new Xa(n,3,0,!1)),Ca.setAttribute("uv",new Xa(n,2,3,!1))}this.geometry=Ca,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ia.setFromMatrixScale(this.matrixWorld),op.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ia.multiplyScalar(-Pa.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Dl(Pl.set(-.5,-.5,0),Pa,a,Ia,s,r),Dl(vo.set(.5,-.5,0),Pa,a,Ia,s,r),Dl(Ll.set(.5,.5,0),Pa,a,Ia,s,r),jf.set(0,0),au.set(1,0),Qf.set(1,1);let o=t.ray.intersectTriangle(Pl,vo,Ll,!1,_o);if(o===null&&(Dl(vo.set(-.5,.5,0),Pa,a,Ia,s,r),au.set(0,1),o=t.ray.intersectTriangle(Pl,Ll,vo,!1,_o),o===null))return;let l=t.ray.origin.distanceTo(_o);l<t.near||l>t.far||e.push({distance:l,point:_o.clone(),uv:sr.getInterpolation(_o,Pl,vo,Ll,jf,au,Qf,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Dl(i,t,e,n,s,r){La.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(yo.x=r*La.x-s*La.y,yo.y=s*La.x+r*La.y):yo.copy(La),i.copy(t),i.x+=yo.x,i.y+=yo.y,i.applyMatrix4(op)}var ir=new k,ou=new k,Nl=new k,Ul=new k,qa=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ir)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ir.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ir.copy(this.origin).addScaledVector(this.direction,e),ir.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ou.copy(t).add(e).multiplyScalar(.5),Nl.copy(e).sub(t).normalize(),Ul.copy(this.origin).sub(ou);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nl),o=Ul.dot(this.direction),l=-Ul.dot(Nl),c=Ul.lengthSq(),u=Math.abs(1-a*a),p,d,f,g;if(u>0)if(p=a*l-o,d=a*o-l,g=r*u,p>=0)if(d>=-g)if(d<=g){let I=1/u;p*=I,d*=I,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ou).addScaledVector(Nl,d),f}intersectSphere(t,e){if(t.radius<0)return null;ir.subVectors(t.center,this.origin);let n=ir.dot(this.direction),s=ir.dot(ir)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ir)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,I=e.y-a.y,_=e.z-a.z,y=n.x-a.x,S=n.y-a.y,L=n.z-a.z,E=Math.abs(l),F=Math.abs(c),N=Math.abs(u),M,A,q,z,W,Q,ut,V,at,ct,st,Pt;if(E>=F&&E>=N?(q=l,Q=p,at=g,Pt=y,l>=0?(M=c,A=u,z=d,W=f,ut=I,V=_,ct=S,st=L):(M=u,A=c,z=f,W=d,ut=_,V=I,ct=L,st=S)):F>=N?(q=c,Q=d,at=I,Pt=S,c>=0?(M=u,A=l,z=f,W=p,ut=_,V=g,ct=L,st=y):(M=l,A=u,z=p,W=f,ut=g,V=_,ct=y,st=L)):(q=u,Q=f,at=_,Pt=L,u>=0?(M=l,A=c,z=p,W=d,ut=g,V=I,ct=y,st=S):(M=c,A=l,z=d,W=p,ut=I,V=g,ct=S,st=y)),q===0)return null;let lt=M/q,Mt=A/q,xt=1/q,Ht=z-lt*Q,le=W-Mt*Q,pt=ut-lt*at,$t=V-Mt*at,ie=ct-lt*Pt,xe=st-Mt*Pt,Kt=ie*$t-xe*pt,re=Ht*xe-le*ie,He=pt*le-$t*Ht;if(s){if(Kt<0||re<0||He<0)return null}else if((Kt<0||re<0||He<0)&&(Kt>0||re>0||He>0))return null;let _e=Kt+re+He;if(_e===0)return null;let Oe=xt*(Kt*Q+re*at+He*Pt);return(_e>0?Oe<0:Oe>0)?null:this.at(Oe/_e,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class extends Vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},td=new In,Yr=new qa,Fl=new Jr,ed=new k,Ol=new k,Bl=new k,zl=new k,lu=new k,kl=new k,nd=new k,Gl=new k,mt=class extends mi{constructor(t=new Pn,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(lu.fromBufferAttribute(p,t),a?kl.addScaledVector(lu,u):kl.addScaledVector(lu.sub(e),u))}e.add(kl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),Yr.copy(t.ray).recast(t.near),!(Fl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Fl,ed)===null||Yr.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,I=d.length;g<I;g++){let _=d[g],y=a[_.materialIndex],S=Math.max(_.start,f.start),L=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let E=S,F=L;E<F;E+=3){let N=o.getX(E),M=o.getX(E+1),A=o.getX(E+2);s=Vl(this,y,t,n,c,u,p,N,M,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),I=Math.min(o.count,f.start+f.count);for(let _=g,y=I;_<y;_+=3){let S=o.getX(_),L=o.getX(_+1),E=o.getX(_+2);s=Vl(this,a,t,n,c,u,p,S,L,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,I=d.length;g<I;g++){let _=d[g],y=a[_.materialIndex],S=Math.max(_.start,f.start),L=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let E=S,F=L;E<F;E+=3){let N=E,M=E+1,A=E+2;s=Vl(this,y,t,n,c,u,p,N,M,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),I=Math.min(l.count,f.start+f.count);for(let _=g,y=I;_<y;_+=3){let S=_,L=_+1,E=_+2;s=Vl(this,a,t,n,c,u,p,S,L,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Um(i,t,e,n,s,r,a,o){let l;if(t.side===oi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Lr,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Gl);return c<e.near||c>e.far?null:{distance:c,point:Gl.clone(),object:i}}function Vl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ol),i.getVertexPosition(l,Bl),i.getVertexPosition(c,zl);let u=Um(i,t,e,n,Ol,Bl,zl,nd);if(u){let p=new k;sr.getBarycoord(nd,Ol,Bl,zl,p),s&&(u.uv=sr.getInterpolatedAttribute(s,o,l,c,p,new Nt)),r&&(u.uv1=sr.getInterpolatedAttribute(r,o,l,c,p,new Nt)),a&&(u.normal=sr.getInterpolatedAttribute(a,o,l,c,p,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};sr.getNormal(Ol,Bl,zl,d.normal),u.face=d,u.barycoord=p}return u}var dc=class extends Ci{constructor(t=null,e=1,n=1,s,r,a,o,l,c=pi,u=pi,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=new Jr,Fm=new Nt(.5,.5),Hl=new k,Er=class{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=os,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],g=r[8],I=r[9],_=r[10],y=r[11],S=r[12],L=r[13],E=r[14],F=r[15];if(s[0].setComponents(c-a,f-u,y-g,F-S).normalize(),s[1].setComponents(c+a,f+u,y+g,F+S).normalize(),s[2].setComponents(c+o,f+p,y+I,F+L).normalize(),s[3].setComponents(c-o,f-p,y-I,F-L).normalize(),n)s[4].setComponents(l,d,_,E).normalize(),s[5].setComponents(c-l,f-d,y-_,F-E).normalize();else if(s[4].setComponents(c-l,f-d,y-_,F-E).normalize(),e===os)s[5].setComponents(c+l,f+d,y+_,F+E).normalize();else if(e===za)s[5].setComponents(l,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){$r.center.set(0,0,0);let e=Fm.distanceTo(t.center);return $r.radius=.7071067811865476+e,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hl.x=s.normal.x>0?t.max.x:t.min.x,Hl.y=s.normal.y>0?t.max.y:t.min.y,Hl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},id=new In,pc=class i{constructor(){this.coordinateSystem=os,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];id.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Er),n[s].setFromProjectionMatrix(id,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Er),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Kr=class extends Vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sd=new In,xu=new qa,Wl=new Jr,Xl=new k,Ya=class extends mi{constructor(t=new Pn,e=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),Wl.radius+=r,t.ray.intersectsSphere(Wl)===!1)return;sd.copy(s).invert(),xu.copy(t.ray).applyMatrix4(sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,I=f;g<I;g++){let _=c.getX(g);Xl.fromBufferAttribute(p,_),rd(Xl,_,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=d,I=f;g<I;g++)Xl.fromBufferAttribute(p,g),rd(Xl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rd(i,t,e,n,s,r,a){let o=xu.distanceSqToPoint(i);if(o<e){let l=new k;xu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Do=class extends Ci{constructor(t=[],e=oa,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jr=class extends Ci{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var lr=class extends Ci{constructor(t,e,n=Ss,s,r,a,o=pi,l=pi,c,u=ar,p=1){if(u!==ar&&u!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},No=class extends lr{constructor(t,e=Ss,n=oa,s,r,a=pi,o=pi,l,c=ar){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uo=class extends Ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bn=class i extends Pn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(p,2));function g(I,_,y,S,L,E,F,N,M,A,q){let z=E/M,W=F/A,Q=E/2,ut=F/2,V=N/2,at=M+1,ct=A+1,st=0,Pt=0,lt=new k;for(let Mt=0;Mt<ct;Mt++){let xt=Mt*W-ut;for(let Ht=0;Ht<at;Ht++){let le=Ht*z-Q;lt[I]=le*S,lt[_]=xt*L,lt[y]=V,c.push(lt.x,lt.y,lt.z),lt[I]=0,lt[_]=0,lt[y]=N>0?1:-1,u.push(lt.x,lt.y,lt.z),p.push(Ht/M),p.push(1-Mt/A),st+=1}}for(let Mt=0;Mt<A;Mt++)for(let xt=0;xt<M;xt++){let Ht=d+xt+at*Mt,le=d+xt+at*(Mt+1),pt=d+(xt+1)+at*(Mt+1),$t=d+(xt+1)+at*Mt;l.push(Ht,le,$t),l.push(le,pt,$t),Pt+=6}o.addGroup(f,Pt,q),f+=Pt,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var si=class i extends Pn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new k,u=new Nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ii=class i extends Pn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],g=0,I=[],_=n/2,y=0;S(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function S(){let E=new k,F=new k,N=0,M=(e-t)/n;for(let A=0;A<=r;A++){let q=[],z=A/r,W=z*(e-t)+t;for(let Q=0;Q<=s;Q++){let ut=Q/s,V=ut*l+o,at=Math.sin(V),ct=Math.cos(V);F.x=W*at,F.y=-z*n+_,F.z=W*ct,p.push(F.x,F.y,F.z),E.set(at,M,ct).normalize(),d.push(E.x,E.y,E.z),f.push(ut,1-z),q.push(g++)}I.push(q)}for(let A=0;A<s;A++)for(let q=0;q<r;q++){let z=I[q][A],W=I[q+1][A],Q=I[q+1][A+1],ut=I[q][A+1];(t>0||q!==0)&&(u.push(z,W,ut),N+=3),(e>0||q!==r-1)&&(u.push(W,Q,ut),N+=3)}c.addGroup(y,N,0),y+=N}function L(E){let F=g,N=new Nt,M=new k,A=0,q=E===!0?t:e,z=E===!0?1:-1;for(let Q=1;Q<=s;Q++)p.push(0,_*z,0),d.push(0,z,0),f.push(.5,.5),g++;let W=g;for(let Q=0;Q<=s;Q++){let V=Q/s*l+o,at=Math.cos(V),ct=Math.sin(V);M.x=q*ct,M.y=_*z,M.z=q*at,p.push(M.x,M.y,M.z),d.push(0,z,0),N.x=at*.5+.5,N.y=ct*.5*z+.5,f.push(N.x,N.y),g++}for(let Q=0;Q<s;Q++){let ut=F+Q,V=W+Q;E===!0?u.push(V,V+1,ut):u.push(V+1,V,ut),A+=3}c.addGroup(y,A,E===!0?1:2),y+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xi=class i extends Ii{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mc=class i extends Pn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let L=new k,E=new k,F=new k;for(let N=0;N<e.length;N+=3)f(e[N+0],L),f(e[N+1],E),f(e[N+2],F),l(L,E,F,S)}function l(S,L,E,F){let N=F+1,M=[];for(let A=0;A<=N;A++){M[A]=[];let q=S.clone().lerp(E,A/N),z=L.clone().lerp(E,A/N),W=N-A;for(let Q=0;Q<=W;Q++)Q===0&&A===N?M[A][Q]=q:M[A][Q]=q.clone().lerp(z,Q/W)}for(let A=0;A<N;A++)for(let q=0;q<2*(N-A)-1;q++){let z=Math.floor(q/2);q%2===0?(d(M[A][z+1]),d(M[A+1][z]),d(M[A][z])):(d(M[A][z+1]),d(M[A+1][z+1]),d(M[A+1][z]))}}function c(S){let L=new k;for(let E=0;E<r.length;E+=3)L.x=r[E+0],L.y=r[E+1],L.z=r[E+2],L.normalize().multiplyScalar(S),r[E+0]=L.x,r[E+1]=L.y,r[E+2]=L.z}function u(){let S=new k;for(let L=0;L<r.length;L+=3){S.x=r[L+0],S.y=r[L+1],S.z=r[L+2];let E=_(S)/2/Math.PI+.5,F=y(S)/Math.PI+.5;a.push(E,1-F)}g(),p()}function p(){for(let S=0;S<a.length;S+=6){let L=a[S+0],E=a[S+2],F=a[S+4],N=Math.max(L,E,F),M=Math.min(L,E,F);N>.9&&M<.1&&(L<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),F<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,L){let E=S*3;L.x=t[E+0],L.y=t[E+1],L.z=t[E+2]}function g(){let S=new k,L=new k,E=new k,F=new k,N=new Nt,M=new Nt,A=new Nt;for(let q=0,z=0;q<r.length;q+=9,z+=6){S.set(r[q+0],r[q+1],r[q+2]),L.set(r[q+3],r[q+4],r[q+5]),E.set(r[q+6],r[q+7],r[q+8]),N.set(a[z+0],a[z+1]),M.set(a[z+2],a[z+3]),A.set(a[z+4],a[z+5]),F.copy(S).add(L).add(E).divideScalar(3);let W=_(F);I(N,z+0,S,W),I(M,z+2,L,W),I(A,z+4,E,W)}}function I(S,L,E,F){F<0&&S.x===1&&(a[L]=S.x-1),E.x===0&&E.z===0&&(a[L]=F/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function y(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var es=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],a=[],o=new k,l=new In;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(nn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(nn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},$a=class extends es{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gc=class extends $a{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ad=new k,od=new k,cu=new ju,hu=new ju,uu=new ju,xc=class extends es{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(od.subVectors(s[0],s[1]).add(s[0]),c=od);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ad.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ad),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),I=Math.pow(p.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f);I<1e-4&&(I=1),g<1e-4&&(g=I),_<1e-4&&(_=I),cu.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,I,_),hu.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,I,_),uu.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,I,_)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),hu.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),uu.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(cu.calc(l),hu.calc(l),uu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ld(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Om(i,t){let e=1-i;return e*e*t}function Bm(i,t){return 2*(1-i)*i*t}function zm(i,t){return i*i*t}function So(i,t,e,n){return Om(i,t)+Bm(i,e)+zm(i,n)}function km(i,t){let e=1-i;return e*e*e*t}function Gm(i,t){let e=1-i;return 3*e*e*i*t}function Vm(i,t){return 3*(1-i)*i*i*t}function Hm(i,t){return i*i*i*t}function wo(i,t,e,n,s){return km(i,t)+Gm(i,e)+Vm(i,n)+Hm(i,s)}var Fo=class extends es{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wo(t,s.x,r.x,a.x,o.x),wo(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_c=class extends es{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wo(t,s.x,r.x,a.x,o.x),wo(t,s.y,r.y,a.y,o.y),wo(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends es{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends es{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends es{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(So(t,s.x,r.x,a.x),So(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vc=class extends es{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(So(t,s.x,r.x,a.x),So(t,s.y,r.y,a.y),So(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends es{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ld(o,l.x,c.x,u.x,p.x),ld(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},_u=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:xc,CubicBezierCurve:Fo,CubicBezierCurve3:_c,EllipseCurve:$a,LineCurve:Oo,LineCurve3:yc,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:vc,SplineCurve:zo}),bc=class extends es{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _u[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _u[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ko=class extends bc{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Oo(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Bo(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Fo(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new $a(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cr=class extends ko{constructor(t){super(t),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ko().fromJSON(s))}return this}};function Wm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>p&&(p=g)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return Go(r,a,e,o,l,c,0),a}function lp(i,t,e,n,s){let r;if(s===a0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=cd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=cd(a/n|0,i[a],i[a+1],r);return r&&Za(r,r.next)&&(Ho(r),r=r.next),r}function Qr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Za(e,e.next)||$n(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Go(i,t,e,n,s,r,a){if(!i)return;!a&&r&&t0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?qm(i,n,s,r):Xm(i)){t.push(l.i,i.i,c.i),Ho(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ym(Qr(i),t),Go(i,t,e,n,s,r,2)):a===2&&$m(i,t,e,n,s,r):Go(Qr(i),t,e,n,s,r,1);break}}}function Xm(i){let t=i.prev,e=i,n=i.next;if($n(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=f&&bo(s,o,r,l,a,c,g.x,g.y)&&$n(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qm(i,t,e,n){let s=i.prev,r=i,a=i.next;if($n(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,p,d),I=Math.max(o,l,c),_=Math.max(u,p,d),y=yu(f,g,t,e,n),S=yu(I,_,t,e,n),L=i.prevZ,E=i.nextZ;for(;L&&L.z>=y&&E&&E.z<=S;){if(L.x>=f&&L.x<=I&&L.y>=g&&L.y<=_&&L!==s&&L!==a&&bo(o,u,l,p,c,d,L.x,L.y)&&$n(L.prev,L,L.next)>=0||(L=L.prevZ,E.x>=f&&E.x<=I&&E.y>=g&&E.y<=_&&E!==s&&E!==a&&bo(o,u,l,p,c,d,E.x,E.y)&&$n(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;L&&L.z>=y;){if(L.x>=f&&L.x<=I&&L.y>=g&&L.y<=_&&L!==s&&L!==a&&bo(o,u,l,p,c,d,L.x,L.y)&&$n(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;E&&E.z<=S;){if(E.x>=f&&E.x<=I&&E.y>=g&&E.y<=_&&E!==s&&E!==a&&bo(o,u,l,p,c,d,E.x,E.y)&&$n(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Ym(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Za(n,s)&&hp(n,e,e.next,s)&&Vo(n,s)&&Vo(s,n)&&(t.push(n.i,e.i,s.i),Ho(e),Ho(e.next),e=i=s),e=e.next}while(e!==i);return Qr(e)}function $m(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&i0(a,o)){let l=up(a,o);a=Qr(a,a.next),l=Qr(l,l.next),Go(a,t,e,n,s,r,0),Go(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(n0(c))}s.sort(Jm);for(let r=0;r<s.length;r++)e=Km(s[r],e);return e}function Jm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Km(i,t){let e=jm(i,t);if(!e)return t;let n=up(e,i);return Qr(n,n.next),Qr(e,e.next)}function jm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Za(i,e))return e;do{if(Za(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Vo(e,i)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&Qm(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function Qm(i,t){return $n(i.prev,i,t.prev)<0&&$n(t.next,i,i.next)<0}function t0(i,t,e,n){let s=i;do s.z===0&&(s.z=yu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,e0(s)}function e0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function yu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function n0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function bo(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cp(i,t,e,n,s,r,a,o)}function i0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!s0(i,t)&&(Vo(i,t)&&Vo(t,i)&&r0(i,t)&&($n(i.prev,i,t.prev)||$n(i,t.prev,t))||Za(i,t)&&$n(i.prev,i,i.next)>0&&$n(t.prev,t,t.next)>0)}function $n(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Za(i,t){return i.x===t.x&&i.y===t.y}function hp(i,t,e,n){let s=Yl($n(i,t,e)),r=Yl($n(i,t,n)),a=Yl($n(e,n,i)),o=Yl($n(e,n,t));return!!(s!==r&&a!==o||s===0&&ql(i,e,t)||r===0&&ql(i,n,t)||a===0&&ql(e,i,n)||o===0&&ql(e,t,n))}function ql(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yl(i){return i>0?1:i<0?-1:0}function s0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vo(i,t){return $n(i.prev,i,i.next)<0?$n(i,t,i.next)>=0&&$n(i,i.prev,t)>=0:$n(i,t,i.prev)<0||$n(i,i.next,t)<0}function r0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function up(i,t){let e=vu(i.i,i.x,i.y),n=vu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cd(i,t,e,n){let s=vu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bu=class{static triangulate(t,e,n=2){return Wm(t,e,n)}},Os=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hd(t),ud(n,t);let a=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ud(n,e[l]);let o=bu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ud(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ja=class i extends Pn{constructor(t=new cr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:o0,L,E=!1,F,N,M,A;if(y){L=y.getSpacedPoints(u),E=!0,d=!1;let vt=y.isCatmullRomCurve3?y.closed:!1;F=y.computeFrenetFrames(u,vt),N=new k,M=new k,A=new k}d||(_=0,f=0,g=0,I=0);let q=o.extractPoints(c),z=q.shape,W=q.holes;if(!Os.isClockWise(z)){z=z.reverse();for(let vt=0,kt=W.length;vt<kt;vt++){let Rt=W[vt];Os.isClockWise(Rt)&&(W[vt]=Rt.reverse())}}function ut(vt){let Rt=10000000000000001e-36,Vt=vt[0];for(let Ut=1;Ut<=vt.length;Ut++){let Le=Ut%vt.length,ce=vt[Le],Xe=ce.x-Vt.x,qe=ce.y-Vt.y,sn=Xe*Xe+qe*qe,X=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(Vt.x),Math.abs(Vt.y)),Ee=Rt*X*X;if(sn<=Ee){vt.splice(Le,1),Ut--;continue}Vt=ce}}ut(z),W.forEach(ut);let V=W.length,at=z;for(let vt=0;vt<V;vt++){let kt=W[vt];z=z.concat(kt)}function ct(vt,kt,Rt){return kt||Ae("ExtrudeGeometry: vec does not exist"),vt.clone().addScaledVector(kt,Rt)}let st=z.length;function Pt(vt,kt,Rt){let Vt,Ut,Le,ce=vt.x-kt.x,Xe=vt.y-kt.y,qe=Rt.x-vt.x,sn=Rt.y-vt.y,X=ce*ce+Xe*Xe,Ee=ce*sn-Xe*qe;if(Math.abs(Ee)>Number.EPSILON){let Ne=Math.sqrt(X),ze=Math.sqrt(qe*qe+sn*sn),Ot=kt.x-Xe/Ne,_n=kt.y+ce/Ne,de=Rt.x-sn/ze,be=Rt.y+qe/ze,U=((de-Ot)*sn-(be-_n)*qe)/(ce*sn-Xe*qe);Vt=Ot+ce*U-vt.x,Ut=_n+Xe*U-vt.y;let T=Vt*Vt+Ut*Ut;if(T<=2)return new Nt(Vt,Ut);Le=Math.sqrt(T/2)}else{let Ne=!1;ce>Number.EPSILON?qe>Number.EPSILON&&(Ne=!0):ce<-Number.EPSILON?qe<-Number.EPSILON&&(Ne=!0):Math.sign(Xe)===Math.sign(sn)&&(Ne=!0),Ne?(Vt=-Xe,Ut=ce,Le=Math.sqrt(X)):(Vt=ce,Ut=Xe,Le=Math.sqrt(X/2))}return new Nt(Vt/Le,Ut/Le)}let lt=[];for(let vt=0,kt=at.length,Rt=kt-1,Vt=vt+1;vt<kt;vt++,Rt++,Vt++)Rt===kt&&(Rt=0),Vt===kt&&(Vt=0),lt[vt]=Pt(at[vt],at[Rt],at[Vt]);let Mt=[],xt,Ht=lt.concat();for(let vt=0,kt=V;vt<kt;vt++){let Rt=W[vt];xt=[];for(let Vt=0,Ut=Rt.length,Le=Ut-1,ce=Vt+1;Vt<Ut;Vt++,Le++,ce++)Le===Ut&&(Le=0),ce===Ut&&(ce=0),xt[Vt]=Pt(Rt[Vt],Rt[Le],Rt[ce]);Mt.push(xt),Ht=Ht.concat(xt)}let le;if(_===0)le=Os.triangulateShape(at,W);else{let vt=[],kt=[];for(let Rt=0;Rt<_;Rt++){let Vt=Rt/_,Ut=f*Math.cos(Vt*Math.PI/2),Le=g*Math.sin(Vt*Math.PI/2)+I;for(let ce=0,Xe=at.length;ce<Xe;ce++){let qe=ct(at[ce],lt[ce],Le);re(qe.x,qe.y,-Ut),Vt===0&&vt.push(qe)}for(let ce=0,Xe=V;ce<Xe;ce++){let qe=W[ce];xt=Mt[ce];let sn=[];for(let X=0,Ee=qe.length;X<Ee;X++){let Ne=ct(qe[X],xt[X],Le);re(Ne.x,Ne.y,-Ut),Vt===0&&sn.push(Ne)}Vt===0&&kt.push(sn)}}le=Os.triangulateShape(vt,kt)}let pt=le.length,$t=g+I;for(let vt=0;vt<st;vt++){let kt=d?ct(z[vt],Ht[vt],$t):z[vt];E?(M.copy(F.normals[0]).multiplyScalar(kt.x),N.copy(F.binormals[0]).multiplyScalar(kt.y),A.copy(L[0]).add(M).add(N),re(A.x,A.y,A.z)):re(kt.x,kt.y,0)}for(let vt=1;vt<=u;vt++)for(let kt=0;kt<st;kt++){let Rt=d?ct(z[kt],Ht[kt],$t):z[kt];E?(M.copy(F.normals[vt]).multiplyScalar(Rt.x),N.copy(F.binormals[vt]).multiplyScalar(Rt.y),A.copy(L[vt]).add(M).add(N),re(A.x,A.y,A.z)):re(Rt.x,Rt.y,p/u*vt)}for(let vt=_-1;vt>=0;vt--){let kt=vt/_,Rt=f*Math.cos(kt*Math.PI/2),Vt=g*Math.sin(kt*Math.PI/2)+I;for(let Ut=0,Le=at.length;Ut<Le;Ut++){let ce=ct(at[Ut],lt[Ut],Vt);re(ce.x,ce.y,p+Rt)}for(let Ut=0,Le=W.length;Ut<Le;Ut++){let ce=W[Ut];xt=Mt[Ut];for(let Xe=0,qe=ce.length;Xe<qe;Xe++){let sn=ct(ce[Xe],xt[Xe],Vt);E?re(sn.x,sn.y+L[u-1].y,L[u-1].x+Rt):re(sn.x,sn.y,p+Rt)}}}ie(),xe();function ie(){let vt=s.length/3;if(d){let kt=0,Rt=st*kt;for(let Vt=0;Vt<pt;Vt++){let Ut=le[Vt];He(Ut[2]+Rt,Ut[1]+Rt,Ut[0]+Rt)}kt=u+_*2,Rt=st*kt;for(let Vt=0;Vt<pt;Vt++){let Ut=le[Vt];He(Ut[0]+Rt,Ut[1]+Rt,Ut[2]+Rt)}}else{for(let kt=0;kt<pt;kt++){let Rt=le[kt];He(Rt[2],Rt[1],Rt[0])}for(let kt=0;kt<pt;kt++){let Rt=le[kt];He(Rt[0]+st*u,Rt[1]+st*u,Rt[2]+st*u)}}n.addGroup(vt,s.length/3-vt,0)}function xe(){let vt=s.length/3,kt=0;Kt(at,kt),kt+=at.length;for(let Rt=0,Vt=W.length;Rt<Vt;Rt++){let Ut=W[Rt];Kt(Ut,kt),kt+=Ut.length}n.addGroup(vt,s.length/3-vt,1)}function Kt(vt,kt){let Rt=vt.length;for(;--Rt>=0;){let Vt=Rt,Ut=Rt-1;Ut<0&&(Ut=vt.length-1);for(let Le=0,ce=u+_*2;Le<ce;Le++){let Xe=st*Le,qe=st*(Le+1),sn=kt+Vt+Xe,X=kt+Ut+Xe,Ee=kt+Ut+qe,Ne=kt+Vt+qe;_e(sn,X,Ee,Ne)}}}function re(vt,kt,Rt){l.push(vt),l.push(kt),l.push(Rt)}function He(vt,kt,Rt){Oe(vt),Oe(kt),Oe(Rt);let Vt=s.length/3,Ut=S.generateTopUV(n,s,Vt-3,Vt-2,Vt-1);We(Ut[0]),We(Ut[1]),We(Ut[2])}function _e(vt,kt,Rt,Vt){Oe(vt),Oe(kt),Oe(Vt),Oe(kt),Oe(Rt),Oe(Vt);let Ut=s.length/3,Le=S.generateSideWallUV(n,s,Ut-6,Ut-3,Ut-2,Ut-1);We(Le[0]),We(Le[1]),We(Le[3]),We(Le[1]),We(Le[2]),We(Le[3])}function Oe(vt){s.push(l[vt*3+0]),s.push(l[vt*3+1]),s.push(l[vt*3+2])}function We(vt){r.push(vt.x),r.push(vt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return l0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _u[s.type]().fromJSON(s)),new i(n,t.options)}},o0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],I=t[r*3],_=t[r*3+1],y=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-p),new Nt(d,1-g),new Nt(I,1-y)]:[new Nt(o,1-l),new Nt(u,1-p),new Nt(f,1-g),new Nt(_,1-y)]}};function l0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bs=class i extends mc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Wo=class i extends Pn{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,p=new k,d=new Nt,f=new k,g=new k,I=new k,_=0,y=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:_=t[S+1].x-t[S].x,y=t[S+1].y-t[S].y,f.x=y*1,f.y=-_,f.z=y*0,I.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:I.normalize(),l.push(I.x,I.y,I.z);break;default:_=t[S+1].x-t[S].x,y=t[S+1].y-t[S].y,f.x=y*1,f.y=-_,f.z=y*0,g.copy(f),f.x+=I.x,f.y+=I.y,f.z+=I.z,f.normalize(),l.push(f.x,f.y,f.z),I.copy(g)}for(let S=0;S<=e;S++){let L=n+S*u*s,E=Math.sin(L),F=Math.cos(L);for(let N=0;N<=t.length-1;N++){p.x=t[N].x*E,p.y=t[N].y,p.z=t[N].x*F,a.push(p.x,p.y,p.z),d.x=S/e,d.y=N/(t.length-1),o.push(d.x,d.y);let M=l[3*N+0]*E,A=l[3*N+1],q=l[3*N+0]*F;c.push(M,A,q)}}for(let S=0;S<e;S++)for(let L=0;L<t.length-1;L++){let E=L+S*t.length,F=E,N=E+t.length,M=E+t.length+1,A=E+1;r.push(F,N,A),r.push(M,A,N)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ke=class i extends Pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],g=[],I=[],_=[];for(let y=0;y<u;y++){let S=y*d-a;for(let L=0;L<c;L++){let E=L*p-r;g.push(E,-S,0),I.push(0,0,1),_.push(L/o),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let S=0;S<o;S++){let L=S+c*y,E=S+c*(y+1),F=S+1+c*(y+1),N=S+1+c*y;f.push(L,E,N),f.push(E,F,N)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(I,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xo=class i extends Pn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],p=t,d=(e-t)/s,f=new k,g=new Nt;for(let I=0;I<=s;I++){for(let _=0;_<=n;_++){let y=r+_/n*a;f.x=p*Math.cos(y),f.y=p*Math.sin(y),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}p+=d}for(let I=0;I<s;I++){let _=I*(n+1);for(let y=0;y<n;y++){let S=y+_,L=S,E=S+n+1,F=S+n+2,N=S+1;o.push(L,E,N),o.push(E,F,N)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ta=class i extends Pn{constructor(t=new cr([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(a,2));function c(u){let p=s.length/3,d=u.extractPoints(e),f=d.shape,g=d.holes;Os.isClockWise(f)===!1&&(f=f.reverse());for(let _=0,y=g.length;_<y;_++){let S=g[_];Os.isClockWise(S)===!0&&(g[_]=S.reverse())}let I=Os.triangulateShape(f,g);for(let _=0,y=g.length;_<y;_++){let S=g[_];f=f.concat(S)}for(let _=0,y=f.length;_<y;_++){let S=f[_];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let _=0,y=I.length;_<y;_++){let S=I[_],L=S[0]+p,E=S[1]+p,F=S[2]+p;n.push(L,E,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return c0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function c0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var _i=class i extends Pn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new k,d=new k,f=[],g=[],I=[],_=[];for(let y=0;y<=n;y++){let S=[],L=y/n,E=a+L*o,F=t*Math.cos(E),N=Math.sqrt(t*t-F*F),M=0;y===0&&a===0?M=.5/e:y===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let q=A/e,z=s+q*r;p.x=-N*Math.cos(z),p.y=F,p.z=N*Math.sin(z),g.push(p.x,p.y,p.z),d.copy(p).normalize(),I.push(d.x,d.y,d.z),_.push(q+M,1-L),S.push(c++)}u.push(S)}for(let y=0;y<n;y++)for(let S=0;S<e;S++){let L=u[y][S+1],E=u[y][S],F=u[y+1][S],N=u[y+1][S+1];(y!==0||a>0)&&f.push(L,E,N),(y!==n-1||l<Math.PI)&&f.push(E,F,N)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(I,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends Pn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],p=[],d=new k,f=new k,g=new k;for(let I=0;I<=n;I++){let _=a+I/n*o;for(let y=0;y<=s;y++){let S=y/s*r;f.x=(t+e*Math.cos(_))*Math.cos(S),f.y=(t+e*Math.cos(_))*Math.sin(S),f.z=e*Math.sin(_),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),p.push(y/s),p.push(I/n)}}for(let I=1;I<=n;I++)for(let _=1;_<=s;_++){let y=(s+1)*I+_-1,S=(s+1)*(I-1)+_-1,L=(s+1)*(I-1)+_,E=(s+1)*I+_;l.push(y,S,E),l.push(S,L,E)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ca(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fd(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pi(i){let t={};for(let e=0;e<i.length;e++){let n=ca(i[e]);for(let s in n)t[s]=n[s]}return t}function fd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function h0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cn.workingColorSpace}var fp={clone:ca,merge:Pi},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hs=class extends Vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ca(t.uniforms),this.uniformsGroups=h0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Vn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new In().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mc=class extends Hs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var mn=class extends Vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Bc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sc=class extends Vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wc=class extends Vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Da(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $l(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ar=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tc=class extends Ar{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mu:r=t,o=2*e-n;break;case gu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:a=t,l=2*n-e;break;case gu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),I=g*g,_=I*g,y=-d*_+2*d*I-d*g,S=(1+d)*_+(-1.5-2*d)*I+(-.5+d)*g+1,L=(-1-f)*_+(1.5+f)*I+.5*g,E=f*_-f*I;for(let F=0;F!==o;++F)r[F]=y*a[u+F]+S*a[c+F]+L*a[l+F]+E*a[p+F];return r}},Ec=class extends Ar{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},Ac=class extends Ar{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rc=class extends Ar{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),I=1-g;for(let _=0;_!==o;++_)r[_]=a[c+_]*I+a[l+_]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let I=a[c+g],_=a[l+g],y=f*d+g*2,S=p[y],L=p[y+1],E=t*d+g*2,F=u[E],N=u[E+1],M=p0(n,e,S,F,s);r[g]=dp(M,I,L,N,_)}return r}};function dp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function d0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function p0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=dp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=d0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ns=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Da(e,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Da(t.times,Array),values:Da(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$l(t.settings)&&(n.settings={inTangents:Da(t.settings.inTangents,Array),outTangents:Da(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case To:e=this.InterpolantFactoryMethodDiscrete;break;case lc:e=this.InterpolantFactoryMethodLinear;break;case Kl:e=this.InterpolantFactoryMethodSmooth;break;case du:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return Kl;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;$l(this.settings)&&(dd(this.settings.inTangents,t),dd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$l(this.settings)&&(pd(this.settings.inTangents,t),pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ae("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ae("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ae("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&xm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ae("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let I=e[p+g];if(I!==e[d+g]||I!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$l(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function pd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ns.prototype.ValueTypeName="";ns.prototype.TimeBufferType=Float32Array;ns.prototype.ValueBufferType=Float32Array;ns.prototype.DefaultInterpolation=lc;var Rr=class extends ns{constructor(t,e,n){super(t,e,n)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=To;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}};Cc.prototype.ValueTypeName="color";var Ic=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}};Ic.prototype.ValueTypeName="number";var Pc=class extends Ar{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)ks.slerpFlat(r,0,a,c-o,a,c,l);return r}},qo=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pc(this.times,this.values,this.getValueSize(),t)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends ns{constructor(t,e,n){super(t,e,n)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=To;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}};Lc.prototype.ValueTypeName="vector";var Ql={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(md(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!md(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function md(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Dc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pp=new Dc,Ka=class{constructor(t){this.manager=t!==void 0?t:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ka.DEFAULT_MATERIAL_NAME="__DEFAULT";var Na=new WeakMap,Nc=class extends Ka{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ql.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let p=Na.get(a);p===void 0&&(p=[],Na.set(a,p)),p.push({onLoad:e,onError:s})}return a}let o=ka("img");function l(){u(),e&&e(this);let p=Na.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onLoad&&f.onLoad(this)}Na.delete(this),r.manager.itemEnd(t)}function c(p){u(),s&&s(p),Ql.remove(`image:${t}`);let d=Na.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(p)}Na.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ql.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var ea=class extends Ka{constructor(t){super(t)}load(t,e,n,s){let r=new Ci,a=new Nc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},na=class extends mi{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ir=class extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fu=new In,gd=new k,xd=new k,Yo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new In,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gd.setFromMatrixPosition(t.matrixWorld),e.position.copy(gd),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===za||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zl=new k,Jl=new ks,Us=new k,$o=class extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new In,this.projectionMatrix=new In,this.projectionMatrixInverse=new In,this.coordinateSystem=os,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zl,Jl,Us),Us.x===1&&Us.y===1&&Us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Jl,Us.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zl,Jl,Us),Us.x===1&&Us.y===1&&Us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Jl,Us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wr=new k,_d=new Nt,yd=new Nt,ri=class extends $o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,e){return this.getViewBounds(t,_d,yd),e.subVectors(yd,_d)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mu=class extends Yo{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}},ia=class extends na{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zo=class extends $o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Su=class extends Yo{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mi.DEFAULT_UP),this.updateMatrix(),this.target=new mi,this.shadow=new Su}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Jo=class extends na{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ua=-90,Fa=1,ja=class extends mi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ri(Ua,Fa,t,e);s.layers=this.layers,this.add(s);let r=new ri(Ua,Fa,t,e);r.layers=this.layers,this.add(r);let a=new ri(Ua,Fa,t,e);a.layers=this.layers,this.add(a);let o=new ri(Ua,Fa,t,e);o.layers=this.layers,this.add(o);let l=new ri(Ua,Fa,t,e);l.layers=this.layers,this.add(l);let c=new ri(Ua,Fa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===os)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=I,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uc=class extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var tf="\\[\\]\\.:\\/",m0=new RegExp("["+tf+"]","g"),ef="[^"+tf+"]",g0="[^"+tf.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",ef),_0=/(WCOD+)?/.source.replace("WCOD",g0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),b0=new RegExp("^"+x0+_0+y0+v0+"$"),M0=["material","materials","bones","map"],wu=class{constructor(t,e,n){let s=n||Bn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Bn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(t){let e=b0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bn.Composite=wu;Bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bn.prototype.GetterByBindingType=[Bn.prototype._getValue_direct,Bn.prototype._getValue_array,Bn.prototype._getValue_arrayElement,Bn.prototype._getValue_toArray];Bn.prototype.SetterByBindingTypeAndVersioning=[[Bn.prototype._setValue_direct,Bn.prototype._setValue_direct_setNeedsUpdate,Bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bn.prototype._setValue_array,Bn.prototype._setValue_array_setNeedsUpdate,Bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bn.prototype._setValue_arrayElement,Bn.prototype._setValue_arrayElement_setNeedsUpdate,Bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bn.prototype._setValue_fromArray,Bn.prototype._setValue_fromArray_setNeedsUpdate,Bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L1=new Float32Array(1);var vd=new In,sa=class{constructor(t,e,n=0,s=1/0){this.ray=new qa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(t,e=!0,n=[]){return Tu(t,this,n,e),n.sort(bd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tu(t[s],this,n,e);return n.sort(bd),n}};function bd(i,t){return i.distance-t.distance}function Tu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Tu(r[a],t,e,!0)}}var lf=class lf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lf.prototype.isMatrix2=!0;var Eu=lf;function nf(i,t,e,n){let s=S0(n);switch(e){case Wu:return i*t;case qu:return i*t/s.components*s.byteLength;case Xc:return i*t/s.components*s.byteLength;case Dr:return i*t*2/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case Xu:return i*t*3/s.components*s.byteLength;case Es:return i*t*4/s.components*s.byteLength;case Yc:return i*t*4/s.components*s.byteLength;case Qo:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zc:case Kc:return Math.max(i,16)*Math.max(t,8)/4;case $c:case Jc:return Math.max(i,8)*Math.max(t,8)/2;case jc:case Qc:case eh:case nh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case th:case il:case ih:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ah:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ph:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _h:case yh:case vh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bh:case Mh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case Sh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S0(i){switch(i){case qi:case ku:return{byteLength:1,components:1};case no:case Gu:case Ts:return{byteLength:2,components:1};case Hc:case Wc:return{byteLength:2,components:4};case Ss:case Vc:case ws:return{byteLength:4,components:1};case Vu:case Hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Fp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function I0(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],I=p[f];I.start<=g.start+g.count+1?g.count=Math.max(g.count,I.start+I.count-g.start):(++d,p[d]=I)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let I=p[f];i.bufferSubData(c,I.start*u.BYTES_PER_ELEMENT,u,I.start,I.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
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
}`,je={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:F0,aomap_fragment:O0,aomap_pars_fragment:B0,batching_pars_vertex:z0,batching_vertex:k0,begin_vertex:G0,beginnormal_vertex:V0,bsdfs:H0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:K0,color_pars_vertex:j0,color_vertex:Q0,common:tg,defaultnormal_vertex:eg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:ag,colorspace_pars_fragment:og,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:hg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:fg,fog_vertex:dg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:_g,lights_lambert_fragment:yg,lights_lambert_pars_fragment:vg,lights_pars_begin:bg,lights_toon_fragment:Sg,lights_toon_pars_fragment:wg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Ig,lights_fragment_end:Pg,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Hg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Kg,normal_vertex:jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ax,project_vertex:ox,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:dx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:_x,skinnormal_vertex:yx,specularmap_fragment:vx,specularmap_pars_fragment:bx,tonemapping_fragment:Mx,tonemapping_pars_fragment:Sx,transmission_fragment:wx,transmission_pars_fragment:Tx,uv_pars_fragment:Ex,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Fx,depth_frag:Ox,distance_vert:Bx,distance_frag:zx,equirect_vert:kx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Hx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:$x,meshmatcap_frag:Zx,meshnormal_vert:Jx,meshnormal_frag:Kx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:t_,meshphysical_frag:e_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:a_,shadow_frag:o_,sprite_vert:l_,sprite_frag:c_},ee={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},qs={basic:{uniforms:Pi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Pi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Pi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Pi([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Pi([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Me(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Pi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Pi([ee.points,ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Pi([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Pi([ee.common,ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Pi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Pi([ee.sprite,ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Pi([ee.common,ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Pi([ee.lights,ee.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};qs.physical={uniforms:Pi([qs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Eh={r:0,b:0,g:0},h_=new In,Op=new Fe;Op.set(-1,0,0,0,1,0,0,0,1);function u_(i,t,e,n,s,r){let a=new Me(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(S){let L=S.isScene===!0?S.background:null;if(L&&L.isTexture){let E=S.backgroundBlurriness>0;L=t.get(L,E)}return L}function g(S){let L=!1,E=f(S);E===null?_(a,o):E&&E.isColor&&(_(E,1),L=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?e.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(S,L){let E=f(L);E&&E.isCubeTexture?(c===void 0&&(c=new mt(new bn(1,1,1),new Hs({name:"BackgroundCubeMaterial",uniforms:ca(qs.backgroundCube.uniforms),vertexShader:qs.backgroundCube.vertexShader,fragmentShader:qs.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(L.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Op),c.material.toneMapped=cn.getTransfer(E.colorSpace)!==En,(u!==E||p!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new mt(new Ke(2,2),new Hs({name:"BackgroundMaterial",uniforms:ca(qs.background.uniforms),vertexShader:qs.background.vertexShader,fragmentShader:qs.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=cn.getTransfer(E.colorSpace)!==En,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,L){S.getRGB(Eh,Qu(i)),e.buffers.color.setClear(Eh.r,Eh.g,Eh.b,L,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,L=1){a.set(S),o=L,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,_(a,o)},render:g,addToRenderList:I,dispose:y}}function f_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(W,Q,ut,V,at){let ct=!1,st=p(W,V,ut,Q);r!==st&&(r=st,c(r.object)),ct=f(W,V,ut,at),ct&&g(W,V,ut,at),at!==null&&t.update(at,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,E(W,Q,ut,V),at!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function p(W,Q,ut,V){let at=V.wireframe===!0,ct=n[Q.id];ct===void 0&&(ct={},n[Q.id]=ct);let st=W.isInstancedMesh===!0?W.id:0,Pt=ct[st];Pt===void 0&&(Pt={},ct[st]=Pt);let lt=Pt[ut.id];lt===void 0&&(lt={},Pt[ut.id]=lt);let Mt=lt[at];return Mt===void 0&&(Mt=d(l()),lt[at]=Mt),Mt}function d(W){let Q=[],ut=[],V=[];for(let at=0;at<e;at++)Q[at]=0,ut[at]=0,V[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ut,attributeDivisors:V,object:W,attributes:{},index:null}}function f(W,Q,ut,V){let at=r.attributes,ct=Q.attributes,st=0,Pt=ut.getAttributes();for(let lt in Pt)if(Pt[lt].location>=0){let xt=at[lt],Ht=ct[lt];if(Ht===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(Ht=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(Ht=W.instanceColor)),xt===void 0||xt.attribute!==Ht||Ht&&xt.data!==Ht.data)return!0;st++}return r.attributesNum!==st||r.index!==V}function g(W,Q,ut,V){let at={},ct=Q.attributes,st=0,Pt=ut.getAttributes();for(let lt in Pt)if(Pt[lt].location>=0){let xt=ct[lt];xt===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(xt=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(xt=W.instanceColor));let Ht={};Ht.attribute=xt,xt&&xt.data&&(Ht.data=xt.data),at[lt]=Ht,st++}r.attributes=at,r.attributesNum=st,r.index=V}function I(){let W=r.newAttributes;for(let Q=0,ut=W.length;Q<ut;Q++)W[Q]=0}function _(W){y(W,0)}function y(W,Q){let ut=r.newAttributes,V=r.enabledAttributes,at=r.attributeDivisors;ut[W]=1,V[W]===0&&(i.enableVertexAttribArray(W),V[W]=1),at[W]!==Q&&(i.vertexAttribDivisor(W,Q),at[W]=Q)}function S(){let W=r.newAttributes,Q=r.enabledAttributes;for(let ut=0,V=Q.length;ut<V;ut++)Q[ut]!==W[ut]&&(i.disableVertexAttribArray(ut),Q[ut]=0)}function L(W,Q,ut,V,at,ct,st){st===!0?i.vertexAttribIPointer(W,Q,ut,at,ct):i.vertexAttribPointer(W,Q,ut,V,at,ct)}function E(W,Q,ut,V){I();let at=V.attributes,ct=ut.getAttributes(),st=Q.defaultAttributeValues;for(let Pt in ct){let lt=ct[Pt];if(lt.location>=0){let Mt=at[Pt];if(Mt===void 0&&(Pt==="instanceMatrix"&&W.instanceMatrix&&(Mt=W.instanceMatrix),Pt==="instanceColor"&&W.instanceColor&&(Mt=W.instanceColor)),Mt!==void 0){let xt=Mt.normalized,Ht=Mt.itemSize,le=t.get(Mt);if(le===void 0)continue;let pt=le.buffer,$t=le.type,ie=le.bytesPerElement,xe=$t===i.INT||$t===i.UNSIGNED_INT||Mt.gpuType===Vc;if(Mt.isInterleavedBufferAttribute){let Kt=Mt.data,re=Kt.isInterleavedBuffer===!0?Kt.stride:Kt.itemSize,He=Mt.offset;if(Kt.isInstancedInterleavedBuffer||Kt.isInstancedBufferAttribute){for(let _e=0;_e<lt.locationSize;_e++)y(lt.location+_e,Kt.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let _e=0;_e<lt.locationSize;_e++)_(lt.location+_e);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let _e=0;_e<lt.locationSize;_e++)L(lt.location+_e,Ht/lt.locationSize,$t,xt,re*ie,(He+Ht/lt.locationSize*_e)*ie,xe)}else{if(Mt.isInstancedBufferAttribute){for(let Kt=0;Kt<lt.locationSize;Kt++)y(lt.location+Kt,Mt.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Kt=0;Kt<lt.locationSize;Kt++)_(lt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Kt=0;Kt<lt.locationSize;Kt++)L(lt.location+Kt,Ht/lt.locationSize,$t,xt,Ht*ie,Ht/lt.locationSize*Kt*ie,xe)}}else if(st!==void 0){let xt=st[Pt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(lt.location,xt);break;case 3:i.vertexAttrib3fv(lt.location,xt);break;case 4:i.vertexAttrib4fv(lt.location,xt);break;default:i.vertexAttrib1fv(lt.location,xt)}}}}S()}function F(){q();for(let W in n){let Q=n[W];for(let ut in Q){let V=Q[ut];for(let at in V){let ct=V[at];for(let st in ct)u(ct[st].object),delete ct[st];delete V[at]}}delete n[W]}}function N(W){if(n[W.id]===void 0)return;let Q=n[W.id];for(let ut in Q){let V=Q[ut];for(let at in V){let ct=V[at];for(let st in ct)u(ct[st].object),delete ct[st];delete V[at]}}delete n[W.id]}function M(W){for(let Q in n){let ut=n[Q];for(let V in ut){let at=ut[V];if(at[W.id]===void 0)continue;let ct=at[W.id];for(let st in ct)u(ct[st].object),delete ct[st];delete at[W.id]}}}function A(W){for(let Q in n){let ut=n[Q],V=W.isInstancedMesh===!0?W.id:0,at=ut[V];if(at!==void 0){for(let ct in at){let st=at[ct];for(let Pt in st)u(st[Pt].object),delete st[Pt];delete at[ct]}delete ut[V],Object.keys(ut).length===0&&delete n[Q]}}}function q(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:q,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:A,releaseStatesOfProgram:M,initAttributes:I,enableAttribute:_,disableUnusedAttributes:S}}function d_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Es&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let A=M===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==qi&&M!==ws&&!A&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:I,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:S,maxVaryings:L,maxFragmentUniforms:E,maxSamples:F,samples:N}}function m_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,I=p.clipIntersection,_=p.clipShadows,y=i.get(p);if(!s||g===null||g.length===0||r&&!_)r?u(null):c();else{let S=r?0:n,L=S*4,E=y.clippingState||null;l.value=E,E=u(g,d,L,f);for(let F=0;F!==L;++F)E[F]=e[F];y.clippingState=E,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,f,g){let I=p!==null?p.length:0,_=null;if(I!==0){if(_=l.value,g!==!0||_===null){let y=f+I*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<y)&&(_=new Float32Array(y));for(let L=0,E=f;L!==I;++L,E+=4)a.copy(p[L]).applyMatrix4(S,o),a.normal.toArray(_,E),_[E+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,_}}var ol=class extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new Hs({name:"CubemapFromEquirect",uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:ra});r.uniforms.tEquirect.value=e;let a=new mt(s,r),o=e.minFilter;return e.minFilter===hr&&(e.minFilter=Oi),new ja(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},mp=256,g_=3,x_=20,Bp=256,zp=16,__=3,y_=new k,v_=new Me,Rh=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ja(1,10,null),this._boxMesh=new mt(new bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=y_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,I=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,I===null&&(t.background=l.getClearColor(v_));let _=new ja(n,s,u);return _.position.copy(o),_.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=I,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(mp,ip(t))}_fromTexture(t,e){t.mapping===oa||t.mapping===eo?this._setSize(t.image.length===0?mp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=gp(t,!1,!1),n=Math.log2(t)-g_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=gp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===oa||t.mapping===eo?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=b_(),this._integrationMaterial=M_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/zp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-__)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Bp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=S_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function gp(i,t,e){return new ol(i,{minFilter:hr,generateMipmaps:t,type:Ts,colorSpace:Eo,depthBuffer:e})}function ll(i,t,e){return new Hs({name:i,uniforms:t,vertexShader:je.cube_vert,fragmentShader:e,side:oi,blending:ra,depthTest:!1,depthWrite:!1})}function b_(){return ll("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bp}u

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
	`)}function M_(){return ll("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zp}},`

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
	`)}function S_(){return ll("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function xp(){return ll("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _p(){return ll("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===zc||f===kc)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let I=new ol(g.height);return I.fromEquirectangularTexture(i,d),t.set(d,I),d.addEventListener("dispose",c),o(I.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===zc||f===kc,I=f===oa||f===eo;if(g||I){let _=e.get(d),y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Rh(i)),_=g?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let S=d.image;return g&&S&&S.height>0||I&&S&&l(S)?(n===null&&(n=new Rh(i)),_=g?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d,f){return f===zc?d.mapping=oa:f===kc&&(d.mapping=eo),d}function l(d){let f=0,g=6;for(let I=0;I<g;I++)d[I]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function T_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Mo("WebGLRenderer: "+n+" extension not supported."),s}}}function E_(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let _ in g.attributes)t.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let I=r.get(g);I&&(t.remove(I),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,I){return s[I.id]!==void 0||(I.addEventListener("dispose",o),s[I.id]=new WeakRef(I),a.register(I,I.id,I),e.memory.geometries++),I}function u(g){let I=g.attributes;for(let _ in I)t.update(I[_],i.ARRAY_BUFFER)}function p(g){let I=g.index,_=g.attributes.position,y=0;if(_===void 0)return;let S=I!==null?I.array.length:_.array.length/3-1,L=_.count>=65535?Po:Io,E=new L(Math.ceil(S/3)*6,1),F=E.array;if(I!==null){let M=I.array;y=I.version;for(let A=0,q=0;A<S;A+=3){let z=M[A+0],W=M[A+1],Q=M[A+2];F[q++]=z,F[q++]=W,F[q++]=W,F[q++]=Q,F[q++]=Q,F[q++]=z}}else{y=_.version;for(let M=0,A=0;M<S;M+=3){let q=M+0,z=M+1,W=M+2;F[A++]=q,F[A++]=z,F[A++]=z,F[A++]=W,F[A++]=W,F[A++]=q}}E.version=y;let N=r.get(g);N&&t.remove(N),r.set(g,E)}function d(g){let I=r.get(g);if(I){let _=g.index;_!==null&&I.version<_.version&&p(g)}else p(g);return r.get(g)}function f(){for(let g in s){let I=s[g].deref();I!==void 0&&l(I)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function A_(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*a,f),e.update(d,n,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let I=0;for(let _=0;_<f;_++)I+=d[_];e.update(I,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function R_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ae("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C_(i,t,e){let n=new WeakMap,s=new Vn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let q=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,I=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],L=0;f===!0&&(L=1),g===!0&&(L=2),I===!0&&(L=3);let E=o.attributes.position.count*L,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let N=new Float32Array(E*F*4*p),M=new Co(N,E,F,p);M.type=ws,M.needsUpdate=!0;let A=L*4;for(let z=0;z<p;z++){let W=_[z],Q=y[z],ut=S[z],V=E*F*4*z;for(let at=0;at<W.count;at++){let ct=at*A;f===!0&&(s.fromBufferAttribute(W,at),N[V+ct+0]=s.x,N[V+ct+1]=s.y,N[V+ct+2]=s.z,N[V+ct+3]=0),g===!0&&(s.fromBufferAttribute(Q,at),N[V+ct+4]=s.x,N[V+ct+5]=s.y,N[V+ct+6]=s.z,N[V+ct+7]=0),I===!0&&(s.fromBufferAttribute(ut,at),N[V+ct+8]=s.x,N[V+ct+9]=s.y,N[V+ct+10]=s.z,N[V+ct+11]=ut.itemSize===4?s.w:1)}}d={count:p,texture:M,size:new Nt(E,F)},n.set(o,d),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let I=0;I<c.length;I++)f+=c[I];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function I_(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var P_={[Lu]:"LINEAR_TONE_MAPPING",[Du]:"REINHARD_TONE_MAPPING",[Nu]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[Bu]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function L_(i,t,e,n,s,r){let a=new Bi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Pn;u.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let p=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mt(u,p),f=new Zo(-1,1,1,-1,0,1),g=null,I=null,_=!1,y,S=null,L=[],E=!1;this.setSize=function(F,N){a.setSize(F,N),o!==null&&o.setSize(F,N),l!==null&&l.setSize(F,N);for(let M=0;M<L.length;M++){let A=L[M];A.setSize&&A.setSize(F,N)}},this.setEffects=function(F){L=F,E=L.length>0&&L[0].isRenderPass===!0;let N=a.width,M=a.height;L.length>0&&o===null&&(o=new Bi(N,M,{type:Ts,depthBuffer:!1,stencilBuffer:!1}),l=new Bi(N,M,{type:Ts,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&L.some(q=>q.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new lr(N,M),r===!0&&(c.format=ur,c.type=la)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let q=0;q<L.length;q++){let z=L[q];z.setSize&&z.setSize(N,M),A&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(c)}},this.begin=function(F,N){if(_||F.toneMapping===Ws&&L.length===0)return!1;if(S=N,N!==null){let M=N.width,A=N.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return E===!1&&F.setRenderTarget(a),y=F.toneMapping,F.toneMapping=Ws,!0},this.hasRenderPass=function(){return E},this.end=function(F,N){F.toneMapping=y,_=!0;let M=a,A=o;for(let q=0;q<L.length;q++){let z=L[q];z.enabled!==!1&&(z.render(F,A,M,N),z.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(g!==F.outputColorSpace||I!==F.toneMapping){g=F.outputColorSpace,I=F.toneMapping,p.defines={},cn.getTransfer(g)===En&&(p.defines.SRGB_TRANSFER="");let q=P_[I];q&&(p.defines[q]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=M.texture,F.setRenderTarget(S),F.render(d,f),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var kp=new Ci,Gp=new lr(1,1),Vp=new No(1),Hp=new Co,Wp=new fc,Xp=new Do,yp=[],vp=[],bp=new Float32Array(16),Mp=new Float32Array(9),Sp=new Float32Array(4);function ro(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=yp[s];if(r===void 0&&(r=new Float32Array(s),yp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function li(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ci(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ch(i,t){let e=vp[t];e===void 0&&(e=new Int32Array(t),vp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(li(e,t))return;i.uniform2fv(this.addr,t),ci(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(li(e,t))return;i.uniform3fv(this.addr,t),ci(e,t)}}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(li(e,t))return;i.uniform4fv(this.addr,t),ci(e,t)}}function O_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(li(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ci(e,t)}else{if(li(e,n))return;Sp.set(n),i.uniformMatrix2fv(this.addr,!1,Sp),ci(e,n)}}function B_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(li(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ci(e,t)}else{if(li(e,n))return;Mp.set(n),i.uniformMatrix3fv(this.addr,!1,Mp),ci(e,n)}}function z_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(li(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ci(e,t)}else{if(li(e,n))return;bp.set(n),i.uniformMatrix4fv(this.addr,!1,bp),ci(e,n)}}function k_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(li(e,t))return;i.uniform2iv(this.addr,t),ci(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(li(e,t))return;i.uniform3iv(this.addr,t),ci(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(li(e,t))return;i.uniform4iv(this.addr,t),ci(e,t)}}function W_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(li(e,t))return;i.uniform2uiv(this.addr,t),ci(e,t)}}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(li(e,t))return;i.uniform3uiv(this.addr,t),ci(e,t)}}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(li(e,t))return;i.uniform4uiv(this.addr,t),ci(e,t)}}function Ih(i){return i.version===0&&(i.compareFunction=Zu,i.needsUpdate=!0),i}function $_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ih(Gp):r=kp,e.setTexture2D(t||r,s)}function Z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wp,s)}function J_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ih(Vp):r=Xp,e.setTextureCube(t||r,s)}function K_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hp,s)}function j_(i){switch(i){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}function Q_(i,t){i.uniform1fv(this.addr,t)}function ty(i,t){let e=ro(t,this.size,2);i.uniform2fv(this.addr,e)}function ey(i,t){let e=ro(t,this.size,3);i.uniform3fv(this.addr,e)}function ny(i,t){let e=ro(t,this.size,4);i.uniform4fv(this.addr,e)}function iy(i,t){let e=ro(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sy(i,t){let e=ro(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ry(i,t){let e=ro(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ay(i,t){i.uniform1iv(this.addr,t)}function oy(i,t){i.uniform2iv(this.addr,t)}function ly(i,t){i.uniform3iv(this.addr,t)}function cy(i,t){i.uniform4iv(this.addr,t)}function hy(i,t){i.uniform1uiv(this.addr,t)}function uy(i,t){i.uniform2uiv(this.addr,t)}function fy(i,t){i.uniform3uiv(this.addr,t)}function dy(i,t){i.uniform4uiv(this.addr,t)}function py(i,t,e){let n=this.cache,s=t.length,r=Ch(e,s);li(n,r)||(i.uniform1iv(this.addr,r),ci(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ih(Gp):a=kp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function my(i,t,e){let n=this.cache,s=t.length,r=Ch(e,s);li(n,r)||(i.uniform1iv(this.addr,r),ci(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wp,r[a])}function gy(i,t,e){let n=this.cache,s=t.length,r=Ch(e,s);li(n,r)||(i.uniform1iv(this.addr,r),ci(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ih(Vp):a=Xp;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function xy(i,t,e){let n=this.cache,s=t.length,r=Ch(e,s);li(n,r)||(i.uniform1iv(this.addr,r),ci(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hp,r[a])}function _y(i){switch(i){case 5126:return Q_;case 35664:return ty;case 35665:return ey;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return hy;case 36294:return uy;case 36295:return fy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return xy}}var uf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j_(e.type)}},ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_y(e.type)}},df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function wp(i,t){i.seq.push(t),i.map[t.id]=t}function yy(i,t,e){let n=i.name,s=n.length;for(cf.lastIndex=0;;){let r=cf.exec(n),a=cf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wp(e,c===void 0?new uf(o,i,t):new ff(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new df(o),wp(e,p)),e=p}}}var io=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);yy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Tp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vy=37297,by=0;function My(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ep=new Fe;function Sy(i){cn._getMatrix(Ep,cn.workingColorSpace,i);let t=`mat3( ${Ep.elements.map(e=>e.toFixed(4))} )`;switch(cn.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case En:return[t,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ap(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+My(i.getShaderSource(t),o)}else return r}function wy(i,t){let e=Sy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ty={[Lu]:"Linear",[Du]:"Reinhard",[Nu]:"Cineon",[Uu]:"ACESFilmic",[Ou]:"AgX",[Bu]:"Neutral",[Fu]:"Custom"};function Ey(i,t){let e=Ty[t];return e===void 0?(Re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ah=new k;function Ay(){cn.getLuminanceCoefficients(Ah);let i=Ah.x.toFixed(4),t=Ah.y.toFixed(4),e=Ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function Cy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function al(i){return i!==""}function Rp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Cp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(Py,Ly)}function Ly(i,t){let e=je[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return pf(e)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(i){return i.replace(Dy,Ny)}function Ny(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Uy={[Ko]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function Fy(i){return Uy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Oy={[eo]:"ENVMAP_MODE_REFRACTION"};function By(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zy={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};function ky(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zy[i.combine]||"ENVMAP_BLENDING_NONE"}function Gy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=By(e),p=ky(e),d=Ry(e),f=Cy(r),g=s.createProgram(),I,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(I=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(al).join(`
`),I.length>0&&(I+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(al).join(`
`),_.length>0&&(_+=`
`)):(I=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),_=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ws?"#define TONE_MAPPING":"",e.toneMapping!==Ws?je.tonemapping_pars_fragment:"",e.toneMapping!==Ws?Ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),Ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(al).join(`
`)),a=pf(a),a=Rp(a,e),a=Cp(a,e),o=pf(o),o=Rp(o,e),o=Cp(o,e),a=Ip(a),o=Ip(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,I=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,_=["#define varying in",e.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=y+I+a,L=y+_+o,E=Tp(s,s.VERTEX_SHADER,S),F=Tp(s,s.FRAGMENT_SHADER,L);s.attachShader(g,E),s.attachShader(g,F),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function N(z){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(g)||"",Q=s.getShaderInfoLog(E)||"",ut=s.getShaderInfoLog(F)||"",V=W.trim(),at=Q.trim(),ct=ut.trim(),st=!0,Pt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,F);else{let lt=Ap(s,E,"vertex"),Mt=Ap(s,F,"fragment");Ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+V+`
`+lt+`
`+Mt)}else V!==""?Re("WebGLProgram: Program Info Log:",V):(at===""||ct==="")&&(Pt=!1);Pt&&(z.diagnostics={runnable:st,programLog:V,vertexShader:{log:at,prefix:I},fragmentShader:{log:ct,prefix:_}})}s.deleteShader(E),s.deleteShader(F),M=new io(s,g),A=Iy(s,g)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(g,vy)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=by++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=F,this}var Vy=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gf(t),e.set(t,n)),n}},gf=class{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}};function Hy(i){return i===Dr||i===il||i===sl}function Wy(i,t,e,n,s,r){let a=new Ha,o=new mf,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,A,q,z,W,Q){let ut=z.fog,V=W.geometry,at=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,ct=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,st=t.get(M.envMap||at,ct),Pt=d[M.type],lt=n.precision;M.precision!==null&&(lt=n.getMaxPrecision(M.precision),lt!==M.precision&&Re("WebGLProgram.getParameters:",M.precision,"not supported, using",lt,"instead."));let Mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=Mt!==void 0?Mt.length:0,Ht=0;V.morphAttributes.position!==void 0&&(Ht=1),V.morphAttributes.normal!==void 0&&(Ht=2),V.morphAttributes.color!==void 0&&(Ht=3);let le,pt,$t,ie;if(Pt){let Yt=qs[Pt];le=Yt.vertexShader,pt=Yt.fragmentShader}else{le=M.vertexShader,pt=M.fragmentShader;let Yt=o.getVertexShaderStage(M),on=o.getFragmentShaderStage(M);o.update(M,Yt,on),$t=Yt.id,ie=on.id}let xe=i.getRenderTarget(),Kt=i.state.buffers.depth.getReversed(),re=W.isInstancedMesh===!0,He=W.isBatchedMesh===!0,_e=!!M.map,Oe=!!M.matcap,We=!!st,vt=We&&st.isPMREMTexture===!0,kt=!!M.aoMap,Rt=!!M.lightMap,Vt=!!M.bumpMap&&M.wireframe===!1,Ut=!!M.normalMap,Le=!!M.displacementMap,ce=!!M.emissiveMap,Xe=!!M.metalnessMap,qe=!!M.roughnessMap,sn=M.anisotropy>0,X=M.clearcoat>0,Ee=M.diffuseRoughness>0,Ne=M.dispersion>0,ze=M.retroreflectivity>0,Ot=M.iridescence>0,_n=M.sheen>0,de=M.transmission>0,be=sn&&!!M.anisotropyMap,U=X&&!!M.clearcoatMap,T=X&&!!M.clearcoatNormalMap,et=X&&!!M.clearcoatRoughnessMap,Lt=Ee&&!!M.diffuseRoughnessMap,yt=Ot&&!!M.iridescenceMap,Ct=Ot&&!!M.iridescenceThicknessMap,zt=_n&&!!M.sheenColorMap,gt=_n&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Gt=!!M.specularColorMap,G=!!M.specularIntensityMap,Y=de&&!!M.transmissionMap,ft=de&&!!M.thicknessMap,Xt=!!M.gradientMap,Dt=!!M.alphaMap,Wt=M.alphaTest>0,ue=!!M.alphaHash,Ue=!!M.extensions,Et=Ws;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Et=i.toneMapping);let pe=vt?st.isCompressedCubeTexture?st.image[0].mipmaps:st.mipmaps:null,we={shaderID:Pt,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:pt,defines:M.defines,customVertexShaderID:$t,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:lt,batching:He,batchingColor:He&&W._colorsTexture!==null,instancing:re,instancingColor:re&&W.instanceColor!==null,instancingMorph:re&&W.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:cn.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:_e,matcap:Oe,envMap:We,envMapMode:We&&st.mapping,envMapPMREM:vt,envMapMaxLod:vt?pe.length-1:null,envMapSize:vt?pe[0].width:null,aoMap:kt,lightMap:Rt,bumpMap:Vt,normalMap:Ut,displacementMap:Le,emissiveMap:ce,normalMapObjectSpace:Ut&&M.normalMapType===qd,normalMapTangentSpace:Ut&&M.normalMapType===wh,packedNormalMap:Ut&&M.normalMapType===wh&&Hy(M.normalMap.format),metalnessMap:Xe,roughnessMap:qe,anisotropy:sn,anisotropyMap:be,clearcoat:X,clearcoatMap:U,clearcoatNormalMap:T,clearcoatRoughnessMap:et,diffuseRoughness:Ee,diffuseRoughnessMap:Lt,dispersion:Ne,retroreflection:ze,iridescence:Ot,iridescenceMap:yt,iridescenceThicknessMap:Ct,sheen:_n,sheenColorMap:zt,sheenRoughnessMap:gt,specularMap:_t,specularColorMap:Gt,specularIntensityMap:G,transmission:de,transmissionMap:Y,thicknessMap:ft,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===to&&M.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Wt,alphaHash:ue,combine:M.combine,mapUv:_e&&f(M.map.channel),aoMapUv:kt&&f(M.aoMap.channel),lightMapUv:Rt&&f(M.lightMap.channel),bumpMapUv:Vt&&f(M.bumpMap.channel),normalMapUv:Ut&&f(M.normalMap.channel),displacementMapUv:Le&&f(M.displacementMap.channel),emissiveMapUv:ce&&f(M.emissiveMap.channel),metalnessMapUv:Xe&&f(M.metalnessMap.channel),roughnessMapUv:qe&&f(M.roughnessMap.channel),anisotropyMapUv:be&&f(M.anisotropyMap.channel),clearcoatMapUv:U&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Lt&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:yt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&f(M.sheenRoughnessMap.channel),specularMapUv:_t&&f(M.specularMap.channel),specularColorMapUv:Gt&&f(M.specularColorMap.channel),specularIntensityMapUv:G&&f(M.specularIntensityMap.channel),transmissionMapUv:Y&&f(M.transmissionMap.channel),thicknessMapUv:ft&&f(M.thicknessMap.channel),alphaMapUv:Dt&&f(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ut||sn),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(_e||Dt),fog:!!ut,useFog:M.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&Ut===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Kt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Q.filter(Yt=>Yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&cn.getTransfer(M.map.colorSpace)===En,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&cn.getTransfer(M.emissiveMap.colorSpace)===En,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===oi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||He)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function I(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let q in M.defines)A.push(q),A.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(_(A,M),y(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapPMREM),M.push(A.envMapMaxLod),M.push(A.envMapSize),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.diffuseRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.numLightProbeGrids),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){let A=d[M.type],q;if(A){let z=qs[A];q=fp.clone(z.uniforms)}else q=M.uniforms;return q}function L(M,A){let q=u.get(A);return q!==void 0?++q.usedTimes:(q=new Gy(i,A,M,s),c.push(q),u.set(A,q)),q}function E(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function F(M){o.remove(M)}function N(){o.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:S,acquireProgram:L,releaseProgram:E,releaseShaderCache:F,programs:c,dispose:N}}function Xy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,I,_,y){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:I,renderOrder:d.renderOrder,z:_,group:y},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=I,S.renderOrder=d.renderOrder,S.z=_,S.group=y),t++,S}function l(d,f,g,I,_,y,S){S.reversedDepth===!0&&(_=-_);let L=o(d,f,g,I,_,y);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):e.push(L)}function c(d,f,g,I,_,y){let S=o(d,f,g,I,_,y);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(d,f){e.length>1&&e.sort(d||qy),n.length>1&&n.sort(f||Lp),s.length>1&&s.sort(f||Lp)}function p(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Yy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Dp,i.set(n,[a])):s>=r.length?(a=new Dp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $y(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Me};break;case"SpotLight":e={position:new k,direction:new k,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Zy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jy=0;function Ky(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jy(i){let t=new $y,e=Zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new In,a=new In;function o(c){let u=0,p=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let f=0,g=0,I=0,_=0,y=0,S=0,L=0,E=0,F=0,N=0,M=0,A=0,q=0,z=0;c.sort(Ky);for(let Q=0,ut=c.length;Q<ut;Q++){let V=c[Q],at=V.color,ct=V.intensity,st=V.distance,Pt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Dr?Pt=V.shadow.map.texture:Pt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=at.r*ct,p+=at.g*ct,d+=at.b*ct;else if(V.isLightProbe){for(let lt=0;lt<9;lt++)n.probe[lt].addScaledVector(V.sh.coefficients[lt],ct);z++}else if(V.isSunLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Mt=V.shadow,xt=e.get(V);xt.shadowIntensity=Mt.intensity,xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[g]=xt,n.sunShadowMap[g]=Pt;let Ht=Mt.getViewportCount();for(let le=0;le<Ht;le++)n.sunShadowMatrix[I+le]=Mt.getMatrix(le),n.sunShadowCascade[I+le]=Mt._cascadeData[le];I+=Ht,g++}n.sun[f]=lt,f++}else if(V.isDirectionalLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Mt=V.shadow,xt=e.get(V);xt.shadowIntensity=Mt.intensity,xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize=Mt.mapSize,n.directionalShadow[_]=xt,n.directionalShadowMap[_]=Pt,n.directionalShadowMatrix[_]=V.shadow.matrix,F++}n.directional[_]=lt,_++}else if(V.isSpotLight){let lt=t.get(V);lt.position.setFromMatrixPosition(V.matrixWorld),lt.color.copy(at).multiplyScalar(ct),lt.distance=st,lt.coneCos=Math.cos(V.angle),lt.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),lt.decay=V.decay,n.spot[S]=lt;let Mt=V.shadow;if(V.map&&(n.spotLightMap[A]=V.map,A++,Mt.updateMatrices(V),V.castShadow&&q++),n.spotLightMatrix[S]=Mt.matrix,V.castShadow){let xt=e.get(V);xt.shadowIntensity=Mt.intensity,xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize=Mt.mapSize,n.spotShadow[S]=xt,n.spotShadowMap[S]=Pt,M++}S++}else if(V.isRectAreaLight){let lt=t.get(V);lt.color.copy(at).multiplyScalar(ct),lt.halfWidth.set(V.width*.5,0,0),lt.halfHeight.set(0,V.height*.5,0),n.rectArea[L]=lt,L++}else if(V.isPointLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),lt.distance=V.distance,lt.decay=V.decay,V.castShadow){let Mt=V.shadow,xt=e.get(V);xt.shadowIntensity=Mt.intensity,xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize=Mt.mapSize,xt.shadowCameraNear=Mt.camera.near,xt.shadowCameraFar=Mt.camera.far,n.pointShadow[y]=xt,n.pointShadowMap[y]=Pt,n.pointShadowMatrix[y]=V.shadow.matrix,N++}n.point[y]=lt,y++}else if(V.isHemisphereLight){let lt=t.get(V);lt.skyColor.copy(V.color).multiplyScalar(ct),lt.groundColor.copy(V.groundColor).multiplyScalar(ct),n.hemi[E]=lt,E++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ee.LTC_FLOAT_1,n.rectAreaLTC2=ee.LTC_FLOAT_2):(n.rectAreaLTC1=ee.LTC_HALF_1,n.rectAreaLTC2=ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let W=n.hash;(W.sunLength!==f||W.directionalLength!==_||W.pointLength!==y||W.spotLength!==S||W.rectAreaLength!==L||W.hemiLength!==E||W.numSunShadows!==g||W.numDirectionalShadows!==F||W.numPointShadows!==N||W.numSpotShadows!==M||W.numSpotMaps!==A||W.numLightProbes!==z)&&(n.sun.length=f,n.directional.length=_,n.spot.length=S,n.rectArea.length=L,n.point.length=y,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.directionalShadowMatrix.length=F,n.pointShadow.length=N,n.pointShadowMap.length=N,n.pointShadowMatrix.length=N,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+A-q,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=q,n.numLightProbes=z,W.sunLength=f,W.directionalLength=_,W.pointLength=y,W.spotLength=S,W.rectAreaLength=L,W.hemiLength=E,W.numSunShadows=g,W.numDirectionalShadows=F,W.numPointShadows=N,W.numSpotShadows=M,W.numSpotMaps=A,W.numLightProbes=z,n.version=Jy++)}function l(c,u){let p=0,d=0,f=0,g=0,I=0,_=0,y=u.matrixWorldInverse;for(let S=0,L=c.length;S<L;S++){let E=c[S];if(E.isSunLight){let F=n.sun[p];F.direction.setFromMatrixPosition(E.matrixWorld),F.direction.transformDirection(y),p++}else if(E.isDirectionalLight){let F=n.directional[d];F.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(y),d++}else if(E.isSpotLight){let F=n.spot[g];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(y),g++}else if(E.isRectAreaLight){let F=n.rectArea[I];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(y),a.identity(),r.copy(E.matrixWorld),r.premultiply(y),a.extractRotation(r),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),F.halfWidth.applyMatrix4(a),F.halfHeight.applyMatrix4(a),I++}else if(E.isPointLight){let F=n.point[f];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(y),f++}else if(E.isHemisphereLight){let F=n.hemi[_];F.direction.setFromMatrixPosition(E.matrixWorld),F.direction.transformDirection(y),_++}}}return{setup:o,setupView:l,state:n}}function Np(i){let t=new jy(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Np(i),t.set(s,[o])):r>=a.length?(o=new Np(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var t1=`void main() {
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
}`,n1=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],i1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Up=new In,rl=new k,hf=new k;function s1(i,t,e){let n=new Er,s=new Nt,r=new Nt,a=new Vn,o=new Sc,l=new wc,c={},u=e.maxTextureSize,p={[Lr]:oi,[oi]:Lr,[Hn]:Hn},d=new Hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:t1,fragmentShader:e1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pn;g.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new mt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let y=this.type;this.render=function(N,M,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;this.type===Oc&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ko);let q=i.getRenderTarget(),z=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(ra),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let ut=y!==this.type;ut&&M.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(at=>at.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,at=N.length;V<at;V++){let ct=N[V],st=ct.shadow;if(st===void 0){Re("WebGLShadowMap:",ct,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let Pt=st.getFrameExtents();s.multiply(Pt),r.copy(st.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Pt.x),s.x=r.x*Pt.x,st.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Pt.y),s.y=r.y*Pt.y,st.mapSize.y=r.y));let lt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=lt,st.map===null||ut===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===Qa){if(ct.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Bi(s.x,s.y,{format:Dr,type:Ts,minFilter:Oi,magFilter:Oi,generateMipmaps:!1}),st.map.texture.name=ct.name+".shadowMap",st.map.depthTexture=new lr(s.x,s.y,ws),st.map.depthTexture.name=ct.name+".shadowMapDepth",st.map.depthTexture.format=ar,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=pi,st.map.depthTexture.magFilter=pi}else ct.isPointLight?(st.map=new ol(s.x),st.map.depthTexture=new No(s.x,Ss)):(st.map=new Bi(s.x,s.y),st.map.depthTexture=new lr(s.x,s.y,Ss)),st.map.depthTexture.name=ct.name+".shadowMap",st.map.depthTexture.format=ar,this.type===Ko?(st.map.depthTexture.compareFunction=lt?$u:Yu,st.map.depthTexture.minFilter=Oi,st.map.depthTexture.magFilter=Oi):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=pi,st.map.depthTexture.magFilter=pi);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let Mt=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ct.isPointLight!==!0&&st.updateMatrices(ct,A);let xt=(st.camera.layers.mask&4294967294)!==0?st.camera.layers:A.layers;for(let Ht=0;Ht<Mt;Ht++){let le=st.getCamera(Ht);if(ct.isPointLight){let pt=st.camera,$t=st.matrix,ie=ct.distance||pt.far;ie!==pt.far&&(pt.far=ie,pt.updateProjectionMatrix()),rl.setFromMatrixPosition(ct.matrixWorld),pt.position.copy(rl),hf.copy(pt.position),hf.add(n1[Ht]),pt.up.copy(i1[Ht]),pt.lookAt(hf),pt.updateMatrixWorld(),$t.makeTranslation(-rl.x,-rl.y,-rl.z),Up.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(Up,pt.coordinateSystem,pt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(st.map),i.clear());let pt=st.getViewport(Ht);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Q.viewport(a)}n=st.getFrustum(Ht),E(M,A,le,ct,xt,this.type)}st.isPointLightShadow!==!0&&this.type===Qa&&S(st,A),st.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(q,z,W)};function S(N,M){let A=t.update(I);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null?N.mapPass=new Bi(s.x,s.y,{format:Dr,type:Ts}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),d.uniforms.shadow_pass.value=N.map.depthTexture,d.uniforms.resolution.value.set(N.map.width,N.map.height),d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(M,null,A,d,I,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value.set(N.map.width,N.map.height),f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(M,null,A,f,I,null)}function L(N,M,A,q){let z=null,W=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(W!==void 0)z=W;else if(z=A.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let Q=z.uuid,ut=M.uuid,V=c[Q];V===void 0&&(V={},c[Q]=V);let at=V[ut];at===void 0&&(at=z.clone(),V[ut]=at,M.addEventListener("dispose",F)),z=at}if(z.visible=M.visible,z.wireframe=M.wireframe,q===Qa?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:p[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,z.map=M.map,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,A.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let Q=i.properties.get(z);Q.light=A}return z}function E(N,M,A,q,z,W){if(N.visible===!1)return;if(N.layers.test(z)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Qa)&&(!N.frustumCulled||N.intersectsFrustum(n))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);let V=t.update(N),at=N.material;if(Array.isArray(at)){let ct=V.groups;for(let st=0,Pt=ct.length;st<Pt;st++){let lt=ct[st],Mt=at[lt.materialIndex];if(Mt&&Mt.visible){let xt=L(N,Mt,q,W);N.onBeforeShadow(i,N,M,A,V,xt,lt),i.renderBufferDirect(A,null,V,xt,N,lt),N.onAfterShadow(i,N,M,A,V,xt,lt)}}}else if(at.visible){let ct=L(N,at,q,W);N.onBeforeShadow(i,N,M,A,V,ct,null),i.renderBufferDirect(A,null,V,ct,N,null),N.onAfterShadow(i,N,M,A,V,ct,null)}}let ut=N.children;for(let V=0,at=ut.length;V<at;V++)E(ut[V],M,A,q,z,W)}function F(N){N.target.removeEventListener("dispose",F);for(let A in c){let q=c[A],z=N.target.uuid;z in q&&(q[z].dispose(),delete q[z])}}}function r1(i,t){function e(){let G=!1,Y=new Vn,ft=null,Xt=new Vn(0,0,0,0);return{setMask:function(Dt){ft!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),ft=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Wt,ue,Ue,Et){Et===!0&&(Dt*=Ue,Wt*=Ue,ue*=Ue),Y.set(Dt,Wt,ue,Ue),Xt.equals(Y)===!1&&(i.clearColor(Dt,Wt,ue,Ue),Xt.copy(Y))},reset:function(){G=!1,ft=null,Xt.set(-1,0,0,0)}}}function n(){let G=!1,Y=!1,ft=null,Xt=null,Dt=null;return{setReversed:function(Wt){if(Y!==Wt){let ue=t.get("EXT_clip_control");Wt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),Y=Wt;let Ue=Dt;Dt=null,this.setClear(Ue)}},getReversed:function(){return Y},setTest:function(Wt){Wt?Kt(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(Wt){ft!==Wt&&!G&&(i.depthMask(Wt),ft=Wt)},setFunc:function(Wt){if(Y&&(Wt=np[Wt]),Xt!==Wt){switch(Wt){case tc:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case nc:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case ic:i.depthFunc(i.EQUAL);break;case sc:i.depthFunc(i.GEQUAL);break;case rc:i.depthFunc(i.GREATER);break;case ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Xt=Wt}},setLocked:function(Wt){G=Wt},setClear:function(Wt){Dt!==Wt&&(Dt=Wt,Y&&(Wt=1-Wt),i.clearDepth(Wt))},reset:function(){G=!1,ft=null,Xt=null,Dt=null,Y=!1}}}function s(){let G=!1,Y=null,ft=null,Xt=null,Dt=null,Wt=null,ue=null,Ue=null,Et=null;return{setTest:function(pe){G||(pe?Kt(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(pe){Y!==pe&&!G&&(i.stencilMask(pe),Y=pe)},setFunc:function(pe,we,Yt){(ft!==pe||Xt!==we||Dt!==Yt)&&(i.stencilFunc(pe,we,Yt),ft=pe,Xt=we,Dt=Yt)},setOp:function(pe,we,Yt){(Wt!==pe||ue!==we||Ue!==Yt)&&(i.stencilOp(pe,we,Yt),Wt=pe,ue=we,Ue=Yt)},setLocked:function(pe){G=pe},setClear:function(pe){Et!==pe&&(i.clearStencil(pe),Et=pe)},reset:function(){G=!1,Y=null,ft=null,Xt=null,Dt=null,Wt=null,ue=null,Ue=null,Et=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,g=[],I=null,_=!1,y=null,S=null,L=null,E=null,F=null,N=null,M=null,A=new Me(0,0,0),q=0,z=!1,W=null,Q=null,ut=null,V=null,at=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,Pt=0,lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(Pt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),st=Pt>=1):lt.indexOf("OpenGL ES")!==-1&&(Pt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),st=Pt>=2);let Mt=null,xt={},Ht=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),pt=new Vn().fromArray(Ht),$t=new Vn().fromArray(le);function ie(G,Y,ft,Xt){let Dt=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(G,Wt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<ft;ue++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,Xt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Y+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Wt}let xe={};xe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Kt(i.DEPTH_TEST),a.setFunc(Ba),Vt(!1),Ut(Au),Kt(i.CULL_FACE),kt(ra);function Kt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function re(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function He(G,Y){return d[G]!==Y?(i.bindFramebuffer(G,Y),d[G]=Y,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Y),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function _e(G,Y){let ft=g,Xt=!1;if(G){ft=f.get(Y),ft===void 0&&(ft=[],f.set(Y,ft));let Dt=G.textures;if(ft.length!==Dt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,ue=Dt.length;Wt<ue;Wt++)ft[Wt]=i.COLOR_ATTACHMENT0+Wt;ft.length=Dt.length,Xt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Xt=!0);Xt&&i.drawBuffers(ft)}function Oe(G){return I!==G?(i.useProgram(G),I=G,!0):!1}let We={[aa]:i.FUNC_ADD,[Td]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};We[Ad]=i.MIN,We[Rd]=i.MAX;let vt={[Cd]:i.ZERO,[Id]:i.ONE,[Pd]:i.SRC_COLOR,[Iu]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Ud]:i.DST_COLOR,[Dd]:i.DST_ALPHA,[Ld]:i.ONE_MINUS_SRC_COLOR,[Pu]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[zd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(G,Y,ft,Xt,Dt,Wt,ue,Ue,Et,pe){if(G===ra){_===!0&&(re(i.BLEND),_=!1);return}if(_===!1&&(Kt(i.BLEND),_=!0),G!==wd){if(G!==y||pe!==z){if((S!==aa||F!==aa)&&(i.blendEquation(i.FUNC_ADD),S=aa,F=aa),pe)switch(G){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ae("WebGLState: Invalid blending: ",G);break}else switch(G){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ru:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",G);break}L=null,E=null,N=null,M=null,A.set(0,0,0),q=0,y=G,z=pe}return}Dt=Dt||Y,Wt=Wt||ft,ue=ue||Xt,(Y!==S||Dt!==F)&&(i.blendEquationSeparate(We[Y],We[Dt]),S=Y,F=Dt),(ft!==L||Xt!==E||Wt!==N||ue!==M)&&(i.blendFuncSeparate(vt[ft],vt[Xt],vt[Wt],vt[ue]),L=ft,E=Xt,N=Wt,M=ue),(Ue.equals(A)===!1||Et!==q)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Et),A.copy(Ue),q=Et),y=G,z=!1}function Rt(G,Y){G.side===Hn?re(i.CULL_FACE):Kt(i.CULL_FACE);let ft=G.side===oi;Y&&(ft=!ft),Vt(ft),G.blending===to&&G.transparent===!1?kt(ra):kt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Xt=G.stencilWrite;o.setTest(Xt),Xt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Kt(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(G){W!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),W=G)}function Ut(G){G!==Md?(Kt(i.CULL_FACE),G!==Q&&(G===Au?i.cullFace(i.BACK):G===Sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),Q=G}function Le(G){G!==ut&&(st&&i.lineWidth(G),ut=G)}function ce(G,Y,ft){G?(Kt(i.POLYGON_OFFSET_FILL),(V!==Y||at!==ft)&&(V=Y,at=ft,a.getReversed()&&(Y=-Y,ft=-ft),i.polygonOffset(Y,ft))):re(i.POLYGON_OFFSET_FILL)}function Xe(G){G?Kt(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function qe(G){G===void 0&&(G=i.TEXTURE0+ct-1),Mt!==G&&(i.activeTexture(G),Mt=G)}function sn(G,Y,ft){ft===void 0&&(Mt===null?ft=i.TEXTURE0+ct-1:ft=Mt);let Xt=xt[ft];Xt===void 0&&(Xt={type:void 0,texture:void 0},xt[ft]=Xt),(Xt.type!==G||Xt.texture!==Y)&&(Mt!==ft&&(i.activeTexture(ft),Mt=ft),i.bindTexture(G,Y||xe[G]),Xt.type=G,Xt.texture=Y)}function X(){let G=xt[Mt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ee(){try{i.compressedTexImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Ne(){try{i.compressedTexImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function ze(){try{i.texSubImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Ot(){try{i.texSubImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function _n(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function be(){try{i.texStorage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function U(){try{i.texStorage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function T(){try{i.texImage2D(...arguments)}catch(G){Ae("WebGLState:",G)}}function et(){try{i.texImage3D(...arguments)}catch(G){Ae("WebGLState:",G)}}function Lt(G){return p[G]!==void 0?p[G]:i.getParameter(G)}function yt(G,Y){p[G]!==Y&&(i.pixelStorei(G,Y),p[G]=Y)}function Ct(G){pt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),pt.copy(G))}function zt(G){$t.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),$t.copy(G))}function gt(G,Y){let ft=c.get(Y);ft===void 0&&(ft=new WeakMap,c.set(Y,ft));let Xt=ft.get(G);Xt===void 0&&(Xt=i.getUniformBlockIndex(Y,G.name),i.uniformBlockBinding(Y,Xt,Xt),ft.set(G,Xt))}function _t(G,Y,ft){let Dt=c.get(Y).get(G);l[Dt]!==ft&&(i.bindBufferBase(i.UNIFORM_BUFFER,Dt,ft),l[Dt]=ft)}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},Mt=null,xt={},d={},l={},f=new WeakMap,g=[],I=null,_=!1,y=null,S=null,L=null,E=null,F=null,N=null,M=null,A=new Me(0,0,0),q=0,z=!1,W=null,Q=null,ut=null,V=null,at=null,pt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Kt,disable:re,bindFramebuffer:He,drawBuffers:_e,useProgram:Oe,setBlending:kt,setMaterial:Rt,setFlipSided:Vt,setCullFace:Ut,setLineWidth:Le,setPolygonOffset:ce,setScissorTest:Xe,activeTexture:qe,bindTexture:sn,unbindTexture:X,compressedTexImage2D:Ee,compressedTexImage3D:Ne,texImage2D:T,texImage3D:et,pixelStorei:yt,getParameter:Lt,updateUBOMapping:gt,uniformBlockBinding:_t,texStorage2D:be,texStorage3D:U,texSubImage2D:ze,texSubImage3D:Ot,compressedTexSubImage2D:_n,compressedTexSubImage3D:de,scissor:Ct,viewport:zt,reset:Gt}}function a1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap,p=new Set,d,f=new WeakMap,g=new Set,I=new FinalizationRegistry(U=>g.delete(U)),_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,T){return _?new OffscreenCanvas(U,T):ka("canvas")}function S(U,T,et){let Lt=1,yt=be(U);if((yt.width>et||yt.height>et)&&(Lt=et/Math.max(yt.width,yt.height)),Lt<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let Ct=Math.floor(Lt*yt.width),zt=Math.floor(Lt*yt.height);d===void 0&&(d=y(Ct,zt));let gt=T?y(Ct,zt):d;return gt.width=Ct,gt.height=zt,gt.getContext("2d").drawImage(U,0,0,Ct,zt),Re("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Ct+"x"+zt+")."),gt}else return"data"in U&&Re("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function L(U){return U.generateMipmaps}function E(U){i.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(U,T,et,Lt,yt,Ct=!1){if(U!==null){if(i[U]!==void 0)return i[U];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let zt;Lt&&(zt=t.get("EXT_texture_norm16"),zt||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=T;if(T===i.RED&&(et===i.FLOAT&&(gt=i.R32F),et===i.HALF_FLOAT&&(gt=i.R16F),et===i.UNSIGNED_BYTE&&(gt=i.R8),et===i.UNSIGNED_SHORT&&zt&&(gt=zt.R16_EXT),et===i.SHORT&&zt&&(gt=zt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.R8UI),et===i.UNSIGNED_SHORT&&(gt=i.R16UI),et===i.UNSIGNED_INT&&(gt=i.R32UI),et===i.BYTE&&(gt=i.R8I),et===i.SHORT&&(gt=i.R16I),et===i.INT&&(gt=i.R32I)),T===i.RG&&(et===i.FLOAT&&(gt=i.RG32F),et===i.HALF_FLOAT&&(gt=i.RG16F),et===i.UNSIGNED_BYTE&&(gt=i.RG8),et===i.UNSIGNED_SHORT&&zt&&(gt=zt.RG16_EXT),et===i.SHORT&&zt&&(gt=zt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RG8UI),et===i.UNSIGNED_SHORT&&(gt=i.RG16UI),et===i.UNSIGNED_INT&&(gt=i.RG32UI),et===i.BYTE&&(gt=i.RG8I),et===i.SHORT&&(gt=i.RG16I),et===i.INT&&(gt=i.RG32I)),T===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),et===i.UNSIGNED_INT&&(gt=i.RGB32UI),et===i.BYTE&&(gt=i.RGB8I),et===i.SHORT&&(gt=i.RGB16I),et===i.INT&&(gt=i.RGB32I)),T===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),et===i.UNSIGNED_INT&&(gt=i.RGBA32UI),et===i.BYTE&&(gt=i.RGBA8I),et===i.SHORT&&(gt=i.RGBA16I),et===i.INT&&(gt=i.RGBA32I)),T===i.RGB&&(et===i.UNSIGNED_SHORT&&zt&&(gt=zt.RGB16_EXT),et===i.SHORT&&zt&&(gt=zt.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),T===i.RGBA){let _t=Ct?Ao:cn.getTransfer(yt);et===i.FLOAT&&(gt=i.RGBA32F),et===i.HALF_FLOAT&&(gt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(gt=_t===En?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&zt&&(gt=zt.RGBA16_EXT),et===i.SHORT&&zt&&(gt=zt.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(U,T){let et;return U?T===null||T===Ss||T===la?et=i.DEPTH24_STENCIL8:T===ws?et=i.DEPTH32F_STENCIL8:T===no&&(et=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ss||T===la?et=i.DEPTH_COMPONENT24:T===ws?et=i.DEPTH_COMPONENT32F:T===no&&(et=i.DEPTH_COMPONENT16),et}function A(U,T){return L(U)===!0||U.isFramebufferTexture&&U.minFilter!==pi&&U.minFilter!==Oi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function q(U){let T=new WeakRef(U);n.get(U).__ref=T,g.add(T),I.register(U,T,T)}function z(U){let T=n.get(U).__ref;T!==void 0&&(g.delete(T),I.unregister(T))}function W(U){ut(U.target)}function Q(U){V(U.target)}function ut(U){U.removeEventListener("dispose",W),z(U),ct(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&p.delete(U)}function V(U){U.removeEventListener("dispose",Q),z(U),Pt(U)}function at(){for(let U of g){let T=U.deref();T!==void 0&&(T.isRenderTarget===!0?V(T):ut(T))}g.clear(),p.clear()}function ct(U){let T=n.get(U);if(T.__webglInit===void 0)return;let et=U.source,Lt=f.get(et);if(Lt){let yt=Lt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&st(U),Object.keys(Lt).length===0&&f.delete(et)}n.remove(U)}function st(U){let T=n.get(U);i.deleteTexture(T.__webglTexture);let et=U.source,Lt=f.get(et);delete Lt[T.__cacheKey],a.memory.textures--}function Pt(U){let T=n.get(U);T.__depthDisposeCallback&&T.__depthDisposeCallback();let et=U.depthTexture;if(et&&et.renderTarget===U&&ut(et),U.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let Ct=0;Ct<T.__webglFramebuffer[yt].length;Ct++)i.deleteFramebuffer(T.__webglFramebuffer[yt][Ct]);else i.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)i.deleteFramebuffer(T.__webglFramebuffer[yt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Lt=U.textures;for(let yt=0,Ct=Lt.length;yt<Ct;yt++){let zt=n.get(Lt[yt]);zt.__webglTexture&&(i.deleteTexture(zt.__webglTexture),a.memory.textures--),n.remove(Lt[yt])}n.remove(U)}let lt=0;function Mt(){lt=0}function xt(){return lt}function Ht(U){lt=U}function le(){let U=lt;return U>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),lt+=1,U}function pt(U){let T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.mipmapsAutoUpdate),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function $t(U,T){let et=n.get(U);if(U.isVideoTexture&&_n(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){let Lt=U.image;if(Lt===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Lt.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(et,U,T);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+T)}function ie(U,T){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Rt(et,U,T);return}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+T)}function xe(U,T){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Rt(et,U,T);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+T)}function Kt(U,T){let et=n.get(U);if(U.version>0&&et.__version!==U.version){Vt(et,U,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+T)}let re={[Bs]:i.REPEAT,[Fs]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},He={[pi]:i.NEAREST,[Wd]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[Oi]:i.LINEAR,[Gc]:i.LINEAR_MIPMAP_NEAREST,[hr]:i.LINEAR_MIPMAP_LINEAR},_e={[$d]:i.NEVER,[Zu]:i.ALWAYS,[Zd]:i.LESS,[Yu]:i.LEQUAL,[Jd]:i.EQUAL,[$u]:i.GEQUAL,[Kd]:i.GREATER,[jd]:i.NOTEQUAL};function Oe(U,T){if(T.type===ws&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Oi||T.magFilter===Gc||T.magFilter===jo||T.magFilter===hr||T.minFilter===Oi||T.minFilter===Gc||T.minFilter===jo||T.minFilter===hr)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,re[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,re[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,re[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,He[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,He[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,_e[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==jo&&T.minFilter!==hr||T.type===ws&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function We(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",W),q(T));let Lt=T.source,yt=f.get(Lt);yt===void 0&&(yt={},f.set(Lt,yt));let Ct=pt(T);if(Ct!==U.__cacheKey){yt[Ct]===void 0&&(yt[Ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),yt[Ct].usedTimes++;let zt=yt[U.__cacheKey];zt!==void 0&&(yt[U.__cacheKey].usedTimes--,zt.usedTimes===0&&st(T)),U.__cacheKey=Ct,U.__webglTexture=yt[Ct].texture}return et}function vt(U,T,et){return Math.floor(Math.floor(U/et)/T)}function kt(U,T,et,Lt){let Ct=U.updateRanges;if(Ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,et,Lt,T.data);else{Ct.sort((G,Y)=>G.start-Y.start);let zt=0;for(let G=1;G<Ct.length;G++){let Y=Ct[zt],ft=Ct[G],Xt=Y.start+Y.count,Dt=vt(ft.start,T.width,4),Wt=vt(Y.start,T.width,4);ft.start<=Xt+1&&Dt===Wt&&vt(ft.start+ft.count-1,T.width,4)===Dt?Y.count=Math.max(Y.count,ft.start+ft.count-Y.start):(++zt,Ct[zt]=ft)}Ct.length=zt+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let G=0,Y=Ct.length;G<Y;G++){let ft=Ct[G],Xt=Math.floor(ft.start/4),Dt=Math.ceil(ft.count/4),Wt=Xt%T.width,ue=Math.floor(Xt/T.width),Ue=Dt,Et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ue),e.texSubImage2D(i.TEXTURE_2D,0,Wt,ue,Ue,Et,et,Lt,T.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function Rt(U,T,et){let Lt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Lt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Lt=i.TEXTURE_3D);let yt=We(U,T),Ct=T.source;e.bindTexture(Lt,U.__webglTexture,i.TEXTURE0+et);let zt=n.get(Ct);if(Ct.version!==zt.__version||yt===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let Et=cn.getPrimaries(cn.workingColorSpace),pe=T.colorSpace===fr?null:cn.getPrimaries(T.colorSpace),we=T.colorSpace===fr||Et===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let _t=S(T.image,!1,s.maxTextureSize);_t=de(T,_t);let Gt=r.convert(T.format,T.colorSpace),G=r.convert(T.type),Y=N(T.internalFormat,Gt,G,T.normalized,T.colorSpace,T.isVideoTexture);Oe(Lt,T);let ft,Xt=T.mipmaps,Dt=T.isVideoTexture!==!0,Wt=zt.__version===void 0||yt===!0,ue=Ct.dataReady,Ue=A(T,_t);if(T.isDepthTexture)Y=M(T.format===ur,T.type),Wt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Y,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Y,_t.width,_t.height,0,Gt,G,null));else if(T.isDataTexture)if(Xt.length>0){Dt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Ue,Y,Xt[0].width,Xt[0].height);for(let Et=0,pe=Xt.length;Et<pe;Et++)ft=Xt[Et],Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,ft.width,ft.height,Gt,G,ft.data):e.texImage2D(i.TEXTURE_2D,Et,Y,ft.width,ft.height,0,Gt,G,ft.data);T.generateMipmaps=!1}else Dt?(Wt&&e.texStorage2D(i.TEXTURE_2D,Ue,Y,_t.width,_t.height),ue&&kt(T,_t,Gt,G)):e.texImage2D(i.TEXTURE_2D,0,Y,_t.width,_t.height,0,Gt,G,_t.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Dt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Y,Xt[0].width,Xt[0].height,_t.depth);for(let Et=0,pe=Xt.length;Et<pe;Et++)if(ft=Xt[Et],T.format!==Es)if(Gt!==null)if(Dt){if(ue)if(T.layerUpdates.size>0){let we=nf(ft.width,ft.height,T.format,T.type);for(let Yt of T.layerUpdates){let on=ft.data.subarray(Yt*we/ft.data.BYTES_PER_ELEMENT,(Yt+1)*we/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,Yt,ft.width,ft.height,1,Gt,on)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,ft.width,ft.height,_t.depth,Gt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Y,ft.width,ft.height,_t.depth,0,ft.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?ue&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,ft.width,ft.height,_t.depth,Gt,G,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,Y,ft.width,ft.height,_t.depth,0,Gt,G,ft.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Dt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Ue,Y,Xt[0].width,Xt[0].height);for(let Et=0,pe=Xt.length;Et<pe;Et++)ft=Xt[Et],T.format!==Es?Gt!==null?Dt?ue&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,ft.width,ft.height,Gt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,Y,ft.width,ft.height,0,ft.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,ft.width,ft.height,Gt,G,ft.data):e.texImage2D(i.TEXTURE_2D,Et,Y,ft.width,ft.height,0,Gt,G,ft.data)}else if(T.isDataArrayTexture)if(Dt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Y,_t.width,_t.height,_t.depth),ue)if(T.layerUpdates.size>0){let Et=nf(_t.width,_t.height,T.format,T.type);for(let pe of T.layerUpdates){let we=_t.data.subarray(pe*Et/_t.data.BYTES_PER_ELEMENT,(pe+1)*Et/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,_t.width,_t.height,1,Gt,G,we)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Gt,G,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,_t.width,_t.height,_t.depth,0,Gt,G,_t.data);else if(T.isData3DTexture)Dt?(Wt&&e.texStorage3D(i.TEXTURE_3D,Ue,Y,_t.width,_t.height,_t.depth),ue&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Gt,G,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Y,_t.width,_t.height,_t.depth,0,Gt,G,_t.data);else if(T.isFramebufferTexture){if(Wt)if(Dt)e.texStorage2D(i.TEXTURE_2D,Ue,Y,_t.width,_t.height);else{let Et=_t.width,pe=_t.height;for(let we=0;we<Ue;we++)e.texImage2D(i.TEXTURE_2D,we,Y,Et,pe,0,Gt,G,null),Et>>=1,pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let Et=i.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),_t.parentNode!==Et){Et.appendChild(_t),p.add(T),Et.onpaint=pe=>{let we=pe.changedElements;for(let Yt of p)we.includes(Yt.image)&&(Yt.needsUpdate=!0)},Et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let we=i.RGBA,Yt=i.RGBA,on=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,Yt,on,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Dt&&Wt){let Et=be(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Ue,Y,Et.width,Et.height)}for(let Et=0,pe=Xt.length;Et<pe;Et++)ft=Xt[Et],Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Gt,G,ft):e.texImage2D(i.TEXTURE_2D,Et,Y,Gt,G,ft);T.generateMipmaps=!1}else if(Dt){if(Wt){let Et=be(_t);e.texStorage2D(i.TEXTURE_2D,Ue,Y,Et.width,Et.height)}ue&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,G,_t)}else e.texImage2D(i.TEXTURE_2D,0,Y,Gt,G,_t);L(T)&&T.mipmapsAutoUpdate===!0&&E(Lt),zt.__version=Ct.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Vt(U,T,et){if(T.image.length!==6)return;let Lt=We(U,T),yt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+et);let Ct=n.get(yt);if(yt.version!==Ct.__version||Lt===!0){e.activeTexture(i.TEXTURE0+et);let zt=cn.getPrimaries(cn.workingColorSpace),gt=T.colorSpace===fr?null:cn.getPrimaries(T.colorSpace),_t=T.colorSpace===fr||zt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Gt=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let Yt=0;Yt<6;Yt++)!Gt&&!G?Y[Yt]=S(T.image[Yt],!0,s.maxCubemapSize):Y[Yt]=G?T.image[Yt].image:T.image[Yt],Y[Yt]=de(T,Y[Yt]);let ft=Y[0],Xt=r.convert(T.format,T.colorSpace),Dt=r.convert(T.type),Wt=N(T.internalFormat,Xt,Dt,T.normalized,T.colorSpace),ue=T.isVideoTexture!==!0,Ue=Ct.__version===void 0||Lt===!0,Et=yt.dataReady,pe=A(T,ft);Oe(i.TEXTURE_CUBE_MAP,T);let we;if(T.isDepthTexture){if(Wt=M(T.format===ur,T.type),Ue)if(ue)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Wt,ft.width,ft.height);else for(let Yt=0;Yt<6;Yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Wt,ft.width,ft.height,0,Xt,Dt,null)}else if(Gt){ue&&Ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Wt,ft.width,ft.height);for(let Yt=0;Yt<6;Yt++){we=Y[Yt].mipmaps;for(let on=0;on<we.length;on++){let zn=we[on];T.format!==Es?Xt!==null?ue?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on,0,0,zn.width,zn.height,Xt,zn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on,Wt,zn.width,zn.height,0,zn.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on,0,0,zn.width,zn.height,Xt,Dt,zn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on,Wt,zn.width,zn.height,0,Xt,Dt,zn.data)}}}else{if(we=T.mipmaps,ue&&Ue){we.length>0&&pe++;let Yt=be(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Wt,Yt.width,Yt.height)}for(let Yt=0;Yt<6;Yt++)if(G){ue?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,0,0,Y[Yt].width,Y[Yt].height,Xt,Dt,Y[Yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Wt,Y[Yt].width,Y[Yt].height,0,Xt,Dt,Y[Yt].data);for(let on=0;on<we.length;on++){let hn=we[on].image[Yt].image;ue?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on+1,0,0,hn.width,hn.height,Xt,Dt,hn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on+1,Wt,hn.width,hn.height,0,Xt,Dt,hn.data)}}else{ue?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,0,0,Xt,Dt,Y[Yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Wt,Xt,Dt,Y[Yt]);for(let on=0;on<we.length;on++){let zn=we[on];ue?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on+1,0,0,Xt,Dt,zn.image[Yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,on+1,Wt,Xt,Dt,zn.image[Yt])}}}L(T)&&T.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),Ct.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ut(U,T,et,Lt,yt,Ct){let zt=r.convert(et.format,et.colorSpace),gt=r.convert(et.type),_t=N(et.internalFormat,zt,gt,et.normalized,et.colorSpace),Gt=n.get(T),G=n.get(et);if(G.__renderTarget=T,!Gt.__hasExternalTextures){let Y=Math.max(1,T.width>>Ct),ft=Math.max(1,T.height>>Ct);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,Ct,_t,Y,ft,T.depth,0,zt,gt,null):e.texImage2D(yt,Ct,_t,Y,ft,0,zt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ot(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Lt,yt,G.__webglTexture,0,ze(T)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Lt,yt,G.__webglTexture,Ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(U,T,et){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){let Lt=T.depthTexture,yt=Lt&&Lt.isDepthTexture?Lt.type:null,Ct=M(T.stencilBuffer,yt),zt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(T),Ct,T.width,T.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(T),Ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,U)}else{let Lt=T.textures;for(let yt=0;yt<Lt.length;yt++){let Ct=Lt[yt],zt=r.convert(Ct.format,Ct.colorSpace),gt=r.convert(Ct.type),_t=N(Ct.internalFormat,zt,gt,Ct.normalized,Ct.colorSpace);Ot(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(T),_t,T.width,T.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(T),_t,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_t,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(U,T,et){let Lt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let yt=n.get(T.depthTexture);yt.__renderTarget=T;let Ct=Lt?T.depthTexture.image[0]:T.depthTexture.image;(!yt.__webglTexture||Ct.width!==T.width||Ct.height!==T.height)&&(Ct.width=T.width,Ct.height=T.height,T.depthTexture.needsUpdate=!0),Lt?Kt(T.depthTexture,0):$t(T.depthTexture,0);let zt=yt.__webglTexture,gt=ze(T),_t=Lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,Gt=T.depthTexture.format===ur?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ar)Ot(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Gt,_t,zt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Gt,_t,zt,0);else if(T.depthTexture.format===ur)Ot(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Gt,_t,zt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Gt,_t,zt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(U){let T=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){let Lt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Lt){let yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Lt.removeEventListener("dispose",yt)};Lt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=Lt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(et)for(let Lt=0;Lt<6;Lt++)ce(T.__webglFramebuffer[Lt],U,Lt);else U.texture.mipmaps.length>0?ce(T.__webglFramebuffer[0],U,0):ce(T.__webglFramebuffer,U,0);else if(et){T.__webglDepthbuffer=[];for(let Lt=0;Lt<6;Lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Lt]),T.__webglDepthbuffer[Lt]===void 0)T.__webglDepthbuffer[Lt]=i.createRenderbuffer(),Le(T.__webglDepthbuffer[Lt],U,!1);else{let yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=T.__webglDepthbuffer[Lt];i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,Ct)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Le(T.__webglDepthbuffer,U,!1);else{let yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,Ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(U,T,et){let Lt=n.get(U);T!==void 0&&Ut(Lt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&Xe(U)}function sn(U){let T=U.texture,et=n.get(U),Lt=n.get(T);U.addEventListener("dispose",Q),q(U);let yt=U.textures,Ct=U.isWebGLCubeRenderTarget===!0,zt=yt.length>1;if(zt||(Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture()),Lt.__version=T.version,a.memory.textures++),Ct){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(T.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let _t=0;_t<T.mipmaps.length;_t++)et.__webglFramebuffer[gt][_t]=i.createFramebuffer()}else et.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<T.mipmaps.length;gt++)et.__webglFramebuffer[gt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(zt)for(let gt=0,_t=yt.length;gt<_t;gt++){let Gt=n.get(yt[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Ot(U)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<yt.length;gt++){let _t=yt[gt];et.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);let Gt=r.convert(_t.format,_t.colorSpace),G=r.convert(_t.type),Y=N(_t.internalFormat,Gt,G,_t.normalized,_t.colorSpace,U.isXRRenderTarget===!0),ft=ze(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Y,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(i.TEXTURE_CUBE_MAP,Lt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,T);for(let gt=0;gt<6;gt++)if(T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)Ut(et.__webglFramebuffer[gt][_t],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else Ut(et.__webglFramebuffer[gt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);L(T)?E(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(zt){for(let gt=0,_t=yt.length;gt<_t;gt++){let Gt=yt[gt],G=n.get(Gt),Y=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Y=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,G.__webglTexture),Oe(Y,Gt),Ut(et.__webglFramebuffer,U,Gt,i.COLOR_ATTACHMENT0+gt,Y,0),L(Gt)&&E(Y)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(gt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Lt.__webglTexture),Oe(gt,T),T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)Ut(et.__webglFramebuffer[_t],U,T,i.COLOR_ATTACHMENT0,gt,_t);else Ut(et.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,gt,0);L(T)?E(gt):T.mipmaps.length>0&&i.texParameteri(gt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&Xe(U)}function X(U){let T=U.textures;for(let et=0,Lt=T.length;et<Lt;et++){let yt=T[et];if(L(yt)&&yt.mipmapsAutoUpdate===!0){let Ct=F(U),zt=n.get(yt).__webglTexture;e.bindTexture(Ct,zt),E(Ct),e.unbindTexture()}}}let Ee=[];function Ne(U){if(U.samples>0){if(Ot(U)===!1){let T=U.textures,et=U.width,Lt=U.height,yt=i.COLOR_BUFFER_BIT,Ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(U),gt=T.length>1;if(gt)for(let Gt=0;Gt<T.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Gt=0;Gt<T.length;Gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Gt]);let G=n.get(T[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,et,Lt,0,0,et,Lt,yt,i.NEAREST),l===!0&&(Ee.length=0,Ee.push(i.COLOR_ATTACHMENT0+Gt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Ee.push(Ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Gt=0;Gt<T.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Gt]);let G=n.get(T[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,G,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ze(U){return Math.min(s.maxSamples,U.samples)}function Ot(U){let T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _n(U){let T=a.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function de(U,T){let et=U.colorSpace,Lt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Eo&&et!==fr&&(cn.getTransfer(et)===En?(Lt!==Es||yt!==qi)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",et)),T}function be(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=Mt,this.getTextureUnits=xt,this.setTextureUnits=Ht,this.setTexture2D=$t,this.setTexture2DArray=ie,this.setTexture3D=xe,this.setTextureCube=Kt,this.rebindTextures=qe,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ot,this.dispose=at}function o1(i,t){function e(n,s=fr){let r,a=cn.getTransfer(s);if(n===qi)return i.UNSIGNED_BYTE;if(n===Hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return i.BYTE;if(n===Gu)return i.SHORT;if(n===no)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===Ss)return i.UNSIGNED_INT;if(n===ws)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Wu)return i.ALPHA;if(n===Xu)return i.RGB;if(n===Es)return i.RGBA;if(n===ar)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===qu)return i.RED;if(n===Xc)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===Qo||n===tl||n===el||n===nl)if(a===En)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Zc||n===Jc||n===Kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Qc||n===th||n===eh||n===nh||n===il||n===ih)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===Qc)return a===En?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===th)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eh)return r.COMPRESSED_R11_EAC;if(n===nh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===il)return r.COMPRESSED_RG11_EAC;if(n===ih)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===xh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ah)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ch)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ph)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_h||n===yh||n===vh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_h)return a===En?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bh||n===Mh||n===sl||n===Sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var l1=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hs({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends zs{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,g=null,I=typeof XRWebGLBinding!="undefined",_=new xf,y={},S=e.getContextAttributes(),L=null,E=null,F=[],N=[],M=new Nt,A=null,q=null,z=new ri;z.viewport=new Vn;let W=new ri;W.viewport=new Vn;let Q=[z,W],ut=new Uc,V=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let $t=F[pt];return $t===void 0&&($t=new Wa,F[pt]=$t),$t.getTargetRaySpace()},this.getControllerGrip=function(pt){let $t=F[pt];return $t===void 0&&($t=new Wa,F[pt]=$t),$t.getGripSpace()},this.getHand=function(pt){let $t=F[pt];return $t===void 0&&($t=new Wa,F[pt]=$t),$t.getHandSpace()};function ct(pt){let $t=N.indexOf(pt.inputSource);if($t===-1)return;let ie=F[$t];ie!==void 0&&(ie.update(pt.inputSource,pt.frame,c||a),ie.dispatchEvent({type:pt.type,data:pt.inputSource}))}function st(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",Pt);for(let pt=0;pt<F.length;pt++){let $t=N[pt];$t!==null&&(N[pt]=null,F[pt].disconnect($t))}V=null,at=null,_.reset();for(let pt in y)delete y[pt];if(t.setRenderTarget(L),f=null,d=null,p=null,s=null,E=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(M.width,M.height,!1),q!==null){let pt=q.camera;pt.fov=q.fov,pt.zoom=q.zoom,pt.updateProjectionMatrix(),q=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(pt){c=pt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&I&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",st),s.addEventListener("inputsourceschange",Pt),S.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(M),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,xe=null,Kt=null;S.depth&&(Kt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ie=S.stencil?ur:ar,xe=S.stencil?la:Ss);let re={colorFormat:e.RGBA8,depthFormat:Kt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(re),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Bi(d.textureWidth,d.textureHeight,{format:Es,type:qi,depthTexture:new lr(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ie),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Bi(f.framebufferWidth,f.framebufferHeight,{format:Es,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Pt(pt){for(let $t=0;$t<pt.removed.length;$t++){let ie=pt.removed[$t],xe=N.indexOf(ie);xe>=0&&(N[xe]=null,F[xe].disconnect(ie))}for(let $t=0;$t<pt.added.length;$t++){let ie=pt.added[$t],xe=N.indexOf(ie);if(xe===-1){for(let re=0;re<F.length;re++)if(re>=N.length){N.push(ie),xe=re;break}else if(N[re]===null){N[re]=ie,xe=re;break}if(xe===-1)break}let Kt=F[xe];Kt&&Kt.connect(ie)}}function lt(pt,$t){$t===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices($t.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let $t=pt.near,ie=pt.far;_.texture!==null&&(_.depthNear>0&&($t=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),ut.near=W.near=z.near=$t,ut.far=W.far=z.far=ie,(V!==ut.near||at!==ut.far)&&(s.updateRenderState({depthNear:ut.near,depthFar:ut.far}),V=ut.near,at=ut.far),ut.layers.mask=pt.layers.mask|6,z.layers.mask=ut.layers.mask&-5,W.layers.mask=ut.layers.mask&-3;let xe=pt.parent,Kt=ut.cameras;lt(ut,xe);for(let re=0;re<Kt.length;re++)lt(Kt[re],xe);ut.projectionMatrix.copy(z.projectionMatrix),ut.projectionMatrixInverse.copy(z.projectionMatrixInverse),q===null&&pt.isPerspectiveCamera&&(q={camera:pt,fov:pt.fov,zoom:pt.zoom}),Mt(pt,ut,xe)};function Mt(pt,$t,ie){ie===null?pt.matrix.copy($t.matrixWorld):(pt.matrix.copy(ie.matrixWorld),pt.matrix.invert(),pt.matrix.multiply($t.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy($t.projectionMatrix),pt.projectionMatrixInverse.copy($t.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=cc*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(pt){l=pt,d!==null&&(d.fixedFoveation=pt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=pt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ut)},this.getCameraTexture=function(pt){return y[pt]};let xt=null;function Ht(pt,$t){if(u=$t.getViewerPose(c||a),g=$t,u!==null){let ie=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let xe=!1;ie.length!==ut.cameras.length&&(ut.cameras.length=0,xe=!0);for(let _e=0;_e<ie.length;_e++){let Oe=ie[_e],We=null;if(f!==null)We=f.getViewport(Oe);else{let kt=p.getViewSubImage(d,Oe);We=kt.viewport,_e===0&&(t.setRenderTargetTextures(E,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(E))}let vt=Q[_e];vt===void 0&&(vt=new ri,vt.layers.enable(_e),vt.viewport=new Vn,Q[_e]=vt),vt.matrix.fromArray(Oe.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Oe.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(We.x,We.y,We.width,We.height),_e===0&&(ut.matrix.copy(vt.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),xe===!0&&ut.cameras.push(vt)}let Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){p=n.getBinding();let _e=p.getDepthInformation(ie[0]);_e&&_e.isValid&&_e.texture&&_.init(_e,s.renderState)}if(Kt&&Kt.includes("camera-access")&&I){t.state.unbindTexture(),p=n.getBinding();for(let _e=0;_e<ie.length;_e++){let Oe=ie[_e].camera;if(Oe){let We=y[Oe];We||(We=new Uo,y[Oe]=We);let vt=p.getCameraImage(Oe);We.sourceTexture=vt}}}}for(let ie=0;ie<F.length;ie++){let xe=N[ie],Kt=F[ie];xe!==null&&Kt!==void 0&&Kt.update(xe,$t,c||a)}xt&&xt(pt,$t),$t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$t}),g=null}let le=new Fp;le.setAnimationLoop(Ht),this.setAnimationLoop=function(pt){xt=pt},this.dispose=function(){}}},h1=new In,qp=new Fe;qp.set(-1,0,0,0,1,0,0,0,1);function u1(i,t){function e(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function n(_,y){y.color.getRGB(_.fogColor.value,Qu(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function s(_,y,S,L,E){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(_,y):y.isMeshLambertMaterial?(r(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(_,y),p(_,y)):y.isMeshPhongMaterial?(r(_,y),u(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(_,y),d(_,y),y.isMeshPhysicalMaterial&&f(_,y,E)):y.isMeshMatcapMaterial?(r(_,y),g(_,y)):y.isMeshDepthMaterial?r(_,y):y.isMeshDistanceMaterial?(r(_,y),I(_,y)):y.isMeshNormalMaterial?r(_,y):y.isLineBasicMaterial?(a(_,y),y.isLineDashedMaterial&&o(_,y)):y.isPointsMaterial?l(_,y,S,L):y.isSpriteMaterial?c(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,e(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===oi&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,e(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===oi&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,e(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,e(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);let S=t.get(y),L=S.envMap,E=S.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(E)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(qp),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,_.aoMapTransform))}function a(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform))}function o(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function l(_,y,S,L){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*S,_.scale.value=L*.5,y.map&&(_.map.value=y.map,e(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function u(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function p(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function d(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function f(_,y,S){_.ior.value=y.ior,y.diffuseRoughness>0&&(_.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=y.diffuseRoughnessMap,e(y.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===oi&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.retroreflectivity>0&&(_.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,y){y.matcap&&(_.matcap.value=y.matcap)}function I(_,y){let S=t.get(y).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f1(i,t,e,n){let s={},r={};function a(S,L){let E=L.program;n.uniformBlockBinding(S,E,s[S.id])}function o(S,L){let E=s[S.id];E===void 0&&(g(S),E=l(S),s[S.id]=E,S.addEventListener("dispose",_));let F=L.program;n.updateUBOMapping(S,F);let N=t.render.frame;r[S.id]!==N&&(c(S),r[S.id]=N)}function l(S){let L=i.createBuffer(),E=S.__size,F=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,E,F),i.bindBuffer(i.UNIFORM_BUFFER,null),L}function c(S){let L=s[S.id],E=S.uniforms,F=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let N=0,M=E.length;N<M;N++){let A=E[N];if(Array.isArray(A))for(let q=0,z=A.length;q<z;q++)u(A[q],N,q,F);else u(A,N,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,L,E,F){if(d(S,L,E,F)===!0){let N=S.__offset,M=S.value;if(Array.isArray(M)){let A=0;for(let q=0;q<M.length;q++){let z=M[q],W=I(z,!0);p(z,S.__data,A),A+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else p(M,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}function p(S,L,E){typeof S=="number"||typeof S=="boolean"?L[E]=S:S.isMatrix3?(L[E]=S.elements[0],L[E+1]=S.elements[1],L[E+2]=S.elements[2],L[E+3]=0,L[E+4]=S.elements[3],L[E+5]=S.elements[4],L[E+6]=S.elements[5],L[E+7]=0,L[E+8]=S.elements[6],L[E+9]=S.elements[7],L[E+10]=S.elements[8],L[E+11]=0):ArrayBuffer.isView(S)?L.set(S.subarray(0,L.length-E),E):S.toArray(L,E)}function d(S,L,E,F){let N=S.value,M=L+"_"+E;if(Array.isArray(N)){F[M]===void 0&&(F[M]=[]);let A=F[M],q=!1;for(let z=0;z<N.length;z++)f(N[z],A,z)===!0&&(q=!0);return q}return f(N,F,M)}function f(S,L,E){if(L[E]===void 0)return typeof S=="number"||typeof S=="boolean"?L[E]=S:ArrayBuffer.isView(S)?L[E]=S.slice():L[E]=S.clone(),!0;{let F=L[E];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return L[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(F.equals(S)===!1)return F.copy(S),!0}}return!1}function g(S){let L=S.uniforms,E=0,F=16;for(let M=0,A=L.length;M<A;M++){let q=Array.isArray(L[M])?L[M]:[L[M]];for(let z=0,W=q.length;z<W;z++){let Q=q[z],ut=Array.isArray(Q.value)?Q.value:[Q.value],V=Array.isArray(L[M])||Array.isArray(Q.value),at=E;for(let st=0,Pt=ut.length;st<Pt;st++){let lt=ut[st],Mt=I(lt,V),xt=E%F,Ht=xt%Mt.boundary,le=xt+Ht;E+=Ht,le!==0&&F-le<Mt.storage&&(E+=F-le),st===0&&(at=E),E+=Mt.storage}let ct=Q.type==="int"?Int32Array:Q.type==="uint"?Uint32Array:Float32Array;Q.__data=new ct((E-at)/Float32Array.BYTES_PER_ELEMENT),Q.__offset=at}}let N=E%F;return N>0&&(E+=F-N),S.__size=E,S.__cache={},this}function I(S,L){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",S),L===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function _(S){let L=S.target;L.removeEventListener("dispose",_),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function y(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:y}}var d1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xs=null;function p1(){return Xs===null&&(Xs=new dc(d1,16,16,Dr,Ts),Xs.name="DFG_LUT",Xs.minFilter=Oi,Xs.magFilter=Oi,Xs.wrapS=Fs,Xs.wrapT=Fs,Xs.generateMipmaps=!1,Xs.needsUpdate=!0),Xs}var so=class{constructor(t={}){let{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=qi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let I=f,_=new Set([Yc,qc,Xc]),y=new Set([qi,Ss,no,la,Hc,Wc]),S=new Uint32Array(4),L=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},F=null,N=null,M=[],A=[],q=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ws,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,W=!1,Q=null,ut=null,V=null,at=null;this._outputColorSpace=ii;let ct=0,st=0,Pt=null,lt=-1,Mt=null,xt=new Vn,Ht=new Vn,le=null,pt=new Me(0),$t=0,ie=e.width,xe=e.height,Kt=1,re=null,He=null,_e=new Vn(0,0,ie,xe),Oe=new Vn(0,0,ie,xe),We=!1,vt=new Er,kt=new pc,Rt=!1,Vt=!1,Ut=new In,Le=new k,ce=new Vn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function sn(){return Pt===null?Kt:1}let X=n;function Ee(R,H){return e.getContext(R,H)}let Ne,ze,Ot,_n,de,be,U,T,et,Lt,yt,Ct,zt,gt,_t,Gt,G,Y,ft,Xt,Dt,Wt,ue;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),X===null){let H="webgl2";if(X=Ee(H,R),X===null)throw Ee(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(R){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),Ae("WebGLRenderer: "+R.message),R}function Ue(){Ne=new T_(X),Ne.init(),Dt=new o1(X,Ne),ze=new p_(X,Ne,t,Dt),Ot=new r1(X,Ne),ze.reversedDepthBuffer&&d&&Ot.buffers.depth.setReversed(!0),ut=X.createFramebuffer(),V=X.createFramebuffer(),at=X.createFramebuffer(),_n=new R_(X),de=new Xy,be=new a1(X,Ne,Ot,de,ze,Dt,_n),U=new w_(z),T=new I0(X),Wt=new f_(X,T),et=new E_(X,T,_n,Wt),Lt=new I_(X,et,T,Wt,_n),Y=new C_(X,ze,be),_t=new m_(de),yt=new Wy(z,U,Ne,ze,Wt,_t),Ct=new u1(z,de),zt=new Yy,gt=new Qy(Ne),G=new u_(z,U,Ot,Lt,g,l),Gt=new s1(z,Lt,ze),ue=new f1(X,_n,ze,Ot),ft=new d_(X,Ne,_n),Xt=new A_(X,Ne,_n),_n.programs=yt.programs,z.capabilities=ze,z.extensions=Ne,z.properties=de,z.renderLists=zt,z.shadowMap=Gt,z.state=Ot,z.info=_n}I!==qi&&(q=new L_(I,e.width,e.height,o,s,r));let Et=new _f(z,X);this.xr=Et,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Kt},this.setPixelRatio=function(R){R!==void 0&&(Kt=R,this.setSize(ie,xe,!1))},this.getSize=function(R){return R.set(ie,xe)},this.setSize=function(R,H,ot=!0){if(Et.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,xe=H,e.width=Math.floor(R*Kt),e.height=Math.floor(H*Kt),ot===!0&&(e.style.width=R+"px",e.style.height=H+"px"),q!==null&&q.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(ie*Kt,xe*Kt).floor()},this.setDrawingBufferSize=function(R,H,ot){ie=R,xe=H,Kt=ot,e.width=Math.floor(R*ot),e.height=Math.floor(H*ot),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(I===qi){Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(xt)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,H,ot,nt){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,H,ot,nt),Ot.viewport(xt.copy(_e).multiplyScalar(sn()).round())},this.getScissor=function(R){return R.copy(Oe)},this.setScissor=function(R,H,ot,nt){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,H,ot,nt),Ot.scissor(Ht.copy(Oe).multiplyScalar(sn()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(R){Ot.setScissorTest(We=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ot=!0){let nt=0;if(R){let it=!1;if(Pt!==null){let Bt=Pt.texture.format;it=_.has(Bt)}if(it){let Bt=Pt.texture.type,ne=y.has(Bt),qt=G.getClearColor(),jt=G.getClearAlpha(),O=qt.r,me=qt.g,Ge=qt.b;ne?(S[0]=O,S[1]=me,S[2]=Ge,S[3]=jt,X.clearBufferuiv(X.COLOR,0,S)):(L[0]=O,L[1]=me,L[2]=Ge,L[3]=jt,X.clearBufferiv(X.COLOR,0,L))}else nt|=X.COLOR_BUFFER_BIT}H&&(nt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),G.dispose(),zt.dispose(),gt.dispose(),be.dispose(),de.dispose(),U.dispose(),Lt.dispose(),et.dispose(),Wt.dispose(),ue.dispose(),yt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",mr),Et.removeEventListener("sessionend",Ps),Qn.stop()};function pe(R){R.preventDefault(),Ro("WebGLRenderer: Context Lost."),W=!0}function we(){Ro("WebGLRenderer: Context Restored."),W=!1;let R=_n.autoReset,H=Gt.enabled,ot=Gt.autoUpdate,nt=Gt.needsUpdate,it=Gt.type;Ue(),_n.autoReset=R,Gt.enabled=H,Gt.autoUpdate=ot,Gt.needsUpdate=nt,Gt.type=it}function Yt(R){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function on(R){let H=R.target;H.removeEventListener("dispose",on),zn(H)}function zn(R){hn(R),de.remove(R)}function hn(R){let H=de.get(R).programs;H!==void 0&&(H.forEach(function(ot){yt.releaseProgram(ot)}),R.isShaderMaterial&&yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ot,nt,it,Bt){H===null&&(H=Xe);let ne=it.isMesh&&it.matrixWorld.determinantAffine()<0,qt=Wn(R,H,ot,nt,it);Ot.setMaterial(nt,ne);let jt=ot.index,O=1;if(nt.wireframe===!0){if(jt=et.getWireframeAttribute(ot),jt===void 0)return;O=2}let me=ot.drawRange,Ge=ot.attributes.position,Qt=me.start*O,ke=(me.start+me.count)*O;Bt!==null&&(Qt=Math.max(Qt,Bt.start*O),ke=Math.min(ke,(Bt.start+Bt.count)*O)),jt!==null?(Qt=Math.max(Qt,0),ke=Math.min(ke,jt.count)):Ge!=null&&(Qt=Math.max(Qt,0),ke=Math.min(ke,Ge.count));let Dn=ke-Qt;if(Dn<0||Dn===1/0)return;Wt.setup(it,nt,qt,ot,jt);let pn,tn=ft;if(jt!==null&&(pn=T.get(jt),tn=Xt,tn.setIndex(pn)),it.isMesh)nt.wireframe===!0?(Ot.setLineWidth(nt.wireframeLinewidth*sn()),tn.setMode(X.LINES)):tn.setMode(X.TRIANGLES);else if(it.isLine){let gn=nt.linewidth;gn===void 0&&(gn=1),Ot.setLineWidth(gn*sn()),it.isLineSegments?tn.setMode(X.LINES):it.isLineLoop?tn.setMode(X.LINE_LOOP):tn.setMode(X.LINE_STRIP)}else it.isPoints?tn.setMode(X.POINTS):it.isSprite&&tn.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))tn.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let gn=it._multiDrawStarts,Zt=it._multiDrawCounts,Ln=it._multiDrawCount,Be=jt?T.get(jt).bytesPerElement:1,Nn=de.get(nt).currentProgram.getUniforms();for(let kn=0;kn<Ln;kn++)Nn.setValue(X,"_gl_DrawID",kn),tn.render(gn[kn]/Be,Zt[kn])}else if(it.isInstancedMesh)tn.renderInstances(Qt,Dn,it.count);else if(ot.isInstancedBufferGeometry){let gn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Zt=Math.min(ot.instanceCount,gn);tn.renderInstances(Qt,Dn,Zt)}else tn.render(Qt,Dn)};function us(R,H,ot,nt){Q!==null&&R.isNodeMaterial&&Q.setObject(nt,R),Rt===!0&&_t.setState(R,ot,!1),R.transparent===!0&&R.side===Hn&&R.forceSinglePass===!1?(R.side=oi,R.needsUpdate=!0,bi(R,H,nt),R.side=Lr,R.needsUpdate=!0,bi(R,H,nt),R.side=Hn):bi(R,H,nt)}this.compile=function(R,H,ot=null){ot===null&&(ot=R),Q!==null&&Q.renderStart(R,H,ot),N=gt.get(ot),N.init(H),A.push(N),ot.traverseVisible(function(it){it.isLight&&it.layers.test(H.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),R!==ot&&R.traverseVisible(function(it){it.isLight&&it.layers.test(H.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),N.setupLights(),Q!==null&&Q.updateLights(N.state.lightsArray),Vt=this.localClippingEnabled,Rt=_t.init(this.clippingPlanes,Vt),Rt===!0&&_t.setGlobalState(this.clippingPlanes,H),Q!==null&&Gt.render(N.state.shadowsArray,ot,H);let nt=new Set;return R.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Bt=it.material;if(Bt)if(Array.isArray(Bt))for(let ne=0;ne<Bt.length;ne++){let qt=Bt[ne];us(qt,ot,H,it),nt.add(qt)}else us(Bt,ot,H,it),nt.add(Bt)}),N=A.pop(),Q!==null&&Q.renderEnd(),nt},this.compileAsync=function(R,H,ot=null){let nt=this.compile(R,H,ot);return new Promise(it=>{function Bt(){if(nt.forEach(function(ne){let jt=de.get(ne).currentProgram;(jt===void 0||jt.isReady())&&nt.delete(ne)}),nt.size===0){it(R);return}setTimeout(Bt,10)}Ne.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Mn=null;function vi(R){Mn&&Mn(R)}function mr(){Qn.stop()}function Ps(){Qn.start()}let Qn=new Fp;Qn.setAnimationLoop(vi),typeof self!="undefined"&&Qn.setContext(self),this.setAnimationLoop=function(R){Mn=R,Et.setAnimationLoop(R),R===null?Qn.stop():Qn.start()},Et.addEventListener("sessionstart",mr),Et.addEventListener("sessionend",Ps),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Q!==null&&Q.renderStart(R,H);let ot=Et.enabled===!0&&Et.isPresenting===!0,nt=q!==null&&(Pt===null||ot)&&q.begin(z,Pt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(H),H=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(z,R,H,Pt),N=gt.get(R,A.length),N.init(H),N.state.textureUnits=be.getTextureUnits(),A.push(N),Ut.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?kt.setFromArrayCamera(H):vt.setFromProjectionMatrix(Ut,os,H.reversedDepth),Vt=this.localClippingEnabled,Rt=_t.init(this.clippingPlanes,Vt),F=zt.get(R,M.length),F.init(),M.push(F),this.info.render.frame++,Et.enabled===!0&&Et.isPresenting===!0){let ne=z.xr.getDepthSensingMesh();ne!==null&&Zs(ne,H,-1/0,z.sortObjects)}Zs(R,H,0,z.sortObjects),F.finish(),Q!==null&&Q.updateLights(N.state.lightsArray),z.sortObjects===!0&&F.sort(re,He),qe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,qe&&G.addToRenderList(F,R),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&_t.beginShadows();let it=N.state.shadowsArray;if(Gt.render(it,R,H),Rt===!0&&_t.endShadows(),(nt&&q.hasRenderPass())===!1){let ne=F.opaque,qt=F.transmissive;if(N.setupLights(),H.isArrayCamera){let jt=H.cameras;if(qt.length>0)for(let O=0,me=jt.length;O<me;O++){let Ge=jt[O];Ls(ne,qt,R,Ge)}qe&&G.render(R);for(let O=0,me=jt.length;O<me;O++){let Ge=jt[O];Yi(F,R,Ge,Ge.viewport)}}else qt.length>0&&Ls(ne,qt,R,H),qe&&G.render(R),Yi(F,R,H)}Pt!==null&&st===0&&(be.updateMultisampleRenderTarget(Pt),be.updateRenderTargetMipmap(Pt)),nt&&q.end(z),R.isScene===!0&&R.onAfterRender(z,R,H),Wt.resetDefaultState(),lt=-1,Mt=null,A.pop(),A.length>0?(N=A[A.length-1],be.setTextureUnits(N.state.textureUnits),Rt===!0&&_t.setGlobalState(z.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?F=M[M.length-1]:F=null,Q!==null&&Q.renderEnd()};function Zs(R,H,ot,nt){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){let ne=H.isArrayCamera?kt:vt;if(!R.frustumCulled||R.intersectsFrustum(ne)){nt&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);let qt=Lt.update(R),jt=R.material;jt.visible&&F.push(R,qt,jt,ot,ce.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let ne=H.isArrayCamera?kt:vt;if(!R.frustumCulled||R.intersectsFrustum(ne)){let qt=Lt.update(R),jt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ce.copy(qt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(jt)){let O=qt.groups;for(let me=0,Ge=O.length;me<Ge;me++){let Qt=O[me],ke=jt[Qt.materialIndex];ke&&ke.visible&&F.push(R,qt,ke,ot,ce.z,Qt,H)}}else jt.visible&&F.push(R,qt,jt,ot,ce.z,null,H)}}}let Bt=R.children;for(let ne=0,qt=Bt.length;ne<qt;ne++)Zs(Bt[ne],H,ot,nt)}function Yi(R,H,ot,nt){let{opaque:it,transmissive:Bt,transparent:ne}=R;N.setupLightsView(ot),Rt===!0&&_t.setGlobalState(z.clippingPlanes,ot),nt&&Ot.viewport(xt.copy(nt)),it.length>0&&se(it,H,ot),Bt.length>0&&se(Bt,H,ot),ne.length>0&&se(ne,H,ot),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Ls(R,H,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){let Qt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new Bi(1,1,{generateMipmaps:!0,type:Qt?Ts:qi,minFilter:hr,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cn.workingColorSpace})}let Bt=N.state.transmissionRenderTarget[nt.id],ne=nt.viewport||xt;Bt.setSize(ne.z*z.transmissionResolutionScale,ne.w*z.transmissionResolutionScale);let qt=z.getRenderTarget(),jt=z.getActiveCubeFace(),O=z.getActiveMipmapLevel();z.setRenderTarget(Bt),z.getClearColor(pt),$t=z.getClearAlpha(),$t<1&&z.setClearColor(16777215,.5),z.clear(),qe&&G.render(ot);let me=z.toneMapping;z.toneMapping=Ws;let Ge=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),Rt===!0&&_t.setGlobalState(z.clippingPlanes,nt),se(R,ot,nt),be.updateMultisampleRenderTarget(Bt),be.updateRenderTargetMipmap(Bt),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ke=0,Dn=H.length;ke<Dn;ke++){let pn=H[ke],{object:tn,geometry:gn,material:Zt,group:Ln}=pn;if(Zt.side===Hn&&tn.layers.test(nt.layers)){let Be=Zt.side;Zt.side=oi,Zt.needsUpdate=!0,fa(tn,ot,nt,gn,Zt,Ln),Zt.side=Be,Zt.needsUpdate=!0,Qt=!0}}Qt===!0&&(be.updateMultisampleRenderTarget(Bt),be.updateRenderTargetMipmap(Bt))}z.setRenderTarget(qt,jt,O),z.setClearColor(pt,$t),Ge!==void 0&&(nt.viewport=Ge),z.toneMapping=me}function se(R,H,ot){let nt=H.isScene===!0?H.overrideMaterial:null;for(let it=0,Bt=R.length;it<Bt;it++){let ne=R[it],{object:qt,geometry:jt,group:O}=ne,me=ne.material;me.allowOverride===!0&&nt!==null&&(me=nt),qt.layers.test(ot.layers)&&fa(qt,H,ot,jt,me,O)}}function fa(R,H,ot,nt,it,Bt){Q!==null&&it.isNodeMaterial&&Q.setObject(R,it),R.onBeforeRender(z,H,ot,nt,it,Bt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),it.onBeforeRender(z,H,ot,nt,R,Bt),it.transparent===!0&&it.side===Hn&&it.forceSinglePass===!1?(it.side=oi,it.needsUpdate=!0,z.renderBufferDirect(ot,H,nt,it,R,Bt),it.side=Lr,it.needsUpdate=!0,z.renderBufferDirect(ot,H,nt,it,R,Bt),it.side=Hn):z.renderBufferDirect(ot,H,nt,it,R,Bt),R.onAfterRender(z,H,ot,nt,it,Bt)}function gr(R){let H=0;for(let ot of R)ot.texture!==null&&H++;return H}function bi(R,H,ot){H.isScene!==!0&&(H=Xe);let nt=de.get(R),it=N.state.lights,Bt=N.state.shadowsArray,ne=it.state.version,qt=yt.getParameters(R,it.state,Bt,H,ot,N.state.lightProbeGridArray),jt=yt.getProgramCacheKey(qt),O=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,nt.fog=H.fog;let me=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=U.get(R.envMap||nt.environment,me),nt.envMapRotation=nt.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,O===void 0&&(R.addEventListener("dispose",on),O=new Map,nt.programs=O,nt.programVariants=new Map);let Ge=O.get(jt);if(Ge!==void 0){if(nt.currentProgram===Ge&&nt.lightsStateVersion===ne)return xr(R,qt),Ge}else qt.uniforms=yt.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,ot,qt),R.onBeforeCompile(qt,z),Ge=yt.acquireProgram(qt,jt),O.set(jt,Ge),nt.uniforms=qt.uniforms;let Qt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=_t.uniform),xr(R,qt),nt.needsLights=ss(R),nt.lightsStateVersion=ne,nt.needsLights&&(Qt.ambientLightColor.value=it.state.ambient,Qt.lightProbe.value=it.state.probe,Qt.sunLights.value=it.state.sun,Qt.sunLightShadows.value=it.state.sunShadow,Qt.directionalLights.value=it.state.directional,Qt.directionalLightShadows.value=it.state.directionalShadow,Qt.spotLights.value=it.state.spot,Qt.spotLightShadows.value=it.state.spotShadow,Qt.rectAreaLights.value=it.state.rectArea,Qt.ltc_1.value=it.state.rectAreaLTC1,Qt.ltc_2.value=it.state.rectAreaLTC2,Qt.pointLights.value=it.state.point,Qt.pointLightShadows.value=it.state.pointShadow,Qt.hemisphereLights.value=it.state.hemi,Qt.sunShadowMatrix.value=it.state.sunShadowMatrix,Qt.sunShadowCascade.value=it.state.sunShadowCascade,Qt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Qt.spotLightMatrix.value=it.state.spotLightMatrix,Qt.spotLightMap.value=it.state.spotLightMap,Qt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.numLightProbeGrids=gr(N.state.lightProbeGridArray),nt.currentProgram=Ge,nt.uniformsList=null,Ge}function Js(R,H,ot,nt,it){let Bt=de.get(R),ne=Bt.currentProgram.id+","+nt+","+it,qt=Bt.programVariants.get(ne);return qt===void 0?(qt=bi(R,H,ot),Bt.programVariants.set(ne,qt)):(Bt.currentProgram=qt,Bt.uniformsList=null,Bt.outputColorSpace=nt,Bt.toneMapping=it),qt}function Wi(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=io.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function xr(R,H){let ot=de.get(R);ot.outputColorSpace=H.outputColorSpace,ot.batching=H.batching,ot.batchingColor=H.batchingColor,ot.instancing=H.instancing,ot.instancingColor=H.instancingColor,ot.instancingMorph=H.instancingMorph,ot.skinning=H.skinning,ot.morphTargets=H.morphTargets,ot.morphNormals=H.morphNormals,ot.morphColors=H.morphColors,ot.morphTargetsCount=H.morphTargetsCount,ot.numClippingPlanes=H.numClippingPlanes,ot.numIntersection=H.numClipIntersection,ot.vertexAlphas=H.vertexAlphas,ot.vertexTangents=H.vertexTangents,ot.toneMapping=H.toneMapping}function Wn(R,H,ot,nt,it){H.isScene!==!0&&(H=Xe),be.resetTextureUnits();let Bt=H.fog,ne=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?H.environment:null,qt=Pt===null?z.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:cn.workingColorSpace,jt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,O=U.get(nt.envMap||ne,jt),me=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Ge=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Qt=!!ot.morphAttributes.position,ke=!!ot.morphAttributes.normal,Dn=!!ot.morphAttributes.color,pn=Ws;nt.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(pn=z.toneMapping);let tn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,gn=tn!==void 0?tn.length:0,Zt=de.get(nt),Ln=N.state.lights;if(Rt===!0&&(Vt===!0||R!==Mt)){let en=R===Mt&&nt.id===lt;_t.setState(nt,R,en)}let Be=!1,Nn=!1;nt.version===Zt.__version?Zt.needsLights&&Zt.lightsStateVersion!==Ln.state.version||it.isBatchedMesh&&Zt.batching===!1||!it.isBatchedMesh&&Zt.batching===!0||it.isBatchedMesh&&Zt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Zt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Zt.instancing===!1||!it.isInstancedMesh&&Zt.instancing===!0||it.isSkinnedMesh&&Zt.skinning===!1||!it.isSkinnedMesh&&Zt.skinning===!0||it.isInstancedMesh&&Zt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Zt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Zt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Zt.instancingMorph===!1&&it.morphTexture!==null||Zt.envMap!==O||nt.fog===!0&&Zt.fog!==Bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==_t.numPlanes||Zt.numIntersection!==_t.numIntersection)||Zt.vertexAlphas!==me||Zt.vertexTangents!==Ge||Zt.morphTargets!==Qt||Zt.morphNormals!==ke||Zt.morphColors!==Dn||Zt.morphTargetsCount!==gn||Zt.numLightProbeGrids!==gr(N.state.lightProbeGridArray)?Be=!0:(Zt.outputColorSpace!==qt||Zt.toneMapping!==pn)&&(Nn=!0):(Be=!0,Zt.__version=nt.version);let kn=Zt.currentProgram;(Be===!0||Nn===!0)&&(kn=Nn===!0?Js(nt,H,it,qt,pn):bi(nt,H,it),Q&&nt.isNodeMaterial&&Q.onUpdateProgram(nt,kn,Zt));let un=!1,Jn=!1,yn=!1,$e=kn.getUniforms(),Xn=Zt.uniforms;if(Ot.useProgram(kn.program)&&(un=!0,Jn=!0,yn=!0),nt.id!==lt&&(lt=nt.id,Jn=!0),un||Mt!==R){Ot.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),$e.setValue(X,"projectionMatrix",R.projectionMatrix),$e.setValue(X,"viewMatrix",R.matrixWorldInverse);let qn=$e.map.cameraPosition;qn!==void 0&&qn.setValue(X,Le.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&$e.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&$e.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Mt!==R&&(Mt=R,Jn=!0,yn=!0)}if(Zt.needsLights&&(Ln.state.sunShadowMap.length>0&&$e.setValue(X,"sunShadowMap",Ln.state.sunShadowMap,be),Ln.state.directionalShadowMap.length>0&&$e.setValue(X,"directionalShadowMap",Ln.state.directionalShadowMap,be),Ln.state.spotShadowMap.length>0&&$e.setValue(X,"spotShadowMap",Ln.state.spotShadowMap,be),Ln.state.pointShadowMap.length>0&&$e.setValue(X,"pointShadowMap",Ln.state.pointShadowMap,be)),it.isSkinnedMesh){$e.setOptional(X,it,"bindMatrix"),$e.setOptional(X,it,"bindMatrixInverse");let en=it.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),$e.setValue(X,"boneTexture",en.boneTexture,be))}it.isBatchedMesh&&($e.setOptional(X,it,"batchingTexture"),$e.setValue(X,"batchingTexture",it._matricesTexture,be),$e.setOptional(X,it,"batchingIdTexture"),$e.setValue(X,"batchingIdTexture",it._indirectTexture,be),$e.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&$e.setValue(X,"batchingColorTexture",it._colorsTexture,be));let ti=ot.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Y.update(it,ot,kn),(Jn||Zt.receiveShadow!==it.receiveShadow)&&(Zt.receiveShadow=it.receiveShadow,$e.setValue(X,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&H.environment!==null&&(Xn.envMapIntensity.value=H.environmentIntensity),Xn.dfgLUT!==void 0&&(Xn.dfgLUT.value=p1()),Jn){if($e.setValue(X,"toneMappingExposure",z.toneMappingExposure),Zt.needsLights&&Zn(Xn,yn),Bt&&nt.fog===!0&&Ct.refreshFogUniforms(Xn,Bt),Ct.refreshMaterialUniforms(Xn,nt,Kt,xe,N.state.transmissionRenderTarget[R.id]),Zt.needsLights&&Zt.numLightProbeGrids>0){let en=E,qn=0;for(let ui of N.state.lightProbeGridArray)ui.texture!==null&&(en.textures[qn]=ui.texture,en.min[qn]=ui.boundingBox.min,en.max[qn]=ui.boundingBox.max,en.resolution[qn]=ui.resolution,qn++);for(let ui in en)en[ui].length=qn;Xn.probesSH.value=en.textures,Xn.probesMin.value=en.min,Xn.probesMax.value=en.max,Xn.probesResolution.value=en.resolution}io.upload(X,Wi(Zt),Xn,be)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(io.upload(X,Wi(Zt),Xn,be),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&$e.setValue(X,"center",it.center),$e.setValue(X,"modelViewMatrix",it.modelViewMatrix),$e.setValue(X,"normalMatrix",it.normalMatrix),$e.setValue(X,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let en=nt.uniformsGroups;for(let qn=0,ui=en.length;qn<ui;qn++){let Di=en[qn];ue.update(Di,kn),ue.bind(Di,kn)}}return kn}function Zn(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function ss(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return Pt},this.setRenderTargetTextures=function(R,H,ot){let nt=de.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=H,de.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let ot=de.get(R);ot.__webglFramebuffer=H,ot.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ot=0){Pt=R,ct=H,st=ot;let nt=null,it=!1,Bt=!1;if(R){let qt=de.get(R);if(qt.__useDefaultFramebuffer!==void 0){Ot.bindFramebuffer(X.FRAMEBUFFER,qt.__webglFramebuffer),xt.copy(R.viewport),Ht.copy(R.scissor),le=R.scissorTest,Ot.viewport(xt),Ot.scissor(Ht),Ot.setScissorTest(le),lt=-1;return}else if(qt.__webglFramebuffer===void 0)be.setupRenderTarget(R);else if(qt.__hasExternalTextures)be.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let me=R.depthTexture;if(qt.__boundDepthTexture!==me){if(me!==null&&de.has(me)&&(R.width!==me.image.width||R.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(R)}}let jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Bt=!0);let O=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(O[H])?nt=O[H][ot]:nt=O[H],it=!0):R.samples>0&&be.useMultisampledRTT(R)===!1?nt=de.get(R).__webglMultisampledFramebuffer:Array.isArray(O)?nt=O[ot]:nt=O,xt.copy(R.viewport),Ht.copy(R.scissor),le=R.scissorTest}else xt.copy(_e).multiplyScalar(Kt).floor(),Ht.copy(Oe).multiplyScalar(Kt).floor(),le=We;if(ot!==0&&(nt=ut),Ot.bindFramebuffer(X.FRAMEBUFFER,nt)&&Ot.drawBuffers(R,nt),Ot.viewport(xt),Ot.scissor(Ht),Ot.setScissorTest(le),it){let qt=de.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,qt.__webglTexture,ot)}else if(Bt){let qt=H;for(let jt=0;jt<R.textures.length;jt++){let O=de.get(R.textures[jt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+jt,O.__webglTexture,ot,qt)}}else if(R!==null&&ot!==0){let qt=de.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,ot)}lt=-1};function K(R){let H=de.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=ze.textureFormatReadable(R.format),H.__typeReadable=ze.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ot,nt,it,Bt,ne,qt=0){if(!(R&&R.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ne!==void 0&&(jt=jt[ne],Array.isArray(jt)&&(jt=jt[0])),jt){Ot.bindFramebuffer(X.FRAMEBUFFER,jt);try{let O=R.textures[qt],me=O.format,Ge=O.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qt);let Qt=K(O);if(Qt.__formatReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-nt&&ot>=0&&ot<=R.height-it&&X.readPixels(H,ot,nt,it,Dt.convert(me),Dt.convert(Ge),Bt)}finally{let O=Pt!==null?de.get(Pt).__webglFramebuffer:null;Ot.bindFramebuffer(X.FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(R,H,ot,nt,it,Bt,ne,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ne!==void 0&&(jt=jt[ne],Array.isArray(jt)&&(jt=jt[0])),jt)if(H>=0&&H<=R.width-nt&&ot>=0&&ot<=R.height-it){Ot.bindFramebuffer(X.FRAMEBUFFER,jt);let O=R.textures[qt],me=O.format,Ge=O.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qt);let Qt=K(O);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ke),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),X.readPixels(H,ot,nt,it,Dt.convert(me),Dt.convert(Ge),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Dn=Pt!==null?de.get(Pt).__webglFramebuffer:null;Ot.bindFramebuffer(X.FRAMEBUFFER,Dn);let pn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await ep(X,pn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ke),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ke),X.deleteSync(pn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ot=0){let nt=Math.pow(2,-ot),it=Math.floor(R.image.width*nt),Bt=Math.floor(R.image.height*nt),ne=H!==null?H.x:0,qt=H!==null?H.y:0;be.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,ne,qt,it,Bt),Ot.unbindTexture()},this.copyTextureToTexture=function(R,H,ot=null,nt=null,it=0,Bt=0){let ne,qt,jt,O,me,Ge,Qt,ke,Dn,pn=R.isCompressedTexture?R.mipmaps[Bt]:R.image;if(ot!==null)ne=ot.max.x-ot.min.x,qt=ot.max.y-ot.min.y,jt=ot.isBox3?ot.max.z-ot.min.z:1,O=ot.min.x,me=ot.min.y,Ge=ot.isBox3?ot.min.z:0;else{let $e=Math.pow(2,-it);ne=Math.floor(pn.width*$e),qt=Math.floor(pn.height*$e),R.isDataArrayTexture?jt=pn.depth:R.isData3DTexture?jt=Math.floor(pn.depth*$e):jt=1,O=0,me=0,Ge=0}nt!==null?(Qt=nt.x,ke=nt.y,Dn=nt.z):(Qt=0,ke=0,Dn=0);let tn=Dt.convert(H.format),gn=Dt.convert(H.type),Zt;H.isData3DTexture?(be.setTexture3D(H,0),Zt=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(be.setTexture2DArray(H,0),Zt=X.TEXTURE_2D_ARRAY):(be.setTexture2D(H,0),Zt=X.TEXTURE_2D),Ot.activeTexture(X.TEXTURE0),Ot.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),Ot.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Ot.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let Ln=Ot.getParameter(X.UNPACK_ROW_LENGTH),Be=Ot.getParameter(X.UNPACK_IMAGE_HEIGHT),Nn=Ot.getParameter(X.UNPACK_SKIP_PIXELS),kn=Ot.getParameter(X.UNPACK_SKIP_ROWS),un=Ot.getParameter(X.UNPACK_SKIP_IMAGES);Ot.pixelStorei(X.UNPACK_ROW_LENGTH,pn.width),Ot.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pn.height),Ot.pixelStorei(X.UNPACK_SKIP_PIXELS,O),Ot.pixelStorei(X.UNPACK_SKIP_ROWS,me),Ot.pixelStorei(X.UNPACK_SKIP_IMAGES,Ge);let Jn=R.isDataArrayTexture||R.isData3DTexture,yn=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let $e=de.get(R),Xn=de.get(H),ti=de.get($e.__renderTarget),en=de.get(Xn.__renderTarget);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,ti.__webglFramebuffer),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let qn=0;qn<jt;qn++)Jn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,de.get(R).__webglTexture,it,Ge+qn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,de.get(H).__webglTexture,Bt,Dn+qn)),X.blitFramebuffer(O,me,O+ne,me+qt,Qt,ke,Qt+ne,ke+qt,X.DEPTH_BUFFER_BIT,X.NEAREST);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||R.isRenderTargetTexture||de.has(R)){let $e=de.get(R),Xn=de.get(H);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,V),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,at);for(let ti=0;ti<jt;ti++)Jn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.__webglTexture,it,Ge+ti):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$e.__webglTexture,it),yn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xn.__webglTexture,Bt,Dn+ti):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Xn.__webglTexture,Bt),it!==0?X.blitFramebuffer(O,me,O+ne,me+qt,Qt,ke,Qt+ne,ke+qt,X.COLOR_BUFFER_BIT,X.NEAREST):yn?X.copyTexSubImage3D(Zt,Bt,Qt,ke,Dn+ti,O,me,ne,qt):X.copyTexSubImage2D(Zt,Bt,Qt,ke,O,me,ne,qt);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Zt,Bt,Qt,ke,Dn,ne,qt,jt,tn,gn,pn.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Zt,Bt,Qt,ke,Dn,ne,qt,jt,tn,pn.data):X.texSubImage3D(Zt,Bt,Qt,ke,Dn,ne,qt,jt,tn,gn,pn):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,Qt,ke,ne,qt,tn,gn,pn.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,Qt,ke,pn.width,pn.height,tn,pn.data):X.texSubImage2D(X.TEXTURE_2D,Bt,Qt,ke,ne,qt,tn,gn,pn);Ot.pixelStorei(X.UNPACK_ROW_LENGTH,Ln),Ot.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Be),Ot.pixelStorei(X.UNPACK_SKIP_PIXELS,Nn),Ot.pixelStorei(X.UNPACK_SKIP_ROWS,kn),Ot.pixelStorei(X.UNPACK_SKIP_IMAGES,un),Bt===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&X.generateMipmap(Zt),Ot.unbindTexture()},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&be.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?be.setTextureCube(R,0):R.isData3DTexture?be.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?be.setTexture2DArray(R,0):be.setTexture2D(R,0),Ot.unbindTexture()},this.resetState=function(){ct=0,st=0,Pt=null,Ot.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=cn._getDrawingBufferColorSpace(t),e.unpackColorSpace=cn._getUnpackColorSpace()}};var ha={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},ao=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function $p(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Pn;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let p=i[u],d=0,f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(e){let u=0,p=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(let u in r){let p=Yp(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){let f=[];for(let I=0;I<a[u].length;++I)f.push(a[u][I][d]);let g=Yp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Yp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new ts(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let p=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){let I=u.getComponent(d,g);o.setComponent(d+p,g,I)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var jn="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",Zp={},te=(i,t)=>t?new mn(Object.assign({color:i},t)):Zp[i]||(Zp[i]=new mn({color:i})),xn=(i,t)=>new Je(Object.assign({color:i},t)),Jp={},m1=i=>Jp[i]||(Jp[i]=new mn({color:i,flatShading:!0}));function ve(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new jr(n);return s.colorSpace=ii,s.anisotropy=4,s}function Fr(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ua=ve(128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)});function dt(i,t,e,n,s,r,a,o,l){let c=new mt(new bn(t,e,n),typeof s=="string"?te(s):s);return c.position.set(r,a,o),l&&(c.rotation.y=l),i.add(c),c}function oe(i,t,e,n,s,r,a,o,l){let c=new mt(new Ii(t,e,n,l||16),typeof s=="string"?te(s):s);return c.position.set(r,a,o),i.add(c),c}function Ie(i,t,e,n,s,r,a,o,l,c){let u=new mt(new _i(t,c||16,c?c*.7|0:12),typeof e=="string"?te(e):e);return u.position.set(n,s,r),u.scale.set(a||1,o||1,l||1),i.add(u),u}function ls(i,t,e,n,s,r,a){let o=new mt(new bs(t,1),m1(e));return o.position.set(n,s,r),a&&o.scale.set(a[0],a[1],a[2]),i.add(o),o}function Or(i,t,e,n,s,r,a){let o=new gi(new ai({map:ua,blending:Ms,transparent:!0,depthWrite:!1,opacity:r}));return a&&o.material.color.set(a),o.scale.set(s,s,1),o.position.set(t,e,n),i.add(o),i.userData.glows=(i.userData.glows||[]).concat(o),o}function oo(i,t,e,n,s,r,a,o,l){let c=new mt(new Ke(t,e),new Je({map:n,transparent:!0,side:l?Hn:void 0,alphaTest:.05}));return c.position.set(s,r,a),o&&(c.rotation.y=o),i.add(c),c}function cl(i,t,e,n,s,r,a){let o=new mt(new Wo(t.map(l=>new Nt(l[0],l[1])),a||20),typeof e=="string"?te(e):e);return o.position.set(n,s,r),i.add(o),o}var Ys="#a8703f",Si="#6b3f1f",lo="#d4a56a",Mi="#3a2214",g1="#d23a28",x1="#f3e2bd",Kp={};function vf(i,t,e,n,s,r){let a=i+t+e+n+s;return Kp[a]||(Kp[a]=ve(n,s,o=>{o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";let l=[...i];o.font=`900 ${r}px ${jn}`,s>n?l.forEach((c,u)=>o.fillText(c,n/2,s/(l.length+1)*(u+1))):o.fillText(i,n/2,s/2+2,n-10)}))}var Qp=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],hl=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.81,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.39,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.07,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],tm=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];hl.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.43,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.52,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.77,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var jp={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};hl.forEach(i=>{!i.hc&&jp[i.k]&&(i.hc=jp[i.k])});var De={};hl.forEach(i=>{i.L=i.L||"main",i.solid===void 0&&(i.solid=i.L==="main"?1:0),De[i.k]=i});var bf=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],Mf=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],ae={};ae.table=i=>{dt(i,1.9,.08,.9,Ys,0,.74,0),dt(i,1.84,.03,.84,lo,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])dt(i,.08,.72,.08,Si,t,.36,e);dt(i,1.6,.06,.04,Si,0,.55,-.36),dt(i,1.6,.06,.04,Si,0,.55,.36)};ae.chabu=i=>{oe(i,.46,.46,.06,Ys,0,.34,0,28),oe(i,.44,.44,.02,lo,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;dt(i,.07,.32,.07,Si,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};ae.counter=i=>{dt(i,1.96,1,.8,Si,0,.5,0),dt(i,2.04,.08,.96,lo,0,1.03,.04),dt(i,1.9,.12,.04,Ys,0,.14,.41);for(let t=-2;t<=2;t++)dt(i,.04,.8,.02,"#5a3216",t*.38,.52,.405)};ae.chair=i=>{dt(i,.48,.06,.48,Ys,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])dt(i,.05,.46,.05,Si,t,.23,e);dt(i,.48,.5,.05,Ys,0,.74,-.2),dt(i,.4,.06,.03,lo,0,.86,-.18)};ae.stool=i=>{oe(i,.22,.2,.07,"#c23a2a",0,.76,0,18),oe(i,.03,.03,.72,"#3a3a40",0,.38,0,8),oe(i,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new mt(new zi(.13,.015,6,18),te("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,i.add(t)};ae.zabu=i=>{let t=dt(i,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new bn(.62,.1,.62,2,1,2),Ie(i,.05,"#e9c34a",0,.12,0)};ae.bench=i=>{dt(i,1.9,.07,.42,Ys,0,.44,0);for(let t of[-.8,.8])dt(i,.07,.42,.36,Si,t,.21,0);dt(i,1.6,.05,.04,Si,0,.2,0)};ae.register=i=>{dt(i,.9,.95,.7,Si,0,.475,0),dt(i,.96,.06,.78,lo,0,.98,0),dt(i,.5,.22,.36,"#2b2b33",0,1.12,-.05),dt(i,.42,.1,.3,"#3c3c46",0,1.26,-.12),dt(i,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=xn("#9fe0b6"),Ie(i,.07,"#e9b830",.3,1.06,.2),Ie(i,.05,"#e9b830",.22,1.04,.26)};ae.lantern=i=>{oe(i,.025,.025,1.7,Mi,0,.85,0,6),dt(i,.5,.04,.04,Mi,.2,1.68,0),oe(i,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new ye;t.position.set(.38,1.3,0),i.add(t);let e=Ie(t,.22,xn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,oe(t,.14,.14,.06,Mi,0,.3,0,12),oe(t,.14,.14,.06,Mi,0,-.3,0,12),oo(t,.2,.34,vf("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),oe(t,.01,.01,.2,Mi,0,.42,0,4),Or(t,0,0,.1,1.8,.55),i.userData.swing=t};ae.andon=i=>{for(let e of[-.17,.17])for(let n of[-.17,.17])dt(i,.04,.9,.04,Mi,e,.45,n);let t=dt(i,.32,.5,.32,xn("#fff1c8"),0,.55,0);t.userData.lit=1,dt(i,.4,.04,.4,Mi,0,.82,0),dt(i,.4,.04,.4,Mi,0,.29,0);for(let e of[-.06,.06])dt(i,.005,.48,.33,Mi,e,.55,0);Or(i,0,.55,0,2.2,.6)};ae.stonel=i=>{let t="#9a9590";dt(i,.5,.12,.5,t,0,.06,0),oe(i,.1,.13,.5,t,0,.37,0,8),dt(i,.42,.1,.42,t,0,.66,0);let e=dt(i,.3,.28,.3,xn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])dt(i,.06,.3,.06,t,s[0],.85,s[1]);let n=new mt(new xi(.45,.3,4),te(t));n.rotation.y=Math.PI/4,n.position.y=1.14,i.add(n),Ie(i,.07,t,0,1.33,0),Or(i,0,.85,0,1.6,.55)};ae.chochin=i=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let n=0;n<5;n++){let s=-.8+n*.4,r=2.25-Math.sin(n/4*Math.PI)*.25,a=Ie(i,.12,xn(t[n]),s,r,.18,1,1.25,1,12);a.userData.lit=1,Or(i,s,r,.26,.8,.35)}let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let n=0;n<8;n++){let[s,r]=e[n],[a,o]=e[n+1],l=dt(i,Math.hypot(a-s,o-r),.015,.015,Mi,(s+a)/2,(r+o)/2,.18);l.rotation.z=Math.atan2(o-r,a-s)}};ae.tanuki=i=>{let t="#8a6a4a",e="#e8d8b8";Ie(i,.3,t,0,.38,0,1,1.05,.95),Ie(i,.2,e,0,.36,.16,1,1.1,.5),Ie(i,.22,t,0,.82,.02);for(let r of[-.13,.13])Ie(i,.06,t,r,1,0),Ie(i,.055,Mi,r*.7,.85,.19,1,.8,.5),Ie(i,.02,"#fff",r*.7+.01,.86,.21);Ie(i,.045,Mi,0,.78,.22),dt(i,.34,.06,.3,"#5a4a3a",0,1.03,0),oe(i,.16,.2,.04,"#5a4a3a",0,1,0,14);let n=oe(i,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);n.rotation.z=-.3;let s=dt(i,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Ie(i,.15,t,-.2,.12,.12,1,.6,1),Ie(i,.15,t,.2,.12,.12,1,.6,1),Ie(i,.12,t,.1,.25,-.3,1,.7,1.4)};ae.barrel=i=>{cl(i,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new mt(new zi(.34,.025,6,22),te("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,i.add(e)}oo(i,.36,.36,vf("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),oe(i,.3,.3,.02,lo,0,.91,0,22)};ae.crates=i=>{let t=(e,n,s)=>{let r=new ye;r.position.y=e,r.rotation.y=n,i.add(r),dt(r,.6,.32,.44,s,0,.16,0);for(let a=0;a<3;a++)for(let o=0;o<2;o++)oe(r,.06,.06,.36,"#7a4a1a",-.18+a*.18,.3,-.1+o*.2,8),oe(r,.025,.03,.1,"#f2e6c8",-.18+a*.18,.52,-.1+o*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};ae.byobu=i=>{let t=ve(256,128,(e,n,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,n,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*n,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let n=new ye;n.position.set(-.72+e*.48,0,e%2?.08:-.08),n.rotation.y=e%2?.3:-.3,i.add(n),dt(n,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new mt(new Ke(.42,1.4),new Je({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),n.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,n.add(r)}};ae.shelf=i=>{for(let n of[-.925,.925])dt(i,.05,1.8,.42,Si,n,.9,-.1);dt(i,1.9,.05,.42,Si,0,1.775,-.1),dt(i,1.8,1.7,.02,"#2a1408",0,.9,-.3),dt(i,1.8,.06,.38,Ys,0,.03,-.1);for(let n of[.35,.8,1.25,1.65])dt(i,1.8,.04,.38,Ys,0,n,-.1);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let n of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],a=.26+e%3*.04;oe(i,.055,.065,a,r,-.72+s*.29,n+a/2,-.06,10),oe(i,.02,.03,.09,r,-.72+s*.29,n+a+.04,-.06,6),e%2&&dt(i,.1,.08,.01,x1,-.72+s*.29,n+a*.5,.012)}};ae.hibachi=i=>{cl(i,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),oe(i,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let n=ls(i,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);n.material=xn("#ff7a2a"),n.userData.lit=1}oe(i,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=oe(i,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,Or(i,0,.55,0,1.4,.6,"#ff8a3a")};ae.tank=i=>{dt(i,.7,.55,.5,Si,0,.275,0);let t=dt(i,.68,.5,.48,te("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,dt(i,.62,.4,.42,xn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,dt(i,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let n=new ye;n.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),i.add(n),Ie(n,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new mt(new xi(.04,.07,6),te("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,n.add(s),i.userData.fish=(i.userData.fish||[]).concat(n)}ls(i,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),ls(i,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};ae.jukebox=i=>{dt(i,.7,.7,.5,Si,0,.35,0),dt(i,.74,.05,.54,Ys,0,.72,0),oe(i,.24,.24,.02,"#141414",-.05,.76,.02,28),oe(i,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=dt(i,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new mt(new xi(.22,.4,18,1,!0),te("#d8a83a",{side:Hn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),i.add(e),oe(i,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),dt(i,.5,.3,.02,"#2a1408",0,.35,.26),i.userData.spin=i.children[2]};ae.pine=i=>{oe(i,.2,.16,.14,"#3a5a8a",0,.07,0,6),oe(i,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=oe(i,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,ls(i,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),ls(i,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),ls(i,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};ae.bamboo=i=>{oe(i,.22,.18,.32,"#e8e0d0",0,.16,0,18),oe(i,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,n=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;oe(i,.025,.025,s,"#6a9a3a",e,.3+s/2,n,8);for(let r=1;r<4;r++)oe(i,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,n,8);for(let r=0;r<3;r++){let a=new mt(new Ke(.32,.06),new mn({color:"#5a9a3a",side:Hn}));a.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),n+.12*Math.sin(r*2+t)),a.rotation.set(-.3,r*2+t,-.4),i.add(a)}}};ae.sakura=i=>{oe(i,.26,.22,.36,"#2a3a5a",0,.18,0,8),oe(i,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=oe(i,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=oe(i,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let n=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,a,o],l)=>ls(i,o,n[l%3],s,r,a,[1,.75,1])),i.userData.petals=1};ae.ajisai=i=>{oe(i,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)ls(i,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let n=e*1.25;ls(i,.12,t[e%4],Math.cos(n)*.12,.5+e%2*.08,Math.sin(n)*.12)}};ae.scroll=i=>{let t=ve(96,256,(e,n,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,n,s),e.fillStyle="#c8b890",e.fillRect(0,0,n,30),e.fillRect(0,s-30,n,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${jn}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,a)=>e.fillText(r,n/2,76+a*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});dt(i,.5,.04,.04,Mi,0,2.25,.04),dt(i,.5,.04,.04,Mi,0,1.02,.04),oo(i,.42,1.2,t,0,1.63,.03)};ae.menu=i=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let n=vf(t[e],"#e9d3a4","#2a1408",64,256,36);dt(i,.22,.82,.03,Si,-.7+e*.28,1.75,.015),oo(i,.18,.76,n,-.7+e*.28,1.75,.035)}dt(i,1.8,.06,.05,Mi,0,2.2,.03)};ae.clock=i=>{let t=ve(128,128,a=>{a.fillStyle="#f8f0dc",a.beginPath(),a.arc(64,64,60,0,7),a.fill(),a.fillStyle="#2a1408",a.font=`700 18px ${jn}`,a.textAlign="center",a.textBaseline="middle";for(let o=1;o<=12;o++){let l=o/12*Math.PI*2-Math.PI/2;a.fillText(String(o),64+Math.cos(l)*46,64+Math.sin(l)*46)}});dt(i,.5,.7,.1,Si,0,1.95,.05),oe(i,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=oo(i,.4,.4,t,0,2.05,.105),n=dt(i,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=dt(i,.01,.17,.01,"#1a1a1a",0,2.1,.115);i.userData.hands=[n,s],i.userData.handY=2.05;let r=new ye;r.position.set(0,1.75,.07),i.add(r),dt(r,.01,.2,.01,"#c8a040",0,-.1,0),i.userData.swing=r};ae.mado=i=>{let t=ve(256,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1a1a40"),o.addColorStop(1,"#5a3a6a"),s.fillStyle=o,s.fillRect(0,0,r,a),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*a*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new mt(new si(.62,32),new Je({map:t}));e.position.set(0,1.6,.03),i.add(e);let n=new mt(new zi(.64,.06,8,32),te(Si));n.position.set(0,1.6,.04),i.add(n);for(let s of[-.2,.2])dt(i,.02,1.2,.02,Mi,s,1.6,.05);dt(i,1.2,.02,.02,Mi,0,1.6,.05),Or(i,0,1.6,.15,1.6,.25,"#b8c8ff")};ae.fuji=i=>{let t=ve(256,160,(e,n,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,n,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,n,20)});dt(i,1.6,1,.05,"#2a1408",0,1.7,.025),oo(i,1.5,.9,t,0,1.7,.055)};ae.maneki=i=>{let t="#f8f4ec";Ie(i,.12,t,0,.13,0,1,1.1,.9),Ie(i,.1,t,0,.32,.01);for(let n of[-.06,.06]){let s=new mt(new xi(.035,.06,4),te(t));s.position.set(n,.42,0),i.add(s),Ie(i,.012,"#1a1a1a",n*.6,.34,.09)}Ie(i,.02,"#f08a9a",0,.31,.1),dt(i,.16,.025,.05,g1,0,.23,.06),Ie(i,.02,"#e9b830",0,.21,.1);let e=new ye;e.position.set(.09,.3,.02),i.add(e),Ie(e,.035,t,0,.07,0,1,1.6,1),i.userData.wave=e,Ie(i,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};ae.daruma=i=>{Ie(i,.14,"#d23a28",0,.15,0,1,1.1,1),Ie(i,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Ie(i,.016,"#1a1a1a",t,.2,.125);dt(i,.08,.012,.01,"#1a1a1a",0,.155,.13)};ae.beer=i=>{oe(i,.07,.065,.2,te("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),oe(i,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new mt(new zi(.05,.012,6,12,Math.PI),te("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,i.add(t)};ae.sake=i=>{dt(i,.34,.02,.2,Si,0,.01,0),cl(i,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])oe(i,.03,.025,.04,"#f0ece0",t,.04,0,10)};ae.yakitori=i=>{oe(i,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new ye;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,i.add(e),dt(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let n=0;n<4;n++)ls(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+n*.05,.005,0,[1.1,.9,1])}};ae.sushi=i=>{dt(i,.34,.03,.16,Ys,0,.03,0);for(let t=0;t<4;t++)dt(i,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),dt(i,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};ae.ramen=i=>{cl(i,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),oe(i,.12,.12,.01,"#d89a4a",0,.09,0,20),Ie(i,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),dt(i,.05,.01,.04,"#8a4a2a",.04,.1,-.02),dt(i,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=dt(i,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};ae.edamame=i=>{oe(i,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)ls(i,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};ae.vase=i=>{cl(i,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),oe(i,.006,.006,.25,"#4a7a3a",0,.36,0,4),Ie(i,.035,"#f0e0e8",0,.5,0),Ie(i,.03,"#e898b0",.02,.48,.02)};ae.tatami=i=>{let t=ve(256,256,(n,s,r)=>{n.fillStyle="#c8c47a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=3)n.fillStyle=a%6?"#bcb86e":"#d2ce86",n.fillRect(0,a,s,1);n.fillStyle="#2a3a2a",n.fillRect(0,0,s,10),n.fillRect(0,r-10,s,10),n.fillRect(0,124,s,8)}),e=new mt(new bn(1.96,.04,1.96),[te("#2a3a2a"),te("#2a3a2a"),new mn({map:t}),te("#2a3a2a"),te("#2a3a2a"),te("#2a3a2a")]);e.position.y=.02,i.add(e)};ae.rug=i=>{let t=ve(256,256,(n,s,r)=>{n.fillStyle="#23315c",n.fillRect(0,0,s,r),n.strokeStyle="#e8e0d0",n.lineWidth=3;for(let a=0;a<5;a++)for(let o=0;o<5;o++){let l=26+a*51,c=26+o*51;n.beginPath();for(let u=0;u<3;u++)n.arc(l,c,8+u*7,Math.PI,0);n.stroke()}n.strokeStyle="#c8a040",n.lineWidth=6,n.strokeRect(6,6,s-12,r-12)}),e=new mt(new si(.96,40),new mn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,i.add(e)};ae.step=i=>{ls(i,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function _1(i){let t=new Set,e=i.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),i.updateMatrixWorld(!0);let n=new Map;i.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)});for(let s of n.values())if(!(s.length<2))try{let r=s.map(l=>{let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(c.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&c.deleteAttribute(u);return c.attributes.uv?(c.applyMatrix4(l.matrixWorld),c):null});if(r.some(l=>!l))continue;let a=$p(r,!1);if(!a)continue;let o=new mt(a,s[0].material);i.add(o),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var y1="#6fa8d6",yf="#4f86b8",dr="#f6f2ea",Ur="#d9b07a";ae.sofa=i=>{dt(i,1.9,.42,.82,yf,0,.21,0);for(let t of[-.46,.46])dt(i,.9,.16,.7,y1,t,.5,.06);dt(i,1.9,.55,.2,yf,0,.72,-.32);for(let t of[-.88,.88])dt(i,.18,.58,.82,yf,t,.45,0);Ie(i,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),Ie(i,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};ae.armchair=i=>{dt(i,.8,.4,.78,"#e07a5f",0,.2,0),dt(i,.62,.14,.64,"#ee9a7a",0,.48,.05),dt(i,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])dt(i,.14,.52,.78,"#e07a5f",t,.45,0)};ae.ctable=i=>{dt(i,1.6,.06,.7,Ur,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])oe(i,.03,.03,.38,"#8a6a4a",t,.19,e,8);dt(i,1.5,.03,.6,"#c89a62",0,.15,0)};ae.tv=i=>{dt(i,1.8,.5,.48,dr,0,.25,-.1);for(let e of[-.45,.45])dt(i,.8,.38,.02,"#e8e0d0",e,.25,.15);dt(i,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=dt(i,1.2,.68,.02,xn("#4a8ad8"),0,.98,-.085);t.userData.lit=1,i.userData.tvs=t,dt(i,.3,.08,.2,"#2a2a2e",0,.54,-.12)};ae.books=i=>{for(let n of[-.925,.925])dt(i,.05,1.9,.4,Ur,n,.95,-.1);dt(i,1.9,.05,.4,Ur,0,1.875,-.1),dt(i,1.8,1.8,.02,"#a07850",0,.95,-.29);for(let n of[.05,.5,.95,1.4])dt(i,1.8,.04,.36,"#c8a070",0,n+.02,-.1);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let n of[.09,.54,.99]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,a=.3+e*7%5*.025;dt(i,r,a,.24,t[e%7],s+r/2,n+a/2,-.08),s+=r+.01,e++}}Ie(i,.12,"#3f8f4f",.6,1.54,-.08)};ae.flamp=i=>{oe(i,.2,.22,.04,"#3a3a3e",0,.02,0,18),oe(i,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=oe(i,.16,.26,.32,xn("#fff0c8"),0,1.6,0,18);t.userData.lit=1,Or(i,0,1.55,0,2.4,.55)};ae.piano=i=>{dt(i,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),dt(i,1.6,.06,.7,"#1e1a1a",0,.72,.05),dt(i,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)dt(i,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])dt(i,.1,.7,.1,"#1e1a1a",t,.35,.3);dt(i,.5,.05,.3,"#1e1a1a",0,.45,.6),dt(i,.5,.04,.3,"#8a3a2a",0,.48,.6)};ae.bed=i=>{dt(i,1.9,.3,1.95,Ur,0,.25,0),dt(i,1.9,.9,.1,Ur,0,.55,-.95),dt(i,1.8,.2,1.85,dr,0,.5,.02),dt(i,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])Ie(i,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])dt(i,.08,.12,.08,"#8a6a4a",t,.06,e)};ae.wardrobe=i=>{dt(i,1.8,2,.6,dr,0,1,-.15),dt(i,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])oe(i,.02,.02,.3,"#c8a040",t,1.05,.18,6);dt(i,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};ae.nstand=i=>{dt(i,.5,.5,.45,Ur,0,.27,0),dt(i,.46,.02,.02,"#8a6a4a",0,.35,.23),Ie(i,.025,"#c8a040",0,.25,.24)};ae.desk=i=>{dt(i,1.6,.05,.65,Ur,0,.74,0);for(let t of[-.74,.74])dt(i,.06,.72,.6,"#e8e0d0",t,.36,0);dt(i,.45,.3,.55,"#e8e0d0",.45,.55,0)};ae.kcounter=i=>{dt(i,1.9,.86,.62,dr,0,.43,-.1),dt(i,1.96,.06,.7,"#9aa0a8",0,.89,-.08),dt(i,.6,.04,.4,"#6a7078",-.4,.91,-.08),oe(i,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])dt(i,.5,.6,.02,"#ece6da",e,.43,.22);let t=oe(i,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};ae.stove=i=>{dt(i,.8,.86,.62,"#e8e4dc",0,.43,-.1),dt(i,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new mt(new zi(.1,.02,6,16),te("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),i.add(e)}dt(i,.7,.4,.02,"#2a2a2e",0,.45,.22),oe(i,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};ae.fridge=i=>{dt(i,.78,1.85,.7,"#eaf2f8",0,.93,-.08),dt(i,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])dt(i,.03,.25,.04,"#a8b0b8",.3,t,.3);dt(i,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};ae.catbed=i=>{let t=new mt(new zi(.32,.12,8,20),te("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,i.add(t),oe(i,.3,.3,.08,"#f2d8b0",0,.05,0,18),Ie(i,.18,"#e8a050",.02,.2,0,1.4,.7,1),Ie(i,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let n=new mt(new xi(.04,.07,4),te("#e8a050"));n.position.set(.22,.36,e),i.add(n)}};ae.monstera=i=>{oe(i,.24,.18,.4,"#f2efe6",0,.2,0,14),oe(i,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,n=new mt(new si(.28,10),new mn({color:t%2?"#2f7a3a":"#3f8f4a",side:Hn}));n.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),n.rotation.set(-1+Math.random()*.4,e,0),i.add(n),oe(i,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};ae.cactus=i=>{oe(i,.09,.07,.12,"#c8704a",0,.06,0,12),oe(i,.06,.06,.22,"#4a9a4a",0,.22,0,10),Ie(i,.06,"#4a9a4a",0,.33,0);let t=oe(i,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,Ie(i,.025,"#f29ab8",0,.39,0)};ae.wwin=i=>{let t=dt(i,1.5,1.1,.03,xn("#bfe6ff"),0,1.65,.02);i.userData.pane=t,dt(i,1.62,.08,.08,dr,0,2.24,.04),dt(i,1.62,.08,.08,dr,0,1.06,.04),dt(i,.06,1.15,.06,dr,0,1.65,.05),dt(i,1.62,.1,.2,dr,0,1.03,.1),dt(i,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let n=dt(i,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);n.geometry=new bn(.38,1.4,.05,4,1,1)}};ae.photos=i=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,n,s,r],a)=>{dt(i,s+.08,r+.08,.03,a%2?"#3a2a1a":dr,e,n,.015),dt(i,s,r,.01,xn(t[a]),e,n,.035),Ie(i,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][a],e-s*.15,n-r*.1,.04,1,1,.2)})};ae.shelfw=i=>{dt(i,1.7,.05,.25,Ur,0,1.6,.12);for(let t of[-.7,.7])dt(i,.04,.15,.2,"#8a6a4a",t,1.52,.1);oe(i,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),Ie(i,.09,"#4a9a4a",-.5,1.82,.12),dt(i,.3,.22,.16,"#2f6bb8",0,1.74,.12),Ie(i,.08,"#f2b630",.45,1.7,.12)};ae.book=i=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let n=dt(i,.22,.045,.16,t[e],0,.025+e*.047,0);n.rotation.y=e*.25}};ae.mug=i=>{oe(i,.05,.045,.1,"#f6f2ea",0,.05,0,14),oe(i,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new mt(new zi(.03,.01,6,10),te("#f6f2ea"));t.position.set(.06,.05,0),i.add(t)};ae.cake=i=>{oe(i,.14,.14,.02,"#f6f2ea",0,.01,0,20),oe(i,.1,.1,.1,"#fff8f0",0,.07,0,20),oe(i,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)Ie(i,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};ae.laptop=i=>{dt(i,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new ye;t.position.set(0,.015,-.11),t.rotation.x=-.35,i.add(t),dt(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=dt(t,.29,.17,.002,xn("#8ac0f0"),0,.1,.007);e.userData.lit=1};ae.dlamp=i=>{oe(i,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=oe(i,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=oe(i,.04,.09,.1,xn("#fff0c8"),0,.33,0,12);e.userData.lit=1,Or(i,0,.3,0,1.2,.5)};ae.teddy=i=>{let t="#b8814a";Ie(i,.1,t,0,.1,0,1,1.1,.9),Ie(i,.08,t,0,.24,0);for(let e of[-.06,.06])Ie(i,.03,t,e,.31,0),Ie(i,.012,"#1a1a1a",e*.5,.26,.07),Ie(i,.035,t,e*1.3,.1,.06);Ie(i,.03,"#e8d0b0",0,.225,.07)};ae.carpet=i=>{let t=ve(256,256,(n,s,r)=>{n.fillStyle="#f2e6d0",n.fillRect(0,0,s,r);let a=v1(3);for(let o=0;o<1600;o++)n.fillStyle=a()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",n.fillRect(a()*s,a()*r,3,3);n.strokeStyle="#e8a0b0",n.lineWidth=10,n.strokeRect(14,14,s-28,r-28)}),e=new mt(new bn(1.9,.04,1.9),[te("#e8d8c0"),te("#e8d8c0"),new mn({map:t}),te("#e8d8c0"),te("#e8d8c0"),te("#e8d8c0")]);e.position.y=.02,i.add(e)};var v1=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Sf(i){let t=new ye,e=ae[i];return e?e(t):dt(t,.8,.8,.8,"#f0f",0,.4,0),_1(t),t.traverse(n=>{n.isMesh&&(n.userData.item=t)}),t}var Br=(i,t)=>i+Math.random()*(t-i),ki=(i,t,e)=>Math.max(t,Math.min(e,i)),ul=(i,t,e)=>i+(t-i)*e,zr=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),kr=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},cs={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},b1={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},Tf=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),As=46,is=34,$s=7,M1=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],fl=2,wf=8.5,S1=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],dl=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],w1=`
.i3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.home3 .twtop{background:none}
.i3tb{flex:none;min-width:44px;min-height:44px;border:0;background:transparent;color:#fff3d6;font-size:28px;line-height:1;padding:0 4px;border-radius:50%;text-shadow:0 2px 4px #000a;cursor:pointer}
.i3tb.on{background:#fff3d633}
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
`;function em(i){let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.data||{};if(r.ex=Object.assign(Tf(),r.ex||{}),!document.getElementById("i3css")){let m=document.createElement("style");m.id="i3css",m.textContent=w1,document.head.appendChild(m)}if(!document.getElementById("h3css")&&i.css){let m=document.createElement("style");m.id="h3css",m.textContent=i.css,document.head.appendChild(m)}let a=Math.min(screen.width,screen.height)<600,o=new so({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});o.shadowMap.enabled=!0,o.shadowMap.type=Oc;let l=new Tr,c=new Zr(12576511,60,170);l.fog=c;let u=new ri(38,2,.3,600),p=new ea,d=(m,w)=>p.load(m,C=>{C.colorSpace=ii,w&&w(C)}),f={},g=(m,w)=>w?new mn(Object.assign({color:m},w)):f[m]||(f[m]=new mn({color:m})),I=(m,w)=>new Je(Object.assign({color:m},w||{})),_=(m,w,C)=>{let B=m.clone();return B.wrapS=B.wrapT=Bs,B.repeat.set(w,C),B.needsUpdate=!0,B},y=[];function S(m,w,C,B,Z,ht,bt,St,Ft){let Tt=new mt(new bn(m,w,C),typeof B=="string"?g(B):B);return Tt.position.set(Z,ht,bt),(St||l).add(Tt),Ft!==!1&&(Tt.castShadow=!0),Tt.receiveShadow=!0,Tt}function L(m,w,C,B,Z,ht,bt,St,Ft){let Tt=new mt(new Ii(m,w,C,Ft||14),typeof B=="string"?g(B):B);return Tt.position.set(Z,ht,bt),(St||l).add(Tt),Tt.castShadow=!0,Tt.receiveShadow=!0,Tt}function E(m,w,C,B,Z,ht,bt,St,Ft,Tt){let Ye=new mt(Tt?new bs(m,1):new _i(m,16,12),typeof w=="string"?Tt?g(w,{flatShading:!0}):g(w):w);return Ye.position.set(C,B,Z),bt&&Ye.scale.set(bt,St,Ft),(ht||l).add(Ye),Ye.castShadow=!0,Ye}let F=[];function N(m,w,C,B,Z,ht){let bt=new gi(new ai({map:ua,blending:Ms,transparent:!0,depthWrite:!1,opacity:0}));return ht&&bt.material.color.set(ht),bt.scale.set(B,B,1),bt.position.set(m,w,C),(Z||l).add(bt),F.push(bt),bt}let M=[];function A(m,w){let C=new Je({color:m});return C.userData.day=new Me(m),C.userData.night=new Me(w||"#ffd98a"),M.push(C),C}let q=new _i(300,24,16),z=new Float32Array(q.attributes.position.count*3);q.setAttribute("color",new Pe(z,3));let W=new mt(q,new Je({vertexColors:!0,side:oi,fog:!1,depthWrite:!1}));W.renderOrder=-10,l.add(W);let Q=new Pn;{let m=[],w=kr(9);for(let C=0;C<400;C++){let B=w()*Math.PI*2,Z=.15+w()*1.3;m.push(Math.cos(B)*Math.cos(Z)*280,Math.sin(Z)*280,Math.sin(B)*Math.cos(Z)*280)}Q.setAttribute("position",new Pe(m,3))}let ut=ve(128,128,m=>{let w=m.createRadialGradient(64,64,10,64,64,64);w.addColorStop(0,"rgba(255,255,240,1)"),w.addColorStop(.35,"rgba(255,240,200,.9)"),w.addColorStop(.4,"rgba(255,230,180,.3)"),w.addColorStop(1,"rgba(255,230,180,0)"),m.fillStyle=w,m.fillRect(0,0,128,128)}),V=new gi(new ai({map:ut,fog:!1,depthWrite:!1,transparent:!0}));V.scale.set(50,50,1),W.add(V);let at=ve(128,128,m=>{let w=m.createRadialGradient(64,64,18,64,64,64);w.addColorStop(0,"rgba(255,248,220,1)"),w.addColorStop(.42,"rgba(255,244,210,1)"),w.addColorStop(.46,"rgba(255,240,200,.25)"),w.addColorStop(1,"rgba(255,240,200,0)"),m.fillStyle=w,m.fillRect(0,0,128,128)}),ct=new gi(new ai({map:at,fog:!1,depthWrite:!1,transparent:!0}));ct.scale.set(36,36,1),W.add(ct);let st=new ye;W.add(st);{let m=ve(16,16,B=>{B.fillStyle="#fff8e0",B.beginPath(),B.arc(8,8,3,0,7),B.fill()}),w=Q.attributes.position,C=new ai({map:m,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let B=0;B<w.count;B+=2){let Z=new gi(C);Z.position.set(w.getX(B),w.getY(B),w.getZ(B)),Z.scale.set(1.4,1.4,1),st.add(Z)}st.userData.m=C}let Pt=new ye;l.add(Pt);{let m=kr(4);for(let w=0;w<14;w++){let C=new ye,B=3+(m()*3|0);for(let bt=0;bt<B;bt++){let St=new mt(new bs(3+m()*3,1),new mn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));St.position.set(bt*4-B*2,m()*1.5,m()*2),St.scale.y=.6,C.add(St)}let Z=m()*Math.PI*2,ht=110+m()*60;C.position.set(Math.cos(Z)*ht,40+m()*25,Math.sin(Z)*ht),C.userData.a=Z,C.userData.R=ht,Pt.add(C)}}let lt=new Ir(14676735,8036442,1.4);l.add(lt);let Mt=new Jo(16777215,.25);l.add(Mt);let xt=new Pr(16773852,2.2);xt.castShadow=!0;let Ht=a?1024:2048;xt.shadow.mapSize.set(Ht,Ht),Object.assign(xt.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),xt.shadow.bias=-8e-4,xt.shadow.normalBias=.03,l.add(xt),l.add(xt.target);let le=ve(256,256,(m,w,C)=>{m.fillStyle="#3fb7d8",m.fillRect(0,0,w,C);let B=kr(2);for(let Z=0;Z<90;Z++){m.strokeStyle=`rgba(255,255,255,${.12+B()*.25})`,m.lineWidth=2+B()*2;let ht=B()*w,bt=B()*C,St=10+B()*24;m.beginPath(),m.moveTo(ht,bt),m.quadraticCurveTo(ht+St/2,bt-4,ht+St,bt),m.stroke()}});le.wrapS=le.wrapT=Bs,le.repeat.set(40,40);let pt=new mn({map:le,color:"#ffffff"}),$t=new mt(new Ke(900,900),pt);$t.rotation.x=-Math.PI/2,$t.position.y=-.45,$t.receiveShadow=!0,l.add($t);function ie(m,w,C){let B=new cr;return B.moveTo(-m+C,-w),B.lineTo(m-C,-w),B.quadraticCurveTo(m,-w,m,-w+C),B.lineTo(m,w-C),B.quadraticCurveTo(m,w,m-C,w),B.lineTo(-m+C,w),B.quadraticCurveTo(-m,w,-m,w-C),B.lineTo(-m,-w+C),B.quadraticCurveTo(-m,-w,-m+C,-w),B}let xe=ve(128,128,(m,w,C)=>{m.fillStyle="#f3dfa8",m.fillRect(0,0,w,C);let B=kr(7);for(let Z=0;Z<300;Z++)m.fillStyle=B()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",m.fillRect(B()*w,B()*C,2,2)});{let m=new Ja(ie(As+$s,is+$s,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});m.rotateX(Math.PI/2);let w=new mt(m,new mn({map:_(xe,.4,.4)}));w.position.y=-.83,w.receiveShadow=!0,l.add(w);let C=new mt(new ta(ie(As+$s+3.4,is+$s+3.4,18),12),new Je({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.y=-.38,l.add(C)}let Kt=ve(256,256,(m,w,C)=>{m.fillStyle="#7ccb5a",m.fillRect(0,0,w,C);let B=kr(5);for(let Z=0;Z<900;Z++){m.fillStyle=B()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ht=B()*w,bt=B()*C;m.fillRect(ht,bt,2,5)}});{let m=new ta(ie(As,27,12),10);m.rotateX(-Math.PI/2),m.translate(0,0,-7);let w=m.attributes.uv;for(let B=0;B<w.count;B++)w.setXY(B,w.getX(B)/8,w.getY(B)/8);let C=new mt(m,new mn({map:_(Kt,1,1)}));C.position.y=.02,C.receiveShadow=!0,l.add(C)}let re=ve(128,128,(m,w,C)=>{m.fillStyle="#d9d4cc",m.fillRect(0,0,w,C);let B=kr(8);for(let Z=0;Z<4;Z++)for(let ht=0;ht<4;ht++){let bt=(B()*14|0)-7;m.fillStyle=`rgb(${206+bt},${200+bt},${190+bt})`,m.fillRect(ht*32+1,Z*32+1,30,30)}}),He=g("#f4f1ea");for(let[m,w,C,B]of M1){let Z=Math.hypot(C-m,B-w)+fl*2,ht=(m+C)/2,bt=(w+B)/2,St=w===B,Ft=new mt(new Ke(St?Z:fl*2,St?fl*2:Z),new mn({map:_(re,(St?Z:4)/2,(St?4:Z)/2)}));Ft.rotation.x=-Math.PI/2,Ft.position.set(ht,.04,bt),Ft.receiveShadow=!0,l.add(Ft);for(let Tt of[-1,1]){let Ye=new mt(new bn(St?Z:.25,.12,St?.25:Z),He);Ye.position.set(ht+(St?0:Tt*(fl+.1)),.06,bt+(St?Tt*(fl+.1):0)),Ye.receiveShadow=!0,l.add(Ye)}}let _e=ve(512,512,(m,w,C)=>{m.fillStyle="#e9b98a",m.fillRect(0,0,w,C),m.translate(256,256);for(let B=250;B>40;B-=26)m.strokeStyle=B%52?"#f4d2a6":"#d99a6a",m.lineWidth=10,m.beginPath(),m.arc(0,0,B,0,7),m.stroke();for(let B=0;B<16;B++)m.rotate(Math.PI/8),m.strokeStyle="#f7e2c0",m.lineWidth=4,m.beginPath(),m.moveTo(50,0),m.lineTo(250,0),m.stroke()});{let m=new mt(new si(wf,48),new mn({map:_e}));m.rotation.x=-Math.PI/2,m.position.y=.06,m.receiveShadow=!0,l.add(m);let w=new mt(new Xo(wf,wf+.35,48),He);w.rotation.x=-Math.PI/2,w.position.y=.08,l.add(w)}let Oe=[];{let m=new ye;l.add(m);let w=g("#f4f1ea");L(3.4,3.6,.7,w,0,.35,0,m,32);let C=ve(128,128,(bt,St,Ft)=>{bt.fillStyle="#5ec8e8",bt.fillRect(0,0,St,Ft),bt.strokeStyle="rgba(255,255,255,.5)",bt.lineWidth=3;for(let Tt=0;Tt<8;Tt++)bt.beginPath(),bt.arc(64,64,8+Tt*8,0,7),bt.stroke()}),B=new mt(new si(3.05,32),new Je({map:C}));B.rotation.x=-Math.PI/2,B.position.y=.72,m.add(B),Oe.push(B),L(.5,.7,1.4,w,0,1.3,0,m,16),L(1.4,1.2,.25,w,0,2.05,0,m,24),L(.25,.35,.9,w,0,2.6,0,m,12),L(.7,.6,.18,w,0,3.1,0,m,20);let Z=new Je({color:"#c8f0ff",transparent:!0,opacity:.75}),ht=new mt(new Ii(.12,.2,1.2,10,1,!0),Z);ht.position.y=3.7,m.add(ht),Oe.push(ht);for(let bt=0;bt<8;bt++){let St=bt/8*Math.PI*2,Ft=new mt(new zi(.9,.06,6,12,Math.PI*.6),Z);Ft.position.set(Math.cos(St)*.9,2.2,Math.sin(St)*.9),Ft.rotation.set(0,-St,Math.PI*.2),m.add(Ft)}for(let bt=0;bt<6;bt++){let St=bt/6*Math.PI*2+.26;We(Math.cos(St)*6.6,Math.sin(St)*6.6,St)}}function We(m,w,C){let B=new ye;B.position.set(m,0,w),B.rotation.y=-C,l.add(B),S(1.6,.45,1,"#c8704a",0,.22,0,B),S(1.45,.1,.85,"#5a3a24",0,.45,0,B,!1);let Z=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ht=0;ht<8;ht++)E(.13,Z[ht%5],-.55+ht%4*.36,.62,-.2+Math.floor(ht/4)*.4,B),E(.1,"#4a9a3a",-.55+ht%4*.36,.52,-.2+Math.floor(ht/4)*.4,B)}function vt(m){return ve(128,128,(w,C,B)=>{w.fillStyle=m,w.fillRect(0,0,C,B);for(let Z=0;Z<B;Z+=16)w.fillStyle="rgba(0,0,0,.08)",w.fillRect(0,Z,C,2),w.fillStyle="rgba(255,255,255,.08)",w.fillRect(0,Z+2,C,2)})}function kt(m){return ve(512,128,(w,C,B)=>{w.fillStyle="#fff8ea",w.strokeStyle="#3a2a1a",w.lineWidth=10,Fr(w,6,6,C-12,B-12,24),w.fill(),w.stroke(),w.fillStyle="#3a2a1a",w.textAlign="center",w.textBaseline="middle";let Z=64;for(w.font=`900 ${Z}px ${jn}`;w.measureText(m).width>C-60&&Z>20;)Z-=2,w.font=`900 ${Z}px ${jn}`;w.fillText(m,C/2,B/2+3)})}let Rt=5.4,Vt=4.2,Ut=3;function Le(m,w){let C=new ye,B=m.wall,Z=new mn({map:vt(B)}),ht=-.6;S(Rt+.3,.35,Vt+.3,"#e8e2d4",0,.17,ht,C);let bt=S(Rt,Ut,Vt,Z,0,.35+Ut/2,ht,C);for(let At of[-1,1])S(.22,Ut,.22,"#f4efe2",At*Rt/2,.35+Ut/2,ht+Vt/2,C);S(Rt+.1,.18,.18,"#f4efe2",0,.35+Ut,ht+Vt/2+.02,C);let St=g(m.roofC),Ft=.35+Ut;if(m.roof==="flat")S(Rt+.6,.35,Vt+.6,St,0,Ft+.17,ht,C),S(Rt+.2,.3,Vt+.2,"#f4efe2",0,Ft+.5,ht,C),S(1,.7,1,"#9a9a9a",1.4,Ft+.9,ht-.6,C);else if(m.roof==="round"){let At=new mt(new Ii(Vt/2+.45,Vt/2+.45,Rt+.5,24,1,!1,0,Math.PI),St);At.rotation.set(0,0,Math.PI/2),At.scale.set(.72,1,1),At.position.set(0,Ft,ht),At.castShadow=!0,C.add(At);for(let rt of[-1,1]){let Jt=new mt(new si(Vt/2+.45,24,0,Math.PI),Z);Jt.rotation.y=rt*Math.PI/2,Jt.scale.set(1,.72,1),Jt.position.set(rt*(Rt/2+.251),Ft,ht),C.add(Jt)}}else if(m.roof==="hip"){let At=(Rt+.9)/2,rt=(Vt+.9)/2,Jt=1.7,Te=Math.max(.3,At-rt),ln=(_a,Wr,yl)=>[_a,Wr,yl],Un=ln(-At,0,rt),rn=ln(At,0,rt),Sn=ln(At,0,-rt),an=ln(-At,0,-rt),Qe=ln(-Te,Jt,0),Fn=ln(Te,Jt,0),Yn=[Un,rn,Fn,Un,Fn,Qe,Sn,an,Qe,Sn,Qe,Fn,rn,Sn,Fn,an,Un,Qe],ei=new Pn;ei.setAttribute("position",new Pe(Yn.flat(),3)),ei.computeVertexNormals();let Ei=new mt(ei,St.clone());Ei.material.side=Hn,Ei.position.set(0,Ft-.05,ht),Ei.castShadow=!0,C.add(Ei),S(2*At,.12,2*rt,"#f4efe2",0,Ft-.02,ht,C).castShadow=!1}else{let At=new cr,rt=Vt/2+.5;At.moveTo(-rt,0),At.lineTo(0,1.9),At.lineTo(rt,0),At.lineTo(-rt,0);let Jt=new Ja(At,{depth:Rt+.6,bevelEnabled:!1});Jt.translate(0,0,-(Rt+.6)/2);let Te=new mt(Jt,[St,St]);Te.rotation.y=Math.PI/2,Te.position.set(0,Ft-.05,ht),Te.castShadow=!0,C.add(Te);let ln=new cr;ln.moveTo(-Vt/2,0),ln.lineTo(0,1.55),ln.lineTo(Vt/2,0);let Un=new mt(new ta(ln),Z);Un.rotation.y=Math.PI/2;for(let Sn of[-1,1]){let an=Un.clone();an.rotation.y=Sn*Math.PI/2,an.position.set(Sn*(Rt/2+.001),Ft,ht),C.add(an)}let rn=new mt(new si(.35,20),A("#bfe6ff"));rn.position.set(0,Ft+.5,ht+Vt/2+.02),C.add(rn)}let Tt=ht+Vt/2+.02,Ye=g(m.doorC);S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,Tt,C);let An=new ye;{let At=new mt(new Ke(1.1,2.3),new Je({color:"#2a1a10"}));At.position.set(0,.35+1.15,Tt+.005),C.add(At);let rt=new mt(new Ke(1,2.1),A("#5a3a24","#ffcf7a"));rt.position.set(0,.35+1.07,Tt+.007),C.add(rt)}if(m.door==="arch"){S(1.1,1.75,.14,Ye,0,.35+.88,Tt+.02,An);let At=new mt(new si(.55,20,0,Math.PI),Ye);At.position.set(0,.35+1.75,Tt+.1),An.add(At)}else S(1.1,2.05,.14,Ye,0,.35+1.02,Tt+.02,An);if(m.door==="round"){let At=new mt(new si(.26,20),A("#bfe6ff"));At.position.set(0,.35+1.5,Tt+.1),An.add(At);let rt=new mt(new zi(.28,.05,8,20),g("#c8c8d0"));rt.position.set(0,.35+1.5,Tt+.1),An.add(rt)}else if(m.door==="grid")for(let At=0;At<3;At++)for(let rt=0;rt<2;rt++){let Jt=new mt(new Ke(.38,.4),A("#e8f4ff","#ffe0a0"));Jt.position.set(-.21+rt*.42,.35+1.15+At*.45,Tt+.1),An.add(Jt)}E(.06,"#e9c34a",.4,.35+1,Tt+.12,An);{let At=new ye;At.position.set(-.55,0,Tt+.02),C.add(At),An.position.set(.55,0,-(Tt+.02)),At.add(An),C.userData.doorPivot=At,C.userData.doorZ=Tt}let ms=E(.16,I("#fff4d0"),.95,.35+2.3,Tt+.2,C);N(.95,.35+2.3,Tt+.3,2.2,C);for(let At of[-1.75,1.75]){if(m.win==="round"){let Jt=new mt(new si(.5,24),A("#bfe6ff"));Jt.position.set(At,2.05,Tt+.01),C.add(Jt);let Te=new mt(new zi(.52,.08,8,24),g("#f4efe2"));Te.position.set(At,2.05,Tt+.02),C.add(Te)}else if(m.win==="arch"){let Jt=new mt(new Ke(.9,.8),A("#bfe6ff"));Jt.position.set(At,2.05-.15,Tt+.01),C.add(Jt);let Te=new mt(new si(.45,16,0,Math.PI),A("#bfe6ff"));Te.position.set(At,2.05+.25,Tt+.01),C.add(Te),S(1.05,.1,.14,"#f4efe2",At,2.05-.58,Tt+.05,C)}else if(m.win==="shoji"){let Jt=new mt(new Ke(1.1,1),A("#fff4dc","#ffcf7a"));Jt.position.set(At,2.05,Tt+.01),C.add(Jt);for(let Te=-1;Te<=1;Te++)S(.04,1,.04,"#6b3f1f",At+Te*.36,2.05,Tt+.04,C,!1),S(1.1,.04,.04,"#6b3f1f",At,2.05+Te*.33,Tt+.04,C,!1)}else{let Jt=new mt(new Ke(1.05,.95),A("#bfe6ff"));Jt.position.set(At,2.05,Tt+.01),C.add(Jt),S(1.2,.1,.1,"#f4efe2",At,2.05+.5,Tt+.04,C,!1),S(1.2,.1,.1,"#f4efe2",At,2.05-.5,Tt+.04,C,!1),S(.1,1.05,.1,"#f4efe2",At-.55,2.05,Tt+.04,C,!1),S(.1,1.05,.1,"#f4efe2",At+.55,2.05,Tt+.04,C,!1),S(.06,1,.06,"#f4efe2",At,2.05,Tt+.04,C,!1),S(1.3,.14,.32,"#f4efe2",At,2.05-.6,Tt+.14,C)}if(m.garden!=="none"){S(1,.2,.25,"#8a5a34",At,2.05-.78,Tt+.2,C);for(let Jt=0;Jt<4;Jt++)E(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][Jt],At-.36+Jt*.24,2.05-.62,Tt+.2,C)}}if(+m.porch){S(Rt+.6,.3,1.7,"#c8935a",0,.15,Tt+.85,C);for(let At=0;At<9;At++)S(.02,.02,1.7,"#9a6a3a",-Rt/2-.1+At*.7,.31,Tt+.85,C,!1);S(1.6,.15,.5,"#c8935a",0,.075,Tt+1.95,C);for(let At of[-1,1])S(.12,.9,.12,"#f4efe2",At*(Rt/2+.15),.75,Tt+1.62,C),S(.12,.9,.12,"#f4efe2",At*1,.75,Tt+1.62,C),S(Rt/2-.8,.08,.08,"#f4efe2",At*(Rt/4+.58),1.1,Tt+1.62,C)}{let At=new ye;At.position.set(Rt/2+.2,0,Tt+2.4),C.add(At),S(.1,1,.1,"#6b3f1f",0,.5,0,At),S(.4,.32,.55,m.doorC==="#f4efe2"?"#e8553f":m.doorC,0,1.12,0,At),S(.05,.25,.05,"#e8553f",.22,1.3,.1,At)}let Rn=Tt+2.9,gs=Rt/2+1.1;if(m.fence==="white"||m.fence==="wood"){let At=m.fence==="white"?"#ffffff":"#c8b070";for(let rt of[-1,1]){for(let Jt=0;Jt<6;Jt++){let Te=rt*(1.3+Jt*.55);if(S(.12,.8,.06,At,Te,.4,Rn,C),m.fence==="white"){let ln=new mt(new xi(.09,.16,4),g(At));ln.position.set(Te,.88,Rn),ln.rotation.y=Math.PI/4,C.add(ln)}}S(2.9,.08,.05,At,rt*2.65,.55,Rn-.04,C,!1),S(2.9,.08,.05,At,rt*2.65,.25,Rn-.04,C,!1)}}else if(m.fence==="hedge")for(let At of[-1,1]){let rt=S(2.8,.7,.6,g("#3f9a3f"),At*2.6,.35,Rn,C);rt.geometry=new bn(2.8,.7,.6,3,1,1);for(let Jt=0;Jt<4;Jt++)E(.38,"#4aa84a",At*(1.5+Jt*.72),.7,Rn,C,1,.8,1,!0)}if(m.garden==="flower")for(let At of[-1,1])for(let rt=0;rt<5;rt++)E(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(rt+(At>0?2:0))%5],At*(2.1+rt%3*.5),.28,Tt+2+Math.floor(rt/3)*.4,C),E(.12,"#3f8a2f",At*(2.1+rt%3*.5),.14,Tt+2+Math.floor(rt/3)*.4,C);else if(m.garden==="pots")for(let At of[-1,1])L(.28,.22,.45,"#c8704a",At*2.3,.22,Tt+2.1,C),E(.38,"#4a9a3a",At*2.3,.7,Tt+2.1,C,1,1,1,!0);else m.garden==="tree"&&(L(.12,.16,1.5,"#7a5034",-Rt/2-.6,.75,Tt+1.6,C),E(.95,"#4aa84a",-Rt/2-.6,2,Tt+1.6,C,1,1,1,!0),E(.6,"#5ab85a",-Rt/2-.2,2.4,Tt+1.9,C,1,1,1,!0));if(w){let At=new mt(new Ke(1.8,.45),new Je({map:kt(w),transparent:!0}));At.position.set(0,.35+2.5,Tt+.09),C.add(At)}return C.traverse(At=>{At.isMesh&&(At.castShadow=At.castShadow||!1,At.receiveShadow=!0)}),C.userData.door=new k(0,0,Tt+2.4),C}let ce=[],Xe=kr(31),qe=m=>{let w=ao.find(C=>C.id===m||C.spr===m);return w?w.name.split(" ")[0]:m};function sn(m){let w=C=>C[Math.floor(m()*C.length)][0];return{wall:w(cs.wall),roof:w(cs.roof),roofC:w(cs.roofC),door:w(cs.door),doorC:w(cs.doorC),win:w(cs.win),porch:m()<.75?1:0,fence:w(cs.fence),garden:w(cs.garden)}}function X(m){m.g&&(l.remove(m.g),m.g.traverse(bt=>{bt.geometry&&bt.geometry.dispose()}));let w=m.own?r.ex:m.ex,C=m.own?i.houseName||"\u6211\u7684\u5BB6":m.label;m.g=Le(w,C),m.g.position.set(m.x,0,m.z),m.g.rotation.y=m.f===2?Math.PI:0,l.add(m.g),m.g.traverse(bt=>{bt.isMesh&&(bt.userData.house=m)});let B=m.g.userData.door.clone();m.f===2&&(B.x=-B.x,B.z=-B.z),m.door={x:m.x+B.x,z:m.z+B.z};let Z=m.f===2?-1:1,ht=m.g.userData.doorZ+.6;m.face={x:m.x,z:m.z+Z*ht},m.inw=-Z,m.pivot=m.g.userData.doorPivot}S1.forEach(m=>{let w=Object.assign({},m);if(!w.own){w.ex=sn(Xe);let C=ao.find(B=>B.spr===m.npc||B.id===m.npc);w.label=(C?C.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}ce.push(w),X(w)});let Ee=ce.find(m=>m.own);function Ne(m){let w=new ye;w.position.set(m.x,0,m.z),l.add(w);let C={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[m.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,w),S(6.6,3.4,5,C[0],0,2,-.2,w),S(7.4,.4,6,C[1],0,3.9,-.2,w),S(7.6,.3,1.6,C[1],0,3.1,2.6,w).rotation.x=.35;let B=new mt(new Ke(4.2,.9),new Je({map:kt(m.k==="izakaya"&&r.name?r.name:C[3])}));B.position.set(0,4.55,2.85),w.add(B),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,w);let Z=new mt(new Ke(2.2,1.4),A("#cfe8f4"));Z.position.set(-1.9,1.7,2.31),w.add(Z);let ht=Z.clone();ht.position.x=1.9,w.add(ht),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,w);let bt=ve(256,100,(Ft,Tt,Ye)=>{for(let An=0;An<3;An++)Ft.fillStyle=C[2],Ft.fillRect(4+An*84,0,80,Ye-4);Ft.fillStyle="#fff",Ft.textAlign="center",Ft.textBaseline="middle",Ft.font=`900 40px ${jn}`,[...m.k==="bar"?"\u6708\u5F71":m.n.slice(0,3)].slice(0,3).forEach((An,ms)=>Ft.fillText(An,44+ms*84,44))}),St=new mt(new Ke(1.5,.65),new Je({map:bt,transparent:!0,side:Hn}));St.position.set(0,2.25,2.42),w.add(St);for(let Ft of[-1,1]){let Tt=E(.3,I(m.k==="sushi"?"#ffffff":"#e2452f"),Ft*1.15,2.3,2.5,w,1,1.3,1);N(Ft*1.15,2.3,2.6,2.6,w)}if(m.k==="ramen")for(let Ft=0;Ft<3;Ft++)L(.25,.25,.7,"#c8352a",-1.2+Ft*1.2,.35,3.5,w,12);if(m.k==="sushi"){let Ft=new mt(new xi(.4,1.2,4),g("#2f6bb8"));Ft.position.set(3.1,3.2,2.6),Ft.rotation.z=-1.3,w.add(Ft)}return w.traverse(Ft=>{Ft.isMesh&&(Ft.userData.shop=m)}),m.door={x:m.x,z:m.z+3.6},m.face={x:m.x,z:m.z+2.85},m.inw=-1,w}dl.forEach(Ne);let ze=[],Ot=[];ce.forEach(m=>{ze.push([m.x-Rt/2-.2,m.z-(m.f===2?-.6:.6)-Vt/2-.2,m.x+Rt/2+.2,m.z-(m.f===2?-.6:.6)+Vt/2+.2])}),dl.forEach(m=>ze.push([m.x-3.5,m.z-3,m.x+3.5,m.z+2.4])),Ot.push([0,0,3.6]);for(let m=0;m<6;m++){let w=m/6*Math.PI*2+.26;Ot.push([Math.cos(w)*6.6,Math.sin(w)*6.6,.7])}function _n(m,w,C,B){let Z=new ye;if(Z.position.set(m,0,w),Z.scale.setScalar(C),l.add(Z),B==="palm"){let ht=0,bt=0;for(let St=0;St<6;St++){let Ft=L(.22-St*.02,.26-St*.02,.8,"#a07850",ht,bt+.4,0,Z,8);Ft.rotation.z=-.08*St,ht+=.06*St,bt+=.78}for(let St=0;St<7;St++){let Ft=St/7*Math.PI*2,Tt=new mt(new xi(.32,2.6,4),g("#3fa04a",{flatShading:!0}));Tt.scale.z=.25,Tt.position.set(ht+Math.cos(Ft)*1.1,bt+.1,Math.sin(Ft)*1.1),Tt.rotation.set(Math.sin(Ft)*1.6,0,-Math.cos(Ft)*1.6),Tt.castShadow=!0,Z.add(Tt)}E(.18,"#6a4a2a",ht,bt-.1,.1,Z)}else L(.22,.3,1.8,"#8a5a3a",0,.9,0,Z,8),E(1.5,B==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,Z,1,.9,1,!0),E(1,B==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,Z,1,1,1,!0),E(.9,B==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,Z,1,1,1,!0);ze.push([m-.5*C,w-.5*C,m+.5*C,w+.5*C])}let de=kr(77);for(let m=0;m<34;m++){let w=m/34*Math.PI*2+de()*.1,C=Math.cos(w)*(As-1.5+de()*2),B=Math.sin(w)*(is-1.5+de()*2);if(B>18){de()<.5&&_n(ki(C*1.05,-As-3,As+3),ki(B,22,is+4),.9,"palm");continue}_n(ki(C,-As+2,As-2),ki(B,-is+2,is-2),.9+de()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([m,w],C)=>_n(m,w,.8+C%3*.1,C%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([m,w])=>_n(m,w,.8,"pink"));function be(m,w){let C=new ye;C.position.set(m,0,w),l.add(C),L(.09,.12,3.6,"#3a3a44",0,1.8,0,C,8);let B=E(.28,I("#fff4d0"),0,3.7,0,C);L(.3,.2,.12,"#3a3a44",0,3.98,0,C,10),N(0,3.7,0,5,C);let Z=new mt(new si(3,20),new Je({map:ua,transparent:!0,blending:Ms,depthWrite:!1,opacity:0}));Z.rotation.x=-Math.PI/2,Z.position.y=.08,C.add(Z),F.push(Z),Z.userData.k=.35,ze.push([m-.2,w-.2,m+.2,w+.2])}for(let[m,w]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])be(m,w);function U(m,w,C){let B=new ye;B.position.set(m,0,w),B.rotation.y=C,l.add(B),S(2,.12,.55,"#b8824a",0,.5,0,B),S(2,.5,.1,"#b8824a",0,.85,-.25,B);for(let St of[-.85,.85])S(.1,.5,.5,"#3a3a44",St,.25,0,B);let Z=Math.abs(Math.sin(C))>.7,ht=Z?.4:1,bt=Z?1:.4;return ze.push([m-ht,w-bt,m+ht,w+bt]),B}U(0,6.9,Math.PI),U(0,-6.9,0),U(-6.9,0,Math.PI/2),U(6.9,0,-Math.PI/2);let T=new ye;T.position.set(4.6,0,-4.6),T.rotation.y=-Math.PI/4,l.add(T);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,T),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,T);let m=ve(256,160,(C,B,Z)=>{C.fillStyle="#c8935a",C.fillRect(0,0,B,Z),C.strokeStyle="#6b3f1f",C.lineWidth=10,C.strokeRect(0,0,B,Z),C.fillStyle="#fff8ea",C.fillRect(20,30,100,70),C.fillStyle="#ffe0ea",C.fillRect(135,22,100,80),C.fillStyle="#3a2a1a",C.font=`900 26px ${jn}`,C.textAlign="center",C.fillText("\u5CF6\u306E\u63B2\u793A\u677F",B/2,Z-18)}),w=new mt(new bn(1.8,1.1,.1),[g("#6b3f1f"),g("#6b3f1f"),g("#6b3f1f"),g("#6b3f1f"),new Je({map:m}),g("#6b3f1f")]);w.position.y=1.4,w.castShadow=!0,T.add(w),ze.push([3.8,-5.4,5.4,-3.8])}function et(m,w,C){let B=new ye;B.position.set(m,0,w),l.add(B),L(.05,.05,2.4,"#f4efe2",0,1.2,0,B,6);let Z=new mt(new xi(1.5,.7,12),g(C,{flatShading:!0}));Z.position.y=2.5,Z.castShadow=!0,B.add(Z);let ht=new mt(new xi(1.52,.7,12,1,!0,0,Math.PI/6),g("#ffffff",{side:Hn}));for(let bt=0;bt<6;bt++){let St=ht.clone();St.rotation.y=bt*Math.PI/3,St.position.y=2.5,B.add(St)}}function Lt(m,w,C){let B=new ye;B.position.set(m,0,w),l.add(B),S(.7,.12,1.8,C,0,.35,0,B);let Z=S(.7,.1,.8,C,0,.6,-.85,B);Z.rotation.x=.6;for(let ht of[-.3,.3])for(let bt of[-.7,.7])S(.05,.3,.05,"#f4efe2",ht,.15,bt,B)}et(-18,28,"#2f6bb8"),Lt(-16.2,28.4,"#6fd1c0"),Lt(-19.6,28.8,"#f29ab8"),et(-4,30,"#e8553f"),Lt(-2.2,30.2,"#f6cf4a"),et(22,29,"#3f8f4f"),Lt(23.8,29.3,"#f29ab8"),et(-30,27,"#f6cf4a");{let m=new ye;m.position.set(10,0,is+6),l.add(m),S(3,.3,16,"#b8824a",0,.15,6,m);for(let B=0;B<6;B++)for(let Z of[-1.4,1.4])L(.15,.15,1.6,"#8a5a34",Z,-.5,-1+B*3,m,8);for(let B=0;B<16;B++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+B,m,!1);let w=new ye;w.position.set(14,-.2,is+17),l.add(w),S(1.8,.6,4,"#f4efe2",0,.3,0,w),S(1.9,.15,4.1,"#e8553f",0,.65,0,w),L(.06,.06,3,"#8a5a34",0,2,0,w,6);let C=new mt(new Ke(1.6,2.2),g("#ffffff",{side:Hn}));C.position.set(0,2.2,.6),C.rotation.y=Math.PI/2,w.add(C),Pt.userData.boat=w}let yt=[8.5,is+4,11.5,is+19],Ct=[],zt=1.5,gt=ve(64,64,m=>{let w=m.createRadialGradient(32,32,2,32,32,32);w.addColorStop(0,"rgba(0,0,0,.55)"),w.addColorStop(1,"rgba(0,0,0,0)"),m.fillStyle=w,m.fillRect(0,0,64,64)});function _t(m,w){return ve(512,112,(C,B,Z)=>{C.textAlign="center",C.textBaseline="middle";let ht=52;C.font=`900 ${ht}px ${jn}`;let bt=String(m||"").slice(0,16);for(;C.measureText(bt).width>B-80&&ht>22;)ht-=2,C.font=`900 ${ht}px ${jn}`;let St=Math.min(B-12,C.measureText(bt).width+56);C.fillStyle=w==="me"?"#ffffffee":"#2a2a48e0",C.strokeStyle=w==="me"?"#3a2a1a":"#c8c0ff",C.lineWidth=7,Fr(C,(B-St)/2,14,St,Z-28,(Z-28)/2),C.fill(),C.stroke(),C.fillStyle=w==="me"?"#3a2a1a":"#fff3d6",C.fillText(bt,B/2,Z/2+2)})}let Gt=ve(128,112,m=>{m.strokeStyle="#2a1810",m.lineWidth=6,m.lineJoin="round",m.fillStyle="#ffffff",Fr(m,12,8,104,66,24),m.fill(),m.stroke(),m.beginPath(),m.moveTo(44,72),m.lineTo(34,100),m.lineTo(66,74),m.closePath(),m.fill(),m.stroke(),m.fillRect(46,68,18,8),m.fillStyle="#2a1810";for(let w=0;w<3;w++)m.beginPath(),m.arc(40+w*24,42,6,0,7),m.fill()});function G(m,w,C){C=C||{};let B=new ye;l.add(B);let Z=new Ke(1,1);Z.translate(0,.5,0);let ht=new Je({transparent:!0,alphaTest:.04,color:16777215}),bt=new mt(Z,ht);B.add(bt);let St={grp:B,m:bt,mat:ht,h0:w,h:w*zt,ar:.8,w:w*zt*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};d(m,Tt=>{ht.map=Tt,ht.needsUpdate=!0,St.ar=Tt.image.width/Tt.image.height,St.w=St.h*St.ar});let Ft=new mt(new si(.5,16),new Je({map:gt,transparent:!0,depthWrite:!1}));if(Ft.rotation.x=-Math.PI/2,l.add(Ft),St.sh=Ft,C.name){let Tt=new gi(new ai({map:_t(C.name,C.nk),transparent:!0,depthTest:!1}));Tt.renderOrder=30,Tt.scale.set(2.2,.48,1),l.add(Tt),St.tag=Tt}if(C.bubble){let Tt=new gi(new ai({map:Gt,transparent:!0,depthWrite:!1}));Tt.scale.set(.85,.74,1),l.add(Tt),St.bub=Tt}return Ct.push(St),St}let Y=G(i.me.src,1.5,{name:i.me.name||"\u6211",nk:"me"}),ft=.35;i.spawn==="door"&&Ee?(Y.x=Ee.face.x,Y.z=Ee.face.z-Ee.inw*.9):i.spawn==="front"&&Ee?(Y.x=Ee.face.x+.8,Y.z=Ee.face.z-Ee.inw*1.9,ft=Ee.f===2?Math.PI:0):i.spawn==="shop"?(Y.x=dl[0].face.x,Y.z=dl[0].face.z+.9):(Y.x=0,Y.z=11.5);function Xt(m,w){let C=Math.abs(m),B=Math.abs(w),Z=As+$s-1,ht=is+$s-1,bt=14;return m>=yt[0]&&m<=yt[2]&&w>=yt[1]&&w<=yt[3]?!0:C>Z||B>ht?!1:C>Z-bt&&B>ht-bt?Math.hypot(C-(Z-bt),B-(ht-bt))<bt:!0}function Dt(m,w,C){if(!Xt(m,w))return!0;for(let B of ze)if(m>B[0]-C&&m<B[2]+C&&w>B[1]-C&&w<B[3]+C)return!0;for(let B of Ot)if(Math.hypot(m-B[0],w-B[1])<B[2]+C)return!0;return!1}let Wt=1,ue=-As-$s,Ue=-is-$s,Et=Math.ceil((As+$s)*2),pe=Math.ceil((is+$s)*2+16),we=null;function Yt(){we=new Uint8Array(Et*pe);for(let m=0;m<pe;m++)for(let w=0;w<Et;w++)we[m*Et+w]=Dt(ue+w+.5,Ue+m+.5,.35)?1:0}Yt();function on(m,w,C,B){let Z=rn=>Math.floor(rn-ue),ht=rn=>Math.floor(rn-Ue),bt=Z(m),St=ht(w),Ft=Z(C),Tt=ht(B);if(Ft<0||Tt<0||Ft>=Et||Tt>=pe)return null;if(we[Tt*Et+Ft]){let rn=null,Sn=1e9;for(let an=-3;an<=3;an++)for(let Qe=-3;Qe<=3;Qe++){let Fn=Ft+Qe,Yn=Tt+an;if(Fn<0||Yn<0||Fn>=Et||Yn>=pe||we[Yn*Et+Fn])continue;let ei=Qe*Qe+an*an;ei<Sn&&(Sn=ei,rn=[Fn,Yn])}if(!rn)return null;[Ft,Tt]=rn}let Ye=new Int32Array(Et*pe).fill(-1),An=St*Et+bt,ms=Tt*Et+Ft;Ye[An]=An;let Rn=[An],gs=0;for(;gs<Rn.length;){let rn=Rn[gs++];if(rn===ms)break;let Sn=rn%Et,an=rn/Et|0;for(let[Qe,Fn]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let Yn=Sn+Qe,ei=an+Fn;if(Yn<0||ei<0||Yn>=Et||ei>=pe)continue;let Ei=ei*Et+Yn;Ye[Ei]>=0||we[Ei]||Qe&&Fn&&(we[an*Et+Yn]||we[ei*Et+Sn])||(Ye[Ei]=rn,Rn.push(Ei))}}if(Ye[ms]<0)return null;let At=[],rt=ms;for(;rt!==An;)At.push([ue+rt%Et+.5,Ue+(rt/Et|0)+.5]),rt=Ye[rt];At.reverse();let Jt=[],Te=m,ln=w,Un=0;for(;Un<At.length;){let rn=Un;for(let Sn=At.length-1;Sn>Un;Sn--)if(zn(Te,ln,At[Sn][0],At[Sn][1])){rn=Sn;break}Jt.push(At[rn]),Te=At[rn][0],ln=At[rn][1],Un=rn+1}return Jt}function zn(m,w,C,B){let Z=Math.hypot(C-m,B-w),ht=Math.ceil(Z/.4);for(let bt=1;bt<=ht;bt++){let St=bt/ht;if(Dt(m+(C-m)*St,w+(B-w)*St,.3))return!1}return!0}let hn=[],us={};function Mn(m,w){let C=m+","+w;return us[C]!==void 0?us[C]:(us[C]=hn.length,hn.push({x:m,z:w,n:[]}),hn.length-1)}{let m=[-36,-26,-15,0,15,26,36],w=[-18,0,16];for(let St of w)for(let Ft=0;Ft<m.length-1;Ft++){let Tt=Mn(m[Ft],St),Ye=Mn(m[Ft+1],St);hn[Tt].n.push(Ye),hn[Ye].n.push(Tt)}for(let St of[-36,36])for(let Ft=0;Ft<w.length-1;Ft++){let Tt=Mn(St,w[Ft]),Ye=Mn(St,w[Ft+1]);hn[Tt].n.push(Ye),hn[Ye].n.push(Tt)}let C=Mn(0,-28),B=Mn(0,-18);hn[C].n.push(B),hn[B].n.push(C);let Z=Mn(0,-9.5),ht=Mn(0,9.5);for(let[St,Ft]of[[B,Z],[ht,Mn(0,16)],[Z,Mn(-9.5,0)],[Z,Mn(9.5,0)],[ht,Mn(-9.5,0)],[ht,Mn(9.5,0)],[Mn(-9.5,0),Mn(-15,0)],[Mn(9.5,0),Mn(15,0)]])hn[St].n.push(Ft),hn[Ft].n.push(St);let bt=us["0,0"];bt!==void 0&&hn[bt].n.forEach(St=>{hn[St].n=hn[St].n.filter(Ft=>Ft!==bt)}),bt!==void 0&&(hn[bt].n=[])}let vi=[];ao.filter(m=>i.walk&&i.walk[m.spr]&&m.spr!=="robot").sort(()=>Math.random()-.5).slice(0,a?7:10).forEach(m=>{let w=G(i.walk[m.spr],m.h,{bubble:1});w.d=m,w.sp=m.sp*.9;let C;do C=Math.floor(Math.random()*hn.length);while(!hn[C].n.length);w.x=hn[C].x+Br(-1,1),w.z=hn[C].z+Br(-1,1),w.node=C,w.state="idle",w.t=Br(0,3),vi.push(w)});function Ps(m){let w=hn[m.node];if(!w.n.length)return;let C=w.n[Math.floor(Math.random()*w.n.length)];m.node=C;let B=hn[C];m.tx=B.x+Br(-1.2,1.2),m.tz=B.z+Br(-1.2,1.2),m.state="walk"}let Qn=(m,w,C,B)=>{let Z=document.createElement(m);return w&&(Z.className=w),C!=null&&(Z.innerHTML=C),(B||e).appendChild(Z),Z},Zs=[],Yi=m=>(Zs.push(m),m),Ls=Yi(Qn("div","i3info")),se=Yi(Qn("div","i3hud")),fa=Yi(Qn("div","h3hint")),gr=Yi(Qn("div","h3toast")),bi=Yi(Qn("div","h3card")),Js=Yi(Qn("div","i3pan")),Wi=Yi(Qn("div","i3joy","<i></i>")),xr=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,Wn=()=>{if(K.dead)return;let m=t.getBoundingClientRect(),w=e.getBoundingClientRect();Wi.style.left=m.left-w.left+110+"px",Wi.style.top=m.bottom-w.top-110+"px",Wi.firstChild.style.transform="",Wi.className="i3joy"+(xr&&K.mode==="walk"?" rest":"")},Zn=Yi(Qn("button","i3door"));Zn.type="button",Zn.dataset.i3="door";function ss(m){gr.textContent=m,gr.classList.add("on"),clearTimeout(ss.t),ss.t=setTimeout(()=>gr.classList.remove("on"),2400)}let K={dead:!1,mode:"walk",yaw:ft,yawT:ft,pitch:.72,pitchT:.72,dist:17,distT:17,fp:!1,fpK:0,fpP:0,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new k(Y.x,1,Y.z)},R=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],H=0;function ot(){if(R[H][0]!==null)return R[H][0];let m=new Date;return m.getHours()+m.getMinutes()/60}function nt(){if(jt.style.display=O.style.display=K.mode==="edit"?"none":"",O.classList.toggle("on",!!K.fp),K.mode==="edit"){se.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}se.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button>${n.stats?'<button class="h3b" type="button" data-i3="stats"><i>\u{1F4CB}</i>\u5E97\u6CC1</button>':""}`}function it(){let m=ot(),w=Math.floor(m),C=Math.floor((m-w)*60);Ls.innerHTML=`<b>\u{1F3DD}\uFE0F ${zr(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(i.owner&&i.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(w).padStart(2,"0")}:${String(C).padStart(2,"0")}\u30FB${m<5||m>=19.5?"\u591C\u665A \u{1F319}":m<7?"\u6E05\u6668 \u{1F305}":m<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}let Bt=e.querySelector(".twtop"),ne=Bt&&Bt.querySelector(".twlist"),qt=(m,w,C)=>{let B=document.createElement("button");return B.type="button",B.className="i3tb",B.dataset.i3=m,B.setAttribute("aria-label",C),B.textContent=w,Bt&&Bt.insertBefore(B,ne||null),Zs.push(B),B},jt=qt("time","\u{1F550}","\u6642\u9593"),O=qt("fp","\u{1F441}","\u7B2C\u4E00\u4EBA\u7A31\uFF0F\u7B2C\u4E09\u4EBA\u7A31");nt(),it(),setTimeout(Wn,50),window.addEventListener("resize",Wn);let me="wall";function Ge(){let m=Object.keys(cs).map(C=>`<button class="h3tab ${me===C?"on":""}" type="button" data-i3="tab" data-k="${C}">${b1[C]}</button>`).join(""),w=cs[me].map(([C,B])=>{let Z=typeof C=="string"&&C[0]==="#";return`<button class="i3opt ${String(r.ex[me])===String(C)?"on":""}" type="button" data-i3="opt" data-v="${C}">${Z?`<i style="background:${C}"></i>`:""}${zr(B)}</button>`}).join("");Js.innerHTML=`<div class="h3tabs">${m}</div><div class="i3row">${w}</div>`}function Qt(m){K.mode=m,setTimeout(Wn,0),gn(),K.tgt=null,Js.classList.toggle("on",m==="edit"),nt(),Ls.style.display=m==="edit"?"none":"",m==="edit"?(Ge(),K.distT=14,K.pitchT=.5,K.yawT=Ee.f===2?Math.PI:0):(K.distT=17,K.pitchT=.72,Dn())}let ke=0;function Dn(){s&&(clearTimeout(ke),ke=setTimeout(()=>{try{n.save&&n.save(r)}catch{}},500))}function pn(m){gn(),K.talk=m,m.state="talk",(!m.deck||!m.deck.length)&&(m.deck=m.d.lines.map(B=>({kind:B[0],text:B[1]})).sort(()=>Math.random()-.5));let w=m.deck.pop(),C=ha[w.kind]||ha.chat;bi.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${i.walk[m.d.spr]}')"></div><div class="h3nm"><b>${zr(m.d.name)}</b><small>${zr(m.d.role||"")}</small></div><span class="h3k" style="background:${C.c}">${C.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${w.kind==="mind"?" mind":""}">${w.kind==="mind"?"\uFF08"+zr(w.text)+"\uFF09":"\u300C"+zr(w.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,bi.classList.toggle("r",ui(new k(m.x,1,m.z)).x<yn().left+yn().width/2),bi.classList.add("on")}function tn(m,w,C,B){gn(),bi.innerHTML=`<div class="h3h"><div class="h3nm"><b>${zr(m)}</b><small>${zr(w||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${C}</p>${B?`<div class="h3bt">${B}</div>`:""}`,bi.classList.remove("r"),bi.classList.add("on")}function gn(){bi.classList.remove("on");let m=K.talk;K.talk=null,m&&m.state==="talk"&&(m.state="idle",m.t=Br(1,2))}let Zt=m=>{let w=m.target.closest("[data-i3]");if(!w||!e.contains(w))return;let C=w.dataset.i3;if(C==="close")gn();else if(C==="more"&&K.talk)pn(K.talk);else if(C==="edit")K.mode==="walk"&&Qt("edit");else if(C==="done")Qt("walk");else if(C==="tab")me=w.dataset.k,Ge();else if(C==="opt"){let B=w.dataset.v;r.ex[me]=/^\d$/.test(B)?+B:B,X(Ee),Ge(),Dn()}else if(C==="home")gn(),un(Be.find(B=>B.kind==="home"));else if(C==="enter")gn(),kn(Be.find(B=>B.kind==="home"));else if(C==="shopin")gn(),un(Be.find(B=>B.kind==="shop"));else if(C==="door")kn(Nn);else if(C==="stats")try{n.stats&&n.stats()}catch{}else C==="fp"?(K.fp=!K.fp,nt()):C==="time"&&(H=(H+1)%R.length,nt(),it(),ss(H?`\u9810\u89BD\uFF1A${R[H][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",Zt);function Ln(m){if(!K.entering){K.entering=!0;try{n.enter&&n.enter(m||"home")}catch{K.entering=!1}}}let Be=ce.map(m=>({h:m,face:m.face,inw:m.inw,pivot:m.pivot,kind:m.own?"home":"npc",label:m.own?s?"\u{1F6AA} \u958B\u9580":"\u{1F6AA} \u62DC\u8A2A":"\u{1F514} \u6309\u9580\u9234",name:m.own?"":m.label})).concat(dl.map(m=>({s:m,face:m.face,inw:m.inw,kind:m.k==="izakaya"?"shop":"closed",label:m.k==="izakaya"?s?"\u{1F3EE} \u9032\u5E97":"\u{1F3EE} \u9032\u53BB\u901B":"\u{1F6A7} \u6E96\u5099\u4E2D",name:m.n}))),Nn=null;function kn(m){if(!(!m||K.ent)){if(m.kind==="npc"){ss(`\u53EE\u549A\uFF5E ${m.name}\u597D\u50CF\u6C92\u4EBA\u5728\u5BB6`);return}if(m.kind==="closed"){ss(`${m.name}\u9084\u5728\u6E96\u5099\u4E2D\uFF0C\u4E4B\u5F8C\u5C31\u80FD\u9032\u53BB\u4E86\uFF01`);return}gn(),K.tgt=null,K.ent={d:m,t:0,x0:Y.x,z0:Y.z}}}function un(m){Jn(m.face.x,m.face.z-m.inw*.7,()=>kn(m))}i.spawn==="door"&&Ee&&Ee.pivot&&(Ee.pivot.rotation.y=1.6,K.closing=Ee.pivot);function Jn(m,w,C){let B=on(Y.x,Y.z,m,w);if(!B){ss("\u8D70\u4E0D\u904E\u53BB");return}K.tgt={path:B,fn:C}}let yn=()=>t.getBoundingClientRect(),$e=new sa,Xn=new Nt,ti=new Fi(new k(0,1,0),0),en=new k,qn=(m,w)=>{let C=yn();return Xn.set((m-C.left)/C.width*2-1,-((w-C.top)/C.height*2-1)),Xn},ui=m=>{let w=m.clone().project(u),C=yn();return{x:(w.x+1)/2*C.width+C.left,y:(1-w.y)/2*C.height+C.top}},Di=new Map,Kn=null,fs=null;t.addEventListener("contextmenu",m=>m.preventDefault());let wi=null;t.addEventListener("pointerdown",m=>{K.pt=m.pointerType,m.preventDefault();try{t.setPointerCapture(m.pointerId)}catch{}if(m.pointerType==="touch"&&!wi&&K.mode==="walk"&&!K.ent){let w=yn();if(m.clientX-w.left<w.width*.45){let C=e.getBoundingClientRect();wi={id:m.pointerId,x:m.clientX,y:m.clientY},K.tgt=null,Wi.className="i3joy on",Wi.style.left=m.clientX-C.left+"px",Wi.style.top=m.clientY-C.top+"px",Wi.firstChild.style.transform="";return}}if(Di.set(m.pointerId,{x:m.clientX,y:m.clientY}),Di.size===2){let[w,C]=[...Di.values()];fs={d:Math.hypot(w.x-C.x,w.y-C.y),dist:K.distT,ang:Math.atan2(C.y-w.y,C.x-w.x),yaw:K.yawT},Kn=null;return}Kn={id:m.pointerId,x:m.clientX,y:m.clientY,moved:0,yaw0:K.yawT,pit0:K.pitchT,fp0:K.fpP}}),t.addEventListener("pointermove",m=>{if(wi&&m.pointerId===wi.id){let B=m.clientX-wi.x,Z=m.clientY-wi.y,ht=Math.hypot(B,Z),bt=50,St=Math.min(1,ht/bt)/Math.max(ht,1e-6);K.joy={x:B*St,y:Z*St},Wi.firstChild.style.transform=`translate(${K.joy.x*bt}px,${K.joy.y*bt}px)`;return}if(Di.has(m.pointerId)&&Di.set(m.pointerId,{x:m.clientX,y:m.clientY}),fs&&Di.size>=2){let[B,Z]=[...Di.values()];K.distT=ki(fs.dist*fs.d/Math.max(20,Math.hypot(B.x-Z.x,B.y-Z.y)),7,40),K.yawT=fs.yaw-(Math.atan2(Z.y-B.y,Z.x-B.x)-fs.ang);return}if(!Kn||Kn.id!==m.pointerId)return;let w=m.clientX-Kn.x,C=m.clientY-Kn.y;!Kn.moved&&Math.hypot(w,C)>8&&(Kn.moved=1),Kn.moved&&(K.yawT=Kn.yaw0-w*.007,K.fp?K.fpP=ki(Kn.fp0-C*.005,-1.2,1.2):K.pitchT=ki(Kn.pit0+C*.005,.22,1.3))});let co=m=>{if(wi&&m.pointerId===wi.id){wi=null,K.joy=null,Wn();return}Di.delete(m.pointerId),Di.size<2&&(fs=null),!(!Kn||Kn.id!==m.pointerId)&&(Kn.moved||Nh(m.clientX,m.clientY),Kn=null)};t.addEventListener("pointerup",co),t.addEventListener("pointercancel",co),t.addEventListener("wheel",m=>{m.preventDefault(),K.fp||(K.distT=ki(K.distT+Math.sign(m.deltaY)*1.6,7,40))},{passive:!1});let da=m=>{if(!document.contains(t)||/input|textarea/i.test(m.target&&m.target.tagName||""))return;let w=m.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(w)&&(K.keys[w]=1,/^[qe]$/.test(w)||(K.tgt=null),m.preventDefault())},xl=m=>{delete K.keys[m.key.toLowerCase()]};document.addEventListener("keydown",da),document.addEventListener("keyup",xl);function Dh(m,w){let C=null,B=1e9;for(let Z of vi){let ht=ui(new k(Z.x,0,Z.z)),bt=ui(new k(Z.x,Z.h+.2,Z.z)),St=ht.y-bt.y;if(St<6)continue;let Ft=Math.max(St*.38,26),Tt=Math.abs(m-ht.x);if(Tt<Ft&&w>bt.y-10&&w<ht.y+10){let Ye=Tt;Ye<B&&(B=Ye,C=Z)}}return C}function Nh(m,w){if(K.mode==="edit"||K.ent)return;let C=Dh(m,w);if(C){let Z=Math.hypot(C.x-Y.x,C.z-Y.z);pn(C),Z>3&&Jn(C.x+(Y.x-C.x)/Z*1.4,C.z+(Y.z-C.z)/Z*1.4);return}$e.setFromCamera(qn(m,w),u);let B=$e.intersectObjects(l.children,!0).filter(Z=>Z.object.isMesh&&(Z.object.userData.house||Z.object.userData.shop));if(B.length){let Z=B[0].object.userData;if(Z.house||Z.shop){let ht=Be.find(bt=>bt.h===Z.house&&Z.house||bt.s===Z.shop&&Z.shop);gn(),ht&&Jn(ht.face.x,ht.face.z-ht.inw*.8);return}if(Z.house){let ht=Z.house;ht.own?(tn(s?"\u6211\u7684\u5BB6":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),Jn(ht.door.x,ht.door.z)):(tn(ht.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),Jn(ht.door.x,ht.door.z));return}if(Z.shop){let ht=Z.shop;if(ht.k==="izakaya"){tn(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),Jn(ht.door.x,ht.door.z);return}tn(ht.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),Jn(ht.door.x,ht.door.z);return}}if(gn(),K.pt!=="touch"&&$e.ray.intersectPlane(ti,en)){let Z=on(Y.x,Y.z,en.x,en.z);Z&&(K.tgt={path:Z})}}let Ds=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],pa=new Me,Uh=new Me,Ti=new Me;function vn(m){let w=0;for(;w<Ds.length-2&&m>=Ds[w+1][0];)w++;let C=Ds[w],B=Ds[w+1],Z=ki((m-C[0])/(B[0]-C[0]),0,1),ht=bt=>pa.set(C[bt]).clone().lerp(Uh.set(B[bt]),Z);return{zen:ht(1),hor:ht(2),sunC:ht(3),sunI:ul(C[4],B[4],Z),hemiI:ul(C[5],B[5],Z),fog:ht(6),night:ul(C[7],B[7],Z)}}let ds=-1;function ps(m){let w=vn(m),C=q.attributes.position;for(let St=0;St<C.count;St++){let Ft=C.getY(St)/300;Ti.copy(w.hor).lerp(w.zen,ki((Ft+.05)/.55,0,1));let Tt=q.attributes.color.array;Tt[St*3]=Ti.r,Tt[St*3+1]=Ti.g,Tt[St*3+2]=Ti.b}q.attributes.color.needsUpdate=!0,c.color.copy(w.fog),o.setClearColor(w.fog),xt.color.copy(w.sunC),xt.intensity=w.sunI,lt.intensity=w.hemiI,Mt.intensity=.2+w.night*.15,lt.color.set(w.night>.5?"#8a9aff":"#dff2ff");let B=(m-6)/12*Math.PI,Z=Math.sin(B);V.position.set(Math.cos(B)*260,Math.max(-40,Z*220),-60),V.material.opacity=ki(Z*3,0,1);let ht=((m+6)%24-6)/12*Math.PI;ct.position.set(-Math.cos(B)*240,Math.max(30,Math.abs(Math.sin(ht))*200),-80),ct.material.opacity=w.night,st.userData.m.opacity=w.night*.9;let bt=w.night;F.forEach(St=>{St.material.opacity=bt*(St.userData.k||.75)}),M.forEach(St=>St.color.copy(St.userData.day).lerp(St.userData.night,bt)),pt.color.set("#ffffff").lerp(Ti.set("#3a4a8a"),bt*.6),Pt.children.forEach(St=>St.children.forEach(Ft=>Ft.material.color.set("#ffffff").lerp(Ti.set("#4a4a7a"),bt*.8))),K.night=bt}let Fh={get dead(){return K.dead},set dead(m){m&&_r()},dispose:_r,kind:"island",probe(){let m=w=>{let C=ui(w);return{x:Math.round(C.x),y:Math.round(C.y)}};return{mode:K.mode,fp:K.fp,fpK:+K.fpK.toFixed(2),me:{x:+Y.x.toFixed(2),z:+Y.z.toFixed(2)},calls:o.info.render.calls,tris:o.info.render.triangles,yaw:+K.yaw.toFixed(2),pitch:+K.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(K.night||0).toFixed(2),card:bi.classList.contains("on")?bi.textContent:"",door:Zn.classList.contains("on")?Zn.textContent:"",doorXY:Zn.classList.contains("on")?(()=>{let w=Zn.getBoundingClientRect();return{x:Math.round(w.left+w.width/2),y:Math.round(w.top+w.height/2)}})():null,ent:!!K.ent,myDoor:m(new k(Ee.door.x,1.2,Ee.door.z-2.8*(Ee.f===2?-1:1))),myHouse:m(new k(Ee.x,2,Ee.z)),npcs:vi.map(w=>Object.assign({id:w.d.id,state:w.state},m(new k(w.x,w.h*.5,w.z))))}},px(m,w,C){let B=ui(new k(m,w,C));return{x:Math.round(B.x),y:Math.round(B.y)}},teleport(m,w){Y.x=m,Y.z=w,K.cam.set(m,1,w)},setYaw(m){K.yaw=K.yawT=m},setPitch(m){K.pitch=K.pitchT=m},setDist(m){K.dist=K.distT=m},setHour(m){R[0][0]=m,ds=-1}};function _r(){if(!K.dead){if(K.dead=!0,cancelAnimationFrame(K.raf),clearTimeout(ke),s)try{n.save&&n.save(r,!0)}catch{}document.removeEventListener("keydown",da),document.removeEventListener("keyup",xl),e.removeEventListener("click",Zt),window.removeEventListener("resize",Wn),Zs.forEach(m=>m.remove()),l.traverse(m=>{m.geometry&&m.geometry.dispose(),(m.material?Array.isArray(m.material)?m.material:[m.material]:[]).forEach(C=>{C.map&&C.map.dispose(),C.dispose()})});try{o.dispose(),o.forceContextLoss()}catch{}}}let Gr=0,Vr=0,ho=0,rs=1,ma=1,Ks=0,ga=0,Hr=new k,$i=new k,fi=new k,yr=new k,uo=new k,Zi=new k;function xa(){let m=t.getBoundingClientRect(),w=Math.max(1,t.clientWidth),C=Math.max(1,t.clientHeight),B=Math.min(2,window.devicePixelRatio||1),Z=Math.round(ki(1.75-((m.height||C)-380)/440*.6,1.15,1.75)*20)/20;Z!==zt&&(zt=Z,Ct.forEach(ht=>{ht.h=ht.h0*zt,ht.w=ht.h*ht.ar})),!(w===Gr&&C===Vr&&B===ho)&&(Gr=w,Vr=C,ho=B,rs=ki(m.width*B/w,.5,2),rs=Math.min(rs,Math.sqrt(22e5/(w*C))),ma=Math.max(Math.min(rs,.9),rs*.8),o.setPixelRatio(rs),o.setSize(w,C,!1),u.aspect=w/C,u.updateProjectionMatrix())}function _l(m){if(K.dead)return;if(!document.contains(t)){_r();return}K.raf=requestAnimationFrame(_l);let w=Math.min(.1,(m-K.last)/1e3);K.last=m,K.t+=w;let C=K.t;if(xa(),Ks+=w,ga++,Ks>1.5){let rt=Ks/ga>.03;rt&&o.shadowMap.enabled?(o.shadowMap.enabled=!1,l.traverse(Jt=>{Jt.material&&(Array.isArray(Jt.material)?Jt.material:[Jt.material]).forEach(Te=>{Te.needsUpdate=!0})})):rt&&rs>ma+.01&&(rs=Math.max(ma,rs*.9),o.setPixelRatio(rs),o.setSize(Gr,Vr,!1)),Ks=0,ga=0}let B=ot();Math.abs(B-ds)>.02&&(ps(B),ds=B,it());let Z=K.keys;Z.q&&(K.yawT+=w*1.8),Z.e&&(K.yawT-=w*1.8),K.yaw+=(K.yawT-K.yaw)*Math.min(1,w*9),K.pitch+=(K.pitchT-K.pitch)*Math.min(1,w*9),K.dist+=(K.distT-K.dist)*Math.min(1,w*6);let ht=Math.sin(K.yaw),bt=Math.cos(K.yaw);if(Hr.set(-ht,0,-bt),$i.set(bt,0,-ht),Y.moving=!1,K.mode==="walk"&&!K.ent){let rt=0,Jt=0,Te=1e9,ln=(Z.arrowright||Z.d?1:0)-(Z.arrowleft||Z.a?1:0),Un=(Z.arrowup||Z.w?1:0)-(Z.arrowdown||Z.s?1:0);if(K.joy&&Math.hypot(K.joy.x,K.joy.y)>.15)rt=$i.x*K.joy.x-Hr.x*K.joy.y,Jt=$i.z*K.joy.x-Hr.z*K.joy.y,Te=5*w*Math.min(1,Math.hypot(K.joy.x,K.joy.y));else if(ln||Un)rt=$i.x*ln+Hr.x*Un,Jt=$i.z*ln+Hr.z*Un;else if(K.tgt){let Sn=K.tgt.path[0];if(Sn){let an=Sn[0]-Y.x,Qe=Sn[1]-Y.z,Fn=Math.hypot(an,Qe);Fn<.1?K.tgt.path.shift():(rt=an,Jt=Qe,Te=Fn)}else{let an=K.tgt.fn;K.tgt=null,an&&an()}}let rn=Math.hypot(rt,Jt);if(rn>.01){let Sn=Math.min(5*w,Te),an=rt/rn*Sn,Qe=Jt/rn*Sn,Fn=!1;if(!Dt(Y.x+an,Y.z+Qe,.3))Y.x+=an,Y.z+=Qe,Fn=!0;else if(!Dt(Y.x+an,Y.z,.3))Y.x+=an,Fn=!0;else if(!Dt(Y.x,Y.z+Qe,.3))Y.z+=Qe,Fn=!0;else for(let Yn of[.6,-.6,1.2,-1.2]){let ei=Math.cos(Yn),Ei=Math.sin(Yn),_a=(an*ei-Qe*Ei)*.8,Wr=(an*Ei+Qe*ei)*.8;if(!Dt(Y.x+_a,Y.z+Wr,.3)){Y.x+=_a,Y.z+=Wr,Fn=!0;break}}if(Fn){K.mvz=Qe/Math.max(1e-6,Math.hypot(an,Qe)),Y.moving=!0,Y.ph+=w*10;let Yn=rt/rn*$i.x+Jt/rn*$i.z;Math.abs(Yn)>.2&&(Y.face=Yn>0?1:-1)}else if(K.tgt&&(K.tgt.stuck=(K.tgt.stuck||0)+w,K.tgt.stuck>.5)){let Yn=K.tgt.fn;K.tgt=null,Yn&&Yn()}K.talk&&Math.hypot(K.talk.x-Y.x,K.talk.z-Y.z)>9&&gn()}}if(Nn=null,K.mode==="walk"&&!K.ent){let rt=2.6;for(let Jt of Be){let Te=Math.hypot(Y.x-Jt.face.x,Y.z-Jt.face.z);Te<rt&&(rt=Te,Nn=Jt)}Nn&&(Nn.kind==="home"||Nn.kind==="shop")&&rt<.8&&Y.moving&&(K.mvz||0)*Nn.inw>.5&&kn(Nn)}if(Nn&&!K.ent){let rt=Nn,Jt=ui(new k(rt.face.x,rt.s?3.1:2.95,rt.face.z+rt.inw*.5)),Te=yn();Zn.textContent=rt.label,Zn.classList.toggle("off",rt.kind==="npc"||rt.kind==="closed"),Zn.style.left=Jt.x-Te.left+"px",Zn.style.top=Jt.y-Te.top+"px",Zn.classList.add("on")}else Zn.classList.remove("on");if(K.ent){let rt=K.ent,Jt=rt.d;rt.t+=w,Jt.pivot&&(Jt.pivot.rotation.y=Math.min(1,rt.t/.45)*1.6);let Te=ki((rt.t-.2)/.75,0,1),ln=Jt.face.x,Un=Jt.face.z+Jt.inw*1.1;Y.x=ul(rt.x0,ln,Te),Y.z=ul(rt.z0,Un,Te),Y.moving=Te>0&&Te<1,Y.moving&&(Y.ph+=w*10),Y.mat.opacity=1-ki((rt.t-.55)/.45,0,1),Y.tag&&(Y.tag.material.opacity=Y.mat.opacity),rt.t>1.05&&!rt.done&&(rt.done=1,Ln(Jt.kind))}K.closing&&(K.closing.rotation.y=Math.max(0,K.closing.rotation.y-w*2.4),K.closing.rotation.y<=0&&(K.closing=null)),Y.y=0;for(let rt of ce)if(+(rt.own?r.ex:rt.ex).porch&&Math.abs(Y.x-rt.x)<Rt/2+.3){let Jt=(Y.z-rt.z)*(rt.f===2?-1:1);Jt>1.42&&Jt<3.15&&(Y.y=.3)}for(let rt of vi){if(rt.moving=!1,rt.state==="talk"){rt.face=(Y.x-rt.x)*$i.x+(Y.z-rt.z)*$i.z>0?1:-1;continue}if(rt.state==="idle"){rt.t-=w,rt.t<=0&&Ps(rt);continue}let Jt=rt.tx-rt.x,Te=rt.tz-rt.z,ln=Math.hypot(Jt,Te);if(ln<.1){rt.state="idle",rt.t=Math.random()<.3?Br(3,8):Br(.2,1);continue}let Un=Math.min(ln,rt.sp*w);rt.x+=Jt/ln*Un,rt.z+=Te/ln*Un,rt.moving=!0,rt.ph+=w*(4+rt.sp*3);let rn=Jt*$i.x+Te*$i.z;Math.abs(rn)>.05&&(rt.face=rn>0?1:-1)}let St=Y.x,Ft=Y.z;K.mode==="edit"&&(St=Ee.x,Ft=Ee.z+(Ee.f===2?-1:1)*3.2),K.cam.x+=(St-K.cam.x)*Math.min(1,w*8),K.cam.z+=(Ft-K.cam.z)*Math.min(1,w*8),K.cam.y+=((K.mode==="edit"?1.8:1.1)-K.cam.y)*Math.min(1,w*4);let Tt=Gr/Vr,Ye=K.dist*(Tt<1.4?1.4/Tt:1);fi.set(K.cam.x+ht*Math.cos(K.pitch)*Ye,K.cam.y+Math.sin(K.pitch)*Ye,K.cam.z+bt*Math.cos(K.pitch)*Ye),fi.y<.8&&(fi.y=.8),K.fpK+=((K.fp&&K.mode==="walk"&&!K.ent?1:0)-K.fpK)*Math.min(1,w*5);let An=K.fpK,ms=Math.cos(K.fpP),Rn=Math.sin(K.fpP);yr.set(K.cam.x,Y.y+1.55,K.cam.z),uo.set(K.cam.x,K.cam.y+.4,K.cam.z),Zi.set(yr.x-ht*ms*10,yr.y+Rn*10,yr.z-bt*ms*10),fi.lerp(yr,An),uo.lerp(Zi,An),Y.grp.visible=An<.5,Y.sh.visible=An<.5,Y.tag&&(Y.tag.visible=An<.5),u.position.copy(fi),u.lookAt(uo),W.position.copy(fi),xt.position.set(K.cam.x+30,60,K.cam.z+22),xt.target.position.set(K.cam.x,0,K.cam.z),K.night>.6&&xt.position.set(K.cam.x-25,50,K.cam.z+30);let gs=Math.atan2(fi.x-K.cam.x,fi.z-K.cam.z);for(let rt of Ct){let Jt=rt.w,Te=rt.h,ln=rt.moving,Un=Math.sin(rt.ph),rn=ln?Math.abs(Un)*.06:0,Sn=ln?Un*.06:Math.sin(C*1.6+rt.ph)*.01,an=ln?1+Math.cos(rt.ph*2)*.025:1+Math.sin(C*1.6+rt.ph)*.008;rt.grp.position.set(rt.x,(rt.y||0)+rn,rt.z),rt.m.rotation.set(0,gs,Sn*rt.face),rt.m.scale.set(Jt*rt.face*(2-an),Te*an,1),rt.sh.position.set(rt.x,(rt.y||0)+.07,rt.z),rt.sh.scale.set(Jt*.7,Jt*.4,1),rt.tag&&rt.tag.position.set(rt.x,(rt.y||0)+Te+.35,rt.z),rt.bub&&(rt.bub.visible=rt!==K.talk,rt.bub.position.set(rt.x,Te+.5+Math.sin(C*2.3+rt.ph)*.06,rt.z))}le.offset.set(C*.004,C*.006),Oe.forEach((rt,Jt)=>{Jt===0?rt.rotation.z=C*.3:rt.scale.y=1+Math.sin(C*6)*.08}),Pt.children.forEach(rt=>{rt.userData.a+=w*.004,rt.position.x=Math.cos(rt.userData.a)*rt.userData.R,rt.position.z=Math.sin(rt.userData.a)*rt.userData.R,rt.lookAt(0,rt.position.y,0)});let At=Pt.userData.boat;At&&(At.position.y=-.2+Math.sin(C*1.2)*.08,At.rotation.z=Math.sin(C*.9)*.04),o.render(l,u)}return K.raf=requestAnimationFrame(_l),Fh}var Li=(i,t)=>i+Math.random()*(t-i),hs=(i,t,e)=>Math.max(t,Math.min(e,i));var Rs=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Cn=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ef=new Uint8Array(256).map((i,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),pr=i=>"\xA5"+Math.round(i).toLocaleString("en-US"),gl=[[10,8,0],[12,9,5e4],[14,10,15e4],[16,12,4e5]],hi=3.1,ge=10,wt=8,Gi=4,Vi=6,Hi=5,Cs,Is,Rf,Cf,If,nm,Ph,yi,Lh,ml;function im(i){let t=gl[hs(i|0,0,gl.length-1)];ge=t[0],wt=t[1],Gi=ge/2-1,Vi=ge/2+1,Hi=ge/2,Cs=-10,Is=ge+10,Rf=wt+9,Cf=-4,If=ge+4,nm=wt+1,Ph=wt+4,yi={x:Hi+2.3,z:wt+1.4},Lh=Math.floor(yi.x),ml=new Set;for(let e=wt;e<Ph+1;e++)for(let n=Gi;n<Vi;n++)ml.add(n+","+e);ml.add(Lh+","+(wt+1))}im(0);var Df=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function pl(i){let t=0,e={};for(let[n]of i.it||[]){let s=De[n];s&&(e[n]=(e[n]||0)+1,t+=e[n]<=2?s.c:s.c*.4)}return i.fl&&i.fl!=="wood"&&(t+=6),i.wa&&i.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function Pf(i){let t=0;return Df.forEach((e,n)=>{i>=e[0]&&(t=n)}),t}var Lf=i=>Math.min(8e4,3e3+i*400);function sm(i){return{v:1,name:i||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function T1(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function E1(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var Af={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},A1=["daruma","maneki","beer","vase","pine","sake"],rm=`
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
`,R1=rm;function C1(i){im(i.data&&i.data.sz);let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.kind==="home",a=!!i.island,o=i.data||sm();if(o.it=(o.it||[]).filter(h=>De[h[0]]),o.inv=o.inv||{},o.fo=o.fo||{wood:1},o.wo=o.wo||{tsuchi:1},o.gc=o.gc||{},!document.getElementById("h3css")){let h=document.createElement("style");h.id="h3css",h.textContent=rm,document.head.appendChild(h)}let l=new so({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});l.setClearColor(1709366,1);let c=new Tr;c.fog=new Zr(3811400,26,80);let u=new ri(40,2,.2,500),p=new ea,d=(h,x)=>p.load(h,b=>{b.colorSpace=ii,b.anisotropy=4,x&&x(b)}),f=new _i(250,24,16);{let h=[],x=f.attributes.position,b=new Me("#121032"),v=new Me("#7a4058"),P=new Me("#3a2350"),D=new Me;for(let $=0;$<x.count;$++){let j=x.getY($)/250;j>.25?D.copy(P).lerp(b,hs((j-.25)/.55,0,1)):D.copy(v).lerp(P,hs((j+.05)/.3,0,1)),h.push(D.r,D.g,D.b)}f.setAttribute("color",new Pe(h,3))}let g=new mt(f,new Je({vertexColors:!0,side:oi,fog:!1,depthWrite:!1}));g.renderOrder=-10,c.add(g);{let h=[],x=Rs(11);for(let v=0;v<300;v++){let P=x()*Math.PI*2,D=.2+x()*1.2,$=230;h.push(Math.cos(P)*Math.cos(D)*$,Math.sin(D)*$,Math.sin(P)*Math.cos(D)*$)}let b=new Pn;b.setAttribute("position",new Pe(h,3)),g.add(new Ya(b,new Kr({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let h=ve(128,128,b=>{let v=b.createRadialGradient(64,64,20,64,64,64);v.addColorStop(0,"rgba(255,246,214,1)"),v.addColorStop(.5,"rgba(255,240,200,1)"),v.addColorStop(.52,"rgba(255,230,180,.25)"),v.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=v,b.fillRect(0,0,128,128)}),x=new gi(new ai({map:h,fog:!1,depthWrite:!1}));x.scale.set(40,40,1),x.position.set(-90,120,-170),g.add(x)}let I=new Ir(12103408,5914696,1.15);c.add(I);let _=(()=>{let h=new Date;return i.hour!=null?i.hour:h.getHours()+h.getMinutes()/60})(),y=_<5||_>=19.5?1:_<6.5?(6.5-_)/1.5:_>17.5?(_-17.5)/2:0,S=new Pr(16769208,.7);S.position.set(-6,12,10),c.add(S);let L=new ia(16756832,14,13,1.3);L.position.set(ge*.3,2.7,wt*.45),c.add(L);let E=new ia(16756832,14,13,1.3);E.position.set(ge*.72,2.7,wt*.55),c.add(E);let F=new ia(16752720,10,9,1.4);F.position.set(Hi,2.4,wt+1.4),c.add(F);let N=ve(64,64,h=>{let x=h.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(0,0,0,.7)"),x.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=x,h.fillRect(0,0,64,64)}),M=(h,x,b)=>{let v=h.clone();return v.wrapS=v.wrapT=Bs,v.repeat.set(x,b),v.needsUpdate=!0,v};function A(h,x,b,v,P,D,$,j){let tt=new mt(new bn(h,x,b),v);return tt.position.set(P,D,$),(j||c).add(tt),tt}function q(h,x,b,v,P,D,$){let j=new gi(new ai({map:ua,blending:Ms,transparent:!0,depthWrite:!1,opacity:P}));return $&&j.material.color.set($),j.scale.set(v,v,1),j.position.set(h,x,b),(D||c).add(j),j}let z={wood:()=>ve(256,256,(h,x,b)=>{let v=Rs(4);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(60,30,10,.35)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<6;$++)h.fillStyle="rgba(90,50,20,.12)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),dark:()=>ve(256,256,(h,x,b)=>{let v=Rs(8);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(0,0,0,.4)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<5;$++)h.fillStyle="rgba(255,220,180,.05)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),tatami:()=>ve(256,256,(h,x,b)=>{for(let v=0;v<2;v++){let P=v*128;h.fillStyle="#c4c078",h.fillRect(P,0,128,b);for(let D=0;D<b;D+=3)h.fillStyle=D%6?"#b8b46c":"#cfcb84",h.fillRect(P,D,128,1);h.fillStyle="#2a3a2a",h.fillRect(P,0,6,b),h.fillRect(P+122,0,6,b)}}),stone:()=>ve(256,256,(h,x,b)=>{h.fillStyle="#5a5250",h.fillRect(0,0,x,b);let v=Rs(6);for(let P=0;P<4;P++)for(let D=0;D<4;D++){let $=v()*18|0;h.fillStyle=`rgb(${120+$},${112+$},${104+$})`,h.fillRect(D*64+3+P%2*8,P*64+3,58,58)}}),light:()=>ve(256,256,(h,x,b)=>{let v=Rs(12);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(120,80,40,.25)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<6;$++)h.fillStyle="rgba(160,110,60,.1)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),carpetf:()=>ve(256,256,(h,x,b)=>{h.fillStyle="#e8dcc4",h.fillRect(0,0,x,b);let v=Rs(14);for(let P=0;P<3e3;P++)h.fillStyle=v()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",h.fillRect(v()*x,v()*b,2,2)}),check:()=>ve(256,256,(h,x,b)=>{for(let v=0;v<4;v++)for(let P=0;P<4;P++)h.fillStyle=(P+v)%2?"#2a3a36":"#d8c8a0",h.fillRect(P*64,v*64,64,64);h.strokeStyle="rgba(0,0,0,.2)",h.lineWidth=2;for(let v=0;v<=4;v++)h.beginPath(),h.moveTo(v*64,0),h.lineTo(v*64,b),h.moveTo(0,v*64),h.lineTo(x,v*64),h.stroke()})};function W(h,x){let v=Math.round(x*64),P=Math.round(hi*64);return ve(v,P,D=>{let $=Rs(x*7|0);if(h==="plank")for(let tt=0;tt<v;tt+=22){let It=$();D.fillStyle=`hsl(28,${36+It*8}%,${40+It*8}%)`,D.fillRect(tt,0,22,P),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(tt,0,2,P)}else if(h==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,v,P);for(let tt=0;tt<300;tt++)D.fillStyle=$()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect($()*v,$()*P,8,8);D.fillStyle="#5a2a14";for(let tt=0;tt<v;tt+=128)D.fillRect(tt,0,8,P)}else if(h==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,v,P),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let tt=0;tt<P;tt+=24)for(let It=tt/24%2*12;It<v;It+=24)D.beginPath(),D.arc(It,tt,9,Math.PI,0),D.stroke()}else if(h==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/900;tt++){let It=$()*v,Ve=$()*P;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][tt%3];for(let Se=0;Se<5;Se++){let he=Se/5*Math.PI*2;D.beginPath(),D.ellipse(It+Math.cos(he)*4,Ve+Math.sin(he)*4,3.5,2,he,0,7),D.fill()}}}else if(h==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/80;tt++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect($()*v,$()*P,2,2)}else if(h==="stripe")for(let tt=0;tt<v;tt+=24)D.fillStyle=tt/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(tt,0,24,P);else if(h==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,v,P);for(let tt=12;tt<P;tt+=30)for(let It=tt/30%2*16;It<v;It+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(It+tt)%3];for(let Ve=0;Ve<5;Ve++){let Se=Ve/5*Math.PI*2;D.beginPath(),D.arc(It+Math.cos(Se)*4,tt+Math.sin(Se)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(It,tt,2,0,7),D.fill()}}else if(h==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/70;tt++)D.fillStyle=$()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect($()*v,$()*P,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/60;tt++)D.fillStyle=$()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect($()*v,$()*P,3,3);D.fillStyle="#6b3f1f";for(let tt=0;tt<v;tt+=64*2.5)D.fillRect(tt,0,10,P)}let j=P-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,j,v,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let tt=0;tt<v;tt+=28)D.fillRect(tt,j,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,j-6,v,8),D.fillRect(0,0,v,10)})}let Q=c.children.length,ut=ve(256,256,(h,x,b)=>{h.fillStyle="#4a4246",h.fillRect(0,0,x,b);let v=Rs(3);for(let P=0;P<4;P++)for(let D=0;D<4;D++){let $=(v()*16|0)-8;h.fillStyle=`rgb(${96+$},${86+$},${84+$})`,h.fillRect(D*64+2,P*64+2,60,60)}}),V=ve(256,256,(h,x,b)=>{h.fillStyle="#2c2830",h.fillRect(0,0,x,b);let v=Rs(5);for(let P=0;P<700;P++){let D=34+(v()*22|0);h.fillStyle=`rgb(${D},${D-3},${D+4})`,h.fillRect(v()*x,v()*b,2,2)}});{let h=new mt(new Ke(600,600),te("#1c1826"));h.rotation.x=-Math.PI/2,h.position.y=-.04,c.add(h)}{let h=Is-Cs+30,x=(Cs+Is)/2,b=new mt(new Ke(h,6.2),te("#ffffff",{map:M(ut,h/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(x,.005,wt+3.1),c.add(b);let v=new mt(new Ke(h,6),te("#ffffff",{map:M(V,h/6,1)}));v.rotation.x=-Math.PI/2,v.position.set(x,0,wt+9.2),c.add(v);for(let D=Cs-14;D<Is+14;D+=3.4)A(1.7,.02,.14,xn("#cfc8b4"),D,.02,wt+9.2);A(h,.16,.2,te("#7a6e66"),x,.08,wt+6.15);let P=new mt(new Ke(h,5),te("#ffffff",{map:M(ut,h/3,5/3)}));P.rotation.x=-Math.PI/2,P.position.set(x,.005,wt+14.7),c.add(P)}let at=c.children.length,ct=new mn({color:"#ffffff"}),st=new mt(new Ke(ge,wt),ct);st.rotation.x=-Math.PI/2,st.position.set(ge/2,.02,wt/2),c.add(st);function Pt(h){ct.map&&ct.map.dispose();let x=(z[h]||z.wood)();x.wrapS=x.wrapT=Bs,x.repeat.set(ge/2,wt/2),ct.map=x,ct.needsUpdate=!0}A(ge+.4,.12,wt+.4,te("#2a1810"),ge/2,-.075,wt/2);let lt={back:new mn,left:new mn,right:new mn,front:new mn},Mt=ve(256,200,(h,x,b)=>{h.fillStyle="#5a3a24",h.fillRect(0,0,x,b);for(let v=0;v<x;v+=16)h.fillStyle=v%32?"#4a2e1c":"#6a4630",h.fillRect(v,0,14,b);h.fillStyle="#2a1810",h.fillRect(0,b-40,x,40)}),xt=new mn({map:M(Mt,3,1)}),Ht=te("#3a2214"),le={};function pt(h,x,b,v,P,D){let $=new ye;$.position.set(v,0,P),c.add($);let j=new mt(new bn(x,hi,b),D);return j.position.y=hi/2,$.add(j),le[h]=le[h]||[],le[h].push($),$}pt("back",ge+.4,.2,ge/2,-.1,[Ht,Ht,Ht,Ht,lt.back,xt]),pt("left",.2,wt,-.1,wt/2,[lt.left,xt,Ht,Ht,Ht,Ht]),pt("right",.2,wt,ge+.1,wt/2,[xt,lt.right,Ht,Ht,Ht,Ht]);let $t=ve(640,200,(h,x,b)=>{h.fillStyle="#6a4228",h.fillRect(0,0,x,b);for(let P=0;P<x;P+=14)h.fillStyle=P%28?"#5a3620":"#74482c",h.fillRect(P,0,12,b);let v=P=>{h.fillStyle="#ffd98a",h.fillRect(P,56,128,70),h.strokeStyle="#2a1408",h.lineWidth=6,h.strokeRect(P,56,128,70),h.lineWidth=3;for(let D=1;D<4;D++)h.beginPath(),h.moveTo(P+D*32,56),h.lineTo(P+D*32,126),h.stroke();h.beginPath(),h.moveTo(P,91),h.lineTo(P+128,91),h.stroke()};v(64),v(448),h.fillStyle="#2a1810",h.fillRect(0,b-40,x,40)}),ie=new Je({map:$t}),xe=(h,x)=>{let b=new Je({map:$t.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(x-h,1),b.map.offset.set(h,0),b};pt("front",Gi+.2,.2,(Gi-.2)/2,wt+.1,[Ht,Ht,Ht,Ht,xe(0,(Gi+.2)/(ge+.4)),lt.front]),pt("front",ge-Vi+.2,.2,(Vi+ge+.2)/2,wt+.1,[Ht,Ht,Ht,Ht,xe((Vi+.2)/(ge+.4),1),lt.front]);{let h=new ye;h.position.set(Hi,0,wt+.1),c.add(h),A(Vi-Gi,hi-2.35,.2,te("#4a2a14"),0,2.35+(hi-2.35)/2,0,h),le.front.push(h)}function Kt(h){let x={back:ge+.4,left:wt,right:wt,front:ge+.4};for(let b in lt){let v=lt[b];v.map&&v.map.dispose(),v.map=W(h,x[b]),v.needsUpdate=!0}}let re=new ye;c.add(re),le.front.push(re);let He=te("#3a2214");A(.22,2.45,.34,He,Gi+.05,1.22,wt+.14,re),A(.22,2.45,.34,He,Vi-.05,1.22,wt+.14,re),A(Vi-Gi+.4,.24,.38,He,Hi,2.42,wt+.14,re);let _e=new ye;_e.position.set(Hi,2.32,wt+.3),re.add(_e);let Oe=ve(256,140,(h,x,b)=>{for(let v=0;v<3;v++){let P=4+v*84;h.fillStyle="#23315c",h.fillRect(P,0,80,b-6),h.fillStyle="rgba(0,0,0,.22)",h.fillRect(P,b-16,80,10)}h.fillStyle="#f3e6c8",h.textAlign="center",h.textBaseline="middle",h.font=`900 50px ${jn}`,["\u55B6","\u696D","\u4E2D"].forEach((v,P)=>h.fillText(v,44+P*84,56))}),We=new mt(new Ke(1.95,1.05),new Je({map:Oe,transparent:!0,side:Hn,alphaTest:.05}));We.position.y=-.52,_e.add(We);let vt=document.createElement("canvas");vt.width=640,vt.height=140;let kt=new jr(vt);kt.colorSpace=ii,kt.anisotropy=4;function Rt(){let h=vt.getContext("2d"),x=640,b=140;h.clearRect(0,0,x,b),h.fillStyle="#f3e2bd",h.strokeStyle="#2a1810",h.lineWidth=10,Fr(h,6,6,x-12,b-12,16),h.fill(),h.stroke(),h.fillStyle="#3a1e0c",h.textAlign="center",h.textBaseline="middle";let v=72,P=o.name||"";for(h.font=`900 ${v}px ${jn}`;h.measureText(P).width>x-60&&v>24;)v-=2,h.font=`900 ${v}px ${jn}`;h.fillText(P,x/2,b/2+4),kt.needsUpdate=!0}Rt();{let h=new mt(new bn(3.6,.76,.12),[He,He,He,He,new Je({map:kt}),He]);h.position.set(Hi,2.86,wt+.34),re.add(h)}let Vt=[];for(let h of[Gi-.45,Vi+.45]){let x=new ye;x.position.set(h,1.95,wt+.45),re.add(x);let b=new mt(new _i(.28,16,12),xn("#e2452f"));b.scale.y=1.3,x.add(b),A(.26,.06,.26,xn("#2a1810"),0,.38,0,x),A(.26,.06,.26,xn("#2a1810"),0,-.38,0,x),Vt.push(q(0,0,.12,2.3,.55,x))}let Ut=new ye;c.add(Ut);{let h=ve(128,128,(D,$,j)=>{D.fillStyle="#2c3044",D.fillRect(0,0,$,j);for(let tt=0;tt<j;tt+=16){D.fillStyle="#3a4058",D.fillRect(0,tt,$,3);for(let It=tt/16%2*16;It<$;It+=32)D.fillStyle="#20242f",D.fillRect(It,tt,2,16)}}),x=new mn({map:M(h,6,3)}),b=Math.hypot(wt/2+.9,1.6);for(let D of[-1,1]){let $=new mt(new bn(ge+1.6,.14,b),x);$.position.set(ge/2,hi+1.5,wt/2+D*(wt/4+.45)),$.rotation.x=D*Math.atan2(1.6,wt/2+.9),Ut.add($)}let v=new mt(new bn(ge+1.7,.2,.3),te("#1c1f2a"));v.position.set(ge/2,hi+2.32,wt/2),Ut.add(v);for(let D of[-.2,ge+.2]){let $=new Pn;$.setAttribute("position",new Pe([D,hi,-.2,D,hi,wt+.2,D,hi+2.32,wt/2,D,hi,-.2,D,hi+.7,-.9,D,hi+2.32,wt/2,D,hi,wt+.2,D,hi+.7,wt+.9,D,hi+2.32,wt/2],3)),$.computeVertexNormals(),Ut.add(new mt($,new mn({color:"#4a2e1c",side:Hn})))}for(let D of[-.1,wt+.1]){let $=new mt(new bn(ge+.4,1,.2),xt);$.position.set(ge/2,hi+.5,D),Ut.add($)}let P=new mt(new bn(ge+1.4,.18,1.3),te("#2c3044"));P.position.set(ge/2,hi+.72,wt+.75),P.rotation.x=.25,Ut.add(P)}let Le=c.children.length,ce=[21,33].map(h=>ve(128,256,(x,b,v)=>{let P=Rs(h);x.fillStyle="#1b1636",x.fillRect(0,0,b,v);for(let D=0;D<16;D++)for(let $=0;$<8;$++)x.fillStyle=P()<.33?P()<.5?"#ffd98a":"#ffbe68":"#272043",x.fillRect($*16+3,D*16+3,10,10)})),Xe=[];function qe(h,x,b,v,P,D){let $=x-h,j=(h+x)/2,tt=new ye;tt.position.set(j,0,0),c.add(tt),Xe.push(tt),A($-.2,b,wt+1,te(v),0,b/2,wt/2-.4,tt);let It=ve(Math.round($*40),Math.round(b*40),(he,Ze,Gn)=>{he.fillStyle=v,he.fillRect(0,0,Ze,Gn);for(let Ni=0;Ni<Ze;Ni+=12)he.fillStyle="rgba(0,0,0,.12)",he.fillRect(Ni,0,2,Gn);he.fillStyle="#ffcf7a",he.fillRect(Ze*.18,Gn-2.2*40,Ze*.64,1.6*40),he.strokeStyle="#2a1408",he.lineWidth=4,he.strokeRect(Ze*.18,Gn-2.2*40,Ze*.64,1.6*40);for(let Ni=1;Ni<4;Ni++)he.beginPath(),he.moveTo(Ze*.18+Ze*.16*Ni,Gn-2.2*40),he.lineTo(Ze*.18+Ze*.16*Ni,Gn-.6*40),he.stroke();b>4&&(he.fillStyle="#ffd98a",he.fillRect(Ze*.25,20,Ze*.2,40),he.fillRect(Ze*.55,20,Ze*.2,40))}),Ve=new mt(new Ke($-.2,b),new Je({map:It}));Ve.position.set(0,b/2,wt+.11),tt.add(Ve);let Se=new mt(new bn($+.2,.2,1.4),te("#2c3044"));if(Se.position.set(0,Math.min(b,3.1),wt+.7),Se.rotation.x=.25,tt.add(Se),P){let he=ve(256,120,(Gn,Ni,zh)=>{for(let J=0;J<3;J++)Gn.fillStyle=D,Gn.fillRect(4+J*84,0,80,zh-6);Gn.fillStyle="#f8ecd8",Gn.textAlign="center",Gn.textBaseline="middle",Gn.font=`900 46px ${jn}`,[...P].forEach((J,fe)=>Gn.fillText(J,44+fe*84,52))}),Ze=new mt(new Ke(1.8,.85),new Je({map:he,transparent:!0,side:Hn}));Ze.position.set(0,2.1,wt+.5),tt.add(Ze)}q(0,1.2,wt+.6,3.5,.35,tt)}qe(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),qe(-13,-6.6,3.4,"#3a4a4a","",""),qe(ge+.3,ge+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),qe(ge+6.4,ge+13,5.4,"#3a3a5a","","");{let h=Rs(17);for(let x=-40;x<60;x+=7+h()*5){let b=8+h()*18,v=6+h()*5,P=new mt(new bn(v,b,6),[xn("#1c1736"),xn("#1c1736"),xn("#18132e"),xn("#18132e"),xn("#ffffff",{map:M(ce[h()*2|0],v/5,b/6)}),xn("#1c1736")]);P.position.set(x,b/2,-12-h()*6),c.add(P)}for(let x=-40;x<60;x+=7+h()*6){let b=5+h()*10,v=5+h()*5,P=new mt(new bn(v,b,6),[xn("#1c1736"),xn("#1c1736"),xn("#18132e"),xn("#18132e"),xn("#ffffff",{map:M(ce[h()*2|0],v/5,b/6)}),xn("#1c1736")]);P.position.set(x,b/2,wt+22+h()*4),P.rotation.y=Math.PI,c.add(P)}}let sn=[];function X(h,x){let b=new ye;b.position.set(h,0,x),c.add(b),A(.3,.14,.3,te("#3a3030"),0,.07,0,b),A(.11,4,.11,te("#2b2422"),0,2,0,b),A(.7,.09,.09,te("#2b2422"),0,4,0,b);let v=A(.44,.44,.44,xn("#ffe2a6"),0,3.78,0,b);sn.push(q(0,3.78,0,4.5,.55,b));let P=new mt(new Ke(6,6),new Je({map:ua,blending:Ms,transparent:!0,depthWrite:!1,opacity:.28}));P.rotation.x=-Math.PI/2,P.position.y=.03,b.add(P)}X(-3.2,wt+5.7),X(ge+3.2,wt+5.7),X(-12,wt+5.7),X(ge+12,wt+5.7);let Ee=[];function Ne(h,x,b){let v=new ye;v.position.set(h,0,x),v.scale.setScalar(b),c.add(v);let P=new mt(new Ii(.16,.26,2.6,7),te("#4a3024"));P.position.y=1.3,v.add(P);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([$,j,tt,It],Ve)=>{let Se=new mt(new bs(It,1),new mn({color:D[Ve%3],flatShading:!0}));Se.position.set($,j,tt),v.add(Se)}),Ee.push({x:h,z:x,y:3.2*b,r:2*b})}Ne(-6,wt+16.5,1.1),Ne(3,wt+17,1),Ne(13,wt+16.6,1.15),Ne(-14,wt+3.5,.95),Ne(ge+15,wt+3.4,1);{let h=ve(64,128,(v,P,D)=>{v.fillStyle="#c23a2a",v.fillRect(0,0,P,D),v.fillStyle="#fff3d6",v.fillRect(6,8,52,50);let $=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let j=0;j<8;j++)v.fillStyle=$[j%4],v.fillRect(10+j%4*12,14+Math.floor(j/4)*20,9,14);v.fillStyle="#111",v.fillRect(10,90,44,12)}),x=new ye;x.position.set(-1.4,0,wt+.6),c.add(x);let b=new mt(new bn(.95,1.9,.75),[te("#c23a2a"),te("#c23a2a"),te("#c23a2a"),te("#c23a2a"),xn("#ffffff",{map:h}),te("#c23a2a")]);b.position.y=.95,x.add(b),q(0,1.2,.7,2.2,.35,x)}{let h=new ye;h.position.set(ge+1.8,0,wt+5.2),c.add(h),A(1.6,.1,.5,te("#8a5a30"),0,.5,0,h),A(1.6,.5,.08,te("#8a5a30"),0,.8,.22,h),A(.1,.5,.4,te("#2b2422"),-.7,.25,0,h),A(.1,.5,.4,te("#2b2422"),.7,.25,0,h)}let ze=new ye;ze.position.set(ge+1.5,.55,wt+5.2),c.add(ze);{let h="#e8a050",x=new mt(new _i(.22,14,10),te(h));x.scale.set(1.4,.7,1),ze.add(x);let b=new mt(new _i(.13,12,10),te(h));b.position.set(.3,.05,0),ze.add(b);for(let P of[-.06,.06]){let D=new mt(new xi(.05,.09,4),te(h));D.position.set(.32,.17,P),ze.add(D)}let v=new mt(new Ii(.035,.03,.4,6),te(h));v.rotation.z=1.2,v.position.set(-.34,.02,.08),ze.add(v)}let Ot=new ye;Ot.position.set(yi.x,0,yi.z),c.add(Ot);{A(.1,1.5,.1,te("#4a2a14"),-.55,.75,0,Ot),A(.1,1.5,.1,te("#4a2a14"),.55,.75,0,Ot);let h=ve(256,160,(v,P,D)=>{v.fillStyle="#b8864a",v.fillRect(0,0,P,D),v.strokeStyle="#4a2a14",v.lineWidth=10,v.strokeRect(0,0,P,D);let $=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let j=0;j<5;j++){v.save(),v.translate(40+j%3*80,44+Math.floor(j/3)*70),v.rotate((j%2?-1:1)*.12),v.fillStyle=$[j%4],v.fillRect(-28,-22,56,44),v.fillStyle="#e2452f",v.beginPath(),v.arc(0,-18,4,0,7),v.fill(),v.fillStyle="#8a7a6a";for(let tt=0;tt<3;tt++)v.fillRect(-20,-6+tt*9,40-tt*8,3);v.restore()}v.fillStyle="#3a1e0c",v.font=`900 26px ${jn}`,v.textAlign="right",v.fillText("\u7559\u8A00\u677F",P-14,D-14)}),x=new mt(new bn(1.3,.85,.08),[He,He,He,He,new Je({map:h}),He]);x.position.y=1.15,Ot.add(x);let b=new mt(new bn(1.5,.08,.35),te("#2c3044"));b.position.y=1.62,b.rotation.x=.2,Ot.add(b),Ot.traverse(v=>{v.isMesh&&(v.userData.board=1)})}let _n=[];if(Ot.traverse(h=>{h.isMesh&&_n.push(h)}),a){let h=c.children.length;c.children.slice(Le,h).concat(c.children.slice(Q,at)).forEach(tt=>c.remove(tt)),_n.length=0,Ee.length=0;let x=new Me("#8fd3f6"),b=new Me("#16204a"),v=new Me("#f0a890"),P=x.clone().lerp(_>15&&_<20?v:b,_>15&&_<20&&y<.5?Math.min(1,y*2):y).lerp(b,y>.5?(y-.5)*2:0);c.fog.color.copy(P),c.fog.near=30,c.fog.far=90,l.setClearColor(P,1),g.visible=!1,I.color.set(y>.5?"#9aa8ff":"#e8f4ff"),I.groundColor.set("#6a8a4a"),I.intensity=1.25+(1-y)*.6,S.intensity=.4+(1-y)*1,S.color.set(y>.5?"#a0b0ff":"#fff2dc");let D=new mt(new Ke(220,220),te(y>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,c.add(D);let $=new mt(new Ke(2.2,6),te("#d9d4cc"));$.rotation.x=-Math.PI/2,$.position.set(Hi,-.01,wt+3.2),c.add($);let j=y>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[ge+4,1],[ge+5,6],[-3,wt+5],[ge+3,wt+6],[2,-4],[8,-5]].forEach(([tt,It],Ve)=>{let Se=new ye;Se.position.set(tt,0,It),c.add(Se);let he=new mt(new Ii(.2,.28,1.8,7),te("#8a5a3a"));he.position.y=.9,Se.add(he);let Ze=new mt(new bs(1.4,1),new mn({color:Ve%3?j:y>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));Ze.position.y=2.6,Se.add(Ze)})}let de=140,be=new Float32Array(de*3),U=[],T=ve(32,32,h=>{h.fillStyle="#f8c8d8",h.beginPath(),h.ellipse(16,16,12,7,.5,0,7),h.fill()}),et=new Ya(new Pn,new Kr({map:T,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));et.geometry.setAttribute("position",new Pe(be,3)),c.add(et);function Lt(h,x){let b=Ee.concat(yt)[Math.floor(Math.random()*(Ee.length+yt.length))]||Ee[0]||{x:-999,z:-999,y:0,r:.1};be[h*3]=b.x+Li(-b.r,b.r),be[h*3+1]=x?Li(0,b.y):b.y+Li(-.3,.3),be[h*3+2]=b.z+Li(-b.r,b.r),U[h]={vx:Li(-.2,.4),vy:Li(-.5,-.25),ph:Math.random()*7,fl:b.y}}let yt=[],Ct=[],zt=[],gt=(h,x)=>h>=0&&h<ge&&x>=0&&x<wt,_t=(h,x)=>!a&&h>=Cf&&h<If&&x>=nm&&x<Ph,Gt=(h,x)=>x%2?[h.d,h.w]:[h.w,h.d];function G(h){let x=De[h.k];if(x.L==="wall")return Y(h);let[b,v]=Gt(x,h.r),P=[];for(let D=0;D<b;D++)for(let $=0;$<v;$++)P.push([h.x+D,h.z+$]);return P}function Y(h){let x=De[h.k],b=[];for(let v=0;v<x.w;v++)h.r===0?b.push(["b",h.x+v]):h.r===2?b.push(["f",h.x+v]):h.r===1?b.push(["l",h.z+v]):b.push(["r",h.z+v]);return b}function ft(h){return h===0?"back":h===2?"front":h===1?"left":"right"}function Xt(h,x){let b=De[h.k];for(let[v,P]of Y(h)){let D=v==="b"||v==="f"?ge:wt;if(P<0||P>=D||v==="f"&&P>=Gi-0&&P<Vi)return!1;v==="f"&&P>=Gi-1&&P<Vi+1&&b.w>1}for(let v of Ct){if(v===x||De[v.k].L!=="wall")continue;let P=Y(v);for(let D of Y(h))if(P.some($=>$[0]===D[0]&&$[1]===D[1]))return!1}return!0}function Dt(h,x,b,v){for(let P of Ct)if(!(P===v||De[P.k].L!==b)&&G(P).some(D=>D[0]===h&&D[1]===x))return P;return null}function Wt(h,x,b){let v=Dt(h,x,"main",b);return v&&De[v.k].sf?v:null}function ue(h,x){let b=De[h.k];if(b.L==="wall")return Xt(h,x);let v=G(h),P=null;for(let[D,$]of v){let j=gt(D,$),tt=_t(D,$);if(!j&&!tt)return!1;if(P===null)P=j;else if(P!==j)return!1;if(ml.has(D+","+$))return!1;if(b.L==="top"){if(Dt(D,$,"top",x))return!1;let It=Dt(D,$,"main",x);if(It&&!De[It.k].sf||It&&It.k==="tank")return!1}else if(Dt(D,$,b.L,x))return!1;if(b.L==="main"&&b.solid&&j&&$===wt-1&&D>=Gi&&D<Vi)return!1}return b.L==="main"&&b.solid,!0}function Ue(h){if(De[h.k].L!=="top")return 0;let b=0;for(let[v,P]of G(h)){let D=Wt(v,P);D&&(b=Math.max(b,De[D.k].sf))}return b}function Et(h){let x=De[h.k];if(x.L==="wall"){let[P,D]=Y(h)[0],$=D+x.w/2;return P==="b"?[$,0,.02]:P==="f"?[$,0,wt-.02]:P==="l"?[.02,0,$]:[ge-.02,0,$]}let[b,v]=Gt(x,h.r);return[h.x+b/2,Ue(h),h.z+v/2]}let pe=new Je({map:N,transparent:!0,depthWrite:!1,opacity:.55});function we(h,x){let b=De[h.k];if(h.I=b,h.g=Sf(h.k),c.add(h.g),h.g.userData.e=h,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[v,P]=Gt(b,0),D=new mt(new Ke(v*.95,P*.95),pe);D.rotation.x=-Math.PI/2,D.position.y=.012,h.g.add(D),D.raycast=()=>{}}return h.g.traverse(v=>{v.isMesh&&(v.userData.e=h,zt.push(v))}),Ct.push(h),Yt(h),x||vi(),h}function Yt(h){let[x,b,v]=Et(h);h.g.position.set(x,b,v),h.g.rotation.y=h.r*Math.PI/2}function on(h){let x=Ct.indexOf(h);x>=0&&Ct.splice(x,1),c.remove(h.g);for(let b=zt.length-1;b>=0;b--)zt[b].userData.e===h&&zt.splice(b,1);h.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function zn(h){let x=G(h);return Ct.filter(b=>De[b.k].L==="top"&&G(b).some(v=>x.some(P=>P[0]===v[0]&&P[1]===v[1])))}if(o.it.forEach(([h,x,b,v])=>{let P={k:h,x,z:b,r:v||0};ue(P)?we(P,!0):s&&(o.inv[h]=(o.inv[h]||0)+1)}),Ct.filter(h=>De[h.k].L==="top").forEach(Yt),Pt(o.fl),Kt(o.wa),r){let h=i.ex||{},x=h.wall||"#f29ab8",b=ve(640,200,(v,P,D)=>{v.fillStyle=x,v.fillRect(0,0,P,D);for(let j=0;j<D;j+=14)v.fillStyle="rgba(0,0,0,.08)",v.fillRect(0,j,P,2);let $=j=>{v.fillStyle=y>.5?"#ffd98a":"#bfe6ff",v.fillRect(j,60,110,70),v.strokeStyle="#f4efe2",v.lineWidth=8,v.strokeRect(j,60,110,70),v.beginPath(),v.moveTo(j+55,60),v.lineTo(j+55,130),v.stroke()};$(70),$(460),v.fillStyle="#e8e2d4",v.fillRect(0,D-26,P,26)});le.front.forEach(v=>v.traverse(P=>{if(P.isMesh&&Array.isArray(P.material)&&P.material[4]&&P.material[4].map){let D=P.material[4].map.offset.x,$=P.material[4].map.repeat.x,j=b.clone();j.needsUpdate=!0,j.offset.set(D,0),j.repeat.set($,1),P.material[4]=new Je({map:j})}})),xt.map=null,xt.color.set(x),xt.needsUpdate=!0,re.children.slice().forEach(v=>{v!==re.children[0]&&v!==re.children[1]&&v!==re.children[2]&&(v.visible=!1)}),Vt.forEach(v=>{v.visible=!1}),Ut.traverse(v=>{v.isMesh&&v.material&&v.material.map&&(v.material.map=null,v.material.color.set(h.roofC||"#d8452f"),v.material.needsUpdate=!0)})}function hn(){yt=Ct.filter(h=>h.k==="sakura").map(h=>({x:h.g.position.x,z:h.g.position.z,y:2,r:.5}))}hn();for(let h=0;h<de;h++)Lt(h,1);let us=0;function Mn(){return o.it=Ct.map(h=>[h.k,h.x,h.z,h.r]),o}function vi(){s&&(Mn(),clearTimeout(us),us=setTimeout(()=>{try{n.save&&n.save(o)}catch{}},700),Xn())}let mr=[],Ps=1.5,Qn={};function Zs(h){return Qn[h]?Qn[h]:Qn[h]=ve(128,112,x=>{if(x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",h==="mind"||h==="zzz"){x.fillStyle=h==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([v,P,D])=>{x.beginPath(),x.arc(v,P,D,0,7),x.stroke()}),b.forEach(([v,P,D])=>{x.beginPath(),x.arc(v,P,D,0,7),x.fill()}),x.beginPath(),x.arc(44,90,7,0,7),x.fill(),x.stroke(),x.beginPath(),x.arc(30,104,4,0,7),x.fill(),x.stroke()}else x.fillStyle=h==="idea"?"#fff0a8":h==="msg"?"#ffe0ea":"#ffffff",Fr(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8);if(x.fillStyle="#2a1810",x.textAlign="center",x.textBaseline="middle",h==="idea")x.font=`900 44px ${jn}`,x.fillText("!",64,42);else if(h==="zzz")x.font=`900 30px ${jn}`,x.fillText("z z Z",64,42);else if(h==="msg")x.font=`900 40px ${jn}`,x.fillText("\u2709",64,42);else for(let b=0;b<3;b++)x.beginPath(),x.arc(40+b*24,42,6,0,7),x.fill()})}function Yi(h,x){return ve(512,112,P=>{P.textAlign="center",P.textBaseline="middle";let D=52;P.font=`900 ${D}px ${jn}`;let $=String(h||"").slice(0,16);for(;P.measureText($).width>432&&D>22;)D-=2,P.font=`900 ${D}px ${jn}`;let j=Math.min(500,P.measureText($).width+56);P.fillStyle=x==="me"?"#2a1810e6":x==="owner"?"#7a3a14e6":"#2a2a48e0",P.strokeStyle=x==="me"?"#ffd27a":x==="owner"?"#ffb36b":"#c8c0ff",P.lineWidth=6,Fr(P,(512-j)/2,14,j,84,84/2),P.fill(),P.stroke(),P.fillStyle="#fff3d6",P.fillText($,512/2,112/2+2)})}function Ls(h,x,b){b=b||{};let v=new ye;c.add(v);let P=new Ke(1,1);P.translate(0,.5,0);let D=new Je({transparent:!0,alphaTest:.04,color:b.tint||16051952}),$=new mt(P,D);v.add($);let j={grp:v,m:$,mat:D,h0:x,h:x*Ps,ar:.8,w:x*Ps*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};d(h,It=>{D.map=It,D.needsUpdate=!0,j.ar=It.image.width/It.image.height,j.w=j.h*j.ar});let tt=new mt(new si(.5,16),new Je({map:N,transparent:!0,depthWrite:!1,opacity:.8}));if(tt.rotation.x=-Math.PI/2,c.add(tt),j.sh=tt,b.name){let It=new gi(new ai({map:Yi(b.name,b.nk),transparent:!0,depthTest:!1}));It.renderOrder=30,It.scale.set(2,.44,1),c.add(It),j.tag=It,j.name=b.name}if(b.bubble){let It=new gi(new ai({map:Zs(b.bubble),transparent:!0,depthWrite:!1}));It.scale.set(.8,.7,1),c.add(It),j.bub=It,j.kind=b.bubble}return mr.push(j),j}let se=Ls(i.me.src,1.5,{me:1,name:i.me.name||"\u6211",nk:"me"});se.x=Hi,se.z=wt+2.6,(s&&i.startInside!==!1||i.island)&&(se.x=Hi,se.z=wt-1.6);let fa=Cs,gr=Is,bi=Rf;function Js(h,x){if(h<fa||h>=gr||x<0||x>=bi||x<wt&&(h<0||h>=ge)||x>=wt&&ml.has(h+","+x)&&h===Lh&&x===wt+1)return!0;let b=Dt(h,x,"main");return!!(b&&De[b.k].solid)}let Wi=(h,x,b,v)=>Js(b,v)?!1:x===wt-1&&v===wt||x===wt&&v===wt-1?h>=Gi&&h<Vi&&b===h:!0;function xr(h,x,b,v){h=Math.floor(h),x=Math.floor(x);let P=(j,tt)=>(j-fa)*100+tt,D=new Map;D.set(P(h,x),null);let $=[[h,x]];for(;$.length;){let[j,tt]=$.shift();if(j===b&&tt===v){let It=[],Ve=P(j,tt),Se=j,he=tt;for(;Ve!==null;){It.push([Se+.5,he+.5]);let Ze=D.get(Ve);if(Ze===null)break;Se=Ze[0],he=Ze[1],Ve=P(Se,he)}return It.reverse()}for(let[It,Ve]of[[1,0],[-1,0],[0,1],[0,-1]]){let Se=j+It,he=tt+Ve,Ze=P(Se,he);D.has(Ze)||!Wi(j,tt,Se,he)||(D.set(Ze,[j,tt]),$.push([Se,he]))}}return null}let Wn=.28;function Zn(h,x,b){let v=h>=Gi+Wn&&h<=Vi-Wn;if(b<wt){if(x<wt&&(h<Wn||h>ge-Wn||x<Wn)||x>=wt-Wn&&!v)return!1}else if(x<wt+Wn&&!v||x<wt&&!v)return!1;if(h<Cs+.4||h>Is-.4||x>Rf-.4||x<wt&&(h<0||h>ge))return!1;for(let[P,D]of[[-Wn,-Wn],[Wn,-Wn],[-Wn,Wn],[Wn,Wn],[0,0]]){let $=Math.floor(h+P*.8),j=Math.floor(x+D*.8),tt=Dt($,j,"main");if(tt&&De[tt.k].solid||$===Lh&&j===wt+1&&Math.hypot(h-yi.x,x-yi.z)<.7)return!1}return!0}function ss(h){let x=[];if(h)for(let b=0;b<wt;b++)for(let v=0;v<ge;v++)Js(v,b)||x.push([v,b]);else for(let b=wt+1;b<wt+6;b++)for(let v=-6;v<ge+6;v++)Js(v,b)||x.push([v,b]);return x}let K=[],R=()=>Pf(pl(Mn())),H=ot(ao.filter(h=>i.walk&&i.walk[h.spr]&&h.spr!=="robot"));function ot(h){for(let x=h.length-1;x>0;x--){let b=Math.floor(Math.random()*(x+1));[h[x],h[b]]=[h[b],h[x]]}return h}let nt=r?0:hs(2+R(),2,7);H.slice(0,nt).forEach((h,x)=>{let b=Ls(i.walk[h.spr],h.h,{bubble:"chat"});b.d=h,b.sp=h.sp*.8,b.kind2="npc",b.state="out",b.t=x*2.2+Li(0,1.5),b.x=Cs+1,b.z=wt+4,b.hidden=!0,K.push(b)});function it(h){let x=Ls(i.me.src,1.5,{name:h.name,nk:"vis",bubble:"msg",tint:16771312});x.d={id:"v"+h.id,name:h.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},x.v=h,x.sp=1.3,x.kind2="vis",x.state="out",x.t=Li(1,6),x.x=Is-1,x.z=wt+4,x.hidden=!0,K.push(x)}let Bt=null,ne=null;if(r){let h=new ye;c.add(h);let x="#e8a050",b="#fff3e0",v=new mt(new _i(.2,14,10),te(x));v.scale.set(1.5,.8,.9),v.position.y=.2,h.add(v);let P=new mt(new _i(.14,14,10),te(x));P.position.set(.3,.34,0),h.add(P);let D=new mt(new _i(.07,10,8),te(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),h.add(D);for(let It of[-.07,.07]){let Ve=new mt(new xi(.05,.1,4),te(x));Ve.position.set(.3,.5,It),h.add(Ve);let Se=new mt(new _i(.018,6,6),te("#1a1a1a"));Se.position.set(.43,.38,It*.7),h.add(Se)}let $=[];for(let[It,Ve]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let Se=new mt(new Ii(.04,.04,.16,6),te(x));Se.position.set(It,.08,Ve),h.add(Se),$.push(Se)}let j=new mt(new Ii(.03,.025,.4,6),te(x));j.position.set(-.38,.36,0),j.rotation.z=.8,h.add(j),h.traverse(It=>{It.isMesh&&(It.userData.pet=1)});let tt=Ct.find(It=>It.k==="catbed");ne={g:h,legs:$,tail:j,x:tt?tt.g.position.x:2.5,z:tt?tt.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!tt}}if(!s){let h=Ct.find(v=>v.k==="register"),x=Hi,b=2;if(h){let v=[[h.x,h.z-1],[h.x+1,h.z],[h.x-1,h.z],[h.x,h.z+1]].find(([P,D])=>gt(P,D)&&!Js(P,D));v&&(x=v[0]+.5,b=v[1]+.5)}Bt=Ls(i.owner&&i.owner.src||i.me.src,1.5,{name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),Bt.x=x,Bt.z=b,Bt.kind2="owner",Bt.state="sleep",Bt.d={name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),role:o.name},K.push(Bt)}function qt(h){let x=h.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];Ct.forEach($=>{$.k==="register"&&b.push(...G($))}),b.push([7,wt+1]);let v=ss(x).filter(([$,j])=>!b.some(tt=>Math.abs(tt[0]-$)<=1&&Math.abs(tt[1]-j)<=1)&&!mr.some(tt=>tt!==h&&!tt.hidden&&Math.floor(tt.x)===$&&Math.floor(tt.z)===j));if(!v.length)return null;let P=v.filter(([$,j])=>Ct.some(tt=>De[tt.k].L!=="rug"&&G(tt).some(It=>Math.abs(It[0]-$)+Math.abs(It[1]-j)===1))),D=P.length&&Math.random()<.75?P:v;return D[Math.floor(Math.random()*D.length)]}function jt(h,x,b){let v=xr(h.x,h.z,x,b);return v&&v.length?(h.path=v,h.state="walk",!0):!1}let O={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:se.z<wt,cam:new k(se.x,1,se.z),low:{},pitch:.7,pitchT:.7},me=(h,x,b,v)=>{let P=document.createElement(h);return x&&(P.className=x),b!=null&&(P.innerHTML=b),(v||e).appendChild(P),P},Ge=[],Qt=h=>(Ge.push(h),h),ke=Qt(me("div","h3info")),Dn=Qt(me("div","h3hud")),pn=me("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),tn=Qt(me("div","h3hint")),gn=Qt(me("div","h3toast")),Zt=Qt(me("div","h3j","<i></i>")),Ln=Qt(me("div","h3card")),Be=Qt(me("div","h3bp")),Nn=Qt(me("div","h3sel")),kn=Qt(me("div","h3top")),un=Qt(me("div","h3pan")),Jn=Qt(me("button","h3door","\u{1F6AA} \u51FA\u9580"));Jn.type="button",Jn.dataset.h3="exit";function yn(h){gn.textContent=h,gn.classList.add("on"),clearTimeout(yn.t),yn.t=setTimeout(()=>gn.classList.remove("on"),2200)}function $e(){if(O.mode==="build"){Dn.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}Dn.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function Xn(){let h=pl(Mn()),x=Pf(h);if(r){ke.innerHTML=`<b>\u{1F3E0} ${Cn(i.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> \u6EAB\u99A8\u5EA6 ${h}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${Cn(i.owner&&i.owner.name||"")} \u7684\u5BB6`}</small>`;return}ke.innerHTML=`<b>\u{1F3EE} ${Cn(o.name)}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> ${Cn(Df[x][1])}<br><small>\u6EAB\u99A8\u5EA6 ${h}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${pr(Lf(h))}`:`\u30FB\u5E97\u9577 ${Cn(i.owner&&i.owner.name||"")}`}</small>`}$e(),Xn(),pn.style.display="none",setTimeout(()=>_r(),50),window.addEventListener("resize",()=>_r()),pn.querySelectorAll("button").forEach((h,x)=>{let b=x?-1:1;h.addEventListener("pointerdown",P=>{P.preventDefault(),O.camV=b;try{h.setPointerCapture(P.pointerId)}catch{}});let v=()=>{O.camV=0};h.addEventListener("pointerup",v),h.addEventListener("pointercancel",v),h.addEventListener("click",()=>{O.camV||(O.yawT+=b*.5)})});let ti=()=>t.getBoundingClientRect(),en=new sa,qn=new Nt,ui=new Fi(new k(0,1,0),0),Di=new k,Kn=(h,x)=>{let b=ti();return qn.set((h-b.left)/b.width*2-1,-((x-b.top)/b.height*2-1)),qn},fs=(h,x)=>{let b=ti();return{x:(h-b.left)*(t.clientWidth/b.width),y:(x-b.top)*(t.clientHeight/b.height)}},wi=h=>{let x=h.clone().project(u),b=ti();return{x:(x.x+1)/2*b.width+b.left,y:(1-x.y)/2*b.height+b.top,z:x.z}};function co(h,x){return en.setFromCamera(Kn(h,x),u),en.ray.intersectPlane(ui,Di)?Di.clone():null}function da(h,x){en.setFromCamera(Kn(h,x),u);let b=en.intersectObjects(zt.filter(v=>v.visible&&v.parent&&xl(v)),!1);return b.length?b[0].object.userData.e:null}function xl(h){let x=h;for(;x;){if(!x.visible)return!1;x=x.parent}return!0}function Dh(h,x){let b=null,v=1e9;for(let P of K){if(P.hidden)continue;let D=wi(new k(P.x,0,P.z)),$=wi(new k(P.x,P.h+.3,P.z)),j=D.y-$.y;if(j<6)continue;let tt=Math.max(j*.36,30),It=Math.abs(h-D.x);if(It<tt&&x>$.y-14&&x<D.y+12){let Ve=It+Math.abs(x-(D.y+$.y)/2)*.3;Ve<v&&(v=Ve,b=P)}}return b}function Nh(h,x){return en.setFromCamera(Kn(h,x),u),en.intersectObjects(_n,!1).length>0}let Ds=[],pa=[];function Uh(h,x){return en.setFromCamera(Kn(h,x),u),en.intersectObjects(pa,!1).length>0}let Ti=new Map,vn=null,ds=null,ps=null,Fh=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("pointerdown",h=>{O.pt=h.pointerType,h.preventDefault();try{t.setPointerCapture(h.pointerId)}catch{}let x=fs(h.clientX,h.clientY);if(h.pointerType==="touch"&&!ps&&O.mode==="walk"&&!un.classList.contains("on")){let b=ti();if(h.clientX-b.left<b.width*.45){ps={id:h.pointerId,sx:x.x,sy:x.y},O.tgt=null,Zt.style.display="block",Zt.style.opacity=1,Zt.style.left=x.x+"px",Zt.style.top=x.y+"px",Zt.firstChild.style.transform="";return}}if(Ti.set(h.pointerId,{x:h.clientX,y:h.clientY}),Ti.size===2){let[b,v]=[...Ti.values()];ds={d:Math.hypot(b.x-v.x,b.y-v.y),dist:O.distT,ang:Math.atan2(v.y-b.y,v.x-b.x),yaw:O.yawT},vn=null,Te();return}if(vn={id:h.pointerId,sx:x.x,sy:x.y,cx:h.clientX,cy:h.clientY,moved:0,btn:h.button,yaw0:O.yawT,pit0:O.pitchT},O.mode==="build"){let b=da(h.clientX,h.clientY);b&&b===O.sel&&!b.I.fixed2?vn.dragItem=b:b&&(vn.pickItem=b)}}),t.addEventListener("pointermove",h=>{if(ps&&h.pointerId===ps.id){let D=fs(h.clientX,h.clientY),$=D.x-ps.sx,j=D.y-ps.sy,tt=Math.hypot($,j),It=50,Ve=Math.min(1,tt/It)/Math.max(tt,1e-6);O.joy={x:$*Ve,y:j*Ve},Zt.firstChild.style.transform=`translate(${O.joy.x*It}px,${O.joy.y*It}px)`;return}if(Ti.has(h.pointerId)&&Ti.set(h.pointerId,{x:h.clientX,y:h.clientY}),ds&&Ti.size>=2){let[D,$]=[...Ti.values()],j=Math.hypot(D.x-$.x,D.y-$.y);O.distT=hs(ds.dist*ds.d/Math.max(20,j),6,20),O.yawT=ds.yaw-(Math.atan2($.y-D.y,$.x-D.x)-ds.ang);return}if(!vn||vn.id!==h.pointerId)return;let x=fs(h.clientX,h.clientY),b=x.x-vn.sx,v=x.y-vn.sy,P=Math.hypot(b,v);if(!vn.moved&&P>10&&(vn.moved=1,vn.pickItem&&O.mode==="build"&&(Ye(vn.pickItem),vn.dragItem=vn.pickItem)),!!vn.moved){if(vn.btn===2||O.mode==="walk"||O.mode==="build"&&!vn.dragItem){O.yawT=vn.yaw0-b*.008,O.pitchT=hs(vn.pit0+v*.005,.3,1.25);return}if(O.mode==="build"&&vn.dragItem){rt(vn.dragItem,h.clientX,h.clientY);return}if(O.mode==="walk"){let $=Math.min(1,P/55)/Math.max(P,1e-6);O.joy={x:b*$,y:v*$},O.tgt=null,Zt.style.display="block",Zt.style.left=vn.sx+"px",Zt.style.top=vn.sy+"px",Zt.firstChild.style.transform=`translate(${O.joy.x*55}px,${O.joy.y*55}px)`}}});let _r=()=>{O.dead||(Fh&&O.mode==="walk"?(Zt.style.display="block",Zt.style.opacity=.55,Zt.style.left="110px",Zt.style.top=t.clientHeight-110+"px",Zt.firstChild.style.transform=""):Zt.style.display="none")},Gr=h=>{if(ps&&h.pointerId===ps.id){ps=null,O.joy=null,_r();return}Ti.delete(h.pointerId),Ti.size<2&&(ds=null),!(!vn||vn.id!==h.pointerId)&&(vn.moved||rs(h.clientX,h.clientY,vn),vn.dragItem&&Te(),vn=null)};t.addEventListener("pointerup",Gr),t.addEventListener("pointercancel",Gr),t.addEventListener("wheel",h=>{h.preventDefault(),O.distT=hs(O.distT+Math.sign(h.deltaY)*1.2,6,20)},{passive:!1});let Vr=h=>{if(!document.contains(t)||/input|textarea/i.test(h.target&&h.target.tagName||""))return;let x=h.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(x)){if(x==="r"&&O.sel){ln(),h.preventDefault();return}O.keys[x]=1,/^(arrow|w|a|s|d)/.test(x)&&(O.tgt=null),h.preventDefault()}},ho=h=>{delete O.keys[h.key.toLowerCase()]};document.addEventListener("keydown",Vr),document.addEventListener("keyup",ho);function rs(h,x){if(un.classList.contains("on"))return;if(O.mode==="build"){let D=da(h,x);Ye(D||null);return}let b=Dh(h,x);if(b){ga(b);return}if(ne){en.setFromCamera(Kn(h,x),u);let D=[];if(ne.g.traverse($=>{$.isMesh&&D.push($)}),en.intersectObjects(D,!1).length){yn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),ne.t=2,ne.path=null;return}}if(pa.length&&Uh(h,x)){Ks(yi.x-1,yi.z+.9,yl);return}if(Nh(h,x)){Ks(yi.x,yi.z+1,Ei);return}let v=da(h,x);if(v&&De[v.k].L==="top"){let D=G(v).map($=>Wt($[0],$[1])).find(Boolean);D&&D.k==="register"&&(v=D)}if(v&&v.k==="register"){Ks(v.g.position.x,v.g.position.z+1.2,()=>uo(v));return}if(v&&De[v.k].L!=="rug"){let D=v.g.position;fi(),$i(v),O.tgt=ma(D.x,D.z);return}if(fi(),O.pt==="touch"&&O.mode==="walk")return;let P=co(h,x);P&&(O.tgt={x:P.x,z:P.z})}function ma(h,x){let b=null,v=1e9;for(let[P,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let $=h+P,j=x+D;if(Zn($,j,j<wt?0:wt+1)){let tt=Math.hypot($-se.x,j-se.z);tt<v&&(v=tt,b={x:$,z:j})}}return b}function Ks(h,x,b){fi();let v=ma(h,x-1)||{x:h,z:x};O.tgt={x:v.x,z:v.z,fn:b},Math.hypot(se.x-v.x,se.z-v.z)<1.6&&(O.tgt=null,b())}function ga(h){fi(!0),O.talk=h,h.kind2==="npc"&&(h.state="talk",h.t=0);let x=Cn(h.d.name),b=Cn(h.d.role||""),v="",P=ha.chat,D="";if(h.kind2==="owner")P={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},v=r?`<p class="h3t mind">\uFF08${Cn(i.owner&&i.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${Cn(i.owner&&i.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,v+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(h.kind2==="vis")P={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},v=`<p class="h3t">\u300C${Cn(h.v.msg||"\u2026\u2026")}\u300D</p>${h.v.gift&&De[h.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${Cn(De[h.v.gift].n)}\u300D</p>`:""}`;else{let It=Hr(h);P=ha[It.kind]||ha.chat,v=`<p class="h3t${It.kind==="mind"?" mind":""}">${It.kind==="mind"?"\uFF08"+Cn(It.text)+"\uFF09":"\u300C"+Cn(It.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let $=h.kind2==="npc"?i.walk[h.d.spr]:h.kind2==="owner"&&i.owner&&i.owner.src||i.me.src;Ln.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${$}')"></div><div class="h3nm"><b>${x}</b><small>${b}</small></div><span class="h3k" style="background:${P.c}">${P.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${v}<div class="h3bt">${D}</div>`;let j=ti(),tt=wi(new k(h.x,h.h*.5,h.z));Ln.classList.toggle("r",tt.x-j.left<j.width/2),Ln.classList.add("on"),h.bub&&(h.bub.visible=!1)}function Hr(h){let x=Ct.filter(b=>Af[b.k]&&Math.hypot(b.g.position.x-h.x,b.g.position.z-h.z)<3.2);if(x.length&&Math.random()<.5){let b=x[Math.floor(Math.random()*x.length)];return{kind:"chat",text:Af[b.k]}}return(!h.deck||!h.deck.length)&&(h.deck=ot(h.d.lines.map(b=>({kind:b[0],text:b[1]})))),h.deck.pop()}function $i(h){let x=De[h.k];O.talk=null,Ln.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${x.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${Cn(x.n)}</b><small>\u6EAB\u99A8\u5EA6 +${x.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${Cn(Af[h.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,Ln.classList.remove("r"),Ln.classList.add("on")}function fi(h){Ln.classList.remove("on");let x=O.talk;O.talk=null,x&&x.kind2==="npc"&&x.state==="talk"&&(x.state="idle",x.t=Li(1,2.5))}function yr(){if(!s||r)return 0;let h=n.today?n.today():Math.floor(Date.now()/864e5);return(o.cl?hs(h-o.cl,0,3):1)*Lf(pl(Mn()))}function uo(h){if(!s){yn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let x=yr();if(x<=0){yn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=n.collect?n.collect(x):!1}catch{}if(!b){yn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}o.cl=n.today?n.today():Math.floor(Date.now()/864e5),vi(),_l(h),yn(`\u6536\u5230 ${pr(x)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let Zi=new gi(new ai({map:ve(128,128,h=>{h.fillStyle="#f2c230",h.strokeStyle="#8a5a10",h.lineWidth=8,h.beginPath(),h.arc(64,64,52,0,7),h.fill(),h.stroke(),h.fillStyle="#8a5a10",h.font=`900 64px ${jn}`,h.textAlign="center",h.textBaseline="middle",h.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));Zi.renderOrder=25,Zi.scale.set(.55,.55,1),c.add(Zi);let xa=[];function _l(h){for(let x=0;x<8;x++){let b=Zi.clone();b.material=Zi.material.clone(),b.position.copy(h.g.position).add(new k(0,1.4,0)),b.userData.v=new k(Li(-1.2,1.2),Li(2.5,4),Li(-1.2,1.2)),b.userData.t=0,c.add(b),xa.push(b)}}function m(h){if(O.mode=h,Ye(null),fi(),O.tgt=null,$e(),setTimeout(_r,0),Be.classList.toggle("on",h==="build"),kn.classList.toggle("on",h==="build"),h!=="build"&&(pn.style.bottom=""),ke.style.display=h==="build"?"none":"",h==="build")kn.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",St(),O.distT=13.5;else{if(O.distT=O.inside?10.5:13,!Zn(se.x,se.z,se.z)){let x=ss(se.z<wt).sort((b,v)=>Math.hypot(b[0]+.5-se.x,b[1]+.5-se.z)-Math.hypot(v[0]+.5-se.x,v[1]+.5-se.z)).find(b=>Zn(b[0]+.5,b[1]+.5,b[1]));x&&(se.x=x[0]+.5,se.z=x[1]+.5)}vi()}}let w=r?"liv":"tbl",C={},B=null,Z=null,ht=null;function bt(h){if(C[h])return C[h];try{if(!B){B=new Bi(128,128),Z=new Tr,Z.add(new Ir(16774368,8413264,2.2));let he=new Pr(16777215,1.4);he.position.set(2,4,3),Z.add(he),ht=new ri(30,1,.05,50)}let x=Sf(h);Z.add(x);let b=De[h],v=new Gs().setFromObject(x),P=v.getCenter(new k),D=v.getSize(new k),j=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;ht.position.set(P.x+j*.55,P.y+j*.45,P.z+j*.7),ht.lookAt(P),b.L==="wall"&&(ht.position.set(P.x+j*.25,P.y+j*.1,P.z+j*.96),ht.lookAt(P)),l.setRenderTarget(B),l.setClearColor(0,0),l.clear(),l.render(Z,ht),l.setRenderTarget(null),l.setClearColor(1709366,1);let tt=new Uint8Array(16384*4);l.readRenderTargetPixels(B,0,0,128,128,tt);let It=document.createElement("canvas");It.width=It.height=128;let Ve=It.getContext("2d"),Se=Ve.createImageData(128,128);for(let he=0;he<128;he++)Se.data.set(tt.subarray((127-he)*512,(128-he)*512),he*512);for(let he=0;he<Se.data.length;he+=4)Se.data[he]=Ef[Se.data[he]],Se.data[he+1]=Ef[Se.data[he+1]],Se.data[he+2]=Ef[Se.data[he+2]];return Ve.putImageData(Se,0,0),Z.remove(x),x.traverse(he=>{he.geometry&&he.geometry.dispose()}),C[h]=It.toDataURL()}catch{return C[h]=""}}function St(){let h=n.coins?n.coins():0,x=(r?tm:Qp).map(([j,tt])=>`<button class="h3tab ${w===j?"on":""}" type="button" data-h3="cat" data-k="${j}">${tt}</button>`).join("")+`<button class="h3tab ${w==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${pr(h)}</span>`,b="";if(w==="reno"){let j=o.sz|0,tt=gl[j+1];b=(s?`<button class="h3it ${tt&&h<tt[2]?"no":""}" type="button" data-h3="expand" ${tt?"":"disabled"}><span class="ph" style="display:flex;align-items:center;justify-content:center;font-size:34px">\u{1F4D0}</span>${tt?`\u64F4\u5EFA\u5230 ${tt[0]}\xD7${tt[1]}<span class="pr">${pr(tt[2])}</span>`:`\u5DF2\u7D93\u6700\u5927<span class="pr">${ge}\xD7${wt}</span>`}</button>`:"")+bf.map(([It,Ve,Se])=>{let he=o.fo[It],Ze=o.fl===It;return`<button class="h3it ${Ze?"cur":""}" type="button" data-h3="floor" data-k="${It}"><span class="ph" style="background:url(${Tt("f",It)}) center/cover"></span>${Cn(Ve)}${Ze?'<span class="pr">\u4F7F\u7528\u4E2D</span>':he?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${pr(Se)}</span>`}</button>`}).join("")+Mf.map(([It,Ve,Se])=>{let he=o.wo[It],Ze=o.wa===It;return`<button class="h3it ${Ze?"cur":""}" type="button" data-h3="wall" data-k="${It}"><span class="ph" style="background:url(${Tt("w",It)}) center/cover"></span>${Cn(Ve)}${Ze?'<span class="pr">\u4F7F\u7528\u4E2D</span>':he?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${pr(Se)}</span>`}</button>`}).join("")}else b=hl.filter(j=>(r?j.hc===w:j.cat===w)&&!j.fixed).map(j=>{let tt=o.inv[j.k]||0,It=bt(j.k);return`<button class="h3it ${!tt&&h<j.p?"no":""}" type="button" data-h3="item" data-k="${j.k}">${tt?`<span class="ow">\xD7${tt}</span>`:""}${It?`<img src="${It}" alt="">`:'<span class="ph"></span>'}${Cn(j.n)}<span class="pr">${tt?"\u62FF\u51FA\u4F86\u64FA":pr(j.p)}</span></button>`}).join("");let v=Be.querySelector(".h3row"),P=v?v.scrollLeft:0,D=Be.dataset.cat===w;Be.innerHTML=`<div class="h3tabs">${x}</div><div class="h3row">${b}</div>`,Be.dataset.cat=w,D&&(Be.querySelector(".h3row").scrollLeft=P);let $=Be.offsetHeight||150;pn.style.bottom=$+8+"px",Nn.style.bottom=$+8+"px"}let Ft={};function Tt(h,x){let b=h+x;if(Ft[b])return Ft[b];let v;return h==="f"?v=(z[x]||z.wood)().image:v=W(x,2).image,Ft[b]=v.toDataURL()}function Ye(h){if(O.sel&&O.sel!==h&&(O.sel.ok||An(O.sel)),O.sel=h,Rn.visible=!!h,Nn.classList.toggle("on",!!h),h){h.last={x:h.x,z:h.z,r:h.r},h.ok=!0;let x=De[h.k];Nn.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${x.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${x.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,At()}}function An(h){if(!h.last)return;let x=h.last.x-h.x,b=h.last.z-h.z,v=De[h.k].sf?zn(h):[];h.x=h.last.x,h.z=h.last.z,h.r=h.last.r,Yt(h),v.forEach(P=>{P.x+=x,P.z+=b,Yt(P)}),h.ok=!0,At()}let ms=ve(64,64,h=>{h.strokeStyle="#fff",h.lineWidth=6,h.strokeRect(3,3,58,58)}),Rn=new mt(new Ke(1,1),new Je({map:ms,transparent:!0,depthWrite:!1,color:"#6aff8a"}));Rn.rotation.x=-Math.PI/2,Rn.visible=!1,Rn.renderOrder=5,c.add(Rn);let gs=new mt(new Ke(1,1),new Je({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));gs.rotation.x=-Math.PI/2,Rn.add(gs),gs.rotation.x=0,gs.position.z=-.001;function At(){let h=O.sel;if(!h)return;let x=De[h.k],b=ue(h,h);h.ok=b;let v=b?"#6aff8a":"#ff5a4a";if(Rn.material.color.set(v),gs.material.color.set(v),x.L==="wall"){let[D,,$]=Et(h),j=ft(h.r);Rn.scale.set(x.w,.6,1),Rn.position.set(D+(j==="left"?.35:j==="right"?-.35:0),.03,$+(j==="back"?.35:j==="front"?-.35:0)),Rn.rotation.z=j==="left"||j==="right"?Math.PI/2:0}else{let[D,$]=Gt(x,h.r),[j,tt,It]=Et(h);Rn.scale.set(D,$,1),Rn.rotation.z=0,Rn.position.set(j,tt+.03,It)}let P=Nn.querySelector('[data-h3="ok"]');P&&(P.disabled=!b)}function rt(h,x,b){let v=co(x,b);if(!v)return;let P=De[h.k],D=h.x,$=h.z;if(P.L==="wall"){let j=[[v.z,0],[v.x,1],[ge-v.x,3],[wt-v.z,2]].filter(tt=>!O.low[ft(tt[1])]).sort((tt,It)=>tt[0]-It[0]);if(!j.length)return;h.r=j[0][1],h.r===0||h.r===2?(h.x=hs(Math.round(v.x-P.w/2),0,ge-P.w),h.z=h.r===0?0:wt-1):(h.z=hs(Math.round(v.z-P.w/2),0,wt-P.w),h.x=h.r===1?0:ge-1)}else{let[j,tt]=Gt(P,h.r);h.x=Math.round(v.x-j/2),h.z=Math.round(v.z-tt/2)}(h.x!==D||h.z!==$||P.L==="wall")&&(P.sf&&Jt(h,D,$),Yt(h),At())}function Jt(h,x,b){let v={x,z:b,r:h.r,k:h.k},P=G(v);Ct.filter(D=>De[D.k].L==="top"&&G(D).some($=>P.some(j=>j[0]===$[0]&&j[1]===$[1]))).forEach(D=>{D.x+=h.x-x,D.z+=h.z-b,Yt(D)})}function Te(){O.sel&&(At(),Ct.filter(h=>De[h.k].L==="top").forEach(Yt))}function ln(){let h=O.sel;if(!h||De[h.k].L==="wall")return;let x=De[h.k].sf?zn(h):[];x.length&&(x.forEach(b=>{on(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),yn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),h.r=(h.r+1)%4,Yt(h),At()}function Un(){let h=O.sel;if(!h||De[h.k].fixed)return;(De[h.k].sf?zn(h):[]).forEach(b=>{on(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),O.sel=null,on(h),o.inv[h.k]=(o.inv[h.k]||0)+1,Rn.visible=!1,Nn.classList.remove("on"),hn(),vi(),St()}function rn(){let h=O.sel;if(h){if(!ue(h,h)){yn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}h.last=null,O.sel=null,Rn.visible=!1,Nn.classList.remove("on"),hn(),vi()}}function Sn(h){let x=De[h],b={k:h,x:0,z:0,r:0},v=O.cam.x,P=O.cam.z,D=null,$=1e9;if(x.L==="wall")for(let j of[0,1,3,2].filter(tt=>!O.low[ft(tt)]))for(let tt=0;tt<10;tt++){let It={k:h,r:j,x:j===0||j===2?tt:j===1?0:ge-1,z:j===1||j===3?tt:j===0?0:wt-1};if(Xt(It)){let[Ve,,Se]=Et(It),he=Math.hypot(Ve-v,Se-P);he<$&&($=he,D=It)}}else for(let j=0;j<Ph;j++)for(let tt=Cf;tt<If;tt++){let It={k:h,x:tt,z:j,r:0};if(!ue(It))continue;let[Ve,,Se]=Et(It),he=gt(tt,j),Ze=Math.hypot(Ve-v,Se-P)+(he===O.inside?0:6)+(x.L==="top"&&!Wt(tt,j)?1.5:0);Ze<$&&($=Ze,D=It)}D?Object.assign(b,D):(b.x=1,b.z=1),we(b,!0),o.inv[h]--,o.inv[h]||delete o.inv[h],Ye(b),D||At(),hn(),vi(),St()}function an(h,x,b,v,P){let D=n.coins?n.coins():0;un.innerHTML=`<h3>\u8CB7\u4E0B\u300C${Cn(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${pr(v)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${pr(D)}</b></p>${D<v?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<v?"disabled":""}>\u8CB7\u4E0B</button></div>`,un.classList.add("on"),un._buy=()=>{let $=!1;try{$=n.buy?n.buy(v,b):!1}catch{}if(!$){yn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}un.classList.remove("on"),P()}}let Qe=null,Fn=!1;function Yn(h){return Qe&&!h?Promise.resolve(Qe):n.msgs?Promise.resolve(n.msgs()).then(x=>(Qe=(x||[]).slice().sort((b,v)=>(v.t||0)-(b.t||0)),Fn=!1,Qe),()=>(Fn=!0,Qe=[],Qe)):(Qe=[],Promise.resolve(Qe))}let ei="";function Ei(){fi(),un.innerHTML=`<h3>\u{1F4DC} ${Cn(o.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,un.classList.add("on"),Yn(!0).then(h=>{if(!un.classList.contains("on"))return;let x=h.slice(0,30).map(v=>`<div class="msg"><b>${Cn(v.name||"\u73A9\u5BB6")}</b><small>${v.t?new Date(v.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${v.gift&&De[v.gift]?` <small>\u{1F381} ${Cn(De[v.gift].n)}</small>`:""}<br>${Cn(v.msg||"")}</div>`).join("")||`<p style="opacity:.7">${Fn?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let v=r?0:h.filter(P=>P.gift&&De[P.gift]&&!o.gc[P.id]).length;b=`<div class="h3bt">${v?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${v} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let v=n.giftSent?n.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${i.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${v?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...A1].map(P=>`<button type="button" data-h3="gpick" data-k="${P}" class="${ei===P?"on":""}">${P?Cn(De[P].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}un.innerHTML=`<h3>\u{1F4DC} ${Cn(o.name)} \u7684\u7559\u8A00\u677F</h3>${x}${b}`})}function _a(){if(i.demo){yn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),un.classList.remove("on");return}let h=un.querySelector("#h3msg"),x=(h&&h.value||"").trim().slice(0,60);if(x.length<1){yn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=n.giftSent&&n.giftSent()?"":ei,v=un.querySelector('[data-h3="post"]');v&&(v.disabled=!0),Promise.resolve(n.post?n.post({msg:x,gift:b}):null).then(()=>{yn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),ei="",Qe=null,un.classList.remove("on")},()=>{yn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),v&&(v.disabled=!1)})}function Wr(){if(Ds.forEach(x=>c.remove(x)),Ds.length=0,pa.length=0,!s||!Qe)return;let h=Qe.filter(x=>x.gift&&De[x.gift]&&!o.gc[x.id]);h.slice(0,5).forEach((x,b)=>{let v=new ye;v.position.set(yi.x-1.1-b%3*.55,0,yi.z+.4+Math.floor(b/3)*.5),c.add(v);let P=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=A(.42,.36,.42,te(P),0,.18,0,v);A(.44,.38,.08,te("#fff3d6"),0,.18,0,v),A(.08,.38,.44,te("#fff3d6"),0,.18,0,v);let $=A(.46,.08,.46,te(P),0,.4,0,v),j=new mt(new _i(.08,10,8),te("#fff3d6"));j.position.y=.48,j.scale.set(1.6,.8,1),v.add(j),v.traverse(tt=>{tt.isMesh&&pa.push(tt)}),Ds.push(v),v.userData.ph=b}),h.length&&yn(i.island?`\u6709 ${h.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${h.length} \u4EFD\u79AE\u7269\uFF01`)}function yl(){if(!s||!Qe)return;let h=Qe.filter(x=>x.gift&&De[x.gift]&&!o.gc[x.id]);h.length&&(h.forEach(x=>{o.inv[x.gift]=(o.inv[x.gift]||0)+1,o.gc[x.id]=1}),vi(),Wr(),un.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${h.map(x=>`<div class="msg"><b>${Cn(x.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${Cn(De[x.gift].n)}\u300D<br>${Cn(x.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,un.classList.add("on"))}function am(){fi(),un.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${Cn(o.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,un.classList.add("on")}let Nf=h=>{let x=h.target.closest("[data-h3]");if(!x||!e.contains(x)||x.disabled)return;let b=x.dataset.h3,v=x.dataset.k;if(b==="close")fi();else if(b==="more"&&O.talk)ga(O.talk);else if(b==="build")m("build");else if(b==="done")m("walk");else if(b==="rename")am();else if(b==="nameok"){let P=(un.querySelector("#h3name").value||"").trim().slice(0,12);P&&(o.name=P,Rt(),vi()),un.classList.remove("on")}else if(b==="board"){if(O.mode!=="walk")return;i.island?Ei():Ks(yi.x,yi.z+1,Ei)}else if(b==="claim")yl();else if(b==="exit"){if(i.island){O.exited=!0;try{n.exit&&n.exit()}catch{}}}else if(b==="pclose")un.classList.remove("on");else if(b==="post")_a();else if(b==="gpick")ei=v||"",un.querySelectorAll('[data-h3="gpick"]').forEach(P=>P.classList.toggle("on",(P.dataset.k||"")===ei));else if(b==="buyok"&&un._buy)un._buy();else if(b==="cat")w=v,St();else if(b==="item"){let P=De[v];O.sel&&!O.sel.ok&&An(O.sel),Ye(null),o.inv[v]?Sn(v):an("item",v,P.n,P.p,()=>{o.inv[v]=(o.inv[v]||0)+1,Sn(v)})}else if(b==="floor"){let P=bf.find($=>$[0]===v),D=()=>{o.fo[v]=1,o.fl=v,Pt(v),vi(),St()};o.fo[v]?D():an("floor",v,P[1],P[2],D)}else if(b==="wall"){let P=Mf.find($=>$[0]===v),D=()=>{o.wo[v]=1,o.wa=v,Kt(v),vi(),St()};o.wo[v]?D():an("wall",v,P[1],P[2],D)}else if(b==="expand"){let P=o.sz|0,D=gl[P+1];if(!D)return;an("expand","x",`\u64F4\u5EFA\u5230 ${D[0]}\xD7${D[1]} \u683C\uFF08\u73FE\u5728 ${ge}\xD7${wt}\uFF09`,D[2],()=>{o.sz=P+1,Mn();try{n.save&&n.save(o,!0)}catch{}yn("\u64F4\u5EFA\u5B8C\u6210\uFF01"),n.reload&&setTimeout(()=>n.reload(),400)})}else b==="rot"?ln():b==="store"?Un():b==="ok"&&rn()};e.addEventListener("click",Nf),Yn().then(h=>{if(!O.dead&&s&&!r){Wr();let x={};h.filter(b=>b.name&&!x[b.from||b.name]&&(x[b.from||b.name]=1)).slice(0,3).forEach(it)}});let om={get dead(){return O.dead},set dead(h){h&&Oh()},cv:t,dispose:Oh,data:()=>JSON.parse(JSON.stringify(Mn())),probe(){let h=x=>{let b=wi(x);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:O.mode,inside:O.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+se.x.toFixed(2),z:+se.z.toFixed(2)},yaw:+O.yaw.toFixed(2),sel:O.sel?{k:O.sel.k,x:O.sel.x,z:O.sel.z,r:O.sel.r,ok:O.sel.ok}:null,items:Ct.map(x=>Object.assign({k:x.k,x:x.x,z:x.z,r:x.r},h(new k(x.g.position.x,x.g.position.y+.4,x.g.position.z)))),npcs:K.filter(x=>!x.hidden).map(x=>Object.assign({id:x.d.id||x.kind2,kind:x.kind2,state:x.state},h(new k(x.x,x.h*.5,x.z)))),board:h(new k(yi.x,1.15,yi.z)),gifts:Ds.length,card:Ln.classList.contains("on")?Ln.textContent:"",pan:un.classList.contains("on")?un.textContent:"",cozy:pl(Mn()),inv:Object.assign({},o.inv),name:o.name,fl:o.fl,wa:o.wa,tag:se.tag?se.tag.visible:!1,cellPx:(x,b)=>h(new k(x,0,b))}},px(h,x,b){let v=wi(new k(h,x,b));return{x:Math.round(v.x),y:Math.round(v.y)}},teleport(h,x){se.x=h,se.z=x,O.inside=x<wt},setYaw(h){O.yaw=O.yawT=h},setDist(h){O.dist=O.distT=h}};function Oh(){if(!O.dead){if(O.dead=!0,cancelAnimationFrame(O.raf),clearTimeout(us),s)try{Mn(),n.save&&n.save(o,!0)}catch{}document.removeEventListener("keydown",Vr),document.removeEventListener("keyup",ho),e.removeEventListener("click",Nf),Ge.forEach(h=>h.remove()),c.traverse(h=>{h.geometry&&h.geometry.dispose(),(h.material?Array.isArray(h.material)?h.material:[h.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),B&&B.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let vl=0,bl=0,Uf=0,Ji=1,Ml=0,Bh=0,Ff=9,Sl=.9,fo=new k,xs=new k,js=new k;function lm(h){return Math.round(hs(1.75-(h-380)/440*.6,1.15,1.75)*20)/20}function cm(){let h=t.getBoundingClientRect(),x=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),v=Math.min(2,window.devicePixelRatio||1),P=lm(h.height||b);P!==Ps&&(Ps=P,mr.forEach(D=>{D.h=D.h0*Ps,D.w=D.h*D.ar})),!(x===vl&&b===bl&&v===Uf)&&(vl=x,bl=b,Uf=v,Ji=hs(h.width*v/x,.5,2.2),Ji=Math.min(Ji,Math.sqrt(2e6/(x*b))),Sl=Math.max(Math.min(Ji,.9),Ji*.8),Ji=Math.max(Sl,Math.min(Ji,Ff)),l.setPixelRatio(Ji),l.setSize(x,b,!1),u.aspect=x/b,u.updateProjectionMatrix())}function Of(h,x){if(!h.path||!h.path.length)return!0;let[b,v]=h.path[0],P=b-h.x,D=v-h.z,$=Math.hypot(P,D),j=h.sp;if($<.06)return h.path.shift(),!h.path.length;let tt=Math.min($,j*x);h.x+=P/$*tt,h.z+=D/$*tt,h.moving=!0,h.ph+=x*(4+j*3.2);let It=P*xs.x+D*xs.z;return Math.abs(It)>.05&&(h.face=It>0?1:-1),!1}function Bf(h){if(O.dead)return;if(!document.contains(t)){Oh();return}O.raf=requestAnimationFrame(Bf);let x=Math.min(.1,(h-O.last)/1e3);O.last=h,O.t+=x;let b=O.t;cm(),Ml+=x,Bh++,Ml>1.2&&(Ml/Bh>.028&&(l.shadowMap.enabled?(l.shadowMap.enabled=!1,c.traverse(fe=>{fe.material&&[].concat(fe.material).forEach(Ce=>Ce.needsUpdate=!0)})):Ji>Sl+.01&&(Ji=Math.max(Sl,Ji*.88),Ff=Ji,l.setPixelRatio(Ji),l.setSize(vl,bl,!1))),Ml=0,Bh=0);let v=O.keys;v.q&&(O.yawT+=x*1.8),v.e&&(O.yawT-=x*1.8),O.camV&&(O.yawT+=O.camV*x*1.8),O.yaw+=(O.yawT-O.yaw)*Math.min(1,x*8),O.pitch+=(O.pitchT-O.pitch)*Math.min(1,x*8),O.dist+=(O.distT-O.dist)*Math.min(1,x*5);let P=Math.sin(O.yaw),D=Math.cos(O.yaw);if(fo.set(-P,0,-D),xs.set(D,0,-P),se.moving=!1,O.mode==="walk"&&!un.classList.contains("on")){let J=0,fe=0,Ce=0,fn=1e9;if(O.joy)J=xs.x*O.joy.x+fo.x*-O.joy.y,fe=xs.z*O.joy.x+fo.z*-O.joy.y,Ce=Math.hypot(O.joy.x,O.joy.y);else{let wn=(v.arrowright||v.d?1:0)-(v.arrowleft||v.a?1:0),dn=(v.arrowup||v.w?1:0)-(v.arrowdown||v.s?1:0);if(wn||dn){let Tn=Math.hypot(wn,dn);J=(xs.x*wn+fo.x*dn)/Tn,fe=(xs.z*wn+fo.z*dn)/Tn,Ce=1}else if(O.tgt){if(!O.tgt.path){let On=xr(se.x,se.z,Math.floor(O.tgt.x),Math.floor(O.tgt.z));O.tgt.path=On?On.slice(1):[],On?O.tgt.path.length?O.tgt.path[O.tgt.path.length-1]=[O.tgt.x,O.tgt.z]:O.tgt.path=[[O.tgt.x,O.tgt.z]]:O.tgt.path=[[O.tgt.x,O.tgt.z]]}let Tn=O.tgt.path[0];if(Tn){let On=Tn[0]-se.x,Xi=Tn[1]-se.z,Ki=Math.hypot(On,Xi);if(Ki<.12){if(O.tgt.path.shift(),!O.tgt.path.length){let Ns=O.tgt.fn;O.tgt=null,Ns&&Ns()}}else J=On/Ki,fe=Xi/Ki,Ce=1,fn=Ki}else{let On=O.tgt.fn;O.tgt=null,On&&On()}}}if(Ce>.05){let wn=Math.hypot(J,fe)||1,dn=4*Math.min(1,Ce),Tn=Math.min(dn*x,fn),On=J/wn*Tn,Xi=fe/wn*Tn,Ki=!1;if(Zn(se.x+On,se.z+Xi,se.z)?(se.x+=On,se.z+=Xi,Ki=!0):Zn(se.x+On,se.z,se.z)?(se.x+=On,Ki=!0):Zn(se.x,se.z+Xi,se.z)&&(se.z+=Xi,Ki=!0),!Ki&&O.tgt&&(O.tgt.stuck=(O.tgt.stuck||0)+x,O.tgt.stuck>.6)){let Ns=O.tgt.fn;O.tgt=null,Ns&&Math.hypot(se.x-yi.x,se.z-yi.z)<3&&Ns()}if(Ki){se.moving=!0,se.ph+=x*9*Math.min(1,Ce);let Ns=J/wn*xs.x+fe/wn*xs.z;Math.abs(Ns)>.2&&(se.face=Ns>0?1:-1)}O.talk&&Math.hypot(O.talk.x-se.x,O.talk.z-se.z)>6&&fi()}}if(i.island&&!O.exited&&se.z>wt+.5&&O.mode==="walk"){O.exited=!0;try{n.exit&&n.exit()}catch{}return}if(a){let J=O.mode==="walk"&&!O.exited&&se.z>wt-2&&Math.abs(se.x-Hi)<2;if(Jn.classList.toggle("on",J),J){let fe=wi(new k(Hi,O.low&&O.low.front?.5:2.7,wt-.15)),Ce=ti();Jn.style.left=fe.x-Ce.left+"px",Jn.style.top=fe.y-Ce.top+"px"}}let $=O.inside;O.inside=se.z<wt-.05,$!==O.inside&&O.mode==="walk"&&(O.distT=O.inside?10.5:13,tn.textContent=O.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${o.name}\u300D`:"\u5E97\u5916",tn.classList.add("on"),clearTimeout(tn.t),tn.t=setTimeout(()=>tn.classList.remove("on"),1800));for(let J of K){if(J.moving=!1,J.kind2==="owner")continue;if(J.state==="talk"){J.face=(se.x-J.x)*xs.x+(se.z-J.z)*xs.z>0?1:-1;continue}if(J.state==="out"){if(J.t-=x,J.t<=0){let dn=Math.random()<.5;J.x=dn?Cs+4:Is-4,J.z=wt+Li(3.5,5.5),J.hidden=!1,J.alpha=0,J.stops=2+Math.floor(Math.random()*3);let Tn=qt(J);(!Tn||!jt(J,Tn[0],Tn[1]))&&(J.hidden=!0,J.t=3)}continue}if(J.alpha=Math.min(1,(J.alpha||0)+x*2),J.state==="walk")Of(J,x)&&(J.state="idle",J.t=Li(3,7));else if(J.state==="idle"){if(J.t-=x,J.t<=0)if(J.stops--,J.stops<=0){let dn=Math.random()<.5?Cs+1:Is-2;jt(J,dn,wt+4)?J.state="leave":J.t=2}else{let dn=qt(J);(!dn||!jt(J,dn[0],dn[1]))&&(J.t=2)}}else J.state==="leave"&&(Of(J,x)?(J.hidden=!0,J.state="out",J.t=Li(4,12)):(J.x<Cs+3||J.x>Is-3)&&(J.alpha=Math.max(0,Math.min(J.alpha,Math.min(J.x-Cs,Is-J.x)/3))));let fe=J.x-se.x,Ce=J.z-se.z,fn=Math.hypot(fe,Ce),wn=.55;if(fn<wn&&fn>.001&&J.state!=="walk"&&J.state!=="leave"){let dn=J.x+fe/fn*(wn-fn),Tn=J.z+Ce/fn*(wn-fn);Zn(dn,Tn,J.z)&&(J.x=dn,J.z=Tn)}}if(ne){let J=ne;J.t-=x;let fe=!1;if(J.path&&J.path.length){let[fn,wn]=J.path[0],dn=fn-J.x,Tn=wn-J.z,On=Math.hypot(dn,Tn);if(On<.05)J.path.shift();else{let Xi=Math.min(On,1.1*x);J.x+=dn/On*Xi,J.z+=Tn/On*Xi,J.g.rotation.y=Math.atan2(-Tn,dn),fe=!0}J.path.length||(J.t=Li(3,8))}else if(J.t<=0){let fn=ss(!0),wn=fn[Math.floor(Math.random()*fn.length)],dn=Ct.find(Xi=>Xi.k==="catbed"),Tn=dn&&Math.random()<.35?[dn.x,dn.z]:wn,On=Tn&&xr(J.x,J.z,Tn[0],Tn[1]);On&&On.length?(J.path=On,J.sleep=!1):J.t=3,dn&&Tn&&Tn[0]===dn.x&&Tn[1]===dn.z&&(J.sleep=!0)}J.ph+=x*(fe?12:0),J.legs.forEach((fn,wn)=>{fn.rotation.z=fe?Math.sin(J.ph+wn*Math.PI)*.5:0}),J.tail.rotation.z=.8+Math.sin(b*2)*.25;let Ce=!fe&&J.sleep&&Ct.some(fn=>fn.k==="catbed"&&Math.hypot(fn.g.position.x-J.x,fn.g.position.z-J.z)<.4);J.g.position.set(J.x,Ce?.1:0,J.z),J.g.scale.y=Ce?.75+Math.sin(b*1.5)*.03:1}let j=se.x,tt=se.z,It=1.1;O.mode==="build"&&(O.inside?(j=ge/2+P*2.2,tt=wt/2+D*2.2):(j=Hi+P*2,tt=wt+2.5+D*2),It=.4),O.cam.x+=(j-O.cam.x)*Math.min(1,x*(O.mode==="build"?4:12)),O.cam.z+=(tt-O.cam.z)*Math.min(1,x*(O.mode==="build"?4:12)),O.cam.y+=(It-O.cam.y)*Math.min(1,x*4);let Ve=vl/bl,Se=Ve<1.45?1.45/Ve:1,he=O.dist*Se*Math.max(ge/10,wt/8),Ze=O.mode==="build"?Math.max(.75,O.pitch):O.pitch;js.set(O.cam.x+P*Math.cos(Ze)*he,O.cam.y+Math.sin(Ze)*he,O.cam.z+D*Math.cos(Ze)*he),u.position.copy(js),u.lookAt(O.cam.x,O.cam.y+.5,O.cam.z),g.position.copy(js);let Gn=O.inside||O.mode==="build"&&O.inside;Ut.visible=!Gn;let Ni=O.low={back:Gn&&js.z<0,front:Gn&&js.z>wt,left:Gn&&js.x<0,right:Gn&&js.x>ge};for(let J in le){let fe=Ni[J];for(let Ce of le[J]){let fn=fe?.14:1;Ce.scale.y+=(fn-Ce.scale.y)*Math.min(1,x*10)}}for(let J of Ct)if(De[J.k].L==="wall"){let fe=ft(J.r);J.g.visible=!Ni[fe]||!Gn}re.visible=!Ni.front;for(let J of Xe)J.visible=!(Gn&&(Ni.left&&J.position.x<0||Ni.right&&J.position.x>ge));L.intensity=E.intensity=Gn?14:6;let zh=Math.atan2(js.x-O.cam.x,js.z-O.cam.z);for(let J of mr){let fe=!J.hidden,Ce=!Gn&&J.z<wt;if(J.grp.visible=fe,J.sh.visible=fe,J.tag&&(J.tag.visible=fe&&!Ce),J.bub&&(J.bub.visible=fe&&!Ce&&J!==O.talk&&J.state!=="leave"),!fe)continue;let fn=J.w,wn=J.h,dn=J.moving?1:0,Tn=Math.sin(J.ph),On=dn?Math.abs(Tn)*.06:0,Xi=dn?Tn*.06:Math.sin(b*1.6+J.ph)*.01,Ki=dn?1+Math.cos(J.ph*2)*.025:1+Math.sin(b*1.6+J.ph)*.008,Ns=J.state==="sleep"?Math.sin(b*1.2)*.015:0;J.grp.position.set(J.x,On,J.z),J.m.rotation.set(0,zh,Xi*J.face+Ns),J.m.scale.set(fn*J.face*(2-Ki),wn*Ki,1),J.mat.opacity=J.alpha==null?1:J.alpha,J.sh.position.set(J.x,.025,J.z),J.sh.scale.set(fn*.7,fn*.4,1),J.tag&&(J.tag.position.set(J.x,wn+.3,J.z),J.tag.material.opacity=J.alpha==null?1:J.alpha),J.bub&&J.bub.position.set(J.x,wn+(J.tag?.82:.45)+Math.sin(b*2.3+J.ph)*.06,J.z)}_e.rotation.x=Math.sin(b*1.7)*.05;for(let J of Vt)J.material.opacity=.45+.12*Math.sin(b*6);for(let J of sn)J.material.opacity=.5+.05*Math.sin(b*3+J.parent.position.x);for(let J of Ct){let fe=J.g.userData;if(fe.glows)for(let Ce of fe.glows)Ce.material.opacity=(Ce.userData.o0||(Ce.userData.o0=Ce.material.opacity))*(.85+.15*Math.sin(b*5+J.x*1.7));if(fe.swing&&(fe.swing.rotation.z=Math.sin(b*1.5+J.x)*.06),fe.wave&&(fe.wave.rotation.x=-.6+Math.sin(b*4)*.5),fe.fish&&fe.fish.forEach((Ce,fn)=>{let wn=b*(.6+fn*.2)+fn*2;Ce.position.x=Math.cos(wn)*.2,Ce.position.z=Math.sin(wn)*.12,Ce.rotation.y=-wn+Math.PI/2*(fn%2?1:-1)}),fe.spin&&(fe.spin.rotation.y=b*3),fe.hands){let Ce=new Date;fe.hands[0].rotation.z=-(Ce.getHours()%12+Ce.getMinutes()/60)/12*Math.PI*2,fe.hands[1].rotation.z=-Ce.getMinutes()/60*Math.PI*2,fe.hands.forEach(fn=>{let wn=fn.rotation.z,dn=fn.geometry.parameters.height/2;fn.position.x=-Math.sin(wn)*dn,fn.position.y=fe.handY+Math.cos(wn)*dn})}}for(let J of Ds)J.position.y=Math.abs(Math.sin(b*3+J.userData.ph))*.12;{let J=et.geometry.attributes.position.array;for(let fe=0;fe<de;fe++){let Ce=U[fe];J[fe*3]+=(Ce.vx+Math.sin(b*1.5+Ce.ph)*.3)*x,J[fe*3+1]+=Ce.vy*x,J[fe*3+2]+=Math.cos(b*1.2+Ce.ph)*.2*x,J[fe*3+1]<.02&&Lt(fe)}et.geometry.attributes.position.needsUpdate=!0}ze.children[1].rotation.z=Math.sin(b*.8)*.08,ze.children[4].rotation.y=Math.sin(b*2)*.4;{let J=s?Ct.find(Ce=>Ce.k==="register"):null,fe=J?yr():0;Zi.visible=!!(J&&fe>0&&O.mode==="walk"&&O.inside),Zi.visible&&(Zi.position.set(J.g.position.x,1.75+Math.sin(b*3)*.1,J.g.position.z),Zi.material.rotation=0,Zi.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let J=xa.length-1;J>=0;J--){let fe=xa[J],Ce=fe.userData;Ce.t+=x,Ce.v.y-=9*x,fe.position.addScaledVector(Ce.v,x),fe.material.opacity=Math.max(0,1-Ce.t/1.1),Ce.t>1.1&&(c.remove(fe),fe.material.dispose(),xa.splice(J,1))}O.sel&&(Rn.material.opacity=.7+.3*Math.sin(b*6)),l.render(c,u)}return O.raf=requestAnimationFrame(Bf),om}return mm(I1);})();
