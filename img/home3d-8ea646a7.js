var Home3D=(()=>{var Gl=Object.defineProperty;var Vd=Object.getOwnPropertyDescriptor;var Hd=Object.getOwnPropertyNames;var Gd=Object.prototype.hasOwnProperty;var Wd=(n,t)=>{for(var e in t)Gl(n,e,{get:t[e],enumerable:!0})},Xd=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hd(t))!Gd.call(n,s)&&s!==e&&Gl(n,s,{get:()=>t[s],enumerable:!(i=Vd(t,s))||i.enumerable});return n};var qd=n=>Xd(Gl({},"__esModule",{value:!0}),n);var I_={};Wd(I_,{D0:()=>_i,D1:()=>vi,DX:()=>Ui,EXO:()=>Gi,H3CSS:()=>R_,RD:()=>vt,RW:()=>xe,STARS:()=>Sf,WH:()=>$n,cozyOf:()=>vo,dailyIncome:()=>wf,defaultEx:()=>yf,demoHome:()=>E_,freshHome:()=>Ld,freshHomeInterior:()=>T_,island:()=>Rd,starsOf:()=>Mf,start:()=>C_});var Yd=0,zf=1,$d=2;var $u=1,Qh=2,Ls=3,sr=0,Jn=1,Ln=2,er=0,ca=1,ds=2,Ff=3,Of=4,Zd=5,Sr=100,Jd=101,Kd=102,jd=103,Qd=104,tp=200,ep=201,np=202,ip=203,Ec=204,Ac=205,sp=206,rp=207,ap=208,op=209,lp=210,cp=211,hp=212,fp=213,up=214,Rc=0,Cc=1,Ic=2,da=3,Pc=4,Lc=5,Dc=6,Uc=7,tf=0,dp=1,pp=2,nr=0,mp=1,gp=2,xp=3,yp=4,_p=5,vp=6,bp=7;var Zu=300,pa=301,ma=302,Nc=303,zc=304,Pl=306,Fs=1e3,Er=1001,Fc=1002,ts=1003,Mp=1004;var Ro=1005;var us=1006,Wl=1007;var Ar=1008;var Os=1009,Ju=1010,Ku=1011,to=1012,ef=1013,Rr=1014,Ds=1015,po=1016,nf=1017,sf=1018,ga=1020,ju=35902,Qu=1021,td=1022,Qi=1023,ed=1024,nd=1025,ha=1026,xa=1027,id=1028,rf=1029,sd=1030,af=1031;var of=1033,sl=33776,rl=33777,al=33778,ol=33779,Oc=35840,kc=35841,Bc=35842,Vc=35843,Hc=36196,Gc=37492,Wc=37496,Xc=37808,qc=37809,Yc=37810,$c=37811,Zc=37812,Jc=37813,Kc=37814,jc=37815,Qc=37816,th=37817,eh=37818,nh=37819,ih=37820,sh=37821,ll=36492,rh=36494,ah=36495,rd=36283,oh=36284,lh=36285,ch=36286;var cl=2300,hh=2301,Xl=2302,kf=2400,Bf=2401,Vf=2402;var wp=3200,Sp=3201;var ad=0,Tp=1,Qs="",Gn="srgb",Ia="srgb-linear",Ll="linear",un="srgb";var Gr=7680;var Hf=519,Ep=512,Ap=513,Rp=514,od=515,Cp=516,Ip=517,Pp=518,Lp=519,fh=35044;var Gf="300 es",Us=2e3,hl=2001,rr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ql=Math.PI/180,uh=180/Math.PI;function Ns(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function Qn(n,t,e){return Math.max(t,Math.min(e,n))}function Dp(n,t){return(n%t+t)%t}function Yl(n,t,e){return(1-e)*n+e*t}function fs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ct=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class n{constructor(t,e,i,s,r,a,o,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],f=i[4],u=i[7],p=i[2],d=i[5],v=i[8],T=s[0],y=s[3],m=s[6],S=s[1],C=s[4],M=s[7],q=s[2],z=s[5],V=s[8];return r[0]=a*T+o*S+l*q,r[3]=a*y+o*C+l*z,r[6]=a*m+o*M+l*V,r[1]=h*T+f*S+u*q,r[4]=h*y+f*C+u*z,r[7]=h*m+f*M+u*V,r[2]=p*T+d*S+v*q,r[5]=p*y+d*C+v*z,r[8]=p*m+d*M+v*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],f=t[8];return e*a*f-e*o*h-i*r*f+i*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],f=t[8],u=f*a-o*h,p=o*l-f*r,d=h*r-a*l,v=e*u+i*p+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/v;return t[0]=u*T,t[1]=(s*h-f*i)*T,t[2]=(o*i-s*a)*T,t[3]=p*T,t[4]=(f*e-s*l)*T,t[5]=(s*r-o*e)*T,t[6]=d*T,t[7]=(i*l-h*e)*T,t[8]=(a*e-i*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($l.makeScale(t,e)),this}rotate(t){return this.premultiply($l.makeRotation(-t)),this}translate(t,e){return this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$l=new De;function ld(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Up(){let n=eo("canvas");return n.style.display="block",n}var Wf={};function Za(n){n in Wf||(Wf[n]=!0,console.warn(n))}function Np(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function zp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qe={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===un&&(n.r=zs(n.r),n.g=zs(n.g),n.b=zs(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===un&&(n.r=fa(n.r),n.g=fa(n.g),n.b=fa(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qs?Ll:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xf=[.64,.33,.3,.6,.15,.06],qf=[.2126,.7152,.0722],Yf=[.3127,.329],$f=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Ia]:{primaries:Xf,whitePoint:Yf,transfer:Ll,toXYZ:$f,fromXYZ:Zf,luminanceCoefficients:qf,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:Xf,whitePoint:Yf,transfer:un,toXYZ:$f,fromXYZ:Zf,luminanceCoefficients:qf,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});var Wr,dh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wr===void 0&&(Wr=eo("canvas")),Wr.width=t.width,Wr.height=t.height;let i=Wr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Wr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zs(e[i]/255)*255):e[i]=zs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,fl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zl(s[a].image)):r.push(Zl(s[a]))}else r=Zl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Zl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?dh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,Si=class n extends rr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Er,s=Er,r=us,a=Ar,o=Qi,l=Os,h=n.DEFAULT_ANISOTROPY,f=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ns(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fs:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fs:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Zu;Si.DEFAULT_ANISOTROPY=1;var pn=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],f=l[4],u=l[8],p=l[1],d=l[5],v=l[9],T=l[2],y=l[6],m=l[10];if(Math.abs(f-p)<.01&&Math.abs(u-T)<.01&&Math.abs(v-y)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+T)<.1&&Math.abs(v+y)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(h+1)/2,M=(d+1)/2,q=(m+1)/2,z=(f+p)/4,V=(u+T)/4,B=(v+y)/4;return C>M&&C>q?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=z/i,r=V/i):M>q?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=z/s,r=B/s):q<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),i=V/r,s=B/r),this.set(i,s,r,e),this}let S=Math.sqrt((y-v)*(y-v)+(u-T)*(u-T)+(p-f)*(p-f));return Math.abs(S)<.001&&(S=1),this.x=(y-v)/S,this.y=(u-T)/S,this.z=(p-f)/S,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends rr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pn(0,0,t,e),this.scissorTest=!1,this.viewport=new pn(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:us,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Si(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},es=class extends ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ul=class extends Si{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ts,this.minFilter=ts,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mh=class extends Si{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ts,this.minFilter=ts,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],f=i[s+2],u=i[s+3],p=r[a+0],d=r[a+1],v=r[a+2],T=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=f,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=T;return}if(u!==T||l!==p||h!==d||f!==v){let y=1-o,m=l*p+h*d+f*v+u*T,S=m>=0?1:-1,C=1-m*m;if(C>Number.EPSILON){let q=Math.sqrt(C),z=Math.atan2(q,m*S);y=Math.sin(y*z)/q,o=Math.sin(o*z)/q}let M=o*S;if(l=l*y+p*M,h=h*y+d*M,f=f*y+v*M,u=u*y+T*M,y===1-o){let q=1/Math.sqrt(l*l+h*h+f*f+u*u);l*=q,h*=q,f*=q,u*=q}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a],p=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+f*u+l*d-h*p,t[e+1]=l*v+f*p+h*u-o*d,t[e+2]=h*v+f*d+o*p-l*u,t[e+3]=f*v-o*u-l*p-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),f=o(s/2),u=o(r/2),p=l(i/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*f*u+h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u-p*d*v;break;case"YXZ":this._x=p*f*u+h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u+p*d*v;break;case"ZXY":this._x=p*f*u-h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u-p*d*v;break;case"ZYX":this._x=p*f*u-h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u+p*d*v;break;case"YZX":this._x=p*f*u+h*d*v,this._y=h*d*u+p*f*v,this._z=h*f*v-p*d*u,this._w=h*f*u-p*d*v;break;case"XZY":this._x=p*f*u-h*d*v,this._y=h*d*u-p*f*v,this._z=h*f*v+p*d*u,this._w=h*f*u+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],f=e[6],u=e[10],p=i+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,f=e._w;return this._x=i*f+a*o+s*h-r*l,this._y=s*f+a*l+r*o-i*h,this._z=r*f+a*h+i*l-s*o,this._w=a*f-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),f=Math.atan2(h,o),u=Math.sin((1-e)*f)/h,p=Math.sin(e*f)/h;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),f=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*h+a*u-o*f,this.y=i+l*f+o*h-r*u,this.z=s+l*u+r*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jl.copy(this).projectOnVector(t),this.sub(Jl)}reflect(t){return this.sub(Jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new N,Jf=new ar,ks=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ji.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ji.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ji):Ji.fromBufferAttribute(r,a),Ji.applyMatrix4(t.matrixWorld),this.expandByPoint(Ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Va),Io.subVectors(this.max,Va),Xr.subVectors(t.a,Va),qr.subVectors(t.b,Va),Yr.subVectors(t.c,Va),Ys.subVectors(qr,Xr),$s.subVectors(Yr,qr),xr.subVectors(Xr,Yr);let e=[0,-Ys.z,Ys.y,0,-$s.z,$s.y,0,-xr.z,xr.y,Ys.z,0,-Ys.x,$s.z,0,-$s.x,xr.z,0,-xr.x,-Ys.y,Ys.x,0,-$s.y,$s.x,0,-xr.y,xr.x,0];return!Kl(e,Xr,qr,Yr,Io)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,Xr,qr,Yr,Io))?!1:(Po.crossVectors(Ys,$s),e=[Po.x,Po.y,Po.z],Kl(e,Xr,qr,Yr,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(As),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},As=[new N,new N,new N,new N,new N,new N,new N,new N],Ji=new N,Co=new ks,Xr=new N,qr=new N,Yr=new N,Ys=new N,$s=new N,xr=new N,Va=new N,Io=new N,Po=new N,yr=new N;function Kl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){yr.fromArray(n,r);let o=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=t.dot(yr),h=e.dot(yr),f=i.dot(yr);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>o)return!1}return!0}var Bp=new ks,Ha=new N,jl=new N,ya=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Bp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ha.subVectors(t,this.center);let e=Ha.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ha,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ha.copy(t.center).add(jl)),this.expandByPoint(Ha.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rs=new N,Ql=new N,Lo=new N,Zs=new N,tc=new N,Do=new N,ec=new N,no=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rs.copy(this.origin).addScaledVector(this.direction,e),Rs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ql.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),Zs.copy(this.origin).sub(Ql);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Lo),o=Zs.dot(this.direction),l=-Zs.dot(Lo),h=Zs.lengthSq(),f=Math.abs(1-a*a),u,p,d,v;if(f>0)if(u=a*l-o,p=a*o-l,v=r*f,u>=0)if(p>=-v)if(p<=v){let T=1/f;u*=T,p*=T,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+h}else p=r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+h;else p=-r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+h;else p<=-v?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+h):p<=v?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+h):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+h);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ql).addScaledVector(Lo,p),d}intersectSphere(t,e){Rs.subVectors(t.center,this.origin);let i=Rs.dot(this.direction),s=Rs.dot(Rs)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,h=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),f>=0?(r=(t.min.y-p.y)*f,a=(t.max.y-p.y)*f):(r=(t.max.y-p.y)*f,a=(t.min.y-p.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Rs)!==null}intersectTriangle(t,e,i,s,r){tc.subVectors(e,t),Do.subVectors(i,t),ec.crossVectors(tc,Do);let a=this.direction.dot(ec),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zs.subVectors(this.origin,t);let l=o*this.direction.dot(Do.crossVectors(Zs,Do));if(l<0)return null;let h=o*this.direction.dot(tc.cross(Zs));if(h<0||l+h>a)return null;let f=-o*Zs.dot(ec);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class n{constructor(t,e,i,s,r,a,o,l,h,f,u,p,d,v,T,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,f,u,p,d,v,T,y)}set(t,e,i,s,r,a,o,l,h,f,u,p,d,v,T,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=f,m[10]=u,m[14]=p,m[3]=d,m[7]=v,m[11]=T,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/$r.setFromMatrixColumn(t,0).length(),r=1/$r.setFromMatrixColumn(t,1).length(),a=1/$r.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=a*f,d=a*u,v=o*f,T=o*u;e[0]=l*f,e[4]=-l*u,e[8]=h,e[1]=d+v*h,e[5]=p-T*h,e[9]=-o*l,e[2]=T-p*h,e[6]=v+d*h,e[10]=a*l}else if(t.order==="YXZ"){let p=l*f,d=l*u,v=h*f,T=h*u;e[0]=p+T*o,e[4]=v*o-d,e[8]=a*h,e[1]=a*u,e[5]=a*f,e[9]=-o,e[2]=d*o-v,e[6]=T+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*f,d=l*u,v=h*f,T=h*u;e[0]=p-T*o,e[4]=-a*u,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*f,e[9]=T-p*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*f,d=a*u,v=o*f,T=o*u;e[0]=l*f,e[4]=v*h-d,e[8]=p*h+T,e[1]=l*u,e[5]=T*h+p,e[9]=d*h-v,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,d=a*h,v=o*l,T=o*h;e[0]=l*f,e[4]=T-p*u,e[8]=v*u+d,e[1]=u,e[5]=a*f,e[9]=-o*f,e[2]=-h*f,e[6]=d*u+v,e[10]=p-T*u}else if(t.order==="XZY"){let p=a*l,d=a*h,v=o*l,T=o*h;e[0]=l*f,e[4]=-u,e[8]=h*f,e[1]=p*u+T,e[5]=a*f,e[9]=d*u-v,e[2]=v*u-d,e[6]=o*f,e[10]=T*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Hp)}lookAt(t,e,i){let s=this.elements;return Ii.subVectors(t,e),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),Js.crossVectors(i,Ii),Js.lengthSq()===0&&(Math.abs(i.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),Js.crossVectors(i,Ii)),Js.normalize(),Uo.crossVectors(Ii,Js),s[0]=Js.x,s[4]=Uo.x,s[8]=Ii.x,s[1]=Js.y,s[5]=Uo.y,s[9]=Ii.y,s[2]=Js.z,s[6]=Uo.z,s[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],f=i[1],u=i[5],p=i[9],d=i[13],v=i[2],T=i[6],y=i[10],m=i[14],S=i[3],C=i[7],M=i[11],q=i[15],z=s[0],V=s[4],B=s[8],L=s[12],R=s[1],H=s[5],st=s[9],nt=s[13],at=s[2],Mt=s[6],rt=s[10],It=s[14],ct=s[3],Ut=s[7],Zt=s[11],Ot=s[15];return r[0]=a*z+o*R+l*at+h*ct,r[4]=a*V+o*H+l*Mt+h*Ut,r[8]=a*B+o*st+l*rt+h*Zt,r[12]=a*L+o*nt+l*It+h*Ot,r[1]=f*z+u*R+p*at+d*ct,r[5]=f*V+u*H+p*Mt+d*Ut,r[9]=f*B+u*st+p*rt+d*Zt,r[13]=f*L+u*nt+p*It+d*Ot,r[2]=v*z+T*R+y*at+m*ct,r[6]=v*V+T*H+y*Mt+m*Ut,r[10]=v*B+T*st+y*rt+m*Zt,r[14]=v*L+T*nt+y*It+m*Ot,r[3]=S*z+C*R+M*at+q*ct,r[7]=S*V+C*H+M*Mt+q*Ut,r[11]=S*B+C*st+M*rt+q*Zt,r[15]=S*L+C*nt+M*It+q*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],f=t[2],u=t[6],p=t[10],d=t[14],v=t[3],T=t[7],y=t[11],m=t[15];return v*(+r*l*u-s*h*u-r*o*p+i*h*p+s*o*d-i*l*d)+T*(+e*l*d-e*h*p+r*a*p-s*a*d+s*h*f-r*l*f)+y*(+e*h*u-e*o*d-r*a*u+i*a*d+r*o*f-i*h*f)+m*(-s*o*f-e*l*u+e*o*p+s*a*u-i*a*p+i*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],f=t[8],u=t[9],p=t[10],d=t[11],v=t[12],T=t[13],y=t[14],m=t[15],S=u*y*h-T*p*h+T*l*d-o*y*d-u*l*m+o*p*m,C=v*p*h-f*y*h-v*l*d+a*y*d+f*l*m-a*p*m,M=f*T*h-v*u*h+v*o*d-a*T*d-f*o*m+a*u*m,q=v*u*l-f*T*l-v*o*p+a*T*p+f*o*y-a*u*y,z=e*S+i*C+s*M+r*q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/z;return t[0]=S*V,t[1]=(T*p*r-u*y*r-T*s*d+i*y*d+u*s*m-i*p*m)*V,t[2]=(o*y*r-T*l*r+T*s*h-i*y*h-o*s*m+i*l*m)*V,t[3]=(u*l*r-o*p*r-u*s*h+i*p*h+o*s*d-i*l*d)*V,t[4]=C*V,t[5]=(f*y*r-v*p*r+v*s*d-e*y*d-f*s*m+e*p*m)*V,t[6]=(v*l*r-a*y*r-v*s*h+e*y*h+a*s*m-e*l*m)*V,t[7]=(a*p*r-f*l*r+f*s*h-e*p*h-a*s*d+e*l*d)*V,t[8]=M*V,t[9]=(v*u*r-f*T*r-v*i*d+e*T*d+f*i*m-e*u*m)*V,t[10]=(a*T*r-v*o*r+v*i*h-e*T*h-a*i*m+e*o*m)*V,t[11]=(f*o*r-a*u*r-f*i*h+e*u*h+a*i*d-e*o*d)*V,t[12]=q*V,t[13]=(f*T*s-v*u*s+v*i*p-e*T*p-f*i*y+e*u*y)*V,t[14]=(v*o*s-a*T*s-v*i*l+e*T*l+a*i*y-e*o*y)*V,t[15]=(a*u*s-f*o*s+f*i*l-e*u*l-a*i*p+e*o*p)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,f=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,f*o+i,f*l-s*a,0,h*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,f=a+a,u=o+o,p=r*h,d=r*f,v=r*u,T=a*f,y=a*u,m=o*u,S=l*h,C=l*f,M=l*u,q=i.x,z=i.y,V=i.z;return s[0]=(1-(T+m))*q,s[1]=(d+M)*q,s[2]=(v-C)*q,s[3]=0,s[4]=(d-M)*z,s[5]=(1-(p+m))*z,s[6]=(y+S)*z,s[7]=0,s[8]=(v+C)*V,s[9]=(y-S)*V,s[10]=(1-(p+T))*V,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=$r.set(s[0],s[1],s[2]).length(),a=$r.set(s[4],s[5],s[6]).length(),o=$r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ki.copy(this);let h=1/r,f=1/a,u=1/o;return Ki.elements[0]*=h,Ki.elements[1]*=h,Ki.elements[2]*=h,Ki.elements[4]*=f,Ki.elements[5]*=f,Ki.elements[6]*=f,Ki.elements[8]*=u,Ki.elements[9]*=u,Ki.elements[10]*=u,e.setFromRotationMatrix(Ki),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Us){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),d,v;if(o===Us)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===hl)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Us){let l=this.elements,h=1/(e-t),f=1/(i-s),u=1/(a-r),p=(e+t)*h,d=(i+s)*f,v,T;if(o===Us)v=(a+r)*u,T=-2*u;else if(o===hl)v=r*u,T=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=T,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},$r=new N,Ki=new xn,Vp=new N(0,0,0),Hp=new N(1,1,1),Js=new N,Uo=new N,Ii=new N,Kf=new xn,jf=new ar,ps=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],f=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jf.setFromEuler(this),this.setFromQuaternion(jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ps.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gp=0,Qf=new N,Zr=new ar,Cs=new xn,No=new N,Ga=new N,Wp=new N,Xp=new ar,tu=new N(1,0,0),eu=new N(0,1,0),nu=new N(0,0,1),iu={type:"added"},qp={type:"removed"},Jr={type:"childadded",child:null},nc={type:"childremoved",child:null},ti=class n extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new ps,i=new ar,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xn},normalMatrix:{value:new De}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.premultiply(Zr),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qf.copy(t).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?No.copy(t):No.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cs.lookAt(Ga,No,this.up):Cs.lookAt(No,Ga,this.up),this.quaternion.setFromRotationMatrix(Cs),s&&(Cs.extractRotation(s.matrixWorld),Zr.setFromRotationMatrix(Cs),this.quaternion.premultiply(Zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),f=a(t.images),u=a(t.shapes),p=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){let l=[];for(let h in o){let f=o[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ti.DEFAULT_UP=new N(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=new N,Is=new N,ic=new N,Ps=new N,Kr=new N,jr=new N,su=new N,sc=new N,rc=new N,ac=new N,oc=new pn,lc=new pn,cc=new pn,tr=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ji.subVectors(t,e),s.cross(ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ji.subVectors(s,e),Is.subVectors(i,e),ic.subVectors(t,e);let a=ji.dot(ji),o=ji.dot(Is),l=ji.dot(ic),h=Is.dot(Is),f=Is.dot(ic),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(h*l-o*f)*p,v=(a*f-o*l)*p;return r.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ps.x),l.addScaledVector(a,Ps.y),l.addScaledVector(o,Ps.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,i),cc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(t,e,i,s){return ji.subVectors(i,e),Is.subVectors(t,e),ji.cross(Is).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),ji.cross(Is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Kr.subVectors(s,i),jr.subVectors(r,i),sc.subVectors(t,i);let l=Kr.dot(sc),h=jr.dot(sc);if(l<=0&&h<=0)return e.copy(i);rc.subVectors(t,s);let f=Kr.dot(rc),u=jr.dot(rc);if(f>=0&&u<=f)return e.copy(s);let p=l*u-f*h;if(p<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(i).addScaledVector(Kr,a);ac.subVectors(t,r);let d=Kr.dot(ac),v=jr.dot(ac);if(v>=0&&d<=v)return e.copy(r);let T=d*h-l*v;if(T<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(i).addScaledVector(jr,o);let y=f*v-d*u;if(y<=0&&u-f>=0&&d-v>=0)return su.subVectors(r,s),o=(u-f)/(u-f+(d-v)),e.copy(s).addScaledVector(su,o);let m=1/(y+T+p);return a=T*m,o=p*m,e.copy(i).addScaledVector(Kr,a).addScaledVector(jr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},zo={h:0,s:0,l:0};function hc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var be=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qe.workingColorSpace){if(t=Dp(t,1),e=Qn(e,0,1),i=Qn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=hc(a,r,t+1/3),this.g=hc(a,r,t),this.b=hc(a,r,t-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(t,e=Gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gn){let i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Qe.fromWorkingColorSpace(ci.copy(this),t),Math.round(Qn(ci.r*255,0,255))*65536+Math.round(Qn(ci.g*255,0,255))*256+Math.round(Qn(ci.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qe.workingColorSpace){Qe.fromWorkingColorSpace(ci.copy(this),e);let i=ci.r,s=ci.g,r=ci.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,f=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=Gn){Qe.fromWorkingColorSpace(ci.copy(this),t);let e=ci.r,i=ci.g,s=ci.b;return t!==Gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ks),this.setHSL(Ks.h+t,Ks.s+e,Ks.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ks),t.getHSL(zo);let i=Yl(Ks.h,zo.h,e),s=Yl(Ks.s,zo.s,e),r=Yl(Ks.l,zo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new be;be.NAMES=cd;var Yp=0,Bs=class extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ns(),this.name="",this.blending=ca,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Ac,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ec&&(i.blendSrc=this.blendSrc),this.blendDst!==Ac&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fe=class extends Bs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var On=new N,Fo=new Ct,xi=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Ds,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix3(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}};var dl=class extends xi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var pl=class extends xi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ce=class extends xi{constructor(t,e,i){super(new Float32Array(t),e,i)}},$p=0,Bi=new xn,fc=new ti,Qr=new N,Pi=new ks,Wa=new ks,Zn=new N,yn=class n extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ld(t)?pl:dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,e,i){return Bi.makeTranslation(t,e,i),this.applyMatrix4(Bi),this}scale(t,e,i){return Bi.makeScale(t,e,i),this.applyMatrix4(Bi),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(Zn.addVectors(Pi.min,Wa.min),Pi.expandByPoint(Zn),Zn.addVectors(Pi.max,Wa.max),Pi.expandByPoint(Zn)):(Pi.expandByPoint(Wa.min),Pi.expandByPoint(Wa.max))}Pi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Zn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Zn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,f=o.count;h<f;h++)Zn.fromBufferAttribute(o,h),l&&(Qr.fromBufferAttribute(t,h),Zn.add(Qr)),s=Math.max(s,i.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new N,l[B]=new N;let h=new N,f=new N,u=new N,p=new Ct,d=new Ct,v=new Ct,T=new N,y=new N;function m(B,L,R){h.fromBufferAttribute(i,B),f.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),p.fromBufferAttribute(r,B),d.fromBufferAttribute(r,L),v.fromBufferAttribute(r,R),f.sub(h),u.sub(h),d.sub(p),v.sub(p);let H=1/(d.x*v.y-v.x*d.y);isFinite(H)&&(T.copy(f).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(H),y.copy(u).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(H),o[B].add(T),o[L].add(T),o[R].add(T),l[B].add(y),l[L].add(y),l[R].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let B=0,L=S.length;B<L;++B){let R=S[B],H=R.start,st=R.count;for(let nt=H,at=H+st;nt<at;nt+=3)m(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let C=new N,M=new N,q=new N,z=new N;function V(B){q.fromBufferAttribute(s,B),z.copy(q);let L=o[B];C.copy(L),C.sub(q.multiplyScalar(q.dot(L))).normalize(),M.crossVectors(z,L);let H=M.dot(l[B])<0?-1:1;a.setXYZW(B,C.x,C.y,C.z,H)}for(let B=0,L=S.length;B<L;++B){let R=S[B],H=R.start,st=R.count;for(let nt=H,at=H+st;nt<at;nt+=3)V(t.getX(nt+0)),V(t.getX(nt+1)),V(t.getX(nt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,h=new N,f=new N,u=new N;if(t)for(let p=0,d=t.count;p<d;p+=3){let v=t.getX(p+0),T=t.getX(p+1),y=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,y),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),o.add(f),l.add(f),h.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Zn.fromBufferAttribute(t,e),Zn.normalize(),t.setXYZ(e,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function t(o,l){let h=o.array,f=o.itemSize,u=o.normalized,p=new h.constructor(l.length*f),d=0,v=0;for(let T=0,y=l.length;T<y;T++){o.isInterleavedBufferAttribute?d=l[T]*o.data.stride+o.offset:d=l[T]*f;for(let m=0;m<f;m++)p[v++]=h[d++]}return new xi(p,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let f=0,u=h.length;f<u;f++){let p=h[f],d=t(p,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],f=[];for(let u=0,p=h.length;u<p;u++){let d=h[u];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],u=r[h];for(let p=0,d=u.length;p<d;p++)f.push(u[p].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,f=a.length;h<f;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new xn,_r=new no,Oo=new ya,au=new N,ko=new N,Bo=new N,Vo=new N,uc=new N,Ho=new N,ou=new N,Go=new N,ht=class extends ti{constructor(t=new yn,e=new Fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let f=o[l],u=r[l];f!==0&&(uc.fromBufferAttribute(u,t),a?Ho.addScaledVector(uc,f):Ho.addScaledVector(uc.sub(e),f))}e.add(Ho)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),_r.copy(t.ray).recast(t.near),!(Oo.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Oo,au)===null||_r.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(ru.copy(r).invert(),_r.copy(t.ray).applyMatrix4(ru),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_r)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,T=p.length;v<T;v++){let y=p[v],m=a[y.materialIndex],S=Math.max(y.start,d.start),C=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let M=S,q=C;M<q;M+=3){let z=o.getX(M),V=o.getX(M+1),B=o.getX(M+2);s=Wo(this,m,t,i,h,f,u,z,V,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),T=Math.min(o.count,d.start+d.count);for(let y=v,m=T;y<m;y+=3){let S=o.getX(y),C=o.getX(y+1),M=o.getX(y+2);s=Wo(this,a,t,i,h,f,u,S,C,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,T=p.length;v<T;v++){let y=p[v],m=a[y.materialIndex],S=Math.max(y.start,d.start),C=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let M=S,q=C;M<q;M+=3){let z=M,V=M+1,B=M+2;s=Wo(this,m,t,i,h,f,u,z,V,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),T=Math.min(l.count,d.start+d.count);for(let y=v,m=T;y<m;y+=3){let S=y,C=y+1,M=y+2;s=Wo(this,a,t,i,h,f,u,S,C,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Zp(n,t,e,i,s,r,a,o){let l;if(t.side===Jn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===sr,o),l===null)return null;Go.copy(o),Go.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Go);return h<e.near||h>e.far?null:{distance:h,point:Go.clone(),object:n}}function Wo(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,ko),n.getVertexPosition(l,Bo),n.getVertexPosition(h,Vo);let f=Zp(n,t,e,i,ko,Bo,Vo,ou);if(f){let u=new N;tr.getBarycoord(ou,ko,Bo,Vo,u),s&&(f.uv=tr.getInterpolatedAttribute(s,o,l,h,u,new Ct)),r&&(f.uv1=tr.getInterpolatedAttribute(r,o,l,h,u,new Ct)),a&&(f.normal=tr.getInterpolatedAttribute(a,o,l,h,u,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let p={a:o,b:l,c:h,normal:new N,materialIndex:0};tr.getNormal(ko,Bo,Vo,p.normal),f.face=p,f.barycoord=u}return f}var ln=class n extends yn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],f=[],u=[],p=0,d=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,s,a,2),v("x","z","y",1,-1,t,i,-e,s,a,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(u,2));function v(T,y,m,S,C,M,q,z,V,B,L){let R=M/V,H=q/B,st=M/2,nt=q/2,at=z/2,Mt=V+1,rt=B+1,It=0,ct=0,Ut=new N;for(let Zt=0;Zt<rt;Zt++){let Ot=Zt*H-nt;for(let ie=0;ie<Mt;ie++){let Re=ie*R-st;Ut[T]=Re*S,Ut[y]=Ot*C,Ut[m]=at,h.push(Ut.x,Ut.y,Ut.z),Ut[T]=0,Ut[y]=0,Ut[m]=z>0?1:-1,f.push(Ut.x,Ut.y,Ut.z),u.push(ie/V),u.push(1-Zt/B),It+=1}}for(let Zt=0;Zt<B;Zt++)for(let Ot=0;Ot<V;Ot++){let ie=p+Ot+Mt*Zt,Re=p+Ot+Mt*(Zt+1),gt=p+(Ot+1)+Mt*(Zt+1),Lt=p+(Ot+1)+Mt*Zt;l.push(ie,Re,Lt),l.push(Re,gt,Lt),ct+=6}o.addGroup(d,ct,L),d+=ct,p+=It}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _a(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gi(n){let t={};for(let e=0;e<n.length;e++){let i=_a(n[e]);for(let s in i)t[s]=i[s]}return t}function Jp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}var Kp={clone:_a,merge:gi},jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ms=class extends Bs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_a(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ml=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Us}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},js=new N,lu=new Ct,cu=new Ct,Wn=class extends ml{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=uh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uh*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(js.x,js.y).multiplyScalar(-t/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(js.x,js.y).multiplyScalar(-t/js.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ql*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ta=-90,ea=1,gh=class extends ti{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(ta,ea,t,e);s.layers=this.layers,this.add(s);let r=new Wn(ta,ea,t,e);r.layers=this.layers,this.add(r);let a=new Wn(ta,ea,t,e);a.layers=this.layers,this.add(a);let o=new Wn(ta,ea,t,e);o.layers=this.layers,this.add(o);let l=new Wn(ta,ea,t,e);l.layers=this.layers,this.add(l);let h=new Wn(ta,ea,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Us)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,f]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(u,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},gl=class extends Si{constructor(t,e,i,s,r,a,o,l,h,f){t=t!==void 0?t:[],e=e!==void 0?e:pa,super(t,e,i,s,r,a,o,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xh=class extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new gl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:us}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:er});r.uniforms.tEquirect.value=e;let a=new ht(s,r),o=e.minFilter;return e.minFilter===Ar&&(e.minFilter=us),new gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},dc=new N,tm=new N,em=new De,Li=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=dc.subVectors(i,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(dc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||em.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new ya,Xo=new N,so=class{constructor(t=new Li,e=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Us){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],d=s[8],v=s[9],T=s[10],y=s[11],m=s[12],S=s[13],C=s[14],M=s[15];if(i[0].setComponents(l-r,p-h,y-d,M-m).normalize(),i[1].setComponents(l+r,p+h,y+d,M+m).normalize(),i[2].setComponents(l+a,p+f,y+v,M+S).normalize(),i[3].setComponents(l-a,p-f,y-v,M-S).normalize(),i[4].setComponents(l-o,p-u,y-T,M-C).normalize(),e===Us)i[5].setComponents(l+o,p+u,y+T,M+C).normalize();else if(e===hl)i[5].setComponents(o,u,T,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fd(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function nm(n){let t=new WeakMap;function e(o,l){let h=o.array,f=o.usage,u=h.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,f),o.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let f=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,f);else{u.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<u.length;d++){let v=u[p],T=u[d];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++p,u[p]=T)}u.length=p+1;for(let d=0,v=u.length;d<v;d++){let T=u[d];n.bufferSubData(h,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var ke=class n extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,f=l+1,u=t/o,p=e/l,d=[],v=[],T=[],y=[];for(let m=0;m<f;m++){let S=m*p-a;for(let C=0;C<h;C++){let M=C*u-r;v.push(M,-S,0),T.push(0,0,1),y.push(C/o),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let C=S+h*m,M=S+h*(m+1),q=S+1+h*(m+1),z=S+1+h*m;d.push(C,M,z),d.push(M,q,z)}this.setIndex(d),this.setAttribute("position",new Ce(v,3)),this.setAttribute("normal",new Ce(T,3)),this.setAttribute("uv",new Ce(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},im=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
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
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
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
}`,ze={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:fm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:xm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:bm,color_fragment:Mm,color_pars_fragment:wm,color_pars_vertex:Sm,color_vertex:Tm,common:Em,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Im,emissivemap_fragment:Pm,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:km,fog_vertex:Bm,fog_pars_vertex:Vm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:$m,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t0,lights_physical_pars_fragment:e0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:f0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:x0,morphtarget_pars_vertex:y0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:b0,normal_pars_fragment:M0,normal_pars_vertex:w0,normal_vertex:S0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:k0,shadowmap_vertex:B0,shadowmask_pars_fragment:V0,skinbase_vertex:H0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:$0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distanceRGBA_vert:hg,distanceRGBA_frag:fg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:_g,meshmatcap_vert:vg,meshmatcap_frag:bg,meshnormal_vert:Mg,meshnormal_frag:wg,meshphong_vert:Sg,meshphong_frag:Tg,meshphysical_vert:Eg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Ig,points_frag:Pg,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ug,sprite_frag:Ng},$t={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},hs={basic:{uniforms:gi([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gi([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new be(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gi([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gi([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gi([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new be(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gi([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gi([$t.points,$t.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gi([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gi([$t.common,$t.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gi([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gi([$t.sprite,$t.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:gi([$t.common,$t.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:gi([$t.lights,$t.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};hs.physical={uniforms:gi([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var qo={r:0,b:0,g:0},br=new ps,zg=new xn;function Fg(n,t,e,i,s,r,a){let o=new be(0),l=r===!0?0:1,h,f,u=null,p=0,d=null;function v(S){let C=S.isScene===!0?S.background:null;return C&&C.isTexture&&(C=(S.backgroundBlurriness>0?e:t).get(C)),C}function T(S){let C=!1,M=v(S);M===null?m(o,l):M&&M.isColor&&(m(M,1),C=!0);let q=n.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,a):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,C){let M=v(C);M&&(M.isCubeTexture||M.mapping===Pl)?(f===void 0&&(f=new ht(new ln(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:_a(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(q,z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),br.copy(C.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(br)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==un,(u!==M||p!==M.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=M,p=M.version,d=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ht(new ke(2,2),new ms({name:"BackgroundMaterial",uniforms:_a(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(M.colorSpace)!==un,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function m(S,C){S.getRGB(qo,hd(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,C,a)}return{getClearColor:function(){return o},setClearColor:function(S,C=1){o.set(S),l=C,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:T,addToRenderList:y}}function Og(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,a=!1;function o(R,H,st,nt,at){let Mt=!1,rt=u(nt,st,H);r!==rt&&(r=rt,h(r.object)),Mt=d(R,nt,st,at),Mt&&v(R,nt,st,at),at!==null&&t.update(at,n.ELEMENT_ARRAY_BUFFER),(Mt||a)&&(a=!1,M(R,H,st,nt),at!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function f(R){return n.deleteVertexArray(R)}function u(R,H,st){let nt=st.wireframe===!0,at=i[R.id];at===void 0&&(at={},i[R.id]=at);let Mt=at[H.id];Mt===void 0&&(Mt={},at[H.id]=Mt);let rt=Mt[nt];return rt===void 0&&(rt=p(l()),Mt[nt]=rt),rt}function p(R){let H=[],st=[],nt=[];for(let at=0;at<e;at++)H[at]=0,st[at]=0,nt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:nt,object:R,attributes:{},index:null}}function d(R,H,st,nt){let at=r.attributes,Mt=H.attributes,rt=0,It=st.getAttributes();for(let ct in It)if(It[ct].location>=0){let Zt=at[ct],Ot=Mt[ct];if(Ot===void 0&&(ct==="instanceMatrix"&&R.instanceMatrix&&(Ot=R.instanceMatrix),ct==="instanceColor"&&R.instanceColor&&(Ot=R.instanceColor)),Zt===void 0||Zt.attribute!==Ot||Ot&&Zt.data!==Ot.data)return!0;rt++}return r.attributesNum!==rt||r.index!==nt}function v(R,H,st,nt){let at={},Mt=H.attributes,rt=0,It=st.getAttributes();for(let ct in It)if(It[ct].location>=0){let Zt=Mt[ct];Zt===void 0&&(ct==="instanceMatrix"&&R.instanceMatrix&&(Zt=R.instanceMatrix),ct==="instanceColor"&&R.instanceColor&&(Zt=R.instanceColor));let Ot={};Ot.attribute=Zt,Zt&&Zt.data&&(Ot.data=Zt.data),at[ct]=Ot,rt++}r.attributes=at,r.attributesNum=rt,r.index=nt}function T(){let R=r.newAttributes;for(let H=0,st=R.length;H<st;H++)R[H]=0}function y(R){m(R,0)}function m(R,H){let st=r.newAttributes,nt=r.enabledAttributes,at=r.attributeDivisors;st[R]=1,nt[R]===0&&(n.enableVertexAttribArray(R),nt[R]=1),at[R]!==H&&(n.vertexAttribDivisor(R,H),at[R]=H)}function S(){let R=r.newAttributes,H=r.enabledAttributes;for(let st=0,nt=H.length;st<nt;st++)H[st]!==R[st]&&(n.disableVertexAttribArray(st),H[st]=0)}function C(R,H,st,nt,at,Mt,rt){rt===!0?n.vertexAttribIPointer(R,H,st,at,Mt):n.vertexAttribPointer(R,H,st,nt,at,Mt)}function M(R,H,st,nt){T();let at=nt.attributes,Mt=st.getAttributes(),rt=H.defaultAttributeValues;for(let It in Mt){let ct=Mt[It];if(ct.location>=0){let Ut=at[It];if(Ut===void 0&&(It==="instanceMatrix"&&R.instanceMatrix&&(Ut=R.instanceMatrix),It==="instanceColor"&&R.instanceColor&&(Ut=R.instanceColor)),Ut!==void 0){let Zt=Ut.normalized,Ot=Ut.itemSize,ie=t.get(Ut);if(ie===void 0)continue;let Re=ie.buffer,gt=ie.type,Lt=ie.bytesPerElement,se=gt===n.INT||gt===n.UNSIGNED_INT||Ut.gpuType===ef;if(Ut.isInterleavedBufferAttribute){let Ft=Ut.data,ue=Ft.stride,ce=Ut.offset;if(Ft.isInstancedInterleavedBuffer){for(let ae=0;ae<ct.locationSize;ae++)m(ct.location+ae,Ft.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let ae=0;ae<ct.locationSize;ae++)y(ct.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let ae=0;ae<ct.locationSize;ae++)C(ct.location+ae,Ot/ct.locationSize,gt,Zt,ue*Lt,(ce+Ot/ct.locationSize*ae)*Lt,se)}else{if(Ut.isInstancedBufferAttribute){for(let Ft=0;Ft<ct.locationSize;Ft++)m(ct.location+Ft,Ut.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Ft=0;Ft<ct.locationSize;Ft++)y(ct.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ft=0;Ft<ct.locationSize;Ft++)C(ct.location+Ft,Ot/ct.locationSize,gt,Zt,Ot*Lt,Ot/ct.locationSize*Ft*Lt,se)}}else if(rt!==void 0){let Zt=rt[It];if(Zt!==void 0)switch(Zt.length){case 2:n.vertexAttrib2fv(ct.location,Zt);break;case 3:n.vertexAttrib3fv(ct.location,Zt);break;case 4:n.vertexAttrib4fv(ct.location,Zt);break;default:n.vertexAttrib1fv(ct.location,Zt)}}}}S()}function q(){B();for(let R in i){let H=i[R];for(let st in H){let nt=H[st];for(let at in nt)f(nt[at].object),delete nt[at];delete H[st]}delete i[R]}}function z(R){if(i[R.id]===void 0)return;let H=i[R.id];for(let st in H){let nt=H[st];for(let at in nt)f(nt[at].object),delete nt[at];delete H[st]}delete i[R.id]}function V(R){for(let H in i){let st=i[H];if(st[R.id]===void 0)continue;let nt=st[R.id];for(let at in nt)f(nt[at].object),delete nt[at];delete st[R.id]}}function B(){L(),a=!0,r!==s&&(r=s,h(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:z,releaseStatesOfProgram:V,initAttributes:T,enableAttribute:y,disableUnusedAttributes:S}}function kg(n,t,e){let i;function s(h){i=h}function r(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function a(h,f,u){u!==0&&(n.drawArraysInstanced(i,h,f,u),e.update(f,i,u))}function o(h,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,u);let d=0;for(let v=0;v<u;v++)d+=f[v];e.update(d,i,1)}function l(h,f,u,p){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)a(h[v],f[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,f,0,p,0,u);let v=0;for(let T=0;T<u;T++)v+=f[T]*p[T];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(V){return!(V!==Qi&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(V){let B=V===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Os&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ds&&!B)}function l(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),q=v>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:q,maxSamples:z}}function Vg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Li,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||i!==0||s;return s=p,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=f(u,p,0)},this.setState=function(u,p,d){let v=u.clippingPlanes,T=u.clipIntersection,y=u.clipShadows,m=n.get(u);if(!s||v===null||v.length===0||r&&!y)r?f(null):h();else{let S=r?0:i,C=S*4,M=m.clippingState||null;l.value=M,M=f(v,p,C,d);for(let q=0;q!==C;++q)M[q]=e[q];m.clippingState=M,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,p,d,v){let T=u!==null?u.length:0,y=null;if(T!==0){if(y=l.value,v!==!0||y===null){let m=d+T*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<m)&&(y=new Float32Array(m));for(let C=0,M=d;C!==T;++C,M+=4)a.copy(u[C]).applyMatrix4(S,o),a.normal.toArray(y,M),y[M+3]=a.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function Hg(n){let t=new WeakMap;function e(a,o){return o===Nc?a.mapping=pa:o===zc&&(a.mapping=ma),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Nc||o===zc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new xh(l.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var xl=class extends ml{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oa=4,hu=[.125,.215,.35,.446,.526,.582],Tr=20,pc=new xl,fu=new be,mc=null,gc=0,xc=0,yc=!1,wr=(1+Math.sqrt(5))/2,na=1/wr,uu=[new N(-wr,na,0),new N(wr,na,0),new N(-na,0,wr),new N(na,0,wr),new N(0,wr,-na),new N(0,wr,na),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],yl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,xc),this._renderer.xr.enabled=yc,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pa||t.mapping===ma?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:us,minFilter:us,generateMipmaps:!1,type:po,format:Qi,colorSpace:Ia,depthBuffer:!1},s=du(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Wg(r,t,e)}return s}_compileMaterial(t){let e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,pc)}_sceneToCubeUV(t,e,i,s){let o=new Wn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(fu),f.toneMapping=nr,f.autoClear=!1;let d=new Fe({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),v=new ht(new ln,d),T=!1,y=t.background;y?y.isColor&&(d.color.copy(y),t.background=null,T=!0):(d.color.copy(fu),T=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));let C=this._cubeSize;Yo(s,S*C,m>2?C:0,C,C),f.setRenderTarget(s),T&&f.render(v,o),f.render(t,o)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===pa||t.mapping===ma;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Yo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,pc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uu[(s-r-1)%uu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,u=new ht(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),T=r/v,y=isFinite(r)?1+Math.floor(f*T):Tr;y>Tr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);let m=[],S=0;for(let V=0;V<Tr;++V){let B=V/T,L=Math.exp(-B*B/2);m.push(L),V===0?S+=L:V<y&&(S+=2*L)}for(let V=0;V<m.length;V++)m[V]=m[V]/S;p.envMap.value=t.texture,p.samples.value=y,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:C}=this;p.dTheta.value=v,p.mipInt.value=C-i;let M=this._sizeLods[s],q=3*M*(s>C-oa?s-C+oa:0),z=4*(this._cubeSize-M);Yo(e,q,z,3*M,2*M),l.setRenderTarget(e),l.render(u,pc)}};function Gg(n){let t=[],e=[],i=[],s=n,r=n-oa+1+hu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-oa?l=hu[a-n+oa-1]:a===0&&(l=0),i.push(l);let h=1/(o-2),f=-h,u=1+h,p=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,v=6,T=3,y=2,m=1,S=new Float32Array(T*v*d),C=new Float32Array(y*v*d),M=new Float32Array(m*v*d);for(let z=0;z<d;z++){let V=z%3*2/3-1,B=z>2?0:-1,L=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];S.set(L,T*v*z),C.set(p,y*v*z);let R=[z,z,z,z,z,z];M.set(R,m*v*z)}let q=new yn;q.setAttribute("position",new xi(S,T)),q.setAttribute("uv",new xi(C,y)),q.setAttribute("faceIndex",new xi(M,m)),t.push(q),s>oa&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function du(n,t,e){let i=new es(n,t,e);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wg(n,t,e){let i=new Float32Array(Tr),s=new N(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function pu(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function mu(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function lf(){return`

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
	`}function Xg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===Nc||l===zc,f=l===pa||l===ma;if(h||f){let u=t.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new yl(n)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return h&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new yl(n)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,h=6;for(let f=0;f<h;f++)o[f]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function qg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Za("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yg(n,t,e,i){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let T=p.morphAttributes[v];for(let y=0,m=T.length;y<m;y++)t.remove(T[y])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let v in p)t.update(p[v],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let v in d){let T=d[v];for(let y=0,m=T.length;y<m;y++)t.update(T[y],n.ARRAY_BUFFER)}}function h(u){let p=[],d=u.index,v=u.attributes.position,T=0;if(d!==null){let S=d.array;T=d.version;for(let C=0,M=S.length;C<M;C+=3){let q=S[C+0],z=S[C+1],V=S[C+2];p.push(q,z,z,V,V,q)}}else if(v!==void 0){let S=v.array;T=v.version;for(let C=0,M=S.length/3-1;C<M;C+=3){let q=C+0,z=C+1,V=C+2;p.push(q,z,z,V,V,q)}}else return;let y=new(ld(p)?pl:dl)(p,1);y.version=T;let m=r.get(u);m&&t.remove(m),r.set(u,y)}function f(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function $g(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),e.update(d,i,1)}function h(p,d,v){v!==0&&(n.drawElementsInstanced(i,d,r,p*a,v),e.update(d,i,v))}function f(p,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,v);let y=0;for(let m=0;m<v;m++)y+=d[m];e.update(y,i,1)}function u(p,d,v,T){if(v===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<p.length;m++)h(p[m]/a,d[m],T[m]);else{y.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,T,0,v);let m=0;for(let S=0;S<v;S++)m+=d[S]*T[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Zg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Jg(n,t,e){let i=new WeakMap,s=new pn;function r(a,o,l){let h=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0,p=i.get(o);if(p===void 0||p.count!==u){let L=function(){V.dispose(),i.delete(o),o.removeEventListener("dispose",L)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,y=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],C=0;d===!0&&(C=1),v===!0&&(C=2),T===!0&&(C=3);let M=o.attributes.position.count*C,q=1;M>t.maxTextureSize&&(q=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let z=new Float32Array(M*q*4*u),V=new ul(z,M,q,u);V.type=Ds,V.needsUpdate=!0;let B=C*4;for(let R=0;R<u;R++){let H=y[R],st=m[R],nt=S[R],at=M*q*4*R;for(let Mt=0;Mt<H.count;Mt++){let rt=Mt*B;d===!0&&(s.fromBufferAttribute(H,Mt),z[at+rt+0]=s.x,z[at+rt+1]=s.y,z[at+rt+2]=s.z,z[at+rt+3]=0),v===!0&&(s.fromBufferAttribute(st,Mt),z[at+rt+4]=s.x,z[at+rt+5]=s.y,z[at+rt+6]=s.z,z[at+rt+7]=0),T===!0&&(s.fromBufferAttribute(nt,Mt),z[at+rt+8]=s.x,z[at+rt+9]=s.y,z[at+rt+10]=s.z,z[at+rt+11]=nt.itemSize===4?s.w:1)}}p={count:u,texture:V,size:new Ct(M,q)},i.set(o,p),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let T=0;T<h.length;T++)d+=h[T];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Kg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var _l=class extends Si{constructor(t,e,i,s,r,a,o,l,h,f=ha){if(f!==ha&&f!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ha&&(i=Rr),i===void 0&&f===xa&&(i=ga),super(null,s,r,a,o,l,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ts,this.minFilter=l!==void 0?l:ts,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ud=new Si,gu=new _l(1,1),dd=new ul,pd=new mh,md=new gl,xu=[],yu=[],_u=new Float32Array(16),vu=new Float32Array(9),bu=new Float32Array(4);function Pa(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=xu[s];if(r===void 0&&(r=new Float32Array(s),xu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Xn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dl(n,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xn(e,t))return;n.uniform2fv(this.addr,t),qn(e,t)}}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xn(e,t))return;n.uniform3fv(this.addr,t),qn(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xn(e,t))return;n.uniform4fv(this.addr,t),qn(e,t)}}function nx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qn(e,t)}else{if(Xn(e,i))return;bu.set(i),n.uniformMatrix2fv(this.addr,!1,bu),qn(e,i)}}function ix(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qn(e,t)}else{if(Xn(e,i))return;vu.set(i),n.uniformMatrix3fv(this.addr,!1,vu),qn(e,i)}}function sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qn(e,t)}else{if(Xn(e,i))return;_u.set(i),n.uniformMatrix4fv(this.addr,!1,_u),qn(e,i)}}function rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xn(e,t))return;n.uniform2iv(this.addr,t),qn(e,t)}}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xn(e,t))return;n.uniform3iv(this.addr,t),qn(e,t)}}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xn(e,t))return;n.uniform4iv(this.addr,t),qn(e,t)}}function cx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xn(e,t))return;n.uniform2uiv(this.addr,t),qn(e,t)}}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xn(e,t))return;n.uniform3uiv(this.addr,t),qn(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xn(e,t))return;n.uniform4uiv(this.addr,t),qn(e,t)}}function dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gu.compareFunction=od,r=gu):r=ud,e.setTexture2D(t||r,s)}function px(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pd,s)}function mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||md,s)}function gx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||dd,s)}function xx(n){switch(n){case 5126:return jg;case 35664:return Qg;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return fx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function yx(n,t){n.uniform1fv(this.addr,t)}function _x(n,t){let e=Pa(t,this.size,2);n.uniform2fv(this.addr,e)}function vx(n,t){let e=Pa(t,this.size,3);n.uniform3fv(this.addr,e)}function bx(n,t){let e=Pa(t,this.size,4);n.uniform4fv(this.addr,e)}function Mx(n,t){let e=Pa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wx(n,t){let e=Pa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sx(n,t){let e=Pa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Tx(n,t){n.uniform1iv(this.addr,t)}function Ex(n,t){n.uniform2iv(this.addr,t)}function Ax(n,t){n.uniform3iv(this.addr,t)}function Rx(n,t){n.uniform4iv(this.addr,t)}function Cx(n,t){n.uniform1uiv(this.addr,t)}function Ix(n,t){n.uniform2uiv(this.addr,t)}function Px(n,t){n.uniform3uiv(this.addr,t)}function Lx(n,t){n.uniform4uiv(this.addr,t)}function Dx(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);Xn(i,r)||(n.uniform1iv(this.addr,r),qn(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ud,r[a])}function Ux(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);Xn(i,r)||(n.uniform1iv(this.addr,r),qn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pd,r[a])}function Nx(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);Xn(i,r)||(n.uniform1iv(this.addr,r),qn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||md,r[a])}function zx(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);Xn(i,r)||(n.uniform1iv(this.addr,r),qn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||dd,r[a])}function Fx(n){switch(n){case 5126:return yx;case 35664:return _x;case 35665:return vx;case 35666:return bx;case 35674:return Mx;case 35675:return wx;case 35676:return Sx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ex;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Ix;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return zx}}var yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xx(e.type)}},_h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Mu(n,t){n.seq.push(t),n.map[t.id]=t}function Ox(n,t,e){let i=n.name,s=i.length;for(_c.lastIndex=0;;){let r=_c.exec(i),a=_c.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Mu(e,h===void 0?new yh(o,n,t):new _h(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new vh(o),Mu(e,u)),e=u}}}var ua=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ox(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function wu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var kx=37297,Bx=0;function Vx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Su=new De;function Hx(n){Qe._getMatrix(Su,Qe.workingColorSpace,n);let t=`mat3( ${Su.elements.map(e=>e.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Ll:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Tu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vx(n.getShaderSource(t),a)}else return s}function Gx(n,t){let e=Hx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wx(n,t){let e;switch(t){case mp:e="Linear";break;case gp:e="Reinhard";break;case xp:e="Cineon";break;case yp:e="ACESFilmic";break;case vp:e="AgX";break;case bp:e="Neutral";break;case _p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $o=new N;function Xx(){Qe.getLuminanceCoefficients($o);let n=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function Yx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $x(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ja(n){return n!==""}function Eu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(Zx,Kx)}var Jx=new Map;function Kx(n,t){let e=ze[t];if(e===void 0){let i=Jx.get(t);if(i!==void 0)e=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bh(e)}var jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(n){return n.replace(jx,Qx)}function Qx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ty(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ls&&(t="SHADOWMAP_TYPE_VSM"),t}function ey(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pa:case ma:t="ENVMAP_TYPE_CUBE";break;case Pl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ny(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ma&&(t="ENVMAP_MODE_REFRACTION"),t}function iy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tf:t="ENVMAP_BLENDING_MULTIPLY";break;case dp:t="ENVMAP_BLENDING_MIX";break;case pp:t="ENVMAP_BLENDING_ADD";break}return t}function sy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ry(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ty(e),h=ey(e),f=ny(e),u=iy(e),p=sy(e),d=qx(e),v=Yx(r),T=s.createProgram(),y,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ja).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ja).join(`
`),m.length>0&&(m+=`
`)):(y=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nr?"#define TONE_MAPPING":"",e.toneMapping!==nr?ze.tonemapping_pars_fragment:"",e.toneMapping!==nr?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Gx("linearToOutputTexel",e.outputColorSpace),Xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ja).join(`
`)),a=bh(a),a=Eu(a,e),a=Au(a,e),o=bh(o),o=Eu(o,e),o=Au(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=S+y+a,M=S+m+o,q=wu(s,s.VERTEX_SHADER,C),z=wu(s,s.FRAGMENT_SHADER,M);s.attachShader(T,q),s.attachShader(T,z),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function V(H){if(n.debug.checkShaderErrors){let st=s.getProgramInfoLog(T).trim(),nt=s.getShaderInfoLog(q).trim(),at=s.getShaderInfoLog(z).trim(),Mt=!0,rt=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,T,q,z);else{let It=Tu(s,q,"vertex"),ct=Tu(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+It+`
`+ct)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||at==="")&&(rt=!1);rt&&(H.diagnostics={runnable:Mt,programLog:st,vertexShader:{log:nt,prefix:y},fragmentShader:{log:at,prefix:m}})}s.deleteShader(q),s.deleteShader(z),B=new ua(s,T),L=$x(s,T)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let L;this.getAttributes=function(){return L===void 0&&V(this),L};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,kx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=z,this}var ay=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wh(t),e.set(t,i)),i}},wh=class{constructor(t){this.id=ay++,this.code=t,this.usedTimes=0}};function oy(n,t,e,i,s,r,a){let o=new io,l=new Mh,h=new Set,f=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return h.add(L),L===0?"uv":`uv${L}`}function y(L,R,H,st,nt){let at=st.fog,Mt=nt.geometry,rt=L.isMeshStandardMaterial?st.environment:null,It=(L.isMeshStandardMaterial?e:t).get(L.envMap||rt),ct=It&&It.mapping===Pl?It.image.height:null,Ut=v[L.type];L.precision!==null&&(d=s.getMaxPrecision(L.precision),d!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",d,"instead."));let Zt=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Ot=Zt!==void 0?Zt.length:0,ie=0;Mt.morphAttributes.position!==void 0&&(ie=1),Mt.morphAttributes.normal!==void 0&&(ie=2),Mt.morphAttributes.color!==void 0&&(ie=3);let Re,gt,Lt,se;if(Ut){let Be=hs[Ut];Re=Be.vertexShader,gt=Be.fragmentShader}else Re=L.vertexShader,gt=L.fragmentShader,l.update(L),Lt=l.getVertexShaderID(L),se=l.getFragmentShaderID(L);let Ft=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ce=nt.isInstancedMesh===!0,ae=nt.isBatchedMesh===!0,Ue=!!L.map,wt=!!L.matcap,Dt=!!It,O=!!L.aoMap,re=!!L.lightMap,xt=!!L.bumpMap,Nt=!!L.normalMap,Pt=!!L.displacementMap,_e=!!L.emissiveMap,Yt=!!L.metalnessMap,U=!!L.roughnessMap,A=L.anisotropy>0,tt=L.clearcoat>0,pt=L.dispersion>0,ut=L.iridescence>0,mt=L.sheen>0,Ht=L.transmission>0,zt=A&&!!L.anisotropyMap,Xt=tt&&!!L.clearcoatMap,Pe=tt&&!!L.clearcoatNormalMap,At=tt&&!!L.clearcoatRoughnessMap,Jt=ut&&!!L.iridescenceMap,de=ut&&!!L.iridescenceThicknessMap,pe=mt&&!!L.sheenColorMap,Kt=mt&&!!L.sheenRoughnessMap,Le=!!L.specularMap,jt=!!L.specularColorMap,Ze=!!L.specularIntensityMap,Y=Ht&&!!L.transmissionMap,qt=Ht&&!!L.thicknessMap,ft=!!L.gradientMap,K=!!L.alphaMap,Bt=L.alphaTest>0,Gt=!!L.alphaHash,Me=!!L.extensions,rn=nr;L.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(rn=n.toneMapping);let Tn={shaderID:Ut,shaderType:L.type,shaderName:L.name,vertexShader:Re,fragmentShader:gt,defines:L.defines,customVertexShaderID:Lt,customFragmentShaderID:se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:d,batching:ae,batchingColor:ae&&nt._colorsTexture!==null,instancing:ce,instancingColor:ce&&nt.instanceColor!==null,instancingMorph:ce&&nt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Ia,alphaToCoverage:!!L.alphaToCoverage,map:Ue,matcap:wt,envMap:Dt,envMapMode:Dt&&It.mapping,envMapCubeUVHeight:ct,aoMap:O,lightMap:re,bumpMap:xt,normalMap:Nt,displacementMap:p&&Pt,emissiveMap:_e,normalMapObjectSpace:Nt&&L.normalMapType===Tp,normalMapTangentSpace:Nt&&L.normalMapType===ad,metalnessMap:Yt,roughnessMap:U,anisotropy:A,anisotropyMap:zt,clearcoat:tt,clearcoatMap:Xt,clearcoatNormalMap:Pe,clearcoatRoughnessMap:At,dispersion:pt,iridescence:ut,iridescenceMap:Jt,iridescenceThicknessMap:de,sheen:mt,sheenColorMap:pe,sheenRoughnessMap:Kt,specularMap:Le,specularColorMap:jt,specularIntensityMap:Ze,transmission:Ht,transmissionMap:Y,thicknessMap:qt,gradientMap:ft,opaque:L.transparent===!1&&L.blending===ca&&L.alphaToCoverage===!1,alphaMap:K,alphaTest:Bt,alphaHash:Gt,combine:L.combine,mapUv:Ue&&T(L.map.channel),aoMapUv:O&&T(L.aoMap.channel),lightMapUv:re&&T(L.lightMap.channel),bumpMapUv:xt&&T(L.bumpMap.channel),normalMapUv:Nt&&T(L.normalMap.channel),displacementMapUv:Pt&&T(L.displacementMap.channel),emissiveMapUv:_e&&T(L.emissiveMap.channel),metalnessMapUv:Yt&&T(L.metalnessMap.channel),roughnessMapUv:U&&T(L.roughnessMap.channel),anisotropyMapUv:zt&&T(L.anisotropyMap.channel),clearcoatMapUv:Xt&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&T(L.sheenRoughnessMap.channel),specularMapUv:Le&&T(L.specularMap.channel),specularColorMapUv:jt&&T(L.specularColorMap.channel),specularIntensityMapUv:Ze&&T(L.specularIntensityMap.channel),transmissionMapUv:Y&&T(L.transmissionMap.channel),thicknessMapUv:qt&&T(L.thicknessMap.channel),alphaMapUv:K&&T(L.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(Nt||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!Mt.attributes.uv&&(Ue||K),fog:!!at,useFog:L.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ue,skinning:nt.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:rn,decodeVideoTexture:Ue&&L.map.isVideoTexture===!0&&Qe.getTransfer(L.map.colorSpace)===un,decodeVideoTextureEmissive:_e&&L.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(L.emissiveMap.colorSpace)===un,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ln,flipSided:L.side===Jn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Me&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&L.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Tn.vertexUv1s=h.has(1),Tn.vertexUv2s=h.has(2),Tn.vertexUv3s=h.has(3),h.clear(),Tn}function m(L){let R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(let H in L.defines)R.push(H),R.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(S(R,L),C(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function S(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function C(L,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),L.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),L.push(o.mask)}function M(L){let R=v[L.type],H;if(R){let st=hs[R];H=Kp.clone(st.uniforms)}else H=L.uniforms;return H}function q(L,R){let H;for(let st=0,nt=f.length;st<nt;st++){let at=f[st];if(at.cacheKey===R){H=at,++H.usedTimes;break}}return H===void 0&&(H=new ry(n,R,L,r),f.push(H)),H}function z(L){if(--L.usedTimes===0){let R=f.indexOf(L);f[R]=f[f.length-1],f.pop(),L.destroy()}}function V(L){l.remove(L)}function B(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:q,releaseProgram:z,releaseShaderCache:V,programs:f,dispose:B}}function ly(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Iu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,p,d,v,T,y){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:d,groupOrder:v,renderOrder:u.renderOrder,z:T,group:y},n[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=d,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=T,m.group=y),t++,m}function o(u,p,d,v,T,y){let m=a(u,p,d,v,T,y);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,p,d,v,T,y){let m=a(u,p,d,v,T,y);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function h(u,p){e.length>1&&e.sort(u||cy),i.length>1&&i.sort(p||Iu),s.length>1&&s.sort(p||Iu)}function f(){for(let u=t,p=n.length;u<p;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:f,sort:h}}function hy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Pu,n.set(i,[a])):s>=r.length?(a=new Pu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function fy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new be};break;case"SpotLight":e={position:new N,direction:new N,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new be,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new be,groundColor:new be};break;case"RectAreaLight":e={color:new be,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function uy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var dy=0;function py(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function my(n){let t=new fy,e=uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);let s=new N,r=new xn,a=new xn;function o(h){let f=0,u=0,p=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,v=0,T=0,y=0,m=0,S=0,C=0,M=0,q=0,z=0,V=0;h.sort(py);for(let L=0,R=h.length;L<R;L++){let H=h[L],st=H.color,nt=H.intensity,at=H.distance,Mt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=st.r*nt,u+=st.g*nt,p+=st.b*nt;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)i.probe[rt].addScaledVector(H.sh.coefficients[rt],nt);V++}else if(H.isDirectionalLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let It=H.shadow,ct=e.get(H);ct.shadowIntensity=It.intensity,ct.shadowBias=It.bias,ct.shadowNormalBias=It.normalBias,ct.shadowRadius=It.radius,ct.shadowMapSize=It.mapSize,i.directionalShadow[d]=ct,i.directionalShadowMap[d]=Mt,i.directionalShadowMatrix[d]=H.shadow.matrix,S++}i.directional[d]=rt,d++}else if(H.isSpotLight){let rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy(st).multiplyScalar(nt),rt.distance=at,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,i.spot[T]=rt;let It=H.shadow;if(H.map&&(i.spotLightMap[q]=H.map,q++,It.updateMatrices(H),H.castShadow&&z++),i.spotLightMatrix[T]=It.matrix,H.castShadow){let ct=e.get(H);ct.shadowIntensity=It.intensity,ct.shadowBias=It.bias,ct.shadowNormalBias=It.normalBias,ct.shadowRadius=It.radius,ct.shadowMapSize=It.mapSize,i.spotShadow[T]=ct,i.spotShadowMap[T]=Mt,M++}T++}else if(H.isRectAreaLight){let rt=t.get(H);rt.color.copy(st).multiplyScalar(nt),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=rt,y++}else if(H.isPointLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){let It=H.shadow,ct=e.get(H);ct.shadowIntensity=It.intensity,ct.shadowBias=It.bias,ct.shadowNormalBias=It.normalBias,ct.shadowRadius=It.radius,ct.shadowMapSize=It.mapSize,ct.shadowCameraNear=It.camera.near,ct.shadowCameraFar=It.camera.far,i.pointShadow[v]=ct,i.pointShadowMap[v]=Mt,i.pointShadowMatrix[v]=H.shadow.matrix,C++}i.point[v]=rt,v++}else if(H.isHemisphereLight){let rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar(nt),rt.groundColor.copy(H.groundColor).multiplyScalar(nt),i.hemi[m]=rt,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$t.LTC_FLOAT_1,i.rectAreaLTC2=$t.LTC_FLOAT_2):(i.rectAreaLTC1=$t.LTC_HALF_1,i.rectAreaLTC2=$t.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=p;let B=i.hash;(B.directionalLength!==d||B.pointLength!==v||B.spotLength!==T||B.rectAreaLength!==y||B.hemiLength!==m||B.numDirectionalShadows!==S||B.numPointShadows!==C||B.numSpotShadows!==M||B.numSpotMaps!==q||B.numLightProbes!==V)&&(i.directional.length=d,i.spot.length=T,i.rectArea.length=y,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+q-z,i.spotLightMap.length=q,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=V,B.directionalLength=d,B.pointLength=v,B.spotLength=T,B.rectAreaLength=y,B.hemiLength=m,B.numDirectionalShadows=S,B.numPointShadows=C,B.numSpotShadows=M,B.numSpotMaps=q,B.numLightProbes=V,i.version=dy++)}function l(h,f){let u=0,p=0,d=0,v=0,T=0,y=f.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){let C=h[m];if(C.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),u++}else if(C.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),d++}else if(C.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(y),a.identity(),r.copy(C.matrixWorld),r.premultiply(y),a.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(y),p++}else if(C.isHemisphereLight){let M=i.hemi[T];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(y),T++}}}return{setup:o,setupView:l,state:i}}function Lu(n){let t=new my(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function a(f){i.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gy(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Lu(n),t.set(s,[o])):r>=a.length?(o=new Lu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Sh=class extends Bs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Th=class extends Bs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xy=`void main() {
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
}`;function _y(n,t,e){let i=new so,s=new Ct,r=new Ct,a=new pn,o=new Sh({depthPacking:Sp}),l=new Th,h={},f=e.maxTextureSize,u={[sr]:Jn,[Jn]:sr,[Ln]:Ln},p=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:xy,fragmentShader:yy}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let v=new yn;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new ht(v,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let m=this.type;this.render=function(z,V,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;let L=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),st=n.state;st.setBlending(er),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let nt=m!==Ls&&this.type===Ls,at=m===Ls&&this.type!==Ls;for(let Mt=0,rt=z.length;Mt<rt;Mt++){let It=z[Mt],ct=It.shadow;if(ct===void 0){console.warn("THREE.WebGLShadowMap:",It,"has no shadow.");continue}if(ct.autoUpdate===!1&&ct.needsUpdate===!1)continue;s.copy(ct.mapSize);let Ut=ct.getFrameExtents();if(s.multiply(Ut),r.copy(ct.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Ut.x),s.x=r.x*Ut.x,ct.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Ut.y),s.y=r.y*Ut.y,ct.mapSize.y=r.y)),ct.map===null||nt===!0||at===!0){let Ot=this.type!==Ls?{minFilter:ts,magFilter:ts}:{};ct.map!==null&&ct.map.dispose(),ct.map=new es(s.x,s.y,Ot),ct.map.texture.name=It.name+".shadowMap",ct.camera.updateProjectionMatrix()}n.setRenderTarget(ct.map),n.clear();let Zt=ct.getViewportCount();for(let Ot=0;Ot<Zt;Ot++){let ie=ct.getViewport(Ot);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),st.viewport(a),ct.updateMatrices(It,Ot),i=ct.getFrustum(),M(V,B,ct.camera,It,this.type)}ct.isPointLightShadow!==!0&&this.type===Ls&&S(ct,B),ct.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(L,R,H)};function S(z,V){let B=t.update(T);p.defines.VSM_SAMPLES!==z.blurSamples&&(p.defines.VSM_SAMPLES=z.blurSamples,d.defines.VSM_SAMPLES=z.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new es(s.x,s.y)),p.uniforms.shadow_pass.value=z.map.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(V,null,B,p,T,null),d.uniforms.shadow_pass.value=z.mapPass.texture,d.uniforms.resolution.value=z.mapSize,d.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(V,null,B,d,T,null)}function C(z,V,B,L){let R=null,H=B.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=B.isPointLight===!0?l:o,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){let st=R.uuid,nt=V.uuid,at=h[st];at===void 0&&(at={},h[st]=at);let Mt=at[nt];Mt===void 0&&(Mt=R.clone(),at[nt]=Mt,V.addEventListener("dispose",q)),R=Mt}if(R.visible=V.visible,R.wireframe=V.wireframe,L===Ls?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:u[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let st=n.properties.get(R);st.light=B}return R}function M(z,V,B,L,R){if(z.visible===!1)return;if(z.layers.test(V.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ls)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,z.matrixWorld);let nt=t.update(z),at=z.material;if(Array.isArray(at)){let Mt=nt.groups;for(let rt=0,It=Mt.length;rt<It;rt++){let ct=Mt[rt],Ut=at[ct.materialIndex];if(Ut&&Ut.visible){let Zt=C(z,Ut,L,R);z.onBeforeShadow(n,z,V,B,nt,Zt,ct),n.renderBufferDirect(B,null,nt,Zt,z,ct),z.onAfterShadow(n,z,V,B,nt,Zt,ct)}}}else if(at.visible){let Mt=C(z,at,L,R);z.onBeforeShadow(n,z,V,B,nt,Mt,null),n.renderBufferDirect(B,null,nt,Mt,z,null),z.onAfterShadow(n,z,V,B,nt,Mt,null)}}let st=z.children;for(let nt=0,at=st.length;nt<at;nt++)M(st[nt],V,B,L,R)}function q(z){z.target.removeEventListener("dispose",q);for(let B in h){let L=h[B],R=z.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}var vy={[Rc]:Cc,[Ic]:Dc,[Pc]:Uc,[da]:Lc,[Cc]:Rc,[Dc]:Ic,[Uc]:Pc,[Lc]:da};function by(n,t){function e(){let Y=!1,qt=new pn,ft=null,K=new pn(0,0,0,0);return{setMask:function(Bt){ft!==Bt&&!Y&&(n.colorMask(Bt,Bt,Bt,Bt),ft=Bt)},setLocked:function(Bt){Y=Bt},setClear:function(Bt,Gt,Me,rn,Tn){Tn===!0&&(Bt*=rn,Gt*=rn,Me*=rn),qt.set(Bt,Gt,Me,rn),K.equals(qt)===!1&&(n.clearColor(Bt,Gt,Me,rn),K.copy(qt))},reset:function(){Y=!1,ft=null,K.set(-1,0,0,0)}}}function i(){let Y=!1,qt=!1,ft=null,K=null,Bt=null;return{setReversed:function(Gt){if(qt!==Gt){let Me=t.get("EXT_clip_control");qt?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT);let rn=Bt;Bt=null,this.setClear(rn)}qt=Gt},getReversed:function(){return qt},setTest:function(Gt){Gt?Ft(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Gt){ft!==Gt&&!Y&&(n.depthMask(Gt),ft=Gt)},setFunc:function(Gt){if(qt&&(Gt=vy[Gt]),K!==Gt){switch(Gt){case Rc:n.depthFunc(n.NEVER);break;case Cc:n.depthFunc(n.ALWAYS);break;case Ic:n.depthFunc(n.LESS);break;case da:n.depthFunc(n.LEQUAL);break;case Pc:n.depthFunc(n.EQUAL);break;case Lc:n.depthFunc(n.GEQUAL);break;case Dc:n.depthFunc(n.GREATER);break;case Uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=Gt}},setLocked:function(Gt){Y=Gt},setClear:function(Gt){Bt!==Gt&&(qt&&(Gt=1-Gt),n.clearDepth(Gt),Bt=Gt)},reset:function(){Y=!1,ft=null,K=null,Bt=null,qt=!1}}}function s(){let Y=!1,qt=null,ft=null,K=null,Bt=null,Gt=null,Me=null,rn=null,Tn=null;return{setTest:function(Be){Y||(Be?Ft(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Be){qt!==Be&&!Y&&(n.stencilMask(Be),qt=Be)},setFunc:function(Be,tn,Pn){(ft!==Be||K!==tn||Bt!==Pn)&&(n.stencilFunc(Be,tn,Pn),ft=Be,K=tn,Bt=Pn)},setOp:function(Be,tn,Pn){(Gt!==Be||Me!==tn||rn!==Pn)&&(n.stencilOp(Be,tn,Pn),Gt=Be,Me=tn,rn=Pn)},setLocked:function(Be){Y=Be},setClear:function(Be){Tn!==Be&&(n.clearStencil(Be),Tn=Be)},reset:function(){Y=!1,qt=null,ft=null,K=null,Bt=null,Gt=null,Me=null,rn=null,Tn=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,h=new WeakMap,f={},u={},p=new WeakMap,d=[],v=null,T=!1,y=null,m=null,S=null,C=null,M=null,q=null,z=null,V=new be(0,0,0),B=0,L=!1,R=null,H=null,st=null,nt=null,at=null,Mt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,It=0,ct=n.getParameter(n.VERSION);ct.indexOf("WebGL")!==-1?(It=parseFloat(/^WebGL (\d)/.exec(ct)[1]),rt=It>=1):ct.indexOf("OpenGL ES")!==-1&&(It=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),rt=It>=2);let Ut=null,Zt={},Ot=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Re=new pn().fromArray(Ot),gt=new pn().fromArray(ie);function Lt(Y,qt,ft,K){let Bt=new Uint8Array(4),Gt=n.createTexture();n.bindTexture(Y,Gt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<ft;Me++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(qt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,Bt):n.texImage2D(qt+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Bt);return Gt}let se={};se[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ft(n.DEPTH_TEST),a.setFunc(da),xt(!1),Nt(zf),Ft(n.CULL_FACE),O(er);function Ft(Y){f[Y]!==!0&&(n.enable(Y),f[Y]=!0)}function ue(Y){f[Y]!==!1&&(n.disable(Y),f[Y]=!1)}function ce(Y,qt){return u[Y]!==qt?(n.bindFramebuffer(Y,qt),u[Y]=qt,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=qt),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=qt),!0):!1}function ae(Y,qt){let ft=d,K=!1;if(Y){ft=p.get(qt),ft===void 0&&(ft=[],p.set(qt,ft));let Bt=Y.textures;if(ft.length!==Bt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let Gt=0,Me=Bt.length;Gt<Me;Gt++)ft[Gt]=n.COLOR_ATTACHMENT0+Gt;ft.length=Bt.length,K=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,K=!0);K&&n.drawBuffers(ft)}function Ue(Y){return v!==Y?(n.useProgram(Y),v=Y,!0):!1}let wt={[Sr]:n.FUNC_ADD,[Jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};wt[jd]=n.MIN,wt[Qd]=n.MAX;let Dt={[tp]:n.ZERO,[ep]:n.ONE,[np]:n.SRC_COLOR,[Ec]:n.SRC_ALPHA,[lp]:n.SRC_ALPHA_SATURATE,[ap]:n.DST_COLOR,[sp]:n.DST_ALPHA,[ip]:n.ONE_MINUS_SRC_COLOR,[Ac]:n.ONE_MINUS_SRC_ALPHA,[op]:n.ONE_MINUS_DST_COLOR,[rp]:n.ONE_MINUS_DST_ALPHA,[cp]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[fp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function O(Y,qt,ft,K,Bt,Gt,Me,rn,Tn,Be){if(Y===er){T===!0&&(ue(n.BLEND),T=!1);return}if(T===!1&&(Ft(n.BLEND),T=!0),Y!==Zd){if(Y!==y||Be!==L){if((m!==Sr||M!==Sr)&&(n.blendEquation(n.FUNC_ADD),m=Sr,M=Sr),Be)switch(Y){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.ONE,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Of:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}S=null,C=null,q=null,z=null,V.set(0,0,0),B=0,y=Y,L=Be}return}Bt=Bt||qt,Gt=Gt||ft,Me=Me||K,(qt!==m||Bt!==M)&&(n.blendEquationSeparate(wt[qt],wt[Bt]),m=qt,M=Bt),(ft!==S||K!==C||Gt!==q||Me!==z)&&(n.blendFuncSeparate(Dt[ft],Dt[K],Dt[Gt],Dt[Me]),S=ft,C=K,q=Gt,z=Me),(rn.equals(V)===!1||Tn!==B)&&(n.blendColor(rn.r,rn.g,rn.b,Tn),V.copy(rn),B=Tn),y=Y,L=!1}function re(Y,qt){Y.side===Ln?ue(n.CULL_FACE):Ft(n.CULL_FACE);let ft=Y.side===Jn;qt&&(ft=!ft),xt(ft),Y.blending===ca&&Y.transparent===!1?O(er):O(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let K=Y.stencilWrite;o.setTest(K),K&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),_e(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(Y){R!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),R=Y)}function Nt(Y){Y!==Yd?(Ft(n.CULL_FACE),Y!==H&&(Y===zf?n.cullFace(n.BACK):Y===$d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),H=Y}function Pt(Y){Y!==st&&(rt&&n.lineWidth(Y),st=Y)}function _e(Y,qt,ft){Y?(Ft(n.POLYGON_OFFSET_FILL),(nt!==qt||at!==ft)&&(n.polygonOffset(qt,ft),nt=qt,at=ft)):ue(n.POLYGON_OFFSET_FILL)}function Yt(Y){Y?Ft(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=n.TEXTURE0+Mt-1),Ut!==Y&&(n.activeTexture(Y),Ut=Y)}function A(Y,qt,ft){ft===void 0&&(Ut===null?ft=n.TEXTURE0+Mt-1:ft=Ut);let K=Zt[ft];K===void 0&&(K={type:void 0,texture:void 0},Zt[ft]=K),(K.type!==Y||K.texture!==qt)&&(Ut!==ft&&(n.activeTexture(ft),Ut=ft),n.bindTexture(Y,qt||se[Y]),K.type=Y,K.texture=qt)}function tt(){let Y=Zt[Ut];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Jt(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(Y){Re.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function Kt(Y){gt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),gt.copy(Y))}function Le(Y,qt){let ft=h.get(qt);ft===void 0&&(ft=new WeakMap,h.set(qt,ft));let K=ft.get(Y);K===void 0&&(K=n.getUniformBlockIndex(qt,Y.name),ft.set(Y,K))}function jt(Y,qt){let K=h.get(qt).get(Y);l.get(qt)!==K&&(n.uniformBlockBinding(qt,K,Y.__bindingPointIndex),l.set(qt,K))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Ut=null,Zt={},u={},p=new WeakMap,d=[],v=null,T=!1,y=null,m=null,S=null,C=null,M=null,q=null,z=null,V=new be(0,0,0),B=0,L=!1,R=null,H=null,st=null,nt=null,at=null,Re.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ft,disable:ue,bindFramebuffer:ce,drawBuffers:ae,useProgram:Ue,setBlending:O,setMaterial:re,setFlipSided:xt,setCullFace:Nt,setLineWidth:Pt,setPolygonOffset:_e,setScissorTest:Yt,activeTexture:U,bindTexture:A,unbindTexture:tt,compressedTexImage2D:pt,compressedTexImage3D:ut,texImage2D:Jt,texImage3D:de,updateUBOMapping:Le,uniformBlockBinding:jt,texStorage2D:Pe,texStorage3D:At,texSubImage2D:mt,texSubImage3D:Ht,compressedTexSubImage2D:zt,compressedTexSubImage3D:Xt,scissor:pe,viewport:Kt,reset:Ze}}function Du(n,t,e,i){let s=My(i);switch(e){case Qu:return n*t;case ed:return n*t;case nd:return n*t*2;case id:return n*t/s.components*s.byteLength;case rf:return n*t/s.components*s.byteLength;case sd:return n*t*2/s.components*s.byteLength;case af:return n*t*2/s.components*s.byteLength;case td:return n*t*3/s.components*s.byteLength;case Qi:return n*t*4/s.components*s.byteLength;case of:return n*t*4/s.components*s.byteLength;case sl:case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case al:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kc:case Vc:return Math.max(n,16)*Math.max(t,8)/4;case Oc:case Bc:return Math.max(n,8)*Math.max(t,8)/2;case Hc:case Gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case th:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ll:case rh:case ah:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rd:case oh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case lh:case ch:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function My(n){switch(n){case Os:case Ju:return{byteLength:1,components:1};case to:case Ku:case po:return{byteLength:2,components:1};case nf:case sf:return{byteLength:2,components:4};case Rr:case ef:case Ds:return{byteLength:4,components:1};case ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wy(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,f=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return d?new OffscreenCanvas(U,A):eo("canvas")}function T(U,A,tt){let pt=1,ut=Yt(U);if((ut.width>tt||ut.height>tt)&&(pt=tt/Math.max(ut.width,ut.height)),pt<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let mt=Math.floor(pt*ut.width),Ht=Math.floor(pt*ut.height);u===void 0&&(u=v(mt,Ht));let zt=A?v(mt,Ht):u;return zt.width=mt,zt.height=Ht,zt.getContext("2d").drawImage(U,0,0,mt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+mt+"x"+Ht+")."),zt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){n.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(U,A,tt,pt,ut=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=A;if(A===n.RED&&(tt===n.FLOAT&&(mt=n.R32F),tt===n.HALF_FLOAT&&(mt=n.R16F),tt===n.UNSIGNED_BYTE&&(mt=n.R8)),A===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.R8UI),tt===n.UNSIGNED_SHORT&&(mt=n.R16UI),tt===n.UNSIGNED_INT&&(mt=n.R32UI),tt===n.BYTE&&(mt=n.R8I),tt===n.SHORT&&(mt=n.R16I),tt===n.INT&&(mt=n.R32I)),A===n.RG&&(tt===n.FLOAT&&(mt=n.RG32F),tt===n.HALF_FLOAT&&(mt=n.RG16F),tt===n.UNSIGNED_BYTE&&(mt=n.RG8)),A===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.RG8UI),tt===n.UNSIGNED_SHORT&&(mt=n.RG16UI),tt===n.UNSIGNED_INT&&(mt=n.RG32UI),tt===n.BYTE&&(mt=n.RG8I),tt===n.SHORT&&(mt=n.RG16I),tt===n.INT&&(mt=n.RG32I)),A===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(mt=n.RGB16UI),tt===n.UNSIGNED_INT&&(mt=n.RGB32UI),tt===n.BYTE&&(mt=n.RGB8I),tt===n.SHORT&&(mt=n.RGB16I),tt===n.INT&&(mt=n.RGB32I)),A===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(mt=n.RGBA16UI),tt===n.UNSIGNED_INT&&(mt=n.RGBA32UI),tt===n.BYTE&&(mt=n.RGBA8I),tt===n.SHORT&&(mt=n.RGBA16I),tt===n.INT&&(mt=n.RGBA32I)),A===n.RGB&&tt===n.UNSIGNED_INT_5_9_9_9_REV&&(mt=n.RGB9_E5),A===n.RGBA){let Ht=ut?Ll:Qe.getTransfer(pt);tt===n.FLOAT&&(mt=n.RGBA32F),tt===n.HALF_FLOAT&&(mt=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(mt=Ht===un?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(mt=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(mt=n.RGB5_A1)}return(mt===n.R16F||mt===n.R32F||mt===n.RG16F||mt===n.RG32F||mt===n.RGBA16F||mt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function M(U,A){let tt;return U?A===null||A===Rr||A===ga?tt=n.DEPTH24_STENCIL8:A===Ds?tt=n.DEPTH32F_STENCIL8:A===to&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===ga?tt=n.DEPTH_COMPONENT24:A===Ds?tt=n.DEPTH_COMPONENT32F:A===to&&(tt=n.DEPTH_COMPONENT16),tt}function q(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ts&&U.minFilter!==us?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function z(U){let A=U.target;A.removeEventListener("dispose",z),B(A),A.isVideoTexture&&f.delete(A)}function V(U){let A=U.target;A.removeEventListener("dispose",V),R(A)}function B(U){let A=i.get(U);if(A.__webglInit===void 0)return;let tt=U.source,pt=p.get(tt);if(pt){let ut=pt[A.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&L(U),Object.keys(pt).length===0&&p.delete(tt)}i.remove(U)}function L(U){let A=i.get(U);n.deleteTexture(A.__webglTexture);let tt=U.source,pt=p.get(tt);delete pt[A.__cacheKey],a.memory.textures--}function R(U){let A=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let ut=0;ut<A.__webglFramebuffer[pt].length;ut++)n.deleteFramebuffer(A.__webglFramebuffer[pt][ut]);else n.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)n.deleteFramebuffer(A.__webglFramebuffer[pt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let tt=U.textures;for(let pt=0,ut=tt.length;pt<ut;pt++){let mt=i.get(tt[pt]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(tt[pt])}i.remove(U)}let H=0;function st(){H=0}function nt(){let U=H;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),H+=1,U}function at(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function Mt(U,A){let tt=i.get(U);if(U.isVideoTexture&&Pt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){let pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(tt,U,A);return}}e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+A)}function rt(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){gt(tt,U,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+A)}function It(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){gt(tt,U,A);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+A)}function ct(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){Lt(tt,U,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+A)}let Ut={[Fs]:n.REPEAT,[Er]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},Zt={[ts]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[Ro]:n.NEAREST_MIPMAP_LINEAR,[us]:n.LINEAR,[Wl]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR},Ot={[Ep]:n.NEVER,[Lp]:n.ALWAYS,[Ap]:n.LESS,[od]:n.LEQUAL,[Rp]:n.EQUAL,[Pp]:n.GEQUAL,[Cp]:n.GREATER,[Ip]:n.NOTEQUAL};function ie(U,A){if(A.type===Ds&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===us||A.magFilter===Wl||A.magFilter===Ro||A.magFilter===Ar||A.minFilter===us||A.minFilter===Wl||A.minFilter===Ro||A.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Ut[A.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Ut[A.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Ut[A.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Zt[A.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Zt[A.minFilter]),A.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Ot[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ts||A.minFilter!==Ro&&A.minFilter!==Ar||A.type===Ds&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Re(U,A){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",z));let pt=A.source,ut=p.get(pt);ut===void 0&&(ut={},p.set(pt,ut));let mt=at(A);if(mt!==U.__cacheKey){ut[mt]===void 0&&(ut[mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ut[mt].usedTimes++;let Ht=ut[U.__cacheKey];Ht!==void 0&&(ut[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&L(A)),U.__cacheKey=mt,U.__webglTexture=ut[mt].texture}return tt}function gt(U,A,tt){let pt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=n.TEXTURE_3D);let ut=Re(U,A),mt=A.source;e.bindTexture(pt,U.__webglTexture,n.TEXTURE0+tt);let Ht=i.get(mt);if(mt.version!==Ht.__version||ut===!0){e.activeTexture(n.TEXTURE0+tt);let zt=Qe.getPrimaries(Qe.workingColorSpace),Xt=A.colorSpace===Qs?null:Qe.getPrimaries(A.colorSpace),Pe=A.colorSpace===Qs||zt===Xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let At=T(A.image,!1,s.maxTextureSize);At=_e(A,At);let Jt=r.convert(A.format,A.colorSpace),de=r.convert(A.type),pe=C(A.internalFormat,Jt,de,A.colorSpace,A.isVideoTexture);ie(pt,A);let Kt,Le=A.mipmaps,jt=A.isVideoTexture!==!0,Ze=Ht.__version===void 0||ut===!0,Y=mt.dataReady,qt=q(A,At);if(A.isDepthTexture)pe=M(A.format===xa,A.type),Ze&&(jt?e.texStorage2D(n.TEXTURE_2D,1,pe,At.width,At.height):e.texImage2D(n.TEXTURE_2D,0,pe,At.width,At.height,0,Jt,de,null));else if(A.isDataTexture)if(Le.length>0){jt&&Ze&&e.texStorage2D(n.TEXTURE_2D,qt,pe,Le[0].width,Le[0].height);for(let ft=0,K=Le.length;ft<K;ft++)Kt=Le[ft],jt?Y&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Kt.width,Kt.height,Jt,de,Kt.data):e.texImage2D(n.TEXTURE_2D,ft,pe,Kt.width,Kt.height,0,Jt,de,Kt.data);A.generateMipmaps=!1}else jt?(Ze&&e.texStorage2D(n.TEXTURE_2D,qt,pe,At.width,At.height),Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At.width,At.height,Jt,de,At.data)):e.texImage2D(n.TEXTURE_2D,0,pe,At.width,At.height,0,Jt,de,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){jt&&Ze&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,pe,Le[0].width,Le[0].height,At.depth);for(let ft=0,K=Le.length;ft<K;ft++)if(Kt=Le[ft],A.format!==Qi)if(Jt!==null)if(jt){if(Y)if(A.layerUpdates.size>0){let Bt=Du(Kt.width,Kt.height,A.format,A.type);for(let Gt of A.layerUpdates){let Me=Kt.data.subarray(Gt*Bt/Kt.data.BYTES_PER_ELEMENT,(Gt+1)*Bt/Kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Gt,Kt.width,Kt.height,1,Jt,Me)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Kt.width,Kt.height,At.depth,Jt,Kt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,pe,Kt.width,Kt.height,At.depth,0,Kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?Y&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Kt.width,Kt.height,At.depth,Jt,de,Kt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,pe,Kt.width,Kt.height,At.depth,0,Jt,de,Kt.data)}else{jt&&Ze&&e.texStorage2D(n.TEXTURE_2D,qt,pe,Le[0].width,Le[0].height);for(let ft=0,K=Le.length;ft<K;ft++)Kt=Le[ft],A.format!==Qi?Jt!==null?jt?Y&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,Kt.width,Kt.height,Jt,Kt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,pe,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?Y&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Kt.width,Kt.height,Jt,de,Kt.data):e.texImage2D(n.TEXTURE_2D,ft,pe,Kt.width,Kt.height,0,Jt,de,Kt.data)}else if(A.isDataArrayTexture)if(jt){if(Ze&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,pe,At.width,At.height,At.depth),Y)if(A.layerUpdates.size>0){let ft=Du(At.width,At.height,A.format,A.type);for(let K of A.layerUpdates){let Bt=At.data.subarray(K*ft/At.data.BYTES_PER_ELEMENT,(K+1)*ft/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,At.width,At.height,1,Jt,de,Bt)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Jt,de,At.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,At.width,At.height,At.depth,0,Jt,de,At.data);else if(A.isData3DTexture)jt?(Ze&&e.texStorage3D(n.TEXTURE_3D,qt,pe,At.width,At.height,At.depth),Y&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Jt,de,At.data)):e.texImage3D(n.TEXTURE_3D,0,pe,At.width,At.height,At.depth,0,Jt,de,At.data);else if(A.isFramebufferTexture){if(Ze)if(jt)e.texStorage2D(n.TEXTURE_2D,qt,pe,At.width,At.height);else{let ft=At.width,K=At.height;for(let Bt=0;Bt<qt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,pe,ft,K,0,Jt,de,null),ft>>=1,K>>=1}}else if(Le.length>0){if(jt&&Ze){let ft=Yt(Le[0]);e.texStorage2D(n.TEXTURE_2D,qt,pe,ft.width,ft.height)}for(let ft=0,K=Le.length;ft<K;ft++)Kt=Le[ft],jt?Y&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Jt,de,Kt):e.texImage2D(n.TEXTURE_2D,ft,pe,Jt,de,Kt);A.generateMipmaps=!1}else if(jt){if(Ze){let ft=Yt(At);e.texStorage2D(n.TEXTURE_2D,qt,pe,ft.width,ft.height)}Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Jt,de,At)}else e.texImage2D(n.TEXTURE_2D,0,pe,Jt,de,At);y(A)&&m(pt),Ht.__version=mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Lt(U,A,tt){if(A.image.length!==6)return;let pt=Re(U,A),ut=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+tt);let mt=i.get(ut);if(ut.version!==mt.__version||pt===!0){e.activeTexture(n.TEXTURE0+tt);let Ht=Qe.getPrimaries(Qe.workingColorSpace),zt=A.colorSpace===Qs?null:Qe.getPrimaries(A.colorSpace),Xt=A.colorSpace===Qs||Ht===zt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Jt=[];for(let K=0;K<6;K++)!Pe&&!At?Jt[K]=T(A.image[K],!0,s.maxCubemapSize):Jt[K]=At?A.image[K].image:A.image[K],Jt[K]=_e(A,Jt[K]);let de=Jt[0],pe=r.convert(A.format,A.colorSpace),Kt=r.convert(A.type),Le=C(A.internalFormat,pe,Kt,A.colorSpace),jt=A.isVideoTexture!==!0,Ze=mt.__version===void 0||pt===!0,Y=ut.dataReady,qt=q(A,de);ie(n.TEXTURE_CUBE_MAP,A);let ft;if(Pe){jt&&Ze&&e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,Le,de.width,de.height);for(let K=0;K<6;K++){ft=Jt[K].mipmaps;for(let Bt=0;Bt<ft.length;Bt++){let Gt=ft[Bt];A.format!==Qi?pe!==null?jt?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt,0,0,Gt.width,Gt.height,pe,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt,Le,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt,0,0,Gt.width,Gt.height,pe,Kt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt,Le,Gt.width,Gt.height,0,pe,Kt,Gt.data)}}}else{if(ft=A.mipmaps,jt&&Ze){ft.length>0&&qt++;let K=Yt(Jt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,Le,K.width,K.height)}for(let K=0;K<6;K++)if(At){jt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Jt[K].width,Jt[K].height,pe,Kt,Jt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,Jt[K].width,Jt[K].height,0,pe,Kt,Jt[K].data);for(let Bt=0;Bt<ft.length;Bt++){let Me=ft[Bt].image[K].image;jt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt+1,0,0,Me.width,Me.height,pe,Kt,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt+1,Le,Me.width,Me.height,0,pe,Kt,Me.data)}}else{jt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe,Kt,Jt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,pe,Kt,Jt[K]);for(let Bt=0;Bt<ft.length;Bt++){let Gt=ft[Bt];jt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt+1,0,0,pe,Kt,Gt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt+1,Le,pe,Kt,Gt.image[K])}}}y(A)&&m(n.TEXTURE_CUBE_MAP),mt.__version=ut.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function se(U,A,tt,pt,ut,mt){let Ht=r.convert(tt.format,tt.colorSpace),zt=r.convert(tt.type),Xt=C(tt.internalFormat,Ht,zt,tt.colorSpace),Pe=i.get(A),At=i.get(tt);if(At.__renderTarget=A,!Pe.__hasExternalTextures){let Jt=Math.max(1,A.width>>mt),de=Math.max(1,A.height>>mt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,mt,Xt,Jt,de,A.depth,0,Ht,zt,null):e.texImage2D(ut,mt,Xt,Jt,de,0,Ht,zt,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Nt(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ut,At.__webglTexture,0,xt(A)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,ut,At.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(U,A,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,U),A.depthBuffer){let pt=A.depthTexture,ut=pt&&pt.isDepthTexture?pt.type:null,mt=M(A.stencilBuffer,ut),Ht=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=xt(A);Nt(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,mt,A.width,A.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,mt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,mt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ht,n.RENDERBUFFER,U)}else{let pt=A.textures;for(let ut=0;ut<pt.length;ut++){let mt=pt[ut],Ht=r.convert(mt.format,mt.colorSpace),zt=r.convert(mt.type),Xt=C(mt.internalFormat,Ht,zt,mt.colorSpace),Pe=xt(A);tt&&Nt(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Xt,A.width,A.height):Nt(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Xt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Xt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pt=i.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Mt(A.depthTexture,0);let ut=pt.__webglTexture,mt=xt(A);if(A.depthTexture.format===ha)Nt(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(A.depthTexture.format===xa)Nt(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function ce(U){let A=i.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let pt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){let ut=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",ut)};pt.addEventListener("dispose",ut),A.__depthDisposeCallback=ut}A.__boundDepthTexture=pt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");ue(A.__webglFramebuffer,U)}else if(tt){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=n.createRenderbuffer(),Ft(A.__webglDepthbuffer[pt],U,!1);else{let ut=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ft(A.__webglDepthbuffer,U,!1);else{let pt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(U,A,tt){let pt=i.get(U);A!==void 0&&se(pt.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&ce(U)}function Ue(U){let A=U.texture,tt=i.get(U),pt=i.get(A);U.addEventListener("dispose",V);let ut=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Ht=ut.length>1;if(Ht||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=A.version,a.memory.textures++),mt){tt.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[zt]=[];for(let Xt=0;Xt<A.mipmaps.length;Xt++)tt.__webglFramebuffer[zt][Xt]=n.createFramebuffer()}else tt.__webglFramebuffer[zt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let zt=0;zt<A.mipmaps.length;zt++)tt.__webglFramebuffer[zt]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(Ht)for(let zt=0,Xt=ut.length;zt<Xt;zt++){let Pe=i.get(ut[zt]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(U.samples>0&&Nt(U)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let zt=0;zt<ut.length;zt++){let Xt=ut[zt];tt.__webglColorRenderbuffer[zt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[zt]);let Pe=r.convert(Xt.format,Xt.colorSpace),At=r.convert(Xt.type),Jt=C(Xt.internalFormat,Pe,At,Xt.colorSpace,U.isXRRenderTarget===!0),de=xt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Jt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,tt.__webglColorRenderbuffer[zt])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),ie(n.TEXTURE_CUBE_MAP,A);for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Xt=0;Xt<A.mipmaps.length;Xt++)se(tt.__webglFramebuffer[zt][Xt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Xt);else se(tt.__webglFramebuffer[zt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);y(A)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let zt=0,Xt=ut.length;zt<Xt;zt++){let Pe=ut[zt],At=i.get(Pe);e.bindTexture(n.TEXTURE_2D,At.__webglTexture),ie(n.TEXTURE_2D,Pe),se(tt.__webglFramebuffer,U,Pe,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,0),y(Pe)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let zt=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(zt=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(zt,pt.__webglTexture),ie(zt,A),A.mipmaps&&A.mipmaps.length>0)for(let Xt=0;Xt<A.mipmaps.length;Xt++)se(tt.__webglFramebuffer[Xt],U,A,n.COLOR_ATTACHMENT0,zt,Xt);else se(tt.__webglFramebuffer,U,A,n.COLOR_ATTACHMENT0,zt,0);y(A)&&m(zt),e.unbindTexture()}U.depthBuffer&&ce(U)}function wt(U){let A=U.textures;for(let tt=0,pt=A.length;tt<pt;tt++){let ut=A[tt];if(y(ut)){let mt=S(U),Ht=i.get(ut).__webglTexture;e.bindTexture(mt,Ht),m(mt),e.unbindTexture()}}}let Dt=[],O=[];function re(U){if(U.samples>0){if(Nt(U)===!1){let A=U.textures,tt=U.width,pt=U.height,ut=n.COLOR_BUFFER_BIT,mt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ht=i.get(U),zt=A.length>1;if(zt)for(let Xt=0;Xt<A.length;Xt++)e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Xt=0;Xt<A.length;Xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),zt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ht.__webglColorRenderbuffer[Xt]);let Pe=i.get(A[Xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,ut,n.NEAREST),l===!0&&(Dt.length=0,O.length=0,Dt.push(n.COLOR_ATTACHMENT0+Xt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Dt.push(mt),O.push(mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),zt)for(let Xt=0;Xt<A.length;Xt++){e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xt,n.RENDERBUFFER,Ht.__webglColorRenderbuffer[Xt]);let Pe=i.get(A[Xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xt,n.TEXTURE_2D,Pe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let A=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function xt(U){return Math.min(s.maxSamples,U.samples)}function Nt(U){let A=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pt(U){let A=a.render.frame;f.get(U)!==A&&(f.set(U,A),U.update())}function _e(U,A){let tt=U.colorSpace,pt=U.format,ut=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Ia&&tt!==Qs&&(Qe.getTransfer(tt)===un?(pt!==Qi||ut!==Os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),A}function Yt(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=Mt,this.setTexture2DArray=rt,this.setTexture3D=It,this.setTextureCube=ct,this.rebindTextures=ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Nt}function Sy(n,t){function e(i,s=Qs){let r,a=Qe.getTransfer(s);if(i===Os)return n.UNSIGNED_BYTE;if(i===nf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.BYTE;if(i===Ku)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===ef)return n.INT;if(i===Rr)return n.UNSIGNED_INT;if(i===Ds)return n.FLOAT;if(i===po)return n.HALF_FLOAT;if(i===Qu)return n.ALPHA;if(i===td)return n.RGB;if(i===Qi)return n.RGBA;if(i===ed)return n.LUMINANCE;if(i===nd)return n.LUMINANCE_ALPHA;if(i===ha)return n.DEPTH_COMPONENT;if(i===xa)return n.DEPTH_STENCIL;if(i===id)return n.RED;if(i===rf)return n.RED_INTEGER;if(i===sd)return n.RG;if(i===af)return n.RG_INTEGER;if(i===of)return n.RGBA_INTEGER;if(i===sl||i===rl||i===al||i===ol)if(a===un)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===kc||i===Bc||i===Vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hc||i===Gc||i===Wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hc||i===Gc)return a===un?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Jc||i===Kc||i===jc||i===Qc||i===th||i===eh||i===nh||i===ih||i===sh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$c)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===th)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eh)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nh)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===rh||i===ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return a===un?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rd||i===oh||i===lh||i===ch)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ga?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Eh=class extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ty={type:"move"},Ka=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let T of t.hand.values()){let y=e.getJointPose(T,i),m=this._getHandJoint(h,T);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let f=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=f.position.distanceTo(u.position),d=.02,v=.005;h.inputState.pinching&&p>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ey=`
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

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Si,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ms({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new ke(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends rr{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,f=null,u=null,p=null,d=null,v=null,T=new Ah,y=e.getContextAttributes(),m=null,S=null,C=[],M=[],q=new Ct,z=null,V=new Wn;V.viewport=new pn;let B=new Wn;B.viewport=new pn;let L=[V,B],R=new Eh,H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let Lt=C[gt];return Lt===void 0&&(Lt=new Ka,C[gt]=Lt),Lt.getTargetRaySpace()},this.getControllerGrip=function(gt){let Lt=C[gt];return Lt===void 0&&(Lt=new Ka,C[gt]=Lt),Lt.getGripSpace()},this.getHand=function(gt){let Lt=C[gt];return Lt===void 0&&(Lt=new Ka,C[gt]=Lt),Lt.getHandSpace()};function nt(gt){let Lt=M.indexOf(gt.inputSource);if(Lt===-1)return;let se=C[Lt];se!==void 0&&(se.update(gt.inputSource,gt.frame,h||a),se.dispatchEvent({type:gt.type,data:gt.inputSource}))}function at(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",Mt);for(let gt=0;gt<C.length;gt++){let Lt=M[gt];Lt!==null&&(M[gt]=null,C[gt].disconnect(Lt))}H=null,st=null,T.reset(),t.setRenderTarget(m),d=null,p=null,u=null,s=null,S=null,Re.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(q.width,q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){o=gt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(gt){h=gt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(gt){if(s=gt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",at),s.addEventListener("inputsourceschange",Mt),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){let Lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new es(d.framebufferWidth,d.framebufferHeight,{format:Qi,type:Os,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let Lt=null,se=null,Ft=null;y.depth&&(Ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=y.stencil?xa:ha,se=y.stencil?ga:Rr);let ue={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(ue),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new es(p.textureWidth,p.textureHeight,{format:Qi,type:Os,depthTexture:new _l(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function Mt(gt){for(let Lt=0;Lt<gt.removed.length;Lt++){let se=gt.removed[Lt],Ft=M.indexOf(se);Ft>=0&&(M[Ft]=null,C[Ft].disconnect(se))}for(let Lt=0;Lt<gt.added.length;Lt++){let se=gt.added[Lt],Ft=M.indexOf(se);if(Ft===-1){for(let ce=0;ce<C.length;ce++)if(ce>=M.length){M.push(se),Ft=ce;break}else if(M[ce]===null){M[ce]=se,Ft=ce;break}if(Ft===-1)break}let ue=C[Ft];ue&&ue.connect(se)}}let rt=new N,It=new N;function ct(gt,Lt,se){rt.setFromMatrixPosition(Lt.matrixWorld),It.setFromMatrixPosition(se.matrixWorld);let Ft=rt.distanceTo(It),ue=Lt.projectionMatrix.elements,ce=se.projectionMatrix.elements,ae=ue[14]/(ue[10]-1),Ue=ue[14]/(ue[10]+1),wt=(ue[9]+1)/ue[5],Dt=(ue[9]-1)/ue[5],O=(ue[8]-1)/ue[0],re=(ce[8]+1)/ce[0],xt=ae*O,Nt=ae*re,Pt=Ft/(-O+re),_e=Pt*-O;if(Lt.matrixWorld.decompose(gt.position,gt.quaternion,gt.scale),gt.translateX(_e),gt.translateZ(Pt),gt.matrixWorld.compose(gt.position,gt.quaternion,gt.scale),gt.matrixWorldInverse.copy(gt.matrixWorld).invert(),ue[10]===-1)gt.projectionMatrix.copy(Lt.projectionMatrix),gt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse);else{let Yt=ae+Pt,U=Ue+Pt,A=xt-_e,tt=Nt+(Ft-_e),pt=wt*Ue/U*Yt,ut=Dt*Ue/U*Yt;gt.projectionMatrix.makePerspective(A,tt,pt,ut,Yt,U),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert()}}function Ut(gt,Lt){Lt===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(Lt.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(s===null)return;let Lt=gt.near,se=gt.far;T.texture!==null&&(T.depthNear>0&&(Lt=T.depthNear),T.depthFar>0&&(se=T.depthFar)),R.near=B.near=V.near=Lt,R.far=B.far=V.far=se,(H!==R.near||st!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,st=R.far),V.layers.mask=gt.layers.mask|2,B.layers.mask=gt.layers.mask|4,R.layers.mask=V.layers.mask|B.layers.mask;let Ft=gt.parent,ue=R.cameras;Ut(R,Ft);for(let ce=0;ce<ue.length;ce++)Ut(ue[ce],Ft);ue.length===2?ct(R,V,B):R.projectionMatrix.copy(V.projectionMatrix),Zt(gt,R,Ft)};function Zt(gt,Lt,se){se===null?gt.matrix.copy(Lt.matrixWorld):(gt.matrix.copy(se.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(Lt.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(Lt.projectionMatrix),gt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=uh*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(gt){l=gt,p!==null&&(p.fixedFoveation=gt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=gt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let Ot=null;function ie(gt,Lt){if(f=Lt.getViewerPose(h||a),v=Lt,f!==null){let se=f.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ft=!1;se.length!==R.cameras.length&&(R.cameras.length=0,Ft=!0);for(let ce=0;ce<se.length;ce++){let ae=se[ce],Ue=null;if(d!==null)Ue=d.getViewport(ae);else{let Dt=u.getViewSubImage(p,ae);Ue=Dt.viewport,ce===0&&(t.setRenderTargetTextures(S,Dt.colorTexture,p.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(S))}let wt=L[ce];wt===void 0&&(wt=new Wn,wt.layers.enable(ce),wt.viewport=new pn,L[ce]=wt),wt.matrix.fromArray(ae.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(ae.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ce===0&&(R.matrix.copy(wt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ft===!0&&R.cameras.push(wt)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let ce=u.getDepthInformation(se[0]);ce&&ce.isValid&&ce.texture&&T.init(t,ce,s.renderState)}}for(let se=0;se<C.length;se++){let Ft=M[se],ue=C[se];Ft!==null&&ue!==void 0&&ue.update(Ft,Lt,h||a)}Ot&&Ot(gt,Lt),Lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Lt}),v=null}let Re=new fd;Re.setAnimationLoop(ie),this.setAnimationLoop=function(gt){Ot=gt},this.dispose=function(){}}},Mr=new ps,Ry=new xn;function Cy(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,hd(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,S,C,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(y,m):m.isMeshToonMaterial?(r(y,m),u(y,m)):m.isMeshPhongMaterial?(r(y,m),f(y,m)):m.isMeshStandardMaterial?(r(y,m),p(y,m),m.isMeshPhysicalMaterial&&d(y,m,M)):m.isMeshMatcapMaterial?(r(y,m),v(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),T(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(a(y,m),m.isLineDashedMaterial&&o(y,m)):m.isPointsMaterial?l(y,m,S,C):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Jn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Jn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let S=t.get(m),C=S.envMap,M=S.envMapRotation;C&&(y.envMap.value=C,Mr.copy(M),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),y.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(Mr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function a(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function o(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function l(y,m,S,C){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*S,y.scale.value=C*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function u(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function p(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function d(y,m,S){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,m){m.matcap&&(y.matcap.value=m.matcap)}function T(y,m){let S=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iy(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){let M=C.program;i.uniformBlockBinding(S,M)}function h(S,C){let M=s[S.id];M===void 0&&(v(S),M=f(S),s[S.id]=M,S.addEventListener("dispose",y));let q=C.program;i.updateUBOMapping(S,q);let z=t.render.frame;r[S.id]!==z&&(p(S),r[S.id]=z)}function f(S){let C=u();S.__bindingPointIndex=C;let M=n.createBuffer(),q=S.__size,z=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,q,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let C=s[S.id],M=S.uniforms,q=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let z=0,V=M.length;z<V;z++){let B=Array.isArray(M[z])?M[z]:[M[z]];for(let L=0,R=B.length;L<R;L++){let H=B[L];if(d(H,z,L,q)===!0){let st=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value],at=0;for(let Mt=0;Mt<nt.length;Mt++){let rt=nt[Mt],It=T(rt);typeof rt=="number"||typeof rt=="boolean"?(H.__data[0]=rt,n.bufferSubData(n.UNIFORM_BUFFER,st+at,H.__data)):rt.isMatrix3?(H.__data[0]=rt.elements[0],H.__data[1]=rt.elements[1],H.__data[2]=rt.elements[2],H.__data[3]=0,H.__data[4]=rt.elements[3],H.__data[5]=rt.elements[4],H.__data[6]=rt.elements[5],H.__data[7]=0,H.__data[8]=rt.elements[6],H.__data[9]=rt.elements[7],H.__data[10]=rt.elements[8],H.__data[11]=0):(rt.toArray(H.__data,at),at+=It.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,C,M,q){let z=S.value,V=C+"_"+M;if(q[V]===void 0)return typeof z=="number"||typeof z=="boolean"?q[V]=z:q[V]=z.clone(),!0;{let B=q[V];if(typeof z=="number"||typeof z=="boolean"){if(B!==z)return q[V]=z,!0}else if(B.equals(z)===!1)return B.copy(z),!0}return!1}function v(S){let C=S.uniforms,M=0,q=16;for(let V=0,B=C.length;V<B;V++){let L=Array.isArray(C[V])?C[V]:[C[V]];for(let R=0,H=L.length;R<H;R++){let st=L[R],nt=Array.isArray(st.value)?st.value:[st.value];for(let at=0,Mt=nt.length;at<Mt;at++){let rt=nt[at],It=T(rt),ct=M%q,Ut=ct%It.boundary,Zt=ct+Ut;M+=Ut,Zt!==0&&q-Zt<It.storage&&(M+=q-Zt),st.__data=new Float32Array(It.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=M,M+=It.storage}}}let z=M%q;return z>0&&(M+=q-z),S.__size=M,S.__cache={},this}function T(S){let C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),C}function y(S){let C=S.target;C.removeEventListener("dispose",y);let M=a.indexOf(C.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:h,dispose:m}}var va=class{constructor(t={}){let{canvas:e=Up(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let v=new Uint32Array(4),T=new Int32Array(4),y=null,m=null,S=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=nr,this.toneMappingExposure=1;let M=this,q=!1,z=0,V=0,B=null,L=-1,R=null,H=new pn,st=new pn,nt=null,at=new be(0),Mt=0,rt=e.width,It=e.height,ct=1,Ut=null,Zt=null,Ot=new pn(0,0,rt,It),ie=new pn(0,0,rt,It),Re=!1,gt=new so,Lt=!1,se=!1,Ft=new xn,ue=new xn,ce=new N,ae=new pn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Dt(){return B===null?ct:1}let O=i;function re(P,k){return e.getContext(P,k)}try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),O===null){let k="webgl2";if(O=re(k,P),O===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let xt,Nt,Pt,_e,Yt,U,A,tt,pt,ut,mt,Ht,zt,Xt,Pe,At,Jt,de,pe,Kt,Le,jt,Ze,Y;function qt(){xt=new qg(O),xt.init(),jt=new Sy(O,xt),Nt=new Bg(O,xt,t,jt),Pt=new by(O,xt),Nt.reverseDepthBuffer&&p&&Pt.buffers.depth.setReversed(!0),_e=new Zg(O),Yt=new ly,U=new wy(O,xt,Pt,Yt,Nt,jt,_e),A=new Hg(M),tt=new Xg(M),pt=new nm(O),Ze=new Og(O,pt),ut=new Yg(O,pt,_e,Ze),mt=new Kg(O,ut,pt,_e),pe=new Jg(O,Nt,U),At=new Vg(Yt),Ht=new oy(M,A,tt,xt,Nt,Ze,At),zt=new Cy(M,Yt),Xt=new hy,Pe=new gy(xt),de=new Fg(M,A,tt,Pt,mt,d,l),Jt=new _y(M,mt,Nt),Y=new Iy(O,_e,Nt,Pt),Kt=new kg(O,xt,_e),Le=new $g(O,xt,_e),_e.programs=Ht.programs,M.capabilities=Nt,M.extensions=xt,M.properties=Yt,M.renderLists=Xt,M.shadowMap=Jt,M.state=Pt,M.info=_e}qt();let ft=new Rh(M,O);this.xr=ft,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=xt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=xt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(P){P!==void 0&&(ct=P,this.setSize(rt,It,!1))},this.getSize=function(P){return P.set(rt,It)},this.setSize=function(P,k,it=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,It=k,e.width=Math.floor(P*ct),e.height=Math.floor(k*ct),it===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(rt*ct,It*ct).floor()},this.setDrawingBufferSize=function(P,k,it){rt=P,It=k,ct=it,e.width=Math.floor(P*it),e.height=Math.floor(k*it),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(Ot)},this.setViewport=function(P,k,it,et){P.isVector4?Ot.set(P.x,P.y,P.z,P.w):Ot.set(P,k,it,et),Pt.viewport(H.copy(Ot).multiplyScalar(ct).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,k,it,et){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,k,it,et),Pt.scissor(st.copy(ie).multiplyScalar(ct).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(P){Pt.setScissorTest(Re=P)},this.setOpaqueSort=function(P){Ut=P},this.setTransparentSort=function(P){Zt=P},this.getClearColor=function(P){return P.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(P=!0,k=!0,it=!0){let et=0;if(P){let j=!1;if(B!==null){let Tt=B.texture.format;j=Tt===of||Tt===af||Tt===rf}if(j){let Tt=B.texture.type,Vt=Tt===Os||Tt===Rr||Tt===to||Tt===ga||Tt===nf||Tt===sf,W=de.getClearColor(),kt=de.getClearAlpha(),he=W.r,Se=W.g,Qt=W.b;Vt?(v[0]=he,v[1]=Se,v[2]=Qt,v[3]=kt,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=he,T[1]=Se,T[2]=Qt,T[3]=kt,O.clearBufferiv(O.COLOR,0,T))}else et|=O.COLOR_BUFFER_BIT}k&&(et|=O.DEPTH_BUFFER_BIT),it&&(et|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),Xt.dispose(),Pe.dispose(),Yt.dispose(),A.dispose(),tt.dispose(),mt.dispose(),Ze.dispose(),Y.dispose(),Ht.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ni),ft.removeEventListener("sessionend",pr),kn.stop()};function K(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;let P=_e.autoReset,k=Jt.enabled,it=Jt.autoUpdate,et=Jt.needsUpdate,j=Jt.type;qt(),_e.autoReset=P,Jt.enabled=k,Jt.autoUpdate=it,Jt.needsUpdate=et,Jt.type=j}function Gt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Me(P){let k=P.target;k.removeEventListener("dispose",Me),rn(k)}function rn(P){Tn(P),Yt.remove(P)}function Tn(P){let k=Yt.get(P).programs;k!==void 0&&(k.forEach(function(it){Ht.releaseProgram(it)}),P.isShaderMaterial&&Ht.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,it,et,j,Tt){k===null&&(k=Ue);let Vt=j.isMesh&&j.matrixWorld.determinant()<0,W=Gs(P,k,it,et,j);Pt.setMaterial(et,Vt);let kt=it.index,he=1;if(et.wireframe===!0){if(kt=ut.getWireframeAttribute(it),kt===void 0)return;he=2}let Se=it.drawRange,Qt=it.attributes.position,Ve=Se.start*he,Je=(Se.start+Se.count)*he;Tt!==null&&(Ve=Math.max(Ve,Tt.start*he),Je=Math.min(Je,(Tt.start+Tt.count)*he)),kt!==null?(Ve=Math.max(Ve,0),Je=Math.min(Je,kt.count)):Qt!=null&&(Ve=Math.max(Ve,0),Je=Math.min(Je,Qt.count));let en=Je-Ve;if(en<0||en===1/0)return;Ze.setup(j,et,W,it,kt);let Bn,We=Kt;if(kt!==null&&(Bn=pt.get(kt),We=Le,We.setIndex(Bn)),j.isMesh)et.wireframe===!0?(Pt.setLineWidth(et.wireframeLinewidth*Dt()),We.setMode(O.LINES)):We.setMode(O.TRIANGLES);else if(j.isLine){let ne=et.linewidth;ne===void 0&&(ne=1),Pt.setLineWidth(ne*Dt()),j.isLineSegments?We.setMode(O.LINES):j.isLineLoop?We.setMode(O.LINE_LOOP):We.setMode(O.LINE_STRIP)}else j.isPoints?We.setMode(O.POINTS):j.isSprite&&We.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)We.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))We.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let ne=j._multiDrawStarts,Nn=j._multiDrawCounts,He=j._multiDrawCount,mn=kt?pt.get(kt).bytesPerElement:1,G=Yt.get(et).currentProgram.getUniforms();for(let fn=0;fn<He;fn++)G.setValue(O,"_gl_DrawID",fn),We.render(ne[fn]/mn,Nn[fn])}else if(j.isInstancedMesh)We.renderInstances(Ve,en,j.count);else if(it.isInstancedBufferGeometry){let ne=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Nn=Math.min(it.instanceCount,ne);We.renderInstances(Ve,en,Nn)}else We.render(Ve,en)};function Be(P,k,it){P.transparent===!0&&P.side===Ln&&P.forceSinglePass===!1?(P.side=Jn,P.needsUpdate=!0,si(P,k,it),P.side=sr,P.needsUpdate=!0,si(P,k,it),P.side=Ln):si(P,k,it)}this.compile=function(P,k,it=null){it===null&&(it=P),m=Pe.get(it),m.init(k),C.push(m),it.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),P!==it&&P.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();let et=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Vt=0;Vt<Tt.length;Vt++){let W=Tt[Vt];Be(W,it,j),et.add(W)}else Be(Tt,it,j),et.add(Tt)}),C.pop(),m=null,et},this.compileAsync=function(P,k,it=null){let et=this.compile(P,k,it);return new Promise(j=>{function Tt(){if(et.forEach(function(Vt){Yt.get(Vt).currentProgram.isReady()&&et.delete(Vt)}),et.size===0){j(P);return}setTimeout(Tt,10)}xt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let tn=null;function Pn(P){tn&&tn(P)}function Ni(){kn.stop()}function pr(){kn.start()}let kn=new fd;kn.setAnimationLoop(Pn),typeof self!="undefined"&&kn.setContext(self),this.setAnimationLoop=function(P){tn=P,ft.setAnimationLoop(P),P===null?kn.stop():kn.start()},ft.addEventListener("sessionstart",Ni),ft.addEventListener("sessionend",pr),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,B),m=Pe.get(P,C.length),m.init(k),C.push(m),ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),gt.setFromProjectionMatrix(ue),se=this.localClippingEnabled,Lt=At.init(this.clippingPlanes,se),y=Xt.get(P,S.length),y.init(),S.push(y),ft.enabled===!0&&ft.isPresenting===!0){let Tt=M.xr.getDepthSensingMesh();Tt!==null&&vs(Tt,k,-1/0,M.sortObjects)}vs(P,k,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Ut,Zt),wt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,wt&&de.addToRenderList(y,P),this.info.render.frame++,Lt===!0&&At.beginShadows();let it=m.state.shadowsArray;Jt.render(it,P,k),Lt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=y.opaque,j=y.transmissive;if(m.setupLights(),k.isArrayCamera){let Tt=k.cameras;if(j.length>0)for(let Vt=0,W=Tt.length;Vt<W;Vt++){let kt=Tt[Vt];zi(et,j,P,kt)}wt&&de.render(P);for(let Vt=0,W=Tt.length;Vt<W;Vt++){let kt=Tt[Vt];hn(y,P,kt,kt.viewport)}}else j.length>0&&zi(et,j,P,k),wt&&de.render(P),hn(y,P,k);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(M,P,k),Ze.resetDefaultState(),L=-1,R=null,C.pop(),C.length>0?(m=C[C.length-1],Lt===!0&&At.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?y=S[S.length-1]:y=null};function vs(P,k,it,et){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||gt.intersectsSprite(P)){et&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);let Vt=mt.update(P),W=P.material;W.visible&&y.push(P,Vt,W,it,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||gt.intersectsObject(P))){let Vt=mt.update(P),W=P.material;if(et&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ae.copy(Vt.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4(ue)),Array.isArray(W)){let kt=Vt.groups;for(let he=0,Se=kt.length;he<Se;he++){let Qt=kt[he],Ve=W[Qt.materialIndex];Ve&&Ve.visible&&y.push(P,Vt,Ve,it,ae.z,Qt)}}else W.visible&&y.push(P,Vt,W,it,ae.z,null)}}let Tt=P.children;for(let Vt=0,W=Tt.length;Vt<W;Vt++)vs(Tt[Vt],k,it,et)}function hn(P,k,it,et){let j=P.opaque,Tt=P.transmissive,Vt=P.transparent;m.setupLightsView(it),Lt===!0&&At.setGlobalState(M.clippingPlanes,it),et&&Pt.viewport(H.copy(et)),j.length>0&&gn(j,k,it),Tt.length>0&&gn(Tt,k,it),Vt.length>0&&gn(Vt,k,it),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function zi(P,k,it,et){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[et.id]===void 0&&(m.state.transmissionRenderTarget[et.id]=new es(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?po:Os,minFilter:Ar,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let Tt=m.state.transmissionRenderTarget[et.id],Vt=et.viewport||H;Tt.setSize(Vt.z,Vt.w);let W=M.getRenderTarget();M.setRenderTarget(Tt),M.getClearColor(at),Mt=M.getClearAlpha(),Mt<1&&M.setClearColor(16777215,.5),M.clear(),wt&&de.render(it);let kt=M.toneMapping;M.toneMapping=nr;let he=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),m.setupLightsView(et),Lt===!0&&At.setGlobalState(M.clippingPlanes,et),gn(P,it,et),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qt=0,Ve=k.length;Qt<Ve;Qt++){let Je=k[Qt],en=Je.object,Bn=Je.geometry,We=Je.material,ne=Je.group;if(We.side===Ln&&en.layers.test(et.layers)){let Nn=We.side;We.side=Jn,We.needsUpdate=!0,di(en,it,et,Bn,We,ne),We.side=Nn,We.needsUpdate=!0,Se=!0}}Se===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}M.setRenderTarget(W),M.setClearColor(at,Mt),he!==void 0&&(et.viewport=he),M.toneMapping=kt}function gn(P,k,it){let et=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Tt=P.length;j<Tt;j++){let Vt=P[j],W=Vt.object,kt=Vt.geometry,he=et===null?Vt.material:et,Se=Vt.group;W.layers.test(it.layers)&&di(W,k,it,kt,he,Se)}}function di(P,k,it,et,j,Tt){P.onBeforeRender(M,k,it,et,j,Tt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(M,k,it,et,P,Tt),j.transparent===!0&&j.side===Ln&&j.forceSinglePass===!1?(j.side=Jn,j.needsUpdate=!0,M.renderBufferDirect(it,k,et,j,P,Tt),j.side=sr,j.needsUpdate=!0,M.renderBufferDirect(it,k,et,j,P,Tt),j.side=Ln):M.renderBufferDirect(it,k,et,j,P,Tt),P.onAfterRender(M,k,it,et,j,Tt)}function si(P,k,it){k.isScene!==!0&&(k=Ue);let et=Yt.get(P),j=m.state.lights,Tt=m.state.shadowsArray,Vt=j.state.version,W=Ht.getParameters(P,j.state,Tt,k,it),kt=Ht.getProgramCacheKey(W),he=et.programs;et.environment=P.isMeshStandardMaterial?k.environment:null,et.fog=k.fog,et.envMap=(P.isMeshStandardMaterial?tt:A).get(P.envMap||et.environment),et.envMapRotation=et.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,he===void 0&&(P.addEventListener("dispose",Me),he=new Map,et.programs=he);let Se=he.get(kt);if(Se!==void 0){if(et.currentProgram===Se&&et.lightsStateVersion===Vt)return ri(P,W),Se}else W.uniforms=Ht.getUniforms(P),P.onBeforeCompile(W,M),Se=Ht.acquireProgram(W,kt),he.set(kt,Se),et.uniforms=W.uniforms;let Qt=et.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qt.clippingPlanes=At.uniform),ri(P,W),et.needsLights=Or(P),et.lightsStateVersion=Vt,et.needsLights&&(Qt.ambientLightColor.value=j.state.ambient,Qt.lightProbe.value=j.state.probe,Qt.directionalLights.value=j.state.directional,Qt.directionalLightShadows.value=j.state.directionalShadow,Qt.spotLights.value=j.state.spot,Qt.spotLightShadows.value=j.state.spotShadow,Qt.rectAreaLights.value=j.state.rectArea,Qt.ltc_1.value=j.state.rectAreaLTC1,Qt.ltc_2.value=j.state.rectAreaLTC2,Qt.pointLights.value=j.state.point,Qt.pointLightShadows.value=j.state.pointShadow,Qt.hemisphereLights.value=j.state.hemi,Qt.directionalShadowMap.value=j.state.directionalShadowMap,Qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qt.spotShadowMap.value=j.state.spotShadowMap,Qt.spotLightMatrix.value=j.state.spotLightMatrix,Qt.spotLightMap.value=j.state.spotLightMap,Qt.pointShadowMap.value=j.state.pointShadowMap,Qt.pointShadowMatrix.value=j.state.pointShadowMatrix),et.currentProgram=Se,et.uniformsList=null,Se}function bs(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=ua.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function ri(P,k){let it=Yt.get(P);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Gs(P,k,it,et,j){k.isScene!==!0&&(k=Ue),U.resetTextureUnits();let Tt=k.fog,Vt=et.isMeshStandardMaterial?k.environment:null,W=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ia,kt=(et.isMeshStandardMaterial?tt:A).get(et.envMap||Vt),he=et.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Se=!!it.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Qt=!!it.morphAttributes.position,Ve=!!it.morphAttributes.normal,Je=!!it.morphAttributes.color,en=nr;et.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(en=M.toneMapping);let Bn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,We=Bn!==void 0?Bn.length:0,ne=Yt.get(et),Nn=m.state.lights;if(Lt===!0&&(se===!0||P!==R)){let _n=P===R&&et.id===L;At.setState(et,P,_n)}let He=!1;et.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Nn.state.version||ne.outputColorSpace!==W||j.isBatchedMesh&&ne.batching===!1||!j.isBatchedMesh&&ne.batching===!0||j.isBatchedMesh&&ne.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ne.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ne.instancing===!1||!j.isInstancedMesh&&ne.instancing===!0||j.isSkinnedMesh&&ne.skinning===!1||!j.isSkinnedMesh&&ne.skinning===!0||j.isInstancedMesh&&ne.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ne.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ne.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ne.instancingMorph===!1&&j.morphTexture!==null||ne.envMap!==kt||et.fog===!0&&ne.fog!==Tt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==At.numPlanes||ne.numIntersection!==At.numIntersection)||ne.vertexAlphas!==he||ne.vertexTangents!==Se||ne.morphTargets!==Qt||ne.morphNormals!==Ve||ne.morphColors!==Je||ne.toneMapping!==en||ne.morphTargetsCount!==We)&&(He=!0):(He=!0,ne.__version=et.version);let mn=ne.currentProgram;He===!0&&(mn=si(et,k,j));let G=!1,fn=!1,bi=!1,Te=mn.getUniforms(),Vn=ne.uniforms;if(Pt.useProgram(mn.program)&&(G=!0,fn=!0,bi=!0),et.id!==L&&(L=et.id,fn=!0),G||R!==P){Pt.buffers.depth.getReversed()?(Ft.copy(P.projectionMatrix),zp(Ft),Fp(Ft),Te.setValue(O,"projectionMatrix",Ft)):Te.setValue(O,"projectionMatrix",P.projectionMatrix),Te.setValue(O,"viewMatrix",P.matrixWorldInverse);let zn=Te.map.cameraPosition;zn!==void 0&&zn.setValue(O,ce.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Te.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,fn=!0,bi=!0)}if(j.isSkinnedMesh){Te.setOptional(O,j,"bindMatrix"),Te.setOptional(O,j,"bindMatrixInverse");let _n=j.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Te.setValue(O,"boneTexture",_n.boneTexture,U))}j.isBatchedMesh&&(Te.setOptional(O,j,"batchingTexture"),Te.setValue(O,"batchingTexture",j._matricesTexture,U),Te.setOptional(O,j,"batchingIdTexture"),Te.setValue(O,"batchingIdTexture",j._indirectTexture,U),Te.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Te.setValue(O,"batchingColorTexture",j._colorsTexture,U));let Xi=it.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&pe.update(j,it,mn),(fn||ne.receiveShadow!==j.receiveShadow)&&(ne.receiveShadow=j.receiveShadow,Te.setValue(O,"receiveShadow",j.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Vn.envMap.value=kt,Vn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&k.environment!==null&&(Vn.envMapIntensity.value=k.environmentIntensity),fn&&(Te.setValue(O,"toneMappingExposure",M.toneMappingExposure),ne.needsLights&&Wi(Vn,bi),Tt&&et.fog===!0&&zt.refreshFogUniforms(Vn,Tt),zt.refreshMaterialUniforms(Vn,et,ct,It,m.state.transmissionRenderTarget[P.id]),ua.upload(O,bs(ne),Vn,U)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ua.upload(O,bs(ne),Vn,U),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Te.setValue(O,"center",j.center),Te.setValue(O,"modelViewMatrix",j.modelViewMatrix),Te.setValue(O,"normalMatrix",j.normalMatrix),Te.setValue(O,"modelMatrix",j.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let _n=et.uniformsGroups;for(let zn=0,ai=_n.length;zn<ai;zn++){let Fi=_n[zn];Y.update(Fi,mn),Y.bind(Fi,mn)}}return mn}function Wi(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function Or(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,k,it){Yt.get(P.texture).__webglTexture=k,Yt.get(P.depthTexture).__webglTexture=it;let et=Yt.get(P);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=it===void 0,et.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){let it=Yt.get(P);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,it=0){B=P,z=k,V=it;let et=!0,j=null,Tt=!1,Vt=!1;if(P){let kt=Yt.get(P);if(kt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),et=!1;else if(kt.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(kt.__hasExternalTextures)U.rebindTextures(P,Yt.get(P.texture).__webglTexture,Yt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qt=P.depthTexture;if(kt.__boundDepthTexture!==Qt){if(Qt!==null&&Yt.has(Qt)&&(P.width!==Qt.image.width||P.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let he=P.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(Vt=!0);let Se=Yt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Se[k])?j=Se[k][it]:j=Se[k],Tt=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?j=Yt.get(P).__webglMultisampledFramebuffer:Array.isArray(Se)?j=Se[it]:j=Se,H.copy(P.viewport),st.copy(P.scissor),nt=P.scissorTest}else H.copy(Ot).multiplyScalar(ct).floor(),st.copy(ie).multiplyScalar(ct).floor(),nt=Re;if(Pt.bindFramebuffer(O.FRAMEBUFFER,j)&&et&&Pt.drawBuffers(P,j),Pt.viewport(H),Pt.scissor(st),Pt.setScissorTest(nt),Tt){let kt=Yt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,kt.__webglTexture,it)}else if(Vt){let kt=Yt.get(P.texture),he=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,it||0,he)}L=-1},this.readRenderTargetPixels=function(P,k,it,et,j,Tt,Vt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Yt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Vt!==void 0&&(W=W[Vt]),W){Pt.bindFramebuffer(O.FRAMEBUFFER,W);try{let kt=P.texture,he=kt.format,Se=kt.type;if(!Nt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-et&&it>=0&&it<=P.height-j&&O.readPixels(k,it,et,j,jt.convert(he),jt.convert(Se),Tt)}finally{let kt=B!==null?Yt.get(B).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,k,it,et,j,Tt,Vt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Yt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Vt!==void 0&&(W=W[Vt]),W){let kt=P.texture,he=kt.format,Se=kt.type;if(!Nt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-et&&it>=0&&it<=P.height-j){Pt.bindFramebuffer(O.FRAMEBUFFER,W);let Qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.bufferData(O.PIXEL_PACK_BUFFER,Tt.byteLength,O.STREAM_READ),O.readPixels(k,it,et,j,jt.convert(he),jt.convert(Se),0);let Ve=B!==null?Yt.get(B).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,Ve);let Je=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Np(O,Je,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Tt),O.deleteBuffer(Qt),O.deleteSync(Je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,it=0){P.isTexture!==!0&&(Za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);let et=Math.pow(2,-it),j=Math.floor(P.image.width*et),Tt=Math.floor(P.image.height*et),Vt=k!==null?k.x:0,W=k!==null?k.y:0;U.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,it,0,0,Vt,W,j,Tt),Pt.unbindTexture()},this.copyTextureToTexture=function(P,k,it=null,et=null,j=0){P.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,P=arguments[1],k=arguments[2],j=arguments[3]||0,it=null);let Tt,Vt,W,kt,he,Se,Qt,Ve,Je,en=P.isCompressedTexture?P.mipmaps[j]:P.image;it!==null?(Tt=it.max.x-it.min.x,Vt=it.max.y-it.min.y,W=it.isBox3?it.max.z-it.min.z:1,kt=it.min.x,he=it.min.y,Se=it.isBox3?it.min.z:0):(Tt=en.width,Vt=en.height,W=en.depth||1,kt=0,he=0,Se=0),et!==null?(Qt=et.x,Ve=et.y,Je=et.z):(Qt=0,Ve=0,Je=0);let Bn=jt.convert(k.format),We=jt.convert(k.type),ne;k.isData3DTexture?(U.setTexture3D(k,0),ne=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),ne=O.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Nn=O.getParameter(O.UNPACK_ROW_LENGTH),He=O.getParameter(O.UNPACK_IMAGE_HEIGHT),mn=O.getParameter(O.UNPACK_SKIP_PIXELS),G=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,en.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,en.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,he),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Se);let bi=P.isDataArrayTexture||P.isData3DTexture,Te=k.isDataArrayTexture||k.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Vn=Yt.get(P),Xi=Yt.get(k),_n=Yt.get(Vn.__renderTarget),zn=Yt.get(Xi.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let ai=0;ai<W;ai++)bi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.get(P).__webglTexture,j,Se+ai),P.isDepthTexture?(Te&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,j,Je+ai),O.blitFramebuffer(kt,he,Tt,Vt,Qt,Ve,Tt,Vt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Te?O.copyTexSubImage3D(ne,j,Qt,Ve,Je+ai,kt,he,Tt,Vt):O.copyTexSubImage2D(ne,j,Qt,Ve,Je+ai,kt,he,Tt,Vt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Te?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(ne,j,Qt,Ve,Je,Tt,Vt,W,Bn,We,en.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(ne,j,Qt,Ve,Je,Tt,Vt,W,Bn,en.data):O.texSubImage3D(ne,j,Qt,Ve,Je,Tt,Vt,W,Bn,We,en):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,Qt,Ve,Tt,Vt,Bn,We,en.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,Qt,Ve,en.width,en.height,Bn,en.data):O.texSubImage2D(O.TEXTURE_2D,j,Qt,Ve,Tt,Vt,Bn,We,en);O.pixelStorei(O.UNPACK_ROW_LENGTH,Nn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,He),O.pixelStorei(O.UNPACK_SKIP_PIXELS,mn),O.pixelStorei(O.UNPACK_SKIP_ROWS,G),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),j===0&&k.generateMipmaps&&O.generateMipmap(ne),Pt.unbindTexture()},this.copyTextureToTexture3D=function(P,k,it=null,et=null,j=0){return P.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,et=arguments[1]||null,P=arguments[2],k=arguments[3],j=arguments[4]||0),Za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,it,et,j)},this.initRenderTarget=function(P){Yt.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Pt.unbindTexture()},this.resetState=function(){z=0,V=0,B=null,Pt.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qe._getUnpackColorSpace()}};var ba=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cr=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},vl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mi=new N,ro=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix4(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyNormalMatrix(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.transformDirection(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fs(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fs(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fs(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fs(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kn=class extends Bs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ia,Xa=new N,sa=new N,ra=new N,aa=new Ct,qa=new Ct,gd=new xn,Zo=new N,Ya=new N,Jo=new N,Uu=new Ct,vc=new Ct,Nu=new Ct,ei=class extends ti{constructor(t=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",ia===void 0){ia=new yn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vl(e,5);ia.setIndex([0,1,2,0,2,3]),ia.setAttribute("position",new ro(i,3,0,!1)),ia.setAttribute("uv",new ro(i,2,3,!1))}this.geometry=ia,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sa.setFromMatrixScale(this.matrixWorld),gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ra.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sa.multiplyScalar(-ra.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ko(Zo.set(-.5,-.5,0),ra,a,sa,s,r),Ko(Ya.set(.5,-.5,0),ra,a,sa,s,r),Ko(Jo.set(.5,.5,0),ra,a,sa,s,r),Uu.set(0,0),vc.set(1,0),Nu.set(1,1);let o=t.ray.intersectTriangle(Zo,Ya,Jo,!1,Xa);if(o===null&&(Ko(Ya.set(-.5,.5,0),ra,a,sa,s,r),vc.set(0,1),o=t.ray.intersectTriangle(Zo,Jo,Ya,!1,Xa),o===null))return;let l=t.ray.origin.distanceTo(Xa);l<t.near||l>t.far||e.push({distance:l,point:Xa.clone(),uv:tr.getInterpolation(Xa,Zo,Ya,Jo,Uu,vc,Nu,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ko(n,t,e,i,s,r){aa.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(qa.x=r*aa.x-s*aa.y,qa.y=s*aa.x+r*aa.y):qa.copy(aa),n.copy(t),n.x+=qa.x,n.y+=qa.y,n.applyMatrix4(gd)}var Ma=class extends Bs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zu=new xn,Ch=new no,jo=new ya,Qo=new N,ao=class extends ti{constructor(t=new yn,e=new Ma){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,t.ray.intersectsSphere(jo)===!1)return;zu.copy(s).invert(),Ch.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=p,T=d;v<T;v++){let y=h.getX(v);Qo.fromBufferAttribute(u,y),Fu(Qo,y,l,s,t,e,this)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=p,T=d;v<T;v++)Qo.fromBufferAttribute(u,v),Fu(Qo,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fu(n,t,e,i,s,r,a){let o=Ch.distanceSqToPoint(n);if(o<e){let l=new N;Ch.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wa=class extends Si{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let f=i[s],p=i[s+1]-f,d=(a-f)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new N,s=[],r=[],a=[],o=new N,l=new xn;for(let d=0;d<=t;d++){let v=d/t;s[d]=this.getTangentAt(v,new N)}r[0]=new N,a[0]=new N;let h=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);f<=h&&(h=f,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),p<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Qn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},oo=class extends Vi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=h-this.aY;l=p*f-d*u+this.aX,h=p*u+d*f+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ih=class extends oo{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cf(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,f,u){let p=(a-r)/h-(o-r)/(h+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+u)+(l-o)/u;p*=f,d*=f,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var tl=new N,bc=new cf,Mc=new cf,wc=new cf,Ph=class extends Vi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,f;this.closed||o>0?h=s[(o-1)%r]:(tl.subVectors(s[0],s[1]).add(s[0]),h=tl);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(tl.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=tl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(h.distanceToSquared(u),d),T=Math.pow(u.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(f),d);T<1e-4&&(T=1),v<1e-4&&(v=T),y<1e-4&&(y=T),bc.initNonuniformCatmullRom(h.x,u.x,p.x,f.x,v,T,y),Mc.initNonuniformCatmullRom(h.y,u.y,p.y,f.y,v,T,y),wc.initNonuniformCatmullRom(h.z,u.z,p.z,f.z,v,T,y)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(h.x,u.x,p.x,f.x,this.tension),Mc.initCatmullRom(h.y,u.y,p.y,f.y,this.tension),wc.initCatmullRom(h.z,u.z,p.z,f.z,this.tension));return i.set(bc.calc(l),Mc.calc(l),wc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ou(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Py(n,t){let e=1-n;return e*e*t}function Ly(n,t){return 2*(1-n)*n*t}function Dy(n,t){return n*n*t}function ja(n,t,e,i){return Py(n,t)+Ly(n,e)+Dy(n,i)}function Uy(n,t){let e=1-n;return e*e*e*t}function Ny(n,t){let e=1-n;return 3*e*e*n*t}function zy(n,t){return 3*(1-n)*n*n*t}function Fy(n,t){return n*n*n*t}function Qa(n,t,e,i,s){return Uy(n,t)+Ny(n,e)+zy(n,i)+Fy(n,s)}var bl=class extends Vi{constructor(t=new Ct,e=new Ct,i=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ct){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qa(t,s.x,r.x,a.x,o.x),Qa(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lh=class extends Vi{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qa(t,s.x,r.x,a.x,o.x),Qa(t,s.y,r.y,a.y,o.y),Qa(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends Vi{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dh=class extends Vi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Vi{constructor(t=new Ct,e=new Ct,i=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ct){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ja(t,s.x,r.x,a.x),ja(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uh=class extends Vi{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ja(t,s.x,r.x,a.x),ja(t,s.y,r.y,a.y),ja(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],f=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Ou(o,l.x,h.x,f.x,u.x),Ou(o,l.y,h.y,f.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},Nh=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Ph,CubicBezierCurve:bl,CubicBezierCurve3:Lh,EllipseCurve:oo,LineCurve:Ml,LineCurve3:Dh,QuadraticBezierCurve:wl,QuadraticBezierCurve3:Uh,SplineCurve:Sl}),zh=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){let f=l[h];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Nh[s.type]().fromJSON(s))}return this}},Tl=class extends zh{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ml(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new wl(this.currentPoint.clone(),new Ct(t,e),new Ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new bl(this.currentPoint.clone(),new Ct(t,e),new Ct(i,s),new Ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Sl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let h=new oo(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},El=class n extends yn{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Qn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],f=1/e,u=new N,p=new Ct,d=new N,v=new N,T=new N,y=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:y=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-y,d.z=m*0,T.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(T.x,T.y,T.z);break;default:y=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-y,d.z=m*0,v.copy(d),d.x+=T.x,d.y+=T.y,d.z+=T.z,d.normalize(),l.push(d.x,d.y,d.z),T.copy(v)}for(let S=0;S<=e;S++){let C=i+S*f*s,M=Math.sin(C),q=Math.cos(C);for(let z=0;z<=t.length-1;z++){u.x=t[z].x*M,u.y=t[z].y,u.z=t[z].x*q,a.push(u.x,u.y,u.z),p.x=S/e,p.y=z/(t.length-1),o.push(p.x,p.y);let V=l[3*z+0]*M,B=l[3*z+1],L=l[3*z+0]*q;h.push(V,B,L)}}for(let S=0;S<e;S++)for(let C=0;C<t.length-1;C++){let M=C+S*t.length,q=M,z=M+t.length,V=M+t.length+1,B=M+1;r.push(q,z,B),r.push(V,B,z)}this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Yn=class n extends yn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new N,f=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),f.x=(a[p]/t+1)/2,f.y=(a[p+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},yi=class n extends yn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],p=[],d=[],v=0,T=[],y=i/2,m=0;S(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(p,3)),this.setAttribute("uv",new Ce(d,2));function S(){let M=new N,q=new N,z=0,V=(e-t)/i;for(let B=0;B<=r;B++){let L=[],R=B/r,H=R*(e-t)+t;for(let st=0;st<=s;st++){let nt=st/s,at=nt*l+o,Mt=Math.sin(at),rt=Math.cos(at);q.x=H*Mt,q.y=-R*i+y,q.z=H*rt,u.push(q.x,q.y,q.z),M.set(Mt,V,rt).normalize(),p.push(M.x,M.y,M.z),d.push(nt,1-R),L.push(v++)}T.push(L)}for(let B=0;B<s;B++)for(let L=0;L<r;L++){let R=T[L][B],H=T[L+1][B],st=T[L+1][B+1],nt=T[L][B+1];(t>0||L!==0)&&(f.push(R,H,nt),z+=3),(e>0||L!==r-1)&&(f.push(H,st,nt),z+=3)}h.addGroup(m,z,0),m+=z}function C(M){let q=v,z=new Ct,V=new N,B=0,L=M===!0?t:e,R=M===!0?1:-1;for(let st=1;st<=s;st++)u.push(0,y*R,0),p.push(0,R,0),d.push(.5,.5),v++;let H=v;for(let st=0;st<=s;st++){let at=st/s*l+o,Mt=Math.cos(at),rt=Math.sin(at);V.x=L*rt,V.y=y*R,V.z=L*Mt,u.push(V.x,V.y,V.z),p.push(0,R,0),z.x=Mt*.5+.5,z.y=rt*.5*R+.5,d.push(z.x,z.y),v++}for(let st=0;st<s;st++){let nt=q+st,at=H+st;M===!0?f.push(at,at+1,nt):f.push(at+1,at,nt),B+=3}h.addGroup(m,B,M===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class n extends yi{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fh=class n extends yn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),h(i),f(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let C=new N,M=new N,q=new N;for(let z=0;z<e.length;z+=3)d(e[z+0],C),d(e[z+1],M),d(e[z+2],q),l(C,M,q,S)}function l(S,C,M,q){let z=q+1,V=[];for(let B=0;B<=z;B++){V[B]=[];let L=S.clone().lerp(M,B/z),R=C.clone().lerp(M,B/z),H=z-B;for(let st=0;st<=H;st++)st===0&&B===z?V[B][st]=L:V[B][st]=L.clone().lerp(R,st/H)}for(let B=0;B<z;B++)for(let L=0;L<2*(z-B)-1;L++){let R=Math.floor(L/2);L%2===0?(p(V[B][R+1]),p(V[B+1][R]),p(V[B][R])):(p(V[B][R+1]),p(V[B+1][R+1]),p(V[B+1][R]))}}function h(S){let C=new N;for(let M=0;M<r.length;M+=3)C.x=r[M+0],C.y=r[M+1],C.z=r[M+2],C.normalize().multiplyScalar(S),r[M+0]=C.x,r[M+1]=C.y,r[M+2]=C.z}function f(){let S=new N;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let M=y(S)/2/Math.PI+.5,q=m(S)/Math.PI+.5;a.push(M,1-q)}v(),u()}function u(){for(let S=0;S<a.length;S+=6){let C=a[S+0],M=a[S+2],q=a[S+4],z=Math.max(C,M,q),V=Math.min(C,M,q);z>.9&&V<.1&&(C<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),q<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function d(S,C){let M=S*3;C.x=t[M+0],C.y=t[M+1],C.z=t[M+2]}function v(){let S=new N,C=new N,M=new N,q=new N,z=new Ct,V=new Ct,B=new Ct;for(let L=0,R=0;L<r.length;L+=9,R+=6){S.set(r[L+0],r[L+1],r[L+2]),C.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),z.set(a[R+0],a[R+1]),V.set(a[R+2],a[R+3]),B.set(a[R+4],a[R+5]),q.copy(S).add(C).add(M).divideScalar(3);let H=y(q);T(z,R+0,S,H),T(V,R+2,C,H),T(B,R+4,M,H)}}function T(S,C,M,q){q<0&&S.x===1&&(a[C]=S.x-1),M.x===0&&M.z===0&&(a[C]=q/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var or=class extends Tl{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Tl().fromJSON(s))}return this}},Oy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=xd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,f,u,p,d;if(i&&(r=Gy(n,t,r,e)),n.length>80*e){o=h=n[0],l=f=n[1];for(let v=e;v<s;v+=e)u=n[v],p=n[v+1],u<o&&(o=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p);d=Math.max(h-o,f-l),d=d!==0?32767/d:0}return lo(r,a,e,o,l,d,0),a}};function xd(n,t,e,i,s){let r,a;if(s===t_(n,t,e,i)>0)for(r=t;r<e;r+=i)a=ku(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=ku(r,n[r],n[r+1],a);return a&&Ul(a,a.next)&&(ho(a),a=a.next),a}function Ir(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ul(e,e.next)||In(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lo(n,t,e,i,s,r,a){if(!n)return;!a&&r&&$y(n,i,s,r);let o=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?By(n,i,s,r):ky(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),ho(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=Vy(Ir(n),t,e),lo(n,t,e,i,s,r,2)):a===2&&Hy(n,t,e,i,s,r):lo(Ir(n),t,e,i,s,r,1);break}}}function ky(n){let t=n.prev,e=n,i=n.next;if(In(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,h=i.y,f=s<r?s<a?s:a:r<a?r:a,u=o<l?o<h?o:h:l<h?l:h,p=s>r?s>a?s:a:r>a?r:a,d=o>l?o>h?o:h:l>h?l:h,v=i.next;for(;v!==t;){if(v.x>=f&&v.x<=p&&v.y>=u&&v.y<=d&&la(s,o,r,l,a,h,v.x,v.y)&&In(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function By(n,t,e,i){let s=n.prev,r=n,a=n.next;if(In(s,r,a)>=0)return!1;let o=s.x,l=r.x,h=a.x,f=s.y,u=r.y,p=a.y,d=o<l?o<h?o:h:l<h?l:h,v=f<u?f<p?f:p:u<p?u:p,T=o>l?o>h?o:h:l>h?l:h,y=f>u?f>p?f:p:u>p?u:p,m=Oh(d,v,t,e,i),S=Oh(T,y,t,e,i),C=n.prevZ,M=n.nextZ;for(;C&&C.z>=m&&M&&M.z<=S;){if(C.x>=d&&C.x<=T&&C.y>=v&&C.y<=y&&C!==s&&C!==a&&la(o,f,l,u,h,p,C.x,C.y)&&In(C.prev,C,C.next)>=0||(C=C.prevZ,M.x>=d&&M.x<=T&&M.y>=v&&M.y<=y&&M!==s&&M!==a&&la(o,f,l,u,h,p,M.x,M.y)&&In(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;C&&C.z>=m;){if(C.x>=d&&C.x<=T&&C.y>=v&&C.y<=y&&C!==s&&C!==a&&la(o,f,l,u,h,p,C.x,C.y)&&In(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=T&&M.y>=v&&M.y<=y&&M!==s&&M!==a&&la(o,f,l,u,h,p,M.x,M.y)&&In(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ul(s,r)&&yd(s,i,i.next,r)&&co(s,r)&&co(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ho(i),ho(i.next),i=n=r),i=i.next}while(i!==n);return Ir(i)}function Hy(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ky(a,o)){let l=_d(a,o);a=Ir(a,a.next),l=Ir(l,l.next),lo(a,t,e,i,s,r,0),lo(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Gy(n,t,e,i){let s=[],r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,h=xd(n,o,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Jy(h));for(s.sort(Wy),r=0;r<s.length;r++)e=Xy(s[r],e);return e}function Wy(n,t){return n.x-t.x}function Xy(n,t){let e=qy(n,t);if(!e)return t;let i=_d(e,n);return Ir(i,i.next),Ir(e,e.next)}function qy(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let p=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,h=s.y,f=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&la(a<h?r:i,a,l,h,a<h?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),co(e,n)&&(u<f||u===f&&(e.x>s.x||e.x===s.x&&Yy(s,e)))&&(s=e,f=u)),e=e.next;while(e!==o);return s}function Yy(n,t){return In(n.prev,n,t.prev)<0&&In(t.next,n,n.next)<0}function $y(n,t,e,i){let s=n;do s.z===0&&(s.z=Oh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zy(s)}function Zy(n){let t,e,i,s,r,a,o,l,h=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(a>1);return n}function Oh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Jy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function la(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ky(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!jy(n,t)&&(co(n,t)&&co(t,n)&&Qy(n,t)&&(In(n.prev,n,t.prev)||In(n,t.prev,t))||Ul(n,t)&&In(n.prev,n,n.next)>0&&In(t.prev,t,t.next)>0)}function In(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ul(n,t){return n.x===t.x&&n.y===t.y}function yd(n,t,e,i){let s=nl(In(n,t,e)),r=nl(In(n,t,i)),a=nl(In(e,i,n)),o=nl(In(e,i,t));return!!(s!==r&&a!==o||s===0&&el(n,e,t)||r===0&&el(n,i,t)||a===0&&el(e,n,i)||o===0&&el(e,t,i))}function el(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function nl(n){return n>0?1:n<0?-1:0}function jy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&yd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function co(n,t){return In(n.prev,n,n.next)<0?In(n,t,n.next)>=0&&In(n,n.prev,t)>=0:In(n,t,n.prev)<0||In(n,n.next,t)<0}function Qy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function _d(n,t){let e=new kh(n.i,n.x,n.y),i=new kh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ku(n,t,e,i){let s=new kh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var ir=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Bu(t),Vu(i,t);let a=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Vu(i,e[l]);let o=Oy.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Bu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Vu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var fo=class n extends yn{constructor(t=new or([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];a(h)}this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:e_,C,M=!1,q,z,V,B;m&&(C=m.getSpacedPoints(f),M=!0,p=!1,q=m.computeFrenetFrames(f,!1),z=new N,V=new N,B=new N),p||(y=0,d=0,v=0,T=0);let L=o.extractPoints(h),R=L.shape,H=L.holes;if(!ir.isClockWise(R)){R=R.reverse();for(let wt=0,Dt=H.length;wt<Dt;wt++){let O=H[wt];ir.isClockWise(O)&&(H[wt]=O.reverse())}}let nt=ir.triangulateShape(R,H),at=R;for(let wt=0,Dt=H.length;wt<Dt;wt++){let O=H[wt];R=R.concat(O)}function Mt(wt,Dt,O){return Dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),wt.clone().addScaledVector(Dt,O)}let rt=R.length,It=nt.length;function ct(wt,Dt,O){let re,xt,Nt,Pt=wt.x-Dt.x,_e=wt.y-Dt.y,Yt=O.x-wt.x,U=O.y-wt.y,A=Pt*Pt+_e*_e,tt=Pt*U-_e*Yt;if(Math.abs(tt)>Number.EPSILON){let pt=Math.sqrt(A),ut=Math.sqrt(Yt*Yt+U*U),mt=Dt.x-_e/pt,Ht=Dt.y+Pt/pt,zt=O.x-U/ut,Xt=O.y+Yt/ut,Pe=((zt-mt)*U-(Xt-Ht)*Yt)/(Pt*U-_e*Yt);re=mt+Pt*Pe-wt.x,xt=Ht+_e*Pe-wt.y;let At=re*re+xt*xt;if(At<=2)return new Ct(re,xt);Nt=Math.sqrt(At/2)}else{let pt=!1;Pt>Number.EPSILON?Yt>Number.EPSILON&&(pt=!0):Pt<-Number.EPSILON?Yt<-Number.EPSILON&&(pt=!0):Math.sign(_e)===Math.sign(U)&&(pt=!0),pt?(re=-_e,xt=Pt,Nt=Math.sqrt(A)):(re=Pt,xt=_e,Nt=Math.sqrt(A/2))}return new Ct(re/Nt,xt/Nt)}let Ut=[];for(let wt=0,Dt=at.length,O=Dt-1,re=wt+1;wt<Dt;wt++,O++,re++)O===Dt&&(O=0),re===Dt&&(re=0),Ut[wt]=ct(at[wt],at[O],at[re]);let Zt=[],Ot,ie=Ut.concat();for(let wt=0,Dt=H.length;wt<Dt;wt++){let O=H[wt];Ot=[];for(let re=0,xt=O.length,Nt=xt-1,Pt=re+1;re<xt;re++,Nt++,Pt++)Nt===xt&&(Nt=0),Pt===xt&&(Pt=0),Ot[re]=ct(O[re],O[Nt],O[Pt]);Zt.push(Ot),ie=ie.concat(Ot)}for(let wt=0;wt<y;wt++){let Dt=wt/y,O=d*Math.cos(Dt*Math.PI/2),re=v*Math.sin(Dt*Math.PI/2)+T;for(let xt=0,Nt=at.length;xt<Nt;xt++){let Pt=Mt(at[xt],Ut[xt],re);Ft(Pt.x,Pt.y,-O)}for(let xt=0,Nt=H.length;xt<Nt;xt++){let Pt=H[xt];Ot=Zt[xt];for(let _e=0,Yt=Pt.length;_e<Yt;_e++){let U=Mt(Pt[_e],Ot[_e],re);Ft(U.x,U.y,-O)}}}let Re=v+T;for(let wt=0;wt<rt;wt++){let Dt=p?Mt(R[wt],ie[wt],Re):R[wt];M?(V.copy(q.normals[0]).multiplyScalar(Dt.x),z.copy(q.binormals[0]).multiplyScalar(Dt.y),B.copy(C[0]).add(V).add(z),Ft(B.x,B.y,B.z)):Ft(Dt.x,Dt.y,0)}for(let wt=1;wt<=f;wt++)for(let Dt=0;Dt<rt;Dt++){let O=p?Mt(R[Dt],ie[Dt],Re):R[Dt];M?(V.copy(q.normals[wt]).multiplyScalar(O.x),z.copy(q.binormals[wt]).multiplyScalar(O.y),B.copy(C[wt]).add(V).add(z),Ft(B.x,B.y,B.z)):Ft(O.x,O.y,u/f*wt)}for(let wt=y-1;wt>=0;wt--){let Dt=wt/y,O=d*Math.cos(Dt*Math.PI/2),re=v*Math.sin(Dt*Math.PI/2)+T;for(let xt=0,Nt=at.length;xt<Nt;xt++){let Pt=Mt(at[xt],Ut[xt],re);Ft(Pt.x,Pt.y,u+O)}for(let xt=0,Nt=H.length;xt<Nt;xt++){let Pt=H[xt];Ot=Zt[xt];for(let _e=0,Yt=Pt.length;_e<Yt;_e++){let U=Mt(Pt[_e],Ot[_e],re);M?Ft(U.x,U.y+C[f-1].y,C[f-1].x+O):Ft(U.x,U.y,u+O)}}}gt(),Lt();function gt(){let wt=s.length/3;if(p){let Dt=0,O=rt*Dt;for(let re=0;re<It;re++){let xt=nt[re];ue(xt[2]+O,xt[1]+O,xt[0]+O)}Dt=f+y*2,O=rt*Dt;for(let re=0;re<It;re++){let xt=nt[re];ue(xt[0]+O,xt[1]+O,xt[2]+O)}}else{for(let Dt=0;Dt<It;Dt++){let O=nt[Dt];ue(O[2],O[1],O[0])}for(let Dt=0;Dt<It;Dt++){let O=nt[Dt];ue(O[0]+rt*f,O[1]+rt*f,O[2]+rt*f)}}i.addGroup(wt,s.length/3-wt,0)}function Lt(){let wt=s.length/3,Dt=0;se(at,Dt),Dt+=at.length;for(let O=0,re=H.length;O<re;O++){let xt=H[O];se(xt,Dt),Dt+=xt.length}i.addGroup(wt,s.length/3-wt,1)}function se(wt,Dt){let O=wt.length;for(;--O>=0;){let re=O,xt=O-1;xt<0&&(xt=wt.length-1);for(let Nt=0,Pt=f+y*2;Nt<Pt;Nt++){let _e=rt*Nt,Yt=rt*(Nt+1),U=Dt+re+_e,A=Dt+xt+_e,tt=Dt+xt+Yt,pt=Dt+re+Yt;ce(U,A,tt,pt)}}}function Ft(wt,Dt,O){l.push(wt),l.push(Dt),l.push(O)}function ue(wt,Dt,O){ae(wt),ae(Dt),ae(O);let re=s.length/3,xt=S.generateTopUV(i,s,re-3,re-2,re-1);Ue(xt[0]),Ue(xt[1]),Ue(xt[2])}function ce(wt,Dt,O,re){ae(wt),ae(Dt),ae(re),ae(Dt),ae(O),ae(re);let xt=s.length/3,Nt=S.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);Ue(Nt[0]),Ue(Nt[1]),Ue(Nt[3]),Ue(Nt[1]),Ue(Nt[2]),Ue(Nt[3])}function ae(wt){s.push(l[wt*3+0]),s.push(l[wt*3+1]),s.push(l[wt*3+2])}function Ue(wt){r.push(wt.x),r.push(wt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return n_(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nh[s.type]().fromJSON(s)),new n(i,t.options)}},e_={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],h=t[s*3],f=t[s*3+1];return[new Ct(r,a),new Ct(o,l),new Ct(h,f)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],h=t[i*3],f=t[i*3+1],u=t[i*3+2],p=t[s*3],d=t[s*3+1],v=t[s*3+2],T=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(o-f)<Math.abs(a-h)?[new Ct(a,1-l),new Ct(h,1-u),new Ct(p,1-v),new Ct(T,1-m)]:[new Ct(o,1-l),new Ct(f,1-u),new Ct(d,1-v),new Ct(y,1-m)]}};function n_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gs=class n extends Fh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Al=class n extends yn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],h=[],f=[],u=t,p=(e-t)/s,d=new N,v=new Ct;for(let T=0;T<=s;T++){for(let y=0;y<=i;y++){let m=r+y/i*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,f.push(v.x,v.y)}u+=p}for(let T=0;T<s;T++){let y=T*(i+1);for(let m=0;m<i;m++){let S=m+y,C=S,M=S+i+1,q=S+i+2,z=S+1;o.push(C,M,z),o.push(M,q,z)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Sa=class n extends yn{constructor(t=new or([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let f=0;f<t.length;f++)h(t[f]),this.addGroup(o,l,f),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function h(f){let u=s.length/3,p=f.extractPoints(e),d=p.shape,v=p.holes;ir.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,m=v.length;y<m;y++){let S=v[y];ir.isClockWise(S)===!0&&(v[y]=S.reverse())}let T=ir.triangulateShape(d,v);for(let y=0,m=v.length;y<m;y++){let S=v[y];d=d.concat(S)}for(let y=0,m=d.length;y<m;y++){let S=d[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,m=T.length;y<m;y++){let S=T[y],C=S[0]+u,M=S[1]+u,q=S[2]+u;i.push(C,M,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return i_(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function i_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ni=class n extends yn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,f=[],u=new N,p=new N,d=[],v=[],T=[],y=[];for(let m=0;m<=i;m++){let S=[],C=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let q=0;q<=e;q++){let z=q/e;u.x=-t*Math.cos(s+z*r)*Math.sin(a+C*o),u.y=t*Math.cos(a+C*o),u.z=t*Math.sin(s+z*r)*Math.sin(a+C*o),v.push(u.x,u.y,u.z),p.copy(u).normalize(),T.push(p.x,p.y,p.z),y.push(z+M,1-C),S.push(h++)}f.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let C=f[m][S+1],M=f[m][S],q=f[m+1][S],z=f[m+1][S+1];(m!==0||a>0)&&d.push(C,M,z),(m!==i-1||l<Math.PI)&&d.push(M,q,z)}this.setIndex(d),this.setAttribute("position",new Ce(v,3)),this.setAttribute("normal",new Ce(T,3)),this.setAttribute("uv",new Ce(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ti=class n extends yn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],h=[],f=new N,u=new N,p=new N;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){let T=v/s*r,y=d/i*Math.PI*2;u.x=(t+e*Math.cos(y))*Math.cos(T),u.y=(t+e*Math.cos(y))*Math.sin(T),u.z=e*Math.sin(y),o.push(u.x,u.y,u.z),f.x=t*Math.cos(T),f.y=t*Math.sin(T),p.subVectors(u,f).normalize(),l.push(p.x,p.y,p.z),h.push(v/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){let T=(s+1)*d+v-1,y=(s+1)*(d-1)+v-1,m=(s+1)*(d-1)+v,S=(s+1)*d+v;a.push(T,y,S),a.push(y,m,S)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var nn=class extends Bs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function il(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function s_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ta=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bh=class extends Ta{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kf,endingEnd:kf}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bf:r=t,o=2*e-i;break;case Vf:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bf:a=t,l=2*i-e;break;case Vf:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let h=(i-e)*.5,f=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,f=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,v=(i-e)/(s-e),T=v*v,y=T*v,m=-p*y+2*p*T-p*v,S=(1+p)*y+(-1.5-2*p)*T+(-.5+p)*v+1,C=(-1-d)*y+(1.5+d)*T+.5*v,M=d*y-d*T;for(let q=0;q!==o;++q)r[q]=m*a[f+q]+S*a[h+q]+C*a[l+q]+M*a[u+q];return r}},Vh=class extends Ta{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,f=(i-e)/(s-e),u=1-f;for(let p=0;p!==o;++p)r[p]=a[h+p]*u+a[l+p]*f;return r}},Hh=class extends Ta{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ns=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=il(e,this.TimeBufferType),this.values=il(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:il(t.times,Array),values:il(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cl:e=this.InterpolantFactoryMethodDiscrete;break;case hh:e=this.InterpolantFactoryMethodLinear;break;case Xl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cl;case this.InterpolantFactoryMethodLinear:return hh;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&s_(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],f=t[o+1];if(h!==f&&(o!==1||h!==t[0]))if(s)l=!0;else{let u=o*i,p=u-i,d=u+i;for(let v=0;v!==i;++v){let T=e[u+v];if(T!==e[p+v]||T!==e[d+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,p=a*i;for(let d=0;d!==i;++d)e[p+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ns.prototype.TimeBufferType=Float32Array;ns.prototype.ValueBufferType=Float32Array;ns.prototype.DefaultInterpolation=hh;var Pr=class extends ns{constructor(t,e,i){super(t,e,i)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=cl;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends ns{};Gh.prototype.ValueTypeName="color";var Wh=class extends ns{};Wh.prototype.ValueTypeName="number";var Xh=class extends Ta{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let f=h+o;h!==f;h+=4)ar.slerpFlat(r,0,a,h-o,a,h,l);return r}},Rl=class extends ns{InterpolantFactoryMethodLinear(t){return new Xh(this.times,this.values,this.getValueSize(),t)}};Rl.prototype.ValueTypeName="quaternion";Rl.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends ns{constructor(t,e,i){super(t,e,i)}};Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=cl;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends ns{};qh.prototype.ValueTypeName="vector";var Hu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Yh=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return h.push(f,u),this},this.removeHandler=function(f){let u=h.indexOf(f);return u!==-1&&h.splice(u,2),this},this.getHandler=function(f){for(let u=0,p=h.length;u<p;u+=2){let d=h[u],v=h[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null}}},r_=new Yh,uo=class{constructor(t){this.manager=t!==void 0?t:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $h=class extends uo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Hu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=eo("img");function l(){f(),Hu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){f(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Ea=class extends uo{constructor(t){super(t)}load(t,e,i,s){let r=new Si,a=new $h(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Aa=class extends ti{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Dr=class extends Aa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Sc=new xn,Gu=new N,Wu=new N,Cl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Xu=new xn,$a=new N,Tc=new N,Zh=class extends Cl{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new pn(2,1,1,1),new pn(0,1,1,1),new pn(3,1,1,1),new pn(1,1,1,1),new pn(3,0,1,1),new pn(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),$a.setFromMatrixPosition(t.matrixWorld),i.position.copy($a),Tc.copy(i.position),Tc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Tc),i.updateMatrixWorld(),s.makeTranslation(-$a.x,-$a.y,-$a.z),Xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu)}},Ra=class extends Aa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jh=class extends Cl{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Il=class extends Aa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var hf="\\[\\]\\.:\\/",a_=new RegExp("["+hf+"]","g"),ff="[^"+hf+"]",o_="[^"+hf.replace("\\.","")+"]",l_=/((?:WC+[\/:])*)/.source.replace("WC",ff),c_=/(WCOD+)?/.source.replace("WCOD",o_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),f_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),u_=new RegExp("^"+l_+c_+h_+f_+"$"),d_=["material","materials","bones","map"],Kh=class{constructor(t,e,i){let s=i||Rn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Rn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a_,"")}static parseTrackName(t){let e=u_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rn.Composite=Kh;Rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rn.prototype.GetterByBindingType=[Rn.prototype._getValue_direct,Rn.prototype._getValue_array,Rn.prototype._getValue_arrayElement,Rn.prototype._getValue_toArray];Rn.prototype.SetterByBindingTypeAndVersioning=[[Rn.prototype._setValue_direct,Rn.prototype._setValue_direct_setNeedsUpdate,Rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rn.prototype._setValue_array,Rn.prototype._setValue_array_setNeedsUpdate,Rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rn.prototype._setValue_arrayElement,Rn.prototype._setValue_arrayElement_setNeedsUpdate,Rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rn.prototype._setValue_fromArray,Rn.prototype._setValue_fromArray_setNeedsUpdate,Rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var qu=new xn,Ca=class{constructor(t,e,i=0,s=1/0){this.ray=new no(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(t,e=!0,i=[]){return jh(t,this,i,e),i.sort(Yu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)jh(t[s],this,i,e);return i.sort(Yu),i}};function Yu(n,t){return n.distance-t.distance}function jh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)jh(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Nr={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},La=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function bd(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new yn,h=0;for(let f=0;f<n.length;++f){let u=n[f],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,f),h+=d}}if(e){let f=0,u=[];for(let p=0;p<n.length;++p){let d=n[p].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+f);f+=n[p].attributes.position.count}l.setIndex(u)}for(let f in r){let u=vd(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,u)}for(let f in a){let u=a[f][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let p=0;p<u;++p){let d=[];for(let T=0;T<a[f].length;++T)d.push(a[f][T][p]);let v=vd(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(v)}}return l}function vd(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let f=n[h];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let a=new t(r),o=new xi(a,e,i),l=0;for(let h=0;h<n.length;++h){let f=n[h];if(f.isInterleavedBufferAttribute){let u=l/e;for(let p=0,d=f.count;p<d;p++)for(let v=0;v<e;v++){let T=f.getComponent(p,v);o.setComponent(p+u,v,T)}}else a.set(f.array,l);l+=f.count*e}return s!==void 0&&(o.gpuType=s),o}var Dn="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",Md={},Wt=(n,t)=>t?new nn(Object.assign({color:n},t)):Md[n]||(Md[n]=new nn({color:n})),sn=(n,t)=>new Fe(Object.assign({color:n},t)),wd={},p_=n=>wd[n]||(wd[n]=new nn({color:n,flatShading:!0}));function ge(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new wa(i);return s.colorSpace=Gn,s.anisotropy=4,s}function lr(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Fr=ge(128,128,n=>{let t=n.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)});function lt(n,t,e,i,s,r,a,o,l){let h=new ht(new ln(t,e,i),typeof s=="string"?Wt(s):s);return h.position.set(r,a,o),l&&(h.rotation.y=l),n.add(h),h}function ee(n,t,e,i,s,r,a,o,l){let h=new ht(new yi(t,e,i,l||16),typeof s=="string"?Wt(s):s);return h.position.set(r,a,o),n.add(h),h}function we(n,t,e,i,s,r,a,o,l,h){let f=new ht(new ni(t,h||16,h?h*.7|0:12),typeof e=="string"?Wt(e):e);return f.position.set(i,s,r),f.scale.set(a||1,o||1,l||1),n.add(f),f}function Hi(n,t,e,i,s,r,a){let o=new ht(new gs(t,1),p_(e));return o.position.set(i,s,r),a&&o.scale.set(a[0],a[1],a[2]),n.add(o),o}function cr(n,t,e,i,s,r,a){let o=new ei(new Kn({map:Fr,blending:ds,transparent:!0,depthWrite:!1,opacity:r}));return a&&o.material.color.set(a),o.scale.set(s,s,1),o.position.set(t,e,i),n.add(o),n.userData.glows=(n.userData.glows||[]).concat(o),o}function Da(n,t,e,i,s,r,a,o,l){let h=new ht(new ke(t,e),new Fe({map:i,transparent:!0,side:l?Ln:void 0,alphaTest:.05}));return h.position.set(s,r,a),o&&(h.rotation.y=o),n.add(h),h}function mo(n,t,e,i,s,r,a){let o=new ht(new El(t.map(l=>new Ct(l[0],l[1])),a||20),typeof e=="string"?Wt(e):e);return o.position.set(i,s,r),n.add(o),o}var Hs="#a8703f",hi="#6b3f1f",Ua="#d4a56a",ii="#3a2214",m_="#d23a28",g_="#f3e2bd",Sd={};function df(n,t,e,i,s,r){let a=n+t+e+i+s;return Sd[a]||(Sd[a]=ge(i,s,o=>{o.fillStyle=t,o.fillRect(0,0,i,s),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";let l=[...n];o.font=`900 ${r}px ${Dn}`,s>i?l.forEach((h,f)=>o.fillText(h,i/2,s/(l.length+1)*(f+1))):o.fillText(n,i/2,s/2+2,i-10)}))}var Ed=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],go=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.78,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.36,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.05,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],Ad=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];go.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.42,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.55,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.76,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var Td={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};go.forEach(n=>{!n.hc&&Td[n.k]&&(n.hc=Td[n.k])});var Ae={};go.forEach(n=>{n.L=n.L||"main",n.solid===void 0&&(n.solid=n.L==="main"?1:0),Ae[n.k]=n});var pf=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],mf=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],te={};te.table=n=>{lt(n,1.9,.08,.9,Hs,0,.74,0),lt(n,1.84,.03,.84,Ua,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])lt(n,.08,.72,.08,hi,t,.36,e);lt(n,1.6,.06,.04,hi,0,.55,-.36),lt(n,1.6,.06,.04,hi,0,.55,.36)};te.chabu=n=>{ee(n,.46,.46,.06,Hs,0,.34,0,28),ee(n,.44,.44,.02,Ua,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;lt(n,.07,.32,.07,hi,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};te.counter=n=>{lt(n,1.96,1,.8,hi,0,.5,0),lt(n,2.04,.08,.96,Ua,0,1.03,.04),lt(n,1.9,.12,.04,Hs,0,.14,.41);for(let t=-2;t<=2;t++)lt(n,.04,.8,.02,"#5a3216",t*.38,.52,.405)};te.chair=n=>{lt(n,.48,.06,.48,Hs,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])lt(n,.05,.46,.05,hi,t,.23,e);lt(n,.48,.5,.05,Hs,0,.74,-.2),lt(n,.4,.06,.03,Ua,0,.86,-.18)};te.stool=n=>{ee(n,.22,.2,.07,"#c23a2a",0,.76,0,18),ee(n,.03,.03,.72,"#3a3a40",0,.38,0,8),ee(n,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new ht(new Ti(.13,.015,6,18),Wt("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,n.add(t)};te.zabu=n=>{let t=lt(n,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new ln(.62,.1,.62,2,1,2),we(n,.05,"#e9c34a",0,.12,0)};te.bench=n=>{lt(n,1.9,.07,.42,Hs,0,.44,0);for(let t of[-.8,.8])lt(n,.07,.42,.36,hi,t,.21,0);lt(n,1.6,.05,.04,hi,0,.2,0)};te.register=n=>{lt(n,.9,.95,.7,hi,0,.475,0),lt(n,.96,.06,.78,Ua,0,.98,0),lt(n,.5,.22,.36,"#2b2b33",0,1.12,-.05),lt(n,.42,.1,.3,"#3c3c46",0,1.26,-.12),lt(n,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=sn("#9fe0b6"),we(n,.07,"#e9b830",.3,1.06,.2),we(n,.05,"#e9b830",.22,1.04,.26)};te.lantern=n=>{ee(n,.025,.025,1.7,ii,0,.85,0,6),lt(n,.5,.04,.04,ii,.2,1.68,0),ee(n,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new ye;t.position.set(.38,1.3,0),n.add(t);let e=we(t,.22,sn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,ee(t,.14,.14,.06,ii,0,.3,0,12),ee(t,.14,.14,.06,ii,0,-.3,0,12),Da(t,.2,.34,df("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),ee(t,.01,.01,.2,ii,0,.42,0,4),cr(t,0,0,.1,1.8,.55),n.userData.swing=t};te.andon=n=>{for(let e of[-.17,.17])for(let i of[-.17,.17])lt(n,.04,.9,.04,ii,e,.45,i);let t=lt(n,.32,.5,.32,sn("#fff1c8"),0,.55,0);t.userData.lit=1,lt(n,.4,.04,.4,ii,0,.82,0),lt(n,.4,.04,.4,ii,0,.29,0);for(let e of[-.06,.06])lt(n,.005,.48,.33,ii,e,.55,0);cr(n,0,.55,0,2.2,.6)};te.stonel=n=>{let t="#9a9590";lt(n,.5,.12,.5,t,0,.06,0),ee(n,.1,.13,.5,t,0,.37,0,8),lt(n,.42,.1,.42,t,0,.66,0);let e=lt(n,.3,.28,.3,sn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])lt(n,.06,.3,.06,t,s[0],.85,s[1]);let i=new ht(new jn(.45,.3,4),Wt(t));i.rotation.y=Math.PI/4,i.position.y=1.14,n.add(i),we(n,.07,t,0,1.33,0),cr(n,0,.85,0,1.6,.55)};te.chochin=n=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let i=0;i<5;i++){let s=-.8+i*.4,r=2.25-Math.sin(i/4*Math.PI)*.25,a=we(n,.12,sn(t[i]),s,r,.18,1,1.25,1,12);a.userData.lit=1,cr(n,s,r,.26,.8,.35)}let e=[];for(let i=0;i<=8;i++){let s=i/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let i=0;i<8;i++){let[s,r]=e[i],[a,o]=e[i+1],l=lt(n,Math.hypot(a-s,o-r),.015,.015,ii,(s+a)/2,(r+o)/2,.18);l.rotation.z=Math.atan2(o-r,a-s)}};te.tanuki=n=>{let t="#8a6a4a",e="#e8d8b8";we(n,.3,t,0,.38,0,1,1.05,.95),we(n,.2,e,0,.36,.16,1,1.1,.5),we(n,.22,t,0,.82,.02);for(let r of[-.13,.13])we(n,.06,t,r,1,0),we(n,.055,ii,r*.7,.85,.19,1,.8,.5),we(n,.02,"#fff",r*.7+.01,.86,.21);we(n,.045,ii,0,.78,.22),lt(n,.34,.06,.3,"#5a4a3a",0,1.03,0),ee(n,.16,.2,.04,"#5a4a3a",0,1,0,14);let i=ee(n,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);i.rotation.z=-.3;let s=lt(n,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,we(n,.15,t,-.2,.12,.12,1,.6,1),we(n,.15,t,.2,.12,.12,1,.6,1),we(n,.12,t,.1,.25,-.3,1,.7,1.4)};te.barrel=n=>{mo(n,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new ht(new Ti(.34,.025,6,22),Wt("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,n.add(e)}Da(n,.36,.36,df("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),ee(n,.3,.3,.02,Ua,0,.91,0,22)};te.crates=n=>{let t=(e,i,s)=>{let r=new ye;r.position.y=e,r.rotation.y=i,n.add(r),lt(r,.6,.32,.44,s,0,.16,0);for(let a=0;a<3;a++)for(let o=0;o<2;o++)ee(r,.06,.06,.36,"#7a4a1a",-.18+a*.18,.3,-.1+o*.2,8),ee(r,.025,.03,.1,"#f2e6c8",-.18+a*.18,.52,-.1+o*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};te.byobu=n=>{let t=ge(256,128,(e,i,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,i,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*i,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let i=new ye;i.position.set(-.72+e*.48,0,e%2?.08:-.08),i.rotation.y=e%2?.3:-.3,n.add(i),lt(i,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new ht(new ke(.42,1.4),new Fe({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),i.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,i.add(r)}};te.shelf=n=>{lt(n,1.9,1.8,.42,hi,0,.9,-.1),lt(n,1.8,1.7,.02,"#2a1408",0,.9,.09);for(let i of[.35,.8,1.25,1.65])lt(n,1.8,.04,.4,Hs,0,i,-.08);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let i of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],a=.26+e%3*.04;ee(n,.055,.065,a,r,-.72+s*.29,i+a/2,-.06,10),ee(n,.02,.03,.09,r,-.72+s*.29,i+a+.04,-.06,6),e%2&&lt(n,.1,.08,.01,g_,-.72+s*.29,i+a*.5,0)}};te.hibachi=n=>{mo(n,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),ee(n,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let i=Hi(n,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);i.material=sn("#ff7a2a"),i.userData.lit=1}ee(n,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=ee(n,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,cr(n,0,.55,0,1.4,.6,"#ff8a3a")};te.tank=n=>{lt(n,.7,.55,.5,hi,0,.275,0);let t=lt(n,.68,.5,.48,Wt("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,lt(n,.62,.4,.42,sn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,lt(n,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let i=new ye;i.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),n.add(i),we(i,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new ht(new jn(.04,.07,6),Wt("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,i.add(s),n.userData.fish=(n.userData.fish||[]).concat(i)}Hi(n,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),Hi(n,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};te.jukebox=n=>{lt(n,.7,.7,.5,hi,0,.35,0),lt(n,.74,.05,.54,Hs,0,.72,0),ee(n,.24,.24,.02,"#141414",-.05,.76,.02,28),ee(n,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=lt(n,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new ht(new jn(.22,.4,18,1,!0),Wt("#d8a83a",{side:Ln}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),n.add(e),ee(n,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),lt(n,.5,.3,.02,"#2a1408",0,.35,.26),n.userData.spin=n.children[2]};te.pine=n=>{ee(n,.2,.16,.14,"#3a5a8a",0,.07,0,6),ee(n,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=ee(n,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,Hi(n,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),Hi(n,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),Hi(n,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};te.bamboo=n=>{ee(n,.22,.18,.32,"#e8e0d0",0,.16,0,18),ee(n,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,i=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;ee(n,.025,.025,s,"#6a9a3a",e,.3+s/2,i,8);for(let r=1;r<4;r++)ee(n,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,i,8);for(let r=0;r<3;r++){let a=new ht(new ke(.32,.06),new nn({color:"#5a9a3a",side:Ln}));a.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),i+.12*Math.sin(r*2+t)),a.rotation.set(-.3,r*2+t,-.4),n.add(a)}}};te.sakura=n=>{ee(n,.26,.22,.36,"#2a3a5a",0,.18,0,8),ee(n,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=ee(n,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=ee(n,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let i=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,a,o],l)=>Hi(n,o,i[l%3],s,r,a,[1,.75,1])),n.userData.petals=1};te.ajisai=n=>{ee(n,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)Hi(n,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let i=e*1.25;Hi(n,.12,t[e%4],Math.cos(i)*.12,.5+e%2*.08,Math.sin(i)*.12)}};te.scroll=n=>{let t=ge(96,256,(e,i,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,i,s),e.fillStyle="#c8b890",e.fillRect(0,0,i,30),e.fillRect(0,s-30,i,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${Dn}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,a)=>e.fillText(r,i/2,76+a*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});lt(n,.5,.04,.04,ii,0,2.25,.04),lt(n,.5,.04,.04,ii,0,1.02,.04),Da(n,.42,1.2,t,0,1.63,.03)};te.menu=n=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let i=df(t[e],"#e9d3a4","#2a1408",64,256,36);lt(n,.22,.82,.03,hi,-.7+e*.28,1.75,.015),Da(n,.18,.76,i,-.7+e*.28,1.75,.035)}lt(n,1.8,.06,.05,ii,0,2.2,.03)};te.clock=n=>{let t=ge(128,128,a=>{a.fillStyle="#f8f0dc",a.beginPath(),a.arc(64,64,60,0,7),a.fill(),a.fillStyle="#2a1408",a.font=`700 18px ${Dn}`,a.textAlign="center",a.textBaseline="middle";for(let o=1;o<=12;o++){let l=o/12*Math.PI*2-Math.PI/2;a.fillText(String(o),64+Math.cos(l)*46,64+Math.sin(l)*46)}});lt(n,.5,.7,.1,hi,0,1.95,.05),ee(n,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=Da(n,.4,.4,t,0,2.05,.105),i=lt(n,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=lt(n,.01,.17,.01,"#1a1a1a",0,2.1,.115);n.userData.hands=[i,s],n.userData.handY=2.05;let r=new ye;r.position.set(0,1.75,.07),n.add(r),lt(r,.01,.2,.01,"#c8a040",0,-.1,0),n.userData.swing=r};te.mado=n=>{let t=ge(256,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1a1a40"),o.addColorStop(1,"#5a3a6a"),s.fillStyle=o,s.fillRect(0,0,r,a),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*a*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new ht(new Yn(.62,32),new Fe({map:t}));e.position.set(0,1.6,.03),n.add(e);let i=new ht(new Ti(.64,.06,8,32),Wt(hi));i.position.set(0,1.6,.04),n.add(i);for(let s of[-.2,.2])lt(n,.02,1.2,.02,ii,s,1.6,.05);lt(n,1.2,.02,.02,ii,0,1.6,.05),cr(n,0,1.6,.15,1.6,.25,"#b8c8ff")};te.fuji=n=>{let t=ge(256,160,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,i,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,i,20)});lt(n,1.6,1,.05,"#2a1408",0,1.7,.025),Da(n,1.5,.9,t,0,1.7,.055)};te.maneki=n=>{let t="#f8f4ec";we(n,.12,t,0,.13,0,1,1.1,.9),we(n,.1,t,0,.32,.01);for(let i of[-.06,.06]){let s=new ht(new jn(.035,.06,4),Wt(t));s.position.set(i,.42,0),n.add(s),we(n,.012,"#1a1a1a",i*.6,.34,.09)}we(n,.02,"#f08a9a",0,.31,.1),lt(n,.16,.025,.05,m_,0,.23,.06),we(n,.02,"#e9b830",0,.21,.1);let e=new ye;e.position.set(.09,.3,.02),n.add(e),we(e,.035,t,0,.07,0,1,1.6,1),n.userData.wave=e,we(n,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};te.daruma=n=>{we(n,.14,"#d23a28",0,.15,0,1,1.1,1),we(n,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])we(n,.016,"#1a1a1a",t,.2,.125);lt(n,.08,.012,.01,"#1a1a1a",0,.155,.13)};te.beer=n=>{ee(n,.07,.065,.2,Wt("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),ee(n,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new ht(new Ti(.05,.012,6,12,Math.PI),Wt("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,n.add(t)};te.sake=n=>{lt(n,.34,.02,.2,hi,0,.01,0),mo(n,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])ee(n,.03,.025,.04,"#f0ece0",t,.04,0,10)};te.yakitori=n=>{ee(n,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new ye;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,n.add(e),lt(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let i=0;i<4;i++)Hi(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+i*.05,.005,0,[1.1,.9,1])}};te.sushi=n=>{lt(n,.34,.03,.16,Hs,0,.03,0);for(let t=0;t<4;t++)lt(n,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),lt(n,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};te.ramen=n=>{mo(n,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),ee(n,.12,.12,.01,"#d89a4a",0,.09,0,20),we(n,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),lt(n,.05,.01,.04,"#8a4a2a",.04,.1,-.02),lt(n,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=lt(n,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};te.edamame=n=>{ee(n,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)Hi(n,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};te.vase=n=>{mo(n,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),ee(n,.006,.006,.25,"#4a7a3a",0,.36,0,4),we(n,.035,"#f0e0e8",0,.5,0),we(n,.03,"#e898b0",.02,.48,.02)};te.tatami=n=>{let t=ge(256,256,(i,s,r)=>{i.fillStyle="#c8c47a",i.fillRect(0,0,s,r);for(let a=0;a<r;a+=3)i.fillStyle=a%6?"#bcb86e":"#d2ce86",i.fillRect(0,a,s,1);i.fillStyle="#2a3a2a",i.fillRect(0,0,s,10),i.fillRect(0,r-10,s,10),i.fillRect(0,124,s,8)}),e=new ht(new ln(1.96,.04,1.96),[Wt("#2a3a2a"),Wt("#2a3a2a"),new nn({map:t}),Wt("#2a3a2a"),Wt("#2a3a2a"),Wt("#2a3a2a")]);e.position.y=.02,n.add(e)};te.rug=n=>{let t=ge(256,256,(i,s,r)=>{i.fillStyle="#23315c",i.fillRect(0,0,s,r),i.strokeStyle="#e8e0d0",i.lineWidth=3;for(let a=0;a<5;a++)for(let o=0;o<5;o++){let l=26+a*51,h=26+o*51;i.beginPath();for(let f=0;f<3;f++)i.arc(l,h,8+f*7,Math.PI,0);i.stroke()}i.strokeStyle="#c8a040",i.lineWidth=6,i.strokeRect(6,6,s-12,r-12)}),e=new ht(new Yn(.96,40),new nn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,n.add(e)};te.step=n=>{Hi(n,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function x_(n){let t=new Set,e=n.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),n.updateMatrixWorld(!0);let i=new Map;n.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;i.has(r)||i.set(r,[]),i.get(r).push(s)});for(let s of i.values())if(!(s.length<2))try{let r=s.map(l=>{let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let f of Object.keys(h.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&h.deleteAttribute(f);return h.attributes.uv?(h.applyMatrix4(l.matrixWorld),h):null});if(r.some(l=>!l))continue;let a=bd(r,!1);if(!a)continue;let o=new ht(a,s[0].material);n.add(o),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var y_="#6fa8d6",uf="#4f86b8",Vs="#f6f2ea",zr="#d9b07a";te.sofa=n=>{lt(n,1.9,.42,.82,uf,0,.21,0);for(let t of[-.46,.46])lt(n,.9,.16,.7,y_,t,.5,.06);lt(n,1.9,.55,.2,uf,0,.72,-.32);for(let t of[-.88,.88])lt(n,.18,.58,.82,uf,t,.45,0);we(n,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),we(n,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};te.armchair=n=>{lt(n,.8,.4,.78,"#e07a5f",0,.2,0),lt(n,.62,.14,.64,"#ee9a7a",0,.48,.05),lt(n,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])lt(n,.14,.52,.78,"#e07a5f",t,.45,0)};te.ctable=n=>{lt(n,1.6,.06,.7,zr,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])ee(n,.03,.03,.38,"#8a6a4a",t,.19,e,8);lt(n,1.5,.03,.6,"#c89a62",0,.15,0)};te.tv=n=>{lt(n,1.8,.5,.48,Vs,0,.25,-.1);for(let e of[-.45,.45])lt(n,.8,.38,.02,"#e8e0d0",e,.25,.15);lt(n,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=lt(n,1.2,.68,.02,sn("#4a8ad8"),0,.98,-.085);t.userData.lit=1,n.userData.tvs=t,lt(n,.3,.08,.2,"#2a2a2e",0,.54,-.12)};te.books=n=>{lt(n,1.9,1.9,.4,zr,0,.95,-.1),lt(n,1.8,1.8,.02,"#a07850",0,.95,.09);for(let i of[.05,.5,.95,1.4])lt(n,1.8,.04,.38,"#c8a070",0,i+.02,-.08);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let i of[.07,.52,.97]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,a=.3+e*7%5*.025;lt(n,r,a,.26,t[e%7],s+r/2,i+a/2,-.06),s+=r+.01,e++}}we(n,.12,"#3f8f4f",.6,1.6,-.05)};te.flamp=n=>{ee(n,.2,.22,.04,"#3a3a3e",0,.02,0,18),ee(n,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=ee(n,.16,.26,.32,sn("#fff0c8"),0,1.6,0,18);t.userData.lit=1,cr(n,0,1.55,0,2.4,.55)};te.piano=n=>{lt(n,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),lt(n,1.6,.06,.7,"#1e1a1a",0,.72,.05),lt(n,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)lt(n,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])lt(n,.1,.7,.1,"#1e1a1a",t,.35,.3);lt(n,.5,.05,.3,"#1e1a1a",0,.45,.6),lt(n,.5,.04,.3,"#8a3a2a",0,.48,.6)};te.bed=n=>{lt(n,1.9,.3,1.95,zr,0,.25,0),lt(n,1.9,.9,.1,zr,0,.55,-.95),lt(n,1.8,.2,1.85,Vs,0,.5,.02),lt(n,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])we(n,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])lt(n,.08,.12,.08,"#8a6a4a",t,.06,e)};te.wardrobe=n=>{lt(n,1.8,2,.6,Vs,0,1,-.15),lt(n,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])ee(n,.02,.02,.3,"#c8a040",t,1.05,.18,6);lt(n,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};te.nstand=n=>{lt(n,.5,.5,.45,zr,0,.27,0),lt(n,.46,.02,.02,"#8a6a4a",0,.35,.23),we(n,.025,"#c8a040",0,.25,.24)};te.desk=n=>{lt(n,1.6,.05,.65,zr,0,.74,0);for(let t of[-.74,.74])lt(n,.06,.72,.6,"#e8e0d0",t,.36,0);lt(n,.45,.3,.55,"#e8e0d0",.45,.55,0)};te.kcounter=n=>{lt(n,1.9,.86,.62,Vs,0,.43,-.1),lt(n,1.96,.06,.7,"#9aa0a8",0,.89,-.08),lt(n,.6,.04,.4,"#6a7078",-.4,.91,-.08),ee(n,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])lt(n,.5,.6,.02,"#ece6da",e,.43,.22);let t=ee(n,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};te.stove=n=>{lt(n,.8,.86,.62,"#e8e4dc",0,.43,-.1),lt(n,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new ht(new Ti(.1,.02,6,16),Wt("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),n.add(e)}lt(n,.7,.4,.02,"#2a2a2e",0,.45,.22),ee(n,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};te.fridge=n=>{lt(n,.78,1.85,.7,"#eaf2f8",0,.93,-.08),lt(n,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])lt(n,.03,.25,.04,"#a8b0b8",.3,t,.3);lt(n,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};te.catbed=n=>{let t=new ht(new Ti(.32,.12,8,20),Wt("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,n.add(t),ee(n,.3,.3,.08,"#f2d8b0",0,.05,0,18),we(n,.18,"#e8a050",.02,.2,0,1.4,.7,1),we(n,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let i=new ht(new jn(.04,.07,4),Wt("#e8a050"));i.position.set(.22,.36,e),n.add(i)}};te.monstera=n=>{ee(n,.24,.18,.4,"#f2efe6",0,.2,0,14),ee(n,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,i=new ht(new Yn(.28,10),new nn({color:t%2?"#2f7a3a":"#3f8f4a",side:Ln}));i.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),i.rotation.set(-1+Math.random()*.4,e,0),n.add(i),ee(n,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};te.cactus=n=>{ee(n,.09,.07,.12,"#c8704a",0,.06,0,12),ee(n,.06,.06,.22,"#4a9a4a",0,.22,0,10),we(n,.06,"#4a9a4a",0,.33,0);let t=ee(n,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,we(n,.025,"#f29ab8",0,.39,0)};te.wwin=n=>{let t=lt(n,1.5,1.1,.03,sn("#bfe6ff"),0,1.65,.02);n.userData.pane=t,lt(n,1.62,.08,.08,Vs,0,2.24,.04),lt(n,1.62,.08,.08,Vs,0,1.06,.04),lt(n,.06,1.15,.06,Vs,0,1.65,.05),lt(n,1.62,.1,.2,Vs,0,1.03,.1),lt(n,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let i=lt(n,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);i.geometry=new ln(.38,1.4,.05,4,1,1)}};te.photos=n=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,i,s,r],a)=>{lt(n,s+.08,r+.08,.03,a%2?"#3a2a1a":Vs,e,i,.015),lt(n,s,r,.01,sn(t[a]),e,i,.035),we(n,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][a],e-s*.15,i-r*.1,.04,1,1,.2)})};te.shelfw=n=>{lt(n,1.7,.05,.25,zr,0,1.6,.12);for(let t of[-.7,.7])lt(n,.04,.15,.2,"#8a6a4a",t,1.52,.1);ee(n,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),we(n,.09,"#4a9a4a",-.5,1.82,.12),lt(n,.3,.22,.16,"#2f6bb8",0,1.74,.12),we(n,.08,"#f2b630",.45,1.7,.12)};te.book=n=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let i=lt(n,.22,.045,.16,t[e],0,.025+e*.047,0);i.rotation.y=e*.25}};te.mug=n=>{ee(n,.05,.045,.1,"#f6f2ea",0,.05,0,14),ee(n,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new ht(new Ti(.03,.01,6,10),Wt("#f6f2ea"));t.position.set(.06,.05,0),n.add(t)};te.cake=n=>{ee(n,.14,.14,.02,"#f6f2ea",0,.01,0,20),ee(n,.1,.1,.1,"#fff8f0",0,.07,0,20),ee(n,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)we(n,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};te.laptop=n=>{lt(n,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new ye;t.position.set(0,.015,-.11),t.rotation.x=-.35,n.add(t),lt(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=lt(t,.29,.17,.002,sn("#8ac0f0"),0,.1,.007);e.userData.lit=1};te.dlamp=n=>{ee(n,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=ee(n,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=ee(n,.04,.09,.1,sn("#fff0c8"),0,.33,0,12);e.userData.lit=1,cr(n,0,.3,0,1.2,.5)};te.teddy=n=>{let t="#b8814a";we(n,.1,t,0,.1,0,1,1.1,.9),we(n,.08,t,0,.24,0);for(let e of[-.06,.06])we(n,.03,t,e,.31,0),we(n,.012,"#1a1a1a",e*.5,.26,.07),we(n,.035,t,e*1.3,.1,.06);we(n,.03,"#e8d0b0",0,.225,.07)};te.carpet=n=>{let t=ge(256,256,(i,s,r)=>{i.fillStyle="#f2e6d0",i.fillRect(0,0,s,r);let a=__(3);for(let o=0;o<1600;o++)i.fillStyle=a()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",i.fillRect(a()*s,a()*r,3,3);i.strokeStyle="#e8a0b0",i.lineWidth=10,i.strokeRect(14,14,s-28,r-28)}),e=new ht(new ln(1.9,.04,1.9),[Wt("#e8d8c0"),Wt("#e8d8c0"),new nn({map:t}),Wt("#e8d8c0"),Wt("#e8d8c0"),Wt("#e8d8c0")]);e.position.y=.02,n.add(e)};var __=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function gf(n){let t=new ye,e=te[n];return e?e(t):lt(t,.8,.8,.8,"#f0f",0,.4,0),x_(t),t.traverse(i=>{i.isMesh&&(i.userData.item=t)}),t}var hr=(n,t)=>n+Math.random()*(t-n),Ei=(n,t,e)=>Math.max(t,Math.min(e,n)),xo=(n,t,e)=>n+(t-n)*e,fr=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ur=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Gi={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},v_={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},yf=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),is=46,Di=34,xs=7,b_=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],yo=2,xf=8.5,M_=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],_o=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],w_=`
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
`;function Rd(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.data||{};if(r.ex=Object.assign(yf(),r.ex||{}),!document.getElementById("i3css")){let g=document.createElement("style");g.id="i3css",g.textContent=w_,document.head.appendChild(g)}if(!document.getElementById("h3css")&&n.css){let g=document.createElement("style");g.id="h3css",g.textContent=n.css,document.head.appendChild(g)}let a=Math.min(screen.width,screen.height)<600,o=new va({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});o.shadowMap.enabled=!0,o.shadowMap.type=Qh;let l=new Cr,h=new ba(12576511,60,170);l.fog=h;let f=new Wn(38,2,.3,600),u=new Ea,p=(g,w)=>u.load(g,E=>{E.colorSpace=Gn,w&&w(E)}),d={},v=(g,w)=>w?new nn(Object.assign({color:g},w)):d[g]||(d[g]=new nn({color:g})),T=(g,w)=>new Fe(Object.assign({color:g},w||{})),y=(g,w,E)=>{let F=g.clone();return F.wrapS=F.wrapT=Fs,F.repeat.set(w,E),F.needsUpdate=!0,F},m=[];function S(g,w,E,F,J,ot,bt,St,Et){let yt=new ht(new ln(g,w,E),typeof F=="string"?v(F):F);return yt.position.set(J,ot,bt),(St||l).add(yt),Et!==!1&&(yt.castShadow=!0),yt.receiveShadow=!0,yt}function C(g,w,E,F,J,ot,bt,St,Et){let yt=new ht(new yi(g,w,E,Et||14),typeof F=="string"?v(F):F);return yt.position.set(J,ot,bt),(St||l).add(yt),yt.castShadow=!0,yt.receiveShadow=!0,yt}function M(g,w,E,F,J,ot,bt,St,Et,yt){let qe=new ht(yt?new gs(g,1):new ni(g,16,12),typeof w=="string"?yt?v(w,{flatShading:!0}):v(w):w);return qe.position.set(E,F,J),bt&&qe.scale.set(bt,St,Et),(ot||l).add(qe),qe.castShadow=!0,qe}let q=[];function z(g,w,E,F,J,ot){let bt=new ei(new Kn({map:Fr,blending:ds,transparent:!0,depthWrite:!1,opacity:0}));return ot&&bt.material.color.set(ot),bt.scale.set(F,F,1),bt.position.set(g,w,E),(J||l).add(bt),q.push(bt),bt}let V=[];function B(g,w){let E=new Fe({color:g});return E.userData.day=new be(g),E.userData.night=new be(w||"#ffd98a"),V.push(E),E}let L=new ni(300,24,16),R=new Float32Array(L.attributes.position.count*3);L.setAttribute("color",new Ce(R,3));let H=new ht(L,new Fe({vertexColors:!0,side:Jn,fog:!1,depthWrite:!1}));H.renderOrder=-10,l.add(H);let st=new yn;{let g=[],w=ur(9);for(let E=0;E<400;E++){let F=w()*Math.PI*2,J=.15+w()*1.3;g.push(Math.cos(F)*Math.cos(J)*280,Math.sin(J)*280,Math.sin(F)*Math.cos(J)*280)}st.setAttribute("position",new Ce(g,3))}let nt=ge(128,128,g=>{let w=g.createRadialGradient(64,64,10,64,64,64);w.addColorStop(0,"rgba(255,255,240,1)"),w.addColorStop(.35,"rgba(255,240,200,.9)"),w.addColorStop(.4,"rgba(255,230,180,.3)"),w.addColorStop(1,"rgba(255,230,180,0)"),g.fillStyle=w,g.fillRect(0,0,128,128)}),at=new ei(new Kn({map:nt,fog:!1,depthWrite:!1,transparent:!0}));at.scale.set(50,50,1),H.add(at);let Mt=ge(128,128,g=>{let w=g.createRadialGradient(64,64,18,64,64,64);w.addColorStop(0,"rgba(255,248,220,1)"),w.addColorStop(.42,"rgba(255,244,210,1)"),w.addColorStop(.46,"rgba(255,240,200,.25)"),w.addColorStop(1,"rgba(255,240,200,0)"),g.fillStyle=w,g.fillRect(0,0,128,128)}),rt=new ei(new Kn({map:Mt,fog:!1,depthWrite:!1,transparent:!0}));rt.scale.set(36,36,1),H.add(rt);let It=new ye;H.add(It);{let g=ge(16,16,F=>{F.fillStyle="#fff8e0",F.beginPath(),F.arc(8,8,3,0,7),F.fill()}),w=st.attributes.position,E=new Kn({map:g,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let F=0;F<w.count;F+=2){let J=new ei(E);J.position.set(w.getX(F),w.getY(F),w.getZ(F)),J.scale.set(1.4,1.4,1),It.add(J)}It.userData.m=E}let ct=new ye;l.add(ct);{let g=ur(4);for(let w=0;w<14;w++){let E=new ye,F=3+(g()*3|0);for(let bt=0;bt<F;bt++){let St=new ht(new gs(3+g()*3,1),new nn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));St.position.set(bt*4-F*2,g()*1.5,g()*2),St.scale.y=.6,E.add(St)}let J=g()*Math.PI*2,ot=110+g()*60;E.position.set(Math.cos(J)*ot,40+g()*25,Math.sin(J)*ot),E.userData.a=J,E.userData.R=ot,ct.add(E)}}let Ut=new Dr(14676735,8036442,1.4);l.add(Ut);let Zt=new Il(16777215,.25);l.add(Zt);let Ot=new Ur(16773852,2.2);Ot.castShadow=!0;let ie=a?1024:2048;Ot.shadow.mapSize.set(ie,ie),Object.assign(Ot.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),Ot.shadow.bias=-8e-4,Ot.shadow.normalBias=.03,l.add(Ot),l.add(Ot.target);let Re=ge(256,256,(g,w,E)=>{g.fillStyle="#3fb7d8",g.fillRect(0,0,w,E);let F=ur(2);for(let J=0;J<90;J++){g.strokeStyle=`rgba(255,255,255,${.12+F()*.25})`,g.lineWidth=2+F()*2;let ot=F()*w,bt=F()*E,St=10+F()*24;g.beginPath(),g.moveTo(ot,bt),g.quadraticCurveTo(ot+St/2,bt-4,ot+St,bt),g.stroke()}});Re.wrapS=Re.wrapT=Fs,Re.repeat.set(40,40);let gt=new nn({map:Re,color:"#ffffff"}),Lt=new ht(new ke(900,900),gt);Lt.rotation.x=-Math.PI/2,Lt.position.y=-.45,Lt.receiveShadow=!0,l.add(Lt);function se(g,w,E){let F=new or;return F.moveTo(-g+E,-w),F.lineTo(g-E,-w),F.quadraticCurveTo(g,-w,g,-w+E),F.lineTo(g,w-E),F.quadraticCurveTo(g,w,g-E,w),F.lineTo(-g+E,w),F.quadraticCurveTo(-g,w,-g,w-E),F.lineTo(-g,-w+E),F.quadraticCurveTo(-g,-w,-g+E,-w),F}let Ft=ge(128,128,(g,w,E)=>{g.fillStyle="#f3dfa8",g.fillRect(0,0,w,E);let F=ur(7);for(let J=0;J<300;J++)g.fillStyle=F()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",g.fillRect(F()*w,F()*E,2,2)});{let g=new fo(se(is+xs,Di+xs,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});g.rotateX(Math.PI/2);let w=new ht(g,new nn({map:y(Ft,.4,.4)}));w.position.y=-.83,w.receiveShadow=!0,l.add(w);let E=new ht(new Sa(se(is+xs+3.4,Di+xs+3.4,18),12),new Fe({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=-.38,l.add(E)}let ue=ge(256,256,(g,w,E)=>{g.fillStyle="#7ccb5a",g.fillRect(0,0,w,E);let F=ur(5);for(let J=0;J<900;J++){g.fillStyle=F()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ot=F()*w,bt=F()*E;g.fillRect(ot,bt,2,5)}});{let g=new Sa(se(is,27,12),10);g.rotateX(-Math.PI/2),g.translate(0,0,-7);let w=g.attributes.uv;for(let F=0;F<w.count;F++)w.setXY(F,w.getX(F)/8,w.getY(F)/8);let E=new ht(g,new nn({map:y(ue,1,1)}));E.position.y=.02,E.receiveShadow=!0,l.add(E)}let ce=ge(128,128,(g,w,E)=>{g.fillStyle="#d9d4cc",g.fillRect(0,0,w,E);let F=ur(8);for(let J=0;J<4;J++)for(let ot=0;ot<4;ot++){let bt=(F()*14|0)-7;g.fillStyle=`rgb(${206+bt},${200+bt},${190+bt})`,g.fillRect(ot*32+1,J*32+1,30,30)}}),ae=v("#f4f1ea");for(let[g,w,E,F]of b_){let J=Math.hypot(E-g,F-w)+yo*2,ot=(g+E)/2,bt=(w+F)/2,St=w===F,Et=new ht(new ke(St?J:yo*2,St?yo*2:J),new nn({map:y(ce,(St?J:4)/2,(St?4:J)/2)}));Et.rotation.x=-Math.PI/2,Et.position.set(ot,.04,bt),Et.receiveShadow=!0,l.add(Et);for(let yt of[-1,1]){let qe=new ht(new ln(St?J:.25,.12,St?.25:J),ae);qe.position.set(ot+(St?0:yt*(yo+.1)),.06,bt+(St?yt*(yo+.1):0)),qe.receiveShadow=!0,l.add(qe)}}let Ue=ge(512,512,(g,w,E)=>{g.fillStyle="#e9b98a",g.fillRect(0,0,w,E),g.translate(256,256);for(let F=250;F>40;F-=26)g.strokeStyle=F%52?"#f4d2a6":"#d99a6a",g.lineWidth=10,g.beginPath(),g.arc(0,0,F,0,7),g.stroke();for(let F=0;F<16;F++)g.rotate(Math.PI/8),g.strokeStyle="#f7e2c0",g.lineWidth=4,g.beginPath(),g.moveTo(50,0),g.lineTo(250,0),g.stroke()});{let g=new ht(new Yn(xf,48),new nn({map:Ue}));g.rotation.x=-Math.PI/2,g.position.y=.06,g.receiveShadow=!0,l.add(g);let w=new ht(new Al(xf,xf+.35,48),ae);w.rotation.x=-Math.PI/2,w.position.y=.08,l.add(w)}let wt=[];{let g=new ye;l.add(g);let w=v("#f4f1ea");C(3.4,3.6,.7,w,0,.35,0,g,32);let E=ge(128,128,(bt,St,Et)=>{bt.fillStyle="#5ec8e8",bt.fillRect(0,0,St,Et),bt.strokeStyle="rgba(255,255,255,.5)",bt.lineWidth=3;for(let yt=0;yt<8;yt++)bt.beginPath(),bt.arc(64,64,8+yt*8,0,7),bt.stroke()}),F=new ht(new Yn(3.05,32),new Fe({map:E}));F.rotation.x=-Math.PI/2,F.position.y=.72,g.add(F),wt.push(F),C(.5,.7,1.4,w,0,1.3,0,g,16),C(1.4,1.2,.25,w,0,2.05,0,g,24),C(.25,.35,.9,w,0,2.6,0,g,12),C(.7,.6,.18,w,0,3.1,0,g,20);let J=new Fe({color:"#c8f0ff",transparent:!0,opacity:.75}),ot=new ht(new yi(.12,.2,1.2,10,1,!0),J);ot.position.y=3.7,g.add(ot),wt.push(ot);for(let bt=0;bt<8;bt++){let St=bt/8*Math.PI*2,Et=new ht(new Ti(.9,.06,6,12,Math.PI*.6),J);Et.position.set(Math.cos(St)*.9,2.2,Math.sin(St)*.9),Et.rotation.set(0,-St,Math.PI*.2),g.add(Et)}for(let bt=0;bt<6;bt++){let St=bt/6*Math.PI*2+.26;Dt(Math.cos(St)*6.6,Math.sin(St)*6.6,St)}}function Dt(g,w,E){let F=new ye;F.position.set(g,0,w),F.rotation.y=-E,l.add(F),S(1.6,.45,1,"#c8704a",0,.22,0,F),S(1.45,.1,.85,"#5a3a24",0,.45,0,F,!1);let J=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ot=0;ot<8;ot++)M(.13,J[ot%5],-.55+ot%4*.36,.62,-.2+Math.floor(ot/4)*.4,F),M(.1,"#4a9a3a",-.55+ot%4*.36,.52,-.2+Math.floor(ot/4)*.4,F)}function O(g){return ge(128,128,(w,E,F)=>{w.fillStyle=g,w.fillRect(0,0,E,F);for(let J=0;J<F;J+=16)w.fillStyle="rgba(0,0,0,.08)",w.fillRect(0,J,E,2),w.fillStyle="rgba(255,255,255,.08)",w.fillRect(0,J+2,E,2)})}function re(g){return ge(512,128,(w,E,F)=>{w.fillStyle="#fff8ea",w.strokeStyle="#3a2a1a",w.lineWidth=10,lr(w,6,6,E-12,F-12,24),w.fill(),w.stroke(),w.fillStyle="#3a2a1a",w.textAlign="center",w.textBaseline="middle";let J=64;for(w.font=`900 ${J}px ${Dn}`;w.measureText(g).width>E-60&&J>20;)J-=2,w.font=`900 ${J}px ${Dn}`;w.fillText(g,E/2,F/2+3)})}let xt=5.4,Nt=4.2,Pt=3;function _e(g,w){let E=new ye,F=g.wall,J=new nn({map:O(F)}),ot=-.6;S(xt+.3,.35,Nt+.3,"#e8e2d4",0,.17,ot,E);let bt=S(xt,Pt,Nt,J,0,.35+Pt/2,ot,E);for(let dt of[-1,1])S(.22,Pt,.22,"#f4efe2",dt*xt/2,.35+Pt/2,ot+Nt/2,E);S(xt+.1,.18,.18,"#f4efe2",0,.35+Pt,ot+Nt/2+.02,E);let St=v(g.roofC),Et=.35+Pt;if(g.roof==="flat")S(xt+.6,.35,Nt+.6,St,0,Et+.17,ot,E),S(xt+.2,.3,Nt+.2,"#f4efe2",0,Et+.5,ot,E),S(1,.7,1,"#9a9a9a",1.4,Et+.9,ot-.6,E);else if(g.roof==="round"){let dt=new ht(new yi(Nt/2+.45,Nt/2+.45,xt+.5,24,1,!1,-Math.PI/2,Math.PI),St);dt.rotation.set(0,0,Math.PI/2),dt.position.set(0,Et,ot),dt.castShadow=!0,E.add(dt);for(let fe of[-1,1]){let ve=new ht(new Yn(Nt/2+.45,24,0,Math.PI),J);ve.rotation.y=fe*Math.PI/2,ve.position.set(fe*(xt/2+.26),Et,ot),E.add(ve)}}else if(g.roof==="hip"){let dt=new ht(new jn((xt+.9)/Math.SQRT2*1,1.9,4),St);dt.rotation.y=Math.PI/4,dt.scale.set(1,1,(Nt+.9)/(xt+.9)),dt.position.set(0,Et+.95,ot),dt.castShadow=!0,E.add(dt)}else{let dt=new or,fe=Nt/2+.5;dt.moveTo(-fe,0),dt.lineTo(0,1.9),dt.lineTo(fe,0),dt.lineTo(-fe,0);let ve=new fo(dt,{depth:xt+.6,bevelEnabled:!1});ve.translate(0,0,-(xt+.6)/2);let Oe=new ht(ve,[St,St]);Oe.rotation.y=Math.PI/2,Oe.position.set(0,Et-.05,ot),Oe.castShadow=!0,E.add(Oe);let En=new or;En.moveTo(-Nt/2,0),En.lineTo(0,1.55),En.lineTo(Nt/2,0);let bn=new ht(new Sa(En),J);bn.rotation.y=Math.PI/2;for(let Mn of[-1,1]){let Fn=bn.clone();Fn.rotation.y=Mn*Math.PI/2,Fn.position.set(Mn*(xt/2+.001),Et,ot),E.add(Fn)}let Ge=new ht(new Yn(.35,20),B("#bfe6ff"));Ge.position.set(0,Et+.5,ot+Nt/2+.02),E.add(Ge)}let yt=ot+Nt/2+.02,qe=v(g.doorC);S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,yt,E);let vn=new ye;{let dt=new ht(new ke(1.1,2.3),new Fe({color:"#2a1a10"}));dt.position.set(0,.35+1.15,yt+.005),E.add(dt);let fe=new ht(new ke(1,2.1),B("#5a3a24","#ffcf7a"));fe.position.set(0,.35+1.07,yt+.007),E.add(fe)}if(g.door==="arch"){S(1.1,1.75,.14,qe,0,.35+.88,yt+.02,vn);let dt=new ht(new Yn(.55,20,0,Math.PI),qe);dt.position.set(0,.35+1.75,yt+.1),vn.add(dt)}else S(1.1,2.05,.14,qe,0,.35+1.02,yt+.02,vn);if(g.door==="round"){let dt=new ht(new Yn(.26,20),B("#bfe6ff"));dt.position.set(0,.35+1.5,yt+.1),vn.add(dt);let fe=new ht(new Ti(.28,.05,8,20),v("#c8c8d0"));fe.position.set(0,.35+1.5,yt+.1),vn.add(fe)}else if(g.door==="grid")for(let dt=0;dt<3;dt++)for(let fe=0;fe<2;fe++){let ve=new ht(new ke(.38,.4),B("#e8f4ff","#ffe0a0"));ve.position.set(-.21+fe*.42,.35+1.15+dt*.45,yt+.1),vn.add(ve)}M(.06,"#e9c34a",.4,.35+1,yt+.12,vn);{let dt=new ye;dt.position.set(-.55,0,yt+.02),E.add(dt),vn.position.set(.55,0,-(yt+.02)),dt.add(vn),E.userData.doorPivot=dt,E.userData.doorZ=yt}let Hn=M(.16,T("#fff4d0"),.95,.35+2.3,yt+.2,E);z(.95,.35+2.3,yt+.3,2.2,E);for(let dt of[-1.75,1.75]){if(g.win==="round"){let ve=new ht(new Yn(.5,24),B("#bfe6ff"));ve.position.set(dt,2.05,yt+.01),E.add(ve);let Oe=new ht(new Ti(.52,.08,8,24),v("#f4efe2"));Oe.position.set(dt,2.05,yt+.02),E.add(Oe)}else if(g.win==="arch"){let ve=new ht(new ke(.9,.8),B("#bfe6ff"));ve.position.set(dt,2.05-.15,yt+.01),E.add(ve);let Oe=new ht(new Yn(.45,16,0,Math.PI),B("#bfe6ff"));Oe.position.set(dt,2.05+.25,yt+.01),E.add(Oe),S(1.05,.1,.14,"#f4efe2",dt,2.05-.58,yt+.05,E)}else if(g.win==="shoji"){let ve=new ht(new ke(1.1,1),B("#fff4dc","#ffcf7a"));ve.position.set(dt,2.05,yt+.01),E.add(ve);for(let Oe=-1;Oe<=1;Oe++)S(.04,1,.04,"#6b3f1f",dt+Oe*.36,2.05,yt+.04,E,!1),S(1.1,.04,.04,"#6b3f1f",dt,2.05+Oe*.33,yt+.04,E,!1)}else{let ve=new ht(new ke(1.05,.95),B("#bfe6ff"));ve.position.set(dt,2.05,yt+.01),E.add(ve),S(1.2,.1,.1,"#f4efe2",dt,2.05+.5,yt+.04,E,!1),S(1.2,.1,.1,"#f4efe2",dt,2.05-.5,yt+.04,E,!1),S(.1,1.05,.1,"#f4efe2",dt-.55,2.05,yt+.04,E,!1),S(.1,1.05,.1,"#f4efe2",dt+.55,2.05,yt+.04,E,!1),S(.06,1,.06,"#f4efe2",dt,2.05,yt+.04,E,!1),S(1.3,.14,.32,"#f4efe2",dt,2.05-.6,yt+.14,E)}if(g.garden!=="none"){S(1,.2,.25,"#8a5a34",dt,2.05-.78,yt+.2,E);for(let ve=0;ve<4;ve++)M(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][ve],dt-.36+ve*.24,2.05-.62,yt+.2,E)}}if(+g.porch){S(xt+.6,.3,1.7,"#c8935a",0,.15,yt+.85,E);for(let dt=0;dt<9;dt++)S(.02,.02,1.7,"#9a6a3a",-xt/2-.1+dt*.7,.31,yt+.85,E,!1);S(1.6,.15,.5,"#c8935a",0,.075,yt+1.95,E);for(let dt of[-1,1])S(.12,.9,.12,"#f4efe2",dt*(xt/2+.15),.75,yt+1.62,E),S(.12,.9,.12,"#f4efe2",dt*1,.75,yt+1.62,E),S(xt/2-.8,.08,.08,"#f4efe2",dt*(xt/4+.58),1.1,yt+1.62,E)}{let dt=new ye;dt.position.set(xt/2+.2,0,yt+2.4),E.add(dt),S(.1,1,.1,"#6b3f1f",0,.5,0,dt),S(.4,.32,.55,g.doorC==="#f4efe2"?"#e8553f":g.doorC,0,1.12,0,dt),S(.05,.25,.05,"#e8553f",.22,1.3,.1,dt)}let _t=yt+2.9,Ie=xt/2+1.1;if(g.fence==="white"||g.fence==="wood"){let dt=g.fence==="white"?"#ffffff":"#c8b070";for(let fe of[-1,1]){for(let ve=0;ve<6;ve++){let Oe=fe*(1.3+ve*.55);if(S(.12,.8,.06,dt,Oe,.4,_t,E),g.fence==="white"){let En=new ht(new jn(.09,.16,4),v(dt));En.position.set(Oe,.88,_t),En.rotation.y=Math.PI/4,E.add(En)}}S(2.9,.08,.05,dt,fe*2.65,.55,_t-.04,E,!1),S(2.9,.08,.05,dt,fe*2.65,.25,_t-.04,E,!1)}}else if(g.fence==="hedge")for(let dt of[-1,1]){let fe=S(2.8,.7,.6,v("#3f9a3f"),dt*2.6,.35,_t,E);fe.geometry=new ln(2.8,.7,.6,3,1,1);for(let ve=0;ve<4;ve++)M(.38,"#4aa84a",dt*(1.5+ve*.72),.7,_t,E,1,.8,1,!0)}if(g.garden==="flower")for(let dt of[-1,1])for(let fe=0;fe<5;fe++)M(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(fe+(dt>0?2:0))%5],dt*(2.1+fe%3*.5),.28,yt+2+Math.floor(fe/3)*.4,E),M(.12,"#3f8a2f",dt*(2.1+fe%3*.5),.14,yt+2+Math.floor(fe/3)*.4,E);else if(g.garden==="pots")for(let dt of[-1,1])C(.28,.22,.45,"#c8704a",dt*2.3,.22,yt+2.1,E),M(.38,"#4a9a3a",dt*2.3,.7,yt+2.1,E,1,1,1,!0);else g.garden==="tree"&&(C(.12,.16,1.5,"#7a5034",-xt/2-.6,.75,yt+1.6,E),M(.95,"#4aa84a",-xt/2-.6,2,yt+1.6,E,1,1,1,!0),M(.6,"#5ab85a",-xt/2-.2,2.4,yt+1.9,E,1,1,1,!0));if(w){let dt=new ht(new ke(1.8,.45),new Fe({map:re(w),transparent:!0}));dt.position.set(0,.35+2.5,yt+.09),E.add(dt)}return E.traverse(dt=>{dt.isMesh&&(dt.castShadow=dt.castShadow||!1,dt.receiveShadow=!0)}),E.userData.door=new N(0,0,yt+2.4),E}let Yt=[],U=ur(31),A=g=>{let w=La.find(E=>E.id===g||E.spr===g);return w?w.name.split(" ")[0]:g};function tt(g){let w=E=>E[Math.floor(g()*E.length)][0];return{wall:w(Gi.wall),roof:w(Gi.roof),roofC:w(Gi.roofC),door:w(Gi.door),doorC:w(Gi.doorC),win:w(Gi.win),porch:g()<.75?1:0,fence:w(Gi.fence),garden:w(Gi.garden)}}function pt(g){g.g&&(l.remove(g.g),g.g.traverse(bt=>{bt.geometry&&bt.geometry.dispose()}));let w=g.own?r.ex:g.ex,E=g.own?n.houseName||"\u6211\u7684\u5BB6":g.label;g.g=_e(w,E),g.g.position.set(g.x,0,g.z),g.g.rotation.y=g.f===2?Math.PI:0,l.add(g.g),g.g.traverse(bt=>{bt.isMesh&&(bt.userData.house=g)});let F=g.g.userData.door.clone();g.f===2&&(F.x=-F.x,F.z=-F.z),g.door={x:g.x+F.x,z:g.z+F.z};let J=g.f===2?-1:1,ot=g.g.userData.doorZ+.6;g.face={x:g.x,z:g.z+J*ot},g.inw=-J,g.pivot=g.g.userData.doorPivot}M_.forEach(g=>{let w=Object.assign({},g);if(!w.own){w.ex=tt(U);let E=La.find(F=>F.spr===g.npc||F.id===g.npc);w.label=(E?E.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}Yt.push(w),pt(w)});let ut=Yt.find(g=>g.own);function mt(g){let w=new ye;w.position.set(g.x,0,g.z),l.add(w);let E={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[g.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,w),S(6.6,3.4,5,E[0],0,2,-.2,w),S(7.4,.4,6,E[1],0,3.9,-.2,w),S(7.6,.3,1.6,E[1],0,3.1,2.6,w).rotation.x=.35;let F=new ht(new ke(4.2,.9),new Fe({map:re(g.k==="izakaya"&&r.name?r.name:E[3])}));F.position.set(0,4.55,2.85),w.add(F),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,w);let J=new ht(new ke(2.2,1.4),B("#cfe8f4"));J.position.set(-1.9,1.7,2.31),w.add(J);let ot=J.clone();ot.position.x=1.9,w.add(ot),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,w);let bt=ge(256,100,(Et,yt,qe)=>{for(let vn=0;vn<3;vn++)Et.fillStyle=E[2],Et.fillRect(4+vn*84,0,80,qe-4);Et.fillStyle="#fff",Et.textAlign="center",Et.textBaseline="middle",Et.font=`900 40px ${Dn}`,[...g.k==="bar"?"\u6708\u5F71":g.n.slice(0,3)].slice(0,3).forEach((vn,Hn)=>Et.fillText(vn,44+Hn*84,44))}),St=new ht(new ke(1.5,.65),new Fe({map:bt,transparent:!0,side:Ln}));St.position.set(0,2.25,2.42),w.add(St);for(let Et of[-1,1]){let yt=M(.3,T(g.k==="sushi"?"#ffffff":"#e2452f"),Et*1.15,2.3,2.5,w,1,1.3,1);z(Et*1.15,2.3,2.6,2.6,w)}if(g.k==="ramen")for(let Et=0;Et<3;Et++)C(.25,.25,.7,"#c8352a",-1.2+Et*1.2,.35,3.5,w,12);if(g.k==="sushi"){let Et=new ht(new jn(.4,1.2,4),v("#2f6bb8"));Et.position.set(3.1,3.2,2.6),Et.rotation.z=-1.3,w.add(Et)}return w.traverse(Et=>{Et.isMesh&&(Et.userData.shop=g)}),g.door={x:g.x,z:g.z+3.6},g.face={x:g.x,z:g.z+2.85},g.inw=-1,w}_o.forEach(mt);let Ht=[];Yt.forEach(g=>{Ht.push([g.x-xt/2-.2,g.z-(g.f===2?-.6:.6)-Nt/2-.2,g.x+xt/2+.2,g.z-(g.f===2?-.6:.6)+Nt/2+.2])}),_o.forEach(g=>Ht.push([g.x-3.5,g.z-3,g.x+3.5,g.z+2.4])),Ht.push([-3.6,-3.6,3.6,3.6]);function zt(g,w,E,F){let J=new ye;if(J.position.set(g,0,w),J.scale.setScalar(E),l.add(J),F==="palm"){let ot=0,bt=0;for(let St=0;St<6;St++){let Et=C(.22-St*.02,.26-St*.02,.8,"#a07850",ot,bt+.4,0,J,8);Et.rotation.z=-.08*St,ot+=.06*St,bt+=.78}for(let St=0;St<7;St++){let Et=St/7*Math.PI*2,yt=new ht(new jn(.32,2.6,4),v("#3fa04a",{flatShading:!0}));yt.scale.z=.25,yt.position.set(ot+Math.cos(Et)*1.1,bt+.1,Math.sin(Et)*1.1),yt.rotation.set(Math.sin(Et)*1.6,0,-Math.cos(Et)*1.6),yt.castShadow=!0,J.add(yt)}M(.18,"#6a4a2a",ot,bt-.1,.1,J)}else C(.22,.3,1.8,"#8a5a3a",0,.9,0,J,8),M(1.5,F==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,J,1,.9,1,!0),M(1,F==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,J,1,1,1,!0),M(.9,F==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,J,1,1,1,!0);Ht.push([g-.5*E,w-.5*E,g+.5*E,w+.5*E])}let Xt=ur(77);for(let g=0;g<34;g++){let w=g/34*Math.PI*2+Xt()*.1,E=Math.cos(w)*(is-1.5+Xt()*2),F=Math.sin(w)*(Di-1.5+Xt()*2);if(F>18){Xt()<.5&&zt(Ei(E*1.05,-is-3,is+3),Ei(F,22,Di+4),.9,"palm");continue}zt(Ei(E,-is+2,is-2),Ei(F,-Di+2,Di-2),.9+Xt()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([g,w],E)=>zt(g,w,.8+E%3*.1,E%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([g,w])=>zt(g,w,.8,"pink"));function Pe(g,w){let E=new ye;E.position.set(g,0,w),l.add(E),C(.09,.12,3.6,"#3a3a44",0,1.8,0,E,8);let F=M(.28,T("#fff4d0"),0,3.7,0,E);C(.3,.2,.12,"#3a3a44",0,3.98,0,E,10),z(0,3.7,0,5,E);let J=new ht(new Yn(3,20),new Fe({map:Fr,transparent:!0,blending:ds,depthWrite:!1,opacity:0}));J.rotation.x=-Math.PI/2,J.position.y=.08,E.add(J),q.push(J),J.userData.k=.35,Ht.push([g-.2,w-.2,g+.2,w+.2])}for(let[g,w]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Pe(g,w);function At(g,w,E){let F=new ye;F.position.set(g,0,w),F.rotation.y=E,l.add(F),S(2,.12,.55,"#b8824a",0,.5,0,F),S(2,.5,.1,"#b8824a",0,.85,-.25,F);for(let J of[-.85,.85])S(.1,.5,.5,"#3a3a44",J,.25,0,F);return Ht.push([g-1,w-.4,g+1,w+.4]),F}At(0,6.9,Math.PI),At(0,-6.9,0),At(-6.9,0,Math.PI/2),At(6.9,0,-Math.PI/2);let Jt=new ye;Jt.position.set(4.6,0,-4.6),Jt.rotation.y=-Math.PI/4,l.add(Jt);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,Jt),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,Jt);let g=ge(256,160,(E,F,J)=>{E.fillStyle="#c8935a",E.fillRect(0,0,F,J),E.strokeStyle="#6b3f1f",E.lineWidth=10,E.strokeRect(0,0,F,J),E.fillStyle="#fff8ea",E.fillRect(20,30,100,70),E.fillStyle="#ffe0ea",E.fillRect(135,22,100,80),E.fillStyle="#3a2a1a",E.font=`900 26px ${Dn}`,E.textAlign="center",E.fillText("\u5CF6\u306E\u63B2\u793A\u677F",F/2,J-18)}),w=new ht(new ln(1.8,1.1,.1),[v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),new Fe({map:g}),v("#6b3f1f")]);w.position.y=1.4,w.castShadow=!0,Jt.add(w),Ht.push([3.8,-5.4,5.4,-3.8])}function de(g,w,E){let F=new ye;F.position.set(g,0,w),l.add(F),C(.05,.05,2.4,"#f4efe2",0,1.2,0,F,6);let J=new ht(new jn(1.5,.7,12),v(E,{flatShading:!0}));J.position.y=2.5,J.castShadow=!0,F.add(J);let ot=new ht(new jn(1.52,.7,12,1,!0,0,Math.PI/6),v("#ffffff",{side:Ln}));for(let bt=0;bt<6;bt++){let St=ot.clone();St.rotation.y=bt*Math.PI/3,St.position.y=2.5,F.add(St)}}function pe(g,w,E){let F=new ye;F.position.set(g,0,w),l.add(F),S(.7,.12,1.8,E,0,.35,0,F);let J=S(.7,.1,.8,E,0,.6,-.85,F);J.rotation.x=.6;for(let ot of[-.3,.3])for(let bt of[-.7,.7])S(.05,.3,.05,"#f4efe2",ot,.15,bt,F)}de(-18,28,"#2f6bb8"),pe(-16.2,28.4,"#6fd1c0"),pe(-19.6,28.8,"#f29ab8"),de(-4,30,"#e8553f"),pe(-2.2,30.2,"#f6cf4a"),de(22,29,"#3f8f4f"),pe(23.8,29.3,"#f29ab8"),de(-30,27,"#f6cf4a");{let g=new ye;g.position.set(10,0,Di+6),l.add(g),S(3,.3,16,"#b8824a",0,.15,6,g);for(let F=0;F<6;F++)for(let J of[-1.4,1.4])C(.15,.15,1.6,"#8a5a34",J,-.5,-1+F*3,g,8);for(let F=0;F<16;F++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+F,g,!1);let w=new ye;w.position.set(14,-.2,Di+17),l.add(w),S(1.8,.6,4,"#f4efe2",0,.3,0,w),S(1.9,.15,4.1,"#e8553f",0,.65,0,w),C(.06,.06,3,"#8a5a34",0,2,0,w,6);let E=new ht(new ke(1.6,2.2),v("#ffffff",{side:Ln}));E.position.set(0,2.2,.6),E.rotation.y=Math.PI/2,w.add(E),ct.userData.boat=w}let Kt=[8.5,Di+4,11.5,Di+19],Le=[],jt=1.5,Ze=ge(64,64,g=>{let w=g.createRadialGradient(32,32,2,32,32,32);w.addColorStop(0,"rgba(0,0,0,.55)"),w.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=w,g.fillRect(0,0,64,64)});function Y(g,w){return ge(512,112,(E,F,J)=>{E.textAlign="center",E.textBaseline="middle";let ot=52;E.font=`900 ${ot}px ${Dn}`;let bt=String(g||"").slice(0,16);for(;E.measureText(bt).width>F-80&&ot>22;)ot-=2,E.font=`900 ${ot}px ${Dn}`;let St=Math.min(F-12,E.measureText(bt).width+56);E.fillStyle=w==="me"?"#ffffffee":"#2a2a48e0",E.strokeStyle=w==="me"?"#3a2a1a":"#c8c0ff",E.lineWidth=7,lr(E,(F-St)/2,14,St,J-28,(J-28)/2),E.fill(),E.stroke(),E.fillStyle=w==="me"?"#3a2a1a":"#fff3d6",E.fillText(bt,F/2,J/2+2)})}let qt=ge(128,112,g=>{g.strokeStyle="#2a1810",g.lineWidth=6,g.lineJoin="round",g.fillStyle="#ffffff",lr(g,12,8,104,66,24),g.fill(),g.stroke(),g.beginPath(),g.moveTo(44,72),g.lineTo(34,100),g.lineTo(66,74),g.closePath(),g.fill(),g.stroke(),g.fillRect(46,68,18,8),g.fillStyle="#2a1810";for(let w=0;w<3;w++)g.beginPath(),g.arc(40+w*24,42,6,0,7),g.fill()});function ft(g,w,E){E=E||{};let F=new ye;l.add(F);let J=new ke(1,1);J.translate(0,.5,0);let ot=new Fe({transparent:!0,alphaTest:.04,color:16777215}),bt=new ht(J,ot);F.add(bt);let St={grp:F,m:bt,mat:ot,h0:w,h:w*jt,ar:.8,w:w*jt*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};p(g,yt=>{ot.map=yt,ot.needsUpdate=!0,St.ar=yt.image.width/yt.image.height,St.w=St.h*St.ar});let Et=new ht(new Yn(.5,16),new Fe({map:Ze,transparent:!0,depthWrite:!1}));if(Et.rotation.x=-Math.PI/2,l.add(Et),St.sh=Et,E.name){let yt=new ei(new Kn({map:Y(E.name,E.nk),transparent:!0,depthTest:!1}));yt.renderOrder=30,yt.scale.set(2.2,.48,1),l.add(yt),St.tag=yt}if(E.bubble){let yt=new ei(new Kn({map:qt,transparent:!0,depthWrite:!1}));yt.scale.set(.85,.74,1),l.add(yt),St.bub=yt}return Le.push(St),St}let K=ft(n.me.src,1.5,{name:n.me.name||"\u6211",nk:"me"}),Bt=.35;n.spawn==="door"&&ut?(K.x=ut.face.x,K.z=ut.face.z-ut.inw*.9):n.spawn==="front"&&ut?(K.x=ut.face.x+.8,K.z=ut.face.z-ut.inw*1.9,Bt=ut.f===2?Math.PI:0):n.spawn==="shop"?(K.x=_o[0].face.x,K.z=_o[0].face.z+.9):(K.x=0,K.z=11.5);function Gt(g,w){let E=Math.abs(g),F=Math.abs(w),J=is+xs-1,ot=Di+xs-1,bt=14;return g>=Kt[0]&&g<=Kt[2]&&w>=Kt[1]&&w<=Kt[3]?!0:E>J||F>ot?!1:E>J-bt&&F>ot-bt?Math.hypot(E-(J-bt),F-(ot-bt))<bt:!0}function Me(g,w,E){if(!Gt(g,w))return!0;for(let F of Ht)if(g>F[0]-E&&g<F[2]+E&&w>F[1]-E&&w<F[3]+E)return!0;return!1}let rn=1,Tn=-is-xs,Be=-Di-xs,tn=Math.ceil((is+xs)*2),Pn=Math.ceil((Di+xs)*2+16),Ni=null;function pr(){Ni=new Uint8Array(tn*Pn);for(let g=0;g<Pn;g++)for(let w=0;w<tn;w++)Ni[g*tn+w]=Me(Tn+w+.5,Be+g+.5,.35)?1:0}pr();function kn(g,w,E,F){let J=Ge=>Math.floor(Ge-Tn),ot=Ge=>Math.floor(Ge-Be),bt=J(g),St=ot(w),Et=J(E),yt=ot(F);if(Et<0||yt<0||Et>=tn||yt>=Pn)return null;if(Ni[yt*tn+Et]){let Ge=null,Mn=1e9;for(let Fn=-3;Fn<=3;Fn++)for(let wn=-3;wn<=3;wn++){let Ai=Et+wn,oi=yt+Fn;if(Ai<0||oi<0||Ai>=tn||oi>=Pn||Ni[oi*tn+Ai])continue;let Ss=wn*wn+Fn*Fn;Ss<Mn&&(Mn=Ss,Ge=[Ai,oi])}if(!Ge)return null;[Et,yt]=Ge}let qe=new Int32Array(tn*Pn).fill(-1),vn=St*tn+bt,Hn=yt*tn+Et;qe[vn]=vn;let _t=[vn],Ie=0;for(;Ie<_t.length;){let Ge=_t[Ie++];if(Ge===Hn)break;let Mn=Ge%tn,Fn=Ge/tn|0;for(let[wn,Ai]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let oi=Mn+wn,Ss=Fn+Ai;if(oi<0||Ss<0||oi>=tn||Ss>=Pn)continue;let Hr=Ss*tn+oi;qe[Hr]>=0||Ni[Hr]||wn&&Ai&&(Ni[Fn*tn+oi]||Ni[Ss*tn+Mn])||(qe[Hr]=Ge,_t.push(Hr))}}if(qe[Hn]<0)return null;let dt=[],fe=Hn;for(;fe!==vn;)dt.push([Tn+fe%tn+.5,Be+(fe/tn|0)+.5]),fe=qe[fe];dt.reverse();let ve=[],Oe=g,En=w,bn=0;for(;bn<dt.length;){let Ge=bn;for(let Mn=dt.length-1;Mn>bn;Mn--)if(vs(Oe,En,dt[Mn][0],dt[Mn][1])){Ge=Mn;break}ve.push(dt[Ge]),Oe=dt[Ge][0],En=dt[Ge][1],bn=Ge+1}return ve}function vs(g,w,E,F){let J=Math.hypot(E-g,F-w),ot=Math.ceil(J/.4);for(let bt=1;bt<=ot;bt++){let St=bt/ot;if(Me(g+(E-g)*St,w+(F-w)*St,.3))return!1}return!0}let hn=[],zi={};function gn(g,w){let E=g+","+w;return zi[E]!==void 0?zi[E]:(zi[E]=hn.length,hn.push({x:g,z:w,n:[]}),hn.length-1)}{let g=[-36,-26,-15,0,15,26,36],w=[-18,0,16];for(let St of w)for(let Et=0;Et<g.length-1;Et++){let yt=gn(g[Et],St),qe=gn(g[Et+1],St);hn[yt].n.push(qe),hn[qe].n.push(yt)}for(let St of[-36,36])for(let Et=0;Et<w.length-1;Et++){let yt=gn(St,w[Et]),qe=gn(St,w[Et+1]);hn[yt].n.push(qe),hn[qe].n.push(yt)}let E=gn(0,-28),F=gn(0,-18);hn[E].n.push(F),hn[F].n.push(E);let J=gn(0,-9.5),ot=gn(0,9.5);for(let[St,Et]of[[F,J],[ot,gn(0,16)],[J,gn(-9.5,0)],[J,gn(9.5,0)],[ot,gn(-9.5,0)],[ot,gn(9.5,0)],[gn(-9.5,0),gn(-15,0)],[gn(9.5,0),gn(15,0)]])hn[St].n.push(Et),hn[Et].n.push(St);let bt=zi["0,0"];bt!==void 0&&hn[bt].n.forEach(St=>{hn[St].n=hn[St].n.filter(Et=>Et!==bt)}),bt!==void 0&&(hn[bt].n=[])}let di=[];La.filter(g=>n.walk&&n.walk[g.spr]&&g.spr!=="robot").sort(()=>Math.random()-.5).slice(0,a?7:10).forEach(g=>{let w=ft(n.walk[g.spr],g.h,{bubble:1});w.d=g,w.sp=g.sp*.9;let E;do E=Math.floor(Math.random()*hn.length);while(!hn[E].n.length);w.x=hn[E].x+hr(-1,1),w.z=hn[E].z+hr(-1,1),w.node=E,w.state="idle",w.t=hr(0,3),di.push(w)});function bs(g){let w=hn[g.node];if(!w.n.length)return;let E=w.n[Math.floor(Math.random()*w.n.length)];g.node=E;let F=hn[E];g.tx=F.x+hr(-1.2,1.2),g.tz=F.z+hr(-1.2,1.2),g.state="walk"}let ri=(g,w,E,F)=>{let J=document.createElement(g);return w&&(J.className=w),E!=null&&(J.innerHTML=E),(F||e).appendChild(J),J},Gs=[],Wi=g=>(Gs.push(g),g),Or=Wi(ri("div","i3info")),P=Wi(ri("div","i3hud")),k=Wi(ri("div","h3hint")),it=Wi(ri("div","h3toast")),et=Wi(ri("div","h3card")),j=Wi(ri("div","i3pan")),Tt=Wi(ri("button","i3door"));Tt.type="button",Tt.dataset.i3="door";function Vt(g){it.textContent=g,it.classList.add("on"),clearTimeout(Vt.t),Vt.t=setTimeout(()=>it.classList.remove("on"),2400)}let W={dead:!1,mode:"walk",yaw:Bt,yawT:Bt,pitch:.72,pitchT:.72,dist:17,distT:17,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new N(K.x,1,K.z)},kt=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],he=0;function Se(){if(kt[he][0]!==null)return kt[he][0];let g=new Date;return g.getHours()+g.getMinutes()/60}function Qt(){if(W.mode==="edit"){P.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}P.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button>${i.stats?'<button class="h3b" type="button" data-i3="stats"><i>\u{1F4CB}</i>\u5E97\u6CC1</button>':""}<button class="h3b" type="button" data-i3="time"><i>\u{1F550}</i>${kt[he][1]}</button>`}function Ve(){let g=Se(),w=Math.floor(g),E=Math.floor((g-w)*60);Or.innerHTML=`<b>\u{1F3DD}\uFE0F ${fr(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(n.owner&&n.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(w).padStart(2,"0")}:${String(E).padStart(2,"0")}\u30FB${g<5||g>=19.5?"\u591C\u665A \u{1F319}":g<7?"\u6E05\u6668 \u{1F305}":g<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}Qt(),Ve();let Je="wall";function en(){let g=Object.keys(Gi).map(E=>`<button class="h3tab ${Je===E?"on":""}" type="button" data-i3="tab" data-k="${E}">${v_[E]}</button>`).join(""),w=Gi[Je].map(([E,F])=>{let J=typeof E=="string"&&E[0]==="#";return`<button class="i3opt ${String(r.ex[Je])===String(E)?"on":""}" type="button" data-i3="opt" data-v="${E}">${J?`<i style="background:${E}"></i>`:""}${fr(F)}</button>`}).join("");j.innerHTML=`<div class="h3tabs">${g}</div><div class="i3row">${w}</div>`}function Bn(g){W.mode=g,mn(),W.tgt=null,j.classList.toggle("on",g==="edit"),Qt(),Or.style.display=g==="edit"?"none":"",g==="edit"?(en(),W.distT=14,W.pitchT=.5,W.yawT=ut.f===2?Math.PI:0):(W.distT=17,W.pitchT=.72,ne())}let We=0;function ne(){s&&(clearTimeout(We),We=setTimeout(()=>{try{i.save&&i.save(r)}catch{}},500))}function Nn(g){mn(),W.talk=g,g.state="talk",(!g.deck||!g.deck.length)&&(g.deck=g.d.lines.map(F=>({kind:F[0],text:F[1]})).sort(()=>Math.random()-.5));let w=g.deck.pop(),E=Nr[w.kind]||Nr.chat;et.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${n.walk[g.d.spr]}')"></div><div class="h3nm"><b>${fr(g.d.name)}</b><small>${fr(g.d.role||"")}</small></div><span class="h3k" style="background:${E.c}">${E.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${w.kind==="mind"?" mind":""}">${w.kind==="mind"?"\uFF08"+fr(w.text)+"\uFF09":"\u300C"+fr(w.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,et.classList.toggle("r",Ms(new N(g.x,1,g.z)).x<zn().left+zn().width/2),et.classList.add("on")}function He(g,w,E,F){mn(),et.innerHTML=`<div class="h3h"><div class="h3nm"><b>${fr(g)}</b><small>${fr(w||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${E}</p>${F?`<div class="h3bt">${F}</div>`:""}`,et.classList.remove("r"),et.classList.add("on")}function mn(){et.classList.remove("on");let g=W.talk;W.talk=null,g&&g.state==="talk"&&(g.state="idle",g.t=hr(1,2))}let G=g=>{let w=g.target.closest("[data-i3]");if(!w||!e.contains(w))return;let E=w.dataset.i3;if(E==="close")mn();else if(E==="more"&&W.talk)Nn(W.talk);else if(E==="edit")W.mode==="walk"&&Bn("edit");else if(E==="done")Bn("walk");else if(E==="tab")Je=w.dataset.k,en();else if(E==="opt"){let F=w.dataset.v;r.ex[Je]=/^\d$/.test(F)?+F:F,pt(ut),en(),ne()}else if(E==="home")mn(),Xi(bi.find(F=>F.kind==="home"));else if(E==="enter")mn(),Vn(bi.find(F=>F.kind==="home"));else if(E==="shopin")mn(),Xi(bi.find(F=>F.kind==="shop"));else if(E==="door")Vn(Te);else if(E==="stats")try{i.stats&&i.stats()}catch{}else E==="time"&&(he=(he+1)%kt.length,Qt(),Ve(),Vt(he?`\u9810\u89BD\uFF1A${kt[he][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",G);function fn(g){if(!W.entering){W.entering=!0;try{i.enter&&i.enter(g||"home")}catch{W.entering=!1}}}let bi=Yt.map(g=>({h:g,face:g.face,inw:g.inw,pivot:g.pivot,kind:g.own?"home":"npc",label:g.own?s?"\u{1F6AA} \u958B\u9580":"\u{1F6AA} \u62DC\u8A2A":"\u{1F514} \u6309\u9580\u9234",name:g.own?"":g.label})).concat(_o.map(g=>({s:g,face:g.face,inw:g.inw,kind:g.k==="izakaya"?"shop":"closed",label:g.k==="izakaya"?s?"\u{1F3EE} \u9032\u5E97":"\u{1F3EE} \u9032\u53BB\u901B":"\u{1F6A7} \u6E96\u5099\u4E2D",name:g.n}))),Te=null;function Vn(g){if(!(!g||W.ent)){if(g.kind==="npc"){Vt(`\u53EE\u549A\uFF5E ${g.name}\u597D\u50CF\u6C92\u4EBA\u5728\u5BB6`);return}if(g.kind==="closed"){Vt(`${g.name}\u9084\u5728\u6E96\u5099\u4E2D\uFF0C\u4E4B\u5F8C\u5C31\u80FD\u9032\u53BB\u4E86\uFF01`);return}mn(),W.tgt=null,W.ent={d:g,t:0,x0:K.x,z0:K.z}}}function Xi(g){_n(g.face.x,g.face.z-g.inw*.7,()=>Vn(g))}n.spawn==="door"&&ut&&ut.pivot&&(ut.pivot.rotation.y=1.6,W.closing=ut.pivot);function _n(g,w,E){let F=kn(K.x,K.z,g,w);if(!F){Vt("\u8D70\u4E0D\u904E\u53BB");return}W.tgt={path:F,fn:E}}let zn=()=>t.getBoundingClientRect(),ai=new Ca,Fi=new Ct,qi=new Li(new N(0,1,0),0),Yi=new N,Ws=(g,w)=>{let E=zn();return Fi.set((g-E.left)/E.width*2-1,-((w-E.top)/E.height*2-1)),Fi},Ms=g=>{let w=g.clone().project(f),E=zn();return{x:(w.x+1)/2*E.width+E.left,y:(1-w.y)/2*E.height+E.top}},Xe=new Map,Un=null,Cn=null;t.addEventListener("contextmenu",g=>g.preventDefault()),t.addEventListener("pointerdown",g=>{g.preventDefault();try{t.setPointerCapture(g.pointerId)}catch{}if(Xe.set(g.pointerId,{x:g.clientX,y:g.clientY}),Xe.size===2){let[w,E]=[...Xe.values()];Cn={d:Math.hypot(w.x-E.x,w.y-E.y),dist:W.distT,ang:Math.atan2(E.y-w.y,E.x-w.x),yaw:W.yawT},Un=null;return}Un={id:g.pointerId,x:g.clientX,y:g.clientY,moved:0,yaw0:W.yawT,pit0:W.pitchT}}),t.addEventListener("pointermove",g=>{if(Xe.has(g.pointerId)&&Xe.set(g.pointerId,{x:g.clientX,y:g.clientY}),Cn&&Xe.size>=2){let[F,J]=[...Xe.values()];W.distT=Ei(Cn.dist*Cn.d/Math.max(20,Math.hypot(F.x-J.x,F.y-J.y)),7,40),W.yawT=Cn.yaw-(Math.atan2(J.y-F.y,J.x-F.x)-Cn.ang);return}if(!Un||Un.id!==g.pointerId)return;let w=g.clientX-Un.x,E=g.clientY-Un.y;!Un.moved&&Math.hypot(w,E)>8&&(Un.moved=1),Un.moved&&(W.yawT=Un.yaw0-w*.007,W.pitchT=Ei(Un.pit0+E*.005,.22,1.3))});let Na=g=>{Xe.delete(g.pointerId),Xe.size<2&&(Cn=null),!(!Un||Un.id!==g.pointerId)&&(Un.moved||bo(g.clientX,g.clientY),Un=null)};t.addEventListener("pointerup",Na),t.addEventListener("pointercancel",Na),t.addEventListener("wheel",g=>{g.preventDefault(),W.distT=Ei(W.distT+Math.sign(g.deltaY)*1.6,7,40)},{passive:!1});let za=g=>{if(!document.contains(t)||/input|textarea/i.test(g.target&&g.target.tagName||""))return;let w=g.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(w)&&(W.keys[w]=1,/^[qe]$/.test(w)||(W.tgt=null),g.preventDefault())},Xs=g=>{delete W.keys[g.key.toLowerCase()]};document.addEventListener("keydown",za),document.addEventListener("keyup",Xs);function Oi(g,w){let E=null,F=1e9;for(let J of di){let ot=Ms(new N(J.x,0,J.z)),bt=Ms(new N(J.x,J.h+.2,J.z)),St=ot.y-bt.y;if(St<6)continue;let Et=Math.max(St*.38,26),yt=Math.abs(g-ot.x);if(yt<Et&&w>bt.y-10&&w<ot.y+10){let qe=yt;qe<F&&(F=qe,E=J)}}return E}function bo(g,w){if(W.mode==="edit"||W.ent)return;let E=Oi(g,w);if(E){let J=Math.hypot(E.x-K.x,E.z-K.z);Nn(E),J>3&&_n(E.x+(K.x-E.x)/J*1.4,E.z+(K.z-E.z)/J*1.4);return}ai.setFromCamera(Ws(g,w),f);let F=ai.intersectObjects(l.children,!0).filter(J=>J.object.isMesh&&(J.object.userData.house||J.object.userData.shop));if(F.length){let J=F[0].object.userData;if(J.house||J.shop){let ot=bi.find(bt=>bt.h===J.house&&J.house||bt.s===J.shop&&J.shop);mn(),ot&&_n(ot.face.x,ot.face.z-ot.inw*.8);return}if(J.house){let ot=J.house;ot.own?(He(s?"\u6211\u7684\u5BB6":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),_n(ot.door.x,ot.door.z)):(He(ot.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),_n(ot.door.x,ot.door.z));return}if(J.shop){let ot=J.shop;if(ot.k==="izakaya"){He(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),_n(ot.door.x,ot.door.z);return}He(ot.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),_n(ot.door.x,ot.door.z);return}}if(mn(),ai.ray.intersectPlane(qi,Yi)){let J=kn(K.x,K.z,Yi.x,Yi.z);J&&(W.tgt={path:J})}}let kr=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],Mo=new be,mr=new be,ws=new be;function qs(g){let w=0;for(;w<kr.length-2&&g>=kr[w+1][0];)w++;let E=kr[w],F=kr[w+1],J=Ei((g-E[0])/(F[0]-E[0]),0,1),ot=bt=>Mo.set(E[bt]).clone().lerp(mr.set(F[bt]),J);return{zen:ot(1),hor:ot(2),sunC:ot(3),sunI:xo(E[4],F[4],J),hemiI:xo(E[5],F[5],J),fog:ot(6),night:xo(E[7],F[7],J)}}let Br=-1;function Fa(g){let w=qs(g),E=L.attributes.position;for(let St=0;St<E.count;St++){let Et=E.getY(St)/300;ws.copy(w.hor).lerp(w.zen,Ei((Et+.05)/.55,0,1));let yt=L.attributes.color.array;yt[St*3]=ws.r,yt[St*3+1]=ws.g,yt[St*3+2]=ws.b}L.attributes.color.needsUpdate=!0,h.color.copy(w.fog),o.setClearColor(w.fog),Ot.color.copy(w.sunC),Ot.intensity=w.sunI,Ut.intensity=w.hemiI,Zt.intensity=.2+w.night*.15,Ut.color.set(w.night>.5?"#8a9aff":"#dff2ff");let F=(g-6)/12*Math.PI,J=Math.sin(F);at.position.set(Math.cos(F)*260,Math.max(-40,J*220),-60),at.material.opacity=Ei(J*3,0,1);let ot=((g+6)%24-6)/12*Math.PI;rt.position.set(-Math.cos(F)*240,Math.max(30,Math.abs(Math.sin(ot))*200),-80),rt.material.opacity=w.night,It.userData.m.opacity=w.night*.9;let bt=w.night;q.forEach(St=>{St.material.opacity=bt*(St.userData.k||.75)}),V.forEach(St=>St.color.copy(St.userData.day).lerp(St.userData.night,bt)),gt.color.set("#ffffff").lerp(ws.set("#3a4a8a"),bt*.6),ct.children.forEach(St=>St.children.forEach(Et=>Et.material.color.set("#ffffff").lerp(ws.set("#4a4a7a"),bt*.8))),W.night=bt}let zl={get dead(){return W.dead},set dead(g){g&&Oa()},dispose:Oa,kind:"island",probe(){let g=w=>{let E=Ms(w);return{x:Math.round(E.x),y:Math.round(E.y)}};return{mode:W.mode,me:{x:+K.x.toFixed(2),z:+K.z.toFixed(2)},calls:o.info.render.calls,tris:o.info.render.triangles,yaw:+W.yaw.toFixed(2),pitch:+W.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(W.night||0).toFixed(2),card:et.classList.contains("on")?et.textContent:"",door:Tt.classList.contains("on")?Tt.textContent:"",doorXY:Tt.classList.contains("on")?(()=>{let w=Tt.getBoundingClientRect();return{x:Math.round(w.left+w.width/2),y:Math.round(w.top+w.height/2)}})():null,ent:!!W.ent,myDoor:g(new N(ut.door.x,1.2,ut.door.z-2.8*(ut.f===2?-1:1))),myHouse:g(new N(ut.x,2,ut.z)),npcs:di.map(w=>Object.assign({id:w.d.id,state:w.state},g(new N(w.x,w.h*.5,w.z))))}},px(g,w,E){let F=Ms(new N(g,w,E));return{x:Math.round(F.x),y:Math.round(F.y)}},teleport(g,w){K.x=g,K.z=w,W.cam.set(g,1,w)},setYaw(g){W.yaw=W.yawT=g},setPitch(g){W.pitch=W.pitchT=g},setDist(g){W.dist=W.distT=g},setHour(g){kt[0][0]=g,Br=-1}};function Oa(){if(!W.dead){if(W.dead=!0,cancelAnimationFrame(W.raf),clearTimeout(We),s)try{i.save&&i.save(r,!0)}catch{}document.removeEventListener("keydown",za),document.removeEventListener("keyup",Xs),e.removeEventListener("click",G),Gs.forEach(g=>g.remove()),l.traverse(g=>{g.geometry&&g.geometry.dispose(),(g.material?Array.isArray(g.material)?g.material:[g.material]:[]).forEach(E=>{E.map&&E.map.dispose(),E.dispose()})});try{o.dispose(),o.forceContextLoss()}catch{}}}let Vr=0,as=0,gr=0,os=1,Mi=0,je=0,$i=new N,ki=new N,ls=new N;function wo(){let g=t.getBoundingClientRect(),w=Math.max(1,t.clientWidth),E=Math.max(1,t.clientHeight),F=Math.min(2,window.devicePixelRatio||1),J=Math.round(Ei(1.75-((g.height||E)-380)/440*.6,1.15,1.75)*20)/20;J!==jt&&(jt=J,Le.forEach(ot=>{ot.h=ot.h0*jt,ot.w=ot.h*ot.ar})),!(w===Vr&&E===as&&F===gr)&&(Vr=w,as=E,gr=F,os=Ei(g.width*F/w,.5,2),os=Math.min(os,Math.sqrt(16e5/(w*E))),o.setPixelRatio(os),o.setSize(w,E,!1),f.aspect=w/E,f.updateProjectionMatrix())}function So(g){if(W.dead)return;if(!document.contains(t)){Oa();return}W.raf=requestAnimationFrame(So);let w=Math.min(.1,(g-W.last)/1e3);W.last=g,W.t+=w;let E=W.t;wo(),Mi+=w,je++,Mi>1.5&&(Mi/je>.03&&os>.6&&(os=Math.max(.6,os*.85),o.setPixelRatio(os),o.setSize(Vr,as,!1)),Mi=0,je=0);let F=Se();Math.abs(F-Br)>.02&&(Fa(F),Br=F,Ve());let J=W.keys;J.q&&(W.yawT+=w*1.8),J.e&&(W.yawT-=w*1.8),W.yaw+=(W.yawT-W.yaw)*Math.min(1,w*9),W.pitch+=(W.pitchT-W.pitch)*Math.min(1,w*9),W.dist+=(W.distT-W.dist)*Math.min(1,w*6);let ot=Math.sin(W.yaw),bt=Math.cos(W.yaw);if($i.set(-ot,0,-bt),ki.set(bt,0,-ot),K.moving=!1,W.mode==="walk"&&!W.ent){let _t=0,Ie=0,dt=1e9,fe=(J.arrowright||J.d?1:0)-(J.arrowleft||J.a?1:0),ve=(J.arrowup||J.w?1:0)-(J.arrowdown||J.s?1:0);if(fe||ve)_t=ki.x*fe+$i.x*ve,Ie=ki.z*fe+$i.z*ve;else if(W.tgt){let En=W.tgt.path[0];if(En){let bn=En[0]-K.x,Ge=En[1]-K.z,Mn=Math.hypot(bn,Ge);Mn<.1?W.tgt.path.shift():(_t=bn,Ie=Ge,dt=Mn)}else{let bn=W.tgt.fn;W.tgt=null,bn&&bn()}}let Oe=Math.hypot(_t,Ie);if(Oe>.01){let En=Math.min(5*w,dt),bn=_t/Oe*En,Ge=Ie/Oe*En,Mn=!1;if(Me(K.x+bn,K.z+Ge,.3)?Me(K.x+bn,K.z,.3)?Me(K.x,K.z+Ge,.3)||(K.z+=Ge,Mn=!0):(K.x+=bn,Mn=!0):(K.x+=bn,K.z+=Ge,Mn=!0),Mn){W.mvz=Ge/Math.max(1e-6,Math.hypot(bn,Ge)),K.moving=!0,K.ph+=w*10;let Fn=_t/Oe*ki.x+Ie/Oe*ki.z;Math.abs(Fn)>.2&&(K.face=Fn>0?1:-1)}else if(W.tgt&&(W.tgt.stuck=(W.tgt.stuck||0)+w,W.tgt.stuck>.5)){let Fn=W.tgt.fn;W.tgt=null,Fn&&Fn()}W.talk&&Math.hypot(W.talk.x-K.x,W.talk.z-K.z)>9&&mn()}}if(Te=null,W.mode==="walk"&&!W.ent){let _t=2.6;for(let Ie of bi){let dt=Math.hypot(K.x-Ie.face.x,K.z-Ie.face.z);dt<_t&&(_t=dt,Te=Ie)}Te&&(Te.kind==="home"||Te.kind==="shop")&&_t<.8&&K.moving&&(W.mvz||0)*Te.inw>.5&&Vn(Te)}if(Te&&!W.ent){let _t=Te,Ie=Ms(new N(_t.face.x,_t.s?3.1:2.95,_t.face.z+_t.inw*.5)),dt=zn();Tt.textContent=_t.label,Tt.classList.toggle("off",_t.kind==="npc"||_t.kind==="closed"),Tt.style.left=Ie.x-dt.left+"px",Tt.style.top=Ie.y-dt.top+"px",Tt.classList.add("on")}else Tt.classList.remove("on");if(W.ent){let _t=W.ent,Ie=_t.d;_t.t+=w,Ie.pivot&&(Ie.pivot.rotation.y=Math.min(1,_t.t/.45)*1.6);let dt=Ei((_t.t-.2)/.75,0,1),fe=Ie.face.x,ve=Ie.face.z+Ie.inw*1.1;K.x=xo(_t.x0,fe,dt),K.z=xo(_t.z0,ve,dt),K.moving=dt>0&&dt<1,K.moving&&(K.ph+=w*10),K.mat.opacity=1-Ei((_t.t-.55)/.45,0,1),K.tag&&(K.tag.material.opacity=K.mat.opacity),_t.t>1.05&&!_t.done&&(_t.done=1,fn(Ie.kind))}W.closing&&(W.closing.rotation.y=Math.max(0,W.closing.rotation.y-w*2.4),W.closing.rotation.y<=0&&(W.closing=null)),K.y=0;for(let _t of Yt)if(+(_t.own?r.ex:_t.ex).porch&&Math.abs(K.x-_t.x)<xt/2+.3){let Ie=(K.z-_t.z)*(_t.f===2?-1:1);Ie>1.42&&Ie<3.15&&(K.y=.3)}for(let _t of di){if(_t.moving=!1,_t.state==="talk"){_t.face=(K.x-_t.x)*ki.x+(K.z-_t.z)*ki.z>0?1:-1;continue}if(_t.state==="idle"){_t.t-=w,_t.t<=0&&bs(_t);continue}let Ie=_t.tx-_t.x,dt=_t.tz-_t.z,fe=Math.hypot(Ie,dt);if(fe<.1){_t.state="idle",_t.t=Math.random()<.3?hr(3,8):hr(.2,1);continue}let ve=Math.min(fe,_t.sp*w);_t.x+=Ie/fe*ve,_t.z+=dt/fe*ve,_t.moving=!0,_t.ph+=w*(4+_t.sp*3);let Oe=Ie*ki.x+dt*ki.z;Math.abs(Oe)>.05&&(_t.face=Oe>0?1:-1)}let St=K.x,Et=K.z;W.mode==="edit"&&(St=ut.x,Et=ut.z+(ut.f===2?-1:1)*3.2),W.cam.x+=(St-W.cam.x)*Math.min(1,w*8),W.cam.z+=(Et-W.cam.z)*Math.min(1,w*8),W.cam.y+=((W.mode==="edit"?1.8:1.1)-W.cam.y)*Math.min(1,w*4);let yt=Vr/as,qe=W.dist*(yt<1.4?1.4/yt:1);ls.set(W.cam.x+ot*Math.cos(W.pitch)*qe,W.cam.y+Math.sin(W.pitch)*qe,W.cam.z+bt*Math.cos(W.pitch)*qe),ls.y<.8&&(ls.y=.8),f.position.copy(ls),f.lookAt(W.cam.x,W.cam.y+.4,W.cam.z),H.position.copy(ls),Ot.position.set(W.cam.x+30,60,W.cam.z+22),Ot.target.position.set(W.cam.x,0,W.cam.z),W.night>.6&&Ot.position.set(W.cam.x-25,50,W.cam.z+30);let vn=Math.atan2(ls.x-W.cam.x,ls.z-W.cam.z);for(let _t of Le){let Ie=_t.w,dt=_t.h,fe=_t.moving,ve=Math.sin(_t.ph),Oe=fe?Math.abs(ve)*.06:0,En=fe?ve*.06:Math.sin(E*1.6+_t.ph)*.01,bn=fe?1+Math.cos(_t.ph*2)*.025:1+Math.sin(E*1.6+_t.ph)*.008;_t.grp.position.set(_t.x,(_t.y||0)+Oe,_t.z),_t.m.rotation.set(0,vn,En*_t.face),_t.m.scale.set(Ie*_t.face*(2-bn),dt*bn,1),_t.sh.position.set(_t.x,(_t.y||0)+.07,_t.z),_t.sh.scale.set(Ie*.7,Ie*.4,1),_t.tag&&_t.tag.position.set(_t.x,(_t.y||0)+dt+.35,_t.z),_t.bub&&(_t.bub.visible=_t!==W.talk,_t.bub.position.set(_t.x,dt+.5+Math.sin(E*2.3+_t.ph)*.06,_t.z))}Re.offset.set(E*.004,E*.006),wt.forEach((_t,Ie)=>{Ie===0?_t.rotation.z=E*.3:_t.scale.y=1+Math.sin(E*6)*.08}),ct.children.forEach(_t=>{_t.userData.a+=w*.004,_t.position.x=Math.cos(_t.userData.a)*_t.userData.R,_t.position.z=Math.sin(_t.userData.a)*_t.userData.R,_t.lookAt(0,_t.position.y,0)});let Hn=ct.userData.boat;Hn&&(Hn.position.y=-.2+Math.sin(E*1.2)*.08,Hn.rotation.z=Math.sin(E*.9)*.04),o.render(l,f)}return W.raf=requestAnimationFrame(So),zl}var fi=(n,t)=>n+Math.random()*(t-n),ss=(n,t,e)=>Math.max(t,Math.min(e,n));var rs=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},cn=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),_f=new Uint8Array(256).map((n,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),dr=n=>"\xA5"+Math.round(n).toLocaleString("en-US"),xe=10,vt=8,$n=3.1,_i=4,vi=6,Ui=(_i+vi)/2,ys=-10,_s=xe+10,Cd=vt+9,Id=-4,Pd=xe+4,S_=vt+1,bf=vt+4,ui={x:7.3,z:vt+1.4},Nl=new Set;for(let n=vt;n<bf+1;n++)for(let t=_i;t<vi;t++)Nl.add(t+","+n);Nl.add("7,"+(vt+1));var Sf=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function vo(n){let t=0,e={};for(let[i]of n.it||[]){let s=Ae[i];s&&(e[i]=(e[i]||0)+1,t+=e[i]<=2?s.c:s.c*.4)}return n.fl&&n.fl!=="wood"&&(t+=6),n.wa&&n.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function Mf(n){let t=0;return Sf.forEach((e,i)=>{n>=e[0]&&(t=i)}),t}var wf=n=>Math.min(8e4,3e3+n*400);function Ld(n){return{v:1,name:n||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function T_(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function E_(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var vf={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},A_=["daruma","maneki","beer","vase","pine","sake"],Dd=`
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
`,R_=Dd;function C_(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.kind==="home",a=!!n.island,o=n.data||Ld();if(o.it=(o.it||[]).filter(c=>Ae[c[0]]),o.inv=o.inv||{},o.fo=o.fo||{wood:1},o.wo=o.wo||{tsuchi:1},o.gc=o.gc||{},!document.getElementById("h3css")){let c=document.createElement("style");c.id="h3css",c.textContent=Dd,document.head.appendChild(c)}let l=new va({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});l.setClearColor(1709366,1);let h=new Cr;h.fog=new ba(3811400,26,80);let f=new Wn(40,2,.2,500),u=new Ea,p=(c,x)=>u.load(c,b=>{b.colorSpace=Gn,b.anisotropy=4,x&&x(b)}),d=new ni(250,24,16);{let c=[],x=d.attributes.position,b=new be("#121032"),_=new be("#7a4058"),I=new be("#3a2350"),D=new be;for(let X=0;X<x.count;X++){let Z=x.getY(X)/250;Z>.25?D.copy(I).lerp(b,ss((Z-.25)/.55,0,1)):D.copy(_).lerp(I,ss((Z+.05)/.3,0,1)),c.push(D.r,D.g,D.b)}d.setAttribute("color",new Ce(c,3))}let v=new ht(d,new Fe({vertexColors:!0,side:Jn,fog:!1,depthWrite:!1}));v.renderOrder=-10,h.add(v);{let c=[],x=rs(11);for(let _=0;_<300;_++){let I=x()*Math.PI*2,D=.2+x()*1.2,X=230;c.push(Math.cos(I)*Math.cos(D)*X,Math.sin(D)*X,Math.sin(I)*Math.cos(D)*X)}let b=new yn;b.setAttribute("position",new Ce(c,3)),v.add(new ao(b,new Ma({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let c=ge(128,128,b=>{let _=b.createRadialGradient(64,64,20,64,64,64);_.addColorStop(0,"rgba(255,246,214,1)"),_.addColorStop(.5,"rgba(255,240,200,1)"),_.addColorStop(.52,"rgba(255,230,180,.25)"),_.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=_,b.fillRect(0,0,128,128)}),x=new ei(new Kn({map:c,fog:!1,depthWrite:!1}));x.scale.set(40,40,1),x.position.set(-90,120,-170),v.add(x)}let T=new Dr(12103408,5914696,1.15);h.add(T);let y=(()=>{let c=new Date;return n.hour!=null?n.hour:c.getHours()+c.getMinutes()/60})(),m=y<5||y>=19.5?1:y<6.5?(6.5-y)/1.5:y>17.5?(y-17.5)/2:0,S=new Ur(16769208,.7);S.position.set(-6,12,10),h.add(S);let C=new Ra(16756832,14,13,1.3);C.position.set(xe*.3,2.7,vt*.45),h.add(C);let M=new Ra(16756832,14,13,1.3);M.position.set(xe*.72,2.7,vt*.55),h.add(M);let q=new Ra(16752720,10,9,1.4);q.position.set(Ui,2.4,vt+1.4),h.add(q);let z=ge(64,64,c=>{let x=c.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(0,0,0,.7)"),x.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=x,c.fillRect(0,0,64,64)}),V=(c,x,b)=>{let _=c.clone();return _.wrapS=_.wrapT=Fs,_.repeat.set(x,b),_.needsUpdate=!0,_};function B(c,x,b,_,I,D,X,Z){let Q=new ht(new ln(c,x,b),_);return Q.position.set(I,D,X),(Z||h).add(Q),Q}function L(c,x,b,_,I,D,X){let Z=new ei(new Kn({map:Fr,blending:ds,transparent:!0,depthWrite:!1,opacity:I}));return X&&Z.material.color.set(X),Z.scale.set(_,_,1),Z.position.set(c,x,b),(D||h).add(Z),Z}let R={wood:()=>ge(256,256,(c,x,b)=>{let _=rs(4);for(let I=0;I<8;I++){let D=_();c.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,c.fillRect(0,I*32,x,32),c.fillStyle="rgba(60,30,10,.35)",c.fillRect(0,I*32,x,2),c.fillRect(_()*256|0,I*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(90,50,20,.12)",c.fillRect(_()*x,I*32+6+_()*20,40+_()*60,2)}}),dark:()=>ge(256,256,(c,x,b)=>{let _=rs(8);for(let I=0;I<8;I++){let D=_();c.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,c.fillRect(0,I*32,x,32),c.fillStyle="rgba(0,0,0,.4)",c.fillRect(0,I*32,x,2),c.fillRect(_()*256|0,I*32,2,32);for(let X=0;X<5;X++)c.fillStyle="rgba(255,220,180,.05)",c.fillRect(_()*x,I*32+6+_()*20,40+_()*60,2)}}),tatami:()=>ge(256,256,(c,x,b)=>{for(let _=0;_<2;_++){let I=_*128;c.fillStyle="#c4c078",c.fillRect(I,0,128,b);for(let D=0;D<b;D+=3)c.fillStyle=D%6?"#b8b46c":"#cfcb84",c.fillRect(I,D,128,1);c.fillStyle="#2a3a2a",c.fillRect(I,0,6,b),c.fillRect(I+122,0,6,b)}}),stone:()=>ge(256,256,(c,x,b)=>{c.fillStyle="#5a5250",c.fillRect(0,0,x,b);let _=rs(6);for(let I=0;I<4;I++)for(let D=0;D<4;D++){let X=_()*18|0;c.fillStyle=`rgb(${120+X},${112+X},${104+X})`,c.fillRect(D*64+3+I%2*8,I*64+3,58,58)}}),light:()=>ge(256,256,(c,x,b)=>{let _=rs(12);for(let I=0;I<8;I++){let D=_();c.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,c.fillRect(0,I*32,x,32),c.fillStyle="rgba(120,80,40,.25)",c.fillRect(0,I*32,x,2),c.fillRect(_()*256|0,I*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(160,110,60,.1)",c.fillRect(_()*x,I*32+6+_()*20,40+_()*60,2)}}),carpetf:()=>ge(256,256,(c,x,b)=>{c.fillStyle="#e8dcc4",c.fillRect(0,0,x,b);let _=rs(14);for(let I=0;I<3e3;I++)c.fillStyle=_()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",c.fillRect(_()*x,_()*b,2,2)}),check:()=>ge(256,256,(c,x,b)=>{for(let _=0;_<4;_++)for(let I=0;I<4;I++)c.fillStyle=(I+_)%2?"#2a3a36":"#d8c8a0",c.fillRect(I*64,_*64,64,64);c.strokeStyle="rgba(0,0,0,.2)",c.lineWidth=2;for(let _=0;_<=4;_++)c.beginPath(),c.moveTo(_*64,0),c.lineTo(_*64,b),c.moveTo(0,_*64),c.lineTo(x,_*64),c.stroke()})};function H(c,x){let _=Math.round(x*64),I=Math.round($n*64);return ge(_,I,D=>{let X=rs(x*7|0);if(c==="plank")for(let Q=0;Q<_;Q+=22){let Rt=X();D.fillStyle=`hsl(28,${36+Rt*8}%,${40+Rt*8}%)`,D.fillRect(Q,0,22,I),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(Q,0,2,I)}else if(c==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,_,I);for(let Q=0;Q<300;Q++)D.fillStyle=X()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect(X()*_,X()*I,8,8);D.fillStyle="#5a2a14";for(let Q=0;Q<_;Q+=128)D.fillRect(Q,0,8,I)}else if(c==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,_,I),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let Q=0;Q<I;Q+=24)for(let Rt=Q/24%2*12;Rt<_;Rt+=24)D.beginPath(),D.arc(Rt,Q,9,Math.PI,0),D.stroke()}else if(c==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/900;Q++){let Rt=X()*_,Ne=X()*I;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][Q%3];for(let me=0;me<5;me++){let oe=me/5*Math.PI*2;D.beginPath(),D.ellipse(Rt+Math.cos(oe)*4,Ne+Math.sin(oe)*4,3.5,2,oe,0,7),D.fill()}}}else if(c==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/80;Q++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect(X()*_,X()*I,2,2)}else if(c==="stripe")for(let Q=0;Q<_;Q+=24)D.fillStyle=Q/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(Q,0,24,I);else if(c==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,_,I);for(let Q=12;Q<I;Q+=30)for(let Rt=Q/30%2*16;Rt<_;Rt+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(Rt+Q)%3];for(let Ne=0;Ne<5;Ne++){let me=Ne/5*Math.PI*2;D.beginPath(),D.arc(Rt+Math.cos(me)*4,Q+Math.sin(me)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(Rt,Q,2,0,7),D.fill()}}else if(c==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/70;Q++)D.fillStyle=X()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect(X()*_,X()*I,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,_,I);for(let Q=0;Q<_*I/60;Q++)D.fillStyle=X()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect(X()*_,X()*I,3,3);D.fillStyle="#6b3f1f";for(let Q=0;Q<_;Q+=64*2.5)D.fillRect(Q,0,10,I)}let Z=I-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,Z,_,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let Q=0;Q<_;Q+=28)D.fillRect(Q,Z,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,Z-6,_,8),D.fillRect(0,0,_,10)})}let st=h.children.length,nt=ge(256,256,(c,x,b)=>{c.fillStyle="#4a4246",c.fillRect(0,0,x,b);let _=rs(3);for(let I=0;I<4;I++)for(let D=0;D<4;D++){let X=(_()*16|0)-8;c.fillStyle=`rgb(${96+X},${86+X},${84+X})`,c.fillRect(D*64+2,I*64+2,60,60)}}),at=ge(256,256,(c,x,b)=>{c.fillStyle="#2c2830",c.fillRect(0,0,x,b);let _=rs(5);for(let I=0;I<700;I++){let D=34+(_()*22|0);c.fillStyle=`rgb(${D},${D-3},${D+4})`,c.fillRect(_()*x,_()*b,2,2)}});{let c=new ht(new ke(600,600),Wt("#1c1826"));c.rotation.x=-Math.PI/2,c.position.y=-.04,h.add(c)}{let c=_s-ys+30,x=(ys+_s)/2,b=new ht(new ke(c,6.2),Wt("#ffffff",{map:V(nt,c/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(x,.005,vt+3.1),h.add(b);let _=new ht(new ke(c,6),Wt("#ffffff",{map:V(at,c/6,1)}));_.rotation.x=-Math.PI/2,_.position.set(x,0,vt+9.2),h.add(_);for(let D=ys-14;D<_s+14;D+=3.4)B(1.7,.02,.14,sn("#cfc8b4"),D,.02,vt+9.2);B(c,.16,.2,Wt("#7a6e66"),x,.08,vt+6.15);let I=new ht(new ke(c,5),Wt("#ffffff",{map:V(nt,c/3,5/3)}));I.rotation.x=-Math.PI/2,I.position.set(x,.005,vt+14.7),h.add(I)}let Mt=h.children.length,rt=new nn({color:"#ffffff"}),It=new ht(new ke(xe,vt),rt);It.rotation.x=-Math.PI/2,It.position.set(xe/2,.02,vt/2),h.add(It);function ct(c){rt.map&&rt.map.dispose();let x=(R[c]||R.wood)();x.wrapS=x.wrapT=Fs,x.repeat.set(xe/2,vt/2),rt.map=x,rt.needsUpdate=!0}B(xe+.4,.12,vt+.4,Wt("#2a1810"),xe/2,-.075,vt/2);let Ut={back:new nn,left:new nn,right:new nn,front:new nn},Zt=ge(256,200,(c,x,b)=>{c.fillStyle="#5a3a24",c.fillRect(0,0,x,b);for(let _=0;_<x;_+=16)c.fillStyle=_%32?"#4a2e1c":"#6a4630",c.fillRect(_,0,14,b);c.fillStyle="#2a1810",c.fillRect(0,b-40,x,40)}),Ot=new nn({map:V(Zt,3,1)}),ie=Wt("#3a2214"),Re={};function gt(c,x,b,_,I,D){let X=new ye;X.position.set(_,0,I),h.add(X);let Z=new ht(new ln(x,$n,b),D);return Z.position.y=$n/2,X.add(Z),Re[c]=Re[c]||[],Re[c].push(X),X}gt("back",xe+.4,.2,xe/2,-.1,[ie,ie,ie,ie,Ut.back,Ot]),gt("left",.2,vt,-.1,vt/2,[Ut.left,Ot,ie,ie,ie,ie]),gt("right",.2,vt,xe+.1,vt/2,[Ot,Ut.right,ie,ie,ie,ie]);let Lt=ge(640,200,(c,x,b)=>{c.fillStyle="#6a4228",c.fillRect(0,0,x,b);for(let I=0;I<x;I+=14)c.fillStyle=I%28?"#5a3620":"#74482c",c.fillRect(I,0,12,b);let _=I=>{c.fillStyle="#ffd98a",c.fillRect(I,56,128,70),c.strokeStyle="#2a1408",c.lineWidth=6,c.strokeRect(I,56,128,70),c.lineWidth=3;for(let D=1;D<4;D++)c.beginPath(),c.moveTo(I+D*32,56),c.lineTo(I+D*32,126),c.stroke();c.beginPath(),c.moveTo(I,91),c.lineTo(I+128,91),c.stroke()};_(64),_(448),c.fillStyle="#2a1810",c.fillRect(0,b-40,x,40)}),se=new Fe({map:Lt}),Ft=(c,x)=>{let b=new Fe({map:Lt.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(x-c,1),b.map.offset.set(c,0),b};gt("front",_i+.2,.2,(_i-.2)/2,vt+.1,[ie,ie,ie,ie,Ft(0,(_i+.2)/(xe+.4)),Ut.front]),gt("front",xe-vi+.2,.2,(vi+xe+.2)/2,vt+.1,[ie,ie,ie,ie,Ft((vi+.2)/(xe+.4),1),Ut.front]);{let c=new ye;c.position.set(Ui,0,vt+.1),h.add(c),B(vi-_i,$n-2.35,.2,Wt("#4a2a14"),0,2.35+($n-2.35)/2,0,c),Re.front.push(c)}function ue(c){let x={back:xe+.4,left:vt,right:vt,front:xe+.4};for(let b in Ut){let _=Ut[b];_.map&&_.map.dispose(),_.map=H(c,x[b]),_.needsUpdate=!0}}let ce=new ye;h.add(ce),Re.front.push(ce);let ae=Wt("#3a2214");B(.22,2.45,.34,ae,_i+.05,1.22,vt+.14,ce),B(.22,2.45,.34,ae,vi-.05,1.22,vt+.14,ce),B(vi-_i+.4,.24,.38,ae,Ui,2.42,vt+.14,ce);let Ue=new ye;Ue.position.set(Ui,2.32,vt+.3),ce.add(Ue);let wt=ge(256,140,(c,x,b)=>{for(let _=0;_<3;_++){let I=4+_*84;c.fillStyle="#23315c",c.fillRect(I,0,80,b-6),c.fillStyle="rgba(0,0,0,.22)",c.fillRect(I,b-16,80,10)}c.fillStyle="#f3e6c8",c.textAlign="center",c.textBaseline="middle",c.font=`900 50px ${Dn}`,["\u55B6","\u696D","\u4E2D"].forEach((_,I)=>c.fillText(_,44+I*84,56))}),Dt=new ht(new ke(1.95,1.05),new Fe({map:wt,transparent:!0,side:Ln,alphaTest:.05}));Dt.position.y=-.52,Ue.add(Dt);let O=document.createElement("canvas");O.width=640,O.height=140;let re=new wa(O);re.colorSpace=Gn,re.anisotropy=4;function xt(){let c=O.getContext("2d"),x=640,b=140;c.clearRect(0,0,x,b),c.fillStyle="#f3e2bd",c.strokeStyle="#2a1810",c.lineWidth=10,lr(c,6,6,x-12,b-12,16),c.fill(),c.stroke(),c.fillStyle="#3a1e0c",c.textAlign="center",c.textBaseline="middle";let _=72,I=o.name||"";for(c.font=`900 ${_}px ${Dn}`;c.measureText(I).width>x-60&&_>24;)_-=2,c.font=`900 ${_}px ${Dn}`;c.fillText(I,x/2,b/2+4),re.needsUpdate=!0}xt();{let c=new ht(new ln(3.6,.76,.12),[ae,ae,ae,ae,new Fe({map:re}),ae]);c.position.set(Ui,2.86,vt+.34),ce.add(c)}let Nt=[];for(let c of[_i-.45,vi+.45]){let x=new ye;x.position.set(c,1.95,vt+.45),ce.add(x);let b=new ht(new ni(.28,16,12),sn("#e2452f"));b.scale.y=1.3,x.add(b),B(.26,.06,.26,sn("#2a1810"),0,.38,0,x),B(.26,.06,.26,sn("#2a1810"),0,-.38,0,x),Nt.push(L(0,0,.12,2.3,.55,x))}let Pt=new ye;h.add(Pt);{let c=ge(128,128,(D,X,Z)=>{D.fillStyle="#2c3044",D.fillRect(0,0,X,Z);for(let Q=0;Q<Z;Q+=16){D.fillStyle="#3a4058",D.fillRect(0,Q,X,3);for(let Rt=Q/16%2*16;Rt<X;Rt+=32)D.fillStyle="#20242f",D.fillRect(Rt,Q,2,16)}}),x=new nn({map:V(c,6,3)}),b=Math.hypot(vt/2+.9,1.6);for(let D of[-1,1]){let X=new ht(new ln(xe+1.6,.14,b),x);X.position.set(xe/2,$n+1.5,vt/2+D*(vt/4+.45)),X.rotation.x=D*Math.atan2(1.6,vt/2+.9),Pt.add(X)}let _=new ht(new ln(xe+1.7,.2,.3),Wt("#1c1f2a"));_.position.set(xe/2,$n+2.32,vt/2),Pt.add(_);for(let D of[-.2,xe+.2]){let X=new yn;X.setAttribute("position",new Ce([D,$n,-.2,D,$n,vt+.2,D,$n+2.32,vt/2,D,$n,-.2,D,$n+.7,-.9,D,$n+2.32,vt/2,D,$n,vt+.2,D,$n+.7,vt+.9,D,$n+2.32,vt/2],3)),X.computeVertexNormals(),Pt.add(new ht(X,new nn({color:"#4a2e1c",side:Ln})))}for(let D of[-.1,vt+.1]){let X=new ht(new ln(xe+.4,1,.2),Ot);X.position.set(xe/2,$n+.5,D),Pt.add(X)}let I=new ht(new ln(xe+1.4,.18,1.3),Wt("#2c3044"));I.position.set(xe/2,$n+.72,vt+.75),I.rotation.x=.25,Pt.add(I)}let _e=h.children.length,Yt=[21,33].map(c=>ge(128,256,(x,b,_)=>{let I=rs(c);x.fillStyle="#1b1636",x.fillRect(0,0,b,_);for(let D=0;D<16;D++)for(let X=0;X<8;X++)x.fillStyle=I()<.33?I()<.5?"#ffd98a":"#ffbe68":"#272043",x.fillRect(X*16+3,D*16+3,10,10)})),U=[];function A(c,x,b,_,I,D){let X=x-c,Z=(c+x)/2,Q=new ye;Q.position.set(Z,0,0),h.add(Q),U.push(Q),B(X-.2,b,vt+1,Wt(_),0,b/2,vt/2-.4,Q);let Rt=ge(Math.round(X*40),Math.round(b*40),(oe,Ke,An)=>{oe.fillStyle=_,oe.fillRect(0,0,Ke,An);for(let pi=0;pi<Ke;pi+=12)oe.fillStyle="rgba(0,0,0,.12)",oe.fillRect(pi,0,2,An);oe.fillStyle="#ffcf7a",oe.fillRect(Ke*.18,An-2.2*40,Ke*.64,1.6*40),oe.strokeStyle="#2a1408",oe.lineWidth=4,oe.strokeRect(Ke*.18,An-2.2*40,Ke*.64,1.6*40);for(let pi=1;pi<4;pi++)oe.beginPath(),oe.moveTo(Ke*.18+Ke*.16*pi,An-2.2*40),oe.lineTo(Ke*.18+Ke*.16*pi,An-.6*40),oe.stroke();b>4&&(oe.fillStyle="#ffd98a",oe.fillRect(Ke*.25,20,Ke*.2,40),oe.fillRect(Ke*.55,20,Ke*.2,40))}),Ne=new ht(new ke(X-.2,b),new Fe({map:Rt}));Ne.position.set(0,b/2,vt+.11),Q.add(Ne);let me=new ht(new ln(X+.2,.2,1.4),Wt("#2c3044"));if(me.position.set(0,Math.min(b,3.1),vt+.7),me.rotation.x=.25,Q.add(me),I){let oe=ge(256,120,(An,pi,Hl)=>{for(let $=0;$<3;$++)An.fillStyle=D,An.fillRect(4+$*84,0,80,Hl-6);An.fillStyle="#f8ecd8",An.textAlign="center",An.textBaseline="middle",An.font=`900 46px ${Dn}`,[...I].forEach(($,le)=>An.fillText($,44+le*84,52))}),Ke=new ht(new ke(1.8,.85),new Fe({map:oe,transparent:!0,side:Ln}));Ke.position.set(0,2.1,vt+.5),Q.add(Ke)}L(0,1.2,vt+.6,3.5,.35,Q)}A(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),A(-13,-6.6,3.4,"#3a4a4a","",""),A(xe+.3,xe+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),A(xe+6.4,xe+13,5.4,"#3a3a5a","","");{let c=rs(17);for(let x=-40;x<60;x+=7+c()*5){let b=8+c()*18,_=6+c()*5,I=new ht(new ln(_,b,6),[sn("#1c1736"),sn("#1c1736"),sn("#18132e"),sn("#18132e"),sn("#ffffff",{map:V(Yt[c()*2|0],_/5,b/6)}),sn("#1c1736")]);I.position.set(x,b/2,-12-c()*6),h.add(I)}for(let x=-40;x<60;x+=7+c()*6){let b=5+c()*10,_=5+c()*5,I=new ht(new ln(_,b,6),[sn("#1c1736"),sn("#1c1736"),sn("#18132e"),sn("#18132e"),sn("#ffffff",{map:V(Yt[c()*2|0],_/5,b/6)}),sn("#1c1736")]);I.position.set(x,b/2,vt+22+c()*4),I.rotation.y=Math.PI,h.add(I)}}let tt=[];function pt(c,x){let b=new ye;b.position.set(c,0,x),h.add(b),B(.3,.14,.3,Wt("#3a3030"),0,.07,0,b),B(.11,4,.11,Wt("#2b2422"),0,2,0,b),B(.7,.09,.09,Wt("#2b2422"),0,4,0,b);let _=B(.44,.44,.44,sn("#ffe2a6"),0,3.78,0,b);tt.push(L(0,3.78,0,4.5,.55,b));let I=new ht(new ke(6,6),new Fe({map:Fr,blending:ds,transparent:!0,depthWrite:!1,opacity:.28}));I.rotation.x=-Math.PI/2,I.position.y=.03,b.add(I)}pt(-3.2,vt+5.7),pt(xe+3.2,vt+5.7),pt(-12,vt+5.7),pt(xe+12,vt+5.7);let ut=[];function mt(c,x,b){let _=new ye;_.position.set(c,0,x),_.scale.setScalar(b),h.add(_);let I=new ht(new yi(.16,.26,2.6,7),Wt("#4a3024"));I.position.y=1.3,_.add(I);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([X,Z,Q,Rt],Ne)=>{let me=new ht(new gs(Rt,1),new nn({color:D[Ne%3],flatShading:!0}));me.position.set(X,Z,Q),_.add(me)}),ut.push({x:c,z:x,y:3.2*b,r:2*b})}mt(-6,vt+16.5,1.1),mt(3,vt+17,1),mt(13,vt+16.6,1.15),mt(-14,vt+3.5,.95),mt(xe+15,vt+3.4,1);{let c=ge(64,128,(_,I,D)=>{_.fillStyle="#c23a2a",_.fillRect(0,0,I,D),_.fillStyle="#fff3d6",_.fillRect(6,8,52,50);let X=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let Z=0;Z<8;Z++)_.fillStyle=X[Z%4],_.fillRect(10+Z%4*12,14+Math.floor(Z/4)*20,9,14);_.fillStyle="#111",_.fillRect(10,90,44,12)}),x=new ye;x.position.set(-1.4,0,vt+.6),h.add(x);let b=new ht(new ln(.95,1.9,.75),[Wt("#c23a2a"),Wt("#c23a2a"),Wt("#c23a2a"),Wt("#c23a2a"),sn("#ffffff",{map:c}),Wt("#c23a2a")]);b.position.y=.95,x.add(b),L(0,1.2,.7,2.2,.35,x)}{let c=new ye;c.position.set(xe+1.8,0,vt+5.2),h.add(c),B(1.6,.1,.5,Wt("#8a5a30"),0,.5,0,c),B(1.6,.5,.08,Wt("#8a5a30"),0,.8,.22,c),B(.1,.5,.4,Wt("#2b2422"),-.7,.25,0,c),B(.1,.5,.4,Wt("#2b2422"),.7,.25,0,c)}let Ht=new ye;Ht.position.set(xe+1.5,.55,vt+5.2),h.add(Ht);{let c="#e8a050",x=new ht(new ni(.22,14,10),Wt(c));x.scale.set(1.4,.7,1),Ht.add(x);let b=new ht(new ni(.13,12,10),Wt(c));b.position.set(.3,.05,0),Ht.add(b);for(let I of[-.06,.06]){let D=new ht(new jn(.05,.09,4),Wt(c));D.position.set(.32,.17,I),Ht.add(D)}let _=new ht(new yi(.035,.03,.4,6),Wt(c));_.rotation.z=1.2,_.position.set(-.34,.02,.08),Ht.add(_)}let zt=new ye;zt.position.set(ui.x,0,ui.z),h.add(zt);{B(.1,1.5,.1,Wt("#4a2a14"),-.55,.75,0,zt),B(.1,1.5,.1,Wt("#4a2a14"),.55,.75,0,zt);let c=ge(256,160,(_,I,D)=>{_.fillStyle="#b8864a",_.fillRect(0,0,I,D),_.strokeStyle="#4a2a14",_.lineWidth=10,_.strokeRect(0,0,I,D);let X=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let Z=0;Z<5;Z++){_.save(),_.translate(40+Z%3*80,44+Math.floor(Z/3)*70),_.rotate((Z%2?-1:1)*.12),_.fillStyle=X[Z%4],_.fillRect(-28,-22,56,44),_.fillStyle="#e2452f",_.beginPath(),_.arc(0,-18,4,0,7),_.fill(),_.fillStyle="#8a7a6a";for(let Q=0;Q<3;Q++)_.fillRect(-20,-6+Q*9,40-Q*8,3);_.restore()}_.fillStyle="#3a1e0c",_.font=`900 26px ${Dn}`,_.textAlign="right",_.fillText("\u7559\u8A00\u677F",I-14,D-14)}),x=new ht(new ln(1.3,.85,.08),[ae,ae,ae,ae,new Fe({map:c}),ae]);x.position.y=1.15,zt.add(x);let b=new ht(new ln(1.5,.08,.35),Wt("#2c3044"));b.position.y=1.62,b.rotation.x=.2,zt.add(b),zt.traverse(_=>{_.isMesh&&(_.userData.board=1)})}let Xt=[];if(zt.traverse(c=>{c.isMesh&&Xt.push(c)}),a){let c=h.children.length;h.children.slice(_e,c).concat(h.children.slice(st,Mt)).forEach(Q=>h.remove(Q)),Xt.length=0,ut.length=0;let x=new be("#8fd3f6"),b=new be("#16204a"),_=new be("#f0a890"),I=x.clone().lerp(y>15&&y<20?_:b,y>15&&y<20&&m<.5?Math.min(1,m*2):m).lerp(b,m>.5?(m-.5)*2:0);h.fog.color.copy(I),h.fog.near=30,h.fog.far=90,l.setClearColor(I,1),v.visible=!1,T.color.set(m>.5?"#9aa8ff":"#e8f4ff"),T.groundColor.set("#6a8a4a"),T.intensity=1.25+(1-m)*.6,S.intensity=.4+(1-m)*1,S.color.set(m>.5?"#a0b0ff":"#fff2dc");let D=new ht(new ke(220,220),Wt(m>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,h.add(D);let X=new ht(new ke(2.2,6),Wt("#d9d4cc"));X.rotation.x=-Math.PI/2,X.position.set(Ui,-.01,vt+3.2),h.add(X);let Z=m>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[xe+4,1],[xe+5,6],[-3,vt+5],[xe+3,vt+6],[2,-4],[8,-5]].forEach(([Q,Rt],Ne)=>{let me=new ye;me.position.set(Q,0,Rt),h.add(me);let oe=new ht(new yi(.2,.28,1.8,7),Wt("#8a5a3a"));oe.position.y=.9,me.add(oe);let Ke=new ht(new gs(1.4,1),new nn({color:Ne%3?Z:m>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));Ke.position.y=2.6,me.add(Ke)})}let Pe=140,At=new Float32Array(Pe*3),Jt=[],de=ge(32,32,c=>{c.fillStyle="#f8c8d8",c.beginPath(),c.ellipse(16,16,12,7,.5,0,7),c.fill()}),pe=new ao(new yn,new Ma({map:de,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));pe.geometry.setAttribute("position",new Ce(At,3)),h.add(pe);function Kt(c,x){let b=ut.concat(Le)[Math.floor(Math.random()*(ut.length+Le.length))]||ut[0]||{x:-999,z:-999,y:0,r:.1};At[c*3]=b.x+fi(-b.r,b.r),At[c*3+1]=x?fi(0,b.y):b.y+fi(-.3,.3),At[c*3+2]=b.z+fi(-b.r,b.r),Jt[c]={vx:fi(-.2,.4),vy:fi(-.5,-.25),ph:Math.random()*7,fl:b.y}}let Le=[],jt=[],Ze=[],Y=(c,x)=>c>=0&&c<xe&&x>=0&&x<vt,qt=(c,x)=>!a&&c>=Id&&c<Pd&&x>=S_&&x<bf,ft=(c,x)=>x%2?[c.d,c.w]:[c.w,c.d];function K(c){let x=Ae[c.k];if(x.L==="wall")return Bt(c);let[b,_]=ft(x,c.r),I=[];for(let D=0;D<b;D++)for(let X=0;X<_;X++)I.push([c.x+D,c.z+X]);return I}function Bt(c){let x=Ae[c.k],b=[];for(let _=0;_<x.w;_++)c.r===0?b.push(["b",c.x+_]):c.r===2?b.push(["f",c.x+_]):c.r===1?b.push(["l",c.z+_]):b.push(["r",c.z+_]);return b}function Gt(c){return c===0?"back":c===2?"front":c===1?"left":"right"}function Me(c,x){let b=Ae[c.k];for(let[_,I]of Bt(c)){let D=_==="b"||_==="f"?xe:vt;if(I<0||I>=D||_==="f"&&I>=_i-0&&I<vi)return!1;_==="f"&&I>=_i-1&&I<vi+1&&b.w>1}for(let _ of jt){if(_===x||Ae[_.k].L!=="wall")continue;let I=Bt(_);for(let D of Bt(c))if(I.some(X=>X[0]===D[0]&&X[1]===D[1]))return!1}return!0}function rn(c,x,b,_){for(let I of jt)if(!(I===_||Ae[I.k].L!==b)&&K(I).some(D=>D[0]===c&&D[1]===x))return I;return null}function Tn(c,x,b){let _=rn(c,x,"main",b);return _&&Ae[_.k].sf?_:null}function Be(c,x){let b=Ae[c.k];if(b.L==="wall")return Me(c,x);let _=K(c),I=null;for(let[D,X]of _){let Z=Y(D,X),Q=qt(D,X);if(!Z&&!Q)return!1;if(I===null)I=Z;else if(I!==Z)return!1;if(Nl.has(D+","+X))return!1;if(b.L==="top"){if(rn(D,X,"top",x))return!1;let Rt=rn(D,X,"main",x);if(Rt&&!Ae[Rt.k].sf||Rt&&Rt.k==="tank")return!1}else if(rn(D,X,b.L,x))return!1;if(b.L==="main"&&b.solid&&Z&&X===vt-1&&D>=_i&&D<vi)return!1}return b.L==="main"&&b.solid,!0}function tn(c){if(Ae[c.k].L!=="top")return 0;let b=0;for(let[_,I]of K(c)){let D=Tn(_,I);D&&(b=Math.max(b,Ae[D.k].sf))}return b}function Pn(c){let x=Ae[c.k];if(x.L==="wall"){let[I,D]=Bt(c)[0],X=D+x.w/2;return I==="b"?[X,0,.02]:I==="f"?[X,0,vt-.02]:I==="l"?[.02,0,X]:[xe-.02,0,X]}let[b,_]=ft(x,c.r);return[c.x+b/2,tn(c),c.z+_/2]}let Ni=new Fe({map:z,transparent:!0,depthWrite:!1,opacity:.55});function pr(c,x){let b=Ae[c.k];if(c.I=b,c.g=gf(c.k),h.add(c.g),c.g.userData.e=c,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[_,I]=ft(b,0),D=new ht(new ke(_*.95,I*.95),Ni);D.rotation.x=-Math.PI/2,D.position.y=.012,c.g.add(D),D.raycast=()=>{}}return c.g.traverse(_=>{_.isMesh&&(_.userData.e=c,Ze.push(_))}),jt.push(c),kn(c),x||si(),c}function kn(c){let[x,b,_]=Pn(c);c.g.position.set(x,b,_),c.g.rotation.y=c.r*Math.PI/2}function vs(c){let x=jt.indexOf(c);x>=0&&jt.splice(x,1),h.remove(c.g);for(let b=Ze.length-1;b>=0;b--)Ze[b].userData.e===c&&Ze.splice(b,1);c.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function hn(c){let x=K(c);return jt.filter(b=>Ae[b.k].L==="top"&&K(b).some(_=>x.some(I=>I[0]===_[0]&&I[1]===_[1])))}if(o.it.forEach(([c,x,b,_])=>{let I={k:c,x,z:b,r:_||0};Be(I)?pr(I,!0):s&&(o.inv[c]=(o.inv[c]||0)+1)}),jt.filter(c=>Ae[c.k].L==="top").forEach(kn),ct(o.fl),ue(o.wa),r){let c=n.ex||{},x=c.wall||"#f29ab8",b=ge(640,200,(_,I,D)=>{_.fillStyle=x,_.fillRect(0,0,I,D);for(let Z=0;Z<D;Z+=14)_.fillStyle="rgba(0,0,0,.08)",_.fillRect(0,Z,I,2);let X=Z=>{_.fillStyle=m>.5?"#ffd98a":"#bfe6ff",_.fillRect(Z,60,110,70),_.strokeStyle="#f4efe2",_.lineWidth=8,_.strokeRect(Z,60,110,70),_.beginPath(),_.moveTo(Z+55,60),_.lineTo(Z+55,130),_.stroke()};X(70),X(460),_.fillStyle="#e8e2d4",_.fillRect(0,D-26,I,26)});Re.front.forEach(_=>_.traverse(I=>{if(I.isMesh&&Array.isArray(I.material)&&I.material[4]&&I.material[4].map){let D=I.material[4].map.offset.x,X=I.material[4].map.repeat.x,Z=b.clone();Z.needsUpdate=!0,Z.offset.set(D,0),Z.repeat.set(X,1),I.material[4]=new Fe({map:Z})}})),Ot.map=null,Ot.color.set(x),Ot.needsUpdate=!0,ce.children.slice().forEach(_=>{_!==ce.children[0]&&_!==ce.children[1]&&_!==ce.children[2]&&(_.visible=!1)}),Nt.forEach(_=>{_.visible=!1}),Pt.traverse(_=>{_.isMesh&&_.material&&_.material.map&&(_.material.map=null,_.material.color.set(c.roofC||"#d8452f"),_.material.needsUpdate=!0)})}function zi(){Le=jt.filter(c=>c.k==="sakura").map(c=>({x:c.g.position.x,z:c.g.position.z,y:2,r:.5}))}zi();for(let c=0;c<Pe;c++)Kt(c,1);let gn=0;function di(){return o.it=jt.map(c=>[c.k,c.x,c.z,c.r]),o}function si(){s&&(di(),clearTimeout(gn),gn=setTimeout(()=>{try{i.save&&i.save(o)}catch{}},700),za())}let bs=[],ri=1.5,Gs={};function Wi(c){return Gs[c]?Gs[c]:Gs[c]=ge(128,112,x=>{if(x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",c==="mind"||c==="zzz"){x.fillStyle=c==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([_,I,D])=>{x.beginPath(),x.arc(_,I,D,0,7),x.stroke()}),b.forEach(([_,I,D])=>{x.beginPath(),x.arc(_,I,D,0,7),x.fill()}),x.beginPath(),x.arc(44,90,7,0,7),x.fill(),x.stroke(),x.beginPath(),x.arc(30,104,4,0,7),x.fill(),x.stroke()}else x.fillStyle=c==="idea"?"#fff0a8":c==="msg"?"#ffe0ea":"#ffffff",lr(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8);if(x.fillStyle="#2a1810",x.textAlign="center",x.textBaseline="middle",c==="idea")x.font=`900 44px ${Dn}`,x.fillText("!",64,42);else if(c==="zzz")x.font=`900 30px ${Dn}`,x.fillText("z z Z",64,42);else if(c==="msg")x.font=`900 40px ${Dn}`,x.fillText("\u2709",64,42);else for(let b=0;b<3;b++)x.beginPath(),x.arc(40+b*24,42,6,0,7),x.fill()})}function Or(c,x){return ge(512,112,I=>{I.textAlign="center",I.textBaseline="middle";let D=52;I.font=`900 ${D}px ${Dn}`;let X=String(c||"").slice(0,16);for(;I.measureText(X).width>432&&D>22;)D-=2,I.font=`900 ${D}px ${Dn}`;let Z=Math.min(500,I.measureText(X).width+56);I.fillStyle=x==="me"?"#2a1810e6":x==="owner"?"#7a3a14e6":"#2a2a48e0",I.strokeStyle=x==="me"?"#ffd27a":x==="owner"?"#ffb36b":"#c8c0ff",I.lineWidth=6,lr(I,(512-Z)/2,14,Z,84,84/2),I.fill(),I.stroke(),I.fillStyle="#fff3d6",I.fillText(X,512/2,112/2+2)})}function P(c,x,b){b=b||{};let _=new ye;h.add(_);let I=new ke(1,1);I.translate(0,.5,0);let D=new Fe({transparent:!0,alphaTest:.04,color:b.tint||16051952}),X=new ht(I,D);_.add(X);let Z={grp:_,m:X,mat:D,h0:x,h:x*ri,ar:.8,w:x*ri*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};p(c,Rt=>{D.map=Rt,D.needsUpdate=!0,Z.ar=Rt.image.width/Rt.image.height,Z.w=Z.h*Z.ar});let Q=new ht(new Yn(.5,16),new Fe({map:z,transparent:!0,depthWrite:!1,opacity:.8}));if(Q.rotation.x=-Math.PI/2,h.add(Q),Z.sh=Q,b.name){let Rt=new ei(new Kn({map:Or(b.name,b.nk),transparent:!0,depthTest:!1}));Rt.renderOrder=30,Rt.scale.set(2,.44,1),h.add(Rt),Z.tag=Rt,Z.name=b.name}if(b.bubble){let Rt=new ei(new Kn({map:Wi(b.bubble),transparent:!0,depthWrite:!1}));Rt.scale.set(.8,.7,1),h.add(Rt),Z.bub=Rt,Z.kind=b.bubble}return bs.push(Z),Z}let k=P(n.me.src,1.5,{me:1,name:n.me.name||"\u6211",nk:"me"});k.x=Ui,k.z=vt+2.6,(s&&n.startInside!==!1||n.island)&&(k.x=Ui,k.z=vt-1.6);let it=ys,et=_s,j=Cd;function Tt(c,x){if(c<it||c>=et||x<0||x>=j||x<vt&&(c<0||c>=xe)||x>=vt&&Nl.has(c+","+x)&&c===7&&x===vt+1)return!0;let b=rn(c,x,"main");return!!(b&&Ae[b.k].solid)}let Vt=(c,x,b,_)=>Tt(b,_)?!1:x===vt-1&&_===vt||x===vt&&_===vt-1?c>=_i&&c<vi&&b===c:!0;function W(c,x,b,_){c=Math.floor(c),x=Math.floor(x);let I=(Z,Q)=>(Z-it)*100+Q,D=new Map;D.set(I(c,x),null);let X=[[c,x]];for(;X.length;){let[Z,Q]=X.shift();if(Z===b&&Q===_){let Rt=[],Ne=I(Z,Q),me=Z,oe=Q;for(;Ne!==null;){Rt.push([me+.5,oe+.5]);let Ke=D.get(Ne);if(Ke===null)break;me=Ke[0],oe=Ke[1],Ne=I(me,oe)}return Rt.reverse()}for(let[Rt,Ne]of[[1,0],[-1,0],[0,1],[0,-1]]){let me=Z+Rt,oe=Q+Ne,Ke=I(me,oe);D.has(Ke)||!Vt(Z,Q,me,oe)||(D.set(Ke,[Z,Q]),X.push([me,oe]))}}return null}let kt=.28;function he(c,x,b){let _=c>=_i+kt&&c<=vi-kt;if(b<vt){if(x<vt&&(c<kt||c>xe-kt||x<kt)||x>=vt-kt&&!_)return!1}else if(x<vt+kt&&!_||x<vt&&!_)return!1;if(c<ys+.4||c>_s-.4||x>Cd-.4||x<vt&&(c<0||c>xe))return!1;for(let[I,D]of[[-kt,-kt],[kt,-kt],[-kt,kt],[kt,kt],[0,0]]){let X=Math.floor(c+I*.8),Z=Math.floor(x+D*.8),Q=rn(X,Z,"main");if(Q&&Ae[Q.k].solid||X===7&&Z===vt+1&&Math.hypot(c-ui.x,x-ui.z)<.7)return!1}return!0}function Se(c){let x=[];if(c)for(let b=0;b<vt;b++)for(let _=0;_<xe;_++)Tt(_,b)||x.push([_,b]);else for(let b=vt+1;b<vt+6;b++)for(let _=-6;_<xe+6;_++)Tt(_,b)||x.push([_,b]);return x}let Qt=[],Ve=()=>Mf(vo(di())),Je=en(La.filter(c=>n.walk&&n.walk[c.spr]&&c.spr!=="robot"));function en(c){for(let x=c.length-1;x>0;x--){let b=Math.floor(Math.random()*(x+1));[c[x],c[b]]=[c[b],c[x]]}return c}let Bn=r?0:ss(2+Ve(),2,7);Je.slice(0,Bn).forEach((c,x)=>{let b=P(n.walk[c.spr],c.h,{bubble:"chat"});b.d=c,b.sp=c.sp*.8,b.kind2="npc",b.state="out",b.t=x*2.2+fi(0,1.5),b.x=ys+1,b.z=vt+4,b.hidden=!0,Qt.push(b)});function We(c){let x=P(n.me.src,1.5,{name:c.name,nk:"vis",bubble:"msg",tint:16771312});x.d={id:"v"+c.id,name:c.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},x.v=c,x.sp=1.3,x.kind2="vis",x.state="out",x.t=fi(1,6),x.x=_s-1,x.z=vt+4,x.hidden=!0,Qt.push(x)}let ne=null,Nn=null;if(r){let c=new ye;h.add(c);let x="#e8a050",b="#fff3e0",_=new ht(new ni(.2,14,10),Wt(x));_.scale.set(1.5,.8,.9),_.position.y=.2,c.add(_);let I=new ht(new ni(.14,14,10),Wt(x));I.position.set(.3,.34,0),c.add(I);let D=new ht(new ni(.07,10,8),Wt(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),c.add(D);for(let Rt of[-.07,.07]){let Ne=new ht(new jn(.05,.1,4),Wt(x));Ne.position.set(.3,.5,Rt),c.add(Ne);let me=new ht(new ni(.018,6,6),Wt("#1a1a1a"));me.position.set(.43,.38,Rt*.7),c.add(me)}let X=[];for(let[Rt,Ne]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let me=new ht(new yi(.04,.04,.16,6),Wt(x));me.position.set(Rt,.08,Ne),c.add(me),X.push(me)}let Z=new ht(new yi(.03,.025,.4,6),Wt(x));Z.position.set(-.38,.36,0),Z.rotation.z=.8,c.add(Z),c.traverse(Rt=>{Rt.isMesh&&(Rt.userData.pet=1)});let Q=jt.find(Rt=>Rt.k==="catbed");Nn={g:c,legs:X,tail:Z,x:Q?Q.g.position.x:2.5,z:Q?Q.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!Q}}if(!s){let c=jt.find(_=>_.k==="register"),x=Ui,b=2;if(c){let _=[[c.x,c.z-1],[c.x+1,c.z],[c.x-1,c.z],[c.x,c.z+1]].find(([I,D])=>Y(I,D)&&!Tt(I,D));_&&(x=_[0]+.5,b=_[1]+.5)}ne=P(n.owner&&n.owner.src||n.me.src,1.5,{name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),ne.x=x,ne.z=b,ne.kind2="owner",ne.state="sleep",ne.d={name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),role:o.name},Qt.push(ne)}function He(c){let x=c.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];jt.forEach(X=>{X.k==="register"&&b.push(...K(X))}),b.push([7,vt+1]);let _=Se(x).filter(([X,Z])=>!b.some(Q=>Math.abs(Q[0]-X)<=1&&Math.abs(Q[1]-Z)<=1)&&!bs.some(Q=>Q!==c&&!Q.hidden&&Math.floor(Q.x)===X&&Math.floor(Q.z)===Z));if(!_.length)return null;let I=_.filter(([X,Z])=>jt.some(Q=>Ae[Q.k].L!=="rug"&&K(Q).some(Rt=>Math.abs(Rt[0]-X)+Math.abs(Rt[1]-Z)===1))),D=I.length&&Math.random()<.75?I:_;return D[Math.floor(Math.random()*D.length)]}function mn(c,x,b){let _=W(c.x,c.z,x,b);return _&&_.length?(c.path=_,c.state="walk",!0):!1}let G={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:k.z<vt,cam:new N(k.x,1,k.z),low:{},pitch:.7,pitchT:.7},fn=(c,x,b,_)=>{let I=document.createElement(c);return x&&(I.className=x),b!=null&&(I.innerHTML=b),(_||e).appendChild(I),I},bi=[],Te=c=>(bi.push(c),c),Vn=Te(fn("div","h3info")),Xi=Te(fn("div","h3hud")),_n=fn("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),zn=Te(fn("div","h3hint")),ai=Te(fn("div","h3toast")),Fi=Te(fn("div","h3j","<i></i>")),qi=Te(fn("div","h3card")),Yi=Te(fn("div","h3bp")),Ws=Te(fn("div","h3sel")),Ms=Te(fn("div","h3top")),Xe=Te(fn("div","h3pan")),Un=Te(fn("button","h3door","\u{1F6AA} \u51FA\u9580"));Un.type="button",Un.dataset.h3="exit";function Cn(c){ai.textContent=c,ai.classList.add("on"),clearTimeout(Cn.t),Cn.t=setTimeout(()=>ai.classList.remove("on"),2200)}function Na(){if(G.mode==="build"){Xi.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}Xi.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function za(){let c=vo(di()),x=Mf(c);if(r){Vn.innerHTML=`<b>\u{1F3E0} ${cn(n.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> \u6EAB\u99A8\u5EA6 ${c}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${cn(n.owner&&n.owner.name||"")} \u7684\u5BB6`}</small>`;return}Vn.innerHTML=`<b>\u{1F3EE} ${cn(o.name)}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> ${cn(Sf[x][1])}<br><small>\u6EAB\u99A8\u5EA6 ${c}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${dr(wf(c))}`:`\u30FB\u5E97\u9577 ${cn(n.owner&&n.owner.name||"")}`}</small>`}Na(),za(),_n.style.display="none",_n.querySelectorAll("button").forEach((c,x)=>{let b=x?-1:1;c.addEventListener("pointerdown",I=>{I.preventDefault(),G.camV=b;try{c.setPointerCapture(I.pointerId)}catch{}});let _=()=>{G.camV=0};c.addEventListener("pointerup",_),c.addEventListener("pointercancel",_),c.addEventListener("click",()=>{G.camV||(G.yawT+=b*.5)})});let Xs=()=>t.getBoundingClientRect(),Oi=new Ca,bo=new Ct,kr=new Li(new N(0,1,0),0),Mo=new N,mr=(c,x)=>{let b=Xs();return bo.set((c-b.left)/b.width*2-1,-((x-b.top)/b.height*2-1)),bo},ws=(c,x)=>{let b=Xs();return{x:(c-b.left)*(t.clientWidth/b.width),y:(x-b.top)*(t.clientHeight/b.height)}},qs=c=>{let x=c.clone().project(f),b=Xs();return{x:(x.x+1)/2*b.width+b.left,y:(1-x.y)/2*b.height+b.top,z:x.z}};function Br(c,x){return Oi.setFromCamera(mr(c,x),f),Oi.ray.intersectPlane(kr,Mo)?Mo.clone():null}function Fa(c,x){Oi.setFromCamera(mr(c,x),f);let b=Oi.intersectObjects(Ze.filter(_=>_.visible&&_.parent&&zl(_)),!1);return b.length?b[0].object.userData.e:null}function zl(c){let x=c;for(;x;){if(!x.visible)return!1;x=x.parent}return!0}function Oa(c,x){let b=null,_=1e9;for(let I of Qt){if(I.hidden)continue;let D=qs(new N(I.x,0,I.z)),X=qs(new N(I.x,I.h+.3,I.z)),Z=D.y-X.y;if(Z<6)continue;let Q=Math.max(Z*.36,30),Rt=Math.abs(c-D.x);if(Rt<Q&&x>X.y-14&&x<D.y+12){let Ne=Rt+Math.abs(x-(D.y+X.y)/2)*.3;Ne<_&&(_=Ne,b=I)}}return b}function Vr(c,x){return Oi.setFromCamera(mr(c,x),f),Oi.intersectObjects(Xt,!1).length>0}let as=[],gr=[];function os(c,x){return Oi.setFromCamera(mr(c,x),f),Oi.intersectObjects(gr,!1).length>0}let Mi=new Map,je=null,$i=null;t.addEventListener("contextmenu",c=>c.preventDefault()),t.addEventListener("pointerdown",c=>{c.preventDefault();try{t.setPointerCapture(c.pointerId)}catch{}let x=ws(c.clientX,c.clientY);if(Mi.set(c.pointerId,{x:c.clientX,y:c.clientY}),Mi.size===2){let[b,_]=[...Mi.values()];$i={d:Math.hypot(b.x-_.x,b.y-_.y),dist:G.distT,ang:Math.atan2(_.y-b.y,_.x-b.x),yaw:G.yawT},je=null,G.joy=null,Fi.style.display="none",Tf();return}if(je={id:c.pointerId,sx:x.x,sy:x.y,cx:c.clientX,cy:c.clientY,moved:0,btn:c.button,yaw0:G.yawT,pit0:G.pitchT},G.mode==="build"){let b=Fa(c.clientX,c.clientY);b&&b===G.sel&&!b.I.fixed2?je.dragItem=b:b&&(je.pickItem=b)}}),t.addEventListener("pointermove",c=>{if(Mi.has(c.pointerId)&&Mi.set(c.pointerId,{x:c.clientX,y:c.clientY}),$i&&Mi.size>=2){let[D,X]=[...Mi.values()],Z=Math.hypot(D.x-X.x,D.y-X.y);G.distT=ss($i.dist*$i.d/Math.max(20,Z),6,20),G.yawT=$i.yaw-(Math.atan2(X.y-D.y,X.x-D.x)-$i.ang);return}if(!je||je.id!==c.pointerId)return;let x=ws(c.clientX,c.clientY),b=x.x-je.sx,_=x.y-je.sy,I=Math.hypot(b,_);if(!je.moved&&I>10&&(je.moved=1,je.pickItem&&G.mode==="build"&&(Ge(je.pickItem),je.dragItem=je.pickItem)),!!je.moved){if(je.btn===2||G.mode==="walk"||G.mode==="build"&&!je.dragItem){G.yawT=je.yaw0-b*.008,G.pitchT=ss(je.pit0+_*.005,.3,1.25);return}if(G.mode==="build"&&je.dragItem){Ss(je.dragItem,c.clientX,c.clientY);return}if(G.mode==="walk"){let X=Math.min(1,I/55)/Math.max(I,1e-6);G.joy={x:b*X,y:_*X},G.tgt=null,Fi.style.display="block",Fi.style.left=je.sx+"px",Fi.style.top=je.sy+"px",Fi.firstChild.style.transform=`translate(${G.joy.x*55}px,${G.joy.y*55}px)`}}});let ki=c=>{Mi.delete(c.pointerId),Mi.size<2&&($i=null),!(!je||je.id!==c.pointerId)&&(je.moved||So(c.clientX,c.clientY,je),je.dragItem&&Tf(),je=null,G.joy=null,Fi.style.display="none")};t.addEventListener("pointerup",ki),t.addEventListener("pointercancel",ki),t.addEventListener("wheel",c=>{c.preventDefault(),G.distT=ss(G.distT+Math.sign(c.deltaY)*1.2,6,20)},{passive:!1});let ls=c=>{if(!document.contains(t)||/input|textarea/i.test(c.target&&c.target.tagName||""))return;let x=c.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(x)){if(x==="r"&&G.sel){Ef(),c.preventDefault();return}G.keys[x]=1,/^(arrow|w|a|s|d)/.test(x)&&(G.tgt=null),c.preventDefault()}},wo=c=>{delete G.keys[c.key.toLowerCase()]};document.addEventListener("keydown",ls),document.addEventListener("keyup",wo);function So(c,x){if(Xe.classList.contains("on"))return;if(G.mode==="build"){let D=Fa(c,x);Ge(D||null);return}let b=Oa(c,x);if(b){E(b);return}if(Nn){Oi.setFromCamera(mr(c,x),f);let D=[];if(Nn.g.traverse(X=>{X.isMesh&&D.push(X)}),Oi.intersectObjects(D,!1).length){Cn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),Nn.t=2,Nn.path=null;return}}if(gr.length&&os(c,x)){w(ui.x-1,ui.z+.9,If);return}if(Vr(c,x)){w(ui.x,ui.z+1,kl);return}let _=Fa(c,x);if(_&&Ae[_.k].L==="top"){let D=K(_).map(X=>Tn(X[0],X[1])).find(Boolean);D&&D.k==="register"&&(_=D)}if(_&&_.k==="register"){w(_.g.position.x,_.g.position.z+1.2,()=>St(_));return}if(_&&Ae[_.k].L!=="rug"){let D=_.g.position;ot(),J(_),G.tgt=g(D.x,D.z);return}ot();let I=Br(c,x);I&&(G.tgt={x:I.x,z:I.z})}function g(c,x){let b=null,_=1e9;for(let[I,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let X=c+I,Z=x+D;if(he(X,Z,Z<vt?0:vt+1)){let Q=Math.hypot(X-k.x,Z-k.z);Q<_&&(_=Q,b={x:X,z:Z})}}return b}function w(c,x,b){ot();let _=g(c,x-1)||{x:c,z:x};G.tgt={x:_.x,z:_.z,fn:b},Math.hypot(k.x-_.x,k.z-_.z)<1.6&&(G.tgt=null,b())}function E(c){ot(!0),G.talk=c,c.kind2==="npc"&&(c.state="talk",c.t=0);let x=cn(c.d.name),b=cn(c.d.role||""),_="",I=Nr.chat,D="";if(c.kind2==="owner")I={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},_=r?`<p class="h3t mind">\uFF08${cn(n.owner&&n.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${cn(n.owner&&n.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,_+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(c.kind2==="vis")I={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},_=`<p class="h3t">\u300C${cn(c.v.msg||"\u2026\u2026")}\u300D</p>${c.v.gift&&Ae[c.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${cn(Ae[c.v.gift].n)}\u300D</p>`:""}`;else{let Rt=F(c);I=Nr[Rt.kind]||Nr.chat,_=`<p class="h3t${Rt.kind==="mind"?" mind":""}">${Rt.kind==="mind"?"\uFF08"+cn(Rt.text)+"\uFF09":"\u300C"+cn(Rt.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let X=c.kind2==="npc"?n.walk[c.d.spr]:c.kind2==="owner"&&n.owner&&n.owner.src||n.me.src;qi.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${X}')"></div><div class="h3nm"><b>${x}</b><small>${b}</small></div><span class="h3k" style="background:${I.c}">${I.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${_}<div class="h3bt">${D}</div>`;let Z=Xs(),Q=qs(new N(c.x,c.h*.5,c.z));qi.classList.toggle("r",Q.x-Z.left<Z.width/2),qi.classList.add("on"),c.bub&&(c.bub.visible=!1)}function F(c){let x=jt.filter(b=>vf[b.k]&&Math.hypot(b.g.position.x-c.x,b.g.position.z-c.z)<3.2);if(x.length&&Math.random()<.5){let b=x[Math.floor(Math.random()*x.length)];return{kind:"chat",text:vf[b.k]}}return(!c.deck||!c.deck.length)&&(c.deck=en(c.d.lines.map(b=>({kind:b[0],text:b[1]})))),c.deck.pop()}function J(c){let x=Ae[c.k];G.talk=null,qi.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${x.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${cn(x.n)}</b><small>\u6EAB\u99A8\u5EA6 +${x.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${cn(vf[c.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,qi.classList.remove("r"),qi.classList.add("on")}function ot(c){qi.classList.remove("on");let x=G.talk;G.talk=null,x&&x.kind2==="npc"&&x.state==="talk"&&(x.state="idle",x.t=fi(1,2.5))}function bt(){if(!s||r)return 0;let c=i.today?i.today():Math.floor(Date.now()/864e5);return(o.cl?ss(c-o.cl,0,3):1)*wf(vo(di()))}function St(c){if(!s){Cn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let x=bt();if(x<=0){Cn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=i.collect?i.collect(x):!1}catch{}if(!b){Cn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}o.cl=i.today?i.today():Math.floor(Date.now()/864e5),si(),qe(c),Cn(`\u6536\u5230 ${dr(x)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let Et=new ei(new Kn({map:ge(128,128,c=>{c.fillStyle="#f2c230",c.strokeStyle="#8a5a10",c.lineWidth=8,c.beginPath(),c.arc(64,64,52,0,7),c.fill(),c.stroke(),c.fillStyle="#8a5a10",c.font=`900 64px ${Dn}`,c.textAlign="center",c.textBaseline="middle",c.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));Et.renderOrder=25,Et.scale.set(.55,.55,1),h.add(Et);let yt=[];function qe(c){for(let x=0;x<8;x++){let b=Et.clone();b.material=Et.material.clone(),b.position.copy(c.g.position).add(new N(0,1.4,0)),b.userData.v=new N(fi(-1.2,1.2),fi(2.5,4),fi(-1.2,1.2)),b.userData.t=0,h.add(b),yt.push(b)}}function vn(c){if(G.mode=c,Ge(null),ot(),G.tgt=null,Na(),Yi.classList.toggle("on",c==="build"),Ms.classList.toggle("on",c==="build"),c!=="build"&&(_n.style.bottom=""),Vn.style.display=c==="build"?"none":"",c==="build")Ms.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",Oe(),G.distT=13.5;else{if(G.distT=G.inside?10.5:13,!he(k.x,k.z,k.z)){let x=Se(k.z<vt).sort((b,_)=>Math.hypot(b[0]+.5-k.x,b[1]+.5-k.z)-Math.hypot(_[0]+.5-k.x,_[1]+.5-k.z)).find(b=>he(b[0]+.5,b[1]+.5,b[1]));x&&(k.x=x[0]+.5,k.z=x[1]+.5)}si()}}let Hn=r?"liv":"tbl",_t={},Ie=null,dt=null,fe=null;function ve(c){if(_t[c])return _t[c];try{if(!Ie){Ie=new es(128,128),dt=new Cr,dt.add(new Dr(16774368,8413264,2.2));let oe=new Ur(16777215,1.4);oe.position.set(2,4,3),dt.add(oe),fe=new Wn(30,1,.05,50)}let x=gf(c);dt.add(x);let b=Ae[c],_=new ks().setFromObject(x),I=_.getCenter(new N),D=_.getSize(new N),Z=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;fe.position.set(I.x+Z*.55,I.y+Z*.45,I.z+Z*.7),fe.lookAt(I),b.L==="wall"&&(fe.position.set(I.x+Z*.25,I.y+Z*.1,I.z+Z*.96),fe.lookAt(I)),l.setRenderTarget(Ie),l.setClearColor(0,0),l.clear(),l.render(dt,fe),l.setRenderTarget(null),l.setClearColor(1709366,1);let Q=new Uint8Array(16384*4);l.readRenderTargetPixels(Ie,0,0,128,128,Q);let Rt=document.createElement("canvas");Rt.width=Rt.height=128;let Ne=Rt.getContext("2d"),me=Ne.createImageData(128,128);for(let oe=0;oe<128;oe++)me.data.set(Q.subarray((127-oe)*512,(128-oe)*512),oe*512);for(let oe=0;oe<me.data.length;oe+=4)me.data[oe]=_f[me.data[oe]],me.data[oe+1]=_f[me.data[oe+1]],me.data[oe+2]=_f[me.data[oe+2]];return Ne.putImageData(me,0,0),dt.remove(x),x.traverse(oe=>{oe.geometry&&oe.geometry.dispose()}),_t[c]=Rt.toDataURL()}catch{return _t[c]=""}}function Oe(){let c=i.coins?i.coins():0,x=(r?Ad:Ed).map(([Z,Q])=>`<button class="h3tab ${Hn===Z?"on":""}" type="button" data-h3="cat" data-k="${Z}">${Q}</button>`).join("")+`<button class="h3tab ${Hn==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${dr(c)}</span>`,b="";Hn==="reno"?b=pf.map(([Z,Q,Rt])=>{let Ne=o.fo[Z],me=o.fl===Z;return`<button class="h3it ${me?"cur":""}" type="button" data-h3="floor" data-k="${Z}"><span class="ph" style="background:url(${bn("f",Z)}) center/cover"></span>${cn(Q)}${me?'<span class="pr">\u4F7F\u7528\u4E2D</span>':Ne?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${dr(Rt)}</span>`}</button>`}).join("")+mf.map(([Z,Q,Rt])=>{let Ne=o.wo[Z],me=o.wa===Z;return`<button class="h3it ${me?"cur":""}" type="button" data-h3="wall" data-k="${Z}"><span class="ph" style="background:url(${bn("w",Z)}) center/cover"></span>${cn(Q)}${me?'<span class="pr">\u4F7F\u7528\u4E2D</span>':Ne?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${dr(Rt)}</span>`}</button>`}).join(""):b=go.filter(Z=>(r?Z.hc===Hn:Z.cat===Hn)&&!Z.fixed).map(Z=>{let Q=o.inv[Z.k]||0,Rt=ve(Z.k);return`<button class="h3it ${!Q&&c<Z.p?"no":""}" type="button" data-h3="item" data-k="${Z.k}">${Q?`<span class="ow">\xD7${Q}</span>`:""}${Rt?`<img src="${Rt}" alt="">`:'<span class="ph"></span>'}${cn(Z.n)}<span class="pr">${Q?"\u62FF\u51FA\u4F86\u64FA":dr(Z.p)}</span></button>`}).join("");let _=Yi.querySelector(".h3row"),I=_?_.scrollLeft:0,D=Yi.dataset.cat===Hn;Yi.innerHTML=`<div class="h3tabs">${x}</div><div class="h3row">${b}</div>`,Yi.dataset.cat=Hn,D&&(Yi.querySelector(".h3row").scrollLeft=I);let X=Yi.offsetHeight||150;_n.style.bottom=X+8+"px",Ws.style.bottom=X+8+"px"}let En={};function bn(c,x){let b=c+x;if(En[b])return En[b];let _;return c==="f"?_=(R[x]||R.wood)().image:_=H(x,2).image,En[b]=_.toDataURL()}function Ge(c){if(G.sel&&G.sel!==c&&(G.sel.ok||Mn(G.sel)),G.sel=c,wn.visible=!!c,Ws.classList.toggle("on",!!c),c){c.last={x:c.x,z:c.z,r:c.r},c.ok=!0;let x=Ae[c.k];Ws.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${x.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${x.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,oi()}}function Mn(c){if(!c.last)return;let x=c.last.x-c.x,b=c.last.z-c.z,_=Ae[c.k].sf?hn(c):[];c.x=c.last.x,c.z=c.last.z,c.r=c.last.r,kn(c),_.forEach(I=>{I.x+=x,I.z+=b,kn(I)}),c.ok=!0,oi()}let Fn=ge(64,64,c=>{c.strokeStyle="#fff",c.lineWidth=6,c.strokeRect(3,3,58,58)}),wn=new ht(new ke(1,1),new Fe({map:Fn,transparent:!0,depthWrite:!1,color:"#6aff8a"}));wn.rotation.x=-Math.PI/2,wn.visible=!1,wn.renderOrder=5,h.add(wn);let Ai=new ht(new ke(1,1),new Fe({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));Ai.rotation.x=-Math.PI/2,wn.add(Ai),Ai.rotation.x=0,Ai.position.z=-.001;function oi(){let c=G.sel;if(!c)return;let x=Ae[c.k],b=Be(c,c);c.ok=b;let _=b?"#6aff8a":"#ff5a4a";if(wn.material.color.set(_),Ai.material.color.set(_),x.L==="wall"){let[D,,X]=Pn(c),Z=Gt(c.r);wn.scale.set(x.w,.6,1),wn.position.set(D+(Z==="left"?.35:Z==="right"?-.35:0),.03,X+(Z==="back"?.35:Z==="front"?-.35:0)),wn.rotation.z=Z==="left"||Z==="right"?Math.PI/2:0}else{let[D,X]=ft(x,c.r),[Z,Q,Rt]=Pn(c);wn.scale.set(D,X,1),wn.rotation.z=0,wn.position.set(Z,Q+.03,Rt)}let I=Ws.querySelector('[data-h3="ok"]');I&&(I.disabled=!b)}function Ss(c,x,b){let _=Br(x,b);if(!_)return;let I=Ae[c.k],D=c.x,X=c.z;if(I.L==="wall"){let Z=[[_.z,0],[_.x,1],[xe-_.x,3],[vt-_.z,2]].filter(Q=>!G.low[Gt(Q[1])]).sort((Q,Rt)=>Q[0]-Rt[0]);if(!Z.length)return;c.r=Z[0][1],c.r===0||c.r===2?(c.x=ss(Math.round(_.x-I.w/2),0,xe-I.w),c.z=c.r===0?0:vt-1):(c.z=ss(Math.round(_.z-I.w/2),0,vt-I.w),c.x=c.r===1?0:xe-1)}else{let[Z,Q]=ft(I,c.r);c.x=Math.round(_.x-Z/2),c.z=Math.round(_.z-Q/2)}(c.x!==D||c.z!==X||I.L==="wall")&&(I.sf&&Hr(c,D,X),kn(c),oi())}function Hr(c,x,b){let _={x,z:b,r:c.r,k:c.k},I=K(_);jt.filter(D=>Ae[D.k].L==="top"&&K(D).some(X=>I.some(Z=>Z[0]===X[0]&&Z[1]===X[1]))).forEach(D=>{D.x+=c.x-x,D.z+=c.z-b,kn(D)})}function Tf(){G.sel&&(oi(),jt.filter(c=>Ae[c.k].L==="top").forEach(kn))}function Ef(){let c=G.sel;if(!c||Ae[c.k].L==="wall")return;let x=Ae[c.k].sf?hn(c):[];x.length&&(x.forEach(b=>{vs(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),Cn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),c.r=(c.r+1)%4,kn(c),oi()}function Ud(){let c=G.sel;if(!c||Ae[c.k].fixed)return;(Ae[c.k].sf?hn(c):[]).forEach(b=>{vs(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),G.sel=null,vs(c),o.inv[c.k]=(o.inv[c.k]||0)+1,wn.visible=!1,Ws.classList.remove("on"),zi(),si(),Oe()}function Nd(){let c=G.sel;if(c){if(!Be(c,c)){Cn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}c.last=null,G.sel=null,wn.visible=!1,Ws.classList.remove("on"),zi(),si()}}function Af(c){let x=Ae[c],b={k:c,x:0,z:0,r:0},_=G.cam.x,I=G.cam.z,D=null,X=1e9;if(x.L==="wall")for(let Z of[0,1,3,2].filter(Q=>!G.low[Gt(Q)]))for(let Q=0;Q<10;Q++){let Rt={k:c,r:Z,x:Z===0||Z===2?Q:Z===1?0:xe-1,z:Z===1||Z===3?Q:Z===0?0:vt-1};if(Me(Rt)){let[Ne,,me]=Pn(Rt),oe=Math.hypot(Ne-_,me-I);oe<X&&(X=oe,D=Rt)}}else for(let Z=0;Z<bf;Z++)for(let Q=Id;Q<Pd;Q++){let Rt={k:c,x:Q,z:Z,r:0};if(!Be(Rt))continue;let[Ne,,me]=Pn(Rt),oe=Y(Q,Z),Ke=Math.hypot(Ne-_,me-I)+(oe===G.inside?0:6)+(x.L==="top"&&!Tn(Q,Z)?1.5:0);Ke<X&&(X=Ke,D=Rt)}D?Object.assign(b,D):(b.x=1,b.z=1),pr(b,!0),o.inv[c]--,o.inv[c]||delete o.inv[c],Ge(b),D||oi(),zi(),si(),Oe()}function Fl(c,x,b,_,I){let D=i.coins?i.coins():0;Xe.innerHTML=`<h3>\u8CB7\u4E0B\u300C${cn(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${dr(_)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${dr(D)}</b></p>${D<_?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<_?"disabled":""}>\u8CB7\u4E0B</button></div>`,Xe.classList.add("on"),Xe._buy=()=>{let X=!1;try{X=i.buy?i.buy(_,b):!1}catch{}if(!X){Cn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}Xe.classList.remove("on"),I()}}let Ri=null,Ol=!1;function Rf(c){return Ri&&!c?Promise.resolve(Ri):i.msgs?Promise.resolve(i.msgs()).then(x=>(Ri=(x||[]).slice().sort((b,_)=>(_.t||0)-(b.t||0)),Ol=!1,Ri),()=>(Ol=!0,Ri=[],Ri)):(Ri=[],Promise.resolve(Ri))}let ka="";function kl(){ot(),Xe.innerHTML=`<h3>\u{1F4DC} ${cn(o.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,Xe.classList.add("on"),Rf(!0).then(c=>{if(!Xe.classList.contains("on"))return;let x=c.slice(0,30).map(_=>`<div class="msg"><b>${cn(_.name||"\u73A9\u5BB6")}</b><small>${_.t?new Date(_.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${_.gift&&Ae[_.gift]?` <small>\u{1F381} ${cn(Ae[_.gift].n)}</small>`:""}<br>${cn(_.msg||"")}</div>`).join("")||`<p style="opacity:.7">${Ol?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let _=r?0:c.filter(I=>I.gift&&Ae[I.gift]&&!o.gc[I.id]).length;b=`<div class="h3bt">${_?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${_} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let _=i.giftSent?i.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${n.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${_?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...A_].map(I=>`<button type="button" data-h3="gpick" data-k="${I}" class="${ka===I?"on":""}">${I?cn(Ae[I].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}Xe.innerHTML=`<h3>\u{1F4DC} ${cn(o.name)} \u7684\u7559\u8A00\u677F</h3>${x}${b}`})}function zd(){if(n.demo){Cn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),Xe.classList.remove("on");return}let c=Xe.querySelector("#h3msg"),x=(c&&c.value||"").trim().slice(0,60);if(x.length<1){Cn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=i.giftSent&&i.giftSent()?"":ka,_=Xe.querySelector('[data-h3="post"]');_&&(_.disabled=!0),Promise.resolve(i.post?i.post({msg:x,gift:b}):null).then(()=>{Cn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),ka="",Ri=null,Xe.classList.remove("on")},()=>{Cn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),_&&(_.disabled=!1)})}function Cf(){if(as.forEach(x=>h.remove(x)),as.length=0,gr.length=0,!s||!Ri)return;let c=Ri.filter(x=>x.gift&&Ae[x.gift]&&!o.gc[x.id]);c.slice(0,5).forEach((x,b)=>{let _=new ye;_.position.set(ui.x-1.1-b%3*.55,0,ui.z+.4+Math.floor(b/3)*.5),h.add(_);let I=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=B(.42,.36,.42,Wt(I),0,.18,0,_);B(.44,.38,.08,Wt("#fff3d6"),0,.18,0,_),B(.08,.38,.44,Wt("#fff3d6"),0,.18,0,_);let X=B(.46,.08,.46,Wt(I),0,.4,0,_),Z=new ht(new ni(.08,10,8),Wt("#fff3d6"));Z.position.y=.48,Z.scale.set(1.6,.8,1),_.add(Z),_.traverse(Q=>{Q.isMesh&&gr.push(Q)}),as.push(_),_.userData.ph=b}),c.length&&Cn(n.island?`\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF01`)}function If(){if(!s||!Ri)return;let c=Ri.filter(x=>x.gift&&Ae[x.gift]&&!o.gc[x.id]);c.length&&(c.forEach(x=>{o.inv[x.gift]=(o.inv[x.gift]||0)+1,o.gc[x.id]=1}),si(),Cf(),Xe.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${c.map(x=>`<div class="msg"><b>${cn(x.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${cn(Ae[x.gift].n)}\u300D<br>${cn(x.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,Xe.classList.add("on"))}function Fd(){ot(),Xe.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${cn(o.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,Xe.classList.add("on")}let Pf=c=>{let x=c.target.closest("[data-h3]");if(!x||!e.contains(x)||x.disabled)return;let b=x.dataset.h3,_=x.dataset.k;if(b==="close")ot();else if(b==="more"&&G.talk)E(G.talk);else if(b==="build")vn("build");else if(b==="done")vn("walk");else if(b==="rename")Fd();else if(b==="nameok"){let I=(Xe.querySelector("#h3name").value||"").trim().slice(0,12);I&&(o.name=I,xt(),si()),Xe.classList.remove("on")}else if(b==="board"){if(G.mode!=="walk")return;n.island?kl():w(ui.x,ui.z+1,kl)}else if(b==="claim")If();else if(b==="exit"){if(n.island){G.exited=!0;try{i.exit&&i.exit()}catch{}}}else if(b==="pclose")Xe.classList.remove("on");else if(b==="post")zd();else if(b==="gpick")ka=_||"",Xe.querySelectorAll('[data-h3="gpick"]').forEach(I=>I.classList.toggle("on",(I.dataset.k||"")===ka));else if(b==="buyok"&&Xe._buy)Xe._buy();else if(b==="cat")Hn=_,Oe();else if(b==="item"){let I=Ae[_];G.sel&&!G.sel.ok&&Mn(G.sel),Ge(null),o.inv[_]?Af(_):Fl("item",_,I.n,I.p,()=>{o.inv[_]=(o.inv[_]||0)+1,Af(_)})}else if(b==="floor"){let I=pf.find(X=>X[0]===_),D=()=>{o.fo[_]=1,o.fl=_,ct(_),si(),Oe()};o.fo[_]?D():Fl("floor",_,I[1],I[2],D)}else if(b==="wall"){let I=mf.find(X=>X[0]===_),D=()=>{o.wo[_]=1,o.wa=_,ue(_),si(),Oe()};o.wo[_]?D():Fl("wall",_,I[1],I[2],D)}else b==="rot"?Ef():b==="store"?Ud():b==="ok"&&Nd()};e.addEventListener("click",Pf),Rf().then(c=>{if(!G.dead&&s&&!r){Cf();let x={};c.filter(b=>b.name&&!x[b.from||b.name]&&(x[b.from||b.name]=1)).slice(0,3).forEach(We)}});let Od={get dead(){return G.dead},set dead(c){c&&Bl()},cv:t,dispose:Bl,data:()=>JSON.parse(JSON.stringify(di())),probe(){let c=x=>{let b=qs(x);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:G.mode,inside:G.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+k.x.toFixed(2),z:+k.z.toFixed(2)},yaw:+G.yaw.toFixed(2),sel:G.sel?{k:G.sel.k,x:G.sel.x,z:G.sel.z,r:G.sel.r,ok:G.sel.ok}:null,items:jt.map(x=>Object.assign({k:x.k,x:x.x,z:x.z,r:x.r},c(new N(x.g.position.x,x.g.position.y+.4,x.g.position.z)))),npcs:Qt.filter(x=>!x.hidden).map(x=>Object.assign({id:x.d.id||x.kind2,kind:x.kind2,state:x.state},c(new N(x.x,x.h*.5,x.z)))),board:c(new N(ui.x,1.15,ui.z)),gifts:as.length,card:qi.classList.contains("on")?qi.textContent:"",pan:Xe.classList.contains("on")?Xe.textContent:"",cozy:vo(di()),inv:Object.assign({},o.inv),name:o.name,fl:o.fl,wa:o.wa,tag:k.tag?k.tag.visible:!1,cellPx:(x,b)=>c(new N(x,0,b))}},px(c,x,b){let _=qs(new N(c,x,b));return{x:Math.round(_.x),y:Math.round(_.y)}},teleport(c,x){k.x=c,k.z=x,G.inside=x<vt},setYaw(c){G.yaw=G.yawT=c},setDist(c){G.dist=G.distT=c}};function Bl(){if(!G.dead){if(G.dead=!0,cancelAnimationFrame(G.raf),clearTimeout(gn),s)try{di(),i.save&&i.save(o,!0)}catch{}document.removeEventListener("keydown",ls),document.removeEventListener("keyup",wo),e.removeEventListener("click",Pf),bi.forEach(c=>c.remove()),h.traverse(c=>{c.geometry&&c.geometry.dispose(),(c.material?Array.isArray(c.material)?c.material:[c.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),Ie&&Ie.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let To=0,Eo=0,Lf=0,Ts=1,Ao=0,Vl=0,Df=9,Ba=new N,Zi=new N,Es=new N;function kd(c){return Math.round(ss(1.75-(c-380)/440*.6,1.15,1.75)*20)/20}function Bd(){let c=t.getBoundingClientRect(),x=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),_=Math.min(2,window.devicePixelRatio||1),I=kd(c.height||b);I!==ri&&(ri=I,bs.forEach(D=>{D.h=D.h0*ri,D.w=D.h*D.ar})),!(x===To&&b===Eo&&_===Lf)&&(To=x,Eo=b,Lf=_,Ts=ss(c.width*_/x,.5,2.2),Ts=Math.min(Ts,Df,Math.sqrt(14e5/(x*b))),l.setPixelRatio(Ts),l.setSize(x,b,!1),f.aspect=x/b,f.updateProjectionMatrix())}function Uf(c,x){if(!c.path||!c.path.length)return!0;let[b,_]=c.path[0],I=b-c.x,D=_-c.z,X=Math.hypot(I,D),Z=c.sp;if(X<.06)return c.path.shift(),!c.path.length;let Q=Math.min(X,Z*x);c.x+=I/X*Q,c.z+=D/X*Q,c.moving=!0,c.ph+=x*(4+Z*3.2);let Rt=I*Zi.x+D*Zi.z;return Math.abs(Rt)>.05&&(c.face=Rt>0?1:-1),!1}function Nf(c){if(G.dead)return;if(!document.contains(t)){Bl();return}G.raf=requestAnimationFrame(Nf);let x=Math.min(.1,(c-G.last)/1e3);G.last=c,G.t+=x;let b=G.t;Bd(),Ao+=x,Vl++,Ao>1.2&&(Ao/Vl>.028&&Ts>.55&&(Ts=Math.max(.55,Ts*.85),Df=Ts,l.setPixelRatio(Ts),l.setSize(To,Eo,!1)),Ao=0,Vl=0);let _=G.keys;_.q&&(G.yawT+=x*1.8),_.e&&(G.yawT-=x*1.8),G.camV&&(G.yawT+=G.camV*x*1.8),G.yaw+=(G.yawT-G.yaw)*Math.min(1,x*8),G.pitch+=(G.pitchT-G.pitch)*Math.min(1,x*8),G.dist+=(G.distT-G.dist)*Math.min(1,x*5);let I=Math.sin(G.yaw),D=Math.cos(G.yaw);if(Ba.set(-I,0,-D),Zi.set(D,0,-I),k.moving=!1,G.mode==="walk"&&!Xe.classList.contains("on")){let $=0,le=0,Ee=0,Ye=1e9;if(G.joy)$=Zi.x*G.joy.x+Ba.x*-G.joy.y,le=Zi.z*G.joy.x+Ba.z*-G.joy.y,Ee=Math.hypot(G.joy.x,G.joy.y);else{let an=(_.arrowright||_.d?1:0)-(_.arrowleft||_.a?1:0),$e=(_.arrowup||_.w?1:0)-(_.arrowdown||_.s?1:0);if(an||$e){let on=Math.hypot(an,$e);$=(Zi.x*an+Ba.x*$e)/on,le=(Zi.z*an+Ba.z*$e)/on,Ee=1}else if(G.tgt){if(!G.tgt.path){let Sn=W(k.x,k.z,Math.floor(G.tgt.x),Math.floor(G.tgt.z));G.tgt.path=Sn?Sn.slice(1):[],Sn?G.tgt.path.length?G.tgt.path[G.tgt.path.length-1]=[G.tgt.x,G.tgt.z]:G.tgt.path=[[G.tgt.x,G.tgt.z]]:G.tgt.path=[[G.tgt.x,G.tgt.z]]}let on=G.tgt.path[0];if(on){let Sn=on[0]-k.x,wi=on[1]-k.z,Ci=Math.hypot(Sn,wi);if(Ci<.12){if(G.tgt.path.shift(),!G.tgt.path.length){let cs=G.tgt.fn;G.tgt=null,cs&&cs()}}else $=Sn/Ci,le=wi/Ci,Ee=1,Ye=Ci}else{let Sn=G.tgt.fn;G.tgt=null,Sn&&Sn()}}}if(Ee>.05){let an=Math.hypot($,le)||1,$e=4*Math.min(1,Ee),on=Math.min($e*x,Ye),Sn=$/an*on,wi=le/an*on,Ci=!1;if(he(k.x+Sn,k.z+wi,k.z)?(k.x+=Sn,k.z+=wi,Ci=!0):he(k.x+Sn,k.z,k.z)?(k.x+=Sn,Ci=!0):he(k.x,k.z+wi,k.z)&&(k.z+=wi,Ci=!0),!Ci&&G.tgt&&(G.tgt.stuck=(G.tgt.stuck||0)+x,G.tgt.stuck>.6)){let cs=G.tgt.fn;G.tgt=null,cs&&Math.hypot(k.x-ui.x,k.z-ui.z)<3&&cs()}if(Ci){k.moving=!0,k.ph+=x*9*Math.min(1,Ee);let cs=$/an*Zi.x+le/an*Zi.z;Math.abs(cs)>.2&&(k.face=cs>0?1:-1)}G.talk&&Math.hypot(G.talk.x-k.x,G.talk.z-k.z)>6&&ot()}}if(n.island&&!G.exited&&k.z>vt+.5&&G.mode==="walk"){G.exited=!0;try{i.exit&&i.exit()}catch{}return}if(a){let $=G.mode==="walk"&&!G.exited&&k.z>vt-2&&Math.abs(k.x-Ui)<2;if(Un.classList.toggle("on",$),$){let le=qs(new N(Ui,G.low&&G.low.front?.5:2.7,vt-.15)),Ee=Xs();Un.style.left=le.x-Ee.left+"px",Un.style.top=le.y-Ee.top+"px"}}let X=G.inside;G.inside=k.z<vt-.05,X!==G.inside&&G.mode==="walk"&&(G.distT=G.inside?10.5:13,zn.textContent=G.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${o.name}\u300D`:"\u5E97\u5916",zn.classList.add("on"),clearTimeout(zn.t),zn.t=setTimeout(()=>zn.classList.remove("on"),1800));for(let $ of Qt){if($.moving=!1,$.kind2==="owner")continue;if($.state==="talk"){$.face=(k.x-$.x)*Zi.x+(k.z-$.z)*Zi.z>0?1:-1;continue}if($.state==="out"){if($.t-=x,$.t<=0){let $e=Math.random()<.5;$.x=$e?ys+4:_s-4,$.z=vt+fi(3.5,5.5),$.hidden=!1,$.alpha=0,$.stops=2+Math.floor(Math.random()*3);let on=He($);(!on||!mn($,on[0],on[1]))&&($.hidden=!0,$.t=3)}continue}if($.alpha=Math.min(1,($.alpha||0)+x*2),$.state==="walk")Uf($,x)&&($.state="idle",$.t=fi(3,7));else if($.state==="idle"){if($.t-=x,$.t<=0)if($.stops--,$.stops<=0){let $e=Math.random()<.5?ys+1:_s-2;mn($,$e,vt+4)?$.state="leave":$.t=2}else{let $e=He($);(!$e||!mn($,$e[0],$e[1]))&&($.t=2)}}else $.state==="leave"&&(Uf($,x)?($.hidden=!0,$.state="out",$.t=fi(4,12)):($.x<ys+3||$.x>_s-3)&&($.alpha=Math.max(0,Math.min($.alpha,Math.min($.x-ys,_s-$.x)/3))));let le=$.x-k.x,Ee=$.z-k.z,Ye=Math.hypot(le,Ee),an=.55;if(Ye<an&&Ye>.001&&$.state!=="walk"&&$.state!=="leave"){let $e=$.x+le/Ye*(an-Ye),on=$.z+Ee/Ye*(an-Ye);he($e,on,$.z)&&($.x=$e,$.z=on)}}if(Nn){let $=Nn;$.t-=x;let le=!1;if($.path&&$.path.length){let[Ye,an]=$.path[0],$e=Ye-$.x,on=an-$.z,Sn=Math.hypot($e,on);if(Sn<.05)$.path.shift();else{let wi=Math.min(Sn,1.1*x);$.x+=$e/Sn*wi,$.z+=on/Sn*wi,$.g.rotation.y=Math.atan2(-on,$e),le=!0}$.path.length||($.t=fi(3,8))}else if($.t<=0){let Ye=Se(!0),an=Ye[Math.floor(Math.random()*Ye.length)],$e=jt.find(wi=>wi.k==="catbed"),on=$e&&Math.random()<.35?[$e.x,$e.z]:an,Sn=on&&W($.x,$.z,on[0],on[1]);Sn&&Sn.length?($.path=Sn,$.sleep=!1):$.t=3,$e&&on&&on[0]===$e.x&&on[1]===$e.z&&($.sleep=!0)}$.ph+=x*(le?12:0),$.legs.forEach((Ye,an)=>{Ye.rotation.z=le?Math.sin($.ph+an*Math.PI)*.5:0}),$.tail.rotation.z=.8+Math.sin(b*2)*.25;let Ee=!le&&$.sleep&&jt.some(Ye=>Ye.k==="catbed"&&Math.hypot(Ye.g.position.x-$.x,Ye.g.position.z-$.z)<.4);$.g.position.set($.x,Ee?.1:0,$.z),$.g.scale.y=Ee?.75+Math.sin(b*1.5)*.03:1}let Z=k.x,Q=k.z,Rt=1.1;G.mode==="build"&&(G.inside?(Z=xe/2+I*2.2,Q=vt/2+D*2.2):(Z=Ui+I*2,Q=vt+2.5+D*2),Rt=.4),G.cam.x+=(Z-G.cam.x)*Math.min(1,x*(G.mode==="build"?4:12)),G.cam.z+=(Q-G.cam.z)*Math.min(1,x*(G.mode==="build"?4:12)),G.cam.y+=(Rt-G.cam.y)*Math.min(1,x*4);let Ne=To/Eo,me=Ne<1.45?1.45/Ne:1,oe=G.dist*me,Ke=G.mode==="build"?Math.max(.75,G.pitch):G.pitch;Es.set(G.cam.x+I*Math.cos(Ke)*oe,G.cam.y+Math.sin(Ke)*oe,G.cam.z+D*Math.cos(Ke)*oe),f.position.copy(Es),f.lookAt(G.cam.x,G.cam.y+.5,G.cam.z),v.position.copy(Es);let An=G.inside||G.mode==="build"&&G.inside;Pt.visible=!An;let pi=G.low={back:An&&Es.z<0,front:An&&Es.z>vt,left:An&&Es.x<0,right:An&&Es.x>xe};for(let $ in Re){let le=pi[$];for(let Ee of Re[$]){let Ye=le?.14:1;Ee.scale.y+=(Ye-Ee.scale.y)*Math.min(1,x*10)}}for(let $ of jt)if(Ae[$.k].L==="wall"){let le=Gt($.r);$.g.visible=!pi[le]||!An}ce.visible=!pi.front;for(let $ of U)$.visible=!(An&&(pi.left&&$.position.x<0||pi.right&&$.position.x>xe));C.intensity=M.intensity=An?14:6;let Hl=Math.atan2(Es.x-G.cam.x,Es.z-G.cam.z);for(let $ of bs){let le=!$.hidden,Ee=!An&&$.z<vt;if($.grp.visible=le,$.sh.visible=le,$.tag&&($.tag.visible=le&&!Ee),$.bub&&($.bub.visible=le&&!Ee&&$!==G.talk&&$.state!=="leave"),!le)continue;let Ye=$.w,an=$.h,$e=$.moving?1:0,on=Math.sin($.ph),Sn=$e?Math.abs(on)*.06:0,wi=$e?on*.06:Math.sin(b*1.6+$.ph)*.01,Ci=$e?1+Math.cos($.ph*2)*.025:1+Math.sin(b*1.6+$.ph)*.008,cs=$.state==="sleep"?Math.sin(b*1.2)*.015:0;$.grp.position.set($.x,Sn,$.z),$.m.rotation.set(0,Hl,wi*$.face+cs),$.m.scale.set(Ye*$.face*(2-Ci),an*Ci,1),$.mat.opacity=$.alpha==null?1:$.alpha,$.sh.position.set($.x,.025,$.z),$.sh.scale.set(Ye*.7,Ye*.4,1),$.tag&&($.tag.position.set($.x,an+.3,$.z),$.tag.material.opacity=$.alpha==null?1:$.alpha),$.bub&&$.bub.position.set($.x,an+($.tag?.82:.45)+Math.sin(b*2.3+$.ph)*.06,$.z)}Ue.rotation.x=Math.sin(b*1.7)*.05;for(let $ of Nt)$.material.opacity=.45+.12*Math.sin(b*6);for(let $ of tt)$.material.opacity=.5+.05*Math.sin(b*3+$.parent.position.x);for(let $ of jt){let le=$.g.userData;if(le.glows)for(let Ee of le.glows)Ee.material.opacity=(Ee.userData.o0||(Ee.userData.o0=Ee.material.opacity))*(.85+.15*Math.sin(b*5+$.x*1.7));if(le.swing&&(le.swing.rotation.z=Math.sin(b*1.5+$.x)*.06),le.wave&&(le.wave.rotation.x=-.6+Math.sin(b*4)*.5),le.fish&&le.fish.forEach((Ee,Ye)=>{let an=b*(.6+Ye*.2)+Ye*2;Ee.position.x=Math.cos(an)*.2,Ee.position.z=Math.sin(an)*.12,Ee.rotation.y=-an+Math.PI/2*(Ye%2?1:-1)}),le.spin&&(le.spin.rotation.y=b*3),le.hands){let Ee=new Date;le.hands[0].rotation.z=-(Ee.getHours()%12+Ee.getMinutes()/60)/12*Math.PI*2,le.hands[1].rotation.z=-Ee.getMinutes()/60*Math.PI*2,le.hands.forEach(Ye=>{let an=Ye.rotation.z,$e=Ye.geometry.parameters.height/2;Ye.position.x=-Math.sin(an)*$e,Ye.position.y=le.handY+Math.cos(an)*$e})}}for(let $ of as)$.position.y=Math.abs(Math.sin(b*3+$.userData.ph))*.12;{let $=pe.geometry.attributes.position.array;for(let le=0;le<Pe;le++){let Ee=Jt[le];$[le*3]+=(Ee.vx+Math.sin(b*1.5+Ee.ph)*.3)*x,$[le*3+1]+=Ee.vy*x,$[le*3+2]+=Math.cos(b*1.2+Ee.ph)*.2*x,$[le*3+1]<.02&&Kt(le)}pe.geometry.attributes.position.needsUpdate=!0}Ht.children[1].rotation.z=Math.sin(b*.8)*.08,Ht.children[4].rotation.y=Math.sin(b*2)*.4;{let $=s?jt.find(Ee=>Ee.k==="register"):null,le=$?bt():0;Et.visible=!!($&&le>0&&G.mode==="walk"&&G.inside),Et.visible&&(Et.position.set($.g.position.x,1.75+Math.sin(b*3)*.1,$.g.position.z),Et.material.rotation=0,Et.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let $=yt.length-1;$>=0;$--){let le=yt[$],Ee=le.userData;Ee.t+=x,Ee.v.y-=9*x,le.position.addScaledVector(Ee.v,x),le.material.opacity=Math.max(0,1-Ee.t/1.1),Ee.t>1.1&&(h.remove(le),le.material.dispose(),yt.splice($,1))}G.sel&&(wn.material.opacity=.7+.3*Math.sin(b*6)),l.render(h,f)}return G.raf=requestAnimationFrame(Nf),Od}return qd(I_);})();
