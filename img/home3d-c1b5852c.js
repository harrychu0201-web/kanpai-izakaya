var Home3D=(()=>{var Hl=Object.defineProperty;var Vd=Object.getOwnPropertyDescriptor;var Hd=Object.getOwnPropertyNames;var Gd=Object.prototype.hasOwnProperty;var Wd=(n,t)=>{for(var e in t)Hl(n,e,{get:t[e],enumerable:!0})},Xd=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hd(t))!Gd.call(n,s)&&s!==e&&Hl(n,s,{get:()=>t[s],enumerable:!(i=Vd(t,s))||i.enumerable});return n};var qd=n=>Xd(Hl({},"__esModule",{value:!0}),n);var I_={};Wd(I_,{D0:()=>_i,D1:()=>vi,DX:()=>Bi,EXO:()=>Yi,H3CSS:()=>R_,RD:()=>bt,RW:()=>ye,STARS:()=>wf,WH:()=>Hn,cozyOf:()=>_a,dailyIncome:()=>Mf,defaultEx:()=>xf,demoHome:()=>E_,freshHome:()=>Pd,freshHomeInterior:()=>T_,island:()=>Ad,starsOf:()=>bf,start:()=>C_});var Yd=0,Nf=1,$d=2;var Yu=1,jh=2,Ps=3,er=0,$n=1,In=2,js=0,ao=1,gs=2,zf=3,Ff=4,Zd=5,vr=100,Jd=101,Kd=102,jd=103,Qd=104,tp=200,ep=201,np=202,ip=203,Tc=204,Ec=205,sp=206,rp=207,op=208,ap=209,lp=210,cp=211,hp=212,fp=213,up=214,Ac=0,Rc=1,Cc=2,fo=3,Ic=4,Pc=5,Lc=6,Dc=7,Qh=0,dp=1,pp=2,Qs=0,mp=1,gp=2,xp=3,yp=4,_p=5,vp=6,bp=7;var $u=300,uo=301,po=302,Uc=303,Nc=304,Il=306,zs=1e3,Mr=1001,zc=1002,is=1003,Mp=1004;var Aa=1005;var ms=1006,Gl=1007;var wr=1008;var Fs=1009,Zu=1010,Ju=1011,ta=1012,tf=1013,Sr=1014,Ls=1015,da=1016,ef=1017,nf=1018,mo=1020,Ku=35902,ju=1021,Qu=1022,ns=1023,td=1024,ed=1025,lo=1026,go=1027,nd=1028,sf=1029,id=1030,rf=1031;var of=1033,il=33776,sl=33777,rl=33778,ol=33779,Fc=35840,Oc=35841,kc=35842,Bc=35843,Vc=36196,Hc=37492,Gc=37496,Wc=37808,Xc=37809,qc=37810,Yc=37811,$c=37812,Zc=37813,Jc=37814,Kc=37815,jc=37816,Qc=37817,th=37818,eh=37819,nh=37820,ih=37821,al=36492,sh=36494,rh=36495,sd=36283,oh=36284,ah=36285,lh=36286;var ll=2300,ch=2301,Wl=2302,Of=2400,kf=2401,Bf=2402;var wp=3200,Sp=3201;var rd=0,Tp=1,Js="",Fn="srgb",Co="srgb-linear",Pl="linear",un="srgb";var Vr=7680;var Vf=519,Ep=512,Ap=513,Rp=514,od=515,Cp=516,Ip=517,Pp=518,Lp=519,hh=35044;var Hf="300 es",Ds=2e3,cl=2001,nr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xl=Math.PI/180,fh=180/Math.PI;function Us(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[n&255]+oi[n>>8&255]+oi[n>>16&255]+oi[n>>24&255]+"-"+oi[t&255]+oi[t>>8&255]+"-"+oi[t>>16&15|64]+oi[t>>24&255]+"-"+oi[e&63|128]+oi[e>>8&255]+"-"+oi[e>>16&255]+oi[e>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function ti(n,t,e){return Math.max(t,Math.min(e,n))}function Dp(n,t){return(n%t+t)%t}function ql(n,t,e){return(1-e)*n+e*t}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var At=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ti(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],f=i[4],u=i[7],p=i[2],d=i[5],v=i[8],T=s[0],y=s[3],m=s[6],S=s[1],C=s[4],M=s[7],q=s[2],z=s[5],V=s[8];return r[0]=o*T+a*S+l*q,r[3]=o*y+a*C+l*z,r[6]=o*m+a*M+l*V,r[1]=h*T+f*S+u*q,r[4]=h*y+f*C+u*z,r[7]=h*m+f*M+u*V,r[2]=p*T+d*S+v*q,r[5]=p*y+d*C+v*z,r[8]=p*m+d*M+v*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8];return e*o*f-e*a*h-i*r*f+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],u=f*o-a*h,p=a*l-f*r,d=h*r-o*l,v=e*u+i*p+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/v;return t[0]=u*T,t[1]=(s*h-f*i)*T,t[2]=(a*i-s*o)*T,t[3]=p*T,t[4]=(f*e-s*l)*T,t[5]=(s*r-a*e)*T,t[6]=d*T,t[7]=(i*l-h*e)*T,t[8]=(o*e-i*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new ze;function ad(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Up(){let n=ea("canvas");return n.style.display="block",n}var Gf={};function Zo(n){n in Gf||(Gf[n]=!0,console.warn(n))}function Np(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function zp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qe={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===un&&(n.r=Ns(n.r),n.g=Ns(n.g),n.b=Ns(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===un&&(n.r=co(n.r),n.g=co(n.g),n.b=co(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Js?Pl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wf=[.64,.33,.3,.6,.15,.06],Xf=[.2126,.7152,.0722],qf=[.3127,.329],Yf=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$f=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Co]:{primaries:Wf,whitePoint:qf,transfer:Pl,toXYZ:Yf,fromXYZ:$f,luminanceCoefficients:Xf,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:Wf,whitePoint:qf,transfer:un,toXYZ:Yf,fromXYZ:$f,luminanceCoefficients:Xf,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});var Hr,uh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hr===void 0&&(Hr=ea("canvas")),Hr.width=t.width,Hr.height=t.height;let i=Hr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ea("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ns(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ns(e[i]/255)*255):e[i]=Ns(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,hl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function $l(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?uh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,wi=class n extends nr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mr,s=Mr,r=ms,o=wr,a=ns,l=Fs,h=n.DEFAULT_ANISOTROPY,f=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Us(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=$u;wi.DEFAULT_ANISOTROPY=1;var pn=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],f=l[4],u=l[8],p=l[1],d=l[5],v=l[9],T=l[2],y=l[6],m=l[10];if(Math.abs(f-p)<.01&&Math.abs(u-T)<.01&&Math.abs(v-y)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+T)<.1&&Math.abs(v+y)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(h+1)/2,M=(d+1)/2,q=(m+1)/2,z=(f+p)/4,V=(u+T)/4,B=(v+y)/4;return C>M&&C>q?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=z/i,r=V/i):M>q?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=z/s,r=B/s):q<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),i=V/r,s=B/r),this.set(i,s,r,e),this}let S=Math.sqrt((y-v)*(y-v)+(u-T)*(u-T)+(p-f)*(p-f));return Math.abs(S)<.001&&(S=1),this.x=(y-v)/S,this.y=(u-T)/S,this.z=(p-f)/S,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dh=class extends nr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pn(0,0,t,e),this.scissorTest=!1,this.viewport=new pn(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ms,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new wi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new hl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ss=class extends dh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},fl=class extends wi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=is,this.minFilter=is,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ph=class extends wi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=is,this.minFilter=is,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],f=i[s+2],u=i[s+3],p=r[o+0],d=r[o+1],v=r[o+2],T=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=f,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=T;return}if(u!==T||l!==p||h!==d||f!==v){let y=1-a,m=l*p+h*d+f*v+u*T,S=m>=0?1:-1,C=1-m*m;if(C>Number.EPSILON){let q=Math.sqrt(C),z=Math.atan2(q,m*S);y=Math.sin(y*z)/q,a=Math.sin(a*z)/q}let M=a*S;if(l=l*y+p*M,h=h*y+d*M,f=f*y+v*M,u=u*y+T*M,y===1-a){let q=1/Math.sqrt(l*l+h*h+f*f+u*u);l*=q,h*=q,f*=q,u*=q}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o],p=r[o+1],d=r[o+2],v=r[o+3];return t[e]=a*v+f*u+l*d-h*p,t[e+1]=l*v+f*p+h*u-a*d,t[e+2]=h*v+f*d+a*p-l*u,t[e+3]=f*v-a*u-l*p-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),f=a(s/2),u=a(r/2),p=l(i/2),d=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*f*u+h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u-p*d*v;break;case"YXZ":this._x=p*f*u+h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u+p*d*v;break;case"ZXY":this._x=p*f*u-h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u-p*d*v;break;case"ZYX":this._x=p*f*u-h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u+p*d*v;break;case"YZX":this._x=p*f*u+h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u-p*d*v;break;case"XZY":this._x=p*f*u-h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],f=e[6],u=e[10],p=i+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ti(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,f=e._w;return this._x=i*f+o*a+s*h-r*l,this._y=s*f+o*l+r*a-i*h,this._z=r*f+o*h+i*l-s*a,this._w=o*f-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),f=Math.atan2(h,a),u=Math.sin((1-e)*f)/h,p=Math.sin(e*f)/h;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),f=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*h+o*u-a*f,this.y=i+l*f+a*h-r*u,this.z=s+l*u+r*f-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ti(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zl=new N,Zf=new ir,Os=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Ca.subVectors(this.max,Vo),Gr.subVectors(t.a,Vo),Wr.subVectors(t.b,Vo),Xr.subVectors(t.c,Vo),Ws.subVectors(Wr,Gr),Xs.subVectors(Xr,Wr),dr.subVectors(Gr,Xr);let e=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-dr.z,dr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,dr.z,0,-dr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-dr.y,dr.x,0];return!Jl(e,Gr,Wr,Xr,Ca)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,Gr,Wr,Xr,Ca))?!1:(Ia.crossVectors(Ws,Xs),e=[Ia.x,Ia.y,Ia.z],Jl(e,Gr,Wr,Xr,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Es=[new N,new N,new N,new N,new N,new N,new N,new N],Qi=new N,Ra=new Os,Gr=new N,Wr=new N,Xr=new N,Ws=new N,Xs=new N,dr=new N,Vo=new N,Ca=new N,Ia=new N,pr=new N;function Jl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){pr.fromArray(n,r);let a=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),l=t.dot(pr),h=e.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>a)return!1}return!0}var Bp=new Os,Ho=new N,Kl=new N,xo=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Bp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);let e=Ho.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ho,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(Kl)),this.expandByPoint(Ho.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},As=new N,jl=new N,Pa=new N,qs=new N,Ql=new N,La=new N,tc=new N,na=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=As.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,e),As.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jl.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),qs.copy(this.origin).sub(jl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Pa),a=qs.dot(this.direction),l=-qs.dot(Pa),h=qs.lengthSq(),f=Math.abs(1-o*o),u,p,d,v;if(f>0)if(u=o*l-a,p=o*a-l,v=r*f,u>=0)if(p>=-v)if(p<=v){let T=1/f;u*=T,p*=T,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+h}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+h;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+h;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+h):p<=v?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+h):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+h);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jl).addScaledVector(Pa,p),d}intersectSphere(t,e){As.subVectors(t.center,this.origin);let i=As.dot(this.direction),s=As.dot(As)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),f>=0?(r=(t.min.y-p.y)*f,o=(t.max.y-p.y)*f):(r=(t.max.y-p.y)*f,o=(t.min.y-p.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,e,i,s,r){Ql.subVectors(e,t),La.subVectors(i,t),tc.crossVectors(Ql,La);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qs.subVectors(this.origin,t);let l=a*this.direction.dot(La.crossVectors(qs,La));if(l<0)return null;let h=a*this.direction.dot(Ql.cross(qs));if(h<0||l+h>o)return null;let f=-a*qs.dot(tc);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class n{constructor(t,e,i,s,r,o,a,l,h,f,u,p,d,v,T,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,f,u,p,d,v,T,y)}set(t,e,i,s,r,o,a,l,h,f,u,p,d,v,T,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=f,m[10]=u,m[14]=p,m[3]=d,m[7]=v,m[11]=T,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/qr.setFromMatrixColumn(t,0).length(),r=1/qr.setFromMatrixColumn(t,1).length(),o=1/qr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*f,d=o*u,v=a*f,T=a*u;e[0]=l*f,e[4]=-l*u,e[8]=h,e[1]=d+v*h,e[5]=p-T*h,e[9]=-a*l,e[2]=T-p*h,e[6]=v+d*h,e[10]=o*l}else if(t.order==="YXZ"){let p=l*f,d=l*u,v=h*f,T=h*u;e[0]=p+T*a,e[4]=v*a-d,e[8]=o*h,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-v,e[6]=T+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*f,d=l*u,v=h*f,T=h*u;e[0]=p-T*a,e[4]=-o*u,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*f,e[9]=T-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*f,d=o*u,v=a*f,T=a*u;e[0]=l*f,e[4]=v*h-d,e[8]=p*h+T,e[1]=l*u,e[5]=T*h+p,e[9]=d*h-v,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,d=o*h,v=a*l,T=a*h;e[0]=l*f,e[4]=T-p*u,e[8]=v*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-h*f,e[6]=d*u+v,e[10]=p-T*u}else if(t.order==="XZY"){let p=o*l,d=o*h,v=a*l,T=a*h;e[0]=l*f,e[4]=-u,e[8]=h*f,e[1]=p*u+T,e[5]=o*f,e[9]=d*u-v,e[2]=v*u-d,e[6]=a*f,e[10]=T*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Hp)}lookAt(t,e,i){let s=this.elements;return zi.subVectors(t,e),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),Ys.crossVectors(i,zi),Ys.lengthSq()===0&&(Math.abs(i.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),Ys.crossVectors(i,zi)),Ys.normalize(),Da.crossVectors(zi,Ys),s[0]=Ys.x,s[4]=Da.x,s[8]=zi.x,s[1]=Ys.y,s[5]=Da.y,s[9]=zi.y,s[2]=Ys.z,s[6]=Da.z,s[10]=zi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],f=i[1],u=i[5],p=i[9],d=i[13],v=i[2],T=i[6],y=i[10],m=i[14],S=i[3],C=i[7],M=i[11],q=i[15],z=s[0],V=s[4],B=s[8],L=s[12],R=s[1],H=s[5],st=s[9],nt=s[13],ot=s[2],Mt=s[6],rt=s[10],Rt=s[14],lt=s[3],Ut=s[7],$t=s[11],Ot=s[15];return r[0]=o*z+a*R+l*ot+h*lt,r[4]=o*V+a*H+l*Mt+h*Ut,r[8]=o*B+a*st+l*rt+h*$t,r[12]=o*L+a*nt+l*Rt+h*Ot,r[1]=f*z+u*R+p*ot+d*lt,r[5]=f*V+u*H+p*Mt+d*Ut,r[9]=f*B+u*st+p*rt+d*$t,r[13]=f*L+u*nt+p*Rt+d*Ot,r[2]=v*z+T*R+y*ot+m*lt,r[6]=v*V+T*H+y*Mt+m*Ut,r[10]=v*B+T*st+y*rt+m*$t,r[14]=v*L+T*nt+y*Rt+m*Ot,r[3]=S*z+C*R+M*ot+q*lt,r[7]=S*V+C*H+M*Mt+q*Ut,r[11]=S*B+C*st+M*rt+q*$t,r[15]=S*L+C*nt+M*Rt+q*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],f=t[2],u=t[6],p=t[10],d=t[14],v=t[3],T=t[7],y=t[11],m=t[15];return v*(+r*l*u-s*h*u-r*a*p+i*h*p+s*a*d-i*l*d)+T*(+e*l*d-e*h*p+r*o*p-s*o*d+s*h*f-r*l*f)+y*(+e*h*u-e*a*d-r*o*u+i*o*d+r*a*f-i*h*f)+m*(-s*a*f-e*l*u+e*a*p+s*o*u-i*o*p+i*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],u=t[9],p=t[10],d=t[11],v=t[12],T=t[13],y=t[14],m=t[15],S=u*y*h-T*p*h+T*l*d-a*y*d-u*l*m+a*p*m,C=v*p*h-f*y*h-v*l*d+o*y*d+f*l*m-o*p*m,M=f*T*h-v*u*h+v*a*d-o*T*d-f*a*m+o*u*m,q=v*u*l-f*T*l-v*a*p+o*T*p+f*a*y-o*u*y,z=e*S+i*C+s*M+r*q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/z;return t[0]=S*V,t[1]=(T*p*r-u*y*r-T*s*d+i*y*d+u*s*m-i*p*m)*V,t[2]=(a*y*r-T*l*r+T*s*h-i*y*h-a*s*m+i*l*m)*V,t[3]=(u*l*r-a*p*r-u*s*h+i*p*h+a*s*d-i*l*d)*V,t[4]=C*V,t[5]=(f*y*r-v*p*r+v*s*d-e*y*d-f*s*m+e*p*m)*V,t[6]=(v*l*r-o*y*r-v*s*h+e*y*h+o*s*m-e*l*m)*V,t[7]=(o*p*r-f*l*r+f*s*h-e*p*h-o*s*d+e*l*d)*V,t[8]=M*V,t[9]=(v*u*r-f*T*r-v*i*d+e*T*d+f*i*m-e*u*m)*V,t[10]=(o*T*r-v*a*r+v*i*h-e*T*h-o*i*m+e*a*m)*V,t[11]=(f*a*r-o*u*r-f*i*h+e*u*h+o*i*d-e*a*d)*V,t[12]=q*V,t[13]=(f*T*s-v*u*s+v*i*p-e*T*p-f*i*y+e*u*y)*V,t[14]=(v*a*s-o*T*s-v*i*l+e*T*l+o*i*y-e*a*y)*V,t[15]=(o*u*s-f*a*s+f*i*l-e*u*l-o*i*p+e*a*p)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,f=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,f*a+i,f*l-s*o,0,h*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,f=o+o,u=a+a,p=r*h,d=r*f,v=r*u,T=o*f,y=o*u,m=a*u,S=l*h,C=l*f,M=l*u,q=i.x,z=i.y,V=i.z;return s[0]=(1-(T+m))*q,s[1]=(d+M)*q,s[2]=(v-C)*q,s[3]=0,s[4]=(d-M)*z,s[5]=(1-(p+m))*z,s[6]=(y+S)*z,s[7]=0,s[8]=(v+C)*V,s[9]=(y-S)*V,s[10]=(1-(p+T))*V,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=qr.set(s[0],s[1],s[2]).length(),o=qr.set(s[4],s[5],s[6]).length(),a=qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ts.copy(this);let h=1/r,f=1/o,u=1/a;return ts.elements[0]*=h,ts.elements[1]*=h,ts.elements[2]*=h,ts.elements[4]*=f,ts.elements[5]*=f,ts.elements[6]*=f,ts.elements[8]*=u,ts.elements[9]*=u,ts.elements[10]*=u,e.setFromRotationMatrix(ts),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ds){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),d,v;if(a===Ds)d=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===cl)d=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ds){let l=this.elements,h=1/(e-t),f=1/(i-s),u=1/(o-r),p=(e+t)*h,d=(i+s)*f,v,T;if(a===Ds)v=(o+r)*u,T=-2*u;else if(a===cl)v=r*u,T=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=T,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qr=new N,ts=new xn,Vp=new N(0,0,0),Hp=new N(1,1,1),Ys=new N,Da=new N,zi=new N,Jf=new xn,Kf=new ir,xs=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],f=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ti(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ti(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ti(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ti(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ti(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ti(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xs.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gp=0,jf=new N,Yr=new ir,Rs=new xn,Ua=new N,Go=new N,Wp=new N,Xp=new ir,Qf=new N(1,0,0),tu=new N(0,1,0),eu=new N(0,0,1),nu={type:"added"},qp={type:"removed"},$r={type:"childadded",child:null},ec={type:"childremoved",child:null},ei=class n extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new xs,i=new ir,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xn},normalMatrix:{value:new ze}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(Qf,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return jf.copy(t).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qf,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ua.copy(t):Ua.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(Go,Ua,this.up):Rs.lookAt(Ua,Go,this.up),this.quaternion.setFromRotationMatrix(Rs),s&&(Rs.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(Rs),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),$r.child=t,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),f=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let h in a){let f=a[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ei.DEFAULT_UP=new N(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var es=new N,Cs=new N,nc=new N,Is=new N,Zr=new N,Jr=new N,iu=new N,ic=new N,sc=new N,rc=new N,oc=new pn,ac=new pn,lc=new pn,Ks=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),es.subVectors(t,e),s.cross(es);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){es.subVectors(s,e),Cs.subVectors(i,e),nc.subVectors(t,e);let o=es.dot(es),a=es.dot(Cs),l=es.dot(nc),h=Cs.dot(Cs),f=Cs.dot(nc),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(h*l-a*f)*p,v=(o*f-a*l)*p;return r.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Is)===null?!1:Is.x>=0&&Is.y>=0&&Is.x+Is.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Is.x),l.addScaledVector(o,Is.y),l.addScaledVector(a,Is.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,i),lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,i,s){return es.subVectors(i,e),Cs.subVectors(t,e),es.cross(Cs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return es.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),es.cross(Cs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Zr.subVectors(s,i),Jr.subVectors(r,i),ic.subVectors(t,i);let l=Zr.dot(ic),h=Jr.dot(ic);if(l<=0&&h<=0)return e.copy(i);sc.subVectors(t,s);let f=Zr.dot(sc),u=Jr.dot(sc);if(f>=0&&u<=f)return e.copy(s);let p=l*u-f*h;if(p<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(Zr,o);rc.subVectors(t,r);let d=Zr.dot(rc),v=Jr.dot(rc);if(v>=0&&d<=v)return e.copy(r);let T=d*h-l*v;if(T<=0&&h>=0&&v<=0)return a=h/(h-v),e.copy(i).addScaledVector(Jr,a);let y=f*v-d*u;if(y<=0&&u-f>=0&&d-v>=0)return iu.subVectors(r,s),a=(u-f)/(u-f+(d-v)),e.copy(s).addScaledVector(iu,a);let m=1/(y+T+p);return o=T*m,a=p*m,e.copy(i).addScaledVector(Zr,o).addScaledVector(Jr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Na={h:0,s:0,l:0};function cc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Me=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qe.workingColorSpace){if(t=Dp(t,1),e=ti(e,0,1),i=ti(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=cc(o,r,t+1/3),this.g=cc(o,r,t),this.b=cc(o,r,t-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(t,e=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let i=ld[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return Qe.fromWorkingColorSpace(ai.copy(this),t),Math.round(ti(ai.r*255,0,255))*65536+Math.round(ti(ai.g*255,0,255))*256+Math.round(ti(ai.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qe.workingColorSpace){Qe.fromWorkingColorSpace(ai.copy(this),e);let i=ai.r,s=ai.g,r=ai.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,f=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(ai.copy(this),e),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=Fn){Qe.fromWorkingColorSpace(ai.copy(this),t);let e=ai.r,i=ai.g,s=ai.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($s),this.setHSL($s.h+t,$s.s+e,$s.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($s),t.getHSL(Na);let i=ql($s.h,Na.h,e),s=ql($s.s,Na.s,e),r=ql($s.l,Na.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ai=new Me;Me.NAMES=ld;var Yp=0,ks=class extends nr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Us(),this.name="",this.blending=ao,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ec,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ve=class extends ks{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Nn=new N,za=new At,xi=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hh,this.updateRanges=[],this.gpuType=Ls,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)za.fromBufferAttribute(this,e),za.applyMatrix3(t),this.setXY(e,za.x,za.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix3(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hh&&(t.usage=this.usage),t}};var ul=class extends xi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var dl=class extends xi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ie=class extends xi{constructor(t,e,i){super(new Float32Array(t),e,i)}},$p=0,Wi=new xn,hc=new ei,Kr=new N,Fi=new Os,Wo=new Os,Yn=new N,yn=class n extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?dl:ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ze().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wi.makeRotationFromQuaternion(t),this.applyMatrix4(Wi),this}rotateX(t){return Wi.makeRotationX(t),this.applyMatrix4(Wi),this}rotateY(t){return Wi.makeRotationY(t),this.applyMatrix4(Wi),this}rotateZ(t){return Wi.makeRotationZ(t),this.applyMatrix4(Wi),this}translate(t,e,i){return Wi.makeTranslation(t,e,i),this.applyMatrix4(Wi),this}scale(t,e,i){return Wi.makeScale(t,e,i),this.applyMatrix4(Wi),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yn.addVectors(Fi.min,Wo.min),Fi.expandByPoint(Yn),Yn.addVectors(Fi.max,Wo.max),Fi.expandByPoint(Yn)):(Fi.expandByPoint(Wo.min),Fi.expandByPoint(Wo.max))}Fi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Yn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Yn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)Yn.fromBufferAttribute(a,h),l&&(Kr.fromBufferAttribute(t,h),Yn.add(Kr)),s=Math.max(s,i.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new N,l[B]=new N;let h=new N,f=new N,u=new N,p=new At,d=new At,v=new At,T=new N,y=new N;function m(B,L,R){h.fromBufferAttribute(i,B),f.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),p.fromBufferAttribute(r,B),d.fromBufferAttribute(r,L),v.fromBufferAttribute(r,R),f.sub(h),u.sub(h),d.sub(p),v.sub(p);let H=1/(d.x*v.y-v.x*d.y);isFinite(H)&&(T.copy(f).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(H),y.copy(u).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(H),a[B].add(T),a[L].add(T),a[R].add(T),l[B].add(y),l[L].add(y),l[R].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let B=0,L=S.length;B<L;++B){let R=S[B],H=R.start,st=R.count;for(let nt=H,ot=H+st;nt<ot;nt+=3)m(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let C=new N,M=new N,q=new N,z=new N;function V(B){q.fromBufferAttribute(s,B),z.copy(q);let L=a[B];C.copy(L),C.sub(q.multiplyScalar(q.dot(L))).normalize(),M.crossVectors(z,L);let H=M.dot(l[B])<0?-1:1;o.setXYZW(B,C.x,C.y,C.z,H)}for(let B=0,L=S.length;B<L;++B){let R=S[B],H=R.start,st=R.count;for(let nt=H,ot=H+st;nt<ot;nt+=3)V(t.getX(nt+0)),V(t.getX(nt+1)),V(t.getX(nt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,h=new N,f=new N,u=new N;if(t)for(let p=0,d=t.count;p<d;p+=3){let v=t.getX(p+0),T=t.getX(p+1),y=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,T),o.fromBufferAttribute(e,y),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),a.add(f),l.add(f),h.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Yn.fromBufferAttribute(t,e),Yn.normalize(),t.setXYZ(e,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function t(a,l){let h=a.array,f=a.itemSize,u=a.normalized,p=new h.constructor(l.length*f),d=0,v=0;for(let T=0,y=l.length;T<y;T++){a.isInterleavedBufferAttribute?d=l[T]*a.data.stride+a.offset:d=l[T]*f;for(let m=0;m<f;m++)p[v++]=h[d++]}return new xi(p,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let f=0,u=h.length;f<u;f++){let p=h[f],d=t(p,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],f=[];for(let u=0,p=h.length;u<p;u++){let d=h[u];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],u=r[h];for(let p=0,d=u.length;p<d;p++)f.push(u[p].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,f=o.length;h<f;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new xn,mr=new na,Fa=new xo,ru=new N,Oa=new N,ka=new N,Ba=new N,fc=new N,Va=new N,ou=new N,Ha=new N,ct=class extends ei{constructor(t=new yn,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let f=a[l],u=r[l];f!==0&&(fc.fromBufferAttribute(u,t),o?Va.addScaledVector(fc,f):Va.addScaledVector(fc.sub(e),f))}e.add(Va)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),mr.copy(t.ray).recast(t.near),!(Fa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Fa,ru)===null||mr.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),mr.copy(t.ray).applyMatrix4(su),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,T=p.length;v<T;v++){let y=p[v],m=o[y.materialIndex],S=Math.max(y.start,d.start),C=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let M=S,q=C;M<q;M+=3){let z=a.getX(M),V=a.getX(M+1),B=a.getX(M+2);s=Ga(this,m,t,i,h,f,u,z,V,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),T=Math.min(a.count,d.start+d.count);for(let y=v,m=T;y<m;y+=3){let S=a.getX(y),C=a.getX(y+1),M=a.getX(y+2);s=Ga(this,o,t,i,h,f,u,S,C,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,T=p.length;v<T;v++){let y=p[v],m=o[y.materialIndex],S=Math.max(y.start,d.start),C=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let M=S,q=C;M<q;M+=3){let z=M,V=M+1,B=M+2;s=Ga(this,m,t,i,h,f,u,z,V,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),T=Math.min(l.count,d.start+d.count);for(let y=v,m=T;y<m;y+=3){let S=y,C=y+1,M=y+2;s=Ga(this,o,t,i,h,f,u,S,C,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Zp(n,t,e,i,s,r,o,a){let l;if(t.side===$n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===er,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Ha);return h<e.near||h>e.far?null:{distance:h,point:Ha.clone(),object:n}}function Ga(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Oa),n.getVertexPosition(l,ka),n.getVertexPosition(h,Ba);let f=Zp(n,t,e,i,Oa,ka,Ba,ou);if(f){let u=new N;Ks.getBarycoord(ou,Oa,ka,Ba,u),s&&(f.uv=Ks.getInterpolatedAttribute(s,a,l,h,u,new At)),r&&(f.uv1=Ks.getInterpolatedAttribute(r,a,l,h,u,new At)),o&&(f.normal=Ks.getInterpolatedAttribute(o,a,l,h,u,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let p={a,b:l,c:h,normal:new N,materialIndex:0};Ks.getNormal(Oa,ka,Ba,p.normal),f.face=p,f.barycoord=u}return f}var ln=class n extends yn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],f=[],u=[],p=0,d=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(u,2));function v(T,y,m,S,C,M,q,z,V,B,L){let R=M/V,H=q/B,st=M/2,nt=q/2,ot=z/2,Mt=V+1,rt=B+1,Rt=0,lt=0,Ut=new N;for(let $t=0;$t<rt;$t++){let Ot=$t*H-nt;for(let ie=0;ie<Mt;ie++){let Ae=ie*R-st;Ut[T]=Ae*S,Ut[y]=Ot*C,Ut[m]=ot,h.push(Ut.x,Ut.y,Ut.z),Ut[T]=0,Ut[y]=0,Ut[m]=z>0?1:-1,f.push(Ut.x,Ut.y,Ut.z),u.push(ie/V),u.push(1-$t/B),Rt+=1}}for(let $t=0;$t<B;$t++)for(let Ot=0;Ot<V;Ot++){let ie=p+Ot+Mt*$t,Ae=p+Ot+Mt*($t+1),yt=p+(Ot+1)+Mt*($t+1),Pt=p+(Ot+1)+Mt*$t;l.push(ie,Ae,Pt),l.push(Ae,yt,Pt),lt+=6}a.addGroup(d,lt,L),d+=lt,p+=Rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yo(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gi(n){let t={};for(let e=0;e<n.length;e++){let i=yo(n[e]);for(let s in i)t[s]=i[s]}return t}function Jp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}var Kp={clone:yo,merge:gi},jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ys=class extends ks{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yo(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},pl=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Ds}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zs=new N,au=new At,lu=new At,On=class extends pl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,e){return this.getViewBounds(t,au,lu),e.subVectors(lu,au)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},jr=-90,Qr=1,mh=class extends ei{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(jr,Qr,t,e);s.layers=this.layers,this.add(s);let r=new On(jr,Qr,t,e);r.layers=this.layers,this.add(r);let o=new On(jr,Qr,t,e);o.layers=this.layers,this.add(o);let a=new On(jr,Qr,t,e);a.layers=this.layers,this.add(a);let l=new On(jr,Qr,t,e);l.layers=this.layers,this.add(l);let h=new On(jr,Qr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Ds)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,f]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(u,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},ml=class extends wi{constructor(t,e,i,s,r,o,a,l,h,f){t=t!==void 0?t:[],e=e!==void 0?e:uo,super(t,e,i,s,r,o,a,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gh=class extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ml(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ms}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new ys({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:js});r.uniforms.tEquirect.value=e;let o=new ct(s,r),a=e.minFilter;return e.minFilter===wr&&(e.minFilter=ms),new mh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},uc=new N,tm=new N,em=new ze,Oi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=uc.subVectors(i,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||em.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gr=new xo,Wa=new N,sa=class{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ds){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],d=s[8],v=s[9],T=s[10],y=s[11],m=s[12],S=s[13],C=s[14],M=s[15];if(i[0].setComponents(l-r,p-h,y-d,M-m).normalize(),i[1].setComponents(l+r,p+h,y+d,M+m).normalize(),i[2].setComponents(l+o,p+f,y+v,M+S).normalize(),i[3].setComponents(l-o,p-f,y-v,M-S).normalize(),i[4].setComponents(l-a,p-u,y-T,M-C).normalize(),e===Ds)i[5].setComponents(l+a,p+u,y+T,M+C).normalize();else if(e===cl)i[5].setComponents(a,u,T,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function nm(n){let t=new WeakMap;function e(a,l){let h=a.array,f=a.usage,u=h.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,f),a.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,h){let f=l.array,u=l.updateRanges;if(n.bindBuffer(h,a),u.length===0)n.bufferSubData(h,0,f);else{u.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<u.length;d++){let v=u[p],T=u[d];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++p,u[p]=T)}u.length=p+1;for(let d=0,v=u.length;d<v;d++){let T=u[d];n.bufferSubData(h,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Ge=class n extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,f=l+1,u=t/a,p=e/l,d=[],v=[],T=[],y=[];for(let m=0;m<f;m++){let S=m*p-o;for(let C=0;C<h;C++){let M=C*u-r;v.push(M,-S,0),T.push(0,0,1),y.push(C/a),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let C=S+h*m,M=S+h*(m+1),q=S+1+h*(m+1),z=S+1+h*m;d.push(C,M,z),d.push(M,q,z)}this.setIndex(d),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(T,3)),this.setAttribute("uv",new Ie(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Em=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,e0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,V0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,_g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
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
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ig=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ug=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:fm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:xm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:bm,color_fragment:Mm,color_pars_fragment:wm,color_pars_vertex:Sm,color_vertex:Tm,common:Em,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Im,emissivemap_fragment:Pm,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:km,fog_vertex:Bm,fog_pars_vertex:Vm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:$m,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t0,lights_physical_pars_fragment:e0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:f0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:x0,morphtarget_pars_vertex:y0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:b0,normal_pars_fragment:M0,normal_pars_vertex:w0,normal_vertex:S0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:k0,shadowmap_vertex:B0,shadowmask_pars_fragment:V0,skinbase_vertex:H0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:$0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:og,cube_frag:ag,depth_vert:lg,depth_frag:cg,distanceRGBA_vert:hg,distanceRGBA_frag:fg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:_g,meshmatcap_vert:vg,meshmatcap_frag:bg,meshnormal_vert:Mg,meshnormal_frag:wg,meshphong_vert:Sg,meshphong_frag:Tg,meshphysical_vert:Eg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Ig,points_frag:Pg,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ug,sprite_frag:Ng},Yt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ds={basic:{uniforms:gi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:gi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:gi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:gi([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:gi([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:gi([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:gi([Yt.points,Yt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:gi([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:gi([Yt.common,Yt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:gi([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:gi([Yt.sprite,Yt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:gi([Yt.common,Yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:gi([Yt.lights,Yt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ds.physical={uniforms:gi([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Xa={r:0,b:0,g:0},xr=new xs,zg=new xn;function Fg(n,t,e,i,s,r,o){let a=new Me(0),l=r===!0?0:1,h,f,u=null,p=0,d=null;function v(S){let C=S.isScene===!0?S.background:null;return C&&C.isTexture&&(C=(S.backgroundBlurriness>0?e:t).get(C)),C}function T(S){let C=!1,M=v(S);M===null?m(a,l):M&&M.isColor&&(m(M,1),C=!0);let q=n.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,o):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,C){let M=v(C);M&&(M.isCubeTexture||M.mapping===Il)?(f===void 0&&(f=new ct(new ln(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:yo(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(q,z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),xr.copy(C.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(xr)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==un,(u!==M||p!==M.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=M,p=M.version,d=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ct(new Ge(2,2),new ys({name:"BackgroundMaterial",uniforms:yo(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(M.colorSpace)!==un,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function m(S,C){S.getRGB(Xa,cd(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,C,o)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),l=C,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:T,addToRenderList:y}}function Og(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(R,H,st,nt,ot){let Mt=!1,rt=u(nt,st,H);r!==rt&&(r=rt,h(r.object)),Mt=d(R,nt,st,ot),Mt&&v(R,nt,st,ot),ot!==null&&t.update(ot,n.ELEMENT_ARRAY_BUFFER),(Mt||o)&&(o=!1,M(R,H,st,nt),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function l(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function f(R){return n.deleteVertexArray(R)}function u(R,H,st){let nt=st.wireframe===!0,ot=i[R.id];ot===void 0&&(ot={},i[R.id]=ot);let Mt=ot[H.id];Mt===void 0&&(Mt={},ot[H.id]=Mt);let rt=Mt[nt];return rt===void 0&&(rt=p(l()),Mt[nt]=rt),rt}function p(R){let H=[],st=[],nt=[];for(let ot=0;ot<e;ot++)H[ot]=0,st[ot]=0,nt[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:nt,object:R,attributes:{},index:null}}function d(R,H,st,nt){let ot=r.attributes,Mt=H.attributes,rt=0,Rt=st.getAttributes();for(let lt in Rt)if(Rt[lt].location>=0){let $t=ot[lt],Ot=Mt[lt];if(Ot===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&(Ot=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&(Ot=R.instanceColor)),$t===void 0||$t.attribute!==Ot||Ot&&$t.data!==Ot.data)return!0;rt++}return r.attributesNum!==rt||r.index!==nt}function v(R,H,st,nt){let ot={},Mt=H.attributes,rt=0,Rt=st.getAttributes();for(let lt in Rt)if(Rt[lt].location>=0){let $t=Mt[lt];$t===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&($t=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&($t=R.instanceColor));let Ot={};Ot.attribute=$t,$t&&$t.data&&(Ot.data=$t.data),ot[lt]=Ot,rt++}r.attributes=ot,r.attributesNum=rt,r.index=nt}function T(){let R=r.newAttributes;for(let H=0,st=R.length;H<st;H++)R[H]=0}function y(R){m(R,0)}function m(R,H){let st=r.newAttributes,nt=r.enabledAttributes,ot=r.attributeDivisors;st[R]=1,nt[R]===0&&(n.enableVertexAttribArray(R),nt[R]=1),ot[R]!==H&&(n.vertexAttribDivisor(R,H),ot[R]=H)}function S(){let R=r.newAttributes,H=r.enabledAttributes;for(let st=0,nt=H.length;st<nt;st++)H[st]!==R[st]&&(n.disableVertexAttribArray(st),H[st]=0)}function C(R,H,st,nt,ot,Mt,rt){rt===!0?n.vertexAttribIPointer(R,H,st,ot,Mt):n.vertexAttribPointer(R,H,st,nt,ot,Mt)}function M(R,H,st,nt){T();let ot=nt.attributes,Mt=st.getAttributes(),rt=H.defaultAttributeValues;for(let Rt in Mt){let lt=Mt[Rt];if(lt.location>=0){let Ut=ot[Rt];if(Ut===void 0&&(Rt==="instanceMatrix"&&R.instanceMatrix&&(Ut=R.instanceMatrix),Rt==="instanceColor"&&R.instanceColor&&(Ut=R.instanceColor)),Ut!==void 0){let $t=Ut.normalized,Ot=Ut.itemSize,ie=t.get(Ut);if(ie===void 0)continue;let Ae=ie.buffer,yt=ie.type,Pt=ie.bytesPerElement,se=yt===n.INT||yt===n.UNSIGNED_INT||Ut.gpuType===tf;if(Ut.isInterleavedBufferAttribute){let Ft=Ut.data,fe=Ft.stride,ce=Ut.offset;if(Ft.isInstancedInterleavedBuffer){for(let oe=0;oe<lt.locationSize;oe++)m(lt.location+oe,Ft.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let oe=0;oe<lt.locationSize;oe++)y(lt.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let oe=0;oe<lt.locationSize;oe++)C(lt.location+oe,Ot/lt.locationSize,yt,$t,fe*Pt,(ce+Ot/lt.locationSize*oe)*Pt,se)}else{if(Ut.isInstancedBufferAttribute){for(let Ft=0;Ft<lt.locationSize;Ft++)m(lt.location+Ft,Ut.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Ft=0;Ft<lt.locationSize;Ft++)y(lt.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Ft=0;Ft<lt.locationSize;Ft++)C(lt.location+Ft,Ot/lt.locationSize,yt,$t,Ot*Pt,Ot/lt.locationSize*Ft*Pt,se)}}else if(rt!==void 0){let $t=rt[Rt];if($t!==void 0)switch($t.length){case 2:n.vertexAttrib2fv(lt.location,$t);break;case 3:n.vertexAttrib3fv(lt.location,$t);break;case 4:n.vertexAttrib4fv(lt.location,$t);break;default:n.vertexAttrib1fv(lt.location,$t)}}}}S()}function q(){B();for(let R in i){let H=i[R];for(let st in H){let nt=H[st];for(let ot in nt)f(nt[ot].object),delete nt[ot];delete H[st]}delete i[R]}}function z(R){if(i[R.id]===void 0)return;let H=i[R.id];for(let st in H){let nt=H[st];for(let ot in nt)f(nt[ot].object),delete nt[ot];delete H[st]}delete i[R.id]}function V(R){for(let H in i){let st=i[H];if(st[R.id]===void 0)continue;let nt=st[R.id];for(let ot in nt)f(nt[ot].object),delete nt[ot];delete st[R.id]}}function B(){L(),o=!0,r!==s&&(r=s,h(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:z,releaseStatesOfProgram:V,initAttributes:T,enableAttribute:y,disableUnusedAttributes:S}}function kg(n,t,e){let i;function s(h){i=h}function r(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function o(h,f,u){u!==0&&(n.drawArraysInstanced(i,h,f,u),e.update(f,i,u))}function a(h,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,u);let d=0;for(let v=0;v<u;v++)d+=f[v];e.update(d,i,1)}function l(h,f,u,p){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)o(h[v],f[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,f,0,p,0,u);let v=0;for(let T=0;T<u;T++)v+=f[T]*p[T];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(V){return!(V!==ns&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(V){let B=V===da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Fs&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ls&&!B)}function l(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),q=v>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:q,maxSamples:z}}function Vg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Oi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||i!==0||s;return s=p,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=f(u,p,0)},this.setState=function(u,p,d){let v=u.clippingPlanes,T=u.clipIntersection,y=u.clipShadows,m=n.get(u);if(!s||v===null||v.length===0||r&&!y)r?f(null):h();else{let S=r?0:i,C=S*4,M=m.clippingState||null;l.value=M,M=f(v,p,C,d);for(let q=0;q!==C;++q)M[q]=e[q];m.clippingState=M,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,p,d,v){let T=u!==null?u.length:0,y=null;if(T!==0){if(y=l.value,v!==!0||y===null){let m=d+T*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(y===null||y.length<m)&&(y=new Float32Array(m));for(let C=0,M=d;C!==T;++C,M+=4)o.copy(u[C]).applyMatrix4(S,a),o.normal.toArray(y,M),y[M+3]=o.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function Hg(n){let t=new WeakMap;function e(o,a){return a===Uc?o.mapping=uo:a===Nc&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uc||a===Nc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new gh(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var gl=class extends pl{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ro=4,cu=[.125,.215,.35,.446,.526,.582],br=20,dc=new gl,hu=new Me,pc=null,mc=0,gc=0,xc=!1,_r=(1+Math.sqrt(5))/2,to=1/_r,fu=[new N(-_r,to,0),new N(_r,to,0),new N(-to,0,_r),new N(to,0,_r),new N(0,_r,-to),new N(0,_r,to),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],xl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=xc,t.scissorTest=!1,qa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===uo||t.mapping===po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ms,minFilter:ms,generateMipmaps:!1,type:da,format:ns,colorSpace:Co,depthBuffer:!1},s=uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Wg(r,t,e)}return s}_compileMaterial(t){let e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,i,s){let a=new On(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(hu),f.toneMapping=Qs,f.autoClear=!1;let d=new Ve({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),v=new ct(new ln,d),T=!1,y=t.background;y?y.isColor&&(d.color.copy(y),t.background=null,T=!0):(d.color.copy(hu),T=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));let C=this._cubeSize;qa(s,S*C,m>2?C:0,C,C),f.setRenderTarget(s),T&&f.render(v,a),f.render(t,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===uo||t.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;qa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,dc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fu[(s-r-1)%fu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,u=new ct(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*br-1),T=r/v,y=isFinite(r)?1+Math.floor(f*T):br;y>br&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);let m=[],S=0;for(let V=0;V<br;++V){let B=V/T,L=Math.exp(-B*B/2);m.push(L),V===0?S+=L:V<y&&(S+=2*L)}for(let V=0;V<m.length;V++)m[V]=m[V]/S;p.envMap.value=t.texture,p.samples.value=y,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:C}=this;p.dTheta.value=v,p.mipInt.value=C-i;let M=this._sizeLods[s],q=3*M*(s>C-ro?s-C+ro:0),z=4*(this._cubeSize-M);qa(e,q,z,3*M,2*M),l.setRenderTarget(e),l.render(u,dc)}};function Gg(n){let t=[],e=[],i=[],s=n,r=n-ro+1+cu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ro?l=cu[o-n+ro-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),f=-h,u=1+h,p=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,v=6,T=3,y=2,m=1,S=new Float32Array(T*v*d),C=new Float32Array(y*v*d),M=new Float32Array(m*v*d);for(let z=0;z<d;z++){let V=z%3*2/3-1,B=z>2?0:-1,L=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];S.set(L,T*v*z),C.set(p,y*v*z);let R=[z,z,z,z,z,z];M.set(R,m*v*z)}let q=new yn;q.setAttribute("position",new xi(S,T)),q.setAttribute("uv",new xi(C,y)),q.setAttribute("faceIndex",new xi(M,m)),t.push(q),s>ro&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function uu(n,t,e){let i=new ss(n,t,e);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wg(n,t,e){let i=new Float32Array(br),s=new N(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:js,depthTest:!1,depthWrite:!1})}function du(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:js,depthTest:!1,depthWrite:!1})}function pu(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:js,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Uc||l===Nc,f=l===uo||l===po;if(h||f){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new xl(n)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return h&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new xl(n)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,h=6;for(let f=0;f<h;f++)a[f]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Zo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yg(n,t,e,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let T=p.morphAttributes[v];for(let y=0,m=T.length;y<m;y++)t.remove(T[y])}p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let v in p)t.update(p[v],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let v in d){let T=d[v];for(let y=0,m=T.length;y<m;y++)t.update(T[y],n.ARRAY_BUFFER)}}function h(u){let p=[],d=u.index,v=u.attributes.position,T=0;if(d!==null){let S=d.array;T=d.version;for(let C=0,M=S.length;C<M;C+=3){let q=S[C+0],z=S[C+1],V=S[C+2];p.push(q,z,z,V,V,q)}}else if(v!==void 0){let S=v.array;T=v.version;for(let C=0,M=S.length/3-1;C<M;C+=3){let q=C+0,z=C+1,V=C+2;p.push(q,z,z,V,V,q)}}else return;let y=new(ad(p)?dl:ul)(p,1);y.version=T;let m=r.get(u);m&&t.remove(m),r.set(u,y)}function f(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function $g(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*o),e.update(d,i,1)}function h(p,d,v){v!==0&&(n.drawElementsInstanced(i,d,r,p*o,v),e.update(d,i,v))}function f(p,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,v);let y=0;for(let m=0;m<v;m++)y+=d[m];e.update(y,i,1)}function u(p,d,v,T){if(v===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<p.length;m++)h(p[m]/o,d[m],T[m]);else{y.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,T,0,v);let m=0;for(let S=0;S<v;S++)m+=d[S]*T[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Zg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Jg(n,t,e){let i=new WeakMap,s=new pn;function r(o,a,l){let h=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,p=i.get(a);if(p===void 0||p.count!==u){let L=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",L)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],C=0;d===!0&&(C=1),v===!0&&(C=2),T===!0&&(C=3);let M=a.attributes.position.count*C,q=1;M>t.maxTextureSize&&(q=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let z=new Float32Array(M*q*4*u),V=new fl(z,M,q,u);V.type=Ls,V.needsUpdate=!0;let B=C*4;for(let R=0;R<u;R++){let H=y[R],st=m[R],nt=S[R],ot=M*q*4*R;for(let Mt=0;Mt<H.count;Mt++){let rt=Mt*B;d===!0&&(s.fromBufferAttribute(H,Mt),z[ot+rt+0]=s.x,z[ot+rt+1]=s.y,z[ot+rt+2]=s.z,z[ot+rt+3]=0),v===!0&&(s.fromBufferAttribute(st,Mt),z[ot+rt+4]=s.x,z[ot+rt+5]=s.y,z[ot+rt+6]=s.z,z[ot+rt+7]=0),T===!0&&(s.fromBufferAttribute(nt,Mt),z[ot+rt+8]=s.x,z[ot+rt+9]=s.y,z[ot+rt+10]=s.z,z[ot+rt+11]=nt.itemSize===4?s.w:1)}}p={count:u,texture:V,size:new At(M,q)},i.set(a,p),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let T=0;T<h.length;T++)d+=h[T];let v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Kg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var yl=class extends wi{constructor(t,e,i,s,r,o,a,l,h,f=lo){if(f!==lo&&f!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===lo&&(i=Sr),i===void 0&&f===go&&(i=mo),super(null,s,r,o,a,l,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:is,this.minFilter=l!==void 0?l:is,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fd=new wi,mu=new yl(1,1),ud=new fl,dd=new ph,pd=new ml,gu=[],xu=[],yu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function Io(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function kn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Bn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ll(n,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;n.uniform2fv(this.addr,t),Bn(e,t)}}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(kn(e,t))return;n.uniform3fv(this.addr,t),Bn(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;n.uniform4fv(this.addr,t),Bn(e,t)}}function nx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Bn(e,t)}else{if(kn(e,i))return;vu.set(i),n.uniformMatrix2fv(this.addr,!1,vu),Bn(e,i)}}function ix(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Bn(e,t)}else{if(kn(e,i))return;_u.set(i),n.uniformMatrix3fv(this.addr,!1,_u),Bn(e,i)}}function sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Bn(e,t)}else{if(kn(e,i))return;yu.set(i),n.uniformMatrix4fv(this.addr,!1,yu),Bn(e,i)}}function rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;n.uniform2iv(this.addr,t),Bn(e,t)}}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;n.uniform3iv(this.addr,t),Bn(e,t)}}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;n.uniform4iv(this.addr,t),Bn(e,t)}}function cx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;n.uniform2uiv(this.addr,t),Bn(e,t)}}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;n.uniform3uiv(this.addr,t),Bn(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;n.uniform4uiv(this.addr,t),Bn(e,t)}}function dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=od,r=mu):r=fd,e.setTexture2D(t||r,s)}function px(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||dd,s)}function mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pd,s)}function gx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ud,s)}function xx(n){switch(n){case 5126:return jg;case 35664:return Qg;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return fx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function yx(n,t){n.uniform1fv(this.addr,t)}function _x(n,t){let e=Io(t,this.size,2);n.uniform2fv(this.addr,e)}function vx(n,t){let e=Io(t,this.size,3);n.uniform3fv(this.addr,e)}function bx(n,t){let e=Io(t,this.size,4);n.uniform4fv(this.addr,e)}function Mx(n,t){let e=Io(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wx(n,t){let e=Io(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sx(n,t){let e=Io(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Tx(n,t){n.uniform1iv(this.addr,t)}function Ex(n,t){n.uniform2iv(this.addr,t)}function Ax(n,t){n.uniform3iv(this.addr,t)}function Rx(n,t){n.uniform4iv(this.addr,t)}function Cx(n,t){n.uniform1uiv(this.addr,t)}function Ix(n,t){n.uniform2uiv(this.addr,t)}function Px(n,t){n.uniform3uiv(this.addr,t)}function Lx(n,t){n.uniform4uiv(this.addr,t)}function Dx(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fd,r[o])}function Ux(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dd,r[o])}function Nx(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pd,r[o])}function zx(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ud,r[o])}function Fx(n){switch(n){case 5126:return yx;case 35664:return _x;case 35665:return vx;case 35666:return bx;case 35674:return Mx;case 35675:return wx;case 35676:return Sx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ex;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Ix;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return zx}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xx(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},yc=/(\w+)(\])?(\[|\.)?/g;function bu(n,t){n.seq.push(t),n.map[t.id]=t}function Ox(n,t,e){let i=n.name,s=i.length;for(yc.lastIndex=0;;){let r=yc.exec(i),o=yc.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){bu(e,h===void 0?new xh(a,n,t):new yh(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new _h(a),bu(e,u)),e=u}}}var ho=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ox(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Mu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var kx=37297,Bx=0;function Vx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var wu=new ze;function Hx(n){Qe._getMatrix(wu,Qe.workingColorSpace,n);let t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Pl:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Su(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vx(n.getShaderSource(t),o)}else return s}function Gx(n,t){let e=Hx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wx(n,t){let e;switch(t){case mp:e="Linear";break;case gp:e="Reinhard";break;case xp:e="Cineon";break;case yp:e="ACESFilmic";break;case vp:e="AgX";break;case bp:e="Neutral";break;case _p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ya=new N;function Xx(){Qe.getLuminanceCoefficients(Ya);let n=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function Yx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $x(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Jo(n){return n!==""}function Tu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(n){return n.replace(Zx,Kx)}var Jx=new Map;function Kx(n,t){let e=Be[t];if(e===void 0){let i=Jx.get(t);if(i!==void 0)e=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vh(e)}var jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(jx,Qx)}function Qx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ty(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ps&&(t="SHADOWMAP_TYPE_VSM"),t}function ey(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case uo:case po:t="ENVMAP_TYPE_CUBE";break;case Il:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ny(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===po&&(t="ENVMAP_MODE_REFRACTION"),t}function iy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qh:t="ENVMAP_BLENDING_MULTIPLY";break;case dp:t="ENVMAP_BLENDING_MIX";break;case pp:t="ENVMAP_BLENDING_ADD";break}return t}function sy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ry(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ty(e),h=ey(e),f=ny(e),u=iy(e),p=sy(e),d=qx(e),v=Yx(r),T=s.createProgram(),y,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Jo).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Jo).join(`
`),m.length>0&&(m+=`
`)):(y=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),m=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qs?"#define TONE_MAPPING":"",e.toneMapping!==Qs?Be.tonemapping_pars_fragment:"",e.toneMapping!==Qs?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Gx("linearToOutputTexel",e.outputColorSpace),Xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jo).join(`
`)),o=vh(o),o=Tu(o,e),o=Eu(o,e),a=vh(a),a=Tu(a,e),a=Eu(a,e),o=Au(o),a=Au(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=S+y+o,M=S+m+a,q=Mu(s,s.VERTEX_SHADER,C),z=Mu(s,s.FRAGMENT_SHADER,M);s.attachShader(T,q),s.attachShader(T,z),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function V(H){if(n.debug.checkShaderErrors){let st=s.getProgramInfoLog(T).trim(),nt=s.getShaderInfoLog(q).trim(),ot=s.getShaderInfoLog(z).trim(),Mt=!0,rt=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,T,q,z);else{let Rt=Su(s,q,"vertex"),lt=Su(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+Rt+`
`+lt)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||ot==="")&&(rt=!1);rt&&(H.diagnostics={runnable:Mt,programLog:st,vertexShader:{log:nt,prefix:y},fragmentShader:{log:ot,prefix:m}})}s.deleteShader(q),s.deleteShader(z),B=new ho(s,T),L=$x(s,T)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let L;this.getAttributes=function(){return L===void 0&&V(this),L};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,kx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=z,this}var oy=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mh(t),e.set(t,i)),i}},Mh=class{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}};function ay(n,t,e,i,s,r,o){let a=new ia,l=new bh,h=new Set,f=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return h.add(L),L===0?"uv":`uv${L}`}function y(L,R,H,st,nt){let ot=st.fog,Mt=nt.geometry,rt=L.isMeshStandardMaterial?st.environment:null,Rt=(L.isMeshStandardMaterial?e:t).get(L.envMap||rt),lt=Rt&&Rt.mapping===Il?Rt.image.height:null,Ut=v[L.type];L.precision!==null&&(d=s.getMaxPrecision(L.precision),d!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",d,"instead."));let $t=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Ot=$t!==void 0?$t.length:0,ie=0;Mt.morphAttributes.position!==void 0&&(ie=1),Mt.morphAttributes.normal!==void 0&&(ie=2),Mt.morphAttributes.color!==void 0&&(ie=3);let Ae,yt,Pt,se;if(Ut){let ve=ds[Ut];Ae=ve.vertexShader,yt=ve.fragmentShader}else Ae=L.vertexShader,yt=L.fragmentShader,l.update(L),Pt=l.getVertexShaderID(L),se=l.getFragmentShaderID(L);let Ft=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),ce=nt.isInstancedMesh===!0,oe=nt.isBatchedMesh===!0,Fe=!!L.map,wt=!!L.matcap,Dt=!!Rt,O=!!L.aoMap,re=!!L.lightMap,_t=!!L.bumpMap,Nt=!!L.normalMap,It=!!L.displacementMap,be=!!L.emissiveMap,qt=!!L.metalnessMap,U=!!L.roughnessMap,A=L.anisotropy>0,tt=L.clearcoat>0,mt=L.dispersion>0,dt=L.iridescence>0,gt=L.sheen>0,Vt=L.transmission>0,zt=A&&!!L.anisotropyMap,Wt=tt&&!!L.clearcoatMap,Pe=tt&&!!L.clearcoatNormalMap,Tt=tt&&!!L.clearcoatRoughnessMap,Zt=dt&&!!L.iridescenceMap,de=dt&&!!L.iridescenceThicknessMap,pe=gt&&!!L.sheenColorMap,Jt=gt&&!!L.sheenRoughnessMap,Le=!!L.specularMap,Kt=!!L.specularColorMap,Ye=!!L.specularIntensityMap,$=Vt&&!!L.transmissionMap,Xt=Vt&&!!L.thicknessMap,ht=!!L.gradientMap,j=!!L.alphaMap,Ht=L.alphaTest>0,Bt=!!L.alphaHash,Re=!!L.extensions,Ke=Qs;L.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let bn={shaderID:Ut,shaderType:L.type,shaderName:L.name,vertexShader:Ae,fragmentShader:yt,defines:L.defines,customVertexShaderID:Pt,customFragmentShaderID:se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:d,batching:oe,batchingColor:oe&&nt._colorsTexture!==null,instancing:ce,instancingColor:ce&&nt.instanceColor!==null,instancingMorph:ce&&nt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Co,alphaToCoverage:!!L.alphaToCoverage,map:Fe,matcap:wt,envMap:Dt,envMapMode:Dt&&Rt.mapping,envMapCubeUVHeight:lt,aoMap:O,lightMap:re,bumpMap:_t,normalMap:Nt,displacementMap:p&&It,emissiveMap:be,normalMapObjectSpace:Nt&&L.normalMapType===Tp,normalMapTangentSpace:Nt&&L.normalMapType===rd,metalnessMap:qt,roughnessMap:U,anisotropy:A,anisotropyMap:zt,clearcoat:tt,clearcoatMap:Wt,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Tt,dispersion:mt,iridescence:dt,iridescenceMap:Zt,iridescenceThicknessMap:de,sheen:gt,sheenColorMap:pe,sheenRoughnessMap:Jt,specularMap:Le,specularColorMap:Kt,specularIntensityMap:Ye,transmission:Vt,transmissionMap:$,thicknessMap:Xt,gradientMap:ht,opaque:L.transparent===!1&&L.blending===ao&&L.alphaToCoverage===!1,alphaMap:j,alphaTest:Ht,alphaHash:Bt,combine:L.combine,mapUv:Fe&&T(L.map.channel),aoMapUv:O&&T(L.aoMap.channel),lightMapUv:re&&T(L.lightMap.channel),bumpMapUv:_t&&T(L.bumpMap.channel),normalMapUv:Nt&&T(L.normalMap.channel),displacementMapUv:It&&T(L.displacementMap.channel),emissiveMapUv:be&&T(L.emissiveMap.channel),metalnessMapUv:qt&&T(L.metalnessMap.channel),roughnessMapUv:U&&T(L.roughnessMap.channel),anisotropyMapUv:zt&&T(L.anisotropyMap.channel),clearcoatMapUv:Wt&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&T(L.sheenRoughnessMap.channel),specularMapUv:Le&&T(L.specularMap.channel),specularColorMapUv:Kt&&T(L.specularColorMap.channel),specularIntensityMapUv:Ye&&T(L.specularIntensityMap.channel),transmissionMapUv:$&&T(L.transmissionMap.channel),thicknessMapUv:Xt&&T(L.thicknessMap.channel),alphaMapUv:j&&T(L.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(Nt||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!Mt.attributes.uv&&(Fe||j),fog:!!ot,useFog:L.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:fe,skinning:nt.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Fe&&L.map.isVideoTexture===!0&&Qe.getTransfer(L.map.colorSpace)===un,decodeVideoTextureEmissive:be&&L.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(L.emissiveMap.colorSpace)===un,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===In,flipSided:L.side===$n,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Re&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&L.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return bn.vertexUv1s=h.has(1),bn.vertexUv2s=h.has(2),bn.vertexUv3s=h.has(3),h.clear(),bn}function m(L){let R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(let H in L.defines)R.push(H),R.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(S(R,L),C(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function S(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function C(L,R){a.disableAll(),R.supportsVertexTextures&&a.enable(0),R.instancing&&a.enable(1),R.instancingColor&&a.enable(2),R.instancingMorph&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),R.dispersion&&a.enable(20),R.batchingColor&&a.enable(21),L.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reverseDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),L.push(a.mask)}function M(L){let R=v[L.type],H;if(R){let st=ds[R];H=Kp.clone(st.uniforms)}else H=L.uniforms;return H}function q(L,R){let H;for(let st=0,nt=f.length;st<nt;st++){let ot=f[st];if(ot.cacheKey===R){H=ot,++H.usedTimes;break}}return H===void 0&&(H=new ry(n,R,L,r),f.push(H)),H}function z(L){if(--L.usedTimes===0){let R=f.indexOf(L);f[R]=f[f.length-1],f.pop(),L.destroy()}}function V(L){l.remove(L)}function B(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:q,releaseProgram:z,releaseShaderCache:V,programs:f,dispose:B}}function ly(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Iu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,p,d,v,T,y){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:d,groupOrder:v,renderOrder:u.renderOrder,z:T,group:y},n[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=d,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=T,m.group=y),t++,m}function a(u,p,d,v,T,y){let m=o(u,p,d,v,T,y);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,p,d,v,T,y){let m=o(u,p,d,v,T,y);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function h(u,p){e.length>1&&e.sort(u||cy),i.length>1&&i.sort(p||Cu),s.length>1&&s.sort(p||Cu)}function f(){for(let u=t,p=n.length;u<p;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:h}}function hy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Iu,n.set(i,[o])):s>=r.length?(o=new Iu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Me};break;case"SpotLight":e={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function uy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var dy=0;function py(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function my(n){let t=new fy,e=uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);let s=new N,r=new xn,o=new xn;function a(h){let f=0,u=0,p=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,v=0,T=0,y=0,m=0,S=0,C=0,M=0,q=0,z=0,V=0;h.sort(py);for(let L=0,R=h.length;L<R;L++){let H=h[L],st=H.color,nt=H.intensity,ot=H.distance,Mt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=st.r*nt,u+=st.g*nt,p+=st.b*nt;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)i.probe[rt].addScaledVector(H.sh.coefficients[rt],nt);V++}else if(H.isDirectionalLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let Rt=H.shadow,lt=e.get(H);lt.shadowIntensity=Rt.intensity,lt.shadowBias=Rt.bias,lt.shadowNormalBias=Rt.normalBias,lt.shadowRadius=Rt.radius,lt.shadowMapSize=Rt.mapSize,i.directionalShadow[d]=lt,i.directionalShadowMap[d]=Mt,i.directionalShadowMatrix[d]=H.shadow.matrix,S++}i.directional[d]=rt,d++}else if(H.isSpotLight){let rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy(st).multiplyScalar(nt),rt.distance=ot,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,i.spot[T]=rt;let Rt=H.shadow;if(H.map&&(i.spotLightMap[q]=H.map,q++,Rt.updateMatrices(H),H.castShadow&&z++),i.spotLightMatrix[T]=Rt.matrix,H.castShadow){let lt=e.get(H);lt.shadowIntensity=Rt.intensity,lt.shadowBias=Rt.bias,lt.shadowNormalBias=Rt.normalBias,lt.shadowRadius=Rt.radius,lt.shadowMapSize=Rt.mapSize,i.spotShadow[T]=lt,i.spotShadowMap[T]=Mt,M++}T++}else if(H.isRectAreaLight){let rt=t.get(H);rt.color.copy(st).multiplyScalar(nt),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=rt,y++}else if(H.isPointLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){let Rt=H.shadow,lt=e.get(H);lt.shadowIntensity=Rt.intensity,lt.shadowBias=Rt.bias,lt.shadowNormalBias=Rt.normalBias,lt.shadowRadius=Rt.radius,lt.shadowMapSize=Rt.mapSize,lt.shadowCameraNear=Rt.camera.near,lt.shadowCameraFar=Rt.camera.far,i.pointShadow[v]=lt,i.pointShadowMap[v]=Mt,i.pointShadowMatrix[v]=H.shadow.matrix,C++}i.point[v]=rt,v++}else if(H.isHemisphereLight){let rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar(nt),rt.groundColor.copy(H.groundColor).multiplyScalar(nt),i.hemi[m]=rt,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Yt.LTC_FLOAT_1,i.rectAreaLTC2=Yt.LTC_FLOAT_2):(i.rectAreaLTC1=Yt.LTC_HALF_1,i.rectAreaLTC2=Yt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=p;let B=i.hash;(B.directionalLength!==d||B.pointLength!==v||B.spotLength!==T||B.rectAreaLength!==y||B.hemiLength!==m||B.numDirectionalShadows!==S||B.numPointShadows!==C||B.numSpotShadows!==M||B.numSpotMaps!==q||B.numLightProbes!==V)&&(i.directional.length=d,i.spot.length=T,i.rectArea.length=y,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+q-z,i.spotLightMap.length=q,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=V,B.directionalLength=d,B.pointLength=v,B.spotLength=T,B.rectAreaLength=y,B.hemiLength=m,B.numDirectionalShadows=S,B.numPointShadows=C,B.numSpotShadows=M,B.numSpotMaps=q,B.numLightProbes=V,i.version=dy++)}function l(h,f){let u=0,p=0,d=0,v=0,T=0,y=f.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){let C=h[m];if(C.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),u++}else if(C.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),d++}else if(C.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(y),o.identity(),r.copy(C.matrixWorld),r.premultiply(y),o.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(C.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(y),p++}else if(C.isHemisphereLight){let M=i.hemi[T];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(y),T++}}}return{setup:a,setupView:l,state:i}}function Pu(n){let t=new my(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function o(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Pu(n),t.set(s,[a])):r>=o.length?(a=new Pu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var wh=class extends ks{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sh=class extends ks{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _y(n,t,e){let i=new sa,s=new At,r=new At,o=new pn,a=new wh({depthPacking:Sp}),l=new Sh,h={},f=e.maxTextureSize,u={[er]:$n,[$n]:er,[In]:In},p=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:xy,fragmentShader:yy}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let v=new yn;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new ct(v,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let m=this.type;this.render=function(z,V,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;let L=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),st=n.state;st.setBlending(js),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let nt=m!==Ps&&this.type===Ps,ot=m===Ps&&this.type!==Ps;for(let Mt=0,rt=z.length;Mt<rt;Mt++){let Rt=z[Mt],lt=Rt.shadow;if(lt===void 0){console.warn("THREE.WebGLShadowMap:",Rt,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let Ut=lt.getFrameExtents();if(s.multiply(Ut),r.copy(lt.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Ut.x),s.x=r.x*Ut.x,lt.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Ut.y),s.y=r.y*Ut.y,lt.mapSize.y=r.y)),lt.map===null||nt===!0||ot===!0){let Ot=this.type!==Ps?{minFilter:is,magFilter:is}:{};lt.map!==null&&lt.map.dispose(),lt.map=new ss(s.x,s.y,Ot),lt.map.texture.name=Rt.name+".shadowMap",lt.camera.updateProjectionMatrix()}n.setRenderTarget(lt.map),n.clear();let $t=lt.getViewportCount();for(let Ot=0;Ot<$t;Ot++){let ie=lt.getViewport(Ot);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),st.viewport(o),lt.updateMatrices(Rt,Ot),i=lt.getFrustum(),M(V,B,lt.camera,Rt,this.type)}lt.isPointLightShadow!==!0&&this.type===Ps&&S(lt,B),lt.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(L,R,H)};function S(z,V){let B=t.update(T);p.defines.VSM_SAMPLES!==z.blurSamples&&(p.defines.VSM_SAMPLES=z.blurSamples,d.defines.VSM_SAMPLES=z.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ss(s.x,s.y)),p.uniforms.shadow_pass.value=z.map.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(V,null,B,p,T,null),d.uniforms.shadow_pass.value=z.mapPass.texture,d.uniforms.resolution.value=z.mapSize,d.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(V,null,B,d,T,null)}function C(z,V,B,L){let R=null,H=B.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=B.isPointLight===!0?l:a,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){let st=R.uuid,nt=V.uuid,ot=h[st];ot===void 0&&(ot={},h[st]=ot);let Mt=ot[nt];Mt===void 0&&(Mt=R.clone(),ot[nt]=Mt,V.addEventListener("dispose",q)),R=Mt}if(R.visible=V.visible,R.wireframe=V.wireframe,L===Ps?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:u[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let st=n.properties.get(R);st.light=B}return R}function M(z,V,B,L,R){if(z.visible===!1)return;if(z.layers.test(V.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ps)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,z.matrixWorld);let nt=t.update(z),ot=z.material;if(Array.isArray(ot)){let Mt=nt.groups;for(let rt=0,Rt=Mt.length;rt<Rt;rt++){let lt=Mt[rt],Ut=ot[lt.materialIndex];if(Ut&&Ut.visible){let $t=C(z,Ut,L,R);z.onBeforeShadow(n,z,V,B,nt,$t,lt),n.renderBufferDirect(B,null,nt,$t,z,lt),z.onAfterShadow(n,z,V,B,nt,$t,lt)}}}else if(ot.visible){let Mt=C(z,ot,L,R);z.onBeforeShadow(n,z,V,B,nt,Mt,null),n.renderBufferDirect(B,null,nt,Mt,z,null),z.onAfterShadow(n,z,V,B,nt,Mt,null)}}let st=z.children;for(let nt=0,ot=st.length;nt<ot;nt++)M(st[nt],V,B,L,R)}function q(z){z.target.removeEventListener("dispose",q);for(let B in h){let L=h[B],R=z.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}var vy={[Ac]:Rc,[Cc]:Lc,[Ic]:Dc,[fo]:Pc,[Rc]:Ac,[Lc]:Cc,[Dc]:Ic,[Pc]:fo};function by(n,t){function e(){let $=!1,Xt=new pn,ht=null,j=new pn(0,0,0,0);return{setMask:function(Ht){ht!==Ht&&!$&&(n.colorMask(Ht,Ht,Ht,Ht),ht=Ht)},setLocked:function(Ht){$=Ht},setClear:function(Ht,Bt,Re,Ke,bn){bn===!0&&(Ht*=Ke,Bt*=Ke,Re*=Ke),Xt.set(Ht,Bt,Re,Ke),j.equals(Xt)===!1&&(n.clearColor(Ht,Bt,Re,Ke),j.copy(Xt))},reset:function(){$=!1,ht=null,j.set(-1,0,0,0)}}}function i(){let $=!1,Xt=!1,ht=null,j=null,Ht=null;return{setReversed:function(Bt){if(Xt!==Bt){let Re=t.get("EXT_clip_control");Xt?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);let Ke=Ht;Ht=null,this.setClear(Ke)}Xt=Bt},getReversed:function(){return Xt},setTest:function(Bt){Bt?Ft(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Bt){ht!==Bt&&!$&&(n.depthMask(Bt),ht=Bt)},setFunc:function(Bt){if(Xt&&(Bt=vy[Bt]),j!==Bt){switch(Bt){case Ac:n.depthFunc(n.NEVER);break;case Rc:n.depthFunc(n.ALWAYS);break;case Cc:n.depthFunc(n.LESS);break;case fo:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case Pc:n.depthFunc(n.GEQUAL);break;case Lc:n.depthFunc(n.GREATER);break;case Dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=Bt}},setLocked:function(Bt){$=Bt},setClear:function(Bt){Ht!==Bt&&(Xt&&(Bt=1-Bt),n.clearDepth(Bt),Ht=Bt)},reset:function(){$=!1,ht=null,j=null,Ht=null,Xt=!1}}}function s(){let $=!1,Xt=null,ht=null,j=null,Ht=null,Bt=null,Re=null,Ke=null,bn=null;return{setTest:function(ve){$||(ve?Ft(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(ve){Xt!==ve&&!$&&(n.stencilMask(ve),Xt=ve)},setFunc:function(ve,Dn,En){(ht!==ve||j!==Dn||Ht!==En)&&(n.stencilFunc(ve,Dn,En),ht=ve,j=Dn,Ht=En)},setOp:function(ve,Dn,En){(Bt!==ve||Re!==Dn||Ke!==En)&&(n.stencilOp(ve,Dn,En),Bt=ve,Re=Dn,Ke=En)},setLocked:function(ve){$=ve},setClear:function(ve){bn!==ve&&(n.clearStencil(ve),bn=ve)},reset:function(){$=!1,Xt=null,ht=null,j=null,Ht=null,Bt=null,Re=null,Ke=null,bn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,f={},u={},p=new WeakMap,d=[],v=null,T=!1,y=null,m=null,S=null,C=null,M=null,q=null,z=null,V=new Me(0,0,0),B=0,L=!1,R=null,H=null,st=null,nt=null,ot=null,Mt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,Rt=0,lt=n.getParameter(n.VERSION);lt.indexOf("WebGL")!==-1?(Rt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),rt=Rt>=1):lt.indexOf("OpenGL ES")!==-1&&(Rt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),rt=Rt>=2);let Ut=null,$t={},Ot=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ae=new pn().fromArray(Ot),yt=new pn().fromArray(ie);function Pt($,Xt,ht,j){let Ht=new Uint8Array(4),Bt=n.createTexture();n.bindTexture($,Bt),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<ht;Re++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(Xt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,Ht):n.texImage2D(Xt+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ht);return Bt}let se={};se[n.TEXTURE_2D]=Pt(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ft(n.DEPTH_TEST),o.setFunc(fo),_t(!1),Nt(Nf),Ft(n.CULL_FACE),O(js);function Ft($){f[$]!==!0&&(n.enable($),f[$]=!0)}function fe($){f[$]!==!1&&(n.disable($),f[$]=!1)}function ce($,Xt){return u[$]!==Xt?(n.bindFramebuffer($,Xt),u[$]=Xt,$===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Xt),$===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Xt),!0):!1}function oe($,Xt){let ht=d,j=!1;if($){ht=p.get(Xt),ht===void 0&&(ht=[],p.set(Xt,ht));let Ht=$.textures;if(ht.length!==Ht.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Bt=0,Re=Ht.length;Bt<Re;Bt++)ht[Bt]=n.COLOR_ATTACHMENT0+Bt;ht.length=Ht.length,j=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,j=!0);j&&n.drawBuffers(ht)}function Fe($){return v!==$?(n.useProgram($),v=$,!0):!1}let wt={[vr]:n.FUNC_ADD,[Jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};wt[jd]=n.MIN,wt[Qd]=n.MAX;let Dt={[tp]:n.ZERO,[ep]:n.ONE,[np]:n.SRC_COLOR,[Tc]:n.SRC_ALPHA,[lp]:n.SRC_ALPHA_SATURATE,[op]:n.DST_COLOR,[sp]:n.DST_ALPHA,[ip]:n.ONE_MINUS_SRC_COLOR,[Ec]:n.ONE_MINUS_SRC_ALPHA,[ap]:n.ONE_MINUS_DST_COLOR,[rp]:n.ONE_MINUS_DST_ALPHA,[cp]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[fp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function O($,Xt,ht,j,Ht,Bt,Re,Ke,bn,ve){if($===js){T===!0&&(fe(n.BLEND),T=!1);return}if(T===!1&&(Ft(n.BLEND),T=!0),$!==Zd){if($!==y||ve!==L){if((m!==vr||M!==vr)&&(n.blendEquation(n.FUNC_ADD),m=vr,M=vr),ve)switch($){case ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gs:n.blendFunc(n.ONE,n.ONE);break;case zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ff:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}S=null,C=null,q=null,z=null,V.set(0,0,0),B=0,y=$,L=ve}return}Ht=Ht||Xt,Bt=Bt||ht,Re=Re||j,(Xt!==m||Ht!==M)&&(n.blendEquationSeparate(wt[Xt],wt[Ht]),m=Xt,M=Ht),(ht!==S||j!==C||Bt!==q||Re!==z)&&(n.blendFuncSeparate(Dt[ht],Dt[j],Dt[Bt],Dt[Re]),S=ht,C=j,q=Bt,z=Re),(Ke.equals(V)===!1||bn!==B)&&(n.blendColor(Ke.r,Ke.g,Ke.b,bn),V.copy(Ke),B=bn),y=$,L=!1}function re($,Xt){$.side===In?fe(n.CULL_FACE):Ft(n.CULL_FACE);let ht=$.side===$n;Xt&&(ht=!ht),_t(ht),$.blending===ao&&$.transparent===!1?O(js):O($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let j=$.stencilWrite;a.setTest(j),j&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),be($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t($){R!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),R=$)}function Nt($){$!==Yd?(Ft(n.CULL_FACE),$!==H&&($===Nf?n.cullFace(n.BACK):$===$d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),H=$}function It($){$!==st&&(rt&&n.lineWidth($),st=$)}function be($,Xt,ht){$?(Ft(n.POLYGON_OFFSET_FILL),(nt!==Xt||ot!==ht)&&(n.polygonOffset(Xt,ht),nt=Xt,ot=ht)):fe(n.POLYGON_OFFSET_FILL)}function qt($){$?Ft(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function U($){$===void 0&&($=n.TEXTURE0+Mt-1),Ut!==$&&(n.activeTexture($),Ut=$)}function A($,Xt,ht){ht===void 0&&(Ut===null?ht=n.TEXTURE0+Mt-1:ht=Ut);let j=$t[ht];j===void 0&&(j={type:void 0,texture:void 0},$t[ht]=j),(j.type!==$||j.texture!==Xt)&&(Ut!==ht&&(n.activeTexture(ht),Ut=ht),n.bindTexture($,Xt||se[$]),j.type=$,j.texture=Xt)}function tt(){let $=$t[Ut];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function mt(){try{n.compressedTexImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function gt(){try{n.texSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Vt(){try{n.texSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function zt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Zt(){try{n.texImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function de(){try{n.texImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pe($){Ae.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),Ae.copy($))}function Jt($){yt.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),yt.copy($))}function Le($,Xt){let ht=h.get(Xt);ht===void 0&&(ht=new WeakMap,h.set(Xt,ht));let j=ht.get($);j===void 0&&(j=n.getUniformBlockIndex(Xt,$.name),ht.set($,j))}function Kt($,Xt){let j=h.get(Xt).get($);l.get(Xt)!==j&&(n.uniformBlockBinding(Xt,j,$.__bindingPointIndex),l.set(Xt,j))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Ut=null,$t={},u={},p=new WeakMap,d=[],v=null,T=!1,y=null,m=null,S=null,C=null,M=null,q=null,z=null,V=new Me(0,0,0),B=0,L=!1,R=null,H=null,st=null,nt=null,ot=null,Ae.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ft,disable:fe,bindFramebuffer:ce,drawBuffers:oe,useProgram:Fe,setBlending:O,setMaterial:re,setFlipSided:_t,setCullFace:Nt,setLineWidth:It,setPolygonOffset:be,setScissorTest:qt,activeTexture:U,bindTexture:A,unbindTexture:tt,compressedTexImage2D:mt,compressedTexImage3D:dt,texImage2D:Zt,texImage3D:de,updateUBOMapping:Le,uniformBlockBinding:Kt,texStorage2D:Pe,texStorage3D:Tt,texSubImage2D:gt,texSubImage3D:Vt,compressedTexSubImage2D:zt,compressedTexSubImage3D:Wt,scissor:pe,viewport:Jt,reset:Ye}}function Lu(n,t,e,i){let s=My(i);switch(e){case ju:return n*t;case td:return n*t;case ed:return n*t*2;case nd:return n*t/s.components*s.byteLength;case sf:return n*t/s.components*s.byteLength;case id:return n*t*2/s.components*s.byteLength;case rf:return n*t*2/s.components*s.byteLength;case Qu:return n*t*3/s.components*s.byteLength;case ns:return n*t*4/s.components*s.byteLength;case of:return n*t*4/s.components*s.byteLength;case il:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rl:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oc:case Bc:return Math.max(n,16)*Math.max(t,8)/4;case Fc:case kc:return Math.max(n,8)*Math.max(t,8)/2;case Vc:case Hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case al:case sh:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sd:case oh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ah:case lh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function My(n){switch(n){case Fs:case Zu:return{byteLength:1,components:1};case ta:case Ju:case da:return{byteLength:2,components:1};case ef:case nf:return{byteLength:2,components:4};case Sr:case tf:case Ls:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wy(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,f=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return d?new OffscreenCanvas(U,A):ea("canvas")}function T(U,A,tt){let mt=1,dt=qt(U);if((dt.width>tt||dt.height>tt)&&(mt=tt/Math.max(dt.width,dt.height)),mt<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let gt=Math.floor(mt*dt.width),Vt=Math.floor(mt*dt.height);u===void 0&&(u=v(gt,Vt));let zt=A?v(gt,Vt):u;return zt.width=gt,zt.height=Vt,zt.getContext("2d").drawImage(U,0,0,gt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+gt+"x"+Vt+")."),zt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){n.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(U,A,tt,mt,dt=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let gt=A;if(A===n.RED&&(tt===n.FLOAT&&(gt=n.R32F),tt===n.HALF_FLOAT&&(gt=n.R16F),tt===n.UNSIGNED_BYTE&&(gt=n.R8)),A===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(gt=n.R8UI),tt===n.UNSIGNED_SHORT&&(gt=n.R16UI),tt===n.UNSIGNED_INT&&(gt=n.R32UI),tt===n.BYTE&&(gt=n.R8I),tt===n.SHORT&&(gt=n.R16I),tt===n.INT&&(gt=n.R32I)),A===n.RG&&(tt===n.FLOAT&&(gt=n.RG32F),tt===n.HALF_FLOAT&&(gt=n.RG16F),tt===n.UNSIGNED_BYTE&&(gt=n.RG8)),A===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(gt=n.RG8UI),tt===n.UNSIGNED_SHORT&&(gt=n.RG16UI),tt===n.UNSIGNED_INT&&(gt=n.RG32UI),tt===n.BYTE&&(gt=n.RG8I),tt===n.SHORT&&(gt=n.RG16I),tt===n.INT&&(gt=n.RG32I)),A===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(gt=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(gt=n.RGB16UI),tt===n.UNSIGNED_INT&&(gt=n.RGB32UI),tt===n.BYTE&&(gt=n.RGB8I),tt===n.SHORT&&(gt=n.RGB16I),tt===n.INT&&(gt=n.RGB32I)),A===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(gt=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(gt=n.RGBA16UI),tt===n.UNSIGNED_INT&&(gt=n.RGBA32UI),tt===n.BYTE&&(gt=n.RGBA8I),tt===n.SHORT&&(gt=n.RGBA16I),tt===n.INT&&(gt=n.RGBA32I)),A===n.RGB&&tt===n.UNSIGNED_INT_5_9_9_9_REV&&(gt=n.RGB9_E5),A===n.RGBA){let Vt=dt?Pl:Qe.getTransfer(mt);tt===n.FLOAT&&(gt=n.RGBA32F),tt===n.HALF_FLOAT&&(gt=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(gt=Vt===un?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(gt=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(gt=n.RGB5_A1)}return(gt===n.R16F||gt===n.R32F||gt===n.RG16F||gt===n.RG32F||gt===n.RGBA16F||gt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(U,A){let tt;return U?A===null||A===Sr||A===mo?tt=n.DEPTH24_STENCIL8:A===Ls?tt=n.DEPTH32F_STENCIL8:A===ta&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Sr||A===mo?tt=n.DEPTH_COMPONENT24:A===Ls?tt=n.DEPTH_COMPONENT32F:A===ta&&(tt=n.DEPTH_COMPONENT16),tt}function q(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==is&&U.minFilter!==ms?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function z(U){let A=U.target;A.removeEventListener("dispose",z),B(A),A.isVideoTexture&&f.delete(A)}function V(U){let A=U.target;A.removeEventListener("dispose",V),R(A)}function B(U){let A=i.get(U);if(A.__webglInit===void 0)return;let tt=U.source,mt=p.get(tt);if(mt){let dt=mt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&L(U),Object.keys(mt).length===0&&p.delete(tt)}i.remove(U)}function L(U){let A=i.get(U);n.deleteTexture(A.__webglTexture);let tt=U.source,mt=p.get(tt);delete mt[A.__cacheKey],o.memory.textures--}function R(U){let A=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let dt=0;dt<A.__webglFramebuffer[mt].length;dt++)n.deleteFramebuffer(A.__webglFramebuffer[mt][dt]);else n.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)n.deleteFramebuffer(A.__webglFramebuffer[mt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let tt=U.textures;for(let mt=0,dt=tt.length;mt<dt;mt++){let gt=i.get(tt[mt]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(tt[mt])}i.remove(U)}let H=0;function st(){H=0}function nt(){let U=H;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),H+=1,U}function ot(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function Mt(U,A){let tt=i.get(U);if(U.isVideoTexture&&It(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){let mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(tt,U,A);return}}e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+A)}function rt(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){yt(tt,U,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+A)}function Rt(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){yt(tt,U,A);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+A)}function lt(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){Pt(tt,U,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+A)}let Ut={[zs]:n.REPEAT,[Mr]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},$t={[is]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[ms]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},Ot={[Ep]:n.NEVER,[Lp]:n.ALWAYS,[Ap]:n.LESS,[od]:n.LEQUAL,[Rp]:n.EQUAL,[Pp]:n.GEQUAL,[Cp]:n.GREATER,[Ip]:n.NOTEQUAL};function ie(U,A){if(A.type===Ls&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ms||A.magFilter===Gl||A.magFilter===Aa||A.magFilter===wr||A.minFilter===ms||A.minFilter===Gl||A.minFilter===Aa||A.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Ut[A.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Ut[A.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Ut[A.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,$t[A.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,$t[A.minFilter]),A.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Ot[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===is||A.minFilter!==Aa&&A.minFilter!==wr||A.type===Ls&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ae(U,A){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",z));let mt=A.source,dt=p.get(mt);dt===void 0&&(dt={},p.set(mt,dt));let gt=ot(A);if(gt!==U.__cacheKey){dt[gt]===void 0&&(dt[gt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),dt[gt].usedTimes++;let Vt=dt[U.__cacheKey];Vt!==void 0&&(dt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&L(A)),U.__cacheKey=gt,U.__webglTexture=dt[gt].texture}return tt}function yt(U,A,tt){let mt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=n.TEXTURE_3D);let dt=Ae(U,A),gt=A.source;e.bindTexture(mt,U.__webglTexture,n.TEXTURE0+tt);let Vt=i.get(gt);if(gt.version!==Vt.__version||dt===!0){e.activeTexture(n.TEXTURE0+tt);let zt=Qe.getPrimaries(Qe.workingColorSpace),Wt=A.colorSpace===Js?null:Qe.getPrimaries(A.colorSpace),Pe=A.colorSpace===Js||zt===Wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Tt=T(A.image,!1,s.maxTextureSize);Tt=be(A,Tt);let Zt=r.convert(A.format,A.colorSpace),de=r.convert(A.type),pe=C(A.internalFormat,Zt,de,A.colorSpace,A.isVideoTexture);ie(mt,A);let Jt,Le=A.mipmaps,Kt=A.isVideoTexture!==!0,Ye=Vt.__version===void 0||dt===!0,$=gt.dataReady,Xt=q(A,Tt);if(A.isDepthTexture)pe=M(A.format===go,A.type),Ye&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,pe,Tt.width,Tt.height):e.texImage2D(n.TEXTURE_2D,0,pe,Tt.width,Tt.height,0,Zt,de,null));else if(A.isDataTexture)if(Le.length>0){Kt&&Ye&&e.texStorage2D(n.TEXTURE_2D,Xt,pe,Le[0].width,Le[0].height);for(let ht=0,j=Le.length;ht<j;ht++)Jt=Le[ht],Kt?$&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Jt.width,Jt.height,Zt,de,Jt.data):e.texImage2D(n.TEXTURE_2D,ht,pe,Jt.width,Jt.height,0,Zt,de,Jt.data);A.generateMipmaps=!1}else Kt?(Ye&&e.texStorage2D(n.TEXTURE_2D,Xt,pe,Tt.width,Tt.height),$&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Zt,de,Tt.data)):e.texImage2D(n.TEXTURE_2D,0,pe,Tt.width,Tt.height,0,Zt,de,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Kt&&Ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,pe,Le[0].width,Le[0].height,Tt.depth);for(let ht=0,j=Le.length;ht<j;ht++)if(Jt=Le[ht],A.format!==ns)if(Zt!==null)if(Kt){if($)if(A.layerUpdates.size>0){let Ht=Lu(Jt.width,Jt.height,A.format,A.type);for(let Bt of A.layerUpdates){let Re=Jt.data.subarray(Bt*Ht/Jt.data.BYTES_PER_ELEMENT,(Bt+1)*Ht/Jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Bt,Jt.width,Jt.height,1,Zt,Re)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Jt.width,Jt.height,Tt.depth,Zt,Jt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,pe,Jt.width,Jt.height,Tt.depth,0,Jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?$&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Jt.width,Jt.height,Tt.depth,Zt,de,Jt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,pe,Jt.width,Jt.height,Tt.depth,0,Zt,de,Jt.data)}else{Kt&&Ye&&e.texStorage2D(n.TEXTURE_2D,Xt,pe,Le[0].width,Le[0].height);for(let ht=0,j=Le.length;ht<j;ht++)Jt=Le[ht],A.format!==ns?Zt!==null?Kt?$&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Jt.width,Jt.height,Zt,Jt.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,pe,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?$&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Jt.width,Jt.height,Zt,de,Jt.data):e.texImage2D(n.TEXTURE_2D,ht,pe,Jt.width,Jt.height,0,Zt,de,Jt.data)}else if(A.isDataArrayTexture)if(Kt){if(Ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,pe,Tt.width,Tt.height,Tt.depth),$)if(A.layerUpdates.size>0){let ht=Lu(Tt.width,Tt.height,A.format,A.type);for(let j of A.layerUpdates){let Ht=Tt.data.subarray(j*ht/Tt.data.BYTES_PER_ELEMENT,(j+1)*ht/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Tt.width,Tt.height,1,Zt,de,Ht)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Zt,de,Tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,Tt.width,Tt.height,Tt.depth,0,Zt,de,Tt.data);else if(A.isData3DTexture)Kt?(Ye&&e.texStorage3D(n.TEXTURE_3D,Xt,pe,Tt.width,Tt.height,Tt.depth),$&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Zt,de,Tt.data)):e.texImage3D(n.TEXTURE_3D,0,pe,Tt.width,Tt.height,Tt.depth,0,Zt,de,Tt.data);else if(A.isFramebufferTexture){if(Ye)if(Kt)e.texStorage2D(n.TEXTURE_2D,Xt,pe,Tt.width,Tt.height);else{let ht=Tt.width,j=Tt.height;for(let Ht=0;Ht<Xt;Ht++)e.texImage2D(n.TEXTURE_2D,Ht,pe,ht,j,0,Zt,de,null),ht>>=1,j>>=1}}else if(Le.length>0){if(Kt&&Ye){let ht=qt(Le[0]);e.texStorage2D(n.TEXTURE_2D,Xt,pe,ht.width,ht.height)}for(let ht=0,j=Le.length;ht<j;ht++)Jt=Le[ht],Kt?$&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Zt,de,Jt):e.texImage2D(n.TEXTURE_2D,ht,pe,Zt,de,Jt);A.generateMipmaps=!1}else if(Kt){if(Ye){let ht=qt(Tt);e.texStorage2D(n.TEXTURE_2D,Xt,pe,ht.width,ht.height)}$&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Zt,de,Tt)}else e.texImage2D(n.TEXTURE_2D,0,pe,Zt,de,Tt);y(A)&&m(mt),Vt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Pt(U,A,tt){if(A.image.length!==6)return;let mt=Ae(U,A),dt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+tt);let gt=i.get(dt);if(dt.version!==gt.__version||mt===!0){e.activeTexture(n.TEXTURE0+tt);let Vt=Qe.getPrimaries(Qe.workingColorSpace),zt=A.colorSpace===Js?null:Qe.getPrimaries(A.colorSpace),Wt=A.colorSpace===Js||Vt===zt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,Zt=[];for(let j=0;j<6;j++)!Pe&&!Tt?Zt[j]=T(A.image[j],!0,s.maxCubemapSize):Zt[j]=Tt?A.image[j].image:A.image[j],Zt[j]=be(A,Zt[j]);let de=Zt[0],pe=r.convert(A.format,A.colorSpace),Jt=r.convert(A.type),Le=C(A.internalFormat,pe,Jt,A.colorSpace),Kt=A.isVideoTexture!==!0,Ye=gt.__version===void 0||mt===!0,$=dt.dataReady,Xt=q(A,de);ie(n.TEXTURE_CUBE_MAP,A);let ht;if(Pe){Kt&&Ye&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Le,de.width,de.height);for(let j=0;j<6;j++){ht=Zt[j].mipmaps;for(let Ht=0;Ht<ht.length;Ht++){let Bt=ht[Ht];A.format!==ns?pe!==null?Kt?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht,0,0,Bt.width,Bt.height,pe,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht,Le,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht,0,0,Bt.width,Bt.height,pe,Jt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht,Le,Bt.width,Bt.height,0,pe,Jt,Bt.data)}}}else{if(ht=A.mipmaps,Kt&&Ye){ht.length>0&&Xt++;let j=qt(Zt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Le,j.width,j.height)}for(let j=0;j<6;j++)if(Tt){Kt?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Zt[j].width,Zt[j].height,pe,Jt,Zt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Le,Zt[j].width,Zt[j].height,0,pe,Jt,Zt[j].data);for(let Ht=0;Ht<ht.length;Ht++){let Re=ht[Ht].image[j].image;Kt?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht+1,0,0,Re.width,Re.height,pe,Jt,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht+1,Le,Re.width,Re.height,0,pe,Jt,Re.data)}}else{Kt?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe,Jt,Zt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Le,pe,Jt,Zt[j]);for(let Ht=0;Ht<ht.length;Ht++){let Bt=ht[Ht];Kt?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht+1,0,0,pe,Jt,Bt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ht+1,Le,pe,Jt,Bt.image[j])}}}y(A)&&m(n.TEXTURE_CUBE_MAP),gt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function se(U,A,tt,mt,dt,gt){let Vt=r.convert(tt.format,tt.colorSpace),zt=r.convert(tt.type),Wt=C(tt.internalFormat,Vt,zt,tt.colorSpace),Pe=i.get(A),Tt=i.get(tt);if(Tt.__renderTarget=A,!Pe.__hasExternalTextures){let Zt=Math.max(1,A.width>>gt),de=Math.max(1,A.height>>gt);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,gt,Wt,Zt,de,A.depth,0,Vt,zt,null):e.texImage2D(dt,gt,Wt,Zt,de,0,Vt,zt,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Nt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,dt,Tt.__webglTexture,0,_t(A)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,dt,Tt.__webglTexture,gt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(U,A,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,U),A.depthBuffer){let mt=A.depthTexture,dt=mt&&mt.isDepthTexture?mt.type:null,gt=M(A.stencilBuffer,dt),Vt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=_t(A);Nt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,gt,A.width,A.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,gt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,gt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Vt,n.RENDERBUFFER,U)}else{let mt=A.textures;for(let dt=0;dt<mt.length;dt++){let gt=mt[dt],Vt=r.convert(gt.format,gt.colorSpace),zt=r.convert(gt.type),Wt=C(gt.internalFormat,Vt,zt,gt.colorSpace),Pe=_t(A);tt&&Nt(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Wt,A.width,A.height):Nt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Wt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Wt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=i.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Mt(A.depthTexture,0);let dt=mt.__webglTexture,gt=_t(A);if(A.depthTexture.format===lo)Nt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0);else if(A.depthTexture.format===go)Nt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function ce(U){let A=i.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let mt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){let dt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",dt)};mt.addEventListener("dispose",dt),A.__depthDisposeCallback=dt}A.__boundDepthTexture=mt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");fe(A.__webglFramebuffer,U)}else if(tt){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=n.createRenderbuffer(),Ft(A.__webglDepthbuffer[mt],U,!1);else{let dt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ft(A.__webglDepthbuffer,U,!1);else{let mt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(U,A,tt){let mt=i.get(U);A!==void 0&&se(mt.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&ce(U)}function Fe(U){let A=U.texture,tt=i.get(U),mt=i.get(A);U.addEventListener("dispose",V);let dt=U.textures,gt=U.isWebGLCubeRenderTarget===!0,Vt=dt.length>1;if(Vt||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=A.version,o.memory.textures++),gt){tt.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[zt]=[];for(let Wt=0;Wt<A.mipmaps.length;Wt++)tt.__webglFramebuffer[zt][Wt]=n.createFramebuffer()}else tt.__webglFramebuffer[zt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let zt=0;zt<A.mipmaps.length;zt++)tt.__webglFramebuffer[zt]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(Vt)for(let zt=0,Wt=dt.length;zt<Wt;zt++){let Pe=i.get(dt[zt]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Nt(U)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let zt=0;zt<dt.length;zt++){let Wt=dt[zt];tt.__webglColorRenderbuffer[zt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[zt]);let Pe=r.convert(Wt.format,Wt.colorSpace),Tt=r.convert(Wt.type),Zt=C(Wt.internalFormat,Pe,Tt,Wt.colorSpace,U.isXRRenderTarget===!0),de=_t(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Zt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,tt.__webglColorRenderbuffer[zt])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(gt){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),ie(n.TEXTURE_CUBE_MAP,A);for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)se(tt.__webglFramebuffer[zt][Wt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Wt);else se(tt.__webglFramebuffer[zt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);y(A)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let zt=0,Wt=dt.length;zt<Wt;zt++){let Pe=dt[zt],Tt=i.get(Pe);e.bindTexture(n.TEXTURE_2D,Tt.__webglTexture),ie(n.TEXTURE_2D,Pe),se(tt.__webglFramebuffer,U,Pe,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,0),y(Pe)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let zt=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(zt=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(zt,mt.__webglTexture),ie(zt,A),A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)se(tt.__webglFramebuffer[Wt],U,A,n.COLOR_ATTACHMENT0,zt,Wt);else se(tt.__webglFramebuffer,U,A,n.COLOR_ATTACHMENT0,zt,0);y(A)&&m(zt),e.unbindTexture()}U.depthBuffer&&ce(U)}function wt(U){let A=U.textures;for(let tt=0,mt=A.length;tt<mt;tt++){let dt=A[tt];if(y(dt)){let gt=S(U),Vt=i.get(dt).__webglTexture;e.bindTexture(gt,Vt),m(gt),e.unbindTexture()}}}let Dt=[],O=[];function re(U){if(U.samples>0){if(Nt(U)===!1){let A=U.textures,tt=U.width,mt=U.height,dt=n.COLOR_BUFFER_BIT,gt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Vt=i.get(U),zt=A.length>1;if(zt)for(let Wt=0;Wt<A.length;Wt++)e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Wt=0;Wt<A.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),zt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[Wt]);let Pe=i.get(A[Wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,dt,n.NEAREST),l===!0&&(Dt.length=0,O.length=0,Dt.push(n.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Dt.push(gt),O.push(gt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),zt)for(let Wt=0;Wt<A.length;Wt++){e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[Wt]);let Pe=i.get(A[Wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,Pe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let A=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function _t(U){return Math.min(s.maxSamples,U.samples)}function Nt(U){let A=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(U){let A=o.render.frame;f.get(U)!==A&&(f.set(U,A),U.update())}function be(U,A){let tt=U.colorSpace,mt=U.format,dt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Co&&tt!==Js&&(Qe.getTransfer(tt)===un?(mt!==ns||dt!==Fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),A}function qt(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=Mt,this.setTexture2DArray=rt,this.setTexture3D=Rt,this.setTextureCube=lt,this.rebindTextures=oe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Nt}function Sy(n,t){function e(i,s=Js){let r,o=Qe.getTransfer(s);if(i===Fs)return n.UNSIGNED_BYTE;if(i===ef)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ku)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zu)return n.BYTE;if(i===Ju)return n.SHORT;if(i===ta)return n.UNSIGNED_SHORT;if(i===tf)return n.INT;if(i===Sr)return n.UNSIGNED_INT;if(i===Ls)return n.FLOAT;if(i===da)return n.HALF_FLOAT;if(i===ju)return n.ALPHA;if(i===Qu)return n.RGB;if(i===ns)return n.RGBA;if(i===td)return n.LUMINANCE;if(i===ed)return n.LUMINANCE_ALPHA;if(i===lo)return n.DEPTH_COMPONENT;if(i===go)return n.DEPTH_STENCIL;if(i===nd)return n.RED;if(i===sf)return n.RED_INTEGER;if(i===id)return n.RG;if(i===rf)return n.RG_INTEGER;if(i===of)return n.RGBA_INTEGER;if(i===il||i===sl||i===rl||i===ol)if(o===un)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===kc||i===Bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Hc||i===Gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Hc)return o===un?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Jc||i===Kc||i===jc||i===Qc||i===th||i===eh||i===nh||i===ih)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qc)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eh)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nh)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===sh||i===rh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===al)return o===un?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sd||i===oh||i===ah||i===lh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Th=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},_e=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ty={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let T of t.hand.values()){let y=e.getJointPose(T,i),m=this._getHandJoint(h,T);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let f=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=f.position.distanceTo(u.position),d=.02,v=.005;h.inputState.pinching&&p>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new wi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ys({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends nr{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,f=null,u=null,p=null,d=null,v=null,T=new Eh,y=e.getContextAttributes(),m=null,S=null,C=[],M=[],q=new At,z=null,V=new On;V.viewport=new pn;let B=new On;B.viewport=new pn;let L=[V,B],R=new Th,H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let Pt=C[yt];return Pt===void 0&&(Pt=new Ko,C[yt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(yt){let Pt=C[yt];return Pt===void 0&&(Pt=new Ko,C[yt]=Pt),Pt.getGripSpace()},this.getHand=function(yt){let Pt=C[yt];return Pt===void 0&&(Pt=new Ko,C[yt]=Pt),Pt.getHandSpace()};function nt(yt){let Pt=M.indexOf(yt.inputSource);if(Pt===-1)return;let se=C[Pt];se!==void 0&&(se.update(yt.inputSource,yt.frame,h||o),se.dispatchEvent({type:yt.type,data:yt.inputSource}))}function ot(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",Mt);for(let yt=0;yt<C.length;yt++){let Pt=M[yt];Pt!==null&&(M[yt]=null,C[yt].disconnect(Pt))}H=null,st=null,T.reset(),t.setRenderTarget(m),d=null,p=null,u=null,s=null,S=null,Ae.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(q.width,q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){r=yt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){a=yt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(yt){h=yt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",Mt),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){let Pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ss(d.framebufferWidth,d.framebufferHeight,{format:ns,type:Fs,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let Pt=null,se=null,Ft=null;y.depth&&(Ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=y.stencil?go:lo,se=y.stencil?mo:Sr);let fe={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(fe),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new ss(p.textureWidth,p.textureHeight,{format:ns,type:Fs,depthTexture:new yl(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function Mt(yt){for(let Pt=0;Pt<yt.removed.length;Pt++){let se=yt.removed[Pt],Ft=M.indexOf(se);Ft>=0&&(M[Ft]=null,C[Ft].disconnect(se))}for(let Pt=0;Pt<yt.added.length;Pt++){let se=yt.added[Pt],Ft=M.indexOf(se);if(Ft===-1){for(let ce=0;ce<C.length;ce++)if(ce>=M.length){M.push(se),Ft=ce;break}else if(M[ce]===null){M[ce]=se,Ft=ce;break}if(Ft===-1)break}let fe=C[Ft];fe&&fe.connect(se)}}let rt=new N,Rt=new N;function lt(yt,Pt,se){rt.setFromMatrixPosition(Pt.matrixWorld),Rt.setFromMatrixPosition(se.matrixWorld);let Ft=rt.distanceTo(Rt),fe=Pt.projectionMatrix.elements,ce=se.projectionMatrix.elements,oe=fe[14]/(fe[10]-1),Fe=fe[14]/(fe[10]+1),wt=(fe[9]+1)/fe[5],Dt=(fe[9]-1)/fe[5],O=(fe[8]-1)/fe[0],re=(ce[8]+1)/ce[0],_t=oe*O,Nt=oe*re,It=Ft/(-O+re),be=It*-O;if(Pt.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(be),yt.translateZ(It),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),fe[10]===-1)yt.projectionMatrix.copy(Pt.projectionMatrix),yt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse);else{let qt=oe+It,U=Fe+It,A=_t-be,tt=Nt+(Ft-be),mt=wt*Fe/U*qt,dt=Dt*Fe/U*qt;yt.projectionMatrix.makePerspective(A,tt,mt,dt,qt,U),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function Ut(yt,Pt){Pt===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(Pt.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let Pt=yt.near,se=yt.far;T.texture!==null&&(T.depthNear>0&&(Pt=T.depthNear),T.depthFar>0&&(se=T.depthFar)),R.near=B.near=V.near=Pt,R.far=B.far=V.far=se,(H!==R.near||st!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,st=R.far),V.layers.mask=yt.layers.mask|2,B.layers.mask=yt.layers.mask|4,R.layers.mask=V.layers.mask|B.layers.mask;let Ft=yt.parent,fe=R.cameras;Ut(R,Ft);for(let ce=0;ce<fe.length;ce++)Ut(fe[ce],Ft);fe.length===2?lt(R,V,B):R.projectionMatrix.copy(V.projectionMatrix),$t(yt,R,Ft)};function $t(yt,Pt,se){se===null?yt.matrix.copy(Pt.matrixWorld):(yt.matrix.copy(se.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(Pt.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(Pt.projectionMatrix),yt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=fh*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(yt){l=yt,p!==null&&(p.fixedFoveation=yt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=yt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let Ot=null;function ie(yt,Pt){if(f=Pt.getViewerPose(h||o),v=Pt,f!==null){let se=f.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ft=!1;se.length!==R.cameras.length&&(R.cameras.length=0,Ft=!0);for(let ce=0;ce<se.length;ce++){let oe=se[ce],Fe=null;if(d!==null)Fe=d.getViewport(oe);else{let Dt=u.getViewSubImage(p,oe);Fe=Dt.viewport,ce===0&&(t.setRenderTargetTextures(S,Dt.colorTexture,p.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(S))}let wt=L[ce];wt===void 0&&(wt=new On,wt.layers.enable(ce),wt.viewport=new pn,L[ce]=wt),wt.matrix.fromArray(oe.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(oe.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ce===0&&(R.matrix.copy(wt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ft===!0&&R.cameras.push(wt)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let ce=u.getDepthInformation(se[0]);ce&&ce.isValid&&ce.texture&&T.init(t,ce,s.renderState)}}for(let se=0;se<C.length;se++){let Ft=M[se],fe=C[se];Ft!==null&&fe!==void 0&&fe.update(Ft,Pt,h||o)}Ot&&Ot(yt,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),v=null}let Ae=new hd;Ae.setAnimationLoop(ie),this.setAnimationLoop=function(yt){Ot=yt},this.dispose=function(){}}},yr=new xs,Ry=new xn;function Cy(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,cd(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,S,C,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(y,m):m.isMeshToonMaterial?(r(y,m),u(y,m)):m.isMeshPhongMaterial?(r(y,m),f(y,m)):m.isMeshStandardMaterial?(r(y,m),p(y,m),m.isMeshPhysicalMaterial&&d(y,m,M)):m.isMeshMatcapMaterial?(r(y,m),v(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),T(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(o(y,m),m.isLineDashedMaterial&&a(y,m)):m.isPointsMaterial?l(y,m,S,C):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===$n&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===$n&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let S=t.get(m),C=S.envMap,M=S.envMapRotation;C&&(y.envMap.value=C,yr.copy(M),yr.x*=-1,yr.y*=-1,yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(yr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function o(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function a(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function l(y,m,S,C){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*S,y.scale.value=C*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function u(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function p(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function d(y,m,S){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$n&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,m){m.matcap&&(y.matcap.value=m.matcap)}function T(y,m){let S=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iy(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){let M=C.program;i.uniformBlockBinding(S,M)}function h(S,C){let M=s[S.id];M===void 0&&(v(S),M=f(S),s[S.id]=M,S.addEventListener("dispose",y));let q=C.program;i.updateUBOMapping(S,q);let z=t.render.frame;r[S.id]!==z&&(p(S),r[S.id]=z)}function f(S){let C=u();S.__bindingPointIndex=C;let M=n.createBuffer(),q=S.__size,z=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,q,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let C=s[S.id],M=S.uniforms,q=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let z=0,V=M.length;z<V;z++){let B=Array.isArray(M[z])?M[z]:[M[z]];for(let L=0,R=B.length;L<R;L++){let H=B[L];if(d(H,z,L,q)===!0){let st=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value],ot=0;for(let Mt=0;Mt<nt.length;Mt++){let rt=nt[Mt],Rt=T(rt);typeof rt=="number"||typeof rt=="boolean"?(H.__data[0]=rt,n.bufferSubData(n.UNIFORM_BUFFER,st+ot,H.__data)):rt.isMatrix3?(H.__data[0]=rt.elements[0],H.__data[1]=rt.elements[1],H.__data[2]=rt.elements[2],H.__data[3]=0,H.__data[4]=rt.elements[3],H.__data[5]=rt.elements[4],H.__data[6]=rt.elements[5],H.__data[7]=0,H.__data[8]=rt.elements[6],H.__data[9]=rt.elements[7],H.__data[10]=rt.elements[8],H.__data[11]=0):(rt.toArray(H.__data,ot),ot+=Rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,C,M,q){let z=S.value,V=C+"_"+M;if(q[V]===void 0)return typeof z=="number"||typeof z=="boolean"?q[V]=z:q[V]=z.clone(),!0;{let B=q[V];if(typeof z=="number"||typeof z=="boolean"){if(B!==z)return q[V]=z,!0}else if(B.equals(z)===!1)return B.copy(z),!0}return!1}function v(S){let C=S.uniforms,M=0,q=16;for(let V=0,B=C.length;V<B;V++){let L=Array.isArray(C[V])?C[V]:[C[V]];for(let R=0,H=L.length;R<H;R++){let st=L[R],nt=Array.isArray(st.value)?st.value:[st.value];for(let ot=0,Mt=nt.length;ot<Mt;ot++){let rt=nt[ot],Rt=T(rt),lt=M%q,Ut=lt%Rt.boundary,$t=lt+Ut;M+=Ut,$t!==0&&q-$t<Rt.storage&&(M+=q-$t),st.__data=new Float32Array(Rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=M,M+=Rt.storage}}}let z=M%q;return z>0&&(M+=q-z),S.__size=M,S.__cache={},this}function T(S){let C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),C}function y(S){let C=S.target;C.removeEventListener("dispose",y);let M=o.indexOf(C.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:m}}var _o=class{constructor(t={}){let{canvas:e=Up(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let v=new Uint32Array(4),T=new Int32Array(4),y=null,m=null,S=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Qs,this.toneMappingExposure=1;let M=this,q=!1,z=0,V=0,B=null,L=-1,R=null,H=new pn,st=new pn,nt=null,ot=new Me(0),Mt=0,rt=e.width,Rt=e.height,lt=1,Ut=null,$t=null,Ot=new pn(0,0,rt,Rt),ie=new pn(0,0,rt,Rt),Ae=!1,yt=new sa,Pt=!1,se=!1,Ft=new xn,fe=new xn,ce=new N,oe=new pn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Dt(){return B===null?lt:1}let O=i;function re(P,k){return e.getContext(P,k)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),O===null){let k="webgl2";if(O=re(k,P),O===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _t,Nt,It,be,qt,U,A,tt,mt,dt,gt,Vt,zt,Wt,Pe,Tt,Zt,de,pe,Jt,Le,Kt,Ye,$;function Xt(){_t=new qg(O),_t.init(),Kt=new Sy(O,_t),Nt=new Bg(O,_t,t,Kt),It=new by(O,_t),Nt.reverseDepthBuffer&&p&&It.buffers.depth.setReversed(!0),be=new Zg(O),qt=new ly,U=new wy(O,_t,It,qt,Nt,Kt,be),A=new Hg(M),tt=new Xg(M),mt=new nm(O),Ye=new Og(O,mt),dt=new Yg(O,mt,be,Ye),gt=new Kg(O,dt,mt,be),pe=new Jg(O,Nt,U),Tt=new Vg(qt),Vt=new ay(M,A,tt,_t,Nt,Ye,Tt),zt=new Cy(M,qt),Wt=new hy,Pe=new gy(_t),de=new Fg(M,A,tt,It,gt,d,l),Zt=new _y(M,gt,Nt),$=new Iy(O,be,Nt,It),Jt=new kg(O,_t,be),Le=new $g(O,_t,be),be.programs=Vt.programs,M.capabilities=Nt,M.extensions=_t,M.properties=qt,M.renderLists=Wt,M.shadowMap=Zt,M.state=It,M.info=be}Xt();let ht=new Ah(M,O);this.xr=ht,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(P){P!==void 0&&(lt=P,this.setSize(rt,Rt,!1))},this.getSize=function(P){return P.set(rt,Rt)},this.setSize=function(P,k,et=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,Rt=k,e.width=Math.floor(P*lt),e.height=Math.floor(k*lt),et===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(rt*lt,Rt*lt).floor()},this.setDrawingBufferSize=function(P,k,et){rt=P,Rt=k,lt=et,e.width=Math.floor(P*et),e.height=Math.floor(k*et),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(Ot)},this.setViewport=function(P,k,et,it){P.isVector4?Ot.set(P.x,P.y,P.z,P.w):Ot.set(P,k,et,it),It.viewport(H.copy(Ot).multiplyScalar(lt).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,k,et,it){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,k,et,it),It.scissor(st.copy(ie).multiplyScalar(lt).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(P){It.setScissorTest(Ae=P)},this.setOpaqueSort=function(P){Ut=P},this.setTransparentSort=function(P){$t=P},this.getClearColor=function(P){return P.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(P=!0,k=!0,et=!0){let it=0;if(P){let Y=!1;if(B!==null){let Ct=B.texture.format;Y=Ct===of||Ct===rf||Ct===sf}if(Y){let Ct=B.texture.type,W=Ct===Fs||Ct===Sr||Ct===ta||Ct===mo||Ct===ef||Ct===nf,jt=de.getClearColor(),kt=de.getClearAlpha(),me=jt.r,we=jt.g,Qt=jt.b;W?(v[0]=me,v[1]=we,v[2]=Qt,v[3]=kt,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=me,T[1]=we,T[2]=Qt,T[3]=kt,O.clearBufferiv(O.COLOR,0,T))}else it|=O.COLOR_BUFFER_BIT}k&&(it|=O.DEPTH_BUFFER_BIT),et&&(it|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),Wt.dispose(),Pe.dispose(),qt.dispose(),A.dispose(),tt.dispose(),gt.dispose(),Ye.dispose(),$.dispose(),Vt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ur),ht.removeEventListener("sessionend",Hs),Gn.stop()};function j(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;let P=be.autoReset,k=Zt.enabled,et=Zt.autoUpdate,it=Zt.needsUpdate,Y=Zt.type;Xt(),be.autoReset=P,Zt.enabled=k,Zt.autoUpdate=et,Zt.needsUpdate=it,Zt.type=Y}function Bt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Re(P){let k=P.target;k.removeEventListener("dispose",Re),Ke(k)}function Ke(P){bn(P),qt.remove(P)}function bn(P){let k=qt.get(P).programs;k!==void 0&&(k.forEach(function(et){Vt.releaseProgram(et)}),P.isShaderMaterial&&Vt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,et,it,Y,Ct){k===null&&(k=Fe);let W=Y.isMesh&&Y.matrixWorld.determinant()<0,jt=Ai(P,k,et,it,Y);It.setMaterial(it,W);let kt=et.index,me=1;if(it.wireframe===!0){if(kt=dt.getWireframeAttribute(et),kt===void 0)return;me=2}let we=et.drawRange,Qt=et.attributes.position,Oe=we.start*me,tn=(we.start+we.count)*me;Ct!==null&&(Oe=Math.max(Oe,Ct.start*me),tn=Math.min(tn,(Ct.start+Ct.count)*me)),kt!==null?(Oe=Math.max(Oe,0),tn=Math.min(tn,kt.count)):Qt!=null&&(Oe=Math.max(Oe,0),tn=Math.min(tn,Qt.count));let rn=tn-Oe;if(rn<0||rn===1/0)return;Ye.setup(Y,it,jt,et,kt);let Un,We=Jt;if(kt!==null&&(Un=mt.get(kt),We=Le,We.setIndex(Un)),Y.isMesh)it.wireframe===!0?(It.setLineWidth(it.wireframeLinewidth*Dt()),We.setMode(O.LINES)):We.setMode(O.TRIANGLES);else if(Y.isLine){let ne=it.linewidth;ne===void 0&&(ne=1),It.setLineWidth(ne*Dt()),Y.isLineSegments?We.setMode(O.LINES):Y.isLineLoop?We.setMode(O.LINE_LOOP):We.setMode(O.LINE_STRIP)}else Y.isPoints?We.setMode(O.POINTS):Y.isSprite&&We.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)We.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))We.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ne=Y._multiDrawStarts,Cn=Y._multiDrawCounts,Ce=Y._multiDrawCount,Wn=kt?mt.get(kt).bytesPerElement:1,G=qt.get(it).currentProgram.getUniforms();for(let en=0;en<Ce;en++)G.setValue(O,"_gl_DrawID",en),We.render(ne[en]/Wn,Cn[en])}else if(Y.isInstancedMesh)We.renderInstances(Oe,rn,Y.count);else if(et.isInstancedBufferGeometry){let ne=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Cn=Math.min(et.instanceCount,ne);We.renderInstances(Oe,rn,Cn)}else We.render(Oe,rn)};function ve(P,k,et){P.transparent===!0&&P.side===In&&P.forceSinglePass===!1?(P.side=$n,P.needsUpdate=!0,Kn(P,k,et),P.side=er,P.needsUpdate=!0,Kn(P,k,et),P.side=In):Kn(P,k,et)}this.compile=function(P,k,et=null){et===null&&(et=P),m=Pe.get(et),m.init(k),C.push(m),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),P!==et&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();let it=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let W=0;W<Ct.length;W++){let jt=Ct[W];ve(jt,et,Y),it.add(jt)}else ve(Ct,et,Y),it.add(Ct)}),C.pop(),m=null,it},this.compileAsync=function(P,k,et=null){let it=this.compile(P,k,et);return new Promise(Y=>{function Ct(){if(it.forEach(function(W){qt.get(W).currentProgram.isReady()&&it.delete(W)}),it.size===0){Y(P);return}setTimeout(Ct,10)}_t.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Dn=null;function En(P){Dn&&Dn(P)}function Ur(){Gn.stop()}function Hs(){Gn.start()}let Gn=new hd;Gn.setAnimationLoop(En),typeof self!="undefined"&&Gn.setContext(self),this.setAnimationLoop=function(P){Dn=P,ht.setAnimationLoop(P),P===null?Gn.stop():Gn.start()},ht.addEventListener("sessionstart",Ur),ht.addEventListener("sessionend",Hs),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,B),m=Pe.get(P,C.length),m.init(k),C.push(m),fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),yt.setFromProjectionMatrix(fe),se=this.localClippingEnabled,Pt=Tt.init(this.clippingPlanes,se),y=Wt.get(P,S.length),y.init(),S.push(y),ht.enabled===!0&&ht.isPresenting===!0){let Ct=M.xr.getDepthSensingMesh();Ct!==null&&cn(Ct,k,-1/0,M.sortObjects)}cn(P,k,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Ut,$t),wt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,wt&&de.addToRenderList(y,P),this.info.render.frame++,Pt===!0&&Tt.beginShadows();let et=m.state.shadowsArray;Zt.render(et,P,k),Pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=y.opaque,Y=y.transmissive;if(m.setupLights(),k.isArrayCamera){let Ct=k.cameras;if(Y.length>0)for(let W=0,jt=Ct.length;W<jt;W++){let kt=Ct[W];_n(it,Y,P,kt)}wt&&de.render(P);for(let W=0,jt=Ct.length;W<jt;W++){let kt=Ct[W];$i(y,P,kt,kt.viewport)}}else Y.length>0&&_n(it,Y,P,k),wt&&de.render(P),$i(y,P,k);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(M,P,k),Ye.resetDefaultState(),L=-1,R=null,C.pop(),C.length>0?(m=C[C.length-1],Pt===!0&&Tt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?y=S[S.length-1]:y=null};function cn(P,k,et,it){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)et=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||yt.intersectsSprite(P)){it&&oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);let W=gt.update(P),jt=P.material;jt.visible&&y.push(P,W,jt,et,oe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||yt.intersectsObject(P))){let W=gt.update(P),jt=P.material;if(it&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),oe.copy(P.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),oe.copy(W.boundingSphere.center)),oe.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(jt)){let kt=W.groups;for(let me=0,we=kt.length;me<we;me++){let Qt=kt[me],Oe=jt[Qt.materialIndex];Oe&&Oe.visible&&y.push(P,W,Oe,et,oe.z,Qt)}}else jt.visible&&y.push(P,W,jt,et,oe.z,null)}}let Ct=P.children;for(let W=0,jt=Ct.length;W<jt;W++)cn(Ct[W],k,et,it)}function $i(P,k,et,it){let Y=P.opaque,Ct=P.transmissive,W=P.transparent;m.setupLightsView(et),Pt===!0&&Tt.setGlobalState(M.clippingPlanes,et),it&&It.viewport(H.copy(it)),Y.length>0&&Ei(Y,k,et),Ct.length>0&&Ei(Ct,k,et),W.length>0&&Ei(W,k,et),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function _n(P,k,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new ss(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?da:Fs,minFilter:wr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let Ct=m.state.transmissionRenderTarget[it.id],W=it.viewport||H;Ct.setSize(W.z,W.w);let jt=M.getRenderTarget();M.setRenderTarget(Ct),M.getClearColor(ot),Mt=M.getClearAlpha(),Mt<1&&M.setClearColor(16777215,.5),M.clear(),wt&&de.render(et);let kt=M.toneMapping;M.toneMapping=Qs;let me=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),Pt===!0&&Tt.setGlobalState(M.clippingPlanes,it),Ei(P,et,it),U.updateMultisampleRenderTarget(Ct),U.updateRenderTargetMipmap(Ct),_t.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Qt=0,Oe=k.length;Qt<Oe;Qt++){let tn=k[Qt],rn=tn.object,Un=tn.geometry,We=tn.material,ne=tn.group;if(We.side===In&&rn.layers.test(it.layers)){let Cn=We.side;We.side=$n,We.needsUpdate=!0,Zi(rn,et,it,Un,We,ne),We.side=Cn,We.needsUpdate=!0,we=!0}}we===!0&&(U.updateMultisampleRenderTarget(Ct),U.updateRenderTargetMipmap(Ct))}M.setRenderTarget(jt),M.setClearColor(ot,Mt),me!==void 0&&(it.viewport=me),M.toneMapping=kt}function Ei(P,k,et){let it=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Ct=P.length;Y<Ct;Y++){let W=P[Y],jt=W.object,kt=W.geometry,me=it===null?W.material:it,we=W.group;jt.layers.test(et.layers)&&Zi(jt,k,et,kt,me,we)}}function Zi(P,k,et,it,Y,Ct){P.onBeforeRender(M,k,et,it,Y,Ct),P.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(M,k,et,it,P,Ct),Y.transparent===!0&&Y.side===In&&Y.forceSinglePass===!1?(Y.side=$n,Y.needsUpdate=!0,M.renderBufferDirect(et,k,it,Y,P,Ct),Y.side=er,Y.needsUpdate=!0,M.renderBufferDirect(et,k,it,Y,P,Ct),Y.side=In):M.renderBufferDirect(et,k,it,Y,P,Ct),P.onAfterRender(M,k,et,it,Y,Ct)}function Kn(P,k,et){k.isScene!==!0&&(k=Fe);let it=qt.get(P),Y=m.state.lights,Ct=m.state.shadowsArray,W=Y.state.version,jt=Vt.getParameters(P,Y.state,Ct,k,et),kt=Vt.getProgramCacheKey(jt),me=it.programs;it.environment=P.isMeshStandardMaterial?k.environment:null,it.fog=k.fog,it.envMap=(P.isMeshStandardMaterial?tt:A).get(P.envMap||it.environment),it.envMapRotation=it.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,me===void 0&&(P.addEventListener("dispose",Re),me=new Map,it.programs=me);let we=me.get(kt);if(we!==void 0){if(it.currentProgram===we&&it.lightsStateVersion===W)return Ji(P,jt),we}else jt.uniforms=Vt.getUniforms(P),P.onBeforeCompile(jt,M),we=Vt.acquireProgram(jt,kt),me.set(kt,we),it.uniforms=jt.uniforms;let Qt=it.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qt.clippingPlanes=Tt.uniform),Ji(P,jt),it.needsLights=zr(P),it.lightsStateVersion=W,it.needsLights&&(Qt.ambientLightColor.value=Y.state.ambient,Qt.lightProbe.value=Y.state.probe,Qt.directionalLights.value=Y.state.directional,Qt.directionalLightShadows.value=Y.state.directionalShadow,Qt.spotLights.value=Y.state.spot,Qt.spotLightShadows.value=Y.state.spotShadow,Qt.rectAreaLights.value=Y.state.rectArea,Qt.ltc_1.value=Y.state.rectAreaLTC1,Qt.ltc_2.value=Y.state.rectAreaLTC2,Qt.pointLights.value=Y.state.point,Qt.pointLightShadows.value=Y.state.pointShadow,Qt.hemisphereLights.value=Y.state.hemi,Qt.directionalShadowMap.value=Y.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Qt.spotShadowMap.value=Y.state.spotShadowMap,Qt.spotLightMatrix.value=Y.state.spotLightMatrix,Qt.spotLightMap.value=Y.state.spotLightMap,Qt.pointShadowMap.value=Y.state.pointShadowMap,Qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=we,it.uniformsList=null,we}function fi(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=ho.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function Ji(P,k){let et=qt.get(P);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function Ai(P,k,et,it,Y){k.isScene!==!0&&(k=Fe),U.resetTextureUnits();let Ct=k.fog,W=it.isMeshStandardMaterial?k.environment:null,jt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Co,kt=(it.isMeshStandardMaterial?tt:A).get(it.envMap||W),me=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,we=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Qt=!!et.morphAttributes.position,Oe=!!et.morphAttributes.normal,tn=!!et.morphAttributes.color,rn=Qs;it.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(rn=M.toneMapping);let Un=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,We=Un!==void 0?Un.length:0,ne=qt.get(it),Cn=m.state.lights;if(Pt===!0&&(se===!0||P!==R)){let An=P===R&&it.id===L;Tt.setState(it,P,An)}let Ce=!1;it.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Cn.state.version||ne.outputColorSpace!==jt||Y.isBatchedMesh&&ne.batching===!1||!Y.isBatchedMesh&&ne.batching===!0||Y.isBatchedMesh&&ne.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ne.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ne.instancing===!1||!Y.isInstancedMesh&&ne.instancing===!0||Y.isSkinnedMesh&&ne.skinning===!1||!Y.isSkinnedMesh&&ne.skinning===!0||Y.isInstancedMesh&&ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ne.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ne.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ne.instancingMorph===!1&&Y.morphTexture!==null||ne.envMap!==kt||it.fog===!0&&ne.fog!==Ct||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Tt.numPlanes||ne.numIntersection!==Tt.numIntersection)||ne.vertexAlphas!==me||ne.vertexTangents!==we||ne.morphTargets!==Qt||ne.morphNormals!==Oe||ne.morphColors!==tn||ne.toneMapping!==rn||ne.morphTargetsCount!==We)&&(Ce=!0):(Ce=!0,ne.__version=it.version);let Wn=ne.currentProgram;Ce===!0&&(Wn=Kn(it,k,Y));let G=!1,en=!1,zn=!1,De=Wn.getUniforms(),jn=ne.uniforms;if(It.useProgram(Wn.program)&&(G=!0,en=!0,zn=!0),it.id!==L&&(L=it.id,en=!0),G||R!==P){It.buffers.depth.getReversed()?(Ft.copy(P.projectionMatrix),zp(Ft),Fp(Ft),De.setValue(O,"projectionMatrix",Ft)):De.setValue(O,"projectionMatrix",P.projectionMatrix),De.setValue(O,"viewMatrix",P.matrixWorldInverse);let Xn=De.map.cameraPosition;Xn!==void 0&&Xn.setValue(O,ce.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&De.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&De.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,en=!0,zn=!0)}if(Y.isSkinnedMesh){De.setOptional(O,Y,"bindMatrix"),De.setOptional(O,Y,"bindMatrixInverse");let An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),De.setValue(O,"boneTexture",An.boneTexture,U))}Y.isBatchedMesh&&(De.setOptional(O,Y,"batchingTexture"),De.setValue(O,"batchingTexture",Y._matricesTexture,U),De.setOptional(O,Y,"batchingIdTexture"),De.setValue(O,"batchingIdTexture",Y._indirectTexture,U),De.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(O,"batchingColorTexture",Y._colorsTexture,U));let ri=et.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&pe.update(Y,et,Wn),(en||ne.receiveShadow!==Y.receiveShadow)&&(ne.receiveShadow=Y.receiveShadow,De.setValue(O,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(jn.envMap.value=kt,jn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&k.environment!==null&&(jn.envMapIntensity.value=k.environmentIntensity),en&&(De.setValue(O,"toneMappingExposure",M.toneMappingExposure),ne.needsLights&&Nr(jn,zn),Ct&&it.fog===!0&&zt.refreshFogUniforms(jn,Ct),zt.refreshMaterialUniforms(jn,it,lt,Rt,m.state.transmissionRenderTarget[P.id]),ho.upload(O,fi(ne),jn,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ho.upload(O,fi(ne),jn,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&De.setValue(O,"center",Y.center),De.setValue(O,"modelViewMatrix",Y.modelViewMatrix),De.setValue(O,"normalMatrix",Y.normalMatrix),De.setValue(O,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let An=it.uniformsGroups;for(let Xn=0,ui=An.length;Xn<ui;Xn++){let Ki=An[Xn];$.update(Ki,Wn),$.bind(Ki,Wn)}}return Wn}function Nr(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function zr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,k,et){qt.get(P.texture).__webglTexture=k,qt.get(P.depthTexture).__webglTexture=et;let it=qt.get(P);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){let et=qt.get(P);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,et=0){B=P,z=k,V=et;let it=!0,Y=null,Ct=!1,W=!1;if(P){let kt=qt.get(P);if(kt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),it=!1;else if(kt.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(kt.__hasExternalTextures)U.rebindTextures(P,qt.get(P.texture).__webglTexture,qt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qt=P.depthTexture;if(kt.__boundDepthTexture!==Qt){if(Qt!==null&&qt.has(Qt)&&(P.width!==Qt.image.width||P.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let me=P.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(W=!0);let we=qt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(we[k])?Y=we[k][et]:Y=we[k],Ct=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?Y=qt.get(P).__webglMultisampledFramebuffer:Array.isArray(we)?Y=we[et]:Y=we,H.copy(P.viewport),st.copy(P.scissor),nt=P.scissorTest}else H.copy(Ot).multiplyScalar(lt).floor(),st.copy(ie).multiplyScalar(lt).floor(),nt=Ae;if(It.bindFramebuffer(O.FRAMEBUFFER,Y)&&it&&It.drawBuffers(P,Y),It.viewport(H),It.scissor(st),It.setScissorTest(nt),Ct){let kt=qt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,kt.__webglTexture,et)}else if(W){let kt=qt.get(P.texture),me=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,et||0,me)}L=-1},this.readRenderTargetPixels=function(P,k,et,it,Y,Ct,W){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=qt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&W!==void 0&&(jt=jt[W]),jt){It.bindFramebuffer(O.FRAMEBUFFER,jt);try{let kt=P.texture,me=kt.format,we=kt.type;if(!Nt.textureFormatReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-it&&et>=0&&et<=P.height-Y&&O.readPixels(k,et,it,Y,Kt.convert(me),Kt.convert(we),Ct)}finally{let kt=B!==null?qt.get(B).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,k,et,it,Y,Ct,W){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=qt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&W!==void 0&&(jt=jt[W]),jt){let kt=P.texture,me=kt.format,we=kt.type;if(!Nt.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-it&&et>=0&&et<=P.height-Y){It.bindFramebuffer(O.FRAMEBUFFER,jt);let Qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.bufferData(O.PIXEL_PACK_BUFFER,Ct.byteLength,O.STREAM_READ),O.readPixels(k,et,it,Y,Kt.convert(me),Kt.convert(we),0);let Oe=B!==null?qt.get(B).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,Oe);let tn=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Np(O,tn,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ct),O.deleteBuffer(Qt),O.deleteSync(tn),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,et=0){P.isTexture!==!0&&(Zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);let it=Math.pow(2,-et),Y=Math.floor(P.image.width*it),Ct=Math.floor(P.image.height*it),W=k!==null?k.x:0,jt=k!==null?k.y:0;U.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,et,0,0,W,jt,Y,Ct),It.unbindTexture()},this.copyTextureToTexture=function(P,k,et=null,it=null,Y=0){P.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,P=arguments[1],k=arguments[2],Y=arguments[3]||0,et=null);let Ct,W,jt,kt,me,we,Qt,Oe,tn,rn=P.isCompressedTexture?P.mipmaps[Y]:P.image;et!==null?(Ct=et.max.x-et.min.x,W=et.max.y-et.min.y,jt=et.isBox3?et.max.z-et.min.z:1,kt=et.min.x,me=et.min.y,we=et.isBox3?et.min.z:0):(Ct=rn.width,W=rn.height,jt=rn.depth||1,kt=0,me=0,we=0),it!==null?(Qt=it.x,Oe=it.y,tn=it.z):(Qt=0,Oe=0,tn=0);let Un=Kt.convert(k.format),We=Kt.convert(k.type),ne;k.isData3DTexture?(U.setTexture3D(k,0),ne=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),ne=O.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Cn=O.getParameter(O.UNPACK_ROW_LENGTH),Ce=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wn=O.getParameter(O.UNPACK_SKIP_PIXELS),G=O.getParameter(O.UNPACK_SKIP_ROWS),en=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,rn.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,me),O.pixelStorei(O.UNPACK_SKIP_IMAGES,we);let zn=P.isDataArrayTexture||P.isData3DTexture,De=k.isDataArrayTexture||k.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let jn=qt.get(P),ri=qt.get(k),An=qt.get(jn.__renderTarget),Xn=qt.get(ri.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let ui=0;ui<jt;ui++)zn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.get(P).__webglTexture,Y,we+ui),P.isDepthTexture?(De&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.get(k).__webglTexture,Y,tn+ui),O.blitFramebuffer(kt,me,Ct,W,Qt,Oe,Ct,W,O.DEPTH_BUFFER_BIT,O.NEAREST)):De?O.copyTexSubImage3D(ne,Y,Qt,Oe,tn+ui,kt,me,Ct,W):O.copyTexSubImage2D(ne,Y,Qt,Oe,tn+ui,kt,me,Ct,W);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else De?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(ne,Y,Qt,Oe,tn,Ct,W,jt,Un,We,rn.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(ne,Y,Qt,Oe,tn,Ct,W,jt,Un,rn.data):O.texSubImage3D(ne,Y,Qt,Oe,tn,Ct,W,jt,Un,We,rn):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,Qt,Oe,Ct,W,Un,We,rn.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,Qt,Oe,rn.width,rn.height,Un,rn.data):O.texSubImage2D(O.TEXTURE_2D,Y,Qt,Oe,Ct,W,Un,We,rn);O.pixelStorei(O.UNPACK_ROW_LENGTH,Cn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wn),O.pixelStorei(O.UNPACK_SKIP_ROWS,G),O.pixelStorei(O.UNPACK_SKIP_IMAGES,en),Y===0&&k.generateMipmaps&&O.generateMipmap(ne),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,et=null,it=null,Y=0){return P.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,it=arguments[1]||null,P=arguments[2],k=arguments[3],Y=arguments[4]||0),Zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,et,it,Y)},this.initRenderTarget=function(P){qt.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){z=0,V=0,B=null,It.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qe._getUnpackColorSpace()}};var vo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mi=new N,ra=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix4(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyNormalMatrix(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.transformDirection(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ps(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ps(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ps(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ps(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zn=class extends ks{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eo,Xo=new N,no=new N,io=new N,so=new At,qo=new At,md=new xn,$a=new N,Yo=new N,Za=new N,Du=new At,_c=new At,Uu=new At,ni=class extends ei{constructor(t=new Zn){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new yn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _l(e,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new ra(i,3,0,!1)),eo.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=eo,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),no.setFromMatrixScale(this.matrixWorld),md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&no.multiplyScalar(-io.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ja($a.set(-.5,-.5,0),io,o,no,s,r),Ja(Yo.set(.5,-.5,0),io,o,no,s,r),Ja(Za.set(.5,.5,0),io,o,no,s,r),Du.set(0,0),_c.set(1,0),Uu.set(1,1);let a=t.ray.intersectTriangle($a,Yo,Za,!1,Xo);if(a===null&&(Ja(Yo.set(-.5,.5,0),io,o,no,s,r),_c.set(0,1),a=t.ray.intersectTriangle($a,Za,Yo,!1,Xo),a===null))return;let l=t.ray.origin.distanceTo(Xo);l<t.near||l>t.far||e.push({distance:l,point:Xo.clone(),uv:Ks.getInterpolation(Xo,$a,Yo,Za,Du,_c,Uu,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ja(n,t,e,i,s,r){so.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(qo.x=r*so.x-s*so.y,qo.y=s*so.x+r*so.y):qo.copy(so),n.copy(t),n.x+=qo.x,n.y+=qo.y,n.applyMatrix4(md)}var bo=class extends ks{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nu=new xn,Rh=new na,Ka=new xo,ja=new N,oa=class extends ei{constructor(t=new yn,e=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,t.ray.intersectsSphere(Ka)===!1)return;Nu.copy(s).invert(),Rh.copy(t.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let v=p,T=d;v<T;v++){let y=h.getX(v);ja.fromBufferAttribute(u,y),zu(ja,y,l,s,t,e,this)}}else{let p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let v=p,T=d;v<T;v++)ja.fromBufferAttribute(u,v),zu(ja,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zu(n,t,e,i,s,r,o){let a=Rh.distanceSqToPoint(n);if(a<e){let l=new N;Rh.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mo=class extends wi{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let f=i[s],p=i[s+1]-f,d=(o-f)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new N,s=[],r=[],o=[],a=new N,l=new xn;for(let d=0;d<=t;d++){let v=d/t;s[d]=this.getTangentAt(v,new N)}r[0]=new N,o[0]=new N;let h=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);f<=h&&(h=f,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),p<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(ti(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,v))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ti(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},aa=class extends Xi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=h-this.aY;l=p*f-d*u+this.aX,h=p*u+d*f+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ch=class extends aa{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,f,u){let p=(o-r)/h-(a-r)/(h+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+u)+(l-a)/u;p*=f,d*=f,s(o,a,p,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Qa=new N,vc=new lf,bc=new lf,Mc=new lf,Ih=class extends Xi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,f;this.closed||a>0?h=s[(a-1)%r]:(Qa.subVectors(s[0],s[1]).add(s[0]),h=Qa);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Qa.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(h.distanceToSquared(u),d),T=Math.pow(u.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(f),d);T<1e-4&&(T=1),v<1e-4&&(v=T),y<1e-4&&(y=T),vc.initNonuniformCatmullRom(h.x,u.x,p.x,f.x,v,T,y),bc.initNonuniformCatmullRom(h.y,u.y,p.y,f.y,v,T,y),Mc.initNonuniformCatmullRom(h.z,u.z,p.z,f.z,v,T,y)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(h.x,u.x,p.x,f.x,this.tension),bc.initCatmullRom(h.y,u.y,p.y,f.y,this.tension),Mc.initCatmullRom(h.z,u.z,p.z,f.z,this.tension));return i.set(vc.calc(l),bc.calc(l),Mc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Py(n,t){let e=1-n;return e*e*t}function Ly(n,t){return 2*(1-n)*n*t}function Dy(n,t){return n*n*t}function jo(n,t,e,i){return Py(n,t)+Ly(n,e)+Dy(n,i)}function Uy(n,t){let e=1-n;return e*e*e*t}function Ny(n,t){let e=1-n;return 3*e*e*n*t}function zy(n,t){return 3*(1-n)*n*n*t}function Fy(n,t){return n*n*n*t}function Qo(n,t,e,i,s){return Uy(n,t)+Ny(n,e)+zy(n,i)+Fy(n,s)}var vl=class extends Xi{constructor(t=new At,e=new At,i=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new At){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qo(t,s.x,r.x,o.x,a.x),Qo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ph=class extends Xi{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qo(t,s.x,r.x,o.x,a.x),Qo(t,s.y,r.y,o.y,a.y),Qo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bl=class extends Xi{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lh=class extends Xi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends Xi{constructor(t=new At,e=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new At){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(jo(t,s.x,r.x,o.x),jo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dh=class extends Xi{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(jo(t,s.x,r.x,o.x),jo(t,s.y,r.y,o.y),jo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Fu(a,l.x,h.x,f.x,u.x),Fu(a,l.y,h.y,f.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Uh=Object.freeze({__proto__:null,ArcCurve:Ch,CatmullRomCurve3:Ih,CubicBezierCurve:vl,CubicBezierCurve3:Ph,EllipseCurve:aa,LineCurve:bl,LineCurve3:Lh,QuadraticBezierCurve:Ml,QuadraticBezierCurve3:Dh,SplineCurve:wl}),Nh=class extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let f=l[h];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Uh[s.type]().fromJSON(s))}return this}},Sl=class extends Nh{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new bl(this.currentPoint.clone(),new At(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ml(this.currentPoint.clone(),new At(t,e),new At(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new vl(this.currentPoint.clone(),new At(t,e),new At(i,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new wl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new aa(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tl=class n extends yn{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ti(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],f=1/e,u=new N,p=new At,d=new N,v=new N,T=new N,y=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:y=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-y,d.z=m*0,T.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(T.x,T.y,T.z);break;default:y=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-y,d.z=m*0,v.copy(d),d.x+=T.x,d.y+=T.y,d.z+=T.z,d.normalize(),l.push(d.x,d.y,d.z),T.copy(v)}for(let S=0;S<=e;S++){let C=i+S*f*s,M=Math.sin(C),q=Math.cos(C);for(let z=0;z<=t.length-1;z++){u.x=t[z].x*M,u.y=t[z].y,u.z=t[z].x*q,o.push(u.x,u.y,u.z),p.x=S/e,p.y=z/(t.length-1),a.push(p.x,p.y);let V=l[3*z+0]*M,B=l[3*z+1],L=l[3*z+0]*q;h.push(V,B,L)}}for(let S=0;S<e;S++)for(let C=0;C<t.length-1;C++){let M=C+S*t.length,q=M,z=M+t.length,V=M+t.length+1,B=M+1;r.push(q,z,B),r.push(V,B,z)}this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Vn=class n extends yn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new N,f=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),o.push(h.x,h.y,h.z),a.push(0,0,1),f.x=(o[p]/t+1)/2,f.y=(o[p+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},yi=class n extends yn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],p=[],d=[],v=0,T=[],y=i/2,m=0;S(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(p,3)),this.setAttribute("uv",new Ie(d,2));function S(){let M=new N,q=new N,z=0,V=(e-t)/i;for(let B=0;B<=r;B++){let L=[],R=B/r,H=R*(e-t)+t;for(let st=0;st<=s;st++){let nt=st/s,ot=nt*l+a,Mt=Math.sin(ot),rt=Math.cos(ot);q.x=H*Mt,q.y=-R*i+y,q.z=H*rt,u.push(q.x,q.y,q.z),M.set(Mt,V,rt).normalize(),p.push(M.x,M.y,M.z),d.push(nt,1-R),L.push(v++)}T.push(L)}for(let B=0;B<s;B++)for(let L=0;L<r;L++){let R=T[L][B],H=T[L+1][B],st=T[L+1][B+1],nt=T[L][B+1];(t>0||L!==0)&&(f.push(R,H,nt),z+=3),(e>0||L!==r-1)&&(f.push(H,st,nt),z+=3)}h.addGroup(m,z,0),m+=z}function C(M){let q=v,z=new At,V=new N,B=0,L=M===!0?t:e,R=M===!0?1:-1;for(let st=1;st<=s;st++)u.push(0,y*R,0),p.push(0,R,0),d.push(.5,.5),v++;let H=v;for(let st=0;st<=s;st++){let ot=st/s*l+a,Mt=Math.cos(ot),rt=Math.sin(ot);V.x=L*rt,V.y=y*R,V.z=L*Mt,u.push(V.x,V.y,V.z),p.push(0,R,0),z.x=Mt*.5+.5,z.y=rt*.5*R+.5,d.push(z.x,z.y),v++}for(let st=0;st<s;st++){let nt=q+st,ot=H+st;M===!0?f.push(ot,ot+1,nt):f.push(ot+1,ot,nt),B+=3}h.addGroup(m,B,M===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Jn=class n extends yi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zh=class n extends yn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),f(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let C=new N,M=new N,q=new N;for(let z=0;z<e.length;z+=3)d(e[z+0],C),d(e[z+1],M),d(e[z+2],q),l(C,M,q,S)}function l(S,C,M,q){let z=q+1,V=[];for(let B=0;B<=z;B++){V[B]=[];let L=S.clone().lerp(M,B/z),R=C.clone().lerp(M,B/z),H=z-B;for(let st=0;st<=H;st++)st===0&&B===z?V[B][st]=L:V[B][st]=L.clone().lerp(R,st/H)}for(let B=0;B<z;B++)for(let L=0;L<2*(z-B)-1;L++){let R=Math.floor(L/2);L%2===0?(p(V[B][R+1]),p(V[B+1][R]),p(V[B][R])):(p(V[B][R+1]),p(V[B+1][R+1]),p(V[B+1][R]))}}function h(S){let C=new N;for(let M=0;M<r.length;M+=3)C.x=r[M+0],C.y=r[M+1],C.z=r[M+2],C.normalize().multiplyScalar(S),r[M+0]=C.x,r[M+1]=C.y,r[M+2]=C.z}function f(){let S=new N;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let M=y(S)/2/Math.PI+.5,q=m(S)/Math.PI+.5;o.push(M,1-q)}v(),u()}function u(){for(let S=0;S<o.length;S+=6){let C=o[S+0],M=o[S+2],q=o[S+4],z=Math.max(C,M,q),V=Math.min(C,M,q);z>.9&&V<.1&&(C<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),q<.2&&(o[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function d(S,C){let M=S*3;C.x=t[M+0],C.y=t[M+1],C.z=t[M+2]}function v(){let S=new N,C=new N,M=new N,q=new N,z=new At,V=new At,B=new At;for(let L=0,R=0;L<r.length;L+=9,R+=6){S.set(r[L+0],r[L+1],r[L+2]),C.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),z.set(o[R+0],o[R+1]),V.set(o[R+2],o[R+3]),B.set(o[R+4],o[R+5]),q.copy(S).add(C).add(M).divideScalar(3);let H=y(q);T(z,R+0,S,H),T(V,R+2,C,H),T(B,R+4,M,H)}}function T(S,C,M,q){q<0&&S.x===1&&(o[C]=S.x-1),M.x===0&&M.z===0&&(o[C]=q/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var sr=class extends Sl{constructor(t){super(t),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Sl().fromJSON(s))}return this}},Oy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=gd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,f,u,p,d;if(i&&(r=Gy(n,t,r,e)),n.length>80*e){a=h=n[0],l=f=n[1];for(let v=e;v<s;v+=e)u=n[v],p=n[v+1],u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p);d=Math.max(h-a,f-l),d=d!==0?32767/d:0}return la(r,o,e,a,l,d,0),o}};function gd(n,t,e,i,s){let r,o;if(s===t_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Ou(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ou(r,n[r],n[r+1],o);return o&&Dl(o,o.next)&&(ha(o),o=o.next),o}function Er(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Dl(e,e.next)||Rn(e.prev,e,e.next)===0)){if(ha(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function la(n,t,e,i,s,r,o){if(!n)return;!o&&r&&$y(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?By(n,i,s,r):ky(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),ha(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Vy(Er(n),t,e),la(n,t,e,i,s,r,2)):o===2&&Hy(n,t,e,i,s,r):la(Er(n),t,e,i,s,r,1);break}}}function ky(n){let t=n.prev,e=n,i=n.next;if(Rn(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,f=s<r?s<o?s:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,p=s>r?s>o?s:o:r>o?r:o,d=a>l?a>h?a:h:l>h?l:h,v=i.next;for(;v!==t;){if(v.x>=f&&v.x<=p&&v.y>=u&&v.y<=d&&oo(s,a,r,l,o,h,v.x,v.y)&&Rn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function By(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Rn(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,f=s.y,u=r.y,p=o.y,d=a<l?a<h?a:h:l<h?l:h,v=f<u?f<p?f:p:u<p?u:p,T=a>l?a>h?a:h:l>h?l:h,y=f>u?f>p?f:p:u>p?u:p,m=Fh(d,v,t,e,i),S=Fh(T,y,t,e,i),C=n.prevZ,M=n.nextZ;for(;C&&C.z>=m&&M&&M.z<=S;){if(C.x>=d&&C.x<=T&&C.y>=v&&C.y<=y&&C!==s&&C!==o&&oo(a,f,l,u,h,p,C.x,C.y)&&Rn(C.prev,C,C.next)>=0||(C=C.prevZ,M.x>=d&&M.x<=T&&M.y>=v&&M.y<=y&&M!==s&&M!==o&&oo(a,f,l,u,h,p,M.x,M.y)&&Rn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;C&&C.z>=m;){if(C.x>=d&&C.x<=T&&C.y>=v&&C.y<=y&&C!==s&&C!==o&&oo(a,f,l,u,h,p,C.x,C.y)&&Rn(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=T&&M.y>=v&&M.y<=y&&M!==s&&M!==o&&oo(a,f,l,u,h,p,M.x,M.y)&&Rn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Dl(s,r)&&xd(s,i,i.next,r)&&ca(s,r)&&ca(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ha(i),ha(i.next),i=n=r),i=i.next}while(i!==n);return Er(i)}function Hy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ky(o,a)){let l=yd(o,a);o=Er(o,o.next),l=Er(l,l.next),la(o,t,e,i,s,r,0),la(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Gy(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=gd(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Jy(h));for(s.sort(Wy),r=0;r<s.length;r++)e=Xy(s[r],e);return e}function Wy(n,t){return n.x-t.x}function Xy(n,t){let e=qy(n,t);if(!e)return t;let i=yd(e,n);return Er(i,i.next),Er(e,e.next)}function qy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,f=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&oo(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ca(e,n)&&(u<f||u===f&&(e.x>s.x||e.x===s.x&&Yy(s,e)))&&(s=e,f=u)),e=e.next;while(e!==a);return s}function Yy(n,t){return Rn(n.prev,n,t.prev)<0&&Rn(t.next,n,n.next)<0}function $y(n,t,e,i){let s=n;do s.z===0&&(s.z=Fh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zy(s)}function Zy(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Fh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Jy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function oo(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ky(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!jy(n,t)&&(ca(n,t)&&ca(t,n)&&Qy(n,t)&&(Rn(n.prev,n,t.prev)||Rn(n,t.prev,t))||Dl(n,t)&&Rn(n.prev,n,n.next)>0&&Rn(t.prev,t,t.next)>0)}function Rn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Dl(n,t){return n.x===t.x&&n.y===t.y}function xd(n,t,e,i){let s=el(Rn(n,t,e)),r=el(Rn(n,t,i)),o=el(Rn(e,i,n)),a=el(Rn(e,i,t));return!!(s!==r&&o!==a||s===0&&tl(n,e,t)||r===0&&tl(n,i,t)||o===0&&tl(e,n,i)||a===0&&tl(e,t,i))}function tl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function el(n){return n>0?1:n<0?-1:0}function jy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&xd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ca(n,t){return Rn(n.prev,n,n.next)<0?Rn(n,t,n.next)>=0&&Rn(n,n.prev,t)>=0:Rn(n,t,n.prev)<0||Rn(n,n.next,t)<0}function Qy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function yd(n,t){let e=new Oh(n.i,n.x,n.y),i=new Oh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ou(n,t,e,i){let s=new Oh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var tr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ku(t),Bu(i,t);let o=t.length;e.forEach(ku);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Bu(i,e[l]);let a=Oy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ku(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var fa=class n extends yn{constructor(t=new sr([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:e_,C,M=!1,q,z,V,B;m&&(C=m.getSpacedPoints(f),M=!0,p=!1,q=m.computeFrenetFrames(f,!1),z=new N,V=new N,B=new N),p||(y=0,d=0,v=0,T=0);let L=a.extractPoints(h),R=L.shape,H=L.holes;if(!tr.isClockWise(R)){R=R.reverse();for(let wt=0,Dt=H.length;wt<Dt;wt++){let O=H[wt];tr.isClockWise(O)&&(H[wt]=O.reverse())}}let nt=tr.triangulateShape(R,H),ot=R;for(let wt=0,Dt=H.length;wt<Dt;wt++){let O=H[wt];R=R.concat(O)}function Mt(wt,Dt,O){return Dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),wt.clone().addScaledVector(Dt,O)}let rt=R.length,Rt=nt.length;function lt(wt,Dt,O){let re,_t,Nt,It=wt.x-Dt.x,be=wt.y-Dt.y,qt=O.x-wt.x,U=O.y-wt.y,A=It*It+be*be,tt=It*U-be*qt;if(Math.abs(tt)>Number.EPSILON){let mt=Math.sqrt(A),dt=Math.sqrt(qt*qt+U*U),gt=Dt.x-be/mt,Vt=Dt.y+It/mt,zt=O.x-U/dt,Wt=O.y+qt/dt,Pe=((zt-gt)*U-(Wt-Vt)*qt)/(It*U-be*qt);re=gt+It*Pe-wt.x,_t=Vt+be*Pe-wt.y;let Tt=re*re+_t*_t;if(Tt<=2)return new At(re,_t);Nt=Math.sqrt(Tt/2)}else{let mt=!1;It>Number.EPSILON?qt>Number.EPSILON&&(mt=!0):It<-Number.EPSILON?qt<-Number.EPSILON&&(mt=!0):Math.sign(be)===Math.sign(U)&&(mt=!0),mt?(re=-be,_t=It,Nt=Math.sqrt(A)):(re=It,_t=be,Nt=Math.sqrt(A/2))}return new At(re/Nt,_t/Nt)}let Ut=[];for(let wt=0,Dt=ot.length,O=Dt-1,re=wt+1;wt<Dt;wt++,O++,re++)O===Dt&&(O=0),re===Dt&&(re=0),Ut[wt]=lt(ot[wt],ot[O],ot[re]);let $t=[],Ot,ie=Ut.concat();for(let wt=0,Dt=H.length;wt<Dt;wt++){let O=H[wt];Ot=[];for(let re=0,_t=O.length,Nt=_t-1,It=re+1;re<_t;re++,Nt++,It++)Nt===_t&&(Nt=0),It===_t&&(It=0),Ot[re]=lt(O[re],O[Nt],O[It]);$t.push(Ot),ie=ie.concat(Ot)}for(let wt=0;wt<y;wt++){let Dt=wt/y,O=d*Math.cos(Dt*Math.PI/2),re=v*Math.sin(Dt*Math.PI/2)+T;for(let _t=0,Nt=ot.length;_t<Nt;_t++){let It=Mt(ot[_t],Ut[_t],re);Ft(It.x,It.y,-O)}for(let _t=0,Nt=H.length;_t<Nt;_t++){let It=H[_t];Ot=$t[_t];for(let be=0,qt=It.length;be<qt;be++){let U=Mt(It[be],Ot[be],re);Ft(U.x,U.y,-O)}}}let Ae=v+T;for(let wt=0;wt<rt;wt++){let Dt=p?Mt(R[wt],ie[wt],Ae):R[wt];M?(V.copy(q.normals[0]).multiplyScalar(Dt.x),z.copy(q.binormals[0]).multiplyScalar(Dt.y),B.copy(C[0]).add(V).add(z),Ft(B.x,B.y,B.z)):Ft(Dt.x,Dt.y,0)}for(let wt=1;wt<=f;wt++)for(let Dt=0;Dt<rt;Dt++){let O=p?Mt(R[Dt],ie[Dt],Ae):R[Dt];M?(V.copy(q.normals[wt]).multiplyScalar(O.x),z.copy(q.binormals[wt]).multiplyScalar(O.y),B.copy(C[wt]).add(V).add(z),Ft(B.x,B.y,B.z)):Ft(O.x,O.y,u/f*wt)}for(let wt=y-1;wt>=0;wt--){let Dt=wt/y,O=d*Math.cos(Dt*Math.PI/2),re=v*Math.sin(Dt*Math.PI/2)+T;for(let _t=0,Nt=ot.length;_t<Nt;_t++){let It=Mt(ot[_t],Ut[_t],re);Ft(It.x,It.y,u+O)}for(let _t=0,Nt=H.length;_t<Nt;_t++){let It=H[_t];Ot=$t[_t];for(let be=0,qt=It.length;be<qt;be++){let U=Mt(It[be],Ot[be],re);M?Ft(U.x,U.y+C[f-1].y,C[f-1].x+O):Ft(U.x,U.y,u+O)}}}yt(),Pt();function yt(){let wt=s.length/3;if(p){let Dt=0,O=rt*Dt;for(let re=0;re<Rt;re++){let _t=nt[re];fe(_t[2]+O,_t[1]+O,_t[0]+O)}Dt=f+y*2,O=rt*Dt;for(let re=0;re<Rt;re++){let _t=nt[re];fe(_t[0]+O,_t[1]+O,_t[2]+O)}}else{for(let Dt=0;Dt<Rt;Dt++){let O=nt[Dt];fe(O[2],O[1],O[0])}for(let Dt=0;Dt<Rt;Dt++){let O=nt[Dt];fe(O[0]+rt*f,O[1]+rt*f,O[2]+rt*f)}}i.addGroup(wt,s.length/3-wt,0)}function Pt(){let wt=s.length/3,Dt=0;se(ot,Dt),Dt+=ot.length;for(let O=0,re=H.length;O<re;O++){let _t=H[O];se(_t,Dt),Dt+=_t.length}i.addGroup(wt,s.length/3-wt,1)}function se(wt,Dt){let O=wt.length;for(;--O>=0;){let re=O,_t=O-1;_t<0&&(_t=wt.length-1);for(let Nt=0,It=f+y*2;Nt<It;Nt++){let be=rt*Nt,qt=rt*(Nt+1),U=Dt+re+be,A=Dt+_t+be,tt=Dt+_t+qt,mt=Dt+re+qt;ce(U,A,tt,mt)}}}function Ft(wt,Dt,O){l.push(wt),l.push(Dt),l.push(O)}function fe(wt,Dt,O){oe(wt),oe(Dt),oe(O);let re=s.length/3,_t=S.generateTopUV(i,s,re-3,re-2,re-1);Fe(_t[0]),Fe(_t[1]),Fe(_t[2])}function ce(wt,Dt,O,re){oe(wt),oe(Dt),oe(re),oe(Dt),oe(O),oe(re);let _t=s.length/3,Nt=S.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);Fe(Nt[0]),Fe(Nt[1]),Fe(Nt[3]),Fe(Nt[1]),Fe(Nt[2]),Fe(Nt[3])}function oe(wt){s.push(l[wt*3+0]),s.push(l[wt*3+1]),s.push(l[wt*3+2])}function Fe(wt){r.push(wt.x),r.push(wt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return n_(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Uh[s.type]().fromJSON(s)),new n(i,t.options)}},e_={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],f=t[s*3+1];return[new At(r,o),new At(a,l),new At(h,f)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],f=t[i*3+1],u=t[i*3+2],p=t[s*3],d=t[s*3+1],v=t[s*3+2],T=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(a-f)<Math.abs(o-h)?[new At(o,1-l),new At(h,1-u),new At(p,1-v),new At(T,1-m)]:[new At(a,1-l),new At(f,1-u),new At(d,1-v),new At(y,1-m)]}};function n_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _s=class n extends zh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var El=class n extends yn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],f=[],u=t,p=(e-t)/s,d=new N,v=new At;for(let T=0;T<=s;T++){for(let y=0;y<=i;y++){let m=r+y/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,f.push(v.x,v.y)}u+=p}for(let T=0;T<s;T++){let y=T*(i+1);for(let m=0;m<i;m++){let S=m+y,C=S,M=S+i+1,q=S+i+2,z=S+1;a.push(C,M,z),a.push(M,q,z)}}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wo=class n extends yn{constructor(t=new sr([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let f=0;f<t.length;f++)h(t[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(o,2));function h(f){let u=s.length/3,p=f.extractPoints(e),d=p.shape,v=p.holes;tr.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,m=v.length;y<m;y++){let S=v[y];tr.isClockWise(S)===!0&&(v[y]=S.reverse())}let T=tr.triangulateShape(d,v);for(let y=0,m=v.length;y<m;y++){let S=v[y];d=d.concat(S)}for(let y=0,m=d.length;y<m;y++){let S=d[y];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let y=0,m=T.length;y<m;y++){let S=T[y],C=S[0]+u,M=S[1]+u,q=S[2]+u;i.push(C,M,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return i_(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function i_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ii=class n extends yn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,f=[],u=new N,p=new N,d=[],v=[],T=[],y=[];for(let m=0;m<=i;m++){let S=[],C=m/i,M=0;m===0&&o===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let q=0;q<=e;q++){let z=q/e;u.x=-t*Math.cos(s+z*r)*Math.sin(o+C*a),u.y=t*Math.cos(o+C*a),u.z=t*Math.sin(s+z*r)*Math.sin(o+C*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),T.push(p.x,p.y,p.z),y.push(z+M,1-C),S.push(h++)}f.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let C=f[m][S+1],M=f[m][S],q=f[m+1][S],z=f[m+1][S+1];(m!==0||o>0)&&d.push(C,M,z),(m!==i-1||l<Math.PI)&&d.push(M,q,z)}this.setIndex(d),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(T,3)),this.setAttribute("uv",new Ie(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Si=class n extends yn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],f=new N,u=new N,p=new N;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){let T=v/s*r,y=d/i*Math.PI*2;u.x=(t+e*Math.cos(y))*Math.cos(T),u.y=(t+e*Math.cos(y))*Math.sin(T),u.z=e*Math.sin(y),a.push(u.x,u.y,u.z),f.x=t*Math.cos(T),f.y=t*Math.sin(T),p.subVectors(u,f).normalize(),l.push(p.x,p.y,p.z),h.push(v/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){let T=(s+1)*d+v-1,y=(s+1)*(d-1)+v-1,m=(s+1)*(d-1)+v,S=(s+1)*d+v;o.push(T,y,S),o.push(y,m,S)}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var nn=class extends ks{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function nl(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function s_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var So=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kh=class extends So{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Of,endingEnd:Of}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kf:r=t,a=2*e-i;break;case Bf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kf:o=t,l=2*i-e;break;case Bf:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,f=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,f=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,v=(i-e)/(s-e),T=v*v,y=T*v,m=-p*y+2*p*T-p*v,S=(1+p)*y+(-1.5-2*p)*T+(-.5+p)*v+1,C=(-1-d)*y+(1.5+d)*T+.5*v,M=d*y-d*T;for(let q=0;q!==a;++q)r[q]=m*o[f+q]+S*o[h+q]+C*o[l+q]+M*o[u+q];return r}},Bh=class extends So{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,f=(i-e)/(s-e),u=1-f;for(let p=0;p!==a;++p)r[p]=o[h+p]*u+o[l+p]*f;return r}},Vh=class extends So{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rs=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nl(e,this.TimeBufferType),this.values=nl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:nl(t.times,Array),values:nl(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ll:e=this.InterpolantFactoryMethodDiscrete;break;case ch:e=this.InterpolantFactoryMethodLinear;break;case Wl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return ch;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&s_(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],f=t[a+1];if(h!==f&&(a!==1||h!==t[0]))if(s)l=!0;else{let u=a*i,p=u-i,d=u+i;for(let v=0;v!==i;++v){let T=e[u+v];if(T!==e[p+v]||T!==e[d+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,p=o*i;for(let d=0;d!==i;++d)e[p+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rs.prototype.TimeBufferType=Float32Array;rs.prototype.ValueBufferType=Float32Array;rs.prototype.DefaultInterpolation=ch;var Ar=class extends rs{constructor(t,e,i){super(t,e,i)}};Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=ll;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Hh=class extends rs{};Hh.prototype.ValueTypeName="color";var Gh=class extends rs{};Gh.prototype.ValueTypeName="number";var Wh=class extends So{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let f=h+a;h!==f;h+=4)ir.slerpFlat(r,0,o,h-a,o,h,l);return r}},Al=class extends rs{InterpolantFactoryMethodLinear(t){return new Wh(this.times,this.values,this.getValueSize(),t)}};Al.prototype.ValueTypeName="quaternion";Al.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends rs{constructor(t,e,i){super(t,e,i)}};Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=ll;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xh=class extends rs{};Xh.prototype.ValueTypeName="vector";var Vu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},qh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return h.push(f,u),this},this.removeHandler=function(f){let u=h.indexOf(f);return u!==-1&&h.splice(u,2),this},this.getHandler=function(f){for(let u=0,p=h.length;u<p;u+=2){let d=h[u],v=h[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null}}},r_=new qh,ua=class{constructor(t){this.manager=t!==void 0?t:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yh=class extends ua{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Vu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ea("img");function l(){f(),Vu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){f(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var To=class extends ua{constructor(t){super(t)}load(t,e,i,s){let r=new wi,o=new Yh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Eo=class extends ei{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Cr=class extends Eo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wc=new xn,Hu=new N,Gu=new N,Rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wu=new xn,$o=new N,Sc=new N,$h=class extends Rl{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new pn(2,1,1,1),new pn(0,1,1,1),new pn(3,1,1,1),new pn(1,1,1,1),new pn(3,0,1,1),new pn(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),$o.setFromMatrixPosition(t.matrixWorld),i.position.copy($o),Sc.copy(i.position),Sc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Sc),i.updateMatrixWorld(),s.makeTranslation(-$o.x,-$o.y,-$o.z),Wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}},Ao=class extends Eo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zh=class extends Rl{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Cl=class extends Eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cf="\\[\\]\\.:\\/",o_=new RegExp("["+cf+"]","g"),hf="[^"+cf+"]",a_="[^"+cf.replace("\\.","")+"]",l_=/((?:WC+[\/:])*)/.source.replace("WC",hf),c_=/(WCOD+)?/.source.replace("WCOD",a_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),f_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),u_=new RegExp("^"+l_+c_+h_+f_+"$"),d_=["material","materials","bones","map"],Jh=class{constructor(t,e,i){let s=i||Tn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Tn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(t){let e=u_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tn.Composite=Jh;Tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tn.prototype.GetterByBindingType=[Tn.prototype._getValue_direct,Tn.prototype._getValue_array,Tn.prototype._getValue_arrayElement,Tn.prototype._getValue_toArray];Tn.prototype.SetterByBindingTypeAndVersioning=[[Tn.prototype._setValue_direct,Tn.prototype._setValue_direct_setNeedsUpdate,Tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tn.prototype._setValue_array,Tn.prototype._setValue_array_setNeedsUpdate,Tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tn.prototype._setValue_arrayElement,Tn.prototype._setValue_arrayElement_setNeedsUpdate,Tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tn.prototype._setValue_fromArray,Tn.prototype._setValue_fromArray_setNeedsUpdate,Tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var Xu=new xn,Ro=class{constructor(t,e,i=0,s=1/0){this.ray=new na(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(t,e=!0,i=[]){return Kh(t,this,i,e),i.sort(qu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Kh(t[s],this,i,e);return i.sort(qu),i}};function qu(n,t){return n.distance-t.distance}function Kh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Kh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Pr={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},Po=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function vd(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new yn,h=0;for(let f=0;f<n.length;++f){let u=n[f],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,f),h+=d}}if(e){let f=0,u=[];for(let p=0;p<n.length;++p){let d=n[p].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+f);f+=n[p].attributes.position.count}l.setIndex(u)}for(let f in r){let u=_d(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,u)}for(let f in o){let u=o[f][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let p=0;p<u;++p){let d=[];for(let T=0;T<o[f].length;++T)d.push(o[f][T][p]);let v=_d(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(v)}}return l}function _d(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let f=n[h];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new xi(o,e,i),l=0;for(let h=0;h<n.length;++h){let f=n[h];if(f.isInterleavedBufferAttribute){let u=l/e;for(let p=0,d=f.count;p<d;p++)for(let v=0;v<e;v++){let T=f.getComponent(p,v);a.setComponent(p+u,v,T)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var Pn="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",bd={},Gt=(n,t)=>t?new nn(Object.assign({color:n},t)):bd[n]||(bd[n]=new nn({color:n})),sn=(n,t)=>new Ve(Object.assign({color:n},t)),Md={},p_=n=>Md[n]||(Md[n]=new nn({color:n,flatShading:!0}));function xe(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Mo(i);return s.colorSpace=Fn,s.anisotropy=4,s}function rr(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Dr=xe(128,128,n=>{let t=n.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)});function at(n,t,e,i,s,r,o,a,l){let h=new ct(new ln(t,e,i),typeof s=="string"?Gt(s):s);return h.position.set(r,o,a),l&&(h.rotation.y=l),n.add(h),h}function ee(n,t,e,i,s,r,o,a,l){let h=new ct(new yi(t,e,i,l||16),typeof s=="string"?Gt(s):s);return h.position.set(r,o,a),n.add(h),h}function Se(n,t,e,i,s,r,o,a,l,h){let f=new ct(new ii(t,h||16,h?h*.7|0:12),typeof e=="string"?Gt(e):e);return f.position.set(i,s,r),f.scale.set(o||1,a||1,l||1),n.add(f),f}function qi(n,t,e,i,s,r,o){let a=new ct(new _s(t,1),p_(e));return a.position.set(i,s,r),o&&a.scale.set(o[0],o[1],o[2]),n.add(a),a}function or(n,t,e,i,s,r,o){let a=new ni(new Zn({map:Dr,blending:gs,transparent:!0,depthWrite:!1,opacity:r}));return o&&a.material.color.set(o),a.scale.set(s,s,1),a.position.set(t,e,i),n.add(a),n.userData.glows=(n.userData.glows||[]).concat(a),a}function Lo(n,t,e,i,s,r,o,a,l){let h=new ct(new Ge(t,e),new Ve({map:i,transparent:!0,side:l?In:void 0,alphaTest:.05}));return h.position.set(s,r,o),a&&(h.rotation.y=a),n.add(h),h}function pa(n,t,e,i,s,r,o){let a=new ct(new Tl(t.map(l=>new At(l[0],l[1])),o||20),typeof e=="string"?Gt(e):e);return a.position.set(i,s,r),n.add(a),a}var Vs="#a8703f",li="#6b3f1f",Do="#d4a56a",si="#3a2214",m_="#d23a28",g_="#f3e2bd",wd={};function uf(n,t,e,i,s,r){let o=n+t+e+i+s;return wd[o]||(wd[o]=xe(i,s,a=>{a.fillStyle=t,a.fillRect(0,0,i,s),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle";let l=[...n];a.font=`900 ${r}px ${Pn}`,s>i?l.forEach((h,f)=>a.fillText(h,i/2,s/(l.length+1)*(f+1))):a.fillText(n,i/2,s/2+2,i-10)}))}var Td=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],ma=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.78,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.36,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.05,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],Ed=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];ma.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.42,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.55,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.76,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var Sd={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};ma.forEach(n=>{!n.hc&&Sd[n.k]&&(n.hc=Sd[n.k])});var Ee={};ma.forEach(n=>{n.L=n.L||"main",n.solid===void 0&&(n.solid=n.L==="main"?1:0),Ee[n.k]=n});var df=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],pf=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],te={};te.table=n=>{at(n,1.9,.08,.9,Vs,0,.74,0),at(n,1.84,.03,.84,Do,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])at(n,.08,.72,.08,li,t,.36,e);at(n,1.6,.06,.04,li,0,.55,-.36),at(n,1.6,.06,.04,li,0,.55,.36)};te.chabu=n=>{ee(n,.46,.46,.06,Vs,0,.34,0,28),ee(n,.44,.44,.02,Do,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;at(n,.07,.32,.07,li,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};te.counter=n=>{at(n,1.96,1,.8,li,0,.5,0),at(n,2.04,.08,.96,Do,0,1.03,.04),at(n,1.9,.12,.04,Vs,0,.14,.41);for(let t=-2;t<=2;t++)at(n,.04,.8,.02,"#5a3216",t*.38,.52,.405)};te.chair=n=>{at(n,.48,.06,.48,Vs,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])at(n,.05,.46,.05,li,t,.23,e);at(n,.48,.5,.05,Vs,0,.74,-.2),at(n,.4,.06,.03,Do,0,.86,-.18)};te.stool=n=>{ee(n,.22,.2,.07,"#c23a2a",0,.76,0,18),ee(n,.03,.03,.72,"#3a3a40",0,.38,0,8),ee(n,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new ct(new Si(.13,.015,6,18),Gt("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,n.add(t)};te.zabu=n=>{let t=at(n,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new ln(.62,.1,.62,2,1,2),Se(n,.05,"#e9c34a",0,.12,0)};te.bench=n=>{at(n,1.9,.07,.42,Vs,0,.44,0);for(let t of[-.8,.8])at(n,.07,.42,.36,li,t,.21,0);at(n,1.6,.05,.04,li,0,.2,0)};te.register=n=>{at(n,.9,.95,.7,li,0,.475,0),at(n,.96,.06,.78,Do,0,.98,0),at(n,.5,.22,.36,"#2b2b33",0,1.12,-.05),at(n,.42,.1,.3,"#3c3c46",0,1.26,-.12),at(n,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=sn("#9fe0b6"),Se(n,.07,"#e9b830",.3,1.06,.2),Se(n,.05,"#e9b830",.22,1.04,.26)};te.lantern=n=>{ee(n,.025,.025,1.7,si,0,.85,0,6),at(n,.5,.04,.04,si,.2,1.68,0),ee(n,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new _e;t.position.set(.38,1.3,0),n.add(t);let e=Se(t,.22,sn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,ee(t,.14,.14,.06,si,0,.3,0,12),ee(t,.14,.14,.06,si,0,-.3,0,12),Lo(t,.2,.34,uf("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),ee(t,.01,.01,.2,si,0,.42,0,4),or(t,0,0,.1,1.8,.55),n.userData.swing=t};te.andon=n=>{for(let e of[-.17,.17])for(let i of[-.17,.17])at(n,.04,.9,.04,si,e,.45,i);let t=at(n,.32,.5,.32,sn("#fff1c8"),0,.55,0);t.userData.lit=1,at(n,.4,.04,.4,si,0,.82,0),at(n,.4,.04,.4,si,0,.29,0);for(let e of[-.06,.06])at(n,.005,.48,.33,si,e,.55,0);or(n,0,.55,0,2.2,.6)};te.stonel=n=>{let t="#9a9590";at(n,.5,.12,.5,t,0,.06,0),ee(n,.1,.13,.5,t,0,.37,0,8),at(n,.42,.1,.42,t,0,.66,0);let e=at(n,.3,.28,.3,sn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])at(n,.06,.3,.06,t,s[0],.85,s[1]);let i=new ct(new Jn(.45,.3,4),Gt(t));i.rotation.y=Math.PI/4,i.position.y=1.14,n.add(i),Se(n,.07,t,0,1.33,0),or(n,0,.85,0,1.6,.55)};te.chochin=n=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let i=0;i<5;i++){let s=-.8+i*.4,r=2.25-Math.sin(i/4*Math.PI)*.25,o=Se(n,.12,sn(t[i]),s,r,.18,1,1.25,1,12);o.userData.lit=1,or(n,s,r,.26,.8,.35)}let e=[];for(let i=0;i<=8;i++){let s=i/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let i=0;i<8;i++){let[s,r]=e[i],[o,a]=e[i+1],l=at(n,Math.hypot(o-s,a-r),.015,.015,si,(s+o)/2,(r+a)/2,.18);l.rotation.z=Math.atan2(a-r,o-s)}};te.tanuki=n=>{let t="#8a6a4a",e="#e8d8b8";Se(n,.3,t,0,.38,0,1,1.05,.95),Se(n,.2,e,0,.36,.16,1,1.1,.5),Se(n,.22,t,0,.82,.02);for(let r of[-.13,.13])Se(n,.06,t,r,1,0),Se(n,.055,si,r*.7,.85,.19,1,.8,.5),Se(n,.02,"#fff",r*.7+.01,.86,.21);Se(n,.045,si,0,.78,.22),at(n,.34,.06,.3,"#5a4a3a",0,1.03,0),ee(n,.16,.2,.04,"#5a4a3a",0,1,0,14);let i=ee(n,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);i.rotation.z=-.3;let s=at(n,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Se(n,.15,t,-.2,.12,.12,1,.6,1),Se(n,.15,t,.2,.12,.12,1,.6,1),Se(n,.12,t,.1,.25,-.3,1,.7,1.4)};te.barrel=n=>{pa(n,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new ct(new Si(.34,.025,6,22),Gt("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,n.add(e)}Lo(n,.36,.36,uf("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),ee(n,.3,.3,.02,Do,0,.91,0,22)};te.crates=n=>{let t=(e,i,s)=>{let r=new _e;r.position.y=e,r.rotation.y=i,n.add(r),at(r,.6,.32,.44,s,0,.16,0);for(let o=0;o<3;o++)for(let a=0;a<2;a++)ee(r,.06,.06,.36,"#7a4a1a",-.18+o*.18,.3,-.1+a*.2,8),ee(r,.025,.03,.1,"#f2e6c8",-.18+o*.18,.52,-.1+a*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};te.byobu=n=>{let t=xe(256,128,(e,i,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,i,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*i,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let i=new _e;i.position.set(-.72+e*.48,0,e%2?.08:-.08),i.rotation.y=e%2?.3:-.3,n.add(i),at(i,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new ct(new Ge(.42,1.4),new Ve({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),i.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,i.add(r)}};te.shelf=n=>{at(n,1.9,1.8,.42,li,0,.9,-.1),at(n,1.8,1.7,.02,"#2a1408",0,.9,.09);for(let i of[.35,.8,1.25,1.65])at(n,1.8,.04,.4,Vs,0,i,-.08);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let i of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],o=.26+e%3*.04;ee(n,.055,.065,o,r,-.72+s*.29,i+o/2,-.06,10),ee(n,.02,.03,.09,r,-.72+s*.29,i+o+.04,-.06,6),e%2&&at(n,.1,.08,.01,g_,-.72+s*.29,i+o*.5,0)}};te.hibachi=n=>{pa(n,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),ee(n,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let i=qi(n,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);i.material=sn("#ff7a2a"),i.userData.lit=1}ee(n,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=ee(n,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,or(n,0,.55,0,1.4,.6,"#ff8a3a")};te.tank=n=>{at(n,.7,.55,.5,li,0,.275,0);let t=at(n,.68,.5,.48,Gt("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,at(n,.62,.4,.42,sn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,at(n,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let i=new _e;i.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),n.add(i),Se(i,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new ct(new Jn(.04,.07,6),Gt("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,i.add(s),n.userData.fish=(n.userData.fish||[]).concat(i)}qi(n,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),qi(n,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};te.jukebox=n=>{at(n,.7,.7,.5,li,0,.35,0),at(n,.74,.05,.54,Vs,0,.72,0),ee(n,.24,.24,.02,"#141414",-.05,.76,.02,28),ee(n,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=at(n,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new ct(new Jn(.22,.4,18,1,!0),Gt("#d8a83a",{side:In}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),n.add(e),ee(n,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),at(n,.5,.3,.02,"#2a1408",0,.35,.26),n.userData.spin=n.children[2]};te.pine=n=>{ee(n,.2,.16,.14,"#3a5a8a",0,.07,0,6),ee(n,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=ee(n,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,qi(n,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),qi(n,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),qi(n,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};te.bamboo=n=>{ee(n,.22,.18,.32,"#e8e0d0",0,.16,0,18),ee(n,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,i=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;ee(n,.025,.025,s,"#6a9a3a",e,.3+s/2,i,8);for(let r=1;r<4;r++)ee(n,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,i,8);for(let r=0;r<3;r++){let o=new ct(new Ge(.32,.06),new nn({color:"#5a9a3a",side:In}));o.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),i+.12*Math.sin(r*2+t)),o.rotation.set(-.3,r*2+t,-.4),n.add(o)}}};te.sakura=n=>{ee(n,.26,.22,.36,"#2a3a5a",0,.18,0,8),ee(n,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=ee(n,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=ee(n,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let i=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,o,a],l)=>qi(n,a,i[l%3],s,r,o,[1,.75,1])),n.userData.petals=1};te.ajisai=n=>{ee(n,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)qi(n,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let i=e*1.25;qi(n,.12,t[e%4],Math.cos(i)*.12,.5+e%2*.08,Math.sin(i)*.12)}};te.scroll=n=>{let t=xe(96,256,(e,i,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,i,s),e.fillStyle="#c8b890",e.fillRect(0,0,i,30),e.fillRect(0,s-30,i,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${Pn}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,o)=>e.fillText(r,i/2,76+o*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});at(n,.5,.04,.04,si,0,2.25,.04),at(n,.5,.04,.04,si,0,1.02,.04),Lo(n,.42,1.2,t,0,1.63,.03)};te.menu=n=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let i=uf(t[e],"#e9d3a4","#2a1408",64,256,36);at(n,.22,.82,.03,li,-.7+e*.28,1.75,.015),Lo(n,.18,.76,i,-.7+e*.28,1.75,.035)}at(n,1.8,.06,.05,si,0,2.2,.03)};te.clock=n=>{let t=xe(128,128,o=>{o.fillStyle="#f8f0dc",o.beginPath(),o.arc(64,64,60,0,7),o.fill(),o.fillStyle="#2a1408",o.font=`700 18px ${Pn}`,o.textAlign="center",o.textBaseline="middle";for(let a=1;a<=12;a++){let l=a/12*Math.PI*2-Math.PI/2;o.fillText(String(a),64+Math.cos(l)*46,64+Math.sin(l)*46)}});at(n,.5,.7,.1,li,0,1.95,.05),ee(n,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=Lo(n,.4,.4,t,0,2.05,.105),i=at(n,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=at(n,.01,.17,.01,"#1a1a1a",0,2.1,.115);n.userData.hands=[i,s],n.userData.handY=2.05;let r=new _e;r.position.set(0,1.75,.07),n.add(r),at(r,.01,.2,.01,"#c8a040",0,-.1,0),n.userData.swing=r};te.mado=n=>{let t=xe(256,256,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1a1a40"),a.addColorStop(1,"#5a3a6a"),s.fillStyle=a,s.fillRect(0,0,r,o),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*o*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new ct(new Vn(.62,32),new Ve({map:t}));e.position.set(0,1.6,.03),n.add(e);let i=new ct(new Si(.64,.06,8,32),Gt(li));i.position.set(0,1.6,.04),n.add(i);for(let s of[-.2,.2])at(n,.02,1.2,.02,si,s,1.6,.05);at(n,1.2,.02,.02,si,0,1.6,.05),or(n,0,1.6,.15,1.6,.25,"#b8c8ff")};te.fuji=n=>{let t=xe(256,160,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,i,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,i,20)});at(n,1.6,1,.05,"#2a1408",0,1.7,.025),Lo(n,1.5,.9,t,0,1.7,.055)};te.maneki=n=>{let t="#f8f4ec";Se(n,.12,t,0,.13,0,1,1.1,.9),Se(n,.1,t,0,.32,.01);for(let i of[-.06,.06]){let s=new ct(new Jn(.035,.06,4),Gt(t));s.position.set(i,.42,0),n.add(s),Se(n,.012,"#1a1a1a",i*.6,.34,.09)}Se(n,.02,"#f08a9a",0,.31,.1),at(n,.16,.025,.05,m_,0,.23,.06),Se(n,.02,"#e9b830",0,.21,.1);let e=new _e;e.position.set(.09,.3,.02),n.add(e),Se(e,.035,t,0,.07,0,1,1.6,1),n.userData.wave=e,Se(n,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};te.daruma=n=>{Se(n,.14,"#d23a28",0,.15,0,1,1.1,1),Se(n,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Se(n,.016,"#1a1a1a",t,.2,.125);at(n,.08,.012,.01,"#1a1a1a",0,.155,.13)};te.beer=n=>{ee(n,.07,.065,.2,Gt("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),ee(n,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new ct(new Si(.05,.012,6,12,Math.PI),Gt("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,n.add(t)};te.sake=n=>{at(n,.34,.02,.2,li,0,.01,0),pa(n,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])ee(n,.03,.025,.04,"#f0ece0",t,.04,0,10)};te.yakitori=n=>{ee(n,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new _e;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,n.add(e),at(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let i=0;i<4;i++)qi(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+i*.05,.005,0,[1.1,.9,1])}};te.sushi=n=>{at(n,.34,.03,.16,Vs,0,.03,0);for(let t=0;t<4;t++)at(n,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),at(n,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};te.ramen=n=>{pa(n,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),ee(n,.12,.12,.01,"#d89a4a",0,.09,0,20),Se(n,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),at(n,.05,.01,.04,"#8a4a2a",.04,.1,-.02),at(n,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=at(n,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};te.edamame=n=>{ee(n,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)qi(n,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};te.vase=n=>{pa(n,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),ee(n,.006,.006,.25,"#4a7a3a",0,.36,0,4),Se(n,.035,"#f0e0e8",0,.5,0),Se(n,.03,"#e898b0",.02,.48,.02)};te.tatami=n=>{let t=xe(256,256,(i,s,r)=>{i.fillStyle="#c8c47a",i.fillRect(0,0,s,r);for(let o=0;o<r;o+=3)i.fillStyle=o%6?"#bcb86e":"#d2ce86",i.fillRect(0,o,s,1);i.fillStyle="#2a3a2a",i.fillRect(0,0,s,10),i.fillRect(0,r-10,s,10),i.fillRect(0,124,s,8)}),e=new ct(new ln(1.96,.04,1.96),[Gt("#2a3a2a"),Gt("#2a3a2a"),new nn({map:t}),Gt("#2a3a2a"),Gt("#2a3a2a"),Gt("#2a3a2a")]);e.position.y=.02,n.add(e)};te.rug=n=>{let t=xe(256,256,(i,s,r)=>{i.fillStyle="#23315c",i.fillRect(0,0,s,r),i.strokeStyle="#e8e0d0",i.lineWidth=3;for(let o=0;o<5;o++)for(let a=0;a<5;a++){let l=26+o*51,h=26+a*51;i.beginPath();for(let f=0;f<3;f++)i.arc(l,h,8+f*7,Math.PI,0);i.stroke()}i.strokeStyle="#c8a040",i.lineWidth=6,i.strokeRect(6,6,s-12,r-12)}),e=new ct(new Vn(.96,40),new nn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,n.add(e)};te.step=n=>{qi(n,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function x_(n){let t=new Set,e=n.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),n.updateMatrixWorld(!0);let i=new Map;n.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;i.has(r)||i.set(r,[]),i.get(r).push(s)});for(let s of i.values())if(!(s.length<2))try{let r=s.map(l=>{let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let f of Object.keys(h.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&h.deleteAttribute(f);return h.attributes.uv?(h.applyMatrix4(l.matrixWorld),h):null});if(r.some(l=>!l))continue;let o=vd(r,!1);if(!o)continue;let a=new ct(o,s[0].material);n.add(a),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var y_="#6fa8d6",ff="#4f86b8",Bs="#f6f2ea",Lr="#d9b07a";te.sofa=n=>{at(n,1.9,.42,.82,ff,0,.21,0);for(let t of[-.46,.46])at(n,.9,.16,.7,y_,t,.5,.06);at(n,1.9,.55,.2,ff,0,.72,-.32);for(let t of[-.88,.88])at(n,.18,.58,.82,ff,t,.45,0);Se(n,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),Se(n,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};te.armchair=n=>{at(n,.8,.4,.78,"#e07a5f",0,.2,0),at(n,.62,.14,.64,"#ee9a7a",0,.48,.05),at(n,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])at(n,.14,.52,.78,"#e07a5f",t,.45,0)};te.ctable=n=>{at(n,1.6,.06,.7,Lr,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])ee(n,.03,.03,.38,"#8a6a4a",t,.19,e,8);at(n,1.5,.03,.6,"#c89a62",0,.15,0)};te.tv=n=>{at(n,1.8,.5,.48,Bs,0,.25,-.1);for(let e of[-.45,.45])at(n,.8,.38,.02,"#e8e0d0",e,.25,.15);at(n,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=at(n,1.2,.68,.02,sn("#4a8ad8"),0,.98,-.085);t.userData.lit=1,n.userData.tvs=t,at(n,.3,.08,.2,"#2a2a2e",0,.54,-.12)};te.books=n=>{at(n,1.9,1.9,.4,Lr,0,.95,-.1),at(n,1.8,1.8,.02,"#a07850",0,.95,.09);for(let i of[.05,.5,.95,1.4])at(n,1.8,.04,.38,"#c8a070",0,i+.02,-.08);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let i of[.07,.52,.97]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,o=.3+e*7%5*.025;at(n,r,o,.26,t[e%7],s+r/2,i+o/2,-.06),s+=r+.01,e++}}Se(n,.12,"#3f8f4f",.6,1.6,-.05)};te.flamp=n=>{ee(n,.2,.22,.04,"#3a3a3e",0,.02,0,18),ee(n,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=ee(n,.16,.26,.32,sn("#fff0c8"),0,1.6,0,18);t.userData.lit=1,or(n,0,1.55,0,2.4,.55)};te.piano=n=>{at(n,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),at(n,1.6,.06,.7,"#1e1a1a",0,.72,.05),at(n,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)at(n,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])at(n,.1,.7,.1,"#1e1a1a",t,.35,.3);at(n,.5,.05,.3,"#1e1a1a",0,.45,.6),at(n,.5,.04,.3,"#8a3a2a",0,.48,.6)};te.bed=n=>{at(n,1.9,.3,1.95,Lr,0,.25,0),at(n,1.9,.9,.1,Lr,0,.55,-.95),at(n,1.8,.2,1.85,Bs,0,.5,.02),at(n,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])Se(n,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])at(n,.08,.12,.08,"#8a6a4a",t,.06,e)};te.wardrobe=n=>{at(n,1.8,2,.6,Bs,0,1,-.15),at(n,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])ee(n,.02,.02,.3,"#c8a040",t,1.05,.18,6);at(n,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};te.nstand=n=>{at(n,.5,.5,.45,Lr,0,.27,0),at(n,.46,.02,.02,"#8a6a4a",0,.35,.23),Se(n,.025,"#c8a040",0,.25,.24)};te.desk=n=>{at(n,1.6,.05,.65,Lr,0,.74,0);for(let t of[-.74,.74])at(n,.06,.72,.6,"#e8e0d0",t,.36,0);at(n,.45,.3,.55,"#e8e0d0",.45,.55,0)};te.kcounter=n=>{at(n,1.9,.86,.62,Bs,0,.43,-.1),at(n,1.96,.06,.7,"#9aa0a8",0,.89,-.08),at(n,.6,.04,.4,"#6a7078",-.4,.91,-.08),ee(n,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])at(n,.5,.6,.02,"#ece6da",e,.43,.22);let t=ee(n,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};te.stove=n=>{at(n,.8,.86,.62,"#e8e4dc",0,.43,-.1),at(n,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new ct(new Si(.1,.02,6,16),Gt("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),n.add(e)}at(n,.7,.4,.02,"#2a2a2e",0,.45,.22),ee(n,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};te.fridge=n=>{at(n,.78,1.85,.7,"#eaf2f8",0,.93,-.08),at(n,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])at(n,.03,.25,.04,"#a8b0b8",.3,t,.3);at(n,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};te.catbed=n=>{let t=new ct(new Si(.32,.12,8,20),Gt("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,n.add(t),ee(n,.3,.3,.08,"#f2d8b0",0,.05,0,18),Se(n,.18,"#e8a050",.02,.2,0,1.4,.7,1),Se(n,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let i=new ct(new Jn(.04,.07,4),Gt("#e8a050"));i.position.set(.22,.36,e),n.add(i)}};te.monstera=n=>{ee(n,.24,.18,.4,"#f2efe6",0,.2,0,14),ee(n,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,i=new ct(new Vn(.28,10),new nn({color:t%2?"#2f7a3a":"#3f8f4a",side:In}));i.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),i.rotation.set(-1+Math.random()*.4,e,0),n.add(i),ee(n,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};te.cactus=n=>{ee(n,.09,.07,.12,"#c8704a",0,.06,0,12),ee(n,.06,.06,.22,"#4a9a4a",0,.22,0,10),Se(n,.06,"#4a9a4a",0,.33,0);let t=ee(n,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,Se(n,.025,"#f29ab8",0,.39,0)};te.wwin=n=>{let t=at(n,1.5,1.1,.03,sn("#bfe6ff"),0,1.65,.02);n.userData.pane=t,at(n,1.62,.08,.08,Bs,0,2.24,.04),at(n,1.62,.08,.08,Bs,0,1.06,.04),at(n,.06,1.15,.06,Bs,0,1.65,.05),at(n,1.62,.1,.2,Bs,0,1.03,.1),at(n,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let i=at(n,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);i.geometry=new ln(.38,1.4,.05,4,1,1)}};te.photos=n=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,i,s,r],o)=>{at(n,s+.08,r+.08,.03,o%2?"#3a2a1a":Bs,e,i,.015),at(n,s,r,.01,sn(t[o]),e,i,.035),Se(n,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][o],e-s*.15,i-r*.1,.04,1,1,.2)})};te.shelfw=n=>{at(n,1.7,.05,.25,Lr,0,1.6,.12);for(let t of[-.7,.7])at(n,.04,.15,.2,"#8a6a4a",t,1.52,.1);ee(n,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),Se(n,.09,"#4a9a4a",-.5,1.82,.12),at(n,.3,.22,.16,"#2f6bb8",0,1.74,.12),Se(n,.08,"#f2b630",.45,1.7,.12)};te.book=n=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let i=at(n,.22,.045,.16,t[e],0,.025+e*.047,0);i.rotation.y=e*.25}};te.mug=n=>{ee(n,.05,.045,.1,"#f6f2ea",0,.05,0,14),ee(n,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new ct(new Si(.03,.01,6,10),Gt("#f6f2ea"));t.position.set(.06,.05,0),n.add(t)};te.cake=n=>{ee(n,.14,.14,.02,"#f6f2ea",0,.01,0,20),ee(n,.1,.1,.1,"#fff8f0",0,.07,0,20),ee(n,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)Se(n,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};te.laptop=n=>{at(n,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new _e;t.position.set(0,.015,-.11),t.rotation.x=-.35,n.add(t),at(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=at(t,.29,.17,.002,sn("#8ac0f0"),0,.1,.007);e.userData.lit=1};te.dlamp=n=>{ee(n,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=ee(n,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=ee(n,.04,.09,.1,sn("#fff0c8"),0,.33,0,12);e.userData.lit=1,or(n,0,.3,0,1.2,.5)};te.teddy=n=>{let t="#b8814a";Se(n,.1,t,0,.1,0,1,1.1,.9),Se(n,.08,t,0,.24,0);for(let e of[-.06,.06])Se(n,.03,t,e,.31,0),Se(n,.012,"#1a1a1a",e*.5,.26,.07),Se(n,.035,t,e*1.3,.1,.06);Se(n,.03,"#e8d0b0",0,.225,.07)};te.carpet=n=>{let t=xe(256,256,(i,s,r)=>{i.fillStyle="#f2e6d0",i.fillRect(0,0,s,r);let o=__(3);for(let a=0;a<1600;a++)i.fillStyle=o()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",i.fillRect(o()*s,o()*r,3,3);i.strokeStyle="#e8a0b0",i.lineWidth=10,i.strokeRect(14,14,s-28,r-28)}),e=new ct(new ln(1.9,.04,1.9),[Gt("#e8d8c0"),Gt("#e8d8c0"),new nn({map:t}),Gt("#e8d8c0"),Gt("#e8d8c0"),Gt("#e8d8c0")]);e.position.y=.02,n.add(e)};var __=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function mf(n){let t=new _e,e=te[n];return e?e(t):at(t,.8,.8,.8,"#f0f",0,.4,0),x_(t),t.traverse(i=>{i.isMesh&&(i.userData.item=t)}),t}var ar=(n,t)=>n+Math.random()*(t-n),Ti=(n,t,e)=>Math.max(t,Math.min(e,n)),ga=(n,t,e)=>n+(t-n)*e,lr=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),cr=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Yi={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},v_={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},xf=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),os=46,ki=34,vs=7,b_=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],xa=2,gf=8.5,M_=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],ya=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],w_=`
.i3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.i3info{position:absolute;left:max(12px,env(safe-area-inset-left));top:92px;background:#ffffffe6;color:#3a2a1a;border:3px solid #3a2a1a;border-radius:16px;padding:6px 14px;font-size:15px;line-height:1.35;z-index:3;pointer-events:none;box-shadow:0 4px 0 #0003}
.i3info b{font-size:19px;display:block}
.i3pan{position:absolute;left:0;right:0;bottom:0;background:#fff8eaf2;border-top:4px solid #3a2a1a;z-index:5;padding:6px max(10px,env(safe-area-inset-right)) 10px max(10px,env(safe-area-inset-left));display:none;color:#3a2a1a}
.i3pan.on{display:block}
.i3row{display:flex;gap:8px;overflow-x:auto;padding:4px 2px 2px;scrollbar-width:thin}
.i3opt{flex:none;min-width:76px;min-height:64px;border:3px solid #3a2a1a;border-radius:14px;background:#fff;color:#3a2a1a;font-weight:800;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:4px 8px}
.i3opt i{display:block;width:30px;height:22px;border-radius:7px;border:2px solid #0003}
.i3opt.on{background:#ffd27a;outline:3px solid #ff9a2a}
.i3door{position:absolute;transform:translate(-50%,-100%);z-index:4;border:3px solid #3a2a1a;border-radius:999px;background:#fff8ea;color:#3a2a1a;font-weight:900;font-size:17px;min-height:50px;padding:0 18px;box-shadow:0 4px 0 #0004;display:none;white-space:nowrap;animation:i3bob 1.2s ease-in-out infinite}
.i3door.on{display:block}.i3door.off{background:#e8e2d4;color:#7a6a5a}
.i3door:after{content:'';position:absolute;left:50%;bottom:-11px;margin-left:-8px;border:8px solid transparent;border-top-color:#3a2a1a}
@keyframes i3bob{0%,100%{margin-top:0}50%{margin-top:-6px}}
@media (max-height:520px){.i3door{font-size:15px;min-height:46px;padding:0 14px}.i3hud{top:64px;gap:8px}.i3info{top:64px;font-size:12px;padding:4px 10px}.i3info b{font-size:15px}.i3opt{min-width:64px;min-height:50px;font-size:11.5px;border-width:2px}.i3opt i{width:24px;height:16px}}
`;function Ad(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.data||{};if(r.ex=Object.assign(xf(),r.ex||{}),!document.getElementById("i3css")){let x=document.createElement("style");x.id="i3css",x.textContent=w_,document.head.appendChild(x)}if(!document.getElementById("h3css")&&n.css){let x=document.createElement("style");x.id="h3css",x.textContent=n.css,document.head.appendChild(x)}let o=Math.min(screen.width,screen.height)<600,a=new _o({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});a.shadowMap.enabled=!0,a.shadowMap.type=jh;let l=new Tr,h=new vo(12576511,60,170);l.fog=h;let f=new On(38,2,.3,600),u=new To,p=(x,w)=>u.load(x,E=>{E.colorSpace=Fn,w&&w(E)}),d={},v=(x,w)=>w?new nn(Object.assign({color:x},w)):d[x]||(d[x]=new nn({color:x})),T=(x,w)=>new Ve(Object.assign({color:x},w||{})),y=(x,w,E)=>{let F=x.clone();return F.wrapS=F.wrapT=zs,F.repeat.set(w,E),F.needsUpdate=!0,F},m=[];function S(x,w,E,F,K,ft,vt,St,Lt){let pt=new ct(new ln(x,w,E),typeof F=="string"?v(F):F);return pt.position.set(K,ft,vt),(St||l).add(pt),Lt!==!1&&(pt.castShadow=!0),pt.receiveShadow=!0,pt}function C(x,w,E,F,K,ft,vt,St,Lt){let pt=new ct(new yi(x,w,E,Lt||14),typeof F=="string"?v(F):F);return pt.position.set(K,ft,vt),(St||l).add(pt),pt.castShadow=!0,pt.receiveShadow=!0,pt}function M(x,w,E,F,K,ft,vt,St,Lt,pt){let He=new ct(pt?new _s(x,1):new ii(x,16,12),typeof w=="string"?pt?v(w,{flatShading:!0}):v(w):w);return He.position.set(E,F,K),vt&&He.scale.set(vt,St,Lt),(ft||l).add(He),He.castShadow=!0,He}let q=[];function z(x,w,E,F,K,ft){let vt=new ni(new Zn({map:Dr,blending:gs,transparent:!0,depthWrite:!1,opacity:0}));return ft&&vt.material.color.set(ft),vt.scale.set(F,F,1),vt.position.set(x,w,E),(K||l).add(vt),q.push(vt),vt}let V=[];function B(x,w){let E=new Ve({color:x});return E.userData.day=new Me(x),E.userData.night=new Me(w||"#ffd98a"),V.push(E),E}let L=new ii(300,24,16),R=new Float32Array(L.attributes.position.count*3);L.setAttribute("color",new Ie(R,3));let H=new ct(L,new Ve({vertexColors:!0,side:$n,fog:!1,depthWrite:!1}));H.renderOrder=-10,l.add(H);let st=new yn;{let x=[],w=cr(9);for(let E=0;E<400;E++){let F=w()*Math.PI*2,K=.15+w()*1.3;x.push(Math.cos(F)*Math.cos(K)*280,Math.sin(K)*280,Math.sin(F)*Math.cos(K)*280)}st.setAttribute("position",new Ie(x,3))}let nt=xe(128,128,x=>{let w=x.createRadialGradient(64,64,10,64,64,64);w.addColorStop(0,"rgba(255,255,240,1)"),w.addColorStop(.35,"rgba(255,240,200,.9)"),w.addColorStop(.4,"rgba(255,230,180,.3)"),w.addColorStop(1,"rgba(255,230,180,0)"),x.fillStyle=w,x.fillRect(0,0,128,128)}),ot=new ni(new Zn({map:nt,fog:!1,depthWrite:!1,transparent:!0}));ot.scale.set(50,50,1),H.add(ot);let Mt=xe(128,128,x=>{let w=x.createRadialGradient(64,64,18,64,64,64);w.addColorStop(0,"rgba(255,248,220,1)"),w.addColorStop(.42,"rgba(255,244,210,1)"),w.addColorStop(.46,"rgba(255,240,200,.25)"),w.addColorStop(1,"rgba(255,240,200,0)"),x.fillStyle=w,x.fillRect(0,0,128,128)}),rt=new ni(new Zn({map:Mt,fog:!1,depthWrite:!1,transparent:!0}));rt.scale.set(36,36,1),H.add(rt);let Rt=new _e;H.add(Rt);{let x=xe(16,16,F=>{F.fillStyle="#fff8e0",F.beginPath(),F.arc(8,8,3,0,7),F.fill()}),w=st.attributes.position,E=new Zn({map:x,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let F=0;F<w.count;F+=2){let K=new ni(E);K.position.set(w.getX(F),w.getY(F),w.getZ(F)),K.scale.set(1.4,1.4,1),Rt.add(K)}Rt.userData.m=E}let lt=new _e;l.add(lt);{let x=cr(4);for(let w=0;w<14;w++){let E=new _e,F=3+(x()*3|0);for(let vt=0;vt<F;vt++){let St=new ct(new _s(3+x()*3,1),new nn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));St.position.set(vt*4-F*2,x()*1.5,x()*2),St.scale.y=.6,E.add(St)}let K=x()*Math.PI*2,ft=110+x()*60;E.position.set(Math.cos(K)*ft,40+x()*25,Math.sin(K)*ft),E.userData.a=K,E.userData.R=ft,lt.add(E)}}let Ut=new Cr(14676735,8036442,1.4);l.add(Ut);let $t=new Cl(16777215,.25);l.add($t);let Ot=new Ir(16773852,2.2);Ot.castShadow=!0;let ie=o?1024:2048;Ot.shadow.mapSize.set(ie,ie),Object.assign(Ot.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),Ot.shadow.bias=-8e-4,Ot.shadow.normalBias=.03,l.add(Ot),l.add(Ot.target);let Ae=xe(256,256,(x,w,E)=>{x.fillStyle="#3fb7d8",x.fillRect(0,0,w,E);let F=cr(2);for(let K=0;K<90;K++){x.strokeStyle=`rgba(255,255,255,${.12+F()*.25})`,x.lineWidth=2+F()*2;let ft=F()*w,vt=F()*E,St=10+F()*24;x.beginPath(),x.moveTo(ft,vt),x.quadraticCurveTo(ft+St/2,vt-4,ft+St,vt),x.stroke()}});Ae.wrapS=Ae.wrapT=zs,Ae.repeat.set(40,40);let yt=new nn({map:Ae,color:"#ffffff"}),Pt=new ct(new Ge(900,900),yt);Pt.rotation.x=-Math.PI/2,Pt.position.y=-.45,Pt.receiveShadow=!0,l.add(Pt);function se(x,w,E){let F=new sr;return F.moveTo(-x+E,-w),F.lineTo(x-E,-w),F.quadraticCurveTo(x,-w,x,-w+E),F.lineTo(x,w-E),F.quadraticCurveTo(x,w,x-E,w),F.lineTo(-x+E,w),F.quadraticCurveTo(-x,w,-x,w-E),F.lineTo(-x,-w+E),F.quadraticCurveTo(-x,-w,-x+E,-w),F}let Ft=xe(128,128,(x,w,E)=>{x.fillStyle="#f3dfa8",x.fillRect(0,0,w,E);let F=cr(7);for(let K=0;K<300;K++)x.fillStyle=F()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",x.fillRect(F()*w,F()*E,2,2)});{let x=new fa(se(os+vs,ki+vs,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});x.rotateX(Math.PI/2);let w=new ct(x,new nn({map:y(Ft,.4,.4)}));w.position.y=-.83,w.receiveShadow=!0,l.add(w);let E=new ct(new wo(se(os+vs+3.4,ki+vs+3.4,18),12),new Ve({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=-.38,l.add(E)}let fe=xe(256,256,(x,w,E)=>{x.fillStyle="#7ccb5a",x.fillRect(0,0,w,E);let F=cr(5);for(let K=0;K<900;K++){x.fillStyle=F()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ft=F()*w,vt=F()*E;x.fillRect(ft,vt,2,5)}});{let x=new wo(se(os,27,12),10);x.rotateX(-Math.PI/2),x.translate(0,0,-7);let w=x.attributes.uv;for(let F=0;F<w.count;F++)w.setXY(F,w.getX(F)/8,w.getY(F)/8);let E=new ct(x,new nn({map:y(fe,1,1)}));E.position.y=.02,E.receiveShadow=!0,l.add(E)}let ce=xe(128,128,(x,w,E)=>{x.fillStyle="#d9d4cc",x.fillRect(0,0,w,E);let F=cr(8);for(let K=0;K<4;K++)for(let ft=0;ft<4;ft++){let vt=(F()*14|0)-7;x.fillStyle=`rgb(${206+vt},${200+vt},${190+vt})`,x.fillRect(ft*32+1,K*32+1,30,30)}}),oe=v("#f4f1ea");for(let[x,w,E,F]of b_){let K=Math.hypot(E-x,F-w)+xa*2,ft=(x+E)/2,vt=(w+F)/2,St=w===F,Lt=new ct(new Ge(St?K:xa*2,St?xa*2:K),new nn({map:y(ce,(St?K:4)/2,(St?4:K)/2)}));Lt.rotation.x=-Math.PI/2,Lt.position.set(ft,.04,vt),Lt.receiveShadow=!0,l.add(Lt);for(let pt of[-1,1]){let He=new ct(new ln(St?K:.25,.12,St?.25:K),oe);He.position.set(ft+(St?0:pt*(xa+.1)),.06,vt+(St?pt*(xa+.1):0)),He.receiveShadow=!0,l.add(He)}}let Fe=xe(512,512,(x,w,E)=>{x.fillStyle="#e9b98a",x.fillRect(0,0,w,E),x.translate(256,256);for(let F=250;F>40;F-=26)x.strokeStyle=F%52?"#f4d2a6":"#d99a6a",x.lineWidth=10,x.beginPath(),x.arc(0,0,F,0,7),x.stroke();for(let F=0;F<16;F++)x.rotate(Math.PI/8),x.strokeStyle="#f7e2c0",x.lineWidth=4,x.beginPath(),x.moveTo(50,0),x.lineTo(250,0),x.stroke()});{let x=new ct(new Vn(gf,48),new nn({map:Fe}));x.rotation.x=-Math.PI/2,x.position.y=.06,x.receiveShadow=!0,l.add(x);let w=new ct(new El(gf,gf+.35,48),oe);w.rotation.x=-Math.PI/2,w.position.y=.08,l.add(w)}let wt=[];{let x=new _e;l.add(x);let w=v("#f4f1ea");C(3.4,3.6,.7,w,0,.35,0,x,32);let E=xe(128,128,(vt,St,Lt)=>{vt.fillStyle="#5ec8e8",vt.fillRect(0,0,St,Lt),vt.strokeStyle="rgba(255,255,255,.5)",vt.lineWidth=3;for(let pt=0;pt<8;pt++)vt.beginPath(),vt.arc(64,64,8+pt*8,0,7),vt.stroke()}),F=new ct(new Vn(3.05,32),new Ve({map:E}));F.rotation.x=-Math.PI/2,F.position.y=.72,x.add(F),wt.push(F),C(.5,.7,1.4,w,0,1.3,0,x,16),C(1.4,1.2,.25,w,0,2.05,0,x,24),C(.25,.35,.9,w,0,2.6,0,x,12),C(.7,.6,.18,w,0,3.1,0,x,20);let K=new Ve({color:"#c8f0ff",transparent:!0,opacity:.75}),ft=new ct(new yi(.12,.2,1.2,10,1,!0),K);ft.position.y=3.7,x.add(ft),wt.push(ft);for(let vt=0;vt<8;vt++){let St=vt/8*Math.PI*2,Lt=new ct(new Si(.9,.06,6,12,Math.PI*.6),K);Lt.position.set(Math.cos(St)*.9,2.2,Math.sin(St)*.9),Lt.rotation.set(0,-St,Math.PI*.2),x.add(Lt)}for(let vt=0;vt<6;vt++){let St=vt/6*Math.PI*2+.26;Dt(Math.cos(St)*6.6,Math.sin(St)*6.6,St)}}function Dt(x,w,E){let F=new _e;F.position.set(x,0,w),F.rotation.y=-E,l.add(F),S(1.6,.45,1,"#c8704a",0,.22,0,F),S(1.45,.1,.85,"#5a3a24",0,.45,0,F,!1);let K=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ft=0;ft<8;ft++)M(.13,K[ft%5],-.55+ft%4*.36,.62,-.2+Math.floor(ft/4)*.4,F),M(.1,"#4a9a3a",-.55+ft%4*.36,.52,-.2+Math.floor(ft/4)*.4,F)}function O(x){return xe(128,128,(w,E,F)=>{w.fillStyle=x,w.fillRect(0,0,E,F);for(let K=0;K<F;K+=16)w.fillStyle="rgba(0,0,0,.08)",w.fillRect(0,K,E,2),w.fillStyle="rgba(255,255,255,.08)",w.fillRect(0,K+2,E,2)})}function re(x){return xe(512,128,(w,E,F)=>{w.fillStyle="#fff8ea",w.strokeStyle="#3a2a1a",w.lineWidth=10,rr(w,6,6,E-12,F-12,24),w.fill(),w.stroke(),w.fillStyle="#3a2a1a",w.textAlign="center",w.textBaseline="middle";let K=64;for(w.font=`900 ${K}px ${Pn}`;w.measureText(x).width>E-60&&K>20;)K-=2,w.font=`900 ${K}px ${Pn}`;w.fillText(x,E/2,F/2+3)})}let _t=5.4,Nt=4.2,It=3;function be(x,w){let E=new _e,F=x.wall,K=new nn({map:O(F)}),ft=-.6;S(_t+.3,.35,Nt+.3,"#e8e2d4",0,.17,ft,E);let vt=S(_t,It,Nt,K,0,.35+It/2,ft,E);for(let ut of[-1,1])S(.22,It,.22,"#f4efe2",ut*_t/2,.35+It/2,ft+Nt/2,E);S(_t+.1,.18,.18,"#f4efe2",0,.35+It,ft+Nt/2+.02,E);let St=v(x.roofC),Lt=.35+It;if(x.roof==="flat")S(_t+.6,.35,Nt+.6,St,0,Lt+.17,ft,E),S(_t+.2,.3,Nt+.2,"#f4efe2",0,Lt+.5,ft,E),S(1,.7,1,"#9a9a9a",1.4,Lt+.9,ft-.6,E);else if(x.roof==="round"){let ut=new ct(new yi(Nt/2+.45,Nt/2+.45,_t+.5,24,1,!1,-Math.PI/2,Math.PI),St);ut.rotation.set(0,0,Math.PI/2),ut.position.set(0,Lt,ft),ut.castShadow=!0,E.add(ut);for(let he of[-1,1]){let ue=new ct(new Vn(Nt/2+.45,24,0,Math.PI),K);ue.rotation.y=he*Math.PI/2,ue.position.set(he*(_t/2+.26),Lt,ft),E.add(ue)}}else if(x.roof==="hip"){let ut=new ct(new Jn((_t+.9)/Math.SQRT2*1,1.9,4),St);ut.rotation.y=Math.PI/4,ut.scale.set(1,1,(Nt+.9)/(_t+.9)),ut.position.set(0,Lt+.95,ft),ut.castShadow=!0,E.add(ut)}else{let ut=new sr,he=Nt/2+.5;ut.moveTo(-he,0),ut.lineTo(0,1.9),ut.lineTo(he,0),ut.lineTo(-he,0);let ue=new fa(ut,{depth:_t+.6,bevelEnabled:!1});ue.translate(0,0,-(_t+.6)/2);let $e=new ct(ue,[St,St]);$e.rotation.y=Math.PI/2,$e.position.set(0,Lt-.05,ft),$e.castShadow=!0,E.add($e);let mn=new sr;mn.moveTo(-Nt/2,0),mn.lineTo(0,1.55),mn.lineTo(Nt/2,0);let gn=new ct(new wo(mn),K);gn.rotation.y=Math.PI/2;for(let hn of[-1,1]){let Ln=gn.clone();Ln.rotation.y=hn*Math.PI/2,Ln.position.set(hn*(_t/2+.001),Lt,ft),E.add(Ln)}let Ze=new ct(new Vn(.35,20),B("#bfe6ff"));Ze.position.set(0,Lt+.5,ft+Nt/2+.02),E.add(Ze)}let pt=ft+Nt/2+.02,He=v(x.doorC);S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,pt,E);let Mn=new _e;{let ut=new ct(new Ge(1.1,2.3),new Ve({color:"#2a1a10"}));ut.position.set(0,.35+1.15,pt+.005),E.add(ut);let he=new ct(new Ge(1,2.1),B("#5a3a24","#ffcf7a"));he.position.set(0,.35+1.07,pt+.007),E.add(he)}if(x.door==="arch"){S(1.1,1.75,.14,He,0,.35+.88,pt+.02,Mn);let ut=new ct(new Vn(.55,20,0,Math.PI),He);ut.position.set(0,.35+1.75,pt+.1),Mn.add(ut)}else S(1.1,2.05,.14,He,0,.35+1.02,pt+.02,Mn);if(x.door==="round"){let ut=new ct(new Vn(.26,20),B("#bfe6ff"));ut.position.set(0,.35+1.5,pt+.1),Mn.add(ut);let he=new ct(new Si(.28,.05,8,20),v("#c8c8d0"));he.position.set(0,.35+1.5,pt+.1),Mn.add(he)}else if(x.door==="grid")for(let ut=0;ut<3;ut++)for(let he=0;he<2;he++){let ue=new ct(new Ge(.38,.4),B("#e8f4ff","#ffe0a0"));ue.position.set(-.21+he*.42,.35+1.15+ut*.45,pt+.1),Mn.add(ue)}M(.06,"#e9c34a",.4,.35+1,pt+.12,Mn);{let ut=new _e;ut.position.set(-.55,0,pt+.02),E.add(ut),Mn.position.set(.55,0,-(pt+.02)),ut.add(Mn),E.userData.doorPivot=ut,E.userData.doorZ=pt}let Di=M(.16,T("#fff4d0"),.95,.35+2.3,pt+.2,E);z(.95,.35+2.3,pt+.3,2.2,E);for(let ut of[-1.75,1.75]){if(x.win==="round"){let ue=new ct(new Vn(.5,24),B("#bfe6ff"));ue.position.set(ut,2.05,pt+.01),E.add(ue);let $e=new ct(new Si(.52,.08,8,24),v("#f4efe2"));$e.position.set(ut,2.05,pt+.02),E.add($e)}else if(x.win==="arch"){let ue=new ct(new Ge(.9,.8),B("#bfe6ff"));ue.position.set(ut,2.05-.15,pt+.01),E.add(ue);let $e=new ct(new Vn(.45,16,0,Math.PI),B("#bfe6ff"));$e.position.set(ut,2.05+.25,pt+.01),E.add($e),S(1.05,.1,.14,"#f4efe2",ut,2.05-.58,pt+.05,E)}else if(x.win==="shoji"){let ue=new ct(new Ge(1.1,1),B("#fff4dc","#ffcf7a"));ue.position.set(ut,2.05,pt+.01),E.add(ue);for(let $e=-1;$e<=1;$e++)S(.04,1,.04,"#6b3f1f",ut+$e*.36,2.05,pt+.04,E,!1),S(1.1,.04,.04,"#6b3f1f",ut,2.05+$e*.33,pt+.04,E,!1)}else{let ue=new ct(new Ge(1.05,.95),B("#bfe6ff"));ue.position.set(ut,2.05,pt+.01),E.add(ue),S(1.2,.1,.1,"#f4efe2",ut,2.05+.5,pt+.04,E,!1),S(1.2,.1,.1,"#f4efe2",ut,2.05-.5,pt+.04,E,!1),S(.1,1.05,.1,"#f4efe2",ut-.55,2.05,pt+.04,E,!1),S(.1,1.05,.1,"#f4efe2",ut+.55,2.05,pt+.04,E,!1),S(.06,1,.06,"#f4efe2",ut,2.05,pt+.04,E,!1),S(1.3,.14,.32,"#f4efe2",ut,2.05-.6,pt+.14,E)}if(x.garden!=="none"){S(1,.2,.25,"#8a5a34",ut,2.05-.78,pt+.2,E);for(let ue=0;ue<4;ue++)M(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][ue],ut-.36+ue*.24,2.05-.62,pt+.2,E)}}if(+x.porch){S(_t+.6,.3,1.7,"#c8935a",0,.15,pt+.85,E);for(let ut=0;ut<9;ut++)S(.02,.02,1.7,"#9a6a3a",-_t/2-.1+ut*.7,.31,pt+.85,E,!1);S(1.6,.15,.5,"#c8935a",0,.075,pt+1.95,E);for(let ut of[-1,1])S(.12,.9,.12,"#f4efe2",ut*(_t/2+.15),.75,pt+1.62,E),S(.12,.9,.12,"#f4efe2",ut*1,.75,pt+1.62,E),S(_t/2-.8,.08,.08,"#f4efe2",ut*(_t/4+.58),1.1,pt+1.62,E)}{let ut=new _e;ut.position.set(_t/2+.2,0,pt+2.4),E.add(ut),S(.1,1,.1,"#6b3f1f",0,.5,0,ut),S(.4,.32,.55,x.doorC==="#f4efe2"?"#e8553f":x.doorC,0,1.12,0,ut),S(.05,.25,.05,"#e8553f",.22,1.3,.1,ut)}let xt=pt+2.9,Ne=_t/2+1.1;if(x.fence==="white"||x.fence==="wood"){let ut=x.fence==="white"?"#ffffff":"#c8b070";for(let he of[-1,1]){for(let ue=0;ue<6;ue++){let $e=he*(1.3+ue*.55);if(S(.12,.8,.06,ut,$e,.4,xt,E),x.fence==="white"){let mn=new ct(new Jn(.09,.16,4),v(ut));mn.position.set($e,.88,xt),mn.rotation.y=Math.PI/4,E.add(mn)}}S(2.9,.08,.05,ut,he*2.65,.55,xt-.04,E,!1),S(2.9,.08,.05,ut,he*2.65,.25,xt-.04,E,!1)}}else if(x.fence==="hedge")for(let ut of[-1,1]){let he=S(2.8,.7,.6,v("#3f9a3f"),ut*2.6,.35,xt,E);he.geometry=new ln(2.8,.7,.6,3,1,1);for(let ue=0;ue<4;ue++)M(.38,"#4aa84a",ut*(1.5+ue*.72),.7,xt,E,1,.8,1,!0)}if(x.garden==="flower")for(let ut of[-1,1])for(let he=0;he<5;he++)M(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(he+(ut>0?2:0))%5],ut*(2.1+he%3*.5),.28,pt+2+Math.floor(he/3)*.4,E),M(.12,"#3f8a2f",ut*(2.1+he%3*.5),.14,pt+2+Math.floor(he/3)*.4,E);else if(x.garden==="pots")for(let ut of[-1,1])C(.28,.22,.45,"#c8704a",ut*2.3,.22,pt+2.1,E),M(.38,"#4a9a3a",ut*2.3,.7,pt+2.1,E,1,1,1,!0);else x.garden==="tree"&&(C(.12,.16,1.5,"#7a5034",-_t/2-.6,.75,pt+1.6,E),M(.95,"#4aa84a",-_t/2-.6,2,pt+1.6,E,1,1,1,!0),M(.6,"#5ab85a",-_t/2-.2,2.4,pt+1.9,E,1,1,1,!0));if(w){let ut=new ct(new Ge(1.8,.45),new Ve({map:re(w),transparent:!0}));ut.position.set(0,.35+2.5,pt+.09),E.add(ut)}return E.traverse(ut=>{ut.isMesh&&(ut.castShadow=ut.castShadow||!1,ut.receiveShadow=!0)}),E.userData.door=new N(0,0,pt+2.4),E}let qt=[],U=cr(31),A=x=>{let w=Po.find(E=>E.id===x||E.spr===x);return w?w.name.split(" ")[0]:x};function tt(x){let w=E=>E[Math.floor(x()*E.length)][0];return{wall:w(Yi.wall),roof:w(Yi.roof),roofC:w(Yi.roofC),door:w(Yi.door),doorC:w(Yi.doorC),win:w(Yi.win),porch:x()<.75?1:0,fence:w(Yi.fence),garden:w(Yi.garden)}}function mt(x){x.g&&(l.remove(x.g),x.g.traverse(vt=>{vt.geometry&&vt.geometry.dispose()}));let w=x.own?r.ex:x.ex,E=x.own?n.houseName||"\u6211\u7684\u5BB6":x.label;x.g=be(w,E),x.g.position.set(x.x,0,x.z),x.g.rotation.y=x.f===2?Math.PI:0,l.add(x.g),x.g.traverse(vt=>{vt.isMesh&&(vt.userData.house=x)});let F=x.g.userData.door.clone();x.f===2&&(F.x=-F.x,F.z=-F.z),x.door={x:x.x+F.x,z:x.z+F.z};let K=x.f===2?-1:1,ft=x.g.userData.doorZ+.6;x.face={x:x.x,z:x.z+K*ft},x.inw=-K,x.pivot=x.g.userData.doorPivot}M_.forEach(x=>{let w=Object.assign({},x);if(!w.own){w.ex=tt(U);let E=Po.find(F=>F.spr===x.npc||F.id===x.npc);w.label=(E?E.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}qt.push(w),mt(w)});let dt=qt.find(x=>x.own);function gt(x){let w=new _e;w.position.set(x.x,0,x.z),l.add(w);let E={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[x.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,w),S(6.6,3.4,5,E[0],0,2,-.2,w),S(7.4,.4,6,E[1],0,3.9,-.2,w),S(7.6,.3,1.6,E[1],0,3.1,2.6,w).rotation.x=.35;let F=new ct(new Ge(4.2,.9),new Ve({map:re(x.k==="izakaya"&&r.name?r.name:E[3])}));F.position.set(0,4.55,2.85),w.add(F),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,w);let K=new ct(new Ge(2.2,1.4),B("#cfe8f4"));K.position.set(-1.9,1.7,2.31),w.add(K);let ft=K.clone();ft.position.x=1.9,w.add(ft),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,w);let vt=xe(256,100,(Lt,pt,He)=>{for(let Mn=0;Mn<3;Mn++)Lt.fillStyle=E[2],Lt.fillRect(4+Mn*84,0,80,He-4);Lt.fillStyle="#fff",Lt.textAlign="center",Lt.textBaseline="middle",Lt.font=`900 40px ${Pn}`,[...x.k==="bar"?"\u6708\u5F71":x.n.slice(0,3)].slice(0,3).forEach((Mn,Di)=>Lt.fillText(Mn,44+Di*84,44))}),St=new ct(new Ge(1.5,.65),new Ve({map:vt,transparent:!0,side:In}));St.position.set(0,2.25,2.42),w.add(St);for(let Lt of[-1,1]){let pt=M(.3,T(x.k==="sushi"?"#ffffff":"#e2452f"),Lt*1.15,2.3,2.5,w,1,1.3,1);z(Lt*1.15,2.3,2.6,2.6,w)}if(x.k==="ramen")for(let Lt=0;Lt<3;Lt++)C(.25,.25,.7,"#c8352a",-1.2+Lt*1.2,.35,3.5,w,12);if(x.k==="sushi"){let Lt=new ct(new Jn(.4,1.2,4),v("#2f6bb8"));Lt.position.set(3.1,3.2,2.6),Lt.rotation.z=-1.3,w.add(Lt)}return w.traverse(Lt=>{Lt.isMesh&&(Lt.userData.shop=x)}),x.door={x:x.x,z:x.z+3.6},x.face={x:x.x,z:x.z+2.85},x.inw=-1,w}ya.forEach(gt);let Vt=[];qt.forEach(x=>{Vt.push([x.x-_t/2-.2,x.z-(x.f===2?-.6:.6)-Nt/2-.2,x.x+_t/2+.2,x.z-(x.f===2?-.6:.6)+Nt/2+.2])}),ya.forEach(x=>Vt.push([x.x-3.5,x.z-3,x.x+3.5,x.z+2.4])),Vt.push([-3.6,-3.6,3.6,3.6]);function zt(x,w,E,F){let K=new _e;if(K.position.set(x,0,w),K.scale.setScalar(E),l.add(K),F==="palm"){let ft=0,vt=0;for(let St=0;St<6;St++){let Lt=C(.22-St*.02,.26-St*.02,.8,"#a07850",ft,vt+.4,0,K,8);Lt.rotation.z=-.08*St,ft+=.06*St,vt+=.78}for(let St=0;St<7;St++){let Lt=St/7*Math.PI*2,pt=new ct(new Jn(.32,2.6,4),v("#3fa04a",{flatShading:!0}));pt.scale.z=.25,pt.position.set(ft+Math.cos(Lt)*1.1,vt+.1,Math.sin(Lt)*1.1),pt.rotation.set(Math.sin(Lt)*1.6,0,-Math.cos(Lt)*1.6),pt.castShadow=!0,K.add(pt)}M(.18,"#6a4a2a",ft,vt-.1,.1,K)}else C(.22,.3,1.8,"#8a5a3a",0,.9,0,K,8),M(1.5,F==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,K,1,.9,1,!0),M(1,F==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,K,1,1,1,!0),M(.9,F==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,K,1,1,1,!0);Vt.push([x-.5*E,w-.5*E,x+.5*E,w+.5*E])}let Wt=cr(77);for(let x=0;x<34;x++){let w=x/34*Math.PI*2+Wt()*.1,E=Math.cos(w)*(os-1.5+Wt()*2),F=Math.sin(w)*(ki-1.5+Wt()*2);if(F>18){Wt()<.5&&zt(Ti(E*1.05,-os-3,os+3),Ti(F,22,ki+4),.9,"palm");continue}zt(Ti(E,-os+2,os-2),Ti(F,-ki+2,ki-2),.9+Wt()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([x,w],E)=>zt(x,w,.8+E%3*.1,E%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([x,w])=>zt(x,w,.8,"pink"));function Pe(x,w){let E=new _e;E.position.set(x,0,w),l.add(E),C(.09,.12,3.6,"#3a3a44",0,1.8,0,E,8);let F=M(.28,T("#fff4d0"),0,3.7,0,E);C(.3,.2,.12,"#3a3a44",0,3.98,0,E,10),z(0,3.7,0,5,E);let K=new ct(new Vn(3,20),new Ve({map:Dr,transparent:!0,blending:gs,depthWrite:!1,opacity:0}));K.rotation.x=-Math.PI/2,K.position.y=.08,E.add(K),q.push(K),K.userData.k=.35,Vt.push([x-.2,w-.2,x+.2,w+.2])}for(let[x,w]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Pe(x,w);function Tt(x,w,E){let F=new _e;F.position.set(x,0,w),F.rotation.y=E,l.add(F),S(2,.12,.55,"#b8824a",0,.5,0,F),S(2,.5,.1,"#b8824a",0,.85,-.25,F);for(let K of[-.85,.85])S(.1,.5,.5,"#3a3a44",K,.25,0,F);return Vt.push([x-1,w-.4,x+1,w+.4]),F}Tt(0,6.9,Math.PI),Tt(0,-6.9,0),Tt(-6.9,0,Math.PI/2),Tt(6.9,0,-Math.PI/2);let Zt=new _e;Zt.position.set(4.6,0,-4.6),Zt.rotation.y=-Math.PI/4,l.add(Zt);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,Zt),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,Zt);let x=xe(256,160,(E,F,K)=>{E.fillStyle="#c8935a",E.fillRect(0,0,F,K),E.strokeStyle="#6b3f1f",E.lineWidth=10,E.strokeRect(0,0,F,K),E.fillStyle="#fff8ea",E.fillRect(20,30,100,70),E.fillStyle="#ffe0ea",E.fillRect(135,22,100,80),E.fillStyle="#3a2a1a",E.font=`900 26px ${Pn}`,E.textAlign="center",E.fillText("\u5CF6\u306E\u63B2\u793A\u677F",F/2,K-18)}),w=new ct(new ln(1.8,1.1,.1),[v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),new Ve({map:x}),v("#6b3f1f")]);w.position.y=1.4,w.castShadow=!0,Zt.add(w),Vt.push([3.8,-5.4,5.4,-3.8])}function de(x,w,E){let F=new _e;F.position.set(x,0,w),l.add(F),C(.05,.05,2.4,"#f4efe2",0,1.2,0,F,6);let K=new ct(new Jn(1.5,.7,12),v(E,{flatShading:!0}));K.position.y=2.5,K.castShadow=!0,F.add(K);let ft=new ct(new Jn(1.52,.7,12,1,!0,0,Math.PI/6),v("#ffffff",{side:In}));for(let vt=0;vt<6;vt++){let St=ft.clone();St.rotation.y=vt*Math.PI/3,St.position.y=2.5,F.add(St)}}function pe(x,w,E){let F=new _e;F.position.set(x,0,w),l.add(F),S(.7,.12,1.8,E,0,.35,0,F);let K=S(.7,.1,.8,E,0,.6,-.85,F);K.rotation.x=.6;for(let ft of[-.3,.3])for(let vt of[-.7,.7])S(.05,.3,.05,"#f4efe2",ft,.15,vt,F)}de(-18,28,"#2f6bb8"),pe(-16.2,28.4,"#6fd1c0"),pe(-19.6,28.8,"#f29ab8"),de(-4,30,"#e8553f"),pe(-2.2,30.2,"#f6cf4a"),de(22,29,"#3f8f4f"),pe(23.8,29.3,"#f29ab8"),de(-30,27,"#f6cf4a");{let x=new _e;x.position.set(10,0,ki+6),l.add(x),S(3,.3,16,"#b8824a",0,.15,6,x);for(let F=0;F<6;F++)for(let K of[-1.4,1.4])C(.15,.15,1.6,"#8a5a34",K,-.5,-1+F*3,x,8);for(let F=0;F<16;F++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+F,x,!1);let w=new _e;w.position.set(14,-.2,ki+17),l.add(w),S(1.8,.6,4,"#f4efe2",0,.3,0,w),S(1.9,.15,4.1,"#e8553f",0,.65,0,w),C(.06,.06,3,"#8a5a34",0,2,0,w,6);let E=new ct(new Ge(1.6,2.2),v("#ffffff",{side:In}));E.position.set(0,2.2,.6),E.rotation.y=Math.PI/2,w.add(E),lt.userData.boat=w}let Jt=[8.5,ki+4,11.5,ki+19],Le=[],Kt=1.5,Ye=xe(64,64,x=>{let w=x.createRadialGradient(32,32,2,32,32,32);w.addColorStop(0,"rgba(0,0,0,.55)"),w.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=w,x.fillRect(0,0,64,64)});function $(x,w){return xe(512,112,(E,F,K)=>{E.textAlign="center",E.textBaseline="middle";let ft=52;E.font=`900 ${ft}px ${Pn}`;let vt=String(x||"").slice(0,16);for(;E.measureText(vt).width>F-80&&ft>22;)ft-=2,E.font=`900 ${ft}px ${Pn}`;let St=Math.min(F-12,E.measureText(vt).width+56);E.fillStyle=w==="me"?"#ffffffee":"#2a2a48e0",E.strokeStyle=w==="me"?"#3a2a1a":"#c8c0ff",E.lineWidth=7,rr(E,(F-St)/2,14,St,K-28,(K-28)/2),E.fill(),E.stroke(),E.fillStyle=w==="me"?"#3a2a1a":"#fff3d6",E.fillText(vt,F/2,K/2+2)})}let Xt=xe(128,112,x=>{x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",x.fillStyle="#ffffff",rr(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8),x.fillStyle="#2a1810";for(let w=0;w<3;w++)x.beginPath(),x.arc(40+w*24,42,6,0,7),x.fill()});function ht(x,w,E){E=E||{};let F=new _e;l.add(F);let K=new Ge(1,1);K.translate(0,.5,0);let ft=new Ve({transparent:!0,alphaTest:.04,color:16777215}),vt=new ct(K,ft);F.add(vt);let St={grp:F,m:vt,mat:ft,h0:w,h:w*Kt,ar:.8,w:w*Kt*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};p(x,pt=>{ft.map=pt,ft.needsUpdate=!0,St.ar=pt.image.width/pt.image.height,St.w=St.h*St.ar});let Lt=new ct(new Vn(.5,16),new Ve({map:Ye,transparent:!0,depthWrite:!1}));if(Lt.rotation.x=-Math.PI/2,l.add(Lt),St.sh=Lt,E.name){let pt=new ni(new Zn({map:$(E.name,E.nk),transparent:!0,depthTest:!1}));pt.renderOrder=30,pt.scale.set(2.2,.48,1),l.add(pt),St.tag=pt}if(E.bubble){let pt=new ni(new Zn({map:Xt,transparent:!0,depthWrite:!1}));pt.scale.set(.85,.74,1),l.add(pt),St.bub=pt}return Le.push(St),St}let j=ht(n.me.src,1.5,{name:n.me.name||"\u6211",nk:"me"});n.spawn==="door"&&dt?(j.x=dt.face.x,j.z=dt.face.z-dt.inw*.9):n.spawn==="shop"?(j.x=ya[0].face.x,j.z=ya[0].face.z+.9):(j.x=0,j.z=11.5);function Ht(x,w){let E=Math.abs(x),F=Math.abs(w),K=os+vs-1,ft=ki+vs-1,vt=14;return x>=Jt[0]&&x<=Jt[2]&&w>=Jt[1]&&w<=Jt[3]?!0:E>K||F>ft?!1:E>K-vt&&F>ft-vt?Math.hypot(E-(K-vt),F-(ft-vt))<vt:!0}function Bt(x,w,E){if(!Ht(x,w))return!0;for(let F of Vt)if(x>F[0]-E&&x<F[2]+E&&w>F[1]-E&&w<F[3]+E)return!0;return!1}let Re=1,Ke=-os-vs,bn=-ki-vs,ve=Math.ceil((os+vs)*2),Dn=Math.ceil((ki+vs)*2+16),En=null;function Ur(){En=new Uint8Array(ve*Dn);for(let x=0;x<Dn;x++)for(let w=0;w<ve;w++)En[x*ve+w]=Bt(Ke+w+.5,bn+x+.5,.35)?1:0}Ur();function Hs(x,w,E,F){let K=Ze=>Math.floor(Ze-Ke),ft=Ze=>Math.floor(Ze-bn),vt=K(x),St=ft(w),Lt=K(E),pt=ft(F);if(Lt<0||pt<0||Lt>=ve||pt>=Dn)return null;if(En[pt*ve+Lt]){let Ze=null,hn=1e9;for(let Ln=-3;Ln<=3;Ln++)for(let fs=-3;fs<=3;fs++){let wn=Lt+fs,di=pt+Ln;if(wn<0||di<0||wn>=ve||di>=Dn||En[di*ve+wn])continue;let bi=fs*fs+Ln*Ln;bi<hn&&(hn=bi,Ze=[wn,di])}if(!Ze)return null;[Lt,pt]=Ze}let He=new Int32Array(ve*Dn).fill(-1),Mn=St*ve+vt,Di=pt*ve+Lt;He[Mn]=Mn;let xt=[Mn],Ne=0;for(;Ne<xt.length;){let Ze=xt[Ne++];if(Ze===Di)break;let hn=Ze%ve,Ln=Ze/ve|0;for(let[fs,wn]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let di=hn+fs,bi=Ln+wn;if(di<0||bi<0||di>=ve||bi>=Dn)continue;let Br=bi*ve+di;He[Br]>=0||En[Br]||fs&&wn&&(En[Ln*ve+di]||En[bi*ve+hn])||(He[Br]=Ze,xt.push(Br))}}if(He[Di]<0)return null;let ut=[],he=Di;for(;he!==Mn;)ut.push([Ke+he%ve+.5,bn+(he/ve|0)+.5]),he=He[he];ut.reverse();let ue=[],$e=x,mn=w,gn=0;for(;gn<ut.length;){let Ze=gn;for(let hn=ut.length-1;hn>gn;hn--)if(Gn($e,mn,ut[hn][0],ut[hn][1])){Ze=hn;break}ue.push(ut[Ze]),$e=ut[Ze][0],mn=ut[Ze][1],gn=Ze+1}return ue}function Gn(x,w,E,F){let K=Math.hypot(E-x,F-w),ft=Math.ceil(K/.4);for(let vt=1;vt<=ft;vt++){let St=vt/ft;if(Bt(x+(E-x)*St,w+(F-w)*St,.3))return!1}return!0}let cn=[],$i={};function _n(x,w){let E=x+","+w;return $i[E]!==void 0?$i[E]:($i[E]=cn.length,cn.push({x,z:w,n:[]}),cn.length-1)}{let x=[-36,-26,-15,0,15,26,36],w=[-18,0,16];for(let St of w)for(let Lt=0;Lt<x.length-1;Lt++){let pt=_n(x[Lt],St),He=_n(x[Lt+1],St);cn[pt].n.push(He),cn[He].n.push(pt)}for(let St of[-36,36])for(let Lt=0;Lt<w.length-1;Lt++){let pt=_n(St,w[Lt]),He=_n(St,w[Lt+1]);cn[pt].n.push(He),cn[He].n.push(pt)}let E=_n(0,-28),F=_n(0,-18);cn[E].n.push(F),cn[F].n.push(E);let K=_n(0,-9.5),ft=_n(0,9.5);for(let[St,Lt]of[[F,K],[ft,_n(0,16)],[K,_n(-9.5,0)],[K,_n(9.5,0)],[ft,_n(-9.5,0)],[ft,_n(9.5,0)],[_n(-9.5,0),_n(-15,0)],[_n(9.5,0),_n(15,0)]])cn[St].n.push(Lt),cn[Lt].n.push(St);let vt=$i["0,0"];vt!==void 0&&cn[vt].n.forEach(St=>{cn[St].n=cn[St].n.filter(Lt=>Lt!==vt)}),vt!==void 0&&(cn[vt].n=[])}let Ei=[];Po.filter(x=>n.walk&&n.walk[x.spr]&&x.spr!=="robot").sort(()=>Math.random()-.5).slice(0,o?7:10).forEach(x=>{let w=ht(n.walk[x.spr],x.h,{bubble:1});w.d=x,w.sp=x.sp*.9;let E;do E=Math.floor(Math.random()*cn.length);while(!cn[E].n.length);w.x=cn[E].x+ar(-1,1),w.z=cn[E].z+ar(-1,1),w.node=E,w.state="idle",w.t=ar(0,3),Ei.push(w)});function Kn(x){let w=cn[x.node];if(!w.n.length)return;let E=w.n[Math.floor(Math.random()*w.n.length)];x.node=E;let F=cn[E];x.tx=F.x+ar(-1.2,1.2),x.tz=F.z+ar(-1.2,1.2),x.state="walk"}let fi=(x,w,E,F)=>{let K=document.createElement(x);return w&&(K.className=w),E!=null&&(K.innerHTML=E),(F||e).appendChild(K),K},Ji=[],Ai=x=>(Ji.push(x),x),Nr=Ai(fi("div","i3info")),zr=Ai(fi("div","i3hud")),P=Ai(fi("div","h3hint")),k=Ai(fi("div","h3toast")),et=Ai(fi("div","h3card")),it=Ai(fi("div","i3pan")),Y=Ai(fi("button","i3door"));Y.type="button",Y.dataset.i3="door";function Ct(x){k.textContent=x,k.classList.add("on"),clearTimeout(Ct.t),Ct.t=setTimeout(()=>k.classList.remove("on"),2400)}let W={dead:!1,mode:"walk",yaw:.35,yawT:.35,pitch:.72,pitchT:.72,dist:17,distT:17,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new N(j.x,1,j.z)},jt=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],kt=0;function me(){if(jt[kt][0]!==null)return jt[kt][0];let x=new Date;return x.getHours()+x.getMinutes()/60}function we(){if(W.mode==="edit"){zr.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}zr.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button><button class="h3b" type="button" data-i3="time"><i>\u{1F550}</i>${jt[kt][1]}</button>`}function Qt(){let x=me(),w=Math.floor(x),E=Math.floor((x-w)*60);Nr.innerHTML=`<b>\u{1F3DD}\uFE0F ${lr(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(n.owner&&n.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(w).padStart(2,"0")}:${String(E).padStart(2,"0")}\u30FB${x<5||x>=19.5?"\u591C\u665A \u{1F319}":x<7?"\u6E05\u6668 \u{1F305}":x<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}we(),Qt();let Oe="wall";function tn(){let x=Object.keys(Yi).map(E=>`<button class="h3tab ${Oe===E?"on":""}" type="button" data-i3="tab" data-k="${E}">${v_[E]}</button>`).join(""),w=Yi[Oe].map(([E,F])=>{let K=typeof E=="string"&&E[0]==="#";return`<button class="i3opt ${String(r.ex[Oe])===String(E)?"on":""}" type="button" data-i3="opt" data-v="${E}">${K?`<i style="background:${E}"></i>`:""}${lr(F)}</button>`}).join("");it.innerHTML=`<div class="h3tabs">${x}</div><div class="i3row">${w}</div>`}function rn(x){W.mode=x,Ce(),W.tgt=null,it.classList.toggle("on",x==="edit"),we(),Nr.style.display=x==="edit"?"none":"",x==="edit"?(tn(),W.distT=14,W.pitchT=.5,W.yawT=dt.f===2?Math.PI:0):(W.distT=17,W.pitchT=.72,We())}let Un=0;function We(){s&&(clearTimeout(Un),Un=setTimeout(()=>{try{i.save&&i.save(r)}catch{}},500))}function ne(x){Ce(),W.talk=x,x.state="talk",(!x.deck||!x.deck.length)&&(x.deck=x.d.lines.map(F=>({kind:F[0],text:F[1]})).sort(()=>Math.random()-.5));let w=x.deck.pop(),E=Pr[w.kind]||Pr.chat;et.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${n.walk[x.d.spr]}')"></div><div class="h3nm"><b>${lr(x.d.name)}</b><small>${lr(x.d.role||"")}</small></div><span class="h3k" style="background:${E.c}">${E.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${w.kind==="mind"?" mind":""}">${w.kind==="mind"?"\uFF08"+lr(w.text)+"\uFF09":"\u300C"+lr(w.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,et.classList.toggle("r",Ci(new N(x.x,1,x.z)).x<An().left+An().width/2),et.classList.add("on")}function Cn(x,w,E,F){Ce(),et.innerHTML=`<div class="h3h"><div class="h3nm"><b>${lr(x)}</b><small>${lr(w||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${E}</p>${F?`<div class="h3bt">${F}</div>`:""}`,et.classList.remove("r"),et.classList.add("on")}function Ce(){et.classList.remove("on");let x=W.talk;W.talk=null,x&&x.state==="talk"&&(x.state="idle",x.t=ar(1,2))}let Wn=x=>{let w=x.target.closest("[data-i3]");if(!w||!e.contains(w))return;let E=w.dataset.i3;if(E==="close")Ce();else if(E==="more"&&W.talk)ne(W.talk);else if(E==="edit")W.mode==="walk"&&rn("edit");else if(E==="done")rn("walk");else if(E==="tab")Oe=w.dataset.k,tn();else if(E==="opt"){let F=w.dataset.v;r.ex[Oe]=/^\d$/.test(F)?+F:F,mt(dt),tn(),We()}else E==="home"?(Ce(),jn(en.find(F=>F.kind==="home"))):E==="enter"?(Ce(),De(en.find(F=>F.kind==="home"))):E==="shopin"?(Ce(),jn(en.find(F=>F.kind==="shop"))):E==="door"?De(zn):E==="time"&&(kt=(kt+1)%jt.length,we(),Qt(),Ct(kt?`\u9810\u89BD\uFF1A${jt[kt][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",Wn);function G(x){if(!W.entering){W.entering=!0;try{i.enter&&i.enter(x||"home")}catch{W.entering=!1}}}let en=qt.map(x=>({h:x,face:x.face,inw:x.inw,pivot:x.pivot,kind:x.own?"home":"npc",label:x.own?s?"\u{1F6AA} \u958B\u9580":"\u{1F6AA} \u62DC\u8A2A":"\u{1F514} \u6309\u9580\u9234",name:x.own?"":x.label})).concat(ya.map(x=>({s:x,face:x.face,inw:x.inw,kind:x.k==="izakaya"?"shop":"closed",label:x.k==="izakaya"?s?"\u{1F3EE} \u9032\u5E97":"\u{1F3EE} \u9032\u53BB\u901B":"\u{1F6A7} \u6E96\u5099\u4E2D",name:x.n}))),zn=null;function De(x){if(!(!x||W.ent)){if(x.kind==="npc"){Ct(`\u53EE\u549A\uFF5E ${x.name}\u597D\u50CF\u6C92\u4EBA\u5728\u5BB6`);return}if(x.kind==="closed"){Ct(`${x.name}\u9084\u5728\u6E96\u5099\u4E2D\uFF0C\u4E4B\u5F8C\u5C31\u80FD\u9032\u53BB\u4E86\uFF01`);return}Ce(),W.tgt=null,W.ent={d:x,t:0,x0:j.x,z0:j.z}}}function jn(x){ri(x.face.x,x.face.z-x.inw*.7,()=>De(x))}n.spawn==="door"&&dt&&dt.pivot&&(dt.pivot.rotation.y=1.6,W.closing=dt.pivot);function ri(x,w,E){let F=Hs(j.x,j.z,x,w);if(!F){Ct("\u8D70\u4E0D\u904E\u53BB");return}W.tgt={path:F,fn:E}}let An=()=>t.getBoundingClientRect(),Xn=new Ro,ui=new At,Ki=new Oi(new N(0,1,0),0),Ri=new N,ws=(x,w)=>{let E=An();return ui.set((x-E.left)/E.width*2-1,-((w-E.top)/E.height*2-1)),ui},Ci=x=>{let w=x.clone().project(f),E=An();return{x:(w.x+1)/2*E.width+E.left,y:(1-w.y)/2*E.height+E.top}},Vi=new Map,Ue=null,Ii=null;t.addEventListener("contextmenu",x=>x.preventDefault()),t.addEventListener("pointerdown",x=>{x.preventDefault();try{t.setPointerCapture(x.pointerId)}catch{}if(Vi.set(x.pointerId,{x:x.clientX,y:x.clientY}),Vi.size===2){let[w,E]=[...Vi.values()];Ii={d:Math.hypot(w.x-E.x,w.y-E.y),dist:W.distT,ang:Math.atan2(E.y-w.y,E.x-w.x),yaw:W.yawT},Ue=null;return}Ue={id:x.pointerId,x:x.clientX,y:x.clientY,moved:0,yaw0:W.yawT,pit0:W.pitchT}}),t.addEventListener("pointermove",x=>{if(Vi.has(x.pointerId)&&Vi.set(x.pointerId,{x:x.clientX,y:x.clientY}),Ii&&Vi.size>=2){let[F,K]=[...Vi.values()];W.distT=Ti(Ii.dist*Ii.d/Math.max(20,Math.hypot(F.x-K.x,F.y-K.y)),7,40),W.yawT=Ii.yaw-(Math.atan2(K.y-F.y,K.x-F.x)-Ii.ang);return}if(!Ue||Ue.id!==x.pointerId)return;let w=x.clientX-Ue.x,E=x.clientY-Ue.y;!Ue.moved&&Math.hypot(w,E)>8&&(Ue.moved=1),Ue.moved&&(W.yawT=Ue.yaw0-w*.007,W.pitchT=Ti(Ue.pit0+E*.005,.22,1.3))});let qn=x=>{Vi.delete(x.pointerId),Vi.size<2&&(Ii=null),!(!Ue||Ue.id!==x.pointerId)&&(Ue.moved||Hi(x.clientX,x.clientY),Ue=null)};t.addEventListener("pointerup",qn),t.addEventListener("pointercancel",qn),t.addEventListener("wheel",x=>{x.preventDefault(),W.distT=Ti(W.distT+Math.sign(x.deltaY)*1.6,7,40)},{passive:!1});let Uo=x=>{if(!document.contains(t)||/input|textarea/i.test(x.target&&x.target.tagName||""))return;let w=x.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(w)&&(W.keys[w]=1,/^[qe]$/.test(w)||(W.tgt=null),x.preventDefault())},No=x=>{delete W.keys[x.key.toLowerCase()]};document.addEventListener("keydown",Uo),document.addEventListener("keyup",No);function fr(x,w){let E=null,F=1e9;for(let K of Ei){let ft=Ci(new N(K.x,0,K.z)),vt=Ci(new N(K.x,K.h+.2,K.z)),St=ft.y-vt.y;if(St<6)continue;let Lt=Math.max(St*.38,26),pt=Math.abs(x-ft.x);if(pt<Lt&&w>vt.y-10&&w<ft.y+10){let He=pt;He<F&&(F=He,E=K)}}return E}function Hi(x,w){if(W.mode==="edit"||W.ent)return;let E=fr(x,w);if(E){let K=Math.hypot(E.x-j.x,E.z-j.z);ne(E),K>3&&ri(E.x+(j.x-E.x)/K*1.4,E.z+(j.z-E.z)/K*1.4);return}Xn.setFromCamera(ws(x,w),f);let F=Xn.intersectObjects(l.children,!0).filter(K=>K.object.isMesh&&(K.object.userData.house||K.object.userData.shop));if(F.length){let K=F[0].object.userData;if(K.house||K.shop){let ft=en.find(vt=>vt.h===K.house&&K.house||vt.s===K.shop&&K.shop);Ce(),ft&&ri(ft.face.x,ft.face.z-ft.inw*.8);return}if(K.house){let ft=K.house;ft.own?(Cn(s?"\u6211\u7684\u5BB6":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),ri(ft.door.x,ft.door.z)):(Cn(ft.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),ri(ft.door.x,ft.door.z));return}if(K.shop){let ft=K.shop;if(ft.k==="izakaya"){Cn(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),ri(ft.door.x,ft.door.z);return}Cn(ft.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),ri(ft.door.x,ft.door.z);return}}if(Ce(),Xn.ray.intersectPlane(Ki,Ri)){let K=Hs(j.x,j.z,Ri.x,Ri.z);K&&(W.tgt={path:K})}}let ur=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],Nl=new Me,va=new Me,Gi=new Me;function ba(x){let w=0;for(;w<ur.length-2&&x>=ur[w+1][0];)w++;let E=ur[w],F=ur[w+1],K=Ti((x-E[0])/(F[0]-E[0]),0,1),ft=vt=>Nl.set(E[vt]).clone().lerp(va.set(F[vt]),K);return{zen:ft(1),hor:ft(2),sunC:ft(3),sunI:ga(E[4],F[4],K),hemiI:ga(E[5],F[5],K),fog:ft(6),night:ga(E[7],F[7],K)}}let cs=-1;function Ma(x){let w=ba(x),E=L.attributes.position;for(let St=0;St<E.count;St++){let Lt=E.getY(St)/300;Gi.copy(w.hor).lerp(w.zen,Ti((Lt+.05)/.55,0,1));let pt=L.attributes.color.array;pt[St*3]=Gi.r,pt[St*3+1]=Gi.g,pt[St*3+2]=Gi.b}L.attributes.color.needsUpdate=!0,h.color.copy(w.fog),a.setClearColor(w.fog),Ot.color.copy(w.sunC),Ot.intensity=w.sunI,Ut.intensity=w.hemiI,$t.intensity=.2+w.night*.15,Ut.color.set(w.night>.5?"#8a9aff":"#dff2ff");let F=(x-6)/12*Math.PI,K=Math.sin(F);ot.position.set(Math.cos(F)*260,Math.max(-40,K*220),-60),ot.material.opacity=Ti(K*3,0,1);let ft=((x+6)%24-6)/12*Math.PI;rt.position.set(-Math.cos(F)*240,Math.max(30,Math.abs(Math.sin(ft))*200),-80),rt.material.opacity=w.night,Rt.userData.m.opacity=w.night*.9;let vt=w.night;q.forEach(St=>{St.material.opacity=vt*(St.userData.k||.75)}),V.forEach(St=>St.color.copy(St.userData.day).lerp(St.userData.night,vt)),yt.color.set("#ffffff").lerp(Gi.set("#3a4a8a"),vt*.6),lt.children.forEach(St=>St.children.forEach(Lt=>Lt.material.color.set("#ffffff").lerp(Gi.set("#4a4a7a"),vt*.8))),W.night=vt}let zo={get dead(){return W.dead},set dead(x){x&&Fo()},dispose:Fo,kind:"island",probe(){let x=w=>{let E=Ci(w);return{x:Math.round(E.x),y:Math.round(E.y)}};return{mode:W.mode,me:{x:+j.x.toFixed(2),z:+j.z.toFixed(2)},calls:a.info.render.calls,tris:a.info.render.triangles,yaw:+W.yaw.toFixed(2),pitch:+W.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(W.night||0).toFixed(2),card:et.classList.contains("on")?et.textContent:"",door:Y.classList.contains("on")?Y.textContent:"",doorXY:Y.classList.contains("on")?(()=>{let w=Y.getBoundingClientRect();return{x:Math.round(w.left+w.width/2),y:Math.round(w.top+w.height/2)}})():null,ent:!!W.ent,myDoor:x(new N(dt.door.x,1.2,dt.door.z-2.8*(dt.f===2?-1:1))),myHouse:x(new N(dt.x,2,dt.z)),npcs:Ei.map(w=>Object.assign({id:w.d.id,state:w.state},x(new N(w.x,w.h*.5,w.z))))}},px(x,w,E){let F=Ci(new N(x,w,E));return{x:Math.round(F.x),y:Math.round(F.y)}},teleport(x,w){j.x=x,j.z=w,W.cam.set(x,1,w)},setYaw(x){W.yaw=W.yawT=x},setPitch(x){W.pitch=W.pitchT=x},setDist(x){W.dist=W.distT=x},setHour(x){jt[0][0]=x,cs=-1}};function Fo(){if(!W.dead){if(W.dead=!0,cancelAnimationFrame(W.raf),clearTimeout(Un),s)try{i.save&&i.save(r,!0)}catch{}document.removeEventListener("keydown",Uo),document.removeEventListener("keyup",No),e.removeEventListener("click",Wn),Ji.forEach(x=>x.remove()),l.traverse(x=>{x.geometry&&x.geometry.dispose(),(x.material?Array.isArray(x.material)?x.material:[x.material]:[]).forEach(E=>{E.map&&E.map.dispose(),E.dispose()})});try{a.dispose(),a.forceContextLoss()}catch{}}}let Fr=0,Or=0,Gs=0,Pi=1,kr=0,Li=0,je=new N,Qn=new N,hs=new N;function wa(){let x=t.getBoundingClientRect(),w=Math.max(1,t.clientWidth),E=Math.max(1,t.clientHeight),F=Math.min(2,window.devicePixelRatio||1),K=Math.round(Ti(1.75-((x.height||E)-380)/440*.6,1.15,1.75)*20)/20;K!==Kt&&(Kt=K,Le.forEach(ft=>{ft.h=ft.h0*Kt,ft.w=ft.h*ft.ar})),!(w===Fr&&E===Or&&F===Gs)&&(Fr=w,Or=E,Gs=F,Pi=Ti(x.width*F/w,.5,2),Pi=Math.min(Pi,Math.sqrt(16e5/(w*E))),a.setPixelRatio(Pi),a.setSize(w,E,!1),f.aspect=w/E,f.updateProjectionMatrix())}function Oo(x){if(W.dead)return;if(!document.contains(t)){Fo();return}W.raf=requestAnimationFrame(Oo);let w=Math.min(.1,(x-W.last)/1e3);W.last=x,W.t+=w;let E=W.t;wa(),kr+=w,Li++,kr>1.5&&(kr/Li>.03&&Pi>.6&&(Pi=Math.max(.6,Pi*.85),a.setPixelRatio(Pi),a.setSize(Fr,Or,!1)),kr=0,Li=0);let F=me();Math.abs(F-cs)>.02&&(Ma(F),cs=F,Qt());let K=W.keys;K.q&&(W.yawT+=w*1.8),K.e&&(W.yawT-=w*1.8),W.yaw+=(W.yawT-W.yaw)*Math.min(1,w*9),W.pitch+=(W.pitchT-W.pitch)*Math.min(1,w*9),W.dist+=(W.distT-W.dist)*Math.min(1,w*6);let ft=Math.sin(W.yaw),vt=Math.cos(W.yaw);if(je.set(-ft,0,-vt),Qn.set(vt,0,-ft),j.moving=!1,W.mode==="walk"&&!W.ent){let xt=0,Ne=0,ut=1e9,he=(K.arrowright||K.d?1:0)-(K.arrowleft||K.a?1:0),ue=(K.arrowup||K.w?1:0)-(K.arrowdown||K.s?1:0);if(he||ue)xt=Qn.x*he+je.x*ue,Ne=Qn.z*he+je.z*ue;else if(W.tgt){let mn=W.tgt.path[0];if(mn){let gn=mn[0]-j.x,Ze=mn[1]-j.z,hn=Math.hypot(gn,Ze);hn<.1?W.tgt.path.shift():(xt=gn,Ne=Ze,ut=hn)}else{let gn=W.tgt.fn;W.tgt=null,gn&&gn()}}let $e=Math.hypot(xt,Ne);if($e>.01){let mn=Math.min(5*w,ut),gn=xt/$e*mn,Ze=Ne/$e*mn,hn=!1;if(Bt(j.x+gn,j.z+Ze,.3)?Bt(j.x+gn,j.z,.3)?Bt(j.x,j.z+Ze,.3)||(j.z+=Ze,hn=!0):(j.x+=gn,hn=!0):(j.x+=gn,j.z+=Ze,hn=!0),hn){W.mvz=Ze/Math.max(1e-6,Math.hypot(gn,Ze)),j.moving=!0,j.ph+=w*10;let Ln=xt/$e*Qn.x+Ne/$e*Qn.z;Math.abs(Ln)>.2&&(j.face=Ln>0?1:-1)}else if(W.tgt&&(W.tgt.stuck=(W.tgt.stuck||0)+w,W.tgt.stuck>.5)){let Ln=W.tgt.fn;W.tgt=null,Ln&&Ln()}W.talk&&Math.hypot(W.talk.x-j.x,W.talk.z-j.z)>9&&Ce()}}if(zn=null,W.mode==="walk"&&!W.ent){let xt=2.6;for(let Ne of en){let ut=Math.hypot(j.x-Ne.face.x,j.z-Ne.face.z);ut<xt&&(xt=ut,zn=Ne)}zn&&(zn.kind==="home"||zn.kind==="shop")&&xt<.8&&j.moving&&(W.mvz||0)*zn.inw>.5&&De(zn)}if(zn&&!W.ent){let xt=zn,Ne=Ci(new N(xt.face.x,xt.s?3.1:2.95,xt.face.z+xt.inw*.5)),ut=An();Y.textContent=xt.label,Y.classList.toggle("off",xt.kind==="npc"||xt.kind==="closed"),Y.style.left=Ne.x-ut.left+"px",Y.style.top=Ne.y-ut.top+"px",Y.classList.add("on")}else Y.classList.remove("on");if(W.ent){let xt=W.ent,Ne=xt.d;xt.t+=w,Ne.pivot&&(Ne.pivot.rotation.y=Math.min(1,xt.t/.45)*1.6);let ut=Ti((xt.t-.2)/.75,0,1),he=Ne.face.x,ue=Ne.face.z+Ne.inw*1.1;j.x=ga(xt.x0,he,ut),j.z=ga(xt.z0,ue,ut),j.moving=ut>0&&ut<1,j.moving&&(j.ph+=w*10),j.mat.opacity=1-Ti((xt.t-.55)/.45,0,1),j.tag&&(j.tag.material.opacity=j.mat.opacity),xt.t>1.05&&!xt.done&&(xt.done=1,G(Ne.kind))}W.closing&&(W.closing.rotation.y=Math.max(0,W.closing.rotation.y-w*2.4),W.closing.rotation.y<=0&&(W.closing=null)),j.y=0;for(let xt of qt)if(+(xt.own?r.ex:xt.ex).porch&&Math.abs(j.x-xt.x)<_t/2+.3){let Ne=(j.z-xt.z)*(xt.f===2?-1:1);Ne>1.42&&Ne<3.15&&(j.y=.3)}for(let xt of Ei){if(xt.moving=!1,xt.state==="talk"){xt.face=(j.x-xt.x)*Qn.x+(j.z-xt.z)*Qn.z>0?1:-1;continue}if(xt.state==="idle"){xt.t-=w,xt.t<=0&&Kn(xt);continue}let Ne=xt.tx-xt.x,ut=xt.tz-xt.z,he=Math.hypot(Ne,ut);if(he<.1){xt.state="idle",xt.t=Math.random()<.3?ar(3,8):ar(.2,1);continue}let ue=Math.min(he,xt.sp*w);xt.x+=Ne/he*ue,xt.z+=ut/he*ue,xt.moving=!0,xt.ph+=w*(4+xt.sp*3);let $e=Ne*Qn.x+ut*Qn.z;Math.abs($e)>.05&&(xt.face=$e>0?1:-1)}let St=j.x,Lt=j.z;W.mode==="edit"&&(St=dt.x,Lt=dt.z+(dt.f===2?-1:1)*3.2),W.cam.x+=(St-W.cam.x)*Math.min(1,w*8),W.cam.z+=(Lt-W.cam.z)*Math.min(1,w*8),W.cam.y+=((W.mode==="edit"?1.8:1.1)-W.cam.y)*Math.min(1,w*4);let pt=Fr/Or,He=W.dist*(pt<1.4?1.4/pt:1);hs.set(W.cam.x+ft*Math.cos(W.pitch)*He,W.cam.y+Math.sin(W.pitch)*He,W.cam.z+vt*Math.cos(W.pitch)*He),hs.y<.8&&(hs.y=.8),f.position.copy(hs),f.lookAt(W.cam.x,W.cam.y+.4,W.cam.z),H.position.copy(hs),Ot.position.set(W.cam.x+30,60,W.cam.z+22),Ot.target.position.set(W.cam.x,0,W.cam.z),W.night>.6&&Ot.position.set(W.cam.x-25,50,W.cam.z+30);let Mn=Math.atan2(hs.x-W.cam.x,hs.z-W.cam.z);for(let xt of Le){let Ne=xt.w,ut=xt.h,he=xt.moving,ue=Math.sin(xt.ph),$e=he?Math.abs(ue)*.06:0,mn=he?ue*.06:Math.sin(E*1.6+xt.ph)*.01,gn=he?1+Math.cos(xt.ph*2)*.025:1+Math.sin(E*1.6+xt.ph)*.008;xt.grp.position.set(xt.x,(xt.y||0)+$e,xt.z),xt.m.rotation.set(0,Mn,mn*xt.face),xt.m.scale.set(Ne*xt.face*(2-gn),ut*gn,1),xt.sh.position.set(xt.x,(xt.y||0)+.07,xt.z),xt.sh.scale.set(Ne*.7,Ne*.4,1),xt.tag&&xt.tag.position.set(xt.x,(xt.y||0)+ut+.35,xt.z),xt.bub&&(xt.bub.visible=xt!==W.talk,xt.bub.position.set(xt.x,ut+.5+Math.sin(E*2.3+xt.ph)*.06,xt.z))}Ae.offset.set(E*.004,E*.006),wt.forEach((xt,Ne)=>{Ne===0?xt.rotation.z=E*.3:xt.scale.y=1+Math.sin(E*6)*.08}),lt.children.forEach(xt=>{xt.userData.a+=w*.004,xt.position.x=Math.cos(xt.userData.a)*xt.userData.R,xt.position.z=Math.sin(xt.userData.a)*xt.userData.R,xt.lookAt(0,xt.position.y,0)});let Di=lt.userData.boat;Di&&(Di.position.y=-.2+Math.sin(E*1.2)*.08,Di.rotation.z=Math.sin(E*.9)*.04),a.render(l,f)}return W.raf=requestAnimationFrame(Oo),zo}var ci=(n,t)=>n+Math.random()*(t-n),as=(n,t,e)=>Math.max(t,Math.min(e,n));var ls=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},fn=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),yf=new Uint8Array(256).map((n,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),hr=n=>"\xA5"+Math.round(n).toLocaleString("en-US"),ye=10,bt=8,Hn=3.1,_i=4,vi=6,Bi=(_i+vi)/2,bs=-10,Ms=ye+10,Rd=bt+9,Cd=-4,Id=ye+4,S_=bt+1,vf=bt+4,hi={x:7.3,z:bt+1.4},Ul=new Set;for(let n=bt;n<vf+1;n++)for(let t=_i;t<vi;t++)Ul.add(t+","+n);Ul.add("7,"+(bt+1));var wf=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function _a(n){let t=0,e={};for(let[i]of n.it||[]){let s=Ee[i];s&&(e[i]=(e[i]||0)+1,t+=e[i]<=2?s.c:s.c*.4)}return n.fl&&n.fl!=="wood"&&(t+=6),n.wa&&n.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function bf(n){let t=0;return wf.forEach((e,i)=>{n>=e[0]&&(t=i)}),t}var Mf=n=>Math.min(8e4,3e3+n*400);function Pd(n){return{v:1,name:n||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function T_(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function E_(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var _f={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},A_=["daruma","maneki","beer","vase","pine","sake"],Ld=`
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
`,R_=Ld;function C_(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.kind==="home",o=!!n.island,a=n.data||Pd();if(a.it=(a.it||[]).filter(c=>Ee[c[0]]),a.inv=a.inv||{},a.fo=a.fo||{wood:1},a.wo=a.wo||{tsuchi:1},a.gc=a.gc||{},!document.getElementById("h3css")){let c=document.createElement("style");c.id="h3css",c.textContent=Ld,document.head.appendChild(c)}let l=new _o({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});l.setClearColor(1709366,1);let h=new Tr;h.fog=new vo(3811400,26,80);let f=new On(40,2,.2,500),u=new To,p=(c,g)=>u.load(c,b=>{b.colorSpace=Fn,b.anisotropy=4,g&&g(b)}),d=new ii(250,24,16);{let c=[],g=d.attributes.position,b=new Me("#121032"),_=new Me("#7a4058"),I=new Me("#3a2350"),D=new Me;for(let X=0;X<g.count;X++){let J=g.getY(X)/250;J>.25?D.copy(I).lerp(b,as((J-.25)/.55,0,1)):D.copy(_).lerp(I,as((J+.05)/.3,0,1)),c.push(D.r,D.g,D.b)}d.setAttribute("color",new Ie(c,3))}let v=new ct(d,new Ve({vertexColors:!0,side:$n,fog:!1,depthWrite:!1}));v.renderOrder=-10,h.add(v);{let c=[],g=ls(11);for(let _=0;_<300;_++){let I=g()*Math.PI*2,D=.2+g()*1.2,X=230;c.push(Math.cos(I)*Math.cos(D)*X,Math.sin(D)*X,Math.sin(I)*Math.cos(D)*X)}let b=new yn;b.setAttribute("position",new Ie(c,3)),v.add(new oa(b,new bo({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let c=xe(128,128,b=>{let _=b.createRadialGradient(64,64,20,64,64,64);_.addColorStop(0,"rgba(255,246,214,1)"),_.addColorStop(.5,"rgba(255,240,200,1)"),_.addColorStop(.52,"rgba(255,230,180,.25)"),_.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=_,b.fillRect(0,0,128,128)}),g=new ni(new Zn({map:c,fog:!1,depthWrite:!1}));g.scale.set(40,40,1),g.position.set(-90,120,-170),v.add(g)}let T=new Cr(12103408,5914696,1.15);h.add(T);let y=(()=>{let c=new Date;return n.hour!=null?n.hour:c.getHours()+c.getMinutes()/60})(),m=y<5||y>=19.5?1:y<6.5?(6.5-y)/1.5:y>17.5?(y-17.5)/2:0,S=new Ir(16769208,.7);S.position.set(-6,12,10),h.add(S);let C=new Ao(16756832,14,13,1.3);C.position.set(ye*.3,2.7,bt*.45),h.add(C);let M=new Ao(16756832,14,13,1.3);M.position.set(ye*.72,2.7,bt*.55),h.add(M);let q=new Ao(16752720,10,9,1.4);q.position.set(Bi,2.4,bt+1.4),h.add(q);let z=xe(64,64,c=>{let g=c.createRadialGradient(32,32,2,32,32,32);g.addColorStop(0,"rgba(0,0,0,.7)"),g.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=g,c.fillRect(0,0,64,64)}),V=(c,g,b)=>{let _=c.clone();return _.wrapS=_.wrapT=zs,_.repeat.set(g,b),_.needsUpdate=!0,_};function B(c,g,b,_,I,D,X,J){let Q=new ct(new ln(c,g,b),_);return Q.position.set(I,D,X),(J||h).add(Q),Q}function L(c,g,b,_,I,D,X){let J=new ni(new Zn({map:Dr,blending:gs,transparent:!0,depthWrite:!1,opacity:I}));return X&&J.material.color.set(X),J.scale.set(_,_,1),J.position.set(c,g,b),(D||h).add(J),J}let R={wood:()=>xe(256,256,(c,g,b)=>{let _=ls(4);for(let I=0;I<8;I++){let D=_();c.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,c.fillRect(0,I*32,g,32),c.fillStyle="rgba(60,30,10,.35)",c.fillRect(0,I*32,g,2),c.fillRect(_()*256|0,I*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(90,50,20,.12)",c.fillRect(_()*g,I*32+6+_()*20,40+_()*60,2)}}),dark:()=>xe(256,256,(c,g,b)=>{let _=ls(8);for(let I=0;I<8;I++){let D=_();c.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,c.fillRect(0,I*32,g,32),c.fillStyle="rgba(0,0,0,.4)",c.fillRect(0,I*32,g,2),c.fillRect(_()*256|0,I*32,2,32);for(let X=0;X<5;X++)c.fillStyle="rgba(255,220,180,.05)",c.fillRect(_()*g,I*32+6+_()*20,40+_()*60,2)}}),tatami:()=>xe(256,256,(c,g,b)=>{for(let _=0;_<2;_++){let I=_*128;c.fillStyle="#c4c078",c.fillRect(I,0,128,b);for(let D=0;D<b;D+=3)c.fillStyle=D%6?"#b8b46c":"#cfcb84",c.fillRect(I,D,128,1);c.fillStyle="#2a3a2a",c.fillRect(I,0,6,b),c.fillRect(I+122,0,6,b)}}),stone:()=>xe(256,256,(c,g,b)=>{c.fillStyle="#5a5250",c.fillRect(0,0,g,b);let _=ls(6);for(let I=0;I<4;I++)for(let D=0;D<4;D++){let X=_()*18|0;c.fillStyle=`rgb(${120+X},${112+X},${104+X})`,c.fillRect(D*64+3+I%2*8,I*64+3,58,58)}}),light:()=>xe(256,256,(c,g,b)=>{let _=ls(12);for(let I=0;I<8;I++){let D=_();c.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,c.fillRect(0,I*32,g,32),c.fillStyle="rgba(120,80,40,.25)",c.fillRect(0,I*32,g,2),c.fillRect(_()*256|0,I*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(160,110,60,.1)",c.fillRect(_()*g,I*32+6+_()*20,40+_()*60,2)}}),carpetf:()=>xe(256,256,(c,g,b)=>{c.fillStyle="#e8dcc4",c.fillRect(0,0,g,b);let _=ls(14);for(let I=0;I<3e3;I++)c.fillStyle=_()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",c.fillRect(_()*g,_()*b,2,2)}),check:()=>xe(256,256,(c,g,b)=>{for(let _=0;_<4;_++)for(let I=0;I<4;I++)c.fillStyle=(I+_)%2?"#2a3a36":"#d8c8a0",c.fillRect(I*64,_*64,64,64);c.strokeStyle="rgba(0,0,0,.2)",c.lineWidth=2;for(let _=0;_<=4;_++)c.beginPath(),c.moveTo(_*64,0),c.lineTo(_*64,b),c.moveTo(0,_*64),c.lineTo(g,_*64),c.stroke()})};function H(c,g){let _=Math.round(g*64),I=Math.round(Hn*64);return xe(_,I,D=>{let X=ls(g*7|0);if(c==="plank")for(let Q=0;Q<_;Q+=22){let Et=X();D.fillStyle=`hsl(28,${36+Et*8}%,${40+Et*8}%)`,D.fillRect(Q,0,22,I),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(Q,0,2,I)}else if(c==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,_,I);for(let Q=0;Q<300;Q++)D.fillStyle=X()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect(X()*_,X()*I,8,8);D.fillStyle="#5a2a14";for(let Q=0;Q<_;Q+=128)D.fillRect(Q,0,8,I)}else if(c==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,_,I),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let Q=0;Q<I;Q+=24)for(let Et=Q/24%2*12;Et<_;Et+=24)D.beginPath(),D.arc(Et,Q,9,Math.PI,0),D.stroke()}else if(c==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/900;Q++){let Et=X()*_,ke=X()*I;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][Q%3];for(let ge=0;ge<5;ge++){let ae=ge/5*Math.PI*2;D.beginPath(),D.ellipse(Et+Math.cos(ae)*4,ke+Math.sin(ae)*4,3.5,2,ae,0,7),D.fill()}}}else if(c==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/80;Q++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect(X()*_,X()*I,2,2)}else if(c==="stripe")for(let Q=0;Q<_;Q+=24)D.fillStyle=Q/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(Q,0,24,I);else if(c==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,_,I);for(let Q=12;Q<I;Q+=30)for(let Et=Q/30%2*16;Et<_;Et+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(Et+Q)%3];for(let ke=0;ke<5;ke++){let ge=ke/5*Math.PI*2;D.beginPath(),D.arc(Et+Math.cos(ge)*4,Q+Math.sin(ge)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(Et,Q,2,0,7),D.fill()}}else if(c==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/70;Q++)D.fillStyle=X()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect(X()*_,X()*I,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/60;Q++)D.fillStyle=X()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect(X()*_,X()*I,3,3);D.fillStyle="#6b3f1f";for(let Q=0;Q<_;Q+=64*2.5)D.fillRect(Q,0,10,I)}let J=I-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,J,_,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let Q=0;Q<_;Q+=28)D.fillRect(Q,J,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,J-6,_,8),D.fillRect(0,0,_,10)})}let st=h.children.length,nt=xe(256,256,(c,g,b)=>{c.fillStyle="#4a4246",c.fillRect(0,0,g,b);let _=ls(3);for(let I=0;I<4;I++)for(let D=0;D<4;D++){let X=(_()*16|0)-8;c.fillStyle=`rgb(${96+X},${86+X},${84+X})`,c.fillRect(D*64+2,I*64+2,60,60)}}),ot=xe(256,256,(c,g,b)=>{c.fillStyle="#2c2830",c.fillRect(0,0,g,b);let _=ls(5);for(let I=0;I<700;I++){let D=34+(_()*22|0);c.fillStyle=`rgb(${D},${D-3},${D+4})`,c.fillRect(_()*g,_()*b,2,2)}});{let c=new ct(new Ge(600,600),Gt("#1c1826"));c.rotation.x=-Math.PI/2,c.position.y=-.04,h.add(c)}{let c=Ms-bs+30,g=(bs+Ms)/2,b=new ct(new Ge(c,6.2),Gt("#ffffff",{map:V(nt,c/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(g,.005,bt+3.1),h.add(b);let _=new ct(new Ge(c,6),Gt("#ffffff",{map:V(ot,c/6,1)}));_.rotation.x=-Math.PI/2,_.position.set(g,0,bt+9.2),h.add(_);for(let D=bs-14;D<Ms+14;D+=3.4)B(1.7,.02,.14,sn("#cfc8b4"),D,.02,bt+9.2);B(c,.16,.2,Gt("#7a6e66"),g,.08,bt+6.15);let I=new ct(new Ge(c,5),Gt("#ffffff",{map:V(nt,c/3,5/3)}));I.rotation.x=-Math.PI/2,I.position.set(g,.005,bt+14.7),h.add(I)}let Mt=h.children.length,rt=new nn({color:"#ffffff"}),Rt=new ct(new Ge(ye,bt),rt);Rt.rotation.x=-Math.PI/2,Rt.position.set(ye/2,.02,bt/2),h.add(Rt);function lt(c){rt.map&&rt.map.dispose();let g=(R[c]||R.wood)();g.wrapS=g.wrapT=zs,g.repeat.set(ye/2,bt/2),rt.map=g,rt.needsUpdate=!0}B(ye+.4,.12,bt+.4,Gt("#2a1810"),ye/2,-.075,bt/2);let Ut={back:new nn,left:new nn,right:new nn,front:new nn},$t=xe(256,200,(c,g,b)=>{c.fillStyle="#5a3a24",c.fillRect(0,0,g,b);for(let _=0;_<g;_+=16)c.fillStyle=_%32?"#4a2e1c":"#6a4630",c.fillRect(_,0,14,b);c.fillStyle="#2a1810",c.fillRect(0,b-40,g,40)}),Ot=new nn({map:V($t,3,1)}),ie=Gt("#3a2214"),Ae={};function yt(c,g,b,_,I,D){let X=new _e;X.position.set(_,0,I),h.add(X);let J=new ct(new ln(g,Hn,b),D);return J.position.y=Hn/2,X.add(J),Ae[c]=Ae[c]||[],Ae[c].push(X),X}yt("back",ye+.4,.2,ye/2,-.1,[ie,ie,ie,ie,Ut.back,Ot]),yt("left",.2,bt,-.1,bt/2,[Ut.left,Ot,ie,ie,ie,ie]),yt("right",.2,bt,ye+.1,bt/2,[Ot,Ut.right,ie,ie,ie,ie]);let Pt=xe(640,200,(c,g,b)=>{c.fillStyle="#6a4228",c.fillRect(0,0,g,b);for(let I=0;I<g;I+=14)c.fillStyle=I%28?"#5a3620":"#74482c",c.fillRect(I,0,12,b);let _=I=>{c.fillStyle="#ffd98a",c.fillRect(I,56,128,70),c.strokeStyle="#2a1408",c.lineWidth=6,c.strokeRect(I,56,128,70),c.lineWidth=3;for(let D=1;D<4;D++)c.beginPath(),c.moveTo(I+D*32,56),c.lineTo(I+D*32,126),c.stroke();c.beginPath(),c.moveTo(I,91),c.lineTo(I+128,91),c.stroke()};_(64),_(448),c.fillStyle="#2a1810",c.fillRect(0,b-40,g,40)}),se=new Ve({map:Pt}),Ft=(c,g)=>{let b=new Ve({map:Pt.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(g-c,1),b.map.offset.set(c,0),b};yt("front",_i+.2,.2,(_i-.2)/2,bt+.1,[ie,ie,ie,ie,Ft(0,(_i+.2)/(ye+.4)),Ut.front]),yt("front",ye-vi+.2,.2,(vi+ye+.2)/2,bt+.1,[ie,ie,ie,ie,Ft((vi+.2)/(ye+.4),1),Ut.front]);{let c=new _e;c.position.set(Bi,0,bt+.1),h.add(c),B(vi-_i,Hn-2.35,.2,Gt("#4a2a14"),0,2.35+(Hn-2.35)/2,0,c),Ae.front.push(c)}function fe(c){let g={back:ye+.4,left:bt,right:bt,front:ye+.4};for(let b in Ut){let _=Ut[b];_.map&&_.map.dispose(),_.map=H(c,g[b]),_.needsUpdate=!0}}let ce=new _e;h.add(ce),Ae.front.push(ce);let oe=Gt("#3a2214");B(.22,2.45,.34,oe,_i+.05,1.22,bt+.14,ce),B(.22,2.45,.34,oe,vi-.05,1.22,bt+.14,ce),B(vi-_i+.4,.24,.38,oe,Bi,2.42,bt+.14,ce);let Fe=new _e;Fe.position.set(Bi,2.32,bt+.3),ce.add(Fe);let wt=xe(256,140,(c,g,b)=>{for(let _=0;_<3;_++){let I=4+_*84;c.fillStyle="#23315c",c.fillRect(I,0,80,b-6),c.fillStyle="rgba(0,0,0,.22)",c.fillRect(I,b-16,80,10)}c.fillStyle="#f3e6c8",c.textAlign="center",c.textBaseline="middle",c.font=`900 50px ${Pn}`,["\u55B6","\u696D","\u4E2D"].forEach((_,I)=>c.fillText(_,44+I*84,56))}),Dt=new ct(new Ge(1.95,1.05),new Ve({map:wt,transparent:!0,side:In,alphaTest:.05}));Dt.position.y=-.52,Fe.add(Dt);let O=document.createElement("canvas");O.width=640,O.height=140;let re=new Mo(O);re.colorSpace=Fn,re.anisotropy=4;function _t(){let c=O.getContext("2d"),g=640,b=140;c.clearRect(0,0,g,b),c.fillStyle="#f3e2bd",c.strokeStyle="#2a1810",c.lineWidth=10,rr(c,6,6,g-12,b-12,16),c.fill(),c.stroke(),c.fillStyle="#3a1e0c",c.textAlign="center",c.textBaseline="middle";let _=72,I=a.name||"";for(c.font=`900 ${_}px ${Pn}`;c.measureText(I).width>g-60&&_>24;)_-=2,c.font=`900 ${_}px ${Pn}`;c.fillText(I,g/2,b/2+4),re.needsUpdate=!0}_t();{let c=new ct(new ln(3.6,.76,.12),[oe,oe,oe,oe,new Ve({map:re}),oe]);c.position.set(Bi,2.86,bt+.34),ce.add(c)}let Nt=[];for(let c of[_i-.45,vi+.45]){let g=new _e;g.position.set(c,1.95,bt+.45),ce.add(g);let b=new ct(new ii(.28,16,12),sn("#e2452f"));b.scale.y=1.3,g.add(b),B(.26,.06,.26,sn("#2a1810"),0,.38,0,g),B(.26,.06,.26,sn("#2a1810"),0,-.38,0,g),Nt.push(L(0,0,.12,2.3,.55,g))}let It=new _e;h.add(It);{let c=xe(128,128,(D,X,J)=>{D.fillStyle="#2c3044",D.fillRect(0,0,X,J);for(let Q=0;Q<J;Q+=16){D.fillStyle="#3a4058",D.fillRect(0,Q,X,3);for(let Et=Q/16%2*16;Et<X;Et+=32)D.fillStyle="#20242f",D.fillRect(Et,Q,2,16)}}),g=new nn({map:V(c,6,3)}),b=Math.hypot(bt/2+.9,1.6);for(let D of[-1,1]){let X=new ct(new ln(ye+1.6,.14,b),g);X.position.set(ye/2,Hn+1.5,bt/2+D*(bt/4+.45)),X.rotation.x=D*Math.atan2(1.6,bt/2+.9),It.add(X)}let _=new ct(new ln(ye+1.7,.2,.3),Gt("#1c1f2a"));_.position.set(ye/2,Hn+2.32,bt/2),It.add(_);for(let D of[-.2,ye+.2]){let X=new yn;X.setAttribute("position",new Ie([D,Hn,-.2,D,Hn,bt+.2,D,Hn+2.32,bt/2,D,Hn,-.2,D,Hn+.7,-.9,D,Hn+2.32,bt/2,D,Hn,bt+.2,D,Hn+.7,bt+.9,D,Hn+2.32,bt/2],3)),X.computeVertexNormals(),It.add(new ct(X,new nn({color:"#4a2e1c",side:In})))}for(let D of[-.1,bt+.1]){let X=new ct(new ln(ye+.4,1,.2),Ot);X.position.set(ye/2,Hn+.5,D),It.add(X)}let I=new ct(new ln(ye+1.4,.18,1.3),Gt("#2c3044"));I.position.set(ye/2,Hn+.72,bt+.75),I.rotation.x=.25,It.add(I)}let be=h.children.length,qt=[21,33].map(c=>xe(128,256,(g,b,_)=>{let I=ls(c);g.fillStyle="#1b1636",g.fillRect(0,0,b,_);for(let D=0;D<16;D++)for(let X=0;X<8;X++)g.fillStyle=I()<.33?I()<.5?"#ffd98a":"#ffbe68":"#272043",g.fillRect(X*16+3,D*16+3,10,10)})),U=[];function A(c,g,b,_,I,D){let X=g-c,J=(c+g)/2,Q=new _e;Q.position.set(J,0,0),h.add(Q),U.push(Q),B(X-.2,b,bt+1,Gt(_),0,b/2,bt/2-.4,Q);let Et=xe(Math.round(X*40),Math.round(b*40),(ae,Je,Sn)=>{ae.fillStyle=_,ae.fillRect(0,0,Je,Sn);for(let pi=0;pi<Je;pi+=12)ae.fillStyle="rgba(0,0,0,.12)",ae.fillRect(pi,0,2,Sn);ae.fillStyle="#ffcf7a",ae.fillRect(Je*.18,Sn-2.2*40,Je*.64,1.6*40),ae.strokeStyle="#2a1408",ae.lineWidth=4,ae.strokeRect(Je*.18,Sn-2.2*40,Je*.64,1.6*40);for(let pi=1;pi<4;pi++)ae.beginPath(),ae.moveTo(Je*.18+Je*.16*pi,Sn-2.2*40),ae.lineTo(Je*.18+Je*.16*pi,Sn-.6*40),ae.stroke();b>4&&(ae.fillStyle="#ffd98a",ae.fillRect(Je*.25,20,Je*.2,40),ae.fillRect(Je*.55,20,Je*.2,40))}),ke=new ct(new Ge(X-.2,b),new Ve({map:Et}));ke.position.set(0,b/2,bt+.11),Q.add(ke);let ge=new ct(new ln(X+.2,.2,1.4),Gt("#2c3044"));if(ge.position.set(0,Math.min(b,3.1),bt+.7),ge.rotation.x=.25,Q.add(ge),I){let ae=xe(256,120,(Sn,pi,Vl)=>{for(let Z=0;Z<3;Z++)Sn.fillStyle=D,Sn.fillRect(4+Z*84,0,80,Vl-6);Sn.fillStyle="#f8ecd8",Sn.textAlign="center",Sn.textBaseline="middle",Sn.font=`900 46px ${Pn}`,[...I].forEach((Z,le)=>Sn.fillText(Z,44+le*84,52))}),Je=new ct(new Ge(1.8,.85),new Ve({map:ae,transparent:!0,side:In}));Je.position.set(0,2.1,bt+.5),Q.add(Je)}L(0,1.2,bt+.6,3.5,.35,Q)}A(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),A(-13,-6.6,3.4,"#3a4a4a","",""),A(ye+.3,ye+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),A(ye+6.4,ye+13,5.4,"#3a3a5a","","");{let c=ls(17);for(let g=-40;g<60;g+=7+c()*5){let b=8+c()*18,_=6+c()*5,I=new ct(new ln(_,b,6),[sn("#1c1736"),sn("#1c1736"),sn("#18132e"),sn("#18132e"),sn("#ffffff",{map:V(qt[c()*2|0],_/5,b/6)}),sn("#1c1736")]);I.position.set(g,b/2,-12-c()*6),h.add(I)}for(let g=-40;g<60;g+=7+c()*6){let b=5+c()*10,_=5+c()*5,I=new ct(new ln(_,b,6),[sn("#1c1736"),sn("#1c1736"),sn("#18132e"),sn("#18132e"),sn("#ffffff",{map:V(qt[c()*2|0],_/5,b/6)}),sn("#1c1736")]);I.position.set(g,b/2,bt+22+c()*4),I.rotation.y=Math.PI,h.add(I)}}let tt=[];function mt(c,g){let b=new _e;b.position.set(c,0,g),h.add(b),B(.3,.14,.3,Gt("#3a3030"),0,.07,0,b),B(.11,4,.11,Gt("#2b2422"),0,2,0,b),B(.7,.09,.09,Gt("#2b2422"),0,4,0,b);let _=B(.44,.44,.44,sn("#ffe2a6"),0,3.78,0,b);tt.push(L(0,3.78,0,4.5,.55,b));let I=new ct(new Ge(6,6),new Ve({map:Dr,blending:gs,transparent:!0,depthWrite:!1,opacity:.28}));I.rotation.x=-Math.PI/2,I.position.y=.03,b.add(I)}mt(-3.2,bt+5.7),mt(ye+3.2,bt+5.7),mt(-12,bt+5.7),mt(ye+12,bt+5.7);let dt=[];function gt(c,g,b){let _=new _e;_.position.set(c,0,g),_.scale.setScalar(b),h.add(_);let I=new ct(new yi(.16,.26,2.6,7),Gt("#4a3024"));I.position.y=1.3,_.add(I);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([X,J,Q,Et],ke)=>{let ge=new ct(new _s(Et,1),new nn({color:D[ke%3],flatShading:!0}));ge.position.set(X,J,Q),_.add(ge)}),dt.push({x:c,z:g,y:3.2*b,r:2*b})}gt(-6,bt+16.5,1.1),gt(3,bt+17,1),gt(13,bt+16.6,1.15),gt(-14,bt+3.5,.95),gt(ye+15,bt+3.4,1);{let c=xe(64,128,(_,I,D)=>{_.fillStyle="#c23a2a",_.fillRect(0,0,I,D),_.fillStyle="#fff3d6",_.fillRect(6,8,52,50);let X=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let J=0;J<8;J++)_.fillStyle=X[J%4],_.fillRect(10+J%4*12,14+Math.floor(J/4)*20,9,14);_.fillStyle="#111",_.fillRect(10,90,44,12)}),g=new _e;g.position.set(-1.4,0,bt+.6),h.add(g);let b=new ct(new ln(.95,1.9,.75),[Gt("#c23a2a"),Gt("#c23a2a"),Gt("#c23a2a"),Gt("#c23a2a"),sn("#ffffff",{map:c}),Gt("#c23a2a")]);b.position.y=.95,g.add(b),L(0,1.2,.7,2.2,.35,g)}{let c=new _e;c.position.set(ye+1.8,0,bt+5.2),h.add(c),B(1.6,.1,.5,Gt("#8a5a30"),0,.5,0,c),B(1.6,.5,.08,Gt("#8a5a30"),0,.8,.22,c),B(.1,.5,.4,Gt("#2b2422"),-.7,.25,0,c),B(.1,.5,.4,Gt("#2b2422"),.7,.25,0,c)}let Vt=new _e;Vt.position.set(ye+1.5,.55,bt+5.2),h.add(Vt);{let c="#e8a050",g=new ct(new ii(.22,14,10),Gt(c));g.scale.set(1.4,.7,1),Vt.add(g);let b=new ct(new ii(.13,12,10),Gt(c));b.position.set(.3,.05,0),Vt.add(b);for(let I of[-.06,.06]){let D=new ct(new Jn(.05,.09,4),Gt(c));D.position.set(.32,.17,I),Vt.add(D)}let _=new ct(new yi(.035,.03,.4,6),Gt(c));_.rotation.z=1.2,_.position.set(-.34,.02,.08),Vt.add(_)}let zt=new _e;zt.position.set(hi.x,0,hi.z),h.add(zt);{B(.1,1.5,.1,Gt("#4a2a14"),-.55,.75,0,zt),B(.1,1.5,.1,Gt("#4a2a14"),.55,.75,0,zt);let c=xe(256,160,(_,I,D)=>{_.fillStyle="#b8864a",_.fillRect(0,0,I,D),_.strokeStyle="#4a2a14",_.lineWidth=10,_.strokeRect(0,0,I,D);let X=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let J=0;J<5;J++){_.save(),_.translate(40+J%3*80,44+Math.floor(J/3)*70),_.rotate((J%2?-1:1)*.12),_.fillStyle=X[J%4],_.fillRect(-28,-22,56,44),_.fillStyle="#e2452f",_.beginPath(),_.arc(0,-18,4,0,7),_.fill(),_.fillStyle="#8a7a6a";for(let Q=0;Q<3;Q++)_.fillRect(-20,-6+Q*9,40-Q*8,3);_.restore()}_.fillStyle="#3a1e0c",_.font=`900 26px ${Pn}`,_.textAlign="right",_.fillText("\u7559\u8A00\u677F",I-14,D-14)}),g=new ct(new ln(1.3,.85,.08),[oe,oe,oe,oe,new Ve({map:c}),oe]);g.position.y=1.15,zt.add(g);let b=new ct(new ln(1.5,.08,.35),Gt("#2c3044"));b.position.y=1.62,b.rotation.x=.2,zt.add(b),zt.traverse(_=>{_.isMesh&&(_.userData.board=1)})}let Wt=[];if(zt.traverse(c=>{c.isMesh&&Wt.push(c)}),o){let c=h.children.length;h.children.slice(be,c).concat(h.children.slice(st,Mt)).forEach(Q=>h.remove(Q)),Wt.length=0,dt.length=0;let g=new Me("#8fd3f6"),b=new Me("#16204a"),_=new Me("#f0a890"),I=g.clone().lerp(y>15&&y<20?_:b,y>15&&y<20&&m<.5?Math.min(1,m*2):m).lerp(b,m>.5?(m-.5)*2:0);h.fog.color.copy(I),h.fog.near=30,h.fog.far=90,l.setClearColor(I,1),v.visible=!1,T.color.set(m>.5?"#9aa8ff":"#e8f4ff"),T.groundColor.set("#6a8a4a"),T.intensity=1.25+(1-m)*.6,S.intensity=.4+(1-m)*1,S.color.set(m>.5?"#a0b0ff":"#fff2dc");let D=new ct(new Ge(220,220),Gt(m>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,h.add(D);let X=new ct(new Ge(2.2,6),Gt("#d9d4cc"));X.rotation.x=-Math.PI/2,X.position.set(Bi,-.01,bt+3.2),h.add(X);let J=m>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[ye+4,1],[ye+5,6],[-3,bt+5],[ye+3,bt+6],[2,-4],[8,-5]].forEach(([Q,Et],ke)=>{let ge=new _e;ge.position.set(Q,0,Et),h.add(ge);let ae=new ct(new yi(.2,.28,1.8,7),Gt("#8a5a3a"));ae.position.y=.9,ge.add(ae);let Je=new ct(new _s(1.4,1),new nn({color:ke%3?J:m>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));Je.position.y=2.6,ge.add(Je)})}let Pe=140,Tt=new Float32Array(Pe*3),Zt=[],de=xe(32,32,c=>{c.fillStyle="#f8c8d8",c.beginPath(),c.ellipse(16,16,12,7,.5,0,7),c.fill()}),pe=new oa(new yn,new bo({map:de,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));pe.geometry.setAttribute("position",new Ie(Tt,3)),h.add(pe);function Jt(c,g){let b=dt.concat(Le)[Math.floor(Math.random()*(dt.length+Le.length))]||dt[0]||{x:-999,z:-999,y:0,r:.1};Tt[c*3]=b.x+ci(-b.r,b.r),Tt[c*3+1]=g?ci(0,b.y):b.y+ci(-.3,.3),Tt[c*3+2]=b.z+ci(-b.r,b.r),Zt[c]={vx:ci(-.2,.4),vy:ci(-.5,-.25),ph:Math.random()*7,fl:b.y}}let Le=[],Kt=[],Ye=[],$=(c,g)=>c>=0&&c<ye&&g>=0&&g<bt,Xt=(c,g)=>!o&&c>=Cd&&c<Id&&g>=S_&&g<vf,ht=(c,g)=>g%2?[c.d,c.w]:[c.w,c.d];function j(c){let g=Ee[c.k];if(g.L==="wall")return Ht(c);let[b,_]=ht(g,c.r),I=[];for(let D=0;D<b;D++)for(let X=0;X<_;X++)I.push([c.x+D,c.z+X]);return I}function Ht(c){let g=Ee[c.k],b=[];for(let _=0;_<g.w;_++)c.r===0?b.push(["b",c.x+_]):c.r===2?b.push(["f",c.x+_]):c.r===1?b.push(["l",c.z+_]):b.push(["r",c.z+_]);return b}function Bt(c){return c===0?"back":c===2?"front":c===1?"left":"right"}function Re(c,g){let b=Ee[c.k];for(let[_,I]of Ht(c)){let D=_==="b"||_==="f"?ye:bt;if(I<0||I>=D||_==="f"&&I>=_i-0&&I<vi)return!1;_==="f"&&I>=_i-1&&I<vi+1&&b.w>1}for(let _ of Kt){if(_===g||Ee[_.k].L!=="wall")continue;let I=Ht(_);for(let D of Ht(c))if(I.some(X=>X[0]===D[0]&&X[1]===D[1]))return!1}return!0}function Ke(c,g,b,_){for(let I of Kt)if(!(I===_||Ee[I.k].L!==b)&&j(I).some(D=>D[0]===c&&D[1]===g))return I;return null}function bn(c,g,b){let _=Ke(c,g,"main",b);return _&&Ee[_.k].sf?_:null}function ve(c,g){let b=Ee[c.k];if(b.L==="wall")return Re(c,g);let _=j(c),I=null;for(let[D,X]of _){let J=$(D,X),Q=Xt(D,X);if(!J&&!Q)return!1;if(I===null)I=J;else if(I!==J)return!1;if(Ul.has(D+","+X))return!1;if(b.L==="top"){if(Ke(D,X,"top",g))return!1;let Et=Ke(D,X,"main",g);if(Et&&!Ee[Et.k].sf||Et&&Et.k==="tank")return!1}else if(Ke(D,X,b.L,g))return!1;if(b.L==="main"&&b.solid&&J&&X===bt-1&&D>=_i&&D<vi)return!1}return b.L==="main"&&b.solid,!0}function Dn(c){if(Ee[c.k].L!=="top")return 0;let b=0;for(let[_,I]of j(c)){let D=bn(_,I);D&&(b=Math.max(b,Ee[D.k].sf))}return b}function En(c){let g=Ee[c.k];if(g.L==="wall"){let[I,D]=Ht(c)[0],X=D+g.w/2;return I==="b"?[X,0,.02]:I==="f"?[X,0,bt-.02]:I==="l"?[.02,0,X]:[ye-.02,0,X]}let[b,_]=ht(g,c.r);return[c.x+b/2,Dn(c),c.z+_/2]}let Ur=new Ve({map:z,transparent:!0,depthWrite:!1,opacity:.55});function Hs(c,g){let b=Ee[c.k];if(c.I=b,c.g=mf(c.k),h.add(c.g),c.g.userData.e=c,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[_,I]=ht(b,0),D=new ct(new Ge(_*.95,I*.95),Ur);D.rotation.x=-Math.PI/2,D.position.y=.012,c.g.add(D),D.raycast=()=>{}}return c.g.traverse(_=>{_.isMesh&&(_.userData.e=c,Ye.push(_))}),Kt.push(c),Gn(c),g||Kn(),c}function Gn(c){let[g,b,_]=En(c);c.g.position.set(g,b,_),c.g.rotation.y=c.r*Math.PI/2}function cn(c){let g=Kt.indexOf(c);g>=0&&Kt.splice(g,1),h.remove(c.g);for(let b=Ye.length-1;b>=0;b--)Ye[b].userData.e===c&&Ye.splice(b,1);c.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function $i(c){let g=j(c);return Kt.filter(b=>Ee[b.k].L==="top"&&j(b).some(_=>g.some(I=>I[0]===_[0]&&I[1]===_[1])))}if(a.it.forEach(([c,g,b,_])=>{let I={k:c,x:g,z:b,r:_||0};ve(I)?Hs(I,!0):s&&(a.inv[c]=(a.inv[c]||0)+1)}),Kt.filter(c=>Ee[c.k].L==="top").forEach(Gn),lt(a.fl),fe(a.wa),r){let c=n.ex||{},g=c.wall||"#f29ab8",b=xe(640,200,(_,I,D)=>{_.fillStyle=g,_.fillRect(0,0,I,D);for(let J=0;J<D;J+=14)_.fillStyle="rgba(0,0,0,.08)",_.fillRect(0,J,I,2);let X=J=>{_.fillStyle=m>.5?"#ffd98a":"#bfe6ff",_.fillRect(J,60,110,70),_.strokeStyle="#f4efe2",_.lineWidth=8,_.strokeRect(J,60,110,70),_.beginPath(),_.moveTo(J+55,60),_.lineTo(J+55,130),_.stroke()};X(70),X(460),_.fillStyle="#e8e2d4",_.fillRect(0,D-26,I,26)});Ae.front.forEach(_=>_.traverse(I=>{if(I.isMesh&&Array.isArray(I.material)&&I.material[4]&&I.material[4].map){let D=I.material[4].map.offset.x,X=I.material[4].map.repeat.x,J=b.clone();J.needsUpdate=!0,J.offset.set(D,0),J.repeat.set(X,1),I.material[4]=new Ve({map:J})}})),Ot.map=null,Ot.color.set(g),Ot.needsUpdate=!0,ce.children.slice().forEach(_=>{_!==ce.children[0]&&_!==ce.children[1]&&_!==ce.children[2]&&(_.visible=!1)}),Nt.forEach(_=>{_.visible=!1}),It.traverse(_=>{_.isMesh&&_.material&&_.material.map&&(_.material.map=null,_.material.color.set(c.roofC||"#d8452f"),_.material.needsUpdate=!0)})}function _n(){Le=Kt.filter(c=>c.k==="sakura").map(c=>({x:c.g.position.x,z:c.g.position.z,y:2,r:.5}))}_n();for(let c=0;c<Pe;c++)Jt(c,1);let Ei=0;function Zi(){return a.it=Kt.map(c=>[c.k,c.x,c.z,c.r]),a}function Kn(){s&&(Zi(),clearTimeout(Ei),Ei=setTimeout(()=>{try{i.save&&i.save(a)}catch{}},700),No())}let fi=[],Ji=1.5,Ai={};function Nr(c){return Ai[c]?Ai[c]:Ai[c]=xe(128,112,g=>{if(g.strokeStyle="#2a1810",g.lineWidth=6,g.lineJoin="round",c==="mind"||c==="zzz"){g.fillStyle=c==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([_,I,D])=>{g.beginPath(),g.arc(_,I,D,0,7),g.stroke()}),b.forEach(([_,I,D])=>{g.beginPath(),g.arc(_,I,D,0,7),g.fill()}),g.beginPath(),g.arc(44,90,7,0,7),g.fill(),g.stroke(),g.beginPath(),g.arc(30,104,4,0,7),g.fill(),g.stroke()}else g.fillStyle=c==="idea"?"#fff0a8":c==="msg"?"#ffe0ea":"#ffffff",rr(g,12,8,104,66,24),g.fill(),g.stroke(),g.beginPath(),g.moveTo(44,72),g.lineTo(34,100),g.lineTo(66,74),g.closePath(),g.fill(),g.stroke(),g.fillRect(46,68,18,8);if(g.fillStyle="#2a1810",g.textAlign="center",g.textBaseline="middle",c==="idea")g.font=`900 44px ${Pn}`,g.fillText("!",64,42);else if(c==="zzz")g.font=`900 30px ${Pn}`,g.fillText("z z Z",64,42);else if(c==="msg")g.font=`900 40px ${Pn}`,g.fillText("\u2709",64,42);else for(let b=0;b<3;b++)g.beginPath(),g.arc(40+b*24,42,6,0,7),g.fill()})}function zr(c,g){return xe(512,112,I=>{I.textAlign="center",I.textBaseline="middle";let D=52;I.font=`900 ${D}px ${Pn}`;let X=String(c||"").slice(0,16);for(;I.measureText(X).width>432&&D>22;)D-=2,I.font=`900 ${D}px ${Pn}`;let J=Math.min(500,I.measureText(X).width+56);I.fillStyle=g==="me"?"#2a1810e6":g==="owner"?"#7a3a14e6":"#2a2a48e0",I.strokeStyle=g==="me"?"#ffd27a":g==="owner"?"#ffb36b":"#c8c0ff",I.lineWidth=6,rr(I,(512-J)/2,14,J,84,84/2),I.fill(),I.stroke(),I.fillStyle="#fff3d6",I.fillText(X,512/2,112/2+2)})}function P(c,g,b){b=b||{};let _=new _e;h.add(_);let I=new Ge(1,1);I.translate(0,.5,0);let D=new Ve({transparent:!0,alphaTest:.04,color:b.tint||16051952}),X=new ct(I,D);_.add(X);let J={grp:_,m:X,mat:D,h0:g,h:g*Ji,ar:.8,w:g*Ji*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};p(c,Et=>{D.map=Et,D.needsUpdate=!0,J.ar=Et.image.width/Et.image.height,J.w=J.h*J.ar});let Q=new ct(new Vn(.5,16),new Ve({map:z,transparent:!0,depthWrite:!1,opacity:.8}));if(Q.rotation.x=-Math.PI/2,h.add(Q),J.sh=Q,b.name){let Et=new ni(new Zn({map:zr(b.name,b.nk),transparent:!0,depthTest:!1}));Et.renderOrder=30,Et.scale.set(2,.44,1),h.add(Et),J.tag=Et,J.name=b.name}if(b.bubble){let Et=new ni(new Zn({map:Nr(b.bubble),transparent:!0,depthWrite:!1}));Et.scale.set(.8,.7,1),h.add(Et),J.bub=Et,J.kind=b.bubble}return fi.push(J),J}let k=P(n.me.src,1.5,{me:1,name:n.me.name||"\u6211",nk:"me"});k.x=Bi,k.z=bt+2.6,(s&&n.startInside!==!1||n.island)&&(k.x=Bi,k.z=bt-1.6);let et=bs,it=Ms,Y=Rd;function Ct(c,g){if(c<et||c>=it||g<0||g>=Y||g<bt&&(c<0||c>=ye)||g>=bt&&Ul.has(c+","+g)&&c===7&&g===bt+1)return!0;let b=Ke(c,g,"main");return!!(b&&Ee[b.k].solid)}let W=(c,g,b,_)=>Ct(b,_)?!1:g===bt-1&&_===bt||g===bt&&_===bt-1?c>=_i&&c<vi&&b===c:!0;function jt(c,g,b,_){c=Math.floor(c),g=Math.floor(g);let I=(J,Q)=>(J-et)*100+Q,D=new Map;D.set(I(c,g),null);let X=[[c,g]];for(;X.length;){let[J,Q]=X.shift();if(J===b&&Q===_){let Et=[],ke=I(J,Q),ge=J,ae=Q;for(;ke!==null;){Et.push([ge+.5,ae+.5]);let Je=D.get(ke);if(Je===null)break;ge=Je[0],ae=Je[1],ke=I(ge,ae)}return Et.reverse()}for(let[Et,ke]of[[1,0],[-1,0],[0,1],[0,-1]]){let ge=J+Et,ae=Q+ke,Je=I(ge,ae);D.has(Je)||!W(J,Q,ge,ae)||(D.set(Je,[J,Q]),X.push([ge,ae]))}}return null}let kt=.28;function me(c,g,b){let _=c>=_i+kt&&c<=vi-kt;if(b<bt){if(g<bt&&(c<kt||c>ye-kt||g<kt)||g>=bt-kt&&!_)return!1}else if(g<bt+kt&&!_||g<bt&&!_)return!1;if(c<bs+.4||c>Ms-.4||g>Rd-.4||g<bt&&(c<0||c>ye))return!1;for(let[I,D]of[[-kt,-kt],[kt,-kt],[-kt,kt],[kt,kt],[0,0]]){let X=Math.floor(c+I*.8),J=Math.floor(g+D*.8),Q=Ke(X,J,"main");if(Q&&Ee[Q.k].solid||X===7&&J===bt+1&&Math.hypot(c-hi.x,g-hi.z)<.7)return!1}return!0}function we(c){let g=[];if(c)for(let b=0;b<bt;b++)for(let _=0;_<ye;_++)Ct(_,b)||g.push([_,b]);else for(let b=bt+1;b<bt+6;b++)for(let _=-6;_<ye+6;_++)Ct(_,b)||g.push([_,b]);return g}let Qt=[],Oe=()=>bf(_a(Zi())),tn=rn(Po.filter(c=>n.walk&&n.walk[c.spr]&&c.spr!=="robot"));function rn(c){for(let g=c.length-1;g>0;g--){let b=Math.floor(Math.random()*(g+1));[c[g],c[b]]=[c[b],c[g]]}return c}let Un=r?0:as(2+Oe(),2,7);tn.slice(0,Un).forEach((c,g)=>{let b=P(n.walk[c.spr],c.h,{bubble:"chat"});b.d=c,b.sp=c.sp*.8,b.kind2="npc",b.state="out",b.t=g*2.2+ci(0,1.5),b.x=bs+1,b.z=bt+4,b.hidden=!0,Qt.push(b)});function We(c){let g=P(n.me.src,1.5,{name:c.name,nk:"vis",bubble:"msg",tint:16771312});g.d={id:"v"+c.id,name:c.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},g.v=c,g.sp=1.3,g.kind2="vis",g.state="out",g.t=ci(1,6),g.x=Ms-1,g.z=bt+4,g.hidden=!0,Qt.push(g)}let ne=null,Cn=null;if(r){let c=new _e;h.add(c);let g="#e8a050",b="#fff3e0",_=new ct(new ii(.2,14,10),Gt(g));_.scale.set(1.5,.8,.9),_.position.y=.2,c.add(_);let I=new ct(new ii(.14,14,10),Gt(g));I.position.set(.3,.34,0),c.add(I);let D=new ct(new ii(.07,10,8),Gt(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),c.add(D);for(let Et of[-.07,.07]){let ke=new ct(new Jn(.05,.1,4),Gt(g));ke.position.set(.3,.5,Et),c.add(ke);let ge=new ct(new ii(.018,6,6),Gt("#1a1a1a"));ge.position.set(.43,.38,Et*.7),c.add(ge)}let X=[];for(let[Et,ke]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let ge=new ct(new yi(.04,.04,.16,6),Gt(g));ge.position.set(Et,.08,ke),c.add(ge),X.push(ge)}let J=new ct(new yi(.03,.025,.4,6),Gt(g));J.position.set(-.38,.36,0),J.rotation.z=.8,c.add(J),c.traverse(Et=>{Et.isMesh&&(Et.userData.pet=1)});let Q=Kt.find(Et=>Et.k==="catbed");Cn={g:c,legs:X,tail:J,x:Q?Q.g.position.x:2.5,z:Q?Q.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!Q}}if(!s){let c=Kt.find(_=>_.k==="register"),g=Bi,b=2;if(c){let _=[[c.x,c.z-1],[c.x+1,c.z],[c.x-1,c.z],[c.x,c.z+1]].find(([I,D])=>$(I,D)&&!Ct(I,D));_&&(g=_[0]+.5,b=_[1]+.5)}ne=P(n.owner&&n.owner.src||n.me.src,1.5,{name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),ne.x=g,ne.z=b,ne.kind2="owner",ne.state="sleep",ne.d={name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),role:a.name},Qt.push(ne)}function Ce(c){let g=c.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];Kt.forEach(X=>{X.k==="register"&&b.push(...j(X))}),b.push([7,bt+1]);let _=we(g).filter(([X,J])=>!b.some(Q=>Math.abs(Q[0]-X)<=1&&Math.abs(Q[1]-J)<=1)&&!fi.some(Q=>Q!==c&&!Q.hidden&&Math.floor(Q.x)===X&&Math.floor(Q.z)===J));if(!_.length)return null;let I=_.filter(([X,J])=>Kt.some(Q=>Ee[Q.k].L!=="rug"&&j(Q).some(Et=>Math.abs(Et[0]-X)+Math.abs(Et[1]-J)===1))),D=I.length&&Math.random()<.75?I:_;return D[Math.floor(Math.random()*D.length)]}function Wn(c,g,b){let _=jt(c.x,c.z,g,b);return _&&_.length?(c.path=_,c.state="walk",!0):!1}let G={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:k.z<bt,cam:new N(k.x,1,k.z),low:{},pitch:.7,pitchT:.7},en=(c,g,b,_)=>{let I=document.createElement(c);return g&&(I.className=g),b!=null&&(I.innerHTML=b),(_||e).appendChild(I),I},zn=[],De=c=>(zn.push(c),c),jn=De(en("div","h3info")),ri=De(en("div","h3hud")),An=en("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),Xn=De(en("div","h3hint")),ui=De(en("div","h3toast")),Ki=De(en("div","h3j","<i></i>")),Ri=De(en("div","h3card")),ws=De(en("div","h3bp")),Ci=De(en("div","h3sel")),Vi=De(en("div","h3top")),Ue=De(en("div","h3pan")),Ii=De(en("button","h3door","\u{1F6AA} \u51FA\u9580"));Ii.type="button",Ii.dataset.h3="exit";function qn(c){ui.textContent=c,ui.classList.add("on"),clearTimeout(qn.t),qn.t=setTimeout(()=>ui.classList.remove("on"),2200)}function Uo(){if(G.mode==="build"){ri.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}ri.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function No(){let c=_a(Zi()),g=bf(c);if(r){jn.innerHTML=`<b>\u{1F3E0} ${fn(n.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(g)}${"\u2606".repeat(5-g)}</span> \u6EAB\u99A8\u5EA6 ${c}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${fn(n.owner&&n.owner.name||"")} \u7684\u5BB6`}</small>`;return}jn.innerHTML=`<b>\u{1F3EE} ${fn(a.name)}</b><span class="h3st">${"\u2605".repeat(g)}${"\u2606".repeat(5-g)}</span> ${fn(wf[g][1])}<br><small>\u6EAB\u99A8\u5EA6 ${c}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${hr(Mf(c))}`:`\u30FB\u5E97\u9577 ${fn(n.owner&&n.owner.name||"")}`}</small>`}Uo(),No(),An.style.display="none",An.querySelectorAll("button").forEach((c,g)=>{let b=g?-1:1;c.addEventListener("pointerdown",I=>{I.preventDefault(),G.camV=b;try{c.setPointerCapture(I.pointerId)}catch{}});let _=()=>{G.camV=0};c.addEventListener("pointerup",_),c.addEventListener("pointercancel",_),c.addEventListener("click",()=>{G.camV||(G.yawT+=b*.5)})});let fr=()=>t.getBoundingClientRect(),Hi=new Ro,ur=new At,Nl=new Oi(new N(0,1,0),0),va=new N,Gi=(c,g)=>{let b=fr();return ur.set((c-b.left)/b.width*2-1,-((g-b.top)/b.height*2-1)),ur},ba=(c,g)=>{let b=fr();return{x:(c-b.left)*(t.clientWidth/b.width),y:(g-b.top)*(t.clientHeight/b.height)}},cs=c=>{let g=c.clone().project(f),b=fr();return{x:(g.x+1)/2*b.width+b.left,y:(1-g.y)/2*b.height+b.top,z:g.z}};function Ma(c,g){return Hi.setFromCamera(Gi(c,g),f),Hi.ray.intersectPlane(Nl,va)?va.clone():null}function zo(c,g){Hi.setFromCamera(Gi(c,g),f);let b=Hi.intersectObjects(Ye.filter(_=>_.visible&&_.parent&&Fo(_)),!1);return b.length?b[0].object.userData.e:null}function Fo(c){let g=c;for(;g;){if(!g.visible)return!1;g=g.parent}return!0}function Fr(c,g){let b=null,_=1e9;for(let I of Qt){if(I.hidden)continue;let D=cs(new N(I.x,0,I.z)),X=cs(new N(I.x,I.h+.3,I.z)),J=D.y-X.y;if(J<6)continue;let Q=Math.max(J*.36,30),Et=Math.abs(c-D.x);if(Et<Q&&g>X.y-14&&g<D.y+12){let ke=Et+Math.abs(g-(D.y+X.y)/2)*.3;ke<_&&(_=ke,b=I)}}return b}function Or(c,g){return Hi.setFromCamera(Gi(c,g),f),Hi.intersectObjects(Wt,!1).length>0}let Gs=[],Pi=[];function kr(c,g){return Hi.setFromCamera(Gi(c,g),f),Hi.intersectObjects(Pi,!1).length>0}let Li=new Map,je=null,Qn=null;t.addEventListener("contextmenu",c=>c.preventDefault()),t.addEventListener("pointerdown",c=>{c.preventDefault();try{t.setPointerCapture(c.pointerId)}catch{}let g=ba(c.clientX,c.clientY);if(Li.set(c.pointerId,{x:c.clientX,y:c.clientY}),Li.size===2){let[b,_]=[...Li.values()];Qn={d:Math.hypot(b.x-_.x,b.y-_.y),dist:G.distT,ang:Math.atan2(_.y-b.y,_.x-b.x),yaw:G.yawT},je=null,G.joy=null,Ki.style.display="none",Sf();return}if(je={id:c.pointerId,sx:g.x,sy:g.y,cx:c.clientX,cy:c.clientY,moved:0,btn:c.button,yaw0:G.yawT,pit0:G.pitchT},G.mode==="build"){let b=zo(c.clientX,c.clientY);b&&b===G.sel&&!b.I.fixed2?je.dragItem=b:b&&(je.pickItem=b)}}),t.addEventListener("pointermove",c=>{if(Li.has(c.pointerId)&&Li.set(c.pointerId,{x:c.clientX,y:c.clientY}),Qn&&Li.size>=2){let[D,X]=[...Li.values()],J=Math.hypot(D.x-X.x,D.y-X.y);G.distT=as(Qn.dist*Qn.d/Math.max(20,J),6,20),G.yawT=Qn.yaw-(Math.atan2(X.y-D.y,X.x-D.x)-Qn.ang);return}if(!je||je.id!==c.pointerId)return;let g=ba(c.clientX,c.clientY),b=g.x-je.sx,_=g.y-je.sy,I=Math.hypot(b,_);if(!je.moved&&I>10&&(je.moved=1,je.pickItem&&G.mode==="build"&&(hn(je.pickItem),je.dragItem=je.pickItem)),!!je.moved){if(je.btn===2||G.mode==="walk"||G.mode==="build"&&!je.dragItem){G.yawT=je.yaw0-b*.008,G.pitchT=as(je.pit0+_*.005,.3,1.25);return}if(G.mode==="build"&&je.dragItem){Br(je.dragItem,c.clientX,c.clientY);return}if(G.mode==="walk"){let X=Math.min(1,I/55)/Math.max(I,1e-6);G.joy={x:b*X,y:_*X},G.tgt=null,Ki.style.display="block",Ki.style.left=je.sx+"px",Ki.style.top=je.sy+"px",Ki.firstChild.style.transform=`translate(${G.joy.x*55}px,${G.joy.y*55}px)`}}});let hs=c=>{Li.delete(c.pointerId),Li.size<2&&(Qn=null),!(!je||je.id!==c.pointerId)&&(je.moved||x(c.clientX,c.clientY,je),je.dragItem&&Sf(),je=null,G.joy=null,Ki.style.display="none")};t.addEventListener("pointerup",hs),t.addEventListener("pointercancel",hs),t.addEventListener("wheel",c=>{c.preventDefault(),G.distT=as(G.distT+Math.sign(c.deltaY)*1.2,6,20)},{passive:!1});let wa=c=>{if(!document.contains(t)||/input|textarea/i.test(c.target&&c.target.tagName||""))return;let g=c.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(g)){if(g==="r"&&G.sel){Tf(),c.preventDefault();return}G.keys[g]=1,/^(arrow|w|a|s|d)/.test(g)&&(G.tgt=null),c.preventDefault()}},Oo=c=>{delete G.keys[c.key.toLowerCase()]};document.addEventListener("keydown",wa),document.addEventListener("keyup",Oo);function x(c,g){if(Ue.classList.contains("on"))return;if(G.mode==="build"){let D=zo(c,g);hn(D||null);return}let b=Fr(c,g);if(b){F(b);return}if(Cn){Hi.setFromCamera(Gi(c,g),f);let D=[];if(Cn.g.traverse(X=>{X.isMesh&&D.push(X)}),Hi.intersectObjects(D,!1).length){qn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),Cn.t=2,Cn.path=null;return}}if(Pi.length&&kr(c,g)){E(hi.x-1,hi.z+.9,Cf);return}if(Or(c,g)){E(hi.x,hi.z+1,Ol);return}let _=zo(c,g);if(_&&Ee[_.k].L==="top"){let D=j(_).map(X=>bn(X[0],X[1])).find(Boolean);D&&D.k==="register"&&(_=D)}if(_&&_.k==="register"){E(_.g.position.x,_.g.position.z+1.2,()=>Lt(_));return}if(_&&Ee[_.k].L!=="rug"){let D=_.g.position;vt(),ft(_),G.tgt=w(D.x,D.z);return}vt();let I=Ma(c,g);I&&(G.tgt={x:I.x,z:I.z})}function w(c,g){let b=null,_=1e9;for(let[I,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let X=c+I,J=g+D;if(me(X,J,J<bt?0:bt+1)){let Q=Math.hypot(X-k.x,J-k.z);Q<_&&(_=Q,b={x:X,z:J})}}return b}function E(c,g,b){vt();let _=w(c,g-1)||{x:c,z:g};G.tgt={x:_.x,z:_.z,fn:b},Math.hypot(k.x-_.x,k.z-_.z)<1.6&&(G.tgt=null,b())}function F(c){vt(!0),G.talk=c,c.kind2==="npc"&&(c.state="talk",c.t=0);let g=fn(c.d.name),b=fn(c.d.role||""),_="",I=Pr.chat,D="";if(c.kind2==="owner")I={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},_=r?`<p class="h3t mind">\uFF08${fn(n.owner&&n.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${fn(n.owner&&n.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,_+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(c.kind2==="vis")I={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},_=`<p class="h3t">\u300C${fn(c.v.msg||"\u2026\u2026")}\u300D</p>${c.v.gift&&Ee[c.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${fn(Ee[c.v.gift].n)}\u300D</p>`:""}`;else{let Et=K(c);I=Pr[Et.kind]||Pr.chat,_=`<p class="h3t${Et.kind==="mind"?" mind":""}">${Et.kind==="mind"?"\uFF08"+fn(Et.text)+"\uFF09":"\u300C"+fn(Et.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let X=c.kind2==="npc"?n.walk[c.d.spr]:c.kind2==="owner"&&n.owner&&n.owner.src||n.me.src;Ri.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${X}')"></div><div class="h3nm"><b>${g}</b><small>${b}</small></div><span class="h3k" style="background:${I.c}">${I.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${_}<div class="h3bt">${D}</div>`;let J=fr(),Q=cs(new N(c.x,c.h*.5,c.z));Ri.classList.toggle("r",Q.x-J.left<J.width/2),Ri.classList.add("on"),c.bub&&(c.bub.visible=!1)}function K(c){let g=Kt.filter(b=>_f[b.k]&&Math.hypot(b.g.position.x-c.x,b.g.position.z-c.z)<3.2);if(g.length&&Math.random()<.5){let b=g[Math.floor(Math.random()*g.length)];return{kind:"chat",text:_f[b.k]}}return(!c.deck||!c.deck.length)&&(c.deck=rn(c.d.lines.map(b=>({kind:b[0],text:b[1]})))),c.deck.pop()}function ft(c){let g=Ee[c.k];G.talk=null,Ri.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${g.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${fn(g.n)}</b><small>\u6EAB\u99A8\u5EA6 +${g.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${fn(_f[c.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,Ri.classList.remove("r"),Ri.classList.add("on")}function vt(c){Ri.classList.remove("on");let g=G.talk;G.talk=null,g&&g.kind2==="npc"&&g.state==="talk"&&(g.state="idle",g.t=ci(1,2.5))}function St(){if(!s||r)return 0;let c=i.today?i.today():Math.floor(Date.now()/864e5);return(a.cl?as(c-a.cl,0,3):1)*Mf(_a(Zi()))}function Lt(c){if(!s){qn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let g=St();if(g<=0){qn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=i.collect?i.collect(g):!1}catch{}if(!b){qn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}a.cl=i.today?i.today():Math.floor(Date.now()/864e5),Kn(),Mn(c),qn(`\u6536\u5230 ${hr(g)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let pt=new ni(new Zn({map:xe(128,128,c=>{c.fillStyle="#f2c230",c.strokeStyle="#8a5a10",c.lineWidth=8,c.beginPath(),c.arc(64,64,52,0,7),c.fill(),c.stroke(),c.fillStyle="#8a5a10",c.font=`900 64px ${Pn}`,c.textAlign="center",c.textBaseline="middle",c.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));pt.renderOrder=25,pt.scale.set(.55,.55,1),h.add(pt);let He=[];function Mn(c){for(let g=0;g<8;g++){let b=pt.clone();b.material=pt.material.clone(),b.position.copy(c.g.position).add(new N(0,1.4,0)),b.userData.v=new N(ci(-1.2,1.2),ci(2.5,4),ci(-1.2,1.2)),b.userData.t=0,h.add(b),He.push(b)}}function Di(c){if(G.mode=c,hn(null),vt(),G.tgt=null,Uo(),ws.classList.toggle("on",c==="build"),Vi.classList.toggle("on",c==="build"),c!=="build"&&(An.style.bottom=""),jn.style.display=c==="build"?"none":"",c==="build")Vi.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",mn(),G.distT=13.5;else{if(G.distT=G.inside?10.5:13,!me(k.x,k.z,k.z)){let g=we(k.z<bt).sort((b,_)=>Math.hypot(b[0]+.5-k.x,b[1]+.5-k.z)-Math.hypot(_[0]+.5-k.x,_[1]+.5-k.z)).find(b=>me(b[0]+.5,b[1]+.5,b[1]));g&&(k.x=g[0]+.5,k.z=g[1]+.5)}Kn()}}let xt=r?"liv":"tbl",Ne={},ut=null,he=null,ue=null;function $e(c){if(Ne[c])return Ne[c];try{if(!ut){ut=new ss(128,128),he=new Tr,he.add(new Cr(16774368,8413264,2.2));let ae=new Ir(16777215,1.4);ae.position.set(2,4,3),he.add(ae),ue=new On(30,1,.05,50)}let g=mf(c);he.add(g);let b=Ee[c],_=new Os().setFromObject(g),I=_.getCenter(new N),D=_.getSize(new N),J=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;ue.position.set(I.x+J*.55,I.y+J*.45,I.z+J*.7),ue.lookAt(I),b.L==="wall"&&(ue.position.set(I.x+J*.25,I.y+J*.1,I.z+J*.96),ue.lookAt(I)),l.setRenderTarget(ut),l.setClearColor(0,0),l.clear(),l.render(he,ue),l.setRenderTarget(null),l.setClearColor(1709366,1);let Q=new Uint8Array(16384*4);l.readRenderTargetPixels(ut,0,0,128,128,Q);let Et=document.createElement("canvas");Et.width=Et.height=128;let ke=Et.getContext("2d"),ge=ke.createImageData(128,128);for(let ae=0;ae<128;ae++)ge.data.set(Q.subarray((127-ae)*512,(128-ae)*512),ae*512);for(let ae=0;ae<ge.data.length;ae+=4)ge.data[ae]=yf[ge.data[ae]],ge.data[ae+1]=yf[ge.data[ae+1]],ge.data[ae+2]=yf[ge.data[ae+2]];return ke.putImageData(ge,0,0),he.remove(g),g.traverse(ae=>{ae.geometry&&ae.geometry.dispose()}),Ne[c]=Et.toDataURL()}catch{return Ne[c]=""}}function mn(){let c=i.coins?i.coins():0,g=(r?Ed:Td).map(([J,Q])=>`<button class="h3tab ${xt===J?"on":""}" type="button" data-h3="cat" data-k="${J}">${Q}</button>`).join("")+`<button class="h3tab ${xt==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${hr(c)}</span>`,b="";xt==="reno"?b=df.map(([J,Q,Et])=>{let ke=a.fo[J],ge=a.fl===J;return`<button class="h3it ${ge?"cur":""}" type="button" data-h3="floor" data-k="${J}"><span class="ph" style="background:url(${Ze("f",J)}) center/cover"></span>${fn(Q)}${ge?'<span class="pr">\u4F7F\u7528\u4E2D</span>':ke?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${hr(Et)}</span>`}</button>`}).join("")+pf.map(([J,Q,Et])=>{let ke=a.wo[J],ge=a.wa===J;return`<button class="h3it ${ge?"cur":""}" type="button" data-h3="wall" data-k="${J}"><span class="ph" style="background:url(${Ze("w",J)}) center/cover"></span>${fn(Q)}${ge?'<span class="pr">\u4F7F\u7528\u4E2D</span>':ke?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${hr(Et)}</span>`}</button>`}).join(""):b=ma.filter(J=>(r?J.hc===xt:J.cat===xt)&&!J.fixed).map(J=>{let Q=a.inv[J.k]||0,Et=$e(J.k);return`<button class="h3it ${!Q&&c<J.p?"no":""}" type="button" data-h3="item" data-k="${J.k}">${Q?`<span class="ow">\xD7${Q}</span>`:""}${Et?`<img src="${Et}" alt="">`:'<span class="ph"></span>'}${fn(J.n)}<span class="pr">${Q?"\u62FF\u51FA\u4F86\u64FA":hr(J.p)}</span></button>`}).join("");let _=ws.querySelector(".h3row"),I=_?_.scrollLeft:0,D=ws.dataset.cat===xt;ws.innerHTML=`<div class="h3tabs">${g}</div><div class="h3row">${b}</div>`,ws.dataset.cat=xt,D&&(ws.querySelector(".h3row").scrollLeft=I);let X=ws.offsetHeight||150;An.style.bottom=X+8+"px",Ci.style.bottom=X+8+"px"}let gn={};function Ze(c,g){let b=c+g;if(gn[b])return gn[b];let _;return c==="f"?_=(R[g]||R.wood)().image:_=H(g,2).image,gn[b]=_.toDataURL()}function hn(c){if(G.sel&&G.sel!==c&&(G.sel.ok||Ln(G.sel)),G.sel=c,wn.visible=!!c,Ci.classList.toggle("on",!!c),c){c.last={x:c.x,z:c.z,r:c.r},c.ok=!0;let g=Ee[c.k];Ci.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${g.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${g.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,bi()}}function Ln(c){if(!c.last)return;let g=c.last.x-c.x,b=c.last.z-c.z,_=Ee[c.k].sf?$i(c):[];c.x=c.last.x,c.z=c.last.z,c.r=c.last.r,Gn(c),_.forEach(I=>{I.x+=g,I.z+=b,Gn(I)}),c.ok=!0,bi()}let fs=xe(64,64,c=>{c.strokeStyle="#fff",c.lineWidth=6,c.strokeRect(3,3,58,58)}),wn=new ct(new Ge(1,1),new Ve({map:fs,transparent:!0,depthWrite:!1,color:"#6aff8a"}));wn.rotation.x=-Math.PI/2,wn.visible=!1,wn.renderOrder=5,h.add(wn);let di=new ct(new Ge(1,1),new Ve({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));di.rotation.x=-Math.PI/2,wn.add(di),di.rotation.x=0,di.position.z=-.001;function bi(){let c=G.sel;if(!c)return;let g=Ee[c.k],b=ve(c,c);c.ok=b;let _=b?"#6aff8a":"#ff5a4a";if(wn.material.color.set(_),di.material.color.set(_),g.L==="wall"){let[D,,X]=En(c),J=Bt(c.r);wn.scale.set(g.w,.6,1),wn.position.set(D+(J==="left"?.35:J==="right"?-.35:0),.03,X+(J==="back"?.35:J==="front"?-.35:0)),wn.rotation.z=J==="left"||J==="right"?Math.PI/2:0}else{let[D,X]=ht(g,c.r),[J,Q,Et]=En(c);wn.scale.set(D,X,1),wn.rotation.z=0,wn.position.set(J,Q+.03,Et)}let I=Ci.querySelector('[data-h3="ok"]');I&&(I.disabled=!b)}function Br(c,g,b){let _=Ma(g,b);if(!_)return;let I=Ee[c.k],D=c.x,X=c.z;if(I.L==="wall"){let J=[[_.z,0],[_.x,1],[ye-_.x,3],[bt-_.z,2]].filter(Q=>!G.low[Bt(Q[1])]).sort((Q,Et)=>Q[0]-Et[0]);if(!J.length)return;c.r=J[0][1],c.r===0||c.r===2?(c.x=as(Math.round(_.x-I.w/2),0,ye-I.w),c.z=c.r===0?0:bt-1):(c.z=as(Math.round(_.z-I.w/2),0,bt-I.w),c.x=c.r===1?0:ye-1)}else{let[J,Q]=ht(I,c.r);c.x=Math.round(_.x-J/2),c.z=Math.round(_.z-Q/2)}(c.x!==D||c.z!==X||I.L==="wall")&&(I.sf&&Dd(c,D,X),Gn(c),bi())}function Dd(c,g,b){let _={x:g,z:b,r:c.r,k:c.k},I=j(_);Kt.filter(D=>Ee[D.k].L==="top"&&j(D).some(X=>I.some(J=>J[0]===X[0]&&J[1]===X[1]))).forEach(D=>{D.x+=c.x-g,D.z+=c.z-b,Gn(D)})}function Sf(){G.sel&&(bi(),Kt.filter(c=>Ee[c.k].L==="top").forEach(Gn))}function Tf(){let c=G.sel;if(!c||Ee[c.k].L==="wall")return;let g=Ee[c.k].sf?$i(c):[];g.length&&(g.forEach(b=>{cn(b),a.inv[b.k]=(a.inv[b.k]||0)+1}),qn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),c.r=(c.r+1)%4,Gn(c),bi()}function Ud(){let c=G.sel;if(!c||Ee[c.k].fixed)return;(Ee[c.k].sf?$i(c):[]).forEach(b=>{cn(b),a.inv[b.k]=(a.inv[b.k]||0)+1}),G.sel=null,cn(c),a.inv[c.k]=(a.inv[c.k]||0)+1,wn.visible=!1,Ci.classList.remove("on"),_n(),Kn(),mn()}function Nd(){let c=G.sel;if(c){if(!ve(c,c)){qn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}c.last=null,G.sel=null,wn.visible=!1,Ci.classList.remove("on"),_n(),Kn()}}function Ef(c){let g=Ee[c],b={k:c,x:0,z:0,r:0},_=G.cam.x,I=G.cam.z,D=null,X=1e9;if(g.L==="wall")for(let J of[0,1,3,2].filter(Q=>!G.low[Bt(Q)]))for(let Q=0;Q<10;Q++){let Et={k:c,r:J,x:J===0||J===2?Q:J===1?0:ye-1,z:J===1||J===3?Q:J===0?0:bt-1};if(Re(Et)){let[ke,,ge]=En(Et),ae=Math.hypot(ke-_,ge-I);ae<X&&(X=ae,D=Et)}}else for(let J=0;J<vf;J++)for(let Q=Cd;Q<Id;Q++){let Et={k:c,x:Q,z:J,r:0};if(!ve(Et))continue;let[ke,,ge]=En(Et),ae=$(Q,J),Je=Math.hypot(ke-_,ge-I)+(ae===G.inside?0:6)+(g.L==="top"&&!bn(Q,J)?1.5:0);Je<X&&(X=Je,D=Et)}D?Object.assign(b,D):(b.x=1,b.z=1),Hs(b,!0),a.inv[c]--,a.inv[c]||delete a.inv[c],hn(b),D||bi(),_n(),Kn(),mn()}function zl(c,g,b,_,I){let D=i.coins?i.coins():0;Ue.innerHTML=`<h3>\u8CB7\u4E0B\u300C${fn(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${hr(_)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${hr(D)}</b></p>${D<_?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<_?"disabled":""}>\u8CB7\u4E0B</button></div>`,Ue.classList.add("on"),Ue._buy=()=>{let X=!1;try{X=i.buy?i.buy(_,b):!1}catch{}if(!X){qn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}Ue.classList.remove("on"),I()}}let Ui=null,Fl=!1;function Af(c){return Ui&&!c?Promise.resolve(Ui):i.msgs?Promise.resolve(i.msgs()).then(g=>(Ui=(g||[]).slice().sort((b,_)=>(_.t||0)-(b.t||0)),Fl=!1,Ui),()=>(Fl=!0,Ui=[],Ui)):(Ui=[],Promise.resolve(Ui))}let ko="";function Ol(){vt(),Ue.innerHTML=`<h3>\u{1F4DC} ${fn(a.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,Ue.classList.add("on"),Af(!0).then(c=>{if(!Ue.classList.contains("on"))return;let g=c.slice(0,30).map(_=>`<div class="msg"><b>${fn(_.name||"\u73A9\u5BB6")}</b><small>${_.t?new Date(_.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${_.gift&&Ee[_.gift]?` <small>\u{1F381} ${fn(Ee[_.gift].n)}</small>`:""}<br>${fn(_.msg||"")}</div>`).join("")||`<p style="opacity:.7">${Fl?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let _=r?0:c.filter(I=>I.gift&&Ee[I.gift]&&!a.gc[I.id]).length;b=`<div class="h3bt">${_?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${_} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let _=i.giftSent?i.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${n.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${_?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...A_].map(I=>`<button type="button" data-h3="gpick" data-k="${I}" class="${ko===I?"on":""}">${I?fn(Ee[I].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}Ue.innerHTML=`<h3>\u{1F4DC} ${fn(a.name)} \u7684\u7559\u8A00\u677F</h3>${g}${b}`})}function zd(){if(n.demo){qn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),Ue.classList.remove("on");return}let c=Ue.querySelector("#h3msg"),g=(c&&c.value||"").trim().slice(0,60);if(g.length<1){qn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=i.giftSent&&i.giftSent()?"":ko,_=Ue.querySelector('[data-h3="post"]');_&&(_.disabled=!0),Promise.resolve(i.post?i.post({msg:g,gift:b}):null).then(()=>{qn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),ko="",Ui=null,Ue.classList.remove("on")},()=>{qn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),_&&(_.disabled=!1)})}function Rf(){if(Gs.forEach(g=>h.remove(g)),Gs.length=0,Pi.length=0,!s||!Ui)return;let c=Ui.filter(g=>g.gift&&Ee[g.gift]&&!a.gc[g.id]);c.slice(0,5).forEach((g,b)=>{let _=new _e;_.position.set(hi.x-1.1-b%3*.55,0,hi.z+.4+Math.floor(b/3)*.5),h.add(_);let I=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=B(.42,.36,.42,Gt(I),0,.18,0,_);B(.44,.38,.08,Gt("#fff3d6"),0,.18,0,_),B(.08,.38,.44,Gt("#fff3d6"),0,.18,0,_);let X=B(.46,.08,.46,Gt(I),0,.4,0,_),J=new ct(new ii(.08,10,8),Gt("#fff3d6"));J.position.y=.48,J.scale.set(1.6,.8,1),_.add(J),_.traverse(Q=>{Q.isMesh&&Pi.push(Q)}),Gs.push(_),_.userData.ph=b}),c.length&&qn(n.island?`\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF01`)}function Cf(){if(!s||!Ui)return;let c=Ui.filter(g=>g.gift&&Ee[g.gift]&&!a.gc[g.id]);c.length&&(c.forEach(g=>{a.inv[g.gift]=(a.inv[g.gift]||0)+1,a.gc[g.id]=1}),Kn(),Rf(),Ue.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${c.map(g=>`<div class="msg"><b>${fn(g.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${fn(Ee[g.gift].n)}\u300D<br>${fn(g.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,Ue.classList.add("on"))}function Fd(){vt(),Ue.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${fn(a.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,Ue.classList.add("on")}let If=c=>{let g=c.target.closest("[data-h3]");if(!g||!e.contains(g)||g.disabled)return;let b=g.dataset.h3,_=g.dataset.k;if(b==="close")vt();else if(b==="more"&&G.talk)F(G.talk);else if(b==="build")Di("build");else if(b==="done")Di("walk");else if(b==="rename")Fd();else if(b==="nameok"){let I=(Ue.querySelector("#h3name").value||"").trim().slice(0,12);I&&(a.name=I,_t(),Kn()),Ue.classList.remove("on")}else if(b==="board"){if(G.mode!=="walk")return;n.island?Ol():E(hi.x,hi.z+1,Ol)}else if(b==="claim")Cf();else if(b==="exit"){if(n.island){G.exited=!0;try{i.exit&&i.exit()}catch{}}}else if(b==="pclose")Ue.classList.remove("on");else if(b==="post")zd();else if(b==="gpick")ko=_||"",Ue.querySelectorAll('[data-h3="gpick"]').forEach(I=>I.classList.toggle("on",(I.dataset.k||"")===ko));else if(b==="buyok"&&Ue._buy)Ue._buy();else if(b==="cat")xt=_,mn();else if(b==="item"){let I=Ee[_];G.sel&&!G.sel.ok&&Ln(G.sel),hn(null),a.inv[_]?Ef(_):zl("item",_,I.n,I.p,()=>{a.inv[_]=(a.inv[_]||0)+1,Ef(_)})}else if(b==="floor"){let I=df.find(X=>X[0]===_),D=()=>{a.fo[_]=1,a.fl=_,lt(_),Kn(),mn()};a.fo[_]?D():zl("floor",_,I[1],I[2],D)}else if(b==="wall"){let I=pf.find(X=>X[0]===_),D=()=>{a.wo[_]=1,a.wa=_,fe(_),Kn(),mn()};a.wo[_]?D():zl("wall",_,I[1],I[2],D)}else b==="rot"?Tf():b==="store"?Ud():b==="ok"&&Nd()};e.addEventListener("click",If),Af().then(c=>{if(!G.dead&&s&&!r){Rf();let g={};c.filter(b=>b.name&&!g[b.from||b.name]&&(g[b.from||b.name]=1)).slice(0,3).forEach(We)}});let Od={get dead(){return G.dead},set dead(c){c&&kl()},cv:t,dispose:kl,data:()=>JSON.parse(JSON.stringify(Zi())),probe(){let c=g=>{let b=cs(g);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:G.mode,inside:G.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+k.x.toFixed(2),z:+k.z.toFixed(2)},yaw:+G.yaw.toFixed(2),sel:G.sel?{k:G.sel.k,x:G.sel.x,z:G.sel.z,r:G.sel.r,ok:G.sel.ok}:null,items:Kt.map(g=>Object.assign({k:g.k,x:g.x,z:g.z,r:g.r},c(new N(g.g.position.x,g.g.position.y+.4,g.g.position.z)))),npcs:Qt.filter(g=>!g.hidden).map(g=>Object.assign({id:g.d.id||g.kind2,kind:g.kind2,state:g.state},c(new N(g.x,g.h*.5,g.z)))),board:c(new N(hi.x,1.15,hi.z)),gifts:Gs.length,card:Ri.classList.contains("on")?Ri.textContent:"",pan:Ue.classList.contains("on")?Ue.textContent:"",cozy:_a(Zi()),inv:Object.assign({},a.inv),name:a.name,fl:a.fl,wa:a.wa,tag:k.tag?k.tag.visible:!1,cellPx:(g,b)=>c(new N(g,0,b))}},px(c,g,b){let _=cs(new N(c,g,b));return{x:Math.round(_.x),y:Math.round(_.y)}},teleport(c,g){k.x=c,k.z=g,G.inside=g<bt},setYaw(c){G.yaw=G.yawT=c},setDist(c){G.dist=G.distT=c}};function kl(){if(!G.dead){if(G.dead=!0,cancelAnimationFrame(G.raf),clearTimeout(Ei),s)try{Zi(),i.save&&i.save(a,!0)}catch{}document.removeEventListener("keydown",wa),document.removeEventListener("keyup",Oo),e.removeEventListener("click",If),zn.forEach(c=>c.remove()),h.traverse(c=>{c.geometry&&c.geometry.dispose(),(c.material?Array.isArray(c.material)?c.material:[c.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),ut&&ut.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let Sa=0,Ta=0,Pf=0,Ss=1,Ea=0,Bl=0,Lf=9,Bo=new N,ji=new N,Ts=new N;function kd(c){return Math.round(as(1.75-(c-380)/440*.6,1.15,1.75)*20)/20}function Bd(){let c=t.getBoundingClientRect(),g=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),_=Math.min(2,window.devicePixelRatio||1),I=kd(c.height||b);I!==Ji&&(Ji=I,fi.forEach(D=>{D.h=D.h0*Ji,D.w=D.h*D.ar})),!(g===Sa&&b===Ta&&_===Pf)&&(Sa=g,Ta=b,Pf=_,Ss=as(c.width*_/g,.5,2.2),Ss=Math.min(Ss,Lf,Math.sqrt(14e5/(g*b))),l.setPixelRatio(Ss),l.setSize(g,b,!1),f.aspect=g/b,f.updateProjectionMatrix())}function Df(c,g){if(!c.path||!c.path.length)return!0;let[b,_]=c.path[0],I=b-c.x,D=_-c.z,X=Math.hypot(I,D),J=c.sp;if(X<.06)return c.path.shift(),!c.path.length;let Q=Math.min(X,J*g);c.x+=I/X*Q,c.z+=D/X*Q,c.moving=!0,c.ph+=g*(4+J*3.2);let Et=I*ji.x+D*ji.z;return Math.abs(Et)>.05&&(c.face=Et>0?1:-1),!1}function Uf(c){if(G.dead)return;if(!document.contains(t)){kl();return}G.raf=requestAnimationFrame(Uf);let g=Math.min(.1,(c-G.last)/1e3);G.last=c,G.t+=g;let b=G.t;Bd(),Ea+=g,Bl++,Ea>1.2&&(Ea/Bl>.028&&Ss>.55&&(Ss=Math.max(.55,Ss*.85),Lf=Ss,l.setPixelRatio(Ss),l.setSize(Sa,Ta,!1)),Ea=0,Bl=0);let _=G.keys;_.q&&(G.yawT+=g*1.8),_.e&&(G.yawT-=g*1.8),G.camV&&(G.yawT+=G.camV*g*1.8),G.yaw+=(G.yawT-G.yaw)*Math.min(1,g*8),G.pitch+=(G.pitchT-G.pitch)*Math.min(1,g*8),G.dist+=(G.distT-G.dist)*Math.min(1,g*5);let I=Math.sin(G.yaw),D=Math.cos(G.yaw);if(Bo.set(-I,0,-D),ji.set(D,0,-I),k.moving=!1,G.mode==="walk"&&!Ue.classList.contains("on")){let Z=0,le=0,Te=0,Xe=1e9;if(G.joy)Z=ji.x*G.joy.x+Bo.x*-G.joy.y,le=ji.z*G.joy.x+Bo.z*-G.joy.y,Te=Math.hypot(G.joy.x,G.joy.y);else{let on=(_.arrowright||_.d?1:0)-(_.arrowleft||_.a?1:0),qe=(_.arrowup||_.w?1:0)-(_.arrowdown||_.s?1:0);if(on||qe){let an=Math.hypot(on,qe);Z=(ji.x*on+Bo.x*qe)/an,le=(ji.z*on+Bo.z*qe)/an,Te=1}else if(G.tgt){if(!G.tgt.path){let vn=jt(k.x,k.z,Math.floor(G.tgt.x),Math.floor(G.tgt.z));G.tgt.path=vn?vn.slice(1):[],vn?G.tgt.path.length?G.tgt.path[G.tgt.path.length-1]=[G.tgt.x,G.tgt.z]:G.tgt.path=[[G.tgt.x,G.tgt.z]]:G.tgt.path=[[G.tgt.x,G.tgt.z]]}let an=G.tgt.path[0];if(an){let vn=an[0]-k.x,Mi=an[1]-k.z,Ni=Math.hypot(vn,Mi);if(Ni<.12){if(G.tgt.path.shift(),!G.tgt.path.length){let us=G.tgt.fn;G.tgt=null,us&&us()}}else Z=vn/Ni,le=Mi/Ni,Te=1,Xe=Ni}else{let vn=G.tgt.fn;G.tgt=null,vn&&vn()}}}if(Te>.05){let on=Math.hypot(Z,le)||1,qe=4*Math.min(1,Te),an=Math.min(qe*g,Xe),vn=Z/on*an,Mi=le/on*an,Ni=!1;if(me(k.x+vn,k.z+Mi,k.z)?(k.x+=vn,k.z+=Mi,Ni=!0):me(k.x+vn,k.z,k.z)?(k.x+=vn,Ni=!0):me(k.x,k.z+Mi,k.z)&&(k.z+=Mi,Ni=!0),!Ni&&G.tgt&&(G.tgt.stuck=(G.tgt.stuck||0)+g,G.tgt.stuck>.6)){let us=G.tgt.fn;G.tgt=null,us&&Math.hypot(k.x-hi.x,k.z-hi.z)<3&&us()}if(Ni){k.moving=!0,k.ph+=g*9*Math.min(1,Te);let us=Z/on*ji.x+le/on*ji.z;Math.abs(us)>.2&&(k.face=us>0?1:-1)}G.talk&&Math.hypot(G.talk.x-k.x,G.talk.z-k.z)>6&&vt()}}if(n.island&&!G.exited&&k.z>bt+.5&&G.mode==="walk"){G.exited=!0;try{i.exit&&i.exit()}catch{}return}if(o){let Z=G.mode==="walk"&&!G.exited&&k.z>bt-2&&Math.abs(k.x-Bi)<2;if(Ii.classList.toggle("on",Z),Z){let le=cs(new N(Bi,G.low&&G.low.front?.5:2.7,bt-.15)),Te=fr();Ii.style.left=le.x-Te.left+"px",Ii.style.top=le.y-Te.top+"px"}}let X=G.inside;G.inside=k.z<bt-.05,X!==G.inside&&G.mode==="walk"&&(G.distT=G.inside?10.5:13,Xn.textContent=G.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${a.name}\u300D`:"\u5E97\u5916",Xn.classList.add("on"),clearTimeout(Xn.t),Xn.t=setTimeout(()=>Xn.classList.remove("on"),1800));for(let Z of Qt){if(Z.moving=!1,Z.kind2==="owner")continue;if(Z.state==="talk"){Z.face=(k.x-Z.x)*ji.x+(k.z-Z.z)*ji.z>0?1:-1;continue}if(Z.state==="out"){if(Z.t-=g,Z.t<=0){let qe=Math.random()<.5;Z.x=qe?bs+4:Ms-4,Z.z=bt+ci(3.5,5.5),Z.hidden=!1,Z.alpha=0,Z.stops=2+Math.floor(Math.random()*3);let an=Ce(Z);(!an||!Wn(Z,an[0],an[1]))&&(Z.hidden=!0,Z.t=3)}continue}if(Z.alpha=Math.min(1,(Z.alpha||0)+g*2),Z.state==="walk")Df(Z,g)&&(Z.state="idle",Z.t=ci(3,7));else if(Z.state==="idle"){if(Z.t-=g,Z.t<=0)if(Z.stops--,Z.stops<=0){let qe=Math.random()<.5?bs+1:Ms-2;Wn(Z,qe,bt+4)?Z.state="leave":Z.t=2}else{let qe=Ce(Z);(!qe||!Wn(Z,qe[0],qe[1]))&&(Z.t=2)}}else Z.state==="leave"&&(Df(Z,g)?(Z.hidden=!0,Z.state="out",Z.t=ci(4,12)):(Z.x<bs+3||Z.x>Ms-3)&&(Z.alpha=Math.max(0,Math.min(Z.alpha,Math.min(Z.x-bs,Ms-Z.x)/3))));let le=Z.x-k.x,Te=Z.z-k.z,Xe=Math.hypot(le,Te),on=.55;if(Xe<on&&Xe>.001&&Z.state!=="walk"&&Z.state!=="leave"){let qe=Z.x+le/Xe*(on-Xe),an=Z.z+Te/Xe*(on-Xe);me(qe,an,Z.z)&&(Z.x=qe,Z.z=an)}}if(Cn){let Z=Cn;Z.t-=g;let le=!1;if(Z.path&&Z.path.length){let[Xe,on]=Z.path[0],qe=Xe-Z.x,an=on-Z.z,vn=Math.hypot(qe,an);if(vn<.05)Z.path.shift();else{let Mi=Math.min(vn,1.1*g);Z.x+=qe/vn*Mi,Z.z+=an/vn*Mi,Z.g.rotation.y=Math.atan2(-an,qe),le=!0}Z.path.length||(Z.t=ci(3,8))}else if(Z.t<=0){let Xe=we(!0),on=Xe[Math.floor(Math.random()*Xe.length)],qe=Kt.find(Mi=>Mi.k==="catbed"),an=qe&&Math.random()<.35?[qe.x,qe.z]:on,vn=an&&jt(Z.x,Z.z,an[0],an[1]);vn&&vn.length?(Z.path=vn,Z.sleep=!1):Z.t=3,qe&&an&&an[0]===qe.x&&an[1]===qe.z&&(Z.sleep=!0)}Z.ph+=g*(le?12:0),Z.legs.forEach((Xe,on)=>{Xe.rotation.z=le?Math.sin(Z.ph+on*Math.PI)*.5:0}),Z.tail.rotation.z=.8+Math.sin(b*2)*.25;let Te=!le&&Z.sleep&&Kt.some(Xe=>Xe.k==="catbed"&&Math.hypot(Xe.g.position.x-Z.x,Xe.g.position.z-Z.z)<.4);Z.g.position.set(Z.x,Te?.1:0,Z.z),Z.g.scale.y=Te?.75+Math.sin(b*1.5)*.03:1}let J=k.x,Q=k.z,Et=1.1;G.mode==="build"&&(G.inside?(J=ye/2+I*2.2,Q=bt/2+D*2.2):(J=Bi+I*2,Q=bt+2.5+D*2),Et=.4),G.cam.x+=(J-G.cam.x)*Math.min(1,g*(G.mode==="build"?4:12)),G.cam.z+=(Q-G.cam.z)*Math.min(1,g*(G.mode==="build"?4:12)),G.cam.y+=(Et-G.cam.y)*Math.min(1,g*4);let ke=Sa/Ta,ge=ke<1.45?1.45/ke:1,ae=G.dist*ge,Je=G.mode==="build"?Math.max(.75,G.pitch):G.pitch;Ts.set(G.cam.x+I*Math.cos(Je)*ae,G.cam.y+Math.sin(Je)*ae,G.cam.z+D*Math.cos(Je)*ae),f.position.copy(Ts),f.lookAt(G.cam.x,G.cam.y+.5,G.cam.z),v.position.copy(Ts);let Sn=G.inside||G.mode==="build"&&G.inside;It.visible=!Sn;let pi=G.low={back:Sn&&Ts.z<0,front:Sn&&Ts.z>bt,left:Sn&&Ts.x<0,right:Sn&&Ts.x>ye};for(let Z in Ae){let le=pi[Z];for(let Te of Ae[Z]){let Xe=le?.14:1;Te.scale.y+=(Xe-Te.scale.y)*Math.min(1,g*10)}}for(let Z of Kt)if(Ee[Z.k].L==="wall"){let le=Bt(Z.r);Z.g.visible=!pi[le]||!Sn}ce.visible=!pi.front;for(let Z of U)Z.visible=!(Sn&&(pi.left&&Z.position.x<0||pi.right&&Z.position.x>ye));C.intensity=M.intensity=Sn?14:6;let Vl=Math.atan2(Ts.x-G.cam.x,Ts.z-G.cam.z);for(let Z of fi){let le=!Z.hidden,Te=!Sn&&Z.z<bt;if(Z.grp.visible=le,Z.sh.visible=le,Z.tag&&(Z.tag.visible=le&&!Te),Z.bub&&(Z.bub.visible=le&&!Te&&Z!==G.talk&&Z.state!=="leave"),!le)continue;let Xe=Z.w,on=Z.h,qe=Z.moving?1:0,an=Math.sin(Z.ph),vn=qe?Math.abs(an)*.06:0,Mi=qe?an*.06:Math.sin(b*1.6+Z.ph)*.01,Ni=qe?1+Math.cos(Z.ph*2)*.025:1+Math.sin(b*1.6+Z.ph)*.008,us=Z.state==="sleep"?Math.sin(b*1.2)*.015:0;Z.grp.position.set(Z.x,vn,Z.z),Z.m.rotation.set(0,Vl,Mi*Z.face+us),Z.m.scale.set(Xe*Z.face*(2-Ni),on*Ni,1),Z.mat.opacity=Z.alpha==null?1:Z.alpha,Z.sh.position.set(Z.x,.025,Z.z),Z.sh.scale.set(Xe*.7,Xe*.4,1),Z.tag&&(Z.tag.position.set(Z.x,on+.3,Z.z),Z.tag.material.opacity=Z.alpha==null?1:Z.alpha),Z.bub&&Z.bub.position.set(Z.x,on+(Z.tag?.82:.45)+Math.sin(b*2.3+Z.ph)*.06,Z.z)}Fe.rotation.x=Math.sin(b*1.7)*.05;for(let Z of Nt)Z.material.opacity=.45+.12*Math.sin(b*6);for(let Z of tt)Z.material.opacity=.5+.05*Math.sin(b*3+Z.parent.position.x);for(let Z of Kt){let le=Z.g.userData;if(le.glows)for(let Te of le.glows)Te.material.opacity=(Te.userData.o0||(Te.userData.o0=Te.material.opacity))*(.85+.15*Math.sin(b*5+Z.x*1.7));if(le.swing&&(le.swing.rotation.z=Math.sin(b*1.5+Z.x)*.06),le.wave&&(le.wave.rotation.x=-.6+Math.sin(b*4)*.5),le.fish&&le.fish.forEach((Te,Xe)=>{let on=b*(.6+Xe*.2)+Xe*2;Te.position.x=Math.cos(on)*.2,Te.position.z=Math.sin(on)*.12,Te.rotation.y=-on+Math.PI/2*(Xe%2?1:-1)}),le.spin&&(le.spin.rotation.y=b*3),le.hands){let Te=new Date;le.hands[0].rotation.z=-(Te.getHours()%12+Te.getMinutes()/60)/12*Math.PI*2,le.hands[1].rotation.z=-Te.getMinutes()/60*Math.PI*2,le.hands.forEach(Xe=>{let on=Xe.rotation.z,qe=Xe.geometry.parameters.height/2;Xe.position.x=-Math.sin(on)*qe,Xe.position.y=le.handY+Math.cos(on)*qe})}}for(let Z of Gs)Z.position.y=Math.abs(Math.sin(b*3+Z.userData.ph))*.12;{let Z=pe.geometry.attributes.position.array;for(let le=0;le<Pe;le++){let Te=Zt[le];Z[le*3]+=(Te.vx+Math.sin(b*1.5+Te.ph)*.3)*g,Z[le*3+1]+=Te.vy*g,Z[le*3+2]+=Math.cos(b*1.2+Te.ph)*.2*g,Z[le*3+1]<.02&&Jt(le)}pe.geometry.attributes.position.needsUpdate=!0}Vt.children[1].rotation.z=Math.sin(b*.8)*.08,Vt.children[4].rotation.y=Math.sin(b*2)*.4;{let Z=s?Kt.find(Te=>Te.k==="register"):null,le=Z?St():0;pt.visible=!!(Z&&le>0&&G.mode==="walk"&&G.inside),pt.visible&&(pt.position.set(Z.g.position.x,1.75+Math.sin(b*3)*.1,Z.g.position.z),pt.material.rotation=0,pt.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let Z=He.length-1;Z>=0;Z--){let le=He[Z],Te=le.userData;Te.t+=g,Te.v.y-=9*g,le.position.addScaledVector(Te.v,g),le.material.opacity=Math.max(0,1-Te.t/1.1),Te.t>1.1&&(h.remove(le),le.material.dispose(),He.splice(Z,1))}G.sel&&(wn.material.opacity=.7+.3*Math.sin(b*6)),l.render(h,f)}return G.raf=requestAnimationFrame(Uf),Od}return qd(I_);})();
