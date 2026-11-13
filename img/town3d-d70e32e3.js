var Town3D=(()=>{var Uo=Object.defineProperty;var uu=Object.getOwnPropertyDescriptor;var du=Object.getOwnPropertyNames;var fu=Object.prototype.hasOwnProperty;var pu=(i,t)=>{for(var e in t)Uo(i,e,{get:t[e],enumerable:!0})},mu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of du(t))!fu.call(i,s)&&s!==e&&Uo(i,s,{get:()=>t[s],enumerable:!(n=uu(t,s))||n.enumerable});return i};var gu=i=>mu(Uo({},"__esModule",{value:!0}),i);var Vg={};pu(Vg,{start:()=>Gg});var zc=0,ml=1,kc=2;var ur=1,Gc=2,xs=3,_i=0,Ge=1,fn=2,Pi=0,vs=1,ys=2,gl=3,_l=4,Vc=5;var Ii=100,Hc=101,Wc=102,Xc=103,qc=104,Yc=200,Zc=201,Jc=202,$c=203,xl=204,vl=205,Kc=206,Qc=207,jc=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,na=0,ia=1,sa=2,ss=3,ra=4,aa=5,oa=6,la=7,Oa=0,ah=1,oh=2,On=0,yl=1,Ml=2,Sl=3,bl=4,Tl=5,wl=6,El=7;var Al=300,Li=301,Ms=302,Ba=303,za=304,rs=1e3,Dn=1001,ca=1002,Be=1003,lh=1004;var dr=1005;var je=1006,ka=1007;var Kn=1008;var sn=1009,Rl=1010,Cl=1011,Ss=1012,Ga=1013,An=1014,Rn=1015,Cn=1016,Va=1017,Ha=1018,Di=1020,Pl=35902,Il=35899,Ll=1021,Dl=1022,Pn=1023,Yn=1026,Qn=1027,Nl=1028,Wa=1029,xi=1030,Xa=1031;var qa=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ya=35840,Za=35841,Ja=35842,$a=35843,Ka=36196,Qa=37492,ja=37496,to=37488,eo=37489,_r=37490,no=37491,io=37808,so=37809,ro=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,xo=36492,vo=36494,yo=36495,Mo=36283,So=36284,xr=36285,bo=36286;var zs=2300,ha=2301,jr=2302,al=2303,ol=2400,ll=2401,cl=2402;var ch=3200;var To=0,hh=1,jn="",ke="srgb",ks="srgb-linear",Gs="linear",de="srgb";var ta=7680;var uh=519,dh=512,fh=513,ph=514,Ul=515,mh=516,gh=517,Fl=518,Ol=519,Bl=35044;var zl="300 es",vn=2e3,as=2001;function _u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _h(){let i=os("canvas");return i.style.display="block",i}var ac={},ls=null;function Vs(...i){let t="THREE."+i.shift();ls?ls("log",t,...i):console.log(t,...i)}function xh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=xh(i);let t="THREE."+i.shift();if(ls)ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=xh(i);let t="THREE."+i.shift();if(ls)ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Bs(...i){let t=i.join(" ");t in ac||(ac[t]=!0,Vt(...i))}function vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var yh={[na]:na,[sa]:oa,[ra]:ra,[ss]:aa,[ia]:ia,[oa]:sa,[la]:la,[aa]:ss},Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fo=Math.PI/180,ua=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function vu(i,t){return(i%t+t)%t}function Oo(i,t,e){return(1-e)*i+e*t}function Mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sh(i,t){if(t.constructor===Float32Array)return i;let e=wo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function bh(i,t){if(t.constructor===Float32Array)return i;let e=wo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Wl=class Wl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var Wt=Wl,Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],m=n[s+3],d=r[a+0],g=r[a+1],x=r[a+2],T=r[a+3];if(m!==T||c!==d||l!==g||u!==x){let p=c*d+l*g+u*x+m*T;p<0&&(d=-d,g=-g,x=-x,T=-T,p=-p);let f=1-o;if(p<.9995){let y=Math.acos(p),C=Math.sin(y);f=Math.sin(f*y)/C,o=Math.sin(o*y)/C,c=c*f+d*o,l=l*f+g*o,u=u*f+x*o,m=m*f+T*o}else{c=c*f+d*o,l=l*f+g*o,u=u*f+x*o,m=m*f+T*o;let y=1/Math.sqrt(c*c+l*l+u*u+m*m);c*=y,l*=y,u*=y,m*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],m=r[a],d=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+u*m+c*g-l*d,t[e+1]=c*x+u*d+l*m-o*g,t[e+2]=l*x+u*g+o*d-c*m,t[e+3]=u*x-o*m-c*d-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),m=o(r/2),d=c(n/2),g=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*u*m+l*g*x,this._y=l*g*m-d*u*x,this._z=l*u*x+d*g*m,this._w=l*u*m-d*g*x;break;case"YXZ":this._x=d*u*m+l*g*x,this._y=l*g*m-d*u*x,this._z=l*u*x-d*g*m,this._w=l*u*m+d*g*x;break;case"ZXY":this._x=d*u*m-l*g*x,this._y=l*g*m+d*u*x,this._z=l*u*x+d*g*m,this._w=l*u*m-d*g*x;break;case"ZYX":this._x=d*u*m-l*g*x,this._y=l*g*m+d*u*x,this._z=l*u*x-d*g*m,this._w=l*u*m+d*g*x;break;case"YZX":this._x=d*u*m+l*g*x,this._y=l*g*m+d*u*x,this._z=l*u*x-d*g*m,this._w=l*u*m-d*g*x;break;case"XZY":this._x=d*u*m-l*g*x,this._y=l*g*m-d*u*x,this._z=l*u*x+d*g*m,this._w=l*u*m+d*g*x;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],m=e[10],d=n+o+m;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(u-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+l)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-l)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+c*l+a*m-o*u,this.y=n+c*u+o*l-r*m,this.z=s+c*m+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var G=Xl,Bo=new G,oc=new Un,ql=class ql{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],m=n[7],d=n[2],g=n[5],x=n[8],T=s[0],p=s[3],f=s[6],y=s[1],C=s[4],b=s[7],P=s[2],R=s[5],_=s[8];return r[0]=a*T+o*y+c*P,r[3]=a*p+o*C+c*R,r[6]=a*f+o*b+c*_,r[1]=l*T+u*y+m*P,r[4]=l*p+u*C+m*R,r[7]=l*f+u*b+m*_,r[2]=d*T+g*y+x*P,r[5]=d*p+g*C+x*R,r[8]=d*f+g*b+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],m=u*a-o*l,d=o*c-u*r,g=l*r-a*c,x=e*m+n*d+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/x;return t[0]=m*T,t[1]=(s*l-u*n)*T,t[2]=(o*n-s*a)*T,t[3]=d*T,t[4]=(u*e-s*c)*T,t[5]=(s*r-o*e)*T,t[6]=g*T,t[7]=(n*c-l*e)*T,t[8]=(a*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zo.makeScale(t,e)),this}rotate(t){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;var qt=ql,zo=new qt,lc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){let i={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ks]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:de,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var se=yu();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=os("canvas")),zi.width=t.width,zi.height=t.height;let s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mu=0,cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ko(s[a].image)):r.push(ko(s[a]))}else r=ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ko(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Su=0,Go=new G,Xe=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=je,a=Kn,o=Pn,c=sn,l=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Ni(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Al;Xe.DEFAULT_ANISOTROPY=1;var Yl=class Yl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],m=c[8],d=c[1],g=c[5],x=c[9],T=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(m-T)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(m+T)<.1&&Math.abs(x+p)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,b=(g+1)/2,P=(f+1)/2,R=(u+d)/4,_=(m+T)/4,S=(x+p)/4;return C>b&&C>P?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=R/n,r=_/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=S/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=_/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-x)*(p-x)+(m-T)*(m-T)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(m-T)/y,this.z=(d-u)/y,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var Me=Yl,fa=class extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hs=class extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fa=class Fa{constructor(t,e,n,s,r,a,o,c,l,u,m,d,g,x,T,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,m,d,g,x,T,p)}set(t,e,n,s,r,a,o,c,l,u,m,d,g,x,T,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=m,f[14]=d,f[3]=g,f[7]=x,f[11]=T,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*u,g=a*m,x=o*u,T=o*m;e[0]=c*u,e[4]=-c*m,e[8]=l,e[1]=g+x*l,e[5]=d-T*l,e[9]=-o*c,e[2]=T-d*l,e[6]=x+g*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,g=c*m,x=l*u,T=l*m;e[0]=d+T*o,e[4]=x*o-g,e[8]=a*l,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=g*o-x,e[6]=T+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,g=c*m,x=l*u,T=l*m;e[0]=d-T*o,e[4]=-a*m,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*u,e[9]=T-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,g=a*m,x=o*u,T=o*m;e[0]=c*u,e[4]=x*l-g,e[8]=d*l+T,e[1]=c*m,e[5]=T*l+d,e[9]=g*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,g=a*l,x=o*c,T=o*l;e[0]=c*u,e[4]=T-d*m,e[8]=x*m+g,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=g*m+x,e[10]=d-T*m}else if(t.order==="XZY"){let d=a*c,g=a*l,x=o*c,T=o*l;e[0]=c*u,e[4]=-m,e[8]=l*u,e[1]=d*m+T,e[5]=a*u,e[9]=g*m-x,e[2]=x*m-g,e[6]=o*u,e[10]=T*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,Tu)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ri.crossVectors(n,on),ri.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ri.crossVectors(n,on)),ri.normalize(),Er.crossVectors(on,ri),s[0]=ri.x,s[4]=Er.x,s[8]=on.x,s[1]=ri.y,s[5]=Er.y,s[9]=on.y,s[2]=ri.z,s[6]=Er.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],m=n[5],d=n[9],g=n[13],x=n[2],T=n[6],p=n[10],f=n[14],y=n[3],C=n[7],b=n[11],P=n[15],R=s[0],_=s[4],S=s[8],B=s[12],U=s[1],k=s[5],V=s[9],J=s[13],F=s[2],Z=s[6],tt=s[10],Y=s[14],ut=s[3],$=s[7],q=s[11],lt=s[15];return r[0]=a*R+o*U+c*F+l*ut,r[4]=a*_+o*k+c*Z+l*$,r[8]=a*S+o*V+c*tt+l*q,r[12]=a*B+o*J+c*Y+l*lt,r[1]=u*R+m*U+d*F+g*ut,r[5]=u*_+m*k+d*Z+g*$,r[9]=u*S+m*V+d*tt+g*q,r[13]=u*B+m*J+d*Y+g*lt,r[2]=x*R+T*U+p*F+f*ut,r[6]=x*_+T*k+p*Z+f*$,r[10]=x*S+T*V+p*tt+f*q,r[14]=x*B+T*J+p*Y+f*lt,r[3]=y*R+C*U+b*F+P*ut,r[7]=y*_+C*k+b*Z+P*$,r[11]=y*S+C*V+b*tt+P*q,r[15]=y*B+C*J+b*Y+P*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],m=t[6],d=t[10],g=t[14],x=t[3],T=t[7],p=t[11],f=t[15],y=c*g-l*d,C=o*g-l*m,b=o*d-c*m,P=a*g-l*u,R=a*d-c*u,_=a*m-o*u;return e*(T*y-p*C+f*b)-n*(x*y-p*P+f*R)+s*(x*C-T*P+f*_)-r*(x*b-T*R+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],m=t[9],d=t[10],g=t[11],x=t[12],T=t[13],p=t[14],f=t[15],y=e*o-n*a,C=e*c-s*a,b=e*l-r*a,P=n*c-s*o,R=n*l-r*o,_=s*l-r*c,S=u*T-m*x,B=u*p-d*x,U=u*f-g*x,k=m*p-d*T,V=m*f-g*T,J=d*f-g*p,F=y*J-C*V+b*k+P*U-R*B+_*S;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/F;return t[0]=(o*J-c*V+l*k)*Z,t[1]=(s*V-n*J-r*k)*Z,t[2]=(T*_-p*R+f*P)*Z,t[3]=(d*R-m*_-g*P)*Z,t[4]=(c*U-a*J-l*B)*Z,t[5]=(e*J-s*U+r*B)*Z,t[6]=(p*b-x*_-f*C)*Z,t[7]=(u*_-d*b+g*C)*Z,t[8]=(a*V-o*U+l*S)*Z,t[9]=(n*U-e*V-r*S)*Z,t[10]=(x*R-T*b+f*y)*Z,t[11]=(m*b-u*R-g*y)*Z,t[12]=(o*B-a*k-c*S)*Z,t[13]=(e*k-n*B+s*S)*Z,t[14]=(T*C-x*P-p*y)*Z,t[15]=(u*P-m*C+d*y)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,m=o+o,d=r*l,g=r*u,x=r*m,T=a*u,p=a*m,f=o*m,y=c*l,C=c*u,b=c*m,P=n.x,R=n.y,_=n.z;return s[0]=(1-(T+f))*P,s[1]=(g+b)*P,s[2]=(x-C)*P,s[3]=0,s[4]=(g-b)*R,s[5]=(1-(d+f))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(x+C)*_,s[9]=(p-y)*_,s[10]=(1-(d+T))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),c=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let l=1/a,u=1/o,m=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=m,Sn.elements[9]*=m,Sn.elements[10]*=m,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=vn,c=!1){let l=this.elements,u=2*r/(e-t),m=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),x,T;if(c)x=r/(a-r),T=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===as)x=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=m,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,c=!1){let l=this.elements,u=2/(e-t),m=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),x,T;if(c)x=1/(a-r),T=a/(a-r);else if(o===vn)x=-2/(a-r),T=-(a+r)/(a-r);else if(o===as)x=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=m,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fa.prototype.isMatrix4=!0;var ge=Fa,ki=new G,Sn=new ge,bu=new G(0,0,0),Tu=new G(1,1,1),ri=new G,Er=new G,on=new G,hc=new ge,uc=new Un,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],m=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wu=0,dc=new G,Gi=new Un,kn=new ge,Ar=new G,Ps=new G,Eu=new G,Au=new Un,fc=new G(1,0,0),pc=new G(0,1,0),mc=new G(0,0,1),gc={type:"added"},Ru={type:"removed"},Vi={type:"childadded",child:null},Vo={type:"childremoved",child:null},Ne=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Zn,n=new Un,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new qt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ps,Ar,this.up):kn.lookAt(Ar,Ps,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(kn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),m=a(t.shapes),d=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new G(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Le=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cu={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let T of t.hand.values()){let p=e.getJointPose(T,n),f=this._getHandJoint(l,T);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=u.position.distanceTo(m.position),g=.02,x=.005;l.inputState.pinching&&d>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=vu(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ho(a,r,t+1/3),this.g=Ho(a,r,t),this.b=Ho(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return se.workingToColorSpace(We.copy(this),t),Math.round(ae(We.r*255,0,255))*65536+Math.round(ae(We.g*255,0,255))*256+Math.round(ae(We.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=u<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ke){se.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Rr);let n=Oo(ai.h,Rr.h,e),s=Oo(ai.s,Rr.s,e),r=Oo(ai.l,Rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Yt;Yt.NAMES=Th;var Ws=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xs=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new G,Gn=new G,Wo=new G,Vn=new G,Hi=new G,Wi=new G,_c=new G,Xo=new G,qo=new G,Yo=new G,Zo=new Me,Jo=new Me,$o=new Me,Xn=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Gn.subVectors(n,e),Wo.subVectors(t,e);let a=bn.dot(bn),o=bn.dot(Gn),c=bn.dot(Wo),l=Gn.dot(Gn),u=Gn.dot(Wo),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,g=(l*c-o*u)*d,x=(a*u-o*c)*d;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zo.setScalar(0),Jo.setScalar(0),$o.setScalar(0),Zo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zo,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector($o,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Gn.subVectors(t,e),bn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,n),Wi.subVectors(r,n),Xo.subVectors(t,n);let c=Hi.dot(Xo),l=Wi.dot(Xo);if(c<=0&&l<=0)return e.copy(n);qo.subVectors(t,s);let u=Hi.dot(qo),m=Wi.dot(qo);if(u>=0&&m<=u)return e.copy(s);let d=c*m-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),e.copy(n).addScaledVector(Hi,a);Yo.subVectors(t,r);let g=Hi.dot(Yo),x=Wi.dot(Yo);if(x>=0&&g<=x)return e.copy(r);let T=g*l-c*x;if(T<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(Wi,o);let p=u*x-g*m;if(p<=0&&m-u>=0&&g-x>=0)return _c.subVectors(r,s),o=(m-u)/(m-u+(g-x)),e.copy(s).addScaledVector(_c,o);let f=1/(p+T+d);return a=T*f,o=d*f,e.copy(n).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Pr.subVectors(this.max,Is),Xi.subVectors(t.a,Is),qi.subVectors(t.b,Is),Yi.subVectors(t.c,Is),oi.subVectors(qi,Xi),li.subVectors(Yi,qi),bi.subVectors(Xi,Yi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-bi.z,bi.y,oi.z,0,-oi.x,li.z,0,-li.x,bi.z,0,-bi.x,-oi.y,oi.x,0,-li.y,li.x,0,-bi.y,bi.x,0];return!Ko(e,Xi,qi,Yi,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Xi,qi,Yi,Pr))?!1:(Ir.crossVectors(oi,li),e=[Ir.x,Ir.y,Ir.z],Ko(e,Xi,qi,Yi,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new G,new G,new G,new G,new G,new G,new G,new G],Tn=new G,Cr=new hi,Xi=new G,qi=new G,Yi=new G,oi=new G,li=new G,bi=new G,Is=new G,Pr=new G,Ir=new G,Ti=new G;function Ko(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Ie=new G,Lr=new Wt,Pu=0,wn=class extends Nn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?wo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Sh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):bh(t,this.array)}};var qs=class extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ys=class extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Iu=new hi,Ls=new G,Qo=new G,ui=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Iu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Qo)),this.expandByPoint(Ls.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lu=0,xn=new ge,jo=new Ne,Zi=new G,ln=new hi,Ds=new hi,Oe=new G,ze=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?Ys:qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,Ds.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,Ds.max),ln.expandByPoint(Oe)):(ln.expandByPoint(Ds.min),ln.expandByPoint(Ds.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Oe.fromBufferAttribute(o,l),c&&(Zi.fromBufferAttribute(t,l),Oe.add(Zi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new G,c[B]=new G;let u=new G,m=new G,d=new G,g=new Wt,x=new Wt,T=new Wt,p=new G,f=new G;function y(B,U,k){l[B]=l[U]=l[k]=1,u.fromBufferAttribute(n,B),m.fromBufferAttribute(n,U),d.fromBufferAttribute(n,k),g.fromBufferAttribute(r,B),x.fromBufferAttribute(r,U),T.fromBufferAttribute(r,k),m.sub(u),d.sub(u),x.sub(g),T.sub(g);let V=1/(x.x*T.y-T.x*x.y);isFinite(V)&&(p.copy(m).multiplyScalar(T.y).addScaledVector(d,-x.y).multiplyScalar(V),f.copy(d).multiplyScalar(x.x).addScaledVector(m,-T.x).multiplyScalar(V),o[B].add(p),o[U].add(p),o[k].add(p),c[B].add(f),c[U].add(f),c[k].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let B=0,U=C.length;B<U;++B){let k=C[B],V=k.start,J=k.count;for(let F=V,Z=V+J;F<Z;F+=3)y(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new G,P=new G,R=new G,_=new G;function S(B){R.fromBufferAttribute(s,B),_.copy(R);let U=o[B];b.copy(U),b.sub(R.multiplyScalar(R.dot(U))).normalize(),P.crossVectors(_,U);let V=P.dot(c[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,V)}for(let B=0,U=n.count;B<U;++B)l[B]&&S(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,u=new G,m=new G;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),T=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,p),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,m=o.normalized,d=new l.constructor(c.length*u),g=0,x=0;for(let T=0,p=c.length;T<p;T++){o.isInterleavedBufferAttribute?g=c[T]*o.data.stride+o.offset:g=c[T]*u;for(let f=0;f<u;f++)d[x++]=l[g++]}return new wn(d,u,m)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,m=l.length;u<m;u++){let d=l[u],g=t(d,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let m=0,d=l.length;m<d;m++){let g=l[m];u.push(g.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],m=r[l];for(let d=0,g=m.length;d<g;d++)u.push(m[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=xc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=xc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function xc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ni()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ke=new G,Zs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?wo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Vs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Sh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):bh(t,this.data.array)}},tl=new G,Du=new G,Nu=new qt,cn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tl.subVectors(n,e).cross(Du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nu.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Uu=0,En=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=vs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Jn=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ji,Ns=new G,$i=new G,Ki=new G,Qi=new Wt,Us=new Wt,wh=new ge,Dr=new G,Fs=new G,Nr=new G,vc=new Wt,el=new Wt,yc=new Wt,di=class extends Ne{constructor(t=new Jn){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ma(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Zs(n,3,0,!1)),Ji.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new Wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ur(Dr.set(-.5,-.5,0),Ki,a,$i,s,r),Ur(Fs.set(.5,-.5,0),Ki,a,$i,s,r),Ur(Nr.set(.5,.5,0),Ki,a,$i,s,r),vc.set(0,0),el.set(1,0),yc.set(1,1);let o=t.ray.intersectTriangle(Dr,Fs,Nr,!1,Ns);if(o===null&&(Ur(Fs.set(-.5,.5,0),Ki,a,$i,s,r),el.set(0,1),o=t.ray.intersectTriangle(Dr,Nr,Fs,!1,Ns),o===null))return;let c=t.ray.origin.distanceTo(Ns);c<t.near||c>t.far||e.push({distance:c,point:Ns.clone(),uv:Xn.getInterpolation(Ns,Dr,Fs,Nr,vc,el,yc,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ur(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*Qi.x-s*Qi.y,Us.y=s*Qi.x+r*Qi.y):Us.copy(Qi),i.copy(t),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(wh)}var Wn=new G,nl=new G,Fr=new G,Or=new G,Ai=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nl.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(nl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=Or.dot(this.direction),c=-Or.dot(Fr),l=Or.lengthSq(),u=Math.abs(1-a*a),m,d,g,x;if(u>0)if(m=a*c-o,d=a*o-c,x=r*u,m>=0)if(d>=-x)if(d<=x){let T=1/u;m*=T,d*=T,g=m*(m+a*d+2*o)+d*(a*m+d+2*c)+l}else d=r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*c)+l;else d=-r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*c)+l;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+d*(d+2*c)+l):d<=x?(m=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+d*(d+2*c)+l);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(nl).addScaledVector(Fr,d),g}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,c=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,c=(t.min.z-d.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,m=t.x-a.x,d=t.y-a.y,g=t.z-a.z,x=e.x-a.x,T=e.y-a.y,p=e.z-a.z,f=n.x-a.x,y=n.y-a.y,C=n.z-a.z,b=Math.abs(c),P=Math.abs(l),R=Math.abs(u),_,S,B,U,k,V,J,F,Z,tt,Y,ut;if(b>=P&&b>=R?(B=c,V=m,Z=x,ut=f,c>=0?(_=l,S=u,U=d,k=g,J=T,F=p,tt=y,Y=C):(_=u,S=l,U=g,k=d,J=p,F=T,tt=C,Y=y)):P>=R?(B=l,V=d,Z=T,ut=y,l>=0?(_=u,S=c,U=g,k=m,J=p,F=x,tt=C,Y=f):(_=c,S=u,U=m,k=g,J=x,F=p,tt=f,Y=C)):(B=u,V=g,Z=p,ut=C,u>=0?(_=c,S=l,U=m,k=d,J=x,F=T,tt=f,Y=y):(_=l,S=c,U=d,k=m,J=T,F=x,tt=y,Y=f)),B===0)return null;let $=_/B,q=S/B,lt=1/B,Ct=U-$*V,Gt=k-q*V,it=J-$*Z,yt=F-q*Z,Lt=tt-$*ut,Bt=Y-q*ut,wt=Lt*yt-Bt*it,Xt=Ct*Bt-Gt*Lt,Se=it*Gt-yt*Ct;if(s){if(wt<0||Xt<0||Se<0)return null}else if((wt<0||Xt<0||Se<0)&&(wt>0||Xt>0||Se>0))return null;let zt=wt+Xt+Se;if(zt===0)return null;let he=lt*(wt*V+Xt*Z+Se*ut);return(zt>0?he<0:he>0)?null:this.at(he/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mc=new ge,wi=new Ai,Br=new ui,Sc=new G,zr=new G,kr=new G,Gr=new G,il=new G,Vr=new G,bc=new G,Hr=new G,oe=class extends Ne{constructor(t=new ze,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],m=r[c];u!==0&&(il.fromBufferAttribute(m,t),a?Vr.addScaledVector(il,u):Vr.addScaledVector(il.sub(e),u))}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Br.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Br,Sc)===null||wi.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){let p=d[x],f=a[p.materialIndex],y=Math.max(p.start,g.start),C=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let b=y,P=C;b<P;b+=3){let R=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=Wr(this,f,t,n,l,u,m,R,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let p=x,f=T;p<f;p+=3){let y=o.getX(p),C=o.getX(p+1),b=o.getX(p+2);s=Wr(this,a,t,n,l,u,m,y,C,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){let p=d[x],f=a[p.materialIndex],y=Math.max(p.start,g.start),C=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let b=y,P=C;b<P;b+=3){let R=b,_=b+1,S=b+2;s=Wr(this,f,t,n,l,u,m,R,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let p=x,f=T;p<f;p+=3){let y=p,C=p+1,b=p+2;s=Wr(this,a,t,n,l,u,m,y,C,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Fu(i,t,e,n,s,r,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===_i,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Hr);return l<e.near||l>e.far?null:{distance:l,point:Hr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,zr),i.getVertexPosition(c,kr),i.getVertexPosition(l,Gr);let u=Fu(i,t,e,n,zr,kr,Gr,bc);if(u){let m=new G;Xn.getBarycoord(bc,zr,kr,Gr,m),s&&(u.uv=Xn.getInterpolatedAttribute(s,o,c,l,m,new Wt)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,c,l,m,new Wt)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,c,l,m,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new G,materialIndex:0};Xn.getNormal(zr,kr,Gr,d.normal),u.face=d,u.barycoord=m}return u}var ga=class extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Be,u=Be,m,d){super(null,a,o,c,l,u,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=new ui,Ou=new Wt(.5,.5),Xr=new G,fi=class{constructor(t=new cn,e=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],m=r[5],d=r[6],g=r[7],x=r[8],T=r[9],p=r[10],f=r[11],y=r[12],C=r[13],b=r[14],P=r[15];if(s[0].setComponents(l-a,g-u,f-x,P-y).normalize(),s[1].setComponents(l+a,g+u,f+x,P+y).normalize(),s[2].setComponents(l+o,g+m,f+T,P+C).normalize(),s[3].setComponents(l-o,g-m,f-T,P-C).normalize(),n)s[4].setComponents(c,d,p,b).normalize(),s[5].setComponents(l-c,g-d,f-p,P-b).normalize();else if(s[4].setComponents(l-c,g-d,f-p,P-b).normalize(),e===vn)s[5].setComponents(l+c,g+d,f+p,P+b).normalize();else if(e===as)s[5].setComponents(c,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);let e=Ou.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Tc=new ge,_a=class i{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Tc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fi),n[s].setFromProjectionMatrix(Tc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new fi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ds=class extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xa=new G,va=new G,wc=new ge,Os=new Ai,qr=new ui,sl=new G,Ec=new G,Js=class extends Ne{constructor(t=new ze,e=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xa.fromBufferAttribute(e,s-1),va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xa.distanceTo(va);t.setAttribute("lineDistance",new fe(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;wc.copy(s).invert(),Os.copy(t.ray).applyMatrix4(wc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let T=g,p=x-1;T<p;T+=l){let f=u.getX(T),y=u.getX(T+1),C=Yr(this,t,Os,c,f,y,T);C&&e.push(C)}if(this.isLineLoop){let T=u.getX(x-1),p=u.getX(g),f=Yr(this,t,Os,c,T,p,x-1);f&&e.push(f)}}else{let g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let T=g,p=x-1;T<p;T+=l){let f=Yr(this,t,Os,c,T,T+1,T);f&&e.push(f)}if(this.isLineLoop){let T=Yr(this,t,Os,c,x-1,g,x-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(xa.fromBufferAttribute(o,s),va.fromBufferAttribute(o,r),e.distanceSqToSegment(xa,va,sl,Ec)>n)return;sl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sl);if(!(l<t.near||l>t.far))return{distance:l,point:Ec.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var fs=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ac=new ge,hl=new Ai,Zr=new ui,Jr=new G,$s=class extends Ne{constructor(t=new ze,e=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Ac.copy(s).invert(),hl.copy(t.ray).applyMatrix4(Ac);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,m=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let x=d,T=g;x<T;x++){let p=l.getX(x);Jr.fromBufferAttribute(m,p),Rc(Jr,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let x=d,T=g;x<T;x++)Jr.fromBufferAttribute(m,x),Rc(Jr,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rc(i,t,e,n,s,r,a){let o=hl.distanceSqToPoint(i);if(o<e){let c=new G;hl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ks=class extends Xe{constructor(t=[],e=Li,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ps=class extends Xe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $n=class extends Xe{constructor(t,e,n=An,s,r,a,o=Be,c=Be,l,u=Yn,m=1){if(u!==Yn&&u!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qs=class extends $n{constructor(t,e=An,n=Li,s,r,a=Be,o=Be,c,l=Yn){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},js=class extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},un=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],m=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(m,2));function x(T,p,f,y,C,b,P,R,_,S,B){let U=b/_,k=P/S,V=b/2,J=P/2,F=R/2,Z=_+1,tt=S+1,Y=0,ut=0,$=new G;for(let q=0;q<tt;q++){let lt=q*k-J;for(let Ct=0;Ct<Z;Ct++){let Gt=Ct*U-V;$[T]=Gt*y,$[p]=lt*C,$[f]=F,l.push($.x,$.y,$.z),$[T]=0,$[p]=0,$[f]=R>0?1:-1,u.push($.x,$.y,$.z),m.push(Ct/_),m.push(1-q/S),Y+=1}}for(let q=0;q<S;q++)for(let lt=0;lt<_;lt++){let Ct=d+lt+Z*q,Gt=d+lt+Z*(q+1),it=d+(lt+1)+Z*(q+1),yt=d+(lt+1)+Z*q;c.push(Ct,Gt,yt),c.push(Gt,it,yt),ut+=6}o.addGroup(g,ut,B),g+=ut,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var tr=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new G,u=new Wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let m=0,d=3;m<=e;m++,d+=3){let g=n+m/e*s;l.x=t*Math.cos(g),l.y=t*Math.sin(g),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ms=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],d=[],g=[],x=0,T=[],p=n/2,f=0;y(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(g,2));function y(){let b=new G,P=new G,R=0,_=(e-t)/n;for(let S=0;S<=r;S++){let B=[],U=S/r,k=U*(e-t)+t;for(let V=0;V<=s;V++){let J=V/s,F=J*c+o,Z=Math.sin(F),tt=Math.cos(F);P.x=k*Z,P.y=-U*n+p,P.z=k*tt,m.push(P.x,P.y,P.z),b.set(Z,_,tt).normalize(),d.push(b.x,b.y,b.z),g.push(J,1-U),B.push(x++)}T.push(B)}for(let S=0;S<s;S++)for(let B=0;B<r;B++){let U=T[B][S],k=T[B+1][S],V=T[B+1][S+1],J=T[B][S+1];(t>0||B!==0)&&(u.push(U,k,J),R+=3),(e>0||B!==r-1)&&(u.push(k,V,J),R+=3)}l.addGroup(f,R,0),f+=R}function C(b){let P=x,R=new Wt,_=new G,S=0,B=b===!0?t:e,U=b===!0?1:-1;for(let V=1;V<=s;V++)m.push(0,p*U,0),d.push(0,U,0),g.push(.5,.5),x++;let k=x;for(let V=0;V<=s;V++){let F=V/s*c+o,Z=Math.cos(F),tt=Math.sin(F);_.x=B*tt,_.y=p*U,_.z=B*Z,m.push(_.x,_.y,_.z),d.push(0,U,0),R.x=Z*.5+.5,R.y=tt*.5*U+.5,g.push(R.x,R.y),x++}for(let V=0;V<s;V++){let J=P+V,F=k+V;b===!0?u.push(F,F+1,J):u.push(F+1,F,J),S+=3}l.addGroup(f,S,b===!0?1:2),f+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},er=class i extends ms{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let C=new G,b=new G,P=new G;for(let R=0;R<e.length;R+=3)g(e[R+0],C),g(e[R+1],b),g(e[R+2],P),c(C,b,P,y)}function c(y,C,b,P){let R=P+1,_=[];for(let S=0;S<=R;S++){_[S]=[];let B=y.clone().lerp(b,S/R),U=C.clone().lerp(b,S/R),k=R-S;for(let V=0;V<=k;V++)V===0&&S===R?_[S][V]=B:_[S][V]=B.clone().lerp(U,V/k)}for(let S=0;S<R;S++)for(let B=0;B<2*(R-S)-1;B++){let U=Math.floor(B/2);B%2===0?(d(_[S][U+1]),d(_[S+1][U]),d(_[S][U])):(d(_[S][U+1]),d(_[S+1][U+1]),d(_[S+1][U]))}}function l(y){let C=new G;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(y),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function u(){let y=new G;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];let b=p(y)/2/Math.PI+.5,P=f(y)/Math.PI+.5;a.push(b,1-P)}x(),m()}function m(){for(let y=0;y<a.length;y+=6){let C=a[y+0],b=a[y+2],P=a[y+4],R=Math.max(C,b,P),_=Math.min(C,b,P);R>.9&&_<.1&&(C<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function g(y,C){let b=y*3;C.x=t[b+0],C.y=t[b+1],C.z=t[b+2]}function x(){let y=new G,C=new G,b=new G,P=new G,R=new Wt,_=new Wt,S=new Wt;for(let B=0,U=0;B<r.length;B+=9,U+=6){y.set(r[B+0],r[B+1],r[B+2]),C.set(r[B+3],r[B+4],r[B+5]),b.set(r[B+6],r[B+7],r[B+8]),R.set(a[U+0],a[U+1]),_.set(a[U+2],a[U+3]),S.set(a[U+4],a[U+5]),P.copy(y).add(C).add(b).divideScalar(3);let k=p(P);T(R,U+0,y,k),T(_,U+2,C,k),T(S,U+4,b,k)}}function T(y,C,b,P){P<0&&y.x===1&&(a[C]=y.x-1),b.x===0&&b.z===0&&(a[C]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ri=class i extends ya{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var tn=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,m=t/o,d=e/c,g=[],x=[],T=[],p=[];for(let f=0;f<u;f++){let y=f*d-a;for(let C=0;C<l;C++){let b=C*m-r;x.push(b,-y,0),T.push(0,0,1),p.push(C/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){let C=y+l*f,b=y+l*(f+1),P=y+1+l*(f+1),R=y+1+l*f;g.push(C,b,R),g.push(b,P,R)}this.setIndex(g),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(T,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ci=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],m=new G,d=new G,g=[],x=[],T=[],p=[];for(let f=0;f<=n;f++){let y=[],C=f/n,b=a+C*o,P=t*Math.cos(b),R=Math.sqrt(t*t-P*P),_=0;f===0&&a===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let B=S/e,U=s+B*r;m.x=-R*Math.cos(U),m.y=P,m.z=R*Math.sin(U),x.push(m.x,m.y,m.z),d.copy(m).normalize(),T.push(d.x,d.y,d.z),p.push(B+_,1-C),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let C=u[f][y+1],b=u[f][y],P=u[f+1][y],R=u[f+1][y+1];(f!==0||a>0)&&g.push(C,b,R),(f!==n-1||c<Math.PI)&&g.push(b,P,R)}this.setIndex(g),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(T,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Cc(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Cc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ui(i[e]);for(let s in n)t[s]=n[s]}return t}function Cc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Eh={clone:Ui,merge:qe},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ma=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var nr=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sa=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ji(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ll:r=t,o=2*e-n;break;case cl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ll:a=t,c=2*n-e;break;case cl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(s-e),T=x*x,p=T*x,f=-d*p+2*d*T-d*x,y=(1+d)*p+(-1.5-2*d)*T+(-.5+d)*x+1,C=(-1-g)*p+(1.5+g)*T+.5*x,b=g*p-g*T;for(let P=0;P!==o;++P)r[P]=f*a[u+P]+y*a[l+P]+C*a[c+P]+b*a[m+P];return r}},wa=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),m=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*m+a[c+d]*u;return r}},Ea=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let x=(n-e)/(s-e),T=1-x;for(let p=0;p!==o;++p)r[p]=a[l+p]*T+a[c+p]*x;return r}let d=o*2,g=t-1;for(let x=0;x!==o;++x){let T=a[l+x],p=a[c+x],f=g*d+x*2,y=m[f],C=m[f+1],b=t*d+x*2,P=u[b],R=u[b+1],_=Vu(n,e,y,P,s);r[x]=Ah(_,T,C,R,p)}return r}};function Ah(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Ah(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Gu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ji(e,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ji(t.times,Array),values:ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$r(t.settings)&&(n.settings={inTangents:ji(t.settings.inTangents,Array),outTangents:ji(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zs:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return jr;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;$r(this.settings)&&(Pc(this.settings.inTangents,t),Pc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$r(this.settings)&&(Ic(this.settings.inTangents,t),Ic(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ht("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ht("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&xu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ht("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let m=o*n,d=m-n,g=m+n;for(let x=0;x!==n;++x){let T=e[m+x];if(T!==e[d+x]||T!==e[g+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let m=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ic(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ha;var mi=class extends dn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=zs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="color";var Ca=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="number";var Pa=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Un.slerpFlat(r,0,a,l-o,a,l,c);return r}},ir=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends dn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=zs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="vector";var ea={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Lc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Lc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var La=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,m){return l.push(u,m),this},this.removeHandler=function(u){let m=l.indexOf(u);return m!==-1&&l.splice(m,2),this},this.getHandler=function(u){for(let m=0,d=l.length;m<d;m+=2){let g=l[m],x=l[m+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rh=new La,gs=class{constructor(t){this.manager=t!==void 0?t:Rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=new WeakMap,Da=class extends gs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ea.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let m=ts.get(a);m===void 0&&(m=[],ts.set(a,m)),m.push({onLoad:e,onError:s})}return a}let o=os("img");function c(){u(),e&&e(this);let m=ts.get(this)||[];for(let d=0;d<m.length;d++){let g=m[d];g.onLoad&&g.onLoad(this)}ts.delete(this),r.manager.itemEnd(t)}function l(m){u(),s&&s(m),ea.remove(`image:${t}`);let d=ts.get(this)||[];for(let g=0;g<d.length;g++){let x=d[g];x.onError&&x.onError(m)}ts.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ea.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var sr=class extends gs{constructor(t){super(t)}load(t,e,n,s){let r=new Xe,a=new Da(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},rr=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ar=class extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rl=new ge,Dc=new G,Nc=new G,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fi,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===as||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kr=new G,Qr=new Un,Ln=new G,or=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kr,Qr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,Qr,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Kr,Qr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,Qr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new G,Uc=new Wt,Fc=new Wt,Qe=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,Fc),e.subVectors(Fc,Uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var lr=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ul=class extends Na{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new ul}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var es=-90,ns=1,_s=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Qe(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new Qe(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new Qe(es,ns,t,e);o.layers=this.layers,this.add(o);let c=new Qe(es,ns,t,e);c.layers=this.layers,this.add(c);let l=new Qe(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=T,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ua=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Gl="\\[\\]\\.:\\/",Hu=new RegExp("["+Gl+"]","g"),Vl="[^"+Gl+"]",Wu="[^"+Gl.replace("\\.","")+"]",Xu=/((?:WC+[\/:])*)/.source.replace("WC",Vl),qu=/(WCOD+)?/.source.replace("WCOD",Wu),Yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),Ju=new RegExp("^"+Xu+qu+Yu+Zu+"$"),$u=["material","materials","bones","map"],dl=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hu,"")}static parseTrackName(t){let e=Ju.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$u.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=dl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wg=new Float32Array(1);var Oc=new ge,hr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ai(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Oc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oc),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(Bc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fl(t[s],this,n,e);return n.sort(Bc),n}};function Bc(i,t){return i.distance-t.distance}function fl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fl(r[a],t,e,!0)}}var Zl=class Zl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Zl.prototype.isMatrix2=!0;var pl=Zl;function Hl(i,t,e,n){let s=Ku(n);switch(e){case Ll:return i*t;case Nl:return i*t/s.components*s.byteLength;case Wa:return i*t/s.components*s.byteLength;case xi:return i*t*2/s.components*s.byteLength;case Xa:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case qa:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case Qa:case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:case _r:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xo:case vo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mo:case So:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xr:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ku(i){switch(i){case sn:case Rl:return{byteLength:1,components:1};case Ss:case Cl:case Cn:return{byteLength:2,components:1};case Va:case Ha:return{byteLength:2,components:4};case An:case Ga:case Rn:return{byteLength:4,components:1};case Pl:case Il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $h(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,m=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){let u=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,u);else{m.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<m.length;g++){let x=m[d],T=m[g];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++d,m[d]=T)}m.length=d+1;for(let g=0,x=m.length;g<x;g++){let T=m[g];i.bufferSubData(l,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fd=`#ifdef USE_IRIDESCENCE
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
#endif`,pd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,Kd=`uniform sampler2D dfgLUT;
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
}`,Qd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
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
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zf=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform float backgroundBlurriness;
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,yp=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,Ap=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:td,alphahash_pars_fragment:ed,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:yd,color_pars_vertex:Md,color_vertex:Sd,common:bd,defaultnormal_vertex:Td,displacementmap_pars_vertex:wd,displacementmap_vertex:Ed,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Pd,envmap_fragment:Id,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:zd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:Qd,lights_fragment_maps:jd,lights_fragment_end:tf,lightprobes_pars_fragment:ef,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:xf,normal_fragment_maps:vf,normal_pars_fragment:yf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Af,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:If,dithering_fragment:Lf,dithering_pars_fragment:Df,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Gf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:$f,uv_pars_vertex:Kf,uv_vertex:Qf,worldpos_vertex:jf,background_vert:tp,background_frag:ep,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:ap,depth_frag:op,distance_vert:lp,distance_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:xp,meshmatcap_frag:vp,meshnormal_vert:yp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:bp,meshphysical_vert:Tp,meshphysical_frag:wp,meshtoon_vert:Ep,meshtoon_frag:Ap,points_vert:Rp,points_frag:Cp,shadow_vert:Pp,shadow_frag:Ip,sprite_vert:Lp,sprite_frag:Dp},At={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},zn={basic:{uniforms:qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:qe([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:qe([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:qe([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:qe([At.points,At.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:qe([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:qe([At.common,At.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:qe([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:qe([At.sprite,At.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:qe([At.common,At.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:qe([At.lights,At.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};zn.physical={uniforms:qe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Eo={r:0,b:0,g:0},Np=new ge,Kh=new qt;Kh.set(-1,0,0,0,1,0,0,0,1);function Up(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,c,l,u=null,m=0,d=null;function g(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){let b=y.backgroundBlurriness>0;C=t.get(C,b)}return C}function x(y){let C=!1,b=g(y);b===null?p(a,o):b&&b.isColor&&(p(b,1),C=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(y,C){let b=g(C);b&&b.isCubeTexture?(l===void 0&&(l=new oe(new un(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ui(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kh),l.material.toneMapped=se.getTransfer(b.colorSpace)!==de,(u!==b||m!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,m=b.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new oe(new tn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ui(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=se.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||m!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,m=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,C){y.getRGB(Eo,kl(i)),e.buffers.color.setClear(Eo.r,Eo.g,Eo.b,C,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,C=1){a.set(y),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:x,addToRenderList:T,dispose:f}}function Fp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(k,V,J,F,Z){let tt=!1,Y=m(k,F,J,V);r!==Y&&(r=Y,l(r.object)),tt=g(k,F,J,Z),tt&&x(k,F,J,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,b(k,V,J,F),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function m(k,V,J,F){let Z=F.wireframe===!0,tt=n[V.id];tt===void 0&&(tt={},n[V.id]=tt);let Y=k.isInstancedMesh===!0?k.id:0,ut=tt[Y];ut===void 0&&(ut={},tt[Y]=ut);let $=ut[J.id];$===void 0&&($={},ut[J.id]=$);let q=$[Z];return q===void 0&&(q=d(c()),$[Z]=q),q}function d(k){let V=[],J=[],F=[];for(let Z=0;Z<e;Z++)V[Z]=0,J[Z]=0,F[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:F,object:k,attributes:{},index:null}}function g(k,V,J,F){let Z=r.attributes,tt=V.attributes,Y=0,ut=J.getAttributes();for(let $ in ut)if(ut[$].location>=0){let lt=Z[$],Ct=tt[$];if(Ct===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(Ct=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(Ct=k.instanceColor)),lt===void 0||lt.attribute!==Ct||Ct&&lt.data!==Ct.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function x(k,V,J,F){let Z={},tt=V.attributes,Y=0,ut=J.getAttributes();for(let $ in ut)if(ut[$].location>=0){let lt=tt[$];lt===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(lt=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(lt=k.instanceColor));let Ct={};Ct.attribute=lt,lt&&lt.data&&(Ct.data=lt.data),Z[$]=Ct,Y++}r.attributes=Z,r.attributesNum=Y,r.index=F}function T(){let k=r.newAttributes;for(let V=0,J=k.length;V<J;V++)k[V]=0}function p(k){f(k,0)}function f(k,V){let J=r.newAttributes,F=r.enabledAttributes,Z=r.attributeDivisors;J[k]=1,F[k]===0&&(i.enableVertexAttribArray(k),F[k]=1),Z[k]!==V&&(i.vertexAttribDivisor(k,V),Z[k]=V)}function y(){let k=r.newAttributes,V=r.enabledAttributes;for(let J=0,F=V.length;J<F;J++)V[J]!==k[J]&&(i.disableVertexAttribArray(J),V[J]=0)}function C(k,V,J,F,Z,tt,Y){Y===!0?i.vertexAttribIPointer(k,V,J,Z,tt):i.vertexAttribPointer(k,V,J,F,Z,tt)}function b(k,V,J,F){T();let Z=F.attributes,tt=J.getAttributes(),Y=V.defaultAttributeValues;for(let ut in tt){let $=tt[ut];if($.location>=0){let q=Z[ut];if(q===void 0&&(ut==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),ut==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),q!==void 0){let lt=q.normalized,Ct=q.itemSize,Gt=t.get(q);if(Gt===void 0)continue;let it=Gt.buffer,yt=Gt.type,Lt=Gt.bytesPerElement,Bt=yt===i.INT||yt===i.UNSIGNED_INT||q.gpuType===Ga;if(q.isInterleavedBufferAttribute){let wt=q.data,Xt=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,Se=q.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let zt=0;zt<$.locationSize;zt++)f($.location+zt,wt.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let zt=0;zt<$.locationSize;zt++)p($.location+zt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let zt=0;zt<$.locationSize;zt++)C($.location+zt,Ct/$.locationSize,yt,lt,Xt*Lt,(Se+Ct/$.locationSize*zt)*Lt,Bt)}else{if(q.isInstancedBufferAttribute){for(let wt=0;wt<$.locationSize;wt++)f($.location+wt,q.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let wt=0;wt<$.locationSize;wt++)p($.location+wt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let wt=0;wt<$.locationSize;wt++)C($.location+wt,Ct/$.locationSize,yt,lt,Ct*Lt,Ct/$.locationSize*wt*Lt,Bt)}}else if(Y!==void 0){let lt=Y[ut];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv($.location,lt);break;case 3:i.vertexAttrib3fv($.location,lt);break;case 4:i.vertexAttrib4fv($.location,lt);break;default:i.vertexAttrib1fv($.location,lt)}}}}y()}function P(){B();for(let k in n){let V=n[k];for(let J in V){let F=V[J];for(let Z in F){let tt=F[Z];for(let Y in tt)u(tt[Y].object),delete tt[Y];delete F[Z]}}delete n[k]}}function R(k){if(n[k.id]===void 0)return;let V=n[k.id];for(let J in V){let F=V[J];for(let Z in F){let tt=F[Z];for(let Y in tt)u(tt[Y].object),delete tt[Y];delete F[Z]}}delete n[k.id]}function _(k){for(let V in n){let J=n[V];for(let F in J){let Z=J[F];if(Z[k.id]===void 0)continue;let tt=Z[k.id];for(let Y in tt)u(tt[Y].object),delete tt[Y];delete Z[k.id]}}}function S(k){for(let V in n){let J=n[V],F=k.isInstancedMesh===!0?k.id:0,Z=J[F];if(Z!==void 0){for(let tt in Z){let Y=Z[tt];for(let ut in Y)u(Y[ut].object),delete Y[ut];delete Z[tt]}delete J[F],Object.keys(J).length===0&&delete n[V]}}}function B(){U(),a=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:T,enableAttribute:p,disableUnusedAttributes:y}}function Op(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Pn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==sn&&_!==Rn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Vt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:b,maxSamples:P,samples:R}}function zp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new cn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let g=m.length!==0||d||n!==0||s;return s=d,n=m.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=u(m,d,0)},this.setState=function(m,d,g){let x=m.clippingPlanes,T=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,C=y*4,b=f.clippingState||null;c.value=b,b=u(x,d,C,g);for(let P=0;P!==C;++P)b[P]=e[P];f.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,d,g,x){let T=m!==null?m.length:0,p=null;if(T!==0){if(p=c.value,x!==!0||p===null){let f=g+T*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let C=0,b=g;C!==T;++C,b+=4)a.copy(m[C]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,p}}var Mr=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Pi});r.uniforms.tEquirect.value=e;let a=new oe(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=je),new _s(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ch=256,kp=3,Gp=20,Qh=256,jh=16,Vp=3,Hp=new G,Wp=new Yt,Ro=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _s(1,10,null),this._boxMesh=new oe(new un(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let m=c.autoClear,d=c.autoClearColor,g=c.autoClearDepth,x=c.autoClearStencil,T=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,T===null&&(t.background=c.getClearColor(Wp));let p=new _s(n,s,u);return p.position.copy(o),p.update(c,t),c.autoClear=m,c.autoClearColor=d,c.autoClearDepth=g,c.autoClearStencil=x,t.background=T,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ch,Mh(t))}_fromTexture(t,e){t.mapping===Li||t.mapping===Ms?this._setSize(t.image.length===0?Ch:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Ph(t,!1,!1),n=Math.log2(t)-kp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ph(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Li||t.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ih()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xp(),this._integrationMaterial=qp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/jh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Vp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Qh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Yp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Ph(i,t,e){return new Mr(i,{minFilter:Kn,generateMipmaps:t,type:Cn,colorSpace:ks,depthBuffer:e})}function Sr(i,t,e){return new Fn({name:i,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:Ge,blending:Pi,depthTest:!1,depthWrite:!1})}function Xp(){return Sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qh}u

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
	`)}function qp(){return Sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jh}},`

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
	`)}function Yp(){return Sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gp}
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
	`)}function Ih(){return Sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Lh(){return Sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?a(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===Ba||g===za)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let T=new Mr(x.height);return T.fromEquirectangularTexture(i,d),t.set(d,T),d.addEventListener("dispose",l),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let g=d.mapping,x=g===Ba||g===za,T=g===Li||g===Ms;if(x||T){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Ro(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let y=d.image;return x&&y&&y.height>0||T&&y&&c(y)?(n===null&&(n=new Ro(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,g){return g===Ba?d.mapping=Li:g===za&&(d.mapping=Ms),d}function c(d){let g=0,x=6;for(let T=0;T<x;T++)d[T]!==void 0&&g++;return g===x}function l(d){let g=d.target;g.removeEventListener("dispose",l);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function u(d){let g=d.target;g.removeEventListener("dispose",u);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Jp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bs("WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}function c(x){x.index!==null&&t.remove(x.index);for(let p in x.attributes)t.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let T=r.get(x);T&&(t.remove(T),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(x,T){return s[T.id]!==void 0||(T.addEventListener("dispose",o),s[T.id]=new WeakRef(T),a.register(T,T.id,T),e.memory.geometries++),T}function u(x){let T=x.attributes;for(let p in T)t.update(T[p],i.ARRAY_BUFFER)}function m(x){let T=x.index,p=x.attributes.position,f=0;if(p===void 0)return;let y=T!==null?T.array.length:p.array.length/3-1,C=p.count>=65535?Ys:qs,b=new C(Math.ceil(y/3)*6,1),P=b.array;if(T!==null){let _=T.array;f=T.version;for(let S=0,B=0;S<y;S+=3){let U=_[S+0],k=_[S+1],V=_[S+2];P[B++]=U,P[B++]=k,P[B++]=k,P[B++]=V,P[B++]=V,P[B++]=U}}else{f=p.version;for(let _=0,S=0;_<y;_+=3){let B=_+0,U=_+1,k=_+2;P[S++]=B,P[S++]=U,P[S++]=U,P[S++]=k,P[S++]=k,P[S++]=B}}b.version=f;let R=r.get(x);R&&t.remove(R),r.set(x,b)}function d(x){let T=r.get(x);if(T){let p=x.index;p!==null&&T.version<p.version&&m(x)}else m(x);return r.get(x)}function g(){for(let x in s){let T=s[x].deref();T!==void 0&&c(T)}}return{get:l,update:u,getWireframeAttribute:d,dispose:g}}function Kp(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,d){i.drawElements(n,d,r,m*a),e.update(d,n,1)}function l(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,m*a,g),e.update(d,n,g))}function u(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,g);let T=0;for(let p=0;p<g;p++)T+=d[p];e.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Qp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jp(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==m){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],C=0;g===!0&&(C=1),x===!0&&(C=2),T===!0&&(C=3);let b=o.attributes.position.count*C,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*P*4*m),_=new Hs(R,b,P,m);_.type=Rn,_.needsUpdate=!0;let S=C*4;for(let U=0;U<m;U++){let k=p[U],V=f[U],J=y[U],F=b*P*4*U;for(let Z=0;Z<k.count;Z++){let tt=Z*S;g===!0&&(s.fromBufferAttribute(k,Z),R[F+tt+0]=s.x,R[F+tt+1]=s.y,R[F+tt+2]=s.z,R[F+tt+3]=0),x===!0&&(s.fromBufferAttribute(V,Z),R[F+tt+4]=s.x,R[F+tt+5]=s.y,R[F+tt+6]=s.z,R[F+tt+7]=0),T===!0&&(s.fromBufferAttribute(J,Z),R[F+tt+8]=s.x,R[F+tt+9]=s.y,R[F+tt+10]=s.z,R[F+tt+11]=J.itemSize===4?s.w:1)}}d={count:m,texture:_,size:new Wt(b,P)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let T=0;T<l.length;T++)g+=l[T];let x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tm(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,m=l.geometry,d=t.get(l,m);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var em={[yl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function nm(i,t,e,n,s,r){let a=new hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new ze;u.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new fe([0,2,0,0,2,0],2));let m=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new oe(u,m),g=new lr(-1,1,1,-1,0,1),x=null,T=null,p=!1,f,y=null,C=[],b=!1;this.setSize=function(P,R){a.setSize(P,R),o!==null&&o.setSize(P,R),c!==null&&c.setSize(P,R);for(let _=0;_<C.length;_++){let S=C[_];S.setSize&&S.setSize(P,R)}},this.setEffects=function(P){C=P,b=C.length>0&&C[0].isRenderPass===!0;let R=a.width,_=a.height;C.length>0&&o===null&&(o=new hn(R,_,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(R,_,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&C.some(B=>B.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new $n(R,_),r===!0&&(l.format=Qn,l.type=Di)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let B=0;B<C.length;B++){let U=C[B];U.setSize&&U.setSize(R,_),S&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(l)}},this.begin=function(P,R){if(p||P.toneMapping===On&&C.length===0)return!1;if(y=R,R!==null){let _=R.width,S=R.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&P.setRenderTarget(a),f=P.toneMapping,P.toneMapping=On,!0},this.hasRenderPass=function(){return b},this.end=function(P,R){P.toneMapping=f,p=!0;let _=a,S=o;for(let B=0;B<C.length;B++){let U=C[B];U.enabled!==!1&&(U.render(P,S,_,R),U.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(x!==P.outputColorSpace||T!==P.toneMapping){x=P.outputColorSpace,T=P.toneMapping,m.defines={},se.getTransfer(x)===de&&(m.defines.SRGB_TRANSFER="");let B=em[T];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,P.setRenderTarget(y),P.render(d,g),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),m.dispose()}}var tu=new Xe,eu=new $n(1,1),nu=new Qs(1),iu=new Hs,su=new pa,ru=new Ks,Dh=[],Nh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function Ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Po(i,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),Fe(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Fe(e,n)}}function cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),Fe(e,n)}}function hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Io(i){return i.version===0&&(i.compareFunction=Ol,i.needsUpdate=!0),i}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Io(eu):r=tu,e.setTexture2D(t||r,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Io(nu):r=ru,e.setTextureCube(t||r,s)}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}function bm(i,t){i.uniform1fv(this.addr,t)}function Tm(i,t){let e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function wm(i,t){let e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Em(i,t){let e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){let e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){let e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Dm(i,t){i.uniform4iv(this.addr,t)}function Nm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Io(eu):a=tu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function zm(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||su,r[a])}function km(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Io(nu):a=ru;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Gm(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||iu,r[a])}function Vm(i){switch(i){case 5126:return bm;case 35664:return Tm;case 35665:return wm;case 35666:return Em;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Um;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Bh(i,t){i.seq.push(t),i.map[t.id]=t}function Hm(i,t,e){let n=i.name,s=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),a=Jl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bh(e,l===void 0?new Kl(o,i,t):new Ql(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new jl(o),Bh(e,m)),e=m}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Hm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function zh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Wm=37297,Xm=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var kh=new qt;function Ym(i){se._getMatrix(kh,se.workingColorSpace,i);let t=`mat3( ${kh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(t),o)}else return r}function Zm(i,t){let e=Ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Jm={[yl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[bl]:"ACESFilmic",[wl]:"AgX",[El]:"Neutral",[Tl]:"Custom"};function $m(i,t){let e=Jm[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ao=new G;function Km(){se.getLuminanceCoefficients(Ao);let i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function jm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function yr(i){return i!==""}function Vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(eg,ng)}function ng(i,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return tc(e)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(ig,sg)}function sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var rg={[ur]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function ag(i){return rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var og={[Ms]:"ENVMAP_MODE_REFRACTION"};function lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cg={[Oa]:"ENVMAP_BLENDING_MULTIPLY",[ah]:"ENVMAP_BLENDING_MIX",[oh]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ag(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=lg(e),m=hg(e),d=Qm(e),g=jm(r),x=s.createProgram(),T,p,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(T=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),T.length>0&&(T+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(T=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Kt.tonemapping_pars_fragment:"",e.toneMapping!==On?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=tc(a),a=Vh(a,e),a=Hh(a,e),o=tc(o),o=Vh(o,e),o=Hh(o,e),a=Wh(a),o=Wh(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,T=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,p=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=f+T+a,C=f+p+o,b=zh(s,s.VERTEX_SHADER,y),P=zh(s,s.FRAGMENT_SHADER,C);s.attachShader(x,b),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(b)||"",J=s.getShaderInfoLog(P)||"",F=k.trim(),Z=V.trim(),tt=J.trim(),Y=!0,ut=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,P);else{let $=Gh(s,b,"vertex"),q=Gh(s,P,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+$+`
`+q)}else F!==""?Vt("WebGLProgram: Program Info Log:",F):(Z===""||tt==="")&&(ut=!1);ut&&(U.diagnostics={runnable:Y,programLog:F,vertexShader:{log:Z,prefix:T},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(b),s.deleteShader(P),_=new bs(s,x),S=tg(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(x,Wm)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=P,this}var dg=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}};function fg(i){return i===xi||i===_r||i===xr}function pg(i,t,e,n,s,r){let a=new hs,o=new ec,c=new Set,l=[],u=new Map,m=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,S,B,U,k,V){let J=U.fog,F=k.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=t.get(_.envMap||Z,tt),ut=d[_.type],$=n.precision;_.precision!==null&&($=n.getMaxPrecision(_.precision),$!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",$,"instead."));let q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,lt=q!==void 0?q.length:0,Ct=0;F.morphAttributes.position!==void 0&&(Ct=1),F.morphAttributes.normal!==void 0&&(Ct=2),F.morphAttributes.color!==void 0&&(Ct=3);let Gt,it,yt,Lt;if(ut){let bt=zn[ut];Gt=bt.vertexShader,it=bt.fragmentShader}else{Gt=_.vertexShader,it=_.fragmentShader;let bt=o.getVertexShaderStage(_),ce=o.getFragmentShaderStage(_);o.update(_,bt,ce),yt=bt.id,Lt=ce.id}let Bt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Xt=k.isInstancedMesh===!0,Se=k.isBatchedMesh===!0,zt=!!_.map,he=!!_.matcap,ue=!!Y,$t=ue&&Y.isPMREMTexture===!0,Re=!!_.aoMap,be=!!_.lightMap,Ce=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,Ze=!!_.displacementMap,Te=!!_.emissiveMap,Je=!!_.metalnessMap,$e=!!_.roughnessMap,Nt=_.anisotropy>0,z=_.clearcoat>0,Ve=_.diffuseRoughness>0,me=_.dispersion>0,_e=_.retroreflectivity>0,St=_.iridescence>0,ve=_.sheen>0,Ft=_.transmission>0,X=Nt&&!!_.anisotropyMap,E=z&&!!_.clearcoatMap,v=z&&!!_.clearcoatNormalMap,W=z&&!!_.clearcoatRoughnessMap,ot=Ve&&!!_.diffuseRoughnessMap,nt=St&&!!_.iridescenceMap,dt=St&&!!_.iridescenceThicknessMap,mt=ve&&!!_.sheenColorMap,j=ve&&!!_.sheenRoughnessMap,Q=!!_.specularMap,vt=!!_.specularColorMap,D=!!_.specularIntensityMap,et=Ft&&!!_.transmissionMap,K=Ft&&!!_.thicknessMap,xt=!!_.gradientMap,pt=!!_.alphaMap,_t=_.alphaTest>0,Dt=!!_.alphaHash,Zt=!!_.extensions,ft=On;_.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(ft=i.toneMapping);let Pt=$t?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,Jt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:Gt,fragmentShader:it,defines:_.defines,customVertexShaderID:yt,customFragmentShaderID:Lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:$,batching:Se,batchingColor:Se&&k._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&k.instanceColor!==null,instancingMorph:Xt&&k.morphTexture!==null,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:he,envMap:ue,envMapMode:ue&&Y.mapping,envMapPMREM:$t,envMapMaxLod:$t?Pt.length-1:null,envMapSize:$t?Pt[0].width:null,aoMap:Re,lightMap:be,bumpMap:Ce,normalMap:pe,displacementMap:Ze,emissiveMap:Te,normalMapObjectSpace:pe&&_.normalMapType===hh,normalMapTangentSpace:pe&&_.normalMapType===To,packedNormalMap:pe&&_.normalMapType===To&&fg(_.normalMap.format),metalnessMap:Je,roughnessMap:$e,anisotropy:Nt,anisotropyMap:X,clearcoat:z,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:W,diffuseRoughness:Ve,diffuseRoughnessMap:ot,dispersion:me,retroreflection:_e,iridescence:St,iridescenceMap:nt,iridescenceThicknessMap:dt,sheen:ve,sheenColorMap:mt,sheenRoughnessMap:j,specularMap:Q,specularColorMap:vt,specularIntensityMap:D,transmission:Ft,transmissionMap:et,thicknessMap:K,gradientMap:xt,opaque:_.transparent===!1&&_.blending===vs&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:_t,alphaHash:Dt,combine:_.combine,mapUv:zt&&g(_.map.channel),aoMapUv:Re&&g(_.aoMap.channel),lightMapUv:be&&g(_.lightMap.channel),bumpMapUv:Ce&&g(_.bumpMap.channel),normalMapUv:pe&&g(_.normalMap.channel),displacementMapUv:Ze&&g(_.displacementMap.channel),emissiveMapUv:Te&&g(_.emissiveMap.channel),metalnessMapUv:Je&&g(_.metalnessMap.channel),roughnessMapUv:$e&&g(_.roughnessMap.channel),anisotropyMapUv:X&&g(_.anisotropyMap.channel),clearcoatMapUv:E&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&g(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(_.sheenRoughnessMap.channel),specularMapUv:Q&&g(_.specularMap.channel),specularColorMapUv:vt&&g(_.specularColorMap.channel),specularIntensityMapUv:D&&g(_.specularIntensityMap.channel),transmissionMapUv:et&&g(_.transmissionMap.channel),thicknessMapUv:K&&g(_.thicknessMap.channel),alphaMapUv:pt&&g(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||Nt),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(zt||pt),fog:!!J,useFog:_.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:wt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:V.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function T(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)S.push(B),S.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(p(S,_),f(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function f(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let S=d[_.type],B;if(S){let U=zn[S];B=Eh.clone(U.uniforms)}else B=_.uniforms;return B}function C(_,S){let B=u.get(S);return B!==void 0?++B.usedTimes:(B=new ug(i,S,_,s),l.push(B),u.set(S,B)),B}function b(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function P(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:T,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:P,programs:l,dispose:R}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function qh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,T,p,f){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:p,group:f},i[t]=y):(y.id=d.id,y.object=d,y.geometry=g,y.material=x,y.materialVariant=a(d),y.groupOrder=T,y.renderOrder=d.renderOrder,y.z=p,y.group=f),t++,y}function c(d,g,x,T,p,f,y){y.reversedDepth===!0&&(p=-p);let C=o(d,g,x,T,p,f);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):e.push(C)}function l(d,g,x,T,p,f){let y=o(d,g,x,T,p,f);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function u(d,g){e.length>1&&e.sort(d||gg),n.length>1&&n.sort(g||qh),s.length>1&&s.sort(g||qh)}function m(){for(let d=t,g=i.length;d<g;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:u}}function _g(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yh,i.set(n,[a])):s>=r.length?(a=new Yh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Yt};break;case"SpotLight":e={position:new G,direction:new G,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sg(i){let t=new xg,e=vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new ge,a=new ge;function o(l){let u=0,m=0,d=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let g=0,x=0,T=0,p=0,f=0,y=0,C=0,b=0,P=0,R=0,_=0,S=0,B=0,U=0;l.sort(Mg);for(let V=0,J=l.length;V<J;V++){let F=l[V],Z=F.color,tt=F.intensity,Y=F.distance,ut=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===xi?ut=F.shadow.map.texture:ut=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=Z.r*tt,m+=Z.g*tt,d+=Z.b*tt;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],tt);U++}else if(F.isSunLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let q=F.shadow,lt=e.get(F);lt.shadowIntensity=q.intensity,lt.shadowBias=q.bias,lt.shadowNormalBias=q.normalBias,lt.shadowRadius=q.radius,lt.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[x]=lt,n.sunShadowMap[x]=ut;let Ct=q.getViewportCount();for(let Gt=0;Gt<Ct;Gt++)n.sunShadowMatrix[T+Gt]=q.getMatrix(Gt),n.sunShadowCascade[T+Gt]=q._cascadeData[Gt];T+=Ct,x++}n.sun[g]=$,g++}else if(F.isDirectionalLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let q=F.shadow,lt=e.get(F);lt.shadowIntensity=q.intensity,lt.shadowBias=q.bias,lt.shadowNormalBias=q.normalBias,lt.shadowRadius=q.radius,lt.shadowMapSize=q.mapSize,n.directionalShadow[p]=lt,n.directionalShadowMap[p]=ut,n.directionalShadowMatrix[p]=F.shadow.matrix,P++}n.directional[p]=$,p++}else if(F.isSpotLight){let $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(Z).multiplyScalar(tt),$.distance=Y,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[y]=$;let q=F.shadow;if(F.map&&(n.spotLightMap[S]=F.map,S++,q.updateMatrices(F),F.castShadow&&B++),n.spotLightMatrix[y]=q.matrix,F.castShadow){let lt=e.get(F);lt.shadowIntensity=q.intensity,lt.shadowBias=q.bias,lt.shadowNormalBias=q.normalBias,lt.shadowRadius=q.radius,lt.shadowMapSize=q.mapSize,n.spotShadow[y]=lt,n.spotShadowMap[y]=ut,_++}y++}else if(F.isRectAreaLight){let $=t.get(F);$.color.copy(Z).multiplyScalar(tt),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[C]=$,C++}else if(F.isPointLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){let q=F.shadow,lt=e.get(F);lt.shadowIntensity=q.intensity,lt.shadowBias=q.bias,lt.shadowNormalBias=q.normalBias,lt.shadowRadius=q.radius,lt.shadowMapSize=q.mapSize,lt.shadowCameraNear=q.camera.near,lt.shadowCameraFar=q.camera.far,n.pointShadow[f]=lt,n.pointShadowMap[f]=ut,n.pointShadowMatrix[f]=F.shadow.matrix,R++}n.point[f]=$,f++}else if(F.isHemisphereLight){let $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(tt),$.groundColor.copy(F.groundColor).multiplyScalar(tt),n.hemi[b]=$,b++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=d;let k=n.hash;(k.sunLength!==g||k.directionalLength!==p||k.pointLength!==f||k.spotLength!==y||k.rectAreaLength!==C||k.hemiLength!==b||k.numSunShadows!==x||k.numDirectionalShadows!==P||k.numPointShadows!==R||k.numSpotShadows!==_||k.numSpotMaps!==S||k.numLightProbes!==U)&&(n.sun.length=g,n.directional.length=p,n.spot.length=y,n.rectArea.length=C,n.point.length=f,n.hemi.length=b,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-B,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=U,k.sunLength=g,k.directionalLength=p,k.pointLength=f,k.spotLength=y,k.rectAreaLength=C,k.hemiLength=b,k.numSunShadows=x,k.numDirectionalShadows=P,k.numPointShadows=R,k.numSpotShadows=_,k.numSpotMaps=S,k.numLightProbes=U,n.version=yg++)}function c(l,u){let m=0,d=0,g=0,x=0,T=0,p=0,f=u.matrixWorldInverse;for(let y=0,C=l.length;y<C;y++){let b=l[y];if(b.isSunLight){let P=n.sun[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(f),m++}else if(b.isDirectionalLight){let P=n.directional[d];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),d++}else if(b.isSpotLight){let P=n.spot[x];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),x++}else if(b.isRectAreaLight){let P=n.rectArea[T];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),T++}else if(b.isPointLight){let P=n.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(f),g++}else if(b.isHemisphereLight){let P=n.hemi[p];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:o,setupView:c,state:n}}function Zh(i){let t=new Sg(i),e=[],n=[],s=[];function r(m){u.camera=m,e.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){n.push(m)}function c(){t.setup(e),s.sort((m,d)=>m.priority-d.priority||m.id-d.id)}function l(m){t.setupView(e,m)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function bg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zh(i),t.set(s,[o])):r>=a.length?(o=new Zh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
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
}`,Eg=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Ag=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Jh=new ge,vr=new G,$l=new G;function Rg(i,t,e){let n=new fi,s=new Wt,r=new Wt,a=new Me,o=new Sa,c=new ba,l={},u=e.maxTextureSize,m={[_i]:Ge,[Ge]:_i,[fn]:fn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Tg,fragmentShader:wg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new ze;x.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new oe(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let f=this.type;this.render=function(R,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===Gc&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let B=i.getRenderTarget(),U=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Pi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let J=f!==this.type;J&&_.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Z=>Z.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Z=R.length;F<Z;F++){let tt=R[F],Y=tt.shadow;if(Y===void 0){Vt("WebGLShadowMap:",tt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ut=Y.getFrameExtents();s.multiply(ut),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,Y.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||J===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===xs){if(tt.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new hn(s.x,s.y,{format:xi,type:Cn,minFilter:je,magFilter:je,generateMipmaps:!1}),Y.map.texture.name=tt.name+".shadowMap",Y.map.depthTexture=new $n(s.x,s.y,Rn),Y.map.depthTexture.name=tt.name+".shadowMapDepth",Y.map.depthTexture.format=Yn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Be,Y.map.depthTexture.magFilter=Be}else tt.isPointLight?(Y.map=new Mr(s.x),Y.map.depthTexture=new Qs(s.x,An)):(Y.map=new hn(s.x,s.y),Y.map.depthTexture=new $n(s.x,s.y,An)),Y.map.depthTexture.name=tt.name+".shadowMap",Y.map.depthTexture.format=Yn,this.type===ur?(Y.map.depthTexture.compareFunction=$?Fl:Ul,Y.map.depthTexture.minFilter=je,Y.map.depthTexture.magFilter=je):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Be,Y.map.depthTexture.magFilter=Be);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();tt.isPointLight!==!0&&Y.updateMatrices(tt,S);let lt=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:S.layers;for(let Ct=0;Ct<q;Ct++){let Gt=Y.getCamera(Ct);if(tt.isPointLight){let it=Y.camera,yt=Y.matrix,Lt=tt.distance||it.far;Lt!==it.far&&(it.far=Lt,it.updateProjectionMatrix()),vr.setFromMatrixPosition(tt.matrixWorld),it.position.copy(vr),$l.copy(it.position),$l.add(Eg[Ct]),it.up.copy(Ag[Ct]),it.lookAt($l),it.updateMatrixWorld(),yt.makeTranslation(-vr.x,-vr.y,-vr.z),Jh.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Jh,it.coordinateSystem,it.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,Ct),i.clear();else{Ct===0&&(i.setRenderTarget(Y.map),i.clear());let it=Y.getViewport(Ct);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),V.viewport(a)}n=Y.getFrustum(Ct),b(_,S,Gt,tt,lt,this.type)}Y.isPointLightShadow!==!0&&this.type===xs&&y(Y,S),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(B,U,k)};function y(R,_){let S=t.update(T);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new hn(s.x,s.y,{format:xi,type:Cn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,T,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(_,null,S,g,T,null)}function C(R,_,S,B){let U=null,k=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)U=k;else if(U=S.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let V=U.uuid,J=_.uuid,F=l[V];F===void 0&&(F={},l[V]=F);let Z=F[J];Z===void 0&&(Z=U.clone(),F[J]=Z,_.addEventListener("dispose",P)),U=Z}if(U.visible=_.visible,U.wireframe=_.wireframe,B===xs?U.side=_.shadowSide!==null?_.shadowSide:_.side:U.side=_.shadowSide!==null?_.shadowSide:m[_.side],U.alphaMap=_.alphaMap,U.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,U.map=_.map,U.clipShadows=_.clipShadows,U.clippingPlanes=_.clippingPlanes,U.clipIntersection=_.clipIntersection,U.displacementMap=_.displacementMap,U.displacementScale=_.displacementScale,U.displacementBias=_.displacementBias,U.wireframeLinewidth=_.wireframeLinewidth,U.linewidth=_.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let V=i.properties.get(U);V.light=S}return U}function b(R,_,S,B,U,k){if(R.visible===!1)return;if(R.layers.test(U)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===xs)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);let F=t.update(R),Z=R.material;if(Array.isArray(Z)){let tt=F.groups;for(let Y=0,ut=tt.length;Y<ut;Y++){let $=tt[Y],q=Z[$.materialIndex];if(q&&q.visible){let lt=C(R,q,B,k);R.onBeforeShadow(i,R,_,S,F,lt,$),i.renderBufferDirect(S,null,F,lt,R,$),R.onAfterShadow(i,R,_,S,F,lt,$)}}}else if(Z.visible){let tt=C(R,Z,B,k);R.onBeforeShadow(i,R,_,S,F,tt,null),i.renderBufferDirect(S,null,F,tt,R,null),R.onAfterShadow(i,R,_,S,F,tt,null)}}let J=R.children;for(let F=0,Z=J.length;F<Z;F++)b(J[F],_,S,B,U,k)}function P(R){R.target.removeEventListener("dispose",P);for(let S in l){let B=l[S],U=R.target.uuid;U in B&&(B[U].dispose(),delete B[U])}}}function Cg(i,t){function e(){let D=!1,et=new Me,K=null,xt=new Me(0,0,0,0);return{setMask:function(pt){K!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){D=pt},setClear:function(pt,_t,Dt,Zt,ft){ft===!0&&(pt*=Zt,_t*=Zt,Dt*=Zt),et.set(pt,_t,Dt,Zt),xt.equals(et)===!1&&(i.clearColor(pt,_t,Dt,Zt),xt.copy(et))},reset:function(){D=!1,K=null,xt.set(-1,0,0,0)}}}function n(){let D=!1,et=!1,K=null,xt=null,pt=null;return{setReversed:function(_t){if(et!==_t){let Dt=t.get("EXT_clip_control");_t?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),et=_t;let Zt=pt;pt=null,this.setClear(Zt)}},getReversed:function(){return et},setTest:function(_t){_t?wt(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(_t){K!==_t&&!D&&(i.depthMask(_t),K=_t)},setFunc:function(_t){if(et&&(_t=yh[_t]),xt!==_t){switch(_t){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=_t}},setLocked:function(_t){D=_t},setClear:function(_t){pt!==_t&&(pt=_t,et&&(_t=1-_t),i.clearDepth(_t))},reset:function(){D=!1,K=null,xt=null,pt=null,et=!1}}}function s(){let D=!1,et=null,K=null,xt=null,pt=null,_t=null,Dt=null,Zt=null,ft=null;return{setTest:function(Pt){D||(Pt?wt(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(Pt){et!==Pt&&!D&&(i.stencilMask(Pt),et=Pt)},setFunc:function(Pt,Jt,bt){(K!==Pt||xt!==Jt||pt!==bt)&&(i.stencilFunc(Pt,Jt,bt),K=Pt,xt=Jt,pt=bt)},setOp:function(Pt,Jt,bt){(_t!==Pt||Dt!==Jt||Zt!==bt)&&(i.stencilOp(Pt,Jt,bt),_t=Pt,Dt=Jt,Zt=bt)},setLocked:function(Pt){D=Pt},setClear:function(Pt){ft!==Pt&&(i.clearStencil(Pt),ft=Pt)},reset:function(){D=!1,et=null,K=null,xt=null,pt=null,_t=null,Dt=null,Zt=null,ft=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,u={},m={},d={},g=new WeakMap,x=[],T=null,p=!1,f=null,y=null,C=null,b=null,P=null,R=null,_=null,S=new Yt(0,0,0),B=0,U=!1,k=null,V=null,J=null,F=null,Z=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ut=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=ut>=1):$.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=ut>=2);let q=null,lt={},Ct=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),it=new Me().fromArray(Ct),yt=new Me().fromArray(Gt);function Lt(D,et,K,xt){let pt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(D,_t),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<K;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(et+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return _t}let Bt={};Bt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),wt(i.DEPTH_TEST),a.setFunc(ss),Ce(!1),pe(ml),wt(i.CULL_FACE),Re(Pi);function wt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Xt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Se(D,et){return d[D]!==et?(i.bindFramebuffer(D,et),d[D]=et,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=et),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=et),!0):!1}function zt(D,et){let K=x,xt=!1;if(D){K=g.get(et),K===void 0&&(K=[],g.set(et,K));let pt=D.textures;if(K.length!==pt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Dt=pt.length;_t<Dt;_t++)K[_t]=i.COLOR_ATTACHMENT0+_t;K.length=pt.length,xt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,xt=!0);xt&&i.drawBuffers(K)}function he(D){return T!==D?(i.useProgram(D),T=D,!0):!1}let ue={[Ii]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Wc]:i.FUNC_REVERSE_SUBTRACT};ue[Xc]=i.MIN,ue[qc]=i.MAX;let $t={[Yc]:i.ZERO,[Zc]:i.ONE,[Jc]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[jc]:i.DST_COLOR,[Kc]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(D,et,K,xt,pt,_t,Dt,Zt,ft,Pt){if(D===Pi){p===!0&&(Xt(i.BLEND),p=!1);return}if(p===!1&&(wt(i.BLEND),p=!0),D!==Vc){if(D!==f||Pt!==U){if((y!==Ii||P!==Ii)&&(i.blendEquation(i.FUNC_ADD),y=Ii,P=Ii),Pt)switch(D){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",D);break}else switch(D){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",D);break}C=null,b=null,R=null,_=null,S.set(0,0,0),B=0,f=D,U=Pt}return}pt=pt||et,_t=_t||K,Dt=Dt||xt,(et!==y||pt!==P)&&(i.blendEquationSeparate(ue[et],ue[pt]),y=et,P=pt),(K!==C||xt!==b||_t!==R||Dt!==_)&&(i.blendFuncSeparate($t[K],$t[xt],$t[_t],$t[Dt]),C=K,b=xt,R=_t,_=Dt),(Zt.equals(S)===!1||ft!==B)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ft),S.copy(Zt),B=ft),f=D,U=!1}function be(D,et){D.side===fn?Xt(i.CULL_FACE):wt(i.CULL_FACE);let K=D.side===Ge;et&&(K=!K),Ce(K),D.blending===vs&&D.transparent===!1?Re(Pi):Re(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let xt=D.stencilWrite;o.setTest(xt),xt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){k!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),k=D)}function pe(D){D!==zc?(wt(i.CULL_FACE),D!==V&&(D===ml?i.cullFace(i.BACK):D===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),V=D}function Ze(D){D!==J&&(Y&&i.lineWidth(D),J=D)}function Te(D,et,K){D?(wt(i.POLYGON_OFFSET_FILL),(F!==et||Z!==K)&&(F=et,Z=K,a.getReversed()&&(et=-et,K=-K),i.polygonOffset(et,K))):Xt(i.POLYGON_OFFSET_FILL)}function Je(D){D?wt(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function $e(D){D===void 0&&(D=i.TEXTURE0+tt-1),q!==D&&(i.activeTexture(D),q=D)}function Nt(D,et,K){K===void 0&&(q===null?K=i.TEXTURE0+tt-1:K=q);let xt=lt[K];xt===void 0&&(xt={type:void 0,texture:void 0},lt[K]=xt),(xt.type!==D||xt.texture!==et)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(D,et||Bt[D]),xt.type=D,xt.texture=et)}function z(){let D=lt[q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ve(){try{i.compressedTexImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function me(){try{i.compressedTexImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function _e(){try{i.texSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function St(){try{i.texSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function X(){try{i.texStorage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function E(){try{i.texStorage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function v(){try{i.texImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function W(){try{i.texImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function ot(D){return m[D]!==void 0?m[D]:i.getParameter(D)}function nt(D,et){m[D]!==et&&(i.pixelStorei(D,et),m[D]=et)}function dt(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function mt(D){yt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),yt.copy(D))}function j(D,et){let K=l.get(et);K===void 0&&(K=new WeakMap,l.set(et,K));let xt=K.get(D);xt===void 0&&(xt=i.getUniformBlockIndex(et,D.name),i.uniformBlockBinding(et,xt,xt),K.set(D,xt))}function Q(D,et,K){let pt=l.get(et).get(D);c[pt]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,pt,K),c[pt]=K)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},q=null,lt={},d={},c={},g=new WeakMap,x=[],T=null,p=!1,f=null,y=null,C=null,b=null,P=null,R=null,_=null,S=new Yt(0,0,0),B=0,U=!1,k=null,V=null,J=null,F=null,Z=null,it.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:wt,disable:Xt,bindFramebuffer:Se,drawBuffers:zt,useProgram:he,setBlending:Re,setMaterial:be,setFlipSided:Ce,setCullFace:pe,setLineWidth:Ze,setPolygonOffset:Te,setScissorTest:Je,activeTexture:$e,bindTexture:Nt,unbindTexture:z,compressedTexImage2D:Ve,compressedTexImage3D:me,texImage2D:v,texImage3D:W,pixelStorei:nt,getParameter:ot,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:X,texStorage3D:E,texSubImage2D:_e,texSubImage3D:St,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ft,scissor:dt,viewport:mt,reset:vt}}function Pg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,u=new WeakMap,m=new Set,d,g=new WeakMap,x=new Set,T=new FinalizationRegistry(E=>x.delete(E)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,v){return p?new OffscreenCanvas(E,v):os("canvas")}function y(E,v,W){let ot=1,nt=X(E);if((nt.width>W||nt.height>W)&&(ot=W/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let dt=Math.floor(ot*nt.width),mt=Math.floor(ot*nt.height);d===void 0&&(d=f(dt,mt));let j=v?f(dt,mt):d;return j.width=dt,j.height=mt,j.getContext("2d").drawImage(E,0,0,dt,mt),Vt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+dt+"x"+mt+")."),j}else return"data"in E&&Vt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),E;return E}function C(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(E,v,W,ot,nt,dt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let mt;ot&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8),W===i.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),W===i.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),v===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8),W===i.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),W===i.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(W===i.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),W===i.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let Q=dt?Gs:se.getTransfer(nt);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=Q===de?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),W===i.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(E,v){let W;return E?v===null||v===An||v===Di?W=i.DEPTH24_STENCIL8:v===Rn?W=i.DEPTH32F_STENCIL8:v===Ss&&(W=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===An||v===Di?W=i.DEPTH_COMPONENT24:v===Rn?W=i.DEPTH_COMPONENT32F:v===Ss&&(W=i.DEPTH_COMPONENT16),W}function S(E,v){return C(E)===!0||E.isFramebufferTexture&&E.minFilter!==Be&&E.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function B(E){let v=new WeakRef(E);n.get(E).__ref=v,x.add(v),T.register(E,v,v)}function U(E){let v=n.get(E).__ref;v!==void 0&&(x.delete(v),T.unregister(v))}function k(E){J(E.target)}function V(E){F(E.target)}function J(E){E.removeEventListener("dispose",k),U(E),tt(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&m.delete(E)}function F(E){E.removeEventListener("dispose",V),U(E),ut(E)}function Z(){for(let E of x){let v=E.deref();v!==void 0&&(v.isRenderTarget===!0?F(v):J(v))}x.clear(),m.clear()}function tt(E){let v=n.get(E);if(v.__webglInit===void 0)return;let W=E.source,ot=g.get(W);if(ot){let nt=ot[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&Y(E),Object.keys(ot).length===0&&g.delete(W)}n.remove(E)}function Y(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let W=E.source,ot=g.get(W);delete ot[v.__cacheKey],a.memory.textures--}function ut(E){let v=n.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();let W=E.depthTexture;if(W&&W.renderTarget===E&&J(W),E.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let dt=0;dt<v.__webglFramebuffer[nt].length;dt++)i.deleteFramebuffer(v.__webglFramebuffer[nt][dt]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ot=E.textures;for(let nt=0,dt=ot.length;nt<dt;nt++){let mt=n.get(ot[nt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(ot[nt])}n.remove(E)}let $=0;function q(){$=0}function lt(){return $}function Ct(E){$=E}function Gt(){let E=$;return E>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,E}function it(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function yt(E,v){let W=n.get(E);if(E.isVideoTexture&&ve(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&W.__version!==E.version){let ot=E.image;if(ot===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{be(W,E,v);return}}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+v)}function Lt(E,v){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){be(W,E,v);return}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+v)}function Bt(E,v){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){be(W,E,v);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+v)}function wt(E,v){let W=n.get(E);if(E.version>0&&W.__version!==E.version){Ce(W,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+v)}let Xt={[rs]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},Se={[Be]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},zt={[dh]:i.NEVER,[Ol]:i.ALWAYS,[fh]:i.LESS,[Ul]:i.LEQUAL,[ph]:i.EQUAL,[Fl]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function he(E,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===ka||v.magFilter===dr||v.magFilter===Kn||v.minFilter===je||v.minFilter===ka||v.minFilter===dr||v.minFilter===Kn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Xt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Xt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Xt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Se[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,zt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==dr&&v.minFilter!==Kn||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ue(E,v){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",k),B(v));let ot=v.source,nt=g.get(ot);nt===void 0&&(nt={},g.set(ot,nt));let dt=it(v);if(dt!==E.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),nt[dt].usedTimes++;let mt=nt[E.__cacheKey];mt!==void 0&&(nt[E.__cacheKey].usedTimes--,mt.usedTimes===0&&Y(v)),E.__cacheKey=dt,E.__webglTexture=nt[dt].texture}return W}function $t(E,v,W){return Math.floor(Math.floor(E/W)/v)}function Re(E,v,W,ot){let dt=E.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,W,ot,v.data);else{dt.sort((D,et)=>D.start-et.start);let mt=0;for(let D=1;D<dt.length;D++){let et=dt[mt],K=dt[D],xt=et.start+et.count,pt=$t(K.start,v.width,4),_t=$t(et.start,v.width,4);K.start<=xt+1&&pt===_t&&$t(K.start+K.count-1,v.width,4)===pt?et.count=Math.max(et.count,K.start+K.count-et.start):(++mt,dt[mt]=K)}dt.length=mt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let D=0,et=dt.length;D<et;D++){let K=dt[D],xt=Math.floor(K.start/4),pt=Math.ceil(K.count/4),_t=xt%v.width,Dt=Math.floor(xt/v.width),Zt=pt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,_t,Dt,Zt,ft,W,ot,v.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function be(E,v,W){let ot=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ot=i.TEXTURE_3D);let nt=ue(E,v),dt=v.source;e.bindTexture(ot,E.__webglTexture,i.TEXTURE0+W);let mt=n.get(dt);if(dt.version!==mt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let ft=se.getPrimaries(se.workingColorSpace),Pt=v.colorSpace===jn?null:se.getPrimaries(v.colorSpace),Jt=v.colorSpace===jn||ft===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=y(v.image,!1,s.maxTextureSize);Q=Ft(v,Q);let vt=r.convert(v.format,v.colorSpace),D=r.convert(v.type),et=R(v.internalFormat,vt,D,v.normalized,v.colorSpace,v.isVideoTexture);he(ot,v);let K,xt=v.mipmaps,pt=v.isVideoTexture!==!0,_t=mt.__version===void 0||nt===!0,Dt=dt.dataReady,Zt=S(v,Q);if(v.isDepthTexture)et=_(v.format===Qn,v.type),_t&&(pt?e.texStorage2D(i.TEXTURE_2D,1,et,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,et,Q.width,Q.height,0,vt,D,null));else if(v.isDataTexture)if(xt.length>0){pt&&_t&&e.texStorage2D(i.TEXTURE_2D,Zt,et,xt[0].width,xt[0].height);for(let ft=0,Pt=xt.length;ft<Pt;ft++)K=xt[ft],pt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,K.width,K.height,vt,D,K.data):e.texImage2D(i.TEXTURE_2D,ft,et,K.width,K.height,0,vt,D,K.data);v.generateMipmaps=!1}else pt?(_t&&e.texStorage2D(i.TEXTURE_2D,Zt,et,Q.width,Q.height),Dt&&Re(v,Q,vt,D)):e.texImage2D(i.TEXTURE_2D,0,et,Q.width,Q.height,0,vt,D,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){pt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,et,xt[0].width,xt[0].height,Q.depth);for(let ft=0,Pt=xt.length;ft<Pt;ft++)if(K=xt[ft],v.format!==Pn)if(vt!==null)if(pt){if(Dt)if(v.layerUpdates.size>0){let Jt=Hl(K.width,K.height,v.format,v.type);for(let bt of v.layerUpdates){let ce=K.data.subarray(bt*Jt/K.data.BYTES_PER_ELEMENT,(bt+1)*Jt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,bt,K.width,K.height,1,vt,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,K.width,K.height,Q.depth,vt,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,et,K.width,K.height,Q.depth,0,K.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,K.width,K.height,Q.depth,vt,D,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,et,K.width,K.height,Q.depth,0,vt,D,K.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{pt&&_t&&e.texStorage2D(i.TEXTURE_2D,Zt,et,xt[0].width,xt[0].height);for(let ft=0,Pt=xt.length;ft<Pt;ft++)K=xt[ft],v.format!==Pn?vt!==null?pt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,K.width,K.height,vt,K.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,et,K.width,K.height,0,K.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,K.width,K.height,vt,D,K.data):e.texImage2D(i.TEXTURE_2D,ft,et,K.width,K.height,0,vt,D,K.data)}else if(v.isDataArrayTexture)if(pt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,et,Q.width,Q.height,Q.depth),Dt)if(v.layerUpdates.size>0){let ft=Hl(Q.width,Q.height,v.format,v.type);for(let Pt of v.layerUpdates){let Jt=Q.data.subarray(Pt*ft/Q.data.BYTES_PER_ELEMENT,(Pt+1)*ft/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,Q.width,Q.height,1,vt,D,Jt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,vt,D,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,Q.width,Q.height,Q.depth,0,vt,D,Q.data);else if(v.isData3DTexture)pt?(_t&&e.texStorage3D(i.TEXTURE_3D,Zt,et,Q.width,Q.height,Q.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,vt,D,Q.data)):e.texImage3D(i.TEXTURE_3D,0,et,Q.width,Q.height,Q.depth,0,vt,D,Q.data);else if(v.isFramebufferTexture){if(_t)if(pt)e.texStorage2D(i.TEXTURE_2D,Zt,et,Q.width,Q.height);else{let ft=Q.width,Pt=Q.height;for(let Jt=0;Jt<Zt;Jt++)e.texImage2D(i.TEXTURE_2D,Jt,et,ft,Pt,0,vt,D,null),ft>>=1,Pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),Q.parentNode!==ft){ft.appendChild(Q),m.add(v),ft.onpaint=Pt=>{let Jt=Pt.changedElements;for(let bt of m)Jt.includes(bt.image)&&(bt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Jt=i.RGBA,bt=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Jt,bt,ce,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(pt&&_t){let ft=X(xt[0]);e.texStorage2D(i.TEXTURE_2D,Zt,et,ft.width,ft.height)}for(let ft=0,Pt=xt.length;ft<Pt;ft++)K=xt[ft],pt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,vt,D,K):e.texImage2D(i.TEXTURE_2D,ft,et,vt,D,K);v.generateMipmaps=!1}else if(pt){if(_t){let ft=X(Q);e.texStorage2D(i.TEXTURE_2D,Zt,et,ft.width,ft.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,D,Q)}else e.texImage2D(i.TEXTURE_2D,0,et,vt,D,Q);C(v)&&v.mipmapsAutoUpdate===!0&&b(ot),mt.__version=dt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ce(E,v,W){if(v.image.length!==6)return;let ot=ue(E,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);let dt=n.get(nt);if(nt.version!==dt.__version||ot===!0){e.activeTexture(i.TEXTURE0+W);let mt=se.getPrimaries(se.workingColorSpace),j=v.colorSpace===jn?null:se.getPrimaries(v.colorSpace),Q=v.colorSpace===jn||mt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let vt=v.isCompressedTexture||v.image[0].isCompressedTexture,D=v.image[0]&&v.image[0].isDataTexture,et=[];for(let bt=0;bt<6;bt++)!vt&&!D?et[bt]=y(v.image[bt],!0,s.maxCubemapSize):et[bt]=D?v.image[bt].image:v.image[bt],et[bt]=Ft(v,et[bt]);let K=et[0],xt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),_t=R(v.internalFormat,xt,pt,v.normalized,v.colorSpace),Dt=v.isVideoTexture!==!0,Zt=dt.__version===void 0||ot===!0,ft=nt.dataReady,Pt=S(v,K);he(i.TEXTURE_CUBE_MAP,v);let Jt;if(v.isDepthTexture){if(_t=_(v.format===Qn,v.type),Zt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,K.width,K.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_t,K.width,K.height,0,xt,pt,null)}else if(vt){Dt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,_t,K.width,K.height);for(let bt=0;bt<6;bt++){Jt=et[bt].mipmaps;for(let ce=0;ce<Jt.length;ce++){let Ee=Jt[ce];v.format!==Pn?xt!==null?Dt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce,0,0,Ee.width,Ee.height,xt,Ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce,_t,Ee.width,Ee.height,0,Ee.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce,0,0,Ee.width,Ee.height,xt,pt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce,_t,Ee.width,Ee.height,0,xt,pt,Ee.data)}}}else{if(Jt=v.mipmaps,Dt&&Zt){Jt.length>0&&Pt++;let bt=X(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,_t,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(D){Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,et[bt].width,et[bt].height,xt,pt,et[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_t,et[bt].width,et[bt].height,0,xt,pt,et[bt].data);for(let ce=0;ce<Jt.length;ce++){let Mn=Jt[ce].image[bt].image;Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce+1,0,0,Mn.width,Mn.height,xt,pt,Mn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce+1,_t,Mn.width,Mn.height,0,xt,pt,Mn.data)}}else{Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,xt,pt,et[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_t,xt,pt,et[bt]);for(let ce=0;ce<Jt.length;ce++){let Ee=Jt[ce];Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce+1,0,0,xt,pt,Ee.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ce+1,_t,xt,pt,Ee.image[bt])}}}C(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),dt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function pe(E,v,W,ot,nt,dt){let mt=r.convert(W.format,W.colorSpace),j=r.convert(W.type),Q=R(W.internalFormat,mt,j,W.normalized,W.colorSpace),vt=n.get(v),D=n.get(W);if(D.__renderTarget=v,!vt.__hasExternalTextures){let et=Math.max(1,v.width>>dt),K=Math.max(1,v.height>>dt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,dt,Q,et,K,v.depth,0,mt,j,null):e.texImage2D(nt,dt,Q,et,K,0,mt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),St(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,D.__webglTexture,0,_e(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,D.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(E,v,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let ot=v.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,dt=_(v.stencilBuffer,nt),mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(v),dt,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(v),dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,E)}else{let ot=v.textures;for(let nt=0;nt<ot.length;nt++){let dt=ot[nt],mt=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),Q=R(dt.internalFormat,mt,j,dt.normalized,dt.colorSpace);St(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(v),Q,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(E,v,W){let ot=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(v.depthTexture);nt.__renderTarget=v;let dt=ot?v.depthTexture.image[0]:v.depthTexture.image;(!nt.__webglTexture||dt.width!==v.width||dt.height!==v.height)&&(dt.width=v.width,dt.height=v.height,v.depthTexture.needsUpdate=!0),ot?wt(v.depthTexture,0):yt(v.depthTexture,0);let mt=nt.__webglTexture,j=_e(v),Q=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,vt=v.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Yn)St(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,Q,mt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,vt,Q,mt,0);else if(v.depthTexture.format===Qn)St(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,Q,mt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,vt,Q,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(E){let v=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let ot=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ot){let nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=ot}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(W)for(let ot=0;ot<6;ot++)Te(v.__webglFramebuffer[ot],E,ot);else E.texture.mipmaps.length>0?Te(v.__webglFramebuffer[0],E,0):Te(v.__webglFramebuffer,E,0);else if(W){v.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ot]),v.__webglDepthbuffer[ot]===void 0)v.__webglDepthbuffer[ot]=i.createRenderbuffer(),Ze(v.__webglDepthbuffer[ot],E,!1);else{let nt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ze(v.__webglDepthbuffer,E,!1);else{let nt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(E,v,W){let ot=n.get(E);v!==void 0&&pe(ot.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Je(E)}function Nt(E){let v=E.texture,W=n.get(E),ot=n.get(v);E.addEventListener("dispose",V),B(E);let nt=E.textures,dt=E.isWebGLCubeRenderTarget===!0,mt=nt.length>1;if(mt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=v.version,a.memory.textures++),dt){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)W.__webglFramebuffer[j][Q]=i.createFramebuffer()}else W.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)W.__webglFramebuffer[j]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(mt)for(let j=0,Q=nt.length;j<Q;j++){let vt=n.get(nt[j]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&St(E)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<nt.length;j++){let Q=nt[j];W.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let vt=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),et=R(Q.internalFormat,vt,D,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),K=_e(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,W.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),he(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)pe(W.__webglFramebuffer[j][Q],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else pe(W.__webglFramebuffer[j],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);C(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let j=0,Q=nt.length;j<Q;j++){let vt=nt[j],D=n.get(vt),et=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(et=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,D.__webglTexture),he(et,vt),pe(W.__webglFramebuffer,E,vt,i.COLOR_ATTACHMENT0+j,et,0),C(vt)&&b(et)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,ot.__webglTexture),he(j,v),v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)pe(W.__webglFramebuffer[Q],E,v,i.COLOR_ATTACHMENT0,j,Q);else pe(W.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,j,0);C(v)?b(j):v.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&Je(E)}function z(E){let v=E.textures;for(let W=0,ot=v.length;W<ot;W++){let nt=v[W];if(C(nt)&&nt.mipmapsAutoUpdate===!0){let dt=P(E),mt=n.get(nt).__webglTexture;e.bindTexture(dt,mt),b(dt),e.unbindTexture()}}}let Ve=[];function me(E){if(E.samples>0){if(St(E)===!1){let v=E.textures,W=E.width,ot=E.height,nt=i.COLOR_BUFFER_BIT,dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(E),j=v.length>1;if(j)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let D=n.get(v[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,W,ot,0,0,W,ot,nt,i.NEAREST),c===!0&&(Ve.length=0,Ve.push(i.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Ve.push(dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let D=n.get(v[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _e(E){return Math.min(s.maxSamples,E.samples)}function St(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ve(E){let v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Ft(E,v){let W=E.colorSpace,ot=E.format,nt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==ks&&W!==jn&&(se.getTransfer(W)===de?(ot!==Pn||nt!==sn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",W)),v}function X(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Gt,this.resetTextureUnits=q,this.getTextureUnits=lt,this.setTextureUnits=Ct,this.setTexture2D=yt,this.setTexture2DArray=Lt,this.setTexture3D=Bt,this.setTextureCube=wt,this.rebindTextures=$e,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=St,this.dispose=Z}function Ig(i,t){function e(n,s=jn){let r,a=se.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===Pn)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===Ja||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Qa||n===ja||n===to||n===eo||n===_r||n===no)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===Qa)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===to)return r.COMPRESSED_R11_EAC;if(n===eo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===no)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===vo||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===So||n===xr||n===bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
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

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new js(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,m=null,d=null,g=null,x=null,T=typeof XRWebGLBinding!="undefined",p=new ic,f={},y=e.getContextAttributes(),C=null,b=null,P=[],R=[],_=new Wt,S=null,B=null,U=new Qe;U.viewport=new Me;let k=new Qe;k.viewport=new Me;let V=[U,k],J=new Ua,F=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let yt=P[it];return yt===void 0&&(yt=new us,P[it]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(it){let yt=P[it];return yt===void 0&&(yt=new us,P[it]=yt),yt.getGripSpace()},this.getHand=function(it){let yt=P[it];return yt===void 0&&(yt=new us,P[it]=yt),yt.getHandSpace()};function tt(it){let yt=R.indexOf(it.inputSource);if(yt===-1)return;let Lt=P[yt];Lt!==void 0&&(Lt.update(it.inputSource,it.frame,l||a),Lt.dispatchEvent({type:it.type,data:it.inputSource}))}function Y(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ut);for(let it=0;it<P.length;it++){let yt=R[it];yt!==null&&(R[it]=null,P[it].disconnect(yt))}F=null,Z=null,p.reset();for(let it in f)delete f[it];if(t.setRenderTarget(C),g=null,d=null,m=null,s=null,b=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),B!==null){let it=B.camera;it.fov=B.fov,it.zoom=B.zoom,it.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Bt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=y.stencil?Qn:Yn,Bt=y.stencil?Di:An);let Xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new hn(d.textureWidth,d.textureHeight,{format:Pn,type:sn,depthTexture:new $n(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new hn(g.framebufferWidth,g.framebufferHeight,{format:Pn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ut(it){for(let yt=0;yt<it.removed.length;yt++){let Lt=it.removed[yt],Bt=R.indexOf(Lt);Bt>=0&&(R[Bt]=null,P[Bt].disconnect(Lt))}for(let yt=0;yt<it.added.length;yt++){let Lt=it.added[yt],Bt=R.indexOf(Lt);if(Bt===-1){for(let Xt=0;Xt<P.length;Xt++)if(Xt>=R.length){R.push(Lt),Bt=Xt;break}else if(R[Xt]===null){R[Xt]=Lt,Bt=Xt;break}if(Bt===-1)break}let wt=P[Bt];wt&&wt.connect(Lt)}}function $(it,yt){yt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(yt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let yt=it.near,Lt=it.far;p.texture!==null&&(p.depthNear>0&&(yt=p.depthNear),p.depthFar>0&&(Lt=p.depthFar)),J.near=k.near=U.near=yt,J.far=k.far=U.far=Lt,(F!==J.near||Z!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),F=J.near,Z=J.far),J.layers.mask=it.layers.mask|6,U.layers.mask=J.layers.mask&-5,k.layers.mask=J.layers.mask&-3;let Bt=it.parent,wt=J.cameras;$(J,Bt);for(let Xt=0;Xt<wt.length;Xt++)$(wt[Xt],Bt);J.projectionMatrix.copy(U.projectionMatrix),J.projectionMatrixInverse.copy(U.projectionMatrixInverse),B===null&&it.isPerspectiveCamera&&(B={camera:it,fov:it.fov,zoom:it.zoom}),q(it,J,Bt)};function q(it,yt,Lt){Lt===null?it.matrix.copy(yt.matrixWorld):(it.matrix.copy(Lt.matrixWorld),it.matrix.invert(),it.matrix.multiply(yt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ua*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=it)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(J)},this.getCameraTexture=function(it){return f[it]};let lt=null;function Ct(it,yt){if(u=yt.getViewerPose(l||a),x=yt,u!==null){let Lt=u.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let Bt=!1;Lt.length!==J.cameras.length&&(J.cameras.length=0,Bt=!0);for(let zt=0;zt<Lt.length;zt++){let he=Lt[zt],ue=null;if(g!==null)ue=g.getViewport(he);else{let Re=m.getViewSubImage(d,he);ue=Re.viewport,zt===0&&(t.setRenderTargetTextures(b,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(b))}let $t=V[zt];$t===void 0&&($t=new Qe,$t.layers.enable(zt),$t.viewport=new Me,V[zt]=$t),$t.matrix.fromArray(he.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(he.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ue.x,ue.y,ue.width,ue.height),zt===0&&(J.matrix.copy($t.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Bt===!0&&J.cameras.push($t)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let zt=m.getDepthInformation(Lt[0]);zt&&zt.isValid&&zt.texture&&p.init(zt,s.renderState)}if(wt&&wt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let zt=0;zt<Lt.length;zt++){let he=Lt[zt].camera;if(he){let ue=f[he];ue||(ue=new js,f[he]=ue);let $t=m.getCameraImage(he);ue.sourceTexture=$t}}}}for(let Lt=0;Lt<P.length;Lt++){let Bt=R[Lt],wt=P[Lt];Bt!==null&&wt!==void 0&&wt.update(Bt,yt,l||a)}lt&&lt(it,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),x=null}let Gt=new $h;Gt.setAnimationLoop(Ct),this.setAnimationLoop=function(it){lt=it},this.dispose=function(){}}},Ng=new ge,au=new qt;au.set(-1,0,0,0,1,0,0,0,1);function Ug(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,kl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,C,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),T(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,y,C):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ge&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ge&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y=t.get(f),C=y.envMap,b=y.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(au),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,C){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=C*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,y){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function T(p,f){let y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={};function a(y,C){let b=C.program;n.uniformBlockBinding(y,b,s[y.id])}function o(y,C){let b=s[y.id];b===void 0&&(x(y),b=c(y),s[y.id]=b,y.addEventListener("dispose",p));let P=C.program;n.updateUBOMapping(y,P);let R=t.render.frame;r[y.id]!==R&&(l(y),r[y.id]=R)}function c(y){let C=i.createBuffer(),b=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,b,P),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function l(y){let C=s[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let R=0,_=b.length;R<_;R++){let S=b[R];if(Array.isArray(S))for(let B=0,U=S.length;B<U;B++)u(S[B],R,B,P);else u(S,R,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,C,b,P){if(d(y,C,b,P)===!0){let R=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let B=0;B<_.length;B++){let U=_[B],k=T(U,!0);m(U,y.__data,S),S+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,y.__data)}}function m(y,C,b){typeof y=="number"||typeof y=="boolean"?C[b]=y:y.isMatrix3?(C[b]=y.elements[0],C[b+1]=y.elements[1],C[b+2]=y.elements[2],C[b+3]=0,C[b+4]=y.elements[3],C[b+5]=y.elements[4],C[b+6]=y.elements[5],C[b+7]=0,C[b+8]=y.elements[6],C[b+9]=y.elements[7],C[b+10]=y.elements[8],C[b+11]=0):ArrayBuffer.isView(y)?C.set(y.subarray(0,C.length-b),b):y.toArray(C,b)}function d(y,C,b,P){let R=y.value,_=C+"_"+b;if(Array.isArray(R)){P[_]===void 0&&(P[_]=[]);let S=P[_],B=!1;for(let U=0;U<R.length;U++)g(R[U],S,U)===!0&&(B=!0);return B}return g(R,P,_)}function g(y,C,b){if(C[b]===void 0)return typeof y=="number"||typeof y=="boolean"?C[b]=y:ArrayBuffer.isView(y)?C[b]=y.slice():C[b]=y.clone(),!0;{let P=C[b];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function x(y){let C=y.uniforms,b=0,P=16;for(let _=0,S=C.length;_<S;_++){let B=Array.isArray(C[_])?C[_]:[C[_]];for(let U=0,k=B.length;U<k;U++){let V=B[U],J=Array.isArray(V.value)?V.value:[V.value],F=Array.isArray(C[_])||Array.isArray(V.value),Z=b;for(let Y=0,ut=J.length;Y<ut;Y++){let $=J[Y],q=T($,F),lt=b%P,Ct=lt%q.boundary,Gt=lt+Ct;b+=Ct,Gt!==0&&P-Gt<q.storage&&(b+=P-Gt),Y===0&&(Z=b),b+=q.storage}let tt=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new tt((b-Z)/Float32Array.BYTES_PER_ELEMENT),V.__offset=Z}}let R=b%P;return R>0&&(b+=P-R),y.__size=b,y.__cache={},this}function T(y,C){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),C===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(y){let C=y.target;C.removeEventListener("dispose",p),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:f}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function Bg(){return Bn===null&&(Bn=new ga(Og,16,16,xi,Cn),Bn.name="DFG_LUT",Bn.minFilter=je,Bn.magFilter=je,Bn.wrapS=Dn,Bn.wrapT=Dn,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Co=class{constructor(t={}){let{canvas:e=_h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:g=sn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let T=g,p=new Set([qa,Xa,Wa]),f=new Set([sn,An,Ss,Di,Va,Ha]),y=new Uint32Array(4),C=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},P=null,R=null,_=[],S=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,k=!1,V=null,J=null,F=null,Z=null;this._outputColorSpace=ke;let tt=0,Y=0,ut=null,$=-1,q=null,lt=new Me,Ct=new Me,Gt=null,it=new Yt(0),yt=0,Lt=e.width,Bt=e.height,wt=1,Xt=null,Se=null,zt=new Me(0,0,Lt,Bt),he=new Me(0,0,Lt,Bt),ue=!1,$t=new fi,Re=new _a,be=!1,Ce=!1,pe=new ge,Ze=new G,Te=new Me,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Nt(){return ut===null?wt:1}let z=n;function Ve(h,w){return e.getContext(h,w)}let me,_e,St,ve,Ft,X,E,v,W,ot,nt,dt,mt,j,Q,vt,D,et,K,xt,pt,_t,Dt;try{let h={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),z===null){let w="webgl2";if(z=Ve(w,h),z===null)throw Ve(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(h){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Ht("WebGLRenderer: "+h.message),h}function Zt(){me=new Jp(z),me.init(),pt=new Ig(z,me),_e=new Bp(z,me,t,pt),St=new Cg(z,me),_e.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),J=z.createFramebuffer(),F=z.createFramebuffer(),Z=z.createFramebuffer(),ve=new Qp(z),Ft=new mg,X=new Pg(z,me,St,Ft,_e,pt,ve),E=new Zp(U),v=new ju(z),_t=new Fp(z,v),W=new $p(z,v,ve,_t),ot=new tm(z,W,v,_t,ve),et=new jp(z,_e,X),Q=new zp(Ft),nt=new pg(U,E,me,_e,_t,Q),dt=new Ug(U,Ft),mt=new _g,j=new bg(me),D=new Up(U,E,St,ot,x,c),vt=new Rg(U,ot,_e),Dt=new Fg(z,ve,_e,St),K=new Op(z,me,ve),xt=new Kp(z,me,ve),ve.programs=nt.programs,U.capabilities=_e,U.extensions=me,U.properties=Ft,U.renderLists=mt,U.shadowMap=vt,U.state=St,U.info=ve}T!==sn&&(B=new nm(T,e.width,e.height,o,s,r));let ft=new sc(U,z);this.xr=ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let h=me.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=me.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(h){h!==void 0&&(wt=h,this.setSize(Lt,Bt,!1))},this.getSize=function(h){return h.set(Lt,Bt)},this.setSize=function(h,w,O=!0){if(ft.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=h,Bt=w,e.width=Math.floor(h*wt),e.height=Math.floor(w*wt),O===!0&&(e.style.width=h+"px",e.style.height=w+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,h,w)},this.getDrawingBufferSize=function(h){return h.set(Lt*wt,Bt*wt).floor()},this.setDrawingBufferSize=function(h,w,O){Lt=h,Bt=w,wt=O,e.width=Math.floor(h*O),e.height=Math.floor(w*O),this.setViewport(0,0,h,w)},this.setEffects=function(h){if(T===sn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(h){for(let w=0;w<h.length;w++)if(h[w].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(h||[])},this.getCurrentViewport=function(h){return h.copy(lt)},this.getViewport=function(h){return h.copy(zt)},this.setViewport=function(h,w,O,L){h.isVector4?zt.set(h.x,h.y,h.z,h.w):zt.set(h,w,O,L),St.viewport(lt.copy(zt).multiplyScalar(Nt()).round())},this.getScissor=function(h){return h.copy(he)},this.setScissor=function(h,w,O,L){h.isVector4?he.set(h.x,h.y,h.z,h.w):he.set(h,w,O,L),St.scissor(Ct.copy(he).multiplyScalar(Nt()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(h){St.setScissorTest(ue=h)},this.setOpaqueSort=function(h){Xt=h},this.setTransparentSort=function(h){Se=h},this.getClearColor=function(h){return h.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(h=!0,w=!0,O=!0){let L=0;if(h){let N=!1;if(ut!==null){let at=ut.texture.format;N=p.has(at)}if(N){let at=ut.texture.type,rt=f.has(at),st=D.getClearColor(),ct=D.getClearAlpha(),Tt=st.r,A=st.g,gt=st.b;rt?(y[0]=Tt,y[1]=A,y[2]=gt,y[3]=ct,z.clearBufferuiv(z.COLOR,0,y)):(C[0]=Tt,C[1]=A,C[2]=gt,C[3]=ct,z.clearBufferiv(z.COLOR,0,C))}else L|=z.COLOR_BUFFER_BIT}w&&(L|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),O&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(h){h.setRenderer(this),V=h},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),D.dispose(),mt.dispose(),j.dispose(),X.dispose(),Ft.dispose(),E.dispose(),ot.dispose(),W.dispose(),_t.dispose(),Dt.dispose(),nt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",As),ft.removeEventListener("sessionend",Fi),mn.stop()};function Pt(h){h.preventDefault(),Vs("WebGLRenderer: Context Lost."),k=!0}function Jt(){Vs("WebGLRenderer: Context Restored."),k=!1;let h=ve.autoReset,w=vt.enabled,O=vt.autoUpdate,L=vt.needsUpdate,N=vt.type;Zt(),ve.autoReset=h,vt.enabled=w,vt.autoUpdate=O,vt.needsUpdate=L,vt.type=N}function bt(h){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function ce(h){let w=h.target;w.removeEventListener("dispose",ce),Ee(w)}function Ee(h){Mn(h),Ft.remove(h)}function Mn(h){let w=Ft.get(h).programs;w!==void 0&&(w.forEach(function(O){nt.releaseProgram(O)}),h.isShaderMaterial&&nt.releaseShaderCache(h))}this.renderBufferDirect=function(h,w,O,L,N,at){w===null&&(w=Je);let rt=N.isMesh&&N.matrixWorld.determinantAffine()<0,st=wr(h,w,O,L,N);St.setMaterial(L,rt);let ct=O.index,Tt=1;if(L.wireframe===!0){if(ct=W.getWireframeAttribute(O),ct===void 0)return;Tt=2}let A=O.drawRange,gt=O.attributes.position,ht=A.start*Tt,Et=(A.start+A.count)*Tt;at!==null&&(ht=Math.max(ht,at.start*Tt),Et=Math.min(Et,(at.start+at.count)*Tt)),ct!==null?(ht=Math.max(ht,0),Et=Math.min(Et,ct.count)):gt!=null&&(ht=Math.max(ht,0),Et=Math.min(Et,gt.count));let It=Et-ht;if(It<0||It===1/0)return;_t.setup(N,L,st,O,ct);let kt,Ut=K;if(ct!==null&&(kt=v.get(ct),Ut=xt,Ut.setIndex(kt)),N.isMesh)L.wireframe===!0?(St.setLineWidth(L.wireframeLinewidth*Nt()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(N.isLine){let le=L.linewidth;le===void 0&&(le=1),St.setLineWidth(le*Nt()),N.isLineSegments?Ut.setMode(z.LINES):N.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else N.isPoints?Ut.setMode(z.POINTS):N.isSprite&&Ut.setMode(z.TRIANGLES);if(N.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let le=N._multiDrawStarts,Mt=N._multiDrawCounts,ie=N._multiDrawCount,ee=ct?v.get(ct).bytesPerElement:1,rn=Ft.get(L).currentProgram.getUniforms();for(let ye=0;ye<ie;ye++)rn.setValue(z,"_gl_DrawID",ye),Ut.render(le[ye]/ee,Mt[ye])}else if(N.isInstancedMesh)Ut.renderInstances(ht,It,N.count);else if(O.isInstancedBufferGeometry){let le=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Mt=Math.min(O.instanceCount,le);Ut.renderInstances(ht,It,Mt)}else Ut.render(ht,It)};function Es(h,w,O,L){V!==null&&h.isNodeMaterial&&V.setObject(L,h),be===!0&&Q.setState(h,O,!1),h.transparent===!0&&h.side===fn&&h.forceSinglePass===!1?(h.side=Ge,h.needsUpdate=!0,ii(h,w,L),h.side=_i,h.needsUpdate=!0,ii(h,w,L),h.side=fn):ii(h,w,L)}this.compile=function(h,w,O=null){O===null&&(O=h),V!==null&&V.renderStart(h,w,O),R=j.get(O),R.init(w),S.push(R),O.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),h!==O&&h.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),R.setupLights(),V!==null&&V.updateLights(R.state.lightsArray),Ce=this.localClippingEnabled,be=Q.init(this.clippingPlanes,Ce),be===!0&&Q.setGlobalState(this.clippingPlanes,w),V!==null&&vt.render(R.state.shadowsArray,O,w);let L=new Set;return h.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let rt=0;rt<at.length;rt++){let st=at[rt];Es(st,O,w,N),L.add(st)}else Es(at,O,w,N),L.add(at)}),R=S.pop(),V!==null&&V.renderEnd(),L},this.compileAsync=function(h,w,O=null){let L=this.compile(h,w,O);return new Promise(N=>{function at(){if(L.forEach(function(rt){let ct=Ft.get(rt).currentProgram;(ct===void 0||ct.isReady())&&L.delete(rt)}),L.size===0){N(h);return}setTimeout(at,10)}me.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ei=null;function br(h){ei&&ei(h)}function As(){mn.stop()}function Fi(){mn.start()}let mn=new $h;mn.setAnimationLoop(br),typeof self!="undefined"&&mn.setContext(self),this.setAnimationLoop=function(h){ei=h,ft.setAnimationLoop(h),h===null?mn.stop():mn.start()},ft.addEventListener("sessionstart",As),ft.addEventListener("sessionend",Fi),this.render=function(h,w){if(w!==void 0&&w.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;V!==null&&V.renderStart(h,w);let O=ft.enabled===!0&&ft.isPresenting===!0,L=B!==null&&(ut===null||O)&&B.begin(U,ut);if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(w),w=ft.getCamera()),h.isScene===!0&&h.onBeforeRender(U,h,w,ut),R=j.get(h,S.length),R.init(w),R.state.textureUnits=X.getTextureUnits(),S.push(R),pe.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?Re.setFromArrayCamera(w):$t.setFromProjectionMatrix(pe,vn,w.reversedDepth),Ce=this.localClippingEnabled,be=Q.init(this.clippingPlanes,Ce),P=mt.get(h,_.length),P.init(),_.push(P),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let rt=U.xr.getDepthSensingMesh();rt!==null&&ni(rt,w,-1/0,U.sortObjects)}ni(h,w,0,U.sortObjects),P.finish(),V!==null&&V.updateLights(R.state.lightsArray),U.sortObjects===!0&&P.sort(Xt,Se),$e=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,$e&&D.addToRenderList(P,h),this.info.autoReset===!0&&this.info.reset(),be===!0&&Q.beginShadows();let N=R.state.shadowsArray;if(vt.render(N,h,w),be===!0&&Q.endShadows(),(L&&B.hasRenderPass())===!1){let rt=P.opaque,st=P.transmissive;if(R.setupLights(),w.isArrayCamera){let ct=w.cameras;if(st.length>0)for(let Tt=0,A=ct.length;Tt<A;Tt++){let gt=ct[Tt];gn(rt,st,h,gt)}$e&&D.render(h);for(let Tt=0,A=ct.length;Tt<A;Tt++){let gt=ct[Tt];Rs(P,h,gt,gt.viewport)}}else st.length>0&&gn(rt,st,h,w),$e&&D.render(h),Rs(P,h,w)}ut!==null&&Y===0&&(X.updateMultisampleRenderTarget(ut),X.updateRenderTargetMipmap(ut)),L&&B.end(U),h.isScene===!0&&h.onAfterRender(U,h,w),_t.resetDefaultState(),$=-1,q=null,S.pop(),S.length>0?(R=S[S.length-1],X.setTextureUnits(R.state.textureUnits),be===!0&&Q.setGlobalState(U.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?P=_[_.length-1]:P=null,V!==null&&V.renderEnd()};function ni(h,w,O,L){if(h.visible===!1)return;if(h.layers.test(w.layers)){if(h.isGroup)O=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(w);else if(h.isLight)R.pushLight(h),h.castShadow&&R.pushShadow(h);else if(h.isSprite){let rt=w.isArrayCamera?Re:$t;if(!h.frustumCulled||h.intersectsFrustum(rt)){L&&Te.setFromMatrixPosition(h.matrixWorld).applyMatrix4(pe);let st=ot.update(h),ct=h.material;ct.visible&&P.push(h,st,ct,O,Te.z,null,w)}}else if(h.isMesh||h.isLine||h.isPoints){let rt=w.isArrayCamera?Re:$t;if(!h.frustumCulled||h.intersectsFrustum(rt)){let st=ot.update(h),ct=h.material;if(L&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Te.copy(h.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Te.copy(st.boundingSphere.center)),Te.applyMatrix4(h.matrixWorld).applyMatrix4(pe)),Array.isArray(ct)){let Tt=st.groups;for(let A=0,gt=Tt.length;A<gt;A++){let ht=Tt[A],Et=ct[ht.materialIndex];Et&&Et.visible&&P.push(h,st,Et,O,Te.z,ht,w)}}else ct.visible&&P.push(h,st,ct,O,Te.z,null,w)}}}let at=h.children;for(let rt=0,st=at.length;rt<st;rt++)ni(at[rt],w,O,L)}function Rs(h,w,O,L){let{opaque:N,transmissive:at,transparent:rt}=h;R.setupLightsView(O),be===!0&&Q.setGlobalState(U.clippingPlanes,O),L&&St.viewport(lt.copy(L)),N.length>0&&Cs(N,w,O),at.length>0&&Cs(at,w,O),rt.length>0&&Cs(rt,w,O),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function gn(h,w,O,L){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[L.id]===void 0){let ht=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[L.id]=new hn(1,1,{generateMipmaps:!0,type:ht?Cn:sn,minFilter:Kn,samples:Math.max(4,_e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let at=R.state.transmissionRenderTarget[L.id],rt=L.viewport||lt;at.setSize(rt.z*U.transmissionResolutionScale,rt.w*U.transmissionResolutionScale);let st=U.getRenderTarget(),ct=U.getActiveCubeFace(),Tt=U.getActiveMipmapLevel();U.setRenderTarget(at),U.getClearColor(it),yt=U.getClearAlpha(),yt<1&&U.setClearColor(16777215,.5),U.clear(),$e&&D.render(O);let A=U.toneMapping;U.toneMapping=On;let gt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),R.setupLightsView(L),be===!0&&Q.setGlobalState(U.clippingPlanes,L),Cs(h,O,L),X.updateMultisampleRenderTarget(at),X.updateRenderTargetMipmap(at),me.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Et=0,It=w.length;Et<It;Et++){let kt=w[Et],{object:Ut,geometry:le,material:Mt,group:ie}=kt;if(Mt.side===fn&&Ut.layers.test(L.layers)){let ee=Mt.side;Mt.side=Ge,Mt.needsUpdate=!0,yi(Ut,O,L,le,Mt,ie),Mt.side=ee,Mt.needsUpdate=!0,ht=!0}}ht===!0&&(X.updateMultisampleRenderTarget(at),X.updateRenderTargetMipmap(at))}U.setRenderTarget(st,ct,Tt),U.setClearColor(it,yt),gt!==void 0&&(L.viewport=gt),U.toneMapping=A}function Cs(h,w,O){let L=w.isScene===!0?w.overrideMaterial:null;for(let N=0,at=h.length;N<at;N++){let rt=h[N],{object:st,geometry:ct,group:Tt}=rt,A=rt.material;A.allowOverride===!0&&L!==null&&(A=L),st.layers.test(O.layers)&&yi(st,w,O,ct,A,Tt)}}function yi(h,w,O,L,N,at){V!==null&&N.isNodeMaterial&&V.setObject(h,N),h.onBeforeRender(U,w,O,L,N,at),h.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),N.onBeforeRender(U,w,O,L,h,at),N.transparent===!0&&N.side===fn&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,U.renderBufferDirect(O,w,L,N,h,at),N.side=_i,N.needsUpdate=!0,U.renderBufferDirect(O,w,L,N,h,at),N.side=fn):U.renderBufferDirect(O,w,L,N,h,at),h.onAfterRender(U,w,O,L,N,at)}function Oi(h){let w=0;for(let O of h)O.texture!==null&&w++;return w}function ii(h,w,O){w.isScene!==!0&&(w=Je);let L=Ft.get(h),N=R.state.lights,at=R.state.shadowsArray,rt=N.state.version,st=nt.getParameters(h,N.state,at,w,O,R.state.lightProbeGridArray),ct=nt.getProgramCacheKey(st),Tt=L.programs;L.environment=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?w.environment:null,L.fog=w.fog;let A=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap;L.envMap=E.get(h.envMap||L.environment,A),L.envMapRotation=L.environment!==null&&h.envMap===null?w.environmentRotation:h.envMapRotation,Tt===void 0&&(h.addEventListener("dispose",ce),Tt=new Map,L.programs=Tt,L.programVariants=new Map);let gt=Tt.get(ct);if(gt!==void 0){if(L.currentProgram===gt&&L.lightsStateVersion===rt)return Tr(h,st),gt}else st.uniforms=nt.getUniforms(h),V!==null&&h.isNodeMaterial&&V.build(h,O,st),h.onBeforeCompile(st,U),gt=nt.acquireProgram(st,ct),Tt.set(ct,gt),L.uniforms=st.uniforms;let ht=L.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ht.clippingPlanes=Q.uniform),Tr(h,st),L.needsLights=I(h),L.lightsStateVersion=rt,L.needsLights&&(ht.ambientLightColor.value=N.state.ambient,ht.lightProbe.value=N.state.probe,ht.sunLights.value=N.state.sun,ht.sunLightShadows.value=N.state.sunShadow,ht.directionalLights.value=N.state.directional,ht.directionalLightShadows.value=N.state.directionalShadow,ht.spotLights.value=N.state.spot,ht.spotLightShadows.value=N.state.spotShadow,ht.rectAreaLights.value=N.state.rectArea,ht.ltc_1.value=N.state.rectAreaLTC1,ht.ltc_2.value=N.state.rectAreaLTC2,ht.pointLights.value=N.state.point,ht.pointLightShadows.value=N.state.pointShadow,ht.hemisphereLights.value=N.state.hemi,ht.sunShadowMatrix.value=N.state.sunShadowMatrix,ht.sunShadowCascade.value=N.state.sunShadowCascade,ht.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ht.spotLightMatrix.value=N.state.spotLightMatrix,ht.spotLightMap.value=N.state.spotLightMap,ht.pointShadowMatrix.value=N.state.pointShadowMatrix),L.numLightProbeGrids=Oi(R.state.lightProbeGridArray),L.currentProgram=gt,L.uniformsList=null,gt}function Mi(h,w,O,L,N){let at=Ft.get(h),rt=at.currentProgram.id+","+L+","+N,st=at.programVariants.get(rt);return st===void 0?(st=ii(h,w,O),at.programVariants.set(rt,st)):(at.currentProgram=st,at.uniformsList=null,at.outputColorSpace=L,at.toneMapping=N),st}function en(h){if(h.uniformsList===null){let w=h.currentProgram.getUniforms();h.uniformsList=bs.seqWithValue(w.seq,h.uniforms)}return h.uniformsList}function Tr(h,w){let O=Ft.get(h);O.outputColorSpace=w.outputColorSpace,O.batching=w.batching,O.batchingColor=w.batchingColor,O.instancing=w.instancing,O.instancingColor=w.instancingColor,O.instancingMorph=w.instancingMorph,O.skinning=w.skinning,O.morphTargets=w.morphTargets,O.morphNormals=w.morphNormals,O.morphColors=w.morphColors,O.morphTargetsCount=w.morphTargetsCount,O.numClippingPlanes=w.numClippingPlanes,O.numIntersection=w.numClipIntersection,O.vertexAlphas=w.vertexAlphas,O.vertexTangents=w.vertexTangents,O.toneMapping=w.toneMapping}function wr(h,w,O,L,N){w.isScene!==!0&&(w=Je),X.resetTextureUnits();let at=w.fog,rt=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?w.environment:null,st=ut===null?U.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:se.workingColorSpace,ct=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,Tt=E.get(L.envMap||rt,ct),A=L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,gt=!!O.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ht=!!O.morphAttributes.position,Et=!!O.morphAttributes.normal,It=!!O.morphAttributes.color,kt=On;L.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(kt=U.toneMapping);let Ut=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=Ut!==void 0?Ut.length:0,Mt=Ft.get(L),ie=R.state.lights;if(be===!0&&(Ce===!0||h!==q)){let Ot=h===q&&L.id===$;Q.setState(L,h,Ot)}let ee=!1,rn=!1;L.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==ie.state.version||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==Tt||L.fog===!0&&Mt.fog!==at||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==A||Mt.vertexTangents!==gt||Mt.morphTargets!==ht||Mt.morphNormals!==Et||Mt.morphColors!==It||Mt.morphTargetsCount!==le||Mt.numLightProbeGrids!==Oi(R.state.lightProbeGridArray)?ee=!0:(Mt.outputColorSpace!==st||Mt.toneMapping!==kt)&&(rn=!0):(ee=!0,Mt.__version=L.version);let ye=Mt.currentProgram;(ee===!0||rn===!0)&&(ye=rn===!0?Mi(L,w,N,st,kt):ii(L,w,N),V&&L.isNodeMaterial&&V.onUpdateProgram(L,ye,Mt));let Si=!1,In=!1,an=!1,re=ye.getUniforms(),De=Mt.uniforms;if(St.useProgram(ye.program)&&(Si=!0,In=!0,an=!0),L.id!==$&&($=L.id,In=!0),Si||q!==h){St.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),re.setValue(z,"projectionMatrix",h.projectionMatrix),re.setValue(z,"viewMatrix",h.matrixWorldInverse);let Qt=re.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,Ze.setFromMatrixPosition(h.matrixWorld)),_e.logarithmicDepthBuffer&&re.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&re.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),q!==h&&(q=h,In=!0,an=!0)}if(Mt.needsLights&&(ie.state.sunShadowMap.length>0&&re.setValue(z,"sunShadowMap",ie.state.sunShadowMap,X),ie.state.directionalShadowMap.length>0&&re.setValue(z,"directionalShadowMap",ie.state.directionalShadowMap,X),ie.state.spotShadowMap.length>0&&re.setValue(z,"spotShadowMap",ie.state.spotShadowMap,X),ie.state.pointShadowMap.length>0&&re.setValue(z,"pointShadowMap",ie.state.pointShadowMap,X)),N.isSkinnedMesh){re.setOptional(z,N,"bindMatrix"),re.setOptional(z,N,"bindMatrixInverse");let Ot=N.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),re.setValue(z,"boneTexture",Ot.boneTexture,X))}N.isBatchedMesh&&(re.setOptional(z,N,"batchingTexture"),re.setValue(z,"batchingTexture",N._matricesTexture,X),re.setOptional(z,N,"batchingIdTexture"),re.setValue(z,"batchingIdTexture",N._indirectTexture,X),re.setOptional(z,N,"batchingColorTexture"),N._colorsTexture!==null&&re.setValue(z,"batchingColorTexture",N._colorsTexture,X));let Rt=O.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&et.update(N,O,ye),(In||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,re.setValue(z,"receiveShadow",N.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&w.environment!==null&&(De.envMapIntensity.value=w.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Bg()),In){if(re.setValue(z,"toneMappingExposure",U.toneMappingExposure),Mt.needsLights&&M(De,an),at&&L.fog===!0&&dt.refreshFogUniforms(De,at),dt.refreshMaterialUniforms(De,L,wt,Bt,R.state.transmissionRenderTarget[h.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let Ot=b,Qt=0;for(let jt of R.state.lightProbeGridArray)jt.texture!==null&&(Ot.textures[Qt]=jt.texture,Ot.min[Qt]=jt.boundingBox.min,Ot.max[Qt]=jt.boundingBox.max,Ot.resolution[Qt]=jt.resolution,Qt++);for(let jt in Ot)Ot[jt].length=Qt;De.probesSH.value=Ot.textures,De.probesMin.value=Ot.min,De.probesMax.value=Ot.max,De.probesResolution.value=Ot.resolution}bs.upload(z,en(Mt),De,X)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(bs.upload(z,en(Mt),De,X),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&re.setValue(z,"center",N.center),re.setValue(z,"modelViewMatrix",N.modelViewMatrix),re.setValue(z,"normalMatrix",N.normalMatrix),re.setValue(z,"modelMatrix",N.matrixWorld),L.uniformsGroups!==void 0){let Ot=L.uniformsGroups;for(let Qt=0,jt=Ot.length;Qt<jt;Qt++){let ne=Ot[Qt];Dt.update(ne,ye),Dt.bind(ne,ye)}}return ye}function M(h,w){h.ambientLightColor.needsUpdate=w,h.lightProbe.needsUpdate=w,h.sunLights.needsUpdate=w,h.sunLightShadows.needsUpdate=w,h.directionalLights.needsUpdate=w,h.directionalLightShadows.needsUpdate=w,h.pointLights.needsUpdate=w,h.pointLightShadows.needsUpdate=w,h.spotLights.needsUpdate=w,h.spotLightShadows.needsUpdate=w,h.rectAreaLights.needsUpdate=w,h.hemisphereLights.needsUpdate=w}function I(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(h,w,O){let L=Ft.get(h);L.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Ft.get(h.texture).__webglTexture=w,Ft.get(h.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:O,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,w){let O=Ft.get(h);O.__webglFramebuffer=w,O.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(h,w=0,O=0){ut=h,tt=w,Y=O;let L=null,N=!1,at=!1;if(h){let st=Ft.get(h);if(st.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(z.FRAMEBUFFER,st.__webglFramebuffer),lt.copy(h.viewport),Ct.copy(h.scissor),Gt=h.scissorTest,St.viewport(lt),St.scissor(Ct),St.setScissorTest(Gt),$=-1;return}else if(st.__webglFramebuffer===void 0)X.setupRenderTarget(h);else if(st.__hasExternalTextures)X.rebindTextures(h,Ft.get(h.texture).__webglTexture,Ft.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let A=h.depthTexture;if(st.__boundDepthTexture!==A){if(A!==null&&Ft.has(A)&&(h.width!==A.image.width||h.height!==A.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(h)}}let ct=h.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(at=!0);let Tt=Ft.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Tt[w])?L=Tt[w][O]:L=Tt[w],N=!0):h.samples>0&&X.useMultisampledRTT(h)===!1?L=Ft.get(h).__webglMultisampledFramebuffer:Array.isArray(Tt)?L=Tt[O]:L=Tt,lt.copy(h.viewport),Ct.copy(h.scissor),Gt=h.scissorTest}else lt.copy(zt).multiplyScalar(wt).floor(),Ct.copy(he).multiplyScalar(wt).floor(),Gt=ue;if(O!==0&&(L=J),St.bindFramebuffer(z.FRAMEBUFFER,L)&&St.drawBuffers(h,L),St.viewport(lt),St.scissor(Ct),St.setScissorTest(Gt),N){let st=Ft.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+w,st.__webglTexture,O)}else if(at){let st=w;for(let ct=0;ct<h.textures.length;ct++){let Tt=Ft.get(h.textures[ct]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ct,Tt.__webglTexture,O,st)}}else if(h!==null&&O!==0){let st=Ft.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,st.__webglTexture,O)}$=-1};function H(h){let w=Ft.get(h);return(w.__readFormat!==h.format||w.__readType!==h.type)&&(w.__readFormat=h.format,w.__readType=h.type,w.__formatReadable=_e.textureFormatReadable(h.format),w.__typeReadable=_e.textureTypeReadable(h.type)),w}this.readRenderTargetPixels=function(h,w,O,L,N,at,rt,st=0){if(!(h&&h.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=Ft.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&rt!==void 0&&(ct=ct[rt],Array.isArray(ct)&&(ct=ct[0])),ct){St.bindFramebuffer(z.FRAMEBUFFER,ct);try{let Tt=h.textures[st],A=Tt.format,gt=Tt.type;h.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+st);let ht=H(Tt);if(ht.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ht.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=h.width-L&&O>=0&&O<=h.height-N&&z.readPixels(w,O,L,N,pt.convert(A),pt.convert(gt),at)}finally{let Tt=ut!==null?Ft.get(ut).__webglFramebuffer:null;St.bindFramebuffer(z.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(h,w,O,L,N,at,rt,st=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=Ft.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&rt!==void 0&&(ct=ct[rt],Array.isArray(ct)&&(ct=ct[0])),ct)if(w>=0&&w<=h.width-L&&O>=0&&O<=h.height-N){St.bindFramebuffer(z.FRAMEBUFFER,ct);let Tt=h.textures[st],A=Tt.format,gt=Tt.type;h.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+st);let ht=H(Tt);if(ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,at.byteLength,z.STREAM_READ),z.readPixels(w,O,L,N,pt.convert(A),pt.convert(gt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let It=ut!==null?Ft.get(ut).__webglFramebuffer:null;St.bindFramebuffer(z.FRAMEBUFFER,It);let kt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vh(z,kt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,at),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Et),z.deleteSync(kt),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,w=null,O=0){let L=Math.pow(2,-O),N=Math.floor(h.image.width*L),at=Math.floor(h.image.height*L),rt=w!==null?w.x:0,st=w!==null?w.y:0;X.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,O,0,0,rt,st,N,at),St.unbindTexture()},this.copyTextureToTexture=function(h,w,O=null,L=null,N=0,at=0){let rt,st,ct,Tt,A,gt,ht,Et,It,kt=h.isCompressedTexture?h.mipmaps[at]:h.image;if(O!==null)rt=O.max.x-O.min.x,st=O.max.y-O.min.y,ct=O.isBox3?O.max.z-O.min.z:1,Tt=O.min.x,A=O.min.y,gt=O.isBox3?O.min.z:0;else{let re=Math.pow(2,-N);rt=Math.floor(kt.width*re),st=Math.floor(kt.height*re),h.isDataArrayTexture?ct=kt.depth:h.isData3DTexture?ct=Math.floor(kt.depth*re):ct=1,Tt=0,A=0,gt=0}L!==null?(ht=L.x,Et=L.y,It=L.z):(ht=0,Et=0,It=0);let Ut=pt.convert(w.format),le=pt.convert(w.type),Mt;w.isData3DTexture?(X.setTexture3D(w,0),Mt=z.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(X.setTexture2DArray(w,0),Mt=z.TEXTURE_2D_ARRAY):(X.setTexture2D(w,0),Mt=z.TEXTURE_2D),St.activeTexture(z.TEXTURE0),St.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,w.flipY),St.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),St.pixelStorei(z.UNPACK_ALIGNMENT,w.unpackAlignment);let ie=St.getParameter(z.UNPACK_ROW_LENGTH),ee=St.getParameter(z.UNPACK_IMAGE_HEIGHT),rn=St.getParameter(z.UNPACK_SKIP_PIXELS),ye=St.getParameter(z.UNPACK_SKIP_ROWS),Si=St.getParameter(z.UNPACK_SKIP_IMAGES);St.pixelStorei(z.UNPACK_ROW_LENGTH,kt.width),St.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kt.height),St.pixelStorei(z.UNPACK_SKIP_PIXELS,Tt),St.pixelStorei(z.UNPACK_SKIP_ROWS,A),St.pixelStorei(z.UNPACK_SKIP_IMAGES,gt);let In=h.isDataArrayTexture||h.isData3DTexture,an=w.isDataArrayTexture||w.isData3DTexture;if(h.isDepthTexture){let re=Ft.get(h),De=Ft.get(w),Rt=Ft.get(re.__renderTarget),Ot=Ft.get(De.__renderTarget);St.bindFramebuffer(z.READ_FRAMEBUFFER,Rt.__webglFramebuffer),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Qt=0;Qt<ct;Qt++)In&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(h).__webglTexture,N,gt+Qt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(w).__webglTexture,at,It+Qt)),z.blitFramebuffer(Tt,A,Tt+rt,A+st,ht,Et,ht+rt,Et+st,z.DEPTH_BUFFER_BIT,z.NEAREST);St.bindFramebuffer(z.READ_FRAMEBUFFER,null),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(N!==0||h.isRenderTargetTexture||Ft.has(h)){let re=Ft.get(h),De=Ft.get(w);St.bindFramebuffer(z.READ_FRAMEBUFFER,F),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,Z);for(let Rt=0;Rt<ct;Rt++)In?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,re.__webglTexture,N,gt+Rt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,re.__webglTexture,N),an?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,at,It+Rt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,De.__webglTexture,at),N!==0?z.blitFramebuffer(Tt,A,Tt+rt,A+st,ht,Et,ht+rt,Et+st,z.COLOR_BUFFER_BIT,z.NEAREST):an?z.copyTexSubImage3D(Mt,at,ht,Et,It+Rt,Tt,A,rt,st):z.copyTexSubImage2D(Mt,at,ht,Et,Tt,A,rt,st);St.bindFramebuffer(z.READ_FRAMEBUFFER,null),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else an?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(Mt,at,ht,Et,It,rt,st,ct,Ut,le,kt.data):w.isCompressedArrayTexture?z.compressedTexSubImage3D(Mt,at,ht,Et,It,rt,st,ct,Ut,kt.data):z.texSubImage3D(Mt,at,ht,Et,It,rt,st,ct,Ut,le,kt):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,at,ht,Et,rt,st,Ut,le,kt.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,at,ht,Et,kt.width,kt.height,Ut,kt.data):z.texSubImage2D(z.TEXTURE_2D,at,ht,Et,rt,st,Ut,le,kt);St.pixelStorei(z.UNPACK_ROW_LENGTH,ie),St.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),St.pixelStorei(z.UNPACK_SKIP_PIXELS,rn),St.pixelStorei(z.UNPACK_SKIP_ROWS,ye),St.pixelStorei(z.UNPACK_SKIP_IMAGES,Si),at===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&z.generateMipmap(Mt),St.unbindTexture()},this.initRenderTarget=function(h){Ft.get(h).__webglFramebuffer===void 0&&X.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?X.setTextureCube(h,0):h.isData3DTexture?X.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?X.setTexture2DArray(h,0):X.setTexture2D(h,0),St.unbindTexture()},this.resetState=function(){tt=0,Y=0,ut=null,St.reset(),_t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var rc={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},ou=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}],lu=[{a:"chiyo",b:"taizo",talks:[[["\u5343\u4EE3","\u5927\u9020\uFF0C\u4F60\u8D70\u592A\u6162\u4E86\uFF0C\u6211\u7684\u6E6F\u90FD\u8981\u6DBC\u4E86\u3002"],["\u5927\u9020","\u6211\u5728\u6B23\u8CDE\u8857\u666F\u3002"],["\u5343\u4EE3","\u4F60\u6B23\u8CDE\u4E86\u56DB\u5341\u5E74\uFF0C\u9084\u6C92\u770B\u5920\uFF1F"]],[["\u5927\u9020","\u8001\u592A\u5A46\uFF0C\u4ECA\u5929\u5403\u54EA\u5BB6\uFF1F"],["\u5343\u4EE3","\u9084\u80FD\u54EA\u5BB6\uFF0C\u8001\u4F4D\u5B50\u3002\u4F60\u4ED8\u9322\u3002"],["\u5927\u9020","\u2026\u2026\u4E0A\u6B21\u4E5F\u662F\u6211\u4ED8\u3002"],["\u5343\u4EE3","\u6240\u4EE5\u624D\u53EB\u8001\u4F4D\u5B50\u554A\u3002"]],[["\u5343\u4EE3","\uFF08\u5F9E\u53E3\u888B\u638F\u51FA\u4E00\u9846\u7CD6\uFF09\u62FF\u53BB\u3002"],["\u5927\u9020","\u6211\u4E0D\u5403\u751C\u7684\u3002"],["\u5343\u4EE3","\u62FF\u8457\uFF0C\u4E0D\u662F\u7D66\u4F60\u5403\u7684\uFF0C\u662F\u7D66\u4F60\u53E3\u888B\u653E\u7684\u3002"]]]},{a:"soichiro",b:"reiko",talks:[[["\u5B97\u4E00\u90CE","\u9E97\u5B50\u5C0F\u59D0\uFF0C\u4ECA\u665A\u7684\u6708\u8272\uFF0C\u4EE4\u4EBA\u60F3\u8D77\u674E\u767D\u7684\u2026\u2026"],["\u9E97\u5B50","\u6559\u6388\uFF0C\u4ECA\u665A\u6211\u53EA\u60F3\u807D\u5A01\u58EB\u5FCC\u7684\u8072\u97F3\u3002"],["\u5B97\u4E00\u90CE","\u2026\u2026\u90A3\u6211\u4E5F\u807D\u3002"]],[["\u9E97\u5B50","\u6559\u6388\uFF0C\u4F60\u6BCF\u6B21\u90FD\u300C\u6070\u597D\u300D\u8D70\u5728\u6211\u5F8C\u9762\u4E09\u6B65\u3002"],["\u5B97\u4E00\u90CE","\u9019\u3001\u9019\u662F\u6563\u6B65\u7684\u6700\u4F73\u9593\u8DDD\uFF01\u5B78\u8853\u4E0A\u2026\u2026"],["\u9E97\u5B50","\u54CE\u5440\uFF0C\u5B78\u8853\u3002"]]]}];var ti="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",Ae=(i,t)=>i+Math.random()*(t-i),Ye=(i,t,e)=>Math.max(t,Math.min(e,i)),ws=(i,t,e)=>i+(t-i)*e,vi=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},zg=i=>{for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i};function pn(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new ps(s);return r.colorSpace=ke,r.anisotropy=4,n&&(r.wrapS=r.wrapT=rs),r}var te=(i,t)=>new nr(Object.assign({color:i},t)),we=(i,t)=>new yn(Object.assign({color:i},t));function Lo(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var kg=`
.tw3hint{position:absolute;left:50%;bottom:34px;transform:translateX(-50%);background:#2a1810d9;color:#fff3d6;border:2px solid #ffd27a;border-radius:999px;padding:7px 18px;font-size:15px;font-weight:700;pointer-events:none;opacity:0;transition:opacity .2s;white-space:nowrap}
.tw3hint.on{opacity:1}
.tw3j{position:absolute;width:110px;height:110px;margin:-55px 0 0 -55px;border-radius:50%;background:#ffffff1f;border:3px solid #ffffff99;pointer-events:none;display:none}
.tw3j i{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#ffffffd9}
.tw3cam{position:absolute;right:max(16px,env(safe-area-inset-right));bottom:30px;display:flex;gap:18px}
.tw3cam button{width:88px;height:88px;border-radius:50%;border:4px solid #ffffffcc;background:#2a1810cc;color:#fff3d6;font-size:44px;line-height:1;padding:0;touch-action:none;user-select:none;-webkit-user-select:none}
.tw3cam button:active{background:#6b3a1ab3}
.tw3fade{position:absolute;inset:0;background:#0a0604;opacity:0;pointer-events:none}
.tw3card{position:absolute;bottom:30px;left:12px;width:min(460px,calc(46% - 6px));background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:16px;box-shadow:0 6px 0 #0006;padding:8px 10px 8px;display:none;font-size:15px;line-height:1.45}
.tw3card.r{left:auto;right:12px}
.tw3card.on{display:block;animation:tw3pop .16s ease-out}
@keyframes tw3pop{from{transform:scale(.94);opacity:0}to{transform:scale(1);opacity:1}}
@media (max-aspect-ratio:3/2){.tw3card{width:calc(100% - 24px)}}
.tw3h{display:flex;align-items:center;gap:10px;margin-bottom:6px}
.tw3av{flex:none;width:44px;height:44px;border-radius:50%;border:2px solid #2a1810;background-color:#e9d3a4;background-repeat:no-repeat;background-size:230% auto;background-position:50% 3%}
.tw3nm{flex:1;min-width:0;line-height:1.25}.tw3nm b{font-size:16px;display:block}.tw3nm small{font-size:12px;opacity:.7}
.tw3k{flex:none;border:2px solid #2a1810;border-radius:999px;padding:1px 8px;font-size:12px;font-weight:700;white-space:nowrap}
.tw3x{flex:none;width:72px;height:72px;border-radius:50%;border:4px solid #2a1810;background:#fff;font-size:44px;line-height:1;padding:0;color:#3a1e0c}
.tw3t{font-size:16px}.tw3t.mind{font-style:italic;color:#4a3a78}
.tw3t p{margin:2px 0}.tw3t p b{margin-right:6px;color:#8a3a14}
.tw3b{display:flex;justify-content:flex-end;margin-top:4px}
.tw3n{border:2px solid #2a1810;border-radius:999px;background:#ffd27a;color:#3a1e0c;font-weight:800;font-size:22px;padding:0 32px;min-height:72px}
.tw3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff3d6;font-size:16px;background:#140f2e}
`;function Gg(i){let t=i.cv,e=i.root,n=i.txt||{};if(!document.getElementById("tw3css")){let M=document.createElement("style");M.id="tw3css",M.textContent=kg,document.head.appendChild(M)}let s=new Co({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance"});s.setClearColor(1709366,1);let r=new Xs;r.fog=new Ws(4861781,38,130);let a=new Qe(42,2,.3,600),o=[],c=new sr,l=(M,I)=>c.load(M,H=>{H.colorSpace=ke,H.anisotropy=4,I&&I(H)}),u=i.shops,m=8,d=2.6,g=m+d,x=u.length;u.forEach((M,I)=>{M.x0=I*g,M.dx=M.x0+m/2});let T=(x-1)*g+m,p=-26,f=T+26,y=-17,C=T+17,b=.95,P=11.7,R=3.7,_=10.3,S=new Ci(300,24,16);{let M=[],I=S.attributes.position,H=new Yt("#141235"),h=new Yt("#6b3a4a"),w=new Yt("#3a2350"),O=new Yt;for(let L=0;L<I.count;L++){let N=I.getY(L)/300;N>.28?O.copy(w).lerp(H,Ye((N-.28)/.55,0,1)):O.copy(h).lerp(w,Ye((N+.05)/.33,0,1)),M.push(O.r,O.g,O.b)}S.setAttribute("color",new fe(M,3))}let B=new oe(S,new yn({vertexColors:!0,side:Ge,fog:!1,depthWrite:!1}));B.renderOrder=-10,r.add(B);{let M=[],I=vi(7);for(let w=0;w<260;w++){let O=I()*Math.PI*2,L=.18+I()*1.2,N=280;M.push(Math.cos(O)*Math.cos(L)*N,Math.sin(L)*N,Math.sin(O)*Math.cos(L)*N)}let H=new ze;H.setAttribute("position",new fe(M,3));let h=new $s(H,new fs({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1}));B.add(h)}let U=pn(128,128,M=>{M.fillStyle="#fdf2c8",M.beginPath(),M.arc(64,64,34,0,7),M.fill(),M.globalCompositeOperation="destination-out",M.beginPath(),M.arc(78,54,30,0,7),M.fill()}),k=new di(new Jn({map:U,fog:!1,depthWrite:!1}));k.scale.set(34,34,1),k.position.set(-120,150,-240),B.add(k),r.add(new ar(11577070,6967384,1.25));let V=new cr(16769720,.55);V.position.set(-8,14,12),r.add(V);let J=pn(128,128,M=>{let I=M.createRadialGradient(64,64,2,64,64,64);I.addColorStop(0,"rgba(255,214,140,1)"),I.addColorStop(.4,"rgba(255,170,90,.35)"),I.addColorStop(1,"rgba(255,150,80,0)"),M.fillStyle=I,M.fillRect(0,0,128,128)}),F=pn(64,64,M=>{let I=M.createRadialGradient(32,32,2,32,32,32);I.addColorStop(0,"rgba(0,0,0,.75)"),I.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=I,M.fillRect(0,0,64,64)}),Z=pn(256,256,(M,I,H)=>{M.fillStyle="#5b4c48",M.fillRect(0,0,I,H);let h=vi(3);for(let w=0;w<4;w++)for(let O=0;O<4;O++){let L=Math.floor(h()*14)-7;M.fillStyle=`rgb(${91+L},${76+L},${72+L})`,M.fillRect(O*64+2,w*64+2,60,60)}},1),tt=pn(256,256,(M,I,H)=>{M.fillStyle="#2e2a32",M.fillRect(0,0,I,H);let h=vi(5);for(let w=0;w<700;w++){let O=36+Math.floor(h()*22);M.fillStyle=`rgb(${O},${O-3},${O+4})`,M.fillRect(h()*I,h()*H,2,2)}},1),Y=pn(128,128,(M,I,H)=>{M.fillStyle="#26402f",M.fillRect(0,0,I,H);let h=vi(9);for(let w=0;w<400;w++)M.fillStyle=h()<.5?"#2e4c37":"#1f3727",M.fillRect(h()*I,h()*H,3,3)},1),ut=[11,23,37,51].map(M=>pn(128,256,(I,H,h)=>{let w=vi(M);I.fillStyle="#1b1636",I.fillRect(0,0,H,h);for(let O=0;O<16;O++)for(let L=0;L<8;L++){let N=w()<.33;I.fillStyle=N?w()<.5?"#ffd98a":"#ffbe68":"#272043",I.fillRect(L*16+3,O*16+3,10,10)}},1));function $(M,I,H){let h=M.clone();return h.needsUpdate=!0,h.repeat.set(I,H),h}function q(M,I,H,h,w,O,L,N){let at=new oe(new un(M,I,H),h);return at.position.set(w,O,L),(N||r).add(at),at}function lt(M,I,H,h,w,O){let L=new di(new Jn({map:J,blending:ys,transparent:!0,depthWrite:!1,opacity:w}));return L.scale.set(h,h,1),L.position.set(M,I,H),(O||r).add(L),L}let Ct=f-p,Gt=(f+p)/2;{let M=new oe(new tn(900,900),te("#1f1a2c"));M.rotation.x=-Math.PI/2,M.position.y=-.05,r.add(M)}for(let[M,I]of[[0,3.6],[10.4,14]]){let H=I-M,h=new oe(new un(Ct,.18,H),te("#ffffff",{map:$(Z,Ct/4,H/4)}));h.position.set(Gt,.09,M+H/2),r.add(h),q(Ct,.2,.22,te("#8a7a70"),Gt,.1,M===0?3.7:10.3)}{let M=new oe(new tn(Ct,_-R-.2),te("#ffffff",{map:$(tt,Ct/6,1.2),emissive:"#1c1826"}));M.rotation.x=-Math.PI/2,M.position.set(Gt,.02,(R+_)/2),r.add(M)}{let M=new oe(new tn(Ct,12),te("#ffffff",{map:$(Y,Ct/5,2.4)}));M.rotation.x=-Math.PI/2,M.position.set(Gt,.03,20),r.add(M)}{let M=new oe(new tn(Ct,8),te("#17131f"));M.rotation.x=-Math.PI/2,M.position.set(Gt,.01,-11),r.add(M)}let it=we("#d9d2bd");for(let M=p+2;M<f-2;M+=3.4)q(1.7,.03,.16,it,M,.045,7);for(let M of[1,Math.max(2,x-2)]){let I=M*g-d/2;for(let H=-3;H<=3;H++)q(.55,.03,_-R-.5,it,I+H*1.05,.045,7)}function yt(M,I,H,h,w,O,L){let N=ut[O%4],at=(ct,Tt)=>we(L||"#ffffff",{map:$(N,ct,Tt)}),rt=we("#1c1736"),st=new oe(new un(H,h,w),[rt,rt,we("#18132e"),rt,at(H/5,h/6),at(H/5,h/6)]);return st.position.set(M,h/2,I),r.add(st),st}let Lt;{let M=vi(21);for(let h=p-20;h<f+20;h+=9+M()*6)yt(h,-15-M()*3,8+M()*6,13+M()*16,9,Math.floor(M()*4));for(let h=p-40;h<f+40;h+=13+M()*9)yt(h,-38-M()*6,11+M()*8,26+M()*24,11,Math.floor(M()*4),"#9a90b8");for(let h=p-40;h<f+40;h+=11+M()*8)yt(h,36+M()*4,10+M()*7,12+M()*20,9,Math.floor(M()*4));for(let h=p-40;h<f+40;h+=15+M()*10)yt(h,62+M()*6,12+M()*8,24+M()*30,11,Math.floor(M()*4),"#9a90b8");yt(p-4,3,8,16,34,1),yt(f+4,3,8,15,34,2);let I=yt(f+30,-50,9,70,9,3,"#b8aed0"),H=lt(f+30,72,-50,6,1,r);H.material.color.set("#ff3a2a"),Lt=H}let Bt={};Object.entries(i.win||{}).forEach(([M,I])=>{let H=new Image;H.onload=()=>u.forEach(h=>h.repaint&&h.id===M&&h.repaint()),H.src=I,Bt[M]=H});let wt=[],Xt=[],Se=[],zt=[];function he(M){let I=i.looks[M.id]||i.looks.iz,H=I.yatai?4.9:6.2,h=m,w=7,O=M.dx,L="#2a1810",N=new Le;N.position.set(O,0,0),r.add(N);let at=q(h,H,w,te(I.wall),0,H/2,-w/2,N);at.userData.shop=M,wt.push(at);let rt=64,st=h*rt,ct=Math.round(H*rt),Tt=document.createElement("canvas");Tt.width=st,Tt.height=ct;let A=Tt.getContext("2d"),gt=3*rt;M.repaint=()=>{A.clearRect(0,0,st,ct),A.fillStyle=I.wall,A.fillRect(0,0,st,ct),A.fillStyle=I.wall2;for(let ne=1;ne<8;ne++)A.fillRect(ne*st/8-3,0,6,ct);A.fillStyle="#3a2416",A.fillRect(0,ct-gt-8,st,16);let Rt=(ne,Pe,_n,nn,Do)=>{A.save(),A.beginPath(),A.rect(ne,Pe,_n,nn),A.clip();let si=Do&&Bt[M.id];if(si&&si.complete&&si.naturalWidth){let Bi=si.naturalWidth,No=si.naturalHeight,cu=No*.6*_n/nn,hu=ne<st/2?Bi*.18:Bi*.62;A.drawImage(si,hu,No*.2,cu,No*.6,ne,Pe,_n,nn),A.fillStyle="rgba(255,170,80,.18)",A.fillRect(ne,Pe,_n,nn)}else{let Bi=A.createLinearGradient(0,Pe,0,Pe+nn);Bi.addColorStop(0,I.g?I.g[0]:"#ffd88a"),Bi.addColorStop(1,I.g?I.g[1]:"#e59a45"),A.fillStyle=Bi,A.fillRect(ne,Pe,_n,nn)}M.own||(A.fillStyle="rgba(20,12,8,.6)",A.fillRect(ne,Pe,_n,nn)),A.restore(),A.strokeStyle=L,A.lineWidth=4,A.strokeRect(ne,Pe,_n,nn),A.lineWidth=3,A.strokeStyle="rgba(42,24,16,.8)",A.beginPath(),A.moveTo(ne+_n/2,Pe),A.lineTo(ne+_n/2,Pe+nn),A.moveTo(ne,Pe+nn/2),A.lineTo(ne+_n,Pe+nn/2),A.stroke()};H>5.5&&(Rt(1*rt,12,2*rt,88,!1),Rt(5*rt,12,2*rt,88,!1));let Ot=ct-2.5*rt,Qt=1.6*rt;Rt(.45*rt,Ot,1.95*rt,Qt,!0),Rt(5.6*rt,Ot,1.95*rt,Qt,!0),A.fillStyle=I.wall2,A.fillRect(0,ct-.9*rt,st,.9*rt),A.strokeStyle="rgba(0,0,0,.25)",A.lineWidth=2;for(let ne=1;ne<4;ne++)A.beginPath(),A.moveTo(0,ct-.9*rt+ne*.225*rt),A.lineTo(st,ct-.9*rt+ne*.225*rt),A.stroke();let jt=A.createLinearGradient(0,ct-2.5*rt,0,ct);jt.addColorStop(0,M.own?I.g?I.g[0]:"#ffcf7a":"#4a3a30"),jt.addColorStop(1,M.own?I.g?I.g[1]:"#b8642a":"#2a201a"),A.fillStyle=jt,A.fillRect(3*rt,ct-2.5*rt,2*rt,2.5*rt),M.own||(A.fillStyle="rgba(0,0,0,.35)",A.fillRect(0,0,st,ct)),M.tex&&(M.tex.needsUpdate=!0)},M.tex=new ps(Tt),M.tex.colorSpace=ke,M.tex.anisotropy=4,M.repaint();let ht=new oe(new tn(h,H),we("#ffffff",{map:M.tex}));ht.position.set(0,H/2,.02),N.add(ht);let Et="#2f3446";q(h+1.2,.24,1.8,te(Et),0,3.28,.9,N),q(h+.6,.16,.34,te("#4a2a14"),0,3.02,.2,N);let It=new oe(new er(1,1,4,1),te(Et));It.rotation.y=Math.PI/4,It.scale.set((h+1.6)/1.4142,1.9,(w+1.6)/1.4142),It.position.set(0,H+.95,-w/2),N.add(It);let kt=te("#4a2a14");q(.24,2.6,.3,kt,-1.12,1.3,.18,N),q(.24,2.6,.3,kt,1.12,1.3,.18,N),q(2.6,.26,.34,kt,0,2.66,.18,N),q(2.6,.14,.9,te("#7d6a60"),0,.22,.55,N);let Ut=new Le;Ut.position.set(0,2.56,.34),N.add(Ut);let le=pn(256,140,(Rt,Ot,Qt)=>{let jt=[...I.kan];Rt.textAlign="center",Rt.textBaseline="middle";for(let ne=0;ne<3;ne++){let Pe=4+ne*84;Rt.fillStyle=I.noren,Rt.fillRect(Pe,0,80,Qt-6),Rt.fillStyle="rgba(0,0,0,.25)",Rt.fillRect(Pe,Qt-16,80,10)}Rt.fillStyle=I.ink,jt.length<=3?(Rt.font=`900 46px ${ti}`,jt.forEach((ne,Pe)=>Rt.fillText(ne,4+(Pe+(3-jt.length)/2)*84+40,56))):(Rt.font=`900 34px ${ti}`,Rt.fillText(I.kan,128,56,240))}),Mt=new oe(new tn(2.4,1.3),new yn({map:le,transparent:!0,side:fn,alphaTest:.05}));Mt.position.y=-.65,Ut.add(Mt),Xt.push({g:Ut,ph:M.x0*.37});let ie=`${M.e} ${M.n}`,ee=pn(512,100,(Rt,Ot,Qt)=>{Rt.fillStyle="#f3e2bd",Rt.strokeStyle=L,Rt.lineWidth=8,Lo(Rt,5,5,Ot-10,Qt-10,14),Rt.fill(),Rt.stroke(),Rt.fillStyle="#3a1e0c",Rt.textAlign="center",Rt.textBaseline="middle";let jt=52;for(Rt.font=`900 ${jt}px ${ti}`;Rt.measureText(ie).width>Ot-40&&jt>18;)jt-=2,Rt.font=`900 ${jt}px ${ti}`;Rt.fillText(ie,Ot/2,Qt/2+3)}),rn=new oe(new un(4.6,.9,.14),[te("#4a2a14"),te("#4a2a14"),te("#4a2a14"),te("#4a2a14"),we("#ffffff",{map:ee}),te("#4a2a14")]);rn.position.set(0,3.98,.2),N.add(rn);for(let Rt of[-2.15,2.15]){let Ot=new Le;Ot.position.set(Rt,2.15,.55),N.add(Ot);let Qt=new oe(new Ci(.34,14,10),we(I.lan));Qt.scale.y=1.3,Ot.add(Qt),q(.3,.06,.3,we("#2a1810"),0,.46,0,Ot),q(.3,.06,.3,we("#2a1810"),0,-.46,0,Ot),q(.03,.5,.03,we("#2a1810"),0,.72,0,Ot);let jt=lt(0,0,.15,2.6,.55,Ot);Se.push({gl:jt,ph:M.x0+Rt})}{let Ot=new Le;Ot.position.set(3.3,0,1.3),N.add(Ot),q(.07,3.2,.07,we("#2a1810"),0,1.6,0,Ot),q(.9,.06,.06,we("#2a1810"),.45,3.15,0,Ot);let Qt=pn(96,320,(ne,Pe,_n)=>{ne.fillStyle=I.noren,ne.fillRect(0,0,Pe,_n),ne.fillStyle=I.ink,ne.textAlign="center",ne.textBaseline="middle";let nn=[...I.kan].slice(0,4);ne.font=`900 52px ${ti}`,nn.forEach((Do,si)=>ne.fillText(Do,Pe/2,56+si*(nn.length>3?62:74)))}),jt=new oe(new tn(.78,2.3),new yn({map:Qt,side:fn}));jt.position.set(.5,1.95,.02),Ot.add(jt),Xt.push({g:jt,ph:M.x0,flag:1})}{let Rt=vi(M.x0+5),Ot=new Le;Ot.position.set(-2.9,0,1),N.add(Ot),q(.5,.45,.5,te("#9a5a36"),0,.25,0,Ot);let Qt=new oe(new Ri(.45,0),te(Rt()<.5?"#3a7a48":"#4f8a3c"));if(Qt.position.y=.8,Ot.add(Qt),M.id==="iz"||M.id==="oko"||M.id==="tep")for(let jt=0;jt<3;jt++)q(.55,.4,.4,te("#c9962e"),-2.6+jt*.6,.4+(jt===1?.4:0),1.6,N);if(M.id==="bar"){let jt=new oe(new Ri(.5,0),te("#5a3a8a"));jt.position.set(2.8,.75,1),N.add(jt)}}let ye=640,Si=150,In=pn(ye,Si,Rt=>{Rt.textAlign="center",Rt.textBaseline="middle",Rt.fillStyle="#2a1810d9",Rt.strokeStyle="#ffd27a",Rt.lineWidth=5,Lo(Rt,8,38,ye-16,100,30),Rt.fill(),Rt.stroke();let Ot=50;for(Rt.font=`900 ${Ot}px ${ti}`;Rt.measureText(ie).width>ye-60&&Ot>20;)Ot-=2,Rt.font=`900 ${Ot}px ${ti}`;Rt.fillStyle="#fff3d6",Rt.fillText(ie,ye/2,90);let Qt=M.cur?n.cur||"\u{1F4CD} \u76EE\u524D":M.own?"":n.lock||"\u{1F512} \u82B1\u9322\u89E3\u9396";if(Qt){Rt.font=`900 28px ${ti}`;let jt=Rt.measureText(Qt).width+36;Rt.fillStyle=M.cur?"#ffd34d":"#e9d3a4",Rt.strokeStyle=L,Rt.lineWidth=4,Lo(Rt,ye/2-jt/2,2,jt,40,20),Rt.fill(),Rt.stroke(),Rt.fillStyle="#3a1e0c",Rt.fillText(Qt,ye/2,24)}}),an=new di(new Jn({map:In,depthTest:!1,transparent:!0}));an.scale.set(5.6,5.6*Si/ye,1),an.position.set(0,H+3.3,1),an.renderOrder=20,N.add(an),M.lab=an;let re=lt(0,1.3,1.1,De(M)?4.4:.01,.5,N);zt.push({sh:M,gl:re});function De(Rt){return Rt.own}}u.forEach(he);let ue=[];function $t(M){let I=[],H=[];M.traverse(h=>{h.isSprite?H.push(h):h.isMesh&&h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(w=>{w.transparent=!0,w.userData.o0=w.opacity,I.push(w)})}),ue.push({g:M,ms:I,sps:H,a:1})}let Re=[];function be(M,I,H){let h=new Le;h.position.set(M,.18,I),r.add(h),q(.34,.14,.34,te("#3a3030"),0,.07,0,h),q(.12,4.3,.12,te("#2b2422"),0,2.2,0,h),q(.8,.1,.1,te("#2b2422"),0,4.3,0,h);let w=new Le;w.position.set(0,4.05,0),h.add(w);let O=new oe(new un(.5,.5,.5),we("#ffe2a6"));w.add(O),q(.62,.1,.62,te("#2b2422"),0,.3,0,w);let L=lt(0,0,0,5,.6,w);Re.push(L);let N=new oe(new tn(6.5,6.5),new yn({map:J,blending:ys,transparent:!0,depthWrite:!1,opacity:.32}));N.rotation.x=-Math.PI/2,N.position.set(0,.04,0),h.add(N),$t(h)}for(let M=0;M<=x;M++)be(M*g-d/2,3.35,0);for(let M=-10;M<f-12;M+=10.5)be(M,10.65,Math.PI);{let M=we("#e2452f"),I=we("#2a1810");for(let H=1;H<x;H+=2){let h=H*g-d/2,w=[];for(let L=0;L<=8;L++){let N=L/8,at=ws(3.35,10.65,N),rt=4.55-Math.sin(N*Math.PI)*.75;if(w.push(h,rt,at),L>0&&L<8){let st=new oe(new Ci(.2,10,8),M);st.scale.y=1.25,st.position.set(h,rt-.28,at),r.add(st)}}let O=new ze;O.setAttribute("position",new fe(w,3)),r.add(new Js(O,new ds({color:2758672})))}}{let M=vi(33);for(let I=-9;I<f-8;I+=11){let H=new Le;H.position.set(I,.18,12.4),r.add(H),q(.3,2.2,.3,te("#4a3426"),0,1.1,0,H);let h=M()<.5,w=h?["#e8a0b4","#f4c6d2","#d98aa2"]:["#2f5a3c","#3a6e48","#285034"];[[0,2.9,0,1.15],[-.6,2.5,.2,.85],[.6,2.6,-.2,.85]].forEach(([O,L,N,at],rt)=>{let st=new oe(new Ri(at,0),te(w[rt%3],{flatShading:!0}));st.position.set(O,L,N),H.add(st)}),$t(H)}for(let I=2;I<f-10;I+=17){let H=new Le;H.position.set(I,.18,13.3),r.add(H),q(1.6,.1,.5,te("#8a5a30"),0,.5,0,H),q(1.6,.5,.08,te("#8a5a30"),0,.8,-.22,H),q(.1,.5,.4,te("#2b2422"),-.7,.25,0,H),q(.1,.5,.4,te("#2b2422"),.7,.25,0,H),$t(H)}for(let I of[0,Math.floor(x/2)+1]){let H=I*g-d/2,h=pn(64,128,(L,N,at)=>{L.fillStyle="#2b4a8a",L.fillRect(0,0,N,at),L.fillStyle="#fff3d6",L.fillRect(6,8,52,50);let rt=["#e2452f","#f2b630","#4aa86a","#4a7ad0"];for(let st=0;st<8;st++)L.fillStyle=rt[st%4],L.fillRect(10+st%4*12,14+Math.floor(st/4)*20,9,14);L.fillStyle="#111",L.fillRect(10,90,44,12)}),w=new Le;w.position.set(H,.18,-.5),r.add(w);let O=new oe(new un(.95,1.9,.8),[te("#2b4a8a"),te("#2b4a8a"),te("#2b4a8a"),te("#2b4a8a"),we("#ffffff",{map:h}),te("#2b4a8a")]);O.position.y=.95,w.add(O),lt(0,1.2,.8,2.4,.35,w)}}let Ce=[];function pe(M,I,H,h){let w=new Le;r.add(w),q(3.7,.72,1.7,te(M),0,.68,0,w),q(2,.66,1.55,te(M),-.1,1.34,0,w),q(2.02,.46,1.58,we("#2a3a5c"),-.1,1.36,0,w);for(let O of[-1.2,1.2])for(let L of[-.85,.85]){let N=new oe(new ms(.34,.34,.26,12),te("#15121a"));N.rotation.x=Math.PI/2,N.position.set(O,.36,L),w.add(N)}q(.06,.2,.4,we("#fff2c0"),1.86,.78,.5,w),q(.06,.2,.4,we("#fff2c0"),1.86,.78,-.5,w),q(.06,.2,.4,we("#ff3a2a"),-1.86,.78,.5,w),q(.06,.2,.4,we("#ff3a2a"),-1.86,.78,-.5,w),lt(2.4,.8,0,3.2,.5,w),h&&q(.6,.2,.3,we("#ffe08a"),-.1,1.8,0,w),w.isCar=!0,w.scale.x=H,w.userData={lane:I,dir:H,v:0,vmax:Ae(5.5,8),x:Ae(p,f)},w.position.set(w.userData.x,.02,I),Ce.push(w),$t(w)}pe("#d94b3d",8.7,-1),pe("#e8e1cf",5.3,1),pe("#f2b630",8.7,-1,!0),pe("#2f6f9f",5.3,1),Ce[2].position.x=f-30,Ce[3].position.x=p+40;let Ze=[],Te={};function Je(M){return Te[M]?Te[M]:Te[M]=pn(128,112,(I,H,h)=>{if(I.strokeStyle="#2a1810",I.lineWidth=6,I.lineJoin="round",M==="mind"?(I.fillStyle="#efe9ff",[[40,40,26],[66,30,28],[92,42,25],[64,52,30]].forEach(([w,O,L])=>{I.beginPath(),I.arc(w,O,L,0,7),I.stroke()}),[[40,40,26],[66,30,28],[92,42,25],[64,52,30]].forEach(([w,O,L])=>{I.beginPath(),I.arc(w,O,L,0,7),I.fill()}),I.beginPath(),I.arc(44,90,7,0,7),I.fill(),I.stroke(),I.beginPath(),I.arc(30,104,4,0,7),I.fill(),I.stroke()):(I.fillStyle=M==="idea"?"#fff0a8":"#ffffff",Lo(I,12,8,104,66,24),I.fill(),I.stroke(),I.beginPath(),I.moveTo(44,72),I.lineTo(34,100),I.lineTo(66,74),I.closePath(),I.fill(),I.stroke(),I.fillStyle="#fff",I.fillRect(46,70,18,6),M==="idea"&&(I.fillStyle="#fff0a8"),I.fillRect(46,71,18,5)),I.fillStyle="#2a1810",I.textAlign="center",I.textBaseline="middle",M==="idea")I.font=`900 44px ${ti}`,I.fillText("!",64,42);else for(let w=0;w<3;w++)I.beginPath(),I.arc(40+w*24,42,6,0,7),I.fill()})}function $e(M,I,H){let h=new Le;r.add(h);let w=new tn(1,1);w.translate(0,.5,0);let O=new yn({transparent:!0,alphaTest:.04,color:15920114}),L=new oe(w,O);h.add(L);let N={grp:h,m:L,mat:O,h:I,w:I*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,isMe:H,moving:!1};l(M,rt=>{O.map=rt,O.needsUpdate=!0,N.w=I*rt.image.width/rt.image.height});let at=new oe(new tr(.5,16),new yn({map:F,transparent:!0,depthWrite:!1,opacity:.8}));return at.rotation.x=-Math.PI/2,at.position.y=.22,r.add(at),N.sh=at,Ze.push(N),N}let Nt=$e(i.me,1.9,!0);Nt.x=u.find(M=>M.cur)?u.find(M=>M.cur).dx:u[0].dx,Nt.z=4.6;let z=[],Ve={};ou.forEach(M=>{let I=i.walk[M.spr];if(!I)return;let H=$e(I,M.h,!1);H.d=M,H.sp=M.sp,H.state="walk",H.t=0,H.tgt=null,H.hidden=!1,H.deck=[],H.item=null;let h=new di(new Jn({map:Je("chat"),transparent:!0,depthWrite:!1}));h.scale.set(.95,.83,1),r.add(h),H.bub=h,H.kind="chat",z.push(H),Ve[M.id]=H}),lu.forEach(M=>{let I=Ve[M.a],H=Ve[M.b];I&&H&&(H.leader=I,H.off=new G(Ae(-.4,-.7),0,Ae(.7,1)),I.talks=M.talks,H.talks=M.talks,I.mate=H,H.mate=I)});function me(M){let I=M.d.lines.map(H=>({kind:H[0],text:H[1]}));M.talks&&M.talks.forEach(H=>I.push({kind:"chat",talk:H})),M.deck=zg(I.map((H,h)=>h)),M.pool=I}function _e(M){return M.deck.length||me(M),M.pool[M.deck[M.deck.length-1]]}function St(M){M.deck.length||me(M);let I=M.pool[M.deck.pop()];return M.deck.length||(me(M),M.pool.length>1&&M.pool[M.deck[M.deck.length-1]]===I&&M.deck.unshift(M.deck.pop())),I}function ve(M){let I=_e(M);M.kind!==I.kind&&(M.kind=I.kind,M.bub.material.map=Je(I.kind),M.bub.material.needsUpdate=!0)}function Ft(M){let I=Math.random();if(M.linger=null,I<.42)M.tgt={x:Ae(y,C),z:Ae(1.1,3.2)};else if(I<.66)M.tgt={x:Ae(y,C),z:Ae(10.7,11.5)};else if(I<.88){let H=u[Math.floor(Math.random()*x)];M.tgt={x:H.dx+Ae(-1.6,1.6),z:Ae(1.2,1.7)},M.linger=H}else M.tgt={x:Ye(M.x+Ae(-6,6),y,C),z:M.z<7?Ae(10.7,11.5):Ae(1.1,3.2)}}z.forEach((M,I)=>{M.x=ws(y+4,C-4,I*.618%1),M.z=Math.random()<.5?Ae(1.2,3.2):Ae(10.7,11.5),Ft(M),M.t=Ae(0,2),M.state="idle",ve(M)}),z.forEach(M=>{M.leader&&(M.x=M.leader.x+M.off.x,M.z=M.leader.z+M.off.z)});let X={dead:!1,cv:t,ent:null,yaw:0,yawT:0,dist:14,distT:14,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,nearDoor:null,last:performance.now()},E=new G,v=new G,W=new G,ot=new G(Nt.x,1.3,Nt.z),nt=document.createElement("div");nt.className="tw3hint",e.appendChild(nt);let dt=document.createElement("div");dt.className="tw3j",dt.innerHTML="<i></i>",e.appendChild(dt);let mt=document.createElement("div");mt.className="tw3cam",mt.innerHTML='<button type="button" aria-label="L">\u27F2</button><button type="button" aria-label="R">\u27F3</button>',e.appendChild(mt);let j=document.createElement("div");j.className="tw3fade",e.appendChild(j);let Q=document.createElement("div");Q.className="tw3card",e.appendChild(Q),mt.querySelectorAll("button").forEach((M,I)=>{let H=I?-1:1;M.addEventListener("pointerdown",w=>{w.preventDefault(),X.camV=H,X.yawT=Ye(X.yawT+H*.35,-1.3,1.3);try{M.setPointerCapture(w.pointerId)}catch{}});let h=()=>{X.camV=0};M.addEventListener("pointerup",h),M.addEventListener("pointercancel",h)});function D(){return t.getBoundingClientRect()}let et=new hr,K=new Wt,xt=new cn(new G(0,1,0),0),pt=new G;function _t(M,I){let H=D();return K.set((M-H.left)/H.width*2-1,-((I-H.top)/H.height*2-1)),K}function Dt(M,I){let H=D();return{x:(M-H.left)*(t.clientWidth/H.width),y:(I-H.top)*(t.clientHeight/H.height)}}function Zt(M){let I=M.clone().project(a),H=D();return{x:(I.x+1)/2*H.width+H.left,y:(1-I.y)/2*H.height+H.top,z:I.z}}function ft(M,I){let H=null,h=1e9,w=D(),O=w.height/600;for(let L of z){if(L.hidden)continue;let N=Zt(new G(L.x,0,L.z)),at=Zt(new G(L.x,L.h+.75,L.z)),rt=N.y-at.y;if(rt<6)continue;let st=Math.max(rt*.38,26*O*1.2),ct=Math.abs(M-N.x);if(ct<st&&I>at.y-10&&I<N.y+12){let A=ct+Math.abs(I-(N.y+at.y)/2)*.3;A<h&&(h=A,H=L)}}return H}let Pt=null;t.addEventListener("pointerdown",M=>{if(X.ent)return;M.preventDefault();try{t.setPointerCapture(M.pointerId)}catch{}let I=Dt(M.clientX,M.clientY);Pt={id:M.pointerId,sx:I.x,sy:I.y,moved:0}}),t.addEventListener("pointermove",M=>{if(!Pt||Pt.id!==M.pointerId||X.ent)return;let I=Dt(M.clientX,M.clientY),H=I.x-Pt.sx,h=I.y-Pt.sy,w=Math.hypot(H,h),O=55;if(!Pt.moved&&w>12&&(Pt.moved=1),Pt.moved){let L=Math.min(1,w/O)/Math.max(w,1e-6);X.joy={x:H*L,y:h*L},X.tgt=null,dt.style.display="block",dt.style.left=Pt.sx+"px",dt.style.top=Pt.sy+"px",dt.firstChild.style.transform=`translate(${X.joy.x*55}px,${X.joy.y*55}px)`}});let Jt=M=>{!Pt||Pt.id!==M.pointerId||(!Pt.moved&&!X.ent&&bt(M.clientX,M.clientY),Pt=null,X.joy=null,dt.style.display="none")};t.addEventListener("pointerup",Jt),t.addEventListener("pointercancel",Jt),t.addEventListener("wheel",M=>{M.preventDefault(),X.distT=Ye(X.distT+Math.sign(M.deltaY)*1.5,8,20)},{passive:!1});function bt(M,I){let H=ft(M,I);if(H){Mn(H);return}et.setFromCamera(_t(M,I),a);let h=et.intersectObjects(wt,!1),w=et.ray.intersectPlane(xt,pt),O=null;h.length&&(!w||h[0].distance<w.distanceTo(et.ray.origin))&&(O=h[0].object.userData.shop),ei(),O?X.tgt={x:O.dx,z:b+.1,shop:O}:w&&(X.tgt={x:Ye(pt.x,y,C),z:Ye(pt.z,b,P)})}let ce=M=>{if(!document.contains(t))return;let I=M.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(I)&&(X.keys[I]=1,/^(arrow|w|a|s|d)/.test(I)&&(X.tgt=null),M.preventDefault())},Ee=M=>{delete X.keys[M.key.toLowerCase()]};document.addEventListener("keydown",ce),document.addEventListener("keyup",Ee);function Mn(M){let I=St(M),H=rc[I.kind]||rc.chat;X.talk&&X.talk!==M&&X.talk!==M.mate&&Es(X.talk),X.talk=M,M.state="talk",M.t=0,M.mate&&M.mate.state!=="talk"&&(M.mate.state="talk",M.mate.t=0),Q.innerHTML="";let h=document.createElement("div");h.className="tw3h";let w=document.createElement("div");w.className="tw3av",w.style.backgroundImage=`url("${i.walk[M.d.spr]}")`;let O=document.createElement("div");O.className="tw3nm";let L=document.createElement("b");L.textContent=M.d.name;let N=document.createElement("small");N.textContent=M.d.role,O.append(L,N);let at=document.createElement("span");at.className="tw3k",at.style.background=H.c,at.textContent=H.tag;let rt=document.createElement("button");rt.className="tw3x",rt.type="button",rt.textContent="\xD7",rt.addEventListener("click",ei),h.append(w,O,at,rt);let st=document.createElement("div");if(st.className="tw3t"+(I.kind==="mind"?" mind":""),I.talk)I.talk.forEach(([A,gt])=>{let ht=document.createElement("p"),Et=document.createElement("b");Et.textContent=A+"\uFF1A",ht.append(Et,document.createTextNode(gt)),st.appendChild(ht)});else{let A=document.createElement("p");A.textContent=I.kind==="mind"?"\uFF08"+I.text+"\uFF09":"\u300C"+I.text+"\u300D",st.appendChild(A)}let ct=document.createElement("div");ct.className="tw3b";let Tt=document.createElement("button");Tt.className="tw3n",Tt.type="button",Tt.textContent=(n.next||"\u518D\u807D\u4E00\u53E5")+" \u203A",Tt.addEventListener("click",()=>Mn(M)),ct.appendChild(Tt);{let A=D(),gt=Zt(new G(M.x,M.h*.5,M.z));Q.classList.toggle("r",gt.x-A.left<A.width/2)}Q.append(h,st,ct),Q.classList.add("on"),M.bub.visible=!1,ve(M),nt.classList.remove("on")}function Es(M){for(let I of[M,M.mate])I&&(I.state="idle",I.t=1.2,I.tgt=null,I.bub.visible=!0,ve(I))}function ei(){if(Q.classList.remove("on"),!X.talk)return;let M=X.talk;X.talk=null,Es(M)}function br(M){X.ent||(ei(),X.ent={sh:M,t0:performance.now(),x0:Nt.x,z0:Nt.z,done:0},X.tgt=null,X.joy=null,dt.style.display="none")}let As={get dead(){return X.dead},set dead(M){M&&Fi()},cv:t,get ent(){return X.ent},probe(){let M=I=>{let H=Zt(I);return{x:Math.round(H.x),y:Math.round(H.y)}};return{calls:s.info.render.calls,tris:s.info.render.triangles,tex:s.info.memory.textures,me:{x:+Nt.x.toFixed(2),z:+Nt.z.toFixed(2)},yaw:+X.yaw.toFixed(2),talk:X.talk?X.talk.d.id:null,ent:X.ent?X.ent.sh.id:null,cardOn:Q.classList.contains("on"),cardText:Q.textContent,npcs:z.filter(I=>!I.hidden).map(I=>Object.assign({id:I.d.id,state:I.state,kind:I.kind},M(new G(I.x,I.h*.5,I.z)))),shops:u.map(I=>Object.assign({id:I.id},M(new G(I.dx,1.5,.5))))}},resume(){X.ent=null,Nt.z=3.2,Nt.alpha=1,j.style.opacity=0,X.distT=14},dispose:Fi};function Fi(){if(!X.dead){X.dead=!0,cancelAnimationFrame(X.raf),document.removeEventListener("keydown",ce),document.removeEventListener("keyup",Ee),[nt,dt,mt,j,Q].forEach(M=>M.remove()),r.traverse(M=>{M.geometry&&M.geometry.dispose(),(M.material?Array.isArray(M.material)?M.material:[M.material]:[]).forEach(H=>{H.map&&H.map.dispose(),H.dispose()})});try{s.dispose(),s.forceContextLoss()}catch{}}}let mn=0,ni=0,Rs=0,gn=1,Cs=0,yi=0,Oi=0,ii=9,Mi=new G,en=new G;function Tr(){let M=t.getBoundingClientRect(),I=Math.max(1,t.clientWidth),H=Math.max(1,t.clientHeight),h=Math.min(2,window.devicePixelRatio||1);I===mn&&H===ni&&h===Rs||(mn=I,ni=H,Rs=h,gn=Ye(M.width*h/I,.5,2.2),gn=Math.min(gn,ii,Math.sqrt(13e5/(I*H))),s.setPixelRatio(gn),s.setSize(I,H,!1),a.aspect=I/H,a.updateProjectionMatrix())}function wr(M){var Tt;if(X.dead)return;if(!document.contains(t)){Fi();return}X.raf=requestAnimationFrame(wr);let I=Math.min(.12,(M-X.last)/1e3);X.last=M,X.t+=I;let H=X.t;Tr(),yi+=I,Oi++,yi>1&&(yi/Oi>.026&&gn>.5&&(gn=Math.max(.5,gn*.82),ii=gn,s.setPixelRatio(gn),s.setSize(mn,ni,!1)),yi=0,Oi=0);let h=X.keys;h.q&&(X.yawT=Ye(X.yawT+I*1.6,-1.3,1.3)),h.e&&(X.yawT=Ye(X.yawT-I*1.6,-1.3,1.3)),X.camV&&(X.yawT=Ye(X.yawT+X.camV*I*1.6,-1.3,1.3)),X.yaw+=(X.yawT-X.yaw)*Math.min(1,I*7),X.dist+=(X.distT-X.dist)*Math.min(1,I*5);let w=Math.sin(X.yaw),O=Math.cos(X.yaw);if(Mi.set(-w,0,-O),en.set(O,0,-w),Nt.moving=!1,!X.ent){let A=0,gt=0,ht=0;if(X.joy)A=en.x*X.joy.x+Mi.x*-X.joy.y,gt=en.z*X.joy.x+Mi.z*-X.joy.y,ht=Math.hypot(X.joy.x,X.joy.y);else{let It=(h.arrowright||h.d?1:0)-(h.arrowleft||h.a?1:0),kt=(h.arrowup||h.w?1:0)-(h.arrowdown||h.s?1:0);if(It||kt){let Ut=Math.hypot(It,kt);A=(en.x*It+Mi.x*kt)/Ut,gt=(en.z*It+Mi.z*kt)/Ut,ht=1}else if(X.tgt){let Ut=X.tgt.x-Nt.x,le=X.tgt.z-Nt.z,Mt=Math.hypot(Ut,le);Mt<.12?(X.tgt.shop&&br(X.tgt.shop),X.tgt=null):(A=Ut/Mt,gt=le/Mt,ht=1)}}if(ht>.05&&!X.ent){let It=Math.hypot(A,gt)||1,kt=4.3*Math.min(1,ht);Nt.x+=A/It*kt*I,Nt.z+=gt/It*kt*I,Nt.moving=!0,Nt.ph+=I*9*Math.min(1,ht);let Ut=A/It*en.x+gt/It*en.z;Math.abs(Ut)>.2&&(Nt.face=Ut>0?1:-1),X.talk&&Math.hypot(X.talk.x-Nt.x,X.talk.z-Nt.z)>9&&ei()}Nt.x=Ye(Nt.x,y,C);let Et=u.find(It=>Math.abs(Nt.x-It.dx)<1.05);Nt.z=Ye(Nt.z,Et?.2:b,P),Et&&Nt.z<=1.15&&!X.ent&&(X.tgt?X.tgt.shop===Et:gt<-.15)&&br(Et)}{let A=null;if(!X.ent)for(let gt of u)Math.abs(Nt.x-gt.dx)<2.6&&Nt.z<4.6&&(A=gt);A!==X.nearDoor?(X.nearDoor=A,A&&(nt.textContent=`${A.e} ${A.n}\u3000\u2191 ${n.enter||"\u5F80\u4E0A\u8D70\u9032\u5E97"}`),nt.classList.toggle("on",!!A&&!X.talk)):!A||X.talk?nt.classList.remove("on"):nt.classList.add("on")}for(let A of z){if(A.hidden==="in"){A.t-=I,A.t<=0&&(A.hidden=!1,A.state="exit",A.t=0,A.x=A.door.dx+Ae(-.4,.4),A.z=.4,A.alpha=0,A.bub.visible=!0);continue}let gt=0,ht=0,Et=0;if(A.state==="talk")A.face=(Nt.x-A.x)*en.x+(Nt.z-A.z)*en.z>0?1:-1;else if(A.state==="idle")A.t-=I,A.t<=0&&(A.state="walk",A.leader||Ft(A));else if(A.state==="exit")A.alpha=Math.min(1,A.alpha+I*2.5),A.z+=I*1.6,A.z>1.3&&(A.state="walk",Ft(A)),ht=0;else if(A.state==="enter")A.alpha=Math.max(0,A.alpha-I*2.5),A.z-=I*1.4,A.alpha<=0&&(A.hidden="in",A.t=Ae(5,12),A.bub.visible=!1);else{let It,kt,Ut=A.sp;if(A.leader){let ee=A.leader;It=ee.x+A.off.x,kt=ee.z+A.off.z;let rn=Math.hypot(It-A.x,kt-A.z);Ut=Ye(rn*2.4,0,A.sp*1.7),rn<.15&&(Ut=0),ee.state==="talk"&&(Ut=0)}else It=A.tgt.x,kt=A.tgt.z;let le=It-A.x,Mt=kt-A.z,ie=Math.hypot(le,Mt);!A.leader&&ie<.2?(A.linger&&!A.mate&&Math.random()<.45?(A.state="enter",A.door=A.linger,A.x=A.door.dx+Ae(-.3,.3)):(A.state="idle",A.t=A.linger?Ae(3,7):Ae(1,4)),A.linger=null,ve(A)):Ut>0&&ie>.001&&(gt=le/ie,ht=Mt/ie,Et=Ut)}if(Et>0){A.x+=gt*Et*I,A.z+=ht*Et*I;let It=gt*en.x+ht*en.z;Math.abs(It)>.15&&(A.face=It>0?1:-1),A.moving=!0,A.ph+=I*(4+Et*3.2)}else A.moving=!1;if(A.state!=="enter"&&A.state!=="exit")for(let It of Ze){if(It===A||It.hidden==="in"||It.state==="enter"||It.state==="exit")continue;let kt=A.x-It.x,Ut=A.z-It.z,le=Math.hypot(kt,Ut),Mt=It===Nt?.75:A.leader===It||It.leader===A?.55:.62;if(le<Mt&&le>.001){let ie=(Mt-le)*(It===Nt?1:.5);A.x+=kt/le*ie,A.z+=Ut/le*ie}}A.x=Ye(A.x,y-3,C+3),A.alpha=A.state==="enter"||A.state==="exit"?A.alpha:1}for(let A of Ce){let gt=A.userData,ht=!1;for(let Et of Ze){if(Et.hidden==="in")continue;let It=(Et.x-A.position.x)*gt.dir;if(It>0&&It<5.5&&Math.abs(Et.z-gt.lane)<1.5){ht=!0;break}}for(let Et of Ce){if(Et===A||Et.userData.lane!==gt.lane)continue;let It=(Et.position.x-A.position.x)*gt.dir;if(It>0&&It<5.5){ht=!0;break}}gt.v+=((ht?0:gt.vmax)-gt.v)*Math.min(1,I*(ht?5:1.4)),A.position.x+=gt.dir*gt.v*I,gt.dir>0&&A.position.x>f+6&&(A.position.x=p-6),gt.dir<0&&A.position.x<p-6&&(A.position.x=f+6)}let L=0;if(X.ent){let A=X.ent,gt=Math.min(1,(M-A.t0)/850),ht=gt*gt*(3-2*gt);if(L=ht,Nt.x=ws(A.x0,A.sh.dx,Math.min(1,ht*1.8)),Nt.z=ws(A.z0,.1,Math.min(1,ht*1.5)),Nt.alpha=Math.max(0,1-Math.max(0,gt-.35)*2.2),Nt.moving=!0,Nt.ph+=I*9,X.yawT=0,X.distT=ws(14,3.2,ht),j.style.opacity=Math.max(0,(gt-.45)/.55),gt>=1&&!A.done){A.done=1;try{i.onEnter&&i.onEnter(A.sh,As)}catch{}}}let N=mn/ni,at=N<1.45?1.45/N:1,rt=ws(1.3,1.6,L);ot.x+=(Nt.x-ot.x)*Math.min(1,I*20),ot.z+=(Nt.z-ot.z)*Math.min(1,I*20),ot.y=rt;let st=X.dist*at,ct=.5;E.set(ot.x+w*Math.cos(ct)*st,ot.y+Math.sin(ct)*st,ot.z+O*Math.cos(ct)*st),E.z=Math.min(E.z,24),E.x=Ye(E.x,p+2,f-2),a.position.copy(E),a.lookAt(ot.x-w*2.4,ot.y+1.5,ot.z-O*2.4),B.position.copy(E);for(let A of Ze){let gt=A.hidden!=="in";if(A.grp.visible=gt,A.sh.visible=gt,!gt)continue;let ht=A.w,Et=A.h,It=A.moving?1:0,kt=Math.sin(A.ph),Ut=It?Math.abs(kt)*.07:0,le=It?kt*.06:Math.sin(H*1.6+A.ph)*.01,Mt=It?1+Math.cos(A.ph*2)*.025:1+Math.sin(H*1.6+A.ph)*.008;if(A.grp.position.set(A.x,Ut+.18,A.z),A.m.rotation.set(0,X.yaw,le*A.face),A.m.scale.set(ht*A.face*(2-Mt),Et*Mt,1),A.mat.opacity=A.isMe?Nt.alpha:A.alpha,A.sh.position.set(A.x,.2,A.z),A.sh.scale.set(ht*.75,ht*.42,1),A.sh.material.opacity=.7*(A.isMe?Nt.alpha:A.alpha),A.bub){A.bub.position.set(A.x,Et+.62+Math.sin(H*2.3+A.ph)*.07,A.z);let ie=1+Math.sin(H*3+A.ph)*.04;A.bub.scale.set(.95*ie,.83*ie,1),A.bub.visible=A.hidden===!1&&A.state!=="talk"&&A.state!=="enter"&&A.state!=="exit"}}for(let A of Xt)A.g.rotation.x=A.flag?0:Math.sin(H*1.8+A.ph)*.05,A.flag&&(A.g.rotation.y=Math.sin(H*2.2+A.ph)*.22);for(let A of Se)A.gl.material.opacity=.45+.15*Math.sin(H*7+A.ph);for(let A of Re)A.material.opacity=.55+.06*Math.sin(H*3+A.position.x);for(let A of zt){let gt=X.nearDoor===A.sh;A.gl.material.opacity=A.sh.own?gt?.85+.15*Math.sin(H*6):.5:.02}Lt&&(Lt.material.opacity=Math.sin(H*2.4)>0?1:.1);{let A=E.x-Nt.x,gt=E.z-Nt.z,ht=A*A+gt*gt||1;for(let Et of ue){let It=Et.g.position.x-Nt.x,kt=Et.g.position.z-Nt.z,Ut=(It*A+kt*gt)/ht,le=Math.hypot(It-A*Ut,kt-gt*Ut),Mt=Ut>.12&&Ut<1.05&&le<(Et.g.isCar?3.2:2.6)?.1:1;Et.a+=(Mt-Et.a)*Math.min(1,I*8);for(let ie of Et.ms)ie.opacity=((Tt=ie.userData.o0)!=null?Tt:1)*Et.a;for(let ie of Et.sps)ie.visible=Et.a>.6}}s.render(r,a)}return X.raf=requestAnimationFrame(wr),As}return gu(Vg);})();
