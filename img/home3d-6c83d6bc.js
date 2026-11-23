var Home3D=(()=>{var Ll=Object.defineProperty;var Ed=Object.getOwnPropertyDescriptor;var Ad=Object.getOwnPropertyNames;var Rd=Object.prototype.hasOwnProperty;var Cd=(i,t)=>{for(var e in t)Ll(i,e,{get:t[e],enumerable:!0})},Id=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ad(t))!Rd.call(i,s)&&s!==e&&Ll(i,s,{get:()=>t[s],enumerable:!(n=Ed(t,s))||n.enumerable});return i};var Pd=i=>Id(Ll({},"__esModule",{value:!0}),i);var fy={};Cd(fy,{D0:()=>mi,D1:()=>gi,DX:()=>us,EXO:()=>Fi,H3CSS:()=>hy,RD:()=>Mt,RW:()=>me,STARS:()=>du,WH:()=>kn,cozyOf:()=>la,dailyIncome:()=>fu,defaultEx:()=>au,demoHome:()=>ly,freshHome:()=>yd,island:()=>md,starsOf:()=>uu,start:()=>uy});var Ld=0,Su=1,Dd=2;var Ff=1,Hh=2,Ss=3,Ys=0,Gn=1,Pn=2,Ws=0,Kr=1,rs=2,wu=3,Tu=4,Ud=5,dr=100,Nd=101,Fd=102,zd=103,Od=104,Bd=200,kd=201,Vd=202,Hd=203,mc=204,gc=205,Gd=206,Wd=207,Xd=208,qd=209,Yd=210,$d=211,Zd=212,Jd=213,Kd=214,xc=0,_c=1,yc=2,eo=3,vc=4,Mc=5,bc=6,Sc=7,Gh=0,jd=1,Qd=2,Xs=0,tp=1,ep=2,np=3,ip=4,sp=5,rp=6,op=7;var zf=300,no=301,io=302,wc=303,Tc=304,vl=306,Rs=1e3,mr=1001,Ec=1002,Wi=1003,ap=1004;var xa=1005;var ss=1006,Dl=1007;var gr=1008;var Cs=1009,Of=1010,Bf=1011,qo=1012,Wh=1013,xr=1014,ws=1015,ra=1016,Xh=1017,qh=1018,so=1020,kf=35902,Vf=1021,Hf=1022,Gi=1023,Gf=1024,Wf=1025,jr=1026,ro=1027,Xf=1028,Yh=1029,qf=1030,$h=1031;var Zh=1033,Ya=33776,$a=33777,Za=33778,Ja=33779,Ac=35840,Rc=35841,Cc=35842,Ic=35843,Pc=36196,Lc=37492,Dc=37496,Uc=37808,Nc=37809,Fc=37810,zc=37811,Oc=37812,Bc=37813,kc=37814,Vc=37815,Hc=37816,Gc=37817,Wc=37818,Xc=37819,qc=37820,Yc=37821,Ka=36492,$c=36494,Zc=36495,Yf=36283,Jc=36284,Kc=36285,jc=36286;var ja=2300,Qc=2301,Ul=2302,Eu=2400,Au=2401,Ru=2402;var lp=3200,cp=3201;var $f=0,hp=1,Hs="",Fn="srgb",yo="srgb-linear",Ml="linear",an="srgb";var Pr=7680;var Cu=519,up=512,fp=513,dp=514,Zf=515,pp=516,mp=517,gp=518,xp=519,th=35044;var Iu="300 es",Ts=2e3,Qa=2001,$s=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nl=Math.PI/180,eh=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]+"-"+ni[t&255]+ni[t>>8&255]+"-"+ni[t>>16&15|64]+ni[t>>24&255]+"-"+ni[e&63|128]+ni[e>>8&255]+"-"+ni[e>>16&255]+ni[e>>24&255]+ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]).toLowerCase()}function $n(i,t,e){return Math.max(t,Math.min(e,i))}function _p(i,t){return(i%t+t)%t}function Fl(i,t,e){return(1-e)*i+e*t}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($n(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class i{constructor(t,e,n,s,r,o,a,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],f=n[7],d=n[2],p=n[5],y=n[8],T=s[0],g=s[3],m=s[6],S=s[1],E=s[4],b=s[7],W=s[2],N=s[5],V=s[8];return r[0]=o*T+a*S+l*W,r[3]=o*g+a*E+l*N,r[6]=o*m+a*b+l*V,r[1]=h*T+u*S+f*W,r[4]=h*g+u*E+f*N,r[7]=h*m+u*b+f*V,r[2]=d*T+p*S+y*W,r[5]=d*g+p*E+y*N,r[8]=d*m+p*b+y*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=u*o-a*h,d=a*l-u*r,p=h*r-o*l,y=e*f+n*d+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/y;return t[0]=f*T,t[1]=(s*h-u*n)*T,t[2]=(a*n-s*o)*T,t[3]=d*T,t[4]=(u*e-s*l)*T,t[5]=(s*r-a*e)*T,t[6]=p*T,t[7]=(n*l-h*e)*T,t[8]=(o*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zl.makeScale(t,e)),this}rotate(t){return this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zl=new Ue;function Jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){let i=Yo("canvas");return i.style.display="block",i}var Pu={};function Vo(i){i in Pu||(Pu[i]=!0,console.warn(i))}function vp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $e={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===an&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===an&&(i.r=Qr(i.r),i.g=Qr(i.g),i.b=Qr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hs?Ml:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lu=[.64,.33,.3,.6,.15,.06],Du=[.2126,.7152,.0722],Uu=[.3127,.329],Nu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[yo]:{primaries:Lu,whitePoint:Uu,transfer:Ml,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:Du,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:Lu,whitePoint:Uu,transfer:an,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:Du,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});var Lr,nh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Lr===void 0&&(Lr=Yo("canvas")),Lr.width=t.width,Lr.height=t.height;let n=Lr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Lr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Yo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(As(e[n]/255)*255):e[n]=As(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,tl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ol(s[o].image)):r.push(Ol(s[o]))}else r=Ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ol(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wp=0,yi=class i extends $s{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mr,s=mr,r=ss,o=gr,a=Gi,l=Cs,h=i.DEFAULT_ANISOTROPY,u=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Es(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=zf;yi.DEFAULT_ANISOTROPY=1;var cn=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],f=l[8],d=l[1],p=l[5],y=l[9],T=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-T)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+T)<.1&&Math.abs(y+g)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(h+1)/2,b=(p+1)/2,W=(m+1)/2,N=(u+d)/4,V=(f+T)/4,H=(y+g)/4;return E>b&&E>W?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=N/n,r=V/n):b>W?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=N/s,r=H/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=V/r,s=H/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-y)*(g-y)+(f-T)*(f-T)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-y)/S,this.y=(f-T)/S,this.z=(d-u)/S,this.w=Math.acos((h+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ih=class extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new cn(0,0,t,e),this.scissorTest=!1,this.viewport=new cn(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ss,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new yi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new tl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends ih{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},el=class extends yi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sh=class extends yi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],y=r[o+2],T=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=y,t[e+3]=T;return}if(f!==T||l!==d||h!==p||u!==y){let g=1-a,m=l*d+h*p+u*y+f*T,S=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let W=Math.sqrt(E),N=Math.atan2(W,m*S);g=Math.sin(g*N)/W,a=Math.sin(a*N)/W}let b=a*S;if(l=l*g+d*b,h=h*g+p*b,u=u*g+y*b,f=f*g+T*b,g===1-a){let W=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=W,h*=W,u*=W,f*=W}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o],d=r[o+1],p=r[o+2],y=r[o+3];return t[e]=a*y+u*f+l*p-h*d,t[e+1]=l*y+u*d+h*f-a*p,t[e+2]=h*y+u*p+a*d-l*f,t[e+3]=u*y-a*f-l*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(s/2),f=a(r/2),d=l(n/2),p=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=d*u*f+h*p*y,this._y=h*p*f-d*u*y,this._z=h*u*y+d*p*f,this._w=h*u*f-d*p*y;break;case"YXZ":this._x=d*u*f+h*p*y,this._y=h*p*f-d*u*y,this._z=h*u*y-d*p*f,this._w=h*u*f+d*p*y;break;case"ZXY":this._x=d*u*f-h*p*y,this._y=h*p*f+d*u*y,this._z=h*u*y+d*p*f,this._w=h*u*f-d*p*y;break;case"ZYX":this._x=d*u*f-h*p*y,this._y=h*p*f+d*u*y,this._z=h*u*y-d*p*f,this._w=h*u*f+d*p*y;break;case"YZX":this._x=d*u*f+h*p*y,this._y=h*p*f+d*u*y,this._z=h*u*y-d*p*f,this._w=h*u*f-d*p*y;break;case"XZY":this._x=d*u*f-h*p*y,this._y=h*p*f-d*u*y,this._z=h*u*y+d*p*f,this._w=h*u*f+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($n(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-s*a,this._w=o*u-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),f=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*h+o*f-a*u,this.y=n+l*u+a*h-r*f,this.z=s+l*f+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($n(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new F,zu=new Zs,Is=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ki):ki.fromBufferAttribute(r,o),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(t.matrixWorld),this.union(_a)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),ya.subVectors(this.max,Do),Dr.subVectors(t.a,Do),Ur.subVectors(t.b,Do),Nr.subVectors(t.c,Do),Fs.subVectors(Ur,Dr),zs.subVectors(Nr,Ur),or.subVectors(Dr,Nr);let e=[0,-Fs.z,Fs.y,0,-zs.z,zs.y,0,-or.z,or.y,Fs.z,0,-Fs.x,zs.z,0,-zs.x,or.z,0,-or.x,-Fs.y,Fs.x,0,-zs.y,zs.x,0,-or.y,or.x,0];return!kl(e,Dr,Ur,Nr,ya)||(e=[1,0,0,0,1,0,0,0,1],!kl(e,Dr,Ur,Nr,ya))?!1:(va.crossVectors(Fs,zs),e=[va.x,va.y,va.z],kl(e,Dr,Ur,Nr,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_s=[new F,new F,new F,new F,new F,new F,new F,new F],ki=new F,_a=new Is,Dr=new F,Ur=new F,Nr=new F,Fs=new F,zs=new F,or=new F,Do=new F,ya=new F,va=new F,ar=new F;function kl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ar.fromArray(i,r);let a=s.x*Math.abs(ar.x)+s.y*Math.abs(ar.y)+s.z*Math.abs(ar.z),l=t.dot(ar),h=e.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var Tp=new Is,Uo=new F,Vl=new F,oo=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);let e=Uo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Uo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(Vl)),this.expandByPoint(Uo.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ys=new F,Hl=new F,Ma=new F,Os=new F,Gl=new F,ba=new F,Wl=new F,$o=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ys.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,e),ys.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hl.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Os.copy(this.origin).sub(Hl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=Os.dot(this.direction),l=-Os.dot(Ma),h=Os.lengthSq(),u=Math.abs(1-o*o),f,d,p,y;if(u>0)if(f=o*l-a,d=o*a-l,y=r*u,f>=0)if(d>=-y)if(d<=y){let T=1/u;f*=T,d*=T,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+h}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+h;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+h;else d<=-y?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+h):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Hl).addScaledVector(Ma,d),p}intersectSphere(t,e){ys.subVectors(t.center,this.origin);let n=ys.dot(this.direction),s=ys.dot(ys)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,e,n,s,r){Gl.subVectors(e,t),ba.subVectors(n,t),Wl.crossVectors(Gl,ba);let o=this.direction.dot(Wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Os.subVectors(this.origin,t);let l=a*this.direction.dot(ba.crossVectors(Os,ba));if(l<0)return null;let h=a*this.direction.dot(Gl.cross(Os));if(h<0||l+h>o)return null;let u=-a*Os.dot(Wl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class i{constructor(t,e,n,s,r,o,a,l,h,u,f,d,p,y,T,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,u,f,d,p,y,T,g)}set(t,e,n,s,r,o,a,l,h,u,f,d,p,y,T,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=y,m[11]=T,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fr.setFromMatrixColumn(t,0).length(),r=1/Fr.setFromMatrixColumn(t,1).length(),o=1/Fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*u,p=o*f,y=a*u,T=a*f;e[0]=l*u,e[4]=-l*f,e[8]=h,e[1]=p+y*h,e[5]=d-T*h,e[9]=-a*l,e[2]=T-d*h,e[6]=y+p*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,p=l*f,y=h*u,T=h*f;e[0]=d+T*a,e[4]=y*a-p,e[8]=o*h,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-y,e[6]=T+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,p=l*f,y=h*u,T=h*f;e[0]=d-T*a,e[4]=-o*f,e[8]=y+p*a,e[1]=p+y*a,e[5]=o*u,e[9]=T-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,p=o*f,y=a*u,T=a*f;e[0]=l*u,e[4]=y*h-p,e[8]=d*h+T,e[1]=l*f,e[5]=T*h+d,e[9]=p*h-y,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*h,y=a*l,T=a*h;e[0]=l*u,e[4]=T-d*f,e[8]=y*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=p*f+y,e[10]=d-T*f}else if(t.order==="XZY"){let d=o*l,p=o*h,y=a*l,T=a*h;e[0]=l*u,e[4]=-f,e[8]=h*u,e[1]=d*f+T,e[5]=o*u,e[9]=p*f-y,e[2]=y*f-p,e[6]=a*u,e[10]=T*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,Ap)}lookAt(t,e,n){let s=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Bs.crossVectors(n,Si),Bs.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Bs.crossVectors(n,Si)),Bs.normalize(),Sa.crossVectors(Si,Bs),s[0]=Bs.x,s[4]=Sa.x,s[8]=Si.x,s[1]=Bs.y,s[5]=Sa.y,s[9]=Si.y,s[2]=Bs.z,s[6]=Sa.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],f=n[5],d=n[9],p=n[13],y=n[2],T=n[6],g=n[10],m=n[14],S=n[3],E=n[7],b=n[11],W=n[15],N=s[0],V=s[4],H=s[8],P=s[12],C=s[1],k=s[5],it=s[9],nt=s[13],st=s[2],ct=s[6],rt=s[10],St=s[14],at=s[3],Nt=s[7],Gt=s[11],Vt=s[15];return r[0]=o*N+a*C+l*st+h*at,r[4]=o*V+a*k+l*ct+h*Nt,r[8]=o*H+a*it+l*rt+h*Gt,r[12]=o*P+a*nt+l*St+h*Vt,r[1]=u*N+f*C+d*st+p*at,r[5]=u*V+f*k+d*ct+p*Nt,r[9]=u*H+f*it+d*rt+p*Gt,r[13]=u*P+f*nt+d*St+p*Vt,r[2]=y*N+T*C+g*st+m*at,r[6]=y*V+T*k+g*ct+m*Nt,r[10]=y*H+T*it+g*rt+m*Gt,r[14]=y*P+T*nt+g*St+m*Vt,r[3]=S*N+E*C+b*st+W*at,r[7]=S*V+E*k+b*ct+W*Nt,r[11]=S*H+E*it+b*rt+W*Gt,r[15]=S*P+E*nt+b*St+W*Vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],f=t[6],d=t[10],p=t[14],y=t[3],T=t[7],g=t[11],m=t[15];return y*(+r*l*f-s*h*f-r*a*d+n*h*d+s*a*p-n*l*p)+T*(+e*l*p-e*h*d+r*o*d-s*o*p+s*h*u-r*l*u)+g*(+e*h*f-e*a*p-r*o*f+n*o*p+r*a*u-n*h*u)+m*(-s*a*u-e*l*f+e*a*d+s*o*f-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],p=t[11],y=t[12],T=t[13],g=t[14],m=t[15],S=f*g*h-T*d*h+T*l*p-a*g*p-f*l*m+a*d*m,E=y*d*h-u*g*h-y*l*p+o*g*p+u*l*m-o*d*m,b=u*T*h-y*f*h+y*a*p-o*T*p-u*a*m+o*f*m,W=y*f*l-u*T*l-y*a*d+o*T*d+u*a*g-o*f*g,N=e*S+n*E+s*b+r*W;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return t[0]=S*V,t[1]=(T*d*r-f*g*r-T*s*p+n*g*p+f*s*m-n*d*m)*V,t[2]=(a*g*r-T*l*r+T*s*h-n*g*h-a*s*m+n*l*m)*V,t[3]=(f*l*r-a*d*r-f*s*h+n*d*h+a*s*p-n*l*p)*V,t[4]=E*V,t[5]=(u*g*r-y*d*r+y*s*p-e*g*p-u*s*m+e*d*m)*V,t[6]=(y*l*r-o*g*r-y*s*h+e*g*h+o*s*m-e*l*m)*V,t[7]=(o*d*r-u*l*r+u*s*h-e*d*h-o*s*p+e*l*p)*V,t[8]=b*V,t[9]=(y*f*r-u*T*r-y*n*p+e*T*p+u*n*m-e*f*m)*V,t[10]=(o*T*r-y*a*r+y*n*h-e*T*h-o*n*m+e*a*m)*V,t[11]=(u*a*r-o*f*r-u*n*h+e*f*h+o*n*p-e*a*p)*V,t[12]=W*V,t[13]=(u*T*s-y*f*s+y*n*d-e*T*d-u*n*g+e*f*g)*V,t[14]=(y*a*s-o*T*s-y*n*l+e*T*l+o*n*g-e*a*g)*V,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*d+e*a*d)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+n,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,f=a+a,d=r*h,p=r*u,y=r*f,T=o*u,g=o*f,m=a*f,S=l*h,E=l*u,b=l*f,W=n.x,N=n.y,V=n.z;return s[0]=(1-(T+m))*W,s[1]=(p+b)*W,s[2]=(y-E)*W,s[3]=0,s[4]=(p-b)*N,s[5]=(1-(d+m))*N,s[6]=(g+S)*N,s[7]=0,s[8]=(y+E)*V,s[9]=(g-S)*V,s[10]=(1-(d+T))*V,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fr.set(s[0],s[1],s[2]).length(),o=Fr.set(s[4],s[5],s[6]).length(),a=Fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Vi.copy(this);let h=1/r,u=1/o,f=1/a;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=u,Vi.elements[5]*=u,Vi.elements[6]*=u,Vi.elements[8]*=f,Vi.elements[9]*=f,Vi.elements[10]*=f,e.setFromRotationMatrix(Vi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ts){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,y;if(a===Ts)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Qa)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ts){let l=this.elements,h=1/(e-t),u=1/(n-s),f=1/(o-r),d=(e+t)*h,p=(n+s)*u,y,T;if(a===Ts)y=(o+r)*f,T=-2*f;else if(a===Qa)y=r*f,T=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=T,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fr=new F,Vi=new un,Ep=new F(0,0,0),Ap=new F(1,1,1),Bs=new F,Sa=new F,Si=new F,Ou=new un,Bu=new Zs,os=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rp=0,ku=new F,zr=new Zs,vs=new un,wa=new F,No=new F,Cp=new F,Ip=new Zs,Vu=new F(1,0,0),Hu=new F(0,1,0),Gu=new F(0,0,1),Wu={type:"added"},Pp={type:"removed"},Or={type:"childadded",child:null},Xl={type:"childremoved",child:null},Zn=class i extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new os,n=new Zs,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new un},normalMatrix:{value:new Ue}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(No,wa,this.up):vs.lookAt(wa,No,this.up),this.quaternion.setFromRotationMatrix(vs),s&&(vs.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(vs),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),Or.child=t,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vs.multiply(t.parent.matrixWorld)),t.applyMatrix4(vs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Zn.DEFAULT_UP=new F(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new F,Ms=new F,ql=new F,bs=new F,Br=new F,kr=new F,Xu=new F,Yl=new F,$l=new F,Zl=new F,Jl=new cn,Kl=new cn,jl=new cn,Gs=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hi.subVectors(t,e),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hi.subVectors(s,e),Ms.subVectors(n,e),ql.subVectors(t,e);let o=Hi.dot(Hi),a=Hi.dot(Ms),l=Hi.dot(ql),h=Ms.dot(Ms),u=Ms.dot(ql),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(h*l-a*u)*d,y=(o*u-a*l)*d;return r.set(1-p-y,y,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(o,bs.y),l.addScaledVector(a,bs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jl.setScalar(0),Kl.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,n),jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(Kl,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(t,e,n,s){return Hi.subVectors(n,e),Ms.subVectors(t,e),Hi.cross(Ms).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Hi.cross(Ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Br.subVectors(s,n),kr.subVectors(r,n),Yl.subVectors(t,n);let l=Br.dot(Yl),h=kr.dot(Yl);if(l<=0&&h<=0)return e.copy(n);$l.subVectors(t,s);let u=Br.dot($l),f=kr.dot($l);if(u>=0&&f<=u)return e.copy(s);let d=l*f-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Br,o);Zl.subVectors(t,r);let p=Br.dot(Zl),y=kr.dot(Zl);if(y>=0&&p<=y)return e.copy(r);let T=p*h-l*y;if(T<=0&&h>=0&&y<=0)return a=h/(h-y),e.copy(n).addScaledVector(kr,a);let g=u*y-p*f;if(g<=0&&f-u>=0&&p-y>=0)return Xu.subVectors(r,s),a=(f-u)/(f-u+(p-y)),e.copy(s).addScaledVector(Xu,a);let m=1/(g+T+d);return o=T*m,a=d*m,e.copy(n).addScaledVector(Br,o).addScaledVector(kr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$e.workingColorSpace){return this.r=t,this.g=e,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$e.workingColorSpace){if(t=_p(t,1),e=$n(e,0,1),n=$n(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ql(o,r,t+1/3),this.g=Ql(o,r,t),this.b=Ql(o,r,t-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(t,e=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let n=Kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return $e.fromWorkingColorSpace(ii.copy(this),t),Math.round($n(ii.r*255,0,255))*65536+Math.round($n(ii.g*255,0,255))*256+Math.round($n(ii.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$e.workingColorSpace){$e.fromWorkingColorSpace(ii.copy(this),e);let n=ii.r,s=ii.g,r=ii.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=$e.workingColorSpace){return $e.fromWorkingColorSpace(ii.copy(this),e),t.r=ii.r,t.g=ii.g,t.b=ii.b,t}getStyle(t=Fn){$e.fromWorkingColorSpace(ii.copy(this),t);let e=ii.r,n=ii.g,s=ii.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ks),this.setHSL(ks.h+t,ks.s+e,ks.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ks),t.getHSL(Ta);let n=Fl(ks.h,Ta.h,e),s=Fl(ks.s,Ta.s,e),r=Fl(ks.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new Se;Se.NAMES=Kf;var Lp=0,Ps=class extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Es(),this.name="",this.blending=Kr,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==Ys&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends Ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Dn=new F,Ea=new Et,di=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=ws,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix3(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix4(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyNormalMatrix(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.transformDirection(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}};var nl=class extends di{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var il=class extends di{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ee=class extends di{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dp=0,Pi=new un,tc=new Zn,Vr=new F,wi=new Is,Fo=new Is,Hn=new F,fn=class i extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?il:nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,n){return Pi.makeTranslation(t,e,n),this.applyMatrix4(Pi),this}scale(t,e,n){return Pi.makeScale(t,e,n),this.applyMatrix4(Pi),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(wi.min,Fo.min),wi.expandByPoint(Hn),Hn.addVectors(wi.max,Fo.max),wi.expandByPoint(Hn)):(wi.expandByPoint(Fo.min),wi.expandByPoint(Fo.max))}wi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Hn.fromBufferAttribute(a,h),l&&(Vr.fromBufferAttribute(t,h),Hn.add(Vr)),s=Math.max(s,n.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<n.count;H++)a[H]=new F,l[H]=new F;let h=new F,u=new F,f=new F,d=new Et,p=new Et,y=new Et,T=new F,g=new F;function m(H,P,C){h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,C),d.fromBufferAttribute(r,H),p.fromBufferAttribute(r,P),y.fromBufferAttribute(r,C),u.sub(h),f.sub(h),p.sub(d),y.sub(d);let k=1/(p.x*y.y-y.x*p.y);isFinite(k)&&(T.copy(u).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(k),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(k),a[H].add(T),a[P].add(T),a[C].add(T),l[H].add(g),l[P].add(g),l[C].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let H=0,P=S.length;H<P;++H){let C=S[H],k=C.start,it=C.count;for(let nt=k,st=k+it;nt<st;nt+=3)m(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let E=new F,b=new F,W=new F,N=new F;function V(H){W.fromBufferAttribute(s,H),N.copy(W);let P=a[H];E.copy(P),E.sub(W.multiplyScalar(W.dot(P))).normalize(),b.crossVectors(N,P);let k=b.dot(l[H])<0?-1:1;o.setXYZW(H,E.x,E.y,E.z,k)}for(let H=0,P=S.length;H<P;++H){let C=S[H],k=C.start,it=C.count;for(let nt=k,st=k+it;nt<st;nt+=3)V(t.getX(nt+0)),V(t.getX(nt+1)),V(t.getX(nt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,h=new F,u=new F,f=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){let y=t.getX(d+0),T=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,T),o.fromBufferAttribute(e,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,g),a.add(u),l.add(u),h.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Hn.fromBufferAttribute(t,e),Hn.normalize(),t.setXYZ(e,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,f=a.normalized,d=new h.constructor(l.length*u),p=0,y=0;for(let T=0,g=l.length;T<g;T++){a.isInterleavedBufferAttribute?p=l[T]*a.data.stride+a.offset:p=l[T]*u;for(let m=0;m<u;m++)d[y++]=h[p++]}return new di(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,f=h.length;u<f;u++){let d=h[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let f=0,d=h.length;f<d;f++){let p=h[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],f=r[h];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qu=new un,lr=new $o,Aa=new oo,Yu=new F,Ra=new F,Ca=new F,Ia=new F,ec=new F,Pa=new F,$u=new F,La=new F,gt=class extends Zn{constructor(t=new fn,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],f=r[l];u!==0&&(ec.fromBufferAttribute(f,t),o?Pa.addScaledVector(ec,u):Pa.addScaledVector(ec.sub(e),u))}e.add(Pa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),lr.copy(t.ray).recast(t.near),!(Aa.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Aa,Yu)===null||lr.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(qu.copy(r).invert(),lr.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,T=d.length;y<T;y++){let g=d[y],m=o[g.materialIndex],S=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=S,W=E;b<W;b+=3){let N=a.getX(b),V=a.getX(b+1),H=a.getX(b+2);s=Da(this,m,t,n,h,u,f,N,V,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,p.start),T=Math.min(a.count,p.start+p.count);for(let g=y,m=T;g<m;g+=3){let S=a.getX(g),E=a.getX(g+1),b=a.getX(g+2);s=Da(this,o,t,n,h,u,f,S,E,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,T=d.length;y<T;y++){let g=d[y],m=o[g.materialIndex],S=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=S,W=E;b<W;b+=3){let N=b,V=b+1,H=b+2;s=Da(this,m,t,n,h,u,f,N,V,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,p.start),T=Math.min(l.count,p.start+p.count);for(let g=y,m=T;g<m;g+=3){let S=g,E=g+1,b=g+2;s=Da(this,o,t,n,h,u,f,S,E,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Up(i,t,e,n,s,r,o,a){let l;if(t.side===Gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ys,a),l===null)return null;La.copy(a),La.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(La);return h<e.near||h>e.far?null:{distance:h,point:La.clone(),object:i}}function Da(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Ra),i.getVertexPosition(l,Ca),i.getVertexPosition(h,Ia);let u=Up(i,t,e,n,Ra,Ca,Ia,$u);if(u){let f=new F;Gs.getBarycoord($u,Ra,Ca,Ia,f),s&&(u.uv=Gs.getInterpolatedAttribute(s,a,l,h,f,new Et)),r&&(u.uv1=Gs.getInterpolatedAttribute(r,a,l,h,f,new Et)),o&&(u.normal=Gs.getInterpolatedAttribute(o,a,l,h,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new F,materialIndex:0};Gs.getNormal(Ra,Ca,Ia,d.normal),u.face=d,u.barycoord=f}return u}var hn=class i extends fn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],f=[],d=0,p=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,s,o,2),y("x","z","y",1,-1,t,n,-e,s,o,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2));function y(T,g,m,S,E,b,W,N,V,H,P){let C=b/V,k=W/H,it=b/2,nt=W/2,st=N/2,ct=V+1,rt=H+1,St=0,at=0,Nt=new F;for(let Gt=0;Gt<rt;Gt++){let Vt=Gt*k-nt;for(let he=0;he<ct;he++){let _e=he*C-it;Nt[T]=_e*S,Nt[g]=Vt*E,Nt[m]=st,h.push(Nt.x,Nt.y,Nt.z),Nt[T]=0,Nt[g]=0,Nt[m]=N>0?1:-1,u.push(Nt.x,Nt.y,Nt.z),f.push(he/V),f.push(1-Gt/H),St+=1}}for(let Gt=0;Gt<H;Gt++)for(let Vt=0;Vt<V;Vt++){let he=d+Vt+ct*Gt,_e=d+Vt+ct*(Gt+1),pt=d+(Vt+1)+ct*(Gt+1),At=d+(Vt+1)+ct*Gt;l.push(he,_e,At),l.push(_e,pt,At),at+=6}a.addGroup(p,at,P),p+=at,d+=St}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ao(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fi(i){let t={};for(let e=0;e<i.length;e++){let n=ao(i[e]);for(let s in n)t[s]=n[s]}return t}function Np(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$e.workingColorSpace}var Fp={clone:ao,merge:fi},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,as=class extends Ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=Np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sl=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ts}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vs=new F,Zu=new Et,Ju=new Et,zn=class extends sl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vs.x,Vs.y).multiplyScalar(-t/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vs.x,Vs.y).multiplyScalar(-t/Vs.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,Ju),e.subVectors(Ju,Zu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hr=-90,Gr=1,rh=class extends Zn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Hr,Gr,t,e);s.layers=this.layers,this.add(s);let r=new zn(Hr,Gr,t,e);r.layers=this.layers,this.add(r);let o=new zn(Hr,Gr,t,e);o.layers=this.layers,this.add(o);let a=new zn(Hr,Gr,t,e);a.layers=this.layers,this.add(a);let l=new zn(Hr,Gr,t,e);l.layers=this.layers,this.add(l);let h=new zn(Hr,Gr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Ts)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},rl=class extends yi{constructor(t,e,n,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:no,super(t,e,n,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},oh=class extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ss}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Ws});r.uniforms.tEquirect.value=e;let o=new gt(s,r),a=e.minFilter;return e.minFilter===gr&&(e.minFilter=ss),new rh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},nc=new F,Bp=new F,kp=new Ue,Ti=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nc.subVectors(n,e).cross(Bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kp.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new oo,Ua=new F,Jo=class{constructor(t=new Ti,e=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ts){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],y=s[9],T=s[10],g=s[11],m=s[12],S=s[13],E=s[14],b=s[15];if(n[0].setComponents(l-r,d-h,g-p,b-m).normalize(),n[1].setComponents(l+r,d+h,g+p,b+m).normalize(),n[2].setComponents(l+o,d+u,g+y,b+S).normalize(),n[3].setComponents(l-o,d-u,g-y,b-S).normalize(),n[4].setComponents(l-a,d-f,g-T,b-E).normalize(),e===Ts)n[5].setComponents(l+a,d+f,g+T,b+E).normalize();else if(e===Qa)n[5].setComponents(a,f,T,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ua.x=s.normal.x>0?t.max.x:t.min.x,Ua.y=s.normal.y>0?t.max.y:t.min.y,Ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vp(i){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,f=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,u),a.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,h){let u=l.array,f=l.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,u);else{f.sort((p,y)=>p.start-y.start);let d=0;for(let p=1;p<f.length;p++){let y=f[d],T=f[p];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++d,f[d]=T)}f.length=d+1;for(let p=0,y=f.length;p<y;p++){let T=f[p];i.bufferSubData(h,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var qe=class i extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,u=l+1,f=t/a,d=e/l,p=[],y=[],T=[],g=[];for(let m=0;m<u;m++){let S=m*d-o;for(let E=0;E<h;E++){let b=E*f-r;y.push(b,-S,0),T.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let E=S+h*m,b=S+h*(m+1),W=S+1+h*(m+1),N=S+1+h*m;p.push(E,b,N),p.push(b,W,N)}this.setIndex(p),this.setAttribute("position",new Ee(y,3)),this.setAttribute("normal",new Ee(T,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,um=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,km=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Hp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:Kp,begin_vertex:jp,beginnormal_vertex:Qp,bsdfs:tm,iridescence_fragment:em,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:om,color_fragment:am,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:hm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:xm,colorspace_fragment:_m,colorspace_pars_fragment:ym,envmap_fragment:vm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Um,envmap_vertex:wm,fog_vertex:Tm,fog_pars_vertex:Em,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Im,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Fm,lights_phong_fragment:zm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:km,lights_fragment_begin:Vm,lights_fragment_maps:Hm,lights_fragment_end:Gm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:$m,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:Km,metalnessmap_fragment:jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:t0,morphcolor_vertex:e0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:x0,project_vertex:_0,dithering_fragment:y0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:I0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:F0,uv_pars_fragment:z0,uv_pars_vertex:O0,uv_vertex:B0,worldpos_vertex:k0,background_vert:V0,background_frag:H0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:$0,distanceRGBA_vert:Z0,distanceRGBA_frag:J0,equirect_vert:K0,equirect_frag:j0,linedashed_vert:Q0,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:xg,shadow_frag:_g,sprite_vert:yg,sprite_frag:vg},Ht={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ns={basic:{uniforms:fi([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:fi([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:fi([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:fi([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:fi([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:fi([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:fi([Ht.points,Ht.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:fi([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:fi([Ht.common,Ht.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:fi([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:fi([Ht.sprite,Ht.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:fi([Ht.common,Ht.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:fi([Ht.lights,Ht.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ns.physical={uniforms:fi([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Na={r:0,b:0,g:0},hr=new os,Mg=new un;function bg(i,t,e,n,s,r,o){let a=new Se(0),l=r===!0?0:1,h,u,f=null,d=0,p=null;function y(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function T(S){let E=!1,b=y(S);b===null?m(a,l):b&&b.isColor&&(m(b,1),E=!0);let W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,o):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,E){let b=y(E);b&&(b.isCubeTexture||b.mapping===vl)?(u===void 0&&(u=new gt(new hn(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:ao(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(W,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hr.copy(E.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(hr)),u.material.toneMapped=$e.getTransfer(b.colorSpace)!==an,(f!==b||d!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new gt(new qe(2,2),new as({name:"BackgroundMaterial",uniforms:ao(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=$e.getTransfer(b.colorSpace)!==an,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function m(S,E){S.getRGB(Na,jf(i)),n.buffers.color.setClear(Na.r,Na.g,Na.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:T,addToRenderList:g}}function Sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(C,k,it,nt,st){let ct=!1,rt=f(nt,it,k);r!==rt&&(r=rt,h(r.object)),ct=p(C,nt,it,st),ct&&y(C,nt,it,st),st!==null&&t.update(st,i.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,b(C,k,it,nt),st!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return i.createVertexArray()}function h(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,k,it){let nt=it.wireframe===!0,st=n[C.id];st===void 0&&(st={},n[C.id]=st);let ct=st[k.id];ct===void 0&&(ct={},st[k.id]=ct);let rt=ct[nt];return rt===void 0&&(rt=d(l()),ct[nt]=rt),rt}function d(C){let k=[],it=[],nt=[];for(let st=0;st<e;st++)k[st]=0,it[st]=0,nt[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:it,attributeDivisors:nt,object:C,attributes:{},index:null}}function p(C,k,it,nt){let st=r.attributes,ct=k.attributes,rt=0,St=it.getAttributes();for(let at in St)if(St[at].location>=0){let Gt=st[at],Vt=ct[at];if(Vt===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(Vt=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(Vt=C.instanceColor)),Gt===void 0||Gt.attribute!==Vt||Vt&&Gt.data!==Vt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==nt}function y(C,k,it,nt){let st={},ct=k.attributes,rt=0,St=it.getAttributes();for(let at in St)if(St[at].location>=0){let Gt=ct[at];Gt===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor));let Vt={};Vt.attribute=Gt,Gt&&Gt.data&&(Vt.data=Gt.data),st[at]=Vt,rt++}r.attributes=st,r.attributesNum=rt,r.index=nt}function T(){let C=r.newAttributes;for(let k=0,it=C.length;k<it;k++)C[k]=0}function g(C){m(C,0)}function m(C,k){let it=r.newAttributes,nt=r.enabledAttributes,st=r.attributeDivisors;it[C]=1,nt[C]===0&&(i.enableVertexAttribArray(C),nt[C]=1),st[C]!==k&&(i.vertexAttribDivisor(C,k),st[C]=k)}function S(){let C=r.newAttributes,k=r.enabledAttributes;for(let it=0,nt=k.length;it<nt;it++)k[it]!==C[it]&&(i.disableVertexAttribArray(it),k[it]=0)}function E(C,k,it,nt,st,ct,rt){rt===!0?i.vertexAttribIPointer(C,k,it,st,ct):i.vertexAttribPointer(C,k,it,nt,st,ct)}function b(C,k,it,nt){T();let st=nt.attributes,ct=it.getAttributes(),rt=k.defaultAttributeValues;for(let St in ct){let at=ct[St];if(at.location>=0){let Nt=st[St];if(Nt===void 0&&(St==="instanceMatrix"&&C.instanceMatrix&&(Nt=C.instanceMatrix),St==="instanceColor"&&C.instanceColor&&(Nt=C.instanceColor)),Nt!==void 0){let Gt=Nt.normalized,Vt=Nt.itemSize,he=t.get(Nt);if(he===void 0)continue;let _e=he.buffer,pt=he.type,At=he.bytesPerElement,Kt=pt===i.INT||pt===i.UNSIGNED_INT||Nt.gpuType===Wh;if(Nt.isInterleavedBufferAttribute){let Pt=Nt.data,se=Pt.stride,ye=Nt.offset;if(Pt.isInstancedInterleavedBuffer){for(let fe=0;fe<at.locationSize;fe++)m(at.location+fe,Pt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let fe=0;fe<at.locationSize;fe++)g(at.location+fe);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let fe=0;fe<at.locationSize;fe++)E(at.location+fe,Vt/at.locationSize,pt,Gt,se*At,(ye+Vt/at.locationSize*fe)*At,Kt)}else{if(Nt.isInstancedBufferAttribute){for(let Pt=0;Pt<at.locationSize;Pt++)m(at.location+Pt,Nt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Pt=0;Pt<at.locationSize;Pt++)g(at.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Pt=0;Pt<at.locationSize;Pt++)E(at.location+Pt,Vt/at.locationSize,pt,Gt,Vt*At,Vt/at.locationSize*Pt*At,Kt)}}else if(rt!==void 0){let Gt=rt[St];if(Gt!==void 0)switch(Gt.length){case 2:i.vertexAttrib2fv(at.location,Gt);break;case 3:i.vertexAttrib3fv(at.location,Gt);break;case 4:i.vertexAttrib4fv(at.location,Gt);break;default:i.vertexAttrib1fv(at.location,Gt)}}}}S()}function W(){H();for(let C in n){let k=n[C];for(let it in k){let nt=k[it];for(let st in nt)u(nt[st].object),delete nt[st];delete k[it]}delete n[C]}}function N(C){if(n[C.id]===void 0)return;let k=n[C.id];for(let it in k){let nt=k[it];for(let st in nt)u(nt[st].object),delete nt[st];delete k[it]}delete n[C.id]}function V(C){for(let k in n){let it=n[k];if(it[C.id]===void 0)continue;let nt=it[C.id];for(let st in nt)u(nt[st].object),delete nt[st];delete it[C.id]}}function H(){P(),o=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:N,releaseStatesOfProgram:V,initAttributes:T,enableAttribute:g,disableUnusedAttributes:S}}function wg(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,f){f!==0&&(i.drawArraysInstanced(n,h,u,f),e.update(u,n,f))}function a(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,f);let p=0;for(let y=0;y<f;y++)p+=u[y];e.update(p,n,1)}function l(h,u,f,d){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<h.length;y++)o(h[y],u[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,f);let y=0;for(let T=0;T<f;T++)y+=u[T]*d[T];e.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(V){return!(V!==Gi&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(V){let H=V===ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Cs&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==ws&&!H)}function l(V){if(V==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=y>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:W,maxSamples:N}}function Eg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ti,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){let y=f.clippingPlanes,T=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?u(null):h();else{let S=r?0:n,E=S*4,b=m.clippingState||null;l.value=b,b=u(y,d,E,p);for(let W=0;W!==E;++W)b[W]=e[W];m.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,y){let T=f!==null?f.length:0,g=null;if(T!==0){if(g=l.value,y!==!0||g===null){let m=p+T*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,b=p;E!==T;++E,b+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,g}}function Ag(i){let t=new WeakMap;function e(o,a){return a===wc?o.mapping=no:a===Tc&&(o.mapping=io),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wc||a===Tc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new oh(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ol=class extends sl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zr=4,Ku=[.125,.215,.35,.446,.526,.582],pr=20,ic=new ol,ju=new Se,sc=null,rc=0,oc=0,ac=!1,fr=(1+Math.sqrt(5))/2,Wr=1/fr,Qu=[new F(-fr,Wr,0),new F(fr,Wr,0),new F(-Wr,0,fr),new F(Wr,0,fr),new F(0,fr,-Wr),new F(0,fr,Wr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sc,rc,oc),this._renderer.xr.enabled=ac,t.scissorTest=!1,Fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===no||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ss,minFilter:ss,generateMipmaps:!1,type:ra,format:Gi,colorSpace:yo,depthBuffer:!1},s=tf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Cg(r,t,e)}return s}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,ic)}_sceneToCubeUV(t,e,n,s){let a=new zn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ju),u.toneMapping=Xs,u.autoClear=!1;let p=new ke({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),y=new gt(new hn,p),T=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,T=!0):(p.color.copy(ju),T=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));let E=this._cubeSize;Fa(s,S*E,m>2?E:0,E,E),u.setRenderTarget(s),T&&u.render(y,a),u.render(t,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===no||t.mapping===io;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ic)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qu[(s-r-1)%Qu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new gt(this._lodPlanes[s],h),d=h.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*pr-1),T=r/y,g=isFinite(r)?1+Math.floor(u*T):pr;g>pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pr}`);let m=[],S=0;for(let V=0;V<pr;++V){let H=V/T,P=Math.exp(-H*H/2);m.push(P),V===0?S+=P:V<g&&(S+=2*P)}for(let V=0;V<m.length;V++)m[V]=m[V]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=y,d.mipInt.value=E-n;let b=this._sizeLods[s],W=3*b*(s>E-Zr?s-E+Zr:0),N=4*(this._cubeSize-b);Fa(e,W,N,3*b,2*b),l.setRenderTarget(e),l.render(f,ic)}};function Rg(i){let t=[],e=[],n=[],s=i,r=i-Zr+1+Ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Zr?l=Ku[o-i+Zr-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,y=6,T=3,g=2,m=1,S=new Float32Array(T*y*p),E=new Float32Array(g*y*p),b=new Float32Array(m*y*p);for(let N=0;N<p;N++){let V=N%3*2/3-1,H=N>2?0:-1,P=[V,H,0,V+2/3,H,0,V+2/3,H+1,0,V,H,0,V+2/3,H+1,0,V,H+1,0];S.set(P,T*y*N),E.set(d,g*y*N);let C=[N,N,N,N,N,N];b.set(C,m*y*N)}let W=new fn;W.setAttribute("position",new di(S,T)),W.setAttribute("uv",new di(E,g)),W.setAttribute("faceIndex",new di(b,m)),t.push(W),s>Zr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tf(i,t,e){let n=new Xi(i,t,e);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cg(i,t,e){let n=new Float32Array(pr),s=new F(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function ef(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function nf(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function Ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===wc||l===Tc,u=l===no||l===io;if(h||u){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new al(i)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return h&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new al(i)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let T=d.morphAttributes[y];for(let g=0,m=T.length;g<m;g++)t.remove(T[g])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)t.update(d[y],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let y in p){let T=p[y];for(let g=0,m=T.length;g<m;g++)t.update(T[g],i.ARRAY_BUFFER)}}function h(f){let d=[],p=f.index,y=f.attributes.position,T=0;if(p!==null){let S=p.array;T=p.version;for(let E=0,b=S.length;E<b;E+=3){let W=S[E+0],N=S[E+1],V=S[E+2];d.push(W,N,N,V,V,W)}}else if(y!==void 0){let S=y.array;T=y.version;for(let E=0,b=S.length/3-1;E<b;E+=3){let W=E+0,N=E+1,V=E+2;d.push(W,N,N,V,V,W)}}else return;let g=new(Jf(d)?il:nl)(d,1);g.version=T;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function u(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Dg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function h(d,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,d*o,y),e.update(p,n,y))}function u(d,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,y);let g=0;for(let m=0;m<y;m++)g+=p[m];e.update(g,n,1)}function f(d,p,y,T){if(y===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)h(d[m]/o,p[m],T[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,T,0,y);let m=0;for(let S=0;S<y;S++)m+=p[S]*T[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ug(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){let n=new WeakMap,s=new cn;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==f){let P=function(){V.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;p===!0&&(E=1),y===!0&&(E=2),T===!0&&(E=3);let b=a.attributes.position.count*E,W=1;b>t.maxTextureSize&&(W=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let N=new Float32Array(b*W*4*f),V=new el(N,b,W,f);V.type=ws,V.needsUpdate=!0;let H=E*4;for(let C=0;C<f;C++){let k=g[C],it=m[C],nt=S[C],st=b*W*4*C;for(let ct=0;ct<k.count;ct++){let rt=ct*H;p===!0&&(s.fromBufferAttribute(k,ct),N[st+rt+0]=s.x,N[st+rt+1]=s.y,N[st+rt+2]=s.z,N[st+rt+3]=0),y===!0&&(s.fromBufferAttribute(it,ct),N[st+rt+4]=s.x,N[st+rt+5]=s.y,N[st+rt+6]=s.z,N[st+rt+7]=0),T===!0&&(s.fromBufferAttribute(nt,ct),N[st+rt+8]=s.x,N[st+rt+9]=s.y,N[st+rt+10]=s.z,N[st+rt+11]=nt.itemSize===4?s.w:1)}}d={count:f,texture:V,size:new Et(b,W)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let T=0;T<h.length;T++)p+=h[T];let y=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fg(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var ll=class extends yi{constructor(t,e,n,s,r,o,a,l,h,u=jr){if(u!==jr&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===jr&&(n=xr),n===void 0&&u===ro&&(n=so),super(null,s,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wi,this.minFilter=l!==void 0?l:Wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},td=new yi,sf=new ll(1,1),ed=new el,nd=new sh,id=new rl,rf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function vo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function On(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Bn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bl(i,t){let e=of[t];e===void 0&&(e=new Int32Array(t),of[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(On(e,t))return;i.uniform2fv(this.addr,t),Bn(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(On(e,t))return;i.uniform3fv(this.addr,t),Bn(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(On(e,t))return;i.uniform4fv(this.addr,t),Bn(e,t)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(On(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Bn(e,t)}else{if(On(e,n))return;cf.set(n),i.uniformMatrix2fv(this.addr,!1,cf),Bn(e,n)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(On(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Bn(e,t)}else{if(On(e,n))return;lf.set(n),i.uniformMatrix3fv(this.addr,!1,lf),Bn(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(On(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Bn(e,t)}else{if(On(e,n))return;af.set(n),i.uniformMatrix4fv(this.addr,!1,af),Bn(e,n)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(On(e,t))return;i.uniform2iv(this.addr,t),Bn(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(On(e,t))return;i.uniform3iv(this.addr,t),Bn(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(On(e,t))return;i.uniform4iv(this.addr,t),Bn(e,t)}}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(On(e,t))return;i.uniform2uiv(this.addr,t),Bn(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(On(e,t))return;i.uniform3uiv(this.addr,t),Bn(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(On(e,t))return;i.uniform4uiv(this.addr,t),Bn(e,t)}}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sf.compareFunction=Zf,r=sf):r=td,e.setTexture2D(t||r,s)}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nd,s)}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||id,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ed,s)}function nx(i){switch(i){case 5126:return zg;case 35664:return Og;case 35665:return Bg;case 35666:return kg;case 35674:return Vg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return Zg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}function ix(i,t){i.uniform1fv(this.addr,t)}function sx(i,t){let e=vo(t,this.size,2);i.uniform2fv(this.addr,e)}function rx(i,t){let e=vo(t,this.size,3);i.uniform3fv(this.addr,e)}function ox(i,t){let e=vo(t,this.size,4);i.uniform4fv(this.addr,e)}function ax(i,t){let e=vo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lx(i,t){let e=vo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cx(i,t){let e=vo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hx(i,t){i.uniform1iv(this.addr,t)}function ux(i,t){i.uniform2iv(this.addr,t)}function fx(i,t){i.uniform3iv(this.addr,t)}function dx(i,t){i.uniform4iv(this.addr,t)}function px(i,t){i.uniform1uiv(this.addr,t)}function mx(i,t){i.uniform2uiv(this.addr,t)}function gx(i,t){i.uniform3uiv(this.addr,t)}function xx(i,t){i.uniform4uiv(this.addr,t)}function _x(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);On(n,r)||(i.uniform1iv(this.addr,r),Bn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||td,r[o])}function yx(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);On(n,r)||(i.uniform1iv(this.addr,r),Bn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nd,r[o])}function vx(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);On(n,r)||(i.uniform1iv(this.addr,r),Bn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||id,r[o])}function Mx(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);On(n,r)||(i.uniform1iv(this.addr,r),Bn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ed,r[o])}function bx(i){switch(i){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return fx;case 35669:case 35673:return dx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return Mx}}var ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nx(e.type)}},lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bx(e.type)}},ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function hf(i,t){i.seq.push(t),i.map[t.id]=t}function Sx(i,t,e){let n=i.name,s=n.length;for(lc.lastIndex=0;;){let r=lc.exec(n),o=lc.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){hf(e,h===void 0?new ah(a,i,t):new lh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ch(a),hf(e,f)),e=f}}}var to=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function uf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wx=37297,Tx=0;function Ex(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ff=new Ue;function Ax(i){$e._getMatrix(ff,$e.workingColorSpace,i);let t=`mat3( ${ff.elements.map(e=>e.toFixed(4))} )`;switch($e.getTransfer(i)){case Ml:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function df(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ex(i.getShaderSource(t),o)}else return s}function Rx(i,t){let e=Ax(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cx(i,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="Cineon";break;case ip:e="ACESFilmic";break;case rp:e="AgX";break;case op:e="Neutral";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var za=new F;function Ix(){$e.getLuminanceCoefficients(za);let i=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Lx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ho(i){return i!==""}function pf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(i){return i.replace(Ux,Fx)}var Nx=new Map;function Fx(i,t){let e=Fe[t];if(e===void 0){let n=Nx.get(t);if(n!==void 0)e=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hh(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(i){return i.replace(zx,Ox)}function Ox(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Bx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ss&&(t="SHADOWMAP_TYPE_VSM"),t}function kx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case no:case io:t="ENVMAP_TYPE_CUBE";break;case vl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===io&&(t="ENVMAP_MODE_REFRACTION"),t}function Hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case jd:t="ENVMAP_BLENDING_MIX";break;case Qd:t="ENVMAP_BLENDING_ADD";break}return t}function Gx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Bx(e),h=kx(e),u=Vx(e),f=Hx(e),d=Gx(e),p=Px(e),y=Lx(r),T=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ho).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ho).join(`
`),m.length>0&&(m+=`
`)):(g=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),m=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xs?"#define TONE_MAPPING":"",e.toneMapping!==Xs?Fe.tonemapping_pars_fragment:"",e.toneMapping!==Xs?Cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Rx("linearToOutputTexel",e.outputColorSpace),Ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),o=hh(o),o=pf(o,e),o=mf(o,e),a=hh(a),a=pf(a,e),a=mf(a,e),o=gf(o),a=gf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=S+g+o,b=S+m+a,W=uf(s,s.VERTEX_SHADER,E),N=uf(s,s.FRAGMENT_SHADER,b);s.attachShader(T,W),s.attachShader(T,N),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function V(k){if(i.debug.checkShaderErrors){let it=s.getProgramInfoLog(T).trim(),nt=s.getShaderInfoLog(W).trim(),st=s.getShaderInfoLog(N).trim(),ct=!0,rt=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,W,N);else{let St=df(s,W,"vertex"),at=df(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+it+`
`+St+`
`+at)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(nt===""||st==="")&&(rt=!1);rt&&(k.diagnostics={runnable:ct,programLog:it,vertexShader:{log:nt,prefix:g},fragmentShader:{log:st,prefix:m}})}s.deleteShader(W),s.deleteShader(N),H=new to(s,T),P=Dx(s,T)}let H;this.getUniforms=function(){return H===void 0&&V(this),H};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(T,wx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=N,this}var Xx=0,uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fh(t),e.set(t,n)),n}},fh=class{constructor(t){this.id=Xx++,this.code=t,this.usedTimes=0}};function qx(i,t,e,n,s,r,o){let a=new Zo,l=new uh,h=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function g(P,C,k,it,nt){let st=it.fog,ct=nt.geometry,rt=P.isMeshStandardMaterial?it.environment:null,St=(P.isMeshStandardMaterial?e:t).get(P.envMap||rt),at=St&&St.mapping===vl?St.image.height:null,Nt=y[P.type];P.precision!==null&&(p=s.getMaxPrecision(P.precision),p!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",p,"instead."));let Gt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,he=0;ct.morphAttributes.position!==void 0&&(he=1),ct.morphAttributes.normal!==void 0&&(he=2),ct.morphAttributes.color!==void 0&&(he=3);let _e,pt,At,Kt;if(Nt){let de=ns[Nt];_e=de.vertexShader,pt=de.fragmentShader}else _e=P.vertexShader,pt=P.fragmentShader,l.update(P),At=l.getVertexShaderID(P),Kt=l.getFragmentShaderID(P);let Pt=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),ye=nt.isInstancedMesh===!0,fe=nt.isBatchedMesh===!0,Re=!!P.map,yt=!!P.matcap,It=!!St,z=!!P.aoMap,Qt=!!P.lightMap,ut=!!P.bumpMap,Lt=!!P.normalMap,Rt=!!P.displacementMap,re=!!P.emissiveMap,zt=!!P.metalnessMap,D=!!P.roughnessMap,R=P.anisotropy>0,K=P.clearcoat>0,ft=P.dispersion>0,mt=P.iridescence>0,dt=P.sheen>0,$t=P.transmission>0,Ut=R&&!!P.anisotropyMap,Ct=K&&!!P.clearcoatMap,Te=K&&!!P.clearcoatNormalMap,wt=K&&!!P.clearcoatRoughnessMap,qt=mt&&!!P.iridescenceMap,oe=mt&&!!P.iridescenceThicknessMap,ne=dt&&!!P.sheenColorMap,Wt=dt&&!!P.sheenRoughnessMap,Ce=!!P.specularMap,ve=!!P.specularColorMap,Ge=!!P.specularIntensityMap,X=$t&&!!P.transmissionMap,Bt=$t&&!!P.thicknessMap,lt=!!P.gradientMap,j=!!P.alphaMap,Xt=P.alphaTest>0,kt=!!P.alphaHash,ge=!!P.extensions,Ke=Xs;P.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let xn={shaderID:Nt,shaderType:P.type,shaderName:P.name,vertexShader:_e,fragmentShader:pt,defines:P.defines,customVertexShaderID:At,customFragmentShaderID:Kt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:p,batching:fe,batchingColor:fe&&nt._colorsTexture!==null,instancing:ye,instancingColor:ye&&nt.instanceColor!==null,instancingMorph:ye&&nt.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:yo,alphaToCoverage:!!P.alphaToCoverage,map:Re,matcap:yt,envMap:It,envMapMode:It&&St.mapping,envMapCubeUVHeight:at,aoMap:z,lightMap:Qt,bumpMap:ut,normalMap:Lt,displacementMap:d&&Rt,emissiveMap:re,normalMapObjectSpace:Lt&&P.normalMapType===hp,normalMapTangentSpace:Lt&&P.normalMapType===$f,metalnessMap:zt,roughnessMap:D,anisotropy:R,anisotropyMap:Ut,clearcoat:K,clearcoatMap:Ct,clearcoatNormalMap:Te,clearcoatRoughnessMap:wt,dispersion:ft,iridescence:mt,iridescenceMap:qt,iridescenceThicknessMap:oe,sheen:dt,sheenColorMap:ne,sheenRoughnessMap:Wt,specularMap:Ce,specularColorMap:ve,specularIntensityMap:Ge,transmission:$t,transmissionMap:X,thicknessMap:Bt,gradientMap:lt,opaque:P.transparent===!1&&P.blending===Kr&&P.alphaToCoverage===!1,alphaMap:j,alphaTest:Xt,alphaHash:kt,combine:P.combine,mapUv:Re&&T(P.map.channel),aoMapUv:z&&T(P.aoMap.channel),lightMapUv:Qt&&T(P.lightMap.channel),bumpMapUv:ut&&T(P.bumpMap.channel),normalMapUv:Lt&&T(P.normalMap.channel),displacementMapUv:Rt&&T(P.displacementMap.channel),emissiveMapUv:re&&T(P.emissiveMap.channel),metalnessMapUv:zt&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:Ut&&T(P.anisotropyMap.channel),clearcoatMapUv:Ct&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&T(P.sheenRoughnessMap.channel),specularMapUv:Ce&&T(P.specularMap.channel),specularColorMapUv:ve&&T(P.specularColorMap.channel),specularIntensityMapUv:Ge&&T(P.specularIntensityMap.channel),transmissionMapUv:X&&T(P.transmissionMap.channel),thicknessMapUv:Bt&&T(P.thicknessMap.channel),alphaMapUv:j&&T(P.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Lt||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ct.attributes.uv&&(Re||j),fog:!!st,useFog:P.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:nt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Re&&P.map.isVideoTexture===!0&&$e.getTransfer(P.map.colorSpace)===an,decodeVideoTextureEmissive:re&&P.emissiveMap.isVideoTexture===!0&&$e.getTransfer(P.emissiveMap.colorSpace)===an,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Pn,flipSided:P.side===Gn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ge&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&P.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return xn.vertexUv1s=h.has(1),xn.vertexUv2s=h.has(2),xn.vertexUv3s=h.has(3),h.clear(),xn}function m(P){let C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(let k in P.defines)C.push(k),C.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(S(C,P),E(C,P),C.push(i.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function S(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function E(P,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),P.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),P.push(a.mask)}function b(P){let C=y[P.type],k;if(C){let it=ns[C];k=Fp.clone(it.uniforms)}else k=P.uniforms;return k}function W(P,C){let k;for(let it=0,nt=u.length;it<nt;it++){let st=u[it];if(st.cacheKey===C){k=st,++k.usedTimes;break}}return k===void 0&&(k=new Wx(i,C,P,r),u.push(k)),k}function N(P){if(--P.usedTimes===0){let C=u.indexOf(P);u[C]=u[u.length-1],u.pop(),P.destroy()}}function V(P){l.remove(P)}function H(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:W,releaseProgram:N,releaseShaderCache:V,programs:u,dispose:H}}function Yx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $x(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _f(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,p,y,T,g){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:y,renderOrder:f.renderOrder,z:T,group:g},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=T,m.group=g),t++,m}function a(f,d,p,y,T,g){let m=o(f,d,p,y,T,g);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(f,d,p,y,T,g){let m=o(f,d,p,y,T,g);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function h(f,d){e.length>1&&e.sort(f||$x),n.length>1&&n.sort(d||_f),s.length>1&&s.sort(d||_f)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function Zx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yf,i.set(n,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Se};break;case"SpotLight":e={position:new F,direction:new F,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jx=0;function Qx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t_(i){let t=new Jx,e=Kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);let s=new F,r=new un,o=new un;function a(h){let u=0,f=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,y=0,T=0,g=0,m=0,S=0,E=0,b=0,W=0,N=0,V=0;h.sort(Qx);for(let P=0,C=h.length;P<C;P++){let k=h[P],it=k.color,nt=k.intensity,st=k.distance,ct=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=it.r*nt,f+=it.g*nt,d+=it.b*nt;else if(k.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(k.sh.coefficients[rt],nt);V++}else if(k.isDirectionalLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let St=k.shadow,at=e.get(k);at.shadowIntensity=St.intensity,at.shadowBias=St.bias,at.shadowNormalBias=St.normalBias,at.shadowRadius=St.radius,at.shadowMapSize=St.mapSize,n.directionalShadow[p]=at,n.directionalShadowMap[p]=ct,n.directionalShadowMatrix[p]=k.shadow.matrix,S++}n.directional[p]=rt,p++}else if(k.isSpotLight){let rt=t.get(k);rt.position.setFromMatrixPosition(k.matrixWorld),rt.color.copy(it).multiplyScalar(nt),rt.distance=st,rt.coneCos=Math.cos(k.angle),rt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),rt.decay=k.decay,n.spot[T]=rt;let St=k.shadow;if(k.map&&(n.spotLightMap[W]=k.map,W++,St.updateMatrices(k),k.castShadow&&N++),n.spotLightMatrix[T]=St.matrix,k.castShadow){let at=e.get(k);at.shadowIntensity=St.intensity,at.shadowBias=St.bias,at.shadowNormalBias=St.normalBias,at.shadowRadius=St.radius,at.shadowMapSize=St.mapSize,n.spotShadow[T]=at,n.spotShadowMap[T]=ct,b++}T++}else if(k.isRectAreaLight){let rt=t.get(k);rt.color.copy(it).multiplyScalar(nt),rt.halfWidth.set(k.width*.5,0,0),rt.halfHeight.set(0,k.height*.5,0),n.rectArea[g]=rt,g++}else if(k.isPointLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),rt.distance=k.distance,rt.decay=k.decay,k.castShadow){let St=k.shadow,at=e.get(k);at.shadowIntensity=St.intensity,at.shadowBias=St.bias,at.shadowNormalBias=St.normalBias,at.shadowRadius=St.radius,at.shadowMapSize=St.mapSize,at.shadowCameraNear=St.camera.near,at.shadowCameraFar=St.camera.far,n.pointShadow[y]=at,n.pointShadowMap[y]=ct,n.pointShadowMatrix[y]=k.shadow.matrix,E++}n.point[y]=rt,y++}else if(k.isHemisphereLight){let rt=t.get(k);rt.skyColor.copy(k.color).multiplyScalar(nt),rt.groundColor.copy(k.groundColor).multiplyScalar(nt),n.hemi[m]=rt,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let H=n.hash;(H.directionalLength!==p||H.pointLength!==y||H.spotLength!==T||H.rectAreaLength!==g||H.hemiLength!==m||H.numDirectionalShadows!==S||H.numPointShadows!==E||H.numSpotShadows!==b||H.numSpotMaps!==W||H.numLightProbes!==V)&&(n.directional.length=p,n.spot.length=T,n.rectArea.length=g,n.point.length=y,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+W-N,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=V,H.directionalLength=p,H.pointLength=y,H.spotLength=T,H.rectAreaLength=g,H.hemiLength=m,H.numDirectionalShadows=S,H.numPointShadows=E,H.numSpotShadows=b,H.numSpotMaps=W,H.numLightProbes=V,n.version=jx++)}function l(h,u){let f=0,d=0,p=0,y=0,T=0,g=u.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){let E=h[m];if(E.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(E.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(E.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){let b=n.hemi[T];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(g),T++}}}return{setup:a,setupView:l,state:n}}function vf(i){let t=new t_(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function e_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vf(i),t.set(s,[a])):r>=o.length?(a=new vf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dh=class extends Ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ph=class extends Ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`;function s_(i,t,e){let n=new Jo,s=new Et,r=new Et,o=new cn,a=new dh({depthPacking:cp}),l=new ph,h={},u=e.maxTextureSize,f={[Ys]:Gn,[Gn]:Ys,[Pn]:Pn},d=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let y=new fn;y.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new gt(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let m=this.type;this.render=function(N,V,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;let P=i.getRenderTarget(),C=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),it=i.state;it.setBlending(Ws),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);let nt=m!==Ss&&this.type===Ss,st=m===Ss&&this.type!==Ss;for(let ct=0,rt=N.length;ct<rt;ct++){let St=N[ct],at=St.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",St,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;s.copy(at.mapSize);let Nt=at.getFrameExtents();if(s.multiply(Nt),r.copy(at.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Nt.x),s.x=r.x*Nt.x,at.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Nt.y),s.y=r.y*Nt.y,at.mapSize.y=r.y)),at.map===null||nt===!0||st===!0){let Vt=this.type!==Ss?{minFilter:Wi,magFilter:Wi}:{};at.map!==null&&at.map.dispose(),at.map=new Xi(s.x,s.y,Vt),at.map.texture.name=St.name+".shadowMap",at.camera.updateProjectionMatrix()}i.setRenderTarget(at.map),i.clear();let Gt=at.getViewportCount();for(let Vt=0;Vt<Gt;Vt++){let he=at.getViewport(Vt);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),it.viewport(o),at.updateMatrices(St,Vt),n=at.getFrustum(),b(V,H,at.camera,St,this.type)}at.isPointLightShadow!==!0&&this.type===Ss&&S(at,H),at.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(P,C,k)};function S(N,V){let H=t.update(T);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(V,null,H,d,T,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(V,null,H,p,T,null)}function E(N,V,H,P){let C=null,k=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)C=k;else if(C=H.isPointLight===!0?l:a,i.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){let it=C.uuid,nt=V.uuid,st=h[it];st===void 0&&(st={},h[it]=st);let ct=st[nt];ct===void 0&&(ct=C.clone(),st[nt]=ct,V.addEventListener("dispose",W)),C=ct}if(C.visible=V.visible,C.wireframe=V.wireframe,P===Ss?C.side=V.shadowSide!==null?V.shadowSide:V.side:C.side=V.shadowSide!==null?V.shadowSide:f[V.side],C.alphaMap=V.alphaMap,C.alphaTest=V.alphaTest,C.map=V.map,C.clipShadows=V.clipShadows,C.clippingPlanes=V.clippingPlanes,C.clipIntersection=V.clipIntersection,C.displacementMap=V.displacementMap,C.displacementScale=V.displacementScale,C.displacementBias=V.displacementBias,C.wireframeLinewidth=V.wireframeLinewidth,C.linewidth=V.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let it=i.properties.get(C);it.light=H}return C}function b(N,V,H,P,C){if(N.visible===!1)return;if(N.layers.test(V.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Ss)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);let nt=t.update(N),st=N.material;if(Array.isArray(st)){let ct=nt.groups;for(let rt=0,St=ct.length;rt<St;rt++){let at=ct[rt],Nt=st[at.materialIndex];if(Nt&&Nt.visible){let Gt=E(N,Nt,P,C);N.onBeforeShadow(i,N,V,H,nt,Gt,at),i.renderBufferDirect(H,null,nt,Gt,N,at),N.onAfterShadow(i,N,V,H,nt,Gt,at)}}}else if(st.visible){let ct=E(N,st,P,C);N.onBeforeShadow(i,N,V,H,nt,ct,null),i.renderBufferDirect(H,null,nt,ct,N,null),N.onAfterShadow(i,N,V,H,nt,ct,null)}}let it=N.children;for(let nt=0,st=it.length;nt<st;nt++)b(it[nt],V,H,P,C)}function W(N){N.target.removeEventListener("dispose",W);for(let H in h){let P=h[H],C=N.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}var r_={[xc]:_c,[yc]:bc,[vc]:Sc,[eo]:Mc,[_c]:xc,[bc]:yc,[Sc]:vc,[Mc]:eo};function o_(i,t){function e(){let X=!1,Bt=new cn,lt=null,j=new cn(0,0,0,0);return{setMask:function(Xt){lt!==Xt&&!X&&(i.colorMask(Xt,Xt,Xt,Xt),lt=Xt)},setLocked:function(Xt){X=Xt},setClear:function(Xt,kt,ge,Ke,xn){xn===!0&&(Xt*=Ke,kt*=Ke,ge*=Ke),Bt.set(Xt,kt,ge,Ke),j.equals(Bt)===!1&&(i.clearColor(Xt,kt,ge,Ke),j.copy(Bt))},reset:function(){X=!1,lt=null,j.set(-1,0,0,0)}}}function n(){let X=!1,Bt=!1,lt=null,j=null,Xt=null;return{setReversed:function(kt){if(Bt!==kt){let ge=t.get("EXT_clip_control");Bt?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT);let Ke=Xt;Xt=null,this.setClear(Ke)}Bt=kt},getReversed:function(){return Bt},setTest:function(kt){kt?Pt(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(kt){lt!==kt&&!X&&(i.depthMask(kt),lt=kt)},setFunc:function(kt){if(Bt&&(kt=r_[kt]),j!==kt){switch(kt){case xc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case eo:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case Mc:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case Sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=kt}},setLocked:function(kt){X=kt},setClear:function(kt){Xt!==kt&&(Bt&&(kt=1-kt),i.clearDepth(kt),Xt=kt)},reset:function(){X=!1,lt=null,j=null,Xt=null,Bt=!1}}}function s(){let X=!1,Bt=null,lt=null,j=null,Xt=null,kt=null,ge=null,Ke=null,xn=null;return{setTest:function(de){X||(de?Pt(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(de){Bt!==de&&!X&&(i.stencilMask(de),Bt=de)},setFunc:function(de,An,mn){(lt!==de||j!==An||Xt!==mn)&&(i.stencilFunc(de,An,mn),lt=de,j=An,Xt=mn)},setOp:function(de,An,mn){(kt!==de||ge!==An||Ke!==mn)&&(i.stencilOp(de,An,mn),kt=de,ge=An,Ke=mn)},setLocked:function(de){X=de},setClear:function(de){xn!==de&&(i.clearStencil(de),xn=de)},reset:function(){X=!1,Bt=null,lt=null,j=null,Xt=null,kt=null,ge=null,Ke=null,xn=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap,u={},f={},d=new WeakMap,p=[],y=null,T=!1,g=null,m=null,S=null,E=null,b=null,W=null,N=null,V=new Se(0,0,0),H=0,P=!1,C=null,k=null,it=null,nt=null,st=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,St=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(St=parseFloat(/^WebGL (\d)/.exec(at)[1]),rt=St>=1):at.indexOf("OpenGL ES")!==-1&&(St=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),rt=St>=2);let Nt=null,Gt={},Vt=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),_e=new cn().fromArray(Vt),pt=new cn().fromArray(he);function At(X,Bt,lt,j){let Xt=new Uint8Array(4),kt=i.createTexture();i.bindTexture(X,kt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<lt;ge++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Bt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,Xt):i.texImage2D(Bt+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xt);return kt}let Kt={};Kt[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),Kt[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Kt[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Kt[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Pt(i.DEPTH_TEST),o.setFunc(eo),ut(!1),Lt(Su),Pt(i.CULL_FACE),z(Ws);function Pt(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function se(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function ye(X,Bt){return f[X]!==Bt?(i.bindFramebuffer(X,Bt),f[X]=Bt,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Bt),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Bt),!0):!1}function fe(X,Bt){let lt=p,j=!1;if(X){lt=d.get(Bt),lt===void 0&&(lt=[],d.set(Bt,lt));let Xt=X.textures;if(lt.length!==Xt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let kt=0,ge=Xt.length;kt<ge;kt++)lt[kt]=i.COLOR_ATTACHMENT0+kt;lt.length=Xt.length,j=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,j=!0);j&&i.drawBuffers(lt)}function Re(X){return y!==X?(i.useProgram(X),y=X,!0):!1}let yt={[dr]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};yt[zd]=i.MIN,yt[Od]=i.MAX;let It={[Bd]:i.ZERO,[kd]:i.ONE,[Vd]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Gd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Zd]:i.ONE_MINUS_CONSTANT_COLOR,[Jd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function z(X,Bt,lt,j,Xt,kt,ge,Ke,xn,de){if(X===Ws){T===!0&&(se(i.BLEND),T=!1);return}if(T===!1&&(Pt(i.BLEND),T=!0),X!==Ud){if(X!==g||de!==P){if((m!==dr||b!==dr)&&(i.blendEquation(i.FUNC_ADD),m=dr,b=dr),de)switch(X){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}S=null,E=null,W=null,N=null,V.set(0,0,0),H=0,g=X,P=de}return}Xt=Xt||Bt,kt=kt||lt,ge=ge||j,(Bt!==m||Xt!==b)&&(i.blendEquationSeparate(yt[Bt],yt[Xt]),m=Bt,b=Xt),(lt!==S||j!==E||kt!==W||ge!==N)&&(i.blendFuncSeparate(It[lt],It[j],It[kt],It[ge]),S=lt,E=j,W=kt,N=ge),(Ke.equals(V)===!1||xn!==H)&&(i.blendColor(Ke.r,Ke.g,Ke.b,xn),V.copy(Ke),H=xn),g=X,P=!1}function Qt(X,Bt){X.side===Pn?se(i.CULL_FACE):Pt(i.CULL_FACE);let lt=X.side===Gn;Bt&&(lt=!lt),ut(lt),X.blending===Kr&&X.transparent===!1?z(Ws):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let j=X.stencilWrite;a.setTest(j),j&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),re(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function Lt(X){X!==Ld?(Pt(i.CULL_FACE),X!==k&&(X===Su?i.cullFace(i.BACK):X===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),k=X}function Rt(X){X!==it&&(rt&&i.lineWidth(X),it=X)}function re(X,Bt,lt){X?(Pt(i.POLYGON_OFFSET_FILL),(nt!==Bt||st!==lt)&&(i.polygonOffset(Bt,lt),nt=Bt,st=lt)):se(i.POLYGON_OFFSET_FILL)}function zt(X){X?Pt(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function D(X){X===void 0&&(X=i.TEXTURE0+ct-1),Nt!==X&&(i.activeTexture(X),Nt=X)}function R(X,Bt,lt){lt===void 0&&(Nt===null?lt=i.TEXTURE0+ct-1:lt=Nt);let j=Gt[lt];j===void 0&&(j={type:void 0,texture:void 0},Gt[lt]=j),(j.type!==X||j.texture!==Bt)&&(Nt!==lt&&(i.activeTexture(lt),Nt=lt),i.bindTexture(X,Bt||Kt[X]),j.type=X,j.texture=Bt)}function K(){let X=Gt[Nt];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ft(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(X){_e.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function Wt(X){pt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),pt.copy(X))}function Ce(X,Bt){let lt=h.get(Bt);lt===void 0&&(lt=new WeakMap,h.set(Bt,lt));let j=lt.get(X);j===void 0&&(j=i.getUniformBlockIndex(Bt,X.name),lt.set(X,j))}function ve(X,Bt){let j=h.get(Bt).get(X);l.get(Bt)!==j&&(i.uniformBlockBinding(Bt,j,X.__bindingPointIndex),l.set(Bt,j))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Nt=null,Gt={},f={},d=new WeakMap,p=[],y=null,T=!1,g=null,m=null,S=null,E=null,b=null,W=null,N=null,V=new Se(0,0,0),H=0,P=!1,C=null,k=null,it=null,nt=null,st=null,_e.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Pt,disable:se,bindFramebuffer:ye,drawBuffers:fe,useProgram:Re,setBlending:z,setMaterial:Qt,setFlipSided:ut,setCullFace:Lt,setLineWidth:Rt,setPolygonOffset:re,setScissorTest:zt,activeTexture:D,bindTexture:R,unbindTexture:K,compressedTexImage2D:ft,compressedTexImage3D:mt,texImage2D:qt,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:Te,texStorage3D:wt,texSubImage2D:dt,texSubImage3D:$t,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Ct,scissor:ne,viewport:Wt,reset:Ge}}function Mf(i,t,e,n){let s=a_(n);switch(e){case Vf:return i*t;case Gf:return i*t;case Wf:return i*t*2;case Xf:return i*t/s.components*s.byteLength;case Yh:return i*t/s.components*s.byteLength;case qf:return i*t*2/s.components*s.byteLength;case $h:return i*t*2/s.components*s.byteLength;case Hf:return i*t*3/s.components*s.byteLength;case Gi:return i*t*4/s.components*s.byteLength;case Zh:return i*t*4/s.components*s.byteLength;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:case Ic:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case Cc:return Math.max(i,8)*Math.max(t,8)/2;case Pc:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ka:case $c:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yf:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kc:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a_(i){switch(i){case Cs:case Of:return{byteLength:1,components:1};case qo:case Bf:case ra:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case xr:case Wh:case ws:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,R){return p?new OffscreenCanvas(D,R):Yo("canvas")}function T(D,R,K){let ft=1,mt=zt(D);if((mt.width>K||mt.height>K)&&(ft=K/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let dt=Math.floor(ft*mt.width),$t=Math.floor(ft*mt.height);f===void 0&&(f=y(dt,$t));let Ut=R?y(dt,$t):f;return Ut.width=dt,Ut.height=$t,Ut.getContext("2d").drawImage(D,0,0,dt,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+dt+"x"+$t+")."),Ut}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,R,K,ft,mt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt=R;if(R===i.RED&&(K===i.FLOAT&&(dt=i.R32F),K===i.HALF_FLOAT&&(dt=i.R16F),K===i.UNSIGNED_BYTE&&(dt=i.R8)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.R8UI),K===i.UNSIGNED_SHORT&&(dt=i.R16UI),K===i.UNSIGNED_INT&&(dt=i.R32UI),K===i.BYTE&&(dt=i.R8I),K===i.SHORT&&(dt=i.R16I),K===i.INT&&(dt=i.R32I)),R===i.RG&&(K===i.FLOAT&&(dt=i.RG32F),K===i.HALF_FLOAT&&(dt=i.RG16F),K===i.UNSIGNED_BYTE&&(dt=i.RG8)),R===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RG8UI),K===i.UNSIGNED_SHORT&&(dt=i.RG16UI),K===i.UNSIGNED_INT&&(dt=i.RG32UI),K===i.BYTE&&(dt=i.RG8I),K===i.SHORT&&(dt=i.RG16I),K===i.INT&&(dt=i.RG32I)),R===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),K===i.UNSIGNED_INT&&(dt=i.RGB32UI),K===i.BYTE&&(dt=i.RGB8I),K===i.SHORT&&(dt=i.RGB16I),K===i.INT&&(dt=i.RGB32I)),R===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),K===i.UNSIGNED_INT&&(dt=i.RGBA32UI),K===i.BYTE&&(dt=i.RGBA8I),K===i.SHORT&&(dt=i.RGBA16I),K===i.INT&&(dt=i.RGBA32I)),R===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),R===i.RGBA){let $t=mt?Ml:$e.getTransfer(ft);K===i.FLOAT&&(dt=i.RGBA32F),K===i.HALF_FLOAT&&(dt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(dt=$t===an?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function b(D,R){let K;return D?R===null||R===xr||R===so?K=i.DEPTH24_STENCIL8:R===ws?K=i.DEPTH32F_STENCIL8:R===qo&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===xr||R===so?K=i.DEPTH_COMPONENT24:R===ws?K=i.DEPTH_COMPONENT32F:R===qo&&(K=i.DEPTH_COMPONENT16),K}function W(D,R){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wi&&D.minFilter!==ss?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function N(D){let R=D.target;R.removeEventListener("dispose",N),H(R),R.isVideoTexture&&u.delete(R)}function V(D){let R=D.target;R.removeEventListener("dispose",V),C(R)}function H(D){let R=n.get(D);if(R.__webglInit===void 0)return;let K=D.source,ft=d.get(K);if(ft){let mt=ft[R.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&P(D),Object.keys(ft).length===0&&d.delete(K)}n.remove(D)}function P(D){let R=n.get(D);i.deleteTexture(R.__webglTexture);let K=D.source,ft=d.get(K);delete ft[R.__cacheKey],o.memory.textures--}function C(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(R.__webglFramebuffer[ft]))for(let mt=0;mt<R.__webglFramebuffer[ft].length;mt++)i.deleteFramebuffer(R.__webglFramebuffer[ft][mt]);else i.deleteFramebuffer(R.__webglFramebuffer[ft]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ft])}else{if(Array.isArray(R.__webglFramebuffer))for(let ft=0;ft<R.__webglFramebuffer.length;ft++)i.deleteFramebuffer(R.__webglFramebuffer[ft]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ft=0;ft<R.__webglColorRenderbuffer.length;ft++)R.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ft]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let K=D.textures;for(let ft=0,mt=K.length;ft<mt;ft++){let dt=n.get(K[ft]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(K[ft])}n.remove(D)}let k=0;function it(){k=0}function nt(){let D=k;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),k+=1,D}function st(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function ct(D,R){let K=n.get(D);if(D.isVideoTexture&&Rt(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){let ft=D.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(K,D,R);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function rt(D,R){let K=n.get(D);if(D.version>0&&K.__version!==D.version){pt(K,D,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function St(D,R){let K=n.get(D);if(D.version>0&&K.__version!==D.version){pt(K,D,R);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function at(D,R){let K=n.get(D);if(D.version>0&&K.__version!==D.version){At(K,D,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}let Nt={[Rs]:i.REPEAT,[mr]:i.CLAMP_TO_EDGE,[Ec]:i.MIRRORED_REPEAT},Gt={[Wi]:i.NEAREST,[ap]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[ss]:i.LINEAR,[Dl]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},Vt={[up]:i.NEVER,[xp]:i.ALWAYS,[fp]:i.LESS,[Zf]:i.LEQUAL,[dp]:i.EQUAL,[gp]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function he(D,R){if(R.type===ws&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===ss||R.magFilter===Dl||R.magFilter===xa||R.magFilter===gr||R.minFilter===ss||R.minFilter===Dl||R.minFilter===xa||R.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Nt[R.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Nt[R.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Nt[R.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Gt[R.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Gt[R.minFilter]),R.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Vt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Wi||R.minFilter!==xa&&R.minFilter!==gr||R.type===ws&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function _e(D,R){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",N));let ft=R.source,mt=d.get(ft);mt===void 0&&(mt={},d.set(ft,mt));let dt=st(R);if(dt!==D.__cacheKey){mt[dt]===void 0&&(mt[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),mt[dt].usedTimes++;let $t=mt[D.__cacheKey];$t!==void 0&&(mt[D.__cacheKey].usedTimes--,$t.usedTimes===0&&P(R)),D.__cacheKey=dt,D.__webglTexture=mt[dt].texture}return K}function pt(D,R,K){let ft=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ft=i.TEXTURE_3D);let mt=_e(D,R),dt=R.source;e.bindTexture(ft,D.__webglTexture,i.TEXTURE0+K);let $t=n.get(dt);if(dt.version!==$t.__version||mt===!0){e.activeTexture(i.TEXTURE0+K);let Ut=$e.getPrimaries($e.workingColorSpace),Ct=R.colorSpace===Hs?null:$e.getPrimaries(R.colorSpace),Te=R.colorSpace===Hs||Ut===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let wt=T(R.image,!1,s.maxTextureSize);wt=re(R,wt);let qt=r.convert(R.format,R.colorSpace),oe=r.convert(R.type),ne=E(R.internalFormat,qt,oe,R.colorSpace,R.isVideoTexture);he(ft,R);let Wt,Ce=R.mipmaps,ve=R.isVideoTexture!==!0,Ge=$t.__version===void 0||mt===!0,X=dt.dataReady,Bt=W(R,wt);if(R.isDepthTexture)ne=b(R.format===ro,R.type),Ge&&(ve?e.texStorage2D(i.TEXTURE_2D,1,ne,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,ne,wt.width,wt.height,0,qt,oe,null));else if(R.isDataTexture)if(Ce.length>0){ve&&Ge&&e.texStorage2D(i.TEXTURE_2D,Bt,ne,Ce[0].width,Ce[0].height);for(let lt=0,j=Ce.length;lt<j;lt++)Wt=Ce[lt],ve?X&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,qt,oe,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,ne,Wt.width,Wt.height,0,qt,oe,Wt.data);R.generateMipmaps=!1}else ve?(Ge&&e.texStorage2D(i.TEXTURE_2D,Bt,ne,wt.width,wt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt.width,wt.height,qt,oe,wt.data)):e.texImage2D(i.TEXTURE_2D,0,ne,wt.width,wt.height,0,qt,oe,wt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ve&&Ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,ne,Ce[0].width,Ce[0].height,wt.depth);for(let lt=0,j=Ce.length;lt<j;lt++)if(Wt=Ce[lt],R.format!==Gi)if(qt!==null)if(ve){if(X)if(R.layerUpdates.size>0){let Xt=Mf(Wt.width,Wt.height,R.format,R.type);for(let kt of R.layerUpdates){let ge=Wt.data.subarray(kt*Xt/Wt.data.BYTES_PER_ELEMENT,(kt+1)*Xt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,kt,Wt.width,Wt.height,1,qt,ge)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,wt.depth,qt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,ne,Wt.width,Wt.height,wt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,wt.depth,qt,oe,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,ne,Wt.width,Wt.height,wt.depth,0,qt,oe,Wt.data)}else{ve&&Ge&&e.texStorage2D(i.TEXTURE_2D,Bt,ne,Ce[0].width,Ce[0].height);for(let lt=0,j=Ce.length;lt<j;lt++)Wt=Ce[lt],R.format!==Gi?qt!==null?ve?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,qt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,ne,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?X&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,qt,oe,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,ne,Wt.width,Wt.height,0,qt,oe,Wt.data)}else if(R.isDataArrayTexture)if(ve){if(Ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,ne,wt.width,wt.height,wt.depth),X)if(R.layerUpdates.size>0){let lt=Mf(wt.width,wt.height,R.format,R.type);for(let j of R.layerUpdates){let Xt=wt.data.subarray(j*lt/wt.data.BYTES_PER_ELEMENT,(j+1)*lt/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,wt.width,wt.height,1,qt,oe,Xt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,qt,oe,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,wt.width,wt.height,wt.depth,0,qt,oe,wt.data);else if(R.isData3DTexture)ve?(Ge&&e.texStorage3D(i.TEXTURE_3D,Bt,ne,wt.width,wt.height,wt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,qt,oe,wt.data)):e.texImage3D(i.TEXTURE_3D,0,ne,wt.width,wt.height,wt.depth,0,qt,oe,wt.data);else if(R.isFramebufferTexture){if(Ge)if(ve)e.texStorage2D(i.TEXTURE_2D,Bt,ne,wt.width,wt.height);else{let lt=wt.width,j=wt.height;for(let Xt=0;Xt<Bt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,ne,lt,j,0,qt,oe,null),lt>>=1,j>>=1}}else if(Ce.length>0){if(ve&&Ge){let lt=zt(Ce[0]);e.texStorage2D(i.TEXTURE_2D,Bt,ne,lt.width,lt.height)}for(let lt=0,j=Ce.length;lt<j;lt++)Wt=Ce[lt],ve?X&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,qt,oe,Wt):e.texImage2D(i.TEXTURE_2D,lt,ne,qt,oe,Wt);R.generateMipmaps=!1}else if(ve){if(Ge){let lt=zt(wt);e.texStorage2D(i.TEXTURE_2D,Bt,ne,lt.width,lt.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,oe,wt)}else e.texImage2D(i.TEXTURE_2D,0,ne,qt,oe,wt);g(R)&&m(ft),$t.__version=dt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function At(D,R,K){if(R.image.length!==6)return;let ft=_e(D,R),mt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);let dt=n.get(mt);if(mt.version!==dt.__version||ft===!0){e.activeTexture(i.TEXTURE0+K);let $t=$e.getPrimaries($e.workingColorSpace),Ut=R.colorSpace===Hs?null:$e.getPrimaries(R.colorSpace),Ct=R.colorSpace===Hs||$t===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Te=R.isCompressedTexture||R.image[0].isCompressedTexture,wt=R.image[0]&&R.image[0].isDataTexture,qt=[];for(let j=0;j<6;j++)!Te&&!wt?qt[j]=T(R.image[j],!0,s.maxCubemapSize):qt[j]=wt?R.image[j].image:R.image[j],qt[j]=re(R,qt[j]);let oe=qt[0],ne=r.convert(R.format,R.colorSpace),Wt=r.convert(R.type),Ce=E(R.internalFormat,ne,Wt,R.colorSpace),ve=R.isVideoTexture!==!0,Ge=dt.__version===void 0||ft===!0,X=mt.dataReady,Bt=W(R,oe);he(i.TEXTURE_CUBE_MAP,R);let lt;if(Te){ve&&Ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,Ce,oe.width,oe.height);for(let j=0;j<6;j++){lt=qt[j].mipmaps;for(let Xt=0;Xt<lt.length;Xt++){let kt=lt[Xt];R.format!==Gi?ne!==null?ve?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt,0,0,kt.width,kt.height,ne,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt,Ce,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt,0,0,kt.width,kt.height,ne,Wt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt,Ce,kt.width,kt.height,0,ne,Wt,kt.data)}}}else{if(lt=R.mipmaps,ve&&Ge){lt.length>0&&Bt++;let j=zt(qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,Ce,j.width,j.height)}for(let j=0;j<6;j++)if(wt){ve?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,qt[j].width,qt[j].height,ne,Wt,qt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ce,qt[j].width,qt[j].height,0,ne,Wt,qt[j].data);for(let Xt=0;Xt<lt.length;Xt++){let ge=lt[Xt].image[j].image;ve?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt+1,0,0,ge.width,ge.height,ne,Wt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt+1,Ce,ge.width,ge.height,0,ne,Wt,ge.data)}}else{ve?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ne,Wt,qt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ce,ne,Wt,qt[j]);for(let Xt=0;Xt<lt.length;Xt++){let kt=lt[Xt];ve?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt+1,0,0,ne,Wt,kt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt+1,Ce,ne,Wt,kt.image[j])}}}g(R)&&m(i.TEXTURE_CUBE_MAP),dt.__version=mt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Kt(D,R,K,ft,mt,dt){let $t=r.convert(K.format,K.colorSpace),Ut=r.convert(K.type),Ct=E(K.internalFormat,$t,Ut,K.colorSpace),Te=n.get(R),wt=n.get(K);if(wt.__renderTarget=R,!Te.__hasExternalTextures){let qt=Math.max(1,R.width>>dt),oe=Math.max(1,R.height>>dt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,dt,Ct,qt,oe,R.depth,0,$t,Ut,null):e.texImage2D(mt,dt,Ct,qt,oe,0,$t,Ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Lt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,mt,wt.__webglTexture,0,ut(R)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,mt,wt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(D,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),R.depthBuffer){let ft=R.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,dt=b(R.stencilBuffer,mt),$t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=ut(R);Lt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,dt,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,dt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$t,i.RENDERBUFFER,D)}else{let ft=R.textures;for(let mt=0;mt<ft.length;mt++){let dt=ft[mt],$t=r.convert(dt.format,dt.colorSpace),Ut=r.convert(dt.type),Ct=E(dt.internalFormat,$t,Ut,dt.colorSpace),Te=ut(R);K&&Lt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ct,R.width,R.height):Lt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Ct,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ft=n.get(R.depthTexture);ft.__renderTarget=R,(!ft.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ct(R.depthTexture,0);let mt=ft.__webglTexture,dt=ut(R);if(R.depthTexture.format===jr)Lt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(R.depthTexture.format===ro)Lt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ye(D){let R=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let ft=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ft){let mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),R.__depthDisposeCallback=mt}R.__boundDepthTexture=ft}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");se(R.__webglFramebuffer,D)}else if(K){R.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ft]),R.__webglDepthbuffer[ft]===void 0)R.__webglDepthbuffer[ft]=i.createRenderbuffer(),Pt(R.__webglDepthbuffer[ft],D,!1);else{let mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Pt(R.__webglDepthbuffer,D,!1);else{let ft=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(D,R,K){let ft=n.get(D);R!==void 0&&Kt(ft.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ye(D)}function Re(D){let R=D.texture,K=n.get(D),ft=n.get(R);D.addEventListener("dispose",V);let mt=D.textures,dt=D.isWebGLCubeRenderTarget===!0,$t=mt.length>1;if($t||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=R.version,o.memory.textures++),dt){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let Ct=0;Ct<R.mipmaps.length;Ct++)K.__webglFramebuffer[Ut][Ct]=i.createFramebuffer()}else K.__webglFramebuffer[Ut]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<R.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if($t)for(let Ut=0,Ct=mt.length;Ut<Ct;Ut++){let Te=n.get(mt[Ut]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Lt(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<mt.length;Ut++){let Ct=mt[Ut];K.__webglColorRenderbuffer[Ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);let Te=r.convert(Ct.format,Ct.colorSpace),wt=r.convert(Ct.type),qt=E(Ct.internalFormat,Te,wt,Ct.colorSpace,D.isXRRenderTarget===!0),oe=ut(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,qt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(K.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),he(i.TEXTURE_CUBE_MAP,R);for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ct=0;Ct<R.mipmaps.length;Ct++)Kt(K.__webglFramebuffer[Ut][Ct],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Ct);else Kt(K.__webglFramebuffer[Ut],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);g(R)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let Ut=0,Ct=mt.length;Ut<Ct;Ut++){let Te=mt[Ut],wt=n.get(Te);e.bindTexture(i.TEXTURE_2D,wt.__webglTexture),he(i.TEXTURE_2D,Te),Kt(K.__webglFramebuffer,D,Te,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,0),g(Te)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Ut=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ut,ft.__webglTexture),he(Ut,R),R.mipmaps&&R.mipmaps.length>0)for(let Ct=0;Ct<R.mipmaps.length;Ct++)Kt(K.__webglFramebuffer[Ct],D,R,i.COLOR_ATTACHMENT0,Ut,Ct);else Kt(K.__webglFramebuffer,D,R,i.COLOR_ATTACHMENT0,Ut,0);g(R)&&m(Ut),e.unbindTexture()}D.depthBuffer&&ye(D)}function yt(D){let R=D.textures;for(let K=0,ft=R.length;K<ft;K++){let mt=R[K];if(g(mt)){let dt=S(D),$t=n.get(mt).__webglTexture;e.bindTexture(dt,$t),m(dt),e.unbindTexture()}}}let It=[],z=[];function Qt(D){if(D.samples>0){if(Lt(D)===!1){let R=D.textures,K=D.width,ft=D.height,mt=i.COLOR_BUFFER_BIT,dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=n.get(D),Ut=R.length>1;if(Ut)for(let Ct=0;Ct<R.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let Ct=0;Ct<R.length;Ct++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$t.__webglColorRenderbuffer[Ct]);let Te=n.get(R[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,K,ft,0,0,K,ft,mt,i.NEAREST),l===!0&&(It.length=0,z.length=0,It.push(i.COLOR_ATTACHMENT0+Ct),D.depthBuffer&&D.resolveDepthBuffer===!1&&(It.push(dt),z.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ut)for(let Ct=0;Ct<R.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,$t.__webglColorRenderbuffer[Ct]);let Te=n.get(R[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let R=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function ut(D){return Math.min(s.maxSamples,D.samples)}function Lt(D){let R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Rt(D){let R=o.render.frame;u.get(D)!==R&&(u.set(D,R),D.update())}function re(D,R){let K=D.colorSpace,ft=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==yo&&K!==Hs&&($e.getTransfer(K)===an?(ft!==Gi||mt!==Cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}function zt(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=it,this.setTexture2D=ct,this.setTexture2DArray=rt,this.setTexture3D=St,this.setTextureCube=at,this.rebindTextures=fe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Lt}function c_(i,t){function e(n,s=Hs){let r,o=$e.getTransfer(s);if(n===Cs)return i.UNSIGNED_BYTE;if(n===Xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return i.BYTE;if(n===Bf)return i.SHORT;if(n===qo)return i.UNSIGNED_SHORT;if(n===Wh)return i.INT;if(n===xr)return i.UNSIGNED_INT;if(n===ws)return i.FLOAT;if(n===ra)return i.HALF_FLOAT;if(n===Vf)return i.ALPHA;if(n===Hf)return i.RGB;if(n===Gi)return i.RGBA;if(n===Gf)return i.LUMINANCE;if(n===Wf)return i.LUMINANCE_ALPHA;if(n===jr)return i.DEPTH_COMPONENT;if(n===ro)return i.DEPTH_STENCIL;if(n===Xf)return i.RED;if(n===Yh)return i.RED_INTEGER;if(n===qf)return i.RG;if(n===$h)return i.RG_INTEGER;if(n===Zh)return i.RGBA_INTEGER;if(n===Ya||n===$a||n===Za||n===Ja)if(o===an)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Rc||n===Cc||n===Ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Lc||n===Dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Lc)return o===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uc||n===Nc||n===Fc||n===zc||n===Oc||n===Bc||n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===$c||n===Zc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return o===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===Jc||n===Kc||n===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var mh=class extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Me=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},h_={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let T of t.hand.values()){let g=e.getJointPose(T,n),m=this._getHandJoint(h,T);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,y=.005;h.inputState.pinching&&d>p+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new yi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new as({vertexShader:u_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends $s{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,f=null,d=null,p=null,y=null,T=new gh,g=e.getContextAttributes(),m=null,S=null,E=[],b=[],W=new Et,N=null,V=new zn;V.viewport=new cn;let H=new zn;H.viewport=new cn;let P=[V,H],C=new mh,k=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let At=E[pt];return At===void 0&&(At=new Go,E[pt]=At),At.getTargetRaySpace()},this.getControllerGrip=function(pt){let At=E[pt];return At===void 0&&(At=new Go,E[pt]=At),At.getGripSpace()},this.getHand=function(pt){let At=E[pt];return At===void 0&&(At=new Go,E[pt]=At),At.getHandSpace()};function nt(pt){let At=b.indexOf(pt.inputSource);if(At===-1)return;let Kt=E[At];Kt!==void 0&&(Kt.update(pt.inputSource,pt.frame,h||o),Kt.dispatchEvent({type:pt.type,data:pt.inputSource}))}function st(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",ct);for(let pt=0;pt<E.length;pt++){let At=b[pt];At!==null&&(b[pt]=null,E[pt].disconnect(At))}k=null,it=null,T.reset(),t.setRenderTarget(m),p=null,d=null,f=null,s=null,S=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){a=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(pt){h=pt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",st),s.addEventListener("inputsourceschange",ct),g.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0){let At={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xi(p.framebufferWidth,p.framebufferHeight,{format:Gi,type:Cs,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let At=null,Kt=null,Pt=null;g.depth&&(Pt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=g.stencil?ro:jr,Kt=g.stencil?so:xr);let se={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(se),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Xi(d.textureWidth,d.textureHeight,{format:Gi,type:Cs,depthTexture:new ll(d.textureWidth,d.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ct(pt){for(let At=0;At<pt.removed.length;At++){let Kt=pt.removed[At],Pt=b.indexOf(Kt);Pt>=0&&(b[Pt]=null,E[Pt].disconnect(Kt))}for(let At=0;At<pt.added.length;At++){let Kt=pt.added[At],Pt=b.indexOf(Kt);if(Pt===-1){for(let ye=0;ye<E.length;ye++)if(ye>=b.length){b.push(Kt),Pt=ye;break}else if(b[ye]===null){b[ye]=Kt,Pt=ye;break}if(Pt===-1)break}let se=E[Pt];se&&se.connect(Kt)}}let rt=new F,St=new F;function at(pt,At,Kt){rt.setFromMatrixPosition(At.matrixWorld),St.setFromMatrixPosition(Kt.matrixWorld);let Pt=rt.distanceTo(St),se=At.projectionMatrix.elements,ye=Kt.projectionMatrix.elements,fe=se[14]/(se[10]-1),Re=se[14]/(se[10]+1),yt=(se[9]+1)/se[5],It=(se[9]-1)/se[5],z=(se[8]-1)/se[0],Qt=(ye[8]+1)/ye[0],ut=fe*z,Lt=fe*Qt,Rt=Pt/(-z+Qt),re=Rt*-z;if(At.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(re),pt.translateZ(Rt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),se[10]===-1)pt.projectionMatrix.copy(At.projectionMatrix),pt.projectionMatrixInverse.copy(At.projectionMatrixInverse);else{let zt=fe+Rt,D=Re+Rt,R=ut-re,K=Lt+(Pt-re),ft=yt*Re/D*zt,mt=It*Re/D*zt;pt.projectionMatrix.makePerspective(R,K,ft,mt,zt,D),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Nt(pt,At){At===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(At.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let At=pt.near,Kt=pt.far;T.texture!==null&&(T.depthNear>0&&(At=T.depthNear),T.depthFar>0&&(Kt=T.depthFar)),C.near=H.near=V.near=At,C.far=H.far=V.far=Kt,(k!==C.near||it!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,it=C.far),V.layers.mask=pt.layers.mask|2,H.layers.mask=pt.layers.mask|4,C.layers.mask=V.layers.mask|H.layers.mask;let Pt=pt.parent,se=C.cameras;Nt(C,Pt);for(let ye=0;ye<se.length;ye++)Nt(se[ye],Pt);se.length===2?at(C,V,H):C.projectionMatrix.copy(V.projectionMatrix),Gt(pt,C,Pt)};function Gt(pt,At,Kt){Kt===null?pt.matrix.copy(At.matrixWorld):(pt.matrix.copy(Kt.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(At.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(At.projectionMatrix),pt.projectionMatrixInverse.copy(At.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=eh*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(pt){l=pt,d!==null&&(d.fixedFoveation=pt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=pt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let Vt=null;function he(pt,At){if(u=At.getViewerPose(h||o),y=At,u!==null){let Kt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Pt=!1;Kt.length!==C.cameras.length&&(C.cameras.length=0,Pt=!0);for(let ye=0;ye<Kt.length;ye++){let fe=Kt[ye],Re=null;if(p!==null)Re=p.getViewport(fe);else{let It=f.getViewSubImage(d,fe);Re=It.viewport,ye===0&&(t.setRenderTargetTextures(S,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(S))}let yt=P[ye];yt===void 0&&(yt=new zn,yt.layers.enable(ye),yt.viewport=new cn,P[ye]=yt),yt.matrix.fromArray(fe.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(fe.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Re.x,Re.y,Re.width,Re.height),ye===0&&(C.matrix.copy(yt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Pt===!0&&C.cameras.push(yt)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){let ye=f.getDepthInformation(Kt[0]);ye&&ye.isValid&&ye.texture&&T.init(t,ye,s.renderState)}}for(let Kt=0;Kt<E.length;Kt++){let Pt=b[Kt],se=E[Kt];Pt!==null&&se!==void 0&&se.update(Pt,At,h||o)}Vt&&Vt(pt,At),At.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:At}),y=null}let _e=new Qf;_e.setAnimationLoop(he),this.setAnimationLoop=function(pt){Vt=pt},this.dispose=function(){}}},ur=new os,d_=new un;function p_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,jf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,E,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),T(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,E):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),E=S.envMap,b=S.envMapRotation;E&&(g.envMap.value=E,ur.copy(b),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(ur)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function T(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){let b=E.program;n.uniformBlockBinding(S,b)}function h(S,E){let b=s[S.id];b===void 0&&(y(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",g));let W=E.program;n.updateUBOMapping(S,W);let N=t.render.frame;r[S.id]!==N&&(d(S),r[S.id]=N)}function u(S){let E=f();S.__bindingPointIndex=E;let b=i.createBuffer(),W=S.__size,N=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,W,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let E=s[S.id],b=S.uniforms,W=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let N=0,V=b.length;N<V;N++){let H=Array.isArray(b[N])?b[N]:[b[N]];for(let P=0,C=H.length;P<C;P++){let k=H[P];if(p(k,N,P,W)===!0){let it=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value],st=0;for(let ct=0;ct<nt.length;ct++){let rt=nt[ct],St=T(rt);typeof rt=="number"||typeof rt=="boolean"?(k.__data[0]=rt,i.bufferSubData(i.UNIFORM_BUFFER,it+st,k.__data)):rt.isMatrix3?(k.__data[0]=rt.elements[0],k.__data[1]=rt.elements[1],k.__data[2]=rt.elements[2],k.__data[3]=0,k.__data[4]=rt.elements[3],k.__data[5]=rt.elements[4],k.__data[6]=rt.elements[5],k.__data[7]=0,k.__data[8]=rt.elements[6],k.__data[9]=rt.elements[7],k.__data[10]=rt.elements[8],k.__data[11]=0):(rt.toArray(k.__data,st),st+=St.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,it,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,b,W){let N=S.value,V=E+"_"+b;if(W[V]===void 0)return typeof N=="number"||typeof N=="boolean"?W[V]=N:W[V]=N.clone(),!0;{let H=W[V];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return W[V]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function y(S){let E=S.uniforms,b=0,W=16;for(let V=0,H=E.length;V<H;V++){let P=Array.isArray(E[V])?E[V]:[E[V]];for(let C=0,k=P.length;C<k;C++){let it=P[C],nt=Array.isArray(it.value)?it.value:[it.value];for(let st=0,ct=nt.length;st<ct;st++){let rt=nt[st],St=T(rt),at=b%W,Nt=at%St.boundary,Gt=at+Nt;b+=Nt,Gt!==0&&W-Gt<St.storage&&(b+=W-Gt),it.__data=new Float32Array(St.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=b,b+=St.storage}}}let N=b%W;return N>0&&(b+=W-N),S.__size=b,S.__cache={},this}function T(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function g(S){let E=S.target;E.removeEventListener("dispose",g);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:m}}var lo=class{constructor(t={}){let{canvas:e=yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=new Uint32Array(4),T=new Int32Array(4),g=null,m=null,S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Xs,this.toneMappingExposure=1;let b=this,W=!1,N=0,V=0,H=null,P=-1,C=null,k=new cn,it=new cn,nt=null,st=new Se(0),ct=0,rt=e.width,St=e.height,at=1,Nt=null,Gt=null,Vt=new cn(0,0,rt,St),he=new cn(0,0,rt,St),_e=!1,pt=new Jo,At=!1,Kt=!1,Pt=new un,se=new un,ye=new F,fe=new cn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function It(){return H===null?at:1}let z=n;function Qt(I,q){return e.getContext(I,q)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",kt,!1),z===null){let q="webgl2";if(z=Qt(q,I),z===null)throw Qt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ut,Lt,Rt,re,zt,D,R,K,ft,mt,dt,$t,Ut,Ct,Te,wt,qt,oe,ne,Wt,Ce,ve,Ge,X;function Bt(){ut=new Pg(z),ut.init(),ve=new c_(z,ut),Lt=new Tg(z,ut,t,ve),Rt=new o_(z,ut),Lt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),re=new Ug(z),zt=new Yx,D=new l_(z,ut,Rt,zt,Lt,ve,re),R=new Ag(b),K=new Ig(b),ft=new Vp(z),Ge=new Sg(z,ft),mt=new Lg(z,ft,re,Ge),dt=new Fg(z,mt,ft,re),ne=new Ng(z,Lt,D),wt=new Eg(zt),$t=new qx(b,R,K,ut,Lt,Ge,wt),Ut=new p_(b,zt),Ct=new Zx,Te=new e_(ut),oe=new bg(b,R,K,Rt,dt,p,l),qt=new s_(b,dt,Lt),X=new m_(z,re,Lt,Rt),Wt=new wg(z,ut,re),Ce=new Dg(z,ut,re),re.programs=$t.programs,b.capabilities=Lt,b.extensions=ut,b.properties=zt,b.renderLists=Ct,b.shadowMap=qt,b.state=Rt,b.info=re}Bt();let lt=new xh(b,z);this.xr=lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let I=ut.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ut.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(I){I!==void 0&&(at=I,this.setSize(rt,St,!1))},this.getSize=function(I){return I.set(rt,St)},this.setSize=function(I,q,Q=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=I,St=q,e.width=Math.floor(I*at),e.height=Math.floor(q*at),Q===!0&&(e.style.width=I+"px",e.style.height=q+"px"),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set(rt*at,St*at).floor()},this.setDrawingBufferSize=function(I,q,Q){rt=I,St=q,at=Q,e.width=Math.floor(I*Q),e.height=Math.floor(q*Q),this.setViewport(0,0,I,q)},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(Vt)},this.setViewport=function(I,q,Q,et){I.isVector4?Vt.set(I.x,I.y,I.z,I.w):Vt.set(I,q,Q,et),Rt.viewport(k.copy(Vt).multiplyScalar(at).round())},this.getScissor=function(I){return I.copy(he)},this.setScissor=function(I,q,Q,et){I.isVector4?he.set(I.x,I.y,I.z,I.w):he.set(I,q,Q,et),Rt.scissor(it.copy(he).multiplyScalar(at).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(I){Rt.setScissorTest(_e=I)},this.setOpaqueSort=function(I){Nt=I},this.setTransparentSort=function(I){Gt=I},this.getClearColor=function(I){return I.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(I=!0,q=!0,Q=!0){let et=0;if(I){let $=!1;if(H!==null){let G=H.texture.format;$=G===Zh||G===$h||G===Yh}if($){let G=H.texture.type,Ot=G===Cs||G===xr||G===qo||G===so||G===Xh||G===qh,Zt=oe.getClearColor(),te=oe.getClearAlpha(),le=Zt.r,be=Zt.g,Jt=Zt.b;Ot?(y[0]=le,y[1]=be,y[2]=Jt,y[3]=te,z.clearBufferuiv(z.COLOR,0,y)):(T[0]=le,T[1]=be,T[2]=Jt,T[3]=te,z.clearBufferiv(z.COLOR,0,T))}else et|=z.COLOR_BUFFER_BIT}q&&(et|=z.DEPTH_BUFFER_BIT),Q&&(et|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),Ct.dispose(),Te.dispose(),zt.dispose(),R.dispose(),K.dispose(),dt.dispose(),Ge.dispose(),X.dispose(),$t.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ai),lt.removeEventListener("sessionend",Ji),li.stop()};function j(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;let I=re.autoReset,q=qt.enabled,Q=qt.autoUpdate,et=qt.needsUpdate,$=qt.type;Bt(),re.autoReset=I,qt.enabled=q,qt.autoUpdate=Q,qt.needsUpdate=et,qt.type=$}function kt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ge(I){let q=I.target;q.removeEventListener("dispose",ge),Ke(q)}function Ke(I){xn(I),zt.remove(I)}function xn(I){let q=zt.get(I).programs;q!==void 0&&(q.forEach(function(Q){$t.releaseProgram(Q)}),I.isShaderMaterial&&$t.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,Q,et,$,G){q===null&&(q=Re);let Ot=$.isMesh&&$.matrixWorld.determinant()<0,Zt=vi(I,q,Q,et,$);Rt.setMaterial(et,Ot);let te=Q.index,le=1;if(et.wireframe===!0){if(te=mt.getWireframeAttribute(Q),te===void 0)return;le=2}let be=Q.drawRange,Jt=Q.attributes.position,B=be.start*le,Pe=(be.start+be.count)*le;G!==null&&(B=Math.max(B,G.start*le),Pe=Math.min(Pe,(G.start+G.count)*le)),te!==null?(B=Math.max(B,0),Pe=Math.min(Pe,te.count)):Jt!=null&&(B=Math.max(B,0),Pe=Math.min(Pe,Jt.count));let Ze=Pe-B;if(Ze<0||Ze===1/0)return;Ge.setup($,et,Zt,Q,te);let rn,Ve=Wt;if(te!==null&&(rn=ft.get(te),Ve=Ce,Ve.setIndex(rn)),$.isMesh)et.wireframe===!0?(Rt.setLineWidth(et.wireframeLinewidth*It()),Ve.setMode(z.LINES)):Ve.setMode(z.TRIANGLES);else if($.isLine){let ee=et.linewidth;ee===void 0&&(ee=1),Rt.setLineWidth(ee*It()),$.isLineSegments?Ve.setMode(z.LINES):$.isLineLoop?Ve.setMode(z.LINE_LOOP):Ve.setMode(z.LINE_STRIP)}else $.isPoints?Ve.setMode(z.POINTS):$.isSprite&&Ve.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ve.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let ee=$._multiDrawStarts,Sn=$._multiDrawCounts,ze=$._multiDrawCount,Vn=te?ft.get(te).bytesPerElement:1,Un=zt.get(et).currentProgram.getUniforms();for(let on=0;on<ze;on++)Un.setValue(z,"_gl_DrawID",on),Ve.render(ee[on]/Vn,Sn[on])}else if($.isInstancedMesh)Ve.renderInstances(B,Ze,$.count);else if(Q.isInstancedBufferGeometry){let ee=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Sn=Math.min(Q.instanceCount,ee);Ve.renderInstances(B,Ze,Sn)}else Ve.render(B,Ze)};function de(I,q,Q){I.transparent===!0&&I.side===Pn&&I.forceSinglePass===!1?(I.side=Gn,I.needsUpdate=!0,ds(I,q,Q),I.side=Ys,I.needsUpdate=!0,ds(I,q,Q),I.side=Pn):ds(I,q,Q)}this.compile=function(I,q,Q=null){Q===null&&(Q=I),m=Te.get(Q),m.init(q),E.push(m),Q.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),I!==Q&&I.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let et=new Set;return I.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let G=$.material;if(G)if(Array.isArray(G))for(let Ot=0;Ot<G.length;Ot++){let Zt=G[Ot];de(Zt,Q,$),et.add(Zt)}else de(G,Q,$),et.add(G)}),E.pop(),m=null,et},this.compileAsync=function(I,q,Q=null){let et=this.compile(I,q,Q);return new Promise($=>{function G(){if(et.forEach(function(Ot){zt.get(Ot).currentProgram.isReady()&&et.delete(Ot)}),et.size===0){$(I);return}setTimeout(G,10)}ut.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let An=null;function mn(I){An&&An(I)}function ai(){li.stop()}function Ji(){li.start()}let li=new Qf;li.setAnimationLoop(mn),typeof self!="undefined"&&li.setContext(self),this.setAnimationLoop=function(I){An=I,lt.setAnimationLoop(I),I===null?li.stop():li.start()},lt.addEventListener("sessionstart",ai),lt.addEventListener("sessionend",Ji),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(q),q=lt.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,q,H),m=Te.get(I,E.length),m.init(q),E.push(m),se.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),pt.setFromProjectionMatrix(se),Kt=this.localClippingEnabled,At=wt.init(this.clippingPlanes,Kt),g=Ct.get(I,S.length),g.init(),S.push(g),lt.enabled===!0&&lt.isPresenting===!0){let G=b.xr.getDepthSensingMesh();G!==null&&tn(G,q,-1/0,b.sortObjects)}tn(I,q,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(Nt,Gt),yt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,yt&&oe.addToRenderList(g,I),this.info.render.frame++,At===!0&&wt.beginShadows();let Q=m.state.shadowsArray;qt.render(Q,I,q),At===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=g.opaque,$=g.transmissive;if(m.setupLights(),q.isArrayCamera){let G=q.cameras;if($.length>0)for(let Ot=0,Zt=G.length;Ot<Zt;Ot++){let te=G[Ot];Rn(et,$,I,te)}yt&&oe.render(I);for(let Ot=0,Zt=G.length;Ot<Zt;Ot++){let te=G[Ot];fs(g,I,te,te.viewport)}}else $.length>0&&Rn(et,$,I,q),yt&&oe.render(I),fs(g,I,q);H!==null&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),I.isScene===!0&&I.onAfterRender(b,I,q),Ge.resetDefaultState(),P=-1,C=null,E.pop(),E.length>0?(m=E[E.length-1],At===!0&&wt.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function tn(I,q,Q,et){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||pt.intersectsSprite(I)){et&&fe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(se);let Ot=dt.update(I),Zt=I.material;Zt.visible&&g.push(I,Ot,Zt,Q,fe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||pt.intersectsObject(I))){let Ot=dt.update(I),Zt=I.material;if(et&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),fe.copy(I.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),fe.copy(Ot.boundingSphere.center)),fe.applyMatrix4(I.matrixWorld).applyMatrix4(se)),Array.isArray(Zt)){let te=Ot.groups;for(let le=0,be=te.length;le<be;le++){let Jt=te[le],B=Zt[Jt.materialIndex];B&&B.visible&&g.push(I,Ot,B,Q,fe.z,Jt)}}else Zt.visible&&g.push(I,Ot,Zt,Q,fe.z,null)}}let G=I.children;for(let Ot=0,Zt=G.length;Ot<Zt;Ot++)tn(G[Ot],q,Q,et)}function fs(I,q,Q,et){let $=I.opaque,G=I.transmissive,Ot=I.transparent;m.setupLightsView(Q),At===!0&&wt.setGlobalState(b.clippingPlanes,Q),et&&Rt.viewport(k.copy(et)),$.length>0&&xi($,q,Q),G.length>0&&xi(G,q,Q),Ot.length>0&&xi(Ot,q,Q),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Rn(I,q,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[et.id]===void 0&&(m.state.transmissionRenderTarget[et.id]=new Xi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?ra:Cs,minFilter:gr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let G=m.state.transmissionRenderTarget[et.id],Ot=et.viewport||k;G.setSize(Ot.z,Ot.w);let Zt=b.getRenderTarget();b.setRenderTarget(G),b.getClearColor(st),ct=b.getClearAlpha(),ct<1&&b.setClearColor(16777215,.5),b.clear(),yt&&oe.render(Q);let te=b.toneMapping;b.toneMapping=Xs;let le=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),m.setupLightsView(et),At===!0&&wt.setGlobalState(b.clippingPlanes,et),xi(I,Q,et),D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G),ut.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Jt=0,B=q.length;Jt<B;Jt++){let Pe=q[Jt],Ze=Pe.object,rn=Pe.geometry,Ve=Pe.material,ee=Pe.group;if(Ve.side===Pn&&Ze.layers.test(et.layers)){let Sn=Ve.side;Ve.side=Gn,Ve.needsUpdate=!0,jt(Ze,Q,et,rn,Ve,ee),Ve.side=Sn,Ve.needsUpdate=!0,be=!0}}be===!0&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G))}b.setRenderTarget(Zt),b.setClearColor(st,ct),le!==void 0&&(et.viewport=le),b.toneMapping=te}function xi(I,q,Q){let et=q.isScene===!0?q.overrideMaterial:null;for(let $=0,G=I.length;$<G;$++){let Ot=I[$],Zt=Ot.object,te=Ot.geometry,le=et===null?Ot.material:et,be=Ot.group;Zt.layers.test(Q.layers)&&jt(Zt,q,Q,te,le,be)}}function jt(I,q,Q,et,$,G){I.onBeforeRender(b,q,Q,et,$,G),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(b,q,Q,et,I,G),$.transparent===!0&&$.side===Pn&&$.forceSinglePass===!1?($.side=Gn,$.needsUpdate=!0,b.renderBufferDirect(Q,q,et,$,I,G),$.side=Ys,$.needsUpdate=!0,b.renderBufferDirect(Q,q,et,$,I,G),$.side=Pn):b.renderBufferDirect(Q,q,et,$,I,G),I.onAfterRender(b,q,Q,et,$,G)}function ds(I,q,Q){q.isScene!==!0&&(q=Re);let et=zt.get(I),$=m.state.lights,G=m.state.shadowsArray,Ot=$.state.version,Zt=$t.getParameters(I,$.state,G,q,Q),te=$t.getProgramCacheKey(Zt),le=et.programs;et.environment=I.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(I.isMeshStandardMaterial?K:R).get(I.envMap||et.environment),et.envMapRotation=et.environment!==null&&I.envMap===null?q.environmentRotation:I.envMapRotation,le===void 0&&(I.addEventListener("dispose",ge),le=new Map,et.programs=le);let be=le.get(te);if(be!==void 0){if(et.currentProgram===be&&et.lightsStateVersion===Ot)return nr(I,Zt),be}else Zt.uniforms=$t.getUniforms(I),I.onBeforeCompile(Zt,b),be=$t.acquireProgram(Zt,te),le.set(te,be),et.uniforms=Zt.uniforms;let Jt=et.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Jt.clippingPlanes=wt.uniform),nr(I,Zt),et.needsLights=ir(I),et.lightsStateVersion=Ot,et.needsLights&&(Jt.ambientLightColor.value=$.state.ambient,Jt.lightProbe.value=$.state.probe,Jt.directionalLights.value=$.state.directional,Jt.directionalLightShadows.value=$.state.directionalShadow,Jt.spotLights.value=$.state.spot,Jt.spotLightShadows.value=$.state.spotShadow,Jt.rectAreaLights.value=$.state.rectArea,Jt.ltc_1.value=$.state.rectAreaLTC1,Jt.ltc_2.value=$.state.rectAreaLTC2,Jt.pointLights.value=$.state.point,Jt.pointLightShadows.value=$.state.pointShadow,Jt.hemisphereLights.value=$.state.hemi,Jt.directionalShadowMap.value=$.state.directionalShadowMap,Jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Jt.spotShadowMap.value=$.state.spotShadowMap,Jt.spotLightMatrix.value=$.state.spotLightMatrix,Jt.spotLightMap.value=$.state.spotLightMap,Jt.pointShadowMap.value=$.state.pointShadowMap,Jt.pointShadowMatrix.value=$.state.pointShadowMatrix),et.currentProgram=be,et.uniformsList=null,be}function zi(I){if(I.uniformsList===null){let q=I.currentProgram.getUniforms();I.uniformsList=to.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function nr(I,q){let Q=zt.get(I);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function vi(I,q,Q,et,$){q.isScene!==!0&&(q=Re),D.resetTextureUnits();let G=q.fog,Ot=et.isMeshStandardMaterial?q.environment:null,Zt=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:yo,te=(et.isMeshStandardMaterial?K:R).get(et.envMap||Ot),le=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,be=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Jt=!!Q.morphAttributes.position,B=!!Q.morphAttributes.normal,Pe=!!Q.morphAttributes.color,Ze=Xs;et.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ze=b.toneMapping);let rn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ve=rn!==void 0?rn.length:0,ee=zt.get(et),Sn=m.state.lights;if(At===!0&&(Kt===!0||I!==C)){let en=I===C&&et.id===P;wt.setState(et,I,en)}let ze=!1;et.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Sn.state.version||ee.outputColorSpace!==Zt||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isBatchedMesh&&ee.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ee.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ee.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ee.instancingMorph===!1&&$.morphTexture!==null||ee.envMap!==te||et.fog===!0&&ee.fog!==G||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==wt.numPlanes||ee.numIntersection!==wt.numIntersection)||ee.vertexAlphas!==le||ee.vertexTangents!==be||ee.morphTargets!==Jt||ee.morphNormals!==B||ee.morphColors!==Pe||ee.toneMapping!==Ze||ee.morphTargetsCount!==Ve)&&(ze=!0):(ze=!0,ee.__version=et.version);let Vn=ee.currentProgram;ze===!0&&(Vn=ds(et,q,$));let Un=!1,on=!1,qn=!1,We=Vn.getUniforms(),ci=ee.uniforms;if(Rt.useProgram(Vn.program)&&(Un=!0,on=!0,qn=!0),et.id!==P&&(P=et.id,on=!0),Un||C!==I){Rt.buffers.depth.getReversed()?(Pt.copy(I.projectionMatrix),Mp(Pt),bp(Pt),We.setValue(z,"projectionMatrix",Pt)):We.setValue(z,"projectionMatrix",I.projectionMatrix),We.setValue(z,"viewMatrix",I.matrixWorldInverse);let Yn=We.map.cameraPosition;Yn!==void 0&&Yn.setValue(z,ye.setFromMatrixPosition(I.matrixWorld)),Lt.logarithmicDepthBuffer&&We.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&We.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,on=!0,qn=!0)}if($.isSkinnedMesh){We.setOptional(z,$,"bindMatrix"),We.setOptional(z,$,"bindMatrixInverse");let en=$.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),We.setValue(z,"boneTexture",en.boneTexture,D))}$.isBatchedMesh&&(We.setOptional(z,$,"batchingTexture"),We.setValue(z,"batchingTexture",$._matricesTexture,D),We.setOptional(z,$,"batchingIdTexture"),We.setValue(z,"batchingIdTexture",$._indirectTexture,D),We.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&We.setValue(z,"batchingColorTexture",$._colorsTexture,D));let He=Q.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&ne.update($,Q,Vn),(on||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,We.setValue(z,"receiveShadow",$.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(ci.envMap.value=te,ci.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(ci.envMapIntensity.value=q.environmentIntensity),on&&(We.setValue(z,"toneMappingExposure",b.toneMappingExposure),ee.needsLights&&Er(ci,qn),G&&et.fog===!0&&Ut.refreshFogUniforms(ci,G),Ut.refreshMaterialUniforms(ci,et,at,St,m.state.transmissionRenderTarget[I.id]),to.upload(z,zi(ee),ci,D)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(to.upload(z,zi(ee),ci,D),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&We.setValue(z,"center",$.center),We.setValue(z,"modelViewMatrix",$.modelViewMatrix),We.setValue(z,"normalMatrix",$.normalMatrix),We.setValue(z,"modelMatrix",$.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let en=et.uniformsGroups;for(let Yn=0,In=en.length;Yn<In;Yn++){let wn=en[Yn];X.update(wn,Vn),X.bind(wn,Vn)}}return Vn}function Er(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function ir(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(I,q,Q){zt.get(I.texture).__webglTexture=q,zt.get(I.depthTexture).__webglTexture=Q;let et=zt.get(I);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,q){let Q=zt.get(I);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(I,q=0,Q=0){H=I,N=q,V=Q;let et=!0,$=null,G=!1,Ot=!1;if(I){let te=zt.get(I);if(te.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(z.FRAMEBUFFER,null),et=!1;else if(te.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(te.__hasExternalTextures)D.rebindTextures(I,zt.get(I.texture).__webglTexture,zt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Jt=I.depthTexture;if(te.__boundDepthTexture!==Jt){if(Jt!==null&&zt.has(Jt)&&(I.width!==Jt.image.width||I.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}let le=I.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Ot=!0);let be=zt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(be[q])?$=be[q][Q]:$=be[q],G=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?$=zt.get(I).__webglMultisampledFramebuffer:Array.isArray(be)?$=be[Q]:$=be,k.copy(I.viewport),it.copy(I.scissor),nt=I.scissorTest}else k.copy(Vt).multiplyScalar(at).floor(),it.copy(he).multiplyScalar(at).floor(),nt=_e;if(Rt.bindFramebuffer(z.FRAMEBUFFER,$)&&et&&Rt.drawBuffers(I,$),Rt.viewport(k),Rt.scissor(it),Rt.setScissorTest(nt),G){let te=zt.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,te.__webglTexture,Q)}else if(Ot){let te=zt.get(I.texture),le=q||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,te.__webglTexture,Q||0,le)}P=-1},this.readRenderTargetPixels=function(I,q,Q,et,$,G,Ot){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=zt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ot!==void 0&&(Zt=Zt[Ot]),Zt){Rt.bindFramebuffer(z.FRAMEBUFFER,Zt);try{let te=I.texture,le=te.format,be=te.type;if(!Lt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-et&&Q>=0&&Q<=I.height-$&&z.readPixels(q,Q,et,$,ve.convert(le),ve.convert(be),G)}finally{let te=H!==null?zt.get(H).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(I,q,Q,et,$,G,Ot){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=zt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ot!==void 0&&(Zt=Zt[Ot]),Zt){let te=I.texture,le=te.format,be=te.type;if(!Lt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=I.width-et&&Q>=0&&Q<=I.height-$){Rt.bindFramebuffer(z.FRAMEBUFFER,Zt);let Jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.bufferData(z.PIXEL_PACK_BUFFER,G.byteLength,z.STREAM_READ),z.readPixels(q,Q,et,$,ve.convert(le),ve.convert(be),0);let B=H!==null?zt.get(H).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,B);let Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vp(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,G),z.deleteBuffer(Jt),z.deleteSync(Pe),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,q=null,Q=0){I.isTexture!==!0&&(Vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,I=arguments[1]);let et=Math.pow(2,-Q),$=Math.floor(I.image.width*et),G=Math.floor(I.image.height*et),Ot=q!==null?q.x:0,Zt=q!==null?q.y:0;D.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Ot,Zt,$,G),Rt.unbindTexture()},this.copyTextureToTexture=function(I,q,Q=null,et=null,$=0){I.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,I=arguments[1],q=arguments[2],$=arguments[3]||0,Q=null);let G,Ot,Zt,te,le,be,Jt,B,Pe,Ze=I.isCompressedTexture?I.mipmaps[$]:I.image;Q!==null?(G=Q.max.x-Q.min.x,Ot=Q.max.y-Q.min.y,Zt=Q.isBox3?Q.max.z-Q.min.z:1,te=Q.min.x,le=Q.min.y,be=Q.isBox3?Q.min.z:0):(G=Ze.width,Ot=Ze.height,Zt=Ze.depth||1,te=0,le=0,be=0),et!==null?(Jt=et.x,B=et.y,Pe=et.z):(Jt=0,B=0,Pe=0);let rn=ve.convert(q.format),Ve=ve.convert(q.type),ee;q.isData3DTexture?(D.setTexture3D(q,0),ee=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(D.setTexture2DArray(q,0),ee=z.TEXTURE_2D_ARRAY):(D.setTexture2D(q,0),ee=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let Sn=z.getParameter(z.UNPACK_ROW_LENGTH),ze=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Vn=z.getParameter(z.UNPACK_SKIP_PIXELS),Un=z.getParameter(z.UNPACK_SKIP_ROWS),on=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ze.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ze.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,le),z.pixelStorei(z.UNPACK_SKIP_IMAGES,be);let qn=I.isDataArrayTexture||I.isData3DTexture,We=q.isDataArrayTexture||q.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let ci=zt.get(I),He=zt.get(q),en=zt.get(ci.__renderTarget),Yn=zt.get(He.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,en.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let In=0;In<Zt;In++)qn&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(I).__webglTexture,$,be+In),I.isDepthTexture?(We&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(q).__webglTexture,$,Pe+In),z.blitFramebuffer(te,le,G,Ot,Jt,B,G,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST)):We?z.copyTexSubImage3D(ee,$,Jt,B,Pe+In,te,le,G,Ot):z.copyTexSubImage2D(ee,$,Jt,B,Pe+In,te,le,G,Ot);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else We?I.isDataTexture||I.isData3DTexture?z.texSubImage3D(ee,$,Jt,B,Pe,G,Ot,Zt,rn,Ve,Ze.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(ee,$,Jt,B,Pe,G,Ot,Zt,rn,Ze.data):z.texSubImage3D(ee,$,Jt,B,Pe,G,Ot,Zt,rn,Ve,Ze):I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,Jt,B,G,Ot,rn,Ve,Ze.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,Jt,B,Ze.width,Ze.height,rn,Ze.data):z.texSubImage2D(z.TEXTURE_2D,$,Jt,B,G,Ot,rn,Ve,Ze);z.pixelStorei(z.UNPACK_ROW_LENGTH,Sn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ze),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Vn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Un),z.pixelStorei(z.UNPACK_SKIP_IMAGES,on),$===0&&q.generateMipmaps&&z.generateMipmap(ee),Rt.unbindTexture()},this.copyTextureToTexture3D=function(I,q,Q=null,et=null,$=0){return I.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,et=arguments[1]||null,I=arguments[2],q=arguments[3],$=arguments[4]||0),Vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,q,Q,et,$)},this.initRenderTarget=function(I){zt.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Rt.unbindTexture()},this.resetState=function(){N=0,V=0,H=null,Rt.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$e._getDrawingBufferColorSpace(t),e.unpackColorSpace=$e._getUnpackColorSpace()}};var co=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_r=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},cl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=th,this.updateRanges=[],this.version=0,this.uuid=Es()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ui=new F,Ko=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ui.fromBufferAttribute(this,e),ui.applyMatrix4(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ui.fromBufferAttribute(this,e),ui.applyNormalMatrix(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ui.fromBufferAttribute(this,e),ui.transformDirection(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=is(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=is(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=is(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=is(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new di(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wn=class extends Ps{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xr,zo=new F,qr=new F,Yr=new F,$r=new Et,Oo=new Et,sd=new un,Oa=new F,Bo=new F,Ba=new F,bf=new Et,cc=new Et,Sf=new Et,Jn=class extends Zn{constructor(t=new Wn){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new fn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cl(e,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Ko(n,3,0,!1)),Xr.setAttribute("uv",new Ko(n,2,3,!1))}this.geometry=Xr,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ka(Oa.set(-.5,-.5,0),Yr,o,qr,s,r),ka(Bo.set(.5,-.5,0),Yr,o,qr,s,r),ka(Ba.set(.5,.5,0),Yr,o,qr,s,r),bf.set(0,0),cc.set(1,0),Sf.set(1,1);let a=t.ray.intersectTriangle(Oa,Bo,Ba,!1,zo);if(a===null&&(ka(Bo.set(-.5,.5,0),Yr,o,qr,s,r),cc.set(0,1),a=t.ray.intersectTriangle(Oa,Ba,Bo,!1,zo),a===null))return;let l=t.ray.origin.distanceTo(zo);l<t.near||l>t.far||e.push({distance:l,point:zo.clone(),uv:Gs.getInterpolation(zo,Oa,Bo,Ba,bf,cc,Sf,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ka(i,t,e,n,s,r){$r.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Oo.x=r*$r.x-s*$r.y,Oo.y=s*$r.x+r*$r.y):Oo.copy($r),i.copy(t),i.x+=Oo.x,i.y+=Oo.y,i.applyMatrix4(sd)}var ho=class extends Ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wf=new un,_h=new $o,Va=new oo,Ha=new F,jo=class extends Zn{constructor(t=new fn,e=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,t.ray.intersectsSphere(Va)===!1)return;wf.copy(s).invert(),_h.copy(t.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=d,T=p;y<T;y++){let g=h.getX(y);Ha.fromBufferAttribute(f,g),Tf(Ha,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let y=d,T=p;y<T;y++)Ha.fromBufferAttribute(f,y),Tf(Ha,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tf(i,t,e,n,s,r,o){let a=_h.distanceSqToPoint(i);if(a<e){let l=new F;_h.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends yi{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Et:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],o=[],a=new F,l=new un;for(let p=0;p<=t;p++){let y=p/t;s[p]=this.getTangentAt(y,new F)}r[0]=new F,o[0]=new F;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos($n(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos($n(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],p*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qo=class extends Li{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*u-p*f+this.aX,h=d*f+p*u+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yh=class extends Qo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,f){let d=(o-r)/h-(a-r)/(h+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ga=new F,hc=new Kh,uc=new Kh,fc=new Kh,vh=class extends Li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(Ga.subVectors(s[0],s[1]).add(s[0]),h=Ga);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ga),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(f),p),T=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);T<1e-4&&(T=1),y<1e-4&&(y=T),g<1e-4&&(g=T),hc.initNonuniformCatmullRom(h.x,f.x,d.x,u.x,y,T,g),uc.initNonuniformCatmullRom(h.y,f.y,d.y,u.y,y,T,g),fc.initNonuniformCatmullRom(h.z,f.z,d.z,u.z,y,T,g)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(h.x,f.x,d.x,u.x,this.tension),uc.initCatmullRom(h.y,f.y,d.y,u.y,this.tension),fc.initCatmullRom(h.z,f.z,d.z,u.z,this.tension));return n.set(hc.calc(l),uc.calc(l),fc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ef(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function g_(i,t){let e=1-i;return e*e*t}function x_(i,t){return 2*(1-i)*i*t}function __(i,t){return i*i*t}function Wo(i,t,e,n){return g_(i,t)+x_(i,e)+__(i,n)}function y_(i,t){let e=1-i;return e*e*e*t}function v_(i,t){let e=1-i;return 3*e*e*i*t}function M_(i,t){return 3*(1-i)*i*i*t}function b_(i,t){return i*i*i*t}function Xo(i,t,e,n,s){return y_(i,t)+v_(i,e)+M_(i,n)+b_(i,s)}var hl=class extends Li{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xo(t,s.x,r.x,o.x,a.x),Xo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mh=class extends Li{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xo(t,s.x,r.x,o.x,a.x),Xo(t,s.y,r.y,o.y,a.y),Xo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends Li{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bh=class extends Li{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends Li{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Wo(t,s.x,r.x,o.x),Wo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sh=class extends Li{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Wo(t,s.x,r.x,o.x),Wo(t,s.y,r.y,o.y),Wo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends Li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ef(a,l.x,h.x,u.x,f.x),Ef(a,l.y,h.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:yh,CatmullRomCurve3:vh,CubicBezierCurve:hl,CubicBezierCurve3:Mh,EllipseCurve:Qo,LineCurve:ul,LineCurve3:bh,QuadraticBezierCurve:fl,QuadraticBezierCurve3:Sh,SplineCurve:dl}),Th=class extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wh[s.type]().fromJSON(s))}return this}},pl=class extends Th{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ul(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fl(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new hl(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new dl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let h=new Qo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ml=class i extends fn{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$n(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,f=new F,d=new Et,p=new F,y=new F,T=new F,g=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-g,p.z=m*0,T.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(T.x,T.y,T.z);break;default:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-g,p.z=m*0,y.copy(p),p.x+=T.x,p.y+=T.y,p.z+=T.z,p.normalize(),l.push(p.x,p.y,p.z),T.copy(y)}for(let S=0;S<=e;S++){let E=n+S*u*s,b=Math.sin(E),W=Math.cos(E);for(let N=0;N<=t.length-1;N++){f.x=t[N].x*b,f.y=t[N].y,f.z=t[N].x*W,o.push(f.x,f.y,f.z),d.x=S/e,d.y=N/(t.length-1),a.push(d.x,d.y);let V=l[3*N+0]*b,H=l[3*N+1],P=l[3*N+0]*W;h.push(V,H,P)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){let b=E+S*t.length,W=b,N=b+t.length,V=b+t.length+1,H=b+1;r.push(W,N,H),r.push(V,H,N)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Xn=class i extends fn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new F,u=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let p=n+f/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Di=class i extends fn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],p=[],y=0,T=[],g=n/2,m=0;S(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2));function S(){let b=new F,W=new F,N=0,V=(e-t)/n;for(let H=0;H<=r;H++){let P=[],C=H/r,k=C*(e-t)+t;for(let it=0;it<=s;it++){let nt=it/s,st=nt*l+a,ct=Math.sin(st),rt=Math.cos(st);W.x=k*ct,W.y=-C*n+g,W.z=k*rt,f.push(W.x,W.y,W.z),b.set(ct,V,rt).normalize(),d.push(b.x,b.y,b.z),p.push(nt,1-C),P.push(y++)}T.push(P)}for(let H=0;H<s;H++)for(let P=0;P<r;P++){let C=T[P][H],k=T[P+1][H],it=T[P+1][H+1],nt=T[P][H+1];(t>0||P!==0)&&(u.push(C,k,nt),N+=3),(e>0||P!==r-1)&&(u.push(k,it,nt),N+=3)}h.addGroup(m,N,0),m+=N}function E(b){let W=y,N=new Et,V=new F,H=0,P=b===!0?t:e,C=b===!0?1:-1;for(let it=1;it<=s;it++)f.push(0,g*C,0),d.push(0,C,0),p.push(.5,.5),y++;let k=y;for(let it=0;it<=s;it++){let st=it/s*l+a,ct=Math.cos(st),rt=Math.sin(st);V.x=P*rt,V.y=g*C,V.z=P*ct,f.push(V.x,V.y,V.z),d.push(0,C,0),N.x=ct*.5+.5,N.y=rt*.5*C+.5,p.push(N.x,N.y),y++}for(let it=0;it<s;it++){let nt=W+it,st=k+it;b===!0?u.push(st,st+1,nt):u.push(st+1,st,nt),H+=3}h.addGroup(m,H,b===!0?1:2),m+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},si=class i extends Di{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eh=class i extends fn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),u(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let E=new F,b=new F,W=new F;for(let N=0;N<e.length;N+=3)p(e[N+0],E),p(e[N+1],b),p(e[N+2],W),l(E,b,W,S)}function l(S,E,b,W){let N=W+1,V=[];for(let H=0;H<=N;H++){V[H]=[];let P=S.clone().lerp(b,H/N),C=E.clone().lerp(b,H/N),k=N-H;for(let it=0;it<=k;it++)it===0&&H===N?V[H][it]=P:V[H][it]=P.clone().lerp(C,it/k)}for(let H=0;H<N;H++)for(let P=0;P<2*(N-H)-1;P++){let C=Math.floor(P/2);P%2===0?(d(V[H][C+1]),d(V[H+1][C]),d(V[H][C])):(d(V[H][C+1]),d(V[H+1][C+1]),d(V[H+1][C]))}}function h(S){let E=new F;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(S),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){let S=new F;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];let b=g(S)/2/Math.PI+.5,W=m(S)/Math.PI+.5;o.push(b,1-W)}y(),f()}function f(){for(let S=0;S<o.length;S+=6){let E=o[S+0],b=o[S+2],W=o[S+4],N=Math.max(E,b,W),V=Math.min(E,b,W);N>.9&&V<.1&&(E<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),W<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,E){let b=S*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function y(){let S=new F,E=new F,b=new F,W=new F,N=new Et,V=new Et,H=new Et;for(let P=0,C=0;P<r.length;P+=9,C+=6){S.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),N.set(o[C+0],o[C+1]),V.set(o[C+2],o[C+3]),H.set(o[C+4],o[C+5]),W.copy(S).add(E).add(b).divideScalar(3);let k=g(W);T(N,C+0,S,k),T(V,C+2,E,k),T(H,C+4,b,k)}}function T(S,E,b,W){W<0&&S.x===1&&(o[E]=S.x-1),b.x===0&&b.z===0&&(o[E]=W/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Js=class extends pl{constructor(t){super(t),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new pl().fromJSON(s))}return this}},S_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=rd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,f,d,p;if(n&&(r=R_(i,t,r,e)),i.length>80*e){a=h=i[0],l=u=i[1];for(let y=e;y<s;y+=e)f=i[y],d=i[y+1],f<a&&(a=f),d<l&&(l=d),f>h&&(h=f),d>u&&(u=d);p=Math.max(h-a,u-l),p=p!==0?32767/p:0}return ta(r,o,e,a,l,p,0),o}};function rd(i,t,e,n,s){let r,o;if(s===B_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Af(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Af(r,i[r],i[r+1],o);return o&&Sl(o,o.next)&&(na(o),o=o.next),o}function yr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sl(e,e.next)||En(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ta(i,t,e,n,s,r,o){if(!i)return;!o&&r&&D_(i,n,s,r);let a=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?T_(i,n,s,r):w_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),na(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=E_(yr(i),t,e),ta(i,t,e,n,s,r,2)):o===2&&A_(i,t,e,n,s,r):ta(yr(i),t,e,n,s,r,1);break}}}function w_(i){let t=i.prev,e=i,n=i.next;if(En(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<h?a:h:l<h?l:h,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>h?a:h:l>h?l:h,y=n.next;for(;y!==t;){if(y.x>=u&&y.x<=d&&y.y>=f&&y.y<=p&&Jr(s,a,r,l,o,h,y.x,y.y)&&En(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function T_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(En(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,f=r.y,d=o.y,p=a<l?a<h?a:h:l<h?l:h,y=u<f?u<d?u:d:f<d?f:d,T=a>l?a>h?a:h:l>h?l:h,g=u>f?u>d?u:d:f>d?f:d,m=Ah(p,y,t,e,n),S=Ah(T,g,t,e,n),E=i.prevZ,b=i.nextZ;for(;E&&E.z>=m&&b&&b.z<=S;){if(E.x>=p&&E.x<=T&&E.y>=y&&E.y<=g&&E!==s&&E!==o&&Jr(a,u,l,f,h,d,E.x,E.y)&&En(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=p&&b.x<=T&&b.y>=y&&b.y<=g&&b!==s&&b!==o&&Jr(a,u,l,f,h,d,b.x,b.y)&&En(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=m;){if(E.x>=p&&E.x<=T&&E.y>=y&&E.y<=g&&E!==s&&E!==o&&Jr(a,u,l,f,h,d,E.x,E.y)&&En(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=S;){if(b.x>=p&&b.x<=T&&b.y>=y&&b.y<=g&&b!==s&&b!==o&&Jr(a,u,l,f,h,d,b.x,b.y)&&En(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function E_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Sl(s,r)&&od(s,n,n.next,r)&&ea(s,r)&&ea(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),na(n),na(n.next),n=i=r),n=n.next}while(n!==i);return yr(n)}function A_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F_(o,a)){let l=ad(o,a);o=yr(o,o.next),l=yr(l,l.next),ta(o,t,e,n,s,r,0),ta(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function R_(i,t,e,n){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=rd(i,a,l,n,!1),h===h.next&&(h.steiner=!0),s.push(N_(h));for(s.sort(C_),r=0;r<s.length;r++)e=I_(s[r],e);return e}function C_(i,t){return i.x-t.x}function I_(i,t){let e=P_(i,t);if(!e)return t;let n=ad(e,i);return yr(n,n.next),yr(e,e.next)}function P_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Jr(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),ea(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&L_(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function L_(i,t){return En(i.prev,i,t.prev)<0&&En(t.next,i,i.next)<0}function D_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ah(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,U_(s)}function U_(i){let t,e,n,s,r,o,a,l,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function Ah(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function F_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!z_(i,t)&&(ea(i,t)&&ea(t,i)&&O_(i,t)&&(En(i.prev,i,t.prev)||En(i,t.prev,t))||Sl(i,t)&&En(i.prev,i,i.next)>0&&En(t.prev,t,t.next)>0)}function En(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sl(i,t){return i.x===t.x&&i.y===t.y}function od(i,t,e,n){let s=Xa(En(i,t,e)),r=Xa(En(i,t,n)),o=Xa(En(e,n,i)),a=Xa(En(e,n,t));return!!(s!==r&&o!==a||s===0&&Wa(i,e,t)||r===0&&Wa(i,n,t)||o===0&&Wa(e,i,n)||a===0&&Wa(e,t,n))}function Wa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xa(i){return i>0?1:i<0?-1:0}function z_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&od(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ea(i,t){return En(i.prev,i,i.next)<0?En(i,t,i.next)>=0&&En(i,i.prev,t)>=0:En(i,t,i.prev)<0||En(i,i.next,t)<0}function O_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ad(i,t){let e=new Rh(i.i,i.x,i.y),n=new Rh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Af(i,t,e,n){let s=new Rh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Rf(t),Cf(n,t);let o=t.length;e.forEach(Rf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Cf(n,e[l]);let a=S_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ia=class i extends fn{constructor(t=new Js([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:p-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:k_,E,b=!1,W,N,V,H;m&&(E=m.getSpacedPoints(u),b=!0,d=!1,W=m.computeFrenetFrames(u,!1),N=new F,V=new F,H=new F),d||(g=0,p=0,y=0,T=0);let P=a.extractPoints(h),C=P.shape,k=P.holes;if(!qs.isClockWise(C)){C=C.reverse();for(let yt=0,It=k.length;yt<It;yt++){let z=k[yt];qs.isClockWise(z)&&(k[yt]=z.reverse())}}let nt=qs.triangulateShape(C,k),st=C;for(let yt=0,It=k.length;yt<It;yt++){let z=k[yt];C=C.concat(z)}function ct(yt,It,z){return It||console.error("THREE.ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(It,z)}let rt=C.length,St=nt.length;function at(yt,It,z){let Qt,ut,Lt,Rt=yt.x-It.x,re=yt.y-It.y,zt=z.x-yt.x,D=z.y-yt.y,R=Rt*Rt+re*re,K=Rt*D-re*zt;if(Math.abs(K)>Number.EPSILON){let ft=Math.sqrt(R),mt=Math.sqrt(zt*zt+D*D),dt=It.x-re/ft,$t=It.y+Rt/ft,Ut=z.x-D/mt,Ct=z.y+zt/mt,Te=((Ut-dt)*D-(Ct-$t)*zt)/(Rt*D-re*zt);Qt=dt+Rt*Te-yt.x,ut=$t+re*Te-yt.y;let wt=Qt*Qt+ut*ut;if(wt<=2)return new Et(Qt,ut);Lt=Math.sqrt(wt/2)}else{let ft=!1;Rt>Number.EPSILON?zt>Number.EPSILON&&(ft=!0):Rt<-Number.EPSILON?zt<-Number.EPSILON&&(ft=!0):Math.sign(re)===Math.sign(D)&&(ft=!0),ft?(Qt=-re,ut=Rt,Lt=Math.sqrt(R)):(Qt=Rt,ut=re,Lt=Math.sqrt(R/2))}return new Et(Qt/Lt,ut/Lt)}let Nt=[];for(let yt=0,It=st.length,z=It-1,Qt=yt+1;yt<It;yt++,z++,Qt++)z===It&&(z=0),Qt===It&&(Qt=0),Nt[yt]=at(st[yt],st[z],st[Qt]);let Gt=[],Vt,he=Nt.concat();for(let yt=0,It=k.length;yt<It;yt++){let z=k[yt];Vt=[];for(let Qt=0,ut=z.length,Lt=ut-1,Rt=Qt+1;Qt<ut;Qt++,Lt++,Rt++)Lt===ut&&(Lt=0),Rt===ut&&(Rt=0),Vt[Qt]=at(z[Qt],z[Lt],z[Rt]);Gt.push(Vt),he=he.concat(Vt)}for(let yt=0;yt<g;yt++){let It=yt/g,z=p*Math.cos(It*Math.PI/2),Qt=y*Math.sin(It*Math.PI/2)+T;for(let ut=0,Lt=st.length;ut<Lt;ut++){let Rt=ct(st[ut],Nt[ut],Qt);Pt(Rt.x,Rt.y,-z)}for(let ut=0,Lt=k.length;ut<Lt;ut++){let Rt=k[ut];Vt=Gt[ut];for(let re=0,zt=Rt.length;re<zt;re++){let D=ct(Rt[re],Vt[re],Qt);Pt(D.x,D.y,-z)}}}let _e=y+T;for(let yt=0;yt<rt;yt++){let It=d?ct(C[yt],he[yt],_e):C[yt];b?(V.copy(W.normals[0]).multiplyScalar(It.x),N.copy(W.binormals[0]).multiplyScalar(It.y),H.copy(E[0]).add(V).add(N),Pt(H.x,H.y,H.z)):Pt(It.x,It.y,0)}for(let yt=1;yt<=u;yt++)for(let It=0;It<rt;It++){let z=d?ct(C[It],he[It],_e):C[It];b?(V.copy(W.normals[yt]).multiplyScalar(z.x),N.copy(W.binormals[yt]).multiplyScalar(z.y),H.copy(E[yt]).add(V).add(N),Pt(H.x,H.y,H.z)):Pt(z.x,z.y,f/u*yt)}for(let yt=g-1;yt>=0;yt--){let It=yt/g,z=p*Math.cos(It*Math.PI/2),Qt=y*Math.sin(It*Math.PI/2)+T;for(let ut=0,Lt=st.length;ut<Lt;ut++){let Rt=ct(st[ut],Nt[ut],Qt);Pt(Rt.x,Rt.y,f+z)}for(let ut=0,Lt=k.length;ut<Lt;ut++){let Rt=k[ut];Vt=Gt[ut];for(let re=0,zt=Rt.length;re<zt;re++){let D=ct(Rt[re],Vt[re],Qt);b?Pt(D.x,D.y+E[u-1].y,E[u-1].x+z):Pt(D.x,D.y,f+z)}}}pt(),At();function pt(){let yt=s.length/3;if(d){let It=0,z=rt*It;for(let Qt=0;Qt<St;Qt++){let ut=nt[Qt];se(ut[2]+z,ut[1]+z,ut[0]+z)}It=u+g*2,z=rt*It;for(let Qt=0;Qt<St;Qt++){let ut=nt[Qt];se(ut[0]+z,ut[1]+z,ut[2]+z)}}else{for(let It=0;It<St;It++){let z=nt[It];se(z[2],z[1],z[0])}for(let It=0;It<St;It++){let z=nt[It];se(z[0]+rt*u,z[1]+rt*u,z[2]+rt*u)}}n.addGroup(yt,s.length/3-yt,0)}function At(){let yt=s.length/3,It=0;Kt(st,It),It+=st.length;for(let z=0,Qt=k.length;z<Qt;z++){let ut=k[z];Kt(ut,It),It+=ut.length}n.addGroup(yt,s.length/3-yt,1)}function Kt(yt,It){let z=yt.length;for(;--z>=0;){let Qt=z,ut=z-1;ut<0&&(ut=yt.length-1);for(let Lt=0,Rt=u+g*2;Lt<Rt;Lt++){let re=rt*Lt,zt=rt*(Lt+1),D=It+Qt+re,R=It+ut+re,K=It+ut+zt,ft=It+Qt+zt;ye(D,R,K,ft)}}}function Pt(yt,It,z){l.push(yt),l.push(It),l.push(z)}function se(yt,It,z){fe(yt),fe(It),fe(z);let Qt=s.length/3,ut=S.generateTopUV(n,s,Qt-3,Qt-2,Qt-1);Re(ut[0]),Re(ut[1]),Re(ut[2])}function ye(yt,It,z,Qt){fe(yt),fe(It),fe(Qt),fe(It),fe(z),fe(Qt);let ut=s.length/3,Lt=S.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);Re(Lt[0]),Re(Lt[1]),Re(Lt[3]),Re(Lt[1]),Re(Lt[2]),Re(Lt[3])}function fe(yt){s.push(l[yt*3+0]),s.push(l[yt*3+1]),s.push(l[yt*3+2])}function Re(yt){r.push(yt.x),r.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return V_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wh[s.type]().fromJSON(s)),new i(n,t.options)}},k_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new Et(r,o),new Et(a,l),new Et(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],u=t[n*3+1],f=t[n*3+2],d=t[s*3],p=t[s*3+1],y=t[s*3+2],T=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new Et(o,1-l),new Et(h,1-f),new Et(d,1-y),new Et(T,1-m)]:[new Et(a,1-l),new Et(u,1-f),new Et(p,1-y),new Et(g,1-m)]}};function V_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ls=class i extends Eh{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var gl=class i extends fn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],u=[],f=t,d=(e-t)/s,p=new F,y=new Et;for(let T=0;T<=s;T++){for(let g=0;g<=n;g++){let m=r+g/n*o;p.x=f*Math.cos(m),p.y=f*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),y.x=(p.x/e+1)/2,y.y=(p.y/e+1)/2,u.push(y.x,y.y)}f+=d}for(let T=0;T<s;T++){let g=T*(n+1);for(let m=0;m<n;m++){let S=m+g,E=S,b=S+n+1,W=S+n+2,N=S+1;a.push(E,b,N),a.push(b,W,N)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},fo=class i extends fn{constructor(t=new Js([new Et(0,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(o,2));function h(u){let f=s.length/3,d=u.extractPoints(e),p=d.shape,y=d.holes;qs.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=y.length;g<m;g++){let S=y[g];qs.isClockWise(S)===!0&&(y[g]=S.reverse())}let T=qs.triangulateShape(p,y);for(let g=0,m=y.length;g<m;g++){let S=y[g];p=p.concat(S)}for(let g=0,m=p.length;g<m;g++){let S=p[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=T.length;g<m;g++){let S=T[g],E=S[0]+f,b=S[1]+f,W=S[2]+f;n.push(E,b,W),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return H_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function H_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ei=class i extends fn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,u=[],f=new F,d=new F,p=[],y=[],T=[],g=[];for(let m=0;m<=n;m++){let S=[],E=m/n,b=0;m===0&&o===0?b=.5/e:m===n&&l===Math.PI&&(b=-.5/e);for(let W=0;W<=e;W++){let N=W/e;f.x=-t*Math.cos(s+N*r)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(s+N*r)*Math.sin(o+E*a),y.push(f.x,f.y,f.z),d.copy(f).normalize(),T.push(d.x,d.y,d.z),g.push(N+b,1-E),S.push(h++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let E=u[m][S+1],b=u[m][S],W=u[m+1][S],N=u[m+1][S+1];(m!==0||o>0)&&p.push(E,b,N),(m!==n-1||l<Math.PI)&&p.push(b,W,N)}this.setIndex(p),this.setAttribute("position",new Ee(y,3)),this.setAttribute("normal",new Ee(T,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qi=class i extends fn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new F,f=new F,d=new F;for(let p=0;p<=n;p++)for(let y=0;y<=s;y++){let T=y/s*r,g=p/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(T),f.y=(t+e*Math.cos(g))*Math.sin(T),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),h.push(y/s),h.push(p/n)}for(let p=1;p<=n;p++)for(let y=1;y<=s;y++){let T=(s+1)*p+y-1,g=(s+1)*(p-1)+y-1,m=(s+1)*(p-1)+y,S=(s+1)*p+y;o.push(T,g,S),o.push(g,m,S)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var sn=class extends Ps{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function qa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function G_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var po=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends po{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=t,a=2*e-n;break;case Ru:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:o=t,l=2*n-e;break;case Ru:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,y=(n-e)/(s-e),T=y*y,g=T*y,m=-d*g+2*d*T-d*y,S=(1+d)*g+(-1.5-2*d)*T+(-.5+d)*y+1,E=(-1-p)*g+(1.5+p)*T+.5*y,b=p*g-p*T;for(let W=0;W!==a;++W)r[W]=m*o[u+W]+S*o[h+W]+E*o[l+W]+b*o[f+W];return r}},Ih=class extends po{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(s-e),f=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[l+d]*u;return r}},Ph=class extends po{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Yi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qa(e,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qa(t.times,Array),values:qa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ch(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ja:e=this.InterpolantFactoryMethodDiscrete;break;case Qc:e=this.InterpolantFactoryMethodLinear;break;case Ul:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return Qc;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&G_(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ul,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let y=0;y!==n;++y){let T=e[f+y];if(T!==e[d+y]||T!==e[p+y]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=Qc;var vr=class extends Yi{constructor(t,e,n){super(t,e,n)}};vr.prototype.ValueTypeName="bool";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=ja;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends Yi{};Lh.prototype.ValueTypeName="color";var Dh=class extends Yi{};Dh.prototype.ValueTypeName="number";var Uh=class extends po{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)Zs.slerpFlat(r,0,o,h-a,o,h,l);return r}},xl=class extends Yi{InterpolantFactoryMethodLinear(t){return new Uh(this.times,this.values,this.getValueSize(),t)}};xl.prototype.ValueTypeName="quaternion";xl.prototype.InterpolantFactoryMethodSmooth=void 0;var Mr=class extends Yi{constructor(t,e,n){super(t,e,n)}};Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=ja;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends Yi{};Nh.prototype.ValueTypeName="vector";var If={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=h.length;f<d;f+=2){let p=h[f],y=h[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}},W_=new Fh,sa=class{constructor(t){this.manager=t!==void 0?t:W_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var zh=class extends sa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=If.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Yo("img");function l(){u(),If.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(f){u(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var mo=class extends sa{constructor(t){super(t)}load(t,e,n,s){let r=new yi,o=new zh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},go=class extends Zn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},br=class extends go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dc=new un,Pf=new F,Lf=new F,_l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lf),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Df=new un,ko=new F,pc=new F,Oh=class extends _l{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new cn(2,1,1,1),new cn(0,1,1,1),new cn(3,1,1,1),new cn(1,1,1,1),new cn(3,0,1,1),new cn(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),n.position.copy(ko),pc.copy(n.position),pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pc),n.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df)}},xo=class extends go{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Bh=class extends _l{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yl=class extends go{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var jh="\\[\\]\\.:\\/",X_=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",q_="[^"+jh.replace("\\.","")+"]",Y_=/((?:WC+[\/:])*)/.source.replace("WC",Qh),$_=/(WCOD+)?/.source.replace("WCOD",q_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),K_=new RegExp("^"+Y_+$_+Z_+J_+"$"),j_=["material","materials","bones","map"],kh=class{constructor(t,e,n){let s=n||bn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},bn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(X_,"")}static parseTrackName(t){let e=K_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);j_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=kh;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var py=new Float32Array(1);var Uf=new un,_o=class{constructor(t,e,n=0,s=1/0){this.ray=new $o(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(t,e=!0,n=[]){return Vh(t,this,n,e),n.sort(Nf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vh(t[s],this,n,e);return n.sort(Nf),n}};function Nf(i,t){return i.distance-t.distance}function Vh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Vh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var wr={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},Mo=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function cd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new fn,h=0;for(let u=0;u<i.length;++u){let f=i[u],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,u),h+=p}}if(e){let u=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let y=0;y<p.count;++y)f.push(p.getX(y)+u);u+=i[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=ld(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let p=[];for(let T=0;T<o[u].length;++T)p.push(o[u][T][d]);let y=ld(p);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(y)}}return l}function ld(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new di(o,e,n),l=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let f=l/e;for(let d=0,p=u.count;d<p;d++)for(let y=0;y<e;y++){let T=u.getComponent(d,y);a.setComponent(d+f,y,T)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Cn="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",hd={},ae=(i,t)=>t?new sn(Object.assign({color:i},t)):hd[i]||(hd[i]=new sn({color:i})),dn=(i,t)=>new ke(Object.assign({color:i},t)),ud={},Q_=i=>ud[i]||(ud[i]=new sn({color:i,flatShading:!0}));function xe(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new uo(n);return s.colorSpace=Fn,s.anisotropy=4,s}function Ks(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Tr=xe(128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)});function Yt(i,t,e,n,s,r,o,a,l){let h=new gt(new hn(t,e,n),typeof s=="string"?ae(s):s);return h.position.set(r,o,a),l&&(h.rotation.y=l),i.add(h),h}function Ae(i,t,e,n,s,r,o,a,l){let h=new gt(new Di(t,e,n,l||16),typeof s=="string"?ae(s):s);return h.position.set(r,o,a),i.add(h),h}function Qe(i,t,e,n,s,r,o,a,l,h){let u=new gt(new Ei(t,h||16,h?h*.7|0:12),typeof e=="string"?ae(e):e);return u.position.set(n,s,r),u.scale.set(o||1,a||1,l||1),i.add(u),u}function Ui(i,t,e,n,s,r,o){let a=new gt(new Ls(t,1),Q_(e));return a.position.set(n,s,r),o&&a.scale.set(o[0],o[1],o[2]),i.add(a),a}function bo(i,t,e,n,s,r,o){let a=new Jn(new Wn({map:Tr,blending:rs,transparent:!0,depthWrite:!1,opacity:r}));return o&&a.material.color.set(o),a.scale.set(s,s,1),a.position.set(t,e,n),i.add(a),i.userData.glows=(i.userData.glows||[]).concat(a),a}function So(i,t,e,n,s,r,o,a,l){let h=new gt(new qe(t,e),new ke({map:n,transparent:!0,side:l?Pn:void 0,alphaTest:.05}));return h.position.set(s,r,o),a&&(h.rotation.y=a),i.add(h),h}function oa(i,t,e,n,s,r,o){let a=new gt(new ml(t.map(l=>new Et(l[0],l[1])),o||20),typeof e=="string"?ae(e):e);return a.position.set(n,s,r),i.add(a),a}var Ds="#a8703f",ri="#6b3f1f",wo="#d4a56a",Kn="#3a2214",ty="#d23a28",ey="#f3e2bd",fd={};function tu(i,t,e,n,s,r){let o=i+t+e+n+s;return fd[o]||(fd[o]=xe(n,s,a=>{a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle";let l=[...i];a.font=`900 ${r}px ${Cn}`,s>n?l.forEach((h,u)=>a.fillText(h,n/2,s/(l.length+1)*(u+1))):a.fillText(i,n/2,s/2+2,n-10)}))}var dd=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],eu=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.78,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.36,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.05,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],we={};eu.forEach(i=>{i.L=i.L||"main",i.solid===void 0&&(i.solid=i.L==="main"?1:0),we[i.k]=i});var nu=[["wood","\u539F\u6728\u5730\u677F",0],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],iu=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],Ie={};Ie.table=i=>{Yt(i,1.9,.08,.9,Ds,0,.74,0),Yt(i,1.84,.03,.84,wo,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])Yt(i,.08,.72,.08,ri,t,.36,e);Yt(i,1.6,.06,.04,ri,0,.55,-.36),Yt(i,1.6,.06,.04,ri,0,.55,.36)};Ie.chabu=i=>{Ae(i,.46,.46,.06,Ds,0,.34,0,28),Ae(i,.44,.44,.02,wo,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;Yt(i,.07,.32,.07,ri,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};Ie.counter=i=>{Yt(i,1.96,1,.8,ri,0,.5,0),Yt(i,2.04,.08,.96,wo,0,1.03,.04),Yt(i,1.9,.12,.04,Ds,0,.14,.41);for(let t=-2;t<=2;t++)Yt(i,.04,.8,.02,"#5a3216",t*.38,.52,.405)};Ie.chair=i=>{Yt(i,.48,.06,.48,Ds,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])Yt(i,.05,.46,.05,ri,t,.23,e);Yt(i,.48,.5,.05,Ds,0,.74,-.2),Yt(i,.4,.06,.03,wo,0,.86,-.18)};Ie.stool=i=>{Ae(i,.22,.2,.07,"#c23a2a",0,.76,0,18),Ae(i,.03,.03,.72,"#3a3a40",0,.38,0,8),Ae(i,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new gt(new qi(.13,.015,6,18),ae("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,i.add(t)};Ie.zabu=i=>{let t=Yt(i,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new hn(.62,.1,.62,2,1,2),Qe(i,.05,"#e9c34a",0,.12,0)};Ie.bench=i=>{Yt(i,1.9,.07,.42,Ds,0,.44,0);for(let t of[-.8,.8])Yt(i,.07,.42,.36,ri,t,.21,0);Yt(i,1.6,.05,.04,ri,0,.2,0)};Ie.register=i=>{Yt(i,.9,.95,.7,ri,0,.475,0),Yt(i,.96,.06,.78,wo,0,.98,0),Yt(i,.5,.22,.36,"#2b2b33",0,1.12,-.05),Yt(i,.42,.1,.3,"#3c3c46",0,1.26,-.12),Yt(i,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=dn("#9fe0b6"),Qe(i,.07,"#e9b830",.3,1.06,.2),Qe(i,.05,"#e9b830",.22,1.04,.26)};Ie.lantern=i=>{Ae(i,.025,.025,1.7,Kn,0,.85,0,6),Yt(i,.5,.04,.04,Kn,.2,1.68,0),Ae(i,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new Me;t.position.set(.38,1.3,0),i.add(t);let e=Qe(t,.22,dn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,Ae(t,.14,.14,.06,Kn,0,.3,0,12),Ae(t,.14,.14,.06,Kn,0,-.3,0,12),So(t,.2,.34,tu("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),Ae(t,.01,.01,.2,Kn,0,.42,0,4),bo(t,0,0,.1,1.8,.55),i.userData.swing=t};Ie.andon=i=>{for(let e of[-.17,.17])for(let n of[-.17,.17])Yt(i,.04,.9,.04,Kn,e,.45,n);let t=Yt(i,.32,.5,.32,dn("#fff1c8"),0,.55,0);t.userData.lit=1,Yt(i,.4,.04,.4,Kn,0,.82,0),Yt(i,.4,.04,.4,Kn,0,.29,0);for(let e of[-.06,.06])Yt(i,.005,.48,.33,Kn,e,.55,0);bo(i,0,.55,0,2.2,.6)};Ie.stonel=i=>{let t="#9a9590";Yt(i,.5,.12,.5,t,0,.06,0),Ae(i,.1,.13,.5,t,0,.37,0,8),Yt(i,.42,.1,.42,t,0,.66,0);let e=Yt(i,.3,.28,.3,dn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])Yt(i,.06,.3,.06,t,s[0],.85,s[1]);let n=new gt(new si(.45,.3,4),ae(t));n.rotation.y=Math.PI/4,n.position.y=1.14,i.add(n),Qe(i,.07,t,0,1.33,0),bo(i,0,.85,0,1.6,.55)};Ie.chochin=i=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let n=0;n<5;n++){let s=-.8+n*.4,r=2.25-Math.sin(n/4*Math.PI)*.25,o=Qe(i,.12,dn(t[n]),s,r,.18,1,1.25,1,12);o.userData.lit=1,bo(i,s,r,.26,.8,.35)}let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let n=0;n<8;n++){let[s,r]=e[n],[o,a]=e[n+1],l=Yt(i,Math.hypot(o-s,a-r),.015,.015,Kn,(s+o)/2,(r+a)/2,.18);l.rotation.z=Math.atan2(a-r,o-s)}};Ie.tanuki=i=>{let t="#8a6a4a",e="#e8d8b8";Qe(i,.3,t,0,.38,0,1,1.05,.95),Qe(i,.2,e,0,.36,.16,1,1.1,.5),Qe(i,.22,t,0,.82,.02);for(let r of[-.13,.13])Qe(i,.06,t,r,1,0),Qe(i,.055,Kn,r*.7,.85,.19,1,.8,.5),Qe(i,.02,"#fff",r*.7+.01,.86,.21);Qe(i,.045,Kn,0,.78,.22),Yt(i,.34,.06,.3,"#5a4a3a",0,1.03,0),Ae(i,.16,.2,.04,"#5a4a3a",0,1,0,14);let n=Ae(i,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);n.rotation.z=-.3;let s=Yt(i,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Qe(i,.15,t,-.2,.12,.12,1,.6,1),Qe(i,.15,t,.2,.12,.12,1,.6,1),Qe(i,.12,t,.1,.25,-.3,1,.7,1.4)};Ie.barrel=i=>{oa(i,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new gt(new qi(.34,.025,6,22),ae("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,i.add(e)}So(i,.36,.36,tu("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),Ae(i,.3,.3,.02,wo,0,.91,0,22)};Ie.crates=i=>{let t=(e,n,s)=>{let r=new Me;r.position.y=e,r.rotation.y=n,i.add(r),Yt(r,.6,.32,.44,s,0,.16,0);for(let o=0;o<3;o++)for(let a=0;a<2;a++)Ae(r,.06,.06,.36,"#7a4a1a",-.18+o*.18,.3,-.1+a*.2,8),Ae(r,.025,.03,.1,"#f2e6c8",-.18+o*.18,.52,-.1+a*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};Ie.byobu=i=>{let t=xe(256,128,(e,n,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,n,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*n,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let n=new Me;n.position.set(-.72+e*.48,0,e%2?.08:-.08),n.rotation.y=e%2?.3:-.3,i.add(n),Yt(n,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new gt(new qe(.42,1.4),new ke({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),n.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,n.add(r)}};Ie.shelf=i=>{Yt(i,1.9,1.8,.42,ri,0,.9,-.1),Yt(i,1.8,1.7,.02,"#2a1408",0,.9,.09);for(let n of[.35,.8,1.25,1.65])Yt(i,1.8,.04,.4,Ds,0,n,-.08);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let n of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],o=.26+e%3*.04;Ae(i,.055,.065,o,r,-.72+s*.29,n+o/2,-.06,10),Ae(i,.02,.03,.09,r,-.72+s*.29,n+o+.04,-.06,6),e%2&&Yt(i,.1,.08,.01,ey,-.72+s*.29,n+o*.5,0)}};Ie.hibachi=i=>{oa(i,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),Ae(i,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let n=Ui(i,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);n.material=dn("#ff7a2a"),n.userData.lit=1}Ae(i,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=Ae(i,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,bo(i,0,.55,0,1.4,.6,"#ff8a3a")};Ie.tank=i=>{Yt(i,.7,.55,.5,ri,0,.275,0);let t=Yt(i,.68,.5,.48,ae("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,Yt(i,.62,.4,.42,dn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,Yt(i,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let n=new Me;n.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),i.add(n),Qe(n,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new gt(new si(.04,.07,6),ae("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,n.add(s),i.userData.fish=(i.userData.fish||[]).concat(n)}Ui(i,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),Ui(i,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};Ie.jukebox=i=>{Yt(i,.7,.7,.5,ri,0,.35,0),Yt(i,.74,.05,.54,Ds,0,.72,0),Ae(i,.24,.24,.02,"#141414",-.05,.76,.02,28),Ae(i,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=Yt(i,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new gt(new si(.22,.4,18,1,!0),ae("#d8a83a",{side:Pn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),i.add(e),Ae(i,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),Yt(i,.5,.3,.02,"#2a1408",0,.35,.26),i.userData.spin=i.children[2]};Ie.pine=i=>{Ae(i,.2,.16,.14,"#3a5a8a",0,.07,0,6),Ae(i,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=Ae(i,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,Ui(i,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),Ui(i,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),Ui(i,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};Ie.bamboo=i=>{Ae(i,.22,.18,.32,"#e8e0d0",0,.16,0,18),Ae(i,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,n=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;Ae(i,.025,.025,s,"#6a9a3a",e,.3+s/2,n,8);for(let r=1;r<4;r++)Ae(i,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,n,8);for(let r=0;r<3;r++){let o=new gt(new qe(.32,.06),new sn({color:"#5a9a3a",side:Pn}));o.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),n+.12*Math.sin(r*2+t)),o.rotation.set(-.3,r*2+t,-.4),i.add(o)}}};Ie.sakura=i=>{Ae(i,.26,.22,.36,"#2a3a5a",0,.18,0,8),Ae(i,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=Ae(i,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=Ae(i,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let n=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,o,a],l)=>Ui(i,a,n[l%3],s,r,o,[1,.75,1])),i.userData.petals=1};Ie.ajisai=i=>{Ae(i,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)Ui(i,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let n=e*1.25;Ui(i,.12,t[e%4],Math.cos(n)*.12,.5+e%2*.08,Math.sin(n)*.12)}};Ie.scroll=i=>{let t=xe(96,256,(e,n,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,n,s),e.fillStyle="#c8b890",e.fillRect(0,0,n,30),e.fillRect(0,s-30,n,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${Cn}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,o)=>e.fillText(r,n/2,76+o*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});Yt(i,.5,.04,.04,Kn,0,2.25,.04),Yt(i,.5,.04,.04,Kn,0,1.02,.04),So(i,.42,1.2,t,0,1.63,.03)};Ie.menu=i=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let n=tu(t[e],"#e9d3a4","#2a1408",64,256,36);Yt(i,.22,.82,.03,ri,-.7+e*.28,1.75,.015),So(i,.18,.76,n,-.7+e*.28,1.75,.035)}Yt(i,1.8,.06,.05,Kn,0,2.2,.03)};Ie.clock=i=>{let t=xe(128,128,o=>{o.fillStyle="#f8f0dc",o.beginPath(),o.arc(64,64,60,0,7),o.fill(),o.fillStyle="#2a1408",o.font=`700 18px ${Cn}`,o.textAlign="center",o.textBaseline="middle";for(let a=1;a<=12;a++){let l=a/12*Math.PI*2-Math.PI/2;o.fillText(String(a),64+Math.cos(l)*46,64+Math.sin(l)*46)}});Yt(i,.5,.7,.1,ri,0,1.95,.05),Ae(i,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=So(i,.4,.4,t,0,2.05,.105),n=Yt(i,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=Yt(i,.01,.17,.01,"#1a1a1a",0,2.1,.115);i.userData.hands=[n,s],i.userData.handY=2.05;let r=new Me;r.position.set(0,1.75,.07),i.add(r),Yt(r,.01,.2,.01,"#c8a040",0,-.1,0),i.userData.swing=r};Ie.mado=i=>{let t=xe(256,256,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1a1a40"),a.addColorStop(1,"#5a3a6a"),s.fillStyle=a,s.fillRect(0,0,r,o),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*o*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new gt(new Xn(.62,32),new ke({map:t}));e.position.set(0,1.6,.03),i.add(e);let n=new gt(new qi(.64,.06,8,32),ae(ri));n.position.set(0,1.6,.04),i.add(n);for(let s of[-.2,.2])Yt(i,.02,1.2,.02,Kn,s,1.6,.05);Yt(i,1.2,.02,.02,Kn,0,1.6,.05),bo(i,0,1.6,.15,1.6,.25,"#b8c8ff")};Ie.fuji=i=>{let t=xe(256,160,(e,n,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,n,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,n,20)});Yt(i,1.6,1,.05,"#2a1408",0,1.7,.025),So(i,1.5,.9,t,0,1.7,.055)};Ie.maneki=i=>{let t="#f8f4ec";Qe(i,.12,t,0,.13,0,1,1.1,.9),Qe(i,.1,t,0,.32,.01);for(let n of[-.06,.06]){let s=new gt(new si(.035,.06,4),ae(t));s.position.set(n,.42,0),i.add(s),Qe(i,.012,"#1a1a1a",n*.6,.34,.09)}Qe(i,.02,"#f08a9a",0,.31,.1),Yt(i,.16,.025,.05,ty,0,.23,.06),Qe(i,.02,"#e9b830",0,.21,.1);let e=new Me;e.position.set(.09,.3,.02),i.add(e),Qe(e,.035,t,0,.07,0,1,1.6,1),i.userData.wave=e,Qe(i,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};Ie.daruma=i=>{Qe(i,.14,"#d23a28",0,.15,0,1,1.1,1),Qe(i,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Qe(i,.016,"#1a1a1a",t,.2,.125);Yt(i,.08,.012,.01,"#1a1a1a",0,.155,.13)};Ie.beer=i=>{Ae(i,.07,.065,.2,ae("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),Ae(i,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new gt(new qi(.05,.012,6,12,Math.PI),ae("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,i.add(t)};Ie.sake=i=>{Yt(i,.34,.02,.2,ri,0,.01,0),oa(i,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])Ae(i,.03,.025,.04,"#f0ece0",t,.04,0,10)};Ie.yakitori=i=>{Ae(i,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new Me;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,i.add(e),Yt(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let n=0;n<4;n++)Ui(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+n*.05,.005,0,[1.1,.9,1])}};Ie.sushi=i=>{Yt(i,.34,.03,.16,Ds,0,.03,0);for(let t=0;t<4;t++)Yt(i,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),Yt(i,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};Ie.ramen=i=>{oa(i,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),Ae(i,.12,.12,.01,"#d89a4a",0,.09,0,20),Qe(i,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),Yt(i,.05,.01,.04,"#8a4a2a",.04,.1,-.02),Yt(i,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=Yt(i,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};Ie.edamame=i=>{Ae(i,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)Ui(i,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};Ie.vase=i=>{oa(i,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),Ae(i,.006,.006,.25,"#4a7a3a",0,.36,0,4),Qe(i,.035,"#f0e0e8",0,.5,0),Qe(i,.03,"#e898b0",.02,.48,.02)};Ie.tatami=i=>{let t=xe(256,256,(n,s,r)=>{n.fillStyle="#c8c47a",n.fillRect(0,0,s,r);for(let o=0;o<r;o+=3)n.fillStyle=o%6?"#bcb86e":"#d2ce86",n.fillRect(0,o,s,1);n.fillStyle="#2a3a2a",n.fillRect(0,0,s,10),n.fillRect(0,r-10,s,10),n.fillRect(0,124,s,8)}),e=new gt(new hn(1.96,.04,1.96),[ae("#2a3a2a"),ae("#2a3a2a"),new sn({map:t}),ae("#2a3a2a"),ae("#2a3a2a"),ae("#2a3a2a")]);e.position.y=.02,i.add(e)};Ie.rug=i=>{let t=xe(256,256,(n,s,r)=>{n.fillStyle="#23315c",n.fillRect(0,0,s,r),n.strokeStyle="#e8e0d0",n.lineWidth=3;for(let o=0;o<5;o++)for(let a=0;a<5;a++){let l=26+o*51,h=26+a*51;n.beginPath();for(let u=0;u<3;u++)n.arc(l,h,8+u*7,Math.PI,0);n.stroke()}n.strokeStyle="#c8a040",n.lineWidth=6,n.strokeRect(6,6,s-12,r-12)}),e=new gt(new Xn(.96,40),new sn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,i.add(e)};Ie.step=i=>{Ui(i,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function ny(i){let t=new Set,e=i.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),i.updateMatrixWorld(!0);let n=new Map;i.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)});for(let s of n.values())if(!(s.length<2))try{let r=s.map(l=>{let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(h.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&h.deleteAttribute(u);return h.attributes.uv?(h.applyMatrix4(l.matrixWorld),h):null});if(r.some(l=>!l))continue;let o=cd(r,!1);if(!o)continue;let a=new gt(o,s[0].material);i.add(a),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}function su(i){let t=new Me,e=Ie[i];return e?e(t):Yt(t,.8,.8,.8,"#f0f",0,.4,0),ny(t),t.traverse(n=>{n.isMesh&&(n.userData.item=t)}),t}var js=(i,t)=>i+Math.random()*(t-i),Ni=(i,t,e)=>Math.max(t,Math.min(e,i)),ru=(i,t,e)=>i+(t-i)*e,Qs=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),tr=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Fi={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},iy={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},au=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),$i=46,Ai=34,ls=7,sy=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],aa=2,ou=8.5,ry=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],pd=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],oy=`
.i3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.i3info{position:absolute;left:max(12px,env(safe-area-inset-left));top:92px;background:#ffffffe6;color:#3a2a1a;border:3px solid #3a2a1a;border-radius:16px;padding:6px 14px;font-size:15px;line-height:1.35;z-index:3;pointer-events:none;box-shadow:0 4px 0 #0003}
.i3info b{font-size:19px;display:block}
.i3pan{position:absolute;left:0;right:0;bottom:0;background:#fff8eaf2;border-top:4px solid #3a2a1a;z-index:5;padding:6px max(10px,env(safe-area-inset-right)) 10px max(10px,env(safe-area-inset-left));display:none;color:#3a2a1a}
.i3pan.on{display:block}
.i3row{display:flex;gap:8px;overflow-x:auto;padding:4px 2px 2px;scrollbar-width:thin}
.i3opt{flex:none;min-width:76px;min-height:64px;border:3px solid #3a2a1a;border-radius:14px;background:#fff;color:#3a2a1a;font-weight:800;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:4px 8px}
.i3opt i{display:block;width:30px;height:22px;border-radius:7px;border:2px solid #0003}
.i3opt.on{background:#ffd27a;outline:3px solid #ff9a2a}
@media (max-height:520px){.i3hud{top:64px;gap:8px}.i3info{top:64px;font-size:12px;padding:4px 10px}.i3info b{font-size:15px}.i3opt{min-width:64px;min-height:50px;font-size:11.5px;border-width:2px}.i3opt i{width:24px;height:16px}}
`;function md(i){let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.data||{};if(r.ex=Object.assign(au(),r.ex||{}),!document.getElementById("i3css")){let _=document.createElement("style");_.id="i3css",_.textContent=oy,document.head.appendChild(_)}if(!document.getElementById("h3css")&&i.css){let _=document.createElement("style");_.id="h3css",_.textContent=i.css,document.head.appendChild(_)}let o=Math.min(screen.width,screen.height)<600,a=new lo({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});a.shadowMap.enabled=!0,a.shadowMap.type=Hh;let l=new _r,h=new co(12576511,60,170);l.fog=h;let u=new zn(38,2,.3,600),f=new mo,d=(_,w)=>f.load(_,A=>{A.colorSpace=Fn,w&&w(A)}),p={},y=(_,w)=>w?new sn(Object.assign({color:_},w)):p[_]||(p[_]=new sn({color:_})),T=(_,w)=>new ke(Object.assign({color:_},w||{})),g=(_,w,A)=>{let O=_.clone();return O.wrapS=O.wrapT=Rs,O.repeat.set(w,A),O.needsUpdate=!0,O},m=[];function S(_,w,A,O,Y,ht,bt,vt,Tt){let xt=new gt(new hn(_,w,A),typeof O=="string"?y(O):O);return xt.position.set(Y,ht,bt),(vt||l).add(xt),Tt!==!1&&(xt.castShadow=!0),xt.receiveShadow=!0,xt}function E(_,w,A,O,Y,ht,bt,vt,Tt){let xt=new gt(new Di(_,w,A,Tt||14),typeof O=="string"?y(O):O);return xt.position.set(Y,ht,bt),(vt||l).add(xt),xt.castShadow=!0,xt.receiveShadow=!0,xt}function b(_,w,A,O,Y,ht,bt,vt,Tt,xt){let Le=new gt(xt?new Ls(_,1):new Ei(_,16,12),typeof w=="string"?xt?y(w,{flatShading:!0}):y(w):w);return Le.position.set(A,O,Y),bt&&Le.scale.set(bt,vt,Tt),(ht||l).add(Le),Le.castShadow=!0,Le}let W=[];function N(_,w,A,O,Y,ht){let bt=new Jn(new Wn({map:Tr,blending:rs,transparent:!0,depthWrite:!1,opacity:0}));return ht&&bt.material.color.set(ht),bt.scale.set(O,O,1),bt.position.set(_,w,A),(Y||l).add(bt),W.push(bt),bt}let V=[];function H(_,w){let A=new ke({color:_});return A.userData.day=new Se(_),A.userData.night=new Se(w||"#ffd98a"),V.push(A),A}let P=new Ei(300,24,16),C=new Float32Array(P.attributes.position.count*3);P.setAttribute("color",new Ee(C,3));let k=new gt(P,new ke({vertexColors:!0,side:Gn,fog:!1,depthWrite:!1}));k.renderOrder=-10,l.add(k);let it=new fn;{let _=[],w=tr(9);for(let A=0;A<400;A++){let O=w()*Math.PI*2,Y=.15+w()*1.3;_.push(Math.cos(O)*Math.cos(Y)*280,Math.sin(Y)*280,Math.sin(O)*Math.cos(Y)*280)}it.setAttribute("position",new Ee(_,3))}let nt=xe(128,128,_=>{let w=_.createRadialGradient(64,64,10,64,64,64);w.addColorStop(0,"rgba(255,255,240,1)"),w.addColorStop(.35,"rgba(255,240,200,.9)"),w.addColorStop(.4,"rgba(255,230,180,.3)"),w.addColorStop(1,"rgba(255,230,180,0)"),_.fillStyle=w,_.fillRect(0,0,128,128)}),st=new Jn(new Wn({map:nt,fog:!1,depthWrite:!1,transparent:!0}));st.scale.set(50,50,1),k.add(st);let ct=xe(128,128,_=>{let w=_.createRadialGradient(64,64,18,64,64,64);w.addColorStop(0,"rgba(255,248,220,1)"),w.addColorStop(.42,"rgba(255,244,210,1)"),w.addColorStop(.46,"rgba(255,240,200,.25)"),w.addColorStop(1,"rgba(255,240,200,0)"),_.fillStyle=w,_.fillRect(0,0,128,128)}),rt=new Jn(new Wn({map:ct,fog:!1,depthWrite:!1,transparent:!0}));rt.scale.set(36,36,1),k.add(rt);let St=new Me;k.add(St);{let _=xe(16,16,O=>{O.fillStyle="#fff8e0",O.beginPath(),O.arc(8,8,3,0,7),O.fill()}),w=it.attributes.position,A=new Wn({map:_,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let O=0;O<w.count;O+=2){let Y=new Jn(A);Y.position.set(w.getX(O),w.getY(O),w.getZ(O)),Y.scale.set(1.4,1.4,1),St.add(Y)}St.userData.m=A}let at=new Me;l.add(at);{let _=tr(4);for(let w=0;w<14;w++){let A=new Me,O=3+(_()*3|0);for(let bt=0;bt<O;bt++){let vt=new gt(new Ls(3+_()*3,1),new sn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));vt.position.set(bt*4-O*2,_()*1.5,_()*2),vt.scale.y=.6,A.add(vt)}let Y=_()*Math.PI*2,ht=110+_()*60;A.position.set(Math.cos(Y)*ht,40+_()*25,Math.sin(Y)*ht),A.userData.a=Y,A.userData.R=ht,at.add(A)}}let Nt=new br(14676735,8036442,1.4);l.add(Nt);let Gt=new yl(16777215,.25);l.add(Gt);let Vt=new Sr(16773852,2.2);Vt.castShadow=!0;let he=o?1024:2048;Vt.shadow.mapSize.set(he,he),Object.assign(Vt.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),Vt.shadow.bias=-8e-4,Vt.shadow.normalBias=.03,l.add(Vt),l.add(Vt.target);let _e=xe(256,256,(_,w,A)=>{_.fillStyle="#3fb7d8",_.fillRect(0,0,w,A);let O=tr(2);for(let Y=0;Y<90;Y++){_.strokeStyle=`rgba(255,255,255,${.12+O()*.25})`,_.lineWidth=2+O()*2;let ht=O()*w,bt=O()*A,vt=10+O()*24;_.beginPath(),_.moveTo(ht,bt),_.quadraticCurveTo(ht+vt/2,bt-4,ht+vt,bt),_.stroke()}});_e.wrapS=_e.wrapT=Rs,_e.repeat.set(40,40);let pt=new sn({map:_e,color:"#ffffff"}),At=new gt(new qe(900,900),pt);At.rotation.x=-Math.PI/2,At.position.y=-.45,At.receiveShadow=!0,l.add(At);function Kt(_,w,A){let O=new Js;return O.moveTo(-_+A,-w),O.lineTo(_-A,-w),O.quadraticCurveTo(_,-w,_,-w+A),O.lineTo(_,w-A),O.quadraticCurveTo(_,w,_-A,w),O.lineTo(-_+A,w),O.quadraticCurveTo(-_,w,-_,w-A),O.lineTo(-_,-w+A),O.quadraticCurveTo(-_,-w,-_+A,-w),O}let Pt=xe(128,128,(_,w,A)=>{_.fillStyle="#f3dfa8",_.fillRect(0,0,w,A);let O=tr(7);for(let Y=0;Y<300;Y++)_.fillStyle=O()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",_.fillRect(O()*w,O()*A,2,2)});{let _=new ia(Kt($i+ls,Ai+ls,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});_.rotateX(Math.PI/2);let w=new gt(_,new sn({map:g(Pt,.4,.4)}));w.position.y=-.83,w.receiveShadow=!0,l.add(w);let A=new gt(new fo(Kt($i+ls+3.4,Ai+ls+3.4,18),12),new ke({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.y=-.38,l.add(A)}let se=xe(256,256,(_,w,A)=>{_.fillStyle="#7ccb5a",_.fillRect(0,0,w,A);let O=tr(5);for(let Y=0;Y<900;Y++){_.fillStyle=O()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ht=O()*w,bt=O()*A;_.fillRect(ht,bt,2,5)}});{let _=new fo(Kt($i,27,12),10);_.rotateX(-Math.PI/2),_.translate(0,0,-7);let w=_.attributes.uv;for(let O=0;O<w.count;O++)w.setXY(O,w.getX(O)/8,w.getY(O)/8);let A=new gt(_,new sn({map:g(se,1,1)}));A.position.y=.02,A.receiveShadow=!0,l.add(A)}let ye=xe(128,128,(_,w,A)=>{_.fillStyle="#d9d4cc",_.fillRect(0,0,w,A);let O=tr(8);for(let Y=0;Y<4;Y++)for(let ht=0;ht<4;ht++){let bt=(O()*14|0)-7;_.fillStyle=`rgb(${206+bt},${200+bt},${190+bt})`,_.fillRect(ht*32+1,Y*32+1,30,30)}}),fe=y("#f4f1ea");for(let[_,w,A,O]of sy){let Y=Math.hypot(A-_,O-w)+aa*2,ht=(_+A)/2,bt=(w+O)/2,vt=w===O,Tt=new gt(new qe(vt?Y:aa*2,vt?aa*2:Y),new sn({map:g(ye,(vt?Y:4)/2,(vt?4:Y)/2)}));Tt.rotation.x=-Math.PI/2,Tt.position.set(ht,.04,bt),Tt.receiveShadow=!0,l.add(Tt);for(let xt of[-1,1]){let Le=new gt(new hn(vt?Y:.25,.12,vt?.25:Y),fe);Le.position.set(ht+(vt?0:xt*(aa+.1)),.06,bt+(vt?xt*(aa+.1):0)),Le.receiveShadow=!0,l.add(Le)}}let Re=xe(512,512,(_,w,A)=>{_.fillStyle="#e9b98a",_.fillRect(0,0,w,A),_.translate(256,256);for(let O=250;O>40;O-=26)_.strokeStyle=O%52?"#f4d2a6":"#d99a6a",_.lineWidth=10,_.beginPath(),_.arc(0,0,O,0,7),_.stroke();for(let O=0;O<16;O++)_.rotate(Math.PI/8),_.strokeStyle="#f7e2c0",_.lineWidth=4,_.beginPath(),_.moveTo(50,0),_.lineTo(250,0),_.stroke()});{let _=new gt(new Xn(ou,48),new sn({map:Re}));_.rotation.x=-Math.PI/2,_.position.y=.06,_.receiveShadow=!0,l.add(_);let w=new gt(new gl(ou,ou+.35,48),fe);w.rotation.x=-Math.PI/2,w.position.y=.08,l.add(w)}let yt=[];{let _=new Me;l.add(_);let w=y("#f4f1ea");E(3.4,3.6,.7,w,0,.35,0,_,32);let A=xe(128,128,(bt,vt,Tt)=>{bt.fillStyle="#5ec8e8",bt.fillRect(0,0,vt,Tt),bt.strokeStyle="rgba(255,255,255,.5)",bt.lineWidth=3;for(let xt=0;xt<8;xt++)bt.beginPath(),bt.arc(64,64,8+xt*8,0,7),bt.stroke()}),O=new gt(new Xn(3.05,32),new ke({map:A}));O.rotation.x=-Math.PI/2,O.position.y=.72,_.add(O),yt.push(O),E(.5,.7,1.4,w,0,1.3,0,_,16),E(1.4,1.2,.25,w,0,2.05,0,_,24),E(.25,.35,.9,w,0,2.6,0,_,12),E(.7,.6,.18,w,0,3.1,0,_,20);let Y=new ke({color:"#c8f0ff",transparent:!0,opacity:.75}),ht=new gt(new Di(.12,.2,1.2,10,1,!0),Y);ht.position.y=3.7,_.add(ht),yt.push(ht);for(let bt=0;bt<8;bt++){let vt=bt/8*Math.PI*2,Tt=new gt(new qi(.9,.06,6,12,Math.PI*.6),Y);Tt.position.set(Math.cos(vt)*.9,2.2,Math.sin(vt)*.9),Tt.rotation.set(0,-vt,Math.PI*.2),_.add(Tt)}for(let bt=0;bt<6;bt++){let vt=bt/6*Math.PI*2+.26;It(Math.cos(vt)*6.6,Math.sin(vt)*6.6,vt)}}function It(_,w,A){let O=new Me;O.position.set(_,0,w),O.rotation.y=-A,l.add(O),S(1.6,.45,1,"#c8704a",0,.22,0,O),S(1.45,.1,.85,"#5a3a24",0,.45,0,O,!1);let Y=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ht=0;ht<8;ht++)b(.13,Y[ht%5],-.55+ht%4*.36,.62,-.2+Math.floor(ht/4)*.4,O),b(.1,"#4a9a3a",-.55+ht%4*.36,.52,-.2+Math.floor(ht/4)*.4,O)}function z(_){return xe(128,128,(w,A,O)=>{w.fillStyle=_,w.fillRect(0,0,A,O);for(let Y=0;Y<O;Y+=16)w.fillStyle="rgba(0,0,0,.08)",w.fillRect(0,Y,A,2),w.fillStyle="rgba(255,255,255,.08)",w.fillRect(0,Y+2,A,2)})}function Qt(_){return xe(512,128,(w,A,O)=>{w.fillStyle="#fff8ea",w.strokeStyle="#3a2a1a",w.lineWidth=10,Ks(w,6,6,A-12,O-12,24),w.fill(),w.stroke(),w.fillStyle="#3a2a1a",w.textAlign="center",w.textBaseline="middle";let Y=64;for(w.font=`900 ${Y}px ${Cn}`;w.measureText(_).width>A-60&&Y>20;)Y-=2,w.font=`900 ${Y}px ${Cn}`;w.fillText(_,A/2,O/2+3)})}let ut=5.4,Lt=4.2,Rt=3;function re(_,w){let A=new Me,O=_.wall,Y=new sn({map:z(O)}),ht=-.6;S(ut+.3,.35,Lt+.3,"#e8e2d4",0,.17,ht,A);let bt=S(ut,Rt,Lt,Y,0,.35+Rt/2,ht,A);for(let _t of[-1,1])S(.22,Rt,.22,"#f4efe2",_t*ut/2,.35+Rt/2,ht+Lt/2,A);S(ut+.1,.18,.18,"#f4efe2",0,.35+Rt,ht+Lt/2+.02,A);let vt=y(_.roofC),Tt=.35+Rt;if(_.roof==="flat")S(ut+.6,.35,Lt+.6,vt,0,Tt+.17,ht,A),S(ut+.2,.3,Lt+.2,"#f4efe2",0,Tt+.5,ht,A),S(1,.7,1,"#9a9a9a",1.4,Tt+.9,ht-.6,A);else if(_.roof==="round"){let _t=new gt(new Di(Lt/2+.45,Lt/2+.45,ut+.5,24,1,!1,-Math.PI/2,Math.PI),vt);_t.rotation.set(0,0,Math.PI/2),_t.position.set(0,Tt,ht),_t.castShadow=!0,A.add(_t);for(let pe of[-1,1]){let ce=new gt(new Xn(Lt/2+.45,24,0,Math.PI),Y);ce.rotation.y=pe*Math.PI/2,ce.position.set(pe*(ut/2+.26),Tt,ht),A.add(ce)}}else if(_.roof==="hip"){let _t=new gt(new si((ut+.9)/Math.SQRT2*1,1.9,4),vt);_t.rotation.y=Math.PI/4,_t.scale.set(1,1,(Lt+.9)/(ut+.9)),_t.position.set(0,Tt+.95,ht),_t.castShadow=!0,A.add(_t)}else{let _t=new Js,pe=Lt/2+.5;_t.moveTo(-pe,0),_t.lineTo(0,1.9),_t.lineTo(pe,0),_t.lineTo(-pe,0);let ce=new ia(_t,{depth:ut+.6,bevelEnabled:!1});ce.translate(0,0,-(ut+.6)/2);let Oe=new gt(ce,[vt,vt]);Oe.rotation.y=Math.PI/2,Oe.position.set(0,Tt-.05,ht),Oe.castShadow=!0,A.add(Oe);let gn=new Js;gn.moveTo(-Lt/2,0),gn.lineTo(0,1.55),gn.lineTo(Lt/2,0);let Qn=new gt(new fo(gn),Y);Qn.rotation.y=Math.PI/2;for(let Xe of[-1,1]){let je=Qn.clone();je.rotation.y=Xe*Math.PI/2,je.position.set(Xe*(ut/2+.001),Tt,ht),A.add(je)}let Be=new gt(new Xn(.35,20),H("#bfe6ff"));Be.position.set(0,Tt+.5,ht+Lt/2+.02),A.add(Be)}let xt=ht+Lt/2+.02,Le=y(_.doorC);if(S(1.35,2.25,.12,"#f4efe2",0,.35+1.12,xt,A),_.door==="arch"){S(1.1,1.75,.14,Le,0,.35+.88,xt+.02,A);let _t=new gt(new Xn(.55,20,0,Math.PI),Le);_t.position.set(0,.35+1.75,xt+.1),A.add(_t)}else S(1.1,2.05,.14,Le,0,.35+1.02,xt+.02,A);if(_.door==="round"){let _t=new gt(new Xn(.26,20),H("#bfe6ff"));_t.position.set(0,.35+1.5,xt+.1),A.add(_t);let pe=new gt(new qi(.28,.05,8,20),y("#c8c8d0"));pe.position.set(0,.35+1.5,xt+.1),A.add(pe)}else if(_.door==="grid")for(let _t=0;_t<3;_t++)for(let pe=0;pe<2;pe++){let ce=new gt(new qe(.38,.4),H("#e8f4ff","#ffe0a0"));ce.position.set(-.21+pe*.42,.35+1.15+_t*.45,xt+.1),A.add(ce)}b(.06,"#e9c34a",.4,.35+1,xt+.12,A);let Ln=b(.16,T("#fff4d0"),.95,.35+2.3,xt+.2,A);N(.95,.35+2.3,xt+.3,2.2,A);for(let _t of[-1.75,1.75]){if(_.win==="round"){let ce=new gt(new Xn(.5,24),H("#bfe6ff"));ce.position.set(_t,2.05,xt+.01),A.add(ce);let Oe=new gt(new qi(.52,.08,8,24),y("#f4efe2"));Oe.position.set(_t,2.05,xt+.02),A.add(Oe)}else if(_.win==="arch"){let ce=new gt(new qe(.9,.8),H("#bfe6ff"));ce.position.set(_t,2.05-.15,xt+.01),A.add(ce);let Oe=new gt(new Xn(.45,16,0,Math.PI),H("#bfe6ff"));Oe.position.set(_t,2.05+.25,xt+.01),A.add(Oe),S(1.05,.1,.14,"#f4efe2",_t,2.05-.58,xt+.05,A)}else if(_.win==="shoji"){let ce=new gt(new qe(1.1,1),H("#fff4dc","#ffcf7a"));ce.position.set(_t,2.05,xt+.01),A.add(ce);for(let Oe=-1;Oe<=1;Oe++)S(.04,1,.04,"#6b3f1f",_t+Oe*.36,2.05,xt+.04,A,!1),S(1.1,.04,.04,"#6b3f1f",_t,2.05+Oe*.33,xt+.04,A,!1)}else{let ce=new gt(new qe(1.05,.95),H("#bfe6ff"));ce.position.set(_t,2.05,xt+.01),A.add(ce),S(1.2,.1,.1,"#f4efe2",_t,2.05+.5,xt+.04,A,!1),S(1.2,.1,.1,"#f4efe2",_t,2.05-.5,xt+.04,A,!1),S(.1,1.05,.1,"#f4efe2",_t-.55,2.05,xt+.04,A,!1),S(.1,1.05,.1,"#f4efe2",_t+.55,2.05,xt+.04,A,!1),S(.06,1,.06,"#f4efe2",_t,2.05,xt+.04,A,!1),S(1.3,.14,.32,"#f4efe2",_t,2.05-.6,xt+.14,A)}if(_.garden!=="none"){S(1,.2,.25,"#8a5a34",_t,2.05-.78,xt+.2,A);for(let ce=0;ce<4;ce++)b(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][ce],_t-.36+ce*.24,2.05-.62,xt+.2,A)}}if(+_.porch){S(ut+.6,.3,1.7,"#c8935a",0,.15,xt+.85,A);for(let _t=0;_t<9;_t++)S(.02,.02,1.7,"#9a6a3a",-ut/2-.1+_t*.7,.31,xt+.85,A,!1);S(1.6,.15,.5,"#c8935a",0,.075,xt+1.95,A);for(let _t of[-1,1])S(.12,.9,.12,"#f4efe2",_t*(ut/2+.15),.75,xt+1.62,A),S(.12,.9,.12,"#f4efe2",_t*1,.75,xt+1.62,A),S(ut/2-.8,.08,.08,"#f4efe2",_t*(ut/4+.58),1.1,xt+1.62,A)}{let _t=new Me;_t.position.set(ut/2+.2,0,xt+2.4),A.add(_t),S(.1,1,.1,"#6b3f1f",0,.5,0,_t),S(.4,.32,.55,_.doorC==="#f4efe2"?"#e8553f":_.doorC,0,1.12,0,_t),S(.05,.25,.05,"#e8553f",.22,1.3,.1,_t)}let Tn=xt+2.9,Dt=ut/2+1.1;if(_.fence==="white"||_.fence==="wood"){let _t=_.fence==="white"?"#ffffff":"#c8b070";for(let pe of[-1,1]){for(let ce=0;ce<6;ce++){let Oe=pe*(1.3+ce*.55);if(S(.12,.8,.06,_t,Oe,.4,Tn,A),_.fence==="white"){let gn=new gt(new si(.09,.16,4),y(_t));gn.position.set(Oe,.88,Tn),gn.rotation.y=Math.PI/4,A.add(gn)}}S(2.9,.08,.05,_t,pe*2.65,.55,Tn-.04,A,!1),S(2.9,.08,.05,_t,pe*2.65,.25,Tn-.04,A,!1)}}else if(_.fence==="hedge")for(let _t of[-1,1]){let pe=S(2.8,.7,.6,y("#3f9a3f"),_t*2.6,.35,Tn,A);pe.geometry=new hn(2.8,.7,.6,3,1,1);for(let ce=0;ce<4;ce++)b(.38,"#4aa84a",_t*(1.5+ce*.72),.7,Tn,A,1,.8,1,!0)}if(_.garden==="flower")for(let _t of[-1,1])for(let pe=0;pe<5;pe++)b(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(pe+(_t>0?2:0))%5],_t*(2.1+pe%3*.5),.28,xt+2+Math.floor(pe/3)*.4,A),b(.12,"#3f8a2f",_t*(2.1+pe%3*.5),.14,xt+2+Math.floor(pe/3)*.4,A);else if(_.garden==="pots")for(let _t of[-1,1])E(.28,.22,.45,"#c8704a",_t*2.3,.22,xt+2.1,A),b(.38,"#4a9a3a",_t*2.3,.7,xt+2.1,A,1,1,1,!0);else _.garden==="tree"&&(E(.12,.16,1.5,"#7a5034",-ut/2-.6,.75,xt+1.6,A),b(.95,"#4aa84a",-ut/2-.6,2,xt+1.6,A,1,1,1,!0),b(.6,"#5ab85a",-ut/2-.2,2.4,xt+1.9,A,1,1,1,!0));if(w){let _t=new gt(new qe(1.8,.45),new ke({map:Qt(w),transparent:!0}));_t.position.set(0,.35+2.5,xt+.09),A.add(_t)}return A.traverse(_t=>{_t.isMesh&&(_t.castShadow=_t.castShadow||!1,_t.receiveShadow=!0)}),A.userData.door=new F(0,0,xt+2.4),A}let zt=[],D=tr(31),R=_=>{let w=Mo.find(A=>A.id===_||A.spr===_);return w?w.name.split(" ")[0]:_};function K(_){let w=A=>A[Math.floor(_()*A.length)][0];return{wall:w(Fi.wall),roof:w(Fi.roof),roofC:w(Fi.roofC),door:w(Fi.door),doorC:w(Fi.doorC),win:w(Fi.win),porch:_()<.75?1:0,fence:w(Fi.fence),garden:w(Fi.garden)}}function ft(_){_.g&&(l.remove(_.g),_.g.traverse(Y=>{Y.geometry&&Y.geometry.dispose()}));let w=_.own?r.ex:_.ex,A=_.own?r.name||"\u6211\u7684\u5BB6":_.label;_.g=re(w,A),_.g.position.set(_.x,0,_.z),_.g.rotation.y=_.f===2?Math.PI:0,l.add(_.g),_.g.traverse(Y=>{Y.isMesh&&(Y.userData.house=_)});let O=_.g.userData.door.clone();_.f===2&&(O.x=-O.x,O.z=-O.z),_.door={x:_.x+O.x,z:_.z+O.z}}ry.forEach(_=>{let w=Object.assign({},_);if(!w.own){w.ex=K(D);let A=Mo.find(O=>O.spr===_.npc||O.id===_.npc);w.label=(A?A.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}zt.push(w),ft(w)});let mt=zt.find(_=>_.own);function dt(_){let w=new Me;w.position.set(_.x,0,_.z),l.add(w);let A={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[_.k];S(7,.3,5.6,"#e8e2d4",0,.15,0,w),S(6.6,3.4,5,A[0],0,2,-.2,w),S(7.4,.4,6,A[1],0,3.9,-.2,w),S(7.6,.3,1.6,A[1],0,3.1,2.6,w).rotation.x=.35;let O=new gt(new qe(4.2,.9),new ke({map:Qt(A[3])}));O.position.set(0,4.55,2.85),w.add(O),S(4.4,1,.1,"#3a2a1a",0,4.55,2.78,w);let Y=new gt(new qe(2.2,1.4),H("#cfe8f4"));Y.position.set(-1.9,1.7,2.31),w.add(Y);let ht=Y.clone();ht.position.x=1.9,w.add(ht),S(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,w);let bt=xe(256,100,(Tt,xt,Le)=>{for(let Ln=0;Ln<3;Ln++)Tt.fillStyle=A[2],Tt.fillRect(4+Ln*84,0,80,Le-4);Tt.fillStyle="#fff",Tt.textAlign="center",Tt.textBaseline="middle",Tt.font=`900 40px ${Cn}`,[..._.k==="bar"?"\u6708\u5F71":_.n.slice(0,3)].slice(0,3).forEach((Ln,Tn)=>Tt.fillText(Ln,44+Tn*84,44))}),vt=new gt(new qe(1.5,.65),new ke({map:bt,transparent:!0,side:Pn}));vt.position.set(0,2.25,2.42),w.add(vt);for(let Tt of[-1,1]){let xt=b(.3,T(_.k==="sushi"?"#ffffff":"#e2452f"),Tt*1.15,2.3,2.5,w,1,1.3,1);N(Tt*1.15,2.3,2.6,2.6,w)}if(_.k==="ramen")for(let Tt=0;Tt<3;Tt++)E(.25,.25,.7,"#c8352a",-1.2+Tt*1.2,.35,3.5,w,12);if(_.k==="sushi"){let Tt=new gt(new si(.4,1.2,4),y("#2f6bb8"));Tt.position.set(3.1,3.2,2.6),Tt.rotation.z=-1.3,w.add(Tt)}return w.traverse(Tt=>{Tt.isMesh&&(Tt.userData.shop=_)}),_.door={x:_.x,z:_.z+3.6},w}pd.forEach(dt);let $t=[];zt.forEach(_=>{$t.push([_.x-ut/2-.2,_.z-(_.f===2?-.6:.6)-Lt/2-.2,_.x+ut/2+.2,_.z-(_.f===2?-.6:.6)+Lt/2+.2])}),pd.forEach(_=>$t.push([_.x-3.5,_.z-3,_.x+3.5,_.z+2.4])),$t.push([-3.6,-3.6,3.6,3.6]);function Ut(_,w,A,O){let Y=new Me;if(Y.position.set(_,0,w),Y.scale.setScalar(A),l.add(Y),O==="palm"){let ht=0,bt=0;for(let vt=0;vt<6;vt++){let Tt=E(.22-vt*.02,.26-vt*.02,.8,"#a07850",ht,bt+.4,0,Y,8);Tt.rotation.z=-.08*vt,ht+=.06*vt,bt+=.78}for(let vt=0;vt<7;vt++){let Tt=vt/7*Math.PI*2,xt=new gt(new si(.32,2.6,4),y("#3fa04a",{flatShading:!0}));xt.scale.z=.25,xt.position.set(ht+Math.cos(Tt)*1.1,bt+.1,Math.sin(Tt)*1.1),xt.rotation.set(Math.sin(Tt)*1.6,0,-Math.cos(Tt)*1.6),xt.castShadow=!0,Y.add(xt)}b(.18,"#6a4a2a",ht,bt-.1,.1,Y)}else E(.22,.3,1.8,"#8a5a3a",0,.9,0,Y,8),b(1.5,O==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,Y,1,.9,1,!0),b(1,O==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,Y,1,1,1,!0),b(.9,O==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,Y,1,1,1,!0);$t.push([_-.5*A,w-.5*A,_+.5*A,w+.5*A])}let Ct=tr(77);for(let _=0;_<34;_++){let w=_/34*Math.PI*2+Ct()*.1,A=Math.cos(w)*($i-1.5+Ct()*2),O=Math.sin(w)*(Ai-1.5+Ct()*2);if(O>18){Ct()<.5&&Ut(Ni(A*1.05,-$i-3,$i+3),Ni(O,22,Ai+4),.9,"palm");continue}Ut(Ni(A,-$i+2,$i-2),Ni(O,-Ai+2,Ai-2),.9+Ct()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([_,w],A)=>Ut(_,w,.8+A%3*.1,A%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([_,w])=>Ut(_,w,.8,"pink"));function Te(_,w){let A=new Me;A.position.set(_,0,w),l.add(A),E(.09,.12,3.6,"#3a3a44",0,1.8,0,A,8);let O=b(.28,T("#fff4d0"),0,3.7,0,A);E(.3,.2,.12,"#3a3a44",0,3.98,0,A,10),N(0,3.7,0,5,A);let Y=new gt(new Xn(3,20),new ke({map:Tr,transparent:!0,blending:rs,depthWrite:!1,opacity:0}));Y.rotation.x=-Math.PI/2,Y.position.y=.08,A.add(Y),W.push(Y),Y.userData.k=.35,$t.push([_-.2,w-.2,_+.2,w+.2])}for(let[_,w]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Te(_,w);function wt(_,w,A){let O=new Me;O.position.set(_,0,w),O.rotation.y=A,l.add(O),S(2,.12,.55,"#b8824a",0,.5,0,O),S(2,.5,.1,"#b8824a",0,.85,-.25,O);for(let Y of[-.85,.85])S(.1,.5,.5,"#3a3a44",Y,.25,0,O);return $t.push([_-1,w-.4,_+1,w+.4]),O}wt(0,6.9,Math.PI),wt(0,-6.9,0),wt(-6.9,0,Math.PI/2),wt(6.9,0,-Math.PI/2);let qt=new Me;qt.position.set(4.6,0,-4.6),qt.rotation.y=-Math.PI/4,l.add(qt);{S(.12,1.8,.12,"#6b3f1f",-.8,.9,0,qt),S(.12,1.8,.12,"#6b3f1f",.8,.9,0,qt);let _=xe(256,160,(A,O,Y)=>{A.fillStyle="#c8935a",A.fillRect(0,0,O,Y),A.strokeStyle="#6b3f1f",A.lineWidth=10,A.strokeRect(0,0,O,Y),A.fillStyle="#fff8ea",A.fillRect(20,30,100,70),A.fillStyle="#ffe0ea",A.fillRect(135,22,100,80),A.fillStyle="#3a2a1a",A.font=`900 26px ${Cn}`,A.textAlign="center",A.fillText("\u5CF6\u306E\u63B2\u793A\u677F",O/2,Y-18)}),w=new gt(new hn(1.8,1.1,.1),[y("#6b3f1f"),y("#6b3f1f"),y("#6b3f1f"),y("#6b3f1f"),new ke({map:_}),y("#6b3f1f")]);w.position.y=1.4,w.castShadow=!0,qt.add(w),$t.push([3.8,-5.4,5.4,-3.8])}function oe(_,w,A){let O=new Me;O.position.set(_,0,w),l.add(O),E(.05,.05,2.4,"#f4efe2",0,1.2,0,O,6);let Y=new gt(new si(1.5,.7,12),y(A,{flatShading:!0}));Y.position.y=2.5,Y.castShadow=!0,O.add(Y);let ht=new gt(new si(1.52,.7,12,1,!0,0,Math.PI/6),y("#ffffff",{side:Pn}));for(let bt=0;bt<6;bt++){let vt=ht.clone();vt.rotation.y=bt*Math.PI/3,vt.position.y=2.5,O.add(vt)}}function ne(_,w,A){let O=new Me;O.position.set(_,0,w),l.add(O),S(.7,.12,1.8,A,0,.35,0,O);let Y=S(.7,.1,.8,A,0,.6,-.85,O);Y.rotation.x=.6;for(let ht of[-.3,.3])for(let bt of[-.7,.7])S(.05,.3,.05,"#f4efe2",ht,.15,bt,O)}oe(-18,28,"#2f6bb8"),ne(-16.2,28.4,"#6fd1c0"),ne(-19.6,28.8,"#f29ab8"),oe(-4,30,"#e8553f"),ne(-2.2,30.2,"#f6cf4a"),oe(22,29,"#3f8f4f"),ne(23.8,29.3,"#f29ab8"),oe(-30,27,"#f6cf4a");{let _=new Me;_.position.set(10,0,Ai+6),l.add(_),S(3,.3,16,"#b8824a",0,.15,6,_);for(let O=0;O<6;O++)for(let Y of[-1.4,1.4])E(.15,.15,1.6,"#8a5a34",Y,-.5,-1+O*3,_,8);for(let O=0;O<16;O++)S(3,.02,.05,"#8a5a34",0,.31,-1.8+O,_,!1);let w=new Me;w.position.set(14,-.2,Ai+17),l.add(w),S(1.8,.6,4,"#f4efe2",0,.3,0,w),S(1.9,.15,4.1,"#e8553f",0,.65,0,w),E(.06,.06,3,"#8a5a34",0,2,0,w,6);let A=new gt(new qe(1.6,2.2),y("#ffffff",{side:Pn}));A.position.set(0,2.2,.6),A.rotation.y=Math.PI/2,w.add(A),at.userData.boat=w}let Wt=[8.5,Ai+4,11.5,Ai+19],Ce=[],ve=1.5,Ge=xe(64,64,_=>{let w=_.createRadialGradient(32,32,2,32,32,32);w.addColorStop(0,"rgba(0,0,0,.55)"),w.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=w,_.fillRect(0,0,64,64)});function X(_,w){return xe(512,112,(A,O,Y)=>{A.textAlign="center",A.textBaseline="middle";let ht=52;A.font=`900 ${ht}px ${Cn}`;let bt=String(_||"").slice(0,16);for(;A.measureText(bt).width>O-80&&ht>22;)ht-=2,A.font=`900 ${ht}px ${Cn}`;let vt=Math.min(O-12,A.measureText(bt).width+56);A.fillStyle=w==="me"?"#ffffffee":"#2a2a48e0",A.strokeStyle=w==="me"?"#3a2a1a":"#c8c0ff",A.lineWidth=7,Ks(A,(O-vt)/2,14,vt,Y-28,(Y-28)/2),A.fill(),A.stroke(),A.fillStyle=w==="me"?"#3a2a1a":"#fff3d6",A.fillText(bt,O/2,Y/2+2)})}let Bt=xe(128,112,_=>{_.strokeStyle="#2a1810",_.lineWidth=6,_.lineJoin="round",_.fillStyle="#ffffff",Ks(_,12,8,104,66,24),_.fill(),_.stroke(),_.beginPath(),_.moveTo(44,72),_.lineTo(34,100),_.lineTo(66,74),_.closePath(),_.fill(),_.stroke(),_.fillRect(46,68,18,8),_.fillStyle="#2a1810";for(let w=0;w<3;w++)_.beginPath(),_.arc(40+w*24,42,6,0,7),_.fill()});function lt(_,w,A){A=A||{};let O=new Me;l.add(O);let Y=new qe(1,1);Y.translate(0,.5,0);let ht=new ke({transparent:!0,alphaTest:.04,color:16777215}),bt=new gt(Y,ht);O.add(bt);let vt={grp:O,m:bt,mat:ht,h0:w,h:w*ve,ar:.8,w:w*ve*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};d(_,xt=>{ht.map=xt,ht.needsUpdate=!0,vt.ar=xt.image.width/xt.image.height,vt.w=vt.h*vt.ar});let Tt=new gt(new Xn(.5,16),new ke({map:Ge,transparent:!0,depthWrite:!1}));if(Tt.rotation.x=-Math.PI/2,l.add(Tt),vt.sh=Tt,A.name){let xt=new Jn(new Wn({map:X(A.name,A.nk),transparent:!0,depthTest:!1}));xt.renderOrder=30,xt.scale.set(2.2,.48,1),l.add(xt),vt.tag=xt}if(A.bubble){let xt=new Jn(new Wn({map:Bt,transparent:!0,depthWrite:!1}));xt.scale.set(.85,.74,1),l.add(xt),vt.bub=xt}return Ce.push(vt),vt}let j=lt(i.me.src,1.5,{name:i.me.name||"\u6211",nk:"me"});i.spawn==="door"&&mt?(j.x=mt.door.x,j.z=mt.door.z+.4):(j.x=0,j.z=11.5);function Xt(_,w){let A=Math.abs(_),O=Math.abs(w),Y=$i+ls-1,ht=Ai+ls-1,bt=14;return _>=Wt[0]&&_<=Wt[2]&&w>=Wt[1]&&w<=Wt[3]?!0:A>Y||O>ht?!1:A>Y-bt&&O>ht-bt?Math.hypot(A-(Y-bt),O-(ht-bt))<bt:!0}function kt(_,w,A){if(!Xt(_,w))return!0;for(let O of $t)if(_>O[0]-A&&_<O[2]+A&&w>O[1]-A&&w<O[3]+A)return!0;return!1}let ge=1,Ke=-$i-ls,xn=-Ai-ls,de=Math.ceil(($i+ls)*2),An=Math.ceil((Ai+ls)*2+16),mn=null;function ai(){mn=new Uint8Array(de*An);for(let _=0;_<An;_++)for(let w=0;w<de;w++)mn[_*de+w]=kt(Ke+w+.5,xn+_+.5,.35)?1:0}ai();function Ji(_,w,A,O){let Y=Xe=>Math.floor(Xe-Ke),ht=Xe=>Math.floor(Xe-xn),bt=Y(_),vt=ht(w),Tt=Y(A),xt=ht(O);if(Tt<0||xt<0||Tt>=de||xt>=An)return null;if(mn[xt*de+Tt]){let Xe=null,je=1e9;for(let ti=-3;ti<=3;ti++)for(let Qi=-3;Qi<=3;Qi++){let ts=Tt+Qi,Ii=xt+ti;if(ts<0||Ii<0||ts>=de||Ii>=An||mn[Ii*de+ts])continue;let ps=Qi*Qi+ti*ti;ps<je&&(je=ps,Xe=[ts,Ii])}if(!Xe)return null;[Tt,xt]=Xe}let Le=new Int32Array(de*An).fill(-1),Ln=vt*de+bt,Tn=xt*de+Tt;Le[Ln]=Ln;let Dt=[Ln],_t=0;for(;_t<Dt.length;){let Xe=Dt[_t++];if(Xe===Tn)break;let je=Xe%de,ti=Xe/de|0;for(let[Qi,ts]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let Ii=je+Qi,ps=ti+ts;if(Ii<0||ps<0||Ii>=de||ps>=An)continue;let Ir=ps*de+Ii;Le[Ir]>=0||mn[Ir]||Qi&&ts&&(mn[ti*de+Ii]||mn[ps*de+je])||(Le[Ir]=Xe,Dt.push(Ir))}}if(Le[Tn]<0)return null;let pe=[],ce=Tn;for(;ce!==Ln;)pe.push([Ke+ce%de+.5,xn+(ce/de|0)+.5]),ce=Le[ce];pe.reverse();let Oe=[],gn=_,Qn=w,Be=0;for(;Be<pe.length;){let Xe=Be;for(let je=pe.length-1;je>Be;je--)if(li(gn,Qn,pe[je][0],pe[je][1])){Xe=je;break}Oe.push(pe[Xe]),gn=pe[Xe][0],Qn=pe[Xe][1],Be=Xe+1}return Oe}function li(_,w,A,O){let Y=Math.hypot(A-_,O-w),ht=Math.ceil(Y/.4);for(let bt=1;bt<=ht;bt++){let vt=bt/ht;if(kt(_+(A-_)*vt,w+(O-w)*vt,.3))return!1}return!0}let tn=[],fs={};function Rn(_,w){let A=_+","+w;return fs[A]!==void 0?fs[A]:(fs[A]=tn.length,tn.push({x:_,z:w,n:[]}),tn.length-1)}{let _=[-36,-26,-15,0,15,26,36],w=[-18,0,16];for(let vt of w)for(let Tt=0;Tt<_.length-1;Tt++){let xt=Rn(_[Tt],vt),Le=Rn(_[Tt+1],vt);tn[xt].n.push(Le),tn[Le].n.push(xt)}for(let vt of[-36,36])for(let Tt=0;Tt<w.length-1;Tt++){let xt=Rn(vt,w[Tt]),Le=Rn(vt,w[Tt+1]);tn[xt].n.push(Le),tn[Le].n.push(xt)}let A=Rn(0,-28),O=Rn(0,-18);tn[A].n.push(O),tn[O].n.push(A);let Y=Rn(0,-9.5),ht=Rn(0,9.5);for(let[vt,Tt]of[[O,Y],[ht,Rn(0,16)],[Y,Rn(-9.5,0)],[Y,Rn(9.5,0)],[ht,Rn(-9.5,0)],[ht,Rn(9.5,0)],[Rn(-9.5,0),Rn(-15,0)],[Rn(9.5,0),Rn(15,0)]])tn[vt].n.push(Tt),tn[Tt].n.push(vt);let bt=fs["0,0"];bt!==void 0&&tn[bt].n.forEach(vt=>{tn[vt].n=tn[vt].n.filter(Tt=>Tt!==bt)}),bt!==void 0&&(tn[bt].n=[])}let xi=[];Mo.filter(_=>i.walk&&i.walk[_.spr]&&_.spr!=="robot").sort(()=>Math.random()-.5).slice(0,o?7:10).forEach(_=>{let w=lt(i.walk[_.spr],_.h,{bubble:1});w.d=_,w.sp=_.sp*.9;let A;do A=Math.floor(Math.random()*tn.length);while(!tn[A].n.length);w.x=tn[A].x+js(-1,1),w.z=tn[A].z+js(-1,1),w.node=A,w.state="idle",w.t=js(0,3),xi.push(w)});function ds(_){let w=tn[_.node];if(!w.n.length)return;let A=w.n[Math.floor(Math.random()*w.n.length)];_.node=A;let O=tn[A];_.tx=O.x+js(-1.2,1.2),_.tz=O.z+js(-1.2,1.2),_.state="walk"}let zi=(_,w,A,O)=>{let Y=document.createElement(_);return w&&(Y.className=w),A!=null&&(Y.innerHTML=A),(O||e).appendChild(Y),Y},nr=[],vi=_=>(nr.push(_),_),Er=vi(zi("div","i3info")),ir=vi(zi("div","i3hud")),I=vi(zi("div","h3hint")),q=vi(zi("div","h3toast")),Q=vi(zi("div","h3card")),et=vi(zi("div","i3pan"));function $(_){q.textContent=_,q.classList.add("on"),clearTimeout($.t),$.t=setTimeout(()=>q.classList.remove("on"),2400)}let G={dead:!1,mode:"walk",yaw:.35,yawT:.35,pitch:.72,pitchT:.72,dist:17,distT:17,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new F(j.x,1,j.z)},Ot=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],Zt=0;function te(){if(Ot[Zt][0]!==null)return Ot[Zt][0];let _=new Date;return _.getHours()+_.getMinutes()/60}function le(){if(G.mode==="edit"){ir.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}ir.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="time"><i>\u{1F550}</i>${Ot[Zt][1]}</button>`}function be(){let _=te(),w=Math.floor(_),A=Math.floor((_-w)*60);Er.innerHTML=`<b>\u{1F3DD}\uFE0F ${Qs(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(i.owner&&i.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(w).padStart(2,"0")}:${String(A).padStart(2,"0")}\u30FB${_<5||_>=19.5?"\u591C\u665A \u{1F319}":_<7?"\u6E05\u6668 \u{1F305}":_<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}le(),be();let Jt="wall";function B(){let _=Object.keys(Fi).map(A=>`<button class="h3tab ${Jt===A?"on":""}" type="button" data-i3="tab" data-k="${A}">${iy[A]}</button>`).join(""),w=Fi[Jt].map(([A,O])=>{let Y=typeof A=="string"&&A[0]==="#";return`<button class="i3opt ${String(r.ex[Jt])===String(A)?"on":""}" type="button" data-i3="opt" data-v="${A}">${Y?`<i style="background:${A}"></i>`:""}${Qs(O)}</button>`}).join("");et.innerHTML=`<div class="h3tabs">${_}</div><div class="i3row">${w}</div>`}function Pe(_){G.mode=_,Sn(),G.tgt=null,et.classList.toggle("on",_==="edit"),le(),Er.style.display=_==="edit"?"none":"",_==="edit"?(B(),G.distT=14,G.pitchT=.5,G.yawT=mt.f===2?Math.PI:0):(G.distT=17,G.pitchT=.72,rn())}let Ze=0;function rn(){s&&(clearTimeout(Ze),Ze=setTimeout(()=>{try{n.save&&n.save(r)}catch{}},500))}function Ve(_){Sn(),G.talk=_,_.state="talk",(!_.deck||!_.deck.length)&&(_.deck=_.d.lines.map(O=>({kind:O[0],text:O[1]})).sort(()=>Math.random()-.5));let w=_.deck.pop(),A=wr[w.kind]||wr.chat;Q.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${i.walk[_.d.spr]}')"></div><div class="h3nm"><b>${Qs(_.d.name)}</b><small>${Qs(_.d.role||"")}</small></div><span class="h3k" style="background:${A.c}">${A.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${w.kind==="mind"?" mind":""}">${w.kind==="mind"?"\uFF08"+Qs(w.text)+"\uFF09":"\u300C"+Qs(w.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,Q.classList.toggle("r",Yn(new F(_.x,1,_.z)).x<on().left+on().width/2),Q.classList.add("on")}function ee(_,w,A,O){Sn(),Q.innerHTML=`<div class="h3h"><div class="h3nm"><b>${Qs(_)}</b><small>${Qs(w||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${A}</p>${O?`<div class="h3bt">${O}</div>`:""}`,Q.classList.remove("r"),Q.classList.add("on")}function Sn(){Q.classList.remove("on");let _=G.talk;G.talk=null,_&&_.state==="talk"&&(_.state="idle",_.t=js(1,2))}let ze=_=>{let w=_.target.closest("[data-i3]");if(!w||!e.contains(w))return;let A=w.dataset.i3;if(A==="close")Sn();else if(A==="more"&&G.talk)Ve(G.talk);else if(A==="edit")G.mode==="walk"&&Pe("edit");else if(A==="done")Pe("walk");else if(A==="tab")Jt=w.dataset.k,B();else if(A==="opt"){let O=w.dataset.v;r.ex[Jt]=/^\d$/.test(O)?+O:O,ft(mt),B(),rn()}else if(A==="home"){let O=mt;Sn(),Un(O.door.x,O.door.z,()=>Vn())}else A==="enter"?(Sn(),Vn()):A==="time"&&(Zt=(Zt+1)%Ot.length,le(),be(),$(Zt?`\u9810\u89BD\uFF1A${Ot[Zt][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",ze);function Vn(){if(!G.entering){G.entering=!0;try{n.enter&&n.enter()}catch{G.entering=!1}}}function Un(_,w,A){let O=Ji(j.x,j.z,_,w);if(!O){$("\u8D70\u4E0D\u904E\u53BB");return}G.tgt={path:O,fn:A}}let on=()=>t.getBoundingClientRect(),qn=new _o,We=new Et,ci=new Ti(new F(0,1,0),0),He=new F,en=(_,w)=>{let A=on();return We.set((_-A.left)/A.width*2-1,-((w-A.top)/A.height*2-1)),We},Yn=_=>{let w=_.clone().project(u),A=on();return{x:(w.x+1)/2*A.width+A.left,y:(1-w.y)/2*A.height+A.top}},In=new Map,wn=null,jn=null;t.addEventListener("contextmenu",_=>_.preventDefault()),t.addEventListener("pointerdown",_=>{_.preventDefault();try{t.setPointerCapture(_.pointerId)}catch{}if(In.set(_.pointerId,{x:_.clientX,y:_.clientY}),In.size===2){let[w,A]=[...In.values()];jn={d:Math.hypot(w.x-A.x,w.y-A.y),dist:G.distT,ang:Math.atan2(A.y-w.y,A.x-w.x),yaw:G.yawT},wn=null;return}wn={id:_.pointerId,x:_.clientX,y:_.clientY,moved:0,yaw0:G.yawT,pit0:G.pitchT}}),t.addEventListener("pointermove",_=>{if(In.has(_.pointerId)&&In.set(_.pointerId,{x:_.clientX,y:_.clientY}),jn&&In.size>=2){let[O,Y]=[...In.values()];G.distT=Ni(jn.dist*jn.d/Math.max(20,Math.hypot(O.x-Y.x,O.y-Y.y)),7,40),G.yawT=jn.yaw-(Math.atan2(Y.y-O.y,Y.x-O.x)-jn.ang);return}if(!wn||wn.id!==_.pointerId)return;let w=_.clientX-wn.x,A=_.clientY-wn.y;!wn.moved&&Math.hypot(w,A)>8&&(wn.moved=1),wn.moved&&(G.yawT=wn.yaw0-w*.007,G.pitchT=Ni(wn.pit0+A*.005,.22,1.3))});let To=_=>{In.delete(_.pointerId),In.size<2&&(jn=null),!(!wn||wn.id!==_.pointerId)&&(wn.moved||ha(_.clientX,_.clientY),wn=null)};t.addEventListener("pointerup",To),t.addEventListener("pointercancel",To),t.addEventListener("wheel",_=>{_.preventDefault(),G.distT=Ni(G.distT+Math.sign(_.deltaY)*1.6,7,40)},{passive:!1});let ca=_=>{if(!document.contains(t)||/input|textarea/i.test(_.target&&_.target.tagName||""))return;let w=_.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(w)&&(G.keys[w]=1,/^[qe]$/.test(w)||(G.tgt=null),_.preventDefault())},Eo=_=>{delete G.keys[_.key.toLowerCase()]};document.addEventListener("keydown",ca),document.addEventListener("keyup",Eo);function Ar(_,w){let A=null,O=1e9;for(let Y of xi){let ht=Yn(new F(Y.x,0,Y.z)),bt=Yn(new F(Y.x,Y.h+.2,Y.z)),vt=ht.y-bt.y;if(vt<6)continue;let Tt=Math.max(vt*.38,26),xt=Math.abs(_-ht.x);if(xt<Tt&&w>bt.y-10&&w<ht.y+10){let Le=xt;Le<O&&(O=Le,A=Y)}}return A}function ha(_,w){if(G.mode==="edit")return;let A=Ar(_,w);if(A){let Y=Math.hypot(A.x-j.x,A.z-j.z);Ve(A),Y>3&&Un(A.x+(j.x-A.x)/Y*1.4,A.z+(j.z-A.z)/Y*1.4);return}qn.setFromCamera(en(_,w),u);let O=qn.intersectObjects(l.children,!0).filter(Y=>Y.object.isMesh&&(Y.object.userData.house||Y.object.userData.shop));if(O.length){let Y=O[0].object.userData;if(Y.house){let ht=Y.house;ht.own?(ee(s?"\u6211\u7684\u5BB6":`${i.owner&&i.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),Un(ht.door.x,ht.door.z)):(ee(ht.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),Un(ht.door.x,ht.door.z));return}if(Y.shop){let ht=Y.shop;ee(ht.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),Un(ht.door.x,ht.door.z);return}}if(Sn(),qn.ray.intersectPlane(ci,He)){let Y=Ji(j.x,j.z,He.x,He.z);Y&&(G.tgt={path:Y})}}let Ki=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],ua=new Se,Ao=new Se,Ns=new Se;function Tl(_){let w=0;for(;w<Ki.length-2&&_>=Ki[w+1][0];)w++;let A=Ki[w],O=Ki[w+1],Y=Ni((_-A[0])/(O[0]-A[0]),0,1),ht=bt=>ua.set(A[bt]).clone().lerp(Ao.set(O[bt]),Y);return{zen:ht(1),hor:ht(2),sunC:ht(3),sunI:ru(A[4],O[4],Y),hemiI:ru(A[5],O[5],Y),fog:ht(6),night:ru(A[7],O[7],Y)}}let Ro=-1;function sr(_){let w=Tl(_),A=P.attributes.position;for(let vt=0;vt<A.count;vt++){let Tt=A.getY(vt)/300;Ns.copy(w.hor).lerp(w.zen,Ni((Tt+.05)/.55,0,1));let xt=P.attributes.color.array;xt[vt*3]=Ns.r,xt[vt*3+1]=Ns.g,xt[vt*3+2]=Ns.b}P.attributes.color.needsUpdate=!0,h.color.copy(w.fog),a.setClearColor(w.fog),Vt.color.copy(w.sunC),Vt.intensity=w.sunI,Nt.intensity=w.hemiI,Gt.intensity=.2+w.night*.15,Nt.color.set(w.night>.5?"#8a9aff":"#dff2ff");let O=(_-6)/12*Math.PI,Y=Math.sin(O);st.position.set(Math.cos(O)*260,Math.max(-40,Y*220),-60),st.material.opacity=Ni(Y*3,0,1);let ht=((_+6)%24-6)/12*Math.PI;rt.position.set(-Math.cos(O)*240,Math.max(30,Math.abs(Math.sin(ht))*200),-80),rt.material.opacity=w.night,St.userData.m.opacity=w.night*.9;let bt=w.night;W.forEach(vt=>{vt.material.opacity=bt*(vt.userData.k||.75)}),V.forEach(vt=>vt.color.copy(vt.userData.day).lerp(vt.userData.night,bt)),pt.color.set("#ffffff").lerp(Ns.set("#3a4a8a"),bt*.6),at.children.forEach(vt=>vt.children.forEach(Tt=>Tt.material.color.set("#ffffff").lerp(Ns.set("#4a4a7a"),bt*.8))),G.night=bt}let Rr={get dead(){return G.dead},set dead(_){_&&Co()},dispose:Co,kind:"island",probe(){let _=w=>{let A=Yn(w);return{x:Math.round(A.x),y:Math.round(A.y)}};return{mode:G.mode,me:{x:+j.x.toFixed(2),z:+j.z.toFixed(2)},calls:a.info.render.calls,tris:a.info.render.triangles,yaw:+G.yaw.toFixed(2),pitch:+G.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(G.night||0).toFixed(2),card:Q.classList.contains("on")?Q.textContent:"",myDoor:_(new F(mt.door.x,1.2,mt.door.z-2.8*(mt.f===2?-1:1))),myHouse:_(new F(mt.x,2,mt.z)),npcs:xi.map(w=>Object.assign({id:w.d.id,state:w.state},_(new F(w.x,w.h*.5,w.z))))}},px(_,w,A){let O=Yn(new F(_,w,A));return{x:Math.round(O.x),y:Math.round(O.y)}},teleport(_,w){j.x=_,j.z=w,G.cam.set(_,1,w)},setYaw(_){G.yaw=G.yawT=_},setPitch(_){G.pitch=G.pitchT=_},setDist(_){G.dist=G.distT=_},setHour(_){Ot[0][0]=_,Ro=-1}};function Co(){if(!G.dead){if(G.dead=!0,cancelAnimationFrame(G.raf),clearTimeout(Ze),s)try{n.save&&n.save(r,!0)}catch{}document.removeEventListener("keydown",ca),document.removeEventListener("keyup",Eo),e.removeEventListener("click",ze),nr.forEach(_=>_.remove()),l.traverse(_=>{_.geometry&&_.geometry.dispose(),(_.material?Array.isArray(_.material)?_.material:[_.material]:[]).forEach(A=>{A.map&&A.map.dispose(),A.dispose()})});try{a.dispose(),a.forceContextLoss()}catch{}}}let _i=0,Ye=0,ji=0,Oi=1,rr=0,Cr=0,Io=new F,Ri=new F,Ci=new F;function fa(){let _=t.getBoundingClientRect(),w=Math.max(1,t.clientWidth),A=Math.max(1,t.clientHeight),O=Math.min(2,window.devicePixelRatio||1),Y=Math.round(Ni(1.75-((_.height||A)-380)/440*.6,1.15,1.75)*20)/20;Y!==ve&&(ve=Y,Ce.forEach(ht=>{ht.h=ht.h0*ve,ht.w=ht.h*ht.ar})),!(w===_i&&A===Ye&&O===ji)&&(_i=w,Ye=A,ji=O,Oi=Ni(_.width*O/w,.5,2),Oi=Math.min(Oi,Math.sqrt(16e5/(w*A))),a.setPixelRatio(Oi),a.setSize(w,A,!1),u.aspect=w/A,u.updateProjectionMatrix())}function da(_){if(G.dead)return;if(!document.contains(t)){Co();return}G.raf=requestAnimationFrame(da);let w=Math.min(.1,(_-G.last)/1e3);G.last=_,G.t+=w;let A=G.t;fa(),rr+=w,Cr++,rr>1.5&&(rr/Cr>.03&&Oi>.6&&(Oi=Math.max(.6,Oi*.85),a.setPixelRatio(Oi),a.setSize(_i,Ye,!1)),rr=0,Cr=0);let O=te();Math.abs(O-Ro)>.02&&(sr(O),Ro=O,be());let Y=G.keys;Y.q&&(G.yawT+=w*1.8),Y.e&&(G.yawT-=w*1.8),G.yaw+=(G.yawT-G.yaw)*Math.min(1,w*9),G.pitch+=(G.pitchT-G.pitch)*Math.min(1,w*9),G.dist+=(G.distT-G.dist)*Math.min(1,w*6);let ht=Math.sin(G.yaw),bt=Math.cos(G.yaw);if(Io.set(-ht,0,-bt),Ri.set(bt,0,-ht),j.moving=!1,G.mode==="walk"){let Dt=0,_t=0,pe=1e9,ce=(Y.arrowright||Y.d?1:0)-(Y.arrowleft||Y.a?1:0),Oe=(Y.arrowup||Y.w?1:0)-(Y.arrowdown||Y.s?1:0);if(ce||Oe)Dt=Ri.x*ce+Io.x*Oe,_t=Ri.z*ce+Io.z*Oe;else if(G.tgt){let Qn=G.tgt.path[0];if(Qn){let Be=Qn[0]-j.x,Xe=Qn[1]-j.z,je=Math.hypot(Be,Xe);je<.1?G.tgt.path.shift():(Dt=Be,_t=Xe,pe=je)}else{let Be=G.tgt.fn;G.tgt=null,Be&&Be()}}let gn=Math.hypot(Dt,_t);if(gn>.01){let Qn=Math.min(5*w,pe),Be=Dt/gn*Qn,Xe=_t/gn*Qn,je=!1;if(kt(j.x+Be,j.z+Xe,.3)?kt(j.x+Be,j.z,.3)?kt(j.x,j.z+Xe,.3)||(j.z+=Xe,je=!0):(j.x+=Be,je=!0):(j.x+=Be,j.z+=Xe,je=!0),je){j.moving=!0,j.ph+=w*10;let ti=Dt/gn*Ri.x+_t/gn*Ri.z;Math.abs(ti)>.2&&(j.face=ti>0?1:-1)}else if(G.tgt&&(G.tgt.stuck=(G.tgt.stuck||0)+w,G.tgt.stuck>.5)){let ti=G.tgt.fn;G.tgt=null,ti&&ti()}G.talk&&Math.hypot(G.talk.x-j.x,G.talk.z-j.z)>9&&Sn()}}j.y=0;for(let Dt of zt)if(+(Dt.own?r.ex:Dt.ex).porch&&Math.abs(j.x-Dt.x)<ut/2+.3){let _t=(j.z-Dt.z)*(Dt.f===2?-1:1);_t>1.42&&_t<3.15&&(j.y=.3)}for(let Dt of xi){if(Dt.moving=!1,Dt.state==="talk"){Dt.face=(j.x-Dt.x)*Ri.x+(j.z-Dt.z)*Ri.z>0?1:-1;continue}if(Dt.state==="idle"){Dt.t-=w,Dt.t<=0&&ds(Dt);continue}let _t=Dt.tx-Dt.x,pe=Dt.tz-Dt.z,ce=Math.hypot(_t,pe);if(ce<.1){Dt.state="idle",Dt.t=Math.random()<.3?js(3,8):js(.2,1);continue}let Oe=Math.min(ce,Dt.sp*w);Dt.x+=_t/ce*Oe,Dt.z+=pe/ce*Oe,Dt.moving=!0,Dt.ph+=w*(4+Dt.sp*3);let gn=_t*Ri.x+pe*Ri.z;Math.abs(gn)>.05&&(Dt.face=gn>0?1:-1)}let vt=j.x,Tt=j.z;G.mode==="edit"&&(vt=mt.x,Tt=mt.z+(mt.f===2?-1:1)*3.2),G.cam.x+=(vt-G.cam.x)*Math.min(1,w*8),G.cam.z+=(Tt-G.cam.z)*Math.min(1,w*8),G.cam.y+=((G.mode==="edit"?1.8:1.1)-G.cam.y)*Math.min(1,w*4);let xt=_i/Ye,Le=G.dist*(xt<1.4?1.4/xt:1);Ci.set(G.cam.x+ht*Math.cos(G.pitch)*Le,G.cam.y+Math.sin(G.pitch)*Le,G.cam.z+bt*Math.cos(G.pitch)*Le),Ci.y<.8&&(Ci.y=.8),u.position.copy(Ci),u.lookAt(G.cam.x,G.cam.y+.4,G.cam.z),k.position.copy(Ci),Vt.position.set(G.cam.x+30,60,G.cam.z+22),Vt.target.position.set(G.cam.x,0,G.cam.z),G.night>.6&&Vt.position.set(G.cam.x-25,50,G.cam.z+30);let Ln=Math.atan2(Ci.x-G.cam.x,Ci.z-G.cam.z);for(let Dt of Ce){let _t=Dt.w,pe=Dt.h,ce=Dt.moving,Oe=Math.sin(Dt.ph),gn=ce?Math.abs(Oe)*.06:0,Qn=ce?Oe*.06:Math.sin(A*1.6+Dt.ph)*.01,Be=ce?1+Math.cos(Dt.ph*2)*.025:1+Math.sin(A*1.6+Dt.ph)*.008;Dt.grp.position.set(Dt.x,(Dt.y||0)+gn,Dt.z),Dt.m.rotation.set(0,Ln,Qn*Dt.face),Dt.m.scale.set(_t*Dt.face*(2-Be),pe*Be,1),Dt.sh.position.set(Dt.x,(Dt.y||0)+.07,Dt.z),Dt.sh.scale.set(_t*.7,_t*.4,1),Dt.tag&&Dt.tag.position.set(Dt.x,(Dt.y||0)+pe+.35,Dt.z),Dt.bub&&(Dt.bub.visible=Dt!==G.talk,Dt.bub.position.set(Dt.x,pe+.5+Math.sin(A*2.3+Dt.ph)*.06,Dt.z))}_e.offset.set(A*.004,A*.006),yt.forEach((Dt,_t)=>{_t===0?Dt.rotation.z=A*.3:Dt.scale.y=1+Math.sin(A*6)*.08}),at.children.forEach(Dt=>{Dt.userData.a+=w*.004,Dt.position.x=Math.cos(Dt.userData.a)*Dt.userData.R,Dt.position.z=Math.sin(Dt.userData.a)*Dt.userData.R,Dt.lookAt(0,Dt.position.y,0)});let Tn=at.userData.boat;Tn&&(Tn.position.y=-.2+Math.sin(A*1.2)*.08,Tn.rotation.z=Math.sin(A*.9)*.04),a.render(l,u)}return G.raf=requestAnimationFrame(da),Rr}var pi=(i,t)=>i+Math.random()*(t-i),Zi=(i,t,e)=>Math.max(t,Math.min(e,i));var Us=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},pn=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),lu=new Uint8Array(256).map((i,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),er=i=>"\xA5"+Math.round(i).toLocaleString("en-US"),me=10,Mt=8,kn=3.1,mi=4,gi=6,us=(mi+gi)/2,cs=-10,hs=me+10,gd=Mt+9,xd=-4,_d=me+4,ay=Mt+1,hu=Mt+4,oi={x:7.3,z:Mt+1.4},wl=new Set;for(let i=Mt;i<hu+1;i++)for(let t=mi;t<gi;t++)wl.add(t+","+i);wl.add("7,"+(Mt+1));var du=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function la(i){let t=0,e={};for(let[n]of i.it||[]){let s=we[n];s&&(e[n]=(e[n]||0)+1,t+=e[n]<=2?s.c:s.c*.4)}return i.fl&&i.fl!=="wood"&&(t+=6),i.wa&&i.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function uu(i){let t=0;return du.forEach((e,n)=>{i>=e[0]&&(t=n)}),t}var fu=i=>Math.min(8e4,3e3+i*400);function yd(i){return{v:1,name:i||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function ly(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var cu={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},cy=["daruma","maneki","beer","vase","pine","sake"],vd=`
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
.h3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff3d6;font-size:18px;background:#140f2e;z-index:9}
`,hy=vd;function uy(i){let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.data||yd();if(r.it=(r.it||[]).filter(c=>we[c[0]]),r.inv=r.inv||{},r.fo=r.fo||{wood:1},r.wo=r.wo||{tsuchi:1},r.gc=r.gc||{},!document.getElementById("h3css")){let c=document.createElement("style");c.id="h3css",c.textContent=vd,document.head.appendChild(c)}let o=new lo({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});o.setClearColor(1709366,1);let a=new _r;a.fog=new co(3811400,26,80);let l=new zn(40,2,.2,500),h=new mo,u=(c,x)=>h.load(c,v=>{v.colorSpace=Fn,v.anisotropy=4,x&&x(v)}),f=new Ei(250,24,16);{let c=[],x=f.attributes.position,v=new Se("#121032"),M=new Se("#7a4058"),L=new Se("#3a2350"),U=new Se;for(let Z=0;Z<x.count;Z++){let J=x.getY(Z)/250;J>.25?U.copy(L).lerp(v,Zi((J-.25)/.55,0,1)):U.copy(M).lerp(L,Zi((J+.05)/.3,0,1)),c.push(U.r,U.g,U.b)}f.setAttribute("color",new Ee(c,3))}let d=new gt(f,new ke({vertexColors:!0,side:Gn,fog:!1,depthWrite:!1}));d.renderOrder=-10,a.add(d);{let c=[],x=Us(11);for(let M=0;M<300;M++){let L=x()*Math.PI*2,U=.2+x()*1.2,Z=230;c.push(Math.cos(L)*Math.cos(U)*Z,Math.sin(U)*Z,Math.sin(L)*Math.cos(U)*Z)}let v=new fn;v.setAttribute("position",new Ee(c,3)),d.add(new jo(v,new ho({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let c=xe(128,128,v=>{let M=v.createRadialGradient(64,64,20,64,64,64);M.addColorStop(0,"rgba(255,246,214,1)"),M.addColorStop(.5,"rgba(255,240,200,1)"),M.addColorStop(.52,"rgba(255,230,180,.25)"),M.addColorStop(1,"rgba(255,230,180,0)"),v.fillStyle=M,v.fillRect(0,0,128,128)}),x=new Jn(new Wn({map:c,fog:!1,depthWrite:!1}));x.scale.set(40,40,1),x.position.set(-90,120,-170),d.add(x)}a.add(new br(12103408,5914696,1.15));let p=new Sr(16769208,.7);p.position.set(-6,12,10),a.add(p);let y=new xo(16756832,14,13,1.3);y.position.set(me*.3,2.7,Mt*.45),a.add(y);let T=new xo(16756832,14,13,1.3);T.position.set(me*.72,2.7,Mt*.55),a.add(T);let g=new xo(16752720,10,9,1.4);g.position.set(us,2.4,Mt+1.4),a.add(g);let m=xe(64,64,c=>{let x=c.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(0,0,0,.7)"),x.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=x,c.fillRect(0,0,64,64)}),S=(c,x,v)=>{let M=c.clone();return M.wrapS=M.wrapT=Rs,M.repeat.set(x,v),M.needsUpdate=!0,M};function E(c,x,v,M,L,U,Z,J){let ot=new gt(new hn(c,x,v),M);return ot.position.set(L,U,Z),(J||a).add(ot),ot}function b(c,x,v,M,L,U,Z){let J=new Jn(new Wn({map:Tr,blending:rs,transparent:!0,depthWrite:!1,opacity:L}));return Z&&J.material.color.set(Z),J.scale.set(M,M,1),J.position.set(c,x,v),(U||a).add(J),J}let W={wood:()=>xe(256,256,(c,x,v)=>{let M=Us(4);for(let L=0;L<8;L++){let U=M();c.fillStyle=`hsl(28,${42+U*10}%,${44+U*8}%)`,c.fillRect(0,L*32,x,32),c.fillStyle="rgba(60,30,10,.35)",c.fillRect(0,L*32,x,2),c.fillRect(M()*256|0,L*32,2,32);for(let Z=0;Z<6;Z++)c.fillStyle="rgba(90,50,20,.12)",c.fillRect(M()*x,L*32+6+M()*20,40+M()*60,2)}}),dark:()=>xe(256,256,(c,x,v)=>{let M=Us(8);for(let L=0;L<8;L++){let U=M();c.fillStyle=`hsl(20,${30+U*10}%,${22+U*7}%)`,c.fillRect(0,L*32,x,32),c.fillStyle="rgba(0,0,0,.4)",c.fillRect(0,L*32,x,2),c.fillRect(M()*256|0,L*32,2,32);for(let Z=0;Z<5;Z++)c.fillStyle="rgba(255,220,180,.05)",c.fillRect(M()*x,L*32+6+M()*20,40+M()*60,2)}}),tatami:()=>xe(256,256,(c,x,v)=>{for(let M=0;M<2;M++){let L=M*128;c.fillStyle="#c4c078",c.fillRect(L,0,128,v);for(let U=0;U<v;U+=3)c.fillStyle=U%6?"#b8b46c":"#cfcb84",c.fillRect(L,U,128,1);c.fillStyle="#2a3a2a",c.fillRect(L,0,6,v),c.fillRect(L+122,0,6,v)}}),stone:()=>xe(256,256,(c,x,v)=>{c.fillStyle="#5a5250",c.fillRect(0,0,x,v);let M=Us(6);for(let L=0;L<4;L++)for(let U=0;U<4;U++){let Z=M()*18|0;c.fillStyle=`rgb(${120+Z},${112+Z},${104+Z})`,c.fillRect(U*64+3+L%2*8,L*64+3,58,58)}}),check:()=>xe(256,256,(c,x,v)=>{for(let M=0;M<4;M++)for(let L=0;L<4;L++)c.fillStyle=(L+M)%2?"#2a3a36":"#d8c8a0",c.fillRect(L*64,M*64,64,64);c.strokeStyle="rgba(0,0,0,.2)",c.lineWidth=2;for(let M=0;M<=4;M++)c.beginPath(),c.moveTo(M*64,0),c.lineTo(M*64,v),c.moveTo(0,M*64),c.lineTo(x,M*64),c.stroke()})};function N(c,x){let M=Math.round(x*64),L=Math.round(kn*64);return xe(M,L,U=>{let Z=Us(x*7|0);if(c==="plank")for(let ot=0;ot<M;ot+=22){let Ft=Z();U.fillStyle=`hsl(28,${36+Ft*8}%,${40+Ft*8}%)`,U.fillRect(ot,0,22,L),U.fillStyle="rgba(40,20,10,.4)",U.fillRect(ot,0,2,L)}else if(c==="red"){U.fillStyle="#b8402e",U.fillRect(0,0,M,L);for(let ot=0;ot<300;ot++)U.fillStyle=Z()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",U.fillRect(Z()*M,Z()*L,8,8);U.fillStyle="#5a2a14";for(let ot=0;ot<M;ot+=128)U.fillRect(ot,0,8,L)}else if(c==="ai"){U.fillStyle="#26365e",U.fillRect(0,0,M,L),U.strokeStyle="rgba(230,224,208,.5)",U.lineWidth=2;for(let ot=0;ot<L;ot+=24)for(let Ft=ot/24%2*12;Ft<M;Ft+=24)U.beginPath(),U.arc(Ft,ot,9,Math.PI,0),U.stroke()}else if(c==="sakura"){U.fillStyle="#f6e6e4",U.fillRect(0,0,M,L);for(let ot=0;ot<M*L/900;ot++){let Ft=Z()*M,nn=Z()*L;U.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][ot%3];for(let Ne=0;Ne<5;Ne++){let ie=Ne/5*Math.PI*2;U.beginPath(),U.ellipse(Ft+Math.cos(ie)*4,nn+Math.sin(ie)*4,3.5,2,ie,0,7),U.fill()}}}else{U.fillStyle="#e8d4ae",U.fillRect(0,0,M,L);for(let ot=0;ot<M*L/60;ot++)U.fillStyle=Z()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",U.fillRect(Z()*M,Z()*L,3,3);U.fillStyle="#6b3f1f";for(let ot=0;ot<M;ot+=64*2.5)U.fillRect(ot,0,10,L)}let J=L-.9*64;U.fillStyle="#5a3218",U.fillRect(0,J,M,.9*64),U.fillStyle="rgba(0,0,0,.25)";for(let ot=0;ot<M;ot+=28)U.fillRect(ot,J,2,.9*64);U.fillStyle="#3a1e0c",U.fillRect(0,J-6,M,8),U.fillRect(0,0,M,10)})}let V=xe(256,256,(c,x,v)=>{c.fillStyle="#4a4246",c.fillRect(0,0,x,v);let M=Us(3);for(let L=0;L<4;L++)for(let U=0;U<4;U++){let Z=(M()*16|0)-8;c.fillStyle=`rgb(${96+Z},${86+Z},${84+Z})`,c.fillRect(U*64+2,L*64+2,60,60)}}),H=xe(256,256,(c,x,v)=>{c.fillStyle="#2c2830",c.fillRect(0,0,x,v);let M=Us(5);for(let L=0;L<700;L++){let U=34+(M()*22|0);c.fillStyle=`rgb(${U},${U-3},${U+4})`,c.fillRect(M()*x,M()*v,2,2)}});{let c=new gt(new qe(600,600),ae("#1c1826"));c.rotation.x=-Math.PI/2,c.position.y=-.04,a.add(c)}{let c=hs-cs+30,x=(cs+hs)/2,v=new gt(new qe(c,6.2),ae("#ffffff",{map:S(V,c/3,6.2/3)}));v.rotation.x=-Math.PI/2,v.position.set(x,.005,Mt+3.1),a.add(v);let M=new gt(new qe(c,6),ae("#ffffff",{map:S(H,c/6,1)}));M.rotation.x=-Math.PI/2,M.position.set(x,0,Mt+9.2),a.add(M);for(let U=cs-14;U<hs+14;U+=3.4)E(1.7,.02,.14,dn("#cfc8b4"),U,.02,Mt+9.2);E(c,.16,.2,ae("#7a6e66"),x,.08,Mt+6.15);let L=new gt(new qe(c,5),ae("#ffffff",{map:S(V,c/3,5/3)}));L.rotation.x=-Math.PI/2,L.position.set(x,.005,Mt+14.7),a.add(L)}let P=new sn({color:"#ffffff"}),C=new gt(new qe(me,Mt),P);C.rotation.x=-Math.PI/2,C.position.set(me/2,.02,Mt/2),a.add(C);function k(c){P.map&&P.map.dispose();let x=(W[c]||W.wood)();x.wrapS=x.wrapT=Rs,x.repeat.set(me/2,Mt/2),P.map=x,P.needsUpdate=!0}E(me+.4,.12,Mt+.4,ae("#2a1810"),me/2,-.075,Mt/2);let it={back:new sn,left:new sn,right:new sn,front:new sn},nt=xe(256,200,(c,x,v)=>{c.fillStyle="#5a3a24",c.fillRect(0,0,x,v);for(let M=0;M<x;M+=16)c.fillStyle=M%32?"#4a2e1c":"#6a4630",c.fillRect(M,0,14,v);c.fillStyle="#2a1810",c.fillRect(0,v-40,x,40)}),st=new sn({map:S(nt,3,1)}),ct=ae("#3a2214"),rt={};function St(c,x,v,M,L,U){let Z=new Me;Z.position.set(M,0,L),a.add(Z);let J=new gt(new hn(x,kn,v),U);return J.position.y=kn/2,Z.add(J),rt[c]=rt[c]||[],rt[c].push(Z),Z}St("back",me+.4,.2,me/2,-.1,[ct,ct,ct,ct,it.back,st]),St("left",.2,Mt,-.1,Mt/2,[it.left,st,ct,ct,ct,ct]),St("right",.2,Mt,me+.1,Mt/2,[st,it.right,ct,ct,ct,ct]);let at=xe(640,200,(c,x,v)=>{c.fillStyle="#6a4228",c.fillRect(0,0,x,v);for(let L=0;L<x;L+=14)c.fillStyle=L%28?"#5a3620":"#74482c",c.fillRect(L,0,12,v);let M=L=>{c.fillStyle="#ffd98a",c.fillRect(L,56,128,70),c.strokeStyle="#2a1408",c.lineWidth=6,c.strokeRect(L,56,128,70),c.lineWidth=3;for(let U=1;U<4;U++)c.beginPath(),c.moveTo(L+U*32,56),c.lineTo(L+U*32,126),c.stroke();c.beginPath(),c.moveTo(L,91),c.lineTo(L+128,91),c.stroke()};M(64),M(448),c.fillStyle="#2a1810",c.fillRect(0,v-40,x,40)}),Nt=new ke({map:at}),Gt=(c,x)=>{let v=new ke({map:at.clone()});return v.map.needsUpdate=!0,v.map.repeat.set(x-c,1),v.map.offset.set(c,0),v};St("front",mi+.2,.2,(mi-.2)/2,Mt+.1,[ct,ct,ct,ct,Gt(0,(mi+.2)/(me+.4)),it.front]),St("front",me-gi+.2,.2,(gi+me+.2)/2,Mt+.1,[ct,ct,ct,ct,Gt((gi+.2)/(me+.4),1),it.front]);{let c=new Me;c.position.set(us,0,Mt+.1),a.add(c),E(gi-mi,kn-2.35,.2,ae("#4a2a14"),0,2.35+(kn-2.35)/2,0,c),rt.front.push(c)}function Vt(c){let x={back:me+.4,left:Mt,right:Mt,front:me+.4};for(let v in it){let M=it[v];M.map&&M.map.dispose(),M.map=N(c,x[v]),M.needsUpdate=!0}}let he=new Me;a.add(he),rt.front.push(he);let _e=ae("#3a2214");E(.22,2.45,.34,_e,mi+.05,1.22,Mt+.14,he),E(.22,2.45,.34,_e,gi-.05,1.22,Mt+.14,he),E(gi-mi+.4,.24,.38,_e,us,2.42,Mt+.14,he);let pt=new Me;pt.position.set(us,2.32,Mt+.3),he.add(pt);let At=xe(256,140,(c,x,v)=>{for(let M=0;M<3;M++){let L=4+M*84;c.fillStyle="#23315c",c.fillRect(L,0,80,v-6),c.fillStyle="rgba(0,0,0,.22)",c.fillRect(L,v-16,80,10)}c.fillStyle="#f3e6c8",c.textAlign="center",c.textBaseline="middle",c.font=`900 50px ${Cn}`,["\u55B6","\u696D","\u4E2D"].forEach((M,L)=>c.fillText(M,44+L*84,56))}),Kt=new gt(new qe(1.95,1.05),new ke({map:At,transparent:!0,side:Pn,alphaTest:.05}));Kt.position.y=-.52,pt.add(Kt);let Pt=document.createElement("canvas");Pt.width=640,Pt.height=140;let se=new uo(Pt);se.colorSpace=Fn,se.anisotropy=4;function ye(){let c=Pt.getContext("2d"),x=640,v=140;c.clearRect(0,0,x,v),c.fillStyle="#f3e2bd",c.strokeStyle="#2a1810",c.lineWidth=10,Ks(c,6,6,x-12,v-12,16),c.fill(),c.stroke(),c.fillStyle="#3a1e0c",c.textAlign="center",c.textBaseline="middle";let M=72,L=r.name||"";for(c.font=`900 ${M}px ${Cn}`;c.measureText(L).width>x-60&&M>24;)M-=2,c.font=`900 ${M}px ${Cn}`;c.fillText(L,x/2,v/2+4),se.needsUpdate=!0}ye();{let c=new gt(new hn(3.6,.76,.12),[_e,_e,_e,_e,new ke({map:se}),_e]);c.position.set(us,2.86,Mt+.34),he.add(c)}let fe=[];for(let c of[mi-.45,gi+.45]){let x=new Me;x.position.set(c,1.95,Mt+.45),he.add(x);let v=new gt(new Ei(.28,16,12),dn("#e2452f"));v.scale.y=1.3,x.add(v),E(.26,.06,.26,dn("#2a1810"),0,.38,0,x),E(.26,.06,.26,dn("#2a1810"),0,-.38,0,x),fe.push(b(0,0,.12,2.3,.55,x))}let Re=new Me;a.add(Re);{let c=xe(128,128,(U,Z,J)=>{U.fillStyle="#2c3044",U.fillRect(0,0,Z,J);for(let ot=0;ot<J;ot+=16){U.fillStyle="#3a4058",U.fillRect(0,ot,Z,3);for(let Ft=ot/16%2*16;Ft<Z;Ft+=32)U.fillStyle="#20242f",U.fillRect(Ft,ot,2,16)}}),x=new sn({map:S(c,6,3)}),v=Math.hypot(Mt/2+.9,1.6);for(let U of[-1,1]){let Z=new gt(new hn(me+1.6,.14,v),x);Z.position.set(me/2,kn+1.5,Mt/2+U*(Mt/4+.45)),Z.rotation.x=U*Math.atan2(1.6,Mt/2+.9),Re.add(Z)}let M=new gt(new hn(me+1.7,.2,.3),ae("#1c1f2a"));M.position.set(me/2,kn+2.32,Mt/2),Re.add(M);for(let U of[-.2,me+.2]){let Z=new fn;Z.setAttribute("position",new Ee([U,kn,-.2,U,kn,Mt+.2,U,kn+2.32,Mt/2,U,kn,-.2,U,kn+.7,-.9,U,kn+2.32,Mt/2,U,kn,Mt+.2,U,kn+.7,Mt+.9,U,kn+2.32,Mt/2],3)),Z.computeVertexNormals(),Re.add(new gt(Z,new sn({color:"#4a2e1c",side:Pn})))}for(let U of[-.1,Mt+.1]){let Z=new gt(new hn(me+.4,1,.2),st);Z.position.set(me/2,kn+.5,U),Re.add(Z)}let L=new gt(new hn(me+1.4,.18,1.3),ae("#2c3044"));L.position.set(me/2,kn+.72,Mt+.75),L.rotation.x=.25,Re.add(L)}let yt=[21,33].map(c=>xe(128,256,(x,v,M)=>{let L=Us(c);x.fillStyle="#1b1636",x.fillRect(0,0,v,M);for(let U=0;U<16;U++)for(let Z=0;Z<8;Z++)x.fillStyle=L()<.33?L()<.5?"#ffd98a":"#ffbe68":"#272043",x.fillRect(Z*16+3,U*16+3,10,10)})),It=[];function z(c,x,v,M,L,U){let Z=x-c,J=(c+x)/2,ot=new Me;ot.position.set(J,0,0),a.add(ot),It.push(ot),E(Z-.2,v,Mt+1,ae(M),0,v/2,Mt/2-.4,ot);let Ft=xe(Math.round(Z*40),Math.round(v*40),(ie,Je,_n)=>{ie.fillStyle=M,ie.fillRect(0,0,Je,_n);for(let hi=0;hi<Je;hi+=12)ie.fillStyle="rgba(0,0,0,.12)",ie.fillRect(hi,0,2,_n);ie.fillStyle="#ffcf7a",ie.fillRect(Je*.18,_n-2.2*40,Je*.64,1.6*40),ie.strokeStyle="#2a1408",ie.lineWidth=4,ie.strokeRect(Je*.18,_n-2.2*40,Je*.64,1.6*40);for(let hi=1;hi<4;hi++)ie.beginPath(),ie.moveTo(Je*.18+Je*.16*hi,_n-2.2*40),ie.lineTo(Je*.18+Je*.16*hi,_n-.6*40),ie.stroke();v>4&&(ie.fillStyle="#ffd98a",ie.fillRect(Je*.25,20,Je*.2,40),ie.fillRect(Je*.55,20,Je*.2,40))}),nn=new gt(new qe(Z-.2,v),new ke({map:Ft}));nn.position.set(0,v/2,Mt+.11),ot.add(nn);let Ne=new gt(new hn(Z+.2,.2,1.4),ae("#2c3044"));if(Ne.position.set(0,Math.min(v,3.1),Mt+.7),Ne.rotation.x=.25,ot.add(Ne),L){let ie=xe(256,120,(_n,hi,Pl)=>{for(let tt=0;tt<3;tt++)_n.fillStyle=U,_n.fillRect(4+tt*84,0,80,Pl-6);_n.fillStyle="#f8ecd8",_n.textAlign="center",_n.textBaseline="middle",_n.font=`900 46px ${Cn}`,[...L].forEach((tt,ue)=>_n.fillText(tt,44+ue*84,52))}),Je=new gt(new qe(1.8,.85),new ke({map:ie,transparent:!0,side:Pn}));Je.position.set(0,2.1,Mt+.5),ot.add(Je)}b(0,1.2,Mt+.6,3.5,.35,ot)}z(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),z(-13,-6.6,3.4,"#3a4a4a","",""),z(me+.3,me+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),z(me+6.4,me+13,5.4,"#3a3a5a","","");{let c=Us(17);for(let x=-40;x<60;x+=7+c()*5){let v=8+c()*18,M=6+c()*5,L=new gt(new hn(M,v,6),[dn("#1c1736"),dn("#1c1736"),dn("#18132e"),dn("#18132e"),dn("#ffffff",{map:S(yt[c()*2|0],M/5,v/6)}),dn("#1c1736")]);L.position.set(x,v/2,-12-c()*6),a.add(L)}for(let x=-40;x<60;x+=7+c()*6){let v=5+c()*10,M=5+c()*5,L=new gt(new hn(M,v,6),[dn("#1c1736"),dn("#1c1736"),dn("#18132e"),dn("#18132e"),dn("#ffffff",{map:S(yt[c()*2|0],M/5,v/6)}),dn("#1c1736")]);L.position.set(x,v/2,Mt+22+c()*4),L.rotation.y=Math.PI,a.add(L)}}let Qt=[];function ut(c,x){let v=new Me;v.position.set(c,0,x),a.add(v),E(.3,.14,.3,ae("#3a3030"),0,.07,0,v),E(.11,4,.11,ae("#2b2422"),0,2,0,v),E(.7,.09,.09,ae("#2b2422"),0,4,0,v);let M=E(.44,.44,.44,dn("#ffe2a6"),0,3.78,0,v);Qt.push(b(0,3.78,0,4.5,.55,v));let L=new gt(new qe(6,6),new ke({map:Tr,blending:rs,transparent:!0,depthWrite:!1,opacity:.28}));L.rotation.x=-Math.PI/2,L.position.y=.03,v.add(L)}ut(-3.2,Mt+5.7),ut(me+3.2,Mt+5.7),ut(-12,Mt+5.7),ut(me+12,Mt+5.7);let Lt=[];function Rt(c,x,v){let M=new Me;M.position.set(c,0,x),M.scale.setScalar(v),a.add(M);let L=new gt(new Di(.16,.26,2.6,7),ae("#4a3024"));L.position.y=1.3,M.add(L);let U=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([Z,J,ot,Ft],nn)=>{let Ne=new gt(new Ls(Ft,1),new sn({color:U[nn%3],flatShading:!0}));Ne.position.set(Z,J,ot),M.add(Ne)}),Lt.push({x:c,z:x,y:3.2*v,r:2*v})}Rt(-6,Mt+16.5,1.1),Rt(3,Mt+17,1),Rt(13,Mt+16.6,1.15),Rt(-14,Mt+3.5,.95),Rt(me+15,Mt+3.4,1);{let c=xe(64,128,(M,L,U)=>{M.fillStyle="#c23a2a",M.fillRect(0,0,L,U),M.fillStyle="#fff3d6",M.fillRect(6,8,52,50);let Z=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let J=0;J<8;J++)M.fillStyle=Z[J%4],M.fillRect(10+J%4*12,14+Math.floor(J/4)*20,9,14);M.fillStyle="#111",M.fillRect(10,90,44,12)}),x=new Me;x.position.set(-1.4,0,Mt+.6),a.add(x);let v=new gt(new hn(.95,1.9,.75),[ae("#c23a2a"),ae("#c23a2a"),ae("#c23a2a"),ae("#c23a2a"),dn("#ffffff",{map:c}),ae("#c23a2a")]);v.position.y=.95,x.add(v),b(0,1.2,.7,2.2,.35,x)}{let c=new Me;c.position.set(me+1.8,0,Mt+5.2),a.add(c),E(1.6,.1,.5,ae("#8a5a30"),0,.5,0,c),E(1.6,.5,.08,ae("#8a5a30"),0,.8,.22,c),E(.1,.5,.4,ae("#2b2422"),-.7,.25,0,c),E(.1,.5,.4,ae("#2b2422"),.7,.25,0,c)}let re=new Me;re.position.set(me+1.5,.55,Mt+5.2),a.add(re);{let c="#e8a050",x=new gt(new Ei(.22,14,10),ae(c));x.scale.set(1.4,.7,1),re.add(x);let v=new gt(new Ei(.13,12,10),ae(c));v.position.set(.3,.05,0),re.add(v);for(let L of[-.06,.06]){let U=new gt(new si(.05,.09,4),ae(c));U.position.set(.32,.17,L),re.add(U)}let M=new gt(new Di(.035,.03,.4,6),ae(c));M.rotation.z=1.2,M.position.set(-.34,.02,.08),re.add(M)}let zt=new Me;zt.position.set(oi.x,0,oi.z),a.add(zt);{E(.1,1.5,.1,ae("#4a2a14"),-.55,.75,0,zt),E(.1,1.5,.1,ae("#4a2a14"),.55,.75,0,zt);let c=xe(256,160,(M,L,U)=>{M.fillStyle="#b8864a",M.fillRect(0,0,L,U),M.strokeStyle="#4a2a14",M.lineWidth=10,M.strokeRect(0,0,L,U);let Z=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let J=0;J<5;J++){M.save(),M.translate(40+J%3*80,44+Math.floor(J/3)*70),M.rotate((J%2?-1:1)*.12),M.fillStyle=Z[J%4],M.fillRect(-28,-22,56,44),M.fillStyle="#e2452f",M.beginPath(),M.arc(0,-18,4,0,7),M.fill(),M.fillStyle="#8a7a6a";for(let ot=0;ot<3;ot++)M.fillRect(-20,-6+ot*9,40-ot*8,3);M.restore()}M.fillStyle="#3a1e0c",M.font=`900 26px ${Cn}`,M.textAlign="right",M.fillText("\u7559\u8A00\u677F",L-14,U-14)}),x=new gt(new hn(1.3,.85,.08),[_e,_e,_e,_e,new ke({map:c}),_e]);x.position.y=1.15,zt.add(x);let v=new gt(new hn(1.5,.08,.35),ae("#2c3044"));v.position.y=1.62,v.rotation.x=.2,zt.add(v),zt.traverse(M=>{M.isMesh&&(M.userData.board=1)})}let D=[];zt.traverse(c=>{c.isMesh&&D.push(c)});let R=140,K=new Float32Array(R*3),ft=[],mt=xe(32,32,c=>{c.fillStyle="#f8c8d8",c.beginPath(),c.ellipse(16,16,12,7,.5,0,7),c.fill()}),dt=new jo(new fn,new ho({map:mt,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));dt.geometry.setAttribute("position",new Ee(K,3)),a.add(dt);function $t(c,x){let v=Lt.concat(Ut)[Math.floor(Math.random()*(Lt.length+Ut.length))]||Lt[0];K[c*3]=v.x+pi(-v.r,v.r),K[c*3+1]=x?pi(0,v.y):v.y+pi(-.3,.3),K[c*3+2]=v.z+pi(-v.r,v.r),ft[c]={vx:pi(-.2,.4),vy:pi(-.5,-.25),ph:Math.random()*7,fl:v.y}}let Ut=[],Ct=[],Te=[],wt=(c,x)=>c>=0&&c<me&&x>=0&&x<Mt,qt=(c,x)=>c>=xd&&c<_d&&x>=ay&&x<hu,oe=(c,x)=>x%2?[c.d,c.w]:[c.w,c.d];function ne(c){let x=we[c.k];if(x.L==="wall")return Wt(c);let[v,M]=oe(x,c.r),L=[];for(let U=0;U<v;U++)for(let Z=0;Z<M;Z++)L.push([c.x+U,c.z+Z]);return L}function Wt(c){let x=we[c.k],v=[];for(let M=0;M<x.w;M++)c.r===0?v.push(["b",c.x+M]):c.r===2?v.push(["f",c.x+M]):c.r===1?v.push(["l",c.z+M]):v.push(["r",c.z+M]);return v}function Ce(c){return c===0?"back":c===2?"front":c===1?"left":"right"}function ve(c,x){let v=we[c.k];for(let[M,L]of Wt(c)){let U=M==="b"||M==="f"?me:Mt;if(L<0||L>=U||M==="f"&&L>=mi-0&&L<gi)return!1;M==="f"&&L>=mi-1&&L<gi+1&&v.w>1}for(let M of Ct){if(M===x||we[M.k].L!=="wall")continue;let L=Wt(M);for(let U of Wt(c))if(L.some(Z=>Z[0]===U[0]&&Z[1]===U[1]))return!1}return!0}function Ge(c,x,v,M){for(let L of Ct)if(!(L===M||we[L.k].L!==v)&&ne(L).some(U=>U[0]===c&&U[1]===x))return L;return null}function X(c,x,v){let M=Ge(c,x,"main",v);return M&&we[M.k].sf?M:null}function Bt(c,x){let v=we[c.k];if(v.L==="wall")return ve(c,x);let M=ne(c),L=null;for(let[U,Z]of M){let J=wt(U,Z),ot=qt(U,Z);if(!J&&!ot)return!1;if(L===null)L=J;else if(L!==J)return!1;if(wl.has(U+","+Z))return!1;if(v.L==="top"){if(Ge(U,Z,"top",x))return!1;let Ft=Ge(U,Z,"main",x);if(Ft&&!we[Ft.k].sf||Ft&&Ft.k==="tank")return!1}else if(Ge(U,Z,v.L,x))return!1;if(v.L==="main"&&v.solid&&J&&Z===Mt-1&&U>=mi&&U<gi)return!1}return v.L==="main"&&v.solid,!0}function lt(c){if(we[c.k].L!=="top")return 0;let v=0;for(let[M,L]of ne(c)){let U=X(M,L);U&&(v=Math.max(v,we[U.k].sf))}return v}function j(c){let x=we[c.k];if(x.L==="wall"){let[L,U]=Wt(c)[0],Z=U+x.w/2;return L==="b"?[Z,0,.02]:L==="f"?[Z,0,Mt-.02]:L==="l"?[.02,0,Z]:[me-.02,0,Z]}let[v,M]=oe(x,c.r);return[c.x+v/2,lt(c),c.z+M/2]}let Xt=new ke({map:m,transparent:!0,depthWrite:!1,opacity:.55});function kt(c,x){let v=we[c.k];if(c.I=v,c.g=su(c.k),a.add(c.g),c.g.userData.e=c,v.L!=="wall"&&v.L!=="rug"){let[M,L]=oe(v,0),U=new gt(new qe(M*.95,L*.95),Xt);U.rotation.x=-Math.PI/2,U.position.y=.012,c.g.add(U),U.raycast=()=>{}}return c.g.traverse(M=>{M.isMesh&&(M.userData.e=c,Te.push(M))}),Ct.push(c),ge(c),x||ai(),c}function ge(c){let[x,v,M]=j(c);c.g.position.set(x,v,M),c.g.rotation.y=c.r*Math.PI/2}function Ke(c){let x=Ct.indexOf(c);x>=0&&Ct.splice(x,1),a.remove(c.g);for(let v=Te.length-1;v>=0;v--)Te[v].userData.e===c&&Te.splice(v,1);c.g.traverse(v=>{v.geometry&&v.geometry.dispose()})}function xn(c){let x=ne(c);return Ct.filter(v=>we[v.k].L==="top"&&ne(v).some(M=>x.some(L=>L[0]===M[0]&&L[1]===M[1])))}r.it.forEach(([c,x,v,M])=>{let L={k:c,x,z:v,r:M||0};Bt(L)?kt(L,!0):s&&(r.inv[c]=(r.inv[c]||0)+1)}),Ct.filter(c=>we[c.k].L==="top").forEach(ge),k(r.fl),Vt(r.wa);function de(){Ut=Ct.filter(c=>c.k==="sakura").map(c=>({x:c.g.position.x,z:c.g.position.z,y:2,r:.5}))}de();for(let c=0;c<R;c++)$t(c,1);let An=0;function mn(){return r.it=Ct.map(c=>[c.k,c.x,c.z,c.r]),r}function ai(){s&&(mn(),clearTimeout(An),An=setTimeout(()=>{try{n.save&&n.save(r)}catch{}},700),In())}let Ji=[],li=1.5,tn={};function fs(c){return tn[c]?tn[c]:tn[c]=xe(128,112,x=>{if(x.strokeStyle="#2a1810",x.lineWidth=6,x.lineJoin="round",c==="mind"||c==="zzz"){x.fillStyle=c==="zzz"?"#e8f0ff":"#efe9ff";let v=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];v.forEach(([M,L,U])=>{x.beginPath(),x.arc(M,L,U,0,7),x.stroke()}),v.forEach(([M,L,U])=>{x.beginPath(),x.arc(M,L,U,0,7),x.fill()}),x.beginPath(),x.arc(44,90,7,0,7),x.fill(),x.stroke(),x.beginPath(),x.arc(30,104,4,0,7),x.fill(),x.stroke()}else x.fillStyle=c==="idea"?"#fff0a8":c==="msg"?"#ffe0ea":"#ffffff",Ks(x,12,8,104,66,24),x.fill(),x.stroke(),x.beginPath(),x.moveTo(44,72),x.lineTo(34,100),x.lineTo(66,74),x.closePath(),x.fill(),x.stroke(),x.fillRect(46,68,18,8);if(x.fillStyle="#2a1810",x.textAlign="center",x.textBaseline="middle",c==="idea")x.font=`900 44px ${Cn}`,x.fillText("!",64,42);else if(c==="zzz")x.font=`900 30px ${Cn}`,x.fillText("z z Z",64,42);else if(c==="msg")x.font=`900 40px ${Cn}`,x.fillText("\u2709",64,42);else for(let v=0;v<3;v++)x.beginPath(),x.arc(40+v*24,42,6,0,7),x.fill()})}function Rn(c,x){return xe(512,112,L=>{L.textAlign="center",L.textBaseline="middle";let U=52;L.font=`900 ${U}px ${Cn}`;let Z=String(c||"").slice(0,16);for(;L.measureText(Z).width>432&&U>22;)U-=2,L.font=`900 ${U}px ${Cn}`;let J=Math.min(500,L.measureText(Z).width+56);L.fillStyle=x==="me"?"#2a1810e6":x==="owner"?"#7a3a14e6":"#2a2a48e0",L.strokeStyle=x==="me"?"#ffd27a":x==="owner"?"#ffb36b":"#c8c0ff",L.lineWidth=6,Ks(L,(512-J)/2,14,J,84,84/2),L.fill(),L.stroke(),L.fillStyle="#fff3d6",L.fillText(Z,512/2,112/2+2)})}function xi(c,x,v){v=v||{};let M=new Me;a.add(M);let L=new qe(1,1);L.translate(0,.5,0);let U=new ke({transparent:!0,alphaTest:.04,color:v.tint||16051952}),Z=new gt(L,U);M.add(Z);let J={grp:M,m:Z,mat:U,h0:x,h:x*li,ar:.8,w:x*li*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!v.me};u(c,Ft=>{U.map=Ft,U.needsUpdate=!0,J.ar=Ft.image.width/Ft.image.height,J.w=J.h*J.ar});let ot=new gt(new Xn(.5,16),new ke({map:m,transparent:!0,depthWrite:!1,opacity:.8}));if(ot.rotation.x=-Math.PI/2,a.add(ot),J.sh=ot,v.name){let Ft=new Jn(new Wn({map:Rn(v.name,v.nk),transparent:!0,depthTest:!1}));Ft.renderOrder=30,Ft.scale.set(2,.44,1),a.add(Ft),J.tag=Ft,J.name=v.name}if(v.bubble){let Ft=new Jn(new Wn({map:fs(v.bubble),transparent:!0,depthWrite:!1}));Ft.scale.set(.8,.7,1),a.add(Ft),J.bub=Ft,J.kind=v.bubble}return Ji.push(J),J}let jt=xi(i.me.src,1.5,{me:1,name:i.me.name||"\u6211",nk:"me"});jt.x=us,jt.z=Mt+2.6,(s&&i.startInside!==!1||i.island)&&(jt.x=us,jt.z=Mt-1.6);let ds=cs,zi=hs,nr=gd;function vi(c,x){if(c<ds||c>=zi||x<0||x>=nr||x<Mt&&(c<0||c>=me)||x>=Mt&&wl.has(c+","+x)&&c===7&&x===Mt+1)return!0;let v=Ge(c,x,"main");return!!(v&&we[v.k].solid)}let Er=(c,x,v,M)=>vi(v,M)?!1:x===Mt-1&&M===Mt||x===Mt&&M===Mt-1?c>=mi&&c<gi&&v===c:!0;function ir(c,x,v,M){c=Math.floor(c),x=Math.floor(x);let L=(J,ot)=>(J-ds)*100+ot,U=new Map;U.set(L(c,x),null);let Z=[[c,x]];for(;Z.length;){let[J,ot]=Z.shift();if(J===v&&ot===M){let Ft=[],nn=L(J,ot),Ne=J,ie=ot;for(;nn!==null;){Ft.push([Ne+.5,ie+.5]);let Je=U.get(nn);if(Je===null)break;Ne=Je[0],ie=Je[1],nn=L(Ne,ie)}return Ft.reverse()}for(let[Ft,nn]of[[1,0],[-1,0],[0,1],[0,-1]]){let Ne=J+Ft,ie=ot+nn,Je=L(Ne,ie);U.has(Je)||!Er(J,ot,Ne,ie)||(U.set(Je,[J,ot]),Z.push([Ne,ie]))}}return null}let I=.28;function q(c,x,v){let M=c>=mi+I&&c<=gi-I;if(v<Mt){if(x<Mt&&(c<I||c>me-I||x<I)||x>=Mt-I&&!M)return!1}else if(x<Mt+I&&!M||x<Mt&&!M)return!1;if(c<cs+.4||c>hs-.4||x>gd-.4||x<Mt&&(c<0||c>me))return!1;for(let[L,U]of[[-I,-I],[I,-I],[-I,I],[I,I],[0,0]]){let Z=Math.floor(c+L*.8),J=Math.floor(x+U*.8),ot=Ge(Z,J,"main");if(ot&&we[ot.k].solid||Z===7&&J===Mt+1&&Math.hypot(c-oi.x,x-oi.z)<.7)return!1}return!0}function Q(c){let x=[];if(c)for(let v=0;v<Mt;v++)for(let M=0;M<me;M++)vi(M,v)||x.push([M,v]);else for(let v=Mt+1;v<Mt+6;v++)for(let M=-6;M<me+6;M++)vi(M,v)||x.push([M,v]);return x}let et=[],$=()=>uu(la(mn())),G=Ot(Mo.filter(c=>i.walk&&i.walk[c.spr]&&c.spr!=="robot"));function Ot(c){for(let x=c.length-1;x>0;x--){let v=Math.floor(Math.random()*(x+1));[c[x],c[v]]=[c[v],c[x]]}return c}let Zt=Zi(2+$(),2,7);G.slice(0,Zt).forEach((c,x)=>{let v=xi(i.walk[c.spr],c.h,{bubble:"chat"});v.d=c,v.sp=c.sp*.8,v.kind2="npc",v.state="out",v.t=x*2.2+pi(0,1.5),v.x=cs+1,v.z=Mt+4,v.hidden=!0,et.push(v)});function te(c){let x=xi(i.me.src,1.5,{name:c.name,nk:"vis",bubble:"msg",tint:16771312});x.d={id:"v"+c.id,name:c.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},x.v=c,x.sp=1.3,x.kind2="vis",x.state="out",x.t=pi(1,6),x.x=hs-1,x.z=Mt+4,x.hidden=!0,et.push(x)}let le=null;if(!s){let c=Ct.find(M=>M.k==="register"),x=us,v=2;if(c){let M=[[c.x,c.z-1],[c.x+1,c.z],[c.x-1,c.z],[c.x,c.z+1]].find(([L,U])=>wt(L,U)&&!vi(L,U));M&&(x=M[0]+.5,v=M[1]+.5)}le=xi(i.owner&&i.owner.src||i.me.src,1.5,{name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),le.x=x,le.z=v,le.kind2="owner",le.state="sleep",le.d={name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),role:r.name},et.push(le)}function be(c){let x=c.kind2==="vis"?Math.random()<.6:Math.random()<.82,v=[];Ct.forEach(Z=>{Z.k==="register"&&v.push(...ne(Z))}),v.push([7,Mt+1]);let M=Q(x).filter(([Z,J])=>!v.some(ot=>Math.abs(ot[0]-Z)<=1&&Math.abs(ot[1]-J)<=1)&&!Ji.some(ot=>ot!==c&&!ot.hidden&&Math.floor(ot.x)===Z&&Math.floor(ot.z)===J));if(!M.length)return null;let L=M.filter(([Z,J])=>Ct.some(ot=>we[ot.k].L!=="rug"&&ne(ot).some(Ft=>Math.abs(Ft[0]-Z)+Math.abs(Ft[1]-J)===1))),U=L.length&&Math.random()<.75?L:M;return U[Math.floor(Math.random()*U.length)]}function Jt(c,x,v){let M=ir(c.x,c.z,x,v);return M&&M.length?(c.path=M,c.state="walk",!0):!1}let B={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:jt.z<Mt,cam:new F(jt.x,1,jt.z),low:{},pitch:.7,pitchT:.7},Pe=(c,x,v,M)=>{let L=document.createElement(c);return x&&(L.className=x),v!=null&&(L.innerHTML=v),(M||e).appendChild(L),L},Ze=[],rn=c=>(Ze.push(c),c),Ve=rn(Pe("div","h3info")),ee=rn(Pe("div","h3hud")),Sn=Pe("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),ze=rn(Pe("div","h3hint")),Vn=rn(Pe("div","h3toast")),Un=rn(Pe("div","h3j","<i></i>")),on=rn(Pe("div","h3card")),qn=rn(Pe("div","h3bp")),We=rn(Pe("div","h3sel")),ci=rn(Pe("div","h3top")),He=rn(Pe("div","h3pan"));function en(c){Vn.textContent=c,Vn.classList.add("on"),clearTimeout(en.t),en.t=setTimeout(()=>Vn.classList.remove("on"),2200)}function Yn(){if(B.mode==="build"){ee.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}ee.innerHTML=s?(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(i.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function In(){let c=la(mn()),x=uu(c);Ve.innerHTML=`<b>\u{1F3EE} ${pn(r.name)}</b><span class="h3st">${"\u2605".repeat(x)}${"\u2606".repeat(5-x)}</span> ${pn(du[x][1])}<br><small>\u6EAB\u99A8\u5EA6 ${c}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${er(fu(c))}`:`\u30FB\u5E97\u9577 ${pn(i.owner&&i.owner.name||"")}`}</small>`}Yn(),In(),Sn.style.display="none",Sn.querySelectorAll("button").forEach((c,x)=>{let v=x?-1:1;c.addEventListener("pointerdown",L=>{L.preventDefault(),B.camV=v;try{c.setPointerCapture(L.pointerId)}catch{}});let M=()=>{B.camV=0};c.addEventListener("pointerup",M),c.addEventListener("pointercancel",M),c.addEventListener("click",()=>{B.camV||(B.yawT+=v*.5)})});let wn=()=>t.getBoundingClientRect(),jn=new _o,To=new Et,ca=new Ti(new F(0,1,0),0),Eo=new F,Ar=(c,x)=>{let v=wn();return To.set((c-v.left)/v.width*2-1,-((x-v.top)/v.height*2-1)),To},ha=(c,x)=>{let v=wn();return{x:(c-v.left)*(t.clientWidth/v.width),y:(x-v.top)*(t.clientHeight/v.height)}},Ki=c=>{let x=c.clone().project(l),v=wn();return{x:(x.x+1)/2*v.width+v.left,y:(1-x.y)/2*v.height+v.top,z:x.z}};function ua(c,x){return jn.setFromCamera(Ar(c,x),l),jn.ray.intersectPlane(ca,Eo)?Eo.clone():null}function Ao(c,x){jn.setFromCamera(Ar(c,x),l);let v=jn.intersectObjects(Te.filter(M=>M.visible&&M.parent&&Ns(M)),!1);return v.length?v[0].object.userData.e:null}function Ns(c){let x=c;for(;x;){if(!x.visible)return!1;x=x.parent}return!0}function Tl(c,x){let v=null,M=1e9;for(let L of et){if(L.hidden)continue;let U=Ki(new F(L.x,0,L.z)),Z=Ki(new F(L.x,L.h+.3,L.z)),J=U.y-Z.y;if(J<6)continue;let ot=Math.max(J*.36,30),Ft=Math.abs(c-U.x);if(Ft<ot&&x>Z.y-14&&x<U.y+12){let nn=Ft+Math.abs(x-(U.y+Z.y)/2)*.3;nn<M&&(M=nn,v=L)}}return v}function Ro(c,x){return jn.setFromCamera(Ar(c,x),l),jn.intersectObjects(D,!1).length>0}let sr=[],Rr=[];function Co(c,x){return jn.setFromCamera(Ar(c,x),l),jn.intersectObjects(Rr,!1).length>0}let _i=new Map,Ye=null,ji=null;t.addEventListener("contextmenu",c=>c.preventDefault()),t.addEventListener("pointerdown",c=>{c.preventDefault();try{t.setPointerCapture(c.pointerId)}catch{}let x=ha(c.clientX,c.clientY);if(_i.set(c.pointerId,{x:c.clientX,y:c.clientY}),_i.size===2){let[v,M]=[..._i.values()];ji={d:Math.hypot(v.x-M.x,v.y-M.y),dist:B.distT,ang:Math.atan2(M.y-v.y,M.x-v.x),yaw:B.yawT},Ye=null,B.joy=null,Un.style.display="none",ts();return}if(Ye={id:c.pointerId,sx:x.x,sy:x.y,cx:c.clientX,cy:c.clientY,moved:0,btn:c.button,yaw0:B.yawT,pit0:B.pitchT},B.mode==="build"){let v=Ao(c.clientX,c.clientY);v&&v===B.sel&&!v.I.fixed2?Ye.dragItem=v:v&&(Ye.pickItem=v)}}),t.addEventListener("pointermove",c=>{if(_i.has(c.pointerId)&&_i.set(c.pointerId,{x:c.clientX,y:c.clientY}),ji&&_i.size>=2){let[U,Z]=[..._i.values()],J=Math.hypot(U.x-Z.x,U.y-Z.y);B.distT=Zi(ji.dist*ji.d/Math.max(20,J),6,20),B.yawT=ji.yaw-(Math.atan2(Z.y-U.y,Z.x-U.x)-ji.ang);return}if(!Ye||Ye.id!==c.pointerId)return;let x=ha(c.clientX,c.clientY),v=x.x-Ye.sx,M=x.y-Ye.sy,L=Math.hypot(v,M);if(!Ye.moved&&L>10&&(Ye.moved=1,Ye.pickItem&&B.mode==="build"&&(Oe(Ye.pickItem),Ye.dragItem=Ye.pickItem)),!!Ye.moved){if(Ye.btn===2||B.mode==="walk"||B.mode==="build"&&!Ye.dragItem){B.yawT=Ye.yaw0-v*.008,B.pitchT=Zi(Ye.pit0+M*.005,.3,1.25);return}if(B.mode==="build"&&Ye.dragItem){ti(Ye.dragItem,c.clientX,c.clientY);return}if(B.mode==="walk"){let Z=Math.min(1,L/55)/Math.max(L,1e-6);B.joy={x:v*Z,y:M*Z},B.tgt=null,Un.style.display="block",Un.style.left=Ye.sx+"px",Un.style.top=Ye.sy+"px",Un.firstChild.style.transform=`translate(${B.joy.x*55}px,${B.joy.y*55}px)`}}});let Oi=c=>{_i.delete(c.pointerId),_i.size<2&&(ji=null),!(!Ye||Ye.id!==c.pointerId)&&(Ye.moved||Io(c.clientX,c.clientY,Ye),Ye.dragItem&&ts(),Ye=null,B.joy=null,Un.style.display="none")};t.addEventListener("pointerup",Oi),t.addEventListener("pointercancel",Oi),t.addEventListener("wheel",c=>{c.preventDefault(),B.distT=Zi(B.distT+Math.sign(c.deltaY)*1.2,6,20)},{passive:!1});let rr=c=>{if(!document.contains(t)||/input|textarea/i.test(c.target&&c.target.tagName||""))return;let x=c.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(x)){if(x==="r"&&B.sel){Ii(),c.preventDefault();return}B.keys[x]=1,/^(arrow|w|a|s|d)/.test(x)&&(B.tgt=null),c.preventDefault()}},Cr=c=>{delete B.keys[c.key.toLowerCase()]};document.addEventListener("keydown",rr),document.addEventListener("keyup",Cr);function Io(c,x){if(He.classList.contains("on"))return;if(B.mode==="build"){let U=Ao(c,x);Oe(U||null);return}let v=Tl(c,x);if(v){fa(v);return}if(Rr.length&&Co(c,x)){Ci(oi.x-1,oi.z+.9,xu);return}if(Ro(c,x)){Ci(oi.x,oi.z+1,Rl);return}let M=Ao(c,x);if(M&&we[M.k].L==="top"){let U=ne(M).map(Z=>X(Z[0],Z[1])).find(Boolean);U&&U.k==="register"&&(M=U)}if(M&&M.k==="register"){Ci(M.g.position.x,M.g.position.z+1.2,()=>O(M));return}if(M&&we[M.k].L!=="rug"){let U=M.g.position;w(),_(M),B.tgt=Ri(U.x,U.z);return}w();let L=ua(c,x);L&&(B.tgt={x:L.x,z:L.z})}function Ri(c,x){let v=null,M=1e9;for(let[L,U]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let Z=c+L,J=x+U;if(q(Z,J,J<Mt?0:Mt+1)){let ot=Math.hypot(Z-jt.x,J-jt.z);ot<M&&(M=ot,v={x:Z,z:J})}}return v}function Ci(c,x,v){w();let M=Ri(c,x-1)||{x:c,z:x};B.tgt={x:M.x,z:M.z,fn:v},Math.hypot(jt.x-M.x,jt.z-M.z)<1.6&&(B.tgt=null,v())}function fa(c){w(!0),B.talk=c,c.kind2==="npc"&&(c.state="talk",c.t=0);let x=pn(c.d.name),v=pn(c.d.role||""),M="",L=wr.chat,U="";if(c.kind2==="owner")L={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},M=`<p class="h3t mind">\uFF08\u5E97\u9577 ${pn(i.owner&&i.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p><p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>`,U='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(c.kind2==="vis")L={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},M=`<p class="h3t">\u300C${pn(c.v.msg||"\u2026\u2026")}\u300D</p>${c.v.gift&&we[c.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${pn(we[c.v.gift].n)}\u300D</p>`:""}`;else{let Ft=da(c);L=wr[Ft.kind]||wr.chat,M=`<p class="h3t${Ft.kind==="mind"?" mind":""}">${Ft.kind==="mind"?"\uFF08"+pn(Ft.text)+"\uFF09":"\u300C"+pn(Ft.text)+"\u300D"}</p>`,U='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let Z=c.kind2==="npc"?i.walk[c.d.spr]:c.kind2==="owner"&&i.owner&&i.owner.src||i.me.src;on.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${Z}')"></div><div class="h3nm"><b>${x}</b><small>${v}</small></div><span class="h3k" style="background:${L.c}">${L.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${M}<div class="h3bt">${U}</div>`;let J=wn(),ot=Ki(new F(c.x,c.h*.5,c.z));on.classList.toggle("r",ot.x-J.left<J.width/2),on.classList.add("on"),c.bub&&(c.bub.visible=!1)}function da(c){let x=Ct.filter(v=>cu[v.k]&&Math.hypot(v.g.position.x-c.x,v.g.position.z-c.z)<3.2);if(x.length&&Math.random()<.5){let v=x[Math.floor(Math.random()*x.length)];return{kind:"chat",text:cu[v.k]}}return(!c.deck||!c.deck.length)&&(c.deck=Ot(c.d.lines.map(v=>({kind:v[0],text:v[1]})))),c.deck.pop()}function _(c){let x=we[c.k];B.talk=null,on.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${x.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${pn(x.n)}</b><small>\u6EAB\u99A8\u5EA6 +${x.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${pn(cu[c.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,on.classList.remove("r"),on.classList.add("on")}function w(c){on.classList.remove("on");let x=B.talk;B.talk=null,x&&x.kind2==="npc"&&x.state==="talk"&&(x.state="idle",x.t=pi(1,2.5))}function A(){if(!s)return 0;let c=n.today?n.today():Math.floor(Date.now()/864e5);return(r.cl?Zi(c-r.cl,0,3):1)*fu(la(mn()))}function O(c){if(!s){en("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let x=A();if(x<=0){en("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let v=!1;try{v=n.collect?n.collect(x):!1}catch{}if(!v){en("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}r.cl=n.today?n.today():Math.floor(Date.now()/864e5),ai(),bt(c),en(`\u6536\u5230 ${er(x)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let Y=new Jn(new Wn({map:xe(128,128,c=>{c.fillStyle="#f2c230",c.strokeStyle="#8a5a10",c.lineWidth=8,c.beginPath(),c.arc(64,64,52,0,7),c.fill(),c.stroke(),c.fillStyle="#8a5a10",c.font=`900 64px ${Cn}`,c.textAlign="center",c.textBaseline="middle",c.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));Y.renderOrder=25,Y.scale.set(.55,.55,1),a.add(Y);let ht=[];function bt(c){for(let x=0;x<8;x++){let v=Y.clone();v.material=Y.material.clone(),v.position.copy(c.g.position).add(new F(0,1.4,0)),v.userData.v=new F(pi(-1.2,1.2),pi(2.5,4),pi(-1.2,1.2)),v.userData.t=0,a.add(v),ht.push(v)}}function vt(c){if(B.mode=c,Oe(null),w(),B.tgt=null,Yn(),qn.classList.toggle("on",c==="build"),ci.classList.toggle("on",c==="build"),c!=="build"&&(Sn.style.bottom=""),Ve.style.display=c==="build"?"none":"",c==="build")ci.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",_t(),B.distT=13.5;else{if(B.distT=B.inside?10.5:13,!q(jt.x,jt.z,jt.z)){let x=Q(jt.z<Mt).sort((v,M)=>Math.hypot(v[0]+.5-jt.x,v[1]+.5-jt.z)-Math.hypot(M[0]+.5-jt.x,M[1]+.5-jt.z)).find(v=>q(v[0]+.5,v[1]+.5,v[1]));x&&(jt.x=x[0]+.5,jt.z=x[1]+.5)}ai()}}let Tt="tbl",xt={},Le=null,Ln=null,Tn=null;function Dt(c){if(xt[c])return xt[c];try{if(!Le){Le=new Xi(128,128),Ln=new _r,Ln.add(new br(16774368,8413264,2.2));let ie=new Sr(16777215,1.4);ie.position.set(2,4,3),Ln.add(ie),Tn=new zn(30,1,.05,50)}let x=su(c);Ln.add(x);let v=we[c],M=new Is().setFromObject(x),L=M.getCenter(new F),U=M.getSize(new F),J=(Math.max(U.x,U.y,U.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;Tn.position.set(L.x+J*.55,L.y+J*.45,L.z+J*.7),Tn.lookAt(L),v.L==="wall"&&(Tn.position.set(L.x+J*.25,L.y+J*.1,L.z+J*.96),Tn.lookAt(L)),o.setRenderTarget(Le),o.setClearColor(0,0),o.clear(),o.render(Ln,Tn),o.setRenderTarget(null),o.setClearColor(1709366,1);let ot=new Uint8Array(16384*4);o.readRenderTargetPixels(Le,0,0,128,128,ot);let Ft=document.createElement("canvas");Ft.width=Ft.height=128;let nn=Ft.getContext("2d"),Ne=nn.createImageData(128,128);for(let ie=0;ie<128;ie++)Ne.data.set(ot.subarray((127-ie)*512,(128-ie)*512),ie*512);for(let ie=0;ie<Ne.data.length;ie+=4)Ne.data[ie]=lu[Ne.data[ie]],Ne.data[ie+1]=lu[Ne.data[ie+1]],Ne.data[ie+2]=lu[Ne.data[ie+2]];return nn.putImageData(Ne,0,0),Ln.remove(x),x.traverse(ie=>{ie.geometry&&ie.geometry.dispose()}),xt[c]=Ft.toDataURL()}catch{return xt[c]=""}}function _t(){let c=n.coins?n.coins():0,x=dd.map(([J,ot])=>`<button class="h3tab ${Tt===J?"on":""}" type="button" data-h3="cat" data-k="${J}">${ot}</button>`).join("")+`<button class="h3tab ${Tt==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${er(c)}</span>`,v="";Tt==="reno"?v=nu.map(([J,ot,Ft])=>{let nn=r.fo[J],Ne=r.fl===J;return`<button class="h3it ${Ne?"cur":""}" type="button" data-h3="floor" data-k="${J}"><span class="ph" style="background:url(${ce("f",J)}) center/cover"></span>${pn(ot)}${Ne?'<span class="pr">\u4F7F\u7528\u4E2D</span>':nn?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${er(Ft)}</span>`}</button>`}).join("")+iu.map(([J,ot,Ft])=>{let nn=r.wo[J],Ne=r.wa===J;return`<button class="h3it ${Ne?"cur":""}" type="button" data-h3="wall" data-k="${J}"><span class="ph" style="background:url(${ce("w",J)}) center/cover"></span>${pn(ot)}${Ne?'<span class="pr">\u4F7F\u7528\u4E2D</span>':nn?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${er(Ft)}</span>`}</button>`}).join(""):v=eu.filter(J=>J.cat===Tt&&!J.fixed).map(J=>{let ot=r.inv[J.k]||0,Ft=Dt(J.k);return`<button class="h3it ${!ot&&c<J.p?"no":""}" type="button" data-h3="item" data-k="${J.k}">${ot?`<span class="ow">\xD7${ot}</span>`:""}${Ft?`<img src="${Ft}" alt="">`:'<span class="ph"></span>'}${pn(J.n)}<span class="pr">${ot?"\u62FF\u51FA\u4F86\u64FA":er(J.p)}</span></button>`}).join("");let M=qn.querySelector(".h3row"),L=M?M.scrollLeft:0,U=qn.dataset.cat===Tt;qn.innerHTML=`<div class="h3tabs">${x}</div><div class="h3row">${v}</div>`,qn.dataset.cat=Tt,U&&(qn.querySelector(".h3row").scrollLeft=L);let Z=qn.offsetHeight||150;Sn.style.bottom=Z+8+"px",We.style.bottom=Z+8+"px"}let pe={};function ce(c,x){let v=c+x;if(pe[v])return pe[v];let M;return c==="f"?M=(W[x]||W.wood)().image:M=N(x,2).image,pe[v]=M.toDataURL()}function Oe(c){if(B.sel&&B.sel!==c&&(B.sel.ok||gn(B.sel)),B.sel=c,Be.visible=!!c,We.classList.toggle("on",!!c),c){c.last={x:c.x,z:c.z,r:c.r},c.ok=!0;let x=we[c.k];We.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${x.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${x.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,je()}}function gn(c){if(!c.last)return;let x=c.last.x-c.x,v=c.last.z-c.z,M=we[c.k].sf?xn(c):[];c.x=c.last.x,c.z=c.last.z,c.r=c.last.r,ge(c),M.forEach(L=>{L.x+=x,L.z+=v,ge(L)}),c.ok=!0,je()}let Qn=xe(64,64,c=>{c.strokeStyle="#fff",c.lineWidth=6,c.strokeRect(3,3,58,58)}),Be=new gt(new qe(1,1),new ke({map:Qn,transparent:!0,depthWrite:!1,color:"#6aff8a"}));Be.rotation.x=-Math.PI/2,Be.visible=!1,Be.renderOrder=5,a.add(Be);let Xe=new gt(new qe(1,1),new ke({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));Xe.rotation.x=-Math.PI/2,Be.add(Xe),Xe.rotation.x=0,Xe.position.z=-.001;function je(){let c=B.sel;if(!c)return;let x=we[c.k],v=Bt(c,c);c.ok=v;let M=v?"#6aff8a":"#ff5a4a";if(Be.material.color.set(M),Xe.material.color.set(M),x.L==="wall"){let[U,,Z]=j(c),J=Ce(c.r);Be.scale.set(x.w,.6,1),Be.position.set(U+(J==="left"?.35:J==="right"?-.35:0),.03,Z+(J==="back"?.35:J==="front"?-.35:0)),Be.rotation.z=J==="left"||J==="right"?Math.PI/2:0}else{let[U,Z]=oe(x,c.r),[J,ot,Ft]=j(c);Be.scale.set(U,Z,1),Be.rotation.z=0,Be.position.set(J,ot+.03,Ft)}let L=We.querySelector('[data-h3="ok"]');L&&(L.disabled=!v)}function ti(c,x,v){let M=ua(x,v);if(!M)return;let L=we[c.k],U=c.x,Z=c.z;if(L.L==="wall"){let J=[[M.z,0],[M.x,1],[me-M.x,3],[Mt-M.z,2]].filter(ot=>!B.low[Ce(ot[1])]).sort((ot,Ft)=>ot[0]-Ft[0]);if(!J.length)return;c.r=J[0][1],c.r===0||c.r===2?(c.x=Zi(Math.round(M.x-L.w/2),0,me-L.w),c.z=c.r===0?0:Mt-1):(c.z=Zi(Math.round(M.z-L.w/2),0,Mt-L.w),c.x=c.r===1?0:me-1)}else{let[J,ot]=oe(L,c.r);c.x=Math.round(M.x-J/2),c.z=Math.round(M.z-ot/2)}(c.x!==U||c.z!==Z||L.L==="wall")&&(L.sf&&Qi(c,U,Z),ge(c),je())}function Qi(c,x,v){let M={x,z:v,r:c.r,k:c.k},L=ne(M);Ct.filter(U=>we[U.k].L==="top"&&ne(U).some(Z=>L.some(J=>J[0]===Z[0]&&J[1]===Z[1]))).forEach(U=>{U.x+=c.x-x,U.z+=c.z-v,ge(U)})}function ts(){B.sel&&(je(),Ct.filter(c=>we[c.k].L==="top").forEach(ge))}function Ii(){let c=B.sel;if(!c||we[c.k].L==="wall")return;let x=we[c.k].sf?xn(c):[];x.length&&(x.forEach(v=>{Ke(v),r.inv[v.k]=(r.inv[v.k]||0)+1}),en("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),c.r=(c.r+1)%4,ge(c),je()}function ps(){let c=B.sel;if(!c||we[c.k].fixed)return;(we[c.k].sf?xn(c):[]).forEach(v=>{Ke(v),r.inv[v.k]=(r.inv[v.k]||0)+1}),B.sel=null,Ke(c),r.inv[c.k]=(r.inv[c.k]||0)+1,Be.visible=!1,We.classList.remove("on"),de(),ai(),_t()}function Ir(){let c=B.sel;if(c){if(!Bt(c,c)){en("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}c.last=null,B.sel=null,Be.visible=!1,We.classList.remove("on"),de(),ai()}}function pu(c){let x=we[c],v={k:c,x:0,z:0,r:0},M=B.cam.x,L=B.cam.z,U=null,Z=1e9;if(x.L==="wall")for(let J of[0,1,3,2].filter(ot=>!B.low[Ce(ot)]))for(let ot=0;ot<10;ot++){let Ft={k:c,r:J,x:J===0||J===2?ot:J===1?0:me-1,z:J===1||J===3?ot:J===0?0:Mt-1};if(ve(Ft)){let[nn,,Ne]=j(Ft),ie=Math.hypot(nn-M,Ne-L);ie<Z&&(Z=ie,U=Ft)}}else for(let J=0;J<hu;J++)for(let ot=xd;ot<_d;ot++){let Ft={k:c,x:ot,z:J,r:0};if(!Bt(Ft))continue;let[nn,,Ne]=j(Ft),ie=wt(ot,J),Je=Math.hypot(nn-M,Ne-L)+(ie===B.inside?0:6)+(x.L==="top"&&!X(ot,J)?1.5:0);Je<Z&&(Z=Je,U=Ft)}U?Object.assign(v,U):(v.x=1,v.z=1),kt(v,!0),r.inv[c]--,r.inv[c]||delete r.inv[c],Oe(v),U||je(),de(),ai(),_t()}function El(c,x,v,M,L){let U=n.coins?n.coins():0;He.innerHTML=`<h3>\u8CB7\u4E0B\u300C${pn(v)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${er(M)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${er(U)}</b></p>${U<M?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${U<M?"disabled":""}>\u8CB7\u4E0B</button></div>`,He.classList.add("on"),He._buy=()=>{let Z=!1;try{Z=n.buy?n.buy(M,v):!1}catch{}if(!Z){en("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}He.classList.remove("on"),L()}}let Mi=null,Al=!1;function mu(c){return Mi&&!c?Promise.resolve(Mi):n.msgs?Promise.resolve(n.msgs()).then(x=>(Mi=(x||[]).slice().sort((v,M)=>(M.t||0)-(v.t||0)),Al=!1,Mi),()=>(Al=!0,Mi=[],Mi)):(Mi=[],Promise.resolve(Mi))}let Po="";function Rl(){w(),He.innerHTML=`<h3>\u{1F4DC} ${pn(r.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,He.classList.add("on"),mu(!0).then(c=>{if(!He.classList.contains("on"))return;let x=c.slice(0,30).map(M=>`<div class="msg"><b>${pn(M.name||"\u73A9\u5BB6")}</b><small>${M.t?new Date(M.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${M.gift&&we[M.gift]?` <small>\u{1F381} ${pn(we[M.gift].n)}</small>`:""}<br>${pn(M.msg||"")}</div>`).join("")||`<p style="opacity:.7">${Al?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,v="";if(s){let M=c.filter(L=>L.gift&&we[L.gift]&&!r.gc[L.id]).length;v=`<div class="h3bt">${M?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${M} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let M=n.giftSent?n.giftSent():!1;v=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${i.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${M?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...cy].map(L=>`<button type="button" data-h3="gpick" data-k="${L}" class="${Po===L?"on":""}">${L?pn(we[L].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}He.innerHTML=`<h3>\u{1F4DC} ${pn(r.name)} \u7684\u7559\u8A00\u677F</h3>${x}${v}`})}function Md(){if(i.demo){en("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),He.classList.remove("on");return}let c=He.querySelector("#h3msg"),x=(c&&c.value||"").trim().slice(0,60);if(x.length<1){en("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let v=n.giftSent&&n.giftSent()?"":Po,M=He.querySelector('[data-h3="post"]');M&&(M.disabled=!0),Promise.resolve(n.post?n.post({msg:x,gift:v}):null).then(()=>{en(v?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),Po="",Mi=null,He.classList.remove("on")},()=>{en("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),M&&(M.disabled=!1)})}function gu(){if(sr.forEach(x=>a.remove(x)),sr.length=0,Rr.length=0,!s||!Mi)return;let c=Mi.filter(x=>x.gift&&we[x.gift]&&!r.gc[x.id]);c.slice(0,5).forEach((x,v)=>{let M=new Me;M.position.set(oi.x-1.1-v%3*.55,0,oi.z+.4+Math.floor(v/3)*.5),a.add(M);let L=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][v%5],U=E(.42,.36,.42,ae(L),0,.18,0,M);E(.44,.38,.08,ae("#fff3d6"),0,.18,0,M),E(.08,.38,.44,ae("#fff3d6"),0,.18,0,M);let Z=E(.46,.08,.46,ae(L),0,.4,0,M),J=new gt(new Ei(.08,10,8),ae("#fff3d6"));J.position.y=.48,J.scale.set(1.6,.8,1),M.add(J),M.traverse(ot=>{ot.isMesh&&Rr.push(ot)}),sr.push(M),M.userData.ph=v}),c.length&&en(i.island?`\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF01`)}function xu(){if(!s||!Mi)return;let c=Mi.filter(x=>x.gift&&we[x.gift]&&!r.gc[x.id]);c.length&&(c.forEach(x=>{r.inv[x.gift]=(r.inv[x.gift]||0)+1,r.gc[x.id]=1}),ai(),gu(),He.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${c.map(x=>`<div class="msg"><b>${pn(x.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${pn(we[x.gift].n)}\u300D<br>${pn(x.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,He.classList.add("on"))}function bd(){w(),He.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u9580\u53E3\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${pn(r.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,He.classList.add("on")}let _u=c=>{let x=c.target.closest("[data-h3]");if(!x||!e.contains(x)||x.disabled)return;let v=x.dataset.h3,M=x.dataset.k;if(v==="close")w();else if(v==="more"&&B.talk)fa(B.talk);else if(v==="build")vt("build");else if(v==="done")vt("walk");else if(v==="rename")bd();else if(v==="nameok"){let L=(He.querySelector("#h3name").value||"").trim().slice(0,12);L&&(r.name=L,ye(),ai()),He.classList.remove("on")}else if(v==="board"){if(B.mode!=="walk")return;i.island?Rl():Ci(oi.x,oi.z+1,Rl)}else if(v==="claim")xu();else if(v==="exit"){if(i.island){B.exited=!0;try{n.exit&&n.exit()}catch{}}}else if(v==="pclose")He.classList.remove("on");else if(v==="post")Md();else if(v==="gpick")Po=M||"",He.querySelectorAll('[data-h3="gpick"]').forEach(L=>L.classList.toggle("on",(L.dataset.k||"")===Po));else if(v==="buyok"&&He._buy)He._buy();else if(v==="cat")Tt=M,_t();else if(v==="item"){let L=we[M];B.sel&&!B.sel.ok&&gn(B.sel),Oe(null),r.inv[M]?pu(M):El("item",M,L.n,L.p,()=>{r.inv[M]=(r.inv[M]||0)+1,pu(M)})}else if(v==="floor"){let L=nu.find(Z=>Z[0]===M),U=()=>{r.fo[M]=1,r.fl=M,k(M),ai(),_t()};r.fo[M]?U():El("floor",M,L[1],L[2],U)}else if(v==="wall"){let L=iu.find(Z=>Z[0]===M),U=()=>{r.wo[M]=1,r.wa=M,Vt(M),ai(),_t()};r.wo[M]?U():El("wall",M,L[1],L[2],U)}else v==="rot"?Ii():v==="store"?ps():v==="ok"&&Ir()};e.addEventListener("click",_u),mu().then(c=>{if(!B.dead&&s){gu();let x={};c.filter(v=>v.name&&!x[v.from||v.name]&&(x[v.from||v.name]=1)).slice(0,3).forEach(te)}});let Sd={get dead(){return B.dead},set dead(c){c&&Cl()},cv:t,dispose:Cl,data:()=>JSON.parse(JSON.stringify(mn())),probe(){let c=x=>{let v=Ki(x);return{x:Math.round(v.x),y:Math.round(v.y)}};return{mode:B.mode,inside:B.inside,calls:o.info.render.calls,tris:o.info.render.triangles,me:{x:+jt.x.toFixed(2),z:+jt.z.toFixed(2)},yaw:+B.yaw.toFixed(2),sel:B.sel?{k:B.sel.k,x:B.sel.x,z:B.sel.z,r:B.sel.r,ok:B.sel.ok}:null,items:Ct.map(x=>Object.assign({k:x.k,x:x.x,z:x.z,r:x.r},c(new F(x.g.position.x,x.g.position.y+.4,x.g.position.z)))),npcs:et.filter(x=>!x.hidden).map(x=>Object.assign({id:x.d.id||x.kind2,kind:x.kind2,state:x.state},c(new F(x.x,x.h*.5,x.z)))),board:c(new F(oi.x,1.15,oi.z)),gifts:sr.length,card:on.classList.contains("on")?on.textContent:"",pan:He.classList.contains("on")?He.textContent:"",cozy:la(mn()),inv:Object.assign({},r.inv),name:r.name,fl:r.fl,wa:r.wa,tag:jt.tag?jt.tag.visible:!1,cellPx:(x,v)=>c(new F(x,0,v))}},px(c,x,v){let M=Ki(new F(c,x,v));return{x:Math.round(M.x),y:Math.round(M.y)}},teleport(c,x){jt.x=c,jt.z=x,B.inside=x<Mt},setYaw(c){B.yaw=B.yawT=c},setDist(c){B.dist=B.distT=c}};function Cl(){if(!B.dead){if(B.dead=!0,cancelAnimationFrame(B.raf),clearTimeout(An),s)try{mn(),n.save&&n.save(r,!0)}catch{}document.removeEventListener("keydown",rr),document.removeEventListener("keyup",Cr),e.removeEventListener("click",_u),Ze.forEach(c=>c.remove()),a.traverse(c=>{c.geometry&&c.geometry.dispose(),(c.material?Array.isArray(c.material)?c.material:[c.material]:[]).forEach(v=>{v.map&&v.map.dispose(),v.dispose()})}),Le&&Le.dispose();try{o.dispose(),o.forceContextLoss()}catch{}}}let pa=0,ma=0,yu=0,ms=1,ga=0,Il=0,vu=9,Lo=new F,Bi=new F,gs=new F;function wd(c){return Math.round(Zi(1.75-(c-380)/440*.6,1.15,1.75)*20)/20}function Td(){let c=t.getBoundingClientRect(),x=Math.max(1,t.clientWidth),v=Math.max(1,t.clientHeight),M=Math.min(2,window.devicePixelRatio||1),L=wd(c.height||v);L!==li&&(li=L,Ji.forEach(U=>{U.h=U.h0*li,U.w=U.h*U.ar})),!(x===pa&&v===ma&&M===yu)&&(pa=x,ma=v,yu=M,ms=Zi(c.width*M/x,.5,2.2),ms=Math.min(ms,vu,Math.sqrt(14e5/(x*v))),o.setPixelRatio(ms),o.setSize(x,v,!1),l.aspect=x/v,l.updateProjectionMatrix())}function Mu(c,x){if(!c.path||!c.path.length)return!0;let[v,M]=c.path[0],L=v-c.x,U=M-c.z,Z=Math.hypot(L,U),J=c.sp;if(Z<.06)return c.path.shift(),!c.path.length;let ot=Math.min(Z,J*x);c.x+=L/Z*ot,c.z+=U/Z*ot,c.moving=!0,c.ph+=x*(4+J*3.2);let Ft=L*Bi.x+U*Bi.z;return Math.abs(Ft)>.05&&(c.face=Ft>0?1:-1),!1}function bu(c){if(B.dead)return;if(!document.contains(t)){Cl();return}B.raf=requestAnimationFrame(bu);let x=Math.min(.1,(c-B.last)/1e3);B.last=c,B.t+=x;let v=B.t;Td(),ga+=x,Il++,ga>1.2&&(ga/Il>.028&&ms>.55&&(ms=Math.max(.55,ms*.85),vu=ms,o.setPixelRatio(ms),o.setSize(pa,ma,!1)),ga=0,Il=0);let M=B.keys;M.q&&(B.yawT+=x*1.8),M.e&&(B.yawT-=x*1.8),B.camV&&(B.yawT+=B.camV*x*1.8),B.yaw+=(B.yawT-B.yaw)*Math.min(1,x*8),B.pitch+=(B.pitchT-B.pitch)*Math.min(1,x*8),B.dist+=(B.distT-B.dist)*Math.min(1,x*5);let L=Math.sin(B.yaw),U=Math.cos(B.yaw);if(Lo.set(-L,0,-U),Bi.set(U,0,-L),jt.moving=!1,B.mode==="walk"&&!He.classList.contains("on")){let tt=0,ue=0,De=0,yn=1e9;if(B.joy)tt=Bi.x*B.joy.x+Lo.x*-B.joy.y,ue=Bi.z*B.joy.x+Lo.z*-B.joy.y,De=Math.hypot(B.joy.x,B.joy.y);else{let vn=(M.arrowright||M.d?1:0)-(M.arrowleft||M.a?1:0),Mn=(M.arrowup||M.w?1:0)-(M.arrowdown||M.s?1:0);if(vn||Mn){let Nn=Math.hypot(vn,Mn);tt=(Bi.x*vn+Lo.x*Mn)/Nn,ue=(Bi.z*vn+Lo.z*Mn)/Nn,De=1}else if(B.tgt){if(!B.tgt.path){let ei=ir(jt.x,jt.z,Math.floor(B.tgt.x),Math.floor(B.tgt.z));B.tgt.path=ei?ei.slice(1):[],ei?B.tgt.path.length?B.tgt.path[B.tgt.path.length-1]=[B.tgt.x,B.tgt.z]:B.tgt.path=[[B.tgt.x,B.tgt.z]]:B.tgt.path=[[B.tgt.x,B.tgt.z]]}let Nn=B.tgt.path[0];if(Nn){let ei=Nn[0]-jt.x,xs=Nn[1]-jt.z,bi=Math.hypot(ei,xs);if(bi<.12){if(B.tgt.path.shift(),!B.tgt.path.length){let es=B.tgt.fn;B.tgt=null,es&&es()}}else tt=ei/bi,ue=xs/bi,De=1,yn=bi}else{let ei=B.tgt.fn;B.tgt=null,ei&&ei()}}}if(De>.05){let vn=Math.hypot(tt,ue)||1,Mn=4*Math.min(1,De),Nn=Math.min(Mn*x,yn),ei=tt/vn*Nn,xs=ue/vn*Nn,bi=!1;if(q(jt.x+ei,jt.z+xs,jt.z)?(jt.x+=ei,jt.z+=xs,bi=!0):q(jt.x+ei,jt.z,jt.z)?(jt.x+=ei,bi=!0):q(jt.x,jt.z+xs,jt.z)&&(jt.z+=xs,bi=!0),!bi&&B.tgt&&(B.tgt.stuck=(B.tgt.stuck||0)+x,B.tgt.stuck>.6)){let es=B.tgt.fn;B.tgt=null,es&&Math.hypot(jt.x-oi.x,jt.z-oi.z)<3&&es()}if(bi){jt.moving=!0,jt.ph+=x*9*Math.min(1,De);let es=tt/vn*Bi.x+ue/vn*Bi.z;Math.abs(es)>.2&&(jt.face=es>0?1:-1)}B.talk&&Math.hypot(B.talk.x-jt.x,B.talk.z-jt.z)>6&&w()}}if(i.island&&!B.exited&&jt.z>Mt+.5&&B.mode==="walk"){B.exited=!0;try{n.exit&&n.exit()}catch{}return}let Z=B.inside;B.inside=jt.z<Mt-.05,Z!==B.inside&&B.mode==="walk"&&(B.distT=B.inside?10.5:13,ze.textContent=B.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${r.name}\u300D`:"\u5E97\u5916",ze.classList.add("on"),clearTimeout(ze.t),ze.t=setTimeout(()=>ze.classList.remove("on"),1800));for(let tt of et){if(tt.moving=!1,tt.kind2==="owner")continue;if(tt.state==="talk"){tt.face=(jt.x-tt.x)*Bi.x+(jt.z-tt.z)*Bi.z>0?1:-1;continue}if(tt.state==="out"){if(tt.t-=x,tt.t<=0){let Mn=Math.random()<.5;tt.x=Mn?cs+4:hs-4,tt.z=Mt+pi(3.5,5.5),tt.hidden=!1,tt.alpha=0,tt.stops=2+Math.floor(Math.random()*3);let Nn=be(tt);(!Nn||!Jt(tt,Nn[0],Nn[1]))&&(tt.hidden=!0,tt.t=3)}continue}if(tt.alpha=Math.min(1,(tt.alpha||0)+x*2),tt.state==="walk")Mu(tt,x)&&(tt.state="idle",tt.t=pi(3,7));else if(tt.state==="idle"){if(tt.t-=x,tt.t<=0)if(tt.stops--,tt.stops<=0){let Mn=Math.random()<.5?cs+1:hs-2;Jt(tt,Mn,Mt+4)?tt.state="leave":tt.t=2}else{let Mn=be(tt);(!Mn||!Jt(tt,Mn[0],Mn[1]))&&(tt.t=2)}}else tt.state==="leave"&&(Mu(tt,x)?(tt.hidden=!0,tt.state="out",tt.t=pi(4,12)):(tt.x<cs+3||tt.x>hs-3)&&(tt.alpha=Math.max(0,Math.min(tt.alpha,Math.min(tt.x-cs,hs-tt.x)/3))));let ue=tt.x-jt.x,De=tt.z-jt.z,yn=Math.hypot(ue,De),vn=.55;if(yn<vn&&yn>.001&&tt.state!=="walk"&&tt.state!=="leave"){let Mn=tt.x+ue/yn*(vn-yn),Nn=tt.z+De/yn*(vn-yn);q(Mn,Nn,tt.z)&&(tt.x=Mn,tt.z=Nn)}}let J=jt.x,ot=jt.z,Ft=1.1;B.mode==="build"&&(B.inside?(J=me/2+L*2.2,ot=Mt/2+U*2.2):(J=us+L*2,ot=Mt+2.5+U*2),Ft=.4),B.cam.x+=(J-B.cam.x)*Math.min(1,x*(B.mode==="build"?4:12)),B.cam.z+=(ot-B.cam.z)*Math.min(1,x*(B.mode==="build"?4:12)),B.cam.y+=(Ft-B.cam.y)*Math.min(1,x*4);let nn=pa/ma,Ne=nn<1.45?1.45/nn:1,ie=B.dist*Ne,Je=B.mode==="build"?Math.max(.75,B.pitch):B.pitch;gs.set(B.cam.x+L*Math.cos(Je)*ie,B.cam.y+Math.sin(Je)*ie,B.cam.z+U*Math.cos(Je)*ie),l.position.copy(gs),l.lookAt(B.cam.x,B.cam.y+.5,B.cam.z),d.position.copy(gs);let _n=B.inside||B.mode==="build"&&B.inside;Re.visible=!_n;let hi=B.low={back:_n&&gs.z<0,front:_n&&gs.z>Mt,left:_n&&gs.x<0,right:_n&&gs.x>me};for(let tt in rt){let ue=hi[tt];for(let De of rt[tt]){let yn=ue?.14:1;De.scale.y+=(yn-De.scale.y)*Math.min(1,x*10)}}for(let tt of Ct)if(we[tt.k].L==="wall"){let ue=Ce(tt.r);tt.g.visible=!hi[ue]||!_n}he.visible=!hi.front;for(let tt of It)tt.visible=!(_n&&(hi.left&&tt.position.x<0||hi.right&&tt.position.x>me));y.intensity=T.intensity=_n?14:6;let Pl=Math.atan2(gs.x-B.cam.x,gs.z-B.cam.z);for(let tt of Ji){let ue=!tt.hidden,De=!_n&&tt.z<Mt;if(tt.grp.visible=ue,tt.sh.visible=ue,tt.tag&&(tt.tag.visible=ue&&!De),tt.bub&&(tt.bub.visible=ue&&!De&&tt!==B.talk&&tt.state!=="leave"),!ue)continue;let yn=tt.w,vn=tt.h,Mn=tt.moving?1:0,Nn=Math.sin(tt.ph),ei=Mn?Math.abs(Nn)*.06:0,xs=Mn?Nn*.06:Math.sin(v*1.6+tt.ph)*.01,bi=Mn?1+Math.cos(tt.ph*2)*.025:1+Math.sin(v*1.6+tt.ph)*.008,es=tt.state==="sleep"?Math.sin(v*1.2)*.015:0;tt.grp.position.set(tt.x,ei,tt.z),tt.m.rotation.set(0,Pl,xs*tt.face+es),tt.m.scale.set(yn*tt.face*(2-bi),vn*bi,1),tt.mat.opacity=tt.alpha==null?1:tt.alpha,tt.sh.position.set(tt.x,.025,tt.z),tt.sh.scale.set(yn*.7,yn*.4,1),tt.tag&&(tt.tag.position.set(tt.x,vn+.3,tt.z),tt.tag.material.opacity=tt.alpha==null?1:tt.alpha),tt.bub&&tt.bub.position.set(tt.x,vn+(tt.tag?.82:.45)+Math.sin(v*2.3+tt.ph)*.06,tt.z)}pt.rotation.x=Math.sin(v*1.7)*.05;for(let tt of fe)tt.material.opacity=.45+.12*Math.sin(v*6);for(let tt of Qt)tt.material.opacity=.5+.05*Math.sin(v*3+tt.parent.position.x);for(let tt of Ct){let ue=tt.g.userData;if(ue.glows)for(let De of ue.glows)De.material.opacity=(De.userData.o0||(De.userData.o0=De.material.opacity))*(.85+.15*Math.sin(v*5+tt.x*1.7));if(ue.swing&&(ue.swing.rotation.z=Math.sin(v*1.5+tt.x)*.06),ue.wave&&(ue.wave.rotation.x=-.6+Math.sin(v*4)*.5),ue.fish&&ue.fish.forEach((De,yn)=>{let vn=v*(.6+yn*.2)+yn*2;De.position.x=Math.cos(vn)*.2,De.position.z=Math.sin(vn)*.12,De.rotation.y=-vn+Math.PI/2*(yn%2?1:-1)}),ue.spin&&(ue.spin.rotation.y=v*3),ue.hands){let De=new Date;ue.hands[0].rotation.z=-(De.getHours()%12+De.getMinutes()/60)/12*Math.PI*2,ue.hands[1].rotation.z=-De.getMinutes()/60*Math.PI*2,ue.hands.forEach(yn=>{let vn=yn.rotation.z,Mn=yn.geometry.parameters.height/2;yn.position.x=-Math.sin(vn)*Mn,yn.position.y=ue.handY+Math.cos(vn)*Mn})}}for(let tt of sr)tt.position.y=Math.abs(Math.sin(v*3+tt.userData.ph))*.12;{let tt=dt.geometry.attributes.position.array;for(let ue=0;ue<R;ue++){let De=ft[ue];tt[ue*3]+=(De.vx+Math.sin(v*1.5+De.ph)*.3)*x,tt[ue*3+1]+=De.vy*x,tt[ue*3+2]+=Math.cos(v*1.2+De.ph)*.2*x,tt[ue*3+1]<.02&&$t(ue)}dt.geometry.attributes.position.needsUpdate=!0}re.children[1].rotation.z=Math.sin(v*.8)*.08,re.children[4].rotation.y=Math.sin(v*2)*.4;{let tt=s?Ct.find(De=>De.k==="register"):null,ue=tt?A():0;Y.visible=!!(tt&&ue>0&&B.mode==="walk"&&B.inside),Y.visible&&(Y.position.set(tt.g.position.x,1.75+Math.sin(v*3)*.1,tt.g.position.z),Y.material.rotation=0,Y.scale.set(.55*Math.abs(Math.cos(v*2))+.05,.55,1))}for(let tt=ht.length-1;tt>=0;tt--){let ue=ht[tt],De=ue.userData;De.t+=x,De.v.y-=9*x,ue.position.addScaledVector(De.v,x),ue.material.opacity=Math.max(0,1-De.t/1.1),De.t>1.1&&(a.remove(ue),ue.material.dispose(),ht.splice(tt,1))}B.sel&&(Be.material.opacity=.7+.3*Math.sin(v*6)),o.render(a,l)}return B.raf=requestAnimationFrame(bu),Sd}return Pd(fy);})();
