var Home3D=(()=>{var ec=Object.defineProperty;var Zd=Object.getOwnPropertyDescriptor;var Jd=Object.getOwnPropertyNames;var Kd=Object.prototype.hasOwnProperty;var jd=(n,t)=>{for(var e in t)ec(n,e,{get:t[e],enumerable:!0})},Qd=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Jd(t))!Kd.call(n,s)&&s!==e&&ec(n,s,{get:()=>t[s],enumerable:!(i=Zd(t,s))||i.enumerable});return n};var tp=n=>Qd(ec({},"__esModule",{value:!0}),n);var F1={};jd(F1,{D0:()=>Mi,D1:()=>wi,DX:()=>Si,EXO:()=>ji,H3CSS:()=>N1,RD:()=>Mt,RW:()=>fe,SIZES:()=>Ia,STARS:()=>Of,WH:()=>Wn,cozyOf:()=>Ra,dailyIncome:()=>Ff,defaultEx:()=>If,demoHome:()=>D1,freshHome:()=>Hd,freshHomeInterior:()=>L1,island:()=>kd,starsOf:()=>zf,start:()=>z1});var ep=0,Yf=1,np=2;var rd=1,uf=2,Os=3,dr=0,Jn=1,Rn=2,hr=0,xo=1,ws=2,$f=3,Zf=4,ip=5,Lr=100,sp=101,rp=102,op=103,ap=104,lp=200,cp=201,hp=202,fp=203,Oc=204,kc=205,up=206,dp=207,pp=208,mp=209,gp=210,xp=211,yp=212,_p=213,vp=214,Bc=0,Vc=1,Hc=2,bo=3,Gc=4,Wc=5,Xc=6,qc=7,df=0,bp=1,Mp=2,fr=0,wp=1,Sp=2,Tp=3,Ep=4,Ap=5,Rp=6,Cp=7;var od=300,Mo=301,wo=302,Yc=303,$c=304,Bl=306,Gs=1e3,Ur=1001,Zc=1002,as=1003,Ip=1004;var Fa=1005;var Ms=1006,nc=1007;var Nr=1008;var Ws=1009,ad=1010,ld=1011,ca=1012,pf=1013,zr=1014,ks=1015,Ma=1016,mf=1017,gf=1018,So=1020,cd=35902,hd=1021,fd=1022,os=1023,ud=1024,dd=1025,yo=1026,To=1027,pd=1028,xf=1029,md=1030,yf=1031;var _f=1033,dl=33776,pl=33777,ml=33778,gl=33779,Jc=35840,Kc=35841,jc=35842,Qc=35843,th=36196,eh=37492,nh=37496,ih=37808,sh=37809,rh=37810,oh=37811,ah=37812,lh=37813,ch=37814,hh=37815,fh=37816,uh=37817,dh=37818,ph=37819,mh=37820,gh=37821,xl=36492,xh=36494,yh=36495,gd=36283,_h=36284,vh=36285,bh=36286;var yl=2300,Mh=2301,ic=2302,Jf=2400,Kf=2401,jf=2402;var Pp=3200,Lp=3201;var xd=0,Dp=1,lr="",kn="srgb",Oo="srgb-linear",Vl="linear",yn="srgb";var Jr=7680;var Qf=519,Up=512,Np=513,zp=514,yd=515,Fp=516,Op=517,kp=518,Bp=519,wh=35044;var tu="300 es",Bs=2e3,_l=2001,pr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sc=Math.PI/180,Sh=180/Math.PI;function Vs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pi[n&255]+pi[n>>8&255]+pi[n>>16&255]+pi[n>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[e&63|128]+pi[e>>8&255]+"-"+pi[e>>16&255]+pi[e>>24&255]+pi[i&255]+pi[i>>8&255]+pi[i>>16&255]+pi[i>>24&255]).toLowerCase()}function ai(n,t,e){return Math.max(t,Math.min(e,n))}function Vp(n,t){return(n%t+t)%t}function rc(n,t,e){return(1-e)*n+e*t}function bs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var At=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ai(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],f=i[4],u=i[7],p=i[2],d=i[5],v=i[8],E=s[0],y=s[3],m=s[6],S=s[1],I=s[4],w=s[7],q=s[2],F=s[5],V=s[8];return r[0]=o*E+a*S+l*q,r[3]=o*y+a*I+l*F,r[6]=o*m+a*w+l*V,r[1]=h*E+f*S+u*q,r[4]=h*y+f*I+u*F,r[7]=h*m+f*w+u*V,r[2]=p*E+d*S+v*q,r[5]=p*y+d*I+v*F,r[8]=p*m+d*w+v*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8];return e*o*f-e*a*h-i*r*f+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],u=f*o-a*h,p=a*l-f*r,d=h*r-o*l,v=e*u+i*p+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/v;return t[0]=u*E,t[1]=(s*h-f*i)*E,t[2]=(a*i-s*o)*E,t[3]=p*E,t[4]=(f*e-s*l)*E,t[5]=(s*r-a*e)*E,t[6]=d*E,t[7]=(i*l-h*e)*E,t[8]=(o*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oc.makeScale(t,e)),this}rotate(t){return this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oc=new Fe;function _d(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hp(){let n=ha("canvas");return n.style.display="block",n}var eu={};function sa(n){n in eu||(eu[n]=!0,console.warn(n))}function Gp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Wp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var en={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===yn&&(n.r=Hs(n.r),n.g=Hs(n.g),n.b=Hs(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===yn&&(n.r=_o(n.r),n.g=_o(n.g),n.b=_o(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===lr?Vl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var nu=[.64,.33,.3,.6,.15,.06],iu=[.2126,.7152,.0722],su=[.3127,.329],ru=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);en.define({[Oo]:{primaries:nu,whitePoint:su,transfer:Vl,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:iu,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:nu,whitePoint:su,transfer:yn,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:iu,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}});var Kr,Th=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kr===void 0&&(Kr=ha("canvas")),Kr.width=t.width,Kr.height=t.height;let i=Kr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ha("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hs(e[i]/255)*255):e[i]=Hs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qp=0,vl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ac(s[o].image)):r.push(ac(s[o]))}else r=ac(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ac(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Th.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yp=0,Ri=class n extends pr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ur,s=Ur,r=Ms,o=Nr,a=os,l=Ws,h=n.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Vs(),this.name="",this.source=new vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case Zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case Zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=od;Ri.DEFAULT_ANISOTROPY=1;var vn=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],f=l[4],u=l[8],p=l[1],d=l[5],v=l[9],E=l[2],y=l[6],m=l[10];if(Math.abs(f-p)<.01&&Math.abs(u-E)<.01&&Math.abs(v-y)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+E)<.1&&Math.abs(v+y)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,w=(d+1)/2,q=(m+1)/2,F=(f+p)/4,V=(u+E)/4,B=(v+y)/4;return I>w&&I>q?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=F/i,r=V/i):w>q?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=F/s,r=B/s):q<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),i=V/r,s=B/r),this.set(i,s,r,e),this}let S=Math.sqrt((y-v)*(y-v)+(u-E)*(u-E)+(p-f)*(p-f));return Math.abs(S)<.001&&(S=1),this.x=(y-v)/S,this.y=(u-E)/S,this.z=(p-f)/S,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eh=class extends pr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new vn(0,0,t,e),this.scissorTest=!1,this.viewport=new vn(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ms,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ri(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ls=class extends Eh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},bl=class extends Ri{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=as,this.minFilter=as,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ah=class extends Ri{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=as,this.minFilter=as,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],f=i[s+2],u=i[s+3],p=r[o+0],d=r[o+1],v=r[o+2],E=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=f,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=E;return}if(u!==E||l!==p||h!==d||f!==v){let y=1-a,m=l*p+h*d+f*v+u*E,S=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){let q=Math.sqrt(I),F=Math.atan2(q,m*S);y=Math.sin(y*F)/q,a=Math.sin(a*F)/q}let w=a*S;if(l=l*y+p*w,h=h*y+d*w,f=f*y+v*w,u=u*y+E*w,y===1-a){let q=1/Math.sqrt(l*l+h*h+f*f+u*u);l*=q,h*=q,f*=q,u*=q}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o],p=r[o+1],d=r[o+2],v=r[o+3];return t[e]=a*v+f*u+l*d-h*p,t[e+1]=l*v+f*p+h*u-a*d,t[e+2]=h*v+f*d+a*p-l*u,t[e+3]=f*v-a*u-l*p-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),f=a(s/2),u=a(r/2),p=l(i/2),d=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*f*u+h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u-p*d*v;break;case"YXZ":this._x=p*f*u+h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u+p*d*v;break;case"ZXY":this._x=p*f*u-h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u-p*d*v;break;case"ZYX":this._x=p*f*u-h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u+p*d*v;break;case"YZX":this._x=p*f*u+h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u-p*d*v;break;case"XZY":this._x=p*f*u-h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],f=e[6],u=e[10],p=i+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ai(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,f=e._w;return this._x=i*f+o*a+s*h-r*l,this._y=s*f+o*l+r*a-i*h,this._z=r*f+o*h+i*l-s*a,this._w=o*f-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),f=Math.atan2(h,a),u=Math.sin((1-e)*f)/h,p=Math.sin(e*f)/h;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),f=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*h+o*u-a*f,this.y=i+l*f+a*h-r*u,this.z=s+l*u+r*f-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return lc.copy(this).projectOnVector(t),this.sub(lc)}reflect(t){return this.sub(lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ai(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new z,au=new mr,Xs=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(is.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(is.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=is.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,is):is.fromBufferAttribute(r,o),is.applyMatrix4(t.matrixWorld),this.expandByPoint(is);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(t.matrixWorld),this.union(Oa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,is),is.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),ka.subVectors(this.max,Jo),jr.subVectors(t.a,Jo),Qr.subVectors(t.b,Jo),to.subVectors(t.c,Jo),nr.subVectors(Qr,jr),ir.subVectors(to,Qr),Tr.subVectors(jr,to);let e=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Tr.z,Tr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Tr.z,0,-Tr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Tr.y,Tr.x,0];return!cc(e,jr,Qr,to,ka)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,jr,Qr,to,ka))?!1:(Ba.crossVectors(nr,ir),e=[Ba.x,Ba.y,Ba.z],cc(e,jr,Qr,to,ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,is).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(is).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ds=[new z,new z,new z,new z,new z,new z,new z,new z],is=new z,Oa=new Xs,jr=new z,Qr=new z,to=new z,nr=new z,ir=new z,Tr=new z,Jo=new z,ka=new z,Ba=new z,Er=new z;function cc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Er.fromArray(n,r);let a=s.x*Math.abs(Er.x)+s.y*Math.abs(Er.y)+s.z*Math.abs(Er.z),l=t.dot(Er),h=e.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>a)return!1}return!0}var $p=new Xs,Ko=new z,hc=new z,Eo=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$p.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);let e=Ko.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ko,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(hc)),this.expandByPoint(Ko.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Us=new z,fc=new z,Va=new z,sr=new z,uc=new z,Ha=new z,dc=new z,fa=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Us)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Us.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Us.copy(this.origin).addScaledVector(this.direction,e),Us.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fc.copy(t).add(e).multiplyScalar(.5),Va.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Va),a=sr.dot(this.direction),l=-sr.dot(Va),h=sr.lengthSq(),f=Math.abs(1-o*o),u,p,d,v;if(f>0)if(u=o*l-a,p=o*a-l,v=r*f,u>=0)if(p>=-v)if(p<=v){let E=1/f;u*=E,p*=E,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+h}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+h;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+h;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+h):p<=v?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+h):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+h);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fc).addScaledVector(Va,p),d}intersectSphere(t,e){Us.subVectors(t.center,this.origin);let i=Us.dot(this.direction),s=Us.dot(Us)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),f>=0?(r=(t.min.y-p.y)*f,o=(t.max.y-p.y)*f):(r=(t.max.y-p.y)*f,o=(t.min.y-p.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Us)!==null}intersectTriangle(t,e,i,s,r){uc.subVectors(e,t),Ha.subVectors(i,t),dc.crossVectors(uc,Ha);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,t);let l=a*this.direction.dot(Ha.crossVectors(sr,Ha));if(l<0)return null;let h=a*this.direction.dot(uc.cross(sr));if(h<0||l+h>o)return null;let f=-a*sr.dot(dc);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class n{constructor(t,e,i,s,r,o,a,l,h,f,u,p,d,v,E,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,f,u,p,d,v,E,y)}set(t,e,i,s,r,o,a,l,h,f,u,p,d,v,E,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=f,m[10]=u,m[14]=p,m[3]=d,m[7]=v,m[11]=E,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/eo.setFromMatrixColumn(t,0).length(),r=1/eo.setFromMatrixColumn(t,1).length(),o=1/eo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*f,d=o*u,v=a*f,E=a*u;e[0]=l*f,e[4]=-l*u,e[8]=h,e[1]=d+v*h,e[5]=p-E*h,e[9]=-a*l,e[2]=E-p*h,e[6]=v+d*h,e[10]=o*l}else if(t.order==="YXZ"){let p=l*f,d=l*u,v=h*f,E=h*u;e[0]=p+E*a,e[4]=v*a-d,e[8]=o*h,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-v,e[6]=E+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*f,d=l*u,v=h*f,E=h*u;e[0]=p-E*a,e[4]=-o*u,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*f,e[9]=E-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*f,d=o*u,v=a*f,E=a*u;e[0]=l*f,e[4]=v*h-d,e[8]=p*h+E,e[1]=l*u,e[5]=E*h+p,e[9]=d*h-v,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,d=o*h,v=a*l,E=a*h;e[0]=l*f,e[4]=E-p*u,e[8]=v*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-h*f,e[6]=d*u+v,e[10]=p-E*u}else if(t.order==="XZY"){let p=o*l,d=o*h,v=a*l,E=a*h;e[0]=l*f,e[4]=-u,e[8]=h*f,e[1]=p*u+E,e[5]=o*f,e[9]=d*u-v,e[2]=v*u-d,e[6]=a*f,e[10]=E*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,Jp)}lookAt(t,e,i){let s=this.elements;return ki.subVectors(t,e),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),rr.crossVectors(i,ki),rr.lengthSq()===0&&(Math.abs(i.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),rr.crossVectors(i,ki)),rr.normalize(),Ga.crossVectors(ki,rr),s[0]=rr.x,s[4]=Ga.x,s[8]=ki.x,s[1]=rr.y,s[5]=Ga.y,s[9]=ki.y,s[2]=rr.z,s[6]=Ga.z,s[10]=ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],f=i[1],u=i[5],p=i[9],d=i[13],v=i[2],E=i[6],y=i[10],m=i[14],S=i[3],I=i[7],w=i[11],q=i[15],F=s[0],V=s[4],B=s[8],L=s[12],R=s[1],H=s[5],rt=s[9],tt=s[13],lt=s[2],St=s[6],ot=s[10],Rt=s[14],ct=s[3],Nt=s[7],Zt=s[11],kt=s[15];return r[0]=o*F+a*R+l*lt+h*ct,r[4]=o*V+a*H+l*St+h*Nt,r[8]=o*B+a*rt+l*ot+h*Zt,r[12]=o*L+a*tt+l*Rt+h*kt,r[1]=f*F+u*R+p*lt+d*ct,r[5]=f*V+u*H+p*St+d*Nt,r[9]=f*B+u*rt+p*ot+d*Zt,r[13]=f*L+u*tt+p*Rt+d*kt,r[2]=v*F+E*R+y*lt+m*ct,r[6]=v*V+E*H+y*St+m*Nt,r[10]=v*B+E*rt+y*ot+m*Zt,r[14]=v*L+E*tt+y*Rt+m*kt,r[3]=S*F+I*R+w*lt+q*ct,r[7]=S*V+I*H+w*St+q*Nt,r[11]=S*B+I*rt+w*ot+q*Zt,r[15]=S*L+I*tt+w*Rt+q*kt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],f=t[2],u=t[6],p=t[10],d=t[14],v=t[3],E=t[7],y=t[11],m=t[15];return v*(+r*l*u-s*h*u-r*a*p+i*h*p+s*a*d-i*l*d)+E*(+e*l*d-e*h*p+r*o*p-s*o*d+s*h*f-r*l*f)+y*(+e*h*u-e*a*d-r*o*u+i*o*d+r*a*f-i*h*f)+m*(-s*a*f-e*l*u+e*a*p+s*o*u-i*o*p+i*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],u=t[9],p=t[10],d=t[11],v=t[12],E=t[13],y=t[14],m=t[15],S=u*y*h-E*p*h+E*l*d-a*y*d-u*l*m+a*p*m,I=v*p*h-f*y*h-v*l*d+o*y*d+f*l*m-o*p*m,w=f*E*h-v*u*h+v*a*d-o*E*d-f*a*m+o*u*m,q=v*u*l-f*E*l-v*a*p+o*E*p+f*a*y-o*u*y,F=e*S+i*I+s*w+r*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/F;return t[0]=S*V,t[1]=(E*p*r-u*y*r-E*s*d+i*y*d+u*s*m-i*p*m)*V,t[2]=(a*y*r-E*l*r+E*s*h-i*y*h-a*s*m+i*l*m)*V,t[3]=(u*l*r-a*p*r-u*s*h+i*p*h+a*s*d-i*l*d)*V,t[4]=I*V,t[5]=(f*y*r-v*p*r+v*s*d-e*y*d-f*s*m+e*p*m)*V,t[6]=(v*l*r-o*y*r-v*s*h+e*y*h+o*s*m-e*l*m)*V,t[7]=(o*p*r-f*l*r+f*s*h-e*p*h-o*s*d+e*l*d)*V,t[8]=w*V,t[9]=(v*u*r-f*E*r-v*i*d+e*E*d+f*i*m-e*u*m)*V,t[10]=(o*E*r-v*a*r+v*i*h-e*E*h-o*i*m+e*a*m)*V,t[11]=(f*a*r-o*u*r-f*i*h+e*u*h+o*i*d-e*a*d)*V,t[12]=q*V,t[13]=(f*E*s-v*u*s+v*i*p-e*E*p-f*i*y+e*u*y)*V,t[14]=(v*a*s-o*E*s-v*i*l+e*E*l+o*i*y-e*a*y)*V,t[15]=(o*u*s-f*a*s+f*i*l-e*u*l-o*i*p+e*a*p)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,f=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,f*a+i,f*l-s*o,0,h*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,f=o+o,u=a+a,p=r*h,d=r*f,v=r*u,E=o*f,y=o*u,m=a*u,S=l*h,I=l*f,w=l*u,q=i.x,F=i.y,V=i.z;return s[0]=(1-(E+m))*q,s[1]=(d+w)*q,s[2]=(v-I)*q,s[3]=0,s[4]=(d-w)*F,s[5]=(1-(p+m))*F,s[6]=(y+S)*F,s[7]=0,s[8]=(v+I)*V,s[9]=(y-S)*V,s[10]=(1-(p+E))*V,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=eo.set(s[0],s[1],s[2]).length(),o=eo.set(s[4],s[5],s[6]).length(),a=eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ss.copy(this);let h=1/r,f=1/o,u=1/a;return ss.elements[0]*=h,ss.elements[1]*=h,ss.elements[2]*=h,ss.elements[4]*=f,ss.elements[5]*=f,ss.elements[6]*=f,ss.elements[8]*=u,ss.elements[9]*=u,ss.elements[10]*=u,e.setFromRotationMatrix(ss),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Bs){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),d,v;if(a===Bs)d=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===_l)d=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Bs){let l=this.elements,h=1/(e-t),f=1/(i-s),u=1/(o-r),p=(e+t)*h,d=(i+s)*f,v,E;if(a===Bs)v=(o+r)*u,E=-2*u;else if(a===_l)v=r*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=E,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},eo=new z,ss=new Mn,Zp=new z(0,0,0),Jp=new z(1,1,1),rr=new z,Ga=new z,ki=new z,lu=new Mn,cu=new mr,Ss=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],f=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ai(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ai(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ai(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kp=0,hu=new z,no=new mr,Ns=new Mn,Wa=new z,jo=new z,jp=new z,Qp=new mr,fu=new z(1,0,0),uu=new z(0,1,0),du=new z(0,0,1),pu={type:"added"},tm={type:"removed"},io={type:"childadded",child:null},pc={type:"childremoved",child:null},li=class n extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new Ss,i=new mr,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Fe}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return no.setFromAxisAngle(t,e),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,e){return no.setFromAxisAngle(t,e),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ns.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wa.copy(t):Wa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ns.lookAt(jo,Wa,this.up):Ns.lookAt(Wa,jo,this.up),this.quaternion.setFromRotationMatrix(Ns),s&&(Ns.extractRotation(s.matrixWorld),no.setFromRotationMatrix(Ns),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),io.child=t,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tm),pc.child=t,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ns.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ns.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ns),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),f=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let h in a){let f=a[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};li.DEFAULT_UP=new z(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rs=new z,zs=new z,mc=new z,Fs=new z,so=new z,ro=new z,mu=new z,gc=new z,xc=new z,yc=new z,_c=new vn,vc=new vn,bc=new vn,cr=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),rs.subVectors(t,e),s.cross(rs);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){rs.subVectors(s,e),zs.subVectors(i,e),mc.subVectors(t,e);let o=rs.dot(rs),a=rs.dot(zs),l=rs.dot(mc),h=zs.dot(zs),f=zs.dot(mc),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(h*l-a*f)*p,v=(o*f-a*l)*p;return r.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fs)===null?!1:Fs.x>=0&&Fs.y>=0&&Fs.x+Fs.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fs.x),l.addScaledVector(o,Fs.y),l.addScaledVector(a,Fs.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _c.setScalar(0),vc.setScalar(0),bc.setScalar(0),_c.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(bc,r.z),o}static isFrontFacing(t,e,i,s){return rs.subVectors(i,e),zs.subVectors(t,e),rs.cross(zs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rs.subVectors(this.c,this.b),zs.subVectors(this.a,this.b),rs.cross(zs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;so.subVectors(s,i),ro.subVectors(r,i),gc.subVectors(t,i);let l=so.dot(gc),h=ro.dot(gc);if(l<=0&&h<=0)return e.copy(i);xc.subVectors(t,s);let f=so.dot(xc),u=ro.dot(xc);if(f>=0&&u<=f)return e.copy(s);let p=l*u-f*h;if(p<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(so,o);yc.subVectors(t,r);let d=so.dot(yc),v=ro.dot(yc);if(v>=0&&d<=v)return e.copy(r);let E=d*h-l*v;if(E<=0&&h>=0&&v<=0)return a=h/(h-v),e.copy(i).addScaledVector(ro,a);let y=f*v-d*u;if(y<=0&&u-f>=0&&d-v>=0)return mu.subVectors(r,s),a=(u-f)/(u-f+(d-v)),e.copy(s).addScaledVector(mu,a);let m=1/(y+E+p);return o=E*m,a=p*m,e.copy(i).addScaledVector(so,o).addScaledVector(ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Mc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var we=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,en.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=en.workingColorSpace){return this.r=t,this.g=e,this.b=i,en.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=en.workingColorSpace){if(t=Vp(t,1),e=ai(e,0,1),i=ai(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Mc(o,r,t+1/3),this.g=Mc(o,r,t),this.b=Mc(o,r,t-1/3)}return en.toWorkingColorSpace(this,s),this}setStyle(t,e=kn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){let i=vd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return en.fromWorkingColorSpace(mi.copy(this),t),Math.round(ai(mi.r*255,0,255))*65536+Math.round(ai(mi.g*255,0,255))*256+Math.round(ai(mi.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=en.workingColorSpace){en.fromWorkingColorSpace(mi.copy(this),e);let i=mi.r,s=mi.g,r=mi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,f=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=en.workingColorSpace){return en.fromWorkingColorSpace(mi.copy(this),e),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=kn){en.fromWorkingColorSpace(mi.copy(this),t);let e=mi.r,i=mi.g,s=mi.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(or),this.setHSL(or.h+t,or.s+e,or.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(or),t.getHSL(Xa);let i=rc(or.h,Xa.h,e),s=rc(or.s,Xa.s,e),r=rc(or.l,Xa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mi=new we;we.NAMES=vd;var em=0,qs=class extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Vs(),this.name="",this.blending=xo,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=kc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==kc&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ve=class extends qs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fn=new z,qa=new At,vi=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wh,this.updateRanges=[],this.gpuType=ks,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qa.fromBufferAttribute(this,e),qa.applyMatrix3(t),this.setXY(e,qa.x,qa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix3(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wh&&(t.usage=this.usage),t}};var Ml=class extends vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var wl=class extends vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Pe=class extends vi{constructor(t,e,i){super(new Float32Array(t),e,i)}},nm=0,Zi=new Mn,wc=new li,oo=new z,Bi=new Xs,Qo=new Xs,Zn=new z,bn=class n extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?wl:Ml)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Fe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zi.makeRotationFromQuaternion(t),this.applyMatrix4(Zi),this}rotateX(t){return Zi.makeRotationX(t),this.applyMatrix4(Zi),this}rotateY(t){return Zi.makeRotationY(t),this.applyMatrix4(Zi),this}rotateZ(t){return Zi.makeRotationZ(t),this.applyMatrix4(Zi),this}translate(t,e,i){return Zi.makeTranslation(t,e,i),this.applyMatrix4(Zi),this}scale(t,e,i){return Zi.makeScale(t,e,i),this.applyMatrix4(Zi),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zn.addVectors(Bi.min,Qo.min),Bi.expandByPoint(Zn),Zn.addVectors(Bi.max,Qo.max),Bi.expandByPoint(Zn)):(Bi.expandByPoint(Qo.min),Bi.expandByPoint(Qo.max))}Bi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Zn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Zn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)Zn.fromBufferAttribute(a,h),l&&(oo.fromBufferAttribute(t,h),Zn.add(oo)),s=Math.max(s,i.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new z,l[B]=new z;let h=new z,f=new z,u=new z,p=new At,d=new At,v=new At,E=new z,y=new z;function m(B,L,R){h.fromBufferAttribute(i,B),f.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),p.fromBufferAttribute(r,B),d.fromBufferAttribute(r,L),v.fromBufferAttribute(r,R),f.sub(h),u.sub(h),d.sub(p),v.sub(p);let H=1/(d.x*v.y-v.x*d.y);isFinite(H)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(H),y.copy(u).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(H),a[B].add(E),a[L].add(E),a[R].add(E),l[B].add(y),l[L].add(y),l[R].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let B=0,L=S.length;B<L;++B){let R=S[B],H=R.start,rt=R.count;for(let tt=H,lt=H+rt;tt<lt;tt+=3)m(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let I=new z,w=new z,q=new z,F=new z;function V(B){q.fromBufferAttribute(s,B),F.copy(q);let L=a[B];I.copy(L),I.sub(q.multiplyScalar(q.dot(L))).normalize(),w.crossVectors(F,L);let H=w.dot(l[B])<0?-1:1;o.setXYZW(B,I.x,I.y,I.z,H)}for(let B=0,L=S.length;B<L;++B){let R=S[B],H=R.start,rt=R.count;for(let tt=H,lt=H+rt;tt<lt;tt+=3)V(t.getX(tt+0)),V(t.getX(tt+1)),V(t.getX(tt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,h=new z,f=new z,u=new z;if(t)for(let p=0,d=t.count;p<d;p+=3){let v=t.getX(p+0),E=t.getX(p+1),y=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,y),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),a.add(f),l.add(f),h.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Zn.fromBufferAttribute(t,e),Zn.normalize(),t.setXYZ(e,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function t(a,l){let h=a.array,f=a.itemSize,u=a.normalized,p=new h.constructor(l.length*f),d=0,v=0;for(let E=0,y=l.length;E<y;E++){a.isInterleavedBufferAttribute?d=l[E]*a.data.stride+a.offset:d=l[E]*f;for(let m=0;m<f;m++)p[v++]=h[d++]}return new vi(p,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let f=0,u=h.length;f<u;f++){let p=h[f],d=t(p,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],f=[];for(let u=0,p=h.length;u<p;u++){let d=h[u];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],u=r[h];for(let p=0,d=u.length;p<d;p++)f.push(u[p].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,f=o.length;h<f;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gu=new Mn,Ar=new fa,Ya=new Eo,xu=new z,$a=new z,Za=new z,Ja=new z,Sc=new z,Ka=new z,yu=new z,ja=new z,ht=class extends li{constructor(t=new bn,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let f=a[l],u=r[l];f!==0&&(Sc.fromBufferAttribute(u,t),o?Ka.addScaledVector(Sc,f):Ka.addScaledVector(Sc.sub(e),f))}e.add(Ka)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ar.copy(t.ray).recast(t.near),!(Ya.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ya,xu)===null||Ar.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Ar.copy(t.ray).applyMatrix4(gu),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ar)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=p.length;v<E;v++){let y=p[v],m=o[y.materialIndex],S=Math.max(y.start,d.start),I=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let w=S,q=I;w<q;w+=3){let F=a.getX(w),V=a.getX(w+1),B=a.getX(w+2);s=Qa(this,m,t,i,h,f,u,F,V,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),E=Math.min(a.count,d.start+d.count);for(let y=v,m=E;y<m;y+=3){let S=a.getX(y),I=a.getX(y+1),w=a.getX(y+2);s=Qa(this,o,t,i,h,f,u,S,I,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,E=p.length;v<E;v++){let y=p[v],m=o[y.materialIndex],S=Math.max(y.start,d.start),I=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let w=S,q=I;w<q;w+=3){let F=w,V=w+1,B=w+2;s=Qa(this,m,t,i,h,f,u,F,V,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let y=v,m=E;y<m;y+=3){let S=y,I=y+1,w=y+2;s=Qa(this,o,t,i,h,f,u,S,I,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function im(n,t,e,i,s,r,o,a){let l;if(t.side===Jn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===dr,a),l===null)return null;ja.copy(a),ja.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(ja);return h<e.near||h>e.far?null:{distance:h,point:ja.clone(),object:n}}function Qa(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,$a),n.getVertexPosition(l,Za),n.getVertexPosition(h,Ja);let f=im(n,t,e,i,$a,Za,Ja,yu);if(f){let u=new z;cr.getBarycoord(yu,$a,Za,Ja,u),s&&(f.uv=cr.getInterpolatedAttribute(s,a,l,h,u,new At)),r&&(f.uv1=cr.getInterpolatedAttribute(r,a,l,h,u,new At)),o&&(f.normal=cr.getInterpolatedAttribute(o,a,l,h,u,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let p={a,b:l,c:h,normal:new z,materialIndex:0};cr.getNormal($a,Za,Ja,p.normal),f.face=p,f.barycoord=u}return f}var fn=class n extends bn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],f=[],u=[],p=0,d=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(u,2));function v(E,y,m,S,I,w,q,F,V,B,L){let R=w/V,H=q/B,rt=w/2,tt=q/2,lt=F/2,St=V+1,ot=B+1,Rt=0,ct=0,Nt=new z;for(let Zt=0;Zt<ot;Zt++){let kt=Zt*H-tt;for(let ie=0;ie<St;ie++){let Ie=ie*R-rt;Nt[E]=Ie*S,Nt[y]=kt*I,Nt[m]=lt,h.push(Nt.x,Nt.y,Nt.z),Nt[E]=0,Nt[y]=0,Nt[m]=F>0?1:-1,f.push(Nt.x,Nt.y,Nt.z),u.push(ie/V),u.push(1-Zt/B),Rt+=1}}for(let Zt=0;Zt<B;Zt++)for(let kt=0;kt<V;kt++){let ie=p+kt+St*Zt,Ie=p+kt+St*(Zt+1),yt=p+(kt+1)+St*(Zt+1),Lt=p+(kt+1)+St*Zt;l.push(ie,Ie,Lt),l.push(Ie,yt,Lt),ct+=6}a.addGroup(d,ct,L),d+=ct,p+=Rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ao(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _i(n){let t={};for(let e=0;e<n.length;e++){let i=Ao(n[e]);for(let s in i)t[s]=i[s]}return t}function sm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:en.workingColorSpace}var rm={clone:Ao,merge:_i},om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ts=class extends qs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ao(t.uniforms),this.uniformsGroups=sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Sl=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Bs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ar=new z,_u=new At,vu=new At,Bn=class extends Sl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,e){return this.getViewBounds(t,_u,vu),e.subVectors(vu,_u)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ao=-90,lo=1,Rh=class extends li{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(ao,lo,t,e);s.layers=this.layers,this.add(s);let r=new Bn(ao,lo,t,e);r.layers=this.layers,this.add(r);let o=new Bn(ao,lo,t,e);o.layers=this.layers,this.add(o);let a=new Bn(ao,lo,t,e);a.layers=this.layers,this.add(a);let l=new Bn(ao,lo,t,e);l.layers=this.layers,this.add(l);let h=new Bn(ao,lo,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Bs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,f]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(u,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Tl=class extends Ri{constructor(t,e,i,s,r,o,a,l,h,f){t=t!==void 0?t:[],e=e!==void 0?e:Mo,super(t,e,i,s,r,o,a,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ch=class extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ms}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new Ts({name:"CubemapFromEquirect",uniforms:Ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:hr});r.uniforms.tEquirect.value=e;let o=new ht(s,r),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=Ms),new Rh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Tc=new z,lm=new z,cm=new Fe,Vi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Tc.subVectors(i,e).cross(lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||cm.getNormalMatrix(t),s=this.coplanarPoint(Tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rr=new Eo,tl=new z,da=class{constructor(t=new Vi,e=new Vi,i=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bs){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],d=s[8],v=s[9],E=s[10],y=s[11],m=s[12],S=s[13],I=s[14],w=s[15];if(i[0].setComponents(l-r,p-h,y-d,w-m).normalize(),i[1].setComponents(l+r,p+h,y+d,w+m).normalize(),i[2].setComponents(l+o,p+f,y+v,w+S).normalize(),i[3].setComponents(l-o,p-f,y-v,w-S).normalize(),i[4].setComponents(l-a,p-u,y-E,w-I).normalize(),e===Bs)i[5].setComponents(l+a,p+u,y+E,w+I).normalize();else if(e===_l)i[5].setComponents(a,u,E,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(tl.x=s.normal.x>0?t.max.x:t.min.x,tl.y=s.normal.y>0?t.max.y:t.min.y,tl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Md(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hm(n){let t=new WeakMap;function e(a,l){let h=a.array,f=a.usage,u=h.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,f),a.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,h){let f=l.array,u=l.updateRanges;if(n.bindBuffer(h,a),u.length===0)n.bufferSubData(h,0,f);else{u.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<u.length;d++){let v=u[p],E=u[d];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++p,u[p]=E)}u.length=p+1;for(let d=0,v=u.length;d<v;d++){let E=u[d];n.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Ge=class n extends bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,f=l+1,u=t/a,p=e/l,d=[],v=[],E=[],y=[];for(let m=0;m<f;m++){let S=m*p-o;for(let I=0;I<h;I++){let w=I*u-r;v.push(w,-S,0),E.push(0,0,1),y.push(I/a),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let I=S+h*m,w=S+h*(m+1),q=S+1+h*(m+1),F=S+1+h*m;d.push(I,w,F),d.push(w,q,F)}this.setIndex(d),this.setAttribute("position",new Pe(v,3)),this.setAttribute("normal",new Pe(E,3)),this.setAttribute("uv",new Pe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,c0=`struct PhysicalMaterial {
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
}`,h0=`
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Pg=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Fg=`#define TOON
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
}`,Og=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:fm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:xm,aomap_pars_fragment:ym,batching_pars_vertex:_m,batching_vertex:vm,begin_vertex:bm,beginnormal_vertex:Mm,bsdfs:wm,iridescence_fragment:Sm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Im,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Dm,common:Um,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Om,emissivemap_fragment:km,emissivemap_pars_fragment:Bm,colorspace_fragment:Vm,colorspace_pars_fragment:Hm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i0,envmap_vertex:Ym,fog_vertex:$m,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Km,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:t0,lights_lambert_pars_fragment:e0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:o0,lights_phong_pars_fragment:a0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:h0,lights_fragment_maps:f0,lights_fragment_end:u0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:x0,map_pars_fragment:y0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:M0,morphinstance_vertex:w0,morphcolor_vertex:S0,morphnormal_vertex:T0,morphtarget_pars_vertex:E0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:I0,normal_pars_vertex:P0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:k0,premultiplied_alpha_fragment:B0,project_vertex:V0,dithering_fragment:H0,dithering_pars_fragment:G0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:$0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:K0,skinning_vertex:j0,skinnormal_vertex:Q0,specularmap_fragment:tg,specularmap_pars_fragment:eg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:fg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:xg,distanceRGBA_vert:yg,distanceRGBA_frag:_g,equirect_vert:vg,equirect_frag:bg,linedashed_vert:Mg,linedashed_frag:wg,meshbasic_vert:Sg,meshbasic_frag:Tg,meshlambert_vert:Eg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Ig,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ug,meshphysical_frag:Ng,meshtoon_vert:zg,meshtoon_frag:Fg,points_vert:Og,points_frag:kg,shadow_vert:Bg,shadow_frag:Vg,sprite_vert:Hg,sprite_frag:Gg},$t={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},vs={basic:{uniforms:_i([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:_i([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:_i([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:_i([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:_i([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:_i([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:_i([$t.points,$t.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:_i([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:_i([$t.common,$t.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:_i([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:_i([$t.sprite,$t.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:_i([$t.common,$t.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:_i([$t.lights,$t.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};vs.physical={uniforms:_i([vs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var el={r:0,b:0,g:0},Cr=new Ss,Wg=new Mn;function Xg(n,t,e,i,s,r,o){let a=new we(0),l=r===!0?0:1,h,f,u=null,p=0,d=null;function v(S){let I=S.isScene===!0?S.background:null;return I&&I.isTexture&&(I=(S.backgroundBlurriness>0?e:t).get(I)),I}function E(S){let I=!1,w=v(S);w===null?m(a,l):w&&w.isColor&&(m(w,1),I=!0);let q=n.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,o):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,I){let w=v(I);w&&(w.isCubeTexture||w.mapping===Bl)?(f===void 0&&(f=new ht(new fn(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:Ao(vs.backgroundCube.uniforms),vertexShader:vs.backgroundCube.vertexShader,fragmentShader:vs.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(q,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Cr.copy(I.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Cr)),f.material.toneMapped=en.getTransfer(w.colorSpace)!==yn,(u!==w||p!==w.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=w,p=w.version,d=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new ht(new Ge(2,2),new Ts({name:"BackgroundMaterial",uniforms:Ao(vs.background.uniforms),vertexShader:vs.background.vertexShader,fragmentShader:vs.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=en.getTransfer(w.colorSpace)!==yn,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||p!==w.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,p=w.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function m(S,I){S.getRGB(el,bd(n)),i.buffers.color.setClear(el.r,el.g,el.b,I,o)}return{getClearColor:function(){return a},setClearColor:function(S,I=1){a.set(S),l=I,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:E,addToRenderList:y}}function qg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(R,H,rt,tt,lt){let St=!1,ot=u(tt,rt,H);r!==ot&&(r=ot,h(r.object)),St=d(R,tt,rt,lt),St&&v(R,tt,rt,lt),lt!==null&&t.update(lt,n.ELEMENT_ARRAY_BUFFER),(St||o)&&(o=!1,w(R,H,rt,tt),lt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function l(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function f(R){return n.deleteVertexArray(R)}function u(R,H,rt){let tt=rt.wireframe===!0,lt=i[R.id];lt===void 0&&(lt={},i[R.id]=lt);let St=lt[H.id];St===void 0&&(St={},lt[H.id]=St);let ot=St[tt];return ot===void 0&&(ot=p(l()),St[tt]=ot),ot}function p(R){let H=[],rt=[],tt=[];for(let lt=0;lt<e;lt++)H[lt]=0,rt[lt]=0,tt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:rt,attributeDivisors:tt,object:R,attributes:{},index:null}}function d(R,H,rt,tt){let lt=r.attributes,St=H.attributes,ot=0,Rt=rt.getAttributes();for(let ct in Rt)if(Rt[ct].location>=0){let Zt=lt[ct],kt=St[ct];if(kt===void 0&&(ct==="instanceMatrix"&&R.instanceMatrix&&(kt=R.instanceMatrix),ct==="instanceColor"&&R.instanceColor&&(kt=R.instanceColor)),Zt===void 0||Zt.attribute!==kt||kt&&Zt.data!==kt.data)return!0;ot++}return r.attributesNum!==ot||r.index!==tt}function v(R,H,rt,tt){let lt={},St=H.attributes,ot=0,Rt=rt.getAttributes();for(let ct in Rt)if(Rt[ct].location>=0){let Zt=St[ct];Zt===void 0&&(ct==="instanceMatrix"&&R.instanceMatrix&&(Zt=R.instanceMatrix),ct==="instanceColor"&&R.instanceColor&&(Zt=R.instanceColor));let kt={};kt.attribute=Zt,Zt&&Zt.data&&(kt.data=Zt.data),lt[ct]=kt,ot++}r.attributes=lt,r.attributesNum=ot,r.index=tt}function E(){let R=r.newAttributes;for(let H=0,rt=R.length;H<rt;H++)R[H]=0}function y(R){m(R,0)}function m(R,H){let rt=r.newAttributes,tt=r.enabledAttributes,lt=r.attributeDivisors;rt[R]=1,tt[R]===0&&(n.enableVertexAttribArray(R),tt[R]=1),lt[R]!==H&&(n.vertexAttribDivisor(R,H),lt[R]=H)}function S(){let R=r.newAttributes,H=r.enabledAttributes;for(let rt=0,tt=H.length;rt<tt;rt++)H[rt]!==R[rt]&&(n.disableVertexAttribArray(rt),H[rt]=0)}function I(R,H,rt,tt,lt,St,ot){ot===!0?n.vertexAttribIPointer(R,H,rt,lt,St):n.vertexAttribPointer(R,H,rt,tt,lt,St)}function w(R,H,rt,tt){E();let lt=tt.attributes,St=rt.getAttributes(),ot=H.defaultAttributeValues;for(let Rt in St){let ct=St[Rt];if(ct.location>=0){let Nt=lt[Rt];if(Nt===void 0&&(Rt==="instanceMatrix"&&R.instanceMatrix&&(Nt=R.instanceMatrix),Rt==="instanceColor"&&R.instanceColor&&(Nt=R.instanceColor)),Nt!==void 0){let Zt=Nt.normalized,kt=Nt.itemSize,ie=t.get(Nt);if(ie===void 0)continue;let Ie=ie.buffer,yt=ie.type,Lt=ie.bytesPerElement,se=yt===n.INT||yt===n.UNSIGNED_INT||Nt.gpuType===pf;if(Nt.isInterleavedBufferAttribute){let Ft=Nt.data,de=Ft.stride,ue=Nt.offset;if(Ft.isInstancedInterleavedBuffer){for(let le=0;le<ct.locationSize;le++)m(ct.location+le,Ft.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let le=0;le<ct.locationSize;le++)y(ct.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let le=0;le<ct.locationSize;le++)I(ct.location+le,kt/ct.locationSize,yt,Zt,de*Lt,(ue+kt/ct.locationSize*le)*Lt,se)}else{if(Nt.isInstancedBufferAttribute){for(let Ft=0;Ft<ct.locationSize;Ft++)m(ct.location+Ft,Nt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Ft=0;Ft<ct.locationSize;Ft++)y(ct.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ft=0;Ft<ct.locationSize;Ft++)I(ct.location+Ft,kt/ct.locationSize,yt,Zt,kt*Lt,kt/ct.locationSize*Ft*Lt,se)}}else if(ot!==void 0){let Zt=ot[Rt];if(Zt!==void 0)switch(Zt.length){case 2:n.vertexAttrib2fv(ct.location,Zt);break;case 3:n.vertexAttrib3fv(ct.location,Zt);break;case 4:n.vertexAttrib4fv(ct.location,Zt);break;default:n.vertexAttrib1fv(ct.location,Zt)}}}}S()}function q(){B();for(let R in i){let H=i[R];for(let rt in H){let tt=H[rt];for(let lt in tt)f(tt[lt].object),delete tt[lt];delete H[rt]}delete i[R]}}function F(R){if(i[R.id]===void 0)return;let H=i[R.id];for(let rt in H){let tt=H[rt];for(let lt in tt)f(tt[lt].object),delete tt[lt];delete H[rt]}delete i[R.id]}function V(R){for(let H in i){let rt=i[H];if(rt[R.id]===void 0)continue;let tt=rt[R.id];for(let lt in tt)f(tt[lt].object),delete tt[lt];delete rt[R.id]}}function B(){L(),o=!0,r!==s&&(r=s,h(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:F,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:y,disableUnusedAttributes:S}}function Yg(n,t,e){let i;function s(h){i=h}function r(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function o(h,f,u){u!==0&&(n.drawArraysInstanced(i,h,f,u),e.update(f,i,u))}function a(h,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,u);let d=0;for(let v=0;v<u;v++)d+=f[v];e.update(d,i,1)}function l(h,f,u,p){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)o(h[v],f[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,f,0,p,0,u);let v=0;for(let E=0;E<u;E++)v+=f[E]*p[E];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $g(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(V){return!(V!==os&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(V){let B=V===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Ws&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==ks&&!B)}function l(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),q=v>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:w,vertexTextures:q,maxSamples:F}}function Zg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Vi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||i!==0||s;return s=p,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=f(u,p,0)},this.setState=function(u,p,d){let v=u.clippingPlanes,E=u.clipIntersection,y=u.clipShadows,m=n.get(u);if(!s||v===null||v.length===0||r&&!y)r?f(null):h();else{let S=r?0:i,I=S*4,w=m.clippingState||null;l.value=w,w=f(v,p,I,d);for(let q=0;q!==I;++q)w[q]=e[q];m.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,p,d,v){let E=u!==null?u.length:0,y=null;if(E!==0){if(y=l.value,v!==!0||y===null){let m=d+E*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(y===null||y.length<m)&&(y=new Float32Array(m));for(let I=0,w=d;I!==E;++I,w+=4)o.copy(u[I]).applyMatrix4(S,a),o.normal.toArray(y,w),y[w+3]=o.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function Jg(n){let t=new WeakMap;function e(o,a){return a===Yc?o.mapping=Mo:a===$c&&(o.mapping=wo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yc||a===$c)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Ch(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var El=class extends Sl{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mo=4,bu=[.125,.215,.35,.446,.526,.582],Dr=20,Ec=new El,Mu=new we,Ac=null,Rc=0,Cc=0,Ic=!1,Pr=(1+Math.sqrt(5))/2,co=1/Pr,wu=[new z(-Pr,co,0),new z(Pr,co,0),new z(-co,0,Pr),new z(co,0,Pr),new z(0,Pr,-co),new z(0,Pr,co),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Rc,Cc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,nl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mo||t.mapping===wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ms,minFilter:Ms,generateMipmaps:!1,type:Ma,format:os,colorSpace:Oo,depthBuffer:!1},s=Su(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=jg(r,t,e)}return s}_compileMaterial(t){let e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,Ec)}_sceneToCubeUV(t,e,i,s){let a=new Bn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Mu),f.toneMapping=fr,f.autoClear=!1;let d=new Ve({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),v=new ht(new fn,d),E=!1,y=t.background;y?y.isColor&&(d.color.copy(y),t.background=null,E=!0):(d.color.copy(Mu),E=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));let I=this._cubeSize;nl(s,S*I,m>2?I:0,I,I),f.setRenderTarget(s),E&&f.render(v,a),f.render(t,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Mo||t.mapping===wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;nl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ec)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(s-r-1)%wu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,u=new ht(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Dr-1),E=r/v,y=isFinite(r)?1+Math.floor(f*E):Dr;y>Dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dr}`);let m=[],S=0;for(let V=0;V<Dr;++V){let B=V/E,L=Math.exp(-B*B/2);m.push(L),V===0?S+=L:V<y&&(S+=2*L)}for(let V=0;V<m.length;V++)m[V]=m[V]/S;p.envMap.value=t.texture,p.samples.value=y,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:I}=this;p.dTheta.value=v,p.mipInt.value=I-i;let w=this._sizeLods[s],q=3*w*(s>I-mo?s-I+mo:0),F=4*(this._cubeSize-w);nl(e,q,F,3*w,2*w),l.setRenderTarget(e),l.render(u,Ec)}};function Kg(n){let t=[],e=[],i=[],s=n,r=n-mo+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-mo?l=bu[o-n+mo-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),f=-h,u=1+h,p=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,v=6,E=3,y=2,m=1,S=new Float32Array(E*v*d),I=new Float32Array(y*v*d),w=new Float32Array(m*v*d);for(let F=0;F<d;F++){let V=F%3*2/3-1,B=F>2?0:-1,L=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];S.set(L,E*v*F),I.set(p,y*v*F);let R=[F,F,F,F,F,F];w.set(R,m*v*F)}let q=new bn;q.setAttribute("position",new vi(S,E)),q.setAttribute("uv",new vi(I,y)),q.setAttribute("faceIndex",new vi(w,m)),t.push(q),s>mo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Su(n,t,e){let i=new ls(n,t,e);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jg(n,t,e){let i=new Float32Array(Dr),s=new z(0,1,0);return new Ts({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Tu(){return new Ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Eu(){return new Ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function vf(){return`

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
	`}function Qg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Yc||l===$c,f=l===Mo||l===wo;if(h||f){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Al(n)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return h&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new Al(n)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,h=6;for(let f=0;f<h;f++)a[f]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function tx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&sa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ex(n,t,e,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let E=p.morphAttributes[v];for(let y=0,m=E.length;y<m;y++)t.remove(E[y])}p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let v in p)t.update(p[v],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let v in d){let E=d[v];for(let y=0,m=E.length;y<m;y++)t.update(E[y],n.ARRAY_BUFFER)}}function h(u){let p=[],d=u.index,v=u.attributes.position,E=0;if(d!==null){let S=d.array;E=d.version;for(let I=0,w=S.length;I<w;I+=3){let q=S[I+0],F=S[I+1],V=S[I+2];p.push(q,F,F,V,V,q)}}else if(v!==void 0){let S=v.array;E=v.version;for(let I=0,w=S.length/3-1;I<w;I+=3){let q=I+0,F=I+1,V=I+2;p.push(q,F,F,V,V,q)}}else return;let y=new(_d(p)?wl:Ml)(p,1);y.version=E;let m=r.get(u);m&&t.remove(m),r.set(u,y)}function f(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function nx(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*o),e.update(d,i,1)}function h(p,d,v){v!==0&&(n.drawElementsInstanced(i,d,r,p*o,v),e.update(d,i,v))}function f(p,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,v);let y=0;for(let m=0;m<v;m++)y+=d[m];e.update(y,i,1)}function u(p,d,v,E){if(v===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<p.length;m++)h(p[m]/o,d[m],E[m]);else{y.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,E,0,v);let m=0;for(let S=0;S<v;S++)m+=d[S]*E[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function ix(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sx(n,t,e){let i=new WeakMap,s=new vn;function r(o,a,l){let h=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,p=i.get(a);if(p===void 0||p.count!==u){let L=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",L)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],I=0;d===!0&&(I=1),v===!0&&(I=2),E===!0&&(I=3);let w=a.attributes.position.count*I,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let F=new Float32Array(w*q*4*u),V=new bl(F,w,q,u);V.type=ks,V.needsUpdate=!0;let B=I*4;for(let R=0;R<u;R++){let H=y[R],rt=m[R],tt=S[R],lt=w*q*4*R;for(let St=0;St<H.count;St++){let ot=St*B;d===!0&&(s.fromBufferAttribute(H,St),F[lt+ot+0]=s.x,F[lt+ot+1]=s.y,F[lt+ot+2]=s.z,F[lt+ot+3]=0),v===!0&&(s.fromBufferAttribute(rt,St),F[lt+ot+4]=s.x,F[lt+ot+5]=s.y,F[lt+ot+6]=s.z,F[lt+ot+7]=0),E===!0&&(s.fromBufferAttribute(tt,St),F[lt+ot+8]=s.x,F[lt+ot+9]=s.y,F[lt+ot+10]=s.z,F[lt+ot+11]=tt.itemSize===4?s.w:1)}}p={count:u,texture:V,size:new At(w,q)},i.set(a,p),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let E=0;E<h.length;E++)d+=h[E];let v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function rx(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Rl=class extends Ri{constructor(t,e,i,s,r,o,a,l,h,f=yo){if(f!==yo&&f!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===yo&&(i=zr),i===void 0&&f===To&&(i=So),super(null,s,r,o,a,l,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:as,this.minFilter=l!==void 0?l:as,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wd=new Ri,Au=new Rl(1,1),Sd=new bl,Td=new Ah,Ed=new Tl,Ru=[],Cu=[],Iu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function ko(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Vn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hl(n,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ox(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Vn(e,t))return;n.uniform2fv(this.addr,t),Hn(e,t)}}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Vn(e,t))return;n.uniform3fv(this.addr,t),Hn(e,t)}}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Vn(e,t))return;n.uniform4fv(this.addr,t),Hn(e,t)}}function hx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Vn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Hn(e,t)}else{if(Vn(e,i))return;Lu.set(i),n.uniformMatrix2fv(this.addr,!1,Lu),Hn(e,i)}}function fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Vn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Hn(e,t)}else{if(Vn(e,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),Hn(e,i)}}function ux(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Vn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Hn(e,t)}else{if(Vn(e,i))return;Iu.set(i),n.uniformMatrix4fv(this.addr,!1,Iu),Hn(e,i)}}function dx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Vn(e,t))return;n.uniform2iv(this.addr,t),Hn(e,t)}}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Vn(e,t))return;n.uniform3iv(this.addr,t),Hn(e,t)}}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Vn(e,t))return;n.uniform4iv(this.addr,t),Hn(e,t)}}function xx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Vn(e,t))return;n.uniform2uiv(this.addr,t),Hn(e,t)}}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Vn(e,t))return;n.uniform3uiv(this.addr,t),Hn(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Vn(e,t))return;n.uniform4uiv(this.addr,t),Hn(e,t)}}function bx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=yd,r=Au):r=wd,e.setTexture2D(t||r,s)}function Mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Td,s)}function wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ed,s)}function Sx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Sd,s)}function Tx(n){switch(n){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return fx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return yx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Ex(n,t){n.uniform1fv(this.addr,t)}function Ax(n,t){let e=ko(t,this.size,2);n.uniform2fv(this.addr,e)}function Rx(n,t){let e=ko(t,this.size,3);n.uniform3fv(this.addr,e)}function Cx(n,t){let e=ko(t,this.size,4);n.uniform4fv(this.addr,e)}function Ix(n,t){let e=ko(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Px(n,t){let e=ko(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lx(n,t){let e=ko(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dx(n,t){n.uniform1iv(this.addr,t)}function Ux(n,t){n.uniform2iv(this.addr,t)}function Nx(n,t){n.uniform3iv(this.addr,t)}function zx(n,t){n.uniform4iv(this.addr,t)}function Fx(n,t){n.uniform1uiv(this.addr,t)}function Ox(n,t){n.uniform2uiv(this.addr,t)}function kx(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function Vx(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Vn(i,r)||(n.uniform1iv(this.addr,r),Hn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wd,r[o])}function Hx(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Vn(i,r)||(n.uniform1iv(this.addr,r),Hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Td,r[o])}function Gx(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Vn(i,r)||(n.uniform1iv(this.addr,r),Hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ed,r[o])}function Wx(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Vn(i,r)||(n.uniform1iv(this.addr,r),Hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sd,r[o])}function Xx(n){switch(n){case 5126:return Ex;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Ix;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return zx;case 5125:return Fx;case 36294:return Ox;case 36295:return kx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Wx}}var Ih=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}},Ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Du(n,t){n.seq.push(t),n.map[t.id]=t}function qx(n,t,e){let i=n.name,s=i.length;for(Pc.lastIndex=0;;){let r=Pc.exec(i),o=Pc.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Du(e,h===void 0?new Ih(a,n,t):new Ph(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Lh(a),Du(e,u)),e=u}}}var vo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Uu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Yx=37297,$x=0;function Zx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Nu=new Fe;function Jx(n){en._getMatrix(Nu,en.workingColorSpace,n);let t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch(en.getTransfer(n)){case Vl:return[t,"LinearTransferOETF"];case yn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zx(n.getShaderSource(t),o)}else return s}function Kx(n,t){let e=Jx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jx(n,t){let e;switch(t){case wp:e="Linear";break;case Sp:e="Reinhard";break;case Tp:e="Cineon";break;case Ep:e="ACESFilmic";break;case Rp:e="AgX";break;case Cp:e="Neutral";break;case Ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var il=new z;function Qx(){en.getLuminanceCoefficients(il);let n=il.x.toFixed(4),t=il.y.toFixed(4),e=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function ey(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ny(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ra(n){return n!==""}function Fu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(n){return n.replace(iy,ry)}var sy=new Map;function ry(n,t){let e=Be[t];if(e===void 0){let i=sy.get(t);if(i!==void 0)e=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dh(e)}var oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(oy,ay)}function ay(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ly(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Os&&(t="SHADOWMAP_TYPE_VSM"),t}function cy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mo:case wo:t="ENVMAP_TYPE_CUBE";break;case Bl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hy(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===wo&&(t="ENVMAP_MODE_REFRACTION"),t}function fy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case df:t="ENVMAP_BLENDING_MULTIPLY";break;case bp:t="ENVMAP_BLENDING_MIX";break;case Mp:t="ENVMAP_BLENDING_ADD";break}return t}function uy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ly(e),h=cy(e),f=hy(e),u=fy(e),p=uy(e),d=ty(e),v=ey(r),E=s.createProgram(),y,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ra).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ra).join(`
`),m.length>0&&(m+=`
`)):(y=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?Be.tonemapping_pars_fragment:"",e.toneMapping!==fr?jx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Kx("linearToOutputTexel",e.outputColorSpace),Qx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),o=Dh(o),o=Fu(o,e),o=Ou(o,e),a=Dh(a),a=Fu(a,e),a=Ou(a,e),o=ku(o),a=ku(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let I=S+y+o,w=S+m+a,q=Uu(s,s.VERTEX_SHADER,I),F=Uu(s,s.FRAGMENT_SHADER,w);s.attachShader(E,q),s.attachShader(E,F),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function V(H){if(n.debug.checkShaderErrors){let rt=s.getProgramInfoLog(E).trim(),tt=s.getShaderInfoLog(q).trim(),lt=s.getShaderInfoLog(F).trim(),St=!0,ot=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(St=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,q,F);else{let Rt=zu(s,q,"vertex"),ct=zu(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+rt+`
`+Rt+`
`+ct)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(tt===""||lt==="")&&(ot=!1);ot&&(H.diagnostics={runnable:St,programLog:rt,vertexShader:{log:tt,prefix:y},fragmentShader:{log:lt,prefix:m}})}s.deleteShader(q),s.deleteShader(F),B=new vo(s,E),L=ny(s,E)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let L;this.getAttributes=function(){return L===void 0&&V(this),L};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,Yx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=q,this.fragmentShader=F,this}var py=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nh(t),e.set(t,i)),i}},Nh=class{constructor(t){this.id=py++,this.code=t,this.usedTimes=0}};function my(n,t,e,i,s,r,o){let a=new ua,l=new Uh,h=new Set,f=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return h.add(L),L===0?"uv":`uv${L}`}function y(L,R,H,rt,tt){let lt=rt.fog,St=tt.geometry,ot=L.isMeshStandardMaterial?rt.environment:null,Rt=(L.isMeshStandardMaterial?e:t).get(L.envMap||ot),ct=Rt&&Rt.mapping===Bl?Rt.image.height:null,Nt=v[L.type];L.precision!==null&&(d=s.getMaxPrecision(L.precision),d!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",d,"instead."));let Zt=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,kt=Zt!==void 0?Zt.length:0,ie=0;St.morphAttributes.position!==void 0&&(ie=1),St.morphAttributes.normal!==void 0&&(ie=2),St.morphAttributes.color!==void 0&&(ie=3);let Ie,yt,Lt,se;if(Nt){let Xe=vs[Nt];Ie=Xe.vertexShader,yt=Xe.fragmentShader}else Ie=L.vertexShader,yt=L.fragmentShader,l.update(L),Lt=l.getVertexShaderID(L),se=l.getFragmentShaderID(L);let Ft=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),ue=tt.isInstancedMesh===!0,le=tt.isBatchedMesh===!0,Oe=!!L.map,Tt=!!L.matcap,Ut=!!Rt,O=!!L.aoMap,re=!!L.lightMap,vt=!!L.bumpMap,zt=!!L.normalMap,It=!!L.displacementMap,be=!!L.emissiveMap,qt=!!L.metalnessMap,U=!!L.roughnessMap,A=L.anisotropy>0,Q=L.clearcoat>0,mt=L.dispersion>0,dt=L.iridescence>0,xt=L.sheen>0,Wt=L.transmission>0,Ot=A&&!!L.anisotropyMap,Yt=Q&&!!L.clearcoatMap,Re=Q&&!!L.clearcoatNormalMap,Ct=Q&&!!L.clearcoatRoughnessMap,Jt=dt&&!!L.iridescenceMap,pe=dt&&!!L.iridescenceThicknessMap,ge=xt&&!!L.sheenColorMap,Kt=xt&&!!L.sheenRoughnessMap,De=!!L.specularMap,ee=!!L.specularColorMap,We=!!L.specularIntensityMap,Y=Wt&&!!L.transmissionMap,Xt=Wt&&!!L.thicknessMap,ut=!!L.gradientMap,bt=!!L.alphaMap,st=L.alphaTest>0,Ht=!!L.alphaHash,Ce=!!L.extensions,qe=fr;L.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(qe=n.toneMapping);let Dn={shaderID:Nt,shaderType:L.type,shaderName:L.name,vertexShader:Ie,fragmentShader:yt,defines:L.defines,customVertexShaderID:Lt,customFragmentShaderID:se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:d,batching:le,batchingColor:le&&tt._colorsTexture!==null,instancing:ue,instancingColor:ue&&tt.instanceColor!==null,instancingMorph:ue&&tt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Oo,alphaToCoverage:!!L.alphaToCoverage,map:Oe,matcap:Tt,envMap:Ut,envMapMode:Ut&&Rt.mapping,envMapCubeUVHeight:ct,aoMap:O,lightMap:re,bumpMap:vt,normalMap:zt,displacementMap:p&&It,emissiveMap:be,normalMapObjectSpace:zt&&L.normalMapType===Dp,normalMapTangentSpace:zt&&L.normalMapType===xd,metalnessMap:qt,roughnessMap:U,anisotropy:A,anisotropyMap:Ot,clearcoat:Q,clearcoatMap:Yt,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ct,dispersion:mt,iridescence:dt,iridescenceMap:Jt,iridescenceThicknessMap:pe,sheen:xt,sheenColorMap:ge,sheenRoughnessMap:Kt,specularMap:De,specularColorMap:ee,specularIntensityMap:We,transmission:Wt,transmissionMap:Y,thicknessMap:Xt,gradientMap:ut,opaque:L.transparent===!1&&L.blending===xo&&L.alphaToCoverage===!1,alphaMap:bt,alphaTest:st,alphaHash:Ht,combine:L.combine,mapUv:Oe&&E(L.map.channel),aoMapUv:O&&E(L.aoMap.channel),lightMapUv:re&&E(L.lightMap.channel),bumpMapUv:vt&&E(L.bumpMap.channel),normalMapUv:zt&&E(L.normalMap.channel),displacementMapUv:It&&E(L.displacementMap.channel),emissiveMapUv:be&&E(L.emissiveMap.channel),metalnessMapUv:qt&&E(L.metalnessMap.channel),roughnessMapUv:U&&E(L.roughnessMap.channel),anisotropyMapUv:Ot&&E(L.anisotropyMap.channel),clearcoatMapUv:Yt&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&E(L.sheenRoughnessMap.channel),specularMapUv:De&&E(L.specularMap.channel),specularColorMapUv:ee&&E(L.specularColorMap.channel),specularIntensityMapUv:We&&E(L.specularIntensityMap.channel),transmissionMapUv:Y&&E(L.transmissionMap.channel),thicknessMapUv:Xt&&E(L.thicknessMap.channel),alphaMapUv:bt&&E(L.alphaMap.channel),vertexTangents:!!St.attributes.tangent&&(zt||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!St.attributes.uv&&(Oe||bt),fog:!!lt,useFog:L.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:de,skinning:tt.isSkinnedMesh===!0,morphTargets:St.morphAttributes.position!==void 0,morphNormals:St.morphAttributes.normal!==void 0,morphColors:St.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:Oe&&L.map.isVideoTexture===!0&&en.getTransfer(L.map.colorSpace)===yn,decodeVideoTextureEmissive:be&&L.emissiveMap.isVideoTexture===!0&&en.getTransfer(L.emissiveMap.colorSpace)===yn,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Rn,flipSided:L.side===Jn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ce&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&L.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Dn.vertexUv1s=h.has(1),Dn.vertexUv2s=h.has(2),Dn.vertexUv3s=h.has(3),h.clear(),Dn}function m(L){let R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(let H in L.defines)R.push(H),R.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(S(R,L),I(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function S(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function I(L,R){a.disableAll(),R.supportsVertexTextures&&a.enable(0),R.instancing&&a.enable(1),R.instancingColor&&a.enable(2),R.instancingMorph&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),R.dispersion&&a.enable(20),R.batchingColor&&a.enable(21),L.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reverseDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),L.push(a.mask)}function w(L){let R=v[L.type],H;if(R){let rt=vs[R];H=rm.clone(rt.uniforms)}else H=L.uniforms;return H}function q(L,R){let H;for(let rt=0,tt=f.length;rt<tt;rt++){let lt=f[rt];if(lt.cacheKey===R){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new dy(n,R,L,r),f.push(H)),H}function F(L){if(--L.usedTimes===0){let R=f.indexOf(L);f[R]=f[f.length-1],f.pop(),L.destroy()}}function V(L){l.remove(L)}function B(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:q,releaseProgram:F,releaseShaderCache:V,programs:f,dispose:B}}function gy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,p,d,v,E,y){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:d,groupOrder:v,renderOrder:u.renderOrder,z:E,group:y},n[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=d,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=E,m.group=y),t++,m}function a(u,p,d,v,E,y){let m=o(u,p,d,v,E,y);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,p,d,v,E,y){let m=o(u,p,d,v,E,y);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function h(u,p){e.length>1&&e.sort(u||xy),i.length>1&&i.sort(p||Vu),s.length>1&&s.sort(p||Vu)}function f(){for(let u=t,p=n.length;u<p;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:h}}function yy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Hu,n.set(i,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function _y(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new we};break;case"SpotLight":e={position:new z,direction:new z,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new we,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new we,groundColor:new we};break;case"RectAreaLight":e={color:new we,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function vy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var by=0;function My(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wy(n){let t=new _y,e=vy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new z);let s=new z,r=new Mn,o=new Mn;function a(h){let f=0,u=0,p=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,v=0,E=0,y=0,m=0,S=0,I=0,w=0,q=0,F=0,V=0;h.sort(My);for(let L=0,R=h.length;L<R;L++){let H=h[L],rt=H.color,tt=H.intensity,lt=H.distance,St=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=rt.r*tt,u+=rt.g*tt,p+=rt.b*tt;else if(H.isLightProbe){for(let ot=0;ot<9;ot++)i.probe[ot].addScaledVector(H.sh.coefficients[ot],tt);V++}else if(H.isDirectionalLight){let ot=t.get(H);if(ot.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let Rt=H.shadow,ct=e.get(H);ct.shadowIntensity=Rt.intensity,ct.shadowBias=Rt.bias,ct.shadowNormalBias=Rt.normalBias,ct.shadowRadius=Rt.radius,ct.shadowMapSize=Rt.mapSize,i.directionalShadow[d]=ct,i.directionalShadowMap[d]=St,i.directionalShadowMatrix[d]=H.shadow.matrix,S++}i.directional[d]=ot,d++}else if(H.isSpotLight){let ot=t.get(H);ot.position.setFromMatrixPosition(H.matrixWorld),ot.color.copy(rt).multiplyScalar(tt),ot.distance=lt,ot.coneCos=Math.cos(H.angle),ot.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ot.decay=H.decay,i.spot[E]=ot;let Rt=H.shadow;if(H.map&&(i.spotLightMap[q]=H.map,q++,Rt.updateMatrices(H),H.castShadow&&F++),i.spotLightMatrix[E]=Rt.matrix,H.castShadow){let ct=e.get(H);ct.shadowIntensity=Rt.intensity,ct.shadowBias=Rt.bias,ct.shadowNormalBias=Rt.normalBias,ct.shadowRadius=Rt.radius,ct.shadowMapSize=Rt.mapSize,i.spotShadow[E]=ct,i.spotShadowMap[E]=St,w++}E++}else if(H.isRectAreaLight){let ot=t.get(H);ot.color.copy(rt).multiplyScalar(tt),ot.halfWidth.set(H.width*.5,0,0),ot.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=ot,y++}else if(H.isPointLight){let ot=t.get(H);if(ot.color.copy(H.color).multiplyScalar(H.intensity),ot.distance=H.distance,ot.decay=H.decay,H.castShadow){let Rt=H.shadow,ct=e.get(H);ct.shadowIntensity=Rt.intensity,ct.shadowBias=Rt.bias,ct.shadowNormalBias=Rt.normalBias,ct.shadowRadius=Rt.radius,ct.shadowMapSize=Rt.mapSize,ct.shadowCameraNear=Rt.camera.near,ct.shadowCameraFar=Rt.camera.far,i.pointShadow[v]=ct,i.pointShadowMap[v]=St,i.pointShadowMatrix[v]=H.shadow.matrix,I++}i.point[v]=ot,v++}else if(H.isHemisphereLight){let ot=t.get(H);ot.skyColor.copy(H.color).multiplyScalar(tt),ot.groundColor.copy(H.groundColor).multiplyScalar(tt),i.hemi[m]=ot,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$t.LTC_FLOAT_1,i.rectAreaLTC2=$t.LTC_FLOAT_2):(i.rectAreaLTC1=$t.LTC_HALF_1,i.rectAreaLTC2=$t.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=p;let B=i.hash;(B.directionalLength!==d||B.pointLength!==v||B.spotLength!==E||B.rectAreaLength!==y||B.hemiLength!==m||B.numDirectionalShadows!==S||B.numPointShadows!==I||B.numSpotShadows!==w||B.numSpotMaps!==q||B.numLightProbes!==V)&&(i.directional.length=d,i.spot.length=E,i.rectArea.length=y,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=w+q-F,i.spotLightMap.length=q,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=V,B.directionalLength=d,B.pointLength=v,B.spotLength=E,B.rectAreaLength=y,B.hemiLength=m,B.numDirectionalShadows=S,B.numPointShadows=I,B.numSpotShadows=w,B.numSpotMaps=q,B.numLightProbes=V,i.version=by++)}function l(h,f){let u=0,p=0,d=0,v=0,E=0,y=f.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){let I=h[m];if(I.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),u++}else if(I.isSpotLight){let w=i.spot[d];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),d++}else if(I.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),o.identity(),r.copy(I.matrixWorld),r.premultiply(y),o.extractRotation(r),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(I.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),p++}else if(I.isHemisphereLight){let w=i.hemi[E];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(y),E++}}}return{setup:a,setupView:l,state:i}}function Gu(n){let t=new wy(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function o(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Sy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Gu(n),t.set(s,[a])):r>=o.length?(a=new Gu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var zh=class extends qs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fh=class extends qs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
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
}`;function Ay(n,t,e){let i=new da,s=new At,r=new At,o=new vn,a=new zh({depthPacking:Lp}),l=new Fh,h={},f=e.maxTextureSize,u={[dr]:Jn,[Jn]:dr,[Rn]:Rn},p=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Ty,fragmentShader:Ey}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let v=new bn;v.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ht(v,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let m=this.type;this.render=function(F,V,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;let L=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),rt=n.state;rt.setBlending(hr),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);let tt=m!==Os&&this.type===Os,lt=m===Os&&this.type!==Os;for(let St=0,ot=F.length;St<ot;St++){let Rt=F[St],ct=Rt.shadow;if(ct===void 0){console.warn("THREE.WebGLShadowMap:",Rt,"has no shadow.");continue}if(ct.autoUpdate===!1&&ct.needsUpdate===!1)continue;s.copy(ct.mapSize);let Nt=ct.getFrameExtents();if(s.multiply(Nt),r.copy(ct.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Nt.x),s.x=r.x*Nt.x,ct.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Nt.y),s.y=r.y*Nt.y,ct.mapSize.y=r.y)),ct.map===null||tt===!0||lt===!0){let kt=this.type!==Os?{minFilter:as,magFilter:as}:{};ct.map!==null&&ct.map.dispose(),ct.map=new ls(s.x,s.y,kt),ct.map.texture.name=Rt.name+".shadowMap",ct.camera.updateProjectionMatrix()}n.setRenderTarget(ct.map),n.clear();let Zt=ct.getViewportCount();for(let kt=0;kt<Zt;kt++){let ie=ct.getViewport(kt);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),rt.viewport(o),ct.updateMatrices(Rt,kt),i=ct.getFrustum(),w(V,B,ct.camera,Rt,this.type)}ct.isPointLightShadow!==!0&&this.type===Os&&S(ct,B),ct.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(L,R,H)};function S(F,V){let B=t.update(E);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,d.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ls(s.x,s.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(V,null,B,p,E,null),d.uniforms.shadow_pass.value=F.mapPass.texture,d.uniforms.resolution.value=F.mapSize,d.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(V,null,B,d,E,null)}function I(F,V,B,L){let R=null,H=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=B.isPointLight===!0?l:a,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){let rt=R.uuid,tt=V.uuid,lt=h[rt];lt===void 0&&(lt={},h[rt]=lt);let St=lt[tt];St===void 0&&(St=R.clone(),lt[tt]=St,V.addEventListener("dispose",q)),R=St}if(R.visible=V.visible,R.wireframe=V.wireframe,L===Os?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:u[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let rt=n.properties.get(R);rt.light=B}return R}function w(F,V,B,L,R){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Os)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);let tt=t.update(F),lt=F.material;if(Array.isArray(lt)){let St=tt.groups;for(let ot=0,Rt=St.length;ot<Rt;ot++){let ct=St[ot],Nt=lt[ct.materialIndex];if(Nt&&Nt.visible){let Zt=I(F,Nt,L,R);F.onBeforeShadow(n,F,V,B,tt,Zt,ct),n.renderBufferDirect(B,null,tt,Zt,F,ct),F.onAfterShadow(n,F,V,B,tt,Zt,ct)}}}else if(lt.visible){let St=I(F,lt,L,R);F.onBeforeShadow(n,F,V,B,tt,St,null),n.renderBufferDirect(B,null,tt,St,F,null),F.onAfterShadow(n,F,V,B,tt,St,null)}}let rt=F.children;for(let tt=0,lt=rt.length;tt<lt;tt++)w(rt[tt],V,B,L,R)}function q(F){F.target.removeEventListener("dispose",q);for(let B in h){let L=h[B],R=F.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}var Ry={[Bc]:Vc,[Hc]:Xc,[Gc]:qc,[bo]:Wc,[Vc]:Bc,[Xc]:Hc,[qc]:Gc,[Wc]:bo};function Cy(n,t){function e(){let Y=!1,Xt=new vn,ut=null,bt=new vn(0,0,0,0);return{setMask:function(st){ut!==st&&!Y&&(n.colorMask(st,st,st,st),ut=st)},setLocked:function(st){Y=st},setClear:function(st,Ht,Ce,qe,Dn){Dn===!0&&(st*=qe,Ht*=qe,Ce*=qe),Xt.set(st,Ht,Ce,qe),bt.equals(Xt)===!1&&(n.clearColor(st,Ht,Ce,qe),bt.copy(Xt))},reset:function(){Y=!1,ut=null,bt.set(-1,0,0,0)}}}function i(){let Y=!1,Xt=!1,ut=null,bt=null,st=null;return{setReversed:function(Ht){if(Xt!==Ht){let Ce=t.get("EXT_clip_control");Xt?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);let qe=st;st=null,this.setClear(qe)}Xt=Ht},getReversed:function(){return Xt},setTest:function(Ht){Ht?Ft(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(Ht){ut!==Ht&&!Y&&(n.depthMask(Ht),ut=Ht)},setFunc:function(Ht){if(Xt&&(Ht=Ry[Ht]),bt!==Ht){switch(Ht){case Bc:n.depthFunc(n.NEVER);break;case Vc:n.depthFunc(n.ALWAYS);break;case Hc:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case Gc:n.depthFunc(n.EQUAL);break;case Wc:n.depthFunc(n.GEQUAL);break;case Xc:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=Ht}},setLocked:function(Ht){Y=Ht},setClear:function(Ht){st!==Ht&&(Xt&&(Ht=1-Ht),n.clearDepth(Ht),st=Ht)},reset:function(){Y=!1,ut=null,bt=null,st=null,Xt=!1}}}function s(){let Y=!1,Xt=null,ut=null,bt=null,st=null,Ht=null,Ce=null,qe=null,Dn=null;return{setTest:function(Xe){Y||(Xe?Ft(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Xe){Xt!==Xe&&!Y&&(n.stencilMask(Xe),Xt=Xe)},setFunc:function(Xe,Qn,je){(ut!==Xe||bt!==Qn||st!==je)&&(n.stencilFunc(Xe,Qn,je),ut=Xe,bt=Qn,st=je)},setOp:function(Xe,Qn,je){(Ht!==Xe||Ce!==Qn||qe!==je)&&(n.stencilOp(Xe,Qn,je),Ht=Xe,Ce=Qn,qe=je)},setLocked:function(Xe){Y=Xe},setClear:function(Xe){Dn!==Xe&&(n.clearStencil(Xe),Dn=Xe)},reset:function(){Y=!1,Xt=null,ut=null,bt=null,st=null,Ht=null,Ce=null,qe=null,Dn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,f={},u={},p=new WeakMap,d=[],v=null,E=!1,y=null,m=null,S=null,I=null,w=null,q=null,F=null,V=new we(0,0,0),B=0,L=!1,R=null,H=null,rt=null,tt=null,lt=null,St=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,Rt=0,ct=n.getParameter(n.VERSION);ct.indexOf("WebGL")!==-1?(Rt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),ot=Rt>=1):ct.indexOf("OpenGL ES")!==-1&&(Rt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),ot=Rt>=2);let Nt=null,Zt={},kt=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ie=new vn().fromArray(kt),yt=new vn().fromArray(ie);function Lt(Y,Xt,ut,bt){let st=new Uint8Array(4),Ht=n.createTexture();n.bindTexture(Y,Ht),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<ut;Ce++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Xt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(Xt+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return Ht}let se={};se[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ft(n.DEPTH_TEST),o.setFunc(bo),vt(!1),zt(Yf),Ft(n.CULL_FACE),O(hr);function Ft(Y){f[Y]!==!0&&(n.enable(Y),f[Y]=!0)}function de(Y){f[Y]!==!1&&(n.disable(Y),f[Y]=!1)}function ue(Y,Xt){return u[Y]!==Xt?(n.bindFramebuffer(Y,Xt),u[Y]=Xt,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Xt),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Xt),!0):!1}function le(Y,Xt){let ut=d,bt=!1;if(Y){ut=p.get(Xt),ut===void 0&&(ut=[],p.set(Xt,ut));let st=Y.textures;if(ut.length!==st.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let Ht=0,Ce=st.length;Ht<Ce;Ht++)ut[Ht]=n.COLOR_ATTACHMENT0+Ht;ut.length=st.length,bt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,bt=!0);bt&&n.drawBuffers(ut)}function Oe(Y){return v!==Y?(n.useProgram(Y),v=Y,!0):!1}let Tt={[Lr]:n.FUNC_ADD,[sp]:n.FUNC_SUBTRACT,[rp]:n.FUNC_REVERSE_SUBTRACT};Tt[op]=n.MIN,Tt[ap]=n.MAX;let Ut={[lp]:n.ZERO,[cp]:n.ONE,[hp]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[up]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA,[xp]:n.CONSTANT_COLOR,[yp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function O(Y,Xt,ut,bt,st,Ht,Ce,qe,Dn,Xe){if(Y===hr){E===!0&&(de(n.BLEND),E=!1);return}if(E===!1&&(Ft(n.BLEND),E=!0),Y!==ip){if(Y!==y||Xe!==L){if((m!==Lr||w!==Lr)&&(n.blendEquation(n.FUNC_ADD),m=Lr,w=Lr),Xe)switch(Y){case xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ws:n.blendFunc(n.ONE,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ws:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}S=null,I=null,q=null,F=null,V.set(0,0,0),B=0,y=Y,L=Xe}return}st=st||Xt,Ht=Ht||ut,Ce=Ce||bt,(Xt!==m||st!==w)&&(n.blendEquationSeparate(Tt[Xt],Tt[st]),m=Xt,w=st),(ut!==S||bt!==I||Ht!==q||Ce!==F)&&(n.blendFuncSeparate(Ut[ut],Ut[bt],Ut[Ht],Ut[Ce]),S=ut,I=bt,q=Ht,F=Ce),(qe.equals(V)===!1||Dn!==B)&&(n.blendColor(qe.r,qe.g,qe.b,Dn),V.copy(qe),B=Dn),y=Y,L=!1}function re(Y,Xt){Y.side===Rn?de(n.CULL_FACE):Ft(n.CULL_FACE);let ut=Y.side===Jn;Xt&&(ut=!ut),vt(ut),Y.blending===xo&&Y.transparent===!1?O(hr):O(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let bt=Y.stencilWrite;a.setTest(bt),bt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),be(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(Y){R!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),R=Y)}function zt(Y){Y!==ep?(Ft(n.CULL_FACE),Y!==H&&(Y===Yf?n.cullFace(n.BACK):Y===np?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),H=Y}function It(Y){Y!==rt&&(ot&&n.lineWidth(Y),rt=Y)}function be(Y,Xt,ut){Y?(Ft(n.POLYGON_OFFSET_FILL),(tt!==Xt||lt!==ut)&&(n.polygonOffset(Xt,ut),tt=Xt,lt=ut)):de(n.POLYGON_OFFSET_FILL)}function qt(Y){Y?Ft(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=n.TEXTURE0+St-1),Nt!==Y&&(n.activeTexture(Y),Nt=Y)}function A(Y,Xt,ut){ut===void 0&&(Nt===null?ut=n.TEXTURE0+St-1:ut=Nt);let bt=Zt[ut];bt===void 0&&(bt={type:void 0,texture:void 0},Zt[ut]=bt),(bt.type!==Y||bt.texture!==Xt)&&(Nt!==ut&&(n.activeTexture(ut),Nt=ut),n.bindTexture(Y,Xt||se[Y]),bt.type=Y,bt.texture=Xt)}function Q(){let Y=Zt[Nt];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function mt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Jt(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ge(Y){Ie.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Ie.copy(Y))}function Kt(Y){yt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),yt.copy(Y))}function De(Y,Xt){let ut=h.get(Xt);ut===void 0&&(ut=new WeakMap,h.set(Xt,ut));let bt=ut.get(Y);bt===void 0&&(bt=n.getUniformBlockIndex(Xt,Y.name),ut.set(Y,bt))}function ee(Y,Xt){let bt=h.get(Xt).get(Y);l.get(Xt)!==bt&&(n.uniformBlockBinding(Xt,bt,Y.__bindingPointIndex),l.set(Xt,bt))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Nt=null,Zt={},u={},p=new WeakMap,d=[],v=null,E=!1,y=null,m=null,S=null,I=null,w=null,q=null,F=null,V=new we(0,0,0),B=0,L=!1,R=null,H=null,rt=null,tt=null,lt=null,Ie.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ft,disable:de,bindFramebuffer:ue,drawBuffers:le,useProgram:Oe,setBlending:O,setMaterial:re,setFlipSided:vt,setCullFace:zt,setLineWidth:It,setPolygonOffset:be,setScissorTest:qt,activeTexture:U,bindTexture:A,unbindTexture:Q,compressedTexImage2D:mt,compressedTexImage3D:dt,texImage2D:Jt,texImage3D:pe,updateUBOMapping:De,uniformBlockBinding:ee,texStorage2D:Re,texStorage3D:Ct,texSubImage2D:xt,texSubImage3D:Wt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Yt,scissor:ge,viewport:Kt,reset:We}}function Wu(n,t,e,i){let s=Iy(i);switch(e){case hd:return n*t;case ud:return n*t;case dd:return n*t*2;case pd:return n*t/s.components*s.byteLength;case xf:return n*t/s.components*s.byteLength;case md:return n*t*2/s.components*s.byteLength;case yf:return n*t*2/s.components*s.byteLength;case fd:return n*t*3/s.components*s.byteLength;case os:return n*t*4/s.components*s.byteLength;case _f:return n*t*4/s.components*s.byteLength;case dl:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kc:case Qc:return Math.max(n,16)*Math.max(t,8)/4;case Jc:case jc:return Math.max(n,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case dh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xl:case xh:case yh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gd:case _h:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vh:case bh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iy(n){switch(n){case Ws:case ad:return{byteLength:1,components:1};case ca:case ld:case Ma:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case zr:case pf:case ks:return{byteLength:4,components:1};case cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Py(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,f=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return d?new OffscreenCanvas(U,A):ha("canvas")}function E(U,A,Q){let mt=1,dt=qt(U);if((dt.width>Q||dt.height>Q)&&(mt=Q/Math.max(dt.width,dt.height)),mt<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let xt=Math.floor(mt*dt.width),Wt=Math.floor(mt*dt.height);u===void 0&&(u=v(xt,Wt));let Ot=A?v(xt,Wt):u;return Ot.width=xt,Ot.height=Wt,Ot.getContext("2d").drawImage(U,0,0,xt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+xt+"x"+Wt+")."),Ot}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){n.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(U,A,Q,mt,dt=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xt=A;if(A===n.RED&&(Q===n.FLOAT&&(xt=n.R32F),Q===n.HALF_FLOAT&&(xt=n.R16F),Q===n.UNSIGNED_BYTE&&(xt=n.R8)),A===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(xt=n.R8UI),Q===n.UNSIGNED_SHORT&&(xt=n.R16UI),Q===n.UNSIGNED_INT&&(xt=n.R32UI),Q===n.BYTE&&(xt=n.R8I),Q===n.SHORT&&(xt=n.R16I),Q===n.INT&&(xt=n.R32I)),A===n.RG&&(Q===n.FLOAT&&(xt=n.RG32F),Q===n.HALF_FLOAT&&(xt=n.RG16F),Q===n.UNSIGNED_BYTE&&(xt=n.RG8)),A===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(xt=n.RG8UI),Q===n.UNSIGNED_SHORT&&(xt=n.RG16UI),Q===n.UNSIGNED_INT&&(xt=n.RG32UI),Q===n.BYTE&&(xt=n.RG8I),Q===n.SHORT&&(xt=n.RG16I),Q===n.INT&&(xt=n.RG32I)),A===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(xt=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(xt=n.RGB16UI),Q===n.UNSIGNED_INT&&(xt=n.RGB32UI),Q===n.BYTE&&(xt=n.RGB8I),Q===n.SHORT&&(xt=n.RGB16I),Q===n.INT&&(xt=n.RGB32I)),A===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(xt=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(xt=n.RGBA16UI),Q===n.UNSIGNED_INT&&(xt=n.RGBA32UI),Q===n.BYTE&&(xt=n.RGBA8I),Q===n.SHORT&&(xt=n.RGBA16I),Q===n.INT&&(xt=n.RGBA32I)),A===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&(xt=n.RGB9_E5),A===n.RGBA){let Wt=dt?Vl:en.getTransfer(mt);Q===n.FLOAT&&(xt=n.RGBA32F),Q===n.HALF_FLOAT&&(xt=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(xt=Wt===yn?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(xt=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(xt=n.RGB5_A1)}return(xt===n.R16F||xt===n.R32F||xt===n.RG16F||xt===n.RG32F||xt===n.RGBA16F||xt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function w(U,A){let Q;return U?A===null||A===zr||A===So?Q=n.DEPTH24_STENCIL8:A===ks?Q=n.DEPTH32F_STENCIL8:A===ca&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zr||A===So?Q=n.DEPTH_COMPONENT24:A===ks?Q=n.DEPTH_COMPONENT32F:A===ca&&(Q=n.DEPTH_COMPONENT16),Q}function q(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==as&&U.minFilter!==Ms?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function F(U){let A=U.target;A.removeEventListener("dispose",F),B(A),A.isVideoTexture&&f.delete(A)}function V(U){let A=U.target;A.removeEventListener("dispose",V),R(A)}function B(U){let A=i.get(U);if(A.__webglInit===void 0)return;let Q=U.source,mt=p.get(Q);if(mt){let dt=mt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&L(U),Object.keys(mt).length===0&&p.delete(Q)}i.remove(U)}function L(U){let A=i.get(U);n.deleteTexture(A.__webglTexture);let Q=U.source,mt=p.get(Q);delete mt[A.__cacheKey],o.memory.textures--}function R(U){let A=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let dt=0;dt<A.__webglFramebuffer[mt].length;dt++)n.deleteFramebuffer(A.__webglFramebuffer[mt][dt]);else n.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)n.deleteFramebuffer(A.__webglFramebuffer[mt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Q=U.textures;for(let mt=0,dt=Q.length;mt<dt;mt++){let xt=i.get(Q[mt]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(Q[mt])}i.remove(U)}let H=0;function rt(){H=0}function tt(){let U=H;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),H+=1,U}function lt(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function St(U,A){let Q=i.get(U);if(U.isVideoTexture&&It(U),U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){let mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(Q,U,A);return}}e.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+A)}function ot(U,A){let Q=i.get(U);if(U.version>0&&Q.__version!==U.version){yt(Q,U,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+A)}function Rt(U,A){let Q=i.get(U);if(U.version>0&&Q.__version!==U.version){yt(Q,U,A);return}e.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+A)}function ct(U,A){let Q=i.get(U);if(U.version>0&&Q.__version!==U.version){Lt(Q,U,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+A)}let Nt={[Gs]:n.REPEAT,[Ur]:n.CLAMP_TO_EDGE,[Zc]:n.MIRRORED_REPEAT},Zt={[as]:n.NEAREST,[Ip]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[Ms]:n.LINEAR,[nc]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},kt={[Up]:n.NEVER,[Bp]:n.ALWAYS,[Np]:n.LESS,[yd]:n.LEQUAL,[zp]:n.EQUAL,[kp]:n.GEQUAL,[Fp]:n.GREATER,[Op]:n.NOTEQUAL};function ie(U,A){if(A.type===ks&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ms||A.magFilter===nc||A.magFilter===Fa||A.magFilter===Nr||A.minFilter===Ms||A.minFilter===nc||A.minFilter===Fa||A.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Nt[A.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Nt[A.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Nt[A.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Zt[A.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Zt[A.minFilter]),A.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,kt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===as||A.minFilter!==Fa&&A.minFilter!==Nr||A.type===ks&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ie(U,A){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",F));let mt=A.source,dt=p.get(mt);dt===void 0&&(dt={},p.set(mt,dt));let xt=lt(A);if(xt!==U.__cacheKey){dt[xt]===void 0&&(dt[xt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),dt[xt].usedTimes++;let Wt=dt[U.__cacheKey];Wt!==void 0&&(dt[U.__cacheKey].usedTimes--,Wt.usedTimes===0&&L(A)),U.__cacheKey=xt,U.__webglTexture=dt[xt].texture}return Q}function yt(U,A,Q){let mt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=n.TEXTURE_3D);let dt=Ie(U,A),xt=A.source;e.bindTexture(mt,U.__webglTexture,n.TEXTURE0+Q);let Wt=i.get(xt);if(xt.version!==Wt.__version||dt===!0){e.activeTexture(n.TEXTURE0+Q);let Ot=en.getPrimaries(en.workingColorSpace),Yt=A.colorSpace===lr?null:en.getPrimaries(A.colorSpace),Re=A.colorSpace===lr||Ot===Yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ct=E(A.image,!1,s.maxTextureSize);Ct=be(A,Ct);let Jt=r.convert(A.format,A.colorSpace),pe=r.convert(A.type),ge=I(A.internalFormat,Jt,pe,A.colorSpace,A.isVideoTexture);ie(mt,A);let Kt,De=A.mipmaps,ee=A.isVideoTexture!==!0,We=Wt.__version===void 0||dt===!0,Y=xt.dataReady,Xt=q(A,Ct);if(A.isDepthTexture)ge=w(A.format===To,A.type),We&&(ee?e.texStorage2D(n.TEXTURE_2D,1,ge,Ct.width,Ct.height):e.texImage2D(n.TEXTURE_2D,0,ge,Ct.width,Ct.height,0,Jt,pe,null));else if(A.isDataTexture)if(De.length>0){ee&&We&&e.texStorage2D(n.TEXTURE_2D,Xt,ge,De[0].width,De[0].height);for(let ut=0,bt=De.length;ut<bt;ut++)Kt=De[ut],ee?Y&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Kt.width,Kt.height,Jt,pe,Kt.data):e.texImage2D(n.TEXTURE_2D,ut,ge,Kt.width,Kt.height,0,Jt,pe,Kt.data);A.generateMipmaps=!1}else ee?(We&&e.texStorage2D(n.TEXTURE_2D,Xt,ge,Ct.width,Ct.height),Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Jt,pe,Ct.data)):e.texImage2D(n.TEXTURE_2D,0,ge,Ct.width,Ct.height,0,Jt,pe,Ct.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ee&&We&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,ge,De[0].width,De[0].height,Ct.depth);for(let ut=0,bt=De.length;ut<bt;ut++)if(Kt=De[ut],A.format!==os)if(Jt!==null)if(ee){if(Y)if(A.layerUpdates.size>0){let st=Wu(Kt.width,Kt.height,A.format,A.type);for(let Ht of A.layerUpdates){let Ce=Kt.data.subarray(Ht*st/Kt.data.BYTES_PER_ELEMENT,(Ht+1)*st/Kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Ht,Kt.width,Kt.height,1,Jt,Ce)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Kt.width,Kt.height,Ct.depth,Jt,Kt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,ge,Kt.width,Kt.height,Ct.depth,0,Kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?Y&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Kt.width,Kt.height,Ct.depth,Jt,pe,Kt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,ge,Kt.width,Kt.height,Ct.depth,0,Jt,pe,Kt.data)}else{ee&&We&&e.texStorage2D(n.TEXTURE_2D,Xt,ge,De[0].width,De[0].height);for(let ut=0,bt=De.length;ut<bt;ut++)Kt=De[ut],A.format!==os?Jt!==null?ee?Y&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Kt.width,Kt.height,Jt,Kt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,ge,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Y&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Kt.width,Kt.height,Jt,pe,Kt.data):e.texImage2D(n.TEXTURE_2D,ut,ge,Kt.width,Kt.height,0,Jt,pe,Kt.data)}else if(A.isDataArrayTexture)if(ee){if(We&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,ge,Ct.width,Ct.height,Ct.depth),Y)if(A.layerUpdates.size>0){let ut=Wu(Ct.width,Ct.height,A.format,A.type);for(let bt of A.layerUpdates){let st=Ct.data.subarray(bt*ut/Ct.data.BYTES_PER_ELEMENT,(bt+1)*ut/Ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,Ct.width,Ct.height,1,Jt,pe,st)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Jt,pe,Ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,Ct.width,Ct.height,Ct.depth,0,Jt,pe,Ct.data);else if(A.isData3DTexture)ee?(We&&e.texStorage3D(n.TEXTURE_3D,Xt,ge,Ct.width,Ct.height,Ct.depth),Y&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Jt,pe,Ct.data)):e.texImage3D(n.TEXTURE_3D,0,ge,Ct.width,Ct.height,Ct.depth,0,Jt,pe,Ct.data);else if(A.isFramebufferTexture){if(We)if(ee)e.texStorage2D(n.TEXTURE_2D,Xt,ge,Ct.width,Ct.height);else{let ut=Ct.width,bt=Ct.height;for(let st=0;st<Xt;st++)e.texImage2D(n.TEXTURE_2D,st,ge,ut,bt,0,Jt,pe,null),ut>>=1,bt>>=1}}else if(De.length>0){if(ee&&We){let ut=qt(De[0]);e.texStorage2D(n.TEXTURE_2D,Xt,ge,ut.width,ut.height)}for(let ut=0,bt=De.length;ut<bt;ut++)Kt=De[ut],ee?Y&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Jt,pe,Kt):e.texImage2D(n.TEXTURE_2D,ut,ge,Jt,pe,Kt);A.generateMipmaps=!1}else if(ee){if(We){let ut=qt(Ct);e.texStorage2D(n.TEXTURE_2D,Xt,ge,ut.width,ut.height)}Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Jt,pe,Ct)}else e.texImage2D(n.TEXTURE_2D,0,ge,Jt,pe,Ct);y(A)&&m(mt),Wt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Lt(U,A,Q){if(A.image.length!==6)return;let mt=Ie(U,A),dt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+Q);let xt=i.get(dt);if(dt.version!==xt.__version||mt===!0){e.activeTexture(n.TEXTURE0+Q);let Wt=en.getPrimaries(en.workingColorSpace),Ot=A.colorSpace===lr?null:en.getPrimaries(A.colorSpace),Yt=A.colorSpace===lr||Wt===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Re=A.isCompressedTexture||A.image[0].isCompressedTexture,Ct=A.image[0]&&A.image[0].isDataTexture,Jt=[];for(let bt=0;bt<6;bt++)!Re&&!Ct?Jt[bt]=E(A.image[bt],!0,s.maxCubemapSize):Jt[bt]=Ct?A.image[bt].image:A.image[bt],Jt[bt]=be(A,Jt[bt]);let pe=Jt[0],ge=r.convert(A.format,A.colorSpace),Kt=r.convert(A.type),De=I(A.internalFormat,ge,Kt,A.colorSpace),ee=A.isVideoTexture!==!0,We=xt.__version===void 0||mt===!0,Y=dt.dataReady,Xt=q(A,pe);ie(n.TEXTURE_CUBE_MAP,A);let ut;if(Re){ee&&We&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,De,pe.width,pe.height);for(let bt=0;bt<6;bt++){ut=Jt[bt].mipmaps;for(let st=0;st<ut.length;st++){let Ht=ut[st];A.format!==os?ge!==null?ee?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st,0,0,Ht.width,Ht.height,ge,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st,De,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st,0,0,Ht.width,Ht.height,ge,Kt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st,De,Ht.width,Ht.height,0,ge,Kt,Ht.data)}}}else{if(ut=A.mipmaps,ee&&We){ut.length>0&&Xt++;let bt=qt(Jt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,De,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Ct){ee?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt[bt].width,Jt[bt].height,ge,Kt,Jt[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,De,Jt[bt].width,Jt[bt].height,0,ge,Kt,Jt[bt].data);for(let st=0;st<ut.length;st++){let Ce=ut[st].image[bt].image;ee?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st+1,0,0,Ce.width,Ce.height,ge,Kt,Ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st+1,De,Ce.width,Ce.height,0,ge,Kt,Ce.data)}}else{ee?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ge,Kt,Jt[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,De,ge,Kt,Jt[bt]);for(let st=0;st<ut.length;st++){let Ht=ut[st];ee?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st+1,0,0,ge,Kt,Ht.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,st+1,De,ge,Kt,Ht.image[bt])}}}y(A)&&m(n.TEXTURE_CUBE_MAP),xt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function se(U,A,Q,mt,dt,xt){let Wt=r.convert(Q.format,Q.colorSpace),Ot=r.convert(Q.type),Yt=I(Q.internalFormat,Wt,Ot,Q.colorSpace),Re=i.get(A),Ct=i.get(Q);if(Ct.__renderTarget=A,!Re.__hasExternalTextures){let Jt=Math.max(1,A.width>>xt),pe=Math.max(1,A.height>>xt);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,xt,Yt,Jt,pe,A.depth,0,Wt,Ot,null):e.texImage2D(dt,xt,Yt,Jt,pe,0,Wt,Ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),zt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,dt,Ct.__webglTexture,0,vt(A)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,dt,Ct.__webglTexture,xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(U,A,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,U),A.depthBuffer){let mt=A.depthTexture,dt=mt&&mt.isDepthTexture?mt.type:null,xt=w(A.stencilBuffer,dt),Wt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ot=vt(A);zt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,xt,A.width,A.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,xt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,xt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Wt,n.RENDERBUFFER,U)}else{let mt=A.textures;for(let dt=0;dt<mt.length;dt++){let xt=mt[dt],Wt=r.convert(xt.format,xt.colorSpace),Ot=r.convert(xt.type),Yt=I(xt.internalFormat,Wt,Ot,xt.colorSpace),Re=vt(A);Q&&zt(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Yt,A.width,A.height):zt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Yt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Yt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=i.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),St(A.depthTexture,0);let dt=mt.__webglTexture,xt=vt(A);if(A.depthTexture.format===yo)zt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0);else if(A.depthTexture.format===To)zt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function ue(U){let A=i.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let mt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){let dt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",dt)};mt.addEventListener("dispose",dt),A.__depthDisposeCallback=dt}A.__boundDepthTexture=mt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");de(A.__webglFramebuffer,U)}else if(Q){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=n.createRenderbuffer(),Ft(A.__webglDepthbuffer[mt],U,!1);else{let dt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,xt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ft(A.__webglDepthbuffer,U,!1);else{let mt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(U,A,Q){let mt=i.get(U);A!==void 0&&se(mt.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&ue(U)}function Oe(U){let A=U.texture,Q=i.get(U),mt=i.get(A);U.addEventListener("dispose",V);let dt=U.textures,xt=U.isWebGLCubeRenderTarget===!0,Wt=dt.length>1;if(Wt||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=A.version,o.memory.textures++),xt){Q.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ot]=[];for(let Yt=0;Yt<A.mipmaps.length;Yt++)Q.__webglFramebuffer[Ot][Yt]=n.createFramebuffer()}else Q.__webglFramebuffer[Ot]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ot=0;Ot<A.mipmaps.length;Ot++)Q.__webglFramebuffer[Ot]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Wt)for(let Ot=0,Yt=dt.length;Ot<Yt;Ot++){let Re=i.get(dt[Ot]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&zt(U)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ot=0;Ot<dt.length;Ot++){let Yt=dt[Ot];Q.__webglColorRenderbuffer[Ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[Ot]);let Re=r.convert(Yt.format,Yt.colorSpace),Ct=r.convert(Yt.type),Jt=I(Yt.internalFormat,Re,Ct,Yt.colorSpace,U.isXRRenderTarget===!0),pe=vt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Jt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(Q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xt){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),ie(n.TEXTURE_CUBE_MAP,A);for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let Yt=0;Yt<A.mipmaps.length;Yt++)se(Q.__webglFramebuffer[Ot][Yt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Yt);else se(Q.__webglFramebuffer[Ot],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);y(A)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Ot=0,Yt=dt.length;Ot<Yt;Ot++){let Re=dt[Ot],Ct=i.get(Re);e.bindTexture(n.TEXTURE_2D,Ct.__webglTexture),ie(n.TEXTURE_2D,Re),se(Q.__webglFramebuffer,U,Re,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,0),y(Re)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Ot=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ot,mt.__webglTexture),ie(Ot,A),A.mipmaps&&A.mipmaps.length>0)for(let Yt=0;Yt<A.mipmaps.length;Yt++)se(Q.__webglFramebuffer[Yt],U,A,n.COLOR_ATTACHMENT0,Ot,Yt);else se(Q.__webglFramebuffer,U,A,n.COLOR_ATTACHMENT0,Ot,0);y(A)&&m(Ot),e.unbindTexture()}U.depthBuffer&&ue(U)}function Tt(U){let A=U.textures;for(let Q=0,mt=A.length;Q<mt;Q++){let dt=A[Q];if(y(dt)){let xt=S(U),Wt=i.get(dt).__webglTexture;e.bindTexture(xt,Wt),m(xt),e.unbindTexture()}}}let Ut=[],O=[];function re(U){if(U.samples>0){if(zt(U)===!1){let A=U.textures,Q=U.width,mt=U.height,dt=n.COLOR_BUFFER_BIT,xt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=i.get(U),Ot=A.length>1;if(Ot)for(let Yt=0;Yt<A.length;Yt++)e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Yt=0;Yt<A.length;Yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),Ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Yt]);let Re=i.get(A[Yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,Q,mt,0,0,Q,mt,dt,n.NEAREST),l===!0&&(Ut.length=0,O.length=0,Ut.push(n.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ut.push(xt),O.push(xt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ot)for(let Yt=0;Yt<A.length;Yt++){e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Yt]);let Re=i.get(A[Yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,Re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let A=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function vt(U){return Math.min(s.maxSamples,U.samples)}function zt(U){let A=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(U){let A=o.render.frame;f.get(U)!==A&&(f.set(U,A),U.update())}function be(U,A){let Q=U.colorSpace,mt=U.format,dt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Oo&&Q!==lr&&(en.getTransfer(Q)===yn?(mt!==os||dt!==Ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function qt(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=tt,this.resetTextureUnits=rt,this.setTexture2D=St,this.setTexture2DArray=ot,this.setTexture3D=Rt,this.setTextureCube=ct,this.rebindTextures=le,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=se,this.useMultisampledRTT=zt}function Ly(n,t){function e(i,s=lr){let r,o=en.getTransfer(s);if(i===Ws)return n.UNSIGNED_BYTE;if(i===mf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.BYTE;if(i===ld)return n.SHORT;if(i===ca)return n.UNSIGNED_SHORT;if(i===pf)return n.INT;if(i===zr)return n.UNSIGNED_INT;if(i===ks)return n.FLOAT;if(i===Ma)return n.HALF_FLOAT;if(i===hd)return n.ALPHA;if(i===fd)return n.RGB;if(i===os)return n.RGBA;if(i===ud)return n.LUMINANCE;if(i===dd)return n.LUMINANCE_ALPHA;if(i===yo)return n.DEPTH_COMPONENT;if(i===To)return n.DEPTH_STENCIL;if(i===pd)return n.RED;if(i===xf)return n.RED_INTEGER;if(i===md)return n.RG;if(i===yf)return n.RG_INTEGER;if(i===_f)return n.RGBA_INTEGER;if(i===dl||i===pl||i===ml||i===gl)if(o===yn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===Kc||i===jc||i===Qc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===eh||i===nh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===th||i===eh)return o===yn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===fh||i===uh||i===dh||i===ph||i===mh||i===gh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ih)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xl||i===xh||i===yh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xl)return o===yn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gd||i===_h||i===vh||i===bh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Oh=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dy={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let E of t.hand.values()){let y=e.getJointPose(E,i),m=this._getHandJoint(h,E);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let f=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=f.position.distanceTo(u.position),d=.02,v=.005;h.inputState.pinching&&p>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Ri,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ts({vertexShader:Uy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new Ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bh=class extends pr{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,f=null,u=null,p=null,d=null,v=null,E=new kh,y=e.getContextAttributes(),m=null,S=null,I=[],w=[],q=new At,F=null,V=new Bn;V.viewport=new vn;let B=new Bn;B.viewport=new vn;let L=[V,B],R=new Oh,H=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let Lt=I[yt];return Lt===void 0&&(Lt=new oa,I[yt]=Lt),Lt.getTargetRaySpace()},this.getControllerGrip=function(yt){let Lt=I[yt];return Lt===void 0&&(Lt=new oa,I[yt]=Lt),Lt.getGripSpace()},this.getHand=function(yt){let Lt=I[yt];return Lt===void 0&&(Lt=new oa,I[yt]=Lt),Lt.getHandSpace()};function tt(yt){let Lt=w.indexOf(yt.inputSource);if(Lt===-1)return;let se=I[Lt];se!==void 0&&(se.update(yt.inputSource,yt.frame,h||o),se.dispatchEvent({type:yt.type,data:yt.inputSource}))}function lt(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",St);for(let yt=0;yt<I.length;yt++){let Lt=w[yt];Lt!==null&&(w[yt]=null,I[yt].disconnect(Lt))}H=null,rt=null,E.reset(),t.setRenderTarget(m),d=null,p=null,u=null,s=null,S=null,Ie.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(q.width,q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){r=yt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){a=yt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(yt){h=yt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",St),y.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){let Lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ls(d.framebufferWidth,d.framebufferHeight,{format:os,type:Ws,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let Lt=null,se=null,Ft=null;y.depth&&(Ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=y.stencil?To:yo,se=y.stencil?So:zr);let de={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(de),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new ls(p.textureWidth,p.textureHeight,{format:os,type:Ws,depthTexture:new Rl(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function St(yt){for(let Lt=0;Lt<yt.removed.length;Lt++){let se=yt.removed[Lt],Ft=w.indexOf(se);Ft>=0&&(w[Ft]=null,I[Ft].disconnect(se))}for(let Lt=0;Lt<yt.added.length;Lt++){let se=yt.added[Lt],Ft=w.indexOf(se);if(Ft===-1){for(let ue=0;ue<I.length;ue++)if(ue>=w.length){w.push(se),Ft=ue;break}else if(w[ue]===null){w[ue]=se,Ft=ue;break}if(Ft===-1)break}let de=I[Ft];de&&de.connect(se)}}let ot=new z,Rt=new z;function ct(yt,Lt,se){ot.setFromMatrixPosition(Lt.matrixWorld),Rt.setFromMatrixPosition(se.matrixWorld);let Ft=ot.distanceTo(Rt),de=Lt.projectionMatrix.elements,ue=se.projectionMatrix.elements,le=de[14]/(de[10]-1),Oe=de[14]/(de[10]+1),Tt=(de[9]+1)/de[5],Ut=(de[9]-1)/de[5],O=(de[8]-1)/de[0],re=(ue[8]+1)/ue[0],vt=le*O,zt=le*re,It=Ft/(-O+re),be=It*-O;if(Lt.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(be),yt.translateZ(It),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),de[10]===-1)yt.projectionMatrix.copy(Lt.projectionMatrix),yt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse);else{let qt=le+It,U=Oe+It,A=vt-be,Q=zt+(Ft-be),mt=Tt*Oe/U*qt,dt=Ut*Oe/U*qt;yt.projectionMatrix.makePerspective(A,Q,mt,dt,qt,U),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function Nt(yt,Lt){Lt===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(Lt.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let Lt=yt.near,se=yt.far;E.texture!==null&&(E.depthNear>0&&(Lt=E.depthNear),E.depthFar>0&&(se=E.depthFar)),R.near=B.near=V.near=Lt,R.far=B.far=V.far=se,(H!==R.near||rt!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,rt=R.far),V.layers.mask=yt.layers.mask|2,B.layers.mask=yt.layers.mask|4,R.layers.mask=V.layers.mask|B.layers.mask;let Ft=yt.parent,de=R.cameras;Nt(R,Ft);for(let ue=0;ue<de.length;ue++)Nt(de[ue],Ft);de.length===2?ct(R,V,B):R.projectionMatrix.copy(V.projectionMatrix),Zt(yt,R,Ft)};function Zt(yt,Lt,se){se===null?yt.matrix.copy(Lt.matrixWorld):(yt.matrix.copy(se.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(Lt.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(Lt.projectionMatrix),yt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=Sh*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(yt){l=yt,p!==null&&(p.fixedFoveation=yt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=yt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let kt=null;function ie(yt,Lt){if(f=Lt.getViewerPose(h||o),v=Lt,f!==null){let se=f.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ft=!1;se.length!==R.cameras.length&&(R.cameras.length=0,Ft=!0);for(let ue=0;ue<se.length;ue++){let le=se[ue],Oe=null;if(d!==null)Oe=d.getViewport(le);else{let Ut=u.getViewSubImage(p,le);Oe=Ut.viewport,ue===0&&(t.setRenderTargetTextures(S,Ut.colorTexture,p.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(S))}let Tt=L[ue];Tt===void 0&&(Tt=new Bn,Tt.layers.enable(ue),Tt.viewport=new vn,L[ue]=Tt),Tt.matrix.fromArray(le.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(le.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ue===0&&(R.matrix.copy(Tt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ft===!0&&R.cameras.push(Tt)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")){let ue=u.getDepthInformation(se[0]);ue&&ue.isValid&&ue.texture&&E.init(t,ue,s.renderState)}}for(let se=0;se<I.length;se++){let Ft=w[se],de=I[se];Ft!==null&&de!==void 0&&de.update(Ft,Lt,h||o)}kt&&kt(yt,Lt),Lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Lt}),v=null}let Ie=new Md;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(yt){kt=yt},this.dispose=function(){}}},Ir=new Ss,zy=new Mn;function Fy(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,bd(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,S,I,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(y,m):m.isMeshToonMaterial?(r(y,m),u(y,m)):m.isMeshPhongMaterial?(r(y,m),f(y,m)):m.isMeshStandardMaterial?(r(y,m),p(y,m),m.isMeshPhysicalMaterial&&d(y,m,w)):m.isMeshMatcapMaterial?(r(y,m),v(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),E(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(o(y,m),m.isLineDashedMaterial&&a(y,m)):m.isPointsMaterial?l(y,m,S,I):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Jn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Jn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let S=t.get(m),I=S.envMap,w=S.envMapRotation;I&&(y.envMap.value=I,Ir.copy(w),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),y.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(Ir)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function o(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function a(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function l(y,m,S,I){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*S,y.scale.value=I*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function u(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function p(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function d(y,m,S){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,m){m.matcap&&(y.matcap.value=m.matcap)}function E(y,m){let S=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Oy(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,I){let w=I.program;i.uniformBlockBinding(S,w)}function h(S,I){let w=s[S.id];w===void 0&&(v(S),w=f(S),s[S.id]=w,S.addEventListener("dispose",y));let q=I.program;i.updateUBOMapping(S,q);let F=t.render.frame;r[S.id]!==F&&(p(S),r[S.id]=F)}function f(S){let I=u();S.__bindingPointIndex=I;let w=n.createBuffer(),q=S.__size,F=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,q,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,w),w}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let I=s[S.id],w=S.uniforms,q=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let F=0,V=w.length;F<V;F++){let B=Array.isArray(w[F])?w[F]:[w[F]];for(let L=0,R=B.length;L<R;L++){let H=B[L];if(d(H,F,L,q)===!0){let rt=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value],lt=0;for(let St=0;St<tt.length;St++){let ot=tt[St],Rt=E(ot);typeof ot=="number"||typeof ot=="boolean"?(H.__data[0]=ot,n.bufferSubData(n.UNIFORM_BUFFER,rt+lt,H.__data)):ot.isMatrix3?(H.__data[0]=ot.elements[0],H.__data[1]=ot.elements[1],H.__data[2]=ot.elements[2],H.__data[3]=0,H.__data[4]=ot.elements[3],H.__data[5]=ot.elements[4],H.__data[6]=ot.elements[5],H.__data[7]=0,H.__data[8]=ot.elements[6],H.__data[9]=ot.elements[7],H.__data[10]=ot.elements[8],H.__data[11]=0):(ot.toArray(H.__data,lt),lt+=Rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,rt,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,I,w,q){let F=S.value,V=I+"_"+w;if(q[V]===void 0)return typeof F=="number"||typeof F=="boolean"?q[V]=F:q[V]=F.clone(),!0;{let B=q[V];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return q[V]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function v(S){let I=S.uniforms,w=0,q=16;for(let V=0,B=I.length;V<B;V++){let L=Array.isArray(I[V])?I[V]:[I[V]];for(let R=0,H=L.length;R<H;R++){let rt=L[R],tt=Array.isArray(rt.value)?rt.value:[rt.value];for(let lt=0,St=tt.length;lt<St;lt++){let ot=tt[lt],Rt=E(ot),ct=w%q,Nt=ct%Rt.boundary,Zt=ct+Nt;w+=Nt,Zt!==0&&q-Zt<Rt.storage&&(w+=q-Zt),rt.__data=new Float32Array(Rt.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=w,w+=Rt.storage}}}let F=w%q;return F>0&&(w+=q-F),S.__size=w,S.__cache={},this}function E(S){let I={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(I.boundary=4,I.storage=4):S.isVector2?(I.boundary=8,I.storage=8):S.isVector3||S.isColor?(I.boundary=16,I.storage=12):S.isVector4?(I.boundary=16,I.storage=16):S.isMatrix3?(I.boundary=48,I.storage=48):S.isMatrix4?(I.boundary=64,I.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),I}function y(S){let I=S.target;I.removeEventListener("dispose",y);let w=o.indexOf(I.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:m}}var Ro=class{constructor(t={}){let{canvas:e=Hp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let v=new Uint32Array(4),E=new Int32Array(4),y=null,m=null,S=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=fr,this.toneMappingExposure=1;let w=this,q=!1,F=0,V=0,B=null,L=-1,R=null,H=new vn,rt=new vn,tt=null,lt=new we(0),St=0,ot=e.width,Rt=e.height,ct=1,Nt=null,Zt=null,kt=new vn(0,0,ot,Rt),ie=new vn(0,0,ot,Rt),Ie=!1,yt=new da,Lt=!1,se=!1,Ft=new Mn,de=new Mn,ue=new z,le=new vn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Ut(){return B===null?ct:1}let O=i;function re(P,k){return e.getContext(P,k)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),O===null){let k="webgl2";if(O=re(k,P),O===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let vt,zt,It,be,qt,U,A,Q,mt,dt,xt,Wt,Ot,Yt,Re,Ct,Jt,pe,ge,Kt,De,ee,We,Y;function Xt(){vt=new tx(O),vt.init(),ee=new Ly(O,vt),zt=new $g(O,vt,t,ee),It=new Cy(O,vt),zt.reverseDepthBuffer&&p&&It.buffers.depth.setReversed(!0),be=new ix(O),qt=new gy,U=new Py(O,vt,It,qt,zt,ee,be),A=new Jg(w),Q=new Qg(w),mt=new hm(O),We=new qg(O,mt),dt=new ex(O,mt,be,We),xt=new rx(O,dt,mt,be),ge=new sx(O,zt,U),Ct=new Zg(qt),Wt=new my(w,A,Q,vt,zt,We,Ct),Ot=new Fy(w,qt),Yt=new yy,Re=new Sy(vt),pe=new Xg(w,A,Q,It,xt,d,l),Jt=new Ay(w,xt,zt),Y=new Oy(O,be,zt,It),Kt=new Yg(O,vt,be),De=new nx(O,vt,be),be.programs=Wt.programs,w.capabilities=zt,w.extensions=vt,w.properties=qt,w.renderLists=Yt,w.shadowMap=Jt,w.state=It,w.info=be}Xt();let ut=new Bh(w,O);this.xr=ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(P){P!==void 0&&(ct=P,this.setSize(ot,Rt,!1))},this.getSize=function(P){return P.set(ot,Rt)},this.setSize=function(P,k,it=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=P,Rt=k,e.width=Math.floor(P*ct),e.height=Math.floor(k*ct),it===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(ot*ct,Rt*ct).floor()},this.setDrawingBufferSize=function(P,k,it){ot=P,Rt=k,ct=it,e.width=Math.floor(P*it),e.height=Math.floor(k*it),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(kt)},this.setViewport=function(P,k,it,nt){P.isVector4?kt.set(P.x,P.y,P.z,P.w):kt.set(P,k,it,nt),It.viewport(H.copy(kt).multiplyScalar(ct).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,k,it,nt){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,k,it,nt),It.scissor(rt.copy(ie).multiplyScalar(ct).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(P){It.setScissorTest(Ie=P)},this.setOpaqueSort=function(P){Nt=P},this.setTransparentSort=function(P){Zt=P},this.getClearColor=function(P){return P.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(P=!0,k=!0,it=!0){let nt=0;if(P){let Z=!1;if(B!==null){let Dt=B.texture.format;Z=Dt===_f||Dt===yf||Dt===xf}if(Z){let Dt=B.texture.type,Bt=Dt===Ws||Dt===zr||Dt===ca||Dt===So||Dt===mf||Dt===gf,ce=pe.getClearColor(),Vt=pe.getClearAlpha(),oe=ce.r,Me=ce.g,G=ce.b;Bt?(v[0]=oe,v[1]=Me,v[2]=G,v[3]=Vt,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=oe,E[1]=Me,E[2]=G,E[3]=Vt,O.clearBufferiv(O.COLOR,0,E))}else nt|=O.COLOR_BUFFER_BIT}k&&(nt|=O.DEPTH_BUFFER_BIT),it&&(nt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),Yt.dispose(),Re.dispose(),qt.dispose(),A.dispose(),Q.dispose(),xt.dispose(),We.dispose(),Y.dispose(),Wt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ts),ut.removeEventListener("sessionend",Pi),Xn.stop()};function bt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;let P=be.autoReset,k=Jt.enabled,it=Jt.autoUpdate,nt=Jt.needsUpdate,Z=Jt.type;Xt(),be.autoReset=P,Jt.enabled=k,Jt.autoUpdate=it,Jt.needsUpdate=nt,Jt.type=Z}function Ht(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ce(P){let k=P.target;k.removeEventListener("dispose",Ce),qe(k)}function qe(P){Dn(P),qt.remove(P)}function Dn(P){let k=qt.get(P).programs;k!==void 0&&(k.forEach(function(it){Wt.releaseProgram(it)}),P.isShaderMaterial&&Wt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,it,nt,Z,Dt){k===null&&(k=Oe);let Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,ce=Ti(P,k,it,nt,Z);It.setMaterial(nt,Bt);let Vt=it.index,oe=1;if(nt.wireframe===!0){if(Vt=dt.getWireframeAttribute(it),Vt===void 0)return;oe=2}let Me=it.drawRange,G=it.attributes.position,ze=Me.start*oe,Ye=(Me.start+Me.count)*oe;Dt!==null&&(ze=Math.max(ze,Dt.start*oe),Ye=Math.min(Ye,(Dt.start+Dt.count)*oe)),Vt!==null?(ze=Math.max(ze,0),Ye=Math.min(Ye,Vt.count)):G!=null&&(ze=Math.max(ze,0),Ye=Math.min(Ye,G.count));let rn=Ye-ze;if(rn<0||rn===1/0)return;We.setup(Z,nt,ce,it,Vt);let zn,$e=Kt;if(Vt!==null&&(zn=mt.get(Vt),$e=De,$e.setIndex(zn)),Z.isMesh)nt.wireframe===!0?(It.setLineWidth(nt.wireframeLinewidth*Ut()),$e.setMode(O.LINES)):$e.setMode(O.TRIANGLES);else if(Z.isLine){let jt=nt.linewidth;jt===void 0&&(jt=1),It.setLineWidth(jt*Ut()),Z.isLineSegments?$e.setMode(O.LINES):Z.isLineLoop?$e.setMode(O.LINE_LOOP):$e.setMode(O.LINE_STRIP)}else Z.isPoints?$e.setMode(O.POINTS):Z.isSprite&&$e.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)$e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))$e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let jt=Z._multiDrawStarts,Un=Z._multiDrawCounts,Ze=Z._multiDrawCount,On=Vt?mt.get(Vt).bytesPerElement:1,W=qt.get(nt).currentProgram.getUniforms();for(let pn=0;pn<Ze;pn++)W.setValue(O,"_gl_DrawID",pn),$e.render(jt[pn]/On,Un[pn])}else if(Z.isInstancedMesh)$e.renderInstances(ze,rn,Z.count);else if(it.isInstancedBufferGeometry){let jt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Un=Math.min(it.instanceCount,jt);$e.renderInstances(ze,rn,Un)}else $e.render(ze,rn)};function Xe(P,k,it){P.transparent===!0&&P.side===Rn&&P.forceSinglePass===!1?(P.side=Jn,P.needsUpdate=!0,Nn(P,k,it),P.side=dr,P.needsUpdate=!0,Nn(P,k,it),P.side=Rn):Nn(P,k,it)}this.compile=function(P,k,it=null){it===null&&(it=P),m=Re.get(it),m.init(k),I.push(m),it.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),P!==it&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let nt=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){let ce=Dt[Bt];Xe(ce,it,Z),nt.add(ce)}else Xe(Dt,it,Z),nt.add(Dt)}),I.pop(),m=null,nt},this.compileAsync=function(P,k,it=null){let nt=this.compile(P,k,it);return new Promise(Z=>{function Dt(){if(nt.forEach(function(Bt){qt.get(Bt).currentProgram.isReady()&&nt.delete(Bt)}),nt.size===0){Z(P);return}setTimeout(Dt,10)}vt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Qn=null;function je(P){Qn&&Qn(P)}function ts(){Xn.stop()}function Pi(){Xn.start()}let Xn=new Md;Xn.setAnimationLoop(je),typeof self!="undefined"&&Xn.setContext(self),this.setAnimationLoop=function(P){Qn=P,ut.setAnimationLoop(P),P===null?Xn.stop():Xn.start()},ut.addEventListener("sessionstart",ts),ut.addEventListener("sessionend",Pi),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,k,B),m=Re.get(P,I.length),m.init(k),I.push(m),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),yt.setFromProjectionMatrix(de),se=this.localClippingEnabled,Lt=Ct.init(this.clippingPlanes,se),y=Yt.get(P,S.length),y.init(),S.push(y),ut.enabled===!0&&ut.isPresenting===!0){let Dt=w.xr.getDepthSensingMesh();Dt!==null&&ps(Dt,k,-1/0,w.sortObjects)}ps(P,k,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Nt,Zt),Tt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Tt&&pe.addToRenderList(y,P),this.info.render.frame++,Lt===!0&&Ct.beginShadows();let it=m.state.shadowsArray;Jt.render(it,P,k),Lt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=y.opaque,Z=y.transmissive;if(m.setupLights(),k.isArrayCamera){let Dt=k.cameras;if(Z.length>0)for(let Bt=0,ce=Dt.length;Bt<ce;Bt++){let Vt=Dt[Bt];un(nt,Z,P,Vt)}Tt&&pe.render(P);for(let Bt=0,ce=Dt.length;Bt<ce;Bt++){let Vt=Dt[Bt];Zs(y,P,Vt,Vt.viewport)}}else Z.length>0&&un(nt,Z,P,k),Tt&&pe.render(P),Zs(y,P,k);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(w,P,k),We.resetDefaultState(),L=-1,R=null,I.pop(),I.length>0?(m=I[I.length-1],Lt===!0&&Ct.setGlobalState(w.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?y=S[S.length-1]:y=null};function ps(P,k,it,nt){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||yt.intersectsSprite(P)){nt&&le.setFromMatrixPosition(P.matrixWorld).applyMatrix4(de);let Bt=xt.update(P),ce=P.material;ce.visible&&y.push(P,Bt,ce,it,le.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||yt.intersectsObject(P))){let Bt=xt.update(P),ce=P.material;if(nt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),le.copy(P.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),le.copy(Bt.boundingSphere.center)),le.applyMatrix4(P.matrixWorld).applyMatrix4(de)),Array.isArray(ce)){let Vt=Bt.groups;for(let oe=0,Me=Vt.length;oe<Me;oe++){let G=Vt[oe],ze=ce[G.materialIndex];ze&&ze.visible&&y.push(P,Bt,ze,it,le.z,G)}}else ce.visible&&y.push(P,Bt,ce,it,le.z,null)}}let Dt=P.children;for(let Bt=0,ce=Dt.length;Bt<ce;Bt++)ps(Dt[Bt],k,it,nt)}function Zs(P,k,it,nt){let Z=P.opaque,Dt=P.transmissive,Bt=P.transparent;m.setupLightsView(it),Lt===!0&&Ct.setGlobalState(w.clippingPlanes,it),nt&&It.viewport(H.copy(nt)),Z.length>0&&Li(Z,k,it),Dt.length>0&&Li(Dt,k,it),Bt.length>0&&Li(Bt,k,it),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function un(P,k,it,nt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new ls(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Ma:Ws,minFilter:Nr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:en.workingColorSpace}));let Dt=m.state.transmissionRenderTarget[nt.id],Bt=nt.viewport||H;Dt.setSize(Bt.z,Bt.w);let ce=w.getRenderTarget();w.setRenderTarget(Dt),w.getClearColor(lt),St=w.getClearAlpha(),St<1&&w.setClearColor(16777215,.5),w.clear(),Tt&&pe.render(it);let Vt=w.toneMapping;w.toneMapping=fr;let oe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),Lt===!0&&Ct.setGlobalState(w.clippingPlanes,nt),Li(P,it,nt),U.updateMultisampleRenderTarget(Dt),U.updateRenderTargetMipmap(Dt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let G=0,ze=k.length;G<ze;G++){let Ye=k[G],rn=Ye.object,zn=Ye.geometry,$e=Ye.material,jt=Ye.group;if($e.side===Rn&&rn.layers.test(nt.layers)){let Un=$e.side;$e.side=Jn,$e.needsUpdate=!0,dn(rn,it,nt,zn,$e,jt),$e.side=Un,$e.needsUpdate=!0,Me=!0}}Me===!0&&(U.updateMultisampleRenderTarget(Dt),U.updateRenderTargetMipmap(Dt))}w.setRenderTarget(ce),w.setClearColor(lt,St),oe!==void 0&&(nt.viewport=oe),w.toneMapping=Vt}function Li(P,k,it){let nt=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Dt=P.length;Z<Dt;Z++){let Bt=P[Z],ce=Bt.object,Vt=Bt.geometry,oe=nt===null?Bt.material:nt,Me=Bt.group;ce.layers.test(it.layers)&&dn(ce,k,it,Vt,oe,Me)}}function dn(P,k,it,nt,Z,Dt){P.onBeforeRender(w,k,it,nt,Z,Dt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(w,k,it,nt,P,Dt),Z.transparent===!0&&Z.side===Rn&&Z.forceSinglePass===!1?(Z.side=Jn,Z.needsUpdate=!0,w.renderBufferDirect(it,k,nt,Z,P,Dt),Z.side=dr,Z.needsUpdate=!0,w.renderBufferDirect(it,k,nt,Z,P,Dt),Z.side=Rn):w.renderBufferDirect(it,k,nt,Z,P,Dt),P.onAfterRender(w,k,it,nt,Z,Dt)}function Nn(P,k,it){k.isScene!==!0&&(k=Oe);let nt=qt.get(P),Z=m.state.lights,Dt=m.state.shadowsArray,Bt=Z.state.version,ce=Wt.getParameters(P,Z.state,Dt,k,it),Vt=Wt.getProgramCacheKey(ce),oe=nt.programs;nt.environment=P.isMeshStandardMaterial?k.environment:null,nt.fog=k.fog,nt.envMap=(P.isMeshStandardMaterial?Q:A).get(P.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,oe===void 0&&(P.addEventListener("dispose",Ce),oe=new Map,nt.programs=oe);let Me=oe.get(Vt);if(Me!==void 0){if(nt.currentProgram===Me&&nt.lightsStateVersion===Bt)return ms(P,ce),Me}else ce.uniforms=Wt.getUniforms(P),P.onBeforeCompile(ce,w),Me=Wt.acquireProgram(ce,Vt),oe.set(Vt,Me),nt.uniforms=ce.uniforms;let G=nt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(G.clippingPlanes=Ct.uniform),ms(P,ce),nt.needsLights=Gi(P),nt.lightsStateVersion=Bt,nt.needsLights&&(G.ambientLightColor.value=Z.state.ambient,G.lightProbe.value=Z.state.probe,G.directionalLights.value=Z.state.directional,G.directionalLightShadows.value=Z.state.directionalShadow,G.spotLights.value=Z.state.spot,G.spotLightShadows.value=Z.state.spotShadow,G.rectAreaLights.value=Z.state.rectArea,G.ltc_1.value=Z.state.rectAreaLTC1,G.ltc_2.value=Z.state.rectAreaLTC2,G.pointLights.value=Z.state.point,G.pointLightShadows.value=Z.state.pointShadow,G.hemisphereLights.value=Z.state.hemi,G.directionalShadowMap.value=Z.state.directionalShadowMap,G.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,G.spotShadowMap.value=Z.state.spotShadowMap,G.spotLightMatrix.value=Z.state.spotLightMatrix,G.spotLightMap.value=Z.state.spotLightMap,G.pointShadowMap.value=Z.state.pointShadowMap,G.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=Me,nt.uniformsList=null,Me}function Js(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=vo.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function ms(P,k){let it=qt.get(P);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Ti(P,k,it,nt,Z){k.isScene!==!0&&(k=Oe),U.resetTextureUnits();let Dt=k.fog,Bt=nt.isMeshStandardMaterial?k.environment:null,ce=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Oo,Vt=(nt.isMeshStandardMaterial?Q:A).get(nt.envMap||Bt),oe=nt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Me=!!it.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),G=!!it.morphAttributes.position,ze=!!it.morphAttributes.normal,Ye=!!it.morphAttributes.color,rn=fr;nt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(rn=w.toneMapping);let zn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,$e=zn!==void 0?zn.length:0,jt=qt.get(nt),Un=m.state.lights;if(Lt===!0&&(se===!0||P!==R)){let An=P===R&&nt.id===L;Ct.setState(nt,P,An)}let Ze=!1;nt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Un.state.version||jt.outputColorSpace!==ce||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Vt||nt.fog===!0&&jt.fog!==Dt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Ct.numPlanes||jt.numIntersection!==Ct.numIntersection)||jt.vertexAlphas!==oe||jt.vertexTangents!==Me||jt.morphTargets!==G||jt.morphNormals!==ze||jt.morphColors!==Ye||jt.toneMapping!==rn||jt.morphTargetsCount!==$e)&&(Ze=!0):(Ze=!0,jt.__version=nt.version);let On=jt.currentProgram;Ze===!0&&(On=Nn(nt,k,Z));let W=!1,pn=!1,Di=!1,Se=On.getUniforms(),ti=jt.uniforms;if(It.useProgram(On.program)&&(W=!0,pn=!0,Di=!0),nt.id!==L&&(L=nt.id,pn=!0),W||R!==P){It.buffers.depth.getReversed()?(Ft.copy(P.projectionMatrix),Wp(Ft),Xp(Ft),Se.setValue(O,"projectionMatrix",Ft)):Se.setValue(O,"projectionMatrix",P.projectionMatrix),Se.setValue(O,"viewMatrix",P.matrixWorldInverse);let wn=Se.map.cameraPosition;wn!==void 0&&wn.setValue(O,ue.setFromMatrixPosition(P.matrixWorld)),zt.logarithmicDepthBuffer&&Se.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Se.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,pn=!0,Di=!0)}if(Z.isSkinnedMesh){Se.setOptional(O,Z,"bindMatrix"),Se.setOptional(O,Z,"bindMatrixInverse");let An=Z.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Se.setValue(O,"boneTexture",An.boneTexture,U))}Z.isBatchedMesh&&(Se.setOptional(O,Z,"batchingTexture"),Se.setValue(O,"batchingTexture",Z._matricesTexture,U),Se.setOptional(O,Z,"batchingIdTexture"),Se.setValue(O,"batchingIdTexture",Z._indirectTexture,U),Se.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Se.setValue(O,"batchingColorTexture",Z._colorsTexture,U));let gs=it.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&ge.update(Z,it,On),(pn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Se.setValue(O,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ti.envMap.value=Vt,ti.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&k.environment!==null&&(ti.envMapIntensity.value=k.environmentIntensity),pn&&(Se.setValue(O,"toneMappingExposure",w.toneMappingExposure),jt.needsLights&&Xr(ti,Di),Dt&&nt.fog===!0&&Ot.refreshFogUniforms(ti,Dt),Ot.refreshMaterialUniforms(ti,nt,ct,Rt,m.state.transmissionRenderTarget[P.id]),vo.upload(O,Js(jt),ti,U)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(vo.upload(O,Js(jt),ti,U),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Se.setValue(O,"center",Z.center),Se.setValue(O,"modelViewMatrix",Z.modelViewMatrix),Se.setValue(O,"normalMatrix",Z.normalMatrix),Se.setValue(O,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let An=nt.uniformsGroups;for(let wn=0,ei=An.length;wn<ei;wn++){let In=An[wn];Y.update(In,On),Y.bind(In,On)}}return On}function Xr(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function Gi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,k,it){qt.get(P.texture).__webglTexture=k,qt.get(P.depthTexture).__webglTexture=it;let nt=qt.get(P);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=it===void 0,nt.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){let it=qt.get(P);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,it=0){B=P,F=k,V=it;let nt=!0,Z=null,Dt=!1,Bt=!1;if(P){let Vt=qt.get(P);if(Vt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),nt=!1;else if(Vt.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Vt.__hasExternalTextures)U.rebindTextures(P,qt.get(P.texture).__webglTexture,qt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let G=P.depthTexture;if(Vt.__boundDepthTexture!==G){if(G!==null&&qt.has(G)&&(P.width!==G.image.width||P.height!==G.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let oe=P.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Bt=!0);let Me=qt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Me[k])?Z=Me[k][it]:Z=Me[k],Dt=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?Z=qt.get(P).__webglMultisampledFramebuffer:Array.isArray(Me)?Z=Me[it]:Z=Me,H.copy(P.viewport),rt.copy(P.scissor),tt=P.scissorTest}else H.copy(kt).multiplyScalar(ct).floor(),rt.copy(ie).multiplyScalar(ct).floor(),tt=Ie;if(It.bindFramebuffer(O.FRAMEBUFFER,Z)&&nt&&It.drawBuffers(P,Z),It.viewport(H),It.scissor(rt),It.setScissorTest(tt),Dt){let Vt=qt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Vt.__webglTexture,it)}else if(Bt){let Vt=qt.get(P.texture),oe=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vt.__webglTexture,it||0,oe)}L=-1},this.readRenderTargetPixels=function(P,k,it,nt,Z,Dt,Bt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=qt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(ce=ce[Bt]),ce){It.bindFramebuffer(O.FRAMEBUFFER,ce);try{let Vt=P.texture,oe=Vt.format,Me=Vt.type;if(!zt.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-nt&&it>=0&&it<=P.height-Z&&O.readPixels(k,it,nt,Z,ee.convert(oe),ee.convert(Me),Dt)}finally{let Vt=B!==null?qt.get(B).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(P,k,it,nt,Z,Dt,Bt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=qt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(ce=ce[Bt]),ce){let Vt=P.texture,oe=Vt.format,Me=Vt.type;if(!zt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-nt&&it>=0&&it<=P.height-Z){It.bindFramebuffer(O.FRAMEBUFFER,ce);let G=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,G),O.bufferData(O.PIXEL_PACK_BUFFER,Dt.byteLength,O.STREAM_READ),O.readPixels(k,it,nt,Z,ee.convert(oe),ee.convert(Me),0);let ze=B!==null?qt.get(B).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ze);let Ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gp(O,Ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,G),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Dt),O.deleteBuffer(G),O.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,it=0){P.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);let nt=Math.pow(2,-it),Z=Math.floor(P.image.width*nt),Dt=Math.floor(P.image.height*nt),Bt=k!==null?k.x:0,ce=k!==null?k.y:0;U.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,it,0,0,Bt,ce,Z,Dt),It.unbindTexture()},this.copyTextureToTexture=function(P,k,it=null,nt=null,Z=0){P.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,P=arguments[1],k=arguments[2],Z=arguments[3]||0,it=null);let Dt,Bt,ce,Vt,oe,Me,G,ze,Ye,rn=P.isCompressedTexture?P.mipmaps[Z]:P.image;it!==null?(Dt=it.max.x-it.min.x,Bt=it.max.y-it.min.y,ce=it.isBox3?it.max.z-it.min.z:1,Vt=it.min.x,oe=it.min.y,Me=it.isBox3?it.min.z:0):(Dt=rn.width,Bt=rn.height,ce=rn.depth||1,Vt=0,oe=0,Me=0),nt!==null?(G=nt.x,ze=nt.y,Ye=nt.z):(G=0,ze=0,Ye=0);let zn=ee.convert(k.format),$e=ee.convert(k.type),jt;k.isData3DTexture?(U.setTexture3D(k,0),jt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),jt=O.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),jt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Un=O.getParameter(O.UNPACK_ROW_LENGTH),Ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),On=O.getParameter(O.UNPACK_SKIP_PIXELS),W=O.getParameter(O.UNPACK_SKIP_ROWS),pn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,rn.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vt),O.pixelStorei(O.UNPACK_SKIP_ROWS,oe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Me);let Di=P.isDataArrayTexture||P.isData3DTexture,Se=k.isDataArrayTexture||k.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let ti=qt.get(P),gs=qt.get(k),An=qt.get(ti.__renderTarget),wn=qt.get(gs.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let ei=0;ei<ce;ei++)Di&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.get(P).__webglTexture,Z,Me+ei),P.isDepthTexture?(Se&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.get(k).__webglTexture,Z,Ye+ei),O.blitFramebuffer(Vt,oe,Dt,Bt,G,ze,Dt,Bt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Se?O.copyTexSubImage3D(jt,Z,G,ze,Ye+ei,Vt,oe,Dt,Bt):O.copyTexSubImage2D(jt,Z,G,ze,Ye+ei,Vt,oe,Dt,Bt);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Se?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(jt,Z,G,ze,Ye,Dt,Bt,ce,zn,$e,rn.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(jt,Z,G,ze,Ye,Dt,Bt,ce,zn,rn.data):O.texSubImage3D(jt,Z,G,ze,Ye,Dt,Bt,ce,zn,$e,rn):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Z,G,ze,Dt,Bt,zn,$e,rn.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Z,G,ze,rn.width,rn.height,zn,rn.data):O.texSubImage2D(O.TEXTURE_2D,Z,G,ze,Dt,Bt,zn,$e,rn);O.pixelStorei(O.UNPACK_ROW_LENGTH,Un),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,On),O.pixelStorei(O.UNPACK_SKIP_ROWS,W),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pn),Z===0&&k.generateMipmaps&&O.generateMipmap(jt),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,it=null,nt=null,Z=0){return P.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,nt=arguments[1]||null,P=arguments[2],k=arguments[3],Z=arguments[4]||0),sa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,it,nt,Z)},this.initRenderTarget=function(P){qt.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){F=0,V=0,B=null,It.reset(),We.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=en._getDrawingBufferColorSpace(t),e.unpackColorSpace=en._getUnpackColorSpace()}};var Co=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fr=class extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=Vs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yi=new z,pa=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix4(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyNormalMatrix(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.transformDirection(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_n(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bs(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bs(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bs(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bs(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kn=class extends qs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ho,ta=new z,fo=new z,uo=new z,po=new At,ea=new At,Ad=new Mn,sl=new z,na=new z,rl=new z,Xu=new At,Lc=new At,qu=new At,ci=class extends li{constructor(t=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new bn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cl(e,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new pa(i,3,0,!1)),ho.setAttribute("uv",new pa(i,2,3,!1))}this.geometry=ho,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fo.setFromMatrixScale(this.matrixWorld),Ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fo.multiplyScalar(-uo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ol(sl.set(-.5,-.5,0),uo,o,fo,s,r),ol(na.set(.5,-.5,0),uo,o,fo,s,r),ol(rl.set(.5,.5,0),uo,o,fo,s,r),Xu.set(0,0),Lc.set(1,0),qu.set(1,1);let a=t.ray.intersectTriangle(sl,na,rl,!1,ta);if(a===null&&(ol(na.set(-.5,.5,0),uo,o,fo,s,r),Lc.set(0,1),a=t.ray.intersectTriangle(sl,rl,na,!1,ta),a===null))return;let l=t.ray.origin.distanceTo(ta);l<t.near||l>t.far||e.push({distance:l,point:ta.clone(),uv:cr.getInterpolation(ta,sl,na,rl,Xu,Lc,qu,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ol(n,t,e,i,s,r){po.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ea.x=r*po.x-s*po.y,ea.y=s*po.x+r*po.y):ea.copy(po),n.copy(t),n.x+=ea.x,n.y+=ea.y,n.applyMatrix4(Ad)}var Io=class extends qs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new Mn,Vh=new fa,al=new Eo,ll=new z,ma=class extends li{constructor(t=new bn,e=new Io){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),al.radius+=r,t.ray.intersectsSphere(al)===!1)return;Yu.copy(s).invert(),Vh.copy(t.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let v=p,E=d;v<E;v++){let y=h.getX(v);ll.fromBufferAttribute(u,y),$u(ll,y,l,s,t,e,this)}}else{let p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let v=p,E=d;v<E;v++)ll.fromBufferAttribute(u,v),$u(ll,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $u(n,t,e,i,s,r,o){let a=Vh.distanceSqToPoint(n);if(a<e){let l=new z;Vh.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Po=class extends Ri{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ji=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let f=i[s],p=i[s+1]-f,d=(o-f)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new z,s=[],r=[],o=[],a=new z,l=new Mn;for(let d=0;d<=t;d++){let v=d/t;s[d]=this.getTangentAt(v,new z)}r[0]=new z,o[0]=new z;let h=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);f<=h&&(h=f,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),p<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(ai(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,v))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ai(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ga=class extends Ji{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=h-this.aY;l=p*f-d*u+this.aX,h=p*u+d*f+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hh=class extends ga{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,f,u){let p=(o-r)/h-(a-r)/(h+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+u)+(l-a)/u;p*=f,d*=f,s(o,a,p,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var cl=new z,Dc=new bf,Uc=new bf,Nc=new bf,Gh=class extends Ji{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,f;this.closed||a>0?h=s[(a-1)%r]:(cl.subVectors(s[0],s[1]).add(s[0]),h=cl);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(cl.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=cl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(h.distanceToSquared(u),d),E=Math.pow(u.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(f),d);E<1e-4&&(E=1),v<1e-4&&(v=E),y<1e-4&&(y=E),Dc.initNonuniformCatmullRom(h.x,u.x,p.x,f.x,v,E,y),Uc.initNonuniformCatmullRom(h.y,u.y,p.y,f.y,v,E,y),Nc.initNonuniformCatmullRom(h.z,u.z,p.z,f.z,v,E,y)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(h.x,u.x,p.x,f.x,this.tension),Uc.initCatmullRom(h.y,u.y,p.y,f.y,this.tension),Nc.initCatmullRom(h.z,u.z,p.z,f.z,this.tension));return i.set(Dc.calc(l),Uc.calc(l),Nc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ky(n,t){let e=1-n;return e*e*t}function By(n,t){return 2*(1-n)*n*t}function Vy(n,t){return n*n*t}function aa(n,t,e,i){return ky(n,t)+By(n,e)+Vy(n,i)}function Hy(n,t){let e=1-n;return e*e*e*t}function Gy(n,t){let e=1-n;return 3*e*e*n*t}function Wy(n,t){return 3*(1-n)*n*n*t}function Xy(n,t){return n*n*n*t}function la(n,t,e,i,s){return Hy(n,t)+Gy(n,e)+Wy(n,i)+Xy(n,s)}var Il=class extends Ji{constructor(t=new At,e=new At,i=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new At){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(la(t,s.x,r.x,o.x,a.x),la(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wh=class extends Ji{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(la(t,s.x,r.x,o.x,a.x),la(t,s.y,r.y,o.y,a.y),la(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pl=class extends Ji{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xh=class extends Ji{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends Ji{constructor(t=new At,e=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new At){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(aa(t,s.x,r.x,o.x),aa(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qh=class extends Ji{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(aa(t,s.x,r.x,o.x),aa(t,s.y,r.y,o.y),aa(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends Ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Zu(a,l.x,h.x,f.x,u.x),Zu(a,l.y,h.y,f.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Yh=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:Gh,CubicBezierCurve:Il,CubicBezierCurve3:Wh,EllipseCurve:ga,LineCurve:Pl,LineCurve3:Xh,QuadraticBezierCurve:Ll,QuadraticBezierCurve3:qh,SplineCurve:Dl}),$h=class extends Ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let f=l[h];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}},Ul=class extends $h{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Pl(this.currentPoint.clone(),new At(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ll(this.currentPoint.clone(),new At(t,e),new At(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Il(this.currentPoint.clone(),new At(t,e),new At(i,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Dl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new ga(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nl=class n extends bn{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ai(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],f=1/e,u=new z,p=new At,d=new z,v=new z,E=new z,y=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:y=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-y,d.z=m*0,E.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:y=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-y,d.z=m*0,v.copy(d),d.x+=E.x,d.y+=E.y,d.z+=E.z,d.normalize(),l.push(d.x,d.y,d.z),E.copy(v)}for(let S=0;S<=e;S++){let I=i+S*f*s,w=Math.sin(I),q=Math.cos(I);for(let F=0;F<=t.length-1;F++){u.x=t[F].x*w,u.y=t[F].y,u.z=t[F].x*q,o.push(u.x,u.y,u.z),p.x=S/e,p.y=F/(t.length-1),a.push(p.x,p.y);let V=l[3*F+0]*w,B=l[3*F+1],L=l[3*F+0]*q;h.push(V,B,L)}}for(let S=0;S<e;S++)for(let I=0;I<t.length-1;I++){let w=I+S*t.length,q=w,F=w+t.length,V=w+t.length+1,B=w+1;r.push(q,F,B),r.push(V,B,F)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(a,2)),this.setAttribute("normal",new Pe(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Gn=class n extends bn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new z,f=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),o.push(h.x,h.y,h.z),a.push(0,0,1),f.x=(o[p]/t+1)/2,f.y=(o[p+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bi=class n extends bn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],p=[],d=[],v=0,E=[],y=i/2,m=0;S(),o===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(f),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(p,3)),this.setAttribute("uv",new Pe(d,2));function S(){let w=new z,q=new z,F=0,V=(e-t)/i;for(let B=0;B<=r;B++){let L=[],R=B/r,H=R*(e-t)+t;for(let rt=0;rt<=s;rt++){let tt=rt/s,lt=tt*l+a,St=Math.sin(lt),ot=Math.cos(lt);q.x=H*St,q.y=-R*i+y,q.z=H*ot,u.push(q.x,q.y,q.z),w.set(St,V,ot).normalize(),p.push(w.x,w.y,w.z),d.push(tt,1-R),L.push(v++)}E.push(L)}for(let B=0;B<s;B++)for(let L=0;L<r;L++){let R=E[L][B],H=E[L+1][B],rt=E[L+1][B+1],tt=E[L][B+1];(t>0||L!==0)&&(f.push(R,H,tt),F+=3),(e>0||L!==r-1)&&(f.push(H,rt,tt),F+=3)}h.addGroup(m,F,0),m+=F}function I(w){let q=v,F=new At,V=new z,B=0,L=w===!0?t:e,R=w===!0?1:-1;for(let rt=1;rt<=s;rt++)u.push(0,y*R,0),p.push(0,R,0),d.push(.5,.5),v++;let H=v;for(let rt=0;rt<=s;rt++){let lt=rt/s*l+a,St=Math.cos(lt),ot=Math.sin(lt);V.x=L*ot,V.y=y*R,V.z=L*St,u.push(V.x,V.y,V.z),p.push(0,R,0),F.x=St*.5+.5,F.y=ot*.5*R+.5,d.push(F.x,F.y),v++}for(let rt=0;rt<s;rt++){let tt=q+rt,lt=H+rt;w===!0?f.push(lt,lt+1,tt):f.push(lt+1,lt,tt),B+=3}h.addGroup(m,B,w===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hi=class n extends bi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zh=class n extends bn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),f(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let I=new z,w=new z,q=new z;for(let F=0;F<e.length;F+=3)d(e[F+0],I),d(e[F+1],w),d(e[F+2],q),l(I,w,q,S)}function l(S,I,w,q){let F=q+1,V=[];for(let B=0;B<=F;B++){V[B]=[];let L=S.clone().lerp(w,B/F),R=I.clone().lerp(w,B/F),H=F-B;for(let rt=0;rt<=H;rt++)rt===0&&B===F?V[B][rt]=L:V[B][rt]=L.clone().lerp(R,rt/H)}for(let B=0;B<F;B++)for(let L=0;L<2*(F-B)-1;L++){let R=Math.floor(L/2);L%2===0?(p(V[B][R+1]),p(V[B+1][R]),p(V[B][R])):(p(V[B][R+1]),p(V[B+1][R+1]),p(V[B+1][R]))}}function h(S){let I=new z;for(let w=0;w<r.length;w+=3)I.x=r[w+0],I.y=r[w+1],I.z=r[w+2],I.normalize().multiplyScalar(S),r[w+0]=I.x,r[w+1]=I.y,r[w+2]=I.z}function f(){let S=new z;for(let I=0;I<r.length;I+=3){S.x=r[I+0],S.y=r[I+1],S.z=r[I+2];let w=y(S)/2/Math.PI+.5,q=m(S)/Math.PI+.5;o.push(w,1-q)}v(),u()}function u(){for(let S=0;S<o.length;S+=6){let I=o[S+0],w=o[S+2],q=o[S+4],F=Math.max(I,w,q),V=Math.min(I,w,q);F>.9&&V<.1&&(I<.2&&(o[S+0]+=1),w<.2&&(o[S+2]+=1),q<.2&&(o[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function d(S,I){let w=S*3;I.x=t[w+0],I.y=t[w+1],I.z=t[w+2]}function v(){let S=new z,I=new z,w=new z,q=new z,F=new At,V=new At,B=new At;for(let L=0,R=0;L<r.length;L+=9,R+=6){S.set(r[L+0],r[L+1],r[L+2]),I.set(r[L+3],r[L+4],r[L+5]),w.set(r[L+6],r[L+7],r[L+8]),F.set(o[R+0],o[R+1]),V.set(o[R+2],o[R+3]),B.set(o[R+4],o[R+5]),q.copy(S).add(I).add(w).divideScalar(3);let H=y(q);E(F,R+0,S,H),E(V,R+2,I,H),E(B,R+4,w,H)}}function E(S,I,w,q){q<0&&S.x===1&&(o[I]=S.x-1),w.x===0&&w.z===0&&(o[I]=q/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var gr=class extends Ul{constructor(t){super(t),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ul().fromJSON(s))}return this}},qy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Rd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,f,u,p,d;if(i&&(r=Ky(n,t,r,e)),n.length>80*e){a=h=n[0],l=f=n[1];for(let v=e;v<s;v+=e)u=n[v],p=n[v+1],u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p);d=Math.max(h-a,f-l),d=d!==0?32767/d:0}return xa(r,o,e,a,l,d,0),o}};function Rd(n,t,e,i,s){let r,o;if(s===l1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Ju(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ju(r,n[r],n[r+1],o);return o&&Gl(o,o.next)&&(_a(o),o=o.next),o}function Or(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Gl(e,e.next)||Cn(e.prev,e,e.next)===0)){if(_a(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function xa(n,t,e,i,s,r,o){if(!n)return;!o&&r&&n1(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?$y(n,i,s,r):Yy(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),_a(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Zy(Or(n),t,e),xa(n,t,e,i,s,r,2)):o===2&&Jy(n,t,e,i,s,r):xa(Or(n),t,e,i,s,r,1);break}}}function Yy(n){let t=n.prev,e=n,i=n.next;if(Cn(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,f=s<r?s<o?s:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,p=s>r?s>o?s:o:r>o?r:o,d=a>l?a>h?a:h:l>h?l:h,v=i.next;for(;v!==t;){if(v.x>=f&&v.x<=p&&v.y>=u&&v.y<=d&&go(s,a,r,l,o,h,v.x,v.y)&&Cn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function $y(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Cn(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,f=s.y,u=r.y,p=o.y,d=a<l?a<h?a:h:l<h?l:h,v=f<u?f<p?f:p:u<p?u:p,E=a>l?a>h?a:h:l>h?l:h,y=f>u?f>p?f:p:u>p?u:p,m=Jh(d,v,t,e,i),S=Jh(E,y,t,e,i),I=n.prevZ,w=n.nextZ;for(;I&&I.z>=m&&w&&w.z<=S;){if(I.x>=d&&I.x<=E&&I.y>=v&&I.y<=y&&I!==s&&I!==o&&go(a,f,l,u,h,p,I.x,I.y)&&Cn(I.prev,I,I.next)>=0||(I=I.prevZ,w.x>=d&&w.x<=E&&w.y>=v&&w.y<=y&&w!==s&&w!==o&&go(a,f,l,u,h,p,w.x,w.y)&&Cn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;I&&I.z>=m;){if(I.x>=d&&I.x<=E&&I.y>=v&&I.y<=y&&I!==s&&I!==o&&go(a,f,l,u,h,p,I.x,I.y)&&Cn(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;w&&w.z<=S;){if(w.x>=d&&w.x<=E&&w.y>=v&&w.y<=y&&w!==s&&w!==o&&go(a,f,l,u,h,p,w.x,w.y)&&Cn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Zy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Gl(s,r)&&Cd(s,i,i.next,r)&&ya(s,r)&&ya(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),_a(i),_a(i.next),i=n=r),i=i.next}while(i!==n);return Or(i)}function Jy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r1(o,a)){let l=Id(o,a);o=Or(o,o.next),l=Or(l,l.next),xa(o,t,e,i,s,r,0),xa(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ky(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=Rd(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(s1(h));for(s.sort(jy),r=0;r<s.length;r++)e=Qy(s[r],e);return e}function jy(n,t){return n.x-t.x}function Qy(n,t){let e=t1(n,t);if(!e)return t;let i=Id(e,n);return Or(i,i.next),Or(e,e.next)}function t1(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,f=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&go(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ya(e,n)&&(u<f||u===f&&(e.x>s.x||e.x===s.x&&e1(s,e)))&&(s=e,f=u)),e=e.next;while(e!==a);return s}function e1(n,t){return Cn(n.prev,n,t.prev)<0&&Cn(t.next,n,n.next)<0}function n1(n,t,e,i){let s=n;do s.z===0&&(s.z=Jh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,i1(s)}function i1(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Jh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function s1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function go(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function r1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!o1(n,t)&&(ya(n,t)&&ya(t,n)&&a1(n,t)&&(Cn(n.prev,n,t.prev)||Cn(n,t.prev,t))||Gl(n,t)&&Cn(n.prev,n,n.next)>0&&Cn(t.prev,t,t.next)>0)}function Cn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Gl(n,t){return n.x===t.x&&n.y===t.y}function Cd(n,t,e,i){let s=fl(Cn(n,t,e)),r=fl(Cn(n,t,i)),o=fl(Cn(e,i,n)),a=fl(Cn(e,i,t));return!!(s!==r&&o!==a||s===0&&hl(n,e,t)||r===0&&hl(n,i,t)||o===0&&hl(e,n,i)||a===0&&hl(e,t,i))}function hl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fl(n){return n>0?1:n<0?-1:0}function o1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Cd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ya(n,t){return Cn(n.prev,n,n.next)<0?Cn(n,t,n.next)>=0&&Cn(n,n.prev,t)>=0:Cn(n,t,n.prev)<0||Cn(n,n.next,t)<0}function a1(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Id(n,t){let e=new Kh(n.i,n.x,n.y),i=new Kh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ju(n,t,e,i){let s=new Kh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _a(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ur=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ku(t),ju(i,t);let o=t.length;e.forEach(Ku);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ju(i,e[l]);let a=qy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ku(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ju(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var va=class n extends bn{constructor(t=new gr([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:c1,I,w=!1,q,F,V,B;m&&(I=m.getSpacedPoints(f),w=!0,p=!1,q=m.computeFrenetFrames(f,!1),F=new z,V=new z,B=new z),p||(y=0,d=0,v=0,E=0);let L=a.extractPoints(h),R=L.shape,H=L.holes;if(!ur.isClockWise(R)){R=R.reverse();for(let Tt=0,Ut=H.length;Tt<Ut;Tt++){let O=H[Tt];ur.isClockWise(O)&&(H[Tt]=O.reverse())}}let tt=ur.triangulateShape(R,H),lt=R;for(let Tt=0,Ut=H.length;Tt<Ut;Tt++){let O=H[Tt];R=R.concat(O)}function St(Tt,Ut,O){return Ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),Tt.clone().addScaledVector(Ut,O)}let ot=R.length,Rt=tt.length;function ct(Tt,Ut,O){let re,vt,zt,It=Tt.x-Ut.x,be=Tt.y-Ut.y,qt=O.x-Tt.x,U=O.y-Tt.y,A=It*It+be*be,Q=It*U-be*qt;if(Math.abs(Q)>Number.EPSILON){let mt=Math.sqrt(A),dt=Math.sqrt(qt*qt+U*U),xt=Ut.x-be/mt,Wt=Ut.y+It/mt,Ot=O.x-U/dt,Yt=O.y+qt/dt,Re=((Ot-xt)*U-(Yt-Wt)*qt)/(It*U-be*qt);re=xt+It*Re-Tt.x,vt=Wt+be*Re-Tt.y;let Ct=re*re+vt*vt;if(Ct<=2)return new At(re,vt);zt=Math.sqrt(Ct/2)}else{let mt=!1;It>Number.EPSILON?qt>Number.EPSILON&&(mt=!0):It<-Number.EPSILON?qt<-Number.EPSILON&&(mt=!0):Math.sign(be)===Math.sign(U)&&(mt=!0),mt?(re=-be,vt=It,zt=Math.sqrt(A)):(re=It,vt=be,zt=Math.sqrt(A/2))}return new At(re/zt,vt/zt)}let Nt=[];for(let Tt=0,Ut=lt.length,O=Ut-1,re=Tt+1;Tt<Ut;Tt++,O++,re++)O===Ut&&(O=0),re===Ut&&(re=0),Nt[Tt]=ct(lt[Tt],lt[O],lt[re]);let Zt=[],kt,ie=Nt.concat();for(let Tt=0,Ut=H.length;Tt<Ut;Tt++){let O=H[Tt];kt=[];for(let re=0,vt=O.length,zt=vt-1,It=re+1;re<vt;re++,zt++,It++)zt===vt&&(zt=0),It===vt&&(It=0),kt[re]=ct(O[re],O[zt],O[It]);Zt.push(kt),ie=ie.concat(kt)}for(let Tt=0;Tt<y;Tt++){let Ut=Tt/y,O=d*Math.cos(Ut*Math.PI/2),re=v*Math.sin(Ut*Math.PI/2)+E;for(let vt=0,zt=lt.length;vt<zt;vt++){let It=St(lt[vt],Nt[vt],re);Ft(It.x,It.y,-O)}for(let vt=0,zt=H.length;vt<zt;vt++){let It=H[vt];kt=Zt[vt];for(let be=0,qt=It.length;be<qt;be++){let U=St(It[be],kt[be],re);Ft(U.x,U.y,-O)}}}let Ie=v+E;for(let Tt=0;Tt<ot;Tt++){let Ut=p?St(R[Tt],ie[Tt],Ie):R[Tt];w?(V.copy(q.normals[0]).multiplyScalar(Ut.x),F.copy(q.binormals[0]).multiplyScalar(Ut.y),B.copy(I[0]).add(V).add(F),Ft(B.x,B.y,B.z)):Ft(Ut.x,Ut.y,0)}for(let Tt=1;Tt<=f;Tt++)for(let Ut=0;Ut<ot;Ut++){let O=p?St(R[Ut],ie[Ut],Ie):R[Ut];w?(V.copy(q.normals[Tt]).multiplyScalar(O.x),F.copy(q.binormals[Tt]).multiplyScalar(O.y),B.copy(I[Tt]).add(V).add(F),Ft(B.x,B.y,B.z)):Ft(O.x,O.y,u/f*Tt)}for(let Tt=y-1;Tt>=0;Tt--){let Ut=Tt/y,O=d*Math.cos(Ut*Math.PI/2),re=v*Math.sin(Ut*Math.PI/2)+E;for(let vt=0,zt=lt.length;vt<zt;vt++){let It=St(lt[vt],Nt[vt],re);Ft(It.x,It.y,u+O)}for(let vt=0,zt=H.length;vt<zt;vt++){let It=H[vt];kt=Zt[vt];for(let be=0,qt=It.length;be<qt;be++){let U=St(It[be],kt[be],re);w?Ft(U.x,U.y+I[f-1].y,I[f-1].x+O):Ft(U.x,U.y,u+O)}}}yt(),Lt();function yt(){let Tt=s.length/3;if(p){let Ut=0,O=ot*Ut;for(let re=0;re<Rt;re++){let vt=tt[re];de(vt[2]+O,vt[1]+O,vt[0]+O)}Ut=f+y*2,O=ot*Ut;for(let re=0;re<Rt;re++){let vt=tt[re];de(vt[0]+O,vt[1]+O,vt[2]+O)}}else{for(let Ut=0;Ut<Rt;Ut++){let O=tt[Ut];de(O[2],O[1],O[0])}for(let Ut=0;Ut<Rt;Ut++){let O=tt[Ut];de(O[0]+ot*f,O[1]+ot*f,O[2]+ot*f)}}i.addGroup(Tt,s.length/3-Tt,0)}function Lt(){let Tt=s.length/3,Ut=0;se(lt,Ut),Ut+=lt.length;for(let O=0,re=H.length;O<re;O++){let vt=H[O];se(vt,Ut),Ut+=vt.length}i.addGroup(Tt,s.length/3-Tt,1)}function se(Tt,Ut){let O=Tt.length;for(;--O>=0;){let re=O,vt=O-1;vt<0&&(vt=Tt.length-1);for(let zt=0,It=f+y*2;zt<It;zt++){let be=ot*zt,qt=ot*(zt+1),U=Ut+re+be,A=Ut+vt+be,Q=Ut+vt+qt,mt=Ut+re+qt;ue(U,A,Q,mt)}}}function Ft(Tt,Ut,O){l.push(Tt),l.push(Ut),l.push(O)}function de(Tt,Ut,O){le(Tt),le(Ut),le(O);let re=s.length/3,vt=S.generateTopUV(i,s,re-3,re-2,re-1);Oe(vt[0]),Oe(vt[1]),Oe(vt[2])}function ue(Tt,Ut,O,re){le(Tt),le(Ut),le(re),le(Ut),le(O),le(re);let vt=s.length/3,zt=S.generateSideWallUV(i,s,vt-6,vt-3,vt-2,vt-1);Oe(zt[0]),Oe(zt[1]),Oe(zt[3]),Oe(zt[1]),Oe(zt[2]),Oe(zt[3])}function le(Tt){s.push(l[Tt*3+0]),s.push(l[Tt*3+1]),s.push(l[Tt*3+2])}function Oe(Tt){r.push(Tt.x),r.push(Tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return h1(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yh[s.type]().fromJSON(s)),new n(i,t.options)}},c1={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],f=t[s*3+1];return[new At(r,o),new At(a,l),new At(h,f)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],f=t[i*3+1],u=t[i*3+2],p=t[s*3],d=t[s*3+1],v=t[s*3+2],E=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(a-f)<Math.abs(o-h)?[new At(o,1-l),new At(h,1-u),new At(p,1-v),new At(E,1-m)]:[new At(a,1-l),new At(f,1-u),new At(d,1-v),new At(y,1-m)]}};function h1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Es=class n extends Zh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var zl=class n extends bn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],f=[],u=t,p=(e-t)/s,d=new z,v=new At;for(let E=0;E<=s;E++){for(let y=0;y<=i;y++){let m=r+y/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,f.push(v.x,v.y)}u+=p}for(let E=0;E<s;E++){let y=E*(i+1);for(let m=0;m<i;m++){let S=m+y,I=S,w=S+i+1,q=S+i+2,F=S+1;a.push(I,w,F),a.push(w,q,F)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Lo=class n extends bn{constructor(t=new gr([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let f=0;f<t.length;f++)h(t[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(o,2));function h(f){let u=s.length/3,p=f.extractPoints(e),d=p.shape,v=p.holes;ur.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,m=v.length;y<m;y++){let S=v[y];ur.isClockWise(S)===!0&&(v[y]=S.reverse())}let E=ur.triangulateShape(d,v);for(let y=0,m=v.length;y<m;y++){let S=v[y];d=d.concat(S)}for(let y=0,m=d.length;y<m;y++){let S=d[y];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let y=0,m=E.length;y<m;y++){let S=E[y],I=S[0]+u,w=S[1]+u,q=S[2]+u;i.push(I,w,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return f1(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function f1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var fi=class n extends bn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,f=[],u=new z,p=new z,d=[],v=[],E=[],y=[];for(let m=0;m<=i;m++){let S=[],I=m/i,w=0;m===0&&o===0?w=.5/e:m===i&&l===Math.PI&&(w=-.5/e);for(let q=0;q<=e;q++){let F=q/e;u.x=-t*Math.cos(s+F*r)*Math.sin(o+I*a),u.y=t*Math.cos(o+I*a),u.z=t*Math.sin(s+F*r)*Math.sin(o+I*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),E.push(p.x,p.y,p.z),y.push(F+w,1-I),S.push(h++)}f.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let I=f[m][S+1],w=f[m][S],q=f[m+1][S],F=f[m+1][S+1];(m!==0||o>0)&&d.push(I,w,F),(m!==i-1||l<Math.PI)&&d.push(w,q,F)}this.setIndex(d),this.setAttribute("position",new Pe(v,3)),this.setAttribute("normal",new Pe(E,3)),this.setAttribute("uv",new Pe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ci=class n extends bn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],f=new z,u=new z,p=new z;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){let E=v/s*r,y=d/i*Math.PI*2;u.x=(t+e*Math.cos(y))*Math.cos(E),u.y=(t+e*Math.cos(y))*Math.sin(E),u.z=e*Math.sin(y),a.push(u.x,u.y,u.z),f.x=t*Math.cos(E),f.y=t*Math.sin(E),p.subVectors(u,f).normalize(),l.push(p.x,p.y,p.z),h.push(v/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){let E=(s+1)*d+v-1,y=(s+1)*(d-1)+v-1,m=(s+1)*(d-1)+v,S=(s+1)*d+v;o.push(E,y,S),o.push(y,m,S)}this.setIndex(o),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var nn=class extends qs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ul(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function u1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Do=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jh=class extends Do{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kf:r=t,a=2*e-i;break;case jf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kf:o=t,l=2*i-e;break;case jf:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,f=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,f=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,v=(i-e)/(s-e),E=v*v,y=E*v,m=-p*y+2*p*E-p*v,S=(1+p)*y+(-1.5-2*p)*E+(-.5+p)*v+1,I=(-1-d)*y+(1.5+d)*E+.5*v,w=d*y-d*E;for(let q=0;q!==a;++q)r[q]=m*o[f+q]+S*o[h+q]+I*o[l+q]+w*o[u+q];return r}},Qh=class extends Do{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,f=(i-e)/(s-e),u=1-f;for(let p=0;p!==a;++p)r[p]=o[h+p]*u+o[l+p]*f;return r}},tf=class extends Do{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cs=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ul(e,this.TimeBufferType),this.values=ul(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ul(t.times,Array),values:ul(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new tf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yl:e=this.InterpolantFactoryMethodDiscrete;break;case Mh:e=this.InterpolantFactoryMethodLinear;break;case ic:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yl;case this.InterpolantFactoryMethodLinear:return Mh;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&u1(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ic,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],f=t[a+1];if(h!==f&&(a!==1||h!==t[0]))if(s)l=!0;else{let u=a*i,p=u-i,d=u+i;for(let v=0;v!==i;++v){let E=e[u+v];if(E!==e[p+v]||E!==e[d+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,p=o*i;for(let d=0;d!==i;++d)e[p+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cs.prototype.TimeBufferType=Float32Array;cs.prototype.ValueBufferType=Float32Array;cs.prototype.DefaultInterpolation=Mh;var kr=class extends cs{constructor(t,e,i){super(t,e,i)}};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=yl;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var ef=class extends cs{};ef.prototype.ValueTypeName="color";var nf=class extends cs{};nf.prototype.ValueTypeName="number";var sf=class extends Do{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let f=h+a;h!==f;h+=4)mr.slerpFlat(r,0,o,h-a,o,h,l);return r}},Fl=class extends cs{InterpolantFactoryMethodLinear(t){return new sf(this.times,this.values,this.getValueSize(),t)}};Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends cs{constructor(t,e,i){super(t,e,i)}};Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=yl;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var rf=class extends cs{};rf.prototype.ValueTypeName="vector";var Qu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},of=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return h.push(f,u),this},this.removeHandler=function(f){let u=h.indexOf(f);return u!==-1&&h.splice(u,2),this},this.getHandler=function(f){for(let u=0,p=h.length;u<p;u+=2){let d=h[u],v=h[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null}}},d1=new of,ba=class{constructor(t){this.manager=t!==void 0?t:d1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var af=class extends ba{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Qu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ha("img");function l(){f(),Qu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){f(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Uo=class extends ba{constructor(t){super(t)}load(t,e,i,s){let r=new Ri,o=new af(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},No=class extends li{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Vr=class extends No{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(li.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zc=new Mn,td=new z,ed=new z,Ol=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nd=new Mn,ia=new z,Fc=new z,lf=class extends Ol{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new vn(2,1,1,1),new vn(0,1,1,1),new vn(3,1,1,1),new vn(1,1,1,1),new vn(3,0,1,1),new vn(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ia.setFromMatrixPosition(t.matrixWorld),i.position.copy(ia),Fc.copy(i.position),Fc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Fc),i.updateMatrixWorld(),s.makeTranslation(-ia.x,-ia.y,-ia.z),nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd)}},zo=class extends No{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cf=class extends Ol{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(li.DEFAULT_UP),this.updateMatrix(),this.target=new li,this.shadow=new cf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},kl=class extends No{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mf="\\[\\]\\.:\\/",p1=new RegExp("["+Mf+"]","g"),wf="[^"+Mf+"]",m1="[^"+Mf.replace("\\.","")+"]",g1=/((?:WC+[\/:])*)/.source.replace("WC",wf),x1=/(WCOD+)?/.source.replace("WCOD",m1),y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wf),_1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wf),v1=new RegExp("^"+g1+x1+y1+_1+"$"),b1=["material","materials","bones","map"],hf=class{constructor(t,e,i){let s=i||En.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},En=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p1,"")}static parseTrackName(t){let e=v1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);b1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};En.Composite=hf;En.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};En.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};En.prototype.GetterByBindingType=[En.prototype._getValue_direct,En.prototype._getValue_array,En.prototype._getValue_arrayElement,En.prototype._getValue_toArray];En.prototype.SetterByBindingTypeAndVersioning=[[En.prototype._setValue_direct,En.prototype._setValue_direct_setNeedsUpdate,En.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[En.prototype._setValue_array,En.prototype._setValue_array_setNeedsUpdate,En.prototype._setValue_array_setMatrixWorldNeedsUpdate],[En.prototype._setValue_arrayElement,En.prototype._setValue_arrayElement_setNeedsUpdate,En.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[En.prototype._setValue_fromArray,En.prototype._setValue_fromArray_setNeedsUpdate,En.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k1=new Float32Array(1);var id=new Mn,Fo=class{constructor(t,e,i=0,s=1/0){this.ray=new fa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return id.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(t,e=!0,i=[]){return ff(t,this,i,e),i.sort(sd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ff(t[s],this,i,e);return i.sort(sd),i}};function sd(n,t){return n.distance-t.distance}function ff(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ff(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Gr={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},Bo=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function Ld(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new bn,h=0;for(let f=0;f<n.length;++f){let u=n[f],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,f),h+=d}}if(e){let f=0,u=[];for(let p=0;p<n.length;++p){let d=n[p].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+f);f+=n[p].attributes.position.count}l.setIndex(u)}for(let f in r){let u=Pd(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,u)}for(let f in o){let u=o[f][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let p=0;p<u;++p){let d=[];for(let E=0;E<o[f].length;++E)d.push(o[f][E][p]);let v=Pd(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(v)}}return l}function Pd(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let f=n[h];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new vi(o,e,i),l=0;for(let h=0;h<n.length;++h){let f=n[h];if(f.isInterleavedBufferAttribute){let u=l/e;for(let p=0,d=f.count;p<d;p++)for(let v=0;v<e;v++){let E=f.getComponent(p,v);a.setComponent(p+u,v,E)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var Ln="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",Dd={},Gt=(n,t)=>t?new nn(Object.assign({color:n},t)):Dd[n]||(Dd[n]=new nn({color:n})),sn=(n,t)=>new Ve(Object.assign({color:n},t)),Ud={},M1=n=>Ud[n]||(Ud[n]=new nn({color:n,flatShading:!0}));function xe(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Po(i);return s.colorSpace=kn,s.anisotropy=4,s}function yr(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Wr=xe(128,128,n=>{let t=n.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)});function at(n,t,e,i,s,r,o,a,l){let h=new ht(new fn(t,e,i),typeof s=="string"?Gt(s):s);return h.position.set(r,o,a),l&&(h.rotation.y=l),n.add(h),h}function te(n,t,e,i,s,r,o,a,l){let h=new ht(new bi(t,e,i,l||16),typeof s=="string"?Gt(s):s);return h.position.set(r,o,a),n.add(h),h}function Ee(n,t,e,i,s,r,o,a,l,h){let f=new ht(new fi(t,h||16,h?h*.7|0:12),typeof e=="string"?Gt(e):e);return f.position.set(i,s,r),f.scale.set(o||1,a||1,l||1),n.add(f),f}function Ki(n,t,e,i,s,r,o){let a=new ht(new Es(t,1),M1(e));return a.position.set(i,s,r),o&&a.scale.set(o[0],o[1],o[2]),n.add(a),a}function _r(n,t,e,i,s,r,o){let a=new ci(new Kn({map:Wr,blending:ws,transparent:!0,depthWrite:!1,opacity:r}));return o&&a.material.color.set(o),a.scale.set(s,s,1),a.position.set(t,e,i),n.add(a),n.userData.glows=(n.userData.glows||[]).concat(a),a}function Vo(n,t,e,i,s,r,o,a,l){let h=new ht(new Ge(t,e),new Ve({map:i,transparent:!0,side:l?Rn:void 0,alphaTest:.05}));return h.position.set(s,r,o),a&&(h.rotation.y=a),n.add(h),h}function wa(n,t,e,i,s,r,o){let a=new ht(new Nl(t.map(l=>new At(l[0],l[1])),o||20),typeof e=="string"?Gt(e):e);return a.position.set(i,s,r),n.add(a),a}var As="#a8703f",di="#6b3f1f",Ho="#d4a56a",ui="#3a2214",w1="#d23a28",S1="#f3e2bd",Nd={};function Tf(n,t,e,i,s,r){let o=n+t+e+i+s;return Nd[o]||(Nd[o]=xe(i,s,a=>{a.fillStyle=t,a.fillRect(0,0,i,s),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle";let l=[...n];a.font=`900 ${r}px ${Ln}`,s>i?l.forEach((h,f)=>a.fillText(h,i/2,s/(l.length+1)*(f+1))):a.fillText(n,i/2,s/2+2,i-10)}))}var Fd=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],Sa=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.81,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.39,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.07,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],Od=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];Sa.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.43,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.52,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.77,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var zd={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};Sa.forEach(n=>{!n.hc&&zd[n.k]&&(n.hc=zd[n.k])});var Ae={};Sa.forEach(n=>{n.L=n.L||"main",n.solid===void 0&&(n.solid=n.L==="main"?1:0),Ae[n.k]=n});var Ef=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],Af=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],Qt={};Qt.table=n=>{at(n,1.9,.08,.9,As,0,.74,0),at(n,1.84,.03,.84,Ho,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])at(n,.08,.72,.08,di,t,.36,e);at(n,1.6,.06,.04,di,0,.55,-.36),at(n,1.6,.06,.04,di,0,.55,.36)};Qt.chabu=n=>{te(n,.46,.46,.06,As,0,.34,0,28),te(n,.44,.44,.02,Ho,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;at(n,.07,.32,.07,di,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};Qt.counter=n=>{at(n,1.96,1,.8,di,0,.5,0),at(n,2.04,.08,.96,Ho,0,1.03,.04),at(n,1.9,.12,.04,As,0,.14,.41);for(let t=-2;t<=2;t++)at(n,.04,.8,.02,"#5a3216",t*.38,.52,.405)};Qt.chair=n=>{at(n,.48,.06,.48,As,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])at(n,.05,.46,.05,di,t,.23,e);at(n,.48,.5,.05,As,0,.74,-.2),at(n,.4,.06,.03,Ho,0,.86,-.18)};Qt.stool=n=>{te(n,.22,.2,.07,"#c23a2a",0,.76,0,18),te(n,.03,.03,.72,"#3a3a40",0,.38,0,8),te(n,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new ht(new Ci(.13,.015,6,18),Gt("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,n.add(t)};Qt.zabu=n=>{let t=at(n,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new fn(.62,.1,.62,2,1,2),Ee(n,.05,"#e9c34a",0,.12,0)};Qt.bench=n=>{at(n,1.9,.07,.42,As,0,.44,0);for(let t of[-.8,.8])at(n,.07,.42,.36,di,t,.21,0);at(n,1.6,.05,.04,di,0,.2,0)};Qt.register=n=>{at(n,.9,.95,.7,di,0,.475,0),at(n,.96,.06,.78,Ho,0,.98,0),at(n,.5,.22,.36,"#2b2b33",0,1.12,-.05),at(n,.42,.1,.3,"#3c3c46",0,1.26,-.12),at(n,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=sn("#9fe0b6"),Ee(n,.07,"#e9b830",.3,1.06,.2),Ee(n,.05,"#e9b830",.22,1.04,.26)};Qt.lantern=n=>{te(n,.025,.025,1.7,ui,0,.85,0,6),at(n,.5,.04,.04,ui,.2,1.68,0),te(n,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new ye;t.position.set(.38,1.3,0),n.add(t);let e=Ee(t,.22,sn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,te(t,.14,.14,.06,ui,0,.3,0,12),te(t,.14,.14,.06,ui,0,-.3,0,12),Vo(t,.2,.34,Tf("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),te(t,.01,.01,.2,ui,0,.42,0,4),_r(t,0,0,.1,1.8,.55),n.userData.swing=t};Qt.andon=n=>{for(let e of[-.17,.17])for(let i of[-.17,.17])at(n,.04,.9,.04,ui,e,.45,i);let t=at(n,.32,.5,.32,sn("#fff1c8"),0,.55,0);t.userData.lit=1,at(n,.4,.04,.4,ui,0,.82,0),at(n,.4,.04,.4,ui,0,.29,0);for(let e of[-.06,.06])at(n,.005,.48,.33,ui,e,.55,0);_r(n,0,.55,0,2.2,.6)};Qt.stonel=n=>{let t="#9a9590";at(n,.5,.12,.5,t,0,.06,0),te(n,.1,.13,.5,t,0,.37,0,8),at(n,.42,.1,.42,t,0,.66,0);let e=at(n,.3,.28,.3,sn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])at(n,.06,.3,.06,t,s[0],.85,s[1]);let i=new ht(new hi(.45,.3,4),Gt(t));i.rotation.y=Math.PI/4,i.position.y=1.14,n.add(i),Ee(n,.07,t,0,1.33,0),_r(n,0,.85,0,1.6,.55)};Qt.chochin=n=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let i=0;i<5;i++){let s=-.8+i*.4,r=2.25-Math.sin(i/4*Math.PI)*.25,o=Ee(n,.12,sn(t[i]),s,r,.18,1,1.25,1,12);o.userData.lit=1,_r(n,s,r,.26,.8,.35)}let e=[];for(let i=0;i<=8;i++){let s=i/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let i=0;i<8;i++){let[s,r]=e[i],[o,a]=e[i+1],l=at(n,Math.hypot(o-s,a-r),.015,.015,ui,(s+o)/2,(r+a)/2,.18);l.rotation.z=Math.atan2(a-r,o-s)}};Qt.tanuki=n=>{let t="#8a6a4a",e="#e8d8b8";Ee(n,.3,t,0,.38,0,1,1.05,.95),Ee(n,.2,e,0,.36,.16,1,1.1,.5),Ee(n,.22,t,0,.82,.02);for(let r of[-.13,.13])Ee(n,.06,t,r,1,0),Ee(n,.055,ui,r*.7,.85,.19,1,.8,.5),Ee(n,.02,"#fff",r*.7+.01,.86,.21);Ee(n,.045,ui,0,.78,.22),at(n,.34,.06,.3,"#5a4a3a",0,1.03,0),te(n,.16,.2,.04,"#5a4a3a",0,1,0,14);let i=te(n,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);i.rotation.z=-.3;let s=at(n,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Ee(n,.15,t,-.2,.12,.12,1,.6,1),Ee(n,.15,t,.2,.12,.12,1,.6,1),Ee(n,.12,t,.1,.25,-.3,1,.7,1.4)};Qt.barrel=n=>{wa(n,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new ht(new Ci(.34,.025,6,22),Gt("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,n.add(e)}Vo(n,.36,.36,Tf("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),te(n,.3,.3,.02,Ho,0,.91,0,22)};Qt.crates=n=>{let t=(e,i,s)=>{let r=new ye;r.position.y=e,r.rotation.y=i,n.add(r),at(r,.6,.32,.44,s,0,.16,0);for(let o=0;o<3;o++)for(let a=0;a<2;a++)te(r,.06,.06,.36,"#7a4a1a",-.18+o*.18,.3,-.1+a*.2,8),te(r,.025,.03,.1,"#f2e6c8",-.18+o*.18,.52,-.1+a*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};Qt.byobu=n=>{let t=xe(256,128,(e,i,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,i,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*i,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let i=new ye;i.position.set(-.72+e*.48,0,e%2?.08:-.08),i.rotation.y=e%2?.3:-.3,n.add(i),at(i,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new ht(new Ge(.42,1.4),new Ve({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),i.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,i.add(r)}};Qt.shelf=n=>{for(let i of[-.925,.925])at(n,.05,1.8,.42,di,i,.9,-.1);at(n,1.9,.05,.42,di,0,1.775,-.1),at(n,1.8,1.7,.02,"#2a1408",0,.9,-.3),at(n,1.8,.06,.38,As,0,.03,-.1);for(let i of[.35,.8,1.25,1.65])at(n,1.8,.04,.38,As,0,i,-.1);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let i of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],o=.26+e%3*.04;te(n,.055,.065,o,r,-.72+s*.29,i+o/2,-.06,10),te(n,.02,.03,.09,r,-.72+s*.29,i+o+.04,-.06,6),e%2&&at(n,.1,.08,.01,S1,-.72+s*.29,i+o*.5,.012)}};Qt.hibachi=n=>{wa(n,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),te(n,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let i=Ki(n,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);i.material=sn("#ff7a2a"),i.userData.lit=1}te(n,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=te(n,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,_r(n,0,.55,0,1.4,.6,"#ff8a3a")};Qt.tank=n=>{at(n,.7,.55,.5,di,0,.275,0);let t=at(n,.68,.5,.48,Gt("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,at(n,.62,.4,.42,sn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,at(n,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let i=new ye;i.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),n.add(i),Ee(i,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new ht(new hi(.04,.07,6),Gt("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,i.add(s),n.userData.fish=(n.userData.fish||[]).concat(i)}Ki(n,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),Ki(n,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};Qt.jukebox=n=>{at(n,.7,.7,.5,di,0,.35,0),at(n,.74,.05,.54,As,0,.72,0),te(n,.24,.24,.02,"#141414",-.05,.76,.02,28),te(n,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=at(n,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new ht(new hi(.22,.4,18,1,!0),Gt("#d8a83a",{side:Rn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),n.add(e),te(n,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),at(n,.5,.3,.02,"#2a1408",0,.35,.26),n.userData.spin=n.children[2]};Qt.pine=n=>{te(n,.2,.16,.14,"#3a5a8a",0,.07,0,6),te(n,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=te(n,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,Ki(n,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),Ki(n,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),Ki(n,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};Qt.bamboo=n=>{te(n,.22,.18,.32,"#e8e0d0",0,.16,0,18),te(n,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,i=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;te(n,.025,.025,s,"#6a9a3a",e,.3+s/2,i,8);for(let r=1;r<4;r++)te(n,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,i,8);for(let r=0;r<3;r++){let o=new ht(new Ge(.32,.06),new nn({color:"#5a9a3a",side:Rn}));o.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),i+.12*Math.sin(r*2+t)),o.rotation.set(-.3,r*2+t,-.4),n.add(o)}}};Qt.sakura=n=>{te(n,.26,.22,.36,"#2a3a5a",0,.18,0,8),te(n,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=te(n,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=te(n,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let i=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,o,a],l)=>Ki(n,a,i[l%3],s,r,o,[1,.75,1])),n.userData.petals=1};Qt.ajisai=n=>{te(n,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)Ki(n,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let i=e*1.25;Ki(n,.12,t[e%4],Math.cos(i)*.12,.5+e%2*.08,Math.sin(i)*.12)}};Qt.scroll=n=>{let t=xe(96,256,(e,i,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,i,s),e.fillStyle="#c8b890",e.fillRect(0,0,i,30),e.fillRect(0,s-30,i,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${Ln}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,o)=>e.fillText(r,i/2,76+o*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});at(n,.5,.04,.04,ui,0,2.25,.04),at(n,.5,.04,.04,ui,0,1.02,.04),Vo(n,.42,1.2,t,0,1.63,.03)};Qt.menu=n=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let i=Tf(t[e],"#e9d3a4","#2a1408",64,256,36);at(n,.22,.82,.03,di,-.7+e*.28,1.75,.015),Vo(n,.18,.76,i,-.7+e*.28,1.75,.035)}at(n,1.8,.06,.05,ui,0,2.2,.03)};Qt.clock=n=>{let t=xe(128,128,o=>{o.fillStyle="#f8f0dc",o.beginPath(),o.arc(64,64,60,0,7),o.fill(),o.fillStyle="#2a1408",o.font=`700 18px ${Ln}`,o.textAlign="center",o.textBaseline="middle";for(let a=1;a<=12;a++){let l=a/12*Math.PI*2-Math.PI/2;o.fillText(String(a),64+Math.cos(l)*46,64+Math.sin(l)*46)}});at(n,.5,.7,.1,di,0,1.95,.05),te(n,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=Vo(n,.4,.4,t,0,2.05,.105),i=at(n,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=at(n,.01,.17,.01,"#1a1a1a",0,2.1,.115);n.userData.hands=[i,s],n.userData.handY=2.05;let r=new ye;r.position.set(0,1.75,.07),n.add(r),at(r,.01,.2,.01,"#c8a040",0,-.1,0),n.userData.swing=r};Qt.mado=n=>{let t=xe(256,256,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1a1a40"),a.addColorStop(1,"#5a3a6a"),s.fillStyle=a,s.fillRect(0,0,r,o),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*o*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new ht(new Gn(.62,32),new Ve({map:t}));e.position.set(0,1.6,.03),n.add(e);let i=new ht(new Ci(.64,.06,8,32),Gt(di));i.position.set(0,1.6,.04),n.add(i);for(let s of[-.2,.2])at(n,.02,1.2,.02,ui,s,1.6,.05);at(n,1.2,.02,.02,ui,0,1.6,.05),_r(n,0,1.6,.15,1.6,.25,"#b8c8ff")};Qt.fuji=n=>{let t=xe(256,160,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,i,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,i,20)});at(n,1.6,1,.05,"#2a1408",0,1.7,.025),Vo(n,1.5,.9,t,0,1.7,.055)};Qt.maneki=n=>{let t="#f8f4ec";Ee(n,.12,t,0,.13,0,1,1.1,.9),Ee(n,.1,t,0,.32,.01);for(let i of[-.06,.06]){let s=new ht(new hi(.035,.06,4),Gt(t));s.position.set(i,.42,0),n.add(s),Ee(n,.012,"#1a1a1a",i*.6,.34,.09)}Ee(n,.02,"#f08a9a",0,.31,.1),at(n,.16,.025,.05,w1,0,.23,.06),Ee(n,.02,"#e9b830",0,.21,.1);let e=new ye;e.position.set(.09,.3,.02),n.add(e),Ee(e,.035,t,0,.07,0,1,1.6,1),n.userData.wave=e,Ee(n,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};Qt.daruma=n=>{Ee(n,.14,"#d23a28",0,.15,0,1,1.1,1),Ee(n,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Ee(n,.016,"#1a1a1a",t,.2,.125);at(n,.08,.012,.01,"#1a1a1a",0,.155,.13)};Qt.beer=n=>{te(n,.07,.065,.2,Gt("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),te(n,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new ht(new Ci(.05,.012,6,12,Math.PI),Gt("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,n.add(t)};Qt.sake=n=>{at(n,.34,.02,.2,di,0,.01,0),wa(n,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])te(n,.03,.025,.04,"#f0ece0",t,.04,0,10)};Qt.yakitori=n=>{te(n,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new ye;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,n.add(e),at(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let i=0;i<4;i++)Ki(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+i*.05,.005,0,[1.1,.9,1])}};Qt.sushi=n=>{at(n,.34,.03,.16,As,0,.03,0);for(let t=0;t<4;t++)at(n,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),at(n,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};Qt.ramen=n=>{wa(n,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),te(n,.12,.12,.01,"#d89a4a",0,.09,0,20),Ee(n,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),at(n,.05,.01,.04,"#8a4a2a",.04,.1,-.02),at(n,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=at(n,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};Qt.edamame=n=>{te(n,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)Ki(n,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};Qt.vase=n=>{wa(n,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),te(n,.006,.006,.25,"#4a7a3a",0,.36,0,4),Ee(n,.035,"#f0e0e8",0,.5,0),Ee(n,.03,"#e898b0",.02,.48,.02)};Qt.tatami=n=>{let t=xe(256,256,(i,s,r)=>{i.fillStyle="#c8c47a",i.fillRect(0,0,s,r);for(let o=0;o<r;o+=3)i.fillStyle=o%6?"#bcb86e":"#d2ce86",i.fillRect(0,o,s,1);i.fillStyle="#2a3a2a",i.fillRect(0,0,s,10),i.fillRect(0,r-10,s,10),i.fillRect(0,124,s,8)}),e=new ht(new fn(1.96,.04,1.96),[Gt("#2a3a2a"),Gt("#2a3a2a"),new nn({map:t}),Gt("#2a3a2a"),Gt("#2a3a2a"),Gt("#2a3a2a")]);e.position.y=.02,n.add(e)};Qt.rug=n=>{let t=xe(256,256,(i,s,r)=>{i.fillStyle="#23315c",i.fillRect(0,0,s,r),i.strokeStyle="#e8e0d0",i.lineWidth=3;for(let o=0;o<5;o++)for(let a=0;a<5;a++){let l=26+o*51,h=26+a*51;i.beginPath();for(let f=0;f<3;f++)i.arc(l,h,8+f*7,Math.PI,0);i.stroke()}i.strokeStyle="#c8a040",i.lineWidth=6,i.strokeRect(6,6,s-12,r-12)}),e=new ht(new Gn(.96,40),new nn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,n.add(e)};Qt.step=n=>{Ki(n,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function T1(n){let t=new Set,e=n.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),n.updateMatrixWorld(!0);let i=new Map;n.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;i.has(r)||i.set(r,[]),i.get(r).push(s)});for(let s of i.values())if(!(s.length<2))try{let r=s.map(l=>{let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let f of Object.keys(h.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&h.deleteAttribute(f);return h.attributes.uv?(h.applyMatrix4(l.matrixWorld),h):null});if(r.some(l=>!l))continue;let o=Ld(r,!1);if(!o)continue;let a=new ht(o,s[0].material);n.add(a),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var E1="#6fa8d6",Sf="#4f86b8",Ys="#f6f2ea",xr="#d9b07a";Qt.sofa=n=>{at(n,1.9,.42,.82,Sf,0,.21,0);for(let t of[-.46,.46])at(n,.9,.16,.7,E1,t,.5,.06);at(n,1.9,.55,.2,Sf,0,.72,-.32);for(let t of[-.88,.88])at(n,.18,.58,.82,Sf,t,.45,0);Ee(n,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),Ee(n,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};Qt.armchair=n=>{at(n,.8,.4,.78,"#e07a5f",0,.2,0),at(n,.62,.14,.64,"#ee9a7a",0,.48,.05),at(n,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])at(n,.14,.52,.78,"#e07a5f",t,.45,0)};Qt.ctable=n=>{at(n,1.6,.06,.7,xr,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])te(n,.03,.03,.38,"#8a6a4a",t,.19,e,8);at(n,1.5,.03,.6,"#c89a62",0,.15,0)};Qt.tv=n=>{at(n,1.8,.5,.48,Ys,0,.25,-.1);for(let e of[-.45,.45])at(n,.8,.38,.02,"#e8e0d0",e,.25,.15);at(n,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=at(n,1.2,.68,.02,sn("#4a8ad8"),0,.98,-.085);t.userData.lit=1,n.userData.tvs=t,at(n,.3,.08,.2,"#2a2a2e",0,.54,-.12)};Qt.books=n=>{for(let i of[-.925,.925])at(n,.05,1.9,.4,xr,i,.95,-.1);at(n,1.9,.05,.4,xr,0,1.875,-.1),at(n,1.8,1.8,.02,"#a07850",0,.95,-.29);for(let i of[.05,.5,.95,1.4])at(n,1.8,.04,.36,"#c8a070",0,i+.02,-.1);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let i of[.09,.54,.99]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,o=.3+e*7%5*.025;at(n,r,o,.24,t[e%7],s+r/2,i+o/2,-.08),s+=r+.01,e++}}Ee(n,.12,"#3f8f4f",.6,1.54,-.08)};Qt.flamp=n=>{te(n,.2,.22,.04,"#3a3a3e",0,.02,0,18),te(n,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=te(n,.16,.26,.32,sn("#fff0c8"),0,1.6,0,18);t.userData.lit=1,_r(n,0,1.55,0,2.4,.55)};Qt.piano=n=>{at(n,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),at(n,1.6,.06,.7,"#1e1a1a",0,.72,.05),at(n,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)at(n,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])at(n,.1,.7,.1,"#1e1a1a",t,.35,.3);at(n,.5,.05,.3,"#1e1a1a",0,.45,.6),at(n,.5,.04,.3,"#8a3a2a",0,.48,.6)};Qt.bed=n=>{at(n,1.9,.3,1.95,xr,0,.25,0),at(n,1.9,.9,.1,xr,0,.55,-.95),at(n,1.8,.2,1.85,Ys,0,.5,.02),at(n,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])Ee(n,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])at(n,.08,.12,.08,"#8a6a4a",t,.06,e)};Qt.wardrobe=n=>{at(n,1.8,2,.6,Ys,0,1,-.15),at(n,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])te(n,.02,.02,.3,"#c8a040",t,1.05,.18,6);at(n,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};Qt.nstand=n=>{at(n,.5,.5,.45,xr,0,.27,0),at(n,.46,.02,.02,"#8a6a4a",0,.35,.23),Ee(n,.025,"#c8a040",0,.25,.24)};Qt.desk=n=>{at(n,1.6,.05,.65,xr,0,.74,0);for(let t of[-.74,.74])at(n,.06,.72,.6,"#e8e0d0",t,.36,0);at(n,.45,.3,.55,"#e8e0d0",.45,.55,0)};Qt.kcounter=n=>{at(n,1.9,.86,.62,Ys,0,.43,-.1),at(n,1.96,.06,.7,"#9aa0a8",0,.89,-.08),at(n,.6,.04,.4,"#6a7078",-.4,.91,-.08),te(n,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])at(n,.5,.6,.02,"#ece6da",e,.43,.22);let t=te(n,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};Qt.stove=n=>{at(n,.8,.86,.62,"#e8e4dc",0,.43,-.1),at(n,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new ht(new Ci(.1,.02,6,16),Gt("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),n.add(e)}at(n,.7,.4,.02,"#2a2a2e",0,.45,.22),te(n,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};Qt.fridge=n=>{at(n,.78,1.85,.7,"#eaf2f8",0,.93,-.08),at(n,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])at(n,.03,.25,.04,"#a8b0b8",.3,t,.3);at(n,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};Qt.catbed=n=>{let t=new ht(new Ci(.32,.12,8,20),Gt("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,n.add(t),te(n,.3,.3,.08,"#f2d8b0",0,.05,0,18),Ee(n,.18,"#e8a050",.02,.2,0,1.4,.7,1),Ee(n,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let i=new ht(new hi(.04,.07,4),Gt("#e8a050"));i.position.set(.22,.36,e),n.add(i)}};Qt.monstera=n=>{te(n,.24,.18,.4,"#f2efe6",0,.2,0,14),te(n,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,i=new ht(new Gn(.28,10),new nn({color:t%2?"#2f7a3a":"#3f8f4a",side:Rn}));i.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),i.rotation.set(-1+Math.random()*.4,e,0),n.add(i),te(n,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};Qt.cactus=n=>{te(n,.09,.07,.12,"#c8704a",0,.06,0,12),te(n,.06,.06,.22,"#4a9a4a",0,.22,0,10),Ee(n,.06,"#4a9a4a",0,.33,0);let t=te(n,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,Ee(n,.025,"#f29ab8",0,.39,0)};Qt.wwin=n=>{let t=at(n,1.5,1.1,.03,sn("#bfe6ff"),0,1.65,.02);n.userData.pane=t,at(n,1.62,.08,.08,Ys,0,2.24,.04),at(n,1.62,.08,.08,Ys,0,1.06,.04),at(n,.06,1.15,.06,Ys,0,1.65,.05),at(n,1.62,.1,.2,Ys,0,1.03,.1),at(n,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let i=at(n,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);i.geometry=new fn(.38,1.4,.05,4,1,1)}};Qt.photos=n=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,i,s,r],o)=>{at(n,s+.08,r+.08,.03,o%2?"#3a2a1a":Ys,e,i,.015),at(n,s,r,.01,sn(t[o]),e,i,.035),Ee(n,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][o],e-s*.15,i-r*.1,.04,1,1,.2)})};Qt.shelfw=n=>{at(n,1.7,.05,.25,xr,0,1.6,.12);for(let t of[-.7,.7])at(n,.04,.15,.2,"#8a6a4a",t,1.52,.1);te(n,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),Ee(n,.09,"#4a9a4a",-.5,1.82,.12),at(n,.3,.22,.16,"#2f6bb8",0,1.74,.12),Ee(n,.08,"#f2b630",.45,1.7,.12)};Qt.book=n=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let i=at(n,.22,.045,.16,t[e],0,.025+e*.047,0);i.rotation.y=e*.25}};Qt.mug=n=>{te(n,.05,.045,.1,"#f6f2ea",0,.05,0,14),te(n,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new ht(new Ci(.03,.01,6,10),Gt("#f6f2ea"));t.position.set(.06,.05,0),n.add(t)};Qt.cake=n=>{te(n,.14,.14,.02,"#f6f2ea",0,.01,0,20),te(n,.1,.1,.1,"#fff8f0",0,.07,0,20),te(n,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)Ee(n,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};Qt.laptop=n=>{at(n,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new ye;t.position.set(0,.015,-.11),t.rotation.x=-.35,n.add(t),at(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=at(t,.29,.17,.002,sn("#8ac0f0"),0,.1,.007);e.userData.lit=1};Qt.dlamp=n=>{te(n,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=te(n,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=te(n,.04,.09,.1,sn("#fff0c8"),0,.33,0,12);e.userData.lit=1,_r(n,0,.3,0,1.2,.5)};Qt.teddy=n=>{let t="#b8814a";Ee(n,.1,t,0,.1,0,1,1.1,.9),Ee(n,.08,t,0,.24,0);for(let e of[-.06,.06])Ee(n,.03,t,e,.31,0),Ee(n,.012,"#1a1a1a",e*.5,.26,.07),Ee(n,.035,t,e*1.3,.1,.06);Ee(n,.03,"#e8d0b0",0,.225,.07)};Qt.carpet=n=>{let t=xe(256,256,(i,s,r)=>{i.fillStyle="#f2e6d0",i.fillRect(0,0,s,r);let o=A1(3);for(let a=0;a<1600;a++)i.fillStyle=o()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",i.fillRect(o()*s,o()*r,3,3);i.strokeStyle="#e8a0b0",i.lineWidth=10,i.strokeRect(14,14,s-28,r-28)}),e=new ht(new fn(1.9,.04,1.9),[Gt("#e8d8c0"),Gt("#e8d8c0"),new nn({map:t}),Gt("#e8d8c0"),Gt("#e8d8c0"),Gt("#e8d8c0")]);e.position.y=.02,n.add(e)};var A1=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Rf(n){let t=new ye,e=Qt[n];return e?e(t):at(t,.8,.8,.8,"#f0f",0,.4,0),T1(t),t.traverse(i=>{i.isMesh&&(i.userData.item=t)}),t}var vr=(n,t)=>n+Math.random()*(t-n),Ii=(n,t,e)=>Math.max(t,Math.min(e,n)),Ta=(n,t,e)=>n+(t-n)*e,br=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Mr=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},ji={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},R1={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},If=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),hs=46,Hi=34,Rs=7,C1=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],Ea=2,Cf=8.5,I1=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],Aa=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],P1=`
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
`;function kd(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.data||{};if(r.ex=Object.assign(If(),r.ex||{}),!document.getElementById("i3css")){let g=document.createElement("style");g.id="i3css",g.textContent=P1,document.head.appendChild(g)}if(!document.getElementById("h3css")&&n.css){let g=document.createElement("style");g.id="h3css",g.textContent=n.css,document.head.appendChild(g)}let o=Math.min(screen.width,screen.height)<600,a=new Ro({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});a.shadowMap.enabled=!0,a.shadowMap.type=uf;let l=new Fr,h=new Co(12576511,60,170);l.fog=h;let f=new Bn(38,2,.3,600),u=new Uo,p=(g,M)=>u.load(g,T=>{T.colorSpace=kn,M&&M(T)}),d={},v=(g,M)=>M?new nn(Object.assign({color:g},M)):d[g]||(d[g]=new nn({color:g})),E=(g,M)=>new Ve(Object.assign({color:g},M||{})),y=(g,M,T)=>{let N=g.clone();return N.wrapS=N.wrapT=Gs,N.repeat.set(M,T),N.needsUpdate=!0,N},m=[];function S(g,M,T,N,J,et,_t,wt,Pt){let gt=new ht(new fn(g,M,T),typeof N=="string"?v(N):N);return gt.position.set(J,et,_t),(wt||l).add(gt),Pt!==!1&&(gt.castShadow=!0),gt.receiveShadow=!0,gt}function I(g,M,T,N,J,et,_t,wt,Pt){let gt=new ht(new bi(g,M,T,Pt||14),typeof N=="string"?v(N):N);return gt.position.set(J,et,_t),(wt||l).add(gt),gt.castShadow=!0,gt.receiveShadow=!0,gt}function w(g,M,T,N,J,et,_t,wt,Pt,gt){let He=new ht(gt?new Es(g,1):new fi(g,16,12),typeof M=="string"?gt?v(M,{flatShading:!0}):v(M):M);return He.position.set(T,N,J),_t&&He.scale.set(_t,wt,Pt),(et||l).add(He),He.castShadow=!0,He}let q=[];function F(g,M,T,N,J,et){let _t=new ci(new Kn({map:Wr,blending:ws,transparent:!0,depthWrite:!1,opacity:0}));return et&&_t.material.color.set(et),_t.scale.set(N,N,1),_t.position.set(g,M,T),(J||l).add(_t),q.push(_t),_t}let V=[];function B(g,M){let T=new Ve({color:g});return T.userData.day=new we(g),T.userData.night=new we(M||"#ffd98a"),V.push(T),T}let L=new fi(300,24,16),R=new Float32Array(L.attributes.position.count*3);L.setAttribute("color",new Pe(R,3));let H=new ht(L,new Ve({vertexColors:!0,side:Jn,fog:!1,depthWrite:!1}));H.renderOrder=-10,l.add(H);let rt=new bn;{let g=[],M=Mr(9);for(let T=0;T<400;T++){let N=M()*Math.PI*2,J=.15+M()*1.3;g.push(Math.cos(N)*Math.cos(J)*280,Math.sin(J)*280,Math.sin(N)*Math.cos(J)*280)}rt.setAttribute("position",new Pe(g,3))}let tt=xe(128,128,g=>{let M=g.createRadialGradient(64,64,10,64,64,64);M.addColorStop(0,"rgba(255,255,240,1)"),M.addColorStop(.35,"rgba(255,240,200,.9)"),M.addColorStop(.4,"rgba(255,230,180,.3)"),M.addColorStop(1,"rgba(255,230,180,0)"),g.fillStyle=M,g.fillRect(0,0,128,128)}),lt=new ci(new Kn({map:tt,fog:!1,depthWrite:!1,transparent:!0}));lt.scale.set(50,50,1),H.add(lt);let St=xe(128,128,g=>{let M=g.createRadialGradient(64,64,18,64,64,64);M.addColorStop(0,"rgba(255,248,220,1)"),M.addColorStop(.42,"rgba(255,244,210,1)"),M.addColorStop(.46,"rgba(255,240,200,.25)"),M.addColorStop(1,"rgba(255,240,200,0)"),g.fillStyle=M,g.fillRect(0,0,128,128)}),ot=new ci(new Kn({map:St,fog:!1,depthWrite:!1,transparent:!0}));ot.scale.set(36,36,1),H.add(ot);let Rt=new ye;H.add(Rt);{let g=xe(16,16,N=>{N.fillStyle="#fff8e0",N.beginPath(),N.arc(8,8,3,0,7),N.fill()}),M=rt.attributes.position,T=new Kn({map:g,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let N=0;N<M.count;N+=2){let J=new ci(T);J.position.set(M.getX(N),M.getY(N),M.getZ(N)),J.scale.set(1.4,1.4,1),Rt.add(J)}Rt.userData.m=T}let ct=new ye;l.add(ct);{let g=Mr(4);for(let M=0;M<14;M++){let T=new ye,N=3+(g()*3|0);for(let _t=0;_t<N;_t++){let wt=new ht(new Es(3+g()*3,1),new nn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));wt.position.set(_t*4-N*2,g()*1.5,g()*2),wt.scale.y=.6,T.add(wt)}let J=g()*Math.PI*2,et=110+g()*60;T.position.set(Math.cos(J)*et,40+g()*25,Math.sin(J)*et),T.userData.a=J,T.userData.R=et,ct.add(T)}}let Nt=new Vr(14676735,8036442,1.4);l.add(Nt);let Zt=new kl(16777215,.25);l.add(Zt);let kt=new Hr(16773852,2.2);kt.castShadow=!0;let ie=o?1024:2048;kt.shadow.mapSize.set(ie,ie),Object.assign(kt.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),kt.shadow.bias=-8e-4,kt.shadow.normalBias=.03,l.add(kt),l.add(kt.target);let Ie=xe(256,256,(g,M,T)=>{g.fillStyle="#3fb7d8",g.fillRect(0,0,M,T);let N=Mr(2);for(let J=0;J<90;J++){g.strokeStyle=`rgba(255,255,255,${.12+N()*.25})`,g.lineWidth=2+N()*2;let et=N()*M,_t=N()*T,wt=10+N()*24;g.beginPath(),g.moveTo(et,_t),g.quadraticCurveTo(et+wt/2,_t-4,et+wt,_t),g.stroke()}});Ie.wrapS=Ie.wrapT=Gs,Ie.repeat.set(40,40);let yt=new nn({map:Ie,color:"#ffffff"}),Lt=new ht(new Ge(900,900),yt);Lt.rotation.x=-Math.PI/2,Lt.position.y=-.45,Lt.receiveShadow=!0,l.add(Lt);function se(g,M,T){let N=new gr;return N.moveTo(-g+T,-M),N.lineTo(g-T,-M),N.quadraticCurveTo(g,-M,g,-M+T),N.lineTo(g,M-T),N.quadraticCurveTo(g,M,g-T,M),N.lineTo(-g+T,M),N.quadraticCurveTo(-g,M,-g,M-T),N.lineTo(-g,-M+T),N.quadraticCurveTo(-g,-M,-g+T,-M),N}let Ft=xe(128,128,(g,M,T)=>{g.fillStyle="#f3dfa8",g.fillRect(0,0,M,T);let N=Mr(7);for(let J=0;J<300;J++)g.fillStyle=N()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",g.fillRect(N()*M,N()*T,2,2)});{let g=new va(se(hs+Rs,Hi+Rs,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});g.rotateX(Math.PI/2);let M=new ht(g,new nn({map:y(Ft,.4,.4)}));M.position.y=-.83,M.receiveShadow=!0,l.add(M);let T=new ht(new Lo(se(hs+Rs+3.4,Hi+Rs+3.4,18),12),new Ve({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=-.38,l.add(T)}let de=xe(256,256,(g,M,T)=>{g.fillStyle="#7ccb5a",g.fillRect(0,0,M,T);let N=Mr(5);for(let J=0;J<900;J++){g.fillStyle=N()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let et=N()*M,_t=N()*T;g.fillRect(et,_t,2,5)}});{let g=new Lo(se(hs,27,12),10);g.rotateX(-Math.PI/2),g.translate(0,0,-7);let M=g.attributes.uv;for(let N=0;N<M.count;N++)M.setXY(N,M.getX(N)/8,M.getY(N)/8);let T=new ht(g,new nn({map:y(de,1,1)}));T.position.y=.02,T.receiveShadow=!0,l.add(T)}let ue=xe(128,128,(g,M,T)=>{g.fillStyle="#d9d4cc",g.fillRect(0,0,M,T);let N=Mr(8);for(let J=0;J<4;J++)for(let et=0;et<4;et++){let _t=(N()*14|0)-7;g.fillStyle=`rgb(${206+_t},${200+_t},${190+_t})`,g.fillRect(et*32+1,J*32+1,30,30)}}),le=v("#f4f1ea");for(let[g,M,T,N]of C1){let J=Math.hypot(T-g,N-M)+Ea*2,et=(g+T)/2,_t=(M+N)/2,wt=M===N,Pt=new ht(new Ge(wt?J:Ea*2,wt?Ea*2:J),new nn({map:y(ue,(wt?J:4)/2,(wt?4:J)/2)}));Pt.rotation.x=-Math.PI/2,Pt.position.set(et,.04,_t),Pt.receiveShadow=!0,l.add(Pt);for(let gt of[-1,1]){let He=new ht(new fn(wt?J:.25,.12,wt?.25:J),le);He.position.set(et+(wt?0:gt*(Ea+.1)),.06,_t+(wt?gt*(Ea+.1):0)),He.receiveShadow=!0,l.add(He)}}let Oe=xe(512,512,(g,M,T)=>{g.fillStyle="#e9b98a",g.fillRect(0,0,M,T),g.translate(256,256);for(let N=250;N>40;N-=26)g.strokeStyle=N%52?"#f4d2a6":"#d99a6a",g.lineWidth=10,g.beginPath(),g.arc(0,0,N,0,7),g.stroke();for(let N=0;N<16;N++)g.rotate(Math.PI/8),g.strokeStyle="#f7e2c0",g.lineWidth=4,g.beginPath(),g.moveTo(50,0),g.lineTo(250,0),g.stroke()});{let g=new ht(new Gn(Cf,48),new nn({map:Oe}));g.rotation.x=-Math.PI/2,g.position.y=.06,g.receiveShadow=!0,l.add(g);let M=new ht(new zl(Cf,Cf+.35,48),le);M.rotation.x=-Math.PI/2,M.position.y=.08,l.add(M)}let Tt=[];{let g=new ye;l.add(g);let M=v("#f4f1ea");I(3.4,3.6,.7,M,0,.35,0,g,32);let T=xe(128,128,(_t,wt,Pt)=>{_t.fillStyle="#5ec8e8",_t.fillRect(0,0,wt,Pt),_t.strokeStyle="rgba(255,255,255,.5)",_t.lineWidth=3;for(let gt=0;gt<8;gt++)_t.beginPath(),_t.arc(64,64,8+gt*8,0,7),_t.stroke()}),N=new ht(new Gn(3.05,32),new Ve({map:T}));N.rotation.x=-Math.PI/2,N.position.y=.72,g.add(N),Tt.push(N),I(.5,.7,1.4,M,0,1.3,0,g,16),I(1.4,1.2,.25,M,0,2.05,0,g,24),I(.25,.35,.9,M,0,2.6,0,g,12),I(.7,.6,.18,M,0,3.1,0,g,20);let J=new Ve({color:"#c8f0ff",transparent:!0,opacity:.75}),et=new ht(new bi(.12,.2,1.2,10,1,!0),J);et.position.y=3.7,g.add(et),Tt.push(et);for(let _t=0;_t<8;_t++){let wt=_t/8*Math.PI*2,Pt=new ht(new Ci(.9,.06,6,12,Math.PI*.6),J);Pt.position.set(Math.cos(wt)*.9,2.2,Math.sin(wt)*.9),Pt.rotation.set(0,-wt,Math.PI*.2),g.add(Pt)}for(let _t=0;_t<6;_t++){let wt=_t/6*Math.PI*2+.26;Ut(Math.cos(wt)*6.6,Math.sin(wt)*6.6,wt)}}function Ut(g,M,T){let N=new ye;N.position.set(g,0,M),N.rotation.y=-T,l.add(N),S(1.6,.45,1,"#c8704a",0,.22,0,N),S(1.45,.1,.85,"#5a3a24",0,.45,0,N,!1);let J=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let et=0;et<8;et++)w(.13,J[et%5],-.55+et%4*.36,.62,-.2+Math.floor(et/4)*.4,N),w(.1,"#4a9a3a",-.55+et%4*.36,.52,-.2+Math.floor(et/4)*.4,N)}function O(g){return xe(128,128,(M,T,N)=>{M.fillStyle=g,M.fillRect(0,0,T,N);for(let J=0;J<N;J+=16)M.fillStyle="rgba(0,0,0,.08)",M.fillRect(0,J,T,2),M.fillStyle="rgba(255,255,255,.08)",M.fillRect(0,J+2,T,2)})}function re(g){return xe(512,128,(M,T,N)=>{M.fillStyle="#fff8ea",M.strokeStyle="#3a2a1a",M.lineWidth=10,yr(M,6,6,T-12,N-12,24),M.fill(),M.stroke(),M.fillStyle="#3a2a1a",M.textAlign="center",M.textBaseline="middle";let J=64;for(M.font=`900 ${J}px ${Ln}`;M.measureText(g).width>T-60&&J>20;)J-=2,M.font=`900 ${J}px ${Ln}`;M.fillText(g,T/2,N/2+3)})}let vt=5.4,zt=4.2,It=3;function be(g,M){let T=new ye,N=g.wall,J=new nn({map:O(N)}),et=-.6;S(vt+.3,.35,zt+.3,"#e8e2d4",0,.17,et,T);let _t=S(vt,It,zt,J,0,.35+It/2,et,T);for(let ft of[-1,1])S(.22,It,.22,"#f4efe2",ft*vt/2,.35+It/2,et+zt/2,T);S(vt+.1,.18,.18,"#f4efe2",0,.35+It,et+zt/2+.02,T);let wt=v(g.roofC),Pt=.35+It;if(g.roof==="flat")S(vt+.6,.35,zt+.6,wt,0,Pt+.17,et,T),S(vt+.2,.3,zt+.2,"#f4efe2",0,Pt+.5,et,T),S(1,.7,1,"#9a9a9a",1.4,Pt+.9,et-.6,T);else if(g.roof==="round"){let ft=new ht(new bi(zt/2+.45,zt/2+.45,vt+.5,24,1,!1,0,Math.PI),wt);ft.rotation.set(0,0,Math.PI/2),ft.scale.set(.72,1,1),ft.position.set(0,Pt,et),ft.castShadow=!0,T.add(ft);for(let he of[-1,1]){let me=new ht(new Gn(zt/2+.45,24,0,Math.PI),J);me.rotation.y=he*Math.PI/2,me.scale.set(1,.72,1),me.position.set(he*(vt/2+.251),Pt,et),T.add(me)}}else if(g.roof==="hip"){let ft=(vt+.9)/2,he=(zt+.9)/2,me=1.7,Ne=Math.max(.3,ft-he),an=(Zl,La,Zr)=>[Zl,La,Zr],ln=an(-ft,0,he),_e=an(ft,0,he),tn=an(ft,0,-he),on=an(-ft,0,-he),$n=an(-Ne,me,0),si=an(Ne,me,0),ri=[ln,_e,si,ln,si,$n,tn,on,$n,tn,$n,si,_e,tn,si,on,ln,$n],oi=new bn;oi.setAttribute("position",new Pe(ri.flat(),3)),oi.computeVertexNormals();let es=new ht(oi,wt.clone());es.material.side=Rn,es.position.set(0,Pt-.05,et),es.castShadow=!0,T.add(es),S(2*ft,.12,2*he,"#f4efe2",0,Pt-.02,et,T).castShadow=!1}else{let ft=new gr,he=zt/2+.5;ft.moveTo(-he,0),ft.lineTo(0,1.9),ft.lineTo(he,0),ft.lineTo(-he,0);let me=new va(ft,{depth:vt+.6,bevelEnabled:!1});me.translate(0,0,-(vt+.6)/2);let Ne=new ht(me,[wt,wt]);Ne.rotation.y=Math.PI/2,Ne.position.set(0,Pt-.05,et),Ne.castShadow=!0,T.add(Ne);let an=new gr;an.moveTo(-zt/2,0),an.lineTo(0,1.55),an.lineTo(zt/2,0);let ln=new ht(new Lo(an),J);ln.rotation.y=Math.PI/2;for(let tn of[-1,1]){let on=ln.clone();on.rotation.y=tn*Math.PI/2,on.position.set(tn*(vt/2+.001),Pt,et),T.add(on)}let _e=new ht(new Gn(.35,20),B("#bfe6ff"));_e.position.set(0,Pt+.5,et+zt/2+.02),T.add(_e)}let gt=et+zt/2+.02,He=v(g.doorC);S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,gt,T);let gn=new ye;{let ft=new ht(new Ge(1.1,2.3),new Ve({color:"#2a1a10"}));ft.position.set(0,.35+1.15,gt+.005),T.add(ft);let he=new ht(new Ge(1,2.1),B("#5a3a24","#ffcf7a"));he.position.set(0,.35+1.07,gt+.007),T.add(he)}if(g.door==="arch"){S(1.1,1.75,.14,He,0,.35+.88,gt+.02,gn);let ft=new ht(new Gn(.55,20,0,Math.PI),He);ft.position.set(0,.35+1.75,gt+.1),gn.add(ft)}else S(1.1,2.05,.14,He,0,.35+1.02,gt+.02,gn);if(g.door==="round"){let ft=new ht(new Gn(.26,20),B("#bfe6ff"));ft.position.set(0,.35+1.5,gt+.1),gn.add(ft);let he=new ht(new Ci(.28,.05,8,20),v("#c8c8d0"));he.position.set(0,.35+1.5,gt+.1),gn.add(he)}else if(g.door==="grid")for(let ft=0;ft<3;ft++)for(let he=0;he<2;he++){let me=new ht(new Ge(.38,.4),B("#e8f4ff","#ffe0a0"));me.position.set(-.21+he*.42,.35+1.15+ft*.45,gt+.1),gn.add(me)}w(.06,"#e9c34a",.4,.35+1,gt+.12,gn);{let ft=new ye;ft.position.set(-.55,0,gt+.02),T.add(ft),gn.position.set(.55,0,-(gt+.02)),ft.add(gn),T.userData.doorPivot=ft,T.userData.doorZ=gt}let ii=w(.16,E("#fff4d0"),.95,.35+2.3,gt+.2,T);F(.95,.35+2.3,gt+.3,2.2,T);for(let ft of[-1.75,1.75]){if(g.win==="round"){let me=new ht(new Gn(.5,24),B("#bfe6ff"));me.position.set(ft,2.05,gt+.01),T.add(me);let Ne=new ht(new Ci(.52,.08,8,24),v("#f4efe2"));Ne.position.set(ft,2.05,gt+.02),T.add(Ne)}else if(g.win==="arch"){let me=new ht(new Ge(.9,.8),B("#bfe6ff"));me.position.set(ft,2.05-.15,gt+.01),T.add(me);let Ne=new ht(new Gn(.45,16,0,Math.PI),B("#bfe6ff"));Ne.position.set(ft,2.05+.25,gt+.01),T.add(Ne),S(1.05,.1,.14,"#f4efe2",ft,2.05-.58,gt+.05,T)}else if(g.win==="shoji"){let me=new ht(new Ge(1.1,1),B("#fff4dc","#ffcf7a"));me.position.set(ft,2.05,gt+.01),T.add(me);for(let Ne=-1;Ne<=1;Ne++)S(.04,1,.04,"#6b3f1f",ft+Ne*.36,2.05,gt+.04,T,!1),S(1.1,.04,.04,"#6b3f1f",ft,2.05+Ne*.33,gt+.04,T,!1)}else{let me=new ht(new Ge(1.05,.95),B("#bfe6ff"));me.position.set(ft,2.05,gt+.01),T.add(me),S(1.2,.1,.1,"#f4efe2",ft,2.05+.5,gt+.04,T,!1),S(1.2,.1,.1,"#f4efe2",ft,2.05-.5,gt+.04,T,!1),S(.1,1.05,.1,"#f4efe2",ft-.55,2.05,gt+.04,T,!1),S(.1,1.05,.1,"#f4efe2",ft+.55,2.05,gt+.04,T,!1),S(.06,1,.06,"#f4efe2",ft,2.05,gt+.04,T,!1),S(1.3,.14,.32,"#f4efe2",ft,2.05-.6,gt+.14,T)}if(g.garden!=="none"){S(1,.2,.25,"#8a5a34",ft,2.05-.78,gt+.2,T);for(let me=0;me<4;me++)w(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][me],ft-.36+me*.24,2.05-.62,gt+.2,T)}}if(+g.porch){S(vt+.6,.3,1.7,"#c8935a",0,.15,gt+.85,T);for(let ft=0;ft<9;ft++)S(.02,.02,1.7,"#9a6a3a",-vt/2-.1+ft*.7,.31,gt+.85,T,!1);S(1.6,.15,.5,"#c8935a",0,.075,gt+1.95,T);for(let ft of[-1,1])S(.12,.9,.12,"#f4efe2",ft*(vt/2+.15),.75,gt+1.62,T),S(.12,.9,.12,"#f4efe2",ft*1,.75,gt+1.62,T),S(vt/2-.8,.08,.08,"#f4efe2",ft*(vt/4+.58),1.1,gt+1.62,T)}{let ft=new ye;ft.position.set(vt/2+.2,0,gt+2.4),T.add(ft),S(.1,1,.1,"#6b3f1f",0,.5,0,ft),S(.4,.32,.55,g.doorC==="#f4efe2"?"#e8553f":g.doorC,0,1.12,0,ft),S(.05,.25,.05,"#e8553f",.22,1.3,.1,ft)}let pt=gt+2.9,Le=vt/2+1.1;if(g.fence==="white"||g.fence==="wood"){let ft=g.fence==="white"?"#ffffff":"#c8b070";for(let he of[-1,1]){for(let me=0;me<6;me++){let Ne=he*(1.3+me*.55);if(S(.12,.8,.06,ft,Ne,.4,pt,T),g.fence==="white"){let an=new ht(new hi(.09,.16,4),v(ft));an.position.set(Ne,.88,pt),an.rotation.y=Math.PI/4,T.add(an)}}S(2.9,.08,.05,ft,he*2.65,.55,pt-.04,T,!1),S(2.9,.08,.05,ft,he*2.65,.25,pt-.04,T,!1)}}else if(g.fence==="hedge")for(let ft of[-1,1]){let he=S(2.8,.7,.6,v("#3f9a3f"),ft*2.6,.35,pt,T);he.geometry=new fn(2.8,.7,.6,3,1,1);for(let me=0;me<4;me++)w(.38,"#4aa84a",ft*(1.5+me*.72),.7,pt,T,1,.8,1,!0)}if(g.garden==="flower")for(let ft of[-1,1])for(let he=0;he<5;he++)w(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(he+(ft>0?2:0))%5],ft*(2.1+he%3*.5),.28,gt+2+Math.floor(he/3)*.4,T),w(.12,"#3f8a2f",ft*(2.1+he%3*.5),.14,gt+2+Math.floor(he/3)*.4,T);else if(g.garden==="pots")for(let ft of[-1,1])I(.28,.22,.45,"#c8704a",ft*2.3,.22,gt+2.1,T),w(.38,"#4a9a3a",ft*2.3,.7,gt+2.1,T,1,1,1,!0);else g.garden==="tree"&&(I(.12,.16,1.5,"#7a5034",-vt/2-.6,.75,gt+1.6,T),w(.95,"#4aa84a",-vt/2-.6,2,gt+1.6,T,1,1,1,!0),w(.6,"#5ab85a",-vt/2-.2,2.4,gt+1.9,T,1,1,1,!0));if(M){let ft=new ht(new Ge(1.8,.45),new Ve({map:re(M),transparent:!0}));ft.position.set(0,.35+2.5,gt+.09),T.add(ft)}return T.traverse(ft=>{ft.isMesh&&(ft.castShadow=ft.castShadow||!1,ft.receiveShadow=!0)}),T.userData.door=new z(0,0,gt+2.4),T}let qt=[],U=Mr(31),A=g=>{let M=Bo.find(T=>T.id===g||T.spr===g);return M?M.name.split(" ")[0]:g};function Q(g){let M=T=>T[Math.floor(g()*T.length)][0];return{wall:M(ji.wall),roof:M(ji.roof),roofC:M(ji.roofC),door:M(ji.door),doorC:M(ji.doorC),win:M(ji.win),porch:g()<.75?1:0,fence:M(ji.fence),garden:M(ji.garden)}}function mt(g){g.g&&(l.remove(g.g),g.g.traverse(_t=>{_t.geometry&&_t.geometry.dispose()}));let M=g.own?r.ex:g.ex,T=g.own?n.houseName||"\u6211\u7684\u5BB6":g.label;g.g=be(M,T),g.g.position.set(g.x,0,g.z),g.g.rotation.y=g.f===2?Math.PI:0,l.add(g.g),g.g.traverse(_t=>{_t.isMesh&&(_t.userData.house=g)});let N=g.g.userData.door.clone();g.f===2&&(N.x=-N.x,N.z=-N.z),g.door={x:g.x+N.x,z:g.z+N.z};let J=g.f===2?-1:1,et=g.g.userData.doorZ+.6;g.face={x:g.x,z:g.z+J*et},g.inw=-J,g.pivot=g.g.userData.doorPivot}I1.forEach(g=>{let M=Object.assign({},g);if(!M.own){M.ex=Q(U);let T=Bo.find(N=>N.spr===g.npc||N.id===g.npc);M.label=(T?T.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}qt.push(M),mt(M)});let dt=qt.find(g=>g.own);function xt(g){let M=new ye;M.position.set(g.x,0,g.z),l.add(M);let T={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[g.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,M),S(6.6,3.4,5,T[0],0,2,-.2,M),S(7.4,.4,6,T[1],0,3.9,-.2,M),S(7.6,.3,1.6,T[1],0,3.1,2.6,M).rotation.x=.35;let N=new ht(new Ge(4.2,.9),new Ve({map:re(g.k==="izakaya"&&r.name?r.name:T[3])}));N.position.set(0,4.55,2.85),M.add(N),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,M);let J=new ht(new Ge(2.2,1.4),B("#cfe8f4"));J.position.set(-1.9,1.7,2.31),M.add(J);let et=J.clone();et.position.x=1.9,M.add(et),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,M);let _t=xe(256,100,(Pt,gt,He)=>{for(let gn=0;gn<3;gn++)Pt.fillStyle=T[2],Pt.fillRect(4+gn*84,0,80,He-4);Pt.fillStyle="#fff",Pt.textAlign="center",Pt.textBaseline="middle",Pt.font=`900 40px ${Ln}`,[...g.k==="bar"?"\u6708\u5F71":g.n.slice(0,3)].slice(0,3).forEach((gn,ii)=>Pt.fillText(gn,44+ii*84,44))}),wt=new ht(new Ge(1.5,.65),new Ve({map:_t,transparent:!0,side:Rn}));wt.position.set(0,2.25,2.42),M.add(wt);for(let Pt of[-1,1]){let gt=w(.3,E(g.k==="sushi"?"#ffffff":"#e2452f"),Pt*1.15,2.3,2.5,M,1,1.3,1);F(Pt*1.15,2.3,2.6,2.6,M)}if(g.k==="ramen")for(let Pt=0;Pt<3;Pt++)I(.25,.25,.7,"#c8352a",-1.2+Pt*1.2,.35,3.5,M,12);if(g.k==="sushi"){let Pt=new ht(new hi(.4,1.2,4),v("#2f6bb8"));Pt.position.set(3.1,3.2,2.6),Pt.rotation.z=-1.3,M.add(Pt)}return M.traverse(Pt=>{Pt.isMesh&&(Pt.userData.shop=g)}),g.door={x:g.x,z:g.z+3.6},g.face={x:g.x,z:g.z+2.85},g.inw=-1,M}Aa.forEach(xt);let Wt=[],Ot=[];qt.forEach(g=>{Wt.push([g.x-vt/2-.2,g.z-(g.f===2?-.6:.6)-zt/2-.2,g.x+vt/2+.2,g.z-(g.f===2?-.6:.6)+zt/2+.2])}),Aa.forEach(g=>Wt.push([g.x-3.5,g.z-3,g.x+3.5,g.z+2.4])),Ot.push([0,0,3.6]);for(let g=0;g<6;g++){let M=g/6*Math.PI*2+.26;Ot.push([Math.cos(M)*6.6,Math.sin(M)*6.6,.7])}function Yt(g,M,T,N){let J=new ye;if(J.position.set(g,0,M),J.scale.setScalar(T),l.add(J),N==="palm"){let et=0,_t=0;for(let wt=0;wt<6;wt++){let Pt=I(.22-wt*.02,.26-wt*.02,.8,"#a07850",et,_t+.4,0,J,8);Pt.rotation.z=-.08*wt,et+=.06*wt,_t+=.78}for(let wt=0;wt<7;wt++){let Pt=wt/7*Math.PI*2,gt=new ht(new hi(.32,2.6,4),v("#3fa04a",{flatShading:!0}));gt.scale.z=.25,gt.position.set(et+Math.cos(Pt)*1.1,_t+.1,Math.sin(Pt)*1.1),gt.rotation.set(Math.sin(Pt)*1.6,0,-Math.cos(Pt)*1.6),gt.castShadow=!0,J.add(gt)}w(.18,"#6a4a2a",et,_t-.1,.1,J)}else I(.22,.3,1.8,"#8a5a3a",0,.9,0,J,8),w(1.5,N==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,J,1,.9,1,!0),w(1,N==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,J,1,1,1,!0),w(.9,N==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,J,1,1,1,!0);Wt.push([g-.5*T,M-.5*T,g+.5*T,M+.5*T])}let Re=Mr(77);for(let g=0;g<34;g++){let M=g/34*Math.PI*2+Re()*.1,T=Math.cos(M)*(hs-1.5+Re()*2),N=Math.sin(M)*(Hi-1.5+Re()*2);if(N>18){Re()<.5&&Yt(Ii(T*1.05,-hs-3,hs+3),Ii(N,22,Hi+4),.9,"palm");continue}Yt(Ii(T,-hs+2,hs-2),Ii(N,-Hi+2,Hi-2),.9+Re()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([g,M],T)=>Yt(g,M,.8+T%3*.1,T%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([g,M])=>Yt(g,M,.8,"pink"));function Ct(g,M){let T=new ye;T.position.set(g,0,M),l.add(T),I(.09,.12,3.6,"#3a3a44",0,1.8,0,T,8);let N=w(.28,E("#fff4d0"),0,3.7,0,T);I(.3,.2,.12,"#3a3a44",0,3.98,0,T,10),F(0,3.7,0,5,T);let J=new ht(new Gn(3,20),new Ve({map:Wr,transparent:!0,blending:ws,depthWrite:!1,opacity:0}));J.rotation.x=-Math.PI/2,J.position.y=.08,T.add(J),q.push(J),J.userData.k=.35,Wt.push([g-.2,M-.2,g+.2,M+.2])}for(let[g,M]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Ct(g,M);function Jt(g,M,T){let N=new ye;N.position.set(g,0,M),N.rotation.y=T,l.add(N),S(2,.12,.55,"#b8824a",0,.5,0,N),S(2,.5,.1,"#b8824a",0,.85,-.25,N);for(let wt of[-.85,.85])S(.1,.5,.5,"#3a3a44",wt,.25,0,N);let J=Math.abs(Math.sin(T))>.7,et=J?.4:1,_t=J?1:.4;return Wt.push([g-et,M-_t,g+et,M+_t]),N}Jt(0,6.9,Math.PI),Jt(0,-6.9,0),Jt(-6.9,0,Math.PI/2),Jt(6.9,0,-Math.PI/2);let pe=new ye;pe.position.set(4.6,0,-4.6),pe.rotation.y=-Math.PI/4,l.add(pe);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,pe),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,pe);let g=xe(256,160,(T,N,J)=>{T.fillStyle="#c8935a",T.fillRect(0,0,N,J),T.strokeStyle="#6b3f1f",T.lineWidth=10,T.strokeRect(0,0,N,J),T.fillStyle="#fff8ea",T.fillRect(20,30,100,70),T.fillStyle="#ffe0ea",T.fillRect(135,22,100,80),T.fillStyle="#3a2a1a",T.font=`900 26px ${Ln}`,T.textAlign="center",T.fillText("\u5CF6\u306E\u63B2\u793A\u677F",N/2,J-18)}),M=new ht(new fn(1.8,1.1,.1),[v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),new Ve({map:g}),v("#6b3f1f")]);M.position.y=1.4,M.castShadow=!0,pe.add(M),Wt.push([3.8,-5.4,5.4,-3.8])}function ge(g,M,T){let N=new ye;N.position.set(g,0,M),l.add(N),I(.05,.05,2.4,"#f4efe2",0,1.2,0,N,6);let J=new ht(new hi(1.5,.7,12),v(T,{flatShading:!0}));J.position.y=2.5,J.castShadow=!0,N.add(J);let et=new ht(new hi(1.52,.7,12,1,!0,0,Math.PI/6),v("#ffffff",{side:Rn}));for(let _t=0;_t<6;_t++){let wt=et.clone();wt.rotation.y=_t*Math.PI/3,wt.position.y=2.5,N.add(wt)}}function Kt(g,M,T){let N=new ye;N.position.set(g,0,M),l.add(N),S(.7,.12,1.8,T,0,.35,0,N);let J=S(.7,.1,.8,T,0,.6,-.85,N);J.rotation.x=.6;for(let et of[-.3,.3])for(let _t of[-.7,.7])S(.05,.3,.05,"#f4efe2",et,.15,_t,N)}ge(-18,28,"#2f6bb8"),Kt(-16.2,28.4,"#6fd1c0"),Kt(-19.6,28.8,"#f29ab8"),ge(-4,30,"#e8553f"),Kt(-2.2,30.2,"#f6cf4a"),ge(22,29,"#3f8f4f"),Kt(23.8,29.3,"#f29ab8"),ge(-30,27,"#f6cf4a");{let g=new ye;g.position.set(10,0,Hi+6),l.add(g),S(3,.3,16,"#b8824a",0,.15,6,g);for(let N=0;N<6;N++)for(let J of[-1.4,1.4])I(.15,.15,1.6,"#8a5a34",J,-.5,-1+N*3,g,8);for(let N=0;N<16;N++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+N,g,!1);let M=new ye;M.position.set(14,-.2,Hi+17),l.add(M),S(1.8,.6,4,"#f4efe2",0,.3,0,M),S(1.9,.15,4.1,"#e8553f",0,.65,0,M),I(.06,.06,3,"#8a5a34",0,2,0,M,6);let T=new ht(new Ge(1.6,2.2),v("#ffffff",{side:Rn}));T.position.set(0,2.2,.6),T.rotation.y=Math.PI/2,M.add(T),ct.userData.boat=M}let De=[8.5,Hi+4,11.5,Hi+19],ee=[],We=1.5,Y=xe(64,64,g=>{let M=g.createRadialGradient(32,32,2,32,32,32);M.addColorStop(0,"rgba(0,0,0,.55)"),M.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=M,g.fillRect(0,0,64,64)});function Xt(g,M){return xe(512,112,(T,N,J)=>{T.textAlign="center",T.textBaseline="middle";let et=52;T.font=`900 ${et}px ${Ln}`;let _t=String(g||"").slice(0,16);for(;T.measureText(_t).width>N-80&&et>22;)et-=2,T.font=`900 ${et}px ${Ln}`;let wt=Math.min(N-12,T.measureText(_t).width+56);T.fillStyle=M==="me"?"#ffffffee":"#2a2a48e0",T.strokeStyle=M==="me"?"#3a2a1a":"#c8c0ff",T.lineWidth=7,yr(T,(N-wt)/2,14,wt,J-28,(J-28)/2),T.fill(),T.stroke(),T.fillStyle=M==="me"?"#3a2a1a":"#fff3d6",T.fillText(_t,N/2,J/2+2)})}let ut=xe(128,112,g=>{g.strokeStyle="#2a1810",g.lineWidth=6,g.lineJoin="round",g.fillStyle="#ffffff",yr(g,12,8,104,66,24),g.fill(),g.stroke(),g.beginPath(),g.moveTo(44,72),g.lineTo(34,100),g.lineTo(66,74),g.closePath(),g.fill(),g.stroke(),g.fillRect(46,68,18,8),g.fillStyle="#2a1810";for(let M=0;M<3;M++)g.beginPath(),g.arc(40+M*24,42,6,0,7),g.fill()});function bt(g,M,T){T=T||{};let N=new ye;l.add(N);let J=new Ge(1,1);J.translate(0,.5,0);let et=new Ve({transparent:!0,alphaTest:.04,color:16777215}),_t=new ht(J,et);N.add(_t);let wt={grp:N,m:_t,mat:et,h0:M,h:M*We,ar:.8,w:M*We*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};p(g,gt=>{et.map=gt,et.needsUpdate=!0,wt.ar=gt.image.width/gt.image.height,wt.w=wt.h*wt.ar});let Pt=new ht(new Gn(.5,16),new Ve({map:Y,transparent:!0,depthWrite:!1}));if(Pt.rotation.x=-Math.PI/2,l.add(Pt),wt.sh=Pt,T.name){let gt=new ci(new Kn({map:Xt(T.name,T.nk),transparent:!0,depthTest:!1}));gt.renderOrder=30,gt.scale.set(2.2,.48,1),l.add(gt),wt.tag=gt}if(T.bubble){let gt=new ci(new Kn({map:ut,transparent:!0,depthWrite:!1}));gt.scale.set(.85,.74,1),l.add(gt),wt.bub=gt}return ee.push(wt),wt}let st=bt(n.me.src,1.5,{name:n.me.name||"\u6211",nk:"me"}),Ht=.35;n.spawn==="door"&&dt?(st.x=dt.face.x,st.z=dt.face.z-dt.inw*.9):n.spawn==="front"&&dt?(st.x=dt.face.x+.8,st.z=dt.face.z-dt.inw*1.9,Ht=dt.f===2?Math.PI:0):n.spawn==="shop"?(st.x=Aa[0].face.x,st.z=Aa[0].face.z+.9):(st.x=0,st.z=11.5);function Ce(g,M){let T=Math.abs(g),N=Math.abs(M),J=hs+Rs-1,et=Hi+Rs-1,_t=14;return g>=De[0]&&g<=De[2]&&M>=De[1]&&M<=De[3]?!0:T>J||N>et?!1:T>J-_t&&N>et-_t?Math.hypot(T-(J-_t),N-(et-_t))<_t:!0}function qe(g,M,T){if(!Ce(g,M))return!0;for(let N of Wt)if(g>N[0]-T&&g<N[2]+T&&M>N[1]-T&&M<N[3]+T)return!0;for(let N of Ot)if(Math.hypot(g-N[0],M-N[1])<N[2]+T)return!0;return!1}let Dn=1,Xe=-hs-Rs,Qn=-Hi-Rs,je=Math.ceil((hs+Rs)*2),ts=Math.ceil((Hi+Rs)*2+16),Pi=null;function Xn(){Pi=new Uint8Array(je*ts);for(let g=0;g<ts;g++)for(let M=0;M<je;M++)Pi[g*je+M]=qe(Xe+M+.5,Qn+g+.5,.35)?1:0}Xn();function ps(g,M,T,N){let J=_e=>Math.floor(_e-Xe),et=_e=>Math.floor(_e-Qn),_t=J(g),wt=et(M),Pt=J(T),gt=et(N);if(Pt<0||gt<0||Pt>=je||gt>=ts)return null;if(Pi[gt*je+Pt]){let _e=null,tn=1e9;for(let on=-3;on<=3;on++)for(let $n=-3;$n<=3;$n++){let si=Pt+$n,ri=gt+on;if(si<0||ri<0||si>=je||ri>=ts||Pi[ri*je+si])continue;let oi=$n*$n+on*on;oi<tn&&(tn=oi,_e=[si,ri])}if(!_e)return null;[Pt,gt]=_e}let He=new Int32Array(je*ts).fill(-1),gn=wt*je+_t,ii=gt*je+Pt;He[gn]=gn;let pt=[gn],Le=0;for(;Le<pt.length;){let _e=pt[Le++];if(_e===ii)break;let tn=_e%je,on=_e/je|0;for(let[$n,si]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let ri=tn+$n,oi=on+si;if(ri<0||oi<0||ri>=je||oi>=ts)continue;let es=oi*je+ri;He[es]>=0||Pi[es]||$n&&si&&(Pi[on*je+ri]||Pi[oi*je+tn])||(He[es]=_e,pt.push(es))}}if(He[ii]<0)return null;let ft=[],he=ii;for(;he!==gn;)ft.push([Xe+he%je+.5,Qn+(he/je|0)+.5]),he=He[he];ft.reverse();let me=[],Ne=g,an=M,ln=0;for(;ln<ft.length;){let _e=ln;for(let tn=ft.length-1;tn>ln;tn--)if(Zs(Ne,an,ft[tn][0],ft[tn][1])){_e=tn;break}me.push(ft[_e]),Ne=ft[_e][0],an=ft[_e][1],ln=_e+1}return me}function Zs(g,M,T,N){let J=Math.hypot(T-g,N-M),et=Math.ceil(J/.4);for(let _t=1;_t<=et;_t++){let wt=_t/et;if(qe(g+(T-g)*wt,M+(N-M)*wt,.3))return!1}return!0}let un=[],Li={};function dn(g,M){let T=g+","+M;return Li[T]!==void 0?Li[T]:(Li[T]=un.length,un.push({x:g,z:M,n:[]}),un.length-1)}{let g=[-36,-26,-15,0,15,26,36],M=[-18,0,16];for(let wt of M)for(let Pt=0;Pt<g.length-1;Pt++){let gt=dn(g[Pt],wt),He=dn(g[Pt+1],wt);un[gt].n.push(He),un[He].n.push(gt)}for(let wt of[-36,36])for(let Pt=0;Pt<M.length-1;Pt++){let gt=dn(wt,M[Pt]),He=dn(wt,M[Pt+1]);un[gt].n.push(He),un[He].n.push(gt)}let T=dn(0,-28),N=dn(0,-18);un[T].n.push(N),un[N].n.push(T);let J=dn(0,-9.5),et=dn(0,9.5);for(let[wt,Pt]of[[N,J],[et,dn(0,16)],[J,dn(-9.5,0)],[J,dn(9.5,0)],[et,dn(-9.5,0)],[et,dn(9.5,0)],[dn(-9.5,0),dn(-15,0)],[dn(9.5,0),dn(15,0)]])un[wt].n.push(Pt),un[Pt].n.push(wt);let _t=Li["0,0"];_t!==void 0&&un[_t].n.forEach(wt=>{un[wt].n=un[wt].n.filter(Pt=>Pt!==_t)}),_t!==void 0&&(un[_t].n=[])}let Nn=[];Bo.filter(g=>n.walk&&n.walk[g.spr]&&g.spr!=="robot").sort(()=>Math.random()-.5).slice(0,o?7:10).forEach(g=>{let M=bt(n.walk[g.spr],g.h,{bubble:1});M.d=g,M.sp=g.sp*.9;let T;do T=Math.floor(Math.random()*un.length);while(!un[T].n.length);M.x=un[T].x+vr(-1,1),M.z=un[T].z+vr(-1,1),M.node=T,M.state="idle",M.t=vr(0,3),Nn.push(M)});function ms(g){let M=un[g.node];if(!M.n.length)return;let T=M.n[Math.floor(Math.random()*M.n.length)];g.node=T;let N=un[T];g.tx=N.x+vr(-1.2,1.2),g.tz=N.z+vr(-1.2,1.2),g.state="walk"}let Ti=(g,M,T,N)=>{let J=document.createElement(g);return M&&(J.className=M),T!=null&&(J.innerHTML=T),(N||e).appendChild(J),J},Xr=[],Gi=g=>(Xr.push(g),g),P=Gi(Ti("div","i3info")),k=Gi(Ti("div","i3hud")),it=Gi(Ti("div","h3hint")),nt=Gi(Ti("div","h3toast")),Z=Gi(Ti("div","h3card")),Dt=Gi(Ti("div","i3pan")),Bt=Gi(Ti("div","i3joy","<i></i>")),ce=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,Vt=()=>{if(G.dead)return;let g=t.getBoundingClientRect(),M=e.getBoundingClientRect();Bt.style.left=g.left-M.left+110+"px",Bt.style.top=g.bottom-M.top-110+"px",Bt.firstChild.style.transform="",Bt.className="i3joy"+(ce&&G.mode==="walk"?" rest":"")},oe=Gi(Ti("button","i3door"));oe.type="button",oe.dataset.i3="door";function Me(g){nt.textContent=g,nt.classList.add("on"),clearTimeout(Me.t),Me.t=setTimeout(()=>nt.classList.remove("on"),2400)}let G={dead:!1,mode:"walk",yaw:Ht,yawT:Ht,pitch:.72,pitchT:.72,dist:17,distT:17,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new z(st.x,1,st.z)},ze=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],Ye=0;function rn(){if(ze[Ye][0]!==null)return ze[Ye][0];let g=new Date;return g.getHours()+g.getMinutes()/60}function zn(){if(G.mode==="edit"){k.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}k.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button>${i.stats?'<button class="h3b" type="button" data-i3="stats"><i>\u{1F4CB}</i>\u5E97\u6CC1</button>':""}<button class="h3b" type="button" data-i3="time"><i>\u{1F550}</i>${ze[Ye][1]}</button>`}function $e(){let g=rn(),M=Math.floor(g),T=Math.floor((g-M)*60);P.innerHTML=`<b>\u{1F3DD}\uFE0F ${br(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(n.owner&&n.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(M).padStart(2,"0")}:${String(T).padStart(2,"0")}\u30FB${g<5||g>=19.5?"\u591C\u665A \u{1F319}":g<7?"\u6E05\u6668 \u{1F305}":g<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}zn(),$e(),setTimeout(Vt,50),window.addEventListener("resize",Vt);let jt="wall";function Un(){let g=Object.keys(ji).map(T=>`<button class="h3tab ${jt===T?"on":""}" type="button" data-i3="tab" data-k="${T}">${R1[T]}</button>`).join(""),M=ji[jt].map(([T,N])=>{let J=typeof T=="string"&&T[0]==="#";return`<button class="i3opt ${String(r.ex[jt])===String(T)?"on":""}" type="button" data-i3="opt" data-v="${T}">${J?`<i style="background:${T}"></i>`:""}${br(N)}</button>`}).join("");Dt.innerHTML=`<div class="h3tabs">${g}</div><div class="i3row">${M}</div>`}function Ze(g){G.mode=g,setTimeout(Vt,0),Se(),G.tgt=null,Dt.classList.toggle("on",g==="edit"),zn(),P.style.display=g==="edit"?"none":"",g==="edit"?(Un(),G.distT=14,G.pitchT=.5,G.yawT=dt.f===2?Math.PI:0):(G.distT=17,G.pitchT=.72,W())}let On=0;function W(){s&&(clearTimeout(On),On=setTimeout(()=>{try{i.save&&i.save(r)}catch{}},500))}function pn(g){Se(),G.talk=g,g.state="talk",(!g.deck||!g.deck.length)&&(g.deck=g.d.lines.map(N=>({kind:N[0],text:N[1]})).sort(()=>Math.random()-.5));let M=g.deck.pop(),T=Gr[M.kind]||Gr.chat;Z.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${n.walk[g.d.spr]}')"></div><div class="h3nm"><b>${br(g.d.name)}</b><small>${br(g.d.role||"")}</small></div><span class="h3k" style="background:${T.c}">${T.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${M.kind==="mind"?" mind":""}">${M.kind==="mind"?"\uFF08"+br(M.text)+"\uFF09":"\u300C"+br(M.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,Z.classList.toggle("r",Is(new z(g.x,1,g.z)).x<Ei().left+Ei().width/2),Z.classList.add("on")}function Di(g,M,T,N){Se(),Z.innerHTML=`<div class="h3h"><div class="h3nm"><b>${br(g)}</b><small>${br(M||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${T}</p>${N?`<div class="h3bt">${N}</div>`:""}`,Z.classList.remove("r"),Z.classList.add("on")}function Se(){Z.classList.remove("on");let g=G.talk;G.talk=null,g&&g.state==="talk"&&(g.state="idle",g.t=vr(1,2))}let ti=g=>{let M=g.target.closest("[data-i3]");if(!M||!e.contains(M))return;let T=M.dataset.i3;if(T==="close")Se();else if(T==="more"&&G.talk)pn(G.talk);else if(T==="edit")G.mode==="walk"&&Ze("edit");else if(T==="done")Ze("walk");else if(T==="tab")jt=M.dataset.k,Un();else if(T==="opt"){let N=M.dataset.v;r.ex[jt]=/^\d$/.test(N)?+N:N,mt(dt),Un(),W()}else if(T==="home")Se(),In(An.find(N=>N.kind==="home"));else if(T==="enter")Se(),ei(An.find(N=>N.kind==="home"));else if(T==="shopin")Se(),In(An.find(N=>N.kind==="shop"));else if(T==="door")ei(wn);else if(T==="stats")try{i.stats&&i.stats()}catch{}else T==="time"&&(Ye=(Ye+1)%ze.length,zn(),$e(),Me(Ye?`\u9810\u89BD\uFF1A${ze[Ye][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",ti);function gs(g){if(!G.entering){G.entering=!0;try{i.enter&&i.enter(g||"home")}catch{G.entering=!1}}}let An=qt.map(g=>({h:g,face:g.face,inw:g.inw,pivot:g.pivot,kind:g.own?"home":"npc",label:g.own?s?"\u{1F6AA} \u958B\u9580":"\u{1F6AA} \u62DC\u8A2A":"\u{1F514} \u6309\u9580\u9234",name:g.own?"":g.label})).concat(Aa.map(g=>({s:g,face:g.face,inw:g.inw,kind:g.k==="izakaya"?"shop":"closed",label:g.k==="izakaya"?s?"\u{1F3EE} \u9032\u5E97":"\u{1F3EE} \u9032\u53BB\u901B":"\u{1F6A7} \u6E96\u5099\u4E2D",name:g.n}))),wn=null;function ei(g){if(!(!g||G.ent)){if(g.kind==="npc"){Me(`\u53EE\u549A\uFF5E ${g.name}\u597D\u50CF\u6C92\u4EBA\u5728\u5BB6`);return}if(g.kind==="closed"){Me(`${g.name}\u9084\u5728\u6E96\u5099\u4E2D\uFF0C\u4E4B\u5F8C\u5C31\u80FD\u9032\u53BB\u4E86\uFF01`);return}Se(),G.tgt=null,G.ent={d:g,t:0,x0:st.x,z0:st.z}}}function In(g){ni(g.face.x,g.face.z-g.inw*.7,()=>ei(g))}n.spawn==="door"&&dt&&dt.pivot&&(dt.pivot.rotation.y=1.6,G.closing=dt.pivot);function ni(g,M,T){let N=ps(st.x,st.z,g,M);if(!N){Me("\u8D70\u4E0D\u904E\u53BB");return}G.tgt={path:N,fn:T}}let Ei=()=>t.getBoundingClientRect(),xs=new Fo,Go=new At,mn=new Vi(new z(0,1,0),0),Cs=new z,qn=(g,M)=>{let T=Ei();return Go.set((g-T.left)/T.width*2-1,-((M-T.top)/T.height*2-1)),Go},Is=g=>{let M=g.clone().project(f),T=Ei();return{x:(M.x+1)/2*T.width+T.left,y:(1-M.y)/2*T.height+T.top}},Wi=new Map,Pn=null,Yn=null;t.addEventListener("contextmenu",g=>g.preventDefault());let Xi=null;t.addEventListener("pointerdown",g=>{G.pt=g.pointerType,g.preventDefault();try{t.setPointerCapture(g.pointerId)}catch{}if(g.pointerType==="touch"&&!Xi&&G.mode==="walk"&&!G.ent){let M=Ei();if(g.clientX-M.left<M.width*.45){let T=e.getBoundingClientRect();Xi={id:g.pointerId,x:g.clientX,y:g.clientY},G.tgt=null,Bt.className="i3joy on",Bt.style.left=g.clientX-T.left+"px",Bt.style.top=g.clientY-T.top+"px",Bt.firstChild.style.transform="";return}}if(Wi.set(g.pointerId,{x:g.clientX,y:g.clientY}),Wi.size===2){let[M,T]=[...Wi.values()];Yn={d:Math.hypot(M.x-T.x,M.y-T.y),dist:G.distT,ang:Math.atan2(T.y-M.y,T.x-M.x),yaw:G.yawT},Pn=null;return}Pn={id:g.pointerId,x:g.clientX,y:g.clientY,moved:0,yaw0:G.yawT,pit0:G.pitchT}}),t.addEventListener("pointermove",g=>{if(Xi&&g.pointerId===Xi.id){let N=g.clientX-Xi.x,J=g.clientY-Xi.y,et=Math.hypot(N,J),_t=50,wt=Math.min(1,et/_t)/Math.max(et,1e-6);G.joy={x:N*wt,y:J*wt},Bt.firstChild.style.transform=`translate(${G.joy.x*_t}px,${G.joy.y*_t}px)`;return}if(Wi.has(g.pointerId)&&Wi.set(g.pointerId,{x:g.clientX,y:g.clientY}),Yn&&Wi.size>=2){let[N,J]=[...Wi.values()];G.distT=Ii(Yn.dist*Yn.d/Math.max(20,Math.hypot(N.x-J.x,N.y-J.y)),7,40),G.yawT=Yn.yaw-(Math.atan2(J.y-N.y,J.x-N.x)-Yn.ang);return}if(!Pn||Pn.id!==g.pointerId)return;let M=g.clientX-Pn.x,T=g.clientY-Pn.y;!Pn.moved&&Math.hypot(M,T)>8&&(Pn.moved=1),Pn.moved&&(G.yawT=Pn.yaw0-M*.007,G.pitchT=Ii(Pn.pit0+T*.005,.22,1.3))});let Pa=g=>{if(Xi&&g.pointerId===Xi.id){Xi=null,G.joy=null,Vt();return}Wi.delete(g.pointerId),Wi.size<2&&(Yn=null),!(!Pn||Pn.id!==g.pointerId)&&(Pn.moved||js(g.clientX,g.clientY),Pn=null)};t.addEventListener("pointerup",Pa),t.addEventListener("pointercancel",Pa),t.addEventListener("wheel",g=>{g.preventDefault(),G.distT=Ii(G.distT+Math.sign(g.deltaY)*1.6,7,40)},{passive:!1});let Wo=g=>{if(!document.contains(t)||/input|textarea/i.test(g.target&&g.target.tagName||""))return;let M=g.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(M)&&(G.keys[M]=1,/^[qe]$/.test(M)||(G.tgt=null),g.preventDefault())},Ks=g=>{delete G.keys[g.key.toLowerCase()]};document.addEventListener("keydown",Wo),document.addEventListener("keyup",Ks);function Xo(g,M){let T=null,N=1e9;for(let J of Nn){let et=Is(new z(J.x,0,J.z)),_t=Is(new z(J.x,J.h+.2,J.z)),wt=et.y-_t.y;if(wt<6)continue;let Pt=Math.max(wt*.38,26),gt=Math.abs(g-et.x);if(gt<Pt&&M>_t.y-10&&M<et.y+10){let He=gt;He<N&&(N=He,T=J)}}return T}function js(g,M){if(G.mode==="edit"||G.ent)return;let T=Xo(g,M);if(T){let J=Math.hypot(T.x-st.x,T.z-st.z);pn(T),J>3&&ni(T.x+(st.x-T.x)/J*1.4,T.z+(st.z-T.z)/J*1.4);return}xs.setFromCamera(qn(g,M),f);let N=xs.intersectObjects(l.children,!0).filter(J=>J.object.isMesh&&(J.object.userData.house||J.object.userData.shop));if(N.length){let J=N[0].object.userData;if(J.house||J.shop){let et=An.find(_t=>_t.h===J.house&&J.house||_t.s===J.shop&&J.shop);Se(),et&&ni(et.face.x,et.face.z-et.inw*.8);return}if(J.house){let et=J.house;et.own?(Di(s?"\u6211\u7684\u5BB6":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),ni(et.door.x,et.door.z)):(Di(et.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),ni(et.door.x,et.door.z));return}if(J.shop){let et=J.shop;if(et.k==="izakaya"){Di(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),ni(et.door.x,et.door.z);return}Di(et.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),ni(et.door.x,et.door.z);return}}if(Se(),G.pt!=="touch"&&xs.ray.intersectPlane(mn,Cs)){let J=ps(st.x,st.z,Cs.x,Cs.z);J&&(G.tgt={path:J})}}let wr=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],qo=new we,ql=new we,Qs=new we;function Yl(g){let M=0;for(;M<wr.length-2&&g>=wr[M+1][0];)M++;let T=wr[M],N=wr[M+1],J=Ii((g-T[0])/(N[0]-T[0]),0,1),et=_t=>qo.set(T[_t]).clone().lerp(ql.set(N[_t]),J);return{zen:et(1),hor:et(2),sunC:et(3),sunI:Ta(T[4],N[4],J),hemiI:Ta(T[5],N[5],J),fog:et(6),night:Ta(T[7],N[7],J)}}let Ps=-1;function qr(g){let M=Yl(g),T=L.attributes.position;for(let wt=0;wt<T.count;wt++){let Pt=T.getY(wt)/300;Qs.copy(M.hor).lerp(M.zen,Ii((Pt+.05)/.55,0,1));let gt=L.attributes.color.array;gt[wt*3]=Qs.r,gt[wt*3+1]=Qs.g,gt[wt*3+2]=Qs.b}L.attributes.color.needsUpdate=!0,h.color.copy(M.fog),a.setClearColor(M.fog),kt.color.copy(M.sunC),kt.intensity=M.sunI,Nt.intensity=M.hemiI,Zt.intensity=.2+M.night*.15,Nt.color.set(M.night>.5?"#8a9aff":"#dff2ff");let N=(g-6)/12*Math.PI,J=Math.sin(N);lt.position.set(Math.cos(N)*260,Math.max(-40,J*220),-60),lt.material.opacity=Ii(J*3,0,1);let et=((g+6)%24-6)/12*Math.PI;ot.position.set(-Math.cos(N)*240,Math.max(30,Math.abs(Math.sin(et))*200),-80),ot.material.opacity=M.night,Rt.userData.m.opacity=M.night*.9;let _t=M.night;q.forEach(wt=>{wt.material.opacity=_t*(wt.userData.k||.75)}),V.forEach(wt=>wt.color.copy(wt.userData.day).lerp(wt.userData.night,_t)),yt.color.set("#ffffff").lerp(Qs.set("#3a4a8a"),_t*.6),ct.children.forEach(wt=>wt.children.forEach(Pt=>Pt.material.color.set("#ffffff").lerp(Qs.set("#4a4a7a"),_t*.8))),G.night=_t}let $l={get dead(){return G.dead},set dead(g){g&&Ui()},dispose:Ui,kind:"island",probe(){let g=M=>{let T=Is(M);return{x:Math.round(T.x),y:Math.round(T.y)}};return{mode:G.mode,me:{x:+st.x.toFixed(2),z:+st.z.toFixed(2)},calls:a.info.render.calls,tris:a.info.render.triangles,yaw:+G.yaw.toFixed(2),pitch:+G.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(G.night||0).toFixed(2),card:Z.classList.contains("on")?Z.textContent:"",door:oe.classList.contains("on")?oe.textContent:"",doorXY:oe.classList.contains("on")?(()=>{let M=oe.getBoundingClientRect();return{x:Math.round(M.left+M.width/2),y:Math.round(M.top+M.height/2)}})():null,ent:!!G.ent,myDoor:g(new z(dt.door.x,1.2,dt.door.z-2.8*(dt.f===2?-1:1))),myHouse:g(new z(dt.x,2,dt.z)),npcs:Nn.map(M=>Object.assign({id:M.d.id,state:M.state},g(new z(M.x,M.h*.5,M.z))))}},px(g,M,T){let N=Is(new z(g,M,T));return{x:Math.round(N.x),y:Math.round(N.y)}},teleport(g,M){st.x=g,st.z=M,G.cam.set(g,1,M)},setYaw(g){G.yaw=G.yawT=g},setPitch(g){G.pitch=G.pitchT=g},setDist(g){G.dist=G.distT=g},setHour(g){ze[0][0]=g,Ps=-1}};function Ui(){if(!G.dead){if(G.dead=!0,cancelAnimationFrame(G.raf),clearTimeout(On),s)try{i.save&&i.save(r,!0)}catch{}document.removeEventListener("keydown",Wo),document.removeEventListener("keyup",Ks),e.removeEventListener("click",ti),window.removeEventListener("resize",Vt),Xr.forEach(g=>g.remove()),l.traverse(g=>{g.geometry&&g.geometry.dispose(),(g.material?Array.isArray(g.material)?g.material:[g.material]:[]).forEach(T=>{T.map&&T.map.dispose(),T.dispose()})});try{a.dispose(),a.forceContextLoss()}catch{}}}let Qe=0,qi=0,Yi=0,$i=1,tr=1,Sr=0,Yr=0,er=new z,Ni=new z,ys=new z;function $r(){let g=t.getBoundingClientRect(),M=Math.max(1,t.clientWidth),T=Math.max(1,t.clientHeight),N=Math.min(2,window.devicePixelRatio||1),J=Math.round(Ii(1.75-((g.height||T)-380)/440*.6,1.15,1.75)*20)/20;J!==We&&(We=J,ee.forEach(et=>{et.h=et.h0*We,et.w=et.h*et.ar})),!(M===Qe&&T===qi&&N===Yi)&&(Qe=M,qi=T,Yi=N,$i=Ii(g.width*N/M,.5,2),$i=Math.min($i,Math.sqrt(22e5/(M*T))),tr=Math.max(Math.min($i,.9),$i*.8),a.setPixelRatio($i),a.setSize(M,T,!1),f.aspect=M/T,f.updateProjectionMatrix())}function Yo(g){if(G.dead)return;if(!document.contains(t)){Ui();return}G.raf=requestAnimationFrame(Yo);let M=Math.min(.1,(g-G.last)/1e3);G.last=g,G.t+=M;let T=G.t;if($r(),Sr+=M,Yr++,Sr>1.5){let pt=Sr/Yr>.03;pt&&a.shadowMap.enabled?(a.shadowMap.enabled=!1,l.traverse(Le=>{Le.material&&(Array.isArray(Le.material)?Le.material:[Le.material]).forEach(ft=>{ft.needsUpdate=!0})})):pt&&$i>tr+.01&&($i=Math.max(tr,$i*.9),a.setPixelRatio($i),a.setSize(Qe,qi,!1)),Sr=0,Yr=0}let N=rn();Math.abs(N-Ps)>.02&&(qr(N),Ps=N,$e());let J=G.keys;J.q&&(G.yawT+=M*1.8),J.e&&(G.yawT-=M*1.8),G.yaw+=(G.yawT-G.yaw)*Math.min(1,M*9),G.pitch+=(G.pitchT-G.pitch)*Math.min(1,M*9),G.dist+=(G.distT-G.dist)*Math.min(1,M*6);let et=Math.sin(G.yaw),_t=Math.cos(G.yaw);if(er.set(-et,0,-_t),Ni.set(_t,0,-et),st.moving=!1,G.mode==="walk"&&!G.ent){let pt=0,Le=0,ft=1e9,he=(J.arrowright||J.d?1:0)-(J.arrowleft||J.a?1:0),me=(J.arrowup||J.w?1:0)-(J.arrowdown||J.s?1:0);if(G.joy&&Math.hypot(G.joy.x,G.joy.y)>.15)pt=Ni.x*G.joy.x-er.x*G.joy.y,Le=Ni.z*G.joy.x-er.z*G.joy.y,ft=5*M*Math.min(1,Math.hypot(G.joy.x,G.joy.y));else if(he||me)pt=Ni.x*he+er.x*me,Le=Ni.z*he+er.z*me;else if(G.tgt){let an=G.tgt.path[0];if(an){let ln=an[0]-st.x,_e=an[1]-st.z,tn=Math.hypot(ln,_e);tn<.1?G.tgt.path.shift():(pt=ln,Le=_e,ft=tn)}else{let ln=G.tgt.fn;G.tgt=null,ln&&ln()}}let Ne=Math.hypot(pt,Le);if(Ne>.01){let an=Math.min(5*M,ft),ln=pt/Ne*an,_e=Le/Ne*an,tn=!1;if(!qe(st.x+ln,st.z+_e,.3))st.x+=ln,st.z+=_e,tn=!0;else if(!qe(st.x+ln,st.z,.3))st.x+=ln,tn=!0;else if(!qe(st.x,st.z+_e,.3))st.z+=_e,tn=!0;else for(let on of[.6,-.6,1.2,-1.2]){let $n=Math.cos(on),si=Math.sin(on),ri=(ln*$n-_e*si)*.8,oi=(ln*si+_e*$n)*.8;if(!qe(st.x+ri,st.z+oi,.3)){st.x+=ri,st.z+=oi,tn=!0;break}}if(tn){G.mvz=_e/Math.max(1e-6,Math.hypot(ln,_e)),st.moving=!0,st.ph+=M*10;let on=pt/Ne*Ni.x+Le/Ne*Ni.z;Math.abs(on)>.2&&(st.face=on>0?1:-1)}else if(G.tgt&&(G.tgt.stuck=(G.tgt.stuck||0)+M,G.tgt.stuck>.5)){let on=G.tgt.fn;G.tgt=null,on&&on()}G.talk&&Math.hypot(G.talk.x-st.x,G.talk.z-st.z)>9&&Se()}}if(wn=null,G.mode==="walk"&&!G.ent){let pt=2.6;for(let Le of An){let ft=Math.hypot(st.x-Le.face.x,st.z-Le.face.z);ft<pt&&(pt=ft,wn=Le)}wn&&(wn.kind==="home"||wn.kind==="shop")&&pt<.8&&st.moving&&(G.mvz||0)*wn.inw>.5&&ei(wn)}if(wn&&!G.ent){let pt=wn,Le=Is(new z(pt.face.x,pt.s?3.1:2.95,pt.face.z+pt.inw*.5)),ft=Ei();oe.textContent=pt.label,oe.classList.toggle("off",pt.kind==="npc"||pt.kind==="closed"),oe.style.left=Le.x-ft.left+"px",oe.style.top=Le.y-ft.top+"px",oe.classList.add("on")}else oe.classList.remove("on");if(G.ent){let pt=G.ent,Le=pt.d;pt.t+=M,Le.pivot&&(Le.pivot.rotation.y=Math.min(1,pt.t/.45)*1.6);let ft=Ii((pt.t-.2)/.75,0,1),he=Le.face.x,me=Le.face.z+Le.inw*1.1;st.x=Ta(pt.x0,he,ft),st.z=Ta(pt.z0,me,ft),st.moving=ft>0&&ft<1,st.moving&&(st.ph+=M*10),st.mat.opacity=1-Ii((pt.t-.55)/.45,0,1),st.tag&&(st.tag.material.opacity=st.mat.opacity),pt.t>1.05&&!pt.done&&(pt.done=1,gs(Le.kind))}G.closing&&(G.closing.rotation.y=Math.max(0,G.closing.rotation.y-M*2.4),G.closing.rotation.y<=0&&(G.closing=null)),st.y=0;for(let pt of qt)if(+(pt.own?r.ex:pt.ex).porch&&Math.abs(st.x-pt.x)<vt/2+.3){let Le=(st.z-pt.z)*(pt.f===2?-1:1);Le>1.42&&Le<3.15&&(st.y=.3)}for(let pt of Nn){if(pt.moving=!1,pt.state==="talk"){pt.face=(st.x-pt.x)*Ni.x+(st.z-pt.z)*Ni.z>0?1:-1;continue}if(pt.state==="idle"){pt.t-=M,pt.t<=0&&ms(pt);continue}let Le=pt.tx-pt.x,ft=pt.tz-pt.z,he=Math.hypot(Le,ft);if(he<.1){pt.state="idle",pt.t=Math.random()<.3?vr(3,8):vr(.2,1);continue}let me=Math.min(he,pt.sp*M);pt.x+=Le/he*me,pt.z+=ft/he*me,pt.moving=!0,pt.ph+=M*(4+pt.sp*3);let Ne=Le*Ni.x+ft*Ni.z;Math.abs(Ne)>.05&&(pt.face=Ne>0?1:-1)}let wt=st.x,Pt=st.z;G.mode==="edit"&&(wt=dt.x,Pt=dt.z+(dt.f===2?-1:1)*3.2),G.cam.x+=(wt-G.cam.x)*Math.min(1,M*8),G.cam.z+=(Pt-G.cam.z)*Math.min(1,M*8),G.cam.y+=((G.mode==="edit"?1.8:1.1)-G.cam.y)*Math.min(1,M*4);let gt=Qe/qi,He=G.dist*(gt<1.4?1.4/gt:1);ys.set(G.cam.x+et*Math.cos(G.pitch)*He,G.cam.y+Math.sin(G.pitch)*He,G.cam.z+_t*Math.cos(G.pitch)*He),ys.y<.8&&(ys.y=.8),f.position.copy(ys),f.lookAt(G.cam.x,G.cam.y+.4,G.cam.z),H.position.copy(ys),kt.position.set(G.cam.x+30,60,G.cam.z+22),kt.target.position.set(G.cam.x,0,G.cam.z),G.night>.6&&kt.position.set(G.cam.x-25,50,G.cam.z+30);let gn=Math.atan2(ys.x-G.cam.x,ys.z-G.cam.z);for(let pt of ee){let Le=pt.w,ft=pt.h,he=pt.moving,me=Math.sin(pt.ph),Ne=he?Math.abs(me)*.06:0,an=he?me*.06:Math.sin(T*1.6+pt.ph)*.01,ln=he?1+Math.cos(pt.ph*2)*.025:1+Math.sin(T*1.6+pt.ph)*.008;pt.grp.position.set(pt.x,(pt.y||0)+Ne,pt.z),pt.m.rotation.set(0,gn,an*pt.face),pt.m.scale.set(Le*pt.face*(2-ln),ft*ln,1),pt.sh.position.set(pt.x,(pt.y||0)+.07,pt.z),pt.sh.scale.set(Le*.7,Le*.4,1),pt.tag&&pt.tag.position.set(pt.x,(pt.y||0)+ft+.35,pt.z),pt.bub&&(pt.bub.visible=pt!==G.talk,pt.bub.position.set(pt.x,ft+.5+Math.sin(T*2.3+pt.ph)*.06,pt.z))}Ie.offset.set(T*.004,T*.006),Tt.forEach((pt,Le)=>{Le===0?pt.rotation.z=T*.3:pt.scale.y=1+Math.sin(T*6)*.08}),ct.children.forEach(pt=>{pt.userData.a+=M*.004,pt.position.x=Math.cos(pt.userData.a)*pt.userData.R,pt.position.z=Math.sin(pt.userData.a)*pt.userData.R,pt.lookAt(0,pt.position.y,0)});let ii=ct.userData.boat;ii&&(ii.position.y=-.2+Math.sin(T*1.2)*.08,ii.rotation.z=Math.sin(T*.9)*.04),a.render(l,f)}return G.raf=requestAnimationFrame(Yo),$l}var gi=(n,t)=>n+Math.random()*(t-n),Qi=(n,t,e)=>Math.max(t,Math.min(e,n));var fs=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},xn=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Pf=new Uint8Array(256).map((n,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),$s=n=>"\xA5"+Math.round(n).toLocaleString("en-US"),Ia=[[10,8,0],[12,9,5e4],[14,10,15e4],[16,12,4e5]],Wn=3.1,fe=10,Mt=8,Mi=4,wi=6,Si=5,us,ds,Df,Uf,Nf,Bd,Wl,jn,Xl,Ca;function Vd(n){let t=Ia[Qi(n|0,0,Ia.length-1)];fe=t[0],Mt=t[1],Mi=fe/2-1,wi=fe/2+1,Si=fe/2,us=-10,ds=fe+10,Df=Mt+9,Uf=-4,Nf=fe+4,Bd=Mt+1,Wl=Mt+4,jn={x:Si+2.3,z:Mt+1.4},Xl=Math.floor(jn.x),Ca=new Set;for(let e=Mt;e<Wl+1;e++)for(let i=Mi;i<wi;i++)Ca.add(i+","+e);Ca.add(Xl+","+(Mt+1))}Vd(0);var Of=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function Ra(n){let t=0,e={};for(let[i]of n.it||[]){let s=Ae[i];s&&(e[i]=(e[i]||0)+1,t+=e[i]<=2?s.c:s.c*.4)}return n.fl&&n.fl!=="wood"&&(t+=6),n.wa&&n.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function zf(n){let t=0;return Of.forEach((e,i)=>{n>=e[0]&&(t=i)}),t}var Ff=n=>Math.min(8e4,3e3+n*400);function Hd(n){return{v:1,name:n||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function L1(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function D1(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var Lf={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},U1=["daruma","maneki","beer","vase","pine","sake"],Gd=`
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
`,N1=Gd;function z1(n){Vd(n.data&&n.data.sz);let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.kind==="home",o=!!n.island,a=n.data||Hd();if(a.it=(a.it||[]).filter(c=>Ae[c[0]]),a.inv=a.inv||{},a.fo=a.fo||{wood:1},a.wo=a.wo||{tsuchi:1},a.gc=a.gc||{},!document.getElementById("h3css")){let c=document.createElement("style");c.id="h3css",c.textContent=Gd,document.head.appendChild(c)}let l=new Ro({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});l.setClearColor(1709366,1);let h=new Fr;h.fog=new Co(3811400,26,80);let f=new Bn(40,2,.2,500),u=new Uo,p=(c,x)=>u.load(c,b=>{b.colorSpace=kn,b.anisotropy=4,x&&x(b)}),d=new fi(250,24,16);{let c=[],x=d.attributes.position,b=new we("#121032"),_=new we("#7a4058"),C=new we("#3a2350"),D=new we;for(let X=0;X<x.count;X++){let K=x.getY(X)/250;K>.25?D.copy(C).lerp(b,Qi((K-.25)/.55,0,1)):D.copy(_).lerp(C,Qi((K+.05)/.3,0,1)),c.push(D.r,D.g,D.b)}d.setAttribute("color",new Pe(c,3))}let v=new ht(d,new Ve({vertexColors:!0,side:Jn,fog:!1,depthWrite:!1}));v.renderOrder=-10,h.add(v);{let c=[],x=fs(11);for(let _=0;_<300;_++){let C=x()*Math.PI*2,D=.2+x()*1.2,X=230;c.push(Math.cos(C)*Math.cos(D)*X,Math.sin(D)*X,Math.sin(C)*Math.cos(D)*X)}let b=new bn;b.setAttribute("position",new Pe(c,3)),v.add(new ma(b,new Io({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let c=xe(128,128,b=>{let _=b.createRadialGradient(64,64,20,64,64,64);_.addColorStop(0,"rgba(255,246,214,1)"),_.addColorStop(.5,"rgba(255,240,200,1)"),_.addColorStop(.52,"rgba(255,230,180,.25)"),_.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=_,b.fillRect(0,0,128,128)}),x=new ci(new Kn({map:c,fog:!1,depthWrite:!1}));x.scale.set(40,40,1),x.position.set(-90,120,-170),v.add(x)}let E=new Vr(12103408,5914696,1.15);h.add(E);let y=(()=>{let c=new Date;return n.hour!=null?n.hour:c.getHours()+c.getMinutes()/60})(),m=y<5||y>=19.5?1:y<6.5?(6.5-y)/1.5:y>17.5?(y-17.5)/2:0,S=new Hr(16769208,.7);S.position.set(-6,12,10),h.add(S);let I=new zo(16756832,14,13,1.3);I.position.set(fe*.3,2.7,Mt*.45),h.add(I);let w=new zo(16756832,14,13,1.3);w.position.set(fe*.72,2.7,Mt*.55),h.add(w);let q=new zo(16752720,10,9,1.4);q.position.set(Si,2.4,Mt+1.4),h.add(q);let F=xe(64,64,c=>{let x=c.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(0,0,0,.7)"),x.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=x,c.fillRect(0,0,64,64)}),V=(c,x,b)=>{let _=c.clone();return _.wrapS=_.wrapT=Gs,_.repeat.set(x,b),_.needsUpdate=!0,_};function B(c,x,b,_,C,D,X,K){let j=new ht(new fn(c,x,b),_);return j.position.set(C,D,X),(K||h).add(j),j}function L(c,x,b,_,C,D,X){let K=new ci(new Kn({map:Wr,blending:ws,transparent:!0,depthWrite:!1,opacity:C}));return X&&K.material.color.set(X),K.scale.set(_,_,1),K.position.set(c,x,b),(D||h).add(K),K}let R={wood:()=>xe(256,256,(c,x,b)=>{let _=fs(4);for(let C=0;C<8;C++){let D=_();c.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,c.fillRect(0,C*32,x,32),c.fillStyle="rgba(60,30,10,.35)",c.fillRect(0,C*32,x,2),c.fillRect(_()*256|0,C*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(90,50,20,.12)",c.fillRect(_()*x,C*32+6+_()*20,40+_()*60,2)}}),dark:()=>xe(256,256,(c,x,b)=>{let _=fs(8);for(let C=0;C<8;C++){let D=_();c.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,c.fillRect(0,C*32,x,32),c.fillStyle="rgba(0,0,0,.4)",c.fillRect(0,C*32,x,2),c.fillRect(_()*256|0,C*32,2,32);for(let X=0;X<5;X++)c.fillStyle="rgba(255,220,180,.05)",c.fillRect(_()*x,C*32+6+_()*20,40+_()*60,2)}}),tatami:()=>xe(256,256,(c,x,b)=>{for(let _=0;_<2;_++){let C=_*128;c.fillStyle="#c4c078",c.fillRect(C,0,128,b);for(let D=0;D<b;D+=3)c.fillStyle=D%6?"#b8b46c":"#cfcb84",c.fillRect(C,D,128,1);c.fillStyle="#2a3a2a",c.fillRect(C,0,6,b),c.fillRect(C+122,0,6,b)}}),stone:()=>xe(256,256,(c,x,b)=>{c.fillStyle="#5a5250",c.fillRect(0,0,x,b);let _=fs(6);for(let C=0;C<4;C++)for(let D=0;D<4;D++){let X=_()*18|0;c.fillStyle=`rgb(${120+X},${112+X},${104+X})`,c.fillRect(D*64+3+C%2*8,C*64+3,58,58)}}),light:()=>xe(256,256,(c,x,b)=>{let _=fs(12);for(let C=0;C<8;C++){let D=_();c.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,c.fillRect(0,C*32,x,32),c.fillStyle="rgba(120,80,40,.25)",c.fillRect(0,C*32,x,2),c.fillRect(_()*256|0,C*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(160,110,60,.1)",c.fillRect(_()*x,C*32+6+_()*20,40+_()*60,2)}}),carpetf:()=>xe(256,256,(c,x,b)=>{c.fillStyle="#e8dcc4",c.fillRect(0,0,x,b);let _=fs(14);for(let C=0;C<3e3;C++)c.fillStyle=_()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",c.fillRect(_()*x,_()*b,2,2)}),check:()=>xe(256,256,(c,x,b)=>{for(let _=0;_<4;_++)for(let C=0;C<4;C++)c.fillStyle=(C+_)%2?"#2a3a36":"#d8c8a0",c.fillRect(C*64,_*64,64,64);c.strokeStyle="rgba(0,0,0,.2)",c.lineWidth=2;for(let _=0;_<=4;_++)c.beginPath(),c.moveTo(_*64,0),c.lineTo(_*64,b),c.moveTo(0,_*64),c.lineTo(x,_*64),c.stroke()})};function H(c,x){let _=Math.round(x*64),C=Math.round(Wn*64);return xe(_,C,D=>{let X=fs(x*7|0);if(c==="plank")for(let j=0;j<_;j+=22){let Et=X();D.fillStyle=`hsl(28,${36+Et*8}%,${40+Et*8}%)`,D.fillRect(j,0,22,C),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(j,0,2,C)}else if(c==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,_,C);for(let j=0;j<300;j++)D.fillStyle=X()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect(X()*_,X()*C,8,8);D.fillStyle="#5a2a14";for(let j=0;j<_;j+=128)D.fillRect(j,0,8,C)}else if(c==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,_,C),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let j=0;j<C;j+=24)for(let Et=j/24%2*12;Et<_;Et+=24)D.beginPath(),D.arc(Et,j,9,Math.PI,0),D.stroke()}else if(c==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,_,C);for(let j=0;j<_*C/900;j++){let Et=X()*_,Ue=X()*C;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][j%3];for(let ve=0;ve<5;ve++){let ne=ve/5*Math.PI*2;D.beginPath(),D.ellipse(Et+Math.cos(ne)*4,Ue+Math.sin(ne)*4,3.5,2,ne,0,7),D.fill()}}}else if(c==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,_,C);for(let j=0;j<_*C/80;j++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect(X()*_,X()*C,2,2)}else if(c==="stripe")for(let j=0;j<_;j+=24)D.fillStyle=j/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(j,0,24,C);else if(c==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,_,C);for(let j=12;j<C;j+=30)for(let Et=j/30%2*16;Et<_;Et+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(Et+j)%3];for(let Ue=0;Ue<5;Ue++){let ve=Ue/5*Math.PI*2;D.beginPath(),D.arc(Et+Math.cos(ve)*4,j+Math.sin(ve)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(Et,j,2,0,7),D.fill()}}else if(c==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,_,C);for(let j=0;j<_*C/70;j++)D.fillStyle=X()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect(X()*_,X()*C,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,_,C);for(let j=0;j<_*C/60;j++)D.fillStyle=X()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect(X()*_,X()*C,3,3);D.fillStyle="#6b3f1f";for(let j=0;j<_;j+=64*2.5)D.fillRect(j,0,10,C)}let K=C-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,K,_,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let j=0;j<_;j+=28)D.fillRect(j,K,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,K-6,_,8),D.fillRect(0,0,_,10)})}let rt=h.children.length,tt=xe(256,256,(c,x,b)=>{c.fillStyle="#4a4246",c.fillRect(0,0,x,b);let _=fs(3);for(let C=0;C<4;C++)for(let D=0;D<4;D++){let X=(_()*16|0)-8;c.fillStyle=`rgb(${96+X},${86+X},${84+X})`,c.fillRect(D*64+2,C*64+2,60,60)}}),lt=xe(256,256,(c,x,b)=>{c.fillStyle="#2c2830",c.fillRect(0,0,x,b);let _=fs(5);for(let C=0;C<700;C++){let D=34+(_()*22|0);c.fillStyle=`rgb(${D},${D-3},${D+4})`,c.fillRect(_()*x,_()*b,2,2)}});{let c=new ht(new Ge(600,600),Gt("#1c1826"));c.rotation.x=-Math.PI/2,c.position.y=-.04,h.add(c)}{let c=ds-us+30,x=(us+ds)/2,b=new ht(new Ge(c,6.2),Gt("#ffffff",{map:V(tt,c/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(x,.005,Mt+3.1),h.add(b);let _=new ht(new Ge(c,6),Gt("#ffffff",{map:V(lt,c/6,1)}));_.rotation.x=-Math.PI/2,_.position.set(x,0,Mt+9.2),h.add(_);for(let D=us-14;D<ds+14;D+=3.4)B(1.7,.02,.14,sn("#cfc8b4"),D,.02,Mt+9.2);B(c,.16,.2,Gt("#7a6e66"),x,.08,Mt+6.15);let C=new ht(new Ge(c,5),Gt("#ffffff",{map:V(tt,c/3,5/3)}));C.rotation.x=-Math.PI/2,C.position.set(x,.005,Mt+14.7),h.add(C)}let St=h.children.length,ot=new nn({color:"#ffffff"}),Rt=new ht(new Ge(fe,Mt),ot);Rt.rotation.x=-Math.PI/2,Rt.position.set(fe/2,.02,Mt/2),h.add(Rt);function ct(c){ot.map&&ot.map.dispose();let x=(R[c]||R.wood)();x.wrapS=x.wrapT=Gs,x.repeat.set(fe/2,Mt/2),ot.map=x,ot.needsUpdate=!0}B(fe+.4,.12,Mt+.4,Gt("#2a1810"),fe/2,-.075,Mt/2);let Nt={back:new nn,left:new nn,right:new nn,front:new nn},Zt=xe(256,200,(c,x,b)=>{c.fillStyle="#5a3a24",c.fillRect(0,0,x,b);for(let _=0;_<x;_+=16)c.fillStyle=_%32?"#4a2e1c":"#6a4630",c.fillRect(_,0,14,b);c.fillStyle="#2a1810",c.fillRect(0,b-40,x,40)}),kt=new nn({map:V(Zt,3,1)}),ie=Gt("#3a2214"),Ie={};function yt(c,x,b,_,C,D){let X=new ye;X.position.set(_,0,C),h.add(X);let K=new ht(new fn(x,Wn,b),D);return K.position.y=Wn/2,X.add(K),Ie[c]=Ie[c]||[],Ie[c].push(X),X}yt("back",fe+.4,.2,fe/2,-.1,[ie,ie,ie,ie,Nt.back,kt]),yt("left",.2,Mt,-.1,Mt/2,[Nt.left,kt,ie,ie,ie,ie]),yt("right",.2,Mt,fe+.1,Mt/2,[kt,Nt.right,ie,ie,ie,ie]);let Lt=xe(640,200,(c,x,b)=>{c.fillStyle="#6a4228",c.fillRect(0,0,x,b);for(let C=0;C<x;C+=14)c.fillStyle=C%28?"#5a3620":"#74482c",c.fillRect(C,0,12,b);let _=C=>{c.fillStyle="#ffd98a",c.fillRect(C,56,128,70),c.strokeStyle="#2a1408",c.lineWidth=6,c.strokeRect(C,56,128,70),c.lineWidth=3;for(let D=1;D<4;D++)c.beginPath(),c.moveTo(C+D*32,56),c.lineTo(C+D*32,126),c.stroke();c.beginPath(),c.moveTo(C,91),c.lineTo(C+128,91),c.stroke()};_(64),_(448),c.fillStyle="#2a1810",c.fillRect(0,b-40,x,40)}),se=new Ve({map:Lt}),Ft=(c,x)=>{let b=new Ve({map:Lt.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(x-c,1),b.map.offset.set(c,0),b};yt("front",Mi+.2,.2,(Mi-.2)/2,Mt+.1,[ie,ie,ie,ie,Ft(0,(Mi+.2)/(fe+.4)),Nt.front]),yt("front",fe-wi+.2,.2,(wi+fe+.2)/2,Mt+.1,[ie,ie,ie,ie,Ft((wi+.2)/(fe+.4),1),Nt.front]);{let c=new ye;c.position.set(Si,0,Mt+.1),h.add(c),B(wi-Mi,Wn-2.35,.2,Gt("#4a2a14"),0,2.35+(Wn-2.35)/2,0,c),Ie.front.push(c)}function de(c){let x={back:fe+.4,left:Mt,right:Mt,front:fe+.4};for(let b in Nt){let _=Nt[b];_.map&&_.map.dispose(),_.map=H(c,x[b]),_.needsUpdate=!0}}let ue=new ye;h.add(ue),Ie.front.push(ue);let le=Gt("#3a2214");B(.22,2.45,.34,le,Mi+.05,1.22,Mt+.14,ue),B(.22,2.45,.34,le,wi-.05,1.22,Mt+.14,ue),B(wi-Mi+.4,.24,.38,le,Si,2.42,Mt+.14,ue);let Oe=new ye;Oe.position.set(Si,2.32,Mt+.3),ue.add(Oe);let Tt=xe(256,140,(c,x,b)=>{for(let _=0;_<3;_++){let C=4+_*84;c.fillStyle="#23315c",c.fillRect(C,0,80,b-6),c.fillStyle="rgba(0,0,0,.22)",c.fillRect(C,b-16,80,10)}c.fillStyle="#f3e6c8",c.textAlign="center",c.textBaseline="middle",c.font=`900 50px ${Ln}`,["\u55B6","\u696D","\u4E2D"].forEach((_,C)=>c.fillText(_,44+C*84,56))}),Ut=new ht(new Ge(1.95,1.05),new Ve({map:Tt,transparent:!0,side:Rn,alphaTest:.05}));Ut.position.y=-.52,Oe.add(Ut);let O=document.createElement("canvas");O.width=640,O.height=140;let re=new Po(O);re.colorSpace=kn,re.anisotropy=4;function vt(){let c=O.getContext("2d"),x=640,b=140;c.clearRect(0,0,x,b),c.fillStyle="#f3e2bd",c.strokeStyle="#2a1810",c.lineWidth=10,yr(c,6,6,x-12,b-12,16),c.fill(),c.stroke(),c.fillStyle="#3a1e0c",c.textAlign="center",c.textBaseline="middle";let _=72,C=a.name||"";for(c.font=`900 ${_}px ${Ln}`;c.measureText(C).width>x-60&&_>24;)_-=2,c.font=`900 ${_}px ${Ln}`;c.fillText(C,x/2,b/2+4),re.needsUpdate=!0}vt();{let c=new ht(new fn(3.6,.76,.12),[le,le,le,le,new Ve({map:re}),le]);c.position.set(Si,2.86,Mt+.34),ue.add(c)}let zt=[];for(let c of[Mi-.45,wi+.45]){let x=new ye;x.position.set(c,1.95,Mt+.45),ue.add(x);let b=new ht(new fi(.28,16,12),sn("#e2452f"));b.scale.y=1.3,x.add(b),B(.26,.06,.26,sn("#2a1810"),0,.38,0,x),B(.26,.06,.26,sn("#2a1810"),0,-.38,0,x),zt.push(L(0,0,.12,2.3,.55,x))}let It=new ye;h.add(It);{let c=xe(128,128,(D,X,K)=>{D.fillStyle="#2c3044",D.fillRect(0,0,X,K);for(let j=0;j<K;j+=16){D.fillStyle="#3a4058",D.fillRect(0,j,X,3);for(let Et=j/16%2*16;Et<X;Et+=32)D.fillStyle="#20242f",D.fillRect(Et,j,2,16)}}),x=new nn({map:V(c,6,3)}),b=Math.hypot(Mt/2+.9,1.6);for(let D of[-1,1]){let X=new ht(new fn(fe+1.6,.14,b),x);X.position.set(fe/2,Wn+1.5,Mt/2+D*(Mt/4+.45)),X.rotation.x=D*Math.atan2(1.6,Mt/2+.9),It.add(X)}let _=new ht(new fn(fe+1.7,.2,.3),Gt("#1c1f2a"));_.position.set(fe/2,Wn+2.32,Mt/2),It.add(_);for(let D of[-.2,fe+.2]){let X=new bn;X.setAttribute("position",new Pe([D,Wn,-.2,D,Wn,Mt+.2,D,Wn+2.32,Mt/2,D,Wn,-.2,D,Wn+.7,-.9,D,Wn+2.32,Mt/2,D,Wn,Mt+.2,D,Wn+.7,Mt+.9,D,Wn+2.32,Mt/2],3)),X.computeVertexNormals(),It.add(new ht(X,new nn({color:"#4a2e1c",side:Rn})))}for(let D of[-.1,Mt+.1]){let X=new ht(new fn(fe+.4,1,.2),kt);X.position.set(fe/2,Wn+.5,D),It.add(X)}let C=new ht(new fn(fe+1.4,.18,1.3),Gt("#2c3044"));C.position.set(fe/2,Wn+.72,Mt+.75),C.rotation.x=.25,It.add(C)}let be=h.children.length,qt=[21,33].map(c=>xe(128,256,(x,b,_)=>{let C=fs(c);x.fillStyle="#1b1636",x.fillRect(0,0,b,_);for(let D=0;D<16;D++)for(let X=0;X<8;X++)x.fillStyle=C()<.33?C()<.5?"#ffd98a":"#ffbe68":"#272043",x.fillRect(X*16+3,D*16+3,10,10)})),U=[];function A(c,x,b,_,C,D){let X=x-c,K=(c+x)/2,j=new ye;j.position.set(K,0,0),h.add(j),U.push(j),B(X-.2,b,Mt+1,Gt(_),0,b/2,Mt/2-.4,j);let Et=xe(Math.round(X*40),Math.round(b*40),(ne,ke,Tn)=>{ne.fillStyle=_,ne.fillRect(0,0,ke,Tn);for(let xi=0;xi<ke;xi+=12)ne.fillStyle="rgba(0,0,0,.12)",ne.fillRect(xi,0,2,Tn);ne.fillStyle="#ffcf7a",ne.fillRect(ke*.18,Tn-2.2*40,ke*.64,1.6*40),ne.strokeStyle="#2a1408",ne.lineWidth=4,ne.strokeRect(ke*.18,Tn-2.2*40,ke*.64,1.6*40);for(let xi=1;xi<4;xi++)ne.beginPath(),ne.moveTo(ke*.18+ke*.16*xi,Tn-2.2*40),ne.lineTo(ke*.18+ke*.16*xi,Tn-.6*40),ne.stroke();b>4&&(ne.fillStyle="#ffd98a",ne.fillRect(ke*.25,20,ke*.2,40),ne.fillRect(ke*.55,20,ke*.2,40))}),Ue=new ht(new Ge(X-.2,b),new Ve({map:Et}));Ue.position.set(0,b/2,Mt+.11),j.add(Ue);let ve=new ht(new fn(X+.2,.2,1.4),Gt("#2c3044"));if(ve.position.set(0,Math.min(b,3.1),Mt+.7),ve.rotation.x=.25,j.add(ve),C){let ne=xe(256,120,(Tn,xi,tc)=>{for(let $=0;$<3;$++)Tn.fillStyle=D,Tn.fillRect(4+$*84,0,80,tc-6);Tn.fillStyle="#f8ecd8",Tn.textAlign="center",Tn.textBaseline="middle",Tn.font=`900 46px ${Ln}`,[...C].forEach(($,ae)=>Tn.fillText($,44+ae*84,52))}),ke=new ht(new Ge(1.8,.85),new Ve({map:ne,transparent:!0,side:Rn}));ke.position.set(0,2.1,Mt+.5),j.add(ke)}L(0,1.2,Mt+.6,3.5,.35,j)}A(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),A(-13,-6.6,3.4,"#3a4a4a","",""),A(fe+.3,fe+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),A(fe+6.4,fe+13,5.4,"#3a3a5a","","");{let c=fs(17);for(let x=-40;x<60;x+=7+c()*5){let b=8+c()*18,_=6+c()*5,C=new ht(new fn(_,b,6),[sn("#1c1736"),sn("#1c1736"),sn("#18132e"),sn("#18132e"),sn("#ffffff",{map:V(qt[c()*2|0],_/5,b/6)}),sn("#1c1736")]);C.position.set(x,b/2,-12-c()*6),h.add(C)}for(let x=-40;x<60;x+=7+c()*6){let b=5+c()*10,_=5+c()*5,C=new ht(new fn(_,b,6),[sn("#1c1736"),sn("#1c1736"),sn("#18132e"),sn("#18132e"),sn("#ffffff",{map:V(qt[c()*2|0],_/5,b/6)}),sn("#1c1736")]);C.position.set(x,b/2,Mt+22+c()*4),C.rotation.y=Math.PI,h.add(C)}}let Q=[];function mt(c,x){let b=new ye;b.position.set(c,0,x),h.add(b),B(.3,.14,.3,Gt("#3a3030"),0,.07,0,b),B(.11,4,.11,Gt("#2b2422"),0,2,0,b),B(.7,.09,.09,Gt("#2b2422"),0,4,0,b);let _=B(.44,.44,.44,sn("#ffe2a6"),0,3.78,0,b);Q.push(L(0,3.78,0,4.5,.55,b));let C=new ht(new Ge(6,6),new Ve({map:Wr,blending:ws,transparent:!0,depthWrite:!1,opacity:.28}));C.rotation.x=-Math.PI/2,C.position.y=.03,b.add(C)}mt(-3.2,Mt+5.7),mt(fe+3.2,Mt+5.7),mt(-12,Mt+5.7),mt(fe+12,Mt+5.7);let dt=[];function xt(c,x,b){let _=new ye;_.position.set(c,0,x),_.scale.setScalar(b),h.add(_);let C=new ht(new bi(.16,.26,2.6,7),Gt("#4a3024"));C.position.y=1.3,_.add(C);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([X,K,j,Et],Ue)=>{let ve=new ht(new Es(Et,1),new nn({color:D[Ue%3],flatShading:!0}));ve.position.set(X,K,j),_.add(ve)}),dt.push({x:c,z:x,y:3.2*b,r:2*b})}xt(-6,Mt+16.5,1.1),xt(3,Mt+17,1),xt(13,Mt+16.6,1.15),xt(-14,Mt+3.5,.95),xt(fe+15,Mt+3.4,1);{let c=xe(64,128,(_,C,D)=>{_.fillStyle="#c23a2a",_.fillRect(0,0,C,D),_.fillStyle="#fff3d6",_.fillRect(6,8,52,50);let X=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let K=0;K<8;K++)_.fillStyle=X[K%4],_.fillRect(10+K%4*12,14+Math.floor(K/4)*20,9,14);_.fillStyle="#111",_.fillRect(10,90,44,12)}),x=new ye;x.position.set(-1.4,0,Mt+.6),h.add(x);let b=new ht(new fn(.95,1.9,.75),[Gt("#c23a2a"),Gt("#c23a2a"),Gt("#c23a2a"),Gt("#c23a2a"),sn("#ffffff",{map:c}),Gt("#c23a2a")]);b.position.y=.95,x.add(b),L(0,1.2,.7,2.2,.35,x)}{let c=new ye;c.position.set(fe+1.8,0,Mt+5.2),h.add(c),B(1.6,.1,.5,Gt("#8a5a30"),0,.5,0,c),B(1.6,.5,.08,Gt("#8a5a30"),0,.8,.22,c),B(.1,.5,.4,Gt("#2b2422"),-.7,.25,0,c),B(.1,.5,.4,Gt("#2b2422"),.7,.25,0,c)}let Wt=new ye;Wt.position.set(fe+1.5,.55,Mt+5.2),h.add(Wt);{let c="#e8a050",x=new ht(new fi(.22,14,10),Gt(c));x.scale.set(1.4,.7,1),Wt.add(x);let b=new ht(new fi(.13,12,10),Gt(c));b.position.set(.3,.05,0),Wt.add(b);for(let C of[-.06,.06]){let D=new ht(new hi(.05,.09,4),Gt(c));D.position.set(.32,.17,C),Wt.add(D)}let _=new ht(new bi(.035,.03,.4,6),Gt(c));_.rotation.z=1.2,_.position.set(-.34,.02,.08),Wt.add(_)}let Ot=new ye;Ot.position.set(jn.x,0,jn.z),h.add(Ot);{B(.1,1.5,.1,Gt("#4a2a14"),-.55,.75,0,Ot),B(.1,1.5,.1,Gt("#4a2a14"),.55,.75,0,Ot);let c=xe(256,160,(_,C,D)=>{_.fillStyle="#b8864a",_.fillRect(0,0,C,D),_.strokeStyle="#4a2a14",_.lineWidth=10,_.strokeRect(0,0,C,D);let X=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let K=0;K<5;K++){_.save(),_.translate(40+K%3*80,44+Math.floor(K/3)*70),_.rotate((K%2?-1:1)*.12),_.fillStyle=X[K%4],_.fillRect(-28,-22,56,44),_.fillStyle="#e2452f",_.beginPath(),_.arc(0,-18,4,0,7),_.fill(),_.fillStyle="#8a7a6a";for(let j=0;j<3;j++)_.fillRect(-20,-6+j*9,40-j*8,3);_.restore()}_.fillStyle="#3a1e0c",_.font=`900 26px ${Ln}`,_.textAlign="right",_.fillText("\u7559\u8A00\u677F",C-14,D-14)}),x=new ht(new fn(1.3,.85,.08),[le,le,le,le,new Ve({map:c}),le]);x.position.y=1.15,Ot.add(x);let b=new ht(new fn(1.5,.08,.35),Gt("#2c3044"));b.position.y=1.62,b.rotation.x=.2,Ot.add(b),Ot.traverse(_=>{_.isMesh&&(_.userData.board=1)})}let Yt=[];if(Ot.traverse(c=>{c.isMesh&&Yt.push(c)}),o){let c=h.children.length;h.children.slice(be,c).concat(h.children.slice(rt,St)).forEach(j=>h.remove(j)),Yt.length=0,dt.length=0;let x=new we("#8fd3f6"),b=new we("#16204a"),_=new we("#f0a890"),C=x.clone().lerp(y>15&&y<20?_:b,y>15&&y<20&&m<.5?Math.min(1,m*2):m).lerp(b,m>.5?(m-.5)*2:0);h.fog.color.copy(C),h.fog.near=30,h.fog.far=90,l.setClearColor(C,1),v.visible=!1,E.color.set(m>.5?"#9aa8ff":"#e8f4ff"),E.groundColor.set("#6a8a4a"),E.intensity=1.25+(1-m)*.6,S.intensity=.4+(1-m)*1,S.color.set(m>.5?"#a0b0ff":"#fff2dc");let D=new ht(new Ge(220,220),Gt(m>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,h.add(D);let X=new ht(new Ge(2.2,6),Gt("#d9d4cc"));X.rotation.x=-Math.PI/2,X.position.set(Si,-.01,Mt+3.2),h.add(X);let K=m>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[fe+4,1],[fe+5,6],[-3,Mt+5],[fe+3,Mt+6],[2,-4],[8,-5]].forEach(([j,Et],Ue)=>{let ve=new ye;ve.position.set(j,0,Et),h.add(ve);let ne=new ht(new bi(.2,.28,1.8,7),Gt("#8a5a3a"));ne.position.y=.9,ve.add(ne);let ke=new ht(new Es(1.4,1),new nn({color:Ue%3?K:m>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));ke.position.y=2.6,ve.add(ke)})}let Re=140,Ct=new Float32Array(Re*3),Jt=[],pe=xe(32,32,c=>{c.fillStyle="#f8c8d8",c.beginPath(),c.ellipse(16,16,12,7,.5,0,7),c.fill()}),ge=new ma(new bn,new Io({map:pe,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));ge.geometry.setAttribute("position",new Pe(Ct,3)),h.add(ge);function Kt(c,x){let b=dt.concat(De)[Math.floor(Math.random()*(dt.length+De.length))]||dt[0]||{x:-999,z:-999,y:0,r:.1};Ct[c*3]=b.x+gi(-b.r,b.r),Ct[c*3+1]=x?gi(0,b.y):b.y+gi(-.3,.3),Ct[c*3+2]=b.z+gi(-b.r,b.r),Jt[c]={vx:gi(-.2,.4),vy:gi(-.5,-.25),ph:Math.random()*7,fl:b.y}}let De=[],ee=[],We=[],Y=(c,x)=>c>=0&&c<fe&&x>=0&&x<Mt,Xt=(c,x)=>!o&&c>=Uf&&c<Nf&&x>=Bd&&x<Wl,ut=(c,x)=>x%2?[c.d,c.w]:[c.w,c.d];function bt(c){let x=Ae[c.k];if(x.L==="wall")return st(c);let[b,_]=ut(x,c.r),C=[];for(let D=0;D<b;D++)for(let X=0;X<_;X++)C.push([c.x+D,c.z+X]);return C}function st(c){let x=Ae[c.k],b=[];for(let _=0;_<x.w;_++)c.r===0?b.push(["b",c.x+_]):c.r===2?b.push(["f",c.x+_]):c.r===1?b.push(["l",c.z+_]):b.push(["r",c.z+_]);return b}function Ht(c){return c===0?"back":c===2?"front":c===1?"left":"right"}function Ce(c,x){let b=Ae[c.k];for(let[_,C]of st(c)){let D=_==="b"||_==="f"?fe:Mt;if(C<0||C>=D||_==="f"&&C>=Mi-0&&C<wi)return!1;_==="f"&&C>=Mi-1&&C<wi+1&&b.w>1}for(let _ of ee){if(_===x||Ae[_.k].L!=="wall")continue;let C=st(_);for(let D of st(c))if(C.some(X=>X[0]===D[0]&&X[1]===D[1]))return!1}return!0}function qe(c,x,b,_){for(let C of ee)if(!(C===_||Ae[C.k].L!==b)&&bt(C).some(D=>D[0]===c&&D[1]===x))return C;return null}function Dn(c,x,b){let _=qe(c,x,"main",b);return _&&Ae[_.k].sf?_:null}function Xe(c,x){let b=Ae[c.k];if(b.L==="wall")return Ce(c,x);let _=bt(c),C=null;for(let[D,X]of _){let K=Y(D,X),j=Xt(D,X);if(!K&&!j)return!1;if(C===null)C=K;else if(C!==K)return!1;if(Ca.has(D+","+X))return!1;if(b.L==="top"){if(qe(D,X,"top",x))return!1;let Et=qe(D,X,"main",x);if(Et&&!Ae[Et.k].sf||Et&&Et.k==="tank")return!1}else if(qe(D,X,b.L,x))return!1;if(b.L==="main"&&b.solid&&K&&X===Mt-1&&D>=Mi&&D<wi)return!1}return b.L==="main"&&b.solid,!0}function Qn(c){if(Ae[c.k].L!=="top")return 0;let b=0;for(let[_,C]of bt(c)){let D=Dn(_,C);D&&(b=Math.max(b,Ae[D.k].sf))}return b}function je(c){let x=Ae[c.k];if(x.L==="wall"){let[C,D]=st(c)[0],X=D+x.w/2;return C==="b"?[X,0,.02]:C==="f"?[X,0,Mt-.02]:C==="l"?[.02,0,X]:[fe-.02,0,X]}let[b,_]=ut(x,c.r);return[c.x+b/2,Qn(c),c.z+_/2]}let ts=new Ve({map:F,transparent:!0,depthWrite:!1,opacity:.55});function Pi(c,x){let b=Ae[c.k];if(c.I=b,c.g=Rf(c.k),h.add(c.g),c.g.userData.e=c,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[_,C]=ut(b,0),D=new ht(new Ge(_*.95,C*.95),ts);D.rotation.x=-Math.PI/2,D.position.y=.012,c.g.add(D),D.raycast=()=>{}}return c.g.traverse(_=>{_.isMesh&&(_.userData.e=c,We.push(_))}),ee.push(c),Xn(c),x||Nn(),c}function Xn(c){let[x,b,_]=je(c);c.g.position.set(x,b,_),c.g.rotation.y=c.r*Math.PI/2}function ps(c){let x=ee.indexOf(c);x>=0&&ee.splice(x,1),h.remove(c.g);for(let b=We.length-1;b>=0;b--)We[b].userData.e===c&&We.splice(b,1);c.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function Zs(c){let x=bt(c);return ee.filter(b=>Ae[b.k].L==="top"&&bt(b).some(_=>x.some(C=>C[0]===_[0]&&C[1]===_[1])))}if(a.it.forEach(([c,x,b,_])=>{let C={k:c,x,z:b,r:_||0};Xe(C)?Pi(C,!0):s&&(a.inv[c]=(a.inv[c]||0)+1)}),ee.filter(c=>Ae[c.k].L==="top").forEach(Xn),ct(a.fl),de(a.wa),r){let c=n.ex||{},x=c.wall||"#f29ab8",b=xe(640,200,(_,C,D)=>{_.fillStyle=x,_.fillRect(0,0,C,D);for(let K=0;K<D;K+=14)_.fillStyle="rgba(0,0,0,.08)",_.fillRect(0,K,C,2);let X=K=>{_.fillStyle=m>.5?"#ffd98a":"#bfe6ff",_.fillRect(K,60,110,70),_.strokeStyle="#f4efe2",_.lineWidth=8,_.strokeRect(K,60,110,70),_.beginPath(),_.moveTo(K+55,60),_.lineTo(K+55,130),_.stroke()};X(70),X(460),_.fillStyle="#e8e2d4",_.fillRect(0,D-26,C,26)});Ie.front.forEach(_=>_.traverse(C=>{if(C.isMesh&&Array.isArray(C.material)&&C.material[4]&&C.material[4].map){let D=C.material[4].map.offset.x,X=C.material[4].map.repeat.x,K=b.clone();K.needsUpdate=!0,K.offset.set(D,0),K.repeat.set(X,1),C.material[4]=new Ve({map:K})}})),kt.map=null,kt.color.set(x),kt.needsUpdate=!0,ue.children.slice().forEach(_=>{_!==ue.children[0]&&_!==ue.children[1]&&_!==ue.children[2]&&(_.visible=!1)}),zt.forEach(_=>{_.visible=!1}),It.traverse(_=>{_.isMesh&&_.material&&_.material.map&&(_.material.map=null,_.material.color.set(c.roofC||"#d8452f"),_.material.needsUpdate=!0)})}function un(){De=ee.filter(c=>c.k==="sakura").map(c=>({x:c.g.position.x,z:c.g.position.z,y:2,r:.5}))}un();for(let c=0;c<Re;c++)Kt(c,1);let Li=0;function dn(){return a.it=ee.map(c=>[c.k,c.x,c.z,c.r]),a}function Nn(){s&&(dn(),clearTimeout(Li),Li=setTimeout(()=>{try{i.save&&i.save(a)}catch{}},700),Wi())}let Js=[],ms=1.5,Ti={};function Xr(c){return Ti[c]?Ti[c]:Ti[c]=xe(128,112,x=>{if(x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",c==="mind"||c==="zzz"){x.fillStyle=c==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([_,C,D])=>{x.beginPath(),x.arc(_,C,D,0,7),x.stroke()}),b.forEach(([_,C,D])=>{x.beginPath(),x.arc(_,C,D,0,7),x.fill()}),x.beginPath(),x.arc(44,90,7,0,7),x.fill(),x.stroke(),x.beginPath(),x.arc(30,104,4,0,7),x.fill(),x.stroke()}else x.fillStyle=c==="idea"?"#fff0a8":c==="msg"?"#ffe0ea":"#ffffff",yr(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8);if(x.fillStyle="#2a1810",x.textAlign="center",x.textBaseline="middle",c==="idea")x.font=`900 44px ${Ln}`,x.fillText("!",64,42);else if(c==="zzz")x.font=`900 30px ${Ln}`,x.fillText("z z Z",64,42);else if(c==="msg")x.font=`900 40px ${Ln}`,x.fillText("\u2709",64,42);else for(let b=0;b<3;b++)x.beginPath(),x.arc(40+b*24,42,6,0,7),x.fill()})}function Gi(c,x){return xe(512,112,C=>{C.textAlign="center",C.textBaseline="middle";let D=52;C.font=`900 ${D}px ${Ln}`;let X=String(c||"").slice(0,16);for(;C.measureText(X).width>432&&D>22;)D-=2,C.font=`900 ${D}px ${Ln}`;let K=Math.min(500,C.measureText(X).width+56);C.fillStyle=x==="me"?"#2a1810e6":x==="owner"?"#7a3a14e6":"#2a2a48e0",C.strokeStyle=x==="me"?"#ffd27a":x==="owner"?"#ffb36b":"#c8c0ff",C.lineWidth=6,yr(C,(512-K)/2,14,K,84,84/2),C.fill(),C.stroke(),C.fillStyle="#fff3d6",C.fillText(X,512/2,112/2+2)})}function P(c,x,b){b=b||{};let _=new ye;h.add(_);let C=new Ge(1,1);C.translate(0,.5,0);let D=new Ve({transparent:!0,alphaTest:.04,color:b.tint||16051952}),X=new ht(C,D);_.add(X);let K={grp:_,m:X,mat:D,h0:x,h:x*ms,ar:.8,w:x*ms*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};p(c,Et=>{D.map=Et,D.needsUpdate=!0,K.ar=Et.image.width/Et.image.height,K.w=K.h*K.ar});let j=new ht(new Gn(.5,16),new Ve({map:F,transparent:!0,depthWrite:!1,opacity:.8}));if(j.rotation.x=-Math.PI/2,h.add(j),K.sh=j,b.name){let Et=new ci(new Kn({map:Gi(b.name,b.nk),transparent:!0,depthTest:!1}));Et.renderOrder=30,Et.scale.set(2,.44,1),h.add(Et),K.tag=Et,K.name=b.name}if(b.bubble){let Et=new ci(new Kn({map:Xr(b.bubble),transparent:!0,depthWrite:!1}));Et.scale.set(.8,.7,1),h.add(Et),K.bub=Et,K.kind=b.bubble}return Js.push(K),K}let k=P(n.me.src,1.5,{me:1,name:n.me.name||"\u6211",nk:"me"});k.x=Si,k.z=Mt+2.6,(s&&n.startInside!==!1||n.island)&&(k.x=Si,k.z=Mt-1.6);let it=us,nt=ds,Z=Df;function Dt(c,x){if(c<it||c>=nt||x<0||x>=Z||x<Mt&&(c<0||c>=fe)||x>=Mt&&Ca.has(c+","+x)&&c===Xl&&x===Mt+1)return!0;let b=qe(c,x,"main");return!!(b&&Ae[b.k].solid)}let Bt=(c,x,b,_)=>Dt(b,_)?!1:x===Mt-1&&_===Mt||x===Mt&&_===Mt-1?c>=Mi&&c<wi&&b===c:!0;function ce(c,x,b,_){c=Math.floor(c),x=Math.floor(x);let C=(K,j)=>(K-it)*100+j,D=new Map;D.set(C(c,x),null);let X=[[c,x]];for(;X.length;){let[K,j]=X.shift();if(K===b&&j===_){let Et=[],Ue=C(K,j),ve=K,ne=j;for(;Ue!==null;){Et.push([ve+.5,ne+.5]);let ke=D.get(Ue);if(ke===null)break;ve=ke[0],ne=ke[1],Ue=C(ve,ne)}return Et.reverse()}for(let[Et,Ue]of[[1,0],[-1,0],[0,1],[0,-1]]){let ve=K+Et,ne=j+Ue,ke=C(ve,ne);D.has(ke)||!Bt(K,j,ve,ne)||(D.set(ke,[K,j]),X.push([ve,ne]))}}return null}let Vt=.28;function oe(c,x,b){let _=c>=Mi+Vt&&c<=wi-Vt;if(b<Mt){if(x<Mt&&(c<Vt||c>fe-Vt||x<Vt)||x>=Mt-Vt&&!_)return!1}else if(x<Mt+Vt&&!_||x<Mt&&!_)return!1;if(c<us+.4||c>ds-.4||x>Df-.4||x<Mt&&(c<0||c>fe))return!1;for(let[C,D]of[[-Vt,-Vt],[Vt,-Vt],[-Vt,Vt],[Vt,Vt],[0,0]]){let X=Math.floor(c+C*.8),K=Math.floor(x+D*.8),j=qe(X,K,"main");if(j&&Ae[j.k].solid||X===Xl&&K===Mt+1&&Math.hypot(c-jn.x,x-jn.z)<.7)return!1}return!0}function Me(c){let x=[];if(c)for(let b=0;b<Mt;b++)for(let _=0;_<fe;_++)Dt(_,b)||x.push([_,b]);else for(let b=Mt+1;b<Mt+6;b++)for(let _=-6;_<fe+6;_++)Dt(_,b)||x.push([_,b]);return x}let G=[],ze=()=>zf(Ra(dn())),Ye=rn(Bo.filter(c=>n.walk&&n.walk[c.spr]&&c.spr!=="robot"));function rn(c){for(let x=c.length-1;x>0;x--){let b=Math.floor(Math.random()*(x+1));[c[x],c[b]]=[c[b],c[x]]}return c}let zn=r?0:Qi(2+ze(),2,7);Ye.slice(0,zn).forEach((c,x)=>{let b=P(n.walk[c.spr],c.h,{bubble:"chat"});b.d=c,b.sp=c.sp*.8,b.kind2="npc",b.state="out",b.t=x*2.2+gi(0,1.5),b.x=us+1,b.z=Mt+4,b.hidden=!0,G.push(b)});function $e(c){let x=P(n.me.src,1.5,{name:c.name,nk:"vis",bubble:"msg",tint:16771312});x.d={id:"v"+c.id,name:c.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},x.v=c,x.sp=1.3,x.kind2="vis",x.state="out",x.t=gi(1,6),x.x=ds-1,x.z=Mt+4,x.hidden=!0,G.push(x)}let jt=null,Un=null;if(r){let c=new ye;h.add(c);let x="#e8a050",b="#fff3e0",_=new ht(new fi(.2,14,10),Gt(x));_.scale.set(1.5,.8,.9),_.position.y=.2,c.add(_);let C=new ht(new fi(.14,14,10),Gt(x));C.position.set(.3,.34,0),c.add(C);let D=new ht(new fi(.07,10,8),Gt(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),c.add(D);for(let Et of[-.07,.07]){let Ue=new ht(new hi(.05,.1,4),Gt(x));Ue.position.set(.3,.5,Et),c.add(Ue);let ve=new ht(new fi(.018,6,6),Gt("#1a1a1a"));ve.position.set(.43,.38,Et*.7),c.add(ve)}let X=[];for(let[Et,Ue]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let ve=new ht(new bi(.04,.04,.16,6),Gt(x));ve.position.set(Et,.08,Ue),c.add(ve),X.push(ve)}let K=new ht(new bi(.03,.025,.4,6),Gt(x));K.position.set(-.38,.36,0),K.rotation.z=.8,c.add(K),c.traverse(Et=>{Et.isMesh&&(Et.userData.pet=1)});let j=ee.find(Et=>Et.k==="catbed");Un={g:c,legs:X,tail:K,x:j?j.g.position.x:2.5,z:j?j.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!j}}if(!s){let c=ee.find(_=>_.k==="register"),x=Si,b=2;if(c){let _=[[c.x,c.z-1],[c.x+1,c.z],[c.x-1,c.z],[c.x,c.z+1]].find(([C,D])=>Y(C,D)&&!Dt(C,D));_&&(x=_[0]+.5,b=_[1]+.5)}jt=P(n.owner&&n.owner.src||n.me.src,1.5,{name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),jt.x=x,jt.z=b,jt.kind2="owner",jt.state="sleep",jt.d={name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),role:a.name},G.push(jt)}function Ze(c){let x=c.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];ee.forEach(X=>{X.k==="register"&&b.push(...bt(X))}),b.push([7,Mt+1]);let _=Me(x).filter(([X,K])=>!b.some(j=>Math.abs(j[0]-X)<=1&&Math.abs(j[1]-K)<=1)&&!Js.some(j=>j!==c&&!j.hidden&&Math.floor(j.x)===X&&Math.floor(j.z)===K));if(!_.length)return null;let C=_.filter(([X,K])=>ee.some(j=>Ae[j.k].L!=="rug"&&bt(j).some(Et=>Math.abs(Et[0]-X)+Math.abs(Et[1]-K)===1))),D=C.length&&Math.random()<.75?C:_;return D[Math.floor(Math.random()*D.length)]}function On(c,x,b){let _=ce(c.x,c.z,x,b);return _&&_.length?(c.path=_,c.state="walk",!0):!1}let W={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:k.z<Mt,cam:new z(k.x,1,k.z),low:{},pitch:.7,pitchT:.7},pn=(c,x,b,_)=>{let C=document.createElement(c);return x&&(C.className=x),b!=null&&(C.innerHTML=b),(_||e).appendChild(C),C},Di=[],Se=c=>(Di.push(c),c),ti=Se(pn("div","h3info")),gs=Se(pn("div","h3hud")),An=pn("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),wn=Se(pn("div","h3hint")),ei=Se(pn("div","h3toast")),In=Se(pn("div","h3j","<i></i>")),ni=Se(pn("div","h3card")),Ei=Se(pn("div","h3bp")),xs=Se(pn("div","h3sel")),Go=Se(pn("div","h3top")),mn=Se(pn("div","h3pan")),Cs=Se(pn("button","h3door","\u{1F6AA} \u51FA\u9580"));Cs.type="button",Cs.dataset.h3="exit";function qn(c){ei.textContent=c,ei.classList.add("on"),clearTimeout(qn.t),qn.t=setTimeout(()=>ei.classList.remove("on"),2200)}function Is(){if(W.mode==="build"){gs.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}gs.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function Wi(){let c=Ra(dn()),x=zf(c);if(r){ti.innerHTML=`<b>\u{1F3E0} ${xn(n.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> \u6EAB\u99A8\u5EA6 ${c}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${xn(n.owner&&n.owner.name||"")} \u7684\u5BB6`}</small>`;return}ti.innerHTML=`<b>\u{1F3EE} ${xn(a.name)}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> ${xn(Of[x][1])}<br><small>\u6EAB\u99A8\u5EA6 ${c}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${$s(Ff(c))}`:`\u30FB\u5E97\u9577 ${xn(n.owner&&n.owner.name||"")}`}</small>`}Is(),Wi(),An.style.display="none",setTimeout(()=>tr(),50),window.addEventListener("resize",()=>tr()),An.querySelectorAll("button").forEach((c,x)=>{let b=x?-1:1;c.addEventListener("pointerdown",C=>{C.preventDefault(),W.camV=b;try{c.setPointerCapture(C.pointerId)}catch{}});let _=()=>{W.camV=0};c.addEventListener("pointerup",_),c.addEventListener("pointercancel",_),c.addEventListener("click",()=>{W.camV||(W.yawT+=b*.5)})});let Pn=()=>t.getBoundingClientRect(),Yn=new Fo,Xi=new At,Pa=new Vi(new z(0,1,0),0),Wo=new z,Ks=(c,x)=>{let b=Pn();return Xi.set((c-b.left)/b.width*2-1,-((x-b.top)/b.height*2-1)),Xi},Xo=(c,x)=>{let b=Pn();return{x:(c-b.left)*(t.clientWidth/b.width),y:(x-b.top)*(t.clientHeight/b.height)}},js=c=>{let x=c.clone().project(f),b=Pn();return{x:(x.x+1)/2*b.width+b.left,y:(1-x.y)/2*b.height+b.top,z:x.z}};function wr(c,x){return Yn.setFromCamera(Ks(c,x),f),Yn.ray.intersectPlane(Pa,Wo)?Wo.clone():null}function qo(c,x){Yn.setFromCamera(Ks(c,x),f);let b=Yn.intersectObjects(We.filter(_=>_.visible&&_.parent&&ql(_)),!1);return b.length?b[0].object.userData.e:null}function ql(c){let x=c;for(;x;){if(!x.visible)return!1;x=x.parent}return!0}function Qs(c,x){let b=null,_=1e9;for(let C of G){if(C.hidden)continue;let D=js(new z(C.x,0,C.z)),X=js(new z(C.x,C.h+.3,C.z)),K=D.y-X.y;if(K<6)continue;let j=Math.max(K*.36,30),Et=Math.abs(c-D.x);if(Et<j&&x>X.y-14&&x<D.y+12){let Ue=Et+Math.abs(x-(D.y+X.y)/2)*.3;Ue<_&&(_=Ue,b=C)}}return b}function Yl(c,x){return Yn.setFromCamera(Ks(c,x),f),Yn.intersectObjects(Yt,!1).length>0}let Ps=[],qr=[];function $l(c,x){return Yn.setFromCamera(Ks(c,x),f),Yn.intersectObjects(qr,!1).length>0}let Ui=new Map,Qe=null,qi=null,Yi=null,$i=window.matchMedia&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;t.addEventListener("contextmenu",c=>c.preventDefault()),t.addEventListener("pointerdown",c=>{W.pt=c.pointerType,c.preventDefault();try{t.setPointerCapture(c.pointerId)}catch{}let x=Xo(c.clientX,c.clientY);if(c.pointerType==="touch"&&!Yi&&W.mode==="walk"&&!mn.classList.contains("on")){let b=Pn();if(c.clientX-b.left<b.width*.45){Yi={id:c.pointerId,sx:x.x,sy:x.y},W.tgt=null,In.style.display="block",In.style.opacity=1,In.style.left=x.x+"px",In.style.top=x.y+"px",In.firstChild.style.transform="";return}}if(Ui.set(c.pointerId,{x:c.clientX,y:c.clientY}),Ui.size===2){let[b,_]=[...Ui.values()];qi={d:Math.hypot(b.x-_.x,b.y-_.y),dist:W.distT,ang:Math.atan2(_.y-b.y,_.x-b.x),yaw:W.yawT},Qe=null,ri();return}if(Qe={id:c.pointerId,sx:x.x,sy:x.y,cx:c.clientX,cy:c.clientY,moved:0,btn:c.button,yaw0:W.yawT,pit0:W.pitchT},W.mode==="build"){let b=qo(c.clientX,c.clientY);b&&b===W.sel&&!b.I.fixed2?Qe.dragItem=b:b&&(Qe.pickItem=b)}}),t.addEventListener("pointermove",c=>{if(Yi&&c.pointerId===Yi.id){let D=Xo(c.clientX,c.clientY),X=D.x-Yi.sx,K=D.y-Yi.sy,j=Math.hypot(X,K),Et=50,Ue=Math.min(1,j/Et)/Math.max(j,1e-6);W.joy={x:X*Ue,y:K*Ue},In.firstChild.style.transform=`translate(${W.joy.x*Et}px,${W.joy.y*Et}px)`;return}if(Ui.has(c.pointerId)&&Ui.set(c.pointerId,{x:c.clientX,y:c.clientY}),qi&&Ui.size>=2){let[D,X]=[...Ui.values()],K=Math.hypot(D.x-X.x,D.y-X.y);W.distT=Qi(qi.dist*qi.d/Math.max(20,K),6,20),W.yawT=qi.yaw-(Math.atan2(X.y-D.y,X.x-D.x)-qi.ang);return}if(!Qe||Qe.id!==c.pointerId)return;let x=Xo(c.clientX,c.clientY),b=x.x-Qe.sx,_=x.y-Qe.sy,C=Math.hypot(b,_);if(!Qe.moved&&C>10&&(Qe.moved=1,Qe.pickItem&&W.mode==="build"&&(Ne(Qe.pickItem),Qe.dragItem=Qe.pickItem)),!!Qe.moved){if(Qe.btn===2||W.mode==="walk"||W.mode==="build"&&!Qe.dragItem){W.yawT=Qe.yaw0-b*.008,W.pitchT=Qi(Qe.pit0+_*.005,.3,1.25);return}if(W.mode==="build"&&Qe.dragItem){$n(Qe.dragItem,c.clientX,c.clientY);return}if(W.mode==="walk"){let X=Math.min(1,C/55)/Math.max(C,1e-6);W.joy={x:b*X,y:_*X},W.tgt=null,In.style.display="block",In.style.left=Qe.sx+"px",In.style.top=Qe.sy+"px",In.firstChild.style.transform=`translate(${W.joy.x*55}px,${W.joy.y*55}px)`}}});let tr=()=>{W.dead||($i&&W.mode==="walk"?(In.style.display="block",In.style.opacity=.55,In.style.left="110px",In.style.top=t.clientHeight-110+"px",In.firstChild.style.transform=""):In.style.display="none")},Sr=c=>{if(Yi&&c.pointerId===Yi.id){Yi=null,W.joy=null,tr();return}Ui.delete(c.pointerId),Ui.size<2&&(qi=null),!(!Qe||Qe.id!==c.pointerId)&&(Qe.moved||Ni(c.clientX,c.clientY,Qe),Qe.dragItem&&ri(),Qe=null)};t.addEventListener("pointerup",Sr),t.addEventListener("pointercancel",Sr),t.addEventListener("wheel",c=>{c.preventDefault(),W.distT=Qi(W.distT+Math.sign(c.deltaY)*1.2,6,20)},{passive:!1});let Yr=c=>{if(!document.contains(t)||/input|textarea/i.test(c.target&&c.target.tagName||""))return;let x=c.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(x)){if(x==="r"&&W.sel){oi(),c.preventDefault();return}W.keys[x]=1,/^(arrow|w|a|s|d)/.test(x)&&(W.tgt=null),c.preventDefault()}},er=c=>{delete W.keys[c.key.toLowerCase()]};document.addEventListener("keydown",Yr),document.addEventListener("keyup",er);function Ni(c,x){if(mn.classList.contains("on"))return;if(W.mode==="build"){let D=qo(c,x);Ne(D||null);return}let b=Qs(c,x);if(b){Yo(b);return}if(Un){Yn.setFromCamera(Ks(c,x),f);let D=[];if(Un.g.traverse(X=>{X.isMesh&&D.push(X)}),Yn.intersectObjects(D,!1).length){qn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),Un.t=2,Un.path=null;return}}if(qr.length&&$l(c,x)){$r(jn.x-1,jn.z+.9,Vf);return}if(Yl(c,x)){$r(jn.x,jn.z+1,Kl);return}let _=qo(c,x);if(_&&Ae[_.k].L==="top"){let D=bt(_).map(X=>Dn(X[0],X[1])).find(Boolean);D&&D.k==="register"&&(_=D)}if(_&&_.k==="register"){$r(_.g.position.x,_.g.position.z+1.2,()=>J(_));return}if(_&&Ae[_.k].L!=="rug"){let D=_.g.position;T(),M(_),W.tgt=ys(D.x,D.z);return}if(T(),W.pt==="touch"&&W.mode==="walk")return;let C=wr(c,x);C&&(W.tgt={x:C.x,z:C.z})}function ys(c,x){let b=null,_=1e9;for(let[C,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let X=c+C,K=x+D;if(oe(X,K,K<Mt?0:Mt+1)){let j=Math.hypot(X-k.x,K-k.z);j<_&&(_=j,b={x:X,z:K})}}return b}function $r(c,x,b){T();let _=ys(c,x-1)||{x:c,z:x};W.tgt={x:_.x,z:_.z,fn:b},Math.hypot(k.x-_.x,k.z-_.z)<1.6&&(W.tgt=null,b())}function Yo(c){T(!0),W.talk=c,c.kind2==="npc"&&(c.state="talk",c.t=0);let x=xn(c.d.name),b=xn(c.d.role||""),_="",C=Gr.chat,D="";if(c.kind2==="owner")C={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},_=r?`<p class="h3t mind">\uFF08${xn(n.owner&&n.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${xn(n.owner&&n.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,_+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(c.kind2==="vis")C={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},_=`<p class="h3t">\u300C${xn(c.v.msg||"\u2026\u2026")}\u300D</p>${c.v.gift&&Ae[c.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${xn(Ae[c.v.gift].n)}\u300D</p>`:""}`;else{let Et=g(c);C=Gr[Et.kind]||Gr.chat,_=`<p class="h3t${Et.kind==="mind"?" mind":""}">${Et.kind==="mind"?"\uFF08"+xn(Et.text)+"\uFF09":"\u300C"+xn(Et.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let X=c.kind2==="npc"?n.walk[c.d.spr]:c.kind2==="owner"&&n.owner&&n.owner.src||n.me.src;ni.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${X}')"></div><div class="h3nm"><b>${x}</b><small>${b}</small></div><span class="h3k" style="background:${C.c}">${C.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${_}<div class="h3bt">${D}</div>`;let K=Pn(),j=js(new z(c.x,c.h*.5,c.z));ni.classList.toggle("r",j.x-K.left<K.width/2),ni.classList.add("on"),c.bub&&(c.bub.visible=!1)}function g(c){let x=ee.filter(b=>Lf[b.k]&&Math.hypot(b.g.position.x-c.x,b.g.position.z-c.z)<3.2);if(x.length&&Math.random()<.5){let b=x[Math.floor(Math.random()*x.length)];return{kind:"chat",text:Lf[b.k]}}return(!c.deck||!c.deck.length)&&(c.deck=rn(c.d.lines.map(b=>({kind:b[0],text:b[1]})))),c.deck.pop()}function M(c){let x=Ae[c.k];W.talk=null,ni.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${x.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${xn(x.n)}</b><small>\u6EAB\u99A8\u5EA6 +${x.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${xn(Lf[c.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,ni.classList.remove("r"),ni.classList.add("on")}function T(c){ni.classList.remove("on");let x=W.talk;W.talk=null,x&&x.kind2==="npc"&&x.state==="talk"&&(x.state="idle",x.t=gi(1,2.5))}function N(){if(!s||r)return 0;let c=i.today?i.today():Math.floor(Date.now()/864e5);return(a.cl?Qi(c-a.cl,0,3):1)*Ff(Ra(dn()))}function J(c){if(!s){qn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let x=N();if(x<=0){qn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=i.collect?i.collect(x):!1}catch{}if(!b){qn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}a.cl=i.today?i.today():Math.floor(Date.now()/864e5),Nn(),wt(c),qn(`\u6536\u5230 ${$s(x)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let et=new ci(new Kn({map:xe(128,128,c=>{c.fillStyle="#f2c230",c.strokeStyle="#8a5a10",c.lineWidth=8,c.beginPath(),c.arc(64,64,52,0,7),c.fill(),c.stroke(),c.fillStyle="#8a5a10",c.font=`900 64px ${Ln}`,c.textAlign="center",c.textBaseline="middle",c.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));et.renderOrder=25,et.scale.set(.55,.55,1),h.add(et);let _t=[];function wt(c){for(let x=0;x<8;x++){let b=et.clone();b.material=et.material.clone(),b.position.copy(c.g.position).add(new z(0,1.4,0)),b.userData.v=new z(gi(-1.2,1.2),gi(2.5,4),gi(-1.2,1.2)),b.userData.t=0,h.add(b),_t.push(b)}}function Pt(c){if(W.mode=c,Ne(null),T(),W.tgt=null,Is(),setTimeout(tr,0),Ei.classList.toggle("on",c==="build"),Go.classList.toggle("on",c==="build"),c!=="build"&&(An.style.bottom=""),ti.style.display=c==="build"?"none":"",c==="build")Go.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",ft(),W.distT=13.5;else{if(W.distT=W.inside?10.5:13,!oe(k.x,k.z,k.z)){let x=Me(k.z<Mt).sort((b,_)=>Math.hypot(b[0]+.5-k.x,b[1]+.5-k.z)-Math.hypot(_[0]+.5-k.x,_[1]+.5-k.z)).find(b=>oe(b[0]+.5,b[1]+.5,b[1]));x&&(k.x=x[0]+.5,k.z=x[1]+.5)}Nn()}}let gt=r?"liv":"tbl",He={},gn=null,ii=null,pt=null;function Le(c){if(He[c])return He[c];try{if(!gn){gn=new ls(128,128),ii=new Fr,ii.add(new Vr(16774368,8413264,2.2));let ne=new Hr(16777215,1.4);ne.position.set(2,4,3),ii.add(ne),pt=new Bn(30,1,.05,50)}let x=Rf(c);ii.add(x);let b=Ae[c],_=new Xs().setFromObject(x),C=_.getCenter(new z),D=_.getSize(new z),K=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;pt.position.set(C.x+K*.55,C.y+K*.45,C.z+K*.7),pt.lookAt(C),b.L==="wall"&&(pt.position.set(C.x+K*.25,C.y+K*.1,C.z+K*.96),pt.lookAt(C)),l.setRenderTarget(gn),l.setClearColor(0,0),l.clear(),l.render(ii,pt),l.setRenderTarget(null),l.setClearColor(1709366,1);let j=new Uint8Array(16384*4);l.readRenderTargetPixels(gn,0,0,128,128,j);let Et=document.createElement("canvas");Et.width=Et.height=128;let Ue=Et.getContext("2d"),ve=Ue.createImageData(128,128);for(let ne=0;ne<128;ne++)ve.data.set(j.subarray((127-ne)*512,(128-ne)*512),ne*512);for(let ne=0;ne<ve.data.length;ne+=4)ve.data[ne]=Pf[ve.data[ne]],ve.data[ne+1]=Pf[ve.data[ne+1]],ve.data[ne+2]=Pf[ve.data[ne+2]];return Ue.putImageData(ve,0,0),ii.remove(x),x.traverse(ne=>{ne.geometry&&ne.geometry.dispose()}),He[c]=Et.toDataURL()}catch{return He[c]=""}}function ft(){let c=i.coins?i.coins():0,x=(r?Od:Fd).map(([K,j])=>`<button class="h3tab ${gt===K?"on":""}" type="button" data-h3="cat" data-k="${K}">${j}</button>`).join("")+`<button class="h3tab ${gt==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${$s(c)}</span>`,b="";if(gt==="reno"){let K=a.sz|0,j=Ia[K+1];b=(s?`<button class="h3it ${j&&c<j[2]?"no":""}" type="button" data-h3="expand" ${j?"":"disabled"}><span class="ph" style="display:flex;align-items:center;justify-content:center;font-size:34px">\u{1F4D0}</span>${j?`\u64F4\u5EFA\u5230 ${j[0]}\xD7${j[1]}<span class="pr">${$s(j[2])}</span>`:`\u5DF2\u7D93\u6700\u5927<span class="pr">${fe}\xD7${Mt}</span>`}</button>`:"")+Ef.map(([Et,Ue,ve])=>{let ne=a.fo[Et],ke=a.fl===Et;return`<button class="h3it ${ke?"cur":""}" type="button" data-h3="floor" data-k="${Et}"><span class="ph" style="background:url(${me("f",Et)}) center/cover"></span>${xn(Ue)}${ke?'<span class="pr">\u4F7F\u7528\u4E2D</span>':ne?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${$s(ve)}</span>`}</button>`}).join("")+Af.map(([Et,Ue,ve])=>{let ne=a.wo[Et],ke=a.wa===Et;return`<button class="h3it ${ke?"cur":""}" type="button" data-h3="wall" data-k="${Et}"><span class="ph" style="background:url(${me("w",Et)}) center/cover"></span>${xn(Ue)}${ke?'<span class="pr">\u4F7F\u7528\u4E2D</span>':ne?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${$s(ve)}</span>`}</button>`}).join("")}else b=Sa.filter(K=>(r?K.hc===gt:K.cat===gt)&&!K.fixed).map(K=>{let j=a.inv[K.k]||0,Et=Le(K.k);return`<button class="h3it ${!j&&c<K.p?"no":""}" type="button" data-h3="item" data-k="${K.k}">${j?`<span class="ow">\xD7${j}</span>`:""}${Et?`<img src="${Et}" alt="">`:'<span class="ph"></span>'}${xn(K.n)}<span class="pr">${j?"\u62FF\u51FA\u4F86\u64FA":$s(K.p)}</span></button>`}).join("");let _=Ei.querySelector(".h3row"),C=_?_.scrollLeft:0,D=Ei.dataset.cat===gt;Ei.innerHTML=`<div class="h3tabs">${x}</div><div class="h3row">${b}</div>`,Ei.dataset.cat=gt,D&&(Ei.querySelector(".h3row").scrollLeft=C);let X=Ei.offsetHeight||150;An.style.bottom=X+8+"px",xs.style.bottom=X+8+"px"}let he={};function me(c,x){let b=c+x;if(he[b])return he[b];let _;return c==="f"?_=(R[x]||R.wood)().image:_=H(x,2).image,he[b]=_.toDataURL()}function Ne(c){if(W.sel&&W.sel!==c&&(W.sel.ok||an(W.sel)),W.sel=c,_e.visible=!!c,xs.classList.toggle("on",!!c),c){c.last={x:c.x,z:c.z,r:c.r},c.ok=!0;let x=Ae[c.k];xs.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${x.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${x.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,on()}}function an(c){if(!c.last)return;let x=c.last.x-c.x,b=c.last.z-c.z,_=Ae[c.k].sf?Zs(c):[];c.x=c.last.x,c.z=c.last.z,c.r=c.last.r,Xn(c),_.forEach(C=>{C.x+=x,C.z+=b,Xn(C)}),c.ok=!0,on()}let ln=xe(64,64,c=>{c.strokeStyle="#fff",c.lineWidth=6,c.strokeRect(3,3,58,58)}),_e=new ht(new Ge(1,1),new Ve({map:ln,transparent:!0,depthWrite:!1,color:"#6aff8a"}));_e.rotation.x=-Math.PI/2,_e.visible=!1,_e.renderOrder=5,h.add(_e);let tn=new ht(new Ge(1,1),new Ve({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));tn.rotation.x=-Math.PI/2,_e.add(tn),tn.rotation.x=0,tn.position.z=-.001;function on(){let c=W.sel;if(!c)return;let x=Ae[c.k],b=Xe(c,c);c.ok=b;let _=b?"#6aff8a":"#ff5a4a";if(_e.material.color.set(_),tn.material.color.set(_),x.L==="wall"){let[D,,X]=je(c),K=Ht(c.r);_e.scale.set(x.w,.6,1),_e.position.set(D+(K==="left"?.35:K==="right"?-.35:0),.03,X+(K==="back"?.35:K==="front"?-.35:0)),_e.rotation.z=K==="left"||K==="right"?Math.PI/2:0}else{let[D,X]=ut(x,c.r),[K,j,Et]=je(c);_e.scale.set(D,X,1),_e.rotation.z=0,_e.position.set(K,j+.03,Et)}let C=xs.querySelector('[data-h3="ok"]');C&&(C.disabled=!b)}function $n(c,x,b){let _=wr(x,b);if(!_)return;let C=Ae[c.k],D=c.x,X=c.z;if(C.L==="wall"){let K=[[_.z,0],[_.x,1],[fe-_.x,3],[Mt-_.z,2]].filter(j=>!W.low[Ht(j[1])]).sort((j,Et)=>j[0]-Et[0]);if(!K.length)return;c.r=K[0][1],c.r===0||c.r===2?(c.x=Qi(Math.round(_.x-C.w/2),0,fe-C.w),c.z=c.r===0?0:Mt-1):(c.z=Qi(Math.round(_.z-C.w/2),0,Mt-C.w),c.x=c.r===1?0:fe-1)}else{let[K,j]=ut(C,c.r);c.x=Math.round(_.x-K/2),c.z=Math.round(_.z-j/2)}(c.x!==D||c.z!==X||C.L==="wall")&&(C.sf&&si(c,D,X),Xn(c),on())}function si(c,x,b){let _={x,z:b,r:c.r,k:c.k},C=bt(_);ee.filter(D=>Ae[D.k].L==="top"&&bt(D).some(X=>C.some(K=>K[0]===X[0]&&K[1]===X[1]))).forEach(D=>{D.x+=c.x-x,D.z+=c.z-b,Xn(D)})}function ri(){W.sel&&(on(),ee.filter(c=>Ae[c.k].L==="top").forEach(Xn))}function oi(){let c=W.sel;if(!c||Ae[c.k].L==="wall")return;let x=Ae[c.k].sf?Zs(c):[];x.length&&(x.forEach(b=>{ps(b),a.inv[b.k]=(a.inv[b.k]||0)+1}),qn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),c.r=(c.r+1)%4,Xn(c),on()}function es(){let c=W.sel;if(!c||Ae[c.k].fixed)return;(Ae[c.k].sf?Zs(c):[]).forEach(b=>{ps(b),a.inv[b.k]=(a.inv[b.k]||0)+1}),W.sel=null,ps(c),a.inv[c.k]=(a.inv[c.k]||0)+1,_e.visible=!1,xs.classList.remove("on"),un(),Nn(),ft()}function Zl(){let c=W.sel;if(c){if(!Xe(c,c)){qn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}c.last=null,W.sel=null,_e.visible=!1,xs.classList.remove("on"),un(),Nn()}}function La(c){let x=Ae[c],b={k:c,x:0,z:0,r:0},_=W.cam.x,C=W.cam.z,D=null,X=1e9;if(x.L==="wall")for(let K of[0,1,3,2].filter(j=>!W.low[Ht(j)]))for(let j=0;j<10;j++){let Et={k:c,r:K,x:K===0||K===2?j:K===1?0:fe-1,z:K===1||K===3?j:K===0?0:Mt-1};if(Ce(Et)){let[Ue,,ve]=je(Et),ne=Math.hypot(Ue-_,ve-C);ne<X&&(X=ne,D=Et)}}else for(let K=0;K<Wl;K++)for(let j=Uf;j<Nf;j++){let Et={k:c,x:j,z:K,r:0};if(!Xe(Et))continue;let[Ue,,ve]=je(Et),ne=Y(j,K),ke=Math.hypot(Ue-_,ve-C)+(ne===W.inside?0:6)+(x.L==="top"&&!Dn(j,K)?1.5:0);ke<X&&(X=ke,D=Et)}D?Object.assign(b,D):(b.x=1,b.z=1),Pi(b,!0),a.inv[c]--,a.inv[c]||delete a.inv[c],Ne(b),D||on(),un(),Nn(),ft()}function Zr(c,x,b,_,C){let D=i.coins?i.coins():0;mn.innerHTML=`<h3>\u8CB7\u4E0B\u300C${xn(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${$s(_)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${$s(D)}</b></p>${D<_?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<_?"disabled":""}>\u8CB7\u4E0B</button></div>`,mn.classList.add("on"),mn._buy=()=>{let X=!1;try{X=i.buy?i.buy(_,b):!1}catch{}if(!X){qn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}mn.classList.remove("on"),C()}}let zi=null,Jl=!1;function kf(c){return zi&&!c?Promise.resolve(zi):i.msgs?Promise.resolve(i.msgs()).then(x=>(zi=(x||[]).slice().sort((b,_)=>(_.t||0)-(b.t||0)),Jl=!1,zi),()=>(Jl=!0,zi=[],zi)):(zi=[],Promise.resolve(zi))}let $o="";function Kl(){T(),mn.innerHTML=`<h3>\u{1F4DC} ${xn(a.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,mn.classList.add("on"),kf(!0).then(c=>{if(!mn.classList.contains("on"))return;let x=c.slice(0,30).map(_=>`<div class="msg"><b>${xn(_.name||"\u73A9\u5BB6")}</b><small>${_.t?new Date(_.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${_.gift&&Ae[_.gift]?` <small>\u{1F381} ${xn(Ae[_.gift].n)}</small>`:""}<br>${xn(_.msg||"")}</div>`).join("")||`<p style="opacity:.7">${Jl?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let _=r?0:c.filter(C=>C.gift&&Ae[C.gift]&&!a.gc[C.id]).length;b=`<div class="h3bt">${_?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${_} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let _=i.giftSent?i.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${n.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${_?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...U1].map(C=>`<button type="button" data-h3="gpick" data-k="${C}" class="${$o===C?"on":""}">${C?xn(Ae[C].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}mn.innerHTML=`<h3>\u{1F4DC} ${xn(a.name)} \u7684\u7559\u8A00\u677F</h3>${x}${b}`})}function Wd(){if(n.demo){qn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),mn.classList.remove("on");return}let c=mn.querySelector("#h3msg"),x=(c&&c.value||"").trim().slice(0,60);if(x.length<1){qn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=i.giftSent&&i.giftSent()?"":$o,_=mn.querySelector('[data-h3="post"]');_&&(_.disabled=!0),Promise.resolve(i.post?i.post({msg:x,gift:b}):null).then(()=>{qn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),$o="",zi=null,mn.classList.remove("on")},()=>{qn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),_&&(_.disabled=!1)})}function Bf(){if(Ps.forEach(x=>h.remove(x)),Ps.length=0,qr.length=0,!s||!zi)return;let c=zi.filter(x=>x.gift&&Ae[x.gift]&&!a.gc[x.id]);c.slice(0,5).forEach((x,b)=>{let _=new ye;_.position.set(jn.x-1.1-b%3*.55,0,jn.z+.4+Math.floor(b/3)*.5),h.add(_);let C=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=B(.42,.36,.42,Gt(C),0,.18,0,_);B(.44,.38,.08,Gt("#fff3d6"),0,.18,0,_),B(.08,.38,.44,Gt("#fff3d6"),0,.18,0,_);let X=B(.46,.08,.46,Gt(C),0,.4,0,_),K=new ht(new fi(.08,10,8),Gt("#fff3d6"));K.position.y=.48,K.scale.set(1.6,.8,1),_.add(K),_.traverse(j=>{j.isMesh&&qr.push(j)}),Ps.push(_),_.userData.ph=b}),c.length&&qn(n.island?`\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF01`)}function Vf(){if(!s||!zi)return;let c=zi.filter(x=>x.gift&&Ae[x.gift]&&!a.gc[x.id]);c.length&&(c.forEach(x=>{a.inv[x.gift]=(a.inv[x.gift]||0)+1,a.gc[x.id]=1}),Nn(),Bf(),mn.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${c.map(x=>`<div class="msg"><b>${xn(x.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${xn(Ae[x.gift].n)}\u300D<br>${xn(x.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,mn.classList.add("on"))}function Xd(){T(),mn.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${xn(a.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,mn.classList.add("on")}let Hf=c=>{let x=c.target.closest("[data-h3]");if(!x||!e.contains(x)||x.disabled)return;let b=x.dataset.h3,_=x.dataset.k;if(b==="close")T();else if(b==="more"&&W.talk)Yo(W.talk);else if(b==="build")Pt("build");else if(b==="done")Pt("walk");else if(b==="rename")Xd();else if(b==="nameok"){let C=(mn.querySelector("#h3name").value||"").trim().slice(0,12);C&&(a.name=C,vt(),Nn()),mn.classList.remove("on")}else if(b==="board"){if(W.mode!=="walk")return;n.island?Kl():$r(jn.x,jn.z+1,Kl)}else if(b==="claim")Vf();else if(b==="exit"){if(n.island){W.exited=!0;try{i.exit&&i.exit()}catch{}}}else if(b==="pclose")mn.classList.remove("on");else if(b==="post")Wd();else if(b==="gpick")$o=_||"",mn.querySelectorAll('[data-h3="gpick"]').forEach(C=>C.classList.toggle("on",(C.dataset.k||"")===$o));else if(b==="buyok"&&mn._buy)mn._buy();else if(b==="cat")gt=_,ft();else if(b==="item"){let C=Ae[_];W.sel&&!W.sel.ok&&an(W.sel),Ne(null),a.inv[_]?La(_):Zr("item",_,C.n,C.p,()=>{a.inv[_]=(a.inv[_]||0)+1,La(_)})}else if(b==="floor"){let C=Ef.find(X=>X[0]===_),D=()=>{a.fo[_]=1,a.fl=_,ct(_),Nn(),ft()};a.fo[_]?D():Zr("floor",_,C[1],C[2],D)}else if(b==="wall"){let C=Af.find(X=>X[0]===_),D=()=>{a.wo[_]=1,a.wa=_,de(_),Nn(),ft()};a.wo[_]?D():Zr("wall",_,C[1],C[2],D)}else if(b==="expand"){let C=a.sz|0,D=Ia[C+1];if(!D)return;Zr("expand","x",`\u64F4\u5EFA\u5230 ${D[0]}\xD7${D[1]} \u683C\uFF08\u73FE\u5728 ${fe}\xD7${Mt}\uFF09`,D[2],()=>{a.sz=C+1,dn();try{i.save&&i.save(a,!0)}catch{}qn("\u64F4\u5EFA\u5B8C\u6210\uFF01"),i.reload&&setTimeout(()=>i.reload(),400)})}else b==="rot"?oi():b==="store"?es():b==="ok"&&Zl()};e.addEventListener("click",Hf),kf().then(c=>{if(!W.dead&&s&&!r){Bf();let x={};c.filter(b=>b.name&&!x[b.from||b.name]&&(x[b.from||b.name]=1)).slice(0,3).forEach($e)}});let qd={get dead(){return W.dead},set dead(c){c&&jl()},cv:t,dispose:jl,data:()=>JSON.parse(JSON.stringify(dn())),probe(){let c=x=>{let b=js(x);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:W.mode,inside:W.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+k.x.toFixed(2),z:+k.z.toFixed(2)},yaw:+W.yaw.toFixed(2),sel:W.sel?{k:W.sel.k,x:W.sel.x,z:W.sel.z,r:W.sel.r,ok:W.sel.ok}:null,items:ee.map(x=>Object.assign({k:x.k,x:x.x,z:x.z,r:x.r},c(new z(x.g.position.x,x.g.position.y+.4,x.g.position.z)))),npcs:G.filter(x=>!x.hidden).map(x=>Object.assign({id:x.d.id||x.kind2,kind:x.kind2,state:x.state},c(new z(x.x,x.h*.5,x.z)))),board:c(new z(jn.x,1.15,jn.z)),gifts:Ps.length,card:ni.classList.contains("on")?ni.textContent:"",pan:mn.classList.contains("on")?mn.textContent:"",cozy:Ra(dn()),inv:Object.assign({},a.inv),name:a.name,fl:a.fl,wa:a.wa,tag:k.tag?k.tag.visible:!1,cellPx:(x,b)=>c(new z(x,0,b))}},px(c,x,b){let _=js(new z(c,x,b));return{x:Math.round(_.x),y:Math.round(_.y)}},teleport(c,x){k.x=c,k.z=x,W.inside=x<Mt},setYaw(c){W.yaw=W.yawT=c},setDist(c){W.dist=W.distT=c}};function jl(){if(!W.dead){if(W.dead=!0,cancelAnimationFrame(W.raf),clearTimeout(Li),s)try{dn(),i.save&&i.save(a,!0)}catch{}document.removeEventListener("keydown",Yr),document.removeEventListener("keyup",er),e.removeEventListener("click",Hf),Di.forEach(c=>c.remove()),h.traverse(c=>{c.geometry&&c.geometry.dispose(),(c.material?Array.isArray(c.material)?c.material:[c.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),gn&&gn.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let Da=0,Ua=0,Gf=0,Fi=1,Na=0,Ql=0,Wf=9,za=.9,Zo=new z,ns=new z,Ls=new z;function Yd(c){return Math.round(Qi(1.75-(c-380)/440*.6,1.15,1.75)*20)/20}function $d(){let c=t.getBoundingClientRect(),x=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),_=Math.min(2,window.devicePixelRatio||1),C=Yd(c.height||b);C!==ms&&(ms=C,Js.forEach(D=>{D.h=D.h0*ms,D.w=D.h*D.ar})),!(x===Da&&b===Ua&&_===Gf)&&(Da=x,Ua=b,Gf=_,Fi=Qi(c.width*_/x,.5,2.2),Fi=Math.min(Fi,Math.sqrt(2e6/(x*b))),za=Math.max(Math.min(Fi,.9),Fi*.8),Fi=Math.max(za,Math.min(Fi,Wf)),l.setPixelRatio(Fi),l.setSize(x,b,!1),f.aspect=x/b,f.updateProjectionMatrix())}function Xf(c,x){if(!c.path||!c.path.length)return!0;let[b,_]=c.path[0],C=b-c.x,D=_-c.z,X=Math.hypot(C,D),K=c.sp;if(X<.06)return c.path.shift(),!c.path.length;let j=Math.min(X,K*x);c.x+=C/X*j,c.z+=D/X*j,c.moving=!0,c.ph+=x*(4+K*3.2);let Et=C*ns.x+D*ns.z;return Math.abs(Et)>.05&&(c.face=Et>0?1:-1),!1}function qf(c){if(W.dead)return;if(!document.contains(t)){jl();return}W.raf=requestAnimationFrame(qf);let x=Math.min(.1,(c-W.last)/1e3);W.last=c,W.t+=x;let b=W.t;$d(),Na+=x,Ql++,Na>1.2&&(Na/Ql>.028&&(l.shadowMap.enabled?(l.shadowMap.enabled=!1,h.traverse(ae=>{ae.material&&[].concat(ae.material).forEach(Te=>Te.needsUpdate=!0)})):Fi>za+.01&&(Fi=Math.max(za,Fi*.88),Wf=Fi,l.setPixelRatio(Fi),l.setSize(Da,Ua,!1))),Na=0,Ql=0);let _=W.keys;_.q&&(W.yawT+=x*1.8),_.e&&(W.yawT-=x*1.8),W.camV&&(W.yawT+=W.camV*x*1.8),W.yaw+=(W.yawT-W.yaw)*Math.min(1,x*8),W.pitch+=(W.pitchT-W.pitch)*Math.min(1,x*8),W.dist+=(W.distT-W.dist)*Math.min(1,x*5);let C=Math.sin(W.yaw),D=Math.cos(W.yaw);if(Zo.set(-C,0,-D),ns.set(D,0,-C),k.moving=!1,W.mode==="walk"&&!mn.classList.contains("on")){let $=0,ae=0,Te=0,Je=1e9;if(W.joy)$=ns.x*W.joy.x+Zo.x*-W.joy.y,ae=ns.z*W.joy.x+Zo.z*-W.joy.y,Te=Math.hypot(W.joy.x,W.joy.y);else{let cn=(_.arrowright||_.d?1:0)-(_.arrowleft||_.a?1:0),Ke=(_.arrowup||_.w?1:0)-(_.arrowdown||_.s?1:0);if(cn||Ke){let hn=Math.hypot(cn,Ke);$=(ns.x*cn+Zo.x*Ke)/hn,ae=(ns.z*cn+Zo.z*Ke)/hn,Te=1}else if(W.tgt){if(!W.tgt.path){let Sn=ce(k.x,k.z,Math.floor(W.tgt.x),Math.floor(W.tgt.z));W.tgt.path=Sn?Sn.slice(1):[],Sn?W.tgt.path.length?W.tgt.path[W.tgt.path.length-1]=[W.tgt.x,W.tgt.z]:W.tgt.path=[[W.tgt.x,W.tgt.z]]:W.tgt.path=[[W.tgt.x,W.tgt.z]]}let hn=W.tgt.path[0];if(hn){let Sn=hn[0]-k.x,Ai=hn[1]-k.z,Oi=Math.hypot(Sn,Ai);if(Oi<.12){if(W.tgt.path.shift(),!W.tgt.path.length){let _s=W.tgt.fn;W.tgt=null,_s&&_s()}}else $=Sn/Oi,ae=Ai/Oi,Te=1,Je=Oi}else{let Sn=W.tgt.fn;W.tgt=null,Sn&&Sn()}}}if(Te>.05){let cn=Math.hypot($,ae)||1,Ke=4*Math.min(1,Te),hn=Math.min(Ke*x,Je),Sn=$/cn*hn,Ai=ae/cn*hn,Oi=!1;if(oe(k.x+Sn,k.z+Ai,k.z)?(k.x+=Sn,k.z+=Ai,Oi=!0):oe(k.x+Sn,k.z,k.z)?(k.x+=Sn,Oi=!0):oe(k.x,k.z+Ai,k.z)&&(k.z+=Ai,Oi=!0),!Oi&&W.tgt&&(W.tgt.stuck=(W.tgt.stuck||0)+x,W.tgt.stuck>.6)){let _s=W.tgt.fn;W.tgt=null,_s&&Math.hypot(k.x-jn.x,k.z-jn.z)<3&&_s()}if(Oi){k.moving=!0,k.ph+=x*9*Math.min(1,Te);let _s=$/cn*ns.x+ae/cn*ns.z;Math.abs(_s)>.2&&(k.face=_s>0?1:-1)}W.talk&&Math.hypot(W.talk.x-k.x,W.talk.z-k.z)>6&&T()}}if(n.island&&!W.exited&&k.z>Mt+.5&&W.mode==="walk"){W.exited=!0;try{i.exit&&i.exit()}catch{}return}if(o){let $=W.mode==="walk"&&!W.exited&&k.z>Mt-2&&Math.abs(k.x-Si)<2;if(Cs.classList.toggle("on",$),$){let ae=js(new z(Si,W.low&&W.low.front?.5:2.7,Mt-.15)),Te=Pn();Cs.style.left=ae.x-Te.left+"px",Cs.style.top=ae.y-Te.top+"px"}}let X=W.inside;W.inside=k.z<Mt-.05,X!==W.inside&&W.mode==="walk"&&(W.distT=W.inside?10.5:13,wn.textContent=W.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${a.name}\u300D`:"\u5E97\u5916",wn.classList.add("on"),clearTimeout(wn.t),wn.t=setTimeout(()=>wn.classList.remove("on"),1800));for(let $ of G){if($.moving=!1,$.kind2==="owner")continue;if($.state==="talk"){$.face=(k.x-$.x)*ns.x+(k.z-$.z)*ns.z>0?1:-1;continue}if($.state==="out"){if($.t-=x,$.t<=0){let Ke=Math.random()<.5;$.x=Ke?us+4:ds-4,$.z=Mt+gi(3.5,5.5),$.hidden=!1,$.alpha=0,$.stops=2+Math.floor(Math.random()*3);let hn=Ze($);(!hn||!On($,hn[0],hn[1]))&&($.hidden=!0,$.t=3)}continue}if($.alpha=Math.min(1,($.alpha||0)+x*2),$.state==="walk")Xf($,x)&&($.state="idle",$.t=gi(3,7));else if($.state==="idle"){if($.t-=x,$.t<=0)if($.stops--,$.stops<=0){let Ke=Math.random()<.5?us+1:ds-2;On($,Ke,Mt+4)?$.state="leave":$.t=2}else{let Ke=Ze($);(!Ke||!On($,Ke[0],Ke[1]))&&($.t=2)}}else $.state==="leave"&&(Xf($,x)?($.hidden=!0,$.state="out",$.t=gi(4,12)):($.x<us+3||$.x>ds-3)&&($.alpha=Math.max(0,Math.min($.alpha,Math.min($.x-us,ds-$.x)/3))));let ae=$.x-k.x,Te=$.z-k.z,Je=Math.hypot(ae,Te),cn=.55;if(Je<cn&&Je>.001&&$.state!=="walk"&&$.state!=="leave"){let Ke=$.x+ae/Je*(cn-Je),hn=$.z+Te/Je*(cn-Je);oe(Ke,hn,$.z)&&($.x=Ke,$.z=hn)}}if(Un){let $=Un;$.t-=x;let ae=!1;if($.path&&$.path.length){let[Je,cn]=$.path[0],Ke=Je-$.x,hn=cn-$.z,Sn=Math.hypot(Ke,hn);if(Sn<.05)$.path.shift();else{let Ai=Math.min(Sn,1.1*x);$.x+=Ke/Sn*Ai,$.z+=hn/Sn*Ai,$.g.rotation.y=Math.atan2(-hn,Ke),ae=!0}$.path.length||($.t=gi(3,8))}else if($.t<=0){let Je=Me(!0),cn=Je[Math.floor(Math.random()*Je.length)],Ke=ee.find(Ai=>Ai.k==="catbed"),hn=Ke&&Math.random()<.35?[Ke.x,Ke.z]:cn,Sn=hn&&ce($.x,$.z,hn[0],hn[1]);Sn&&Sn.length?($.path=Sn,$.sleep=!1):$.t=3,Ke&&hn&&hn[0]===Ke.x&&hn[1]===Ke.z&&($.sleep=!0)}$.ph+=x*(ae?12:0),$.legs.forEach((Je,cn)=>{Je.rotation.z=ae?Math.sin($.ph+cn*Math.PI)*.5:0}),$.tail.rotation.z=.8+Math.sin(b*2)*.25;let Te=!ae&&$.sleep&&ee.some(Je=>Je.k==="catbed"&&Math.hypot(Je.g.position.x-$.x,Je.g.position.z-$.z)<.4);$.g.position.set($.x,Te?.1:0,$.z),$.g.scale.y=Te?.75+Math.sin(b*1.5)*.03:1}let K=k.x,j=k.z,Et=1.1;W.mode==="build"&&(W.inside?(K=fe/2+C*2.2,j=Mt/2+D*2.2):(K=Si+C*2,j=Mt+2.5+D*2),Et=.4),W.cam.x+=(K-W.cam.x)*Math.min(1,x*(W.mode==="build"?4:12)),W.cam.z+=(j-W.cam.z)*Math.min(1,x*(W.mode==="build"?4:12)),W.cam.y+=(Et-W.cam.y)*Math.min(1,x*4);let Ue=Da/Ua,ve=Ue<1.45?1.45/Ue:1,ne=W.dist*ve*Math.max(fe/10,Mt/8),ke=W.mode==="build"?Math.max(.75,W.pitch):W.pitch;Ls.set(W.cam.x+C*Math.cos(ke)*ne,W.cam.y+Math.sin(ke)*ne,W.cam.z+D*Math.cos(ke)*ne),f.position.copy(Ls),f.lookAt(W.cam.x,W.cam.y+.5,W.cam.z),v.position.copy(Ls);let Tn=W.inside||W.mode==="build"&&W.inside;It.visible=!Tn;let xi=W.low={back:Tn&&Ls.z<0,front:Tn&&Ls.z>Mt,left:Tn&&Ls.x<0,right:Tn&&Ls.x>fe};for(let $ in Ie){let ae=xi[$];for(let Te of Ie[$]){let Je=ae?.14:1;Te.scale.y+=(Je-Te.scale.y)*Math.min(1,x*10)}}for(let $ of ee)if(Ae[$.k].L==="wall"){let ae=Ht($.r);$.g.visible=!xi[ae]||!Tn}ue.visible=!xi.front;for(let $ of U)$.visible=!(Tn&&(xi.left&&$.position.x<0||xi.right&&$.position.x>fe));I.intensity=w.intensity=Tn?14:6;let tc=Math.atan2(Ls.x-W.cam.x,Ls.z-W.cam.z);for(let $ of Js){let ae=!$.hidden,Te=!Tn&&$.z<Mt;if($.grp.visible=ae,$.sh.visible=ae,$.tag&&($.tag.visible=ae&&!Te),$.bub&&($.bub.visible=ae&&!Te&&$!==W.talk&&$.state!=="leave"),!ae)continue;let Je=$.w,cn=$.h,Ke=$.moving?1:0,hn=Math.sin($.ph),Sn=Ke?Math.abs(hn)*.06:0,Ai=Ke?hn*.06:Math.sin(b*1.6+$.ph)*.01,Oi=Ke?1+Math.cos($.ph*2)*.025:1+Math.sin(b*1.6+$.ph)*.008,_s=$.state==="sleep"?Math.sin(b*1.2)*.015:0;$.grp.position.set($.x,Sn,$.z),$.m.rotation.set(0,tc,Ai*$.face+_s),$.m.scale.set(Je*$.face*(2-Oi),cn*Oi,1),$.mat.opacity=$.alpha==null?1:$.alpha,$.sh.position.set($.x,.025,$.z),$.sh.scale.set(Je*.7,Je*.4,1),$.tag&&($.tag.position.set($.x,cn+.3,$.z),$.tag.material.opacity=$.alpha==null?1:$.alpha),$.bub&&$.bub.position.set($.x,cn+($.tag?.82:.45)+Math.sin(b*2.3+$.ph)*.06,$.z)}Oe.rotation.x=Math.sin(b*1.7)*.05;for(let $ of zt)$.material.opacity=.45+.12*Math.sin(b*6);for(let $ of Q)$.material.opacity=.5+.05*Math.sin(b*3+$.parent.position.x);for(let $ of ee){let ae=$.g.userData;if(ae.glows)for(let Te of ae.glows)Te.material.opacity=(Te.userData.o0||(Te.userData.o0=Te.material.opacity))*(.85+.15*Math.sin(b*5+$.x*1.7));if(ae.swing&&(ae.swing.rotation.z=Math.sin(b*1.5+$.x)*.06),ae.wave&&(ae.wave.rotation.x=-.6+Math.sin(b*4)*.5),ae.fish&&ae.fish.forEach((Te,Je)=>{let cn=b*(.6+Je*.2)+Je*2;Te.position.x=Math.cos(cn)*.2,Te.position.z=Math.sin(cn)*.12,Te.rotation.y=-cn+Math.PI/2*(Je%2?1:-1)}),ae.spin&&(ae.spin.rotation.y=b*3),ae.hands){let Te=new Date;ae.hands[0].rotation.z=-(Te.getHours()%12+Te.getMinutes()/60)/12*Math.PI*2,ae.hands[1].rotation.z=-Te.getMinutes()/60*Math.PI*2,ae.hands.forEach(Je=>{let cn=Je.rotation.z,Ke=Je.geometry.parameters.height/2;Je.position.x=-Math.sin(cn)*Ke,Je.position.y=ae.handY+Math.cos(cn)*Ke})}}for(let $ of Ps)$.position.y=Math.abs(Math.sin(b*3+$.userData.ph))*.12;{let $=ge.geometry.attributes.position.array;for(let ae=0;ae<Re;ae++){let Te=Jt[ae];$[ae*3]+=(Te.vx+Math.sin(b*1.5+Te.ph)*.3)*x,$[ae*3+1]+=Te.vy*x,$[ae*3+2]+=Math.cos(b*1.2+Te.ph)*.2*x,$[ae*3+1]<.02&&Kt(ae)}ge.geometry.attributes.position.needsUpdate=!0}Wt.children[1].rotation.z=Math.sin(b*.8)*.08,Wt.children[4].rotation.y=Math.sin(b*2)*.4;{let $=s?ee.find(Te=>Te.k==="register"):null,ae=$?N():0;et.visible=!!($&&ae>0&&W.mode==="walk"&&W.inside),et.visible&&(et.position.set($.g.position.x,1.75+Math.sin(b*3)*.1,$.g.position.z),et.material.rotation=0,et.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let $=_t.length-1;$>=0;$--){let ae=_t[$],Te=ae.userData;Te.t+=x,Te.v.y-=9*x,ae.position.addScaledVector(Te.v,x),ae.material.opacity=Math.max(0,1-Te.t/1.1),Te.t>1.1&&(h.remove(ae),ae.material.dispose(),_t.splice($,1))}W.sel&&(_e.material.opacity=.7+.3*Math.sin(b*6)),l.render(h,f)}return W.raf=requestAnimationFrame(qf),qd}return tp(F1);})();
