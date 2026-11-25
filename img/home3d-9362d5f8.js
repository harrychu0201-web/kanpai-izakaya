var Home3D=(()=>{var qh=Object.defineProperty;var vm=Object.getOwnPropertyDescriptor;var bm=Object.getOwnPropertyNames;var Mm=Object.prototype.hasOwnProperty;var Sm=(i,t)=>{for(var e in t)qh(i,e,{get:t[e],enumerable:!0})},wm=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of bm(t))!Mm.call(i,s)&&s!==e&&qh(i,s,{get:()=>t[s],enumerable:!(n=vm(t,s))||n.enumerable});return i};var Tm=i=>wm(qh({},"__esModule",{value:!0}),i);var k1={};Sm(k1,{D0:()=>Gi,D1:()=>Vi,DX:()=>Hi,EXO:()=>ds,H3CSS:()=>B1,RD:()=>Et,RW:()=>ge,SIZES:()=>Tl,STARS:()=>zf,WH:()=>oi,cozyOf:()=>Sl,dailyIncome:()=>Bf,defaultEx:()=>Pf,demoHome:()=>F1,freshHome:()=>dm,freshHomeInterior:()=>U1,island:()=>hm,starsOf:()=>Of,start:()=>z1});var Id=0,Du=1,Pd=2;var la=1,Ld=2,to=3,Nr=0,si=1,Vn=2,ca=0,eo=1,bs=2,Nu=3,Uu=4,Dd=5;var ha=100,Nd=101,Ud=102,Fd=103,Od=104,Bd=200,zd=201,kd=202,Gd=203,Fu=204,Ou=205,Vd=206,Hd=207,Wd=208,Xd=209,qd=210,Yd=211,$d=212,Zd=213,Jd=214,lc=0,cc=1,hc=2,za=3,uc=4,fc=5,dc=6,pc=7,Xc=0,Kd=1,jd=2,Ys=0,Bu=1,zu=2,ku=3,Gu=4,Vu=5,Hu=6,Wu=7;var Xu=300,ua=301,no=302,qc=303,Yc=304,Gs=1e3,zs=1001,mc=1002,ui=1003,Qd=1004;var al=1005;var Oi=1006,$c=1007;var fr=1008;var Zi=1009,qu=1010,Yu=1011,io=1012,Zc=1013,Ms=1014,Ss=1015,ws=1016,Jc=1017,Kc=1018,fa=1020,$u=35902,Zu=35899,Ju=1021,Ku=1022,Ts=1023,lr=1026,dr=1027,ju=1028,jc=1029,Ur=1030,Qc=1031;var th=1033,ol=33776,ll=33777,cl=33778,hl=33779,eh=35840,nh=35841,ih=35842,sh=35843,rh=36196,ah=37492,oh=37496,lh=37488,ch=37489,ul=37490,hh=37491,uh=37808,fh=37809,dh=37810,ph=37811,mh=37812,gh=37813,xh=37814,_h=37815,yh=37816,vh=37817,bh=37818,Mh=37819,Sh=37820,wh=37821,Th=36492,Eh=36494,Ah=36495,Rh=36283,Ch=36284,fl=36285,Ih=36286;var No=2300,gc=2301,rc=2302,yu=2303,vu=2400,bu=2401,Mu=2402;var tp=3200;var Ph=0,ep=1,pr="",Qn="srgb",Uo="srgb-linear",Fo="linear",En="srgb";var ac=7680;var np=519,ip=512,sp=513,rp=514,Qu=515,ap=516,op=517,tf=518,ef=519,nf=35044;var sf="300 es",us=2e3,ka=2001;function Em(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Am(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=Ga("canvas");return i.style.display="block",i}var Yf={},Va=null;function Oo(...i){let t="THREE."+i.shift();Va?Va("log",t,...i):console.log(t,...i)}function cp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=cp(i);let t="THREE."+i.shift();if(Va)Va("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ce(...i){i=cp(i);let t="THREE."+i.shift();if(Va)Va("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Po(...i){let t=i.join(" ");t in Yf||(Yf[t]=!0,Ie(...i))}function hp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var up={[lc]:lc,[hc]:dc,[uc]:uc,[za]:fc,[cc]:cc,[dc]:hc,[pc]:pc,[fc]:za},Vs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yh=Math.PI/180,xc=180/Math.PI;function Fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ti[i&255]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]+"-"+Ti[t&255]+Ti[t>>8&255]+"-"+Ti[t>>16&15|64]+Ti[t>>24&255]+"-"+Ti[e&63|128]+Ti[e>>8&255]+"-"+Ti[e>>16&255]+Ti[e>>24&255]+Ti[n&255]+Ti[n>>8&255]+Ti[n>>16&255]+Ti[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Rm(i,t){return(i%t+t)%t}function $h(i,t,e){return(1-e)*i+e*t}function fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dp(i,t){if(t.constructor===Float32Array)return i;let e=Lh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function pp(i,t){if(t.constructor===Float32Array)return i;let e=Lh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var hf=class hf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=en(this.x,t.x,e.x),this.y=en(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=en(this.x,t,e),this.y=en(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hf.prototype.isVector2=!0;var Nt=hf,Hs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],I=r[a+3];if(p!==I||l!==d||c!==f||u!==g){let _=l*d+c*f+u*g+p*I;_<0&&(d=-d,f=-f,g=-g,I=-I,_=-_);let y=1-o;if(_<.9995){let S=Math.acos(_),L=Math.sin(S);y=Math.sin(y*S)/L,o=Math.sin(o*S)/L,l=l*y+d*o,c=c*y+f*o,u=u*y+g*o,p=p*y+I*o}else{l=l*y+d*o,c=c*y+f*o,u=u*y+g*o,p=p*y+I*o;let S=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=S,c*=S,u*=S,p*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*p+l*f-c*d,t[e+1]=l*g+u*d+c*p-o*f,t[e+2]=c*g+u*f+o*d-l*p,t[e+3]=u*g-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"YXZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"ZXY":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"ZYX":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"YZX":this._x=d*u*p+c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p-d*f*g;break;case"XZY":this._x=d*u*p-c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p+d*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uf=class uf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($f.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=en(this.x,t.x,e.x),this.y=en(this.y,t.y,e.y),this.z=en(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=en(this.x,t,e),this.y=en(this.y,t,e),this.z=en(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zh.copy(this).projectOnVector(t),this.sub(Zh)}reflect(t){return this.sub(Zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uf.prototype.isVector3=!0;var z=uf,Zh=new z,$f=new Hs,ff=class ff{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],f=n[5],g=n[8],I=s[0],_=s[3],y=s[6],S=s[1],L=s[4],E=s[7],O=s[2],N=s[5],M=s[8];return r[0]=a*I+o*S+l*O,r[3]=a*_+o*L+l*N,r[6]=a*y+o*E+l*M,r[1]=c*I+u*S+p*O,r[4]=c*_+u*L+p*N,r[7]=c*y+u*E+p*M,r[2]=d*I+f*S+g*O,r[5]=d*_+f*L+g*N,r[8]=d*y+f*E+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/g;return t[0]=p*I,t[1]=(s*c-u*n)*I,t[2]=(o*n-s*a)*I,t[3]=d*I,t[4]=(u*e-s*l)*I,t[5]=(s*r-o*e)*I,t[6]=f*I,t[7]=(n*l-c*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jh.makeScale(t,e)),this}rotate(t){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jh.makeRotation(-t)),this}translate(t,e){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ff.prototype.isMatrix3=!0;var Be=ff,Jh=new Be,Zf=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jf=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){let i={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===En&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===En&&(s.r=Ba(s.r),s.g=Ba(s.g),s.b=Ba(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pr?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Uo]:{primaries:t,whitePoint:n,transfer:Fo,toXYZ:Zf,fromXYZ:Jf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:n,transfer:En,toXYZ:Zf,fromXYZ:Jf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),i}var an=Cm();function or(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var va,_c=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{va===void 0&&(va=Ga("canvas")),va.width=t.width,va.height=t.height;let s=va.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=va}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=or(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(or(e[n]/255)*255):e[n]=or(e[n]);return{data:e,width:t.width,height:t.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Im=0,Ha=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kh(s[a].image)):r.push(Kh(s[a]))}else r=Kh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?_c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Pm=0,jh=new z,Ai=class i extends Vs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zs,s=zs,r=Oi,a=fr,o=Ts,l=Zi,c=i.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Fr(),this.name="",this.source=new Ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case zs:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case zs:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ai.DEFAULT_IMAGE=null;Ai.DEFAULT_MAPPING=Xu;Ai.DEFAULT_ANISOTROPY=1;var df=class df{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],g=l[9],I=l[2],_=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-I)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+I)<.1&&Math.abs(g+_)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,E=(f+1)/2,O=(y+1)/2,N=(u+d)/4,M=(p+I)/4,A=(g+_)/4;return L>E&&L>O?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=N/n,r=M/n):E>O?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=N/s,r=A/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=M/r,s=A/r),this.set(n,s,r,e),this}let S=Math.sqrt((_-g)*(_-g)+(p-I)*(p-I)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(_-g)/S,this.y=(p-I)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=en(this.x,t.x,e.x),this.y=en(this.y,t.y,e.y),this.z=en(this.z,t.z,e.z),this.w=en(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=en(this.x,t,e),this.y=en(this.y,t,e),this.z=en(this.z,t,e),this.w=en(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};df.prototype.isVector4=!0;var Gn=df,yc=class extends Vs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Gn(0,0,t,e),this.scissorTest=!1,this.viewport=new Gn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ai({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ha(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends yc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bo=class extends Ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ui,this.minFilter=ui,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ui,this.minFilter=ui,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wc=class Wc{constructor(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_)}set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,I,_){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=s,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=p,y[14]=d,y[3]=f,y[7]=g,y[11]=I,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ba.setFromMatrixColumn(t,0).length(),r=1/ba.setFromMatrixColumn(t,1).length(),a=1/ba.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,g=o*u,I=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=d-I*c,e[9]=-o*l,e[2]=I-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,g=c*u,I=c*p;e[0]=d+I*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=I+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,g=c*u,I=c*p;e[0]=d-I*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=I-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,g=o*u,I=o*p;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+I,e[1]=l*p,e[5]=I*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,I=o*c;e[0]=l*u,e[4]=I-d*p,e[8]=g*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+g,e[10]=d-I*p}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,I=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+I,e[5]=a*u,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*u,e[10]=I*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Dm)}lookAt(t,e,n){let s=this.elements;return es.subVectors(t,e),es.lengthSq()===0&&(es.z=1),es.normalize(),Mr.crossVectors(n,es),Mr.lengthSq()===0&&(Math.abs(n.z)===1?es.x+=1e-4:es.z+=1e-4,es.normalize(),Mr.crossVectors(n,es)),Mr.normalize(),Ll.crossVectors(es,Mr),s[0]=Mr.x,s[4]=Ll.x,s[8]=es.x,s[1]=Mr.y,s[5]=Ll.y,s[9]=es.y,s[2]=Mr.z,s[6]=Ll.z,s[10]=es.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],f=n[13],g=n[2],I=n[6],_=n[10],y=n[14],S=n[3],L=n[7],E=n[11],O=n[15],N=s[0],M=s[4],A=s[8],q=s[12],k=s[1],W=s[5],Q=s[9],ut=s[13],V=s[2],at=s[6],ct=s[10],st=s[14],Pt=s[3],lt=s[7],wt=s[11],xt=s[15];return r[0]=a*N+o*k+l*V+c*Pt,r[4]=a*M+o*W+l*at+c*lt,r[8]=a*A+o*Q+l*ct+c*wt,r[12]=a*q+o*ut+l*st+c*xt,r[1]=u*N+p*k+d*V+f*Pt,r[5]=u*M+p*W+d*at+f*lt,r[9]=u*A+p*Q+d*ct+f*wt,r[13]=u*q+p*ut+d*st+f*xt,r[2]=g*N+I*k+_*V+y*Pt,r[6]=g*M+I*W+_*at+y*lt,r[10]=g*A+I*Q+_*ct+y*wt,r[14]=g*q+I*ut+_*st+y*xt,r[3]=S*N+L*k+E*V+O*Pt,r[7]=S*M+L*W+E*at+O*lt,r[11]=S*A+L*Q+E*ct+O*wt,r[15]=S*q+L*ut+E*st+O*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],g=t[3],I=t[7],_=t[11],y=t[15],S=l*f-c*d,L=o*f-c*p,E=o*d-l*p,O=a*f-c*u,N=a*d-l*u,M=a*p-o*u;return e*(I*S-_*L+y*E)-n*(g*S-_*O+y*N)+s*(g*L-I*O+y*M)-r*(g*E-I*N+_*M)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],g=t[12],I=t[13],_=t[14],y=t[15],S=e*o-n*a,L=e*l-s*a,E=e*c-r*a,O=n*l-s*o,N=n*c-r*o,M=s*c-r*l,A=u*I-p*g,q=u*_-d*g,k=u*y-f*g,W=p*_-d*I,Q=p*y-f*I,ut=d*y-f*_,V=S*ut-L*Q+E*W+O*k-N*q+M*A;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let at=1/V;return t[0]=(o*ut-l*Q+c*W)*at,t[1]=(s*Q-n*ut-r*W)*at,t[2]=(I*M-_*N+y*O)*at,t[3]=(d*N-p*M-f*O)*at,t[4]=(l*k-a*ut-c*q)*at,t[5]=(e*ut-s*k+r*q)*at,t[6]=(_*E-g*M-y*L)*at,t[7]=(u*M-d*E+f*L)*at,t[8]=(a*Q-o*k+c*A)*at,t[9]=(n*k-e*Q-r*A)*at,t[10]=(g*N-I*E+y*S)*at,t[11]=(p*E-u*N-f*S)*at,t[12]=(o*q-a*W-l*A)*at,t[13]=(e*W-n*q+s*A)*at,t[14]=(I*L-g*O-_*S)*at,t[15]=(u*O-p*L+d*S)*at,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,g=r*p,I=a*u,_=a*p,y=o*p,S=l*c,L=l*u,E=l*p,O=n.x,N=n.y,M=n.z;return s[0]=(1-(I+y))*O,s[1]=(f+E)*O,s[2]=(g-L)*O,s[3]=0,s[4]=(f-E)*N,s[5]=(1-(d+y))*N,s[6]=(_+S)*N,s[7]=0,s[8]=(g+L)*M,s[9]=(_-S)*M,s[10]=(1-(d+I))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ba.set(s[0],s[1],s[2]).length(),o=ba.set(s[4],s[5],s[6]).length(),l=ba.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xs.copy(this);let c=1/a,u=1/o,p=1/l;return xs.elements[0]*=c,xs.elements[1]*=c,xs.elements[2]*=c,xs.elements[4]*=u,xs.elements[5]*=u,xs.elements[6]*=u,xs.elements[8]*=p,xs.elements[9]*=p,xs.elements[10]*=p,e.setFromRotationMatrix(xs),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=us,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,I;if(l)g=r/(a-r),I=a*r/(a-r);else if(o===us)g=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=I,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=us,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,I;if(l)g=1/(a-r),I=a/(a-r);else if(o===us)g=-2/(a-r),I=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=I,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Wc.prototype.isMatrix4=!0;var Ln=Wc,ba=new z,xs=new Ln,Lm=new z(0,0,0),Dm=new z(1,1,1),Mr=new z,Ll=new z,es=new z,Kf=new Ln,jf=new Hs,cr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jf.setFromEuler(this),this.setFromQuaternion(jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nm=0,Qf=new z,Ma=new Hs,er=new Ln,Dl=new z,So=new z,Um=new z,Fm=new Hs,td=new z(1,0,0),ed=new z(0,1,0),nd=new z(0,0,1),id={type:"added"},Om={type:"removed"},Sa={type:"childadded",child:null},Qh={type:"childremoved",child:null},fi=class i extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new cr,n=new Hs,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Be}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ma.setFromAxisAngle(t,e),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(t,e){return Ma.setFromAxisAngle(t,e),this.quaternion.premultiply(Ma),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qf.copy(t).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dl.copy(t):Dl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(So,Dl,this.up):er.lookAt(Dl,So,this.up),this.quaternion.setFromRotationMatrix(er),s&&(er.extractRotation(s.matrixWorld),Ma.setFromRotationMatrix(er),this.quaternion.premultiply(Ma.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Om),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),er.multiply(t.parent.matrixWorld)),t.applyMatrix4(er),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,t,Um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fi.DEFAULT_UP=new z(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bm={type:"move"},Xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let I of t.hand.values()){let _=e.getJointPose(I,n),y=this._getHandJoint(c,I);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function tu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,an.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=an.workingColorSpace){return this.r=t,this.g=e,this.b=n,an.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=an.workingColorSpace){if(t=Rm(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=tu(a,r,t+1/3),this.g=tu(a,r,t),this.b=tu(a,r,t-1/3)}return an.colorSpaceToWorking(this,s),this}setStyle(t,e=Qn){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qn){let n=mp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return an.workingToColorSpace(Ei.copy(this),t),Math.round(en(Ei.r*255,0,255))*65536+Math.round(en(Ei.g*255,0,255))*256+Math.round(en(Ei.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=an.workingColorSpace){an.workingToColorSpace(Ei.copy(this),e);let n=Ei.r,s=Ei.g,r=Ei.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=an.workingColorSpace){return an.workingToColorSpace(Ei.copy(this),e),t.r=Ei.r,t.g=Ei.g,t.b=Ei.b,t}getStyle(t=Qn){an.workingToColorSpace(Ei.copy(this),t);let e=Ei.r,n=Ei.g,s=Ei.b;return t!==Qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sr),this.setHSL(Sr.h+t,Sr.s+e,Sr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sr),t.getHSL(Nl);let n=$h(Sr.h,Nl.h,e),s=$h(Sr.s,Nl.s,e),r=$h(Sr.l,Nl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ei=new Se;Se.NAMES=mp;var jr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_s=new z,nr=new z,eu=new z,ir=new z,wa=new z,Ta=new z,sd=new z,nu=new z,iu=new z,su=new z,ru=new Gn,au=new Gn,ou=new Gn,ar=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_s.subVectors(t,e),s.cross(_s);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_s.subVectors(s,e),nr.subVectors(n,e),eu.subVectors(t,e);let a=_s.dot(_s),o=_s.dot(nr),l=_s.dot(eu),c=nr.dot(nr),u=nr.dot(eu),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ir.x),l.addScaledVector(a,ir.y),l.addScaledVector(o,ir.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ru.setScalar(0),au.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(t,e),au.fromBufferAttribute(t,n),ou.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ru,r.x),a.addScaledVector(au,r.y),a.addScaledVector(ou,r.z),a}static isFrontFacing(t,e,n,s){return _s.subVectors(n,e),nr.subVectors(t,e),_s.cross(nr).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _s.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),_s.cross(nr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;wa.subVectors(s,n),Ta.subVectors(r,n),nu.subVectors(t,n);let l=wa.dot(nu),c=Ta.dot(nu);if(l<=0&&c<=0)return e.copy(n);iu.subVectors(t,s);let u=wa.dot(iu),p=Ta.dot(iu);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(wa,a);su.subVectors(t,r);let f=wa.dot(su),g=Ta.dot(su);if(g>=0&&f<=g)return e.copy(r);let I=f*c-l*g;if(I<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ta,o);let _=u*g-f*p;if(_<=0&&p-u>=0&&f-g>=0)return sd.subVectors(r,s),o=(p-u)/(p-u+(f-g)),e.copy(s).addScaledVector(sd,o);let y=1/(_+I+d);return a=I*y,o=d*y,e.copy(n).addScaledVector(wa,a).addScaledVector(Ta,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ws=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ys.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ys.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ys.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ys):ys.fromBufferAttribute(r,a),ys.applyMatrix4(t.matrixWorld),this.expandByPoint(ys);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ul.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox)),Ul.applyMatrix4(t.matrixWorld),this.union(Ul)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ys),ys.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),Fl.subVectors(this.max,wo),Ea.subVectors(t.a,wo),Aa.subVectors(t.b,wo),Ra.subVectors(t.c,wo),wr.subVectors(Aa,Ea),Tr.subVectors(Ra,Aa),$r.subVectors(Ea,Ra);let e=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-$r.z,$r.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,$r.z,0,-$r.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-$r.y,$r.x,0];return!lu(e,Ea,Aa,Ra,Fl)||(e=[1,0,0,0,1,0,0,0,1],!lu(e,Ea,Aa,Ra,Fl))?!1:(Ol.crossVectors(wr,Tr),e=[Ol.x,Ol.y,Ol.z],lu(e,Ea,Aa,Ra,Fl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ys).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ys).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},sr=[new z,new z,new z,new z,new z,new z,new z,new z],ys=new z,Ul=new Ws,Ea=new z,Aa=new z,Ra=new z,wr=new z,Tr=new z,$r=new z,wo=new z,Fl=new z,Ol=new z,Zr=new z;function lu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zr.fromArray(i,r);let o=s.x*Math.abs(Zr.x)+s.y*Math.abs(Zr.y)+s.z*Math.abs(Zr.z),l=t.dot(Zr),c=e.dot(Zr),u=n.dot(Zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jn=new z,Bl=new Nt,zm=0,is=class extends Vs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nf,this.updateRanges=[],this.gpuType=Ss,this.version=0,this._normalizationScale=t!==void 0?Lh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bl.fromBufferAttribute(this,e),Bl.applyMatrix3(t),this.setXY(e,Bl.x,Bl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyMatrix3(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyMatrix4(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyNormalMatrix(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.transformDirection(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):dp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pp(t,this.array)}};var zo=class extends is{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ko=class extends is{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var De=class extends is{constructor(t,e,n){super(new Float32Array(t),e,n)}},km=new Ws,To=new z,cu=new z,Qr=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):km.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);let e=To.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(To,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(cu)),this.expandByPoint(To.copy(t.center).sub(cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gm=0,hs=new Ln,hu=new fi,Ca=new z,ns=new Ws,Eo=new Ws,hi=new z,Dn=class i extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Em(t)?ko:zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hs.makeRotationFromQuaternion(t),this.applyMatrix4(hs),this}rotateX(t){return hs.makeRotationX(t),this.applyMatrix4(hs),this}rotateY(t){return hs.makeRotationY(t),this.applyMatrix4(hs),this}rotateZ(t){return hs.makeRotationZ(t),this.applyMatrix4(hs),this}translate(t,e,n){return hs.makeTranslation(t,e,n),this.applyMatrix4(hs),this}scale(t,e,n){return hs.makeScale(t,e,n),this.applyMatrix4(hs),this}lookAt(t){return hu.lookAt(t),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ns.setFromBufferAttribute(r),this.morphTargetsRelative?(hi.addVectors(this.boundingBox.min,ns.min),this.boundingBox.expandByPoint(hi),hi.addVectors(this.boundingBox.max,ns.max),this.boundingBox.expandByPoint(hi)):(this.boundingBox.expandByPoint(ns.min),this.boundingBox.expandByPoint(ns.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ns.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Eo.setFromBufferAttribute(o),this.morphTargetsRelative?(hi.addVectors(ns.min,Eo.min),ns.expandByPoint(hi),hi.addVectors(ns.max,Eo.max),ns.expandByPoint(hi)):(ns.expandByPoint(Eo.min),ns.expandByPoint(Eo.max))}ns.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hi.fromBufferAttribute(o,c),l&&(Ca.fromBufferAttribute(t,c),hi.add(Ca)),s=Math.max(s,n.distanceToSquared(hi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new is(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let q=0;q<n.count;q++)o[q]=new z,l[q]=new z;let u=new z,p=new z,d=new z,f=new Nt,g=new Nt,I=new Nt,_=new z,y=new z;function S(q,k,W){c[q]=c[k]=c[W]=1,u.fromBufferAttribute(n,q),p.fromBufferAttribute(n,k),d.fromBufferAttribute(n,W),f.fromBufferAttribute(r,q),g.fromBufferAttribute(r,k),I.fromBufferAttribute(r,W),p.sub(u),d.sub(u),g.sub(f),I.sub(f);let Q=1/(g.x*I.y-I.x*g.y);isFinite(Q)&&(_.copy(p).multiplyScalar(I.y).addScaledVector(d,-g.y).multiplyScalar(Q),y.copy(d).multiplyScalar(g.x).addScaledVector(p,-I.x).multiplyScalar(Q),o[q].add(_),o[k].add(_),o[W].add(_),l[q].add(y),l[k].add(y),l[W].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,k=L.length;q<k;++q){let W=L[q],Q=W.start,ut=W.count;for(let V=Q,at=Q+ut;V<at;V+=3)S(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let E=new z,O=new z,N=new z,M=new z;function A(q){N.fromBufferAttribute(s,q),M.copy(N);let k=o[q];E.copy(k),E.sub(N.multiplyScalar(N.dot(k))).normalize(),O.crossVectors(M,k);let Q=O.dot(l[q])<0?-1:1;a.setXYZW(q,E.x,E.y,E.z,Q)}for(let q=0,k=n.count;q<k;++q)c[q]&&A(q);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new is(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,p=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),I=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,_),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(I,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hi.fromBufferAttribute(t,e),hi.normalize(),t.setXYZ(e,hi.x,hi.y,hi.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let I=0,_=l.length;I<_;I++){o.isInterleavedBufferAttribute?f=l[I]*o.data.stride+o.offset:f=l[I]*u;for(let y=0;y<u;y++)d[g++]=c[f++]}return new is(d,u,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nf,this.updateRanges=[],this.version=0,this.uuid=Fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=rd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=rd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function rd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Fr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ui=new z,qa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Lh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.applyMatrix4(t),this.setXYZ(e,Ui.x,Ui.y,Ui.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.applyNormalMatrix(t),this.setXYZ(e,Ui.x,Ui.y,Ui.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.transformDirection(t),this.setXYZ(e,Ui.x,Ui.y,Ui.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new is(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):dp(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pp(t,this.data.array)}},uu=new z,Vm=new z,Hm=new Be,Fi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=uu.subVectors(n,e).cross(Vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hm.getNormalMatrix(t),s=this.coplanarPoint(uu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wm=0,Xs=class extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=eo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ii=class extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ia,Ao=new z,Pa=new z,La=new z,Da=new Nt,Ro=new Nt,gp=new Ln,zl=new z,Co=new z,kl=new z,ad=new Nt,fu=new Nt,od=new Nt,di=class extends fi{constructor(t=new ii){if(super(),this.isSprite=!0,this.type="Sprite",Ia===void 0){Ia=new Dn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Go(e,5);Ia.setIndex([0,1,2,0,2,3]),Ia.setAttribute("position",new qa(n,3,0,!1)),Ia.setAttribute("uv",new qa(n,2,3,!1))}this.geometry=Ia,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pa.setFromMatrixScale(this.matrixWorld),gp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),La.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pa.multiplyScalar(-La.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Gl(zl.set(-.5,-.5,0),La,a,Pa,s,r),Gl(Co.set(.5,-.5,0),La,a,Pa,s,r),Gl(kl.set(.5,.5,0),La,a,Pa,s,r),ad.set(0,0),fu.set(1,0),od.set(1,1);let o=t.ray.intersectTriangle(zl,Co,kl,!1,Ao);if(o===null&&(Gl(Co.set(-.5,.5,0),La,a,Pa,s,r),fu.set(0,1),o=t.ray.intersectTriangle(zl,kl,Co,!1,Ao),o===null))return;let l=t.ray.origin.distanceTo(Ao);l<t.near||l>t.far||e.push({distance:l,point:Ao.clone(),uv:ar.getInterpolation(Ao,zl,Co,kl,ad,fu,od,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Gl(i,t,e,n,s,r){Da.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ro.x=r*Da.x-s*Da.y,Ro.y=s*Da.x+r*Da.y):Ro.copy(Da),i.copy(t),i.x+=Ro.x,i.y+=Ro.y,i.applyMatrix4(gp)}var rr=new z,du=new z,Vl=new z,Hl=new z,Ya=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rr.copy(this.origin).addScaledVector(this.direction,e),rr.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){du.copy(t).add(e).multiplyScalar(.5),Vl.copy(e).sub(t).normalize(),Hl.copy(this.origin).sub(du);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vl),o=Hl.dot(this.direction),l=-Hl.dot(Vl),c=Hl.lengthSq(),u=Math.abs(1-a*a),p,d,f,g;if(u>0)if(p=a*l-o,d=a*o-l,g=r*u,p>=0)if(d>=-g)if(d<=g){let I=1/u;p*=I,d*=I,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(du).addScaledVector(Vl,d),f}intersectSphere(t,e){if(t.radius<0)return null;rr.subVectors(t.center,this.origin);let n=rr.dot(this.direction),s=rr.dot(rr)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rr)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,I=e.y-a.y,_=e.z-a.z,y=n.x-a.x,S=n.y-a.y,L=n.z-a.z,E=Math.abs(l),O=Math.abs(c),N=Math.abs(u),M,A,q,k,W,Q,ut,V,at,ct,st,Pt;if(E>=O&&E>=N?(q=l,Q=p,at=g,Pt=y,l>=0?(M=c,A=u,k=d,W=f,ut=I,V=_,ct=S,st=L):(M=u,A=c,k=f,W=d,ut=_,V=I,ct=L,st=S)):O>=N?(q=c,Q=d,at=I,Pt=S,c>=0?(M=u,A=l,k=f,W=p,ut=_,V=g,ct=L,st=y):(M=l,A=u,k=p,W=f,ut=g,V=_,ct=y,st=L)):(q=u,Q=f,at=_,Pt=L,u>=0?(M=l,A=c,k=p,W=d,ut=g,V=I,ct=y,st=S):(M=c,A=l,k=d,W=p,ut=I,V=g,ct=S,st=y)),q===0)return null;let lt=M/q,wt=A/q,xt=1/q,Ht=k-lt*Q,le=W-wt*Q,pt=ut-lt*at,Zt=V-wt*at,ie=ct-lt*Pt,xe=st-wt*Pt,Jt=ie*Zt-xe*pt,se=Ht*xe-le*ie,He=pt*le-Zt*Ht;if(s){if(Jt<0||se<0||He<0)return null}else if((Jt<0||se<0||He<0)&&(Jt>0||se>0||He>0))return null;let _e=Jt+se+He;if(_e===0)return null;let ze=xt*(Jt*Q+se*at+He*Pt);return(_e>0?ze<0:ze>0)?null:this.at(ze/_e,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ld=new Ln,Jr=new Ya,Wl=new Qr,cd=new z,Xl=new z,ql=new z,Yl=new z,pu=new z,$l=new z,hd=new z,Zl=new z,mt=class extends fi{constructor(t=new Dn,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(pu.fromBufferAttribute(p,t),a?$l.addScaledVector(pu,u):$l.addScaledVector(pu.sub(e),u))}e.add($l)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(r),Jr.copy(t.ray).recast(t.near),!(Wl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Wl,cd)===null||Jr.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(r).invert(),Jr.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,I=d.length;g<I;g++){let _=d[g],y=a[_.materialIndex],S=Math.max(_.start,f.start),L=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let E=S,O=L;E<O;E+=3){let N=o.getX(E),M=o.getX(E+1),A=o.getX(E+2);s=Jl(this,y,t,n,c,u,p,N,M,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),I=Math.min(o.count,f.start+f.count);for(let _=g,y=I;_<y;_+=3){let S=o.getX(_),L=o.getX(_+1),E=o.getX(_+2);s=Jl(this,a,t,n,c,u,p,S,L,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,I=d.length;g<I;g++){let _=d[g],y=a[_.materialIndex],S=Math.max(_.start,f.start),L=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let E=S,O=L;E<O;E+=3){let N=E,M=E+1,A=E+2;s=Jl(this,y,t,n,c,u,p,N,M,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),I=Math.min(l.count,f.start+f.count);for(let _=g,y=I;_<y;_+=3){let S=_,L=_+1,E=_+2;s=Jl(this,a,t,n,c,u,p,S,L,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Xm(i,t,e,n,s,r,a,o){let l;if(t.side===si?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Nr,o),l===null)return null;Zl.copy(o),Zl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zl);return c<e.near||c>e.far?null:{distance:c,point:Zl.clone(),object:i}}function Jl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xl),i.getVertexPosition(l,ql),i.getVertexPosition(c,Yl);let u=Xm(i,t,e,n,Xl,ql,Yl,hd);if(u){let p=new z;ar.getBarycoord(hd,Xl,ql,Yl,p),s&&(u.uv=ar.getInterpolatedAttribute(s,o,l,c,p,new Nt)),r&&(u.uv1=ar.getInterpolatedAttribute(r,o,l,c,p,new Nt)),a&&(u.normal=ar.getInterpolatedAttribute(a,o,l,c,p,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new z,materialIndex:0};ar.getNormal(Xl,ql,Yl,d.normal),u.face=d,u.barycoord=p}return u}var bc=class extends Ai{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ui,u=ui,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=new Qr,qm=new Nt(.5,.5),Kl=new z,Rr=class{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=us,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],g=r[8],I=r[9],_=r[10],y=r[11],S=r[12],L=r[13],E=r[14],O=r[15];if(s[0].setComponents(c-a,f-u,y-g,O-S).normalize(),s[1].setComponents(c+a,f+u,y+g,O+S).normalize(),s[2].setComponents(c+o,f+p,y+I,O+L).normalize(),s[3].setComponents(c-o,f-p,y-I,O-L).normalize(),n)s[4].setComponents(l,d,_,E).normalize(),s[5].setComponents(c-l,f-d,y-_,O-E).normalize();else if(s[4].setComponents(c-l,f-d,y-_,O-E).normalize(),e===us)s[5].setComponents(c+l,f+d,y+_,O+E).normalize();else if(e===ka)s[5].setComponents(l,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(t){Kr.center.set(0,0,0);let e=qm.distanceTo(t.center);return Kr.radius=.7071067811865476+e,Kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Kl.x=s.normal.x>0?t.max.x:t.min.x,Kl.y=s.normal.y>0?t.max.y:t.min.y,Kl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ud=new Ln,Mc=class i{constructor(){this.coordinateSystem=us,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ud.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Rr),n[s].setFromProjectionMatrix(ud,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Rr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ta=class extends Xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fd=new Ln,Su=new Ya,jl=new Qr,Ql=new z,$a=class extends fi{constructor(t=new Dn,e=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(s),jl.radius+=r,t.ray.intersectsSphere(jl)===!1)return;fd.copy(s).invert(),Su.copy(t.ray).applyMatrix4(fd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,I=f;g<I;g++){let _=c.getX(g);Ql.fromBufferAttribute(p,_),dd(Ql,_,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=d,I=f;g<I;g++)Ql.fromBufferAttribute(p,g),dd(Ql,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dd(i,t,e,n,s,r,a){let o=Su.distanceSqToPoint(i);if(o<e){let l=new z;Su.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vo=class extends Ai{constructor(t=[],e=ua,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ea=class extends Ai{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hr=class extends Ai{constructor(t,e,n=Ms,s,r,a,o=ui,l=ui,c,u=lr,p=1){if(u!==lr&&u!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ha(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ho=class extends hr{constructor(t,e=Ms,n=ua,s,r,a=ui,o=ui,l,c=lr){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wo=class extends Ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bn=class i extends Dn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(p,2));function g(I,_,y,S,L,E,O,N,M,A,q){let k=E/M,W=O/A,Q=E/2,ut=O/2,V=N/2,at=M+1,ct=A+1,st=0,Pt=0,lt=new z;for(let wt=0;wt<ct;wt++){let xt=wt*W-ut;for(let Ht=0;Ht<at;Ht++){let le=Ht*k-Q;lt[I]=le*S,lt[_]=xt*L,lt[y]=V,c.push(lt.x,lt.y,lt.z),lt[I]=0,lt[_]=0,lt[y]=N>0?1:-1,u.push(lt.x,lt.y,lt.z),p.push(Ht/M),p.push(1-wt/A),st+=1}}for(let wt=0;wt<A;wt++)for(let xt=0;xt<M;xt++){let Ht=d+xt+at*wt,le=d+xt+at*(wt+1),pt=d+(xt+1)+at*(wt+1),Zt=d+(xt+1)+at*wt;l.push(Ht,le,Zt),l.push(le,pt,Zt),Pt+=6}o.addGroup(f,Pt,q),f+=Pt,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ti=class i extends Dn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new z,u=new Nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ri=class i extends Dn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],g=0,I=[],_=n/2,y=0;S(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function S(){let E=new z,O=new z,N=0,M=(e-t)/n;for(let A=0;A<=r;A++){let q=[],k=A/r,W=k*(e-t)+t;for(let Q=0;Q<=s;Q++){let ut=Q/s,V=ut*l+o,at=Math.sin(V),ct=Math.cos(V);O.x=W*at,O.y=-k*n+_,O.z=W*ct,p.push(O.x,O.y,O.z),E.set(at,M,ct).normalize(),d.push(E.x,E.y,E.z),f.push(ut,1-k),q.push(g++)}I.push(q)}for(let A=0;A<s;A++)for(let q=0;q<r;q++){let k=I[q][A],W=I[q+1][A],Q=I[q+1][A+1],ut=I[q][A+1];(t>0||q!==0)&&(u.push(k,W,ut),N+=3),(e>0||q!==r-1)&&(u.push(W,Q,ut),N+=3)}c.addGroup(y,N,0),y+=N}function L(E){let O=g,N=new Nt,M=new z,A=0,q=E===!0?t:e,k=E===!0?1:-1;for(let Q=1;Q<=s;Q++)p.push(0,_*k,0),d.push(0,k,0),f.push(.5,.5),g++;let W=g;for(let Q=0;Q<=s;Q++){let V=Q/s*l+o,at=Math.cos(V),ct=Math.sin(V);M.x=q*ct,M.y=_*k,M.z=q*at,p.push(M.x,M.y,M.z),d.push(0,k,0),N.x=at*.5+.5,N.y=ct*.5*k+.5,f.push(N.x,N.y),g++}for(let Q=0;Q<s;Q++){let ut=O+Q,V=W+Q;E===!0?u.push(V,V+1,ut):u.push(V+1,V,ut),A+=3}c.addGroup(y,A,E===!0?1:2),y+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pi=class i extends Ri{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sc=class i extends Dn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let L=new z,E=new z,O=new z;for(let N=0;N<e.length;N+=3)f(e[N+0],L),f(e[N+1],E),f(e[N+2],O),l(L,E,O,S)}function l(S,L,E,O){let N=O+1,M=[];for(let A=0;A<=N;A++){M[A]=[];let q=S.clone().lerp(E,A/N),k=L.clone().lerp(E,A/N),W=N-A;for(let Q=0;Q<=W;Q++)Q===0&&A===N?M[A][Q]=q:M[A][Q]=q.clone().lerp(k,Q/W)}for(let A=0;A<N;A++)for(let q=0;q<2*(N-A)-1;q++){let k=Math.floor(q/2);q%2===0?(d(M[A][k+1]),d(M[A+1][k]),d(M[A][k])):(d(M[A][k+1]),d(M[A+1][k+1]),d(M[A+1][k]))}}function c(S){let L=new z;for(let E=0;E<r.length;E+=3)L.x=r[E+0],L.y=r[E+1],L.z=r[E+2],L.normalize().multiplyScalar(S),r[E+0]=L.x,r[E+1]=L.y,r[E+2]=L.z}function u(){let S=new z;for(let L=0;L<r.length;L+=3){S.x=r[L+0],S.y=r[L+1],S.z=r[L+2];let E=_(S)/2/Math.PI+.5,O=y(S)/Math.PI+.5;a.push(E,1-O)}g(),p()}function p(){for(let S=0;S<a.length;S+=6){let L=a[S+0],E=a[S+2],O=a[S+4],N=Math.max(L,E,O),M=Math.min(L,E,O);N>.9&&M<.1&&(L<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,L){let E=S*3;L.x=t[E+0],L.y=t[E+1],L.z=t[E+2]}function g(){let S=new z,L=new z,E=new z,O=new z,N=new Nt,M=new Nt,A=new Nt;for(let q=0,k=0;q<r.length;q+=9,k+=6){S.set(r[q+0],r[q+1],r[q+2]),L.set(r[q+3],r[q+4],r[q+5]),E.set(r[q+6],r[q+7],r[q+8]),N.set(a[k+0],a[k+1]),M.set(a[k+2],a[k+3]),A.set(a[k+4],a[k+5]),O.copy(S).add(L).add(E).divideScalar(3);let W=_(O);I(N,k+0,S,W),I(M,k+2,L,W),I(A,k+4,E,W)}}function I(S,L,E,O){O<0&&S.x===1&&(a[L]=S.x-1),E.x===0&&E.z===0&&(a[L]=O/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function y(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ss=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new Ln;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(en(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(en(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Za=class extends ss{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wc=class extends Za{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rf(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var pd=new z,md=new z,mu=new rf,gu=new rf,xu=new rf,Tc=class extends ss{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(md.subVectors(s[0],s[1]).add(s[0]),c=md);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),I=Math.pow(p.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f);I<1e-4&&(I=1),g<1e-4&&(g=I),_<1e-4&&(_=I),mu.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,I,_),gu.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,I,_),xu.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,I,_)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),gu.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),xu.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(mu.calc(l),gu.calc(l),xu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ym(i,t){let e=1-i;return e*e*t}function $m(i,t){return 2*(1-i)*i*t}function Zm(i,t){return i*i*t}function Lo(i,t,e,n){return Ym(i,t)+$m(i,e)+Zm(i,n)}function Jm(i,t){let e=1-i;return e*e*e*t}function Km(i,t){let e=1-i;return 3*e*e*i*t}function jm(i,t){return 3*(1-i)*i*i*t}function Qm(i,t){return i*i*i*t}function Do(i,t,e,n,s){return Jm(i,t)+Km(i,e)+jm(i,n)+Qm(i,s)}var Xo=class extends ss{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Do(t,s.x,r.x,a.x,o.x),Do(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ec=class extends ss{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Do(t,s.x,r.x,a.x,o.x),Do(t,s.y,r.y,a.y,o.y),Do(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qo=class extends ss{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends ss{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends ss{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Lo(t,s.x,r.x,a.x),Lo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends ss{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Lo(t,s.x,r.x,a.x),Lo(t,s.y,r.y,a.y),Lo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends ss{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(gd(o,l.x,c.x,u.x,p.x),gd(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},wu=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Tc,CubicBezierCurve:Xo,CubicBezierCurve3:Ec,EllipseCurve:Za,LineCurve:qo,LineCurve3:Ac,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Rc,SplineCurve:$o}),Cc=class extends ss{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zo=class extends Cc{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qo(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Yo(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Xo(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Za(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ur=class extends Zo{constructor(t){super(t),this.uuid=Fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Zo().fromJSON(s))}return this}};function t0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=xp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=r0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>p&&(p=g)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return Jo(r,a,e,o,l,c,0),a}function xp(i,t,e,n,s){let r;if(s===g0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=xd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=xd(a/n|0,i[a],i[a+1],r);return r&&Ja(r,r.next)&&(jo(r),r=r.next),r}function na(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ja(e,e.next)||qn(e.prev,e,e.next)===0)){if(jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&h0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?n0(i,n,s,r):e0(i)){t.push(l.i,i.i,c.i),jo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=i0(na(i),t),Jo(i,t,e,n,s,r,2)):a===2&&s0(i,t,e,n,s,r):Jo(na(i),t,e,n,s,r,1);break}}}function e0(i){let t=i.prev,e=i,n=i.next;if(qn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=f&&Io(s,o,r,l,a,c,g.x,g.y)&&qn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function n0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(qn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,p,d),I=Math.max(o,l,c),_=Math.max(u,p,d),y=Tu(f,g,t,e,n),S=Tu(I,_,t,e,n),L=i.prevZ,E=i.nextZ;for(;L&&L.z>=y&&E&&E.z<=S;){if(L.x>=f&&L.x<=I&&L.y>=g&&L.y<=_&&L!==s&&L!==a&&Io(o,u,l,p,c,d,L.x,L.y)&&qn(L.prev,L,L.next)>=0||(L=L.prevZ,E.x>=f&&E.x<=I&&E.y>=g&&E.y<=_&&E!==s&&E!==a&&Io(o,u,l,p,c,d,E.x,E.y)&&qn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;L&&L.z>=y;){if(L.x>=f&&L.x<=I&&L.y>=g&&L.y<=_&&L!==s&&L!==a&&Io(o,u,l,p,c,d,L.x,L.y)&&qn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;E&&E.z<=S;){if(E.x>=f&&E.x<=I&&E.y>=g&&E.y<=_&&E!==s&&E!==a&&Io(o,u,l,p,c,d,E.x,E.y)&&qn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function i0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ja(n,s)&&yp(n,e,e.next,s)&&Ko(n,s)&&Ko(s,n)&&(t.push(n.i,e.i,s.i),jo(e),jo(e.next),e=i=s),e=e.next}while(e!==i);return na(e)}function s0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d0(a,o)){let l=vp(a,o);a=na(a,a.next),l=na(l,l.next),Jo(a,t,e,n,s,r,0),Jo(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function r0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=xp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(f0(c))}s.sort(a0);for(let r=0;r<s.length;r++)e=o0(s[r],e);return e}function a0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function o0(i,t){let e=l0(i,t);if(!e)return t;let n=vp(e,i);return na(n,n.next),na(e,e.next)}function l0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ja(i,e))return e;do{if(Ja(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_p(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Ko(e,i)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&c0(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function c0(i,t){return qn(i.prev,i,t.prev)<0&&qn(t.next,i,i.next)<0}function h0(i,t,e,n){let s=i;do s.z===0&&(s.z=Tu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,u0(s)}function u0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Tu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function f0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _p(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Io(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&_p(i,t,e,n,s,r,a,o)}function d0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!p0(i,t)&&(Ko(i,t)&&Ko(t,i)&&m0(i,t)&&(qn(i.prev,i,t.prev)||qn(i,t.prev,t))||Ja(i,t)&&qn(i.prev,i,i.next)>0&&qn(t.prev,t,t.next)>0)}function qn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ja(i,t){return i.x===t.x&&i.y===t.y}function yp(i,t,e,n){let s=ec(qn(i,t,e)),r=ec(qn(i,t,n)),a=ec(qn(e,n,i)),o=ec(qn(e,n,t));return!!(s!==r&&a!==o||s===0&&tc(i,e,t)||r===0&&tc(i,n,t)||a===0&&tc(e,i,n)||o===0&&tc(e,t,n))}function tc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ec(i){return i>0?1:i<0?-1:0}function p0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ko(i,t){return qn(i.prev,i,i.next)<0?qn(i,t,i.next)>=0&&qn(i,i.prev,t)>=0:qn(i,t,i.prev)<0||qn(i,i.next,t)<0}function m0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vp(i,t){let e=Eu(i.i,i.x,i.y),n=Eu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xd(i,t,e,n){let s=Eu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Eu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Au=class{static triangulate(t,e,n=2){return t0(t,e,n)}},ks=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_d(t),yd(n,t);let a=t.length;e.forEach(_d);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,yd(n,e[l]);let o=Au.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _d(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ka=class i extends Dn{constructor(t=new ur([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new De(s,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:x0,L,E=!1,O,N,M,A;if(y){L=y.getSpacedPoints(u),E=!0,d=!1;let St=y.isCatmullRomCurve3?y.closed:!1;O=y.computeFrenetFrames(u,St),N=new z,M=new z,A=new z}d||(_=0,f=0,g=0,I=0);let q=o.extractPoints(c),k=q.shape,W=q.holes;if(!ks.isClockWise(k)){k=k.reverse();for(let St=0,kt=W.length;St<kt;St++){let Rt=W[St];ks.isClockWise(Rt)&&(W[St]=Rt.reverse())}}function ut(St){let Rt=10000000000000001e-36,Vt=St[0];for(let Ut=1;Ut<=St.length;Ut++){let Ne=Ut%St.length,ce=St[Ne],Xe=ce.x-Vt.x,qe=ce.y-Vt.y,nn=Xe*Xe+qe*qe,X=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(Vt.x),Math.abs(Vt.y)),Re=Rt*X*X;if(nn<=Re){St.splice(Ne,1),Ut--;continue}Vt=ce}}ut(k),W.forEach(ut);let V=W.length,at=k;for(let St=0;St<V;St++){let kt=W[St];k=k.concat(kt)}function ct(St,kt,Rt){return kt||Ce("ExtrudeGeometry: vec does not exist"),St.clone().addScaledVector(kt,Rt)}let st=k.length;function Pt(St,kt,Rt){let Vt,Ut,Ne,ce=St.x-kt.x,Xe=St.y-kt.y,qe=Rt.x-St.x,nn=Rt.y-St.y,X=ce*ce+Xe*Xe,Re=ce*nn-Xe*qe;if(Math.abs(Re)>Number.EPSILON){let Fe=Math.sqrt(X),ke=Math.sqrt(qe*qe+nn*nn),Ft=kt.x-Xe/Fe,_n=kt.y+ce/Fe,de=Rt.x-nn/ke,Me=Rt.y+qe/ke,F=((de-Ft)*nn-(Me-_n)*qe)/(ce*nn-Xe*qe);Vt=Ft+ce*F-St.x,Ut=_n+Xe*F-St.y;let w=Vt*Vt+Ut*Ut;if(w<=2)return new Nt(Vt,Ut);Ne=Math.sqrt(w/2)}else{let Fe=!1;ce>Number.EPSILON?qe>Number.EPSILON&&(Fe=!0):ce<-Number.EPSILON?qe<-Number.EPSILON&&(Fe=!0):Math.sign(Xe)===Math.sign(nn)&&(Fe=!0),Fe?(Vt=-Xe,Ut=ce,Ne=Math.sqrt(X)):(Vt=ce,Ut=Xe,Ne=Math.sqrt(X/2))}return new Nt(Vt/Ne,Ut/Ne)}let lt=[];for(let St=0,kt=at.length,Rt=kt-1,Vt=St+1;St<kt;St++,Rt++,Vt++)Rt===kt&&(Rt=0),Vt===kt&&(Vt=0),lt[St]=Pt(at[St],at[Rt],at[Vt]);let wt=[],xt,Ht=lt.concat();for(let St=0,kt=V;St<kt;St++){let Rt=W[St];xt=[];for(let Vt=0,Ut=Rt.length,Ne=Ut-1,ce=Vt+1;Vt<Ut;Vt++,Ne++,ce++)Ne===Ut&&(Ne=0),ce===Ut&&(ce=0),xt[Vt]=Pt(Rt[Vt],Rt[Ne],Rt[ce]);wt.push(xt),Ht=Ht.concat(xt)}let le;if(_===0)le=ks.triangulateShape(at,W);else{let St=[],kt=[];for(let Rt=0;Rt<_;Rt++){let Vt=Rt/_,Ut=f*Math.cos(Vt*Math.PI/2),Ne=g*Math.sin(Vt*Math.PI/2)+I;for(let ce=0,Xe=at.length;ce<Xe;ce++){let qe=ct(at[ce],lt[ce],Ne);se(qe.x,qe.y,-Ut),Vt===0&&St.push(qe)}for(let ce=0,Xe=V;ce<Xe;ce++){let qe=W[ce];xt=wt[ce];let nn=[];for(let X=0,Re=qe.length;X<Re;X++){let Fe=ct(qe[X],xt[X],Ne);se(Fe.x,Fe.y,-Ut),Vt===0&&nn.push(Fe)}Vt===0&&kt.push(nn)}}le=ks.triangulateShape(St,kt)}let pt=le.length,Zt=g+I;for(let St=0;St<st;St++){let kt=d?ct(k[St],Ht[St],Zt):k[St];E?(M.copy(O.normals[0]).multiplyScalar(kt.x),N.copy(O.binormals[0]).multiplyScalar(kt.y),A.copy(L[0]).add(M).add(N),se(A.x,A.y,A.z)):se(kt.x,kt.y,0)}for(let St=1;St<=u;St++)for(let kt=0;kt<st;kt++){let Rt=d?ct(k[kt],Ht[kt],Zt):k[kt];E?(M.copy(O.normals[St]).multiplyScalar(Rt.x),N.copy(O.binormals[St]).multiplyScalar(Rt.y),A.copy(L[St]).add(M).add(N),se(A.x,A.y,A.z)):se(Rt.x,Rt.y,p/u*St)}for(let St=_-1;St>=0;St--){let kt=St/_,Rt=f*Math.cos(kt*Math.PI/2),Vt=g*Math.sin(kt*Math.PI/2)+I;for(let Ut=0,Ne=at.length;Ut<Ne;Ut++){let ce=ct(at[Ut],lt[Ut],Vt);se(ce.x,ce.y,p+Rt)}for(let Ut=0,Ne=W.length;Ut<Ne;Ut++){let ce=W[Ut];xt=wt[Ut];for(let Xe=0,qe=ce.length;Xe<qe;Xe++){let nn=ct(ce[Xe],xt[Xe],Vt);E?se(nn.x,nn.y+L[u-1].y,L[u-1].x+Rt):se(nn.x,nn.y,p+Rt)}}}ie(),xe();function ie(){let St=s.length/3;if(d){let kt=0,Rt=st*kt;for(let Vt=0;Vt<pt;Vt++){let Ut=le[Vt];He(Ut[2]+Rt,Ut[1]+Rt,Ut[0]+Rt)}kt=u+_*2,Rt=st*kt;for(let Vt=0;Vt<pt;Vt++){let Ut=le[Vt];He(Ut[0]+Rt,Ut[1]+Rt,Ut[2]+Rt)}}else{for(let kt=0;kt<pt;kt++){let Rt=le[kt];He(Rt[2],Rt[1],Rt[0])}for(let kt=0;kt<pt;kt++){let Rt=le[kt];He(Rt[0]+st*u,Rt[1]+st*u,Rt[2]+st*u)}}n.addGroup(St,s.length/3-St,0)}function xe(){let St=s.length/3,kt=0;Jt(at,kt),kt+=at.length;for(let Rt=0,Vt=W.length;Rt<Vt;Rt++){let Ut=W[Rt];Jt(Ut,kt),kt+=Ut.length}n.addGroup(St,s.length/3-St,1)}function Jt(St,kt){let Rt=St.length;for(;--Rt>=0;){let Vt=Rt,Ut=Rt-1;Ut<0&&(Ut=St.length-1);for(let Ne=0,ce=u+_*2;Ne<ce;Ne++){let Xe=st*Ne,qe=st*(Ne+1),nn=kt+Vt+Xe,X=kt+Ut+Xe,Re=kt+Ut+qe,Fe=kt+Vt+qe;_e(nn,X,Re,Fe)}}}function se(St,kt,Rt){l.push(St),l.push(kt),l.push(Rt)}function He(St,kt,Rt){ze(St),ze(kt),ze(Rt);let Vt=s.length/3,Ut=S.generateTopUV(n,s,Vt-3,Vt-2,Vt-1);We(Ut[0]),We(Ut[1]),We(Ut[2])}function _e(St,kt,Rt,Vt){ze(St),ze(kt),ze(Vt),ze(kt),ze(Rt),ze(Vt);let Ut=s.length/3,Ne=S.generateSideWallUV(n,s,Ut-6,Ut-3,Ut-2,Ut-1);We(Ne[0]),We(Ne[1]),We(Ne[3]),We(Ne[1]),We(Ne[2]),We(Ne[3])}function ze(St){s.push(l[St*3+0]),s.push(l[St*3+1]),s.push(l[St*3+2])}function We(St){r.push(St.x),r.push(St.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wu[s.type]().fromJSON(s)),new i(n,t.options)}},x0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],I=t[r*3],_=t[r*3+1],y=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-p),new Nt(d,1-g),new Nt(I,1-y)]:[new Nt(o,1-l),new Nt(u,1-p),new Nt(f,1-g),new Nt(_,1-y)]}};function _0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var vs=class i extends Sc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Qo=class i extends Dn{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,p=new z,d=new Nt,f=new z,g=new z,I=new z,_=0,y=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:_=t[S+1].x-t[S].x,y=t[S+1].y-t[S].y,f.x=y*1,f.y=-_,f.z=y*0,I.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:I.normalize(),l.push(I.x,I.y,I.z);break;default:_=t[S+1].x-t[S].x,y=t[S+1].y-t[S].y,f.x=y*1,f.y=-_,f.z=y*0,g.copy(f),f.x+=I.x,f.y+=I.y,f.z+=I.z,f.normalize(),l.push(f.x,f.y,f.z),I.copy(g)}for(let S=0;S<=e;S++){let L=n+S*u*s,E=Math.sin(L),O=Math.cos(L);for(let N=0;N<=t.length-1;N++){p.x=t[N].x*E,p.y=t[N].y,p.z=t[N].x*O,a.push(p.x,p.y,p.z),d.x=S/e,d.y=N/(t.length-1),o.push(d.x,d.y);let M=l[3*N+0]*E,A=l[3*N+1],q=l[3*N+0]*O;c.push(M,A,q)}}for(let S=0;S<e;S++)for(let L=0;L<t.length-1;L++){let E=L+S*t.length,O=E,N=E+t.length,M=E+t.length+1,A=E+1;r.push(O,N,A),r.push(M,A,N)}this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ke=class i extends Dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],g=[],I=[],_=[];for(let y=0;y<u;y++){let S=y*d-a;for(let L=0;L<c;L++){let E=L*p-r;g.push(E,-S,0),I.push(0,0,1),_.push(L/o),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let S=0;S<o;S++){let L=S+c*y,E=S+c*(y+1),O=S+1+c*(y+1),N=S+1+c*y;f.push(L,E,N),f.push(E,O,N)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(I,3)),this.setAttribute("uv",new De(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},tl=class i extends Dn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],p=t,d=(e-t)/s,f=new z,g=new Nt;for(let I=0;I<=s;I++){for(let _=0;_<=n;_++){let y=r+_/n*a;f.x=p*Math.cos(y),f.y=p*Math.sin(y),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}p+=d}for(let I=0;I<s;I++){let _=I*(n+1);for(let y=0;y<n;y++){let S=y+_,L=S,E=S+n+1,O=S+n+2,N=S+1;o.push(L,E,N),o.push(E,O,N)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ia=class i extends Dn{constructor(t=new ur([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(r,3)),this.setAttribute("uv",new De(a,2));function c(u){let p=s.length/3,d=u.extractPoints(e),f=d.shape,g=d.holes;ks.isClockWise(f)===!1&&(f=f.reverse());for(let _=0,y=g.length;_<y;_++){let S=g[_];ks.isClockWise(S)===!0&&(g[_]=S.reverse())}let I=ks.triangulateShape(f,g);for(let _=0,y=g.length;_<y;_++){let S=g[_];f=f.concat(S)}for(let _=0,y=f.length;_<y;_++){let S=f[_];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let _=0,y=I.length;_<y;_++){let S=I[_],L=S[0]+p,E=S[1]+p,O=S[2]+p;n.push(L,E,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return y0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function y0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var mi=class i extends Dn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new z,d=new z,f=[],g=[],I=[],_=[];for(let y=0;y<=n;y++){let S=[],L=y/n,E=a+L*o,O=t*Math.cos(E),N=Math.sqrt(t*t-O*O),M=0;y===0&&a===0?M=.5/e:y===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let q=A/e,k=s+q*r;p.x=-N*Math.cos(k),p.y=O,p.z=N*Math.sin(k),g.push(p.x,p.y,p.z),d.copy(p).normalize(),I.push(d.x,d.y,d.z),_.push(q+M,1-L),S.push(c++)}u.push(S)}for(let y=0;y<n;y++)for(let S=0;S<e;S++){let L=u[y][S+1],E=u[y][S],O=u[y+1][S],N=u[y+1][S+1];(y!==0||a>0)&&f.push(L,E,N),(y!==n-1||l<Math.PI)&&f.push(E,O,N)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(I,3)),this.setAttribute("uv",new De(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends Dn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],p=[],d=new z,f=new z,g=new z;for(let I=0;I<=n;I++){let _=a+I/n*o;for(let y=0;y<=s;y++){let S=y/s*r;f.x=(t+e*Math.cos(_))*Math.cos(S),f.y=(t+e*Math.cos(_))*Math.sin(S),f.z=e*Math.sin(_),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),p.push(y/s),p.push(I/n)}}for(let I=1;I<=n;I++)for(let _=1;_<=s;_++){let y=(s+1)*I+_-1,S=(s+1)*(I-1)+_-1,L=(s+1)*(I-1)+_,E=(s+1)*I+_;l.push(y,S,E),l.push(S,L,E)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function da(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vd(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ci(i){let t={};for(let e=0;e<i.length;e++){let n=da(i[e]);for(let s in n)t[s]=n[s]}return t}function vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function v0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function af(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:an.workingColorSpace}var bp={clone:da,merge:Ci},b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qs=class extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=da(t.uniforms),this.uniformsGroups=v0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Gn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ln().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ic=class extends qs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var gn=class extends Xs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pc=class extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lc=class extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Na(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Cr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bu:r=t,o=2*e-n;break;case Mu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:a=t,l=2*n-e;break;case Mu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),I=g*g,_=I*g,y=-d*_+2*d*I-d*g,S=(1+d)*_+(-1.5-2*d)*I+(-.5+d)*g+1,L=(-1-f)*_+(1.5+f)*I+.5*g,E=f*_-f*I;for(let O=0;O!==o;++O)r[O]=y*a[u+O]+S*a[c+O]+L*a[l+O]+E*a[p+O];return r}},Nc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},Uc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fc=class extends Cr{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),I=1-g;for(let _=0;_!==o;++_)r[_]=a[c+_]*I+a[l+_]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let I=a[c+g],_=a[l+g],y=f*d+g*2,S=p[y],L=p[y+1],E=t*d+g*2,O=u[E],N=u[E+1],M=w0(n,e,S,O,s);r[g]=Mp(M,I,L,N,_)}return r}};function Mp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function S0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function w0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Mp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=S0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rs=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Na(e,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Na(t.times,Array),values:Na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nc(t.settings)&&(n.settings={inTangents:Na(t.settings.inTangents,Array),outTangents:Na(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case No:e=this.InterpolantFactoryMethodDiscrete;break;case gc:e=this.InterpolantFactoryMethodLinear;break;case rc:e=this.InterpolantFactoryMethodSmooth;break;case yu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return gc;case this.InterpolantFactoryMethodSmooth:return rc;case this.InterpolantFactoryMethodBezier:return yu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;nc(this.settings)&&(bd(this.settings.inTangents,t),bd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nc(this.settings)&&(Md(this.settings.inTangents,t),Md(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Am(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let I=e[p+g];if(I!==e[d+g]||I!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Md(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}rs.prototype.ValueTypeName="";rs.prototype.TimeBufferType=Float32Array;rs.prototype.ValueBufferType=Float32Array;rs.prototype.DefaultInterpolation=gc;var Ir=class extends rs{constructor(t,e,n){super(t,e,n)}};Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=No;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}};Oc.prototype.ValueTypeName="color";var Bc=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}};Bc.prototype.ValueTypeName="number";var zc=class extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Hs.slerpFlat(r,0,a,c-o,a,c,l);return r}},el=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends rs{constructor(t,e,n){super(t,e,n)}};Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=No;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}};kc.prototype.ValueTypeName="vector";var oc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Sd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Sd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Sd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Gc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new Gc,ja=class{constructor(t){this.manager=t!==void 0?t:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ua=new WeakMap,Vc=class extends ja{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=oc.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let p=Ua.get(a);p===void 0&&(p=[],Ua.set(a,p)),p.push({onLoad:e,onError:s})}return a}let o=Ga("img");function l(){u(),e&&e(this);let p=Ua.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onLoad&&f.onLoad(this)}Ua.delete(this),r.manager.itemEnd(t)}function c(p){u(),s&&s(p),oc.remove(`image:${t}`);let d=Ua.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(p)}Ua.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oc.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var sa=class extends ja{constructor(t){super(t)}load(t,e,n,s){let r=new Ai,a=new Vc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ra=class extends fi{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_u=new Ln,wd=new z,Td=new z,nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new Ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(wd),Td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Td),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_u,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ka||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(_u)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ic=new z,sc=new Hs,Bs=new z,il=class extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=us,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ic,sc,Bs),Bs.x===1&&Bs.y===1&&Bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,Bs.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ic,sc,Bs),Bs.x===1&&Bs.y===1&&Bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,Bs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Er=new z,Ed=new Nt,Ad=new Nt,ni=class extends il{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,Ad),e.subVectors(Ad,Ed)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ru=class extends nl{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}},aa=class extends ra{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},sl=class extends il{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cu=class extends nl{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fi.DEFAULT_UP),this.updateMatrix(),this.target=new fi,this.shadow=new Cu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},rl=class extends ra{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fa=-90,Oa=1,Qa=class extends fi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ni(Fa,Oa,t,e);s.layers=this.layers,this.add(s);let r=new ni(Fa,Oa,t,e);r.layers=this.layers,this.add(r);let a=new ni(Fa,Oa,t,e);a.layers=this.layers,this.add(a);let o=new ni(Fa,Oa,t,e);o.layers=this.layers,this.add(o);let l=new ni(Fa,Oa,t,e);l.layers=this.layers,this.add(l);let c=new ni(Fa,Oa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===us)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=I,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hc=class extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var of="\\[\\]\\.:\\/",T0=new RegExp("["+of+"]","g"),lf="[^"+of+"]",E0="[^"+of.replace("\\.","")+"]",A0=/((?:WC+[\/:])*)/.source.replace("WC",lf),R0=/(WCOD+)?/.source.replace("WCOD",E0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),P0=new RegExp("^"+A0+R0+C0+I0+"$"),L0=["material","materials","bones","map"],Iu=class{constructor(t,e,n){let s=n||zn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},zn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(t){let e=P0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);L0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zn.Composite=Iu;zn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zn.prototype.GetterByBindingType=[zn.prototype._getValue_direct,zn.prototype._getValue_array,zn.prototype._getValue_arrayElement,zn.prototype._getValue_toArray];zn.prototype.SetterByBindingTypeAndVersioning=[[zn.prototype._setValue_direct,zn.prototype._setValue_direct_setNeedsUpdate,zn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zn.prototype._setValue_array,zn.prototype._setValue_array_setNeedsUpdate,zn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zn.prototype._setValue_arrayElement,zn.prototype._setValue_arrayElement_setNeedsUpdate,zn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zn.prototype._setValue_fromArray,zn.prototype._setValue_fromArray_setNeedsUpdate,zn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V1=new Float32Array(1);var Rd=new Ln,oa=class{constructor(t,e,n=0,s=1/0){this.ray=new Ya(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(t,e=!0,n=[]){return Pu(t,this,n,e),n.sort(Cd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pu(t[s],this,n,e);return n.sort(Cd),n}};function Cd(i,t){return i.distance-t.distance}function Pu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],t,e,!0)}}var pf=class pf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};pf.prototype.isMatrix2=!0;var Lu=pf;function cf(i,t,e,n){let s=D0(n);switch(e){case Ju:return i*t;case ju:return i*t/s.components*s.byteLength;case jc:return i*t/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case Ku:return i*t*3/s.components*s.byteLength;case Ts:return i*t*4/s.components*s.byteLength;case th:return i*t*4/s.components*s.byteLength;case ol:case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:case sh:return Math.max(i,16)*Math.max(t,8)/4;case eh:case ih:return Math.max(i,8)*Math.max(t,8)/2;case rh:case ah:case lh:case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oh:case ul:case hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Th:case Eh:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fl:case Ih:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function D0(i){switch(i){case Zi:case qu:return{byteLength:1,components:1};case io:case Yu:case ws:return{byteLength:2,components:1};case Jc:case Kc:return{byteLength:2,components:4};case Ms:case Zc:case Ss:return{byteLength:4,components:1};case $u:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function k0(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],I=p[f];I.start<=g.start+g.count+1?g.count=Math.max(g.count,I.start+I.count-g.start):(++d,p[d]=I)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let I=p[f];i.bufferSubData(c,I.start*u.BYTES_PER_ELEMENT,u,I.start,I.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tg=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hg=`#define PI 3.141592653589793
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
} // validated`,ug=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
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
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
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
#endif`,Bg=`uniform sampler2D dfgLUT;
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
}`,zg=`
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
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
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform float backgroundBlurriness;
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,e_=`uniform vec3 diffuse;
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,a_=`#define NORMAL
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
}`,o_=`#define NORMAL
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
}`,l_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,u_=`#define STANDARD
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
}`,f_=`#define TOON
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
}`,d_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,x_=`uniform vec3 color;
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
}`,__=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:G0,alphahash_pars_fragment:V0,alphamap_fragment:H0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:Y0,aomap_pars_fragment:$0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:K0,beginnormal_vertex:j0,bsdfs:Q0,iridescence_fragment:tg,bumpmap_pars_fragment:eg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:ag,color_pars_fragment:og,color_pars_vertex:lg,color_vertex:cg,common:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:fg,displacementmap_vertex:dg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:_g,envmap_common_pars_fragment:yg,envmap_pars_fragment:vg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Lg,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:wg,fog_fragment:Tg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Rg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Pg,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ng,lights_phong_fragment:Ug,lights_phong_pars_fragment:Fg,lights_physical_fragment:Og,lights_physical_pars_fragment:Bg,lights_fragment_begin:zg,lights_fragment_maps:kg,lights_fragment_end:Gg,lightprobes_pars_fragment:Vg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:qg,map_fragment:Yg,map_pars_fragment:$g,map_particle_fragment:Zg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:jg,morphinstance_vertex:Qg,morphcolor_vertex:tx,morphnormal_vertex:ex,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ax,normal_pars_vertex:ox,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:fx,iridescence_pars_fragment:dx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:xx,dithering_fragment:_x,dithering_pars_fragment:yx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Sx,shadowmap_vertex:wx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Ix,specularmap_pars_fragment:Px,tonemapping_fragment:Lx,tonemapping_pars_fragment:Dx,transmission_fragment:Nx,transmission_pars_fragment:Ux,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:Bx,worldpos_vertex:zx,background_vert:kx,background_frag:Gx,backgroundCube_vert:Vx,backgroundCube_frag:Hx,cube_vert:Wx,cube_frag:Xx,depth_vert:qx,depth_frag:Yx,distance_vert:$x,distance_frag:Zx,equirect_vert:Jx,equirect_frag:Kx,linedashed_vert:jx,linedashed_frag:Qx,meshbasic_vert:t_,meshbasic_frag:e_,meshlambert_vert:n_,meshlambert_frag:i_,meshmatcap_vert:s_,meshmatcap_frag:r_,meshnormal_vert:a_,meshnormal_frag:o_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:h_,meshphysical_frag:u_,meshtoon_vert:f_,meshtoon_frag:d_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:x_,sprite_vert:__,sprite_frag:y_},Qt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Zs={basic:{uniforms:Ci([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ci([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ci([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ci([Qt.common,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.roughnessmap,Qt.metalnessmap,Qt.fog,Qt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ci([Qt.common,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.gradientmap,Qt.fog,Qt.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ci([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ci([Qt.points,Qt.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ci([Qt.common,Qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ci([Qt.common,Qt.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ci([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ci([Qt.sprite,Qt.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ci([Qt.common,Qt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ci([Qt.lights,Qt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Zs.physical={uniforms:Ci([Zs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Dh={r:0,b:0,g:0},v_=new Ln,qp=new Be;qp.set(-1,0,0,0,1,0,0,0,1);function b_(i,t,e,n,s,r){let a=new Se(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(S){let L=S.isScene===!0?S.background:null;if(L&&L.isTexture){let E=S.backgroundBlurriness>0;L=t.get(L,E)}return L}function g(S){let L=!1,E=f(S);E===null?_(a,o):E&&E.isColor&&(_(E,1),L=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?e.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(S,L){let E=f(L);E&&E.isCubeTexture?(c===void 0&&(c=new mt(new bn(1,1,1),new qs({name:"BackgroundCubeMaterial",uniforms:da(Zs.backgroundCube.uniforms),vertexShader:Zs.backgroundCube.vertexShader,fragmentShader:Zs.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(O,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(L.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qp),c.material.toneMapped=an.getTransfer(E.colorSpace)!==En,(u!==E||p!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new mt(new Ke(2,2),new qs({name:"BackgroundMaterial",uniforms:da(Zs.background.uniforms),vertexShader:Zs.background.vertexShader,fragmentShader:Zs.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=an.getTransfer(E.colorSpace)!==En,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,L){S.getRGB(Dh,af(i)),e.buffers.color.setClear(Dh.r,Dh.g,Dh.b,L,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,L=1){a.set(S),o=L,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,_(a,o)},render:g,addToRenderList:I,dispose:y}}function M_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(W,Q,ut,V,at){let ct=!1,st=p(W,V,ut,Q);r!==st&&(r=st,c(r.object)),ct=f(W,V,ut,at),ct&&g(W,V,ut,at),at!==null&&t.update(at,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,E(W,Q,ut,V),at!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function p(W,Q,ut,V){let at=V.wireframe===!0,ct=n[Q.id];ct===void 0&&(ct={},n[Q.id]=ct);let st=W.isInstancedMesh===!0?W.id:0,Pt=ct[st];Pt===void 0&&(Pt={},ct[st]=Pt);let lt=Pt[ut.id];lt===void 0&&(lt={},Pt[ut.id]=lt);let wt=lt[at];return wt===void 0&&(wt=d(l()),lt[at]=wt),wt}function d(W){let Q=[],ut=[],V=[];for(let at=0;at<e;at++)Q[at]=0,ut[at]=0,V[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ut,attributeDivisors:V,object:W,attributes:{},index:null}}function f(W,Q,ut,V){let at=r.attributes,ct=Q.attributes,st=0,Pt=ut.getAttributes();for(let lt in Pt)if(Pt[lt].location>=0){let xt=at[lt],Ht=ct[lt];if(Ht===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(Ht=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(Ht=W.instanceColor)),xt===void 0||xt.attribute!==Ht||Ht&&xt.data!==Ht.data)return!0;st++}return r.attributesNum!==st||r.index!==V}function g(W,Q,ut,V){let at={},ct=Q.attributes,st=0,Pt=ut.getAttributes();for(let lt in Pt)if(Pt[lt].location>=0){let xt=ct[lt];xt===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(xt=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(xt=W.instanceColor));let Ht={};Ht.attribute=xt,xt&&xt.data&&(Ht.data=xt.data),at[lt]=Ht,st++}r.attributes=at,r.attributesNum=st,r.index=V}function I(){let W=r.newAttributes;for(let Q=0,ut=W.length;Q<ut;Q++)W[Q]=0}function _(W){y(W,0)}function y(W,Q){let ut=r.newAttributes,V=r.enabledAttributes,at=r.attributeDivisors;ut[W]=1,V[W]===0&&(i.enableVertexAttribArray(W),V[W]=1),at[W]!==Q&&(i.vertexAttribDivisor(W,Q),at[W]=Q)}function S(){let W=r.newAttributes,Q=r.enabledAttributes;for(let ut=0,V=Q.length;ut<V;ut++)Q[ut]!==W[ut]&&(i.disableVertexAttribArray(ut),Q[ut]=0)}function L(W,Q,ut,V,at,ct,st){st===!0?i.vertexAttribIPointer(W,Q,ut,at,ct):i.vertexAttribPointer(W,Q,ut,V,at,ct)}function E(W,Q,ut,V){I();let at=V.attributes,ct=ut.getAttributes(),st=Q.defaultAttributeValues;for(let Pt in ct){let lt=ct[Pt];if(lt.location>=0){let wt=at[Pt];if(wt===void 0&&(Pt==="instanceMatrix"&&W.instanceMatrix&&(wt=W.instanceMatrix),Pt==="instanceColor"&&W.instanceColor&&(wt=W.instanceColor)),wt!==void 0){let xt=wt.normalized,Ht=wt.itemSize,le=t.get(wt);if(le===void 0)continue;let pt=le.buffer,Zt=le.type,ie=le.bytesPerElement,xe=Zt===i.INT||Zt===i.UNSIGNED_INT||wt.gpuType===Zc;if(wt.isInterleavedBufferAttribute){let Jt=wt.data,se=Jt.isInterleavedBuffer===!0?Jt.stride:Jt.itemSize,He=wt.offset;if(Jt.isInstancedInterleavedBuffer||Jt.isInstancedBufferAttribute){for(let _e=0;_e<lt.locationSize;_e++)y(lt.location+_e,Jt.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Jt.meshPerAttribute*Jt.count)}else for(let _e=0;_e<lt.locationSize;_e++)_(lt.location+_e);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let _e=0;_e<lt.locationSize;_e++)L(lt.location+_e,Ht/lt.locationSize,Zt,xt,se*ie,(He+Ht/lt.locationSize*_e)*ie,xe)}else{if(wt.isInstancedBufferAttribute){for(let Jt=0;Jt<lt.locationSize;Jt++)y(lt.location+Jt,wt.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Jt=0;Jt<lt.locationSize;Jt++)_(lt.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Jt=0;Jt<lt.locationSize;Jt++)L(lt.location+Jt,Ht/lt.locationSize,Zt,xt,Ht*ie,Ht/lt.locationSize*Jt*ie,xe)}}else if(st!==void 0){let xt=st[Pt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(lt.location,xt);break;case 3:i.vertexAttrib3fv(lt.location,xt);break;case 4:i.vertexAttrib4fv(lt.location,xt);break;default:i.vertexAttrib1fv(lt.location,xt)}}}}S()}function O(){q();for(let W in n){let Q=n[W];for(let ut in Q){let V=Q[ut];for(let at in V){let ct=V[at];for(let st in ct)u(ct[st].object),delete ct[st];delete V[at]}}delete n[W]}}function N(W){if(n[W.id]===void 0)return;let Q=n[W.id];for(let ut in Q){let V=Q[ut];for(let at in V){let ct=V[at];for(let st in ct)u(ct[st].object),delete ct[st];delete V[at]}}delete n[W.id]}function M(W){for(let Q in n){let ut=n[Q];for(let V in ut){let at=ut[V];if(at[W.id]===void 0)continue;let ct=at[W.id];for(let st in ct)u(ct[st].object),delete ct[st];delete at[W.id]}}}function A(W){for(let Q in n){let ut=n[Q],V=W.isInstancedMesh===!0?W.id:0,at=ut[V];if(at!==void 0){for(let ct in at){let st=at[ct];for(let Pt in st)u(st[Pt].object),delete st[Pt];delete at[ct]}delete ut[V],Object.keys(ut).length===0&&delete n[Q]}}}function q(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:q,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfObject:A,releaseStatesOfProgram:M,initAttributes:I,enableAttribute:_,disableUnusedAttributes:S}}function S_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function w_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Ts&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let A=M===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Zi&&M!==Ss&&!A&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:I,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:S,maxVaryings:L,maxFragmentUniforms:E,maxSamples:O,samples:N}}function T_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,I=p.clipIntersection,_=p.clipShadows,y=i.get(p);if(!s||g===null||g.length===0||r&&!_)r?u(null):c();else{let S=r?0:n,L=S*4,E=y.clippingState||null;l.value=E,E=u(g,d,L,f);for(let O=0;O!==L;++O)E[O]=e[O];y.clippingState=E,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,f,g){let I=p!==null?p.length:0,_=null;if(I!==0){if(_=l.value,g!==!0||_===null){let y=f+I*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<y)&&(_=new Float32Array(y));for(let L=0,E=f;L!==I;++L,E+=4)a.copy(p[L]).applyMatrix4(S,o),a.normal.toArray(_,E),_[E+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,_}}var ml=class extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new qs({name:"CubemapFromEquirect",uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:ca});r.uniforms.tEquirect.value=e;let a=new mt(s,r),o=e.minFilter;return e.minFilter===fr&&(e.minFilter=Oi),new Qa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},wp=256,E_=3,A_=20,Yp=256,$p=16,R_=3,C_=new z,I_=new Se,Uh=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qa(1,10,null),this._boxMesh=new mt(new bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=C_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,I=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,I===null&&(t.background=l.getClearColor(I_));let _=new Qa(n,s,u);return _.position.copy(o),_.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=I,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wp,fp(t))}_fromTexture(t,e){t.mapping===ua||t.mapping===no?this._setSize(t.image.length===0?wp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Tp(t,!1,!1),n=Math.log2(t)-E_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ua||t.mapping===no?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ep()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=P_(),this._integrationMaterial=L_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$p);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-R_)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Yp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=D_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Tp(i,t,e){return new ml(i,{minFilter:fr,generateMipmaps:t,type:ws,colorSpace:Uo,depthBuffer:e})}function gl(i,t,e){return new qs({name:i,uniforms:t,vertexShader:je.cube_vert,fragmentShader:e,side:si,blending:ca,depthTest:!1,depthWrite:!1})}function P_(){return gl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yp}u

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
	`)}function L_(){return gl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$p}},`

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
	`)}function D_(){return gl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${A_}
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
	`)}function Ep(){return gl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ap(){return gl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function N_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===qc||f===Yc)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let I=new ml(g.height);return I.fromEquirectangularTexture(i,d),t.set(d,I),d.addEventListener("dispose",c),o(I.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===qc||f===Yc,I=f===ua||f===no;if(g||I){let _=e.get(d),y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Uh(i)),_=g?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let S=d.image;return g&&S&&S.height>0||I&&S&&l(S)?(n===null&&(n=new Uh(i)),_=g?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d,f){return f===qc?d.mapping=ua:f===Yc&&(d.mapping=no),d}function l(d){let f=0,g=6;for(let I=0;I<g;I++)d[I]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function U_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Po("WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let _ in g.attributes)t.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let I=r.get(g);I&&(t.remove(I),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,I){return s[I.id]!==void 0||(I.addEventListener("dispose",o),s[I.id]=new WeakRef(I),a.register(I,I.id,I),e.memory.geometries++),I}function u(g){let I=g.attributes;for(let _ in I)t.update(I[_],i.ARRAY_BUFFER)}function p(g){let I=g.index,_=g.attributes.position,y=0;if(_===void 0)return;let S=I!==null?I.array.length:_.array.length/3-1,L=_.count>=65535?ko:zo,E=new L(Math.ceil(S/3)*6,1),O=E.array;if(I!==null){let M=I.array;y=I.version;for(let A=0,q=0;A<S;A+=3){let k=M[A+0],W=M[A+1],Q=M[A+2];O[q++]=k,O[q++]=W,O[q++]=W,O[q++]=Q,O[q++]=Q,O[q++]=k}}else{y=_.version;for(let M=0,A=0;M<S;M+=3){let q=M+0,k=M+1,W=M+2;O[A++]=q,O[A++]=k,O[A++]=k,O[A++]=W,O[A++]=W,O[A++]=q}}E.version=y;let N=r.get(g);N&&t.remove(N),r.set(g,E)}function d(g){let I=r.get(g);if(I){let _=g.index;_!==null&&I.version<_.version&&p(g)}else p(g);return r.get(g)}function f(){for(let g in s){let I=s[g].deref();I!==void 0&&l(I)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function O_(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*a,f),e.update(d,n,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let I=0;for(let _=0;_<f;_++)I+=d[_];e.update(I,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function B_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z_(i,t,e){let n=new WeakMap,s=new Gn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let q=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,I=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],L=0;f===!0&&(L=1),g===!0&&(L=2),I===!0&&(L=3);let E=o.attributes.position.count*L,O=1;E>t.maxTextureSize&&(O=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let N=new Float32Array(E*O*4*p),M=new Bo(N,E,O,p);M.type=Ss,M.needsUpdate=!0;let A=L*4;for(let k=0;k<p;k++){let W=_[k],Q=y[k],ut=S[k],V=E*O*4*k;for(let at=0;at<W.count;at++){let ct=at*A;f===!0&&(s.fromBufferAttribute(W,at),N[V+ct+0]=s.x,N[V+ct+1]=s.y,N[V+ct+2]=s.z,N[V+ct+3]=0),g===!0&&(s.fromBufferAttribute(Q,at),N[V+ct+4]=s.x,N[V+ct+5]=s.y,N[V+ct+6]=s.z,N[V+ct+7]=0),I===!0&&(s.fromBufferAttribute(ut,at),N[V+ct+8]=s.x,N[V+ct+9]=s.y,N[V+ct+10]=s.z,N[V+ct+11]=ut.itemSize===4?s.w:1)}}d={count:p,texture:M,size:new Nt(E,O)},n.set(o,d),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let I=0;I<c.length;I++)f+=c[I];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function k_(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var G_={[Bu]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Gu]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Wu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function V_(i,t,e,n,s,r){let a=new Bi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Dn;u.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new De([0,2,0,0,2,0],2));let p=new Ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mt(u,p),f=new sl(-1,1,1,-1,0,1),g=null,I=null,_=!1,y,S=null,L=[],E=!1;this.setSize=function(O,N){a.setSize(O,N),o!==null&&o.setSize(O,N),l!==null&&l.setSize(O,N);for(let M=0;M<L.length;M++){let A=L[M];A.setSize&&A.setSize(O,N)}},this.setEffects=function(O){L=O,E=L.length>0&&L[0].isRenderPass===!0;let N=a.width,M=a.height;L.length>0&&o===null&&(o=new Bi(N,M,{type:ws,depthBuffer:!1,stencilBuffer:!1}),l=new Bi(N,M,{type:ws,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&L.some(q=>q.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new hr(N,M),r===!0&&(c.format=dr,c.type=fa)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let q=0;q<L.length;q++){let k=L[q];k.setSize&&k.setSize(N,M),A&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(O,N){if(_||O.toneMapping===Ys&&L.length===0)return!1;if(S=N,N!==null){let M=N.width,A=N.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return E===!1&&O.setRenderTarget(a),y=O.toneMapping,O.toneMapping=Ys,!0},this.hasRenderPass=function(){return E},this.end=function(O,N){O.toneMapping=y,_=!0;let M=a,A=o;for(let q=0;q<L.length;q++){let k=L[q];k.enabled!==!1&&(k.render(O,A,M,N),k.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(g!==O.outputColorSpace||I!==O.toneMapping){g=O.outputColorSpace,I=O.toneMapping,p.defines={},an.getTransfer(g)===En&&(p.defines.SRGB_TRANSFER="");let q=G_[I];q&&(p.defines[q]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=M.texture,O.setRenderTarget(S),O.render(d,f),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var Zp=new Ai,Jp=new hr(1,1),Kp=new Ho(1),jp=new Bo,Qp=new vc,tm=new Vo,Rp=[],Cp=[],Ip=new Float32Array(16),Pp=new Float32Array(9),Lp=new Float32Array(4);function ao(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ri(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ai(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fh(i,t){let e=Cp[t];e===void 0&&(e=new Int32Array(t),Cp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function W_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ri(e,t))return;i.uniform2fv(this.addr,t),ai(e,t)}}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ri(e,t))return;i.uniform3fv(this.addr,t),ai(e,t)}}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ri(e,t))return;i.uniform4fv(this.addr,t),ai(e,t)}}function Y_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ri(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ai(e,t)}else{if(ri(e,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),ai(e,n)}}function $_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ri(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ai(e,t)}else{if(ri(e,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),ai(e,n)}}function Z_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ri(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ai(e,t)}else{if(ri(e,n))return;Ip.set(n),i.uniformMatrix4fv(this.addr,!1,Ip),ai(e,n)}}function J_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ri(e,t))return;i.uniform2iv(this.addr,t),ai(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ri(e,t))return;i.uniform3iv(this.addr,t),ai(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ri(e,t))return;i.uniform4iv(this.addr,t),ai(e,t)}}function ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ri(e,t))return;i.uniform2uiv(this.addr,t),ai(e,t)}}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ri(e,t))return;i.uniform3uiv(this.addr,t),ai(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ri(e,t))return;i.uniform4uiv(this.addr,t),ai(e,t)}}function Oh(i){return i.version===0&&(i.compareFunction=ef,i.needsUpdate=!0),i}function sy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Oh(Jp):r=Zp,e.setTexture2D(t||r,s)}function ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qp,s)}function ay(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Oh(Kp):r=tm,e.setTextureCube(t||r,s)}function oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jp,s)}function ly(i){switch(i){case 5126:return H_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return $_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return K_;case 35668:case 35672:return j_;case 35669:case 35673:return Q_;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(i,t){i.uniform1fv(this.addr,t)}function hy(i,t){let e=ao(t,this.size,2);i.uniform2fv(this.addr,e)}function uy(i,t){let e=ao(t,this.size,3);i.uniform3fv(this.addr,e)}function fy(i,t){let e=ao(t,this.size,4);i.uniform4fv(this.addr,e)}function dy(i,t){let e=ao(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function py(i,t){let e=ao(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function my(i,t){let e=ao(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gy(i,t){i.uniform1iv(this.addr,t)}function xy(i,t){i.uniform2iv(this.addr,t)}function _y(i,t){i.uniform3iv(this.addr,t)}function yy(i,t){i.uniform4iv(this.addr,t)}function vy(i,t){i.uniform1uiv(this.addr,t)}function by(i,t){i.uniform2uiv(this.addr,t)}function My(i,t){i.uniform3uiv(this.addr,t)}function Sy(i,t){i.uniform4uiv(this.addr,t)}function wy(i,t,e){let n=this.cache,s=t.length,r=Fh(e,s);ri(n,r)||(i.uniform1iv(this.addr,r),ai(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Oh(Jp):a=Zp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ty(i,t,e){let n=this.cache,s=t.length,r=Fh(e,s);ri(n,r)||(i.uniform1iv(this.addr,r),ai(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qp,r[a])}function Ey(i,t,e){let n=this.cache,s=t.length,r=Fh(e,s);ri(n,r)||(i.uniform1iv(this.addr,r),ai(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Oh(Kp):a=tm;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ay(i,t,e){let n=this.cache,s=t.length,r=Fh(e,s);ri(n,r)||(i.uniform1iv(this.addr,r),ai(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jp,r[a])}function Ry(i){switch(i){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return _y;case 35669:case 35673:return yy;case 5125:return vy;case 36294:return by;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ay}}var xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ly(e.type)}},_f=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ry(e.type)}},yf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mf=/(\w+)(\])?(\[|\.)?/g;function Dp(i,t){i.seq.push(t),i.map[t.id]=t}function Cy(i,t,e){let n=i.name,s=n.length;for(mf.lastIndex=0;;){let r=mf.exec(n),a=mf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dp(e,c===void 0?new xf(o,i,t):new _f(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new yf(o),Dp(e,p)),e=p}}}var so=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Cy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Np(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Iy=37297,Py=0;function Ly(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Up=new Be;function Dy(i){an._getMatrix(Up,an.workingColorSpace,i);let t=`mat3( ${Up.elements.map(e=>e.toFixed(4))} )`;switch(an.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case En:return[t,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ly(i.getShaderSource(t),o)}else return r}function Ny(i,t){let e=Dy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Uy={[Bu]:"Linear",[zu]:"Reinhard",[ku]:"Cineon",[Gu]:"ACESFilmic",[Hu]:"AgX",[Wu]:"Neutral",[Vu]:"Custom"};function Fy(i,t){let e=Uy[t];return e===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nh=new z;function Oy(){an.getLuminanceCoefficients(Nh);let i=Nh.x.toFixed(4),t=Nh.y.toFixed(4),e=Nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function zy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ky(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pl(i){return i!==""}function Op(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(i){return i.replace(Gy,Vy)}function Vy(i,t){let e=je[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vf(e)}var Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(i){return i.replace(Hy,Wy)}function Wy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Xy={[la]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function qy(i){return Xy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yy={[no]:"ENVMAP_MODE_REFRACTION"};function $y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zy={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Kd]:"ENVMAP_BLENDING_MIX",[jd]:"ENVMAP_BLENDING_ADD"};function Jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zy[i.combine]||"ENVMAP_BLENDING_NONE"}function Ky(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=qy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=$y(e),p=Jy(e),d=By(e),f=zy(r),g=s.createProgram(),I,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(I=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(pl).join(`
`),I.length>0&&(I+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(pl).join(`
`),_.length>0&&(_+=`
`)):(I=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),_=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ys?"#define TONE_MAPPING":"",e.toneMapping!==Ys?je.tonemapping_pars_fragment:"",e.toneMapping!==Ys?Fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Ny("linearToOutputTexel",e.outputColorSpace),Oy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pl).join(`
`)),a=vf(a),a=Op(a,e),a=Bp(a,e),o=vf(o),o=Op(o,e),o=Bp(o,e),a=zp(a),o=zp(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,I=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,_=["#define varying in",e.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=y+I+a,L=y+_+o,E=Np(s,s.VERTEX_SHADER,S),O=Np(s,s.FRAGMENT_SHADER,L);s.attachShader(g,E),s.attachShader(g,O),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function N(k){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(g)||"",Q=s.getShaderInfoLog(E)||"",ut=s.getShaderInfoLog(O)||"",V=W.trim(),at=Q.trim(),ct=ut.trim(),st=!0,Pt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,O);else{let lt=Fp(s,E,"vertex"),wt=Fp(s,O,"fragment");Ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+V+`
`+lt+`
`+wt)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(at===""||ct==="")&&(Pt=!1);Pt&&(k.diagnostics={runnable:st,programLog:V,vertexShader:{log:at,prefix:I},fragmentShader:{log:ct,prefix:_}})}s.deleteShader(E),s.deleteShader(O),M=new so(s,g),A=ky(s,g)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(g,Iy)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Py++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=O,this}var jy=0,bf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mf(t),e.set(t,n)),n}},Mf=class{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}};function Qy(i){return i===Ur||i===ul||i===fl}function t1(i,t,e,n,s,r){let a=new Wa,o=new bf,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,A,q,k,W,Q){let ut=k.fog,V=W.geometry,at=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,ct=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,st=t.get(M.envMap||at,ct),Pt=d[M.type],lt=n.precision;M.precision!==null&&(lt=n.getMaxPrecision(M.precision),lt!==M.precision&&Ie("WebGLProgram.getParameters:",M.precision,"not supported, using",lt,"instead."));let wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=wt!==void 0?wt.length:0,Ht=0;V.morphAttributes.position!==void 0&&(Ht=1),V.morphAttributes.normal!==void 0&&(Ht=2),V.morphAttributes.color!==void 0&&(Ht=3);let le,pt,Zt,ie;if(Pt){let $t=Zs[Pt];le=$t.vertexShader,pt=$t.fragmentShader}else{le=M.vertexShader,pt=M.fragmentShader;let $t=o.getVertexShaderStage(M),sn=o.getFragmentShaderStage(M);o.update(M,$t,sn),Zt=$t.id,ie=sn.id}let xe=i.getRenderTarget(),Jt=i.state.buffers.depth.getReversed(),se=W.isInstancedMesh===!0,He=W.isBatchedMesh===!0,_e=!!M.map,ze=!!M.matcap,We=!!st,St=We&&st.isPMREMTexture===!0,kt=!!M.aoMap,Rt=!!M.lightMap,Vt=!!M.bumpMap&&M.wireframe===!1,Ut=!!M.normalMap,Ne=!!M.displacementMap,ce=!!M.emissiveMap,Xe=!!M.metalnessMap,qe=!!M.roughnessMap,nn=M.anisotropy>0,X=M.clearcoat>0,Re=M.diffuseRoughness>0,Fe=M.dispersion>0,ke=M.retroreflectivity>0,Ft=M.iridescence>0,_n=M.sheen>0,de=M.transmission>0,Me=nn&&!!M.anisotropyMap,F=X&&!!M.clearcoatMap,w=X&&!!M.clearcoatNormalMap,et=X&&!!M.clearcoatRoughnessMap,Lt=Re&&!!M.diffuseRoughnessMap,yt=Ft&&!!M.iridescenceMap,Ct=Ft&&!!M.iridescenceThicknessMap,Bt=_n&&!!M.sheenColorMap,gt=_n&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Gt=!!M.specularColorMap,G=!!M.specularIntensityMap,Y=de&&!!M.transmissionMap,ft=de&&!!M.thicknessMap,Xt=!!M.gradientMap,Dt=!!M.alphaMap,Wt=M.alphaTest>0,ue=!!M.alphaHash,Oe=!!M.extensions,At=Ys;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(At=i.toneMapping);let pe=St?st.isCompressedCubeTexture?st.image[0].mipmaps:st.mipmaps:null,Ee={shaderID:Pt,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:pt,defines:M.defines,customVertexShaderID:Zt,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:lt,batching:He,batchingColor:He&&W._colorsTexture!==null,instancing:se,instancingColor:se&&W.instanceColor!==null,instancingMorph:se&&W.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:an.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:_e,matcap:ze,envMap:We,envMapMode:We&&st.mapping,envMapPMREM:St,envMapMaxLod:St?pe.length-1:null,envMapSize:St?pe[0].width:null,aoMap:kt,lightMap:Rt,bumpMap:Vt,normalMap:Ut,displacementMap:Ne,emissiveMap:ce,normalMapObjectSpace:Ut&&M.normalMapType===ep,normalMapTangentSpace:Ut&&M.normalMapType===Ph,packedNormalMap:Ut&&M.normalMapType===Ph&&Qy(M.normalMap.format),metalnessMap:Xe,roughnessMap:qe,anisotropy:nn,anisotropyMap:Me,clearcoat:X,clearcoatMap:F,clearcoatNormalMap:w,clearcoatRoughnessMap:et,diffuseRoughness:Re,diffuseRoughnessMap:Lt,dispersion:Fe,retroreflection:ke,iridescence:Ft,iridescenceMap:yt,iridescenceThicknessMap:Ct,sheen:_n,sheenColorMap:Bt,sheenRoughnessMap:gt,specularMap:_t,specularColorMap:Gt,specularIntensityMap:G,transmission:de,transmissionMap:Y,thicknessMap:ft,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===eo&&M.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Wt,alphaHash:ue,combine:M.combine,mapUv:_e&&f(M.map.channel),aoMapUv:kt&&f(M.aoMap.channel),lightMapUv:Rt&&f(M.lightMap.channel),bumpMapUv:Vt&&f(M.bumpMap.channel),normalMapUv:Ut&&f(M.normalMap.channel),displacementMapUv:Ne&&f(M.displacementMap.channel),emissiveMapUv:ce&&f(M.emissiveMap.channel),metalnessMapUv:Xe&&f(M.metalnessMap.channel),roughnessMapUv:qe&&f(M.roughnessMap.channel),anisotropyMapUv:Me&&f(M.anisotropyMap.channel),clearcoatMapUv:F&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Lt&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:yt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&f(M.sheenRoughnessMap.channel),specularMapUv:_t&&f(M.specularMap.channel),specularColorMapUv:Gt&&f(M.specularColorMap.channel),specularIntensityMapUv:G&&f(M.specularIntensityMap.channel),transmissionMapUv:Y&&f(M.transmissionMap.channel),thicknessMapUv:ft&&f(M.thicknessMap.channel),alphaMapUv:Dt&&f(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ut||nn),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(_e||Dt),fog:!!ut,useFog:M.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&Ut===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Jt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Q.filter($t=>$t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&an.getTransfer(M.map.colorSpace)===En,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&an.getTransfer(M.emissiveMap.colorSpace)===En,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===si,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||He)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function I(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let q in M.defines)A.push(q),A.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(_(A,M),y(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapPMREM),M.push(A.envMapMaxLod),M.push(A.envMapSize),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.diffuseRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.numLightProbeGrids),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){let A=d[M.type],q;if(A){let k=Zs[A];q=bp.clone(k.uniforms)}else q=M.uniforms;return q}function L(M,A){let q=u.get(A);return q!==void 0?++q.usedTimes:(q=new Ky(i,A,M,s),c.push(q),u.set(A,q)),q}function E(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function O(M){o.remove(M)}function N(){o.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:S,acquireProgram:L,releaseProgram:E,releaseShaderCache:O,programs:c,dispose:N}}function e1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function n1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,I,_,y){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:I,renderOrder:d.renderOrder,z:_,group:y},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=I,S.renderOrder=d.renderOrder,S.z=_,S.group=y),t++,S}function l(d,f,g,I,_,y,S){S.reversedDepth===!0&&(_=-_);let L=o(d,f,g,I,_,y);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):e.push(L)}function c(d,f,g,I,_,y){let S=o(d,f,g,I,_,y);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(d,f){e.length>1&&e.sort(d||n1),n.length>1&&n.sort(f||Gp),s.length>1&&s.sort(f||Gp)}function p(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function i1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vp,i.set(n,[a])):s>=r.length?(a=new Vp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function s1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Se};break;case"SpotLight":e={position:new z,direction:new z,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function r1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var a1=0;function o1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l1(i){let t=new s1,e=r1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Ln,a=new Ln;function o(c){let u=0,p=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let f=0,g=0,I=0,_=0,y=0,S=0,L=0,E=0,O=0,N=0,M=0,A=0,q=0,k=0;c.sort(o1);for(let Q=0,ut=c.length;Q<ut;Q++){let V=c[Q],at=V.color,ct=V.intensity,st=V.distance,Pt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ur?Pt=V.shadow.map.texture:Pt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=at.r*ct,p+=at.g*ct,d+=at.b*ct;else if(V.isLightProbe){for(let lt=0;lt<9;lt++)n.probe[lt].addScaledVector(V.sh.coefficients[lt],ct);k++}else if(V.isSunLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let wt=V.shadow,xt=e.get(V);xt.shadowIntensity=wt.intensity,xt.shadowBias=wt.bias,xt.shadowNormalBias=wt.normalBias,xt.shadowRadius=wt.radius,xt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[g]=xt,n.sunShadowMap[g]=Pt;let Ht=wt.getViewportCount();for(let le=0;le<Ht;le++)n.sunShadowMatrix[I+le]=wt.getMatrix(le),n.sunShadowCascade[I+le]=wt._cascadeData[le];I+=Ht,g++}n.sun[f]=lt,f++}else if(V.isDirectionalLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let wt=V.shadow,xt=e.get(V);xt.shadowIntensity=wt.intensity,xt.shadowBias=wt.bias,xt.shadowNormalBias=wt.normalBias,xt.shadowRadius=wt.radius,xt.shadowMapSize=wt.mapSize,n.directionalShadow[_]=xt,n.directionalShadowMap[_]=Pt,n.directionalShadowMatrix[_]=V.shadow.matrix,O++}n.directional[_]=lt,_++}else if(V.isSpotLight){let lt=t.get(V);lt.position.setFromMatrixPosition(V.matrixWorld),lt.color.copy(at).multiplyScalar(ct),lt.distance=st,lt.coneCos=Math.cos(V.angle),lt.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),lt.decay=V.decay,n.spot[S]=lt;let wt=V.shadow;if(V.map&&(n.spotLightMap[A]=V.map,A++,wt.updateMatrices(V),V.castShadow&&q++),n.spotLightMatrix[S]=wt.matrix,V.castShadow){let xt=e.get(V);xt.shadowIntensity=wt.intensity,xt.shadowBias=wt.bias,xt.shadowNormalBias=wt.normalBias,xt.shadowRadius=wt.radius,xt.shadowMapSize=wt.mapSize,n.spotShadow[S]=xt,n.spotShadowMap[S]=Pt,M++}S++}else if(V.isRectAreaLight){let lt=t.get(V);lt.color.copy(at).multiplyScalar(ct),lt.halfWidth.set(V.width*.5,0,0),lt.halfHeight.set(0,V.height*.5,0),n.rectArea[L]=lt,L++}else if(V.isPointLight){let lt=t.get(V);if(lt.color.copy(V.color).multiplyScalar(V.intensity),lt.distance=V.distance,lt.decay=V.decay,V.castShadow){let wt=V.shadow,xt=e.get(V);xt.shadowIntensity=wt.intensity,xt.shadowBias=wt.bias,xt.shadowNormalBias=wt.normalBias,xt.shadowRadius=wt.radius,xt.shadowMapSize=wt.mapSize,xt.shadowCameraNear=wt.camera.near,xt.shadowCameraFar=wt.camera.far,n.pointShadow[y]=xt,n.pointShadowMap[y]=Pt,n.pointShadowMatrix[y]=V.shadow.matrix,N++}n.point[y]=lt,y++}else if(V.isHemisphereLight){let lt=t.get(V);lt.skyColor.copy(V.color).multiplyScalar(ct),lt.groundColor.copy(V.groundColor).multiplyScalar(ct),n.hemi[E]=lt,E++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qt.LTC_FLOAT_1,n.rectAreaLTC2=Qt.LTC_FLOAT_2):(n.rectAreaLTC1=Qt.LTC_HALF_1,n.rectAreaLTC2=Qt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let W=n.hash;(W.sunLength!==f||W.directionalLength!==_||W.pointLength!==y||W.spotLength!==S||W.rectAreaLength!==L||W.hemiLength!==E||W.numSunShadows!==g||W.numDirectionalShadows!==O||W.numPointShadows!==N||W.numSpotShadows!==M||W.numSpotMaps!==A||W.numLightProbes!==k)&&(n.sun.length=f,n.directional.length=_,n.spot.length=S,n.rectArea.length=L,n.point.length=y,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.directionalShadowMatrix.length=O,n.pointShadow.length=N,n.pointShadowMap.length=N,n.pointShadowMatrix.length=N,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+A-q,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=q,n.numLightProbes=k,W.sunLength=f,W.directionalLength=_,W.pointLength=y,W.spotLength=S,W.rectAreaLength=L,W.hemiLength=E,W.numSunShadows=g,W.numDirectionalShadows=O,W.numPointShadows=N,W.numSpotShadows=M,W.numSpotMaps=A,W.numLightProbes=k,n.version=a1++)}function l(c,u){let p=0,d=0,f=0,g=0,I=0,_=0,y=u.matrixWorldInverse;for(let S=0,L=c.length;S<L;S++){let E=c[S];if(E.isSunLight){let O=n.sun[p];O.direction.setFromMatrixPosition(E.matrixWorld),O.direction.transformDirection(y),p++}else if(E.isDirectionalLight){let O=n.directional[d];O.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(y),d++}else if(E.isSpotLight){let O=n.spot[g];O.position.setFromMatrixPosition(E.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(y),g++}else if(E.isRectAreaLight){let O=n.rectArea[I];O.position.setFromMatrixPosition(E.matrixWorld),O.position.applyMatrix4(y),a.identity(),r.copy(E.matrixWorld),r.premultiply(y),a.extractRotation(r),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),O.halfWidth.applyMatrix4(a),O.halfHeight.applyMatrix4(a),I++}else if(E.isPointLight){let O=n.point[f];O.position.setFromMatrixPosition(E.matrixWorld),O.position.applyMatrix4(y),f++}else if(E.isHemisphereLight){let O=n.hemi[_];O.direction.setFromMatrixPosition(E.matrixWorld),O.direction.transformDirection(y),_++}}}return{setup:o,setupView:l,state:n}}function Hp(i){let t=new l1(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function c1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Hp(i),t.set(s,[o])):r>=a.length?(o=new Hp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`,f1=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],d1=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Wp=new Ln,dl=new z,gf=new z;function p1(i,t,e){let n=new Rr,s=new Nt,r=new Nt,a=new Gn,o=new Pc,l=new Lc,c={},u=e.maxTextureSize,p={[Nr]:si,[si]:Nr,[Vn]:Vn},d=new qs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:h1,fragmentShader:u1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dn;g.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new mt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let y=this.type;this.render=function(N,M,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;this.type===Ld&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=la);let q=i.getRenderTarget(),k=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(ca),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let ut=y!==this.type;ut&&M.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(at=>at.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,at=N.length;V<at;V++){let ct=N[V],st=ct.shadow;if(st===void 0){Ie("WebGLShadowMap:",ct,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let Pt=st.getFrameExtents();s.multiply(Pt),r.copy(st.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Pt.x),s.x=r.x*Pt.x,st.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Pt.y),s.y=r.y*Pt.y,st.mapSize.y=r.y));let lt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=lt,st.map===null||ut===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===to){if(ct.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Bi(s.x,s.y,{format:Ur,type:ws,minFilter:Oi,magFilter:Oi,generateMipmaps:!1}),st.map.texture.name=ct.name+".shadowMap",st.map.depthTexture=new hr(s.x,s.y,Ss),st.map.depthTexture.name=ct.name+".shadowMapDepth",st.map.depthTexture.format=lr,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=ui,st.map.depthTexture.magFilter=ui}else ct.isPointLight?(st.map=new ml(s.x),st.map.depthTexture=new Ho(s.x,Ms)):(st.map=new Bi(s.x,s.y),st.map.depthTexture=new hr(s.x,s.y,Ms)),st.map.depthTexture.name=ct.name+".shadowMap",st.map.depthTexture.format=lr,this.type===la?(st.map.depthTexture.compareFunction=lt?tf:Qu,st.map.depthTexture.minFilter=Oi,st.map.depthTexture.magFilter=Oi):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=ui,st.map.depthTexture.magFilter=ui);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let wt=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ct.isPointLight!==!0&&st.updateMatrices(ct,A);let xt=(st.camera.layers.mask&4294967294)!==0?st.camera.layers:A.layers;for(let Ht=0;Ht<wt;Ht++){let le=st.getCamera(Ht);if(ct.isPointLight){let pt=st.camera,Zt=st.matrix,ie=ct.distance||pt.far;ie!==pt.far&&(pt.far=ie,pt.updateProjectionMatrix()),dl.setFromMatrixPosition(ct.matrixWorld),pt.position.copy(dl),gf.copy(pt.position),gf.add(f1[Ht]),pt.up.copy(d1[Ht]),pt.lookAt(gf),pt.updateMatrixWorld(),Zt.makeTranslation(-dl.x,-dl.y,-dl.z),Wp.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(Wp,pt.coordinateSystem,pt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(st.map),i.clear());let pt=st.getViewport(Ht);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Q.viewport(a)}n=st.getFrustum(Ht),E(M,A,le,ct,xt,this.type)}st.isPointLightShadow!==!0&&this.type===to&&S(st,A),st.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(q,k,W)};function S(N,M){let A=t.update(I);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null?N.mapPass=new Bi(s.x,s.y,{format:Ur,type:ws}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),d.uniforms.shadow_pass.value=N.map.depthTexture,d.uniforms.resolution.value.set(N.map.width,N.map.height),d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(M,null,A,d,I,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value.set(N.map.width,N.map.height),f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(M,null,A,f,I,null)}function L(N,M,A,q){let k=null,W=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(W!==void 0)k=W;else if(k=A.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let Q=k.uuid,ut=M.uuid,V=c[Q];V===void 0&&(V={},c[Q]=V);let at=V[ut];at===void 0&&(at=k.clone(),V[ut]=at,M.addEventListener("dispose",O)),k=at}if(k.visible=M.visible,k.wireframe=M.wireframe,q===to?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:p[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,k.map=M.map,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let Q=i.properties.get(k);Q.light=A}return k}function E(N,M,A,q,k,W){if(N.visible===!1)return;if(N.layers.test(k)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===to)&&(!N.frustumCulled||N.intersectsFrustum(n))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);let V=t.update(N),at=N.material;if(Array.isArray(at)){let ct=V.groups;for(let st=0,Pt=ct.length;st<Pt;st++){let lt=ct[st],wt=at[lt.materialIndex];if(wt&&wt.visible){let xt=L(N,wt,q,W);N.onBeforeShadow(i,N,M,A,V,xt,lt),i.renderBufferDirect(A,null,V,xt,N,lt),N.onAfterShadow(i,N,M,A,V,xt,lt)}}}else if(at.visible){let ct=L(N,at,q,W);N.onBeforeShadow(i,N,M,A,V,ct,null),i.renderBufferDirect(A,null,V,ct,N,null),N.onAfterShadow(i,N,M,A,V,ct,null)}}let ut=N.children;for(let V=0,at=ut.length;V<at;V++)E(ut[V],M,A,q,k,W)}function O(N){N.target.removeEventListener("dispose",O);for(let A in c){let q=c[A],k=N.target.uuid;k in q&&(q[k].dispose(),delete q[k])}}}function m1(i,t){function e(){let G=!1,Y=new Gn,ft=null,Xt=new Gn(0,0,0,0);return{setMask:function(Dt){ft!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),ft=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Wt,ue,Oe,At){At===!0&&(Dt*=Oe,Wt*=Oe,ue*=Oe),Y.set(Dt,Wt,ue,Oe),Xt.equals(Y)===!1&&(i.clearColor(Dt,Wt,ue,Oe),Xt.copy(Y))},reset:function(){G=!1,ft=null,Xt.set(-1,0,0,0)}}}function n(){let G=!1,Y=!1,ft=null,Xt=null,Dt=null;return{setReversed:function(Wt){if(Y!==Wt){let ue=t.get("EXT_clip_control");Wt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),Y=Wt;let Oe=Dt;Dt=null,this.setClear(Oe)}},getReversed:function(){return Y},setTest:function(Wt){Wt?Jt(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Wt){ft!==Wt&&!G&&(i.depthMask(Wt),ft=Wt)},setFunc:function(Wt){if(Y&&(Wt=up[Wt]),Xt!==Wt){switch(Wt){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case za:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case fc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Xt=Wt}},setLocked:function(Wt){G=Wt},setClear:function(Wt){Dt!==Wt&&(Dt=Wt,Y&&(Wt=1-Wt),i.clearDepth(Wt))},reset:function(){G=!1,ft=null,Xt=null,Dt=null,Y=!1}}}function s(){let G=!1,Y=null,ft=null,Xt=null,Dt=null,Wt=null,ue=null,Oe=null,At=null;return{setTest:function(pe){G||(pe?Jt(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(pe){Y!==pe&&!G&&(i.stencilMask(pe),Y=pe)},setFunc:function(pe,Ee,$t){(ft!==pe||Xt!==Ee||Dt!==$t)&&(i.stencilFunc(pe,Ee,$t),ft=pe,Xt=Ee,Dt=$t)},setOp:function(pe,Ee,$t){(Wt!==pe||ue!==Ee||Oe!==$t)&&(i.stencilOp(pe,Ee,$t),Wt=pe,ue=Ee,Oe=$t)},setLocked:function(pe){G=pe},setClear:function(pe){At!==pe&&(i.clearStencil(pe),At=pe)},reset:function(){G=!1,Y=null,ft=null,Xt=null,Dt=null,Wt=null,ue=null,Oe=null,At=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,g=[],I=null,_=!1,y=null,S=null,L=null,E=null,O=null,N=null,M=null,A=new Se(0,0,0),q=0,k=!1,W=null,Q=null,ut=null,V=null,at=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,Pt=0,lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(Pt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),st=Pt>=1):lt.indexOf("OpenGL ES")!==-1&&(Pt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),st=Pt>=2);let wt=null,xt={},Ht=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),pt=new Gn().fromArray(Ht),Zt=new Gn().fromArray(le);function ie(G,Y,ft,Xt){let Dt=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(G,Wt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<ft;ue++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,Xt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Y+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Wt}let xe={};xe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Jt(i.DEPTH_TEST),a.setFunc(za),Vt(!1),Ut(Du),Jt(i.CULL_FACE),kt(ca);function Jt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function se(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function He(G,Y){return d[G]!==Y?(i.bindFramebuffer(G,Y),d[G]=Y,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Y),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function _e(G,Y){let ft=g,Xt=!1;if(G){ft=f.get(Y),ft===void 0&&(ft=[],f.set(Y,ft));let Dt=G.textures;if(ft.length!==Dt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,ue=Dt.length;Wt<ue;Wt++)ft[Wt]=i.COLOR_ATTACHMENT0+Wt;ft.length=Dt.length,Xt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Xt=!0);Xt&&i.drawBuffers(ft)}function ze(G){return I!==G?(i.useProgram(G),I=G,!0):!1}let We={[ha]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};We[Fd]=i.MIN,We[Od]=i.MAX;let St={[Bd]:i.ZERO,[zd]:i.ONE,[kd]:i.SRC_COLOR,[Fu]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(G,Y,ft,Xt,Dt,Wt,ue,Oe,At,pe){if(G===ca){_===!0&&(se(i.BLEND),_=!1);return}if(_===!1&&(Jt(i.BLEND),_=!0),G!==Dd){if(G!==y||pe!==k){if((S!==ha||O!==ha)&&(i.blendEquation(i.FUNC_ADD),S=ha,O=ha),pe)switch(G){case eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFunc(i.ONE,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",G);break}else switch(G){case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nu:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",G);break}L=null,E=null,N=null,M=null,A.set(0,0,0),q=0,y=G,k=pe}return}Dt=Dt||Y,Wt=Wt||ft,ue=ue||Xt,(Y!==S||Dt!==O)&&(i.blendEquationSeparate(We[Y],We[Dt]),S=Y,O=Dt),(ft!==L||Xt!==E||Wt!==N||ue!==M)&&(i.blendFuncSeparate(St[ft],St[Xt],St[Wt],St[ue]),L=ft,E=Xt,N=Wt,M=ue),(Oe.equals(A)===!1||At!==q)&&(i.blendColor(Oe.r,Oe.g,Oe.b,At),A.copy(Oe),q=At),y=G,k=!1}function Rt(G,Y){G.side===Vn?se(i.CULL_FACE):Jt(i.CULL_FACE);let ft=G.side===si;Y&&(ft=!ft),Vt(ft),G.blending===eo&&G.transparent===!1?kt(ca):kt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Xt=G.stencilWrite;o.setTest(Xt),Xt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Jt(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(G){W!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),W=G)}function Ut(G){G!==Id?(Jt(i.CULL_FACE),G!==Q&&(G===Du?i.cullFace(i.BACK):G===Pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),Q=G}function Ne(G){G!==ut&&(st&&i.lineWidth(G),ut=G)}function ce(G,Y,ft){G?(Jt(i.POLYGON_OFFSET_FILL),(V!==Y||at!==ft)&&(V=Y,at=ft,a.getReversed()&&(Y=-Y,ft=-ft),i.polygonOffset(Y,ft))):se(i.POLYGON_OFFSET_FILL)}function Xe(G){G?Jt(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function qe(G){G===void 0&&(G=i.TEXTURE0+ct-1),wt!==G&&(i.activeTexture(G),wt=G)}function nn(G,Y,ft){ft===void 0&&(wt===null?ft=i.TEXTURE0+ct-1:ft=wt);let Xt=xt[ft];Xt===void 0&&(Xt={type:void 0,texture:void 0},xt[ft]=Xt),(Xt.type!==G||Xt.texture!==Y)&&(wt!==ft&&(i.activeTexture(ft),wt=ft),i.bindTexture(G,Y||xe[G]),Xt.type=G,Xt.texture=Y)}function X(){let G=xt[wt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Re(){try{i.compressedTexImage2D(...arguments)}catch(G){Ce("WebGLState:",G)}}function Fe(){try{i.compressedTexImage3D(...arguments)}catch(G){Ce("WebGLState:",G)}}function ke(){try{i.texSubImage2D(...arguments)}catch(G){Ce("WebGLState:",G)}}function Ft(){try{i.texSubImage3D(...arguments)}catch(G){Ce("WebGLState:",G)}}function _n(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Ce("WebGLState:",G)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Ce("WebGLState:",G)}}function Me(){try{i.texStorage2D(...arguments)}catch(G){Ce("WebGLState:",G)}}function F(){try{i.texStorage3D(...arguments)}catch(G){Ce("WebGLState:",G)}}function w(){try{i.texImage2D(...arguments)}catch(G){Ce("WebGLState:",G)}}function et(){try{i.texImage3D(...arguments)}catch(G){Ce("WebGLState:",G)}}function Lt(G){return p[G]!==void 0?p[G]:i.getParameter(G)}function yt(G,Y){p[G]!==Y&&(i.pixelStorei(G,Y),p[G]=Y)}function Ct(G){pt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),pt.copy(G))}function Bt(G){Zt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Zt.copy(G))}function gt(G,Y){let ft=c.get(Y);ft===void 0&&(ft=new WeakMap,c.set(Y,ft));let Xt=ft.get(G);Xt===void 0&&(Xt=i.getUniformBlockIndex(Y,G.name),i.uniformBlockBinding(Y,Xt,Xt),ft.set(G,Xt))}function _t(G,Y,ft){let Dt=c.get(Y).get(G);l[Dt]!==ft&&(i.bindBufferBase(i.UNIFORM_BUFFER,Dt,ft),l[Dt]=ft)}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},wt=null,xt={},d={},l={},f=new WeakMap,g=[],I=null,_=!1,y=null,S=null,L=null,E=null,O=null,N=null,M=null,A=new Se(0,0,0),q=0,k=!1,W=null,Q=null,ut=null,V=null,at=null,pt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Jt,disable:se,bindFramebuffer:He,drawBuffers:_e,useProgram:ze,setBlending:kt,setMaterial:Rt,setFlipSided:Vt,setCullFace:Ut,setLineWidth:Ne,setPolygonOffset:ce,setScissorTest:Xe,activeTexture:qe,bindTexture:nn,unbindTexture:X,compressedTexImage2D:Re,compressedTexImage3D:Fe,texImage2D:w,texImage3D:et,pixelStorei:yt,getParameter:Lt,updateUBOMapping:gt,uniformBlockBinding:_t,texStorage2D:Me,texStorage3D:F,texSubImage2D:ke,texSubImage3D:Ft,compressedTexSubImage2D:_n,compressedTexSubImage3D:de,scissor:Ct,viewport:Bt,reset:Gt}}function g1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap,p=new Set,d,f=new WeakMap,g=new Set,I=new FinalizationRegistry(F=>g.delete(F)),_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,w){return _?new OffscreenCanvas(F,w):Ga("canvas")}function S(F,w,et){let Lt=1,yt=Me(F);if((yt.width>et||yt.height>et)&&(Lt=et/Math.max(yt.width,yt.height)),Lt<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let Ct=Math.floor(Lt*yt.width),Bt=Math.floor(Lt*yt.height);d===void 0&&(d=y(Ct,Bt));let gt=w?y(Ct,Bt):d;return gt.width=Ct,gt.height=Bt,gt.getContext("2d").drawImage(F,0,0,Ct,Bt),Ie("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Ct+"x"+Bt+")."),gt}else return"data"in F&&Ie("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),F;return F}function L(F){return F.generateMipmaps}function E(F){i.generateMipmap(F)}function O(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(F,w,et,Lt,yt,Ct=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Bt;Lt&&(Bt=t.get("EXT_texture_norm16"),Bt||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=w;if(w===i.RED&&(et===i.FLOAT&&(gt=i.R32F),et===i.HALF_FLOAT&&(gt=i.R16F),et===i.UNSIGNED_BYTE&&(gt=i.R8),et===i.UNSIGNED_SHORT&&Bt&&(gt=Bt.R16_EXT),et===i.SHORT&&Bt&&(gt=Bt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.R8UI),et===i.UNSIGNED_SHORT&&(gt=i.R16UI),et===i.UNSIGNED_INT&&(gt=i.R32UI),et===i.BYTE&&(gt=i.R8I),et===i.SHORT&&(gt=i.R16I),et===i.INT&&(gt=i.R32I)),w===i.RG&&(et===i.FLOAT&&(gt=i.RG32F),et===i.HALF_FLOAT&&(gt=i.RG16F),et===i.UNSIGNED_BYTE&&(gt=i.RG8),et===i.UNSIGNED_SHORT&&Bt&&(gt=Bt.RG16_EXT),et===i.SHORT&&Bt&&(gt=Bt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RG8UI),et===i.UNSIGNED_SHORT&&(gt=i.RG16UI),et===i.UNSIGNED_INT&&(gt=i.RG32UI),et===i.BYTE&&(gt=i.RG8I),et===i.SHORT&&(gt=i.RG16I),et===i.INT&&(gt=i.RG32I)),w===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),et===i.UNSIGNED_INT&&(gt=i.RGB32UI),et===i.BYTE&&(gt=i.RGB8I),et===i.SHORT&&(gt=i.RGB16I),et===i.INT&&(gt=i.RGB32I)),w===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),et===i.UNSIGNED_INT&&(gt=i.RGBA32UI),et===i.BYTE&&(gt=i.RGBA8I),et===i.SHORT&&(gt=i.RGBA16I),et===i.INT&&(gt=i.RGBA32I)),w===i.RGB&&(et===i.UNSIGNED_SHORT&&Bt&&(gt=Bt.RGB16_EXT),et===i.SHORT&&Bt&&(gt=Bt.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),w===i.RGBA){let _t=Ct?Fo:an.getTransfer(yt);et===i.FLOAT&&(gt=i.RGBA32F),et===i.HALF_FLOAT&&(gt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(gt=_t===En?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&Bt&&(gt=Bt.RGBA16_EXT),et===i.SHORT&&Bt&&(gt=Bt.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(F,w){let et;return F?w===null||w===Ms||w===fa?et=i.DEPTH24_STENCIL8:w===Ss?et=i.DEPTH32F_STENCIL8:w===io&&(et=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===fa?et=i.DEPTH_COMPONENT24:w===Ss?et=i.DEPTH_COMPONENT32F:w===io&&(et=i.DEPTH_COMPONENT16),et}function A(F,w){return L(F)===!0||F.isFramebufferTexture&&F.minFilter!==ui&&F.minFilter!==Oi?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function q(F){let w=new WeakRef(F);n.get(F).__ref=w,g.add(w),I.register(F,w,w)}function k(F){let w=n.get(F).__ref;w!==void 0&&(g.delete(w),I.unregister(w))}function W(F){ut(F.target)}function Q(F){V(F.target)}function ut(F){F.removeEventListener("dispose",W),k(F),ct(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&p.delete(F)}function V(F){F.removeEventListener("dispose",Q),k(F),Pt(F)}function at(){for(let F of g){let w=F.deref();w!==void 0&&(w.isRenderTarget===!0?V(w):ut(w))}g.clear(),p.clear()}function ct(F){let w=n.get(F);if(w.__webglInit===void 0)return;let et=F.source,Lt=f.get(et);if(Lt){let yt=Lt[w.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&st(F),Object.keys(Lt).length===0&&f.delete(et)}n.remove(F)}function st(F){let w=n.get(F);i.deleteTexture(w.__webglTexture);let et=F.source,Lt=f.get(et);delete Lt[w.__cacheKey],a.memory.textures--}function Pt(F){let w=n.get(F);w.__depthDisposeCallback&&w.__depthDisposeCallback();let et=F.depthTexture;if(et&&et.renderTarget===F&&ut(et),F.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(w.__webglFramebuffer[yt]))for(let Ct=0;Ct<w.__webglFramebuffer[yt].length;Ct++)i.deleteFramebuffer(w.__webglFramebuffer[yt][Ct]);else i.deleteFramebuffer(w.__webglFramebuffer[yt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[yt])}else{if(Array.isArray(w.__webglFramebuffer))for(let yt=0;yt<w.__webglFramebuffer.length;yt++)i.deleteFramebuffer(w.__webglFramebuffer[yt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let yt=0;yt<w.__webglColorRenderbuffer.length;yt++)w.__webglColorRenderbuffer[yt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[yt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Lt=F.textures;for(let yt=0,Ct=Lt.length;yt<Ct;yt++){let Bt=n.get(Lt[yt]);Bt.__webglTexture&&(i.deleteTexture(Bt.__webglTexture),a.memory.textures--),n.remove(Lt[yt])}n.remove(F)}let lt=0;function wt(){lt=0}function xt(){return lt}function Ht(F){lt=F}function le(){let F=lt;return F>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),lt+=1,F}function pt(F){let w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.mipmapsAutoUpdate),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function Zt(F,w){let et=n.get(F);if(F.isVideoTexture&&_n(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&et.__version!==F.version){let Lt=F.image;if(Lt===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Lt.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(et,F,w);return}}else F.isExternalTexture&&(et.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+w)}function ie(F,w){let et=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&et.__version!==F.version){Rt(et,F,w);return}else F.isExternalTexture&&(et.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+w)}function xe(F,w){let et=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&et.__version!==F.version){Rt(et,F,w);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+w)}function Jt(F,w){let et=n.get(F);if(F.version>0&&et.__version!==F.version){Vt(et,F,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+w)}let se={[Gs]:i.REPEAT,[zs]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},He={[ui]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[al]:i.NEAREST_MIPMAP_LINEAR,[Oi]:i.LINEAR,[$c]:i.LINEAR_MIPMAP_NEAREST,[fr]:i.LINEAR_MIPMAP_LINEAR},_e={[ip]:i.NEVER,[ef]:i.ALWAYS,[sp]:i.LESS,[Qu]:i.LEQUAL,[rp]:i.EQUAL,[tf]:i.GEQUAL,[ap]:i.GREATER,[op]:i.NOTEQUAL};function ze(F,w){if(w.type===Ss&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Oi||w.magFilter===$c||w.magFilter===al||w.magFilter===fr||w.minFilter===Oi||w.minFilter===$c||w.minFilter===al||w.minFilter===fr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,se[w.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,se[w.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,se[w.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,He[w.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,He[w.minFilter]),w.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,_e[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==al&&w.minFilter!==fr||w.type===Ss&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function We(F,w){let et=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",W),q(w));let Lt=w.source,yt=f.get(Lt);yt===void 0&&(yt={},f.set(Lt,yt));let Ct=pt(w);if(Ct!==F.__cacheKey){yt[Ct]===void 0&&(yt[Ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),yt[Ct].usedTimes++;let Bt=yt[F.__cacheKey];Bt!==void 0&&(yt[F.__cacheKey].usedTimes--,Bt.usedTimes===0&&st(w)),F.__cacheKey=Ct,F.__webglTexture=yt[Ct].texture}return et}function St(F,w,et){return Math.floor(Math.floor(F/et)/w)}function kt(F,w,et,Lt){let Ct=F.updateRanges;if(Ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,et,Lt,w.data);else{Ct.sort((G,Y)=>G.start-Y.start);let Bt=0;for(let G=1;G<Ct.length;G++){let Y=Ct[Bt],ft=Ct[G],Xt=Y.start+Y.count,Dt=St(ft.start,w.width,4),Wt=St(Y.start,w.width,4);ft.start<=Xt+1&&Dt===Wt&&St(ft.start+ft.count-1,w.width,4)===Dt?Y.count=Math.max(Y.count,ft.start+ft.count-Y.start):(++Bt,Ct[Bt]=ft)}Ct.length=Bt+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let G=0,Y=Ct.length;G<Y;G++){let ft=Ct[G],Xt=Math.floor(ft.start/4),Dt=Math.ceil(ft.count/4),Wt=Xt%w.width,ue=Math.floor(Xt/w.width),Oe=Dt,At=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ue),e.texSubImage2D(i.TEXTURE_2D,0,Wt,ue,Oe,At,et,Lt,w.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function Rt(F,w,et){let Lt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Lt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Lt=i.TEXTURE_3D);let yt=We(F,w),Ct=w.source;e.bindTexture(Lt,F.__webglTexture,i.TEXTURE0+et);let Bt=n.get(Ct);if(Ct.version!==Bt.__version||yt===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let At=an.getPrimaries(an.workingColorSpace),pe=w.colorSpace===pr?null:an.getPrimaries(w.colorSpace),Ee=w.colorSpace===pr||At===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let _t=S(w.image,!1,s.maxTextureSize);_t=de(w,_t);let Gt=r.convert(w.format,w.colorSpace),G=r.convert(w.type),Y=N(w.internalFormat,Gt,G,w.normalized,w.colorSpace,w.isVideoTexture);ze(Lt,w);let ft,Xt=w.mipmaps,Dt=w.isVideoTexture!==!0,Wt=Bt.__version===void 0||yt===!0,ue=Ct.dataReady,Oe=A(w,_t);if(w.isDepthTexture)Y=M(w.format===dr,w.type),Wt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Y,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Y,_t.width,_t.height,0,Gt,G,null));else if(w.isDataTexture)if(Xt.length>0){Dt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Oe,Y,Xt[0].width,Xt[0].height);for(let At=0,pe=Xt.length;At<pe;At++)ft=Xt[At],Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,ft.width,ft.height,Gt,G,ft.data):e.texImage2D(i.TEXTURE_2D,At,Y,ft.width,ft.height,0,Gt,G,ft.data);w.generateMipmaps=!1}else Dt?(Wt&&e.texStorage2D(i.TEXTURE_2D,Oe,Y,_t.width,_t.height),ue&&kt(w,_t,Gt,G)):e.texImage2D(i.TEXTURE_2D,0,Y,_t.width,_t.height,0,Gt,G,_t.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Dt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Y,Xt[0].width,Xt[0].height,_t.depth);for(let At=0,pe=Xt.length;At<pe;At++)if(ft=Xt[At],w.format!==Ts)if(Gt!==null)if(Dt){if(ue)if(w.layerUpdates.size>0){let Ee=cf(ft.width,ft.height,w.format,w.type);for(let $t of w.layerUpdates){let sn=ft.data.subarray($t*Ee/ft.data.BYTES_PER_ELEMENT,($t+1)*Ee/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,$t,ft.width,ft.height,1,Gt,sn)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,ft.width,ft.height,_t.depth,Gt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,At,Y,ft.width,ft.height,_t.depth,0,ft.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?ue&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,ft.width,ft.height,_t.depth,Gt,G,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,At,Y,ft.width,ft.height,_t.depth,0,Gt,G,ft.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Dt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Oe,Y,Xt[0].width,Xt[0].height);for(let At=0,pe=Xt.length;At<pe;At++)ft=Xt[At],w.format!==Ts?Gt!==null?Dt?ue&&e.compressedTexSubImage2D(i.TEXTURE_2D,At,0,0,ft.width,ft.height,Gt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,At,Y,ft.width,ft.height,0,ft.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,ft.width,ft.height,Gt,G,ft.data):e.texImage2D(i.TEXTURE_2D,At,Y,ft.width,ft.height,0,Gt,G,ft.data)}else if(w.isDataArrayTexture)if(Dt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Y,_t.width,_t.height,_t.depth),ue)if(w.layerUpdates.size>0){let At=cf(_t.width,_t.height,w.format,w.type);for(let pe of w.layerUpdates){let Ee=_t.data.subarray(pe*At/_t.data.BYTES_PER_ELEMENT,(pe+1)*At/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,_t.width,_t.height,1,Gt,G,Ee)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Gt,G,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,_t.width,_t.height,_t.depth,0,Gt,G,_t.data);else if(w.isData3DTexture)Dt?(Wt&&e.texStorage3D(i.TEXTURE_3D,Oe,Y,_t.width,_t.height,_t.depth),ue&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Gt,G,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Y,_t.width,_t.height,_t.depth,0,Gt,G,_t.data);else if(w.isFramebufferTexture){if(Wt)if(Dt)e.texStorage2D(i.TEXTURE_2D,Oe,Y,_t.width,_t.height);else{let At=_t.width,pe=_t.height;for(let Ee=0;Ee<Oe;Ee++)e.texImage2D(i.TEXTURE_2D,Ee,Y,At,pe,0,Gt,G,null),At>>=1,pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let At=i.canvas;if(At.hasAttribute("layoutsubtree")||At.setAttribute("layoutsubtree","true"),_t.parentNode!==At){At.appendChild(_t),p.add(w),At.onpaint=pe=>{let Ee=pe.changedElements;for(let $t of p)Ee.includes($t.image)&&($t.needsUpdate=!0)},At.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let Ee=i.RGBA,$t=i.RGBA,sn=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,$t,sn,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Dt&&Wt){let At=Me(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Oe,Y,At.width,At.height)}for(let At=0,pe=Xt.length;At<pe;At++)ft=Xt[At],Dt?ue&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,Gt,G,ft):e.texImage2D(i.TEXTURE_2D,At,Y,Gt,G,ft);w.generateMipmaps=!1}else if(Dt){if(Wt){let At=Me(_t);e.texStorage2D(i.TEXTURE_2D,Oe,Y,At.width,At.height)}ue&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,G,_t)}else e.texImage2D(i.TEXTURE_2D,0,Y,Gt,G,_t);L(w)&&w.mipmapsAutoUpdate===!0&&E(Lt),Bt.__version=Ct.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Vt(F,w,et){if(w.image.length!==6)return;let Lt=We(F,w),yt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+et);let Ct=n.get(yt);if(yt.version!==Ct.__version||Lt===!0){e.activeTexture(i.TEXTURE0+et);let Bt=an.getPrimaries(an.workingColorSpace),gt=w.colorSpace===pr?null:an.getPrimaries(w.colorSpace),_t=w.colorSpace===pr||Bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,G=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let $t=0;$t<6;$t++)!Gt&&!G?Y[$t]=S(w.image[$t],!0,s.maxCubemapSize):Y[$t]=G?w.image[$t].image:w.image[$t],Y[$t]=de(w,Y[$t]);let ft=Y[0],Xt=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type),Wt=N(w.internalFormat,Xt,Dt,w.normalized,w.colorSpace),ue=w.isVideoTexture!==!0,Oe=Ct.__version===void 0||Lt===!0,At=yt.dataReady,pe=A(w,ft);ze(i.TEXTURE_CUBE_MAP,w);let Ee;if(w.isDepthTexture){if(Wt=M(w.format===dr,w.type),Oe)if(ue)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Wt,ft.width,ft.height);else for(let $t=0;$t<6;$t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Wt,ft.width,ft.height,0,Xt,Dt,null)}else if(Gt){ue&&Oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Wt,ft.width,ft.height);for(let $t=0;$t<6;$t++){Ee=Y[$t].mipmaps;for(let sn=0;sn<Ee.length;sn++){let kn=Ee[sn];w.format!==Ts?Xt!==null?ue?At&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn,0,0,kn.width,kn.height,Xt,kn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn,Wt,kn.width,kn.height,0,kn.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn,0,0,kn.width,kn.height,Xt,Dt,kn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn,Wt,kn.width,kn.height,0,Xt,Dt,kn.data)}}}else{if(Ee=w.mipmaps,ue&&Oe){Ee.length>0&&pe++;let $t=Me(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Wt,$t.width,$t.height)}for(let $t=0;$t<6;$t++)if(G){ue?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,0,0,Y[$t].width,Y[$t].height,Xt,Dt,Y[$t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Wt,Y[$t].width,Y[$t].height,0,Xt,Dt,Y[$t].data);for(let sn=0;sn<Ee.length;sn++){let on=Ee[sn].image[$t].image;ue?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn+1,0,0,on.width,on.height,Xt,Dt,on.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn+1,Wt,on.width,on.height,0,Xt,Dt,on.data)}}else{ue?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,0,0,Xt,Dt,Y[$t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Wt,Xt,Dt,Y[$t]);for(let sn=0;sn<Ee.length;sn++){let kn=Ee[sn];ue?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn+1,0,0,Xt,Dt,kn.image[$t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,sn+1,Wt,Xt,Dt,kn.image[$t])}}}L(w)&&w.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),Ct.__version=yt.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Ut(F,w,et,Lt,yt,Ct){let Bt=r.convert(et.format,et.colorSpace),gt=r.convert(et.type),_t=N(et.internalFormat,Bt,gt,et.normalized,et.colorSpace),Gt=n.get(w),G=n.get(et);if(G.__renderTarget=w,!Gt.__hasExternalTextures){let Y=Math.max(1,w.width>>Ct),ft=Math.max(1,w.height>>Ct);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,Ct,_t,Y,ft,w.depth,0,Bt,gt,null):e.texImage2D(yt,Ct,_t,Y,ft,0,Bt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ft(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Lt,yt,G.__webglTexture,0,ke(w)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Lt,yt,G.__webglTexture,Ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(F,w,et){if(i.bindRenderbuffer(i.RENDERBUFFER,F),w.depthBuffer){let Lt=w.depthTexture,yt=Lt&&Lt.isDepthTexture?Lt.type:null,Ct=M(w.stencilBuffer,yt),Bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(w),Ct,w.width,w.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(w),Ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,F)}else{let Lt=w.textures;for(let yt=0;yt<Lt.length;yt++){let Ct=Lt[yt],Bt=r.convert(Ct.format,Ct.colorSpace),gt=r.convert(Ct.type),_t=N(Ct.internalFormat,Bt,gt,Ct.normalized,Ct.colorSpace);Ft(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(w),_t,w.width,w.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(w),_t,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,_t,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(F,w,et){let Lt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let yt=n.get(w.depthTexture);yt.__renderTarget=w;let Ct=Lt?w.depthTexture.image[0]:w.depthTexture.image;(!yt.__webglTexture||Ct.width!==w.width||Ct.height!==w.height)&&(Ct.width=w.width,Ct.height=w.height,w.depthTexture.needsUpdate=!0),Lt?Jt(w.depthTexture,0):Zt(w.depthTexture,0);let Bt=yt.__webglTexture,gt=ke(w),_t=Lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,Gt=w.depthTexture.format===dr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===lr)Ft(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Gt,_t,Bt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Gt,_t,Bt,0);else if(w.depthTexture.format===dr)Ft(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Gt,_t,Bt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Gt,_t,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(F){let w=n.get(F),et=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){let Lt=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Lt){let yt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Lt.removeEventListener("dispose",yt)};Lt.addEventListener("dispose",yt),w.__depthDisposeCallback=yt}w.__boundDepthTexture=Lt}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(et)for(let Lt=0;Lt<6;Lt++)ce(w.__webglFramebuffer[Lt],F,Lt);else F.texture.mipmaps.length>0?ce(w.__webglFramebuffer[0],F,0):ce(w.__webglFramebuffer,F,0);else if(et){w.__webglDepthbuffer=[];for(let Lt=0;Lt<6;Lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Lt]),w.__webglDepthbuffer[Lt]===void 0)w.__webglDepthbuffer[Lt]=i.createRenderbuffer(),Ne(w.__webglDepthbuffer[Lt],F,!1);else{let yt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=w.__webglDepthbuffer[Lt];i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,Ct)}}else if(F.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ne(w.__webglDepthbuffer,F,!1);else{let yt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,Ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(F,w,et){let Lt=n.get(F);w!==void 0&&Ut(Lt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&Xe(F)}function nn(F){let w=F.texture,et=n.get(F),Lt=n.get(w);F.addEventListener("dispose",Q),q(F);let yt=F.textures,Ct=F.isWebGLCubeRenderTarget===!0,Bt=yt.length>1;if(Bt||(Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture()),Lt.__version=w.version,a.memory.textures++),Ct){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let _t=0;_t<w.mipmaps.length;_t++)et.__webglFramebuffer[gt][_t]=i.createFramebuffer()}else et.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)et.__webglFramebuffer[gt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let gt=0,_t=yt.length;gt<_t;gt++){let Gt=n.get(yt[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Ft(F)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<yt.length;gt++){let _t=yt[gt];et.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);let Gt=r.convert(_t.format,_t.colorSpace),G=r.convert(_t.type),Y=N(_t.internalFormat,Gt,G,_t.normalized,_t.colorSpace,F.isXRRenderTarget===!0),ft=ke(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Y,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(et.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(i.TEXTURE_CUBE_MAP,Lt.__webglTexture),ze(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)Ut(et.__webglFramebuffer[gt][_t],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else Ut(et.__webglFramebuffer[gt],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);L(w)?E(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(Bt){for(let gt=0,_t=yt.length;gt<_t;gt++){let Gt=yt[gt],G=n.get(Gt),Y=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Y=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,G.__webglTexture),ze(Y,Gt),Ut(et.__webglFramebuffer,F,Gt,i.COLOR_ATTACHMENT0+gt,Y,0),L(Gt)&&E(Y)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(gt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Lt.__webglTexture),ze(gt,w),w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)Ut(et.__webglFramebuffer[_t],F,w,i.COLOR_ATTACHMENT0,gt,_t);else Ut(et.__webglFramebuffer,F,w,i.COLOR_ATTACHMENT0,gt,0);L(w)?E(gt):w.mipmaps.length>0&&i.texParameteri(gt,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}F.depthBuffer&&Xe(F)}function X(F){let w=F.textures;for(let et=0,Lt=w.length;et<Lt;et++){let yt=w[et];if(L(yt)&&yt.mipmapsAutoUpdate===!0){let Ct=O(F),Bt=n.get(yt).__webglTexture;e.bindTexture(Ct,Bt),E(Ct),e.unbindTexture()}}}let Re=[];function Fe(F){if(F.samples>0){if(Ft(F)===!1){let w=F.textures,et=F.width,Lt=F.height,yt=i.COLOR_BUFFER_BIT,Ct=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(F),gt=w.length>1;if(gt)for(let Gt=0;Gt<w.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Gt=0;Gt<w.length;Gt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Gt]);let G=n.get(w[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,et,Lt,0,0,et,Lt,yt,i.NEAREST),l===!0&&(Re.length=0,Re.push(i.COLOR_ATTACHMENT0+Gt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Re.push(Ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Gt=0;Gt<w.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Gt]);let G=n.get(w[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,G,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ke(F){return Math.min(s.maxSamples,F.samples)}function Ft(F){let w=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _n(F){let w=a.render.frame;u.get(F)!==w&&(u.set(F,w),F.update())}function de(F,w){let et=F.colorSpace,Lt=F.format,yt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||et!==Uo&&et!==pr&&(an.getTransfer(et)===En?(Lt!==Ts||yt!==Zi)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",et)),w}function Me(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=wt,this.getTextureUnits=xt,this.setTextureUnits=Ht,this.setTexture2D=Zt,this.setTexture2DArray=ie,this.setTexture3D=xe,this.setTextureCube=Jt,this.rebindTextures=qe,this.setupRenderTarget=nn,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ft,this.dispose=at}function x1(i,t){function e(n,s=pr){let r,a=an.getTransfer(s);if(n===Zi)return i.UNSIGNED_BYTE;if(n===Jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return i.BYTE;if(n===Yu)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Zc)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===Ss)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===Ku)return i.RGB;if(n===Ts)return i.RGBA;if(n===lr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===ju)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===Ur)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===th)return i.RGBA_INTEGER;if(n===ol||n===ll||n===cl||n===hl)if(a===En)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eh||n===nh||n===ih||n===sh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===ah||n===oh||n===lh||n===ch||n===ul||n===hh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rh||n===ah)return a===En?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lh)return r.COMPRESSED_R11_EAC;if(n===ch)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ul)return r.COMPRESSED_RG11_EAC;if(n===hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===xh||n===_h||n===yh||n===vh||n===bh||n===Mh||n===Sh||n===wh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_h)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wh)return a===En?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Th||n===Eh||n===Ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Th)return a===En?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Ch||n===fl||n===Ih)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
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

}`,Sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qs({vertexShader:_1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wf=class extends Vs{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,g=null,I=typeof XRWebGLBinding!="undefined",_=new Sf,y={},S=e.getContextAttributes(),L=null,E=null,O=[],N=[],M=new Nt,A=null,q=null,k=new ni;k.viewport=new Gn;let W=new ni;W.viewport=new Gn;let Q=[k,W],ut=new Hc,V=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let Zt=O[pt];return Zt===void 0&&(Zt=new Xa,O[pt]=Zt),Zt.getTargetRaySpace()},this.getControllerGrip=function(pt){let Zt=O[pt];return Zt===void 0&&(Zt=new Xa,O[pt]=Zt),Zt.getGripSpace()},this.getHand=function(pt){let Zt=O[pt];return Zt===void 0&&(Zt=new Xa,O[pt]=Zt),Zt.getHandSpace()};function ct(pt){let Zt=N.indexOf(pt.inputSource);if(Zt===-1)return;let ie=O[Zt];ie!==void 0&&(ie.update(pt.inputSource,pt.frame,c||a),ie.dispatchEvent({type:pt.type,data:pt.inputSource}))}function st(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",Pt);for(let pt=0;pt<O.length;pt++){let Zt=N[pt];Zt!==null&&(N[pt]=null,O[pt].disconnect(Zt))}V=null,at=null,_.reset();for(let pt in y)delete y[pt];if(t.setRenderTarget(L),f=null,d=null,p=null,s=null,E=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(M.width,M.height,!1),q!==null){let pt=q.camera;pt.fov=q.fov,pt.zoom=q.zoom,pt.updateProjectionMatrix(),q=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(pt){c=pt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&I&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",st),s.addEventListener("inputsourceschange",Pt),S.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(M),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,xe=null,Jt=null;S.depth&&(Jt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ie=S.stencil?dr:lr,xe=S.stencil?fa:Ms);let se={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(se),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Bi(d.textureWidth,d.textureHeight,{format:Ts,type:Zi,depthTexture:new hr(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ie),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Bi(f.framebufferWidth,f.framebufferHeight,{format:Ts,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Pt(pt){for(let Zt=0;Zt<pt.removed.length;Zt++){let ie=pt.removed[Zt],xe=N.indexOf(ie);xe>=0&&(N[xe]=null,O[xe].disconnect(ie))}for(let Zt=0;Zt<pt.added.length;Zt++){let ie=pt.added[Zt],xe=N.indexOf(ie);if(xe===-1){for(let se=0;se<O.length;se++)if(se>=N.length){N.push(ie),xe=se;break}else if(N[se]===null){N[se]=ie,xe=se;break}if(xe===-1)break}let Jt=O[xe];Jt&&Jt.connect(ie)}}function lt(pt,Zt){Zt===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(Zt.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let Zt=pt.near,ie=pt.far;_.texture!==null&&(_.depthNear>0&&(Zt=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),ut.near=W.near=k.near=Zt,ut.far=W.far=k.far=ie,(V!==ut.near||at!==ut.far)&&(s.updateRenderState({depthNear:ut.near,depthFar:ut.far}),V=ut.near,at=ut.far),ut.layers.mask=pt.layers.mask|6,k.layers.mask=ut.layers.mask&-5,W.layers.mask=ut.layers.mask&-3;let xe=pt.parent,Jt=ut.cameras;lt(ut,xe);for(let se=0;se<Jt.length;se++)lt(Jt[se],xe);ut.projectionMatrix.copy(k.projectionMatrix),ut.projectionMatrixInverse.copy(k.projectionMatrixInverse),q===null&&pt.isPerspectiveCamera&&(q={camera:pt,fov:pt.fov,zoom:pt.zoom}),wt(pt,ut,xe)};function wt(pt,Zt,ie){ie===null?pt.matrix.copy(Zt.matrixWorld):(pt.matrix.copy(ie.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(Zt.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(Zt.projectionMatrix),pt.projectionMatrixInverse.copy(Zt.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=xc*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(pt){l=pt,d!==null&&(d.fixedFoveation=pt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=pt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ut)},this.getCameraTexture=function(pt){return y[pt]};let xt=null;function Ht(pt,Zt){if(u=Zt.getViewerPose(c||a),g=Zt,u!==null){let ie=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let xe=!1;ie.length!==ut.cameras.length&&(ut.cameras.length=0,xe=!0);for(let _e=0;_e<ie.length;_e++){let ze=ie[_e],We=null;if(f!==null)We=f.getViewport(ze);else{let kt=p.getViewSubImage(d,ze);We=kt.viewport,_e===0&&(t.setRenderTargetTextures(E,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(E))}let St=Q[_e];St===void 0&&(St=new ni,St.layers.enable(_e),St.viewport=new Gn,Q[_e]=St),St.matrix.fromArray(ze.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(ze.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(We.x,We.y,We.width,We.height),_e===0&&(ut.matrix.copy(St.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),xe===!0&&ut.cameras.push(St)}let Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){p=n.getBinding();let _e=p.getDepthInformation(ie[0]);_e&&_e.isValid&&_e.texture&&_.init(_e,s.renderState)}if(Jt&&Jt.includes("camera-access")&&I){t.state.unbindTexture(),p=n.getBinding();for(let _e=0;_e<ie.length;_e++){let ze=ie[_e].camera;if(ze){let We=y[ze];We||(We=new Wo,y[ze]=We);let St=p.getCameraImage(ze);We.sourceTexture=St}}}}for(let ie=0;ie<O.length;ie++){let xe=N[ie],Jt=O[ie];xe!==null&&Jt!==void 0&&Jt.update(xe,Zt,c||a)}xt&&xt(pt,Zt),Zt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Zt}),g=null}let le=new Xp;le.setAnimationLoop(Ht),this.setAnimationLoop=function(pt){xt=pt},this.dispose=function(){}}},v1=new Ln,em=new Be;em.set(-1,0,0,0,1,0,0,0,1);function b1(i,t){function e(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function n(_,y){y.color.getRGB(_.fogColor.value,af(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function s(_,y,S,L,E){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(_,y):y.isMeshLambertMaterial?(r(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(_,y),p(_,y)):y.isMeshPhongMaterial?(r(_,y),u(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(_,y),d(_,y),y.isMeshPhysicalMaterial&&f(_,y,E)):y.isMeshMatcapMaterial?(r(_,y),g(_,y)):y.isMeshDepthMaterial?r(_,y):y.isMeshDistanceMaterial?(r(_,y),I(_,y)):y.isMeshNormalMaterial?r(_,y):y.isLineBasicMaterial?(a(_,y),y.isLineDashedMaterial&&o(_,y)):y.isPointsMaterial?l(_,y,S,L):y.isSpriteMaterial?c(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,e(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===si&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,e(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===si&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,e(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,e(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);let S=t.get(y),L=S.envMap,E=S.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(E)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(em),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,_.aoMapTransform))}function a(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform))}function o(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function l(_,y,S,L){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*S,_.scale.value=L*.5,y.map&&(_.map.value=y.map,e(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function u(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function p(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function d(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function f(_,y,S){_.ior.value=y.ior,y.diffuseRoughness>0&&(_.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=y.diffuseRoughnessMap,e(y.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.retroreflectivity>0&&(_.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,y){y.matcap&&(_.matcap.value=y.matcap)}function I(_,y){let S=t.get(y).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M1(i,t,e,n){let s={},r={};function a(S,L){let E=L.program;n.uniformBlockBinding(S,E,s[S.id])}function o(S,L){let E=s[S.id];E===void 0&&(g(S),E=l(S),s[S.id]=E,S.addEventListener("dispose",_));let O=L.program;n.updateUBOMapping(S,O);let N=t.render.frame;r[S.id]!==N&&(c(S),r[S.id]=N)}function l(S){let L=i.createBuffer(),E=S.__size,O=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,E,O),i.bindBuffer(i.UNIFORM_BUFFER,null),L}function c(S){let L=s[S.id],E=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let N=0,M=E.length;N<M;N++){let A=E[N];if(Array.isArray(A))for(let q=0,k=A.length;q<k;q++)u(A[q],N,q,O);else u(A,N,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,L,E,O){if(d(S,L,E,O)===!0){let N=S.__offset,M=S.value;if(Array.isArray(M)){let A=0;for(let q=0;q<M.length;q++){let k=M[q],W=I(k,!0);p(k,S.__data,A),A+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else p(M,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}function p(S,L,E){typeof S=="number"||typeof S=="boolean"?L[E]=S:S.isMatrix3?(L[E]=S.elements[0],L[E+1]=S.elements[1],L[E+2]=S.elements[2],L[E+3]=0,L[E+4]=S.elements[3],L[E+5]=S.elements[4],L[E+6]=S.elements[5],L[E+7]=0,L[E+8]=S.elements[6],L[E+9]=S.elements[7],L[E+10]=S.elements[8],L[E+11]=0):ArrayBuffer.isView(S)?L.set(S.subarray(0,L.length-E),E):S.toArray(L,E)}function d(S,L,E,O){let N=S.value,M=L+"_"+E;if(Array.isArray(N)){O[M]===void 0&&(O[M]=[]);let A=O[M],q=!1;for(let k=0;k<N.length;k++)f(N[k],A,k)===!0&&(q=!0);return q}return f(N,O,M)}function f(S,L,E){if(L[E]===void 0)return typeof S=="number"||typeof S=="boolean"?L[E]=S:ArrayBuffer.isView(S)?L[E]=S.slice():L[E]=S.clone(),!0;{let O=L[E];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return L[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(O.equals(S)===!1)return O.copy(S),!0}}return!1}function g(S){let L=S.uniforms,E=0,O=16;for(let M=0,A=L.length;M<A;M++){let q=Array.isArray(L[M])?L[M]:[L[M]];for(let k=0,W=q.length;k<W;k++){let Q=q[k],ut=Array.isArray(Q.value)?Q.value:[Q.value],V=Array.isArray(L[M])||Array.isArray(Q.value),at=E;for(let st=0,Pt=ut.length;st<Pt;st++){let lt=ut[st],wt=I(lt,V),xt=E%O,Ht=xt%wt.boundary,le=xt+Ht;E+=Ht,le!==0&&O-le<wt.storage&&(E+=O-le),st===0&&(at=E),E+=wt.storage}let ct=Q.type==="int"?Int32Array:Q.type==="uint"?Uint32Array:Float32Array;Q.__data=new ct((E-at)/Float32Array.BYTES_PER_ELEMENT),Q.__offset=at}}let N=E%O;return N>0&&(E+=O-N),S.__size=E,S.__cache={},this}function I(S,L){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),L===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function _(S){let L=S.target;L.removeEventListener("dispose",_),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function y(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:y}}var S1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$s=null;function w1(){return $s===null&&($s=new bc(S1,16,16,Ur,ws),$s.name="DFG_LUT",$s.minFilter=Oi,$s.magFilter=Oi,$s.wrapS=zs,$s.wrapT=zs,$s.generateMipmaps=!1,$s.needsUpdate=!0),$s}var ro=class{constructor(t={}){let{canvas:e=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let I=f,_=new Set([th,Qc,jc]),y=new Set([Zi,Ms,io,fa,Jc,Kc]),S=new Uint32Array(4),L=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},O=null,N=null,M=[],A=[],q=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,W=!1,Q=null,ut=null,V=null,at=null;this._outputColorSpace=Qn;let ct=0,st=0,Pt=null,lt=-1,wt=null,xt=new Gn,Ht=new Gn,le=null,pt=new Se(0),Zt=0,ie=e.width,xe=e.height,Jt=1,se=null,He=null,_e=new Gn(0,0,ie,xe),ze=new Gn(0,0,ie,xe),We=!1,St=new Rr,kt=new Mc,Rt=!1,Vt=!1,Ut=new Ln,Ne=new z,ce=new Gn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function nn(){return Pt===null?Jt:1}let X=n;function Re(R,H){return e.getContext(R,H)}let Fe,ke,Ft,_n,de,Me,F,w,et,Lt,yt,Ct,Bt,gt,_t,Gt,G,Y,ft,Xt,Dt,Wt,ue;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",$t,!1),X===null){let H="webgl2";if(X=Re(H,R),X===null)throw Re(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(R){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),Ce("WebGLRenderer: "+R.message),R}function Oe(){Fe=new U_(X),Fe.init(),Dt=new x1(X,Fe),ke=new w_(X,Fe,t,Dt),Ft=new m1(X,Fe),ke.reversedDepthBuffer&&d&&Ft.buffers.depth.setReversed(!0),ut=X.createFramebuffer(),V=X.createFramebuffer(),at=X.createFramebuffer(),_n=new B_(X),de=new e1,Me=new g1(X,Fe,Ft,de,ke,Dt,_n),F=new N_(k),w=new k0(X),Wt=new M_(X,w),et=new F_(X,w,_n,Wt),Lt=new k_(X,et,w,Wt,_n),Y=new z_(X,ke,Me),_t=new T_(de),yt=new t1(k,F,Fe,ke,Wt,_t),Ct=new b1(k,de),Bt=new i1,gt=new c1(Fe),G=new b_(k,F,Ft,Lt,g,l),Gt=new p1(k,Lt,ke),ue=new M1(X,_n,ke,Ft),ft=new S_(X,Fe,_n),Xt=new O_(X,Fe,_n),_n.programs=yt.programs,k.capabilities=ke,k.extensions=Fe,k.properties=de,k.renderLists=Bt,k.shadowMap=Gt,k.state=Ft,k.info=_n}I!==Zi&&(q=new V_(I,e.width,e.height,o,s,r));let At=new wf(k,X);this.xr=At,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Jt},this.setPixelRatio=function(R){R!==void 0&&(Jt=R,this.setSize(ie,xe,!1))},this.getSize=function(R){return R.set(ie,xe)},this.setSize=function(R,H,ot=!0){if(At.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,xe=H,e.width=Math.floor(R*Jt),e.height=Math.floor(H*Jt),ot===!0&&(e.style.width=R+"px",e.style.height=H+"px"),q!==null&&q.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(ie*Jt,xe*Jt).floor()},this.setDrawingBufferSize=function(R,H,ot){ie=R,xe=H,Jt=ot,e.width=Math.floor(R*ot),e.height=Math.floor(H*ot),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(I===Zi){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(xt)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,H,ot,nt){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,H,ot,nt),Ft.viewport(xt.copy(_e).multiplyScalar(nn()).round())},this.getScissor=function(R){return R.copy(ze)},this.setScissor=function(R,H,ot,nt){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,H,ot,nt),Ft.scissor(Ht.copy(ze).multiplyScalar(nn()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(R){Ft.setScissorTest(We=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ot=!0){let nt=0;if(R){let it=!1;if(Pt!==null){let Ot=Pt.texture.format;it=_.has(Ot)}if(it){let Ot=Pt.texture.type,te=y.has(Ot),qt=G.getClearColor(),Kt=G.getClearAlpha(),U=qt.r,ye=qt.g,Ge=qt.b;te?(S[0]=U,S[1]=ye,S[2]=Ge,S[3]=Kt,X.clearBufferuiv(X.COLOR,0,S)):(L[0]=U,L[1]=ye,L[2]=Ge,L[3]=Kt,X.clearBufferiv(X.COLOR,0,L))}else nt|=X.COLOR_BUFFER_BIT}H&&(nt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),G.dispose(),Bt.dispose(),gt.dispose(),Me.dispose(),de.dispose(),F.dispose(),Lt.dispose(),et.dispose(),Wt.dispose(),ue.dispose(),yt.dispose(),At.dispose(),At.removeEventListener("sessionstart",xr),At.removeEventListener("sessionend",Is),Zn.stop()};function pe(R){R.preventDefault(),Oo("WebGLRenderer: Context Lost."),W=!0}function Ee(){Oo("WebGLRenderer: Context Restored."),W=!1;let R=_n.autoReset,H=Gt.enabled,ot=Gt.autoUpdate,nt=Gt.needsUpdate,it=Gt.type;Oe(),_n.autoReset=R,Gt.enabled=H,Gt.autoUpdate=ot,Gt.needsUpdate=nt,Gt.type=it}function $t(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function sn(R){let H=R.target;H.removeEventListener("dispose",sn),kn(H)}function kn(R){on(R),de.remove(R)}function on(R){let H=de.get(R).programs;H!==void 0&&(H.forEach(function(ot){yt.releaseProgram(ot)}),R.isShaderMaterial&&yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ot,nt,it,Ot){H===null&&(H=Xe);let te=it.isMesh&&it.matrixWorld.determinantAffine()<0,qt=Hn(R,H,ot,nt,it);Ft.setMaterial(nt,te);let Kt=ot.index,U=1;if(nt.wireframe===!0){if(Kt=et.getWireframeAttribute(ot),Kt===void 0)return;U=2}let ye=ot.drawRange,Ge=ot.attributes.position,re=ye.start*U,we=(ye.start+ye.count)*U;Ot!==null&&(re=Math.max(re,Ot.start*U),we=Math.min(we,(Ot.start+Ot.count)*U)),Kt!==null?(re=Math.max(re,0),we=Math.min(we,Kt.count)):Ge!=null&&(re=Math.max(re,0),we=Math.min(we,Ge.count));let Nn=we-re;if(Nn<0||Nn===1/0)return;Wt.setup(it,nt,qt,ot,Kt);let Ye,rn=ft;if(Kt!==null&&(Ye=w.get(Kt),rn=Xt,rn.setIndex(Ye)),it.isMesh)nt.wireframe===!0?(Ft.setLineWidth(nt.wireframeLinewidth*nn()),rn.setMode(X.LINES)):rn.setMode(X.TRIANGLES);else if(it.isLine){let yn=nt.linewidth;yn===void 0&&(yn=1),Ft.setLineWidth(yn*nn()),it.isLineSegments?rn.setMode(X.LINES):it.isLineLoop?rn.setMode(X.LINE_LOOP):rn.setMode(X.LINE_STRIP)}else it.isPoints?rn.setMode(X.POINTS):it.isSprite&&rn.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))rn.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let yn=it._multiDrawStarts,ne=it._multiDrawCounts,Wn=it._multiDrawCount,$e=Kt?w.get(Kt).bytesPerElement:1,ln=de.get(nt).currentProgram.getUniforms();for(let vn=0;vn<Wn;vn++)ln.setValue(X,"_gl_DrawID",vn),rn.render(yn[vn]/$e,ne[vn])}else if(it.isInstancedMesh)rn.renderInstances(re,Nn,it.count);else if(ot.isInstancedBufferGeometry){let yn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ne=Math.min(ot.instanceCount,yn);rn.renderInstances(re,Nn,ne)}else rn.render(re,Nn)};function ps(R,H,ot,nt){Q!==null&&R.isNodeMaterial&&Q.setObject(nt,R),Rt===!0&&_t.setState(R,ot,!1),R.transparent===!0&&R.side===Vn&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,_i(R,H,nt),R.side=Nr,R.needsUpdate=!0,_i(R,H,nt),R.side=Vn):_i(R,H,nt)}this.compile=function(R,H,ot=null){ot===null&&(ot=R),Q!==null&&Q.renderStart(R,H,ot),N=gt.get(ot),N.init(H),A.push(N),ot.traverseVisible(function(it){it.isLight&&it.layers.test(H.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),R!==ot&&R.traverseVisible(function(it){it.isLight&&it.layers.test(H.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),N.setupLights(),Q!==null&&Q.updateLights(N.state.lightsArray),Vt=this.localClippingEnabled,Rt=_t.init(this.clippingPlanes,Vt),Rt===!0&&_t.setGlobalState(this.clippingPlanes,H),Q!==null&&Gt.render(N.state.shadowsArray,ot,H);let nt=new Set;return R.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let te=0;te<Ot.length;te++){let qt=Ot[te];ps(qt,ot,H,it),nt.add(qt)}else ps(Ot,ot,H,it),nt.add(Ot)}),N=A.pop(),Q!==null&&Q.renderEnd(),nt},this.compileAsync=function(R,H,ot=null){let nt=this.compile(R,H,ot);return new Promise(it=>{function Ot(){if(nt.forEach(function(te){let Kt=de.get(te).currentProgram;(Kt===void 0||Kt.isReady())&&nt.delete(te)}),nt.size===0){it(R);return}setTimeout(Ot,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Mn=null;function xi(R){Mn&&Mn(R)}function xr(){Zn.stop()}function Is(){Zn.start()}let Zn=new Xp;Zn.setAnimationLoop(xi),typeof self!="undefined"&&Zn.setContext(self),this.setAnimationLoop=function(R){Mn=R,At.setAnimationLoop(R),R===null?Zn.stop():Zn.start()},At.addEventListener("sessionstart",xr),At.addEventListener("sessionend",Is),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Q!==null&&Q.renderStart(R,H);let ot=At.enabled===!0&&At.isPresenting===!0,nt=q!==null&&(Pt===null||ot)&&q.begin(k,Pt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(H),H=At.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,H,Pt),N=gt.get(R,A.length),N.init(H),N.state.textureUnits=Me.getTextureUnits(),A.push(N),Ut.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?kt.setFromArrayCamera(H):St.setFromProjectionMatrix(Ut,us,H.reversedDepth),Vt=this.localClippingEnabled,Rt=_t.init(this.clippingPlanes,Vt),O=Bt.get(R,M.length),O.init(),M.push(O),this.info.render.frame++,At.enabled===!0&&At.isPresenting===!0){let te=k.xr.getDepthSensingMesh();te!==null&&js(te,H,-1/0,k.sortObjects)}js(R,H,0,k.sortObjects),O.finish(),Q!==null&&Q.updateLights(N.state.lightsArray),k.sortObjects===!0&&O.sort(se,He),qe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,qe&&G.addToRenderList(O,R),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&_t.beginShadows();let it=N.state.shadowsArray;if(Gt.render(it,R,H),Rt===!0&&_t.endShadows(),(nt&&q.hasRenderPass())===!1){let te=O.opaque,qt=O.transmissive;if(N.setupLights(),H.isArrayCamera){let Kt=H.cameras;if(qt.length>0)for(let U=0,ye=Kt.length;U<ye;U++){let Ge=Kt[U];Ps(te,qt,R,Ge)}qe&&G.render(R);for(let U=0,ye=Kt.length;U<ye;U++){let Ge=Kt[U];Ji(O,R,Ge,Ge.viewport)}}else qt.length>0&&Ps(te,qt,R,H),qe&&G.render(R),Ji(O,R,H)}Pt!==null&&st===0&&(Me.updateMultisampleRenderTarget(Pt),Me.updateRenderTargetMipmap(Pt)),nt&&q.end(k),R.isScene===!0&&R.onAfterRender(k,R,H),Wt.resetDefaultState(),lt=-1,wt=null,A.pop(),A.length>0?(N=A[A.length-1],Me.setTextureUnits(N.state.textureUnits),Rt===!0&&_t.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?O=M[M.length-1]:O=null,Q!==null&&Q.renderEnd()};function js(R,H,ot,nt){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){let te=H.isArrayCamera?kt:St;if(!R.frustumCulled||R.intersectsFrustum(te)){nt&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);let qt=Lt.update(R),Kt=R.material;Kt.visible&&O.push(R,qt,Kt,ot,ce.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let te=H.isArrayCamera?kt:St;if(!R.frustumCulled||R.intersectsFrustum(te)){let qt=Lt.update(R),Kt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ce.copy(qt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Kt)){let U=qt.groups;for(let ye=0,Ge=U.length;ye<Ge;ye++){let re=U[ye],we=Kt[re.materialIndex];we&&we.visible&&O.push(R,qt,we,ot,ce.z,re,H)}}else Kt.visible&&O.push(R,qt,Kt,ot,ce.z,null,H)}}}let Ot=R.children;for(let te=0,qt=Ot.length;te<qt;te++)js(Ot[te],H,ot,nt)}function Ji(R,H,ot,nt){let{opaque:it,transmissive:Ot,transparent:te}=R;N.setupLightsView(ot),Rt===!0&&_t.setGlobalState(k.clippingPlanes,ot),nt&&Ft.viewport(xt.copy(nt)),it.length>0&&ee(it,H,ot),Ot.length>0&&ee(Ot,H,ot),te.length>0&&ee(te,H,ot),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Ps(R,H,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){let re=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new Bi(1,1,{generateMipmaps:!0,type:re?ws:Zi,minFilter:fr,samples:Math.max(4,ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:an.workingColorSpace})}let Ot=N.state.transmissionRenderTarget[nt.id],te=nt.viewport||xt;Ot.setSize(te.z*k.transmissionResolutionScale,te.w*k.transmissionResolutionScale);let qt=k.getRenderTarget(),Kt=k.getActiveCubeFace(),U=k.getActiveMipmapLevel();k.setRenderTarget(Ot),k.getClearColor(pt),Zt=k.getClearAlpha(),Zt<1&&k.setClearColor(16777215,.5),k.clear(),qe&&G.render(ot);let ye=k.toneMapping;k.toneMapping=Ys;let Ge=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),Rt===!0&&_t.setGlobalState(k.clippingPlanes,nt),ee(R,ot,nt),Me.updateMultisampleRenderTarget(Ot),Me.updateRenderTargetMipmap(Ot),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let we=0,Nn=H.length;we<Nn;we++){let Ye=H[we],{object:rn,geometry:yn,material:ne,group:Wn}=Ye;if(ne.side===Vn&&rn.layers.test(nt.layers)){let $e=ne.side;ne.side=si,ne.needsUpdate=!0,ga(rn,ot,nt,yn,ne,Wn),ne.side=$e,ne.needsUpdate=!0,re=!0}}re===!0&&(Me.updateMultisampleRenderTarget(Ot),Me.updateRenderTargetMipmap(Ot))}k.setRenderTarget(qt,Kt,U),k.setClearColor(pt,Zt),Ge!==void 0&&(nt.viewport=Ge),k.toneMapping=ye}function ee(R,H,ot){let nt=H.isScene===!0?H.overrideMaterial:null;for(let it=0,Ot=R.length;it<Ot;it++){let te=R[it],{object:qt,geometry:Kt,group:U}=te,ye=te.material;ye.allowOverride===!0&&nt!==null&&(ye=nt),qt.layers.test(ot.layers)&&ga(qt,H,ot,Kt,ye,U)}}function ga(R,H,ot,nt,it,Ot){Q!==null&&it.isNodeMaterial&&Q.setObject(R,it),R.onBeforeRender(k,H,ot,nt,it,Ot),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),it.onBeforeRender(k,H,ot,nt,R,Ot),it.transparent===!0&&it.side===Vn&&it.forceSinglePass===!1?(it.side=si,it.needsUpdate=!0,k.renderBufferDirect(ot,H,nt,it,R,Ot),it.side=Nr,it.needsUpdate=!0,k.renderBufferDirect(ot,H,nt,it,R,Ot),it.side=Vn):k.renderBufferDirect(ot,H,nt,it,R,Ot),R.onAfterRender(k,H,ot,nt,it,Ot)}function _r(R){let H=0;for(let ot of R)ot.texture!==null&&H++;return H}function _i(R,H,ot){H.isScene!==!0&&(H=Xe);let nt=de.get(R),it=N.state.lights,Ot=N.state.shadowsArray,te=it.state.version,qt=yt.getParameters(R,it.state,Ot,H,ot,N.state.lightProbeGridArray),Kt=yt.getProgramCacheKey(qt),U=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,nt.fog=H.fog;let ye=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=F.get(R.envMap||nt.environment,ye),nt.envMapRotation=nt.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,U===void 0&&(R.addEventListener("dispose",sn),U=new Map,nt.programs=U,nt.programVariants=new Map);let Ge=U.get(Kt);if(Ge!==void 0){if(nt.currentProgram===Ge&&nt.lightsStateVersion===te)return yr(R,qt),Ge}else qt.uniforms=yt.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,ot,qt),R.onBeforeCompile(qt,k),Ge=yt.acquireProgram(qt,Kt),U.set(Kt,Ge),nt.uniforms=qt.uniforms;let re=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(re.clippingPlanes=_t.uniform),yr(R,qt),nt.needsLights=ls(R),nt.lightsStateVersion=te,nt.needsLights&&(re.ambientLightColor.value=it.state.ambient,re.lightProbe.value=it.state.probe,re.sunLights.value=it.state.sun,re.sunLightShadows.value=it.state.sunShadow,re.directionalLights.value=it.state.directional,re.directionalLightShadows.value=it.state.directionalShadow,re.spotLights.value=it.state.spot,re.spotLightShadows.value=it.state.spotShadow,re.rectAreaLights.value=it.state.rectArea,re.ltc_1.value=it.state.rectAreaLTC1,re.ltc_2.value=it.state.rectAreaLTC2,re.pointLights.value=it.state.point,re.pointLightShadows.value=it.state.pointShadow,re.hemisphereLights.value=it.state.hemi,re.sunShadowMatrix.value=it.state.sunShadowMatrix,re.sunShadowCascade.value=it.state.sunShadowCascade,re.directionalShadowMatrix.value=it.state.directionalShadowMatrix,re.spotLightMatrix.value=it.state.spotLightMatrix,re.spotLightMap.value=it.state.spotLightMap,re.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.numLightProbeGrids=_r(N.state.lightProbeGridArray),nt.currentProgram=Ge,nt.uniformsList=null,Ge}function Qs(R,H,ot,nt,it){let Ot=de.get(R),te=Ot.currentProgram.id+","+nt+","+it,qt=Ot.programVariants.get(te);return qt===void 0?(qt=_i(R,H,ot),Ot.programVariants.set(te,qt)):(Ot.currentProgram=qt,Ot.uniformsList=null,Ot.outputColorSpace=nt,Ot.toneMapping=it),qt}function Wi(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function yr(R,H){let ot=de.get(R);ot.outputColorSpace=H.outputColorSpace,ot.batching=H.batching,ot.batchingColor=H.batchingColor,ot.instancing=H.instancing,ot.instancingColor=H.instancingColor,ot.instancingMorph=H.instancingMorph,ot.skinning=H.skinning,ot.morphTargets=H.morphTargets,ot.morphNormals=H.morphNormals,ot.morphColors=H.morphColors,ot.morphTargetsCount=H.morphTargetsCount,ot.numClippingPlanes=H.numClippingPlanes,ot.numIntersection=H.numClipIntersection,ot.vertexAlphas=H.vertexAlphas,ot.vertexTangents=H.vertexTangents,ot.toneMapping=H.toneMapping}function Hn(R,H,ot,nt,it){H.isScene!==!0&&(H=Xe),Me.resetTextureUnits();let Ot=H.fog,te=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?H.environment:null,qt=Pt===null?k.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:an.workingColorSpace,Kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,U=F.get(nt.envMap||te,Kt),ye=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Ge=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),re=!!ot.morphAttributes.position,we=!!ot.morphAttributes.normal,Nn=!!ot.morphAttributes.color,Ye=Ys;nt.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Ye=k.toneMapping);let rn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,yn=rn!==void 0?rn.length:0,ne=de.get(nt),Wn=N.state.lights;if(Rt===!0&&(Vt===!0||R!==wt)){let An=R===wt&&nt.id===lt;_t.setState(nt,R,An)}let $e=!1,ln=!1;nt.version===ne.__version?ne.needsLights&&ne.lightsStateVersion!==Wn.state.version||it.isBatchedMesh&&ne.batching===!1||!it.isBatchedMesh&&ne.batching===!0||it.isBatchedMesh&&ne.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&ne.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&ne.instancing===!1||!it.isInstancedMesh&&ne.instancing===!0||it.isSkinnedMesh&&ne.skinning===!1||!it.isSkinnedMesh&&ne.skinning===!0||it.isInstancedMesh&&ne.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ne.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&ne.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&ne.instancingMorph===!1&&it.morphTexture!==null||ne.envMap!==U||nt.fog===!0&&ne.fog!==Ot||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==_t.numPlanes||ne.numIntersection!==_t.numIntersection)||ne.vertexAlphas!==ye||ne.vertexTangents!==Ge||ne.morphTargets!==re||ne.morphNormals!==we||ne.morphColors!==Nn||ne.morphTargetsCount!==yn||ne.numLightProbeGrids!==_r(N.state.lightProbeGridArray)?$e=!0:(ne.outputColorSpace!==qt||ne.toneMapping!==Ye)&&(ln=!0):($e=!0,ne.__version=nt.version);let vn=ne.currentProgram;($e===!0||ln===!0)&&(vn=ln===!0?Qs(nt,H,it,qt,Ye):_i(nt,H,it),Q&&nt.isNodeMaterial&&Q.onUpdateProgram(nt,vn,ne));let Pi=!1,Xn=!1,yi=!1,fe=vn.getUniforms(),Un=ne.uniforms;if(Ft.useProgram(vn.program)&&(Pi=!0,Xn=!0,yi=!0),nt.id!==lt&&(lt=nt.id,Xn=!0),Pi||wt!==R){Ft.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),fe.setValue(X,"projectionMatrix",R.projectionMatrix),fe.setValue(X,"viewMatrix",R.matrixWorldInverse);let Sn=fe.map.cameraPosition;Sn!==void 0&&Sn.setValue(X,Ne.setFromMatrixPosition(R.matrixWorld)),ke.logarithmicDepthBuffer&&fe.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&fe.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),wt!==R&&(wt=R,Xn=!0,yi=!0)}if(ne.needsLights&&(Wn.state.sunShadowMap.length>0&&fe.setValue(X,"sunShadowMap",Wn.state.sunShadowMap,Me),Wn.state.directionalShadowMap.length>0&&fe.setValue(X,"directionalShadowMap",Wn.state.directionalShadowMap,Me),Wn.state.spotShadowMap.length>0&&fe.setValue(X,"spotShadowMap",Wn.state.spotShadowMap,Me),Wn.state.pointShadowMap.length>0&&fe.setValue(X,"pointShadowMap",Wn.state.pointShadowMap,Me)),it.isSkinnedMesh){fe.setOptional(X,it,"bindMatrix"),fe.setOptional(X,it,"bindMatrixInverse");let An=it.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),fe.setValue(X,"boneTexture",An.boneTexture,Me))}it.isBatchedMesh&&(fe.setOptional(X,it,"batchingTexture"),fe.setValue(X,"batchingTexture",it._matricesTexture,Me),fe.setOptional(X,it,"batchingIdTexture"),fe.setValue(X,"batchingIdTexture",it._indirectTexture,Me),fe.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&fe.setValue(X,"batchingColorTexture",it._colorsTexture,Me));let li=ot.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&Y.update(it,ot,vn),(Xn||ne.receiveShadow!==it.receiveShadow)&&(ne.receiveShadow=it.receiveShadow,fe.setValue(X,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&H.environment!==null&&(Un.envMapIntensity.value=H.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=w1()),Xn){if(fe.setValue(X,"toneMappingExposure",k.toneMappingExposure),ne.needsLights&&Yn(Un,yi),Ot&&nt.fog===!0&&Ct.refreshFogUniforms(Un,Ot),Ct.refreshMaterialUniforms(Un,nt,Jt,xe,N.state.transmissionRenderTarget[R.id]),ne.needsLights&&ne.numLightProbeGrids>0){let An=E,Sn=0;for(let mn of N.state.lightProbeGridArray)mn.texture!==null&&(An.textures[Sn]=mn.texture,An.min[Sn]=mn.boundingBox.min,An.max[Sn]=mn.boundingBox.max,An.resolution[Sn]=mn.resolution,Sn++);for(let mn in An)An[mn].length=Sn;Un.probesSH.value=An.textures,Un.probesMin.value=An.min,Un.probesMax.value=An.max,Un.probesResolution.value=An.resolution}so.upload(X,Wi(ne),Un,Me)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(so.upload(X,Wi(ne),Un,Me),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&fe.setValue(X,"center",it.center),fe.setValue(X,"modelViewMatrix",it.modelViewMatrix),fe.setValue(X,"normalMatrix",it.normalMatrix),fe.setValue(X,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let An=nt.uniformsGroups;for(let Sn=0,mn=An.length;Sn<mn;Sn++){let Si=An[Sn];ue.update(Si,vn),ue.bind(Si,vn)}}return vn}function Yn(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function ls(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return Pt},this.setRenderTargetTextures=function(R,H,ot){let nt=de.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=H,de.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let ot=de.get(R);ot.__webglFramebuffer=H,ot.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ot=0){Pt=R,ct=H,st=ot;let nt=null,it=!1,Ot=!1;if(R){let qt=de.get(R);if(qt.__useDefaultFramebuffer!==void 0){Ft.bindFramebuffer(X.FRAMEBUFFER,qt.__webglFramebuffer),xt.copy(R.viewport),Ht.copy(R.scissor),le=R.scissorTest,Ft.viewport(xt),Ft.scissor(Ht),Ft.setScissorTest(le),lt=-1;return}else if(qt.__webglFramebuffer===void 0)Me.setupRenderTarget(R);else if(qt.__hasExternalTextures)Me.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ye=R.depthTexture;if(qt.__boundDepthTexture!==ye){if(ye!==null&&de.has(ye)&&(R.width!==ye.image.width||R.height!==ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(R)}}let Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ot=!0);let U=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(U[H])?nt=U[H][ot]:nt=U[H],it=!0):R.samples>0&&Me.useMultisampledRTT(R)===!1?nt=de.get(R).__webglMultisampledFramebuffer:Array.isArray(U)?nt=U[ot]:nt=U,xt.copy(R.viewport),Ht.copy(R.scissor),le=R.scissorTest}else xt.copy(_e).multiplyScalar(Jt).floor(),Ht.copy(ze).multiplyScalar(Jt).floor(),le=We;if(ot!==0&&(nt=ut),Ft.bindFramebuffer(X.FRAMEBUFFER,nt)&&Ft.drawBuffers(R,nt),Ft.viewport(xt),Ft.scissor(Ht),Ft.setScissorTest(le),it){let qt=de.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,qt.__webglTexture,ot)}else if(Ot){let qt=H;for(let Kt=0;Kt<R.textures.length;Kt++){let U=de.get(R.textures[Kt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Kt,U.__webglTexture,ot,qt)}}else if(R!==null&&ot!==0){let qt=de.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,ot)}lt=-1};function J(R){let H=de.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=ke.textureFormatReadable(R.format),H.__typeReadable=ke.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ot,nt,it,Ot,te,qt=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&te!==void 0&&(Kt=Kt[te],Array.isArray(Kt)&&(Kt=Kt[0])),Kt){Ft.bindFramebuffer(X.FRAMEBUFFER,Kt);try{let U=R.textures[qt],ye=U.format,Ge=U.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qt);let re=J(U);if(re.__formatReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(re.__typeReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-nt&&ot>=0&&ot<=R.height-it&&X.readPixels(H,ot,nt,it,Dt.convert(ye),Dt.convert(Ge),Ot)}finally{let U=Pt!==null?de.get(Pt).__webglFramebuffer:null;Ft.bindFramebuffer(X.FRAMEBUFFER,U)}}},this.readRenderTargetPixelsAsync=async function(R,H,ot,nt,it,Ot,te,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&te!==void 0&&(Kt=Kt[te],Array.isArray(Kt)&&(Kt=Kt[0])),Kt)if(H>=0&&H<=R.width-nt&&ot>=0&&ot<=R.height-it){Ft.bindFramebuffer(X.FRAMEBUFFER,Kt);let U=R.textures[qt],ye=U.format,Ge=U.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qt);let re=J(U);if(re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,we),X.bufferData(X.PIXEL_PACK_BUFFER,Ot.byteLength,X.STREAM_READ),X.readPixels(H,ot,nt,it,Dt.convert(ye),Dt.convert(Ge),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Nn=Pt!==null?de.get(Pt).__webglFramebuffer:null;Ft.bindFramebuffer(X.FRAMEBUFFER,Nn);let Ye=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await hp(X,Ye,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,we),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ot),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(we),X.deleteSync(Ye),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ot=0){let nt=Math.pow(2,-ot),it=Math.floor(R.image.width*nt),Ot=Math.floor(R.image.height*nt),te=H!==null?H.x:0,qt=H!==null?H.y:0;Me.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,te,qt,it,Ot),Ft.unbindTexture()},this.copyTextureToTexture=function(R,H,ot=null,nt=null,it=0,Ot=0){let te,qt,Kt,U,ye,Ge,re,we,Nn,Ye=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(ot!==null)te=ot.max.x-ot.min.x,qt=ot.max.y-ot.min.y,Kt=ot.isBox3?ot.max.z-ot.min.z:1,U=ot.min.x,ye=ot.min.y,Ge=ot.isBox3?ot.min.z:0;else{let fe=Math.pow(2,-it);te=Math.floor(Ye.width*fe),qt=Math.floor(Ye.height*fe),R.isDataArrayTexture?Kt=Ye.depth:R.isData3DTexture?Kt=Math.floor(Ye.depth*fe):Kt=1,U=0,ye=0,Ge=0}nt!==null?(re=nt.x,we=nt.y,Nn=nt.z):(re=0,we=0,Nn=0);let rn=Dt.convert(H.format),yn=Dt.convert(H.type),ne;H.isData3DTexture?(Me.setTexture3D(H,0),ne=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Me.setTexture2DArray(H,0),ne=X.TEXTURE_2D_ARRAY):(Me.setTexture2D(H,0),ne=X.TEXTURE_2D),Ft.activeTexture(X.TEXTURE0),Ft.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),Ft.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Ft.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let Wn=Ft.getParameter(X.UNPACK_ROW_LENGTH),$e=Ft.getParameter(X.UNPACK_IMAGE_HEIGHT),ln=Ft.getParameter(X.UNPACK_SKIP_PIXELS),vn=Ft.getParameter(X.UNPACK_SKIP_ROWS),Pi=Ft.getParameter(X.UNPACK_SKIP_IMAGES);Ft.pixelStorei(X.UNPACK_ROW_LENGTH,Ye.width),Ft.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ye.height),Ft.pixelStorei(X.UNPACK_SKIP_PIXELS,U),Ft.pixelStorei(X.UNPACK_SKIP_ROWS,ye),Ft.pixelStorei(X.UNPACK_SKIP_IMAGES,Ge);let Xn=R.isDataArrayTexture||R.isData3DTexture,yi=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let fe=de.get(R),Un=de.get(H),li=de.get(fe.__renderTarget),An=de.get(Un.__renderTarget);Ft.bindFramebuffer(X.READ_FRAMEBUFFER,li.__webglFramebuffer),Ft.bindFramebuffer(X.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Sn=0;Sn<Kt;Sn++)Xn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,de.get(R).__webglTexture,it,Ge+Sn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,de.get(H).__webglTexture,Ot,Nn+Sn)),X.blitFramebuffer(U,ye,U+te,ye+qt,re,we,re+te,we+qt,X.DEPTH_BUFFER_BIT,X.NEAREST);Ft.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||R.isRenderTargetTexture||de.has(R)){let fe=de.get(R),Un=de.get(H);Ft.bindFramebuffer(X.READ_FRAMEBUFFER,V),Ft.bindFramebuffer(X.DRAW_FRAMEBUFFER,at);for(let li=0;li<Kt;li++)Xn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fe.__webglTexture,it,Ge+li):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,fe.__webglTexture,it),yi?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Un.__webglTexture,Ot,Nn+li):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Un.__webglTexture,Ot),it!==0?X.blitFramebuffer(U,ye,U+te,ye+qt,re,we,re+te,we+qt,X.COLOR_BUFFER_BIT,X.NEAREST):yi?X.copyTexSubImage3D(ne,Ot,re,we,Nn+li,U,ye,te,qt):X.copyTexSubImage2D(ne,Ot,re,we,U,ye,te,qt);Ft.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yi?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ne,Ot,re,we,Nn,te,qt,Kt,rn,yn,Ye.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(ne,Ot,re,we,Nn,te,qt,Kt,rn,Ye.data):X.texSubImage3D(ne,Ot,re,we,Nn,te,qt,Kt,rn,yn,Ye):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ot,re,we,te,qt,rn,yn,Ye.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ot,re,we,Ye.width,Ye.height,rn,Ye.data):X.texSubImage2D(X.TEXTURE_2D,Ot,re,we,te,qt,rn,yn,Ye);Ft.pixelStorei(X.UNPACK_ROW_LENGTH,Wn),Ft.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$e),Ft.pixelStorei(X.UNPACK_SKIP_PIXELS,ln),Ft.pixelStorei(X.UNPACK_SKIP_ROWS,vn),Ft.pixelStorei(X.UNPACK_SKIP_IMAGES,Pi),Ot===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&X.generateMipmap(ne),Ft.unbindTexture()},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&Me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Me.setTextureCube(R,0):R.isData3DTexture?Me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Me.setTexture2DArray(R,0):Me.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){ct=0,st=0,Pt=null,Ft.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=an._getDrawingBufferColorSpace(t),e.unpackColorSpace=an._getUnpackColorSpace()}};var pa={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},oo=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function im(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Dn;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let p=i[u],d=0,f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(e){let u=0,p=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(let u in r){let p=nm(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){let f=[];for(let I=0;I<a[u].length;++I)f.push(a[u][I][d]);let g=nm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function nm(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new is(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let p=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){let I=u.getComponent(d,g);o.setComponent(d+p,g,I)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var $n="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",sm={},jt=(i,t)=>t?new gn(Object.assign({color:i},t)):sm[i]||(sm[i]=new gn({color:i})),xn=(i,t)=>new Je(Object.assign({color:i},t)),rm={},T1=i=>rm[i]||(rm[i]=new gn({color:i,flatShading:!0}));function be(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ea(n);return s.colorSpace=Qn,s.anisotropy=4,s}function Br(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ma=be(128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)});function dt(i,t,e,n,s,r,a,o,l){let c=new mt(new bn(t,e,n),typeof s=="string"?jt(s):s);return c.position.set(r,a,o),l&&(c.rotation.y=l),i.add(c),c}function oe(i,t,e,n,s,r,a,o,l){let c=new mt(new Ri(t,e,n,l||16),typeof s=="string"?jt(s):s);return c.position.set(r,a,o),i.add(c),c}function Le(i,t,e,n,s,r,a,o,l,c){let u=new mt(new mi(t,c||16,c?c*.7|0:12),typeof e=="string"?jt(e):e);return u.position.set(n,s,r),u.scale.set(a||1,o||1,l||1),i.add(u),u}function fs(i,t,e,n,s,r,a){let o=new mt(new vs(t,1),T1(e));return o.position.set(n,s,r),a&&o.scale.set(a[0],a[1],a[2]),i.add(o),o}function zr(i,t,e,n,s,r,a){let o=new di(new ii({map:ma,blending:bs,transparent:!0,depthWrite:!1,opacity:r}));return a&&o.material.color.set(a),o.scale.set(s,s,1),o.position.set(t,e,n),i.add(o),i.userData.glows=(i.userData.glows||[]).concat(o),o}function lo(i,t,e,n,s,r,a,o,l){let c=new mt(new Ke(t,e),new Je({map:n,transparent:!0,side:l?Vn:void 0,alphaTest:.05}));return c.position.set(s,r,a),o&&(c.rotation.y=o),i.add(c),c}function xl(i,t,e,n,s,r,a){let o=new mt(new Qo(t.map(l=>new Nt(l[0],l[1])),a||20),typeof e=="string"?jt(e):e);return o.position.set(n,s,r),i.add(o),o}var Js="#a8703f",Mi="#6b3f1f",co="#d4a56a",bi="#3a2214",E1="#d23a28",A1="#f3e2bd",am={};function Ef(i,t,e,n,s,r){let a=i+t+e+n+s;return am[a]||(am[a]=be(n,s,o=>{o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";let l=[...i];o.font=`900 ${r}px ${$n}`,s>n?l.forEach((c,u)=>o.fillText(c,n/2,s/(l.length+1)*(u+1))):o.fillText(i,n/2,s/2+2,n-10)}))}var lm=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],_l=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.81,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.39,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.07,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],cm=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];_l.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.43,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.52,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.77,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var om={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};_l.forEach(i=>{!i.hc&&om[i.k]&&(i.hc=om[i.k])});var Ue={};_l.forEach(i=>{i.L=i.L||"main",i.solid===void 0&&(i.solid=i.L==="main"?1:0),Ue[i.k]=i});var Af=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],Rf=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],ae={};ae.table=i=>{dt(i,1.9,.08,.9,Js,0,.74,0),dt(i,1.84,.03,.84,co,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])dt(i,.08,.72,.08,Mi,t,.36,e);dt(i,1.6,.06,.04,Mi,0,.55,-.36),dt(i,1.6,.06,.04,Mi,0,.55,.36)};ae.chabu=i=>{oe(i,.46,.46,.06,Js,0,.34,0,28),oe(i,.44,.44,.02,co,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;dt(i,.07,.32,.07,Mi,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};ae.counter=i=>{dt(i,1.96,1,.8,Mi,0,.5,0),dt(i,2.04,.08,.96,co,0,1.03,.04),dt(i,1.9,.12,.04,Js,0,.14,.41);for(let t=-2;t<=2;t++)dt(i,.04,.8,.02,"#5a3216",t*.38,.52,.405)};ae.chair=i=>{dt(i,.48,.06,.48,Js,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])dt(i,.05,.46,.05,Mi,t,.23,e);dt(i,.48,.5,.05,Js,0,.74,-.2),dt(i,.4,.06,.03,co,0,.86,-.18)};ae.stool=i=>{oe(i,.22,.2,.07,"#c23a2a",0,.76,0,18),oe(i,.03,.03,.72,"#3a3a40",0,.38,0,8),oe(i,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new mt(new zi(.13,.015,6,18),jt("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,i.add(t)};ae.zabu=i=>{let t=dt(i,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new bn(.62,.1,.62,2,1,2),Le(i,.05,"#e9c34a",0,.12,0)};ae.bench=i=>{dt(i,1.9,.07,.42,Js,0,.44,0);for(let t of[-.8,.8])dt(i,.07,.42,.36,Mi,t,.21,0);dt(i,1.6,.05,.04,Mi,0,.2,0)};ae.register=i=>{dt(i,.9,.95,.7,Mi,0,.475,0),dt(i,.96,.06,.78,co,0,.98,0),dt(i,.5,.22,.36,"#2b2b33",0,1.12,-.05),dt(i,.42,.1,.3,"#3c3c46",0,1.26,-.12),dt(i,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=xn("#9fe0b6"),Le(i,.07,"#e9b830",.3,1.06,.2),Le(i,.05,"#e9b830",.22,1.04,.26)};ae.lantern=i=>{oe(i,.025,.025,1.7,bi,0,.85,0,6),dt(i,.5,.04,.04,bi,.2,1.68,0),oe(i,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new ve;t.position.set(.38,1.3,0),i.add(t);let e=Le(t,.22,xn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,oe(t,.14,.14,.06,bi,0,.3,0,12),oe(t,.14,.14,.06,bi,0,-.3,0,12),lo(t,.2,.34,Ef("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),oe(t,.01,.01,.2,bi,0,.42,0,4),zr(t,0,0,.1,1.8,.55),i.userData.swing=t};ae.andon=i=>{for(let e of[-.17,.17])for(let n of[-.17,.17])dt(i,.04,.9,.04,bi,e,.45,n);let t=dt(i,.32,.5,.32,xn("#fff1c8"),0,.55,0);t.userData.lit=1,dt(i,.4,.04,.4,bi,0,.82,0),dt(i,.4,.04,.4,bi,0,.29,0);for(let e of[-.06,.06])dt(i,.005,.48,.33,bi,e,.55,0);zr(i,0,.55,0,2.2,.6)};ae.stonel=i=>{let t="#9a9590";dt(i,.5,.12,.5,t,0,.06,0),oe(i,.1,.13,.5,t,0,.37,0,8),dt(i,.42,.1,.42,t,0,.66,0);let e=dt(i,.3,.28,.3,xn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])dt(i,.06,.3,.06,t,s[0],.85,s[1]);let n=new mt(new pi(.45,.3,4),jt(t));n.rotation.y=Math.PI/4,n.position.y=1.14,i.add(n),Le(i,.07,t,0,1.33,0),zr(i,0,.85,0,1.6,.55)};ae.chochin=i=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let n=0;n<5;n++){let s=-.8+n*.4,r=2.25-Math.sin(n/4*Math.PI)*.25,a=Le(i,.12,xn(t[n]),s,r,.18,1,1.25,1,12);a.userData.lit=1,zr(i,s,r,.26,.8,.35)}let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let n=0;n<8;n++){let[s,r]=e[n],[a,o]=e[n+1],l=dt(i,Math.hypot(a-s,o-r),.015,.015,bi,(s+a)/2,(r+o)/2,.18);l.rotation.z=Math.atan2(o-r,a-s)}};ae.tanuki=i=>{let t="#8a6a4a",e="#e8d8b8";Le(i,.3,t,0,.38,0,1,1.05,.95),Le(i,.2,e,0,.36,.16,1,1.1,.5),Le(i,.22,t,0,.82,.02);for(let r of[-.13,.13])Le(i,.06,t,r,1,0),Le(i,.055,bi,r*.7,.85,.19,1,.8,.5),Le(i,.02,"#fff",r*.7+.01,.86,.21);Le(i,.045,bi,0,.78,.22),dt(i,.34,.06,.3,"#5a4a3a",0,1.03,0),oe(i,.16,.2,.04,"#5a4a3a",0,1,0,14);let n=oe(i,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);n.rotation.z=-.3;let s=dt(i,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Le(i,.15,t,-.2,.12,.12,1,.6,1),Le(i,.15,t,.2,.12,.12,1,.6,1),Le(i,.12,t,.1,.25,-.3,1,.7,1.4)};ae.barrel=i=>{xl(i,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new mt(new zi(.34,.025,6,22),jt("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,i.add(e)}lo(i,.36,.36,Ef("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),oe(i,.3,.3,.02,co,0,.91,0,22)};ae.crates=i=>{let t=(e,n,s)=>{let r=new ve;r.position.y=e,r.rotation.y=n,i.add(r),dt(r,.6,.32,.44,s,0,.16,0);for(let a=0;a<3;a++)for(let o=0;o<2;o++)oe(r,.06,.06,.36,"#7a4a1a",-.18+a*.18,.3,-.1+o*.2,8),oe(r,.025,.03,.1,"#f2e6c8",-.18+a*.18,.52,-.1+o*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};ae.byobu=i=>{let t=be(256,128,(e,n,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,n,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*n,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let n=new ve;n.position.set(-.72+e*.48,0,e%2?.08:-.08),n.rotation.y=e%2?.3:-.3,i.add(n),dt(n,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new mt(new Ke(.42,1.4),new Je({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),n.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,n.add(r)}};ae.shelf=i=>{for(let n of[-.925,.925])dt(i,.05,1.8,.42,Mi,n,.9,-.1);dt(i,1.9,.05,.42,Mi,0,1.775,-.1),dt(i,1.8,1.7,.02,"#2a1408",0,.9,-.3),dt(i,1.8,.06,.38,Js,0,.03,-.1);for(let n of[.35,.8,1.25,1.65])dt(i,1.8,.04,.38,Js,0,n,-.1);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let n of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],a=.26+e%3*.04;oe(i,.055,.065,a,r,-.72+s*.29,n+a/2,-.06,10),oe(i,.02,.03,.09,r,-.72+s*.29,n+a+.04,-.06,6),e%2&&dt(i,.1,.08,.01,A1,-.72+s*.29,n+a*.5,.012)}};ae.hibachi=i=>{xl(i,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),oe(i,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let n=fs(i,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);n.material=xn("#ff7a2a"),n.userData.lit=1}oe(i,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=oe(i,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,zr(i,0,.55,0,1.4,.6,"#ff8a3a")};ae.tank=i=>{dt(i,.7,.55,.5,Mi,0,.275,0);let t=dt(i,.68,.5,.48,jt("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,dt(i,.62,.4,.42,xn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,dt(i,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let n=new ve;n.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),i.add(n),Le(n,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new mt(new pi(.04,.07,6),jt("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,n.add(s),i.userData.fish=(i.userData.fish||[]).concat(n)}fs(i,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),fs(i,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};ae.jukebox=i=>{dt(i,.7,.7,.5,Mi,0,.35,0),dt(i,.74,.05,.54,Js,0,.72,0),oe(i,.24,.24,.02,"#141414",-.05,.76,.02,28),oe(i,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=dt(i,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new mt(new pi(.22,.4,18,1,!0),jt("#d8a83a",{side:Vn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),i.add(e),oe(i,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),dt(i,.5,.3,.02,"#2a1408",0,.35,.26),i.userData.spin=i.children[2]};ae.pine=i=>{oe(i,.2,.16,.14,"#3a5a8a",0,.07,0,6),oe(i,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=oe(i,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,fs(i,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),fs(i,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),fs(i,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};ae.bamboo=i=>{oe(i,.22,.18,.32,"#e8e0d0",0,.16,0,18),oe(i,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,n=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;oe(i,.025,.025,s,"#6a9a3a",e,.3+s/2,n,8);for(let r=1;r<4;r++)oe(i,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,n,8);for(let r=0;r<3;r++){let a=new mt(new Ke(.32,.06),new gn({color:"#5a9a3a",side:Vn}));a.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),n+.12*Math.sin(r*2+t)),a.rotation.set(-.3,r*2+t,-.4),i.add(a)}}};ae.sakura=i=>{oe(i,.26,.22,.36,"#2a3a5a",0,.18,0,8),oe(i,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=oe(i,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=oe(i,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let n=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,a,o],l)=>fs(i,o,n[l%3],s,r,a,[1,.75,1])),i.userData.petals=1};ae.ajisai=i=>{oe(i,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)fs(i,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let n=e*1.25;fs(i,.12,t[e%4],Math.cos(n)*.12,.5+e%2*.08,Math.sin(n)*.12)}};ae.scroll=i=>{let t=be(96,256,(e,n,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,n,s),e.fillStyle="#c8b890",e.fillRect(0,0,n,30),e.fillRect(0,s-30,n,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${$n}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,a)=>e.fillText(r,n/2,76+a*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});dt(i,.5,.04,.04,bi,0,2.25,.04),dt(i,.5,.04,.04,bi,0,1.02,.04),lo(i,.42,1.2,t,0,1.63,.03)};ae.menu=i=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let n=Ef(t[e],"#e9d3a4","#2a1408",64,256,36);dt(i,.22,.82,.03,Mi,-.7+e*.28,1.75,.015),lo(i,.18,.76,n,-.7+e*.28,1.75,.035)}dt(i,1.8,.06,.05,bi,0,2.2,.03)};ae.clock=i=>{let t=be(128,128,a=>{a.fillStyle="#f8f0dc",a.beginPath(),a.arc(64,64,60,0,7),a.fill(),a.fillStyle="#2a1408",a.font=`700 18px ${$n}`,a.textAlign="center",a.textBaseline="middle";for(let o=1;o<=12;o++){let l=o/12*Math.PI*2-Math.PI/2;a.fillText(String(o),64+Math.cos(l)*46,64+Math.sin(l)*46)}});dt(i,.5,.7,.1,Mi,0,1.95,.05),oe(i,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=lo(i,.4,.4,t,0,2.05,.105),n=dt(i,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=dt(i,.01,.17,.01,"#1a1a1a",0,2.1,.115);i.userData.hands=[n,s],i.userData.handY=2.05;let r=new ve;r.position.set(0,1.75,.07),i.add(r),dt(r,.01,.2,.01,"#c8a040",0,-.1,0),i.userData.swing=r};ae.mado=i=>{let t=be(256,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1a1a40"),o.addColorStop(1,"#5a3a6a"),s.fillStyle=o,s.fillRect(0,0,r,a),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*a*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new mt(new ti(.62,32),new Je({map:t}));e.position.set(0,1.6,.03),i.add(e);let n=new mt(new zi(.64,.06,8,32),jt(Mi));n.position.set(0,1.6,.04),i.add(n);for(let s of[-.2,.2])dt(i,.02,1.2,.02,bi,s,1.6,.05);dt(i,1.2,.02,.02,bi,0,1.6,.05),zr(i,0,1.6,.15,1.6,.25,"#b8c8ff")};ae.fuji=i=>{let t=be(256,160,(e,n,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,n,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,n,20)});dt(i,1.6,1,.05,"#2a1408",0,1.7,.025),lo(i,1.5,.9,t,0,1.7,.055)};ae.maneki=i=>{let t="#f8f4ec";Le(i,.12,t,0,.13,0,1,1.1,.9),Le(i,.1,t,0,.32,.01);for(let n of[-.06,.06]){let s=new mt(new pi(.035,.06,4),jt(t));s.position.set(n,.42,0),i.add(s),Le(i,.012,"#1a1a1a",n*.6,.34,.09)}Le(i,.02,"#f08a9a",0,.31,.1),dt(i,.16,.025,.05,E1,0,.23,.06),Le(i,.02,"#e9b830",0,.21,.1);let e=new ve;e.position.set(.09,.3,.02),i.add(e),Le(e,.035,t,0,.07,0,1,1.6,1),i.userData.wave=e,Le(i,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};ae.daruma=i=>{Le(i,.14,"#d23a28",0,.15,0,1,1.1,1),Le(i,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Le(i,.016,"#1a1a1a",t,.2,.125);dt(i,.08,.012,.01,"#1a1a1a",0,.155,.13)};ae.beer=i=>{oe(i,.07,.065,.2,jt("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),oe(i,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new mt(new zi(.05,.012,6,12,Math.PI),jt("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,i.add(t)};ae.sake=i=>{dt(i,.34,.02,.2,Mi,0,.01,0),xl(i,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])oe(i,.03,.025,.04,"#f0ece0",t,.04,0,10)};ae.yakitori=i=>{oe(i,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new ve;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,i.add(e),dt(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let n=0;n<4;n++)fs(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+n*.05,.005,0,[1.1,.9,1])}};ae.sushi=i=>{dt(i,.34,.03,.16,Js,0,.03,0);for(let t=0;t<4;t++)dt(i,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),dt(i,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};ae.ramen=i=>{xl(i,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),oe(i,.12,.12,.01,"#d89a4a",0,.09,0,20),Le(i,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),dt(i,.05,.01,.04,"#8a4a2a",.04,.1,-.02),dt(i,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=dt(i,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};ae.edamame=i=>{oe(i,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)fs(i,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};ae.vase=i=>{xl(i,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),oe(i,.006,.006,.25,"#4a7a3a",0,.36,0,4),Le(i,.035,"#f0e0e8",0,.5,0),Le(i,.03,"#e898b0",.02,.48,.02)};ae.tatami=i=>{let t=be(256,256,(n,s,r)=>{n.fillStyle="#c8c47a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=3)n.fillStyle=a%6?"#bcb86e":"#d2ce86",n.fillRect(0,a,s,1);n.fillStyle="#2a3a2a",n.fillRect(0,0,s,10),n.fillRect(0,r-10,s,10),n.fillRect(0,124,s,8)}),e=new mt(new bn(1.96,.04,1.96),[jt("#2a3a2a"),jt("#2a3a2a"),new gn({map:t}),jt("#2a3a2a"),jt("#2a3a2a"),jt("#2a3a2a")]);e.position.y=.02,i.add(e)};ae.rug=i=>{let t=be(256,256,(n,s,r)=>{n.fillStyle="#23315c",n.fillRect(0,0,s,r),n.strokeStyle="#e8e0d0",n.lineWidth=3;for(let a=0;a<5;a++)for(let o=0;o<5;o++){let l=26+a*51,c=26+o*51;n.beginPath();for(let u=0;u<3;u++)n.arc(l,c,8+u*7,Math.PI,0);n.stroke()}n.strokeStyle="#c8a040",n.lineWidth=6,n.strokeRect(6,6,s-12,r-12)}),e=new mt(new ti(.96,40),new gn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,i.add(e)};ae.step=i=>{fs(i,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function R1(i){let t=new Set,e=i.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),i.updateMatrixWorld(!0);let n=new Map;i.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)});for(let s of n.values())if(!(s.length<2))try{let r=s.map(l=>{let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(c.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&c.deleteAttribute(u);return c.attributes.uv?(c.applyMatrix4(l.matrixWorld),c):null});if(r.some(l=>!l))continue;let a=im(r,!1);if(!a)continue;let o=new mt(a,s[0].material);i.add(o),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var C1="#6fa8d6",Tf="#4f86b8",mr="#f6f2ea",Or="#d9b07a";ae.sofa=i=>{dt(i,1.9,.42,.82,Tf,0,.21,0);for(let t of[-.46,.46])dt(i,.9,.16,.7,C1,t,.5,.06);dt(i,1.9,.55,.2,Tf,0,.72,-.32);for(let t of[-.88,.88])dt(i,.18,.58,.82,Tf,t,.45,0);Le(i,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),Le(i,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};ae.armchair=i=>{dt(i,.8,.4,.78,"#e07a5f",0,.2,0),dt(i,.62,.14,.64,"#ee9a7a",0,.48,.05),dt(i,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])dt(i,.14,.52,.78,"#e07a5f",t,.45,0)};ae.ctable=i=>{dt(i,1.6,.06,.7,Or,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])oe(i,.03,.03,.38,"#8a6a4a",t,.19,e,8);dt(i,1.5,.03,.6,"#c89a62",0,.15,0)};ae.tv=i=>{dt(i,1.8,.5,.48,mr,0,.25,-.1);for(let e of[-.45,.45])dt(i,.8,.38,.02,"#e8e0d0",e,.25,.15);dt(i,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=dt(i,1.2,.68,.02,xn("#4a8ad8"),0,.98,-.085);t.userData.lit=1,i.userData.tvs=t,dt(i,.3,.08,.2,"#2a2a2e",0,.54,-.12)};ae.books=i=>{for(let n of[-.925,.925])dt(i,.05,1.9,.4,Or,n,.95,-.1);dt(i,1.9,.05,.4,Or,0,1.875,-.1),dt(i,1.8,1.8,.02,"#a07850",0,.95,-.29);for(let n of[.05,.5,.95,1.4])dt(i,1.8,.04,.36,"#c8a070",0,n+.02,-.1);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let n of[.09,.54,.99]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,a=.3+e*7%5*.025;dt(i,r,a,.24,t[e%7],s+r/2,n+a/2,-.08),s+=r+.01,e++}}Le(i,.12,"#3f8f4f",.6,1.54,-.08)};ae.flamp=i=>{oe(i,.2,.22,.04,"#3a3a3e",0,.02,0,18),oe(i,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=oe(i,.16,.26,.32,xn("#fff0c8"),0,1.6,0,18);t.userData.lit=1,zr(i,0,1.55,0,2.4,.55)};ae.piano=i=>{dt(i,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),dt(i,1.6,.06,.7,"#1e1a1a",0,.72,.05),dt(i,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)dt(i,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])dt(i,.1,.7,.1,"#1e1a1a",t,.35,.3);dt(i,.5,.05,.3,"#1e1a1a",0,.45,.6),dt(i,.5,.04,.3,"#8a3a2a",0,.48,.6)};ae.bed=i=>{dt(i,1.9,.3,1.95,Or,0,.25,0),dt(i,1.9,.9,.1,Or,0,.55,-.95),dt(i,1.8,.2,1.85,mr,0,.5,.02),dt(i,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])Le(i,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])dt(i,.08,.12,.08,"#8a6a4a",t,.06,e)};ae.wardrobe=i=>{dt(i,1.8,2,.6,mr,0,1,-.15),dt(i,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])oe(i,.02,.02,.3,"#c8a040",t,1.05,.18,6);dt(i,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};ae.nstand=i=>{dt(i,.5,.5,.45,Or,0,.27,0),dt(i,.46,.02,.02,"#8a6a4a",0,.35,.23),Le(i,.025,"#c8a040",0,.25,.24)};ae.desk=i=>{dt(i,1.6,.05,.65,Or,0,.74,0);for(let t of[-.74,.74])dt(i,.06,.72,.6,"#e8e0d0",t,.36,0);dt(i,.45,.3,.55,"#e8e0d0",.45,.55,0)};ae.kcounter=i=>{dt(i,1.9,.86,.62,mr,0,.43,-.1),dt(i,1.96,.06,.7,"#9aa0a8",0,.89,-.08),dt(i,.6,.04,.4,"#6a7078",-.4,.91,-.08),oe(i,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])dt(i,.5,.6,.02,"#ece6da",e,.43,.22);let t=oe(i,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};ae.stove=i=>{dt(i,.8,.86,.62,"#e8e4dc",0,.43,-.1),dt(i,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new mt(new zi(.1,.02,6,16),jt("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),i.add(e)}dt(i,.7,.4,.02,"#2a2a2e",0,.45,.22),oe(i,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};ae.fridge=i=>{dt(i,.78,1.85,.7,"#eaf2f8",0,.93,-.08),dt(i,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])dt(i,.03,.25,.04,"#a8b0b8",.3,t,.3);dt(i,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};ae.catbed=i=>{let t=new mt(new zi(.32,.12,8,20),jt("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,i.add(t),oe(i,.3,.3,.08,"#f2d8b0",0,.05,0,18),Le(i,.18,"#e8a050",.02,.2,0,1.4,.7,1),Le(i,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let n=new mt(new pi(.04,.07,4),jt("#e8a050"));n.position.set(.22,.36,e),i.add(n)}};ae.monstera=i=>{oe(i,.24,.18,.4,"#f2efe6",0,.2,0,14),oe(i,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,n=new mt(new ti(.28,10),new gn({color:t%2?"#2f7a3a":"#3f8f4a",side:Vn}));n.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),n.rotation.set(-1+Math.random()*.4,e,0),i.add(n),oe(i,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};ae.cactus=i=>{oe(i,.09,.07,.12,"#c8704a",0,.06,0,12),oe(i,.06,.06,.22,"#4a9a4a",0,.22,0,10),Le(i,.06,"#4a9a4a",0,.33,0);let t=oe(i,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,Le(i,.025,"#f29ab8",0,.39,0)};ae.wwin=i=>{let t=dt(i,1.5,1.1,.03,xn("#bfe6ff"),0,1.65,.02);i.userData.pane=t,dt(i,1.62,.08,.08,mr,0,2.24,.04),dt(i,1.62,.08,.08,mr,0,1.06,.04),dt(i,.06,1.15,.06,mr,0,1.65,.05),dt(i,1.62,.1,.2,mr,0,1.03,.1),dt(i,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let n=dt(i,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);n.geometry=new bn(.38,1.4,.05,4,1,1)}};ae.photos=i=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,n,s,r],a)=>{dt(i,s+.08,r+.08,.03,a%2?"#3a2a1a":mr,e,n,.015),dt(i,s,r,.01,xn(t[a]),e,n,.035),Le(i,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][a],e-s*.15,n-r*.1,.04,1,1,.2)})};ae.shelfw=i=>{dt(i,1.7,.05,.25,Or,0,1.6,.12);for(let t of[-.7,.7])dt(i,.04,.15,.2,"#8a6a4a",t,1.52,.1);oe(i,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),Le(i,.09,"#4a9a4a",-.5,1.82,.12),dt(i,.3,.22,.16,"#2f6bb8",0,1.74,.12),Le(i,.08,"#f2b630",.45,1.7,.12)};ae.book=i=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let n=dt(i,.22,.045,.16,t[e],0,.025+e*.047,0);n.rotation.y=e*.25}};ae.mug=i=>{oe(i,.05,.045,.1,"#f6f2ea",0,.05,0,14),oe(i,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new mt(new zi(.03,.01,6,10),jt("#f6f2ea"));t.position.set(.06,.05,0),i.add(t)};ae.cake=i=>{oe(i,.14,.14,.02,"#f6f2ea",0,.01,0,20),oe(i,.1,.1,.1,"#fff8f0",0,.07,0,20),oe(i,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)Le(i,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};ae.laptop=i=>{dt(i,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new ve;t.position.set(0,.015,-.11),t.rotation.x=-.35,i.add(t),dt(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=dt(t,.29,.17,.002,xn("#8ac0f0"),0,.1,.007);e.userData.lit=1};ae.dlamp=i=>{oe(i,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=oe(i,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=oe(i,.04,.09,.1,xn("#fff0c8"),0,.33,0,12);e.userData.lit=1,zr(i,0,.3,0,1.2,.5)};ae.teddy=i=>{let t="#b8814a";Le(i,.1,t,0,.1,0,1,1.1,.9),Le(i,.08,t,0,.24,0);for(let e of[-.06,.06])Le(i,.03,t,e,.31,0),Le(i,.012,"#1a1a1a",e*.5,.26,.07),Le(i,.035,t,e*1.3,.1,.06);Le(i,.03,"#e8d0b0",0,.225,.07)};ae.carpet=i=>{let t=be(256,256,(n,s,r)=>{n.fillStyle="#f2e6d0",n.fillRect(0,0,s,r);let a=I1(3);for(let o=0;o<1600;o++)n.fillStyle=a()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",n.fillRect(a()*s,a()*r,3,3);n.strokeStyle="#e8a0b0",n.lineWidth=10,n.strokeRect(14,14,s-28,r-28)}),e=new mt(new bn(1.9,.04,1.9),[jt("#e8d8c0"),jt("#e8d8c0"),new gn({map:t}),jt("#e8d8c0"),jt("#e8d8c0"),jt("#e8d8c0")]);e.position.y=.02,i.add(e)};var I1=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Cf(i){let t=new ve,e=ae[i];return e?e(t):dt(t,.8,.8,.8,"#f0f",0,.4,0),R1(t),t.traverse(n=>{n.isMesh&&(n.userData.item=t)}),t}var kr=(i,t)=>i+Math.random()*(t-i),ki=(i,t,e)=>Math.max(t,Math.min(e,i)),yl=(i,t,e)=>i+(t-i)*e,Gr=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Vr=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},ds={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},P1={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},Pf=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),Es=46,as=34,Ks=7,L1=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],vl=2,If=8.5,D1=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],bl=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],N1=`
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
`,Ml={v:!1};function hm(i){let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.data||{};if(r.ex=Object.assign(Pf(),r.ex||{}),!document.getElementById("i3css")){let m=document.createElement("style");m.id="i3css",m.textContent=N1,document.head.appendChild(m)}if(!document.getElementById("h3css")&&i.css){let m=document.createElement("style");m.id="h3css",m.textContent=i.css,document.head.appendChild(m)}let a=Math.min(screen.width,screen.height)<600,o=new ro({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});o.shadowMap.enabled=!0,o.shadowMap.type=la,o.shadowMap.autoUpdate=!1;let l=new Ar,c=new jr(12576511,60,170);l.fog=c;let u=new ni(38,2,.3,600),p=new sa,d=(m,T)=>p.load(m,C=>{C.colorSpace=Qn,T&&T(C)}),f={},g=(m,T)=>T?new gn(Object.assign({color:m},T)):f[m]||(f[m]=new gn({color:m})),I=(m,T)=>new Je(Object.assign({color:m},T||{})),_=(m,T,C)=>{let B=m.clone();return B.wrapS=B.wrapT=Gs,B.repeat.set(T,C),B.needsUpdate=!0,B},y=[];function S(m,T,C,B,Z,ht,vt,Tt,zt){let Mt=new mt(new bn(m,T,C),typeof B=="string"?g(B):B);return Mt.position.set(Z,ht,vt),(Tt||l).add(Mt),zt!==!1&&(Mt.castShadow=!0),Mt.receiveShadow=!0,Mt}function L(m,T,C,B,Z,ht,vt,Tt,zt){let Mt=new mt(new Ri(m,T,C,zt||14),typeof B=="string"?g(B):B);return Mt.position.set(Z,ht,vt),(Tt||l).add(Mt),Mt.castShadow=!0,Mt.receiveShadow=!0,Mt}function E(m,T,C,B,Z,ht,vt,Tt,zt,Mt){let Qe=new mt(Mt?new vs(m,1):new mi(m,16,12),typeof T=="string"?Mt?g(T,{flatShading:!0}):g(T):T);return Qe.position.set(C,B,Z),vt&&Qe.scale.set(vt,Tt,zt),(ht||l).add(Qe),Qe.castShadow=!0,Qe}let O=[];function N(m,T,C,B,Z,ht){let vt=new di(new ii({map:ma,blending:bs,transparent:!0,depthWrite:!1,opacity:0}));return ht&&vt.material.color.set(ht),vt.scale.set(B,B,1),vt.position.set(m,T,C),(Z||l).add(vt),O.push(vt),vt}let M=[];function A(m,T){let C=new Je({color:m});return C.userData.day=new Se(m),C.userData.night=new Se(T||"#ffd98a"),M.push(C),C}let q=new mi(300,24,16),k=new Float32Array(q.attributes.position.count*3);q.setAttribute("color",new De(k,3));let W=new mt(q,new Je({vertexColors:!0,side:si,fog:!1,depthWrite:!1}));W.renderOrder=-10,l.add(W);let Q=new Dn;{let m=[],T=Vr(9);for(let C=0;C<400;C++){let B=T()*Math.PI*2,Z=.15+T()*1.3;m.push(Math.cos(B)*Math.cos(Z)*280,Math.sin(Z)*280,Math.sin(B)*Math.cos(Z)*280)}Q.setAttribute("position",new De(m,3))}let ut=be(128,128,m=>{let T=m.createRadialGradient(64,64,10,64,64,64);T.addColorStop(0,"rgba(255,255,240,1)"),T.addColorStop(.35,"rgba(255,240,200,.9)"),T.addColorStop(.4,"rgba(255,230,180,.3)"),T.addColorStop(1,"rgba(255,230,180,0)"),m.fillStyle=T,m.fillRect(0,0,128,128)}),V=new di(new ii({map:ut,fog:!1,depthWrite:!1,transparent:!0}));V.scale.set(50,50,1),W.add(V);let at=be(128,128,m=>{let T=m.createRadialGradient(64,64,18,64,64,64);T.addColorStop(0,"rgba(255,248,220,1)"),T.addColorStop(.42,"rgba(255,244,210,1)"),T.addColorStop(.46,"rgba(255,240,200,.25)"),T.addColorStop(1,"rgba(255,240,200,0)"),m.fillStyle=T,m.fillRect(0,0,128,128)}),ct=new di(new ii({map:at,fog:!1,depthWrite:!1,transparent:!0}));ct.scale.set(36,36,1),W.add(ct);let st=new ve;W.add(st);{let m=be(16,16,B=>{B.fillStyle="#fff8e0",B.beginPath(),B.arc(8,8,3,0,7),B.fill()}),T=Q.attributes.position,C=new ii({map:m,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let B=0;B<T.count;B+=2){let Z=new di(C);Z.position.set(T.getX(B),T.getY(B),T.getZ(B)),Z.scale.set(1.4,1.4,1),st.add(Z)}st.userData.m=C}let Pt=new ve;l.add(Pt);{let m=Vr(4);for(let T=0;T<14;T++){let C=new ve,B=3+(m()*3|0);for(let vt=0;vt<B;vt++){let Tt=new mt(new vs(3+m()*3,1),new gn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));Tt.position.set(vt*4-B*2,m()*1.5,m()*2),Tt.scale.y=.6,C.add(Tt)}let Z=m()*Math.PI*2,ht=110+m()*60;C.position.set(Math.cos(Z)*ht,40+m()*25,Math.sin(Z)*ht),C.userData.a=Z,C.userData.R=ht,Pt.add(C)}}let lt=new Lr(14676735,8036442,1.4);l.add(lt);let wt=new rl(16777215,.25);l.add(wt);let xt=new Dr(16773852,2.2);xt.castShadow=!0;let Ht=a?1024:2048;xt.shadow.mapSize.set(Ht,Ht),Object.assign(xt.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),xt.shadow.bias=-8e-4,xt.shadow.normalBias=.03,l.add(xt),l.add(xt.target);let le=be(256,256,(m,T,C)=>{m.fillStyle="#3fb7d8",m.fillRect(0,0,T,C);let B=Vr(2);for(let Z=0;Z<90;Z++){m.strokeStyle=`rgba(255,255,255,${.12+B()*.25})`,m.lineWidth=2+B()*2;let ht=B()*T,vt=B()*C,Tt=10+B()*24;m.beginPath(),m.moveTo(ht,vt),m.quadraticCurveTo(ht+Tt/2,vt-4,ht+Tt,vt),m.stroke()}});le.wrapS=le.wrapT=Gs,le.repeat.set(40,40);let pt=new gn({map:le,color:"#ffffff"}),Zt=new mt(new Ke(900,900),pt);Zt.rotation.x=-Math.PI/2,Zt.position.y=-.45,Zt.receiveShadow=!0,l.add(Zt);function ie(m,T,C){let B=new ur;return B.moveTo(-m+C,-T),B.lineTo(m-C,-T),B.quadraticCurveTo(m,-T,m,-T+C),B.lineTo(m,T-C),B.quadraticCurveTo(m,T,m-C,T),B.lineTo(-m+C,T),B.quadraticCurveTo(-m,T,-m,T-C),B.lineTo(-m,-T+C),B.quadraticCurveTo(-m,-T,-m+C,-T),B}let xe=be(128,128,(m,T,C)=>{m.fillStyle="#f3dfa8",m.fillRect(0,0,T,C);let B=Vr(7);for(let Z=0;Z<300;Z++)m.fillStyle=B()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",m.fillRect(B()*T,B()*C,2,2)});{let m=new Ka(ie(Es+Ks,as+Ks,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});m.rotateX(Math.PI/2);let T=new mt(m,new gn({map:_(xe,.4,.4)}));T.position.y=-.83,T.receiveShadow=!0,l.add(T);let C=new mt(new ia(ie(Es+Ks+3.4,as+Ks+3.4,18),12),new Je({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.y=-.38,l.add(C)}let Jt=be(256,256,(m,T,C)=>{m.fillStyle="#7ccb5a",m.fillRect(0,0,T,C);let B=Vr(5);for(let Z=0;Z<900;Z++){m.fillStyle=B()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ht=B()*T,vt=B()*C;m.fillRect(ht,vt,2,5)}});{let m=new ia(ie(Es,27,12),10);m.rotateX(-Math.PI/2),m.translate(0,0,-7);let T=m.attributes.uv;for(let B=0;B<T.count;B++)T.setXY(B,T.getX(B)/8,T.getY(B)/8);let C=new mt(m,new gn({map:_(Jt,1,1)}));C.position.y=.02,C.receiveShadow=!0,l.add(C)}let se=be(128,128,(m,T,C)=>{m.fillStyle="#d9d4cc",m.fillRect(0,0,T,C);let B=Vr(8);for(let Z=0;Z<4;Z++)for(let ht=0;ht<4;ht++){let vt=(B()*14|0)-7;m.fillStyle=`rgb(${206+vt},${200+vt},${190+vt})`,m.fillRect(ht*32+1,Z*32+1,30,30)}}),He=g("#f4f1ea");for(let[m,T,C,B]of L1){let Z=Math.hypot(C-m,B-T)+vl*2,ht=(m+C)/2,vt=(T+B)/2,Tt=T===B,zt=new mt(new Ke(Tt?Z:vl*2,Tt?vl*2:Z),new gn({map:_(se,(Tt?Z:4)/2,(Tt?4:Z)/2)}));zt.rotation.x=-Math.PI/2,zt.position.set(ht,.04,vt),zt.receiveShadow=!0,l.add(zt);for(let Mt of[-1,1]){let Qe=new mt(new bn(Tt?Z:.25,.12,Tt?.25:Z),He);Qe.position.set(ht+(Tt?0:Mt*(vl+.1)),.06,vt+(Tt?Mt*(vl+.1):0)),Qe.receiveShadow=!0,l.add(Qe)}}let _e=be(512,512,(m,T,C)=>{m.fillStyle="#e9b98a",m.fillRect(0,0,T,C),m.translate(256,256);for(let B=250;B>40;B-=26)m.strokeStyle=B%52?"#f4d2a6":"#d99a6a",m.lineWidth=10,m.beginPath(),m.arc(0,0,B,0,7),m.stroke();for(let B=0;B<16;B++)m.rotate(Math.PI/8),m.strokeStyle="#f7e2c0",m.lineWidth=4,m.beginPath(),m.moveTo(50,0),m.lineTo(250,0),m.stroke()});{let m=new mt(new ti(If,48),new gn({map:_e}));m.rotation.x=-Math.PI/2,m.position.y=.06,m.receiveShadow=!0,l.add(m);let T=new mt(new tl(If,If+.35,48),He);T.rotation.x=-Math.PI/2,T.position.y=.08,l.add(T)}let ze=[];{let m=new ve;l.add(m);let T=g("#f4f1ea");L(3.4,3.6,.7,T,0,.35,0,m,32);let C=be(128,128,(vt,Tt,zt)=>{vt.fillStyle="#5ec8e8",vt.fillRect(0,0,Tt,zt),vt.strokeStyle="rgba(255,255,255,.5)",vt.lineWidth=3;for(let Mt=0;Mt<8;Mt++)vt.beginPath(),vt.arc(64,64,8+Mt*8,0,7),vt.stroke()}),B=new mt(new ti(3.05,32),new Je({map:C}));B.rotation.x=-Math.PI/2,B.position.y=.72,m.add(B),ze.push(B),L(.5,.7,1.4,T,0,1.3,0,m,16),L(1.4,1.2,.25,T,0,2.05,0,m,24),L(.25,.35,.9,T,0,2.6,0,m,12),L(.7,.6,.18,T,0,3.1,0,m,20);let Z=new Je({color:"#c8f0ff",transparent:!0,opacity:.75}),ht=new mt(new Ri(.12,.2,1.2,10,1,!0),Z);ht.position.y=3.7,m.add(ht),ze.push(ht);for(let vt=0;vt<8;vt++){let Tt=vt/8*Math.PI*2,zt=new mt(new zi(.9,.06,6,12,Math.PI*.6),Z);zt.position.set(Math.cos(Tt)*.9,2.2,Math.sin(Tt)*.9),zt.rotation.set(0,-Tt,Math.PI*.2),m.add(zt)}for(let vt=0;vt<6;vt++){let Tt=vt/6*Math.PI*2+.26;We(Math.cos(Tt)*6.6,Math.sin(Tt)*6.6,Tt)}}function We(m,T,C){let B=new ve;B.position.set(m,0,T),B.rotation.y=-C,l.add(B),S(1.6,.45,1,"#c8704a",0,.22,0,B),S(1.45,.1,.85,"#5a3a24",0,.45,0,B,!1);let Z=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ht=0;ht<8;ht++)E(.13,Z[ht%5],-.55+ht%4*.36,.62,-.2+Math.floor(ht/4)*.4,B),E(.1,"#4a9a3a",-.55+ht%4*.36,.52,-.2+Math.floor(ht/4)*.4,B)}function St(m){return be(128,128,(T,C,B)=>{T.fillStyle=m,T.fillRect(0,0,C,B);for(let Z=0;Z<B;Z+=16)T.fillStyle="rgba(0,0,0,.08)",T.fillRect(0,Z,C,2),T.fillStyle="rgba(255,255,255,.08)",T.fillRect(0,Z+2,C,2)})}function kt(m){return be(512,128,(T,C,B)=>{T.fillStyle="#fff8ea",T.strokeStyle="#3a2a1a",T.lineWidth=10,Br(T,6,6,C-12,B-12,24),T.fill(),T.stroke(),T.fillStyle="#3a2a1a",T.textAlign="center",T.textBaseline="middle";let Z=64;for(T.font=`900 ${Z}px ${$n}`;T.measureText(m).width>C-60&&Z>20;)Z-=2,T.font=`900 ${Z}px ${$n}`;T.fillText(m,C/2,B/2+3)})}let Rt=5.4,Vt=4.2,Ut=3;function Ne(m,T){let C=new ve,B=m.wall,Z=new gn({map:St(B)}),ht=-.6;S(Rt+.3,.35,Vt+.3,"#e8e2d4",0,.17,ht,C);let vt=S(Rt,Ut,Vt,Z,0,.35+Ut/2,ht,C);for(let bt of[-1,1])S(.22,Ut,.22,"#f4efe2",bt*Rt/2,.35+Ut/2,ht+Vt/2,C);S(Rt+.1,.18,.18,"#f4efe2",0,.35+Ut,ht+Vt/2+.02,C);let Tt=g(m.roofC),zt=.35+Ut;if(m.roof==="flat")S(Rt+.6,.35,Vt+.6,Tt,0,zt+.17,ht,C),S(Rt+.2,.3,Vt+.2,"#f4efe2",0,zt+.5,ht,C),S(1,.7,1,"#9a9a9a",1.4,zt+.9,ht-.6,C);else if(m.roof==="round"){let bt=new mt(new Ri(Vt/2+.45,Vt/2+.45,Rt+.5,24,1,!1,0,Math.PI),Tt);bt.rotation.set(0,0,Math.PI/2),bt.scale.set(.72,1,1),bt.position.set(0,zt,ht),bt.castShadow=!0,C.add(bt);for(let rt of[-1,1]){let Yt=new mt(new ti(Vt/2+.45,24,0,Math.PI),Z);Yt.rotation.y=rt*Math.PI/2,Yt.scale.set(1,.72,1),Yt.position.set(rt*(Rt/2+.251),zt,ht),C.add(Yt)}}else if(m.roof==="hip"){let bt=(Rt+.9)/2,rt=(Vt+.9)/2,Yt=1.7,Ae=Math.max(.3,bt-rt),hn=(Us,br,Vh)=>[Us,br,Vh],Fn=hn(-bt,0,rt),tn=hn(bt,0,rt),Cn=hn(bt,0,-rt),dn=hn(-bt,0,-rt),Pn=hn(-Ae,Yt,0),On=hn(Ae,Yt,0),pn=[Fn,tn,On,Fn,On,Pn,Cn,dn,Pn,Cn,Pn,On,tn,Cn,On,dn,Fn,Pn],ci=new Dn;ci.setAttribute("position",new De(pn.flat(),3)),ci.computeVertexNormals();let Di=new mt(ci,Tt.clone());Di.material.side=Vn,Di.position.set(0,zt-.05,ht),Di.castShadow=!0,C.add(Di),S(2*bt,.12,2*rt,"#f4efe2",0,zt-.02,ht,C).castShadow=!1}else{let bt=new ur,rt=Vt/2+.5;bt.moveTo(-rt,0),bt.lineTo(0,1.9),bt.lineTo(rt,0),bt.lineTo(-rt,0);let Yt=new Ka(bt,{depth:Rt+.6,bevelEnabled:!1});Yt.translate(0,0,-(Rt+.6)/2);let Ae=new mt(Yt,[Tt,Tt]);Ae.rotation.y=Math.PI/2,Ae.position.set(0,zt-.05,ht),Ae.castShadow=!0,C.add(Ae);let hn=new ur;hn.moveTo(-Vt/2,0),hn.lineTo(0,1.55),hn.lineTo(Vt/2,0);let Fn=new mt(new ia(hn),Z);Fn.rotation.y=Math.PI/2;for(let Cn of[-1,1]){let dn=Fn.clone();dn.rotation.y=Cn*Math.PI/2,dn.position.set(Cn*(Rt/2+.001),zt,ht),C.add(dn)}let tn=new mt(new ti(.35,20),A("#bfe6ff"));tn.position.set(0,zt+.5,ht+Vt/2+.02),C.add(tn)}let Mt=ht+Vt/2+.02,Qe=g(m.doorC);S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,Mt,C);let Rn=new ve;{let bt=new mt(new Ke(1.1,2.3),new Je({color:"#2a1a10"}));bt.position.set(0,.35+1.15,Mt+.005),C.add(bt);let rt=new mt(new Ke(1,2.1),A("#5a3a24","#ffcf7a"));rt.position.set(0,.35+1.07,Mt+.007),C.add(rt)}if(m.door==="arch"){S(1.1,1.75,.14,Qe,0,.35+.88,Mt+.02,Rn);let bt=new mt(new ti(.55,20,0,Math.PI),Qe);bt.position.set(0,.35+1.75,Mt+.1),Rn.add(bt)}else S(1.1,2.05,.14,Qe,0,.35+1.02,Mt+.02,Rn);if(m.door==="round"){let bt=new mt(new ti(.26,20),A("#bfe6ff"));bt.position.set(0,.35+1.5,Mt+.1),Rn.add(bt);let rt=new mt(new zi(.28,.05,8,20),g("#c8c8d0"));rt.position.set(0,.35+1.5,Mt+.1),Rn.add(rt)}else if(m.door==="grid")for(let bt=0;bt<3;bt++)for(let rt=0;rt<2;rt++){let Yt=new mt(new Ke(.38,.4),A("#e8f4ff","#ffe0a0"));Yt.position.set(-.21+rt*.42,.35+1.15+bt*.45,Mt+.1),Rn.add(Yt)}E(.06,"#e9c34a",.4,.35+1,Mt+.12,Rn);{let bt=new ve;bt.position.set(-.55,0,Mt+.02),C.add(bt),Rn.position.set(.55,0,-(Mt+.02)),bt.add(Rn),C.userData.doorPivot=bt,C.userData.doorZ=Mt}let wi=E(.16,I("#fff4d0"),.95,.35+2.3,Mt+.2,C);N(.95,.35+2.3,Mt+.3,2.2,C);for(let bt of[-1.75,1.75]){if(m.win==="round"){let Yt=new mt(new ti(.5,24),A("#bfe6ff"));Yt.position.set(bt,2.05,Mt+.01),C.add(Yt);let Ae=new mt(new zi(.52,.08,8,24),g("#f4efe2"));Ae.position.set(bt,2.05,Mt+.02),C.add(Ae)}else if(m.win==="arch"){let Yt=new mt(new Ke(.9,.8),A("#bfe6ff"));Yt.position.set(bt,2.05-.15,Mt+.01),C.add(Yt);let Ae=new mt(new ti(.45,16,0,Math.PI),A("#bfe6ff"));Ae.position.set(bt,2.05+.25,Mt+.01),C.add(Ae),S(1.05,.1,.14,"#f4efe2",bt,2.05-.58,Mt+.05,C)}else if(m.win==="shoji"){let Yt=new mt(new Ke(1.1,1),A("#fff4dc","#ffcf7a"));Yt.position.set(bt,2.05,Mt+.01),C.add(Yt);for(let Ae=-1;Ae<=1;Ae++)S(.04,1,.04,"#6b3f1f",bt+Ae*.36,2.05,Mt+.04,C,!1),S(1.1,.04,.04,"#6b3f1f",bt,2.05+Ae*.33,Mt+.04,C,!1)}else{let Yt=new mt(new Ke(1.05,.95),A("#bfe6ff"));Yt.position.set(bt,2.05,Mt+.01),C.add(Yt),S(1.2,.1,.1,"#f4efe2",bt,2.05+.5,Mt+.04,C,!1),S(1.2,.1,.1,"#f4efe2",bt,2.05-.5,Mt+.04,C,!1),S(.1,1.05,.1,"#f4efe2",bt-.55,2.05,Mt+.04,C,!1),S(.1,1.05,.1,"#f4efe2",bt+.55,2.05,Mt+.04,C,!1),S(.06,1,.06,"#f4efe2",bt,2.05,Mt+.04,C,!1),S(1.3,.14,.32,"#f4efe2",bt,2.05-.6,Mt+.14,C)}if(m.garden!=="none"){S(1,.2,.25,"#8a5a34",bt,2.05-.78,Mt+.2,C);for(let Yt=0;Yt<4;Yt++)E(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][Yt],bt-.36+Yt*.24,2.05-.62,Mt+.2,C)}}if(+m.porch){S(Rt+.6,.3,1.7,"#c8935a",0,.15,Mt+.85,C);for(let bt=0;bt<9;bt++)S(.02,.02,1.7,"#9a6a3a",-Rt/2-.1+bt*.7,.31,Mt+.85,C,!1);S(1.6,.15,.5,"#c8935a",0,.075,Mt+1.95,C);for(let bt of[-1,1])S(.12,.9,.12,"#f4efe2",bt*(Rt/2+.15),.75,Mt+1.62,C),S(.12,.9,.12,"#f4efe2",bt*1,.75,Mt+1.62,C),S(Rt/2-.8,.08,.08,"#f4efe2",bt*(Rt/4+.58),1.1,Mt+1.62,C)}{let bt=new ve;bt.position.set(Rt/2+.2,0,Mt+2.4),C.add(bt),S(.1,1,.1,"#6b3f1f",0,.5,0,bt),S(.4,.32,.55,m.doorC==="#f4efe2"?"#e8553f":m.doorC,0,1.12,0,bt),S(.05,.25,.05,"#e8553f",.22,1.3,.1,bt)}let Li=Mt+2.9,qr=Rt/2+1.1;if(m.fence==="white"||m.fence==="wood"){let bt=m.fence==="white"?"#ffffff":"#c8b070";for(let rt of[-1,1]){for(let Yt=0;Yt<6;Yt++){let Ae=rt*(1.3+Yt*.55);if(S(.12,.8,.06,bt,Ae,.4,Li,C),m.fence==="white"){let hn=new mt(new pi(.09,.16,4),g(bt));hn.position.set(Ae,.88,Li),hn.rotation.y=Math.PI/4,C.add(hn)}}S(2.9,.08,.05,bt,rt*2.65,.55,Li-.04,C,!1),S(2.9,.08,.05,bt,rt*2.65,.25,Li-.04,C,!1)}}else if(m.fence==="hedge")for(let bt of[-1,1]){let rt=S(2.8,.7,.6,g("#3f9a3f"),bt*2.6,.35,Li,C);rt.geometry=new bn(2.8,.7,.6,3,1,1);for(let Yt=0;Yt<4;Yt++)E(.38,"#4aa84a",bt*(1.5+Yt*.72),.7,Li,C,1,.8,1,!0)}if(m.garden==="flower")for(let bt of[-1,1])for(let rt=0;rt<5;rt++)E(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(rt+(bt>0?2:0))%5],bt*(2.1+rt%3*.5),.28,Mt+2+Math.floor(rt/3)*.4,C),E(.12,"#3f8a2f",bt*(2.1+rt%3*.5),.14,Mt+2+Math.floor(rt/3)*.4,C);else if(m.garden==="pots")for(let bt of[-1,1])L(.28,.22,.45,"#c8704a",bt*2.3,.22,Mt+2.1,C),E(.38,"#4a9a3a",bt*2.3,.7,Mt+2.1,C,1,1,1,!0);else m.garden==="tree"&&(L(.12,.16,1.5,"#7a5034",-Rt/2-.6,.75,Mt+1.6,C),E(.95,"#4aa84a",-Rt/2-.6,2,Mt+1.6,C,1,1,1,!0),E(.6,"#5ab85a",-Rt/2-.2,2.4,Mt+1.9,C,1,1,1,!0));if(T){let bt=new mt(new Ke(1.8,.45),new Je({map:kt(T),transparent:!0}));bt.position.set(0,.35+2.5,Mt+.09),C.add(bt)}return C.traverse(bt=>{bt.isMesh&&(bt.castShadow=bt.castShadow||!1,bt.receiveShadow=!0)}),C.userData.door=new z(0,0,Mt+2.4),C}let ce=[],Xe=Vr(31),qe=m=>{let T=oo.find(C=>C.id===m||C.spr===m);return T?T.name.split(" ")[0]:m};function nn(m){let T=C=>C[Math.floor(m()*C.length)][0];return{wall:T(ds.wall),roof:T(ds.roof),roofC:T(ds.roofC),door:T(ds.door),doorC:T(ds.doorC),win:T(ds.win),porch:m()<.75?1:0,fence:T(ds.fence),garden:T(ds.garden)}}function X(m){m.g&&(l.remove(m.g),m.g.traverse(vt=>{vt.geometry&&vt.geometry.dispose()}));let T=m.own?r.ex:m.ex,C=m.own?i.houseName||"\u6211\u7684\u5BB6":m.label;m.g=Ne(T,C),m.g.position.set(m.x,0,m.z),m.g.rotation.y=m.f===2?Math.PI:0,l.add(m.g),m.g.traverse(vt=>{vt.isMesh&&(vt.userData.house=m)});let B=m.g.userData.door.clone();m.f===2&&(B.x=-B.x,B.z=-B.z),m.door={x:m.x+B.x,z:m.z+B.z};let Z=m.f===2?-1:1,ht=m.g.userData.doorZ+.6;m.face={x:m.x,z:m.z+Z*ht},m.inw=-Z,m.pivot=m.g.userData.doorPivot}D1.forEach(m=>{let T=Object.assign({},m);if(!T.own){T.ex=nn(Xe);let C=oo.find(B=>B.spr===m.npc||B.id===m.npc);T.label=(C?C.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}ce.push(T),X(T)});let Re=ce.find(m=>m.own);function Fe(m){let T=new ve;T.position.set(m.x,0,m.z),l.add(T);let C={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[m.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,T),S(6.6,3.4,5,C[0],0,2,-.2,T),S(7.4,.4,6,C[1],0,3.9,-.2,T),S(7.6,.3,1.6,C[1],0,3.1,2.6,T).rotation.x=.35;let B=new mt(new Ke(4.2,.9),new Je({map:kt(m.k==="izakaya"&&r.name?r.name:C[3])}));B.position.set(0,4.55,2.85),T.add(B),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,T);let Z=new mt(new Ke(2.2,1.4),A("#cfe8f4"));Z.position.set(-1.9,1.7,2.31),T.add(Z);let ht=Z.clone();ht.position.x=1.9,T.add(ht),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,T);let vt=be(256,100,(zt,Mt,Qe)=>{for(let Rn=0;Rn<3;Rn++)zt.fillStyle=C[2],zt.fillRect(4+Rn*84,0,80,Qe-4);zt.fillStyle="#fff",zt.textAlign="center",zt.textBaseline="middle",zt.font=`900 40px ${$n}`,[...m.k==="bar"?"\u6708\u5F71":m.n.slice(0,3)].slice(0,3).forEach((Rn,wi)=>zt.fillText(Rn,44+wi*84,44))}),Tt=new mt(new Ke(1.5,.65),new Je({map:vt,transparent:!0,side:Vn}));Tt.position.set(0,2.25,2.42),T.add(Tt);for(let zt of[-1,1]){let Mt=E(.3,I(m.k==="sushi"?"#ffffff":"#e2452f"),zt*1.15,2.3,2.5,T,1,1.3,1);N(zt*1.15,2.3,2.6,2.6,T)}if(m.k==="ramen")for(let zt=0;zt<3;zt++)L(.25,.25,.7,"#c8352a",-1.2+zt*1.2,.35,3.5,T,12);if(m.k==="sushi"){let zt=new mt(new pi(.4,1.2,4),g("#2f6bb8"));zt.position.set(3.1,3.2,2.6),zt.rotation.z=-1.3,T.add(zt)}return T.traverse(zt=>{zt.isMesh&&(zt.userData.shop=m)}),m.door={x:m.x,z:m.z+3.6},m.face={x:m.x,z:m.z+2.85},m.inw=-1,T}bl.forEach(Fe);let ke=[],Ft=[];ce.forEach(m=>{ke.push([m.x-Rt/2-.2,m.z-(m.f===2?-.6:.6)-Vt/2-.2,m.x+Rt/2+.2,m.z-(m.f===2?-.6:.6)+Vt/2+.2])}),bl.forEach(m=>ke.push([m.x-3.5,m.z-3,m.x+3.5,m.z+2.4])),Ft.push([0,0,3.6]);for(let m=0;m<6;m++){let T=m/6*Math.PI*2+.26;Ft.push([Math.cos(T)*6.6,Math.sin(T)*6.6,.7])}function _n(m,T,C,B){let Z=new ve;if(Z.position.set(m,0,T),Z.scale.setScalar(C),l.add(Z),B==="palm"){let ht=0,vt=0;for(let Tt=0;Tt<6;Tt++){let zt=L(.22-Tt*.02,.26-Tt*.02,.8,"#a07850",ht,vt+.4,0,Z,8);zt.rotation.z=-.08*Tt,ht+=.06*Tt,vt+=.78}for(let Tt=0;Tt<7;Tt++){let zt=Tt/7*Math.PI*2,Mt=new mt(new pi(.32,2.6,4),g("#3fa04a",{flatShading:!0}));Mt.scale.z=.25,Mt.position.set(ht+Math.cos(zt)*1.1,vt+.1,Math.sin(zt)*1.1),Mt.rotation.set(Math.sin(zt)*1.6,0,-Math.cos(zt)*1.6),Mt.castShadow=!0,Z.add(Mt)}E(.18,"#6a4a2a",ht,vt-.1,.1,Z)}else L(.22,.3,1.8,"#8a5a3a",0,.9,0,Z,8),E(1.5,B==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,Z,1,.9,1,!0),E(1,B==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,Z,1,1,1,!0),E(.9,B==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,Z,1,1,1,!0);ke.push([m-.5*C,T-.5*C,m+.5*C,T+.5*C])}let de=Vr(77);for(let m=0;m<34;m++){let T=m/34*Math.PI*2+de()*.1,C=Math.cos(T)*(Es-1.5+de()*2),B=Math.sin(T)*(as-1.5+de()*2);if(B>18){de()<.5&&_n(ki(C*1.05,-Es-3,Es+3),ki(B,22,as+4),.9,"palm");continue}_n(ki(C,-Es+2,Es-2),ki(B,-as+2,as-2),.9+de()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([m,T],C)=>_n(m,T,.8+C%3*.1,C%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([m,T])=>_n(m,T,.8,"pink"));function Me(m,T){let C=new ve;C.position.set(m,0,T),l.add(C),L(.09,.12,3.6,"#3a3a44",0,1.8,0,C,8);let B=E(.28,I("#fff4d0"),0,3.7,0,C);L(.3,.2,.12,"#3a3a44",0,3.98,0,C,10),N(0,3.7,0,5,C);let Z=new mt(new ti(3,20),new Je({map:ma,transparent:!0,blending:bs,depthWrite:!1,opacity:0}));Z.rotation.x=-Math.PI/2,Z.position.y=.08,C.add(Z),O.push(Z),Z.userData.k=.35,ke.push([m-.2,T-.2,m+.2,T+.2])}for(let[m,T]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Me(m,T);function F(m,T,C){let B=new ve;B.position.set(m,0,T),B.rotation.y=C,l.add(B),S(2,.12,.55,"#b8824a",0,.5,0,B),S(2,.5,.1,"#b8824a",0,.85,-.25,B);for(let Tt of[-.85,.85])S(.1,.5,.5,"#3a3a44",Tt,.25,0,B);let Z=Math.abs(Math.sin(C))>.7,ht=Z?.4:1,vt=Z?1:.4;return ke.push([m-ht,T-vt,m+ht,T+vt]),B}F(0,6.9,Math.PI),F(0,-6.9,0),F(-6.9,0,Math.PI/2),F(6.9,0,-Math.PI/2);let w=new ve;w.position.set(4.6,0,-4.6),w.rotation.y=-Math.PI/4,l.add(w);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,w),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,w);let m=be(256,160,(C,B,Z)=>{C.fillStyle="#c8935a",C.fillRect(0,0,B,Z),C.strokeStyle="#6b3f1f",C.lineWidth=10,C.strokeRect(0,0,B,Z),C.fillStyle="#fff8ea",C.fillRect(20,30,100,70),C.fillStyle="#ffe0ea",C.fillRect(135,22,100,80),C.fillStyle="#3a2a1a",C.font=`900 26px ${$n}`,C.textAlign="center",C.fillText("\u5CF6\u306E\u63B2\u793A\u677F",B/2,Z-18)}),T=new mt(new bn(1.8,1.1,.1),[g("#6b3f1f"),g("#6b3f1f"),g("#6b3f1f"),g("#6b3f1f"),new Je({map:m}),g("#6b3f1f")]);T.position.y=1.4,T.castShadow=!0,w.add(T),ke.push([3.8,-5.4,5.4,-3.8])}function et(m,T,C){let B=new ve;B.position.set(m,0,T),l.add(B),L(.05,.05,2.4,"#f4efe2",0,1.2,0,B,6);let Z=new mt(new pi(1.5,.7,12),g(C,{flatShading:!0}));Z.position.y=2.5,Z.castShadow=!0,B.add(Z);let ht=new mt(new pi(1.52,.7,12,1,!0,0,Math.PI/6),g("#ffffff",{side:Vn}));for(let vt=0;vt<6;vt++){let Tt=ht.clone();Tt.rotation.y=vt*Math.PI/3,Tt.position.y=2.5,B.add(Tt)}}function Lt(m,T,C){let B=new ve;B.position.set(m,0,T),l.add(B),S(.7,.12,1.8,C,0,.35,0,B);let Z=S(.7,.1,.8,C,0,.6,-.85,B);Z.rotation.x=.6;for(let ht of[-.3,.3])for(let vt of[-.7,.7])S(.05,.3,.05,"#f4efe2",ht,.15,vt,B)}et(-18,28,"#2f6bb8"),Lt(-16.2,28.4,"#6fd1c0"),Lt(-19.6,28.8,"#f29ab8"),et(-4,30,"#e8553f"),Lt(-2.2,30.2,"#f6cf4a"),et(22,29,"#3f8f4f"),Lt(23.8,29.3,"#f29ab8"),et(-30,27,"#f6cf4a");{let m=new ve;m.position.set(10,0,as+6),l.add(m),S(3,.3,16,"#b8824a",0,.15,6,m);for(let B=0;B<6;B++)for(let Z of[-1.4,1.4])L(.15,.15,1.6,"#8a5a34",Z,-.5,-1+B*3,m,8);for(let B=0;B<16;B++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+B,m,!1);let T=new ve;T.position.set(14,-.2,as+17),l.add(T),S(1.8,.6,4,"#f4efe2",0,.3,0,T),S(1.9,.15,4.1,"#e8553f",0,.65,0,T),L(.06,.06,3,"#8a5a34",0,2,0,T,6);let C=new mt(new Ke(1.6,2.2),g("#ffffff",{side:Vn}));C.position.set(0,2.2,.6),C.rotation.y=Math.PI/2,T.add(C),Pt.userData.boat=T}let yt=[8.5,as+4,11.5,as+19],Ct=[],Bt=1.5,gt=be(64,64,m=>{let T=m.createRadialGradient(32,32,2,32,32,32);T.addColorStop(0,"rgba(0,0,0,.55)"),T.addColorStop(1,"rgba(0,0,0,0)"),m.fillStyle=T,m.fillRect(0,0,64,64)});function _t(m,T){return be(512,112,(C,B,Z)=>{C.textAlign="center",C.textBaseline="middle";let ht=52;C.font=`900 ${ht}px ${$n}`;let vt=String(m||"").slice(0,16);for(;C.measureText(vt).width>B-80&&ht>22;)ht-=2,C.font=`900 ${ht}px ${$n}`;let Tt=Math.min(B-12,C.measureText(vt).width+56);C.fillStyle=T==="me"?"#ffffffee":"#2a2a48e0",C.strokeStyle=T==="me"?"#3a2a1a":"#c8c0ff",C.lineWidth=7,Br(C,(B-Tt)/2,14,Tt,Z-28,(Z-28)/2),C.fill(),C.stroke(),C.fillStyle=T==="me"?"#3a2a1a":"#fff3d6",C.fillText(vt,B/2,Z/2+2)})}let Gt=be(128,112,m=>{m.strokeStyle="#2a1810",m.lineWidth=6,m.lineJoin="round",m.fillStyle="#ffffff",Br(m,12,8,104,66,24),m.fill(),m.stroke(),m.beginPath(),m.moveTo(44,72),m.lineTo(34,100),m.lineTo(66,74),m.closePath(),m.fill(),m.stroke(),m.fillRect(46,68,18,8),m.fillStyle="#2a1810";for(let T=0;T<3;T++)m.beginPath(),m.arc(40+T*24,42,6,0,7),m.fill()});function G(m,T,C){C=C||{};let B=new ve;l.add(B);let Z=new Ke(1,1);Z.translate(0,.5,0);let ht=new Je({transparent:!0,alphaTest:.04,color:16777215}),vt=new mt(Z,ht);B.add(vt);let Tt={grp:B,m:vt,mat:ht,h0:T,h:T*Bt,ar:.8,w:T*Bt*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};d(m,Mt=>{ht.map=Mt,ht.needsUpdate=!0,Tt.ar=Mt.image.width/Mt.image.height,Tt.w=Tt.h*Tt.ar});let zt=new mt(new ti(.5,16),new Je({map:gt,transparent:!0,depthWrite:!1}));if(zt.rotation.x=-Math.PI/2,l.add(zt),Tt.sh=zt,C.name){let Mt=new di(new ii({map:_t(C.name,C.nk),transparent:!0,depthTest:!1}));Mt.renderOrder=30,Mt.scale.set(2.2,.48,1),l.add(Mt),Tt.tag=Mt}if(C.bubble){let Mt=new di(new ii({map:Gt,transparent:!0,depthWrite:!1}));Mt.scale.set(.85,.74,1),l.add(Mt),Tt.bub=Mt}return Ct.push(Tt),Tt}let Y=G(i.me.src,1.5,{name:i.me.name||"\u6211",nk:"me"}),ft=.35;i.spawn==="door"&&Re?(Y.x=Re.face.x,Y.z=Re.face.z-Re.inw*.9):i.spawn==="front"&&Re?(Y.x=Re.face.x+.8,Y.z=Re.face.z-Re.inw*1.9,ft=Re.f===2?Math.PI:0):i.spawn==="shop"?(Y.x=bl[0].face.x,Y.z=bl[0].face.z+.9):(Y.x=0,Y.z=11.5);function Xt(m,T){let C=Math.abs(m),B=Math.abs(T),Z=Es+Ks-1,ht=as+Ks-1,vt=14;return m>=yt[0]&&m<=yt[2]&&T>=yt[1]&&T<=yt[3]?!0:C>Z||B>ht?!1:C>Z-vt&&B>ht-vt?Math.hypot(C-(Z-vt),B-(ht-vt))<vt:!0}function Dt(m,T,C){if(!Xt(m,T))return!0;for(let B of ke)if(m>B[0]-C&&m<B[2]+C&&T>B[1]-C&&T<B[3]+C)return!0;for(let B of Ft)if(Math.hypot(m-B[0],T-B[1])<B[2]+C)return!0;return!1}let Wt=1,ue=-Es-Ks,Oe=-as-Ks,At=Math.ceil((Es+Ks)*2),pe=Math.ceil((as+Ks)*2+16),Ee=null;function $t(){Ee=new Uint8Array(At*pe);for(let m=0;m<pe;m++)for(let T=0;T<At;T++)Ee[m*At+T]=Dt(ue+T+.5,Oe+m+.5,.35)?1:0}$t();function sn(m,T,C,B){let Z=tn=>Math.floor(tn-ue),ht=tn=>Math.floor(tn-Oe),vt=Z(m),Tt=ht(T),zt=Z(C),Mt=ht(B);if(zt<0||Mt<0||zt>=At||Mt>=pe)return null;if(Ee[Mt*At+zt]){let tn=null,Cn=1e9;for(let dn=-3;dn<=3;dn++)for(let Pn=-3;Pn<=3;Pn++){let On=zt+Pn,pn=Mt+dn;if(On<0||pn<0||On>=At||pn>=pe||Ee[pn*At+On])continue;let ci=Pn*Pn+dn*dn;ci<Cn&&(Cn=ci,tn=[On,pn])}if(!tn)return null;[zt,Mt]=tn}let Qe=new Int32Array(At*pe).fill(-1),Rn=Tt*At+vt,wi=Mt*At+zt;Qe[Rn]=Rn;let Li=[Rn],qr=0;for(;qr<Li.length;){let tn=Li[qr++];if(tn===wi)break;let Cn=tn%At,dn=tn/At|0;for(let[Pn,On]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let pn=Cn+Pn,ci=dn+On;if(pn<0||ci<0||pn>=At||ci>=pe)continue;let Di=ci*At+pn;Qe[Di]>=0||Ee[Di]||Pn&&On&&(Ee[dn*At+pn]||Ee[ci*At+Cn])||(Qe[Di]=tn,Li.push(Di))}}if(Qe[wi]<0)return null;let bt=[],rt=wi;for(;rt!==Rn;)bt.push([ue+rt%At+.5,Oe+(rt/At|0)+.5]),rt=Qe[rt];bt.reverse();let Yt=[],Ae=m,hn=T,Fn=0;for(;Fn<bt.length;){let tn=Fn;for(let Cn=bt.length-1;Cn>Fn;Cn--)if(kn(Ae,hn,bt[Cn][0],bt[Cn][1])){tn=Cn;break}Yt.push(bt[tn]),Ae=bt[tn][0],hn=bt[tn][1],Fn=tn+1}return Yt}function kn(m,T,C,B){let Z=Math.hypot(C-m,B-T),ht=Math.ceil(Z/.4);for(let vt=1;vt<=ht;vt++){let Tt=vt/ht;if(Dt(m+(C-m)*Tt,T+(B-T)*Tt,.3))return!1}return!0}let on=[],ps={};function Mn(m,T){let C=m+","+T;return ps[C]!==void 0?ps[C]:(ps[C]=on.length,on.push({x:m,z:T,n:[]}),on.length-1)}{let m=[-36,-26,-15,0,15,26,36],T=[-18,0,16];for(let Tt of T)for(let zt=0;zt<m.length-1;zt++){let Mt=Mn(m[zt],Tt),Qe=Mn(m[zt+1],Tt);on[Mt].n.push(Qe),on[Qe].n.push(Mt)}for(let Tt of[-36,36])for(let zt=0;zt<T.length-1;zt++){let Mt=Mn(Tt,T[zt]),Qe=Mn(Tt,T[zt+1]);on[Mt].n.push(Qe),on[Qe].n.push(Mt)}let C=Mn(0,-28),B=Mn(0,-18);on[C].n.push(B),on[B].n.push(C);let Z=Mn(0,-9.5),ht=Mn(0,9.5);for(let[Tt,zt]of[[B,Z],[ht,Mn(0,16)],[Z,Mn(-9.5,0)],[Z,Mn(9.5,0)],[ht,Mn(-9.5,0)],[ht,Mn(9.5,0)],[Mn(-9.5,0),Mn(-15,0)],[Mn(9.5,0),Mn(15,0)]])on[Tt].n.push(zt),on[zt].n.push(Tt);let vt=ps["0,0"];vt!==void 0&&on[vt].n.forEach(Tt=>{on[Tt].n=on[Tt].n.filter(zt=>zt!==vt)}),vt!==void 0&&(on[vt].n=[])}let xi=[];oo.filter(m=>i.walk&&i.walk[m.spr]&&m.spr!=="robot").sort(()=>Math.random()-.5).slice(0,a?7:10).forEach(m=>{let T=G(i.walk[m.spr],m.h,{bubble:1});T.d=m,T.sp=m.sp*.9;let C;do C=Math.floor(Math.random()*on.length);while(!on[C].n.length);T.x=on[C].x+kr(-1,1),T.z=on[C].z+kr(-1,1),T.node=C,T.state="idle",T.t=kr(0,3),xi.push(T)});function Is(m){let T=on[m.node];if(!T.n.length)return;let C=T.n[Math.floor(Math.random()*T.n.length)];m.node=C;let B=on[C];m.tx=B.x+kr(-1.2,1.2),m.tz=B.z+kr(-1.2,1.2),m.state="walk"}let Zn=(m,T,C,B)=>{let Z=document.createElement(m);return T&&(Z.className=T),C!=null&&(Z.innerHTML=C),(B||e).appendChild(Z),Z},js=[],Ji=m=>(js.push(m),m),Ps=Ji(Zn("div","i3info")),ee=Ji(Zn("div","i3hud")),ga=Ji(Zn("div","h3hint")),_r=Ji(Zn("div","h3toast")),_i=Ji(Zn("div","h3card")),Qs=Ji(Zn("div","i3pan")),Wi=Ji(Zn("div","i3joy","<i></i>")),yr=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,Hn=()=>{if(J.dead)return;let m=t.getBoundingClientRect(),T=e.getBoundingClientRect();Wi.style.left=m.left-T.left+110+"px",Wi.style.top=m.bottom-T.top-110+"px",Wi.firstChild.style.transform="",Wi.className="i3joy"+(yr&&J.mode==="walk"?" rest":"")},Yn=Ji(Zn("button","i3door"));Yn.type="button",Yn.dataset.i3="door";function ls(m){_r.textContent=m,_r.classList.add("on"),clearTimeout(ls.t),ls.t=setTimeout(()=>_r.classList.remove("on"),2400)}let J={dead:!1,mode:"walk",yaw:ft,yawT:ft,pitch:.72,pitchT:.72,dist:17,distT:17,fp:Ml.v,fpK:0,fpP:0,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new z(Y.x,1,Y.z)},R=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],H=0;function ot(){if(R[H][0]!==null)return R[H][0];let m=new Date;return m.getHours()+m.getMinutes()/60}function nt(){if(Kt.style.display=U.style.display=J.mode==="edit"?"none":"",U.classList.toggle("on",!!J.fp),J.mode==="edit"){ee.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}ee.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button>${n.stats?'<button class="h3b" type="button" data-i3="stats"><i>\u{1F4CB}</i>\u5E97\u6CC1</button>':""}`}function it(){let m=ot(),T=Math.floor(m),C=Math.floor((m-T)*60);Ps.innerHTML=`<b>\u{1F3DD}\uFE0F ${Gr(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(i.owner&&i.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(T).padStart(2,"0")}:${String(C).padStart(2,"0")}\u30FB${m<5||m>=19.5?"\u591C\u665A \u{1F319}":m<7?"\u6E05\u6668 \u{1F305}":m<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}let Ot=e.querySelector(".twtop"),te=Ot&&Ot.querySelector(".twlist"),qt=(m,T,C)=>{let B=document.createElement("button");return B.type="button",B.className="i3tb",B.dataset.i3=m,B.setAttribute("aria-label",C),B.textContent=T,Ot&&Ot.insertBefore(B,te||null),js.push(B),B},Kt=qt("time","\u{1F550}","\u6642\u9593"),U=qt("fp","\u{1F441}","\u7B2C\u4E00\u4EBA\u7A31\uFF0F\u7B2C\u4E09\u4EBA\u7A31");nt(),it(),setTimeout(Hn,50),window.addEventListener("resize",Hn);let ye="wall";function Ge(){let m=Object.keys(ds).map(C=>`<button class="h3tab ${ye===C?"on":""}" type="button" data-i3="tab" data-k="${C}">${P1[C]}</button>`).join(""),T=ds[ye].map(([C,B])=>{let Z=typeof C=="string"&&C[0]==="#";return`<button class="i3opt ${String(r.ex[ye])===String(C)?"on":""}" type="button" data-i3="opt" data-v="${C}">${Z?`<i style="background:${C}"></i>`:""}${Gr(B)}</button>`}).join("");Qs.innerHTML=`<div class="h3tabs">${m}</div><div class="i3row">${T}</div>`}function re(m){J.mode=m,setTimeout(Hn,0),yn(),J.tgt=null,Qs.classList.toggle("on",m==="edit"),nt(),Ps.style.display=m==="edit"?"none":"",m==="edit"?(Ge(),J.distT=14,J.pitchT=.5,J.yawT=Re.f===2?Math.PI:0):(J.distT=17,J.pitchT=.72,Nn())}let we=0;function Nn(){s&&(clearTimeout(we),we=setTimeout(()=>{try{n.save&&n.save(r)}catch{}},500))}function Ye(m){yn(),J.talk=m,m.state="talk",(!m.deck||!m.deck.length)&&(m.deck=m.d.lines.map(B=>({kind:B[0],text:B[1]})).sort(()=>Math.random()-.5));let T=m.deck.pop(),C=pa[T.kind]||pa.chat;_i.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${i.walk[m.d.spr]}')"></div><div class="h3nm"><b>${Gr(m.d.name)}</b><small>${Gr(m.d.role||"")}</small></div><span class="h3k" style="background:${C.c}">${C.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${T.kind==="mind"?" mind":""}">${T.kind==="mind"?"\uFF08"+Gr(T.text)+"\uFF09":"\u300C"+Gr(T.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,_i.classList.toggle("r",mn(new z(m.x,1,m.z)).x<yi().left+yi().width/2),_i.classList.add("on")}function rn(m,T,C,B){yn(),_i.innerHTML=`<div class="h3h"><div class="h3nm"><b>${Gr(m)}</b><small>${Gr(T||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${C}</p>${B?`<div class="h3bt">${B}</div>`:""}`,_i.classList.remove("r"),_i.classList.add("on")}function yn(){_i.classList.remove("on");let m=J.talk;J.talk=null,m&&m.state==="talk"&&(m.state="idle",m.t=kr(1,2))}let ne=m=>{let T=m.target.closest("[data-i3]");if(!T||!e.contains(T))return;let C=T.dataset.i3;if(C==="close")yn();else if(C==="more"&&J.talk)Ye(J.talk);else if(C==="edit")J.mode==="walk"&&re("edit");else if(C==="done")re("walk");else if(C==="tab")ye=T.dataset.k,Ge();else if(C==="opt"){let B=T.dataset.v;r.ex[ye]=/^\d$/.test(B)?+B:B,X(Re),Ge(),Nn()}else if(C==="home")yn(),Pi($e.find(B=>B.kind==="home"));else if(C==="enter")yn(),vn($e.find(B=>B.kind==="home"));else if(C==="shopin")yn(),Pi($e.find(B=>B.kind==="shop"));else if(C==="door")vn(ln);else if(C==="stats")try{n.stats&&n.stats()}catch{}else C==="fp"?(J.fp=!J.fp,Ml.v=J.fp,nt()):C==="time"&&(H=(H+1)%R.length,nt(),it(),ls(H?`\u9810\u89BD\uFF1A${R[H][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",ne);function Wn(m){if(!J.entering){J.entering=!0;try{n.enter&&n.enter(m||"home")}catch{J.entering=!1}}}let $e=ce.map(m=>({h:m,face:m.face,inw:m.inw,pivot:m.pivot,kind:m.own?"home":"npc",label:m.own?s?"\u{1F6AA} \u958B\u9580":"\u{1F6AA} \u62DC\u8A2A":"\u{1F514} \u6309\u9580\u9234",name:m.own?"":m.label})).concat(bl.map(m=>({s:m,face:m.face,inw:m.inw,kind:m.k==="izakaya"?"shop":"closed",label:m.k==="izakaya"?s?"\u{1F3EE} \u9032\u5E97":"\u{1F3EE} \u9032\u53BB\u901B":"\u{1F6A7} \u6E96\u5099\u4E2D",name:m.n}))),ln=null;function vn(m){if(!(!m||J.ent)){if(m.kind==="npc"){ls(`\u53EE\u549A\uFF5E ${m.name}\u597D\u50CF\u6C92\u4EBA\u5728\u5BB6`);return}if(m.kind==="closed"){ls(`${m.name}\u9084\u5728\u6E96\u5099\u4E2D\uFF0C\u4E4B\u5F8C\u5C31\u80FD\u9032\u53BB\u4E86\uFF01`);return}yn(),J.tgt=null,J.ent={d:m,t:0,x0:Y.x,z0:Y.z}}}function Pi(m){Xn(m.face.x,m.face.z-m.inw*.7,()=>vn(m))}i.spawn==="door"&&Re&&Re.pivot&&(Re.pivot.rotation.y=1.6,J.closing=Re.pivot);function Xn(m,T,C){let B=sn(Y.x,Y.z,m,T);if(!B){ls("\u8D70\u4E0D\u904E\u53BB");return}J.tgt={path:B,fn:C}}let yi=()=>t.getBoundingClientRect(),fe=new oa,Un=new Nt,li=new Fi(new z(0,1,0),0),An=new z,Sn=(m,T)=>{let C=yi();return Un.set((m-C.left)/C.width*2-1,-((T-C.top)/C.height*2-1)),Un},mn=m=>{let T=m.clone().project(u),C=yi();return{x:(T.x+1)/2*C.width+C.left,y:(1-T.y)/2*C.height+C.top}},Si=new Map,ei=null,Xi=null;t.addEventListener("contextmenu",m=>m.preventDefault());let Jn=null;t.addEventListener("pointerdown",m=>{J.pt=m.pointerType,m.preventDefault();try{t.setPointerCapture(m.pointerId)}catch{}if(m.pointerType==="touch"&&!Jn&&J.mode==="walk"&&!J.ent){let T=yi();if(m.clientX-T.left<T.width*.45){let C=e.getBoundingClientRect();Jn={id:m.pointerId,x:m.clientX,y:m.clientY},J.tgt=null,Wi.className="i3joy on",Wi.style.left=m.clientX-C.left+"px",Wi.style.top=m.clientY-C.top+"px",Wi.firstChild.style.transform="";return}}if(Si.set(m.pointerId,{x:m.clientX,y:m.clientY}),Si.size===2){let[T,C]=[...Si.values()];Xi={d:Math.hypot(T.x-C.x,T.y-C.y),dist:J.distT,ang:Math.atan2(C.y-T.y,C.x-T.x),yaw:J.yawT},ei=null;return}ei={id:m.pointerId,x:m.clientX,y:m.clientY,moved:0,yaw0:J.yawT,pit0:J.pitchT,fp0:J.fpP}}),t.addEventListener("pointermove",m=>{if(Jn&&m.pointerId===Jn.id){let B=m.clientX-Jn.x,Z=m.clientY-Jn.y,ht=Math.hypot(B,Z),vt=50,Tt=Math.min(1,ht/vt)/Math.max(ht,1e-6);J.joy={x:B*Tt,y:Z*Tt},Wi.firstChild.style.transform=`translate(${J.joy.x*vt}px,${J.joy.y*vt}px)`;return}if(Si.has(m.pointerId)&&Si.set(m.pointerId,{x:m.clientX,y:m.clientY}),Xi&&Si.size>=2){let[B,Z]=[...Si.values()];J.distT=ki(Xi.dist*Xi.d/Math.max(20,Math.hypot(B.x-Z.x,B.y-Z.y)),7,40),J.yawT=Xi.yaw-(Math.atan2(Z.y-B.y,Z.x-B.x)-Xi.ang);return}if(!ei||ei.id!==m.pointerId)return;let T=m.clientX-ei.x,C=m.clientY-ei.y;!ei.moved&&Math.hypot(T,C)>8&&(ei.moved=1),ei.moved&&(J.yawT=ei.yaw0-T*.007,J.fp?J.fpP=ki(ei.fp0-C*.005,-1.2,1.2):J.pitchT=ki(ei.pit0+C*.005,.22,1.3))});let ho=m=>{if(Jn&&m.pointerId===Jn.id){Jn=null,J.joy=null,Hn();return}Si.delete(m.pointerId),Si.size<2&&(Xi=null),!(!ei||ei.id!==m.pointerId)&&(ei.moved||fo(m.clientX,m.clientY),ei=null)};t.addEventListener("pointerup",ho),t.addEventListener("pointercancel",ho),t.addEventListener("wheel",m=>{m.preventDefault(),J.fp||(J.distT=ki(J.distT+Math.sign(m.deltaY)*1.6,7,40))},{passive:!1});let El=m=>{if(!document.contains(t)||/input|textarea/i.test(m.target&&m.target.tagName||""))return;let T=m.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(T)&&(J.keys[T]=1,/^[qe]$/.test(T)||(J.tgt=null),m.preventDefault())},uo=m=>{delete J.keys[m.key.toLowerCase()]};document.addEventListener("keydown",El),document.addEventListener("keyup",uo);function Hr(m,T){let C=null,B=1e9;for(let Z of xi){let ht=mn(new z(Z.x,0,Z.z)),vt=mn(new z(Z.x,Z.h+.2,Z.z)),Tt=ht.y-vt.y;if(Tt<6)continue;let zt=Math.max(Tt*.38,26),Mt=Math.abs(m-ht.x);if(Mt<zt&&T>vt.y-10&&T<ht.y+10){let Qe=Mt;Qe<B&&(B=Qe,C=Z)}}return C}function fo(m,T){if(J.mode==="edit"||J.ent)return;let C=Hr(m,T);if(C){let Z=Math.hypot(C.x-Y.x,C.z-Y.z);Ye(C),Z>3&&Xn(C.x+(Y.x-C.x)/Z*1.4,C.z+(Y.z-C.z)/Z*1.4);return}fe.setFromCamera(Sn(m,T),u);let B=fe.intersectObjects(l.children,!0).filter(Z=>Z.object.isMesh&&(Z.object.userData.house||Z.object.userData.shop));if(B.length){let Z=B[0].object.userData;if(Z.house||Z.shop){let ht=$e.find(vt=>vt.h===Z.house&&Z.house||vt.s===Z.shop&&Z.shop);yn(),ht&&Xn(ht.face.x,ht.face.z-ht.inw*.8);return}if(Z.house){let ht=Z.house;ht.own?(rn(s?"\u6211\u7684\u5BB6":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),Xn(ht.door.x,ht.door.z)):(rn(ht.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),Xn(ht.door.x,ht.door.z));return}if(Z.shop){let ht=Z.shop;if(ht.k==="izakaya"){rn(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),Xn(ht.door.x,ht.door.z);return}rn(ht.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),Xn(ht.door.x,ht.door.z);return}}if(yn(),J.pt!=="touch"&&fe.ray.intersectPlane(li,An)){let Z=sn(Y.x,Y.z,An.x,An.z);Z&&(J.tgt={path:Z})}}let ms=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],Al=new Se,po=new Se,vr=new Se;function kh(m){let T=0;for(;T<ms.length-2&&m>=ms[T+1][0];)T++;let C=ms[T],B=ms[T+1],Z=ki((m-C[0])/(B[0]-C[0]),0,1),ht=vt=>Al.set(C[vt]).clone().lerp(po.set(B[vt]),Z);return{zen:ht(1),hor:ht(2),sunC:ht(3),sunI:yl(C[4],B[4],Z),hemiI:yl(C[5],B[5],Z),fog:ht(6),night:yl(C[7],B[7],Z)}}let mo=-1;function Wr(m){let T=kh(m),C=q.attributes.position;for(let Tt=0;Tt<C.count;Tt++){let zt=C.getY(Tt)/300;vr.copy(T.hor).lerp(T.zen,ki((zt+.05)/.55,0,1));let Mt=q.attributes.color.array;Mt[Tt*3]=vr.r,Mt[Tt*3+1]=vr.g,Mt[Tt*3+2]=vr.b}q.attributes.color.needsUpdate=!0,c.color.copy(T.fog),o.setClearColor(T.fog),xt.color.copy(T.sunC),xt.intensity=T.sunI,lt.intensity=T.hemiI,wt.intensity=.2+T.night*.15,lt.color.set(T.night>.5?"#8a9aff":"#dff2ff");let B=(m-6)/12*Math.PI,Z=Math.sin(B);V.position.set(Math.cos(B)*260,Math.max(-40,Z*220),-60),V.material.opacity=ki(Z*3,0,1);let ht=((m+6)%24-6)/12*Math.PI;ct.position.set(-Math.cos(B)*240,Math.max(30,Math.abs(Math.sin(ht))*200),-80),ct.material.opacity=T.night,st.userData.m.opacity=T.night*.9;let vt=T.night;O.forEach(Tt=>{Tt.material.opacity=vt*(Tt.userData.k||.75)}),M.forEach(Tt=>Tt.color.copy(Tt.userData.day).lerp(Tt.userData.night,vt)),pt.color.set("#ffffff").lerp(vr.set("#3a4a8a"),vt*.6),Pt.children.forEach(Tt=>Tt.children.forEach(zt=>zt.material.color.set("#ffffff").lerp(vr.set("#4a4a7a"),vt*.8))),J.night=vt}let xa={get dead(){return J.dead},set dead(m){m&&go()},dispose:go,kind:"island",probe(){let m=T=>{let C=mn(T);return{x:Math.round(C.x),y:Math.round(C.y)}};return{mode:J.mode,fp:J.fp,fpK:+J.fpK.toFixed(2),me:{x:+Y.x.toFixed(2),z:+Y.z.toFixed(2)},calls:o.info.render.calls,tris:o.info.render.triangles,yaw:+J.yaw.toFixed(2),pitch:+J.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(J.night||0).toFixed(2),card:_i.classList.contains("on")?_i.textContent:"",door:Yn.classList.contains("on")?Yn.textContent:"",doorXY:Yn.classList.contains("on")?(()=>{let T=Yn.getBoundingClientRect();return{x:Math.round(T.left+T.width/2),y:Math.round(T.top+T.height/2)}})():null,ent:!!J.ent,myDoor:m(new z(Re.door.x,1.2,Re.door.z-2.8*(Re.f===2?-1:1))),myHouse:m(new z(Re.x,2,Re.z)),npcs:xi.map(T=>Object.assign({id:T.d.id,state:T.state},m(new z(T.x,T.h*.5,T.z))))}},px(m,T,C){let B=mn(new z(m,T,C));return{x:Math.round(B.x),y:Math.round(B.y)}},teleport(m,T){Y.x=m,Y.z=T,J.cam.set(m,1,T)},setYaw(m){J.yaw=J.yawT=m},setPitch(m){J.pitch=J.pitchT=m},setDist(m){J.dist=J.distT=m},setHour(m){R[0][0]=m,mo=-1}};function go(){if(!J.dead){if(J.dead=!0,cancelAnimationFrame(J.raf),clearTimeout(we),s)try{n.save&&n.save(r,!0)}catch{}document.removeEventListener("keydown",El),document.removeEventListener("keyup",uo),e.removeEventListener("click",ne),window.removeEventListener("resize",Hn),js.forEach(m=>m.remove()),l.traverse(m=>{m.geometry&&m.geometry.dispose(),(m.material?Array.isArray(m.material)?m.material:[m.material]:[]).forEach(C=>{C.map&&C.map.dispose(),C.dispose()})});try{o.dispose(),o.forceContextLoss()}catch{}}}let qi=0,cn=0,Ls=0,Kn=1,xo=1,tr=0,_a=0,_o=1e9,yo=1e9,vo=0,ya=!0,Ds=new z,Yi=new z,Ns=new z,Xr=new z,Ki=new z,bo=new z;function Gh(){let m=t.getBoundingClientRect(),T=Math.max(1,t.clientWidth),C=Math.max(1,t.clientHeight),B=Math.min(2,window.devicePixelRatio||1),Z=Math.round(ki(1.75-((m.height||C)-380)/440*.6,1.15,1.75)*20)/20;Z!==Bt&&(Bt=Z,Ct.forEach(ht=>{ht.h=ht.h0*Bt,ht.w=ht.h*ht.ar})),!(T===qi&&C===cn&&B===Ls)&&(qi=T,cn=C,Ls=B,Kn=ki(m.width*B/T,.5,2),Kn=Math.min(Kn,Math.sqrt(22e5/(T*C))),xo=Math.max(Math.min(Kn,.9),Kn*.8),o.setPixelRatio(Kn),o.setSize(T,C,!1),u.aspect=T/C,u.updateProjectionMatrix())}function ji(m){if(J.dead)return;if(!document.contains(t)){go();return}J.raf=requestAnimationFrame(ji);let T=Math.min(.1,(m-J.last)/1e3);J.last=m,J.t+=T;let C=J.t;if(Gh(),tr+=T,_a++,tr>1.5){let rt=tr/_a>.03;rt&&o.shadowMap.enabled?(o.shadowMap.enabled=!1,l.traverse(Yt=>{Yt.material&&(Array.isArray(Yt.material)?Yt.material:[Yt.material]).forEach(Ae=>{Ae.needsUpdate=!0})})):rt&&Kn>xo+.01&&(Kn=Math.max(xo,Kn*.9),o.setPixelRatio(Kn),o.setSize(qi,cn,!1)),tr=0,_a=0}let B=ot();Math.abs(B-mo)>.02&&(Wr(B),mo=B,it(),ya=!0),vo-=T,(ya||vo<=0||Math.hypot(J.cam.x-_o,J.cam.z-yo)>.04)&&(o.shadowMap.needsUpdate=!0,_o=J.cam.x,yo=J.cam.z,vo=.25,ya=!1);let Z=J.keys;Z.q&&(J.yawT+=T*1.8),Z.e&&(J.yawT-=T*1.8),J.yaw+=(J.yawT-J.yaw)*Math.min(1,T*9),J.pitch+=(J.pitchT-J.pitch)*Math.min(1,T*9),J.dist+=(J.distT-J.dist)*Math.min(1,T*6);let ht=Math.sin(J.yaw),vt=Math.cos(J.yaw);if(Ds.set(-ht,0,-vt),Yi.set(vt,0,-ht),Y.moving=!1,J.mode==="walk"&&!J.ent){let rt=0,Yt=0,Ae=1e9,hn=(Z.arrowright||Z.d?1:0)-(Z.arrowleft||Z.a?1:0),Fn=(Z.arrowup||Z.w?1:0)-(Z.arrowdown||Z.s?1:0);if(J.joy&&Math.hypot(J.joy.x,J.joy.y)>.15)rt=Yi.x*J.joy.x-Ds.x*J.joy.y,Yt=Yi.z*J.joy.x-Ds.z*J.joy.y,Ae=5*T*Math.min(1,Math.hypot(J.joy.x,J.joy.y));else if(hn||Fn)rt=Yi.x*hn+Ds.x*Fn,Yt=Yi.z*hn+Ds.z*Fn;else if(J.tgt){let Cn=J.tgt.path[0];if(Cn){let dn=Cn[0]-Y.x,Pn=Cn[1]-Y.z,On=Math.hypot(dn,Pn);On<.1?J.tgt.path.shift():(rt=dn,Yt=Pn,Ae=On)}else{let dn=J.tgt.fn;J.tgt=null,dn&&dn()}}let tn=Math.hypot(rt,Yt);if(tn>.01){let Cn=Math.min(5*T,Ae),dn=rt/tn*Cn,Pn=Yt/tn*Cn,On=!1;if(!Dt(Y.x+dn,Y.z+Pn,.3))Y.x+=dn,Y.z+=Pn,On=!0;else if(!Dt(Y.x+dn,Y.z,.3))Y.x+=dn,On=!0;else if(!Dt(Y.x,Y.z+Pn,.3))Y.z+=Pn,On=!0;else for(let pn of[.6,-.6,1.2,-1.2]){let ci=Math.cos(pn),Di=Math.sin(pn),Us=(dn*ci-Pn*Di)*.8,br=(dn*Di+Pn*ci)*.8;if(!Dt(Y.x+Us,Y.z+br,.3)){Y.x+=Us,Y.z+=br,On=!0;break}}if(On){J.mvz=Pn/Math.max(1e-6,Math.hypot(dn,Pn)),Y.moving=!0,Y.ph+=T*10;let pn=rt/tn*Yi.x+Yt/tn*Yi.z;Math.abs(pn)>.2&&(Y.face=pn>0?1:-1)}else if(J.tgt&&(J.tgt.stuck=(J.tgt.stuck||0)+T,J.tgt.stuck>.5)){let pn=J.tgt.fn;J.tgt=null,pn&&pn()}J.talk&&Math.hypot(J.talk.x-Y.x,J.talk.z-Y.z)>9&&yn()}}if(ln=null,J.mode==="walk"&&!J.ent){let rt=2.6;for(let Yt of $e){let Ae=Math.hypot(Y.x-Yt.face.x,Y.z-Yt.face.z);Ae<rt&&(rt=Ae,ln=Yt)}ln&&(ln.kind==="home"||ln.kind==="shop")&&rt<.8&&Y.moving&&(J.mvz||0)*ln.inw>.5&&vn(ln)}if(ln&&!J.ent){let rt=ln,Yt=mn(new z(rt.face.x,rt.s?3.1:2.95,rt.face.z+rt.inw*.5)),Ae=yi();Yn.textContent=rt.label,Yn.classList.toggle("off",rt.kind==="npc"||rt.kind==="closed"),Yn.style.left=Yt.x-Ae.left+"px",Yn.style.top=Yt.y-Ae.top+"px",Yn.classList.add("on")}else Yn.classList.remove("on");if(J.ent){let rt=J.ent,Yt=rt.d;rt.t+=T,Yt.pivot&&(Yt.pivot.rotation.y=Math.min(1,rt.t/.45)*1.6);let Ae=ki((rt.t-.2)/.75,0,1),hn=Yt.face.x,Fn=Yt.face.z+Yt.inw*1.1;Y.x=yl(rt.x0,hn,Ae),Y.z=yl(rt.z0,Fn,Ae),Y.moving=Ae>0&&Ae<1,Y.moving&&(Y.ph+=T*10),Y.mat.opacity=1-ki((rt.t-.55)/.45,0,1),Y.tag&&(Y.tag.material.opacity=Y.mat.opacity),rt.t>1.05&&!rt.done&&(rt.done=1,Wn(Yt.kind))}J.closing&&(J.closing.rotation.y=Math.max(0,J.closing.rotation.y-T*2.4),J.closing.rotation.y<=0&&(J.closing=null)),Y.y=0;for(let rt of ce)if(+(rt.own?r.ex:rt.ex).porch&&Math.abs(Y.x-rt.x)<Rt/2+.3){let Yt=(Y.z-rt.z)*(rt.f===2?-1:1);Yt>1.42&&Yt<3.15&&(Y.y=.3)}for(let rt of xi){if(rt.moving=!1,rt.state==="talk"){rt.face=(Y.x-rt.x)*Yi.x+(Y.z-rt.z)*Yi.z>0?1:-1;continue}if(rt.state==="idle"){rt.t-=T,rt.t<=0&&Is(rt);continue}let Yt=rt.tx-rt.x,Ae=rt.tz-rt.z,hn=Math.hypot(Yt,Ae);if(hn<.1){rt.state="idle",rt.t=Math.random()<.3?kr(3,8):kr(.2,1);continue}let Fn=Math.min(hn,rt.sp*T);rt.x+=Yt/hn*Fn,rt.z+=Ae/hn*Fn,rt.moving=!0,rt.ph+=T*(4+rt.sp*3);let tn=Yt*Yi.x+Ae*Yi.z;Math.abs(tn)>.05&&(rt.face=tn>0?1:-1)}let Tt=Y.x,zt=Y.z;J.mode==="edit"&&(Tt=Re.x,zt=Re.z+(Re.f===2?-1:1)*3.2),J.cam.x+=(Tt-J.cam.x)*Math.min(1,T*8),J.cam.z+=(zt-J.cam.z)*Math.min(1,T*8),J.cam.y+=((J.mode==="edit"?1.8:1.1)-J.cam.y)*Math.min(1,T*4);let Mt=qi/cn,Qe=J.dist*(Mt<1.4?1.4/Mt:1);Ns.set(J.cam.x+ht*Math.cos(J.pitch)*Qe,J.cam.y+Math.sin(J.pitch)*Qe,J.cam.z+vt*Math.cos(J.pitch)*Qe),Ns.y<.8&&(Ns.y=.8),J.fpK+=((J.fp&&J.mode==="walk"&&!J.ent?1:0)-J.fpK)*Math.min(1,T*5);let Rn=J.fpK,wi=Math.cos(J.fpP),Li=Math.sin(J.fpP);Xr.set(J.cam.x,Y.y+1.55,J.cam.z),Ki.set(J.cam.x,J.cam.y+.4,J.cam.z),bo.set(Xr.x-ht*wi*10,Xr.y+Li*10,Xr.z-vt*wi*10),Ns.lerp(Xr,Rn),Ki.lerp(bo,Rn),Y.grp.visible=Rn<.5,Y.sh.visible=Rn<.5,Y.tag&&(Y.tag.visible=Rn<.5),u.position.copy(Ns),u.lookAt(Ki),W.position.copy(Ns),xt.position.set(J.cam.x+30,60,J.cam.z+22),xt.target.position.set(J.cam.x,0,J.cam.z),J.night>.6&&xt.position.set(J.cam.x-25,50,J.cam.z+30);let qr=Math.atan2(Ns.x-J.cam.x,Ns.z-J.cam.z);for(let rt of Ct){let Yt=rt.w,Ae=rt.h,hn=rt.moving,Fn=Math.sin(rt.ph),tn=hn?Math.abs(Fn)*.06:0,Cn=hn?Fn*.06:Math.sin(C*1.6+rt.ph)*.01,dn=hn?1+Math.cos(rt.ph*2)*.025:1+Math.sin(C*1.6+rt.ph)*.008;rt.grp.position.set(rt.x,(rt.y||0)+tn,rt.z),rt.m.rotation.set(0,qr,Cn*rt.face),rt.m.scale.set(Yt*rt.face*(2-dn),Ae*dn,1),rt.sh.position.set(rt.x,(rt.y||0)+.07,rt.z),rt.sh.scale.set(Yt*.7,Yt*.4,1),rt.tag&&rt.tag.position.set(rt.x,(rt.y||0)+Ae+.35,rt.z),rt.bub&&(rt.bub.visible=rt!==J.talk,rt.bub.position.set(rt.x,Ae+.5+Math.sin(C*2.3+rt.ph)*.06,rt.z))}le.offset.set(C*.004,C*.006),ze.forEach((rt,Yt)=>{Yt===0?rt.rotation.z=C*.3:rt.scale.y=1+Math.sin(C*6)*.08}),Pt.children.forEach(rt=>{rt.userData.a+=T*.004,rt.position.x=Math.cos(rt.userData.a)*rt.userData.R,rt.position.z=Math.sin(rt.userData.a)*rt.userData.R,rt.lookAt(0,rt.position.y,0)});let bt=Pt.userData.boat;bt&&(bt.position.y=-.2+Math.sin(C*1.2)*.08,bt.rotation.z=Math.sin(C*.9)*.04),o.render(l,u)}return J.raf=requestAnimationFrame(ji),xa}var Ii=(i,t)=>i+Math.random()*(t-i),os=(i,t,e)=>Math.max(t,Math.min(e,i));var As=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},In=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Lf=new Uint8Array(256).map((i,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),gr=i=>"\xA5"+Math.round(i).toLocaleString("en-US"),Tl=[[10,8,0],[12,9,5e4],[14,10,15e4],[16,12,4e5]],oi=3.1,ge=10,Et=8,Gi=4,Vi=6,Hi=5,Rs,Cs,Nf,Uf,Ff,um,Bh,gi,zh,wl;function fm(i){let t=Tl[os(i|0,0,Tl.length-1)];ge=t[0],Et=t[1],Gi=ge/2-1,Vi=ge/2+1,Hi=ge/2,Rs=-10,Cs=ge+10,Nf=Et+9,Uf=-4,Ff=ge+4,um=Et+1,Bh=Et+4,gi={x:Hi+2.3,z:Et+1.4},zh=Math.floor(gi.x),wl=new Set;for(let e=Et;e<Bh+1;e++)for(let n=Gi;n<Vi;n++)wl.add(n+","+e);wl.add(zh+","+(Et+1))}fm(0);var zf=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function Sl(i){let t=0,e={};for(let[n]of i.it||[]){let s=Ue[n];s&&(e[n]=(e[n]||0)+1,t+=e[n]<=2?s.c:s.c*.4)}return i.fl&&i.fl!=="wood"&&(t+=6),i.wa&&i.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function Of(i){let t=0;return zf.forEach((e,n)=>{i>=e[0]&&(t=n)}),t}var Bf=i=>Math.min(8e4,3e3+i*400);function dm(i){return{v:1,name:i||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function U1(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function F1(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var Df={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},O1=["daruma","maneki","beer","vase","pine","sake"],pm=`
.h3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.h3b{min-width:92px;min-height:76px;border-radius:20px;border:3px solid #2a1810;background:#fff6e0;color:#3a1e0c;font-weight:900;font-size:19px;line-height:1.15;padding:6px 10px;box-shadow:0 5px 0 #0007;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.h3b i{font-style:normal;font-size:30px;line-height:1}
.h3b:active{transform:translateY(3px);box-shadow:0 2px 0 #0007}
.home3 .twtop{background:none}
.h3tb{flex:none;min-width:44px;min-height:44px;border:0;background:transparent;color:#fff3d6;font-size:28px;line-height:1;padding:0 4px;border-radius:50%;text-shadow:0 2px 4px #000a;cursor:pointer}
.h3tb.on{background:#fff3d633}
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
`,B1=pm;function z1(i){fm(i.data&&i.data.sz);let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.kind==="home",a=!!i.island,o=i.data||dm();if(o.it=(o.it||[]).filter(h=>Ue[h[0]]),o.inv=o.inv||{},o.fo=o.fo||{wood:1},o.wo=o.wo||{tsuchi:1},o.gc=o.gc||{},!document.getElementById("h3css")){let h=document.createElement("style");h.id="h3css",h.textContent=pm,document.head.appendChild(h)}let l=new ro({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});l.setClearColor(1709366,1);let c=new Ar;c.fog=new jr(3811400,26,80);let u=new ni(40,2,.2,500),p=new sa,d=(h,x)=>p.load(h,b=>{b.colorSpace=Qn,b.anisotropy=4,x&&x(b)}),f=new mi(250,24,16);{let h=[],x=f.attributes.position,b=new Se("#121032"),v=new Se("#7a4058"),P=new Se("#3a2350"),D=new Se;for(let $=0;$<x.count;$++){let j=x.getY($)/250;j>.25?D.copy(P).lerp(b,os((j-.25)/.55,0,1)):D.copy(v).lerp(P,os((j+.05)/.3,0,1)),h.push(D.r,D.g,D.b)}f.setAttribute("color",new De(h,3))}let g=new mt(f,new Je({vertexColors:!0,side:si,fog:!1,depthWrite:!1}));g.renderOrder=-10,c.add(g);{let h=[],x=As(11);for(let v=0;v<300;v++){let P=x()*Math.PI*2,D=.2+x()*1.2,$=230;h.push(Math.cos(P)*Math.cos(D)*$,Math.sin(D)*$,Math.sin(P)*Math.cos(D)*$)}let b=new Dn;b.setAttribute("position",new De(h,3)),g.add(new $a(b,new ta({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let h=be(128,128,b=>{let v=b.createRadialGradient(64,64,20,64,64,64);v.addColorStop(0,"rgba(255,246,214,1)"),v.addColorStop(.5,"rgba(255,240,200,1)"),v.addColorStop(.52,"rgba(255,230,180,.25)"),v.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=v,b.fillRect(0,0,128,128)}),x=new di(new ii({map:h,fog:!1,depthWrite:!1}));x.scale.set(40,40,1),x.position.set(-90,120,-170),g.add(x)}let I=new Lr(12103408,5914696,1.15);c.add(I);let _=(()=>{let h=new Date;return i.hour!=null?i.hour:h.getHours()+h.getMinutes()/60})(),y=_<5||_>=19.5?1:_<6.5?(6.5-_)/1.5:_>17.5?(_-17.5)/2:0,S=new Dr(16769208,.7);S.position.set(-6,12,10),c.add(S);let L=new aa(16756832,14,13,1.3);L.position.set(ge*.3,2.7,Et*.45),c.add(L);let E=new aa(16756832,14,13,1.3);E.position.set(ge*.72,2.7,Et*.55),c.add(E);let O=new aa(16752720,10,9,1.4);O.position.set(Hi,2.4,Et+1.4),c.add(O);let N=be(64,64,h=>{let x=h.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(0,0,0,.7)"),x.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=x,h.fillRect(0,0,64,64)}),M=(h,x,b)=>{let v=h.clone();return v.wrapS=v.wrapT=Gs,v.repeat.set(x,b),v.needsUpdate=!0,v};function A(h,x,b,v,P,D,$,j){let tt=new mt(new bn(h,x,b),v);return tt.position.set(P,D,$),(j||c).add(tt),tt}function q(h,x,b,v,P,D,$){let j=new di(new ii({map:ma,blending:bs,transparent:!0,depthWrite:!1,opacity:P}));return $&&j.material.color.set($),j.scale.set(v,v,1),j.position.set(h,x,b),(D||c).add(j),j}let k={wood:()=>be(256,256,(h,x,b)=>{let v=As(4);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(60,30,10,.35)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<6;$++)h.fillStyle="rgba(90,50,20,.12)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),dark:()=>be(256,256,(h,x,b)=>{let v=As(8);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(0,0,0,.4)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<5;$++)h.fillStyle="rgba(255,220,180,.05)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),tatami:()=>be(256,256,(h,x,b)=>{for(let v=0;v<2;v++){let P=v*128;h.fillStyle="#c4c078",h.fillRect(P,0,128,b);for(let D=0;D<b;D+=3)h.fillStyle=D%6?"#b8b46c":"#cfcb84",h.fillRect(P,D,128,1);h.fillStyle="#2a3a2a",h.fillRect(P,0,6,b),h.fillRect(P+122,0,6,b)}}),stone:()=>be(256,256,(h,x,b)=>{h.fillStyle="#5a5250",h.fillRect(0,0,x,b);let v=As(6);for(let P=0;P<4;P++)for(let D=0;D<4;D++){let $=v()*18|0;h.fillStyle=`rgb(${120+$},${112+$},${104+$})`,h.fillRect(D*64+3+P%2*8,P*64+3,58,58)}}),light:()=>be(256,256,(h,x,b)=>{let v=As(12);for(let P=0;P<8;P++){let D=v();h.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,h.fillRect(0,P*32,x,32),h.fillStyle="rgba(120,80,40,.25)",h.fillRect(0,P*32,x,2),h.fillRect(v()*256|0,P*32,2,32);for(let $=0;$<6;$++)h.fillStyle="rgba(160,110,60,.1)",h.fillRect(v()*x,P*32+6+v()*20,40+v()*60,2)}}),carpetf:()=>be(256,256,(h,x,b)=>{h.fillStyle="#e8dcc4",h.fillRect(0,0,x,b);let v=As(14);for(let P=0;P<3e3;P++)h.fillStyle=v()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",h.fillRect(v()*x,v()*b,2,2)}),check:()=>be(256,256,(h,x,b)=>{for(let v=0;v<4;v++)for(let P=0;P<4;P++)h.fillStyle=(P+v)%2?"#2a3a36":"#d8c8a0",h.fillRect(P*64,v*64,64,64);h.strokeStyle="rgba(0,0,0,.2)",h.lineWidth=2;for(let v=0;v<=4;v++)h.beginPath(),h.moveTo(v*64,0),h.lineTo(v*64,b),h.moveTo(0,v*64),h.lineTo(x,v*64),h.stroke()})};function W(h,x){let v=Math.round(x*64),P=Math.round(oi*64);return be(v,P,D=>{let $=As(x*7|0);if(h==="plank")for(let tt=0;tt<v;tt+=22){let It=$();D.fillStyle=`hsl(28,${36+It*8}%,${40+It*8}%)`,D.fillRect(tt,0,22,P),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(tt,0,2,P)}else if(h==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,v,P);for(let tt=0;tt<300;tt++)D.fillStyle=$()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect($()*v,$()*P,8,8);D.fillStyle="#5a2a14";for(let tt=0;tt<v;tt+=128)D.fillRect(tt,0,8,P)}else if(h==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,v,P),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let tt=0;tt<P;tt+=24)for(let It=tt/24%2*12;It<v;It+=24)D.beginPath(),D.arc(It,tt,9,Math.PI,0),D.stroke()}else if(h==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/900;tt++){let It=$()*v,Ve=$()*P;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][tt%3];for(let Te=0;Te<5;Te++){let he=Te/5*Math.PI*2;D.beginPath(),D.ellipse(It+Math.cos(he)*4,Ve+Math.sin(he)*4,3.5,2,he,0,7),D.fill()}}}else if(h==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/80;tt++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect($()*v,$()*P,2,2)}else if(h==="stripe")for(let tt=0;tt<v;tt+=24)D.fillStyle=tt/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(tt,0,24,P);else if(h==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,v,P);for(let tt=12;tt<P;tt+=30)for(let It=tt/30%2*16;It<v;It+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(It+tt)%3];for(let Ve=0;Ve<5;Ve++){let Te=Ve/5*Math.PI*2;D.beginPath(),D.arc(It+Math.cos(Te)*4,tt+Math.sin(Te)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(It,tt,2,0,7),D.fill()}}else if(h==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/70;tt++)D.fillStyle=$()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect($()*v,$()*P,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,v,P);for(let tt=0;tt<v*P/60;tt++)D.fillStyle=$()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect($()*v,$()*P,3,3);D.fillStyle="#6b3f1f";for(let tt=0;tt<v;tt+=64*2.5)D.fillRect(tt,0,10,P)}let j=P-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,j,v,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let tt=0;tt<v;tt+=28)D.fillRect(tt,j,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,j-6,v,8),D.fillRect(0,0,v,10)})}let Q=c.children.length,ut=be(256,256,(h,x,b)=>{h.fillStyle="#4a4246",h.fillRect(0,0,x,b);let v=As(3);for(let P=0;P<4;P++)for(let D=0;D<4;D++){let $=(v()*16|0)-8;h.fillStyle=`rgb(${96+$},${86+$},${84+$})`,h.fillRect(D*64+2,P*64+2,60,60)}}),V=be(256,256,(h,x,b)=>{h.fillStyle="#2c2830",h.fillRect(0,0,x,b);let v=As(5);for(let P=0;P<700;P++){let D=34+(v()*22|0);h.fillStyle=`rgb(${D},${D-3},${D+4})`,h.fillRect(v()*x,v()*b,2,2)}});{let h=new mt(new Ke(600,600),jt("#1c1826"));h.rotation.x=-Math.PI/2,h.position.y=-.04,c.add(h)}{let h=Cs-Rs+30,x=(Rs+Cs)/2,b=new mt(new Ke(h,6.2),jt("#ffffff",{map:M(ut,h/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(x,.005,Et+3.1),c.add(b);let v=new mt(new Ke(h,6),jt("#ffffff",{map:M(V,h/6,1)}));v.rotation.x=-Math.PI/2,v.position.set(x,0,Et+9.2),c.add(v);for(let D=Rs-14;D<Cs+14;D+=3.4)A(1.7,.02,.14,xn("#cfc8b4"),D,.02,Et+9.2);A(h,.16,.2,jt("#7a6e66"),x,.08,Et+6.15);let P=new mt(new Ke(h,5),jt("#ffffff",{map:M(ut,h/3,5/3)}));P.rotation.x=-Math.PI/2,P.position.set(x,.005,Et+14.7),c.add(P)}let at=c.children.length,ct=new gn({color:"#ffffff"}),st=new mt(new Ke(ge,Et),ct);st.rotation.x=-Math.PI/2,st.position.set(ge/2,.02,Et/2),c.add(st);function Pt(h){ct.map&&ct.map.dispose();let x=(k[h]||k.wood)();x.wrapS=x.wrapT=Gs,x.repeat.set(ge/2,Et/2),ct.map=x,ct.needsUpdate=!0}A(ge+.4,.12,Et+.4,jt("#2a1810"),ge/2,-.075,Et/2);let lt={back:new gn,left:new gn,right:new gn,front:new gn},wt=be(256,200,(h,x,b)=>{h.fillStyle="#5a3a24",h.fillRect(0,0,x,b);for(let v=0;v<x;v+=16)h.fillStyle=v%32?"#4a2e1c":"#6a4630",h.fillRect(v,0,14,b);h.fillStyle="#2a1810",h.fillRect(0,b-40,x,40)}),xt=new gn({map:M(wt,3,1)}),Ht=jt("#3a2214"),le={};function pt(h,x,b,v,P,D){let $=new ve;$.position.set(v,0,P),c.add($);let j=new mt(new bn(x,oi,b),D);return j.position.y=oi/2,$.add(j),le[h]=le[h]||[],le[h].push($),$}pt("back",ge+.4,.2,ge/2,-.1,[Ht,Ht,Ht,Ht,lt.back,xt]),pt("left",.2,Et,-.1,Et/2,[lt.left,xt,Ht,Ht,Ht,Ht]),pt("right",.2,Et,ge+.1,Et/2,[xt,lt.right,Ht,Ht,Ht,Ht]);let Zt=be(640,200,(h,x,b)=>{h.fillStyle="#6a4228",h.fillRect(0,0,x,b);for(let P=0;P<x;P+=14)h.fillStyle=P%28?"#5a3620":"#74482c",h.fillRect(P,0,12,b);let v=P=>{h.fillStyle="#ffd98a",h.fillRect(P,56,128,70),h.strokeStyle="#2a1408",h.lineWidth=6,h.strokeRect(P,56,128,70),h.lineWidth=3;for(let D=1;D<4;D++)h.beginPath(),h.moveTo(P+D*32,56),h.lineTo(P+D*32,126),h.stroke();h.beginPath(),h.moveTo(P,91),h.lineTo(P+128,91),h.stroke()};v(64),v(448),h.fillStyle="#2a1810",h.fillRect(0,b-40,x,40)}),ie=new Je({map:Zt}),xe=(h,x)=>{let b=new Je({map:Zt.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(x-h,1),b.map.offset.set(h,0),b};pt("front",Gi+.2,.2,(Gi-.2)/2,Et+.1,[Ht,Ht,Ht,Ht,xe(0,(Gi+.2)/(ge+.4)),lt.front]),pt("front",ge-Vi+.2,.2,(Vi+ge+.2)/2,Et+.1,[Ht,Ht,Ht,Ht,xe((Vi+.2)/(ge+.4),1),lt.front]);{let h=new ve;h.position.set(Hi,0,Et+.1),c.add(h),A(Vi-Gi,oi-2.35,.2,jt("#4a2a14"),0,2.35+(oi-2.35)/2,0,h),le.front.push(h)}function Jt(h){let x={back:ge+.4,left:Et,right:Et,front:ge+.4};for(let b in lt){let v=lt[b];v.map&&v.map.dispose(),v.map=W(h,x[b]),v.needsUpdate=!0}}let se=new ve;c.add(se),le.front.push(se);let He=jt("#3a2214");A(.22,2.45,.34,He,Gi+.05,1.22,Et+.14,se),A(.22,2.45,.34,He,Vi-.05,1.22,Et+.14,se),A(Vi-Gi+.4,.24,.38,He,Hi,2.42,Et+.14,se);let _e=new ve;_e.position.set(Hi,2.32,Et+.3),se.add(_e);let ze=be(256,140,(h,x,b)=>{for(let v=0;v<3;v++){let P=4+v*84;h.fillStyle="#23315c",h.fillRect(P,0,80,b-6),h.fillStyle="rgba(0,0,0,.22)",h.fillRect(P,b-16,80,10)}h.fillStyle="#f3e6c8",h.textAlign="center",h.textBaseline="middle",h.font=`900 50px ${$n}`,["\u55B6","\u696D","\u4E2D"].forEach((v,P)=>h.fillText(v,44+P*84,56))}),We=new mt(new Ke(1.95,1.05),new Je({map:ze,transparent:!0,side:Vn,alphaTest:.05}));We.position.y=-.52,_e.add(We);let St=document.createElement("canvas");St.width=640,St.height=140;let kt=new ea(St);kt.colorSpace=Qn,kt.anisotropy=4;function Rt(){let h=St.getContext("2d"),x=640,b=140;h.clearRect(0,0,x,b),h.fillStyle="#f3e2bd",h.strokeStyle="#2a1810",h.lineWidth=10,Br(h,6,6,x-12,b-12,16),h.fill(),h.stroke(),h.fillStyle="#3a1e0c",h.textAlign="center",h.textBaseline="middle";let v=72,P=o.name||"";for(h.font=`900 ${v}px ${$n}`;h.measureText(P).width>x-60&&v>24;)v-=2,h.font=`900 ${v}px ${$n}`;h.fillText(P,x/2,b/2+4),kt.needsUpdate=!0}Rt();{let h=new mt(new bn(3.6,.76,.12),[He,He,He,He,new Je({map:kt}),He]);h.position.set(Hi,2.86,Et+.34),se.add(h)}let Vt=[];for(let h of[Gi-.45,Vi+.45]){let x=new ve;x.position.set(h,1.95,Et+.45),se.add(x);let b=new mt(new mi(.28,16,12),xn("#e2452f"));b.scale.y=1.3,x.add(b),A(.26,.06,.26,xn("#2a1810"),0,.38,0,x),A(.26,.06,.26,xn("#2a1810"),0,-.38,0,x),Vt.push(q(0,0,.12,2.3,.55,x))}let Ut=new ve;c.add(Ut);{let h=be(128,128,(D,$,j)=>{D.fillStyle="#2c3044",D.fillRect(0,0,$,j);for(let tt=0;tt<j;tt+=16){D.fillStyle="#3a4058",D.fillRect(0,tt,$,3);for(let It=tt/16%2*16;It<$;It+=32)D.fillStyle="#20242f",D.fillRect(It,tt,2,16)}}),x=new gn({map:M(h,6,3)}),b=Math.hypot(Et/2+.9,1.6);for(let D of[-1,1]){let $=new mt(new bn(ge+1.6,.14,b),x);$.position.set(ge/2,oi+1.5,Et/2+D*(Et/4+.45)),$.rotation.x=D*Math.atan2(1.6,Et/2+.9),Ut.add($)}let v=new mt(new bn(ge+1.7,.2,.3),jt("#1c1f2a"));v.position.set(ge/2,oi+2.32,Et/2),Ut.add(v);for(let D of[-.2,ge+.2]){let $=new Dn;$.setAttribute("position",new De([D,oi,-.2,D,oi,Et+.2,D,oi+2.32,Et/2,D,oi,-.2,D,oi+.7,-.9,D,oi+2.32,Et/2,D,oi,Et+.2,D,oi+.7,Et+.9,D,oi+2.32,Et/2],3)),$.computeVertexNormals(),Ut.add(new mt($,new gn({color:"#4a2e1c",side:Vn})))}for(let D of[-.1,Et+.1]){let $=new mt(new bn(ge+.4,1,.2),xt);$.position.set(ge/2,oi+.5,D),Ut.add($)}let P=new mt(new bn(ge+1.4,.18,1.3),jt("#2c3044"));P.position.set(ge/2,oi+.72,Et+.75),P.rotation.x=.25,Ut.add(P)}let Ne=c.children.length,ce=[21,33].map(h=>be(128,256,(x,b,v)=>{let P=As(h);x.fillStyle="#1b1636",x.fillRect(0,0,b,v);for(let D=0;D<16;D++)for(let $=0;$<8;$++)x.fillStyle=P()<.33?P()<.5?"#ffd98a":"#ffbe68":"#272043",x.fillRect($*16+3,D*16+3,10,10)})),Xe=[];function qe(h,x,b,v,P,D){let $=x-h,j=(h+x)/2,tt=new ve;tt.position.set(j,0,0),c.add(tt),Xe.push(tt),A($-.2,b,Et+1,jt(v),0,b/2,Et/2-.4,tt);let It=be(Math.round($*40),Math.round(b*40),(he,Ze,vi)=>{he.fillStyle=v,he.fillRect(0,0,Ze,vi);for(let cs=0;cs<Ze;cs+=12)he.fillStyle="rgba(0,0,0,.12)",he.fillRect(cs,0,2,vi);he.fillStyle="#ffcf7a",he.fillRect(Ze*.18,vi-2.2*40,Ze*.64,1.6*40),he.strokeStyle="#2a1408",he.lineWidth=4,he.strokeRect(Ze*.18,vi-2.2*40,Ze*.64,1.6*40);for(let cs=1;cs<4;cs++)he.beginPath(),he.moveTo(Ze*.18+Ze*.16*cs,vi-2.2*40),he.lineTo(Ze*.18+Ze*.16*cs,vi-.6*40),he.stroke();b>4&&(he.fillStyle="#ffd98a",he.fillRect(Ze*.25,20,Ze*.2,40),he.fillRect(Ze*.55,20,Ze*.2,40))}),Ve=new mt(new Ke($-.2,b),new Je({map:It}));Ve.position.set(0,b/2,Et+.11),tt.add(Ve);let Te=new mt(new bn($+.2,.2,1.4),jt("#2c3044"));if(Te.position.set(0,Math.min(b,3.1),Et+.7),Te.rotation.x=.25,tt.add(Te),P){let he=be(256,120,(vi,cs,Xh)=>{for(let Ni=0;Ni<3;Ni++)vi.fillStyle=D,vi.fillRect(4+Ni*84,0,80,Xh-6);vi.fillStyle="#f8ecd8",vi.textAlign="center",vi.textBaseline="middle",vi.font=`900 46px ${$n}`,[...P].forEach((Ni,Yr)=>vi.fillText(Ni,44+Yr*84,52))}),Ze=new mt(new Ke(1.8,.85),new Je({map:he,transparent:!0,side:Vn}));Ze.position.set(0,2.1,Et+.5),tt.add(Ze)}q(0,1.2,Et+.6,3.5,.35,tt)}qe(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),qe(-13,-6.6,3.4,"#3a4a4a","",""),qe(ge+.3,ge+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),qe(ge+6.4,ge+13,5.4,"#3a3a5a","","");{let h=As(17);for(let x=-40;x<60;x+=7+h()*5){let b=8+h()*18,v=6+h()*5,P=new mt(new bn(v,b,6),[xn("#1c1736"),xn("#1c1736"),xn("#18132e"),xn("#18132e"),xn("#ffffff",{map:M(ce[h()*2|0],v/5,b/6)}),xn("#1c1736")]);P.position.set(x,b/2,-12-h()*6),c.add(P)}for(let x=-40;x<60;x+=7+h()*6){let b=5+h()*10,v=5+h()*5,P=new mt(new bn(v,b,6),[xn("#1c1736"),xn("#1c1736"),xn("#18132e"),xn("#18132e"),xn("#ffffff",{map:M(ce[h()*2|0],v/5,b/6)}),xn("#1c1736")]);P.position.set(x,b/2,Et+22+h()*4),P.rotation.y=Math.PI,c.add(P)}}let nn=[];function X(h,x){let b=new ve;b.position.set(h,0,x),c.add(b),A(.3,.14,.3,jt("#3a3030"),0,.07,0,b),A(.11,4,.11,jt("#2b2422"),0,2,0,b),A(.7,.09,.09,jt("#2b2422"),0,4,0,b);let v=A(.44,.44,.44,xn("#ffe2a6"),0,3.78,0,b);nn.push(q(0,3.78,0,4.5,.55,b));let P=new mt(new Ke(6,6),new Je({map:ma,blending:bs,transparent:!0,depthWrite:!1,opacity:.28}));P.rotation.x=-Math.PI/2,P.position.y=.03,b.add(P)}X(-3.2,Et+5.7),X(ge+3.2,Et+5.7),X(-12,Et+5.7),X(ge+12,Et+5.7);let Re=[];function Fe(h,x,b){let v=new ve;v.position.set(h,0,x),v.scale.setScalar(b),c.add(v);let P=new mt(new Ri(.16,.26,2.6,7),jt("#4a3024"));P.position.y=1.3,v.add(P);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([$,j,tt,It],Ve)=>{let Te=new mt(new vs(It,1),new gn({color:D[Ve%3],flatShading:!0}));Te.position.set($,j,tt),v.add(Te)}),Re.push({x:h,z:x,y:3.2*b,r:2*b})}Fe(-6,Et+16.5,1.1),Fe(3,Et+17,1),Fe(13,Et+16.6,1.15),Fe(-14,Et+3.5,.95),Fe(ge+15,Et+3.4,1);{let h=be(64,128,(v,P,D)=>{v.fillStyle="#c23a2a",v.fillRect(0,0,P,D),v.fillStyle="#fff3d6",v.fillRect(6,8,52,50);let $=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let j=0;j<8;j++)v.fillStyle=$[j%4],v.fillRect(10+j%4*12,14+Math.floor(j/4)*20,9,14);v.fillStyle="#111",v.fillRect(10,90,44,12)}),x=new ve;x.position.set(-1.4,0,Et+.6),c.add(x);let b=new mt(new bn(.95,1.9,.75),[jt("#c23a2a"),jt("#c23a2a"),jt("#c23a2a"),jt("#c23a2a"),xn("#ffffff",{map:h}),jt("#c23a2a")]);b.position.y=.95,x.add(b),q(0,1.2,.7,2.2,.35,x)}{let h=new ve;h.position.set(ge+1.8,0,Et+5.2),c.add(h),A(1.6,.1,.5,jt("#8a5a30"),0,.5,0,h),A(1.6,.5,.08,jt("#8a5a30"),0,.8,.22,h),A(.1,.5,.4,jt("#2b2422"),-.7,.25,0,h),A(.1,.5,.4,jt("#2b2422"),.7,.25,0,h)}let ke=new ve;ke.position.set(ge+1.5,.55,Et+5.2),c.add(ke);{let h="#e8a050",x=new mt(new mi(.22,14,10),jt(h));x.scale.set(1.4,.7,1),ke.add(x);let b=new mt(new mi(.13,12,10),jt(h));b.position.set(.3,.05,0),ke.add(b);for(let P of[-.06,.06]){let D=new mt(new pi(.05,.09,4),jt(h));D.position.set(.32,.17,P),ke.add(D)}let v=new mt(new Ri(.035,.03,.4,6),jt(h));v.rotation.z=1.2,v.position.set(-.34,.02,.08),ke.add(v)}let Ft=new ve;Ft.position.set(gi.x,0,gi.z),c.add(Ft);{A(.1,1.5,.1,jt("#4a2a14"),-.55,.75,0,Ft),A(.1,1.5,.1,jt("#4a2a14"),.55,.75,0,Ft);let h=be(256,160,(v,P,D)=>{v.fillStyle="#b8864a",v.fillRect(0,0,P,D),v.strokeStyle="#4a2a14",v.lineWidth=10,v.strokeRect(0,0,P,D);let $=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let j=0;j<5;j++){v.save(),v.translate(40+j%3*80,44+Math.floor(j/3)*70),v.rotate((j%2?-1:1)*.12),v.fillStyle=$[j%4],v.fillRect(-28,-22,56,44),v.fillStyle="#e2452f",v.beginPath(),v.arc(0,-18,4,0,7),v.fill(),v.fillStyle="#8a7a6a";for(let tt=0;tt<3;tt++)v.fillRect(-20,-6+tt*9,40-tt*8,3);v.restore()}v.fillStyle="#3a1e0c",v.font=`900 26px ${$n}`,v.textAlign="right",v.fillText("\u7559\u8A00\u677F",P-14,D-14)}),x=new mt(new bn(1.3,.85,.08),[He,He,He,He,new Je({map:h}),He]);x.position.y=1.15,Ft.add(x);let b=new mt(new bn(1.5,.08,.35),jt("#2c3044"));b.position.y=1.62,b.rotation.x=.2,Ft.add(b),Ft.traverse(v=>{v.isMesh&&(v.userData.board=1)})}let _n=[];if(Ft.traverse(h=>{h.isMesh&&_n.push(h)}),a){let h=c.children.length;c.children.slice(Ne,h).concat(c.children.slice(Q,at)).forEach(tt=>c.remove(tt)),_n.length=0,Re.length=0;let x=new Se("#8fd3f6"),b=new Se("#16204a"),v=new Se("#f0a890"),P=x.clone().lerp(_>15&&_<20?v:b,_>15&&_<20&&y<.5?Math.min(1,y*2):y).lerp(b,y>.5?(y-.5)*2:0);c.fog.color.copy(P),c.fog.near=30,c.fog.far=90,l.setClearColor(P,1),g.visible=!1,I.color.set(y>.5?"#9aa8ff":"#e8f4ff"),I.groundColor.set("#6a8a4a"),I.intensity=1.25+(1-y)*.6,S.intensity=.4+(1-y)*1,S.color.set(y>.5?"#a0b0ff":"#fff2dc");let D=new mt(new Ke(220,220),jt(y>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,c.add(D);let $=new mt(new Ke(2.2,6),jt("#d9d4cc"));$.rotation.x=-Math.PI/2,$.position.set(Hi,-.01,Et+3.2),c.add($);let j=y>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[ge+4,1],[ge+5,6],[-3,Et+5],[ge+3,Et+6],[2,-4],[8,-5]].forEach(([tt,It],Ve)=>{let Te=new ve;Te.position.set(tt,0,It),c.add(Te);let he=new mt(new Ri(.2,.28,1.8,7),jt("#8a5a3a"));he.position.y=.9,Te.add(he);let Ze=new mt(new vs(1.4,1),new gn({color:Ve%3?j:y>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));Ze.position.y=2.6,Te.add(Ze)})}let de=140,Me=new Float32Array(de*3),F=[],w=be(32,32,h=>{h.fillStyle="#f8c8d8",h.beginPath(),h.ellipse(16,16,12,7,.5,0,7),h.fill()}),et=new $a(new Dn,new ta({map:w,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));et.geometry.setAttribute("position",new De(Me,3)),c.add(et);function Lt(h,x){let b=Re.concat(yt)[Math.floor(Math.random()*(Re.length+yt.length))]||Re[0]||{x:-999,z:-999,y:0,r:.1};Me[h*3]=b.x+Ii(-b.r,b.r),Me[h*3+1]=x?Ii(0,b.y):b.y+Ii(-.3,.3),Me[h*3+2]=b.z+Ii(-b.r,b.r),F[h]={vx:Ii(-.2,.4),vy:Ii(-.5,-.25),ph:Math.random()*7,fl:b.y}}let yt=[],Ct=[],Bt=[],gt=(h,x)=>h>=0&&h<ge&&x>=0&&x<Et,_t=(h,x)=>!a&&h>=Uf&&h<Ff&&x>=um&&x<Bh,Gt=(h,x)=>x%2?[h.d,h.w]:[h.w,h.d];function G(h){let x=Ue[h.k];if(x.L==="wall")return Y(h);let[b,v]=Gt(x,h.r),P=[];for(let D=0;D<b;D++)for(let $=0;$<v;$++)P.push([h.x+D,h.z+$]);return P}function Y(h){let x=Ue[h.k],b=[];for(let v=0;v<x.w;v++)h.r===0?b.push(["b",h.x+v]):h.r===2?b.push(["f",h.x+v]):h.r===1?b.push(["l",h.z+v]):b.push(["r",h.z+v]);return b}function ft(h){return h===0?"back":h===2?"front":h===1?"left":"right"}function Xt(h,x){let b=Ue[h.k];for(let[v,P]of Y(h)){let D=v==="b"||v==="f"?ge:Et;if(P<0||P>=D||v==="f"&&P>=Gi-0&&P<Vi)return!1;v==="f"&&P>=Gi-1&&P<Vi+1&&b.w>1}for(let v of Ct){if(v===x||Ue[v.k].L!=="wall")continue;let P=Y(v);for(let D of Y(h))if(P.some($=>$[0]===D[0]&&$[1]===D[1]))return!1}return!0}function Dt(h,x,b,v){for(let P of Ct)if(!(P===v||Ue[P.k].L!==b)&&G(P).some(D=>D[0]===h&&D[1]===x))return P;return null}function Wt(h,x,b){let v=Dt(h,x,"main",b);return v&&Ue[v.k].sf?v:null}function ue(h,x){let b=Ue[h.k];if(b.L==="wall")return Xt(h,x);let v=G(h),P=null;for(let[D,$]of v){let j=gt(D,$),tt=_t(D,$);if(!j&&!tt)return!1;if(P===null)P=j;else if(P!==j)return!1;if(wl.has(D+","+$))return!1;if(b.L==="top"){if(Dt(D,$,"top",x))return!1;let It=Dt(D,$,"main",x);if(It&&!Ue[It.k].sf||It&&It.k==="tank")return!1}else if(Dt(D,$,b.L,x))return!1;if(b.L==="main"&&b.solid&&j&&$===Et-1&&D>=Gi&&D<Vi)return!1}return b.L==="main"&&b.solid,!0}function Oe(h){if(Ue[h.k].L!=="top")return 0;let b=0;for(let[v,P]of G(h)){let D=Wt(v,P);D&&(b=Math.max(b,Ue[D.k].sf))}return b}function At(h){let x=Ue[h.k];if(x.L==="wall"){let[P,D]=Y(h)[0],$=D+x.w/2;return P==="b"?[$,0,.02]:P==="f"?[$,0,Et-.02]:P==="l"?[.02,0,$]:[ge-.02,0,$]}let[b,v]=Gt(x,h.r);return[h.x+b/2,Oe(h),h.z+v/2]}let pe=new Je({map:N,transparent:!0,depthWrite:!1,opacity:.55});function Ee(h,x){let b=Ue[h.k];if(h.I=b,h.g=Cf(h.k),c.add(h.g),h.g.userData.e=h,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[v,P]=Gt(b,0),D=new mt(new Ke(v*.95,P*.95),pe);D.rotation.x=-Math.PI/2,D.position.y=.012,h.g.add(D),D.raycast=()=>{}}return h.g.traverse(v=>{v.isMesh&&(v.userData.e=h,Bt.push(v))}),Ct.push(h),$t(h),x||xi(),h}function $t(h){let[x,b,v]=At(h);h.g.position.set(x,b,v),h.g.rotation.y=h.r*Math.PI/2}function sn(h){let x=Ct.indexOf(h);x>=0&&Ct.splice(x,1),c.remove(h.g);for(let b=Bt.length-1;b>=0;b--)Bt[b].userData.e===h&&Bt.splice(b,1);h.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function kn(h){let x=G(h);return Ct.filter(b=>Ue[b.k].L==="top"&&G(b).some(v=>x.some(P=>P[0]===v[0]&&P[1]===v[1])))}if(o.it.forEach(([h,x,b,v])=>{let P={k:h,x,z:b,r:v||0};ue(P)?Ee(P,!0):s&&(o.inv[h]=(o.inv[h]||0)+1)}),Ct.filter(h=>Ue[h.k].L==="top").forEach($t),Pt(o.fl),Jt(o.wa),r){let h=i.ex||{},x=h.wall||"#f29ab8",b=be(640,200,(v,P,D)=>{v.fillStyle=x,v.fillRect(0,0,P,D);for(let j=0;j<D;j+=14)v.fillStyle="rgba(0,0,0,.08)",v.fillRect(0,j,P,2);let $=j=>{v.fillStyle=y>.5?"#ffd98a":"#bfe6ff",v.fillRect(j,60,110,70),v.strokeStyle="#f4efe2",v.lineWidth=8,v.strokeRect(j,60,110,70),v.beginPath(),v.moveTo(j+55,60),v.lineTo(j+55,130),v.stroke()};$(70),$(460),v.fillStyle="#e8e2d4",v.fillRect(0,D-26,P,26)});le.front.forEach(v=>v.traverse(P=>{if(P.isMesh&&Array.isArray(P.material)&&P.material[4]&&P.material[4].map){let D=P.material[4].map.offset.x,$=P.material[4].map.repeat.x,j=b.clone();j.needsUpdate=!0,j.offset.set(D,0),j.repeat.set($,1),P.material[4]=new Je({map:j})}})),xt.map=null,xt.color.set(x),xt.needsUpdate=!0,se.children.slice().forEach(v=>{v!==se.children[0]&&v!==se.children[1]&&v!==se.children[2]&&(v.visible=!1)}),Vt.forEach(v=>{v.visible=!1}),Ut.traverse(v=>{v.isMesh&&v.material&&v.material.map&&(v.material.map=null,v.material.color.set(h.roofC||"#d8452f"),v.material.needsUpdate=!0)})}function on(){yt=Ct.filter(h=>h.k==="sakura").map(h=>({x:h.g.position.x,z:h.g.position.z,y:2,r:.5}))}on();for(let h=0;h<de;h++)Lt(h,1);let ps=0;function Mn(){return o.it=Ct.map(h=>[h.k,h.x,h.z,h.r]),o}function xi(){s&&(Mn(),clearTimeout(ps),ps=setTimeout(()=>{try{n.save&&n.save(o)}catch{}},700),ei())}let xr=[],Is=1.5,Zn={};function js(h){return Zn[h]?Zn[h]:Zn[h]=be(128,112,x=>{if(x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",h==="mind"||h==="zzz"){x.fillStyle=h==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([v,P,D])=>{x.beginPath(),x.arc(v,P,D,0,7),x.stroke()}),b.forEach(([v,P,D])=>{x.beginPath(),x.arc(v,P,D,0,7),x.fill()}),x.beginPath(),x.arc(44,90,7,0,7),x.fill(),x.stroke(),x.beginPath(),x.arc(30,104,4,0,7),x.fill(),x.stroke()}else x.fillStyle=h==="idea"?"#fff0a8":h==="msg"?"#ffe0ea":"#ffffff",Br(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8);if(x.fillStyle="#2a1810",x.textAlign="center",x.textBaseline="middle",h==="idea")x.font=`900 44px ${$n}`,x.fillText("!",64,42);else if(h==="zzz")x.font=`900 30px ${$n}`,x.fillText("z z Z",64,42);else if(h==="msg")x.font=`900 40px ${$n}`,x.fillText("\u2709",64,42);else for(let b=0;b<3;b++)x.beginPath(),x.arc(40+b*24,42,6,0,7),x.fill()})}function Ji(h,x){return be(512,112,P=>{P.textAlign="center",P.textBaseline="middle";let D=52;P.font=`900 ${D}px ${$n}`;let $=String(h||"").slice(0,16);for(;P.measureText($).width>432&&D>22;)D-=2,P.font=`900 ${D}px ${$n}`;let j=Math.min(500,P.measureText($).width+56);P.fillStyle=x==="me"?"#2a1810e6":x==="owner"?"#7a3a14e6":"#2a2a48e0",P.strokeStyle=x==="me"?"#ffd27a":x==="owner"?"#ffb36b":"#c8c0ff",P.lineWidth=6,Br(P,(512-j)/2,14,j,84,84/2),P.fill(),P.stroke(),P.fillStyle="#fff3d6",P.fillText($,512/2,112/2+2)})}function Ps(h,x,b){b=b||{};let v=new ve;c.add(v);let P=new Ke(1,1);P.translate(0,.5,0);let D=new Je({transparent:!0,alphaTest:.04,color:b.tint||16051952}),$=new mt(P,D);v.add($);let j={grp:v,m:$,mat:D,h0:x,h:x*Is,ar:.8,w:x*Is*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};d(h,It=>{D.map=It,D.needsUpdate=!0,j.ar=It.image.width/It.image.height,j.w=j.h*j.ar});let tt=new mt(new ti(.5,16),new Je({map:N,transparent:!0,depthWrite:!1,opacity:.8}));if(tt.rotation.x=-Math.PI/2,c.add(tt),j.sh=tt,b.name){let It=new di(new ii({map:Ji(b.name,b.nk),transparent:!0,depthTest:!1}));It.renderOrder=30,It.scale.set(2,.44,1),c.add(It),j.tag=It,j.name=b.name}if(b.bubble){let It=new di(new ii({map:js(b.bubble),transparent:!0,depthWrite:!1}));It.scale.set(.8,.7,1),c.add(It),j.bub=It,j.kind=b.bubble}return xr.push(j),j}let ee=Ps(i.me.src,1.5,{me:1,name:i.me.name||"\u6211",nk:"me"});ee.x=Hi,ee.z=Et+2.6,(s&&i.startInside!==!1||i.island)&&(ee.x=Hi,ee.z=Et-1.6);let ga=Rs,_r=Cs,_i=Nf;function Qs(h,x){if(h<ga||h>=_r||x<0||x>=_i||x<Et&&(h<0||h>=ge)||x>=Et&&wl.has(h+","+x)&&h===zh&&x===Et+1)return!0;let b=Dt(h,x,"main");return!!(b&&Ue[b.k].solid)}let Wi=(h,x,b,v)=>Qs(b,v)?!1:x===Et-1&&v===Et||x===Et&&v===Et-1?h>=Gi&&h<Vi&&b===h:!0;function yr(h,x,b,v){h=Math.floor(h),x=Math.floor(x);let P=(j,tt)=>(j-ga)*100+tt,D=new Map;D.set(P(h,x),null);let $=[[h,x]];for(;$.length;){let[j,tt]=$.shift();if(j===b&&tt===v){let It=[],Ve=P(j,tt),Te=j,he=tt;for(;Ve!==null;){It.push([Te+.5,he+.5]);let Ze=D.get(Ve);if(Ze===null)break;Te=Ze[0],he=Ze[1],Ve=P(Te,he)}return It.reverse()}for(let[It,Ve]of[[1,0],[-1,0],[0,1],[0,-1]]){let Te=j+It,he=tt+Ve,Ze=P(Te,he);D.has(Ze)||!Wi(j,tt,Te,he)||(D.set(Ze,[j,tt]),$.push([Te,he]))}}return null}let Hn=.28;function Yn(h,x,b){let v=h>=Gi+Hn&&h<=Vi-Hn;if(b<Et){if(x<Et&&(h<Hn||h>ge-Hn||x<Hn)||x>=Et-Hn&&!v)return!1}else if(x<Et+Hn&&!v||x<Et&&!v)return!1;if(h<Rs+.4||h>Cs-.4||x>Nf-.4||x<Et&&(h<0||h>ge))return!1;for(let[P,D]of[[-Hn,-Hn],[Hn,-Hn],[-Hn,Hn],[Hn,Hn],[0,0]]){let $=Math.floor(h+P*.8),j=Math.floor(x+D*.8),tt=Dt($,j,"main");if(tt&&Ue[tt.k].solid||$===zh&&j===Et+1&&Math.hypot(h-gi.x,x-gi.z)<.7)return!1}return!0}function ls(h){let x=[];if(h)for(let b=0;b<Et;b++)for(let v=0;v<ge;v++)Qs(v,b)||x.push([v,b]);else for(let b=Et+1;b<Et+6;b++)for(let v=-6;v<ge+6;v++)Qs(v,b)||x.push([v,b]);return x}let J=[],R=()=>Of(Sl(Mn())),H=ot(oo.filter(h=>i.walk&&i.walk[h.spr]&&h.spr!=="robot"));function ot(h){for(let x=h.length-1;x>0;x--){let b=Math.floor(Math.random()*(x+1));[h[x],h[b]]=[h[b],h[x]]}return h}let nt=r?0:os(2+R(),2,7);H.slice(0,nt).forEach((h,x)=>{let b=Ps(i.walk[h.spr],h.h,{bubble:"chat"});b.d=h,b.sp=h.sp*.8,b.kind2="npc",b.state="out",b.t=x*2.2+Ii(0,1.5),b.x=Rs+1,b.z=Et+4,b.hidden=!0,J.push(b)});function it(h){let x=Ps(i.me.src,1.5,{name:h.name,nk:"vis",bubble:"msg",tint:16771312});x.d={id:"v"+h.id,name:h.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},x.v=h,x.sp=1.3,x.kind2="vis",x.state="out",x.t=Ii(1,6),x.x=Cs-1,x.z=Et+4,x.hidden=!0,J.push(x)}let Ot=null,te=null;if(r){let h=new ve;c.add(h);let x="#e8a050",b="#fff3e0",v=new mt(new mi(.2,14,10),jt(x));v.scale.set(1.5,.8,.9),v.position.y=.2,h.add(v);let P=new mt(new mi(.14,14,10),jt(x));P.position.set(.3,.34,0),h.add(P);let D=new mt(new mi(.07,10,8),jt(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),h.add(D);for(let It of[-.07,.07]){let Ve=new mt(new pi(.05,.1,4),jt(x));Ve.position.set(.3,.5,It),h.add(Ve);let Te=new mt(new mi(.018,6,6),jt("#1a1a1a"));Te.position.set(.43,.38,It*.7),h.add(Te)}let $=[];for(let[It,Ve]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let Te=new mt(new Ri(.04,.04,.16,6),jt(x));Te.position.set(It,.08,Ve),h.add(Te),$.push(Te)}let j=new mt(new Ri(.03,.025,.4,6),jt(x));j.position.set(-.38,.36,0),j.rotation.z=.8,h.add(j),h.traverse(It=>{It.isMesh&&(It.userData.pet=1)});let tt=Ct.find(It=>It.k==="catbed");te={g:h,legs:$,tail:j,x:tt?tt.g.position.x:2.5,z:tt?tt.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!tt}}if(!s){let h=Ct.find(v=>v.k==="register"),x=Hi,b=2;if(h){let v=[[h.x,h.z-1],[h.x+1,h.z],[h.x-1,h.z],[h.x,h.z+1]].find(([P,D])=>gt(P,D)&&!Qs(P,D));v&&(x=v[0]+.5,b=v[1]+.5)}Ot=Ps(i.owner&&i.owner.src||i.me.src,1.5,{name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),Ot.x=x,Ot.z=b,Ot.kind2="owner",Ot.state="sleep",Ot.d={name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),role:o.name},J.push(Ot)}function qt(h){let x=h.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];Ct.forEach($=>{$.k==="register"&&b.push(...G($))}),b.push([7,Et+1]);let v=ls(x).filter(([$,j])=>!b.some(tt=>Math.abs(tt[0]-$)<=1&&Math.abs(tt[1]-j)<=1)&&!xr.some(tt=>tt!==h&&!tt.hidden&&Math.floor(tt.x)===$&&Math.floor(tt.z)===j));if(!v.length)return null;let P=v.filter(([$,j])=>Ct.some(tt=>Ue[tt.k].L!=="rug"&&G(tt).some(It=>Math.abs(It[0]-$)+Math.abs(It[1]-j)===1))),D=P.length&&Math.random()<.75?P:v;return D[Math.floor(Math.random()*D.length)]}function Kt(h,x,b){let v=yr(h.x,h.z,x,b);return v&&v.length?(h.path=v,h.state="walk",!0):!1}let U={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:ee.z<Et,cam:new z(ee.x,1,ee.z),low:{},fp:Ml.v,fpK:0,fpP:0,pitch:.7,pitchT:.7},ye=new z,Ge=new z,re=new z,we=(h,x,b,v)=>{let P=document.createElement(h);return x&&(P.className=x),b!=null&&(P.innerHTML=b),(v||e).appendChild(P),P},Nn=[],Ye=h=>(Nn.push(h),h),rn=Ye(we("div","h3info")),yn=Ye(we("div","h3hud")),ne=we("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),Wn=Ye(we("div","h3hint")),$e=Ye(we("div","h3toast")),ln=Ye(we("div","h3j","<i></i>")),vn=Ye(we("div","h3card")),Pi=Ye(we("div","h3bp")),Xn=Ye(we("div","h3sel")),yi=Ye(we("div","h3top")),fe=Ye(we("div","h3pan")),Un=Ye(we("button","h3door","\u{1F6AA} \u51FA\u9580"));Un.type="button",Un.dataset.h3="exit";let li=e.querySelector(".twtop"),An=li&&li.querySelector(".twlist"),Sn=document.createElement("button");Sn.type="button",Sn.className="h3tb",Sn.dataset.h3="fp",Sn.setAttribute("aria-label","\u7B2C\u4E00\u4EBA\u7A31\uFF0F\u7B2C\u4E09\u4EBA\u7A31"),Sn.textContent="\u{1F441}",li&&li.insertBefore(Sn,An||null),Nn.push(Sn);function mn(h){$e.textContent=h,$e.classList.add("on"),clearTimeout(mn.t),mn.t=setTimeout(()=>$e.classList.remove("on"),2200)}function Si(){if(Sn.style.display=U.mode==="build"?"none":"",Sn.classList.toggle("on",!!U.fp),U.mode==="build"){yn.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}yn.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function ei(){let h=Sl(Mn()),x=Of(h);if(r){rn.innerHTML=`<b>\u{1F3E0} ${In(i.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> \u6EAB\u99A8\u5EA6 ${h}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${In(i.owner&&i.owner.name||"")} \u7684\u5BB6`}</small>`;return}rn.innerHTML=`<b>\u{1F3EE} ${In(o.name)}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> ${In(zf[x][1])}<br><small>\u6EAB\u99A8\u5EA6 ${h}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${gr(Bf(h))}`:`\u30FB\u5E97\u9577 ${In(i.owner&&i.owner.name||"")}`}</small>`}Si(),ei(),ne.style.display="none",setTimeout(()=>tr(),50),window.addEventListener("resize",()=>tr()),ne.querySelectorAll("button").forEach((h,x)=>{let b=x?-1:1;h.addEventListener("pointerdown",P=>{P.preventDefault(),U.camV=b;try{h.setPointerCapture(P.pointerId)}catch{}});let v=()=>{U.camV=0};h.addEventListener("pointerup",v),h.addEventListener("pointercancel",v),h.addEventListener("click",()=>{U.camV||(U.yawT+=b*.5)})});let Xi=()=>t.getBoundingClientRect(),Jn=new oa,ho=new Nt,El=new Fi(new z(0,1,0),0),uo=new z,Hr=(h,x)=>{let b=Xi();return ho.set((h-b.left)/b.width*2-1,-((x-b.top)/b.height*2-1)),ho},fo=(h,x)=>{let b=Xi();return{x:(h-b.left)*(t.clientWidth/b.width),y:(x-b.top)*(t.clientHeight/b.height)}},ms=h=>{let x=h.clone().project(u),b=Xi();return{x:(x.x+1)/2*b.width+b.left,y:(1-x.y)/2*b.height+b.top,z:x.z}};function Al(h,x){return Jn.setFromCamera(Hr(h,x),u),Jn.ray.intersectPlane(El,uo)?uo.clone():null}function po(h,x){Jn.setFromCamera(Hr(h,x),u);let b=Jn.intersectObjects(Bt.filter(v=>v.visible&&v.parent&&vr(v)),!1);return b.length?b[0].object.userData.e:null}function vr(h){let x=h;for(;x;){if(!x.visible)return!1;x=x.parent}return!0}function kh(h,x){let b=null,v=1e9;for(let P of J){if(P.hidden)continue;let D=ms(new z(P.x,0,P.z)),$=ms(new z(P.x,P.h+.3,P.z)),j=D.y-$.y;if(j<6)continue;let tt=Math.max(j*.36,30),It=Math.abs(h-D.x);if(It<tt&&x>$.y-14&&x<D.y+12){let Ve=It+Math.abs(x-(D.y+$.y)/2)*.3;Ve<v&&(v=Ve,b=P)}}return b}function mo(h,x){return Jn.setFromCamera(Hr(h,x),u),Jn.intersectObjects(_n,!1).length>0}let Wr=[],xa=[];function go(h,x){return Jn.setFromCamera(Hr(h,x),u),Jn.intersectObjects(xa,!1).length>0}let qi=new Map,cn=null,Ls=null,Kn=null,xo=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("pointerdown",h=>{U.pt=h.pointerType,h.preventDefault();try{t.setPointerCapture(h.pointerId)}catch{}let x=fo(h.clientX,h.clientY);if(h.pointerType==="touch"&&!Kn&&U.mode==="walk"&&!fe.classList.contains("on")){let b=Xi();if(h.clientX-b.left<b.width*.45){Kn={id:h.pointerId,sx:x.x,sy:x.y},U.tgt=null,ln.style.display="block",ln.style.opacity=1,ln.style.left=x.x+"px",ln.style.top=x.y+"px",ln.firstChild.style.transform="";return}}if(qi.set(h.pointerId,{x:h.clientX,y:h.clientY}),qi.size===2){let[b,v]=[...qi.values()];Ls={d:Math.hypot(b.x-v.x,b.y-v.y),dist:U.distT,ang:Math.atan2(v.y-b.y,v.x-b.x),yaw:U.yawT},cn=null,Fn();return}if(cn={id:h.pointerId,sx:x.x,sy:x.y,cx:h.clientX,cy:h.clientY,moved:0,btn:h.button,yaw0:U.yawT,pit0:U.pitchT,fp0:U.fpP},U.mode==="build"){let b=po(h.clientX,h.clientY);b&&b===U.sel&&!b.I.fixed2?cn.dragItem=b:b&&(cn.pickItem=b)}}),t.addEventListener("pointermove",h=>{if(Kn&&h.pointerId===Kn.id){let D=fo(h.clientX,h.clientY),$=D.x-Kn.sx,j=D.y-Kn.sy,tt=Math.hypot($,j),It=50,Ve=Math.min(1,tt/It)/Math.max(tt,1e-6);U.joy={x:$*Ve,y:j*Ve},ln.firstChild.style.transform=`translate(${U.joy.x*It}px,${U.joy.y*It}px)`;return}if(qi.has(h.pointerId)&&qi.set(h.pointerId,{x:h.clientX,y:h.clientY}),Ls&&qi.size>=2){let[D,$]=[...qi.values()],j=Math.hypot(D.x-$.x,D.y-$.y);U.distT=os(Ls.dist*Ls.d/Math.max(20,j),6,20),U.yawT=Ls.yaw-(Math.atan2($.y-D.y,$.x-D.x)-Ls.ang);return}if(!cn||cn.id!==h.pointerId)return;let x=fo(h.clientX,h.clientY),b=x.x-cn.sx,v=x.y-cn.sy,P=Math.hypot(b,v);if(!cn.moved&&P>10&&(cn.moved=1,cn.pickItem&&U.mode==="build"&&(wi(cn.pickItem),cn.dragItem=cn.pickItem)),!!cn.moved){if(cn.btn===2||U.mode==="walk"||U.mode==="build"&&!cn.dragItem){U.yawT=cn.yaw0-b*.008,U.fp&&U.mode==="walk"?U.fpP=os(cn.fp0-v*.005,-1.2,1.2):U.pitchT=os(cn.pit0+v*.005,.3,1.25);return}if(U.mode==="build"&&cn.dragItem){Ae(cn.dragItem,h.clientX,h.clientY);return}if(U.mode==="walk"){let $=Math.min(1,P/55)/Math.max(P,1e-6);U.joy={x:b*$,y:v*$},U.tgt=null,ln.style.display="block",ln.style.left=cn.sx+"px",ln.style.top=cn.sy+"px",ln.firstChild.style.transform=`translate(${U.joy.x*55}px,${U.joy.y*55}px)`}}});let tr=()=>{U.dead||(xo&&U.mode==="walk"?(ln.style.display="block",ln.style.opacity=.55,ln.style.left="110px",ln.style.top=t.clientHeight-110+"px",ln.firstChild.style.transform=""):ln.style.display="none")},_a=h=>{if(Kn&&h.pointerId===Kn.id){Kn=null,U.joy=null,tr();return}qi.delete(h.pointerId),qi.size<2&&(Ls=null),!(!cn||cn.id!==h.pointerId)&&(cn.moved||vo(h.clientX,h.clientY,cn),cn.dragItem&&Fn(),cn=null)};t.addEventListener("pointerup",_a),t.addEventListener("pointercancel",_a),t.addEventListener("wheel",h=>{h.preventDefault(),U.fp||(U.distT=os(U.distT+Math.sign(h.deltaY)*1.2,6,20))},{passive:!1});let _o=h=>{if(!document.contains(t)||/input|textarea/i.test(h.target&&h.target.tagName||""))return;let x=h.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(x)){if(x==="r"&&U.sel){tn(),h.preventDefault();return}U.keys[x]=1,/^(arrow|w|a|s|d)/.test(x)&&(U.tgt=null),h.preventDefault()}},yo=h=>{delete U.keys[h.key.toLowerCase()]};document.addEventListener("keydown",_o),document.addEventListener("keyup",yo);function vo(h,x){if(fe.classList.contains("on"))return;if(U.mode==="build"){let D=po(h,x);wi(D||null);return}let b=kh(h,x);if(b){Yi(b);return}if(te){Jn.setFromCamera(Hr(h,x),u);let D=[];if(te.g.traverse($=>{$.isMesh&&D.push($)}),Jn.intersectObjects(D,!1).length){mn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),te.t=2,te.path=null;return}}if(xa.length&&go(h,x)){Ds(gi.x-1,gi.z+.9,Gf);return}if(mo(h,x)){Ds(gi.x,gi.z+1,br);return}let v=po(h,x);if(v&&Ue[v.k].L==="top"){let D=G(v).map($=>Wt($[0],$[1])).find(Boolean);D&&D.k==="register"&&(v=D)}if(v&&v.k==="register"){Ds(v.g.position.x,v.g.position.z+1.2,()=>Gh(v));return}if(v&&Ue[v.k].L!=="rug"){let D=v.g.position;Ki(),Xr(v),U.tgt=ya(D.x,D.z);return}if(Ki(),U.pt==="touch"&&U.mode==="walk")return;let P=Al(h,x);P&&(U.tgt={x:P.x,z:P.z})}function ya(h,x){let b=null,v=1e9;for(let[P,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let $=h+P,j=x+D;if(Yn($,j,j<Et?0:Et+1)){let tt=Math.hypot($-ee.x,j-ee.z);tt<v&&(v=tt,b={x:$,z:j})}}return b}function Ds(h,x,b){Ki();let v=ya(h,x-1)||{x:h,z:x};U.tgt={x:v.x,z:v.z,fn:b},Math.hypot(ee.x-v.x,ee.z-v.z)<1.6&&(U.tgt=null,b())}function Yi(h){Ki(!0),U.talk=h,h.kind2==="npc"&&(h.state="talk",h.t=0);let x=In(h.d.name),b=In(h.d.role||""),v="",P=pa.chat,D="";if(h.kind2==="owner")P={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},v=r?`<p class="h3t mind">\uFF08${In(i.owner&&i.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${In(i.owner&&i.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,v+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(h.kind2==="vis")P={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},v=`<p class="h3t">\u300C${In(h.v.msg||"\u2026\u2026")}\u300D</p>${h.v.gift&&Ue[h.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${In(Ue[h.v.gift].n)}\u300D</p>`:""}`;else{let It=Ns(h);P=pa[It.kind]||pa.chat,v=`<p class="h3t${It.kind==="mind"?" mind":""}">${It.kind==="mind"?"\uFF08"+In(It.text)+"\uFF09":"\u300C"+In(It.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let $=h.kind2==="npc"?i.walk[h.d.spr]:h.kind2==="owner"&&i.owner&&i.owner.src||i.me.src;vn.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${$}')"></div><div class="h3nm"><b>${x}</b><small>${b}</small></div><span class="h3k" style="background:${P.c}">${P.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${v}<div class="h3bt">${D}</div>`;let j=Xi(),tt=ms(new z(h.x,h.h*.5,h.z));vn.classList.toggle("r",tt.x-j.left<j.width/2),vn.classList.add("on"),h.bub&&(h.bub.visible=!1)}function Ns(h){let x=Ct.filter(b=>Df[b.k]&&Math.hypot(b.g.position.x-h.x,b.g.position.z-h.z)<3.2);if(x.length&&Math.random()<.5){let b=x[Math.floor(Math.random()*x.length)];return{kind:"chat",text:Df[b.k]}}return(!h.deck||!h.deck.length)&&(h.deck=ot(h.d.lines.map(b=>({kind:b[0],text:b[1]})))),h.deck.pop()}function Xr(h){let x=Ue[h.k];U.talk=null,vn.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${x.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${In(x.n)}</b><small>\u6EAB\u99A8\u5EA6 +${x.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${In(Df[h.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,vn.classList.remove("r"),vn.classList.add("on")}function Ki(h){vn.classList.remove("on");let x=U.talk;U.talk=null,x&&x.kind2==="npc"&&x.state==="talk"&&(x.state="idle",x.t=Ii(1,2.5))}function bo(){if(!s||r)return 0;let h=n.today?n.today():Math.floor(Date.now()/864e5);return(o.cl?os(h-o.cl,0,3):1)*Bf(Sl(Mn()))}function Gh(h){if(!s){mn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let x=bo();if(x<=0){mn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=n.collect?n.collect(x):!1}catch{}if(!b){mn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}o.cl=n.today?n.today():Math.floor(Date.now()/864e5),xi(),T(h),mn(`\u6536\u5230 ${gr(x)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let ji=new di(new ii({map:be(128,128,h=>{h.fillStyle="#f2c230",h.strokeStyle="#8a5a10",h.lineWidth=8,h.beginPath(),h.arc(64,64,52,0,7),h.fill(),h.stroke(),h.fillStyle="#8a5a10",h.font=`900 64px ${$n}`,h.textAlign="center",h.textBaseline="middle",h.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));ji.renderOrder=25,ji.scale.set(.55,.55,1),c.add(ji);let m=[];function T(h){for(let x=0;x<8;x++){let b=ji.clone();b.material=ji.material.clone(),b.position.copy(h.g.position).add(new z(0,1.4,0)),b.userData.v=new z(Ii(-1.2,1.2),Ii(2.5,4),Ii(-1.2,1.2)),b.userData.t=0,c.add(b),m.push(b)}}function C(h){if(U.mode=h,wi(null),Ki(),U.tgt=null,Si(),setTimeout(tr,0),Pi.classList.toggle("on",h==="build"),yi.classList.toggle("on",h==="build"),h!=="build"&&(ne.style.bottom=""),rn.style.display=h==="build"?"none":"",h==="build")yi.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",Mt(),U.distT=13.5;else{if(U.distT=U.inside?10.5:13,!Yn(ee.x,ee.z,ee.z)){let x=ls(ee.z<Et).sort((b,v)=>Math.hypot(b[0]+.5-ee.x,b[1]+.5-ee.z)-Math.hypot(v[0]+.5-ee.x,v[1]+.5-ee.z)).find(b=>Yn(b[0]+.5,b[1]+.5,b[1]));x&&(ee.x=x[0]+.5,ee.z=x[1]+.5)}xi()}}let B=r?"liv":"tbl",Z={},ht=null,vt=null,Tt=null;function zt(h){if(Z[h])return Z[h];try{if(!ht){ht=new Bi(128,128),vt=new Ar,vt.add(new Lr(16774368,8413264,2.2));let he=new Dr(16777215,1.4);he.position.set(2,4,3),vt.add(he),Tt=new ni(30,1,.05,50)}let x=Cf(h);vt.add(x);let b=Ue[h],v=new Ws().setFromObject(x),P=v.getCenter(new z),D=v.getSize(new z),j=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;Tt.position.set(P.x+j*.55,P.y+j*.45,P.z+j*.7),Tt.lookAt(P),b.L==="wall"&&(Tt.position.set(P.x+j*.25,P.y+j*.1,P.z+j*.96),Tt.lookAt(P)),l.setRenderTarget(ht),l.setClearColor(0,0),l.clear(),l.render(vt,Tt),l.setRenderTarget(null),l.setClearColor(1709366,1);let tt=new Uint8Array(16384*4);l.readRenderTargetPixels(ht,0,0,128,128,tt);let It=document.createElement("canvas");It.width=It.height=128;let Ve=It.getContext("2d"),Te=Ve.createImageData(128,128);for(let he=0;he<128;he++)Te.data.set(tt.subarray((127-he)*512,(128-he)*512),he*512);for(let he=0;he<Te.data.length;he+=4)Te.data[he]=Lf[Te.data[he]],Te.data[he+1]=Lf[Te.data[he+1]],Te.data[he+2]=Lf[Te.data[he+2]];return Ve.putImageData(Te,0,0),vt.remove(x),x.traverse(he=>{he.geometry&&he.geometry.dispose()}),Z[h]=It.toDataURL()}catch{return Z[h]=""}}function Mt(){let h=n.coins?n.coins():0,x=(r?cm:lm).map(([j,tt])=>`<button class="h3tab ${B===j?"on":""}" type="button" data-h3="cat" data-k="${j}">${tt}</button>`).join("")+`<button class="h3tab ${B==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${gr(h)}</span>`,b="";if(B==="reno"){let j=o.sz|0,tt=Tl[j+1];b=(s?`<button class="h3it ${tt&&h<tt[2]?"no":""}" type="button" data-h3="expand" ${tt?"":"disabled"}><span class="ph" style="display:flex;align-items:center;justify-content:center;font-size:34px">\u{1F4D0}</span>${tt?`\u64F4\u5EFA\u5230 ${tt[0]}\xD7${tt[1]}<span class="pr">${gr(tt[2])}</span>`:`\u5DF2\u7D93\u6700\u5927<span class="pr">${ge}\xD7${Et}</span>`}</button>`:"")+Af.map(([It,Ve,Te])=>{let he=o.fo[It],Ze=o.fl===It;return`<button class="h3it ${Ze?"cur":""}" type="button" data-h3="floor" data-k="${It}"><span class="ph" style="background:url(${Rn("f",It)}) center/cover"></span>${In(Ve)}${Ze?'<span class="pr">\u4F7F\u7528\u4E2D</span>':he?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${gr(Te)}</span>`}</button>`}).join("")+Rf.map(([It,Ve,Te])=>{let he=o.wo[It],Ze=o.wa===It;return`<button class="h3it ${Ze?"cur":""}" type="button" data-h3="wall" data-k="${It}"><span class="ph" style="background:url(${Rn("w",It)}) center/cover"></span>${In(Ve)}${Ze?'<span class="pr">\u4F7F\u7528\u4E2D</span>':he?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${gr(Te)}</span>`}</button>`}).join("")}else b=_l.filter(j=>(r?j.hc===B:j.cat===B)&&!j.fixed).map(j=>{let tt=o.inv[j.k]||0,It=zt(j.k);return`<button class="h3it ${!tt&&h<j.p?"no":""}" type="button" data-h3="item" data-k="${j.k}">${tt?`<span class="ow">\xD7${tt}</span>`:""}${It?`<img src="${It}" alt="">`:'<span class="ph"></span>'}${In(j.n)}<span class="pr">${tt?"\u62FF\u51FA\u4F86\u64FA":gr(j.p)}</span></button>`}).join("");let v=Pi.querySelector(".h3row"),P=v?v.scrollLeft:0,D=Pi.dataset.cat===B;Pi.innerHTML=`<div class="h3tabs">${x}</div><div class="h3row">${b}</div>`,Pi.dataset.cat=B,D&&(Pi.querySelector(".h3row").scrollLeft=P);let $=Pi.offsetHeight||150;ne.style.bottom=$+8+"px",Xn.style.bottom=$+8+"px"}let Qe={};function Rn(h,x){let b=h+x;if(Qe[b])return Qe[b];let v;return h==="f"?v=(k[x]||k.wood)().image:v=W(x,2).image,Qe[b]=v.toDataURL()}function wi(h){if(U.sel&&U.sel!==h&&(U.sel.ok||Li(U.sel)),U.sel=h,bt.visible=!!h,Xn.classList.toggle("on",!!h),h){h.last={x:h.x,z:h.z,r:h.r},h.ok=!0;let x=Ue[h.k];Xn.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${x.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${x.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,Yt()}}function Li(h){if(!h.last)return;let x=h.last.x-h.x,b=h.last.z-h.z,v=Ue[h.k].sf?kn(h):[];h.x=h.last.x,h.z=h.last.z,h.r=h.last.r,$t(h),v.forEach(P=>{P.x+=x,P.z+=b,$t(P)}),h.ok=!0,Yt()}let qr=be(64,64,h=>{h.strokeStyle="#fff",h.lineWidth=6,h.strokeRect(3,3,58,58)}),bt=new mt(new Ke(1,1),new Je({map:qr,transparent:!0,depthWrite:!1,color:"#6aff8a"}));bt.rotation.x=-Math.PI/2,bt.visible=!1,bt.renderOrder=5,c.add(bt);let rt=new mt(new Ke(1,1),new Je({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));rt.rotation.x=-Math.PI/2,bt.add(rt),rt.rotation.x=0,rt.position.z=-.001;function Yt(){let h=U.sel;if(!h)return;let x=Ue[h.k],b=ue(h,h);h.ok=b;let v=b?"#6aff8a":"#ff5a4a";if(bt.material.color.set(v),rt.material.color.set(v),x.L==="wall"){let[D,,$]=At(h),j=ft(h.r);bt.scale.set(x.w,.6,1),bt.position.set(D+(j==="left"?.35:j==="right"?-.35:0),.03,$+(j==="back"?.35:j==="front"?-.35:0)),bt.rotation.z=j==="left"||j==="right"?Math.PI/2:0}else{let[D,$]=Gt(x,h.r),[j,tt,It]=At(h);bt.scale.set(D,$,1),bt.rotation.z=0,bt.position.set(j,tt+.03,It)}let P=Xn.querySelector('[data-h3="ok"]');P&&(P.disabled=!b)}function Ae(h,x,b){let v=Al(x,b);if(!v)return;let P=Ue[h.k],D=h.x,$=h.z;if(P.L==="wall"){let j=[[v.z,0],[v.x,1],[ge-v.x,3],[Et-v.z,2]].filter(tt=>!U.low[ft(tt[1])]).sort((tt,It)=>tt[0]-It[0]);if(!j.length)return;h.r=j[0][1],h.r===0||h.r===2?(h.x=os(Math.round(v.x-P.w/2),0,ge-P.w),h.z=h.r===0?0:Et-1):(h.z=os(Math.round(v.z-P.w/2),0,Et-P.w),h.x=h.r===1?0:ge-1)}else{let[j,tt]=Gt(P,h.r);h.x=Math.round(v.x-j/2),h.z=Math.round(v.z-tt/2)}(h.x!==D||h.z!==$||P.L==="wall")&&(P.sf&&hn(h,D,$),$t(h),Yt())}function hn(h,x,b){let v={x,z:b,r:h.r,k:h.k},P=G(v);Ct.filter(D=>Ue[D.k].L==="top"&&G(D).some($=>P.some(j=>j[0]===$[0]&&j[1]===$[1]))).forEach(D=>{D.x+=h.x-x,D.z+=h.z-b,$t(D)})}function Fn(){U.sel&&(Yt(),Ct.filter(h=>Ue[h.k].L==="top").forEach($t))}function tn(){let h=U.sel;if(!h||Ue[h.k].L==="wall")return;let x=Ue[h.k].sf?kn(h):[];x.length&&(x.forEach(b=>{sn(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),mn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),h.r=(h.r+1)%4,$t(h),Yt()}function Cn(){let h=U.sel;if(!h||Ue[h.k].fixed)return;(Ue[h.k].sf?kn(h):[]).forEach(b=>{sn(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),U.sel=null,sn(h),o.inv[h.k]=(o.inv[h.k]||0)+1,bt.visible=!1,Xn.classList.remove("on"),on(),xi(),Mt()}function dn(){let h=U.sel;if(h){if(!ue(h,h)){mn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}h.last=null,U.sel=null,bt.visible=!1,Xn.classList.remove("on"),on(),xi()}}function Pn(h){let x=Ue[h],b={k:h,x:0,z:0,r:0},v=U.cam.x,P=U.cam.z,D=null,$=1e9;if(x.L==="wall")for(let j of[0,1,3,2].filter(tt=>!U.low[ft(tt)]))for(let tt=0;tt<10;tt++){let It={k:h,r:j,x:j===0||j===2?tt:j===1?0:ge-1,z:j===1||j===3?tt:j===0?0:Et-1};if(Xt(It)){let[Ve,,Te]=At(It),he=Math.hypot(Ve-v,Te-P);he<$&&($=he,D=It)}}else for(let j=0;j<Bh;j++)for(let tt=Uf;tt<Ff;tt++){let It={k:h,x:tt,z:j,r:0};if(!ue(It))continue;let[Ve,,Te]=At(It),he=gt(tt,j),Ze=Math.hypot(Ve-v,Te-P)+(he===U.inside?0:6)+(x.L==="top"&&!Wt(tt,j)?1.5:0);Ze<$&&($=Ze,D=It)}D?Object.assign(b,D):(b.x=1,b.z=1),Ee(b,!0),o.inv[h]--,o.inv[h]||delete o.inv[h],wi(b),D||Yt(),on(),xi(),Mt()}function On(h,x,b,v,P){let D=n.coins?n.coins():0;fe.innerHTML=`<h3>\u8CB7\u4E0B\u300C${In(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${gr(v)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${gr(D)}</b></p>${D<v?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<v?"disabled":""}>\u8CB7\u4E0B</button></div>`,fe.classList.add("on"),fe._buy=()=>{let $=!1;try{$=n.buy?n.buy(v,b):!1}catch{}if(!$){mn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}fe.classList.remove("on"),P()}}let pn=null,ci=!1;function Di(h){return pn&&!h?Promise.resolve(pn):n.msgs?Promise.resolve(n.msgs()).then(x=>(pn=(x||[]).slice().sort((b,v)=>(v.t||0)-(b.t||0)),ci=!1,pn),()=>(ci=!0,pn=[],pn)):(pn=[],Promise.resolve(pn))}let Us="";function br(){Ki(),fe.innerHTML=`<h3>\u{1F4DC} ${In(o.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,fe.classList.add("on"),Di(!0).then(h=>{if(!fe.classList.contains("on"))return;let x=h.slice(0,30).map(v=>`<div class="msg"><b>${In(v.name||"\u73A9\u5BB6")}</b><small>${v.t?new Date(v.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${v.gift&&Ue[v.gift]?` <small>\u{1F381} ${In(Ue[v.gift].n)}</small>`:""}<br>${In(v.msg||"")}</div>`).join("")||`<p style="opacity:.7">${ci?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let v=r?0:h.filter(P=>P.gift&&Ue[P.gift]&&!o.gc[P.id]).length;b=`<div class="h3bt">${v?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${v} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let v=n.giftSent?n.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${i.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${v?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...O1].map(P=>`<button type="button" data-h3="gpick" data-k="${P}" class="${Us===P?"on":""}">${P?In(Ue[P].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}fe.innerHTML=`<h3>\u{1F4DC} ${In(o.name)} \u7684\u7559\u8A00\u677F</h3>${x}${b}`})}function Vh(){if(i.demo){mn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),fe.classList.remove("on");return}let h=fe.querySelector("#h3msg"),x=(h&&h.value||"").trim().slice(0,60);if(x.length<1){mn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=n.giftSent&&n.giftSent()?"":Us,v=fe.querySelector('[data-h3="post"]');v&&(v.disabled=!0),Promise.resolve(n.post?n.post({msg:x,gift:b}):null).then(()=>{mn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),Us="",pn=null,fe.classList.remove("on")},()=>{mn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),v&&(v.disabled=!1)})}function kf(){if(Wr.forEach(x=>c.remove(x)),Wr.length=0,xa.length=0,!s||!pn)return;let h=pn.filter(x=>x.gift&&Ue[x.gift]&&!o.gc[x.id]);h.slice(0,5).forEach((x,b)=>{let v=new ve;v.position.set(gi.x-1.1-b%3*.55,0,gi.z+.4+Math.floor(b/3)*.5),c.add(v);let P=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=A(.42,.36,.42,jt(P),0,.18,0,v);A(.44,.38,.08,jt("#fff3d6"),0,.18,0,v),A(.08,.38,.44,jt("#fff3d6"),0,.18,0,v);let $=A(.46,.08,.46,jt(P),0,.4,0,v),j=new mt(new mi(.08,10,8),jt("#fff3d6"));j.position.y=.48,j.scale.set(1.6,.8,1),v.add(j),v.traverse(tt=>{tt.isMesh&&xa.push(tt)}),Wr.push(v),v.userData.ph=b}),h.length&&mn(i.island?`\u6709 ${h.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${h.length} \u4EFD\u79AE\u7269\uFF01`)}function Gf(){if(!s||!pn)return;let h=pn.filter(x=>x.gift&&Ue[x.gift]&&!o.gc[x.id]);h.length&&(h.forEach(x=>{o.inv[x.gift]=(o.inv[x.gift]||0)+1,o.gc[x.id]=1}),xi(),kf(),fe.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${h.map(x=>`<div class="msg"><b>${In(x.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${In(Ue[x.gift].n)}\u300D<br>${In(x.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,fe.classList.add("on"))}function mm(){Ki(),fe.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${In(o.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,fe.classList.add("on")}let Vf=h=>{let x=h.target.closest("[data-h3]");if(!x||!e.contains(x)||x.disabled)return;let b=x.dataset.h3,v=x.dataset.k;if(b==="close")Ki();else if(b==="more"&&U.talk)Yi(U.talk);else if(b==="build")C("build");else if(b==="done")C("walk");else if(b==="rename")mm();else if(b==="nameok"){let P=(fe.querySelector("#h3name").value||"").trim().slice(0,12);P&&(o.name=P,Rt(),xi()),fe.classList.remove("on")}else if(b==="board"){if(U.mode!=="walk")return;i.island?br():Ds(gi.x,gi.z+1,br)}else if(b==="claim")Gf();else if(b==="fp")U.fp=!U.fp,Ml.v=U.fp,Si();else if(b==="exit"){if(i.island){U.exited=!0;try{n.exit&&n.exit()}catch{}}}else if(b==="pclose")fe.classList.remove("on");else if(b==="post")Vh();else if(b==="gpick")Us=v||"",fe.querySelectorAll('[data-h3="gpick"]').forEach(P=>P.classList.toggle("on",(P.dataset.k||"")===Us));else if(b==="buyok"&&fe._buy)fe._buy();else if(b==="cat")B=v,Mt();else if(b==="item"){let P=Ue[v];U.sel&&!U.sel.ok&&Li(U.sel),wi(null),o.inv[v]?Pn(v):On("item",v,P.n,P.p,()=>{o.inv[v]=(o.inv[v]||0)+1,Pn(v)})}else if(b==="floor"){let P=Af.find($=>$[0]===v),D=()=>{o.fo[v]=1,o.fl=v,Pt(v),xi(),Mt()};o.fo[v]?D():On("floor",v,P[1],P[2],D)}else if(b==="wall"){let P=Rf.find($=>$[0]===v),D=()=>{o.wo[v]=1,o.wa=v,Jt(v),xi(),Mt()};o.wo[v]?D():On("wall",v,P[1],P[2],D)}else if(b==="expand"){let P=o.sz|0,D=Tl[P+1];if(!D)return;On("expand","x",`\u64F4\u5EFA\u5230 ${D[0]}\xD7${D[1]} \u683C\uFF08\u73FE\u5728 ${ge}\xD7${Et}\uFF09`,D[2],()=>{o.sz=P+1,Mn();try{n.save&&n.save(o,!0)}catch{}mn("\u64F4\u5EFA\u5B8C\u6210\uFF01"),n.reload&&setTimeout(()=>n.reload(),400)})}else b==="rot"?tn():b==="store"?Cn():b==="ok"&&dn()};e.addEventListener("click",Vf),Di().then(h=>{if(!U.dead&&s&&!r){kf();let x={};h.filter(b=>b.name&&!x[b.from||b.name]&&(x[b.from||b.name]=1)).slice(0,3).forEach(it)}});let gm={get dead(){return U.dead},set dead(h){h&&Hh()},cv:t,dispose:Hh,data:()=>JSON.parse(JSON.stringify(Mn())),probe(){let h=x=>{let b=ms(x);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:U.mode,fp:U.fp,fpK:+U.fpK.toFixed(2),inside:U.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+ee.x.toFixed(2),z:+ee.z.toFixed(2)},yaw:+U.yaw.toFixed(2),sel:U.sel?{k:U.sel.k,x:U.sel.x,z:U.sel.z,r:U.sel.r,ok:U.sel.ok}:null,items:Ct.map(x=>Object.assign({k:x.k,x:x.x,z:x.z,r:x.r},h(new z(x.g.position.x,x.g.position.y+.4,x.g.position.z)))),npcs:J.filter(x=>!x.hidden).map(x=>Object.assign({id:x.d.id||x.kind2,kind:x.kind2,state:x.state},h(new z(x.x,x.h*.5,x.z)))),board:h(new z(gi.x,1.15,gi.z)),gifts:Wr.length,card:vn.classList.contains("on")?vn.textContent:"",pan:fe.classList.contains("on")?fe.textContent:"",cozy:Sl(Mn()),inv:Object.assign({},o.inv),name:o.name,fl:o.fl,wa:o.wa,tag:ee.tag?ee.tag.visible:!1,cellPx:(x,b)=>h(new z(x,0,b))}},px(h,x,b){let v=ms(new z(h,x,b));return{x:Math.round(v.x),y:Math.round(v.y)}},teleport(h,x){ee.x=h,ee.z=x,U.inside=x<Et},setYaw(h){U.yaw=U.yawT=h},setDist(h){U.dist=U.distT=h}};function Hh(){if(!U.dead){if(U.dead=!0,cancelAnimationFrame(U.raf),clearTimeout(ps),s)try{Mn(),n.save&&n.save(o,!0)}catch{}document.removeEventListener("keydown",_o),document.removeEventListener("keyup",yo),e.removeEventListener("click",Vf),Nn.forEach(h=>h.remove()),c.traverse(h=>{h.geometry&&h.geometry.dispose(),(h.material?Array.isArray(h.material)?h.material:[h.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),ht&&ht.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let Rl=0,Cl=0,Hf=0,Qi=1,Il=0,Wh=0,Wf=9,Pl=.9,Mo=new z,gs=new z,Fs=new z;function xm(h){return Math.round(os(1.75-(h-380)/440*.6,1.15,1.75)*20)/20}function _m(){let h=t.getBoundingClientRect(),x=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),v=Math.min(2,window.devicePixelRatio||1),P=xm(h.height||b);P!==Is&&(Is=P,xr.forEach(D=>{D.h=D.h0*Is,D.w=D.h*D.ar})),!(x===Rl&&b===Cl&&v===Hf)&&(Rl=x,Cl=b,Hf=v,Qi=os(h.width*v/x,.5,2.2),Qi=Math.min(Qi,Math.sqrt(2e6/(x*b))),Pl=Math.max(Math.min(Qi,.9),Qi*.8),Qi=Math.max(Pl,Math.min(Qi,Wf)),l.setPixelRatio(Qi),l.setSize(x,b,!1),u.aspect=x/b,u.updateProjectionMatrix())}function Xf(h,x){if(!h.path||!h.path.length)return!0;let[b,v]=h.path[0],P=b-h.x,D=v-h.z,$=Math.hypot(P,D),j=h.sp;if($<.06)return h.path.shift(),!h.path.length;let tt=Math.min($,j*x);h.x+=P/$*tt,h.z+=D/$*tt,h.moving=!0,h.ph+=x*(4+j*3.2);let It=P*gs.x+D*gs.z;return Math.abs(It)>.05&&(h.face=It>0?1:-1),!1}function qf(h){if(U.dead)return;if(!document.contains(t)){Hh();return}U.raf=requestAnimationFrame(qf);let x=Math.min(.1,(h-U.last)/1e3);U.last=h,U.t+=x;let b=U.t;_m(),Il+=x,Wh++,Il>1.2&&(Il/Wh>.028&&(l.shadowMap.enabled?(l.shadowMap.enabled=!1,c.traverse(me=>{me.material&&[].concat(me.material).forEach(Pe=>Pe.needsUpdate=!0)})):Qi>Pl+.01&&(Qi=Math.max(Pl,Qi*.88),Wf=Qi,l.setPixelRatio(Qi),l.setSize(Rl,Cl,!1))),Il=0,Wh=0);let v=U.keys;v.q&&(U.yawT+=x*1.8),v.e&&(U.yawT-=x*1.8),U.camV&&(U.yawT+=U.camV*x*1.8),U.yaw+=(U.yawT-U.yaw)*Math.min(1,x*8),U.pitch+=(U.pitchT-U.pitch)*Math.min(1,x*8),U.dist+=(U.distT-U.dist)*Math.min(1,x*5);let P=Math.sin(U.yaw),D=Math.cos(U.yaw);if(Mo.set(-P,0,-D),gs.set(D,0,-P),ee.moving=!1,U.mode==="walk"&&!fe.classList.contains("on")){let K=0,me=0,Pe=0,un=1e9;if(U.joy)K=gs.x*U.joy.x+Mo.x*-U.joy.y,me=gs.z*U.joy.x+Mo.z*-U.joy.y,Pe=Math.hypot(U.joy.x,U.joy.y);else{let wn=(v.arrowright||v.d?1:0)-(v.arrowleft||v.a?1:0),fn=(v.arrowup||v.w?1:0)-(v.arrowdown||v.s?1:0);if(wn||fn){let Tn=Math.hypot(wn,fn);K=(gs.x*wn+Mo.x*fn)/Tn,me=(gs.z*wn+Mo.z*fn)/Tn,Pe=1}else if(U.tgt){if(!U.tgt.path){let Bn=yr(ee.x,ee.z,Math.floor(U.tgt.x),Math.floor(U.tgt.z));U.tgt.path=Bn?Bn.slice(1):[],Bn?U.tgt.path.length?U.tgt.path[U.tgt.path.length-1]=[U.tgt.x,U.tgt.z]:U.tgt.path=[[U.tgt.x,U.tgt.z]]:U.tgt.path=[[U.tgt.x,U.tgt.z]]}let Tn=U.tgt.path[0];if(Tn){let Bn=Tn[0]-ee.x,$i=Tn[1]-ee.z,ts=Math.hypot(Bn,$i);if(ts<.12){if(U.tgt.path.shift(),!U.tgt.path.length){let Os=U.tgt.fn;U.tgt=null,Os&&Os()}}else K=Bn/ts,me=$i/ts,Pe=1,un=ts}else{let Bn=U.tgt.fn;U.tgt=null,Bn&&Bn()}}}if(Pe>.05){let wn=Math.hypot(K,me)||1,fn=4*Math.min(1,Pe),Tn=Math.min(fn*x,un),Bn=K/wn*Tn,$i=me/wn*Tn,ts=!1;if(Yn(ee.x+Bn,ee.z+$i,ee.z)?(ee.x+=Bn,ee.z+=$i,ts=!0):Yn(ee.x+Bn,ee.z,ee.z)?(ee.x+=Bn,ts=!0):Yn(ee.x,ee.z+$i,ee.z)&&(ee.z+=$i,ts=!0),!ts&&U.tgt&&(U.tgt.stuck=(U.tgt.stuck||0)+x,U.tgt.stuck>.6)){let Os=U.tgt.fn;U.tgt=null,Os&&Math.hypot(ee.x-gi.x,ee.z-gi.z)<3&&Os()}if(ts){ee.moving=!0,ee.ph+=x*9*Math.min(1,Pe);let Os=K/wn*gs.x+me/wn*gs.z;Math.abs(Os)>.2&&(ee.face=Os>0?1:-1)}U.talk&&Math.hypot(U.talk.x-ee.x,U.talk.z-ee.z)>6&&Ki()}}if(i.island&&!U.exited&&ee.z>Et+.5&&U.mode==="walk"){U.exited=!0;try{n.exit&&n.exit()}catch{}return}if(a){let K=U.mode==="walk"&&!U.exited&&ee.z>Et-2&&Math.abs(ee.x-Hi)<2;if(Un.classList.toggle("on",K),K){let me=ms(new z(Hi,U.low&&U.low.front?.5:2.7,Et-.15)),Pe=Xi();Un.style.left=me.x-Pe.left+"px",Un.style.top=me.y-Pe.top+"px"}}let $=U.inside;U.inside=ee.z<Et-.05,$!==U.inside&&U.mode==="walk"&&(U.distT=U.inside?10.5:13,Wn.textContent=U.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${o.name}\u300D`:"\u5E97\u5916",Wn.classList.add("on"),clearTimeout(Wn.t),Wn.t=setTimeout(()=>Wn.classList.remove("on"),1800));for(let K of J){if(K.moving=!1,K.kind2==="owner")continue;if(K.state==="talk"){K.face=(ee.x-K.x)*gs.x+(ee.z-K.z)*gs.z>0?1:-1;continue}if(K.state==="out"){if(K.t-=x,K.t<=0){let fn=Math.random()<.5;K.x=fn?Rs+4:Cs-4,K.z=Et+Ii(3.5,5.5),K.hidden=!1,K.alpha=0,K.stops=2+Math.floor(Math.random()*3);let Tn=qt(K);(!Tn||!Kt(K,Tn[0],Tn[1]))&&(K.hidden=!0,K.t=3)}continue}if(K.alpha=Math.min(1,(K.alpha||0)+x*2),K.state==="walk")Xf(K,x)&&(K.state="idle",K.t=Ii(3,7));else if(K.state==="idle"){if(K.t-=x,K.t<=0)if(K.stops--,K.stops<=0){let fn=Math.random()<.5?Rs+1:Cs-2;Kt(K,fn,Et+4)?K.state="leave":K.t=2}else{let fn=qt(K);(!fn||!Kt(K,fn[0],fn[1]))&&(K.t=2)}}else K.state==="leave"&&(Xf(K,x)?(K.hidden=!0,K.state="out",K.t=Ii(4,12)):(K.x<Rs+3||K.x>Cs-3)&&(K.alpha=Math.max(0,Math.min(K.alpha,Math.min(K.x-Rs,Cs-K.x)/3))));let me=K.x-ee.x,Pe=K.z-ee.z,un=Math.hypot(me,Pe),wn=.55;if(un<wn&&un>.001&&K.state!=="walk"&&K.state!=="leave"){let fn=K.x+me/un*(wn-un),Tn=K.z+Pe/un*(wn-un);Yn(fn,Tn,K.z)&&(K.x=fn,K.z=Tn)}}if(te){let K=te;K.t-=x;let me=!1;if(K.path&&K.path.length){let[un,wn]=K.path[0],fn=un-K.x,Tn=wn-K.z,Bn=Math.hypot(fn,Tn);if(Bn<.05)K.path.shift();else{let $i=Math.min(Bn,1.1*x);K.x+=fn/Bn*$i,K.z+=Tn/Bn*$i,K.g.rotation.y=Math.atan2(-Tn,fn),me=!0}K.path.length||(K.t=Ii(3,8))}else if(K.t<=0){let un=ls(!0),wn=un[Math.floor(Math.random()*un.length)],fn=Ct.find($i=>$i.k==="catbed"),Tn=fn&&Math.random()<.35?[fn.x,fn.z]:wn,Bn=Tn&&yr(K.x,K.z,Tn[0],Tn[1]);Bn&&Bn.length?(K.path=Bn,K.sleep=!1):K.t=3,fn&&Tn&&Tn[0]===fn.x&&Tn[1]===fn.z&&(K.sleep=!0)}K.ph+=x*(me?12:0),K.legs.forEach((un,wn)=>{un.rotation.z=me?Math.sin(K.ph+wn*Math.PI)*.5:0}),K.tail.rotation.z=.8+Math.sin(b*2)*.25;let Pe=!me&&K.sleep&&Ct.some(un=>un.k==="catbed"&&Math.hypot(un.g.position.x-K.x,un.g.position.z-K.z)<.4);K.g.position.set(K.x,Pe?.1:0,K.z),K.g.scale.y=Pe?.75+Math.sin(b*1.5)*.03:1}let j=ee.x,tt=ee.z,It=1.1;U.mode==="build"&&(U.inside?(j=ge/2+P*2.2,tt=Et/2+D*2.2):(j=Hi+P*2,tt=Et+2.5+D*2),It=.4),U.cam.x+=(j-U.cam.x)*Math.min(1,x*(U.mode==="build"?4:12)),U.cam.z+=(tt-U.cam.z)*Math.min(1,x*(U.mode==="build"?4:12)),U.cam.y+=(It-U.cam.y)*Math.min(1,x*4);let Ve=Rl/Cl,Te=Ve<1.45?1.45/Ve:1,he=U.dist*Te*Math.max(ge/10,Et/8),Ze=U.mode==="build"?Math.max(.75,U.pitch):U.pitch;Fs.set(U.cam.x+P*Math.cos(Ze)*he,U.cam.y+Math.sin(Ze)*he,U.cam.z+D*Math.cos(Ze)*he),U.fpK+=((U.fp&&U.mode==="walk"?1:0)-U.fpK)*Math.min(1,x*5);let vi=U.fpK,cs=Math.cos(U.fpP),Xh=Math.sin(U.fpP);ye.set(U.cam.x,1.5,U.cam.z),Ge.set(U.cam.x,U.cam.y+.5,U.cam.z),re.set(ye.x-P*cs*10,ye.y+Xh*10,ye.z-D*cs*10),Fs.lerp(ye,vi),Ge.lerp(re,vi),u.position.copy(Fs),u.lookAt(Ge),g.position.copy(Fs);let Ni=U.inside||U.mode==="build"&&U.inside;Ut.visible=!Ni;let Yr=U.low={back:Ni&&Fs.z<0,front:Ni&&Fs.z>Et,left:Ni&&Fs.x<0,right:Ni&&Fs.x>ge};for(let K in le){let me=Yr[K];for(let Pe of le[K]){let un=me?.14:1;Pe.scale.y+=(un-Pe.scale.y)*Math.min(1,x*10)}}for(let K of Ct)if(Ue[K.k].L==="wall"){let me=ft(K.r);K.g.visible=!Yr[me]||!Ni}se.visible=!Yr.front;for(let K of Xe)K.visible=!(Ni&&(Yr.left&&K.position.x<0||Yr.right&&K.position.x>ge));L.intensity=E.intensity=Ni?14:6,ee.hidden=U.fpK>.5;let ym=Math.atan2(Fs.x-U.cam.x,Fs.z-U.cam.z);for(let K of xr){let me=!K.hidden,Pe=!Ni&&K.z<Et;if(K.grp.visible=me,K.sh.visible=me,K.tag&&(K.tag.visible=me&&!Pe),K.bub&&(K.bub.visible=me&&!Pe&&K!==U.talk&&K.state!=="leave"),!me)continue;let un=K.w,wn=K.h,fn=K.moving?1:0,Tn=Math.sin(K.ph),Bn=fn?Math.abs(Tn)*.06:0,$i=fn?Tn*.06:Math.sin(b*1.6+K.ph)*.01,ts=fn?1+Math.cos(K.ph*2)*.025:1+Math.sin(b*1.6+K.ph)*.008,Os=K.state==="sleep"?Math.sin(b*1.2)*.015:0;K.grp.position.set(K.x,Bn,K.z),K.m.rotation.set(0,ym,$i*K.face+Os),K.m.scale.set(un*K.face*(2-ts),wn*ts,1),K.mat.opacity=K.alpha==null?1:K.alpha,K.sh.position.set(K.x,.025,K.z),K.sh.scale.set(un*.7,un*.4,1),K.tag&&(K.tag.position.set(K.x,wn+.3,K.z),K.tag.material.opacity=K.alpha==null?1:K.alpha),K.bub&&K.bub.position.set(K.x,wn+(K.tag?.82:.45)+Math.sin(b*2.3+K.ph)*.06,K.z)}_e.rotation.x=Math.sin(b*1.7)*.05;for(let K of Vt)K.material.opacity=.45+.12*Math.sin(b*6);for(let K of nn)K.material.opacity=.5+.05*Math.sin(b*3+K.parent.position.x);for(let K of Ct){let me=K.g.userData;if(me.glows)for(let Pe of me.glows)Pe.material.opacity=(Pe.userData.o0||(Pe.userData.o0=Pe.material.opacity))*(.85+.15*Math.sin(b*5+K.x*1.7));if(me.swing&&(me.swing.rotation.z=Math.sin(b*1.5+K.x)*.06),me.wave&&(me.wave.rotation.x=-.6+Math.sin(b*4)*.5),me.fish&&me.fish.forEach((Pe,un)=>{let wn=b*(.6+un*.2)+un*2;Pe.position.x=Math.cos(wn)*.2,Pe.position.z=Math.sin(wn)*.12,Pe.rotation.y=-wn+Math.PI/2*(un%2?1:-1)}),me.spin&&(me.spin.rotation.y=b*3),me.hands){let Pe=new Date;me.hands[0].rotation.z=-(Pe.getHours()%12+Pe.getMinutes()/60)/12*Math.PI*2,me.hands[1].rotation.z=-Pe.getMinutes()/60*Math.PI*2,me.hands.forEach(un=>{let wn=un.rotation.z,fn=un.geometry.parameters.height/2;un.position.x=-Math.sin(wn)*fn,un.position.y=me.handY+Math.cos(wn)*fn})}}for(let K of Wr)K.position.y=Math.abs(Math.sin(b*3+K.userData.ph))*.12;{let K=et.geometry.attributes.position.array;for(let me=0;me<de;me++){let Pe=F[me];K[me*3]+=(Pe.vx+Math.sin(b*1.5+Pe.ph)*.3)*x,K[me*3+1]+=Pe.vy*x,K[me*3+2]+=Math.cos(b*1.2+Pe.ph)*.2*x,K[me*3+1]<.02&&Lt(me)}et.geometry.attributes.position.needsUpdate=!0}ke.children[1].rotation.z=Math.sin(b*.8)*.08,ke.children[4].rotation.y=Math.sin(b*2)*.4;{let K=s?Ct.find(Pe=>Pe.k==="register"):null,me=K?bo():0;ji.visible=!!(K&&me>0&&U.mode==="walk"&&U.inside),ji.visible&&(ji.position.set(K.g.position.x,1.75+Math.sin(b*3)*.1,K.g.position.z),ji.material.rotation=0,ji.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let K=m.length-1;K>=0;K--){let me=m[K],Pe=me.userData;Pe.t+=x,Pe.v.y-=9*x,me.position.addScaledVector(Pe.v,x),me.material.opacity=Math.max(0,1-Pe.t/1.1),Pe.t>1.1&&(c.remove(me),me.material.dispose(),m.splice(K,1))}U.sel&&(bt.material.opacity=.7+.3*Math.sin(b*6)),l.render(c,u)}return U.raf=requestAnimationFrame(qf),gm}return Tm(k1);})();
